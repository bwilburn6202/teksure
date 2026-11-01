import { Link } from 'react-router-dom';

const GROUPS = [
  {
    title: 'Learn',
    links: [
      { to: '/guides', label: 'Guides' },
      { to: '/tools', label: 'Tools' },
      { to: '/scam-defense', label: 'Scams' },
      { to: '/search', label: 'Search' },
    ],
  },
  {
    title: 'Get help',
    links: [
      { to: '/get-help', label: 'Talk to a person' },
      { to: '/emergency-help', label: 'Scammed? Start here' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'TekSure',
    links: [
      { to: '/about', label: 'About' },
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
      { to: '/refund-policy', label: 'Refunds' },
    ],
  },
];

export function Footer() {
  return (
    // pb-24 on small screens keeps the last line clear of the bottom nav bar.
    <footer role="contentinfo" className="relative mt-16 overflow-hidden bg-ink text-ink-foreground pb-24 lg:pb-0 print:hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" aria-label="TekSure home" className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
              <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" width={147} height={32} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-lg text-ink-muted">
              Free tech help in plain English, and a real person when you need one.
            </p>
          </div>
          {GROUPS.map((g) => (
            <nav key={g.title} aria-label={`Footer: ${g.title}`}>
              <h2 className="font-mono text-sm font-semibold text-signal">{g.title}</h2>
              <ul className="mt-3 space-y-1 text-lg">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-10 border-t border-ink-line pt-6 text-base text-ink-muted">
          &copy; {new Date().getFullYear()} TekSure. Free tech help in plain English.
        </p>
      </div>
    </footer>
  );
}
