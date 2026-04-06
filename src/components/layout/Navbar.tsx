import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, LogOut, User, Phone, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { SeniorModeToggle } from '@/components/SeniorModeToggle';
import { HighContrastToggle } from '@/components/HighContrastToggle';
import { LanguageToggle } from '@/components/LanguageToggle';

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

  const publicLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/dream-builder', label: 'Dream Builder' },
    { to: '/playground', label: 'Playground' },
    { to: '/tools', label: 'Tools' },
    { to: '/get-help', label: 'Get Help' },
  ];

  const moreLinks = [
    { to: '/dream-builder', label: 'Dream Builder' },
    { to: '/playground', label: 'Playground' },
    { to: '/quick-fixes', label: 'Quick Fixes' },
    { to: '/glossary', label: 'Glossary' },
    { to: '/videos', label: 'Videos' },
    { to: '/blog', label: 'Blog' },
    { to: '/forum', label: 'Forum' },
    { to: '/safety/scam-alerts', label: 'Safety' },
    { to: '/about', label: 'About' },
  ];

  const authLinks = [
    { to: dashboardPath, label: 'Dashboard' },
    { to: '/my-requests', label: 'Requests' },
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Minimal top bar */}
      <header className="top-bar">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to={user ? dashboardPath : '/'} className="flex items-center gap-2" aria-label="TekSure home">
            <img src="/teksure-logo.svg" alt="TekSure" className="h-7 w-auto" fetchPriority="high" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {(user ? authLinks : publicLinks).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {!user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors hover:bg-accent/50">
                    More
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  {moreLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link to={link.to} className="w-full cursor-pointer">{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            {/* Accessibility settings - desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 hidden md:flex" aria-label="Display settings">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-3">
                <p className="text-[11px] font-medium text-muted-foreground mb-2 px-1">Display & Accessibility</p>
                <div className="flex items-center gap-0.5 flex-wrap">
                  <SeniorModeToggle />
                  <HighContrastToggle />
                  <FontSizeToggle />
                  <DarkModeToggle />
                  <LanguageToggle />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Talk to a Person - desktop */}
            <Link
              to="/book"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Talk to a Person</span>
            </Link>

            {/* Search trigger - desktop */}
            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              aria-label="Open search"
              className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:bg-accent transition-colors"
            >
              <Search className="h-3.5 w-3.5" />
              <kbd className="font-sans text-[10px]">⌘K</kbd>
            </button>

            {/* Auth */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" aria-label={`Account menu for ${user.fullName}`}>
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="bg-primary text-primary-foreground text-[10px] font-semibold">{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate(dashboardPath)}>
                    <User className="h-4 w-4 mr-2" /> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/my-requests')}>
                    <User className="h-4 w-4 mr-2" /> My Requests
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={async () => { await logout(); navigate('/'); }}>
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium h-8"
                  onClick={() => navigate('/login', { state: { from: location.pathname } })}
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="text-sm font-medium h-8"
                  onClick={() => navigate('/login', { state: { from: location.pathname } })}
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11 md:hidden" aria-label="Open navigation menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-72 overflow-y-auto">
                <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-8">
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">{initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{user.fullName}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      {authLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive(link.to) ? 'page' : undefined}
                          className={`px-3 py-3 text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                            isActive(link.to) ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="border-t my-2" />
                      <button
                        onClick={async () => { await logout(); navigate('/'); setMobileMenuOpen(false); }}
                        className="px-3 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-left min-h-[44px] flex items-center"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      {[...publicLinks, ...moreLinks].map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive(link.to) ? 'page' : undefined}
                          className={`px-3 py-3 text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                            isActive(link.to) ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="border-t my-3" />
                      <div className="flex flex-col gap-2 px-3">
                        <Button variant="outline" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[44px]">Sign In</Button>
                        <Button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[44px]">Get Started</Button>
                      </div>
                    </>
                  )}

                  <div className="border-t mt-4 pt-4">
                    <div className="flex items-center gap-1 px-3 flex-wrap" role="group" aria-label="Display and accessibility settings">
                      <SeniorModeToggle />
                      <HighContrastToggle />
                      <FontSizeToggle />
                      <DarkModeToggle />
                      <LanguageToggle />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="bottom-nav" aria-label="Mobile bottom navigation">
        <div className="flex items-center justify-around py-2">
          {[
            { to: '/', icon: '🏠', label: 'Home' },
            { to: '/guides', icon: '📚', label: 'Guides' },
            { to: '/tools', icon: '🔧', label: 'Tools' },
            { to: '/get-help', icon: '💬', label: 'Help' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors min-w-[56px] ${
                isActive(item.to) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
