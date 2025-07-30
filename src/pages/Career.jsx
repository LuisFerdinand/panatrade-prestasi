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
                    <img
                        src="/assets/Career.jpg"
                        alt="Career opportunities at Panatrade Prestasi"
                        className="w-full h-full object-cover"
                    />
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
                        <div className="text-center py-16 rounded-lg">
                            <div className="mb-4">
                                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.94M8 6V4H6a2 2 0 00-2 2v12a2 2 0 002 2h.93" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Available</h3>
                            <p className="text-gray-600 mb-4">
                                We don't have any open positions at the moment, but we're always looking for talented individuals.
                            </p>
                            <p className="text-sm text-gray-500">
                                Check back soon or send us your resume for future opportunities.
                            </p>
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