import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between">
            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: opacity1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold drop-shadow-md">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center p-4 text-center"
            >
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-4 md:gap-8">
                        <h1 className="flex overflow-hidden text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none drop-shadow-2xl">
                            {"Jyothish K".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 100,
                                        delay: index * 0.08
                                    }}
                                    className="inline-block"
                                >
                                    <motion.span
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.1,
                                            repeatDelay: 0
                                        }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                </motion.span>
                            ))}
                        </h1>
                        <p className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-400 text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-wider max-w-3xl text-center leading-relaxed md:leading-loose px-4 md:px-6 opacity-90">
                            "I don't just code — I animate, simulate, and make pixels behave intelligently, teaching machines how humans move while still learning how humans think."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-8 md:pl-20"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight text-center md:text-left">
                    Designing <span className="text-blue-500">Intelligent Systems</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-8 md:pr-20"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl text-center md:text-right leading-tight">
                    <span className="text-purple-500">Research</span> to Reality
                </h2>
            </motion.div>
        </div>
    );
}
