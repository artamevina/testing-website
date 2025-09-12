import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import EditArticleForm from './components/EditArticleForm'
import { AuthProvider } from './components/AuthContext'
import { WhattsappButton } from './components/SectionUi'
import Services from './pages/services'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-900 overflow-x-hidden">
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang-kami" element={<About />} />
              <Route path="/artikel" element={<Articles />} />
              <Route path="/layanan" element={<Services />} />
              <Route path="/artikel/:id" element={<ArticleDetail />} />
              <Route path="/artikel/edit/:id" element={<EditArticleForm />} />
            </Routes>
          </main>
          <Footer />
          <WhattsappButton />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App