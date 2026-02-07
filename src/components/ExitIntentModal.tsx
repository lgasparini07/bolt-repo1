import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ArrowRight } from 'lucide-react';

export default function ExitIntentModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger if mouse leaves viewport at the top
            if (e.clientY <= 0 && !hasSeen) {
                setIsOpen(true);
                setHasSeen(true); // Only show once per session
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasSeen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="glass w-full max-w-lg p-8 rounded-2xl relative shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                                <FileText className="w-8 h-8 text-blue-400" />
                            </div>

                            <h3 className="text-3xl font-bold bg-white bg-clip-text text-transparent mb-2 font-display">
                                Wait! Don't leave empty handed.
                            </h3>
                            <p className="text-gray-400 mb-6 font-sans">
                                Get our free guide: <span className="text-white font-medium">"5 Red Flags Your Operations Are Leaking Money"</span>.
                                No fluff, just actionable fixes.
                            </p>

                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                // Handle submission logic (mock for now)
                                setIsOpen(false);
                            }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full glass p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Me The Guide <ArrowRight className="w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
