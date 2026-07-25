// guides-batch-323 — 5 guides for the 90-day compound growth sprint (Day 65, 2026-07-15)
// Topics: digital estate planning, browser extension safety, Zelle/Venmo refund policy update,
// Wi-Fi 7 routers, Google Family Link screen time for grandkids
// Sourced from official Apple/Google/FTC/Wi-Fi Alliance/CFPB support pages

import type { Guide } from "./guides";

export const guidesBatch323: Guide[] = [
  {
    slug: "digital-estate-planning-passwords-for-loved-ones",
    title: "Digital Estate Planning: Sharing Passwords and Accounts With Loved Ones",
    excerpt: "A plain-language guide to organizing your passwords, accounts, and digital assets so your family can access them if something happens to you.",
    category: "safety-guides",
    tags: ["estate planning", "passwords", "family", "legacy contact"],
    readTime: "7 min",
    thumbnailEmoji: "📋",
    publishedAt: "2026-07-15",
    lastVerifiedAt: "2026-07-15",
    difficulty: "Beginner",
    body: "Digital estate planning means organizing your online accounts, passwords, and digital assets so a trusted family member or executor can access them if you become unable to manage them yourself, or after you pass away. Without this planning, loved ones can be locked out of email, banking, photos, and social media accounts for months, or permanently.\n\nStart with a simple written list (kept somewhere secure, not emailed or texted) of your major accounts: email, banking, investment, social media, and any subscription services with a balance or stored payment method. You do not need to write down every password on this list — instead, note which password manager you use, since most password managers have a feature to name an emergency contact or legacy contact who can request access.\n\nApple, Google, and most password managers now offer a formal \"Legacy Contact\" or \"Inactive Account Manager\" feature built for exactly this purpose, so you don't have to hand over your everyday password to anyone in advance. Source: support.apple.com/en-us/102631 (Apple Legacy Contact) and myaccount.google.com/inactive (Google Inactive Account Manager).",
    steps: [
      {
        title: "Set up Apple's Legacy Contact (iPhone/iPad/Mac)",
        content: "Go to Settings > [your name] > Sign-in & Security > Legacy Contact. Add a trusted person's name. Apple gives you a physical or digital access key to share with them — they'll need this key plus a death certificate to request account access later.",
        tip: "Quick Tip: Print the access key and store it with your other important papers, not just in your phone.",
      },
      {
        title: "Set up Google's Inactive Account Manager",
        content: "Visit myaccount.google.com/inactive while signed in. Choose how many months of inactivity should trigger the process (for example, 12 months), then add up to 10 trusted contacts who will be notified and given access to specific data you choose, like Gmail or Google Photos.",
      },
      {
        title: "Note your password manager and its emergency access feature",
        content: "If you use a password manager (like the one built into your iPhone, Android phone, or a separate app), write down which one you use. Many offer an \"emergency access\" setting where a trusted contact can request your vault after a waiting period you control.",
      },
      {
        title: "Store the master list somewhere physical and secure",
        content: "Keep your written list of accounts and instructions in a fireproof safe, safe deposit box, or with your will — not in an email or a note app that dies with your phone. Tell one trusted person where to find it.",
        tip: "Never write actual passwords next to account names on a list that isn't in a locked safe.",
      },
    ],
  },
  {
    slug: "are-browser-extensions-safe-how-to-check",
    title: "Are Browser Extensions Safe? How to Check Before You Install One",
    excerpt: "Browser extensions can be helpful or risky. Here's how to tell if one is safe before you add it to Chrome, Edge, or Safari.",
    category: "safety-guides",
    tags: ["browser extensions", "chrome", "safari", "malware"],
    readTime: "6 min",
    thumbnailEmoji: "🧩",
    publishedAt: "2026-07-15",
    lastVerifiedAt: "2026-07-15",
    difficulty: "Beginner",
    body: "A browser extension (sometimes called an add-on or plug-in) is a small program that adds features to your web browser, like an ad blocker, a coupon finder, or a grammar checker. Most are safe, but because extensions can see and change what you do in your browser, a malicious one can steal passwords, redirect searches, or track everything you type.\n\nThe biggest warning signs are: an extension asking for far more permission than it needs (a simple calculator extension asking to \"read and change all your data on every website\" is a red flag), very few reviews or downloads, no clear developer name, or reviews mentioning ads that suddenly appear everywhere. Extensions from well-known companies (Google, Microsoft, LastPass, Grammarly) are generally trustworthy; extensions from unknown developers with vague descriptions deserve extra scrutiny.\n\nIt's also good practice to periodically review the extensions already installed in your browser and remove ones you no longer use, since old, abandoned extensions can be bought by bad actors and updated to include tracking or malware. Source: support.google.com/chrome/answer/2664769 (Chrome Web Store safety) and support.apple.com/guide/safari/websites-extensions-ibrw1039/mac (Safari extensions).",
    steps: [
      {
        title: "Check the developer name and reviews before installing",
        content: "On the extension's store page, look for a verified developer name (not just \"Developer\") and read a handful of recent reviews. Be cautious of extensions with very few reviews or a flood of generic 5-star reviews posted the same week.",
      },
      {
        title: "Read what permissions it's asking for",
        content: "Before installing, your browser will show what the extension can access — for example, \"Read and change all your data on the websites you visit.\" Ask yourself if that level of access makes sense for what the extension claims to do.",
        tip: "Quick Tip: A simple tool like a screenshot capture extension needing access to every website you visit is worth a second look.",
      },
      {
        title: "Review your currently installed extensions",
        content: "In Chrome, go to the three-dot menu > Extensions > Manage Extensions. In Safari, go to Safari > Settings > Extensions. Remove anything you don't recognize or no longer use.",
      },
      {
        title: "Keep extensions updated or remove them",
        content: "Most browsers update extensions automatically, but if you see one flagged as outdated or no longer maintained by its developer, it's safer to remove it than to keep using it.",
      },
    ],
  },
  {
    slug: "zelle-venmo-scam-refund-rules-2026",
    title: "Zelle and Venmo Scam Refunds: What the Rules Actually Say in 2026",
    excerpt: "If you were tricked into sending money on Zelle or Venmo, here's what banks are and aren't required to refund, and how to report it.",
    category: "safety-guides",
    tags: ["zelle", "venmo", "scams", "refunds", "banking"],
    readTime: "7 min",
    thumbnailEmoji: "💸",
    publishedAt: "2026-07-15",
    lastVerifiedAt: "2026-07-15",
    difficulty: "Beginner",
    body: "Zelle, Venmo, and similar payment apps move money almost instantly, which makes them a favorite tool for scammers — and it also means refunds are not automatic or guaranteed the way a stolen credit card charge often is. Understanding the difference between \"fraud\" and \"being tricked into sending money\" matters, because banks handle these two situations differently.\n\nIf someone got into your account without your permission and sent money without your knowledge, that is unauthorized fraud, and your bank is generally required to investigate and refund you under federal rules (Regulation E). But if a scammer tricked you into willingly sending the money yourself — for example, a fake grandchild emergency, a fake prize fee, or a romance scam — that is legally treated as an authorized payment, and refunds are much less guaranteed, though some banks and Zelle's network have started voluntarily refunding certain scam categories (like impersonation scams) since 2023.\n\nEither way, report it immediately. Speed matters: the faster you report a scam payment, the better the chance your bank or the receiving bank can freeze or reverse it before the scammer withdraws the funds. Source: consumerfinance.gov/consumer-tools/fraud (CFPB) and ftc.gov/scams.",
    steps: [
      {
        title: "Report it to your bank immediately, by phone",
        content: "Call the number on the back of your card or your bank's official fraud line right away. Explain clearly whether the payment was unauthorized (someone else sent it) or whether you were tricked into sending it yourself — this affects which protections apply.",
        tip: "Quick Tip: Do this within minutes or hours if possible. Refund odds drop sharply after 24 hours.",
      },
      {
        title: "Report it inside the Zelle or Venmo app too",
        content: "Both apps have a way to report a transaction as fraudulent directly from your transaction history. This creates a record and may trigger their own scam-recovery process separate from your bank.",
      },
      {
        title: "File a report with the FTC and your local police",
        content: "Go to reportfraud.ftc.gov to file an official complaint, and file a police report as well — some banks require a police report number to process a scam refund claim.",
      },
      {
        title: "Know that the outcome isn't guaranteed",
        content: "Even with a fast report, refunds for authorized-but-tricked payments are decided case by case. Don't blame yourself for the scam, but do act fast and keep every confirmation number and screenshot from your reports.",
      },
    ],
  },
  {
    slug: "wifi-7-routers-do-you-need-one",
    title: "Wi-Fi 7 Routers: What They Are and Whether You Need One",
    excerpt: "Wi-Fi 7 is the newest home internet standard. Here's what it actually improves and how to know if upgrading your router is worth it.",
    category: "essential-skills",
    tags: ["wifi", "router", "internet", "home network"],
    readTime: "6 min",
    thumbnailEmoji: "📶",
    publishedAt: "2026-07-15",
    lastVerifiedAt: "2026-07-15",
    difficulty: "Beginner",
    body: "Wi-Fi 7 is the newest generation of home wireless internet technology, following Wi-Fi 6 and 6E. It promises faster speeds, less interference from neighboring networks, and better performance when many devices are connected at once — think smart TVs, phones, tablets, doorbell cameras, and smart speakers all online at the same time.\n\nFor most households, Wi-Fi 7 is a nice-to-have rather than a must-have right now. You'll only see its full benefit if you also have very fast internet service (500+ Mbps) and devices that themselves support Wi-Fi 7, which as of 2026 is mainly newer flagship phones, laptops, and streaming devices. If your current router is more than 5 years old, works slowly, or drops connections often, upgrading is worthwhile regardless of which Wi-Fi generation you choose — but you don't need to chase the newest standard just because it exists.\n\nA good rule of thumb: if your internet plan is under 300 Mbps, or most of your devices are more than 3 years old, a solid Wi-Fi 6 router will perform just as well in daily use and typically costs less than a Wi-Fi 7 model. Source: wi-fi.org/discover-wi-fi/wi-fi-certified-7.",
    steps: [
      {
        title: "Check your internet speed plan first",
        content: "Log in to your internet provider's app or website to see your plan speed. If you're under 300 Mbps, a new router of any generation won't make your internet faster than what you're paying for.",
      },
      {
        title: "Check whether your devices actually support Wi-Fi 7",
        content: "Look up your phone, laptop, or streaming device model plus \"Wi-Fi 7 support\" to see if it can use the new standard. Most devices from before 2024 do not support it.",
        tip: "Quick Tip: Even without Wi-Fi 7 devices, a new router still often improves range and stability — just not the top headline speed.",
      },
      {
        title: "Consider a mesh system if you have dead zones",
        content: "If certain rooms have weak signal, a mesh Wi-Fi system (multiple small units placed around your home) usually solves this better than any single router, regardless of Wi-Fi generation.",
      },
      {
        title: "Decide based on age, not hype",
        content: "If your router is 5+ years old or restarts/drops connection often, replace it. Choose Wi-Fi 6 for the best value, or Wi-Fi 7 only if you have gigabit+ internet and newer devices to take advantage of it.",
      },
    ],
  },
  {
    slug: "google-family-link-screen-time-for-grandkids",
    title: "Google Family Link: Setting Screen Time Limits for Grandkids",
    excerpt: "A step-by-step guide to using Google Family Link to set screen time limits and app controls on a grandchild's Android device.",
    category: "app-guides",
    tags: ["family link", "screen time", "parental controls", "android", "grandkids"],
    readTime: "6 min",
    thumbnailEmoji: "👨‍👩‍👧",
    publishedAt: "2026-07-15",
    lastVerifiedAt: "2026-07-15",
    difficulty: "Beginner",
    body: "Google Family Link is a free app that lets a parent or guardian manage a child's Android phone or tablet — including setting daily screen time limits, approving app downloads, and seeing which apps are used most. If you're a grandparent helping set up or manage a grandchild's device (with the parent's permission and involvement), Family Link is the standard tool Google provides for this.\n\nFamily Link requires two things: the Family Link app installed on the parent's (or supervising adult's) phone, and the child's device signed in with a Google Account created specifically as a supervised child account. This setup should always be done with the child's parent, since it links to their family Google account structure, not an independent grandparent account.\n\nOnce set up, you can set a daily time limit, choose a bedtime when the device locks automatically, approve or block individual apps, and see a weekly activity report showing how much time was spent in each app. Source: support.google.com/families/answer/7103340.",
    steps: [
      {
        title: "Install Family Link on the supervising adult's phone",
        content: "Download \"Google Family Link for Parents\" from the Play Store or App Store on the parent's or guardian's phone. Sign in with the adult's own Google Account.",
      },
      {
        title: "Set up or link the child's supervised account",
        content: "In the app, choose to add a child and follow the prompts to either create a new supervised Google Account for them or link an existing one, then sign the child's device into that account.",
        tip: "Quick Tip: Do this step together with the child's parent — Family Link changes affect the whole family's Google setup, not just one device.",
      },
      {
        title: "Set daily screen time limits and bedtime",
        content: "In Family Link, tap the child's name, then \"Screen time\" to set a daily limit, or \"Bedtime\" to choose hours when the device locks automatically.",
      },
      {
        title: "Review app approvals and weekly activity",
        content: "Under \"Controls,\" you can require approval before new apps are downloaded. Under the main dashboard, you'll see a weekly report of app usage time, which is a good way to check in without hovering.",
      },
    ],
  },
];
