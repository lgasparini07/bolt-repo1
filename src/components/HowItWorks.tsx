import { MessageSquare, Lightbulb, Cpu, UserCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function HowItWorks() {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
                        No complex jargon. No overwhelming tech stacks. Just a clear process.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-4 gap-8">
                    <AnimatedSection delay={100}>
                        <div className="relative group">
                            <div className="glass p-8 h-full rounded-2xl transition-all duration-300 group-hover:bg-white/5">
                                <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MessageSquare className="w-8 h-8 text-blue-500" />
                                </div>
                                <div className="text-5xl font-bold text-blue-600/20 mb-4">01</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Understand</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We map your current workflows and identify bottlenecks consuming your team's time.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent" />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="relative group">
                            <div className="glass p-8 h-full rounded-2xl transition-all duration-300 group-hover:bg-white/5">
                                <div className="w-16 h-16 bg-cyan-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Lightbulb className="w-8 h-8 text-cyan-500" />
                                </div>
                                <div className="text-5xl font-bold text-cyan-600/20 mb-4">02</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Identify</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We pinpoint high-impact automation opportunities that deliver measurable efficiency gains.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-600/50 to-transparent" />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
                        <div className="relative group">
                            <div className="glass p-8 h-full rounded-2xl transition-all duration-300 group-hover:bg-white/5">
                                <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Cpu className="w-8 h-8 text-blue-500" />
                                </div>
                                <div className="text-5xl font-bold text-blue-600/20 mb-4">03</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Design</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We architect tailored automation systems that integrate seamlessly with your operations.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent" />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                        <div className="glass p-8 h-full rounded-2xl transition-all duration-300 group-hover:bg-white/5 group">
                            <div className="w-16 h-16 bg-cyan-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <UserCheck className="w-8 h-8 text-cyan-500" />
                            </div>
                            <div className="text-5xl font-bold text-cyan-600/20 mb-4">04</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Decide Together</h3>
                            <p className="text-gray-400 leading-relaxed">
                                You review the plan, understand the investment, and decide if it makes sense for your business.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
