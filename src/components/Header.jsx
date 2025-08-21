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
        
        if (hasDarkBg) {
            // Always dark background on contact and brand detail pages
            return 'rgba(0, 0, 0, 1)'
        }
        
        // Default behavior for other pages (transparent when not scrolled, dark when scrolled)
        return isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'
    }
    
    const getBackdropFilter = () => {
        const hasDarkBg = shouldHaveDarkBg()
        return (hasDarkBg || isScrolled) ? 'blur(12px)' : 'none'
    }
    
    const getBoxShadow = () => {
        const hasDarkBg = shouldHaveDarkBg()
        return (hasDarkBg || isScrolled) 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
            : 'none'
    }
    
    return (
        <>
            {/* Mobile Menu - Rendered first to appear below header */}
            <>
                {/* Backdrop */}
                <div
                    className={`md:hidden z-30 fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <div
                    className={`md:hidden z-40 fixed top-0 right-0 h-full w-72 max-w-[85vw] backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.95)'
                    }}
                >
                    {/* Menu Header */}
                    <div className="p-4 sm:p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                aria-label="Close mobile menu"
                            >
                                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="p-4 sm:p-6 space-y-2 flex-1">
                        {navItems.map((item, index) => (
                            <div
                                key={item.name}
                                className="animate-in slide-in-from-right duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 ease-out rounded-xl transform hover:scale-[1.02] ${isActive(item.href)
                                        ? "text-white bg-white/10 shadow-lg border-l-4 border-white"
                                        : "text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-gray-400"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* Digital decoration - similar to first header */}
                    <div className="absolute top-1/2 -left-1 w-1 h-32 bg-gradient-to-b from-white via-gray-300 to-gray-500 rounded-r-full opacity-50"></div>
                </div>
            </>
            
            {/* Header - Now rendered after mobile menu */}
            <header
                className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${isMenuOpen ? 'z-20' : 'z-50'}`}
                style={{
                    backgroundColor: getHeaderBackground(),
                    backdropFilter: getBackdropFilter(),
                    boxShadow: getBoxShadow()
                }}
            >
                <div className="flex justify-between items-center max-w-[1200px] mx-auto px-[3%] xl:px-0 py-[20px]">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-[12px] sm:text-[26px] font-[900] text-white hover:text-gray-300 transition-all duration-300 ease-out transform hover:scale-105 uppercase tracking-[2px]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Panatrade Prestasi
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex mx-[15px] my-2 pt-[5px] pb-[3px]">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className={`text-[16px] mx-[15px] font-normal transition-all duration-300 ease-out border-b-2 transform hover:scale-105 ${isActive(item.href)
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
            </header>
        </>
    )
}

export default Header