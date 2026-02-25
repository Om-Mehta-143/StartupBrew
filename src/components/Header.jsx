import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-[#0A192F]/80 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#hero" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FACC15] to-amber-600 flex items-center justify-center shadow-lg shadow-[#FACC15]/20 group-hover:shadow-[#FACC15]/40 transition-all">
                                <span className="text-[#0A192F] text-lg font-black leading-none">S</span>
                            </div>
                            <span>Startup<span className="text-[#FACC15]">Brew</span></span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-10">
                            <li><a href="#process" className="text-sm font-medium text-[#8892B0] hover:text-[#FACC15] transition-colors tracking-wide">The Process</a></li>
                            <li><a href="#testimonials" className="text-sm font-medium text-[#8892B0] hover:text-[#FACC15] transition-colors tracking-wide">Survivors</a></li>
                            <li><a href="#contact" className="text-sm font-medium text-[#8892B0] hover:text-[#FACC15] transition-colors tracking-wide">Apply</a></li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <a href="#contact" className="relative inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#FACC15]/50 transition-all duration-300 overflow-hidden group">
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#FACC15]"></span>
                            <span className="relative">Contact Us</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#8892B0] hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0A192F] border-b border-white/10">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        <a href="#process" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-[#8892B0] hover:bg-white/5 hover:text-white">The Process</a>
                        <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-[#8892B0] hover:bg-white/5 hover:text-white">Survivors</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block mt-4 rounded-md bg-[#FACC15] px-3 py-2 text-center text-base font-medium text-[#0A192F] hover:bg-yellow-400">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
