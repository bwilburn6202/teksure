import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TekBot } from "@/components/TekBot";
import { SearchModal, useSearchModal } from "@/components/SearchModal";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import CustomerDashboard from "./pages/customer/Dashboard";
import CustomerJobRoom from "./pages/customer/JobRoom";
import TechDashboard from "./pages/tech/Dashboard";
import TechJobRoom from "./pages/tech/JobRoom";
import AdminConsole from "./pages/admin/Console";
import OpportunityDashboard from "./pages/OpportunityDashboard";
import Glossary from "./pages/Glossary";
import QuickFixes from "./pages/QuickFixes";
import DeviceHub from "./pages/DeviceHub";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import SearchResults from "./pages/SearchResults";
import Tools from "./pages/Tools";
import PasswordStrength from "./pages/tools/PasswordStrength";
import WifiSpeed from "./pages/tools/WifiSpeed";
import HealthCheck from "./pages/tools/HealthCheck";
import DeviceCompare from "./pages/tools/DeviceCompare";
import KeyboardShortcuts from "./pages/tools/KeyboardShortcuts";
import EmailTemplates from "./pages/EmailTemplates";
import ScamAlerts from "./pages/ScamAlerts";
import ErrorDecoder from "./pages/ErrorDecoder";
import Tips from "./pages/Tips";
import JargonTranslator from "./pages/tools/JargonTranslator";
import QuickReference from "./pages/tools/QuickReference";
import Troubleshooter from "./pages/tools/Troubleshooter";
import DeviceChooser from "./pages/tools/DeviceChooser";
import BackupWizard from "./pages/tools/BackupWizard";
import SafetyCourse from "./pages/tools/SafetyCourse";
import Setup from "./pages/Setup";
import AppRecommender from "./pages/tools/AppRecommender";
import WarrantyChecker from "./pages/tools/WarrantyChecker";
import EmailDeclutter from "./pages/tools/EmailDeclutter";
import AccessibilityCheck from "./pages/tools/AccessibilityCheck";
import CyberScorecard from "./pages/tools/CyberScorecard";
import Blog from "./pages/Blog";
import Webinars from "./pages/Webinars";
import Ambassadors from "./pages/community/Ambassadors";
import PhishingScanner from "./pages/tools/PhishingScanner";
import WifiTroubleshooter from "./pages/tools/WifiTroubleshooter";
import TechnicianProfile from "./pages/TechnicianProfile";
import Book from "./pages/Book";
import ForumIndex from "./pages/forum/Index";
import ThreadDetail from "./pages/forum/ThreadDetail";
import NewThread from "./pages/forum/NewThread";
import ParentalControls from "./pages/ParentalControls";
import Favorites from "./pages/Favorites";
import GetHelp from "./pages/GetHelp";
import MyRequests from "./pages/MyRequests";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

const AppContent = () => {
  const { open, onClose } = useSearchModal();

  return (
    <BrowserRouter>
      <SearchModal open={open} onClose={onClose} />
      <TekBot />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/customer" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
        <Route path="/customer/jobs/:id" element={<ProtectedRoute allowedRoles={['customer']}><CustomerJobRoom /></ProtectedRoute>} />
        <Route path="/tech" element={<ProtectedRoute allowedRoles={['tech']}><TechDashboard /></ProtectedRoute>} />
        <Route path="/tech/jobs/:id" element={<ProtectedRoute allowedRoles={['tech']}><TechJobRoom /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminConsole /></ProtectedRoute>} />
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
        <Route path="/technicians" element={<TechnicianProfile />} />
        <Route path="/technicians/:id" element={<TechnicianProfile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<ForumIndex />} />
        <Route path="/forum/new" element={<NewThread />} />
        <Route path="/forum/:id" element={<ThreadDetail />} />
        <Route path="/safety/parental-controls" element={<ParentalControls />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/get-help" element={<GetHelp />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/profile" element={<ProtectedRoute allowedRoles={['customer', 'tech', 'admin']}><Profile /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
