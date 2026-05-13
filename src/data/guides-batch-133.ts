// guides-batch-133 — Content cycle 2026-05-12
// Topics: AI scam call defense; iPhone Mirroring on Mac; Bluetooth hearing aid pairing;
// Spring cleaning your Google account; Amazon Echo privacy reset; Windows 11 Recall opt-out;
// Texting from a Mac; QR code phishing (quishing) recognition

import type { Guide } from './guides';

export const guidesBatch133: Guide[] = [
  {
    slug: 'ai-voice-scam-call-how-to-spot-and-defend',
    title: 'AI Voice Scam Calls — How to Spot Them and Protect Your Family',
    excerpt: 'Scammers are using AI to clone voices from social media and call relatives pretending to be in trouble. Here is how to recognize the scam and stop it cold.',
    category: 'safety-guides',
    tags: ['ai scams', 'voice cloning', 'phone scams', 'family safety', 'ftc', 'fraud'],
    readTime: '6 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `In the past two years, AI voice cloning has gone from a research curiosity to a tool any scammer can buy for $20 a month. The FBI and FTC have both issued alerts: a scammer takes a 3-second clip of someone's voice from Facebook, Instagram, TikTok, or a podcast, and uses it to make a phone call to that person's parent or grandparent pretending to be in an emergency.

The call usually goes like this: "Grandma, it's me — I've been in a car accident, I need bail money, please don't tell Mom." It sounds exactly like the grandchild because it IS their voice — pieced together by AI from a video they posted publicly.

This guide walks through how the scam works, how to recognize it during a call, and the one family code-word habit that defeats it entirely.

(Sources: FTC Consumer Alerts, consumer.ftc.gov/articles/scammers-use-ai-enhance-their-family-emergency-schemes; FBI Public Service Announcement, ic3.gov)`,
    steps: [
      {
        title: 'Understand how the scam actually works',
        content: 'A scammer finds your grandchild, child, or other relative on social media. They download any video where that person speaks — even a 3-second TikTok works. They feed that audio into an AI voice-cloning tool. Then they call you (or text you a voice memo) using the cloned voice. The voice you hear is real audio of your loved one, recombined to say new words. There is no difference your ear can detect because there genuinely is no difference. The cloned voice is real audio data, just rearranged.',
        warning: 'Do not trust your ears alone. Voice cloning is good enough now that even spouses cannot tell the difference on a phone call.',
      },
      {
        title: 'Recognize the classic emergency-scam script',
        content: 'These calls follow a pattern. The caller (1) claims to be in immediate trouble — car accident, arrest, hospital, kidnapping. (2) Asks you not to tell anyone else, especially their parents. (3) Asks for money urgently — bail, hospital deposit, tow truck. (4) Wants the money sent through gift cards, wire transfer, Zelle, Venmo, Cash App, or cryptocurrency. (5) Pressures you to act in the next 10 minutes. If you hear three of those five elements in any call, it is almost certainly a scam — even if the voice sounds exactly right.',
        tip: 'Quick Tip: Real emergency rooms, real jails, and real lawyers do not ask for gift cards. Ever.',
      },
      {
        title: 'Set up a family code word — the single best defense',
        content: 'Pick a word or phrase that only your family knows. It should be something a stranger would never guess and that does not appear on any social media. Avoid pet names, kids names, birthdays, or anything in old Facebook posts. Good examples: "blue umbrella," "Grandpa Earl pancakes," "October hayride." Share it with your spouse, your children, and your grandchildren in person or by phone — not by text. If anyone calls claiming to be a relative in trouble, ask them for the code word. If they do not have it, hang up. A real family member will know it. A scammer cannot guess it.',
        tip: 'Quick Tip: Write the code word on a small card and keep it by your phone. In a real emergency you may be flustered. Having the word in front of you removes the doubt.',
      },
      {
        title: 'Hang up and call back on a number you already have',
        content: 'Even before the code word, your single best move is to hang up and call your family member back on the number you have saved in your phone. Do not use the number that called you. Do not press a number to be transferred. Hang up completely, wait 30 seconds, and dial out to the number you already trust. If your grandchild really is in trouble, they will answer. If a scammer used their cloned voice, you will reach your real grandchild who is fine.',
        warning: 'Scammers sometimes "spoof" caller ID to show the real person\'s phone number. Seeing your grandchild\'s name on the screen does NOT mean it is them calling.',
      },
      {
        title: 'Pause for 60 seconds before sending any money',
        content: 'Scammers create urgency on purpose. The fear is the weapon. Tell yourself in advance: "If anyone asks me to send money in a hurry, I wait 60 seconds and call a trusted family member first." Sixty seconds of pause defeats almost every voice scam. Tell your bank and tell your kids about this rule. If you live alone, post-it note it next to your phone: "PAUSE. CALL FAMILY FIRST."',
      },
      {
        title: 'Lock down what scammers can find about your family',
        content: 'AI voice cloning needs source audio. Make it harder to find. On Facebook, set videos to "Friends only." On Instagram, set the account to private. On TikTok, set it to private unless your family member specifically wants public exposure. Talk to your grandchildren about this — they may not realize their TikTok voice is being scraped to scam their grandparents. Also: remove your phone number from your public social profiles. Scammers use it to match voices to family members.',
        tip: 'Quick Tip: Search your own name on Google once a year. Look at what comes up. If your phone number, address, or family info is showing on data-broker sites like Spokeo or WhitePages, you can request removal. The FTC has free instructions at consumer.ftc.gov.',
      },
      {
        title: 'If it happens to you — report it',
        content: 'If you have been targeted by a voice-cloning scam (whether or not money was lost), report it. Go to reportfraud.ftc.gov to file with the Federal Trade Commission. If money was sent, also report at ic3.gov (the FBI). Then call the bank, card issuer, or app you sent the money through — they may be able to claw it back if you act in the first few hours. Finally, tell your friends and your church or community group. These scams spread by word of mouth — and so does the defense.',
      },
    ],
  },

  {
    slug: 'iphone-mirroring-on-mac-control-phone-from-laptop',
    title: 'iPhone Mirroring on a Mac — Use Your Phone Without Picking It Up',
    excerpt: 'macOS Sequoia lets you see and control your iPhone on your Mac screen. Reply to texts, run iPhone apps, no phone-in-hand needed. Here is how.',
    category: 'mac-guides',
    tags: ['iphone mirroring', 'macos sequoia', 'continuity', 'apple', 'productivity'],
    readTime: '5 min',
    thumbnailEmoji: '🪞',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `Apple added a feature called iPhone Mirroring with macOS Sequoia (released October 2024). It puts a live, controllable copy of your iPhone screen on your Mac. You can use your Mac keyboard, trackpad, and mouse to do anything you would normally do on the phone — answer texts, scroll Instagram, check a banking app — without picking up the phone or unlocking it.

It works whether your phone is in your pocket, on the kitchen counter, or charging in another room (as long as it is on the same Wi-Fi as the Mac).

This guide shows how to turn it on, what works and what does not, and a couple of common problems people run into.

(Source: Apple Support, support.apple.com/guide/mac-help/use-iphone-mirroring-mchl4d44e9d2/mac)`,
    steps: [
      {
        title: 'Check that your Mac and iPhone can run iPhone Mirroring',
        content: 'You need: a Mac with Apple silicon (M1, M2, M3, or M4 chip) OR an Intel Mac with a T2 chip; macOS Sequoia (15) or later; an iPhone with iOS 18 or later; both signed in to the same Apple ID; both on the same Wi-Fi or Bluetooth-paired; and two-factor authentication on the Apple ID. Most Macs from 2020 onward qualify. To check your Mac: click the Apple menu (top-left) → About This Mac. To check your iPhone: Settings → General → About → look for iPhone Model and Software Version.',
        tip: 'Quick Tip: If your Mac is older and does not support iPhone Mirroring, the closest alternative is Continuity Camera and Universal Clipboard — both still work and copy text/photos between devices.',
      },
      {
        title: 'Open iPhone Mirroring from the Mac dock',
        content: 'On your Mac, look in the Applications folder for an app called "iPhone Mirroring." It has a blue icon that looks like an iPhone with a small Mac in front of it. You can also use Spotlight: press Command + Space, type "iPhone Mirroring," press Return. The first time you open it, it will ask you to confirm on your iPhone. Pick up your iPhone, tap Allow when prompted, and authenticate with Face ID or your passcode.',
      },
      {
        title: 'Use your iPhone with the Mac trackpad and keyboard',
        content: 'Once mirroring is active, your iPhone screen appears in a window on your Mac. Click anywhere with your trackpad — it works like tapping on the phone. Scroll with two fingers on the trackpad like you would scroll a webpage. Type with your Mac keyboard wherever the iPhone keyboard would have appeared. The mouse acts as your finger; the keyboard acts as the iPhone keyboard. You can also click and hold to do the iPhone "press and hold" gesture. Swipe from the bottom of the iPhone window to go home, just like on the phone.',
        tip: 'Quick Tip: To open Spotlight Search inside the iPhone window, click the top edge of the iPhone screen and drag downward — same as pulling down on a physical iPhone.',
      },
      {
        title: 'Drag files between iPhone and Mac',
        content: 'A huge time-saver: you can drag photos, videos, and PDFs directly between the iPhone window and your Mac desktop. Open the Photos app inside the iPhone Mirroring window. Click and hold on any photo, then drag it onto your Mac desktop. The file copies over. This also works the other way — drag a PDF from your Mac into iPhone Mail or iPhone Files to attach it. Apple says this works on macOS Sequoia 15.1 and later. If you do not see the feature, update your Mac.',
      },
      {
        title: 'Lock your iPhone while still using it',
        content: 'A subtle but useful detail: when you are using iPhone Mirroring, your actual iPhone stays locked and shows a "iPhone in Use" notification on the lock screen. Anyone in the room cannot pick up your phone and see what you are doing on your Mac. This is intentional — it protects your privacy. Your phone will not vibrate or buzz for new messages while mirroring is active, because the alerts get delivered to the Mac instead.',
        warning: 'If someone unlocks your iPhone (with your Face ID or passcode) while mirroring is running, the mirroring session ends immediately. This is by design.',
      },
      {
        title: 'Quit iPhone Mirroring',
        content: 'When you are done, simply close the iPhone Mirroring window — click the red dot in the top-left corner of the window. Your iPhone unlocks and goes back to normal. You can also quit the iPhone Mirroring app entirely from the Mac menu bar. To remove the connection later or reset the trust between your devices: open iPhone Mirroring → Settings menu → Sign Out or Reset.',
      },
      {
        title: 'Common problems and fixes',
        content: 'iPhone Mirroring fails most often for one of three reasons. (1) Bluetooth or Wi-Fi is off on one device — turn both on. (2) The devices are signed in to different Apple IDs — check both and make sure they match. (3) Personal Hotspot is on — turn off Personal Hotspot on the iPhone, then try again. If nothing works, restart both devices and try once more. If it still fails, sign out of Apple ID on both, sign back in, then retry.',
      },
    ],
  },

  {
    slug: 'pair-hearing-aids-to-iphone-android-bluetooth',
    title: 'Pair Your Hearing Aids to a Phone — iPhone and Android Step-by-Step',
    excerpt: 'Modern hearing aids stream phone calls, music, and TV audio directly to your ears. Here is how to pair them on iPhone or Android.',
    category: 'health-tech',
    tags: ['hearing aids', 'bluetooth', 'accessibility', 'iphone', 'android', 'mfi'],
    readTime: '6 min',
    thumbnailEmoji: '🦻',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `If you have hearing aids made in the past five years, they almost certainly support Bluetooth pairing with a phone. Pairing them means phone calls, FaceTime, podcasts, music, and even your TV can play directly through the hearing aids — clearer than any speaker, and at the exact volume you need.

This guide walks through pairing on iPhone (using the "Made for iPhone" or MFi standard) and Android (using the "Audio Streaming for Hearing Aids" standard, also called ASHA, and the newer LE Audio). The setup is a little different from pairing regular Bluetooth earbuds, so the steps below matter.

(Sources: Apple Support, support.apple.com/guide/iphone/use-hearing-devices-iph2eb6e1d2c/ios; Google Support, support.google.com/accessibility/android/answer/9069470)`,
    steps: [
      {
        title: 'Make sure your hearing aids are MFi or ASHA compatible',
        content: 'Most hearing aids from 2020 onward support either MFi (made for iPhone) or ASHA (made for Android), and many support both. Major brands like Phonak, Oticon, Resound, Starkey, Widex, and Signia all have compatible models. Costco Kirkland Signature 10.0 and 11.0 hearing aids support both. If you are not sure, check the box, the user manual, or call your audiologist. Apple keeps a current list at support.apple.com/en-us/HT201466. If your hearing aids are older than 2018, they may not have Bluetooth.',
      },
      {
        title: 'Put hearing aids in pairing mode',
        content: 'Every brand does this slightly differently, but the universal method is: open the battery door, close it again, and within 60 seconds your hearing aids enter pairing mode. Some rechargeable models require you to take them off the charger and put them in your ears, then they auto-pair. Check the manual. The hearing aid is in pairing mode when it makes a beep or plays a melody in your ear. You have about 1–3 minutes from that moment to finish pairing on the phone.',
        tip: 'Quick Tip: You only need to do this pairing once. After that, your hearing aids reconnect automatically whenever they are in your ears and the phone is nearby.',
      },
      {
        title: 'Pair on iPhone — the right menu',
        content: 'On iPhone, do NOT go to Settings → Bluetooth. That is the regular Bluetooth menu and hearing aids do not show up there. Instead: Settings → Accessibility → Hearing Devices. Tap "Hearing Devices." Your iPhone scans for hearing aids in pairing mode. When yours appears (it usually shows up as "Left + Right" or with your name), tap it. The iPhone will ask you to confirm pairing for the left and right ear separately. Tap "Pair" each time. Pairing takes about 30 seconds.',
        warning: 'Do not try to pair from Settings → Bluetooth. Some hearing aids show up there, but the iPhone will not give you all the hearing aid features (custom programs, volume balance, environment modes). Always use Accessibility → Hearing Devices.',
      },
      {
        title: 'Pair on Android — Bluetooth menu plus accessibility',
        content: 'On Android the path varies by brand but here is the most common: Settings → Connected devices → Pair new device. Your hearing aids appear in the list when in pairing mode. Tap them. Confirm pairing for each ear. Then go to Settings → Accessibility → Hearing devices (or "Hearing aids" on Samsung). You can adjust the audio routing and check that calls and media are sending through the hearing aids.',
        tip: 'Quick Tip: On Pixel 6 and newer with Android 13 or later, hearing aids support a newer audio standard called LE Audio. This gives much better sound and longer battery life. Make sure both hearing aids and phone show "LE Audio supported" if you want this.',
      },
      {
        title: 'Test the pairing — make a call and play music',
        content: 'Once paired, place a phone call to a family member or use FaceTime/WhatsApp. The audio should come through your hearing aids automatically. If it does not, look for a small icon on the call screen that lets you switch audio output to "Hearing Aids." Tap it. Then play a music track or YouTube video to confirm media audio routes through the hearing aids too. Adjust your hearing aid volume using the phone volume buttons OR the hearing aid app from your manufacturer.',
      },
      {
        title: 'Install your hearing aid manufacturer app',
        content: 'Every major hearing aid brand makes a free companion app for the phone. Install the one that matches your brand (Phonak myPhonak, Oticon ON, ReSound Smart 3D, Starkey Thrive, Signia App, Widex Moment). The app gives you: volume control per ear, environment-specific programs (restaurant, music, outdoor), tinnitus masking sounds, and the ability to adjust the bass or treble. Even better, most apps let your audiologist make remote adjustments to your hearing aids over the internet — no in-person visit needed.',
      },
      {
        title: 'If pairing fails — three fixes that solve 90% of cases',
        content: 'First, restart the phone. Bluetooth gets stuck and a restart clears it. Second, "forget" the hearing aids in the phone settings, then re-pair. On iPhone: Settings → Accessibility → Hearing Devices → tap your aids → "Forget this Device" → start over. On Android: Settings → Connected devices → tap the gear icon next to the hearing aids → "Forget" → start over. Third, make sure your hearing aids have fresh batteries OR a full charge. Pairing fails on low power. If these three do not work, call the hearing aid manufacturer support line — every brand has free phone support and they walk you through it.',
      },
    ],
  },

  {
    slug: 'google-account-spring-cleaning-2026',
    title: 'Spring Clean Your Google Account in 30 Minutes',
    excerpt: 'Old logins, abandoned third-party apps, and forgotten devices add up. Here is how to clean out your Google account safely.',
    category: 'online-privacy',
    tags: ['google', 'privacy', 'security', 'spring cleaning', 'account hygiene'],
    readTime: '7 min',
    thumbnailEmoji: '🧹',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `If you have used Gmail or a Google account for more than a few years, your account has quietly accumulated dozens — sometimes hundreds — of connections. Apps you tried once and forgot. Old phones and tablets still listed as "trusted." Browser extensions that still have permission to read your email.

Every one of those connections is a small door into your account. Most are fine. Some are abandoned by the company that made them and never patched. A few may belong to companies that have been breached since you signed up.

This guide walks through Google's free Security Checkup and a 30-minute spring cleaning that closes the doors you no longer use. You do not need to be technical to do this.

(Source: Google Security Checkup, myaccount.google.com/security-checkup)`,
    steps: [
      {
        title: 'Open the Google Security Checkup',
        content: 'On any computer or phone, open a web browser and go to myaccount.google.com/security-checkup. Sign in if you are not already. You will see a colored shield: green means no issues, yellow means recommended actions, red means urgent. Click through each section. Google has done a lot of the thinking for you — the recommendations are usually correct.',
        tip: 'Quick Tip: Do this once every six months. Put a recurring calendar reminder on April 1 and October 1.',
      },
      {
        title: 'Remove old devices that no longer need access',
        content: 'On the Security Checkup page, click "Your devices." You will see every phone, tablet, laptop, and computer that has signed into your Google account in the last 28 days, plus older ones still trusted. Look through the list. Do you recognize each one? Are any old phones you sold or threw out? Are any laptops you stopped using? For each device you no longer use, click it and choose "Sign out." This kicks that device out of your account immediately.',
        warning: 'If you see a device you do NOT recognize at all — different city, brand you never owned — sign it out immediately, then change your Google password. That is a sign someone else has access.',
      },
      {
        title: 'Audit third-party apps connected to your Google account',
        content: 'Click "Third-party apps with account access" or go directly to myaccount.google.com/permissions. This list shows every app, website, and service you have given permission to read your email, calendar, contacts, or Google Drive. Look through it carefully. Anything you do not actively use? Click it and choose "Remove Access." Common cleanup targets: trial productivity apps, old expense trackers, calendar add-ons from a former job, fitness apps you stopped using, marketing tools.',
        tip: 'Quick Tip: If a service you removed access from is one you actively use, it will simply ask you to sign in again next time. You are not breaking anything permanent.',
      },
      {
        title: 'Check who can see your YouTube, Photos, and Maps activity',
        content: 'Google quietly shares more of your activity than you might expect. Go to myaccount.google.com/data-and-privacy. Look at: Web & App Activity (turn on Auto-delete every 3 months if you want), YouTube History (auto-delete every 3 months reduces what advertisers and recommendations know about you), Location History (turn it off entirely unless you actively want Google to track every place you go), and Ad Personalization (turn it off if you do not want ads based on your data). None of these breaks how Google works — they just give you privacy.',
      },
      {
        title: 'Turn on (or upgrade) two-step verification',
        content: 'If you do not have two-step verification on your Google account yet, turn it on now. Go to myaccount.google.com/signinoptions/two-step-verification. Follow the steps. The default option uses your phone for a text code — that is fine for most people. Better: use the free Google Authenticator app on your phone (works without cell signal). Best: buy a physical security key like a Yubico YubiKey ($25 to $50). Even if a scammer gets your password, they cannot log in without the second factor.',
        tip: 'Quick Tip: Print out the backup codes Google gives you and put them in your home safe or with your important papers. If you lose your phone, those codes are what get you back into your account.',
      },
      {
        title: 'Review your saved passwords in Google Password Manager',
        content: 'Go to passwords.google.com. This is every password Google has saved for you. Click "Password Checkup." Google will tell you which passwords are weak, which have been reused on multiple sites, and which appeared in a known data breach. Fix the breached ones first — those are the most urgent. Click each one, and use Google\'s suggested new password (it is automatically strong and unique). The browser remembers the new one.',
        warning: 'Some sites that show up in the breach list are sites you do not remember signing up for. That is normal — old breaches from years ago still appear. Change the password anyway; takes 30 seconds.',
      },
      {
        title: 'Empty Gmail trash, spam, and download a backup',
        content: 'Finally, free up storage and create a backup. In Gmail, click "Trash" in the left sidebar and "Empty trash now." Same for "Spam." You can also download a full backup of your Google data using Google Takeout (takeout.google.com). Choose what to include (Gmail, Drive, Photos, Calendar are the most useful). Google sends you a zip file in a day or two — store it on a USB drive or external hard drive. Having your own backup is real peace of mind.',
      },
    ],
  },

  {
    slug: 'reset-amazon-echo-privacy-recordings',
    title: 'Reset What Your Amazon Echo Has Heard — Delete Old Recordings',
    excerpt: 'Echo speakers save every voice command. Here is how to listen to what Amazon has, delete it, and set up auto-delete going forward.',
    category: 'online-privacy',
    tags: ['amazon echo', 'alexa', 'privacy', 'smart speaker', 'voice recordings'],
    readTime: '5 min',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `Every time you say "Alexa" near an Echo speaker, Amazon records what you say next and saves it on their servers — often for years. Some people are fine with that, some are not. Either way, you have full control: you can listen to every recording, delete it, and tell Alexa to auto-delete future recordings as they come in.

This guide walks through doing all three in the Alexa app on your phone, plus the privacy settings worth turning on. Takes about 10 minutes.

(Source: Amazon Alexa Privacy Hub, amazon.com/alexaprivacy)`,
    steps: [
      {
        title: 'Open the Alexa app on your phone',
        content: 'Download the free Alexa app from the App Store (iPhone) or Google Play (Android) if you do not already have it. Sign in with the same Amazon account that owns your Echo speaker. Once in, tap "More" in the bottom-right corner, then tap "Settings," then "Alexa Privacy."',
      },
      {
        title: 'Listen to what your Echo has recorded',
        content: 'Tap "Review Voice History." Pick a date range — "Today," "Yesterday," "Last 7 days," or "All History." You will see a list of recordings. Tap any one and you can listen to exactly what was said and exactly what Alexa heard back. This is worth doing even just once to see how often Alexa records by accident (when it thinks it hears its name in conversation).',
        tip: 'Quick Tip: If you find recordings from someone else in the house, just discuss it openly — these are saved under one account, so the household needs to agree on the privacy approach together.',
      },
      {
        title: 'Delete recordings — one, many, or all',
        content: 'On the Review Voice History page, tap the date filter, then tap "Delete all recordings of [date range]." You can also delete recordings one at a time by tapping an individual recording and choosing the trash can. To delete absolutely everything: filter to "All History," then tap "Delete all recordings of all history." Amazon will ask you to confirm. The recordings are gone from Amazon\'s servers within 30 days.',
      },
      {
        title: 'Turn on auto-delete for future recordings',
        content: 'In Alexa Privacy, scroll to "Manage Your Alexa Data." Tap "Choose how long to save recordings." Pick "Don\'t save recordings" (most private) or "3 months" or "18 months." If you pick "Don\'t save recordings," Alexa still functions but the recordings vanish as soon as they are processed. You give up some personalization (Alexa learns less about your voice) in exchange for less data on Amazon servers.',
        warning: 'If you choose "Don\'t save recordings," you can still listen to recent recordings for about 30 minutes after they are made, but they will not stay in your history.',
      },
      {
        title: 'Turn off voice recording on individual Echo devices',
        content: 'If you are uncomfortable with your bedroom Echo recording anything, you can mute its microphone. Press the microphone button on top of the Echo (the one with a line through a circle). A red light appears. While red, the Echo cannot hear or record anything. To use Alexa again, press the same button to un-mute.',
      },
      {
        title: 'Set a wake word and stop Alexa from listening to common false triggers',
        content: 'In the Alexa app, tap your Echo device → Settings → Wake Word. The default is "Alexa." If you hear Alexa randomly waking up during TV shows or conversations, change it to "Computer," "Echo," or "Amazon." This drastically reduces accidental recordings. Also turn on "Brief Mode" (Settings → Voice Responses → Brief Mode ON) so Alexa replies with a sound instead of a full sentence — quieter and less disruptive.',
      },
      {
        title: 'Manage who can talk to your Echo',
        content: 'If you have kids or a household guest, set up a Voice Profile so Alexa knows who is talking. Settings → Your Profile & Family → Voice Profile. This lets you restrict purchases by voice and lets each person have their own calendar, music, and reminders. Also: Settings → Voice Purchasing → turn this OFF unless you actively want to order things by saying "Alexa, buy paper towels." Many accidental orders happen on Echos in living rooms with TVs playing Amazon ads.',
      },
    ],
  },

  {
    slug: 'turn-off-windows-recall-privacy-feature',
    title: 'Turn Off Windows 11 Recall — How to Stop the Constant Screenshot AI',
    excerpt: 'Windows 11 Recall takes a screenshot of your PC every few seconds. Here is what it does, why people are worried, and how to turn it off.',
    category: 'windows-guides',
    tags: ['windows 11', 'recall', 'privacy', 'copilot plus pc', 'microsoft'],
    readTime: '5 min',
    thumbnailEmoji: '🛑',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `Windows 11 has a feature called Recall on newer Copilot+ PCs (laptops with a special AI chip, mostly sold in 2025 and 2026). Recall takes a screenshot of your entire screen every few seconds. Microsoft says this is so you can later search your computer for "that thing I was reading last week" and find it instantly using AI.

For some people that is genuinely useful. For others — particularly anyone who uses online banking, types in passwords, opens medical records, or works with confidential information — it is a privacy alarm. Old screenshots stored on the PC are a target for thieves, family members snooping, or malware. Even with the security fixes Microsoft rolled out in 2025, many people prefer to turn Recall off entirely.

This guide shows how to check if you have Recall, turn it off, and delete the screenshots it has already taken.

(Source: Microsoft Recall Help, support.microsoft.com/en-us/windows/retrace-your-steps-with-recall-aa03f8a0-a78b-4b3e-b0a1-2eb8ac48701c)`,
    steps: [
      {
        title: 'Check if your PC has Recall',
        content: 'Recall only runs on Copilot+ PCs — these are laptops with a Snapdragon X, Intel Core Ultra (Series 2), or AMD Ryzen AI 300 chip. Most regular Windows 11 laptops do NOT have Recall. To check: Press the Windows key, type "Recall," and press Enter. If a Recall app opens, you have it. If Windows says "no results," you do not have it, and you do not need to do anything else.',
        tip: 'Quick Tip: If you do not have Recall, the rest of this guide does not apply. But you can still tighten Windows 11 privacy — see our guide on Windows 11 privacy settings worth reviewing.',
      },
      {
        title: 'Open Recall settings',
        content: 'Click the Start button → Settings → Privacy & Security → Recall & Snapshots. (You can also press Windows + I to open Settings.) The Recall settings page shows whether Recall is on, what apps it captures, and how much storage it uses. Take a moment to look. If you have used the PC for a few weeks, you might see thousands of screenshots already saved.',
      },
      {
        title: 'Pause or turn off Recall completely',
        content: 'At the top of the Recall settings page, you will see a toggle for "Save snapshots." Slide it to Off. Windows will confirm you want to disable Recall — confirm yes. From this moment on, Recall will not take any new screenshots. The old screenshots are still saved on your PC, though — the next step deletes them.',
        warning: 'If your PC is shared with someone else who relies on Recall, talk to them before turning it off. Their search history disappears too.',
      },
      {
        title: 'Delete all existing Recall screenshots',
        content: 'Still in Settings → Privacy & Security → Recall & Snapshots, scroll down to "Delete snapshots." You have three options: delete the last hour, last 24 hours, or all snapshots. Choose "Delete all snapshots." Windows will warn you this cannot be undone. Confirm. Within a few minutes, every screenshot Recall ever took is gone.',
      },
      {
        title: 'Exclude private apps and websites',
        content: 'If you want to leave Recall on but stop it from capturing your bank, email, or work apps, scroll to "Apps and websites to exclude from snapshots." Add: your banking app, browser windows showing online banking, password manager (1Password, Bitwarden, LastPass), tax software, and any work tools that contain confidential information. While in InPrivate/Incognito browsing, Recall automatically does not capture — but it does capture regular browsing.',
        tip: 'Quick Tip: Add Outlook, Gmail in browser, Microsoft Teams, Zoom, and Slack to the exclusion list. These often show information you would not want screenshotted.',
      },
      {
        title: 'Turn off Recall in Windows Features (most thorough option)',
        content: 'If you want to remove Recall entirely so it cannot be re-enabled accidentally: open Control Panel → Programs → Turn Windows features on or off. Find "Recall" in the list. Uncheck it. Click OK. Windows will remove the feature and restart. To re-enable later, repeat and check the box.',
      },
      {
        title: 'Check Recall settings after every Windows update',
        content: 'Microsoft sometimes turns features back on after major updates. After any Windows feature update (the big yearly one), come back to Settings → Privacy & Security → Recall & Snapshots and confirm your settings are still what you want. A 30-second check every few months keeps things how you set them.',
      },
    ],
  },

  {
    slug: 'send-text-messages-from-mac-imessage-android',
    title: 'Send and Reply to Text Messages from Your Mac — iPhone and Android',
    excerpt: 'Type texts on your real keyboard instead of your phone. Works with iMessage on Mac and Google Messages for Android users.',
    category: 'mac-guides',
    tags: ['imessage', 'messages', 'mac', 'continuity', 'android messages', 'sms'],
    readTime: '5 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `Typing texts on a phone keyboard is fine for short replies but slow and tiring for longer ones. If you have a Mac and an iPhone, Apple has built in text-message sync for over a decade. If you have a Mac and an Android phone, Google offers a free web tool that does the same thing.

This guide shows both — iPhone users in the first half, Android users in the second half. After setting up once, your texts and replies happen on your Mac as easily as on your phone.

(Sources: Apple Support, support.apple.com/en-us/HT204681; Google Messages on the Web, support.google.com/messages/answer/7611075)`,
    steps: [
      {
        title: 'For iPhone users — sign into iMessage on the Mac',
        content: 'On your Mac, open the Messages app (Applications → Messages, or press Command + Space and type Messages). Sign in with the same Apple ID you use on your iPhone. The Mac will ask you to enter the same two-factor code that appears on your iPhone — type it in. Once signed in, the Mac shows all your iMessage conversations from the iPhone. They sync in real time.',
        tip: 'Quick Tip: iMessage on the Mac shows only blue-bubble (iPhone-to-iPhone) messages by default. To also see green-bubble texts from Android friends, you need to turn on Text Message Forwarding — covered in the next step.',
      },
      {
        title: 'iPhone — turn on Text Message Forwarding so SMS texts also sync to the Mac',
        content: 'On your iPhone, open Settings → Apps → Messages → Text Message Forwarding. (On older iOS, it is Settings → Messages → Text Message Forwarding.) Toggle on your Mac in the list. Apple will show a 6-digit code on the Mac — type it back into the iPhone to confirm. Now every SMS text (the green-bubble kind from Android phones) also appears in your Mac Messages app. You can reply right from the Mac and the reply leaves your iPhone\'s cellular connection.',
        warning: 'If you do not see Text Message Forwarding in the Messages settings, your iPhone may not be signed in to iCloud, OR your Mac is signed into a different Apple ID. Both need to match.',
      },
      {
        title: 'iPhone — send your first Mac text',
        content: 'In Messages on the Mac, click the small pencil-and-paper icon in the top-right to start a new conversation. Type the contact name or phone number. Type your message. Press Return to send. Bubbles will appear, just like on the iPhone. Photos can be dragged into the message from your Mac. The Mac uses your iPhone\'s cellular connection for SMS texts, so the message looks like it came from your phone — the recipient cannot tell you were on a computer.',
      },
      {
        title: 'For Android users — open Messages for Web on your Mac browser',
        content: 'Make sure you are using the Google Messages app on your Android phone (the blue chat-bubble icon — it is the default texting app on most Android phones, including Pixel and most Samsung). On your Mac, open any web browser (Safari, Chrome, Edge). Go to messages.google.com/web. You will see a large QR code on the screen.',
      },
      {
        title: 'Android — scan the QR code with your phone',
        content: 'On your Android phone, open the Messages app. Tap the three dots (menu) in the top-right or your profile picture in the top-right. Tap "Device pairing" or "Messages for web." Tap the QR scanner icon. Point your phone camera at the QR code on your Mac screen. It scans automatically — no button to press. Within seconds, your Mac browser fills in with your full text message history.',
        tip: 'Quick Tip: Tick the "Remember this computer" box before scanning. Otherwise, you will have to repeat this every time you open the page.',
      },
      {
        title: 'Android — send and reply from the Mac browser',
        content: 'In Messages for Web, click any conversation on the left to read it. Type a reply in the box at the bottom. Press Return. Your reply sends from your phone (using its data or Wi-Fi) and shows up on the other person\'s screen as a normal text from your number. To start a new conversation, click "Start chat" at the top of the conversation list.',
      },
      {
        title: 'Privacy considerations',
        content: 'Both iMessage on Mac and Messages for Web require the phone to be online (Wi-Fi or cellular). If you sign in on a public or shared computer, sign out when you finish. iMessage on Mac: click Messages menu → Sign out. Google Messages on Web: click your profile picture → Sign out. Also: on a personal Mac, leave it signed in only on accounts that are password-protected and only used by you. Anyone with access to your Mac could read your texts otherwise.',
        warning: 'Never use these on a hotel business-center computer or library computer. Sign in, read texts, sign out — that is the safe pattern even if you trust the computer.',
      },
    ],
  },

  {
    slug: 'qr-code-phishing-quishing-how-to-spot',
    title: 'QR Code Scams (Quishing) — How to Spot a Fake QR Code',
    excerpt: 'Scammers are placing fake QR codes on parking meters, menus, and packages to steal your bank info. Here are the warning signs.',
    category: 'safety-guides',
    tags: ['qr code', 'phishing', 'quishing', 'scams', 'fraud', 'ftc'],
    readTime: '5 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-05-12',
    lastVerifiedAt: '2026-05-12',
    difficulty: 'Beginner',
    body: `QR codes — those little checkerboard squares you scan with your phone — are useful, but scammers have figured out that they look identical to most people. A real QR code on a restaurant menu and a fake QR code stuck on top of it look exactly the same. The fake one sends you to a website that asks for your credit card or login.

This trick has a name: "quishing" (QR + phishing). The FTC issued a public warning in 2024 because reports of quishing tripled. The good news: a few simple habits stop quishing cold without any apps or software.

(Sources: FTC Consumer Alerts, consumer.ftc.gov/consumer-alerts/2024/03/scammers-hide-harmful-links-qr-codes-steal-your-information; FBI Public Service Announcement, ic3.gov)`,
    steps: [
      {
        title: 'Understand where the scam shows up',
        content: 'Quishing is most common in places where people expect to scan a QR code. Top spots: parking meters (scammers stick fake QR codes over real ones to redirect payment), restaurant tables (fake menus on top of real ones), package labels (fake "delivery problem" QR codes), gas pumps, charity donation boxes, and even concert posters. The fake QR code usually goes to a website that looks like a real parking app, restaurant payment system, or delivery service.',
        warning: 'Public places where many strangers see the same QR code (parking lots, gas stations) are the highest risk. Private codes you receive in known emails or printed restaurant menus inside a building are usually fine.',
      },
      {
        title: 'Look at the QR code physically before scanning',
        content: 'Before scanning a QR code in public, look at it. Is the QR code printed on the same material as the rest of the sign? Or is it a sticker placed on top? Peel up a corner with your fingernail if it is on a parking meter or sign — if it lifts off easily, it is a sticker that someone placed there. Real QR codes are printed directly on the surface, not stuck on. If you can see a fake QR code covering a real one underneath, walk away and pay another way.',
        tip: 'Quick Tip: On a restaurant menu, the QR code is almost always part of the menu printing. If you see a sticker QR code on a card on the table, ask the server if it is theirs.',
      },
      {
        title: 'Preview the URL before opening it',
        content: 'When you scan a QR code with your phone, the URL appears at the top before the page opens. Read the URL. Does it match what you expect? A parking meter QR code should go to a website that has the city name or the parking company name (like meter.lacity.org or parkmobile.io). If it goes to a strange site you have never heard of (some random word.com or a long string of letters), do NOT tap it. Just close the camera app.',
        warning: 'Watch out for URLs with extra hyphens, numbers, or unusual extensions: "parkmobile-pay.com" is fake; "parkmobile.io" is real. "amaz0n-delivery.com" is fake; "amazon.com" is real.',
      },
      {
        title: 'Never enter financial info from a QR-code link',
        content: 'A real parking meter QR code might take you to a payment page, but be careful — even legitimate sites can be spoofed. Best rule: do not type your credit card number, bank login, or Social Security number into ANY page you arrived at through a QR code. Instead, after scanning, look up the parking company or restaurant on your own through a search engine, type their address into your browser fresh, and pay through their real site or app.',
      },
      {
        title: 'For package deliveries — never scan a QR code from a notice card',
        content: 'A common 2025-2026 scam is a yellow "delivery notice" left on your door or in your mailbox with a QR code that says "scan to reschedule." The QR code goes to a fake USPS/UPS/FedEx page that asks for a "small reshipping fee" of $2 — which is just to get your credit card. Real delivery notices from USPS, UPS, FedEx never ask for payment over a QR code. To check a real delivery, go to the carrier\'s website directly and use the tracking number on the notice.',
        tip: 'Quick Tip: USPS Informed Delivery (free at informeddelivery.usps.com) shows you scans of every piece of mail before it arrives. Anything claiming to be a USPS delivery problem that does not show up there is fake.',
      },
      {
        title: 'When in doubt, type the URL by hand',
        content: 'If you really need to access the site behind a QR code (say, a real restaurant menu when you have no other choice), do NOT scan. Instead, ask the staff or look at the printed material for the actual website address. Type it into your phone browser. Yes, it is slower. But you cannot be quished by a fake QR code if you do not scan anything.',
      },
      {
        title: 'Report quishing if you encounter it',
        content: 'If you spot a fake QR code on a parking meter, sign, or public space, tell the business or property owner so they can remove it. If you actually scanned a fake one and entered any information, change your bank password immediately, call your bank to flag the transaction, and report to the FTC at reportfraud.ftc.gov. Also alert friends and family — quishing spreads through neighborhoods, and one warning post can stop the whole block from falling for it.',
      },
    ],
  },
];
