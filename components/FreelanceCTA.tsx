'use client';

import { motion, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

export default function FreelanceCTA() {
    const emailRef = useRef<HTMLAnchorElement>(null);
    const phoneRef = useRef<HTMLAnchorElement>(null);

    const emailX = useMotionValue(0);
    const emailY = useMotionValue(0);
    const phoneX = useMotionValue(0);
    const phoneY = useMotionValue(0);

    const emailSpringX = useSpring(emailX, { stiffness: 150, damping: 15 });
    const emailSpringY = useSpring(emailY, { stiffness: 150, damping: 15 });
    const phoneSpringX = useSpring(phoneX, { stiffness: 150, damping: 15 });
    const phoneSpringY = useSpring(phoneY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLAnchorElement | null>, motionX: MotionValue<number>, motionY: MotionValue<number>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        motionX.set(distanceX * 0.3);
        motionY.set(distanceY * 0.3);
    };

    const handleMouseLeave = (motionX: MotionValue<number>, motionY: MotionValue<number>) => {
        motionX.set(0);
        motionY.set(0);
    };

    return (
        <section id="contact" className="relative z-20 bg-gradient-to-b from-[#121212] to-black py-16 md:py-32 px-6 md:px-8 border-t border-white/5">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#121212] to-purple-900/20 opacity-50" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-6 block"
                    >
                        Available for Hire
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
                    >
                        Need a custom <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">digital solution?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        I am currently open for freelance software development projects.
                        Whether it's a complex web app, an AI integration, or a creative portfolio, let's build it.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <motion.a
                            ref={emailRef}
                            href="mailto:k.jyothish.2k01@gmail.com"
                            onMouseMove={(e) => handleMouseMove(e, emailRef, emailX, emailY)}
                            onMouseLeave={() => handleMouseLeave(emailX, emailY)}
                            style={{ x: emailSpringX, y: emailSpringY }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-white/10 overflow-hidden group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span className="relative z-10">Jyothish K</span>
                        </motion.a>

                        <motion.a
                            ref={phoneRef}
                            href="tel:+918129193987"
                            onMouseMove={(e) => handleMouseMove(e, phoneRef, phoneX, phoneY)}
                            onMouseLeave={() => handleMouseLeave(phoneX, phoneY)}
                            style={{ x: phoneSpringX, y: phoneSpringY }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full md:w-auto px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300 border border-white/10 flex items-center justify-center gap-3 backdrop-blur-md overflow-hidden group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span className="relative z-10">+91 81291 93987</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
