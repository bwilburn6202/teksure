import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';

const DOORS = [
  { to: '/guides', title: 'Read a guide', text: `${GUIDE_COUNT_LABEL} step-by-step guides for phones, computers, email and more.` },
  { to: '/scam-defense', title: 'Check for a scam', text: 'Got a strange text, call or email? Find out before you click or pay.' },
  { to: '/tools', title: 'Use a tool', text: 'Fix Wi-Fi, check a password, find a lost phone, compare phone plans.' },
  { to: '/get-help', title: 'Talk to a real person', text: 'Book a session with a TekSure helper when a guide is not enough.' },
];

export default function Landing() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="Free step-by-step tech guides, scam checks, and real human help for seniors and beginners. No jargon — clear answers."
        path="/"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-12 sm:pt-20 outline-none">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Tech help in plain English.
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Free guides for phones, computers and the internet. No jargon, no sales pitch.
        </p>

        <form onSubmit={onSubmit} role="search" className="mt-8 flex gap-2">
          <label htmlFor="landing-search" className="sr-only">What do you need help with?</label>
          <input
            id="landing-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you need help with?"
            autoComplete="off"
            className="h-14 w-full rounded-md border-2 border-input bg-background px-4 text-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex h-14 shrink-0 items-center gap-2 rounded-md bg-primary px-5 text-lg font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            Search
          </button>
        </form>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {DOORS.map((d) => (
            <li key={d.to}>
              <Link
                to={d.to}
                className="block h-full rounded-md border-2 border-border p-5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="block text-2xl font-bold text-foreground">{d.title}</span>
                <span className="mt-2 block text-lg text-muted-foreground">{d.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-lg">
          Think you have been scammed?{' '}
          <Link to="/emergency-help" className="font-semibold text-primary underline underline-offset-4">
            Here is what to do right now.
          </Link>
        </p>
      </main>

      <Footer />
    </>
  );
}
