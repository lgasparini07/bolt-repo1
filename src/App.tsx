import { SpeedInsights } from '@vercel/speed-insights/react';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import SystemSchematic from './components/SystemSchematic';
import SocialProof from './components/SocialProof';
import LeadMagnet from './components/LeadMagnet';
import ProcessTimeline from './components/ProcessTimeline';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import StickyHeader from './components/StickyHeader';
import ExitIntentModal from './components/ExitIntentModal';
import ComparisonSlider from './components/ComparisonSlider';
import AutomationCalculator from './components/AutomationCalculator';
import AuthorityIndex from './components/AuthorityIndex';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white relative selection:bg-cyan-500/30">
      <BackgroundEffects />
      <StickyHeader />
      <ExitIntentModal />

      <div className="relative z-10">
        <Hero />
        <SocialProof />
        <ComparisonSlider />
        <Qualification />
        <SystemSchematic />
        <AutomationCalculator />
        <LeadMagnet />
        <ProcessTimeline />

        <section id="audit" className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent relative">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  Ready to Reclaim Your Time?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
                  Start with a 15-minute diagnostic call. No sales pressure. Just clear insights.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <LeadForm />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">
                  By submitting, you agree to receive communication about your audit.
                  We respect your inbox and never share your information.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AuthorityIndex />
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;

