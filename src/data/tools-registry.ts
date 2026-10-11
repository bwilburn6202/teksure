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
  'data-breach-checker': lazy(() => import('@/pages/tools/DataBreachChecker')),
  'emergency-info-card': lazy(() => import('@/pages/tools/EmergencyInfoCard')),
  'error-decoder': lazy(() => import('@/pages/tools/ErrorDecoder')),
  'find-lost-phone': lazy(() => import('@/pages/tools/FindLostPhone')),
  'id-theft-recovery': lazy(() => import('@/pages/tools/IdTheftRecovery')),
  'internet-speed-doctor': lazy(() => import('@/pages/tools/InternetSpeedDoctor')),
  'is-this-a-scam': lazy(() => import('@/pages/tools/IsThisAScam')),
  'low-cost-internet': lazy(() => import('@/pages/tools/LowCostInternet')),
  'new-phone-setup': lazy(() => import('@/pages/tools/NewPhoneSetup')),
  'password-generator': lazy(() => import('@/pages/tools/PasswordGenerator')),
  'password-strength': lazy(() => import('@/pages/tools/PasswordStrength')),
  'phone-plan-comparison': lazy(() => import('@/pages/tools/PhonePlanComparison')),
  'photo-backup-wizard': lazy(() => import('@/pages/tools/PhotoBackupWizard')),
  'printer-troubleshooter': lazy(() => import('@/pages/tools/PrinterTroubleshooter')),
  'robocall-blocker-setup': lazy(() => import('@/pages/tools/RobocallBlockerSetup')),
  'scam-message-decoder': lazy(() => import('@/pages/tools/ScamMessageDecoder')),
  'scam-recovery-checklist': lazy(() => import('@/pages/tools/ScamRecoveryChecklist')),
  'speed-up-device': lazy(() => import('@/pages/tools/SpeedUpDevice')),
  'subscription-auditor': lazy(() => import('@/pages/tools/SubscriptionAuditor')),
  'troubleshooter': lazy(() => import('@/pages/tools/Troubleshooter')),
  'two-factor-setup': lazy(() => import('@/pages/tools/TwoFactorSetup')),
  'url-safety-checker': lazy(() => import('@/pages/tools/UrlSafetyChecker')),
  'wifi-troubleshooter': lazy(() => import('@/pages/tools/WifiTroubleshooter')),
};

export const toolSlugs: string[] = Object.keys(toolRegistry);
