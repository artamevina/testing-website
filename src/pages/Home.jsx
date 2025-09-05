import Header from '../components/Header'
import { HeroSection, NotarisSection, OfficeGallery, PPATSection, ServiceSection } from '../components/SectionUi'

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-gray-900 text-white">
                <HeroSection />
                <NotarisSection />
                <PPATSection />
                <ServiceSection />
                <OfficeGallery />

                <div className="hidden">
                    <h1>Notaris dan PPAT Terpercaya di Cirebon Jawa Barat - Jaenudin Umar, SH.</h1>
                    <h2>Layanan Notaris Cirebon Profesional</h2>
                    <p>Kantor Notaris dan PPAT Jaenudin Umar, SH. merupakan penyedia jasa notaris dan ppat terpercaya di Cirebon Jawa Barat yang melayani pembuatan akta notaris, pengurusan sertifikat tanah, legalisasi dokumen, dan konsultasi hukum.</p>

                    <h3>Mengapa Memilih Notaris Cirebon Jaenudin Umar?</h3>
                    <ul>
                        <li>Notaris Berpengalaman lebih dari 17 tahun di Cirebon</li>
                        <li>PPAT Terdaftar dan bersertifikat di Jawa Barat</li>
                        <li>Layanan lengkap notaris dan ppat dalam satu kantor</li>
                        <li>Proses cepat dan sesuai peraturan perundang-undangan</li>
                        <li>Biaya transparan untuk jasa notaris dan ppat</li>
                    </ul>

                    <h3>Layanan Notaris Cirebon</h3>
                    <p>Kami menyediakan berbagai layanan notaris di Cirebon seperti pembuatan akta notaris, legalisasi dokumen, pendirian perusahaan, dan konsultasi hukum. Sebagai notaris profesional di Cirebon, kami menjamin keabsahan dan keamanan dokumen hukum Anda.</p>

                    <h3>Layanan PPAT Cirebon</h3>
                    <p>Sebagai PPAT terpercaya di Cirebon, kami membantu pengurusan sertifikat tanah, akta jual beli, akta hibah, dan peralihan hak atas tanah lainnya. Layanan PPAT kami mencakup seluruh wilayah Cirebon dan Jawa Barat.</p>

                    <h3>Wilayah Layanan</h3>
                    <p>Kantor Notaris dan PPAT Jaenudin Umar melayani seluruh wilayah Cirebon, Jawa Barat dan sekitarnya. Kami siap membantu kebutuhan hukum dan pertanahan Anda dengan profesionalisme dan integritas.</p>

                    <p>Notaris Cirebon | PPAT Cirebon | Notaris Jawa Barat | PPAT Jawa Barat | Jaenudin Umar Notaris | Jaenudin Umar PPAT</p>
                </div>
            </div>
        </>
    )
}