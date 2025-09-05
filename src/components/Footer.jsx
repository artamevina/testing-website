export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gold-500 mb-2">
              Dr. Jaenudin Umar, SE, SH. M.Kn
            </h2>
            <p className="text-gray-400">Notaris & PPAT Cirebon Jawa Barat</p>
            <p className="text-gray-400 mt-2">Melayani dengan profesionalisme dan integritas</p>
            <p className="text-gray-400 mt-2">Cirebon Bisnis Center (CBC) Blok D Nomor 01 - Jln. Tuparev - Cirebon - Jawa Barat</p>

            <div className="mt-4 text-sm text-gray-500">
              <p>Notaris Cirebon | PPAT Cirebon | Notaris Jawa Barat | PPAT Jawa Barat | Jasa Notaris Terpercaya</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li><a href="/services#notaris" className="text-gray-400 hover:text-gold-400 transition">Notaris Cirebon</a></li>
              <li><a href="/services#ppat" className="text-gray-400 hover:text-gold-400 transition">PPAT Cirebon</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-gold-400 transition">Konsultasi Hukum</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-gold-400 transition">Legalisasi Dokumen</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-gold-400 transition">Pendirian Perusahaan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-400">
              <p><i className="fas fa-phone-alt mr-2 text-gold-500"></i> (0231) 238799</p>
              <p><i className="fab fa-whatsapp mr-2 text-gold-500"></i> 081222267776</p>
              <p><i className="fas fa-envelope mr-2 text-gold-500"></i> jaenudinumar@gmail.com</p>
              <p><i className="fas fa-map-marker-alt mr-2 text-gold-500"></i> Cirebon, Jawa Barat</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kantor Notaris & PPAT Dr. Jaenudin Umar, Cirebon Jawa Barat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}