"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Navigation({ activeSection = 'home' }) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(activeSection);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        setActiveLink(activeSection);
    }, [activeSection]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full py-6 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${isScrolled ? 'bg-main/10 backdrop-blur-md' : 'bg-transparent'
            }`}>
            <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
                <Link href="#home" className="text-[#7CE4F0] text-xl font-mono">p.onklan.dev();</Link>

                {/* Desktop Navigation */}
                <ul className="menu-desktop hidden md:flex gap-8 lg:gap-12">
                    {['Home', 'About', 'Skill', 'Projects', 'Certificate', 'Contact'].map((item) => (
                        <li key={item.toLowerCase()}>
                            <Link
                                href={`#${item.toLowerCase()}`}
                                className={`text-white hover:text-[#7CE4F0] transition-colors duration-300 relative ${activeLink === item.toLowerCase() ? 'active' : ''
                                    }`}
                                onClick={() => setActiveLink(item.toLowerCase())}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white focus:outline-none z-[60]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={`menu-mobile ${isOpen ? 'active' : ''}`}>
                    <ul className="flex flex-col space-y-6">
                        {['Home', 'About', 'Skill', 'Projects', 'Certificate', 'Contact'].map((item) => (
                            <li key={item.toLowerCase()}>
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className={`block text-white hover:text-[#7CE4F0] py-4 text-2xl font-medium transition-all duration-300 hover:pl-4 ${activeLink === item.toLowerCase() ? 'active' : ''
                                        }`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveLink(item.toLowerCase());
                                    }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
