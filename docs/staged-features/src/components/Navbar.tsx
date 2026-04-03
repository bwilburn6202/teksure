/**
 * Navbar — Clean, condensed navigation
 *
 * Desktop: Logo | Learn ▼ | Book Help | More ▼ | [Auth]
 *   "Learn" dropdown contains: Guides + Tools
 *   "More" dropdown contains: Community
 *   2 primary items + overflow — minimal clutter
 *
 * Mobile: full-screen drawer with all links listed individually
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X, ChevronDown, LogOut, User, BookOpen, Wrench, Bookmark, Calendar, MessageSquare } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; id: string } | null>(null);

  const learnRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Auth state
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ? { email: data.user.email ?? "", id: data.user.id } : null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ? { email: session.user.email ?? "", id: session.user.id } : null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setLearnOpen(false);
    setMoreOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const isActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(to + "/");

  const learnActive = isActive("/guides") || isActive("/tools");
  const initials = user?.email?.slice(0, 2).toUpperCase() ?? "?";

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <span className="text-blue-600 font-bold text-lg tracking-tight">
              Tek<span className="text-gray-800">Sure</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">

            {/* Learn dropdown (Guides + Tools) */}
            <div className="relative" ref={learnRef}>
              <button
                onClick={() => setLearnOpen((v) => !v)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  learnActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Learn
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${learnOpen ? "rotate-180" : ""}`}
                />
              </button>

              {learnOpen && (
                <div className="absolute left-0 mt-1 w-44 bg-white rounded-xl border border-gray-100 shadow-lg py-1 z-50">
                  <Link
                    to="/guides"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mx-1"
                  >
                    <BookOpen className="h-4 w-4 text-blue-500 shrink-0" />
                    <div>
                      <p className="font-medium leading-none">Guides</p>
                      <p className="text-xs text-gray-400 mt-0.5">Step-by-step help</p>
                    </div>
                  </Link>
                  <Link
                    to="/tools"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mx-1"
                  >
                    <Wrench className="h-4 w-4 text-blue-500 shrink-0" />
                    <div>
                      <p className="font-medium leading-none">Tools</p>
                      <p className="text-xs text-gray-400 mt-0.5">Wizards &amp; checkers</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Book Help — primary CTA */}
            <Link
              to="/book"
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive("/book")
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              Book Help
            </Link>

            {/* More dropdown (Community + future secondary links) */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/forum")
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                More
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {moreOpen && (
                <div className="absolute left-0 mt-1 w-44 bg-white rounded-xl border border-gray-100 shadow-lg py-1 z-50">
                  <Link
                    to="/forum"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mx-1"
                  >
                    <MessageSquare className="h-4 w-4 text-blue-500 shrink-0" />
                    <div>
                      <p className="font-medium leading-none">Community</p>
                      <p className="text-xs text-gray-400 mt-0.5">Ask &amp; help others</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ── Desktop auth ── */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center">
                    {initials}
                  </div>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl border border-gray-100 shadow-lg py-1 z-50">
                    <p className="px-3 py-2 text-xs text-gray-400 truncate border-b border-gray-50">
                      {user.email}
                    </p>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <User className="h-3.5 w-3.5" />
                      My Profile
                    </Link>
                    <Link
                      to="/my-bookings"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      My Bookings
                    </Link>
                    <Link
                      to="/saved-guides"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                      Saved Guides
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium bg-blue-600 text-white px-3.5 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen drawer ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-14">
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            {/* Guides + Tools under a "Learn" heading */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-1">
              Learn
            </p>
            <Link
              to="/guides"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive("/guides") ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <BookOpen className="h-5 w-5 text-blue-400" />
              Guides
            </Link>
            <Link
              to="/tools"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive("/tools") ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Wrench className="h-5 w-5 text-blue-400" />
              Tools
            </Link>

            <div className="pt-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-1">
                Connect
              </p>
              <Link
                to="/forum"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive("/forum") ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Community Forum
              </Link>
              <Link
                to="/book"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive("/book")
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                Book Help
              </Link>
            </div>
          </div>

          {/* Auth section at bottom of drawer */}
          <div className="border-t border-gray-100 px-5 py-5 space-y-2">
            {user ? (
              <>
                <p className="text-xs text-gray-400 px-1 mb-3">{user.email}</p>
                <Link
                  to="/profile"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                >
                  My Profile
                </Link>
                <Link
                  to="/my-bookings"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                >
                  My Bookings
                </Link>
                <Link
                  to="/saved-guides"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
                >
                  Saved Guides
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-red-50"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-center px-4 py-3 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block text-center px-4 py-3 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                >
                  Sign up free
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Spacer so page content clears the fixed nav */}
      <div className="h-14" />
    </>
  );
}
