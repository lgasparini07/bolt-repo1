import { useState, useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
    const words = ["Manual Work", "Data Entry", "Spreadsheets", "Busy Work"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
                <AnimatedSection>
                    <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium font-sans">
                        AI Automation for Operations
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
                        Your Team Is Drowning in
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-glow inline-block min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="block"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
                        Disconnected tools. Repetitive tasks. Hours lost to work that could run itself.
                        <br />
                        AI automation isn't magic—it's a systematic approach to operational efficiency.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                    <a
                        href="#audit"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 font-sans"
                    >
                        Request an Automation Audit
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-sans">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-blue-500" />
                            <span>No Long-Term Contracts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>Free Audit Included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                            <span>Production-Grade Systems</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
