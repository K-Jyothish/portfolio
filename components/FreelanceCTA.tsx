'use client';

import { motion } from 'framer-motion';

export default function FreelanceCTA() {
    return (
        <section className="relative z-20 py-32 px-8 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#121212] to-purple-900/20 opacity-50" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-6 block">Available for Hire</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Need a custom <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">digital solution?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        I am currently open for freelance software development projects.
                        Whether it's a complex web app, an AI integration, or a creative portfolio, let's build it.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:k.jyothish.2k01@gmail.com"
                            className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 shadow-lg shadow-white/10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            k.jyothish.2k01@gmail.com
                        </a>

                        <a
                            href="tel:+918129193987"
                            className="w-full md:w-auto px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10 flex items-center justify-center gap-3 backdrop-blur-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            +91 81291 93987
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
