import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            data-aos="fade-up"
        >
            <img
                src={article.gambar_url}
                alt={article.judul}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{article.tanggal_upload}</span>
                    <span className="text-sm font-medium text-secondary-dark">{article.penulis}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{article.judul}</h3>
                <p className="text-gray-600 mb-4">{article.deskripsi}</p>
                <Link
                    to={`/articles/${article.id}`}
                    className="inline-block px-4 py-2 bg-primary-light text-primary-dark rounded-md hover:bg-primary-dark hover:text-white transition"
                >
                    Baca Selengkapnya
                </Link>
            </div>
        </div>
    )
}