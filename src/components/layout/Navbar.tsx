import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import { Menu, Search, LogOut, User, ChevronDown, MessageSquare, Map, SlidersHorizontal, X, BookOpen, Wrench, Shield, ShieldAlert, Video, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { SeniorModeToggle } from '@/components/SeniorModeToggle';
import { HighContrastToggle } from '@/components/HighContrastToggle';
import { LanguageToggle } from '@/components/LanguageToggle';

/**
 * Glass-pill navbar matching the Landing v2 aesthetic.
 *
 * A floating frosted pill centered at the top contains: logo, nav links,
 * Resources popover, ⌘K search chip, and primary CTA (or account menu).
 * A second circular gear button sits to the right of the pill and houses
 * the Display & Accessibility popover — DarkModeToggle, senior mode,
 * high contrast, font size, language.
 *
 * Below 760px the pill collapses to logo + hamburger; a full-screen
 * overlay menu carries the full nav.
 */
export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const dashboardPath = user
    ? user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin'
    : '/';

  const initials = user?.fullName
    ? user.fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '';

  const publicLinks = [
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
    { to: '/safety/scam-alerts', label: 'Safety' },
    { to: '/get-help', label: 'Get Help' },
  ];

  const safetyLinks = [
    { to: '/emergency-help', label: 'Emergency Help', icon: ShieldAlert, desc: 'Urgent help now' },
    { to: '/quick-fixes', label: 'Quick Fixes', icon: Wrench, desc: 'Common fixes fast' },
    { to: '/scam-defense', label: 'Scam Defense Center', icon: ShieldAlert, desc: 'Protect yourself from scams' },
    { to: '/privacy-hub', label: 'Privacy Hub', icon: Shield, desc: 'Take control of your data' },
    { to: '/data-broker-removal', label: 'Remove Personal Info', icon: Shield, desc: 'From data broker sites' },
    { to: '/kids-online-safety', label: 'Kids Online Safety', icon: Shield, desc: 'For parents & grandparents' },
    { to: '/tools/scam-simulator', label: 'Scam Simulator', icon: Shield, desc: 'Practice spotting scams' },
    { to: '/tools/privacy-audit', label: 'Privacy Audit', icon: Shield, desc: 'Check your settings' },
    { to: '/safety/scam-alerts', label: 'Scam Alerts', icon: ShieldAlert, desc: 'Latest scam warnings' },
  ];

  const learnLinks = [
    { to: '/brain', label: 'TekSure Brain', icon: BookOpen, desc: 'Ask any tech question' },
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

  // Shared class fragments for the pill visual language.
  // Solid dark-navy pill with subtle white border — consistent across light
  // and dark mode so the signature navy look never flips.
  const pillBase =
    'pointer-events-auto flex items-center gap-0 h-[52px] rounded-full border ' +
    'bg-[#0A1830] border-white/[0.15] shadow-[0_4px_24px_rgba(0,0,0,.3)] ' +
    'backdrop-blur-xl';
  const navLinkCls =
    'inline-flex items-center h-[38px] px-[14px] rounded-full text-sm font-medium ' +
    'text-white/80 hover:text-white hover:bg-white/[0.12] ' +
    'transition-colors';
  const navLinkActiveCls =
    'text-white bg-white/[0.12]';

  return (
    <>
      <header className="sticky top-0 z-50 w-full pointer-events-none">
        <div className="flex items-center justify-center gap-2 px-4 pt-6 pb-3 pointer-events-none">
          {/* ── Primary pill ── */}
          <nav aria-label="Main navigation" className={`hidden md:flex ${pillBase} px-2 pl-3`}>
            {/* Logo — pill is always navy, so always show the white-wordmark logo */}
            <Link to={user ? dashboardPath : '/'} className="flex items-center shrink-0 pr-4" aria-label="TekSure home">
              <img src="/teksure-logo-white.svg" alt="TekSure" className="h-[26px] w-auto" fetchPriority="high" />
            </Link>

            {/* Link cluster */}
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
              {!user && (
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      aria-label="Resources and more navigation links"
                      className={`${navLinkCls} gap-1`}
                    >
                      Resources
                      <ChevronDown className="h-3 w-3 opacity-50" aria-hidden="true" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="center" className="w-[540px] p-5">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">🛡️ Safety</p>
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
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">📚 Learn</p>
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
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5 flex items-center gap-1">🤝 Support</p>
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
                    <div className="mt-4 pt-4 border-t border-border/60">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">Quick Tools</p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { to: '/tools/scam-simulator', label: '🛡️ Scam Test' },
                          { to: '/tools/password-strength', label: '🔑 Password Check' },
                          { to: '/tools/wifi-troubleshooter', label: '📶 WiFi Fix' },
                          { to: '/tools/cyber-scorecard', label: '🏆 Security Grade' },
                          { to: '/tools/privacy-audit', label: '🔒 Privacy Audit' },
                          { to: '/tools/streaming-calculator', label: '📺 Streaming Cost' },
                          { to: '/ai-tutor', label: '🤖 AI Tutor' },
                          { to: '/tools/guide-packs', label: '📦 Print Guides' },
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
            </div>

            {/* Divider */}
            <div className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

            {/* Search chip (⌘K) */}
            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
              aria-label="Open search"
              className="hidden lg:inline-flex items-center gap-1.5 h-9 px-3 mx-1 rounded-full text-[13px] font-medium
                         bg-white/[0.08] border border-white/10 text-white/55 hover:text-white hover:bg-white/[0.12]
                         transition-colors"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              Search
              <kbd className="ml-1 text-[10px] font-sans border border-white/20 rounded px-1 py-0.5 text-white/40" aria-hidden="true">⌘K</kbd>
            </button>

            {/* Right: account or sign in + CTA */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label={`Account menu for ${user.fullName}`}
                    className="ml-2 h-[38px] w-[38px] rounded-full flex items-center justify-center hover:bg-white/[0.12] transition-colors"
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

          {/* ── Mobile pill: logo + hamburger ── */}
          <nav aria-label="Main navigation" className={`md:hidden ${pillBase} px-2 pl-3`}>
            <Link to={user ? dashboardPath : '/'} className="flex items-center shrink-0 pr-3" aria-label="TekSure home">
              <img src="/teksure-logo-white.svg" alt="TekSure" className="h-[26px] w-auto" fetchPriority="high" />
            </Link>

            <button
              aria-label="Search"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
              className="h-10 w-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.12] transition-colors"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.12] transition-colors"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>

          {/* ── Gear button (Display & Accessibility, incl. DarkModeToggle) ── */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                aria-label="Display and accessibility settings"
                className="pointer-events-auto hidden md:flex h-[44px] w-[44px] rounded-full items-center justify-center
                  bg-[#0A1830] border border-white/[0.15] text-white/70 hover:text-white hover:bg-white/[0.12] shadow-[0_4px_24px_rgba(0,0,0,.3)]
                  backdrop-blur-xl transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              </button>
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
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
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
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">{initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
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
                  <Button onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl shadow-sm shadow-primary/20">Get Started</Button>
                </div>
              </>
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
