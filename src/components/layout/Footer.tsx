import { Link } from 'react-router-dom';

const GROUPS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: 'Get help',
    links: [
      { to: '/get-help', label: 'Talk to a real person' },
      { to: '/emergency-help', label: 'Scammed? Start here' },
      { to: '/scam-defense', label: 'Scams' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { to: '/guides', label: 'Guides' },
      { to: '/tools', label: 'Tools' },
      { to: '/glossary', label: 'Glossary' },
      { to: '/faq', label: 'FAQ' },
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
    <footer role="contentinfo" className="mt-20 border-t border-border bg-muted/50 print:hidden">
      {/* Extra bottom padding below lg keeps the last row clear of the mobile bottom nav. */}
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-28 lg:pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="TekSure home" className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img src="/teksure-logo.svg" alt="TekSure" width={147} height={32} className="h-8 w-auto block dark:hidden" />
              <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" width={147} height={32} className="h-8 w-auto hidden dark:block" />
            </Link>
            <p className="mt-4 text-base text-muted-foreground">
              Free tech help in plain English, for beginners and seniors.
            </p>
          </div>
          {GROUPS.map((g) => (
            <nav key={g.title} aria-label={`Footer — ${g.title}`}>
              <h2 className="text-base font-bold uppercase tracking-wide text-foreground">{g.title}</h2>
              <ul className="mt-3 space-y-1 text-lg">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="inline-flex min-h-[44px] items-center text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-10 border-t border-border pt-6 text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} TekSure. Free tech help in plain English.
        </p>
      </div>
    </footer>
  );
}
