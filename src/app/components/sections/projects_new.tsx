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
            case 'small':
                return 'col-span-1 row-span-1'
            case 'medium':
                return 'col-span-2 row-span-2'
            case 'large':
                return 'col-span-2 row-span-3 md:col-span-3 md:row-span-2'
            case 'wide':
                return 'col-span-2 row-span-1 md:col-span-3'
            case 'tall':
                return 'col-span-1 row-span-2'
            default:
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
                    {/* Grille Bento */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => { projectRefs.current[index] = el }}
                                className={`${getSizeClasses(project.size)} ${project.color || 'bg-[#08553d]'} 
                                          rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 
                                          shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden
                                          relative group`}
                            >
                                {/* Overlay pour l'effet hover */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                
                                <div className="relative h-full flex flex-col">
                                    {/* Badge featured pour les projets mis en avant */}
                                    {project.featured && (
                                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                                            Featured
                                        </div>
                                    )}
                                    
                                    <div className="flex-1">
                                        <h3 className={`font-bold text-white mb-2 ${
                                            project.size === 'large' ? 'text-2xl md:text-3xl' :
                                            project.size === 'medium' ? 'text-xl md:text-2xl' :
                                            project.size === 'wide' ? 'text-lg md:text-xl' :
                                            'text-lg'
                                        }`}>
                                            {project.title}
                                        </h3>
                                        <p className={`text-white/90 mb-4 ${
                                            project.size === 'small' ? 'text-sm line-clamp-2' :
                                            project.size === 'tall' ? 'text-sm line-clamp-4' :
                                            'text-sm md:text-base line-clamp-3'
                                        }`}>
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <div className={`flex flex-wrap gap-1 ${
                                            project.size === 'small' ? 'gap-1' : 'gap-2'
                                        }`}>
                                            {project.technologies.slice(0, project.size === 'small' ? 2 : 4).map((tech) => (
                                                <span 
                                                    key={tech}
                                                    className={`px-2 py-1 bg-white/20 text-white rounded-full ${
                                                        project.size === 'small' ? 'text-xs' : 'text-xs md:text-sm'
                                                    }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > (project.size === 'small' ? 2 : 4) && (
                                                <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">
                                                    +{project.technologies.length - (project.size === 'small' ? 2 : 4)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Links */}
                                    <div className={`flex gap-3 ${
                                        project.size === 'small' ? 'gap-2' : 'gap-3'
                                    }`}>
                                        {project.links.demo && (
                                            <a 
                                                href={project.links.demo} 
                                                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a 
                                                href={project.links.github} 
                                                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.links.docs && (
                                            <a 
                                                href={project.links.docs} 
                                                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                                            >
                                                Docs
                                            </a>
                                        )}
                                        {project.links.store && (
                                            <a 
                                                href={project.links.store} 
                                                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                                            >
                                                Store
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
