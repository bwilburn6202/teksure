// ── Types ─────────────────────────────────────────────────────────────────────

export interface ContentSource {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
  faviconUrl: string;
  description: string;
  website: string;
  type: 'official' | 'educational' | 'news' | 'nonprofit';
  articleCount: number;
  accentColor: string; // Tailwind bg color class
  textColor: string;   // Tailwind text color class
}

export type OsTag = 'Windows' | 'Mac' | 'iOS' | 'Android' | 'Any';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ArticleStep {
  title: string;
  content: string;
  tip?: string;
  warning?: string;
}

export interface AggregatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  sourceId: string;
  originalUrl: string;
  authorName?: string;
  publishedDate: string; // ISO date string
  difficulty: Difficulty;
  readTime: string;
  osTags: OsTag[];
  thumbnailEmoji: string;
  steps: ArticleStep[];
  relatedSlugs: string[];
  featured?: boolean;
}

// ── Sources ───────────────────────────────────────────────────────────────────

export const contentSources: ContentSource[] = [
  {
    id: 'apple-support',
    name: 'Apple Support',
    shortName: 'Apple',
    logoUrl: 'https://www.apple.com/favicon.ico',
    faviconUrl: 'https://www.apple.com/favicon.ico',
    description: 'Official support documentation from Apple, covering all Apple devices, apps, and services.',
    website: 'https://support.apple.com',
    type: 'official',
    articleCount: 4,
    accentColor: 'bg-gray-100 dark:bg-gray-900/40',
    textColor: 'text-gray-700 dark:text-gray-300',
  },
  {
    id: 'google-support',
    name: 'Google Support',
    shortName: 'Google',
    logoUrl: 'https://www.google.com/favicon.ico',
    faviconUrl: 'https://www.google.com/favicon.ico',
    description: 'Official help center content from Google for Gmail, Chrome, Android, and all Google products.',
    website: 'https://support.google.com',
    type: 'official',
    articleCount: 3,
    accentColor: 'bg-blue-50 dark:bg-blue-950/30',
    textColor: 'text-blue-700 dark:text-blue-300',
  },
  {
    id: 'microsoft-support',
    name: 'Microsoft Support',
    shortName: 'Microsoft',
    logoUrl: 'https://www.microsoft.com/favicon.ico',
    faviconUrl: 'https://www.microsoft.com/favicon.ico',
    description: 'Official help documentation from Microsoft for Windows, Office, and all Microsoft products.',
    website: 'https://support.microsoft.com',
    type: 'official',
    articleCount: 5,
    accentColor: 'bg-blue-50 dark:bg-blue-950/30',
    textColor: 'text-blue-700 dark:text-blue-300',
  },
  {
    id: 'aarp',
    name: 'AARP Technology',
    shortName: 'AARP',
    logoUrl: 'https://www.aarp.org/favicon.ico',
    faviconUrl: 'https://www.aarp.org/favicon.ico',
    description: 'Technology guides and digital literacy resources from AARP, written specifically for older adults.',
    website: 'https://www.aarp.org/home-family/personal-technology/',
    type: 'nonprofit',
    articleCount: 3,
    accentColor: 'bg-red-50 dark:bg-red-950/30',
    textColor: 'text-red-700 dark:text-red-300',
  },
  {
    id: 'how-to-geek',
    name: 'How-To Geek',
    shortName: 'How-To Geek',
    logoUrl: 'https://www.howtogeek.com/favicon.ico',
    faviconUrl: 'https://www.howtogeek.com/favicon.ico',
    description: 'Practical how-to guides and tutorials written for everyday computer users, beginner-friendly.',
    website: 'https://www.howtogeek.com',
    type: 'educational',
    articleCount: 4,
    accentColor: 'bg-green-50 dark:bg-green-950/30',
    textColor: 'text-green-700 dark:text-green-300',
  },
  {
    id: 'ftc',
    name: 'FTC Consumer Advice',
    shortName: 'FTC',
    logoUrl: 'https://consumer.ftc.gov/favicon.ico',
    faviconUrl: 'https://consumer.ftc.gov/favicon.ico',
    description: 'Consumer protection advice from the Federal Trade Commission on online safety, scams, and privacy.',
    website: 'https://consumer.ftc.gov',
    type: 'official',
    articleCount: 2,
    accentColor: 'bg-purple-50 dark:bg-purple-950/30',
    textColor: 'text-purple-700 dark:text-purple-300',
  },
];

export function getSourceById(id: string): ContentSource | undefined {
  return contentSources.find(s => s.id === id);
}

// ── Articles ──────────────────────────────────────────────────────────────────

export const aggregatedArticles: AggregatedArticle[] = [
  {
    slug: 'how-to-set-up-face-id-iphone',
    title: 'How to Set Up Face ID on Your iPhone',
    excerpt: 'Face ID lets you unlock your iPhone just by looking at it. This guide walks you through setup in a few easy steps.',
    category: 'iPhone & iPad',
    sourceId: 'apple-support',
    originalUrl: 'https://support.apple.com/en-us/108957',
    publishedDate: '2024-09-15',
    difficulty: 'Beginner',
    readTime: '4 min read',
    osTags: ['iOS'],
    thumbnailEmoji: '👤',
    featured: true,
    relatedSlugs: ['how-to-use-icloud-backup', 'how-to-update-your-iphone'],
    steps: [
      {
        title: 'Open your iPhone Settings',
        content: 'Tap the grey gear icon called "Settings" on your iPhone\'s home screen. It\'s usually in the first row of apps.',
      },
      {
        title: 'Tap "Face ID & Passcode"',
        content: 'Scroll down a little and tap "Face ID & Passcode." You\'ll be asked to enter your current passcode to continue.',
        tip: 'If you don\'t have a passcode set yet, you\'ll be prompted to create one first.',
      },
      {
        title: 'Tap "Set Up Face ID"',
        content: 'On the Face ID & Passcode screen, tap the green button that says "Set Up Face ID." Hold your iPhone in portrait orientation (upright).',
      },
      {
        title: 'Position your face in the frame',
        content: 'Your iPhone\'s front camera will open and show a circle. Hold the phone at eye level and fit your face inside the circle. You\'ll see a circular progress indicator.',
        tip: 'Make sure you\'re in a well-lit area. Remove glasses or a hat if the scan doesn\'t work at first.',
      },
      {
        title: 'Slowly move your head in a circle',
        content: 'Gently move your head in a slow circle, as if you\'re tracing a circle with your nose. The phone will scan your face from different angles. Do this twice.',
      },
      {
        title: 'Tap "Done" when finished',
        content: 'Once the scan is complete, you\'ll see "Face ID is Now Set Up." Tap Done. Your iPhone will now unlock when you look at it.',
        tip: 'You can add an "alternate appearance" (like with or without glasses) in the same Face ID settings screen.',
      },
    ],
  },
  {
    slug: 'how-to-use-icloud-backup',
    title: 'Back Up Your iPhone to iCloud Automatically',
    excerpt: 'iCloud backup keeps a copy of everything on your iPhone safe in the cloud. Set it up once and it works in the background.',
    category: 'iPhone & iPad',
    sourceId: 'apple-support',
    originalUrl: 'https://support.apple.com/en-us/108770',
    publishedDate: '2024-10-01',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['iOS'],
    thumbnailEmoji: '☁️',
    relatedSlugs: ['how-to-set-up-face-id-iphone', 'how-to-update-your-iphone'],
    steps: [
      {
        title: 'Open Settings and tap your name',
        content: 'Open the Settings app (grey gear icon). At the very top, tap your name — this opens your Apple ID settings.',
      },
      {
        title: 'Tap "iCloud"',
        content: 'On the Apple ID screen, tap "iCloud" to see all the things that sync with your iCloud account.',
      },
      {
        title: 'Tap "iCloud Backup"',
        content: 'Scroll down and tap "iCloud Backup." On newer iPhones it may be listed under "Device Backups."',
      },
      {
        title: 'Turn on "Back Up This iPhone"',
        content: 'Tap the switch next to "Back Up This iPhone" so it turns green. This means your phone will automatically back up.',
        tip: 'Automatic backups happen when your phone is plugged in, connected to Wi-Fi, and screen is locked — usually overnight.',
      },
      {
        title: 'Start a manual backup now',
        content: 'Tap "Back Up Now" to make a backup right away. You\'ll see the date and time of your last backup at the bottom of the screen.',
        warning: 'Make sure you have enough iCloud storage. You get 5GB for free. If it\'s full, you can upgrade storage or delete old backups from other devices.',
      },
    ],
  },
  {
    slug: 'how-to-update-your-iphone',
    title: 'How to Update Your iPhone to the Latest iOS',
    excerpt: 'Keeping your iPhone updated protects it from security issues and adds new features. Here\'s how to check and install updates.',
    category: 'iPhone & iPad',
    sourceId: 'apple-support',
    originalUrl: 'https://support.apple.com/en-us/111900',
    publishedDate: '2024-11-05',
    difficulty: 'Beginner',
    readTime: '4 min read',
    osTags: ['iOS'],
    thumbnailEmoji: '🔄',
    relatedSlugs: ['how-to-use-icloud-backup', 'how-to-set-up-face-id-iphone'],
    steps: [
      {
        title: 'Open Settings',
        content: 'Tap the grey gear icon called "Settings" on your iPhone\'s home screen.',
      },
      {
        title: 'Tap "General"',
        content: 'In Settings, tap "General" — it\'s near the top of the list with an icon that looks like a gear inside a circle.',
      },
      {
        title: 'Tap "Software Update"',
        content: 'Tap "Software Update." Your iPhone will check if an update is available. This may take a moment.',
      },
      {
        title: 'Install the update',
        content: 'If an update is available, tap "Install Now." You\'ll be asked to agree to Apple\'s terms. Your phone will restart as part of the update.',
        tip: 'Connect your iPhone to a charger before updating — updates can use a lot of battery.',
        warning: 'Make sure you have a backup before updating, just in case. See our iCloud Backup guide if you haven\'t backed up recently.',
      },
      {
        title: 'Wait for the update to finish',
        content: 'Your iPhone will show the Apple logo while it updates. This usually takes 10–20 minutes. Don\'t turn off your phone during this time.',
      },
    ],
  },
  {
    slug: 'how-to-use-google-password-manager',
    title: 'Save and Manage Your Passwords with Google',
    excerpt: 'Google can remember all your passwords so you don\'t have to. This guide shows you how to use Google\'s free built-in password manager.',
    category: 'Passwords & Security',
    sourceId: 'google-support',
    originalUrl: 'https://support.google.com/accounts/answer/6208650',
    publishedDate: '2024-08-20',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['Android', 'Any'],
    thumbnailEmoji: '🔑',
    featured: true,
    relatedSlugs: ['how-to-secure-gmail-account', 'protect-against-phishing-ftc'],
    steps: [
      {
        title: 'Make sure you\'re signed into Google Chrome',
        content: 'Open Google Chrome on your phone or computer. In the top-right corner, you\'ll see either your profile picture or a person icon. Tap it and sign in with your Google account if you\'re not already.',
      },
      {
        title: 'Let Chrome offer to save a password',
        content: 'The next time you log into a website, Chrome will ask "Save password?" at the top or bottom of your screen. Tap "Save" to store that password.',
        tip: 'If you miss the prompt, don\'t worry — you can still add passwords manually.',
      },
      {
        title: 'View your saved passwords',
        content: 'Go to passwords.google.com in your browser, or open Chrome Settings and tap "Password Manager." Here you can see all your saved passwords.',
      },
      {
        title: 'Use autofill to log in automatically',
        content: 'When you visit a website you\'ve saved a password for, Chrome will automatically fill in your username and password. Just tap the login fields and choose the saved account.',
      },
      {
        title: 'Check for weak or compromised passwords',
        content: 'In Password Manager, tap "Check passwords." Google will tell you if any of your passwords have been in a data breach or are easy to guess.',
        warning: 'If Google flags a password as "compromised," change it on that website right away.',
      },
    ],
  },
  {
    slug: 'how-to-secure-gmail-account',
    title: 'How to Make Your Gmail Account More Secure',
    excerpt: 'A few simple steps can make your Gmail much harder for hackers to access. This guide covers the most important security settings.',
    category: 'Passwords & Security',
    sourceId: 'google-support',
    originalUrl: 'https://support.google.com/accounts/answer/46526',
    publishedDate: '2024-09-10',
    difficulty: 'Beginner',
    readTime: '6 min read',
    osTags: ['Any'],
    thumbnailEmoji: '🔒',
    relatedSlugs: ['how-to-use-google-password-manager', 'protect-against-phishing-ftc'],
    steps: [
      {
        title: 'Do a Google Security Checkup',
        content: 'Go to myaccount.google.com and tap "Security." Then tap "Security Checkup." Google will walk you through recommended steps to secure your account.',
      },
      {
        title: 'Turn on 2-Step Verification',
        content: 'In Security settings, tap "2-Step Verification." This adds a second step when you sign in — like a code sent to your phone — so even if someone has your password, they can\'t get in.',
        tip: 'Use Google Prompt for the easiest experience — you just tap "Yes" on your phone to approve sign-ins.',
      },
      {
        title: 'Review connected apps',
        content: 'Scroll to "Your connections to third-party apps & services." Review the list and remove any apps you no longer use or don\'t recognize.',
      },
      {
        title: 'Check recent account activity',
        content: 'At the bottom of Gmail, tap "Details" (on desktop) or go to Settings > Account Activity. You\'ll see where and when your account was last accessed. Sign out any sessions you don\'t recognize.',
        warning: 'If you see activity from a location you don\'t recognize, change your password immediately.',
      },
      {
        title: 'Set up a recovery phone and email',
        content: 'In Security settings, add a recovery phone number and backup email address. Google uses these to help you get back into your account if you ever get locked out.',
      },
    ],
  },
  {
    slug: 'how-to-update-windows-11',
    title: 'How to Update Windows 11 on Your Computer',
    excerpt: 'Keeping Windows updated is one of the best things you can do to keep your PC safe. Here\'s the easy way to check for and install updates.',
    category: 'Windows PC',
    sourceId: 'microsoft-support',
    originalUrl: 'https://support.microsoft.com/en-us/windows/update-windows-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a',
    publishedDate: '2024-10-15',
    difficulty: 'Beginner',
    readTime: '4 min read',
    osTags: ['Windows'],
    thumbnailEmoji: '🪟',
    featured: true,
    relatedSlugs: ['how-to-use-windows-defender', 'how-to-set-up-windows-hello'],
    steps: [
      {
        title: 'Open the Start Menu',
        content: 'Click the Windows button in the bottom-left corner of your screen (it looks like four small squares). This opens the Start Menu.',
      },
      {
        title: 'Open Settings',
        content: 'In the Start Menu, click the gear icon that says "Settings" (or press Windows key + I on your keyboard).',
      },
      {
        title: 'Click "Windows Update"',
        content: 'In Settings, look in the left sidebar and click "Windows Update." If you don\'t see a sidebar, look for "Update & Security."',
      },
      {
        title: 'Click "Check for updates"',
        content: 'Click the blue "Check for updates" button. Windows will search for any available updates.',
      },
      {
        title: 'Install any available updates',
        content: 'If updates are found, click "Download & Install." Your computer may need to restart to finish installing. Save any work before restarting.',
        tip: 'You can choose "Schedule restart" to install updates at a time that\'s convenient for you.',
        warning: 'Don\'t turn off your computer while updates are installing. It could cause problems.',
      },
    ],
  },
  {
    slug: 'how-to-use-windows-defender',
    title: 'How to Use Windows Security to Scan for Viruses',
    excerpt: 'Windows comes with a free built-in virus scanner called Windows Security. Here\'s how to run a scan and check your protection.',
    category: 'Windows PC',
    sourceId: 'microsoft-support',
    originalUrl: 'https://support.microsoft.com/en-us/windows/stay-protected-with-windows-security-2ae0363d-0ada-c064-8b56-6a39afb6a963',
    publishedDate: '2024-11-01',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['Windows'],
    thumbnailEmoji: '🛡️',
    relatedSlugs: ['how-to-update-windows-11', 'protect-against-phishing-ftc'],
    steps: [
      {
        title: 'Open Windows Security',
        content: 'Click the Start button (Windows icon) and type "Windows Security." Click on the app that appears. You can also find it by clicking the shield icon in the taskbar at the bottom right.',
      },
      {
        title: 'Check your protection status',
        content: 'The main screen shows green checkmarks if everything is working properly. If you see yellow or red warnings, tap the item to see what needs attention.',
      },
      {
        title: 'Open Virus & Threat Protection',
        content: 'Click "Virus & threat protection" — it shows a shield with a checkmark. This is where you run scans.',
      },
      {
        title: 'Run a Quick Scan',
        content: 'Click "Quick scan." Windows will check the most common locations where viruses hide. This usually takes 1–5 minutes.',
        tip: 'For a more thorough check, click "Scan options" and choose "Full scan." This takes longer but checks your entire computer.',
      },
      {
        title: 'Review the results',
        content: 'When the scan finishes, you\'ll see "No current threats" if your computer is clean. If threats are found, Windows will show you what was found and offer to remove it.',
        warning: 'If Windows Security is turned off and you didn\'t do it yourself, your computer may already be infected. Ask a tech professional for help.',
      },
    ],
  },
  {
    slug: 'avoid-tech-support-scams-ftc',
    title: 'How to Spot and Avoid Tech Support Scams',
    excerpt: 'Scammers pretend to be from Microsoft, Apple, or your internet company to trick you into giving them access to your computer. Here\'s how to stay safe.',
    category: 'Online Safety',
    sourceId: 'ftc',
    originalUrl: 'https://consumer.ftc.gov/articles/tech-support-scams',
    publishedDate: '2024-07-10',
    difficulty: 'Beginner',
    readTime: '6 min read',
    osTags: ['Any'],
    thumbnailEmoji: '⚠️',
    featured: true,
    relatedSlugs: ['protect-against-phishing-ftc', 'how-to-secure-gmail-account'],
    steps: [
      {
        title: 'Know the warning signs',
        content: 'Scammers may call you out of the blue, show fake pop-up alerts saying your computer is infected, or send emails asking you to call a number. Legitimate companies like Microsoft and Apple never contact you this way.',
        warning: 'If a pop-up window tells you to call a phone number, do NOT call it. Close the window or restart your browser.',
      },
      {
        title: 'Never give remote access to your computer',
        content: 'If someone you don\'t know asks to "take over" or "connect to" your computer to fix a problem, refuse. Scammers use this access to steal your files, install spyware, or demand payment.',
      },
      {
        title: 'Hang up on unsolicited phone calls',
        content: 'If you get a call from "Microsoft," "Apple," "Google," or your internet provider saying there\'s a problem with your computer, hang up. These companies don\'t make unsolicited calls like this.',
        tip: 'It\'s always okay to hang up and call the company\'s real support number (found on their official website) to verify.',
      },
      {
        title: 'Don\'t pay with gift cards or wire transfer',
        content: 'Scammers often ask for payment in gift cards (Google Play, iTunes, Amazon) or wire transfers. Real companies never ask for payment this way. This is always a scam.',
      },
      {
        title: 'Report it to the FTC',
        content: 'If you think you\'ve been targeted, report it at ReportFraud.ftc.gov. Your report helps the FTC stop scammers and warn others.',
      },
    ],
  },
  {
    slug: 'protect-against-phishing-ftc',
    title: 'How to Recognize and Avoid Phishing Emails',
    excerpt: 'Phishing emails pretend to be from banks, Amazon, or the government to steal your information. Learn to spot them before it\'s too late.',
    category: 'Online Safety',
    sourceId: 'ftc',
    originalUrl: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    publishedDate: '2024-08-05',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['Any'],
    thumbnailEmoji: '🎣',
    relatedSlugs: ['avoid-tech-support-scams-ftc', 'how-to-secure-gmail-account'],
    steps: [
      {
        title: 'Look at the sender\'s email address closely',
        content: 'Phishing emails often use addresses that look almost right but have small differences — like "amazon-support@amaz0n.com" instead of "@amazon.com." Always check the full email address, not just the name.',
      },
      {
        title: 'Watch out for urgent language',
        content: '"Your account will be closed!" or "Verify now or lose access!" — phishing emails create panic to make you act without thinking. Slow down. Legitimate companies give you time.',
        tip: 'If an email seems urgent, go directly to the company\'s website by typing the address yourself — don\'t click links in the email.',
      },
      {
        title: 'Don\'t click suspicious links',
        content: 'Hover over links (on a computer) before clicking. You\'ll see the real web address at the bottom of your screen. If it looks strange or doesn\'t match the company, don\'t click it.',
      },
      {
        title: 'Never enter your password from an email link',
        content: 'If an email asks you to "verify" your password, don\'t do it from the link in the email. Instead, open a new browser tab and go directly to the website by typing its address.',
        warning: 'Your bank, Amazon, PayPal, and similar services will never ask for your password via email.',
      },
      {
        title: 'Report phishing emails',
        content: 'In Gmail, open the email, click the three dots (⋮) in the top right, and select "Report phishing." In Outlook, use "Report" > "Report phishing." You can also forward suspicious emails to phishing@ftc.gov.',
      },
    ],
  },
  {
    slug: 'understanding-smartphones-for-seniors',
    title: 'A Beginner\'s Guide to Smartphones for Seniors',
    excerpt: 'Not sure what a smartphone can do or how to get started? This friendly guide covers the basics in plain language.',
    category: 'Getting Started',
    sourceId: 'aarp',
    originalUrl: 'https://www.aarp.org/home-family/personal-technology/info-2023/smartphone-basics.html',
    publishedDate: '2024-06-01',
    difficulty: 'Beginner',
    readTime: '7 min read',
    osTags: ['iOS', 'Android'],
    thumbnailEmoji: '📱',
    relatedSlugs: ['how-to-set-up-face-id-iphone', 'how-to-use-google-password-manager'],
    steps: [
      {
        title: 'Understanding the basics',
        content: 'A smartphone is a phone that can also connect to the internet, take photos, run apps, and much more. The screen is a touchscreen — you use your fingertips instead of buttons.',
        tip: 'Tap once to open an app, swipe (slide your finger) to scroll up and down, and press and hold (long press) for extra options.',
      },
      {
        title: 'Setting up your home screen',
        content: 'The home screen is what you see when you turn on your phone. It shows your most-used apps as tiles or icons. You can tap an icon to open the app. Swipe left or right to see more apps.',
      },
      {
        title: 'Making and receiving calls',
        content: 'Tap the green Phone icon to make a call. Type the number using the keypad and tap the green phone button to call. To answer an incoming call, swipe the green button or tap "Accept."',
      },
      {
        title: 'Sending a text message',
        content: 'Tap the Messages app (speech bubble icon). Tap the pencil or "compose" icon. Type a name or phone number and tap "To:" to choose who to text. Then type your message and tap the send button.',
        tip: 'You can speak your message instead of typing — tap the microphone icon on the keyboard.',
      },
      {
        title: 'Adjusting text size for easier reading',
        content: 'If the text is too small, go to Settings and look for "Display" or "Accessibility." You can increase the text size so everything is easier to read.',
      },
      {
        title: 'Keeping your phone charged',
        content: 'Your phone uses a battery that needs regular charging. Plug the charging cable into the bottom of your phone and into a power outlet. A full charge usually takes 1–2 hours. Try to charge it overnight.',
        warning: 'Don\'t let your battery reach 0% very often — it can shorten the battery\'s life over time.',
      },
    ],
  },
  {
    slug: 'how-to-spot-fake-websites',
    title: 'How to Tell if a Website is Safe Before You Enter Your Info',
    excerpt: 'Fake websites look just like real ones. These simple checks help you tell the difference and protect your personal information.',
    category: 'Online Safety',
    sourceId: 'how-to-geek',
    originalUrl: 'https://www.howtogeek.com/182744/how-to-spot-a-dangerous-email-link/',
    publishedDate: '2024-09-25',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['Any'],
    thumbnailEmoji: '🌐',
    relatedSlugs: ['protect-against-phishing-ftc', 'avoid-tech-support-scams-ftc'],
    steps: [
      {
        title: 'Look for the padlock icon',
        content: 'Before entering any personal information, look at the address bar at the top of your browser. You should see a padlock icon (🔒) to the left of the web address. This means the connection is encrypted.',
        tip: 'If you see "Not Secure" or a broken padlock, don\'t enter any personal or financial information on that page.',
      },
      {
        title: 'Check the web address carefully',
        content: 'Look at the address in the bar at the top — it starts with "https://". Check that the company name is spelled correctly. Fake sites use addresses like "amaz0n.com" (zero instead of O) or "paypa1.com."',
      },
      {
        title: 'Look for contact information',
        content: 'Real businesses have a physical address, phone number, and email on their website. Scroll to the bottom of the page (the "footer"). If there\'s no contact information at all, be very cautious.',
      },
      {
        title: 'Watch out for deals that seem too good',
        content: 'If a site is selling brand-name items for 80% off or promising huge prizes, it\'s likely fake. Scam websites lure people in with impossible deals.',
        warning: 'Never enter your credit card information on a site you don\'t trust. When in doubt, go to the official store\'s website directly.',
      },
      {
        title: 'Use a site safety checker',
        content: 'If you\'re not sure about a website, you can check it for free at Google Safe Browsing (safebrowsing.google.com/safebrowsing/report_overview/) or VirusTotal. These tools tell you if a site has been reported as dangerous.',
      },
    ],
  },
  {
    slug: 'how-to-set-up-windows-hello',
    title: 'Set Up Windows Hello to Sign In with Your Face or Fingerprint',
    excerpt: 'Windows Hello lets you unlock your PC by looking at it or touching a fingerprint sensor — no more typing your password every time.',
    category: 'Windows PC',
    sourceId: 'microsoft-support',
    originalUrl: 'https://support.microsoft.com/en-us/windows/learn-about-windows-hello-and-set-it-up-dae28983-8242-bb2a-d3d1-87c9d265a5f0',
    publishedDate: '2024-10-20',
    difficulty: 'Beginner',
    readTime: '5 min read',
    osTags: ['Windows'],
    thumbnailEmoji: '👋',
    relatedSlugs: ['how-to-update-windows-11', 'how-to-use-windows-defender'],
    steps: [
      {
        title: 'Open Settings',
        content: 'Click the Start button and then the gear icon to open Settings. Or press Windows key + I on your keyboard.',
      },
      {
        title: 'Go to Accounts > Sign-in options',
        content: 'Click "Accounts" in the left sidebar, then click "Sign-in options." You\'ll see options for Windows Hello Face, Fingerprint, and PIN.',
      },
      {
        title: 'Set up facial recognition or fingerprint',
        content: 'Click either "Windows Hello Face" or "Windows Hello Fingerprint" (depending on your PC\'s capabilities). Click "Set up" and follow the on-screen instructions.',
        tip: 'Not sure if your PC supports Windows Hello? If you don\'t see these options, your PC may not have the right camera or fingerprint sensor.',
      },
      {
        title: 'Look at the camera or scan your finger',
        content: 'For facial recognition: look at the camera while it scans your face. For fingerprint: rest your finger on the fingerprint sensor when prompted, lifting and placing it several times.',
      },
      {
        title: 'You\'re done — try it out',
        content: 'Lock your PC (Windows key + L) and then try signing back in. Your PC should recognize you without needing a password.',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): AggregatedArticle | undefined {
  return aggregatedArticles.find(a => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): AggregatedArticle[] {
  return slugs
    .map(s => getArticleBySlug(s))
    .filter((a): a is AggregatedArticle => a !== undefined);
}

export function getArticlesBySource(sourceId: string): AggregatedArticle[] {
  return aggregatedArticles.filter(a => a.sourceId === sourceId);
}
