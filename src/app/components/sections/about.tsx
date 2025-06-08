'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([])
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
        }        textRefs.current.forEach((text, index) => {
            if (text) {
                // Animation responsive basée sur les breakpoints CSS
                const isMobile = window.innerWidth < 1024

                gsap.fromTo(text, 
                    {
                        opacity: 0,
                        x: isMobile ? 0 : (index % 2 === 0 ? -200 : 200),
                        y: isMobile ? 50 : -50,
                        scale: isMobile ? 0.9 : 0.8
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: isMobile ? 1 : 1.2,
                        ease: isMobile ? "power2.out" : "power3.out",
                        scrollTrigger: {
                            trigger: text,
                            start: isMobile ? "top 85%" : "top 80%",
                            end: isMobile ? "top 40%" : "top 20%",
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

    return (        <div className='bg-[#FAF1E6] text-[#08553d] px-4 sm:px-6 lg:px-8' id='about'>
            <div className='h-32 sm:h-40 lg:h-48 flex items-center justify-center'>
                <h2 
                    ref={titleRef}
                    className="text-3xl sm:text-4xl lg:text-6xl font-limelight font-light text-center"
                >
                    About me
                </h2>
            </div>
            <div className="min-h-64 sm:min-h-80 lg:h-96 flex items-center justify-center px-4">
                <p 
                    ref={(el) => { textRefs.current[0] = el }}
                    className="text-lg sm:text-xl lg:text-3xl max-w-xs sm:max-w-sm lg:w-96 text-center lg:text-left leading-relaxed"
                >
                    I&apos;m currently in my final year of BUT informatique and am looking for a work-study position in data science & AI for September 2025.
                </p>
            </div>
            <div className="min-h-64 sm:min-h-80 lg:h-96 flex items-center justify-center px-4">
                <p 
                    ref={(el) => { textRefs.current[1] = el }}
                    className="text-lg sm:text-xl lg:text-3xl max-w-xs sm:max-w-sm lg:w-96 text-center lg:text-left leading-relaxed"
                >
                    Originally from Calais, a town steeped in history, I&apos;m currently developing a community solution for worldwide archive storage.
                </p>
            </div>
            <div className="min-h-64 sm:min-h-80 lg:h-96 flex items-center justify-center px-4">
                <p 
                    ref={(el) => { textRefs.current[2] = el }}
                    className="text-lg sm:text-xl lg:text-3xl max-w-xs sm:max-w-sm lg:w-96 text-center lg:text-left leading-relaxed"
                >
                    Apart from the wonderful world of computing, I go to the gym and do some swimming.
                </p>
            </div>
        </div>
    )
}