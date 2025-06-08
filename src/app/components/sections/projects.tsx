'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        // Animation du titre
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: -50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }        // Animation des cartes de projets
        projectRefs.current.forEach((project, index) => {
            if (project) {
                const isMobile = window.innerWidth < 640

                gsap.fromTo(project,
                    {
                        opacity: 0,
                        y: isMobile ? 30 : 50,
                        scale: isMobile ? 0.95 : 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: isMobile ? 0.6 : 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: isMobile ? "top 95%" : "top 90%",
                            end: isMobile ? "top 30%" : "top 10%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * (isMobile ? 0.05 : 0.1)
                    }
                )
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (        <div className='bg-[#FAF1E6] text-[#08553d] px-4 sm:px-6 lg:px-8' id='projects'>
            <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center">
                <h2 
                    ref={titleRef} 
                    className="text-3xl sm:text-4xl lg:text-6xl font-limelight font-light text-center"
                    >
                    Projects
                </h2>
            </div>
            <div className="pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Grille Bento responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
                          {/* Projet 1 - Large carré (2x2) avec image de fond */}
                        <div
                            ref={(el) => { projectRefs.current[0] = el }}
                            className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2 lg:row-span-2 bg-[#08553d] text-[#FAF1E6] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.05]"
                            style={{
                                backgroundImage: "url('/assets/images/cryptosquare-prev.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08553d]/95 via-[#08553d]/70 to-[#08553d]/40"></div>
                            
                            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 z-10">
                                <div className="text-left">
                                    <div className="mb-2 sm:mb-3">
                                        <span className="inline-block px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 backdrop-blur-sm rounded-full text-[#FAF1E6] text-xs font-medium border border-[#FAF1E6]/30">
                                            Featured Project
                                        </span>
                                    </div>
                                    <h3 className="font-bold mb-2 sm:mb-3 text-xl sm:text-2xl lg:text-3xl text-[#FAF1E6]">Online Cryptography Game</h3>
                                    <p className="mb-4 sm:mb-6 text-[#FAF1E6]/90 text-sm sm:text-base leading-relaxed">Fullstack application for creating and solving cryptographic puzzles in teams</p>
                                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">NuxtJS</span>
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">Node.js</span>
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">MongoDB</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                        <Link href={"https://cryptosquare.csquare.dev/"} target='_blank' className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#FAF1E6] text-[#08553d] rounded-lg font-medium text-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                                            Live Demo
                                        </Link>
                                        <Link href={"https://github.com/noupiiii/CryptoSquare"} target='_blank' className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-[#FAF1E6]/30 text-[#FAF1E6] rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/20 hover:border-[#FAF1E6]/60 transition-all duration-300">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>                        {/* Projet 2 - Petit carré (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[1] = el }}
                            className="col-span-1 row-span-1 bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-110"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="mb-2 sm:mb-3">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Software maintenance</h3>
                                    <p className="mb-3 sm:mb-4 opacity-80 text-xs sm:text-sm leading-relaxed">Update of hdr editing software used by Xiaomi & Huaweii research.</p>
                                    <div className="flex justify-center">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                    </div>
                                </div>
                            </div>
                        </div>                        {/* Projet 3 - Rectangle vertical (1x2) */}
                        <div
                            ref={(el) => { projectRefs.current[2] = el }}
                            className="col-span-1 row-span-1 sm:row-span-2 lg:row-span-2 bg-gradient-to-b from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-[1.07]"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="mb-3 sm:mb-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-2 sm:mb-3 text-lg sm:text-xl">Task Manager</h3>
                                    <p className="mb-4 sm:mb-6 opacity-80 text-sm sm:text-base leading-relaxed">Collaborative project management tool with real-time updates and team collaboration.</p>
                                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">React</span>
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Socket.io</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <a href="#" className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#FAF1E6]/20 border border-current/30 rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/30 transition-colors duration-200">
                                            View Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>                        {/* Projets 4, 5, 6 - Petits carrés (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[3] = el }}
                            className="col-span-1 row-span-1 bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-110"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="mb-2 sm:mb-3">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Chat App</h3>
                                    <p className="mb-3 sm:mb-4 opacity-80 text-xs sm:text-sm">Real-time messaging platform.</p>
                                    <div className="flex justify-center">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Firebase</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={(el) => { projectRefs.current[4] = el }}
                            className="col-span-1 row-span-1 bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-110"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="mb-2 sm:mb-3">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v10h2V3zM19 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM19 3h-2v10h2V3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Portfolio</h3>
                                    <p className="mb-3 sm:mb-4 opacity-80 text-xs sm:text-sm">Personal portfolio website.</p>
                                    <div className="flex justify-center">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Next.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={(el) => { projectRefs.current[5] = el }}
                            className="col-span-1 row-span-1 bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-110"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="mb-2 sm:mb-3">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Blog CMS</h3>
                                    <p className="mb-3 sm:mb-4 opacity-80 text-xs sm:text-sm">Content management system.</p>
                                    <div className="flex justify-center">
                                        <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Strapi</span>
                                    </div>
                                </div>
                            </div>
                        </div>                        {/* Projet 7 - Rectangle horizontal (2x1) */}
                        <div
                            ref={(el) => { projectRefs.current[6] = el }}
                            className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-r from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-[1.05]"
                        >
                            <div className="relative h-full flex items-center">
                                <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-3 sm:space-y-0 sm:space-x-4">
                                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-1 sm:mb-2 text-lg sm:text-xl">API Dashboard</h3>
                                            <p className="opacity-80 text-sm sm:text-base">Analytics dashboard for API monitoring and performance tracking.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center sm:items-end space-y-2 sm:space-y-3">
                                        <div className="flex flex-wrap justify-center sm:justify-end gap-1 sm:gap-2">
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Flask</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Chart.js</span>
                                        </div>
                                        <div className="flex gap-2 sm:gap-3">
                                            <a href="#" className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#FAF1E6]/20 border border-current/30 rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/30 transition-colors duration-200">Demo</a>
                                            <a href="#" className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#FAF1E6]/20 border border-current/30 rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/30 transition-colors duration-200">Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
