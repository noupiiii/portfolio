'use client'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className='bg-[#FAF1E6] text-[#08553d] overflow-hidden' id='projects'>
            <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-limelight font-light text-center">
                    Projects
                </h2>
            </div>
            
            <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Grille responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px]">
                        
                        {/* Projet 1 - Large carré (2x2) avec image de fond */}
                        <Link href={"https://cryptosquare.csquare.dev/"} target='_blank' className="lg:col-span-2 lg:row-span-2">
                            <div
                                className="h-full bg-[#08553d] text-[#FAF1E6] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    backgroundImage: "url('/assets/images/cryptosquare-prev.png')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#08553d]/95 via-[#08553d]/70 to-[#08553d]/40 group-hover:from-[#08553d]/90 group-hover:via-[#08553d]/60 group-hover:to-[#08553d]/30 transition-all duration-300"></div>
                                
                                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 z-10">
                                    <div className="text-left">
                                        <div className="mb-3">
                                            <span className="inline-block px-3 py-1 bg-[#FAF1E6]/20 backdrop-blur-sm rounded-full text-[#FAF1E6] text-xs font-medium border border-[#FAF1E6]/30">
                                                Featured Project
                                            </span>
                                        </div>
                                        <h3 className="font-bold mb-3 text-xl sm:text-2xl lg:text-3xl text-[#FAF1E6]">Online Cryptography Game</h3>
                                        <p className="mb-4 sm:mb-6 text-[#FAF1E6]/90 text-sm sm:text-base leading-relaxed">Fullstack application for creating and solving cryptographic puzzles in teams</p>
                                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">NuxtJS</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">Node.js</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">MongoDB</span>
                                        </div>
                                        <div className="hidden lg:flex flex-col sm:flex-row gap-2 sm:gap-4">
                                            <span className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#FAF1E6] text-[#08553d] rounded-lg font-medium text-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                                                Live Demo
                                            </span>
                                            <Link href={"https://github.com/noupiiii/CryptoSquare"} target='_blank' className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-[#FAF1E6]/30 text-[#FAF1E6] rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/20 hover:border-[#FAF1E6]/60 transition-all duration-300">
                                                Code
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 2 - Petit carré (1x1) */}
                        <Link href={"https://github.com/noupiiii/uHDR"} target='_blank' className="col-span-1 row-span-1">
                            <div className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <div className="w-8 h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 7h-1.17l-1.41-1.41A2 2 0 0 0 16 5h-4a2 2 0 0 0-1.41.59L9.17 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 11H4V9h16zm-8-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-2 text-base sm:text-lg">HDR Software</h3>
                                        <p className="mb-4 opacity-80 text-xs sm:text-sm">Update of HDR editing software used by Xiaomi & Huawei research.</p>
                                        <div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 3 - Rectangle vertical (1x2) */}
                        <Link href={"https://github.com/noupiiii/Escape-From-Site-06-fr"} target='_blank' className="col-span-1 lg:row-span-2">
                            <div className="h-full bg-gradient-to-b from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-3 text-lg sm:text-xl">Escape From Site 06</h3>
                                        <p className="mb-4 sm:mb-6 opacity-80 text-sm sm:text-base leading-relaxed">2D turn-based board game. The aim is to escape from a SCP complex.</p>
                                        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Pygame</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 4 - Petit carré (1x1) */}
                        <Link href={"https://github.com/noupiiii/pokedex-vuejs"} target='_blank' className="col-span-1 row-span-1">
                            <div className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <div className="w-8 h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-2 text-base sm:text-lg">Pokédex</h3>
                                        <p className="mb-4 opacity-80 text-xs sm:text-sm">Pokédex graphical interface using PokéAPI</p>
                                        <div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Vue.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 5 - Petit carré (1x1) */}
                        <Link href={"https://github.com/noupiiii/portfolio"} target='_blank' className="col-span-1 row-span-1">
                            <div className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <div className="w-8 h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-2 text-base sm:text-lg">Portfolio</h3>
                                        <p className="mb-4 opacity-80 text-xs sm:text-sm">Personal portfolio website built with Next.js.</p>
                                        <div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Next.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 6 - Rectangle horizontal (2x1) */}
                        <Link href={"https://github.com/noupiiii/image-editor-app"} target='_blank' className="sm:col-span-2 row-span-1">
                            <div className="h-full bg-gradient-to-r from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02]">
                                <div className="relative h-full flex items-center">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-2 text-lg sm:text-xl">Image Editor</h3>
                                                <p className="opacity-80 text-sm sm:text-base">Image editing API with color clustering features.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">FastAPI</span>
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Nuxt.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 7 - Petit carré (1x1) */}
                        <Link href={"https://github.com/noupiiii"} target='_blank'>
                        <div className="col-span-1 row-span-1">
                            <div className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <div className="w-8 h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-2 text-base sm:text-lg">More Projects</h3>
                                        <p className="mb-4 opacity-80 text-xs sm:text-sm">Check out my GitHub for more projects!</p>
                                        <div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">GitHub</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
