import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Phone,
  Mail,
  Heart,
  Shield,
  Users,
  Facebook,
  Youtube,
  ArrowRight,
  Lock,
  CheckCircle2,
  Accessibility,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.includes('@') || !trimmed.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    setError('');
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: trimmed });
    setSubmitting(false);
    if (dbError && dbError.code !== '23505') {
      setError('Something went wrong. Please try again.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const columns = [
    {
      title: 'About TekSure',
      icon: Heart,
      content: (
        <div className="space-y-3 text-base leading-relaxed text-foreground/80">
          <p>
            We&rsquo;re an American tech support company helping everyday people feel confident
            with technology &mdash; with free guides, friendly tools, and real human help.
          </p>
          <p className="font-medium text-foreground">
            Our promise: no tech jargon, ever.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors"
          >
            Read our story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-2">
              Get involved
            </p>
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors"
            >
              Volunteer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Quick Help',
      icon: Shield,
      links: [
        { to: '/tekbrain', label: 'Ask TekBrain' },
        { to: '/scam-defense', label: 'Scam Help' },
        { to: '/setup', label: 'Setup Wizard' },
        { to: '/get-help', label: 'Book Help' },
        { to: '/tools', label: 'Find a Tool' },
        { to: '/free-resources', label: 'Free Tech Programs' },
        { to: '/glossary', label: 'Tech Glossary A–Z' },
      ],
    },
    {
      title: 'For Families',
      icon: Users,
      links: [
        { to: '/family-sharing', label: 'Family Tech Planner' },
        { to: '/caregiver-hub', label: 'Caregiver Resources' },
        { to: '/caregiver', label: "Caregiver's Guide" },
        { to: '/accessibility', label: 'Accessibility Hub' },
        { to: '/stories', label: 'Real Stories' },
      ],
    },
    {
      title: 'Contact & Legal',
      icon: Mail,
      links: [
        { to: 'tel:18008357873', label: 'Call us: 1-800-TEKSURE', external: true },
        { to: 'mailto:hello@teksure.com', label: 'hello@teksure.com', external: true },
        { to: '/technicians', label: 'Book a technician' },
        { to: '/get-help', label: 'Schedule a session' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/faq', label: 'FAQ' },
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/privacy', label: 'Terms of Use' },
      ],
    },
  ];

  return (
    <footer
      aria-label="Site footer"
      className="relative border-t border-amber-100 dark:border-border bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-amber-50/60 dark:from-muted/40 dark:via-muted/20 dark:to-muted/40 print:hidden"
    >
      {/* Trust indicator strip */}
      <div className="border-b border-amber-100/80 dark:border-border/60 bg-white/60 dark:bg-background/40 backdrop-blur-sm">
        <div className="container py-4">
          <ul
            aria-label="Why you can trust TekSure"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base"
          >
            <li className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-5 w-5 text-teksure-success" aria-hidden="true" />
              <span><strong className="text-foreground">Free forever</strong></span>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
              <span><strong className="text-foreground">No tracking</strong></span>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Heart className="h-5 w-5 text-rose-500" aria-hidden="true" />
              <span>Trusted by <strong className="text-foreground">10,000+ users</strong></span>
            </li>
          </ul>
        </div>
      </div>

      {/* "Talk to a real human" CTA band */}
      <div className="container pt-12 pb-8">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-amber-100/40 to-orange-100/40 dark:from-primary/20 dark:via-muted/40 dark:to-muted/40 border border-amber-200/60 dark:border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1.5">
              Need help? Talk to a real human.
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              No robots, no hold music. A friendly technician will walk you through whatever you&rsquo;re stuck on.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="text-base font-semibold h-14 px-8 rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            <Link to="/get-help" aria-label="Book a session to talk to a real human">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Talk to a Real Human
            </Link>
          </Button>
        </div>
      </div>

      {/* Main footer body */}
      <div className="container pb-10">
        {/* Brand + prominent contact line */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-md">
            <Link to="/" className="inline-block mb-3" aria-label="TekSure home">
              <img
                src="/teksure-logo.svg"
                alt="TekSure"
                width={183}
                height={40}
                className="h-10 w-auto block dark:hidden"
                loading="lazy"
              />
              <img
                src="/teksure-logo-white.svg"
                alt=""
                aria-hidden="true"
                width={183}
                height={40}
                className="h-10 w-auto hidden dark:block"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
            <a
              href="tel:18008357873"
              className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
              aria-label="Call TekSure at 1-800-TEKSURE"
            >
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              1-800-TEKSURE
            </a>
            <a
              href="mailto:hello@teksure.com"
              className="inline-flex items-center gap-2 font-medium text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              hello@teksure.com
            </a>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {columns.map((col) => {
            const Icon = col.icon;
            const headingId = `footer-nav-${col.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;
            return (
              <div key={col.title}>
                <h4
                  id={headingId}
                  className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  {col.title}
                </h4>
                {col.content ? (
                  col.content
                ) : (
                  <nav aria-labelledby={headingId} className="flex flex-col gap-3">
                    {col.links?.map((link) =>
                      'external' in link && link.external ? (
                        <a
                          key={link.to + link.label}
                          href={link.to}
                          className="text-base text-foreground/75 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200 inline-flex items-center gap-1.5 w-fit"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.to + link.label}
                          to={link.to}
                          className="text-base text-foreground/75 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200 w-fit"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </nav>
                )}
              </div>
            );
          })}
        </div>

        {/* Newsletter + Social row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 border-t border-amber-200/60 dark:border-border/60">
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-1.5">
              Weekly tips in plain English
            </h4>
            <p className="text-base text-foreground/75 mb-4 leading-relaxed">
              One short, helpful tech tip in your inbox every Sunday. No spam, ever.
            </p>
            {subscribed ? (
              <div
                role="status"
                className="flex items-center gap-2 text-base font-medium text-teksure-success"
              >
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Thanks! We&rsquo;ll send your first tip this Sunday.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
                aria-label="Newsletter signup"
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Your email address
                </label>
                <Input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="your@email.com"
                  className="h-12 text-base flex-1 bg-white dark:bg-background"
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  disabled={submitting}
                  className="h-12 px-6 text-base font-semibold whitespace-nowrap"
                >
                  {submitting ? 'Sending…' : 'Subscribe'}
                </Button>
              </form>
            )}
            {error && (
              <p role="alert" className="mt-2 text-sm text-destructive">
                {error}
              </p>
            )}
          </div>

          {/* Social & Accessibility */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-1.5">
              Connect with us
            </h4>
            <p className="text-base text-foreground/75 mb-4 leading-relaxed">
              Follow along for friendly tech tips in plain English.
            </p>
            <div className="flex md:justify-end items-center gap-3 mb-5">
              <a
                href="https://www.facebook.com/teksure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow TekSure on Facebook"
                className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white dark:bg-background border-2 border-amber-200 dark:border-border text-foreground/80 hover:text-primary hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
              >
                <Facebook className="h-7 w-7" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@teksure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to TekSure on YouTube"
                className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white dark:bg-background border-2 border-amber-200 dark:border-border text-foreground/80 hover:text-primary hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
              >
                <Youtube className="h-7 w-7" aria-hidden="true" />
              </a>
            </div>
            <Link
              to="/accessibility"
              className="inline-flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              <Accessibility className="h-5 w-5" aria-hidden="true" />
              Accessibility Hub
            </Link>
          </div>
        </div>

        {/* Bottom bar — copyright + legal */}
        <div className="border-t border-amber-200/60 dark:border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-foreground/60 text-center sm:text-left">
            &copy; {currentYear} TekSure. An American company. Made with{' '}
            <Heart className="inline-block h-3.5 w-3.5 text-rose-500 align-middle" aria-hidden="true" />{' '}
            for everyday people. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link
              to="/accessibility"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              Accessibility
            </Link>
            <Link
              to="/privacy"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/privacy"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/faq"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/whats-new"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              What&rsquo;s New
            </Link>
            <Link
              to="/roadmap"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              to="/site-index"
              className="text-foreground/60 hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              Site Index
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
