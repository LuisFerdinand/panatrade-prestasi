import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const BrandDetail = ({ brandId = "1", onBackClick, onExternalLinkClick }) => {
    // Brand data with external links and mobile images
    const brandData = {
        1: {
            id: 1,
            name: "SPECS",
            src: "/assets/Logo1/specs.png",
            backgroundImage: "/assets/BrandDetail/desktop/SPECS.jpg",
            mobileImage: "/assets/BrandDetail/mobile/SPECS.jpg",
            description: [
                "Sport plays an increasingly important role in our lives, as the wellspring of health and happiness. Founded in 1980, Specs has progressed to become the leading sports brand in Indonesia, dedicated to a growing community of athletes nationwide. Our products combine innovation with inspiration, delivering competition-ready gear to help athletes realize their potential.",
                "From super lightweight soccer boots to ultra-responsive running shoes, we design footwear that responds to the physical demands of your competition. To help you raise your game, our range of apparel, accessories and equipment combine comfort with optimum performance. For athletes, fans and lovers of sport, Specs bring vision into focus."
            ],
            externalUrl: "https://www.specs.id/",
        },
        2: {
            id: 2,
            name: "PIERO",
            src: "/assets/Logo1/piero.png",
            backgroundImage: "/assets/BrandDetail/desktop/PIERO.jpg",
            mobileImage: "/assets/BrandDetail/mobile/PIERO.jpg",
            description: [
                "The Piero brand was made for all. With our range of comfortable, versatile footwear, we span the generations with timeless designs that are reasonably priced and designed for the rigors of everyday life. Put simply, we have a shoe for everyone. These lifestyle sneakers and urban footwear let you express your individuality and explore your potential.",
                "Our shoes are for the curious and the young at heart. Like us, our customers have the courage to try new things, to cross boundaries and walk their own path. With every design, we encourage them to keep exploring. Wherever the road may lead, Piero is with you every step of the way."
            ],
            externalUrl: "https://www.pieroindonesia.com/",
        },
        3: {
            id: 3,
            name: "MIZUNO",
            src: "/assets/Logo1/miz-white.png",
            backgroundImage: "/assets/BrandDetail/desktop/MIZUNO.jpg",
            mobileImage: "/assets/BrandDetail/mobile/MIZUNO.jpg",
            description: [
                "Mizuno is serious about sports. As the official distributor for Indonesia, Panatrade Caraka delivers high-performance products that give athletes an edge in their respective arenas, driving them forwards in the pursuit of success and personal growth. Together, we believe sports are essential for a better life. And striving for perfection is the essence of sport.",
                "Taking inspiration from their Japanese heritage, Mizuno bring attention to detail and discipline to product development. The result is high-quality sports apparel that elevates performance and contributes to overall well-being. Particularly in running, badminton, tennis, volleyball and soccer, they're frontrunners in the race for excellence."
            ],
            externalUrl: "https://linktr.ee/mizuno_indonesia",
        },
        4: {
            id: 4,
            name: "ODD",
            src: "/assets/Logo1/odd.png",
            backgroundImage: "/assets/BrandDetail/desktop/ODD.jpg",
            mobileImage: "/assets/BrandDetail/mobile/ODD.jpg",
            description: [
                "Looking for kicks? Our Daily Dose is your destination for streetwise fashion with a sporty soul. We stick major brands like Nike, Puma, Adidas and Asics, along with international and local streetwear brands like Billionaire Boys Club and AGLXY. From retro high-top sneakers to skater kicks and urban cross-trainers, we've got the footwear to match your style. If you love sports and have a passion for fashion, get your daily dose with us.",
            ],
            externalUrl: "https://www.ourdailydose.net/",
        },
        5: {
            id: 5,
            name: "FISIK",
            src: "/assets/Logo1/fisik.png",
            backgroundImage: "/assets/BrandDetail/desktop/FS.jpg",
            mobileImage: "/assets/BrandDetail/mobile/FS.jpg",
            description: [
                "If you play it, we supply it. Fisik Sport is your hub for sporting equipment – whether you're into soccer, basketball, tennis, volleyball or running, we've got the kit you need to succeed. Children and adults trust us with their sporting apparel. In return, we help them get together and be the best they can be.",
                "We put the same energy into our brand as our customers put into sports. An active, athletic retailer with a focus on teamwork, we believe in the empowering impact of exercise. Fisik Sport offers a wide range of high-quality products at affordable prices. Whatever your game, we've got the gear."
            ],
            externalUrl: "https://www.fisik.id/",
        },
        6: {
            id: 6,
            name: "FISIK FOOTBALL",
            src: "/assets/Logo1/fisikFootball.png",
            backgroundImage: "/assets/BrandDetail/desktop/FF.jpg",
            mobileImage: "/assets/BrandDetail/mobile/FF.jpg",
            description: [
                "Fisik Football are brand ambassadors for soccer. With unparalleled knowledge and passion for the sport, we provide customers with more than just products we offer a special shopping experience, with innovations to help raise your game.",
                "Fisik Football products cover all ages, genders and levels of ability. From Nike Mercurial to Adidas Predator boots, and from Puma Future to Mizuno Morelia, we stock the biggest brands, worn by the brightest stars on the biggest stages. Let us be your guide to the beautiful game."
            ],
            externalUrl: "https://www.fisikfootball.com/",
        }
    };

    const brand = brandData[brandId];

    // Check if current brand is Mizuno
    const isMizuno = brand && brand.name === "MIZUNO";

    // Dynamic text color classes based on brand
    const getTextColor = () => {
        return isMizuno ? "text-white" : "text-gray-800";
    };

    const getButtonClasses = () => {
        if (isMizuno) {
            return "w-[180px] text-white font-[600] py-[16px] px-[32px] rounded-sm hover:bg-white hover:text-gray-900 transition-all duration-500 ease-in-out flex items-center justify-center space-x-3 group hover:shadow-xl transform";
        }
        return "w-[180px] text-gray-900 font-[600] py-[16px] px-[32px] rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-500 ease-in-out flex items-center justify-center space-x-3 group hover:shadow-xl transform";
    };

    // Handle case where brand is not found
    if (!brand) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Brand Not Found</h1>
                    <button
                        onClick={onBackClick}
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
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
        } else {
            window.history.back();
        }
    };

    const handleShopNow = () => {
        if (brand.externalUrl && onExternalLinkClick) {
            onExternalLinkClick(brand.externalUrl);
        } else if (brand.externalUrl) {
            window.open(brand.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            alert('External link will be added soon!');
        }
    };

    return (
        <div className="min-h-screen pt-16">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
                {/* Mobile Hero Image */}
                <div className="relative h-full overflow-hidden">
                    <img
                        src={brand.mobileImage}
                        alt={`${brand.name} mobile`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="24" font-weight="bold">${brand.name}</text></svg>`)}`;
                        }}
                    />
                </div>

                {/* Mobile Content */}
                <div className="py-8">
                    {/* Description */}
                    <div className="space-y-4 mb-[28px] mx-[10px] sm:mx-[15px] text-justify">
                        <p className={`${getTextColor()} text-base leading-[1.7em] tracking-[1px]`}>
                            {brand.description[0]}
                        </p>
                        {brand.description[1] && (
                            <p className={`${getTextColor()} text-base leading-[1.7em] tracking-[1px]`}>
                                {brand.description[1]}
                            </p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 flex flex-col items-center">
                        <button
                            onClick={handleShopNow}
                            className={getButtonClasses()}
                        >
                            <span className="text-[16px] group-hover:hidden transition-opacity duration-300">Shop Now</span>
                            <span className="text-[16px] hidden group-hover:inline transition-opacity duration-300">Go!</span>
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block min-h-screen relative mt-4">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={brand.backgroundImage}
                        alt={`${brand.name} background`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><rect width="1920" height="1080" fill="#f3f4f6"/><text x="960" y="540" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="48" font-weight="bold">${brand.name}</text></svg>`)}`;
                        }}
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 min-h-screen flex">
                    {/* Left side - Empty space for background image */}
                    <div className="flex-1"></div>

                    {/* Right side - Content */}
                    <div className="w-1/2 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center">
                            {/* Brand Logo */}
                            <div className="flex justify-start ml-4 -mb-20">
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className="object-contain mb-0 size-[300px]"
                                    onError={(e) => {
                                        e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#ffffff" rx="8"/><text x="150" y="160" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="20" font-weight="bold">${brand.name}</text></svg>`)}`;
                                    }}
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-6 mb-10 ml-[100px] mr-[80px]">
                                <p className={`${getTextColor()} font-400 text-[17px] leading-[33px] tracking-[1px]`}>
                                    {brand.description[0]}
                                </p>
                                {brand.description[1] && (
                                    <p className={`${getTextColor()} font-400 text-[17px] leading-[33px] tracking-[1px]`}>
                                        {brand.description[1]}
                                    </p>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4 flex justify-center">
                                <button
                                    onClick={handleShopNow}
                                    className={getButtonClasses()}
                                >
                                    <span className="text-[16px] group-hover:hidden transition-opacity duration-300">Shop Now</span>
                                    <span className="text-[16px] hidden group-hover:inline transition-opacity duration-300">Go!</span>
                                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;