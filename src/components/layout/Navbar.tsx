import { Link, useNavigate } from 'react-router-dom';
import { Menu, Shield, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const dashboardPath = user
    ? user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin'
    : '/';

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile
      ? 'text-lg font-medium py-2'
      : 'text-sm text-muted-foreground hover:text-foreground transition-colors';

    if (!user) {
      return (
        <>
          <Link to="/how-it-works" className={linkClass}>How It Works</Link>
          <Link to="/guides" className={linkClass}>Guides</Link>
          <Link to="/quick-fixes" className={linkClass}>Quick Fixes</Link>
          <Link to="/device-hub" className={linkClass}>Devices</Link>
          <Link to="/glossary" className={linkClass}>Glossary</Link>
          <Link to="/pricing" className={linkClass}>Pricing</Link>
          <Link to="/opportunity-dashboard" className={linkClass}>Business</Link>
          <Link to="/about" className={linkClass}>About</Link>
          <Button variant="ghost" onClick={() => navigate('/login')}>Log In</Button>
          <Button onClick={() => navigate('/signup')}>Sign Up</Button>
        </>
      );
    }

    return (
      <>
        <Link to={dashboardPath} className={linkClass}>Dashboard</Link>
        <span className="text-xs text-muted-foreground capitalize">{user.role}</span>
        <Button variant="ghost" onClick={() => { logout(); navigate('/'); }}>Log Out</Button>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to={user ? dashboardPath : '/'} className="flex items-center gap-2 font-bold text-xl">
          <Shield className="h-6 w-6 text-secondary" />
          <span>TekSure</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-muted/50 text-xs text-muted-foreground hover:bg-muted transition-colors"
            style={{ minHeight: '32px' }}
          >
            <Search className="h-3.5 w-3.5" />
            <span>⌘K</span>
          </button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <NavLinks mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
