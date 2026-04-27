import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import {
  Menu,
  LogOut,
  User,
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { to: '/about',              label: 'About TekSure' },
    { to: '/faq',                label: 'FAQ' },
    { to: '/site-index',         label: 'Site Index' },
  ];

  const learnLinks = [
    { to: '/brain', label: 'TekSure Brain', icon: BookOpen, desc: 'Ask any tech question' },
    { to: '/courses', label: 'Courses', icon: BookOpen, desc: 'Lessons + quizzes + certificates' },
    { to: '/learn', label: 'Learning Paths', icon: BookOpen, desc: 'Structured free courses' },
    { to: '/senior-tech-path', label: 'Tech for Seniors', icon: BookOpen, desc: 'Path for adults 60+' },
    { to: '/accessibility', label: 'Accessibility', icon: BookOpen, desc: 'Make devices easier' },
    { to: '/glossary', label: 'Glossary', icon: BookOpen, desc: 'Plain-English terms' },
    { to: '/videos', label: 'Video Tutorials', icon: Video, desc: 'Watch & learn' },
    { to: '/forum', label: 'Community', icon: Users, desc: 'Ask real people' },
  ];

  const supportLinks = [
    { to: '/free-resources', label: 'Free Tech Programs', icon: ArrowRight, desc: 'Free internet, devices & training' },
    { to: '/free-software', label: 'Free Software', icon: ArrowRight, desc: '40+ free alternatives' },
    { to: '/caregiver-hub', label: 'Caregiver Hub', icon: Users, desc: 'Helping a loved one' },
    { to: '/tech-help-near-me', label: 'Help Near Me', icon: ArrowRight, desc: 'Find local tech help' },
    { to: '/veterans-tech-hub', label: 'For Veterans', icon: ArrowRight, desc: 'Free tech for those who served' },
    { to: '/emergency-tech', label: 'Emergency Prep', icon: ArrowRight, desc: 'Storms, outages, disasters' },
    { to: '/gift-session', label: 'Gift Tech Help', icon: ArrowRight, desc: 'Give the gift of help' },
    { to: '/local-help', label: 'Find Local Help', icon: ArrowRight, desc: 'Near you' },
    { to: '/about', label: 'About TekSure', icon: Users, desc: 'Our mission' },
    { to: '/sources', label: 'Sources & Credits', icon: BookOpen, desc: 'Our references' },
    { to: '/roadmap', label: 'Roadmap', icon: Map, desc: "What's coming" },
    { to: '/explore', label: 'Explore All', icon: Map, desc: 'Everything we offer' },
  ];

  const authLinks = [
    { to: dashboardPath, label: 'Dashboard' },
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/my-requests', label: 'Requests' },
    { to: '/get-help', label: 'Get Help' },
  ];

  const allMobileLinks = [
    ...publicLinks,
    ...safetyLinks.map(l => ({ to: l.to, label: l.label })),
    ...learnLinks.map(l => ({ to: l.to, label: l.label })),
    ...supportLinks.map(l => ({ to: l.to, label: l.label })),
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-background/60 backdrop-blur-xl'}`}>
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={user ? dashboardPath : '/'} className="flex items-center gap-2.5 shrink-0" aria-label="TekSure home">
            <img src="/teksure-logo.svg" alt="TekSure" className="h-8 w-auto" fetchPriority="high" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {(user ? authLinks : publicLinks).map((link) => (
              <PreloadLink
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {link.label}
              </PreloadLink>
            ))}

            {!user && (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    aria-label="Resources and more navigation links"
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-all duration-200 hover:bg-muted/60"
                  >
                    Resources
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-[540px] p-5">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                    {/* Safety */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">Safety</p>
                      {safetyLinks.map((link) => (
                        <PreloadLink
                          key={link.to}
                          to={link.to}
                          className="flex flex-col px-2 py-2 rounded-lg hover:bg-muted/60 transition-colors group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                          <span className="text-xs text-muted-foreground">{link.desc}</span>
                        </PreloadLink>
                      ))}
                    </div>
                    {/* Learn */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">Learn</p>
                      {learnLinks.map((link) => (
                        <PreloadLink
                          key={link.to}
                          to={link.to}
                          className="flex flex-col px-2 py-2 rounded-lg hover:bg-muted/60 transition-colors group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                          <span className="text-xs text-muted-foreground">{link.desc}</span>
                        </PreloadLink>
                      ))}
                    </div>
                    {/* Support */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">Support</p>
                      {supportLinks.map((link) => (
                        <PreloadLink
                          key={link.to}
                          to={link.to}
                          className="flex flex-col px-2 py-2 rounded-lg hover:bg-muted/60 transition-colors group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                          <span className="text-xs text-muted-foreground">{link.desc}</span>
                        </PreloadLink>
                      ))}
                    </div>
                  </div>
                  {/* Popular tools strip */}
                  <div className="mt-4 pt-4 border-t border-border/60">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">Quick Tools</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { to: '/tools/scam-simulator', label: 'Scam Test' },
                        { to: '/tools/password-strength', label: 'Password Check' },
                        { to: '/tools/wifi-troubleshooter', label: 'WiFi Fix' },
                        { to: '/tools/cyber-scorecard', label: 'Security Grade' },
                        { to: '/tools/privacy-audit', label: 'Privacy Audit' },
                        { to: '/tools/streaming-calculator', label: 'Streaming Cost' },
                        { to: '/ai-tutor', label: 'AI Tutor' },
                        { to: '/tools/guide-packs', label: 'Print Guides' },
                      ].map(t => (
                        <PreloadLink
                          key={t.to}
                          to={t.to}
                          className="px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/40"
                        >
                          {t.label}
                        </PreloadLink>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-1.5">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" aria-label="Display settings">
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-4">
                <p className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-3" id="display-settings-label">Display &amp; Accessibility</p>
                <div className="flex items-center gap-1" role="group" aria-labelledby="display-settings-label">
                  <SeniorModeToggle />
                  <HighContrastToggle />
                  <FontSizeToggle />
                  <DarkModeToggle />
                  <LanguageToggle />
                </div>
              </PopoverContent>
            </Popover>

            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              aria-label="Open search"
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full border border-border/60 text-xs text-muted-foreground hover:bg-muted/50 hover:border-border transition-all duration-200"
              style={{ minHeight: '44px' }}
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-muted-foreground/60">Search</span>
              <kbd className="font-sans text-[10px] text-muted-foreground/40 ml-1 border border-border/40 rounded px-1 py-0.5" aria-hidden="true">K</kbd>
            </button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-9 w-9"
                    aria-label={`Account menu for ${user.fullName}`}
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-[#2A5FCC] text-white text-[11px] font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
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
              <div className="flex items-center gap-2 ml-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium h-9 rounded-full px-4"
                  onClick={() => navigate('/login', { state: { from: location.pathname } })}
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="text-sm font-medium h-9 rounded-full px-5 shadow-sm shadow-primary/20"
                  onClick={() => navigate('/login', { state: { from: location.pathname } })}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile: search icon + hamburger */}
          <div className="flex items-center gap-0.5 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full"
              aria-label="Search"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
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
          <div className="flex items-center justify-between h-16 px-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2" aria-label="TekSure home">
              <img src="/teksure-logo.svg" alt="TekSure" className="h-8 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

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
                <div className="flex flex-col gap-1">
                  {authLinks.map((link) => (
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
                <div className="border-t my-4" />
                <button
                  onClick={async () => { await logout(); navigate('/'); setMobileMenuOpen(false); }}
                  className="px-4 py-4 text-lg font-medium text-destructive hover:bg-destructive/10 rounded-xl transition-colors text-left min-h-[52px] flex items-center w-full"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  {allMobileLinks.map((link) => (
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
                <div className="border-t my-6" />
                <div className="flex flex-col gap-3 px-2">
                  <Button variant="outline" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl">Sign In</Button>
                  <Button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl shadow-sm shadow-primary/20">Get Started</Button>
                </div>
              </>
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

              {/* Display row — light/dark + font size only */}
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] dark:text-white/60 px-2 mb-2">
                Display
              </p>
              <div
                className="flex items-center flex-wrap gap-2 px-2 mb-5"
                role="group"
                aria-label="Display settings"
              >
                <DarkModeToggle />
                <FontSizeToggle />
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
