import React, { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            return "Please enter a valid email address.";
        }

        // Only allow specific providers for founders (gmail, protonmail)
        const allowedProviders = ['gmail.com', 'protonmail.com', 'proton.me'];
        const domain = email.split('@')[1]?.toLowerCase();

        if (!allowedProviders.includes(domain)) {
            return "invalid email address";
        }

        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError('');

        const emailValue = e.target.email.value;
        const validationError = validateEmail(emailValue);

        if (validationError) {
            setEmailError(validationError);
            return; // Stop submission
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('name', e.target.name.value);
        formData.append('email', e.target.email.value);
        formData.append('website', e.target.website.value);
        formData.append('pitch', e.target.pitch.value);

        try {
            const response = await fetch('https://formspree.io/f/xykdlgyl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                e.target.reset();
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#050B14] border-t border-white/5 relative scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[#FACC15] font-semibold tracking-wide uppercase text-sm mb-3">Apply for Audit</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Secure your spot
                    </p>
                    <p className="mt-4 text-xl text-[#8892B0]">
                        We only take on 4 startups at a time. Tell us why you need to be stress-tested.
                    </p>
                </div>

                <div className="bg-[#0A192F] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FACC15]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] mb-6">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                            <p className="text-[#8892B0]">
                                We will review your startup and get back to you within 24 hours if you qualify for a slot.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-[#FACC15] hover:text-yellow-400 font-semibold underline text-sm"
                            >
                                Submit another application
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#8892B0] mb-2">Founder Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]/50 focus:border-[#FACC15] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#8892B0] mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className={`w-full bg-white/5 border ${emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-white/10 focus:ring-[#FACC15]/50 focus:border-[#FACC15]'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-colors`}
                                        placeholder="founder@startup.com"
                                        onChange={() => setEmailError('')}
                                    />
                                    {emailError && (
                                        <p className="mt-2 text-sm text-red-500">{emailError}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-[#8892B0] mb-2">Startup Website</label>
                                <div className="flex rounded-lg shadow-sm">
                                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-white/10 bg-white/5 text-[#8892B0] sm:text-sm">
                                        https://
                                    </span>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        required
                                        className="flex-1 min-w-0 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-none rounded-r-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]/50 focus:border-[#FACC15] transition-colors"
                                        placeholder="yourstartup.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="pitch" className="block text-sm font-medium text-[#8892B0] mb-2">
                                    What keeps you up at night? <span className="text-[#8892B0]/50 ml-1">(Optional)</span>
                                </label>
                                <textarea
                                    id="pitch"
                                    name="pitch"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]/50 focus:border-[#FACC15] transition-colors resize-none"
                                    placeholder="Tell us what you suspect is silently breaking your business..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center rounded-lg bg-[#FACC15] px-8 py-4 text-base font-bold text-[#0A192F] shadow-lg shadow-[#FACC15]/20 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:ring-offset-2 focus:ring-offset-[#0A192F] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A192F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : "Submit Application"}
                                </button>
                                <p className="text-center text-xs text-[#8892B0] mt-4">
                                    By applying, you agree to our brutal honesty policy. We will not sugarcoat your audit.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
