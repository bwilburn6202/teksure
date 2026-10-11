import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Wrench, Shield, Phone } from 'lucide-react';

/**
 * Persistent bottom navigation for mobile/tablet screens.
 *
 * Four labeled icon buttons — Guides, Tools, Scams, Get Help — the same links
 * and labels as the top bar, so someone on a small screen never has to open a
 * hamburger menu. Labels are always visible (not on hover) so the nav reads
 * like a set of physical buttons, which is what senior-UX research calls for.
 *
 * Hidden on screens ≥ lg where the top pill nav already covers this.
 * Hidden on admin / customer / tech routes so it doesn't cover dashboards.
 */
const items = [
  { to: '/guides', label: 'Guides', icon: BookOpen },
  { to: '/tools', label: 'Tools', icon: Wrench },
  { to: '/scam-defense', label: 'Scams', icon: Shield },
  { to: '/get-help', label: 'Get Help', icon: Phone },
] as const;

const HIDDEN_PREFIXES = ['/customer', '/tech', '/admin'];

export function MobileBottomNav() {
  const { pathname } = useLocation();
  const hidden = HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));
  if (hidden) return null;

  return (
    <nav
      aria-label="Primary — mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,.05)] backdrop-blur lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  'flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-xs font-medium transition-colors ' +
                  (isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground')
                }
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
