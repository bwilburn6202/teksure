import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import {
  KeyRound, Wifi, Wrench, HeartPulse, ArrowLeftRight, Type, Keyboard, Mail, AlertCircle, Languages, CreditCard,
  HelpCircle, Laptop, HardDrive, GraduationCap, Smartphone, ShieldCheck,
  MailCheck, Eye, Lock, ShieldAlert, WifiOff, Activity,
  Bluetooth, ClipboardCheck, Trash2,
  ShieldHalf, Sliders, KeySquare, Bell,
  Brain, Flag, Package, Bot, BarChart2, Users, Heart, Gift, Smile, MapPin, Award,
} from 'lucide-react';

const tools = [
  {
    title: 'Phishing URL Scanner',
    description: 'Paste any suspicious link and find out instantly if it\'s safe, risky, or a known phishing trap — all analysed privately in your browser.',
    icon: ShieldAlert,
    path: '/tools/phishing-scanner',
    color: 'text-red-500',
    badge: 'New',
  },
  {
    title: 'WiFi Troubleshooter',
    description: 'Answer a few quick questions and follow a guided step-by-step path to fix your WiFi — no router manual needed.',
    icon: WifiOff,
    path: '/tools/wifi-troubleshooter',
    color: 'text-blue-500',
    badge: 'New',
  },
  {
    title: 'Cybersecurity Scorecard',
    description: '13 quick yes/no questions across passwords, devices, network, and email safety. Get a grade and a personalised action plan.',
    icon: Lock,
    path: '/tools/cyber-scorecard',
    color: 'text-violet-600',
    badge: 'New',
  },
  {
    title: 'Accessibility Check',
    description: 'Answer 10 questions about your vision, hearing, motor skills, and cognitive preferences — then get tailored device settings to make tech easier.',
    icon: Eye,
    path: '/tools/accessibility-check',
    color: 'text-indigo-500',
    badge: 'New',
  },
  {
    title: 'Email Inbox Declutter',
    description: 'A step-by-step guide to unsubscribing, archiving, and organising your Gmail, Outlook, or Apple Mail inbox in under 20 minutes.',
    icon: MailCheck,
    path: '/tools/email-declutter',
    color: 'text-teal-500',
    badge: 'New',
  },
  {
    title: 'Device Health Dashboard',
    description: 'Check your device\'s health score across storage, security, battery, network, performance, and privacy — with simple tips to improve each area.',
    icon: Activity,
    path: '/tools/device-health',
    color: 'text-emerald-500',
    badge: 'New',
  },
  {
    title: 'Bluetooth Troubleshooter',
    description: 'Fix Bluetooth connection problems with headphones, speakers, keyboards, and more — guided step by step with simple yes/no questions.',
    icon: Bluetooth,
    path: '/tools/bluetooth-troubleshooter',
    color: 'text-blue-500',
    badge: 'New',
  },
  {
    title: 'Tech Health Quiz',
    description: '8 quick questions covering security, backup, privacy, battery, and scam awareness. Get a grade and personalised action steps.',
    icon: ClipboardCheck,
    path: '/tools/tech-health-quiz',
    color: 'text-violet-500',
    badge: 'New',
  },
  {
    title: 'Storage Cleanup Wizard',
    description: 'Free up space on your Windows PC, Mac, iPhone, or Android phone with a step-by-step checklist — no tech knowledge needed.',
    icon: Trash2,
    path: '/tools/storage-cleanup',
    color: 'text-orange-500',
    badge: 'New',
  },
  {
    title: 'VPN Setup Guide',
    description: 'Learn what a VPN is, whether you need one, and how to set it up in under 10 minutes. Includes trusted free and paid recommendations.',
    icon: ShieldHalf,
    path: '/tools/vpn-guide',
    color: 'text-teal-600',
    badge: 'New',
  },
  {
    title: 'App Permission Auditor',
    description: 'Find out which apps have access to your location, camera, microphone, and contacts — then learn how to revoke risky permissions.',
    icon: Sliders,
    path: '/tools/app-permissions',
    color: 'text-rose-500',
    badge: 'New',
  },
  {
    title: '2FA Setup Wizard',
    description: 'Set up two-factor authentication on Google, Apple, Facebook, Amazon, and your bank — the single most powerful thing you can do for account security.',
    icon: KeySquare,
    path: '/tools/two-factor-setup',
    color: 'text-indigo-600',
    badge: 'New',
  },
  {
    title: 'Push Notifications',
    description: 'Opt in to get weekly tech tips, scam alerts, and new guide announcements right on your phone or browser.',
    icon: Bell,
    path: '/notifications',
    color: 'text-amber-500',
    badge: 'New',
  },
  {
    title: 'Interactive Troubleshooter',
    description: 'Answer yes/no questions and get guided step-by-step to the exact fix for WiFi, printers, passwords, phones, and more.',
    icon: HelpCircle,
    path: '/tools/troubleshooter',
    color: 'text-primary',
    badge: 'Popular',
  },
  {
    title: 'Device Chooser Quiz',
    description: 'Not sure whether to buy a tablet, laptop, or desktop? Answer 5 quick questions for a personalised recommendation.',
    icon: Laptop,
    path: '/tools/device-chooser',
    color: 'text-violet-500',
    badge: 'Buying Guide',
  },
  {
    title: 'Data Backup Wizard',
    description: 'Step-by-step personalised backup plan for your photos, documents, and contacts — covering cloud, USB drives, and more.',
    icon: HardDrive,
    path: '/tools/backup-wizard',
    color: 'text-sky-500',
    badge: 'Safety',
  },
  {
    title: 'Internet Safety Course',
    description: 'Five bite-sized lessons on spotting scams, strong passwords, safe shopping, privacy, and what to do when things go wrong.',
    icon: GraduationCap,
    path: '/tools/safety-course',
    color: 'text-amber-500',
    badge: 'Course',
  },
  {
    title: 'App Recommender',
    description: 'Not sure which app to use? Answer 3 questions about what you want to do and your device — get personalised recommendations.',
    icon: Smartphone,
    path: '/tools/app-recommender',
    color: 'text-rose-500',
    badge: 'Recommended',
  },
  {
    title: 'Warranty & Repair Finder',
    description: 'Check how long your device warranty lasts, how to verify it\'s still active, and find authorised repair options.',
    icon: ShieldCheck,
    path: '/tools/warranty-checker',
    color: 'text-lime-600',
    badge: 'Support',
  },
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback, a visual strength meter, and a security checklist.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
    badge: 'Safety',
  },
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get practical tips for improving slow or unreliable connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
    badge: 'Connectivity',
  },
  {
    title: 'Tech Health Check',
    description: 'Take a quick 5-question quiz to find out how healthy your device is — with colour-coded results and tips.',
    icon: HeartPulse,
    path: '/tools/health-check',
    color: 'text-rose-500',
    badge: 'Quiz',
  },
  {
    title: 'Device Comparison',
    description: 'Compare two devices side by side — price, battery life, ease of use, storage, and our verdict.',
    icon: ArrowLeftRight,
    path: '/tools/device-compare',
    color: 'text-purple-500',
    badge: 'Devices',
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the A+/A- button in the top navigation bar to cycle between Normal → Large → XL text sizes.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    badge: 'Beginner',
  },
  {
    title: 'Keyboard Shortcuts',
    description: 'Printable cheat sheets for Windows, Mac, browsers, email, Word/Docs, and Excel/Sheets.',
    icon: Keyboard,
    path: '/tools/keyboard-shortcuts',
    color: 'text-orange-500',
    badge: 'Reference',
  },
  {
    title: 'Email Templates',
    description: '10 ready-to-use email templates for complaints, returns, job enquiries, IT support, and more.',
    icon: Mail,
    path: '/tools/email-templates',
    color: 'text-teal-500',
    badge: 'Productivity',
  },
  {
    title: 'Error Message Decoder',
    description: 'Search 20 common error messages and get plain-English explanations with 3 practical fixes each.',
    icon: AlertCircle,
    path: '/tools/error-decoder',
    color: 'text-destructive',
    badge: 'Troubleshooting',
  },
  {
    title: 'Tech Jargon Translator',
    description: 'Type any confusing tech word and get a plain-English explanation anyone can understand.',
    icon: Languages,
    path: '/tools/jargon-translator',
    color: 'text-cyan-500',
    badge: 'Reference',
  },
  {
    title: 'Quick Reference Cards',
    description: 'Printable cheat-sheet cards for shortcuts, safety tips, and troubleshooting — stick them next to your screen.',
    icon: CreditCard,
    path: '/tools/quick-reference',
    color: 'text-emerald-500',
    badge: 'Printable',
  },
  {
    title: 'Tech Confidence Score',
    description: 'Take a 10-question quiz to find out your true tech confidence level — and get a personalised learning plan matched to your result.',
    icon: Brain,
    path: '/tools/confidence-score',
    color: 'text-violet-500',
    badge: 'Quiz',
  },
  {
    title: 'Report a Scam',
    description: 'Spotted a scam? Report it in seconds — your report helps protect others and is forwarded to the relevant authorities.',
    icon: Flag,
    path: '/tools/scam-report',
    color: 'text-red-500',
    badge: 'Safety',
  },
  {
    title: 'Printable Guide Packs',
    description: 'Download themed guide bundles as a single print-ready document — perfect for keeping by the computer or gifting to someone who prefers paper.',
    icon: Package,
    path: '/tools/guide-packs',
    color: 'text-amber-500',
    badge: 'Printable',
  },
  {
    title: 'AI Tutor',
    description: 'Learn at your own pace with a friendly AI that adapts to your skill level — ask anything about tech and get a clear, plain-English answer.',
    icon: Bot,
    path: '/ai-tutor',
    color: 'text-cyan-500',
    badge: 'AI',
  },
  {
    title: 'Progress Report',
    description: 'Track your learning journey — see how many guides you\'ve completed, your streak, confidence score, and what to tackle next.',
    icon: BarChart2,
    path: '/progress-report',
    color: 'text-blue-500',
    badge: 'Learning',
  },
  {
    title: 'Family Tech Sharing',
    description: 'Share your TekSure access with up to 4 family members — each gets their own account, progress tracking, and separate login.',
    icon: Users,
    path: '/family-sharing',
    color: 'text-indigo-500',
    badge: 'Family',
  },
  {
    title: 'Caregiver Dashboard',
    description: 'Supporting a family member with tech? Book help on their behalf, share guides, and access our tips for tech caregivers.',
    icon: Heart,
    path: '/caregiver',
    color: 'text-pink-500',
    badge: 'Caregivers',
  },
  {
    title: 'Tech Gift Guide',
    description: 'Find the perfect tech gift for any budget — curated picks for seniors, parents, and children with no jargon.',
    icon: Gift,
    path: '/gift-guide',
    color: 'text-rose-500',
    badge: 'Gifts',
  },
  {
    title: 'Dealing with Tech Anxiety',
    description: 'Practical coping strategies, reassuring community stories, and calming resources for anyone who finds technology stressful.',
    icon: Smile,
    path: '/tech-anxiety',
    color: 'text-teal-500',
    badge: 'Wellbeing',
  },
  {
    title: 'Find Local Help',
    description: 'Discover libraries, community groups, adult education courses, and repair cafes near you that can help with technology in person.',
    icon: MapPin,
    path: '/local-help',
    color: 'text-green-600',
    badge: 'Community',
  },
  {
    title: 'Digital Skills Certificate',
    description: 'Earn a printable certificate as you complete guides — a great way to celebrate your progress and share your achievement.',
    icon: Award,
    path: '/certificate',
    color: 'text-amber-600',
    badge: 'Achievement',
  },
  {
    title: 'Gift a Subscription',
    description: 'Give someone the gift of digital confidence — a TekSure subscription makes a thoughtful present for any occasion.',
    icon: Gift,
    path: '/gift',
    color: 'text-pink-600',
    badge: 'Gift',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function Tools() {
  return (
    <>
      <SEOHead
        title="Tools & Utilities | TekSure"
        description="Free tech tools — password checker, WiFi speed test, health check quiz, device comparison, and more."
        path="/tools"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-16 pb-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-border pb-8 mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Tools &amp; Utilities
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl">
              Over 30 free interactive tools to help you check your passwords, test your WiFi, quiz your device health,
              compare gadgets, and more. All private, all free.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tools.map((tool, i) => {
              const content = (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`h-10 w-10 rounded-xl bg-primary/[0.07] flex items-center justify-center`}>
                      <tool.icon className={`h-5 w-5 ${tool.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {tool.badge}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-base mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </motion.div>
              );

              if (!tool.path) return <div key={i}>{content}</div>;

              return (
                <Link key={tool.path} to={tool.path} className="group">
                  {content}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
