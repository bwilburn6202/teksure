import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, LogOut, User, ChevronDown, MessageSquare, Map, SlidersHorizontal, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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

  const dashboardPath = user
    ? user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin'
    : '/';

  const initials = user?.fullName
    ? user.fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '';

  const publicLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/pricing', label: 'Pricing' },
  ];

  const moreLinks = [
    { to: '/get-help', label: 'Get Help' },
    { to: '/quick-fixes', label: 'Quick Fixes' },
    { to: '/glossary', label: 'Glossary' },
    { to: '/blog', label: 'Blog' },
    { to: '/forum', label: 'Forum' },
    { to: '/safety/scam-alerts', label: 'Safety' },
    { to: '/about', label: 'About' },
    { to: '/roadmap', label: 'Roadmap' },
    { to: '/explore', label: 'Explore' },
  ];

  const authLinks = [
    { to: dashboardPath, label: 'Dashboard' },
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/my-requests', label: 'Requests' },
    { to: '/get-help', label: 'Get Help' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link to={user ? dashboardPath : '/'} className="flex items-center gap-2">
          <img src="/teksure-logo.svg" alt="TekSure" className="h-7 w-auto" fetchpriority="high" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {(user ? authLinks : publicLinks).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 text-base font-medium rounded-lg transition-colors ${
                isActive(link.to)
                  ? 'text-foreground bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {!user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-1.5 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors hover:bg-accent">
                  More
                  <ChevronDown className="h-3.5 w-3.5" />
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
        <div className="hidden md:flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Display settings">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-3">
              <p className="text-[11px] font-medium text-muted-foreground mb-2 px-1">Display &amp; Accessibility</p>
              <div className="flex items-center gap-0.5">
                <SeniorModeToggle />
                <HighContrastToggle />
                <FontSizeToggle />
                <DarkModeToggle />
                <LanguageToggle />
              </div>
            </PopoverContent>
          </Popover>

          <Link
            to="/book"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Talk to a Person
          </Link>

          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:bg-accent transition-colors"
            style={{ minHeight: '44px' }}
          >
            <Search className="h-3.5 w-3.5" />
            <kbd className="font-sans text-[10px] text-muted-foreground">⌘K</kbd>
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
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
                  <MessageSquare className="h-4 w-4 mr-2" /> My Requests
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/my-path')}>
                  <Map className="h-4 w-4 mr-2" /> Learning Path
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="h-4 w-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={async () => { await logout(); navigate('/'); }}>
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
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
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent className="w-72">
            <nav className="flex flex-col gap-1 mt-8">
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
                      className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.to) ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t my-2" />
                  <button
                    onClick={async () => { await logout(); navigate('/'); }}
                    className="px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-left"
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
                      className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.to) ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t my-3" />
                  <div className="flex flex-col gap-2 px-3">
                    <Button variant="outline" onClick={() => navigate('/login')} className="w-full">Sign In</Button>
                    <Button onClick={() => navigate('/login')} className="w-full">Get Started</Button>
                  </div>
                </>
              )}

              <div className="border-t mt-4 pt-4">
                <div className="flex items-center gap-1 px-3">
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
    </header>
  );
}
