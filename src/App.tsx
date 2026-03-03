import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/customer" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
            <Route path="/customer/jobs/:id" element={<ProtectedRoute allowedRoles={['customer']}><CustomerJobRoom /></ProtectedRoute>} />
            <Route path="/tech" element={<ProtectedRoute allowedRoles={['tech']}><TechDashboard /></ProtectedRoute>} />
            <Route path="/tech/jobs/:id" element={<ProtectedRoute allowedRoles={['tech']}><TechJobRoom /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminConsole /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
