import React, { useState, useEffect, useRef } from 'react';

// Import local images
import sportmanshipDesktop from '../../assets/CoreValue/value1.jpg';
import sportmanshipMobile from '../../assets/CoreValue/valueM1.jpg';
import proactiveDesktop from '../../assets/CoreValue/value2.jpg';
import proactiveMobile from '../../assets/CoreValue/valueM2.jpg';
import enthusiasmDesktop from '../../assets/CoreValue/value3.jpg';
import enthusiasmMobile from '../../assets/CoreValue/valueM3.jpg';
import consumerFirstDesktop from '../../assets/CoreValue/value4.jpg';
import consumerFirstMobile from '../../assets/CoreValue/valueM4.jpg';
import socialResponsibilityDesktop from '../../assets/CoreValue/value5.jpg';
import socialResponsibilityMobile from '../../assets/CoreValue/valueM5.jpg';

const CoreValue = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [contentVisible, setContentVisible] = useState(true);
    const sliderRef = useRef(null);

    const coreValues = [
        {
            id: 1,
            title: "SPORTMANSHIP",
            description: "PASSION AND ENERGY IN EVERYTHING WE DO",
            image: {
                desktop: sportmanshipDesktop,
                mobile: sportmanshipMobile
            }
        },
        {
            id: 2,
            title: "PROACTIVE",
            description: "NEVER GIVING UP ON OUR DREAMS AND GOALS",
            image: {
                desktop: proactiveDesktop,
                mobile: proactiveMobile
            }
        },
        {
            id: 3,
            title: "ENTHUSIASM",
            description: "STRIVING FOR THE HIGHEST QUALITY IN ALL ASPECTS",
            image: {
                desktop: enthusiasmDesktop,
                mobile: enthusiasmMobile
            }
        },
        {
            id: 4,
            title: "CONSUMER FIRST",
            description: "INNOVATIVE THINKING AND ORIGINAL SOLUTIONS",
            image: {
                desktop: consumerFirstDesktop,
                mobile: consumerFirstMobile
            }
        },
        {
            id: 5,
            title: "SOCIAL RESPONSIBILITY",
            description: "UNITY AND SUPPORT FOR ONE ANOTHER",
            image: {
                desktop: socialResponsibilityDesktop,
                mobile: socialResponsibilityMobile
            }
        }
    ];

    const colorMap = {
        'S': 'text-red-500',
        'P': 'text-blue-500',
        'E': 'text-yellow-500',
        'C': 'text-red-500',
    };

    const getColoredTitle = (title) => {
        const firstLetter = title.charAt(0);
        const restOfTitle = title.slice(1);

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

    const changeSlide = (newSlide) => {
        if (newSlide !== currentSlide) {
            setContentVisible(false);
            setTimeout(() => {
                setCurrentSlide(newSlide);
                setContentVisible(true);
            }, 250);
        }
    };

    // Mouse events
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        const threshold = 100;
        
        if (translateX > threshold && currentSlide > 0) {
            changeSlide(currentSlide - 1);
        } else if (translateX < -threshold && currentSlide < coreValues.length - 1) {
            changeSlide(currentSlide + 1);
        }
        
        setTranslateX(0);
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                changeSlide((currentSlide + 1) % coreValues.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, isDragging, coreValues.length]);

    // Add global mouse event listeners
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, startX, translateX]);

    return (
        <div 
            className="relative w-full h-[50vh] sm:h-[80vh] xl:h-[100vh] overflow-hidden cursor-grab active:cursor-grabbing select-none"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* Slider Container */}
            <div 
                className="flex h-full transition-transform duration-300 ease-out"
                style={{
                    transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`
                }}
            >
                {coreValues.map((value, index) => (
                    <div
                        key={value.id}
                        className="relative flex-shrink-0 w-full h-full"
                        style={{ minWidth: '100%' }}
                    >
                        {/* Background Image - Mobile */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                            style={{
                                backgroundImage: `url(${value.image.mobile})`
                            }}
                        />

                        {/* Background Image - Desktop */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                            style={{
                                backgroundImage: `url(${value.image.desktop})`
                            }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute hidden md:block inset-0 bg-black bg-opacity-50" />

                        {/* Content with bottom-to-top animation */}
                        <div className="relative z-10 max-w-7xl mx-auto hidden md:flex items-center justify-start h-full">
                            <div 
                                className={`text-start text-white px-4 max-w-4xl transition-all duration-500 ease-out ${
                                    index === currentSlide && contentVisible 
                                        ? 'transform translate-y-0 opacity-100' 
                                        : 'transform translate-y-8 opacity-0'
                                }`}
                            >
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-widest uppercase mb-3 opacity-90">
                                    CORE VALUE
                                </p>
                                <h1 className="md:text-[83px] lg:text-[104px] xl:text-[143px] font-bold leading-none uppercase tracking-wide">
                                    {getColoredTitle(value.title)}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {coreValues.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-black scale-125'
                                : 'bg-black bg-opacity-50 hover:bg-opacity-75'
                        }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30 z-20">
                <div
                    className="h-full bg-white transition-all duration-300 ease-out"
                    style={{
                        width: `${((currentSlide + 1) / coreValues.length) * 100}%`
                    }}
                />
            </div>

            {/* Manual Navigation Arrows */}
            <button
                onClick={() => changeSlide(currentSlide === 0 ? coreValues.length - 1 : currentSlide - 1)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => changeSlide((currentSlide + 1) % coreValues.length)}
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