import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#0A192F] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight text-white mb-2 block">
                            Startup<span className="text-[#FACC15]">Brew</span>
                        </a>
                        <p className="text-sm text-[#8892B0]">
                            Stress-testing startups for the real world.
                        </p>
                    </div>

                    <nav>
                        <ul className="flex flex-wrap justify-center gap-6 text-sm text-[#8892B0]">
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#process" className="hover:text-white transition-colors">Framework</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Survivors</a></li>
                            <li><a href="mailto:hello@startupbrew.com" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-sm text-[#8892B0]/60">
                    <p>&copy; {new Date().getFullYear()} StartupBrew. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="mailto:hello@startupbrew.com" className="hover:text-[#FACC15] transition-colors font-semibold text-white">
                            Apply via Email: hello@startupbrew.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
