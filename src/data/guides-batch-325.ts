// guides-batch-325 — 7 guides for the 90-day compound growth sprint (Day 69, 2026-07-19)
// Topics: fake tech support scams, iPhone storage, Medicare.gov account setup,
// Android digital wellbeing, autopay traps, hearing protection, fake charity texts
// Sourced from official FTC/Apple/Google/CMS/AARP support pages

import type { Guide } from "./guides";

export const guidesBatch325: Guide[] = [
  {
    slug: "fake-tech-support-popup-how-to-spot-and-close",
    title: "How to Spot and Safely Close a Fake Tech Support Pop-Up",
    excerpt: "Learn to recognize the fake 'your computer has a virus' pop-up scam and the safe way to close it without calling the number on screen.",
    category: "safety-guides",
    tags: ["tech support scam", "pop-up", "virus warning", "scam prevention"],
    readTime: "6 min",
    thumbnailEmoji: "🚨",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "A fake tech support pop-up is a full-screen warning that suddenly appears while browsing the web, claiming your computer is infected with a virus and telling you to call a phone number immediately. These pop-ups often play a loud alarm sound, lock the screen so it looks like you can't close it, and use official-looking logos to appear legitimate. None of it is real. Apple, Microsoft, and Google never contact you through a browser pop-up, and they never ask you to call a phone number to fix your computer.\n\nThe goal of this scam is to get you on the phone with someone who will either charge you hundreds of dollars for fake 'repairs,' ask for remote access to your computer to steal information, or both. The pop-up itself cannot actually harm your computer — it's just a webpage designed to look scary and urgent so you react before thinking it through.\n\nThe safest response is to never call the number, never grant remote access to anyone who contacts you this way, and close the browser using the methods below rather than clicking anything inside the pop-up itself, since some fake 'close' buttons actually trigger a download. Source: consumer.ftc.gov/articles/tech-support-scams and support.apple.com/en-us/HT204174.",
    steps: [
      {
        title: "Do not call the phone number on the screen",
        content: "No matter how official it looks or how loud the warning sounds, do not dial any number shown in the pop-up. Real security warnings from Apple, Microsoft, or your antivirus software never ask you to call a phone number.",
        warning: "If you already called and gave someone remote access to your computer, disconnect from the internet, run a legitimate antivirus scan, and change your important passwords from a different device.",
      },
      {
        title: "Force-quit the browser on a Mac",
        content: "Press Command + Option + Escape to open Force Quit, select your browser (Safari, Chrome, etc.), and click Force Quit. This closes the browser completely without clicking anything inside the pop-up.",
      },
      {
        title: "Force-quit the browser on Windows",
        content: "Press Ctrl + Shift + Escape to open Task Manager, find your browser in the list, click it, and click End Task. This shuts down the browser entirely, including the fake warning tab.",
      },
      {
        title: "Reopen your browser without restoring the tab",
        content: "When you reopen your browser, it may ask if you want to restore your previous tabs. Choose to start fresh or close a new blank window instead, so the fake warning page doesn't reload.",
        tip: "If the pop-up keeps reappearing every time you reopen the browser, clear your browsing history and cache, or ask a family member for help removing it.",
      },
      {
        title: "Report the scam",
        content: "File a report at reportfraud.ftc.gov so the FTC can track these scams. If you lost money, also file a report at ic3.gov, the FBI's Internet Crime Complaint Center.",
      },
    ],
  },
  {
    slug: "free-up-iphone-storage-space-guide",
    title: "How to Free Up Storage Space on Your iPhone",
    excerpt: "Step-by-step ways to see what's taking up space on your iPhone and safely clear it out when you get the 'Storage Almost Full' warning.",
    category: "phone-guides",
    tags: ["iphone storage", "iOS", "phone maintenance", "photos"],
    readTime: "6 min",
    thumbnailEmoji: "📦",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "When an iPhone's storage gets full, it can slow down, refuse to install updates, or stop letting you take new photos. The good news is that iPhones include a built-in tool that shows exactly what's using up space and offers one-tap ways to clear it out, without needing any extra apps.\n\nMost of the time, storage fills up with photos and videos, apps you no longer use, or old text message attachments that have quietly piled up over the years. Apple's storage screen breaks all of this down by category so you can see exactly where the space is going before deleting anything.\n\nNone of the steps below delete anything permanently right away in most cases — photos moved to iCloud or apps you 'offload' can be brought back later, which makes this a safe, low-risk way to get your phone working smoothly again. Source: support.apple.com/en-us/HT201656.",
    steps: [
      {
        title: "Check what's using your storage",
        content: "Open Settings, tap General, then tap iPhone Storage. Wait a moment for the screen to load a colored bar showing exactly how much space Photos, Apps, Messages, and other categories are using.",
      },
      {
        title: "Turn on 'Offload Unused Apps'",
        content: "Still in iPhone Storage, tap 'Offload Unused Apps' and turn it on. This automatically removes apps you haven't opened in a while while keeping all their data, so if you open the app again later, it reinstalls with everything intact.",
        tip: "This is completely reversible and doesn't delete any documents, saved games, or logins tied to the app.",
      },
      {
        title: "Review and delete large attachments in Messages",
        content: "In iPhone Storage, tap Messages to see how much space photos and videos sent through text messages are using. Tap 'Review Large Attachments' to see them all in one list and delete ones you no longer need.",
      },
      {
        title: "Back up and optimize Photos storage",
        content: "Go to Settings, tap your name at the top, tap iCloud, then Photos, and turn on 'Optimize iPhone Storage.' This keeps smaller versions of your photos on your phone while the full-resolution originals stay safely backed up in iCloud.",
        warning: "iCloud has a free storage limit of 5GB. If your photo library is larger than that, you may need to pay for more iCloud storage or move some photos to a computer instead.",
      },
      {
        title: "Empty 'Recently Deleted' albums",
        content: "Deleted photos sit in a 'Recently Deleted' album for 30 days before they're gone for good, still using up space. Open the Photos app, tap Albums, scroll to Recently Deleted, tap Select, then Delete All to clear them immediately.",
      },
    ],
  },
  {
    slug: "set-up-medicare-gov-online-account",
    title: "How to Set Up Your Medicare.gov Online Account",
    excerpt: "Create a free MyMedicare.gov account to view your coverage, order a replacement Medicare card, and check your Part D drug plan details online.",
    category: "government-civic",
    tags: ["medicare", "government account", "healthcare", "online account"],
    readTime: "7 min",
    thumbnailEmoji: "🏥",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "A MyMedicare.gov account is the official, free way to manage your Medicare coverage online directly through the federal government, without needing to call or mail anything in. Once it's set up, you can view your claims, check what your Part D prescription drug plan covers, print a replacement Medicare card, and compare plans during open enrollment.\n\nSetting up this account also helps protect you from Medicare scams. Fraudsters sometimes call pretending to be from 'Medicare' asking you to confirm your Medicare number or Social Security number over the phone. Medicare will never call you out of the blue asking for personal information — having your own account means you can look up anything you need directly, instead of relying on a phone call from someone claiming to be Medicare.\n\nThe setup process takes about ten minutes and only needs to be done once. You'll need your red, white, and blue Medicare card handy, along with the same personal information Medicare has on file for you (name, birthdate, and Medicare Number). Source: medicare.gov/account/login and medicare.gov/basics/get-started-with-medicare.",
    steps: [
      {
        title: "Go to the official Medicare account page",
        content: "Open a web browser and go to medicare.gov/account/login. Make sure the address bar shows exactly 'medicare.gov' — scam websites sometimes use similar-looking addresses.",
      },
      {
        title: "Click 'Create Account'",
        content: "On the login page, click 'Create an account.' You'll be asked for basic information including your name, birthdate, and Medicare Number, which is printed on your red, white, and blue Medicare card.",
      },
      {
        title: "Verify your identity",
        content: "Medicare will ask a few identity-verification questions to confirm it's really you, similar to questions a bank might ask. Have your Medicare card and recent Medicare-related mail nearby in case you need to reference anything.",
      },
      {
        title: "Set up your username, password, and security questions",
        content: "Choose a username and a strong password, then set up security questions in case you forget your password later. Write these down somewhere safe, like a notebook kept at home, rather than sharing them with anyone by phone or email.",
        tip: "Consider turning on two-factor authentication if MyMedicare.gov offers it, which adds a text or email code for extra login security.",
      },
      {
        title: "Explore your account",
        content: "Once logged in, look under 'My Plan Information' to view your Part D drug coverage, under 'My Premiums' to check what you owe, and use the 'Mail Order a Replacement Card' option if you've lost your physical Medicare card.",
      },
    ],
  },
  {
    slug: "android-digital-wellbeing-screen-time-tools",
    title: "How to Use Android's Digital Wellbeing Tools to Manage Screen Time",
    excerpt: "Set up Android's free Digital Wellbeing feature to see how much time you spend on your phone and set healthy daily limits for specific apps.",
    category: "phone-guides",
    tags: ["android", "screen time", "digital wellbeing", "phone habits"],
    readTime: "5 min",
    thumbnailEmoji: "⏱️",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "Digital Wellbeing is a free tool built into most Android phones that shows exactly how much time you spend on your phone each day, broken down by app. It's a helpful way to notice habits you might not realize you have, like checking social media far more often than intended, and it includes simple tools to set daily limits if you'd like to cut back.\n\nUnlike third-party screen-time apps, Digital Wellbeing comes preinstalled on Android phones from Google, Samsung, and most other manufacturers, so there's nothing to download or pay for. It works entirely on your own phone and doesn't share your usage information with anyone else.\n\nThis feature can be especially useful for setting a 'Bedtime mode' that dims the screen and silences notifications at night, or for noticing if a particular app is taking up more time than expected. Everything in Digital Wellbeing is optional and adjustable — you can turn limits off just as easily as you turned them on. Source: support.google.com/android/answer/9346420.",
    steps: [
      {
        title: "Open Digital Wellbeing",
        content: "Open Settings on your Android phone and look for 'Digital Wellbeing & parental controls.' On Samsung phones, this may be listed simply as 'Digital Wellbeing.'",
      },
      {
        title: "View your daily and weekly screen time",
        content: "Tap the dashboard chart at the top of the Digital Wellbeing screen to see a breakdown of how much time you've spent in each app today and over the past week.",
        tip: "Checking this once a week, rather than daily, is usually enough to spot any habits worth adjusting.",
      },
      {
        title: "Set a daily timer for a specific app",
        content: "From the dashboard, tap the hourglass icon next to any app and set a daily time limit. Once you hit the limit, that app's icon grays out for the rest of the day until midnight resets it.",
      },
      {
        title: "Turn on Bedtime mode",
        content: "In Digital Wellbeing, tap 'Bedtime mode' and set a schedule. During bedtime hours, the screen switches to black and white and notifications are silenced, making the phone less tempting to check.",
      },
      {
        title: "Use 'Focus mode' when you need fewer distractions",
        content: "Tap 'Focus mode' and select apps to pause temporarily, like social media or games. While Focus mode is on, those apps' icons are grayed out and won't send notifications until you turn it off.",
      },
    ],
  },
  {
    slug: "how-to-spot-fake-charity-donation-texts",
    title: "How to Spot a Fake Charity Donation Text Message",
    excerpt: "Learn the warning signs of fake charity texts that appear after disasters or during holiday seasons, and how to verify a charity is real before donating.",
    category: "safety-guides",
    tags: ["charity scam", "text message scam", "donation safety", "scam prevention"],
    readTime: "5 min",
    thumbnailEmoji: "💔",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "After natural disasters, during the holidays, or following news of a tragedy, scammers often send text messages pretending to collect donations for victims. These messages usually include a sense of urgency, an emotional appeal, and a link to 'donate now,' but the link actually leads to a fake payment page designed to steal your credit card information or, in some cases, install malware on your phone.\n\nReal charities rarely ask for donations exclusively through an unsolicited text message with a link. Legitimate organizations like the Red Cross, Salvation Army, or well-known disaster relief funds typically direct you to their official website, which you can visit directly rather than through a link someone texted you.\n\nBefore donating to any charity you learn about through a text message, phone call, or social media post, it's worth taking a moment to verify the charity is real and that your donation will actually reach the cause it claims to support. Source: consumer.ftc.gov/articles/how-donate-wisely-and-avoid-charity-scams and give.org (BBB Wise Giving Alliance).",
    steps: [
      {
        title: "Don't tap links in unsolicited donation texts",
        content: "If you receive a text asking for a donation, don't tap any link inside it, even if it looks like it goes to a real charity's website. Instead, close the message and search for the charity's official site directly.",
      },
      {
        title: "Search for the charity independently",
        content: "Open a web browser and search for the charity's name yourself, then navigate to its official donation page from there, rather than using any link provided in the text.",
      },
      {
        title: "Check the charity's rating before donating",
        content: "Visit give.org, charitynavigator.org, or charitywatch.org and search for the charity's name to see its rating and confirm it's a legitimate, registered nonprofit before giving any money.",
        tip: "A charity with no rating, no public financial records, or a name very similar to a well-known charity (but not quite the same) is a red flag.",
      },
      {
        title: "Never pay by gift card or wire transfer",
        content: "Legitimate charities accept credit cards or checks. If a text or caller insists you donate using gift cards, wire transfers, or cryptocurrency, it is a scam — hang up or delete the message.",
        warning: "These payment methods are especially popular with scammers because they're difficult to trace or reverse once sent.",
      },
      {
        title: "Report suspicious charity texts",
        content: "Forward suspicious texts to 7726 (SPAM) to report them to your mobile carrier, and file a report at reportfraud.ftc.gov if you believe you've encountered a charity scam.",
      },
    ],
  },
  {
    slug: "avoid-surprise-autopay-charges-guide",
    title: "How to Avoid Surprise Autopay and Auto-Renewal Charges",
    excerpt: "Learn how to find every subscription and bill set to autopay on your accounts, and how to avoid surprise charges when free trials quietly convert.",
    category: "financial-tech",
    tags: ["autopay", "subscriptions", "auto-renewal", "billing"],
    readTime: "6 min",
    thumbnailEmoji: "💳",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "Autopay and auto-renewal are convenient because they mean you never miss a payment, but they can also lead to surprise charges when a free trial quietly turns into a paid subscription, or when a service raises its price without you noticing. Over time, small recurring charges from apps, streaming services, and subscription boxes can add up to a significant amount each month.\n\nBoth Apple and Google let you see every subscription tied to your account in one place, which makes it much easier to review what you're actually paying for and cancel anything you no longer use. Your bank or credit card statement is also a reliable way to spot recurring charges you may have forgotten about entirely.\n\nReviewing your subscriptions every few months is a simple habit that can save real money, and canceling an unwanted subscription doesn't require calling anyone or negotiating — it can almost always be done in a few taps. Source: consumer.ftc.gov/articles/negative-option-rule and support.apple.com/en-us/HT202039.",
    steps: [
      {
        title: "Review subscriptions on iPhone",
        content: "Open Settings, tap your name at the top, then tap Subscriptions. This shows every app subscription billed through your Apple Account, along with the renewal date and price for each one.",
      },
      {
        title: "Review subscriptions on Android",
        content: "Open the Google Play Store app, tap your profile picture, tap 'Payments & subscriptions,' then tap 'Subscriptions' to see everything billed through your Google account.",
      },
      {
        title: "Check your bank or credit card statement",
        content: "Log into your bank or credit card's website and look through the last two to three months of transactions for recurring charges from companies you don't recognize or no longer use.",
        tip: "Search online for any unfamiliar company name on your statement — it's often a streaming service or app you signed up for once and forgot about.",
      },
      {
        title: "Set a calendar reminder before free trials end",
        content: "When signing up for a free trial, add a reminder on your phone's calendar for a day or two before the trial ends, so you have time to decide whether to keep it or cancel before you're charged.",
      },
      {
        title: "Cancel directly through the app store, not the company",
        content: "To fully cancel a subscription billed through Apple or Google, use the Subscriptions screen described above rather than looking for a cancel option within the app itself, which sometimes only pauses notifications rather than stopping billing.",
        warning: "Deleting an app from your phone does NOT cancel its subscription — you must cancel through Settings > Subscriptions (iPhone) or Play Store > Subscriptions (Android) first.",
      },
    ],
  },
  {
    slug: "protect-hearing-with-headphone-safety-settings",
    title: "How to Protect Your Hearing With Your Phone's Headphone Safety Settings",
    excerpt: "Set up the built-in loud sound warnings and volume limits on iPhone and Android to protect your hearing when using headphones or earbuds.",
    category: "health-tech",
    tags: ["hearing health", "headphone safety", "volume limits", "iOS", "android"],
    readTime: "5 min",
    thumbnailEmoji: "🎧",
    publishedAt: "2026-07-19",
    lastVerifiedAt: "2026-07-19",
    difficulty: "Beginner",
    body: "Both iPhone and Android include free, built-in tools that measure how loud your headphones are playing and can warn you or automatically lower the volume when it reaches a level that could damage your hearing over time. Since headphones and earbuds sit so close to your ears, sounds that seem only moderately loud can actually be well above safe listening levels, especially during long calls, podcasts, or music sessions.\n\nThe World Health Organization estimates that over a billion young people worldwide are at risk of hearing loss due to unsafe listening practices, and the risk applies at any age when volume and duration both increase. Turning on these built-in safety features takes just a couple of minutes and works quietly in the background from then on, without needing any special headphones or extra apps.\n\nThese settings are especially worth turning on if you regularly use headphones in noisy environments, like on a bus or plane, where it's tempting to turn the volume up higher than usual to compensate. Source: support.apple.com/en-us/HT208965 and support.google.com/android/answer/12314226 (Headphone Safety, Wear OS and Pixel devices with the feature).",
    steps: [
      {
        title: "Turn on Headphone Safety on iPhone",
        content: "Open Settings, tap Sounds & Haptics, then tap Headphone Safety. Turn on 'Reduce Loud Sounds' and use the slider to set a maximum decibel level, with lower numbers being safer for longer listening.",
      },
      {
        title: "Check your hearing history on iPhone",
        content: "In the same Headphone Safety screen, look at the chart showing your headphone audio levels over recent days. This is measured automatically and helps you notice if you've been listening louder than intended.",
      },
      {
        title: "Turn on volume warnings on Android (where available)",
        content: "On supported Android and Pixel phones, open Settings, tap Sound & vibration, then look for 'Headphone safety' or 'Media volume warning' to turn on alerts when volume reaches unsafe levels.",
        tip: "Not all Android phone models include this feature by default; if you don't see it, check your phone manufacturer's app store for a hearing health app from the manufacturer.",
      },
      {
        title: "Use the 'Hearing Test' features where available",
        content: "Newer iPhones running iOS 18 or later include a Hearing Test feature within the Health app, and some Android phones include similar hearing check tools, which can help establish a baseline for your hearing over time.",
      },
      {
        title: "Follow the 60/60 rule as a simple guideline",
        content: "A widely recommended rule of thumb is to listen at no more than 60% volume for no more than 60 minutes at a time, then give your ears a break, especially with in-ear headphones.",
      },
    ],
  },
];
