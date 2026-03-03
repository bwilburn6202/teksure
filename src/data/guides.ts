export type GuideCategory = 'troubleshooting' | 'knowledge-base' | 'blog' | 'video';

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  tags: string[];
  readTime: string;
  videoUrl?: string;
  thumbnailEmoji: string;
  publishedAt: string;
  steps?: { title: string; content: string }[];
  body?: string;
}

export const guides: Guide[] = [
  // Troubleshooting Guides
  {
    slug: 'fix-wifi-keeps-dropping',
    title: 'WiFi Keeps Dropping? 7 Fixes to Try Right Now',
    excerpt: 'Intermittent WiFi is the #1 issue we see. Walk through these quick fixes before calling a tech.',
    category: 'troubleshooting',
    tags: ['wifi', 'router', 'network'],
    readTime: '5 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-02-15',
    steps: [
      { title: 'Restart your router', content: 'Unplug the power cable, wait 30 seconds, and plug it back in. Wait 2–3 minutes for it to fully boot. This clears the router\'s memory and resolves most temporary glitches.' },
      { title: 'Check for interference', content: 'Move your router away from microwaves, baby monitors, and Bluetooth devices. These operate on the same 2.4 GHz frequency and cause signal drops.' },
      { title: 'Switch to 5 GHz band', content: 'If your router supports dual-band, connect to the 5 GHz network (usually labeled with "_5G"). It\'s faster and less crowded, though shorter range.' },
      { title: 'Update router firmware', content: 'Log into your router admin panel (usually 192.168.1.1) and check for firmware updates. Outdated firmware is a common cause of instability.' },
      { title: 'Reduce connected devices', content: 'Too many devices can overwhelm your router. Disconnect unused devices or consider upgrading to a mesh WiFi system for larger homes.' },
      { title: 'Change the WiFi channel', content: 'Use a WiFi analyzer app to find the least congested channel, then switch to it in your router settings. Channels 1, 6, and 11 are best for 2.4 GHz.' },
      { title: 'Factory reset as last resort', content: 'If nothing else works, reset your router to factory defaults using the pinhole button. You\'ll need to reconfigure your network name and password.' },
    ],
  },
  {
    slug: 'printer-not-connecting',
    title: 'Printer Won\'t Connect? Step-by-Step Fix Guide',
    excerpt: 'Whether it\'s a USB or wireless printer, these steps cover the most common connection failures.',
    category: 'troubleshooting',
    tags: ['printer', 'drivers', 'wireless'],
    readTime: '6 min',
    thumbnailEmoji: '🖨️',
    publishedAt: '2026-02-10',
    steps: [
      { title: 'Check physical connections', content: 'Ensure the USB cable is firmly connected or that the printer is on the same WiFi network as your computer. Try a different USB port.' },
      { title: 'Restart the print spooler', content: 'On Windows: Open Services → find "Print Spooler" → right-click → Restart. On Mac: System Preferences → Printers → remove and re-add the printer.' },
      { title: 'Update or reinstall drivers', content: 'Visit the manufacturer\'s website and download the latest drivers for your model. Uninstall old drivers first via Device Manager.' },
      { title: 'Run the printer troubleshooter', content: 'Windows: Settings → Troubleshoot → Printer. Mac: Reset the printing system via System Preferences → Printers & Scanners.' },
      { title: 'Check firewall settings', content: 'Your firewall may be blocking printer communication. Temporarily disable it to test, then add an exception for your printer software.' },
    ],
  },
  {
    slug: 'speed-up-slow-computer',
    title: 'Computer Running Slow? 10-Minute Speed Boost',
    excerpt: 'A sluggish PC doesn\'t always need professional help. Try these quick optimizations first.',
    category: 'troubleshooting',
    tags: ['pc_slow', 'performance', 'startup'],
    readTime: '7 min',
    thumbnailEmoji: '🐌',
    publishedAt: '2026-01-28',
    steps: [
      { title: 'Disable startup programs', content: 'Press Ctrl+Shift+Esc → Startup tab → disable programs you don\'t need at boot. This alone can cut startup time by 50%.' },
      { title: 'Free up disk space', content: 'Run Disk Cleanup (Windows) or use Storage Management (Mac). Delete temporary files, empty trash, and uninstall apps you no longer use.' },
      { title: 'Check for malware', content: 'Run a full scan with Windows Defender or Malwarebytes (free). Malware running in the background is a common cause of slowdowns.' },
      { title: 'Add more RAM (or close tabs)', content: 'If you regularly use 8+ browser tabs, consider upgrading RAM. As a quick fix, close unnecessary tabs and applications.' },
      { title: 'Update your OS', content: 'Outdated operating systems miss performance patches. Check for updates: Windows Update or macOS Software Update.' },
    ],
  },
  {
    slug: 'remove-malware-virus',
    title: 'Think You Have a Virus? Here\'s What to Do',
    excerpt: 'Pop-ups, slowdowns, and strange behavior? Follow this guide to identify and remove malware safely.',
    category: 'troubleshooting',
    tags: ['virus', 'malware', 'security'],
    readTime: '8 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-01-20',
    steps: [
      { title: 'Disconnect from the internet', content: 'If you suspect active malware, disconnect from WiFi or unplug ethernet immediately. This prevents data theft and stops the malware from communicating.' },
      { title: 'Boot into Safe Mode', content: 'Restart and press F8 (Windows) or hold Shift during restart (Mac). Safe Mode loads minimal drivers, making it easier to remove malware.' },
      { title: 'Run a full antivirus scan', content: 'Use Windows Defender, Malwarebytes, or another trusted scanner. Run a FULL scan, not a quick scan. This can take 30–60 minutes.' },
      { title: 'Remove suspicious programs', content: 'Check your installed programs list for anything you don\'t recognize. Sort by install date to spot recent additions.' },
      { title: 'Change your passwords', content: 'After removing malware, change passwords for email, banking, and social media from a DIFFERENT clean device first.' },
      { title: 'Enable real-time protection', content: 'Make sure Windows Defender or your antivirus has real-time protection enabled. Keep it updated and run weekly scans.' },
    ],
  },

  // Knowledge Base / FAQ
  {
    slug: 'what-is-teksure',
    title: 'What Is TekSure and How Does It Work?',
    excerpt: 'Everything you need to know about how TekSure connects you with verified tech support professionals.',
    category: 'knowledge-base',
    tags: ['getting-started', 'platform', 'faq'],
    readTime: '3 min',
    thumbnailEmoji: '💡',
    publishedAt: '2026-02-20',
    body: `TekSure is a marketplace that connects customers with verified, background-checked technicians for remote and in-person tech support.\n\n**How it works:**\n1. You describe your tech issue and choose remote or in-person help\n2. We match you with qualified technicians in your area\n3. A tech accepts your job and you communicate through our secure job room\n4. The tech resolves your issue and you pay securely through the platform\n\n**Key benefits:**\n- All technicians are ID-verified and background-checked\n- Transparent pricing with no hidden fees\n- Real-time chat and file sharing during your job\n- Money-back guarantee if the issue isn't resolved\n\n**What we cover:**\nWiFi & networking, printer issues, slow computers, virus removal, device setup, smart home configuration, and more.`,
  },
  {
    slug: 'how-pricing-works',
    title: 'Understanding TekSure Pricing',
    excerpt: 'No subscriptions, no hidden fees. Here\'s exactly how our pay-per-job pricing works.',
    category: 'knowledge-base',
    tags: ['pricing', 'payments', 'faq'],
    readTime: '3 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-02-18',
    body: `TekSure operates on a simple pay-per-job model. There are no subscriptions, monthly fees, or commitments.\n\n**Remote Fix — $49**\nA 30-minute remote session where a tech connects to your screen securely. Ideal for software issues, settings changes, and quick diagnostics.\n\n**On-Site Visit — $89**\nA tech comes to your location. Includes the first hour of work. Additional time billed at the tech\'s hourly rate (displayed upfront).\n\n**Premium Support — $149**\nUp to 3 hours of dedicated support for complex setups, network overhauls, or multi-device configurations.\n\n**Payment is held securely** until the job is completed to your satisfaction. If we can't fix it, you don't pay.`,
  },
  {
    slug: 'tech-verification-process',
    title: 'How TekSure Verifies Technicians',
    excerpt: 'Learn about our multi-step verification process that ensures every tech on our platform is trustworthy.',
    category: 'knowledge-base',
    tags: ['verification', 'trust', 'safety'],
    readTime: '4 min',
    thumbnailEmoji: '✅',
    publishedAt: '2026-02-12',
    body: `Your safety and trust are our top priorities. Every technician on TekSure goes through a rigorous verification process.\n\n**Verification Levels:**\n\n🪪 **ID Verified** — Government-issued photo ID confirmed\n\n🔍 **Background Checked** — Full criminal background check completed\n\n✅ **Fully Verified** — ID + background check + skills assessment + customer reviews\n\n**What we check:**\n- Government-issued photo ID\n- Criminal background (national database)\n- Professional certifications (CompTIA, Microsoft, etc.)\n- Work history and references\n- Skills assessment test\n\n**Ongoing quality:**\n- Customer ratings after every job\n- Minimum 4.0 rating required to stay active\n- Regular re-verification every 12 months\n- Immediate suspension for any safety concerns\n\nLook for the verification badge on every tech\'s profile.`,
  },

  // Blog / Tech Tips
  {
    slug: 'password-security-2026',
    title: '5 Password Mistakes You\'re Probably Making in 2026',
    excerpt: 'Password reuse is still the #1 security vulnerability. Here\'s how to protect yourself properly.',
    category: 'blog',
    tags: ['security', 'passwords', 'tips'],
    readTime: '4 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-02-25',
    body: `Despite years of warnings, password-related breaches remain the leading cause of account compromises. Here are five mistakes to stop making today.\n\n**1. Using the same password everywhere**\nWhen one service gets breached, attackers try that password on every other site. Use a unique password for each account.\n\n**2. Not using a password manager**\nYou can\'t remember 100 unique passwords. Tools like 1Password, Bitwarden, or Apple Keychain generate and store them securely.\n\n**3. Ignoring two-factor authentication (2FA)**\nEnable 2FA on every account that offers it. Authenticator apps (Google Authenticator, Authy) are more secure than SMS codes.\n\n**4. Making passwords "clever" instead of long**\n"P@ssw0rd!" is not secure. A random 4-word phrase like "correct-horse-battery-staple" is far stronger and easier to remember.\n\n**5. Never changing compromised passwords**\nCheck haveibeenpwned.com regularly. If your email appears in a breach, change that password immediately.\n\n**Pro tip:** Most TekSure techs can help you set up a password manager and 2FA during a remote session.`,
  },
  {
    slug: 'smart-home-beginners-guide',
    title: 'Smart Home Setup: A Beginner\'s Complete Guide',
    excerpt: 'From smart bulbs to full home automation — everything you need to know to get started.',
    category: 'blog',
    tags: ['smart-home', 'setup', 'iot'],
    readTime: '6 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-02-08',
    body: `Smart homes aren\'t just for tech enthusiasts anymore. Here\'s how to start your smart home journey without getting overwhelmed.\n\n**Start with a hub**\nChoose an ecosystem: Apple HomeKit, Google Home, or Amazon Alexa. Stick with one to avoid compatibility headaches.\n\n**Best first purchases:**\n- Smart bulbs (Philips Hue or LIFX) — instant ambiance control\n- Smart plug — make any device "smart" for under $15\n- Smart speaker — voice control for everything\n- Smart thermostat (Nest or Ecobee) — saves 10-15% on energy bills\n\n**Network considerations:**\n- Ensure your WiFi covers your whole home (mesh systems help)\n- Create a separate IoT network for smart devices\n- Keep all firmware updated for security\n\n**Common pitfalls:**\n- Buying devices from too many ecosystems\n- Not securing your smart home network\n- Overcomplicating automation rules\n\n**Need help?** TekSure techs specialize in smart home setup and can configure everything during an on-site visit.`,
  },
  {
    slug: 'public-wifi-safety',
    title: 'Is Public WiFi Safe? What You Need to Know',
    excerpt: 'Coffee shop WiFi is convenient but risky. Learn how to protect yourself on public networks.',
    category: 'blog',
    tags: ['wifi', 'security', 'vpn'],
    readTime: '4 min',
    thumbnailEmoji: '☕',
    publishedAt: '2026-01-30',
    body: `Public WiFi networks are inherently insecure. Here\'s what\'s actually at risk and how to stay safe.\n\n**The risks:**\n- Man-in-the-middle attacks (someone intercepting your traffic)\n- Evil twin networks (fake hotspots mimicking legitimate ones)\n- Packet sniffing (capturing unencrypted data)\n\n**How to stay safe:**\n\n🔒 **Always use a VPN** — This encrypts all your traffic, making it unreadable even on compromised networks. Good options: NordVPN, ExpressVPN, or Mullvad.\n\n🔒 **Verify the network name** — Ask staff for the exact WiFi name. Don\'t connect to "Free_Coffee_WiFi" if the shop\'s network is "CoffeeShop_Guest."\n\n🔒 **Use HTTPS everywhere** — Look for the padlock icon in your browser. Most modern sites use HTTPS, but double-check before entering passwords.\n\n🔒 **Disable auto-connect** — Turn off automatic WiFi connections on your phone and laptop so you don\'t unknowingly join malicious networks.\n\n🔒 **Avoid sensitive tasks** — Don\'t do online banking or enter credit card numbers on public WiFi, even with a VPN.\n\n**Need a VPN setup?** A TekSure remote session can get you configured in under 15 minutes.`,
  },

  // Video Tutorials
  {
    slug: 'video-router-setup',
    title: 'How to Set Up Your Home Router (Video Guide)',
    excerpt: 'Watch our step-by-step video guide to properly configure your home router for speed and security.',
    category: 'video',
    tags: ['wifi', 'router', 'setup', 'video'],
    readTime: '12 min watch',
    thumbnailEmoji: '🎬',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedAt: '2026-02-22',
    body: `This video walks you through the complete router setup process, from unboxing to optimization.\n\n**What you\'ll learn:**\n- Optimal router placement for maximum coverage\n- Accessing your router admin panel\n- Setting a strong WiFi password\n- Enabling WPA3 encryption\n- Setting up a guest network\n- Configuring parental controls\n- Updating firmware\n\n**Equipment covered:** Netgear, TP-Link, ASUS, and Linksys routers.\n\n*Note: This is a placeholder video. In production, this would embed an actual TekSure tutorial.*`,
  },
  {
    slug: 'video-windows-backup',
    title: 'Back Up Your Windows PC in 5 Minutes (Video)',
    excerpt: 'Never lose your files again. This quick video shows you how to set up automatic Windows backups.',
    category: 'video',
    tags: ['backup', 'windows', 'data', 'video'],
    readTime: '5 min watch',
    thumbnailEmoji: '💾',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedAt: '2026-02-05',
    body: `Losing files to a crashed hard drive is preventable. This video shows three backup methods:\n\n**1. Windows File History**\nBuilt into Windows 10/11. Backs up your Documents, Desktop, and Photos automatically to an external drive.\n\n**2. OneDrive Cloud Backup**\nSync your important folders to Microsoft\'s cloud. Free tier includes 5 GB; Microsoft 365 gives you 1 TB.\n\n**3. Full System Image**\nCreate a complete snapshot of your PC that can restore everything — OS, apps, and files — in case of total failure.\n\n**Recommended schedule:**\n- File History: Every hour (automatic)\n- Cloud sync: Always on\n- System image: Monthly\n\n*Note: This is a placeholder video. In production, this would embed an actual TekSure tutorial.*`,
  },
  {
    slug: 'video-phishing-emails',
    title: 'How to Spot Phishing Emails (Video Tutorial)',
    excerpt: 'Learn to identify scam emails before they trick you. Real examples and red flags explained.',
    category: 'video',
    tags: ['security', 'phishing', 'email', 'video'],
    readTime: '8 min watch',
    thumbnailEmoji: '🎣',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedAt: '2026-01-25',
    body: `Phishing attacks are getting more sophisticated. This video teaches you to spot them instantly.\n\n**Red flags to look for:**\n- Urgent language ("Your account will be closed!")\n- Mismatched sender address (support@amaz0n-security.com)\n- Generic greetings ("Dear Customer" instead of your name)\n- Suspicious links (hover before clicking!)\n- Unexpected attachments\n\n**What to do if you clicked a phishing link:**\n1. Don\'t enter any information\n2. Close the browser tab immediately\n3. Run an antivirus scan\n4. Change passwords for any accounts that might be affected\n5. Enable 2FA on all critical accounts\n\n**Report phishing:**\n- Forward to reportphishing@apwg.org\n- Mark as spam/phishing in your email client\n\n*Note: This is a placeholder video. In production, this would embed an actual TekSure tutorial.*`,
  },
];

export const categoryLabels: Record<GuideCategory, string> = {
  'troubleshooting': 'Troubleshooting',
  'knowledge-base': 'Knowledge Base',
  'blog': 'Tech Tips & Blog',
  'video': 'Video Tutorials',
};

export const categoryDescriptions: Record<GuideCategory, string> = {
  'troubleshooting': 'Step-by-step DIY fixes for common tech issues',
  'knowledge-base': 'FAQs and essential information about TekSure',
  'blog': 'Expert advice, security tips, and tech recommendations',
  'video': 'Watch and learn with our visual guides',
};
