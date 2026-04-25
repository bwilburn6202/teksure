import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import {
  Menu,
  Search,
  LogOut,
  User,
  Settings,
  MessageSquare,
  MessageCircle,
  Calendar,
  Map,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { HighContrastToggle } from '@/components/HighContrastToggle';
import { LanguageToggle } from '@/components/LanguageToggle';

/**
 * TekSure universal navbar — glass-bubble floating pill.
 *
 * Design direction:
 *   - The navbar is a single rounded-full pill that floats ABOVE the page,
 *     never a flat edge-to-edge bar. A cream-tinted, frosted backdrop-blur
 *     layer lets the page background (cream on home, sage on guides, etc.)
 *     tint through while the bubble shape stays consistent site-wide.
 *   - Subtle warm-white border + soft drop shadow lift it off the content.
 *   - `position: fixed` keeps the pill pinned while scrolling. A spacer div
 *     is rendered right after the header so page content doesn't slip beneath
 *     it — consuming pages need no extra padding.
 *
 * Palette (matches Index.tsx landing — cream + navy + amber):
 *   - Cream glass:   rgba(250,248,244, 0.6) · blur 24px
 *   - Warm edge:     rgba(255,255,255, 0.65)
 *   - Navy accent:   #2A5FCC (hover #234FB0)
 *   - Amber accent:  #E87A2B (Easy Mode active)
 *
 * Desktop layout (left → right):
 *   [Logo]  Guides  Tools  [Ask TekBrain*]  [Book Help]   ···
 *                                           Search · Easy Mode · Settings · Avatar
 *
 * Mobile: hamburger opens a right-side slide-out drawer with ≥ 52px
 * tap targets, primary CTAs on top, and a clear Easy Mode toggle.
 */
export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when drawer is open, close on Escape.
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      document.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      };
    }
    document.body.style.overflow = '';
  }, [mobileMenuOpen]);

  const dashboardPath = user
    ? user.role === 'customer'
      ? '/customer'
      : user.role === 'tech'
      ? '/tech'
      : '/admin'
    : '/';

  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '';

  const openSearch = () =>
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
    );

  const primaryLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/favorites', label: 'My Favorites' },
  ];

  const mobileBrowseLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/learn', label: 'Learning Paths' },
    { to: '/scam-alerts', label: 'Scam Alerts' },
    { to: '/tech-help-near-me', label: 'Help Near Me' },
    { to: '/glossary', label: 'Tech Glossary A–Z' },
    { to: '/about', label: 'About TekSure' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Shared focus ring — transparent offset reads cleanly over glass
  // rather than painting a solid halo.
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5FCC] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  // Quiet text link inside the glass pill.
  const navLinkCls =
    `inline-flex items-center h-11 px-4 rounded-full text-[15px] font-semibold ` +
    `text-[#1A1A1A] dark:text-white/90 ` +
    `hover:text-[#2A5FCC] hover:bg-white/70 dark:hover:bg-white/10 ` +
    `transition-colors ${focusRing}`;

  const navLinkActiveCls =
    'text-[#2A5FCC] bg-white/80 dark:bg-white/15 dark:text-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]';

  return (
    <>
      {/* Floating glass-bubble pill — fixed, centered, above everything */}
      <header
        role="banner"
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50
                   w-[calc(100%-16px)] sm:w-[calc(100%-32px)] max-w-[1280px]
                   pointer-events-none print:hidden"
      >
        <div
          className="pointer-events-auto flex items-center gap-1.5
                     h-16 pl-3 pr-2 sm:pl-5 sm:pr-3
                     rounded-full
                     bg-[rgba(250,248,244,0.6)] dark:bg-[rgba(10,24,48,0.55)]
                     supports-[backdrop-filter]:bg-[rgba(250,248,244,0.45)]
                     supports-[backdrop-filter]:dark:bg-[rgba(10,24,48,0.4)]
                     backdrop-blur-xl backdrop-saturate-150
                     border border-white/65 dark:border-white/10
                     shadow-[0_10px_40px_-12px_rgba(26,26,26,0.22),0_2px_6px_rgba(26,26,26,0.04)]"
        >
          {/* Logo */}
          <Link
            to={user ? dashboardPath : '/'}
            aria-label="TekSure home"
            className={`flex items-center shrink-0 mr-1 rounded-full px-1 ${focusRing}`}
          >
            <img
              src="/teksure-logo.svg"
              alt="TekSure"
              className="h-8 w-auto block dark:hidden"
              fetchPriority="high"
            />
            <img
              src="/teksure-logo-white.svg"
              alt=""
              aria-hidden="true"
              className="h-8 w-auto hidden dark:block"
            />
          </Link>

          {/* Desktop primary nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {primaryLinks.map((link) => (
              <PreloadLink
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`${navLinkCls} ${isActive(link.to) ? navLinkActiveCls : ''}`}
              >
                {link.label}
              </PreloadLink>
            ))}

            {/* Ask TekBrain — primary pill CTA, draws attention */}
            <PreloadLink
              to="/brain"
              aria-current={isActive('/brain') ? 'page' : undefined}
              className={`ml-1.5 inline-flex items-center gap-1.5 h-11 px-4 rounded-full text-[15px] font-bold
                          bg-[#2A5FCC] text-white
                          shadow-[0_4px_14px_rgba(42,95,204,0.35)]
                          hover:bg-[#234FB0] hover:shadow-[0_8px_22px_rgba(42,95,204,0.45)]
                          hover:-translate-y-px transition-[transform,box-shadow,background-color] duration-150
                          motion-reduce:hover:transform-none ${focusRing}`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Ask TekBrain
            </PreloadLink>

            {/* Book Help — glassy outline pill */}
            <PreloadLink
              to="/get-help"
              aria-current={isActive('/get-help') ? 'page' : undefined}
              className={`ml-1 inline-flex items-center gap-1.5 h-11 px-4 rounded-full text-[15px] font-bold
                          bg-white/60 dark:bg-white/10 border-2 border-[#2A5FCC] text-[#2A5FCC] dark:text-white
                          hover:bg-white/95 dark:hover:bg-white/15
                          hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(42,95,204,0.15)]
                          transition-[transform,box-shadow,background-color] duration-150
                          motion-reduce:hover:transform-none ${focusRing}`}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Book Help
            </PreloadLink>
          </nav>

          {/* Right utilities (desktop) */}
          <div className="ml-auto hidden md:flex items-center gap-1">
            {/* Search */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className={`inline-flex items-center justify-center h-11 w-11 rounded-full
                          bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/15
                          text-[#1A1A1A] dark:text-white/90
                          hover:bg-white hover:text-[#2A5FCC] hover:border-[#2A5FCC]
                          dark:hover:bg-white/20 dark:hover:text-white dark:hover:border-white/30
                          transition-colors ${focusRing}`}
            >
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            {/* Settings / Display & Accessibility */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  aria-label="Display and accessibility settings"
                  className={`inline-flex items-center justify-center h-11 w-11 rounded-full
                              bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/15
                              text-[#1A1A1A] dark:text-white/90
                              hover:bg-white hover:text-[#2A5FCC] hover:border-[#2A5FCC]
                              dark:hover:bg-white/20 dark:hover:text-white dark:hover:border-white/30
                              transition-colors ${focusRing}`}
                >
                  <Settings className="h-4 w-4" aria-hidden="true" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-4 border-[#E4DFD4]">
                <p
                  className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3"
                  id="display-settings-label"
                >
                  Display &amp; Accessibility
                </p>
                <div
                  className="flex items-center gap-1.5"
                  role="group"
                  aria-labelledby="display-settings-label"
                >
                  <HighContrastToggle />
                  <FontSizeToggle />
                  <DarkModeToggle />
                  <LanguageToggle />
                </div>
              </PopoverContent>
            </Popover>

            {/* Avatar / Sign In */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label={`Account menu for ${user.fullName}`}
                    className={`ml-0.5 h-11 w-11 rounded-full border border-white/80 dark:border-white/15
                                bg-white/60 dark:bg-white/10 flex items-center justify-center
                                hover:bg-white hover:border-[#2A5FCC] dark:hover:bg-white/20 dark:hover:border-white/30
                                transition-colors ${focusRing}`}
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-[#2A5FCC] text-white text-[11px] font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2.5">
                    <p className="text-sm font-semibold">{user.fullName}</p>
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
                  <DropdownMenuItem
                    onClick={async () => {
                      await logout();
                      navigate('/');
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" aria-hidden="true" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => navigate('/login', { state: { from: location.pathname } })}
                className={`ml-0.5 inline-flex items-center h-11 px-4 rounded-full text-[14px] font-semibold
                            text-[#1A1A1A] dark:text-white/90
                            hover:bg-white/80 hover:text-[#2A5FCC] dark:hover:bg-white/15
                            transition-colors ${focusRing}`}
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile right utilities */}
          <div className="ml-auto flex md:hidden items-center gap-0.5">
            <button
              onClick={openSearch}
              aria-label="Open search"
              className={`inline-flex items-center justify-center h-11 w-11 rounded-full
                          text-[#1A1A1A] dark:text-white/90
                          hover:bg-white/70 dark:hover:bg-white/10
                          transition-colors ${focusRing}`}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`inline-flex items-center justify-center h-11 w-11 rounded-full
                          text-[#1A1A1A] dark:text-white/90
                          hover:bg-white/70 dark:hover:bg-white/10
                          transition-colors ${focusRing}`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/*
        Spacer — since the pill is `position: fixed`, it doesn't reserve
        layout space. We render a same-height sibling so page content lines
        up below it on every page without extra per-page padding.
      */}
      <div aria-hidden="true" className="h-[80px] sm:h-[88px] print:hidden" />

      {/* Mobile slide-out drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop — click to close */}
          <button
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-[#1A1A1A]/40 animate-in fade-in duration-150"
          />

          {/* Drawer panel */}
          <div
            className="absolute right-0 top-0 h-full w-[min(88vw,380px)]
                       bg-[#FAF8F4] dark:bg-background border-l border-[#E4DFD4] dark:border-white/10
                       shadow-2xl flex flex-col
                       animate-in slide-in-from-right duration-200"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-[#E4DFD4] dark:border-white/10">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 rounded-lg ${focusRing}`}
                aria-label="TekSure home"
              >
                <img
                  src="/teksure-logo.svg"
                  alt="TekSure"
                  className="h-7 w-auto block dark:hidden"
                />
                <img
                  src="/teksure-logo-white.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-auto hidden dark:block"
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className={`h-11 w-11 rounded-full flex items-center justify-center
                            text-[#1A1A1A] dark:text-white/90
                            hover:bg-white dark:hover:bg-white/10 transition-colors ${focusRing}`}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-4 py-4"
            >
              {user && (
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#E4DFD4] dark:border-white/10">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className="bg-[#2A5FCC] text-white text-sm font-bold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold text-[15px] text-[#1A1A1A] dark:text-white truncate">
                      {user.fullName}
                    </p>
                    <p className="text-xs text-[#6B6B6B] dark:text-white/60 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Primary CTAs up top */}
              <div className="flex flex-col gap-2.5 mb-5">
                <Link
                  to="/brain"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`inline-flex items-center justify-center gap-2 min-h-[56px] px-5 rounded-full text-lg font-bold
                              bg-[#2A5FCC] text-white shadow-[0_4px_14px_rgba(42,95,204,0.35)]
                              hover:bg-[#234FB0] transition-colors ${focusRing}`}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Ask TekBrain
                </Link>
                <Link
                  to="/get-help"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`inline-flex items-center justify-center gap-2 min-h-[56px] px-5 rounded-full text-lg font-bold
                              bg-white dark:bg-transparent border-2 border-[#2A5FCC]
                              text-[#2A5FCC] dark:text-white
                              hover:bg-[#F0F5FF] dark:hover:bg-white/10 transition-colors ${focusRing}`}
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Help
                </Link>
              </div>

              {/* Browse list */}
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-white/60 px-2 mb-2">
                Browse
              </p>
              <div className="flex flex-col gap-0.5 mb-5">
                {mobileBrowseLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(link.to) ? 'page' : undefined}
                    className={`px-3 py-3.5 text-[17px] font-semibold rounded-xl min-h-[52px] flex items-center
                                transition-colors ${focusRing}
                                ${isActive(link.to)
                                  ? 'bg-white text-[#2A5FCC] shadow-[0_2px_6px_rgba(0,0,0,0.04)] dark:bg-white/10 dark:text-white'
                                  : 'text-[#1A1A1A] dark:text-white/85 hover:bg-white dark:hover:bg-white/10'
                                }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Accessibility row */}
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-white/60 px-2 mb-2">
                Display &amp; Accessibility
              </p>
              <div
                className="flex items-center flex-wrap gap-1.5 px-2 mb-5"
                role="group"
                aria-label="Display and accessibility settings"
              >
                <HighContrastToggle />
                <FontSizeToggle />
                <DarkModeToggle />
                <LanguageToggle />
              </div>

              {/* Auth actions */}
              <div className="pt-4 border-t border-[#E4DFD4] dark:border-white/10">
                {user ? (
                  <button
                    onClick={async () => {
                      await logout();
                      navigate('/');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-3 py-3.5 text-[17px] font-semibold text-[#C43333]
                                hover:bg-white dark:hover:bg-white/10 rounded-xl text-left
                                min-h-[52px] flex items-center transition-colors ${focusRing}`}
                  >
                    <LogOut className="h-5 w-5 mr-2" aria-hidden="true" />
                    Sign Out
                  </button>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigate('/login');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full min-h-[52px] text-base font-bold rounded-xl
                                  border-[#E4DFD4] text-[#1A1A1A] dark:text-white
                                  hover:bg-white dark:hover:bg-white/10 ${focusRing}`}
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/signup');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full min-h-[52px] text-base font-bold rounded-xl
                                  bg-[#2A5FCC] text-white hover:bg-[#234FB0] ${focusRing}`}
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
