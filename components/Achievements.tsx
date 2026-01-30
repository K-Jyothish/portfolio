'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
    return (
        <section id="achievements" className="relative z-20 bg-[#121212] py-32 px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-4 block">Milestones</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Achievements & Impact</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Certifications - Spans 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-400">#</span> Certifications
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Supervised Machine Learning (Coursera)",
                                "Introduction to User Experience Design (Coursera)",
                                "Google Cloud Computing Foundations"
                            ].map((cert, i) => (
                                <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Awards - Spans 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-yellow-500">★</span> Honors
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "IITM Pravartak Fellowship",
                                "KTU Seed Money Grant for Final Year Project",
                                "Winner – IEEE miniXtreme Coding Competition"
                            ].map((award, i) => (
                                <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                                    {award}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Research Snippet - Condensed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-xl font-bold text-white mb-6">Research Snippet</h3>
                        <a href="https://ieeexplore.ieee.org/document/11042321" target="_blank" rel="noopener noreferrer" className="block group-hover:scale-[1.02] transition-transform">
                            <h4 className="text-white font-medium mb-2 leading-snug">
                                Genemate: A Real-Time Animation of a 3D Human Model
                            </h4>
                            <p className="text-xs font-mono text-gray-400 mb-4">ICTEST 2025 (IEEE)</p>
                            <span className="text-xs text-blue-400 flex items-center gap-1">
                                Read Paper <span className="text-lg">→</span>
                            </span>
                        </a>
                    </motion.div>

                    {/* Current Endeavors - Spans full width on mobile, 3 cols on large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 lg:col-span-3 bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <h3 className="text-xl font-bold text-white">Current Endeavors</h3>
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wide">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Active Research
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                "Hybrid Classical–Quantum System for Context-Aware Expansion of Grade-2 Braille Contractions",
                                "Process Genealogy: A Hierarchical Visualization of Linux Process Relationships",
                                "A Privacy-Preserving Proof-of-Product Framework for Fair Trade in E-Commerce"
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-black/20 rounded-xl border border-white/5">
                                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
