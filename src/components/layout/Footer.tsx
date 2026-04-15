import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Learn',
      links: [
        { to: '/guides', label: 'Guides' },
        { to: '/quick-fixes', label: 'Quick Fixes' },
        { to: '/glossary', label: 'Glossary' },
        { to: '/tools', label: 'Tools' },
        { to: '/blog', label: 'Blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { to: '/get-help', label: 'Get Help' },
        { to: '/forum', label: 'Forum' },
        { to: '/safety/scam-alerts', label: 'Safety Center' },
        { to: '/device-hub', label: 'Device Hub' },
        { to: '/local-help', label: 'Local Help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { to: '/about', label: 'About' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/roadmap', label: 'Roadmap' },
        { to: '/technicians', label: 'Technicians' },
      ],
    },
  ];

  return (
    <footer aria-label="Site footer" className="border-t border-border bg-muted/30">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-6 w-auto dark:brightness-0 dark:invert" loading="lazy" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              An American tech support company. Free guides, real human support, and tools built for everyday people.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 id={`footer-nav-${col.title.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
                {col.title}
              </h4>
              <nav aria-labelledby={`footer-nav-${col.title.toLowerCase()}`} className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/60 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} TekSure. An American company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/changelog" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Changelog</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
