// guides-batch-322 — 5 guides for the 90-day compound growth sprint (Day 62, 2026-07-13)
// Topics: passkeys, AI voice/chat scams, e-signing documents, Instagram parental supervision
// Sourced from official Apple/Google/Microsoft/FTC/Meta support pages

import type { Guide } from "./guides";

export const guidesBatch322: Guide[] = [
  {
    slug: "what-are-passkeys-and-how-to-set-one-up",
    title: "What Are Passkeys? How to Set One Up Instead of a Password",
    excerpt: "Passkeys let you sign in with your face, fingerprint, or screen lock instead of typing a password — here's how they work and how to turn one on.",
    category: "safety-guides",
    tags: ["passkeys", "passwords", "account security", "sign in"],
    readTime: "6 min",
    thumbnailEmoji: "🔑",
    publishedAt: "2026-07-13",
    lastVerifiedAt: "2026-07-13",
    difficulty: "Beginner",
    body: "A passkey is a newer, safer way to sign in to a website or app that replaces typing a password. Instead of remembering and typing a password, you unlock the passkey with the same face scan, fingerprint, or screen lock code you already use to unlock your phone or computer.\n\nPasskeys are safer than passwords because they cannot be guessed, reused across sites, or stolen in a data breach the way a typed password can. Each passkey is tied to the specific website or app it was created for and to your device, so a scammer who tricks you into visiting a fake copycat website cannot use your passkey to break in.\n\nMany major services now offer passkeys as an option, including Google, Apple, Amazon, and most banks. You do not have to switch everything over at once — you can add a passkey to an account while keeping your password as a backup, and start using passkeys gradually as you get comfortable. Source: support.google.com/accounts/answer/13548313.",
    steps: [
      {
        title: "Find the passkey option in your account settings",
        content: "Sign in to the account as you normally would, then go to its security or sign-in settings. Look for a section called \"Passkeys,\" \"Security keys,\" or \"Sign-in options.\"",
        tip: "If you don't see a passkey option, the service may not support them yet. You can keep using your password normally — nothing changes.",
      },
      {
        title: "Create the passkey",
        content: "Tap \"Create a passkey\" or \"Add a passkey.\" Your phone or computer will ask you to confirm with Face ID, Touch ID, your fingerprint, or your screen lock code. Once confirmed, the passkey is saved.",
      },
      {
        title: "Sign in with your passkey next time",
        content: "The next time you sign in, choose the passkey option instead of typing a password. Confirm with your face, fingerprint, or screen lock, and you're in — no typing required.",
        tip: "Quick Tip: Passkeys saved on an iPhone or Android phone can often be used on a nearby computer too, by scanning a QR code with your phone camera.",
      },
      {
        title: "Keep your password as a backup",
        content: "Most services let you keep your existing password active even after adding a passkey, in case you're signing in from a device that doesn't support passkeys. You do not need to remove your password.",
      },
    ],
  },
  {
    slug: "spotting-ai-voice-and-chatbot-scams",
    title: "How to Spot AI Voice Cloning and Chatbot Scams",
    excerpt: "Scammers now use AI to clone a loved one's voice or run realistic fake chat conversations. Learn the warning signs and how to verify before you act.",
    category: "safety-guides",
    tags: ["ai scams", "voice cloning", "scam prevention", "family emergency scam"],
    readTime: "7 min",
    thumbnailEmoji: "🤖",
    publishedAt: "2026-07-13",
    lastVerifiedAt: "2026-07-13",
    difficulty: "Beginner",
    body: "Scammers can now use artificial intelligence (AI) to clone a person's voice from just a few seconds of audio pulled from a video posted online, then use that cloned voice in a phone call. This is often used in the \"grandparent scam\" or \"family emergency scam,\" where a caller sounds exactly like a grandchild or relative saying they're in trouble and need money sent immediately, usually through gift cards, wire transfers, or cryptocurrency.\n\nAI is also used to run realistic fake text or chat conversations — for example, a message that appears to be from a bank, delivery service, or romantic interest, but is actually an AI system designed to build trust and eventually ask for money or personal information.\n\nThe defense against both is the same: slow down, and verify through a separate, trusted channel before taking any action involving money or personal information. Real emergencies can withstand a two-minute phone call to double-check. Source: ftc.gov/consumer-alerts.",
    steps: [
      {
        title: "Hang up and call back on a known number",
        content: "If you get an urgent call from someone claiming to be a family member in trouble, hang up and call that person back using the phone number already saved in your contacts — never a number the caller gives you.",
        tip: "A cloned voice can sound completely real, including tone and speech patterns. Don't trust your ears alone — verify independently every time.",
      },
      {
        title: "Set up a family \"safe word\"",
        content: "Agree on a simple word or phrase with close family members that only you would know, to use if someone ever calls claiming to be them in an emergency. If the caller can't provide it, treat the call as a scam.",
      },
      {
        title: "Be suspicious of urgency and secrecy",
        content: "Scammers, whether human or AI-driven, pressure you to act fast and keep it secret from other family members. A real emergency involving a loved one is something you're allowed to pause on, verify, and discuss with others.",
      },
      {
        title: "Never send gift cards, wire transfers, or crypto to resolve an \"emergency\"",
        content: "No legitimate emergency — legal, medical, or otherwise — is ever resolved by buying gift cards and reading the codes over the phone. This request is one of the clearest signs of a scam.",
        tip: "Quick Tip: If you're ever unsure whether a call or message is real, it's always okay to say \"I'll call you back\" and hang up first.",
      },
    ],
  },
  {
    slug: "how-to-sign-documents-electronically-on-your-phone",
    title: "How to Sign Documents Electronically on Your Phone or Computer",
    excerpt: "Skip the printer and pen — here's how to add your signature to a PDF using tools already built into your iPhone, Android phone, or computer.",
    category: "tips-tricks",
    tags: ["e-signature", "pdf", "documents", "iphone", "android"],
    readTime: "5 min",
    thumbnailEmoji: "✍️",
    publishedAt: "2026-07-13",
    lastVerifiedAt: "2026-07-13",
    difficulty: "Beginner",
    body: "Many documents — lease agreements, medical forms, contractor estimates — now arrive as a PDF file that needs a signature. You do not need to print it, sign it by hand, and scan it back in. Both iPhones and Android phones have a free, built-in way to add a typed or drawn signature directly to a PDF, and Windows and Mac computers offer similar built-in tools.\n\nThis works by opening the PDF in your phone's Files or Photos app (or Preview on a Mac, or Microsoft Edge on Windows), which include a markup tool for adding text, your signature, and dates directly onto the document. Once signed, you can email the file back or upload it wherever it's needed.\n\nIf a company sends you a link to a dedicated e-signature service like DocuSign or Adobe Sign, those work similarly — you tap where they indicate, and the service creates a signature for you to place. Source: support.apple.com/guide/iphone/markup-pdfs.",
    steps: [
      {
        title: "Open the PDF (iPhone)",
        content: "Open the PDF in the Files app or as an email attachment, then tap the Markup icon (it looks like a pen tip inside a circle) at the top or bottom of the screen.",
      },
      {
        title: "Add your signature (iPhone)",
        content: "Tap the \"+\" button, then \"Signature.\" If this is your first time, tap \"Add or Remove Signature\" and use your finger to draw your signature on the screen. Tap \"Done,\" then drag your saved signature onto the document.",
        tip: "Your signature is saved on your phone so you only need to draw it once — after that, you can reuse it for future documents.",
      },
      {
        title: "Add your signature (Android)",
        content: "Open the PDF in Google Drive or the Files app, tap the pencil or Markup icon, then look for a signature or \"Fill & Sign\" option. Draw your signature with your finger and place it on the document.",
      },
      {
        title: "Save and send the signed document",
        content: "Once your signature is placed, tap Done or Save. You can then attach the signed PDF to an email, or upload it to whatever website or portal requested it.",
        tip: "Quick Tip: Always keep a copy of any signed document for your own records before sending it off.",
      },
    ],
  },
  {
    slug: "instagram-family-center-parental-supervision-setup",
    title: "How to Set Up Instagram's Family Center to Supervise a Grandchild's Account",
    excerpt: "Instagram's Family Center lets a parent or guardian see screen time, followers, and messaging settings for a teen's account. Here's how to set it up.",
    category: "app-guides",
    tags: ["instagram", "family center", "parental controls", "grandchildren", "social media safety"],
    readTime: "6 min",
    thumbnailEmoji: "👨‍👩‍👧",
    publishedAt: "2026-07-13",
    lastVerifiedAt: "2026-07-13",
    difficulty: "Beginner",
    body: "If you're a grandparent or guardian helping look after a grandchild's online safety, Instagram's Family Center gives a parent or guardian visibility into a teen's account without needing their password. It shows how much time they spend on the app, who they follow and who follows them, and lets a supervising adult set daily time limits and control who can message the teen.\n\nSetting this up requires both the adult's Instagram account and the teen's account, and the teen must accept the supervision invitation — this is a partnership tool, not a way to secretly monitor someone. It's designed for parents and guardians of teens; if you're helping care for a grandchild, coordinate with their parent about who should be the supervising account.\n\nInstagram also automatically applies extra protections to any account registered as belonging to a teenager, such as switching messaging and content settings to more restrictive defaults. Source: help.instagram.com/family-center.",
    steps: [
      {
        title: "Open Family Center",
        content: "On the supervising adult's Instagram account, go to your profile, tap the menu (three lines), then tap \"Family Center.\"",
      },
      {
        title: "Send a supervision invite",
        content: "Tap \"Get Started,\" then \"Add a Teen.\" You can either enter the teen's Instagram username to send them an invite, or generate a QR code for them to scan on their own phone if they're nearby.",
        tip: "The teen has to accept the invite from their own account — supervision cannot be turned on without their knowledge.",
      },
      {
        title: "Review what you can see and control",
        content: "Once the teen accepts, you'll be able to see their time spent on Instagram, set daily time limits, view who they follow and who follows them, and choose who is allowed to message them.",
      },
      {
        title: "Talk with the teen and their parent about the settings",
        content: "Family Center works best as an open conversation rather than a secret. Talk with the teen and their parent about which settings make sense, and check in on the Family Center dashboard together periodically.",
        tip: "Quick Tip: Instagram requires people to be at least 13 to have an account, and applies additional teen protections automatically for anyone under 18.",
      },
    ],
  },
];
