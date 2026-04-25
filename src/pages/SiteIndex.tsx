import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Map,
  Wrench,
  BookOpen,
  Sparkles,
  Users,
  ShieldCheck,
  UserCog,
  FileText,
  Accessibility,
  Home,
  ArrowRight,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, categoryDescriptions, type GuideCategory } from '@/data/guides';

/**
 * SiteIndex — /site-index
 *
 * A complete human-readable sitemap of every page on TekSure. Great for
 * accessibility, SEO, and for users who know exactly what they're looking
 * for. Only links to routes that actually exist in App.tsx.
 */

interface Entry {
  to: string;
  label: string;
  description: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  description: string;
  entries: Entry[];
  /** When true, entries are grouped alphabetically by first letter of label. */
  alphabetical?: boolean;
}

// ── Main Hubs ────────────────────────────────────────────────────────────────
const hubs: Entry[] = [
  { to: '/', label: 'Home', description: 'The TekSure welcome page — start here.' },
  { to: '/guides', label: 'Guides', description: 'Step-by-step how-to guides in plain English.' },
  { to: '/tools', label: 'Tools', description: 'Interactive helpers — about 99 free tools to solve everyday problems.' },
  { to: '/tekbrain', label: 'TekBrain', description: 'Your friendly, always-available AI tech helper.' },
  { to: '/tekbrain/chat', label: 'TekBrain Chat', description: 'Open the TekBrain chat directly.' },
  { to: '/brain', label: 'Brain (Knowledge Map)', description: 'A visual map of everything TekSure knows.' },
  { to: '/learn', label: 'Learn', description: 'Courses and learning paths for becoming more confident with tech.' },
  { to: '/senior-tech-path', label: 'Senior Tech Path', description: 'A gentle learning path designed for seniors.' },
  { to: '/explore', label: 'Explore', description: 'Wander through TekSure topics by curiosity, not task.' },
  { to: '/accessibility', label: 'Accessibility Hub', description: 'Assistive settings and guides for vision, hearing, mobility, and cognition.' },
  { to: '/caregiver-hub', label: 'Caregiver Hub', description: 'Resources for anyone helping a loved one with technology.' },
  { to: '/privacy-hub', label: 'Privacy Hub', description: 'Take back control of your online privacy in plain steps.' },
  { to: '/scam-defense', label: 'Scam Defense Center', description: 'Recognize scams, react safely, and report them.' },
  { to: '/free-resources', label: 'Free Resources', description: 'Printables, reference cards, and no-cost tools.' },
  { to: '/free-software', label: 'Free Software', description: 'Safe, trustworthy free software recommendations.' },
  { to: '/get-help', label: 'Get Help', description: 'Find the fastest way to get unstuck.' },
  { to: '/emergency-help', label: 'Emergency Help', description: 'Something is urgent — start here.' },
  { to: '/emergency-tech', label: 'Emergency Tech', description: 'Prep your tech for weather and power emergencies.' },
  { to: '/how-it-works', label: 'How It Works', description: 'How TekSure helps — the short version.' },
  { to: '/faq', label: 'FAQ', description: 'Answers to the questions people ask most often.' },
  { to: '/about', label: 'About', description: 'Who we are and why we built TekSure.' },
  { to: '/onboarding', label: 'Welcome Tour', description: "A quick walkthrough of TekSure for first-time visitors." },
];

// ── Tools (every /tools/* route in App.tsx) ──────────────────────────────────
const tools: Entry[] = [
  { to: '/tools', label: 'All Tools (Hub)', description: 'Browse and search the full tool library.' },
  { to: '/tools/accessibility-check', label: 'Accessibility Check', description: 'Check a page or app for accessibility issues.' },
  { to: '/tools/accessibility-needs-finder', label: 'Accessibility Needs Finder', description: 'Find the right accessibility settings for you.' },
  { to: '/tools/accessibility-profile-builder', label: 'Accessibility Profile Builder', description: 'Build a personal accessibility profile.' },
  { to: '/tools/account-recovery', label: 'Account Recovery Helper', description: 'Step-by-step walkthrough for locked-out accounts.' },
  { to: '/tools/app-cleanup', label: 'App Cleanup', description: 'Identify apps you can safely uninstall.' },
  { to: '/tools/app-permissions', label: 'App Permissions Guide', description: 'Review what your apps can access.' },
  { to: '/tools/app-recommender', label: 'App Recommender', description: 'Get app suggestions based on what you need.' },
  { to: '/tools/backup-wizard', label: 'Backup Wizard', description: "Walk through backing up your device the right way." },
  { to: '/tools/battery-optimizer', label: 'Battery Optimizer', description: 'Extend your phone or laptop battery life.' },
  { to: '/tools/bill-decoder', label: 'Bill Decoder', description: 'Make sense of confusing tech and medical bills.' },
  { to: '/tools/bill-negotiator', label: 'Bill Negotiator', description: 'Script help for negotiating cable, phone, and internet bills.' },
  { to: '/tools/bluetooth-troubleshooter', label: 'Bluetooth Troubleshooter', description: 'Fix Bluetooth pairing and connection issues.' },
  { to: '/tools/child-app-safety-checker', label: 'Child App Safety Checker', description: 'Check whether an app is safe for kids.' },
  { to: '/tools/computer-cleanup-wizard', label: 'Computer Cleanup Wizard', description: 'Clean up a slow Windows or Mac computer.' },
  { to: '/tools/confidence-score', label: 'Tech Confidence Score', description: 'Measure where your tech confidence stands today.' },
  { to: '/tools/contact-backup', label: 'Contact Backup Tool', description: 'Back up your phone contacts safely.' },
  { to: '/tools/credit-report-reader', label: 'Credit Report Reader', description: 'Read and understand your credit report.' },
  { to: '/tools/cyber-scorecard', label: 'Cyber Scorecard', description: 'Grade your overall online security.' },
  { to: '/tools/cyber-toolkit', label: 'Cybersecurity Toolkit', description: 'A collection of everyday cybersecurity tools.' },
  { to: '/tools/data-breach-checker', label: 'Data Breach Checker', description: 'See if your email has been in a known data breach.' },
  { to: '/tools/data-leak-dashboard', label: 'Data Leak Dashboard', description: 'Visualize your personal data exposure.' },
  { to: '/tools/device-age-checker', label: 'Device Age Checker', description: "See how old your device is and whether it's time to upgrade." },
  { to: '/tools/device-chooser', label: 'Device Chooser', description: 'Find the right computer, phone, or tablet for you.' },
  { to: '/tools/device-compare', label: 'Device Compare', description: 'Compare two devices side by side.' },
  { to: '/tools/device-comparison', label: 'Device Comparison (New)', description: 'A second, simpler device comparison tool.' },
  { to: '/tools/device-health', label: 'Device Health Dashboard', description: 'A health check for your phone or computer.' },
  { to: '/tools/device-setup-checklist', label: 'Device Setup Checklist', description: 'A printable checklist for setting up a new device.' },
  { to: '/tools/digital-cleanup', label: 'Digital Cleanup', description: 'Tidy up files, photos, and subscriptions.' },
  { to: '/tools/digital-footprint-scanner', label: 'Digital Footprint Scanner', description: 'See what the internet already knows about you.' },
  { to: '/tools/digital-literacy-assessment', label: 'Digital Literacy Assessment', description: 'A gentle skills quiz with suggestions for improvement.' },
  { to: '/tools/digital-will-template', label: 'Digital Will Template', description: 'Plan what happens to your digital life one day.' },
  { to: '/tools/doc-browser', label: 'Doc Browser', description: 'Browse TekSure documentation.' },
  { to: '/tools/email-declutter', label: 'Email Declutter', description: 'Clear out a cluttered inbox with confidence.' },
  { to: '/tools/email-security-check', label: 'Email Security Check', description: 'Check how secure your email account is.' },
  { to: '/tools/email-templates', label: 'Email Templates', description: 'Copy-paste templates for common email situations.' },
  { to: '/tools/email-writer-helper', label: 'Email Writer Helper', description: 'Polite, plain-English phrasing for tricky emails.' },
  { to: '/tools/eob-decoder', label: 'EOB Decoder', description: "Make sense of a health insurer's Explanation of Benefits." },
  { to: '/tools/error-decoder', label: 'Error Decoder', description: 'Translate cryptic error messages into plain English.' },
  { to: '/tools/fact-check-toolkit', label: 'Fact-Check Toolkit', description: 'Tools for verifying claims online.' },
  { to: '/tools/family-tech-planner', label: 'Family Tech Planner', description: 'Plan the household tech for your whole family.' },
  { to: '/tools/file-organizer-guide', label: 'File Organizer Guide', description: 'Organize your computer files for good.' },
  { to: '/tools/google-dork-generator', label: 'Google Dork Generator', description: 'Build smarter Google searches for better results.' },
  { to: '/tools/guide-packs', label: 'Guide Packs', description: 'Bundles of related guides around a single topic.' },
  { to: '/tools/health-check', label: 'Health Check', description: 'A quick all-around health check for your device.' },
  { to: '/tools/home-network-map', label: 'Home Network Map', description: 'Visualize every device on your home network.' },
  { to: '/tools/internet-plan-comparator', label: 'Internet Plan Comparator', description: 'Compare internet plans to pick the right one.' },
  { to: '/tools/internet-speed-advisor', label: 'Internet Speed Advisor', description: 'How fast does your internet really need to be?' },
  { to: '/tools/internet-speed-doctor', label: 'Internet Speed Doctor', description: 'Diagnose slow internet in a few simple steps.' },
  { to: '/tools/internet-speed-needs', label: 'Internet Speed Needs', description: 'Figure out the right speed for your household.' },
  { to: '/tools/is-this-a-scam', label: 'Is This a Scam?', description: 'Paste a message and get a risk check back.' },
  { to: '/tools/jargon-translator', label: 'Jargon Translator', description: 'Turn tech jargon into plain English.' },
  { to: '/tools/keyboard-shortcuts', label: 'Keyboard Shortcuts', description: 'A searchable list of useful keyboard shortcuts.' },
  { to: '/tools/llm-knowledge-base', label: 'LLM Knowledge Base', description: 'Background info on how AI chatbots work.' },
  { to: '/tools/medicare-plan-chooser', label: 'Medicare Plan Chooser', description: 'Make sense of Medicare plan choices.' },
  { to: '/tools/meeting-setup', label: 'Meeting Setup Helper', description: 'Get ready for a video call or virtual meeting.' },
  { to: '/tools/new-phone-setup', label: 'New Phone Setup', description: 'A guided walkthrough for setting up a new phone.' },
  { to: '/tools/notification-decoder', label: 'Notification Decoder', description: 'Understand what a confusing notification is asking.' },
  { to: '/tools/osint-framework', label: 'OSINT Framework', description: 'A curated set of open-source intelligence tools.' },
  { to: '/tools/parental-controls-wizard', label: 'Parental Controls Wizard', description: 'Set up parental controls the right way.' },
  { to: '/tools/password-generator', label: 'Password Generator', description: 'Generate strong passwords you can actually remember.' },
  { to: '/tools/password-leak-checker', label: 'Password Leak Checker', description: 'Check whether a password has been leaked in a breach.' },
  { to: '/tools/password-manager', label: 'Password Manager Guide', description: 'Pick and set up a password manager.' },
  { to: '/tools/password-phrase-generator', label: 'Passphrase Generator', description: 'Create memorable multi-word passphrases.' },
  { to: '/tools/password-strength', label: 'Password Strength Tester', description: 'Test how strong your password really is.' },
  { to: '/tools/phishing-scanner', label: 'Phishing Scanner', description: 'Spot phishing attempts before you click.' },
  { to: '/tools/phone-cleanup', label: 'Phone Cleanup Wizard', description: 'Free up storage on your phone.' },
  { to: '/tools/phone-first-aid', label: 'Phone First Aid', description: 'First-aid fixes for a phone that is acting up.' },
  { to: '/tools/phone-plan-comparator', label: 'Phone Plan Comparator', description: 'Compare mobile plans to save money.' },
  { to: '/tools/plain-english-translator', label: 'Plain-English Translator', description: 'Rewrite confusing paragraphs in plain English.' },
  { to: '/tools/practice-mode', label: 'Practice Mode', description: 'A simulated phone interface for fearless practice.' },
  { to: '/tools/printer-troubleshooter', label: 'Printer Troubleshooter', description: 'Fix a printer that will not print.' },
  { to: '/tools/privacy-audit', label: 'Privacy Audit', description: 'Audit your privacy settings across major services.' },
  { to: '/tools/qr-code-explainer', label: 'QR Code Explainer', description: 'Understand and safely use QR codes.' },
  { to: '/tools/quick-reference', label: 'Quick Reference', description: 'Quick-lookup reference for common tasks.' },
  { to: '/tools/receipt-scanner-demo', label: 'Receipt Scanner (Demo)', description: 'A demo of how receipt scanning apps work.' },
  { to: '/tools/reverse-image-search', label: 'Reverse Image Search', description: 'Find out where an image came from.' },
  { to: '/tools/robocall-blocker', label: 'Robocall Blocker', description: 'Silence robocalls on iPhone and Android.' },
  { to: '/tools/router-setup-wizard', label: 'Router Setup Wizard', description: 'Set up a new Wi-Fi router step by step.' },
  { to: '/tools/safe-call', label: 'Safe Call', description: 'A pre-call checklist before calling an unknown number.' },
  { to: '/tools/safe-link-checker', label: 'Safe Link Checker', description: 'Is this link safe to click?' },
  { to: '/tools/safety-course', label: 'Safety Course', description: 'A short course in online safety essentials.' },
  { to: '/tools/scam-iq-test', label: 'Scam IQ Test', description: 'Quiz yourself on recognizing modern scams.' },
  { to: '/tools/scam-phone-database', label: 'Scam Phone Database', description: 'Look up whether a phone number is a known scammer.' },
  { to: '/tools/scam-report', label: 'Scam Report', description: 'Report a scam so we can warn others.' },
  { to: '/tools/scam-simulator', label: 'Scam Simulator', description: 'Practice identifying scam messages safely.' },
  { to: '/tools/screen-time', label: 'Screen Time Analyzer', description: 'Understand and reduce your daily screen time.' },
  { to: '/tools/security-osint', label: 'Security & OSINT Tools', description: 'A tabbed collection of security research tools.' },
  { to: '/tools/senior-discount-finder', label: 'Senior Discount Finder', description: 'Find senior discounts in tech and services.' },
  { to: '/tools/smart-tv-setup', label: 'Smart TV Setup Wizard', description: 'Set up a new smart TV with confidence.' },
  { to: '/tools/storage-cleanup', label: 'Storage Cleanup', description: 'Free up storage the safe way.' },
  { to: '/tools/storage-optimizer', label: 'Storage Optimizer', description: 'Keep storage under control going forward.' },
  { to: '/tools/streaming-calculator', label: 'Streaming Calculator', description: 'Figure out which streaming services add up best.' },
  { to: '/tools/subscription-auditor', label: 'Subscription Auditor', description: 'Audit active subscriptions across your accounts.' },
  { to: '/tools/subscription-tracker', label: 'Subscription Tracker', description: 'Track recurring charges in one place.' },
  { to: '/tools/tech-budget', label: 'Tech Budget Planner', description: "Plan the household's tech spending for the year." },
  { to: '/tools/tech-comfort-quiz', label: 'Tech Comfort Quiz', description: 'Find out where you sit on the tech comfort spectrum.' },
  { to: '/tools/tech-emergency-kit', label: 'Tech Emergency Kit', description: 'Prep a kit of info and tools for tech emergencies.' },
  { to: '/tools/tech-glossary-quiz', label: 'Tech Glossary Quiz', description: 'Quiz yourself on everyday tech vocabulary.' },
  { to: '/tools/tech-health-quiz', label: 'Tech Health Quiz', description: 'Check the overall health of your tech life.' },
  { to: '/tools/tech-setup-cost-estimator', label: 'Tech Setup Cost Estimator', description: "Estimate the cost of setting up a new home office or classroom." },
  { to: '/tools/trade-in-estimator', label: 'Trade-In Estimator', description: 'Estimate the trade-in value of a device.' },
  { to: '/tools/troubleshooter', label: 'Troubleshooter', description: 'General-purpose device troubleshooter.' },
  { to: '/tools/two-factor-setup', label: 'Two-Factor Setup', description: 'Turn on two-factor authentication the right way.' },
  { to: '/tools/url-safety-checker', label: 'URL Safety Checker', description: 'Is this web address safe to visit?' },
  { to: '/tools/vpn-guide', label: 'VPN Guide', description: 'Plain-English guide to using a VPN.' },
  { to: '/tools/warranty-checker', label: 'Warranty Checker', description: "Find out whether your device is still under warranty." },
  { to: '/tools/wifi-coverage-planner', label: 'Wi-Fi Coverage Planner', description: 'Plan Wi-Fi coverage for your home or office.' },
  { to: '/tools/wifi-password-finder', label: 'Wi-Fi Password Finder', description: "Find the Wi-Fi password you already saved on a device." },
  { to: '/tools/wifi-qr-generator', label: 'Wi-Fi QR Generator', description: 'Create a QR code so guests can join your Wi-Fi in one scan.' },
  { to: '/tools/wifi-speed', label: 'Wi-Fi Speed Test', description: 'Test your real Wi-Fi speed.' },
  { to: '/tools/wifi-troubleshooter', label: 'Wi-Fi Troubleshooter', description: 'Fix a slow or dropping Wi-Fi connection.' },
];

// ── Resources ────────────────────────────────────────────────────────────────
const resources: Entry[] = [
  { to: '/safety/scam-alerts', label: 'Scam Alerts', description: 'Currently-circulating scams to watch for.' },
  { to: '/tools/scam-phone-database', label: 'Scam Phone Database', description: 'A searchable database of known scam numbers.' },
  { to: '/reference-cards', label: 'Reference Cards', description: 'Printable cards for common everyday tasks.' },
  { to: '/quick-reference-cards', label: 'Quick Reference Cards', description: 'A compact set of at-a-glance printable cards.' },
  { to: '/checklists', label: 'Checklists', description: 'Printable checklists for setup, safety, and more.' },
  { to: '/weekly-tips', label: 'Weekly Tips', description: 'A new helpful tip every week.' },
  { to: '/this-week', label: 'This Week at TekSure', description: "What's new and what we're focused on this week." },
  { to: '/glossary', label: 'Glossary', description: 'Every tech term explained in plain English.' },
  { to: '/blog', label: 'Blog', description: 'Thoughts, how-tos, and tech news from the TekSure team.' },
  { to: '/articles', label: 'Articles', description: "Longer-form articles on specific topics." },
  { to: '/webinars', label: 'Webinars', description: "Live and recorded workshops." },
  { to: '/videos', label: 'Videos', description: 'Short, friendly videos for visual learners.' },
  { to: '/news', label: 'Tech News', description: 'Everyday-person-friendly tech news.' },
  { to: '/tips', label: 'Tips', description: 'A growing library of quick tips.' },
  { to: '/tech-problem-of-week', label: 'Tech Problem of the Week', description: 'One common problem, explained each week.' },
  { to: '/success-stories', label: 'Success Stories', description: 'Real people, real tech wins.' },
  { to: '/ask', label: 'Ask TekSure', description: 'Submit a question to the TekSure community.' },
  { to: '/sources', label: 'Sources', description: 'The sources we cite and trust.' },
  { to: '/changelog', label: 'Changelog', description: "What's new on TekSure." },
  { to: '/roadmap', label: 'Roadmap', description: "What's coming next on TekSure." },
  { to: '/llm-knowledge-base', label: 'LLM Knowledge Base', description: 'Background on how AI chatbots work.' },
  { to: '/forum', label: 'Community Forum', description: 'Ask questions and help your neighbors.' },
  { to: '/community/ambassadors', label: 'Ambassadors Program', description: 'Community ambassadors who help others learn.' },
];

// ── For Specific Audiences ───────────────────────────────────────────────────
const audiences: Entry[] = [
  { to: '/family-sharing', label: 'Family Sharing', description: 'Share TekSure with everyone in your household.' },
  { to: '/tools/family-tech-planner', label: 'Family Tech Planner', description: 'Plan tech for your whole family.' },
  { to: '/caregiver', label: "Caregiver's Guide", description: 'Help a loved one with their technology.' },
  { to: '/caregiver-hub', label: 'Caregiver Hub', description: 'The full caregiver resources hub.' },
  { to: '/accessibility', label: 'Accessibility Hub', description: 'Assistive settings and tips for every disability type.' },
  { to: '/veterans-tech-hub', label: 'Veterans Tech Hub', description: 'Tech resources tailored for veterans.' },
  { to: '/senior-tech-path', label: 'Senior Tech Path', description: 'A learning path designed specifically for seniors.' },
  { to: '/retirement-tech', label: 'Retirement Tech', description: 'Tech tips for the retirement years.' },
  { to: '/new-grandparent-tech', label: 'New Grandparent Tech', description: 'Tech for new grandparents — video calls, photos, and more.' },
  { to: '/kids-online-safety', label: 'Kids Online Safety', description: 'Keep kids safe online without making tech a fight.' },
  { to: '/digital-detox', label: 'Digital Detox', description: 'Build a healthier relationship with your devices.' },
  { to: '/chromebook', label: 'Chromebook Hub', description: 'Everything a new Chromebook owner needs.' },
  { to: '/small-business-tech-hub', label: 'Small Business Tech Hub', description: 'Tech for very small businesses and solo owners.' },
  { to: '/ai-literacy-hub', label: 'AI Literacy Hub', description: 'Learn how AI actually works — no mystery required.' },
  { to: '/passkey-hub', label: 'Passkey Hub', description: 'Replace passwords with passkeys, the easy way.' },
  { to: '/deepfake-defense-hub', label: 'Deepfake Defense Hub', description: 'Spot fake audio, images, and video.' },
  { to: '/esl-tech-hub', label: 'ESL Tech Hub', description: 'Tech help for English-as-a-second-language learners.' },
  { to: '/rural-tech-hub', label: 'Rural Tech Hub', description: 'Tech solutions for rural internet and access.' },
  { to: '/divorce-tech-hub', label: 'Divorce Tech Hub', description: "Untangle a shared digital life during divorce." },
  { to: '/widowhood-tech-hub', label: 'Widowhood Tech Hub', description: 'Handle the tech side after losing a partner.' },
  { to: '/bereavement-tech', label: 'Bereavement Tech', description: 'Close accounts and handle a digital estate after loss.' },
  { to: '/dementia-care-tech', label: 'Dementia Care Tech', description: 'Tech tools that help with dementia care.' },
  { to: '/empty-nest-tech', label: 'Empty Nest Tech', description: 'Tech for the quiet chapter after the kids leave.' },
  { to: '/first-apartment-tech', label: 'First Apartment Tech', description: 'Tech starter kit for your first apartment.' },
  { to: '/moving-tech', label: 'Moving Tech', description: "Move your tech without losing anything along the way." },
  { to: '/job-search-tech-hub', label: 'Job Search Tech Hub', description: 'Resumes, LinkedIn, interviews — the tech side.' },
  { to: '/data-broker-removal', label: 'Data Broker Removal', description: 'Remove yourself from data broker sites.' },
  { to: '/tech-help-near-me', label: 'Tech Help Near Me', description: 'Find in-person tech help in your area.' },
  { to: '/local-help', label: 'Local Help', description: 'Local, human help options.' },
  { to: '/tech-anxiety', label: 'Tech Anxiety', description: "For when tech makes your heart race — we've got you." },
  { to: '/gift-guide', label: 'Tech Gift Guide', description: 'Thoughtful, age-appropriate tech gift ideas.' },
  { to: '/gift', label: 'Gift a Subscription', description: 'Give TekSure to someone you love.' },
  { to: '/gift-session', label: 'Gift a Session', description: 'Gift a one-on-one tech help session.' },
  { to: '/ai-tutor', label: 'AI Tutor', description: 'A gentle, patient AI tutor for tech basics.' },
  { to: '/progress-report', label: 'Progress Report', description: 'See how far you have come on your tech journey.' },
  { to: '/safety/parental-controls', label: 'Parental Controls', description: 'Plain-English parental controls setup.' },
];

// ── Account & Legal ──────────────────────────────────────────────────────────
const account: Entry[] = [
  { to: '/login', label: 'Sign In', description: 'Sign in to your TekSure account.' },
  { to: '/signup', label: 'Sign Up', description: 'Create a free TekSure account.' },
  { to: '/customer', label: 'Dashboard', description: 'Your personal dashboard (sign-in required).' },
  { to: '/profile', label: 'Profile', description: 'Your profile and preferences (sign-in required).' },
  { to: '/favorites', label: 'Favorites', description: 'Guides and tools you have saved.' },
  { to: '/my-devices', label: 'My Devices', description: 'The devices you have told us about.' },
  { to: '/my-requests', label: 'My Requests', description: 'Help requests you have submitted.' },
  { to: '/my-path', label: 'My Path', description: 'Your personal learning path.' },
  { to: '/journal', label: 'Tech Journal', description: 'A private journal for your tech wins and frustrations.' },
  { to: '/achievements', label: 'Achievements', description: 'Badges and milestones you have earned.' },
  { to: '/notifications', label: 'Notifications', description: 'Your TekSure notifications.' },
  { to: '/certificate', label: 'Certificate of Completion', description: 'Download a certificate when you finish a path.' },
  { to: '/memory', label: 'Memory Dashboard', description: 'What TekSure has learned about your preferences.' },
  { to: '/technicians', label: 'Technicians', description: 'Browse available technicians.' },
  { to: '/pricing', label: 'Pricing', description: 'Free guides and tools, plus a $15 deposit to book a tech.' },
  { to: '/find-a-guide', label: 'Find a Guide', description: 'Help picking the right guide.' },
  { to: '/setup', label: 'Setup Wizard', description: 'A friendly setup wizard for new arrivals.' },
  { to: '/device-hub', label: 'Device Hub', description: 'A hub for setting up and managing devices.' },
  { to: '/quick-fixes', label: 'Quick Fixes', description: 'One-minute fixes for common problems.' },
  { to: '/keyboard-navigation', label: 'Keyboard Navigation', description: 'Using TekSure without a mouse.' },
  { to: '/privacy', label: 'Privacy Policy', description: 'How we handle your data.' },
  { to: '/privacy', label: 'Terms of Use', description: 'The rules for using TekSure.' },
  { to: '/roadmap', label: 'Roadmap', description: "What's coming next." },
  { to: '/changelog', label: 'Changelog', description: "What's changed recently." },
  { to: '/about', label: 'About TekSure', description: 'Who we are.' },
];

// Build the Guide Categories section from real data, so counts stay honest.
const guideCategoryEntries: Entry[] = (Object.keys(categoryLabels) as GuideCategory[])
  .map((cat) => {
    const count = guides.filter((g) => g.category === cat).length;
    return {
      to: `/guides?category=${cat}`,
      label: `${categoryLabels[cat]} (${count})`,
      description: categoryDescriptions[cat],
    };
  })
  .filter((e) => {
    // Only include categories that actually have guides.
    const countStr = e.label.match(/\((\d+)\)$/)?.[1];
    return countStr ? parseInt(countStr, 10) > 0 : true;
  });

// Master list of sections, in display order.
const sections: Section[] = [
  {
    id: 'hubs',
    title: 'Main Hubs',
    icon: Home,
    description: 'The major destinations on TekSure.',
    entries: hubs,
    alphabetical: false,
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    description: `Every interactive tool on TekSure — ${tools.length} in all.`,
    entries: tools,
    alphabetical: true,
  },
  {
    id: 'guides',
    title: 'Guide Categories',
    icon: BookOpen,
    description: 'Every guide category, with the number of guides in each.',
    entries: guideCategoryEntries,
    alphabetical: false,
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: FileText,
    description: 'Reference material, printables, and reading.',
    entries: resources,
    alphabetical: true,
  },
  {
    id: 'audiences',
    title: 'For Specific Audiences',
    icon: Users,
    description: 'Hubs tailored to a particular life situation or need.',
    entries: audiences,
    alphabetical: true,
  },
  {
    id: 'account',
    title: 'Account & Legal',
    icon: UserCog,
    description: 'Signing in, your account, and our legal pages.',
    entries: account,
    alphabetical: true,
  },
];

// ── Component ────────────────────────────────────────────────────────────────

function groupAlphabetically(entries: Entry[]): Record<string, Entry[]> {
  const sorted = [...entries].sort((a, b) => a.label.localeCompare(b.label));
  const map: Record<string, Entry[]> = {};
  for (const e of sorted) {
    const first = e.label[0].toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : '#';
    if (!map[letter]) map[letter] = [];
    map[letter].push(e);
  }
  return map;
}

const EntryRow = ({ entry }: { entry: Entry }) => (
  <li className="group">
    <Link
      to={entry.to}
      title={entry.description}
      className="flex items-start gap-2 rounded-lg p-2 -mx-2 hover:bg-accent/50 focus-visible:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
    >
      <ArrowRight
        className="h-4 w-4 mt-1 shrink-0 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
        aria-hidden="true"
      />
      <span className="flex flex-col min-w-0">
        <span className="text-base font-medium text-foreground group-hover:text-primary leading-snug">
          {entry.label}
        </span>
        <span className="text-sm text-muted-foreground leading-snug">
          {entry.description}
        </span>
      </span>
    </Link>
  </li>
);

const SiteIndex = () => {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  // Filter every section's entries by the search query.
  const filteredSections = useMemo(() => {
    if (!q) return sections;
    return sections
      .map((section) => ({
        ...section,
        entries: section.entries.filter(
          (e) =>
            e.label.toLowerCase().includes(q) ||
            e.description.toLowerCase().includes(q) ||
            e.to.toLowerCase().includes(q)
        ),
      }))
      .filter((s) => s.entries.length > 0);
  }, [q]);

  const totalPages = useMemo(
    () => sections.reduce((sum, s) => sum + s.entries.length, 0),
    []
  );

  const filteredCount = filteredSections.reduce(
    (sum, s) => sum + s.entries.length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Site Index — Every Page on TekSure | TekSure"
        description="A complete index of every page on TekSure — tools, guides, hubs, and resources — grouped by section and searchable."
        path="/site-index"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'TekSure Site Index',
          description:
            'A human-readable sitemap of every section, hub, tool, and resource on TekSure.',
          url: 'https://teksure.com/site-index',
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto py-16 md:py-20 px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Map className="h-4 w-4" aria-hidden="true" />
              Site Index
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Everything on TekSure, All in One Place
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              A complete map of every page on the site — tools, guides, hubs, and resources.
              Use the search below, or jump straight to any section.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/60"
                aria-hidden="true"
              />
              <Input
                type="search"
                role="searchbox"
                aria-label="Filter the site index"
                placeholder="Search all pages... (e.g. Wi-Fi, scam, password, caregiver)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-base md:text-lg bg-card rounded-2xl border-border shadow-sm focus:border-primary/40 focus:shadow-md focus:shadow-primary/[0.06] transition-all"
              />
            </div>
            <p
              className="text-sm text-muted-foreground mt-4"
              aria-live="polite"
            >
              {q ? (
                <>
                  Showing <strong className="text-foreground">{filteredCount}</strong> of{' '}
                  <strong className="text-foreground">{totalPages}</strong> pages
                </>
              ) : (
                <>
                  <strong className="text-foreground">{totalPages}</strong> pages across{' '}
                  <strong className="text-foreground">{sections.length}</strong> sections
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section jump-nav */}
      {!q && (
        <nav
          aria-label="Jump to section"
          className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
        >
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ul className="flex flex-wrap gap-2 justify-center">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 text-sm font-medium text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {s.title}
                      <Badge
                        variant="outline"
                        className="ml-1 px-1.5 h-5 text-[11px] rounded-full bg-background/60"
                      >
                        {s.entries.length}
                      </Badge>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}

      {/* Sections */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {filteredSections.length === 0 && (
            <div className="text-center py-16" role="status">
              <p className="text-4xl mb-4" aria-hidden="true"></p>
              <p className="text-lg font-medium mb-2">No pages match your search</p>
              <p className="text-muted-foreground">
                Try a shorter or different search term.
              </p>
            </div>
          )}

          {filteredSections.map((section) => {
            const Icon = section.icon;
            const grouped = section.alphabetical
              ? groupAlphabetically(section.entries)
              : null;
            const letters = grouped ? Object.keys(grouped).sort() : [];

            return (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-32"
              >
                <header className="mb-6 pb-4 border-b border-border">
                  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold tracking-tight">
                    <Icon
                      className="h-7 w-7 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    {section.title}
                    <Badge
                      variant="outline"
                      className="rounded-full text-sm font-medium"
                    >
                      {section.entries.length}
                    </Badge>
                  </h2>
                  <p className="text-muted-foreground mt-2">{section.description}</p>
                </header>

                {grouped ? (
                  <div className="space-y-8">
                    {letters.map((letter) => (
                      <div key={letter}>
                        <h3 className="text-xl font-bold text-primary mb-3">
                          {letter}
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {grouped[letter].map((entry) => (
                            <EntryRow key={entry.to + entry.label} entry={entry} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {section.entries.map((entry) => (
                      <EntryRow key={entry.to + entry.label} entry={entry} />
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-border bg-muted/30 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Sparkles
            className="h-8 w-8 mx-auto text-primary"
            aria-hidden="true"
          />
          <h2 className="text-xl font-semibold">Looking for something and cannot find it?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Try our friendly AI helper — it knows every page on TekSure and can point you straight there.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link
              to="/tekbrain"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Ask TekBrain
            </Link>
            <Link
              to="/get-help"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border bg-card font-semibold hover:bg-accent/50 transition-colors"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Get Help
            </Link>
            <Link
              to="/accessibility"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border bg-card font-semibold hover:bg-accent/50 transition-colors"
            >
              <Accessibility className="h-4 w-4" aria-hidden="true" />
              Accessibility Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiteIndex;
