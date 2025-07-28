const Contact = () => {
    return (
        <div className="min-h-screen bg-main-bg">
            {/* Hero Image Section */}
            <div className="mb-12">
                <div
                    className="relative w-full overflow-hidden shadow-lg"
                    style={{ height: '40vh' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                        alt="Contact Panatrade Prestasi"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                        <div className="text-center text-white">
                            <p className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide uppercase">Contact</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-none">
                                PANATRADE PRESTASI
                            </h2>
                            <p className="text-lg mb-6">
                                Get in touch with our team for business inquiries and partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 pb-10">
                {/* Contact Form and Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                    {/* Contact Information */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1 uppercase tracking-wide">
                                        Address
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        123 Business Street<br />
                                        Jakarta, Indonesia 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-start w-full">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1 uppercase tracking-wide">
                                        Phone
                                    </h4>
                                    <p className="text-gray-600 text-sm">+62 21 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-start w-full">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1 uppercase tracking-wide">
                                        Email
                                    </h4>
                                    <p className="text-gray-600 text-sm">info@panatradeprestasi.com</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-start w-full">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1 uppercase tracking-wide">
                                        Business Hours
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 1:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Send us a Message
                        </h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="supplier">Supplier Inquiry</option>
                                    <option value="career">Career Opportunity</option>
                                    <option value="support">Customer Support</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                                    placeholder="Please describe your inquiry in detail..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-600 transition-colors duration-200 font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Quick Response</h4>
                            <p className="text-gray-600 text-sm">
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Global Reach</h4>
                            <p className="text-gray-600 text-sm">
                                Connect with our international team for worldwide trading opportunities and partnerships.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Professional Service</h4>
                            <p className="text-gray-600 text-sm">
                                Our experienced team is ready to assist you with all your trading and business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact