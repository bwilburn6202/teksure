import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Heart,
  Facebook,
  Youtube,
  Lock,
  CheckCircle2,
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
      title: 'Quick Help',
      links: [
        { to: '/tekbrain', label: 'Ask TekBrain' },
        { to: '/scam-defense', label: 'Scam Help' },
        { to: '/get-help', label: 'Book Help' },
        { to: '/tools', label: 'Find a Tool' },
        { to: '/glossary', label: 'Tech Glossary A–Z' },
      ],
    },
    {
      title: 'For Families',
      links: [
        { to: '/family-sharing', label: 'Family Tech Planner' },
        { to: '/caregiver-hub', label: 'Caregiver Resources' },
        { to: '/accessibility', label: 'Accessibility Hub' },
        { to: '/stories', label: 'Real Stories' },
      ],
    },
    {
      title: 'Company',
      links: [
        { to: '/about', label: 'About TekSure' },
        { to: '/technicians', label: 'Book a Technician' },
        { to: '/volunteer', label: 'Volunteer' },
        { to: 'mailto:hello@teksure.com', label: 'hello@teksure.com', external: true },
      ],
    },
  ];

  return (
    <footer
      aria-label="Site footer"
      className="relative border-t border-amber-100 dark:border-border bg-amber-50/40 dark:bg-muted/30 print:hidden"
    >
      {/* Trust indicator strip */}
      <div className="border-b border-amber-100/80 dark:border-border/60">
        <div className="container py-3">
          <ul
            aria-label="Why you can trust TekSure"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm"
          >
            <li className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-teksure-success" aria-hidden="true" />
              <span className="font-medium text-foreground">Free forever</span>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="font-medium text-foreground">No tracking</span>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Heart className="h-4 w-4 text-rose-500" aria-hidden="true" />
              <span>Trusted by <strong className="text-foreground">10,000+ users</strong></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main footer body */}
      <div className="container py-12">
        {/* Top row: brand + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 pb-12 border-b border-amber-200/60 dark:border-border/60">
          <div>
            <Link to="/" className="inline-block mb-4" aria-label="TekSure home">
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
            <p className="text-base text-foreground/75 leading-relaxed max-w-md">
              Friendly American tech support for everyday people. No jargon, no robots — just real human help.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-foreground mb-2">
              Weekly tips in plain English
            </h4>
            <p className="text-sm text-foreground/70 mb-4">
              One helpful tech tip every Sunday. No spam, ever.
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
                className="flex flex-col sm:flex-row gap-2"
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
                  className="h-11 text-base flex-1 bg-white dark:bg-background"
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-11 px-5 text-base font-semibold whitespace-nowrap"
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
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) =>
                  'external' in link && link.external ? (
                    <li key={link.to + link.label}>
                      <a
                        href={link.to}
                        className="text-base text-foreground/75 hover:text-primary hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-base text-foreground/75 hover:text-primary hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-amber-200/60 dark:border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/65 text-center md:text-left">
            &copy; {currentYear} TekSure. Made with{' '}
            <Heart className="inline-block h-3.5 w-3.5 text-rose-500 align-middle" aria-hidden="true" />{' '}
            for everyday people.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
            <Link
              to="/privacy"
              className="text-foreground/65 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/privacy"
              className="text-foreground/65 hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/accessibility"
              className="text-foreground/65 hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              to="/site-index"
              className="text-foreground/65 hover:text-primary transition-colors"
            >
              Site Index
            </Link>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://www.facebook.com/teksure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow TekSure on Facebook"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full text-foreground/65 hover:text-primary hover:bg-white dark:hover:bg-background transition-colors"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@teksure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to TekSure on YouTube"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full text-foreground/65 hover:text-primary hover:bg-white dark:hover:bg-background transition-colors"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
