import React, { useState, useEffect } from 'react';

const CoreValue = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const coreValues = [
        {
            id: 1,
            title: "SPORTMANSHIP",
            description: "PASSION AND ENERGY IN EVERYTHING WE DO",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            title: "PROACTIVE",
            description: "NEVER GIVING UP ON OUR DREAMS AND GOALS",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "ENTHUSIASM",
            description: "STRIVING FOR THE HIGHEST QUALITY IN ALL ASPECTS",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            title: "CONSUMER FIRST",
            description: "INNOVATIVE THINKING AND ORIGINAL SOLUTIONS",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 5,
            title: "SOCIAL RESPONSIBILITY",
            description: "UNITY AND SUPPORT FOR ONE ANOTHER",
            image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    const colorMap = {
        'S': 'text-red-500',   // SPIRIT - Red
        'P': 'text-blue-500',  // PERSEVERANCE - Blue  
        'E': 'text-yellow-500', // EXCELLENCE - Yellow
        'C': 'text-red-500',   // CREATIVITY - Red
        // eslint-disable-next-line no-dupe-keys
        'S': 'text-green-500'  // SOLIDARITY - Green
    };

    const getColoredTitle = (title) => {
        const firstLetter = title.charAt(0);
        const restOfTitle = title.slice(1);

        // Handle the two S's differently
        let colorClass;
        if (firstLetter === 'S') {
            if (title === 'SPORTMANSHIP') {
                colorClass = 'text-red-500';
            } else if (title === 'SOCIAL RESPONSIBILITY') {
                colorClass = 'text-green-500';
            }
        } else {
            colorClass = colorMap[firstLetter] || 'text-red-500';
        }

        return (
            <>
                <span className={colorClass}>{firstLetter}</span>
                {restOfTitle}
            </>
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % coreValues.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [coreValues.length]);

    return (
        <div className="relative w-full h-[40vh] sm:h-[50vh] xl:h-[80vh] overflow-hidden">
            {/* Slides */}
            {coreValues.map((value, index) => (
                <div
                    key={value.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${value.image})`
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" />

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center text-white px-4 max-w-4xl">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-widest uppercase mb-4 opacity-90">
                                {value.description}
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none uppercase tracking-wide">
                                {getColoredTitle(value.title)}
                            </h1>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {coreValues.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30 z-20">
                <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / coreValues.length) * 100}%`
                    }}
                />
            </div>

            {/* Manual Navigation Arrows (Optional) */}
            <button
                onClick={() => setCurrentSlide(currentSlide === 0 ? coreValues.length - 1 : currentSlide - 1)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => setCurrentSlide((currentSlide + 1) % coreValues.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default CoreValue;