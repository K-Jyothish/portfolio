'use client';

import { motion } from 'framer-motion';

export default function BackgroundGlow() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Orb 1: Blue/Purple */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[150px]"
            />

            {/* Orb 2: Purple/Pink */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-700 rounded-full blur-[180px]"
            />
        </div>
    );
}
