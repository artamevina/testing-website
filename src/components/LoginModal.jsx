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
            // Save login state to localStorage
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('userEmail', email)
            onClose()
        } catch (error) {
            setError(error.message)
            // Clear any existing login state on error
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userEmail')
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>

                {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            type="button"
                            onClick={onSwitchToRegister}
                            className="text-blue-600 hover:underline"
                        >
                            Buat akun baru
                        </button>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-md"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}