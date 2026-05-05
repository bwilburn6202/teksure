// guides-batch-126 — Weekly content 2026-05-05 (Tuesday dev-loop run)
// Topics: AI voice clone scams, Apple Intelligence privacy, veterans tech help, phone replacement setup

import type { Guide } from './guides';

export const guidesBatch126: Guide[] = [
  {
    slug: 'ai-voice-clone-scam-protect-yourself',
    title: 'AI Voice Clone Scams: How to Protect Yourself and Your Family',
    excerpt: 'Scammers can now copy a loved one\'s voice from a few seconds of audio. Here\'s how the scam works, the warning signs, and a simple family code-word system to defeat it.',
    category: 'safety-guides',
    tags: ['ai-scam', 'voice-clone', 'grandparent-scam', 'family-safety', 'ftc', 'seniors'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `One of the fastest-growing scams in 2026 is the AI voice clone scam. Scammers take a short clip of someone's voice — often grabbed from a public Facebook video, a TikTok, a voicemail greeting, or a podcast appearance — and feed it into free or low-cost AI software. In under a minute, the software can produce new audio in that person's voice saying anything the scammer types.

The result: you get a phone call from what sounds exactly like your grandchild, your son, or your daughter, in tears, saying they have been in an accident, are in jail, or have been kidnapped. They beg you to wire money or send gift cards. The voice is right. The panic is real. But the call is fake.

The Federal Trade Commission and AARP have both issued repeated warnings about this scam. Reports of voice-clone scams targeting older Americans rose sharply between 2024 and 2026. The good news: the scam works only if you act fast and emotionally. A few simple habits will stop it cold.

**How the scam usually plays out**

The phone rings. The number may be unfamiliar, or it may be spoofed to look like your grandchild's number. You answer. A voice that sounds exactly like your grandchild says, "Grandma, it's me. I'm in trouble. Please don't tell Mom or Dad."

Then a second person comes on the line — claiming to be a lawyer, a police officer, or a bail bondsman. They give urgent instructions: send money via Zelle, wire transfer, or gift cards within the next hour, or things will get worse.

The voice clone is convincing because it really does sound like the person. But the script is always the same: urgency, secrecy, and an unusual payment method.

(Sources: Federal Trade Commission, consumer.ftc.gov; AARP Fraud Watch Network, aarp.org/fraudwatchnetwork; FBI Internet Crime Complaint Center, ic3.gov)`,
    steps: [
      {
        title: 'Recognize the three red flags every voice scam shares',
        content: 'No matter how real the voice sounds, every voice-clone scam has the same three signatures. First, urgency — they need money in the next hour or two. Second, secrecy — they tell you not to call other family members, not to tell anyone, not to "make this worse." Third, an unusual payment method — gift cards, wire transfer, cryptocurrency, or apps like Zelle and Cash App. Real emergencies do not require all three of these at once. Real police, real lawyers, and real bail bondsmen do not accept Walmart gift cards.',
        warning: 'If a caller asks you to keep this secret from other family members, that alone is enough to know it is a scam. Real loved ones in real trouble want help from the whole family.',
      },
      {
        title: 'Hang up and call back on a known number',
        content: 'The single most powerful defense is to hang up and call your loved one back directly on the phone number you already have saved for them. Do not press a button to "transfer" to a lawyer. Do not call a number the caller gives you — that number is part of the scam. Hang up. Open your contacts. Call the person yourself. If they do not answer, call their other parent, sibling, or roommate. In nearly every reported case, the supposed victim is fine and had no idea their voice was used.',
        tip: 'Quick Tip: Tell yourself in advance: "If anyone calls about a family emergency, my first move is to hang up and call them back myself." Practice the response so it becomes automatic when adrenaline takes over.',
      },
      {
        title: 'Set up a family code word everyone agrees on',
        content: 'Pick a simple word or short phrase — something memorable but not guessable. Avoid pet names, birthdays, or anything posted on social media. Examples: "blue raspberry," "sandcastle," "purple tiger." Share it with your immediate family in person or over a private text. Anyone calling claiming to be in trouble must be able to say the code word. Anyone who cannot say it — no matter how convincing the voice — is a scammer. The FTC and AARP both recommend this as the single most effective protection.',
        tip: 'Quick Tip: Change the code word once a year, or after anyone in the family loses a phone. If you ever need to give your code word to a real police officer or hospital staff, change it immediately afterward.',
      },
      {
        title: 'Know which payment methods real emergencies never use',
        content: 'No legitimate emergency, hospital, lawyer, or law enforcement agency will ever ask you to pay with: gift cards (Apple, Google Play, Amazon, Walmart, Target, Steam), cryptocurrency (Bitcoin, Ethereum), wire transfer through Western Union or MoneyGram, peer-to-peer apps like Zelle, Venmo, or Cash App, or by mailing cash. Hospitals bill insurance. Lawyers send invoices. Bail bondsmen accept normal credit-card or bank payments at a physical office. If the payment method sounds odd, it is a scam — full stop.',
        warning: 'Money sent by gift card, wire transfer, or cryptocurrency is generally unrecoverable. Banks can sometimes claw back Zelle, Venmo, and Cash App transfers if reported within minutes, but every minute lowers the odds.',
      },
      {
        title: 'Reduce how much of your voice is publicly available',
        content: 'Scammers need only 3 to 30 seconds of clean audio to clone a voice. Reducing your public audio footprint shrinks the attack surface. Set Facebook and Instagram videos to "Friends only." Avoid posting voicemail greetings that say your name. Be cautious about posting videos of grandchildren or vulnerable family members on public profiles. None of this is paranoid — it is the same caution you would use about not posting your home address publicly.',
        tip: 'Quick Tip: On iPhone, you can set a custom voicemail greeting that does not state your name — just "Please leave a message after the tone." Settings → Phone → Change Voicemail Greeting.',
      },
      {
        title: 'Report attempted scams to slow the next one down',
        content: 'If you receive a voice-clone scam call (whether you fell for it or not), report it. To the FTC at reportfraud.ftc.gov. To the FBI at ic3.gov. To AARP\'s Fraud Watch Network helpline at 1-877-908-3360. Reporting helps law enforcement track scam networks and warn other potential victims. Even if you only got the call and hung up, the report is valuable. Keep notes: the caller ID number, the time of call, what they said, and what payment method they asked for.',
      },
      {
        title: 'If money was already sent, act in the first hour',
        content: 'If you sent money and realize within minutes that it was a scam, contact your bank immediately. For Zelle, Venmo, and Cash App: call your bank\'s fraud line right away. For wire transfers: call Western Union (1-800-448-1492) or MoneyGram (1-800-666-3947) and ask them to halt the transfer. For gift cards: call the gift-card company\'s fraud line printed on the card and have them freeze the balance. Speed matters — every minute reduces recovery odds. Also report to local police; some scams are part of larger investigations and your report may help recover funds.',
        tip: 'Quick Tip: Save your bank\'s fraud line phone number in your contacts now, before you need it. The number is on the back of your debit card and on your bank statement.',
      },
    ],
  },

  {
    slug: 'apple-intelligence-privacy-iphone-2026',
    title: 'Apple Intelligence on iPhone: What\'s Private, What Isn\'t, and How to Adjust',
    excerpt: 'Apple Intelligence brings AI features to your iPhone. This guide explains in plain language what runs on your device, what is sent to Apple, and which settings give you control.',
    category: 'ai-guides',
    tags: ['apple-intelligence', 'privacy', 'iphone', 'ai', 'ios-18', 'settings'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `Apple Intelligence is the name Apple gave to a set of AI features that are now built into iPhones (15 Pro and newer), iPads, and Macs. It can summarize emails, suggest replies, generate custom emoji, clean up photos, and answer questions through Siri. Like all AI features, it raises real privacy questions — and Apple has built some genuine privacy protections, but they only work if you understand what each setting does.

This guide explains, in plain language, what stays on your iPhone, what is sent to Apple's servers, what is sent to ChatGPT, and how to turn off any part you don't want.

**The three layers of Apple Intelligence**

Apple Intelligence has three layers, each with different privacy implications.

**Layer 1: On-device.** Most everyday Apple Intelligence tasks — summarizing notifications, suggesting replies, basic photo edits — happen entirely on your phone. The text, photos, and audio never leave the device. This is the most private layer and is on by default.

**Layer 2: Apple's Private Cloud Compute.** When a task is too complex for the phone to handle alone, your iPhone may send the relevant data (and only the relevant data) to special servers Apple operates. Apple's design — verified by independent security researchers — means Apple itself cannot see what you sent, and the data is deleted after the response is generated. This is more private than typical cloud AI, but data does briefly leave your device.

**Layer 3: ChatGPT integration (optional, off by default).** If you ask Siri a complex question and Siri does not know the answer, it can offer to forward your question to ChatGPT (made by a different company, OpenAI). When this happens, your question is sent to OpenAI. Apple anonymizes the request, but you should treat ChatGPT as a third-party service.

(Sources: Apple Support, support.apple.com/en-us/120226; Apple Privacy whitepapers, apple.com/privacy)`,
    steps: [
      {
        title: 'Check whether your iPhone supports Apple Intelligence',
        content: 'Apple Intelligence requires an iPhone 15 Pro, iPhone 15 Pro Max, or any iPhone 16 model — the older A-series chips do not have enough on-device AI capability. To check: Settings → General → About → Model Name. If you have an older iPhone (any model before iPhone 15 Pro), Apple Intelligence will not appear in your settings, but the rest of your iPhone is unaffected. There is no security risk to using an older iPhone — you simply do not get the new AI features.',
      },
      {
        title: 'Turn Apple Intelligence on or off entirely',
        content: 'Settings → Apple Intelligence & Siri → Apple Intelligence. From here you can toggle the entire feature on or off. If you turn it off, your iPhone stops using any AI features. None of your data is sent anywhere AI-related. If you are not interested in AI features, turning this off is the simplest privacy choice — and it does not break any other feature of your phone.',
        tip: 'Quick Tip: You can leave Apple Intelligence on but disable individual features (writing tools, image generation, ChatGPT). The next steps show how.',
      },
      {
        title: 'Turn off ChatGPT integration if you want all AI on Apple servers only',
        content: 'Settings → Apple Intelligence & Siri → ChatGPT (or "Extensions" on newer iOS versions). Toggle ChatGPT off. With it off, Siri will never offer to send any question to OpenAI — Siri will simply say it cannot answer instead. Your data stays within Apple\'s ecosystem (on-device or Apple\'s Private Cloud Compute only). For most people this is the right setting unless you specifically want ChatGPT-powered answers.',
        warning: 'Even with ChatGPT integration on, your iPhone always asks before sending a question to ChatGPT. It does not happen silently. But the prompt can be easy to tap through quickly — if you do not want to risk it, just turn the feature off.',
      },
      {
        title: 'Keep mail and message summaries on-device only',
        content: 'When you see a summary at the top of a long email or a group of notifications, that summary is generated on your iPhone — your email content does not leave your phone for that feature. You can confirm this and disable summaries if you prefer not to use the feature: Settings → Notifications → scroll to "Summarize Notifications" → off. Settings → Mail → Summarize Messages → off. Either of these can be turned off without affecting Apple Intelligence overall.',
      },
      {
        title: 'Review what data is in the AI report (transparency check)',
        content: 'Apple includes a privacy report you can read directly on your phone. Settings → Apple Intelligence & Siri → tap "About Apple Intelligence & Privacy." This page lists exactly what data each Apple Intelligence feature can access, what stays on the device, and what may be sent to Apple\'s Private Cloud Compute. It is written in fairly plain English. Reading it once gives you a much clearer sense of what is happening.',
        tip: 'Quick Tip: This privacy report updates with every iOS release, so re-check it after each major iOS update (typically each fall) for new features that may have been added.',
      },
      {
        title: 'Use Apple Intelligence wisely on personal information',
        content: 'Even with strong privacy protections, the safest habit is the same as with any AI: do not paste highly sensitive information (Social Security numbers, account passwords, full credit-card numbers, medical record numbers) into a Writing Tools text box just to "clean up the wording." Apple Intelligence handles this material as carefully as any commercial AI can, but it is good general practice to keep highly sensitive content off any AI service. Apple Intelligence is excellent for ordinary tasks: summarizing, polishing tone, drafting replies, removing distractions from photos.',
      },
      {
        title: 'Reset and start over if you change your mind',
        content: 'Settings → Apple Intelligence & Siri → scroll to bottom → "Reset Apple Intelligence." This clears any locally stored AI context (recent prompts, learned writing style) and disables Apple Intelligence. After resetting, you can re-enable it later if you want. There is no penalty for turning the feature off and on. Your photos, contacts, and other data are completely separate and are not deleted by this reset.',
      },
    ],
  },

  {
    slug: 'free-tech-help-veterans-2026',
    title: 'Free Tech Help for Veterans: 2026 Programs You Can Use Today',
    excerpt: 'A directory of legitimate, free tech support and digital training programs for US veterans — VA, AARP, Senior Planet, and local options that actually answer the phone.',
    category: 'government-civic',
    tags: ['veterans', 'free-resources', 'va', 'tech-help', 'aarp', 'senior-planet', 'usa'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `If you are a US veteran and need help with a phone, computer, tablet, or anything online, you have several free programs you can call today. Some are run by the VA, some by national nonprofits, and some by local libraries and community colleges. None of them require you to buy anything. Some will even loan you a free tablet or set up free home internet.

This guide is a directory: each entry tells you who runs the program, what it does, who is eligible, and a real phone number or website to start. Save the page or print it out — it is meant to be used as a reference.

**A note about scams targeting veterans**

Veterans are deliberately targeted by scammers who claim to represent the VA or to offer "free benefits review." Every program in this guide can be reached by calling a number that is published on a US government website (.gov), AARP.org, or seniorplanet.org. If anyone asks you to pay a fee, share a Social Security number over the phone, or buy gift cards to "process your benefits," it is a scam — hang up and report it to the VA OIG hotline (1-800-488-8244).

(Sources: VA.gov, va.gov/connectedcare; AARP, aarp.org/home-family/personal-technology; Senior Planet, seniorplanet.org)`,
    steps: [
      {
        title: 'VA Video Connect — free video appointments and tech help',
        content: 'VA Video Connect is the VA\'s free video-call system for appointments. It runs on iPhone, Android, computer, and tablet. The VA has a dedicated help desk for setting it up and troubleshooting any problem. Call 1-866-651-3180. They will walk you through downloading the app, signing in with your VA credentials, testing your camera and microphone, and joining your first call. The line is staffed extended hours during weekdays. There is no cost.',
        tip: 'Quick Tip: If you do not have a smartphone or tablet, ask whether you qualify for the VA\'s Digital Divide Consult — some veterans receive a free internet-connected tablet through this program.',
      },
      {
        title: 'VA Connected Care — broader tech support for VA services',
        content: 'Visit va.gov/connectedcare for a full list of digital tools the VA provides: My HealtheVet (your health record), VA Health Chat (text with a VA nurse), Annie (text-based health reminders), and the VA mobile apps. Each has its own help line linked from the page. The main VA help desk for any account login problem is 1-855-695-3622.',
      },
      {
        title: 'Senior Planet — free online tech classes for veterans 60+',
        content: 'Senior Planet (run by AARP) offers free online classes covering smartphones, computers, internet safety, and AI tools. They have a dedicated track for veterans 60 and over. All classes are by Zoom (they will help you set up Zoom if you have never used it). Visit seniorplanet.org or call 1-920-666-1959. The phone line connects you to a real person who will sign you up and help if you have trouble joining.',
        tip: 'Quick Tip: If you have never used Zoom, your first class can be a private one-on-one Zoom orientation. Just ask when you call.',
      },
      {
        title: 'AARP Tech Wise — free 1-on-1 phone help for any tech question',
        content: 'AARP\'s Tech Wise program (formerly AARP Senior Planet Tech Help Line) lets anyone 50 or older — veteran or not — call a real person and ask any tech question. They will stay on the line as long as needed and walk you through whatever you are stuck on. AARP membership is not required to use this line. Call 1-877-908-2587 weekdays. The service is free.',
      },
      {
        title: 'Affordable Connectivity Program (ACP) and Lifeline — free internet for eligible veterans',
        content: 'Veterans who receive certain VA benefits, are on Medicaid, or meet income limits qualify for free or heavily discounted home internet through the federal Lifeline program. (The ACP program is paused as of 2024, but Lifeline is still active.) Visit lifelinesupport.org or call 1-800-234-9473 to apply. You can also call your internet provider and ask about veteran discounts — most major providers have one even outside Lifeline.',
        warning: 'Be cautious of solicitations offering free phones or internet that ask for your Social Security number over the phone. Only apply through the official lifelinesupport.org website or by calling 1-800-234-9473.',
      },
      {
        title: 'VFW and American Legion local tech help',
        content: 'Many VFW (Veterans of Foreign Wars) and American Legion posts have weekly or monthly free tech-help drop-in sessions. These tend to be informal — a volunteer with a laptop sits at a table and helps anyone who walks in with their phone or laptop. To find the nearest post: vfw.org/find-a-post or legion.org/find-a-post. Call ahead and ask if they have a tech help session or know a member who does.',
      },
      {
        title: 'Public libraries — free in-person help and free device loans',
        content: 'Almost every public library in the United States offers free one-on-one tech help by appointment, free internet access, and many libraries lend hotspots, tablets, and Chromebooks for one to four weeks at a time at no cost. Visit your local library\'s website or call them and ask: "Do you offer one-on-one tech help, and do you lend tablets or hotspots?" Veterans status is not required — these programs are open to everyone.',
        tip: 'Quick Tip: Libraries also subscribe to expensive services (Consumer Reports, Ancestry, online learning platforms) that you can use for free with your library card. Worth asking.',
      },
    ],
  },

  {
    slug: 'new-phone-first-day-setup-checklist',
    title: 'You Got a New Phone — A First-Day Checklist So Nothing Gets Lost',
    excerpt: 'Setting up a new iPhone or Android the right way protects your photos, contacts, banking apps, and 2-factor authentication codes. Here is a careful step-by-step.',
    category: 'phone-guides',
    tags: ['new-phone', 'setup', 'transfer', 'iphone', 'android', 'two-factor', 'backup'],
    readTime: '9 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `A new phone is exciting — and a little nerve-racking. You have years of photos, important contacts, banking apps, and login codes on your old phone, and getting all of that onto the new one without losing anything matters.

The good news: phone makers have made transfer dramatically easier in recent years. The bad news: a few things — banking apps and two-factor authentication codes in particular — still need careful handling, because they intentionally do not transfer automatically. This guide walks through a complete first-day setup that keeps everything safe.

**Before you start, do not erase the old phone**

Keep the old phone fully charged and turned on for at least the first week after switching. If something on the new phone does not work, the old phone is your backup. Do not factory-reset it until you have used the new phone for several days and confirmed every important app works.

(Sources: Apple Support, support.apple.com/transfer; Google Support, support.google.com/android; Samsung Support, samsung.com/us/support)`,
    steps: [
      {
        title: 'Make sure your old phone has a current backup',
        content: 'Before you turn on the new phone, back up the old one. iPhone: Settings → tap your name at top → iCloud → iCloud Backup → "Back Up Now." Wait for it to finish (this can take 10–60 minutes depending on how much you have). Make sure the device is on Wi-Fi and plugged in. Android (Google Pixel, Samsung, etc.): Settings → Google → Backup → "Back up now." For Samsung phones, also check Settings → Accounts and backup → Back up data → On. A current backup is a safety net even if the direct transfer (next step) goes smoothly.',
        tip: 'Quick Tip: If you are out of free iCloud space and the backup will not complete, you can buy 50 GB of iCloud for $0.99/month — turn it on for one month to complete the backup, then cancel if you wish. iCloud → Manage Account Storage → Change Storage Plan.',
      },
      {
        title: 'Set the new phone next to the old one — they will talk to each other',
        content: 'Both Apple and Android offer a direct transfer mode that copies almost everything between two phones. Place the new phone next to the old one. Power on the new phone. The old phone will detect the new one within a minute and ask if you want to transfer. iPhone shows "Quick Start" on the old phone. Android shows "Set up nearby device" on the old phone. Tap to begin and follow the on-screen prompts. You usually need to scan an animated pattern with the old phone\'s camera. Keep both phones plugged in and within a few feet of each other for the duration. The transfer can take 30 minutes to several hours depending on how much you have.',
      },
      {
        title: 'Sign back into Wi-Fi, Apple ID, and Google account',
        content: 'After transfer, the new phone will prompt you for the password to your home Wi-Fi network and your Apple ID (iPhone) or Google account (Android) password. Have these written down before you start — they are easy to forget. If you use two-factor authentication, you will get a code on your old phone. Enter it on the new phone. Some apps may also send their own login confirmation codes.',
        tip: 'Quick Tip: If you forgot your Apple ID password, go to iforgot.apple.com on a computer to reset it. For Google, go to accounts.google.com/recovery.',
      },
      {
        title: 'Re-enroll in two-factor authentication for important accounts',
        content: 'This is the step most people skip — and it is the most important. Two-factor authentication apps (Google Authenticator, Microsoft Authenticator, Authy) often do NOT transfer automatically because they are designed to be locked to one device. Your bank, email, and other important accounts may stop letting you in if the codes are missing on the new phone. Open the authenticator app on the new phone. If your codes are not there, sign into each account on a computer (one at a time), go to security settings, and re-add the new phone as the authenticator. Have the old phone next to you so you can read codes off it during the process.',
        warning: 'Bank apps usually require re-verification on a new phone. Plan to re-log into Chase, Wells Fargo, Bank of America, etc. and confirm a one-time code by phone or email. Have your account number, debit card, and security questions ready.',
      },
      {
        title: 'Re-enable Face ID or fingerprint and set up Apple Pay or Google Pay',
        content: 'Face ID, Touch ID, and Android fingerprint do not transfer for security reasons — you must re-enroll on the new phone. iPhone: Settings → Face ID & Passcode (or Touch ID & Passcode). Android: Settings → Security & privacy → Face & Fingerprint Unlock. After biometrics are set, re-add your credit and debit cards in Apple Pay or Google Pay. Open the Wallet app (iPhone) or Google Wallet (Android), tap +, and follow the steps. Each card requires a quick verification code from your bank.',
      },
      {
        title: 'Check your photo library — confirm everything is there',
        content: 'Open Photos. Scroll all the way to the bottom and confirm you see your oldest pictures. Then scroll to the most recent. If you see "Some items not yet downloaded," wait for syncing to complete (this can take a few hours; keep the phone on Wi-Fi and plugged in). After syncing, gently swipe through several years of memories to be sure they are all visible. If any are missing, do NOT factory-reset the old phone yet — you may need to sync again or restore from the iCloud/Google backup.',
      },
      {
        title: 'Update everything once and check for missing apps',
        content: 'After transfer, run any pending updates: Settings → General → Software Update (iPhone) or Settings → System → System update (Android). Then update apps. iPhone: open the App Store → tap your profile picture → "Update All." Android: open Play Store → tap your profile picture → Manage apps & device → Updates available → Update all. While you are there, look at the list of installed apps and make sure all your essential apps are there: banking, email, calendar, messaging, ride-share, anything you use weekly. Re-download any that did not transfer.',
        tip: 'Quick Tip: Some apps require you to log in again on the new phone, even though the app installed automatically. Plan to spend 10–15 minutes on the first day re-logging into your most-used 5–10 apps.',
      },
      {
        title: 'Wait one week before erasing the old phone',
        content: 'For at least seven days, keep the old phone charged and powered on. Use the new phone normally. If something does not work — a missing photo, a banking app that won\'t accept your password, a contact that didn\'t come over — the old phone is your fallback. After a week of confident use, you can safely erase the old phone and trade it in or recycle it. iPhone: Settings → General → Transfer or Reset iPhone → Erase All Content and Settings. Android: Settings → System → Reset → Erase all data (factory reset).',
        warning: 'Never sell, donate, or discard a phone without erasing it first. Even if it looks empty, your photos and accounts may still be present in storage. The factory-reset step above is what permanently removes them.',
      },
    ],
  },
];
