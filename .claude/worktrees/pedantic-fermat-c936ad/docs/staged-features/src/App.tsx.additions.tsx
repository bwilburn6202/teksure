/**
 * ─────────────────────────────────────────────────────────────────
 * App.tsx ROUTE ADDITIONS  (updated — includes lazy loading)
 * ─────────────────────────────────────────────────────────────────
 *
 * PERFORMANCE UPGRADE: Replace all page imports at the top of
 * src/App.tsx with lazy-loaded versions.
 * React will only download a page's code when the user first
 * navigates to it — much faster initial load.
 *
 * ── Step 1: Add these two imports at the very top of App.tsx ─────
 */

import { lazy, Suspense } from "react";

/**
 * ── Step 2: Replace your existing page imports with these ─────────
 *
 * DELETE your current imports like:
 *   import Index from "./pages/Index";
 *   import GuidesIndex from "./pages/guides/GuidesIndex";
 *   etc.
 *
 * ADD these lazy imports instead:
 */

// ── Core pages
const Index            = lazy(() => import("./pages/Index"));
const NotFound         = lazy(() => import("./pages/NotFound"));

// ── Guides
const GuidesIndex      = lazy(() => import("./pages/guides/GuidesIndex"));
const GuideDetail      = lazy(() => import("./pages/guides/GuideDetail"));

// ── Tools
const ToolsIndex       = lazy(() => import("./pages/tools/ToolsIndex"));
const AppRecommender   = lazy(() => import("./pages/tools/AppRecommender"));
const WarrantyChecker  = lazy(() => import("./pages/tools/WarrantyChecker"));
const BackupWizard     = lazy(() => import("./pages/tools/BackupWizard"));
const Troubleshooter   = lazy(() => import("./pages/tools/Troubleshooter"));

// ── Forum (NEW)
const ForumIndex       = lazy(() => import("./pages/forum/ForumIndex"));
const ForumThread      = lazy(() => import("./pages/forum/ForumThread"));
const NewThread        = lazy(() => import("./pages/forum/NewThread"));

// ── Booking (UPDATED)
const BookIndex        = lazy(() => import("./pages/book/BookIndex"));
const BookingConfirmation = lazy(() => import("./pages/book/BookingConfirmation"));

// ── Admin (UPDATED — includes Analytics, Tech Verification, Jobs Board, Trends)
const AdminDashboard   = lazy(() => import("./pages/admin/AdminDashboard"));
const ManageGuides     = lazy(() => import("./pages/admin/ManageGuides"));
const ManageBookings   = lazy(() => import("./pages/admin/ManageBookings"));
const AnalyticsDashboard = lazy(() => import("./pages/admin/AnalyticsDashboard"));
const TechVerification = lazy(() => import("./pages/admin/TechVerification"));
const JobsBoard        = lazy(() => import("./pages/admin/JobsBoard"));
const TrendsInsights   = lazy(() => import("./pages/admin/TrendsInsights"));

// ── Technician
const BecomeATech      = lazy(() => import("./pages/technician/BecomeATech"));
const TechDashboard    = lazy(() => import("./pages/tech/TechDashboard"));
const TechAvailability = lazy(() => import("./pages/tech/TechAvailability"));

// ── Auth
const Login            = lazy(() => import("./pages/auth/Login"));
const Signup           = lazy(() => import("./pages/auth/Signup"));
const Profile          = lazy(() => import("./pages/auth/Profile"));
const SavedGuides      = lazy(() => import("./pages/SavedGuides"));

// ── Account (NEW — Session 7)
const MyBookings       = lazy(() => import("./pages/account/MyBookings"));
const WriteReview      = lazy(() => import("./pages/account/WriteReview"));

// ── TekBot (non-lazy — it's a small floating widget loaded on every page)
import TekBot from "./components/TekBot";

/**
 * ── Step 3: Wrap your <Routes> block in a <Suspense> ─────────────
 *
 * Example structure in App.tsx:
 *
 *   function App() {
 *     return (
 *       <BrowserRouter>
 *         <Navbar />
 *
 *         <Suspense fallback={<PageLoader />}>
 *           <Routes>
 *             <Route path="/"                    element={<Index />} />
 *             <Route path="/guides"              element={<GuidesIndex />} />
 *             <Route path="/guides/:slug"        element={<GuideDetail />} />
 *             <Route path="/tools"               element={<ToolsIndex />} />
 *             <Route path="/tools/app-recommender"  element={<AppRecommender />} />
 *             <Route path="/tools/warranty-checker" element={<WarrantyChecker />} />
 *             <Route path="/tools/backup-wizard"    element={<BackupWizard />} />
 *             <Route path="/tools/troubleshooter"   element={<Troubleshooter />} />
 *             <Route path="/forum"               element={<ForumIndex />} />
 *             <Route path="/forum/new"           element={<NewThread />} />
 *             <Route path="/forum/:id"           element={<ForumThread />} />
 *             <Route path="/book"                element={<BookIndex />} />
 *             <Route path="/book/confirmation"   element={<BookingConfirmation />} />
 *             <Route path="/admin"               element={<AdminDashboard />} />
 *             <Route path="/admin/guides"        element={<ManageGuides />} />
 *             <Route path="/admin/bookings"      element={<ManageBookings />} />
 *             <Route path="/admin/analytics"     element={<AnalyticsDashboard />} />
 *             <Route path="/admin/technicians"   element={<TechVerification />} />
 *             <Route path="/become-a-technician" element={<BecomeATech />} />
 *             <Route path="/tech"                element={<TechDashboard />} />
 *             <Route path="/tech/availability"   element={<TechAvailability />} />
 *             <Route path="/admin/jobs"          element={<JobsBoard />} />
 *             <Route path="/admin/trends"        element={<TrendsInsights />} />
 *             <Route path="/login"               element={<Login />} />
 *             <Route path="/signup"              element={<Signup />} />
 *             <Route path="/profile"             element={<Profile />} />
 *             <Route path="/saved-guides"        element={<SavedGuides />} />
 *             <Route path="/my-bookings"         element={<MyBookings />} />
 *             <Route path="/review/:bookingId"   element={<WriteReview />} />
 *             <Route path="*"                    element={<NotFound />} />
 *           </Routes>
 *         </Suspense>
 *
 *         <Footer />
 *         <TekBot />
 *       </BrowserRouter>
 *     );
 *   }
 */

/**
 * ── Step 4: Add this PageLoader component somewhere in App.tsx ────
 *
 * It shows while lazy-loaded pages are downloading.
 * Paste it near the bottom of App.tsx (before the default export):
 */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-sm">Loading...</p>
      </div>
    </div>
  );
}

export { PageLoader };
export {};
