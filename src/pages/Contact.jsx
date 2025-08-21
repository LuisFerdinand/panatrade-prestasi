import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHAComponent from 'react-google-recaptcha';

const ReCAPTCHA = React.forwardRef(({ sitekey, onChange, onExpired, onErrored }, ref) => {
    return (
        <ReCAPTCHAComponent
            ref={ref}
            sitekey={sitekey}
            onChange={onChange}
            onExpired={onExpired}
            onErrored={onErrored}
        />
    );
});

const Contact = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [emailJsLoaded, setEmailJsLoaded] = useState(false);
    
    const recaptchaRef = useRef(null);
    
    // Configuration - Using environment variables
    const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Lfx3KQrAAAAALAhwdVCpitLJl3KGNzG3UR3JUep";
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_1kwe0iw";
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_be5w3g2";
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "1Hzn3cIba12k3xxg_";
    const API_URL = import.meta.env.VITE_API_URL || (
        import.meta.env.DEV 
        ? 'http://localhost:3001' 
        : ''
    );
    
    // Load EmailJS script dynamically
    useEffect(() => {
        const loadEmailJS = () => {
            if (window.emailjs) {
                window.emailjs.init(EMAILJS_PUBLIC_KEY);
                setEmailJsLoaded(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            script.async = true;
            
            script.onload = () => {
                window.emailjs.init(EMAILJS_PUBLIC_KEY);
                setEmailJsLoaded(true);
            };
            
            script.onerror = () => {
                console.error('Failed to load EmailJS');
                setEmailJsLoaded(false);
            };
            
            document.head.appendChild(script);
        };
        loadEmailJS();
        
        return () => {
            const existingScript = document.querySelector('script[src*="emailjs"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [EMAILJS_PUBLIC_KEY]);
    
    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
        setIsVerified(!!token);
        
        if (token && submitStatus === 'error') {
            setSubmitStatus('');
        }
    };
    
    const handleRecaptchaExpired = () => {
        setRecaptchaToken(null);
        setIsVerified(false);
    };
    
    const handleRecaptchaError = () => {
        setRecaptchaToken(null);
        setIsVerified(false);
        alert('reCAPTCHA verification failed. Please try again.');
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (submitStatus === 'error') {
            setSubmitStatus('');
        }
    };
    
    const validateForm = () => {
        const errors = [];
        
        if (!formData.firstName.trim()) errors.push('First name is required');
        if (!formData.lastName.trim()) errors.push('Last name is required');
        if (!formData.email.trim()) errors.push('Email is required');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!isVerified || !recaptchaToken) {
            errors.push('Please complete the reCAPTCHA verification');
        }
        
        if (!emailJsLoaded) {
            errors.push('Email service is not ready. Please wait and try again.');
        }
        
        return errors;
    };
    
    // Function to verify reCAPTCHA token on backend
    const verifyRecaptchaToken = async (token) => {
        try {
            const apiEndpoint = API_URL 
                ? `${API_URL}/api/verify-recaptcha`
                : '/api/verify-recaptcha'; // Relative URL for Vercel
                
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recaptchaToken: token }),
            });
            
            const result = await response.json();
            return result.success;
        } catch (error) {
            console.error('reCAPTCHA verification error:', error);
            return false;
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            alert(validationErrors.join('\n'));
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus('');
        
        try {
            // Verify reCAPTCHA on backend first
            const isRecaptchaValid = await verifyRecaptchaToken(recaptchaToken);
            if (!isRecaptchaValid) {
                throw new Error('reCAPTCHA verification failed');
            }
            
            // Prepare email template parameters
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                to_email: 'ferdinandluis88@gmail.com',
                message: formData.message || 'No message provided',
                reply_to: formData.email,
                recaptcha_token: recaptchaToken
            };
            
            // Send email using EmailJS
            const response = await window.emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            if (response.status === 200) {
                setSubmitStatus('success');
                
                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
                
                resetRecaptcha();
                
                // Scroll to success message
                setTimeout(() => {
                    const successMessage = document.querySelector('.bg-green-100');
                    if (successMessage) {
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            } else {
                throw new Error(`EmailJS returned status: ${response.status}`);
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            
            if (error.message.includes('reCAPTCHA')) {
                alert('reCAPTCHA verification failed. Please try again.');
                resetRecaptcha();
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const resetRecaptcha = () => {
        setIsVerified(false);
        setRecaptchaToken(null);
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };
    
    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
        setSubmitStatus('');
        resetRecaptcha();
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
                            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                <h4 className="font-semibold">Message Sent Successfully!</h4>
                                <p>Thank you for your message. We'll get back to you soon.</p>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                <h4 className="font-semibold">Error Sending Message</h4>
                                <p>Sorry, there was an error sending your message. Please check your internet connection and try again.</p>
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
                                            placeholder="First name"
                                            required
                                            disabled={isSubmitting}
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
                                            placeholder="Last name"
                                            required
                                            disabled={isSubmitting}
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
                                    placeholder="your@email.com"
                                    required
                                    disabled={isSubmitting}
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
                                    placeholder="Your message here..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            
                            {/* reCAPTCHA */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-3">
                                    Verification <span className="text-red-500">*</span>
                                </label>
                                <div className="flex justify-start">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={handleRecaptchaChange}
                                        onExpired={handleRecaptchaExpired}
                                        onErrored={handleRecaptchaError}
                                    />
                                </div>
                                {!isVerified && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        Please complete the verification to submit the form
                                    </p>
                                )}
                            </div>
                            
                            {/* Submit Buttons */}
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !isVerified || !emailJsLoaded}
                                    className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                                        isSubmitting || !isVerified || !emailJsLoaded
                                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                            : 'bg-gray-200 text-black hover:bg-gray-300 hover:shadow-md'
                                    }`}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    disabled={isSubmitting}
                                    className="px-6 py-3 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Reset Form
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={resetRecaptcha}
                                    disabled={isSubmitting}
                                    className="text-sm text-gray-600 hover:text-gray-800 underline disabled:opacity-50 disabled:cursor-not-allowed"
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