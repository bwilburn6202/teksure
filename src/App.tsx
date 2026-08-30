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
import ToolRoute from "@/components/ToolRoute";
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
const Pricing                = lazy(() => import("./pages/Pricing"));
const Terms                  = lazy(() => import("./pages/Terms"));
const RefundPolicy           = lazy(() => import("./pages/RefundPolicy"));
const Roadmap                = lazy(() => import("./pages/Roadmap"));
const SearchResults          = lazy(() => import("./pages/SearchResults"));
const Tools                  = lazy(() => import("./pages/Tools"));
const AllToolsDirectory      = lazy(() => import("./pages/AllToolsDirectory"));
const ScamAlerts             = lazy(() => import("./pages/ScamAlerts"));
const Tips                   = lazy(() => import("./pages/Tips"));
const Setup                  = lazy(() => import("./pages/Setup"));
const Blog                   = lazy(() => import("./pages/Blog"));
const Webinars               = lazy(() => import("./pages/Webinars"));
const Ambassadors            = lazy(() => import("./pages/community/Ambassadors"));
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
const TechGiftGuide          = lazy(() => import("./pages/TechGiftGuide"));
const TechAnxiety            = lazy(() => import("./pages/TechAnxiety"));
const LocalHelp              = lazy(() => import("./pages/LocalHelp"));
const Certificate            = lazy(() => import("./pages/Certificate"));
const AiTutor                = lazy(() => import("./pages/AiTutor"));
const ProgressReport         = lazy(() => import("./pages/ProgressReport"));
const FamilySharing          = lazy(() => import("./pages/FamilySharing"));
const Caregiver              = lazy(() => import("./pages/Caregiver"));
const Notifications          = lazy(() => import("./pages/Notifications"));
const Onboarding             = lazy(() => import("./pages/Onboarding"));
const Explore                = lazy(() => import("./pages/Explore"));
const Articles               = lazy(() => import("./pages/Articles"));
const AggregatedArticlePage  = lazy(() => import("./pages/AggregatedArticlePage"));
const Sources                = lazy(() => import("./pages/Sources"));
const Videos                 = lazy(() => import("./pages/Videos"));
const LlmKnowledgeBase       = lazy(() => import("./pages/LlmKnowledgeBase"));

const EmergencyHelp          = lazy(() => import("./pages/EmergencyHelp"));
const KeyboardNavigation     = lazy(() => import("./pages/KeyboardNavigation"));
const Privacy                = lazy(() => import("./pages/Privacy"));
const Changelog              = lazy(() => import("./pages/Changelog"));
const WhatsNew               = lazy(() => import("./pages/WhatsNew"));
const MemoryDashboard        = lazy(() => import("./pages/MemoryDashboard"));
const FAQ                    = lazy(() => import("./pages/FAQ"));

// ── New tools (April 2026 expansion) ──
const SubscriptionCostAggregator = lazy(() => import("./pages/calculators/SubscriptionCostAggregator"));
const PhoneBillDecoder       = lazy(() => import("./pages/calculators/PhoneBillDecoder"));
const InternetPlanCalculator = lazy(() => import("./pages/calculators/InternetPlanCalculator"));

// ── OSINT.link-inspired tools ──

// ── Tools expansion (April 16 2026) ──
const WeeklyTips             = lazy(() => import("./pages/WeeklyTips"));

// ── Cycle 1 (April 29 2026) — net-new tools ──

// ── Cycle 2 (April 29 2026) — net-new tools ──

// ── Cycle 3 (April 29 2026) — net-new tools ──

// ── Cycle 4 (April 29 2026) — net-new tools ──

// ── Cycle 5 (April 29 2026) — health/accessibility ──

// ── Cycle 6 (April 29 2026) — money & daily life ──

// ── Cycle 7 (April 29 2026) — communication & SOS ──

// ── Cycle 8 (April 29 2026) — caregiver / legacy / language ──

// ── Cycle 9 (April 29 2026) — entertainment & home network ──

// ── Cycle 10 (April 29 2026) — AI / photos / docs / govt ──

// ── Cycle 11 (April 29 2026) — scams + tablet + basics ──

// ── Cycle 12 (April 29 2026) — cleanup, delivery, video calls ──

// ── Cycle 13 (April 29 2026) — calendar / news / wellness / weather / pets ──

// ── Cycle 14 (April 29 2026) — travel / maps / dining / discounts / Prime ──

// ── Cycle 15 (April 29 2026) — finance & retirement ──

// ── Cycle 16 (April 29 2026) — music/photos/scan/audio/home screen ──

// ── Cycle 17 (April 29 2026) — nature/cooking/watch ──

// ── Cycle 18 (April 29 2026) — comms / smart home / health ──

// ── Cycle 19 (April 29 2026) — brain/genealogy/frame/sound/volunteer ──

// ── Cycle 20 (April 29 2026) — cloud/passwords/speed/browser/learning ──

// ── Cycle 21 (April 29 2026) — podcasts/outdoors/repair ──

// ── Cycle 22 (April 29 2026) — scams/contractors/cell/handyman/jobs ──

// ── Cycle 23 (April 29 2026) — privacy/banking/travel/brokerage/screen ──

// ── Cycle 24 (April 29 2026) — backup/photo-org/medical/bills/journal ──

// ── Cycle 25 (April 29 2026) — caregiving / accessibility / health ──

// ── Cycle 26 (April 29 2026) — kitchen / inventory / privacy / sell / utilities ──

// ── Cycle 27 (April 29 2026) — books/reading/ergonomics/notes ──

// ── Cycle 28 (April 29 2026) — driving/sleep/power/disaster/grandkids ──

// ── Cycle 29 (April 29 2026) — passkeys/antivirus/recovery/shortcuts/tremors ──

// ── Cycle 30 (April 29 2026) — car/EV/used cars/flights/window mgmt ──

// ── Cycle 31 (April 29 2026) — diet/meds/exercise/fitness/cognitive ──

// ── Cycle 32 (April 29 2026) — homework/tutoring/creative/cameras/docs ──

// ── Cycle 33 (April 29 2026) — vaccines/drugs/symptoms/doctors ──

// ── Cycle 34 (April 29 2026) — wills/directives/savings/529/notary ──

// ── Cycle 35 (April 29 2026) — Social Security/Medicare/LTC/reverse mortgage/pension ──

// ── Cycle 36 (April 29 2026) — funeral/hospice/therapy/widow/downsize ──

// ── Cycle 37 (April 29 2026) — smart display/robot vac/health tests/scale/zoom host ──

// ── Cycle 38 (April 29 2026) — accounts/privacy/search/VA/SSDI ──

// ── Cycle 39 (April 29 2026) — VPN/encryption/cyber/remote ──

// ── Cycle 40 (April 29 2026) — taxes/SNAP/eldercare/lifeline/HSA-FSA ──

// ── Cycle 41 (April 29 2026) — laptop/phone/grandkid safety/apps/console ──

// ── Cycle 42 (April 29 2026) — AI/resume/smart home ──

// ── Cycle 43 (April 29 2026) — printer/fax/cam/weather/walk ──

// ── Cycle 44 (April 29 2026) — car/mileage/subs/dispute/refi ──

// ── Cycle 45 (April 29 2026) — retirement accounts/withdrawal/bonds/index ──

// ── Cycle 46 (April 29 2026) — passport/disposal/erase/photos/in-person ──

// ── Cycle 47 (April 29 2026) — dental/vision/deepfake/genealogy/citizen ──

// ── Cycle 48 (April 29 2026) — donate/mail/311/energy/solar ──

// ── Cycle 49 (April 29 2026) — air/smoke/water/vacuum/recalls ──

// ── Cycle 50 (April 29 2026) — TV/speakers/vinyl/sports/golf ──

// ── Cycle 51 (April 29 2026) — fishing/pickleball/games/wine/cocktail ──

// ── Cycle 52 (April 29 2026) — security/thermostat/lock/leak/insurance ──

// ── Cycle 53 (April 29 2026) — networking ──

// ── Cycle 54 (April 29 2026) — warehouse/advisor/annuity/trust/loyalty ──

// ── Cycle 55 (April 29 2026) — faith / disease support ──

// ── Cycle 56 (April 29 2026) — DIY/garage/lawn/mower/snow ──

// ── Cycle 57 (April 29 2026) — pet/birds/chickens/sales ──

// ── Cycle 58 (April 29 2026) — pencil/email/pipes/generator/grill ──

// ── Cycle 59 (April 29 2026) — credit/HELOC/airbnb/windfall ──

// ── Cycle 60 (April 29 2026) — appraisers/auctions/coins/cards/collectibles ──

// ── Cycle 61 (April 29 2026) — troubleshooting ──

// ── Cycle 62 (April 29 2026) — pharmacy/bundles/grocery/Apple ──

// ── Cycle 63 (April 29 2026) — read-aloud / wifi / relay / pet / coupons ──

// ── Cycle 64 (April 29 2026) — utility savings + smart-home + food ──

// ── Cycle 65 (April 29 2026) — travel + legacy ──

// ── Cycle 66 (April 29 2026) — health tech ──

// ── Cycle 67 (April 29 2026) — scam defenses ──

// ── Cycle 68 (April 29 2026) — phone basics ──

// ── Cycle 69 (April 29 2026) — passwords + accounts ──

// ── Cycle 70 (April 29 2026) — entertainment + connection ──

// ── Cycle 71 (April 29 2026) — driving + delivery ──

// ── Cycle 72 (April 29 2026) — kitchen + home tech ──

// ── Cycle 73 (April 29 2026) — money + banking ──

// ── Cycle 74 (April 29 2026) — smart speakers + AI voice ──

// ── Cycle 75 (April 29 2026) — photos + memories ──

// ── Cycle 76 (April 29 2026) — shopping + buying ──

// ── Cycle 77 (April 29 2026) — travel + cruise tech ──

// ── Cycle 78 (April 29 2026) — estate + insurance ──

// ── Cycle 79 (April 29 2026) — hobbies + crafts ──

// ── Cycle 80 (April 29 2026) — caregivers + senior care ──

// ── Cycle 81 (April 29 2026) — tax + paperwork ──

// ── Cycle 82 (April 29 2026) — accessibility ──

// ── Cycle 83 (April 29 2026) — home safety ──

// ── Cycle 84 (April 29 2026) — weather + outdoor ──

// ── Cycle 85 (April 29 2026) — civic + community ──

// ── Cycle 86 (April 29 2026) — pet tech ──

// ── Cycle 87 (April 29 2026) — kids/grandkids tech ──

// ── Cycle 88 (April 29 2026) — senior fitness ──

// ── Cycle 89 (April 29 2026) — clinical tech ──

// ── Cycle 90 (April 29 2026) — faith + community ──

// ── Cycle 91 (April 29 2026) — phone carrier ──

// ── Cycle 92 (April 29 2026) — TV + entertainment ──

// ── Cycle 93 (April 29 2026) — DIY + handyman ──

// ── Cycle 94 (April 29 2026) — nutrition + meals ──

// ── Cycle 95 (April 29 2026) — senior dating ──

// ── Cycle 96 (April 29 2026) — language + learning ──

// ── Cycle 97 (April 29 2026) — medication safety ──

// ── Cycle 98 (April 29 2026) — kitchen tech ──

// ── Cycle 99 (April 29 2026) — home gym + fitness gear ──

// ── Cycle 100 (April 29 2026) — digital wellness ──

// ── Cycle 101 (April 29 2026) — senior travel + adventure ──

// ── Cycle 102 (April 29 2026) — senior workforce ──

// ── Cycle 103 (April 29 2026) — crime + safety ──

// ── Cycle 104 (April 29 2026) — grandparent-grandkid tech ──

// ── Cycle 105 (April 29 2026) — medical visit advocacy ──

// ── Cycle 106 (April 29 2026) — financial well-being ──

// ── Cycle 107 (April 29 2026) — Spanish-speaking seniors ──

// ── Cycle 108 (April 29 2026) — smart home ──

// ── Cycle 109 (April 29 2026) — senior phones + simple devices ──

// ── Cycle 110 (April 29 2026) — holiday + special occasions ──

// ── Cycle 111 (April 29 2026) — post-retirement living ──

// ── Cycle 112 (April 29 2026) — dental + vision + hearing ──

// ── Cycle 113 (April 29 2026) — senior auto + driving ──

// ── Cycle 114 (April 29 2026) — senior shopping smart ──

// ── Cycle 115 (April 29 2026) — senior music + audio ──

// ── Cycle 116 (April 29 2026) — senior parenting + family ──

// ── Cycle 117 (April 29 2026) — privacy + data ──

// ── Cycle 118 (April 29 2026) — AI for seniors ──

// ── Cycle 119 (April 29 2026) — recovery + rehab ──

// ── Cycle 120 (April 29 2026) — wellness milestone ──

// ── Cycle 121 (April 29 2026) — internet basics ──

// ── Cycle 122 (April 29 2026) — tax + Medicare deeper ──

// ── Cycle 123 (April 29 2026) — civic + service ──

// ── Cycle 124 (April 29 2026) — Office productivity ──

// ── Cycle 125 (April 29 2026) — government online services ──

// ── Cycle 126 (April 29 2026) — phone tricks ──

// ── Cycle 127 (April 29 2026) — senior insurance ──

// ── Cycle 128 (April 29 2026) — community + clubs ──

// ── Cycle 129 (April 29 2026) — home cleanup + organization ──

// ── Cycle 130 (April 29 2026) — emergency preparedness ──

// ── Cycle 131 (April 29 2026) — senior cooking ──

// ── Cycle 132 (April 29 2026) — gardening + outdoor ──

// ── Cycle 133 (April 29 2026) — intergenerational ──

// ── Cycle 134 (April 29 2026) — tech repair + maintenance ──

// ── Cycle 135 (April 29 2026) — media literacy ──

// ── Cycle 136 (April 29 2026) — memory + cognitive ──

// ── Cycle 137 (April 29 2026) — friend communication ──

// ── Cycle 138 (April 29 2026) — fall prevention + mobility ──

// ── Cycle 139 (April 29 2026) — senior nutrition ──

// ── Cycle 140 (April 29 2026) — sleep + rest ──

// ── Cycle 141 (April 29 2026) — senior personal care ──

// ── Cycle 142 (April 29 2026) — social + emotional ──

// ── Cycle 143 (April 29 2026) — senior travel mechanics ──

// ── Cycle 144 (April 29 2026) — downsizing + decluttering ──

// ── Cycle 145 (April 29 2026) — senior finance + scams ──

// ── Cycle 146 (April 29 2026) — smart home additions ──

// ── Cycle 147 (April 29 2026) — chronic conditions ──

// ── Cycle 148 (April 29 2026) — caregiving + late-stage care ──

// ── Cycle 149 (April 29 2026) — pets for seniors ──

// ── Cycle 150 (April 29 2026) — driving + cars ──

// ── Cycle 151 (April 29 2026) — digital payments + money ──

// ── Cycle 152 (April 29 2026) — entertainment + leisure ──

// ── Cycle 153 (April 29 2026) — outdoor + seasonal ──

// ── Cycle 154 (April 29 2026) — saving money shopping ──

// ── Cycle 155 (April 29 2026) — legacy + history ──

// ── Cycle 156 (April 29 2026) — home maintenance ──

// ── Cycle 157 (April 29 2026) — kitchen for seniors ──

// ── Cycle 158 (April 29 2026) — legal + credit ──

// ── Cycle 159 (April 29 2026) — languages + free college ──

// ── Cycle 160 (April 29 2026) — veteran benefits ──

// ── Cycle 161 (April 29 2026) — government benefits ──

// ── Cycle 162 (April 29 2026) — practical AI ──

// ── Cycle 163 (April 29 2026) — wearables + exercise ──

// ── Cycle 164 (April 29 2026) — medical management ──

// ── Cycle 165 (April 29 2026) — second-career income ──

// ── Cycle 166 (April 29 2026) — mindfulness + simple living ──

// ── Cycle 167 (April 29 2026) — senior tech basics ──

// ── Cycle 168 (April 29 2026) — emerging tech for curious seniors ──

// ── Cycle 169 (April 29 2026) — senior movement ──

// ── Cycle 170 (April 29 2026) — computers + ecosystems ──

// ── Cycle 171 (April 29 2026) — indoor + small-space gardening ──

// ── Cycle 172 (April 29 2026) — senior crafts ──

// ── Cycle 173 (April 29 2026) — collecting hobbies ──

// ── Cycle 174 (April 29 2026) — travel apps for seniors ──

// ── Cycle 175 (April 29 2026) — streaming services ──

// ── Cycle 176 (April 29 2026) — senior puzzles + games ──

// ── Cycle 177 (April 29 2026) — security upgrades ──

// ── Cycle 178 (April 29 2026) — government online ──

// ── Cycle 179 (April 29 2026) — voice assistants ──

// ── Cycle 180 (April 29 2026) — internet + ISP ──

// ── Cycle 181 (April 29 2026) — hearing tech ──

// ── Cycle 182 (April 29 2026) — smartwatches health ──

// ── Cycle 183 (April 29 2026) — appliances ──

// ── Cycle 184 (April 29 2026) — alternative travel modes ──

// ── Cycle 185 (April 29 2026) — basic skills ──

// ── Cycle 186 (April 29 2026) — social media beginners ──

// ── Cycle 187 (April 29 2026) — credit cards ──

// ── Cycle 188 (April 29 2026) — preventive health ──

// ── Cycle 189 (April 29 2026) — mental health ──

// ── Cycle 190 (April 29 2026) — substance use ──

// ── Cycle 191 (April 29 2026) — chronic conditions ──

// ── Cycle 192 (April 29 2026) — cardiovascular ──

// ── Cycle 193 (April 29 2026) — end-of-life ──

// ── Cycle 194 (April 29 2026) — car maintenance ──

// ── Cycle 277 (April 30 2026) — auto + driving apps ──

// ── Cycle 278 (April 30 2026) — senior healthcare apps ──

// ── Cycle 279 (April 30 2026) — senior travel apps ──

// ── Cycle 280 (April 30 2026) — senior hobby apps ──

// ── Cycle 281 (April 30 2026) — senior games + brain ──

// ── Cycle 282 (April 30 2026) — senior accessibility apps ──

// ── Cycle 283 (April 30 2026) — senior shopping savings ──

// ── Cycle 284 (April 30 2026) — senior fitness apps ──

// ── Cycle 285 (April 30 2026) — senior communication apps ──

// ── Cycle 286 (April 30 2026) — senior smart home apps ──

// ── Cycle 287 (April 30 2026) — senior security + lost devices ──

// ── Cycle 288 (April 30 2026) — senior banking apps deeper ──

// ── Cycle 289 (April 30 2026) — senior wellness + mental health ──

// ── Cycle 290 (April 30 2026) — senior Apple ecosystem ──

// ── Cycle 291 (April 30 2026) — senior streaming alternatives ──

// ── Cycle 292 (April 30 2026) — senior browser/web essentials ──

// ── Cycle 293 (April 30 2026) — senior food + recipes ──

// ── Cycle 294 (April 30 2026) — senior AI assistants ──

// ── Cycle 295 (April 30 2026) — senior document tools ──

// ── Cycle 296 (April 30 2026) — senior cloud + storage ──

// ── Cycle 297 (April 30 2026) — senior phone tips ──

// ── Cycle 298 (April 30 2026) — senior video calling deep ──

// ── Cycle 299 (April 30 2026) — senior services ──

// ── Cycle 300 (April 30 2026) — senior wearables + health monitors ──

// ── Cycle 301 (April 30 2026) — senior shopping memberships ──

// ── Cycle 302 (April 30 2026) — senior education + learning ──

// ── Cycle 303 (April 30 2026) — senior tax + financial planning ──

// ── Cycle 304 (April 30 2026) — senior smart speaker deep ──

// ── Cycle 305 (April 30 2026) — senior writing + journaling ──

// ── Cycle 306 (April 30 2026) — senior travel apps deeper ──

// ── Cycle 307 (April 30 2026) — senior streaming alternatives ──

// ── Cycle 308 (April 30 2026) — senior wellness deep ──

// ── Cycle 309 (April 30 2026) — senior productivity hacks ──

// ── Cycle 310 (April 30 2026) — senior life skills tech ──

// ── Cycle 311 (April 30 2026) — senior household helpers ──

// ── Cycle 312 (April 30 2026) — senior pet apps deeper ──

// ── Cycle 313 (April 30 2026) — senior emergency tech ──

// ── Cycle 314 (April 30 2026) — senior caregiver tools ──

// ── Cycle 315 (April 30 2026) — senior music apps deeper ──

// ── Cycle 316 (April 30 2026) — senior digital security deep ──

// ── Cycle 317 (April 30 2026) — senior shopping deals deep ──

// ── Cycle 318 (April 30 2026) — senior reading apps deeper ──

// ── Cycle 319 (April 30 2026) — senior video creation ──

// ── Cycle 320 (April 30 2026) — senior smart home essentials ──

// ── Cycle 321 (April 30 2026) — senior fitness equipment ──

// ── Cycle 322 (April 30 2026) — senior travel deeper ──

// ── Cycle 323 (April 30 2026) — senior personal care ──

// ── Cycle 324 (April 30 2026) — senior tech support ──

// ── Cycle 325 (April 30 2026) — senior gardening apps deeper ──

// ── Cycle 326 (April 30 2026) — senior phone backup + recovery ──

// ── Cycle 327 (April 30 2026) — senior calendar + scheduling ──

// ── Cycle 328 (April 30 2026) — senior weather + safety ──

// ── Cycle 329 (April 30 2026) — senior fitness trackers deeper ──

// ── Cycle 330 (April 30 2026) — senior speech + voice ──

// ── Cycle 331 (April 30 2026) — senior keyboard + streaming ──

// ── Cycle 332 (May 2 2026) — senior tech essentials ──

// ── Cycle 333 (May 2 2026) — senior crafting hobbies ──

// ── Cycle 334 (May 2 2026) — senior gardening tools ──

// ── Cycle 335 (May 2 2026) — senior pet care deeper ──

// ── Cycle 336 (May 2 2026) — senior healthcare apps deeper ──

// ── Cycle 337 (May 2 2026) — senior accessibility deep ──

// ── Cycle 338 (May 2 2026) — senior smart appliances ──

// ── Cycle 339 (May 2 2026) — senior wellness deeper ──

// ── Cycle 340 (May 2 2026) — senior productivity deeper ──

// ── Cycle 341 (May 2 2026) — senior banking deeper ──

// ── Cycle 342 (May 2 2026) — senior travel deeper ──

// ── Cycle 343 (May 2 2026) — senior gifts + family ──

// ── Cycle 344 (May 2 2026) — senior cooking deeper ──

// ── Cycle 345 (May 2 2026) — senior privacy + protection ──

// ── Cycle 346 (May 2 2026) — senior medical apps deeper ──

// ── Cycle 347 (May 2 2026) — senior wellness deeper ──

// ── Cycle 348 (May 2 2026) — senior shopping deeper ──

// ── Cycle 195 (April 29 2026) — DIY home ──

// ── Cycle 196 (April 29 2026) — energy + sustainability ──

// ── Cycle 197 (April 29 2026) — disaster prep ──

// ── Cycle 198 (April 29 2026) — senior housing alternatives ──

// ── Cycle 199 (April 29 2026) — travel deals ──

// ── Cycle 200 (April 29 2026) — grandparenting ──

// ── Cycle 201 (April 29 2026) — books + podcasts ──

// ── Cycle 202 (April 29 2026) — outdoor recreation ──

// ── Cycle 203 (April 29 2026) — food + drink hobbies ──

// ── Cycle 204 (April 29 2026) — music + dance ──

// ── Cycle 205 (April 29 2026) — crafts ──

// ── Cycle 206 (April 29 2026) — holidays ──

// ── Cycle 207 (April 29 2026) — pet care ──

// ── Cycle 208 (April 29 2026) — instruments ──

// ── Cycle 209 (April 29 2026) — entertainment + writing ──

// ── Cycle 210 (April 29 2026) — file mgmt + display ──

// ── Cycle 211 (April 29 2026) — banking essentials ──

// ── Cycle 212 (April 29 2026) — fitness deeper ──

// ── Cycle 213 (April 29 2026) — nutrition deeper ──

// ── Cycle 214 (April 29 2026) — auto deeper ──

// ── Cycle 215 (April 29 2026) — security deeper ──

// ── Cycle 216 (April 29 2026) — beauty + grooming ──

// ── Cycle 217 (April 29 2026) — home maintenance ──

// ── Cycle 218 (April 29 2026) — phone basics ──

// ── Cycle 219 (April 29 2026) — AI use cases ──

// ── Cycle 220 (April 29 2026) — productivity apps ──

// ── Cycle 221 (April 29 2026) — music streaming ──

// ── Cycle 222 (April 29 2026) — social media ──

// ── Master Plan tools (April 16 2026 batch-2) ──
const ScamIqQuiz             = lazy(() => import("./pages/quizzes/ScamIqQuiz"));
const TechConfidenceQuiz     = lazy(() => import("./pages/quizzes/TechConfidenceQuiz"));
const PhishingInbox          = lazy(() => import("./pages/practice/PhishingInbox"));
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
const PasswordPractice       = lazy(() => import("./pages/practice/PasswordPractice"));
const CaregiverPlannerPack   = lazy(() => import("./pages/printables/CaregiverPlannerPack"));
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
const SiteIndex              = lazy(() => import("./pages/SiteIndex"));
const Volunteer              = lazy(() => import("./pages/Volunteer"));
const WeeklyNewsletterTemplate = lazy(() => import("./pages/printables/WeeklyNewsletterTemplate"));


// ── Toolkits (hub pages) ─────────────────────────────────────────────────────
const CaregiverToolkit       = lazy(() => import("./pages/toolkits/CaregiverToolkit"));

// ── Practice sims (branching interactive safety practice) ──────────────────
const SuspiciousCallSim      = lazy(() => import("./pages/practice/SuspiciousCallSim"));
const VocabFlashcards        = lazy(() => import("./pages/practice/VocabFlashcards"));

// ── New tools and hubs (April 2026 expansion) ──────────────────────────────
const GrandparentDeviceSetup = lazy(() => import("./pages/GrandparentDeviceSetup"));
const AccountAfterLoss       = lazy(() => import("./pages/AccountAfterLoss"));
const LowVisionSetup         = lazy(() => import("./pages/LowVisionSetup"));
const DailyTip               = lazy(() => import("./pages/DailyTip"));
const Start                  = lazy(() => import("./pages/Start"));

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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
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
          <Route path="/tools/all" element={<AllToolsDirectory />} />
          {/* Every other /tools/<slug> resolves through src/data/tools-registry.ts. */}
          <Route path="/tools/:slug" element={<ToolRoute />} />
          <Route path="/brain" element={<Brain />} />
          {/* /tekbrain is the welcoming landing page; /tekbrain/chat is the
              actual chat UI. First-time visitors now see an explainer before
              being dropped into a conversation. */}
          <Route path="/tekbrain" element={<TekBrainLanding />} />
          <Route path="/tekbrain/chat" element={<TekBrainPage />} />
          <Route path="/safety/scam-alerts" element={<ScamAlerts />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tools/jargon-translator" element={<Navigate to="/tools/tech-jargon-translator" replace />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/community/ambassadors" element={<Ambassadors />} />
          <Route path="/tools/phishing-scanner" element={<Navigate to="/tools/url-safety-checker" replace />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* /technicians is taken out of public reach on purpose.
              The page shipped four invented technician profiles ("James R.",
              4.9 rating, 112 jobs completed) and eleven fabricated customer
              reviews with names, dates and star ratings. Publishing invented
              reviews and credentials is deceptive advertising — the FTC's Rule
              on Consumer Reviews and Testimonials prohibits it and carries
              civil penalties per violation — and several of the reviews
              describe in-person visits TekSure cannot currently perform.
              src/pages/TechnicianProfile.tsx is intentionally left in the repo
              so it can be rebuilt with real people and real reviews; restore
              these routes then. See BUSINESS-DECISIONS-NEEDED.md. */}
          <Route path="/technicians" element={<Navigate to="/get-help" replace />} />
          <Route path="/technicians/:id" element={<Navigate to="/get-help" replace />} />
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
          <Route path="/gift-guide" element={<TechGiftGuide />} />
          <Route path="/tech-anxiety" element={<TechAnxiety />} />
          <Route path="/local-help" element={<LocalHelp />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/ai-tutor" element={<AiTutor />} />
          <Route path="/progress-report" element={<ProgressReport />} />
          <Route path="/family-sharing" element={<FamilySharing />} />
          <Route path="/caregiver" element={<Caregiver />} />
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

          <Route path="/tools/phone-plan-comparator" element={<Navigate to="/tools/phone-plan-comparison" replace />} />
          <Route path="/tools/password-leak-checker" element={<Navigate to="/tools/password-health" replace />} />
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
          <Route path="/practice/password-practice" element={<PasswordPractice />} />
          <Route path="/printables/caregiver-planner" element={<CaregiverPlannerPack />} />
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
          <Route path="/tools/safe-link-checker" element={<Navigate to="/tools/url-safety-checker" replace />} />
          <Route path="/tools/is-this-real" element={<Navigate to="/tools/is-this-a-scam" replace />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/llm-knowledge-base" element={<LlmKnowledgeBase />} />
          <Route path="/keyboard-navigation" element={<KeyboardNavigation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/memory" element={<MemoryDashboard />} />
          <Route path="/faq" element={<FAQ />} />

          {/* ── New tools (April 2026 expansion) ── */}
          <Route path="/calculators/internet-plan" element={<InternetPlanCalculator />} />
          <Route path="/calculators/subscriptions" element={<SubscriptionCostAggregator />} />
          <Route path="/tools/subscription-tracker" element={<Navigate to="/tools/subscription-auditor" replace />} />

          {/* OSINT.link-inspired tools */}

          {/* ── Tools expansion April 16 ── */}
          <Route path="/weekly-tips" element={<WeeklyTips />} />
          <Route path="/this-week" element={<WeeklyTips />} />

          {/* Cycle 1 — net-new tools (April 29 2026) */}

          {/* Cycle 2 — net-new tools */}

          {/* Cycle 3 — net-new tools */}

          {/* Cycle 4 — net-new tools */}

          {/* Cycle 5 — health/accessibility */}

          {/* Cycle 6 — money & daily life */}

          {/* Cycle 7 — communication & SOS */}

          {/* Cycle 8 — caregiver / legacy / language */}

          {/* Cycle 9 — entertainment & home network */}

          {/* Cycle 10 — AI / photos / docs / govt */}

          {/* Cycle 11 — scams + tablet + basics */}

          {/* Cycle 12 — cleanup, delivery, video calls */}

          {/* Cycle 13 — calendar / news / wellness / weather / pets */}

          {/* Cycle 14 — travel / maps / dining / discounts / Prime */}

          {/* Cycle 15 — finance & retirement */}

          {/* Cycle 16 — music/photos/scan/audio/home screen */}

          {/* Cycle 17 — nature / cooking / watch */}

          {/* Cycle 18 — comms / smart home / health */}

          {/* Cycle 19 — brain/genealogy/frame/sound/volunteer */}

          {/* Cycle 20 — cloud/passwords/speed/browser/learning */}

          {/* Cycle 21 — podcasts / outdoors / repair */}

          {/* Cycle 22 — scams / contractors / cell / handyman / jobs */}

          {/* Cycle 23 — privacy / banking / travel / brokerage / screen */}

          {/* Cycle 24 — backup / photo-org / medical / bills / journal */}

          {/* Cycle 25 — caregiving / accessibility / health */}

          {/* Cycle 26 — kitchen / inventory / privacy / sell / utilities */}

          {/* Cycle 27 — books / reading / ergonomics / notes */}

          {/* Cycle 28 — driving / sleep / power / disaster / grandkids */}

          {/* Cycle 29 — passkeys / antivirus / recovery / shortcuts / tremors */}

          {/* Cycle 30 — car / EV / used cars / flights / window management */}

          {/* Cycle 31 — diet / meds / exercise / fitness / cognitive */}

          {/* Cycle 32 — homework / tutoring / creative / cameras / docs */}

          {/* Cycle 33 — vaccines / drugs / symptoms / doctors */}

          {/* Cycle 34 — wills / directives / savings / 529 / notary */}

          {/* Cycle 35 — Social Security / Medicare / LTC / reverse mortgage / pension */}

          {/* Cycle 36 — funeral / hospice / therapy / widow / downsize */}

          {/* Cycle 37 — smart display / robot vac / health tests / scale / zoom host */}

          {/* Cycle 38 — accounts / privacy / search / VA / SSDI */}

          {/* Cycle 39 — VPN / encryption / cyber / remote */}

          {/* Cycle 40 — taxes / SNAP / eldercare / lifeline / HSA-FSA */}

          {/* Cycle 41 — laptop / phone / grandkid safety / apps / console */}

          {/* Cycle 42 — AI / resume / smart home */}

          {/* Cycle 43 — printer / fax / cam / weather / walk */}

          {/* Cycle 44 — car / mileage / subs / dispute / refi */}

          {/* Cycle 45 — retirement accounts / rollover / withdrawal / bonds / index */}

          {/* Cycle 46 — passport / disposal / erase / photos / in-person */}

          {/* Cycle 47 — dental / vision / deepfake / genealogy / citizen */}

          {/* Cycle 48 — donate / mail / 311 / energy / solar */}

          {/* Cycle 49 — air / smoke / water / vacuum / recalls */}

          {/* Cycle 50 — TV / speakers / vinyl / sports / golf */}

          {/* Cycle 51 — fishing / pickleball / games / wine / cocktail */}

          {/* Cycle 52 — security / thermostat / lock / leak / insurance */}

          {/* Cycle 53 — networking */}

          {/* Cycle 54 — warehouse / advisor / annuity / trust / loyalty */}

          {/* Cycle 55 — faith / disease support */}

          {/* Cycle 56 — DIY / garage / lawn / mower / snow */}

          {/* Cycle 57 — pet / birds / chickens / sales */}

          {/* Cycle 58 — pencil / email / pipes / generator / grill */}

          {/* Cycle 59 — credit / HELOC / airbnb / windfall */}

          {/* Cycle 60 — appraisers / auctions / coins / cards / collectibles */}

          {/* Cycle 61 — troubleshooting */}

          {/* Cycle 62 — pharmacy / bundles / grocery / Apple */}

          {/* Cycle 63 — read-aloud / wifi / relay / pet / coupons */}

          {/* Cycle 64 — utility savings + smart-home + food */}

          {/* Cycle 65 — travel + legacy */}

          {/* Cycle 66 — health tech */}

          {/* Cycle 67 — scam defenses */}

          {/* Cycle 68 — phone basics */}

          {/* Cycle 69 — passwords + accounts */}

          {/* Cycle 70 — entertainment + connection */}

          {/* Cycle 71 — driving + delivery */}

          {/* Cycle 72 — kitchen + home tech */}

          {/* Cycle 73 — money + banking */}

          {/* Cycle 74 — smart speakers + AI voice */}

          {/* Cycle 75 — photos + memories */}

          {/* Cycle 76 — shopping + buying */}

          {/* Cycle 77 — travel + cruise tech */}

          {/* Cycle 78 — estate + insurance */}

          {/* Cycle 79 — hobbies + crafts */}

          {/* Cycle 80 — caregivers + senior care */}

          {/* Cycle 81 — tax + paperwork */}

          {/* Cycle 82 — accessibility */}

          {/* Cycle 83 — home safety */}

          {/* Cycle 84 — weather + outdoor */}

          {/* Cycle 85 — civic + community */}

          {/* Cycle 86 — pet tech */}

          {/* Cycle 87 — kids/grandkids tech */}

          {/* Cycle 88 — senior fitness */}

          {/* Cycle 89 — clinical tech */}

          {/* Cycle 90 — faith + community */}

          {/* Cycle 91 — phone carrier */}

          {/* Cycle 92 — TV + entertainment */}

          {/* Cycle 93 — DIY + handyman */}

          {/* Cycle 94 — nutrition + meals */}

          {/* Cycle 95 — senior dating */}

          {/* Cycle 96 — language + learning */}

          {/* Cycle 97 — medication safety */}

          {/* Cycle 98 — kitchen tech */}

          {/* Cycle 99 — home gym + fitness gear */}

          {/* Cycle 100 — digital wellness */}

          {/* Cycle 101 — senior travel + adventure */}

          {/* Cycle 102 — senior workforce */}

          {/* Cycle 103 — crime + safety */}

          {/* Cycle 104 — grandparent-grandkid tech */}

          {/* Cycle 105 — medical visit advocacy */}

          {/* Cycle 106 — financial well-being */}

          {/* Cycle 107 — Spanish-speaking seniors */}

          {/* Cycle 108 — smart home */}

          {/* Cycle 109 — senior phones + simple devices */}

          {/* Cycle 110 — holiday + special occasions */}

          {/* Cycle 111 — post-retirement living */}

          {/* Cycle 112 — dental + vision + hearing */}

          {/* Cycle 113 — senior auto + driving */}

          {/* Cycle 114 — senior shopping smart */}

          {/* Cycle 115 — senior music + audio */}

          {/* Cycle 116 — senior parenting + family */}

          {/* Cycle 117 — privacy + data */}

          {/* Cycle 118 — AI for seniors */}

          {/* Cycle 119 — recovery + rehab */}

          {/* Cycle 120 — wellness milestone */}

          {/* Cycle 121 — internet basics */}

          {/* Cycle 122 — tax + Medicare deeper */}

          {/* Cycle 123 — civic + service */}

          {/* Cycle 124 — Office productivity */}

          {/* Cycle 125 — government online services */}

          {/* Cycle 126 — phone tricks */}

          {/* Cycle 127 — senior insurance */}

          {/* Cycle 128 — community + clubs */}

          {/* Cycle 129 — home cleanup + organization */}

          {/* Cycle 130 — emergency preparedness */}

          {/* Cycle 131 — senior cooking */}

          {/* Cycle 132 — gardening + outdoor */}

          {/* Cycle 133 — intergenerational */}

          {/* Cycle 134 — tech repair + maintenance */}

          {/* Cycle 135 — media literacy */}

          {/* Cycle 136 — memory + cognitive */}

          {/* Master Plan tools */}
          <Route path="/quizzes/scam-iq" element={<ScamIqQuiz />} />
          <Route path="/quizzes/tech-confidence" element={<TechConfidenceQuiz />} />

          {/* Practice Mode — simulated phone interface for fearless practice */}

          {/* Settings Finder — "where's that setting on my device?" lookup */}

          {/* Email Spam Manager — guide-tool hybrid for inbox cleanup */}

          {/* Streaming Service Picker — senior-friendly recommender for cord-cutters */}

          {/* Refund & Return Helper — step-by-step walkthroughs for getting money back */}

          {/* Kitchen Tech Helper — setup & daily-use guide for 10 kitchen appliances */}

          {/* State AG Scam Lookup — per-state consumer protection + federal agency directory */}

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

          {/* ── April 2026 expansion: new top-level hubs ────────────────── */}
          <Route path="/grandparent-device-setup" element={<GrandparentDeviceSetup />} />
          <Route path="/account-after-loss"       element={<AccountAfterLoss />} />
          <Route path="/low-vision-setup"         element={<LowVisionSetup />} />
          <Route path="/daily-tip"                element={<DailyTip />} />

          {/* ── April 2026 expansion (round 2) ──────────────────────────── */}
          <Route path="/start"                            element={<Start />} />
          <Route path="/tools/senior-discount-finder-app"  element={<Navigate to="/tools/senior-discount-finder" replace />} />
          <Route path="/tools/bluetooth-pairing-help"      element={<Navigate to="/tools/bluetooth-pairing-helper" replace />} />

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
