import { Link } from "react-router-dom"

export const HeroSection = () => {
    return (
        <section className="hero-gradient pt-16 pb-12 md:pt-24 md:pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                            Notaris & PPAT <br /> <span className="text-blue-600 block md:inline">Jaenudin Umar, S.H., M.Kn.</span>
                        </h1>
                        <h2 className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
                            Spesialis Akta & Pengurusan Dokumen Resmi di Cirebon
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-lg text-sm md:text-base">
                            Dengan pengalaman lebih dari 17 tahun, saya menyediakan layanan notaris & PPAT yang cepat, aman, dan sesuai peraturan, dengan pendekatan personal untuk setiap klien.
                        </p>
                        <div className="flex space-x-3">
                            <Link
                                to={"/contact"}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all text-sm md:text-base"
                            >
                                Hubungi Saya
                            </Link>
                            <Link
                                to={"/about"}
                                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg transition-all text-sm md:text-base"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/du4wegspv/image/upload/v1754906105/profile_2_lfm8lv.png"
                                alt="Photo Profile"
                                className="rounded-lg shadow-xl w-full max-w-xs md:max-w-sm h-[400px] border-4 border-white"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-1.5 rounded-full mr-2">
                                        <div className="fas fa-award text-green-600 text-sm"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold">17+ Tahun</p>
                                        <p className="text-xs text-gray-500">Pengalaman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const NotarisSection = () => {
    return (
        <section id="notaris" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Itu Notaris?</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Notaris adalah pejabat umum yang berwenang untuk membuat akta
                        otentik dan memiliki kewenangan lainnya sebagaimana dimaksud dalam Undang-Undang tentang Jabatan
                        Notaris.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="legal-section" data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <div className="fas fa-scale-balanced text-blue-600 mr-3"></div>
                            Wewenang Notaris
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Membuat akta otentik mengenai semua perbuatan, perjanjian, dan penetapan yang
                                    diharuskan oleh peraturan perundang-undangan</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Mengesahkan tanda tangan dan menetapkan kepastian tanggal surat di bawah tangan dengan
                                    mendaftar dalam buku khusus</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Menyimpan akta sebagai bagian dari minuta akta</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Memberikan salinan dan kutipan akta sesuai dengan peraturan perundang-undangan</span>
                            </li>
                        </ul>
                    </div>

                    <div className="legal-section" data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <div className="fas fa-tasks text-blue-600 mr-3"></div>
                            Tugas dan Fungsi Notaris
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Melakukan pengesahan dan legalisasi dokumen</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Memberikan nasihat hukum terkait pembuatan akta</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Menjaga kerahasiaan isi akta dan dokumen klien</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Memastikan kepastian hukum bagi para pihak yang berkepentingan</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Membuat akta yang memenuhi syarat formil dan materil</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="legal-section" data-aos="fade-up">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="fas fa-gavel text-blue-600 mr-3"></div>
                        Kewenangan Notaris
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Kewenangan Umum:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Membuat akta autentik (akta notaris) yang berkaitan dengan perbuatan hukum
                                        tertentu</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Membuat akta yang berkaitan dengan tanah (bersama PPAT)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Membuat akta yang berkaitan dengan wasiat</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Kewenangan Khusus:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Membuat akta pendirian perseroan terbatas (PT)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Membuat akta perubahan anggaran dasar perusahaan</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Membuat akta pengambilalihan saham dan merger</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const PPATSection = () => {
    return (
        <section id="ppat" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Itu PPAT?</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">PPAT (Pejabat Pembuat Akta Tanah) adalah pejabat umum yang
                        diberi kewenangan untuk membuat akta-akta autentik mengenai perbuatan hukum tertentu mengenai hak
                        atas tanah atau Hak Milik Atas Satuan Rumah Susun.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="legal-section" data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <div className="fas fa-landmark text-blue-600 mr-3"></div>
                            Pejabat Pembuat Akta Tanah (PPAT)
                        </h3>
                        <p className="text-gray-600 mb-4">PPAT adalah pejabat umum yang memiliki kewenangan khusus dalam
                            pembuatan akta-akta terkait peralihan hak atas tanah dan pendaftarannya.</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Diangkat dan diberhentikan oleh Badan Pertanahan Nasional (BPN)</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Bekerja di wilayah tertentu yang telah ditetapkan</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Bertanggung jawab kepada Kepala Kantor Pertanahan setempat</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-green-500 mt-1 mr-2"></div>
                                <span>Dapat merangkap sebagai Notaris jika memenuhi syarat</span>
                            </li>
                        </ul>
                    </div>

                    <div className="legal-section" data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <div className="fas fa-list-check text-blue-600 mr-3"></div>
                            Tugas Pokok PPAT
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Membuat akta-akta sebagai bukti telah dilakukannya perbuatan hukum tertentu mengenai
                                    hak atas tanah atau Hak Milik Atas Satuan Rumah Susun</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Mendaftarkan akta yang dibuatnya ke Kantor Pertanahan setempat untuk didaftar dalam
                                    buku tanah dan diterbitkan sertifikatnya</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Memberikan pelayanan konsultasi hukum terkait peralihan hak atas tanah</span>
                            </li>
                            <li className="flex items-start">
                                <div className="fas fa-check-circle text-blue-500 mt-1 mr-2"></div>
                                <span>Menjaga kerahasiaan dokumen dan data para pihak</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="legal-section" data-aos="fade-up">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="fas fa-user-tie text-blue-600 mr-3"></div>
                        Kewenangan PPAT
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Dalam Pembuatan Akta:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Akta Jual Beli tanah dan bangunan</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Akta Hibah tanah dan bangunan</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Akta Pembagian Hak Bersama (APHBS)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></div>
                                    <span>Akta Pemberian Hak Tanggungan</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Dalam Pendaftaran:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Mendaftarkan peralihan hak ke Kantor Pertanahan</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Melaporkan pembuatan akta ke Kantor Pertanahan</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Memverifikasi kelengkapan dokumen pendukung</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></div>
                                    <span>Memberikan informasi proses pendaftaran ke BPN</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ServiceSection = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Profesional</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan notaris dan PPAT yang saya sediakan untuk
                        memenuhi kebutuhan hukum Anda.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <div className="fas fa-file-contract text-blue-600 text-2xl"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Layanan Notaris</h3>
                        <p className="text-gray-600 mb-4">Pembuatan berbagai jenis akta otentik sesuai kebutuhan hukum Anda
                            dengan proses yang jelas dan transparan.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Akta Pendirian Perusahaan</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Akta Perubahan Anggaran Dasar</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Akta Pernyataan Waris</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Akta Kuasa</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Legalisasi Dokumen</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <div className="fas fa-landmark text-green-600 text-2xl"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Layanan PPAT</h3>
                        <p className="text-gray-600 mb-4">Pelayanan pembuatan akta terkait peralihan hak atas tanah dan bangunan
                            serta pendaftarannya ke BPN.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-blue-500 mr-2"></div>
                                <span>Akta Jual Beli Tanah/Bangunan</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-blue-500 mr-2"></div>
                                <span>Akta Hibah Tanah/Bangunan</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-blue-500 mr-2"></div>
                                <span>Akta Pembagian Hak Bersama</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-blue-500 mr-2"></div>
                                <span>Akta Pemberian Hak Tanggungan</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-blue-500 mr-2"></div>
                                <span>Pendaftaran ke Kantor Pertanahan</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <div className="fas fa-balance-scale text-blue-600 text-2xl"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Konsultasi Hukum</h3>
                        <p className="text-gray-600 mb-4">Layanan konsultasi hukum untuk membantu Anda memahami aspek legal dari
                            berbagai transaksi dan perjanjian.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Review Kontrak dan Perjanjian</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Pendirian dan Perubahan Perusahaan</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Sengketa Properti dan Tanah</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Hukum Waris dan Keluarga</span>
                            </li>
                            <li className="flex items-center">
                                <div className="fas fa-check-circle text-green-500 mr-2"></div>
                                <span>Hukum Perbankan dan Jaminan</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const AboutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil Lengkap</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Profil profesional dan pengalaman kerja sebagai Notaris dan
                        PPAT.</p>
                </div>
                <div className="md:flex items-center">
                    <div className="md:w-1/3 mb-10 md:mb-0" data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            alt="Dr. H. Ahmad Fauzi bekerja" className="rounded-lg shadow-md w-full max-w-md h-auto" />
                    </div>
                    <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tentang Saya</h3>
                        <p className="text-gray-600 mb-6">Saya adalah seorang Notaris dan PPAT yang telah berpengalaman lebih
                            dari 15 tahun dalam memberikan pelayanan hukum kepada masyarakat. Dengan latar belakang
                            pendidikan hukum yang kuat dan berbagai sertifikasi profesional, saya berkomitmen untuk
                            memberikan pelayanan terbaik dengan integritas tinggi.</p>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Keahlian Profesional</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <i className="fas fa-file-contract text-blue-600"></i>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">Pembuatan Akta Otentik</h5>
                                        <p className="text-gray-600 text-sm">Akta jual beli, hibah, perjanjian, pendirian
                                            perusahaan, dan lainnya</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                                        <i className="fas fa-landmark text-green-600"></i>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">Pelayanan PPAT</h5>
                                        <p className="text-gray-600 text-sm">Pendaftaran tanah, balik nama, pembebanan hak
                                            tanggungan</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                                        <i className="fas fa-handshake text-purple-600"></i>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">Konsultasi Hukum</h5>
                                        <p className="text-gray-600 text-sm">Konsultasi masalah hukum perdata dan bisnis</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-3 mt-1">
                                        <i className="fas fa-scale-balanced text-yellow-600"></i>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-gray-800">Legal Drafting</h5>
                                        <p className="text-gray-600 text-sm">Penyusunan kontrak dan perjanjian hukum</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Pengalaman Kerja</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-medium text-gray-800">Notaris</h5>
                                    <p className="text-gray-600 text-sm">
                                        Notaris Kabupaten Cirebon (2008 – sekarang)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800">PPAT</h5>
                                    <p className="text-gray-600 text-sm">
                                        PPAT Kabupaten Cirebon (2009 – sekarang)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800">Notaris</h5>
                                    <p className="text-gray-600 text-sm">
                                        Notaris Pembuat Akta Koperasi (2011 – sekarang)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800">Dosen Ekonomi</h5>
                                    <p className="text-gray-600 text-sm">
                                        Dosen Fakultas Ekonomi UGJ (2011 – sekarang)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800">Dosen Hukum</h5>
                                    <p className="text-gray-600 text-sm">
                                        Dosen Fakultas Hukum UGJ (2019 – sekarang)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800">Anggota</h5>
                                    <p className="text-gray-600 text-sm">
                                        Anggota Badan Penyelesaian Sengketa Konsumen (BPSK)
                                        Kota Cirebon (Periode 2010 – 2015 dan Periode 2015 – 2020)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const EducationSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Pendidikan formal dan pelatihan profesional yang telah
                        ditempuh.</p>
                </div>

                <div className="relative pl-12 timeline">
                    <div className="mb-12 relative timeline-item" data-aos="fade-up">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Pendidikan Formal</h3>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">Doktor (Dr.) Hukum</h4>
                                    <p className="text-gray-600">Universitas Indonesia, 2015</p>
                                    <p className="text-gray-600 mt-2">Disertasi: "Peran Notaris dalam Pembangunan Hukum
                                        Nasional"</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Gelar Doktor</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">Magister Kenotariatan (M.Kn.)</h4>
                                    <p className="text-gray-600">Universitas Indonesia, 2007</p>
                                    <p className="text-gray-600 mt-2">Tesis: "Aspek Hukum Pendirian PT dalam Praktek
                                        Kenotariatan"</p>
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Spesialisasi</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">Sarjana Hukum (S.H.)</h4>
                                    <p className="text-gray-600">Universitas Indonesia, 2001</p>
                                    <p className="text-gray-600 mt-2">Skripsi: "Perlindungan Hukum bagi Konsumen dalam Transaksi
                                        Properti"</p>
                                </div>
                                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Gelar
                                    Sarjana</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative timeline-item" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Pendidikan & Pelatihan Profesional</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-shield-alt text-red-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Pendidikan Lemhanas</h4>
                                        <p className="text-gray-600 text-sm">Lembaga Pertahanan Nasional</p>
                                        <p className="text-gray-500 text-sm mt-1">2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-coins text-green-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Pelatihan Akad Perbankan Syariah</h4>
                                        <p className="text-gray-600 text-sm">Perbankan Islam</p>
                                        <p className="text-gray-500 text-sm mt-1">2007</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-laptop-code text-blue-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Pelatihan OSS</h4>
                                        <p className="text-gray-600 text-sm">Online Single Submission</p>
                                        <p className="text-gray-500 text-sm mt-1">2019</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-handshake text-yellow-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Pelatihan Notaris Pembuat Akta Koperasi (NPAK)</h4>
                                        <p className="text-gray-600 text-sm">Akta Koperasi</p>
                                        <p className="text-gray-500 text-sm mt-1">2009</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-map-marked-alt text-emerald-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Peningkatan Kualitas Pejabat Pembuat Akta Tanah</h4>
                                        <p className="text-gray-600 text-sm">Sertifikasi Tanah</p>
                                        <p className="text-gray-500 text-sm mt-1">2021</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-fingerprint text-purple-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Pelatihan Grafonomi dan Verifikasi Dokumen</h4>
                                        <p className="text-gray-600 text-sm">Laboratorium Forensik Polri</p>
                                        <p className="text-gray-500 text-sm mt-1">2025</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-gavel text-indigo-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Certified Corporate Legal Expert (CCLE)</h4>
                                        <p className="text-gray-600 text-sm">Spesialis Hukum Perusahaan</p>
                                        <p className="text-gray-500 text-sm mt-1">2025</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex items-start mb-3">
                                    <div className="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                                        <i className="fas fa-file-signature text-amber-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Certified Contract Drafting Specialist (CCDS)</h4>
                                        <p className="text-gray-600 text-sm">Spesialis Penyusunan Kontrak</p>
                                        <p className="text-gray-500 text-sm mt-1">2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const OrganizationSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Riwayat Organisasi</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Aktivitas organisasi dan keanggotaan dalam berbagai asosiasi
                        profesi.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-landmark text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ikatan Notaris Indonesia</h3>
                        <p className="text-gray-600 mb-4">Ketua Ikatan Notaris Indonesia (INI) Pengurus Daerah Kabupaten Cirebon</p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2019 - 2022</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                Ketua
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-landmark text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ikatan Notaris Indonesia</h3>
                        <p className="text-gray-600 mb-4">
                            Ketua Ikatan Notaris Indonesia (INI) Pengurus Daerah Kabupaten Cirebon
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2022 - 2022</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                Ketua
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-file-contract text-green-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Ikatan Pejabat Pembuatan Akta Tanah (IPPAT)
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Ketua Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Kabupaten Cirebon
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2016 - 2019</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Ketua</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-file-contract text-green-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Ikatan Pejabat Pembuatan Akta Tanah (IPPAT)
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Ketua Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Kabupaten Cirebon
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2019 - 2022</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Ketua</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Ikatan Sarjana Ekonomi Indonesia
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Pengurus Ikatan Sarjana Ekonomi Indonesia Cabang Cirebon
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2010 - Sekarang</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                                Anggota
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <i className="fas fa-mosque text-indigo-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Notaris Muslim Indonesia
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Pengurus Notaris Muslim Indonesia Korwil Jawa Barat
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            <span>2023 - 2026</span>
                        </div>
                        <div className="mt-3">
                            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                                Anggota
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8" data-aos="fade-up">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kerjasama Perbankan</h3>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754928325/bank-tabungan-negara-btn-logo-ED226D0731-seeklogo.com_mgyfdh.png"
                                    alt="Bank BTN" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754928421/Logo_Bank_BTN_Syariah_yleypi.jpg"
                                    alt="Bank BTN Syariah" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754928659/OIP_jtrgqh.jpg"
                                    alt="BNI" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754928835/OIP_i7upgm.jpg"
                                    alt="Bank BJB" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754928961/OIP_vxtiie.jpg"
                                    alt="Bank BJB Syariah" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929035/OIP_sndsql.jpg"
                                    alt="Bank Mandiri" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929101/OIP_wmfs92.jpg"
                                    alt="Bank Syariah Indonesia" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929173/OIP_eeshst.jpg"
                                    alt="Maybank" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929218/OIP_q56dlr.jpg"
                                    alt="Bank BRI" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929281/OIP_okynpt.jpg"
                                    alt="Bank BCA" className="h-full max-h-16 object-contain" />
                            </div>

                            <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
                                <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754929382/OIP_pek7q8.jpg"
                                    alt="CIMB Bank" className="h-full max-h-16 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const VisionSection = () => {
    return (
        <section id="vision" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Prinsip dan komitmen dalam memberikan pelayanan notaris dan
                        PPAT.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200" data-aos="fade-right">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <i className="fas fa-eye text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Menjadi kantor notaris dan PPAT terdepan yang memberikan pelayanan
                            hukum profesional dengan integritas tinggi, berorientasi pada kepuasan klien, dan berkontribusi
                            pada pembangunan hukum nasional.</p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-800 italic">"Pelayanan hukum yang profesional adalah hak setiap warga
                                negara, dan kami hadir untuk mewujudkannya."</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200" data-aos="fade-left">
                        <div className="flex items-center mb-6">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <i className="fas fa-bullseye text-green-600 text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Memberikan pelayanan notaris dan PPAT yang cepat, akurat, dan sesuai dengan ketentuan
                                    hukum yang berlaku.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Menjunjung tinggi etika profesi dan integritas dalam setiap pelayanan.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan dan
                                    profesionalisme.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Berkontribusi aktif dalam pengembangan ilmu kenotariatan melalui penelitian dan
                                    pendidikan.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Meningkatkan kesadaran hukum masyarakat melalui program edukasi dan
                                    sosialisasi.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const OfficeSection = () => {
    return (
        <section className="py-12 bg-blue-50 rounded-lg mb-12" data-aos="fade-up">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-primary-dark mb-8">Kantor Notaris</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-secondary-dark">Alamat</h3>
                        <p className="text-gray-700 mb-4">
                            Jl. Tuparev Ruko CBC D.1 Cirebon <br />
                            Cirebon, Jawa Barat<br />
                            12540
                        </p>

                        <h3 className="text-xl font-semibold mb-4 text-secondary-dark">Kontak</h3>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Telepon:</span> 0231-238799
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Email:</span> jen_notaris@yahoo.co.id
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">WhatsApp:</span> 081222267776
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-secondary-dark">Jam Operasional</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                                <span>Senin - Jumat</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Minggu & Sabtu</span>
                                <span>Libur</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4 text-secondary-dark">Janji Temu</h3>
                            <p className="text-gray-700 mb-4">
                                Untuk memastikan pelayanan optimal, disarankan membuat janji temu terlebih dahulu.
                            </p>
                            <button className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light hover:text-primary-dark transition">
                                Buat Janji Temu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Saya</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Silakan hubungi saya untuk konsultasi atau informasi lebih
                        lanjut tentang layanan notaris dan PPAT.</p>
                </div>

                <div className="grid md:grid-cols-1 gap-12">
                    <div data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-1">Alamat Kantor</h4>
                                    <p className="text-gray-600">
                                        Jl. Tuparev Ruko CBC D.1 Cirebon, Jawa Barat
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-phone-alt text-green-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-1">Telepon</h4>
                                    <p className="text-gray-600">0231-238799</p>
                                    <p className="text-gray-600">081222267776 (WhatsApp)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-envelope text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                                    <p className="text-gray-600">jen_notaris@yahoo.co.id</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-clock text-green-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-1">Jam Kerja</h4>
                                    <p className="text-gray-600">Senin-Jumat: 08.00 - 17.00 WIB</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-medium text-gray-800 mb-4">Lokasi Kantor</h4>
                            <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82256131476919!3d-6.214741995493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1621234567890!5m2!1sid!2sid"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}