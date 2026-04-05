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
        { to: '/pricing', label: 'Pricing' },
        { to: '/roadmap', label: 'Roadmap' },
        { to: '/technicians', label: 'Technicians' },
      ],
    },
  ];

  return (
    <footer aria-label="Site footer" className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-7 w-auto" loading="lazy" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Tech help that makes sense. Free guides, real human support, and tools built for everyday people.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 id={`footer-nav-${col.title.toLowerCase()}`} className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <nav aria-labelledby={`footer-nav-${col.title.toLowerCase()}`} className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} TekSure. All rights reserved.
          </p>
            <div className="flex items-center gap-6">
              <Link to="/changelog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
            <Link to="/login" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
            <Link to="/signup" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Create Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
