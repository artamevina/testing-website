import { useState } from 'react'
import { useAuth } from './AuthContext'

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signIn } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('userEmail', email)
            onClose()
        } catch (error) {
            setError(error.message)
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userEmail')
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gold-500">
                <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>

                {error && <div className="mb-4 p-2 bg-red-900 text-red-300 rounded-md">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}