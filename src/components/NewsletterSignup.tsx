import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

const STORAGE_KEY = 'teksure-newsletter-email';

export function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(!!localStorage.getItem(STORAGE_KEY));
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.includes('@') || !trimmed.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    localStorage.setItem(STORAGE_KEY, trimmed);
    setSubmitted(true);
    setError('');
  };

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-green-600 font-medium"
            >
              <CheckCircle className="h-4 w-4" />
              You're subscribed! Weekly tips incoming 🎉
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="your@email.com"
                className="flex-1 text-sm bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <Button type="submit" size="sm">
                Subscribe <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`rounded-xl border border-border bg-muted/50 p-4 ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-4 w-4 text-secondary" />
          <span className="text-sm font-semibold">Weekly tech tips — free</span>
        </div>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" /> Subscribed! Look out for your first tip.
            </motion.div>
          ) : (
            <motion.form key="f" onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="your@email.com"
                className="flex-1 text-sm bg-background border border-border rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <Button type="submit" size="sm" className="shrink-0">Go</Button>
            </motion.form>
          )}
        </AnimatePresence>
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        {!submitted && <p className="text-[11px] text-muted-foreground mt-2">No spam. Unsubscribe any time.</p>}
      </div>
    );
  }

  // Default full-size variant
  return (
    <section className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20 p-8 text-center ${className}`}>
      <div className="absolute top-4 right-6 text-secondary/20 pointer-events-none">
        <Sparkles className="h-24 w-24" />
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-secondary/15 border border-secondary/30 mb-4">
          <Mail className="h-6 w-6 text-secondary" />
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
              <h3 className="text-xl font-bold">You're in! 🎉</h3>
              <p className="text-sm text-muted-foreground">
                Expect one friendly email each week — a quick tip, a new guide, or a scam alert worth knowing about.
              </p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold mb-2">Get weekly tech tips</h3>
              <p className="text-sm text-muted-foreground mb-6">
                One email a week with a practical tip, new guide, or scam alert. Plain English. No jargon. Unsubscribe any time.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="your@email.com"
                  className="flex-1 text-sm bg-background border border-border rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <Button type="submit" className="sm:shrink-0">
                  Subscribe <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </form>
              {error && <p className="text-xs text-destructive mt-2">{error}</p>}
              <p className="text-[11px] text-muted-foreground mt-3">
                We respect your inbox. No spam, ever. Read our{' '}
                <a href="/about" className="underline hover:text-foreground transition-colors">privacy policy</a>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
