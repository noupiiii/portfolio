'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
    const navItemsRefs = useRef<(HTMLLIElement | null)[]>([])
    const navRef = useRef<HTMLElement>(null)
    const leftNavBgRef = useRef<HTMLUListElement>(null)
    const rightNavBgRef = useRef<HTMLUListElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const lastScrollY = useRef(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const tl = gsap.timeline()

        // Animation des backgrounds crème des ul
        if (leftNavBgRef.current) {
            gsap.fromTo(leftNavBgRef.current,
                {
                    scaleX: 0,
                    opacity: 0
                },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.1
                }
            )
        }

        if (rightNavBgRef.current) {
            gsap.fromTo(rightNavBgRef.current,
                {
                    scaleX: 0,
                    opacity: 0
                },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.2
                }
            )
        }

        navItemsRefs.current.forEach((item, index) => {
            if (item) {
                tl.fromTo(item,
                    {
                        opacity: 0,
                        y: -60,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.4)"
                    },
                    index * 0.08 + 0.6
                )
            }
        })

        // Animation pour cacher/montrer la navbar au scroll
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scroll vers le bas - cacher la navbar
                gsap.to(navRef.current, {
                    y: -100,
                    duration: 0.3,
                    ease: "power2.out"
                })
            } else if (currentScrollY < lastScrollY.current) {
                // Scroll vers le haut - montrer la navbar
                gsap.to(navRef.current, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
            
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            tl.kill()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Animation du menu mobile
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMobileMenuOpen) {
                // Empêcher le scroll de la page
                document.body.style.overflow = 'hidden'
                
                gsap.fromTo(mobileMenuRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                )
            } else {
                // Réactiver le scroll de la page
                document.body.style.overflow = 'unset'
                
                gsap.to(mobileMenuRef.current,
                    { opacity: 0, y: -20, duration: 0.3, ease: "power2.out" }
                )
            }
        }
        
        // Cleanup au démontage du composant
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>            {/* Desktop Navbar */}
            <nav ref={navRef} className="hidden lg:flex items-center justify-between px-4 xl:px-24 py-4 fixed top-0 w-full z-10 overflow-hidden">
                <div className="relative z-10 flex items-center justify-between w-full">
                    <ul ref={leftNavBgRef} className="flex items-center gap-4 bg-[#FAF1E6] text-[#08553d] px-4 py-2 border border-[#08553d] rounded-full" style={{ transformOrigin: 'center' }}>
                        <li ref={(el) => { navItemsRefs.current[0] = el }}>
                            <Link href={"/"} className="hover:underline">Home</Link>
                        </li>
                        <li ref={(el) => { navItemsRefs.current[1] = el }}>
                            <Link href={"#about"} className="hover:underline">About</Link>
                        </li>
                        <li ref={(el) => { navItemsRefs.current[2] = el }}>
                            <Link href={"#projects"} className="hover:underline">Projects</Link>
                        </li>
                        <li ref={(el) => { navItemsRefs.current[3] = el }}>
                            <Link href={"#contact"} className="hover:underline">Contact</Link>
                        </li>
                        <li ref={(el) => { navItemsRefs.current[4] = el }}>
                            <Link href={"#education"} className="hover:underline">Education</Link>
                        </li>
                    </ul>
                    <ul ref={rightNavBgRef} className="flex items-center gap-4 bg-[#FAF1E6] rounded-full text-[#08553d] px-4 py-2 border border-[#08553d]" style={{ transformOrigin: 'center' }}>
                        <li ref={(el) => { navItemsRefs.current[5] = el }}>
                            <Link href={"https://github.com/noupiiii"} target="_blank" className="hover:underline flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Github
                            </Link>
                        </li>
                        <li ref={(el) => { navItemsRefs.current[6] = el }}>
                            <Link href={"https://www.linkedin.com/in/louis-bruche-37278b221"} target="_blank" className="hover:underline flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Linkedin
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="lg:hidden fixed top-0 w-full z-20">
                <div className="flex items-center justify-end px-6 py-4">
                    {/* Hamburger Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="text-[#08553d] focus:outline-none bg-[#FAF1E6] border border-[#08553d] rounded-full p-2"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - Plein écran */}
                {isMobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        className="fixed inset-0 bg-[#FAF1E6] z-30 flex flex-col items-center justify-center"
                    >
                        {/* Bouton fermer en haut à droite */}
                        <button 
                            onClick={closeMobileMenu}
                            className="absolute top-6 right-6 text-[#08553d] focus:outline-none bg-[#FAF1E6] border border-[#08553d] rounded-full p-2"
                            aria-label="Close menu"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <div className="space-y-8 text-center">
                            <Link 
                                href="/" 
                                className="block text-[#08553d] text-3xl font-semibold hover:underline"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <Link 
                                href="#about" 
                                className="block text-[#08553d] text-3xl font-semibold hover:underline"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                            <Link 
                                href="#projects" 
                                className="block text-[#08553d] text-3xl font-semibold hover:underline"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="#contact" 
                                className="block text-[#08553d] text-3xl font-semibold hover:underline"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                            <Link 
                                href="#education" 
                                className="block text-[#08553d] text-3xl font-semibold hover:underline"
                                onClick={closeMobileMenu}
                            >
                                Education
                            </Link>
                        </div>
                        
                        {/* Social Links */}
                        <div className="absolute bottom-12 flex gap-8">
                            <Link 
                                href="https://github.com/noupiiii" 
                                target="_blank" 
                                className="text-[#08553d] text-xl hover:underline flex items-center gap-3"
                                onClick={closeMobileMenu}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Github
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/louis-bruche-37278b221" 
                                target="_blank" 
                                className="text-[#08553d] text-xl hover:underline flex items-center gap-3"
                                onClick={closeMobileMenu}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Linkedin
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}