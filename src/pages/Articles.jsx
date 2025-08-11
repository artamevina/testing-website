import { useState, useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import ArticleForm from '../components/ArticleForm'
import { supabase } from '../services/supabase'

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('artikel')
                .select('*')
                .order('tanggal_upload', { ascending: false })

            if (error) throw error

            setArticles(data || [])
        } catch (error) {
            console.error('Error fetching articles:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleAddArticle = (newArticle) => {
        setArticles(prev => [newArticle, ...prev])
        setShowForm(false)
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-primary-dark" data-aos="fade-up">
                    Artikel Notaris
                </h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light hover:text-primary-dark transition"
                    data-aos="fade-up"
                >
                    {showForm ? 'Batal' : 'Tambah Artikel'}
                </button>
            </div>

            {showForm && (
                <div className="mb-12" data-aos="fade-up">
                    <ArticleForm onArticleAdded={handleAddArticle} />
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-dark"></div>
                </div>
            ) : articles.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Belum ada artikel yang tersedia.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}
        </div>
    )
}