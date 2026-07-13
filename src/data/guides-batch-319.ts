// guides-batch-319 — 6 guides for the 90-day compound growth sprint (Day 58, 2026-07-08)
// Topics pulled from queued sprint backlog: family safety accounts, scam recognition, accessibility
// Sourced from official Google/SSA/FTC/Apple/Zelle support pages

import type { Guide } from "./guides";

export const guidesBatch319: Guide[] = [
  {
    slug: "google-family-group-setup",
    title: "How to Set Up a Google Family Group",
    excerpt: "Link your Google account with your spouse, kids, or grandkids to share apps, a calendar, photos, and location safely.",
    category: "government-civic",
    tags: ["google", "family", "sharing", "setup", "grandkids"],
    readTime: "7 min",
    thumbnailEmoji: "👨‍👩‍👧‍👦",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "A Google Family Group links your Google account with up to five other family members so you can share things without sending files back and forth. Once a group is set up, everyone in it can share a single Google Calendar to see appointments at a glance, split the cost of a family photo storage plan, and — most useful for many older adults — see each other's location through Google Maps if everyone agrees to turn it on. It also lets you approve app downloads and screen time for a grandchild's device if you're the one managing it.\n\nSetting up the group takes about five minutes and only needs to be done once by whoever creates it. After that, family members simply accept an invite that shows up as an email or a notification on their phone. Nothing is shared automatically — every piece of sharing (calendar, location, photos) is a separate choice each person turns on individually, so joining a Family Group by itself does not expose anything private.\n\nThis is especially useful for households where an adult child manages tech for an aging parent, or where grandparents want an easy way to see photos from the family without asking someone to text them one at a time. Source: support.google.com/families.",
    steps: [
      {
        title: "Open Google's Family Group settings",
        content: "On a phone or computer, go to families.google.com and sign in with your Google account (the same one you use for Gmail). If you already belong to a family group, you'll see it listed here. If not, you'll see a button to create one.",
      },
      {
        title: "Create the group and add a manager",
        content: "Tap \"Create a family group.\" You'll automatically become the family manager, which means you can add or remove members and manage a shared payment method for app purchases if you choose to set one up. You do not have to add a payment method to use the free sharing features.",
        tip: "If your adult child usually helps you with tech, it often works better to make them the family manager instead of yourself — that way they can add new members later without needing your password.",
      },
      {
        title: "Invite family members by email",
        content: "Select \"Invite family members\" and enter the Gmail address of each person, one at a time. You can add up to 5 people total. Each person will get an email invitation they must accept before they're added — nothing happens on their account until they say yes.",
        warning: "Only invite people using their real Gmail address. If you're not sure of someone's Gmail address, ask them directly rather than guessing — sending an invite to the wrong email does not put a stranger in your family group, since they still have to accept it, but it's better to get it right the first time.",
      },
      {
        title: "Turn on Family Calendar if you want shared appointments",
        content: "Open the Google Calendar app, tap the menu, and look for \"Family\" under your list of calendars. Any event you add to the Family calendar (instead of your personal calendar) becomes visible to everyone in the group — useful for doctor appointments a family member is driving you to, or holiday gatherings everyone needs the date for.",
      },
      {
        title: "Turn on Location Sharing only if everyone agrees",
        content: "In Google Maps, tap your profile picture, then \"Location sharing,\" then \"Share location.\" Choose how long to share (1 hour, until you turn it off, or a custom time) and pick which family members can see it. This is optional and can be turned off at any time from the same screen.",
        tip: "Location sharing is popular for peace of mind — an adult child can see that mom or dad made it home from an errand — but it is entirely your choice whether to turn it on, and you can stop sharing instantly.",
      },
      {
        title: "Review who's in the group anytime",
        content: "Go back to families.google.com whenever you want to see the current member list, remove someone, or leave the group yourself. Leaving a family group does not delete your Google account or any of your own photos, emails, or files — it only removes the shared calendar and location access.",
      },
    ],
  },
  {
    slug: "my-social-security-account-setup",
    title: "How to Set Up Your \"my Social Security\" Online Account",
    excerpt: "Create a free account at ssa.gov to check your benefits, get a replacement Social Security card, and manage direct deposit online.",
    category: "government-civic",
    tags: ["social security", "government", "benefits", "ssa.gov", "retirement"],
    readTime: "8 min",
    thumbnailEmoji: "🏛️",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "The Social Security Administration's free \"my Social Security\" account at ssa.gov is the official way to check your benefit amount, view your earnings history, get a benefit verification letter for a loan or apartment application, update your direct deposit bank account, and request a replacement Social Security card — all without visiting an office or waiting on hold. If you already receive benefits, this account is also where your annual cost-of-living increase notice and 1099 tax form for benefits show up every January.\n\nCreating the account matters for another reason too: it is one of the best defenses against Social Security scams. Criminals sometimes try to create a fraudulent \"my Social Security\" account in someone else's name to redirect their benefit payments to a different bank account. If you create your own verified account first, a scammer generally cannot create a second one using your information — the system already recognizes you as taken.\n\nSetting up the account requires identity verification, which can be done through Login.gov or ID.me — both are separate government-approved identity services, not part of Social Security itself, and neither one will ever call or text you asking to verify your identity over the phone. Source: ssa.gov/myaccount.",
    steps: [
      {
        title: "Go to the official site",
        content: "Open a web browser and type ssa.gov/myaccount directly into the address bar — do not search for it and click a link, since search ads sometimes lead to look-alike scam sites. The real Social Security Administration site always ends in .gov.",
        warning: "Never enter your Social Security number on a site that does not end in .gov, and never click a link in a text message or email claiming to be from the SSA — the agency does not send account setup links that way.",
      },
      {
        title: "Choose Create an Account",
        content: "Click \"Create an Account\" and choose to sign in with either Login.gov or ID.me. Both are free identity verification services accepted by many other government sites (like the IRS). If you already have a Login.gov account from another government service, you can reuse it here.",
      },
      {
        title: "Verify your identity",
        content: "You'll be asked to enter your Social Security number, date of birth, and address, then answer a few questions only you would know (like a past address or loan amount) pulled from your credit history. Have your Social Security card and a recent piece of mail on hand in case you need the exact numbers.",
        tip: "If the online questions fail for any reason, you can finish identity verification by uploading a photo of your driver's license, or by visiting a local Social Security office in person with your ID.",
      },
      {
        title: "Set up two-factor sign-in",
        content: "During setup, choose to receive a code by text message or use an authenticator app each time you log in. This second step means that even if someone learns your password, they still cannot get into your account without your phone.",
      },
      {
        title: "Explore your account once it's active",
        content: "After verification, you'll land on a dashboard showing your estimated benefit at different retirement ages, your full earnings history reported by employers over your working life, and — if you already collect benefits — your current monthly amount and payment date.",
      },
      {
        title: "Set direct deposit and get statements here, not by phone",
        content: "Any time you need to change the bank account your benefit is deposited into, do it through this account or in person at an office — never over the phone with someone who calls you first. The SSA does not call people asking to \"verify\" or \"update\" direct deposit information; that request is one of the most common Social Security scams.",
      },
    ],
  },
  {
    slug: "zelle-scam-recognition-2026",
    title: "How to Recognize and Avoid Zelle Payment Scams",
    excerpt: "Zelle payments cannot usually be reversed. Learn the warning signs before you send money to someone you don't know well.",
    category: "financial-tech",
    tags: ["zelle", "scam", "banking", "money", "fraud"],
    readTime: "7 min",
    thumbnailEmoji: "💸",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "Zelle is a fast money-transfer service built into most major banking apps, including Chase, Bank of America, Wells Fargo, and hundreds of others. It moves money between bank accounts in minutes — which is exactly why scammers favor it. Unlike a credit card charge, a Zelle payment behaves like handing someone cash: once it's sent, the money is usually gone, and your bank has limited ability to get it back even if you report it right away.\n\nThe Consumer Financial Protection Bureau and FTC have both issued repeated warnings about Zelle-based scams in recent years, and the pattern is consistent: someone contacts you claiming to be your bank's fraud department, a family member in an emergency, an online seller, or a romantic interest, and creates urgency to send money through Zelle immediately. The single most important rule is this: Zelle is meant for paying people you already know and trust, like splitting a dinner bill with a friend or paying rent to a landlord you've met — not for paying strangers, online sellers you've never dealt with before, or anyone who contacts you first asking for money.\n\nIf you use Zelle regularly with family, keep using it — it is a legitimate and convenient tool. The goal of this guide is to help you pause and check before sending money in the specific situations scammers rely on.",
    steps: [
      {
        title: "Know the one rule that stops most Zelle scams",
        content: "Only send Zelle payments to people you already personally know — a family member, a friend, a landlord you've met, a small business you've worked with before. If someone you've never met in person is asking you to Zelle them money, for any reason, stop and verify before sending.",
      },
      {
        title: "Recognize the fake bank fraud call",
        content: "A common scam: someone calls claiming to be from your bank's fraud department, says your account has been compromised, and \"walks you through\" sending money via Zelle to a \"safe account\" they control to protect it. Real banks never ask you to move your own money to protect it. Hang up and call the number on the back of your debit card to check.",
        warning: "Scammers can fake the caller ID to show your real bank's name and number. A phone number showing your bank's name does not confirm the call is legitimate.",
      },
      {
        title: "Recognize the online marketplace trap",
        content: "If you're selling something on Facebook Marketplace or Craigslist and a buyer insists on paying by Zelle before picking up the item, be cautious — Zelle offers sellers no protection if the buyer later claims fraud and gets your bank to try to reverse it, or if the buyer simply never shows up after you've already sent a \"deposit refund.\"",
      },
      {
        title: "Recognize the emergency-relative scam",
        content: "A message or call claiming to be a grandchild or family member in urgent trouble — needing bail money, a hospital bill, or help stuck abroad — and asking for an immediate Zelle payment is one of the most common targeted scams against older adults. Hang up and call that family member directly on a number you already have saved, not a number the caller gives you.",
      },
      {
        title: "Check the name that appears before sending",
        content: "Zelle shows the name attached to the phone number or email you're sending to before you confirm. Read it carefully — if it doesn't match who you expect, do not send the payment, even if the person messaging you insists it's correct.",
        tip: "Send a small test amount (like $1) to a new contact the first time, then confirm with them by phone that they received it, before sending a larger amount.",
      },
      {
        title: "Report a scam payment immediately",
        content: "If you believe you've sent money to a scammer, call your bank's fraud line right away — some banks can stop a payment if it hasn't been claimed yet. Also report it at reportfraud.ftc.gov and, for elder fraud specifically, the Department of Justice's National Elder Fraud Hotline at 1-833-372-8311.",
      },
    ],
  },
  {
    slug: "apple-google-trusted-contacts-account-recovery",
    title: "How to Set Up Trusted Contacts for Account Recovery",
    excerpt: "Add a family member as a trusted contact so you never get permanently locked out of your Apple or Google account if you forget your password.",
    category: "safety-guides",
    tags: ["account recovery", "apple id", "google account", "security", "family"],
    readTime: "7 min",
    thumbnailEmoji: "🔑",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "One of the most stressful tech problems is getting locked out of an Apple ID or Google account with no way back in — it can mean losing access to years of photos, emails, and contacts. Both Apple and Google offer a free feature that solves this ahead of time: a Recovery Contact (Apple) or a way to add a trusted phone/email (Google) that can help you get back in if you're ever locked out, without needing to remember complicated security questions from years ago.\n\nSetting this up before there's a problem takes about five minutes and is one of the single most useful things you can do to protect years of family photos and memories. It works especially well when an adult child or trusted family member is the recovery contact, since they can help walk you through the process if you ever do get locked out.",
    steps: [
      {
        title: "Apple: open Account Recovery settings",
        content: "On an iPhone, go to Settings, tap your name at the top, then \"Sign-In & Security,\" then \"Account Recovery.\" Tap \"Add Recovery Contact\" and follow the prompts to choose someone from your Contacts who also has an iPhone or iPad.",
      },
      {
        title: "Apple: the recovery contact confirms",
        content: "The person you choose gets a notification asking them to accept. Once accepted, if you're ever locked out of your Apple ID, you can call them, and they can generate a special recovery code from their own device to help you back in — they never see your password.",
        tip: "You can also set up a Legacy Contact at the same screen, which is different — it lets a trusted person access your account's data after you pass away, rather than helping with a forgotten password.",
      },
      {
        title: "Google: add a recovery phone and email",
        content: "On a computer, go to myaccount.google.com/security and look for \"Recovery phone\" and \"Recovery email.\" Add a phone number and a second email address (not your main Gmail) that you can access if you're ever locked out of this account.",
      },
      {
        title: "Google: consider Inactive Account Manager",
        content: "Further down the Google security page is \"Inactive Account Manager,\" where you can name someone to be notified and given access to specific parts of your account (like Photos) if you don't log in for a set period of time, such as 12 months — useful for making sure family photos aren't lost.",
      },
      {
        title: "Write down and store recovery information safely",
        content: "Keep a written note in a safe place (not saved as a photo on your phone) listing which family member is your Apple recovery contact and which phone/email you used for Google recovery. If your memory of passwords is ever a concern, a trusted family member having this information ready saves hours of frustration.",
      },
      {
        title: "Test that it works",
        content: "Ask your recovery contact to confirm they received and accepted the invitation. You don't need to actually lock yourself out to test it — just confirming the invite was accepted is enough to know the safety net is in place.",
      },
    ],
  },
  {
    slug: "reduce-loud-sounds-iphone-hearing-protection",
    title: "How to Turn On Hearing Protection Features on iPhone",
    excerpt: "Use Reduce Loud Sounds and Headphone Notifications to protect your hearing automatically — no separate app or device needed.",
    category: "health-tech",
    tags: ["hearing", "accessibility", "iphone", "health", "headphones"],
    readTime: "6 min",
    thumbnailEmoji: "🔊",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "Every iPhone has built-in hearing protection tools that most people never turn on, even though they're free and take about two minutes to set up. \"Reduce Loud Sounds\" automatically lowers headphone volume any time it goes above a safe level you choose, and \"Headphone Notifications\" alerts you when your average listening volume over a week has been high enough to risk hearing damage over time. These features work with any headphones — wired, Bluetooth, or AirPods.\n\nThe World Health Organization estimates that over a billion young people worldwide are at risk of hearing loss from unsafe listening habits, and hearing damage from loud sound exposure is cumulative and permanent — once it happens, it doesn't come back. These settings put a ceiling on volume without requiring you to think about it every time you put in headphones. Source: support.apple.com and who.int.",
    steps: [
      {
        title: "Open Sound & Haptics settings",
        content: "Open the Settings app, then tap \"Sounds & Haptics,\" then \"Headphone Safety.\" This screen controls both hearing protection features.",
      },
      {
        title: "Turn on Reduce Loud Sounds",
        content: "Switch on \"Reduce Loud Sounds,\" then drag the slider below it to set a decibel limit. Apple sets a default around 100 dB (roughly as loud as a lawn mower), but you can lower it to 90 dB or below for extra protection, especially if you already notice ringing in your ears after listening to music or podcasts.",
        tip: "80 dB is roughly the volume of city traffic heard from inside a car — a comfortable, safe setting for long listening sessions.",
      },
      {
        title: "Check your Headphone Notifications history",
        content: "Below the Reduce Loud Sounds toggle, look for \"Headphone Notifications\" and turn it on. Over the following days, iPhone will track your average headphone volume and gently notify you if it's been consistently loud, without needing you to do anything else.",
      },
      {
        title: "See your hearing data in the Health app",
        content: "Open the Health app, tap \"Browse\" at the bottom, then \"Hearing.\" This section shows headphone audio levels over time and, on newer iPhones with a compatible AirPods model, can even estimate environmental noise exposure from the microphone.",
      },
      {
        title: "Consider a hearing test right from your phone",
        content: "If you have AirPods Pro 2 or newer, the Health app can walk you through an FDA-cleared clinical-grade hearing test, and AirPods can then work like basic hearing aids for everyday conversations if the test finds mild to moderate hearing loss. This is separate from Reduce Loud Sounds but lives in the same Health app section.",
      },
      {
        title: "Set a comfortable default volume",
        content: "As a general habit, keep media volume at 60% or lower and take a break from headphones for a few minutes every hour during long listening sessions — a simple rule hearing specialists commonly recommend alongside these built-in protections.",
      },
    ],
  },
  {
    slug: "how-to-spot-fake-charity-donation-requests",
    title: "How to Spot a Fake Charity Before You Donate",
    excerpt: "Scammers impersonate real charities after disasters and during the holidays. Learn to verify before you give — especially online or by text.",
    category: "safety-guides",
    tags: ["charity", "scam", "donation", "fraud", "safety"],
    readTime: "7 min",
    thumbnailEmoji: "❤️",
    publishedAt: "2026-07-08",
    lastVerifiedAt: "2026-07-08",
    difficulty: "Beginner",
    body: "Charity scams spike after every major hurricane, wildfire, or other disaster covered in the news, and again every year during the November-to-December giving season. Scammers set up fake charity names that sound almost identical to real, well-known organizations, then push urgent appeals through text messages, social media ads, and phone calls asking for immediate donations — often specifically requesting gift cards, wire transfers, or cryptocurrency, none of which a real charity would ever ask for.\n\nThe FTC and the BBB Wise Giving Alliance both publish free tools to check whether a charity is real and how much of its donations actually go to the cause versus overhead. Taking two extra minutes to verify before donating protects your money and makes sure it actually reaches people who need it.",
    steps: [
      {
        title: "Pause before giving to any charity that contacts you first",
        content: "Legitimate charities you already support may reach out, but be extra cautious of any brand-new appeal that finds you — through a text, a social media ad, or a phone call — especially right after a disaster is in the news. Scammers move fast to catch people while emotions are high.",
      },
      {
        title: "Look up the charity's real name and status",
        content: "Go to give.org (BBB Wise Giving Alliance) or Charity Navigator at charitynavigator.org and search the exact charity name. Both sites show whether the organization is a verified, registered nonprofit and what percentage of donations goes to actual programs versus administrative costs.",
        tip: "Scam charities often use names one word off from a famous one — like \"American Red Cross Relief Fund\" instead of the real \"American Red Cross.\" Search the exact name you were given, not just what you remember.",
      },
      {
        title: "Never donate by gift card, wire transfer, or cryptocurrency",
        content: "No legitimate charity asks for donations in the form of gift cards, wire transfers, or cryptocurrency — these payment methods cannot be reversed or traced, which is exactly why scammers request them. A credit card or check to a verified charity is always safer and reversible if something is wrong.",
        warning: "If someone pressures you to buy gift cards \"for the charity\" and read the codes over the phone, this is always a scam. Hang up immediately.",
      },
      {
        title: "Go directly to the charity's known website",
        content: "Instead of clicking a link in a text or email appeal, type the charity's website address directly into your browser, or search for it yourself, to make your donation. This avoids look-alike scam sites that copy a real charity's logo and design.",
      },
      {
        title: "Check for a real physical address and EIN",
        content: "A legitimate US charity has a tax ID number (called an EIN) and is registered with the IRS. You can search any charity's EIN and tax filings for free at apps.irs.gov/app/eos (the IRS Tax Exempt Organization Search tool).",
      },
      {
        title: "Report a suspected charity scam",
        content: "If you believe you've encountered a fake charity, report it at reportfraud.ftc.gov and to your state's Attorney General office, which typically has a charity registration division. If you already gave money by gift card or wire, contact the sending company immediately to ask about reversal — success is not guaranteed, but time matters.",
      },
    ],
  },
];
