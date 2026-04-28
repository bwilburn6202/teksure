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
import { MeshGradientBackground } from "@/components/MeshGradientBackground";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { SearchModal, useSearchModal } from "@/components/SearchModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";

const isServer = typeof window === "undefined";

// ── Lazy-loaded route components ──────────────────────────────────────────────
const Landing                = lazy(() => import("./pages/Landing"));
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
const AdminNewsletter        = lazy(() => import("./pages/admin/Newsletter"));
const OpportunityDashboard   = lazy(() => import("./pages/OpportunityDashboard"));
const Glossary               = lazy(() => import("./pages/Glossary"));
const FindAGuide             = lazy(() => import("./pages/FindAGuide"));
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
const PhotoBackupWizard      = lazy(() => import("./pages/tools/PhotoBackupWizard"));
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
const PhoneButtonPoster      = lazy(() => import("./pages/printables/PhoneButtonPoster"));
const ReferenceCards         = lazy(() => import("./pages/ReferenceCards"));
const Checklists             = lazy(() => import("./pages/Checklists"));
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
const BluetoothPairingHelper = lazy(() => import("./pages/tools/BluetoothPairingHelper"));
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
const LlmKnowledgeBase       = lazy(() => import("./pages/LlmKnowledgeBase"));

const EmergencyHelp          = lazy(() => import("./pages/EmergencyHelp"));
const PrinterTroubleshooter  = lazy(() => import("./pages/tools/PrinterTroubleshooter"));
const NotificationDecoder    = lazy(() => import("./pages/tools/NotificationDecoder"));
const SafeCall               = lazy(() => import("./pages/tools/SafeCall"));
const BillDecoder            = lazy(() => import("./pages/tools/BillDecoder"));
const KeyboardNavigation     = lazy(() => import("./pages/KeyboardNavigation"));
const Privacy                = lazy(() => import("./pages/Privacy"));
const Changelog              = lazy(() => import("./pages/Changelog"));
const WhatsNew               = lazy(() => import("./pages/WhatsNew"));
const GiftSession            = lazy(() => import("./pages/GiftSession"));
const MemoryDashboard        = lazy(() => import("./pages/MemoryDashboard"));
const FAQ                    = lazy(() => import("./pages/FAQ"));

// ── New tools (April 2026 expansion) ──
const ScamSimulator          = lazy(() => import("./pages/tools/ScamSimulator"));
const PrivacyAudit           = lazy(() => import("./pages/tools/PrivacyAudit"));
const BrowserSafetyAudit     = lazy(() => import("./pages/tools/BrowserSafetyAudit"));
const StreamingCalculator    = lazy(() => import("./pages/tools/StreamingCalculator"));
const SubscriptionCostAggregator = lazy(() => import("./pages/calculators/SubscriptionCostAggregator"));
const PhoneBillDecoder       = lazy(() => import("./pages/calculators/PhoneBillDecoder"));
const DataBreachChecker      = lazy(() => import("./pages/tools/DataBreachChecker"));
const NewPhoneSetup          = lazy(() => import("./pages/tools/NewPhoneSetup"));
const SubscriptionTracker    = lazy(() => import("./pages/tools/SubscriptionTracker"));
const InternetSpeedAdvisor   = lazy(() => import("./pages/tools/InternetSpeedAdvisor"));
const DigitalCleanup         = lazy(() => import("./pages/tools/DigitalCleanup"));
const DeviceSetupChecklist   = lazy(() => import("./pages/tools/DeviceSetupChecklist"));
const TechGlossaryQuiz       = lazy(() => import("./pages/tools/TechGlossaryQuiz"));
const RobocallBlocker        = lazy(() => import("./pages/tools/RobocallBlocker"));
const PhonePlanComparator    = lazy(() => import("./pages/tools/PhonePlanComparator"));
const PhonePlanComparison    = lazy(() => import("./pages/tools/PhonePlanComparison"));
const DigitalLiteracyAssessment = lazy(() => import("./pages/tools/DigitalLiteracyAssessment"));
const MeetingSetupHelper     = lazy(() => import("./pages/tools/MeetingSetupHelper"));
const ContactBackupTool      = lazy(() => import("./pages/tools/ContactBackupTool"));
const InternetPlanCalculator = lazy(() => import("./pages/calculators/InternetPlanCalculator"));

// ── OSINT.link-inspired tools ──
const GoogleDorkGenerator    = lazy(() => import("./pages/tools/GoogleDorkGenerator"));
const DataLeakDashboard      = lazy(() => import("./pages/tools/DataLeakDashboard"));
const ReverseImageSearch     = lazy(() => import("./pages/tools/ReverseImageSearch"));
const FactCheckToolkit       = lazy(() => import("./pages/tools/FactCheckToolkit"));

// ── Tools expansion (April 16 2026) ──
const PasswordGenerator      = lazy(() => import("./pages/tools/PasswordGenerator"));
const ScreenTimeAnalyzer     = lazy(() => import("./pages/tools/ScreenTimeAnalyzer"));
const EmailSecurityCheck     = lazy(() => import("./pages/tools/EmailSecurityCheck"));
const AppCleanup             = lazy(() => import("./pages/tools/AppCleanup"));
const TechBudgetPlanner      = lazy(() => import("./pages/tools/TechBudgetPlanner"));
const DeviceAgeChecker       = lazy(() => import("./pages/tools/DeviceAgeChecker"));
const DeviceTradeInEstimator = lazy(() => import("./pages/tools/DeviceTradeInEstimator"));
const ParentalControlsWizard = lazy(() => import("./pages/tools/ParentalControlsWizard"));
const HomeNetworkMap         = lazy(() => import("./pages/tools/HomeNetworkMap"));
const WifiPasswordFinder     = lazy(() => import("./pages/tools/WifiPasswordFinder"));
const TechEmergencyKit       = lazy(() => import("./pages/tools/TechEmergencyKit"));
const TechBreakReminder      = lazy(() => import("./pages/tools/TechBreakReminder"));
const WeeklyTips             = lazy(() => import("./pages/WeeklyTips"));

// ── Master Plan tools (April 16 2026 batch-2) ──
const RouterSetupWizard      = lazy(() => import("./pages/tools/RouterSetupWizard"));
const SmartTvSetupWizard     = lazy(() => import("./pages/tools/SmartTvSetupWizard"));
const VoiceAssistantSetup    = lazy(() => import("./pages/tools/VoiceAssistantSetup"));
const VoiceCommandCheatSheet = lazy(() => import("./pages/tools/VoiceCommandCheatSheet"));
const LibraryTechHelper      = lazy(() => import("./pages/tools/LibraryTechHelper"));
const LocalLibraryFinder     = lazy(() => import("./pages/tools/LocalLibraryFinder"));
const PodcastDirectory       = lazy(() => import("./pages/tools/PodcastDirectory"));
const TechGiftGuideTool      = lazy(() => import("./pages/tools/TechGiftGuide"));
const MyFirstSmartphone      = lazy(() => import("./pages/tools/MyFirstSmartphone"));
const IpadForSeniors         = lazy(() => import("./pages/tools/IpadForSeniors"));
const AppleWatchSetup        = lazy(() => import("./pages/tools/AppleWatchSetup"));
const ComputerCleanupWizard  = lazy(() => import("./pages/tools/ComputerCleanupWizard"));
const PhoneCleanupWizard     = lazy(() => import("./pages/tools/PhoneCleanupWizard"));
const DigitalFootprintScanner = lazy(() => import("./pages/tools/DigitalFootprintScanner"));
const InternetPlanComparator = lazy(() => import("./pages/tools/InternetPlanComparator"));
const ScamIqTest             = lazy(() => import("./pages/tools/ScamIqTest"));
const ScamIqQuiz             = lazy(() => import("./pages/quizzes/ScamIqQuiz"));
const TechConfidenceQuiz     = lazy(() => import("./pages/quizzes/TechConfidenceQuiz"));
const PhishingInbox          = lazy(() => import("./pages/practice/PhishingInbox"));
const AccessibilityNeedsFinder = lazy(() => import("./pages/tools/AccessibilityNeedsFinder"));
const FileOrganizerGuide     = lazy(() => import("./pages/tools/FileOrganizerGuide"));
const ScamPhoneDatabase      = lazy(() => import("./pages/tools/ScamPhoneDatabase"));
const MedicationReminderSetup = lazy(() => import("./pages/tools/MedicationReminderSetup"));
const HomeSecurityCameraSetup = lazy(() => import("./pages/tools/HomeSecurityCameraSetup"));
const SmartThermostatSetup  = lazy(() => import("./pages/tools/SmartThermostatSetup"));
const HearingAidTechHelper  = lazy(() => import("./pages/tools/HearingAidTechHelper"));
const LowVisionTechHub       = lazy(() => import("./pages/tools/LowVisionTechHub"));
const ScreenReaderStarter    = lazy(() => import("./pages/tools/ScreenReaderStarter"));
const AudioTutorialHub       = lazy(() => import("./pages/tools/AudioTutorialHub"));
const RemoteControlDecoder   = lazy(() => import("./pages/tools/RemoteControlDecoder"));
const RideshareSetup         = lazy(() => import("./pages/tools/RideshareSetup"));
const BankingAppSetup        = lazy(() => import("./pages/tools/BankingAppSetup"));
const VideoCallHelper        = lazy(() => import("./pages/tools/VideoCallHelper"));
const GovernmentBenefitsPortal = lazy(() => import("./pages/tools/GovernmentBenefitsPortal"));
const StateBenefitsFinder   = lazy(() => import("./pages/tools/StateBenefitsFinder"));
const DmvOnlineHelper        = lazy(() => import("./pages/tools/DmvOnlineHelper"));
const GuidesEspanol          = lazy(() => import("./pages/GuidesEspanol"));
const Brain                  = lazy(() => import("./pages/Brain"));
const TekBrainPage           = lazy(() => import("./pages/TekBrain"));
const TekBrainLanding        = lazy(() => import("./pages/TekBrainLanding"));
const FreeResources          = lazy(() => import("./pages/FreeResources"));
const ScamDefenseCenter      = lazy(() => import("./pages/ScamDefenseCenter"));
const ScamAlertFeed          = lazy(() => import("./pages/ScamAlertFeed"));
const Learn                  = lazy(() => import("./pages/Learn"));
const AccessibilityHub       = lazy(() => import("./pages/AccessibilityHub"));
const CaregiverHub           = lazy(() => import("./pages/CaregiverHub"));
const FreeSoftware           = lazy(() => import("./pages/FreeSoftware"));
const TechHelpNearMe         = lazy(() => import("./pages/TechHelpNearMe"));
const SeniorTechPath         = lazy(() => import("./pages/SeniorTechPath"));
const ChromebookHub          = lazy(() => import("./pages/ChromebookHub"));
const InternetBasics         = lazy(() => import("./pages/courses/InternetBasics"));

// ── Checklists (life-transition) ──
const Turning65              = lazy(() => import("./pages/checklists/Turning65"));

// ── Printables (legacy planning, binders, etc.) ──
const DigitalEstateBinder    = lazy(() => import("./pages/printables/DigitalEstateBinder"));

// ── Calculators ──
const MedicareCostEstimator  = lazy(() => import("./pages/calculators/MedicareCostEstimator"));

const TechComfortQuiz        = lazy(() => import("./pages/tools/TechComfortQuiz"));
const IsThisAScam            = lazy(() => import("./pages/tools/IsThisAScam"));
const DeviceComparison       = lazy(() => import("./pages/tools/DeviceComparison"));
const PasswordLeakChecker    = lazy(() => import("./pages/tools/PasswordLeakChecker"));
const SubscriptionAuditor    = lazy(() => import("./pages/tools/SubscriptionAuditor"));
const PrivacyHub             = lazy(() => import("./pages/PrivacyHub"));
const DataBrokerRemoval      = lazy(() => import("./pages/DataBrokerRemoval"));
const VeteransTechHub        = lazy(() => import("./pages/VeteransTechHub"));
const EmergencyTech          = lazy(() => import("./pages/EmergencyTech"));
const KidsOnlineSafety       = lazy(() => import("./pages/KidsOnlineSafety"));
const DigitalDetox           = lazy(() => import("./pages/DigitalDetox"));
const MovingTech             = lazy(() => import("./pages/MovingTech"));
const RetirementTech         = lazy(() => import("./pages/RetirementTech"));
const NewGrandparentTech     = lazy(() => import("./pages/NewGrandparentTech"));
const AskTekSure             = lazy(() => import("./pages/AskTekSure"));
const AskTekSureCommunity    = lazy(() => import("./pages/community/AskTekSure"));
const SuccessStories         = lazy(() => import("./pages/SuccessStories"));
const Stories                = lazy(() => import("./pages/Stories"));
const TechProblemOfWeek      = lazy(() => import("./pages/TechProblemOfWeek"));
const UrlSafetyChecker       = lazy(() => import("./pages/tools/UrlSafetyChecker"));
const QrCodeExplainer        = lazy(() => import("./pages/tools/QrCodeExplainer"));
const InternetSpeedNeeds     = lazy(() => import("./pages/tools/InternetSpeedNeeds"));
const BatteryOptimizer       = lazy(() => import("./pages/tools/BatteryOptimizer"));
const PasswordPhraseGenerator = lazy(() => import("./pages/tools/PasswordPhraseGenerator"));
const PasswordPractice       = lazy(() => import("./pages/practice/PasswordPractice"));
const DigitalWillTemplate    = lazy(() => import("./pages/tools/DigitalWillTemplate"));
const GriefTechHelper        = lazy(() => import("./pages/tools/GriefTechHelper"));
const EmergencyInfoCard      = lazy(() => import("./pages/tools/EmergencyInfoCard"));
const CaregiverPlannerPack   = lazy(() => import("./pages/printables/CaregiverPlannerPack"));
const WifiCoveragePlanner    = lazy(() => import("./pages/tools/WifiCoveragePlanner"));
const StorageOptimizer       = lazy(() => import("./pages/tools/StorageOptimizer"));
// ── Round 4 hubs ──
const SmallBusinessTechHub   = lazy(() => import("./pages/SmallBusinessTechHub"));
const AiLiteracyHub          = lazy(() => import("./pages/AiLiteracyHub"));
const PasskeyHub             = lazy(() => import("./pages/PasskeyHub"));
const DeepfakeDefenseHub     = lazy(() => import("./pages/DeepfakeDefenseHub"));
const EslTechHub             = lazy(() => import("./pages/EslTechHub"));
const RuralTechHub           = lazy(() => import("./pages/RuralTechHub"));
const DivorceTechHub         = lazy(() => import("./pages/DivorceTechHub"));
const WidowhoodTechHub       = lazy(() => import("./pages/WidowhoodTechHub"));
const JobSearchTechHub       = lazy(() => import("./pages/JobSearchTechHub"));
const DementiaCareTech       = lazy(() => import("./pages/DementiaCareTech"));
const BereavementTech        = lazy(() => import("./pages/BereavementTech"));
const EmptyNestTech          = lazy(() => import("./pages/EmptyNestTech"));
const FirstApartmentTech     = lazy(() => import("./pages/FirstApartmentTech"));
// ── Round 4 tools ──
const PlainEnglishTranslator = lazy(() => import("./pages/tools/PlainEnglishTranslator"));
const AccessibilityProfileBuilder = lazy(() => import("./pages/tools/AccessibilityProfileBuilder"));
const TechSetupCostEstimator = lazy(() => import("./pages/tools/TechSetupCostEstimator"));
const WifiQrGenerator        = lazy(() => import("./pages/tools/WifiQrGenerator"));
const EmailWriterHelper      = lazy(() => import("./pages/tools/EmailWriterHelper"));
const CreditReportReader     = lazy(() => import("./pages/tools/CreditReportReader"));
const EobDecoder             = lazy(() => import("./pages/tools/EobDecoder"));
const ReceiptScannerDemo     = lazy(() => import("./pages/tools/ReceiptScannerDemo"));
const ChildAppSafetyChecker  = lazy(() => import("./pages/tools/ChildAppSafetyChecker"));
const InternetSpeedDoctor    = lazy(() => import("./pages/tools/InternetSpeedDoctor"));
const PhoneFirstAid          = lazy(() => import("./pages/tools/PhoneFirstAid"));
const FamilyTechPlanner      = lazy(() => import("./pages/tools/FamilyTechPlanner"));
const BillNegotiator         = lazy(() => import("./pages/tools/BillNegotiator"));
const SafeLinkChecker        = lazy(() => import("./pages/tools/SafeLinkChecker"));
const IsThisReal             = lazy(() => import("./pages/tools/IsThisReal"));
const FreeLearningHub        = lazy(() => import("./pages/tools/FreeLearningHub"));
const SocialMediaSafety      = lazy(() => import("./pages/tools/SocialMediaSafety"));
const FakeNewsChecker        = lazy(() => import("./pages/tools/FakeNewsChecker"));
const SeniorDiscountFinder   = lazy(() => import("./pages/tools/SeniorDiscountFinder"));
const MedicarePlanChooser    = lazy(() => import("./pages/tools/MedicarePlanChooser"));
const PracticeMode           = lazy(() => import("./pages/tools/PracticeMode"));
const SiteIndex              = lazy(() => import("./pages/SiteIndex"));
const Volunteer              = lazy(() => import("./pages/Volunteer"));
const WeeklyNewsletterTemplate = lazy(() => import("./pages/printables/WeeklyNewsletterTemplate"));
const SettingsFinder         = lazy(() => import("./pages/tools/SettingsFinder"));
const EmailSpamManager       = lazy(() => import("./pages/tools/EmailSpamManager"));
const StreamingServicePicker = lazy(() => import("./pages/tools/StreamingServicePicker"));

const RefundAndReturnHelper  = lazy(() => import("./pages/tools/RefundAndReturnHelper"));
const KitchenTechHelper      = lazy(() => import("./pages/tools/KitchenTechHelper"));
const FreeResourceHub        = lazy(() => import("./pages/tools/FreeResourceHub"));
const TechJargonTranslator   = lazy(() => import("./pages/tools/TechJargonTranslator"));
const StateAgScamLookup      = lazy(() => import("./pages/tools/StateAgScamLookup"));

// ── Toolkits (hub pages) ─────────────────────────────────────────────────────
const CaregiverToolkit       = lazy(() => import("./pages/toolkits/CaregiverToolkit"));

// ── Practice sims (branching interactive safety practice) ──────────────────
const SuspiciousCallSim      = lazy(() => import("./pages/practice/SuspiciousCallSim"));
const VocabFlashcards        = lazy(() => import("./pages/practice/VocabFlashcards"));

// ── New tools and hubs (April 2026 expansion) ──────────────────────────────
const ScamMessageDecoder     = lazy(() => import("./pages/tools/ScamMessageDecoder"));
const PasswordHealth         = lazy(() => import("./pages/tools/PasswordHealth"));
const DeviceRetirementHelper = lazy(() => import("./pages/tools/DeviceRetirementHelper"));
const RobocallBlockerSetup   = lazy(() => import("./pages/tools/RobocallBlockerSetup"));
const ScamWitnessStatement   = lazy(() => import("./pages/tools/ScamWitnessStatement"));
const TechCheatsheetGenerator = lazy(() => import("./pages/tools/TechCheatsheetGenerator"));
const FamilyTechRoundtable   = lazy(() => import("./pages/tools/FamilyTechRoundtable"));
const GrandparentDeviceSetup = lazy(() => import("./pages/GrandparentDeviceSetup"));
const AccountAfterLoss       = lazy(() => import("./pages/AccountAfterLoss"));
const LowVisionSetup         = lazy(() => import("./pages/LowVisionSetup"));
const DailyTip               = lazy(() => import("./pages/DailyTip"));
const TechWillBuilder        = lazy(() => import("./pages/tools/TechWillBuilder"));
const UpdateDecisionHelper   = lazy(() => import("./pages/tools/UpdateDecisionHelper"));
const HearingAidPairingWizard = lazy(() => import("./pages/tools/HearingAidPairingWizard"));
const Start                  = lazy(() => import("./pages/Start"));
const IdTheftRecovery        = lazy(() => import("./pages/tools/IdTheftRecovery"));
const EmailMigration         = lazy(() => import("./pages/tools/EmailMigration"));
const FallDetectionSetup     = lazy(() => import("./pages/tools/FallDetectionSetup"));
const TravelTechChecklist    = lazy(() => import("./pages/tools/TravelTechChecklist"));
const SmartHomeStarter       = lazy(() => import("./pages/tools/SmartHomeStarter"));
const HospitalDischargeKit   = lazy(() => import("./pages/tools/HospitalDischargeKit"));
const AiImageSpotter         = lazy(() => import("./pages/tools/AiImageSpotter"));

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
      <RouteThemeDefault />
      <MobileBottomNav />
      <BackToTop />
      <Toaster />
      <Sonner />
      {!isServer && <CookieConsent />}
      <Suspense fallback={<PageLoader />}>
        <ErrorBoundary variant="section">
        <Routes>
          {/* Homepage — centered hero on the global mesh wallpaper.
              The TekBrain chat lives at /brain and /tekbrain/chat. */}
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* /pricing was retired — its info now lives inside /get-help */}
          <Route path="/pricing" element={<Navigate to="/get-help" replace />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guias" element={<GuidesEspanol />} />
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
          <Route path="/admin/newsletter" element={<ProtectedRoute allowedRoles={['admin']}><AdminNewsletter /></ProtectedRoute>} />
          <Route path="/opportunity-dashboard" element={<OpportunityDashboard />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/find-a-guide" element={<FindAGuide />} />
          <Route path="/quick-fixes" element={<QuickFixes />} />
          <Route path="/device-hub" element={<DeviceHub />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/brain" element={<Brain />} />
          {/* /tekbrain is the welcoming landing page; /tekbrain/chat is the
              actual chat UI. First-time visitors now see an explainer before
              being dropped into a conversation. */}
          <Route path="/tekbrain" element={<TekBrainLanding />} />
          <Route path="/tekbrain/chat" element={<TekBrainPage />} />
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
          <Route path="/tools/photo-backup-wizard" element={<PhotoBackupWizard />} />
          <Route path="/tools/safety-course" element={<SafetyCourse />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/tools/app-recommender" element={<AppRecommender />} />
          <Route path="/tools/tech-comfort-quiz" element={<TechComfortQuiz />} />
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
          <Route path="/tools/bluetooth-pairing-helper" element={<BluetoothPairingHelper />} />
          <Route path="/tools/tech-health-quiz" element={<TechHealthQuiz />} />
          <Route path="/tools/storage-cleanup" element={<StorageCleanup />} />
          <Route path="/tools/vpn-guide" element={<VpnGuide />} />
          <Route path="/tools/app-permissions" element={<AppPermissions />} />
          <Route path="/tools/two-factor-setup" element={<TwoFactorSetup />} />
          <Route path="/tools/password-manager" element={<PasswordManager />} />
          <Route path="/tools/state-benefits-finder" element={<StateBenefitsFinder />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/technicians" element={<TechnicianProfile />} />
          <Route path="/technicians/:id" element={<TechnicianProfile />} />
          <Route path="/book" element={<Navigate to="/get-help" replace />} />
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
          <Route path="/reference-cards" element={<ReferenceCards />} />
          <Route path="/printables/phone-button-poster" element={<PhoneButtonPoster />} />
          <Route path="/checklists" element={<Checklists />} />
          <Route path="/checklists/turning-65" element={<Turning65 />} />
          <Route path="/printables/digital-estate-binder" element={<DigitalEstateBinder />} />
          <Route path="/calculators/medicare-cost" element={<MedicareCostEstimator />} />
          <Route path="/calculators/phone-bill" element={<PhoneBillDecoder />} />
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
          <Route path="/free-resources" element={<FreeResources />} />
          <Route path="/scam-defense" element={<ScamDefenseCenter />} />
          <Route path="/scam-alerts" element={<ScamAlertFeed />} />
          <Route path="/practice/phishing-inbox" element={<PhishingInbox />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/accessibility" element={<AccessibilityHub />} />
          <Route path="/caregiver-hub" element={<CaregiverHub />} />
          <Route path="/free-software" element={<FreeSoftware />} />
          <Route path="/tech-help-near-me" element={<TechHelpNearMe />} />
          <Route path="/senior-tech-path" element={<SeniorTechPath />} />
          <Route path="/chromebook" element={<ChromebookHub />} />
          <Route path="/courses/internet-basics" element={<InternetBasics />} />

          <Route path="/tools/is-this-a-scam" element={<IsThisAScam />} />
          <Route path="/tools/device-comparison" element={<DeviceComparison />} />
          <Route path="/tools/phone-plan-comparator" element={<PhonePlanComparator />} />
          <Route path="/tools/phone-plan-comparison" element={<PhonePlanComparison />} />
          <Route path="/tools/robocall-blocker" element={<RobocallBlocker />} />
          <Route path="/tools/password-leak-checker" element={<PasswordLeakChecker />} />
          <Route path="/tools/subscription-auditor" element={<SubscriptionAuditor />} />
          <Route path="/privacy-hub" element={<PrivacyHub />} />
          <Route path="/data-broker-removal" element={<DataBrokerRemoval />} />
          <Route path="/veterans-tech-hub" element={<VeteransTechHub />} />
          <Route path="/emergency-tech" element={<EmergencyTech />} />
          <Route path="/kids-online-safety" element={<KidsOnlineSafety />} />
          <Route path="/digital-detox" element={<DigitalDetox />} />
          <Route path="/moving-tech" element={<MovingTech />} />
          <Route path="/retirement-tech" element={<RetirementTech />} />
          <Route path="/new-grandparent-tech" element={<NewGrandparentTech />} />
          <Route path="/ask" element={<AskTekSure />} />
          <Route path="/community/ask" element={<AskTekSureCommunity />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/tech-problem-of-week" element={<TechProblemOfWeek />} />
          <Route path="/tools/url-safety-checker" element={<UrlSafetyChecker />} />
          <Route path="/tools/grief-tech-helper" element={<GriefTechHelper />} />
          <Route path="/tools/qr-code-explainer" element={<QrCodeExplainer />} />
          <Route path="/tools/internet-speed-needs" element={<InternetSpeedNeeds />} />
          <Route path="/tools/battery-optimizer" element={<BatteryOptimizer />} />
          <Route path="/tools/password-phrase-generator" element={<PasswordPhraseGenerator />} />
          <Route path="/practice/password-practice" element={<PasswordPractice />} />
          <Route path="/tools/digital-will-template" element={<DigitalWillTemplate />} />
          <Route path="/tools/grief-tech-helper" element={<GriefTechHelper />} />
          <Route path="/tools/emergency-info-card" element={<EmergencyInfoCard />} />
          <Route path="/printables/caregiver-planner" element={<CaregiverPlannerPack />} />
          <Route path="/tools/wifi-coverage-planner" element={<WifiCoveragePlanner />} />
          <Route path="/tools/storage-optimizer" element={<StorageOptimizer />} />
          <Route path="/tools/tech-jargon-translator" element={<TechJargonTranslator />} />
          {/* Round 4 hubs */}
          <Route path="/small-business-tech-hub" element={<SmallBusinessTechHub />} />
          <Route path="/ai-literacy-hub" element={<AiLiteracyHub />} />
          <Route path="/passkey-hub" element={<PasskeyHub />} />
          <Route path="/deepfake-defense-hub" element={<DeepfakeDefenseHub />} />
          <Route path="/esl-tech-hub" element={<EslTechHub />} />
          <Route path="/rural-tech-hub" element={<RuralTechHub />} />
          <Route path="/divorce-tech-hub" element={<DivorceTechHub />} />
          <Route path="/widowhood-tech-hub" element={<WidowhoodTechHub />} />
          <Route path="/job-search-tech-hub" element={<JobSearchTechHub />} />
          <Route path="/dementia-care-tech" element={<DementiaCareTech />} />
          <Route path="/bereavement-tech" element={<BereavementTech />} />
          <Route path="/empty-nest-tech" element={<EmptyNestTech />} />
          <Route path="/first-apartment-tech" element={<FirstApartmentTech />} />
          {/* Round 4 tools */}
          <Route path="/tools/plain-english-translator" element={<PlainEnglishTranslator />} />
          <Route path="/tools/bill-decoder" element={<BillDecoder />} />
          <Route path="/tools/bill-negotiator" element={<BillNegotiator />} />
          <Route path="/tools/accessibility-profile-builder" element={<AccessibilityProfileBuilder />} />
          <Route path="/tools/tech-setup-cost-estimator" element={<TechSetupCostEstimator />} />
          <Route path="/tools/wifi-qr-generator" element={<WifiQrGenerator />} />
          <Route path="/tools/email-writer-helper" element={<EmailWriterHelper />} />
          <Route path="/tools/credit-report-reader" element={<CreditReportReader />} />
          <Route path="/tools/eob-decoder" element={<EobDecoder />} />
          <Route path="/tools/receipt-scanner-demo" element={<ReceiptScannerDemo />} />
          <Route path="/tools/child-app-safety-checker" element={<ChildAppSafetyChecker />} />
          <Route path="/tools/internet-speed-doctor" element={<InternetSpeedDoctor />} />
          <Route path="/tools/phone-first-aid" element={<PhoneFirstAid />} />
          <Route path="/tools/family-tech-planner" element={<FamilyTechPlanner />} />
          <Route path="/tools/safe-link-checker" element={<SafeLinkChecker />} />
          <Route path="/tools/is-this-real" element={<IsThisReal />} />
          <Route path="/tools/free-learning-hub" element={<FreeLearningHub />} />
          <Route path="/tools/free-resource-hub" element={<FreeResourceHub />} />
          <Route path="/tools/social-media-safety" element={<SocialMediaSafety />} />
          <Route path="/tools/fake-news-checker" element={<FakeNewsChecker />} />
          <Route path="/tools/senior-discount-finder" element={<SeniorDiscountFinder />} />
          <Route path="/tools/medicare-plan-chooser" element={<MedicarePlanChooser />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/tools/doc-browser" element={<DocBrowser />} />
          <Route path="/llm-knowledge-base" element={<LlmKnowledgeBase />} />
          <Route path="/tools/llm-knowledge-base" element={<LlmKnowledgeBase />} />
          <Route path="/keyboard-navigation" element={<KeyboardNavigation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/gift-session" element={<GiftSession />} />
          <Route path="/memory" element={<MemoryDashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tools/notification-decoder" element={<NotificationDecoder />} />
          <Route path="/tools/safe-call" element={<SafeCall />} />

          {/* ── New tools (April 2026 expansion) ── */}
          <Route path="/tools/scam-simulator" element={<ScamSimulator />} />
          <Route path="/tools/privacy-audit" element={<PrivacyAudit />} />
          <Route path="/tools/browser-safety-audit" element={<BrowserSafetyAudit />} />
          <Route path="/tools/streaming-calculator" element={<StreamingCalculator />} />
          <Route path="/calculators/internet-plan" element={<InternetPlanCalculator />} />
          <Route path="/calculators/subscriptions" element={<SubscriptionCostAggregator />} />
          <Route path="/tools/data-breach-checker" element={<DataBreachChecker />} />
          <Route path="/tools/new-phone-setup" element={<NewPhoneSetup />} />
          <Route path="/tools/subscription-tracker" element={<SubscriptionTracker />} />
          <Route path="/tools/internet-speed-advisor" element={<InternetSpeedAdvisor />} />
          <Route path="/tools/digital-cleanup" element={<DigitalCleanup />} />
          <Route path="/tools/device-setup-checklist" element={<DeviceSetupChecklist />} />
          <Route path="/tools/tech-glossary-quiz" element={<TechGlossaryQuiz />} />
          <Route path="/tools/digital-literacy-assessment" element={<DigitalLiteracyAssessment />} />
          <Route path="/tools/meeting-setup" element={<MeetingSetupHelper />} />
          <Route path="/tools/contact-backup" element={<ContactBackupTool />} />

          {/* OSINT.link-inspired tools */}
          <Route path="/tools/google-dork-generator" element={<GoogleDorkGenerator />} />
          <Route path="/tools/data-leak-dashboard" element={<DataLeakDashboard />} />
          <Route path="/tools/reverse-image-search" element={<ReverseImageSearch />} />
          <Route path="/tools/fact-check-toolkit" element={<FactCheckToolkit />} />

          {/* ── Tools expansion April 16 ── */}
          <Route path="/tools/password-generator" element={<PasswordGenerator />} />
          <Route path="/tools/screen-time" element={<ScreenTimeAnalyzer />} />
          <Route path="/tools/email-security-check" element={<EmailSecurityCheck />} />
          <Route path="/tools/app-cleanup" element={<AppCleanup />} />
          <Route path="/tools/tech-budget" element={<TechBudgetPlanner />} />
          <Route path="/tools/device-age-checker" element={<DeviceAgeChecker />} />
          <Route path="/tools/trade-in-estimator" element={<DeviceTradeInEstimator />} />
          <Route path="/tools/parental-controls-wizard" element={<ParentalControlsWizard />} />
          <Route path="/tools/home-network-map" element={<HomeNetworkMap />} />
          <Route path="/tools/wifi-password-finder" element={<WifiPasswordFinder />} />
          <Route path="/tools/tech-emergency-kit" element={<TechEmergencyKit />} />
          <Route path="/tools/tech-break-reminder" element={<TechBreakReminder />} />
          <Route path="/weekly-tips" element={<WeeklyTips />} />
          <Route path="/this-week" element={<WeeklyTips />} />

          {/* Master Plan tools */}
          <Route path="/tools/router-setup-wizard" element={<RouterSetupWizard />} />
          <Route path="/tools/smart-tv-setup" element={<SmartTvSetupWizard />} />
          <Route path="/tools/voice-assistant-setup" element={<VoiceAssistantSetup />} />
          <Route path="/tools/voice-commands" element={<VoiceCommandCheatSheet />} />
          <Route path="/tools/library-tech-helper" element={<LibraryTechHelper />} />
          <Route path="/tools/local-library-finder" element={<LocalLibraryFinder />} />
          <Route path="/tools/podcast-directory" element={<PodcastDirectory />} />
          <Route path="/tools/tech-gift-guide" element={<TechGiftGuideTool />} />
          <Route path="/tools/my-first-smartphone" element={<MyFirstSmartphone />} />
          <Route path="/tools/ipad-for-seniors" element={<IpadForSeniors />} />
          <Route path="/tools/apple-watch-setup" element={<AppleWatchSetup />} />
          <Route path="/tools/computer-cleanup-wizard" element={<ComputerCleanupWizard />} />
          <Route path="/tools/phone-cleanup" element={<PhoneCleanupWizard />} />
          <Route path="/tools/digital-footprint-scanner" element={<DigitalFootprintScanner />} />
          <Route path="/tools/internet-plan-comparator" element={<InternetPlanComparator />} />
          <Route path="/tools/scam-iq-test" element={<ScamIqTest />} />
          <Route path="/quizzes/scam-iq" element={<ScamIqQuiz />} />
          <Route path="/quizzes/tech-confidence" element={<TechConfidenceQuiz />} />
          <Route path="/tools/accessibility-needs-finder" element={<AccessibilityNeedsFinder />} />
          <Route path="/tools/file-organizer-guide" element={<FileOrganizerGuide />} />
          <Route path="/tools/scam-phone-database" element={<ScamPhoneDatabase />} />
          <Route path="/tools/medication-reminder-setup" element={<MedicationReminderSetup />} />
          <Route path="/tools/home-security-camera-setup" element={<HomeSecurityCameraSetup />} />
          <Route path="/tools/smart-thermostat-setup" element={<SmartThermostatSetup />} />
          <Route path="/tools/hearing-aid-tech-helper" element={<HearingAidTechHelper />} />
          <Route path="/tools/low-vision-tech-hub" element={<LowVisionTechHub />} />
          <Route path="/tools/audio-tutorials" element={<AudioTutorialHub />} />
          <Route path="/tools/screen-reader-starter" element={<ScreenReaderStarter />} />
          <Route path="/tools/remote-control-decoder" element={<RemoteControlDecoder />} />
          <Route path="/tools/rideshare-setup" element={<RideshareSetup />} />
          <Route path="/tools/banking-app-setup" element={<BankingAppSetup />} />
          <Route path="/tools/video-call-helper" element={<VideoCallHelper />} />
          <Route path="/tools/government-benefits-portal" element={<GovernmentBenefitsPortal />} />
          <Route path="/tools/state-benefits-finder" element={<StateBenefitsFinder />} />
          <Route path="/tools/dmv-online-helper" element={<DmvOnlineHelper />} />

          {/* Practice Mode — simulated phone interface for fearless practice */}
          <Route path="/tools/practice-mode" element={<PracticeMode />} />

          {/* Settings Finder — "where's that setting on my device?" lookup */}
          <Route path="/tools/settings-finder" element={<SettingsFinder />} />

          {/* Email Spam Manager — guide-tool hybrid for inbox cleanup */}
          <Route path="/tools/email-spam-manager" element={<EmailSpamManager />} />

          {/* Streaming Service Picker — senior-friendly recommender for cord-cutters */}
          <Route path="/tools/streaming-service-picker" element={<StreamingServicePicker />} />

          {/* Refund & Return Helper — step-by-step walkthroughs for getting money back */}
          <Route path="/tools/refund-and-return-helper" element={<RefundAndReturnHelper />} />

          {/* Kitchen Tech Helper — setup & daily-use guide for 10 kitchen appliances */}
          <Route path="/tools/kitchen-tech-helper" element={<KitchenTechHelper />} />

          {/* State AG Scam Lookup — per-state consumer protection + federal agency directory */}
          <Route path="/tools/state-ag-scam-lookup" element={<StateAgScamLookup />} />

          {/* Toolkits — hub pages that group a situation into actionable sections */}
          <Route path="/toolkits/caregiver" element={<CaregiverToolkit />} />

          {/* Practice simulators — branching interactive safety practice */}
          <Route path="/practice/suspicious-call" element={<SuspiciousCallSim />} />
          <Route path="/practice/vocab-flashcards" element={<VocabFlashcards />} />

          {/* Site Index — human-readable sitemap of every page on TekSure */}
          <Route path="/site-index" element={<SiteIndex />} />

          {/* Volunteer — invite people to help grow TekSure */}
          <Route path="/volunteer" element={<Volunteer />} />

          {/* Printables — fillable, printable one-page templates */}
          <Route path="/printables/weekly-newsletter" element={<WeeklyNewsletterTemplate />} />

          {/* ── April 2026 expansion: new tools ─────────────────────────── */}
          <Route path="/tools/scam-message-decoder"     element={<ScamMessageDecoder />} />
          <Route path="/tools/password-health"          element={<PasswordHealth />} />
          <Route path="/tools/device-retirement-helper" element={<DeviceRetirementHelper />} />
          <Route path="/tools/robocall-blocker-setup"   element={<RobocallBlockerSetup />} />
          <Route path="/tools/scam-witness-statement"   element={<ScamWitnessStatement />} />
          <Route path="/tools/tech-cheatsheet-generator" element={<TechCheatsheetGenerator />} />
          <Route path="/tools/family-tech-roundtable"   element={<FamilyTechRoundtable />} />

          {/* ── April 2026 expansion: new top-level hubs ────────────────── */}
          <Route path="/grandparent-device-setup" element={<GrandparentDeviceSetup />} />
          <Route path="/account-after-loss"       element={<AccountAfterLoss />} />
          <Route path="/low-vision-setup"         element={<LowVisionSetup />} />
          <Route path="/daily-tip"                element={<DailyTip />} />

          {/* ── April 2026 expansion (round 2) ──────────────────────────── */}
          <Route path="/tools/tech-will-builder"          element={<TechWillBuilder />} />
          <Route path="/tools/update-decision-helper"     element={<UpdateDecisionHelper />} />
          <Route path="/tools/hearing-aid-pairing-wizard" element={<HearingAidPairingWizard />} />
          <Route path="/start"                            element={<Start />} />
          <Route path="/tools/id-theft-recovery"          element={<IdTheftRecovery />} />
          <Route path="/tools/email-migration"            element={<EmailMigration />} />
          <Route path="/tools/fall-detection-setup"       element={<FallDetectionSetup />} />
          <Route path="/tools/travel-tech-checklist"      element={<TravelTechChecklist />} />
          <Route path="/tools/smart-home-starter"         element={<SmartHomeStarter />} />
          <Route path="/tools/hospital-discharge-kit"     element={<HospitalDischargeKit />} />
          <Route path="/tools/ai-image-spotter"            element={<AiImageSpotter />} />

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
                    {/* Site-wide interactive mesh wallpaper — drifts on its own,
                        leans toward the cursor, ripples on click. Mounted before
                        page content so it sits behind every route. */}
                    <MeshGradientBackground />
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
