'use client'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className='bg-[#FAF1E6] text-[#08553d] overflow-hidden' id='projects'>            <div className="h-24 sm:h-32 lg:h-40 xl:h-48 flex items-center justify-center px-3 sm:px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-limelight font-light text-center">
                    Projects
                </h2>
            </div>
              <div className="px-3 sm:px-6 lg:px-8 pb-6 sm:pb-12 lg:pb-16">
                <div className="max-w-7xl mx-auto">{/* Grille responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
                          {/* Projet 1 - Large carré (2x2) avec image de fond */}
                        <Link href={"https://cryptosquare.csquare.dev/"} target='_blank' className="sm:col-span-2 lg:col-span-2 xl:col-span-2 sm:row-span-2 lg:row-span-2">
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
                                
                                <div className="relative h-full flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8 z-10">
                                    <div className="text-left">
                                        <div className="mb-3">
                                            <span className="inline-block px-3 py-1 bg-[#FAF1E6]/20 backdrop-blur-sm rounded-full text-[#FAF1E6] text-xs font-medium border border-[#FAF1E6]/30">
                                                Featured Project
                                            </span>
                                        </div>                                        <h3 className="font-bold mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FAF1E6]">Online Cryptography Game</h3>
                                        <p className="mb-3 sm:mb-4 lg:mb-6 text-[#FAF1E6]/90 text-xs sm:text-sm md:text-base leading-relaxed">Fullstack application for creating and solving cryptographic puzzles in teams</p>                                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 lg:mb-6">
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">NuxtJS</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">Node.js</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/10 backdrop-blur-sm border border-[#FAF1E6]/30 rounded-full text-[#FAF1E6] text-xs font-medium">MongoDB</span>
                                        </div>                                        <div className="hidden sm:flex flex-col sm:flex-row gap-2 sm:gap-4">
                                            <span className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#FAF1E6] text-[#08553d] rounded-lg font-medium text-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                                                Live Demo
                                            </span>
                                            <span 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open("https://github.com/noupiiii/CryptoSquare", "_blank");
                                                }}
                                                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-[#FAF1E6]/30 text-[#FAF1E6] rounded-lg font-medium text-sm hover:bg-[#FAF1E6]/20 hover:border-[#FAF1E6]/60 transition-all duration-300 cursor-pointer"
                                            >
                                                Code
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 2 - Petit carré (1x1) */}                        <Link href={"https://github.com/noupiiii/uHDR"} target='_blank' className="col-span-1 row-span-1">
                            <div 
                                className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('/assets/images/hdr-software.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#08553d]/90 to-[#064a36]/90 transition-all duration-300"></div>
                                <div className="relative h-full flex flex-col justify-center z-10">                                    <div className="text-center">
                                        <div className="mb-2 sm:mb-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 7h-1.17l-1.41-1.41A2 2 0 0 0 16 5h-4a2 2 0 0 0-1.41.59L9.17 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 11H4V9h16zm-8-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">HDR Software</h3>
                                        <p className="mb-2 sm:mb-4 opacity-80 text-xs sm:text-sm">Update of HDR editing software used by Xiaomi & Huawei research.</p><div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>                        {/* Projet 3 - Rectangle vertical (1x2) */}                        <Link href={"https://github.com/noupiiii/Escape-From-Site-06-fr"} target='_blank' className="col-span-1 sm:row-span-1 lg:row-span-2">
                            <div 
                                className="h-full bg-gradient-to-b from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('/assets/images/scp-project.webp')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#08553d]/90 to-[#064a36]/90 transition-all duration-300"></div>
                                <div className="relative h-full flex flex-col justify-center z-10">                                    <div className="text-center">
                                        <div className="mb-2 sm:mb-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl">Escape From Site 06</h3>
                                        <p className="mb-3 sm:mb-4 lg:mb-6 opacity-80 text-xs sm:text-sm lg:text-base leading-relaxed">2D turn-based board game. The aim is to escape from a SCP complex.</p>
                                        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Pygame</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 4 - Petit carré (1x1) */}                        <Link href={"https://github.com/noupiiii/pokedex-vuejs"} target='_blank' className="col-span-1 row-span-1">
                            <div 
                                className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('/assets/images/pokemon-project.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#08553d]/90 to-[#064a36]/90 transition-all duration-300"></div>
                                <div className="relative h-full flex flex-col justify-center z-10">                                    <div className="text-center">
                                        <div className="mb-2 sm:mb-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Pokédex</h3>
                                        <p className="mb-2 sm:mb-4 opacity-80 text-xs sm:text-sm">Pokédex graphical interface using PokéAPI</p><div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Vue.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 5 - Petit carré (1x1) */}                        <Link href={"https://github.com/noupiiii/portfolio"} target='_blank' className="col-span-1 row-span-1">
                            <div 
                                className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('/assets/images/photo-min.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#08553d]/90 to-[#064a36]/90 transition-all duration-300"></div>
                                <div className="relative h-full flex flex-col justify-center z-10">                                    <div className="text-center">
                                        <div className="mb-2 sm:mb-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Portfolio</h3>
                                        <p className="mb-2 sm:mb-4 opacity-80 text-xs sm:text-sm">Personal portfolio website built with Next.js.</p><div className="flex justify-center">
                                            <span className="px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Next.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>                        {/* Projet 6 - Rectangle horizontal (2x1) */}                        <Link href={"https://github.com/noupiiii/image-editor-app"} target='_blank' className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1">
                            <div 
                                className="h-full bg-gradient-to-r from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02] relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('/assets/images/image-editor.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#08553d]/90 to-[#064a36]/90 transition-all duration-300"></div>
                                <div className="relative h-full flex items-center z-10">                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-4">
                                        <div className="flex items-center space-x-2 sm:space-x-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#FAF1E6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">Image Editor</h3>
                                                <p className="opacity-80 text-xs sm:text-sm lg:text-base">Image editing API with color clustering features.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Python</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">FastAPI</span>
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">Nuxt.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Projet 7 - Petit carré (1x1) */}                        <Link href={"https://github.com/noupiiii"} target='_blank' className="col-span-1 row-span-1">
                            <div className="h-full bg-gradient-to-br from-[#08553d] to-[#064a36] text-[#FAF1E6] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="relative h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="mb-2 sm:mb-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-[#FAF1E6]/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">More Projects</h3>
                                        <p className="mb-2 sm:mb-4 opacity-80 text-xs sm:text-sm">Check out my GitHub for more projects!</p>
                                        <div className="flex justify-center">
                                            <span className="px-2 sm:px-3 py-1 bg-[#FAF1E6]/20 rounded-full text-xs font-medium border border-current/30">GitHub</span>
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
