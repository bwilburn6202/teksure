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
const BitwardenSetupSeniors  = lazy(() => import("./pages/tools/BitwardenSetupSeniors"));
const TwoFactorAuthSetup     = lazy(() => import("./pages/tools/TwoFactorAuthSetup"));
const AppleIDAccountSecurity = lazy(() => import("./pages/tools/AppleIDAccountSecurity"));
const GoogleAccountSecurityCheckup = lazy(() => import("./pages/tools/GoogleAccountSecurityCheckup"));
const HardwareSecurityKeys   = lazy(() => import("./pages/tools/HardwareSecurityKeys"));
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
const AllTrailsForSeniors    = lazy(() => import("./pages/tools/AllTrailsForSeniors"));
const NationalParksAppSeniors = lazy(() => import("./pages/tools/NationalParksAppSeniors"));
const MerlinBirdSongID       = lazy(() => import("./pages/tools/MerlinBirdSongID"));
const INaturalistAppForSeniors = lazy(() => import("./pages/tools/INaturalistAppForSeniors"));
const SeniorOutdoorClubsApps = lazy(() => import("./pages/tools/SeniorOutdoorClubsApps"));
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
const FamilySearchFreeApp    = lazy(() => import("./pages/tools/FamilySearchFreeApp"));
const StoryWorthFamilyMemoir = lazy(() => import("./pages/tools/StoryWorthFamilyMemoir"));
const MyHeritageDNAComparison = lazy(() => import("./pages/tools/MyHeritageDNAComparison"));
const RecordFamilyHistoryAudio = lazy(() => import("./pages/tools/RecordFamilyHistoryAudio"));
const OldPhotoScanningApps   = lazy(() => import("./pages/tools/OldPhotoScanningApps"));
const DigitalPhotoFramePicker = lazy(() => import("./pages/tools/DigitalPhotoFramePicker"));
const TvSoundBarPicker       = lazy(() => import("./pages/tools/TvSoundBarPicker"));
const VolunteerApps          = lazy(() => import("./pages/tools/VolunteerApps"));
const MasterClassReviewSeniors = lazy(() => import("./pages/tools/MasterClassReviewSeniors"));
const KhanAcademyForSeniors  = lazy(() => import("./pages/tools/KhanAcademyForSeniors"));
const OLLILifelongLearning   = lazy(() => import("./pages/tools/OLLILifelongLearning"));
const AARPCreateSeniorClasses = lazy(() => import("./pages/tools/AARPCreateSeniorClasses"));
const SeniorVolunteerOpportunities = lazy(() => import("./pages/tools/SeniorVolunteerOpportunities"));

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
const FidelityAppForSeniors  = lazy(() => import("./pages/tools/FidelityAppForSeniors"));
const VanguardForRetirees    = lazy(() => import("./pages/tools/VanguardForRetirees"));
const RobinhoodWebullSeniorWarning = lazy(() => import("./pages/tools/RobinhoodWebullSeniorWarning"));
const SchwabIntelligentPortfolios = lazy(() => import("./pages/tools/SchwabIntelligentPortfolios"));
const EstateBeneficiaryReview = lazy(() => import("./pages/tools/EstateBeneficiaryReview"));
const AdultScreenTimeCoach   = lazy(() => import("./pages/tools/AdultScreenTimeCoach"));

// ── Cycle 24 (April 29 2026) — backup/photo-org/medical/bills/journal ──
const BackupStrategy         = lazy(() => import("./pages/tools/BackupStrategy"));
const PhotoOrganizationCoach = lazy(() => import("./pages/tools/PhotoOrganizationCoach"));
const MedicalRecordsOrganizer = lazy(() => import("./pages/tools/MedicalRecordsOrganizer"));
const BillsPaperlessOrganizer = lazy(() => import("./pages/tools/BillsPaperlessOrganizer"));
const JournalingApps         = lazy(() => import("./pages/tools/JournalingApps"));
const DayOneJournalApp       = lazy(() => import("./pages/tools/DayOneJournalApp"));
const SeniorMemoirWriting    = lazy(() => import("./pages/tools/SeniorMemoirWriting"));
const GratitudeAppForSeniors = lazy(() => import("./pages/tools/GratitudeAppForSeniors"));
const AmazonKDPForSeniors    = lazy(() => import("./pages/tools/AmazonKDPForSeniors"));
const SeniorBookClubsOnline  = lazy(() => import("./pages/tools/SeniorBookClubsOnline"));

// ── Cycle 25 (April 29 2026) — caregiving / accessibility / health ──
const CaregiverCoordinationApps = lazy(() => import("./pages/tools/CaregiverCoordinationApps"));
const VoiceControlAccessibility = lazy(() => import("./pages/tools/VoiceControlAccessibility"));
const MedicalAlertPicker     = lazy(() => import("./pages/tools/MedicalAlertPicker"));
const TelehealthVisitCoach   = lazy(() => import("./pages/tools/TelehealthVisitCoach"));
const OnlinePharmacyCoach    = lazy(() => import("./pages/tools/OnlinePharmacyCoach"));
const AmazonPharmacyForSeniors = lazy(() => import("./pages/tools/AmazonPharmacyForSeniors"));
const CostPlusDrugsExplained = lazy(() => import("./pages/tools/CostPlusDrugsExplained"));
const CapsulePharmacyDelivery = lazy(() => import("./pages/tools/CapsulePharmacyDelivery"));
const PillPackForSeniors     = lazy(() => import("./pages/tools/PillPackForSeniors"));
const Medicare90DaySupply    = lazy(() => import("./pages/tools/Medicare90DaySupply"));

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
const VPNForSeniorsExplained = lazy(() => import("./pages/tools/VPNForSeniorsExplained"));
const MalwarebytesForSeniors = lazy(() => import("./pages/tools/MalwarebytesForSeniors"));
const PublicWifiSafetyTutorial = lazy(() => import("./pages/tools/PublicWifiSafetyTutorial"));
const RouterSecuritySetup    = lazy(() => import("./pages/tools/RouterSecuritySetup"));
const PhoneSecurityCheckup   = lazy(() => import("./pages/tools/PhoneSecurityCheckup"));
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
const RokuSetupForSeniors    = lazy(() => import("./pages/tools/RokuSetupForSeniors"));
const FireTVStickGuide       = lazy(() => import("./pages/tools/FireTVStickGuide"));
const UniversalRemoteForSeniors = lazy(() => import("./pages/tools/UniversalRemoteForSeniors"));
const CaptioningCallSeniors  = lazy(() => import("./pages/tools/CaptioningCallSeniors"));
const SoundbarTVAudioForSeniors = lazy(() => import("./pages/tools/SoundbarTVAudioForSeniors"));

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
const ChessComForSeniors     = lazy(() => import("./pages/tools/ChessComForSeniors"));
const VivinoWineApp          = lazy(() => import("./pages/tools/VivinoWineApp"));
const TriviaAppsForSeniors   = lazy(() => import("./pages/tools/TriviaAppsForSeniors"));
const AARPGamesForSeniors    = lazy(() => import("./pages/tools/AARPGamesForSeniors"));
const JeopardyAtHomeApps     = lazy(() => import("./pages/tools/JeopardyAtHomeApps"));
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
const YouVersionBibleApp     = lazy(() => import("./pages/tools/YouVersionBibleApp"));
const HallowPrayerApp        = lazy(() => import("./pages/tools/HallowPrayerApp"));
const JewishHolidayApps      = lazy(() => import("./pages/tools/JewishHolidayApps"));
const InsightTimerMeditation = lazy(() => import("./pages/tools/InsightTimerMeditation"));
const ChurchLiveStreamApps   = lazy(() => import("./pages/tools/ChurchLiveStreamApps"));
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
const AppleWalletForLoyalty  = lazy(() => import("./pages/tools/AppleWalletForLoyalty"));
const StarbucksAppRewards    = lazy(() => import("./pages/tools/StarbucksAppRewards"));
const PharmacyAppRewards     = lazy(() => import("./pages/tools/PharmacyAppRewards"));
const GroceryAppDeepDive     = lazy(() => import("./pages/tools/GroceryAppDeepDive"));
const GasStationAppRewards   = lazy(() => import("./pages/tools/GasStationAppRewards"));
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
const MedicalGuardianReview  = lazy(() => import("./pages/tools/MedicalGuardianReview"));
const LifeAlertVsCompetitors = lazy(() => import("./pages/tools/LifeAlertVsCompetitors"));
const AppleWatchSOSTutorial  = lazy(() => import("./pages/tools/AppleWatchSOSTutorial"));
const AloeCareCaregivingApp  = lazy(() => import("./pages/tools/AloeCareCaregivingApp"));
const PhilipsLifelineSenior  = lazy(() => import("./pages/tools/PhilipsLifelineSenior"));
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
const UberLyftForSeniors     = lazy(() => import("./pages/tools/UberLyftForSeniors"));
const SeniorParatransitGuide = lazy(() => import("./pages/tools/SeniorParatransitGuide"));
const SeniorDriverEvaluation = lazy(() => import("./pages/tools/SeniorDriverEvaluation"));
const CarRentalAppsForSeniors = lazy(() => import("./pages/tools/CarRentalAppsForSeniors"));
const GasBuddyAppGuide       = lazy(() => import("./pages/tools/GasBuddyAppGuide"));

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

// ── Cycle 80 (April 29 2026) — caregivers + senior care ──
const CaregiverApps          = lazy(() => import("./pages/tools/CaregiverApps"));
const AgingInPlaceTech       = lazy(() => import("./pages/tools/AgingInPlaceTech"));
const MemoryCareApps         = lazy(() => import("./pages/tools/MemoryCareApps"));
const ParkinsonsApps         = lazy(() => import("./pages/tools/ParkinsonsApps"));
const RespiteCareFinders     = lazy(() => import("./pages/tools/RespiteCareFinders"));

// ── Cycle 81 (April 29 2026) — tax + paperwork ──
const TaxFilingPicks         = lazy(() => import("./pages/tools/TaxFilingPicks"));
const PropertyTaxAppeal      = lazy(() => import("./pages/tools/PropertyTaxAppeal"));
const PaperShreddingGuide    = lazy(() => import("./pages/tools/PaperShreddingGuide"));
const ScannerAppPicks        = lazy(() => import("./pages/tools/ScannerAppPicks"));
const MedicalRecordsRequest  = lazy(() => import("./pages/tools/MedicalRecordsRequest"));

// ── Cycle 82 (April 29 2026) — accessibility ──
const MagnifierAppPicks      = lazy(() => import("./pages/tools/MagnifierAppPicks"));
const IphoneMagnifierTutorial = lazy(() => import("./pages/tools/IphoneMagnifierTutorial"));
const LiveCaptionsForSeniors = lazy(() => import("./pages/tools/LiveCaptionsForSeniors"));
const AccessibilityShortcutsIphone = lazy(() => import("./pages/tools/AccessibilityShortcutsIphone"));
const AndroidAccessibilityFeatures = lazy(() => import("./pages/tools/AndroidAccessibilityFeatures"));
const EmergencySOSPhones     = lazy(() => import("./pages/tools/EmergencySOSPhones"));
const ColorBlindTools        = lazy(() => import("./pages/tools/ColorBlindTools"));
const SnapseedPhotoEditing   = lazy(() => import("./pages/tools/SnapseedPhotoEditing"));
const IphoneCameraTipsSeniors = lazy(() => import("./pages/tools/IphoneCameraTipsSeniors"));
const PhotoOrganizingMassive = lazy(() => import("./pages/tools/PhotoOrganizingMassive"));
const AirDropForSharing      = lazy(() => import("./pages/tools/AirDropForSharing"));
const GooglePhotosForSeniors = lazy(() => import("./pages/tools/GooglePhotosForSeniors"));
const OneHandedTyping        = lazy(() => import("./pages/tools/OneHandedTyping"));
const BrailleDisplays        = lazy(() => import("./pages/tools/BrailleDisplays"));
const DictationTraining      = lazy(() => import("./pages/tools/DictationTraining"));

// ── Cycle 83 (April 29 2026) — home safety ──
const WaterShutoffGuide      = lazy(() => import("./pages/tools/WaterShutoffGuide"));
const FireSafetyChecklist    = lazy(() => import("./pages/tools/FireSafetyChecklist"));
const GasLeakDetect          = lazy(() => import("./pages/tools/GasLeakDetect"));
const CarbonMonoxidePicks    = lazy(() => import("./pages/tools/CarbonMonoxidePicks"));
const EmergencyKitChecklist  = lazy(() => import("./pages/tools/EmergencyKitChecklist"));

// ── Cycle 84 (April 29 2026) — weather + outdoor ──
const WeatherAppPicks        = lazy(() => import("./pages/tools/WeatherAppPicks"));
const GardenWeatherTools     = lazy(() => import("./pages/tools/GardenWeatherTools"));
const HikingGpsApps          = lazy(() => import("./pages/tools/HikingGpsApps"));
const BackyardSafetyAudit    = lazy(() => import("./pages/tools/BackyardSafetyAudit"));
const SnowSafetyTech         = lazy(() => import("./pages/tools/SnowSafetyTech"));

// ── Cycle 85 (April 29 2026) — civic + community ──
const VotingTechHelp         = lazy(() => import("./pages/tools/VotingTechHelp"));
const NextdoorBasics         = lazy(() => import("./pages/tools/NextdoorBasics"));
const EbayForSeniorSellers   = lazy(() => import("./pages/tools/EbayForSeniorSellers"));
const FacebookMarketplaceTips = lazy(() => import("./pages/tools/FacebookMarketplaceTips"));
const PoshmarkVintageSelling = lazy(() => import("./pages/tools/PoshmarkVintageSelling"));
const EstateSaleApps         = lazy(() => import("./pages/tools/EstateSaleApps"));
const SeniorYardSaleStrategy = lazy(() => import("./pages/tools/SeniorYardSaleStrategy"));
const VolunteerMatchApps     = lazy(() => import("./pages/tools/VolunteerMatchApps"));
const LocalNewsApps          = lazy(() => import("./pages/tools/LocalNewsApps"));
const CityOpenDataTools      = lazy(() => import("./pages/tools/CityOpenDataTools"));

// ── Cycle 86 (April 29 2026) — pet tech ──
const PetCameraPicks         = lazy(() => import("./pages/tools/PetCameraPicks"));
const PetGpsTrackers         = lazy(() => import("./pages/tools/PetGpsTrackers"));
const AutoFeederPicks        = lazy(() => import("./pages/tools/AutoFeederPicks"));
const PetTelevetVisits       = lazy(() => import("./pages/tools/PetTelevetVisits"));
const OnlinePetPharmacies    = lazy(() => import("./pages/tools/OnlinePetPharmacies"));

// ── Cycle 87 (April 29 2026) — kids/grandkids tech ──
const ScreenTimeForKids      = lazy(() => import("./pages/tools/ScreenTimeForKids"));
const KidSafeYouTube         = lazy(() => import("./pages/tools/KidSafeYouTube"));
const GamingForGrandkids     = lazy(() => import("./pages/tools/GamingForGrandkids"));
const OnlineLearningKids     = lazy(() => import("./pages/tools/OnlineLearningKids"));
const AudiobookKids          = lazy(() => import("./pages/tools/AudiobookKids"));

// ── Cycle 88 (April 29 2026) — senior fitness ──
const ChairYogaApps          = lazy(() => import("./pages/tools/ChairYogaApps"));
const BalanceExerciseApps    = lazy(() => import("./pages/tools/BalanceExerciseApps"));
const SwimWorkoutTrackers    = lazy(() => import("./pages/tools/SwimWorkoutTrackers"));
const SeniorFitnessYouTube   = lazy(() => import("./pages/tools/SeniorFitnessYouTube"));
const StepCounterCompare     = lazy(() => import("./pages/tools/StepCounterCompare"));

// ── Cycle 89 (April 29 2026) — clinical tech ──
const TeleDentistry          = lazy(() => import("./pages/tools/TeleDentistry"));
const EyeExamApps            = lazy(() => import("./pages/tools/EyeExamApps"));
const HeartTrackerApps       = lazy(() => import("./pages/tools/HeartTrackerApps"));
const BloodPressureCuffs     = lazy(() => import("./pages/tools/BloodPressureCuffs"));
const MentalHealthAppsCompare = lazy(() => import("./pages/tools/MentalHealthAppsCompare"));

// ── Cycle 90 (April 29 2026) — faith + community ──
const ChurchLivestreamSetup  = lazy(() => import("./pages/tools/ChurchLivestreamSetup"));
const HymnAppPicks           = lazy(() => import("./pages/tools/HymnAppPicks"));
const BibleAppCompare        = lazy(() => import("./pages/tools/BibleAppCompare"));
const OnlineGriefSupport     = lazy(() => import("./pages/tools/OnlineGriefSupport"));
const SeniorPenPalApps       = lazy(() => import("./pages/tools/SeniorPenPalApps"));

// ── Cycle 91 (April 29 2026) — phone carrier ──
const ProviderSwitchGuide    = lazy(() => import("./pages/tools/ProviderSwitchGuide"));
const MvnoPickerGuide        = lazy(() => import("./pages/tools/MvnoPickerGuide"));
const FamilyPlanCompare      = lazy(() => import("./pages/tools/FamilyPlanCompare"));
const BurnerPhoneTips        = lazy(() => import("./pages/tools/BurnerPhoneTips"));
const RoamingTips            = lazy(() => import("./pages/tools/RoamingTips"));

// ── Cycle 92 (April 29 2026) — TV + entertainment ──
const AntennaPicks           = lazy(() => import("./pages/tools/AntennaPicks"));
const FreeStreamingChannels  = lazy(() => import("./pages/tools/FreeStreamingChannels"));
const SportsStreamCompare    = lazy(() => import("./pages/tools/SportsStreamCompare"));
const LocalTvCordCutting     = lazy(() => import("./pages/tools/LocalTvCordCutting"));
const ClosedCaptioningSetup  = lazy(() => import("./pages/tools/ClosedCaptioningSetup"));

// ── Cycle 93 (April 29 2026) — DIY + handyman ──
const HandymanFinder         = lazy(() => import("./pages/tools/HandymanFinder"));
const HomeImprovementApps    = lazy(() => import("./pages/tools/HomeImprovementApps"));
const AppliancePartsApps     = lazy(() => import("./pages/tools/AppliancePartsApps"));
const PaintColorApps         = lazy(() => import("./pages/tools/PaintColorApps"));
const FurnitureAssemblyHelp  = lazy(() => import("./pages/tools/FurnitureAssemblyHelp"));

// ── Cycle 94 (April 29 2026) — nutrition + meals ──
const MealKitDelivery        = lazy(() => import("./pages/tools/MealKitDelivery"));
const GroceryDeliveryApps    = lazy(() => import("./pages/tools/GroceryDeliveryApps"));
const InstacartForSeniors    = lazy(() => import("./pages/tools/InstacartForSeniors"));
const IbottaCashbackForSeniors = lazy(() => import("./pages/tools/IbottaCashbackForSeniors"));
const AmazonFreshWalmartPlus = lazy(() => import("./pages/tools/AmazonFreshWalmartPlus"));
const CostcoMembershipForSeniors = lazy(() => import("./pages/tools/CostcoMembershipForSeniors"));
const AmazonReturnsBasics    = lazy(() => import("./pages/tools/AmazonReturnsBasics"));
const NutritionLabelScanner  = lazy(() => import("./pages/tools/NutritionLabelScanner"));
const DietApps               = lazy(() => import("./pages/tools/DietApps"));
const SeniorMealPrograms     = lazy(() => import("./pages/tools/SeniorMealPrograms"));

// ── Cycle 95 (April 29 2026) — senior dating ──
const SeniorDatingApps       = lazy(() => import("./pages/tools/SeniorDatingApps"));
const WidowedRelationships   = lazy(() => import("./pages/tools/WidowedRelationships"));
const ScamDatingFlags        = lazy(() => import("./pages/tools/ScamDatingFlags"));
const GraceDating60Plus      = lazy(() => import("./pages/tools/GraceDating60Plus"));
const FirstDateTech          = lazy(() => import("./pages/tools/FirstDateTech"));

// ── Cycle 96 (April 29 2026) — language + learning ──
const LanguageAppCompare     = lazy(() => import("./pages/tools/LanguageAppCompare"));
const FreeUniversityCourses  = lazy(() => import("./pages/tools/FreeUniversityCourses"));
const CrosswordApps          = lazy(() => import("./pages/tools/CrosswordApps"));
const MemoirWritingApps      = lazy(() => import("./pages/tools/MemoirWritingApps"));
const ChessPicks             = lazy(() => import("./pages/tools/ChessPicks"));

// ── Cycle 97 (April 29 2026) — medication safety ──
const PillOrganizerSmart     = lazy(() => import("./pages/tools/PillOrganizerSmart"));
const MedReconciliation      = lazy(() => import("./pages/tools/MedReconciliation"));
const DrugInteractionCheckers = lazy(() => import("./pages/tools/DrugInteractionCheckers"));
const RxCouponApps           = lazy(() => import("./pages/tools/RxCouponApps"));
const MedicationDeliveryServices = lazy(() => import("./pages/tools/MedicationDeliveryServices"));

// ── Cycle 98 (April 29 2026) — kitchen tech ──
const SousVidePicks          = lazy(() => import("./pages/tools/SousVidePicks"));
const InstantPotApps         = lazy(() => import("./pages/tools/InstantPotApps"));
const PaprikaRecipeManager   = lazy(() => import("./pages/tools/PaprikaRecipeManager"));
const AllrecipesYummlyApps   = lazy(() => import("./pages/tools/AllrecipesYummlyApps"));
const SmartKitchenScalesApps = lazy(() => import("./pages/tools/SmartKitchenScalesApps"));
const MealPlanningApps       = lazy(() => import("./pages/tools/MealPlanningApps"));
const HelloFreshSeniorReview = lazy(() => import("./pages/tools/HelloFreshSeniorReview"));
const AmericasTestKitchenApp = lazy(() => import("./pages/tools/AmericasTestKitchenApp"));
const PBSPassportForSeniors  = lazy(() => import("./pages/tools/PBSPassportForSeniors"));
const MagnoliaNetworkApp     = lazy(() => import("./pages/tools/MagnoliaNetworkApp"));
const CrockpotInstantPotApps = lazy(() => import("./pages/tools/CrockpotInstantPotApps"));
const SeniorBakingTutorials  = lazy(() => import("./pages/tools/SeniorBakingTutorials"));
const KitchenScalePicks      = lazy(() => import("./pages/tools/KitchenScalePicks"));
const RecipeOrganizers       = lazy(() => import("./pages/tools/RecipeOrganizers"));
const SmartOvenPicks         = lazy(() => import("./pages/tools/SmartOvenPicks"));

// ── Cycle 99 (April 29 2026) — home gym + fitness gear ──
const HomeGymStarter         = lazy(() => import("./pages/tools/HomeGymStarter"));
const ResistanceBandsGuide   = lazy(() => import("./pages/tools/ResistanceBandsGuide"));
const MassageGunPicks        = lazy(() => import("./pages/tools/MassageGunPicks"));
const FoamRollerGuide        = lazy(() => import("./pages/tools/FoamRollerGuide"));
const SeniorBikeOptions      = lazy(() => import("./pages/tools/SeniorBikeOptions"));

// ── Cycle 100 (April 29 2026) — digital wellness ──
const BlueLightFilters       = lazy(() => import("./pages/tools/BlueLightFilters"));
const DigitalDetoxApps       = lazy(() => import("./pages/tools/DigitalDetoxApps"));
const EyeStrainTips          = lazy(() => import("./pages/tools/EyeStrainTips"));
const BedtimePhoneRoutine    = lazy(() => import("./pages/tools/BedtimePhoneRoutine"));
const ScreenBreakReminders   = lazy(() => import("./pages/tools/ScreenBreakReminders"));

// ── Cycle 101 (April 29 2026) — senior travel + adventure ──
const ScenicByways           = lazy(() => import("./pages/tools/ScenicByways"));
const AccessibleTravelGuide  = lazy(() => import("./pages/tools/AccessibleTravelGuide"));
const SeniorTrainTravel      = lazy(() => import("./pages/tools/SeniorTrainTravel"));
const RoadTripPlanners       = lazy(() => import("./pages/tools/RoadTripPlanners"));
const CruisePicks            = lazy(() => import("./pages/tools/CruisePicks"));

// ── Cycle 102 (April 29 2026) — senior workforce ──
const PartTimeJobsForSeniors = lazy(() => import("./pages/tools/PartTimeJobsForSeniors"));
const RetirementHobbyMonetize = lazy(() => import("./pages/tools/RetirementHobbyMonetize"));
const EncoreCareers          = lazy(() => import("./pages/tools/EncoreCareers"));
const OnlineBusinessForSeniors = lazy(() => import("./pages/tools/OnlineBusinessForSeniors"));
const FreelanceSenior        = lazy(() => import("./pages/tools/FreelanceSenior"));

// ── Cycle 103 (April 29 2026) — crime + safety ──
const HomeSecuritySystems    = lazy(() => import("./pages/tools/HomeSecuritySystems"));
const IdentityTheftRecovery  = lazy(() => import("./pages/tools/IdentityTheftRecovery"));
const SmokeAlarmTesting      = lazy(() => import("./pages/tools/SmokeAlarmTesting"));
const FrozenAccountsRecovery = lazy(() => import("./pages/tools/FrozenAccountsRecovery"));
const EstateFraudPrevention  = lazy(() => import("./pages/tools/EstateFraudPrevention"));

// ── Cycle 104 (April 29 2026) — grandparent-grandkid tech ──
const GrandparentTextingApps = lazy(() => import("./pages/tools/GrandparentTextingApps"));
const FamilyVideoGames       = lazy(() => import("./pages/tools/FamilyVideoGames"));
const KidsPenPalApps         = lazy(() => import("./pages/tools/KidsPenPalApps"));
const GrandparentBookClub    = lazy(() => import("./pages/tools/GrandparentBookClub"));
const RemoteStorytelling     = lazy(() => import("./pages/tools/RemoteStorytelling"));

// ── Cycle 105 (April 29 2026) — medical visit advocacy ──
const DoctorVisitPrep        = lazy(() => import("./pages/tools/DoctorVisitPrep"));
const SecondOpinionApps      = lazy(() => import("./pages/tools/SecondOpinionApps"));
const MedicalRecordsCarry    = lazy(() => import("./pages/tools/MedicalRecordsCarry"));
const SymptomCheckers        = lazy(() => import("./pages/tools/SymptomCheckers"));
const AdvocateForYourself    = lazy(() => import("./pages/tools/AdvocateForYourself"));

// ── Cycle 106 (April 29 2026) — financial well-being ──
const BudgetingApps          = lazy(() => import("./pages/tools/BudgetingApps"));
const DebtPayoffPlanner      = lazy(() => import("./pages/tools/DebtPayoffPlanner"));
const RothConversionGuide    = lazy(() => import("./pages/tools/RothConversionGuide"));
const AnnuityRealityCheck    = lazy(() => import("./pages/tools/AnnuityRealityCheck"));
const ReverseMortgageGuide   = lazy(() => import("./pages/tools/ReverseMortgageGuide"));

// ── Cycle 107 (April 29 2026) — Spanish-speaking seniors ──
const SpanishSpeakingSupport = lazy(() => import("./pages/tools/SpanishSpeakingSupport"));
const BilingualMedicalApps   = lazy(() => import("./pages/tools/BilingualMedicalApps"));
const RemittancesGuide       = lazy(() => import("./pages/tools/RemittancesGuide"));
const SpanishVotingHelp      = lazy(() => import("./pages/tools/SpanishVotingHelp"));
const SpanishRetirementResources = lazy(() => import("./pages/tools/SpanishRetirementResources"));

// ── Cycle 108 (April 29 2026) — smart home ──
const SmartHomeStarterKit    = lazy(() => import("./pages/tools/SmartHomeStarterKit"));
const SmartLockGuide         = lazy(() => import("./pages/tools/SmartLockGuide"));
const SmartThermostatPicks   = lazy(() => import("./pages/tools/SmartThermostatPicks"));
const SmartLightingBasics    = lazy(() => import("./pages/tools/SmartLightingBasics"));
const SmartHubExplained      = lazy(() => import("./pages/tools/SmartHubExplained"));

// ── Cycle 109 (April 29 2026) — senior phones + simple devices ──
const SimplePhonesForSeniors = lazy(() => import("./pages/tools/SimplePhonesForSeniors"));
const Jitterbug              = lazy(() => import("./pages/tools/Jitterbug"));
const GrandPadReview         = lazy(() => import("./pages/tools/GrandPadReview"));
const IpadVsFireTabletSeniors = lazy(() => import("./pages/tools/IpadVsFireTabletSeniors"));
const AppleWatchVsFitbitSeniors = lazy(() => import("./pages/tools/AppleWatchVsFitbitSeniors"));
const SeniorMobileGames      = lazy(() => import("./pages/tools/SeniorMobileGames"));
const ZoomFaceTimeForGrandparents = lazy(() => import("./pages/tools/ZoomFaceTimeForGrandparents"));
const DigitalLegacyPlanning  = lazy(() => import("./pages/tools/DigitalLegacyPlanning"));
const AppleWatchAsPhone      = lazy(() => import("./pages/tools/AppleWatchAsPhone"));
const EmergencyButtonPicks   = lazy(() => import("./pages/tools/EmergencyButtonPicks"));

// ── Cycle 110 (April 29 2026) — holiday + special occasions ──
const HolidayShoppingApps    = lazy(() => import("./pages/tools/HolidayShoppingApps"));
const GiftIdeasForGrandkids  = lazy(() => import("./pages/tools/GiftIdeasForGrandkids"));
const CardSendingApps        = lazy(() => import("./pages/tools/CardSendingApps"));
const FamilyCalendarApps     = lazy(() => import("./pages/tools/FamilyCalendarApps"));
const ZoomThanksgivingTips   = lazy(() => import("./pages/tools/ZoomThanksgivingTips"));

// ── Cycle 111 (April 29 2026) — post-retirement living ──
const SeniorVillageOptions   = lazy(() => import("./pages/tools/SeniorVillageOptions"));
const AssistedLivingTechCheck = lazy(() => import("./pages/tools/AssistedLivingTechCheck"));
const RetirementCommunityFinder = lazy(() => import("./pages/tools/RetirementCommunityFinder"));
const AgingInPlaceModifications = lazy(() => import("./pages/tools/AgingInPlaceModifications"));
const CCRCExplained          = lazy(() => import("./pages/tools/CCRCExplained"));

// ── Cycle 112 (April 29 2026) — dental + vision + hearing ──
const OverTheCounterHearingAids = lazy(() => import("./pages/tools/OverTheCounterHearingAids"));
const PrescriptionGlassesOnline = lazy(() => import("./pages/tools/PrescriptionGlassesOnline"));
const DentalImplantGuide     = lazy(() => import("./pages/tools/DentalImplantGuide"));
const ContactLensApps        = lazy(() => import("./pages/tools/ContactLensApps"));
const WarbyParkerForSeniors  = lazy(() => import("./pages/tools/WarbyParkerForSeniors"));
const ZenniOpticalReview     = lazy(() => import("./pages/tools/ZenniOpticalReview"));
const OnlineEyeExamApps      = lazy(() => import("./pages/tools/OnlineEyeExamApps"));
const SeniorReadingGlassesGuide = lazy(() => import("./pages/tools/SeniorReadingGlassesGuide"));
const ContactLensOnlineSeniors = lazy(() => import("./pages/tools/ContactLensOnlineSeniors"));
const TeethCleaningApps      = lazy(() => import("./pages/tools/TeethCleaningApps"));

// ── Cycle 113 (April 29 2026) — senior auto + driving ──
const SeniorDrivingTests     = lazy(() => import("./pages/tools/SeniorDrivingTests"));
const AutoInsuranceSeniors   = lazy(() => import("./pages/tools/AutoInsuranceSeniors"));
const BackupCameraRetrofit   = lazy(() => import("./pages/tools/BackupCameraRetrofit"));
const NexarDashCamApp        = lazy(() => import("./pages/tools/NexarDashCamApp"));
const ParkMobileSparkSeniors = lazy(() => import("./pages/tools/ParkMobileSparkSeniors"));
const AAAMobileForSeniors    = lazy(() => import("./pages/tools/AAAMobileForSeniors"));
const SeniorDrivingAssist    = lazy(() => import("./pages/tools/SeniorDrivingAssist"));
const RentalCarAppsForSeniors = lazy(() => import("./pages/tools/RentalCarAppsForSeniors"));
const BlindSpotMirrorSetups  = lazy(() => import("./pages/tools/BlindSpotMirrorSetups"));
const SeniorRideShareAlternatives = lazy(() => import("./pages/tools/SeniorRideShareAlternatives"));

// ── Cycle 114 (April 29 2026) — senior shopping smart ──
const BulkBuyingMath         = lazy(() => import("./pages/tools/BulkBuyingMath"));
const CouponStackingTips     = lazy(() => import("./pages/tools/CouponStackingTips"));
const ReturnsAtCostco        = lazy(() => import("./pages/tools/ReturnsAtCostco"));
const BestBuyOpenBox         = lazy(() => import("./pages/tools/BestBuyOpenBox"));
const TraderJoesAppGuide     = lazy(() => import("./pages/tools/TraderJoesAppGuide"));

// ── Cycle 115 (April 29 2026) — senior music + audio ──
const SpotifyForSeniors      = lazy(() => import("./pages/tools/SpotifyForSeniors"));
const RecordPlayerStreaming  = lazy(() => import("./pages/tools/RecordPlayerStreaming"));
const BluetoothSpeakerPicks  = lazy(() => import("./pages/tools/BluetoothSpeakerPicks"));
const RadioApps              = lazy(() => import("./pages/tools/RadioApps"));
const ConcertTicketTips      = lazy(() => import("./pages/tools/ConcertTicketTips"));

// ── Cycle 116 (April 29 2026) — senior parenting + family ──
const AdultChildBoundaries   = lazy(() => import("./pages/tools/AdultChildBoundaries"));
const GrandparentRights      = lazy(() => import("./pages/tools/GrandparentRights"));
const FamilyConflictApps     = lazy(() => import("./pages/tools/FamilyConflictApps"));
const BlendedFamilyTech      = lazy(() => import("./pages/tools/BlendedFamilyTech"));
const EstateGiftingPlanning  = lazy(() => import("./pages/tools/EstateGiftingPlanning"));

// ── Cycle 117 (April 29 2026) — privacy + data ──
const PrivacyAuditChecklist  = lazy(() => import("./pages/tools/PrivacyAuditChecklist"));
const DataBrokerOptOut       = lazy(() => import("./pages/tools/DataBrokerOptOut"));
const GooglePrivacyDashboard = lazy(() => import("./pages/tools/GooglePrivacyDashboard"));
const ApplePrivacyReport     = lazy(() => import("./pages/tools/ApplePrivacyReport"));
const FacebookPrivacyAudit   = lazy(() => import("./pages/tools/FacebookPrivacyAudit"));

// ── Cycle 118 (April 29 2026) — AI for seniors ──
const ChatGPTRecipes         = lazy(() => import("./pages/tools/ChatGPTRecipes"));
const AILetterDrafting       = lazy(() => import("./pages/tools/AILetterDrafting"));
const AIPhotoEdit            = lazy(() => import("./pages/tools/AIPhotoEdit"));
const AIBillNegotiate        = lazy(() => import("./pages/tools/AIBillNegotiate"));
const AISeniorSearch         = lazy(() => import("./pages/tools/AISeniorSearch"));

// ── Cycle 119 (April 29 2026) — recovery + rehab ──
const SurgeryRecoveryTech    = lazy(() => import("./pages/tools/SurgeryRecoveryTech"));
const PhysicalTherapyApps    = lazy(() => import("./pages/tools/PhysicalTherapyApps"));
const MedicalEquipmentRental = lazy(() => import("./pages/tools/MedicalEquipmentRental"));
const HomeHealthAideFind     = lazy(() => import("./pages/tools/HomeHealthAideFind"));
const HospiceTechSupport     = lazy(() => import("./pages/tools/HospiceTechSupport"));

// ── Cycle 120 (April 29 2026) — wellness milestone ──
const SleepHygieneApps       = lazy(() => import("./pages/tools/SleepHygieneApps"));
const MeditationFreeApps     = lazy(() => import("./pages/tools/MeditationFreeApps"));
const SunscreenAppPicks      = lazy(() => import("./pages/tools/SunscreenAppPicks"));
const HydrationTrackers      = lazy(() => import("./pages/tools/HydrationTrackers"));
const GardeningHelpApps      = lazy(() => import("./pages/tools/GardeningHelpApps"));

// ── Cycle 121 (April 29 2026) — internet basics ──
const WifiPasswordReset      = lazy(() => import("./pages/tools/WifiPasswordReset"));
const RouterPicksForSeniors  = lazy(() => import("./pages/tools/RouterPicksForSeniors"));
const WifiExtenders          = lazy(() => import("./pages/tools/WifiExtenders"));
const GuestNetworkSetup      = lazy(() => import("./pages/tools/GuestNetworkSetup"));
const EthernetVsWifi         = lazy(() => import("./pages/tools/EthernetVsWifi"));

// ── Cycle 122 (April 29 2026) — tax + Medicare deeper ──
const TaxLossHarvesting      = lazy(() => import("./pages/tools/TaxLossHarvesting"));
const MedicareEnrollmentTimeline = lazy(() => import("./pages/tools/MedicareEnrollmentTimeline"));
const MedicareSupplementCompare = lazy(() => import("./pages/tools/MedicareSupplementCompare"));
const IRMAACliffs            = lazy(() => import("./pages/tools/IRMAACliffs"));
const RMDStrategies          = lazy(() => import("./pages/tools/RMDStrategies"));

// ── Cycle 123 (April 29 2026) — civic + service ──
const AmericorpVista         = lazy(() => import("./pages/tools/AmericorpVista"));
const RetiredEducatorPrograms = lazy(() => import("./pages/tools/RetiredEducatorPrograms"));
const MasterGardenerSignup   = lazy(() => import("./pages/tools/MasterGardenerSignup"));
const JuryDutyApps           = lazy(() => import("./pages/tools/JuryDutyApps"));
const GoodSamaritanLaws      = lazy(() => import("./pages/tools/GoodSamaritanLaws"));

// ── Cycle 124 (April 29 2026) — Office productivity ──
const ZoomBeginnerTips       = lazy(() => import("./pages/tools/ZoomBeginnerTips"));
const EmailAttachmentBasics  = lazy(() => import("./pages/tools/EmailAttachmentBasics"));
const GoogleDocsSeniorBasics = lazy(() => import("./pages/tools/GoogleDocsSeniorBasics"));
const PrintingFromPhone      = lazy(() => import("./pages/tools/PrintingFromPhone"));
const BackupYourPhone        = lazy(() => import("./pages/tools/BackupYourPhone"));

// ── Cycle 125 (April 29 2026) — government online services ──
const SocialSecurityOnline   = lazy(() => import("./pages/tools/SocialSecurityOnline"));
const MyMedicareGov          = lazy(() => import("./pages/tools/MyMedicareGov"));
const IRSPaymentPortal       = lazy(() => import("./pages/tools/IRSPaymentPortal"));
const VaCom                  = lazy(() => import("./pages/tools/VaCom"));
const DmvOnlineServices      = lazy(() => import("./pages/tools/DmvOnlineServices"));

// ── Cycle 126 (April 29 2026) — phone tricks ──
const VoiceTextingTrick      = lazy(() => import("./pages/tools/VoiceTextingTrick"));
const FontSizeAccessibility  = lazy(() => import("./pages/tools/FontSizeAccessibility"));
const MagnifyTextHowTo       = lazy(() => import("./pages/tools/MagnifyTextHowTo"));
const EmergencyContactsLockScreen = lazy(() => import("./pages/tools/EmergencyContactsLockScreen"));
const AppleWatchTextingTips  = lazy(() => import("./pages/tools/AppleWatchTextingTips"));

// ── Cycle 127 (April 29 2026) — senior insurance ──
const HomeInsuranceShop      = lazy(() => import("./pages/tools/HomeInsuranceShop"));
const UmbrellaInsurance      = lazy(() => import("./pages/tools/UmbrellaInsurance"));
const LongTermCareInsurance  = lazy(() => import("./pages/tools/LongTermCareInsurance"));
const FinalExpenseInsurance  = lazy(() => import("./pages/tools/FinalExpenseInsurance"));
const RentersInsuranceSeniors = lazy(() => import("./pages/tools/RentersInsuranceSeniors"));

// ── Cycle 128 (April 29 2026) — community + clubs ──
const SeniorMeetupApps       = lazy(() => import("./pages/tools/SeniorMeetupApps"));
const ClassReunionTools      = lazy(() => import("./pages/tools/ClassReunionTools"));
const BookClubAppPicks       = lazy(() => import("./pages/tools/BookClubAppPicks"));
const GardenClubFinder       = lazy(() => import("./pages/tools/GardenClubFinder"));
const SeniorTravelGroups     = lazy(() => import("./pages/tools/SeniorTravelGroups"));

// ── Cycle 129 (April 29 2026) — home cleanup + organization ──
const DownsizeChecklist      = lazy(() => import("./pages/tools/DownsizeChecklist"));
const EstateSaleApps         = lazy(() => import("./pages/tools/EstateSaleApps"));
const JunkRemovalApps        = lazy(() => import("./pages/tools/JunkRemovalApps"));
const OrganizingApps         = lazy(() => import("./pages/tools/OrganizingApps"));
const StorageUnitPicks       = lazy(() => import("./pages/tools/StorageUnitPicks"));

// ── Cycle 130 (April 29 2026) — emergency preparedness ──
const HurricanePrep          = lazy(() => import("./pages/tools/HurricanePrep"));
const RadarScopeWeatherApp   = lazy(() => import("./pages/tools/RadarScopeWeatherApp"));
const HurricanePrepDigital   = lazy(() => import("./pages/tools/HurricanePrepDigital"));
const SeniorWaterSafety      = lazy(() => import("./pages/tools/SeniorWaterSafety"));
const AppleWeatherIphone     = lazy(() => import("./pages/tools/AppleWeatherIphone"));
const SeniorEmergencyKitDigital = lazy(() => import("./pages/tools/SeniorEmergencyKitDigital"));
const EarthquakePrep         = lazy(() => import("./pages/tools/EarthquakePrep"));
const BlackoutKit            = lazy(() => import("./pages/tools/BlackoutKit"));
const EvacuationGoBag        = lazy(() => import("./pages/tools/EvacuationGoBag"));
const FEMAAppForSeniors      = lazy(() => import("./pages/tools/FEMAAppForSeniors"));
const EmergencyKitChecklistSenior = lazy(() => import("./pages/tools/EmergencyKitChecklistSenior"));
const PowerOutagePrep        = lazy(() => import("./pages/tools/PowerOutagePrep"));
const EmergencyContactPlan   = lazy(() => import("./pages/tools/EmergencyContactPlan"));
const CarbonMonoxideSafety   = lazy(() => import("./pages/tools/CarbonMonoxideSafety"));
const FloodPrep              = lazy(() => import("./pages/tools/FloodPrep"));

// ── Cycle 131 (April 29 2026) — senior cooking ──
const SlowCookerBasics       = lazy(() => import("./pages/tools/SlowCookerBasics"));
const OnePotMeals            = lazy(() => import("./pages/tools/OnePotMeals"));
const FreezerMealPrep        = lazy(() => import("./pages/tools/FreezerMealPrep"));
const HealthySnackIdeas      = lazy(() => import("./pages/tools/HealthySnackIdeas"));
const SoupRecipes            = lazy(() => import("./pages/tools/SoupRecipes"));

// ── Cycle 132 (April 29 2026) — gardening + outdoor ──
const RaisedBedGuide         = lazy(() => import("./pages/tools/RaisedBedGuide"));
const ContainerGardening     = lazy(() => import("./pages/tools/ContainerGardening"));
const BirdfeederGuide        = lazy(() => import("./pages/tools/BirdfeederGuide"));
const ButterflyGarden        = lazy(() => import("./pages/tools/ButterflyGarden"));
const IndoorPlantsLowMaintenance = lazy(() => import("./pages/tools/IndoorPlantsLowMaintenance"));

// ── Cycle 133 (April 29 2026) — intergenerational ──
const TeachGrandkidsTech     = lazy(() => import("./pages/tools/TeachGrandkidsTech"));
const DigitalSavingPlans     = lazy(() => import("./pages/tools/DigitalSavingPlans"));
const GrandparentBudgetTalks = lazy(() => import("./pages/tools/GrandparentBudgetTalks"));
const FinancialLiteracyKids  = lazy(() => import("./pages/tools/FinancialLiteracyKids"));
const KidsCodingApps         = lazy(() => import("./pages/tools/KidsCodingApps"));

// ── Cycle 134 (April 29 2026) — tech repair + maintenance ──
const TonerCartridgeRefill   = lazy(() => import("./pages/tools/TonerCartridgeRefill"));
const HardDriveBackup        = lazy(() => import("./pages/tools/HardDriveBackup"));
const ScreenCleaner          = lazy(() => import("./pages/tools/ScreenCleaner"));
const BatteryReplacement     = lazy(() => import("./pages/tools/BatteryReplacement"));
const OldPhoneRepurpose      = lazy(() => import("./pages/tools/OldPhoneRepurpose"));

// ── Cycle 135 (April 29 2026) — media literacy ──
const NewsAppCompare         = lazy(() => import("./pages/tools/NewsAppCompare"));
const FactCheckingTools      = lazy(() => import("./pages/tools/FactCheckingTools"));
const MisinfoSpotting        = lazy(() => import("./pages/tools/MisinfoSpotting"));
const NewsletterPicks        = lazy(() => import("./pages/tools/NewsletterPicks"));
const MediaLiteracySeniors   = lazy(() => import("./pages/tools/MediaLiteracySeniors"));

// ── Cycle 136 (April 29 2026) — memory + cognitive ──
const MemoryAppTraining      = lazy(() => import("./pages/tools/MemoryAppTraining"));
const ToDoListSeniors        = lazy(() => import("./pages/tools/ToDoListSeniors"));
const CalendarRemindersApps  = lazy(() => import("./pages/tools/CalendarRemindersApps"));
const SudokuApps             = lazy(() => import("./pages/tools/SudokuApps"));
const MathChallengeApps      = lazy(() => import("./pages/tools/MathChallengeApps"));

// ── Cycle 137 (April 29 2026) — friend communication ──
const TextingEtiquette       = lazy(() => import("./pages/tools/TextingEtiquette"));
const GroupChatTips          = lazy(() => import("./pages/tools/GroupChatTips"));
const SnailMailRevival       = lazy(() => import("./pages/tools/SnailMailRevival"));
const HolidayCardSetup       = lazy(() => import("./pages/tools/HolidayCardSetup"));
const ShutterflyForSeniors   = lazy(() => import("./pages/tools/ShutterflyForSeniors"));
const PaperlessPostInvitations = lazy(() => import("./pages/tools/PaperlessPostInvitations"));
const MintedHolidayCardsReview = lazy(() => import("./pages/tools/MintedHolidayCardsReview"));
const CostcoPhotoCenter      = lazy(() => import("./pages/tools/CostcoPhotoCenter"));
const MailMerge100Cards      = lazy(() => import("./pages/tools/MailMerge100Cards"));
const ChainEmailDontShare    = lazy(() => import("./pages/tools/ChainEmailDontShare"));

// ── Cycle 138 (April 29 2026) — fall prevention + mobility ──
const FallPreventionGuide    = lazy(() => import("./pages/tools/FallPreventionGuide"));
const PostureCheckApps       = lazy(() => import("./pages/tools/PostureCheckApps"));
const GripStrengthTools      = lazy(() => import("./pages/tools/GripStrengthTools"));
const StairSafetyChecklist   = lazy(() => import("./pages/tools/StairSafetyChecklist"));
const CaneWalkerPicker       = lazy(() => import("./pages/tools/CaneWalkerPicker"));

// ── Cycle 139 (April 29 2026) — senior nutrition ──
const ProteinForSeniors      = lazy(() => import("./pages/tools/ProteinForSeniors"));
const SaltReductionTips      = lazy(() => import("./pages/tools/SaltReductionTips"));
const SugarReductionGuide    = lazy(() => import("./pages/tools/SugarReductionGuide"));
const AntiInflammatoryEating = lazy(() => import("./pages/tools/AntiInflammatoryEating"));
const SeniorSmoothieRecipes  = lazy(() => import("./pages/tools/SeniorSmoothieRecipes"));

// ── Cycle 140 (April 29 2026) — sleep + rest ──
const InsomniaSeniorGuide    = lazy(() => import("./pages/tools/InsomniaSeniorGuide"));
const MelatoninSafetyGuide   = lazy(() => import("./pages/tools/MelatoninSafetyGuide"));
const CPAPHelpSeniors        = lazy(() => import("./pages/tools/CPAPHelpSeniors"));
const MattressPillowPicker   = lazy(() => import("./pages/tools/MattressPillowPicker"));
const WhiteNoiseGuide        = lazy(() => import("./pages/tools/WhiteNoiseGuide"));

// ── Cycle 141 (April 29 2026) — senior personal care ──
const EarwaxRemovalGuide     = lazy(() => import("./pages/tools/EarwaxRemovalGuide"));
const DentureCareGuide       = lazy(() => import("./pages/tools/DentureCareGuide"));
const FootCareSeniors        = lazy(() => import("./pages/tools/FootCareSeniors"));
const SkinCareAfter65        = lazy(() => import("./pages/tools/SkinCareAfter65"));
const HairThinningOptions    = lazy(() => import("./pages/tools/HairThinningOptions"));

// ── Cycle 142 (April 29 2026) — social + emotional ──
const LonelinessReliefGuide  = lazy(() => import("./pages/tools/LonelinessReliefGuide"));
const SeniorMentorshipGuide  = lazy(() => import("./pages/tools/SeniorMentorshipGuide"));
const DatingAfter60Guide     = lazy(() => import("./pages/tools/DatingAfter60Guide"));
const OurTimeReviewSeniors   = lazy(() => import("./pages/tools/OurTimeReviewSeniors"));
const SilverSinglesReview    = lazy(() => import("./pages/tools/SilverSinglesReview"));
const RomanceScamSpottingFor60Plus = lazy(() => import("./pages/tools/RomanceScamSpottingFor60Plus"));
const SeniorWidowedDating    = lazy(() => import("./pages/tools/SeniorWidowedDating"));
const StitchAppFor50Plus     = lazy(() => import("./pages/tools/StitchAppFor50Plus"));
const SeniorRoommateMatching = lazy(() => import("./pages/tools/SeniorRoommateMatching"));
const JoinASeniorClub        = lazy(() => import("./pages/tools/JoinASeniorClub"));

// ── Cycle 143 (April 29 2026) — senior travel mechanics ──
const SnowbirdSetup          = lazy(() => import("./pages/tools/SnowbirdSetup"));
const RVTravelSeniors        = lazy(() => import("./pages/tools/RVTravelSeniors"));
const RVTripWizardGuide      = lazy(() => import("./pages/tools/RVTripWizardGuide"));
const CampendiumAllStaysApps = lazy(() => import("./pages/tools/CampendiumAllStaysApps"));
const StarlinkRVInternet     = lazy(() => import("./pages/tools/StarlinkRVInternet"));
const RVMaintenanceAppsCheck = lazy(() => import("./pages/tools/RVMaintenanceAppsCheck"));
const SeniorRVCommunity      = lazy(() => import("./pages/tools/SeniorRVCommunity"));
const AirportWheelchairHelp  = lazy(() => import("./pages/tools/AirportWheelchairHelp"));
const JetLagSeniors          = lazy(() => import("./pages/tools/JetLagSeniors"));
const PackingChecklistSeniors = lazy(() => import("./pages/tools/PackingChecklistSeniors"));

// ── Cycle 144 (April 29 2026) — downsizing + decluttering ──
const GarageSaleSeniors      = lazy(() => import("./pages/tools/GarageSaleSeniors"));
const SeniorRelocationServices = lazy(() => import("./pages/tools/SeniorRelocationServices"));
const HoarderHelpResources   = lazy(() => import("./pages/tools/HoarderHelpResources"));
const MemorabiliaPreservation = lazy(() => import("./pages/tools/MemorabiliaPreservation"));
const AtticBasementClearout  = lazy(() => import("./pages/tools/AtticBasementClearout"));

// ── Cycle 145 (April 29 2026) — senior finance + scams ──
const BurialInsuranceVsLife  = lazy(() => import("./pages/tools/BurialInsuranceVsLife"));
const EstimatedQuarterlyTaxes = lazy(() => import("./pages/tools/EstimatedQuarterlyTaxes"));
const MedicareScamDefense    = lazy(() => import("./pages/tools/MedicareScamDefense"));
const SweepstakesScamGuide   = lazy(() => import("./pages/tools/SweepstakesScamGuide"));
const CharityScamCheck       = lazy(() => import("./pages/tools/CharityScamCheck"));

// ── Cycle 146 (April 29 2026) — smart home additions ──
const SmartBlindsForSeniors  = lazy(() => import("./pages/tools/SmartBlindsForSeniors"));
const RobotMopGuide          = lazy(() => import("./pages/tools/RobotMopGuide"));
const AirPurifierPicks       = lazy(() => import("./pages/tools/AirPurifierPicks"));
const MatterStandardExplained = lazy(() => import("./pages/tools/MatterStandardExplained"));
const SmartCeilingFanGuide   = lazy(() => import("./pages/tools/SmartCeilingFanGuide"));

// ── Cycle 147 (April 29 2026) — chronic conditions ──
const DiabetesManagementApps = lazy(() => import("./pages/tools/DiabetesManagementApps"));
const HighBloodPressureApps  = lazy(() => import("./pages/tools/HighBloodPressureApps"));
const CholesterolGuideSeniors = lazy(() => import("./pages/tools/CholesterolGuideSeniors"));
const ArthritisManagement    = lazy(() => import("./pages/tools/ArthritisManagement"));
const OsteoporosisGuide      = lazy(() => import("./pages/tools/OsteoporosisGuide"));

// ── Cycle 148 (April 29 2026) — caregiving + late-stage care ──
const AlzheimersEarlyStage   = lazy(() => import("./pages/tools/AlzheimersEarlyStage"));
const DementiaWanderingPrevention = lazy(() => import("./pages/tools/DementiaWanderingPrevention"));
const AdultDayCareGuide      = lazy(() => import("./pages/tools/AdultDayCareGuide"));
const InHomeCareAgencyVet    = lazy(() => import("./pages/tools/InHomeCareAgencyVet"));
const NursingHomeChecklist   = lazy(() => import("./pages/tools/NursingHomeChecklist"));

// ── Cycle 149 (April 29 2026) — pets for seniors ──
const BestPetsForSeniors     = lazy(() => import("./pages/tools/BestPetsForSeniors"));
const PetSupplyDelivery      = lazy(() => import("./pages/tools/PetSupplyDelivery"));
const PetInsuranceForSeniors = lazy(() => import("./pages/tools/PetInsuranceForSeniors"));
const RoverPetSittingApp     = lazy(() => import("./pages/tools/RoverPetSittingApp"));
const ChewyPetSuppliesGuide  = lazy(() => import("./pages/tools/ChewyPetSuppliesGuide"));
const CanvaForSeniorsGuide   = lazy(() => import("./pages/tools/CanvaForSeniorsGuide"));
const PhotoBookPrintingApps  = lazy(() => import("./pages/tools/PhotoBookPrintingApps"));
const DigitalScrapbookingApps = lazy(() => import("./pages/tools/DigitalScrapbookingApps"));
const EmotionalSupportAnimal = lazy(() => import("./pages/tools/EmotionalSupportAnimal"));
const FosterPetsForSeniors   = lazy(() => import("./pages/tools/FosterPetsForSeniors"));

// ── Cycle 150 (April 29 2026) — driving + cars ──
const WhenToStopDriving      = lazy(() => import("./pages/tools/WhenToStopDriving"));
const EVForSeniors           = lazy(() => import("./pages/tools/EVForSeniors"));
const CarRentalSeniorTips    = lazy(() => import("./pages/tools/CarRentalSeniorTips"));
const RoadsideAssistanceCompare = lazy(() => import("./pages/tools/RoadsideAssistanceCompare"));
const AutomaticEmergencyBraking = lazy(() => import("./pages/tools/AutomaticEmergencyBraking"));

// ── Cycle 151 (April 29 2026) — digital payments + money ──
const ApplePaySetupSeniors   = lazy(() => import("./pages/tools/ApplePaySetupSeniors"));
const PayPalSafelyForSeniors = lazy(() => import("./pages/tools/PayPalSafelyForSeniors"));
const OnlineBrokerageStarter = lazy(() => import("./pages/tools/OnlineBrokerageStarter"));
const CDTreasuryHighYield    = lazy(() => import("./pages/tools/CDTreasuryHighYield"));
const AutoBillPaySetup       = lazy(() => import("./pages/tools/AutoBillPaySetup"));

// ── Cycle 152 (April 29 2026) — entertainment + leisure ──
const LibbyAppForSeniors     = lazy(() => import("./pages/tools/LibbyAppForSeniors"));
const HooplaForSeniors       = lazy(() => import("./pages/tools/HooplaForSeniors"));
const SonosSetupGuide        = lazy(() => import("./pages/tools/SonosSetupGuide"));
const BroadwayHDForSeniors   = lazy(() => import("./pages/tools/BroadwayHDForSeniors"));
const FreeAudiobookSources   = lazy(() => import("./pages/tools/FreeAudiobookSources"));

// ── Cycle 153 (April 29 2026) — outdoor + seasonal ──
const HummingbirdFeederSetup = lazy(() => import("./pages/tools/HummingbirdFeederSetup"));
const CompostingForSeniors   = lazy(() => import("./pages/tools/CompostingForSeniors"));
const TreeCareWhenToCallPro  = lazy(() => import("./pages/tools/TreeCareWhenToCallPro"));
const LeafBlowerPicker       = lazy(() => import("./pages/tools/LeafBlowerPicker"));
const IceMeltSidewalkSafety  = lazy(() => import("./pages/tools/IceMeltSidewalkSafety"));

// ── Cycle 154 (April 29 2026) — saving money shopping ──
const AmazonPrimePerks       = lazy(() => import("./pages/tools/AmazonPrimePerks"));
const WalmartPlusReview      = lazy(() => import("./pages/tools/WalmartPlusReview"));
const CashbackAppPicks       = lazy(() => import("./pages/tools/CashbackAppPicks"));
const PrimeDayBlackFriday    = lazy(() => import("./pages/tools/PrimeDayBlackFriday"));
const GroceryLoyaltyTricks   = lazy(() => import("./pages/tools/GroceryLoyaltyTricks"));

// ── Cycle 155 (April 29 2026) — legacy + history ──
const AncestryDNAGuide       = lazy(() => import("./pages/tools/AncestryDNAGuide"));
const WriteYourMemoir        = lazy(() => import("./pages/tools/WriteYourMemoir"));
const VideoLettersGrandkids  = lazy(() => import("./pages/tools/VideoLettersGrandkids"));
const FamilyHistoryInterview = lazy(() => import("./pages/tools/FamilyHistoryInterview"));
const EthicalWillTemplate    = lazy(() => import("./pages/tools/EthicalWillTemplate"));

// ── Cycle 156 (April 29 2026) — home maintenance ──
const HVACMaintenanceGuide   = lazy(() => import("./pages/tools/HVACMaintenanceGuide"));
const WaterHeaterGuide       = lazy(() => import("./pages/tools/WaterHeaterGuide"));
const GutterCleaningOptions  = lazy(() => import("./pages/tools/GutterCleaningOptions"));
const RoofInspectionGuide    = lazy(() => import("./pages/tools/RoofInspectionGuide"));
const ContractorVettingGuide = lazy(() => import("./pages/tools/ContractorVettingGuide"));

// ── Cycle 157 (April 29 2026) — kitchen for seniors ──
const SeniorFriendlyCookware = lazy(() => import("./pages/tools/SeniorFriendlyCookware"));
const ToasterOvenGuide       = lazy(() => import("./pages/tools/ToasterOvenGuide"));
const AdaptiveKitchenTools   = lazy(() => import("./pages/tools/AdaptiveKitchenTools"));
const CoffeeMakerForSeniors  = lazy(() => import("./pages/tools/CoffeeMakerForSeniors"));
const InductionStoveExplained = lazy(() => import("./pages/tools/InductionStoveExplained"));

// ── Cycle 158 (April 29 2026) — legal + credit ──
const PowerOfAttorneyTypes   = lazy(() => import("./pages/tools/PowerOfAttorneyTypes"));
const GuardianshipVsConservatorship = lazy(() => import("./pages/tools/GuardianshipVsConservatorship"));
const ElderLawAttorneyFinder = lazy(() => import("./pages/tools/ElderLawAttorneyFinder"));
const FreeLegalAidForSeniors = lazy(() => import("./pages/tools/FreeLegalAidForSeniors"));
const DebtCollectorRights    = lazy(() => import("./pages/tools/DebtCollectorRights"));

// ── Cycle 159 (April 29 2026) — languages + free college ──
const DuolingoForSeniors     = lazy(() => import("./pages/tools/DuolingoForSeniors"));
const BabbelVsRosetta        = lazy(() => import("./pages/tools/BabbelVsRosetta"));
const GoogleTranslateMastery = lazy(() => import("./pages/tools/GoogleTranslateMastery"));
const FreeCollegeForSeniors  = lazy(() => import("./pages/tools/FreeCollegeForSeniors"));
const CourseraSeniorAudit    = lazy(() => import("./pages/tools/CourseraSeniorAudit"));

// ── Cycle 160 (April 29 2026) — veteran benefits ──
const VAAidAndAttendance     = lazy(() => import("./pages/tools/VAAidAndAttendance"));
const TricareForLife         = lazy(() => import("./pages/tools/TricareForLife"));
const NationalCemeteryBurial = lazy(() => import("./pages/tools/NationalCemeteryBurial"));
const VAHomeLoanGuide        = lazy(() => import("./pages/tools/VAHomeLoanGuide"));
const AgentOrangeBenefits    = lazy(() => import("./pages/tools/AgentOrangeBenefits"));

// ── Cycle 161 (April 29 2026) — government benefits ──
const MealsOnWheelsGuide     = lazy(() => import("./pages/tools/MealsOnWheelsGuide"));
const PictureThisPlantID     = lazy(() => import("./pages/tools/PictureThisPlantID"));
const FishbrainAnglerApps    = lazy(() => import("./pages/tools/FishbrainAnglerApps"));
const WoodworkingPlansApps   = lazy(() => import("./pages/tools/WoodworkingPlansApps"));
const BackyardBirdfeederApps = lazy(() => import("./pages/tools/BackyardBirdfeederApps"));
const HuntingAppsForSeniors  = lazy(() => import("./pages/tools/HuntingAppsForSeniors"));
const MedicareSavingsPrograms = lazy(() => import("./pages/tools/MedicareSavingsPrograms"));
const MedicareExtraHelp      = lazy(() => import("./pages/tools/MedicareExtraHelp"));
const LIHEAPGuide            = lazy(() => import("./pages/tools/LIHEAPGuide"));
const SeniorPropertyTaxRelief = lazy(() => import("./pages/tools/SeniorPropertyTaxRelief"));

// ── Cycle 162 (April 29 2026) — practical AI ──
const AIWriteEmailHelp       = lazy(() => import("./pages/tools/AIWriteEmailHelp"));
const AIDoctorAppointmentPrep = lazy(() => import("./pages/tools/AIDoctorAppointmentPrep"));
const AITranslateRecipe      = lazy(() => import("./pages/tools/AITranslateRecipe"));
const AIScamProtection       = lazy(() => import("./pages/tools/AIScamProtection"));
const ClaudeForSeniors       = lazy(() => import("./pages/tools/ClaudeForSeniors"));

// ── Cycle 163 (April 29 2026) — wearables + exercise ──
const OuraRingForSeniors     = lazy(() => import("./pages/tools/OuraRingForSeniors"));
const AppleHealthDeepDive    = lazy(() => import("./pages/tools/AppleHealthDeepDive"));
const CGMForNonDiabetics     = lazy(() => import("./pages/tools/CGMForNonDiabetics"));
const WalkingProgramFreshStart = lazy(() => import("./pages/tools/WalkingProgramFreshStart"));
const PelotonAlternatives    = lazy(() => import("./pages/tools/PelotonAlternatives"));
const AppleFitnessPlusReview = lazy(() => import("./pages/tools/AppleFitnessPlusReview"));
const SilverSneakersAppDeep  = lazy(() => import("./pages/tools/SilverSneakersAppDeep"));
const PelotonAppForSeniors   = lazy(() => import("./pages/tools/PelotonAppForSeniors"));
const SeniorWalkingApps      = lazy(() => import("./pages/tools/SeniorWalkingApps"));
const HASfitFreeYouTube      = lazy(() => import("./pages/tools/HASfitFreeYouTube"));

// ── Cycle 164 (April 29 2026) — medical management ──
const HospitalCompareGuide   = lazy(() => import("./pages/tools/HospitalCompareGuide"));
const PreSurgeryChecklist    = lazy(() => import("./pages/tools/PreSurgeryChecklist"));
const ERVsUrgentCare         = lazy(() => import("./pages/tools/ERVsUrgentCare"));
const MedicalBillNegotiation = lazy(() => import("./pages/tools/MedicalBillNegotiation"));
const PrescriptionPriceShop  = lazy(() => import("./pages/tools/PrescriptionPriceShop"));

// ── Cycle 165 (April 29 2026) — second-career income ──
const EtsySellingForSeniors  = lazy(() => import("./pages/tools/EtsySellingForSeniors"));
const FiverrFreelanceSeniors = lazy(() => import("./pages/tools/FiverrFreelanceSeniors"));
const BecomeATutorRetiree    = lazy(() => import("./pages/tools/BecomeATutorRetiree"));
const PetSittingIncome       = lazy(() => import("./pages/tools/PetSittingIncome"));
const ConsultingSecondAct    = lazy(() => import("./pages/tools/ConsultingSecondAct"));

// ── Cycle 166 (April 29 2026) — mindfulness + simple living ──
const GratitudePracticeApp   = lazy(() => import("./pages/tools/GratitudePracticeApp"));
const StoicPhilosophySeniors = lazy(() => import("./pages/tools/StoicPhilosophySeniors"));
const RetreatCentersForSeniors = lazy(() => import("./pages/tools/RetreatCentersForSeniors"));
const IntermittentFastingSeniors = lazy(() => import("./pages/tools/IntermittentFastingSeniors"));
const MinimalismForSeniors   = lazy(() => import("./pages/tools/MinimalismForSeniors"));

// ── Cycle 167 (April 29 2026) — senior tech basics ──
const GrandPadTablet         = lazy(() => import("./pages/tools/GrandPadTablet"));
const RazMobilityPhones      = lazy(() => import("./pages/tools/RazMobilityPhones"));
const ConsumerCellularPlans  = lazy(() => import("./pages/tools/ConsumerCellularPlans"));
const FirstSmartphoneStarter = lazy(() => import("./pages/tools/FirstSmartphoneStarter"));
const TabletForSeniorsBasics = lazy(() => import("./pages/tools/TabletForSeniorsBasics"));

// ── Cycle 168 (April 29 2026) — emerging tech for curious seniors ──
const VRForSeniors           = lazy(() => import("./pages/tools/VRForSeniors"));
const DronesForSeniors       = lazy(() => import("./pages/tools/DronesForSeniors"));
const PrintableHobby3D       = lazy(() => import("./pages/tools/PrintableHobby3D"));
const RaspberryPiSeniors     = lazy(() => import("./pages/tools/RaspberryPiSeniors"));
const CodingHobbyForSeniors  = lazy(() => import("./pages/tools/CodingHobbyForSeniors"));

// ── Cycle 169 (April 29 2026) — senior movement ──
const TaiChiBeginner         = lazy(() => import("./pages/tools/TaiChiBeginner"));
const QigongForSeniors       = lazy(() => import("./pages/tools/QigongForSeniors"));
const SeniorCyclingTips      = lazy(() => import("./pages/tools/SeniorCyclingTips"));
const HikingForSeniors       = lazy(() => import("./pages/tools/HikingForSeniors"));
const AquaticExerciseGuide   = lazy(() => import("./pages/tools/AquaticExerciseGuide"));

// ── Cycle 170 (April 29 2026) — computers + ecosystems ──
const ChromebookForSeniors   = lazy(() => import("./pages/tools/ChromebookForSeniors"));
const MacForSeniors          = lazy(() => import("./pages/tools/MacForSeniors"));
const WindowsBasicsForSeniors = lazy(() => import("./pages/tools/WindowsBasicsForSeniors"));
const MicrosoftO365vsGoogle  = lazy(() => import("./pages/tools/MicrosoftO365vsGoogle"));
const IPadVsLaptopForSeniors = lazy(() => import("./pages/tools/IPadVsLaptopForSeniors"));

// ── Cycle 171 (April 29 2026) — indoor + small-space gardening ──
const AeroGardenForSeniors   = lazy(() => import("./pages/tools/AeroGardenForSeniors"));
const GrowLightSetup         = lazy(() => import("./pages/tools/GrowLightSetup"));
const VegetableGardenSeniors = lazy(() => import("./pages/tools/VegetableGardenSeniors"));
const HerbGardeningWindow    = lazy(() => import("./pages/tools/HerbGardeningWindow"));
const RainBarrelGuide        = lazy(() => import("./pages/tools/RainBarrelGuide"));

// ── Cycle 172 (April 29 2026) — senior crafts ──
const WatercolorBeginnerSeniors = lazy(() => import("./pages/tools/WatercolorBeginnerSeniors"));
const RavelryForKnitters     = lazy(() => import("./pages/tools/RavelryForKnitters"));
const CricutForSeniorCrafters = lazy(() => import("./pages/tools/CricutForSeniorCrafters"));
const EtsySellingForSeniors  = lazy(() => import("./pages/tools/EtsySellingForSeniors"));
const QuiltDesignSoftware    = lazy(() => import("./pages/tools/QuiltDesignSoftware"));
const SeniorPaintingClasses  = lazy(() => import("./pages/tools/SeniorPaintingClasses"));
const PaintByNumbersAdult    = lazy(() => import("./pages/tools/PaintByNumbersAdult"));
const JewelryMakingSeniors   = lazy(() => import("./pages/tools/JewelryMakingSeniors"));
const PotteryClassesGuide    = lazy(() => import("./pages/tools/PotteryClassesGuide"));
const AdultColoringBooks     = lazy(() => import("./pages/tools/AdultColoringBooks"));

// ── Cycle 173 (April 29 2026) — collecting hobbies ──
const StampCollectingForSeniors = lazy(() => import("./pages/tools/StampCollectingForSeniors"));
const AntiqueValueAppraisalApps = lazy(() => import("./pages/tools/AntiqueValueAppraisalApps"));
const ComicBookCollecting    = lazy(() => import("./pages/tools/ComicBookCollecting"));
const BaseballCardValuation  = lazy(() => import("./pages/tools/BaseballCardValuation"));
const RecordCollectingGuide  = lazy(() => import("./pages/tools/RecordCollectingGuide"));

// ── Cycle 174 (April 29 2026) — travel apps for seniors ──
const WazeForSeniors         = lazy(() => import("./pages/tools/WazeForSeniors"));
const AirbnbForSeniorTravelers = lazy(() => import("./pages/tools/AirbnbForSeniorTravelers"));
const RoadtripPlanningApps   = lazy(() => import("./pages/tools/RoadtripPlanningApps"));
const AccessibleTravelApps   = lazy(() => import("./pages/tools/AccessibleTravelApps"));
const NationalParksTrip      = lazy(() => import("./pages/tools/NationalParksTrip"));

// ── Cycle 175 (April 29 2026) — streaming services ──
const NetflixForSeniors      = lazy(() => import("./pages/tools/NetflixForSeniors"));
const YouTubeForSeniors      = lazy(() => import("./pages/tools/YouTubeForSeniors"));
const AppleTVPlusGuide       = lazy(() => import("./pages/tools/AppleTVPlusGuide"));
const ParamountPlusReview    = lazy(() => import("./pages/tools/ParamountPlusReview"));
const StreamingDeviceCompare = lazy(() => import("./pages/tools/StreamingDeviceCompare"));

// ── Cycle 176 (April 29 2026) — senior puzzles + games ──
const ChessForSeniors        = lazy(() => import("./pages/tools/ChessForSeniors"));
const MahjongAppPicks        = lazy(() => import("./pages/tools/MahjongAppPicks"));
const BridgeOnlineApps       = lazy(() => import("./pages/tools/BridgeOnlineApps"));
const ScrabbleAlternatives   = lazy(() => import("./pages/tools/ScrabbleAlternatives"));
const JigsawPuzzleStrategy   = lazy(() => import("./pages/tools/JigsawPuzzleStrategy"));

// ── Cycle 177 (April 29 2026) — security upgrades ──
const TwoFactorAuthGuide     = lazy(() => import("./pages/tools/TwoFactorAuthGuide"));
const YubiKeyForSeniors      = lazy(() => import("./pages/tools/YubiKeyForSeniors"));
const FaceIDFingerprintSetup = lazy(() => import("./pages/tools/FaceIDFingerprintSetup"));
const AppleICloudSecurity    = lazy(() => import("./pages/tools/AppleICloudSecurity"));
const PasskeyExplained       = lazy(() => import("./pages/tools/PasskeyExplained"));

// ── Cycle 178 (April 29 2026) — government online ──
const MySocialSecurityAccount = lazy(() => import("./pages/tools/MySocialSecurityAccount"));
const IRSOnlineAccount       = lazy(() => import("./pages/tools/IRSOnlineAccount"));
const MedicareDotGovTour     = lazy(() => import("./pages/tools/MedicareDotGovTour"));
const BenefitsCheckUpTool    = lazy(() => import("./pages/tools/BenefitsCheckUpTool"));
const USAJobsForSeniors      = lazy(() => import("./pages/tools/USAJobsForSeniors"));

// ── Cycle 179 (April 29 2026) — voice assistants ──
const AlexaSkillsForSeniors  = lazy(() => import("./pages/tools/AlexaSkillsForSeniors"));
const GoogleAssistantTraining = lazy(() => import("./pages/tools/GoogleAssistantTraining"));
const AlexaShoppingList      = lazy(() => import("./pages/tools/AlexaShoppingList"));
const AlexaMedReminders      = lazy(() => import("./pages/tools/AlexaMedReminders"));
const AlexaWithDementia      = lazy(() => import("./pages/tools/AlexaWithDementia"));

// ── Cycle 180 (April 29 2026) — internet + ISP ──
const ISPNegotiationGuide    = lazy(() => import("./pages/tools/ISPNegotiationGuide"));
const FiberVsCableInternet   = lazy(() => import("./pages/tools/FiberVsCableInternet"));
const StarlinkForRural       = lazy(() => import("./pages/tools/StarlinkForRural"));
const TMobileHomeInternet    = lazy(() => import("./pages/tools/TMobileHomeInternet"));
const ACPInternetSubsidy     = lazy(() => import("./pages/tools/ACPInternetSubsidy"));

// ── Cycle 181 (April 29 2026) — hearing tech ──
const TinnitusReliefApps     = lazy(() => import("./pages/tools/TinnitusReliefApps"));
const ASLLearningSeniors     = lazy(() => import("./pages/tools/ASLLearningSeniors"));
const LiveCaptionsApps       = lazy(() => import("./pages/tools/LiveCaptionsApps"));
const CochlearImplantBasics  = lazy(() => import("./pages/tools/CochlearImplantBasics"));
const AssistiveListeningDevices = lazy(() => import("./pages/tools/AssistiveListeningDevices"));

// ── Cycle 182 (April 29 2026) — smartwatches health ──
const GarminForSeniors       = lazy(() => import("./pages/tools/GarminForSeniors"));
const FitbitVsAppleWatch     = lazy(() => import("./pages/tools/FitbitVsAppleWatch"));
const SmartwatchHealthFeatures = lazy(() => import("./pages/tools/SmartwatchHealthFeatures"));
const AppleWatchFallDetection = lazy(() => import("./pages/tools/AppleWatchFallDetection"));
const ECGOnAppleWatch        = lazy(() => import("./pages/tools/ECGOnAppleWatch"));

// ── Cycle 183 (April 29 2026) — appliances ──
const SmartFridgePicks       = lazy(() => import("./pages/tools/SmartFridgePicks"));
const BidetSeniorGuide       = lazy(() => import("./pages/tools/BidetSeniorGuide"));
const DehumidifierForSeniors = lazy(() => import("./pages/tools/DehumidifierForSeniors"));
const MicrowaveSeniorBuy     = lazy(() => import("./pages/tools/MicrowaveSeniorBuy"));
const WasherDryerForSeniors  = lazy(() => import("./pages/tools/WasherDryerForSeniors"));

// ── Cycle 184 (April 29 2026) — alternative travel modes ──
const AmtrakForSeniors       = lazy(() => import("./pages/tools/AmtrakForSeniors"));
const BusTravelForSeniors    = lazy(() => import("./pages/tools/BusTravelForSeniors"));
const RiverCruiseGuide       = lazy(() => import("./pages/tools/RiverCruiseGuide"));
const TrainAroundTheWorld    = lazy(() => import("./pages/tools/TrainAroundTheWorld"));
const TouristAttractionPasses = lazy(() => import("./pages/tools/TouristAttractionPasses"));

// ── Cycle 185 (April 29 2026) — basic skills ──
const WordForSeniors         = lazy(() => import("./pages/tools/WordForSeniors"));
const ExcelForSeniors        = lazy(() => import("./pages/tools/ExcelForSeniors"));
const GmailForSeniors        = lazy(() => import("./pages/tools/GmailForSeniors"));
const OutlookForSeniors      = lazy(() => import("./pages/tools/OutlookForSeniors"));
const BrowserBookmarksGuide  = lazy(() => import("./pages/tools/BrowserBookmarksGuide"));

// ── Cycle 186 (April 29 2026) — social media beginners ──
const FacebookForBeginners   = lazy(() => import("./pages/tools/FacebookForBeginners"));
const LinkedInForRetirees    = lazy(() => import("./pages/tools/LinkedInForRetirees"));
const RedditForSeniors       = lazy(() => import("./pages/tools/RedditForSeniors"));
const TikTokSafetyGuide      = lazy(() => import("./pages/tools/TikTokSafetyGuide"));
const TikTokForSeniorViewers = lazy(() => import("./pages/tools/TikTokForSeniorViewers"));
const InstagramReelsForSeniors = lazy(() => import("./pages/tools/InstagramReelsForSeniors"));
const SeniorYouTubeChannels  = lazy(() => import("./pages/tools/SeniorYouTubeChannels"));
const DiscogsForRecordCollectors = lazy(() => import("./pages/tools/DiscogsForRecordCollectors"));
const PinterestForSeniorIdeas = lazy(() => import("./pages/tools/PinterestForSeniorIdeas"));
const InstagramSeniorGuide   = lazy(() => import("./pages/tools/InstagramSeniorGuide"));

// ── Cycle 187 (April 29 2026) — credit cards ──
const BestCreditCardsSeniors = lazy(() => import("./pages/tools/BestCreditCardsSeniors"));
const CreditCardFraudHelp    = lazy(() => import("./pages/tools/CreditCardFraudHelp"));
const ATMSafetyGuide         = lazy(() => import("./pages/tools/ATMSafetyGuide"));
const ChaseSapphireExplain   = lazy(() => import("./pages/tools/ChaseSapphireExplain"));
const AmexPlatinumWorthIt    = lazy(() => import("./pages/tools/AmexPlatinumWorthIt"));

// ── Cycle 188 (April 29 2026) — preventive health ──
const ColonCancerScreening   = lazy(() => import("./pages/tools/ColonCancerScreening"));
const MammogramGuide         = lazy(() => import("./pages/tools/MammogramGuide"));
const ProstateScreeningSeniors = lazy(() => import("./pages/tools/ProstateScreeningSeniors"));
const AnnualWellnessVisit    = lazy(() => import("./pages/tools/AnnualWellnessVisit"));
const SeniorVaccinesGuide    = lazy(() => import("./pages/tools/SeniorVaccinesGuide"));

// ── Cycle 189 (April 29 2026) — mental health ──
const SeniorDepressionGuide  = lazy(() => import("./pages/tools/SeniorDepressionGuide"));
const AnxietyToolsForSeniors = lazy(() => import("./pages/tools/AnxietyToolsForSeniors"));
const ChronicPainManagement  = lazy(() => import("./pages/tools/ChronicPainManagement"));
const GriefAfterLoss         = lazy(() => import("./pages/tools/GriefAfterLoss"));
const CrisisLineGuide        = lazy(() => import("./pages/tools/CrisisLineGuide"));

// ── Cycle 190 (April 29 2026) — substance use ──
const AlcoholForSeniors      = lazy(() => import("./pages/tools/AlcoholForSeniors"));
const QuitSmokingSeniors     = lazy(() => import("./pages/tools/QuitSmokingSeniors"));
const MarijuanaForMedicalSeniors = lazy(() => import("./pages/tools/MarijuanaForMedicalSeniors"));
const BenzodiazepineSafety   = lazy(() => import("./pages/tools/BenzodiazepineSafety"));
const CaffeineForSeniors     = lazy(() => import("./pages/tools/CaffeineForSeniors"));

// ── Cycle 191 (April 29 2026) — chronic conditions ──
const BladderHealthSeniors   = lazy(() => import("./pages/tools/BladderHealthSeniors"));
const ThyroidHealthSeniors   = lazy(() => import("./pages/tools/ThyroidHealthSeniors"));
const COPDManagement         = lazy(() => import("./pages/tools/COPDManagement"));
const KidneyHealthGuide      = lazy(() => import("./pages/tools/KidneyHealthGuide"));
const AcidRefluxSeniors      = lazy(() => import("./pages/tools/AcidRefluxSeniors"));

// ── Cycle 192 (April 29 2026) — cardiovascular ──
const StrokeWarningSigns     = lazy(() => import("./pages/tools/StrokeWarningSigns"));
const HeartFailureBasics     = lazy(() => import("./pages/tools/HeartFailureBasics"));
const AFibInformation        = lazy(() => import("./pages/tools/AFibInformation"));
const BloodThinnerGuide      = lazy(() => import("./pages/tools/BloodThinnerGuide"));
const DVTPreventionSeniors   = lazy(() => import("./pages/tools/DVTPreventionSeniors"));

// ── Cycle 193 (April 29 2026) — end-of-life ──
const GreenBurialOptions     = lazy(() => import("./pages/tools/GreenBurialOptions"));
const DeathDoulaGuide        = lazy(() => import("./pages/tools/DeathDoulaGuide"));
const POLSTOrders            = lazy(() => import("./pages/tools/POLSTOrders"));
const HospiceMyths           = lazy(() => import("./pages/tools/HospiceMyths"));
const GriefForFamilyAfterDeath = lazy(() => import("./pages/tools/GriefForFamilyAfterDeath"));

// ── Cycle 194 (April 29 2026) — car maintenance ──
const TirePickGuide          = lazy(() => import("./pages/tools/TirePickGuide"));
const OilChangeFrequency     = lazy(() => import("./pages/tools/OilChangeFrequency"));
const DashcamPicker          = lazy(() => import("./pages/tools/DashcamPicker"));
const CarBatteryReplacement  = lazy(() => import("./pages/tools/CarBatteryReplacement"));
const CarMaintenanceSchedule = lazy(() => import("./pages/tools/CarMaintenanceSchedule"));

// ── Cycle 195 (April 29 2026) — DIY home ──
const BasicToolsForSeniors   = lazy(() => import("./pages/tools/BasicToolsForSeniors"));
const PaintingTipsSeniors    = lazy(() => import("./pages/tools/PaintingTipsSeniors"));
const CaulkingBasics         = lazy(() => import("./pages/tools/CaulkingBasics"));
const GeneratorTestRoutine   = lazy(() => import("./pages/tools/GeneratorTestRoutine"));
const FurnaceFilterSwap      = lazy(() => import("./pages/tools/FurnaceFilterSwap"));

// ── Cycle 196 (April 29 2026) — energy + sustainability ──
const HeatPumpForSeniors     = lazy(() => import("./pages/tools/HeatPumpForSeniors"));
const EVHomeChargerGuide     = lazy(() => import("./pages/tools/EVHomeChargerGuide"));
const TeslaPowerwallReview   = lazy(() => import("./pages/tools/TeslaPowerwallReview"));
const SolarTaxCredits        = lazy(() => import("./pages/tools/SolarTaxCredits"));
const EnergyAuditFree        = lazy(() => import("./pages/tools/EnergyAuditFree"));

// ── Cycle 197 (April 29 2026) — disaster prep ──
const TornadoPrepGuide       = lazy(() => import("./pages/tools/TornadoPrepGuide"));
const WildfirePrepGuide      = lazy(() => import("./pages/tools/WildfirePrepGuide"));
const HeatwaveSafety         = lazy(() => import("./pages/tools/HeatwaveSafety"));
const ColdSnapSafety         = lazy(() => import("./pages/tools/ColdSnapSafety"));
const FireAlarmTest          = lazy(() => import("./pages/tools/FireAlarmTest"));

// ── Cycle 198 (April 29 2026) — senior housing alternatives ──
const ADUForSeniors          = lazy(() => import("./pages/tools/ADUForSeniors"));
const ActiveAdultCommunity   = lazy(() => import("./pages/tools/ActiveAdultCommunity"));
const CohousingForSeniors    = lazy(() => import("./pages/tools/CohousingForSeniors"));
const AssistedLivingChoosing = lazy(() => import("./pages/tools/AssistedLivingChoosing"));
const StayingPutChecklist    = lazy(() => import("./pages/tools/StayingPutChecklist"));

// ── Cycle 199 (April 29 2026) — travel deals ──
const HotelDealForSeniors    = lazy(() => import("./pages/tools/HotelDealForSeniors"));
const AAADiscountList        = lazy(() => import("./pages/tools/AAADiscountList"));
const AARPMembershipUse      = lazy(() => import("./pages/tools/AARPMembershipUse"));
const SeniorAirfareDeals     = lazy(() => import("./pages/tools/SeniorAirfareDeals"));
const SeniorRentalCarDeals   = lazy(() => import("./pages/tools/SeniorRentalCarDeals"));

// ── Cycle 200 (April 29 2026) — grandparenting ──
const GrandkidVisitChecklist = lazy(() => import("./pages/tools/GrandkidVisitChecklist"));
const BabysittingTipsSeniors = lazy(() => import("./pages/tools/BabysittingTipsSeniors"));
const AttendGrandchildWedding = lazy(() => import("./pages/tools/AttendGrandchildWedding"));
const GrandparentLegalRights = lazy(() => import("./pages/tools/GrandparentLegalRights"));
const GrandkidSummerVisits   = lazy(() => import("./pages/tools/GrandkidSummerVisits"));

// ── Cycle 201 (April 29 2026) — books + podcasts ──
const BestBooksForSeniors    = lazy(() => import("./pages/tools/BestBooksForSeniors"));
const BookClubsHowToFind     = lazy(() => import("./pages/tools/BookClubsHowToFind"));
const BestPodcastsSeniors    = lazy(() => import("./pages/tools/BestPodcastsSeniors"));
const ApplePodcastsForSeniors = lazy(() => import("./pages/tools/ApplePodcastsForSeniors"));
const SpotifyForSeniorListeners = lazy(() => import("./pages/tools/SpotifyForSeniorListeners"));
const AudibleAppForSeniors   = lazy(() => import("./pages/tools/AudibleAppForSeniors"));
const SeniorRadioApps        = lazy(() => import("./pages/tools/SeniorRadioApps"));
const PocketCastsForSeniors  = lazy(() => import("./pages/tools/PocketCastsForSeniors"));
const KindleVsPaperbookSeniors = lazy(() => import("./pages/tools/KindleVsPaperbookSeniors"));
const AudiobookListenWalking = lazy(() => import("./pages/tools/AudiobookListenWalking"));

// ── Cycle 202 (April 29 2026) — outdoor recreation ──
const SeniorCampingGuide     = lazy(() => import("./pages/tools/SeniorCampingGuide"));
const KayakingForSeniors     = lazy(() => import("./pages/tools/KayakingForSeniors"));
const BoatingForSeniors      = lazy(() => import("./pages/tools/BoatingForSeniors"));
const BirdwatchingDeeper     = lazy(() => import("./pages/tools/BirdwatchingDeeper"));
const OutdoorPhotographyTips = lazy(() => import("./pages/tools/OutdoorPhotographyTips"));

// ── Cycle 203 (April 29 2026) — food + drink hobbies ──
const WineTastingForSeniors  = lazy(() => import("./pages/tools/WineTastingForSeniors"));
const CocktailMixingSenior   = lazy(() => import("./pages/tools/CocktailMixingSenior"));
const BakingForSeniors       = lazy(() => import("./pages/tools/BakingForSeniors"));
const SourdoughForSeniors    = lazy(() => import("./pages/tools/SourdoughForSeniors"));
const CookbookPicksForSeniors = lazy(() => import("./pages/tools/CookbookPicksForSeniors"));

// ── Cycle 204 (April 29 2026) — music + dance ──
const PianoForSeniors        = lazy(() => import("./pages/tools/PianoForSeniors"));
const UkuleleForSeniors      = lazy(() => import("./pages/tools/UkuleleForSeniors"));
const BallroomDancingSeniors = lazy(() => import("./pages/tools/BallroomDancingSeniors"));
const ChoirForSeniors        = lazy(() => import("./pages/tools/ChoirForSeniors"));
const MusicTherapyApps       = lazy(() => import("./pages/tools/MusicTherapyApps"));

// ── Cycle 205 (April 29 2026) — crafts ──
const CrochetForSeniors      = lazy(() => import("./pages/tools/CrochetForSeniors"));
const SewingMachineBasics    = lazy(() => import("./pages/tools/SewingMachineBasics"));
const QuiltingForBeginners   = lazy(() => import("./pages/tools/QuiltingForBeginners"));
const EmbroideryForSeniors   = lazy(() => import("./pages/tools/EmbroideryForSeniors"));
const ScrapbookingDigital    = lazy(() => import("./pages/tools/ScrapbookingDigital"));

// ── Cycle 206 (April 29 2026) — holidays ──
const ChristmasShoppingSeniors = lazy(() => import("./pages/tools/ChristmasShoppingSeniors"));
const ThanksgivingHostingTech  = lazy(() => import("./pages/tools/ThanksgivingHostingTech"));
const ValentinesDayDigital     = lazy(() => import("./pages/tools/ValentinesDayDigital"));
const HalloweenSafetySeniors   = lazy(() => import("./pages/tools/HalloweenSafetySeniors"));
const NewYearGoalsApps         = lazy(() => import("./pages/tools/NewYearGoalsApps"));

// ── Cycle 207 (April 29 2026) — pet care ──
const DogTrainingApps          = lazy(() => import("./pages/tools/DogTrainingApps"));
const CatCareApps              = lazy(() => import("./pages/tools/CatCareApps"));
const PetGroomingHome          = lazy(() => import("./pages/tools/PetGroomingHome"));
const AquariumStarterSenior    = lazy(() => import("./pages/tools/AquariumStarterSenior"));
const PetSitterFinder          = lazy(() => import("./pages/tools/PetSitterFinder"));

// ── Cycle 208 (April 29 2026) — instruments ──
const GuitarForSeniors         = lazy(() => import("./pages/tools/GuitarForSeniors"));
const HarmonicaForSeniors      = lazy(() => import("./pages/tools/HarmonicaForSeniors"));
const ViolinForSeniors         = lazy(() => import("./pages/tools/ViolinForSeniors"));
const DrumsForSeniors          = lazy(() => import("./pages/tools/DrumsForSeniors"));
const SingingForSeniors        = lazy(() => import("./pages/tools/SingingForSeniors"));

// ── Cycle 209 (April 29 2026) — entertainment + writing ──
const ClassicMoviePicks        = lazy(() => import("./pages/tools/ClassicMoviePicks"));
const FamilyMovieNight         = lazy(() => import("./pages/tools/FamilyMovieNight"));
const BlogStartingSenior       = lazy(() => import("./pages/tools/BlogStartingSenior"));
const PoetryAppsSenior         = lazy(() => import("./pages/tools/PoetryAppsSenior"));
const ShortStoryWriting        = lazy(() => import("./pages/tools/ShortStoryWriting"));

// ── Cycle 210 (April 29 2026) — file mgmt + display ──
const WindowsFileExplorerBasics = lazy(() => import("./pages/tools/WindowsFileExplorerBasics"));
const MacFinderBasics           = lazy(() => import("./pages/tools/MacFinderBasics"));
const CloudFolderOrganization   = lazy(() => import("./pages/tools/CloudFolderOrganization"));
const DarkModeGuide             = lazy(() => import("./pages/tools/DarkModeGuide"));
const WallpaperBackgroundGuide  = lazy(() => import("./pages/tools/WallpaperBackgroundGuide"));

// ── Cycle 211 (April 29 2026) — banking essentials ──
const CheckbookBalancingApps    = lazy(() => import("./pages/tools/CheckbookBalancingApps"));
const MobileDepositGuide        = lazy(() => import("./pages/tools/MobileDepositGuide"));
const DirectDepositSetup        = lazy(() => import("./pages/tools/DirectDepositSetup"));
const SafeDepositBoxGuide       = lazy(() => import("./pages/tools/SafeDepositBoxGuide"));
const EmergencyFundForSeniors   = lazy(() => import("./pages/tools/EmergencyFundForSeniors"));

// ── Cycle 212 (April 29 2026) — fitness deeper ──
const SilverSneakersGuide       = lazy(() => import("./pages/tools/SilverSneakersGuide"));
const SeniorWalkingShoes        = lazy(() => import("./pages/tools/SeniorWalkingShoes"));
const PilatesForSeniors         = lazy(() => import("./pages/tools/PilatesForSeniors"));
const SwimmingForSeniors        = lazy(() => import("./pages/tools/SwimmingForSeniors"));
const BocceLawnGames            = lazy(() => import("./pages/tools/BocceLawnGames"));

// ── Cycle 213 (April 29 2026) — nutrition deeper ──
const VitaminsForSeniors        = lazy(() => import("./pages/tools/VitaminsForSeniors"));
const SupplementSafety          = lazy(() => import("./pages/tools/SupplementSafety"));
const MealPrepForOne            = lazy(() => import("./pages/tools/MealPrepForOne"));
const HighFiberRecipes          = lazy(() => import("./pages/tools/HighFiberRecipes"));
const OmegaFishOilGuide         = lazy(() => import("./pages/tools/OmegaFishOilGuide"));

// ── Cycle 214 (April 29 2026) — auto deeper ──
const CarBuyingTipsSeniors      = lazy(() => import("./pages/tools/CarBuyingTipsSeniors"));
const AutoLeaseVsBuy            = lazy(() => import("./pages/tools/AutoLeaseVsBuy"));
const ElectricCarsForSeniors    = lazy(() => import("./pages/tools/ElectricCarsForSeniors"));
const CarTradeInApps            = lazy(() => import("./pages/tools/CarTradeInApps"));
const AutoExtendedWarranty      = lazy(() => import("./pages/tools/AutoExtendedWarranty"));

// ── Cycle 215 (April 29 2026) — security deeper ──
const SSNCompromiseSteps        = lazy(() => import("./pages/tools/SSNCompromiseSteps"));
const SocialMediaFakeAccounts   = lazy(() => import("./pages/tools/SocialMediaFakeAccounts"));
const ComputerVirusRemoval      = lazy(() => import("./pages/tools/ComputerVirusRemoval"));
const EmailHackedRecovery       = lazy(() => import("./pages/tools/EmailHackedRecovery"));
const WhatsAppScamSpotting      = lazy(() => import("./pages/tools/WhatsAppScamSpotting"));

// ── Cycle 216 (April 29 2026) — beauty + grooming ──
const SeniorMakeupTipsApps      = lazy(() => import("./pages/tools/SeniorMakeupTipsApps"));
const HairCareForSeniors        = lazy(() => import("./pages/tools/HairCareForSeniors"));
const NailCareForSeniors        = lazy(() => import("./pages/tools/NailCareForSeniors"));
const ShavingForSeniors         = lazy(() => import("./pages/tools/ShavingForSeniors"));
const PerfumeColognePicks       = lazy(() => import("./pages/tools/PerfumeColognePicks"));

// ── Cycle 217 (April 29 2026) — home maintenance ──
const PlumbingBasicsForSeniors  = lazy(() => import("./pages/tools/PlumbingBasicsForSeniors"));
const ElectricalBasicsForSeniors = lazy(() => import("./pages/tools/ElectricalBasicsForSeniors"));
const AirFilterChangingGuide    = lazy(() => import("./pages/tools/AirFilterChangingGuide"));
const SeasonalHomeChecklist     = lazy(() => import("./pages/tools/SeasonalHomeChecklist"));
const ApplianceLifespanGuide    = lazy(() => import("./pages/tools/ApplianceLifespanGuide"));

// ── Cycle 218 (April 29 2026) — phone basics ──
const PhoneCaseScreenProtector  = lazy(() => import("./pages/tools/PhoneCaseScreenProtector"));
const SwitchCellCarrier         = lazy(() => import("./pages/tools/SwitchCellCarrier"));
const PrepaidVsContractPhones   = lazy(() => import("./pages/tools/PrepaidVsContractPhones"));
const RingtoneCustomization     = lazy(() => import("./pages/tools/RingtoneCustomization"));
const PhoneTrackingFamily       = lazy(() => import("./pages/tools/PhoneTrackingFamily"));

// ── Cycle 219 (April 29 2026) — AI use cases ──
const AIMemoryHelpForSeniors    = lazy(() => import("./pages/tools/AIMemoryHelpForSeniors"));
const AIShoppingAssistant       = lazy(() => import("./pages/tools/AIShoppingAssistant"));
const AIHealthQuestions         = lazy(() => import("./pages/tools/AIHealthQuestions"));
const AIFinanceAdvice           = lazy(() => import("./pages/tools/AIFinanceAdvice"));
const AILegalQuestions          = lazy(() => import("./pages/tools/AILegalQuestions"));

// ── Cycle 220 (April 29 2026) — productivity apps ──
const GoogleSheetsBasics        = lazy(() => import("./pages/tools/GoogleSheetsBasics"));
const GoogleSlidesBasics        = lazy(() => import("./pages/tools/GoogleSlidesBasics"));
const MicrosoftTeamsForSeniors  = lazy(() => import("./pages/tools/MicrosoftTeamsForSeniors"));
const OutlookBasicsSeniors      = lazy(() => import("./pages/tools/OutlookBasicsSeniors"));
const OneDriveBasics            = lazy(() => import("./pages/tools/OneDriveBasics"));

// ── Cycle 221 (April 29 2026) — music streaming ──
const AppleMusicForSeniors      = lazy(() => import("./pages/tools/AppleMusicForSeniors"));
const AmazonMusicForSeniors     = lazy(() => import("./pages/tools/AmazonMusicForSeniors"));
const PandoraForSeniors         = lazy(() => import("./pages/tools/PandoraForSeniors"));
const SimplyPianoForSeniors     = lazy(() => import("./pages/tools/SimplyPianoForSeniors"));
const YousicianGuitarApp        = lazy(() => import("./pages/tools/YousicianGuitarApp"));
const MetronomeTunerApps        = lazy(() => import("./pages/tools/MetronomeTunerApps"));
const SmuleKaraokeApp           = lazy(() => import("./pages/tools/SmuleKaraokeApp"));
const SheetMusicAppsDigital     = lazy(() => import("./pages/tools/SheetMusicAppsDigital"));
const YouTubeMusicForSeniors    = lazy(() => import("./pages/tools/YouTubeMusicForSeniors"));
const TuneInRadioApps           = lazy(() => import("./pages/tools/TuneInRadioApps"));

// ── Cycle 222 (April 29 2026) — social media ──
const PinterestForSeniors       = lazy(() => import("./pages/tools/PinterestForSeniors"));
const ThreadsAppGuide           = lazy(() => import("./pages/tools/ThreadsAppGuide"));
const BlueskyExplained          = lazy(() => import("./pages/tools/BlueskyExplained"));
const FacebookGroupsForSeniors  = lazy(() => import("./pages/tools/FacebookGroupsForSeniors"));
const SocialMediaPrivacyAudit   = lazy(() => import("./pages/tools/SocialMediaPrivacyAudit"));
const DisneyPlusForSeniors      = lazy(() => import("./pages/tools/DisneyPlusForSeniors"));
const HuluForSeniors            = lazy(() => import("./pages/tools/HuluForSeniors"));
const PeacockStreamingGuide     = lazy(() => import("./pages/tools/PeacockStreamingGuide"));
const MaxHBOStreamingGuide      = lazy(() => import("./pages/tools/MaxHBOStreamingGuide"));
const TubiPlutoFreeStreaming    = lazy(() => import("./pages/tools/TubiPlutoFreeStreaming"));
const SimpliSafeReview          = lazy(() => import("./pages/tools/SimpliSafeReview"));
const RingAlarmSystemGuide      = lazy(() => import("./pages/tools/RingAlarmSystemGuide"));
const HomeSecuritySystemCompare = lazy(() => import("./pages/tools/HomeSecuritySystemCompare"));
const MotionSensorLightsGuide   = lazy(() => import("./pages/tools/MotionSensorLightsGuide"));
const HomeSecurityChecklist     = lazy(() => import("./pages/tools/HomeSecurityChecklist"));
const TripItAppGuide            = lazy(() => import("./pages/tools/TripItAppGuide"));
const PocketWifiAbroad          = lazy(() => import("./pages/tools/PocketWifiAbroad"));
const VRBOAirbnbCompareSeniors  = lazy(() => import("./pages/tools/VRBOAirbnbCompareSeniors"));
const SoloSeniorTravelTips      = lazy(() => import("./pages/tools/SoloSeniorTravelTips"));
const CurrencyExchangeForSeniors = lazy(() => import("./pages/tools/CurrencyExchangeForSeniors"));
const GoodRxDrugSavings         = lazy(() => import("./pages/tools/GoodRxDrugSavings"));
const MedisafePillReminder      = lazy(() => import("./pages/tools/MedisafePillReminder"));
const BloodPressureTrackingApps = lazy(() => import("./pages/tools/BloodPressureTrackingApps"));
const AppleHealthAppTutorial    = lazy(() => import("./pages/tools/AppleHealthAppTutorial"));
const SmartScaleForSeniors      = lazy(() => import("./pages/tools/SmartScaleForSeniors"));
const LumosityBrainHQCompare    = lazy(() => import("./pages/tools/LumosityBrainHQCompare"));
const ChairExercisesForSeniors  = lazy(() => import("./pages/tools/ChairExercisesForSeniors"));
const BalanceExercisesSeniors   = lazy(() => import("./pages/tools/BalanceExercisesSeniors"));
const WordsWithFriendsSeniors   = lazy(() => import("./pages/tools/WordsWithFriendsSeniors"));
const AARPTaxAideGuide          = lazy(() => import("./pages/tools/AARPTaxAideGuide"));
const TurboTaxForSeniors        = lazy(() => import("./pages/tools/TurboTaxForSeniors"));
const HRBlockForSeniors         = lazy(() => import("./pages/tools/HRBlockForSeniors"));
const QuickenForRetirees        = lazy(() => import("./pages/tools/QuickenForRetirees"));
const RothConversionCalculators = lazy(() => import("./pages/tools/RothConversionCalculators"));
const IRSGovOnlineAccount       = lazy(() => import("./pages/tools/IRSGovOnlineAccount"));
const PropertyTaxExemptionSeniors = lazy(() => import("./pages/tools/PropertyTaxExemptionSeniors"));
const SocialSecurityClaimingStrategy = lazy(() => import("./pages/tools/SocialSecurityClaimingStrategy"));
const SeniorDiscountFinder      = lazy(() => import("./pages/tools/SeniorDiscountFinder"));

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
const RocketMoneySubscriptionTracker = lazy(() => import("./pages/tools/RocketMoneySubscriptionTracker"));
const AppleHomeKitForSeniors = lazy(() => import("./pages/tools/AppleHomeKitForSeniors"));
const EchoShowForSeniors     = lazy(() => import("./pages/tools/EchoShowForSeniors"));
const IPostalMailScanning    = lazy(() => import("./pages/tools/IPostalMailScanning"));
const SnowbirdTechSetup      = lazy(() => import("./pages/tools/SnowbirdTechSetup"));
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
const ChaseBankAppForSeniors = lazy(() => import("./pages/tools/ChaseBankAppForSeniors"));
const BankOfAmericaAppGuide  = lazy(() => import("./pages/tools/BankOfAmericaAppGuide"));
const CreditCardAppManagement = lazy(() => import("./pages/tools/CreditCardAppManagement"));
const CreditScoreMonitorApps = lazy(() => import("./pages/tools/CreditScoreMonitorApps"));
const UsaaForVeteranSeniors  = lazy(() => import("./pages/tools/UsaaForVeteranSeniors"));
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
const OtterAITranscription   = lazy(() => import("./pages/tools/OtterAITranscription"));
const VoiceTypingPhoneTutorial = lazy(() => import("./pages/tools/VoiceTypingPhoneTutorial"));
const SiriCommandsCheatSheet = lazy(() => import("./pages/tools/SiriCommandsCheatSheet"));
const GoogleAssistantSeniorCommands = lazy(() => import("./pages/tools/GoogleAssistantSeniorCommands"));
const StylusForSeniorTablets = lazy(() => import("./pages/tools/StylusForSeniorTablets"));
const AppleWatchAccessibility = lazy(() => import("./pages/tools/AppleWatchAccessibility"));
const PhoneStylusForArthritis = lazy(() => import("./pages/tools/PhoneStylusForArthritis"));
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
const EReaderComparisonGuide = lazy(() => import("./pages/tools/EReaderComparisonGuide"));
const KindleUnlimitedScribdReview = lazy(() => import("./pages/tools/KindleUnlimitedScribdReview"));
const GunSafeBiometric       = lazy(() => import("./pages/tools/GunSafeBiometric"));
const PowerBankSeniorPicks   = lazy(() => import("./pages/tools/PowerBankSeniorPicks"));
const SeniorJobSearchPlatforms = lazy(() => import("./pages/tools/SeniorJobSearchPlatforms"));
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
const NYTimesAppForSeniors   = lazy(() => import("./pages/tools/NYTimesAppForSeniors"));
const AppleNewsPlusReview    = lazy(() => import("./pages/tools/AppleNewsPlusReview"));
const WashingtonPostAppGuide = lazy(() => import("./pages/tools/WashingtonPostAppGuide"));
const NPRPodcastsForSeniors  = lazy(() => import("./pages/tools/NPRPodcastsForSeniors"));
const SubstackForSeniors     = lazy(() => import("./pages/tools/SubstackForSeniors"));
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
          <Route path="/tools/bitwarden-setup-seniors" element={<BitwardenSetupSeniors />} />
          <Route path="/tools/two-factor-auth-setup" element={<TwoFactorAuthSetup />} />
          <Route path="/tools/apple-id-account-security" element={<AppleIDAccountSecurity />} />
          <Route path="/tools/google-account-security-checkup" element={<GoogleAccountSecurityCheckup />} />
          <Route path="/tools/hardware-security-keys" element={<HardwareSecurityKeys />} />
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
          <Route path="/tools/rocket-money-subscription-tracker" element={<RocketMoneySubscriptionTracker />} />
          <Route path="/tools/apple-homekit-for-seniors" element={<AppleHomeKitForSeniors />} />
          <Route path="/tools/echo-show-for-seniors" element={<EchoShowForSeniors />} />
          <Route path="/tools/ipostal-mail-scanning" element={<IPostalMailScanning />} />
          <Route path="/tools/snowbird-tech-setup" element={<SnowbirdTechSetup />} />
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
          <Route path="/tools/all-trails-for-seniors" element={<AllTrailsForSeniors />} />
          <Route path="/tools/national-parks-app-seniors" element={<NationalParksAppSeniors />} />
          <Route path="/tools/merlin-bird-song-id" element={<MerlinBirdSongID />} />
          <Route path="/tools/inaturalist-app-for-seniors" element={<INaturalistAppForSeniors />} />
          <Route path="/tools/senior-outdoor-clubs-apps" element={<SeniorOutdoorClubsApps />} />
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
          <Route path="/tools/family-search-free-app" element={<FamilySearchFreeApp />} />
          <Route path="/tools/story-worth-family-memoir" element={<StoryWorthFamilyMemoir />} />
          <Route path="/tools/my-heritage-dna-comparison" element={<MyHeritageDNAComparison />} />
          <Route path="/tools/record-family-history-audio" element={<RecordFamilyHistoryAudio />} />
          <Route path="/tools/old-photo-scanning-apps" element={<OldPhotoScanningApps />} />
          <Route path="/tools/digital-photo-frame-picker" element={<DigitalPhotoFramePicker />} />
          <Route path="/tools/tv-sound-bar-picker" element={<TvSoundBarPicker />} />
          <Route path="/tools/volunteer-apps" element={<VolunteerApps />} />
          <Route path="/tools/masterclass-review-seniors" element={<MasterClassReviewSeniors />} />
          <Route path="/tools/khan-academy-for-seniors" element={<KhanAcademyForSeniors />} />
          <Route path="/tools/olli-lifelong-learning" element={<OLLILifelongLearning />} />
          <Route path="/tools/aarp-create-senior-classes" element={<AARPCreateSeniorClasses />} />
          <Route path="/tools/senior-volunteer-opportunities" element={<SeniorVolunteerOpportunities />} />

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
          <Route path="/tools/fidelity-app-for-seniors" element={<FidelityAppForSeniors />} />
          <Route path="/tools/vanguard-for-retirees" element={<VanguardForRetirees />} />
          <Route path="/tools/robinhood-webull-senior-warning" element={<RobinhoodWebullSeniorWarning />} />
          <Route path="/tools/schwab-intelligent-portfolios" element={<SchwabIntelligentPortfolios />} />
          <Route path="/tools/estate-beneficiary-review" element={<EstateBeneficiaryReview />} />
          <Route path="/tools/adult-screen-time-coach" element={<AdultScreenTimeCoach />} />

          {/* Cycle 24 — backup / photo-org / medical / bills / journal */}
          <Route path="/tools/backup-strategy" element={<BackupStrategy />} />
          <Route path="/tools/photo-organization-coach" element={<PhotoOrganizationCoach />} />
          <Route path="/tools/medical-records-organizer" element={<MedicalRecordsOrganizer />} />
          <Route path="/tools/bills-paperless-organizer" element={<BillsPaperlessOrganizer />} />
          <Route path="/tools/journaling-apps" element={<JournalingApps />} />
          <Route path="/tools/day-one-journal-app" element={<DayOneJournalApp />} />
          <Route path="/tools/senior-memoir-writing" element={<SeniorMemoirWriting />} />
          <Route path="/tools/gratitude-app-for-seniors" element={<GratitudeAppForSeniors />} />
          <Route path="/tools/amazon-kdp-for-seniors" element={<AmazonKDPForSeniors />} />
          <Route path="/tools/senior-book-clubs-online" element={<SeniorBookClubsOnline />} />

          {/* Cycle 25 — caregiving / accessibility / health */}
          <Route path="/tools/caregiver-coordination-apps" element={<CaregiverCoordinationApps />} />
          <Route path="/tools/voice-control-accessibility" element={<VoiceControlAccessibility />} />
          <Route path="/tools/medical-alert-picker" element={<MedicalAlertPicker />} />
          <Route path="/tools/telehealth-visit-coach" element={<TelehealthVisitCoach />} />
          <Route path="/tools/online-pharmacy-coach" element={<OnlinePharmacyCoach />} />
          <Route path="/tools/amazon-pharmacy-for-seniors" element={<AmazonPharmacyForSeniors />} />
          <Route path="/tools/cost-plus-drugs-explained" element={<CostPlusDrugsExplained />} />
          <Route path="/tools/capsule-pharmacy-delivery" element={<CapsulePharmacyDelivery />} />
          <Route path="/tools/pillpack-for-seniors" element={<PillPackForSeniors />} />
          <Route path="/tools/medicare-90-day-supply" element={<Medicare90DaySupply />} />

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
          <Route path="/tools/vpn-for-seniors-explained" element={<VPNForSeniorsExplained />} />
          <Route path="/tools/malwarebytes-for-seniors" element={<MalwarebytesForSeniors />} />
          <Route path="/tools/public-wifi-safety-tutorial" element={<PublicWifiSafetyTutorial />} />
          <Route path="/tools/router-security-setup" element={<RouterSecuritySetup />} />
          <Route path="/tools/phone-security-checkup" element={<PhoneSecurityCheckup />} />
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
          <Route path="/tools/roku-setup-for-seniors" element={<RokuSetupForSeniors />} />
          <Route path="/tools/fire-tv-stick-guide" element={<FireTVStickGuide />} />
          <Route path="/tools/universal-remote-for-seniors" element={<UniversalRemoteForSeniors />} />
          <Route path="/tools/captioning-call-seniors" element={<CaptioningCallSeniors />} />
          <Route path="/tools/soundbar-tv-audio-for-seniors" element={<SoundbarTVAudioForSeniors />} />

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
          <Route path="/tools/chess-com-for-seniors" element={<ChessComForSeniors />} />
          <Route path="/tools/vivino-wine-app" element={<VivinoWineApp />} />
          <Route path="/tools/trivia-apps-for-seniors" element={<TriviaAppsForSeniors />} />
          <Route path="/tools/aarp-games-for-seniors" element={<AARPGamesForSeniors />} />
          <Route path="/tools/jeopardy-at-home-apps" element={<JeopardyAtHomeApps />} />
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
          <Route path="/tools/you-version-bible-app" element={<YouVersionBibleApp />} />
          <Route path="/tools/hallow-prayer-app" element={<HallowPrayerApp />} />
          <Route path="/tools/jewish-holiday-apps" element={<JewishHolidayApps />} />
          <Route path="/tools/insight-timer-meditation" element={<InsightTimerMeditation />} />
          <Route path="/tools/church-live-stream-apps" element={<ChurchLiveStreamApps />} />
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
          <Route path="/tools/apple-wallet-for-loyalty" element={<AppleWalletForLoyalty />} />
          <Route path="/tools/starbucks-app-rewards" element={<StarbucksAppRewards />} />
          <Route path="/tools/pharmacy-app-rewards" element={<PharmacyAppRewards />} />
          <Route path="/tools/grocery-app-deep-dive" element={<GroceryAppDeepDive />} />
          <Route path="/tools/gas-station-app-rewards" element={<GasStationAppRewards />} />
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
          <Route path="/tools/medical-guardian-review" element={<MedicalGuardianReview />} />
          <Route path="/tools/life-alert-vs-competitors" element={<LifeAlertVsCompetitors />} />
          <Route path="/tools/apple-watch-sos-tutorial" element={<AppleWatchSOSTutorial />} />
          <Route path="/tools/aloe-care-caregiving-app" element={<AloeCareCaregivingApp />} />
          <Route path="/tools/philips-lifeline-senior" element={<PhilipsLifelineSenior />} />
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
          <Route path="/tools/uber-lyft-for-seniors" element={<UberLyftForSeniors />} />
          <Route path="/tools/senior-paratransit-guide" element={<SeniorParatransitGuide />} />
          <Route path="/tools/senior-driver-evaluation" element={<SeniorDriverEvaluation />} />
          <Route path="/tools/car-rental-apps-for-seniors" element={<CarRentalAppsForSeniors />} />
          <Route path="/tools/gas-buddy-app-guide" element={<GasBuddyAppGuide />} />

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

          {/* Cycle 80 — caregivers + senior care */}
          <Route path="/tools/caregiver-apps" element={<CaregiverApps />} />
          <Route path="/tools/aging-in-place-tech" element={<AgingInPlaceTech />} />
          <Route path="/tools/memory-care-apps" element={<MemoryCareApps />} />
          <Route path="/tools/parkinsons-apps" element={<ParkinsonsApps />} />
          <Route path="/tools/respite-care-finders" element={<RespiteCareFinders />} />

          {/* Cycle 81 — tax + paperwork */}
          <Route path="/tools/tax-filing-picks" element={<TaxFilingPicks />} />
          <Route path="/tools/property-tax-appeal" element={<PropertyTaxAppeal />} />
          <Route path="/tools/paper-shredding-guide" element={<PaperShreddingGuide />} />
          <Route path="/tools/scanner-app-picks" element={<ScannerAppPicks />} />
          <Route path="/tools/medical-records-request" element={<MedicalRecordsRequest />} />

          {/* Cycle 82 — accessibility */}
          <Route path="/tools/magnifier-app-picks" element={<MagnifierAppPicks />} />
          <Route path="/tools/iphone-magnifier-tutorial" element={<IphoneMagnifierTutorial />} />
          <Route path="/tools/live-captions-for-seniors" element={<LiveCaptionsForSeniors />} />
          <Route path="/tools/accessibility-shortcuts-iphone" element={<AccessibilityShortcutsIphone />} />
          <Route path="/tools/android-accessibility-features" element={<AndroidAccessibilityFeatures />} />
          <Route path="/tools/emergency-sos-phones" element={<EmergencySOSPhones />} />
          <Route path="/tools/color-blind-tools" element={<ColorBlindTools />} />
          <Route path="/tools/snapseed-photo-editing" element={<SnapseedPhotoEditing />} />
          <Route path="/tools/iphone-camera-tips-seniors" element={<IphoneCameraTipsSeniors />} />
          <Route path="/tools/photo-organizing-massive" element={<PhotoOrganizingMassive />} />
          <Route path="/tools/airdrop-for-sharing" element={<AirDropForSharing />} />
          <Route path="/tools/google-photos-for-seniors" element={<GooglePhotosForSeniors />} />
          <Route path="/tools/one-handed-typing" element={<OneHandedTyping />} />
          <Route path="/tools/braille-displays" element={<BrailleDisplays />} />
          <Route path="/tools/dictation-training" element={<DictationTraining />} />

          {/* Cycle 83 — home safety */}
          <Route path="/tools/water-shutoff-guide" element={<WaterShutoffGuide />} />
          <Route path="/tools/fire-safety-checklist" element={<FireSafetyChecklist />} />
          <Route path="/tools/gas-leak-detect" element={<GasLeakDetect />} />
          <Route path="/tools/carbon-monoxide-picks" element={<CarbonMonoxidePicks />} />
          <Route path="/tools/emergency-kit-checklist" element={<EmergencyKitChecklist />} />

          {/* Cycle 84 — weather + outdoor */}
          <Route path="/tools/weather-app-picks" element={<WeatherAppPicks />} />
          <Route path="/tools/garden-weather-tools" element={<GardenWeatherTools />} />
          <Route path="/tools/hiking-gps-apps" element={<HikingGpsApps />} />
          <Route path="/tools/backyard-safety-audit" element={<BackyardSafetyAudit />} />
          <Route path="/tools/snow-safety-tech" element={<SnowSafetyTech />} />

          {/* Cycle 85 — civic + community */}
          <Route path="/tools/voting-tech-help" element={<VotingTechHelp />} />
          <Route path="/tools/nextdoor-basics" element={<NextdoorBasics />} />
          <Route path="/tools/ebay-for-senior-sellers" element={<EbayForSeniorSellers />} />
          <Route path="/tools/facebook-marketplace-tips" element={<FacebookMarketplaceTips />} />
          <Route path="/tools/poshmark-vintage-selling" element={<PoshmarkVintageSelling />} />
          <Route path="/tools/estate-sale-apps" element={<EstateSaleApps />} />
          <Route path="/tools/senior-yard-sale-strategy" element={<SeniorYardSaleStrategy />} />
          <Route path="/tools/volunteer-match-apps" element={<VolunteerMatchApps />} />
          <Route path="/tools/local-news-apps" element={<LocalNewsApps />} />
          <Route path="/tools/city-open-data-tools" element={<CityOpenDataTools />} />

          {/* Cycle 86 — pet tech */}
          <Route path="/tools/pet-camera-picks" element={<PetCameraPicks />} />
          <Route path="/tools/pet-gps-trackers" element={<PetGpsTrackers />} />
          <Route path="/tools/auto-feeder-picks" element={<AutoFeederPicks />} />
          <Route path="/tools/pet-televet-visits" element={<PetTelevetVisits />} />
          <Route path="/tools/online-pet-pharmacies" element={<OnlinePetPharmacies />} />

          {/* Cycle 87 — kids/grandkids tech */}
          <Route path="/tools/screen-time-for-kids" element={<ScreenTimeForKids />} />
          <Route path="/tools/kid-safe-youtube" element={<KidSafeYouTube />} />
          <Route path="/tools/gaming-for-grandkids" element={<GamingForGrandkids />} />
          <Route path="/tools/online-learning-kids" element={<OnlineLearningKids />} />
          <Route path="/tools/audiobook-kids" element={<AudiobookKids />} />

          {/* Cycle 88 — senior fitness */}
          <Route path="/tools/chair-yoga-apps" element={<ChairYogaApps />} />
          <Route path="/tools/balance-exercise-apps" element={<BalanceExerciseApps />} />
          <Route path="/tools/swim-workout-trackers" element={<SwimWorkoutTrackers />} />
          <Route path="/tools/senior-fitness-youtube" element={<SeniorFitnessYouTube />} />
          <Route path="/tools/step-counter-compare" element={<StepCounterCompare />} />

          {/* Cycle 89 — clinical tech */}
          <Route path="/tools/tele-dentistry" element={<TeleDentistry />} />
          <Route path="/tools/eye-exam-apps" element={<EyeExamApps />} />
          <Route path="/tools/heart-tracker-apps" element={<HeartTrackerApps />} />
          <Route path="/tools/blood-pressure-cuffs" element={<BloodPressureCuffs />} />
          <Route path="/tools/mental-health-apps-compare" element={<MentalHealthAppsCompare />} />

          {/* Cycle 90 — faith + community */}
          <Route path="/tools/church-livestream-setup" element={<ChurchLivestreamSetup />} />
          <Route path="/tools/hymn-app-picks" element={<HymnAppPicks />} />
          <Route path="/tools/bible-app-compare" element={<BibleAppCompare />} />
          <Route path="/tools/online-grief-support" element={<OnlineGriefSupport />} />
          <Route path="/tools/senior-pen-pal-apps" element={<SeniorPenPalApps />} />

          {/* Cycle 91 — phone carrier */}
          <Route path="/tools/provider-switch-guide" element={<ProviderSwitchGuide />} />
          <Route path="/tools/mvno-picker-guide" element={<MvnoPickerGuide />} />
          <Route path="/tools/family-plan-compare" element={<FamilyPlanCompare />} />
          <Route path="/tools/burner-phone-tips" element={<BurnerPhoneTips />} />
          <Route path="/tools/roaming-tips" element={<RoamingTips />} />

          {/* Cycle 92 — TV + entertainment */}
          <Route path="/tools/antenna-picks" element={<AntennaPicks />} />
          <Route path="/tools/free-streaming-channels" element={<FreeStreamingChannels />} />
          <Route path="/tools/sports-stream-compare" element={<SportsStreamCompare />} />
          <Route path="/tools/local-tv-cord-cutting" element={<LocalTvCordCutting />} />
          <Route path="/tools/closed-captioning-setup" element={<ClosedCaptioningSetup />} />

          {/* Cycle 93 — DIY + handyman */}
          <Route path="/tools/handyman-finder" element={<HandymanFinder />} />
          <Route path="/tools/home-improvement-apps" element={<HomeImprovementApps />} />
          <Route path="/tools/appliance-parts-apps" element={<AppliancePartsApps />} />
          <Route path="/tools/paint-color-apps" element={<PaintColorApps />} />
          <Route path="/tools/furniture-assembly-help" element={<FurnitureAssemblyHelp />} />

          {/* Cycle 94 — nutrition + meals */}
          <Route path="/tools/meal-kit-delivery" element={<MealKitDelivery />} />
          <Route path="/tools/grocery-delivery-apps" element={<GroceryDeliveryApps />} />
          <Route path="/tools/instacart-for-seniors" element={<InstacartForSeniors />} />
          <Route path="/tools/ibotta-cashback-for-seniors" element={<IbottaCashbackForSeniors />} />
          <Route path="/tools/amazon-fresh-walmart-plus" element={<AmazonFreshWalmartPlus />} />
          <Route path="/tools/costco-membership-for-seniors" element={<CostcoMembershipForSeniors />} />
          <Route path="/tools/amazon-returns-basics" element={<AmazonReturnsBasics />} />
          <Route path="/tools/nutrition-label-scanner" element={<NutritionLabelScanner />} />
          <Route path="/tools/diet-apps" element={<DietApps />} />
          <Route path="/tools/senior-meal-programs" element={<SeniorMealPrograms />} />

          {/* Cycle 95 — senior dating */}
          <Route path="/tools/senior-dating-apps" element={<SeniorDatingApps />} />
          <Route path="/tools/widowed-relationships" element={<WidowedRelationships />} />
          <Route path="/tools/scam-dating-flags" element={<ScamDatingFlags />} />
          <Route path="/tools/grace-dating-60-plus" element={<GraceDating60Plus />} />
          <Route path="/tools/first-date-tech" element={<FirstDateTech />} />

          {/* Cycle 96 — language + learning */}
          <Route path="/tools/language-app-compare" element={<LanguageAppCompare />} />
          <Route path="/tools/free-university-courses" element={<FreeUniversityCourses />} />
          <Route path="/tools/crossword-apps" element={<CrosswordApps />} />
          <Route path="/tools/memoir-writing-apps" element={<MemoirWritingApps />} />
          <Route path="/tools/chess-picks" element={<ChessPicks />} />

          {/* Cycle 97 — medication safety */}
          <Route path="/tools/pill-organizer-smart" element={<PillOrganizerSmart />} />
          <Route path="/tools/med-reconciliation" element={<MedReconciliation />} />
          <Route path="/tools/drug-interaction-checkers" element={<DrugInteractionCheckers />} />
          <Route path="/tools/rx-coupon-apps" element={<RxCouponApps />} />
          <Route path="/tools/medication-delivery-services" element={<MedicationDeliveryServices />} />

          {/* Cycle 98 — kitchen tech */}
          <Route path="/tools/sous-vide-picks" element={<SousVidePicks />} />
          <Route path="/tools/instant-pot-apps" element={<InstantPotApps />} />
          <Route path="/tools/paprika-recipe-manager" element={<PaprikaRecipeManager />} />
          <Route path="/tools/allrecipes-yummly-apps" element={<AllrecipesYummlyApps />} />
          <Route path="/tools/smart-kitchen-scales-apps" element={<SmartKitchenScalesApps />} />
          <Route path="/tools/meal-planning-apps" element={<MealPlanningApps />} />
          <Route path="/tools/hellofresh-senior-review" element={<HelloFreshSeniorReview />} />
          <Route path="/tools/americas-test-kitchen-app" element={<AmericasTestKitchenApp />} />
          <Route path="/tools/pbs-passport-for-seniors" element={<PBSPassportForSeniors />} />
          <Route path="/tools/magnolia-network-app" element={<MagnoliaNetworkApp />} />
          <Route path="/tools/crockpot-instant-pot-apps" element={<CrockpotInstantPotApps />} />
          <Route path="/tools/senior-baking-tutorials" element={<SeniorBakingTutorials />} />
          <Route path="/tools/kitchen-scale-picks" element={<KitchenScalePicks />} />
          <Route path="/tools/recipe-organizers" element={<RecipeOrganizers />} />
          <Route path="/tools/smart-oven-picks" element={<SmartOvenPicks />} />

          {/* Cycle 99 — home gym + fitness gear */}
          <Route path="/tools/home-gym-starter" element={<HomeGymStarter />} />
          <Route path="/tools/resistance-bands-guide" element={<ResistanceBandsGuide />} />
          <Route path="/tools/massage-gun-picks" element={<MassageGunPicks />} />
          <Route path="/tools/foam-roller-guide" element={<FoamRollerGuide />} />
          <Route path="/tools/senior-bike-options" element={<SeniorBikeOptions />} />

          {/* Cycle 100 — digital wellness */}
          <Route path="/tools/blue-light-filters" element={<BlueLightFilters />} />
          <Route path="/tools/digital-detox-apps" element={<DigitalDetoxApps />} />
          <Route path="/tools/eye-strain-tips" element={<EyeStrainTips />} />
          <Route path="/tools/bedtime-phone-routine" element={<BedtimePhoneRoutine />} />
          <Route path="/tools/screen-break-reminders" element={<ScreenBreakReminders />} />

          {/* Cycle 101 — senior travel + adventure */}
          <Route path="/tools/scenic-byways" element={<ScenicByways />} />
          <Route path="/tools/accessible-travel-guide" element={<AccessibleTravelGuide />} />
          <Route path="/tools/senior-train-travel" element={<SeniorTrainTravel />} />
          <Route path="/tools/road-trip-planners" element={<RoadTripPlanners />} />
          <Route path="/tools/cruise-picks" element={<CruisePicks />} />

          {/* Cycle 102 — senior workforce */}
          <Route path="/tools/part-time-jobs-for-seniors" element={<PartTimeJobsForSeniors />} />
          <Route path="/tools/retirement-hobby-monetize" element={<RetirementHobbyMonetize />} />
          <Route path="/tools/encore-careers" element={<EncoreCareers />} />
          <Route path="/tools/online-business-for-seniors" element={<OnlineBusinessForSeniors />} />
          <Route path="/tools/freelance-senior" element={<FreelanceSenior />} />

          {/* Cycle 103 — crime + safety */}
          <Route path="/tools/home-security-systems" element={<HomeSecuritySystems />} />
          <Route path="/tools/identity-theft-recovery" element={<IdentityTheftRecovery />} />
          <Route path="/tools/smoke-alarm-testing" element={<SmokeAlarmTesting />} />
          <Route path="/tools/frozen-accounts-recovery" element={<FrozenAccountsRecovery />} />
          <Route path="/tools/estate-fraud-prevention" element={<EstateFraudPrevention />} />

          {/* Cycle 104 — grandparent-grandkid tech */}
          <Route path="/tools/grandparent-texting-apps" element={<GrandparentTextingApps />} />
          <Route path="/tools/family-video-games" element={<FamilyVideoGames />} />
          <Route path="/tools/kids-pen-pal-apps" element={<KidsPenPalApps />} />
          <Route path="/tools/grandparent-book-club" element={<GrandparentBookClub />} />
          <Route path="/tools/remote-storytelling" element={<RemoteStorytelling />} />

          {/* Cycle 105 — medical visit advocacy */}
          <Route path="/tools/doctor-visit-prep" element={<DoctorVisitPrep />} />
          <Route path="/tools/second-opinion-apps" element={<SecondOpinionApps />} />
          <Route path="/tools/medical-records-carry" element={<MedicalRecordsCarry />} />
          <Route path="/tools/symptom-checkers" element={<SymptomCheckers />} />
          <Route path="/tools/advocate-for-yourself" element={<AdvocateForYourself />} />

          {/* Cycle 106 — financial well-being */}
          <Route path="/tools/budgeting-apps" element={<BudgetingApps />} />
          <Route path="/tools/debt-payoff-planner" element={<DebtPayoffPlanner />} />
          <Route path="/tools/roth-conversion-guide" element={<RothConversionGuide />} />
          <Route path="/tools/annuity-reality-check" element={<AnnuityRealityCheck />} />
          <Route path="/tools/reverse-mortgage-guide" element={<ReverseMortgageGuide />} />

          {/* Cycle 107 — Spanish-speaking seniors */}
          <Route path="/tools/spanish-speaking-support" element={<SpanishSpeakingSupport />} />
          <Route path="/tools/bilingual-medical-apps" element={<BilingualMedicalApps />} />
          <Route path="/tools/remittances-guide" element={<RemittancesGuide />} />
          <Route path="/tools/spanish-voting-help" element={<SpanishVotingHelp />} />
          <Route path="/tools/spanish-retirement-resources" element={<SpanishRetirementResources />} />

          {/* Cycle 108 — smart home */}
          <Route path="/tools/smart-home-starter-kit" element={<SmartHomeStarterKit />} />
          <Route path="/tools/smart-lock-guide" element={<SmartLockGuide />} />
          <Route path="/tools/smart-thermostat-picks" element={<SmartThermostatPicks />} />
          <Route path="/tools/smart-lighting-basics" element={<SmartLightingBasics />} />
          <Route path="/tools/smart-hub-explained" element={<SmartHubExplained />} />

          {/* Cycle 109 — senior phones + simple devices */}
          <Route path="/tools/simple-phones-for-seniors" element={<SimplePhonesForSeniors />} />
          <Route path="/tools/jitterbug" element={<Jitterbug />} />
          <Route path="/tools/grandpad-review" element={<GrandPadReview />} />
          <Route path="/tools/ipad-vs-fire-tablet-seniors" element={<IpadVsFireTabletSeniors />} />
          <Route path="/tools/apple-watch-vs-fitbit-seniors" element={<AppleWatchVsFitbitSeniors />} />
          <Route path="/tools/senior-mobile-games" element={<SeniorMobileGames />} />
          <Route path="/tools/zoom-facetime-for-grandparents" element={<ZoomFaceTimeForGrandparents />} />
          <Route path="/tools/digital-legacy-planning" element={<DigitalLegacyPlanning />} />
          <Route path="/tools/apple-watch-as-phone" element={<AppleWatchAsPhone />} />
          <Route path="/tools/emergency-button-picks" element={<EmergencyButtonPicks />} />

          {/* Cycle 110 — holiday + special occasions */}
          <Route path="/tools/holiday-shopping-apps" element={<HolidayShoppingApps />} />
          <Route path="/tools/gift-ideas-for-grandkids" element={<GiftIdeasForGrandkids />} />
          <Route path="/tools/card-sending-apps" element={<CardSendingApps />} />
          <Route path="/tools/family-calendar-apps" element={<FamilyCalendarApps />} />
          <Route path="/tools/zoom-thanksgiving-tips" element={<ZoomThanksgivingTips />} />

          {/* Cycle 111 — post-retirement living */}
          <Route path="/tools/senior-village-options" element={<SeniorVillageOptions />} />
          <Route path="/tools/assisted-living-tech-check" element={<AssistedLivingTechCheck />} />
          <Route path="/tools/retirement-community-finder" element={<RetirementCommunityFinder />} />
          <Route path="/tools/aging-in-place-modifications" element={<AgingInPlaceModifications />} />
          <Route path="/tools/ccrc-explained" element={<CCRCExplained />} />

          {/* Cycle 112 — dental + vision + hearing */}
          <Route path="/tools/over-the-counter-hearing-aids" element={<OverTheCounterHearingAids />} />
          <Route path="/tools/prescription-glasses-online" element={<PrescriptionGlassesOnline />} />
          <Route path="/tools/dental-implant-guide" element={<DentalImplantGuide />} />
          <Route path="/tools/contact-lens-apps" element={<ContactLensApps />} />
          <Route path="/tools/warby-parker-for-seniors" element={<WarbyParkerForSeniors />} />
          <Route path="/tools/zenni-optical-review" element={<ZenniOpticalReview />} />
          <Route path="/tools/online-eye-exam-apps" element={<OnlineEyeExamApps />} />
          <Route path="/tools/senior-reading-glasses-guide" element={<SeniorReadingGlassesGuide />} />
          <Route path="/tools/contact-lens-online-seniors" element={<ContactLensOnlineSeniors />} />
          <Route path="/tools/teeth-cleaning-apps" element={<TeethCleaningApps />} />

          {/* Cycle 113 — senior auto + driving */}
          <Route path="/tools/senior-driving-tests" element={<SeniorDrivingTests />} />
          <Route path="/tools/auto-insurance-seniors" element={<AutoInsuranceSeniors />} />
          <Route path="/tools/backup-camera-retrofit" element={<BackupCameraRetrofit />} />
          <Route path="/tools/nexar-dash-cam-app" element={<NexarDashCamApp />} />
          <Route path="/tools/park-mobile-spark-seniors" element={<ParkMobileSparkSeniors />} />
          <Route path="/tools/aaa-mobile-for-seniors" element={<AAAMobileForSeniors />} />
          <Route path="/tools/senior-driving-assist" element={<SeniorDrivingAssist />} />
          <Route path="/tools/rental-car-apps-for-seniors" element={<RentalCarAppsForSeniors />} />
          <Route path="/tools/blind-spot-mirror-setups" element={<BlindSpotMirrorSetups />} />
          <Route path="/tools/senior-rideshare-alternatives" element={<SeniorRideShareAlternatives />} />

          {/* Cycle 114 — senior shopping smart */}
          <Route path="/tools/bulk-buying-math" element={<BulkBuyingMath />} />
          <Route path="/tools/coupon-stacking-tips" element={<CouponStackingTips />} />
          <Route path="/tools/returns-at-costco" element={<ReturnsAtCostco />} />
          <Route path="/tools/best-buy-open-box" element={<BestBuyOpenBox />} />
          <Route path="/tools/trader-joes-app-guide" element={<TraderJoesAppGuide />} />

          {/* Cycle 115 — senior music + audio */}
          <Route path="/tools/spotify-for-seniors" element={<SpotifyForSeniors />} />
          <Route path="/tools/record-player-streaming" element={<RecordPlayerStreaming />} />
          <Route path="/tools/bluetooth-speaker-picks" element={<BluetoothSpeakerPicks />} />
          <Route path="/tools/radio-apps" element={<RadioApps />} />
          <Route path="/tools/concert-ticket-tips" element={<ConcertTicketTips />} />

          {/* Cycle 116 — senior parenting + family */}
          <Route path="/tools/adult-child-boundaries" element={<AdultChildBoundaries />} />
          <Route path="/tools/grandparent-rights" element={<GrandparentRights />} />
          <Route path="/tools/family-conflict-apps" element={<FamilyConflictApps />} />
          <Route path="/tools/blended-family-tech" element={<BlendedFamilyTech />} />
          <Route path="/tools/estate-gifting-planning" element={<EstateGiftingPlanning />} />

          {/* Cycle 117 — privacy + data */}
          <Route path="/tools/privacy-audit-checklist" element={<PrivacyAuditChecklist />} />
          <Route path="/tools/data-broker-opt-out" element={<DataBrokerOptOut />} />
          <Route path="/tools/google-privacy-dashboard" element={<GooglePrivacyDashboard />} />
          <Route path="/tools/apple-privacy-report" element={<ApplePrivacyReport />} />
          <Route path="/tools/facebook-privacy-audit" element={<FacebookPrivacyAudit />} />

          {/* Cycle 118 — AI for seniors */}
          <Route path="/tools/chatgpt-recipes" element={<ChatGPTRecipes />} />
          <Route path="/tools/ai-letter-drafting" element={<AILetterDrafting />} />
          <Route path="/tools/ai-photo-edit" element={<AIPhotoEdit />} />
          <Route path="/tools/ai-bill-negotiate" element={<AIBillNegotiate />} />
          <Route path="/tools/ai-senior-search" element={<AISeniorSearch />} />

          {/* Cycle 119 — recovery + rehab */}
          <Route path="/tools/surgery-recovery-tech" element={<SurgeryRecoveryTech />} />
          <Route path="/tools/physical-therapy-apps" element={<PhysicalTherapyApps />} />
          <Route path="/tools/medical-equipment-rental" element={<MedicalEquipmentRental />} />
          <Route path="/tools/home-health-aide-find" element={<HomeHealthAideFind />} />
          <Route path="/tools/hospice-tech-support" element={<HospiceTechSupport />} />

          {/* Cycle 120 — wellness milestone */}
          <Route path="/tools/sleep-hygiene-apps" element={<SleepHygieneApps />} />
          <Route path="/tools/meditation-free-apps" element={<MeditationFreeApps />} />
          <Route path="/tools/sunscreen-app-picks" element={<SunscreenAppPicks />} />
          <Route path="/tools/hydration-trackers" element={<HydrationTrackers />} />
          <Route path="/tools/gardening-help-apps" element={<GardeningHelpApps />} />

          {/* Cycle 121 — internet basics */}
          <Route path="/tools/wifi-password-reset" element={<WifiPasswordReset />} />
          <Route path="/tools/router-picks-for-seniors" element={<RouterPicksForSeniors />} />
          <Route path="/tools/wifi-extenders" element={<WifiExtenders />} />
          <Route path="/tools/guest-network-setup" element={<GuestNetworkSetup />} />
          <Route path="/tools/ethernet-vs-wifi" element={<EthernetVsWifi />} />

          {/* Cycle 122 — tax + Medicare deeper */}
          <Route path="/tools/tax-loss-harvesting" element={<TaxLossHarvesting />} />
          <Route path="/tools/medicare-enrollment-timeline" element={<MedicareEnrollmentTimeline />} />
          <Route path="/tools/medicare-supplement-compare" element={<MedicareSupplementCompare />} />
          <Route path="/tools/irmaa-cliffs" element={<IRMAACliffs />} />
          <Route path="/tools/rmd-strategies" element={<RMDStrategies />} />

          {/* Cycle 123 — civic + service */}
          <Route path="/tools/americorp-vista" element={<AmericorpVista />} />
          <Route path="/tools/retired-educator-programs" element={<RetiredEducatorPrograms />} />
          <Route path="/tools/master-gardener-signup" element={<MasterGardenerSignup />} />
          <Route path="/tools/jury-duty-apps" element={<JuryDutyApps />} />
          <Route path="/tools/good-samaritan-laws" element={<GoodSamaritanLaws />} />

          {/* Cycle 124 — Office productivity */}
          <Route path="/tools/zoom-beginner-tips" element={<ZoomBeginnerTips />} />
          <Route path="/tools/email-attachment-basics" element={<EmailAttachmentBasics />} />
          <Route path="/tools/google-docs-senior-basics" element={<GoogleDocsSeniorBasics />} />
          <Route path="/tools/printing-from-phone" element={<PrintingFromPhone />} />
          <Route path="/tools/backup-your-phone" element={<BackupYourPhone />} />

          {/* Cycle 125 — government online services */}
          <Route path="/tools/social-security-online" element={<SocialSecurityOnline />} />
          <Route path="/tools/my-medicare-gov" element={<MyMedicareGov />} />
          <Route path="/tools/irs-payment-portal" element={<IRSPaymentPortal />} />
          <Route path="/tools/va-com" element={<VaCom />} />
          <Route path="/tools/dmv-online-services" element={<DmvOnlineServices />} />

          {/* Cycle 126 — phone tricks */}
          <Route path="/tools/voice-texting-trick" element={<VoiceTextingTrick />} />
          <Route path="/tools/font-size-accessibility" element={<FontSizeAccessibility />} />
          <Route path="/tools/magnify-text-how-to" element={<MagnifyTextHowTo />} />
          <Route path="/tools/emergency-contacts-lock-screen" element={<EmergencyContactsLockScreen />} />
          <Route path="/tools/apple-watch-texting-tips" element={<AppleWatchTextingTips />} />

          {/* Cycle 127 — senior insurance */}
          <Route path="/tools/home-insurance-shop" element={<HomeInsuranceShop />} />
          <Route path="/tools/umbrella-insurance" element={<UmbrellaInsurance />} />
          <Route path="/tools/long-term-care-insurance" element={<LongTermCareInsurance />} />
          <Route path="/tools/final-expense-insurance" element={<FinalExpenseInsurance />} />
          <Route path="/tools/renters-insurance-seniors" element={<RentersInsuranceSeniors />} />

          {/* Cycle 128 — community + clubs */}
          <Route path="/tools/senior-meetup-apps" element={<SeniorMeetupApps />} />
          <Route path="/tools/class-reunion-tools" element={<ClassReunionTools />} />
          <Route path="/tools/book-club-app-picks" element={<BookClubAppPicks />} />
          <Route path="/tools/garden-club-finder" element={<GardenClubFinder />} />
          <Route path="/tools/senior-travel-groups" element={<SeniorTravelGroups />} />

          {/* Cycle 129 — home cleanup + organization */}
          <Route path="/tools/downsize-checklist" element={<DownsizeChecklist />} />
          <Route path="/tools/estate-sale-apps" element={<EstateSaleApps />} />
          <Route path="/tools/junk-removal-apps" element={<JunkRemovalApps />} />
          <Route path="/tools/organizing-apps" element={<OrganizingApps />} />
          <Route path="/tools/storage-unit-picks" element={<StorageUnitPicks />} />

          {/* Cycle 130 — emergency preparedness */}
          <Route path="/tools/hurricane-prep" element={<HurricanePrep />} />
          <Route path="/tools/radar-scope-weather-app" element={<RadarScopeWeatherApp />} />
          <Route path="/tools/hurricane-prep-digital" element={<HurricanePrepDigital />} />
          <Route path="/tools/senior-water-safety" element={<SeniorWaterSafety />} />
          <Route path="/tools/apple-weather-iphone" element={<AppleWeatherIphone />} />
          <Route path="/tools/senior-emergency-kit-digital" element={<SeniorEmergencyKitDigital />} />
          <Route path="/tools/earthquake-prep" element={<EarthquakePrep />} />
          <Route path="/tools/blackout-kit" element={<BlackoutKit />} />
          <Route path="/tools/evacuation-go-bag" element={<EvacuationGoBag />} />
          <Route path="/tools/fema-app-for-seniors" element={<FEMAAppForSeniors />} />
          <Route path="/tools/emergency-kit-checklist-senior" element={<EmergencyKitChecklistSenior />} />
          <Route path="/tools/power-outage-prep" element={<PowerOutagePrep />} />
          <Route path="/tools/emergency-contact-plan" element={<EmergencyContactPlan />} />
          <Route path="/tools/carbon-monoxide-safety" element={<CarbonMonoxideSafety />} />
          <Route path="/tools/flood-prep" element={<FloodPrep />} />

          {/* Cycle 131 — senior cooking */}
          <Route path="/tools/slow-cooker-basics" element={<SlowCookerBasics />} />
          <Route path="/tools/one-pot-meals" element={<OnePotMeals />} />
          <Route path="/tools/freezer-meal-prep" element={<FreezerMealPrep />} />
          <Route path="/tools/healthy-snack-ideas" element={<HealthySnackIdeas />} />
          <Route path="/tools/soup-recipes" element={<SoupRecipes />} />

          {/* Cycle 132 — gardening + outdoor */}
          <Route path="/tools/raised-bed-guide" element={<RaisedBedGuide />} />
          <Route path="/tools/container-gardening" element={<ContainerGardening />} />
          <Route path="/tools/birdfeeder-guide" element={<BirdfeederGuide />} />
          <Route path="/tools/butterfly-garden" element={<ButterflyGarden />} />
          <Route path="/tools/indoor-plants-low-maintenance" element={<IndoorPlantsLowMaintenance />} />

          {/* Cycle 133 — intergenerational */}
          <Route path="/tools/teach-grandkids-tech" element={<TeachGrandkidsTech />} />
          <Route path="/tools/digital-saving-plans" element={<DigitalSavingPlans />} />
          <Route path="/tools/grandparent-budget-talks" element={<GrandparentBudgetTalks />} />
          <Route path="/tools/financial-literacy-kids" element={<FinancialLiteracyKids />} />
          <Route path="/tools/kids-coding-apps" element={<KidsCodingApps />} />

          {/* Cycle 134 — tech repair + maintenance */}
          <Route path="/tools/toner-cartridge-refill" element={<TonerCartridgeRefill />} />
          <Route path="/tools/hard-drive-backup" element={<HardDriveBackup />} />
          <Route path="/tools/screen-cleaner" element={<ScreenCleaner />} />
          <Route path="/tools/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/tools/old-phone-repurpose" element={<OldPhoneRepurpose />} />

          {/* Cycle 135 — media literacy */}
          <Route path="/tools/news-app-compare" element={<NewsAppCompare />} />
          <Route path="/tools/fact-checking-tools" element={<FactCheckingTools />} />
          <Route path="/tools/misinfo-spotting" element={<MisinfoSpotting />} />
          <Route path="/tools/newsletter-picks" element={<NewsletterPicks />} />
          <Route path="/tools/media-literacy-seniors" element={<MediaLiteracySeniors />} />

          {/* Cycle 136 — memory + cognitive */}
          <Route path="/tools/memory-app-training" element={<MemoryAppTraining />} />
          <Route path="/tools/to-do-list-seniors" element={<ToDoListSeniors />} />
          <Route path="/tools/calendar-reminders-apps" element={<CalendarRemindersApps />} />
          <Route path="/tools/sudoku-apps" element={<SudokuApps />} />
          <Route path="/tools/math-challenge-apps" element={<MathChallengeApps />} />
          <Route path="/tools/texting-etiquette" element={<TextingEtiquette />} />
          <Route path="/tools/group-chat-tips" element={<GroupChatTips />} />
          <Route path="/tools/snail-mail-revival" element={<SnailMailRevival />} />
          <Route path="/tools/holiday-card-setup" element={<HolidayCardSetup />} />
          <Route path="/tools/shutterfly-for-seniors" element={<ShutterflyForSeniors />} />
          <Route path="/tools/paperless-post-invitations" element={<PaperlessPostInvitations />} />
          <Route path="/tools/minted-holiday-cards-review" element={<MintedHolidayCardsReview />} />
          <Route path="/tools/costco-photo-center" element={<CostcoPhotoCenter />} />
          <Route path="/tools/mail-merge-100-cards" element={<MailMerge100Cards />} />
          <Route path="/tools/chain-email-dont-share" element={<ChainEmailDontShare />} />
          <Route path="/tools/fall-prevention-guide" element={<FallPreventionGuide />} />
          <Route path="/tools/posture-check-apps" element={<PostureCheckApps />} />
          <Route path="/tools/grip-strength-tools" element={<GripStrengthTools />} />
          <Route path="/tools/stair-safety-checklist" element={<StairSafetyChecklist />} />
          <Route path="/tools/cane-walker-picker" element={<CaneWalkerPicker />} />
          <Route path="/tools/protein-for-seniors" element={<ProteinForSeniors />} />
          <Route path="/tools/salt-reduction-tips" element={<SaltReductionTips />} />
          <Route path="/tools/sugar-reduction-guide" element={<SugarReductionGuide />} />
          <Route path="/tools/anti-inflammatory-eating" element={<AntiInflammatoryEating />} />
          <Route path="/tools/senior-smoothie-recipes" element={<SeniorSmoothieRecipes />} />
          <Route path="/tools/insomnia-senior-guide" element={<InsomniaSeniorGuide />} />
          <Route path="/tools/melatonin-safety-guide" element={<MelatoninSafetyGuide />} />
          <Route path="/tools/cpap-help-seniors" element={<CPAPHelpSeniors />} />
          <Route path="/tools/mattress-pillow-picker" element={<MattressPillowPicker />} />
          <Route path="/tools/white-noise-guide" element={<WhiteNoiseGuide />} />
          <Route path="/tools/earwax-removal-guide" element={<EarwaxRemovalGuide />} />
          <Route path="/tools/denture-care-guide" element={<DentureCareGuide />} />
          <Route path="/tools/foot-care-seniors" element={<FootCareSeniors />} />
          <Route path="/tools/skin-care-after-65" element={<SkinCareAfter65 />} />
          <Route path="/tools/hair-thinning-options" element={<HairThinningOptions />} />
          <Route path="/tools/loneliness-relief-guide" element={<LonelinessReliefGuide />} />
          <Route path="/tools/senior-mentorship-guide" element={<SeniorMentorshipGuide />} />
          <Route path="/tools/dating-after-60-guide" element={<DatingAfter60Guide />} />
          <Route path="/tools/our-time-review-seniors" element={<OurTimeReviewSeniors />} />
          <Route path="/tools/silver-singles-review" element={<SilverSinglesReview />} />
          <Route path="/tools/romance-scam-spotting-for-60-plus" element={<RomanceScamSpottingFor60Plus />} />
          <Route path="/tools/senior-widowed-dating" element={<SeniorWidowedDating />} />
          <Route path="/tools/stitch-app-for-50-plus" element={<StitchAppFor50Plus />} />
          <Route path="/tools/senior-roommate-matching" element={<SeniorRoommateMatching />} />
          <Route path="/tools/join-a-senior-club" element={<JoinASeniorClub />} />
          <Route path="/tools/snowbird-setup" element={<SnowbirdSetup />} />
          <Route path="/tools/rv-travel-seniors" element={<RVTravelSeniors />} />
          <Route path="/tools/rv-trip-wizard-guide" element={<RVTripWizardGuide />} />
          <Route path="/tools/campendium-allstays-apps" element={<CampendiumAllStaysApps />} />
          <Route path="/tools/starlink-rv-internet" element={<StarlinkRVInternet />} />
          <Route path="/tools/rv-maintenance-apps-check" element={<RVMaintenanceAppsCheck />} />
          <Route path="/tools/senior-rv-community" element={<SeniorRVCommunity />} />
          <Route path="/tools/airport-wheelchair-help" element={<AirportWheelchairHelp />} />
          <Route path="/tools/jet-lag-seniors" element={<JetLagSeniors />} />
          <Route path="/tools/packing-checklist-seniors" element={<PackingChecklistSeniors />} />
          <Route path="/tools/garage-sale-seniors" element={<GarageSaleSeniors />} />
          <Route path="/tools/senior-relocation-services" element={<SeniorRelocationServices />} />
          <Route path="/tools/hoarder-help-resources" element={<HoarderHelpResources />} />
          <Route path="/tools/memorabilia-preservation" element={<MemorabiliaPreservation />} />
          <Route path="/tools/attic-basement-clearout" element={<AtticBasementClearout />} />
          <Route path="/tools/burial-insurance-vs-life" element={<BurialInsuranceVsLife />} />
          <Route path="/tools/estimated-quarterly-taxes" element={<EstimatedQuarterlyTaxes />} />
          <Route path="/tools/medicare-scam-defense" element={<MedicareScamDefense />} />
          <Route path="/tools/sweepstakes-scam-guide" element={<SweepstakesScamGuide />} />
          <Route path="/tools/charity-scam-check" element={<CharityScamCheck />} />
          <Route path="/tools/smart-blinds-for-seniors" element={<SmartBlindsForSeniors />} />
          <Route path="/tools/robot-mop-guide" element={<RobotMopGuide />} />
          <Route path="/tools/air-purifier-picks" element={<AirPurifierPicks />} />
          <Route path="/tools/matter-standard-explained" element={<MatterStandardExplained />} />
          <Route path="/tools/smart-ceiling-fan-guide" element={<SmartCeilingFanGuide />} />
          <Route path="/tools/diabetes-management-apps" element={<DiabetesManagementApps />} />
          <Route path="/tools/high-blood-pressure-apps" element={<HighBloodPressureApps />} />
          <Route path="/tools/cholesterol-guide-seniors" element={<CholesterolGuideSeniors />} />
          <Route path="/tools/arthritis-management" element={<ArthritisManagement />} />
          <Route path="/tools/osteoporosis-guide" element={<OsteoporosisGuide />} />
          <Route path="/tools/alzheimers-early-stage" element={<AlzheimersEarlyStage />} />
          <Route path="/tools/dementia-wandering-prevention" element={<DementiaWanderingPrevention />} />
          <Route path="/tools/adult-day-care-guide" element={<AdultDayCareGuide />} />
          <Route path="/tools/in-home-care-agency-vet" element={<InHomeCareAgencyVet />} />
          <Route path="/tools/nursing-home-checklist" element={<NursingHomeChecklist />} />
          <Route path="/tools/best-pets-for-seniors" element={<BestPetsForSeniors />} />
          <Route path="/tools/pet-supply-delivery" element={<PetSupplyDelivery />} />
          <Route path="/tools/pet-insurance-for-seniors" element={<PetInsuranceForSeniors />} />
          <Route path="/tools/rover-pet-sitting-app" element={<RoverPetSittingApp />} />
          <Route path="/tools/chewy-pet-supplies-guide" element={<ChewyPetSuppliesGuide />} />
          <Route path="/tools/canva-for-seniors-guide" element={<CanvaForSeniorsGuide />} />
          <Route path="/tools/photo-book-printing-apps" element={<PhotoBookPrintingApps />} />
          <Route path="/tools/digital-scrapbooking-apps" element={<DigitalScrapbookingApps />} />
          <Route path="/tools/emotional-support-animal" element={<EmotionalSupportAnimal />} />
          <Route path="/tools/foster-pets-for-seniors" element={<FosterPetsForSeniors />} />
          <Route path="/tools/when-to-stop-driving" element={<WhenToStopDriving />} />
          <Route path="/tools/ev-for-seniors" element={<EVForSeniors />} />
          <Route path="/tools/car-rental-senior-tips" element={<CarRentalSeniorTips />} />
          <Route path="/tools/roadside-assistance-compare" element={<RoadsideAssistanceCompare />} />
          <Route path="/tools/automatic-emergency-braking" element={<AutomaticEmergencyBraking />} />
          <Route path="/tools/apple-pay-setup-seniors" element={<ApplePaySetupSeniors />} />
          <Route path="/tools/paypal-safely-for-seniors" element={<PayPalSafelyForSeniors />} />
          <Route path="/tools/online-brokerage-starter" element={<OnlineBrokerageStarter />} />
          <Route path="/tools/cd-treasury-high-yield" element={<CDTreasuryHighYield />} />
          <Route path="/tools/auto-bill-pay-setup" element={<AutoBillPaySetup />} />
          <Route path="/tools/libby-app-for-seniors" element={<LibbyAppForSeniors />} />
          <Route path="/tools/hoopla-for-seniors" element={<HooplaForSeniors />} />
          <Route path="/tools/sonos-setup-guide" element={<SonosSetupGuide />} />
          <Route path="/tools/broadway-hd-for-seniors" element={<BroadwayHDForSeniors />} />
          <Route path="/tools/free-audiobook-sources" element={<FreeAudiobookSources />} />
          <Route path="/tools/hummingbird-feeder-setup" element={<HummingbirdFeederSetup />} />
          <Route path="/tools/composting-for-seniors" element={<CompostingForSeniors />} />
          <Route path="/tools/tree-care-when-to-call-pro" element={<TreeCareWhenToCallPro />} />
          <Route path="/tools/leaf-blower-picker" element={<LeafBlowerPicker />} />
          <Route path="/tools/ice-melt-sidewalk-safety" element={<IceMeltSidewalkSafety />} />
          <Route path="/tools/amazon-prime-perks" element={<AmazonPrimePerks />} />
          <Route path="/tools/walmart-plus-review" element={<WalmartPlusReview />} />
          <Route path="/tools/cashback-app-picks" element={<CashbackAppPicks />} />
          <Route path="/tools/prime-day-black-friday" element={<PrimeDayBlackFriday />} />
          <Route path="/tools/grocery-loyalty-tricks" element={<GroceryLoyaltyTricks />} />
          <Route path="/tools/ancestry-dna-guide" element={<AncestryDNAGuide />} />
          <Route path="/tools/write-your-memoir" element={<WriteYourMemoir />} />
          <Route path="/tools/video-letters-grandkids" element={<VideoLettersGrandkids />} />
          <Route path="/tools/family-history-interview" element={<FamilyHistoryInterview />} />
          <Route path="/tools/ethical-will-template" element={<EthicalWillTemplate />} />
          <Route path="/tools/hvac-maintenance-guide" element={<HVACMaintenanceGuide />} />
          <Route path="/tools/water-heater-guide" element={<WaterHeaterGuide />} />
          <Route path="/tools/gutter-cleaning-options" element={<GutterCleaningOptions />} />
          <Route path="/tools/roof-inspection-guide" element={<RoofInspectionGuide />} />
          <Route path="/tools/contractor-vetting-guide" element={<ContractorVettingGuide />} />
          <Route path="/tools/senior-friendly-cookware" element={<SeniorFriendlyCookware />} />
          <Route path="/tools/toaster-oven-guide" element={<ToasterOvenGuide />} />
          <Route path="/tools/adaptive-kitchen-tools" element={<AdaptiveKitchenTools />} />
          <Route path="/tools/coffee-maker-for-seniors" element={<CoffeeMakerForSeniors />} />
          <Route path="/tools/induction-stove-explained" element={<InductionStoveExplained />} />
          <Route path="/tools/power-of-attorney-types" element={<PowerOfAttorneyTypes />} />
          <Route path="/tools/guardianship-vs-conservatorship" element={<GuardianshipVsConservatorship />} />
          <Route path="/tools/elder-law-attorney-finder" element={<ElderLawAttorneyFinder />} />
          <Route path="/tools/free-legal-aid-for-seniors" element={<FreeLegalAidForSeniors />} />
          <Route path="/tools/debt-collector-rights" element={<DebtCollectorRights />} />
          <Route path="/tools/duolingo-for-seniors" element={<DuolingoForSeniors />} />
          <Route path="/tools/babbel-vs-rosetta" element={<BabbelVsRosetta />} />
          <Route path="/tools/google-translate-mastery" element={<GoogleTranslateMastery />} />
          <Route path="/tools/free-college-for-seniors" element={<FreeCollegeForSeniors />} />
          <Route path="/tools/coursera-senior-audit" element={<CourseraSeniorAudit />} />
          <Route path="/tools/va-aid-and-attendance" element={<VAAidAndAttendance />} />
          <Route path="/tools/tricare-for-life" element={<TricareForLife />} />
          <Route path="/tools/national-cemetery-burial" element={<NationalCemeteryBurial />} />
          <Route path="/tools/va-home-loan-guide" element={<VAHomeLoanGuide />} />
          <Route path="/tools/agent-orange-benefits" element={<AgentOrangeBenefits />} />
          <Route path="/tools/meals-on-wheels-guide" element={<MealsOnWheelsGuide />} />
          <Route path="/tools/picture-this-plant-id" element={<PictureThisPlantID />} />
          <Route path="/tools/fishbrain-angler-apps" element={<FishbrainAnglerApps />} />
          <Route path="/tools/woodworking-plans-apps" element={<WoodworkingPlansApps />} />
          <Route path="/tools/backyard-birdfeeder-apps" element={<BackyardBirdfeederApps />} />
          <Route path="/tools/hunting-apps-for-seniors" element={<HuntingAppsForSeniors />} />
          <Route path="/tools/medicare-savings-programs" element={<MedicareSavingsPrograms />} />
          <Route path="/tools/medicare-extra-help" element={<MedicareExtraHelp />} />
          <Route path="/tools/liheap-guide" element={<LIHEAPGuide />} />
          <Route path="/tools/senior-property-tax-relief" element={<SeniorPropertyTaxRelief />} />
          <Route path="/tools/ai-write-email-help" element={<AIWriteEmailHelp />} />
          <Route path="/tools/ai-doctor-appointment-prep" element={<AIDoctorAppointmentPrep />} />
          <Route path="/tools/ai-translate-recipe" element={<AITranslateRecipe />} />
          <Route path="/tools/ai-scam-protection" element={<AIScamProtection />} />
          <Route path="/tools/claude-for-seniors" element={<ClaudeForSeniors />} />
          <Route path="/tools/oura-ring-for-seniors" element={<OuraRingForSeniors />} />
          <Route path="/tools/apple-health-deep-dive" element={<AppleHealthDeepDive />} />
          <Route path="/tools/cgm-for-non-diabetics" element={<CGMForNonDiabetics />} />
          <Route path="/tools/walking-program-fresh-start" element={<WalkingProgramFreshStart />} />
          <Route path="/tools/peloton-alternatives" element={<PelotonAlternatives />} />
          <Route path="/tools/apple-fitness-plus-review" element={<AppleFitnessPlusReview />} />
          <Route path="/tools/silver-sneakers-app-deep" element={<SilverSneakersAppDeep />} />
          <Route path="/tools/peloton-app-for-seniors" element={<PelotonAppForSeniors />} />
          <Route path="/tools/senior-walking-apps" element={<SeniorWalkingApps />} />
          <Route path="/tools/hasfit-free-youtube" element={<HASfitFreeYouTube />} />
          <Route path="/tools/hospital-compare-guide" element={<HospitalCompareGuide />} />
          <Route path="/tools/pre-surgery-checklist" element={<PreSurgeryChecklist />} />
          <Route path="/tools/er-vs-urgent-care" element={<ERVsUrgentCare />} />
          <Route path="/tools/medical-bill-negotiation" element={<MedicalBillNegotiation />} />
          <Route path="/tools/prescription-price-shop" element={<PrescriptionPriceShop />} />
          <Route path="/tools/etsy-selling-for-seniors" element={<EtsySellingForSeniors />} />
          <Route path="/tools/fiverr-freelance-seniors" element={<FiverrFreelanceSeniors />} />
          <Route path="/tools/become-a-tutor-retiree" element={<BecomeATutorRetiree />} />
          <Route path="/tools/pet-sitting-income" element={<PetSittingIncome />} />
          <Route path="/tools/consulting-second-act" element={<ConsultingSecondAct />} />
          <Route path="/tools/gratitude-practice-app" element={<GratitudePracticeApp />} />
          <Route path="/tools/stoic-philosophy-seniors" element={<StoicPhilosophySeniors />} />
          <Route path="/tools/retreat-centers-for-seniors" element={<RetreatCentersForSeniors />} />
          <Route path="/tools/intermittent-fasting-seniors" element={<IntermittentFastingSeniors />} />
          <Route path="/tools/minimalism-for-seniors" element={<MinimalismForSeniors />} />
          <Route path="/tools/grandpad-tablet" element={<GrandPadTablet />} />
          <Route path="/tools/raz-mobility-phones" element={<RazMobilityPhones />} />
          <Route path="/tools/consumer-cellular-plans" element={<ConsumerCellularPlans />} />
          <Route path="/tools/first-smartphone-starter" element={<FirstSmartphoneStarter />} />
          <Route path="/tools/tablet-for-seniors-basics" element={<TabletForSeniorsBasics />} />
          <Route path="/tools/vr-for-seniors" element={<VRForSeniors />} />
          <Route path="/tools/drones-for-seniors" element={<DronesForSeniors />} />
          <Route path="/tools/printable-hobby-3d" element={<PrintableHobby3D />} />
          <Route path="/tools/raspberry-pi-seniors" element={<RaspberryPiSeniors />} />
          <Route path="/tools/coding-hobby-for-seniors" element={<CodingHobbyForSeniors />} />
          <Route path="/tools/tai-chi-beginner" element={<TaiChiBeginner />} />
          <Route path="/tools/qigong-for-seniors" element={<QigongForSeniors />} />
          <Route path="/tools/senior-cycling-tips" element={<SeniorCyclingTips />} />
          <Route path="/tools/hiking-for-seniors" element={<HikingForSeniors />} />
          <Route path="/tools/aquatic-exercise-guide" element={<AquaticExerciseGuide />} />
          <Route path="/tools/chromebook-for-seniors" element={<ChromebookForSeniors />} />
          <Route path="/tools/mac-for-seniors" element={<MacForSeniors />} />
          <Route path="/tools/windows-basics-for-seniors" element={<WindowsBasicsForSeniors />} />
          <Route path="/tools/microsoft-o365-vs-google" element={<MicrosoftO365vsGoogle />} />
          <Route path="/tools/ipad-vs-laptop-for-seniors" element={<IPadVsLaptopForSeniors />} />
          <Route path="/tools/aerogarden-for-seniors" element={<AeroGardenForSeniors />} />
          <Route path="/tools/grow-light-setup" element={<GrowLightSetup />} />
          <Route path="/tools/vegetable-garden-seniors" element={<VegetableGardenSeniors />} />
          <Route path="/tools/herb-gardening-window" element={<HerbGardeningWindow />} />
          <Route path="/tools/rain-barrel-guide" element={<RainBarrelGuide />} />
          <Route path="/tools/watercolor-beginner-seniors" element={<WatercolorBeginnerSeniors />} />
          <Route path="/tools/ravelry-for-knitters" element={<RavelryForKnitters />} />
          <Route path="/tools/cricut-for-senior-crafters" element={<CricutForSeniorCrafters />} />
          <Route path="/tools/etsy-selling-for-seniors" element={<EtsySellingForSeniors />} />
          <Route path="/tools/quilt-design-software" element={<QuiltDesignSoftware />} />
          <Route path="/tools/senior-painting-classes" element={<SeniorPaintingClasses />} />
          <Route path="/tools/paint-by-numbers-adult" element={<PaintByNumbersAdult />} />
          <Route path="/tools/jewelry-making-seniors" element={<JewelryMakingSeniors />} />
          <Route path="/tools/pottery-classes-guide" element={<PotteryClassesGuide />} />
          <Route path="/tools/adult-coloring-books" element={<AdultColoringBooks />} />
          <Route path="/tools/stamp-collecting-for-seniors" element={<StampCollectingForSeniors />} />
          <Route path="/tools/antique-value-appraisal-apps" element={<AntiqueValueAppraisalApps />} />
          <Route path="/tools/comic-book-collecting" element={<ComicBookCollecting />} />
          <Route path="/tools/baseball-card-valuation" element={<BaseballCardValuation />} />
          <Route path="/tools/record-collecting-guide" element={<RecordCollectingGuide />} />
          <Route path="/tools/waze-for-seniors" element={<WazeForSeniors />} />
          <Route path="/tools/airbnb-for-senior-travelers" element={<AirbnbForSeniorTravelers />} />
          <Route path="/tools/roadtrip-planning-apps" element={<RoadtripPlanningApps />} />
          <Route path="/tools/accessible-travel-apps" element={<AccessibleTravelApps />} />
          <Route path="/tools/national-parks-trip" element={<NationalParksTrip />} />
          <Route path="/tools/netflix-for-seniors" element={<NetflixForSeniors />} />
          <Route path="/tools/youtube-for-seniors" element={<YouTubeForSeniors />} />
          <Route path="/tools/apple-tv-plus-guide" element={<AppleTVPlusGuide />} />
          <Route path="/tools/paramount-plus-review" element={<ParamountPlusReview />} />
          <Route path="/tools/streaming-device-compare" element={<StreamingDeviceCompare />} />
          <Route path="/tools/chess-for-seniors" element={<ChessForSeniors />} />
          <Route path="/tools/mahjong-app-picks" element={<MahjongAppPicks />} />
          <Route path="/tools/bridge-online-apps" element={<BridgeOnlineApps />} />
          <Route path="/tools/scrabble-alternatives" element={<ScrabbleAlternatives />} />
          <Route path="/tools/jigsaw-puzzle-strategy" element={<JigsawPuzzleStrategy />} />
          <Route path="/tools/two-factor-auth-guide" element={<TwoFactorAuthGuide />} />
          <Route path="/tools/yubikey-for-seniors" element={<YubiKeyForSeniors />} />
          <Route path="/tools/face-id-fingerprint-setup" element={<FaceIDFingerprintSetup />} />
          <Route path="/tools/apple-icloud-security" element={<AppleICloudSecurity />} />
          <Route path="/tools/passkey-explained" element={<PasskeyExplained />} />
          <Route path="/tools/my-social-security-account" element={<MySocialSecurityAccount />} />
          <Route path="/tools/irs-online-account" element={<IRSOnlineAccount />} />
          <Route path="/tools/medicare-dot-gov-tour" element={<MedicareDotGovTour />} />
          <Route path="/tools/benefits-check-up-tool" element={<BenefitsCheckUpTool />} />
          <Route path="/tools/usa-jobs-for-seniors" element={<USAJobsForSeniors />} />
          <Route path="/tools/alexa-skills-for-seniors" element={<AlexaSkillsForSeniors />} />
          <Route path="/tools/google-assistant-training" element={<GoogleAssistantTraining />} />
          <Route path="/tools/alexa-shopping-list" element={<AlexaShoppingList />} />
          <Route path="/tools/alexa-med-reminders" element={<AlexaMedReminders />} />
          <Route path="/tools/alexa-with-dementia" element={<AlexaWithDementia />} />
          <Route path="/tools/isp-negotiation-guide" element={<ISPNegotiationGuide />} />
          <Route path="/tools/fiber-vs-cable-internet" element={<FiberVsCableInternet />} />
          <Route path="/tools/starlink-for-rural" element={<StarlinkForRural />} />
          <Route path="/tools/t-mobile-home-internet" element={<TMobileHomeInternet />} />
          <Route path="/tools/acp-internet-subsidy" element={<ACPInternetSubsidy />} />
          <Route path="/tools/tinnitus-relief-apps" element={<TinnitusReliefApps />} />
          <Route path="/tools/asl-learning-seniors" element={<ASLLearningSeniors />} />
          <Route path="/tools/live-captions-apps" element={<LiveCaptionsApps />} />
          <Route path="/tools/cochlear-implant-basics" element={<CochlearImplantBasics />} />
          <Route path="/tools/assistive-listening-devices" element={<AssistiveListeningDevices />} />
          <Route path="/tools/garmin-for-seniors" element={<GarminForSeniors />} />
          <Route path="/tools/fitbit-vs-apple-watch" element={<FitbitVsAppleWatch />} />
          <Route path="/tools/smartwatch-health-features" element={<SmartwatchHealthFeatures />} />
          <Route path="/tools/apple-watch-fall-detection" element={<AppleWatchFallDetection />} />
          <Route path="/tools/ecg-on-apple-watch" element={<ECGOnAppleWatch />} />
          <Route path="/tools/smart-fridge-picks" element={<SmartFridgePicks />} />
          <Route path="/tools/bidet-senior-guide" element={<BidetSeniorGuide />} />
          <Route path="/tools/dehumidifier-for-seniors" element={<DehumidifierForSeniors />} />
          <Route path="/tools/microwave-senior-buy" element={<MicrowaveSeniorBuy />} />
          <Route path="/tools/washer-dryer-for-seniors" element={<WasherDryerForSeniors />} />
          <Route path="/tools/amtrak-for-seniors" element={<AmtrakForSeniors />} />
          <Route path="/tools/bus-travel-for-seniors" element={<BusTravelForSeniors />} />
          <Route path="/tools/river-cruise-guide" element={<RiverCruiseGuide />} />
          <Route path="/tools/train-around-the-world" element={<TrainAroundTheWorld />} />
          <Route path="/tools/tourist-attraction-passes" element={<TouristAttractionPasses />} />
          <Route path="/tools/word-for-seniors" element={<WordForSeniors />} />
          <Route path="/tools/excel-for-seniors" element={<ExcelForSeniors />} />
          <Route path="/tools/gmail-for-seniors" element={<GmailForSeniors />} />
          <Route path="/tools/outlook-for-seniors" element={<OutlookForSeniors />} />
          <Route path="/tools/browser-bookmarks-guide" element={<BrowserBookmarksGuide />} />
          <Route path="/tools/facebook-for-beginners" element={<FacebookForBeginners />} />
          <Route path="/tools/linkedin-for-retirees" element={<LinkedInForRetirees />} />
          <Route path="/tools/reddit-for-seniors" element={<RedditForSeniors />} />
          <Route path="/tools/tiktok-safety-guide" element={<TikTokSafetyGuide />} />
          <Route path="/tools/tiktok-for-senior-viewers" element={<TikTokForSeniorViewers />} />
          <Route path="/tools/instagram-reels-for-seniors" element={<InstagramReelsForSeniors />} />
          <Route path="/tools/senior-youtube-channels" element={<SeniorYouTubeChannels />} />
          <Route path="/tools/discogs-for-record-collectors" element={<DiscogsForRecordCollectors />} />
          <Route path="/tools/pinterest-for-senior-ideas" element={<PinterestForSeniorIdeas />} />
          <Route path="/tools/instagram-senior-guide" element={<InstagramSeniorGuide />} />
          <Route path="/tools/best-credit-cards-seniors" element={<BestCreditCardsSeniors />} />
          <Route path="/tools/credit-card-fraud-help" element={<CreditCardFraudHelp />} />
          <Route path="/tools/atm-safety-guide" element={<ATMSafetyGuide />} />
          <Route path="/tools/chase-sapphire-explain" element={<ChaseSapphireExplain />} />
          <Route path="/tools/amex-platinum-worth-it" element={<AmexPlatinumWorthIt />} />
          <Route path="/tools/colon-cancer-screening" element={<ColonCancerScreening />} />
          <Route path="/tools/mammogram-guide" element={<MammogramGuide />} />
          <Route path="/tools/prostate-screening-seniors" element={<ProstateScreeningSeniors />} />
          <Route path="/tools/annual-wellness-visit" element={<AnnualWellnessVisit />} />
          <Route path="/tools/senior-vaccines-guide" element={<SeniorVaccinesGuide />} />
          <Route path="/tools/senior-depression-guide" element={<SeniorDepressionGuide />} />
          <Route path="/tools/anxiety-tools-for-seniors" element={<AnxietyToolsForSeniors />} />
          <Route path="/tools/chronic-pain-management" element={<ChronicPainManagement />} />
          <Route path="/tools/grief-after-loss" element={<GriefAfterLoss />} />
          <Route path="/tools/crisis-line-guide" element={<CrisisLineGuide />} />
          <Route path="/tools/alcohol-for-seniors" element={<AlcoholForSeniors />} />
          <Route path="/tools/quit-smoking-seniors" element={<QuitSmokingSeniors />} />
          <Route path="/tools/marijuana-for-medical-seniors" element={<MarijuanaForMedicalSeniors />} />
          <Route path="/tools/benzodiazepine-safety" element={<BenzodiazepineSafety />} />
          <Route path="/tools/caffeine-for-seniors" element={<CaffeineForSeniors />} />
          <Route path="/tools/bladder-health-seniors" element={<BladderHealthSeniors />} />
          <Route path="/tools/thyroid-health-seniors" element={<ThyroidHealthSeniors />} />
          <Route path="/tools/copd-management" element={<COPDManagement />} />
          <Route path="/tools/kidney-health-guide" element={<KidneyHealthGuide />} />
          <Route path="/tools/acid-reflux-seniors" element={<AcidRefluxSeniors />} />
          <Route path="/tools/stroke-warning-signs" element={<StrokeWarningSigns />} />
          <Route path="/tools/heart-failure-basics" element={<HeartFailureBasics />} />
          <Route path="/tools/afib-information" element={<AFibInformation />} />
          <Route path="/tools/blood-thinner-guide" element={<BloodThinnerGuide />} />
          <Route path="/tools/dvt-prevention-seniors" element={<DVTPreventionSeniors />} />
          <Route path="/tools/green-burial-options" element={<GreenBurialOptions />} />
          <Route path="/tools/death-doula-guide" element={<DeathDoulaGuide />} />
          <Route path="/tools/polst-orders" element={<POLSTOrders />} />
          <Route path="/tools/hospice-myths" element={<HospiceMyths />} />
          <Route path="/tools/grief-for-family-after-death" element={<GriefForFamilyAfterDeath />} />
          <Route path="/tools/tire-pick-guide" element={<TirePickGuide />} />
          <Route path="/tools/oil-change-frequency" element={<OilChangeFrequency />} />
          <Route path="/tools/dashcam-picker" element={<DashcamPicker />} />
          <Route path="/tools/car-battery-replacement" element={<CarBatteryReplacement />} />
          <Route path="/tools/car-maintenance-schedule" element={<CarMaintenanceSchedule />} />
          <Route path="/tools/basic-tools-for-seniors" element={<BasicToolsForSeniors />} />
          <Route path="/tools/painting-tips-seniors" element={<PaintingTipsSeniors />} />
          <Route path="/tools/caulking-basics" element={<CaulkingBasics />} />
          <Route path="/tools/generator-test-routine" element={<GeneratorTestRoutine />} />
          <Route path="/tools/furnace-filter-swap" element={<FurnaceFilterSwap />} />
          <Route path="/tools/heat-pump-for-seniors" element={<HeatPumpForSeniors />} />
          <Route path="/tools/ev-home-charger-guide" element={<EVHomeChargerGuide />} />
          <Route path="/tools/tesla-powerwall-review" element={<TeslaPowerwallReview />} />
          <Route path="/tools/solar-tax-credits" element={<SolarTaxCredits />} />
          <Route path="/tools/energy-audit-free" element={<EnergyAuditFree />} />
          <Route path="/tools/tornado-prep-guide" element={<TornadoPrepGuide />} />
          <Route path="/tools/wildfire-prep-guide" element={<WildfirePrepGuide />} />
          <Route path="/tools/heatwave-safety" element={<HeatwaveSafety />} />
          <Route path="/tools/cold-snap-safety" element={<ColdSnapSafety />} />
          <Route path="/tools/fire-alarm-test" element={<FireAlarmTest />} />
          <Route path="/tools/adu-for-seniors" element={<ADUForSeniors />} />
          <Route path="/tools/active-adult-community" element={<ActiveAdultCommunity />} />
          <Route path="/tools/cohousing-for-seniors" element={<CohousingForSeniors />} />
          <Route path="/tools/assisted-living-choosing" element={<AssistedLivingChoosing />} />
          <Route path="/tools/staying-put-checklist" element={<StayingPutChecklist />} />
          <Route path="/tools/hotel-deal-for-seniors" element={<HotelDealForSeniors />} />
          <Route path="/tools/aaa-discount-list" element={<AAADiscountList />} />
          <Route path="/tools/aarp-membership-use" element={<AARPMembershipUse />} />
          <Route path="/tools/senior-airfare-deals" element={<SeniorAirfareDeals />} />
          <Route path="/tools/senior-rental-car-deals" element={<SeniorRentalCarDeals />} />
          <Route path="/tools/grandkid-visit-checklist" element={<GrandkidVisitChecklist />} />
          <Route path="/tools/babysitting-tips-seniors" element={<BabysittingTipsSeniors />} />
          <Route path="/tools/attend-grandchild-wedding" element={<AttendGrandchildWedding />} />
          <Route path="/tools/grandparent-legal-rights" element={<GrandparentLegalRights />} />
          <Route path="/tools/grandkid-summer-visits" element={<GrandkidSummerVisits />} />
          <Route path="/tools/best-books-for-seniors" element={<BestBooksForSeniors />} />
          <Route path="/tools/book-clubs-how-to-find" element={<BookClubsHowToFind />} />
          <Route path="/tools/best-podcasts-seniors" element={<BestPodcastsSeniors />} />
          <Route path="/tools/apple-podcasts-for-seniors" element={<ApplePodcastsForSeniors />} />
          <Route path="/tools/spotify-for-senior-listeners" element={<SpotifyForSeniorListeners />} />
          <Route path="/tools/audible-app-for-seniors" element={<AudibleAppForSeniors />} />
          <Route path="/tools/senior-radio-apps" element={<SeniorRadioApps />} />
          <Route path="/tools/pocket-casts-for-seniors" element={<PocketCastsForSeniors />} />
          <Route path="/tools/kindle-vs-paperbook-seniors" element={<KindleVsPaperbookSeniors />} />
          <Route path="/tools/audiobook-listen-walking" element={<AudiobookListenWalking />} />
          <Route path="/tools/senior-camping-guide" element={<SeniorCampingGuide />} />
          <Route path="/tools/kayaking-for-seniors" element={<KayakingForSeniors />} />
          <Route path="/tools/boating-for-seniors" element={<BoatingForSeniors />} />
          <Route path="/tools/birdwatching-deeper" element={<BirdwatchingDeeper />} />
          <Route path="/tools/outdoor-photography-tips" element={<OutdoorPhotographyTips />} />
          <Route path="/tools/wine-tasting-for-seniors" element={<WineTastingForSeniors />} />
          <Route path="/tools/cocktail-mixing-senior" element={<CocktailMixingSenior />} />
          <Route path="/tools/baking-for-seniors" element={<BakingForSeniors />} />
          <Route path="/tools/sourdough-for-seniors" element={<SourdoughForSeniors />} />
          <Route path="/tools/cookbook-picks-for-seniors" element={<CookbookPicksForSeniors />} />
          <Route path="/tools/piano-for-seniors" element={<PianoForSeniors />} />
          <Route path="/tools/ukulele-for-seniors" element={<UkuleleForSeniors />} />
          <Route path="/tools/ballroom-dancing-seniors" element={<BallroomDancingSeniors />} />
          <Route path="/tools/choir-for-seniors" element={<ChoirForSeniors />} />
          <Route path="/tools/music-therapy-apps" element={<MusicTherapyApps />} />
          <Route path="/tools/crochet-for-seniors" element={<CrochetForSeniors />} />
          <Route path="/tools/sewing-machine-basics" element={<SewingMachineBasics />} />
          <Route path="/tools/quilting-for-beginners" element={<QuiltingForBeginners />} />
          <Route path="/tools/embroidery-for-seniors" element={<EmbroideryForSeniors />} />
          <Route path="/tools/scrapbooking-digital" element={<ScrapbookingDigital />} />
          <Route path="/tools/christmas-shopping-seniors" element={<ChristmasShoppingSeniors />} />
          <Route path="/tools/thanksgiving-hosting-tech" element={<ThanksgivingHostingTech />} />
          <Route path="/tools/valentines-day-digital" element={<ValentinesDayDigital />} />
          <Route path="/tools/halloween-safety-seniors" element={<HalloweenSafetySeniors />} />
          <Route path="/tools/new-year-goals-apps" element={<NewYearGoalsApps />} />
          <Route path="/tools/dog-training-apps" element={<DogTrainingApps />} />
          <Route path="/tools/cat-care-apps" element={<CatCareApps />} />
          <Route path="/tools/pet-grooming-home" element={<PetGroomingHome />} />
          <Route path="/tools/aquarium-starter-senior" element={<AquariumStarterSenior />} />
          <Route path="/tools/pet-sitter-finder" element={<PetSitterFinder />} />
          <Route path="/tools/guitar-for-seniors" element={<GuitarForSeniors />} />
          <Route path="/tools/harmonica-for-seniors" element={<HarmonicaForSeniors />} />
          <Route path="/tools/violin-for-seniors" element={<ViolinForSeniors />} />
          <Route path="/tools/drums-for-seniors" element={<DrumsForSeniors />} />
          <Route path="/tools/singing-for-seniors" element={<SingingForSeniors />} />
          <Route path="/tools/classic-movie-picks" element={<ClassicMoviePicks />} />
          <Route path="/tools/family-movie-night" element={<FamilyMovieNight />} />
          <Route path="/tools/blog-starting-senior" element={<BlogStartingSenior />} />
          <Route path="/tools/poetry-apps-senior" element={<PoetryAppsSenior />} />
          <Route path="/tools/short-story-writing" element={<ShortStoryWriting />} />
          <Route path="/tools/windows-file-explorer-basics" element={<WindowsFileExplorerBasics />} />
          <Route path="/tools/mac-finder-basics" element={<MacFinderBasics />} />
          <Route path="/tools/cloud-folder-organization" element={<CloudFolderOrganization />} />
          <Route path="/tools/dark-mode-guide" element={<DarkModeGuide />} />
          <Route path="/tools/wallpaper-background-guide" element={<WallpaperBackgroundGuide />} />
          <Route path="/tools/checkbook-balancing-apps" element={<CheckbookBalancingApps />} />
          <Route path="/tools/mobile-deposit-guide" element={<MobileDepositGuide />} />
          <Route path="/tools/direct-deposit-setup" element={<DirectDepositSetup />} />
          <Route path="/tools/safe-deposit-box-guide" element={<SafeDepositBoxGuide />} />
          <Route path="/tools/emergency-fund-for-seniors" element={<EmergencyFundForSeniors />} />
          <Route path="/tools/silver-sneakers-guide" element={<SilverSneakersGuide />} />
          <Route path="/tools/senior-walking-shoes" element={<SeniorWalkingShoes />} />
          <Route path="/tools/pilates-for-seniors" element={<PilatesForSeniors />} />
          <Route path="/tools/swimming-for-seniors" element={<SwimmingForSeniors />} />
          <Route path="/tools/bocce-lawn-games" element={<BocceLawnGames />} />
          <Route path="/tools/vitamins-for-seniors" element={<VitaminsForSeniors />} />
          <Route path="/tools/supplement-safety" element={<SupplementSafety />} />
          <Route path="/tools/meal-prep-for-one" element={<MealPrepForOne />} />
          <Route path="/tools/high-fiber-recipes" element={<HighFiberRecipes />} />
          <Route path="/tools/omega-fish-oil-guide" element={<OmegaFishOilGuide />} />
          <Route path="/tools/car-buying-tips-seniors" element={<CarBuyingTipsSeniors />} />
          <Route path="/tools/auto-lease-vs-buy" element={<AutoLeaseVsBuy />} />
          <Route path="/tools/electric-cars-for-seniors" element={<ElectricCarsForSeniors />} />
          <Route path="/tools/car-trade-in-apps" element={<CarTradeInApps />} />
          <Route path="/tools/auto-extended-warranty" element={<AutoExtendedWarranty />} />
          <Route path="/tools/ssn-compromise-steps" element={<SSNCompromiseSteps />} />
          <Route path="/tools/social-media-fake-accounts" element={<SocialMediaFakeAccounts />} />
          <Route path="/tools/computer-virus-removal" element={<ComputerVirusRemoval />} />
          <Route path="/tools/email-hacked-recovery" element={<EmailHackedRecovery />} />
          <Route path="/tools/whatsapp-scam-spotting" element={<WhatsAppScamSpotting />} />
          <Route path="/tools/senior-makeup-tips-apps" element={<SeniorMakeupTipsApps />} />
          <Route path="/tools/hair-care-for-seniors" element={<HairCareForSeniors />} />
          <Route path="/tools/nail-care-for-seniors" element={<NailCareForSeniors />} />
          <Route path="/tools/shaving-for-seniors" element={<ShavingForSeniors />} />
          <Route path="/tools/perfume-cologne-picks" element={<PerfumeColognePicks />} />
          <Route path="/tools/plumbing-basics-for-seniors" element={<PlumbingBasicsForSeniors />} />
          <Route path="/tools/electrical-basics-for-seniors" element={<ElectricalBasicsForSeniors />} />
          <Route path="/tools/air-filter-changing-guide" element={<AirFilterChangingGuide />} />
          <Route path="/tools/seasonal-home-checklist" element={<SeasonalHomeChecklist />} />
          <Route path="/tools/appliance-lifespan-guide" element={<ApplianceLifespanGuide />} />
          <Route path="/tools/phone-case-screen-protector" element={<PhoneCaseScreenProtector />} />
          <Route path="/tools/switch-cell-carrier" element={<SwitchCellCarrier />} />
          <Route path="/tools/prepaid-vs-contract-phones" element={<PrepaidVsContractPhones />} />
          <Route path="/tools/ringtone-customization" element={<RingtoneCustomization />} />
          <Route path="/tools/phone-tracking-family" element={<PhoneTrackingFamily />} />
          <Route path="/tools/ai-memory-help-for-seniors" element={<AIMemoryHelpForSeniors />} />
          <Route path="/tools/ai-shopping-assistant" element={<AIShoppingAssistant />} />
          <Route path="/tools/ai-health-questions" element={<AIHealthQuestions />} />
          <Route path="/tools/ai-finance-advice" element={<AIFinanceAdvice />} />
          <Route path="/tools/ai-legal-questions" element={<AILegalQuestions />} />
          <Route path="/tools/google-sheets-basics" element={<GoogleSheetsBasics />} />
          <Route path="/tools/google-slides-basics" element={<GoogleSlidesBasics />} />
          <Route path="/tools/microsoft-teams-for-seniors" element={<MicrosoftTeamsForSeniors />} />
          <Route path="/tools/outlook-basics-seniors" element={<OutlookBasicsSeniors />} />
          <Route path="/tools/onedrive-basics" element={<OneDriveBasics />} />
          <Route path="/tools/apple-music-for-seniors" element={<AppleMusicForSeniors />} />
          <Route path="/tools/amazon-music-for-seniors" element={<AmazonMusicForSeniors />} />
          <Route path="/tools/pandora-for-seniors" element={<PandoraForSeniors />} />
          <Route path="/tools/simply-piano-for-seniors" element={<SimplyPianoForSeniors />} />
          <Route path="/tools/yousician-guitar-app" element={<YousicianGuitarApp />} />
          <Route path="/tools/metronome-tuner-apps" element={<MetronomeTunerApps />} />
          <Route path="/tools/smule-karaoke-app" element={<SmuleKaraokeApp />} />
          <Route path="/tools/sheet-music-apps-digital" element={<SheetMusicAppsDigital />} />
          <Route path="/tools/youtube-music-for-seniors" element={<YouTubeMusicForSeniors />} />
          <Route path="/tools/tunein-radio-apps" element={<TuneInRadioApps />} />
          <Route path="/tools/pinterest-for-seniors" element={<PinterestForSeniors />} />
          <Route path="/tools/threads-app-guide" element={<ThreadsAppGuide />} />
          <Route path="/tools/bluesky-explained" element={<BlueskyExplained />} />
          <Route path="/tools/facebook-groups-for-seniors" element={<FacebookGroupsForSeniors />} />
          <Route path="/tools/social-media-privacy-audit" element={<SocialMediaPrivacyAudit />} />
          <Route path="/tools/disney-plus-for-seniors" element={<DisneyPlusForSeniors />} />
          <Route path="/tools/hulu-for-seniors" element={<HuluForSeniors />} />
          <Route path="/tools/peacock-streaming-guide" element={<PeacockStreamingGuide />} />
          <Route path="/tools/max-hbo-streaming-guide" element={<MaxHBOStreamingGuide />} />
          <Route path="/tools/tubi-pluto-free-streaming" element={<TubiPlutoFreeStreaming />} />
          <Route path="/tools/simplisafe-review" element={<SimpliSafeReview />} />
          <Route path="/tools/ring-alarm-system-guide" element={<RingAlarmSystemGuide />} />
          <Route path="/tools/home-security-system-compare" element={<HomeSecuritySystemCompare />} />
          <Route path="/tools/motion-sensor-lights-guide" element={<MotionSensorLightsGuide />} />
          <Route path="/tools/home-security-checklist" element={<HomeSecurityChecklist />} />
          <Route path="/tools/tripit-app-guide" element={<TripItAppGuide />} />
          <Route path="/tools/pocket-wifi-abroad" element={<PocketWifiAbroad />} />
          <Route path="/tools/vrbo-airbnb-compare-seniors" element={<VRBOAirbnbCompareSeniors />} />
          <Route path="/tools/solo-senior-travel-tips" element={<SoloSeniorTravelTips />} />
          <Route path="/tools/currency-exchange-for-seniors" element={<CurrencyExchangeForSeniors />} />
          <Route path="/tools/goodrx-drug-savings" element={<GoodRxDrugSavings />} />
          <Route path="/tools/medisafe-pill-reminder" element={<MedisafePillReminder />} />
          <Route path="/tools/blood-pressure-tracking-apps" element={<BloodPressureTrackingApps />} />
          <Route path="/tools/apple-health-app-tutorial" element={<AppleHealthAppTutorial />} />
          <Route path="/tools/smart-scale-for-seniors" element={<SmartScaleForSeniors />} />
          <Route path="/tools/lumosity-brainhq-compare" element={<LumosityBrainHQCompare />} />
          <Route path="/tools/chair-exercises-for-seniors" element={<ChairExercisesForSeniors />} />
          <Route path="/tools/balance-exercises-seniors" element={<BalanceExercisesSeniors />} />
          <Route path="/tools/words-with-friends-seniors" element={<WordsWithFriendsSeniors />} />
          <Route path="/tools/aarp-tax-aide-guide" element={<AARPTaxAideGuide />} />
          <Route path="/tools/turbotax-for-seniors" element={<TurboTaxForSeniors />} />
          <Route path="/tools/hr-block-for-seniors" element={<HRBlockForSeniors />} />
          <Route path="/tools/quicken-for-retirees" element={<QuickenForRetirees />} />
          <Route path="/tools/roth-conversion-calculators" element={<RothConversionCalculators />} />
          <Route path="/tools/irs-gov-online-account" element={<IRSGovOnlineAccount />} />
          <Route path="/tools/property-tax-exemption-seniors" element={<PropertyTaxExemptionSeniors />} />
          <Route path="/tools/social-security-claiming-strategy" element={<SocialSecurityClaimingStrategy />} />
          <Route path="/tools/senior-discount-finder" element={<SeniorDiscountFinder />} />

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
          <Route path="/tools/chase-bank-app-for-seniors" element={<ChaseBankAppForSeniors />} />
          <Route path="/tools/bank-of-america-app-guide" element={<BankOfAmericaAppGuide />} />
          <Route path="/tools/credit-card-app-management" element={<CreditCardAppManagement />} />
          <Route path="/tools/credit-score-monitor-apps" element={<CreditScoreMonitorApps />} />
          <Route path="/tools/usaa-for-veteran-seniors" element={<UsaaForVeteranSeniors />} />
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
          <Route path="/tools/otter-ai-transcription" element={<OtterAITranscription />} />
          <Route path="/tools/voice-typing-phone-tutorial" element={<VoiceTypingPhoneTutorial />} />
          <Route path="/tools/siri-commands-cheat-sheet" element={<SiriCommandsCheatSheet />} />
          <Route path="/tools/google-assistant-senior-commands" element={<GoogleAssistantSeniorCommands />} />
          <Route path="/tools/stylus-for-senior-tablets" element={<StylusForSeniorTablets />} />
          <Route path="/tools/apple-watch-accessibility" element={<AppleWatchAccessibility />} />
          <Route path="/tools/phone-stylus-for-arthritis" element={<PhoneStylusForArthritis />} />
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
          <Route path="/tools/e-reader-comparison-guide" element={<EReaderComparisonGuide />} />
          <Route path="/tools/kindle-unlimited-scribd-review" element={<KindleUnlimitedScribdReview />} />
          <Route path="/tools/gun-safe-biometric" element={<GunSafeBiometric />} />
          <Route path="/tools/power-bank-senior-picks" element={<PowerBankSeniorPicks />} />
          <Route path="/tools/senior-job-search-platforms" element={<SeniorJobSearchPlatforms />} />
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
          <Route path="/tools/nytimes-app-for-seniors" element={<NYTimesAppForSeniors />} />
          <Route path="/tools/apple-news-plus-review" element={<AppleNewsPlusReview />} />
          <Route path="/tools/washington-post-app-guide" element={<WashingtonPostAppGuide />} />
          <Route path="/tools/npr-podcasts-for-seniors" element={<NPRPodcastsForSeniors />} />
          <Route path="/tools/substack-for-seniors" element={<SubstackForSeniors />} />
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
