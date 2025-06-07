'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

    const titleRef = useRef<HTMLHeadingElement>(null)

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
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='bg-[#FAF1E6] text-[#08553d]'>
            <div className="h-48 flex items-center justify-center">
                <h2 
                    ref={titleRef} 
                    className="text-6xl font-limelight font-light"
                    >
                    Projects
                </h2>
            </div>
            <div className="px-8 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-0">
                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">Portfolio Website</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. 
                                Features smooth animations with GSAP and responsive design.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">GSAP</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">Live Demo</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>

                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">E-commerce Platform</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                Full-stack e-commerce solution with user authentication, 
                                payment integration, and admin dashboard.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">Live Demo</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>

                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">Data Analytics Dashboard</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                Interactive dashboard for data visualization and analytics 
                                using modern data science tools and frameworks.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Streamlit</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Pandas</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">Live Demo</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>

                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">Task Management App</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                Collaborative task management 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Vue.js</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Firebase</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Socket.io</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">Live Demo</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>

                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">Weather Forecast API</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                RESTful API for weather forecasting with location-based services,
                                historical data analysis, and weather alerts system.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Express.js</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">PostgreSQL</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Redis</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">API Docs</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>

                        <div className="bg-[#08553d] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#FAF1E6]">Mobile Expense Tracker</h3>
                            <p className="text-[#FAF1E6] mb-4">
                                Cross-platform mobile app for expense tracking with budget management,
                                spending analytics, and receipt scanning functionality.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">React Native</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">Expo</span>
                                <span className="px-3 py-1 bg-[#FAF1E6] text-[#08553d] rounded-full text-sm">SQLite</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#FAF1E6] hover:underline">App Store</a>
                                <a href="#" className="text-[#FAF1E6] hover:underline">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}