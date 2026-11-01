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
    <footer role="contentinfo" className="mt-20 border-t-2 border-foreground pb-24 lg:pb-0 print:hidden">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {GROUPS.map((g) => (
            <nav key={g.title} aria-label={`Footer: ${g.title}`}>
              <h2 className="font-display text-xl font-bold">{g.title}</h2>
              <ul className="mt-2 text-lg">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="inline-flex min-h-[44px] items-center underline underline-offset-4 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-6 text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} TekSure. Written by people, for people. Questions or corrections:{' '}
          <a href="mailto:hello@teksure.com" className="underline underline-offset-4 hover:text-primary">hello@teksure.com</a>
        </p>
      </div>
    </footer>
  );
}
