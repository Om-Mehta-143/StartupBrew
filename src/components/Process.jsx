import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Founder Resilience Test",
            description: "We don't just look at the code. We simulate high-pressure scenarios to see how the founding team communicates, prioritizes, and survives when the runway gets cut.",
            icon: (
                <svg className="w-8 h-8 text-[#0A192F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Operational Stress Test",
            description: "Our proprietary framework attacks your business logic, technical architecture, and customer acquisition channels to find the silent killers before they launch.",
            icon: (
                <svg className="w-8 h-8 text-[#0A192F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            number: "03",
            title: "The Viability Roadmap",
            description: "You receive a brutal, unfiltered report on your actual runway, critical dependencies, and the exact steps needed to make the startup fundamentally unkillable.",
            icon: (
                <svg className="w-8 h-8 text-[#0A192F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="process" className="py-24 bg-[#0A192F] border-t border-white/5 relative overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#FACC15] font-semibold tracking-wide uppercase text-sm mb-3">The Secret Framework</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        How we break your startup
                    </p>
                    <p className="mt-4 text-xl text-[#8892B0]">
                        A specialized three-phase audit designed to expose weaknesses before the market does.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FACC15] shadow-lg shadow-[#FACC15]/20 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="mt-6 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-xs mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-[#8892B0] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="#audit"
                        className="inline-flex items-center justify-center rounded-lg border border-[#FACC15] px-8 py-4 text-base font-bold text-[#FACC15] hover:bg-[#FACC15]/10 hover:shadow-lg hover:shadow-[#FACC15]/20 transition-all duration-200"
                    >
                        Schedule your audit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
