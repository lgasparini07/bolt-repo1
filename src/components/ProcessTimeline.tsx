import AnimatedSection from './AnimatedSection';

export default function ProcessTimeline() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        What Happens Next
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-blue-500 font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">Intro Call (15 min)</h3>
                                <p className="text-gray-400">
                                    We discuss your business, current challenges, and whether automation makes sense for your situation.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-500 font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">Deep Dive Session (45-60 min)</h3>
                                <p className="text-gray-400">
                                    We walk through your workflows, ask detailed questions, and document your current operations.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-blue-500 font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">Audit Report Delivery</h3>
                                <p className="text-gray-400">
                                    You receive a detailed document outlining automation opportunities, implementation complexity, and ROI projections.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-500 font-bold">4</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">Your Decision</h3>
                                <p className="text-gray-400">
                                    You decide if the proposed automation makes business sense. No pressure, no follow-up spam.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 italic max-w-2xl mx-auto">
                            "We believe good automation sells itself. If the ROI isn't clear, we'll tell you not to proceed."
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
