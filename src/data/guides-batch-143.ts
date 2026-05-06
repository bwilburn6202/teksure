// guides-batch-143 — 4 senior-priority guides published 2026-05-06
// Topics: free credit reports, Do Not Disturb on phones, two-factor authentication, finding lost earbuds.
// Sources: AnnualCreditReport.com, FTC.gov, Apple Support, Google Support, Samsung Support, CISA.gov.

import type { Guide } from './guides';

export const guidesBatch143: Guide[] = [
  {
    slug: 'how-to-check-your-credit-report-free-2026',
    title: 'How to Check Your Credit Report for Free in 2026',
    excerpt: 'Get your free credit report from the only official government-authorized site, spot errors, and dispute anything wrong.',
    category: 'financial-tech',
    tags: ['credit report', 'AnnualCreditReport', 'Equifax', 'Experian', 'TransUnion', 'identity theft', 'financial security', 'seniors'],
    readTime: '8 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Your credit report is a record of every loan, credit card, and line of credit that has ever been opened in your name. Lenders, landlords, and sometimes even employers look at it. Checking it regularly helps you catch identity theft early — before a thief does serious damage.

**The one official site: AnnualCreditReport.com**

There is only one website authorized by the federal government to give you free credit reports: **AnnualCreditReport.com**. It is run by the three major credit bureaus — Equifax, Experian, and TransUnion — under a rule set by the Federal Trade Commission (FTC).

Be careful of impostor sites. Names like "FreeCreditReport.com," "FreeCreditScore.com," or anything that sounds similar are private companies that often charge a fee or require a credit card. The real site has no credit card required and no trial memberships.

As of 2026, you can get a free report from each bureau every week. You do not have to pay anything.

**What your credit report contains**

Your report has four main sections:

- **Personal information** — your name, addresses you have lived at, Social Security number (partially hidden), and employers. Errors here sometimes point to identity theft.
- **Accounts** — every credit card, car loan, mortgage, and student loan. Each shows the date opened, credit limit or loan amount, balance, and payment history.
- **Inquiries** — a list of who has pulled your credit recently. Inquiries you did not authorize can signal fraud.
- **Public records** — bankruptcies or civil judgments, if any.

**What to look for**

Go through each section slowly. Flag anything that looks wrong:

- An account you did not open
- A loan or credit card you do not recognize
- Your name spelled in a way you have never used
- An address you have never lived at
- A "late payment" on an account where you know you paid on time
- Multiple recent inquiries from lenders you never contacted

**How to dispute an error**

Each bureau has its own dispute process. You can file online, by phone, or by mail. Online is the fastest.

- **Equifax:** equifax.com/personal/credit-report-services — look for "Dispute" in the menu. Phone: 1-866-349-5191.
- **Experian:** experian.com/disputes — click "Start a Dispute." Phone: 1-888-397-3742.
- **TransUnion:** transunion.com/credit-disputes — click "Dispute." Phone: 1-800-916-8800.

When you file a dispute, the bureau must investigate and respond within 30 days. If the error is confirmed, they must correct it. Keep a copy of everything you submit.

**How often should seniors check?**

Check at least once every three to four months. Because you can pull a report from each bureau once per week now, a good routine is: pull Equifax in January, Experian in May, and TransUnion in September. That gives you coverage across the year without any cost.

If you have recently lost a wallet, had your Social Security number exposed in a data breach, or suspect someone is using your identity, pull all three reports right away.

**Quick Tip:** After checking your report, consider placing a free credit freeze with each bureau. A freeze blocks anyone from opening new credit in your name — even if they have your Social Security number. It does not hurt your credit score. Visit each bureau's website and search for "credit freeze" to set it up.

**Sources:** FTC.gov — Free Credit Reports (consumer.ftc.gov/articles/free-credit-reports), AnnualCreditReport.com, Equifax Consumer Help Center, Experian Dispute Center, TransUnion Dispute and Freeze Center.`,
    steps: [
      {
        title: 'Go to AnnualCreditReport.com',
        content: 'Open your web browser and type AnnualCreditReport.com in the address bar at the top of the screen. Press Enter. Make sure the address bar shows "annualcreditreport.com" — this is the only official free-report site. Do not search for it in Google and click an ad; type the address directly.',
        warning: 'Impostor sites with similar names often charge fees or ask for a credit card. The real site is free and never asks for payment.',
      },
      {
        title: 'Click "Request your free credit reports"',
        content: 'On the main page, look for a large button or link that says "Request your free credit reports." Click it. You will be asked to enter your name, address, date of birth, and the last four digits of your Social Security number to verify your identity. This information is encrypted — it is safe to enter here.',
      },
      {
        title: 'Choose which bureau reports to view',
        content: 'You will see checkboxes for Equifax, Experian, and TransUnion. You can request all three at once, or space them out over the year. For a first check, request all three so you have a complete picture. Click Continue.',
        tip: 'After your first full check, space out future requests — one bureau every few months — so you have year-round monitoring at no cost.',
      },
      {
        title: 'Answer the identity verification questions',
        content: 'Each bureau may ask a few multiple-choice questions to confirm you are who you say you are. These questions are drawn from public records — things like "Which of these streets have you lived on?" or "Which bank holds a loan in your name?" Choose the best answer for each. If you are not sure, pick your best guess; most bureaus allow one wrong answer.',
      },
      {
        title: 'View and save your report',
        content: 'Your report will appear on screen as a long document. Read through the Personal Information section first, then Accounts, then Inquiries. Look for anything you do not recognize. You can print it (press Ctrl+P on Windows or Command+P on a Mac) or save it as a PDF file for your records.',
      },
      {
        title: 'Dispute any errors you find',
        content: 'If you spot something wrong, go directly to that bureau\'s website to file a dispute. Equifax: equifax.com — look for "Dispute." Experian: experian.com/disputes. TransUnion: transunion.com/credit-disputes. Describe the error clearly and attach any documents you have (like a bank statement showing a payment was made on time). The bureau has 30 days to respond.',
        tip: 'Keep a written record of every dispute you file: the date, which bureau, and what you reported. This paper trail is useful if the error reappears.',
      },
      {
        title: 'Set a reminder to check again',
        content: 'Use the calendar on your phone or a paper calendar to set a reminder three to four months from now. Regular checking is the best way to catch identity theft early, when it is easiest to fix.',
      },
    ],
  },

  {
    slug: 'how-to-set-do-not-disturb-iphone-android-2026',
    title: 'How to Set Up Do Not Disturb on Your iPhone or Android Phone',
    excerpt: 'Silence calls and alerts at night or during activities — and still let important people reach you in an emergency.',
    category: 'phone-guides',
    tags: ['Do Not Disturb', 'Focus mode', 'iPhone', 'Android', 'notifications', 'silence', 'sleep', 'seniors'],
    readTime: '7 min',
    thumbnailEmoji: '🌙',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Do Not Disturb is a setting on your phone that silences calls, texts, and app alerts during times you choose — like while you sleep, attend a doctor's appointment, or sit down to read. Your phone is still on and receiving messages; it silences them until you are ready to look.

One of the most common phone problems seniors call us about is: "My phone stopped ringing." In many cases, Do Not Disturb was turned on by accident and never turned off. This guide shows you how to check whether it is on, how to set a schedule so it turns on and off automatically, and how to make sure family members can always reach you in a real emergency.

**Why use it?**

Without Do Not Disturb, every text, news alert, and app notification wakes you up at night or interrupts your meal. With Do Not Disturb, your phone is quiet when you want it to be — and you can still get through to emergency contacts anytime.

**iPhone: Do Not Disturb and Focus**

Apple calls this feature "Focus" on iPhones running iOS 15 and newer (which covers any iPhone bought in the last five years). Do Not Disturb is the simplest Focus option — it silences everything except the contacts you choose.

To turn it on right now, swipe down from the upper-right corner of your screen to open the Control Center. Look for a crescent moon icon. Tap it once to turn on Do Not Disturb. Tap it again to turn it off. If you do not see the crescent moon, look for a "Focus" button instead.

To set a schedule so it turns on automatically at bedtime:
1. Open the Settings app (the gray gear icon).
2. Scroll down and tap Focus.
3. Tap Do Not Disturb.
4. Tap Add Schedule.
5. Set a start time (for example, 10:00 PM) and an end time (for example, 7:00 AM).
6. Tap Save.

Now your phone will silence itself every night and wake up every morning automatically.

**Letting important people through on iPhone**

You do not have to block everyone. In the Do Not Disturb settings:
- Tap People, then tap Allow Calls From.
- Choose Favorites (anyone you have added to your Favorites list in the Phone app) or choose specific contacts.
- Turn on Allow Repeated Calls. This means if someone calls you twice within three minutes, the second call will ring through. This is useful for emergencies — a family member who needs you urgently will call back.

**Android: Do Not Disturb**

Android phones from different makers (Samsung, Google Pixel, Motorola, and others) all have Do Not Disturb, though the exact steps differ slightly. These instructions cover most Android phones running Android 12 or newer.

To turn it on right now, swipe down from the top of the screen with two fingers to open the Quick Settings panel. Look for a "Do Not Disturb" button with a minus sign or crescent moon. Tap it to turn it on. Tap it again to turn it off.

If you accidentally left it on and your phone is silent, this is the first place to check.

To set a schedule:
1. Open the Settings app (the gear icon).
2. Tap Sound & Vibration (or Sound on some phones).
3. Tap Do Not Disturb.
4. Tap Schedules.
5. Tap Add or the plus (+) button.
6. Give the schedule a name (for example, "Bedtime") and set the days and times.

**Letting important people through on Android**

In the Do Not Disturb settings, look for Exceptions or People:
- Tap Calls and choose Starred contacts or All contacts.
- Turn on Allow repeat callers so a second call within 15 minutes rings through.

Samsung Galaxy phones have an additional layer called "Focus mode" in their Digital Wellbeing settings, but the Do Not Disturb settings above are what control incoming calls and texts.

**How to know if Do Not Disturb is on**

On an iPhone, a crescent moon icon appears at the top of the screen. On Android, a minus sign or Do Not Disturb icon appears in the status bar at the top. If your phone is not ringing and you cannot figure out why, check the top of the screen for these icons.

**Sources:** Apple Support — Use Focus on iPhone (support.apple.com/guide/iphone/focus-iph8b6ede392/ios), Google Support — Use Do Not Disturb on Android (support.google.com/android/answer/9069335).`,
    steps: [
      {
        title: 'Check whether Do Not Disturb is already on',
        content: 'Look at the very top of your phone screen. On an iPhone, you will see a small crescent moon or a focus icon. On Android, you will see a minus sign (-) or a circle with a line through it. If you see either of these, Do Not Disturb is currently on — that may be why your phone is not ringing.',
        tip: 'This is the first thing to check any time your phone seems unusually quiet.',
      },
      {
        title: 'Turn Do Not Disturb on or off right now (iPhone)',
        content: 'Swipe down from the upper-right corner of your iPhone screen. This opens the Control Center. Find the crescent moon icon. Tap it once to turn Do Not Disturb on. Tap it again to turn it off. The moon will light up when it is active.',
      },
      {
        title: 'Turn Do Not Disturb on or off right now (Android)',
        content: 'Swipe down from the top of your screen with two fingers to open the full Quick Settings panel. Look for a button labeled "Do Not Disturb." Tap it once to turn it on. Tap it again to turn it off. The button will look highlighted or colored when it is active.',
      },
      {
        title: 'Set an automatic schedule (iPhone)',
        content: 'Open Settings (the gray gear icon). Tap Focus. Tap Do Not Disturb. Tap Add Schedule. Set a From time (when silence starts) and a To time (when it ends). Tap Save. Your phone will now silence itself at the same time every night and turn back on every morning without you doing anything.',
        tip: 'A common schedule is 10 PM to 7 AM. You can adjust this to fit your routine.',
      },
      {
        title: 'Set an automatic schedule (Android)',
        content: 'Open Settings (the gear icon). Tap Sound & Vibration, then tap Do Not Disturb. Tap Schedules, then tap Add (or the plus button). Name the schedule "Bedtime" and set your preferred times and days. Save the schedule. It will run automatically from now on.',
      },
      {
        title: 'Allow family and emergency contacts through (iPhone)',
        content: 'In Settings, tap Focus, then Do Not Disturb. Tap People, then Allow Calls From. Choose Favorites or specific people. Also turn on the "Allow Repeated Calls" switch. This means if your child or doctor calls twice in a row, the second call will ring through even during Do Not Disturb.',
        warning: 'If you do not allow any contacts through, all calls will be silenced — including emergencies. Set up at least your closest family members as allowed callers.',
      },
      {
        title: 'Allow family and emergency contacts through (Android)',
        content: 'In the Do Not Disturb settings, tap Exceptions or People. Tap Calls, then choose Starred contacts or a specific group. Turn on "Allow repeat callers" — this lets a second call from the same person ring through within 15 minutes, which is useful for urgent situations.',
      },
    ],
  },

  {
    slug: 'what-is-two-factor-authentication-and-how-to-use-it-2026',
    title: 'What Is Two-Factor Authentication and How to Turn It On',
    excerpt: 'A second lock on your accounts — even if someone steals your password, they still cannot get in. Here is how it works.',
    category: 'safety-guides',
    tags: ['two-factor authentication', '2FA', 'security', 'Gmail', 'Apple ID', 'verification code', 'password', 'seniors', 'account security'],
    readTime: '9 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `**Think of it like a second lock on your front door.**

Your password is the first lock. Two-factor authentication — often written as "2FA" — is the second lock. Even if someone figures out your password, they still cannot get into your account because they do not have the second key.

The second key is usually a short code that gets sent to your phone by text message. You type in that code after your password, and the account opens. The code expires in a minute or two, so even if someone intercepts it, it is useless by then.

**Why does this matter?**

Data breaches happen regularly at large companies. When a company's database is stolen, millions of usernames and passwords end up for sale online. If you use the same password at multiple sites, criminals will try that password everywhere. Two-factor authentication stops them cold — they have the password but not your phone.

According to Google's own research, turning on 2FA blocks over 99% of automated hacking attempts. It is one of the single most effective things you can do for your online safety.

**What happens when you log in with 2FA turned on**

1. You go to the website and type your email and password as usual.
2. The site sends a text message to your phone with a six-digit code.
3. You type that code into the box on the screen.
4. You are in.

This takes about 30 extra seconds. Most sites let you check a box that says "Remember this device for 30 days" or similar, which means you only have to do the second step on a new device or after 30 days — not every single time.

**What if I do not get the text?**

A few common reasons: the text was delayed (wait 60 seconds), your phone's signal is weak, or you entered your phone number incorrectly when setting up. Every site with 2FA has a backup option — usually a link that says "Didn't get the code? Try another way" or "Get a backup code." Use that link if the text does not arrive.

**How to turn on 2FA for Gmail (Google account)**

Gmail is the most widely used email service in the United States. Here is how to add 2FA:

1. Go to myaccount.google.com and sign in.
2. Click Security in the left-hand menu.
3. Look for the section called "How you sign in to Google."
4. Click 2-Step Verification.
5. Click Get Started.
6. Follow the steps. Google will ask for your phone number and send a test code to make sure it works.
7. Enter the test code and click Verify.
8. Click Turn On to finish.

From now on, when you sign into Gmail on a new device, Google will send a code to your phone.

**How to turn on 2FA for your Apple ID (iPhone and iPad)**

Your Apple ID is the account connected to your iPhone, iPad, and any Apple purchases. Protecting it is important.

1. Open the Settings app on your iPhone or iPad (the gray gear icon).
2. Tap your name at the very top of the screen.
3. Tap Sign-In & Security.
4. Tap Turn On Two-Factor Authentication.
5. Tap Continue.
6. Enter a trusted phone number — this is where Apple will send codes. Use your cell phone number.
7. Apple will send a test code to that number. Enter it to confirm.

From now on, when you sign in to your Apple ID on a new device, a six-digit code will appear on your existing phone or be sent by text.

**What is an authenticator app? (Advanced option — not required)**

Some people use an app called an authenticator instead of text messages. Google Authenticator and Microsoft Authenticator are two popular ones. These apps generate a six-digit code on your phone every 30 seconds, without needing a text message. They are slightly more secure than SMS codes but require a few extra setup steps.

If you are comfortable with SMS codes, there is no urgent need to switch. SMS-based 2FA is still a major security upgrade over using just a password. Authenticator apps are worth exploring once you are comfortable with the basics.

**What to do when you receive a verification code**

- The code is for your use only. No one from any legitimate company will ever call you and ask for the code. If someone does, hang up — it is a scam.
- Type the code into the box on the website. Do not share it by phone, text, or email.
- If you did not request a login and a code arrives unexpectedly, do not type it in. It may mean someone is trying to break into your account. Change your password right away.

**Sources:** Google Safety Center — 2-Step Verification (support.google.com/accounts/answer/185839), Apple Support — Two-Factor Authentication for Apple ID (support.apple.com/en-us/102660), CISA.gov — More Than a Password (cisa.gov/MFA).`,
    steps: [
      {
        title: 'Understand what you are turning on',
        content: 'Two-factor authentication adds a second step after your password. When you sign in, the site sends a short code to your phone by text. You type in that code and you are in. It takes about 30 extra seconds and stops nearly all unauthorized login attempts — even when your password has been stolen.',
      },
      {
        title: 'Turn on 2FA for your Google (Gmail) account',
        content: 'Open a web browser and go to myaccount.google.com. Sign in if asked. Click Security in the left-hand menu. Under "How you sign in to Google," click 2-Step Verification. Click Get Started, then follow the prompts. Google will ask for your cell phone number, send a test code, and ask you to verify it. Once you do, click Turn On.',
        tip: 'Google may also offer to send a pop-up notification to your phone instead of a text. Either option works well. Choose whichever feels more comfortable.',
      },
      {
        title: 'Turn on 2FA for your Apple ID',
        content: 'On your iPhone or iPad, open the Settings app (the gray gear icon). Tap your name at the very top. Tap Sign-In & Security. Tap Turn On Two-Factor Authentication and follow the steps. Apple will send a six-digit code to your phone to confirm your number. Enter that code and you are done.',
      },
      {
        title: 'What to do when a verification code arrives',
        content: 'When you log in to a protected account, a text message will arrive within about 30 seconds. It will say something like: "Your Google verification code is 847 291." Type those six digits into the box on the login screen. The code expires quickly, so type it right away.',
        warning: 'Never share a verification code with anyone who calls or texts you asking for it. Legitimate companies never ask for your code over the phone. Anyone who does is a scammer.',
      },
      {
        title: 'Use the "remember this device" option to reduce interruptions',
        content: 'After you enter a code on a device you use every day, look for a checkbox or option that says "Remember this device for 30 days" or "Trust this browser." Check it. You will not be asked for a code again on that device for 30 days — only on new devices or after the period expires.',
      },
      {
        title: 'Know what to do if the code does not arrive',
        content: 'Wait 60 seconds — sometimes texts are delayed. If it still has not arrived, look for a link on the screen that says "Resend code," "Try another way," or "Use a backup method." Click it. You may be able to receive a voice call with the code instead, or answer a security question. If you are completely locked out, visit the website\'s official help page for account recovery.',
      },
    ],
  },

  {
    slug: 'how-to-find-lost-airpods-earbuds-2026',
    title: 'How to Find Lost AirPods or Wireless Earbuds',
    excerpt: 'Use your phone to play a sound, see a map location, or track down your earbuds — whether you use an iPhone or Android.',
    category: 'troubleshooting',
    tags: ['AirPods', 'Find My', 'lost earbuds', 'Galaxy Buds', 'Find My Device', 'SmartThings', 'iPhone', 'Android', 'Samsung'],
    readTime: '7 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Wireless earbuds are small and easy to misplace. The good news is that most modern earbuds have tracking built in. You can use your phone to make them play a sound, see where they were last detected on a map, and in some cases guide yourself directly to them. This guide covers iPhones with AirPods and Android phones with Google or Samsung earbuds.

**Before you start: what tracking can and cannot do**

Tracking works when the earbuds are:
- Powered on (not dead batteries)
- Within Bluetooth range, OR have been detected by another device in the network recently

If the battery is completely drained, you will see a "last known location" on a map — where they were the last time they had power. That location is still helpful: it tells you which room, which car, or which location you were at when they died.

Tracking cannot help if the earbuds are powered off intentionally (like when someone steals them and resets them, though AirPods have anti-theft protections that make this harder).

---

**If you have an iPhone: Find My**

Apple's Find My app (the green icon with a radar-like design) works with all AirPods models — AirPods, AirPods Pro, and AirPods Max.

**Step 1: Open the Find My app**

On your iPhone, tap the Find My app. It has a green background with two overlapping circles. If you cannot find it, swipe down from the middle of your screen and type "Find My" in the search bar.

**Step 2: Tap Devices at the bottom**

At the bottom of the Find My screen, tap Devices. Your AirPods should appear in the list. Tap their name.

**Step 3: See the map**

A map will open showing the last known location of your AirPods. A green dot means they are currently detected nearby. A gray dot means the battery is dead or they are out of range — but the map shows where they were last seen.

**Step 4: Play a sound**

If the map shows them nearby, tap Play Sound. Your AirPods will beep loudly for about two minutes. Listen for the sound — it is distinct and easy to hear through a couch cushion or the bottom of a bag.

Note: Sound only works if the earbuds are outside their case. If they are inside the case, only the case can be tracked on newer models (AirPods Pro and AirPods 4 with the updated case).

**Step 5: Use Precision Finding (AirPods Pro and AirPods 4 only)**

On iPhones with an Ultra Wideband chip (iPhone 11 and newer) and AirPods Pro or AirPods 4, you can use Precision Finding. Tap Find in the AirPods screen. Your iPhone will show an arrow and distance readout — like a compass — guiding you closer and closer to the earbuds. It is accurate to within a foot or two.

---

**If you have an Android phone: Google Find My Device**

Google's Find My Device works with Pixel earbuds and many other Android-compatible earbuds that have been registered to your Google account.

**Step 1: Open the Find My Device app or website**

On your Android phone, open the Find My Device app. Or go to android.com/find in a web browser and sign in with your Google account.

**Step 2: Select your earbuds**

Your connected devices will appear in a list. Tap the name of your earbuds.

**Step 3: See their location on the map**

The map will show where your earbuds were last detected. If they are nearby and have battery, a Play Sound button will appear.

**Step 4: Play a sound**

Tap Play Sound. Your earbuds will beep for about 30 seconds. Walk around quietly and listen. Try checking the couch cushions, between car seats, and inside any bags you have used recently.

---

**If you have Samsung Galaxy Buds: SmartThings app**

Samsung earbuds (Galaxy Buds, Galaxy Buds Pro, Galaxy Buds Live, and similar) use the SmartThings app for tracking.

**Step 1: Open the SmartThings app**

On your Samsung Android phone, open the SmartThings app (the blue icon). If you do not have it, download it free from the Google Play Store.

**Step 2: Find your earbuds in the device list**

Tap the Devices tab. Your Galaxy Buds should appear. Tap them.

**Step 3: Tap "Find My Earbuds"**

Look for the Find My Earbuds button. Tap it. Your earbuds will play a sound that gets louder over five seconds, then quieter, to help you zero in on them.

**Step 4: Check Last Known Location**

If the earbuds are out of battery or out of range, SmartThings will show the last location where they were detected on a map. Use this to help you remember where you were.

---

**What to do if the battery is dead**

- Check the Last Known Location on the map — this tells you the last place they were detected.
- Retrace your steps from that location. Check bags, car seats, furniture, and jackets.
- Ask someone at a recent location (a restaurant, a doctor's office, a store) if they found a small pair of earbuds.
- If the earbuds are in their case, the case may still have battery even if the buds themselves are dead — the case shows its own location separately in Find My for AirPods.

**Sources:** Apple Support — Find My for AirPods (support.apple.com/en-us/104996), Google Support — Find My Device (support.google.com/android/answer/6160491), Samsung Support — SmartThings Find My Earbuds (samsung.com/us/support/answer/ANS00086028/).`,
    steps: [
      {
        title: 'Check the last known location on a map (all earbuds)',
        content: 'Open the tracking app for your earbuds. For AirPods on iPhone: open the Find My app, tap Devices, tap your AirPods. For Android earbuds: open Find My Device at android.com/find. For Samsung Galaxy Buds: open the SmartThings app. In each case, look for a map showing where your earbuds were last detected. Even if the battery is dead, the map shows the last location.',
        tip: 'The map location is a great starting point even when the earbuds are dead. It tells you which room or location to search first.',
      },
      {
        title: 'Play a sound to locate them nearby (iPhone + AirPods)',
        content: 'In the Find My app, tap your AirPods, then tap Play Sound. Your AirPods will beep loudly. Listen carefully — the sound will cut through couch cushions, bags, and pockets. Walk slowly around the room while listening. The beeping lasts about two minutes.',
        warning: 'The Play Sound feature only works if the AirPods are outside their charging case and have enough battery. If they are inside the case, only newer AirPods Pro and AirPods 4 cases can be tracked.',
      },
      {
        title: 'Play a sound to locate them nearby (Android)',
        content: 'Open the Find My Device app on your Android phone, or go to android.com/find in a web browser. Select your earbuds from the list. If they are within range and have battery, tap Play Sound. Walk around quietly and listen for the beeping. Check between couch cushions, inside bags, under furniture, and in jacket pockets.',
      },
      {
        title: 'Play a sound to locate them nearby (Samsung Galaxy Buds)',
        content: 'Open the SmartThings app on your Samsung phone. Tap the Devices tab and tap your Galaxy Buds. Tap Find My Earbuds. The earbuds will play a sound that starts soft and gets louder over five seconds. Move toward the sound. It will guide you to within a foot or two of where they are.',
      },
      {
        title: 'Use Precision Finding for AirPods Pro (iPhone 11 or newer)',
        content: 'If you have AirPods Pro or AirPods 4 and an iPhone 11 or newer, tap Find in the Find My app under your AirPods. Your screen will show an arrow and a distance in feet, updating in real time as you move. Walk in the direction the arrow points. The distance will count down as you get closer, leading you right to them.',
      },
      {
        title: 'If the battery is dead: retrace your steps',
        content: 'Look at the Last Known Location on the map. Think about where you were when you last had the earbuds. Check those spots — in a bag, in a car, at a table. If you were at a public place (a restaurant, a clinic, a store), call and ask if staff found a pair of earbuds. Most places hold found items at the front desk for several days.',
        tip: 'For AirPods, the charging case tracks its own location separately. Even if the earbuds inside are dead, the case may still show its location on the Find My map.',
      },
    ],
  },
];
