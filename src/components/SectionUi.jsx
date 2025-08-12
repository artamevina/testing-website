import { Link } from "react-router-dom"
import { 
    sectionDataNotaris as sectionData, 
    sectionDataPPAT, 
    servicesData, 
    aboutData, 
    educationData, 
    organizationData,
    sectionDataVision,
} 
from "../data";
import { 
    SectionHeader, 
    LegalSection, 
    AuthoritySection, 
    ServiceCard, 
    ProfileImage,
    ProfileDescription,
    SkillsSection,
    ExperienceSection,
    EducationCard,
    OrganizationCard,
    TrainingCard,
    BankCooperation,
    VisionCard,
    MissionCard,
    ModalWhatssapp,
} 
from "./Template";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    return (
        <section className="hero-gradient pt-16 pb-12 md:pt-24 md:pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                            Notaris & PPAT <br /> <span className="text-blue-600 block md:inline">
                                Dr. Janudin Umar, SE, SH. M.Kn
                            </span>
                        </h1>
                        <h2 className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
                            Spesialis Akta & Pengurusan Dokumen Resmi di Cirebon
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-lg text-sm md:text-base">
                            Dengan pengalaman lebih dari 17 tahun, saya menyediakan layanan notaris & PPAT yang cepat, aman, dan sesuai peraturan, dengan pendekatan personal untuk setiap klien.
                        </p>
                        <div className="flex space-x-3">
                            <Link
                                to={"/about"}
                                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg transition-all text-sm md:text-base"
                            >
                                Tentang Saya
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
                <SectionHeader
                    title={sectionData.title}
                    description={sectionData.description}
                />

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {sectionData.sections.map((section, index) => (
                        <LegalSection
                            key={section.title}
                            title={section.title}
                            icon={section.icon}
                            items={section.items}
                            iconColor={section.iconColor}
                            animation={index === 0 ? "fade-right" : "fade-left"}
                        />
                    ))}
                </div>

                <AuthoritySection
                    title={sectionData.authority.title}
                    icon={sectionData.authority.icon}
                    categories={sectionData.authority.categories}
                />
            </div>
        </section>
    );
};

export const PPATSection = () => {
    return (
        <section id="ppat" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={sectionDataPPAT.title}
                    description={sectionDataPPAT.description}
                />

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {sectionDataPPAT.sections.map((section, index) => (
                        <LegalSection
                            key={section.title}
                            title={section.title}
                            icon={section.icon}
                            description={section.description}
                            items={section.items}
                            iconColor={section.iconColor}
                            animation={index === 0 ? "fade-right" : "fade-left"}
                        />
                    ))}
                </div>

                <AuthoritySection
                    title={sectionDataPPAT.authority.title}
                    icon={sectionDataPPAT.authority.icon}
                    categories={sectionDataPPAT.authority.categories}
                />
            </div>
        </section>
    );
};

export const ServiceSection = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={servicesData.title}
                    description={servicesData.description}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            icon={service.icon}
                            color={service.color}
                            description={service.description}
                            items={service.items}
                            animationDelay={service.animationDelay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const AboutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={aboutData.header.title}
                    description={aboutData.header.description}
                />

                <div className="md:flex items-center">
                    <ProfileImage
                        imageUrl={aboutData.profile.imageUrl}
                        altText={aboutData.profile.altText}
                    />

                    <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                        <ProfileDescription
                            title={aboutData.profile.title}
                            description={aboutData.profile.description}
                        />

                        <SkillsSection skills={aboutData.skills} />

                        <ExperienceSection
                            title={aboutData.experience.title}
                            items={aboutData.experience.items}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const EducationSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={educationData.header.title}
                    description={educationData.header.description}
                />

                <div className="relative pl-12 timeline">
                    <div className="mb-12 relative timeline-item" data-aos="fade-up">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">{educationData.formalEducation.title}</h3>

                        {educationData.formalEducation.items.map((item, index) => (
                            <EducationCard
                                key={index}
                                degree={item.degree}
                                institution={item.institution}
                                thesis={item.thesis}
                                badge={item.badge}
                            />
                        ))}
                    </div>

                    <div className="relative timeline-item" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">{educationData.professionalTraining.title}</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {educationData.professionalTraining.items.map((item, index) => (
                                <TrainingCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    year={item.year}
                                    icon={item.icon}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const OrganizationSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={organizationData.header.title}
                    description={organizationData.header.description}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {organizationData.organizations.map((org, index) => (
                        <OrganizationCard
                            key={index}
                            name={org.name}
                            icon={org.icon}
                            color={org.color}
                            description={org.description}
                            period={org.period}
                            role={org.role}
                            animationDelay={(index % 3 + 1) * 100}
                        />
                    ))}
                </div>

                <BankCooperation
                    title={organizationData.bankCooperation.title}
                    banks={organizationData.bankCooperation.banks}
                />
            </div>
        </section>
    );
};

export const VisionSection = () => {
    return (
        <section id="vision" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={sectionDataVision.title}
                    description={sectionDataVision.description}
                />

                <div className="grid md:grid-cols-2 gap-8">
                    <VisionCard
                        title={sectionDataVision.vision.title}
                        icon={sectionDataVision.vision.icon}
                        content={sectionDataVision.vision.content}
                        quote={sectionDataVision.vision.quote}
                        color={sectionDataVision.vision.color}
                        animation="fade-right"
                    />

                    <MissionCard
                        title={sectionDataVision.mission.title}
                        icon={sectionDataVision.mission.icon}
                        items={sectionDataVision.mission.items}
                        color={sectionDataVision.mission.color}
                        animation="fade-left"
                    />
                </div>
            </div>
        </section>
    );
};

export const OfficeSection = () => {
    const showModal = () => {
        const modal = document.getElementById('schedule-modal');
        modal.classList.remove('hidden');
    };

    const hideModal = () => {
        const modal = document.getElementById('schedule-modal');
        modal.classList.add('hidden');
    };

    const handlePurposeChange = (e) => {
        const otherContainer = document.getElementById('other-purpose-container');
        if (e.target.value === 'Lainnya') {
            otherContainer.classList.remove('hidden');
        } else {
            otherContainer.classList.add('hidden');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('visit-name').value;
        const phone = document.getElementById('visit-phone').value;
        const date = document.getElementById('visit-date').value;
        const time = document.getElementById('visit-time').value;
        const purpose = document.getElementById('visit-purpose').value;
        const otherPurpose = document.getElementById('other-purpose').value;

        const formattedDate = new Date(date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        let message = `Halo, saya ${name} ingin menjadwalkan kunjungan dengan detail sebagai berikut:\n\n`;
        message += `📅 Tanggal: ${formattedDate}\n`;
        message += `⏰ Waktu: ${time}\n`;
        message += `🎯 Tujuan: ${purpose}`;

        if (purpose === 'Lainnya' && otherPurpose) {
            message += ` - ${otherPurpose}`;
        }

        message += `\n\nSaya dapat dihubungi di nomor ini: ${phone}. Terima kasih.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '6282313931717';

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, '_blank');
        }

        hideModal();
    };

    useEffect(() => {
        const scheduleButton = document.querySelector('a[href="#contact"]');
        if (scheduleButton) {
            scheduleButton.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
        }

        const cancelButton = document.getElementById('cancel-schedule');
        if (cancelButton) {
            cancelButton.addEventListener('click', hideModal);
        }

        const confirmButton = document.getElementById('confirm-schedule');
        if (confirmButton) {
            confirmButton.addEventListener('click', handleSubmit);
        }

        const purposeSelect = document.getElementById('visit-purpose');
        if (purposeSelect) {
            purposeSelect.addEventListener('change', handlePurposeChange);
        }

        return () => {
            if (scheduleButton) scheduleButton.removeEventListener('click', showModal);
            if (cancelButton) cancelButton.removeEventListener('click', hideModal);
            if (confirmButton) confirmButton.removeEventListener('click', handleSubmit);
            if (purposeSelect) purposeSelect.removeEventListener('change', handlePurposeChange);
        };
    }, []);

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
                            <button
                                onClick={showModal}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer"
                            >
                                <i className="fas fa-calendar-alt mr-2"></i> Buat Janji Temu
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalWhatssapp />
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

export const OfficeGallery = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Kantor</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Kantor notaris yang nyaman dan profesional untuk melayani
                        kebutuhan hukum Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754987923/WhatsApp_Image_2025-08-12_at_3.37.36_PM_f2eiya.jpg"
                            alt="Gallery"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-gray-800">
                                Tampak Depan Kantor
                            </h3>
                            <p className="text-sm text-gray-600">
                                Fasad bangunan yang mudah dikenali dan strategis.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754988012/WhatsApp_Image_2025-08-12_at_3.37.36_PM_1_jvxhxo.jpg"
                            alt="Gallery"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-gray-800">
                                Papan Nama Kantor 
                            </h3>
                            <p className="text-sm text-gray-600">
                                Informasi lengkap mengenai Alamat Kantor dan Kontak
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754988140/WhatsApp_Image_2025-08-12_at_3.37.37_PM_1_ngub26.jpg"
                            alt="Gallery"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-gray-800">
                                Ruang Resepsi
                            </h3>
                            <p className="text-sm text-gray-600">
                                Desain elegan dengan kursi kulit yang nyaman.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754988167/WhatsApp_Image_2025-08-12_at_3.37.37_PM_2_etnccw.jpg"
                            alt="Gallery"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-gray-800">
                                Ruang Kerja Notaris 
                            </h3>
                            <p className="text-sm text-gray-600">
                                Area kerja resmi yang tertata rapi dan profesional.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                        data-aos="fade-up" data-aos-delay="100">
                        <img src="https://res.cloudinary.com/du4wegspv/image/upload/v1754988201/WhatsApp_Image_2025-08-12_at_3.37.38_PM_ddtgyh.jpg"
                            alt="Gallery"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-gray-800">
                                Ruang Rapat
                            </h3>
                            <p className="text-sm text-gray-600">
                                Tempat diskusi dan pertemuan klien dengan suasana kondusif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const WhattsappButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purpose, setPurpose] = useState('');
    const [showOtherPurpose, setShowOtherPurpose] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const handlePurposeChange = (e) => {
        const selectedPurpose = e.target.value;
        setPurpose(selectedPurpose);
        setShowOtherPurpose(selectedPurpose === 'Lainnya');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('visit-name');
        const phone = formData.get('visit-phone');
        const date = formData.get('visit-date');
        const time = formData.get('visit-time');
        const purpose = formData.get('visit-purpose');
        const otherPurpose = formData.get('other-purpose');

        const formattedDate = new Date(date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        let message = `Halo, saya ${name} ingin menjadwalkan kunjungan dengan detail sebagai berikut:\n\n`;
        message += `📅 Tanggal: ${formattedDate}\n`;
        message += `⏰ Waktu: ${time}\n`;
        message += `🎯 Tujuan: ${purpose}`;

        if (purpose === 'Lainnya' && otherPurpose) {
            message += ` - ${otherPurpose}`;
        }

        message += `\n\nSaya dapat dihubungi di nomor ini: ${phone}. Terima kasih.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '6282313931717';

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        window.open(url, '_blank');
        hideModal();
    };

    return (
        <>
            <button
                onClick={showModal}
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
            >
                <i className="fab fa-whatsapp text-2xl"></i>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Hubungi Kami via WhatsApp</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="visit-name">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="visit-name"
                                    name="visit-name"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="visit-phone">
                                    Nomor WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    id="visit-phone"
                                    name="visit-phone"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="visit-date">
                                    Tanggal Kunjungan
                                </label>
                                <input
                                    type="date"
                                    id="visit-date"
                                    name="visit-date"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="visit-time">
                                    Waktu Kunjungan
                                </label>
                                <input
                                    type="time"
                                    id="visit-time"
                                    name="visit-time"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="visit-purpose">
                                    Tujuan Kunjungan
                                </label>
                                <select
                                    id="visit-purpose"
                                    name="visit-purpose"
                                    className="w-full px-3 py-2 border rounded"
                                    onChange={handlePurposeChange}
                                    value={purpose}
                                    required
                                >
                                    <option value="">Pilih Tujuan</option>
                                    <option value="Konsultasi">Konsultasi</option>
                                    <option value="Meeting">Meeting</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            {showOtherPurpose && (
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="other-purpose">
                                        Tujuan Lainnya
                                    </label>
                                    <input
                                        type="text"
                                        id="other-purpose"
                                        name="other-purpose"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                            )}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={hideModal}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};