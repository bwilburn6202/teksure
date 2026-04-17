import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PreloadLink } from '@/components/PreloadLink';
import { Menu, Search, LogOut, User, ChevronDown, MessageSquare, Map, SlidersHorizontal, Phone, X, BookOpen, Wrench, Shield, ShieldAlert, HelpCircle, Video, Newspaper, Users, ArrowRight } from 'lucide-react';
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
    { to: '/tools/scam-simulator', label: 'Scam Simulator', icon: Shield, desc: 'Practice spotting scams' },
    { to: '/tools/privacy-audit', label: 'Privacy Audit', icon: Shield, desc: 'Check your settings' },
    { to: '/safety/scam-alerts', label: 'Scam Alerts', icon: ShieldAlert, desc: 'Latest scam warnings' },
  ];

  const learnLinks = [
    { to: '/brain', label: 'TekSure Brain', icon: BookOpen, desc: 'Ask any tech question' },
    { to: '/glossary', label: 'Glossary', icon: BookOpen, desc: 'Plain-English terms' },
    { to: '/weekly-tips', label: 'Weekly Tips', icon: Newspaper, desc: 'One tip every Sunday' },
    { to: '/ai-tutor', label: 'AI Tutor', icon: BookOpen, desc: 'Learn at your pace' },
    { to: '/videos', label: 'Video Tutorials', icon: Video, desc: 'Watch & learn' },
    { to: '/forum', label: 'Community', icon: Users, desc: 'Ask real people' },
    { to: '/news', label: 'Tech News', icon: Newspaper, desc: 'Top tech stories' },
  ];

  const supportLinks = [
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
                    {/* Learn */}
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
                    {/* Support */}
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
                  {/* Popular tools strip */}
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
              <kbd className="font-sans text-[10px] text-muted-foreground/40 ml-1 border border-border/40 rounded px-1 py-0.5" aria-hidden="true">⌘K</kbd>
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
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-[11px] font-semibold">{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
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
              <img src="/teksure-logo.svg" alt="TekSure" className="h-8 w-auto" />
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
                  <Button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="w-full min-h-[52px] text-base rounded-xl shadow-sm shadow-primary/20">Get Started</Button>
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
