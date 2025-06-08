'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation d'apparition du footer
            if (footerRef.current) {
                gsap.fromTo(footerRef.current,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 90%",
                            end: "top 50%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }

            // Animation du contenu
            if (contentRef.current) {
                gsap.fromTo(contentRef.current,
                    {
                        opacity: 0,
                        y: 30
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 85%",
                            end: "top 50%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }

            // Animation des liens
            if (linksRef.current) {
                gsap.fromTo(linksRef.current.children,
                    {
                        opacity: 0,
                        y: 20
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        delay: 0.4,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: linksRef.current,
                            start: "top 85%",
                            end: "top 50%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <footer ref={footerRef} className="bg-[#FAF1E6] text-[#08553d] border-t border-[#08553d]/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Section About */}
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-[#08553d]">Louis Bruche</h3>
                        <p className="text-sm sm:text-base text-[#08553d]/80 leading-relaxed">
                            BUT Informatique student passionate about data science and AI. 
                            Looking for work-study opportunities starting September 2025.
                        </p>
                    </div>

                    {/* Section Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-[#08553d]">Quick Links</h3>
                        <div ref={linksRef} className="flex flex-col space-y-2">
                            <a href="#about" className="text-sm sm:text-base text-[#08553d]/80 hover:text-[#08553d] transition-colors duration-300">
                                About
                            </a>
                            <a href="#education" className="text-sm sm:text-base text-[#08553d]/80 hover:text-[#08553d] transition-colors duration-300">
                                Education
                            </a>
                            <a href="#projects" className="text-sm sm:text-base text-[#08553d]/80 hover:text-[#08553d] transition-colors duration-300">
                                Projects
                            </a>
                            <a href="#contact" className="text-sm sm:text-base text-[#08553d]/80 hover:text-[#08553d] transition-colors duration-300">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Section Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-[#08553d]">Connect</h3>
                        <div className="flex space-x-4">
                            <a 
                                href="https://github.com/noupiiii" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-[#08553d]/10 rounded-full hover:bg-[#08553d]/20 transition-colors duration-300 group"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 text-[#08553d] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/louis-bruche-37278b221" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-[#08553d]/10 rounded-full hover:bg-[#08553d]/20 transition-colors duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-[#08553d] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-2">
                            <p className="text-xs sm:text-sm text-[#08553d]/60">
                                📧 Available for collaboration and opportunities
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Copyright */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#08553d]/20">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-xs sm:text-sm text-[#08553d]/60 text-center sm:text-left">
                            © 2025 Louis Bruche. All rights reserved.
                        </p>
                        <p className="text-xs sm:text-sm text-[#08553d]/60 text-center sm:text-right">
                            Built with Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
