import { useState } from 'react'
import axios from 'axios'
import { supabase } from '../services/supabase'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function ArticleForm({ onArticleAdded }) {
    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: '',
        isi: '',
        gambar: null
    })
    const [isUploading, setIsUploading] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const [error, setError] = useState(null)

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
        ],
    }

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

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
            // Validate file type and size
            if (!file.type.match('image.*')) {
                setError('File harus berupa gambar')
                return
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError('Ukuran gambar maksimal 5MB')
                return
            }

            setFormData(prev => ({ ...prev, gambar: file }))
            setError(null)

            // Create preview
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
            // First upload image to Cloudinary if exists
            let imageUrl = ''
            if (formData.gambar) {
                const cloudName = 'du4wegspv' // Replace with your Cloudinary cloud name
                const uploadPreset = 'portofolio-notaris' // Replace with your upload preset

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

            // Prepare article data
            const now = new Date()
            const articleData = {
                judul: formData.judul,
                deskripsi: formData.deskripsi,
                isi: formData.isi,
                gambar_url: imageUrl || null,
                tanggal_upload: now.toISOString().split('T')[0],
                jam_upload: now.toTimeString().split(' ')[0],
                penulis: 'Violet Evargarde'
            }

            // Validate required fields
            if (!articleData.judul || !articleData.deskripsi || !articleData.isi) {
                throw new Error('Judul, deskripsi, dan isi artikel harus diisi')
            }

            // Save to Supabase
            const { data, error: supabaseError } = await supabase
                .from('artikel')
                .insert([articleData])
                .select()

            if (supabaseError) throw supabaseError

            if (!data || data.length === 0) {
                throw new Error('Gagal menyimpan artikel')
            }

            // Reset form
            setFormData({
                judul: '',
                deskripsi: '',
                isi: '',
                gambar: null
            })
            setPreviewImage(null)

            // Notify parent component
            onArticleAdded(data[0])

        } catch (error) {
            console.error('Error uploading article:', error)
            setError(error.message || 'Terjadi kesalahan saat mengunggah artikel')
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">Tambah Artikel Baru</h2>

            {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="judul">Judul</label>
                <input
                    type="text"
                    id="judul"
                    name="judul"
                    value={formData.judul}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="deskripsi">Deskripsi Singkat</label>
                <textarea
                    id="deskripsi"
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="isi">Isi Artikel</label>
                <ReactQuill
                    theme="snow"
                    value={formData.isi}
                    onChange={handleContentChange}
                    modules={modules}
                    formats={formats}
                    className="h-64 mb-12"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="gambar">Gambar Artikel (Opsional)</label>
                <input
                    type="file"
                    id="gambar"
                    name="gambar"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                {previewImage && (
                    <div className="mt-2">
                        <img src={previewImage} alt="Preview" className="h-32 object-cover rounded-md" />
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={isUploading}
                className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light hover:text-primary-dark transition disabled:opacity-50"
            >
                {isUploading ? 'Mengunggah...' : 'Simpan Artikel'}
            </button>
        </form>
    )
}