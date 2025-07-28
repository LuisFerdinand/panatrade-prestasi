const Contact = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            {/* Main Content Container */}
            <div className="w-full max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold text-black mb-12 tracking-wide">
                                CONTACT US
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-4">
                                    Head Office
                                </h3>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>Specs Arena</p>
                                    <p>Jl. Raya Daan Mogot No.151</p>
                                    <p>DKI Jakarta, Indonesia</p>
                                    <p className="mt-3">Tel: +62 21 560 4669</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="space-y-6">
                        <form className="space-y-6">
                            {/* Name Fields */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black mb-3">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                            placeholder=""
                                        />
                                        <p className="text-xs text-gray-500 mt-1">First</p>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                            placeholder=""
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Last</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black mb-3">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                    placeholder=""
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black mb-3">
                                    Comment or Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-vertical"
                                    placeholder=""
                                ></textarea>
                            </div>

                            {/* reCAPTCHA Placeholder */}
                            <div className="py-4">
                                <div className="border border-gray-300 rounded-md p-4 bg-gray-50 flex items-center space-x-3">
                                    <input type="checkbox" className="w-6 h-6" />
                                    <span className="text-sm text-gray-700">I'm not a robot</span>
                                    <div className="ml-auto">
                                        <div className="text-xs text-gray-500">
                                            <div>reCAPTCHA</div>
                                            <div className="text-[10px]">Privacy - Terms</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="bg-gray-200 text-black px-8 py-3 rounded-md hover:bg-gray-300 transition-colors duration-200 font-medium"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact