import { BookOpen, Users, Headphones, Mail } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

const helpCards = [
  {
    icon: BookOpen,
    title: 'Free Guides & Tutorials',
    desc: 'Over 300 step-by-step guides written in plain English, covering everything from Wi-Fi setup to AI tools.',
    emoji: '📚',
  },
  {
    icon: Users,
    title: 'Verified Tech Support',
    desc: 'Need hands-on help? Get matched with a background-checked technician for remote or in-person support.',
    emoji: '🤝',
  },
  {
    icon: Headphones,
    title: 'Patient, Jargon-Free Help',
    desc: 'We explain things the way a patient friend would — no judgment, no jargon, just clear answers.',
    emoji: '💬',
  },
];

const About = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="About TekSure — Our Mission to Make Tech Simple"
      description="TekSure is an American technology support platform that helps everyday people understand technology with free guides, tools, and verified tech support."
      path="/about"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TekSure',
        url: 'https://teksure.com',
        logo: 'https://teksure.com/og-image.png',
        description: 'Free technology support and guides for everyday people. An American company making tech simple.',
        contactPoint: { '@type': 'ContactPoint', email: 'bailey@teksure.com', contactType: 'customer service' },
        sameAs: [],
        foundingDate: '2025',
        founder: { '@type': 'Person', name: 'Bailey Wilburn' },
      }}
    />
    <Navbar />

    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Mission</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology should empower everyone — not just the tech-savvy. TekSure helps seniors,
              beginners, and anyone who feels overwhelmed by tech to understand, troubleshoot, and
              master their devices with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Help</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Three pillars of support designed for real people with real tech problems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {helpCards.map((card) => (
            <div key={card.title} className="bento-card text-center">
              <span className="text-4xl mb-4 block">{card.emoji}</span>
              <h3 className="font-semibold text-base mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container max-w-2xl text-center">
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
