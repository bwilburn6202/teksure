// guides-batch-321 — 6 guides for the 90-day compound growth sprint (Day 62, 2026-07-12)
// Topics: robocall/scam defense, password managers, video calling, banking app safety
// Sourced from official FTC/FCC/Apple/Google/AARP support pages

import type { Guide } from "./guides";

export const guidesBatch321: Guide[] = [
  {
    slug: "how-to-block-robocalls-on-your-phone",
    title: "How to Block Robocalls and Spam Calls on Your Phone",
    excerpt: "Turn on free call-blocking and spam-labeling tools built into iPhone and Android to cut down on scam and robocall interruptions.",
    category: "safety-guides",
    tags: ["robocalls", "spam calls", "scam prevention", "phone settings"],
    readTime: "6 min",
    thumbnailEmoji: "📵",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "Robocalls and spam calls are one of the most common ways scammers reach people, often pretending to be the IRS, a bank, a package delivery service, or a relative in trouble. Both iPhone and Android phones now include free tools that automatically flag or silence these calls before they ever interrupt you, and carriers offer additional free spam-blocking services on top of that.\n\nThese built-in tools work by comparing incoming numbers against known spam and robocall lists, or by silencing any call from a number that isn't already in your contacts. None of this requires downloading a third-party app or paying for anything — it's all included in the phone you already have.\n\nIf a scam call does get through, the safest response is simply to hang up. Real government agencies, banks, and delivery companies do not threaten arrest, demand gift cards, or ask for your Social Security number over the phone. Source: fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts.",
    steps: [
      {
        title: "Turn on Silence Unknown Callers (iPhone)",
        content: "Open Settings, scroll down and tap Phone, then tap \"Silence Unknown Callers.\" Turn this on and calls from numbers not in your contacts will go straight to voicemail without ringing.",
        tip: "Voicemails still come through, so you won't miss anything truly important — you just won't be interrupted by the ring.",
      },
      {
        title: "Turn on Caller ID & Spam Protection (Android)",
        content: "Open the Phone app, tap the three-dot menu, then Settings, then \"Caller ID & spam.\" Turn on \"See caller and spam ID\" and \"Filter spam calls\" to have suspected spam calls flagged or silenced automatically.",
      },
      {
        title: "Check with your carrier for free spam-blocking",
        content: "AT&T, Verizon, and T-Mobile each offer a free spam-blocking service (AT&T Call Protect, Verizon Call Filter, T-Mobile Scam Shield). Search your carrier's name plus \"call protect\" to find the free sign-up page and confirm it's active on your line.",
      },
      {
        title: "Register your number on the Do Not Call list",
        content: "Visit donotcall.gov and add your phone number for free. This won't stop illegal scam calls, since scammers ignore the list, but it does reduce legitimate telemarketing calls, making it easier to notice which calls are actually suspicious.",
      },
      {
        title: "Never press a number to \"opt out\"",
        content: "If a robocall tells you to \"press 1 to be removed from our list,\" don't. That confirms your number is active and can lead to more spam calls, not fewer. Just hang up and let your phone's spam filter handle it going forward.",
        warning: "Never give out personal information, verify your identity, or make a payment to anyone who called you unexpectedly, even if they claim to be your bank or a government agency. Hang up and call the organization back using the number on their official website or the back of your card.",
      },
    ],
  },
  {
    slug: "setting-up-a-password-manager-for-beginners",
    title: "How to Set Up a Password Manager (Beginner's Guide)",
    excerpt: "Stop reusing the same password everywhere — set up a free password manager built into your iPhone, Android, or browser in about 10 minutes.",
    category: "safety-guides",
    tags: ["passwords", "password manager", "online safety", "account security"],
    readTime: "8 min",
    thumbnailEmoji: "🔑",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "Using the same password on multiple websites is one of the biggest security risks for anyone online — if just one of those sites gets hacked, criminals will try that same password on your email, banking, and shopping accounts. A password manager solves this by generating a unique, hard-to-guess password for every account and remembering it for you, so you only ever have to remember one master password.\n\nThe good news is that a solid password manager is already built into the device you own. iPhones have iCloud Keychain, Android phones and Chrome have Google Password Manager, and both work automatically once turned on — no separate app or subscription required to get started.\n\nA password manager also helps protect against phishing scams, since it will only fill in your password on the real website it was saved for, not a look-alike scam site. Source: support.apple.com/en-us/HT204085 and support.google.com/accounts/answer/6197437.",
    steps: [
      {
        title: "Turn on iCloud Keychain (iPhone)",
        content: "Open Settings, tap your name at the top, tap iCloud, then tap Passwords and Keychain, and turn it on. Your iPhone will now offer to save and auto-fill passwords in Safari and most apps.",
      },
      {
        title: "Turn on Google Password Manager (Android or Chrome)",
        content: "On Android, open Settings, tap Google, then Password Manager, and make sure \"Offer to save passwords\" is turned on. On a computer, open Chrome, click the three-dot menu, go to Settings, then Autofill and passwords.",
      },
      {
        title: "Let it generate strong passwords for new accounts",
        content: "The next time you sign up for a new website, tap the password field and your phone or browser will suggest a long, random password and offer to remember it for you. Accept the suggestion instead of typing your own — this is what makes each account's password unique.",
        tip: "You don't need to memorize these generated passwords. Your device fills them in automatically every time you log in on that device.",
      },
      {
        title: "Check for weak or reused passwords",
        content: "In iCloud Keychain, go to Settings > Passwords > Security Recommendations. In Google Password Manager, tap \"Password Checkup.\" Both will list any accounts using a weak, reused, or previously breached password so you know exactly which ones to update first.",
      },
      {
        title: "Turn on two-factor authentication where offered",
        content: "For your most important accounts — email, banking, and social media — turn on two-factor authentication (sometimes called 2FA or two-step verification) in addition to your password. This adds a second check, like a code texted to your phone, so a stolen password alone isn't enough to get in.",
      },
    ],
  },
  {
    slug: "how-to-video-call-family-with-facetime-or-google-duo",
    title: "How to Video Call Family and Friends (FaceTime, Google Meet, and More)",
    excerpt: "A simple guide to starting a video call on iPhone, Android, or computer so you can see loved ones face to face, no matter what device they use.",
    category: "communication",
    tags: ["video calling", "facetime", "google meet", "staying connected"],
    readTime: "6 min",
    thumbnailEmoji: "📹",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "Video calling lets you see family and friends face to face even when you can't be in the same room, and it's especially valuable for staying close to grandchildren, checking in on relatives who live far away, or attending a virtual doctor's appointment. Every smartphone and most computers already have a free video calling app installed, so there's nothing extra to buy.\n\niPhone owners can use FaceTime to call other Apple users for free over Wi-Fi or cell data. For calling someone with an Android phone, or for group calls that mix Apple and Android users, Google Meet works on any device with a web browser and doesn't require anyone to create an account to join a call you start.\n\nIf you're ever unsure whether a video call link is legitimate, only click links sent directly by someone you know and were expecting to hear from — scammers sometimes send fake meeting invitations to try to steal personal information. Source: support.apple.com/en-us/HT204380 and support.google.com/meet.",
    steps: [
      {
        title: "Start a FaceTime call (iPhone to iPhone)",
        content: "Open the FaceTime app, tap the plus button, type the person's name or phone number, and tap the video camera icon to start the call. They'll get a call notification just like a phone call.",
        tip: "You can also start a FaceTime call directly from a text conversation by tapping the person's name at the top and choosing FaceTime.",
      },
      {
        title: "Start a Google Meet call (works on any device)",
        content: "Open a web browser and go to meet.google.com, or open the Google Meet app on Android. Tap \"New meeting,\" then \"Share\" and send the link to whoever you want to join — they can click it from any phone or computer, even without a Google account.",
      },
      {
        title: "Join a video call from a link someone sent you",
        content: "Tap the link exactly as it was sent to you in a text or email from someone you know. It will open in your browser or the relevant app and ask if you want to join with your camera and microphone on — tap \"Join\" or \"Allow.\"",
      },
      {
        title: "Turn your camera and microphone on or off during a call",
        content: "Look for a small camera icon and microphone icon at the bottom of the call screen. Tapping the camera icon turns your video on or off; tapping the microphone icon mutes or unmutes your sound. A line through the icon means it's currently off.",
      },
      {
        title: "End the call",
        content: "Tap the red phone icon (sometimes labeled \"Leave call\") at the bottom of the screen to hang up. On FaceTime, this may be a red button with a phone symbol; on Google Meet, it's usually a red circle with a phone hang-up icon.",
      },
    ],
  },
  {
    slug: "recognizing-fake-bank-app-and-text-alerts",
    title: "How to Spot a Fake Bank Text or App Alert",
    excerpt: "Learn the warning signs of fake fraud-alert texts and emails pretending to be your bank, and the safe way to check if a message is real.",
    category: "financial-tech",
    tags: ["banking scams", "smishing", "fraud alerts", "phishing", "safety"],
    readTime: "7 min",
    thumbnailEmoji: "🏦",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "One of the fastest-growing scams involves a text message or email that looks exactly like a fraud alert from your real bank, warning that your account has been \"locked\" or that a suspicious charge needs to be \"verified\" right away. The message includes a link that leads to a fake website designed to steal your online banking username and password the moment you type them in.\n\nThese scam messages work because they create urgency and fear — the goal is to get you to click and act before you stop to think it through. Real banks will never ask you to confirm your full account number, password, or one-time verification code by text or email.\n\nThe safest response to any unexpected bank alert is to ignore the link entirely and instead open your bank's official app, or type your bank's web address directly into your browser, or call the number printed on the back of your debit or credit card. Source: consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams.",
    steps: [
      {
        title: "Look for urgency and threats",
        content: "Phrases like \"your account will be closed in 24 hours,\" \"immediate action required,\" or \"unauthorized charge detected — verify now\" are designed to rush you into clicking without thinking. Real bank alerts are rarely this dramatic.",
      },
      {
        title: "Check the sender's number or email address closely",
        content: "Scam texts often come from a regular cell phone number or a strange email address rather than your bank's official short code or domain. If it doesn't match previous legitimate messages from your bank, be suspicious.",
      },
      {
        title: "Never click the link in the message",
        content: "Instead, close the text or email completely. Open your bank's official app directly, or type your bank's web address into your browser by hand, or call the phone number printed on the back of your physical debit or credit card.",
        warning: "A phone number included in the suspicious text or email itself cannot be trusted — scammers control that number too. Always use a number you already know is correct, like the one on your card.",
      },
      {
        title: "Log in directly and check for real alerts",
        content: "Once logged into your bank's real app or website, check your account activity and messages section. If there's a genuine issue, it will show up there. If you see nothing unusual, the text or email you received was very likely a scam.",
      },
      {
        title: "Report and delete the scam message",
        content: "Forward suspicious texts to 7726 (SPAM) to report them to your carrier, and forward phishing emails to reportphishing@apwg.org. Then delete the message. You can also let your bank's real fraud department know you received a fake alert using their number.",
      },
    ],
  },
  {
    slug: "how-to-use-google-lens-to-identify-and-translate-things",
    title: "How to Use Google Lens to Identify Objects, Text, and Translate Signs",
    excerpt: "Point your phone's camera at a plant, product label, or foreign-language sign and let Google Lens tell you what it is or translate it instantly.",
    category: "app-guides",
    tags: ["google lens", "camera tools", "translation", "phone apps"],
    readTime: "6 min",
    thumbnailEmoji: "🔍",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "Google Lens is a free camera tool that can identify almost anything you point your phone at — plants, animals, products, landmarks, and more — and it can also read and translate text in photos, like a restaurant menu in another language or the tiny print on a medication bottle. It's built into the Google app and the Google Photos app on both iPhone and Android, so there's nothing extra to install for most people.\n\nBeyond simple identification, Lens can copy text straight out of a photo so you can paste it into a text message or search, look up a product to compare prices, or solve a math problem written on paper. It's one of the most genuinely useful free tools built into a modern smartphone.\n\nGoogle Lens works by sending a picture to Google's servers to be analyzed, so an internet connection is required, and it's worth knowing that photos you scan this way are processed by Google the same way a regular search would be. Source: support.google.com/photos/answer/9245478.",
    steps: [
      {
        title: "Open Google Lens from the Google app",
        content: "Open the Google app (a colorful \"G\" icon) and tap the camera-shaped Lens icon inside the search bar. If you don't have the Google app, download it free from the App Store or Google Play.",
      },
      {
        title: "Point your camera and tap to search",
        content: "Aim your camera at whatever you want to identify — a plant, an unfamiliar gadget, a product label — and tap the search button. Lens will show you what it thinks the object is along with related links and information.",
      },
      {
        title: "Translate text in real time",
        content: "In Lens, tap the \"Translate\" option along the bottom, then point your camera at a sign, menu, or label in another language. The translated text appears directly over the original on your screen.",
        tip: "This works great for restaurant menus while traveling or for reading instructions on imported products.",
      },
      {
        title: "Copy text from a photo",
        content: "Point Lens at any printed or handwritten text, tap \"Text,\" then drag to select the words you want. Tap \"Copy text\" and you can paste it into a text message, email, or notes app instead of retyping it by hand.",
      },
      {
        title: "Search from a photo already on your phone",
        content: "You don't need to take a new photo — open Google Photos, find any existing picture, and tap the Lens icon at the bottom of the screen to search or translate text within that saved photo.",
      },
    ],
  },
  {
    slug: "understanding-app-permissions-on-your-phone",
    title: "How to Understand and Manage App Permissions on Your Phone",
    excerpt: "Learn what it means when an app asks for access to your camera, location, or contacts, and how to review and turn off permissions you don't want.",
    category: "safety-guides",
    tags: ["app permissions", "privacy", "phone settings", "data safety"],
    readTime: "7 min",
    thumbnailEmoji: "🛡️",
    publishedAt: "2026-07-12",
    lastVerifiedAt: "2026-07-12",
    difficulty: "Beginner",
    body: "When you install an app, it often asks permission to use parts of your phone like the camera, microphone, location, or contacts list. These requests exist so apps can do their job — a map app needs your location, a video-calling app needs your camera — but not every request is actually necessary, and it's worth understanding what you're agreeing to before tapping \"Allow.\"\n\nBoth iPhone and Android let you review every permission an app has, one at a time, and turn off anything that doesn't seem needed for what the app actually does. For example, a flashlight app rarely has a good reason to know your exact location or read your contacts.\n\nReviewing app permissions every so often is a simple, free way to protect your privacy, and neither iPhone nor Android requires you to uninstall an app to change what it's allowed to access — permissions can be adjusted at any time without losing the app or its data. Source: support.apple.com/en-us/HT203033 and support.google.com/android/answer/9431959.",
    steps: [
      {
        title: "Review all app permissions at once (iPhone)",
        content: "Open Settings and scroll down to Privacy & Security. Tap any category, like Location Services, Camera, or Contacts, to see every app that has requested that permission and change it.",
      },
      {
        title: "Review all app permissions at once (Android)",
        content: "Open Settings, tap Privacy (or Apps, depending on your phone), then tap Permission Manager. Tap any permission type to see which apps have access and turn off any that seem unnecessary.",
      },
      {
        title: "Check permissions for a single app",
        content: "On iPhone, go to Settings, scroll down to find the app in the list, and tap it to see and adjust everything it can access. On Android, go to Settings > Apps, tap the app, then tap Permissions.",
      },
      {
        title: "Choose \"While Using the App\" instead of \"Always\" for location",
        content: "When an app asks for location access, choosing \"While Using the App\" (rather than \"Always\") means it can only see your location while you actually have it open, not constantly in the background.",
        tip: "Weather and map apps genuinely need location to work; most games, shopping apps, and flashlight apps do not.",
      },
      {
        title: "Turn off permissions that don't make sense for the app",
        content: "If a simple game is asking for your contacts or microphone, there's rarely a good reason. Turning off a permission an app doesn't truly need won't break the app's core purpose, but it will stop it from collecting information it doesn't require.",
      },
    ],
  },
];
