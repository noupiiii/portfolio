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
        }

        if (timelineRef.current) {
            gsap.fromTo(timelineRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.timeline-container',
                        start: "top center",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        // Animation de la timeline qui descend d'abord
        if (timelineRef.current) {
            gsap.fromTo(timelineRef.current,
                {
                    height: '0%'
                },
                {
                    height: '100%',
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

        // Animation des points qui apparaissent quand la ligne les atteint
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

        educationRefs.current.forEach((education, index) => {
            if (education) {
                // Alternance : pair = gauche vers droite, impair = droite vers gauche
                const isEven = index % 2 === 0
                
                gsap.fromTo(education, 
                    {
                        opacity: 0,
                        x: isEven ? -200 : 200,
                        y: -50,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: education,
                            start: "top 80%",
                            end: "top 20%",
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

    return (
        <div className=''>
            <div className='h-48 flex items-center justify-center'>
                <h2 
                    ref={titleRef}
                    className="text-6xl font-limelight font-light"
                >
                    Education
                </h2>
            </div>
            <div className="relative">
                {/* Container pour la timeline */}
                <div className="timeline-container absolute left-1/2 transform -translate-x-1/2 top-1/6 bottom-1/6">
                    {/* Ligne de fond */}
                    <div className="w-2 bg-transparent h-full relative -translate-x-1/2">
                        {/* Ligne qui se remplit */}
                        <div 
                            ref={timelineRef}
                            className="w-full bg-[#FAF1E6] rounded-full absolute top-0"
                            style={{ height: '0%' }}
                        />
                    </div>
                    
                                    {/* Points de la timeline */}
                    <div ref={(el) => { pointRefs.current[0] = el }} className="absolute top-0 w-8 h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-6 border-[#FAF1E6]" />
                    <div ref={(el) => { pointRefs.current[1] = el }} className="absolute top-1/2 w-8 h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-6 border-[#FAF1E6]" />
                    <div ref={(el) => { pointRefs.current[2] = el }} className="absolute bottom-0 w-8 h-8 bg-[#08553d] rounded-full transform -translate-x-1/2 border-6 border-[#FAF1E6]" />
                </div>

                {/* Contenu éducation */}
                <div className="flex flex-col">
                    {/* Master's degree - Gauche */}
                    <div className="h-96 flex justify-center mx-auto w-96 flex-col -translate-x-96">                        <div ref={(el) => { educationRefs.current[0] = el }}>
                            <h2 className="text-2xl">September 2025</h2>
                            <h2 className="text-3xl font-bold">Master&apos;s degree</h2>
                            <p className="italic text-2xl">Master&apos;s degree in data science & ia</p>
                            <h3 className="text-2xl">EPSI - Lille</h3>
                        </div>
                    </div>

                    {/* Bachelor's degree - Droite */}
                    <div className="h-96 flex justify-center mx-auto w-96 flex-col translate-x-96">
                        <div ref={(el) => { educationRefs.current[1] = el }}>
                            <h2 className="text-2xl">2022 - 2025</h2>
                            <h2 className="text-3xl font-bold">University and technology bachelor&apos;s degree in computer science</h2>
                            <p className="italic text-2xl">Development of secure, communicating applications</p>
                            <h3 className="text-2xl">IUT du Littoral et de la Côte d&apos;Opale</h3>
                        </div>
                    </div>

                    {/* Baccalaureate - Gauche */}
                    <div className="h-96 flex justify-center mx-auto w-96 flex-col -translate-x-96">
                        <div ref={(el) => { educationRefs.current[2] = el }}>
                            <h2 className="text-2xl">2018 - 2022</h2>
                            <h2 className="text-3xl font-bold">Technological baccalaureate</h2>
                            <p className="italic text-2xl">Technical sciences of management and administration</p>
                            <h3 className="text-2xl">Sophie Berthelot High School - Calais</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}