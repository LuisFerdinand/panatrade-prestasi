import React, { useState, useRef, useEffect } from 'react';

// Mock ReCAPTCHA component for demonstration
const ReCAPTCHA = ({ sitekey, onChange, onExpired, ref }) => {
    const [verified, setVerified] = useState(false);
    
    const handleVerify = () => {
        setVerified(!verified);
        onChange(verified ? null : 'mock-token');
    };
    
    React.useImperativeHandle(ref, () => ({
        reset: () => {
            setVerified(false);
            onChange(null);
        }
    }));
    
    return (
        <div className="inline-block border border-gray-300 p-4 bg-gray-50 rounded">
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={verified}
                    onChange={handleVerify}
                    className="w-4 h-4"
                />
                <span className="text-sm">I'm not a robot</span>
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                    rC
                </div>
            </div>
        </div>
    );
};

const Contact = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    
    const recaptchaRef = useRef(null);

    // Replace with your actual reCAPTCHA site key from Google reCAPTCHA console
    const RECAPTCHA_SITE_KEY = "test"; // This is Google's test key, replace with yours
    
    // Replace with your EmailJS credentials
    const EMAILJS_SERVICE_ID = "service_1kwe0iw";
    const EMAILJS_TEMPLATE_ID = "template_be5w3g2";
    const EMAILJS_PUBLIC_KEY = "1Hzn3cIba12k3xxg_";

    // Mock EmailJS for demonstration
    useEffect(() => {
        // In real implementation, load EmailJS script here
        window.emailjs = {
            init: () => {},
            send: async () => ({ status: 200 })
        };
    }, []);

    const handleRecaptchaChange = (value) => {
        if (value) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.firstName || !formData.lastName || !formData.email) {
            alert('Please fill in all required fields');
            return;
        }

        if (!isVerified) {
            alert('Please complete the reCAPTCHA verification before submitting');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                to_email: 'ferdinandluis88@example.com', // Replace with your actual email
                message: formData.message || 'No message provided',
                reply_to: formData.email
            };

            // Send email using EmailJS
            const response = await window.emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                setSubmitStatus('success');
                
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
                setIsVerified(false);
                recaptchaRef.current?.reset();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetRecaptcha = () => {
        setIsVerified(false);
        setSubmitStatus('');
        recaptchaRef.current?.reset();
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
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
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-3">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                            placeholder=""
                                            required
                                        />
                                        <p className="text-xs text-gray-500 mt-1">First</p>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                            placeholder=""
                                            required
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Last</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-3">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                    placeholder=""
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-3">
                                    Comment or Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-vertical"
                                    placeholder=""
                                ></textarea>
                            </div>

                            {/* reCAPTCHA - Now positioned below message field */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-3">
                                    Verification <span className="text-red-500">*</span>
                                </label>
                                <div className="flex justify-start">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={handleRecaptchaChange}
                                        onExpired={() => setIsVerified(false)}
                                    />
                                </div>
                                {!isVerified && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        Please complete the verification to submit the form
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center space-x-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !isVerified}
                                    className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                                        isSubmitting || !isVerified
                                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                            : 'bg-gray-200 text-black hover:bg-gray-300'
                                    }`}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={resetRecaptcha}
                                    className="text-sm text-gray-600 hover:text-gray-800 underline"
                                >
                                    Reset reCAPTCHA
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;