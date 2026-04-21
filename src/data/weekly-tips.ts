// ── Weekly Tips ─────────────────────────────────────────────────────────────
// 60 tips that rotate deterministically by ISO week number. See WeeklyTips.tsx
// for how the rotation works (no server needed — pure date math).
//
// Each tip belongs to one of seven themes so a week's set feels varied:
// safety, setting, app, quickfix, senior, wellness, seasonal.

export type TipCategory =
  | 'Safety'
  | 'Smart Setting'
  | 'App Pick'
  | 'Quick Fix'
  | 'Senior-Friendly'
  | 'Digital Wellness'
  | 'Seasonal';

export interface WeeklyTip {
  id: number;
  category: TipCategory;
  /** Single-sentence headline — this is what people scan. */
  headline: string;
  /** 2–3 short paragraphs of friendly, plainspoken detail. */
  body: string[];
  /** "Try this" CTA label. Keep it to ~4 words. */
  ctaLabel: string;
  /** Internal link to a guide or tool. */
  ctaHref: string;
  /** lucide-react icon name used in the page. */
  icon:
    | 'Shield'
    | 'Lock'
    | 'KeyRound'
    | 'Eye'
    | 'Mail'
    | 'Smartphone'
    | 'Laptop'
    | 'Wifi'
    | 'Battery'
    | 'Volume2'
    | 'Accessibility'
    | 'Heart'
    | 'Moon'
    | 'Sun'
    | 'Gift'
    | 'Calendar'
    | 'Bell'
    | 'Search'
    | 'Camera'
    | 'Printer'
    | 'Cloud'
    | 'HardDrive'
    | 'Download'
    | 'Settings'
    | 'Zap'
    | 'Leaf'
    | 'Globe'
    | 'Lightbulb'
    | 'AlertTriangle'
    | 'Users';
}

export const weeklyTips: WeeklyTip[] = [
  // ── Safety (scams, passwords, phishing) ───────────────────────────────────
  {
    id: 1,
    category: 'Safety',
    icon: 'AlertTriangle',
    headline: 'The "Your Package Can\'t Be Delivered" text is a scam — do not tap the link.',
    body: [
      'USPS, UPS, FedEx, and Amazon never text you a clickable link to "reschedule" a delivery. Scammers send millions of these texts a day, and they all lead to fake login pages or pages that install spyware.',
      'If you are genuinely expecting a package, open the carrier\'s app or type the website address yourself. Your tracking number lives there, and it is always up to date.',
      'To stop the texts, forward them to 7726 (which spells SPAM). Your carrier uses those reports to block the sender for everyone.',
    ],
    ctaLabel: 'Learn to spot scam texts',
    ctaHref: '/safety/scam-alerts',
  },
  {
    id: 2,
    category: 'Safety',
    icon: 'KeyRound',
    headline: 'If you reuse passwords, change the ones on your email and bank today.',
    body: [
      'When one website gets hacked, the attackers take the password list and try it on every other site. Using the same password across accounts is how one breach becomes ten.',
      'You do not have to fix everything at once. Start with your email account — because whoever has your email can reset every other password you own. Then your bank, then anything with a saved credit card.',
      'A password manager remembers the new ones for you. Bitwarden is free and works on every device.',
    ],
    ctaLabel: 'Check your password strength',
    ctaHref: '/tools/password-strength',
  },
  {
    id: 3,
    category: 'Safety',
    icon: 'Shield',
    headline: 'Treat every unexpected "urgent" call from your bank as a scam until proven otherwise.',
    body: [
      'A real bank will never call you and ask for your full password, a one-time code, or to "move your money to a safe account." Those are all scammer scripts, delivered with artificial urgency.',
      'The safest move: hang up and call the number on the back of your debit card. If the call was real, the bank will be able to confirm it. If it was a scam, you just saved yourself thousands.',
      'Urgency and fear are the tools. Slowing down is the defense.',
    ],
    ctaLabel: 'See this week\'s scam alerts',
    ctaHref: '/safety/scam-alerts',
  },
  {
    id: 4,
    category: 'Safety',
    icon: 'Eye',
    headline: 'Hover over links in emails before clicking — the real address tells the truth.',
    body: [
      'On a computer, rest your mouse over any link without clicking and the real destination appears at the bottom of your screen. On a phone, press and hold the link — a preview will pop up.',
      'If an email claims to be from Apple but the link points to "apple-support-account-verify.ru," that is a phishing page. Legitimate company links point to that company\'s real domain.',
      'This one habit catches most phishing attempts before they do any damage.',
    ],
    ctaLabel: 'Try the phishing scanner',
    ctaHref: '/tools/phishing-scanner',
  },
  {
    id: 5,
    category: 'Safety',
    icon: 'Lock',
    headline: 'Turn on two-factor authentication for your email — it takes 3 minutes and stops 99% of attacks.',
    body: [
      'Two-factor authentication (often called "2FA") means that even if someone steals your password, they still cannot log in without a code from your phone. Google says it blocks 99% of automated attacks.',
      'Start with your email. Gmail: Settings → Security → 2-Step Verification. Outlook: Account → Security → Advanced security options. It takes maybe three minutes and you only have to do it once.',
      'Authenticator app codes are safer than text messages, but text is still dramatically better than no 2FA at all. Pick whichever you will actually use.',
    ],
    ctaLabel: 'Two-factor setup walkthrough',
    ctaHref: '/tools/two-factor-setup',
  },
  {
    id: 6,
    category: 'Safety',
    icon: 'AlertTriangle',
    headline: 'The grandparent scam is back — if "grandkid" calls in trouble, verify before you pay.',
    body: [
      'Scammers call pretending to be a grandchild in jail, in a car accident, or stranded abroad — and they beg you not to tell their parents. With cheap AI voice cloning, the voice may even sound right.',
      'Hang up. Call your grandchild directly, or call their parent. Agree on a family "safe word" ahead of time — a silly phrase only real family members would know — and ask for it if you ever get a call like this.',
      'Real emergencies can wait five minutes for you to verify. Scams cannot.',
    ],
    ctaLabel: 'See how the scam works',
    ctaHref: '/safety/scam-alerts',
  },
  {
    id: 7,
    category: 'Safety',
    icon: 'Mail',
    headline: 'Unsubscribe from shady senders the safe way: block, don\'t click.',
    body: [
      'Clicking "unsubscribe" on a scam email actually tells the scammer that your address is live and that someone reads it. You just got added to the premium list.',
      'Instead, in Gmail or Outlook, open the email and choose "Block sender" or "Report spam." That gets rid of future messages without pinging the scammer back.',
      'For legitimate newsletters you forgot about, unsubscribing is fine. The test is whether you recognize the sender.',
    ],
    ctaLabel: 'Declutter your email safely',
    ctaHref: '/tools/email-declutter',
  },
  {
    id: 8,
    category: 'Safety',
    icon: 'Shield',
    headline: 'Register every household phone number at donotcall.gov — it is free and never expires.',
    body: [
      'The federal Do Not Call Registry tells legitimate telemarketers to leave you alone. Scammers ignore it, but the overall volume of calls drops noticeably within about 30 days of signing up.',
      'Go to donotcall.gov, enter your phone numbers (yours, your spouse\'s, even your landline), and confirm by email. That is the entire process. It stays in effect forever unless you disconnect the number.',
      'Pair this with your phone\'s "Silence Unknown Callers" setting and most spam calls simply stop reaching you.',
    ],
    ctaLabel: 'Report a scam',
    ctaHref: '/tools/scam-report',
  },
  {
    id: 9,
    category: 'Safety',
    icon: 'Lock',
    headline: 'Your phone\'s lock screen is the weakest link — use 6 digits, not 4.',
    body: [
      'A 4-digit PIN has 10,000 combinations. A thief can try a lot of them. A 6-digit PIN has a million, which is effectively unguessable without erasing the phone.',
      'iPhone: Settings → Face ID & Passcode → Change Passcode → Passcode Options → 6-Digit Numeric Code. Android: Settings → Security → Screen Lock. Takes 30 seconds.',
      'Also turn on Face ID or fingerprint unlock. It is faster AND more secure than any PIN.',
    ],
    ctaLabel: 'Harden your device',
    ctaHref: '/tools/cyber-scorecard',
  },

  // ── Smart Setting (hidden features worth enabling) ────────────────────────
  {
    id: 10,
    category: 'Smart Setting',
    icon: 'Smartphone',
    headline: 'Enable "Silence Unknown Callers" — your phone stops ringing for numbers you do not know.',
    body: [
      'iPhone: Settings → Phone → Silence Unknown Callers → On. Android: Phone app → three dots → Settings → Blocked numbers → Unknown → On.',
      'Your phone will still show the call in your recent list and let legitimate callers leave voicemail, so you never truly miss anything. It just stops the constant interruption from spam numbers.',
      'If you are worried about missing a call from a doctor\'s office or delivery driver, save their number first so it rings through.',
    ],
    ctaLabel: 'More quick phone fixes',
    ctaHref: '/quick-fixes',
  },
  {
    id: 11,
    category: 'Smart Setting',
    icon: 'Moon',
    headline: 'Turn on Do Not Disturb at bedtime — your phone stops waking you up.',
    body: [
      'Every modern phone has a schedule that silences notifications automatically between the hours you choose. No 2am Facebook pings, no app that forgot about time zones.',
      'iPhone: Settings → Focus → Do Not Disturb → Schedule. Android: Settings → Sound & vibration → Do Not Disturb → Schedules.',
      'You can whitelist a few people — your spouse, your kids, the emergency contacts — so their calls still break through. Everything else waits until morning.',
    ],
    ctaLabel: 'Digital detox plan',
    ctaHref: '/digital-detox',
  },
  {
    id: 12,
    category: 'Smart Setting',
    icon: 'Eye',
    headline: 'Your phone can read any article to you out loud — turn on Speak Screen.',
    body: [
      'This is a hidden feature on both iPhone and Android, and it is wonderful when your eyes are tired or when you want to keep reading while you cook.',
      'iPhone: Settings → Accessibility → Spoken Content → Speak Screen. Then swipe two fingers down from the top of any page and it reads aloud.',
      'Android: Settings → Accessibility → Select to Speak. You get a little button that reads the text on screen when you tap it.',
    ],
    ctaLabel: 'See all accessibility features',
    ctaHref: '/accessibility',
  },
  {
    id: 13,
    category: 'Smart Setting',
    icon: 'Sun',
    headline: 'Turn on Night Shift or Dark Mode after sunset — your eyes will thank you.',
    body: [
      'Screens push blue light that tells your brain to stay awake. Dimming and warming the screen after dark makes it easier to wind down and easier to fall asleep.',
      'iPhone: Settings → Display & Brightness → Night Shift. Android: Settings → Display → Night Light. Both can schedule themselves automatically.',
      'Dark Mode (also in Display settings) flips the colors to white-on-black, which is easier on tired eyes in a dim room.',
    ],
    ctaLabel: 'Find more display tricks',
    ctaHref: '/tools/accessibility-check',
  },
  {
    id: 14,
    category: 'Smart Setting',
    icon: 'Bell',
    headline: 'Kill notification noise — turn off pings from every app except real people.',
    body: [
      'Every new app thinks its updates deserve to interrupt your day. Most do not. The average phone sends 60+ notifications a day, and fewer than 10 actually need a response.',
      'iPhone: Settings → Notifications → choose each app → turn off Allow Notifications. Android: Settings → Notifications → App notifications. Leave on only Phone, Messages, and apps from actual humans in your life.',
      'Your phone will feel calmer within a day. You will not miss anything that matters.',
    ],
    ctaLabel: 'Tame your notifications',
    ctaHref: '/digital-detox',
  },
  {
    id: 15,
    category: 'Smart Setting',
    icon: 'Lock',
    headline: 'Turn on automatic iOS/Android updates — you never have to think about security patches.',
    body: [
      'Software updates are how companies patch security holes after they are discovered. Unpatched phones are the ones that get hacked — and most people forget to update manually.',
      'iPhone: Settings → General → Software Update → Automatic Updates → turn both on. Android: Settings → System → System update → Auto download over Wi-Fi.',
      'Updates will install overnight while your phone is charging. You wake up protected.',
    ],
    ctaLabel: 'Cyber scorecard checkup',
    ctaHref: '/tools/cyber-scorecard',
  },
  {
    id: 16,
    category: 'Smart Setting',
    icon: 'Cloud',
    headline: 'Turn on iCloud / Google One backup — your photos survive a lost phone.',
    body: [
      'If your phone fell in the lake right now, would you lose photos? Contacts? Text messages? For most people, the answer is a sad yes.',
      'iPhone: Settings → your name → iCloud → iCloud Backup → turn on. Free plan covers 5GB — upgrade to 50GB for 99¢/month if you have lots of photos.',
      'Android: Settings → Google → Backup → turn on. 15GB free through Google One.',
    ],
    ctaLabel: 'Run the Backup Wizard',
    ctaHref: '/tools/backup-wizard',
  },

  // ── App Pick (one good app) ───────────────────────────────────────────────
  {
    id: 17,
    category: 'App Pick',
    icon: 'Lock',
    headline: 'Bitwarden: the free password manager that replaces the sticky note on your monitor.',
    body: [
      'You do not have to remember 80 passwords. Bitwarden remembers them for you, fills them in automatically on any website, and it is genuinely free (not a trial).',
      'Set one strong master password that you can actually remember — a short sentence works great. Bitwarden protects everything else behind it.',
      'It works on every phone, every computer, and every browser. Import your saved passwords from Chrome or Safari in a couple of clicks.',
    ],
    ctaLabel: 'Password manager guide',
    ctaHref: '/guides',
  },
  {
    id: 18,
    category: 'App Pick',
    icon: 'Globe',
    headline: 'Try Firefox — a browser that does not track you by default.',
    body: [
      'Firefox blocks trackers out of the box. That means fewer creepy "this ad followed me around the internet" moments, faster page loads, and longer laptop battery life.',
      'It looks and works much like Chrome. Your bookmarks and saved passwords can come along — Firefox has a built-in importer for exactly this.',
      'Made by Mozilla, a nonprofit. No data harvesting business model because they do not have that business model.',
    ],
    ctaLabel: 'Find more free software',
    ctaHref: '/free-software',
  },
  {
    id: 19,
    category: 'App Pick',
    icon: 'Download',
    headline: 'Signal: the private texting app that journalists and security pros use.',
    body: [
      'Signal encrypts every message end-to-end. Nobody — not the company, not your phone carrier, not a passing snoop — can read your messages or see what you sent.',
      'It works exactly like regular texting. Free, no ads, runs on iPhone and Android. If someone you message also has Signal, you both get the encryption automatically.',
      'For important conversations — money, health, family matters — this is the grown-up choice.',
    ],
    ctaLabel: 'Free apps worth installing',
    ctaHref: '/free-software',
  },
  {
    id: 20,
    category: 'App Pick',
    icon: 'Heart',
    headline: 'Calm or Insight Timer: a 10-minute daily pause that changes your whole week.',
    body: [
      'There is good evidence that 10 minutes of guided breathing a day lowers blood pressure, improves sleep, and reduces anxiety. You don\'t need to "believe in meditation" to benefit — the physiological effects are real.',
      'Calm has a polished free tier. Insight Timer is completely free with thousands of teachers. Try one for a week before you decide.',
      'Put the session right after you brush your teeth in the morning. Habit stacking is the trick that makes it stick.',
    ],
    ctaLabel: 'Digital wellness tools',
    ctaHref: '/digital-detox',
  },
  {
    id: 21,
    category: 'App Pick',
    icon: 'Gift',
    headline: 'Libby turns your library card into a free Netflix for books.',
    body: [
      'If you have a library card, you already have free access to thousands of e-books and audiobooks. The app that unlocks them is called Libby (made by OverDrive).',
      'Install Libby, add your library card, and start borrowing. Books appear on your phone, your Kindle, your car\'s audio system — no late fees, ever. Returns happen automatically.',
      'Most libraries also give you free passes to museums, language apps, even newspapers. Ask your librarian what else is included.',
    ],
    ctaLabel: 'Find local library help',
    ctaHref: '/tech-help-near-me',
  },
  {
    id: 22,
    category: 'App Pick',
    icon: 'Users',
    headline: 'Marco Polo: video texting for family members scattered across time zones.',
    body: [
      'It is like FaceTime, but nobody has to be available at the same time. You record a short video, they watch it whenever, they respond with a video back.',
      'This turns out to be the perfect tool for grandparents and adult kids who have busy, mismatched schedules. The face and voice feel personal in a way that texting never does.',
      'Free. Works on iPhone and Android. No ads, no algorithm — just you and the people you love.',
    ],
    ctaLabel: 'Family sharing setup',
    ctaHref: '/family-sharing',
  },

  // ── Quick Fix (30-second problem solvers) ─────────────────────────────────
  {
    id: 23,
    category: 'Quick Fix',
    icon: 'Wifi',
    headline: 'Wi-Fi slow or glitchy? Unplug the router for 30 seconds, then plug it back in.',
    body: [
      'This sounds like a joke, but it genuinely fixes the majority of home internet problems. Routers build up minor memory issues over weeks of running — the restart clears them out.',
      'Unplug both your modem AND your router from the wall. Wait 30 full seconds. Plug the modem back first, wait for its lights to stop blinking, then plug in the router.',
      'If it is still slow after a full restart, your internet provider may be having an outage. Check downdetector.com before you spend an hour troubleshooting.',
    ],
    ctaLabel: 'WiFi speed test',
    ctaHref: '/tools/wifi-speed',
  },
  {
    id: 24,
    category: 'Quick Fix',
    icon: 'Battery',
    headline: 'Phone battery dying too fast? The fix is almost always Background App Refresh.',
    body: [
      'Apps refresh themselves in the background even when you aren\'t using them. That is the single biggest battery drain on most phones, and most people don\'t need it at all.',
      'iPhone: Settings → General → Background App Refresh → Off (or set to Wi-Fi only). Android: Settings → Battery → Background restrictions.',
      'A dying battery can also just be old. If your phone is 3+ years old, a $75 battery replacement is way cheaper than a new phone.',
    ],
    ctaLabel: 'Run a health check',
    ctaHref: '/tools/health-check',
  },
  {
    id: 25,
    category: 'Quick Fix',
    icon: 'Smartphone',
    headline: 'App keeps crashing? Force-quit it, then reopen.',
    body: [
      'Apps sometimes get stuck. Closing and reopening clears whatever got tangled, and it works about 80% of the time.',
      'iPhone (newer): swipe up from the bottom and pause in the middle → swipe up on the app card. iPhone with Home button: double-click Home → swipe up the app card.',
      'Android: tap the square/three-line button at the bottom → swipe up on the app card. If the app is still broken after a restart, uninstall and reinstall it — your data is saved in the cloud.',
    ],
    ctaLabel: 'More quick fixes',
    ctaHref: '/quick-fixes',
  },
  {
    id: 26,
    category: 'Quick Fix',
    icon: 'Volume2',
    headline: 'TV audio out of sync? 95% of the time, the fix is "turn the TV off and back on."',
    body: [
      'Streaming apps sometimes lose sync with the sound. The mouth moves, the words come a second later, and it is maddening.',
      'Hold the TV remote\'s power button for 5 seconds. When the TV restarts, the audio and video will realign. This also fixes most "remote stopped working" and "app frozen" issues.',
      'If it happens constantly, your HDMI cable may be failing. A new one is $10 at any hardware store — no need to replace the TV.',
    ],
    ctaLabel: 'More TV troubleshooting',
    ctaHref: '/tools/troubleshooter',
  },
  {
    id: 27,
    category: 'Quick Fix',
    icon: 'Printer',
    headline: 'Printer "offline" even though it\'s plugged in? Turn it off, unplug it, wait, plug back in.',
    body: [
      'Printers are the most stubborn devices in any home. But their problems almost always go away with a proper power-cycle — and "proper" means unplugging the cord from the wall, not just hitting the power button.',
      'Turn off printer. Unplug power cord from the wall. Wait 60 seconds. Plug back in. Turn on. Try printing again.',
      'If that doesn\'t work, remove the printer from your computer\'s list and re-add it. Windows: Settings → Bluetooth & devices → Printers. Mac: System Settings → Printers & Scanners.',
    ],
    ctaLabel: 'Fix a printer walkthrough',
    ctaHref: '/guides',
  },
  {
    id: 28,
    category: 'Quick Fix',
    icon: 'Laptop',
    headline: 'Laptop running hot and slow? Close your browser tabs — yes, really.',
    body: [
      'Each open browser tab is a tiny program using memory and CPU. When you have 40 tabs open, your laptop is essentially running 40 programs at once.',
      'Close everything you are not actively reading. If you are worried about losing a page, bookmark it (Ctrl+D on Windows, Cmd+D on Mac) — it\'s saved forever and your laptop gets its brain back.',
      'Most browsers also have a "memory saver" or "suspend tabs" feature you can turn on to do this automatically.',
    ],
    ctaLabel: 'Run a laptop health check',
    ctaHref: '/tools/health-check',
  },
  {
    id: 29,
    category: 'Quick Fix',
    icon: 'HardDrive',
    headline: 'Computer says "storage almost full"? Empty your Downloads folder first.',
    body: [
      'The Downloads folder is where installers, PDFs, and random attachments pile up for years. For many people, deleting it recovers 20-50GB instantly.',
      'Windows: File Explorer → Downloads → Ctrl+A → Delete. Mac: Finder → Downloads → Cmd+A → Command+Delete. Then empty the Trash or Recycle Bin to truly free the space.',
      'Next biggest wins: old photos backed up to iCloud/Google Photos (you can delete local copies), and video files you\'ve already watched.',
    ],
    ctaLabel: 'Device health check',
    ctaHref: '/tools/health-check',
  },

  // ── Senior-Friendly (accessibility, simplicity) ───────────────────────────
  {
    id: 30,
    category: 'Senior-Friendly',
    icon: 'Accessibility',
    headline: 'Make every phone screen bigger in one setting — not just the icons.',
    body: [
      'Most people only make the text bigger, which is great but doesn\'t help with small buttons. There is a second setting that makes the whole display bigger — icons, menus, everything.',
      'iPhone: Settings → Display & Brightness → Display Zoom → Zoomed. Android: Settings → Display → Display size → drag the slider up.',
      'The phone will ask to restart. After it does, you\'ll wonder why you ever put up with the default size.',
    ],
    ctaLabel: 'Accessibility toolkit',
    ctaHref: '/accessibility',
  },
  {
    id: 31,
    category: 'Senior-Friendly',
    icon: 'AlertTriangle',
    headline: 'iPhone Emergency SOS: press and hold the side button + a volume button for 5 seconds.',
    body: [
      'Your iPhone has a built-in emergency system that calls 911, shares your location with first responders, and alerts your emergency contacts — all from one button combo.',
      'To activate: press and hold the side button and either volume button at the same time until you see the Emergency SOS slider. Keep holding and it calls automatically after a 3-second countdown.',
      'Set your emergency contacts ahead of time: Settings → Emergency SOS → Emergency Contacts. They get a text with your location the moment SOS is triggered.',
    ],
    ctaLabel: 'Emergency tech setup',
    ctaHref: '/emergency-tech',
  },
  {
    id: 32,
    category: 'Senior-Friendly',
    icon: 'Smartphone',
    headline: 'Android "Emergency Information" shows medical info on the lock screen.',
    body: [
      'If you\'re ever unresponsive, paramedics can see your blood type, allergies, medications, and emergency contacts — without unlocking your phone.',
      'Settings → Safety & emergency (or Emergency Information) → add your medical details and emergency contacts. Anyone can access this from the lock screen by tapping "Emergency" → "Emergency info."',
      'Fill it in today. It takes five minutes. Hopefully nobody ever needs to use it, but if they do, it could save your life.',
    ],
    ctaLabel: 'Full emergency setup',
    ctaHref: '/emergency-tech',
  },
  {
    id: 33,
    category: 'Senior-Friendly',
    icon: 'Volume2',
    headline: 'Hearing aid not required — turn any AirPods or earbuds into conversation boosters.',
    body: [
      'iPhone has a feature called Live Listen that uses your phone\'s microphone and streams the sound into your AirPods. Set the phone on the table during dinner, wear AirPods, and suddenly every voice is clearer.',
      'Turn it on: Settings → Control Center → add "Hearing." Then open Control Center → tap the ear icon → Live Listen.',
      'It is not a replacement for real hearing aids, but for noisy restaurants and TV watching, it works remarkably well.',
    ],
    ctaLabel: 'Hearing-friendly tech',
    ctaHref: '/accessibility',
  },
  {
    id: 34,
    category: 'Senior-Friendly',
    icon: 'Users',
    headline: 'Set up Medical ID on your phone — paramedics can see it without your passcode.',
    body: [
      'Medical ID is Apple\'s answer to the "in case of emergency" card in your wallet. It shows your name, blood type, medications, allergies, and emergency contacts right from the lock screen.',
      'iPhone: Health app → tap your profile picture → Medical ID → Edit. Turn on "Show When Locked." Fill in your medications and allergies — this is the information that actually matters in an emergency.',
      'Android: the equivalent is in Settings → Safety & emergency → Emergency information.',
    ],
    ctaLabel: 'Set up emergency info',
    ctaHref: '/emergency-tech',
  },
  {
    id: 35,
    category: 'Senior-Friendly',
    icon: 'Camera',
    headline: 'Use your phone\'s camera as a magnifying glass — with the flashlight on.',
    body: [
      'Restaurant menus, medicine bottles, tiny print on warranties — your phone has a built-in magnifier that\'s better than most reading glasses.',
      'iPhone: open the Magnifier app (or add it to Control Center). Android: Settings → Accessibility → Magnification. Tap the screen three times to zoom in on anything.',
      'Turn on the flashlight inside the magnifier and the text becomes beautifully clear, even in a dim restaurant.',
    ],
    ctaLabel: 'More accessibility tricks',
    ctaHref: '/accessibility',
  },

  // ── Digital Wellness (reducing screen time, mindfulness) ──────────────────
  {
    id: 36,
    category: 'Digital Wellness',
    icon: 'Moon',
    headline: 'Charge your phone in another room tonight — one small change, better sleep.',
    body: [
      'The single biggest improvement in sleep quality, according to a huge meta-analysis, came from simply charging the phone outside the bedroom. No willpower needed — the device just isn\'t there.',
      'Buy a $10 alarm clock if that was your only reason for the phone at night. Use it for a week. Most people report falling asleep faster and waking up less anxious.',
      'If you need the phone nearby for emergency calls from family, turn on "Do Not Disturb" with exceptions for those people only.',
    ],
    ctaLabel: 'Full digital detox plan',
    ctaHref: '/digital-detox',
  },
  {
    id: 37,
    category: 'Digital Wellness',
    icon: 'Lightbulb',
    headline: 'Set a screen-time limit on your most-scrolled app — give yourself permission to close it.',
    body: [
      'Facebook, TikTok, YouTube, and X are all engineered to keep you scrolling past your limit. Your phone can gently push back — without you having to exercise willpower in the moment.',
      'iPhone: Settings → Screen Time → App Limits → Add Limit. Android: Settings → Digital Wellbeing → Dashboard → tap any app → set timer.',
      'Pick 30 minutes for something like Facebook. When the limit hits, the icon turns gray. You can still override it, but the speed-bump is usually enough to make you put the phone down.',
    ],
    ctaLabel: 'Digital wellness plan',
    ctaHref: '/digital-detox',
  },
  {
    id: 38,
    category: 'Digital Wellness',
    icon: 'Leaf',
    headline: 'Try grayscale mode for a day — the dopamine drops and so does your scrolling.',
    body: [
      'Color is a huge part of why apps feel compulsive. Turn your screen to black and white and scrolling suddenly gets boring — which is exactly the point.',
      'iPhone: Settings → Accessibility → Display & Text Size → Color Filters → Grayscale. Android: Settings → Digital Wellbeing → Bedtime mode → Grayscale.',
      'Even one day of this shows you how much "pull" the colors were creating. Most people dial it back to grayscale-at-night after the experiment.',
    ],
    ctaLabel: 'Reset your habits',
    ctaHref: '/digital-detox',
  },
  {
    id: 39,
    category: 'Digital Wellness',
    icon: 'Heart',
    headline: 'Unfollow (not unfriend) the social media accounts that make you feel worse.',
    body: [
      'You can stop seeing someone\'s posts without unfriending them — they\'ll never know. Instagram and Facebook both call it "Mute" or "Unfollow."',
      'Spend 10 minutes one afternoon going through your feed and muting anything that makes you feel anxious, angry, or inadequate. The algorithm will fill the space with better things.',
      'Your mental health is not obligated to the companies that profit from your outrage.',
    ],
    ctaLabel: 'Tech anxiety help',
    ctaHref: '/tech-anxiety',
  },
  {
    id: 40,
    category: 'Digital Wellness',
    icon: 'Sun',
    headline: 'The 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds.',
    body: [
      'Your eye muscles get locked in the "close-up" position when you stare at a screen for hours. The 20-20-20 rule is the simplest way to relax them and prevent the headache that sneaks up on you at 4pm.',
      'Set a repeating timer on your phone if you forget. After a week it becomes automatic — your eyes start to want the break.',
      'Bonus: blink consciously. People blink half as often when looking at a screen, which is why screen time feels drying.',
    ],
    ctaLabel: 'More wellness tips',
    ctaHref: '/digital-detox',
  },
  {
    id: 41,
    category: 'Digital Wellness',
    icon: 'Users',
    headline: 'Start a no-phones meal rule with your family — one meal a day, not forever.',
    body: [
      'You don\'t have to ban phones from your whole life. Even one phone-free meal a day rebuilds the small talk and eye contact that make a household feel connected.',
      'Put a basket by the kitchen door. Everyone drops phones in before dinner starts. Check them after dessert. Kids will complain for three days and then stop mentioning it.',
      'Adults report this change more than any other as the thing that improved their family life.',
    ],
    ctaLabel: 'Family sharing setup',
    ctaHref: '/family-sharing',
  },
  {
    id: 42,
    category: 'Digital Wellness',
    icon: 'Bell',
    headline: 'Turn off badge notifications — the red dot is designed to make you anxious.',
    body: [
      'The little red number on an app icon is a psychological hook. It represents an incomplete task that your brain wants to resolve.',
      'iPhone: Settings → Notifications → pick an app → turn off "Badges." Android: Settings → Notifications → App icon badges → off.',
      'Start with the worst offenders: email, Facebook, any news app. You\'ll still get notifications when you open the app — you just won\'t be nagged all day.',
    ],
    ctaLabel: 'Reduce phone anxiety',
    ctaHref: '/tech-anxiety',
  },

  // ── Seasonal (holiday, tax, travel, back-to-school) ───────────────────────
  {
    id: 43,
    category: 'Seasonal',
    icon: 'Gift',
    headline: 'Holiday shipping scam season is here — track packages only through official apps.',
    body: [
      'November through January sees a huge spike in fake "package delivery" texts. If you have 15 Amazon packages coming, one more "delivery update" seems perfectly plausible — which is exactly why scammers time it this way.',
      'Never tap links in a delivery text. Open the Amazon, UPS, USPS, or FedEx app directly — the real tracking lives there.',
      'If you\'ve already tapped a shady link and entered anything, change your password on that account and check your bank activity immediately.',
    ],
    ctaLabel: 'Report a scam',
    ctaHref: '/tools/scam-report',
  },
  {
    id: 44,
    category: 'Seasonal',
    icon: 'Gift',
    headline: 'Setting up a new phone for someone this holiday? Do it before you wrap it.',
    body: [
      'Nothing kills Christmas morning faster than three hours of "Set Up New iPhone" screens. Set the phone up yourself the night before, sign into your wifi, install the apps they\'ll want, and THEN wrap it.',
      'For a loved one who is new to smartphones, also turn on big text (Settings → Display), add emergency contacts, and install FaceTime/WhatsApp so they can reach you immediately.',
      'Include a handwritten "cheat sheet" in the box with their phone number, passcode, and Apple ID written down.',
    ],
    ctaLabel: 'Phone gift checklist',
    ctaHref: '/tech-gift-guide',
  },
  {
    id: 45,
    category: 'Seasonal',
    icon: 'Shield',
    headline: 'Tax season: the IRS will never email or text you — block and delete.',
    body: [
      'Every spring, scammers send millions of emails pretending to be the IRS. "Your refund is pending," "urgent: verify your identity," "you owe $X." They\'re all fake.',
      'The IRS contacts you by physical mail. Always. If there is a real issue, a letter will arrive. Never click "verify" links or call back a number from an IRS-looking email.',
      'If you\'re worried there might be a real tax issue, log in at irs.gov directly. Type the address yourself — do not follow any link.',
    ],
    ctaLabel: 'See current scam alerts',
    ctaHref: '/safety/scam-alerts',
  },
  {
    id: 46,
    category: 'Seasonal',
    icon: 'Users',
    headline: 'Back-to-school for grandkids: set up parental controls before the tablet arrives.',
    body: [
      'If you\'re giving a tablet or game console to a grandkid, spend 20 minutes setting up parental controls first. iPhone/iPad: Settings → Screen Time → Family Sharing. Android: Family Link app.',
      'Time limits, content filters, and app approvals all live in one spot. You can also get a weekly report of what they used and for how long.',
      'Their parents will love you for it.',
    ],
    ctaLabel: 'Parental controls guide',
    ctaHref: '/parental-controls',
  },
  {
    id: 47,
    category: 'Seasonal',
    icon: 'Globe',
    headline: 'Traveling? Turn on "Low Data Mode" before you leave to avoid international surprises.',
    body: [
      'International roaming charges can run $10+ per day without warning. The first step is always to check with your carrier about a travel plan. The second step is to tame your phone\'s appetite.',
      'iPhone: Settings → Cellular → Cellular Data Options → Low Data Mode. Android: Settings → Network → Data Saver. This tells apps not to download huge amounts in the background.',
      'Also turn off "Background App Refresh" entirely while you\'re away. You can flip it back on at home.',
    ],
    ctaLabel: 'Travel tech checklist',
    ctaHref: '/guides',
  },
  {
    id: 48,
    category: 'Seasonal',
    icon: 'Calendar',
    headline: 'Spring cleaning isn\'t just for closets — clean out your phone\'s photo library too.',
    body: [
      'Most people have 10,000+ photos and no idea what is in them. One weekend afternoon with the Photos app can free up several gigabytes AND surface old memories you forgot about.',
      'iPhone: Photos → Albums → scroll to Utilities → Duplicates. One tap merges every duplicate without losing anything. Also check the "Screenshots" album — most of those are junk.',
      'Bonus: make a "Favorites" album and flag your 50 best photos. Those are the ones you\'ll actually want to revisit.',
    ],
    ctaLabel: 'Declutter your tech life',
    ctaHref: '/digital-detox',
  },
  {
    id: 49,
    category: 'Seasonal',
    icon: 'Zap',
    headline: 'Summer heat kills phone batteries — don\'t leave your phone in a hot car.',
    body: [
      'Lithium batteries hate heat. A phone left on a dashboard in summer loses battery capacity permanently — not just for the day.',
      'Apple says safe operating temperature is 32° to 95°F. Above 95°F (which a closed car hits within 10 minutes on a 75° day), the battery starts degrading.',
      'If your phone gets uncomfortably hot, let it cool down before charging. And never put a hot phone in a freezer — the sudden change causes condensation damage.',
    ],
    ctaLabel: 'Phone health check',
    ctaHref: '/tools/health-check',
  },
  {
    id: 50,
    category: 'Seasonal',
    icon: 'Lock',
    headline: 'Doing your taxes online? Use a password manager to generate a unique one.',
    body: [
      'TurboTax, H&R Block, FreeTaxUSA — these accounts hold everything a scammer wants. If you reused a password that got leaked in a breach years ago, your tax account is sitting there unprotected.',
      'Change the password now. Make it unique. Turn on two-factor authentication while you are there — every tax site supports it.',
      'After April, change it again, or just delete the account if you won\'t use it next year.',
    ],
    ctaLabel: 'Password strength checker',
    ctaHref: '/tools/password-strength',
  },

  // ── A mix of the above (rounding out to 60) ──────────────────────────────
  {
    id: 51,
    category: 'Safety',
    icon: 'Eye',
    headline: 'Google yourself once a year — know what strangers can find.',
    body: [
      'A search for your name, your address, and your phone number will show you what a scammer or stalker would see. It is often a lot more than you think.',
      'For each result with your personal info, go to the site and look for a "remove me" option. Data broker sites (Spokeo, Whitepages, BeenVerified) all have opt-out pages.',
      'You can also pay a service like DeleteMe or Kanary to handle this continuously, but the free version of the same work is still hugely worthwhile.',
    ],
    ctaLabel: 'Remove yourself from data brokers',
    ctaHref: '/data-broker-removal',
  },
  {
    id: 52,
    category: 'Smart Setting',
    icon: 'Search',
    headline: 'Change your phone\'s default search engine to something that doesn\'t track you.',
    body: [
      'Safari and Chrome let you change the default search engine to DuckDuckGo (privacy-first, no tracking) or Brave Search. Most people never realize this is an option.',
      'iPhone Safari: Settings → Safari → Search Engine. Chrome: Settings → Search engine. The results are comparable to Google for almost everything.',
      'This one setting dramatically reduces how much data gets collected about you every day.',
    ],
    ctaLabel: 'Privacy-first setup',
    ctaHref: '/privacy',
  },
  {
    id: 53,
    category: 'App Pick',
    icon: 'HardDrive',
    headline: 'Proton Drive: encrypted free cloud storage that isn\'t Google or Apple.',
    body: [
      'Dropbox, iCloud, and Google Drive can all technically read your files. Proton Drive encrypts everything so that even Proton can\'t see what you store.',
      'Free tier is 5GB. Plenty for important documents, ID scans, and a handful of precious photos. Runs on every platform.',
      'Made by the same Swiss team behind ProtonMail. The business model is subscriptions, not data mining.',
    ],
    ctaLabel: 'More free software',
    ctaHref: '/free-software',
  },
  {
    id: 54,
    category: 'Quick Fix',
    icon: 'Zap',
    headline: 'Phone charging slowly? Clean the charging port with a toothpick.',
    body: [
      'Lint from pockets accumulates in the charging port over months and blocks the connection. Lots of "bad cable" and "bad battery" problems are actually just port gunk.',
      'Turn the phone off. Use a wooden toothpick (not metal — metal can short the contacts) to gently scrape out the lint. You\'ll be amazed what comes out of a 2-year-old phone.',
      'If charging is still slow after cleaning, try a different cable — cheap cables wear out fast. Apple and Samsung official cables last much longer.',
    ],
    ctaLabel: 'Full health check',
    ctaHref: '/tools/health-check',
  },
  {
    id: 55,
    category: 'Senior-Friendly',
    icon: 'Smartphone',
    headline: 'Large Text + Bold Text + High Contrast = a dramatically readable phone.',
    body: [
      'Most people stop at making text bigger. The real upgrade is combining three settings, and the difference is night and day.',
      'iPhone: Settings → Accessibility → Display & Text Size → turn on Bold Text, turn on Increase Contrast, slide Larger Text all the way up. Android: Settings → Accessibility → Visibility enhancements.',
      'Every app on your phone — including your bank and email — will instantly be easier to read.',
    ],
    ctaLabel: 'Accessibility checkup',
    ctaHref: '/tools/accessibility-check',
  },
  {
    id: 56,
    category: 'Digital Wellness',
    icon: 'Leaf',
    headline: 'Hide Instagram from your home screen — one less reflex-tap a day.',
    body: [
      'You don\'t have to delete apps to break the scroll habit. Just move them off the home screen so opening them takes deliberate effort.',
      'iPhone: long-press the app → Remove from Home Screen → Move to App Library. Android: long-press → drag to the trash → "Remove from home" (the app stays installed).',
      'When you want Instagram, you\'ll have to search for it. That tiny friction is often enough to break the unconscious reach for your phone.',
    ],
    ctaLabel: 'Build better habits',
    ctaHref: '/digital-detox',
  },
  {
    id: 57,
    category: 'Seasonal',
    icon: 'Cloud',
    headline: 'Daylight saving confusing your smart devices? Here is the 5-minute fix.',
    body: [
      'After the time change, some smart devices get stuck on the old time — especially older thermostats, garage door openers, and ovens. It is always a simple setting tweak, not a hardware failure.',
      'For smart home hubs (Alexa, Google, Apple Home), open the app → Settings → check Location and Time Zone. Sometimes they just need a nudge.',
      'If the time is wrong only on one device, restart that device specifically. That forces it to re-sync with the network time.',
    ],
    ctaLabel: 'Smart home troubleshooting',
    ctaHref: '/tools/troubleshooter',
  },
  {
    id: 58,
    category: 'Safety',
    icon: 'Globe',
    headline: 'Use a VPN on hotel and coffee-shop Wi-Fi — it\'s the seatbelt of public internet.',
    body: [
      'Public Wi-Fi is convenient and unencrypted. Anyone on the same network can potentially see what you\'re doing. A VPN wraps your connection in a secure tunnel so they can\'t.',
      'Mullvad and Proton VPN are both respected, privacy-focused, and about $5/month. Cloudflare\'s 1.1.1.1 offers a free basic option.',
      'Turn the VPN on before you connect to any cafe, hotel, or airport Wi-Fi. Turn it off at home — you don\'t need it on your own network.',
    ],
    ctaLabel: 'Privacy and VPN guide',
    ctaHref: '/privacy',
  },
  {
    id: 59,
    category: 'Smart Setting',
    icon: 'Users',
    headline: 'Set up Emergency Contacts on your phone — they see your location in a crisis.',
    body: [
      'If you ever hit the Emergency SOS button, your emergency contacts receive a text with your location automatically. They\'ll know something is wrong even before first responders call them.',
      'iPhone: Health app → profile photo → Medical ID → Emergency Contacts → Add. Android: Settings → Safety & emergency → Emergency contacts.',
      'Pick at least two people. One local, one far away — in case the local person is unreachable.',
    ],
    ctaLabel: 'Emergency setup walkthrough',
    ctaHref: '/emergency-tech',
  },
  {
    id: 60,
    category: 'Senior-Friendly',
    icon: 'Lightbulb',
    headline: 'Ask TekBrain anything — the tech advice button that stays patient forever.',
    body: [
      'If you ever wish you had a knowledgeable nephew you could call with dumb tech questions, without feeling embarrassed — that is what the Ask TekBrain feature is for.',
      'Type any question in plain English, get a plain-English answer. No judgment, no upselling, no "you should have known this." It will happily explain the same thing five different ways.',
      'It is most useful for specific questions: "How do I print from my iPad?" or "Why does my phone say my storage is full?" Try it right now — it is free.',
    ],
    ctaLabel: 'Ask TekBrain a question',
    ctaHref: '/brain',
  },
];
