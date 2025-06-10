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
        }

        textRefs.current.forEach((text, index) => {
            if (text) {
                // Alternance : pair = gauche vers droite, impair = droite vers gauche
                const isEven = index % 2 === 0
                
                gsap.fromTo(text, 
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
                            trigger: text,
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
        <div className='bg-[#FAF1E6] text-[#08553d]' id='about'>
            <div className='h-48 flex items-center justify-center'>
                <h2 
                    ref={titleRef}
                    className="text-6xl font-limelight font-light"
                >
                    About me
                </h2>
            </div>            <div className="h-96 flex items-center justify-center">
                <p 
                    ref={(el) => { textRefs.current[0] = el }}
                    className="text-3xl w-96"
                >
                    I&apos;m currently in my final year of BUT informatique and am looking for a work-study position in data science & AI for September 2025.
                </p>
            </div>
            <div className="h-96 flex items-center justify-center">
                <p 
                    ref={(el) => { textRefs.current[1] = el }}
                    className="text-3xl w-96"
                >
                    Originally from Calais, a town steeped in history, I&apos;m currently developing a community solution for worldwide archive storage.
                </p>
            </div>            <div className="h-96 flex items-center justify-center">
                <p 
                    ref={(el) => { textRefs.current[2] = el }}
                    className="text-3xl w-96"
                >
                    Apart from the wonderful world of computing, I go to the gym and do some swimming.
                </p>
            </div>
        </div>
    )
}