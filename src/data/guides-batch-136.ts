// guides-batch-136 — Content cycle 2026-05-15
// Topics: Medicare Open Enrollment 2026 online; iPhone Stolen Device Protection;
// Samsung Quick Share; turning off streaming auto-renew; spam phone call blocking 2026;
// Smart plug first-time setup; recovering a locked Google Account; senior-friendly Chrome browser settings.

import type { Guide } from './guides';

export const guidesBatch136: Guide[] = [
  {
    slug: 'medicare-open-enrollment-2026-online-step-by-step',
    title: 'Medicare Open Enrollment 2026 — How to Enroll Online, Step by Step',
    excerpt: 'Open Enrollment runs October 15 to December 7. Here is the plain-English walkthrough of comparing and choosing a plan at Medicare.gov.',
    category: 'government-civic',
    tags: ['medicare', 'open enrollment', 'medicare.gov', 'health insurance', 'seniors', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `Every fall, Medicare opens a window where you can switch plans, add prescription drug coverage, or move to a Medicare Advantage plan. The window is called Open Enrollment, and it runs from October 15 through December 7 every year. Any changes you make take effect on January 1 of the next year.

Doing this online at Medicare.gov is faster than calling — and you can compare prices, doctors, and prescription costs side by side. This guide walks through the whole process for 2026.

Before you start, have three things ready: your red, white, and blue Medicare card; a list of your prescription drugs with dosages; and a list of doctors and pharmacies you use. If you have those handy, the whole process takes about 20 minutes.

(Sources: Medicare.gov — official enrollment portal, medicare.gov; Centers for Medicare and Medicaid Services, cms.gov; AARP Medicare Resource Center, aarp.org/health/medicare)

Watch a walkthrough: search YouTube for "Medicare Plan Finder tutorial AARP" — AARP and Medicare.gov both post current-year demonstrations.`,
    steps: [
      {
        title: 'Create or sign in to your Medicare account',
        content: 'Open your web browser and go to medicare.gov. Click the orange "Log in / Create account" button in the top right. If you have not signed up before, click "Create account." You will need your Medicare number (the 11-character ID on your red, white, and blue card), your date of birth, your zip code, and an email address you can check. Medicare will email you a code to confirm the account. Write down your username and password somewhere safe — you will need them every year.',
        tip: 'Quick Tip: If you already have a Login.gov or ID.me account from another government service, Medicare lets you sign in with that instead. One less password to remember.',
      },
      {
        title: 'Add your prescription drugs',
        content: 'Once you are signed in, click "Find Health & Drug Plans." The site will ask if you take any prescription drugs. Click yes. Type each medication name into the search box — the site auto-fills brand names and generic names. For each one, pick the dosage (for example, 20 mg) and how often you take it (daily, twice daily). Add every prescription, even the cheap ones, because the plan comparison uses this list to estimate your yearly cost. Your drug list is saved to your account, so next year you only need to update it.',
        warning: 'Skipping drugs here is the number-one reason people pick the wrong plan. Even a $4 generic affects which plan is cheapest in some cases.',
      },
      {
        title: 'Add your pharmacy',
        content: 'After your drug list, the site asks which pharmacies you use. Pick up to two — usually one for everyday fills and one as a backup. Most plans have "preferred" pharmacies where drug prices are lower. CVS, Walgreens, Walmart, and most grocery store pharmacies are all in the system. If you use mail-order delivery, choose that as an option too — many plans give a 90-day supply by mail at the cheapest price.',
      },
      {
        title: 'Compare plans side by side',
        content: 'The site now shows you every Medicare plan available in your zip code. There are two main types to compare: (1) Original Medicare + a Part D drug plan (and optionally a Medigap supplement), or (2) Medicare Advantage plans (which bundle medical and drug coverage into one plan, often with extras like dental and vision). The plans are sorted by your estimated yearly cost — premiums plus expected drug costs. Click "Plan Details" on any plan to see what doctors are in-network, what your monthly premium is, what each drug costs, and the star rating (1 to 5 stars, with 5 being best).',
        tip: 'Quick Tip: A low premium with high drug costs can be more expensive than a higher-premium plan with cheap drugs. Always look at the "Estimated total yearly cost" column, not just the monthly premium.',
      },
      {
        title: 'Check that your doctors are in-network',
        content: 'For Medicare Advantage plans, this matters a lot — if your doctor is out-of-network, you may pay full price or not be covered. Click "View Plan Details" on a plan, then look for the "Find doctors and providers" or "Provider directory" link. Type in your doctor name. The directory tells you whether the doctor accepts that plan for 2026. Do this for every doctor you see at least once a year — primary care, specialists, anyone you do not want to lose. For Original Medicare, almost every doctor in the U.S. accepts it, so this step is less of a worry.',
        warning: 'Provider directories are not always up to date. Call the doctor office directly and ask "Do you accept [plan name] for 2026?" before you commit.',
      },
      {
        title: 'Enroll in the plan you chose',
        content: 'When you find the plan you want, click "Enroll" on its details page. Medicare.gov walks you through a short form — your name, Medicare number, address, and your effective date (January 1 if you enroll during Open Enrollment). You do not pay anything to enroll. The plan company will mail you a welcome packet and a new ID card within a few weeks. You can only be enrolled in one Medicare Advantage plan or one Part D drug plan at a time — enrolling in a new one automatically disenrolls you from the old one on January 1.',
      },
      {
        title: 'Save your confirmation and write down the dates',
        content: 'After you enroll, Medicare.gov gives you a confirmation number. Write it down or take a screenshot — keep it in a folder with your Medicare card. The confirmation number is your proof of enrollment in case anything goes wrong. Mark January 1 on your calendar — that is when the new plan starts. Cancel any auto-payments to your old plan if you switched. Throw away (or shred) old ID cards on January 1, so you do not accidentally hand them to a doctor.',
      },
      {
        title: 'Get free help if you get stuck',
        content: 'Every state has a free Medicare counseling program called SHIP (State Health Insurance Assistance Program). SHIP counselors are trained, unbiased, and do not sell anything. Find your local SHIP by calling 1-877-839-2675 or going to shiphelp.org. AARP also has a free Medicare hotline at 1-877-227-1620 — they can walk you through the plan comparison over the phone if you prefer not to use the website. Both services are free for everyone, including non-AARP members.',
        tip: 'Quick Tip: Avoid the unsolicited phone calls and TV commercials that say "Compare plans now!" Many of those go to insurance brokers paid commission for steering you to specific plans. SHIP and AARP have no financial stake.',
      },
    ],
  },
  {
    slug: 'stolen-device-protection-iphone-turn-on-2026',
    title: 'iPhone Stolen Device Protection — Turn It On Today (2026 Guide)',
    excerpt: 'A thief who watches you type your passcode can lock you out of your accounts in minutes. Apple\'s free Stolen Device Protection stops that cold.',
    category: 'safety-guides',
    tags: ['iphone', 'theft', 'security', 'stolen device protection', 'face id', 'apple id'],
    readTime: '5 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `In early 2024 a Wall Street Journal investigation revealed a scary trend: thieves were watching people type their iPhone passcode in bars and restaurants, then snatching the phone. With just the passcode, the thief could reset the Apple ID password, lock the owner out of iCloud, drain bank accounts, and erase Find My. The whole thing took less than two minutes.

Apple's response was Stolen Device Protection, a free setting that adds a second layer of security when your iPhone is away from familiar places like home or work. With it on, a thief who knows your passcode still cannot change your Apple ID, view saved passwords, or wipe the phone. They have to wait an hour and then do Face ID, which they cannot fake.

As of 2026 this feature is on iOS 17.3 and every version since. If you have an iPhone, you should have this on. This guide shows you how — it takes about 60 seconds.

(Sources: Apple Support — Stolen Device Protection, support.apple.com/118021; Wall Street Journal "iPhone Thieves Drain Bank Accounts" investigation; FTC Consumer Alert on phone theft, consumer.ftc.gov)

Watch a demo: search YouTube for "Apple Stolen Device Protection setup" — Apple Support's official channel has a short walkthrough.`,
    steps: [
      {
        title: 'Check your iPhone is running iOS 17.3 or later',
        content: 'Open Settings, tap General, then tap About. Look at the "iOS Version" line. You need 17.3 or higher — by 2026 most iPhones are on iOS 18 or iOS 26, so you are almost certainly fine. If you see anything lower, go back to General → Software Update and install the update first. This setting does not exist on older versions.',
      },
      {
        title: 'Make sure Face ID or Touch ID and Find My are turned on',
        content: 'Stolen Device Protection only works if Face ID (or Touch ID on older iPhones) and Find My are both turned on. Check Face ID: Settings → Face ID & Passcode → enter your passcode → make sure "iPhone Unlock" is on. Check Find My: Settings → tap your name at the top → Find My → Find My iPhone → make sure all three switches are on (green). If any are off, turn them on now.',
      },
      {
        title: 'Turn on Stolen Device Protection',
        content: 'Now the main step. Open Settings → Face ID & Passcode → enter your passcode. Scroll down to "Stolen Device Protection." Tap "Turn On Protection." You will see a screen explaining what it does. Tap "Turn On Protection" again to confirm. That is it. The protection is now active.',
        tip: 'Quick Tip: You can set the security delay to "Always" (always requires the 1-hour wait + Face ID for sensitive changes) instead of just "Away from familiar locations." If you are willing to wait an hour even at home, "Always" is the most secure setting. Most people leave it on the default.',
      },
      {
        title: 'Understand what it now blocks',
        content: 'With Stolen Device Protection on, when your iPhone is away from familiar locations (home, work), these actions require Face ID or Touch ID — NOT your passcode — and have an hour security delay: changing your Apple ID password, turning off Find My, factory-erasing the iPhone, viewing saved Wi-Fi or website passwords, and using saved payment methods on autofill. A thief who watched you type your passcode cannot do any of these things. They have to wait an hour, fail Face ID, and try again — at which point you have time to mark the phone lost from iCloud.com.',
      },
      {
        title: 'Practice locking your phone remotely (so you know how)',
        content: 'If your phone is ever stolen, the fastest response is to mark it as lost from any computer. Open a web browser, go to iCloud.com/find, sign in with your Apple ID, and click your iPhone in the list. You will see options for "Play Sound," "Lost Mode," and "Erase This Device." Lost Mode locks the phone with a passcode of your choosing and lets you display a message and phone number on the lock screen. Practice this once now from your home computer so you know exactly where to click in an emergency.',
        warning: 'Do NOT click "Erase This Device" first — once erased, you lose the ability to track it. Always Lost Mode first.',
      },
      {
        title: 'Cover your screen when typing your passcode in public',
        content: 'Stolen Device Protection is a strong second line of defense, but the first line is still: do not let strangers see your passcode. In bars, restaurants, and on public transit, cup your hand over the screen when typing it. Better yet, use Face ID or Touch ID in public so you never type the passcode at all. The thieves in the WSJ investigation worked in pairs — one watched, one snatched. Hiding your passcode kills the whole scheme.',
        tip: 'Quick Tip: If you only use Face ID, change your passcode to a long alphanumeric password (Settings → Face ID & Passcode → Change Passcode → Passcode Options → Custom Alphanumeric Code). Even if a thief sees you type it once, the long random characters are nearly impossible to memorize at a glance.',
      },
      {
        title: 'If your phone is stolen — the first 10 minutes',
        content: 'Speed matters. From a friend\'s phone or any computer: (1) Go to iCloud.com/find, sign in, and put the phone in Lost Mode. (2) Change your Apple ID password at appleid.apple.com. (3) Call your bank and freeze any cards stored in Apple Pay. (4) File a police report — most departments take them by phone for stolen phones. Stolen Device Protection buys you time, but the thief is still trying. Acting in the first 10 minutes locks them out completely.',
      },
    ],
  },
  {
    slug: 'samsung-quick-share-galaxy-phones-2026',
    title: 'Samsung Quick Share — Send Photos Between Galaxy Phones in Seconds',
    excerpt: 'Quick Share is the Samsung answer to AirDrop. Here is how to use it to send photos, videos, and files between Galaxy phones with no Wi-Fi or text needed.',
    category: 'phone-guides',
    tags: ['samsung', 'galaxy', 'quick share', 'android', 'photo sharing', 'file transfer'],
    readTime: '5 min',
    thumbnailEmoji: '📤',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `If you have a Samsung Galaxy phone and so does someone you want to send photos to — a grandchild, a friend, anyone in the room — you do not need text messaging, email, or Wi-Fi. Samsung built a free system called Quick Share that beams files between phones directly. It is fast (a 20-photo album moves in about 10 seconds), free, and quality stays full. Texting photos shrinks them; Quick Share does not.

Quick Share works between any two Samsung Galaxy phones from 2021 and later. As of 2024, Samsung and Google merged their sharing systems, so Quick Share now also works with Google Pixel phones, Chromebooks, and some Windows laptops. The interface looks the same as Google's old Nearby Share.

This guide walks through sending photos, accepting photos coming in, and the one setting that matters: who is allowed to send to your phone.

(Sources: Samsung Support — Quick Share, samsung.com/us/support; Google Support — Quick Share, support.google.com/android)

Watch a walkthrough: search YouTube for "Samsung Quick Share tutorial" — the official Samsung US channel has a current video.`,
    steps: [
      {
        title: 'Turn on Bluetooth and Wi-Fi on both phones',
        content: 'Quick Share uses Bluetooth to find nearby phones, then switches to Wi-Fi for the actual transfer (much faster than Bluetooth alone). Both phones need both turned on. Pull down from the top of the screen with two fingers to open Quick Settings. Make sure the Bluetooth tile and Wi-Fi tile are both highlighted. You do not need to be on the same Wi-Fi network — the phones make a direct connection between themselves.',
      },
      {
        title: 'Open the photo you want to send',
        content: 'Open the Gallery app (or Samsung Photos, or Google Photos — any photo app works). Tap a photo to open it full-screen. To send more than one, look for a "Select" button — tap it, then tap each photo you want to include. The corner of each tapped photo gets a checkmark. You can pick a few photos or 50 at once.',
      },
      {
        title: 'Tap Share, then Quick Share',
        content: 'Tap the Share icon (looks like an arrow pointing up out of a box, or three connected dots in older versions). A sheet slides up showing different ways to send the photos. Tap "Quick Share." Your phone starts scanning for nearby devices. If you see the recipient name on a circle or tile, tap it. That is the send.',
      },
      {
        title: 'On the receiving phone — accept the share',
        content: 'The person receiving the photos will see a notification at the top of their screen: "[Your name] wants to share." They tap "Accept." The photos download in seconds and appear in their Gallery app under a folder called "Quick Share." That is the entire receiving side — no app to open, no link to tap, no signup.',
        tip: 'Quick Tip: Tell the recipient ahead of time to "watch for the notification." First-time users sometimes miss it because the notification only stays on screen for a few seconds. They can also pull down from the top to see it again.',
      },
      {
        title: 'Set who can send to you (important privacy setting)',
        content: 'By default, Quick Share is set to "Contacts only" — meaning random strangers cannot beam things to you. To check, pull down Quick Settings, long-press the Quick Share tile, and you will see three options: (1) No one — Quick Share is off for incoming. (2) Contacts only — only people you have saved in Contacts can send. (3) Everyone — anyone nearby for the next 10 minutes. Leave it on Contacts only for daily use. Switch to Everyone temporarily when you are meeting someone new who needs to send you photos.',
        warning: 'Never leave Quick Share on "Everyone" permanently in public — at airports and concerts, strangers can spam you with photos. Always switch back to Contacts only when you are done.',
      },
      {
        title: 'Send to a non-Samsung phone (Pixel, Chromebook, Windows)',
        content: 'Since 2024, Quick Share also works between Galaxy phones and Pixel phones (which call it the same thing) and Chromebooks. On the receiving Pixel, make sure Quick Share is on: Settings → Connected devices → Connection preferences → Quick Share → turn on. Then the steps are identical — your Galaxy will see the Pixel as a nearby device. For Windows, install the free "Quick Share from Google" app on the laptop, sign in with the same Google account on your phone, and the laptop shows up in the Quick Share list.',
      },
      {
        title: 'Use Quick Share for files other than photos',
        content: 'Quick Share is not just for photos. Open any file — a PDF, a Word document, a song, a video, even a contact card — tap Share, then Quick Share. The recipient gets the file in their Downloads folder (or Gallery, for media). Real uses: sharing a grocery list with your spouse, sending your insurance card photo to a family member, beaming a recipe video to grandma. No data plan needed, no text size limits, no quality loss.',
        tip: 'Quick Tip: You can also Quick Share to yourself between your own devices. If you have both a Galaxy phone and a Galaxy tablet, sign in to Samsung Account on both — your other device shows up as "Your devices" at the top of the share list, and the transfer is automatic with no accept needed.',
      },
    ],
  },
  {
    slug: 'turn-off-auto-renew-streaming-subscriptions-2026',
    title: 'How to Turn Off Auto-Renew on Streaming Subscriptions (2026)',
    excerpt: 'Netflix, Disney+, Hulu, and the rest all renew automatically until you cancel. Here is exactly where to click on each service.',
    category: 'financial-tech',
    tags: ['streaming', 'subscriptions', 'cancel', 'auto-renew', 'netflix', 'disney plus', 'hulu', 'budget'],
    readTime: '6 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `The average American household pays for 4-5 streaming services and watches maybe 2 of them regularly. The rest auto-renew silently every month — $7 here, $15 there — adding up to several hundred dollars a year for shows nobody opens.

Every streaming service has a way to turn off auto-renew so the account ends on the next billing date. You keep what you already paid for through the end of the month, then it stops charging. No phone calls, no chat agents, no hidden fees. Most companies make the button hard to find on purpose — this guide walks you to each one.

The other reason to know how: if your card was stolen and replaced, services keep trying to charge and start sending you "Update payment" emails. Turning off auto-renew stops those emails too.

(Sources: FTC Click to Cancel rule (final 2024), ftc.gov/click-to-cancel; Consumer Reports streaming guides, consumerreports.org; each service's official help center.)

Watch a walkthrough: search YouTube for "how to cancel Netflix Disney Plus Hulu 2026" — Consumer Reports posts updated tutorials each year.`,
    steps: [
      {
        title: 'List everything you are paying for first',
        content: 'Before cancelling, get the full list. On iPhone: Settings → tap your name at the top → Subscriptions. Every iPhone-based subscription is listed with the next renewal date. On Android: open the Play Store → tap your profile photo → Payments & subscriptions → Subscriptions. For services not billed through your phone (Netflix, most streaming), look at your bank or credit card statement from the last month and search for recognizable names. Write the whole list on paper — you will want it.',
        tip: 'Quick Tip: Apps like Rocket Money and Bobby (free) scan your bank statement and find every subscription automatically. Worth running once a year.',
      },
      {
        title: 'Netflix',
        content: 'Open a web browser and go to netflix.com. Sign in. Click your profile picture (top right) → "Account." Scroll to "Membership & Billing." Click "Cancel Membership." Confirm. Netflix keeps your account active through the end of the current billing period — you do not lose access immediately. If you change your mind in the next 10 months, your viewing history and downloads come back automatically when you restart.',
      },
      {
        title: 'Disney+ / Hulu / ESPN+ (the Disney bundle)',
        content: 'These three share one account now. Go to disneyplus.com (or hulu.com — same login) → sign in → click your profile picture → Account → under "Subscription" click "Cancel Subscription." Disney makes you click through a few "Are you sure?" pages — keep going. Access continues through the end of the billing period. If you subscribed through the Apple App Store or Google Play, you have to cancel on the phone instead (Settings → Subscriptions on iPhone; Play Store → Subscriptions on Android).',
        warning: 'If you signed up for Disney+ through Verizon or another bundle, you usually have to cancel through Verizon, not Disney. Check the email confirmation that came when you signed up to find the right place.',
      },
      {
        title: 'HBO Max / Max',
        content: 'Go to max.com → sign in → click your profile picture → "Subscription" → "Manage Subscription" → "Cancel Subscription." Confirm. Max often offers a "30% off if you stay" deal on this page — read it carefully before clicking through. Access continues until the end of the current billing period. Same as Disney, if you signed up through Apple or Google, cancel in your phone Settings instead.',
      },
      {
        title: 'Amazon Prime Video',
        content: 'Prime Video usually comes with Amazon Prime. If you want to keep Prime (for free shipping) but stop Prime Video, you cannot — they are bundled. To cancel all of Amazon Prime: amazon.com → Account & Lists → Memberships and Subscriptions → Amazon Prime → "End Membership." If you only have Prime Video standalone, the same path works. If you subscribe to a separate Prime Video channel (like Paramount+, BritBox, AMC+), each channel has its own cancel link on the same page.',
      },
      {
        title: 'Apple TV+',
        content: 'On iPhone or iPad: Settings → tap your name → Subscriptions → "Apple TV+" → "Cancel Subscription." On a Mac: open the TV app → Account menu → View My Account → Settings → Subscriptions → Manage → Cancel. On a Windows PC or web browser: tv.apple.com → click your profile picture → Settings → Subscriptions → Cancel. Apple TV+ frequently offers a free month to lure you back — read carefully before accepting.',
      },
      {
        title: 'Peacock, Paramount+, Discovery+, AMC+, Britbox, Acorn',
        content: 'Same pattern for all of them: go to the service\'s website → sign in → click your profile/account → look for "Plan," "Subscription," or "Membership" → "Cancel" button is at the bottom of that page. The FTC\'s Click to Cancel rule (finalized in 2024) requires that cancelling be as easy as signing up — so the button must be on the website, not just by phone. If a service hides the button or forces a phone call, that is a violation and you can report it at reportfraud.ftc.gov.',
      },
      {
        title: 'Replace a stolen card without losing access (the trick)',
        content: 'If your card is replaced and you do not want any streaming service to renew, do nothing — they will all fail to charge and put your account in a paused state for 7-30 days. After that, they cancel automatically. This is the lazy person\'s mass cancellation. The only catch: you lose access immediately when each charge fails, not at the end of the billing month. Use this trick only if you genuinely want to cancel.',
        tip: 'Quick Tip: A separate "subscription debit card" through Privacy.com (free for personal use) lets you create a virtual card just for subscriptions. Cancel a service by deleting the virtual card — no website hunting needed.',
      },
    ],
  },
  {
    slug: 'spam-phone-call-blocker-iphone-2026',
    title: 'Spam Phone Call Blocker for iPhone — The 2026 Setup',
    excerpt: 'Silence unknown callers. Block scam numbers automatically. Here is the three-setting combo that ends most spam calls on iPhone.',
    category: 'safety-guides',
    tags: ['spam calls', 'iphone', 'robocall', 'silence unknown callers', 'phone safety', '2026'],
    readTime: '5 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `The FCC estimates Americans get 33 spam calls per person per month. Robocalls, scammers pretending to be the IRS, "your car warranty is about to expire" — they all use spoofed phone numbers that look like real local numbers.

iPhone has three free settings that, used together, block almost all of them. Add a free third-party app like Hiya or Truecaller and you can knock spam calls down to maybe one a week. The whole setup takes 5 minutes and costs nothing.

This guide walks through the three iPhone settings, the call-blocking apps that work with iOS in 2026, and what to do when a real number you do not recognize gets blocked by accident.

(Sources: FCC Consumer Help — Stop Unwanted Robocalls, fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts; Apple Support — Silence unknown callers, support.apple.com/HT207099)

Watch the setup: search YouTube for "iPhone silence unknown callers 2026" for a quick demo.`,
    steps: [
      {
        title: 'Turn on Silence Unknown Callers (the big one)',
        content: 'Open Settings → scroll down to Phone (or "Apps" → Phone on iOS 18 and 26) → "Silence Unknown Callers" → turn it on. From now on, any caller who is not in your Contacts, not in your recent outgoing calls, and not in Siri Suggestions (people you have messaged or emailed) will not ring your phone. They go straight to voicemail. You still see a missed call notification, so you know they called — they just cannot interrupt you. Real callers leave voicemails. Spammers usually do not.',
        warning: 'If you are expecting a call from a number you do not know (a doctor, a delivery driver, a job interview), turn this OFF for the day. Then turn it back on. Important real calls do get silenced sometimes — the trade-off is fewer spam interruptions.',
      },
      {
        title: 'Turn on Call Identification (Carrier-level Scam Likely)',
        content: 'All four major U.S. carriers — Verizon, AT&T, T-Mobile, Spectrum Mobile — now show "Scam Likely" or "Spam Risk" on incoming calls they identify as fake. This is free and on by default for new accounts but sometimes turned off on older accounts. To check: Verizon — open the Verizon Call Filter app (free), tap Settings, turn on "Spam Filter." AT&T — open the AT&T ActiveArmor app, turn on "Block likely spam." T-Mobile — open the T-Mobile Scam Shield app, turn on "Scam Block." Once on, calls labeled Scam Likely either show a warning when they ring or get blocked entirely (your choice in the app).',
      },
      {
        title: 'Block individual numbers as they call',
        content: 'When a spam call comes through that is not caught by the first two filters, block the number manually. Open the Phone app → Recents → tap the small "i" in a blue circle next to the number → scroll down → tap "Block this Caller." Confirm. That number can never call or text you again. You can also block from Messages — tap the contact name at the top → tap the info icon → Block this Caller. To see your full block list later: Settings → Phone → Blocked Contacts.',
        tip: 'Quick Tip: Most spammers use a different number every call (called number spoofing). Blocking one stops that exact number but not the same person calling from another. Combine this with the other steps for full coverage.',
      },
      {
        title: 'Install a call-blocking app (the boost)',
        content: 'Free third-party apps maintain a huge crowdsourced database of known scam numbers and block them before they ring. Two work well in 2026: Hiya (the official app for Verizon Call Filter) and Truecaller. Install one from the App Store. Open it, sign up with your phone number, then turn on the "Call Blocking & Identification" permission when iPhone asks. After that, the app does its work in the background. Whenever a known scammer calls, you see "Scam Likely" instead of a phone number — and the call usually gets silenced.',
        warning: 'Avoid free call blockers that ask for your contact list. The reputable ones (Hiya, Truecaller, Robokiller) work fine without uploading your contacts. If an app demands contact access on first launch, delete it.',
      },
      {
        title: 'Check your voicemail for important silenced calls',
        content: 'Once a day, check your voicemail and the "Missed Calls" list in the Phone app. Most real callers leave a message. If you see a missed call from an unknown number with no voicemail, it was almost certainly spam — ignore it. If a real caller (a doctor, a relative) was silenced and did not leave a message, they will try again. You can call them back if they show up in Recents.',
        tip: 'Quick Tip: Set up a custom voicemail greeting that says "Please leave a name and number so I can call you back." This trains real callers to leave a message and weeds out spammers, who rarely leave anything.',
      },
      {
        title: 'Add yourself to the Do Not Call list',
        content: 'The FTC runs a free national Do Not Call Registry. Real businesses (telemarketers, charities) must remove you within 31 days. Scammers ignore it, but the registry catches every legitimate sales call. Sign up at donotcall.gov — takes 30 seconds, only need an email address. You can add up to three phone numbers per email. Once registered, real telemarketing calls drop noticeably within a month.',
      },
      {
        title: 'Report a scam call to make it stop for everyone',
        content: 'Reporting a scammer helps the FTC and FCC track them down. Two minutes per report. (1) ReportFraud.ftc.gov — fill out the short form. Include the number, what they said, and when. (2) Your phone carrier — text "7726" (spells SPAM) and forward the scam number. Carriers use these reports to add numbers to their Scam Likely databases. (3) The FCC at fcc.gov/complaints if a robocall violated rules (no consent, fake caller ID).',
      },
    ],
  },
  {
    slug: 'smart-plug-first-time-setup-2026',
    title: 'Setting Up a Smart Plug for the First Time — Plain English (2026)',
    excerpt: 'A smart plug turns any lamp or coffee maker into something you can control by voice or schedule. Here is the full setup in 10 minutes.',
    category: 'smart-home',
    tags: ['smart plug', 'alexa', 'google home', 'smart home', 'matter', 'setup'],
    readTime: '7 min',
    thumbnailEmoji: '🔌',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `A smart plug is a small adapter that goes between your wall outlet and any regular appliance — a lamp, a coffee maker, a fan, holiday lights. Once it is set up, you can turn that appliance on or off by saying "Hey Alexa, turn on the lamp," or have it switch on automatically at sunset, or shut off after 30 minutes when you leave the house.

In 2026 most smart plugs use a standard called Matter, which means they work with Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings — pick whichever assistant you already use. The plugs cost $8-$15 each. Brands like TP-Link Kasa, Wyze, Amazon Basics, and Govee are reliable for beginners.

This guide walks through the whole setup — what to buy, how to plug it in, and how to start saying "Hey Alexa" or "Hey Google" to control it. No previous smart home experience required.

(Sources: Matter standard overview, csa-iot.org/all-solutions/matter; Amazon Alexa setup guide, alexa.amazon.com; Google Home setup, support.google.com/googlehome)

Watch a walkthrough: search YouTube for "TP-Link Kasa smart plug setup 2026" for a hands-on demo with a popular model.`,
    steps: [
      {
        title: 'Pick a smart plug that fits your phone and assistant',
        content: 'If you already have an Amazon Echo or Alexa-enabled device, get a plug labeled "Works with Alexa." If you have a Google Nest speaker, "Works with Google Home." Apple users with HomePod or an iPhone, "Works with Apple HomeKit." Any plug labeled "Matter" works with all three — that is the safe choice if you are not sure. For a first plug, a 2-pack of TP-Link Kasa plugs (about $20 for the pair) is a great start. Buy it from a major retailer (Amazon, Best Buy, Target) so returns are easy.',
        tip: 'Quick Tip: Smart plugs with energy monitoring (Kasa EP25, Govee Energy) cost a few dollars more and tell you how much electricity each appliance uses. Worth it for big appliances like space heaters.',
      },
      {
        title: 'Download the right app before you unbox the plug',
        content: 'Before you plug anything in, download the app the plug needs. Each brand has its own. Kasa = "Kasa Smart" (TP-Link). Wyze = "Wyze." Amazon Basics smart plug = "Amazon Alexa." Govee = "Govee Home." Apple HomeKit plugs use the built-in Apple Home app. Install the app on your phone (App Store on iPhone, Play Store on Android). Open it, tap "Sign Up," create an account with your email — you will need it to be signed in for setup.',
      },
      {
        title: 'Plug in the smart plug and watch for the blinking light',
        content: 'Put the smart plug into a wall outlet — pick one near where you want to use it for now (you can move it later). Within a few seconds, a small LED light on the plug should start blinking blue, green, or amber. Blinking means "I am ready to be set up." If it does not blink, hold down the power button on the side of the plug for 10 seconds — that resets it to setup mode.',
      },
      {
        title: 'Open the app and add the plug',
        content: 'In the brand app you downloaded, tap "Add Device" or "+ Add" (usually a plus icon top-right). Pick the type — "Smart Plug" or just the plug model. The app will ask you to type your home Wi-Fi name and password. Type them in carefully — capital letters matter. The app will scan for the plug. Within 30 seconds the blinking light turns solid (usually blue), which means the plug joined your Wi-Fi. The app gives you a chance to name it — call it something obvious like "Living Room Lamp" or "Coffee Maker." That name is what you will say to your voice assistant.',
        warning: 'Smart plugs only work on 2.4 GHz Wi-Fi (not 5 GHz). Most home routers broadcast both at the same name, so this is invisible. But if setup fails, log in to your router and check that you have a 2.4 GHz network on. Most ISPs (Spectrum, Xfinity, Verizon) have both on by default.',
      },
      {
        title: 'Test it from the app first',
        content: 'In the app, tap the plug name. You see a big On/Off button. Tap it. The lamp (or whatever you plugged into the smart plug) turns on. Tap again — it turns off. If this works, you are 90 percent done. If the lamp does not respond, make sure the lamp\'s own switch is in the ON position. The smart plug controls power to the outlet — the lamp needs its own switch flipped on for the magic to work.',
        tip: 'Quick Tip: Pick lamps that turn on the moment they get power (most standard table lamps) rather than fancy touch-sensitive lamps. Touch lamps reset their state when power cuts off and can be unpredictable with smart plugs.',
      },
      {
        title: 'Connect to your voice assistant (Alexa example)',
        content: 'Open the Amazon Alexa app on your phone → tap "More" at the bottom right → "Skills & Games" → search the brand name (Kasa, Wyze, Govee, etc.) → tap the skill → tap "Enable to Use." Sign in with the brand account you made earlier. Alexa will discover the plug in about 30 seconds and add it to your device list. Now say "Hey Alexa, turn on the Living Room Lamp." The lamp turns on. For Google Home: open Google Home app → tap "+" → "Set up device" → "Works with Google" → search the brand. For Apple HomeKit: open the Home app → tap "+" → "Add Accessory" → scan the QR code on the plug.',
      },
      {
        title: 'Set up a schedule (the real magic)',
        content: 'Schedules are why smart plugs are useful even if you never say "Hey Alexa." Open the brand app, tap the plug, tap "Schedule" or "Routines." Add a schedule: "Turn ON at sunset, turn OFF at 11:00 PM." Now your porch light, hallway lamp, or holiday tree turns on and off automatically every day, every night, with no thought. You can also set "vacation mode" that randomly varies the times — makes the house look lived in while you are away. Schedules survive Wi-Fi outages (the plug remembers them), unlike voice control which needs the internet.',
        tip: 'Quick Tip: Set a "good morning" schedule that turns on the coffee maker at 6:30 AM. Coffee is brewing before you get out of bed.',
      },
      {
        title: 'Troubleshooting — when the plug stops responding',
        content: 'Smart plugs occasionally drop off Wi-Fi (after a router reboot, or weak signal). Fixes in order: (1) Unplug the smart plug, wait 30 seconds, plug it back in. (2) Force-close the brand app and reopen it. (3) Open the app, find the plug, tap Settings → "Re-connect to Wi-Fi" or similar. (4) Last resort — hold the side button for 10 seconds to reset, then run setup again. If a plug keeps dropping off, the Wi-Fi signal in that part of the house may be weak — try moving the plug to a different outlet, or get a Wi-Fi extender.',
      },
    ],
  },
  {
    slug: 'recover-locked-google-account-2026',
    title: 'Recover a Locked Google Account in 2026 — The Full Walkthrough',
    excerpt: 'Forgot your password? Lost your phone with the 2-factor code? Here is exactly what Google asks for, and what to do if the first try fails.',
    category: 'essential-skills',
    tags: ['google account', 'password recovery', 'gmail locked out', 'account recovery', '2026'],
    readTime: '7 min',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `Getting locked out of your Google Account is one of the worst tech problems because it locks you out of so much — Gmail, Google Photos, YouTube history, anything you signed in to with "Sign in with Google," and any subscription tied to that email. The good news: Google has a free, automated recovery system. The bad news: it works in stages, and if you fail one stage you have to wait 24-48 hours before the next try.

This guide walks you through the recovery process in the order Google actually does it, what each question is really asking, and what to do when the system says no. Most people get back in within an hour if they go in calm and answer carefully.

Two things make recovery much easier if you set them up BEFORE losing access: a recovery phone number and a recovery email. If you can still get in right now, add both at myaccount.google.com — it takes 60 seconds and saves you from this guide.

(Sources: Google Account Help — Account Recovery, support.google.com/accounts/answer/7682439; Google Safety Center, safety.google)

Watch the recovery flow: search YouTube for "Google account recovery 2026" for current screen-by-screen demos.`,
    steps: [
      {
        title: 'Start at the official recovery page (not a Google search)',
        content: 'Open a web browser and type accounts.google.com/signin/recovery directly in the address bar. Do not Google "google account recovery" — the first results are sometimes scam sites that look identical. The real page starts by asking for your email address (the one you are recovering). Type it carefully. Click Next.',
        warning: 'If a recovery site asks for your credit card, your Social Security number, or a fee — leave immediately. Google account recovery is 100% free and never asks for payment.',
      },
      {
        title: 'Try your most recent password first',
        content: 'Google asks for "the last password you remember using." Take your time and think — many people remember it under pressure. If you are not sure, try the one you would have set most recently. Even a partially correct password helps Google trust that you are the real owner. If you have no idea, click "Try another way." Do not random-guess — too many wrong attempts trigger a longer waiting period.',
        tip: 'Quick Tip: Look for saved passwords in your browser. Chrome → three-dot menu → Settings → Autofill → Passwords. Edge → Settings → Profiles → Passwords. Safari → Preferences → Passwords. Often the password is sitting there from years ago.',
      },
      {
        title: 'Use your recovery phone (the easiest path back in)',
        content: 'If you set up a recovery phone number, Google will text or call it with a 6-digit code. Tap "Send code." Pick up your phone — the text comes in 30 seconds. Type the code on the recovery page. If the code works, Google takes you to a "Reset your password" screen. Pick a new password (something different from old ones, 12+ characters), confirm it, and you are back in. The whole thing takes 2-3 minutes.',
      },
      {
        title: 'Use your recovery email',
        content: 'If your recovery phone is not available — or you never set one — Google offers to send a code to a recovery email address you previously added. The code goes to that other email instantly. Open it on another device or in a different browser tab. Type the 6-digit code on the Google recovery page. Same result: you reach the password reset screen.',
      },
      {
        title: 'Answer the trusted-device questions',
        content: 'If you have no working phone or recovery email, Google falls back to "Were you signed in on another device recently?" If you are signed in to Gmail on an iPad, an old phone, or a computer, Google sends a "Yes, this is me" prompt to that device. Tap Yes — recovery proceeds. Look around your house for any device that might still be signed in to your Google account: an old phone in a drawer, a laptop you never log out of, even a smart TV. Sign-in prompts arrive on all of them.',
        tip: 'Quick Tip: If you see a Google sign-in prompt on a device but it asks for the password you forgot, tap "Forgot password" right on that device — sometimes the device itself has a path back in that the web recovery does not offer.',
      },
      {
        title: 'When Google asks the hard questions — accuracy matters',
        content: 'If no recovery phone, email, or device works, Google asks identity questions: when did you create the account (year and month), what was your first password, give the email addresses of 3 people you message often, name two Google services you use (YouTube, Drive, Photos, etc.). Answer as accurately as you can — guesses lower your trust score. If you are not sure, "I do not know" is better than a wrong answer in some cases (Google\'s algorithm weights uncertainty differently than wrong confidence). Submit. Google reviews the answers automatically and replies within minutes to 48 hours.',
        warning: 'After this step, do not submit again immediately if you fail. Each rapid retry lowers your trust score and may lock recovery for 24+ hours.',
      },
      {
        title: 'If Google says no — try from a familiar device and location',
        content: 'The single biggest factor in passing recovery is doing it from a device and Wi-Fi you have used to sign in before. Google tracks "this is a known computer for this account." If you are recovering from your usual home computer on your usual home Wi-Fi, you will pass much more easily. If you are at a friend\'s house or on hotel Wi-Fi, the system is much more cautious. Go home if you can. Use your usual web browser. Then try again.',
      },
      {
        title: 'Set up recovery options the moment you are back in',
        content: 'Once you are signed in, immediately go to myaccount.google.com → Security → "Ways we can verify it is you." Add: (1) Recovery phone — your cell number. (2) Recovery email — a spouse or family member email works as backup. (3) Two-step verification with an authenticator app (Google Authenticator, Authy). (4) At least 8 backup codes — print them and put them in your wallet or safe. This combination makes future recovery a 60-second job, not a multi-day ordeal.',
        tip: 'Quick Tip: Add a passkey to your account at myaccount.google.com/signinoptions/passkeys. A passkey on your phone replaces the password entirely — Face ID or Touch ID alone is enough to sign in. Free, more secure, and harder to forget.',
      },
    ],
  },
  {
    slug: 'senior-chrome-browser-settings-2026',
    title: 'Senior-Friendly Chrome Browser Settings — Make the Web Easier (2026)',
    excerpt: 'Bigger text, easier zoom, no autoplay videos. Eight Chrome settings that make the internet much friendlier for older eyes.',
    category: 'essential-skills',
    tags: ['chrome', 'browser settings', 'seniors', 'accessibility', 'font size', 'zoom'],
    readTime: '6 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-05-15',
    lastVerifiedAt: '2026-05-15',
    difficulty: 'Beginner',
    body: `Google Chrome is the most-used web browser in the world, which means most websites are designed to look fine in default Chrome. The default settings, however, are tuned for younger eyes with sharp monitors. A few small changes — bigger font, higher zoom, autoplay turned off, dark mode at night — make Chrome dramatically friendlier for older adults, anyone with vision changes, and frankly most people over 50.

This guide walks through eight settings, each with a one-sentence reason and the exact clicks. Total time to apply all of them: about 5 minutes. Settings sync to your other devices if you are signed in to Chrome with a Google account.

These steps work on Chrome for Windows, Mac, and Chromebook in 2026. iPhone and Android Chrome have most of the same options under Settings inside the app.

(Sources: Google Chrome Help, support.google.com/chrome; AARP Digital Skills guides, aarp.org/home-family/personal-technology)

Watch a walkthrough: search YouTube for "Chrome settings for seniors 2026" for screen-by-screen demos.`,
    steps: [
      {
        title: 'Set a larger default font size',
        content: 'Open Chrome → click the three-dot menu in the top right → Settings → in the left sidebar, click "Appearance." Find the "Font size" dropdown. Default is "Medium." Change it to "Large" or "Very Large." Every website you visit immediately shows in bigger text. This is the single biggest improvement for daily web reading. If you want even more control, click "Customize fonts" right below — you can set separate sizes for body text, headings, and minimum allowed size (set the minimum to 16 or 18 to block tiny print everywhere).',
        tip: 'Quick Tip: On Chrome for iPhone or Android, the same setting is at: tap the three-dot menu → Settings → Accessibility → Text scaling. Slide to 150% or higher.',
      },
      {
        title: 'Turn on page zoom for all sites',
        content: 'In the same Appearance section, find "Page zoom." Default is 100%. Change it to 110% or 125%. Now every site loads at that zoom level by default. If a specific site looks too big, press Ctrl+minus (or Cmd+minus on Mac) to zoom out for just that one site — Chrome remembers per-site zoom. Press Ctrl+0 to reset a site to default. Page zoom is different from font size — it scales the whole layout, including images and buttons.',
      },
      {
        title: 'Block autoplay videos (the news site fix)',
        content: 'Many news sites auto-play a video the moment you load the page, with sound. Turn this off: Chrome menu → Settings → "Privacy and security" → "Site settings" → scroll down to "Additional content settings" → "Sound." Choose "Don\'t allow sites to play sound." Now websites can play silent autoplay videos, but no sound until you click the speaker icon on a site. If you want to allow specific sites (YouTube, a podcast page), add them to the "Allowed to play sound" list on the same screen.',
        warning: 'If you completely block media (the "Media" setting), some sites (Zoom, Google Meet, YouTube) will not work right. Sound blocking is safer than full media blocking.',
      },
      {
        title: 'Turn on dark mode for evening reading',
        content: 'Easier on your eyes after sunset. Chrome menu → Settings → Appearance → "Theme." Click "Browse themes." Search "Dark Mode" or pick the built-in "Just Black" theme. The browser interface goes dark. For dark mode inside web pages: Settings → Accessibility → "Page colors" (Chrome 120+). Or use an extension called "Dark Reader" (free, well-reviewed) which adds dark mode to every site you visit, even sites that have no dark mode of their own.',
        tip: 'Quick Tip: Schedule Dark Reader to turn on at sunset and off at sunrise automatically — click the Dark Reader icon in the toolbar, click the gear, set sunset/sunrise rules.',
      },
      {
        title: 'Turn on the password manager (and stop typing passwords)',
        content: 'Chrome can save and auto-fill every password you use. Settings → Autofill and passwords → "Google Password Manager." Make sure "Offer to save passwords" is on. Now when you sign in to a site, Chrome offers to remember the password. Next time you visit, it fills in automatically. View saved passwords anytime at passwords.google.com. Use a phone passkey or Windows Hello PIN to access them — much safer than typing each password.',
      },
      {
        title: 'Block pop-ups and intrusive ads',
        content: 'Chrome blocks the worst pop-ups by default, but tighter is better. Settings → "Privacy and security" → "Site settings" → "Pop-ups and redirects" → make sure "Don\'t allow sites to send pop-ups" is selected. Then back up to "Site settings" → "Intrusive ads" → ensure "Block ads on sites that show intrusive or misleading ads" is on. These two together kill most fake "Your computer has 5 viruses" pop-up scams that target seniors.',
      },
      {
        title: 'Set Google Safe Browsing to "Enhanced"',
        content: 'Settings → "Privacy and security" → "Security" → "Enhanced protection." Click it. This turns on the strongest level of Google\'s phishing protection. When you click a link in an email or a search result, Chrome warns you in real time if the destination is a known phishing site or has a fake login page. It also scans downloads for malware before they finish. The cost: a small amount of browsing data goes to Google. For most older adults, the trade is worth it — this single setting blocks a huge chunk of scam clicks.',
      },
      {
        title: 'Turn on a built-in screen reader for big paragraphs',
        content: 'Chrome can read web pages aloud. On Windows or Mac, install the free "Read Aloud" extension from the Chrome Web Store. After install, click the extension icon to start reading the current page. Adjustable voice and speed. For shorter selections, highlight the text → right-click → "Read aloud" (newer Chrome) or "Speak" (Mac). This is fantastic for long articles, recipes while cooking, or when your eyes are tired. Works on news sites, AARP guides, Medicare.gov — anywhere with text.',
        tip: 'Quick Tip: For deeper accessibility, Chrome supports system-level screen readers (VoiceOver on Mac, Narrator on Windows). These read the whole interface, not just web pages, and are designed for low-vision users. Search "Chrome accessibility" in support.google.com for setup.',
      },
    ],
  },
];
