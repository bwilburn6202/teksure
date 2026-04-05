import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, BookOpen, MessageCircle, Users, Video, Wrench, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const freeFeatures = [
  {
    icon: BookOpen,
    title: 'All Guides & Tutorials',
    desc: 'Over 300 step-by-step guides written in plain English — from setting up Wi-Fi to staying safe online.',
  },
  {
    icon: MessageCircle,
    title: 'TekBot AI Assistant',
    desc: 'Ask TekBot any tech question, any time. It explains things in a friendly, patient way — no jargon.',
  },
  {
    icon: Users,
    title: 'Community Forum',
    desc: 'Connect with other learners, share tips, and get answers from people who understand your questions.',
  },
  {
    icon: Video,
    title: 'Video Call Support',
    desc: 'Talk face-to-face with a real person who can walk you through any tech problem, step by step.',
  },
  {
    icon: Wrench,
    title: 'Technician Booking',
    desc: 'Need hands-on help? Book a verified, background-checked technician — remote or in person.',
  },
  {
    icon: HelpCircle,
    title: 'Tools & Resources',
    desc: 'Password checklists, scam alerts, device setup helpers, and more — all designed for real people.',
  },
];

const checklist = [
  'Every guide and tutorial on the site',
  'TekBot AI assistant — available 24/7',
  'Community forum access',
  'Technician booking and video calls',
  'Scam alerts and safety resources',
  'Device setup and troubleshooting tools',
  'Email support from our team',
  'New guides and features added every week',
];

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TekSure Tech Support',
  provider: { '@type': 'Organization', name: 'TekSure', url: 'https://teksure.com' },
  description:
    'Free technology support platform for seniors and non-technical users — guides, tools, AI assistant, forum, and technician booking at no cost.',
  url: 'https://teksure.com/pricing',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'All TekSure features are free for everyone.',
    url: 'https://teksure.com/signup',
  },
};

const Pricing = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="100% Free Tech Support | TekSure — Guides, Tools & Help at No Cost"
      description="Everything on TekSure is free. Guides, AI assistant, community forum, technician booking, video calls — all at no cost. All you need is an email address."
      path="/pricing"
      jsonLd={pricingJsonLd}
    />
    <Navbar />
    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything on TekSure is Free
          </h1>
          <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
            No subscriptions. No hidden fees. No credit card needed. We believe everyone deserves
            help with technology, and that help should not come with a price tag.
          </p>
          <p className="text-sm text-muted-foreground">
            All you need is an email address to get started.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What You Get</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every feature, every tool, every guide — included at no cost, for as long as you need it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {freeFeatures.map((feature) => (
            <Card key={feature.title} className="h-full rounded-2xl border border-border bg-card">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Checklist + CTA */}
      <section className="bg-muted/40 border-t border-border py-12 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Everything Below is Included — for Free
          </h2>
          <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Button asChild size="lg" className="rounded-xl px-8">
              <Link to="/signup">Get Started for Free</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              All you need is an email address. No credit card, no commitment — take your time and
              explore at your own pace.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pricing;
