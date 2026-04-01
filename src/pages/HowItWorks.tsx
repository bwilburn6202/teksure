import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, Search, Wrench, CreditCard } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Sign Up', desc: 'Create your free account in seconds. Choose whether you need help or want to provide it.' },
  { icon: Search, title: 'Describe Your Issue', desc: 'Tell us about your tech problem. Select a category, choose remote or in-person, and add details.' },
  { icon: Wrench, title: 'Get Matched & Fixed', desc: 'We match you with verified technicians based on skills, location, and availability.' },
  { icon: CreditCard, title: 'Pay Securely', desc: 'Only pay when the job is done. Transparent pricing with no hidden fees. Leave a review.' },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20 text-center">
          <div
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How TekSure Works</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting tech support has never been easier. Four simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
            >
              <Card className="h-full rounded-2xl border border-border bg-card">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Step {i + 1}</span>
                      <h3 className="font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
