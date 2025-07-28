import React from 'react';
import { ArrowLeft, ExternalLink, Trophy, Target, Zap } from 'lucide-react';

const BrandDetail = ({ brandId = "1", onBackClick, onExternalLinkClick }) => {
    // Brand data with external links
    const brandData = {
        1: {
            id: 1,
            name: "SPECS",
            src: "/assets/Logo/specs.png",
            description: [
                "Sport plays an increasingly important role in our lives, as the wellspring of health and happiness. Founded in 1980, Specs has progressed to become the leading sports brand in Indonesia, dedicated to a growing community of athletes nationwide. Our products combine innovation with inspiration, delivering competition-ready gear to help athletes realize their potential.",
                "From super lightweight soccer boots to ultra-responsive running shoes, we design footwear that responds to the physical demands of your competition. To help you raise your game, our range of apparel, accessories and equipment combine comfort with optimum performance. For athletes, fans and lovers of sport, Specs bring vision into focus."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#FF6B35",
            secondaryColor: "#1E3A8A"
        },
        2: {
            id: 2,
            name: "PIERO",
            src: "/assets/Logo/piero.png",
            description: [
                "Piero represents the perfect fusion of Italian design heritage and modern athletic performance. Born from a passion for excellence, Piero has established itself as a premium sports brand that understands the needs of dedicated athletes who demand both style and substance in their sporting equipment.",
                "Our commitment to quality craftsmanship and innovative technology ensures that every Piero product delivers exceptional performance. Whether you're on the field, court, or track, Piero's carefully engineered footwear and apparel provide the support, comfort, and durability needed to excel in your chosen sport."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#DC2626",
            secondaryColor: "#1F2937"
        },
        3: {
            id: 3,
            name: "MIZUNO",
            src: "/assets/Logo/mizuno.png",
            description: [
                "With over a century of sporting excellence, Mizuno stands as one of the world's most respected athletic brands. Founded in Japan in 1906, Mizuno has consistently pushed the boundaries of sports technology, creating innovative products that enhance athletic performance across multiple disciplines.",
                "Mizuno's dedication to research and development has resulted in breakthrough technologies that have revolutionized sports equipment. From the diamond to the running track, from the volleyball court to the golf course, Mizuno continues to support athletes at every level with equipment that combines traditional Japanese craftsmanship with cutting-edge innovation."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#0F766E",
            secondaryColor: "#1E40AF"
        },
        4: {
            id: 4,
            name: "ODD",
            src: "/assets/Logo/odd.png",
            description: [
                "Odd represents the unconventional spirit of modern athletics, challenging traditional boundaries and redefining what sports equipment can be. Our brand celebrates the unique, the different, and the extraordinary, creating products for athletes who dare to stand out from the crowd.",
                "Through bold design choices and innovative material technologies, Odd delivers equipment that not only performs exceptionally but also makes a statement. We believe that being different isn't just acceptable – it's essential for pushing the limits of human performance and achieving greatness in sport."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#7C3AED",
            secondaryColor: "#059669"
        },
        5: {
            id: 5,
            name: "FISIK",
            src: "/assets/Logo/fisik.png",
            description: [
                "Fisik embodies the raw power and determination required for peak athletic performance. Our brand focuses on creating equipment that can withstand the most demanding physical challenges, supporting athletes who push their bodies to the absolute limit in pursuit of excellence.",
                "Built for strength, endurance, and resilience, Fisik products are engineered to perform under pressure. Whether you're training for competition or competing at the highest level, Fisik provides the reliable, durable equipment you need to unleash your full physical potential and achieve your goals."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#EF4444",
            secondaryColor: "#1F2937"
        },
        6: {
            id: 6,
            name: "FISIK FOOTBALL",
            src: "/assets/Logo/fisikFootball.png",
            description: [
                "Fisik Football specializes in creating premium football equipment designed for the beautiful game's most passionate players. Our dedicated football line combines advanced technology with deep understanding of the sport's unique demands, delivering products that enhance every aspect of your game.",
                "From precision-engineered boots that provide superior ball control to performance apparel that moves with your body, Fisik Football is committed to supporting footballers at every level. Our products are tested by professionals and trusted by players who understand that in football, every detail matters."
            ],
            externalUrl: "", // Add your external URL here later
            primaryColor: "#10B981",
            secondaryColor: "#1E40AF"
        }
    };

    const brand = brandData[brandId];

    // Handle case where brand is not found
    if (!brand) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand Not Found</h1>
                    <button
                        onClick={onBackClick}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleBack = () => {
        if (onBackClick) {
            onBackClick();
        }
    };

    const handleShopNow = () => {
        if (brand.externalUrl && onExternalLinkClick) {
            onExternalLinkClick(brand.externalUrl);
        } else if (brand.externalUrl) {
            window.open(brand.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            // Placeholder action when URL is not set
            alert('External link will be added soon!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Account for existing header by adding top padding */}
            <div className="pt-16 md:pt-20">
                {/* Navigation Header - positioned below existing header */}
                <div className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-16 md:top-20 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-3">
                            <button
                                onClick={handleBack}
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Home</span>
                            </button>
                            <h1 className="text-lg font-semibold text-gray-900">Brand Details</h1>
                            <div className="w-24"></div>
                        </div>
                    </div>
                </div>

                {/* Hero Section with Sporty Design */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                            {/* Dynamic Sporty Background */}
                            <div className="absolute inset-0">
                                {/* Animated gradient background */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br opacity-90"
                                    style={{
                                        background: `linear-gradient(135deg, ${brand.primaryColor}20 0%, ${brand.secondaryColor}40 100%)`
                                    }}
                                ></div>

                                {/* Sporty geometric patterns */}
                                <div className="absolute inset-0">
                                    {/* Dynamic circles with animation */}
                                    <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 animate-pulse"
                                        style={{ backgroundColor: brand.primaryColor }}></div>
                                    <div className="absolute top-40 right-32 w-24 h-24 rounded-full opacity-15 animate-pulse delay-700"
                                        style={{ backgroundColor: brand.secondaryColor }}></div>
                                    <div className="absolute bottom-32 left-40 w-20 h-20 rounded-full opacity-25 animate-pulse delay-1000"
                                        style={{ backgroundColor: brand.primaryColor }}></div>

                                    {/* Athletic stripes */}
                                    <div className="absolute top-0 left-1/4 w-1 h-full opacity-10"
                                        style={{ backgroundColor: brand.primaryColor }}></div>
                                    <div className="absolute top-0 left-1/3 w-2 h-full opacity-15"
                                        style={{ backgroundColor: brand.secondaryColor }}></div>
                                    <div className="absolute top-0 right-1/4 w-1 h-full opacity-10"
                                        style={{ backgroundColor: brand.primaryColor }}></div>

                                    {/* Additional sporty elements */}
                                    <div className="absolute top-1/3 left-1/2 w-px h-20 opacity-20 rotate-45"
                                        style={{ backgroundColor: brand.primaryColor }}></div>
                                    <div className="absolute bottom-1/3 right-1/3 w-px h-16 opacity-15 -rotate-45"
                                        style={{ backgroundColor: brand.secondaryColor }}></div>
                                </div>

                                {/* Sports equipment silhouettes with enhanced styling */}
                                <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                                        {/* Animated sport equipment icons */}
                                        <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                                            <Trophy size={24} className="text-white" />
                                        </div>
                                        <div className="absolute bottom-8 right-8 w-14 h-14 bg-white/15 rounded-full flex items-center justify-center animate-bounce delay-500">
                                            <Target size={20} className="text-white" />
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/25 rounded-full flex items-center justify-center animate-pulse">
                                            <Zap size={28} className="text-white" />
                                        </div>

                                        {/* Central sports imagery with dynamic border */}
                                        <div className="absolute inset-4 border-2 border-white/30 rounded-full flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="text-lg font-bold mb-2 tracking-wider">ATHLETIC</div>
                                                <div className="text-sm opacity-80 tracking-wide">EXCELLENCE</div>
                                                <div className="w-12 h-px bg-white/50 mx-auto mt-2"></div>
                                            </div>
                                        </div>

                                        {/* Additional decorative elements */}
                                        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/30"></div>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/30"></div>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/30"></div>
                                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/30"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Card - Right Side */}
                            <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-12">
                                <div className="w-full max-w-md lg:max-w-lg bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
                                    {/* Brand Logo with Dynamic Background */}
                                    <div className="flex justify-center mb-6">
                                        <div
                                            className="bg-white rounded-2xl p-4 shadow-xl border-2 transform hover:scale-105 transition-transform duration-300"
                                            style={{ borderColor: `${brand.primaryColor}30` }}
                                        >
                                            <img
                                                src={brand.src}
                                                alt={brand.name}
                                                className="h-12 md:h-16 w-auto object-contain"
                                                onError={(e) => {
                                                    e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="120" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="60" fill="#f3f4f6" rx="8"/><text x="60" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="14" font-weight="bold">${brand.name}</text></svg>`)}`;
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Brand Description */}
                                    <div className="space-y-4 mb-6">
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {brand.description[0]}
                                        </p>
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {brand.description[1]}
                                        </p>
                                    </div>

                                    {/* Call to Action with Dynamic Styling */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <button
                                            onClick={handleShopNow}
                                            className="w-full text-white font-semibold py-4 px-6 rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
                                            style={{
                                                background: `linear-gradient(135deg, ${brand.primaryColor} 0%, ${brand.secondaryColor} 100%)`
                                            }}
                                        >
                                            {/* Button shine effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            <span className="relative z-10">Visit Official Store</span>
                                            <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-xs text-gray-500 text-center mt-2">
                                            External link will open in new tab
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Feature Cards */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 group"
                            style={{ borderColor: brand.primaryColor }}>
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${brand.primaryColor}20` }}>
                                    <Zap size={20} style={{ color: brand.primaryColor }} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Cutting-edge technology and design that pushes the boundaries of athletic performance.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 group"
                            style={{ borderColor: brand.secondaryColor }}>
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${brand.secondaryColor}20` }}>
                                    <Target size={20} style={{ color: brand.secondaryColor }} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Quality</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Premium materials and craftsmanship that athletes can trust in any competition.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 group"
                            style={{ borderColor: brand.primaryColor }}>
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${brand.primaryColor}20` }}>
                                    <Trophy size={20} style={{ color: brand.primaryColor }} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Engineered to help athletes achieve their full potential and reach new heights.</p>
                        </div>
                    </div>
                </div>

                {/* Additional Brand Stats Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Athletes Worldwide</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">Join millions of athletes who trust our brand for their sporting excellence</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: brand.primaryColor }}>50+</div>
                                <div className="text-sm text-gray-300">Countries</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: brand.primaryColor }}>1M+</div>
                                <div className="text-sm text-gray-300">Athletes</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: brand.primaryColor }}>100+</div>
                                <div className="text-sm text-gray-300">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: brand.primaryColor }}>25+</div>
                                <div className="text-sm text-gray-300">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;