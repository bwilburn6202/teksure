import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/guides', label: 'Guides' },
  { to: '/tools', label: 'Tools' },
  { to: '/scam-defense', label: 'Scams' },
  { to: '/get-help', label: 'Get Help' },
  { to: '/emergency-help', label: 'Scammed? Start here' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/refund-policy', label: 'Refunds' },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 border-t border-border bg-background print:hidden">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="underline underline-offset-4 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} TekSure. Free tech help in plain English.
        </p>
      </div>
    </footer>
  );
}
