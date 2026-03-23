import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Shield, Search, LogOut, User, ChevronDown, BookOpen, Wrench, ShieldCheck, Info, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';

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

  const directLinks = [
    { to: '/how-it-works', label: 'How It Works' },
  ];

  const navGroups = [
    {
      label: 'Resources',
      icon: BookOpen,
      links: [
        { to: '/get-help', label: 'Get Help' },
        { to: '/guides', label: 'Guides' },
        { to: '/quick-fixes', label: 'Quick Fixes' },
        { to: '/tips', label: 'Tips' },
        { to: '/forum', label: 'Community Forum' },
        { to: '/favorites', label: 'Favorites' },
      ],
    },
    {
      label: 'Tools',
      icon: Wrench,
      links: [
        { to: '/tools', label: 'Tools Dashboard' },
        { to: '/glossary', label: 'Glossary' },
      ],
    },
    {
      label: 'Safety',
      icon: ShieldCheck,
      links: [
        { to: '/safety/scam-alerts', label: 'Safety' },
        { to: '/device-hub', label: 'Devices' },
      ],
    },
    {
      label: 'About',
      icon: Info,
      links: [
        { to: '/pricing', label: 'Pricing' },
        { to: '/about', label: 'About' },
        { to: '/roadmap', label: 'Roadmap' },
      ],
    },
  ];

  const PublicLinks = ({ mobile = false }: { mobile?: boolean }) => {
    if (mobile) {
      return (
        <>
          {directLinks.map((link) => (
            <Link key={link.to} to={link.to} className="block text-lg font-medium py-2">
              {link.label}
            </Link>
          ))}
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 pt-3 pb-1">{group.label}</p>
              {group.links.map((link) => (
                <Link key={link.to} to={link.to} className="block text-lg font-medium py-2">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </>
      );
    }

    return (
      <>
        {directLinks.map((link) => (
          <Link key={link.to} to={link.to} className="text-sm font-medium text-foreground/80 bg-muted hover:bg-accent border border-border hover:border-border px-3 py-1.5 rounded-lg transition-colors">
            {link.label}
          </Link>
        ))}
        {navGroups.map((group) => (
          <DropdownMenu key={group.label}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 bg-muted hover:bg-accent border border-border px-3 py-1.5 rounded-lg transition-colors">
                <group.icon className="h-3.5 w-3.5 text-muted-foreground" />
                {group.label}
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[160px]">
              {group.links.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
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
      ? 'text-lg font-medium py-2'
      : 'text-sm text-muted-foreground hover:text-foreground transition-colors';

    return (
      <>
        <Link to={dashboardPath} className={linkClass}>Dashboard</Link>
        <Link to="/guides" className={linkClass}>Guides</Link>
        <Link to="/forum" className={linkClass}>Forum</Link>
        <Link to="/my-requests" className={linkClass}>My Requests</Link>
        <Link to="/get-help" className={linkClass}>Get Help</Link>
        <Link to="/favorites" className={linkClass}>Favorites</Link>
        <Link to="/tools" className={linkClass}>Tools</Link>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to={user ? dashboardPath : '/'} className="flex items-center">
          <img src="/teksure-logo.svg" alt="TekSure" className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {user ? <AuthLinks /> : <PublicLinks />}
          <FontSizeToggle />
          <DarkModeToggle />
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
                <DropdownMenuItem onClick={() => navigate('/my-requests')}>
                  <MessageSquare className="h-4 w-4 mr-2" /> My Requests
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="h-4 w-4 mr-2" /> My Profile
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

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
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
                  <Button variant="ghost" className="justify-start" onClick={async () => { await logout(); navigate('/'); }}>
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <PublicLinks mobile />
                  <Button variant="ghost" onClick={() => navigate('/login')}>Sign In</Button>
                  <Button onClick={() => navigate('/login')}>Sign Up</Button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
