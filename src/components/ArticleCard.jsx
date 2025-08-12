import { Link } from 'react-router-dom'

export default function ArticleCard({ article, darkMode = false }) {
    const displayDate = article.tanggal_update || article.tanggal_upload
    const displayTime = article.jam_update || article.jam_upload
    const isUpdated = !!article.tanggal_update

    return (
        <div
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-xl shadow-md overflow-hidden article-card hover:shadow-lg transition-shadow duration-300 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <Link to={`/articles/${article.id}`} className="block">
                <img
                    src={article.gambar_url}
                    alt={`Artikel Notaris Cirebon - ${article.judul}`}
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    onError={(e) => {
                        e.target.src = 'https://res.cloudinary.com/du4wegspv/image/upload/v1754958645/OIP_lrnn0v.jpg'
                    }}
                />
            </Link>
            <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3 gap-2">
                    <span className={`${darkMode ? 'bg-gray-700 text-gold-400' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded-full text-xs`}>
                        {article.penulis}
                    </span>
                    <span className={`${darkMode ? 'text-gray-600' : 'text-gray-300'} hidden sm:inline`}>•</span>
                    <span className="flex items-center">
                        {isUpdated ? (
                            <span className="flex items-center">
                                <i className="fas fa-sync-alt mr-1 text-xs"></i>
                                {displayDate}
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <i className="far fa-calendar-alt mr-1 text-xs"></i>
                                {displayDate}
                            </span>
                        )}
                    </span>
                </div>
                <Link to={`/articles/${article.id}`}>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white hover:text-gold-400' : 'text-gray-800 hover:text-blue-600'} mb-3 transition-colors line-clamp-2`}>
                        {article.judul}
                    </h3>
                </Link>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-3`}>{article.deskripsi}</p>
                <div className="flex justify-between items-center">
                    <Link
                        to={`/articles/${article.id}`}
                        className={`${darkMode ? 'text-gold-500 hover:text-gold-400' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center transition-colors group`}
                    >
                        Baca Selengkapnya
                        <i className={`fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1 ${darkMode ? 'text-gold-400' : ''}`}></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}