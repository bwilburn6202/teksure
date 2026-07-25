// guides-batch-320 — 6 guides for the 90-day compound growth sprint (Day 61, 2026-07-11)
// Topics: scam defense, government/civic accounts, accessibility, smart home basics
// Sourced from official FTC/IRS/Apple/Google/AARP support pages

import type { Guide } from "./guides";

export const guidesBatch320: Guide[] = [
  {
    slug: "irs-identity-protection-pin-setup",
    title: "How to Get an IRS Identity Protection PIN",
    excerpt: "Set up a free 6-digit IP PIN from the IRS so nobody else can file a tax return using your Social Security number.",
    category: "government-civic",
    tags: ["irs", "taxes", "identity protection", "scam prevention", "government"],
    readTime: "7 min",
    thumbnailEmoji: "🔐",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Beginner",
    body: "Tax return fraud happens when someone files a fake tax return using your name and Social Security number, hoping to collect your refund before you file your real one. The IRS's free Identity Protection PIN (IP PIN) program stops this cold: once you have one, the IRS will reject any tax return filed under your Social Security number unless it includes your current 6-digit PIN, which only you know and which changes every year.\n\nGetting an IP PIN is one of the single most effective free steps anyone can take to protect themselves from tax identity theft, and the IRS recommends it for everyone, not just people who have already been victimized. It takes about ten minutes to set up online through the IRS's official identity verification system, and after the first year it's easy to retrieve a new PIN each January.\n\nBeware of tax season phone calls, texts, or emails claiming to be from the IRS asking you to \"verify\" your PIN or Social Security number — the real IRS never initiates contact this way and never asks for your PIN over the phone. Source: irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin.",
    steps: [
      {
        title: "Go to the official IRS site",
        content: "Type irs.gov/ippin directly into your browser's address bar rather than searching for it, since scam sites sometimes buy search ads that look like the real thing. The genuine IRS website always ends in .gov.",
        warning: "Never give your Social Security number or tax information to a site that isn't irs.gov, and never respond to a text or email claiming to be the IRS asking about your PIN.",
      },
      {
        title: "Select \"Get an IP PIN\"",
        content: "Click the \"Get an IP PIN\" tool. You'll need to sign in or create an ID.me account, the same identity verification service used by several other government agencies, if you don't already have one.",
      },
      {
        title: "Verify your identity",
        content: "You'll need a photo ID (driver's license or passport) and your Social Security number on hand. ID.me will ask you to take a photo of your ID and sometimes a selfie to confirm it's really you.",
        tip: "If online verification doesn't work, you can also get an IP PIN by filing Form 15227 by mail or by making an appointment at a local IRS Taxpayer Assistance Center.",
      },
      {
        title: "Retrieve your PIN",
        content: "Once verified, your 6-digit IP PIN appears on screen. Write it down and store it somewhere safe — you'll need to enter it every time you or your tax preparer files a federal return.",
      },
      {
        title: "Get a new PIN each January",
        content: "A new IP PIN is generated automatically every year in early-to-mid January. Log back into the same IRS tool then to retrieve the new number before you file.",
        tip: "If you use a paid tax preparer, give them your current PIN directly — never over email, since email accounts can be compromised.",
      },
    ],
  },
  {
    slug: "spotting-fake-tech-support-pop-ups",
    title: "How to Recognize a Fake \"Your Computer Is Infected\" Pop-Up",
    excerpt: "Learn the warning signs of fake virus alerts designed to scare you into calling a scam phone number, and what to do instead.",
    category: "safety-guides",
    tags: ["scam", "pop-up", "tech support scam", "computer safety", "phishing"],
    readTime: "6 min",
    thumbnailEmoji: "🚨",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Beginner",
    body: "One of the most common scams aimed at computer users is a pop-up window that suddenly fills the screen with flashing warnings, sometimes accompanied by a loud alarm sound, claiming your computer is infected with viruses and instructing you to call a phone number immediately. These pop-ups are fake — no legitimate antivirus company, and certainly not Microsoft, Apple, or your internet provider, detects a virus and tells you to call a phone number to fix it.\n\nThe goal of the scam is to panic you into calling. If you call, a scammer posing as \"tech support\" will try to get remote access to your computer, then either charge you hundreds of dollars for fake repairs, install actual malware, or steal banking information while pretending to \"fix\" the problem. The pop-up itself, no matter how alarming it looks, cannot actually damage your computer — closing it safely is always the right first move.\n\nThese scam pop-ups typically come from a website you visited, not an actual infection, which is why closing the browser (not just the pop-up) usually makes the alarm disappear completely. Source: consumer.ftc.gov/articles/tech-support-scams.",
    steps: [
      {
        title: "Do not call any phone number shown on the pop-up",
        content: "No matter how official it looks — with company logos, official-sounding names, or a countdown timer — a phone number on a browser pop-up is never a legitimate tech support line. Real security warnings from your actual antivirus software appear in a small notification from your system tray, not a full-screen browser pop-up.",
        warning: "Never call the number, and never let anyone who calls you claiming to be from \"Microsoft\" or \"Windows Support\" remotely access your computer. Microsoft does not make unsolicited support calls.",
      },
      {
        title: "Close the browser without clicking anything in the pop-up",
        content: "On a Windows computer, press Alt+F4 to force-close the browser window entirely rather than clicking any button inside the pop-up, since some fake \"Close\" or \"X\" buttons actually trigger a download. On a Mac, use Command+Q, or force-quit through the Apple menu if the browser won't respond.",
        tip: "If the browser reopens the same pop-up automatically, hold Shift while relaunching it (on most browsers) to prevent it from restoring the previous tabs.",
      },
      {
        title: "Run a scan with your real, trusted antivirus software",
        content: "After closing the browser, open whatever legitimate antivirus software you already have installed (Windows Security/Defender is built into every current Windows PC) and run a full scan just to confirm everything is clean. This step is optional reassurance, not usually necessary, since the pop-up itself didn't infect anything just by appearing.",
      },
      {
        title: "Clear your browser history and cache if the pop-ups keep returning",
        content: "In your browser's settings, clear browsing data for \"cached images and files\" and recent history. This removes the malicious ad or script that was triggering the pop-up in the first place.",
      },
      {
        title: "Report it",
        content: "If you did call the number and gave remote access, payment information, or a password, contact your bank immediately to watch for unusual charges, change any passwords you may have shared, and report the scam at reportfraud.ftc.gov.",
      },
    ],
  },
  {
    slug: "apple-google-two-factor-recovery-codes",
    title: "How to Save Backup Codes So You're Never Locked Out of Your Account",
    excerpt: "Generate and safely store two-factor authentication backup codes for your Apple ID or Google account before you lose your phone.",
    category: "safety-guides",
    tags: ["two-factor authentication", "backup codes", "account recovery", "apple id", "google account"],
    readTime: "6 min",
    thumbnailEmoji: "🔑",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Beginner",
    body: "Two-factor authentication (sending a code to your phone when you sign in) is one of the best ways to keep your accounts safe, but it creates a new risk: if you lose your phone, break it, or upgrade to a new one before transferring everything correctly, you can find yourself locked out of your own Apple ID or Google account with no way to receive the code. Backup codes solve this. They're a set of one-time-use codes you generate in advance and store somewhere safe (printed on paper, or in a password manager) that let you sign in even without your phone.\n\nMost people never think about backup codes until the moment they're locked out — at which point account recovery can take days and sometimes requires proving your identity with government ID. Setting this up ahead of time, while everything is working normally, takes about five minutes and can save a genuinely stressful situation later.\n\nThis is worth doing for any account where you've turned on two-factor authentication, but it matters most for your primary email and Apple ID or Google account, since those are usually the accounts used to reset every other password you have. Source: support.apple.com and support.google.com.",
    steps: [
      {
        title: "For Apple ID: find your recovery options",
        content: "On an iPhone, go to Settings, tap your name at the top, then \"Sign-In & Security.\" Here you'll find both \"Account Recovery Contact\" (a trusted person who can help you regain access) and the option to view your recovery key.",
      },
      {
        title: "Set up an Apple Recovery Contact",
        content: "Tap \"Account Recovery Contact\" and choose a trusted family member or friend who also has an iPhone. If you ever lose access to your Apple ID, they can generate a recovery code for you from their own device, without ever seeing your password.",
        tip: "Choose someone who lives nearby or who you talk to often — you'll need to be in contact with them, at least by phone, when recovery is actually needed.",
      },
      {
        title: "For Google: generate backup codes",
        content: "On a computer, go to myaccount.google.com, select \"Security,\" then \"2-Step Verification.\" Scroll to \"Backup codes\" and select \"Get backup codes.\" Google generates 10 codes, each usable once.",
      },
      {
        title: "Print or write down the codes — don't just leave them on screen",
        content: "Print the list or write it by hand, then store it somewhere secure like a locked drawer or with other important documents — not saved as a photo on the same phone you're protecting against losing.",
        warning: "Treat backup codes like spare keys to your house: anyone who finds them can get into your account, so don't leave them somewhere easily found, like taped to your computer monitor.",
      },
      {
        title: "Regenerate codes if you run low",
        content: "Each Google backup code works only once. When you're down to your last couple, go back to the same 2-Step Verification page and generate a fresh set — the old ones are automatically invalidated.",
      },
    ],
  },
  {
    slug: "smart-plug-setup-for-lamps-and-holiday-lights",
    title: "How to Set Up a Smart Plug for Any Lamp or Appliance",
    excerpt: "Turn any regular lamp, fan, or string of holiday lights into a voice-controlled or app-controlled device with an inexpensive smart plug.",
    category: "smart-home",
    tags: ["smart home", "smart plug", "alexa", "google home", "setup"],
    readTime: "6 min",
    thumbnailEmoji: "🔌",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Beginner",
    body: "A smart plug is a small adapter that plugs into a regular wall outlet, and then whatever you plug into it — a lamp, a fan, a space heater, holiday lights — can be turned on and off from a phone app or with a voice command like \"Alexa, turn on the living room lamp,\" without needing to replace the lamp itself or run any new wiring. It's one of the least expensive and easiest ways to try out smart home features, usually costing under $15 for a basic model.\n\nSmart plugs are especially useful for people with mobility limitations, since a lamp across the room can be turned on from a couch or bed, and for anyone who wants to set a schedule — for example, having porch lights turn on automatically at sunset, or a fan turn off automatically after an hour.\n\nMost smart plugs made by well-known brands (Amazon, Kasa, Wyze) work with both Amazon Alexa and Google Home, so it doesn't usually matter which voice assistant you already use at home. Source: manufacturer support pages (Amazon, Kasa/TP-Link, Wyze).",
    steps: [
      {
        title: "Plug in the smart plug and download its app",
        content: "Plug the smart plug directly into a wall outlet (not a power strip, for the best connection). Then download the manufacturer's app from the App Store or Google Play — the box it came in will name the exact app, such as \"Amazon Alexa,\" \"Kasa Smart,\" or \"Wyze.\"",
      },
      {
        title: "Create an account and add the device",
        content: "Open the app, create a free account if you don't already have one, and choose \"Add Device\" or the \"+\" button. Select the type of device (plug) from the list.",
      },
      {
        title: "Connect the plug to your home Wi-Fi",
        content: "Most smart plugs blink a light to show they're ready to pair. The app will walk you through connecting your phone briefly to the plug's own signal, then handing it your home Wi-Fi network name and password so it can connect permanently.",
        tip: "Smart plugs generally only work on the 2.4GHz Wi-Fi band, not the faster 5GHz band. If setup fails, check your router settings for a way to see or separate the 2.4GHz network name.",
      },
      {
        title: "Name the plug something you'll actually say out loud",
        content: "Give it a clear name like \"Living Room Lamp\" or \"Porch Lights\" rather than the default name, since this is the phrase you'll use with a voice assistant (\"Alexa, turn off Porch Lights\").",
      },
      {
        title: "Link it to Alexa or Google Home for voice control",
        content: "If you use an Amazon Echo or Google Nest speaker, open that assistant's app, go to \"Devices\" or \"Skills,\" and link the smart plug's account (for example, searching for and enabling the \"Kasa\" skill in Alexa). Once linked, the device appears automatically in the voice assistant's device list.",
      },
      {
        title: "Set a schedule if you'd like it to run automatically",
        content: "In the smart plug's own app, look for a \"Schedule\" or \"Timer\" option to have it turn on or off at specific times each day — handy for holiday lights or a lamp that should turn on before you get home in the evening.",
      },
    ],
  },
  {
    slug: "medicare-plan-finder-annual-enrollment",
    title: "How to Compare Medicare Plans Online During Open Enrollment",
    excerpt: "Use the official Medicare Plan Finder at medicare.gov to compare drug and health plan costs before the October 15 to December 7 enrollment window.",
    category: "government-civic",
    tags: ["medicare", "open enrollment", "healthcare", "government", "insurance"],
    readTime: "8 min",
    thumbnailEmoji: "🏥",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Intermediate",
    body: "Every year between October 15 and December 7, Medicare's open enrollment period lets you switch Medicare Advantage plans, switch between Original Medicare and Medicare Advantage, or change your Part D prescription drug plan for the coming year. Plans and their costs change annually, so a plan that was the cheapest option last year is not guaranteed to still be the best fit — the official Medicare Plan Finder tool at medicare.gov is the government's free, unbiased way to compare every available plan in your area side by side.\n\nThe tool lets you enter your specific medications so it can calculate your actual expected yearly cost under each plan, rather than just comparing monthly premiums, which often tell an incomplete story. A plan with a lower premium can sometimes cost more overall if it doesn't cover a medication you take regularly.\n\nBe cautious of unsolicited phone calls or door-to-door visitors during this period claiming to represent Medicare directly — Medicare itself does not call or visit uninvited to sell you a plan. Licensed insurance agents can help, but always verify a caller's identity independently before sharing any personal information. Source: medicare.gov/plan-compare.",
    steps: [
      {
        title: "Go to the official Plan Finder",
        content: "Type medicare.gov/plan-compare directly into your browser. You can search either as a guest or by logging into your existing Medicare account for a comparison that's pre-filled with your current coverage.",
      },
      {
        title: "Enter your ZIP code and current coverage",
        content: "The tool asks for your ZIP code first, since available plans vary by county, then asks whether you currently have Original Medicare, a Medicare Advantage plan, or a standalone Part D drug plan.",
      },
      {
        title: "List every medication you take",
        content: "This is the most important step for an accurate comparison. Enter each prescription drug's name, dosage, and how often you take it. The tool uses this to calculate your actual estimated total yearly cost under each available plan, not just the premium.",
        tip: "Have your prescription bottles or a pharmacy printout on hand while doing this so you get dosages and names exactly right.",
      },
      {
        title: "Add your preferred pharmacy",
        content: "Some drug plans charge less if you use certain pharmacies (called \"preferred\" pharmacies). Entering your usual pharmacy, or a few nearby options, lets the tool show pharmacy-specific pricing.",
      },
      {
        title: "Compare plans by estimated total yearly cost",
        content: "The results page sorts plans by estimated total cost, which combines premiums, deductibles, and your specific drug costs. Look at this total number rather than just the monthly premium shown at the top.",
        warning: "A plan can look attractive with a $0 premium but still cost more overall if your medications fall into an expensive coverage tier — always check the total estimated yearly cost.",
      },
      {
        title: "Get free help if you want a second opinion",
        content: "Every state has a free State Health Insurance Assistance Program (SHIP) with counselors who help compare plans at no cost and with no sales incentive. Search \"SHIP\" plus your state name, or call 1-800-MEDICARE to be connected.",
      },
    ],
  },
  {
    slug: "how-to-scan-documents-with-your-phone-camera",
    title: "How to Scan Documents Using Your Phone's Camera",
    excerpt: "Turn your iPhone or Android phone into a document scanner to email forms, save receipts, or send paperwork without a scanner or printer.",
    category: "phone-guides",
    tags: ["scanning", "documents", "iphone", "android", "notes app"],
    readTime: "5 min",
    thumbnailEmoji: "📄",
    publishedAt: "2026-07-11",
    lastVerifiedAt: "2026-07-11",
    difficulty: "Beginner",
    body: "Both iPhones and Android phones have a built-in document scanner that turns a regular photo of a piece of paper into a clean, straightened, scanned-looking PDF or image — useful for emailing a signed form back to a doctor's office, saving a receipt for taxes, or sending paperwork to a family member, all without owning a separate scanner or going to a print shop.\n\nThe built-in scanner automatically detects the edges of the paper, crops out the background (like the table it's sitting on), and adjusts the lighting and contrast so the text is easy to read, similar to what a real scanner produces. It works noticeably better than just taking a regular photo of a document, which often looks slanted, includes background clutter, or has glare.\n\nThis feature has been part of both the iPhone's Notes app and Android's Google Drive app for several years, so it works on virtually any phone still receiving updates. Source: support.apple.com and support.google.com.",
    steps: [
      {
        title: "iPhone: open the Notes app",
        content: "Open the Notes app and either start a new note or open an existing one. Tap the camera icon in the toolbar above the keyboard, then choose \"Scan Documents.\"",
      },
      {
        title: "iPhone: line up the document and let it auto-capture",
        content: "Hold your phone over the document with good lighting. A yellow outline will appear around the detected edges, and the phone usually captures the photo automatically once it's steady — or tap the white shutter button to capture manually.",
        tip: "If the auto-detected edges are wrong, drag the corner handles after capturing to adjust them before saving.",
      },
      {
        title: "iPhone: save and share",
        content: "After scanning all the pages you need (tap the shutter again for each additional page), tap \"Save.\" The scan is saved right in your note as a PDF, which you can then tap Share to email, message, or save to Files.",
      },
      {
        title: "Android: open Google Drive",
        content: "Open the Google Drive app, tap the \"+\" button, and choose \"Scan.\" If you don't see this option, make sure the Google Drive app is updated to its current version from the Play Store.",
      },
      {
        title: "Android: capture and adjust",
        content: "Take the photo of your document. Google Drive will show a preview with automatically detected edges — tap the crop icon to manually adjust the corners, or the filter icon to switch between color, black-and-white, or grayscale scanning.",
      },
      {
        title: "Android: save and export",
        content: "Tap the checkmark to save the scan as a PDF directly in your Google Drive, where it can be opened on any device, shared as a link, or downloaded and attached to an email.",
      },
    ],
  },
];
