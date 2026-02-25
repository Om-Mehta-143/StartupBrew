import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center rounded-full border border-[#FACC15]/20 bg-[#FACC15]/5 px-4 py-1.5 text-sm font-medium text-[#FACC15] mb-8 shadow-[0_0_15px_rgba(250,204,21,0.1)] backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]"></span>
                        </span>
                        Limited slots: Only accepting 4 startups this month
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-[5rem] mb-8 leading-[1.1]">
                        We stress-test your startup <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-amber-500 pb-2 inline-block">before you burn cash.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[#8892B0] leading-relaxed font-light">
                        StartupBrew is an exclusive auditing service. Using our proprietary framework, we push your operational robustness and founder resilience to the absolute limit.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-500 px-8 py-4 text-base font-bold text-[#0A192F] shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Apply for a Free Audit
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                        <a
                            href="#process"
                            className="w-full sm:w-auto rounded-lg px-8 py-4 text-base font-bold text-white border border-white/20 hover:bg-white/5 transition-all duration-200"
                        >
                            How it works
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-white">0%</div>
                            <div className="text-sm text-[#8892B0] mt-1">Sugar-coating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-[#8892B0] mt-1">Honest Feedback</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">3</div>
                            <div className="text-sm text-[#8892B0] mt-1">Actionable Phases</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">24h</div>
                            <div className="text-sm text-[#8892B0] mt-1">Viability Report</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-[#1e3a8a]/20 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default Hero;
