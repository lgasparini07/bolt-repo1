import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function AuthorityIndex() {
    const insights = [
        {
            category: "Strategy",
            title: "Why 'Zapier Glue' Is Slowing You Down",
            description: "Direct API integrations vs. no-code tools: When to switch for speed and reliability.",
            readTime: "5 min read"
        },
        {
            category: "Operations",
            title: "The 3 Stages of Automation Maturity",
            description: "From ad-hoc tasks to fully autonomous workflows. Where does your company fall?",
            readTime: "7 min read"
        },
        {
            category: "Case Study",
            title: "Scalling from 10 to 100 Clients without Hiring",
            description: "How a design agency used our systems to handle 10x volume with the same headcount.",
            readTime: "4 min read"
        }
    ];

    return (
        <section className="py-32 px-6 bg-dark-lighter relative z-10 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                                Latest <span className="text-gray-500">Insights</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl font-sans">
                                We don't just build systems. We share the playbook on operational excellence.
                            </p>
                        </div>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 group font-medium">
                            View All Articles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-gray-800 rounded-2xl mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-noise opacity-20" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors font-display leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-sans">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    <span>{item.readTime}</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
