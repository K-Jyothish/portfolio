'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighScore {
    name: string;
    score: number;
}

export default function DinoGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
    const [score, setScore] = useState(0);
    const [highScores, setHighScores] = useState<HighScore[]>([]);
    const [playerName, setPlayerName] = useState('');

    // Game Refs for mutable state without re-renders
    const dinoRef = useRef({ x: 50, y: 0, vY: 0, groundY: 0, width: 40, height: 40, jumping: false });
    const obstaclesRef = useRef<{ x: number; y: number; width: number; height: number; speed: number }[]>([]);
    const gameSpeedRef = useRef(5);
    const scoreRef = useRef(0);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        // Load High Scores
        const saved = localStorage.getItem('dinoHighScores');
        if (saved) {
            setHighScores(JSON.parse(saved));
        }
    }, []);

    const saveScore = (newScore: number) => {
        const newEntry = { name: playerName || 'Anonymous', score: newScore };
        const updated = [...highScores, newEntry]
            .sort((a, b) => b.score - a.score)
            .slice(0, 4); // Top 4
        setHighScores(updated);
        localStorage.setItem('dinoHighScores', JSON.stringify(updated));
    };

    const jump = () => {
        if (!dinoRef.current.jumping) {
            dinoRef.current.vY = -15; // Jump strength
            dinoRef.current.jumping = true;
        }
    };

    const resetGame = () => {
        setScore(0);
        scoreRef.current = 0;
        gameSpeedRef.current = 6;
        dinoRef.current = { ...dinoRef.current, y: dinoRef.current.groundY, vY: 0, jumping: false };
        obstaclesRef.current = [];
        setGameState('playing');
    };

    useEffect(() => {
        if (gameState !== 'playing') return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize
        canvas.width = canvas.parentElement?.clientWidth || 800;
        canvas.height = 300;
        dinoRef.current.groundY = canvas.height - 50;
        dinoRef.current.y = dinoRef.current.groundY;

        let frame = 0;

        const loop = () => {
            // physics
            dinoRef.current.vY += 0.8; // Gravity
            dinoRef.current.y += dinoRef.current.vY;

            // Ground collision
            if (dinoRef.current.y > dinoRef.current.groundY) {
                dinoRef.current.y = dinoRef.current.groundY;
                dinoRef.current.vY = 0;
                dinoRef.current.jumping = false;
            }

            // Obstacles
            if (frame % 100 === 0) { // Spawn rate
                obstaclesRef.current.push({
                    x: canvas.width,
                    y: dinoRef.current.groundY + 10, // slightly lower to match ground rect
                    width: 30,
                    height: 40,
                    speed: gameSpeedRef.current
                });
            }

            // Update Obstacles
            obstaclesRef.current.forEach(obs => {
                obs.x -= gameSpeedRef.current;
            });

            // Remove off-screen
            obstaclesRef.current = obstaclesRef.current.filter(obs => obs.x + obs.width > 0);

            // Collision Detection
            const dino = dinoRef.current;
            for (const obs of obstaclesRef.current) {
                if (
                    dino.x < obs.x + obs.width &&
                    dino.x + dino.width > obs.x &&
                    dino.y < obs.y + obs.height &&
                    dino.y + dino.height > obs.y
                ) {
                    setGameState('gameover');
                    saveScore(scoreRef.current);
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                    return;
                }
            }

            // Score
            if (frame % 10 === 0) { // every 10 frames
                scoreRef.current += 1;
                setScore(scoreRef.current);
            }

            // Speed up
            if (frame % 500 === 0) {
                gameSpeedRef.current += 0.5;
            }

            // Render
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Ground
            ctx.fillStyle = '#333';
            ctx.fillRect(0, canvas.height - 10, canvas.width, 2);

            // Dino
            ctx.fillStyle = '#60A5FA'; // Blue 400
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#60A5FA';
            ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
            ctx.shadowBlur = 0;

            // Obstacles
            ctx.fillStyle = '#EF4444'; // Red 500
            obstaclesRef.current.forEach(obs => {
                ctx.fillRect(obs.x, obs.y - obs.height + 10, obs.width, obs.height);
            });

            frame++;
            requestRef.current = requestAnimationFrame(loop);
        };

        requestRef.current = requestAnimationFrame(loop);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [gameState]);

    // Cleanup
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault();
                if (gameState === 'playing') jump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameState]);


    return (
        <section className="relative z-20 py-20 px-8 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-4 block">Interactive Zone</span>
                <h2 className="text-3xl font-bold text-white mb-8">Dino Runner</h2>

                <div className="relative w-full h-[300px] bg-black/50 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

                    {/* Game Canvas */}
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full block"
                        onClick={() => gameState === 'playing' && jump()}
                    />

                    {/* Score (Absolute) */}
                    {gameState === 'playing' && (
                        <div className="absolute top-4 right-6 font-mono text-2xl text-white font-bold">
                            {score.toString().padStart(5, '0')}
                        </div>
                    )}

                    {/* Start Screen */}
                    <AnimatePresence>
                        {gameState === 'start' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10"
                            >
                                <h3 className="text-4xl font-bold text-white mb-6">Ready to Run?</h3>
                                <input
                                    type="text"
                                    placeholder="Enter Player Name"
                                    maxLength={12}
                                    value={playerName}
                                    onChange={(e) => setPlayerName(e.target.value)}
                                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-center mb-6 focus:outline-none focus:border-blue-500 transition-colors uppercase font-mono tracking-widest placeholder:normal-case"
                                />
                                <button
                                    onClick={() => playerName.trim() && resetGame()}
                                    disabled={!playerName.trim()}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                                >
                                    START GAME
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Game Over Screen */}
                    <AnimatePresence>
                        {gameState === 'gameover' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md z-10"
                            >
                                <h3 className="text-4xl font-bold text-red-500 mb-2">GAME OVER</h3>
                                <p className="text-gray-400 mb-6">Score: <span className="text-white font-mono text-xl">{score}</span></p>

                                {/* Leaderboard */}
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8 w-64">
                                    <h4 className="text-blue-400 font-mono text-sm uppercase mb-4 tracking-wider border-b border-white/10 pb-2">Top Runners</h4>
                                    <div className="space-y-2">
                                        {highScores.map((entry, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-gray-300">{i + 1}. {entry.name}</span>
                                                <span className="text-white font-mono">{entry.score}</span>
                                            </div>
                                        ))}
                                        {highScores.length === 0 && <span className="text-gray-600 italic text-xs">No records yet. Be the first!</span>}

                                    </div>
                                </div>

                                <button
                                    onClick={resetGame}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20 hover:border-white/50"
                                >
                                    PLAY AGAIN
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <p className="text-gray-500 text-xs mt-4 font-mono">Press SPACE or TAP to Jump</p>
            </div>
        </section>
    );
}
