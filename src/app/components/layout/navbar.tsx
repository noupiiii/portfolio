'use client'
import Link from "next/link"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
    const navItemsRefs = useRef<(HTMLLIElement | null)[]>([])
    const navRef = useRef<HTMLElement>(null)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const tl = gsap.timeline()

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
                    index * 0.08
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

    return (
        // 'bg-[#FAF1E6] text-[#08553d]'
        <nav ref={navRef} className="flex back items-center justify-between px-24 py-4 fixed top-0 w-full z-10 overflow-hidden">
            <ul className="flex items-center gap-4 bg-[#FAF1E6] text-[#08553d] px-4 py-2 border border-[#08553d] rounded-full">
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
            <ul className="flex items-center gap-4 bg-[#FAF1E6] rounded-full text-[#08553d] px-4 py-2 border border-[#08553d]">
                <li ref={(el) => { navItemsRefs.current[5] = el }}>
                    <Link href={"#"} className="hover:underline">Github</Link>
                </li>
                <li ref={(el) => { navItemsRefs.current[6] = el }}>
                    <Link href={"#"} className="hover:underline">Linkedin</Link>
                </li>
            </ul>
        </nav>
    )
}