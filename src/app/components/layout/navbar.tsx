'use client'
import Link from "next/link"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
    const navItemsRefs = useRef<(HTMLLIElement | null)[]>([])

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

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <nav className="flex items-center justify-between px-24 py-4 fixed top-0 w-full z-10 overflow-hidden">
            <ul className="flex items-center gap-4">
                <li ref={(el) => navItemsRefs.current[0] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">Home</Link>
                </li>
                <li ref={(el) => navItemsRefs.current[1] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">About</Link>
                </li>
                <li ref={(el) => navItemsRefs.current[2] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">Projects</Link>
                </li>
                <li ref={(el) => navItemsRefs.current[3] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">Contact</Link>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li ref={(el) => navItemsRefs.current[4] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">Github</Link>
                </li>
                <li ref={(el) => navItemsRefs.current[5] = el}>
                    <Link href={"#"} className="hover:text-gray-600 transition-colors">Linkedin</Link>
                </li>
            </ul>
        </nav>
    )
}