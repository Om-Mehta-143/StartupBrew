import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-3 py-1 text-sm font-medium text-[#FACC15] mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-[#FACC15] mr-2"></span>
                        Now accepting early-stage applicants
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                        We stress-test your startup <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8892B0]">before you burn cash.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[#8892B0] leading-relaxed">
                        StartupBrew is an exclusive auditing service. Using our proprietary framework, we push your operational robustness and founder resilience to the absolute limit. Only the strong survive.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#audit"
                            className="w-full sm:w-auto rounded-lg bg-[#FACC15] px-8 py-4 text-base font-bold text-[#0A192F] shadow-lg shadow-[#FACC15]/20 hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                        >
                            Apply for a Free Audit
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
