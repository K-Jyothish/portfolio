'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
        >
            <div className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-8 shadow-lg">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Work
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Contact
                </button>
            </div>
        </motion.nav>
    );
}
