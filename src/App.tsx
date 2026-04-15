import { lazy, Suspense, type ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { SeniorModeProvider } from "@/contexts/SeniorModeContext";
import { HighContrastProvider } from "@/contexts/HighContrastContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TekBot } from "@/components/TekBot";
// FloatingChat disabled — TekBot is the primary assistant with full features
// import { FloatingChat } from "@/components/FloatingChat";
import { ScamPanicButton } from "@/components/ScamPanicButton";
import { SearchModal, useSearchModal } from "@/components/SearchModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";

const isServer = typeof window === "undefined";

// ── Lazy-loaded route components ──────────────────────────────────────────────
const Index                  = lazy(() => import("./pages/Index"));
const Login                  = lazy(() => import("./pages/Login"));
const Signup                 = lazy(() => import("./pages/Signup"));
const HowItWorks             = lazy(() => import("./pages/HowItWorks"));
const Guides                 = lazy(() => import("./pages/Guides"));
const GuideDetail            = lazy(() => import("./pages/GuideDetail"));
const CustomerDashboard      = lazy(() => import("./pages/customer/Dashboard"));
const CustomerJobRoom        = lazy(() => import("./pages/customer/JobRoom"));
const TechDashboard          = lazy(() => import("./pages/tech/Dashboard"));
const TechJobRoom            = lazy(() => import("./pages/tech/JobRoom"));
const AdminConsole           = lazy(() => import("./pages/admin/Console"));
const ContentPipeline        = lazy(() => import("./pages/admin/ContentPipeline"));
const KnowledgeBase          = lazy(() => import("./pages/admin/KnowledgeBase"));
const OpportunityDashboard   = lazy(() => import("./pages/OpportunityDashboard"));
const Glossary               = lazy(() => import("./pages/Glossary"));
const QuickFixes             = lazy(() => import("./pages/QuickFixes"));
const DeviceHub              = lazy(() => import("./pages/DeviceHub"));
const About                  = lazy(() => import("./pages/About"));
const Roadmap                = lazy(() => import("./pages/Roadmap"));
const SearchResults          = lazy(() => import("./pages/SearchResults"));
const Tools                  = lazy(() => import("./pages/Tools"));
const PasswordStrength       = lazy(() => import("./pages/tools/PasswordStrength"));
const WifiSpeed              = lazy(() => import("./pages/tools/WifiSpeed"));
const HealthCheck            = lazy(() => import("./pages/tools/HealthCheck"));
const DeviceCompare          = lazy(() => import("./pages/tools/DeviceCompare"));
const KeyboardShortcuts      = lazy(() => import("./pages/tools/KeyboardShortcuts"));
const EmailTemplates         = lazy(() => import("./pages/EmailTemplates"));
const ScamAlerts             = lazy(() => import("./pages/ScamAlerts"));
const ErrorDecoder           = lazy(() => import("./pages/ErrorDecoder"));
const Tips                   = lazy(() => import("./pages/Tips"));
const JargonTranslator       = lazy(() => import("./pages/tools/JargonTranslator"));
const QuickReference         = lazy(() => import("./pages/tools/QuickReference"));
const Troubleshooter         = lazy(() => import("./pages/tools/Troubleshooter"));
const DeviceChooser          = lazy(() => import("./pages/tools/DeviceChooser"));
const BackupWizard           = lazy(() => import("./pages/tools/BackupWizard"));
const SafetyCourse           = lazy(() => import("./pages/tools/SafetyCourse"));
const Setup                  = lazy(() => import("./pages/Setup"));
const AppRecommender         = lazy(() => import("./pages/tools/AppRecommender"));
const WarrantyChecker        = lazy(() => import("./pages/tools/WarrantyChecker"));
const EmailDeclutter         = lazy(() => import("./pages/tools/EmailDeclutter"));
const AccessibilityCheck     = lazy(() => import("./pages/tools/AccessibilityCheck"));
const CyberScorecard         = lazy(() => import("./pages/tools/CyberScorecard"));
const Blog                   = lazy(() => import("./pages/Blog"));
const Webinars               = lazy(() => import("./pages/Webinars"));
const Ambassadors            = lazy(() => import("./pages/community/Ambassadors"));
const PhishingScanner        = lazy(() => import("./pages/tools/PhishingScanner"));
const WifiTroubleshooter     = lazy(() => import("./pages/tools/WifiTroubleshooter"));
const TechnicianProfile      = lazy(() => import("./pages/TechnicianProfile"));
const Book                   = lazy(() => import("./pages/Book"));
const PaymentSuccess         = lazy(() => import("./pages/payment/Success"));
const PaymentCancel          = lazy(() => import("./pages/payment/Cancel"));
const ForumIndex             = lazy(() => import("./pages/forum/Index"));
const ThreadDetail           = lazy(() => import("./pages/forum/ThreadDetail"));
const NewThread              = lazy(() => import("./pages/forum/NewThread"));
const ParentalControls       = lazy(() => import("./pages/ParentalControls"));
const Favorites              = lazy(() => import("./pages/Favorites"));
const TechJournal            = lazy(() => import("./pages/TechJournal"));
const MyDevices              = lazy(() => import("./pages/MyDevices"));
const Achievements           = lazy(() => import("./pages/Achievements"));
const QuickReferenceCards    = lazy(() => import("./pages/QuickReferenceCards"));
const GetHelp                = lazy(() => import("./pages/GetHelp"));
const MyRequests             = lazy(() => import("./pages/MyRequests"));
const MyPath                 = lazy(() => import("./pages/MyPath"));
const Profile                = lazy(() => import("./pages/Profile"));
const News                   = lazy(() => import("./pages/News"));
const NotFound               = lazy(() => import("./pages/NotFound"));
const TechConfidenceScore    = lazy(() => import("./pages/tools/TechConfidenceScore"));
const ScamReport             = lazy(() => import("./pages/tools/ScamReport"));
const GuidePacks             = lazy(() => import("./pages/tools/GuidePacks"));
const TechGiftGuide          = lazy(() => import("./pages/TechGiftGuide"));
const TechAnxiety            = lazy(() => import("./pages/TechAnxiety"));
const LocalHelp              = lazy(() => import("./pages/LocalHelp"));
const Certificate            = lazy(() => import("./pages/Certificate"));
const GiftSubscription       = lazy(() => import("./pages/GiftSubscription"));
const AiTutor                = lazy(() => import("./pages/AiTutor"));
const ProgressReport         = lazy(() => import("./pages/ProgressReport"));
const FamilySharing          = lazy(() => import("./pages/FamilySharing"));
const Caregiver              = lazy(() => import("./pages/Caregiver"));
const DeviceHealthDashboard  = lazy(() => import("./pages/tools/DeviceHealthDashboard"));
const BluetoothTroubleshooter = lazy(() => import("./pages/tools/BluetoothTroubleshooter"));
const TechHealthQuiz         = lazy(() => import("./pages/tools/TechHealthQuiz"));
const StorageCleanup         = lazy(() => import("./pages/tools/StorageCleanup"));
const VpnGuide               = lazy(() => import("./pages/tools/VpnGuide"));
const AppPermissions         = lazy(() => import("./pages/tools/AppPermissions"));
const TwoFactorSetup         = lazy(() => import("./pages/tools/TwoFactorSetup"));
const Notifications          = lazy(() => import("./pages/Notifications"));
const CyberToolkit           = lazy(() => import("./pages/tools/CyberToolkit"));
const SecurityOsintTools     = lazy(() => import("./pages/tools/SecurityOsintTools"));
const PasswordManager        = lazy(() => import("./pages/tools/PasswordManager"));
const AccountRecovery        = lazy(() => import("./pages/tools/AccountRecovery"));
const OsintFramework         = lazy(() => import("./pages/tools/OsintFramework"));
const Onboarding             = lazy(() => import("./pages/Onboarding"));
const Explore                = lazy(() => import("./pages/Explore"));
const Articles               = lazy(() => import("./pages/Articles"));
const AggregatedArticlePage  = lazy(() => import("./pages/AggregatedArticlePage"));
const Sources                = lazy(() => import("./pages/Sources"));
const Videos                 = lazy(() => import("./pages/Videos"));
const DocBrowser             = lazy(() => import("./pages/tools/DocBrowser"));
const Mockups                = lazy(() => import("./pages/Mockups"));
const MockupA                = lazy(() => import("./pages/MockupA"));
const MockupB                = lazy(() => import("./pages/MockupB"));
const MockupC                = lazy(() => import("./pages/MockupC"));
const LlmKnowledgeBase       = lazy(() => import("./pages/LlmKnowledgeBase"));
const TechDreamBuilder       = lazy(() => import("./pages/TechDreamBuilder"));
const TechPlayground         = lazy(() => import("./pages/TechPlayground"));
const TechLifeSimulator     = lazy(() => import("./pages/TechLifeSimulator"));
const EmergencyHelp          = lazy(() => import("./pages/EmergencyHelp"));
const PrinterTroubleshooter  = lazy(() => import("./pages/tools/PrinterTroubleshooter"));
const KeyboardNavigation     = lazy(() => import("./pages/KeyboardNavigation"));
const Privacy                = lazy(() => import("./pages/Privacy"));
const MemoryDashboard        = lazy(() => import("./pages/MemoryDashboard"));

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

/** Skeleton loading screen shown during lazy-load — matches page layout for less perceived delay */
function PageLoader() {
  return (
    <div className="min-h-screen bg-background" role="status" aria-live="polite" aria-label="Loading page">
      <div className="h-14 border-b border-border" />
      <div className="container max-w-4xl py-8 space-y-6">
        <div className="h-9 w-3/4 bg-muted animate-pulse rounded" />
        <div className="h-5 w-1/2 bg-muted animate-pulse rounded" />
        <div className="space-y-4 pt-4">
          <div className="h-32 w-full bg-muted animate-pulse rounded-xl" />
          <div className="h-32 w-full bg-muted animate-pulse rounded-xl" />
          <div className="h-32 w-full bg-muted animate-pulse rounded-xl" />
        </div>
      </div>
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
      className="fixed top-0 inset-x-0 z-[9999] flex items-center justify-center gap-2 bg-amber-700 text-white text-sm font-medium py-2 px-4 shadow-lg"
    >
      <WifiOff className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>You're offline — previously visited guides are still available.</span>
    </div>
  );
}

const AppContent = () => {
  const { open, onClose } = useSearchModal();
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
      <SearchModal open={open} onClose={onClose} />
      <TekBot />
      {/* FloatingChat disabled — TekBot handles all chat */}
      <ScamPanicButton />
      <BackToTop />
      <Toaster />
      <Sonner />
      {!isServer && <CookieConsent />}
      <Suspense fallback={<PageLoader />}>
        <ErrorBoundary variant="section">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mockups" element={<Mockups />} />
          <Route path="/mockup-a" element={<MockupA />} />
          <Route path="/mockup-b" element={<MockupB />} />
          <Route path="/mockup-c" element={<MockupC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* Pricing page TBD */}
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/emergency-help" element={<EmergencyHelp />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/customer" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
          <Route path="/customer/jobs/:id" element={<ProtectedRoute allowedRoles={['customer']}><CustomerJobRoom /></ProtectedRoute>} />
          <Route path="/tech" element={<ProtectedRoute allowedRoles={['tech']}><TechDashboard /></ProtectedRoute>} />
          <Route path="/tech/jobs/:id" element={<ProtectedRoute allowedRoles={['tech']}><TechJobRoom /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminConsole /></ProtectedRoute>} />
          <Route path="/admin/content" element={<ProtectedRoute allowedRoles={['admin']}><ContentPipeline /></ProtectedRoute>} />
          <Route path="/admin/knowledge-base" element={<ProtectedRoute allowedRoles={['admin']}><KnowledgeBase /></ProtectedRoute>} />
          <Route path="/opportunity-dashboard" element={<OpportunityDashboard />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/quick-fixes" element={<QuickFixes />} />
          <Route path="/device-hub" element={<DeviceHub />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/password-strength" element={<PasswordStrength />} />
          <Route path="/tools/wifi-speed" element={<WifiSpeed />} />
          <Route path="/tools/health-check" element={<HealthCheck />} />
          <Route path="/tools/device-compare" element={<DeviceCompare />} />
          <Route path="/tools/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="/tools/email-templates" element={<EmailTemplates />} />
          <Route path="/safety/scam-alerts" element={<ScamAlerts />} />
          <Route path="/tools/error-decoder" element={<ErrorDecoder />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tools/jargon-translator" element={<JargonTranslator />} />
          <Route path="/tools/quick-reference" element={<QuickReference />} />
          <Route path="/tools/troubleshooter" element={<Troubleshooter />} />
          <Route path="/tools/device-chooser" element={<DeviceChooser />} />
          <Route path="/tools/backup-wizard" element={<BackupWizard />} />
          <Route path="/tools/safety-course" element={<SafetyCourse />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/tools/app-recommender" element={<AppRecommender />} />
          <Route path="/tools/warranty-checker" element={<WarrantyChecker />} />
          <Route path="/tools/email-declutter" element={<EmailDeclutter />} />
          <Route path="/tools/accessibility-check" element={<AccessibilityCheck />} />
          <Route path="/tools/cyber-scorecard" element={<CyberScorecard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/community/ambassadors" element={<Ambassadors />} />
          <Route path="/tools/phishing-scanner" element={<PhishingScanner />} />
          <Route path="/tools/wifi-troubleshooter" element={<WifiTroubleshooter />} />
          <Route path="/tools/account-recovery" element={<AccountRecovery />} />
          <Route path="/tools/printer-troubleshooter" element={<PrinterTroubleshooter />} />
          <Route path="/tools/device-health" element={<DeviceHealthDashboard />} />
          <Route path="/tools/bluetooth-troubleshooter" element={<BluetoothTroubleshooter />} />
          <Route path="/tools/tech-health-quiz" element={<TechHealthQuiz />} />
          <Route path="/tools/storage-cleanup" element={<StorageCleanup />} />
          <Route path="/tools/vpn-guide" element={<VpnGuide />} />
          <Route path="/tools/app-permissions" element={<AppPermissions />} />
          <Route path="/tools/two-factor-setup" element={<TwoFactorSetup />} />
          <Route path="/tools/password-manager" element={<PasswordManager />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/technicians" element={<TechnicianProfile />} />
          <Route path="/technicians/:id" element={<TechnicianProfile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/news" element={<News />} />
          <Route path="/forum" element={<ForumIndex />} />
          <Route path="/forum/new" element={<NewThread />} />
          <Route path="/forum/:id" element={<ThreadDetail />} />
          <Route path="/safety/parental-controls" element={<ParentalControls />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/journal" element={<TechJournal />} />
          <Route path="/my-devices" element={<MyDevices />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/quick-reference-cards" element={<QuickReferenceCards />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/my-path" element={<MyPath />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/profile" element={<ProtectedRoute allowedRoles={['customer', 'tech', 'admin']}><Profile /></ProtectedRoute>} />
          <Route path="/tools/confidence-score" element={<TechConfidenceScore />} />
          <Route path="/tools/scam-report" element={<ScamReport />} />
          <Route path="/tools/guide-packs" element={<GuidePacks />} />
          <Route path="/gift-guide" element={<TechGiftGuide />} />
          <Route path="/tech-anxiety" element={<TechAnxiety />} />
          <Route path="/local-help" element={<LocalHelp />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/gift" element={<GiftSubscription />} />
          <Route path="/ai-tutor" element={<AiTutor />} />
          <Route path="/progress-report" element={<ProgressReport />} />
          <Route path="/family-sharing" element={<FamilySharing />} />
          <Route path="/caregiver" element={<Caregiver />} />
          <Route path="/tools/cyber-toolkit" element={<CyberToolkit />} />
          <Route path="/tools/security-osint" element={<SecurityOsintTools />} />
          <Route path="/tools/osint-framework" element={<OsintFramework />} />
          <Route path="/tools/osint-tools" element={<Navigate to="/tools/security-osint?tab=osint" replace />} />
          <Route path="/tools/geoint" element={<Navigate to="/tools/security-osint?tab=geoint" replace />} />
          <Route path="/tools/osint-collections" element={<Navigate to="/tools/security-osint?tab=collections" replace />} />
          <Route path="/cybersec" element={<Navigate to="/tools/security-osint?tab=cybersec" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<AggregatedArticlePage />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/tools/doc-browser" element={<DocBrowser />} />
          <Route path="/llm-knowledge-base" element={<LlmKnowledgeBase />} />
          <Route path="/tools/llm-knowledge-base" element={<LlmKnowledgeBase />} />
          <Route path="/keyboard-navigation" element={<KeyboardNavigation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/memory" element={<MemoryDashboard />} />
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
                <AuthProvider>
                  {children}
                  <AppContent />
                </AuthProvider>
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
