import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Home, Search, BookOpen, Wrench, HelpCircle, ArrowRight } from 'lucide-react';

const QUICK_LINKS = [
  { icon: Home,       label: 'Go Home',        to: '/',          desc: 'Back to the TekSure homepage' },
  { icon: BookOpen,   label: 'Browse Guides',  to: '/guides',    desc: 'Step-by-step help for any device' },
  { icon: Wrench,     label: 'Tools',          to: '/tools',     desc: 'Handy tools — password checker, backup wizard & more' },
  { icon: HelpCircle, label: 'Get Help',       to: '/get-help',  desc: 'Book a real technician for hands-on support' },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found — TekSure"
        description="The page you're looking for doesn't exist. Browse our guides, tools, or get help from a real person."
        path="/404"
        type="error"
      />
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-background">
        <div className="text-center max-w-lg mx-auto">

          {/* Friendly visual */}
          <div className="text-8xl mb-4 select-none">🔍</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-primary">
            Hmm, we can't find that page.
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
            The page you were looking for doesn't seem to exist. It may have moved,
            or the link might have a small typo in it. No worries — let's get you
            somewhere useful!
          </p>

          {/* Search CTA */}
          <Button
            className="mb-10 gap-2"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <Search className="h-4 w-4" />
            Search TekSure
          </Button>

          {/* Quick links */}
          <p className="text-sm font-medium text-muted-foreground mb-4">Or head somewhere helpful:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {QUICK_LINKS.map(({ icon: Icon, label, to, desc }) => (
              <Link
                key={to}
                to={to}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
