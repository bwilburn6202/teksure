// The single source of truth for which /tools/<slug> pages exist. App.tsx used to
// carry one lazy() declaration and one <Route> per tool, which is how the file
// reached 7,445 lines and accumulated 37 duplicate route declarations that were
// silently unreachable. The route table is now one dynamic /tools/:slug route
// that looks a slug up in here.
//
// scripts/generate-sitemap.mjs, scripts/generate-tools-directory.mjs and
// scripts/prerender.mjs all read this file for the tool URL list. A tool that is
// not in this map does not exist.
import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export const toolRegistry: Record<string, LazyExoticComponent<ComponentType>> = {
  'credit-freeze-walkthrough': lazy(() => import('@/pages/tools/CreditFreezeWalkthrough')),
  'id-theft-recovery': lazy(() => import('@/pages/tools/IdTheftRecovery')),
  'is-this-a-scam': lazy(() => import('@/pages/tools/IsThisAScam')),
  'password-generator': lazy(() => import('@/pages/tools/PasswordGenerator')),
  'robocall-blocker-setup': lazy(() => import('@/pages/tools/RobocallBlockerSetup')),
  'scam-message-decoder': lazy(() => import('@/pages/tools/ScamMessageDecoder')),
  'scam-recovery-checklist': lazy(() => import('@/pages/tools/ScamRecoveryChecklist')),
  'two-factor-setup': lazy(() => import('@/pages/tools/TwoFactorSetup')),
  'url-safety-checker': lazy(() => import('@/pages/tools/UrlSafetyChecker')),
};

export const toolSlugs: string[] = Object.keys(toolRegistry);
