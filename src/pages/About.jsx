import { AboutSection, ContactSection, EducationSection, OfficeSection, OrganizationSection, VisionSection } from "../components/SectionUi";

export default function About() {
    return (
        <div className="font-sans bg-gray-50 text-gray-700">
            <AboutSection />
            <EducationSection />
            <OrganizationSection />
            <VisionSection />
            <OfficeSection />
            <ContactSection />
        </div>
    )
}