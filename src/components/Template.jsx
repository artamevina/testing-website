export const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
);

export const LegalSection = ({ title, icon, items, iconColor, animation }) => (
    <div className="legal-section" data-aos={animation}>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <div className={`fas ${icon} text-blue-600 mr-3`}></div>
            {title}
        </h3>
        <ul className="space-y-3 text-gray-600">
            {items.map((item) => (
                <ListItem
                    key={item}
                    text={item}
                    icon="fa-check-circle"
                    iconColor={iconColor}
                />
            ))}
        </ul>
    </div>
);

export const AuthoritySection = ({ title, icon, categories }) => (
    <div className="legal-section" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <div className={`fas ${icon} text-blue-600 mr-3`}></div>
            {title}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
                <div key={category.title}>
                    <h4 className="font-medium text-gray-800 mb-2">{category.title}</h4>
                    <ul className="space-y-2 text-gray-600">
                        {category.items.map((item) => (
                            <ListItem
                                key={item}
                                text={item}
                                icon={category.icon}
                                iconColor={category.iconColor}
                                smallIcon
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const ListItem = ({ text, icon, iconColor, smallIcon = false }) => (
    <li className="flex items-start">
        <div className={`fas ${icon} ${smallIcon ? 'text-xs' : 'mt-1'} ${iconColor} mr-2`}></div>
        <span>{text}</span>
    </li>
);

export const ServiceCard = ({ title, icon, color, description, items, animationDelay }) => {
    const colorClasses = {
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
            iconColor: "text-green-500"
        },
        green: {
            bg: "bg-green-100",
            text: "text-green-600",
            iconColor: "text-blue-500"
        }
    };

    return (
        <div
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
            data-aos="fade-up"
            data-aos-delay={animationDelay}
        >
            <div className={`${colorClasses[color].bg} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                <div className={`fas ${icon} ${colorClasses[color].text} text-2xl`}></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-600">
                {items.map((item) => (
                    <li key={item} className="flex items-center">
                        <div className={`fas fa-check-circle ${colorClasses[color].iconColor} mr-2`}></div>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const ProfileImage = ({ imageUrl, altText }) => (
    <div className="md:w-1/3 mb-10 md:mb-0" data-aos="fade-right">
        <img
            src={imageUrl}
            alt={altText}
            className="rounded-lg shadow-md w-full max-w-md h-auto border-blue-200 border-4"
        />
    </div>
);

export const ProfileDescription = ({ title, description }) => (
    <>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
    </>
);

export const SkillsSection = ({ skills }) => {
    const colorClasses = {
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        green: { bg: "bg-green-100", text: "text-green-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600" },
        yellow: { bg: "bg-yellow-100", text: "text-yellow-600" }
    };

    return (
        <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Keahlian Profesional</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <div key={skill.title} className="flex items-start">
                        <div className={`${colorClasses[skill.color].bg} p-2 rounded-full mr-3 mt-1`}>
                            <i className={`fas ${skill.icon} ${colorClasses[skill.color].text}`}></i>
                        </div>
                        <div>
                            <h5 className="font-medium text-gray-800">{skill.title}</h5>
                            <p className="text-gray-600 text-sm">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ExperienceSection = ({ title, items }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={`${item.role}-${index}`}>
                    <h5 className="font-medium text-gray-800">{item.role}</h5>
                    <p className="text-gray-600 text-sm">{item.details}</p>
                </div>
            ))}
        </div>
    </div>
);

export const EducationCard = ({ degree, institution, thesis, badge }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold text-gray-800">{degree}</h4>
                    <p className="text-gray-600">{institution}</p>
                    <p className="text-gray-600 mt-2">{thesis}</p>
                </div>
            </div>
        </div>
    );
};

export const TrainingCard = ({ title, description, year, icon, color }) => {
    const colorClasses = {
        red: { bg: "bg-red-100", text: "text-red-600" },
        green: { bg: "bg-green-100", text: "text-green-600" },
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
        emerald: { bg: "bg-emerald-100", text: "text-emerald-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600" },
        indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
        amber: { bg: "bg-amber-100", text: "text-amber-600" }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-start mb-3">
                <div className={`${colorClasses[color].bg} p-3 rounded-full mr-4 flex-shrink-0`}>
                    <i className={`fas ${icon} ${colorClasses[color].text} text-lg`}></i>
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">{title}</h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <p className="text-gray-500 text-sm mt-1">{year}</p>
                </div>
            </div>
        </div>
    );
};

export const OrganizationCard = ({ name, icon, color, description, period, role, animationDelay }) => {
    const colorClasses = {
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        green: { bg: "bg-green-100", text: "text-green-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600" },
        indigo: { bg: "bg-indigo-100", text: "text-indigo-600" }
    };

    return (
        <div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
            data-aos="fade-up"
            data-aos-delay={animationDelay}
        >
            <div className={`${colorClasses[color].bg} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                <i className={`fas ${icon} ${colorClasses[color].text} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span>{period}</span>
            </div>
            <div className="mt-3">
                <span className={`${colorClasses[color].bg} ${colorClasses[color].text.replace('600', '800')} text-xs px-2 py-1 rounded`}>
                    {role}
                </span>
            </div>
        </div>
    );
};

export const BankCooperation = ({ title, banks }) => (
    <div className="mt-8" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {banks.map((bank, index) => (
                    <BankLogo
                        key={index}
                        name={bank.name}
                        imageUrl={bank.imageUrl}
                    />
                ))}
            </div>
        </div>
    </div>
);

const BankLogo = ({ name, imageUrl }) => (
    <div className="flex items-center justify-center p-2 hover:bg-gray-50 rounded-md transition-all h-20">
        <img
            src={imageUrl}
            alt={name}
            className="h-full max-h-16 object-contain"
            loading="lazy"
        />
    </div>
);

export const VisionCard = ({ title, icon, content, quote, color, animation }) => (
    <div
        className={`bg-white p-8 rounded-xl shadow-md border border-gray-200`}
        data-aos={animation}
    >
        <div className="flex items-center mb-6">
            <div className={`bg-${color}-100 p-3 rounded-full mr-4`}>
                <i className={`${icon} text-${color}-600 text-2xl`}></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{content}</p>
        <div className={`bg-${color}-50 p-4 rounded-lg`}>
            <p className={`text-${color}-800 italic`}>{quote}</p>
        </div>
    </div>
);

export const MissionCard = ({ title, icon, items, color, animation }) => (
    <div
        className={`bg-white p-8 rounded-xl shadow-md border border-gray-200`}
        data-aos={animation}
    >
        <div className="flex items-center mb-6">
            <div className={`bg-${color}-100 p-3 rounded-full mr-4`}>
                <i className={`${icon} text-${color}-600 text-2xl`}></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-4 text-gray-600">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <i className={`fas fa-check-circle text-${color}-500 mt-1 mr-3`}></i>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-dark"></div>
        </div>
    )
}

export const GalleryCard = ({ imageUrl, title, description }) => (
    <div
        className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
        data-aos="fade-up"
        data-aos-delay="100"
    >
        <img
            src={imageUrl}
            alt="Gallery"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 bg-white">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);