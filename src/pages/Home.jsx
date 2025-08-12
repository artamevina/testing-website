import { HeroSection, NotarisSection, OfficeGallery, PPATSection, ServiceSection } from '../components/SectionUi'

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <HeroSection />
            <NotarisSection />
            <PPATSection />
            <ServiceSection />
            <OfficeGallery />

            <div className="hidden">
                <h1>Notaris Cirebon | PPAT Cirebon | Dr. Janudin Umar, SH., M.Kn</h1>
                <p>Kantor Notaris dan PPAT terpercaya di Cirebon menyediakan layanan pembuatan akta notaris, pengurusan sertifikat tanah, legalisasi dokumen, dan konsultasi hukum.</p>
                <ul>
                    <li>Notaris Cirebon</li>
                    <li>PPAT Cirebon</li>
                    <li>Notaris terbaik di Cirebon</li>
                    <li>Jasa notaris wilayah Cirebon</li>
                    <li>Pembuatan akta notaris Cirebon</li>
                    <li>Pengurusan sertifikat tanah Cirebon</li>
                </ul>
            </div>
        </div>
    )
}