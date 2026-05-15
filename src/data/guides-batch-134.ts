// guides-batch-134 — Content cycle 2026-05-13
// Topics: iOS 18 Genmoji safety; Windows 11 24H2 Recall opt-out; Costco renewal scam wave;
// Fake browser-update popups; AirPods Pro 2 hearing aid features; Amazon Subscribe & Save audit;
// Passkey login for banks; Samsung Galaxy S25 Galaxy AI for seniors

import type { Guide } from './guides';

export const guidesBatch134: Guide[] = [
  {
    slug: 'ios-18-genmoji-how-to-use-it-safely',
    title: 'iOS 18 Genmoji — Make Your Own Emoji, the Senior-Friendly Way',
    excerpt: 'Apple\'s new Genmoji feature lets you create your own emoji using AI. Here is how to turn it on, use it well, and avoid the privacy traps.',
    category: 'phone-guides',
    tags: ['ios 18', 'genmoji', 'apple intelligence', 'iphone', 'imessage', 'emoji'],
    readTime: '5 min',
    thumbnailEmoji: '🦄',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `Genmoji is Apple's name for a feature that lets you type a description like "a corgi wearing sunglasses on a beach" and get back a brand-new emoji you can text to friends. It launched with iOS 18.2 in late 2024 and is now standard on iPhone 15 Pro and newer.

The appeal is real — you can make grandkids laugh by sending a custom emoji of the family dog wearing a birthday hat. But there are two things worth knowing before you start: (1) Genmoji uses on-device AI on supported iPhones, which means your descriptions stay private, but (2) the emoji you create is shared as an image, not as a system emoji, so older iPhones and Android phones see it as a sticker, not a tiny icon in the text.

This guide shows you how to turn it on, make your first Genmoji, share it without trouble, and what to do if it does not appear on your phone.

(Sources: Apple Support — "Use Genmoji on iPhone," support.apple.com/guide/iphone/genmoji-iphab1c4f5b6/ios; Apple Intelligence overview, apple.com/apple-intelligence)`,
    steps: [
      {
        title: 'Check if your iPhone supports Genmoji',
        content: 'Genmoji is part of Apple Intelligence, which requires an iPhone 15 Pro, iPhone 15 Pro Max, or any iPhone 16 model (16, 16 Plus, 16 Pro, 16 Pro Max). It does not work on iPhone 14 or earlier, no matter how new your iOS is. To check: open Settings, scroll to General, tap About, and look at "Model Name." If you see anything other than the supported models, Genmoji is not available on your phone.',
        tip: 'Quick Tip: Even on an unsupported phone, you can still receive Genmoji from friends — they appear as little images in your messages.',
      },
      {
        title: 'Turn on Apple Intelligence',
        content: 'Open Settings. Scroll down and tap "Apple Intelligence & Siri." Tap the toggle next to "Apple Intelligence" so it turns green. The phone will spend a few minutes downloading the AI model in the background — this is normal and only happens once. You do not need to be plugged in, but you do need to be on Wi-Fi. Make sure your iPhone has at least 7 GB of free storage before turning this on.',
        warning: 'If you do not see "Apple Intelligence & Siri" in Settings, your phone either does not support it or your region has it disabled. Update to the latest iOS first (Settings > General > Software Update).',
      },
      {
        title: 'Create your first Genmoji',
        content: 'Open the Messages app and start a new message or open an existing thread. Tap the emoji button on the keyboard (the smiley face next to the spacebar). At the top of the emoji panel you will see a new section labeled "Genmoji" with a sparkles icon. Tap it. A text field appears: type a description like "a tabby cat holding a coffee mug" and tap the arrow. The phone generates four versions. Swipe through them, pick the one you like, and tap "Add" to send it.',
        tip: 'Quick Tip: Be specific. "A dog" gives generic results. "A golden retriever puppy with a red collar wearing a graduation cap" gives a much better Genmoji.',
      },
      {
        title: 'Make a Genmoji of a real person from your photos',
        content: 'You can also create a Genmoji that looks like a real person — yourself, a grandchild, or anyone in your photo library. In the Genmoji creator, instead of typing, tap the person icon at the bottom. Pick a contact who appears in your photos. The phone uses your existing photos of them to generate a cartoon-style emoji. This is processed on your device — Apple does not see the photos. You can adjust the style, hair, accessories, and expression.',
        warning: 'Only create Genmoji of real people who would be okay with it. Sharing a Genmoji of someone without their knowledge is uncomfortable for them, even if it is just a cartoon.',
      },
      {
        title: 'Share Genmoji to non-iPhone friends',
        content: 'When you send a Genmoji to another iPhone, it appears in-line with text. When you send it to an Android phone or older iPhone, it is delivered as an image (an MMS picture message). This is fine but be aware: the recipient gets a tiny picture, not a true emoji. Group chats with mixed iPhone/Android may drop the message to MMS quality. If a Genmoji does not arrive, ask the friend to look in their photo attachments — sometimes carriers route it strangely.',
      },
      {
        title: 'Privacy — what stays on your phone, what does not',
        content: 'Genmoji generation runs on-device. Apple does not see your descriptions or generated emoji. The images you create are saved in your stickers drawer, which syncs across your Apple devices through iCloud. If you do not want them synced, go to Settings > Apple ID (your name at the top) > iCloud > and turn off "Stickers." Note that any Genmoji you send in Messages is, of course, visible to the recipient and stored in their phone.',
        tip: 'Quick Tip: If you make a Genmoji you do not like, long-press it in the stickers drawer and tap Delete. It will be gone from your phone (but copies you already sent stay with the recipient).',
      },
      {
        title: 'Troubleshoot when Genmoji is missing',
        content: 'If you do not see the Genmoji button: (1) check iOS is 18.2 or newer (Settings > General > Software Update). (2) Confirm Apple Intelligence is on (Settings > Apple Intelligence & Siri). (3) Make sure your iPhone language is set to a supported language — US English, UK English, Australian English, Canadian English, Irish English, New Zealand English, or South African English work. Other languages were added in later updates. (4) Restart the iPhone after enabling Apple Intelligence.',
      },
    ],
  },
  {
    slug: 'windows-11-24h2-recall-what-to-disable',
    title: 'Windows 11 24H2 — What to Disable Right Away (Including Recall)',
    excerpt: 'Microsoft\'s 2024H2 update added some features you may want to turn off. Here is the short list of settings to change today.',
    category: 'windows-guides',
    tags: ['windows 11', '24h2', 'recall', 'privacy', 'microsoft', 'copilot'],
    readTime: '7 min',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `If your Windows 11 PC has updated to version 24H2 (the big October 2024 update that rolled out widely through 2025), you may have noticed new icons in the taskbar, new Copilot prompts, and a feature called Recall on Copilot+ PCs. Some of these are useful. Some collect data about how you use your computer. Some can be turned off without losing anything.

This guide walks through the five settings most worth changing right after the 24H2 update arrives on your PC: Recall (which takes screenshots of everything you do), Copilot key on the keyboard, ad tracking ID, diagnostic data, and lock-screen suggestions.

You will not break anything by turning these off. Microsoft makes them opt-in or easy to disable because privacy regulators required it. Everything in this guide is reversible — if you change your mind, the same setting flips it back on.

(Sources: Microsoft Support — "Recall on Copilot+ PCs," support.microsoft.com/recall; Microsoft Privacy Dashboard, account.microsoft.com/privacy)`,
    steps: [
      {
        title: 'Disable Recall if it is on your PC',
        content: 'Recall is only on Copilot+ PCs (newer machines with a specific AI chip — Snapdragon X, Intel Core Ultra Series 2, or AMD Ryzen AI 300). It takes a screenshot every few seconds of everything you do and saves it locally so you can search "find that recipe I read last Tuesday." Some people love it. Some find it unsettling. To turn it off: Open Settings > Privacy & security > Recall & snapshots > toggle "Save snapshots" to Off. To wipe what it already saved, tap "Delete snapshots" and choose "All."',
        warning: 'Recall snapshots are stored on your PC, not in the cloud, and are encrypted. But anyone who knows your Windows password can view them. If you share the PC, turn Recall off.',
      },
      {
        title: 'Reassign or disable the Copilot key',
        content: 'Newer Windows keyboards have a Copilot key where the right-Ctrl or menu key used to be. Pressing it opens the Copilot chat panel. If you keep hitting it by accident, you can remap it. Settings > Personalization > Text input > Customize Copilot key. You can change it to open the Search bar, a different app, or do nothing. To disable Copilot entirely: Settings > Personalization > Taskbar > toggle Copilot off, then Settings > Apps > Installed apps > Copilot > Uninstall.',
        tip: 'Quick Tip: If you do not have a Copilot key, this section does not apply — your keyboard is older and unaffected.',
      },
      {
        title: 'Turn off your advertising ID',
        content: 'Windows assigns each user account a unique advertising ID that apps can use to track what you do across your PC and show ads. You do not need this on. Settings > Privacy & security > General > toggle "Let apps show me personalized ads by using my advertising ID" to Off. Also turn off the three other toggles on that page: "Let websites show me locally relevant content," "Let Windows improve Start," and "Show me suggested content in the Settings app."',
      },
      {
        title: 'Reduce diagnostic data Microsoft collects',
        content: 'Windows sends diagnostic data to Microsoft about how you use your PC. You can lower this to the minimum required. Settings > Privacy & security > Diagnostics & feedback. Set "Send optional diagnostic data" to Off. Turn off "Improve inking and typing." Turn off "Tailored experiences." Set "Feedback frequency" to Never. None of these affect Windows working correctly — they only stop Microsoft from receiving extra information about your habits.',
      },
      {
        title: 'Clean up lock-screen ads and Start menu suggestions',
        content: 'Windows 11 shows "Windows spotlight" images on the lock screen along with occasional ad-like prompts ("Did you know Microsoft 365…"). To turn them off: Settings > Personalization > Lock screen > "Personalize your lock screen" — choose Picture (not Windows spotlight) and pick a photo. Then Settings > Personalization > Start > toggle off "Show recommendations for tips, shortcuts, new apps, and more." That removes promo content from Start menu too.',
      },
      {
        title: 'Turn off Online Speech Recognition',
        content: 'Settings > Privacy & security > Speech > toggle "Online speech recognition" Off. This is for cloud-based dictation. If you do not use voice typing to dictate emails or use Cortana, you do not need this. Local speech (Voice access, Narrator) still works fine without it.',
      },
      {
        title: 'Schedule one yearly privacy check',
        content: 'Microsoft adds new settings with each Windows update. Once a year — pick your birthday or a holiday you will remember — sit down for 15 minutes and walk through Settings > Privacy & security. The categories on the left (Camera, Microphone, Location, Notifications) each have an on/off list of which apps can use what. Turn off anything you do not recognize. You can always turn it back on if an app stops working.',
        tip: 'Quick Tip: Bookmark account.microsoft.com/privacy in your browser. That is the master dashboard for everything Microsoft knows about you. You can delete past search history, location history, and voice activity from there.',
      },
    ],
  },
  {
    slug: 'costco-membership-renewal-scam-email-2026',
    title: 'The Fake Costco Renewal Email Going Around — How to Spot It',
    excerpt: 'A new scam email claims your Costco membership is about to expire. Here is how to tell it from the real renewal notice and what to do.',
    category: 'safety-guides',
    tags: ['costco', 'phishing', 'scam email', 'membership', 'fraud', 'identity theft'],
    readTime: '5 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `Through April and May 2026, a wave of scam emails has been making the rounds with the subject line "Your Costco Membership Expires Tomorrow" or "Action Required: Costco Membership Renewal." The email looks convincing — it uses the Costco logo, the warehouse-blue colors, and a clear "Renew Now" button. The button takes you to a fake page that asks for your name, address, credit card, and Costco card number.

If you fill it in, the scammers immediately try to charge your card and also sell the data on the dark web. AARP and the FTC have both flagged this as one of the top three retail phishing scams of 2026.

This guide shows the four signals to check on any email like this, what a real Costco renewal email looks like, and what to do if you already clicked.

(Sources: FTC Consumer Alerts — reportfraud.ftc.gov; AARP Fraud Watch Network — aarp.org/money/scams-fraud; Costco Member Services — costco.com/customer-service)`,
    steps: [
      {
        title: 'Check the sender address — not the display name',
        content: 'The "From" field shows a display name like "Costco Wholesale" or "Costco Membership Services." That part is easy to fake. What you need is the actual email address. On a computer, hover your mouse over the sender name (do not click). On a phone, tap the sender name once to expand it. The real Costco sends from addresses ending in @costco.com or @e.costco.com. If you see anything like @costco-renewal.com, @costcobilling.net, @member-costco.co, or a long string of random characters, it is a scam.',
        tip: 'Quick Tip: Scammers often misspell the domain with extra letters or a different ending — costco-c.com or costc0.com (using the number zero). Read the address slowly, letter by letter.',
      },
      {
        title: 'Look for the membership number in the email',
        content: 'A real Costco renewal email includes the last four digits of your membership card number and your member level (Gold Star, Executive, Business). A scam email almost never has these — they do not have access to that data. If the email greets you as "Dear Valued Member" with no specifics, treat it as fake.',
      },
      {
        title: 'Do not click the button — go directly to Costco.com',
        content: 'Even if the email looks real, do not click any link or button in it. Open a new browser tab and type costco.com in the address bar yourself, or use the Costco app you already have. Sign in with your normal username and password. If your membership truly needs renewing, you will see a banner at the top of your account dashboard. If you do not see a banner, your membership is fine and the email was a scam.',
        warning: 'Some scam buttons take you to a page that looks identical to Costco.com but lives at a slightly wrong URL. The lock icon in the address bar does NOT mean a site is safe — scammers buy security certificates too. The only thing that confirms a site is real is the URL itself: costco.com, with nothing extra before the .com.',
      },
      {
        title: 'Check the urgency language',
        content: 'Real Costco does not threaten you. Scam emails use phrases like: "expires in 24 hours," "your account will be suspended," "final notice," "immediate action required." Real Costco sends renewal reminders 60 days and 30 days before expiration with friendly language. They never say "expires tomorrow" because they always notify you with weeks to spare.',
      },
      {
        title: 'Report the email to Costco and the FTC',
        content: 'Forward the email to phishing@costco.com (that is the real Costco anti-fraud address). Then file a quick complaint at reportfraud.ftc.gov — it takes 3 minutes, no account needed. The more people who report, the faster the scam domains get taken down. After reporting, delete the email. Do not just leave it in your inbox — it is easy to forget and accidentally click later.',
      },
      {
        title: 'What to do if you already clicked',
        content: 'If you entered any information on the fake page: (1) Call your credit card company right now (number on the back of the card) and ask them to freeze the card and issue a new one. (2) Log into Costco.com and change your password — use Settings > Security. (3) Place a free 7-year fraud alert on your credit at experian.com/fraud (one place files at all three bureaus). (4) Watch your bank statement daily for the next 60 days. Most fraudulent charges show up within 2 weeks.',
        warning: 'Do not call any phone number listed in the suspicious email — that is a scammer too. Only use the number on the back of your real Costco card or your credit card.',
      },
    ],
  },
  {
    slug: 'fake-browser-update-popup-how-to-spot',
    title: 'That "Update Your Browser" Popup Is Probably a Scam',
    excerpt: 'Fake browser update warnings have become the #1 way malware spreads in 2026. Here is how to spot them and what to do.',
    category: 'safety-guides',
    tags: ['malware', 'fake update', 'browser', 'popup', 'phishing', 'chrome', 'safari'],
    readTime: '6 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `You are reading a recipe or news article and a popup appears: "Your Chrome browser is out of date. Click here to install the security update." Or: "Safari needs updating to view this page. Update Now." Or: "Critical update required for Firefox."

In 2026, these popups are almost never real. They are the most common way computer malware spreads, especially to seniors. The popup is a fake page made by attackers, and the "Update" button downloads a file that gives the attacker remote access to your computer. The FBI calls this technique "fake updates" or "SocGholish" and tracks it as one of the top three malware delivery methods in the United States.

The good news: real browsers do not show update popups on top of web pages. Once you know what to look for, every fake update is easy to spot. This guide walks through the four tells, the safe way to update your real browser, and what to do if you already clicked.

(Sources: CISA Alerts — cisa.gov/news-events/cybersecurity-advisories; FBI Internet Crime Complaint Center, ic3.gov; Google Safe Browsing Help — support.google.com/chrome)`,
    steps: [
      {
        title: 'Know the rule: real browser updates never popup over a webpage',
        content: 'Chrome, Safari, Edge, and Firefox all update silently in the background. They never put a giant update banner on top of the website you are reading. The only "update" indicator the real browsers show is a small colored dot or arrow in the toolbar at the very top — Chrome puts a small colored dot on the three-dot menu, Edge does the same. That is it. If anything pops up from inside a webpage telling you to update, it is fake. Close it.',
        warning: 'Do NOT click any button on the popup, even buttons labeled "Cancel" or "No thanks" or the X to close. Some scams put their malware behind every button. Use the steps below to close it safely.',
      },
      {
        title: 'Close the popup the safe way',
        content: 'On Windows: press Ctrl + W to close the tab. If that does not work, press Ctrl + Shift + W to close the entire browser window. Then reopen the browser — your other tabs are still saved. On Mac: press Command + W for the tab, Command + Shift + W for the window. On iPhone/iPad: hard-close the browser by swiping up from the bottom and flicking the browser away. On Android: tap the square button (recent apps) and swipe the browser away.',
        tip: 'Quick Tip: If keyboard shortcuts feel hard to remember, the keyboard shortcut for "close everything bad" on Windows is Alt + F4 — it closes the active window no matter what.',
      },
      {
        title: 'Spot the four tells of a fake update popup',
        content: 'Fake updates almost always have all four of these signs: (1) The popup appeared while you were on a web page, not after opening the browser. (2) It uses urgent language — "critical," "immediately," "your data is at risk." (3) The browser logo looks slightly wrong — colors slightly off, wrong proportions, or it shows "Chrome 95" when the real Chrome is on version 135. (4) The button is labeled "Update Now" or "Install" and downloading the "update" produces a file with an extension like .exe, .dmg, .zip, .scr, or .msi. Real browser updates never download a file you need to run.',
      },
      {
        title: 'Update your real browser the right way',
        content: 'Chrome: click the three dots in the top-right > Help > About Google Chrome. The page automatically checks for and downloads any update. Edge: same thing, three dots > Help and feedback > About Microsoft Edge. Safari: updates come through Mac System Settings > General > Software Update. Firefox: three lines top-right > Help > About Firefox. After the update downloads, click Relaunch. The browser closes and reopens with your tabs restored.',
      },
      {
        title: 'What to do if you already clicked and downloaded the file',
        content: 'If you only clicked but the file did not run: go to your Downloads folder and delete the file. Empty the Trash/Recycle Bin. If you double-clicked the file and ran it: (1) Disconnect from the internet right now (turn off Wi-Fi). (2) Run a full antivirus scan — Windows Defender on PC (Settings > Privacy & security > Windows Security > Virus & threat protection > Quick scan), or Malwarebytes Free on either Mac or PC. (3) Change every important password from a different device (your phone is fine). (4) Watch your bank statements for the next 30 days.',
        warning: 'If you saw "Your computer has been locked, call 1-800-…" — that screen is also fake. Never call the number. Reboot the computer. If the message returns, run an antivirus scan from Safe Mode.',
      },
      {
        title: 'Set up two protections that stop most fake updates',
        content: 'First, turn on your browser\'s built-in protection. In Chrome: Settings > Privacy and security > Security > pick "Enhanced protection." In Safari: it is on by default; check Settings > Safari > make sure "Fraudulent Website Warning" is on. Second, use an ad blocker — most fake updates show up as ads on websites. uBlock Origin is free and trusted (available for Chrome, Edge, Firefox). On Safari, AdGuard for Safari is the equivalent. With both protections on, you will rarely see a fake update popup at all.',
        tip: 'Quick Tip: Tell a friend or family member about this. Fake updates are the most common way grandparents get malware. A 60-second conversation prevents weeks of cleanup.',
      },
    ],
  },
  {
    slug: 'airpods-pro-2-hearing-aid-features-setup',
    title: 'Use AirPods Pro 2 as Hearing Aids — Setup Walkthrough',
    excerpt: 'Apple\'s AirPods Pro 2 now have FDA-cleared hearing aid features. Here is how to test your hearing and set them up.',
    category: 'health-tech',
    tags: ['airpods', 'hearing aid', 'apple', 'accessibility', 'hearing test', 'conversation boost'],
    readTime: '7 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Intermediate',
    body: `In late 2024, the FDA cleared AirPods Pro 2 to be sold as a hearing aid for mild to moderate hearing loss. The feature is built into every set of AirPods Pro 2 (the second-generation model with USB-C or Lightning charging case) running the iOS 18.1 update or later. There is no extra charge — if you already own AirPods Pro 2, you already own a clinical-grade hearing aid.

This matters because traditional hearing aids cost $2,000 to $6,000 a pair, often are not covered by Medicare, and require a specialist visit. AirPods Pro 2 cost about $189–$249 and are available at Best Buy, Costco, and the Apple Store. For people with mild or early hearing loss, this is the biggest health tech change in a decade.

This guide walks through the four-step setup: taking the at-home hearing test, enabling Hearing Aid mode, fine-tuning the result, and using the supporting features like Conversation Boost and Live Listen for restaurants and group dinners.

(Sources: Apple Support — "Use AirPods Pro 2 as a Hearing Aid," support.apple.com/guide/iphone/hearing-health; FDA Press Release — fda.gov; AARP Health Tech, aarp.org/health/conditions-treatments)`,
    steps: [
      {
        title: 'Confirm you have the right AirPods and updated software',
        content: 'You need: AirPods Pro 2 (the case has a small speaker grille on the bottom for Find My). Open the case near your iPhone and tap "Settings > [Your AirPods name]" — the firmware should be 7B19 or higher. If older, plug the case into power, leave it next to your iPhone overnight, and the firmware will update automatically. Your iPhone needs to be on iOS 18.1 or newer (Settings > General > Software Update). AirPods 2nd gen, AirPods 3, AirPods Max, and AirPods Pro 1st gen do NOT support the hearing aid features. Only AirPods Pro 2.',
        warning: 'The hearing aid feature is currently available in the United States, the EU, the UK, Canada, Australia, and a growing list of other countries. If you are outside one of those, the setting may not appear yet.',
      },
      {
        title: 'Find a quiet room and put the AirPods in',
        content: 'You need a quiet space for about 5 minutes — a closed bedroom or office, no TV, no fans, no air conditioner if you can pause it. The room must be very quiet for the hearing test to be accurate. Put both AirPods in. Make sure the silicone tips fit well — if they are loose, the test will be inaccurate. Apple includes four ear tip sizes in the box; the medium size is usually the right one but try each if the AirPods feel loose.',
        tip: 'Quick Tip: To check the tip fit, open Settings > [Your AirPods] > scroll to "Ear Tip Fit Test." It plays a quick tone and tells you if the seal is good. Re-do it if either ear shows "Adjust or try a different size."',
      },
      {
        title: 'Take the at-home hearing test',
        content: 'Open Settings > [Your AirPods name]. Tap "Hearing Health." Tap "Take a Hearing Test." Follow the prompts — the test takes about 5 minutes. You will hear tones at different volumes and pitches in each ear and tap the screen when you hear something. The test gives you an audiogram (a chart of your hearing across frequencies) and classifies your hearing as no loss, mild, moderate, or moderately severe. Save the result.',
      },
      {
        title: 'Turn on Hearing Aid mode',
        content: 'After the test, if you have mild to moderate hearing loss, the iPhone offers to "Set Up Hearing Aid" using your audiogram. Tap Set Up. The phone customizes the AirPods to amplify exactly the frequencies you have trouble with. You can also use the feature with a hearing test PDF from an audiologist — Apple accepts standard audiogram files (Settings > [AirPods] > Hearing Health > Import Audiogram).',
        warning: 'If you have severe or profound hearing loss, the AirPods will tell you to see an audiologist. They are FDA-cleared for mild and moderate only.',
      },
      {
        title: 'Turn on Conversation Boost for restaurants and dinners',
        content: 'Conversation Boost focuses the microphones forward, on the person in front of you, and reduces side noise. This is the killer feature for restaurants. To turn it on: Open Control Center on your iPhone (swipe down from the top-right). Press and hold the volume slider. Tap "Hearing Assist" if shown, or tap the ear icon. Toggle "Conversation Boost" on. You can also set a custom button or shortcut so you do not have to dig for it every time.',
      },
      {
        title: 'Use Live Listen to hear someone across the room',
        content: 'Live Listen turns your iPhone into a remote microphone. Place the iPhone next to the person you want to hear (or in the middle of a dinner table). Their voice plays through your AirPods. To enable: add Hearing to Control Center first — Settings > Control Center > tap + next to "Hearing." Then in Control Center, tap the Hearing button > tap "Live Listen." Place the phone where you need a microphone. Stop Live Listen the same way when done.',
        tip: 'Quick Tip: At a noisy restaurant, place the iPhone face-down in the middle of the table and turn on Live Listen — the bottom mics aim upward and the AirPods focus on the table.',
      },
      {
        title: 'Adjust the sound for comfort',
        content: 'If the world sounds too loud or too tinny: Settings > [AirPods] > Hearing Health > Hearing Aid > Adjustments. You can change overall volume, balance left/right, and tone (warmer or brighter). If you have not adjusted the fit in a few weeks and things sound off, retake the Ear Tip Fit Test. Hearing also changes day-to-day with sinus pressure, allergies, or sleep — it is normal to tweak slightly.',
      },
      {
        title: 'Care, battery, and when to see an audiologist',
        content: 'AirPods Pro 2 in hearing aid mode get about 6 hours per charge. The case holds 4 full recharges, so a full day is fine but plug the case in each night. Clean the mesh tips weekly with a dry soft brush — wax buildup makes the AirPods sound muffled. See a real audiologist annually for a baseline test, especially if your hearing test result changes by more than 10 dB at any frequency or if you have sudden hearing loss in one ear.',
        warning: 'AirPods are not a replacement for treatment if you have ringing in the ears (tinnitus), sudden hearing loss in one ear, ear pain, or drainage. Those need a doctor.',
      },
    ],
  },
  {
    slug: 'amazon-subscribe-save-avoid-surprise-charges',
    title: 'Amazon Subscribe & Save — How to Use It Without Surprise Charges',
    excerpt: 'Subscribe & Save can cut prices on things you already buy, but a few default settings cause unwanted shipments. Here is how to set it up right.',
    category: 'app-guides',
    tags: ['amazon', 'subscribe and save', 'shopping', 'savings', 'subscription'],
    readTime: '6 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `Amazon\'s Subscribe & Save can save you 5–15 percent on things you buy every month or two — toilet paper, vitamins, coffee, pet food. The idea is simple: tell Amazon how often to send the item, and it ships on that schedule automatically.

The problem is that the default settings catch people by surprise. Items can arrive when you do not need them. Prices change without warning. Shipments combine in confusing ways. People wake up to a $146 charge for things they forgot they subscribed to.

You can avoid all of that with seven minutes of one-time setup. This guide shows the four settings to change, how to "skip" a delivery without canceling, and the exact place to see every active subscription on one screen so nothing surprises you.

(Sources: Amazon Help & Customer Service — amazon.com/gp/help/customer/display.html; AARP Money — aarp.org/money)`,
    steps: [
      {
        title: 'Find your master Subscribe & Save dashboard',
        content: 'On a computer: go to amazon.com and sign in. Click "Account & Lists" in the top-right corner. Click "Memberships and Subscriptions." Click "Subscribe & Save Items." This is the page that shows every active subscription, the next delivery date, and the current price. On the Amazon app: tap the person icon (bottom-right on iPhone, top-right on Android), tap "Your Account," then tap "Subscribe & Save."',
        tip: 'Quick Tip: Bookmark this page in your browser. It is the only place you can see all subscriptions at once. Amazon does not put a link to it on the home page.',
      },
      {
        title: 'Turn on monthly email reminders',
        content: 'In your Subscribe & Save dashboard, click "Settings." Make sure "Send me a monthly reminder email about upcoming deliveries" is checked. Amazon sends one email per month listing everything scheduled to ship in the next 30 days. This is the single most useful setting — it gives you a chance to skip items you no longer need before they ship.',
      },
      {
        title: 'Skip a single delivery without canceling',
        content: 'When you do not need the next shipment of something, you can skip it. On the dashboard, find the item, click "Skip" next to the next delivery date. The item shifts to the following cycle. You do not lose your subscription discount and the price stays locked in. This is better than canceling and resubscribing later.',
      },
      {
        title: 'Adjust delivery frequency',
        content: 'If something keeps arriving too often (or not often enough), change the schedule. On the dashboard, find the item, click "Delivery frequency." Pick from one month, two months, three months, four months, or six months. For toilet paper, vitamins, and coffee, every two or three months is usually right. For pet food, monthly. The change applies to all future shipments, not the next one.',
      },
      {
        title: 'Check the price before each cycle',
        content: 'Amazon does not promise the price stays the same. They guarantee 5–15 percent off list, but the list price can rise. Once a month, when the reminder email arrives, scan the prices in your dashboard. If something jumped 20 percent, cancel it and rebuy it as a one-time order at the lower competitor price. Walmart, Target, and Costco often beat Amazon on bulk staples.',
      },
      {
        title: 'Unlock the bigger discount with 5 subscriptions per month',
        content: 'Amazon gives you an extra 10 percent off (on top of the regular 5) when you have 5 or more items arriving in the same month. This is why people batch their subscriptions to a single delivery date. To check what counts: dashboard > "Get more out of Subscribe & Save." It lists how many items you currently have shipping each month. You do not have to keep five forever — you can add a fifth cheap item just for the month a big order comes through.',
        tip: 'Quick Tip: Cheap "fifth item" tricks: small bag of dog treats, small jar of vitamins, single roll of paper towels. Anything you can use up eventually.',
      },
      {
        title: 'Cancel a subscription completely',
        content: 'On the dashboard, find the item, click "Cancel subscription." Confirm the cancellation. Amazon sometimes offers a discount to keep you — accept it or decline, your choice. The next shipment is canceled and you are not charged. You can resubscribe later by buying the same product as a regular order and choosing "Subscribe & Save" instead of "Buy Now" again.',
      },
      {
        title: 'Watch out for items that joined accidentally',
        content: 'Some Amazon product pages put the "Subscribe & Save" option in the same place where "Buy Now" used to be. People click it thinking they are buying once. Always look at the small print under the price: if it says "$24.99 first delivery, every 2 months," you signed up for a subscription, not a one-time purchase. After every Amazon order, check the order confirmation email — it shows whether it was a subscription. If accidentally subscribed, cancel from the dashboard before the second shipment.',
        warning: 'Amazon\'s default sometimes pre-selects Subscribe & Save on certain items. The savings are real, but only if you actually want recurring deliveries.',
      },
    ],
  },
  {
    slug: 'passkey-login-for-banks-getting-started',
    title: 'Passkeys for Bank Login — The Password Replacement You Should Try',
    excerpt: 'Passkeys are stronger than passwords and faster to use. Here is how to set one up for your bank account, step by step.',
    category: 'online-banking',
    tags: ['passkey', 'bank login', 'security', 'face id', 'biometrics', 'password'],
    readTime: '7 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Intermediate',
    body: `Most major US banks now support a new login method called a passkey. Chase, Bank of America, Wells Fargo, Capital One, USAA, and Charles Schwab all added passkey support in 2024 and 2025. Credit unions are following.

A passkey replaces your username and password. Instead of typing anything, you confirm your identity with Face ID, Touch ID, or your phone\'s PIN. The login is mathematically tied to your specific device — it cannot be phished, cannot be stolen in a data breach, and cannot be guessed.

For seniors who hate remembering passwords or who have been phished before, passkeys are a major upgrade. This guide explains what they are in plain language, how to set one up for your bank, and what to do if you lose the phone the passkey is on.

(Sources: FIDO Alliance — fidoalliance.org; Apple Support — Passkeys, support.apple.com/guide/iphone; Google Account Help — support.google.com/accounts; AARP Tech — aarp.org/home-family/personal-technology)`,
    steps: [
      {
        title: 'Understand what a passkey actually is',
        content: 'A passkey is a small file stored on your iPhone, Android phone, or computer. When you go to log in, the bank sends a challenge, your device proves it has the matching passkey file, and you confirm with Face ID or your fingerprint. There is no password to type. There is nothing for a hacker to steal — the file never leaves your device. If a website asks you to "type your passkey," that is a fake site. Real passkeys never involve typing.',
        tip: 'Quick Tip: Think of a passkey like a house key. Your iPhone is the key. Your face or fingerprint is the lock on the key safe. Without both your device AND your face, no one can sign in as you.',
      },
      {
        title: 'Check if your bank supports passkeys',
        content: 'Sign into your bank\'s website or app the normal way. Look in Settings or Security. The options are usually called "Passkeys," "Sign in with passkey," "Use Face ID for sign-in," or "Add a new sign-in method." Major US banks supporting passkeys as of May 2026: Chase, Bank of America, Wells Fargo, Capital One, USAA, Schwab, Citi, Fidelity, Vanguard, Synchrony. If your bank does not show the option yet, contact customer service and ask when. Most are rolling it out in 2026.',
      },
      {
        title: 'Set up the passkey from your bank account settings',
        content: 'In your bank app or website, find the passkey setting and tap "Add Passkey" or "Create Passkey." Your iPhone or Android phone will pop up asking "Do you want to save a passkey?" Tap Continue. You will be asked to verify with Face ID, Touch ID, or your phone\'s PIN — this is so the passkey is locked to your face/finger. After a confirmation message, you are done. The whole process takes about 30 seconds.',
        warning: 'Always set up passkeys when you are at home, alone, and on a trusted Wi-Fi network. Do not do it in a coffee shop or while someone can see your screen.',
      },
      {
        title: 'Sign in using your passkey',
        content: 'Next time you visit the bank website or app, tap "Sign in with passkey" (or just tap Sign In on a phone — the passkey usually appears automatically). Your phone shows a prompt: "Use Face ID to sign into Chase?" Look at the camera or touch the sensor. You are in. No username, no password, nothing to type.',
        tip: 'Quick Tip: If the passkey prompt does not appear, your phone may have screen lock disabled. Passkeys require some form of lock — Face ID, Touch ID, or a PIN. Set one in Settings > Face ID & Passcode (iPhone) or Settings > Security (Android) first.',
      },
      {
        title: 'Sync the passkey across your other Apple devices',
        content: 'If you have an iPhone, iPad, and Mac, the passkey syncs through iCloud Keychain. You only need to create it once. To check: Settings > Apple ID (your name at top) > iCloud > Passwords and Keychain — make sure it is on. The passkey will then appear automatically when you sign in on your Mac or iPad. On Android, the equivalent is Google Password Manager (Settings > Google > Auto-fill).',
      },
      {
        title: 'Keep your username and password as a backup',
        content: 'After creating a passkey, do not delete your bank password. Keep it. If you lose your phone and have not set up a second device, you may need to log in with the password and reset things. Use a long passphrase like "Coffee-Mountain-Tuesday-78" stored in your password manager (Apple Passwords app, Bitwarden, or 1Password). Never write it on a sticky note.',
      },
      {
        title: 'What to do if you lose your phone',
        content: 'If your iPhone is lost or stolen: passkeys are protected by Face ID/Touch ID. Even if the thief has your phone, they cannot open the passkey without your face or fingerprint. (1) Use Find My on icloud.com or another Apple device to put the phone in Lost Mode. (2) When you get a new phone, sign in with your Apple ID — the passkeys download automatically because they are synced through iCloud. (3) If you want extra peace of mind, sign into your bank from a computer using your password and remove the lost device\'s passkey from the account.',
      },
      {
        title: 'Be careful where you create passkeys',
        content: 'Only create passkeys on devices you own and trust. Never create one on a public computer, a friend\'s phone, or a work device that other people use. If you accidentally created a passkey on the wrong device, sign into the bank from your real phone, find the passkey list in Settings, and remove the unwanted one. Each passkey can be revoked separately.',
        warning: 'There is no such thing as "scam passkeys" — but there are scam emails that try to trick you into giving up your bank password by claiming "passkey setup required." Real passkey setup never asks for your password. If an email tells you to set up a passkey by clicking a link, ignore it. Always set up passkeys directly inside the bank\'s own app or after typing the bank\'s URL into your browser yourself.',
      },
    ],
  },
  {
    slug: 'samsung-galaxy-s25-galaxy-ai-for-seniors',
    title: 'Samsung Galaxy S25 — The AI Features Worth Using (and the Ones to Skip)',
    excerpt: 'The Galaxy S25 has a long list of AI features. Here are the four worth turning on and the ones to leave alone.',
    category: 'phone-guides',
    tags: ['samsung', 'galaxy s25', 'galaxy ai', 'android', 'live translate', 'photo edit'],
    readTime: '7 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-13',
    lastVerifiedAt: '2026-05-13',
    difficulty: 'Beginner',
    body: `Samsung\'s Galaxy S25 (released January 2025) and S25 Ultra come loaded with Samsung\'s "Galaxy AI" — features powered by AI built into the phone. Some are genuinely useful for everyday life. Others are gimmicks that will collect dust in your settings.

This guide cuts through Samsung\'s marketing and picks the four AI features worth learning: Live Translate during phone calls, Circle to Search, Photo Assist for fixing photos, and Note Assist for cleaning up notes. It also points out the two features ("Sketch to Image" and "Now Brief") that are clever but you probably will not use.

The walkthrough below works for both the Galaxy S25 and the S25 Ultra running One UI 7 (Samsung\'s software layer over Android 15). Most steps also work on the S24 series and Galaxy Z Fold/Flip 6 if you have Galaxy AI enabled.

(Sources: Samsung Support — samsung.com/us/support/mobile-devices; Samsung Newsroom — news.samsung.com/us; AARP Senior Tech, aarp.org/home-family/personal-technology)`,
    steps: [
      {
        title: 'Turn on Galaxy AI in Settings',
        content: 'Open Settings. Scroll to "Galaxy AI." If you do not see it, tap Settings > "Advanced features" first. Toggle Galaxy AI on. Tap "Online processing for advanced features" if you want better AI results — this sends some data to Samsung\'s servers. Toggle "Process data only on device" if you want everything to stay local (the AI will be slower but more private). Most people are fine with online processing, since Samsung does not store the data after the request.',
        tip: 'Quick Tip: If you ever change your mind, you can switch from online to on-device processing without restarting anything. Try both and see which speed you prefer.',
      },
      {
        title: 'Use Live Translate during phone calls — the killer feature',
        content: 'Live Translate translates a phone call in real time, in both directions. Useful if you have a relative who speaks Spanish, Korean, French, or any of 15+ supported languages. To use: open the Phone app. Start or receive a call. Tap the on-screen "Live Translate" button (or Settings > Call settings > Live Translate to enable). Pick your language and the other person\'s language. Speak normally — the other person hears your words in their language; you hear theirs in yours, after a small pause.',
        warning: 'Live Translate is good for casual conversation. Do not rely on it for medical, legal, or business decisions — use a human translator instead.',
      },
      {
        title: 'Use Circle to Search for "what is this on my screen?"',
        content: 'Press and hold the home gesture bar at the bottom of the screen until a search box appears. Circle, scribble, or tap anything visible on the screen — a product, a landmark, a piece of text, a logo. Google searches for it. This is the fastest way to identify a plant in a photo, a building from a postcard, or a word in a foreign-language email. Works in any app — texting, photos, web, anywhere.',
        tip: 'Quick Tip: Circle to Search can also translate any text on screen — circle the words and tap the Translate icon that appears.',
      },
      {
        title: 'Use Photo Assist to fix shaky or cluttered photos',
        content: 'Open Gallery. Tap any photo. Tap the pencil/Edit icon at the bottom. Tap the small star/AI icon (sometimes labeled "AI"). Options appear: "Erase" (removes a person or object from the background), "Move" (drag a person to reposition them), "Recompose" (lets you expand the photo edges), "Restore" (sharpens old, blurry photos), and "Sky" (changes the sky from gray to blue). Tap the option you want, follow the prompt, then tap Save. Photo Assist does not overwrite the original — it saves a copy.',
        warning: 'Edits made by Photo Assist add a small watermark in the photo metadata indicating "AI generated." This is required by law in some places and helps verify the photo was edited. The watermark is not visible on the photo itself.',
      },
      {
        title: 'Use Note Assist to clean up handwritten or messy notes',
        content: 'Open Samsung Notes (or another supported notes app). Type or jot down anything — meeting notes, recipe steps, a quick list. Tap the AI icon at the top of the note. Pick from: Summarize (one-line summary), Format (cleans up bullet points and structure), Translate (changes language), Spelling and grammar (fixes typos), or Auto-format (organizes a messy note into clear sections). One tap and the note becomes readable. Original text is preserved if you tap "Undo" within 30 seconds.',
      },
      {
        title: 'Skip Sketch to Image and Now Brief unless they grab you',
        content: 'Sketch to Image lets you doodle a stick figure and Galaxy AI redraws it as a finished image. Fun once. Now Brief is a daily AI-curated screen with weather, calendar, and headlines — many people find it cluttered. If you want to disable them: Settings > Advanced features > Galaxy AI > toggle each off individually. Removing them does not affect anything else.',
      },
      {
        title: 'Watch the battery — AI features use more power',
        content: 'Galaxy AI features draw extra battery. If you notice your S25 dropping faster than expected: Settings > Battery > Background usage limits — check what is running. The Galaxy AI components show up there. You can put them in "deep sleep" if not used daily. With AI features on and used heavily, expect a 5–10 percent battery hit per day compared to the same usage with AI off. For most people that is worth it.',
      },
      {
        title: 'How long Galaxy AI features stay free',
        content: 'Samsung promised the included Galaxy AI features stay free through the end of 2025, then announced an extension through the end of 2026. After that, some of the cloud-based features may move to a subscription. The on-device features (Photo Assist, Note Assist, Circle to Search) will likely stay free forever — they run on the phone\'s chip, not Samsung\'s servers. The cloud features (Live Translate of certain languages, generative image fills) may eventually have a paid tier. Watch the Samsung Newsroom for updates.',
        tip: 'Quick Tip: If pricing changes are announced, you can choose to keep using only the free features. Galaxy AI does not stop your phone from working if you do not pay.',
      },
    ],
  },
];
