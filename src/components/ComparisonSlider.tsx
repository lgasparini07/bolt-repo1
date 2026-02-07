import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Mail, Phone, MessageSquare, Database, Zap, CheckCircle, Server } from 'lucide-react';

export default function ComparisonSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    useEffect(() => {
        document.addEventListener('mouseup', handleInteractionEnd);
        document.addEventListener('touchend', handleInteractionEnd);
        return () => {
            document.removeEventListener('mouseup', handleInteractionEnd);
            document.removeEventListener('touchend', handleInteractionEnd);
        };
    }, []);

    return (
        <section className="py-24 px-6 bg-dark-lighter relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                        From Chaos to <span className="text-cyan-400">Clarity</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-sans">
                        Drag the slider to see the difference automation makes.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none ring-4 ring-white/5"
                    onMouseDown={handleInteractionStart}
                    onTouchStart={handleInteractionStart}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleMouseMove}
                >
                    {/* AFTER Image (Background) - The "Clean" State */}
                    <div className="absolute inset-0 bg-blue-950/30 flex items-center justify-center">
                        <div className="w-full h-full p-12 grid grid-cols-3 gap-8 opacity-100">
                            {/* Dashboard Mockup Representation */}
                            <div className="col-span-3 grid grid-cols-4 gap-6">
                                <div className="col-span-1 glass rounded-xl p-6 border-l-4 border-green-500">
                                    <div className="text-green-500 text-sm mb-2 font-bold uppercase tracking-wider">Revenue</div>
                                    <div className="text-3xl font-bold font-display">$124k</div>
                                </div>
                                <div className="col-span-1 glass rounded-xl p-6 border-l-4 border-blue-500">
                                    <div className="text-blue-500 text-sm mb-2 font-bold uppercase tracking-wider">Leads</div>
                                    <div className="text-3xl font-bold font-display">842</div>
                                </div>
                                <div className="col-span-1 glass rounded-xl p-6 border-l-4 border-cyan-500">
                                    <div className="text-cyan-500 text-sm mb-2 font-bold uppercase tracking-wider">Automations</div>
                                    <div className="text-3xl font-bold font-display">15,203</div>
                                </div>
                                <div className="col-span-1 glass rounded-xl p-6 border-l-4 border-purple-500">
                                    <div className="text-purple-500 text-sm mb-2 font-bold uppercase tracking-wider">Errors</div>
                                    <div className="text-3xl font-bold font-display">0</div>
                                </div>
                            </div>

                            {/* Workflow Visualization */}
                            <div className="col-span-3 glass rounded-2xl p-8 flex items-center justify-between relative mt-8">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed border-t border-white/10 -z-10" />

                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                        <Database className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <span className="text-sm font-bold">Data Ingest</span>
                                </div>
                                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                                        <Server className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <span className="text-sm font-bold">Processing</span>
                                </div>
                                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <span className="text-sm font-bold">Action</span>
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8">
                                <div className="px-6 py-3 bg-green-500/20 rounded-full border border-green-500/50 text-green-400 font-bold flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 fill-current" /> AFTER: AUTOMATED & SCALABLE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BEFORE Image (Clipped Overlay) - The "Messy" State */}
                    <div
                        className="absolute inset-0 bg-red-950/20 border-r border-white/20 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <div className="absolute inset-0 w-[100vw] max-w-6xl h-full bg-[#1a0a0a]">
                            <div className="w-full h-full relative">
                                {/* Scattered Messy Elements */}
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute p-4 glass border-red-500/20 text-red-200/50 rounded-lg transform"
                                        style={{
                                            top: `${Math.random() * 80 + 10}%`,
                                            left: `${Math.random() * 80 + 10}%`,
                                            transform: `rotate(${Math.random() * 40 - 20}deg)`,
                                        }}
                                    >
                                        {[FileSpreadsheet, Mail, Phone, MessageSquare][i % 4] && (
                                            <div className="flex items-center gap-2">
                                                {
                                                    (() => {
                                                        const Icon = [FileSpreadsheet, Mail, Phone, MessageSquare][i % 4];
                                                        return <Icon className="w-6 h-6" />;
                                                    })()
                                                }
                                                <span className="text-xs">Unsorted_Data_{i}.csv</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="absolute inset-0 bg-black/50" />

                                <div className="absolute bottom-8 left-8">
                                    <div className="px-6 py-3 bg-red-500/20 rounded-full border border-red-500/50 text-red-400 font-bold flex items-center gap-2">
                                        <FileSpreadsheet className="w-5 h-5 fill-current" /> BEFORE: MANUAL & MESSY
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                            <div className="flex gap-1">
                                <div className="w-1 h-4 bg-gray-400 rounded-full" />
                                <div className="w-1 h-4 bg-gray-400 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
