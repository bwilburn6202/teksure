import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Phone, Clock, Sparkles, ArrowRight, Brain, X,
  KeyRound, Wifi, HeartPulse, ArrowLeftRight, Type, Keyboard, Mail, AlertCircle, Languages, CreditCard,
  HelpCircle, Laptop, HardDrive, GraduationCap, Smartphone, ShieldCheck,
  MailCheck, Eye, Lock, ShieldAlert, WifiOff, Activity,
  Bluetooth, ClipboardCheck, Trash2,
  ShieldHalf, Sliders, KeySquare, Bell,
  Flag, Package, Bot, BarChart2, Users, Heart, Gift, Smile, MapPin, Award,
  FileSearch, Terminal, Shield, Receipt, Globe, Accessibility as AccessibilityIcon,
  Router, Tv, Signal, Video, Image as ImageIcon, FileCheck, PiggyBank,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/* ── Types ─────────────────────────────────────────────── */
type ToolCategory =
  | 'All'
  | 'Safety'
  | 'Setup'
  | 'Troubleshooting'
  | 'Money'
  | 'Learning'
  | 'Health'
  | 'Connectivity'
  | 'Accessibility';

type Difficulty = 'Easy' | 'Medium' | 'Advanced';

interface Tool {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string | null;
  color: string;
  bg: string;
  badge?: string;
  category: ToolCategory;
  difficulty: Difficulty;
  time: string;          // e.g. "5 min"
  featured?: boolean;
  newThisMonth?: boolean;
  keywords?: string;     // extra searchable text
}

/* ── Tool catalogue ─────────────────────────────────────
 * difficulty + time are rough estimates so cards can
 * communicate effort at-a-glance. Tweak as needed.
 * ─────────────────────────────────────────────────────── */
const tools: Tool[] = [
  /* ── Flagship / AI tools ─────────────────── */
  {
    title: 'TekBrain — Ask Anything',
    description: 'Ask any tech question in plain English and get a clear, step-by-step answer — no jargon.',
    icon: Brain,
    path: '/tekbrain',
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    badge: 'AI',
    category: 'Learning',
    difficulty: 'Easy',
    time: '2 min',
    featured: true,
    keywords: 'ai chatbot assistant help question answer',
  },
  {
    title: 'AI Tutor',
    description: 'Learn at your own pace with a friendly AI that adapts to your skill level.',
    icon: Bot,
    path: '/ai-tutor',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'AI',
    category: 'Learning',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Chat with Docs',
    description: 'Ask questions about tech-support documentation in plain English — AI reads Apple, Google, and Microsoft docs for you.',
    icon: FileSearch,
    path: '/tools/doc-browser',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'AI',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },

  /* ── Safety / Security ───────────────────── */
  {
    title: 'Scam Practice Simulator',
    description: 'Practice spotting real scam emails, texts, and calls in a safe environment. Get a Scam IQ score when you finish.',
    icon: ShieldAlert,
    path: '/tools/scam-simulator',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Popular',
    category: 'Safety',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
  },
  {
    title: 'Digital Footprint Scanner',
    description: 'See what the internet knows about you — and get a plan to shrink your public footprint.',
    icon: Eye,
    path: '/tools/digital-footprint-scanner',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Medium',
    time: '10 min',
    featured: true,
    newThisMonth: true,
  },
  {
    title: 'Is This a Scam?',
    description: 'Paste any message, email, or caller ID and find out instantly if it looks like a scam.',
    icon: ShieldAlert,
    path: '/tools/is-this-a-scam',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Popular',
    category: 'Safety',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Scam IQ Test',
    description: 'Take a quick quiz to measure how well you spot scams — get tips tailored to your weak spots.',
    icon: ShieldAlert,
    path: '/tools/scam-iq-test',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Quiz',
    category: 'Safety',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Privacy Settings Audit',
    description: 'Select your devices and apps, then walk through a personalized privacy checklist — with links to every setting.',
    icon: Eye,
    path: '/tools/privacy-audit',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Data Breach Checker',
    description: 'Learn if your email may have been exposed in a data breach — and get step-by-step instructions for what to do next.',
    icon: ShieldCheck,
    path: '/tools/data-breach-checker',
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Password Leak Checker',
    description: 'Check if your passwords have been leaked in a known breach, without ever revealing them.',
    icon: KeyRound,
    path: '/tools/password-leak-checker',
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Safety',
    category: 'Safety',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Password Generator',
    description: 'Generate strong, random passwords instantly — customizable length, symbols, and copy to clipboard.',
    icon: KeyRound,
    path: '/tools/password-generator',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Tool',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Password Phrase Generator',
    description: 'Make memorable but strong passphrases from real words — easier to remember than random characters.',
    icon: KeyRound,
    path: '/tools/password-phrase-generator',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Tool',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Safety',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Password Manager Guide',
    description: 'Learn what a password manager is and follow step-by-step setup instructions.',
    icon: Lock,
    path: '/tools/password-manager',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Safety',
    category: 'Safety',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: '2FA Setup Wizard',
    description: 'Set up two-factor authentication — the single most powerful thing you can do for security.',
    icon: KeySquare,
    path: '/tools/two-factor-setup',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Wizard',
    category: 'Safety',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Phishing URL Scanner',
    description: 'Paste any suspicious link and find out instantly if it\'s safe, risky, or a known phishing trap.',
    icon: ShieldAlert,
    path: '/tools/phishing-scanner',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Scanner',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'URL Safety Checker',
    description: 'Not sure if a link is safe? Paste it here for a plain-English verdict before you click.',
    icon: Globe,
    path: '/tools/url-safety-checker',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Scanner',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Email Security Check',
    description: '12-point email security audit — check your Gmail, Outlook, or Yahoo settings for vulnerabilities.',
    icon: Mail,
    path: '/tools/email-security-check',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Audit',
    category: 'Safety',
    difficulty: 'Medium',
    time: '10 min',
  },
  {
    title: 'Cybersecurity Scorecard',
    description: '13 quick yes/no questions. Get a grade and a personalized action plan.',
    icon: Lock,
    path: '/tools/cyber-scorecard',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Safety',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'App Permission Auditor',
    description: 'Find out which apps have access to your location, camera, and microphone.',
    icon: Sliders,
    path: '/tools/app-permissions',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Audit',
    category: 'Safety',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Parental Controls Wizard',
    description: 'Set up parental controls on any device — iPhone, Android, Windows, Mac, smart TV, and router.',
    icon: ShieldCheck,
    path: '/tools/parental-controls-wizard',
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Wizard',
    category: 'Safety',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: 'Child App Safety Checker',
    description: 'Check whether an app is safe and age-appropriate for your child — hidden features, privacy concerns, and more.',
    icon: ShieldCheck,
    path: '/tools/child-app-safety-checker',
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Scanner',
    category: 'Safety',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Safe Call Evaluator',
    description: 'Got a suspicious phone call? Answer 4 quick questions and find out if it was a scam — with clear steps on what to do next.',
    icon: Phone,
    path: '/tools/safe-call',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Checker',
    category: 'Safety',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Scam Phone Database',
    description: 'Look up a phone number to see if it\'s been reported as a scammer.',
    icon: Phone,
    path: '/tools/scam-phone-database',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Lookup',
    category: 'Safety',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Report a Scam',
    description: 'Report a scam in seconds — helps protect others.',
    icon: Flag,
    path: '/tools/scam-report',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Safety',
    category: 'Safety',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'VPN Setup Guide',
    description: 'What a VPN is, whether you need one, and how to set it up in under 10 minutes.',
    icon: ShieldHalf,
    path: '/tools/vpn-guide',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Guide',
    category: 'Safety',
    difficulty: 'Medium',
    time: '10 min',
  },
  {
    title: 'Tech Emergency Kit',
    description: 'A preparedness checklist for your digital life — passwords, emergency contacts, backups, and more.',
    icon: ShieldAlert,
    path: '/tools/tech-emergency-kit',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Checklist',
    category: 'Safety',
    difficulty: 'Easy',
    time: '15 min',
  },
  {
    title: 'Cyber AI Toolkit',
    description: 'Interactive browser-based security tools: password analyzer, hash generator, IOC extractor, encoding suite, and more.',
    icon: Terminal,
    path: '/tools/cyber-toolkit',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Advanced',
    category: 'Safety',
    difficulty: 'Advanced',
    time: '15 min',
  },
  {
    title: 'Security & OSINT Tools',
    description: 'Browse 400+ security modules, OSINT tools, GEOINT mapping resources, and curated collections in one searchable directory.',
    icon: Shield,
    path: '/tools/security-osint',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Advanced',
    category: 'Safety',
    difficulty: 'Advanced',
    time: '15 min',
  },

  /* ── Setup Wizards ───────────────────────── */
  {
    title: 'New Phone Setup Wizard',
    description: 'Got a new iPhone or Android? Walk through every setup step with clear instructions — from Apple ID to privacy settings.',
    icon: Smartphone,
    path: '/tools/new-phone-setup',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Wizard',
    category: 'Setup',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: 'Device Setup Checklist',
    description: 'Select your new device and get a complete setup checklist — security, accounts, apps, backup, and accessibility.',
    icon: ClipboardCheck,
    path: '/tools/device-setup-checklist',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Checklist',
    category: 'Setup',
    difficulty: 'Easy',
    time: '20 min',
  },
  {
    title: 'Router Setup Wizard',
    description: 'Set up a new router step-by-step — network name, password, and the security settings that matter.',
    icon: Router,
    path: '/tools/router-setup-wizard',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Wizard',
    category: 'Setup',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: 'Smart TV Setup Wizard',
    description: 'Get your new smart TV on WiFi, signed in, and apps installed — with privacy settings you\'ll actually want.',
    icon: Tv,
    path: '/tools/smart-tv-setup',
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'Wizard',
    category: 'Setup',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Meeting Setup Helper',
    description: 'Need to start or join a video call? Choose your platform and follow the guided steps.',
    icon: Video,
    path: '/tools/meeting-setup',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Helper',
    category: 'Setup',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Contact Backup Guide',
    description: 'Make sure your phone contacts are backed up and safe — step-by-step for iPhone and Android.',
    icon: Smartphone,
    path: '/tools/contact-backup',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Guide',
    category: 'Setup',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Data Backup Wizard',
    description: 'Personalized backup plan for your photos, documents, and contacts.',
    icon: HardDrive,
    path: '/tools/backup-wizard',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Wizard',
    category: 'Setup',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'WiFi QR Generator',
    description: 'Make a scannable QR code so visitors can join your WiFi without typing the password.',
    icon: Wifi,
    path: '/tools/wifi-qr-generator',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Tool',
    category: 'Setup',
    difficulty: 'Easy',
    time: '2 min',
  },

  /* ── Troubleshooting ─────────────────────── */
  {
    title: 'Interactive Troubleshooter',
    description: 'Answer yes/no questions and get guided step-by-step to the exact fix.',
    icon: HelpCircle,
    path: '/tools/troubleshooter',
    color: 'text-primary',
    bg: 'bg-primary/5',
    badge: 'Popular',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'WiFi Troubleshooter',
    description: 'Answer a few quick questions and follow a guided step-by-step path to fix your WiFi.',
    icon: WifiOff,
    path: '/tools/wifi-troubleshooter',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Guided',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Bluetooth Troubleshooter',
    description: 'Fix Bluetooth connection problems — guided step by step.',
    icon: Bluetooth,
    path: '/tools/bluetooth-troubleshooter',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Guided',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Printer Troubleshooter',
    description: 'Paper jam? Won\'t print? Walk through the most common printer problems in plain English.',
    icon: HelpCircle,
    path: '/tools/printer-troubleshooter',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Guided',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: "Can't Log In? Account Recovery",
    description: 'Locked out of Google, Apple, Facebook, Amazon, or Microsoft? Get step-by-step recovery instructions in plain English.',
    icon: KeyRound,
    path: '/tools/account-recovery',
    color: 'text-primary',
    bg: 'bg-primary/5 dark:bg-primary/10',
    badge: 'Recovery',
    category: 'Troubleshooting',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Error Message Decoder',
    description: 'Search 20 common error messages with plain-English explanations.',
    icon: AlertCircle,
    path: '/tools/error-decoder',
    color: 'text-destructive',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Reference',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Notification Decoder',
    description: 'Got a confusing popup or notification on your phone or computer? Look it up and get a plain-English explanation.',
    icon: Bell,
    path: '/tools/notification-decoder',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Reference',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'WiFi Password Finder',
    description: 'Forgot your WiFi password? Find it on your iPhone, Android, Windows, or Mac in 30 seconds.',
    icon: KeyRound,
    path: '/tools/wifi-password-finder',
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Guide',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Robocall Blocker Setup',
    description: 'Block spam calls using your carrier\'s free tools. Guides for AT&T, T-Mobile, Verizon, and all other carriers.',
    icon: Phone,
    path: '/tools/robocall-blocker',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Setup',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Warranty & Repair Finder',
    description: 'Check your device warranty and find authorised repair options.',
    icon: ShieldCheck,
    path: '/tools/warranty-checker',
    color: 'text-lime-600',
    bg: 'bg-lime-50 dark:bg-lime-950/30',
    badge: 'Lookup',
    category: 'Troubleshooting',
    difficulty: 'Easy',
    time: '3 min',
  },

  /* ── Money ──────────────────────────────── */
  {
    title: 'Bill Negotiator',
    description: 'Lower your internet, phone, or cable bill with our plain-English negotiation scripts.',
    icon: Receipt,
    path: '/tools/bill-negotiator',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Popular',
    category: 'Money',
    difficulty: 'Medium',
    time: '20 min',
    featured: true,
    newThisMonth: true,
  },
  {
    title: 'Bill Decoder',
    description: 'Confused by a charge on your internet, phone, or cable bill? Search any fee and get a plain-English explanation — plus whether you can get rid of it.',
    icon: Receipt,
    path: '/tools/bill-decoder',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Decoder',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Streaming Cost Calculator',
    description: 'Add up all your streaming services, see the total cost, and find money-saving alternatives — including free options.',
    icon: CreditCard,
    path: '/tools/streaming-calculator',
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'Calculator',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Subscription Tracker',
    description: 'Track every subscription you pay for — streaming, music, cloud storage, software. See your total monthly and annual spend.',
    icon: CreditCard,
    path: '/tools/subscription-tracker',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Tracker',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Subscription Auditor',
    description: 'Find subscriptions you\'ve forgotten about and see exactly how to cancel each one.',
    icon: Receipt,
    path: '/tools/subscription-auditor',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Audit',
    category: 'Money',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Tech Budget Planner',
    description: 'Track your monthly tech spending — internet, phone, streaming, and subscriptions — and find savings.',
    icon: PiggyBank,
    path: '/tools/tech-budget',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Planner',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Tech Setup Cost Estimator',
    description: 'Find out what it will cost to set up a home office, smart home, or streaming setup before you shop.',
    icon: PiggyBank,
    path: '/tools/tech-setup-cost-estimator',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Calculator',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Device Trade-In Estimator',
    description: 'Find out what your old phone, tablet, or laptop is worth — compare trade-in values across retailers.',
    icon: Smartphone,
    path: '/tools/trade-in-estimator',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Calculator',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Internet Plan Comparator',
    description: 'Compare home internet plans from every major provider side-by-side — find the best deal for your area.',
    icon: Wifi,
    path: '/tools/internet-plan-comparator',
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Compare',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Phone Plan Comparator',
    description: 'Compare phone plans from every major carrier side-by-side — find the best deal for your needs.',
    icon: Phone,
    path: '/tools/phone-plan-comparator',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Compare',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Credit Report Reader',
    description: 'Understand every section of your credit report — in plain English.',
    icon: FileCheck,
    path: '/tools/credit-report-reader',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Decoder',
    category: 'Money',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'EOB Decoder',
    description: 'Confused by a medical "Explanation of Benefits"? Paste or describe it and get a plain-English breakdown.',
    icon: FileCheck,
    path: '/tools/eob-decoder',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Decoder',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
  },

  /* ── Learning ────────────────────────────── */
  {
    title: 'Tech Comfort Quiz',
    description: 'Find your tech comfort level in 2 minutes — and get a personalized learning plan.',
    icon: Smile,
    path: '/tools/tech-comfort-quiz',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Popular',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
  },
  {
    title: 'Tech Confidence Score',
    description: 'Find out your true tech confidence level — and get a personalized learning plan.',
    icon: Brain,
    path: '/tools/confidence-score',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Digital Literacy Assessment',
    description: 'Take a 25-question self-assessment across 5 areas — get your skill level and a personalized learning plan.',
    icon: GraduationCap,
    path: '/tools/digital-literacy-assessment',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Learning',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Tech Glossary Quiz',
    description: 'Test your tech vocabulary with a fun quiz — 30+ questions with plain-English explanations after each answer.',
    icon: GraduationCap,
    path: '/tools/tech-glossary-quiz',
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Quiz',
    category: 'Learning',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Tech Jargon Translator',
    description: 'Type any confusing tech word and get a plain-English explanation.',
    icon: Languages,
    path: '/tools/jargon-translator',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Reference',
    category: 'Learning',
    difficulty: 'Easy',
    time: '1 min',
  },
  {
    title: 'Plain English Translator',
    description: 'Paste anything written in tech-speak and get a plain-English version you can actually understand.',
    icon: Languages,
    path: '/tools/plain-english-translator',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Translator',
    category: 'Learning',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Internet Safety Course',
    description: 'Five bite-sized lessons on spotting scams, strong passwords, and safe shopping.',
    icon: GraduationCap,
    path: '/tools/safety-course',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Course',
    category: 'Learning',
    difficulty: 'Easy',
    time: '20 min',
  },
  {
    title: 'Keyboard Shortcuts',
    description: 'Printable cheat sheets for Windows, Mac, browsers, email, and more.',
    icon: Keyboard,
    path: '/tools/keyboard-shortcuts',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Reference',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Quick Reference Cards',
    description: 'Printable cheat-sheet cards for shortcuts, safety tips, and troubleshooting.',
    icon: CreditCard,
    path: '/tools/quick-reference',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Printable',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Printable Guide Packs',
    description: 'Download themed guide bundles as a single print-ready document.',
    icon: Package,
    path: '/tools/guide-packs',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Printable',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'QR Code Explainer',
    description: 'Scan or paste any QR code to see where it really leads — before you follow it.',
    icon: ImageIcon,
    path: '/tools/qr-code-explainer',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Reference',
    category: 'Learning',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Email Writer Helper',
    description: 'Stuck on what to write? Describe your situation and get a polite, clear email you can copy.',
    icon: Mail,
    path: '/tools/email-writer-helper',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Helper',
    category: 'Learning',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Email Templates',
    description: '10 ready-to-use email templates for complaints, returns, and more.',
    icon: Mail,
    path: '/tools/email-templates',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Templates',
    category: 'Learning',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Device Chooser Quiz',
    description: 'Not sure whether to buy a tablet, laptop, or desktop? Get a personalized recommendation.',
    icon: Laptop,
    path: '/tools/device-chooser',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Device Comparison',
    description: 'Compare two devices side by side — price, battery life, ease of use.',
    icon: ArrowLeftRight,
    path: '/tools/device-comparison',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'Compare',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'App Recommender',
    description: 'Answer 3 questions about what you want to do — get personalized recommendations.',
    icon: Smartphone,
    path: '/tools/app-recommender',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Recommended',
    category: 'Learning',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Progress Report',
    description: 'Track your learning journey — guides completed, streak, and what\'s next.',
    icon: BarChart2,
    path: '/progress-report',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Progress',
    category: 'Learning',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Digital Skills Certificate',
    description: 'Earn a printable certificate as you complete guides.',
    icon: Award,
    path: '/certificate',
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Achievement',
    category: 'Learning',
    difficulty: 'Easy',
    time: '2 min',
  },

  /* ── Health (device + personal) ──────────── */
  {
    title: 'Phone Cleanup Wizard',
    description: 'Free up storage, clear junk, and optimize your phone — guided step-by-step for iPhone and Android.',
    icon: Trash2,
    path: '/tools/phone-cleanup',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Popular',
    category: 'Health',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
  },
  {
    title: 'Computer Cleanup Wizard',
    description: 'Speed up your Windows or Mac with a guided cleanup — storage, startup apps, browser, and more.',
    icon: Trash2,
    path: '/tools/computer-cleanup-wizard',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Wizard',
    category: 'Health',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: 'Digital Cleanup Wizard',
    description: 'Guided cleanup for your inbox, photos, apps, browser, and accounts. Earn a cleanup score when you finish.',
    icon: Trash2,
    path: '/tools/digital-cleanup',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Wizard',
    category: 'Health',
    difficulty: 'Easy',
    time: '20 min',
  },
  {
    title: 'App Cleanup Guide',
    description: 'Find and remove apps you no longer use — free up storage and reduce security risks.',
    icon: Trash2,
    path: '/tools/app-cleanup',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Guide',
    category: 'Health',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Storage Cleanup Wizard',
    description: 'Free up space with a step-by-step checklist — no tech knowledge needed.',
    icon: Trash2,
    path: '/tools/storage-cleanup',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Wizard',
    category: 'Health',
    difficulty: 'Easy',
    time: '15 min',
  },
  {
    title: 'Storage Optimizer',
    description: 'Free up space intelligently — find what\'s eating your storage and clear it safely.',
    icon: HardDrive,
    path: '/tools/storage-optimizer',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Tool',
    category: 'Health',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'File Organizer Guide',
    description: 'A step-by-step plan for turning a messy Downloads folder into a system that makes sense.',
    icon: HardDrive,
    path: '/tools/file-organizer-guide',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Guide',
    category: 'Health',
    difficulty: 'Medium',
    time: '20 min',
  },
  {
    title: 'Device Health Dashboard',
    description: 'Check your device\'s health score with simple tips to improve each area.',
    icon: Activity,
    path: '/tools/device-health',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Dashboard',
    category: 'Health',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Tech Health Quiz',
    description: '8 quick questions. Get a grade and personalized action steps.',
    icon: ClipboardCheck,
    path: '/tools/tech-health-quiz',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Health',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Tech Health Check',
    description: 'Take a quick 5-question quiz with color-coded results and tips.',
    icon: HeartPulse,
    path: '/tools/health-check',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Quiz',
    category: 'Health',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Device Age Checker',
    description: 'Find out if it\'s time to replace your phone, laptop, or tablet — with cost-vs-upgrade guidance.',
    icon: Smartphone,
    path: '/tools/device-age-checker',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Checker',
    category: 'Health',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Battery Optimizer',
    description: 'Make your phone or laptop battery last longer — settings tailored to your device.',
    icon: Activity,
    path: '/tools/battery-optimizer',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Tool',
    category: 'Health',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Screen Time Analyzer',
    description: 'Understand your phone usage — compare to averages and get tips for healthy screen habits.',
    icon: Smartphone,
    path: '/tools/screen-time',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Analyzer',
    category: 'Health',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Email Inbox Declutter',
    description: 'Organize your Gmail, Outlook, or Apple Mail inbox in under 20 minutes.',
    icon: MailCheck,
    path: '/tools/email-declutter',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Cleanup',
    category: 'Health',
    difficulty: 'Easy',
    time: '20 min',
  },

  /* ── Connectivity ───────────────────────── */
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get tips for improving slow connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Tool',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '2 min',
  },
  {
    title: 'Internet Speed Advisor',
    description: 'Find out if your internet is fast enough for what you do — and get a script for calling your provider if it is not.',
    icon: Wifi,
    path: '/tools/internet-speed-advisor',
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Advisor',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Internet Speed Needs',
    description: 'Find out exactly how fast your internet needs to be based on what you actually do online.',
    icon: Signal,
    path: '/tools/internet-speed-needs',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Calculator',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Internet Speed Doctor',
    description: 'Diagnose why your internet is slow and get targeted fixes — no more rebooting the router blindly.',
    icon: Signal,
    path: '/tools/internet-speed-doctor',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Doctor',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Home Network Map',
    description: 'Create a visual inventory of every device on your WiFi — phones, TVs, cameras, speakers, and more.',
    icon: Wifi,
    path: '/tools/home-network-map',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Tool',
    category: 'Connectivity',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'WiFi Coverage Planner',
    description: 'Map out your home WiFi coverage and find dead spots — with fixes.',
    icon: Wifi,
    path: '/tools/wifi-coverage-planner',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Tool',
    category: 'Connectivity',
    difficulty: 'Medium',
    time: '10 min',
  },
  {
    title: 'Family Tech Sharing',
    description: 'Share your TekSure access with up to 4 family members.',
    icon: Users,
    path: '/family-sharing',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Family',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Family Tech Planner',
    description: 'Set healthy screen-time, bedtime, and content rules for the whole family — share with everyone.',
    icon: Users,
    path: '/tools/family-tech-planner',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Planner',
    category: 'Connectivity',
    difficulty: 'Medium',
    time: '15 min',
  },
  {
    title: 'Caregiver Dashboard',
    description: 'Supporting a family member with tech? Book help on their behalf.',
    icon: Heart,
    path: '/caregiver',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Caregivers',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Find Local Help',
    description: 'Discover libraries, community groups, and repair cafes near you.',
    icon: MapPin,
    path: '/local-help',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Community',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Tech Gift Guide',
    description: 'Curated picks for seniors, parents, and children with no jargon.',
    icon: Gift,
    path: '/gift-guide',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Shopping',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Gift a Subscription',
    description: 'Give someone the gift of digital confidence.',
    icon: Gift,
    path: '/gift',
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Gift',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '3 min',
  },
  {
    title: 'Dealing with Tech Anxiety',
    description: 'Practical coping strategies for anyone who finds technology stressful.',
    icon: Smile,
    path: '/tech-anxiety',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Wellbeing',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Push Notifications',
    description: 'Get weekly tech tips, scam alerts, and new guide announcements.',
    icon: Bell,
    path: '/notifications',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Setup',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '1 min',
  },

  /* ── Accessibility ────────────────────────── */
  {
    title: 'Accessibility Check',
    description: 'Get tailored device settings to make tech easier based on your needs.',
    icon: AccessibilityIcon,
    path: '/tools/accessibility-check',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Personalized',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Accessibility Needs Finder',
    description: 'Answer a few questions and get device settings and apps matched to your abilities and preferences.',
    icon: AccessibilityIcon,
    path: '/tools/accessibility-needs-finder',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Finder',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '5 min',
  },
  {
    title: 'Accessibility Profile Builder',
    description: 'Build and save your accessibility profile once — then export settings to every device.',
    icon: AccessibilityIcon,
    path: '/tools/accessibility-profile-builder',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Builder',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '10 min',
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the settings button in the top navigation to adjust text size site-wide.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Built-in',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '1 min',
  },
];

/* ── Category definitions ──────────────────────────────── */
const categoryEmojis: Record<ToolCategory, string> = {
  All: '🛠️',
  Safety: '🔒',
  Setup: '🧰',
  Troubleshooting: '⚡',
  Money: '💰',
  Learning: '🎓',
  Health: '❤️',
  Connectivity: '📶',
  Accessibility: '♿',
};

const categories: ToolCategory[] = [
  'All',
  'Safety',
  'Setup',
  'Troubleshooting',
  'Money',
  'Learning',
  'Health',
  'Connectivity',
  'Accessibility',
];

/* ── Helpers ──────────────────────────────────────────── */
function difficultyColor(d: Difficulty): string {
  switch (d) {
    case 'Easy':     return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800';
    case 'Medium':   return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800';
    case 'Advanced': return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800';
  }
}

/* ── Tool card ────────────────────────────────────────── */
function ToolCard({ tool, highlight }: { tool: Tool; highlight?: boolean }) {
  const Icon = tool.icon;

  const inner = (
    <Card
      className={[
        'h-full transition-all duration-200 group',
        'hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/40',
        'focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2',
        highlight ? 'border-primary/30 bg-primary/[0.03]' : '',
      ].join(' ')}
    >
      <CardContent className="p-5 md:p-6 flex flex-col h-full min-h-[11rem]">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className={`h-12 w-12 rounded-xl ${tool.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
            aria-hidden="true"
          >
            <Icon className={`h-6 w-6 ${tool.color}`} />
          </div>
          {tool.badge && (
            <Badge variant="secondary" className="text-xs font-medium shrink-0">
              {tool.badge}
            </Badge>
          )}
        </div>
        <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
          {tool.title}
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-4 flex-1">
          {tool.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-auto">
          <span
            className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColor(
              tool.difficulty,
            )}`}
          >
            {tool.difficulty}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {tool.time}
          </span>
          {tool.path && (
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (!tool.path) {
    return (
      <div className="block h-full" aria-label={`${tool.title} (built-in)`}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      to={tool.path}
      className="block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`${tool.title} — ${tool.description} (${tool.difficulty}, ${tool.time})`}
    >
      {inner}
    </Link>
  );
}

/* ── Main Tools page ──────────────────────────────────── */
export default function Tools() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('All');

  const filtered = useMemo(() => {
    let results = tools;
    if (activeCategory !== 'All') {
      results = results.filter(t => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.keywords?.toLowerCase().includes(q) ?? false),
      );
    }
    return results;
  }, [search, activeCategory]);

  const featuredTools = useMemo(() => tools.filter(t => t.featured), []);
  const newTools = useMemo(() => tools.filter(t => t.newThisMonth), []);

  const isDefaultView = activeCategory === 'All' && !search.trim();

  return (
    <>
      <SEOHead
        title="Free Tech Tools & Utilities | TekSure"
        description="99+ free tech tools for everyday people — scam simulator, password leak checker, bill negotiator, WiFi troubleshooter, accessibility finder, and more."
        path="/tools"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'TekSure Free Tech Tools',
          description: 'Free interactive technology tools for everyday people — safety, setup, troubleshooting, money, learning, device health, connectivity, and accessibility.',
          url: 'https://teksure.com/tools',
          isPartOf: { '@type': 'WebSite', name: 'TekSure', url: 'https://teksure.com' },
          provider: { '@type': 'Organization', name: 'TekSure', url: 'https://teksure.com' },
        }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools' }]} />
        </div>

        {/* ── Hero ─────────────────────────────── */}
        <section className="border-b bg-gradient-to-b from-primary/[0.04] to-transparent">
          <div className="container py-14 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                {tools.length}+ free tools — all private, all free
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Find the right tool for your problem
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Scan a suspicious link, negotiate your bill, clean up your phone, or practice spotting scams — TekSure has a guided tool for it.
              </p>

              {/* Search ── larger touch target (h-14), clear button */}
              <div className="relative max-w-xl mx-auto">
                <label htmlFor="tool-search" className="sr-only">Search tools</label>
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none"
                  aria-hidden="true"
                />
                <Input
                  id="tool-search"
                  type="search"
                  placeholder="Try 'scam', 'WiFi', 'bill', or 'password'…"
                  className="pl-14 pr-12 h-14 text-base bg-card border-border/60 rounded-2xl shadow-sm focus:border-primary focus:shadow-md focus:shadow-primary/[0.08] transition-all"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="container py-10 pb-24">
          {/* ── Category chips ───────────────────── */}
          <nav aria-label="Tool categories" className="mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap no-scrollbar">
              {categories.map(cat => {
                const count = cat === 'All' ? tools.length : tools.filter(t => t.category === cat).length;
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={active}
                    className={[
                      'shrink-0 min-h-11 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium',
                      'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      active
                        ? 'bg-foreground text-background border-foreground shadow-sm'
                        : 'bg-card text-foreground border-border hover:bg-muted hover:border-foreground/20',
                    ].join(' ')}
                  >
                    <span aria-hidden="true">{categoryEmojis[cat]}</span>
                    <span>{cat}</span>
                    <span className={active ? 'text-background/70' : 'text-muted-foreground'}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* ── Featured + New (only in default view) ── */}
          {isDefaultView && (
            <>
              {featuredTools.length > 0 && (
                <section className="mb-14" aria-labelledby="featured-heading">
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h2 id="featured-heading" className="text-2xl font-bold">Featured tools</h2>
                    </div>
                    <p className="text-sm text-muted-foreground">Start here if you're new</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredTools.map(tool => (
                      <ToolCard key={tool.path ?? tool.title} tool={tool} highlight />
                    ))}
                  </div>
                </section>
              )}

              {newTools.length > 0 && (
                <section className="mb-14" aria-labelledby="new-heading">
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" aria-hidden="true">🆕</span>
                      <h2 id="new-heading" className="text-2xl font-bold">New this month</h2>
                    </div>
                    <p className="text-sm text-muted-foreground">Fresh in April 2026</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {newTools.map(tool => (
                      <ToolCard key={tool.path ?? tool.title} tool={tool} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          {/* ── Result count / results ──────────────── */}
          <section aria-live="polite" aria-atomic="true">
            {!isDefaultView && (
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
                {search.trim() && <> matching "<span className="font-medium text-foreground">{search}</span>"</>}
                {activeCategory !== 'All' && <> in {activeCategory}</>}
              </p>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-dashed rounded-2xl">
                <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
                <p className="text-lg font-semibold mb-1">No tools match that search</p>
                <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                  Try a different word, pick another category, or ask TekBrain in plain English.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Button
                    variant="outline"
                    onClick={() => { setSearch(''); setActiveCategory('All'); }}
                    className="min-h-11"
                  >
                    Reset filters
                  </Button>
                  <Button asChild className="min-h-11 gap-2">
                    <Link to="/tekbrain">
                      <Brain className="h-4 w-4" aria-hidden="true" />
                      Ask TekBrain
                    </Link>
                  </Button>
                </div>
              </div>
            ) : isDefaultView ? (
              /* Grouped by category ─ default view ─ */
              <div className="space-y-14">
                {(categories.filter(c => c !== 'All') as ToolCategory[]).map(cat => {
                  const catTools = tools.filter(t => t.category === cat);
                  if (catTools.length === 0) return null;
                  return (
                    <section key={cat} aria-labelledby={`cat-${cat}`}>
                      <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span className="text-2xl" aria-hidden="true">{categoryEmojis[cat]}</span>
                        <h2 id={`cat-${cat}`} className="text-2xl font-bold">{cat}</h2>
                        <Badge variant="secondary" className="text-xs">{catTools.length} tools</Badge>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {catTools.map(tool => (
                          <ToolCard key={tool.path ?? tool.title} tool={tool} />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : (
              /* Flat grid ─ filtered/search view ─ */
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map(tool => (
                  <ToolCard key={tool.path ?? tool.title} tool={tool} />
                ))}
              </div>
            )}
          </section>

          {/* ── Ask TekBrain CTA ─────────────────────── */}
          <div className="mt-20 relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-fuchsia-500/[0.04] to-primary/[0.06] p-8 md:p-12">
            <div className="relative max-w-2xl mx-auto text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Brain className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Can't find what you need?
              </h2>
              <p className="text-muted-foreground text-lg mb-7 max-w-xl mx-auto">
                Describe your tech problem in plain English and TekBrain will point you to the right tool, guide, or fix.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="min-h-12 text-base gap-2 rounded-xl shadow-sm shadow-primary/20">
                  <Link to="/tekbrain">
                    Ask TekBrain
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 text-base gap-2 rounded-xl">
                  <Link to="/get-help">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Talk to a human
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
