import { AboutSection, ContactSection, EducationSection, OrganizationSection, VisionSection } from "../components/SectionUi";

export default function About() {
    return (
        <div className="font-sans bg-gray-50 text-gray-700">
            <AboutSection />
            <EducationSection />
            <OrganizationSection />
            <VisionSection />
            <ContactSection />
        </div>
    )
}