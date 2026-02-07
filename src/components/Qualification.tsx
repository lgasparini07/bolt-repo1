import { Check, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Qualification() {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-white/2.5 via-white/0 to-white/2.5">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white">
                        This Is For You If...
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatedSection delay={100}>
                        <div className="glass p-8 h-full rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Perfect Fit</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span>You run real operations with repetitive manual processes</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span>Your team wastes hours on tasks that should be automated</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span>You want systematic solutions, not shortcuts</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span>You value clarity over hype and understand ROI</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span>You're ready to invest in operational efficiency</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="glass p-8 h-full rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                                    <X className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Not a Match</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-400">
                                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <span>You're looking for a magic button that fixes everything</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-400">
                                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <span>Your project is a hobby or side experiment</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-400">
                                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <span>You expect instant results without proper implementation</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-400">
                                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <span>You want someone else to figure out your business for you</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-400">
                                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <span>You're not willing to adapt processes for better outcomes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
