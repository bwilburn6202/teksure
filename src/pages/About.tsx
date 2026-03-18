import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Headphones, Mail } from 'lucide-react';
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
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="About TekSure — Our Mission to Make Tech Simple"
      description="TekSure helps seniors and beginners understand technology with free guides, glossaries, and verified tech support."
      path="/about"
    />
    <Navbar />

    <main className="flex-1">
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-sm mb-6">
              <Shield className="h-4 w-4 text-secondary" />
              <span>About TekSure</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Mission</h1>
            <p className="text-lg opacity-80">
              Technology should empower everyone — not just the tech-savvy. TekSure helps seniors,
              beginners, and anyone who feels overwhelmed by tech to understand, troubleshoot, and
              master their devices with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Help */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How We Help</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Three pillars of support designed for real people with real tech problems.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {helpCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <card.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-muted py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@teksure.com"
            className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:underline"
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
