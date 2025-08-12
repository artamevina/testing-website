import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { supabase } from '../services/supabase'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { SectionHeader } from './Template';

export default function EditArticleForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: '',
        isi: '',
        gambar: null,
        penulis: ''
    })
    const [isUploading, setIsUploading] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const [error, setError] = useState(null)
    const [currentImageUrl, setCurrentImageUrl] = useState('')
    const quillRef = useRef(null)

    const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean']
    ]

    const modules = {
        toolbar: {
            container: '#toolbar',
        },
        clipboard: {
            matchVisual: false
        }
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        'list', 
        'color', 'background',
        'align',
        'link', 'image'
    ];


    const getCurrentIndonesiaTime = () => {
        const now = new Date()
        const offset = 7 * 60 * 60 * 1000
        const indonesiaTime = new Date(now.getTime() + offset)

        return {
            date: indonesiaTime.toISOString().split('T')[0],
            time: indonesiaTime.toISOString().split('T')[1].split('.')[0]
        }
    }

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const { data, error } = await supabase
                    .from('artikel')
                    .select('*')
                    .eq('id', id)
                    .single()

                if (error) throw error
                if (!data) throw new Error('Artikel tidak ditemukan')

                setFormData({
                    judul: data.judul,
                    deskripsi: data.deskripsi,
                    isi: data.isi,
                    gambar: null,
                    penulis: data.penulis || ''
                })
                setCurrentImageUrl(data.gambar_url || '')
            } catch (error) {
                setError(error.message)
            }
        }

        fetchArticle()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setError(null)
    }

    const handleContentChange = (content) => {
        setFormData(prev => ({ ...prev, isi: content }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            if (!file.type.match('image.*')) {
                setError('File harus berupa gambar')
                return
            }
            if (file.size > 5 * 1024 * 1024) {
                setError('Ukuran gambar maksimal 5MB')
                return
            }

            setFormData(prev => ({ ...prev, gambar: file }))
            setError(null)

            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsUploading(true)
        setError(null)

        try {
            let imageUrl = currentImageUrl

            if (formData.gambar) {
                const cloudName = 'du4wegspv'
                const uploadPreset = 'portofolio-notaris'

                const formDataImg = new FormData()
                formDataImg.append('file', formData.gambar)
                formDataImg.append('upload_preset', uploadPreset)

                const uploadResponse = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                    formDataImg,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )

                if (!uploadResponse.data.secure_url) {
                    throw new Error('Gagal mengunggah gambar ke Cloudinary')
                }

                imageUrl = uploadResponse.data.secure_url
            }

            if (!formData.judul || !formData.deskripsi || !formData.isi) {
                throw new Error('Judul, deskripsi, dan isi artikel harus diisi')
            }

            const indonesiaTime = getCurrentIndonesiaTime()

            const { data, error: supabaseError } = await supabase
                .from('artikel')
                .update({
                    judul: formData.judul,
                    deskripsi: formData.deskripsi,
                    isi: formData.isi,
                    gambar_url: imageUrl || null,
                    penulis: formData.penulis || 'Violet Evargarde',
                    tanggal_update: indonesiaTime.date,
                    jam_update: indonesiaTime.time
                })
                .eq('id', id)
                .select()

            if (supabaseError) throw supabaseError

            if (!data || data.length === 0) {
                throw new Error('Gagal memperbarui artikel')
            }

            navigate(`/articles/${id}`, { state: { message: 'Artikel berhasil diperbarui' } })

        } catch (error) {
            console.error('Error updating article:', error)
            setError(error.message || 'Terjadi kesalahan saat memperbarui artikel')
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
            <SectionHeader 
                title={"Form Artikel"}
                description={"Buat atau edit artikel untuk ditampilkan di website"}
            />

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-1 text-sm font-medium" htmlFor="judul">Judul Artikel</label>
                        <input
                            type="text"
                            id="judul"
                            name="judul"
                            value={formData.judul}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            required
                            placeholder="Masukkan judul artikel"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 text-sm font-medium" htmlFor="penulis">Nama Penulis</label>
                        <input
                            type="text"
                            id="penulis"
                            name="penulis"
                            value={formData.penulis}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            placeholder="Masukkan nama penulis"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-1 text-sm font-medium" htmlFor="deskripsi">Deskripsi Singkat</label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            required
                            placeholder="Masukkan deskripsi singkat artikel"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-sm font-medium">Isi Artikel</label>

                    <div id="toolbar" className="border border-gray-300 rounded-t-md bg-gray-50 p-1">
                        {toolbarOptions.map((group, groupIndex) => (
                            <span key={`group-${groupIndex}`} className="ql-formats">
                                {group.map((item, itemIndex) => {
                                    if (typeof item === 'object') {
                                        const [key, value] = Object.entries(item)[0]
                                        if (Array.isArray(value)) {
                                            return (
                                                <select key={`select-${groupIndex}-${itemIndex}`} className={`ql-${key}`} defaultValue="">
                                                    {value.map((option, optionIndex) => (
                                                        <option key={`option-${groupIndex}-${itemIndex}-${optionIndex}`} value={option}>
                                                            {typeof option === 'string' ? option.charAt(0).toUpperCase() + option.slice(1) : option}
                                                        </option>
                                                    ))}
                                                </select>
                                            )
                                        }
                                        return null
                                    }
                                    return (
                                        <button key={`button-${groupIndex}-${itemIndex}`} className={`ql-${item}`}></button>
                                    )
                                })}
                            </span>
                        ))}
                    </div>

                    <div className="border border-gray-300 border-t-0 rounded-b-md overflow-hidden">
                        <ReactQuill
                            ref={quillRef}
                            theme="snow"
                            value={formData.isi}
                            onChange={handleContentChange}
                            modules={modules}
                            formats={formats}
                            placeholder="Tulis isi artikel di sini..."
                            style={{ height: '300px' }}
                            className="text-sm"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-sm font-medium" htmlFor="gambar">
                        Gambar Artikel <span className="text-gray-500 font-normal">(Opsional)</span>
                    </label>
                    <div className="flex items-center gap-3">
                        <div className="flex-1">
                            <input
                                type="file"
                                id="gambar"
                                name="gambar"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full text-xs text-gray-500
                                file:mr-3 file:py-1.5 file:px-3
                                file:rounded-md file:border-0
                                file:text-xs file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                            />
                        </div>
                        {previewImage ? (
                            <div className="flex-shrink-0">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="h-12 w-12 object-cover rounded-md border border-gray-200"
                                />
                            </div>
                        ) : currentImageUrl ? (
                            <div className="flex-shrink-0">
                                <img
                                    src={currentImageUrl}
                                    alt="Current"
                                    className="h-12 w-12 object-cover rounded-md border border-gray-200"
                                />
                            </div>
                        ) : null}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                        Format: JPG, PNG (Maksimal 5MB)
                    </p>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={isUploading}
                        className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 text-sm"
                    >
                        {isUploading ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Menyimpan...
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Simpan
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}