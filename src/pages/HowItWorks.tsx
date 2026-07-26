import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Search, Calendar, Wrench, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  FIRST_HOUR_PRICE,
  ADDITIONAL_HOUR_PRICE,
  DEPOSIT_AMOUNT,
  formatPrice,
} from '@/data/pricing';

/**
 * These steps describe what actually happens in /get-help today.
 *
 * They previously described a marketplace that does not exist: a required
 * account signup, a "want to provide help" path, a remote-or-in-person choice,
 * and matching "based on skills, location, and availability". None of that is
 * real — you can book without an account, every session is remote, and there is
 * no matching engine. Overpromising on the page that explains how the service
 * works is a bad place to lose someone's trust.
 */
const steps = [
  {
    icon: Search,
    title: 'Tell us what is wrong',
    desc: 'Pick the kind of problem and describe it in plain English. No account needed, and no jargon required.',
  },
  {
    icon: Calendar,
    title: 'Choose a time',
    desc: 'Pick a day and a time slot that suits you, often as soon as tomorrow. You will get a confirmation by email.',
  },
  {
    icon: Wrench,
    title: 'We call and fix it',
    desc: 'A real person calls you at the agreed time and works through it with you, sharing your screen if that helps. Sessions are remote, so this works anywhere in the US.',
  },
  {
    icon: CreditCard,
    title: 'Pay when it is done',
    desc: `${formatPrice(FIRST_HOUR_PRICE)} for the first hour, ${formatPrice(ADDITIONAL_HOUR_PRICE)} for each additional hour. Pay on the day or hold your slot with a ${formatPrice(DEPOSIT_AMOUNT)} deposit. If we cannot fix it, you pay nothing.`,
  },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="How TekSure Works — Get Tech Help in 4 Simple Steps"
      description="Tell us what is wrong, pick a time, and a real person calls you and sorts it out. Remote help anywhere in the US. If we cannot fix it, you pay nothing."
      path="/how-it-works"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get Tech Support with TekSure',
        description: 'Four simple steps to get your tech problem sorted by a real person, remotely, anywhere in the United States.',
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: s.desc,
        })),
      }}
    />
    <Navbar />
    <main id="main-content" className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How TekSure Works</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Getting tech support has never been easier. Four simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="glow-card flex items-start gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    {/* Was rendering step.emoji, which was always an empty
                        string — every circle on this page shipped blank while
                        the icon defined alongside it went unused. */}
                    {(() => { const StepIcon = step.icon; return <StepIcon className="h-6 w-6 text-primary" aria-hidden="true" />; })()}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Step {i + 1}</span>
                  <h3 className="font-semibold text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Book a session today, or just ask us a question first — both are free to start.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 bg-background text-foreground hover:bg-background/90">
              <Link to="/get-help">Get Help Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6 border-background/20 text-background hover:bg-background/10">
              <Link to="/pricing"><CreditCard className="h-4 w-4" /> See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
