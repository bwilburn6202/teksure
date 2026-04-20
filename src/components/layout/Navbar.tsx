import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import { Menu, Search, LogOut, User, MessageSquare, Map, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { AccessibilityTray } from '@/components/AccessibilityTray';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { SeniorModeToggle } from '@/components/SeniorModeToggle';
import { HighContrastToggle } from '@/components/HighContrastToggle';
import { LanguageToggle } from '@/components/LanguageToggle';

/**
 * Glass-pill navbar — flattened.
 *
 * Top-level public nav is intentionally shallow: Learn · Tools · Safety · Ask · Help.
 * Anything more specific lives on the destination page or in the mobile drawer.
 * Senior UX research (NN/g 2023) shows nested dropdowns are the #1 friction
 * point for 65+ users, so we stripped the old three-column Resources popover.
 *
 * The accessibility tray is pinned to the right so visitors can resize text
 * or flip contrast without hunting through a settings menu.
 */
export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const dashboardPath = user
    ? user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin'
    : '/';

  const initials = user?.fullName
    ? user.fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '';

  // Flat 5-link public nav. Every item routes to a destination page that
  // itself owns any sub-navigation.
  const publicLinks = [
    { to: '/learn', label: 'Learn' },
    { to: '/tools', label: 'Tools' },
    { to: '/scam-defense', label: 'Safety' },
    { to: '/brain', label: 'Ask' },
    { to: '/get-help', label: 'Help' },
  ];

  // When signed in, swap in a dashboard-first set.
  const authLinks = [
    { to: dashboardPath, label: 'Dashboard' },
    { to: '/learn', label: 'Learn' },
    { to: '/tools', label: 'Tools' },
    { to: '/my-requests', label: 'Requests' },
    { to: '/get-help', label: 'Help' },
  ];

  const drawerLinks = [
    ...(user ? authLinks : publicLinks),
    { to: '/guides', label: 'All Guides' },
    { to: '/my-path', label: 'My Learning Path' },
    { to: '/quick-fixes', label: 'Quick Fixes' },
    { to: '/privacy-hub', label: 'Privacy Hub' },
    { to: '/free-resources', label: 'Free Tech Programs' },
    { to: '/accessibility', label: 'Accessibility Hub' },
    { to: '/forum', label: 'Community' },
    { to: '/about', label: 'About TekSure' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const pillBase =
    'pointer-events-auto flex items-center gap-0 h-[52px] rounded-full border ' +
    'bg-background/70 border-border/60 shadow-sm ' +
    'dark:bg-white/[0.08] dark:border-white/15 dark:shadow-[0_4px_24px_rgba(0,0,0,.2)] ' +
    'backdrop-blur-xl';
  const navLinkCls =
    'inline-flex items-center h-[38px] px-[14px] rounded-full text-sm font-medium ' +
    'text-muted-foreground hover:text-foreground hover:bg-muted/60 ' +
    'dark:text-white/80 dark:hover:text-white dark:hover:bg-white/[0.12] ' +
    'transition-colors';
  const navLinkActiveCls =
    'text-foreground bg-muted/60 dark:text-white dark:bg-white/[0.12]';

  return (
    <>
      <header className="sticky top-0 z-50 w-full pointer-events-none">
        <div className="flex items-center justify-center gap-2 px-4 pt-6 pb-3 pointer-events-none">
          {/* ── Primary pill (desktop) ── */}
          <nav aria-label="Main navigation" className={`hidden md:flex ${pillBase} px-2 pl-3`}>
            <Link
              to={user ? dashboardPath : '/'}
              className="flex items-center shrink-0 pr-4"
              aria-label="TekSure home"
            >
              <img src="/teksure-logo.svg" alt="TekSure" className="h-[26px] w-auto block dark:hidden" fetchPriority="high" />
              <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" className="h-[26px] w-auto hidden dark:block" fetchPriority="high" />
            </Link>

            <div className="flex items-center gap-[2px] pr-1">
              {(user ? authLinks : publicLinks).map((link) => (
                <PreloadLink
                  key={link.to}
                  to={link.to}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`${navLinkCls} ${isActive(link.to) ? navLinkActiveCls : ''}`}
                >
                  {link.label}
                </PreloadLink>
              ))}
            </div>

            <div className="mx-1 h-5 w-px bg-border/70 dark:bg-white/15" aria-hidden="true" />

            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
              aria-label="Open search"
              className="hidden lg:inline-flex items-center gap-1.5 h-9 px-3 mx-1 rounded-full text-[13px] font-medium
                         bg-background/40 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/60
                         dark:bg-white/[0.08] dark:border-white/10 dark:text-white/55 dark:hover:text-white dark:hover:bg-white/[0.12]
                         transition-colors"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              Search
              <kbd className="ml-1 text-[10px] font-sans border border-border/50 dark:border-white/20 rounded px-1 py-0.5 text-muted-foreground/60 dark:text-white/40" aria-hidden="true">⌘K</kbd>
            </button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label={`Account menu for ${user.fullName}`}
                    className="ml-2 h-[38px] w-[38px] rounded-full flex items-center justify-center hover:bg-muted/60 dark:hover:bg-white/[0.12] transition-colors"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-[11px] font-semibold">{initials}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <div className="px-3 py-2.5">
                    <p className="text-sm font-medium">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate(dashboardPath)}>
                    <User className="h-4 w-4 mr-2" aria-hidden="true" /> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/my-requests')}>
                    <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" /> My Requests
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/my-path')}>
                    <Map className="h-4 w-4 mr-2" aria-hidden="true" /> My Learning Path
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="h-4 w-4 mr-2" aria-hidden="true" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={async () => { await logout(); navigate('/'); }}>
                    <LogOut className="h-4 w-4 mr-2" aria-hidden="true" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => navigate('/signup', { state: { from: location.pathname } })}
                className="ml-1 inline-flex items-center h-[38px] px-5 rounded-full text-sm font-semibold
                           bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(29,95,232,.45)]
                           hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(29,95,232,.6)]
                           transition-transform transition-shadow duration-150"
              >
                Get Started
              </button>
            )}
          </nav>

          {/* ── Mobile pill: logo + search + hamburger ── */}
          <nav aria-label="Main navigation" className={`md:hidden ${pillBase} px-2 pl-3`}>
            <Link to={user ? dashboardPath : '/'} className="flex items-center shrink-0 pr-3" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-[26px] w-auto block dark:hidden" fetchPriority="high" />
              <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" className="h-[26px] w-auto hidden dark:block" fetchPriority="high" />
            </Link>
            <button
              aria-label="Search"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
              className="h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted/60 dark:text-white/70 dark:hover:bg-white/[0.12] transition-colors"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted/60 dark:text-white/70 dark:hover:bg-white/[0.12] transition-colors"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>

          {/* ── Accessibility tray (pinned, always visible) ── */}
          <AccessibilityTray />
        </div>
      </header>

      {/* Full-screen mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between h-16 px-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-8 w-auto block dark:hidden" />
              <img src="/teksure-logo-white.svg" alt="" aria-hidden="true" className="h-8 w-auto hidden dark:block" />
            </Link>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <nav aria-label="Mobile navigation" className="px-6 pt-4 pb-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
            {user && (
              <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{user.fullName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1">
              {drawerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`px-4 py-4 text-lg font-medium rounded-xl transition-colors min-h-[52px] flex items-center ${
                    isActive(link.to) ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {user ? (
              <>
                <div className="border-t my-4" />
                <button
                  onClick={async () => { await logout(); navigate('/'); setMobileMenuOpen(false); }}
                  className="px-4 py-4 text-lg font-medium text-destructive hover:bg-destructive/10 rounded-xl transition-colors text-left min-h-[52px] flex items-center w-full"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="mt-6 flex flex-col gap-3 px-2">
                <Button variant="outline" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl">Sign In</Button>
                <Button onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl shadow-sm shadow-primary/20">Get Started</Button>
              </div>
            )}

            <div className="border-t mt-6 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-4 mb-3">Display &amp; Accessibility</p>
              <div className="flex items-center gap-1.5 px-4" role="group" aria-label="Display and accessibility settings">
                <SeniorModeToggle />
                <HighContrastToggle />
                <FontSizeToggle />
                <DarkModeToggle />
                <LanguageToggle />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
