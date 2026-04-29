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
  FileSearch, Terminal, Shield, Receipt, Globe, Accessibility as AccessibilityIcon, Printer,
  Router, Tv, Signal, Video, Image as ImageIcon, FileCheck, PiggyBank, DollarSign,
  Newspaper, ChefHat, Car, Landmark, Thermometer, BookOpen, Cake,
  Siren, HandHeart, Calculator, Inbox, Library, Gavel, Headphones, Mic,
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
export type ToolCategory =
  | 'All'
  | 'Safety'
  | 'Setup'
  | 'Troubleshooting'
  | 'Money'
  | 'Learning'
  | 'Health'
  | 'Connectivity'
  | 'Accessibility'
  | 'Entertainment'
  | 'Family';

export type Difficulty = 'Easy' | 'Medium' | 'Advanced';

export interface Tool {
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
export const tools: Tool[] = [
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
  {
    title: 'Tech Jargon Translator',
    description: 'Paste any tech email or message and get it in plain English. 200+ term dictionary, message translator, and error code decoder.',
    icon: Languages,
    path: '/tools/tech-jargon-translator',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
    newThisMonth: true,
    keywords: 'jargon dictionary glossary translate plain english error code decoder 404 500 phishing bandwidth vpn wifi',
  },
  {
    title: 'Tech Vocab Flashcards',
    description: 'Anki-style spaced-repetition flashcards for 100+ everyday tech words. Learn 10 a day, build a streak, and stop feeling lost when someone says "cache" or "VPN".',
    icon: Brain,
    path: '/practice/vocab-flashcards',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
    newThisMonth: true,
    keywords: 'flashcards vocabulary spaced repetition anki learn words tech terms glossary definitions study quiz memorize daily streak',
  },

  /* ── Family / Grief & Aftercare ─────────── */
  {
    title: 'Digital Estate Binder',
    description: "A printable binder for organizing every account, password hint, and final wish — so your family isn't left guessing. 12 sections, fills online or by hand, saves on your own device.",
    icon: BookOpen,
    path: '/printables/digital-estate-binder',
    color: 'text-violet-700',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Printable',
    category: 'Family',
    difficulty: 'Medium',
    time: '60 min',
    featured: true,
    newThisMonth: true,
    keywords: 'digital estate binder legacy planning after death will executor power of attorney POA final wishes burial cremation memorial obituary eulogy pets letters to loved ones password manager bitwarden 1password crypto seed phrase safe deposit box fireproof safe family survivors grief aftercare inheritance probate attorney lawyer insurance policy 401k IRA retirement bank accounts credit cards mortgage loans',
  },
  {
    title: 'Caregiver Planner',
    description: "A printable 8-page pack to organize an aging parent's tech, health, contacts, and care plan. Fill once, keep updated, store in a fireproof box.",
    icon: HandHeart,
    path: '/printables/caregiver-planner',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Printable',
    category: 'Family',
    difficulty: 'Easy',
    time: '20 min',
    featured: true,
    newThisMonth: true,
    keywords: 'caregiver aging parent mom dad adult child printable planner pack medical snapshot medication list device inventory account logins services subscriptions contact tree care team wishes preferences POA power of attorney executor DNR organ donor advance directive fireproof box end of life',
  },
  {
    title: 'Grief & Digital Aftercare',
    description: "A gentle, senior-friendly guide for handling a loved one's digital life after they pass — accounts, photos, devices, and final wishes. No timeline, no pressure.",
    icon: Heart,
    path: '/tools/grief-tech-helper',
    color: 'text-violet-700',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Family',
    difficulty: 'Easy',
    time: '30 min',
    featured: true,
    newThisMonth: true,
    keywords: 'grief death bereavement after passes digital afterlife estate memorialize deceased inactive account manager apple digital legacy google facebook instagram twitter x linkedin amazon microsoft next of kin cryptocurrency seed phrase photos google takeout scam obituary inheritance widow widower griefshare samhsa therapist funeral death certificate social security executor probate',
  },

  /* ── Safety / Security ───────────────────── */
  {
    title: 'State AG Scam Lookup',
    description: "Find your state's Attorney General consumer protection hotline, online complaint form, and elder-abuse resources — plus which federal agency to file with.",
    icon: Gavel,
    path: '/tools/state-ag-scam-lookup',
    color: 'text-blue-800',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'attorney general AG consumer protection report scam complaint FTC FBI IC3 CFPB Medicare Social Security SSA identity theft elder abuse adult protective services APS 211 small claims do not call state hotline fraud senior abuse robocalls',
  },
  {
    title: 'Emergency Info Card',
    description: 'Build a printable wallet card, fridge sheet, and phone lockscreen with your meds, allergies, and emergency contacts. All data stays on your device.',
    icon: Siren,
    path: '/tools/emergency-info-card',
    color: 'text-red-700',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'emergency ICE in case of emergency medical info card wallet fridge lockscreen paramedic 911 medications allergies blood type DNR organ donor pets first responder printable PDF',
  },
  {
    title: 'Social Media — Safe & Sane',
    description: 'Platform-by-platform privacy and scam defense for Facebook, Instagram, TikTok, X, YouTube, LinkedIn, and NextDoor. In plain English.',
    icon: Users,
    path: '/tools/social-media-safety',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '15 min',
    newThisMonth: true,
    keywords: 'social media facebook instagram tiktok twitter x youtube linkedin nextdoor privacy scam hacked report block DM',
  },
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
    title: 'Phishing Practice Inbox',
    description: 'Safe-practice email inbox with 20 messages mixed real + fake. Can you spot the scams? No real links, nothing affects your accounts.',
    icon: Inbox,
    path: '/practice/phishing-inbox',
    color: 'text-blue-700',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'phishing inbox email practice scam fake spot red flags sender url hover teachable apple id medicare usps nigerian irs zelle facebook',
  },
  {
    title: 'Suspicious Call Simulator',
    description: 'Practice hanging up on scam calls — grandkid emergency, IRS, fake Microsoft, romance, and more. Branching choices with coaching.',
    icon: Phone,
    path: '/practice/suspicious-call',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'phone call scam IRS grandkid medicare microsoft romance sweepstakes robocall practice simulator branching voice',
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
    title: 'Fake News Checker',
    description: 'A 10-step walkthrough for checking whether a news story, meme, or social post is real — with fact-check links and AI-fake tips.',
    icon: Newspaper,
    path: '/tools/fake-news-checker',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '8 min',
    featured: true,
    newThisMonth: true,
    keywords: 'fake news misinformation propaganda hoax fact check snopes politifact reuters ap deepfake ai generated media bias viral headline share verify',
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
    title: 'Scam IQ Quiz — 20 Scenarios',
    description: '20 realistic scam scenarios across robocalls, texts, emails, social media, and in-person QR codes. Earn a badge and a gap-by-channel report.',
    icon: ShieldCheck,
    path: '/quizzes/scam-iq',
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '8 min',
    featured: true,
    newThisMonth: true,
    keywords: 'scam quiz test defense robocall text email social media QR deepfake romance IRS Medicare Zelle phishing smishing vishing badge',
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
    title: 'Password Practice',
    description: 'Interactive drill for making strong passwords, typing them from memory, and learning manager basics — in a safe sandbox. Your real passwords never go here.',
    icon: KeyRound,
    path: '/practice/password-practice',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'password practice sandbox drill type memorize muscle memory passphrase strong 2fa manager bitwarden 1password apple google dashlane lastpass red team phishing keylogger breach email',
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
    title: 'Voice Command Cheat Sheet',
    description: 'Hundreds of "Hey Siri / Alexa / OK Google / Hi Bixby" commands seniors actually use — searchable, printable, and grouped by category. Includes wake-word setup, privacy controls, and accessibility tips.',
    icon: Mic,
    path: '/tools/voice-commands',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'siri alexa google assistant bixby voice command cheat sheet hey siri ok google echo nest homepod everyday tech print poster wake word accessibility privacy reminders smart home senior',
  },
  {
    title: 'Smart Thermostat Setup',
    description: 'Install a Nest, ecobee, Honeywell, Sensi, or Amazon thermostat yourself — C-wire check, wiring safely, schedules, and utility rebates up to $100.',
    icon: Thermometer,
    path: '/tools/smart-thermostat-setup',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Medium',
    time: '60 min',
    featured: true,
    newThisMonth: true,
    keywords: 'nest ecobee honeywell sensi amazon smart thermostat c-wire hvac heat cooling furnace heat pump geofencing schedule rebate energy star demand response dr',
  },
  {
    title: 'Kitchen Tech Helper',
    description: 'Unbox, set up, and actually use your Instant Pot, Air Fryer, Smart Fridge, Sous Vide, Coffee Maker, and more — no 60-page manual required.',
    icon: ChefHat,
    path: '/tools/kitchen-tech-helper',
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'instant pot air fryer smart fridge sous vide keurig nespresso induction microwave kitchenaid bread maker breville ninja cosori zojirushi samsung lg kitchen appliance cooking recipe burn error descale pods',
  },
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
    title: 'Rideshare Setup',
    description: 'Set up Uber or Lyft step-by-step, turn on safety features, and learn no-smartphone options like GoGoGrandparent.',
    icon: Car,
    path: '/tools/rideshare-setup',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '15 min',
    newThisMonth: true,
    keywords: 'uber lyft rideshare taxi senior transportation gogograndparent silverride wheelchair accessibility ride share trip schedule safety pin emergency button ridecheck tipping surge flip phone',
  },
  {
    title: 'DMV Online Helper',
    description: "State-by-state guide to DMV online services, senior renewal rules, REAL ID deadlines, and how to skip the line when you can.",
    icon: Car,
    path: '/tools/dmv-online-helper',
    color: 'text-sky-700',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '10 min',
    newThisMonth: true,
    keywords: "dmv bmv mvc license registration renewal real id senior vision test medical certificate title transfer appointment online in person state scam toll text parking ticket warranty driver everyday tech",
  },
  {
    title: 'Video Call Helper',
    description: 'Senior-friendly guide for Zoom, FaceTime, Google Meet, Skype, WhatsApp, Messenger, and GrandPad — setup, sharing your screen, captions, and etiquette for calls with grandkids.',
    icon: Video,
    path: '/tools/video-call-helper',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'zoom facetime google meet skype whatsapp messenger grandpad video call family grandkids schedule captions accessibility mute camera share screen echo bandwidth',
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
    title: 'Photo Backup Wizard',
    description: 'Automatic photo backup in 15 minutes. Compare iCloud, Google Photos, Amazon, OneDrive, Dropbox, Flickr, and SmugMug — then follow a step-by-step walkthrough.',
    icon: ImageIcon,
    path: '/tools/photo-backup-wizard',
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'New',
    category: 'Setup',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'photo backup icloud google photos amazon prime dropbox onedrive flickr smugmug cloud storage 3-2-1 rule senior family share partner sharing legacy contact photoscan photomyne digital frame aura nixplay skylight',
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
    title: 'Medicare Cost Estimator',
    description: 'Compare Original Medicare + Medigap vs Medicare Advantage with 2026 CMS rates. Real numbers for your age, state, income, and expected care.',
    icon: Calculator,
    path: '/calculators/medicare-cost',
    color: 'text-blue-900',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'medicare cost estimator calculator 2026 part a part b part c part d medigap plan g supplement advantage ma irmaa income related monthly adjustment amount premium surcharge extra help lis low income subsidy medicare savings program msp ship free help aarp cms shiphelp medicare.gov plan finder deductible copay hospital specialist prescription drug coverage dental vision 65 birthday iep annual enrollment aep',
  },
  {
    title: 'Turning 65 — Checklist',
    description: 'An interactive life-transition checklist for people approaching 65. Medicare deadlines, Social Security, senior discounts, digital cleanup, and scam warnings — plain English, saved on your device.',
    icon: Cake,
    path: '/checklists/turning-65',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '30 min',
    featured: true,
    newThisMonth: true,
    keywords: 'turning 65 medicare enrollment iep initial enrollment period social security ssa mymedicare part a part b part c part d medigap advantage aep annual open enrollment ship aarp retirement cobra senior discount long-term care insurance power of attorney healthcare directive living will rmd required minimum distribution estate planning checklist life transition',
  },
  {
    title: 'Government Benefits Portal',
    description: 'Senior-friendly guide to every major .gov benefits portal — Social Security, Medicare, VA, IRS, SNAP, LIHEAP, and more. Skip the scam "helper" sites.',
    icon: Landmark,
    path: '/tools/government-benefits-portal',
    color: 'text-blue-800',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'social security ssa medicare medicaid va veterans irs taxes snap food stamps liheap lifeline usajobs benefits gov login.gov id.me state benefits portal 211 aarp ship free tax prep vita tce legal aid area agency on aging scam helper site free government portal',
  },
  {
    title: 'State Benefits Finder',
    description: 'State-by-state directory of senior benefits — property tax freezes, prescription aid, utility help, SHIP, SNAP, transportation, park passes. Covers all 50 states + DC.',
    icon: MapPin,
    path: '/tools/state-benefits-finder',
    color: 'text-blue-700',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'state benefits senior property tax homestead exemption senior freeze circuit breaker pace epic liheap ship medicare savings program msp snap 60+ transportation reduced fare paratransit area agency on aging legal aid state tax retirement exclusion veterans homestead hunting fishing license senior park pass benefitscheckup ncoa california texas new york florida pennsylvania illinois ohio north carolina michigan new jersey virginia massachusetts washington arizona georgia',
  },
  {
    title: 'Free Resource Hub',
    description: 'A senior-friendly catalog of FREE, LEGAL resources — streaming, library apps, classes, government benefits, tax help, books, software, mental health lines, and fact-check sites.',
    icon: Gift,
    path: '/tools/free-resource-hub',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'free legal resources streaming library app class government benefit snap liheap lifeline medicare ssa va aarp tax filing vita direct file freetaxusa libby hoopla kanopy project gutenberg librivox open library standard ebooks nls bard bookshare libreoffice gimp inkscape audacity obs canva blender vlc 988 samhsa nami friendship line griefshare snopes politifact factcheck ap reuters internet archive wayback library of congress national archives pew',
  },
  {
    title: 'Banking App Setup',
    description: 'Set up Chase, Wells Fargo, Bank of America, Capital One, U.S. Bank, Citi, or your credit union app — with biometric login, mobile check deposit, Zelle safety, and scam scripts to watch for.',
    icon: Landmark,
    path: '/tools/banking-app-setup',
    color: 'text-blue-700',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '20 min',
    featured: true,
    newThisMonth: true,
    keywords: 'chase wells fargo bank of america capital one us bank citi credit union navy federal penfed mobile banking biometric face id fingerprint zelle mobile check deposit estatements two factor 2fa alerts phishing fraud password bill pay',
  },
  {
    title: 'Refund & Return Helper',
    description: 'Step-by-step walkthroughs for getting refunds from online orders, app stores, subscriptions, scam charges, travel, and medical bills.',
    icon: Receipt,
    path: '/tools/refund-and-return-helper',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'refund return chargeback dispute amazon app store google play scam subscription billing travel hotel flight airline concert ticket medical bill stolen card unauthorized charge',
  },
  {
    title: 'Phone Bill Decoder',
    description: 'Paste every line from your cell phone bill and see what each charge means, which fees are negotiable, and how to save $20 or more every month — in plain English.',
    icon: Phone,
    path: '/calculators/phone-bill',
    color: 'text-teal-700',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'phone bill decoder cell phone carrier verizon at&t t-mobile cricket mint metro spectrum mobile visible boost consumer cellular regulatory recovery administrative fee federal usf 911 fee activation fee hotspot international pass device payment next-up apple watch line auto-pay paperless mvno negotiate lower save port number unlocked esim etf',
  },
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
    title: 'Internet Plan Calculator',
    description: 'Match your real household usage to the cheapest internet tier that actually meets it. Stop overpaying for speed you don\'t use.',
    icon: Wifi,
    path: '/calculators/internet-plan',
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Calculator',
    category: 'Money',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'internet speed mbps gigabit xfinity comcast spectrum verizon fios att fiber t-mobile home internet starlink cox frontier centurylink mediacom optimum sparklight wave astound modem router rental fee data cap introductory price loyalty penalty fiber cable dsl 5g home lifeline internet essentials senior discount overpaying speed test fast.com speedtest 4k streaming',
  },
  {
    title: 'Subscription Cost Aggregator',
    description: 'Add every subscription you pay for — streaming, news, memberships, gym, cloud — and see exactly what it adds up to per month and per year. Cancel links included.',
    icon: DollarSign,
    path: '/calculators/subscriptions',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'New',
    category: 'Money',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'subscriptions recurring charges monthly annual total cancel deep link netflix hulu disney max amazon prime apple one spotify aarp aaa costco sams club peloton sirius xm kindle unlimited icloud google one dropbox onedrive norton mcafee lifelock ancestry 23andme masterclass audible nfl nba mlb youtube premium tv fubo sling philo paramount peacock discovery britbox acorn instacart doordash uber one rxpass linkedin premium rotation strategy free alternatives libby pluto tubi library overlap red flag dormant free trial auto renew scam family sharing household print export',
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
    title: 'Free Learning Hub',
    description: 'Senior-friendly directory of 100% free online learning — languages, history, computer skills, cooking, wellness, art, and more.',
    icon: GraduationCap,
    path: '/tools/free-learning-hub',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Learning',
    difficulty: 'Easy',
    time: '10 min',
    newThisMonth: true,
    keywords: 'free learning entertainment classes courses university khan academy duolingo languages cooking wellness yoga finance writing art history science museum library audit certificate hobby retirement',
  },
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
    title: 'Tech Confidence Quiz',
    description: '25 honest questions across 5 areas of tech. Get your comfort tier (Brand New → Tech Wizard) and two personalized starting points. No judgment.',
    icon: Smile,
    path: '/quizzes/tech-confidence',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Learning',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'tech confidence quiz self assessment comfort level beginner seniors basics communication internet security advanced skill level personalized learning plan',
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
    title: 'Caregiver Toolkit — Helping From Near or Far',
    description: 'Remote support, fraud protection, medical coordination, staying connected, daily living tech, and caregiver self-care — all in one hub for adult children.',
    icon: HandHeart,
    path: '/toolkits/caregiver',
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Family',
    category: 'Connectivity',
    difficulty: 'Easy',
    time: '20 min',
    featured: true,
    newThisMonth: true,
    keywords: 'aging parent elder care mom dad long distance power of attorney medicare respite hospice',
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
    title: 'Audio Tutorial Hub',
    description: 'Tap play and your device reads TekSure\'s top guides out loud. 20+ audio tutorials — no download, no account, no cost.',
    icon: Headphones,
    path: '/tools/audio-tutorials',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '3 min',
    featured: true,
    newThisMonth: true,
    keywords: 'audio text to speech tts listen read aloud speech synthesis voice speak speechsynthesis web audio accessibility low vision tired eyes multitask walking cooking driving background play hearing aid bluetooth streaming samantha siri google voice rate pitch volume save settings native reader listen to page safari chrome edge android iphone ipad mac windows headphones earbuds screen off night time spouse privacy on-device speak selection',
  },
  {
    title: 'Screen Reader Starter',
    description: 'Turn on VoiceOver, TalkBack, NVDA, or Narrator in plain English — and actually start using it with confidence.',
    icon: Eye,
    path: '/tools/screen-reader-starter',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '10 min',
    newThisMonth: true,
    keywords: 'voiceover talkback nvda narrator chromevox blind low vision dyslexia read aloud speak screen',
  },
  {
    title: 'Low Vision Tech Hub',
    description: 'Every setting, every app, every trick to make phones, tablets, computers, TVs, and e-readers easier to see.',
    icon: Eye,
    path: '/tools/low-vision-tech-hub',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '15 min',
  },
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

  /* ── Entertainment ───────────────────── */
  {
    title: 'Weekly Tech Tip Newsletter',
    description: 'A ready-to-print one-page weekly newsletter for senior centers, libraries, and family groups. 12 prefilled editions, three print styles, and a QR code — fully editable.',
    icon: Newspaper,
    path: '/printables/weekly-newsletter',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'New',
    category: 'Entertainment',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'newsletter weekly printable template senior center community group family bulletin board refrigerator fridge post print share tech tips scam alert weekly tip qr code logo upload email version classic friendly big print letter size one page distribution',
  },
  {
    title: 'Local Library Finder',
    description: 'Find your nearest public library and every free service it offers — ebooks, streaming, classes, notary, tax help, museum passes, and more. Your tax dollars already pay for it.',
    icon: Library,
    path: '/tools/local-library-finder',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Entertainment',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'local library finder nearest public library zip code state directory librarytechnology NYPL LA County Chicago Houston Seattle Boston DC Miami San Francisco Philadelphia museum pass notary tax prep VITA library of things seed library homebound ESL citizenship job search inter-library loan reciprocal card rural',
  },
  {
    title: 'Library Tech Helper',
    description: 'Your library card unlocks free ebooks, audiobooks, movies, courses, and more. Step-by-step setup for Libby, Hoopla, Kanopy, Mango, LinkedIn Learning, Ancestry, and Consumer Reports.',
    icon: BookOpen,
    path: '/tools/library-tech-helper',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Entertainment',
    difficulty: 'Easy',
    time: '15 min',
    featured: true,
    newThisMonth: true,
    keywords: 'library card libby hoopla kanopy cloudlibrary overdrive mango languages linkedin learning ancestry consumer reports ebooks audiobooks kindle free books movies music genealogy',
  },
  {
    title: 'Podcast Directory',
    description: 'A curated directory of 45+ senior-friendly podcasts — news, history, health, finance, storytelling, and more — plus step-by-step instructions for listening on iPhone, Android, smart speakers, and computers.',
    icon: Headphones,
    path: '/tools/podcast-directory',
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'New',
    category: 'Entertainment',
    difficulty: 'Easy',
    time: '10 min',
    featured: true,
    newThisMonth: true,
    keywords: 'podcast directory senior friendly podcasts apple podcasts spotify pocket casts youtube music amazon music alexa google nest npr up first the daily fresh air marketplace bbc hardcore history dan carlin revolutions radiolab this american life smartless wait wait aarp senior planet storytelling retirement planet money hidden brain short wave download offline playback speed sleep timer transcripts hearing aids bluetooth carplay',
  },

  /* ── Accessibility (printables) ──────── */
  {
    title: 'Phone Button Wall Poster',
    description: 'A printable wall poster that names every button on your phone — iPhone, Android, flip phone, or basic phone. Hang it near the counter.',
    icon: Printer,
    path: '/printables/phone-button-poster',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Printable',
    category: 'Accessibility',
    difficulty: 'Easy',
    time: '5 min',
    featured: true,
    newThisMonth: true,
    keywords: 'phone button poster printable wall chart large print label callout iphone home button side power volume ringer lightning usb-c samsung pixel android bixby sim tray fingerprint jitterbug flip2 nokia 225 basic phone send end keypad tv remote roku fire tv apple tv samsung lg alexa echo dot keyboard shortcuts nest ecobee thermostat caregiver emergency contacts senior low vision accessibility letter tabloid grayscale print pdf laminate',
  },
  {
    title: 'TV, Remote & Device Poster Pack',
    description: 'Printable wall posters for your TV remote, Echo/Alexa, keyboard, and smart thermostat — plain-English labels so nobody has to guess what a button does.',
    icon: Printer,
    path: '/printables/phone-button-poster',
    color: 'text-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Printable',
    category: 'Entertainment',
    difficulty: 'Easy',
    time: '5 min',
    newThisMonth: true,
    keywords: 'tv remote poster roku fire tv apple tv samsung lg volume mute channel streaming netflix prime disney hulu echo alexa dot button light ring microphone mute keyboard shortcuts ctrl cmd windows mac smart thermostat nest ecobee heat cool eco senior caregiver printable wall chart large print letter tabloid pdf',
  },

  /* ── Community ───────────────────── */
  {
    title: 'Ask TekSure — Community Q&A',
    description: 'Got a tech question? A real person will answer, and everyone can learn from the thread. Browse answered questions or ask your own.',
    icon: Users,
    path: '/community/ask',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Safety',
    difficulty: 'Easy',
    time: '3 min',
    newThisMonth: true,
    keywords: 'community question answer help ask forum support chat volunteer real person',
  },
];

/* ── Category definitions ──────────────────────────────── */
import type { LucideIcon } from 'lucide-react';
const categoryIcons: Record<ToolCategory, LucideIcon> = {
  All: Sparkles,
  Safety: Shield,
  Setup: Sliders,
  Troubleshooting: Activity,
  Money: PiggyBank,
  Learning: GraduationCap,
  Health: Heart,
  Connectivity: Wifi,
  Accessibility: AccessibilityIcon,
  Entertainment: Tv,
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
  'Entertainment',
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
        description="150+ free tech tools for everyday people — scam simulator, password leak checker, bill negotiator, WiFi troubleshooter, accessibility finder, and more."
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
        <section className="relative overflow-hidden border-b border-border/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(900px circle at 50% 0%, hsl(var(--primary) / 0.07), transparent 65%)',
            }}
          />
          <div className="container relative py-14 md:py-20">
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
                    {(() => { const Icon = categoryIcons[cat]; return <Icon className="h-4 w-4" aria-hidden="true" />; })()}
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
                <p className="text-4xl mb-3" aria-hidden="true"></p>
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
                        {(() => { const Icon = categoryIcons[cat]; return <Icon className="h-6 w-6 text-primary" aria-hidden="true" />; })()}
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
