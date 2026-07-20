// guides-batch-326 — 7 guides for the 90-day compound growth sprint (Day 70, 2026-07-20)
// Topics: iPhone ad tracking controls, Android Find Hub, iPhone satellite SOS,
// fake delivery text scams, email data breach checks, Windows duplicate photos, RCS messaging
// Sourced from official Apple/Google/FTC support pages

import type { Guide } from "./guides";

export const guidesBatch326: Guide[] = [
  {
    slug: "turn-off-ad-tracking-iphone-app-tracking-transparency",
    title: "How to Stop Apps From Tracking You on Your iPhone",
    excerpt: "Use Apple's App Tracking Transparency setting to see which apps are tracking your activity across other apps and websites, and turn it off.",
    category: "online-privacy",
    tags: ["app tracking transparency", "iphone privacy", "ad tracking", "iOS"],
    readTime: "5 min",
    thumbnailEmoji: "🕵️",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Many free apps make money by tracking what you do in other apps and on websites, then using that information to show you targeted ads. Apple's App Tracking Transparency feature requires every app to ask your permission before it's allowed to do this, and it gives you a simple screen to review and turn off tracking for any app that already has permission.\n\nWhen an app first asks 'Allow tracking?', it's specifically requesting permission to follow your activity outside of that one app. Choosing 'Ask App Not to Track' doesn't stop the app from working — it simply prevents it from building a profile of your behavior across other apps to sell more targeted ads.\n\nYou don't have to wait for each app to ask; there's a single screen that lists every app currently allowed to track you, so you can review and turn tracking off in bulk at any time. Source: support.apple.com/en-us/HT212025.",
    steps: [
      {
        title: "Open the Tracking settings screen",
        content: "Open Settings, tap Privacy & Security, then tap Tracking. This shows a full list of apps that have asked for tracking permission and whether it's currently on or off for each one.",
      },
      {
        title: "Turn off tracking for individual apps",
        content: "On the Tracking screen, tap the switch next to any app to turn its tracking permission off. The app will keep working normally — this only stops it from following your activity in other apps.",
      },
      {
        title: "Turn off 'Allow Apps to Request to Track' entirely",
        content: "At the top of the Tracking screen, turn off 'Allow Apps to Request to Track.' This automatically denies tracking permission to every app going forward, so you won't see the pop-up requests anymore.",
        tip: "This is the fastest option if you'd rather not review apps one at a time.",
      },
      {
        title: "Review your Apple Advertising settings too",
        content: "Go to Settings, tap Privacy & Security, tap Apple Advertising, and turn off 'Personalized Ads' if you'd also like to limit how Apple itself uses your activity for ads in the App Store and Apple News.",
      },
      {
        title: "Know that this doesn't block all ads",
        content: "Turning off tracking reduces how targeted ads are, but you'll still see ads in free apps — they'll just be based on general information rather than your specific activity across other apps.",
      },
    ],
  },
  {
    slug: "find-lost-android-phone-with-find-hub",
    title: "How to Find a Lost Android Phone Using Find Hub",
    excerpt: "Use Google's Find Hub (formerly Find My Device) to locate a lost or stolen Android phone on a map, make it ring, lock it, or erase it remotely.",
    category: "phone-guides",
    tags: ["find hub", "find my device", "android", "lost phone", "phone security"],
    readTime: "6 min",
    thumbnailEmoji: "📍",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Find Hub is Google's free tool for locating a missing Android phone, tablet, or other connected device on a map. It works using your phone's last known location and internet connection, and it includes options to make the phone ring at full volume even if it's on silent, lock it remotely, display a message on the lock screen, or erase everything on it if you believe it's been stolen.\n\nFor Find Hub to work, it needs to already be turned on before the phone goes missing — it can't be enabled remotely after the fact. Most Android phones have this location-sharing feature turned on by default, but it's worth checking now rather than after a phone is already lost.\n\nYou can access Find Hub from a web browser on any computer or from the Find Hub app on another Android device, which makes it useful even if the lost phone was your only device. Source: support.google.com/accounts/answer/9433374 and support.google.com/android/answer/6160491.",
    steps: [
      {
        title: "Check that Find Hub is turned on before you need it",
        content: "On the Android phone, open Settings, search for 'Find My Device' or 'Find Hub,' and make sure the toggle is turned on. Also confirm that Location is turned on in Settings under Location.",
      },
      {
        title: "Go to Find Hub from a browser or another device",
        content: "On a computer or another phone, go to android.com/find, or open the Find Hub app if it's installed on another Android device, and sign in with the same Google Account used on the lost phone.",
      },
      {
        title: "View the phone's location on the map",
        content: "Once signed in, Find Hub shows the phone's last known location on a map, along with how recently that location was recorded. If the phone is nearby, this can help you narrow down where to look.",
      },
      {
        title: "Play a sound to help find it nearby",
        content: "Click 'Play Sound' to make the phone ring at full volume for five minutes, even if it's set to silent or vibrate. This is helpful if the phone is lost somewhere in your home or car.",
      },
      {
        title: "Lock or erase the phone if it's likely stolen",
        content: "If you believe the phone was stolen and won't be recovered, use 'Secure Device' to lock it with a message and phone number for whoever finds it, or 'Erase Device' to permanently wipe its data.",
        warning: "Erasing a device is permanent and also turns off Find Hub's ability to locate it afterward, so only erase it as a last resort once you've given up on recovering the phone itself.",
      },
    ],
  },
  {
    slug: "turn-on-iphone-satellite-sos-emergency-messaging",
    title: "How to Use iPhone's Emergency SOS via Satellite",
    excerpt: "Learn how iPhone's satellite SOS feature lets you contact emergency services and share your location even without cell signal or Wi-Fi.",
    category: "safety-guides",
    tags: ["satellite sos", "emergency", "iphone safety", "no cell signal"],
    readTime: "6 min",
    thumbnailEmoji: "🛰️",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Emergency SOS via Satellite lets certain iPhone models send messages to emergency services directly through a satellite connection when there's no cell signal or Wi-Fi available, such as in remote areas while hiking, camping, or driving through areas with no coverage. It works by connecting your iPhone directly to a satellite passing overhead, guiding you to point your phone in the right direction to keep the connection steady.\n\nThis feature is meant for genuine emergencies when you cannot reach 911 or other emergency services any other way. It walks you through a short series of questions about your situation before sending your answers, along with your location, to emergency responders or a relay center that can contact them on your behalf.\n\nThe feature has been included at no extra cost on eligible iPhone models for a limited number of years after purchase, and Apple has also added a related 'Find My via Satellite' feature to share your location with contacts when you're off the grid. Because availability, supported countries, and free trial periods change over time, check your iPhone's iOS settings directly for current details. Source: support.apple.com/en-us/HT213885.",
    steps: [
      {
        title: "Confirm your iPhone supports satellite features",
        content: "Satellite features are available on iPhone 14 and newer models. Open Settings, tap General, then About, and check your model to confirm compatibility if you're unsure.",
      },
      {
        title: "Try calling 911 first",
        content: "If you have any cell signal at all, your iPhone will always try a normal call to emergency services first. Satellite SOS only activates automatically when a call truly cannot go through.",
      },
      {
        title: "Follow the on-screen prompts when satellite connects",
        content: "If a call fails and no Wi-Fi is available, your iPhone will offer to text emergency services via satellite. Follow the prompts, answer the short questionnaire about your emergency, and hold your phone as directed to maintain the satellite connection.",
        tip: "You may need to be outdoors with a clear view of the sky, away from trees or tall buildings, for the satellite connection to work.",
      },
      {
        title: "Share your location with contacts via satellite",
        content: "Even without an emergency, you can open the Find My app while off the grid and use 'Share My Location' via satellite to let a friend or family member see where you are during a trip with no cell coverage.",
      },
      {
        title: "Check your current satellite service status",
        content: "Go to Settings, tap General, then About, and scroll to check your Satellite status and eligibility period, since free access windows and supported features are periodically updated by Apple.",
      },
    ],
  },
  {
    slug: "spot-fake-package-delivery-text-scams",
    title: "How to Spot Fake Package Delivery Text Scams",
    excerpt: "Learn to recognize fake 'your package couldn't be delivered' text messages designed to steal your personal information or payment details.",
    category: "safety-guides",
    tags: ["smishing", "text scam", "package delivery scam", "scam prevention"],
    readTime: "5 min",
    thumbnailEmoji: "📦",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Fake delivery text scams, sometimes called 'smishing' (SMS phishing), send a message claiming a package couldn't be delivered because of a missing address, an unpaid fee, or a customs charge. The text includes a link that leads to a fake page designed to look like USPS, UPS, FedEx, or Amazon, where it asks for your credit card number, home address, or account login to 'resolve' the fake issue.\n\nThese messages often arrive even if you aren't expecting any package at all, since scammers send them out in bulk hoping some recipients happen to be waiting for a delivery around the same time. The real shipping companies almost never ask for payment information by text message to release a package, and legitimate delivery notifications don't usually ask you to click a link to 'confirm your address.'\n\nThe safest approach is to never tap a link in an unexpected delivery text, and instead check tracking information directly through the shipping company's official app or website using a tracking number you already have. Source: consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages and usps.com/help/fraud.htm.",
    steps: [
      {
        title: "Don't tap the link in the text",
        content: "If you get an unexpected delivery text with a link, don't tap it, even if it mentions a real company like USPS or FedEx. Delete the message or leave it unopened if you're not sure.",
      },
      {
        title: "Track your package a different way",
        content: "If you are expecting a package, check its status by opening the shipping company's official app, or by typing the tracking number directly into the company's official website — not by tapping any link from a text.",
      },
      {
        title: "Look for red flags in the message",
        content: "Watch for urgent language ('respond within 24 hours'), requests for payment to release a package, misspellings, or a link that doesn't quite match the company's real website address when you look closely.",
      },
      {
        title: "Never enter payment or personal information from a text link",
        content: "Real delivery companies do not charge a fee by text message to redeliver a package. If a page asks for your credit card number, full address, or Social Security number after tapping a delivery text link, close it immediately.",
        warning: "Even if the fake page looks identical to a real company's website, the web address in your browser will usually be slightly different from the company's actual site.",
      },
      {
        title: "Report and block the number",
        content: "Forward the suspicious text to 7726 (SPAM) to report it to your mobile carrier, then block the sender's number. You can also report package delivery scams at reportfraud.ftc.gov.",
      },
    ],
  },
  {
    slug: "check-if-your-email-was-in-a-data-breach",
    title: "How to Check If Your Email Was Exposed in a Data Breach",
    excerpt: "Use free, reputable tools to check whether your email address has appeared in a known data breach, and what to do if it has.",
    category: "online-privacy",
    tags: ["data breach", "email security", "password safety", "identity protection"],
    readTime: "6 min",
    thumbnailEmoji: "🔓",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Data breaches happen when a company's customer database is hacked or leaked, sometimes exposing email addresses, passwords, and other personal details for millions of users at once. Because many companies you've used online over the years have had breaches at some point, it's worth checking whether any of your own accounts were part of one, so you know to change passwords that may be compromised.\n\nHave I Been Pwned is a widely trusted, free website run by a security researcher that lets you type in your email address to see which known breaches, if any, included it. It doesn't show your actual password — only which breached services had your email address in their records — and it doesn't require creating an account or entering a password to use.\n\nIf you discover your email was part of a breach, the most important response is to change the password for that specific service, and to change it everywhere else too if you had reused that same password anywhere else, since reused passwords are one of the most common ways accounts get broken into. Source: haveibeenpwned.com and consumer.ftc.gov/articles/what-do-if-your-personal-information-exposed-data-breach.",
    steps: [
      {
        title: "Go to a trusted, free breach-checking site",
        content: "Open a browser and go to haveibeenpwned.com, a well-known and free tool that checks whether your email address has appeared in a known data breach.",
      },
      {
        title: "Enter your email address to check",
        content: "Type your email address into the search box on the homepage and press enter. The site will show a list of any known breaches that included your email address, along with brief details about each one.",
      },
      {
        title: "Change passwords for any breached accounts",
        content: "For each account listed, go to that company's website and change your password to something new and unique. Avoid reusing a password you use anywhere else.",
        tip: "Use a password manager to generate and remember strong, unique passwords for every account, so a single breach never puts multiple accounts at risk.",
      },
      {
        title: "Turn on two-factor authentication where possible",
        content: "For any breached account, also turn on two-factor authentication if the service offers it. This adds a second step, like a text code, so a stolen password alone isn't enough to break in.",
      },
      {
        title: "Set up free breach notifications going forward",
        content: "On Have I Been Pwned, click 'Notify me' and enter your email to receive a free alert automatically if it ever appears in a future breach, so you don't have to remember to check manually again.",
      },
    ],
  },
  {
    slug: "remove-duplicate-photos-windows-11",
    title: "How to Find and Remove Duplicate Photos on Windows 11",
    excerpt: "Free up storage space on your Windows 11 computer by finding and safely deleting duplicate photos using the built-in Photos app.",
    category: "windows-guides",
    tags: ["windows 11", "duplicate photos", "storage cleanup", "photos app"],
    readTime: "5 min",
    thumbnailEmoji: "🖼️",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "Over the years, it's easy to end up with duplicate photos on a Windows computer — the same picture saved twice from different downloads, copies made while organizing folders, or the same photo imported from a phone more than once. These duplicates take up storage space without adding any value, and clearing them out can free up a meaningful amount of room, especially on computers with smaller hard drives.\n\nWindows 11's Photos app includes a built-in way to scan your Pictures folder for duplicate images and review them before deleting anything, so you stay in control of what gets removed rather than deleting files automatically and blindly.\n\nBefore deleting any photos, it's worth making sure you have a backup, either through OneDrive, an external hard drive, or another cloud photo service, in case you want to recover something later. Source: support.microsoft.com/en-us/windows and support.microsoft.com/en-us/office/backing-up-your-files.",
    steps: [
      {
        title: "Open the Photos app",
        content: "Click the Start menu, type 'Photos,' and open the Photos app. This is the built-in photo viewer that comes with Windows 11.",
      },
      {
        title: "Look for the duplicate finder feature",
        content: "In the Photos app, check the Collection or Album view for a 'Find duplicates' or similar option under the app's menu. Newer versions of the Photos app include this scanning tool built in.",
        tip: "If your version of the Photos app doesn't include a duplicate finder, Microsoft Store also offers free third-party apps like 'Duplicate Photo Cleaner' that work similarly.",
      },
      {
        title: "Review suggested duplicates carefully",
        content: "The app will show pairs or groups of similar-looking photos side by side. Look closely before deleting — sometimes photos look similar but are actually slightly different shots taken moments apart.",
      },
      {
        title: "Back up before deleting",
        content: "Before removing anything, make sure your photos are backed up through OneDrive or another cloud service, so you have a safety net in case you delete something you wanted to keep.",
        warning: "Once photos are deleted from the Recycle Bin, they generally cannot be recovered, so double-check the Recycle Bin is emptied only after you're confident about your choices.",
      },
      {
        title: "Empty the Recycle Bin to free up space",
        content: "After deleting duplicates, right-click the Recycle Bin icon on your desktop and select 'Empty Recycle Bin' to actually free up the storage space, since deleted files sit there temporarily rather than being removed right away.",
      },
    ],
  },
  {
    slug: "turn-on-rcs-messaging-iphone-android",
    title: "How to Turn On RCS Messaging Between iPhone and Android",
    excerpt: "Learn what RCS messaging is and how to turn it on so texts between iPhone and Android include read receipts, better photo quality, and typing indicators.",
    category: "communication",
    tags: ["rcs messaging", "texting", "iphone android", "imessage"],
    readTime: "5 min",
    thumbnailEmoji: "💬",
    publishedAt: "2026-07-20",
    lastVerifiedAt: "2026-07-20",
    difficulty: "Beginner",
    body: "RCS, short for Rich Communication Services, is a newer texting standard that improves on old-fashioned SMS text messages when messaging between an iPhone and an Android phone. With RCS turned on, messages between the two types of phones can include higher-quality photos and videos, typing indicators that show when the other person is writing a reply, read receipts, and messages sent over Wi-Fi instead of relying only on cell signal.\n\nBefore RCS support was added to iPhone, texts between iPhone and Android showed up as green bubbles with noticeably lower photo and video quality, and without any of these extra features. RCS doesn't replace iMessage between two iPhones — blue-bubble iMessage conversations already have similar features — but it significantly improves the experience specifically when texting between an iPhone and an Android phone.\n\nRCS needs to be turned on by both people in the conversation and requires both phones to be using a carrier and messaging app that supports it, which is now common but not universal. Source: support.apple.com/en-us/105580 and support.google.com/messages/answer/7189714.",
    steps: [
      {
        title: "Turn on RCS on iPhone",
        content: "Open Settings, tap Apps, tap Messages, and turn on 'RCS Messaging.' This option only appears on iPhones running a recent version of iOS and requires a supporting carrier.",
      },
      {
        title: "Turn on RCS (Chat features) on Android",
        content: "Open the Google Messages app, tap your profile picture, tap Messages settings, then tap 'RCS chats' and make sure it's turned on.",
      },
      {
        title: "Confirm it's working",
        content: "When texting between an iPhone and Android phone with RCS turned on for both, you should notice higher-quality photos, typing indicators, and read receipts compared to a standard green-bubble text.",
        tip: "The message bubble color on iPhone may still appear green for Android contacts even with RCS turned on — that's normal and doesn't mean it isn't working.",
      },
      {
        title: "Understand what RCS does not change",
        content: "RCS improves texting between iPhone and Android, but it doesn't turn on iMessage-exclusive features like Tapbacks appearing as text descriptions, or make Android messages show up as blue bubbles.",
      },
      {
        title: "Know that RCS messages aren't end-to-end encrypted in every case",
        content: "As of now, RCS conversations between an iPhone and an Android phone are not guaranteed to be end-to-end encrypted the way iMessage-to-iMessage or many Android-to-Android RCS chats are, so avoid sending highly sensitive information over any text conversation, regardless of phone type.",
      },
    ],
  },
];
