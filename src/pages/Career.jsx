import { careerData } from '../assets/constants';

const Career = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Image Section */}
            <div className="mb-12">
                <div
                    className="relative w-full max-w-[1920px] mx-auto overflow-hidden shadow-lg"
                    style={{ height: '100%' }}
                >
                    {/* Desktop Image - Hidden on mobile */}
                    <img
                        src="/assets/Career.jpg"
                        alt="Career opportunities at Panatrade Prestasi"
                        className="hidden md:block w-full h-full object-cover"
                    />
                    
                    {/* Mobile Image - Hidden on desktop */}
                    <img
                        src="/assets/Career-mobile.jpg"
                        alt="Career opportunities at Panatrade Prestasi"
                        className="block md:hidden w-full h-full object-cover"
                    />
                    
                    {/* Alternative approach using picture element for better performance */}
                    {/* 
                    <picture>
                        <source 
                            media="(min-width: 768px)" 
                            srcSet="/assets/Career.jpg"
                        />
                        <source 
                            media="(max-width: 767px)" 
                            srcSet="/assets/Career-mobile.jpg"
                        />
                        <img
                            src="/assets/Career.jpg"
                            alt="Career opportunities at Panatrade Prestasi"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                    */}
                    
                    {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                        <div className="text-center text-white">
                            <p className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide uppercase">Career</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-none">
                                PANATRADE PRESTASI
                            </h2>
                            <p className="text-lg mb-6">
                                Join our team at Panatrade Prestasi and build your career with us.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 pb-10">
                {/* Introduction */}
                {/* <div className="prose max-w-none text-center mb-12">
                    <p className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide uppercase">Career</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-none">
                        PANATRADE PRESTASI
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Join our team at Panatrade Prestasi and build your career with us.
                    </p>
                </div> */}

                {/* Current Openings */}
                <div className="mb-8">
                    {/* <h2 className="text-md sm:text-lg lg:text-xl xl:text-2xl font-medium tracking-wide uppercase mb-4 text-center">Current Openings</h2> */}

                    {careerData && careerData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-main-bg">
                            {careerData.map((job) => (
                                <div
                                    key={job.id}
                                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {job.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {job.shortDesc}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                            Requirements:
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                                    <span>{requirement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200 font-medium">
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 rounded-lg">
                            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">No Jobs Found.</h3>
                        </div>
                    )}
                </div>

                {/* Additional Information */}
                {/* <div className="bg-gray-50 p-6 rounded-lg mt-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Join Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Growth Opportunities</h4>
                            <p className="text-gray-600 text-sm">
                                We believe in nurturing talent and providing clear career progression paths for all our employees.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Global Exposure</h4>
                            <p className="text-gray-600 text-sm">
                                Work with international clients and gain exposure to global trading markets and practices.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Competitive Benefits</h4>
                            <p className="text-gray-600 text-sm">
                                We offer competitive salaries, health benefits, and performance-based incentives.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Team Environment</h4>
                            <p className="text-gray-600 text-sm">
                                Join a collaborative and supportive team that values innovation and professional development.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Career