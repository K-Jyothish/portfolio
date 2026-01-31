'use client';

import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: "The Rise of Multimodal AI Systems",
        category: "Artificial Intelligence · Machine Learning",
        description: "Exploring how AI systems are evolving to process and understand multiple types of data simultaneously, revolutionizing computer vision and natural language processing.",
        icon: "🤖",
        date: "2026"
    },
    {
        id: 2,
        title: "Quantum Computing Meets Machine Learning",
        category: "Quantum Computing · Deep Learning",
        description: "The convergence of quantum computing and ML is opening new frontiers in solving complex optimization problems and accelerating AI model training.",
        icon: "⚛️",
        date: "2026"
    },
    {
        id: 3,
        title: "Edge AI: Intelligence at the Source",
        category: "IoT · Edge Computing",
        description: "How edge AI is transforming real-time decision-making by bringing intelligence closer to data sources, reducing latency and enhancing privacy.",
        icon: "📡",
        date: "2026"
    },
    {
        id: 4,
        title: "Cybersecurity in the Age of AI",
        category: "Cybersecurity · Threat Detection",
        description: "AI-powered defense systems are becoming essential in detecting and preventing sophisticated cyber threats in critical infrastructure.",
        icon: "🛡️",
        date: "2026"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="relative z-20 bg-[#121212]/90 backdrop-blur-md py-16 md:py-32 px-6 md:px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-4 block">Tech Insights</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Latest in Tech</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                }}
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />

                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                <motion.span
                                    className="text-4xl"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {post.icon}
                                </motion.span>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <span className="text-xs text-gray-500 font-mono tracking-wide uppercase">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                {post.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
