import { Link } from 'react-router-dom';
import {
  HelpCircle, Calendar, Bot, BookOpen, Zap, Lightbulb, BookOpenCheck,
  Newspaper, Rss, Wrench, ShieldAlert, ShieldCheck, Lock,
  MessageSquare, MapPin, Heart, Info, CreditCard, Phone, Mail,
  LogIn, GraduationCap, LayoutDashboard, KeyRound, Wifi, Laptop,
  HardDrive, Smartphone, Languages, Keyboard, AlertCircle, Eye,
  Activity, Bluetooth, Trash2, Sliders, KeySquare, Brain, Flag,
  Package, BarChart2, Users, Smile, Award, Bell,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Section data ────────────────────────── */
interface SectionLink {
  to: string;
  label: string;
  icon: React.ElementType;
}

interface Section {
  title: string;
  description: string;
  icon: React.ElementType;
  links: SectionLink[];
}

const sections: Section[] = [
  {
    title: 'Get Help',
    description: 'Reach out to a real person or our friendly AI assistant.',
    icon: HelpCircle,
    links: [
      { to: '/get-help', label: 'Get Help', icon: HelpCircle },
      { to: '/book', label: 'Book a Technician', icon: Calendar },
      { to: '/ai-tutor', label: 'Talk to AI Tutor', icon: Bot },
      { to: '/my-requests', label: 'My Requests', icon: MessageSquare },
    ],
  },
  {
    title: 'Learn',
    description: 'Free guides, tips, and tutorials written in plain language.',
    icon: BookOpen,
    links: [
      { to: '/guides', label: 'All Guides', icon: BookOpen },
      { to: '/quick-fixes', label: 'Quick Fixes', icon: Zap },
      { to: '/tips', label: 'Tips & Tricks', icon: Lightbulb },
      { to: '/glossary', label: 'Glossary', icon: BookOpenCheck },
      { to: '/blog', label: 'Blog', icon: Newspaper },
      { to: '/news', label: 'News', icon: Rss },
      { to: '/webinars', label: 'Webinars', icon: GraduationCap },
      { to: '/device-hub', label: 'Device Hub', icon: Laptop },
    ],
  },
  {
    title: 'Tools',
    description: 'Interactive wizards and checkers to solve common problems.',
    icon: Wrench,
    links: [
      { to: '/tools', label: 'All Tools', icon: Wrench },
      { to: '/tools/wifi-troubleshooter', label: 'WiFi Troubleshooter', icon: Wifi },
      { to: '/tools/wifi-speed', label: 'WiFi Speed Test', icon: Wifi },
      { to: '/tools/password-strength', label: 'Password Checker', icon: KeyRound },
      { to: '/tools/password-manager', label: 'Password Manager Guide', icon: Lock },
      { to: '/tools/url-safety-checker', label: 'URL Safety Checker', icon: ShieldAlert },
      { to: '/tools/backup-wizard', label: 'Backup Wizard', icon: HardDrive },
      { to: '/tools/troubleshooter', label: 'Interactive Troubleshooter', icon: HelpCircle },
      { to: '/tools/device-chooser', label: 'Device Chooser Quiz', icon: Laptop },
      { to: '/tools/device-compare', label: 'Device Comparison', icon: Laptop },
      { to: '/tools/device-health', label: 'Device Health Dashboard', icon: Activity },
      { to: '/tools/bluetooth-troubleshooter', label: 'Bluetooth Troubleshooter', icon: Bluetooth },
      { to: '/tools/storage-cleanup', label: 'Storage Cleanup', icon: Trash2 },
      { to: '/tools/app-recommender', label: 'App Recommender', icon: Smartphone },
      { to: '/tools/app-permissions', label: 'App Permission Auditor', icon: Sliders },
      { to: '/tools/email-declutter', label: 'Email Declutter', icon: Mail },
      { to: '/tools/email-templates', label: 'Email Templates', icon: Mail },
      { to: '/tools/error-decoder', label: 'Error Decoder', icon: AlertCircle },
      { to: '/tools/tech-jargon-translator', label: 'Tech Jargon Translator', icon: Languages },
      { to: '/tools/keyboard-shortcuts', label: 'Keyboard Shortcuts', icon: Keyboard },
      { to: '/tools/quick-reference', label: 'Quick Reference Cards', icon: CreditCard },
      { to: '/tools/health-check', label: 'Tech Health Check', icon: Activity },
      { to: '/tools/tech-health-quiz', label: 'Tech Health Quiz', icon: Brain },
      { to: '/tools/confidence-score', label: 'Confidence Score', icon: Brain },
      { to: '/tools/two-factor-setup', label: '2FA Setup Wizard', icon: KeySquare },
      { to: '/tools/vpn-guide', label: 'VPN Guide', icon: Lock },
      { to: '/tools/accessibility-check', label: 'Accessibility Check', icon: Eye },
      { to: '/tools/safety-course', label: 'Safety Course', icon: GraduationCap },
      { to: '/tools/warranty-checker', label: 'Warranty Checker', icon: ShieldCheck },
      { to: '/tools/scam-report', label: 'Report a Scam', icon: Flag },
      { to: '/tools/guide-packs', label: 'Printable Guide Packs', icon: Package },
      { to: '/tools/scam-simulator', label: 'Scam Practice Simulator', icon: ShieldAlert },
      { to: '/tools/privacy-audit', label: 'Privacy Settings Audit', icon: Eye },
      { to: '/tools/streaming-calculator', label: 'Streaming Cost Calculator', icon: CreditCard },
      { to: '/tools/data-breach-checker', label: 'Data Breach Checker', icon: ShieldCheck },
      { to: '/tools/new-phone-setup', label: 'New Phone Setup Wizard', icon: Smartphone },
      { to: '/tools/subscription-auditor', label: 'Subscription Auditor', icon: CreditCard },
      { to: '/tools/internet-speed-advisor', label: 'Internet Speed Advisor', icon: Wifi },
      { to: '/tools/digital-cleanup', label: 'Digital Cleanup Wizard', icon: Trash2 },
      { to: '/tools/device-setup-checklist', label: 'Device Setup Checklist', icon: Laptop },
      { to: '/tools/tech-glossary-quiz', label: 'Tech Glossary Quiz', icon: GraduationCap },
      { to: '/tools/notification-decoder', label: 'Notification Decoder', icon: Bell },
      { to: '/tools/safe-call', label: 'Safe Call Evaluator', icon: Phone },
      { to: '/tools/bill-decoder', label: 'Bill Decoder', icon: CreditCard },
    ],
  },
  {
    title: 'Safety',
    description: 'Stay safe online with scam alerts, security tools, and cyber scorecards.',
    icon: ShieldAlert,
    links: [
      { to: '/safety/scam-alerts', label: 'Scam Alerts', icon: ShieldAlert },
      { to: '/tools/cyber-scorecard', label: 'Cyber Scorecard', icon: Lock },
      { to: '/tools/cyber-toolkit', label: 'Cyber Toolkit', icon: ShieldCheck },
      { to: '/cybersec', label: 'CyberSec Hub', icon: ShieldAlert },
      { to: '/safety/parental-controls', label: 'Parental Controls', icon: Users },
      { to: '/tools/scam-simulator', label: 'Scam Practice Simulator', icon: ShieldAlert },
      { to: '/tools/privacy-audit', label: 'Privacy Settings Audit', icon: Eye },
      { to: '/tools/data-breach-checker', label: 'Data Breach Checker', icon: ShieldCheck },
      { to: '/emergency-help', label: 'Emergency Help', icon: Phone },
    ],
  },
  {
    title: 'Community',
    description: 'Connect with other learners, find local help, or support a loved one.',
    icon: MessageSquare,
    links: [
      { to: '/forum', label: 'Forum', icon: MessageSquare },
      { to: '/local-help', label: 'Local Help', icon: MapPin },
      { to: '/caregiver', label: 'Caregiver Resources', icon: Heart },
      { to: '/community/ambassadors', label: 'Ambassadors', icon: Award },
      { to: '/family-sharing', label: 'Family Sharing', icon: Users },
    ],
  },
  {
    title: 'About',
    description: 'Learn more about TekSure, how it works, and how to reach us.',
    icon: Info,
    links: [
      { to: '/about', label: 'About Us', icon: Info },
      { to: '/how-it-works', label: 'How It Works', icon: Lightbulb },
      { to: '/technicians', label: 'Our Technicians', icon: Phone },
      { to: '/roadmap', label: 'Roadmap', icon: BarChart2 },
      { to: '/changelog', label: 'Changelog', icon: Rss },
      { to: '/sources', label: 'Our Sources', icon: BookOpenCheck },
      { to: '/privacy', label: 'Privacy Policy', icon: Lock },
    ],
  },
  {
    title: 'Account',
    description: 'Sign in, track your progress, and manage your learning path.',
    icon: LogIn,
    links: [
      { to: '/login', label: 'Sign In', icon: LogIn },
      { to: '/signup', label: 'Create Account', icon: LogIn },
      { to: '/my-path', label: 'My Learning Path', icon: GraduationCap },
      { to: '/customer', label: 'Customer Dashboard', icon: LayoutDashboard },
      { to: '/profile', label: 'Profile', icon: LogIn },
      { to: '/progress-report', label: 'Progress Report', icon: BarChart2 },
      { to: '/favorites', label: 'Favorites', icon: Heart },
      { to: '/notifications', label: 'Notifications', icon: Bell },
      { to: '/certificate', label: 'Certificates', icon: Award },
    ],
  },
];


/* ── Main component ──────────────────────── */
export default function Explore() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Explore Everything on TekSure"
        description="Find every page, tool, and guide on TekSure. A complete sitemap designed for easy browsing."
        path="/explore"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Header */}
      <section className="border-b">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            >
              Explore TekSure
            </h1>
            <p
              className="text-muted-foreground text-lg"
            >
              Everything we offer, all in one place. Click any link to jump straight there.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="container py-10 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, i) => {
            const SectionIcon = section.icon;
            return (
              <div
                key={section.title}
              >
                <Card className="rounded-2xl border border-border bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <SectionIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">{section.title}</h2>
                        <p className="text-xs text-muted-foreground">{section.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-1 gap-y-0.5">
                      {section.links.map((link, j) => {
                        const LinkIcon = link.icon;
                        return (
                          <Link
                            key={link.to + link.label}
                            to={link.to}
                            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors min-h-[44px]"
                          >
                            <LinkIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center p-10 rounded-2xl bg-muted/50 border border-border"
        >
          <h2 className="text-xl font-bold mb-2">Not sure where to start?</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
            Take our quick onboarding quiz and we'll point you to the perfect guides for your skill level.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Smile className="h-4 w-4" /> Take the Quiz
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
