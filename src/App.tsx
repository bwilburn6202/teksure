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
const InternetSpeedAdvisor   = lazy(() => import("./pages/tools/InternetSpeedAdvisor"));
const DigitalCleanup         = lazy(() => import("./pages/tools/DigitalCleanup"));
const DeviceSetupChecklist   = lazy(() => import("./pages/tools/DeviceSetupChecklist"));
const TechGlossaryQuiz       = lazy(() => import("./pages/tools/TechGlossaryQuiz"));
const RobocallBlocker        = lazy(() => import("./pages/tools/RobocallBlocker"));
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

// ── Cycle 1 (April 29 2026) — net-new tools ──
const PhishingLinkInspector  = lazy(() => import("./pages/tools/PhishingLinkInspector"));
const TwoFactorCoach         = lazy(() => import("./pages/tools/TwoFactorCoach"));
const SafeWordKit            = lazy(() => import("./pages/tools/SafeWordKit"));
const PrintFromPhoneHelper   = lazy(() => import("./pages/tools/PrintFromPhoneHelper"));
const ChargerCableIdentifier = lazy(() => import("./pages/tools/ChargerCableIdentifier"));

// ── Cycle 2 (April 29 2026) — net-new tools ──
const QrScamScanner          = lazy(() => import("./pages/tools/QrScamScanner"));
const BatteryHealthChecker   = lazy(() => import("./pages/tools/BatteryHealthChecker"));
const AppPermissionsReset    = lazy(() => import("./pages/tools/AppPermissionsReset"));
const EsimSetupGuide         = lazy(() => import("./pages/tools/EsimSetupGuide"));
const PhoneHotspotHelper     = lazy(() => import("./pages/tools/PhoneHotspotHelper"));

// ── Cycle 3 (April 29 2026) — net-new tools ──
const CreditFreezeCoach      = lazy(() => import("./pages/tools/CreditFreezeCoach"));
const TollTextScamDecoder    = lazy(() => import("./pages/tools/TollTextScamDecoder"));
const GiftCardScamDefense    = lazy(() => import("./pages/tools/GiftCardScamDefense"));
const PaymentAppSafety       = lazy(() => import("./pages/tools/PaymentAppSafety"));
const HotelWifiSafety        = lazy(() => import("./pages/tools/HotelWifiSafety"));

// ── Cycle 4 (April 29 2026) — net-new tools ──
const BreachResponseChecklist = lazy(() => import("./pages/tools/BreachResponseChecklist"));
const AirTagStalkingDefense  = lazy(() => import("./pages/tools/AirTagStalkingDefense"));
const UspsInformedDelivery   = lazy(() => import("./pages/tools/UspsInformedDelivery"));
const CallerIdVerification   = lazy(() => import("./pages/tools/CallerIdVerification"));
const PublicChargingSafety   = lazy(() => import("./pages/tools/PublicChargingSafety"));

// ── Cycle 5 (April 29 2026) — health/accessibility ──
const MedicalIdSetup         = lazy(() => import("./pages/tools/MedicalIdSetup"));
const LiveCaptionsSetup      = lazy(() => import("./pages/tools/LiveCaptionsSetup"));
const BigTextDisplayCoach    = lazy(() => import("./pages/tools/BigTextDisplayCoach"));
const MyChartHelper          = lazy(() => import("./pages/tools/MyChartHelper"));
const CastPhoneToTv          = lazy(() => import("./pages/tools/CastPhoneToTv"));

// ── Cycle 6 (April 29 2026) — money & daily life ──
const TapToPaySetup          = lazy(() => import("./pages/tools/TapToPaySetup"));
const ScreenshotCoach        = lazy(() => import("./pages/tools/ScreenshotCoach"));
const AirDropHelper          = lazy(() => import("./pages/tools/AirDropHelper"));
const MarketplaceSafety      = lazy(() => import("./pages/tools/MarketplaceSafety"));
const BigPrintTipCalculator  = lazy(() => import("./pages/tools/BigPrintTipCalculator"));

// ── Cycle 7 (April 29 2026) — communication & SOS ──
const GroupTextCoach         = lazy(() => import("./pages/tools/GroupTextCoach"));
const FocusModeCoach         = lazy(() => import("./pages/tools/FocusModeCoach"));
const BlockSpamCallsTexts    = lazy(() => import("./pages/tools/BlockSpamCallsTexts"));
const RemoteHelpSetup        = lazy(() => import("./pages/tools/RemoteHelpSetup"));
const EmergencySosSetup      = lazy(() => import("./pages/tools/EmergencySosSetup"));

// ── Cycle 8 (April 29 2026) — caregiver / legacy / language ──
const DigitalLegacySetup     = lazy(() => import("./pages/tools/DigitalLegacySetup"));
const CaregiverPhoneSetup    = lazy(() => import("./pages/tools/CaregiverPhoneSetup"));
const PhoneSwitchHelper      = lazy(() => import("./pages/tools/PhoneSwitchHelper"));
const TranslationAppCoach    = lazy(() => import("./pages/tools/TranslationAppCoach"));
const CaptionedPhoneService  = lazy(() => import("./pages/tools/CaptionedPhoneService"));

// ── Cycle 9 (April 29 2026) — entertainment & home network ──
const FreeStreamingServices  = lazy(() => import("./pages/tools/FreeStreamingServices"));
const AntennaTvSetup         = lazy(() => import("./pages/tools/AntennaTvSetup"));
const LibraryAppHelper       = lazy(() => import("./pages/tools/LibraryAppHelper"));
const RideshareCoach         = lazy(() => import("./pages/tools/RideshareCoach"));
const MeshWifiPicker         = lazy(() => import("./pages/tools/MeshWifiPicker"));

// ── Cycle 10 (April 29 2026) — AI / photos / docs / govt ──
const AiBeginnerCoach        = lazy(() => import("./pages/tools/AiBeginnerCoach"));
const OldPhotoRestore        = lazy(() => import("./pages/tools/OldPhotoRestore"));
const DigitizeOldMedia       = lazy(() => import("./pages/tools/DigitizeOldMedia"));
const ESignCoach             = lazy(() => import("./pages/tools/ESignCoach"));
const LoginGovIdMeHelper     = lazy(() => import("./pages/tools/LoginGovIdMeHelper"));

// ── Cycle 11 (April 29 2026) — scams + tablet + basics ──
const RomanceScamDefense     = lazy(() => import("./pages/tools/RomanceScamDefense"));
const PigButcheringDefense   = lazy(() => import("./pages/tools/PigButcheringDefense"));
const CharityVettingTool     = lazy(() => import("./pages/tools/CharityVettingTool"));
const SeniorTabletPicker     = lazy(() => import("./pages/tools/SeniorTabletPicker"));
const CopyPasteCoach         = lazy(() => import("./pages/tools/CopyPasteCoach"));

// ── Cycle 12 (April 29 2026) — cleanup, delivery, video calls ──
const TechSupportPopupDefense = lazy(() => import("./pages/tools/TechSupportPopupDefense"));
const FreeUpPhoneStorage     = lazy(() => import("./pages/tools/FreeUpPhoneStorage"));
const ComputerCleanupCoach   = lazy(() => import("./pages/tools/ComputerCleanupCoach"));
const GroceryDeliveryCoach   = lazy(() => import("./pages/tools/GroceryDeliveryCoach"));
const VideoCallTipsForFamily = lazy(() => import("./pages/tools/VideoCallTipsForFamily"));

// ── Cycle 13 (April 29 2026) — calendar / news / wellness / weather / pets ──
const FamilyCalendarSharing  = lazy(() => import("./pages/tools/FamilyCalendarSharing"));
const NewsAppCurator         = lazy(() => import("./pages/tools/NewsAppCurator"));
const MeditationAppPicker    = lazy(() => import("./pages/tools/MeditationAppPicker"));
const WeatherAlertPicker     = lazy(() => import("./pages/tools/WeatherAlertPicker"));
const PetTechCoach           = lazy(() => import("./pages/tools/PetTechCoach"));

// ── Cycle 14 (April 29 2026) — travel / maps / dining / discounts / Prime ──
const TravelTechPack         = lazy(() => import("./pages/tools/TravelTechPack"));
const MapsGpsCoach           = lazy(() => import("./pages/tools/MapsGpsCoach"));
const RestaurantReservationCoach = lazy(() => import("./pages/tools/RestaurantReservationCoach"));
const SeniorDiscountApps     = lazy(() => import("./pages/tools/SeniorDiscountApps"));
const AmazonPrimeMastery     = lazy(() => import("./pages/tools/AmazonPrimeMastery"));

// ── Cycle 15 (April 29 2026) — finance & retirement ──
const BudgetAppPicker        = lazy(() => import("./pages/tools/BudgetAppPicker"));
const RmdExplainer           = lazy(() => import("./pages/tools/RmdExplainer"));
const FreeTaxFilingCoach     = lazy(() => import("./pages/tools/FreeTaxFilingCoach"));
const MedicarePartDPicker    = lazy(() => import("./pages/tools/MedicarePartDPicker"));
const AutoInsuranceComparison = lazy(() => import("./pages/tools/AutoInsuranceComparison"));

// ── Cycle 16 (April 29 2026) — music/photos/scan/audio/home screen ──
const MusicAppPicker         = lazy(() => import("./pages/tools/MusicAppPicker"));
const PhotoBookCreator       = lazy(() => import("./pages/tools/PhotoBookCreator"));
const DocumentScannerCoach   = lazy(() => import("./pages/tools/DocumentScannerCoach"));
const WirelessEarbudPicker   = lazy(() => import("./pages/tools/WirelessEarbudPicker"));
const HomeScreenOrganizer    = lazy(() => import("./pages/tools/HomeScreenOrganizer"));

// ── Cycle 17 (April 29 2026) — nature/cooking/watch ──
const PlantIdApps            = lazy(() => import("./pages/tools/PlantIdApps"));
const BirdIdMerlin           = lazy(() => import("./pages/tools/BirdIdMerlin"));
const StargazingApps         = lazy(() => import("./pages/tools/StargazingApps"));
const RecipeMealApps         = lazy(() => import("./pages/tools/RecipeMealApps"));
const AppleWatchHealthCoach  = lazy(() => import("./pages/tools/AppleWatchHealthCoach"));

// ── Cycle 18 (April 29 2026) — comms / smart home / health ──
const WhatsAppCoach          = lazy(() => import("./pages/tools/WhatsAppCoach"));
const SmartDoorbellPicker    = lazy(() => import("./pages/tools/SmartDoorbellPicker"));
const CgmCoach               = lazy(() => import("./pages/tools/CgmCoach"));
const OnlineHearingTest      = lazy(() => import("./pages/tools/OnlineHearingTest"));
const SkypeReplacement       = lazy(() => import("./pages/tools/SkypeReplacement"));

// ── Cycle 19 (April 29 2026) — brain/genealogy/frame/sound/volunteer ──
const BrainTrainingApps      = lazy(() => import("./pages/tools/BrainTrainingApps"));
const GenealogyApps          = lazy(() => import("./pages/tools/GenealogyApps"));
const DigitalPhotoFramePicker = lazy(() => import("./pages/tools/DigitalPhotoFramePicker"));
const TvSoundBarPicker       = lazy(() => import("./pages/tools/TvSoundBarPicker"));
const VolunteerApps          = lazy(() => import("./pages/tools/VolunteerApps"));

// ── Cycle 20 (April 29 2026) — cloud/passwords/speed/browser/learning ──
const CloudStoragePicker     = lazy(() => import("./pages/tools/CloudStoragePicker"));
const PasswordManagerPicker  = lazy(() => import("./pages/tools/PasswordManagerPicker"));
const InternetSpeedTestCoach = lazy(() => import("./pages/tools/InternetSpeedTestCoach"));
const BrowserPicker          = lazy(() => import("./pages/tools/BrowserPicker"));
const OnlineLearningPicker   = lazy(() => import("./pages/tools/OnlineLearningPicker"));

// ── Cycle 21 (April 29 2026) — podcasts/outdoors/repair ──
const PodcastAppPicker       = lazy(() => import("./pages/tools/PodcastAppPicker"));
const HikingTrailApps        = lazy(() => import("./pages/tools/HikingTrailApps"));
const GardeningApps          = lazy(() => import("./pages/tools/GardeningApps"));
const RvCampingApps          = lazy(() => import("./pages/tools/RvCampingApps"));
const PhoneRepairCoach       = lazy(() => import("./pages/tools/PhoneRepairCoach"));

// ── Cycle 22 (April 29 2026) — scams/contractors/cell/handyman/jobs ──
const DoorToDoorScamDefense  = lazy(() => import("./pages/tools/DoorToDoorScamDefense"));
const ContractorVetting      = lazy(() => import("./pages/tools/ContractorVetting"));
const SeniorCellPlanPicker   = lazy(() => import("./pages/tools/SeniorCellPlanPicker"));
const HandymanServiceApps    = lazy(() => import("./pages/tools/HandymanServiceApps"));
const RetirementJobsApps     = lazy(() => import("./pages/tools/RetirementJobsApps"));

// ── Cycle 23 (April 29 2026) — privacy/banking/travel/brokerage/screen ──
const FacebookPrivacyCoach   = lazy(() => import("./pages/tools/FacebookPrivacyCoach"));
const MobileBankingCoach     = lazy(() => import("./pages/tools/MobileBankingCoach"));
const InternationalTravelSim = lazy(() => import("./pages/tools/InternationalTravelSim"));
const BrokeragePicker        = lazy(() => import("./pages/tools/BrokeragePicker"));
const AdultScreenTimeCoach   = lazy(() => import("./pages/tools/AdultScreenTimeCoach"));

// ── Cycle 24 (April 29 2026) — backup/photo-org/medical/bills/journal ──
const BackupStrategy         = lazy(() => import("./pages/tools/BackupStrategy"));
const PhotoOrganizationCoach = lazy(() => import("./pages/tools/PhotoOrganizationCoach"));
const MedicalRecordsOrganizer = lazy(() => import("./pages/tools/MedicalRecordsOrganizer"));
const BillsPaperlessOrganizer = lazy(() => import("./pages/tools/BillsPaperlessOrganizer"));
const JournalingApps         = lazy(() => import("./pages/tools/JournalingApps"));

// ── Cycle 25 (April 29 2026) — caregiving / accessibility / health ──
const CaregiverCoordinationApps = lazy(() => import("./pages/tools/CaregiverCoordinationApps"));
const VoiceControlAccessibility = lazy(() => import("./pages/tools/VoiceControlAccessibility"));
const MedicalAlertPicker     = lazy(() => import("./pages/tools/MedicalAlertPicker"));
const TelehealthVisitCoach   = lazy(() => import("./pages/tools/TelehealthVisitCoach"));
const OnlinePharmacyCoach    = lazy(() => import("./pages/tools/OnlinePharmacyCoach"));

// ── Cycle 26 (April 29 2026) — kitchen / inventory / privacy / sell / utilities ──
const SmartCookingTools      = lazy(() => import("./pages/tools/SmartCookingTools"));
const HomeInventoryApp       = lazy(() => import("./pages/tools/HomeInventoryApp"));
const HiddenCameraDetector   = lazy(() => import("./pages/tools/HiddenCameraDetector"));
const SellOnlineCoach        = lazy(() => import("./pages/tools/SellOnlineCoach"));
const UtilityBillReduction   = lazy(() => import("./pages/tools/UtilityBillReduction"));

// ── Cycle 27 (April 29 2026) — books/reading/ergonomics/notes ──
const AudiobookAppPicker     = lazy(() => import("./pages/tools/AudiobookAppPicker"));
const ReadingAppPicker       = lazy(() => import("./pages/tools/ReadingAppPicker"));
const BookTrackingApps       = lazy(() => import("./pages/tools/BookTrackingApps"));
const ErgonomicComputerSetup = lazy(() => import("./pages/tools/ErgonomicComputerSetup"));
const NotesAppPicker         = lazy(() => import("./pages/tools/NotesAppPicker"));

// ── Cycle 28 (April 29 2026) — driving/sleep/power/disaster/grandkids ──
const DefensiveDrivingCoach  = lazy(() => import("./pages/tools/DefensiveDrivingCoach"));
const SleepTrackingApps      = lazy(() => import("./pages/tools/SleepTrackingApps"));
const PowerBankPicker        = lazy(() => import("./pages/tools/PowerBankPicker"));
const DisasterPrepApps       = lazy(() => import("./pages/tools/DisasterPrepApps"));
const ChildproofForVisits    = lazy(() => import("./pages/tools/ChildproofForVisits"));

// ── Cycle 29 (April 29 2026) — passkeys/antivirus/recovery/shortcuts/tremors ──
const PasskeysCoach          = lazy(() => import("./pages/tools/PasskeysCoach"));
const AntivirusPicker        = lazy(() => import("./pages/tools/AntivirusPicker"));
const AppleGoogleAccountRecovery = lazy(() => import("./pages/tools/AppleGoogleAccountRecovery"));
const KeyboardShortcutsCheatsheet = lazy(() => import("./pages/tools/KeyboardShortcutsCheatsheet"));
const TremorPhoneSetup       = lazy(() => import("./pages/tools/TremorPhoneSetup"));

// ── Cycle 30 (April 29 2026) — car/EV/used cars/flights/window mgmt ──
const CarPlayAndroidAuto     = lazy(() => import("./pages/tools/CarPlayAndroidAuto"));
const EvChargingApps         = lazy(() => import("./pages/tools/EvChargingApps"));
const UsedCarResearchApps    = lazy(() => import("./pages/tools/UsedCarResearchApps"));
const FlightSearchApps       = lazy(() => import("./pages/tools/FlightSearchApps"));
const WindowManagementCoach  = lazy(() => import("./pages/tools/WindowManagementCoach"));

// ── Cycle 31 (April 29 2026) — diet/meds/exercise/fitness/cognitive ──
const CalorieTrackingApps    = lazy(() => import("./pages/tools/CalorieTrackingApps"));
const MedicationReminderApps = lazy(() => import("./pages/tools/MedicationReminderApps"));
const SeniorExerciseApps     = lazy(() => import("./pages/tools/SeniorExerciseApps"));
const HomeFitnessSubscriptions = lazy(() => import("./pages/tools/HomeFitnessSubscriptions"));
const CognitiveSelfTest      = lazy(() => import("./pages/tools/CognitiveSelfTest"));

// ── Cycle 32 (April 29 2026) — homework/tutoring/creative/cameras/docs ──
const HelpGrandkidsHomework  = lazy(() => import("./pages/tools/HelpGrandkidsHomework"));
const OnlineTutoringApps     = lazy(() => import("./pages/tools/OnlineTutoringApps"));
const DrawingPhotoEditingApps = lazy(() => import("./pages/tools/DrawingPhotoEditingApps"));
const DigitalCameraPicker    = lazy(() => import("./pages/tools/DigitalCameraPicker"));
const DocumentaryStreaming   = lazy(() => import("./pages/tools/DocumentaryStreaming"));

// ── Cycle 33 (April 29 2026) — vaccines/drugs/symptoms/doctors ──
const AdultVaccineSchedule   = lazy(() => import("./pages/tools/AdultVaccineSchedule"));
const DrugInteractionChecker = lazy(() => import("./pages/tools/DrugInteractionChecker"));
const PillIdentifierApp      = lazy(() => import("./pages/tools/PillIdentifierApp"));
const SymptomCheckerApps     = lazy(() => import("./pages/tools/SymptomCheckerApps"));
const FindADoctorApps        = lazy(() => import("./pages/tools/FindADoctorApps"));

// ── Cycle 34 (April 29 2026) — wills/directives/savings/529/notary ──
const WillEstateOnline       = lazy(() => import("./pages/tools/WillEstateOnline"));
const AdvanceDirectiveCoach  = lazy(() => import("./pages/tools/AdvanceDirectiveCoach"));
const HighYieldSavingsAndIBonds = lazy(() => import("./pages/tools/HighYieldSavingsAndIBonds"));
const CollegeSavingsForGrandkids = lazy(() => import("./pages/tools/CollegeSavingsForGrandkids"));
const OnlineNotaryCoach      = lazy(() => import("./pages/tools/OnlineNotaryCoach"));

// ── Cycle 35 (April 29 2026) — Social Security/Medicare/LTC/reverse mortgage/pension ──
const WhenToTakeSocialSecurity = lazy(() => import("./pages/tools/WhenToTakeSocialSecurity"));
const MedigapVsAdvantage     = lazy(() => import("./pages/tools/MedigapVsAdvantage"));
const LongTermCarePlanning   = lazy(() => import("./pages/tools/LongTermCarePlanning"));
const ReverseMortgageExplained = lazy(() => import("./pages/tools/ReverseMortgageExplained"));
const PensionLumpSumDecision = lazy(() => import("./pages/tools/PensionLumpSumDecision"));

// ── Cycle 36 (April 29 2026) — funeral/hospice/therapy/widow/downsize ──
const FuneralPlanningCoach   = lazy(() => import("./pages/tools/FuneralPlanningCoach"));
const HospicePalliativeCoach = lazy(() => import("./pages/tools/HospicePalliativeCoach"));
const OnlineTherapyApps      = lazy(() => import("./pages/tools/OnlineTherapyApps"));
const NewlyWidowedChecklist  = lazy(() => import("./pages/tools/NewlyWidowedChecklist"));
const SeniorDownsizingCoach  = lazy(() => import("./pages/tools/SeniorDownsizingCoach"));

// ── Cycle 37 (April 29 2026) — smart display/robot vac/health tests/scale/zoom host ──
const SmartDisplayForGrandparents = lazy(() => import("./pages/tools/SmartDisplayForGrandparents"));
const RobotVacuumCoach       = lazy(() => import("./pages/tools/RobotVacuumCoach"));
const AtHomeHealthTests      = lazy(() => import("./pages/tools/AtHomeHealthTests"));
const SmartScaleBpCuffPicker = lazy(() => import("./pages/tools/SmartScaleBpCuffPicker"));
const VideoMeetingHostCoach  = lazy(() => import("./pages/tools/VideoMeetingHostCoach"));

// ── Cycle 38 (April 29 2026) — accounts/privacy/search/VA/SSDI ──
const AppleIdGoogleAccountSetup = lazy(() => import("./pages/tools/AppleIdGoogleAccountSetup"));
const PrivacyEmailPicker     = lazy(() => import("./pages/tools/PrivacyEmailPicker"));
const BetterWebSearchCoach   = lazy(() => import("./pages/tools/BetterWebSearchCoach"));
const VaBenefitsAndApp       = lazy(() => import("./pages/tools/VaBenefitsAndApp"));
const SsdiVsSsiCoach         = lazy(() => import("./pages/tools/SsdiVsSsiCoach"));

// ── Cycle 39 (April 29 2026) — VPN/encryption/cyber/remote ──
const VpnPicker              = lazy(() => import("./pages/tools/VpnPicker"));
const DiskEncryptionCoach    = lazy(() => import("./pages/tools/DiskEncryptionCoach"));
const CyberInsuranceExplainer = lazy(() => import("./pages/tools/CyberInsuranceExplainer"));
const UniversalRemotePicker  = lazy(() => import("./pages/tools/UniversalRemotePicker"));
const LostTvRemoteCoach      = lazy(() => import("./pages/tools/LostTvRemoteCoach"));

// ── Cycle 40 (April 29 2026) — taxes/SNAP/eldercare/lifeline/HSA-FSA ──
const SeniorTaxCredits       = lazy(() => import("./pages/tools/SeniorTaxCredits"));
const SeniorSnapAndFood      = lazy(() => import("./pages/tools/SeniorSnapAndFood"));
const EldercareLocator       = lazy(() => import("./pages/tools/EldercareLocator"));
const LifelineInternetCoach  = lazy(() => import("./pages/tools/LifelineInternetCoach"));
const HsaFsaCoach            = lazy(() => import("./pages/tools/HsaFsaCoach"));

// ── Cycle 41 (April 29 2026) — laptop/phone/grandkid safety/apps/console ──
const SeniorLaptopPick       = lazy(() => import("./pages/tools/SeniorLaptopPick"));
const SeniorPhonePick        = lazy(() => import("./pages/tools/SeniorPhonePick"));
const GrandkidInternetSafety = lazy(() => import("./pages/tools/GrandkidInternetSafety"));
const AppsGrandkidsUseExplained = lazy(() => import("./pages/tools/AppsGrandkidsUseExplained"));
const GameConsoleGiftGuide   = lazy(() => import("./pages/tools/GameConsoleGiftGuide"));

// ── Cycle 42 (April 29 2026) — AI/resume/smart home ──
const AiComparisonCoach      = lazy(() => import("./pages/tools/AiComparisonCoach"));
const AiImageGenerators      = lazy(() => import("./pages/tools/AiImageGenerators"));
const ResumeBuilderApps      = lazy(() => import("./pages/tools/ResumeBuilderApps"));
const SmartHomePlatformPick  = lazy(() => import("./pages/tools/SmartHomePlatformPick"));
const SmartBulbPicker        = lazy(() => import("./pages/tools/SmartBulbPicker"));

// ── Cycle 43 (April 29 2026) — printer/fax/cam/weather/walk ──
const SeniorPrinterPicker    = lazy(() => import("./pages/tools/SeniorPrinterPicker"));
const OnlineFaxCoach         = lazy(() => import("./pages/tools/OnlineFaxCoach"));
const OutdoorSecurityCamera  = lazy(() => import("./pages/tools/OutdoorSecurityCamera"));
const HomeWeatherStation     = lazy(() => import("./pages/tools/HomeWeatherStation"));
const WalkingPadStandingDesk = lazy(() => import("./pages/tools/WalkingPadStandingDesk"));

// ── Cycle 44 (April 29 2026) — car/mileage/subs/dispute/refi ──
const CarMaintenanceTracker  = lazy(() => import("./pages/tools/CarMaintenanceTracker"));
const MileageTracker         = lazy(() => import("./pages/tools/MileageTracker"));
const SubscriptionAuditCoach = lazy(() => import("./pages/tools/SubscriptionAuditCoach"));
const DisputeChargeCoach     = lazy(() => import("./pages/tools/DisputeChargeCoach"));
const MortgageRefinanceCoach = lazy(() => import("./pages/tools/MortgageRefinanceCoach"));

// ── Cycle 45 (April 29 2026) — retirement accounts/withdrawal/bonds/index ──
const RetirementAccountTypes = lazy(() => import("./pages/tools/RetirementAccountTypes"));
const Plan401kRolloverCoach  = lazy(() => import("./pages/tools/Plan401kRolloverCoach"));
const SafeWithdrawalRate     = lazy(() => import("./pages/tools/SafeWithdrawalRate"));
const BondLadderCoach        = lazy(() => import("./pages/tools/BondLadderCoach"));
const IndexFundCoach         = lazy(() => import("./pages/tools/IndexFundCoach"));

// ── Cycle 46 (April 29 2026) — passport/disposal/erase/photos/in-person ──
const PassportRenewalOnline  = lazy(() => import("./pages/tools/PassportRenewalOnline"));
const OldDeviceDisposal      = lazy(() => import("./pages/tools/OldDeviceDisposal"));
const EraseOldPhone          = lazy(() => import("./pages/tools/EraseOldPhone"));
const PhotoPrintAndCards     = lazy(() => import("./pages/tools/PhotoPrintAndCards"));
const InPersonTechHelp       = lazy(() => import("./pages/tools/InPersonTechHelp"));

// ── Cycle 47 (April 29 2026) — dental/vision/deepfake/genealogy/citizen ──
const DentalInsuranceCoach   = lazy(() => import("./pages/tools/DentalInsuranceCoach"));
const VisionInsuranceCoach   = lazy(() => import("./pages/tools/VisionInsuranceCoach"));
const DeepfakeSpotter        = lazy(() => import("./pages/tools/DeepfakeSpotter"));
const GenealogyDeepDive      = lazy(() => import("./pages/tools/GenealogyDeepDive"));
const CitizenEmergencyApp    = lazy(() => import("./pages/tools/CitizenEmergencyApp"));

// ── Cycle 48 (April 29 2026) — donate/mail/311/energy/solar ──
const DonationPickup         = lazy(() => import("./pages/tools/DonationPickup"));
const UspsMailForwardHold    = lazy(() => import("./pages/tools/UspsMailForwardHold"));
const Local311Apps           = lazy(() => import("./pages/tools/Local311Apps"));
const HomeEnergyMonitor      = lazy(() => import("./pages/tools/HomeEnergyMonitor"));
const SolarPanelDecisionCoach = lazy(() => import("./pages/tools/SolarPanelDecisionCoach"));

// ── Cycle 49 (April 29 2026) — air/smoke/water/vacuum/recalls ──
const IndoorAirQuality       = lazy(() => import("./pages/tools/IndoorAirQuality"));
const SmokeCoDetectorMaintenance = lazy(() => import("./pages/tools/SmokeCoDetectorMaintenance"));
const WaterFilterPicker      = lazy(() => import("./pages/tools/WaterFilterPicker"));
const SeniorVacuumPicker     = lazy(() => import("./pages/tools/SeniorVacuumPicker"));
const RecallChecker          = lazy(() => import("./pages/tools/RecallChecker"));

// ── Cycle 50 (April 29 2026) — TV/speakers/vinyl/sports/golf ──
const SeniorTvBuyingGuide    = lazy(() => import("./pages/tools/SeniorTvBuyingGuide"));
const BluetoothSpeakerPicker = lazy(() => import("./pages/tools/BluetoothSpeakerPicker"));
const VinylTurntableCoach    = lazy(() => import("./pages/tools/VinylTurntableCoach"));
const SportsStreamingPicker  = lazy(() => import("./pages/tools/SportsStreamingPicker"));
const GolfApps               = lazy(() => import("./pages/tools/GolfApps"));

// ── Cycle 51 (April 29 2026) — fishing/pickleball/games/wine/cocktail ──
const FishingBoatingApps     = lazy(() => import("./pages/tools/FishingBoatingApps"));
const PickleballTennisApps   = lazy(() => import("./pages/tools/PickleballTennisApps"));
const OnlineBoardGames       = lazy(() => import("./pages/tools/OnlineBoardGames"));
const WineApps               = lazy(() => import("./pages/tools/WineApps"));
const CocktailCoffeeApps     = lazy(() => import("./pages/tools/CocktailCoffeeApps"));

// ── Cycle 52 (April 29 2026) — security/thermostat/lock/leak/insurance ──
const HomeSecuritySystemPick = lazy(() => import("./pages/tools/HomeSecuritySystemPick"));
const SmartThermostatCoach   = lazy(() => import("./pages/tools/SmartThermostatCoach"));
const SmartDeadboltPicker    = lazy(() => import("./pages/tools/SmartDeadboltPicker"));
const WaterLeakDetector      = lazy(() => import("./pages/tools/WaterLeakDetector"));
const SpecialtyInsuranceCoach = lazy(() => import("./pages/tools/SpecialtyInsuranceCoach"));

// ── Cycle 53 (April 29 2026) — networking ──
const RuralInternet          = lazy(() => import("./pages/tools/RuralInternet"));
const CellSignalBooster      = lazy(() => import("./pages/tools/CellSignalBooster"));
const WifiExtenderVsMesh     = lazy(() => import("./pages/tools/WifiExtenderVsMesh"));
const HomeMediaServer        = lazy(() => import("./pages/tools/HomeMediaServer"));
const EthernetCoach          = lazy(() => import("./pages/tools/EthernetCoach"));

// ── Cycle 54 (April 29 2026) — warehouse/advisor/annuity/trust/loyalty ──
const WarehouseClubPick      = lazy(() => import("./pages/tools/WarehouseClubPick"));
const FiduciaryAdvisorFinder = lazy(() => import("./pages/tools/FiduciaryAdvisorFinder"));
const AnnuityWarning         = lazy(() => import("./pages/tools/AnnuityWarning"));
const TrustVsWillExplainer   = lazy(() => import("./pages/tools/TrustVsWillExplainer"));
const LoyaltyProgramsCompared = lazy(() => import("./pages/tools/LoyaltyProgramsCompared"));

// ── Cycle 55 (April 29 2026) — faith / disease support ──
const BibleChristianApps     = lazy(() => import("./pages/tools/BibleChristianApps"));
const CatholicMassApps       = lazy(() => import("./pages/tools/CatholicMassApps"));
const JewishCalendarApps     = lazy(() => import("./pages/tools/JewishCalendarApps"));
const IslamicPrayerApps      = lazy(() => import("./pages/tools/IslamicPrayerApps"));
const DiseaseSupportCommunities = lazy(() => import("./pages/tools/DiseaseSupportCommunities"));

// ── Cycle 56 (April 29 2026) — DIY/garage/lawn/mower/snow ──
const DiyRepairApps          = lazy(() => import("./pages/tools/DiyRepairApps"));
const SmartGarageOpener      = lazy(() => import("./pages/tools/SmartGarageOpener"));
const LawnCareApps           = lazy(() => import("./pages/tools/LawnCareApps"));
const RoboticMowerPick       = lazy(() => import("./pages/tools/RoboticMowerPick"));
const SnowBlowerPick         = lazy(() => import("./pages/tools/SnowBlowerPick"));

// ── Cycle 57 (April 29 2026) — pet/birds/chickens/sales ──
const PetLossGrief           = lazy(() => import("./pages/tools/PetLossGrief"));
const BirdFeederCam          = lazy(() => import("./pages/tools/BirdFeederCam"));
const BackyardChickenApps    = lazy(() => import("./pages/tools/BackyardChickenApps"));
const EstateSaleFinder       = lazy(() => import("./pages/tools/EstateSaleFinder"));
const YardSaleApps           = lazy(() => import("./pages/tools/YardSaleApps"));

// ── Cycle 58 (April 29 2026) — pencil/email/pipes/generator/grill ──
const ApplePencilIpadCoach   = lazy(() => import("./pages/tools/ApplePencilIpadCoach"));
const EmailFoldersRules      = lazy(() => import("./pages/tools/EmailFoldersRules"));
const FrozenPipesPrevention  = lazy(() => import("./pages/tools/FrozenPipesPrevention"));
const GeneratorPick          = lazy(() => import("./pages/tools/GeneratorPick"));
const PelletGrillCoach       = lazy(() => import("./pages/tools/PelletGrillCoach"));

// ── Cycle 59 (April 29 2026) — credit/HELOC/airbnb/windfall ──
const CreditScoreCoach       = lazy(() => import("./pages/tools/CreditScoreCoach"));
const CreditRepairScamWarning = lazy(() => import("./pages/tools/CreditRepairScamWarning"));
const HelocCoach             = lazy(() => import("./pages/tools/HelocCoach"));
const BecomeAirbnbHost       = lazy(() => import("./pages/tools/BecomeAirbnbHost"));
const SuddenMoneyChecklist   = lazy(() => import("./pages/tools/SuddenMoneyChecklist"));

// ── Cycle 60 (April 29 2026) — appraisers/auctions/coins/cards/collectibles ──
const FindAnAppraiser        = lazy(() => import("./pages/tools/FindAnAppraiser"));
const SellAntiquesAuctions   = lazy(() => import("./pages/tools/SellAntiquesAuctions"));
const CoinCollectingApps     = lazy(() => import("./pages/tools/CoinCollectingApps"));
const SportsCardsComics      = lazy(() => import("./pages/tools/SportsCardsComics"));
const OldCollectiblesReality = lazy(() => import("./pages/tools/OldCollectiblesReality"));

// ── Cycle 61 (April 29 2026) — troubleshooting ──
const BluetoothPairingTroubleshoot = lazy(() => import("./pages/tools/BluetoothPairingTroubleshoot"));
const PhoneWontCharge        = lazy(() => import("./pages/tools/PhoneWontCharge"));
const BatteryDrainFix        = lazy(() => import("./pages/tools/BatteryDrainFix"));
const InternetDownTroubleshoot = lazy(() => import("./pages/tools/InternetDownTroubleshoot"));
const AppPhoneFrozenFix      = lazy(() => import("./pages/tools/AppPhoneFrozenFix"));

// ── Cycle 62 (April 29 2026) — pharmacy/bundles/grocery/Apple ──
const PharmacyRewards        = lazy(() => import("./pages/tools/PharmacyRewards"));
const StreamingBundleStrategy = lazy(() => import("./pages/tools/StreamingBundleStrategy"));
const PauseStreamingRotation = lazy(() => import("./pages/tools/PauseStreamingRotation"));
const GroceryRewards         = lazy(() => import("./pages/tools/GroceryRewards"));
const AppleOneBundleCoach    = lazy(() => import("./pages/tools/AppleOneBundleCoach"));

// ── Cycle 63 (April 29 2026) — read-aloud / wifi / relay / pet / coupons ──
const ReadAloudAnywhere      = lazy(() => import("./pages/tools/ReadAloudAnywhere"));
const WifiPasswordSharing    = lazy(() => import("./pages/tools/WifiPasswordSharing"));
const RelayServicesTty       = lazy(() => import("./pages/tools/RelayServicesTty"));
const PetAdoptionApps        = lazy(() => import("./pages/tools/PetAdoptionApps"));
const DeepCouponApps         = lazy(() => import("./pages/tools/DeepCouponApps"));

// ── Cycle 64 (April 29 2026) — utility savings + smart-home + food ──
const ElectricBillCutters    = lazy(() => import("./pages/tools/ElectricBillCutters"));
const HomeWarrantyReality    = lazy(() => import("./pages/tools/HomeWarrantyReality"));
const GasPriceApps           = lazy(() => import("./pages/tools/GasPriceApps"));
const SmartPlugBasics        = lazy(() => import("./pages/tools/SmartPlugBasics"));
const FreezerInventory       = lazy(() => import("./pages/tools/FreezerInventory"));

// ── Cycle 65 (April 29 2026) — travel + legacy ──
const TravelInsuranceReality = lazy(() => import("./pages/tools/TravelInsuranceReality"));
const LuggageTrackerPicks    = lazy(() => import("./pages/tools/LuggageTrackerPicks"));
const OfflineMapsHowTo       = lazy(() => import("./pages/tools/OfflineMapsHowTo"));
const DigitalLegacyPlanner   = lazy(() => import("./pages/tools/DigitalLegacyPlanner"));
const MemorialFacebookGuide  = lazy(() => import("./pages/tools/MemorialFacebookGuide"));

// ── Cycle 66 (April 29 2026) — health tech ──
const GlucoseMonitorPicks    = lazy(() => import("./pages/tools/GlucoseMonitorPicks"));
const MedicalAlertCompare    = lazy(() => import("./pages/tools/MedicalAlertCompare"));
const TelehealthBasics       = lazy(() => import("./pages/tools/TelehealthBasics"));
const HearingTestApps        = lazy(() => import("./pages/tools/HearingTestApps"));
const WellnessRingPicks      = lazy(() => import("./pages/tools/WellnessRingPicks"));

// ── Cycle 67 (April 29 2026) — scam defenses ──
const GrandparentScamDefense = lazy(() => import("./pages/tools/GrandparentScamDefense"));
const IrsScamPlaybook        = lazy(() => import("./pages/tools/IrsScamPlaybook"));
const FakeAmazonCalls        = lazy(() => import("./pages/tools/FakeAmazonCalls"));
const MedicareScamGuide      = lazy(() => import("./pages/tools/MedicareScamGuide"));
const PuppyScamGuide         = lazy(() => import("./pages/tools/PuppyScamGuide"));

// ── Cycle 68 (April 29 2026) — phone basics ──
const BlockNumberHowTo       = lazy(() => import("./pages/tools/BlockNumberHowTo"));
const EmailOrganizingBasics  = lazy(() => import("./pages/tools/EmailOrganizingBasics"));
const SilenceUnknownCallers  = lazy(() => import("./pages/tools/SilenceUnknownCallers"));
const PhoneStorageCleanup    = lazy(() => import("./pages/tools/PhoneStorageCleanup"));
const ScreenshotHowTo        = lazy(() => import("./pages/tools/ScreenshotHowTo"));

// ── Cycle 69 (April 29 2026) — passwords + accounts ──
const PasswordManagerCompare = lazy(() => import("./pages/tools/PasswordManagerCompare"));
const TwoFactorAppPicks      = lazy(() => import("./pages/tools/TwoFactorAppPicks"));
const PasskeyExplainer       = lazy(() => import("./pages/tools/PasskeyExplainer"));
const AccountRecoveryPlan    = lazy(() => import("./pages/tools/AccountRecoveryPlan"));
const FamilyPasswordSharing  = lazy(() => import("./pages/tools/FamilyPasswordSharing"));

// ── Cycle 70 (April 29 2026) — entertainment + connection ──
const VideoCallGroupTips     = lazy(() => import("./pages/tools/VideoCallGroupTips"));
const AudiobookApps          = lazy(() => import("./pages/tools/AudiobookApps"));
const DigitalPhotoFrames     = lazy(() => import("./pages/tools/DigitalPhotoFrames"));
const RetirementCommunityWifi = lazy(() => import("./pages/tools/RetirementCommunityWifi"));
const JigsawPuzzleApps       = lazy(() => import("./pages/tools/JigsawPuzzleApps"));

// ── Cycle 71 (April 29 2026) — driving + delivery ──
const RideshareForSeniors    = lazy(() => import("./pages/tools/RideshareForSeniors"));
const FoodDeliveryCompare    = lazy(() => import("./pages/tools/FoodDeliveryCompare"));
const CarRepairFinder        = lazy(() => import("./pages/tools/CarRepairFinder"));
const EvChargingBasics       = lazy(() => import("./pages/tools/EvChargingBasics"));
const RoadsideAssistanceApps = lazy(() => import("./pages/tools/RoadsideAssistanceApps"));

// ── Cycle 72 (April 29 2026) — kitchen + home tech ──
const AirFryerBasics         = lazy(() => import("./pages/tools/AirFryerBasics"));
const RobotVacuumPicks       = lazy(() => import("./pages/tools/RobotVacuumPicks"));
const SmartDoorbellCompare   = lazy(() => import("./pages/tools/SmartDoorbellCompare"));
const LeakDetectionSensors   = lazy(() => import("./pages/tools/LeakDetectionSensors"));
const GarageDoorOpenerSmart  = lazy(() => import("./pages/tools/GarageDoorOpenerSmart"));

// ── Cycle 73 (April 29 2026) — money + banking ──
const HighYieldSavingsPicks  = lazy(() => import("./pages/tools/HighYieldSavingsPicks"));
const ZelleVenmoCashApp      = lazy(() => import("./pages/tools/ZelleVenmoCashApp"));
const FraudAlertSetup        = lazy(() => import("./pages/tools/FraudAlertSetup"));
const RetirementCalculatorPicks = lazy(() => import("./pages/tools/RetirementCalculatorPicks"));
const CreditFreezeHowTo      = lazy(() => import("./pages/tools/CreditFreezeHowTo"));

// ── Cycle 74 (April 29 2026) — smart speakers + AI voice ──
const AlexaRoutinesPrimer    = lazy(() => import("./pages/tools/AlexaRoutinesPrimer"));
const GoogleHomeBasics       = lazy(() => import("./pages/tools/GoogleHomeBasics"));
const ChatGptForSeniors      = lazy(() => import("./pages/tools/ChatGptForSeniors"));
const AppleIntelligenceGuide = lazy(() => import("./pages/tools/AppleIntelligenceGuide"));
const VoiceShoppingTips      = lazy(() => import("./pages/tools/VoiceShoppingTips"));

// ── Cycle 75 (April 29 2026) — photos + memories ──
const PhotoBackupCompare     = lazy(() => import("./pages/tools/PhotoBackupCompare"));
const ScanOldPhotos          = lazy(() => import("./pages/tools/ScanOldPhotos"));
const FamilyTreeApps         = lazy(() => import("./pages/tools/FamilyTreeApps"));
const VideoConverterFree     = lazy(() => import("./pages/tools/VideoConverterFree"));
const PhotoBookServices      = lazy(() => import("./pages/tools/PhotoBookServices"));

// ── Cycle 76 (April 29 2026) — shopping + buying ──
const AmazonShoppingTips     = lazy(() => import("./pages/tools/AmazonShoppingTips"));
const CostcoMembershipMath   = lazy(() => import("./pages/tools/CostcoMembershipMath"));
const OutletDealsApps        = lazy(() => import("./pages/tools/OutletDealsApps"));
const ReturnsRefundsHowTo    = lazy(() => import("./pages/tools/ReturnsRefundsHowTo"));
const OnlineThriftStores     = lazy(() => import("./pages/tools/OnlineThriftStores"));

// ── Cycle 77 (April 29 2026) — travel + cruise tech ──
const CruiseAppGuide         = lazy(() => import("./pages/tools/CruiseAppGuide"));
const AirlineAppPicks        = lazy(() => import("./pages/tools/AirlineAppPicks"));
const TsaPrecheckGlobal      = lazy(() => import("./pages/tools/TsaPrecheckGlobal"));
const PassportPhotoApps      = lazy(() => import("./pages/tools/PassportPhotoApps"));
const HotelLoyaltyPrograms   = lazy(() => import("./pages/tools/HotelLoyaltyPrograms"));

// ── Cycle 78 (April 29 2026) — estate + insurance ──
const HomeInventoryApps      = lazy(() => import("./pages/tools/HomeInventoryApps"));
const WillSoftwareCompare    = lazy(() => import("./pages/tools/WillSoftwareCompare"));
const EstateExecutorTools    = lazy(() => import("./pages/tools/EstateExecutorTools"));
const BeneficiaryCheckup     = lazy(() => import("./pages/tools/BeneficiaryCheckup"));
const FuneralPrearrangement  = lazy(() => import("./pages/tools/FuneralPrearrangement"));

// ── Cycle 79 (April 29 2026) — hobbies + crafts ──
const KnittingCommunityApps  = lazy(() => import("./pages/tools/KnittingCommunityApps"));
const BirdIdApps             = lazy(() => import("./pages/tools/BirdIdApps"));
const RecipeAppPicks         = lazy(() => import("./pages/tools/RecipeAppPicks"));
const WoodworkingPlans       = lazy(() => import("./pages/tools/WoodworkingPlans"));
const FishingApps            = lazy(() => import("./pages/tools/FishingApps"));

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
const CordCutterWizard       = lazy(() => import("./pages/tools/CordCutterWizard"));
const OnlineBankingSafety    = lazy(() => import("./pages/tools/OnlineBankingSafety"));
const SeniorFriendlyApps     = lazy(() => import("./pages/tools/SeniorFriendlyApps"));
const FindLostItems          = lazy(() => import("./pages/tools/FindLostItems"));
const SmartSpeakerPicker     = lazy(() => import("./pages/tools/SmartSpeakerPicker"));
const TabletOrLaptop         = lazy(() => import("./pages/tools/TabletOrLaptop"));
const PhoneInsuranceDecision = lazy(() => import("./pages/tools/PhoneInsuranceDecision"));
const PhotoLibraryTips       = lazy(() => import("./pages/tools/PhotoLibraryTips"));
const VoicemailSetup         = lazy(() => import("./pages/tools/VoicemailSetup"));
const TechBuddySetup         = lazy(() => import("./pages/tools/TechBuddySetup"));
const VoterInfoVerifier      = lazy(() => import("./pages/tools/VoterInfoVerifier"));
const AmazonReviewSpotter    = lazy(() => import("./pages/tools/AmazonReviewSpotter"));
const SpeedUpDevice          = lazy(() => import("./pages/tools/SpeedUpDevice"));
const RouterUpgradeHelper    = lazy(() => import("./pages/tools/RouterUpgradeHelper"));
const TelehealthPrep         = lazy(() => import("./pages/tools/TelehealthPrep"));
const MarketplaceScamSpotter = lazy(() => import("./pages/tools/MarketplaceScamSpotter"));
const DictationSetup         = lazy(() => import("./pages/tools/DictationSetup"));
const AccountDeletionWizard  = lazy(() => import("./pages/tools/AccountDeletionWizard"));
const FreeTaxFiling          = lazy(() => import("./pages/tools/FreeTaxFiling"));
const LibraryPowerPack       = lazy(() => import("./pages/tools/LibraryPowerPack"));
const SharedFamilyCalendar   = lazy(() => import("./pages/tools/SharedFamilyCalendar"));
const LowCostInternet        = lazy(() => import("./pages/tools/LowCostInternet"));
const StayConnected          = lazy(() => import("./pages/tools/StayConnected"));
const AiChatbotGuide         = lazy(() => import("./pages/tools/AiChatbotGuide"));
const RenewIdOnline          = lazy(() => import("./pages/tools/RenewIdOnline"));
const CommonScamsLibrary     = lazy(() => import("./pages/tools/CommonScamsLibrary"));
const CookieConsentDecoder   = lazy(() => import("./pages/tools/CookieConsentDecoder"));
const SocialPrivacyLockdown  = lazy(() => import("./pages/tools/SocialPrivacyLockdown"));
const WeatherAlertsSetup     = lazy(() => import("./pages/tools/WeatherAlertsSetup"));
const SocialSecuritySetup    = lazy(() => import("./pages/tools/SocialSecuritySetup"));
const CarPhoneSetup          = lazy(() => import("./pages/tools/CarPhoneSetup"));
const SellOnlineSafely       = lazy(() => import("./pages/tools/SellOnlineSafely"));
const CreditFreezeWalkthrough = lazy(() => import("./pages/tools/CreditFreezeWalkthrough"));
const PodcastStarter         = lazy(() => import("./pages/tools/PodcastStarter"));
const OnlineMemorialSetup    = lazy(() => import("./pages/tools/OnlineMemorialSetup"));
const PaymentAppSetup        = lazy(() => import("./pages/tools/PaymentAppSetup"));
const OnlineShoppingSafety   = lazy(() => import("./pages/tools/OnlineShoppingSafety"));
const WifiCallingSetup       = lazy(() => import("./pages/tools/WifiCallingSetup"));
const FitnessTrackerPicker   = lazy(() => import("./pages/tools/FitnessTrackerPicker"));
const SmartLockPicker        = lazy(() => import("./pages/tools/SmartLockPicker"));
const KindleSetup            = lazy(() => import("./pages/tools/KindleSetup"));
const MapsNavigationSetup    = lazy(() => import("./pages/tools/MapsNavigationSetup"));
const FindLostPhone          = lazy(() => import("./pages/tools/FindLostPhone"));
const VideoDoorbellPicker    = lazy(() => import("./pages/tools/VideoDoorbellPicker"));
const StreamingServiceSetup  = lazy(() => import("./pages/tools/StreamingServiceSetup"));
const DocumentScannerSetup   = lazy(() => import("./pages/tools/DocumentScannerSetup"));
const RemoteTechHelp         = lazy(() => import("./pages/tools/RemoteTechHelp"));
const OnlineFormsHelper      = lazy(() => import("./pages/tools/OnlineFormsHelper"));
const ScreenRecordingGuide   = lazy(() => import("./pages/tools/ScreenRecordingGuide"));
const FreeOfficeSuite        = lazy(() => import("./pages/tools/FreeOfficeSuite"));
const NewComputerSetup       = lazy(() => import("./pages/tools/NewComputerSetup"));
const TranslationTools       = lazy(() => import("./pages/tools/TranslationTools"));
const SeniorFitnessApps      = lazy(() => import("./pages/tools/SeniorFitnessApps"));
const AiVoiceDefense         = lazy(() => import("./pages/tools/AiVoiceDefense"));
const OnlineDoctorPortalSetup = lazy(() => import("./pages/tools/OnlineDoctorPortalSetup"));
const CreditCardRewardsPicker = lazy(() => import("./pages/tools/CreditCardRewardsPicker"));
const EmailOrganization      = lazy(() => import("./pages/tools/EmailOrganization"));
const UsbStorageGuide        = lazy(() => import("./pages/tools/UsbStorageGuide"));
const PetTechPicker          = lazy(() => import("./pages/tools/PetTechPicker"));
const EmailSignatureBuilder  = lazy(() => import("./pages/tools/EmailSignatureBuilder"));
const GuestWifiSetup         = lazy(() => import("./pages/tools/GuestWifiSetup"));
const HearingAidApps         = lazy(() => import("./pages/tools/HearingAidApps"));
const SmartGarageDoor        = lazy(() => import("./pages/tools/SmartGarageDoor"));
const RobotVacuumPicker      = lazy(() => import("./pages/tools/RobotVacuumPicker"));
const ESignatureSetup        = lazy(() => import("./pages/tools/ESignatureSetup"));
const MusicStreamingPicker   = lazy(() => import("./pages/tools/MusicStreamingPicker"));
const HomeOfficeSetup        = lazy(() => import("./pages/tools/HomeOfficeSetup"));
const DeepfakeVideoSpotter   = lazy(() => import("./pages/tools/DeepfakeVideoSpotter"));
const FreeLegalHelp          = lazy(() => import("./pages/tools/FreeLegalHelp"));
const SpouseSurvivorBenefits = lazy(() => import("./pages/tools/SpouseSurvivorBenefits"));
const CallerIdSetup          = lazy(() => import("./pages/tools/CallerIdSetup"));
const BackupVerification     = lazy(() => import("./pages/tools/BackupVerification"));
const PhoneFamilyLinkSetup   = lazy(() => import("./pages/tools/PhoneFamilyLinkSetup"));
const VeteranTechBenefits    = lazy(() => import("./pages/tools/VeteranTechBenefits"));
const PrintFromPhone         = lazy(() => import("./pages/tools/PrintFromPhone"));
const LowVisionApps          = lazy(() => import("./pages/tools/LowVisionApps"));
const NetworkPrivacyChecker  = lazy(() => import("./pages/tools/NetworkPrivacyChecker"));
const SeniorTransitApps      = lazy(() => import("./pages/tools/SeniorTransitApps"));
const BillRefundDispute      = lazy(() => import("./pages/tools/BillRefundDispute"));
const OnlineDatingSafety     = lazy(() => import("./pages/tools/OnlineDatingSafety"));
const TravelBookingSafety    = lazy(() => import("./pages/tools/TravelBookingSafety"));
const ComputerRepairOptions  = lazy(() => import("./pages/tools/ComputerRepairOptions"));
const NotebookAlternatives   = lazy(() => import("./pages/tools/NotebookAlternatives"));
const BedtimeTechRoutine     = lazy(() => import("./pages/tools/BedtimeTechRoutine"));
const RealEstateWireScam     = lazy(() => import("./pages/tools/RealEstateWireScam"));
const IphoneShortcuts        = lazy(() => import("./pages/tools/IphoneShortcuts"));
const AndroidShortcuts       = lazy(() => import("./pages/tools/AndroidShortcuts"));
const CryptoScamDefense      = lazy(() => import("./pages/tools/CryptoScamDefense"));
const NutritionAppPicker     = lazy(() => import("./pages/tools/NutritionAppPicker"));
const InvestmentAppPicker    = lazy(() => import("./pages/tools/InvestmentAppPicker"));
const BloodPressureApps      = lazy(() => import("./pages/tools/BloodPressureApps"));
const OnlineWillEstate       = lazy(() => import("./pages/tools/OnlineWillEstate"));
const SocialMediaFirstSteps  = lazy(() => import("./pages/tools/SocialMediaFirstSteps"));
const CountdownToRetirement  = lazy(() => import("./pages/tools/CountdownToRetirement"));
const BluetoothEarbudPicker  = lazy(() => import("./pages/tools/BluetoothEarbudPicker"));
const VideoCallEtiquette     = lazy(() => import("./pages/tools/VideoCallEtiquette"));
const PrescriptionDeliveryApps = lazy(() => import("./pages/tools/PrescriptionDeliveryApps"));
const LanguageLearningApps   = lazy(() => import("./pages/tools/LanguageLearningApps"));
const BrainGamesApps         = lazy(() => import("./pages/tools/BrainGamesApps"));
const NewsAppPicker          = lazy(() => import("./pages/tools/NewsAppPicker"));
const VoiceMemoTranscribe    = lazy(() => import("./pages/tools/VoiceMemoTranscribe"));
const HomeVisionTest         = lazy(() => import("./pages/tools/HomeVisionTest"));
const SmartTvAccessibility   = lazy(() => import("./pages/tools/SmartTvAccessibility"));
const TelevetSetup           = lazy(() => import("./pages/tools/TelevetSetup"));
const BoardGamesOnline       = lazy(() => import("./pages/tools/BoardGamesOnline"));
const GasBuddyAlternatives   = lazy(() => import("./pages/tools/GasBuddyAlternatives"));
const VideoEditingApps       = lazy(() => import("./pages/tools/VideoEditingApps"));
const HomeCareAppsForFamily  = lazy(() => import("./pages/tools/HomeCareAppsForFamily"));
const RealEstateAppPicker    = lazy(() => import("./pages/tools/RealEstateAppPicker"));
const EstateSaleHelper       = lazy(() => import("./pages/tools/EstateSaleHelper"));
const GroceryListApps        = lazy(() => import("./pages/tools/GroceryListApps"));
const SmartScalePicker       = lazy(() => import("./pages/tools/SmartScalePicker"));
const SeniorTechMistakes     = lazy(() => import("./pages/tools/SeniorTechMistakes"));
const PhoneCarrierComparison = lazy(() => import("./pages/tools/PhoneCarrierComparison"));
const PhoneRepairOrReplace   = lazy(() => import("./pages/tools/PhoneRepairOrReplace"));
const OnlineClassesPicker    = lazy(() => import("./pages/tools/OnlineClassesPicker"));
const CallScreenerSetup      = lazy(() => import("./pages/tools/CallScreenerSetup"));
const EmailUnsubscribeFlow   = lazy(() => import("./pages/tools/EmailUnsubscribeFlow"));
const FamilyRecipeApp        = lazy(() => import("./pages/tools/FamilyRecipeApp"));
const SafeSeniorComputerSetup = lazy(() => import("./pages/tools/SafeSeniorComputerSetup"));

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
          <Route path="/tools/jargon-translator" element={<Navigate to="/tools/tech-jargon-translator" replace />} />
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
          <Route path="/tools/phishing-scanner" element={<Navigate to="/tools/url-safety-checker" replace />} />
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
          <Route path="/practice/inbox" element={<Navigate to="/practice/phishing-inbox" replace />} />
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
          <Route path="/tools/phone-plan-comparator" element={<Navigate to="/tools/phone-plan-comparison" replace />} />
          <Route path="/tools/phone-plan-comparison" element={<PhonePlanComparison />} />
          <Route path="/tools/robocall-blocker" element={<RobocallBlocker />} />
          <Route path="/tools/password-leak-checker" element={<Navigate to="/tools/password-health" replace />} />
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
          <Route path="/tools/plain-english-translator" element={<Navigate to="/tools/tech-jargon-translator" replace />} />
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
          <Route path="/tools/safe-link-checker" element={<Navigate to="/tools/url-safety-checker" replace />} />
          <Route path="/tools/is-this-real" element={<Navigate to="/tools/is-this-a-scam" replace />} />
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
          <Route path="/tools/subscription-tracker" element={<Navigate to="/tools/subscription-auditor" replace />} />
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

          {/* Cycle 1 — net-new tools (April 29 2026) */}
          <Route path="/tools/phishing-link-inspector" element={<PhishingLinkInspector />} />
          <Route path="/tools/two-factor-coach" element={<TwoFactorCoach />} />
          <Route path="/tools/safe-word-kit" element={<SafeWordKit />} />
          <Route path="/tools/print-from-phone" element={<PrintFromPhoneHelper />} />
          <Route path="/tools/cable-identifier" element={<ChargerCableIdentifier />} />

          {/* Cycle 2 — net-new tools */}
          <Route path="/tools/qr-scam-scanner" element={<QrScamScanner />} />
          <Route path="/tools/battery-health-checker" element={<BatteryHealthChecker />} />
          <Route path="/tools/app-permissions-reset" element={<AppPermissionsReset />} />
          <Route path="/tools/esim-setup-guide" element={<EsimSetupGuide />} />
          <Route path="/tools/phone-hotspot-helper" element={<PhoneHotspotHelper />} />

          {/* Cycle 3 — net-new tools */}
          <Route path="/tools/credit-freeze-coach" element={<CreditFreezeCoach />} />
          <Route path="/tools/toll-text-scam" element={<TollTextScamDecoder />} />
          <Route path="/tools/gift-card-scam-defense" element={<GiftCardScamDefense />} />
          <Route path="/tools/payment-app-safety" element={<PaymentAppSafety />} />
          <Route path="/tools/hotel-wifi-safety" element={<HotelWifiSafety />} />

          {/* Cycle 4 — net-new tools */}
          <Route path="/tools/breach-response" element={<BreachResponseChecklist />} />
          <Route path="/tools/airtag-stalking-defense" element={<AirTagStalkingDefense />} />
          <Route path="/tools/usps-informed-delivery" element={<UspsInformedDelivery />} />
          <Route path="/tools/caller-id-verification" element={<CallerIdVerification />} />
          <Route path="/tools/public-charging-safety" element={<PublicChargingSafety />} />

          {/* Cycle 5 — health/accessibility */}
          <Route path="/tools/medical-id-setup" element={<MedicalIdSetup />} />
          <Route path="/tools/live-captions-setup" element={<LiveCaptionsSetup />} />
          <Route path="/tools/big-text-display" element={<BigTextDisplayCoach />} />
          <Route path="/tools/mychart-helper" element={<MyChartHelper />} />
          <Route path="/tools/cast-phone-to-tv" element={<CastPhoneToTv />} />

          {/* Cycle 6 — money & daily life */}
          <Route path="/tools/tap-to-pay-setup" element={<TapToPaySetup />} />
          <Route path="/tools/screenshot-coach" element={<ScreenshotCoach />} />
          <Route path="/tools/airdrop-helper" element={<AirDropHelper />} />
          <Route path="/tools/marketplace-safety" element={<MarketplaceSafety />} />
          <Route path="/tools/big-print-tip-calculator" element={<BigPrintTipCalculator />} />

          {/* Cycle 7 — communication & SOS */}
          <Route path="/tools/group-text-coach" element={<GroupTextCoach />} />
          <Route path="/tools/focus-mode-coach" element={<FocusModeCoach />} />
          <Route path="/tools/block-spam-calls-texts" element={<BlockSpamCallsTexts />} />
          <Route path="/tools/remote-help-setup" element={<RemoteHelpSetup />} />
          <Route path="/tools/emergency-sos-setup" element={<EmergencySosSetup />} />

          {/* Cycle 8 — caregiver / legacy / language */}
          <Route path="/tools/digital-legacy-setup" element={<DigitalLegacySetup />} />
          <Route path="/tools/caregiver-phone-setup" element={<CaregiverPhoneSetup />} />
          <Route path="/tools/phone-switch-helper" element={<PhoneSwitchHelper />} />
          <Route path="/tools/translation-app-coach" element={<TranslationAppCoach />} />
          <Route path="/tools/captioned-phone-service" element={<CaptionedPhoneService />} />

          {/* Cycle 9 — entertainment & home network */}
          <Route path="/tools/free-streaming-services" element={<FreeStreamingServices />} />
          <Route path="/tools/antenna-tv-setup" element={<AntennaTvSetup />} />
          <Route path="/tools/library-app-helper" element={<LibraryAppHelper />} />
          <Route path="/tools/rideshare-coach" element={<RideshareCoach />} />
          <Route path="/tools/mesh-wifi-picker" element={<MeshWifiPicker />} />

          {/* Cycle 10 — AI / photos / docs / govt */}
          <Route path="/tools/ai-beginner-coach" element={<AiBeginnerCoach />} />
          <Route path="/tools/old-photo-restore" element={<OldPhotoRestore />} />
          <Route path="/tools/digitize-old-media" element={<DigitizeOldMedia />} />
          <Route path="/tools/esign-coach" element={<ESignCoach />} />
          <Route path="/tools/login-gov-id-me-helper" element={<LoginGovIdMeHelper />} />

          {/* Cycle 11 — scams + tablet + basics */}
          <Route path="/tools/romance-scam-defense" element={<RomanceScamDefense />} />
          <Route path="/tools/pig-butchering-defense" element={<PigButcheringDefense />} />
          <Route path="/tools/charity-vetting-tool" element={<CharityVettingTool />} />
          <Route path="/tools/senior-tablet-picker" element={<SeniorTabletPicker />} />
          <Route path="/tools/copy-paste-coach" element={<CopyPasteCoach />} />

          {/* Cycle 12 — cleanup, delivery, video calls */}
          <Route path="/tools/tech-support-popup-defense" element={<TechSupportPopupDefense />} />
          <Route path="/tools/free-up-phone-storage" element={<FreeUpPhoneStorage />} />
          <Route path="/tools/computer-cleanup-coach" element={<ComputerCleanupCoach />} />
          <Route path="/tools/grocery-delivery-coach" element={<GroceryDeliveryCoach />} />
          <Route path="/tools/video-call-tips-for-family" element={<VideoCallTipsForFamily />} />

          {/* Cycle 13 — calendar / news / wellness / weather / pets */}
          <Route path="/tools/family-calendar-sharing" element={<FamilyCalendarSharing />} />
          <Route path="/tools/news-app-curator" element={<NewsAppCurator />} />
          <Route path="/tools/meditation-app-picker" element={<MeditationAppPicker />} />
          <Route path="/tools/weather-alert-picker" element={<WeatherAlertPicker />} />
          <Route path="/tools/pet-tech-coach" element={<PetTechCoach />} />

          {/* Cycle 14 — travel / maps / dining / discounts / Prime */}
          <Route path="/tools/travel-tech-pack" element={<TravelTechPack />} />
          <Route path="/tools/maps-gps-coach" element={<MapsGpsCoach />} />
          <Route path="/tools/restaurant-reservation-coach" element={<RestaurantReservationCoach />} />
          <Route path="/tools/senior-discount-apps" element={<SeniorDiscountApps />} />
          <Route path="/tools/amazon-prime-mastery" element={<AmazonPrimeMastery />} />

          {/* Cycle 15 — finance & retirement */}
          <Route path="/tools/budget-app-picker" element={<BudgetAppPicker />} />
          <Route path="/tools/rmd-explainer" element={<RmdExplainer />} />
          <Route path="/tools/free-tax-filing-coach" element={<FreeTaxFilingCoach />} />
          <Route path="/tools/medicare-part-d-picker" element={<MedicarePartDPicker />} />
          <Route path="/tools/auto-insurance-comparison" element={<AutoInsuranceComparison />} />

          {/* Cycle 16 — music/photos/scan/audio/home screen */}
          <Route path="/tools/music-app-picker" element={<MusicAppPicker />} />
          <Route path="/tools/photo-book-creator" element={<PhotoBookCreator />} />
          <Route path="/tools/document-scanner-coach" element={<DocumentScannerCoach />} />
          <Route path="/tools/wireless-earbud-picker" element={<WirelessEarbudPicker />} />
          <Route path="/tools/home-screen-organizer" element={<HomeScreenOrganizer />} />

          {/* Cycle 17 — nature / cooking / watch */}
          <Route path="/tools/plant-id-apps" element={<PlantIdApps />} />
          <Route path="/tools/bird-id-merlin" element={<BirdIdMerlin />} />
          <Route path="/tools/stargazing-apps" element={<StargazingApps />} />
          <Route path="/tools/recipe-meal-apps" element={<RecipeMealApps />} />
          <Route path="/tools/apple-watch-health-coach" element={<AppleWatchHealthCoach />} />

          {/* Cycle 18 — comms / smart home / health */}
          <Route path="/tools/whatsapp-coach" element={<WhatsAppCoach />} />
          <Route path="/tools/smart-doorbell-picker" element={<SmartDoorbellPicker />} />
          <Route path="/tools/cgm-coach" element={<CgmCoach />} />
          <Route path="/tools/online-hearing-test" element={<OnlineHearingTest />} />
          <Route path="/tools/skype-replacement" element={<SkypeReplacement />} />

          {/* Cycle 19 — brain/genealogy/frame/sound/volunteer */}
          <Route path="/tools/brain-training-apps" element={<BrainTrainingApps />} />
          <Route path="/tools/genealogy-apps" element={<GenealogyApps />} />
          <Route path="/tools/digital-photo-frame-picker" element={<DigitalPhotoFramePicker />} />
          <Route path="/tools/tv-sound-bar-picker" element={<TvSoundBarPicker />} />
          <Route path="/tools/volunteer-apps" element={<VolunteerApps />} />

          {/* Cycle 20 — cloud/passwords/speed/browser/learning */}
          <Route path="/tools/cloud-storage-picker" element={<CloudStoragePicker />} />
          <Route path="/tools/password-manager-picker" element={<PasswordManagerPicker />} />
          <Route path="/tools/internet-speed-test-coach" element={<InternetSpeedTestCoach />} />
          <Route path="/tools/browser-picker" element={<BrowserPicker />} />
          <Route path="/tools/online-learning-picker" element={<OnlineLearningPicker />} />

          {/* Cycle 21 — podcasts / outdoors / repair */}
          <Route path="/tools/podcast-app-picker" element={<PodcastAppPicker />} />
          <Route path="/tools/hiking-trail-apps" element={<HikingTrailApps />} />
          <Route path="/tools/gardening-apps" element={<GardeningApps />} />
          <Route path="/tools/rv-camping-apps" element={<RvCampingApps />} />
          <Route path="/tools/phone-repair-coach" element={<PhoneRepairCoach />} />

          {/* Cycle 22 — scams / contractors / cell / handyman / jobs */}
          <Route path="/tools/door-to-door-scam-defense" element={<DoorToDoorScamDefense />} />
          <Route path="/tools/contractor-vetting" element={<ContractorVetting />} />
          <Route path="/tools/senior-cell-plan-picker" element={<SeniorCellPlanPicker />} />
          <Route path="/tools/handyman-service-apps" element={<HandymanServiceApps />} />
          <Route path="/tools/retirement-jobs-apps" element={<RetirementJobsApps />} />

          {/* Cycle 23 — privacy / banking / travel / brokerage / screen */}
          <Route path="/tools/facebook-privacy-coach" element={<FacebookPrivacyCoach />} />
          <Route path="/tools/mobile-banking-coach" element={<MobileBankingCoach />} />
          <Route path="/tools/international-travel-sim" element={<InternationalTravelSim />} />
          <Route path="/tools/brokerage-picker" element={<BrokeragePicker />} />
          <Route path="/tools/adult-screen-time-coach" element={<AdultScreenTimeCoach />} />

          {/* Cycle 24 — backup / photo-org / medical / bills / journal */}
          <Route path="/tools/backup-strategy" element={<BackupStrategy />} />
          <Route path="/tools/photo-organization-coach" element={<PhotoOrganizationCoach />} />
          <Route path="/tools/medical-records-organizer" element={<MedicalRecordsOrganizer />} />
          <Route path="/tools/bills-paperless-organizer" element={<BillsPaperlessOrganizer />} />
          <Route path="/tools/journaling-apps" element={<JournalingApps />} />

          {/* Cycle 25 — caregiving / accessibility / health */}
          <Route path="/tools/caregiver-coordination-apps" element={<CaregiverCoordinationApps />} />
          <Route path="/tools/voice-control-accessibility" element={<VoiceControlAccessibility />} />
          <Route path="/tools/medical-alert-picker" element={<MedicalAlertPicker />} />
          <Route path="/tools/telehealth-visit-coach" element={<TelehealthVisitCoach />} />
          <Route path="/tools/online-pharmacy-coach" element={<OnlinePharmacyCoach />} />

          {/* Cycle 26 — kitchen / inventory / privacy / sell / utilities */}
          <Route path="/tools/smart-cooking-tools" element={<SmartCookingTools />} />
          <Route path="/tools/home-inventory-app" element={<HomeInventoryApp />} />
          <Route path="/tools/hidden-camera-detector" element={<HiddenCameraDetector />} />
          <Route path="/tools/sell-online-coach" element={<SellOnlineCoach />} />
          <Route path="/tools/utility-bill-reduction" element={<UtilityBillReduction />} />

          {/* Cycle 27 — books / reading / ergonomics / notes */}
          <Route path="/tools/audiobook-app-picker" element={<AudiobookAppPicker />} />
          <Route path="/tools/reading-app-picker" element={<ReadingAppPicker />} />
          <Route path="/tools/book-tracking-apps" element={<BookTrackingApps />} />
          <Route path="/tools/ergonomic-computer-setup" element={<ErgonomicComputerSetup />} />
          <Route path="/tools/notes-app-picker" element={<NotesAppPicker />} />

          {/* Cycle 28 — driving / sleep / power / disaster / grandkids */}
          <Route path="/tools/defensive-driving-coach" element={<DefensiveDrivingCoach />} />
          <Route path="/tools/sleep-tracking-apps" element={<SleepTrackingApps />} />
          <Route path="/tools/power-bank-picker" element={<PowerBankPicker />} />
          <Route path="/tools/disaster-prep-apps" element={<DisasterPrepApps />} />
          <Route path="/tools/childproof-for-visits" element={<ChildproofForVisits />} />

          {/* Cycle 29 — passkeys / antivirus / recovery / shortcuts / tremors */}
          <Route path="/tools/passkeys-coach" element={<PasskeysCoach />} />
          <Route path="/tools/antivirus-picker" element={<AntivirusPicker />} />
          <Route path="/tools/account-recovery" element={<AppleGoogleAccountRecovery />} />
          <Route path="/tools/keyboard-shortcuts-cheatsheet" element={<KeyboardShortcutsCheatsheet />} />
          <Route path="/tools/tremor-phone-setup" element={<TremorPhoneSetup />} />

          {/* Cycle 30 — car / EV / used cars / flights / window management */}
          <Route path="/tools/carplay-android-auto" element={<CarPlayAndroidAuto />} />
          <Route path="/tools/ev-charging-apps" element={<EvChargingApps />} />
          <Route path="/tools/used-car-research-apps" element={<UsedCarResearchApps />} />
          <Route path="/tools/flight-search-apps" element={<FlightSearchApps />} />
          <Route path="/tools/window-management-coach" element={<WindowManagementCoach />} />

          {/* Cycle 31 — diet / meds / exercise / fitness / cognitive */}
          <Route path="/tools/calorie-tracking-apps" element={<CalorieTrackingApps />} />
          <Route path="/tools/medication-reminder-apps" element={<MedicationReminderApps />} />
          <Route path="/tools/senior-exercise-apps" element={<SeniorExerciseApps />} />
          <Route path="/tools/home-fitness-subscriptions" element={<HomeFitnessSubscriptions />} />
          <Route path="/tools/cognitive-self-test" element={<CognitiveSelfTest />} />

          {/* Cycle 32 — homework / tutoring / creative / cameras / docs */}
          <Route path="/tools/help-grandkids-homework" element={<HelpGrandkidsHomework />} />
          <Route path="/tools/online-tutoring-apps" element={<OnlineTutoringApps />} />
          <Route path="/tools/drawing-photo-editing-apps" element={<DrawingPhotoEditingApps />} />
          <Route path="/tools/digital-camera-picker" element={<DigitalCameraPicker />} />
          <Route path="/tools/documentary-streaming" element={<DocumentaryStreaming />} />

          {/* Cycle 33 — vaccines / drugs / symptoms / doctors */}
          <Route path="/tools/adult-vaccine-schedule" element={<AdultVaccineSchedule />} />
          <Route path="/tools/drug-interaction-checker" element={<DrugInteractionChecker />} />
          <Route path="/tools/pill-identifier-app" element={<PillIdentifierApp />} />
          <Route path="/tools/symptom-checker-apps" element={<SymptomCheckerApps />} />
          <Route path="/tools/find-a-doctor-apps" element={<FindADoctorApps />} />

          {/* Cycle 34 — wills / directives / savings / 529 / notary */}
          <Route path="/tools/will-estate-online" element={<WillEstateOnline />} />
          <Route path="/tools/advance-directive-coach" element={<AdvanceDirectiveCoach />} />
          <Route path="/tools/high-yield-savings-i-bonds" element={<HighYieldSavingsAndIBonds />} />
          <Route path="/tools/college-savings-for-grandkids" element={<CollegeSavingsForGrandkids />} />
          <Route path="/tools/online-notary-coach" element={<OnlineNotaryCoach />} />

          {/* Cycle 35 — Social Security / Medicare / LTC / reverse mortgage / pension */}
          <Route path="/tools/when-to-take-social-security" element={<WhenToTakeSocialSecurity />} />
          <Route path="/tools/medigap-vs-advantage" element={<MedigapVsAdvantage />} />
          <Route path="/tools/long-term-care-planning" element={<LongTermCarePlanning />} />
          <Route path="/tools/reverse-mortgage-explained" element={<ReverseMortgageExplained />} />
          <Route path="/tools/pension-lump-sum-decision" element={<PensionLumpSumDecision />} />

          {/* Cycle 36 — funeral / hospice / therapy / widow / downsize */}
          <Route path="/tools/funeral-planning-coach" element={<FuneralPlanningCoach />} />
          <Route path="/tools/hospice-palliative-coach" element={<HospicePalliativeCoach />} />
          <Route path="/tools/online-therapy-apps" element={<OnlineTherapyApps />} />
          <Route path="/tools/newly-widowed-checklist" element={<NewlyWidowedChecklist />} />
          <Route path="/tools/senior-downsizing-coach" element={<SeniorDownsizingCoach />} />

          {/* Cycle 37 — smart display / robot vac / health tests / scale / zoom host */}
          <Route path="/tools/smart-display-for-grandparents" element={<SmartDisplayForGrandparents />} />
          <Route path="/tools/robot-vacuum-coach" element={<RobotVacuumCoach />} />
          <Route path="/tools/at-home-health-tests" element={<AtHomeHealthTests />} />
          <Route path="/tools/smart-scale-bp-cuff-picker" element={<SmartScaleBpCuffPicker />} />
          <Route path="/tools/video-meeting-host-coach" element={<VideoMeetingHostCoach />} />

          {/* Cycle 38 — accounts / privacy / search / VA / SSDI */}
          <Route path="/tools/apple-id-google-account-setup" element={<AppleIdGoogleAccountSetup />} />
          <Route path="/tools/privacy-email-picker" element={<PrivacyEmailPicker />} />
          <Route path="/tools/better-web-search-coach" element={<BetterWebSearchCoach />} />
          <Route path="/tools/va-benefits-and-app" element={<VaBenefitsAndApp />} />
          <Route path="/tools/ssdi-vs-ssi-coach" element={<SsdiVsSsiCoach />} />

          {/* Cycle 39 — VPN / encryption / cyber / remote */}
          <Route path="/tools/vpn-picker" element={<VpnPicker />} />
          <Route path="/tools/disk-encryption-coach" element={<DiskEncryptionCoach />} />
          <Route path="/tools/cyber-insurance-explainer" element={<CyberInsuranceExplainer />} />
          <Route path="/tools/universal-remote-picker" element={<UniversalRemotePicker />} />
          <Route path="/tools/lost-tv-remote-coach" element={<LostTvRemoteCoach />} />

          {/* Cycle 40 — taxes / SNAP / eldercare / lifeline / HSA-FSA */}
          <Route path="/tools/senior-tax-credits" element={<SeniorTaxCredits />} />
          <Route path="/tools/senior-snap-and-food" element={<SeniorSnapAndFood />} />
          <Route path="/tools/eldercare-locator" element={<EldercareLocator />} />
          <Route path="/tools/lifeline-internet-coach" element={<LifelineInternetCoach />} />
          <Route path="/tools/hsa-fsa-coach" element={<HsaFsaCoach />} />

          {/* Cycle 41 — laptop / phone / grandkid safety / apps / console */}
          <Route path="/tools/senior-laptop-pick" element={<SeniorLaptopPick />} />
          <Route path="/tools/senior-phone-pick" element={<SeniorPhonePick />} />
          <Route path="/tools/grandkid-internet-safety" element={<GrandkidInternetSafety />} />
          <Route path="/tools/apps-grandkids-use-explained" element={<AppsGrandkidsUseExplained />} />
          <Route path="/tools/game-console-gift-guide" element={<GameConsoleGiftGuide />} />

          {/* Cycle 42 — AI / resume / smart home */}
          <Route path="/tools/ai-comparison-coach" element={<AiComparisonCoach />} />
          <Route path="/tools/ai-image-generators" element={<AiImageGenerators />} />
          <Route path="/tools/resume-builder-apps" element={<ResumeBuilderApps />} />
          <Route path="/tools/smart-home-platform-pick" element={<SmartHomePlatformPick />} />
          <Route path="/tools/smart-bulb-picker" element={<SmartBulbPicker />} />

          {/* Cycle 43 — printer / fax / cam / weather / walk */}
          <Route path="/tools/senior-printer-picker" element={<SeniorPrinterPicker />} />
          <Route path="/tools/online-fax-coach" element={<OnlineFaxCoach />} />
          <Route path="/tools/outdoor-security-camera" element={<OutdoorSecurityCamera />} />
          <Route path="/tools/home-weather-station" element={<HomeWeatherStation />} />
          <Route path="/tools/walking-pad-standing-desk" element={<WalkingPadStandingDesk />} />

          {/* Cycle 44 — car / mileage / subs / dispute / refi */}
          <Route path="/tools/car-maintenance-tracker" element={<CarMaintenanceTracker />} />
          <Route path="/tools/mileage-tracker" element={<MileageTracker />} />
          <Route path="/tools/subscription-audit-coach" element={<SubscriptionAuditCoach />} />
          <Route path="/tools/dispute-charge-coach" element={<DisputeChargeCoach />} />
          <Route path="/tools/mortgage-refinance-coach" element={<MortgageRefinanceCoach />} />

          {/* Cycle 45 — retirement accounts / rollover / withdrawal / bonds / index */}
          <Route path="/tools/retirement-account-types" element={<RetirementAccountTypes />} />
          <Route path="/tools/401k-rollover-coach" element={<Plan401kRolloverCoach />} />
          <Route path="/tools/safe-withdrawal-rate" element={<SafeWithdrawalRate />} />
          <Route path="/tools/bond-ladder-coach" element={<BondLadderCoach />} />
          <Route path="/tools/index-fund-coach" element={<IndexFundCoach />} />

          {/* Cycle 46 — passport / disposal / erase / photos / in-person */}
          <Route path="/tools/passport-renewal-online" element={<PassportRenewalOnline />} />
          <Route path="/tools/old-device-disposal" element={<OldDeviceDisposal />} />
          <Route path="/tools/erase-old-phone" element={<EraseOldPhone />} />
          <Route path="/tools/photo-print-and-cards" element={<PhotoPrintAndCards />} />
          <Route path="/tools/in-person-tech-help" element={<InPersonTechHelp />} />

          {/* Cycle 47 — dental / vision / deepfake / genealogy / citizen */}
          <Route path="/tools/dental-insurance-coach" element={<DentalInsuranceCoach />} />
          <Route path="/tools/vision-insurance-coach" element={<VisionInsuranceCoach />} />
          <Route path="/tools/deepfake-spotter" element={<DeepfakeSpotter />} />
          <Route path="/tools/genealogy-deep-dive" element={<GenealogyDeepDive />} />
          <Route path="/tools/citizen-emergency-app" element={<CitizenEmergencyApp />} />

          {/* Cycle 48 — donate / mail / 311 / energy / solar */}
          <Route path="/tools/donation-pickup" element={<DonationPickup />} />
          <Route path="/tools/usps-mail-forward-hold" element={<UspsMailForwardHold />} />
          <Route path="/tools/local-311-apps" element={<Local311Apps />} />
          <Route path="/tools/home-energy-monitor" element={<HomeEnergyMonitor />} />
          <Route path="/tools/solar-panel-decision-coach" element={<SolarPanelDecisionCoach />} />

          {/* Cycle 49 — air / smoke / water / vacuum / recalls */}
          <Route path="/tools/indoor-air-quality" element={<IndoorAirQuality />} />
          <Route path="/tools/smoke-co-detector-maintenance" element={<SmokeCoDetectorMaintenance />} />
          <Route path="/tools/water-filter-picker" element={<WaterFilterPicker />} />
          <Route path="/tools/senior-vacuum-picker" element={<SeniorVacuumPicker />} />
          <Route path="/tools/recall-checker" element={<RecallChecker />} />

          {/* Cycle 50 — TV / speakers / vinyl / sports / golf */}
          <Route path="/tools/senior-tv-buying-guide" element={<SeniorTvBuyingGuide />} />
          <Route path="/tools/bluetooth-speaker-picker" element={<BluetoothSpeakerPicker />} />
          <Route path="/tools/vinyl-turntable-coach" element={<VinylTurntableCoach />} />
          <Route path="/tools/sports-streaming-picker" element={<SportsStreamingPicker />} />
          <Route path="/tools/golf-apps" element={<GolfApps />} />

          {/* Cycle 51 — fishing / pickleball / games / wine / cocktail */}
          <Route path="/tools/fishing-boating-apps" element={<FishingBoatingApps />} />
          <Route path="/tools/pickleball-tennis-apps" element={<PickleballTennisApps />} />
          <Route path="/tools/online-board-games" element={<OnlineBoardGames />} />
          <Route path="/tools/wine-apps" element={<WineApps />} />
          <Route path="/tools/cocktail-coffee-apps" element={<CocktailCoffeeApps />} />

          {/* Cycle 52 — security / thermostat / lock / leak / insurance */}
          <Route path="/tools/home-security-system-pick" element={<HomeSecuritySystemPick />} />
          <Route path="/tools/smart-thermostat-coach" element={<SmartThermostatCoach />} />
          <Route path="/tools/smart-deadbolt-picker" element={<SmartDeadboltPicker />} />
          <Route path="/tools/water-leak-detector" element={<WaterLeakDetector />} />
          <Route path="/tools/specialty-insurance-coach" element={<SpecialtyInsuranceCoach />} />

          {/* Cycle 53 — networking */}
          <Route path="/tools/rural-internet" element={<RuralInternet />} />
          <Route path="/tools/cell-signal-booster" element={<CellSignalBooster />} />
          <Route path="/tools/wifi-extender-vs-mesh" element={<WifiExtenderVsMesh />} />
          <Route path="/tools/home-media-server" element={<HomeMediaServer />} />
          <Route path="/tools/ethernet-coach" element={<EthernetCoach />} />

          {/* Cycle 54 — warehouse / advisor / annuity / trust / loyalty */}
          <Route path="/tools/warehouse-club-pick" element={<WarehouseClubPick />} />
          <Route path="/tools/fiduciary-advisor-finder" element={<FiduciaryAdvisorFinder />} />
          <Route path="/tools/annuity-warning" element={<AnnuityWarning />} />
          <Route path="/tools/trust-vs-will-explainer" element={<TrustVsWillExplainer />} />
          <Route path="/tools/loyalty-programs-compared" element={<LoyaltyProgramsCompared />} />

          {/* Cycle 55 — faith / disease support */}
          <Route path="/tools/bible-christian-apps" element={<BibleChristianApps />} />
          <Route path="/tools/catholic-mass-apps" element={<CatholicMassApps />} />
          <Route path="/tools/jewish-calendar-apps" element={<JewishCalendarApps />} />
          <Route path="/tools/islamic-prayer-apps" element={<IslamicPrayerApps />} />
          <Route path="/tools/disease-support-communities" element={<DiseaseSupportCommunities />} />

          {/* Cycle 56 — DIY / garage / lawn / mower / snow */}
          <Route path="/tools/diy-repair-apps" element={<DiyRepairApps />} />
          <Route path="/tools/smart-garage-opener" element={<SmartGarageOpener />} />
          <Route path="/tools/lawn-care-apps" element={<LawnCareApps />} />
          <Route path="/tools/robotic-mower-pick" element={<RoboticMowerPick />} />
          <Route path="/tools/snow-blower-pick" element={<SnowBlowerPick />} />

          {/* Cycle 57 — pet / birds / chickens / sales */}
          <Route path="/tools/pet-loss-grief" element={<PetLossGrief />} />
          <Route path="/tools/bird-feeder-cam" element={<BirdFeederCam />} />
          <Route path="/tools/backyard-chicken-apps" element={<BackyardChickenApps />} />
          <Route path="/tools/estate-sale-finder" element={<EstateSaleFinder />} />
          <Route path="/tools/yard-sale-apps" element={<YardSaleApps />} />

          {/* Cycle 58 — pencil / email / pipes / generator / grill */}
          <Route path="/tools/apple-pencil-ipad-coach" element={<ApplePencilIpadCoach />} />
          <Route path="/tools/email-folders-rules" element={<EmailFoldersRules />} />
          <Route path="/tools/frozen-pipes-prevention" element={<FrozenPipesPrevention />} />
          <Route path="/tools/generator-pick" element={<GeneratorPick />} />
          <Route path="/tools/pellet-grill-coach" element={<PelletGrillCoach />} />

          {/* Cycle 59 — credit / HELOC / airbnb / windfall */}
          <Route path="/tools/credit-score-coach" element={<CreditScoreCoach />} />
          <Route path="/tools/credit-repair-scam-warning" element={<CreditRepairScamWarning />} />
          <Route path="/tools/heloc-coach" element={<HelocCoach />} />
          <Route path="/tools/become-airbnb-host" element={<BecomeAirbnbHost />} />
          <Route path="/tools/sudden-money-checklist" element={<SuddenMoneyChecklist />} />

          {/* Cycle 60 — appraisers / auctions / coins / cards / collectibles */}
          <Route path="/tools/find-an-appraiser" element={<FindAnAppraiser />} />
          <Route path="/tools/sell-antiques-auctions" element={<SellAntiquesAuctions />} />
          <Route path="/tools/coin-collecting-apps" element={<CoinCollectingApps />} />
          <Route path="/tools/sports-cards-comics" element={<SportsCardsComics />} />
          <Route path="/tools/old-collectibles-reality" element={<OldCollectiblesReality />} />

          {/* Cycle 61 — troubleshooting */}
          <Route path="/tools/bluetooth-pairing-troubleshoot" element={<BluetoothPairingTroubleshoot />} />
          <Route path="/tools/phone-wont-charge" element={<PhoneWontCharge />} />
          <Route path="/tools/battery-drain-fix" element={<BatteryDrainFix />} />
          <Route path="/tools/internet-down-troubleshoot" element={<InternetDownTroubleshoot />} />
          <Route path="/tools/app-phone-frozen-fix" element={<AppPhoneFrozenFix />} />

          {/* Cycle 62 — pharmacy / bundles / grocery / Apple */}
          <Route path="/tools/pharmacy-rewards" element={<PharmacyRewards />} />
          <Route path="/tools/streaming-bundle-strategy" element={<StreamingBundleStrategy />} />
          <Route path="/tools/pause-streaming-rotation" element={<PauseStreamingRotation />} />
          <Route path="/tools/grocery-rewards" element={<GroceryRewards />} />
          <Route path="/tools/apple-one-bundle-coach" element={<AppleOneBundleCoach />} />

          {/* Cycle 63 — read-aloud / wifi / relay / pet / coupons */}
          <Route path="/tools/read-aloud-anywhere" element={<ReadAloudAnywhere />} />
          <Route path="/tools/wifi-password-sharing" element={<WifiPasswordSharing />} />
          <Route path="/tools/relay-services-tty" element={<RelayServicesTty />} />
          <Route path="/tools/pet-adoption-apps" element={<PetAdoptionApps />} />
          <Route path="/tools/deep-coupon-apps" element={<DeepCouponApps />} />

          {/* Cycle 64 — utility savings + smart-home + food */}
          <Route path="/tools/electric-bill-cutters" element={<ElectricBillCutters />} />
          <Route path="/tools/home-warranty-reality" element={<HomeWarrantyReality />} />
          <Route path="/tools/gas-price-apps" element={<GasPriceApps />} />
          <Route path="/tools/smart-plug-basics" element={<SmartPlugBasics />} />
          <Route path="/tools/freezer-inventory" element={<FreezerInventory />} />

          {/* Cycle 65 — travel + legacy */}
          <Route path="/tools/travel-insurance-reality" element={<TravelInsuranceReality />} />
          <Route path="/tools/luggage-tracker-picks" element={<LuggageTrackerPicks />} />
          <Route path="/tools/offline-maps-how-to" element={<OfflineMapsHowTo />} />
          <Route path="/tools/digital-legacy-planner" element={<DigitalLegacyPlanner />} />
          <Route path="/tools/memorial-facebook-guide" element={<MemorialFacebookGuide />} />

          {/* Cycle 66 — health tech */}
          <Route path="/tools/glucose-monitor-picks" element={<GlucoseMonitorPicks />} />
          <Route path="/tools/medical-alert-compare" element={<MedicalAlertCompare />} />
          <Route path="/tools/telehealth-basics" element={<TelehealthBasics />} />
          <Route path="/tools/hearing-test-apps" element={<HearingTestApps />} />
          <Route path="/tools/wellness-ring-picks" element={<WellnessRingPicks />} />

          {/* Cycle 67 — scam defenses */}
          <Route path="/tools/grandparent-scam-defense" element={<GrandparentScamDefense />} />
          <Route path="/tools/irs-scam-playbook" element={<IrsScamPlaybook />} />
          <Route path="/tools/fake-amazon-calls" element={<FakeAmazonCalls />} />
          <Route path="/tools/medicare-scam-guide" element={<MedicareScamGuide />} />
          <Route path="/tools/puppy-scam-guide" element={<PuppyScamGuide />} />

          {/* Cycle 68 — phone basics */}
          <Route path="/tools/block-number-how-to" element={<BlockNumberHowTo />} />
          <Route path="/tools/email-organizing-basics" element={<EmailOrganizingBasics />} />
          <Route path="/tools/silence-unknown-callers" element={<SilenceUnknownCallers />} />
          <Route path="/tools/phone-storage-cleanup" element={<PhoneStorageCleanup />} />
          <Route path="/tools/screenshot-how-to" element={<ScreenshotHowTo />} />

          {/* Cycle 69 — passwords + accounts */}
          <Route path="/tools/password-manager-compare" element={<PasswordManagerCompare />} />
          <Route path="/tools/two-factor-app-picks" element={<TwoFactorAppPicks />} />
          <Route path="/tools/passkey-explainer" element={<PasskeyExplainer />} />
          <Route path="/tools/account-recovery-plan" element={<AccountRecoveryPlan />} />
          <Route path="/tools/family-password-sharing" element={<FamilyPasswordSharing />} />

          {/* Cycle 70 — entertainment + connection */}
          <Route path="/tools/video-call-group-tips" element={<VideoCallGroupTips />} />
          <Route path="/tools/audiobook-apps" element={<AudiobookApps />} />
          <Route path="/tools/digital-photo-frames" element={<DigitalPhotoFrames />} />
          <Route path="/tools/retirement-community-wifi" element={<RetirementCommunityWifi />} />
          <Route path="/tools/jigsaw-puzzle-apps" element={<JigsawPuzzleApps />} />

          {/* Cycle 71 — driving + delivery */}
          <Route path="/tools/rideshare-for-seniors" element={<RideshareForSeniors />} />
          <Route path="/tools/food-delivery-compare" element={<FoodDeliveryCompare />} />
          <Route path="/tools/car-repair-finder" element={<CarRepairFinder />} />
          <Route path="/tools/ev-charging-basics" element={<EvChargingBasics />} />
          <Route path="/tools/roadside-assistance-apps" element={<RoadsideAssistanceApps />} />

          {/* Cycle 72 — kitchen + home tech */}
          <Route path="/tools/air-fryer-basics" element={<AirFryerBasics />} />
          <Route path="/tools/robot-vacuum-picks" element={<RobotVacuumPicks />} />
          <Route path="/tools/smart-doorbell-compare" element={<SmartDoorbellCompare />} />
          <Route path="/tools/leak-detection-sensors" element={<LeakDetectionSensors />} />
          <Route path="/tools/garage-door-opener-smart" element={<GarageDoorOpenerSmart />} />

          {/* Cycle 73 — money + banking */}
          <Route path="/tools/high-yield-savings-picks" element={<HighYieldSavingsPicks />} />
          <Route path="/tools/zelle-venmo-cash-app" element={<ZelleVenmoCashApp />} />
          <Route path="/tools/fraud-alert-setup" element={<FraudAlertSetup />} />
          <Route path="/tools/retirement-calculator-picks" element={<RetirementCalculatorPicks />} />
          <Route path="/tools/credit-freeze-how-to" element={<CreditFreezeHowTo />} />

          {/* Cycle 74 — smart speakers + AI voice */}
          <Route path="/tools/alexa-routines-primer" element={<AlexaRoutinesPrimer />} />
          <Route path="/tools/google-home-basics" element={<GoogleHomeBasics />} />
          <Route path="/tools/chatgpt-for-seniors" element={<ChatGptForSeniors />} />
          <Route path="/tools/apple-intelligence-guide" element={<AppleIntelligenceGuide />} />
          <Route path="/tools/voice-shopping-tips" element={<VoiceShoppingTips />} />

          {/* Cycle 75 — photos + memories */}
          <Route path="/tools/photo-backup-compare" element={<PhotoBackupCompare />} />
          <Route path="/tools/scan-old-photos" element={<ScanOldPhotos />} />
          <Route path="/tools/family-tree-apps" element={<FamilyTreeApps />} />
          <Route path="/tools/video-converter-free" element={<VideoConverterFree />} />
          <Route path="/tools/photo-book-services" element={<PhotoBookServices />} />

          {/* Cycle 76 — shopping + buying */}
          <Route path="/tools/amazon-shopping-tips" element={<AmazonShoppingTips />} />
          <Route path="/tools/costco-membership-math" element={<CostcoMembershipMath />} />
          <Route path="/tools/outlet-deals-apps" element={<OutletDealsApps />} />
          <Route path="/tools/returns-refunds-how-to" element={<ReturnsRefundsHowTo />} />
          <Route path="/tools/online-thrift-stores" element={<OnlineThriftStores />} />

          {/* Cycle 77 — travel + cruise tech */}
          <Route path="/tools/cruise-app-guide" element={<CruiseAppGuide />} />
          <Route path="/tools/airline-app-picks" element={<AirlineAppPicks />} />
          <Route path="/tools/tsa-precheck-global" element={<TsaPrecheckGlobal />} />
          <Route path="/tools/passport-photo-apps" element={<PassportPhotoApps />} />
          <Route path="/tools/hotel-loyalty-programs" element={<HotelLoyaltyPrograms />} />

          {/* Cycle 78 — estate + insurance */}
          <Route path="/tools/home-inventory-apps" element={<HomeInventoryApps />} />
          <Route path="/tools/will-software-compare" element={<WillSoftwareCompare />} />
          <Route path="/tools/estate-executor-tools" element={<EstateExecutorTools />} />
          <Route path="/tools/beneficiary-checkup" element={<BeneficiaryCheckup />} />
          <Route path="/tools/funeral-prearrangement" element={<FuneralPrearrangement />} />

          {/* Cycle 79 — hobbies + crafts */}
          <Route path="/tools/knitting-community-apps" element={<KnittingCommunityApps />} />
          <Route path="/tools/bird-id-apps" element={<BirdIdApps />} />
          <Route path="/tools/recipe-app-picks" element={<RecipeAppPicks />} />
          <Route path="/tools/woodworking-plans" element={<WoodworkingPlans />} />
          <Route path="/tools/fishing-apps" element={<FishingApps />} />

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
          <Route path="/practice/phone" element={<Navigate to="/practice/suspicious-call" replace />} />
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
          <Route path="/tools/cord-cutter-wizard"          element={<CordCutterWizard />} />
          <Route path="/tools/online-banking-safety"       element={<OnlineBankingSafety />} />
          <Route path="/tools/senior-friendly-apps"        element={<SeniorFriendlyApps />} />
          <Route path="/tools/find-lost-items"             element={<FindLostItems />} />
          <Route path="/tools/smart-speaker-picker"        element={<SmartSpeakerPicker />} />
          <Route path="/tools/tablet-or-laptop"            element={<TabletOrLaptop />} />
          <Route path="/tools/phone-insurance-decision"    element={<PhoneInsuranceDecision />} />
          <Route path="/tools/photo-library-tips"          element={<PhotoLibraryTips />} />
          <Route path="/tools/voicemail-setup"             element={<VoicemailSetup />} />
          <Route path="/tools/tech-buddy-setup"            element={<TechBuddySetup />} />
          <Route path="/tools/voter-info-verifier"         element={<VoterInfoVerifier />} />
          <Route path="/tools/amazon-review-spotter"       element={<AmazonReviewSpotter />} />
          <Route path="/tools/speed-up-device"             element={<SpeedUpDevice />} />
          <Route path="/tools/router-upgrade-helper"       element={<RouterUpgradeHelper />} />
          <Route path="/tools/telehealth-prep"             element={<TelehealthPrep />} />
          <Route path="/tools/marketplace-scam-spotter"    element={<MarketplaceScamSpotter />} />
          <Route path="/tools/dictation-setup"             element={<DictationSetup />} />
          <Route path="/tools/account-deletion-wizard"     element={<AccountDeletionWizard />} />
          <Route path="/tools/free-tax-filing"             element={<FreeTaxFiling />} />
          <Route path="/tools/library-power-pack"          element={<LibraryPowerPack />} />
          <Route path="/tools/shared-family-calendar"      element={<SharedFamilyCalendar />} />
          <Route path="/tools/low-cost-internet"           element={<LowCostInternet />} />
          <Route path="/tools/stay-connected"              element={<StayConnected />} />
          <Route path="/tools/ai-chatbot-guide"            element={<AiChatbotGuide />} />
          <Route path="/tools/renew-id-online"             element={<RenewIdOnline />} />
          <Route path="/tools/common-scams-library"        element={<CommonScamsLibrary />} />
          <Route path="/tools/cookie-consent-decoder"      element={<CookieConsentDecoder />} />
          <Route path="/tools/social-privacy-lockdown"     element={<SocialPrivacyLockdown />} />
          <Route path="/tools/weather-alerts-setup"        element={<WeatherAlertsSetup />} />
          <Route path="/tools/social-security-setup"       element={<SocialSecuritySetup />} />
          <Route path="/tools/car-phone-setup"             element={<CarPhoneSetup />} />
          <Route path="/tools/sell-online-safely"          element={<SellOnlineSafely />} />
          <Route path="/tools/credit-freeze-walkthrough"   element={<CreditFreezeWalkthrough />} />
          <Route path="/tools/podcast-starter"             element={<PodcastStarter />} />
          <Route path="/tools/online-memorial-setup"       element={<OnlineMemorialSetup />} />
          <Route path="/tools/payment-app-setup"           element={<PaymentAppSetup />} />
          <Route path="/tools/online-shopping-safety"      element={<OnlineShoppingSafety />} />
          <Route path="/tools/wifi-calling-setup"          element={<WifiCallingSetup />} />
          <Route path="/tools/fitness-tracker-picker"      element={<FitnessTrackerPicker />} />
          <Route path="/tools/smart-lock-picker"           element={<SmartLockPicker />} />
          <Route path="/tools/kindle-setup"                element={<KindleSetup />} />
          <Route path="/tools/maps-navigation-setup"       element={<MapsNavigationSetup />} />
          <Route path="/tools/find-lost-phone"             element={<FindLostPhone />} />
          <Route path="/tools/video-doorbell-picker"       element={<VideoDoorbellPicker />} />
          <Route path="/tools/streaming-service-setup"     element={<StreamingServiceSetup />} />
          <Route path="/tools/document-scanner-setup"      element={<DocumentScannerSetup />} />
          <Route path="/tools/remote-tech-help"            element={<RemoteTechHelp />} />
          <Route path="/tools/online-forms-helper"         element={<OnlineFormsHelper />} />
          <Route path="/tools/screen-recording-guide"      element={<ScreenRecordingGuide />} />
          <Route path="/tools/free-office-suite"           element={<FreeOfficeSuite />} />
          <Route path="/tools/new-computer-setup"          element={<NewComputerSetup />} />
          <Route path="/tools/translation-tools"           element={<TranslationTools />} />
          <Route path="/tools/senior-fitness-apps"         element={<SeniorFitnessApps />} />
          <Route path="/tools/ai-voice-defense"            element={<AiVoiceDefense />} />
          <Route path="/tools/online-doctor-portal-setup"  element={<OnlineDoctorPortalSetup />} />
          <Route path="/tools/credit-card-rewards-picker"  element={<CreditCardRewardsPicker />} />
          <Route path="/tools/email-organization"          element={<EmailOrganization />} />
          <Route path="/tools/usb-storage-guide"           element={<UsbStorageGuide />} />
          <Route path="/tools/pet-tech-picker"             element={<PetTechPicker />} />
          <Route path="/tools/email-signature-builder"     element={<EmailSignatureBuilder />} />
          <Route path="/tools/guest-wifi-setup"            element={<GuestWifiSetup />} />
          <Route path="/tools/hearing-aid-apps"            element={<HearingAidApps />} />
          <Route path="/tools/smart-garage-door"           element={<SmartGarageDoor />} />
          <Route path="/tools/robot-vacuum-picker"         element={<RobotVacuumPicker />} />
          <Route path="/tools/e-signature-setup"           element={<ESignatureSetup />} />
          <Route path="/tools/music-streaming-picker"      element={<MusicStreamingPicker />} />
          <Route path="/tools/home-office-setup"           element={<HomeOfficeSetup />} />
          <Route path="/tools/deepfake-video-spotter"      element={<DeepfakeVideoSpotter />} />
          <Route path="/tools/free-legal-help"             element={<FreeLegalHelp />} />
          <Route path="/tools/spouse-survivor-benefits"    element={<SpouseSurvivorBenefits />} />
          <Route path="/tools/caller-id-setup"             element={<CallerIdSetup />} />
          <Route path="/tools/backup-verification"         element={<BackupVerification />} />
          <Route path="/tools/phone-family-link-setup"     element={<PhoneFamilyLinkSetup />} />
          <Route path="/tools/veteran-tech-benefits"       element={<VeteranTechBenefits />} />
          <Route path="/tools/print-from-phone"            element={<PrintFromPhone />} />
          <Route path="/tools/low-vision-apps"             element={<LowVisionApps />} />
          <Route path="/tools/network-privacy-checker"     element={<NetworkPrivacyChecker />} />
          <Route path="/tools/senior-transit-apps"         element={<SeniorTransitApps />} />
          <Route path="/tools/bill-refund-dispute"         element={<BillRefundDispute />} />
          <Route path="/tools/online-dating-safety"        element={<OnlineDatingSafety />} />
          <Route path="/tools/travel-booking-safety"       element={<TravelBookingSafety />} />
          <Route path="/tools/computer-repair-options"     element={<ComputerRepairOptions />} />
          <Route path="/tools/senior-discount-finder-app"  element={<Navigate to="/tools/senior-discount-finder" replace />} />
          <Route path="/tools/notebook-alternatives"       element={<NotebookAlternatives />} />
          <Route path="/tools/bedtime-tech-routine"        element={<BedtimeTechRoutine />} />
          <Route path="/tools/real-estate-wire-scam"       element={<RealEstateWireScam />} />
          <Route path="/tools/iphone-shortcuts"            element={<IphoneShortcuts />} />
          <Route path="/tools/android-shortcuts"           element={<AndroidShortcuts />} />
          <Route path="/tools/crypto-scam-defense"         element={<CryptoScamDefense />} />
          <Route path="/tools/nutrition-app-picker"        element={<NutritionAppPicker />} />
          <Route path="/tools/investment-app-picker"       element={<InvestmentAppPicker />} />
          <Route path="/tools/blood-pressure-apps"         element={<BloodPressureApps />} />
          <Route path="/tools/online-will-estate"          element={<OnlineWillEstate />} />
          <Route path="/tools/social-media-first-steps"    element={<SocialMediaFirstSteps />} />
          <Route path="/tools/countdown-to-retirement"     element={<CountdownToRetirement />} />
          <Route path="/tools/bluetooth-earbud-picker"     element={<BluetoothEarbudPicker />} />
          <Route path="/tools/video-call-etiquette"        element={<VideoCallEtiquette />} />
          <Route path="/tools/prescription-delivery-apps"  element={<PrescriptionDeliveryApps />} />
          <Route path="/tools/language-learning-apps"      element={<LanguageLearningApps />} />
          <Route path="/tools/brain-games-apps"            element={<BrainGamesApps />} />
          <Route path="/tools/news-app-picker"             element={<NewsAppPicker />} />
          <Route path="/tools/voice-memo-transcribe"       element={<VoiceMemoTranscribe />} />
          <Route path="/tools/home-vision-test"            element={<HomeVisionTest />} />
          <Route path="/tools/smart-tv-accessibility"      element={<SmartTvAccessibility />} />
          <Route path="/tools/televet-setup"               element={<TelevetSetup />} />
          <Route path="/tools/board-games-online"          element={<BoardGamesOnline />} />
          <Route path="/tools/gas-buddy-alternatives"      element={<GasBuddyAlternatives />} />
          <Route path="/tools/video-editing-apps"          element={<VideoEditingApps />} />
          <Route path="/tools/home-care-apps-for-family"   element={<HomeCareAppsForFamily />} />
          <Route path="/tools/real-estate-app-picker"      element={<RealEstateAppPicker />} />
          <Route path="/tools/estate-sale-helper"          element={<EstateSaleHelper />} />
          <Route path="/tools/grocery-list-apps"           element={<GroceryListApps />} />
          <Route path="/tools/smart-scale-picker"          element={<SmartScalePicker />} />
          <Route path="/tools/senior-tech-mistakes"        element={<SeniorTechMistakes />} />
          <Route path="/tools/phone-carrier-comparison"    element={<PhoneCarrierComparison />} />
          <Route path="/tools/bluetooth-pairing-help"      element={<Navigate to="/tools/bluetooth-pairing-helper" replace />} />
          <Route path="/tools/phone-repair-or-replace"     element={<PhoneRepairOrReplace />} />
          <Route path="/tools/online-classes-picker"       element={<OnlineClassesPicker />} />
          <Route path="/tools/call-screener-setup"         element={<CallScreenerSetup />} />
          <Route path="/tools/email-unsubscribe-flow"      element={<EmailUnsubscribeFlow />} />
          <Route path="/tools/family-recipe-app"           element={<FamilyRecipeApp />} />
          <Route path="/tools/safe-senior-computer-setup"  element={<SafeSeniorComputerSetup />} />

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
