import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import {
  Menu,
  LogOut,
  User,
  UserCog,
  Settings,
  MessageSquare,
  Map,
  X,
  ChevronDown,
  LifeBuoy,
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
import { useSeniorMode } from '@/contexts/SeniorModeContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { SeniorModeToggle } from '@/components/SeniorModeToggle';
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
 *   [Logo]  Guides  Tools                    Easy Mode · Settings · Avatar
 *
 * Mobile: hamburger opens a right-side slide-out drawer with ≥ 52px
 * tap targets, primary CTAs on top, and a clear Easy Mode toggle.
 */
export function Navbar({ noSpacer = false }: { noSpacer?: boolean } = {}) {
  const { user, logout } = useAuth();
  const { seniorMode, toggleSeniorMode } = useSeniorMode();
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

  const primaryLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
  ];

  // "More" dropdown — curated, uniform list of pages that aren't on the
  // main pill. Same set is reused in the mobile drawer so the surfaces stay
  // in sync.
  const moreLinks = [
    { to: '/safety/scam-alerts', label: 'Safety & Scam Alerts' },
    { to: '/scam-alerts',        label: 'Current Scam Alerts' },
    { to: '/privacy-hub',        label: 'Privacy Hub' },
    { to: '/forum',              label: 'Community Forum' },
    { to: '/learn',              label: 'Learning Paths' },
    { to: '/quick-fixes',        label: 'Quick Fixes' },
    { to: '/free-resources',     label: 'Free Tech Programs' },
    { to: '/glossary',           label: 'Tech Glossary A–Z' },
    { to: '/videos',             label: 'Video Tutorials' },
    { to: '/articles',           label: 'Articles & Blog' },
    { to: '/tech-help-near-me',  label: 'Help Near Me' },
    { to: '/this-week',          label: 'This Week' },
    { to: '/pricing',            label: 'Pricing' },
    { to: '/about',              label: 'About TekSure' },
    { to: '/faq',                label: 'FAQ' },
    { to: '/site-index',         label: 'Site Index' },
  ];

  const mobileBrowseLinks = moreLinks;

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
      {/* Floating glass-bubble pill — fixed, centered, auto-fits to its
          contents so the bar is exactly long enough to hold every button
          with the same gap between each. */}
      <header
        role="banner"
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50
                   w-auto max-w-[calc(100%-16px)] sm:max-w-[calc(100%-32px)]
                   pointer-events-none print:hidden"
      >
        <div
          className="pointer-events-auto inline-flex items-center gap-1.5
                     h-16 px-3 sm:px-3
                     rounded-full
                     bg-white/15 dark:bg-white/[0.06]
                     supports-[backdrop-filter]:bg-white/10
                     supports-[backdrop-filter]:dark:bg-white/[0.04]
                     backdrop-blur-2xl backdrop-saturate-150
                     border border-white/40 dark:border-white/15
                     shadow-[0_8px_32px_-12px_rgba(26,26,26,0.18),inset_0_1px_0_rgba(255,255,255,0.45)]
                     dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          {/* Logo */}
          <Link
            to={user ? dashboardPath : '/'}
            aria-label="TekSure home"
            className={`flex items-center shrink-0 rounded-full px-1 ${focusRing}`}
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
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1.5">
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

            {/* More — dropdown of every other top-level page, uniform list */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="More pages"
                  className={`${navLinkCls} gap-1`}
                >
                  More
                  <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="w-64 max-h-[70vh] overflow-y-auto p-1.5"
              >
                {moreLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.to}
                    onSelect={() => navigate(link.to)}
                    className="cursor-pointer rounded-lg px-3 py-2.5 text-[15px] font-medium"
                  >
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Request Help — translucent gradient blue pill, primary CTA */}
            <PreloadLink
              to="/get-help"
              aria-current={isActive('/get-help') ? 'page' : undefined}
              className={`inline-flex items-center gap-1.5 h-11 px-4 rounded-full
                          text-[15px] font-bold text-white
                          bg-gradient-to-r from-[#2A5FCC]/85 to-[#4B8EF8]/85
                          supports-[backdrop-filter]:from-[#2A5FCC]/70
                          supports-[backdrop-filter]:to-[#4B8EF8]/70
                          backdrop-blur-md
                          border border-white/30
                          shadow-[0_4px_14px_rgba(42,95,204,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]
                          hover:from-[#2A5FCC] hover:to-[#4B8EF8]
                          hover:shadow-[0_8px_22px_rgba(42,95,204,0.45),inset_0_1px_0_rgba(255,255,255,0.45)]
                          hover:-translate-y-px
                          transition-[transform,box-shadow,background] duration-150
                          motion-reduce:hover:transform-none
                          ${focusRing}`}
            >
              <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              Request Help
            </PreloadLink>
          </nav>

          {/* Right utilities (desktop) — flow inline, no ml-auto, so every
              gap between buttons is identical to the gap on the left side. */}
          <div className="hidden md:flex items-center gap-1.5">
            {/* Easy Mode — glass bubble icon, matches Search/Settings */}
            <button
              onClick={toggleSeniorMode}
              aria-pressed={seniorMode}
              aria-label={
                seniorMode
                  ? 'Turn off Easy Mode'
                  : 'Turn on Easy Mode (larger text and simpler layout)'
              }
              className={`inline-flex items-center justify-center h-11 w-11 rounded-full border transition-colors ${focusRing}
                          ${seniorMode
                            ? 'bg-[#E87A2B]/20 border-[#E87A2B]/60 text-[#E87A2B] dark:bg-[#E87A2B]/20 dark:border-[#E87A2B]/40 shadow-[0_2px_8px_rgba(232,122,43,0.25)]'
                            : 'bg-white/60 dark:bg-white/10 border-white/80 dark:border-white/15 text-[#1A1A1A] dark:text-white/90 hover:bg-white hover:text-[#2A5FCC] hover:border-[#2A5FCC] dark:hover:bg-white/20 dark:hover:text-white dark:hover:border-white/30'
                          }`}
            >
              <UserCog className="h-[18px] w-[18px]" aria-hidden="true" />
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
                  <SeniorModeToggle />
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
                    className={`h-11 w-11 rounded-full border border-white/80 dark:border-white/15
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
                className={`inline-flex items-center h-11 px-4 rounded-full text-[14px] font-semibold
                            text-[#1A1A1A] dark:text-white/90
                            hover:bg-white/80 hover:text-[#2A5FCC] dark:hover:bg-white/15
                            transition-colors ${focusRing}`}
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile right utilities — only the hamburger remains. */}
          <div className="ml-auto flex md:hidden items-center gap-0.5">
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
        up below it on every page without extra per-page padding. Pages with
        a full-viewport layout (e.g. the chat at /tekbrain) opt out via
        `noSpacer` and clear the floating pill with their own top padding.
      */}
      {!noSpacer && <div aria-hidden="true" className="h-[80px] sm:h-[88px] print:hidden" />}

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

              {/* Primary CTA — mirrors the desktop "Request Help" pill */}
              <Link
                to="/get-help"
                onClick={() => setMobileMenuOpen(false)}
                className={`inline-flex items-center justify-center gap-2 min-h-[56px] px-5 rounded-full text-lg font-bold mb-5
                            text-white
                            bg-gradient-to-r from-[#2A5FCC]/90 to-[#4B8EF8]/90
                            border border-white/30
                            shadow-[0_4px_14px_rgba(42,95,204,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]
                            hover:from-[#2A5FCC] hover:to-[#4B8EF8]
                            transition-colors ${focusRing}`}
              >
                <LifeBuoy className="h-5 w-5" aria-hidden="true" />
                Request Help
              </Link>

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

              {/* Easy Mode — huge, obvious */}
              <button
                onClick={toggleSeniorMode}
                aria-pressed={seniorMode}
                className={`w-full inline-flex items-center justify-center gap-2 min-h-[56px] px-5 rounded-full
                            text-lg font-bold border-2 transition-colors mb-5 ${focusRing}
                            ${seniorMode
                              ? 'bg-[#E87A2B] border-[#E87A2B] text-white hover:bg-[#C6661F]'
                              : 'bg-white dark:bg-transparent border-[#E4DFD4] dark:border-white/20 text-[#1A1A1A] dark:text-white hover:border-[#E87A2B] hover:text-[#B35A00] dark:hover:text-[#E87A2B]'
                            }`}
              >
                <UserCog className="h-5 w-5" aria-hidden="true" />
                {seniorMode ? 'Easy Mode: ON — Tap to turn off' : 'Turn on Easy Mode'}
              </button>

              {/* Accessibility row */}
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-white/60 px-2 mb-2">
                Display &amp; Accessibility
              </p>
              <div
                className="flex items-center flex-wrap gap-1.5 px-2 mb-5"
                role="group"
                aria-label="Display and accessibility settings"
              >
                <SeniorModeToggle />
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
