import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#0A192F] border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#FACC15] font-semibold tracking-wide uppercase text-sm mb-3">The Survivors</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Only the strong remain
                    </p>
                    <p className="mt-4 text-xl text-[#8892B0]">
                        Four slots are currently reserved for our first early adopters willing to undergo the audit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3, 4].map((slot) => (
                        <div
                            key={slot}
                            className="relative p-8 rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:border-[#FACC15]/50 hover:bg-white/10 transition-all duration-300 min-h-[250px] group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                            <div className="w-16 h-16 rounded-full bg-[#0A192F] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                <svg className="w-6 h-6 text-[#8892B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">Early Adopter Slot {slot}</h3>
                            <p className="text-[#8892B0] text-sm italic">
                                "Will your startup be featured here? Apply for a free audit to claim this spot and prove your resilience."
                            </p>

                            <a href="#audit" className="mt-6 text-sm font-semibold text-[#FACC15] hover:text-yellow-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Claim this spot
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
