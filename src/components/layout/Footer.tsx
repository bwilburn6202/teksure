import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Learn',
      links: [
        { to: '/guides', label: 'All Guides' },
        { to: '/tools', label: 'Interactive Tools' },
        { to: '/quick-fixes', label: 'Quick Fixes' },
        { to: '/glossary', label: 'Glossary' },
        { to: '/ai-tutor', label: 'AI Tutor' },
        { to: '/weekly-tips', label: 'Weekly Tips' },
        { to: '/blog', label: 'Blog' },
      ],
    },
    {
      title: 'Safety',
      links: [
        { to: '/safety/scam-alerts', label: 'Scam Alerts' },
        { to: '/tools/scam-simulator', label: 'Scam Simulator' },
        { to: '/tools/privacy-audit', label: 'Privacy Audit' },
        { to: '/tools/cyber-scorecard', label: 'Security Scorecard' },
        { to: '/emergency-help', label: 'Emergency Help' },
      ],
    },
    {
      title: 'Support',
      links: [
        { to: '/get-help', label: 'Get Help' },
        { to: '/forum', label: 'Community Forum' },
        { to: '/local-help', label: 'Local Help' },
        { to: '/device-hub', label: 'Device Hub' },
        { to: '/technicians', label: 'Technicians' },
        { to: '/gift-session', label: 'Gift Tech Help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { to: '/about', label: 'About' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/roadmap', label: 'Roadmap' },
        { to: '/sources', label: 'Our Sources' },
        { to: '/changelog', label: 'Changelog' },
      ],
    },
  ];

  return (
    <footer aria-label="Site footer" className="border-t border-border bg-muted/30">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4" aria-label="TekSure home">
              <img src="/teksure-logo-stacked.svg" alt="TekSure" className="h-16 w-auto dark:brightness-0 dark:invert" loading="lazy" />
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
            <Link to="/roadmap" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Roadmap</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
