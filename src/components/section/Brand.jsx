import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Updated brand data with proper image imports and descriptions
    const brandLogos = [
        {
            id: 1,
            name: "Specs",
            src: "/assets/Logo1/specs.png",
        },
        {
            id: 2,
            name: "Piero",
            src: "/assets/Logo1/piero.png",
        },
        {
            id: 3,
            name: "Mizuno",
            src: "/assets/Logo1/mizuno.png",
        },
        {
            id: 4,
            name: "Odd",
            src: "/assets/Logo1/odd.png",
        },
        {
            id: 5,
            name: "Fisik",
            src: "/assets/Logo1/fisik.png",
        },
        {
            id: 6,
            name: "Fisik Football",
            src: "/assets/Logo1/fisikFootball.png",
        }
    ];

    const handleBrandClick = (brand) => {
        navigate(`/brand/${brand.id}`);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isHovered) return;

        const scrollInterval = setInterval(() => {
            const containerWidth = scrollContainer.offsetWidth;
            const scrollWidth = scrollContainer.scrollWidth;
            const currentScroll = scrollContainer.scrollLeft;
            
            // Calculate item width (approximate)
            const itemWidth = scrollWidth / brandLogos.length;
            
            // Check if we can scroll one more item
            if (currentScroll + containerWidth + itemWidth >= scrollWidth) {
                // Reset to beginning
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll to next item
                scrollContainer.scrollTo({ 
                    left: currentScroll + itemWidth, 
                    behavior: 'smooth' 
                });
            }
        }, 5000);

        return () => clearInterval(scrollInterval);
    }, [isHovered, brandLogos.length]);

    return (
        <section id="brand" className="pt-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-2">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-[600] tracking-wide text-gray-800 uppercase">Our Brands</h2>
                </div>

                {/* Single Row Scrollable Container */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div 
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide items-center justify-start lg:justify-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {brandLogos.map((logo) => (
                            <div
                                key={logo.id}
                                onClick={() => handleBrandClick(logo)}
                                className="flex-shrink-0 group cursor-pointer transform transition-all duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-auto h-32 md:h-36 lg:h-40 object-contain opacity-40 contrast-75 grayscale group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="60" fill="#f3f4f6"/><text x="60" y="35" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="12">${logo.name}</text></svg>`)}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Brand;