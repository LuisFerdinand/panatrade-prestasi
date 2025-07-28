import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("/")
    const navigate = useNavigate()
    const location = useLocation()

    // Check if current page should have dark background
    const shouldHaveDarkBg = () => {
        return location.pathname === "/contact" || location.pathname.startsWith("/brand/")
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 50
            setIsScrolled(window.scrollY > scrollThreshold)

            // Only detect sections on home page
            if (location.pathname === "/") {
                const sections = ["landing", "brand", "about", "core-value"]
                const scrollPosition = window.scrollY + 100 // Offset for header

                let currentSection = "/"

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        const rect = element.getBoundingClientRect()
                        const elementTop = rect.top + window.scrollY
                        const elementBottom = elementTop + rect.height

                        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                            if (sectionId === "landing") {
                                currentSection = "/"
                            } else {
                                currentSection = `/${sectionId}`
                            }
                            break
                        }
                    }
                }

                setActiveSection(currentSection)
            } else {
                // If not on home page, set active section to current pathname
                setActiveSection(location.pathname)
            }
        }

        // Initial call
        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [location.pathname])

    // Update active section when location changes
    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection(location.pathname)
        }
    }, [location.pathname])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (href) => {
        // Close mobile menu when a nav item is clicked
        setIsMenuOpen(false)

        // Handle internal navigation for sections within Home page
        if (href === "/brand" || href === "/about" || href === "/core-value") {
            // Navigate to home first, then scroll to section
            navigate("/")
            setTimeout(() => {
                const element = document.getElementById(href.substring(1))
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }, 100)
        } else if (href === "/") {
            // Navigate to home and scroll to top (landing section)
            navigate("/")
            setTimeout(() => {
                const element = document.getElementById("landing")
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }, 100)
        } else {
            // Navigate to other pages
            navigate(href)
        }
    }

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Brand", href: "/brand" },
        { name: "About", href: "/about" },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
    ]

    const isActive = (href) => {
        return activeSection === href
    }

    const getHeaderBackground = () => {
        const hasDarkBg = shouldHaveDarkBg()
        
        if (isMenuOpen) {
            return 'transparent'
        }
        
        if (hasDarkBg) {
            // Always dark background on contact and brand detail pages
            return 'rgba(0, 0, 0, 0.9)'
        }
        
        // Default behavior for other pages (transparent when not scrolled, dark when scrolled)
        return isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'
    }

    const getBackdropFilter = () => {
        if (isMenuOpen) {
            return 'none'
        }
        
        const hasDarkBg = shouldHaveDarkBg()
        return (hasDarkBg || isScrolled) ? 'blur(12px)' : 'none'
    }

    const getBoxShadow = () => {
        if (isMenuOpen) {
            return 'none'
        }
        
        const hasDarkBg = shouldHaveDarkBg()
        return (hasDarkBg || isScrolled) 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
            : 'none'
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${isMenuOpen ? "z-40" : "z-50"}`}
            style={{
                backgroundColor: getHeaderBackground(),
                backdropFilter: getBackdropFilter(),
                boxShadow: getBoxShadow()
            }}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
                {/* Logo/Brand */}
                <div className="flex-shrink-0">
                    <Link
                        to="/"
                        className="text-[12px] sm:text-[26px] font-bold text-white hover:text-gray-300 transition-all duration-300 ease-out transform hover:scale-105 uppercase"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Panatrade Prestasi
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={`px-3 py-2 text-[16px] font-normal transition-all duration-300 ease-out border-b-2 transform hover:scale-105 ${isActive(item.href)
                                ? "text-white border-white"
                                : "text-gray-300 hover:text-white border-transparent hover:border-gray-400"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative w-6 h-6 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded z-50 transform transition-transform duration-200 hover:scale-110 active:scale-95"
                    aria-label="Toggle menu"
                >
                    {/* Hamburger Lines */}
                    <span
                        className={`absolute left-0 w-6 h-0.5 bg-white transform transition-all duration-400 ease-in-out ${isMenuOpen ? "top-3 rotate-45" : "top-1"
                            }`}
                    ></span>
                    <span
                        className={`absolute left-0 w-6 h-0.5 bg-white top-3 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                            }`}
                    ></span>
                    <span
                        className={`absolute left-0 w-6 h-0.5 bg-white transform transition-all duration-400 ease-in-out ${isMenuOpen ? "top-3 -rotate-45" : "top-5"
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 bottom-0 transition-all duration-400 ease-in-out z-50`}
                style={{
                    width: "80vw",
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    opacity: isMenuOpen ? 1 : 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(12px)'
                }}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-110 hover:rotate-90"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="px-6 py-8 space-y-2 h-full">
                    {navItems.map((item, index) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={`block w-full text-left px-4 py-4 text-[14px] font-normal transition-all duration-300 ease-out rounded-lg transform hover:scale-[1.02] hover:translate-x-2 ${isActive(item.href)
                                ? "text-white bg-gray-800 border-l-4 border-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-gray-800 hover:border-l-4 hover:border-gray-400"
                                }`}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                                transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                                opacity: isMenuOpen ? 1 : 0
                            }}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 transition-all duration-400 ease-in-out z-40`}
                style={{
                    backgroundColor: isMenuOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
                    backdropFilter: isMenuOpen ? 'blur(2px)' : 'none',
                    pointerEvents: isMenuOpen ? 'auto' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
            />
        </header>
    )
}

export default Header