import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
    const navigate = useNavigate();

    // Updated brand data with proper image imports and descriptions
    const brandLogos = [
        {
            id: 1,
            name: "Specs",
            src: "/assets/Logo/specs.png",
        },
        {
            id: 2,
            name: "Piero",
            src: "/assets/Logo/piero.png",
        },
        {
            id: 3,
            name: "Mizuno",
            src: "/assets/Logo/mizuno.png",
        },
        {
            id: 4,
            name: "Odd",
            src: "/assets/Logo/odd.png",
        },
        {
            id: 5,
            name: "Fisik",
            src: "/assets/Logo/fisik.png",
        },
        {
            id: 6,
            name: "Fisik Football",
            src: "/assets/Logo/fisikFootball.png",
        }
    ];

    const handleBrandClick = (brand) => {
        navigate(`/brand/${brand.id}`);
    };

    return (
        <section id="brand" className="pt-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-2">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide text-gray-800 uppercase">Our Brand Partners</h2>
                </div>

                {/* Logo Grid */}
                <div className="relative">
                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
                        {brandLogos.map((logo) => (
                            <div
                                key={logo.id}
                                onClick={() => handleBrandClick(logo)}
                                className="group"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-full h-auto max-w-[300px] max-h-[150px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="120" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="60" fill="#f3f4f6"/><text x="60" y="35" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="12">${logo.name}</text></svg>`)}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {brandLogos.map((logo) => (
                                <div
                                    key={logo.id}
                                    onClick={() => handleBrandClick(logo)}
                                    className="flex-shrink-0"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="w-full h-auto max-h-[50px] object-contain grayscale"
                                        onError={(e) => {
                                            e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="140" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="140" height="50" fill="#f3f4f6"/><text x="70" y="30" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">${logo.name}</text></svg>`)}`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicator for mobile */}
                        <div className="flex justify-center mt-2">
                            <div className="flex space-x-1">
                                {Array.from({ length: Math.ceil(brandLogos.length / 2) }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-2 h-2 rounded-full bg-gray-300"
                                    />
                                ))}
                            </div>
                        </div>
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