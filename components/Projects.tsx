'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    category: string;
    type: 'publication' | 'methodology' | 'progress' | 'github';
    link?: string;
    content?: string[];
    progress?: number;
    description?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Genemate",
        category: "Web · 3D · AI",
        type: "publication",
        link: "https://ieeexplore.ieee.org/document/11042321"
    },
    {
        id: 2,
        title: "AI-Based Braille Learning System",
        category: "Assistive Technology · AI",
        type: "progress",
        progress: 60
    },
    {
        id: 3,
        title: "Waste Image Classification System",
        category: "Computer Vision · Machine Learning",
        type: "progress",
        progress: 90
    },
    {
        id: 4,
        title: "Expense Tracker",
        category: "Web · Finance · Python",
        type: "github",
        description: "A Flask-based expense tracking system with budget management, predictive analytics, and email alerts.",
        link: "https://github.com/developerbro888/Expense-Tracker"
    },
    {
        id: 5,
        title: "Secret Santa Organizer",
        category: "Web · Social · Python",
        type: "github",
        description: "A full-featured web application for managing Secret Santa events with automatic pairings, restrictions, and email delivery tracking.",
        link: "https://github.com/developerbro888/Secret-Santa"
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="projects" className="relative z-20 bg-[#121212]/90 backdrop-blur-md py-32 px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-4 block">Portfolio</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Crafted Experiences</h2>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
                                className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors text-left group"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <span className="text-sm text-gray-500 font-mono tracking-wide">{project.category}</span>
                                </div>
                                <span className="text-3xl text-gray-600 font-light group-hover:text-white transition-colors">
                                    {selectedId === project.id ? '−' : '+'}
                                </span>
                            </button>

                            <AnimatePresence>
                                {selectedId === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 border-t border-white/5 text-gray-300">
                                            {project.type === 'publication' && (
                                                <div className="py-2">
                                                    <p className="mb-4 text-sm">Published in ICTEST 2025 (IEEE Conference)</p>
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                                    >
                                                        Read Publication ↗
                                                    </a>
                                                </div>
                                            )}

                                            {project.type === 'methodology' && (
                                                <div className="space-y-3">
                                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Methodology</h4>
                                                    <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                                                        {project.content?.map((step, i) => (
                                                            <li key={i}>{step}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {project.type === 'progress' && (
                                                <div className="py-4">
                                                    <div className="flex justify-between text-sm mb-2">
                                                        <span>Work in Progress</span>
                                                        <span className="text-blue-400">{project.progress}%</span>
                                                    </div>
                                                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${project.progress}%` }}
                                                            transition={{ duration: 1, delay: 0.2 }}
                                                            className="h-full bg-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {project.type === 'github' && (
                                                <div className="py-2">
                                                    <p className="mb-4 text-sm leading-relaxed">{project.description}</p>
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                        <span className="group-hover:underline decoration-white/30">View on GitHub</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
