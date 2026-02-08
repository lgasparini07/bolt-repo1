import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bottleneck: [] as string[],
    teamSize: '',
    email: '',
    name: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const bottlenecks = [
    "Data Entry", "Customer Support", "Invoicing", "Lead Qualification", "Reporting", "Other"
  ];

  const teamSizes = [
    "1-5", "6-20", "21-50", "50+"
  ];

  const handleToggleBottleneck = (item: string) => {
    setFormData(prev => ({
      ...prev,
      bottleneck: prev.bottleneck.includes(item)
        ? prev.bottleneck.filter(i => i !== item)
        : [...prev.bottleneck, item]
    }));
  };

  const handleNext = () => {
    if (step === 1 && formData.bottleneck.length === 0) return;
    if (step === 2 && !formData.teamSize) return;
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          challenge: `Bottlenecks: ${formData.bottleneck.join(', ')} | Team Size: ${formData.teamSize}`,
        },
      ]);

      if (error) throw error;

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass rounded-lg p-12 text-center animate-fadeIn">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4 font-display">Diagnosis Request Received</h3>
        <p className="text-gray-400 text-lg">
          We're analyzing your inputs. Expect a personal email from our team within 24 hours with your preliminary automation roadmap.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-800 w-full">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Step 1 of 3</span>
              <h3 className="text-2xl font-bold text-white mt-2 font-display">Where are you wasting the most time?</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {bottlenecks.map(item => (
                <button
                  key={item}
                  onClick={() => handleToggleBottleneck(item)}
                  className={`p-4 rounded-xl text-left transition-all border ${formData.bottleneck.includes(item)
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item}</span>
                    {formData.bottleneck.includes(item) && <Check className="w-5 h-5 text-blue-400" />}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={formData.bottleneck.length === 0}
              className="w-full mt-6 bg-white text-dark font-bold py-4 rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
            >
              Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Step 2 of 3</span>
              <h3 className="text-2xl font-bold text-white mt-2 font-display">How large is your operations team?</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamSizes.map(size => (
                <button
                  key={size}
                  onClick={() => setFormData(prev => ({ ...prev, teamSize: size }))}
                  className={`p-6 rounded-xl text-center transition-all border ${formData.teamSize === size
                    ? 'bg-cyan-600/20 border-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  <div className="text-xl font-bold">{size}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">People</div>
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.teamSize}
                className="flex-1 bg-white text-dark font-bold py-4 rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
              >
                Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Final Step</span>
              <h3 className="text-2xl font-bold text-white mt-2 font-display">Where should we send your roadmap?</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full glass p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full glass p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors"
                  placeholder="jane@company.com"
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5" />
                  {errorMessage || 'Submission failed. Please try again.'}
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? 'Analyzing...' : 'Get My Automation Roadmap'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
