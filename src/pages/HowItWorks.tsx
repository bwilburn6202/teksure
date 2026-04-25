import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { UserPlus, Search, Wrench, CreditCard, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  { icon: UserPlus, title: 'Sign Up', desc: 'Create your free account in seconds. Choose whether you need help or want to provide it.', emoji: '' },
  { icon: Search, title: 'Describe Your Issue', desc: 'Tell us about your tech problem. Select a category, choose remote or in-person, and add details.', emoji: '' },
  { icon: Wrench, title: 'Get Matched & Fixed', desc: 'We match you with verified technicians based on skills, location, and availability.', emoji: '' },
  { icon: CreditCard, title: 'Pay Securely', desc: 'Only pay when the job is done. Transparent pricing with no hidden fees. Leave a review.', emoji: '' },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="How TekSure Works — Get Tech Help in 4 Simple Steps"
      description="Getting tech support is easy with TekSure. Sign up free, describe your issue, get matched with a verified technician, and only pay when the job is done."
      path="/how-it-works"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get Tech Support with TekSure',
        description: 'Four simple steps to get your tech problem sorted by a verified technician.',
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: s.desc,
        })),
      }}
    />
    <Navbar />
    <main className="flex-1">
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
                    <span className="text-2xl">{step.emoji}</span>
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
            Get matched with a verified technician today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 bg-background text-foreground hover:bg-background/90">
              <Link to="/get-help">Get Help Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6 border-background/20 text-background hover:bg-background/10">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
