import { FileCheck, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function LeadMagnet() {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-transparent opacity-30" />
            <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <div className="inline-block mb-6 px-4 py-2 bg-cyan-600/10 border border-cyan-600/20 rounded-full text-cyan-400 text-sm font-medium">
                            No Cost. No Commitment.
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Free Automation Audit
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A detailed review of your workflows with clear automation opportunities identified.
                            Valuable regardless of whether you move forward with us.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="glass p-8 rounded-xl text-center hover:bg-white/5 transition-colors duration-300">
                            <FileCheck className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold mb-2 text-white">Workflow Analysis</h3>
                            <p className="text-gray-400 text-sm">
                                We map your current processes and identify inefficiencies
                            </p>
                        </div>
                        <div className="glass p-8 rounded-xl text-center hover:bg-white/5 transition-colors duration-300">
                            <Lightbulb className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold mb-2 text-white">Opportunity Assessment</h3>
                            <p className="text-gray-400 text-sm">
                                Clear automation recommendations with estimated impact
                            </p>
                        </div>
                        <div className="glass p-8 rounded-xl text-center hover:bg-white/5 transition-colors duration-300">
                            <TrendingUp className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold mb-2 text-white">ROI Projection</h3>
                            <p className="text-gray-400 text-sm">
                                Transparent cost-benefit analysis for each opportunity
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
