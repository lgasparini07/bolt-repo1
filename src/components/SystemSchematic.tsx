import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Database, MessageSquare, Zap, FileText, Server } from 'lucide-react';

export default function SystemSchematic() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-dark relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                        How It <span className="text-blue-500">Works</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
                        We build intelligent bridges between your disconnected tools.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    {/* INPUTS */}
                    <div className="space-y-12 relative z-20">
                        <InputNode icon={Mail} label="Email Inquiries" delay={0} />
                        <InputNode icon={FileText} label="Lead Forms" delay={0.1} />
                        <InputNode icon={Server} label="Legacy API" delay={0.2} />
                    </div>

                    {/* THE BRAIN */}
                    <div className="relative z-20 flex justify-center">
                        <div className="w-48 h-48 rounded-full glass flex items-center justify-center relative shadow-[0_0_100px_rgba(59,130,246,0.3)] border-blue-500/30">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse-slow" />
                            <Zap className="w-16 h-16 text-blue-400" />
                            <div className="absolute -bottom-12 text-blue-400 font-bold tracking-widest text-sm">AI CORE</div>
                        </div>
                    </div>

                    {/* OUTPUTS */}
                    <div className="space-y-12 relative z-20">
                        <OutputNode icon={Database} label="Sync to CRM" delay={0.3} />
                        <OutputNode icon={MessageSquare} label="Slack Alert" delay={0.4} />
                        <OutputNode icon={Mail} label="Auto-Response" delay={0.5} />
                    </div>

                    {/* SVG CONNECTOR LAYER */}
                    <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
                        <svg className="w-full h-full" overflow="visible">
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
                                </linearGradient>
                            </defs>

                            {/* Inputs to Center */}
                            <ConnectorPath d="M 250 100 C 350 100, 400 250, 500 250" pathLength={pathLength} />
                            <ConnectorPath d="M 250 250 C 350 250, 400 250, 500 250" pathLength={pathLength} />
                            <ConnectorPath d="M 250 400 C 350 400, 400 250, 500 250" pathLength={pathLength} />

                            {/* Center to Outputs */}
                            <ConnectorPath d="M 650 250 C 750 250, 800 100, 900 100" pathLength={pathLength} delay={0.1} />
                            <ConnectorPath d="M 650 250 C 750 250, 800 250, 900 250" pathLength={pathLength} delay={0.1} />
                            <ConnectorPath d="M 650 250 C 750 250, 800 400, 900 400" pathLength={pathLength} delay={0.1} />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InputNode({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-gray-600"
        >
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-400" />
            </div>
            <span className="font-bold text-gray-300">{label}</span>
        </motion.div>
    );
}

function OutputNode({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass p-6 rounded-xl flex items-center gap-4 border-r-4 border-green-500 justify-end text-right"
        >
            <span className="font-bold text-white">{label}</span>
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-green-400" />
            </div>
        </motion.div>
    );
}

function ConnectorPath({ d, pathLength, delay = 0 }: { d: string, pathLength: any, delay?: number }) {
    return (
        <motion.path
            d={d}
            stroke="url(#line-gradient)"
            strokeWidth="3"
            fill="none"
            style={{ pathLength }}
        />
    );
}
