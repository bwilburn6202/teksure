// TekSure Guides Batch 146 — 4 guides covering: Emergency SOS setup on
// iPhone and Android, using AARP membership and app, understanding internet
// speed numbers (Mbps), and pairing Bluetooth hearing aids to iPhone/Android.
import type { Guide } from './guides';

export const guidesBatch146: Guide[] = [
  {
    slug: 'how-to-set-up-emergency-sos-iphone-android-2026',
    title: 'How to Set Up Emergency SOS on iPhone and Android',
    excerpt:
      'Emergency SOS lets your phone call 911 and alert your contacts automatically. Learn how to set it up on iPhone and Android — especially important if you live alone.',
    category: 'safety-guides',
    tags: ['emergency sos', 'medical id', 'emergency contacts', '911', 'iphone safety', 'android safety', 'seniors living alone'],
    readTime: '7 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Emergency SOS is a built-in feature on both iPhone and Android phones. When you trigger it, your phone calls 911 (or the local emergency number if you are traveling), plays a loud alert countdown, and then sends your location to emergency contacts you have chosen in advance. You do not have to unlock the phone or find the phone app to do this.

For seniors who live alone, travel, or have health conditions, setting this up is one of the most valuable things you can do with your phone. It takes about ten minutes and costs nothing.

**Why Emergency SOS matters**

Accidents happen when no one is nearby — a fall in the kitchen, chest pain in the middle of the night, a medical event while driving. Emergency SOS gives you a way to reach help even when you cannot dial a number or speak clearly. Your GPS location is sent automatically, so 911 dispatchers know where you are even if you cannot tell them.

**Medical ID — what it is and why you should fill it out**

Both iPhone and Android let you store a Medical ID on your phone. This is a screen that paramedics and emergency responders can read even when your phone is locked. It shows your name, blood type, allergies, current medications, and any medical conditions you want responders to know about. It also lists your emergency contacts.

Filling out your Medical ID is completely separate from triggering Emergency SOS, but the two work together. Set up both.

**What happens when Emergency SOS is triggered**

After a short countdown (which gives you time to cancel if you pressed the buttons by accident), your phone calls 911. A recording tells the dispatcher that this is an emergency call from your device. Your GPS coordinates are sent. After the call ends, your chosen emergency contacts receive a text message with your location and a map link so they know what happened and where you are.

If you have an Apple Watch, it can also detect hard falls and offer to call emergency services automatically — a feature called Fall Detection.

**Sources:** Apple Support (support.apple.com), Google Support (support.google.com), AARP Tech Resources (aarp.org/technology).`,
    steps: [
      {
        title: 'Set up Emergency SOS on iPhone',
        content:
          'Open the Settings app (the gray gear icon on your home screen). Scroll down and tap "Emergency SOS." You will see two options worth turning on. First, "Call with Side Button" — when this is on, pressing the side button (the button on the right edge of your iPhone) five times quickly will start an emergency call countdown. Second, "Auto Call" — when this is on, the phone will automatically call 911 after the countdown without you having to press anything else. Turn both on. On iPhones with a Home button (older models), the method is to hold the Side button and either Volume button at the same time.',
        tip: 'Quick Tip: Practice finding the side button and volume buttons on your phone right now without pressing them quickly. You want to know where they are before you ever need them.',
      },
      {
        title: 'Set up Emergency SOS on Android',
        content:
          'The exact steps vary slightly by phone brand, but the most common method on Android 12 and later is this: Open Settings, then tap "Safety & Emergency" (on Samsung phones, this is under "Advanced Features" then "SOS messages"). Look for "Emergency SOS" and turn it on. Most Android phones let you trigger Emergency SOS by pressing the Power button five times quickly. Some phones let you hold the Power button and tap an on-screen "Emergency SOS" button. On Samsung Galaxy phones, go to Settings → Advanced Features → SOS Messages → Send SOS Messages, then add your emergency contacts there.',
        tip: 'Quick Tip: On any Android phone, you can also reach emergency calling from the lock screen — tap "Emergency" at the bottom of the screen before entering your PIN.',
      },
      {
        title: 'Fill out your Medical ID on iPhone',
        content:
          'Open the Health app (the white app with a red heart — it comes pre-installed on all iPhones). Tap your profile picture or initials in the top right corner. Tap "Medical ID," then tap "Edit" in the top right. Fill in your name, date of birth, blood type (if you know it), any allergies to medications or materials (like latex), your current medications with dosages, and any medical conditions such as diabetes, heart conditions, or a pacemaker. Scroll to the bottom to add emergency contacts. Tap the red plus sign to add a contact from your phone. When done, tap "Done." Turn on "Show When Locked" so responders can see this information without knowing your PIN.',
        warning: 'List medication allergies here, not just preferences. If penicillin, aspirin, or any drug causes you a serious reaction, include it — this information can prevent a dangerous treatment in an emergency.',
      },
      {
        title: 'Fill out your Medical ID on Android',
        content:
          'Open Settings and tap "Safety & Emergency." Tap "Medical information" or "Medical ID" (the exact label depends on your phone). Tap "Edit" or the pencil icon. Fill in your name, blood type, allergies, medications, and any medical notes. Tap the option to add emergency contacts. When finished, save your changes. Make sure the option "Show on lock screen" is turned on. On Samsung Galaxy phones, this feature is called "Medical information" and is found in Settings → Safety and Emergency.',
        tip: 'Quick Tip: Take a photo of your medication bottles and insurance card and store them in a secure folder on your phone as a backup reference.',
      },
      {
        title: 'Add emergency contacts who will be notified automatically',
        content:
          'On iPhone: In the Health app, open your Medical ID (from the steps above) and scroll to "Emergency Contacts." Tap the red plus sign. Choose a contact from your list — a family member, trusted friend, or neighbor. Assign a relationship label (Spouse, Daughter, Son, Friend). Add as many contacts as you like. On Android: In Settings → Safety & Emergency → Emergency contacts, tap "Add contact" and choose from your contact list. These are the people who will receive a text message with your location when you trigger Emergency SOS.',
        warning: 'Tell your emergency contacts that you are adding them. Let them know they may receive an automated text with your location if you press Emergency SOS. This prevents panic if they receive an unexpected message.',
      },
      {
        title: 'Test that Emergency SOS is ready — without calling 911',
        content:
          'You do not need to actually place an emergency call to confirm the feature is active. On iPhone, go to Settings → Emergency SOS and confirm both "Call with Side Button" and "Auto Call" are switched on (green). On Android, go to Settings → Safety & Emergency and confirm Emergency SOS is toggled on. You can see your emergency contacts listed there as well. That confirms the feature is armed. Do not press the buttons rapidly as a test — that will dial 911.',
        tip: 'Quick Tip: Put a small sticky note on your phone case that says "SOS = press side button 5x fast" until triggering it becomes second nature.',
      },
    ],
  },

  {
    slug: 'how-to-use-aarp-website-and-app-2026',
    title: 'How to Get the Most from Your AARP Membership',
    excerpt:
      'AARP membership costs about $16 a year and unlocks discounts, free tax help, fraud alerts, and much more. Here is a plain-language walkthrough of the website and app.',
    category: 'government-civic',
    tags: ['aarp', 'aarp membership', 'senior discounts', 'aarp tax aide', 'fraud watch', 'aarp app', 'aarp now'],
    readTime: '8 min',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `AARP (American Association of Retired Persons) is a nonprofit organization that advocates for Americans 50 and older. You do not have to be retired to join. Membership is open to anyone 50 or older, and family members of any age can join at a reduced rate.

Membership costs approximately $16 per year (prices may change — check aarp.org for the current rate). For most members, that cost is recovered quickly through discounts on everyday expenses.

**What AARP membership actually gives you**

The main reasons people join AARP are: (1) discounts on hotels, restaurants, and car rentals; (2) discounts on prescription drugs; (3) free tax preparation help through AARP Tax-Aide; (4) access to the AARP Fraud Watch Network helpline; and (5) health and Medicare guidance. There is also an active online community, games, and a magazine delivered to your home.

**AARP is not an insurance company**

AARP does not sell insurance directly. It partners with companies like UnitedHealthcare and other providers to offer AARP-endorsed health, dental, vision, life, and auto insurance plans. You choose whether to sign up for any of these — they are separate from basic AARP membership.

**Prescription drug discounts**

The AARP Prescription Discounts program (powered by OptumRx) provides a free discount card that can lower the cost of many medications. This works even if you have Medicare Part D — you can compare prices and sometimes save on drugs your insurance does not fully cover. Show the card at participating pharmacies. Download the card at aarp.org/rxdiscounts.

**AARP Tax-Aide — free in-person tax help**

Every year from February through mid-April, AARP Tax-Aide provides free tax preparation for people with low-to-moderate income, with special focus on those 50 and older. IRS-certified volunteers prepare your return at no charge. To find a location, go to aarp.org/taxaide or call 1-888-AARP-NOW (1-888-227-7669).

**AARP Fraud Watch Network**

AARP operates a free Fraud Watch helpline at 1-877-908-3360. You can call to report a scam, get advice on a suspicious situation, or simply ask whether something sounds legitimate. The AARP website also posts current scam alerts at aarp.org/fraudwatchnetwork.

**Sources:** AARP official website (aarp.org), AARP Fraud Watch Network (aarp.org/fraudwatchnetwork), AARP Tax-Aide (aarp.org/taxaide).`,
    steps: [
      {
        title: 'Join AARP online or by phone',
        content:
          'Go to aarp.org in your web browser. In the top right area of the page, look for a "Join AARP" or "Become a Member" button. Click it. You will see membership options — typically a one-year plan for around $16, or multi-year plans at a discount per year. Fill in your name, address, email, and payment information. After completing your purchase, you will receive a confirmation email and a welcome letter by mail with your membership card. Alternatively, call 1-888-OUR-AARP (1-888-687-2277) to join by phone if you prefer talking to a person.',
        tip: 'Quick Tip: Watch for AARP membership offers in the mail — they sometimes include a reduced first-year rate. If you already received a mailer, use the code inside rather than joining at the standard price.',
      },
      {
        title: 'Create your AARP online account',
        content:
          'Once you are a member, go to aarp.org and click "Sign In" at the top right. If this is your first time, click "Create Account." Enter the email address you used when you joined and create a password. You will receive a verification email — click the link inside it to confirm your account. After signing in, you will see your member benefits, discounts, and account details. Bookmark aarp.org so you can return to it easily.',
        tip: 'Quick Tip: Use the same email address for your AARP account that you check regularly. AARP sends scam alerts, tax deadline reminders, and benefit updates to that address.',
      },
      {
        title: 'Download the AARP Now app',
        content:
          'The AARP Now app puts your membership card, discounts, and news in one place on your phone. On iPhone: open the App Store, search for "AARP Now," and tap "Get" to install it. On Android: open the Google Play Store, search for "AARP Now," and tap "Install." After installing, open the app and sign in with your AARP account email and password. Your digital membership card appears on the main screen — you can show it on your phone instead of carrying the physical card.',
      },
      {
        title: 'Find and use member discounts',
        content:
          'On the AARP website or in the app, look for the "Discounts" or "Member Benefits" section. Discounts are organized by category: Travel (hotels, airlines, car rentals), Dining (restaurants including IHOP, Outback Steakhouse, and many others), Entertainment (movie tickets, theme parks), Health (dental, vision, hearing aids, gym memberships), and Financial Services. For most discounts, you show your AARP membership card — physical or on your phone — at the time of purchase. Some discounts require a promo code that you copy from the AARP site. Hotel discounts through AARP are often 10% or more at chains like Hilton, Marriott, and Best Western.',
        tip: 'Quick Tip: Before booking a hotel or buying restaurant gift cards, check aarp.org/discounts first. The savings add up fast, especially on travel.',
      },
      {
        title: 'Sign up for AARP Tax-Aide (February–April)',
        content:
          'AARP Tax-Aide is available from early February through April 15 each year. To find a free tax preparation site near you, go to aarp.org/taxaide and click "Get Free Tax Preparation Help." Enter your zip code to see locations, days, and hours. Many sites require an appointment — call the number listed for the location or book through the website. Bring your government-issued ID, Social Security card or ITIN, all tax documents received in the mail (W-2s, 1099s, Medicare statements), and last year's tax return if you have it.',
        warning: 'AARP Tax-Aide volunteers will never ask for your bank account number upfront or ask you to pay anything for their service. If anyone claiming to be from AARP Tax-Aide asks for payment, that is a scam — call 1-888-AARP-NOW to report it.',
      },
      {
        title: 'Use the AARP Fraud Watch Network',
        content:
          'If you think you have encountered a scam — a suspicious phone call, a strange email, an unexpected text asking for personal information — call the AARP Fraud Watch Network helpline at 1-877-908-3360. It is free and staffed by trained counselors. You do not have to be an AARP member to call. On the AARP website, go to aarp.org/fraudwatchnetwork to read current scam alerts and sign up for free email scam warnings. The "Scam Tracking Map" on that page shows scams that have been reported near your zip code.',
        tip: 'Quick Tip: The AARP Fraud Watch helpline also helps family members who are worried a loved one may have been targeted. You can call on behalf of someone else.',
      },
    ],
  },

  {
    slug: 'understanding-internet-speed-mbps-explained-2026',
    title: 'What Internet Speed Numbers Mean — Mbps Explained',
    excerpt:
      'Your internet bill mentions Mbps, but what does that number actually mean for streaming, video calls, and browsing? This guide explains it in plain terms.',
    category: 'tech-explained',
    tags: ['internet speed', 'mbps', 'bandwidth', 'streaming', 'speedtest', 'buffering', 'internet plan', 'wifi speed'],
    readTime: '6 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `When you sign up for home internet service, your provider advertises speeds like "100 Mbps" or "500 Mbps." Your bill might list a speed tier. But most people are not sure what those numbers actually mean or whether they are getting what they are paying for.

This guide explains internet speed in plain terms, tells you what speeds you actually need for common activities, shows you how to test your speed for free, and helps you decide whether upgrading your plan is worth the extra cost.

**What is Mbps?**

Mbps stands for megabits per second. It is a measurement of how fast data moves between the internet and your home. Think of it like water pressure in a pipe — a higher number means more data can flow through at once.

One megabit is not the same as one megabyte. If you have heard of megabytes from file sizes and storage (like "this photo is 4 megabytes"), know that a megabit is eight times smaller. So 100 Mbps is about 12.5 megabytes per second. This distinction mostly matters when you are downloading a large file — your download might show "12 MB/s" even though your plan is "100 Mbps."

**Download speed vs. upload speed**

Internet plans advertise two speeds: download and upload. Download speed is how fast data comes to you — this covers streaming movies, loading websites, and video calls where you are watching. Upload speed is how fast data goes from you to the internet — this covers video calls where your face is being sent, sending email attachments, and backing up photos to the cloud.

Most home internet plans have much faster download speeds than upload speeds. That is intentional — most people download far more than they upload.

**What do buffering and slow pages actually mean?**

When a video pauses and shows a spinning circle, that is called buffering. It means the video is downloading slower than you are watching it. Your internet connection cannot keep up with the stream. This usually happens when your speed is too low for the quality you are watching, or when too many devices are using the connection at the same time.

Slow web pages, email that takes a long time to send, and video calls that freeze or show blocky images are all signs of low speed or a congested connection.

**Is your slow internet the speed plan or the router?**

Sometimes the problem is not your internet plan — it is your router (the box that sends WiFi around your home). An old or poorly positioned router can slow down your connection even if you are paying for fast service. If devices connected with a cable (called a wired or Ethernet connection) are fast but WiFi is slow, the router is likely the issue, not your plan.

**Sources:** FCC Broadband Speed Guide (fcc.gov/consumers/guides/broadband-speed-guide), How-To Geek (howtogeek.com), Google Fiber Speed Guide, Speedtest by Ookla (speedtest.net), fast.com (Netflix speed test).`,
    steps: [
      {
        title: 'Understand what speed you actually need',
        content:
          'Here are real-world guidelines from the FCC and major streaming services. For one person who browses the web and reads email: 10–25 Mbps is enough. For one person who streams HD video (standard Netflix or YouTube quality): 25 Mbps is the recommended minimum. For one person who streams in 4K (very sharp, high-quality video): 25–50 Mbps. For video calling (FaceTime, Zoom, Google Meet): 10–25 Mbps download and at least 3 Mbps upload. For a household of two or three people using different devices at the same time: 100 Mbps covers most households comfortably. For a household with four or more people, multiple smart TVs, video games, or someone working from home: 200 Mbps or higher.',
        tip: 'Quick Tip: Each device using your internet at the same time draws from the same pool of speed. A phone streaming music, a tablet watching Netflix, and a laptop on a video call all draw at once.',
      },
      {
        title: 'Test your actual internet speed for free',
        content:
          'Two free tools let you test your current speed. Option 1 — Fast.com: Open your web browser and go to fast.com. The test starts automatically and shows your download speed within about 30 seconds. This tool is made by Netflix and is very straightforward. Option 2 — Speedtest.net: Go to speedtest.net and click "Go." After about 30 seconds, you will see your download speed, upload speed, and ping (a measure of response time — lower is better). Both tools work on phones, tablets, and computers. For the most accurate result, test while connected to your home WiFi and with other devices not in heavy use.',
        tip: 'Quick Tip: Run the test two or three times at different times of day. Internet speeds often slow down in the evening (roughly 7–10 PM) when many people in your neighborhood are all streaming at once — this is called network congestion.',
      },
      {
        title: 'Compare your test result to what you are paying for',
        content:
          'Check your internet bill or call your provider to find out what speed tier you are paying for. Then compare that number to what your speed test showed. It is normal for your actual speed to be somewhat lower than the advertised maximum — providers advertise "up to" a certain speed. However, if you are consistently getting less than 50–70% of your advertised speed, that is worth a call to your provider. They may send a technician, reset your connection remotely, or confirm whether your router needs to be updated.',
        warning: 'If you rent a router or modem from your internet provider and it is more than four or five years old, ask them if a newer model is available. Older equipment can be a significant bottleneck even on a fast plan.',
      },
      {
        title: 'Decide whether paying for a higher speed is worth it',
        content:
          'If you live alone or with one other person and your main activities are browsing, email, video calls, and standard streaming, you probably do not need more than 100 Mbps. Paying for 500 Mbps or gigabit service will not make your web pages load noticeably faster for everyday use — those speeds are designed for households with many users and devices. However, if you frequently experience buffering, frozen video calls, or very slow file downloads, and your test shows speeds well below your plan, upgrading to a higher tier or switching providers may be worth the cost.',
        tip: 'Quick Tip: Many internet providers offer discounted plans for seniors or low-income households. Ask your provider specifically about "senior discounts" or "low-income programs." The federal Affordable Connectivity Program has ended, but some providers continue offering similar reduced-rate plans — call and ask.',
      },
      {
        title: 'Improve your WiFi without changing your plan',
        content:
          'Before paying for a faster plan, try these steps to improve the speed you already have. Move your router to a central location in your home — not in a closet or corner. Keep it off the floor and away from microwaves, cordless phones, and other electronics that can cause interference. If you are in a room far from the router and your WiFi is weak, a WiFi range extender (available for $25–$60 at electronics stores) can help. If you have a very large home, a mesh WiFi system (a set of two or three small devices placed around the home) provides more even coverage.',
        tip: 'Quick Tip: Restarting your router — unplugging it from the wall, waiting 30 seconds, and plugging it back in — fixes many temporary slowdowns. Make this your first step when the internet feels sluggish.',
      },
    ],
  },

  {
    slug: 'how-to-pair-bluetooth-hearing-aids-iphone-android-2026',
    title: 'How to Pair Bluetooth Hearing Aids to Your iPhone or Android Phone',
    excerpt:
      'Stream phone calls and music directly to your Bluetooth hearing aids. This guide walks you through pairing on iPhone and Android, adjusting volume, and fixing common problems.',
    category: 'health-tech',
    tags: ['hearing aids', 'bluetooth hearing aids', 'made for iphone', 'mfi hearing aids', 'asha', 'accessibility', 'hearing loss', 'audiologist'],
    readTime: '8 min',
    thumbnailEmoji: '👂',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Modern Bluetooth hearing aids can connect directly to your iPhone or Android phone. Once paired, phone calls, music, podcasts, and navigation directions play directly in your hearing aids — no need to hold the phone up to your ear. You can also adjust the volume and settings from your phone.

This is especially helpful for people who struggle to hear phone calls through the phone's speaker, or who want clearer audio without background noise.

**Two standards: Made for iPhone (MFi) and ASHA**

Hearing aids connect to phones using one of two wireless standards.

Made for iPhone (MFi) is Apple's own standard for direct hearing aid connectivity. Hearing aids with the MFi label pair directly to iPhone through the Accessibility settings — no separate Bluetooth pairing step needed. Major hearing aid brands with MFi models include ReSound, Starkey, Oticon, Phonak (some models), Widex, Signia, and Unitron.

ASHA stands for Audio Streaming for Hearing Aids. This is Google's standard for Android devices. Android 10 and later support ASHA, and many current hearing aid models from major brands support it. ASHA allows streaming of audio from Android phones directly to hearing aids with lower battery drain than standard Bluetooth.

If you are not sure whether your hearing aids support MFi or ASHA, check the box they came in, look on the manufacturer's website, or ask your audiologist.

**Standard Bluetooth also works — but with limitations**

If your hearing aids do not support MFi or ASHA, they may still pair using standard Bluetooth. Standard Bluetooth works for streaming audio, but the connection may use more battery, have slightly more delay, and may not allow the hearing aid app to control all settings.

**Hearing aid apps**

Most major hearing aid manufacturers have a companion app: ReSound Smart 3D, Oticon ON, Starkey Thrive, Phonak myPhonak, and others. These apps let you adjust volume, switch programs (for quiet rooms, restaurants, outdoors), and in some cases stream audio. Download the app that matches your hearing aid brand from the App Store or Google Play Store.

**Sources:** Apple Support — Pair hearing devices with iPhone (support.apple.com), Google Support — Connect hearing aids to Android (support.google.com), Hearing Loss Association of America (hearingloss.org), FDA Hearing Aid guidance (fda.gov).`,
    steps: [
      {
        title: 'Prepare your hearing aids for pairing',
        content:
          'Before pairing, put your hearing aids in their charging case or turn them off, then turn them back on (or remove them from the case). This puts them into pairing mode — most hearing aids are discoverable for a few minutes after being powered on. If your hearing aids have a pairing button, consult the manual for your specific model. Keep the hearing aids within two feet of your phone during the pairing process.',
        tip: 'Quick Tip: If you have two hearing aids (one for each ear), both will typically pair at the same time as a pair — you do not usually have to pair each one separately.',
      },
      {
        title: 'Pair Made for iPhone (MFi) hearing aids to iPhone',
        content:
          'On your iPhone, open Settings (the gray gear icon). Tap "Accessibility." Scroll down to the "Hearing" section and tap "Hearing Devices." Your iPhone will scan for nearby hearing aids. When your hearing aids appear on screen (usually listed by brand and model name), tap their name. A pairing request will appear on screen — tap "Pair." If you have two hearing aids, you may see two pairing requests — tap "Pair" for both. After pairing, your hearing aids will appear under "Hearing Devices" whenever they are powered on and within range.',
        tip: 'Quick Tip: After pairing, you can control your hearing aids directly from iPhone — go to Settings → Accessibility → Hearing Devices anytime to adjust volume, switch programs, or see battery levels.',
      },
      {
        title: 'Pair ASHA or Bluetooth hearing aids to Android',
        content:
          'On your Android phone, open Settings. Tap "Connected devices" (on some phones this is called "Bluetooth & device connection" or simply "Connections"). Tap "Pair new device" or "Bluetooth" and make sure Bluetooth is turned on. Your phone will scan for nearby devices. When your hearing aids appear in the list, tap their name to connect. For ASHA-compatible hearing aids on Android 10 or later, the connection may be automatic after this initial pairing — the phone recognizes them as hearing aids and routes audio directly. On Samsung Galaxy phones, go to Settings → Connections → Bluetooth, toggle it on, and tap "Scan" if your hearing aids do not appear immediately.',
        warning: 'Some Android phones from 2019 or earlier may not fully support the ASHA standard. If you are having trouble, check that your phone is running Android 10 or later by going to Settings → About phone → Android version.',
      },
      {
        title: 'Adjust hearing aid volume from your phone',
        content:
          'On iPhone: After pairing MFi hearing aids, tap the hearing aids icon that appears in the Control Center (swipe down from the top right corner of the screen). A volume slider appears. You can also go to Settings → Accessibility → Hearing Devices and adjust volume from there. On Android: Once your hearing aids are connected, the volume buttons on the side of your phone will often control the hearing aid volume during calls and streaming. You can also open your hearing aid manufacturer\'s app (Oticon ON, ReSound Smart, etc.) for more detailed volume and program controls.',
        tip: 'Quick Tip: You can add the hearing device control to your iPhone Control Center for quick access — go to Settings → Control Center → Customize Controls, then add "Hearing" to the list.',
      },
      {
        title: 'Stream phone calls and music directly to your hearing aids',
        content:
          'Once your hearing aids are paired, audio streaming happens automatically for most activities. Phone calls: When you receive or make a call, audio routes to your hearing aids. On iPhone, if the call does not go to your hearing aids, tap the audio icon during the call (it looks like a speaker or a circle with waves) and select your hearing aids from the list. On Android, tap the same type of icon during a call and choose your hearing aids. Music and videos: Audio from apps like Spotify, YouTube, Apple Music, or Netflix streams to your hearing aids when they are connected, the same way it would to wireless earbuds.',
        tip: 'Quick Tip: Google Live Transcribe (free on Android) displays real-time captions of speech on your phone screen — a helpful tool for conversations in noisy places even when you are wearing hearing aids. Find it in the Google Play Store.',
      },
      {
        title: 'Fix common pairing problems',
        content:
          'If your hearing aids do not appear during pairing: make sure they are in pairing mode (power off and on again), keep them very close to your phone, and make sure no other phone or tablet is actively connected to them — hearing aids typically connect to one device at a time. If you have already paired them to another phone, disconnect them from that device first. If paired hearing aids stop working after a phone update: go back to the Hearing Devices (iPhone) or Bluetooth (Android) settings, select your hearing aids, choose "Forget this device," and pair them again from scratch. If audio cuts in and out: move your phone closer, check that no other Bluetooth device is competing for the connection, and make sure the hearing aid batteries are adequately charged.',
        warning: 'Do not reset your hearing aids without guidance from your audiologist. Some hearing aids require professional software to restore custom settings after a factory reset.',
      },
    ],
  },
];
