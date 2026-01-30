'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Connect scroll to frame index
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
    const blur = useTransform(scrollYProgress, [0, 0.15], ["blur(12px)", "blur(0px)"]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const p = i.toString().padStart(3, '0');
                    img.src = `/sequence/frame_${p}.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load image ${i}`, e);
                        // Resolve anyway to avoid breaking Promise.all completely, but handle nulls
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            // Filter out any potential failed loads if necessary, or just assume they loaded
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Re-render current frame on resize
            const currentFrameIndex = Math.floor(frameIndex.get());
            renderFrame(Math.min(Math.max(currentFrameIndex, 0), FRAME_COUNT - 1));
        };
        window.addEventListener('resize', resize);
        resize();

        // Render loop connected to scroll
        const unsubscribe = frameIndex.on('change', (latest) => {
            renderFrame(Math.floor(latest));
        });

        function renderFrame(index: number) {
            if (!ctx || !canvas) return;
            const img = images[index];
            if (!img) return;

            // Object-fit: cover logic
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img,
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        }

        // Force first render
        const initialIndex = Math.floor(frameIndex.get());
        renderFrame(Math.min(Math.max(initialIndex, 0), FRAME_COUNT - 1));

        return () => {
            window.removeEventListener('resize', resize);
            unsubscribe();
        }
    }, [isLoaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
                        <p className="text-white/50 text-sm tracking-widest uppercase animate-pulse">Loading Experience...</p>
                    </div>
                )}

                {/* Grain Overlay */}
                <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.035] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
                />

                <motion.div style={{ filter: blur, scale }} className="w-full h-full">
                    <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                </motion.div>

                {/* Gradient Fade to Black at Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#121212] to-transparent z-[8]" />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
