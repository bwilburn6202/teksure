import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-2">
              <Shield className="h-5 w-5 text-secondary" />
              TekSure
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting you with verified tech professionals for fast, reliable support.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Account</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Log In</Link>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">Sign Up</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TekSure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
