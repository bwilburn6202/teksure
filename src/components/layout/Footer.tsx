import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: 'hsl(222 47% 11%)', color: 'hsl(210 20% 92%)' }}>
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-2">
              <Shield className="h-5 w-5 text-secondary" />
              TekSure
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The #1 tech help resource for beginners. Free guides, quick fixes, and verified tech support.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Learn</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground">Guides</Link>
              <Link to="/quick-fixes" className="text-sm text-muted-foreground hover:text-foreground">Quick Fixes</Link>
              <Link to="/glossary" className="text-sm text-muted-foreground hover:text-foreground">Glossary</Link>
              <Link to="/device-hub" className="text-sm text-muted-foreground hover:text-foreground">Device Hub</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link to="/opportunity-dashboard" className="text-sm text-muted-foreground hover:text-foreground">Business Opportunities</Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Support</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Log In</Link>
              <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">Sign Up</Link>
            </nav>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TekSure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
