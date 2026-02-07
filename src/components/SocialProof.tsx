import { Link as LinkIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function SocialProof() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Built on Experience, Not Promises
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="glass p-8 rounded-xl text-center group hover:bg-white/5 transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-500 mb-2 text-glow group-hover:scale-110 transition-transform duration-300">50+</div>
                            <p className="text-gray-400">Production Automations Deployed</p>
                        </div>
                        <div className="glass p-8 rounded-xl text-center group hover:bg-white/5 transition-colors duration-300">
                            <div className="text-5xl font-bold text-cyan-500 mb-2 text-glow group-hover:scale-110 transition-transform duration-300">15+</div>
                            <p className="text-gray-400">Industries Served</p>
                        </div>
                        <div className="glass p-8 rounded-xl text-center group hover:bg-white/5 transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-500 mb-2 text-glow group-hover:scale-110 transition-transform duration-300">1000+</div>
                            <p className="text-gray-400">Hours Saved Monthly</p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                        We've built automation systems for e-commerce operations, professional services,
                        SaaS companies, and manufacturing businesses. Our approach focuses on understanding
                        your unique workflows before recommending solutions.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="aspect-video glass rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
                            >
                                <LinkIcon className="w-8 h-8 text-gray-500" />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
