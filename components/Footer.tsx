'use client';

export default function Footer() {
    return (
        <footer id="contact" className="relative z-20 bg-[#0a0a0a] py-8 px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Left Side - Email */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Let’s Connect</h2>
                    <a href="mailto:k.jyothish.2k01@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <span>k.jyothish.2k01@gmail.com</span>
                    </a>
                </div>

                {/* Right Side - Socials */}
                <div className="flex flex-col gap-4">
                    <a
                        href="https://www.linkedin.com/in/jyothish-k-3bb287241"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors group"
                    >
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-blue-500/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </div>
                        <span>LinkedIn Profile</span>
                    </a>
                    <a
                        href="https://www.instagram.com/jyothish____/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group"
                    >
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-pink-500/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 text-center text-gray-700 text-xs">
                <p>© 2026 Jyothish K. All rights reserved.</p>
            </div>
        </footer>
    );
}
