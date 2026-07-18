// guides-batch-324 — 5 guides for the 90-day compound growth sprint (Day 68, 2026-07-18)
// Topics: AI voice cloning scam calls, passkeys setup, Android scam call detection,
// Windows 11 Backup app, Medicare Open Enrollment prep
// Sourced from official Apple/Google/Microsoft/FTC/Medicare.gov support pages

import type { Guide } from "./guides";

export const guidesBatch324: Guide[] = [
  {
    slug: "spot-ai-voice-cloning-scam-calls",
    title: "How to Spot AI Voice Cloning Scam Calls (The New \"Grandparent Scam\")",
    excerpt: "Scammers can now clone a loved one's voice from a few seconds of audio. Here's how the new AI phone scam works and how to protect yourself.",
    category: "safety-guides",
    tags: ["scams", "AI", "phone safety", "grandparent scam", "voice cloning"],
    readTime: "6 min",
    thumbnailEmoji: "📞",
    publishedAt: "2026-07-18",
    lastVerifiedAt: "2026-07-18",
    difficulty: "Beginner",
    body: "The classic \"grandparent scam\" — a caller pretending to be your grandchild in trouble, asking for money right away — has gotten more convincing. Scammers now use AI voice cloning tools to copy a real person's voice from a short clip found online, such as a video posted on social media. The result is a phone call that can sound exactly like your grandchild, child, or another relative, even though it is not them.\n\nThese calls almost always follow the same pattern: a panicked or crying voice claims to be in trouble (a car accident, an arrest, a hospital visit) and needs money immediately, often through gift cards, a wire transfer, or a cash pickup service. The scammer will pressure you not to hang up or call anyone else to \"check,\" because that would give you time to discover the truth. That pressure and secrecy is the biggest red flag of all — real emergencies rarely require total secrecy.\n\nThe good news is that a simple habit defeats this scam almost every time: hang up and call the person back directly using the phone number you already have saved for them, not a number the caller gives you. If you cannot reach them, call another family member to check. No legitimate emergency requires you to pay with gift cards or wire money to a stranger's account within minutes. Source: consumer.ftc.gov/articles/what-know-about-family-emergency-scams and ftc.gov (AI voice cloning scam alerts, 2026).",
    steps: [
      {
        title: "Recognize the pressure tactics",
        content: "Urgency, secrecy, and an unusual payment method (gift cards, wire transfer, cryptocurrency, or cash pickup apps) are the three biggest warning signs of any phone scam, including AI voice-cloned calls.",
        tip: "Quick Tip: A real family member in a real emergency will not object to you calling them back or checking with another relative first.",
      },
      {
        title: "Hang up and call back on a known number",
        content: "End the call, then dial the phone number you already have saved for that person — never a number the caller gives you or a callback number in a text message. If they don't answer, try texting or calling another relative to confirm they're safe.",
      },
      {
        title: "Set up a family \"safe word\"",
        content: "Agree on a simple word or phrase with close family members that only you would know. If someone calls claiming to be in an emergency, ask for the safe word before doing anything else.",
      },
      {
        title: "Report the call",
        content: "Report suspected scam calls to the FTC at reportfraud.ftc.gov and to your phone carrier. If you already sent money, contact your bank or the gift card company immediately — some can freeze or reverse a transaction if you act fast.",
        tip: "Quick Tip: Save the FTC's scam reporting site as a browser bookmark so it's easy to find in an emergency.",
      },
    ],
  },
  {
    slug: "how-to-set-up-and-use-passkeys",
    title: "What Are Passkeys? How to Set Up This New, Safer Way to Sign In",
    excerpt: "Passkeys let you sign in with your fingerprint or face instead of typing a password. Here's what they are and how to turn them on.",
    category: "safety-guides",
    tags: ["passkeys", "passwords", "security", "sign in", "biometrics"],
    readTime: "7 min",
    thumbnailEmoji: "🔑",
    publishedAt: "2026-07-18",
    lastVerifiedAt: "2026-07-18",
    difficulty: "Beginner",
    body: "A passkey is a new way to sign in to websites and apps without typing a password. Instead, you unlock your account using your fingerprint, your face, or your device's screen lock (like a PIN), the same way you already unlock your phone. Passkeys are built into iPhones, Android phones, Windows computers, and Macs, and more websites add support for them every month, including Google, Amazon, PayPal, and many banks.\n\nPasskeys are safer than passwords for two main reasons. First, there is nothing to type, remember, or write down, so there is no password for a scammer to steal through a phishing email or a data breach. Second, a passkey only works on the real website it was created for, so even if you're tricked into clicking a fake link that looks like your bank, the fake site cannot use your passkey to log in. Passkeys are stored securely on your device (and often synced across your devices through your Apple, Google, or Microsoft account), rather than sitting on a company's server where hackers can steal thousands of passwords at once.\n\nYou do not need to switch every account to a passkey right away. Start with the accounts that matter most — email, banking, and any account with your payment information saved — and add a passkey next to your existing password. Most sites let you keep both options for a while, so if something goes wrong you can still sign in the old way. Source: support.apple.com/en-us/102195 (Passkeys on iPhone) and support.google.com/accounts/answer/13548313 (Passkeys with Google).",
    steps: [
      {
        title: "Check if the website offers passkeys",
        content: "Log in to the account as usual, then look in Settings for \"Security,\" \"Sign-in options,\" or \"Passkeys.\" Major sites like Google, Amazon, and PayPal list this option clearly; if you don't see it, the site may not support passkeys yet.",
      },
      {
        title: "Create your passkey",
        content: "Select \"Create a passkey\" or \"Add a passkey.\" Your phone or computer will ask you to confirm with your fingerprint, face scan, or device PIN — this becomes the key that unlocks that account going forward.",
        tip: "Quick Tip: You'll be asked to use your device's existing screen lock, so make sure you have a fingerprint, face ID, or PIN set up on your phone first.",
      },
      {
        title: "Sign in with your passkey",
        content: "The next time you visit that site, choose the passkey sign-in option instead of typing a password. Your device will prompt you for your fingerprint, face, or PIN, and you'll be logged in without typing anything.",
      },
      {
        title: "Keep a backup sign-in method",
        content: "Don't delete your password right away. Keep it stored safely (in a password manager) as a backup in case you get a new device or something goes wrong with the passkey.",
      },
    ],
  },
  {
    slug: "android-scam-call-detection-feature",
    title: "How to Turn On Android's Built-In Scam Call Detection",
    excerpt: "Google Phone app can now listen for scam patterns during a call and warn you in real time. Here's how to turn the feature on.",
    category: "safety-guides",
    tags: ["android", "scam calls", "phone safety", "google phone app"],
    readTime: "5 min",
    thumbnailEmoji: "🛡️",
    publishedAt: "2026-07-18",
    lastVerifiedAt: "2026-07-18",
    difficulty: "Beginner",
    body: "Google has added a scam detection feature to the Google Phone app on many Android phones. While you're on a call, it listens for common scam conversation patterns, such as a caller pretending to be from your bank and asking you to move money, or claiming to be a government agency demanding gift cards. If it detects a likely scam pattern, your phone shows a warning on screen and can vibrate to get your attention, all without sending any audio or transcript to Google.\n\nThis feature works entirely on your device using on-device AI, which means the audio of your calls is not sent anywhere or stored by Google. It's designed to catch you in the moment, since scam calls rely on catching people off guard and rushing them into a decision before they have time to think it through. It's especially useful for calls from numbers not saved in your contacts, since those are the calls most likely to be scams.\n\nThe feature is off by default and needs to be turned on in your phone's settings. Availability depends on your phone's Android version and country, and it currently supports English-language calls, with more languages being added over time. Source: support.google.com/phoneapp (Scam Detection in Google Phone app).",
    steps: [
      {
        title: "Open the Google Phone app",
        content: "Tap the Phone app you use to make calls (this feature is part of the Google Phone app, sometimes called the \"Phone by Google\" app).",
      },
      {
        title: "Go to Settings, then Scam Detection",
        content: "Tap the three-dot menu or your profile icon in the top corner, choose Settings, then look for \"Scam Detection\" or \"Call screening.\"",
        tip: "Quick Tip: If you don't see this option, check that your Google Phone app is updated to the latest version from the Play Store.",
      },
      {
        title: "Turn the feature on",
        content: "Switch the Scam Detection toggle to on. You can usually choose whether you want just an on-screen alert or an alert plus a vibration when a call sounds suspicious.",
      },
      {
        title: "Know what to do if you get a warning",
        content: "If your phone warns you mid-call, don't panic — but do not give out personal information, account numbers, or payment details. Hang up and call the organization back using a number from their official website or the back of your card.",
      },
    ],
  },
  {
    slug: "windows-11-backup-app-new-pc",
    title: "How to Use the Windows Backup App to Move to a New PC",
    excerpt: "Windows 11 includes a built-in Backup app that copies your files, apps list, and settings so setting up a new computer is much easier.",
    category: "windows-guides",
    tags: ["windows 11", "backup", "new computer", "windows backup"],
    readTime: "7 min",
    thumbnailEmoji: "💾",
    publishedAt: "2026-07-18",
    lastVerifiedAt: "2026-07-18",
    difficulty: "Beginner",
    body: "Setting up a new Windows computer used to mean manually copying files and reinstalling every program one at a time. The Windows Backup app, built into Windows 11, makes this much easier by saving your files, a list of your installed apps, and many of your settings to your Microsoft account (using OneDrive), so you can bring them over to a new PC automatically during setup.\n\nWindows Backup saves your desktop, documents, pictures, and other personal folders to OneDrive, remembers your Wi-Fi network settings, and keeps a list of apps you had installed so Windows can offer to reinstall them for you on the new computer (from the Microsoft Store or, where available, other sources). It does not duplicate everything on your old hard drive — it focuses on your personal files and setup preferences rather than creating a full copy of the entire hard drive.\n\nBecause backed-up files go to OneDrive, you'll want to check how much free OneDrive storage you have before starting, since a free Microsoft account includes a limited amount (5 GB as of this writing) and larger backups may require a paid Microsoft 365 subscription for more storage. Source: support.microsoft.com/windows (Back up your Windows PC).",
    steps: [
      {
        title: "Open the Windows Backup app",
        content: "Click the Start button, type \"Windows Backup,\" and open the app that appears. You must be signed in to Windows with a Microsoft account (not just a local account) for this to work.",
      },
      {
        title: "Choose what to back up",
        content: "The app shows toggles for Folders (documents, pictures, desktop, etc.), Apps, Preferences, and Credentials. Turn on the categories you want saved — most people should keep Folders and Apps turned on.",
        tip: "Quick Tip: Check your OneDrive storage first at account.microsoft.com/storage so you know you have enough room.",
      },
      {
        title: "Start the backup and let it sync",
        content: "Click \"Back up.\" Your files will begin uploading to OneDrive in the background — this can take anywhere from a few minutes to several hours depending on how much data you have and your internet speed.",
      },
      {
        title: "Restore on your new PC",
        content: "During the setup process on your new Windows 11 computer, sign in with the same Microsoft account. Windows will detect your backup and offer to restore your files, settings, and app list automatically.",
      },
    ],
  },
  {
    slug: "medicare-open-enrollment-2026-what-to-know",
    title: "Medicare Open Enrollment: What to Know Before It Starts",
    excerpt: "Medicare Open Enrollment runs every fall. Here's what it is, what you can change, and how to prepare before the window opens.",
    category: "health-tech",
    tags: ["medicare", "open enrollment", "health insurance", "seniors"],
    readTime: "8 min",
    thumbnailEmoji: "🏥",
    publishedAt: "2026-07-18",
    lastVerifiedAt: "2026-07-18",
    difficulty: "Beginner",
    body: "Medicare Open Enrollment (officially called the Medicare Annual Enrollment Period) runs every year from October 15 through December 7. During this window, anyone with Medicare can change their coverage for the following year — switching between Original Medicare and Medicare Advantage, changing Medicare Advantage plans, or changing your Part D prescription drug plan. Changes you make take effect January 1 of the next year.\n\nEven if you're happy with your current plan, it's worth reviewing it every year, because plans can change their costs, covered drugs, and doctor networks from one year to the next without much notice. A plan that was the best fit last year might raise your premium, drop a medication you take from its covered list, or remove your doctor from its network. Reviewing your options each fall, even briefly, helps you catch these changes before they cost you money or access to care you need.\n\nYou'll get an \"Annual Notice of Change\" letter from your current plan every September, which explains what's changing for the upcoming year — this is worth reading carefully rather than setting aside. If you decide to make a change, you can compare plans at medicare.gov/plan-compare, call 1-800-MEDICARE, or work with a licensed insurance agent or your State Health Insurance Assistance Program (SHIP) counselor, which offers free, unbiased help. Source: medicare.gov/basics/get-started-with-medicare/medicare-basics/openenrollment.",
    steps: [
      {
        title: "Mark the dates on your calendar",
        content: "Medicare Open Enrollment runs October 15 through December 7 every year. Set a reminder a week or two before it opens so you have time to review your Annual Notice of Change letter.",
        tip: "Quick Tip: Changes made during Open Enrollment start January 1 of the following year — you don't need to do anything if you're happy with your current plan.",
      },
      {
        title: "Read your Annual Notice of Change letter",
        content: "Your current Medicare Advantage or Part D plan will mail this letter every September. It lists any changes to your premium, deductible, covered drugs, and doctor network for the coming year.",
      },
      {
        title: "Compare plans if something changed",
        content: "Go to medicare.gov/plan-compare and enter your medications and preferred doctors. The tool will show you how much each available plan would cost you based on your specific situation, not just the advertised premium.",
      },
      {
        title: "Get free, unbiased help if you want it",
        content: "Contact your State Health Insurance Assistance Program (SHIP) for free one-on-one counseling — find your local SHIP office at shiphelp.org. Be cautious of anyone who calls you uninvited offering to \"help\" with Medicare; SHIP counselors do not cold-call.",
      },
    ],
  },
];
