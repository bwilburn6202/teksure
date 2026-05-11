// guides-batch-124 — Troubleshooting (18 guides) — 2026-05-03
import type { Guide } from './guides';

export const guidesBatch124: Guide[] = [
  {
    slug: 'computer-wont-turn-on-fix',
    title: "Computer Won't Turn On — Here's What to Check",
    excerpt: "Your computer is completely dark when you press the power button. This guide walks you through the most common reasons and the fixes that actually work.",
    category: 'troubleshooting',
    tags: ['computer', 'power', 'startup', 'windows', 'mac'],
    readTime: '7 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A computer that will not turn on is one of the most alarming things that can happen — but in the majority of cases, the fix is something simple. Before calling a repair shop, work through the steps below. Most people find the answer within the first two or three checks.

The single most common reason a desktop or laptop appears "dead" is a power issue that has nothing to do with the computer itself. A power strip may have been switched off, a surge protector may have tripped, or a laptop charger cord may have come slightly loose from the wall or from the computer. These account for more than half of all "won't turn on" calls to tech support lines.

If the computer gets power (you might see a small light, hear a fan, or feel it vibrate) but nothing appears on the screen, the screen itself or the cable connecting it may be the problem — not the computer. This is a different issue and the steps below will help you sort out which situation you are in.

A Windows PC and a Mac handle start-up in slightly different ways, but the troubleshooting steps are nearly identical. The guide below works for both.

**What to expect:** You will spend about 10–15 minutes going through these checks. You do not need any tools except your hands and, possibly, a different power outlet to test.`,
    steps: [
      {
        title: 'Check the power source first',
        content: "Trace the power cord from your computer all the way to the wall. Make sure every connection is firmly plugged in — into the computer, into any power brick or adapter, and into the wall outlet or power strip. If you use a power strip, look for a reset button on it and press it once. Try a different outlet in the room to rule out a dead outlet.",
        tip: "Power strips that protect against surges have a small reset button — it looks like a tiny raised circle. Press it once and then try the computer again.",
      },
      {
        title: 'For laptops — check the charging indicator',
        content: "Plug in your charger and look for a small light on the side or front of the laptop (usually orange or white) that means it is charging. If no light appears, try a different outlet, or borrow a compatible charger if you have one available. A laptop with a completely dead battery will need 5–10 minutes of charging before it will start.",
        warning: "Do not try to pry open the back of a laptop to check the battery yourself. You can damage the battery or injure yourself. If the charger shows no sign of life after trying two outlets, it may be a faulty charger.",
      },
      {
        title: 'Press and hold the power button for 10 seconds',
        content: "Sometimes a computer freezes in a half-on, half-off state and needs a hard shutdown. Press and hold the power button for a full 10 seconds. The computer should turn off completely. Wait 30 seconds, then press the power button normally (one short press) to try starting it again.",
      },
      {
        title: 'Check the monitor or screen separately',
        content: "If you can hear the fan or see a power light but the screen is black, the problem may be with the display. Make sure the monitor's own power button is on (it usually has a small power light). Check that the cable connecting the monitor to the computer (usually a thick cable going into the back of both) is plugged in firmly at both ends.",
        tip: "Wiggle the cable gently at both ends. A slightly loose connection is surprisingly common.",
      },
      {
        title: 'Unplug all accessories and try again',
        content: "Occasionally a USB device (a thumb drive, an older printer cable, an external hard drive) can interfere with startup. Unplug everything except the power cord and, for a desktop, the monitor. Then try the power button again. If the computer starts, plug your accessories back in one at a time to find which one was causing the problem.",
      },
      {
        title: 'Remove and reinsert the power cord from the computer',
        content: "For desktop computers, unplug the power cord from the back of the computer itself, wait 30 seconds, and plug it back in. For laptops with a removable battery, you can remove the battery, wait 30 seconds, and reinsert it. Then try powering on again. This clears any static charge that might be blocking the startup.",
      },
      {
        title: 'When to seek professional help',
        content: "If none of the above steps work, there may be a hardware failure — a worn-out power supply, a failed internal component, or physical damage. At this point it is best to take the computer to a trusted repair shop or call the manufacturer's support line. Write down what you already tried so you can tell the technician — this saves time and money.",
        tip: "Apple's support number is 1-800-275-2273. Microsoft's is 1-800-642-7676. Many libraries also offer free tech help sessions.",
      },
    ],
  },
  {
    slug: 'phone-wont-charge-7-fixes-2026',
    title: "Phone Won't Charge — 7 Things to Try Right Now",
    excerpt: "If you plug in your phone and nothing happens — no charging icon, no chime — this guide covers the most common causes and how to fix them at home.",
    category: 'troubleshooting',
    tags: ['phone', 'charging', 'battery', 'iphone', 'android'],
    readTime: '6 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `When your phone doesn't start charging after you plug it in, it usually comes down to one of four things: a dirty charging port, a faulty cable, a bad adapter, or a software glitch. The good news is that three of those four are free to fix at home.

Modern phones — both iPhones and Android phones — use charging ports with very small openings. Over months of daily use, lint from pockets and purses gradually packs itself into that opening. Even a thin layer of lint can prevent the cable from making proper electrical contact. This is the number-one cause of "suddenly my phone won't charge" calls.

The cable itself is another frequent culprit. The small connector at the end of a charging cable takes a beating — it gets bent, stepped on, wound too tightly, and yanked at odd angles. A cable that looks fine on the outside can have a broken wire inside that causes it to charge intermittently or not at all.

Before buying a new phone or going to the repair shop, spend 10 minutes on the steps below.`,
    steps: [
      {
        title: 'Inspect and clean the charging port',
        content: "Shine a flashlight into the charging port on your phone (the small opening at the bottom). Look for lint, dust, or debris inside. If you see anything, turn off the phone first. Then use a toothpick or a wooden cocktail pick — nothing metal — and gently scrape the sides of the port to loosen any packed-in lint. Be gentle and don't force anything.",
        warning: "Never use a metal object like a paper clip or bobby pin inside the charging port. You can damage the tiny pins inside and create a short circuit.",
        tip: "Most people are surprised how much lint comes out. A few passes with a wooden toothpick can restore charging completely.",
      },
      {
        title: 'Try a different cable',
        content: "Borrow a charging cable from a family member, friend, or neighbor — one that works on a different phone of the same type. If the phone charges with the new cable, your old cable has failed. Replacement cables cost $10–$15 at any drugstore or big-box store.",
      },
      {
        title: 'Try a different power adapter (the block in the wall)',
        content: "The cube-shaped adapter that plugs into the wall can also fail. Try a different one if you have one available. USB ports on computers and TVs can also be used to charge a phone in a pinch — plug your cable into one of those to test whether the adapter is the problem.",
      },
      {
        title: 'Try a different outlet',
        content: "It sounds obvious, but outlet problems are real. Plug a lamp or phone charger into the same outlet to confirm it is providing power. If the outlet is connected to a light switch, make sure the switch is on.",
      },
      {
        title: 'Restart the phone',
        content: "A software glitch can sometimes prevent the phone from recognizing that a charger is connected. Turn the phone fully off (hold the side button for several seconds until you see a slider or shutdown option), wait 30 seconds, then turn it back on and try charging again.",
      },
      {
        title: 'Let a very dead battery charge undisturbed for 30 minutes',
        content: "If the battery is completely drained — below 0% — it may take 10 to 30 minutes before the screen shows any sign of life. Plug it in, set it down, and don't touch it for at least 30 minutes. A charging symbol may appear after a few minutes once the battery has enough power to show the screen.",
      },
      {
        title: 'If nothing works, contact your carrier or manufacturer',
        content: "If you have tried a clean port, two different cables, two different adapters, and two different outlets and the phone still will not charge, the charging hardware inside the phone may need professional repair. Contact your phone carrier (AT&T, Verizon, T-Mobile) or the manufacturer. Apple's repair service can be found at support.apple.com. Many repairs are covered under warranty if your phone is less than one year old.",
      },
    ],
  },
  {
    slug: 'wifi-unstable-connection-fix-2026',
    title: 'WiFi Keeps Dropping — How to Fix an Unstable Connection',
    excerpt: "Your internet works fine one minute and disappears the next. This guide explains why WiFi drops and gives you step-by-step fixes to make your connection more stable.",
    category: 'troubleshooting',
    tags: ['wifi', 'internet', 'router', 'connection', 'network'],
    readTime: '7 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A WiFi connection that keeps cutting out is frustrating — especially when it happens in the middle of a video call or while streaming a show. The problem usually sits in one of three places: your device, your router, or the signal between them.

Before calling your internet provider, it is worth ruling out the simple fixes. Many people pay for an unnecessary service call when the problem is a router that needs a quick restart or a device that has gotten too far from the router.

Your router (the box with blinking lights that your internet provider installed) communicates with every device in your home using radio waves, the same technology as a two-way radio. Walls, appliances, and even other electronics can weaken that signal. Understanding this helps you solve the problem without spending any money.

This guide covers fixes in order from most likely to least likely. Work through them in order and stop when the problem is solved.`,
    steps: [
      {
        title: 'Restart your router and modem',
        content: "Unplug the power cord from the back of your router (and from your modem if you have a separate one). Wait a full 60 seconds — this matters, don't rush it. Plug the modem back in first and wait 30 seconds for it to fully start up. Then plug the router back in and wait another 60 seconds. Try connecting again.",
        tip: "This fixes the problem for most people. Internet equipment accumulates small errors over time that a restart clears.",
      },
      {
        title: 'Move closer to the router',
        content: "WiFi signals weaken with distance. If you are in a back bedroom and your router is in the living room, try using your device near the router and see if the drops stop. This tells you the problem is signal distance, not the router or internet service itself.",
      },
      {
        title: 'Remove obstacles between you and the router',
        content: "Thick walls (especially brick or concrete), large mirrors, microwave ovens, and baby monitors can all interfere with WiFi. Try moving the router to a more central location in your home, or elevate it off the floor. Even placing it on a shelf instead of a low cabinet can improve the signal.",
        tip: "The ideal router placement is in a central, elevated, open location — not in a closet, behind a TV, or inside a cabinet.",
      },
      {
        title: 'Forget and reconnect to the network on your device',
        content: "On your phone or tablet: go to Settings, then WiFi, and find your network name. Tap it and choose 'Forget This Network' (iPhone) or 'Forget' (Android). Then reconnect by selecting the network from the list and entering your password. This refreshes the connection and fixes many software-side issues.",
      },
      {
        title: 'Check how many devices are connected',
        content: "If many devices are using the internet at the same time — phones, tablets, smart TVs, streaming sticks — the router can get overloaded. Try turning off WiFi on a few devices you are not currently using and see if your connection stabilizes.",
      },
      {
        title: 'Check for router overheating',
        content: "Routers generate heat and need airflow. If yours is stuffed inside a cabinet, has something placed on top of it, or feels very hot to the touch, overheating may be causing it to drop connections. Move it to an open space where air can circulate around all sides.",
      },
      {
        title: 'Contact your internet provider',
        content: "If the problem persists after all the above steps, the issue may be with the signal coming into your home or with aging equipment. Call your internet provider (Comcast, AT&T, Spectrum, etc.) and describe what you have already tried. They can run a remote test on your line, send a technician, or replace old equipment. Ask specifically if your router or modem is past its recommended replacement age.",
      },
    ],
  },
  {
    slug: 'cant-send-email-fix',
    title: "Can't Send or Receive Email — What to Do",
    excerpt: "Email that suddenly stops working is usually caused by one of a handful of fixable problems. This guide covers the most common ones for Gmail, Yahoo, and Outlook users.",
    category: 'troubleshooting',
    tags: ['email', 'gmail', 'outlook', 'yahoo', 'troubleshooting'],
    readTime: '6 min',
    thumbnailEmoji: '📧',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Email problems tend to fall into a few categories: your internet connection is down, your account password has changed, the email service itself has a temporary outage, or your storage is full. Each has a clear fix.

The most common scenario is that nothing is actually wrong with email itself — the internet connection is the real problem. Before doing anything else, try opening a website in your browser. If it doesn't load, fix your internet connection first (restart your router) and then check email again.

Another very common cause: your email account got signed out automatically. This happens after password changes, security updates, and app updates. Sign back in.

This guide works for the major free email services — Gmail (Google), Yahoo Mail, and Outlook (Microsoft) — whether you are using them in a web browser or in a phone's mail app.`,
    steps: [
      {
        title: 'Check your internet connection first',
        content: "Open a web browser and try to load any website (try google.com). If the page doesn't load, your internet is down and that is why email isn't working. Restart your router (unplug it for 60 seconds, then plug it back in) and try again in 2 minutes.",
      },
      {
        title: 'Try opening email in a web browser',
        content: "If you normally use an email app (the Mail app on iPhone, the Gmail app, Outlook app), try opening your email in a web browser instead. On a computer, go to gmail.com, yahoo.com, or outlook.com. If email works in the browser but not in the app, the problem is the app — not your account.",
        tip: "This is a quick way to determine whether the problem is your app or your account.",
      },
      {
        title: 'Sign out and sign back in',
        content: "In your email app or on the website, sign out of your account. Then sign back in with your email address and password. If you have forgotten your password, most email services have a 'Forgot password' link on the sign-in page that will send a reset code to your phone number.",
      },
      {
        title: 'Check your storage',
        content: "Gmail accounts have 15 GB of free storage shared across Gmail, Google Drive, and Google Photos. If it is full, new emails will bounce back. To check: open Gmail in a browser, scroll to the very bottom of the page, and look for the storage indicator. If it shows something like '14.8 of 15 GB used,' you need to delete some old emails or attachments.",
        tip: "Emails with large photo or video attachments take up the most space. Search for emails with attachments to find the big ones quickly.",
      },
      {
        title: 'Check if the email service is having an outage',
        content: "Occasionally Gmail, Yahoo, or Outlook experiences a temporary service disruption. Visit downdetector.com and search for 'Gmail,' 'Yahoo Mail,' or 'Outlook' to see if other people are reporting the same problem right now. If there is an outage, you need to wait — it usually resolves within a few hours.",
      },
      {
        title: 'Update or reinstall the email app',
        content: "An outdated app can stop working after the email service updates its systems. On an iPhone, open the App Store and tap your profile icon to see available updates. On Android, open the Google Play Store and do the same. Install any updates for your email app and try again.",
      },
    ],
  },
  {
    slug: 'photos-wont-upload-fix',
    title: "Photos Won't Upload — How to Fix It",
    excerpt: "Whether you're trying to share photos via email, iCloud, Google Photos, or Facebook, this guide covers why uploads fail and how to get them through.",
    category: 'troubleshooting',
    tags: ['photos', 'upload', 'icloud', 'google photos', 'storage'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `When photos get stuck and won't upload, the cause is almost always one of three things: a slow or interrupted internet connection, full storage on the receiving end, or a file that is too large for the method you're using. Each of these is fixable.

Photo uploads are sensitive to internet speed in a way that regular web browsing is not. A webpage loads fine on a slow connection, but uploading a large photo — especially one taken with a modern phone camera — requires a more sustained connection. If your WiFi is slow or drops in and out, uploads will fail or stall.

Storage is the other big culprit. iCloud free accounts only include 5 GB of storage. Google Photos free accounts have 15 GB shared with Gmail. Facebook limits individual photo sizes. When you hit these limits, uploads stop working without always giving you a clear explanation.

This guide focuses on three platforms: iCloud (iPhone users), Google Photos (Android and iPhone), and general email or social media uploads. The same principles apply to all of them.`,
    steps: [
      {
        title: 'Check your internet connection',
        content: "Switch to WiFi if you are using mobile data, or move closer to your router if your WiFi signal is weak. Photo uploads require a steady connection. Try loading a website to confirm your internet is working normally before troubleshooting the upload itself.",
        tip: "Large photo uploads should always be done on WiFi, not cellular data. Your phone may have a setting to only upload photos on WiFi — check your iCloud or Google Photos settings.",
      },
      {
        title: 'Check your storage',
        content: "For iCloud: go to Settings on your iPhone, tap your name at the top, and tap iCloud. Look for the storage bar — if it is nearly full, that is why uploads are failing. For Google Photos: open the app, tap your profile picture, and tap 'Manage storage.' You will see how much you have used.",
        tip: "If iCloud storage is full, you can purchase more for $0.99/month (50 GB) or free up space by deleting old backups under Settings > [Your Name] > iCloud > Manage Storage.",
      },
      {
        title: 'Try uploading one photo instead of many',
        content: "If you are trying to upload a large batch of photos at once, try with one or two first. This tells you whether the problem is a timeout (happens with big batches on slow connections) versus a persistent error.",
      },
      {
        title: 'Close the app and reopen it',
        content: "Fully close the app you are using (swipe it away on iPhone; use the recent apps button on Android). Reopen it and try the upload again. Apps can get stuck in an error state that a restart clears.",
      },
      {
        title: 'For email attachments — compress or resize the photo',
        content: "Many email providers limit attachment sizes to 25 MB. A photo from a modern phone can be 8–15 MB each, so multiple photos can exceed this limit. Most phones have a 'Small' or 'Actual Size' option when you attach a photo to an email — choose 'Medium' or 'Small' to reduce the file size before sending.",
      },
      {
        title: 'Restart your phone and try again',
        content: "A simple phone restart clears temporary software errors that can interfere with uploads. Hold the side button (iPhone) or power button (Android), choose to restart or power off, wait 30 seconds, and turn the phone back on. Then try the upload again.",
      },
    ],
  },
  {
    slug: 'phone-screen-frozen-fix',
    title: "Phone Screen Is Frozen — How to Unfreeze It",
    excerpt: "When your phone stops responding to taps and swipes, it doesn't mean something is seriously wrong. Here's how to unfreeze your phone and get back to normal.",
    category: 'troubleshooting',
    tags: ['frozen', 'phone', 'unresponsive', 'iphone', 'android'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A frozen phone screen is alarming but almost always harmless. The phone hasn't broken — it has gotten confused. The fix is almost always a forced restart, which clears the problem without deleting anything on your phone.

Phones freeze most often when an app crashes and ties up the phone's processor, when the phone runs low on available memory (different from storage — think of it like working space for the phone's brain), or after an update that didn't finish correctly.

The forced restart process is different depending on your phone model. The steps below cover the most common iPhones and Android phones. None of these steps will delete your photos, contacts, or apps — they turn the phone off and back on quickly.

**Important:** A forced restart is different from a factory reset. A factory reset erases everything. A forced restart is a quick reboot and is completely safe.`,
    steps: [
      {
        title: 'Wait 30 seconds first',
        content: "Sometimes what looks like a freeze is actually the phone processing something that takes longer than expected. If your screen went unresponsive, wait 30 seconds before trying anything else. The phone may sort itself out on its own.",
      },
      {
        title: 'For iPhone 8 or newer — force restart',
        content: "Press and quickly release the Volume Up button. Press and quickly release the Volume Down button. Then press and hold the Side button (right side of the phone) until the Apple logo appears. Release the button. The phone will restart.",
        tip: "This method works on iPhone 8, 9, X, 11, 12, 13, 14, 15, and 16 models.",
      },
      {
        title: 'For iPhone 7 — force restart',
        content: "Press and hold the Volume Down button and the Sleep/Wake button (right side) at the same time. Keep holding both until you see the Apple logo, then release.",
      },
      {
        title: 'For most Android phones — force restart',
        content: "Press and hold the Power button for 10–15 seconds. Most Android phones will either restart automatically or show a menu with a Restart option. If you see a menu, tap Restart.",
        tip: "If your Android phone has a separate Volume Down button, try holding Power + Volume Down together for 10 seconds.",
      },
      {
        title: 'If the screen is completely black and unresponsive',
        content: "The phone may have a dead battery. Plug it into a charger and wait 10 minutes before trying the force restart steps again. A completely dead battery can make the phone appear frozen.",
      },
      {
        title: 'After the restart — find what caused it',
        content: "Once the phone is back on, think about what you were doing when it froze. If it happens every time you open a specific app, that app may be the problem. Delete it and reinstall it from the App Store or Google Play Store. If it freezes randomly and often, the phone may need a software update — go to Settings and look for a System or Software Update option.",
        warning: "If your phone freezes several times a day, every day, and a restart doesn't help, there may be a hardware issue. Contact your carrier or manufacturer for support.",
      },
    ],
  },
  {
    slug: 'forgot-email-password-recovery',
    title: 'Forgot Your Email Password — Step-by-Step Recovery',
    excerpt: "Locked out of your email account? This guide walks you through recovering access to Gmail, Yahoo, and Outlook accounts, even if you've forgotten your password completely.",
    category: 'troubleshooting',
    tags: ['password', 'email', 'account recovery', 'gmail', 'outlook'],
    readTime: '7 min',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Forgetting an email password is one of the most common tech problems, and the major email providers have built fairly straightforward recovery processes to handle it. The key is that you must have access to at least one recovery option — a phone number, a backup email address, or answers to security questions — that you set up when the account was created.

If you never set up any recovery options, recovery becomes much harder. That is one reason this guide encourages you to check your recovery options even if you are not currently locked out.

The process for all major email providers follows the same general path: click "Forgot password," prove you own the account using your recovery phone or email, and create a new password. The steps below cover Gmail (Google), Yahoo Mail, and Outlook (Microsoft) specifically.

**Before you start:** Have your phone handy. Most password recovery methods send a text message or call to your phone number.`,
    steps: [
      {
        title: 'Go to the email provider sign-in page',
        content: "Open a web browser and go to: gmail.com (for Google/Gmail), yahoo.com (for Yahoo Mail), or outlook.com (for Outlook/Hotmail/MSN). On the sign-in page, enter your email address. Do not guess your password — click 'Forgot password' (Gmail), 'I forgot my password' (Yahoo), or 'Forgot my password' (Outlook).",
        tip: "Only use the official website. Be cautious of search results — make sure the address bar shows exactly gmail.com, yahoo.com, or outlook.com.",
      },
      {
        title: 'Choose how to verify your identity',
        content: "The website will offer you one or more recovery options: a text message to your phone, a call to your phone, a message to a backup email address, or security questions. Choose the one you have access to. For most people, a text message to a cell phone is the fastest.",
      },
      {
        title: 'Enter the verification code',
        content: "If you chose text message, check your phone for a message from Google, Yahoo, or Microsoft. It will contain a 6-digit code. Type that code into the box on the computer screen within a few minutes (the codes expire quickly). If you chose backup email, check that inbox for a similar code.",
        warning: "No legitimate company will ever call you and ask you to read them a verification code out loud. If someone calls and asks for your code, hang up — it is a scam.",
      },
      {
        title: 'Create a new password',
        content: "After verifying your identity, you will be taken to a page where you can set a new password. Choose something you will remember but that is hard for others to guess. A good approach: think of three unrelated words and combine them with a number, like 'umbrella-guitar-47-cloud'. Write your new password down in a safe place — not on a sticky note on the computer, but in a notebook kept somewhere secure.",
      },
      {
        title: 'Sign in and update your recovery information',
        content: "After resetting, sign in with your new password. While you are in your account, go to Security Settings and make sure your recovery phone number and backup email are current and accurate. Having updated recovery info prevents future lockouts.",
      },
      {
        title: "If you can't verify — contact support",
        content: "If you no longer have access to the recovery phone or email, the process is harder. Gmail has an Account Recovery form at accounts.google.com/signin/recovery that asks you additional questions about your account history. Yahoo and Outlook have similar forms. This process can take several days. If the account was a work or school email, contact your IT department — they can reset it directly.",
      },
    ],
  },
  {
    slug: 'phone-running-very-slowly',
    title: 'Your Phone Is Running Very Slowly — How to Speed It Up',
    excerpt: "A slow, sluggish phone is one of the most common complaints. Before buying a new device, try these steps — most phones respond well to a thorough cleaning.",
    category: 'troubleshooting',
    tags: ['slow phone', 'performance', 'speed', 'storage', 'battery'],
    readTime: '7 min',
    thumbnailEmoji: '🐢',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A phone that used to feel fast but now feels sluggish is experiencing one of the most common issues in mobile technology. The good news: this is usually fixable without spending any money, and you do not need to buy a new phone.

Phones slow down for a few main reasons. First, storage fills up. When a phone has less than 10–15% of its storage free, it slows down noticeably because it has no room to do its temporary work. Second, apps accumulate in the background and keep using memory and processing power even when you are not actively using them. Third, an outdated operating system can cause poor performance because it is not optimized for current apps.

The steps below are in order of impact — the first steps will make the biggest difference for most people. Plan for about 20–30 minutes to work through them.`,
    steps: [
      {
        title: 'Check your storage and delete unused items',
        content: "On iPhone: go to Settings > General > iPhone Storage. On Android: go to Settings > Storage. Look at how much space is used. If it shows 90% or more full, that is likely the main cause of slowness. Delete apps you no longer use (press and hold the app icon, then choose to delete it). Empty your Recently Deleted album in Photos (open Photos, tap Albums, scroll down to 'Recently Deleted,' and empty it).",
        tip: "Photos and videos take up the most storage. Consider backing them up to Google Photos (free, up to 15 GB) and deleting them from your phone.",
      },
      {
        title: 'Close all background apps',
        content: "On iPhone: swipe up from the bottom of the screen slowly to see all open apps, then swipe each one upward off the screen. On Android: tap the square 'Recents' button at the bottom and close all open apps. Apps running in the background consume memory and processing power even when you are not looking at them.",
      },
      {
        title: 'Restart the phone',
        content: "A full restart clears temporary files and memory. This is the equivalent of clearing off a cluttered desk — everything in temporary memory gets released. Restart your phone at least once a week for best performance.",
      },
      {
        title: 'Update your phone software',
        content: "On iPhone: go to Settings > General > Software Update. On Android: go to Settings > System > Software Update (the exact path varies by manufacturer). Install any available updates. Software updates often include performance improvements that can noticeably speed up older phones.",
        tip: "Updates are free and are released by Apple and Google, not by your phone carrier. They will not change your phone plan or cost money.",
      },
      {
        title: 'Clear app caches (Android)',
        content: "On Android, apps build up temporary files called caches that take up space and can cause slowness. Go to Settings > Apps, tap on any large app (like YouTube, Facebook, or Amazon), and tap 'Clear Cache.' This does not delete the app or any of your data inside it — it removes temporary files.",
        tip: "This step is specific to Android phones. iPhones manage their own caches automatically.",
      },
      {
        title: 'Turn off animations',
        content: "The visual animations when you open and close apps use processing power. On older phones this can cause noticeable lag. On Android: go to Settings > About Phone, tap Build Number seven times to unlock Developer Options, then go to Developer Options and set all three animation scale settings to 0.5x. On iPhone, go to Settings > Accessibility > Motion and turn on 'Reduce Motion.'",
      },
      {
        title: 'Consider a factory reset as a last resort',
        content: "If the phone is still very slow after all the above steps, a factory reset — which wipes everything and starts fresh — often restores the performance of an older phone dramatically. Before doing this, back up your photos, contacts, and important data. On iPhone: Settings > General > Transfer or Reset iPhone. On Android: Settings > System > Reset > Factory Reset.",
        warning: "A factory reset permanently deletes everything on the phone. Only do this after backing up your photos, contacts, and anything else you want to keep.",
      },
    ],
  },
  {
    slug: 'computer-fan-loud-and-hot',
    title: 'Computer Fan Is Loud and the Computer Feels Hot',
    excerpt: "A roaring fan or an unusually hot laptop is your computer asking for help. Here's what's causing it and what you can do today to bring the temperature down.",
    category: 'troubleshooting',
    tags: ['fan', 'overheating', 'computer', 'performance', 'maintenance'],
    readTime: '6 min',
    thumbnailEmoji: '🌡️',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `When your computer's fan suddenly gets loud or runs at high speed all the time, it is working hard to cool something down. This is the computer's built-in protection system — it is trying to prevent heat damage to its internal parts. Taking action sooner rather than later is important, because excessive heat over time can shorten the life of a computer.

The most common causes are something demanding running in the background that is using a lot of the processor, dust blocking the air vents, the computer sitting on a soft surface like a bed or carpet that blocks airflow, or — for older computers — dried-out thermal paste inside (this requires professional repair).

The good news is that most of the fixes are straightforward and free.`,
    steps: [
      {
        title: 'Do not use the computer on soft surfaces',
        content: "Never place a laptop on a bed, a pillow, a couch cushion, or carpet. These materials block the air vents on the bottom and sides, trapping heat inside. Always use a laptop on a hard, flat surface. A laptop cooling pad (sold online for $15–$30) provides additional airflow and is worth the investment if you primarily use a desk.",
        warning: "Using a laptop on a bed or carpet for extended periods is one of the most common causes of early fan and motherboard failure.",
      },
      {
        title: 'Check what is using the processor',
        content: "Open Task Manager on Windows (press Ctrl + Shift + Esc, or right-click the Start button). On Mac, open Activity Monitor (find it in Applications > Utilities). Look at the CPU column and sort by usage. If any program is using 80–100% of the CPU, that is what is making the fan run hard. You can click that program and choose 'End Task' (Windows) or 'Force Quit' (Mac) to stop it.",
        tip: "Common culprits: antivirus scans, software updates running in the background, or a browser with many tabs open.",
      },
      {
        title: 'Clean the air vents',
        content: "Dust builds up in vents over months and years, blocking airflow and trapping heat. Look for the vent openings on the sides and bottom of a laptop, or the back and sides of a desktop tower. Use a can of compressed air (sold at office supply stores for about $8) to blow dust out of the vents. Do this outdoors or over a trash can — a surprising amount of dust can come out.",
      },
      {
        title: 'Reduce the number of browser tabs',
        content: "Each open browser tab uses memory and some processor power. If you have 15 or 20 tabs open, try closing most of them and see if the fan quiets down. Bookmark anything you want to return to: in any browser, press Ctrl+D (Windows) or Command+D (Mac) to bookmark the current page.",
      },
      {
        title: 'Make sure software updates are not running',
        content: "Windows and Mac updates download and install in the background, which can push the processor hard for 20–30 minutes. If this is a sudden issue that started today, check if an update is in progress. On Windows, go to Settings > Windows Update. On Mac, go to System Settings > General > Software Update. If an update is running, let it finish before drawing conclusions.",
      },
      {
        title: 'Restart the computer',
        content: "A simple restart closes all running processes and lets the computer cool down. After restarting, give it 10 minutes of light use and see if the fan returns to normal. Many fan issues are caused by processes that get stuck after days or weeks of continuous use without a restart.",
      },
      {
        title: 'When to call a professional',
        content: "If the fan is extremely loud even when the computer is barely doing anything, if the computer shuts itself off due to heat, or if it is more than 5 years old, the internal thermal paste may need to be replaced by a repair technician. This is a $30–$60 repair at most computer shops and can dramatically extend the life of the machine.",
      },
    ],
  },
  {
    slug: 'cant-find-a-file-on-computer',
    title: "Can't Find a File on Your Computer — Search Tips That Work",
    excerpt: "You saved a document or photo but now you can't find it. This guide teaches you how to search your computer effectively and never lose a file again.",
    category: 'troubleshooting',
    tags: ['files', 'search', 'documents', 'windows', 'mac', 'storage'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Losing a file on your own computer is a surprisingly common frustration. Files don't disappear — they are somewhere on your computer, and with the right search technique you can almost always find them in under two minutes.

The secret is to use your computer's built-in search feature rather than browsing through folders manually. Both Windows and Mac have powerful search tools that can find a file instantly if you know any part of its name, what type of file it is, or roughly when you last worked on it.

The most important habits for avoiding lost files in the future: always save documents to your Documents folder, always save photos to your Pictures folder, and give files descriptive names (like 'Tax Return 2025' instead of 'Document1').`,
    steps: [
      {
        title: 'Search on Windows',
        content: "Click the search bar at the bottom of the screen (it usually says 'Search' or has a magnifying glass icon). Type part of the file name. If you remember the file was a Word document, type the name followed by '.docx' (example: 'tax return.docx'). The results will appear as you type. Click the file to open it.",
        tip: "If you don't remember the name, type a word you know is IN the document. Windows will search inside file contents too.",
      },
      {
        title: 'Search on Mac',
        content: "Press Command + Space (the Space Bar while holding the Command key) to open Spotlight Search. Start typing the file name. Results appear instantly. Click on the file to open it, or click 'Show all in Finder' at the bottom to see more results.",
      },
      {
        title: 'Search by file type',
        content: "If you remember what kind of file it is but not the name, search by type. On Windows, type '*.pdf' to find all PDFs, '*.docx' for Word documents, '*.xlsx' for Excel files, or '*.jpg' for photos. On Mac, open Finder, press Command+F, and use the Kind filter to select the file type.",
      },
      {
        title: 'Search by date',
        content: "If you remember roughly when you created or last modified the file, you can filter by date. On Windows, after searching, click 'Date modified' in the search results and pick a time range. On Mac, in Finder search, add a 'Last opened date' or 'Date created' filter.",
      },
      {
        title: 'Check the Downloads and Desktop folders',
        content: "If you downloaded a file from email or the internet and then couldn't find it, check the Downloads folder first. On Windows, open File Explorer and click 'Downloads' in the left sidebar. On Mac, the Downloads folder is in your Dock at the bottom. Also check the Desktop — files are often saved there by default.",
      },
      {
        title: 'Check the Recycle Bin or Trash',
        content: "If the file is missing from everywhere and you think it may have been accidentally deleted, check the Recycle Bin (Windows) or Trash (Mac). On Windows, double-click the Recycle Bin icon on your desktop. On Mac, click the Trash icon in the Dock. If you find the file, right-click it and choose 'Restore' (Windows) or drag it back to a folder (Mac).",
      },
    ],
  },
  {
    slug: 'printer-wont-print-fix',
    title: "Printer Won't Print — A Step-by-Step Fix Guide",
    excerpt: "When your printer ignores your print job or shows an error, these steps will help you get it working again without calling a repair person.",
    category: 'troubleshooting',
    tags: ['printer', 'printing', 'wifi', 'ink', 'paper jam'],
    readTime: '7 min',
    thumbnailEmoji: '🖨️',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Printers are notoriously stubborn, but most printing problems come down to a handful of causes: the printer is offline, there is a stuck print job, the cables are loose, or ink is low. Working through these in order will resolve most problems.

Wireless printers add another layer of complexity because they depend on a steady WiFi connection. If your router was recently restarted or your WiFi password was changed, your printer may have lost its connection and need to be reconnected.

Before calling anyone or buying a new printer, work through the steps below. Plan for 15–20 minutes.`,
    steps: [
      {
        title: 'Check that the printer is on and has paper',
        content: "It sounds basic, but confirm that the printer's power button is on (usually a green or blue light), the paper tray has paper loaded correctly, and the paper tray is fully seated (pushed all the way in). A printer with an empty paper tray or a partially inserted tray will silently refuse to print.",
      },
      {
        title: 'Check for paper jams',
        content: "Open every door, tray, and access panel on the printer. Gently pull out any piece of paper that is stuck — always pull in the direction of paper travel (straight out or forward), never backwards. Even a small torn piece of paper left inside can cause repeated errors. Check the back access door as well, not only the front.",
        warning: "Do not reach into a laser printer's fuser area (the part that gets hot) without letting the printer cool for 10 minutes after turning it off.",
      },
      {
        title: 'Clear the print queue',
        content: "On Windows, look for a printer icon in the bottom-right corner of your screen (in the system tray). Double-click it to open the print queue. If you see any print jobs listed, select them all and delete them. Then try printing again. On Mac, go to System Settings > Printers & Scanners, click your printer, and click 'Open Print Queue' to clear it.",
      },
      {
        title: 'Turn the printer off and back on',
        content: "Press the printer's power button to turn it off. Wait 30 seconds. Turn it back on. Then turn your computer off and back on as well. This clears any communication errors between the computer and the printer.",
      },
      {
        title: 'Check the ink or toner levels',
        content: "Low ink or toner doesn't always cause obvious warnings. On Windows: go to Settings > Devices > Printers & Scanners, select your printer, and look for ink level information. Alternatively, check the printer's own display screen if it has one. Some printers stop printing entirely when ink reaches a certain low level, even if there is technically still some left.",
      },
      {
        title: 'For wireless printers — reconnect to WiFi',
        content: "If the printer is wireless (no USB cable to the computer), it may have lost its connection. On the printer's display screen, go to the WiFi or Network settings and reconnect it to your home network. You will need your WiFi network name and password.",
        tip: "Most wireless printers have a WiFi Setup Wizard in their settings menu that walks you through the reconnection process step by step.",
      },
      {
        title: 'Reinstall or update the printer driver',
        content: "If nothing above works, the software your computer uses to communicate with the printer (called a driver) may be outdated or corrupted. Go to the printer manufacturer's website (hp.com, epson.com, canon.com, or brother.com), search for your printer model, and download the latest driver. Installing the updated driver often resolves persistent printing issues.",
      },
    ],
  },
  {
    slug: 'bluetooth-wont-connect-fix',
    title: "Bluetooth Won't Connect — Here's How to Fix It",
    excerpt: "Bluetooth headphones, speakers, and devices can be stubborn about connecting. This guide shows you how to fix the most common pairing and connection problems.",
    category: 'troubleshooting',
    tags: ['bluetooth', 'headphones', 'speaker', 'wireless', 'pairing'],
    readTime: '5 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Bluetooth technology is convenient when it works and deeply frustrating when it doesn't. Most Bluetooth connection problems come from one of three sources: the device isn't in pairing mode, a previous pairing record is causing a conflict, or Bluetooth is turned off on one of the two devices.

Bluetooth connections work by one device "advertising" its availability and another device "seeing" it and connecting. If the first device is not actively advertising — which usually requires putting it into pairing mode specifically — the second device won't find it no matter how long you look.

The fix is almost always to forget the old connection on both sides and pair fresh.`,
    steps: [
      {
        title: 'Make sure Bluetooth is on on both devices',
        content: "On your phone or tablet: swipe down from the top of the screen to open quick settings, and confirm the Bluetooth icon is on (usually blue). On a computer: check the system tray (Windows) or menu bar (Mac) for the Bluetooth icon. On the device you're connecting (headphones, speaker), look for a power indicator light or a specific Bluetooth light.",
      },
      {
        title: 'Put the Bluetooth device into pairing mode',
        content: "Most Bluetooth devices need to be put into pairing mode manually — turning them on alone is not enough. Usually this means holding the power button or a dedicated Bluetooth button for 3–5 seconds until a light flashes blue rapidly. Check the device's manual or search the model name plus 'pairing mode' online for specific instructions.",
        tip: "If the device was already paired to a different phone, it may automatically try to connect to that phone instead of yours. Pairing mode forces it to look for new connections.",
      },
      {
        title: 'Remove the old pairing from your phone or tablet',
        content: "On iPhone: go to Settings > Bluetooth, find the device name, tap the blue 'i' circle next to it, and tap 'Forget This Device.' On Android: go to Settings > Connected Devices > Bluetooth, tap the gear icon next to the device, and tap 'Forget.' Now try pairing fresh from scratch.",
      },
      {
        title: 'Reset the Bluetooth device itself',
        content: "Many Bluetooth headphones and speakers have a factory reset option that clears all previous pairings. This is usually done by holding a button combination for 10+ seconds. Check the manual or search '[device name] factory reset' for instructions. After resetting, put it back into pairing mode and try connecting.",
      },
      {
        title: 'Restart both devices',
        content: "Turn off your phone or tablet and the Bluetooth device. Wait 30 seconds. Turn both back on. Then put the Bluetooth device into pairing mode and connect. A restart clears temporary software errors that interfere with Bluetooth discovery.",
      },
      {
        title: 'Reduce interference',
        content: "Bluetooth uses the 2.4 GHz radio frequency, which is shared with WiFi routers and microwave ovens. If you are standing next to a microwave that is running, or your router is in the same spot, this can interfere. Move a few feet away and try again.",
      },
    ],
  },
  {
    slug: 'youtube-videos-buffering-fix',
    title: 'YouTube Videos Keep Buffering and Pausing — How to Fix It',
    excerpt: "That spinning circle in the middle of a YouTube video is one of life's small frustrations. Here's what causes it and how to get videos playing smoothly.",
    category: 'troubleshooting',
    tags: ['youtube', 'buffering', 'streaming', 'internet', 'video'],
    readTime: '5 min',
    thumbnailEmoji: '▶️',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `When a YouTube video keeps stopping to buffer — that spinning circle or progress bar — it usually means one thing: the internet connection is not fast enough to deliver the video at the quality level you have selected. The fix is usually to lower the video quality, move closer to your router, or reduce how many things are using the internet at the same time.

YouTube automatically adjusts video quality based on your connection speed, but it doesn't always get it right. Manually setting a lower quality takes 30 seconds and usually solves the problem immediately.

High-definition video (1080p or 4K) requires a much faster internet connection than standard-definition video (360p or 480p). If your internet connection is slow or inconsistent, lower-quality video plays much more smoothly than high-quality video that constantly pauses.`,
    steps: [
      {
        title: 'Lower the video quality',
        content: "While a video is playing, click or tap the gear icon (Settings) in the bottom corner of the video player. Select 'Quality.' Choose a lower option — 480p or 360p instead of 1080p or 720p. The video will look slightly less sharp but will play without buffering.",
        tip: "For most TV-watching, 480p looks perfectly fine on a phone or tablet screen. The difference only becomes obvious on a large monitor or TV.",
      },
      {
        title: 'Move closer to your router',
        content: "Streaming video requires a steady, fast WiFi connection. If you are in a room far from your router, the signal may be weak. Move closer to the router (or move the router to a more central location) and see if the buffering stops.",
      },
      {
        title: 'Reduce other internet activity in your home',
        content: "If other people or devices in your home are streaming video, downloading files, or playing online games at the same time, your available internet bandwidth is being shared. Try pausing those activities while you watch and see if your video plays better.",
      },
      {
        title: 'Clear your browser cache (on a computer)',
        content: "If you are watching YouTube in a web browser on a computer, a cluttered browser cache can cause slowdowns. In Chrome: press Ctrl+Shift+Delete, check 'Cached images and files,' and click 'Clear data.' Reopen YouTube and try again.",
      },
      {
        title: 'Restart your router',
        content: "If the problem started suddenly and nothing else has changed, restart your router. Unplug it for 60 seconds, plug it back in, wait 2 minutes for it to reconnect, and try YouTube again.",
      },
      {
        title: 'Use the YouTube app instead of a browser (or vice versa)',
        content: "If you are watching in a web browser, try downloading the YouTube app (free from the App Store or Google Play) and watching there instead. The app is often more efficient with your internet connection. If you are already using the app, try watching in a browser to see if that helps.",
      },
    ],
  },
  {
    slug: 'phone-says-no-service-fix',
    title: 'Phone Says "No Service" — What to Do',
    excerpt: "Seeing 'No Service' or 'SOS Only' on your phone is frustrating. This guide explains why it happens and how to get your phone back on the network.",
    category: 'troubleshooting',
    tags: ['no service', 'cell signal', 'carrier', 'sim card', 'phone'],
    readTime: '5 min',
    thumbnailEmoji: '📵',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `"No Service" or "SOS Only" means your phone cannot connect to your cellular carrier's network. This can happen for a few reasons: you may be in an area with poor coverage, your phone may need to be restarted to re-register on the network, your SIM card may have shifted loose, or your carrier may be experiencing a local outage.

The good news is that most "No Service" situations are temporary and resolve on their own, or with a quick restart. The steps below take you from the simplest fix to more involved solutions.

**Important:** Even with "No Service," you can usually still dial 911 in an emergency. Emergency calls do not require your carrier's network.`,
    steps: [
      {
        title: 'Check if you are in a known dead zone',
        content: "Step outside or move to a different room or floor. Some buildings, basements, rural areas, and valleys have poor or no cell signal. If the signal returns when you move, you were in an area with poor coverage. Your carrier's website usually has a coverage map you can check.",
      },
      {
        title: 'Turn Airplane Mode on and off',
        content: "Swipe down from the top of the screen to open quick settings. Tap the Airplane Mode icon to turn it on (it will turn off all signals). Wait 10 seconds. Tap it again to turn it off. This forces your phone to disconnect from and then reconnect to the cellular network, which often resolves temporary service issues.",
        tip: "This is the fastest fix for most 'No Service' situations and works on both iPhone and Android.",
      },
      {
        title: 'Restart your phone',
        content: "A full restart forces the phone to re-register with the cellular network from scratch. Turn the phone completely off, wait 30 seconds, and turn it back on. Many 'No Service' problems resolve after a restart.",
      },
      {
        title: 'Check for a carrier settings update (iPhone)',
        content: "On iPhone, go to Settings > General > About. If a carrier settings update is available, a pop-up will appear and prompt you to update. These updates improve how your phone connects to the network and can resolve persistent service issues.",
      },
      {
        title: 'Check if your SIM card is seated correctly',
        content: "The SIM card is a tiny card that stores your phone number and carrier information. It sits in a small tray on the side of your phone. If it has shifted slightly, your phone may lose service. Use the SIM tray removal tool that came with your phone (or a straightened paper clip) to pop out the tray, remove the SIM, reinsert it firmly, and close the tray. Then restart the phone.",
        warning: "Do this only while the phone is powered off. Contact your carrier if you are unsure about locating the SIM tray — they can guide you over the phone.",
      },
      {
        title: 'Check if your carrier is having an outage',
        content: "Go to downdetector.com and search for your carrier (Verizon, AT&T, T-Mobile, etc.) to see if others are reporting service issues in your area right now. If there is an outage, you need to wait — it will be restored.",
      },
      {
        title: 'Contact your carrier',
        content: "If none of the above works, call your carrier from a landline or a borrowed phone. Provide your account number and phone number and ask if there is an issue with your account (such as a suspended service) or if they can remotely reset your connection. Numbers: AT&T 1-800-331-0500, Verizon 1-800-922-0204, T-Mobile 1-800-937-8997.",
      },
    ],
  },
  {
    slug: 'computer-keeps-restarting-fix',
    title: 'Computer Keeps Restarting on Its Own — How to Stop It',
    excerpt: "A computer that randomly shuts down and reboots itself is usually responding to an error it can't recover from. This guide explains the common causes and fixes.",
    category: 'troubleshooting',
    tags: ['restart', 'crash', 'blue screen', 'windows', 'overheating'],
    readTime: '6 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-05-03',
    difficulty: 'Intermediate',
    body: `When a computer restarts itself without warning — especially if it does it more than once — it is responding to a serious error that it could not recover from any other way. This is called a crash, and on Windows it is sometimes accompanied by a blue screen with an error message (commonly called a 'blue screen of death' or BSOD).

The most common causes are overheating, a failed Windows or macOS update that needs to finish, bad memory (RAM), or a driver that has become corrupted. Working through these in order will identify the problem in most cases.

**Note:** Random restarts that happen only during demanding tasks (gaming, video editing) almost always point to overheating. Random restarts that happen even when the computer is idle are more likely a software or hardware issue.`,
    steps: [
      {
        title: 'Check for overheating',
        content: "Overheating is the most common cause of random restarts. Feel the bottom and sides of your laptop — if it is very hot to the touch, that is likely the cause. Make sure the vents are not blocked (never use a laptop on a bed or carpet). Use compressed air to blow dust from the vents. Refer to the 'Computer Fan Is Loud and Hot' guide for more detail.",
      },
      {
        title: 'Check for pending Windows updates',
        content: "Windows sometimes needs to restart to finish installing updates, and if an update is stuck, it may trigger repeated restarts. Go to Settings > Windows Update and let it finish any pending updates. After updating, restart the computer manually and see if the random restarts stop.",
      },
      {
        title: 'Note the error message if you see one',
        content: "If a blue screen appears before the restart, try to write down the error code or stop code displayed (it looks like DRIVER_POWER_STATE_FAILURE or MEMORY_MANAGEMENT). Search that exact phrase on a computer or phone to find information specific to that error. This narrows the diagnosis significantly.",
      },
      {
        title: 'Disable automatic restart on errors (Windows)',
        content: "Windows is set by default to restart automatically after a crash, which means the error message disappears before you can read it. To change this: right-click the Start button, select System, click 'Advanced system settings,' click 'Settings' under Startup and Recovery, and uncheck 'Automatically restart.' Now if a crash happens, the blue screen will stay visible until you restart manually.",
      },
      {
        title: 'Run Windows Memory Diagnostic',
        content: "Faulty RAM (the computer's working memory) is a common cause of crashes. On Windows, press the Windows key and type 'Windows Memory Diagnostic.' Open it and choose 'Restart now and check for problems.' The test runs automatically and will report any issues when Windows restarts.",
      },
      {
        title: 'Check your hard drive health',
        content: "A failing hard drive can cause random crashes and restarts. On Windows, open Command Prompt (search 'cmd' in the Start menu), type 'chkdsk /f' and press Enter. The system will ask to schedule the check for the next restart — type Y and press Enter. Restart the computer and let the check run.",
      },
      {
        title: 'When to take it to a professional',
        content: "If random restarts continue after checking for overheating, completing updates, and running diagnostics, the problem is likely a hardware failure that requires professional diagnosis — a faulty power supply, failing RAM module, or corrupted system files. A repair shop can run more detailed diagnostics and recommend a specific repair.",
      },
    ],
  },
  {
    slug: 'touch-screen-not-responding',
    title: 'Touchscreen Not Responding to Taps — How to Fix It',
    excerpt: "When your phone or tablet screen ignores your taps or responds in the wrong place, these steps will help you get it working again.",
    category: 'troubleshooting',
    tags: ['touchscreen', 'screen', 'taps', 'phone', 'tablet'],
    readTime: '5 min',
    thumbnailEmoji: '👆',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A touchscreen that doesn't respond to taps — or that responds in the wrong location — is one of the more unsettling phone problems because you use the screen for everything. But in the majority of cases, the fix is quick.

The most common causes are moisture or lotion on the screen, a screen protector that has started to peel up at the edges, a software freeze, or — in some cases — a cracked screen. The first three are easy to check and fix yourself.

Touchscreens work by detecting tiny electrical changes when your finger touches the glass. Anything that interferes with that electrical signal — water, oil, a peeling protector, or a heavy case that presses on the edges — can cause erratic or absent responses.`,
    steps: [
      {
        title: 'Clean your screen and dry your fingers',
        content: "Use a clean, dry cloth to wipe the screen thoroughly. Make sure your fingers are dry — water, lotion, or hand cream on your fingertips prevents the screen from detecting your touch properly. Try tapping with a dry fingertip and see if the response improves.",
      },
      {
        title: 'Check your screen protector',
        content: "If you use a plastic screen protector and it has started to bubble, peel, or separate at the edges, it can interfere with touch detection. Lift a corner and see if the screen responds better without it. If so, replace the screen protector with a new one.",
      },
      {
        title: 'Remove your phone case',
        content: "Some thick phone cases put slight pressure on the edges of the screen, which can cause incorrect touch registration. Remove the case and test the screen directly.",
      },
      {
        title: 'Restart the phone',
        content: "A software freeze or app crash can make the screen appear unresponsive when the hardware is actually fine. If you can, restart the phone using the physical power button. If the screen is completely unresponsive, try a force restart (see the 'Phone Screen Is Frozen' guide for exact steps by model).",
      },
      {
        title: 'Check if a specific area is unresponsive',
        content: "Open the Calculator app or any app with buttons spread across the screen and tap systematically across every part of the screen. If certain areas consistently don't respond (especially along the edges), this may indicate physical screen damage — either a crack that isn't fully visible or a loose internal connection.",
      },
      {
        title: 'Update your software',
        content: "An iOS or Android update can fix bugs that affect touch sensitivity. Go to Settings > General > Software Update (iPhone) or Settings > System > Software Update (Android) and install any available updates.",
        warning: "If the screen has a visible crack running across it, it may have damaged the digitizer layer underneath that registers touch. In this case, the screen needs professional repair — a cracked screen does not always mean the entire phone is ruined.",
      },
    ],
  },
  {
    slug: 'battery-drains-too-fast-fix',
    title: 'Battery Drains Too Fast — How to Make It Last Longer',
    excerpt: "If your phone battery goes from 100% to dead before the day is done, these steps will help you find what's draining it and get more hours per charge.",
    category: 'troubleshooting',
    tags: ['battery', 'battery life', 'phone', 'iphone', 'android'],
    readTime: '6 min',
    thumbnailEmoji: '⚡',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A phone battery that drains too quickly is one of the most common complaints among smartphone users. It usually comes down to a combination of settings that are using more power than necessary, apps running in the background, or a battery that has aged past its optimal performance.

Modern phone batteries are designed to retain about 80% of their original capacity after 500 complete charge cycles. If you have had your phone for 2–3 years and charge it every day, you have likely gone through 500+ cycles, meaning the battery naturally holds less charge than it once did.

Before assuming the battery is worn out, however, it is worth checking your settings. Many default settings — location services, background app refresh, screen brightness — are set high by default and can be turned down significantly without affecting how you use the phone.`,
    steps: [
      {
        title: 'Check your battery health',
        content: "On iPhone: go to Settings > Battery > Battery Health & Charging. If the Maximum Capacity is below 80%, the battery is significantly worn and replacement will make a noticeable difference. Battery replacement through Apple costs $99 and can make an older phone feel like new. On Android: some phones show battery health in Settings > Battery; others require a diagnostic app.",
      },
      {
        title: 'Reduce screen brightness',
        content: "The screen is the single biggest battery consumer on most phones. Go to Settings > Display & Brightness (iPhone) or Settings > Display (Android) and lower the brightness. Also turn on Auto-Brightness if available, which adjusts the screen based on lighting conditions and saves power.",
      },
      {
        title: 'Turn off location services for apps that don't need it',
        content: "On iPhone: go to Settings > Privacy & Security > Location Services. Turn off location for any apps that don't genuinely need it. Games, shopping apps, and news apps rarely need your location. Set apps you do want to use location to 'While Using' rather than 'Always.' On Android: Settings > Location > App Permissions.",
      },
      {
        title: 'Turn off Background App Refresh',
        content: "On iPhone: go to Settings > General > Background App Refresh and turn it off entirely, or turn it off for individual apps. This prevents apps from updating their content while you are not using them — a significant battery drain. On Android, go to Settings > Battery > Background usage limits.",
      },
      {
        title: 'Turn off WiFi and Bluetooth when you are not using them',
        content: "If you are out and away from your home WiFi, your phone constantly searches for WiFi networks it recognizes, using battery power. The same is true for Bluetooth. Swipe down to open quick settings and turn off WiFi and Bluetooth when you do not need them.",
      },
      {
        title: 'Enable Low Power Mode',
        content: "On iPhone: go to Settings > Battery and turn on Low Power Mode. This automatically reduces background activity, email fetch frequency, and some visual effects to extend battery life. It is useful when you know you will not be near a charger. On Android, the equivalent is Battery Saver mode under Settings > Battery.",
      },
      {
        title: 'Consider a battery replacement for older phones',
        content: "If your phone is 3+ years old and your battery health is below 80%, a battery replacement is the most cost-effective solution before buying a new phone. Apple, Samsung, and most major manufacturers offer battery replacement services. Prices range from $50–$100. After replacement, the phone typically performs like it did when new.",
      },
    ],
  },
  {
    slug: 'cant-log-into-account-fix',
    title: "Can't Log Into an Account — How to Recover Access",
    excerpt: "Locked out of an account? Whether it's your email, a shopping site, or a social media account, this guide covers the recovery steps that work.",
    category: 'troubleshooting',
    tags: ['login', 'password', 'account recovery', 'locked out', 'two-factor'],
    readTime: '6 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Being locked out of an online account is frustrating, but almost every major service has a clear recovery process. The steps below will help you regain access to most accounts, whether the issue is a forgotten password, a changed password, or an account that was locked after too many wrong attempts.

Every legitimate website has a "Forgot password" or "Need help signing in" link on the login page. This is always the right first step — do not try to remember the password by repeatedly guessing, as most sites will temporarily lock your account after 5–10 failed attempts.

The fastest and most reliable recovery method is usually a text message or email sent to the phone number or backup email you provided when you created the account. This is why keeping your recovery information current is so important.`,
    steps: [
      {
        title: "Find the 'Forgot password' link",
        content: "On the login page of the website or app, look for a link that says 'Forgot password,' 'Forgot your password?,' 'Can't log in?,' or 'Need help?' It is usually directly below the password field. Click or tap it to start the recovery process.",
        tip: "Do not keep trying to guess the password. After too many wrong attempts, the account will lock temporarily and you will have to wait 15–30 minutes before trying recovery.",
      },
      {
        title: 'Choose your recovery method',
        content: "Most services offer to send a reset link or code to your phone (text message) or to your backup email address. Choose the option you currently have access to. A text message to your cell phone is usually the fastest. Check your phone's text messages for a 6-digit code from the service.",
        warning: "Never give this code to anyone who calls you claiming to help. Legitimate companies do not call you and ask for your verification codes.",
      },
      {
        title: 'Enter the verification code',
        content: "On the recovery page, enter the code from your text message or email. These codes usually expire in 10 minutes, so complete this step promptly. If it expires, request a new code.",
      },
      {
        title: 'Create a new password',
        content: "Choose a password that is at least 12 characters long. A helpful method: pick three unrelated words and join them with hyphens and a number — for example, 'purple-teapot-52-mountain.' Write the new password down on paper and keep it in a safe place, such as a notebook stored where you keep important documents.",
      },
      {
        title: "If you can't access your recovery phone or email",
        content: "If the phone number or backup email on your account is outdated, recovery becomes more involved. Most services have an additional option — identity questions, proof of ID, or a review process. For example, Facebook allows you to have trusted friends verify your identity. Google has an account recovery form. Follow the site's specific recovery process for this situation.",
      },
      {
        title: 'After regaining access — update your security info',
        content: "Once you are back in your account, go to the account's security or profile settings and update your recovery phone number and backup email to current, working options. Set up two-step verification if it is available — this adds a text message code to every login and makes future lockouts much less likely.",
      },
    ],
  },
];
