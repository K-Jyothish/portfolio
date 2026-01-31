'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close menu after navigation
        }
    };

    const menuItems = [
        { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { label: 'About', action: () => scrollToSection('about') },
        { label: 'Work', action: () => scrollToSection('projects') },
        { label: 'Blog', action: () => scrollToSection('blog') },
        { label: 'Contact', action: () => scrollToSection('contact') },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center py-6 pointer-events-none"
            >
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-8 shadow-lg">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={item.action}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-4 pointer-events-none"
            >
                {/* Logo/Home Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="pointer-events-auto text-white font-bold text-lg"
                >
                    JK
                </button>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 shadow-lg"
                    aria-label="Toggle menu"
                >
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        className="w-6 h-5 flex flex-col justify-between"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 8 }
                            }}
                            className="w-full h-0.5 bg-white block origin-center transition-all"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="w-full h-0.5 bg-white block"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -8 }
                            }}
                            className="w-full h-0.5 bg-white block origin-center transition-all"
                        />
                    </motion.div>
                </button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-gray-900 to-black border-l border-white/10 p-8 pt-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-6">
                                {menuItems.map((item, index) => (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={item.action}
                                        className="text-left text-xl font-medium text-gray-300 hover:text-white transition-colors py-2"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
