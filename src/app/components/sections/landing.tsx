'use client'
import Image from "next/image"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Landing() {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // Animation séquentielle
        tl.fromTo(imageRef.current, 
            { 
                opacity: 0, 
                scale: 0.5, 
                rotate: -10 
            },
            { 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }
        )
        .fromTo(titleRef.current,
            { 
                opacity: 0, 
                y: 30 
            },
            { 
                opacity: 1, 
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.3" // Commence 0.3s avant la fin de l'animation précédente
        )
        .fromTo(subtitleRef.current,
            { 
                opacity: 0, 
                y: 20 
            },
            { 
                opacity: 1, 
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            },
            "-=0.4"
        )

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="h-screen items-center justify-center flex flex-col" id="landing">
            <div ref={imageRef} className="h-48 w-48 rounded-full bg-neutral-50 overflow-hidden flex items-center justify-center">
                <Image
                    src="/assets/images/photo-min.jpg"
                    alt="profile picture"
                    width={192}
                    height={192}
                    className="object-cover h-48 w-48"
                    priority
                />
            </div>
            <h1 ref={titleRef} className="text-6xl pt-8 font-bold font-limelight">Louis Bruche</h1>
            <h2 ref={subtitleRef} className="text-lg pt-3">Fullstack developer</h2>
        </div>
    )
}