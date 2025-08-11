import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function ArticleDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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

                setArticle(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchArticle()
    }, [id])

    const handleDelete = async () => {
        if (!user) return

        if (window.confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
            try {
                const { error } = await supabase
                    .from('artikel')
                    .delete()
                    .eq('id', id)

                if (error) throw error

                navigate('/articles', { state: { message: 'Artikel berhasil dihapus' } })
            } catch (error) {
                setError(error.message)
            }
        }
    }

    if (loading) return <div className="p-4">Memuat...</div>
    if (error) return <div className="p-4 text-red-600">{error}</div>
    if (!article) return <div className="p-4">Artikel tidak ditemukan</div>

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
                Kembali
            </button>

            <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-primary-dark">{article.judul}</h1>
                {user && (
                    <div className="flex space-x-2">
                        <button
                            onClick={() => navigate(`/articles/edit/${article.id}`)}
                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Hapus
                        </button>
                    </div>
                )}
            </div>

            <p className="text-gray-500 mb-2">
                Ditulis oleh {article.penulis} pada {article.tanggal_upload} pukul {article.jam_upload}
            </p>

            {article.gambar_url && (
                <img
                    src={article.gambar_url}
                    alt={article.judul}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />
            )}

            <p className="text-lg font-semibold mb-4">{article.deskripsi}</p>

            <div className="prose max-w-none">
                <div
                    className="ql-editor"
                    dangerouslySetInnerHTML={{ __html: article.isi }}
                />
            </div>
        </div>
    )
}