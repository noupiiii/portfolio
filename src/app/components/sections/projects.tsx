'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, Project } from '../../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    const getSizeClasses = (size: Project['size']) => {
        switch (size) {
            case 'large':
                return 'col-span-2 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-2'
            case 'wide':
                return 'col-span-2 row-span-1 md:col-span-4 md:row-span-1 lg:col-span-6 lg:row-span-1'
            case 'tall':
                return 'col-span-1 row-span-2'
            case 'medium':
                return 'col-span-2 row-span-2'
            default: // small
                return 'col-span-1 row-span-1'
        }
    }

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

        // Animation des cartes de projets
        projectRefs.current.forEach((project, index) => {
            if (project) {
                gsap.fromTo(project,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top 90%",
                            end: "top 10%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * 0.1
                    }
                )
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='bg-[#FAF1E6] text-[#08553d]' id='projects'>
            <div className="h-48 flex items-center justify-center">
                <h2 
                    ref={titleRef} 
                    className="text-6xl font-limelight font-light"
                    >
                    Projects
                </h2>
            </div>
            <div className="px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Grille Bento sans espaces vides */}
                    <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
                        
                        {/* Portfolio (3x2) */}
                        <div
                            ref={(el) => { projectRefs.current[0] = el }}
                            className="col-span-3 row-span-2 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="absolute top-2 right-2 w-3 h-3 bg-[#FAF1E6] group-hover:bg-[#08553d] rounded-full" />
                                <div className="text-center">
                                    <h3 className="font-bold mb-3 text-2xl">Portfolio Website</h3>
                                    <p className="mb-4 opacity-80 text-base line-clamp-3">Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with GSAP.</p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Next.js</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">TypeScript</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">GSAP</span>
                                    </div>
                                    <div className="flex justify-center gap-3">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Task Manager (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[1] = el }}
                            className="col-span-1 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-2 text-lg">Task Manager</h3>
                                    <p className="mb-3 opacity-80 text-sm line-clamp-2">Collaborative task management app.</p>
                                    <div className="flex justify-center gap-1 mb-3">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Vue.js</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Firebase</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Chatbot (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[2] = el }}
                            className="col-span-1 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-2 text-lg">AI Chatbot</h3>
                                    <p className="mb-3 opacity-80 text-sm line-clamp-2">Intelligent chatbot using NLP.</p>
                                    <div className="flex justify-center gap-1 mb-3">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Python</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">TensorFlow</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile App (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[3] = el }}
                            className="col-span-1 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-2 text-lg">Mobile App</h3>
                                    <p className="mb-3 opacity-80 text-sm line-clamp-2">Expense tracking mobile app.</p>
                                    <div className="flex justify-center gap-1 mb-3">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">React Native</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Expo</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Store</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog CMS (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[4] = el }}
                            className="col-span-1 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-2 text-lg">Blog CMS</h3>
                                    <p className="mb-3 opacity-80 text-sm line-clamp-2">Content management system for blogs.</p>
                                    <div className="flex justify-center gap-1 mb-3">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">React</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Strapi</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weather API (1x1) */}
                        <div
                            ref={(el) => { projectRefs.current[5] = el }}
                            className="col-span-1 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-2 text-lg">Weather API</h3>
                                    <p className="mb-3 opacity-80 text-sm line-clamp-2">RESTful API for weather forecasting.</p>
                                    <div className="flex justify-center gap-1 mb-3">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Express.js</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">PostgreSQL</span>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Docs</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* E-commerce Platform (3x1) */}
                        <div
                            ref={(el) => { projectRefs.current[6] = el }}
                            className="col-span-3 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="absolute top-2 right-2 w-3 h-3 bg-[#FAF1E6] group-hover:bg-[#08553d] rounded-full" />
                                <div className="text-center">
                                    <h3 className="font-bold mb-3 text-xl">E-commerce Platform</h3>
                                    <p className="mb-4 opacity-80 text-base line-clamp-2">Full-stack e-commerce solution with user authentication and payment integration.</p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">React</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Node.js</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">MongoDB</span>
                                    </div>
                                    <div className="flex justify-center gap-3">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard - Format large (6x1) */}
                        <div
                            ref={(el) => { projectRefs.current[7] = el }}
                            className="col-span-6 row-span-1 bg-[#08553d] text-[#FAF1E6] border-2 border-[#08553d] rounded-xl p-6 hover:bg-[#FAF1E6] hover:text-[#08553d] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <h3 className="font-bold mb-3 text-xl">Data Analytics Dashboard</h3>
                                    <p className="mb-4 opacity-80 text-base line-clamp-2">Interactive dashboard for data visualization and analytics using modern data science tools.</p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Python</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Streamlit</span>
                                        <span className="px-2 py-1 border border-current rounded-full opacity-70 text-xs">Pandas</span>
                                    </div>
                                    <div className="flex justify-center gap-3">
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Demo</a>
                                        <a href="#" className="underline hover:no-underline transition-all text-sm">Code</a>
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
