/**
 * Mockup Selector Page — Compare 3 homepage redesign concepts
 *
 * Navigate to each mockup to see a complete, self-contained homepage redesign.
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

const mockups = [
  {
    id: 'a',
    path: '/mockup-a',
    name: 'Warm & Minimal',
    inspiration: 'Notion-inspired',
    description: 'Warm neutrals, whisper-thin borders, generous whitespace, and ultra-readable typography. Feels like quality paper — calm, trustworthy, and approachable.',
    traits: ['Warm off-white (#f6f5f4) sections', 'Single blue accent color', 'Whisper borders & minimal shadows', 'Maximum clarity & readability'],
    preview: {
      bg: '#f6f5f4',
      accent: '#0075de',
      text: '#31302e',
    },
  },
  {
    id: 'b',
    path: '/mockup-b',
    name: 'Bold & Inviting',
    inspiration: 'Airbnb-inspired',
    description: 'Photography-forward with warm near-black text, large rounded cards, and a coral accent. Feels like browsing a travel magazine — inviting and tactile.',
    traits: ['Dark hero with coral (#ff385c) accent', 'Large 20px rounded cards', 'Horizontal category pills', 'Testimonials & social proof'],
    preview: {
      bg: '#ffffff',
      accent: '#ff385c',
      text: '#222222',
    },
  },
  {
    id: 'c',
    path: '/mockup-c',
    name: 'Premium & Polished',
    inspiration: 'Stripe-inspired',
    description: 'Sophisticated deep navy headings, purple accent, blue-tinted shadows, and elegant light-weight typography. Feels like a premium fintech — high-trust and precise.',
    traits: ['Deep navy (#061b31) headings', 'Purple (#533afd) accent', 'Light font weight (300) elegance', 'Blue-tinted shadows & dark sections'],
    preview: {
      bg: '#f8fafc',
      accent: '#533afd',
      text: '#061b31',
    },
  },
];

const Mockups = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="TekSure — Design Mockups" description="Compare three homepage redesign concepts" path="/mockups" />
      <Navbar />

      <main id="main-content" className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Palette className="w-4 h-4" /> Design Exploration
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Homepage Redesign Mockups
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three complete homepage redesigns inspired by world-class design systems.
              Each mockup is a self-contained page — click through to see the full design.
            </p>
          </div>

          {/* Mockup Cards */}
          <div className="grid gap-6">
            {mockups.map((mockup) => (
              <Link
                key={mockup.id}
                to={mockup.path}
                className="group block rounded-2xl border bg-card overflow-hidden transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Color Preview */}
                  <div
                    className="w-full md:w-64 h-48 md:h-auto flex flex-col items-center justify-center gap-3 shrink-0 p-8"
                    style={{ background: mockup.preview.bg }}
                  >
                    <div className="flex gap-3 items-end">
                      <div className="w-10 h-14 rounded-md" style={{ background: mockup.preview.text }} />
                      <div className="w-10 h-10 rounded-md" style={{ background: mockup.preview.accent }} />
                      <div className="w-10 h-8 rounded-md" style={{ background: mockup.preview.bg, border: `2px solid ${mockup.preview.text}20` }} />
                    </div>
                    <span className="text-xs font-medium mt-2" style={{ color: mockup.preview.text }}>
                      {mockup.inspiration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-xl md:text-2xl font-bold">
                          Mockup {mockup.id.toUpperCase()}: {mockup.name}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {mockup.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mockup.traits.map((trait) => (
                          <span key={trait} className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      View Full Mockup <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-12 p-6 rounded-xl bg-muted/50 border text-center">
            <p className="text-sm text-muted-foreground">
              Each mockup is a complete, standalone homepage with its own navigation, hero, features, guides, and footer.
              They use inline styles to demonstrate the design direction independently of TekSure's current theme.
              Pick the direction you like best and we can implement it site-wide.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mockups;
