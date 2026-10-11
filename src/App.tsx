import { lazy, Suspense, type ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { SeniorModeProvider } from "@/contexts/SeniorModeContext";
import { HighContrastProvider } from "@/contexts/HighContrastContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TierProvider } from "@/contexts/TierContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ToolRoute from "@/components/ToolRoute";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";

const isServer = typeof window === "undefined";

// ── Lazy-loaded route components ──────────────────────────────────────────────
const Landing                = lazy(() => import("./pages/Landing"));
const Login                  = lazy(() => import("./pages/Login"));
const Signup                 = lazy(() => import("./pages/Signup"));
const Guides                 = lazy(() => import("./pages/Guides"));
const GuideDetail            = lazy(() => import("./pages/GuideDetail"));
const Tools                  = lazy(() => import("./pages/Tools"));
const ScamDefenseCenter      = lazy(() => import("./pages/ScamDefenseCenter"));
const GetHelp                = lazy(() => import("./pages/GetHelp"));
const SearchResults          = lazy(() => import("./pages/SearchResults"));
const Glossary               = lazy(() => import("./pages/Glossary"));
const EmergencyHelp          = lazy(() => import("./pages/EmergencyHelp"));
const About                  = lazy(() => import("./pages/About"));
const FAQ                    = lazy(() => import("./pages/FAQ"));
const Pricing                = lazy(() => import("./pages/Pricing"));
const Terms                  = lazy(() => import("./pages/Terms"));
const Privacy                = lazy(() => import("./pages/Privacy"));
const RefundPolicy           = lazy(() => import("./pages/RefundPolicy"));
const NotFound               = lazy(() => import("./pages/NotFound"));
// Accounts, bookings and payments
const MyRequests             = lazy(() => import("./pages/MyRequests"));
const Profile                = lazy(() => import("./pages/Profile"));
const PaymentSuccess         = lazy(() => import("./pages/payment/Success"));
const PaymentCancel          = lazy(() => import("./pages/payment/Cancel"));
const CustomerDashboard      = lazy(() => import("./pages/customer/Dashboard"));
const CustomerJobRoom        = lazy(() => import("./pages/customer/JobRoom"));
const TechDashboard          = lazy(() => import("./pages/tech/Dashboard"));
const TechJobRoom            = lazy(() => import("./pages/tech/JobRoom"));
const AdminConsole           = lazy(() => import("./pages/admin/Console"));
const ContentPipeline        = lazy(() => import("./pages/admin/ContentPipeline"));
const AdminNewsletter        = lazy(() => import("./pages/admin/Newsletter"));

// ── Query client ──────────────────────────────────────────────────────────────
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,   // data stays fresh for 5 min — avoids re-fetching on every mount
      gcTime: 10 * 60 * 1000,     // keep unused cache entries for 10 min
    },
  },
});

/** Skeleton loading screen shown during lazy-load — matches page layout for less perceived delay.
 *  After 10 seconds, shows an error message with a retry button instead of looping forever. */
function PageLoader() {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 10_000);
    return () => clearTimeout(timer);
  }, []);

  if (timedOut) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" role="alert" aria-live="assertive">
        <div className="text-center max-w-md px-6 space-y-4">
          <p className="text-xl font-semibold text-foreground">This page took too long to load</p>
          <p className="text-muted-foreground">
            This could be a slow connection or a temporary issue. Try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background flex flex-col items-center justify-center px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <img
        src="/teksure-logo.svg"
        alt="TekSure"
        width={183}
        height={40}
        className="h-10 w-auto mb-6 animate-pulse block dark:hidden"
      />
      <img
        src="/teksure-logo-white.svg"
        alt=""
        aria-hidden="true"
        width={183}
        height={40}
        className="h-10 w-auto mb-6 animate-pulse hidden dark:block"
      />
      <span className="sr-only">Loading…</span>
      <div
        aria-hidden="true"
        className="h-1 w-40 overflow-hidden rounded-full bg-muted"
      >
        <div className="h-full w-1/2 bg-primary animate-[teksure-loader_1.2s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes teksure-loader {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(80%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

/** Offline banner — shown at top of screen when network is lost */
function OfflineBanner() {
  const [offline, setOffline] = useState(isServer ? false : !navigator.onLine);
  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline  = () => setOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online',  goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online',  goOnline);
    };
  }, []);
  if (!offline) return null;
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 inset-x-0 z-[9999] flex items-center justify-center gap-2 bg-amber-900 text-white text-sm font-medium py-2 px-4 shadow-lg"
    >
      <WifiOff className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>You're offline — previously visited guides are still available.</span>
    </div>
  );
}

/**
 * All surfaces default to light for first-time visitors — a welcoming light
 * palette is easier for seniors and beginners than a dark starfield. A user's
 * explicit DarkModeToggle choice (stored in localStorage `teksure-theme`)
 * always wins over the default.
 */
const RouteThemeDefault = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (isServer) return;
    const stored = localStorage.getItem("teksure-theme");
    const root = document.documentElement;
    if (stored === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const navigate = useNavigate();

  // Handle Supabase auth redirects that land with a hash fragment.
  // On success (#access_token=...) the Supabase client handles it automatically.
  // On failure (#error=...) we surface a plain-language message on the login page.
  useEffect(() => {
    if (isServer) return;
    const hash = window.location.hash;
    if (!hash.includes('error=')) return;

    const params = new URLSearchParams(hash.replace(/^#/, ''));
    const code = params.get('error_code') ?? '';
    const rawDesc = (params.get('error_description') ?? 'Something went wrong.').replace(/\+/g, ' ');

    let message: string;
    if (code === 'otp_expired') {
      message = 'That link has expired — links are only valid for 24 hours. Request a new one below.';
    } else if (code === 'access_denied') {
      message = rawDesc || 'Access was denied. Please try signing in again.';
    } else {
      message = rawDesc;
    }

    // Strip the error hash from the URL before navigating
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    navigate('/login', { state: { message }, replace: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <OfflineBanner />
      {!isServer && <GoogleAnalytics measurementId={import.meta.env.VITE_GA4_ID || ''} />}
      <RouteThemeDefault />
      <MobileBottomNav />
      <BackToTop />
      <Toaster />
      <Sonner />
      {!isServer && <CookieConsent />}
      <Suspense fallback={<PageLoader />}>
        <ErrorBoundary variant="section">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/tools" element={<Tools />} />
          {/* Every /tools/<slug> resolves through src/data/tools-registry.ts. */}
          <Route path="/tools/:slug" element={<ToolRoute />} />
          <Route path="/scam-defense" element={<ScamDefenseCenter />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/emergency-help" element={<EmergencyHelp />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Accounts, bookings and payments */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/profile" element={<ProtectedRoute allowedRoles={['customer', 'tech', 'admin']}><Profile /></ProtectedRoute>} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/customer" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
          <Route path="/customer/jobs/:id" element={<ProtectedRoute allowedRoles={['customer']}><CustomerJobRoom /></ProtectedRoute>} />
          <Route path="/tech" element={<ProtectedRoute allowedRoles={['tech']}><TechDashboard /></ProtectedRoute>} />
          <Route path="/tech/jobs/:id" element={<ProtectedRoute allowedRoles={['tech']}><TechJobRoom /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminConsole /></ProtectedRoute>} />
          <Route path="/admin/content" element={<ProtectedRoute allowedRoles={['admin']}><ContentPipeline /></ProtectedRoute>} />
          <Route path="/admin/newsletter" element={<ProtectedRoute allowedRoles={['admin']}><AdminNewsletter /></ProtectedRoute>} />

          {/* Retired URLs. scripts/generate-redirects.mjs turns each into a 308 in
              vercel.json. Every target is a live page — when a page is removed,
              point its redirects at the new target instead of chaining. */}
          <Route path="/welcome" element={<Navigate to="/" replace />} />
          <Route path="/roadmap" element={<Navigate to="/about" replace />} />
          <Route path="/find-a-guide" element={<Navigate to="/guides" replace />} />
          <Route path="/device-hub" element={<Navigate to="/guides" replace />} />
          <Route path="/tools/all" element={<Navigate to="/tools" replace />} />
          <Route path="/brain" element={<Navigate to="/get-help" replace />} />
          <Route path="/tekbrain" element={<Navigate to="/get-help" replace />} />
          <Route path="/tekbrain/chat" element={<Navigate to="/get-help" replace />} />
          <Route path="/tips" element={<Navigate to="/guides" replace />} />
          <Route path="/setup" element={<Navigate to="/guides" replace />} />
          <Route path="/blog" element={<Navigate to="/guides" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/guides" replace />} />
          <Route path="/webinars" element={<Navigate to="/about" replace />} />
          <Route path="/community/ambassadors" element={<Navigate to="/about" replace />} />
          <Route path="/notifications" element={<Navigate to="/guides" replace />} />
          <Route path="/technicians" element={<Navigate to="/get-help" replace />} />
          <Route path="/technicians/:id" element={<Navigate to="/get-help" replace />} />
          <Route path="/book" element={<Navigate to="/get-help" replace />} />
          <Route path="/news" element={<Navigate to="/about" replace />} />
          <Route path="/forum" element={<Navigate to="/get-help" replace />} />
          <Route path="/forum/new" element={<Navigate to="/get-help" replace />} />
          <Route path="/forum/:id" element={<Navigate to="/get-help" replace />} />
          <Route path="/favorites" element={<Navigate to="/guides" replace />} />
          <Route path="/journal" element={<Navigate to="/guides" replace />} />
          <Route path="/my-devices" element={<Navigate to="/guides" replace />} />
          <Route path="/achievements" element={<Navigate to="/guides" replace />} />
          <Route path="/quick-reference-cards" element={<Navigate to="/guides" replace />} />
          <Route path="/my-path" element={<Navigate to="/guides" replace />} />
          <Route path="/gift-guide" element={<Navigate to="/guides" replace />} />
          <Route path="/tech-anxiety" element={<Navigate to="/get-help" replace />} />
          <Route path="/local-help" element={<Navigate to="/get-help" replace />} />
          <Route path="/certificate" element={<Navigate to="/guides" replace />} />
          <Route path="/ai-tutor" element={<Navigate to="/get-help" replace />} />
          <Route path="/progress-report" element={<Navigate to="/guides" replace />} />
          <Route path="/family-sharing" element={<Navigate to="/guides" replace />} />
          <Route path="/caregiver" element={<Navigate to="/guides/helping-parents-grandparents-from-far-away-caregivers-tech-kit" replace />} />
          <Route path="/onboarding" element={<Navigate to="/guides" replace />} />
          <Route path="/explore" element={<Navigate to="/guides" replace />} />
          <Route path="/articles" element={<Navigate to="/guides" replace />} />
          <Route path="/articles/:slug" element={<Navigate to="/guides" replace />} />
          <Route path="/sources" element={<Navigate to="/guides" replace />} />
          <Route path="/scam-alerts" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/practice/inbox" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/learn" element={<Navigate to="/guides" replace />} />
          <Route path="/free-software" element={<Navigate to="/guides" replace />} />
          <Route path="/senior-tech-path" element={<Navigate to="/guides" replace />} />
          <Route path="/ask" element={<Navigate to="/get-help" replace />} />
          <Route path="/community/ask" element={<Navigate to="/get-help" replace />} />
          <Route path="/success-stories" element={<Navigate to="/about" replace />} />
          <Route path="/stories" element={<Navigate to="/about" replace />} />
          <Route path="/videos" element={<Navigate to="/guides" replace />} />
          <Route path="/keyboard-navigation" element={<Navigate to="/guides/hidden-accessibility-features-your-phone-already-has" replace />} />
          <Route path="/changelog" element={<Navigate to="/about" replace />} />
          <Route path="/weekly-tips" element={<Navigate to="/guides" replace />} />
          <Route path="/this-week" element={<Navigate to="/guides" replace />} />
          <Route path="/quizzes/tech-confidence" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/practice/phone" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/practice/vocab-flashcards" element={<Navigate to="/glossary" replace />} />
          <Route path="/volunteer" element={<Navigate to="/about" replace />} />
          <Route path="/daily-tip" element={<Navigate to="/guides" replace />} />
          <Route path="/how-it-works" element={<Navigate to="/get-help" replace />} />
          <Route path="/guias" element={<Navigate to="/guides" replace />} />
          <Route path="/quick-fixes" element={<Navigate to="/guides" replace />} />
          <Route path="/safety/scam-alerts" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/safety/parental-controls" element={<Navigate to="/guides/child-safety-online" replace />} />
          <Route path="/reference-cards" element={<Navigate to="/guides" replace />} />
          <Route path="/printables/phone-button-poster" element={<Navigate to="/guides" replace />} />
          <Route path="/checklists" element={<Navigate to="/guides" replace />} />
          <Route path="/checklists/turning-65" element={<Navigate to="/guides?category=life" replace />} />
          <Route path="/printables/digital-estate-binder" element={<Navigate to="/guides?category=life" replace />} />
          <Route path="/calculators/medicare-cost" element={<Navigate to="/guides?category=life" replace />} />
          <Route path="/calculators/phone-bill" element={<Navigate to="/guides/understanding-your-phone-bill" replace />} />
          <Route path="/calculators/internet-plan" element={<Navigate to="/tools/low-cost-internet" replace />} />
          <Route path="/calculators/subscriptions" element={<Navigate to="/tools/subscription-auditor" replace />} />
          <Route path="/free-resources" element={<Navigate to="/guides" replace />} />
          <Route path="/practice/phishing-inbox" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/practice/password-practice" element={<Navigate to="/tools/password-strength" replace />} />
          <Route path="/practice/suspicious-call" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/quizzes/scam-iq" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/accessibility" element={<Navigate to="/guides/hidden-accessibility-features-your-phone-already-has" replace />} />
          <Route path="/low-vision-setup" element={<Navigate to="/guides/senior-low-vision-iphone-ipad-accessibility" replace />} />
          <Route path="/caregiver-hub" element={<Navigate to="/guides/helping-parents-grandparents-from-far-away-caregivers-tech-kit" replace />} />
          <Route path="/toolkits/caregiver" element={<Navigate to="/guides/helping-parents-grandparents-from-far-away-caregivers-tech-kit" replace />} />
          <Route path="/printables/caregiver-planner" element={<Navigate to="/guides/helping-parents-grandparents-from-far-away-caregivers-tech-kit" replace />} />
          <Route path="/tech-help-near-me" element={<Navigate to="/get-help" replace />} />
          <Route path="/chromebook" element={<Navigate to="/guides?category=computers" replace />} />
          <Route path="/courses/internet-basics" element={<Navigate to="/guides?category=internet" replace />} />
          <Route path="/privacy-hub" element={<Navigate to="/guides?category=safety" replace />} />
          <Route path="/data-broker-removal" element={<Navigate to="/guides?category=safety" replace />} />
          <Route path="/veterans-tech-hub" element={<Navigate to="/guides?category=life" replace />} />
          <Route path="/emergency-tech" element={<Navigate to="/emergency-help" replace />} />
          <Route path="/kids-online-safety" element={<Navigate to="/guides/child-safety-online" replace />} />
          <Route path="/digital-detox" element={<Navigate to="/guides" replace />} />
          <Route path="/moving-tech" element={<Navigate to="/guides" replace />} />
          <Route path="/retirement-tech" element={<Navigate to="/guides?category=life" replace />} />
          <Route path="/new-grandparent-tech" element={<Navigate to="/guides" replace />} />
          <Route path="/tech-problem-of-week" element={<Navigate to="/scam-defense" replace />} />
          <Route path="/whats-new" element={<Navigate to="/about" replace />} />
          <Route path="/small-business-tech-hub" element={<Navigate to="/guides" replace />} />
          <Route path="/ai-literacy-hub" element={<Navigate to="/guides?category=ai" replace />} />
          <Route path="/passkey-hub" element={<Navigate to="/guides/passkey-login-for-banks-getting-started" replace />} />
          <Route path="/deepfake-defense-hub" element={<Navigate to="/guides/how-to-recognize-deepfake-videos-and-photos-2026" replace />} />
          <Route path="/esl-tech-hub" element={<Navigate to="/guides" replace />} />
          <Route path="/rural-tech-hub" element={<Navigate to="/guides?category=internet" replace />} />
          <Route path="/divorce-tech-hub" element={<Navigate to="/guides" replace />} />
          <Route path="/widowhood-tech-hub" element={<Navigate to="/guides/after-a-loss-gentle-guide-to-spouse-digital-life" replace />} />
          <Route path="/job-search-tech-hub" element={<Navigate to="/guides" replace />} />
          <Route path="/dementia-care-tech" element={<Navigate to="/guides?category=health" replace />} />
          <Route path="/bereavement-tech" element={<Navigate to="/guides/after-a-loss-gentle-guide-to-spouse-digital-life" replace />} />
          <Route path="/empty-nest-tech" element={<Navigate to="/guides" replace />} />
          <Route path="/first-apartment-tech" element={<Navigate to="/guides" replace />} />
          <Route path="/site-index" element={<Navigate to="/guides" replace />} />
          <Route path="/grandparent-device-setup" element={<Navigate to="/guides" replace />} />
          <Route path="/account-after-loss" element={<Navigate to="/guides/after-a-loss-gentle-guide-to-spouse-digital-life" replace />} />
          <Route path="/start" element={<Navigate to="/guides" replace />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

/**
 * AppShell wraps all providers and routes. The router (BrowserRouter or
 * StaticRouter) is supplied externally by the entry points so the same
 * component tree works for both client-side and server-side rendering.
 */
export const AppShell = ({ children, helmetContext }: { children?: ReactNode; helmetContext?: Record<string, unknown> }) => (
  <ErrorBoundary>
    <HelmetProvider context={helmetContext ?? {}}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <SeniorModeProvider>
              <HighContrastProvider>
                <TierProvider>
                  <AuthProvider>
                    {children}
                    <AppContent />
                    <Analytics />
                  </AuthProvider>
                </TierProvider>
              </HighContrastProvider>
            </SeniorModeProvider>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

/** Default export for backward compatibility (pure SPA / dev fallback) */
const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
