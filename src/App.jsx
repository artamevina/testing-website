import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import EditArticleForm from './components/EditArticleForm'
import { AuthProvider } from './components/AuthContext'
import { WhattsappButton } from './components/SectionUi'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-blue-50 overflow-x-hidden">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/articles/edit/:id" element={<EditArticleForm />} />
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