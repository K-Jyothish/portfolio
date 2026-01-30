'use client';

import { motion } from 'framer-motion';

const skills = [
    {
        category: "AI / ML",
        items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Mining"]
    },
    {
        category: "Programming",
        items: ["Java", "Python", "C", "HTML", "SQL"]
    },
    {
        category: "Web & Tools",
        items: ["React", "Flask", "Three.js", "Git", "TensorFlow (Basic)"]
    },
    {
        category: "Domains",
        items: ["Artificial Intelligence", "Computer Vision", "Assistive Technology", "Sustainable AI"]
    }
];

export default function About() {
    return (
        <section id="about" className="relative z-20 bg-[#121212]/80 backdrop-blur-sm py-32 px-8 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                {/* Short Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-32 text-center"
                >
                    <span className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-6 block">About Me</span>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 font-light">
                        I am an M.Tech scholar specializing in <span className="text-white font-medium">Computer Science & Engineering</span>, bridging the gap between academic theory and real-world application.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        My passion lies in <strong>Computer Vision</strong> and <strong>Applied ML</strong>—building intelligence that doesn't just process data, but understands the world.
                    </p>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-32 text-center"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-4 block">Core Philosophy</span>
                    <p className="text-2xl md:text-4xl font-light text-white italic max-w-4xl mx-auto leading-relaxed">
                        "I believe good AI should be <span className="text-blue-400">practical</span>, <span className="text-purple-400">accessible</span>, and ethically designed to create meaningful impact."
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h3 className="text-3xl font-bold text-white mb-12 text-center">Academic Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                            <span className="text-xs font-mono text-blue-400 mb-2 block tracking-wider uppercase">Master's Degree</span>
                            <h4 className="text-2xl font-bold text-white mb-2">TKM College of Engineering</h4>
                            <p className="text-gray-400">M.Tech in Computer Science & Engineering</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                        >
                            <span className="text-xs font-mono text-gray-500 mb-2 block tracking-wider uppercase">Bachelor's Degree</span>
                            <h4 className="text-2xl font-bold text-white mb-2">GEC Idukki</h4>
                            <p className="text-gray-400">B.Tech in Computer Science & Engineering</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Skills Snapshot */}
                <div className="mb-32">
                    <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-medium text-gray-400 mb-4 border-b border-white/10 pb-2">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <motion.span
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
