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
    <footer aria-label="Site footer" className="bg-foreground text-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-5" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-7 w-auto brightness-0 invert" loading="lazy" />
            </Link>
            <p className="text-sm text-background/55 max-w-xs leading-relaxed">
              An American tech support company. Free guides, real human support, and tools built for everyday people.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 id={`footer-nav-${col.title.toLowerCase()}`} className="text-[10px] font-semibold uppercase tracking-[0.15em] text-background/35 mb-5">
                {col.title}
              </h4>
              <nav aria-labelledby={`footer-nav-${col.title.toLowerCase()}`} className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-background/55 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/35">
            &copy; {currentYear} TekSure. An American company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/changelog" className="text-xs text-background/35 hover:text-background/70 transition-colors">Changelog</Link>
            <Link to="/privacy" className="text-xs text-background/35 hover:text-background/70 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
