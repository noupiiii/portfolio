'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
    const educationRefs = useRef<(HTMLDivElement | null)[]>([])
    const timelineRef = useRef<HTMLDivElement>(null)
    const pointRefs = useRef<(HTMLDivElement | null)[]>([])
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
        }        // Animation de la timeline (uniquement sur desktop)
        if (timelineRef.current && window.innerWidth >= 1024) {
            // Animation de la ligne qui descend avec le scroll
            gsap.fromTo(timelineRef.current,
                {
                    height: '0%',
                    opacity: 0
                },
                {
                    height: '100%',
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.timeline-container',
                        start: "top center",
                        end: "bottom center",
                        scrub: 1
                    }
                }
            )
        }

        // Animation des points (uniquement sur desktop)
        if (window.innerWidth >= 1024) {
            pointRefs.current.forEach((point, index) => {
                if (point) {
                    gsap.fromTo(point,
                        {
                            scale: 0,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.8,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: '.timeline-container',
                                start: index === 0 ? "top center" : index === 1 ? "center center" : "bottom center",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )
                }
            })
        }educationRefs.current.forEach((education, index) => {
            if (education) {
                // Animation responsive basée sur les breakpoints CSS
                const isEven = index % 2 === 0

                gsap.fromTo(education,
                    {
                        opacity: 0,
                        x: window.innerWidth >= 1024 ? (isEven ? -200 : 200) : 0,
                        y: window.innerWidth >= 1024 ? -50 : 100,
                        scale: window.innerWidth >= 1024 ? 0.8 : 0.9
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: window.innerWidth >= 1024 ? 1.2 : 1,
                        ease: window.innerWidth >= 1024 ? "power3.out" : "power2.out",
                        scrollTrigger: {
                            trigger: education,
                            start: window.innerWidth >= 1024 ? "top 80%" : "top 85%",
                            end: window.innerWidth >= 1024 ? "top 20%" : "top 40%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (            <div className='px-4 sm:px-6 lg:px-8 overflow-hidden' id='education'>
            <div className='h-32 sm:h-40 lg:h-48 flex items-center justify-center'>
                <h2 
                    ref={titleRef}
                    className="text-3xl sm:text-4xl lg:text-6xl font-limelight font-light text-center"
                >
                    Education
                </h2>
            </div>
            <div className="relative min-h-screen overflow-hidden">                {/* Container pour la timeline - masqué sur mobile */}
                <div className="timeline-container hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/6 bottom-1/6">
                    {/* Ligne de fond */}
                    <div className="w-2 bg-[#08553d]/20 h-full relative -translate-x-1/2 rounded-full">
                        {/* Ligne qui se remplit */}
                        <div 
                            ref={timelineRef}
                            className="w-full bg-[#FAF1E6] rounded-full absolute top-0"
                            style={{ height: '0%' }}
                        />
                    </div>

                    {/* Points de la timeline */}
                    <div ref={(el) => { pointRefs.current[0] = el }} className="absolute top-0 w-6 h-6 lg:w-8 lg:h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-4 lg:border-6 border-[#FAF1E6]" />
                    <div ref={(el) => { pointRefs.current[1] = el }} className="absolute top-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-4 lg:border-6 border-[#FAF1E6]" />
                    <div ref={(el) => { pointRefs.current[2] = el }} className="absolute bottom-0 w-6 h-6 lg:w-8 lg:h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-4 lg:border-6 border-[#FAF1E6]" />
                </div>                {/* Contenu éducation */}
                <div className="flex flex-col space-y-8 lg:space-y-0 max-w-full">
                    {/* Master's degree */}
                    <div className="min-h-64 lg:h-96 flex justify-center mx-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg flex-col lg:ml-auto lg:mr-8 xl:mr-16 p-4 lg:p-0">
                        <div ref={(el) => { educationRefs.current[0] = el }} className="text-center lg:text-left">
                            <h2 className="text-lg sm:text-xl lg:text-2xl mb-2">September 2025</h2>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Master&apos;s degree</h2>
                            <p className="italic text-lg sm:text-xl lg:text-2xl mb-2">Master&apos;s degree in data science & ia</p>
                            <h3 className="text-lg sm:text-xl lg:text-2xl">EPSI - Lille</h3>
                        </div>
                    </div>

                    {/* Bachelor's degree */}
                    <div className="min-h-64 lg:h-96 flex justify-center mx-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg flex-col lg:mr-auto lg:ml-8 xl:ml-16 p-4 lg:p-0">
                        <div ref={(el) => { educationRefs.current[1] = el }} className="text-center lg:text-left">
                            <h2 className="text-lg sm:text-xl lg:text-2xl mb-2">2022 - 2025</h2>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">University and technology bachelor&apos;s degree in computer science</h2>
                            <p className="italic text-lg sm:text-xl lg:text-2xl mb-2">Development of secure, communicating applications</p>
                            <h3 className="text-lg sm:text-xl lg:text-2xl">IUT du Littoral et de la Côte d&apos;Opale</h3>
                        </div>
                    </div>

                    {/* Baccalaureate */}
                    <div className="min-h-64 lg:h-96 flex justify-center mx-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg flex-col lg:ml-auto lg:mr-8 xl:mr-16 p-4 lg:p-0">
                        <div ref={(el) => { educationRefs.current[2] = el }} className="text-center lg:text-left">
                            <h2 className="text-lg sm:text-xl lg:text-2xl mb-2">2018 - 2022</h2>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Technological baccalaureate</h2>
                            <p className="italic text-lg sm:text-xl lg:text-2xl mb-2">Technical sciences of management and administration</p>
                            <h3 className="text-lg sm:text-xl lg:text-2xl">Sophie Berthelot High School - Calais</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}