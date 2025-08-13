export const sectionDataNotaris = {
    title: "Apa Itu Notaris?",
    description: "Notaris adalah pejabat umum yang berwenang untuk membuat akta otentik dan memiliki kewenangan lainnya sebagaimana dimaksud dalam Undang-Undang tentang Jabatan Notaris.",
    sections: [
        {
            title: "Wewenang Notaris",
            icon: "fa-scale-balanced",
            items: [
                "Membuat akta otentik mengenai semua perbuatan, perjanjian, dan penetapan yang diharuskan oleh peraturan perundang-undangan",
                "Mengesahkan tanda tangan dan menetapkan kepastian tanggal surat di bawah tangan dengan mendaftar dalam buku khusus",
                "Menyimpan akta sebagai bagian dari minuta akta",
                "Memberikan salinan dan kutipan akta sesuai dengan peraturan perundang-undangan"
            ],
            iconColor: "text-green-500"
        },
        {
            title: "Tugas dan Fungsi Notaris",
            icon: "fa-tasks",
            items: [
                "Melakukan pengesahan dan legalisasi dokumen",
                "Memberikan nasihat hukum terkait pembuatan akta",
                "Menjaga kerahasiaan isi akta dan dokumen klien",
                "Memastikan kepastian hukum bagi para pihak yang berkepentingan",
                "Membuat akta yang memenuhi syarat formil dan materil"
            ],
            iconColor: "text-blue-500"
        }
    ],
    authority: {
        title: "Kewenangan Notaris",
        icon: "fa-gavel",
        categories: [
            {
                title: "Kewenangan Umum:",
                items: [
                    "Membuat akta autentik (akta notaris) yang berkaitan dengan perbuatan hukum tertentu",
                    "Membuat akta yang berkaitan dengan tanah (bersama PPAT)",
                    "Membuat akta yang berkaitan dengan wasiat"
                ],
                icon: "fa-circle",
                iconColor: "text-blue-500"
            },
            {
                title: "Kewenangan Khusus:",
                items: [
                    "Membuat akta pendirian perseroan terbatas (PT)",
                    "Membuat akta perubahan anggaran dasar perusahaan",
                    "Membuat akta pengambilalihan saham dan merger"
                ],
                icon: "fa-circle",
                iconColor: "text-green-500"
            }
        ]
    }
};

export const sectionDataPPAT = {
    title: "Apa Itu PPAT?",
    description: "PPAT (Pejabat Pembuat Akta Tanah) adalah pejabat umum yang diberi kewenangan untuk membuat akta-akta autentik mengenai perbuatan hukum tertentu mengenai hak atas tanah atau Hak Milik Atas Satuan Rumah Susun.",
    sections: [
        {
            title: "Pejabat Pembuat Akta Tanah (PPAT)",
            icon: "fa-landmark",
            description: "PPAT adalah pejabat umum yang memiliki kewenangan khusus dalam pembuatan akta-akta terkait peralihan hak atas tanah dan pendaftarannya.",
            items: [
                "Diangkat dan diberhentikan oleh Badan Pertanahan Nasional (BPN)",
                "Bekerja di wilayah tertentu yang telah ditetapkan",
                "Bertanggung jawab kepada Kepala Kantor Pertanahan setempat",
                "Dapat merangkap sebagai Notaris jika memenuhi syarat"
            ],
            iconColor: "text-green-500"
        },
        {
            title: "Tugas Pokok PPAT",
            icon: "fa-list-check",
            items: [
                "Membuat akta-akta sebagai bukti telah dilakukannya perbuatan hukum tertentu mengenai hak atas tanah atau Hak Milik Atas Satuan Rumah Susun",
                "Mendaftarkan akta yang dibuatnya ke Kantor Pertanahan setempat untuk didaftar dalam buku tanah dan diterbitkan sertifikatnya",
                "Memberikan pelayanan konsultasi hukum terkait peralihan hak atas tanah",
                "Menjaga kerahasiaan dokumen dan data para pihak"
            ],
            iconColor: "text-blue-500"
        }
    ],
    authority: {
        title: "Kewenangan PPAT",
        icon: "fa-user-tie",
        categories: [
            {
                title: "Dalam Pembuatan Akta:",
                items: [
                    "Akta Jual Beli tanah dan bangunan",
                    "Akta Hibah tanah dan bangunan",
                    "Akta Pembagian Hak Bersama (APHBS)",
                    "Akta Pemberian Hak Tanggungan"
                ],
                icon: "fa-circle",
                iconColor: "text-blue-500",
                smallIcon: true
            },
            {
                title: "Dalam Pendaftaran:",
                items: [
                    "Mendaftarkan peralihan hak ke Kantor Pertanahan",
                    "Melaporkan pembuatan akta ke Kantor Pertanahan",
                    "Memverifikasi kelengkapan dokumen pendukung",
                    "Memberikan informasi proses pendaftaran ke BPN"
                ],
                icon: "fa-circle",
                iconColor: "text-green-500",
                smallIcon: true
            }
        ]
    }
};

export const servicesData = {
    title: "Layanan Profesional",
    description: "Berbagai layanan notaris dan PPAT yang saya sediakan untuk memenuhi kebutuhan hukum Anda.",
    services: [
        {
            title: "Layanan Notaris",
            icon: "fa-file-contract",
            color: "blue",
            description: "Pembuatan berbagai jenis akta otentik sesuai kebutuhan hukum Anda dengan proses yang jelas dan transparan.",
            items: [
                "Akta Pendirian Perusahaan",
                "Akta Perubahan Anggaran Dasar",
                "Akta Pernyataan Waris",
                "Akta Kuasa",
                "Legalisasi Dokumen"
            ],
            animationDelay: "100"
        },
        {
            title: "Layanan PPAT",
            icon: "fa-landmark",
            color: "green",
            description: "Pelayanan pembuatan akta terkait peralihan hak atas tanah dan bangunan serta pendaftarannya ke BPN.",
            items: [
                "Akta Jual Beli Tanah/Bangunan",
                "Akta Hibah Tanah/Bangunan",
                "Akta Pembagian Hak Bersama",
                "Akta Pemberian Hak Tanggungan",
                "Pendaftaran ke Kantor Pertanahan"
            ],
            animationDelay: "200"
        },
        {
            title: "Konsultasi Hukum",
            icon: "fa-balance-scale",
            color: "blue",
            description: "Layanan konsultasi hukum untuk membantu Anda memahami aspek legal dari berbagai transaksi dan perjanjian.",
            items: [
                "Review Kontrak dan Perjanjian",
                "Pendirian dan Perubahan Perusahaan",
                "Sengketa Properti dan Tanah",
                "Hukum Waris dan Keluarga",
                "Hukum Perbankan dan Jaminan"
            ],
            animationDelay: "300"
        }
    ]
};

export const aboutData = {
    header: {
        title: "Profil Lengkap",
        description: "Profil profesional dan pengalaman kerja sebagai Notaris dan PPAT."
    },
    profile: {
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754990795/WhatsApp_Image_2025-08-12_at_4.25.52_PM_xehlet.jpg",
        altText: "Photo Profile",
        title: "Tentang Saya",
        description: "Saya adalah seorang Notaris dan PPAT yang telah berpengalaman lebih dari 17 tahun dalam memberikan pelayanan hukum kepada masyarakat. Dengan latar belakang pendidikan hukum yang kuat dan berbagai sertifikasi profesional, saya berkomitmen untuk memberikan pelayanan terbaik dengan integritas tinggi."
    },
    skills: [
        {
            icon: "fa-file-contract",
            color: "blue",
            title: "Pembuatan Akta Otentik",
            description: "Akta jual beli, hibah, perjanjian, pendirian perusahaan, dan lainnya"
        },
        {
            icon: "fa-landmark",
            color: "green",
            title: "Pelayanan PPAT",
            description: "Pendaftaran tanah, balik nama, pembebanan hak tanggungan"
        },
        {
            icon: "fa-handshake",
            color: "purple",
            title: "Konsultasi Hukum",
            description: "Konsultasi masalah hukum perdata dan bisnis"
        },
        {
            icon: "fa-scale-balanced",
            color: "yellow",
            title: "Legal Drafting",
            description: "Penyusunan kontrak dan perjanjian hukum"
        }
    ],
    experience: {
        title: "Pengalaman Kerja",
        items: [
            {
                role: "Notaris",
                details: "Notaris Kabupaten Cirebon (2008 – sekarang)"
            },
            {
                role: "PPAT",
                details: "PPAT Kabupaten Cirebon (2009 – sekarang)"
            },
            {
                role: "Notaris",
                details: "Notaris Pembuat Akta Koperasi (2011 – sekarang)"
            },
            {
                role: "Dosen Ekonomi",
                details: "Dosen Fakultas Ekonomi UGJ (2011 – sekarang)"
            },
            {
                role: "Dosen Hukum",
                details: "Dosen Fakultas Hukum UGJ (2019 – sekarang)"
            },
            {
                role: "BPSK",
                details: "Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Cirebon (Periode 2010 – 2015 dan Periode 2015 – 2020)"
            }
        ]
    }
};

export const educationData = {
    header: {
        title: "Riwayat Pendidikan",
        description: "Pendidikan formal dan pelatihan profesional yang telah ditempuh."
    },
    formalEducation: {
        title: "Pendidikan Formal",
        items: [
            {
                degree: "Sarjana Ekonomi (SE)",
            },
            {
                degree: "Magister Kenotariatan (M.Kn.)",
            },
            {
                degree: "Sarjana Hukum (SH)",
            },
            {
                degree: "Doktor (Ilmu Hukum)",
            },
        ]
    },
    professionalTraining: {
        title: "Pendidikan & Pelatihan Profesional",
        items: [
            {
                title: "Pendidikan Lemhanas",
                description: "Lembaga Pertahanan Nasional",
                year: "2018",
                icon: "fa-shield-alt",
                color: "red"
            },
            {
                title: "Pelatihan Akad Perbankan Syariah",
                description: "Perbankan Islam",
                year: "2007",
                icon: "fa-coins",
                color: "green"
            },
            {
                title: "Pelatihan OSS",
                description: "Online Single Submission",
                year: "2019",
                icon: "fa-laptop-code",
                color: "blue"
            },
            {
                title: "Pelatihan Notaris Pembuat Akta Koperasi (NPAK)",
                description: "Akta Koperasi",
                year: "2009",
                icon: "fa-handshake",
                color: "yellow"
            },
            {
                title: "Peningkatan Kualitas Pejabat Pembuat Akta Tanah",
                description: "Sertifikasi Tanah",
                year: "2021",
                icon: "fa-map-marked-alt",
                color: "emerald"
            },
            {
                title: "Pelatihan Grafonomi dan Verifikasi Dokumen",
                description: "Laboratorium Forensik Polri",
                year: "2025",
                icon: "fa-fingerprint",
                color: "purple"
            },
            {
                title: "Certified Corporate Legal Expert (CCLE)",
                description: "Spesialis Hukum Perusahaan",
                year: "2025",
                icon: "fa-gavel",
                color: "indigo"
            },
            {
                title: "Certified Contract Drafting Specialist (CCDS)",
                description: "Spesialis Penyusunan Kontrak",
                year: "2025",
                icon: "fa-file-signature",
                color: "amber"
            }
        ]
    }
};

export const organizationData = {
    header: {
        title: "Riwayat Organisasi",
        description: "Aktivitas organisasi dan keanggotaan dalam berbagai asosiasi profesi."
    },
    organizations: [
        {
            name: "Ikatan Notaris Indonesia",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001581/images_ls5amr.png",
            color: "blue",
            description: "Ketua Ikatan Notaris Indonesia (INI) Pengurus Daerah Kabupaten Cirebon",
            period: "2019 - 2022",
            role: "Ketua"
        },
        {
            name: "Ikatan Notaris Indonesia",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001581/images_ls5amr.png",
            color: "blue",
            description: "Ketua Ikatan Notaris Indonesia (INI) Pengurus Daerah Kabupaten Cirebon",
            period: "2022 - 2026",
            role: "Ketua"
        },
        {
            name: "Ikatan Pejabat Pembuatan Akta Tanah (IPPAT)",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001722/images_bcsj5x.png",
            color: "green",
            description: "Ketua Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Kabupaten Cirebon",
            period: "2016 - 2019",
            role: "Ketua"
        },
        {
            name: "Ikatan Pejabat Pembuatan Akta Tanah (IPPAT)",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001722/images_bcsj5x.png",
            color: "green",
            description: "Ketua Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Kabupaten Cirebon",
            period: "2019 - 2022",
            role: "Ketua"
        },
        {
            name: "Majelis Pengawas Daerah (MPD)",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001939/01JWZ8RR0VRFGJ6B6WZYKD550J_bejeau.png",
            color: "purple",
            description: "Majelis Pengawas Daerah Notaris Kabupaten Cirebon",
            period: "2023 - Sekarang",
            role: "Anggota"
        },  
        {
            name: "Majelis Kehormatan Daerah (MKD)",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755055578/pngtree-justice-scales-black-icon-png-image_4965913_dodyfa.png",
            color: "green",
            description: "Majelis Kehormatan Daerah Kabupaten Cirebon IPPAT",
            period: "2024 - Sekarang",
            role: "Ketua"
        },
        {
            name: "Ikatan Sarjana Ekonomi Indonesia",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001822/logo-ISEI-big_jxwmoa.png",
            color: "purple",
            description: "Pengurus Ikatan Sarjana Ekonomi Indonesia Cabang Cirebon",
            period: "2010 - Sekarang",
            role: "Anggota"
        },
        {
            name: "Notaris Muslim Indonesia",
            icon: "https://res.cloudinary.com/du4wegspv/image/upload/v1755001880/images_zfpvpj.png",
            color: "indigo",
            description: "Wakil Ketua Notaris Muslim Indonesia Korwil Jawa Barat",
            period: "2023 - 2026",
            role: "Wakil Ketua"
        }
    ],
    bankCooperation: {
        title: "Kerjasama Perbankan",
        banks: [
            {
                name: "Bank BTN",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754928325/bank-tabungan-negara-btn-logo-ED226D0731-seeklogo.com_mgyfdh.png"
            },
            {
                name: "Bank BTN Syariah",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754928421/Logo_Bank_BTN_Syariah_yleypi.jpg"
            },
            {
                name: "BNI",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754928659/OIP_jtrgqh.jpg"
            },
            {
                name: "Bank BJB",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754928835/OIP_i7upgm.jpg"
            },
            {
                name: "Bank BJB Syariah",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754928961/OIP_vxtiie.jpg"
            },
            {
                name: "Bank Mandiri",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929035/OIP_sndsql.jpg"
            },
            {
                name: "Bank Syariah Indonesia",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929101/OIP_wmfs92.jpg"
            },
            {
                name: "Maybank",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929173/OIP_eeshst.jpg"
            },
            {
                name: "Bank BRI",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929218/OIP_q56dlr.jpg"
            },
            {
                name: "Bank BCA",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929281/OIP_okynpt.jpg"
            },
            {
                name: "CIMB Bank",
                imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754929382/OIP_pek7q8.jpg"
            }
        ]
    }
};

export const sectionDataVision = {
    title: "Visi & Misi",
    description: "Prinsip dan komitmen dalam memberikan pelayanan notaris dan PPAT.",
    vision: {
        title: "Visi",
        icon: "fas fa-eye",
        content: "Menjadi kantor notaris dan PPAT terdepan yang memberikan pelayanan hukum profesional dengan integritas tinggi, berorientasi pada kepuasan klien, dan berkontribusi pada pembangunan hukum nasional.",
        quote: "\"Pelayanan hukum yang profesional adalah hak setiap warga negara, dan kami hadir untuk mewujudkannya.\"",
        color: "blue"
    },
    mission: {
        title: "Misi",
        icon: "fas fa-bullseye",
        items: [
            "Memberikan pelayanan notaris dan PPAT yang cepat, akurat, dan sesuai dengan ketentuan hukum yang berlaku.",
            "Menjunjung tinggi etika profesi dan integritas dalam setiap pelayanan.",
            "Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan dan profesionalisme.",
            "Berkontribusi aktif dalam pengembangan ilmu kenotariatan melalui penelitian dan pendidikan.",
            "Meningkatkan kesadaran hukum masyarakat melalui program edukasi dan sosialisasi."
        ],
        color: "green"
    }
};

export const galleryItems = [
    {
        id: 1,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754987923/WhatsApp_Image_2025-08-12_at_3.37.36_PM_f2eiya.jpg",
        title: "Tampak Depan Kantor",
        description: "Fasad bangunan yang mudah dikenali dan strategis."
    },
    {
        id: 2,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754988012/WhatsApp_Image_2025-08-12_at_3.37.36_PM_1_jvxhxo.jpg",
        title: "Papan Nama Kantor",
        description: "Informasi lengkap mengenai Alamat Kantor dan Kontak"
    },
    {
        id: 3,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754988140/WhatsApp_Image_2025-08-12_at_3.37.37_PM_1_ngub26.jpg",
        title: "Ruang Resepsi",
        description: "Desain elegan dengan kursi kulit yang nyaman."
    },
    {
        id: 4,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754988167/WhatsApp_Image_2025-08-12_at_3.37.37_PM_2_etnccw.jpg",
        title: "Ruang Kerja Notaris",
        description: "Area kerja resmi yang tertata rapi dan profesional."
    },
    {
        id: 5,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/v1754988201/WhatsApp_Image_2025-08-12_at_3.37.38_PM_ddtgyh.jpg",
        title: "Ruang Rapat",
        description: "Tempat diskusi dan pertemuan klien dengan suasana kondusif."
    }
];