import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';

const LINKS = [
  { to: '/guides', label: 'Guides' },
  { to: '/tools', label: 'Tools' },
  { to: '/scam-defense', label: 'Scams' },
];

/**
 * Site header — a plain bar: logo, three links, Get Help, account.
 * Sticky, so it never covers content and pages need no spacer.
 * `noSpacer` is accepted for older callers and ignored.
 */
export function Navbar(_props: { noSpacer?: boolean } = {}) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const dashboardPath = user?.role === 'tech' ? '/tech' : user?.role === 'admin' ? '/admin' : '/customer';
  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + '/');

  const link = (to: string) =>
    `inline-flex items-center min-h-[44px] px-3 text-lg font-semibold rounded-md underline-offset-4
     hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
     ${isActive(to) ? 'text-primary underline' : 'text-foreground'}`;

  const signOut = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header role="banner" className="sticky top-0 z-50 w-full border-b border-border bg-background print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4">
        <Link to="/" aria-label="TekSure home" className="mr-2 shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <img src="/teksure-logo.svg" alt="TekSure" width={147} height={32} className="h-8 w-auto block dark:hidden" />
          <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" width={147} height={32} className="h-8 w-auto hidden dark:block" />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={link(l.to)} aria-current={isActive(l.to) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/search"
            aria-label="Search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <FontSizeToggle />
            <DarkModeToggle />
          </div>
          <Link
            to="/get-help"
            className="hidden sm:inline-flex items-center min-h-[44px] px-4 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Get Help
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:inline-flex items-center min-h-[44px] px-3 rounded-md text-lg font-semibold hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Account
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2">
                  <p className="font-semibold">{user.fullName}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(dashboardPath)}>Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/my-requests')}>My requests</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              state={{ from: location.pathname }}
              className="hidden md:inline-flex items-center min-h-[44px] px-3 rounded-md text-lg font-semibold hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Sign in
            </Link>
          )}

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="md:hidden border-t border-border bg-background px-4 pb-4">
          <ul className="flex flex-col">
            {[...LINKS, { to: '/get-help', label: 'Get Help' }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex min-h-[52px] items-center text-xl font-semibold border-b border-border">
                  {l.label}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                <li><Link to={dashboardPath} className="flex min-h-[52px] items-center text-xl border-b border-border">Dashboard</Link></li>
                <li><Link to="/my-requests" className="flex min-h-[52px] items-center text-xl border-b border-border">My requests</Link></li>
                <li>
                  <button onClick={signOut} className="flex min-h-[52px] w-full items-center text-xl border-b border-border">Sign out</button>
                </li>
              </>
            ) : (
              <li><Link to="/login" className="flex min-h-[52px] items-center text-xl border-b border-border">Sign in</Link></li>
            )}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <FontSizeToggle />
            <DarkModeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}

