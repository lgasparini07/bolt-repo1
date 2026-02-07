import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, DollarSign, Clock, Users } from 'lucide-react';

export default function AutomationCalculator() {
    const [teamSize, setTeamSize] = useState(5);
    const [manualHours, setManualHours] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(40);

    const [savings, setSavings] = useState({
        hours: 0,
        money: 0
    });

    useEffect(() => {
        // Audit assumption: Automation saves ~40% of manual work
        const weeklyHoursSaved = teamSize * manualHours * 0.4;
        const monthlyHoursSaved = weeklyHoursSaved * 4.33;
        const monthlyMoneySaved = monthlyHoursSaved * hourlyRate;

        setSavings({
            hours: Math.round(monthlyHoursSaved),
            money: Math.round(monthlyMoneySaved)
        });
    }, [teamSize, manualHours, hourlyRate]);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                        The Cost of <span className="text-blue-400">Doing Nothing</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
                        See how much manual operations are actually costing your business every month.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="glass p-8 rounded-2xl space-y-8">
                        {/* Team Size Slider */}
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-gray-300 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-500" /> Team Size
                                </label>
                                <span className="text-2xl font-bold font-display text-white">{teamSize}</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={teamSize}
                                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        {/* Manual Hours Slider */}
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-gray-300 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-cyan-500" /> Manual Hours / Week per Person
                                </label>
                                <span className="text-2xl font-bold font-display text-white">{manualHours}h</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={manualHours}
                                onChange={(e) => setManualHours(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            />
                        </div>

                        {/* Hourly Rate Slider */}
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-gray-300 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-green-500" /> Avg. Hourly Cost
                                </label>
                                <span className="text-2xl font-bold font-display text-white">${hourlyRate}</span>
                            </div>
                            <input
                                type="range"
                                min="15"
                                max="200"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
                        <div className="glass p-12 rounded-2xl relative text-center border-blue-500/30">
                            <div className="mb-8">
                                <p className="text-gray-400 mb-2 font-sans uppercase tracking-wider text-sm">Potential Monthly Reclaimed Time</p>

                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={savings.hours}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-6xl font-bold text-white font-display text-glow"
                                    >
                                        {savings.hours} <span className="text-2xl text-gray-500">hrs</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-gray-400 mb-2 font-sans uppercase tracking-wider text-sm">Potential Monthly Savings</p>
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={savings.money}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-5xl font-bold text-green-400 font-display"
                                    >
                                        ${savings.money.toLocaleString()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
