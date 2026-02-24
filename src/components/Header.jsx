import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A192F]/90 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold tracking-tight text-white">
                            Startup<span className="text-[#FACC15]">Brew</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><a href="#process" className="text-[#8892B0] hover:text-white transition-colors">The Process</a></li>
                            <li><a href="#audit" className="text-[#8892B0] hover:text-white transition-colors">Free Audit</a></li>
                            <li><a href="#about" className="text-[#8892B0] hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <a href="#contact" className="rounded-md bg-[#FACC15] px-4 py-2 text-sm font-semibold text-[#0A192F] hover:bg-yellow-400 transition-colors">
                            Contact Us
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
                        <a href="#process" className="block rounded-md px-3 py-2 text-base font-medium text-[#8892B0] hover:bg-white/5 hover:text-white">The Process</a>
                        <a href="#audit" className="block rounded-md px-3 py-2 text-base font-medium text-[#8892B0] hover:bg-white/5 hover:text-white">Free Audit</a>
                        <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-[#8892B0] hover:bg-white/5 hover:text-white">About Us</a>
                        <a href="#contact" className="block mt-4 rounded-md bg-[#FACC15] px-3 py-2 text-center text-base font-medium text-[#0A192F] hover:bg-yellow-400">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
