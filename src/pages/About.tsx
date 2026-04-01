import { BookOpen, Users, Headphones, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

const helpCards = [
  {
    icon: BookOpen,
    title: 'Free Guides & Tutorials',
    desc: 'Over 300 step-by-step guides written in plain English, covering everything from Wi-Fi setup to AI tools.',
  },
  {
    icon: Users,
    title: 'Verified Tech Support',
    desc: 'Need hands-on help? Get matched with a background-checked technician for remote or in-person support.',
  },
  {
    icon: Headphones,
    title: 'Patient, Jargon-Free Help',
    desc: 'We explain things the way a patient friend would — no judgment, no jargon, just clear answers.',
  },
];

const About = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="About TekSure — Our Mission to Make Tech Simple"
      description="TekSure helps seniors and beginners understand technology with free guides, glossaries, and verified tech support."
      path="/about"
    />
    <Navbar />

    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20">
          <div
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Mission</h1>
            <p className="text-lg text-muted-foreground">
              Technology should empower everyone — not just the tech-savvy. TekSure helps seniors,
              beginners, and anyone who feels overwhelmed by tech to understand, troubleshoot, and
              master their devices with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="container py-20">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Help</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Three pillars of support designed for real people with real tech problems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {helpCards.map((card, i) => (
            <div
              key={card.title}
            >
              <Card className="h-full rounded-2xl border border-border bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <card.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-muted/40 py-20">
        <div
          className="container max-w-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@teksure.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            <Mail className="h-5 w-5" />
            hello@teksure.com
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default About;
