export type RoadmapStatus = 'live' | 'in-progress' | 'planned' | 'exploring';

export type RoadmapCategory =
  | 'AI & Learning' | 'Guides & Content' | 'Tools' | 'Safety & Privacy'
  | 'Accessibility' | 'Community' | 'Support' | 'Platform';

export interface RoadmapItem {
  title: string;
  description: string;
  status: RoadmapStatus;
  category: RoadmapCategory;
}

export const roadmapItems: RoadmapItem[] = [
  // ═══════════════════════════════════════════════════════════════
  // LIVE — What's available right now
  // ═══════════════════════════════════════════════════════════════

  // AI & Learning
  { title: 'AI Chat Helper (TekBot)', description: 'A friendly AI assistant on every page that answers your tech questions in plain language.', status: 'live', category: 'AI & Learning' },
  { title: 'AI Personal Tech Tutor', description: 'An AI tutor that learns your pace, remembers your device, and adapts lessons to your level.', status: 'live', category: 'AI & Learning' },
  { title: 'Personalized Learning Path', description: 'A custom sequence of guides based on your experience level and interests — your path grows as you learn.', status: 'live', category: 'AI & Learning' },
  { title: 'Error Message Decoder', description: 'Paste any confusing error message and get a plain-English explanation of what happened and what to do.', status: 'live', category: 'AI & Learning' },
  { title: 'Tech Jargon Translator', description: 'Paste any confusing tech message and get a simple explanation — no jargon, no assumptions.', status: 'live', category: 'AI & Learning' },
  { title: 'AI Guide Summaries', description: 'Every guide gets a three-sentence plain-English summary so you can decide if it\'s what you need.', status: 'live', category: 'AI & Learning' },
  { title: 'App Recommendation Engine', description: 'Tell us what you want to do and we suggest the best free apps for your device.', status: 'live', category: 'AI & Learning' },

  // Guides & Content
  { title: '780+ Step-by-Step Guides', description: 'A growing library of plain-language guides that walk you through common tech tasks one step at a time.', status: 'live', category: 'Guides & Content' },
  { title: 'AI-Compiled Knowledge Base', description: 'Karpathy-inspired LLM knowledge base: 38 wiki articles compiled from 780+ guides and trusted sources (AARP, FTC, CISA, Apple, Google). Cross-linked with Maps of Content hubs, wikilinks, and topic clusters.', status: 'live', category: 'Guides & Content' },
  { title: 'Video Tutorials', description: 'Short video walkthroughs from official sources that show you exactly what to do on screen.', status: 'live', category: 'Guides & Content' },
  { title: 'Quick Fixes', description: 'Short, focused solutions for the most common tech problems — no long articles required.', status: 'live', category: 'Guides & Content' },
  { title: 'Tech Glossary (106 Terms)', description: 'Every tech term explained in everyday language with helpful analogies.', status: 'live', category: 'Guides & Content' },
  { title: 'Device-Specific Help', description: 'Guides organized by device — iPhone, Android, Windows, Mac, tablets, and more.', status: 'live', category: 'Guides & Content' },
  { title: 'Print-Friendly Guides', description: 'Download or print any guide in a clean format for offline reference.', status: 'live', category: 'Guides & Content' },
  { title: 'Weekly Tech Tip', description: 'A new, easy-to-follow tech tip delivered to your dashboard every week.', status: 'live', category: 'Guides & Content' },
  { title: 'Senior Tech Blog', description: 'Stories, tips, and advice written specifically for older adults learning technology.', status: 'live', category: 'Guides & Content' },
  { title: 'Tech News for Beginners', description: 'Important tech news explained in simple language so you stay informed.', status: 'live', category: 'Guides & Content' },

  // Tools
  { title: 'Password Strength Checker', description: 'Test how strong your password is and get suggestions to make it safer.', status: 'live', category: 'Tools' },
  { title: 'WiFi Speed Test', description: 'Check your internet speed right from TekSure — no extra apps needed.', status: 'live', category: 'Tools' },
  { title: 'WiFi Troubleshooter', description: 'Answer a few questions and follow a guided path to fix your Wi-Fi.', status: 'live', category: 'Tools' },
  { title: 'Device Comparison Tool', description: 'Compare two devices side by side to decide which one is right for you.', status: 'live', category: 'Tools' },
  { title: 'Tech Health Quiz', description: '8-question quiz covering security, backup, privacy, battery, and scam awareness.', status: 'live', category: 'Tools' },
  { title: 'Storage Cleanup Wizard', description: 'Step-by-step checklist to free up space on any device — no tech knowledge needed.', status: 'live', category: 'Tools' },
  { title: 'Data Backup Wizard', description: 'A guided tool that helps you back up your important files step by step.', status: 'live', category: 'Tools' },
  { title: 'Bluetooth Troubleshooter', description: 'Fix common Bluetooth connection problems with headphones, speakers, and more.', status: 'live', category: 'Tools' },
  { title: 'Device Health Dashboard', description: 'A personalized overview of your storage, battery, updates, and security in one place.', status: 'live', category: 'Tools' },
  { title: 'Email Declutter Tool', description: 'Clean up your inbox by unsubscribing from unwanted emails in one click.', status: 'live', category: 'Tools' },
  { title: 'Quick Reference Cards', description: 'Printable cheat sheets with the most important steps for common tasks.', status: 'live', category: 'Tools' },
  { title: 'Keyboard Shortcut Cheat Sheets', description: 'Downloadable reference cards with the most useful keyboard shortcuts.', status: 'live', category: 'Tools' },
  { title: 'Email Template Library', description: 'Ready-made email templates for common situations.', status: 'live', category: 'Tools' },

  // Safety & Privacy
  { title: 'Scam Alert Center', description: 'Stay up to date on the latest scams and learn how to protect yourself.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Phishing URL Scanner', description: 'Paste a suspicious link and find out instantly if it\'s safe — all checked privately in your browser.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Cybersecurity Scorecard', description: 'Answer 13 yes/no questions to get a personal security grade.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Two-Factor Authentication Setup', description: 'Step-by-step 2FA setup for Google, Apple, Facebook, Amazon, and your bank.', status: 'live', category: 'Safety & Privacy' },
  { title: 'App Permission Auditor', description: 'Review and revoke risky app permissions (location, camera, mic) across all your devices.', status: 'live', category: 'Safety & Privacy' },
  { title: 'VPN Setup Guide', description: 'Plain-English guide to VPNs — what they are, when you need one, and how to set one up.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Internet Safety Course', description: 'A free mini-course covering the basics of staying safe online.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Scam Reporting Tool', description: 'Spotted a scam? Report it and help protect other TekSure members.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Digital Legacy Planning', description: 'Organize your digital accounts and passwords for your loved ones.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Stop Unwanted Calls & Texts', description: 'Block robocalls, silence unknown callers, and register on the Do Not Call list.', status: 'live', category: 'Safety & Privacy' },

  // Accessibility
  { title: 'Senior-Friendly Design', description: 'Large text, clear buttons, and simple layouts designed for comfortable reading.', status: 'live', category: 'Accessibility' },
  { title: 'Senior Tech Mode', description: 'One-tap simplified mode that enlarges buttons, hides advanced features, and slows animations.', status: 'live', category: 'Accessibility' },
  { title: 'High Contrast Mode', description: 'A high-contrast color scheme for users with low vision.', status: 'live', category: 'Accessibility' },
  { title: 'Font Size Adjuster', description: 'Increase or decrease the text size across the entire site to your comfort.', status: 'live', category: 'Accessibility' },
  { title: 'Text-to-Speech', description: 'Listen to any guide read aloud — perfect if you prefer hearing over reading.', status: 'live', category: 'Accessibility' },
  { title: 'Keyboard-Only Navigation', description: 'Full support for navigating TekSure without a mouse.', status: 'live', category: 'Accessibility' },
  { title: 'Multi-Language Support', description: 'Read guides and use TekSure in Spanish, French, and other languages.', status: 'live', category: 'Accessibility' },

  // Community
  { title: 'Community Forum', description: 'A friendly space to ask questions, share tips, and help fellow users.', status: 'live', category: 'Community' },
  { title: 'Community Ambassadors', description: 'Recognize and reward community members who help others learn technology.', status: 'live', category: 'Community' },
  { title: 'Family Tech Sharing', description: 'Share guides and progress with family members.', status: 'live', category: 'Community' },
  { title: 'Monthly Webinars', description: 'Join live online workshops where we walk through tech topics together.', status: 'live', category: 'Community' },

  // Support
  { title: 'Technician Profiles', description: 'Browse vetted TekSure technicians and book the right person for your problem.', status: 'live', category: 'Support' },
  { title: 'Video Consultation Booking', description: 'Book a free video call with a TekSure technician for guided, screen-sharing support.', status: 'live', category: 'Support' },
  { title: 'Caregiver Dashboard', description: 'Let a trusted family member or caregiver help manage your tech support.', status: 'live', category: 'Support' },
  { title: 'Tech Anxiety Resources', description: 'Gentle resources for anyone who feels overwhelmed by technology.', status: 'live', category: 'Support' },
  { title: 'Local Tech Help Finder', description: 'Find trusted tech help near you — repair shops, classes, and volunteers.', status: 'live', category: 'Support' },

  // Platform
  { title: 'Smart Search', description: 'Instantly search across guides, glossary terms, tools, and quick fixes.', status: 'live', category: 'Platform' },
  { title: 'Progress Tracking & Badges', description: 'See which guides you\'ve completed, earn badges, and track your learning journey.', status: 'live', category: 'Platform' },
  { title: 'Tech Confidence Score', description: 'A short quiz that measures your tech confidence and tracks how it grows over time.', status: 'live', category: 'Platform' },
  { title: 'Monthly Progress Report', description: 'A personal digest showing guides completed, badges earned, and what to try next.', status: 'live', category: 'Platform' },
  { title: 'Tech Skills Certificate', description: 'Complete a learning path and earn a printable certificate to show your new skills.', status: 'live', category: 'Platform' },
  { title: 'Guided Setup Wizard', description: 'A step-by-step walkthrough that helps new users get started with TekSure.', status: 'live', category: 'Platform' },
  { title: 'Public Roadmap', description: 'This page! See exactly what we\'re building and what\'s coming next.', status: 'live', category: 'Platform' },

  // ═══════════════════════════════════════════════════════════════
  // IN PROGRESS — Actively being built
  // ═══════════════════════════════════════════════════════════════

  { title: 'Explain It Like I\'m New', description: 'Tell TekBot what confuses you in your own words — it figures out the problem and walks you through the fix, step by step. No menus, no searching.', status: 'in-progress', category: 'AI & Learning' },
  { title: 'Concept Maps', description: 'Visual diagrams showing how tech concepts connect — tap any node to learn more. See the big picture of how Wi-Fi, passwords, email, and devices all relate.', status: 'live', category: 'AI & Learning' },
  { title: 'Why It Works Explanations', description: 'Every guide step gets a "Why this works" section so you understand the reason behind each step — not just what to tap. Live on 16 guides (77 steps).', status: 'live', category: 'Guides & Content' },
  { title: 'Fake Scam Simulator', description: 'Practice spotting realistic scam emails, texts, and calls in a safe environment. 10 scenarios, 7 scams + 3 legitimate — build your scam radar.', status: 'live', category: 'Safety & Privacy' },
  { title: 'Spanish Language Content', description: 'Translating the top 30 most-visited guides into Spanish to reach 42M+ Spanish speakers in the US.', status: 'in-progress', category: 'Accessibility' },
  { title: 'Live Chat Support', description: 'Chat with a real human technician for issues that need personal attention — free for all members.', status: 'in-progress', category: 'Support' },

  // ═══════════════════════════════════════════════════════════════
  // PLANNED — Designed and scheduled
  // ═══════════════════════════════════════════════════════════════

  // AI & Learning — Karpathy-inspired + Custom LLM
  { title: 'Knowledge Base Curation', description: 'Expanding and refining TekSure\'s knowledge base — more wiki articles, deeper cross-links, verified sources, and structured content that will serve as high-quality training data for our custom LLM. Quality in, quality out.', status: 'in-progress', category: 'AI & Learning' },
  { title: 'LLM Training Dataset Generator', description: 'Automated pipeline that converts all TekSure guides, wiki pages, and scraped sources into ChatML Q&A pairs for fine-tuning. Currently generates 2,000 training examples. Live — run scripts/generate-training-data.mjs to rebuild.', status: 'live', category: 'AI & Learning' },
  { title: 'TekSure LLM (Custom Fine-Tuned Model)', description: 'Our own AI model, trained on TekSure\'s curated knowledge base. Built on Llama 3.1 8B or Mistral 7B, fine-tuned with Unsloth/LoRA, served locally via Ollama — no cloud dependency, no API costs. Pending: knowledge base curation must reach target quality first.', status: 'planned', category: 'AI & Learning' },
  { title: 'AI Learning Companion', description: 'An always-available AI tutor (powered by our custom LLM) that teaches technology through conversation. Designs lessons around your real questions, adapts to your pace, remembers what you\'ve learned.', status: 'planned', category: 'AI & Learning' },
  { title: 'Show Me What You See', description: 'Take a photo of your screen and TekBot tells you exactly what to do next. No need to describe the problem — the AI reads your screen and guides you.', status: 'planned', category: 'AI & Learning' },
  { title: 'Teach-Back Quizzes', description: 'After each guide, a short quiz checks your understanding — not memorization. Can you explain it in your own words? That\'s how real learning sticks.', status: 'planned', category: 'AI & Learning' },
  { title: 'Daily 5-Minute Lessons', description: '20 bite-sized lessons across 4 tracks (Getting Started, Staying Safe, Your Phone, Staying Connected). Streak tracking, quizzes, progress bars.', status: 'live', category: 'AI & Learning' },
  { title: 'Troubleshooting Flowcharts', description: '5 interactive decision trees: internet not working, phone slow, cannot print, forgot password, screen frozen. One step at a time.', status: 'live', category: 'AI & Learning' },

  // Guides & Content
  { title: 'How Things Actually Work', description: 'Short explainers that teach what happens behind the scenes — how Wi-Fi signals travel, how passwords protect you, why updates matter. Understanding beats memorization.', status: 'planned', category: 'Guides & Content' },
  { title: 'Real-World Practice Sandbox', description: 'A safe practice environment where you can try tasks (sending an email, changing a password) without affecting anything real. Learn by doing, not just reading.', status: 'planned', category: 'Guides & Content' },
  { title: 'Seasonal Tech Calendar', description: 'Month-by-month tech checklist: tax season prep, holiday shopping safety, back-to-school setup, year-end cleanup. Timely help when you need it.', status: 'planned', category: 'Guides & Content' },

  // Tools
  { title: 'TekSure Mobile App', description: 'A dedicated phone app for quick access to all TekSure help on the go — with offline guide access built in.', status: 'planned', category: 'Tools' },
  { title: 'TekSure Browser Helper', description: 'A browser extension that explains confusing text on any website. Right-click any error or tech term and get a plain-English answer.', status: 'planned', category: 'Tools' },
  { title: 'Printer Troubleshooter', description: 'Interactive diagnostic wizard for printer problems — guided step-by-step like our WiFi Troubleshooter.', status: 'planned', category: 'Tools' },

  // Safety & Privacy
  { title: 'Family Safety Dashboard', description: 'Help protect your whole family: see security status for each family member, share scam alerts, and manage privacy settings together.', status: 'planned', category: 'Safety & Privacy' },
  { title: 'Weekly Scam Briefing', description: 'A weekly digest of the newest scams targeting seniors, with exactly what to watch for and what to do. Stays current so you stay safe.', status: 'planned', category: 'Safety & Privacy' },

  // Community
  { title: 'Partner Program (Libraries & Senior Centers)', description: 'Libraries, senior centers, and care communities can embed TekSure guides and tools directly in their own websites — free.', status: 'planned', category: 'Community' },
  { title: 'Peer Teaching Program', description: 'Experienced TekSure members volunteer to help new users one-on-one. Learn from someone who was recently in your shoes.', status: 'planned', category: 'Community' },
  { title: 'Gift a Help Session', description: 'Adult children can send a parent or grandparent a free technician session with a personalized message.', status: 'planned', category: 'Community' },

  // ═══════════════════════════════════════════════════════════════
  // EXPLORING — Ideas we're researching
  // ═══════════════════════════════════════════════════════════════

  { title: 'Voice-First Mode', description: 'Use TekSure entirely by voice — ask questions, hear answers, follow guides hands-free. For users who find typing or reading screens difficult.', status: 'exploring', category: 'Accessibility' },
  { title: 'AI Device Setup Assistant', description: 'Unbox a new device and TekSure walks you through every setup step in real time — from turning it on to making your first call.', status: 'exploring', category: 'AI & Learning' },
  { title: 'Neighborhood Tech Circles', description: 'Small local groups (5-8 people) who meet regularly to learn tech together, guided by TekSure materials. Community learning at the kitchen table.', status: 'exploring', category: 'Community' },
  { title: 'Personal Tech Timeline', description: 'A visual timeline of everything you\'ve learned and accomplished on TekSure — see how far you\'ve come and what to try next.', status: 'exploring', category: 'Platform' },
  { title: 'Caregiver Remote Assist', description: 'Let a family member see your screen remotely and guide you through a problem — like having them sitting right next to you.', status: 'exploring', category: 'Support' },
  { title: 'AI-Powered Accessibility Audit', description: 'TekSure scans your device settings and suggests changes to make your phone or computer easier to see, hear, and use.', status: 'exploring', category: 'Accessibility' },
];
