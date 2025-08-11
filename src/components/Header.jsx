import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import LoginModal from './LoginModal'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await signOut()
            navigate('/')
            setMobileMenuOpen(false) // Close mobile menu after logout
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
                setMobileMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [mobileMenuOpen])

    return (
        <header className="bg-white shadow-sm fixed w-full z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to={"/"} className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-xl font-semibold text-blue-600">
                                Jaenuddin
                            </span>
                            <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Notaris & PPAT</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary-dark transition">Beranda</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary-dark transition">Tentang Saya</Link>
                        <Link to="/articles" className="text-gray-700 hover:text-primary-dark transition">Artikel</Link>

                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/articles/create"
                                    className="px-3 py-1 bg-primary-dark text-white rounded-md hover:bg-primary-light transition"
                                >
                                    Buat Artikel
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-700 hover:text-primary-dark transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setLoginModalOpen(true)}
                                className="text-gray-700 hover:text-primary-dark transition"
                            >
                                Login
                            </button>
                        )}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="mobile-menu-button p-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <Link
                    to="/"
                    className="block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Beranda
                </Link>
                <Link
                    to="/about"
                    className="block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Tentang Saya
                </Link>
                <Link
                    to="/articles"
                    className="block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Artikel
                </Link>

                {user ? (
                    <>
                        <Link
                            to="/articles/create"
                            className="block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Buat Artikel
                        </Link>
                        <button
                            onClick={() => {
                                handleLogout()
                                setMobileMenuOpen(false)
                            }}
                            className="w-full text-left block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setLoginModalOpen(true)
                            setMobileMenuOpen(false)
                        }}
                        className="w-full text-left block py-3 px-4 text-sm hover:bg-blue-50 text-gray-700"
                    >
                        Login
                    </button>
                )}
            </div>

            <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
        </header>
    )
}