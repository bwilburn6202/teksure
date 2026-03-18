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
import ParentalControls from "./pages/ParentalControls";
import Favorites from "./pages/Favorites";
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
        <Route path="/safety/parental-controls" element={<ParentalControls />} />
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
