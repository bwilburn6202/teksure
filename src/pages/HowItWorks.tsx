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
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="container py-20 flex-1">
      <h1 className="text-4xl font-bold text-center mb-4">How TekSure Works</h1>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        Getting tech support has never been easier. Four simple steps.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <Card key={step.title}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground">Step {i + 1}</span>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
