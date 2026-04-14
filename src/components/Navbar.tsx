import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Shield, Search, LogOut, User, ChevronDown, BookOpen, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { PreloadLink } from '@/components/PreloadLink';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dashboardPath = user
    ? user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin'
    : '/';

  const initials = user?.fullName
    ? user.fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '';

  const directLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
  ];

  const navGroups = [
    {
      label: 'Learn',
      icon: BookOpen,
      links: [
        { to: '/quick-fixes', label: 'Quick Fixes' },
        { to: '/tips', label: 'Tips' },
        { to: '/glossary', label: 'Glossary' },
        { to: '/safety/scam-alerts', label: 'Safety & Scams' },
      ],
    },
    {
      label: 'More',
      icon: Info,
      links: [
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/about', label: 'About' },
      ],
    },
  ];

  const PublicLinks = ({ mobile = false }: { mobile?: boolean }) => {
    if (mobile) {
      return (
        <>
          {directLinks.map((link) => (
            <PreloadLink key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-lg font-medium min-h-[44px] py-2">
              {link.label}
            </PreloadLink>
          ))}
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 pt-3 pb-1">{group.label}</p>
              {group.links.map((link) => (
                <PreloadLink key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center text-lg font-medium min-h-[44px] py-2">
                  {link.label}
                </PreloadLink>
              ))}
            </div>
          ))}
        </>
      );
    }

    return (
      <>
        {directLinks.map((link) => (
          <PreloadLink key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 px-2.5 py-1.5 rounded-md transition-colors">
            {link.label}
          </PreloadLink>
        ))}
        {navGroups.map((group) => (
          <DropdownMenu key={group.label}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 px-2.5 py-1.5 rounded-md transition-colors">
                <group.icon className="h-3.5 w-3.5" />
                {group.label}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[160px]">
              {group.links.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <PreloadLink to={link.to} className="w-full cursor-pointer">
                    {link.label}
                  </PreloadLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </>
    );
  };

  const AuthLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile
      ? 'flex items-center text-lg font-medium min-h-[44px] py-2'
      : 'text-sm text-muted-foreground hover:text-foreground transition-colors';

    return (
      <>
        <PreloadLink to={dashboardPath} onClick={mobile ? () => setMobileMenuOpen(false) : undefined} className={linkClass}>Dashboard</PreloadLink>
        <PreloadLink to="/guides" onClick={mobile ? () => setMobileMenuOpen(false) : undefined} className={linkClass}>Guides</PreloadLink>
        <PreloadLink to="/favorites" onClick={mobile ? () => setMobileMenuOpen(false) : undefined} className={linkClass}>Favorites</PreloadLink>
        <PreloadLink to="/tools" onClick={mobile ? () => setMobileMenuOpen(false) : undefined} className={linkClass}>Tools</PreloadLink>
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
          {user ? <AuthLinks /> : <PublicLinks />}
          <FontSizeToggle />
          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-muted/50 text-xs text-muted-foreground hover:bg-muted transition-colors"
            style={{ minHeight: '32px' }}
          >
            <Search className="h-3.5 w-3.5" />
            <span>⌘K</span>
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">{user.fullName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuItem onClick={() => navigate(dashboardPath)}>
                  <User className="h-4 w-4 mr-2" /> Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={async () => { await logout(); navigate('/'); }}>
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate('/login', { state: { from: location.pathname } })}>Sign In</Button>
              <Button onClick={() => navigate('/login', { state: { from: location.pathname } })}>Sign Up</Button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          {/* Mobile search icon */}
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11"
            aria-label="Search"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{user.fullName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <AuthLinks mobile />
                    <Button variant="ghost" className="justify-start min-h-[44px]" onClick={async () => { await logout(); navigate('/'); setMobileMenuOpen(false); }}>
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <PublicLinks mobile />
                    <Button variant="ghost" className="min-h-[44px]" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>Sign In</Button>
                    <Button className="min-h-[44px]" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>Sign Up</Button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
