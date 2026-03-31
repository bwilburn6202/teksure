import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Map, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

// ─── Types & Data ─────────────────────────────────────────────────────────────

type Group = 'core' | 'guides' | 'tools' | 'community' | 'infra' | 'revenue' | 'ai';

interface MapNode {
  id: string;
  label: string;
  group: Group;
  fx: number;
  fy: number;
  r?: number;
  desc: string;
  href?: string;
  hub?: boolean;
}

const GROUP_META: Record<Group, { color: string; border: string; text: string; label: string }> = {
  core:      { color: '#534AB7', border: '#3C3489', text: '#fff', label: 'Platform core' },
  guides:    { color: '#0F6E56', border: '#085041', text: '#fff', label: 'Guide categories' },
  tools:     { color: '#993C1D', border: '#712B13', text: '#fff', label: 'User tools' },
  community: { color: '#993556', border: '#72243E', text: '#fff', label: 'Community' },
  infra:     { color: '#185FA5', border: '#0C447C', text: '#fff', label: 'Infrastructure' },
  revenue:   { color: '#3B6D11', border: '#27500A', text: '#fff', label: 'Revenue' },
  ai:        { color: '#854F0B', border: '#633806', text: '#fff', label: 'AI features' },
};

const NODES: MapNode[] = [
  { id: 'teksure',   label: 'TekSure.com',      group: 'core',      fx: 0.50, fy: 0.50, r: 42, hub: true,
    desc: 'Tech support & digital literacy platform for everyday users', href: '/' },
  { id: 'guides',    label: 'Guides',            group: 'guides',    fx: 0.20, fy: 0.50, r: 28,
    desc: '9 guide categories — Windows, Mac, Safety, AI and more', href: '/guides' },
  { id: 'g-win',     label: 'Windows',           group: 'guides',    fx: 0.05, fy: 0.22, r: 19,
    desc: '52 Windows guides from beginner to advanced', href: '/guides?category=windows-guides' },
  { id: 'g-mac',     label: 'Mac',               group: 'guides',    fx: 0.17, fy: 0.12, r: 19,
    desc: 'macOS guides for all skill levels', href: '/guides?category=mac-guides' },
  { id: 'g-safe',    label: 'Safety & Privacy',  group: 'guides',    fx: 0.05, fy: 0.75, r: 19,
    desc: 'Passwords, phishing, account security', href: '/guides?category=safety-guides' },
  { id: 'g-ai',      label: 'AI Guides',         group: 'guides',    fx: 0.17, fy: 0.86, r: 19,
    desc: 'ChatGPT, Copilot, voice assistants', href: '/guides?category=ai-guides' },
  { id: 'g-ess',     label: 'Essential Skills',  group: 'guides',    fx: 0.04, fy: 0.48, r: 19,
    desc: 'Email, files, browsers, updates', href: '/guides?category=essential-skills' },
  { id: 'g-app',     label: 'Apps & Services',   group: 'guides',    fx: 0.13, fy: 0.65, r: 19,
    desc: 'Zoom, streaming, social media walkthroughs', href: '/guides?category=app-guides' },
  { id: 'g-how',     label: 'How-To',            group: 'guides',    fx: 0.13, fy: 0.35, r: 19,
    desc: 'Step-by-step everyday device tasks', href: '/guides?category=how-to' },
  { id: 'g-hlth',    label: 'Health Tech',       group: 'guides',    fx: 0.04, fy: 0.62, r: 19,
    desc: 'Telehealth, fitness trackers, patient portals', href: '/guides?category=health-tech' },
  { id: 'g-tips',    label: 'Tips & Tricks',     group: 'guides',    fx: 0.05, fy: 0.35, r: 19,
    desc: 'Shortcuts and productivity hacks', href: '/guides?category=tips-tricks' },
  { id: 'tools',     label: 'Tools',             group: 'tools',     fx: 0.78, fy: 0.33, r: 28,
    desc: 'Interactive tools that solve specific problems', href: '/tools' },
  { id: 't-app',     label: 'App Recommender',   group: 'tools',     fx: 0.93, fy: 0.12, r: 19,
    desc: 'Suggests apps based on your needs', href: '/tools/app-recommender' },
  { id: 't-war',     label: 'Warranty Checker',  group: 'tools',     fx: 0.93, fy: 0.28, r: 19,
    desc: 'Look up warranty status for devices', href: '/tools/warranty-checker' },
  { id: 't-bak',     label: 'Backup Wizard',     group: 'tools',     fx: 0.93, fy: 0.44, r: 19,
    desc: 'Guided backup setup for photos and files', href: '/tools/backup-wizard' },
  { id: 't-trbl',    label: 'Troubleshooter',    group: 'tools',     fx: 0.78, fy: 0.14, r: 19,
    desc: 'Diagnose and fix common tech problems', href: '/tools/troubleshooter' },
  { id: 't-setup',   label: 'Setup Wizard',      group: 'tools',     fx: 0.64, fy: 0.12, r: 19,
    desc: 'Guided device setup for new users', href: '/setup' },
  { id: 't-pass',    label: 'Password Strength', group: 'tools',     fx: 0.93, fy: 0.60, r: 19,
    desc: 'Check how strong your passwords are', href: '/tools/password-strength' },
  { id: 'community', label: 'Community',         group: 'community', fx: 0.73, fy: 0.72, r: 24,
    desc: 'Forums, peer help, and booking', href: '/forum' },
  { id: 'c-forum',   label: 'Forum',             group: 'community', fx: 0.88, fy: 0.80, r: 19,
    desc: 'Community Q&A threads and replies', href: '/forum' },
  { id: 'c-book',    label: 'Book a Tech',       group: 'community', fx: 0.88, fy: 0.65, r: 19,
    desc: 'Schedule appointments with real technicians', href: '/book' },
  { id: 'tekbot',    label: 'TekBot AI',         group: 'ai',        fx: 0.50, fy: 0.24, r: 24,
    desc: 'Context-aware AI assistant — answers questions and links to guides' },
  { id: 'revenue',   label: 'Revenue',           group: 'revenue',   fx: 0.50, fy: 0.79, r: 24,
    desc: 'Stripe payments, premium access, affiliate links' },
  { id: 'r-stripe',  label: 'Stripe Payments',   group: 'revenue',   fx: 0.37, fy: 0.92, r: 19,
    desc: 'Booking and premium payments via Stripe' },
  { id: 'r-prem',    label: 'Premium Access',    group: 'revenue',   fx: 0.51, fy: 0.94, r: 19,
    desc: 'Gated content and pro tools tier', href: '/pricing' },
  { id: 'r-aff',     label: 'Affiliate Links',   group: 'revenue',   fx: 0.65, fy: 0.92, r: 19,
    desc: 'Monetized product recommendations in guides' },
  { id: 'infra',     label: 'Infrastructure',    group: 'infra',     fx: 0.35, fy: 0.24, r: 24,
    desc: 'Supabase auth, database, Edge Functions, Resend email' },
  { id: 'i-auth',    label: 'Auth & Profiles',   group: 'infra',     fx: 0.21, fy: 0.14, r: 19,
    desc: 'Supabase Auth — sign up, login, user profiles' },
  { id: 'i-db',      label: 'Database',          group: 'infra',     fx: 0.35, fy: 0.11, r: 19,
    desc: 'Supabase Postgres — bookings, forum, profiles' },
  { id: 'i-email',   label: 'Email (Resend)',     group: 'infra',     fx: 0.22, fy: 0.31, r: 19,
    desc: 'Transactional emails for bookings and confirmations' },
  { id: 'admin',     label: 'Admin Dashboard',   group: 'infra',     fx: 0.65, fy: 0.88, r: 19,
    desc: 'Manage bookings, users, content, and analytics', href: '/admin' },
];

const EDGES: [string, string][] = [
  ['teksure','guides'], ['teksure','tools'], ['teksure','community'],
  ['teksure','tekbot'], ['teksure','revenue'], ['teksure','infra'], ['teksure','admin'],
  ['guides','g-win'], ['guides','g-mac'], ['guides','g-safe'], ['guides','g-ai'],
  ['guides','g-ess'], ['guides','g-app'], ['guides','g-how'], ['guides','g-hlth'], ['guides','g-tips'],
  ['tools','t-app'], ['tools','t-war'], ['tools','t-bak'], ['tools','t-trbl'], ['tools','t-setup'], ['tools','t-pass'],
  ['community','c-forum'], ['community','c-book'],
  ['revenue','r-stripe'], ['revenue','r-prem'], ['revenue','r-aff'],
  ['infra','i-auth'], ['infra','i-db'], ['infra','i-email'],
  ['tekbot','guides'], ['tekbot','tools'],
  ['c-book','revenue'],
];

const CW = 800, CH = 580;
