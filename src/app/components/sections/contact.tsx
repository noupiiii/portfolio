'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    // Refs for animations
    const headerRef = useRef<HTMLDivElement>(null)
    const headerTitleRef = useRef<HTMLHeadingElement>(null)
    const leftContentRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const featureItemsRef = useRef<HTMLDivElement[]>([])
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header title animation (same as About and Education)
            if (headerTitleRef.current) {
                gsap.fromTo(headerTitleRef.current,
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
                            trigger: headerTitleRef.current,
                            start: "top 80%",
                            end: "top 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }

            // Header animation
            gsap.fromTo(headerRef.current, 
                { 
                    opacity: 0, 
                    y: 50 
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2,
                    ease: "power3.out"
                }
            )

            // Left content animation
            gsap.fromTo(leftContentRef.current,
                {
                    opacity: 0,
                    x: -50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftContentRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Title animation with bounce effect
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: -30,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Form animation
            gsap.fromTo(formRef.current,
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Feature items stagger animation
            gsap.fromTo(featureItemsRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: featureItemsRef.current[0],
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        })

        return () => ctx.revert()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Button animation on submit
        gsap.to(e.currentTarget.querySelector('button'), {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        })
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
            
            // Success animation
            gsap.fromTo('.success-message', 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
            )
        } catch {
            setSubmitStatus('error')
            
            // Error animation
            gsap.fromTo('.error-message', 
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.7)" }
            )        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        gsap.to(e.target, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        })
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        gsap.to(e.target, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        })    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            description: 'Write to me directly',
            value: 'contact@youremail.com',
            href: 'mailto:contact@youremail.com',
            gradient: 'from-blue-500/20 to-cyan-500/20',
            hoverColor: 'hover:border-blue-500/50'
        },        {
            icon: '💼',
            title: 'LinkedIn',
            description: 'Let&apos;s connect professionally',
            value: 'linkedin.com/in/yourname',
            href: 'https://linkedin.com/in/yourname',
            gradient: 'from-blue-600/20 to-blue-700/20',
            hoverColor: 'hover:border-blue-600/50'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            description: 'Instant message',
            value: '+33 6 XX XX XX XX',
            href: 'https://wa.me/33XXXXXXXXX',
            gradient: 'from-green-500/20 to-green-600/20',
            hoverColor: 'hover:border-green-500/50'
        },
        {
            icon: '📱',
            title: 'Phone',
            description: 'Call me directly',
            value: '+33 6 XX XX XX XX',
            href: 'tel:+33XXXXXXXXX',
            gradient: 'from-purple-500/20 to-purple-600/20',
            hoverColor: 'hover:border-purple-500/50'
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div ref={headerRef} className="h-48 flex items-center justify-center">
                <h2 ref={headerTitleRef} className="text-6xl font-limelight font-light">Contact</h2>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

                {/* Contact Form */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div ref={leftContentRef}>
                        <h2 ref={titleRef} className="text-4xl font-bold mb-6">Send a message</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Use the form below to send me a detailed message. 
                            I strive to respond to all messages within 24 hours.
                        </p>
                        
                    </div>

                    <div ref={formRef} className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                                    placeholder="Describe your project, your needs or ask your questions..."
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r bg-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </>
                                )}
                            </button>
                              {submitStatus === 'success' && (
                                <div className="success-message bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm">
                                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="error-message bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                                    ❌ Error sending message. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}