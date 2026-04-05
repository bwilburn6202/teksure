export interface WikiPage {
  slug: string;
  title: string;
  category: 'concept' | 'entity' | 'synthesis' | 'source';
  tags: string[];
  content: string; // markdown content
  seeAlso: string[]; // slugs of related pages
  lastUpdated: string;
}

export const categoryLabels: Record<WikiPage['category'], string> = {
  concept: 'Concept',
  entity: 'Entity',
  synthesis: 'Synthesis',
  source: 'Source',
};

export const categoryColors: Record<WikiPage['category'], string> = {
  concept: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  entity: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  synthesis: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  source: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
};

export const wikiPages: WikiPage[] = [
  {
    slug: 'wifi-networking',
    title: 'Wi-Fi and Home Networking',
    category: 'concept',
    tags: ['wi-fi', 'internet', 'router', 'networking', 'home'],
    lastUpdated: '2026-04-04',
    seeAlso: ['password-security', 'safety-checklist', 'us-resources', 'moc-getting-started', 'smart-home-basics'],
    content: `## What Is Wi-Fi?

Wi-Fi is a wireless technology that lets your devices — phones, tablets, laptops, and smart TVs — connect to the internet without plugging in a cable. It uses radio signals sent by a device called a **router** in your home.

## How Your Home Network Works

Your internet setup has two main pieces:

- **Modem**: Connects your home to your internet provider (like Comcast, AT&T, or Spectrum). Think of it as the front door to the internet.
- **Router**: Takes that internet connection and shares it wirelessly with all your devices. Many providers give you a combined modem-router in one box.

## Common Wi-Fi Problems and Fixes

**Slow internet?** Try these steps:
1. Move closer to your router — walls and distance weaken the signal.
2. Restart your router by unplugging it for 30 seconds, then plugging it back in.
3. Make sure no one is downloading large files or streaming on multiple devices at once.

**Can't connect?** Check that:
1. Wi-Fi is turned on in your device settings.
2. You are selecting the correct network name.
3. You are entering the password correctly (it is case-sensitive).

## Keeping Your Wi-Fi Secure

- Change the default router password — the one printed on the sticker is known to attackers.
- Use WPA3 or WPA2 encryption (your router settings will show this option).
- Do not share your Wi-Fi password with people you do not trust.
- Consider setting up a guest network for visitors.

## Quick Tip

Your router's network name and password are usually printed on a sticker on the bottom or back of the device. If you have changed them and forgotten, you can reset the router to factory settings by pressing and holding the small reset button for 10 seconds.

## Wi-Fi Troubleshooting Tips (2026 Update)

**How to restart your router the right way:**
1. Unplug the router from the wall.
2. Wait 30 seconds.
3. Plug it back in.
4. Wait another 30 seconds for the lights to come back on.

**Router placement matters:** Do not put your router inside a cabinet, closet, or behind furniture. Place it in an open, central location in your home for the best signal.

**Understanding 2.4 GHz vs 5 GHz:** Most routers broadcast two networks. The 2.4 GHz network has better range (reaches farther) but is slower. The 5 GHz network is faster but does not reach as far. For most home use, leave the channel setting on "Auto."

**Too many devices?** Smart home gadgets (smart speakers, cameras, thermostats, light bulbs) all share your Wi-Fi bandwidth. If your internet feels slow, multiple devices streaming video or playing games at the same time could be the cause. Disconnect devices you are not using or ask your internet provider about upgrading your speed.

**Check your cables:** Make sure all cables connecting your modem and router are plugged in securely. A loose cable can cause the internet to drop out entirely.

(Sources: How-To Geek, Tom's Guide, Google Support, 2026)`,
  },
  {
    slug: 'password-security',
    title: 'Password Security',
    category: 'concept',
    tags: ['passwords', 'security', 'accounts', '2fa', 'authentication'],
    lastUpdated: '2026-04-05',
    seeAlso: ['scam-prevention', 'safety-checklist', 'online-banking-safety', 'moc-staying-safe'],
    content: `## Why Passwords Matter

Your password is the lock on your digital front door. A weak or reused password is like using the same key for your house, car, and office — if someone copies it once, they can get into everything.

## What Makes a Strong Password

A strong password has three qualities:
- **Long**: At least 12 characters. Longer is better.
- **Unique**: Different for every account. Never reuse passwords.
- **Unpredictable**: Avoid names, birthdays, pet names, or common words like "password123."

A great method is to use a **passphrase** — a string of random words, like "purple-telescope-garden-42." It is long, memorable, and hard to guess.

## Password Managers

A password manager is an app that creates, stores, and fills in strong passwords for you. You only need to remember one master password to unlock the manager itself.

Popular options include:
- **Bitwarden** (free, open-source) — extremely generous free tier, highly secure, and everything most people need. Cybersecurity experts highly recommend it.
- **NordPass** (free tier) — offers unlimited password storage and autofill, but the free version works on only one device at a time.
- **1Password** (paid, very user-friendly)
- **Apple Keychain** — built into iPhones and Macs. If you only use Apple devices, this is a great no-extra-download option.
- **Google Password Manager** — built into Chrome and Android. Works automatically when you save passwords in Chrome.

A password manager creates strong, random passwords and stores them for you. You only need to remember one master password to unlock the manager itself. Cybersecurity experts strongly recommend using a password manager to protect yourself from cyberthieves.

(Sources: Tom's Guide, AARP, 2026)

## Two-Factor Authentication (2FA)

Two-factor authentication adds a second layer of protection. After entering your password, you also enter a short code sent to your phone or generated by an app. Even if someone steals your password, they cannot log in without that second code.

Turn on 2FA for your most important accounts first: email, banking, and social media.

## What to Do If You Think Your Password Was Stolen

1. Change the password for that account right away.
2. Check if your email appears on [Have I Been Pwned](https://haveibeenpwned.com) — a free tool that tells you if your information was part of a data breach.
3. Turn on 2FA if you have not already.
4. Watch your bank and credit card statements for anything you did not authorize.

## Google's 7-Step Account Security Checklist

Google recommends these steps to keep your account safe (Source: support.google.com, 2026):

1. **Use a strong, unique password** for your Google account.
2. **Turn on two-factor authentication (2FA).**
3. **Set up recovery options** — add a backup phone number and email address.
4. **Run Google's Security Checkup** at myaccount.google.com/security-checkup.
5. **Review connected devices** — remove any you do not recognize.
6. **Keep your software updated** — install updates as soon as they are available.
7. **Watch out for phishing** — Google will never ask for your password by email or phone.

## CISA's 4 Core Cybersecurity Practices

The Cybersecurity and Infrastructure Security Agency (CISA) identifies four actions everyone should take (Source: cisa.gov/secure-our-world, 2026):

1. **Use strong passwords** — long, unique, and stored in a password manager.
2. **Keep software updated** — turn on automatic updates.
3. **Think before you click** — be cautious with links and attachments.
4. **Turn on multi-factor authentication (MFA)** — one of the most effective ways to protect your accounts.

CISA's "Secure Our World" program provides free tip sheets in multiple languages, along with free resources, technical assistance, and training.`,
  },
  {
    slug: 'scam-prevention',
    title: 'Scam Prevention',
    category: 'concept',
    tags: ['scams', 'phishing', 'safety', 'fraud', 'email'],
    lastUpdated: '2026-04-05',
    seeAlso: ['password-security', 'safety-checklist', 'us-resources', 'online-banking-safety', 'moc-staying-safe'],
    content: `## The Most Common Tech Scams

Scammers use technology to trick people into handing over money or personal information. Here are the most common types:

### Phishing Emails and Texts
You receive a message that looks like it is from a trusted company — your bank, Amazon, or the IRS. It asks you to click a link and enter your login details. The link leads to a fake website that steals your information.

**How to spot it:** Look for misspellings, urgent language ("Your account will be closed!"), and suspicious sender addresses. Hover over links before clicking to see where they actually go.

### Tech Support Scams
A pop-up appears on your screen saying your computer has a virus and you must call a number right away. The person who answers pretends to be from Microsoft or Apple and asks for remote access to your computer or payment to "fix" the problem.

**How to spot it:** Real tech companies will never show you a pop-up with a phone number or ask for remote access out of the blue.

### Phone Scams (Vishing)
A caller claims to be from the IRS, Social Security, or your bank. They threaten arrest, fines, or account closure unless you pay immediately — often with gift cards or wire transfers.

**How to spot it:** Government agencies do not call and demand immediate payment. Hang up and call the official number from the agency's website.

## Fraud by the Numbers (2025-2026)

The scale of fraud in the United States continues to grow:

- **$15.9 billion** in total fraud losses were reported in 2025, across more than **3 million reports** filed with the FTC. (Source: FTC.gov, 2026)
- **Imposter scams** — where someone pretends to be a trusted person or organization — were the **#1 reported fraud type**, causing **$3.5 billion in losses**. (Source: FTC.gov, 2026)
- Reports from older adults losing **$10,000 or more** to fraud **quadrupled** between 2020 and 2024. (Source: FTC.gov, 2026)
- Key tactics include **fake fraud alerts**, **imposter calls using stolen personal data**, and **AI voice clones** that mimic a family member's voice. (Source: FTC.gov, 2026)
- In March 2026, the FTC hosted a roundtable focused on the **top scams affecting older adults**. (Source: consumer.ftc.gov, 2026)

## New Scam Types to Watch For (2026 Update)

### Recovery Scams
After someone has already been scammed, criminals reach out pretending to help the victim get their money back. They charge fees for services that do not exist. Recovery scams are expected to surge in 2026, particularly targeting victims of pig-butchering and financial-grooming scams. (Source: FTC.gov, 2026)

### Fake Law Enforcement Scams
You receive a call from someone claiming to be a police officer or federal agent. They say you are the subject of a criminal investigation. Some scammers will even interrogate victims on video calls for hours, threatening criminal charges and pressuring you to pay money to "resolve" the situation. Real law enforcement will never demand payment over the phone. (Source: FTC.gov, AARP.org, 2026)

### AI Content Poisoning
Scammers now use artificial intelligence to create realistic-looking fake shopping websites that show up in search results. AI has made it very easy for criminals to produce extremely convincing fake photos, videos, and entire websites. Always verify a website is legitimate before entering any personal or payment information. (Source: FTC.gov, AARP.org, 2026)

### Updated Fraud Statistics (2026)
- Government imposter scams grew from $171 million in losses in 2023 to **$789 million in 2024** — a staggering increase. (Source: FTC.gov, 2026)
- A record **$12.5 billion** was reported stolen through scams and fraud in 2024, up 25% from $10 billion in 2023. (Source: FTC.gov, 2026)

## Golden Rules of Scam Prevention

1. **Never rush.** Scammers create urgency to stop you from thinking clearly.
2. **Never give remote access** to someone who contacts you first.
3. **Never pay with gift cards.** No real company or government agency accepts gift cards as payment.
4. **Verify independently.** If a message claims to be from your bank, hang up and call the number on the back of your card.
5. **Talk to someone you trust** before acting on anything that feels off.

## Where to Report Scams
- **FTC**: [ReportFraud.ftc.gov](https://reportfraud.ftc.gov)
- **FBI Internet Crime**: [IC3.gov](https://ic3.gov)
- **AARP Fraud Helpline**: 1-877-908-3360`,
  },
  {
    slug: 'beginners-roadmap',
    title: 'Beginner\'s Tech Roadmap',
    category: 'synthesis',
    tags: ['beginner', 'getting-started', 'learning', 'roadmap'],
    lastUpdated: '2026-04-01',
    seeAlso: ['wifi-networking', 'password-security', 'safety-checklist', 'moc-getting-started', 'digital-literacy', 'cloud-storage'],
    content: `## Your First Steps with Technology

Learning technology does not have to feel overwhelming. This roadmap breaks the journey into small, manageable steps. Go at your own pace — there is no deadline.

## Week 1-2: The Basics

Start with the device you use most (phone, tablet, or computer) and practice these essentials:

- **Turning your device on and off** — find the power button and learn the difference between sleep mode and shutting down completely.
- **Using the touchscreen or mouse** — practice tapping, swiping, scrolling, and clicking.
- **Adjusting settings** — make the text bigger, turn the brightness up or down, and adjust the volume.
- **Connecting to Wi-Fi** — open your settings, find Wi-Fi, select your home network, and enter the password.

## Week 3-4: Communication

Once you are comfortable with the basics, learn to stay in touch:

- **Making phone calls and video calls** — try FaceTime (iPhone) or Google Meet (Android and computers).
- **Sending text messages** — practice typing messages and adding photos.
- **Using email** — set up a Gmail or Outlook account, send a test email to a family member.

## Week 5-6: Staying Safe Online

Before exploring further, learn how to protect yourself:

- **Create strong passwords** for every account (see our Password Security page).
- **Recognize scams** — learn the warning signs (see our Scam Prevention page).
- **Keep your device updated** — turn on automatic updates so your device always has the latest security fixes.

## Week 7-8: Exploring More

Now that you have a solid foundation:

- **Browse the web** — practice searching on Google and bookmarking your favorite sites.
- **Download helpful apps** — weather, news, health tracking, and video calling.
- **Try online shopping** — start with a trusted site like Amazon and use a credit card (not debit) for extra fraud protection.

## Quick Tip

Write down your passwords in a notebook you keep in a safe place at home. This is a perfectly fine approach while you are getting started — you can switch to a password manager later when you are ready.`,
  },
  {
    slug: 'safety-checklist',
    title: 'Digital Safety Checklist',
    category: 'synthesis',
    tags: ['safety', 'checklist', 'security', 'privacy', 'best-practices'],
    lastUpdated: '2026-04-02',
    seeAlso: ['password-security', 'scam-prevention', 'wifi-networking', 'cloud-storage'],
    content: `## Your Personal Digital Safety Checklist

Use this checklist to make sure your devices and accounts are secure. You do not need to do everything at once — work through it one item at a time.

## Passwords and Accounts

- [ ] Every account has a unique password (not reused anywhere else)
- [ ] All passwords are at least 12 characters long
- [ ] Two-factor authentication is turned on for email, banking, and social media
- [ ] You have a way to store passwords safely (notebook in a secure place, or a password manager)
- [ ] You have a recovery email or phone number set up for your most important accounts

## Device Security

- [ ] Your phone has a lock screen with a PIN, fingerprint, or face recognition
- [ ] Your computer requires a password to log in
- [ ] Automatic updates are turned on for your operating system
- [ ] Automatic updates are turned on for your apps
- [ ] You have antivirus software installed (Windows Defender is built into Windows and works well)

## Wi-Fi and Network

- [ ] Your home Wi-Fi has a strong password (not the default one from the sticker)
- [ ] Your router uses WPA2 or WPA3 encryption
- [ ] You have a separate guest network for visitors (if your router supports it)
- [ ] You avoid doing banking or shopping on public Wi-Fi without a VPN

## Email and Browsing

- [ ] You do not click links in unexpected emails or texts
- [ ] You check the sender's email address before responding to messages
- [ ] You look for the padlock icon in your browser's address bar before entering personal information
- [ ] You have an ad blocker installed in your browser (uBlock Origin is a good free option)

## Backups

- [ ] Important photos are backed up (to iCloud, Google Photos, or an external drive)
- [ ] Important documents are backed up in a second location
- [ ] You know how to restore from a backup if something goes wrong

## Quick Tip

Set a calendar reminder once every three months to review this checklist. Technology changes, and a quick review helps you stay protected.`,
  },
  {
    slug: 'us-resources',
    title: 'U.S. Tech Help Resources',
    category: 'entity',
    tags: ['resources', 'help', 'government', 'organizations', 'support'],
    lastUpdated: '2026-04-04',
    seeAlso: ['scam-prevention', 'beginners-roadmap', 'safety-checklist'],
    content: `## Free and Trusted Tech Help in the United States

You do not have to figure out technology alone. These organizations offer free help, guides, and support designed for people who are still learning.

## Government Resources

### Federal Trade Commission (FTC)
- **Website**: [ftc.gov/consumers](https://consumer.ftc.gov)
- **What they offer**: Consumer protection information, scam alerts, and a fraud reporting tool.
- **Report scams**: [ReportFraud.ftc.gov](https://reportfraud.ftc.gov)

### Cybersecurity and Infrastructure Security Agency (CISA)
- **Website**: [cisa.gov](https://www.cisa.gov)
- **What they offer**: Cybersecurity tips for individuals and families, alerts about current threats.
- **Secure Our World**: A dedicated program with 4 core practices (strong passwords, software updates, think before clicking, multi-factor authentication). Free tip sheets in multiple languages, plus free technical assistance and training. Website: [cisa.gov/secure-our-world](https://www.cisa.gov/secure-our-world). (Source: CISA.gov, 2026)

### FBI Internet Crime Complaint Center (IC3)
- **Website**: [ic3.gov](https://www.ic3.gov)
- **What they offer**: A place to report internet-related crimes including fraud, identity theft, and hacking.

## Nonprofit Organizations

### AARP
- **Website**: [aarp.org/technology](https://www.aarp.org/home-family/personal-technology/)
- **What they offer**: Tech guides written for adults 50+, free webinars, and a fraud helpline (1-877-908-3360).
- **Best for**: Learning at your own pace with step-by-step articles.

### Senior Planet by AARP
- **Website**: [seniorplanet.org](https://seniorplanet.org)
- **What they offer**: Free online and in-person technology training for people 60 and older. Classes are live with small groups of 12 to 15 people, so you get personal attention. (Source: AARP Tech Trends, 2026)

### GCFGlobal (Goodwill Community Foundation)
- **Website**: [gcfglobal.org](https://edu.gcfglobal.org/en/topics/technology/)
- **What they offer**: Free online courses covering computers, smartphones, the internet, and essential software.
- **Best for**: Structured learning from the very beginning.

## AARP Tech Trends (2026)

Recent research from AARP shows how rapidly older adults are adopting technology (Source: AARP Tech Trends, 2026):

- **Smartphone ownership among adults 50+** soared from 55% in 2016 to **90% in 2025**.
- **2 in 5 older adults** are planning a tech purchase in 2026, with smartphones at the top of the list.
- Adults 50+ now use an average of **14 digital services** and **10 apps**.
- **81%** use technology for engaging with the world, **80%** for social connections, and **65%** for managing finances.
- Despite high adoption, **59% of older adults** do not believe technology is designed with them in mind.
- Some smartphones now offer **high-definition voice** for people who are hard of hearing, and **speech-to-text** features for those with arthritis or Parkinson's disease.

## Local Help

### Public Libraries
Most public libraries offer:
- Free Wi-Fi and computer access
- One-on-one tech help sessions with librarians
- Group classes on topics like email, internet safety, and using a smartphone

Call your local library to ask about their technology programs.

### Senior Centers
Many senior centers host regular technology classes. Contact your local Area Agency on Aging at [eldercare.acl.gov](https://eldercare.acl.gov) or call 1-800-677-1116 to find programs near you.

## Quick Tip

AARP membership is not required to access their free online tech guides and videos. Anyone can visit [aarp.org/technology](https://www.aarp.org/home-family/personal-technology/) and start learning right away.`,
  },
  {
    slug: 'sending-text-messages',
    title: 'How to Send a Text Message',
    category: 'concept',
    tags: ['texting', 'messaging', 'phone', 'iphone', 'android'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics'],
    content: `## What Is a Text Message?

A text message (also called an SMS) is a short written message you send from your phone to someone else's phone. It is one of the most common ways to stay in touch with family and friends.

## How to Send a Text on iPhone

1. Find the green **Messages** app on your home screen and tap it.
2. Tap the **pencil icon** in the top-right corner to start a new message.
3. In the **To** field, type the person's name (if they are in your contacts) or their phone number.
4. Tap the text box at the bottom of the screen where it says "Text Message."
5. Type your message using the keyboard.
6. Tap the **blue arrow** button to send.

You will see your message appear in a blue or green bubble. Blue means the other person also has an iPhone. Green means they have a different type of phone. Both work the same way.

## How to Send a Text on Android

1. Find the **Messages** app (it may look like a chat bubble) and tap it.
2. Tap **Start chat** or the **plus (+) icon** at the bottom.
3. Type the person's name or phone number in the search bar at the top.
4. Tap their name when it appears, or finish typing the number.
5. Type your message in the text box at the bottom.
6. Tap the **send arrow** to deliver your message.

## Quick Tip: Use Your Voice Instead of Typing

If typing feels slow, you can speak your message instead. Look for the **microphone icon** on your keyboard. Tap it, say your message out loud, and your phone will type the words for you. Check the text before sending to make sure it heard you correctly.

## Adding a Photo to Your Text

Want to share a picture? Tap the **camera icon** or **plus (+) button** next to the text box. You can take a new photo or choose one from your photo library. Then tap send.`,
  },
  {
    slug: 'copy-and-paste',
    title: 'How to Copy and Paste',
    category: 'concept',
    tags: ['copy', 'paste', 'basics', 'phone', 'computer'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics'],
    content: `## What Is Copy and Paste?

Copy and paste lets you take text (or a picture) from one place and put it somewhere else — without retyping it. This saves time and avoids mistakes. You can copy a web address, a phone number, a recipe, or anything you see on your screen.

## How to Copy and Paste on a Computer

### Using Keyboard Shortcuts
1. **Select the text** you want to copy. Click at the start of the text, hold down your mouse button, and drag to the end. The selected text will turn blue.
2. **Copy it** by pressing **Ctrl + C** on Windows, or **Cmd + C** on Mac. (Hold down Ctrl or Cmd, then tap the C key.)
3. Click where you want to put the text.
4. **Paste it** by pressing **Ctrl + V** on Windows, or **Cmd + V** on Mac.

### Using the Right-Click Menu
1. Select the text by clicking and dragging.
2. Right-click on the highlighted text (press the right side of your mouse button).
3. Click **Copy** from the menu that appears.
4. Right-click where you want to paste.
5. Click **Paste**.

## How to Copy and Paste on a Phone or Tablet

1. **Press and hold** your finger on the word you want to copy. Two small handles (blue dots or lines) will appear around the word.
2. **Drag the handles** to highlight all the text you want.
3. Tap **Copy** from the small menu that pops up.
4. Go to where you want to paste the text (a message, email, or search bar).
5. **Press and hold** in the text area until a menu appears.
6. Tap **Paste**.

## Quick Tip

If you make a mistake after pasting, you can undo it. On a computer, press **Ctrl + Z** (Windows) or **Cmd + Z** (Mac). On a phone, shake the device or tap the undo button if one appears.`,
  },
  {
    slug: 'downloading-apps',
    title: 'How to Download an App',
    category: 'concept',
    tags: ['apps', 'app store', 'google play', 'download', 'phone'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics', 'apple', 'android'],
    content: `## What Is an App?

An app is a program you install on your phone or tablet. Apps let you do all sorts of things — check the weather, video call your grandkids, read the news, play games, or manage your bank account.

## How to Download an App on iPhone or iPad

1. Find the **App Store** on your home screen. It is a blue icon with a white letter "A."
2. Tap the **Search** tab at the bottom of the screen.
3. Type the name of the app you want (for example, "Zoom" or "Weather Channel").
4. Find the correct app in the results. Look for the official one — it will usually have a lot of reviews and a high rating.
5. Tap the **GET** button next to the app.
6. You may need to confirm with **Face ID** (look at your phone), **Touch ID** (press your fingerprint), or your **Apple ID password**.
7. The app will download and appear on your home screen.

## How to Download an App on Android

1. Find the **Google Play Store** on your home screen. It is a colorful triangle icon.
2. Tap the **search bar** at the top and type the name of the app.
3. Find the correct app in the results.
4. Tap **Install**. The app will download automatically.
5. When it finishes, tap **Open** to use it, or find it on your home screen.

## Staying Safe When Downloading Apps

- **Only download apps from the official App Store or Google Play Store.** These stores check apps for safety before making them available.
- **Read the reviews** before downloading. If many people report problems, choose a different app.
- **Watch out for apps that ask for too many permissions.** A flashlight app should not need access to your contacts or camera.
- **Delete apps you no longer use.** This frees up space and reduces risk.

## Quick Tip

If an app costs money, the price will show instead of "GET" or "Install." Free apps will always say "GET" (iPhone) or "Install" (Android). You will never be charged without your permission.`,
  },
  {
    slug: 'taking-screenshots',
    title: 'How to Take a Screenshot',
    category: 'concept',
    tags: ['screenshot', 'phone', 'computer', 'windows', 'mac'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics', 'apple', 'android', 'windows'],
    content: `## What Is a Screenshot?

A screenshot is a picture of whatever is on your screen at that moment. It is like taking a photo of your screen. Screenshots are helpful when you want to save something you see — a recipe, a confirmation number, a funny message, or directions.

## How to Take a Screenshot on iPhone

1. Press the **side button** (on the right side of your phone) and the **volume up button** at the same time.
2. Press both buttons quickly and let go right away.
3. You will see a flash on the screen, and a small preview will appear in the bottom-left corner.
4. Tap the preview to edit or share it, or wait a few seconds and it will save automatically.
5. Find your screenshot in the **Photos** app.

## How to Take a Screenshot on Android

1. Press the **power button** and the **volume down button** at the same time.
2. Hold both buttons for about one second, then release.
3. The screen will flash, and you will see a notification or preview.
4. Find your screenshot in your **Photos** app or **Gallery**, usually in a folder called "Screenshots."

## How to Take a Screenshot on Windows

- **Snipping Tool**: Press **Windows key + Shift + S**. Your screen will dim, and you can drag to select the area you want to capture. The screenshot copies to your clipboard — paste it into an email or document with **Ctrl + V**.
- **Full screen**: Press the **Print Screen** key (sometimes labeled PrtScn) on your keyboard. This copies the entire screen. Paste it where you need it with **Ctrl + V**.

## How to Take a Screenshot on Mac

- **Entire screen**: Press **Cmd + Shift + 3**. The screenshot saves to your Desktop.
- **Selected area**: Press **Cmd + Shift + 4**, then drag to select the area you want.

## Where to Find Your Screenshots

- **iPhone/Android**: Open the Photos app and look for a "Screenshots" album.
- **Windows**: Check your clipboard (paste with Ctrl + V) or look in the Pictures > Screenshots folder.
- **Mac**: Look on your Desktop for a file that starts with "Screenshot."

## Quick Tip

Screenshots are great for saving confirmation numbers after you buy something online. Take a screenshot and you will always have a record, even if the email gets lost.`,
  },
  {
    slug: 'using-voice-assistants',
    title: 'How to Use Siri, Google Assistant, and Alexa',
    category: 'concept',
    tags: ['siri', 'google assistant', 'alexa', 'voice', 'smart home'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics', 'apple', 'android'],
    content: `## What Are Voice Assistants?

Voice assistants are helpers built into your devices that respond when you talk to them. You can ask them questions, set reminders, make phone calls, play music, and much more — all without touching a screen.

The three most common voice assistants are:
- **Siri** — built into iPhones, iPads, and Macs (made by Apple)
- **Google Assistant** — built into Android phones and Google Home speakers
- **Alexa** — built into Amazon Echo speakers and some other devices

## How to Activate Them

- **Siri**: Say **"Hey Siri"** or hold down the **side button** on your iPhone.
- **Google Assistant**: Say **"Hey Google"** or **"OK Google,"** or press and hold the **home button** on your Android phone.
- **Alexa**: Say **"Alexa"** to your Amazon Echo or other Alexa-enabled device.

## Helpful Things to Ask

Here are some everyday commands you can try:

- **"What is the weather today?"** — Get a quick forecast.
- **"Set a timer for 10 minutes."** — Great for cooking.
- **"Remind me to take my medicine at 8 PM."** — Never miss a dose.
- **"Call [name]."** — Make a hands-free phone call.
- **"Play some jazz music."** — Listen to music without lifting a finger.
- **"What time is it?"** — Helpful when your hands are full.
- **"Send a text to [name] saying I am on my way."** — Send messages by voice.

## A Note About Privacy

Voice assistants listen for their wake word ("Hey Siri," "Hey Google," or "Alexa"). They are designed to start listening only after they hear that phrase. However, if you are uncomfortable, you can:

- **Turn off the microphone** on your smart speaker (there is usually a physical button).
- **Review and delete** your voice history in the device settings.
- **Mute the assistant** when you are not using it.

## Quick Tip

You do not need to speak in any special way. Talk to your voice assistant the same way you would talk to a person. If it does not understand, try rephrasing with shorter sentences.`,
  },
  {
    slug: 'using-facebook',
    title: 'How to Use Facebook',
    category: 'concept',
    tags: ['facebook', 'social media', 'friends', 'photos'],
    lastUpdated: '2026-04-04',
    seeAlso: ['privacy-settings', 'scam-prevention'],
    content: `## What Is Facebook?

Facebook is a social media website and app that lets you connect with friends, family, and communities. You can share updates, post photos, join groups based on your interests, and video call your loved ones.

## Creating an Account

1. Go to **facebook.com** on your computer or download the **Facebook app** from the App Store (iPhone) or Google Play Store (Android).
2. Tap **Create New Account**.
3. Enter your name, email address or phone number, date of birth, and a password.
4. Follow the prompts to verify your email or phone number.

## Setting Up Your Profile

- Add a **profile photo** so friends can recognize you. Tap your profile picture area and choose a photo from your phone or computer.
- Fill in a few details about yourself — your hometown, where you went to school, or your interests. You can share as much or as little as you want.

## Finding Friends

- Tap the **search bar** at the top and type a friend's or family member's name.
- When you find them, tap **Add Friend**. They will get a request, and once they accept, you will be connected.

## Setting Your Privacy

This is important. Go to **Settings > Privacy** and change "Who can see your posts?" to **Friends Only**. This means only people you have added as friends can see what you share — not strangers.

## Using Facebook Day to Day

- **News Feed**: This is the main screen. It shows posts from your friends and groups you follow. Scroll down to see more.
- **Posting an update**: Tap "What's on your mind?" at the top. Type your message, add a photo if you like, and tap **Post**.
- **Joining groups**: Search for topics you enjoy (gardening, cooking, local community) and tap **Join Group** to connect with others who share your interests.

## Video Calling with Messenger

Facebook has a free messaging app called **Messenger**. You can use it to send messages and make **video calls** to friends and family. Tap the video camera icon in a conversation to start a call.

## Quick Tip

Be cautious of messages from people you do not know, especially if they ask for money or personal information. Scammers sometimes create fake profiles. If something feels off, do not respond — and report the message to Facebook.`,
  },
  {
    slug: 'using-google-maps',
    title: 'How to Use Google Maps',
    category: 'concept',
    tags: ['maps', 'directions', 'navigation', 'driving', 'google'],
    lastUpdated: '2026-04-04',
    seeAlso: ['google', 'downloading-apps'],
    content: `## What Is Google Maps?

Google Maps is a free app that helps you find places and get directions. It works like having a GPS built into your phone. You can use it to find restaurants, stores, hospitals, and get turn-by-turn directions — with a voice guiding you the whole way.

## Opening Google Maps

- On **Android**, Google Maps is usually already installed. Look for the icon that looks like a colorful map pin.
- On **iPhone**, download it from the App Store by searching "Google Maps," then tap **GET**.

## Searching for a Place

1. Open Google Maps.
2. Tap the **search bar** at the top of the screen.
3. Type what you are looking for — a specific address, a business name, or something general like "pharmacy near me."
4. Tap the result you want. You will see it on the map with details like the address, phone number, hours, and reviews.

## Getting Directions

1. After finding the place you want, tap the **Directions** button (it looks like a blue arrow or diamond shape).
2. Choose how you are traveling: **car**, **walking**, **public transit**, or **rideshare**.
3. The app will show you the best route and how long it will take.
4. Tap **Start** to begin turn-by-turn navigation. A voice will tell you when to turn so you can keep your eyes on the road.

## Saving Your Home and Work Addresses

You can save your home address so getting directions home is always quick:

1. Tap the **search bar** and type "Home."
2. Google Maps will ask you to set your home address. Enter it and tap **Save**.
3. Now you can always tap "Home" to get directions back, no matter where you are.

## Quick Tip

If you need to share your location with a family member (for safety or to help them find you), tap the **blue dot** that shows your location, then tap **Share location**. You can choose how long to share it and send a link to anyone you trust.`,
  },
  {
    slug: 'ride-sharing',
    title: 'How to Use Uber and Lyft',
    category: 'concept',
    tags: ['uber', 'lyft', 'rides', 'transportation'],
    lastUpdated: '2026-04-04',
    seeAlso: ['downloading-apps', 'using-google-maps'],
    content: `## What Are Uber and Lyft?

Uber and Lyft are apps that let you request a ride from a nearby driver. Think of it like calling a taxi, but you do it from your phone. You enter where you want to go, see the price before you agree, and a driver comes to pick you up. You pay through the app — no cash needed.

## Getting Started

1. **Download the app** from the App Store (iPhone) or Google Play Store (Android). Search for "Uber" or "Lyft."
2. **Create an account** with your name, phone number, and email address.
3. **Add a payment method** — a credit card, debit card, or PayPal. The app will charge this automatically after each ride.

## How to Request a Ride

1. Open the Uber or Lyft app.
2. Type in **where you want to go** in the "Where to?" box.
3. The app will show you a **price estimate** and how long it will take a driver to reach you.
4. Choose the type of ride you want. The basic options (UberX or Lyft) are the most affordable.
5. Tap **Request** or **Confirm** to book your ride.

## When Your Driver Arrives

This part is important for your safety:

1. **Check the driver's name, car make and model, and license plate number** — the app shows all of this. Make sure they match the car that pulls up.
2. **The driver should know your name.** Ask "Who are you here for?" before getting in.
3. **Sit in the back seat.**
4. **Share your trip** with a family member. Both Uber and Lyft let you send a live link so someone can follow your ride on a map.

## What If You Do Not Have a Smartphone?

There is a service called **GoGoGrandparent** designed for people who do not use smartphones. You call **1-855-464-6872** and an operator will arrange an Uber or Lyft ride for you over the phone. There is a small extra fee for this service.

## Quick Tip

If this is your first ride, ask a family member or friend to sit with you and walk through the process together. Once you have done it once, it will feel familiar the next time.`,
  },
  {
    slug: 'online-banking',
    title: 'How to Use Online Banking Safely',
    category: 'concept',
    tags: ['banking', 'money', 'security', 'apps'],
    lastUpdated: '2026-04-04',
    seeAlso: ['password-security', 'scam-prevention', 'downloading-apps'],
    content: `## What Is Online Banking?

Online banking lets you check your bank account, pay bills, and transfer money using your phone or computer — without driving to the bank. Most banks offer a free app and website for this.

## Getting Set Up

1. **Download your bank's official app** from the App Store (iPhone) or Google Play Store (Android). Search for your bank's name (for example, "Chase," "Bank of America," or "Wells Fargo").
2. **Be careful to pick the real app** — look for the official bank logo and a large number of reviews.
3. Open the app and tap **Enroll** or **Register**.
4. You will need your **account number** (found on your bank statement or debit card) and some personal information to verify your identity.
5. Create a **strong password** — at least 12 characters, with a mix of letters, numbers, and symbols.
6. Turn on **fingerprint or face login** if your phone supports it. This is faster and very secure.

## What You Can Do with Online Banking

- **Check your balance** — see how much money is in your account at any time.
- **View recent transactions** — see every purchase and payment.
- **Pay bills** — set up payments to your electric company, phone company, or credit card.
- **Transfer money** — move money between your accounts or send money to family.
- **Set up alerts** — get a notification on your phone every time money goes in or out of your account. This helps you catch anything suspicious right away.

## Staying Safe

- **Only use your bank's app on your home Wi-Fi or cellular data.** Never do banking on public Wi-Fi (like at a coffee shop or library) — others on the same network could potentially see your information.
- **Your bank will never ask for your password** by email, text, or phone call. If someone contacts you claiming to be your bank and asks for your login details, it is a scam. Hang up and call the number on the back of your debit card.
- **Log out when you are done**, especially on a shared computer.
- **Keep your app updated** so you always have the latest security protections.

## Quick Tip

If you are nervous about trying online banking, ask your bank if they offer in-person help for setting up the app. Many branches will walk you through it at no cost.`,
  },
  {
    slug: 'streaming-tv',
    title: 'How to Watch Netflix and Streaming TV',
    category: 'concept',
    tags: ['netflix', 'streaming', 'tv', 'entertainment'],
    lastUpdated: '2026-04-04',
    seeAlso: ['wifi-networking', 'downloading-apps'],
    content: `## What Is Streaming?

Streaming means watching shows, movies, or videos over the internet instead of through a cable TV connection or antenna. When you stream, the video plays on your screen right away — you do not need to download the whole thing first.

## Popular Streaming Services

Here are some of the most well-known services:

- **Netflix** — Large library of movies, TV shows, and documentaries. Starts around $7/month.
- **Hulu** — TV shows, movies, and live TV options. Starts around $8/month.
- **Amazon Prime Video** — Included with an Amazon Prime membership ($15/month), or on its own for $9/month.
- **YouTube** — Free to watch. Millions of videos on every topic you can think of. Great for learning new things.
- **PBS** — Free streaming of many shows at pbs.org or through the PBS app.

## How to Sign Up

1. Go to the streaming service's website (for example, **netflix.com**) or download their app from the App Store or Google Play Store.
2. Tap **Sign Up** or **Start Your Free Trial** (some services offer a free trial period).
3. Enter your email address and create a password.
4. Add a payment method (credit card or debit card).
5. Start browsing and watching.

## How to Watch

### On a Smart TV
Most smart TVs made in the last few years have streaming apps built in. Look for a **Netflix**, **Hulu**, or **YouTube** button on your remote, or look in your TV's app list.

### On Your Phone or Tablet
Download the app from the App Store or Google Play Store, log in, and start watching.

### On Your Computer
Go to the streaming service's website (like **netflix.com**) in your web browser, log in, and pick something to watch.

## Quick Tip

Write down your streaming passwords in a safe place. It is frustrating to get locked out of your account because you forgot the password. A small notebook kept in a drawer works great for this.`,
  },
  {
    slug: 'device-basics',
    title: 'Device Basics',
    category: 'concept',
    tags: ['devices', 'phone', 'tablet', 'computer', 'getting-started'],
    lastUpdated: '2026-04-04',
    seeAlso: ['apple', 'android', 'windows', 'cloud-storage', 'streaming-setup'],
    content: `## Phones, Tablets, and Computers — What Is the Difference?

- A **smartphone** is a small, pocket-sized device for calls, texts, apps, and browsing the internet.
- A **tablet** is like a bigger smartphone — great for reading, video calls, and watching videos.
- A **laptop or desktop computer** has a full keyboard and is good for writing, managing files, and more detailed tasks.

All three connect to the internet and can run apps.

## Turning Your Device On and Off

- **Phones and tablets:** Press and hold the power button (usually on the right side or top) for a few seconds. To turn it off, press and hold the same button and follow the on-screen prompt.
- **Laptops:** Open the lid or press the power button (often near the keyboard). To shut down, go to the Start menu (Windows) or Apple menu (Mac) and choose **Shut Down**.

## Charging Your Device

Plug the charging cable into your device and into a wall outlet. Most phones and tablets use a USB-C or Lightning cable. A full charge usually takes one to two hours. Try to keep your battery above 20% to keep it healthy.

## Touchscreen Basics

- **Tap:** Touch the screen once to open something.
- **Swipe:** Slide your finger up, down, left, or right to scroll or move between screens.
- **Pinch:** Place two fingers on the screen and spread them apart to zoom in, or pinch them together to zoom out.
- **Press and hold:** Touch and keep your finger on an item for extra options.

## Finding Settings

- **iPhone/iPad:** Open the **Settings** app (gray gear icon).
- **Android:** Open the **Settings** app (gear icon), or swipe down from the top and tap the gear.
- **Windows:** Click the **Start** button, then **Settings** (gear icon).
- **Mac:** Click the **Apple menu** in the top-left corner, then **System Settings**.

## Installing Apps

- **iPhone/iPad:** Open the **App Store** and search for the app you want. Tap **Get**, then confirm with your password or Face ID.
- **Android:** Open **Google Play Store** and search. Tap **Install**.
- **Windows/Mac:** Download from the app store or the app's official website.

## Taking a Screenshot

- **iPhone:** Press the **side button** and **volume up** at the same time.
- **Android:** Press the **power button** and **volume down** at the same time.
- **Windows:** Press **Windows key + Shift + S**.
- **Mac:** Press **Command + Shift + 3** for a full screen capture.

## Common Problems and How to Fix Them

### Forgotten Passwords

This is the single most common tech problem. Every login page has a **"Forgot Password?"** link — tap it, enter your email, and check your inbox (and spam folder) for a reset link. To avoid this problem, consider using a password manager (see [[password-security]]).

### Slow Computer

A slow computer is often caused by too many programs running at the same time, a nearly full hard drive, or missed software updates. Try these steps:
1. Restart your computer — this clears out temporary files and can fix many slowness issues.
2. Close programs you are not using.
3. Make sure your operating system and apps are up to date.

### Printer Problems

If your printer is not working:
1. Make sure it is turned on and connected to the same Wi-Fi network as your computer or phone.
2. Check for paper jams and make sure there is paper in the tray.
3. Try restarting both the printer and your computer.
4. On your computer, go to Settings > Printers and make sure the correct printer is selected.

### Screen Readability

Every device has built-in tools to make screens easier to read:
- **Make text bigger:** Go to Settings > Display (or Accessibility) and increase the font size.
- **Zoom in:** Pinch outward on a touchscreen, or press Ctrl and + on a keyboard.
- **High contrast mode:** Found in Accessibility settings, this makes text stand out more against the background.
- **Dark mode:** Easier on the eyes in low light — find it in your Display settings.`,
  },
  {
    slug: 'video-calling',
    title: 'Video Calling',
    category: 'concept',
    tags: ['video-calls', 'zoom', 'facetime', 'google-meet', 'teams'],
    lastUpdated: '2026-04-05',
    seeAlso: ['google', 'microsoft', 'apple', 'moc-communication'],
    content: `## What Is Video Calling?

Video calling lets you see and talk to someone in real time using your phone, tablet, or computer. It is a wonderful way to stay in touch with family, friends, and doctors — especially when you cannot visit in person.

## Popular Video Calling Apps

### FaceTime (Apple devices only)
- **Best for:** Calling other iPhone, iPad, or Mac users.
- **Setup:** FaceTime comes pre-installed. Open the app and sign in with your Apple ID.
- **To call:** Open FaceTime, tap the **+** button, type a name or phone number, and tap the video icon.

### Zoom
- **Best for:** Group calls, classes, and appointments.
- **Setup:** Download Zoom from your app store. You can join meetings without creating an account.
- **To join a call:** Tap the meeting link someone sends you, or open Zoom and tap **Join** and enter the Meeting ID number.

### Google Meet
- **Best for:** People who use Gmail or Google services.
- **Setup:** Open Google Meet from your browser at **meet.google.com**, or download the app.
- **To join:** Click the meeting link or enter the meeting code.

### Microsoft Teams
- **Best for:** People who use Outlook or Microsoft 365.
- **Setup:** Download Teams from your app store or use it in a web browser.
- **To join:** Click the meeting link in your email or calendar invitation.

## Camera and Microphone Controls

During any video call, you will see small icons at the bottom of your screen:

- **Camera icon:** Tap to turn your camera on or off. A line through the icon means the camera is off.
- **Microphone icon:** Tap to mute or unmute yourself. Muting is polite when you are not speaking in a group call.
- **Red phone icon:** Tap to leave the call.

## Tips for a Good Video Call

- **Lighting:** Sit facing a window or lamp so your face is well-lit.
- **Background:** Choose a quiet, tidy area.
- **Internet:** A strong Wi-Fi connection prevents freezing and choppy audio.
- **Test first:** Many apps let you do a test call to check your camera and microphone before the real thing.

## Group Calls

All four apps support group calls. The host starts the meeting, and others join using a link or code. In Zoom and Teams, you can see everyone at once in a grid view.`,
  },
  {
    slug: 'cloud-storage',
    title: 'Cloud Storage',
    category: 'concept',
    tags: ['cloud', 'storage', 'backup', 'google-drive', 'icloud', 'onedrive'],
    lastUpdated: '2026-04-04',
    seeAlso: ['google', 'microsoft', 'apple'],
    content: `## What Is Cloud Storage?

Cloud storage is a way to save your files — photos, documents, videos — on the internet instead of only on your device. Think of it as a digital filing cabinet that you can open from any device, anywhere. If your phone breaks or your computer stops working, your files are still safe in the cloud.

## Popular Cloud Storage Services

### Google Drive
- **Free space:** 15 GB (enough for thousands of photos and documents).
- **Best for:** Anyone with a Gmail account — you already have it.
- **How to use:** Go to **drive.google.com** or open the Google Drive app. Drag files in, or tap the **+** button to upload.

### iCloud (Apple)
- **Free space:** 5 GB (upgrades available starting at $0.99/month).
- **Best for:** iPhone, iPad, and Mac users.
- **How to use:** On your Apple device, go to **Settings > [Your Name] > iCloud** and turn on the types of data you want to save (Photos, Contacts, etc.).

### OneDrive (Microsoft)
- **Free space:** 5 GB (15 GB or more with a Microsoft 365 subscription).
- **Best for:** People who use Windows computers or Outlook.
- **How to use:** OneDrive is built into Windows. Open the OneDrive folder on your computer and save files there.

### Dropbox
- **Free space:** 2 GB.
- **Best for:** Sharing large files with others.
- **How to use:** Download the Dropbox app or visit **dropbox.com**. Drag files into your Dropbox folder.

## Sharing Files From the Cloud

All of these services let you share a file by creating a link. Instead of emailing a large attachment, you send the link and the other person can view or download it. Look for a **Share** button next to your file.

## Keeping Your Cloud Safe

- Use a strong password on your cloud account.
- Turn on two-factor authentication (see [[password-security]]).
- Be careful who you share links with — anyone with the link may be able to see your files.`,
  },
  {
    slug: 'email-essentials',
    title: 'Email Essentials',
    category: 'concept',
    tags: ['email', 'gmail', 'outlook', 'phishing', 'communication'],
    lastUpdated: '2026-04-04',
    seeAlso: ['google', 'microsoft', 'scam-prevention', 'moc-communication'],
    content: `## Gmail vs. Outlook — Which Should I Use?

- **Gmail** (by Google): Free, works on any device, and gives you 15 GB of storage. Great if you use other Google services like Google Drive or YouTube.
- **Outlook** (by Microsoft): Free, works on any device, and connects well with Microsoft products like Word and OneDrive. Great if you use a Windows computer.

Both are excellent choices. Pick the one that matches the devices and services you already use.

## Sending an Email

1. Open your email app or go to **gmail.com** or **outlook.com**.
2. Tap the **Compose** or **New Email** button.
3. In the **To** field, type the recipient's email address.
4. Add a **Subject** — a short title describing your message.
5. Write your message in the large text area.
6. Tap **Send**.

## Adding Attachments

An attachment is a file you include with your email, like a photo or a document.

1. While writing an email, look for a **paperclip icon**.
2. Tap it and choose the file you want to attach.
3. Wait for the file to upload, then send your email as usual.

Most email services limit attachments to about 25 MB. For larger files, use [[cloud-storage]] and share a link instead.

## Organizing Your Inbox

- **Delete** messages you no longer need.
- **Star** or **Flag** important messages so you can find them later.
- Use the **Search bar** at the top to find old emails by typing a name or keyword.
- **Unsubscribe** from newsletters you no longer read — look for the small "unsubscribe" link at the bottom of those emails.

## Spotting Phishing Emails

Phishing emails try to trick you into clicking a bad link or sharing personal information. Watch for:

- Messages that create **urgency** ("Your account will be closed in 24 hours!").
- Sender addresses that look slightly wrong (e.g., "amaz0n@mail-notice.com").
- Links that do not match the company they claim to be from — hover over a link (without clicking) to see where it really goes.
- Requests for passwords, Social Security numbers, or payment information.

When in doubt, do not click. Go directly to the company's official website by typing the address into your browser.`,
  },
  {
    slug: 'online-shopping-safety',
    title: 'Online Shopping Safety',
    category: 'concept',
    tags: ['shopping', 'safety', 'scams', 'credit-card', 'online'],
    lastUpdated: '2026-04-04',
    seeAlso: ['scam-prevention', 'password-security', 'safety-checklist'],
    content: `## Staying Safe When Shopping Online

Online shopping is convenient, but scammers have become very good at creating fake stores that look real. Here is how to protect yourself every time you shop.

## Before You Buy

- **Search for the retailer's name plus "scam" or "complaint"** before making a purchase. If many people report problems, shop somewhere else.
- **Check BBB's Scam Tracker** at [bbb.org/scamtracker](https://www.bbb.org/scamtracker) to see if a business has been flagged.
- **Be cautious of prices that seem too good to be true.** If a deal looks unbelievable, it probably is.
- **Watch out for AI-powered fake websites.** Scammers now use artificial intelligence to create extremely realistic-looking fake shopping sites that appear in search results. This is called "AI content poisoning." (Source: FTC.gov, CISA.gov, 2026)

## How to Pay Safely

- **Always pay with a credit card.** Credit cards offer the best protection for disputes. If something goes wrong, you can contact your credit card company to reverse the charge.
- **NEVER pay with gift cards, wire transfers, payment apps (like Zelle or Venmo), or cryptocurrency** for online purchases. These methods have little or no fraud protection, and scammers specifically ask for them because the money is nearly impossible to recover.

## Red Flags to Watch For

- The website URL does not start with **https://** (the "s" stands for secure). But keep in mind that https alone does not guarantee the site is legitimate — scammers use it too.
- Coupon offers or promotional emails where the **spacing looks off** or the sender uses a **free email domain** (like gmail.com or yahoo.com instead of the company's real domain) — these are likely fake.
- No physical address, phone number, or return policy listed on the website.
- Pressure to buy immediately with countdown timers or "only 2 left" warnings.

## After You Buy

- **Save your confirmation email and order number.** Take a screenshot if needed.
- **Check your credit card statement** to make sure you were charged the correct amount.
- **Report problems** to the FTC at [ReportFraud.ftc.gov](https://reportfraud.ftc.gov).

## Quick Tip

When in doubt, buy from retailers you already know and trust. If you find a new store, spend a few minutes researching it before entering any payment information.

(Sources: FTC.gov, CISA.gov, AARP.org, 2026)`,
  },
  {
    slug: 'telehealth',
    title: 'Telehealth and Virtual Doctor Visits',
    category: 'concept',
    tags: ['telehealth', 'health', 'video-call', 'doctor', 'mychart'],
    lastUpdated: '2026-04-04',
    seeAlso: ['video-calling', 'device-basics', 'downloading-apps'],
    content: `## What Is Telehealth?

Telehealth (also called a virtual visit or telemedicine) lets you see your doctor through a video call on your phone, tablet, or computer. You do not need to drive to the office — you can talk to your doctor from your own home.

## How to Set Up a Telehealth Appointment

1. **Call your doctor's office** and ask to schedule a virtual appointment. Not all visits can be done virtually, so the office will let you know if telehealth is an option for your needs.
2. The office will email or text you a **link** about 10 minutes before your appointment.
3. You may need to **download an app** in advance (like MyChart, Zoom, or your doctor's own app). Do this the day before so you are not rushing.
4. You may also need to **digitally sign consent forms** before the visit. The office will walk you through this.

## How to Join a MyChart Video Visit

MyChart is one of the most common platforms used by doctor's offices. Here is how to join:

1. **Log in to MyChart** about 15 minutes before your appointment.
2. Go to **Appointments** and find your upcoming visit.
3. Tap **Video Visit**.
4. Tap **Begin Video Visit**.
5. Tap **Join With Video**.
6. Tap **Join With Audio**.

If you are unsure about any step, call your doctor's office — they are used to helping patients with the technology.

## Tips for a Good Virtual Visit

- **Use a tablet if you have one.** The larger screen makes it easier to see your doctor, and tablets have a built-in camera and microphone.
- **Test your audio and video before the appointment.** Most apps have a test feature, or you can do a practice video call with a family member.
- **Sit in a quiet, well-lit room** so your doctor can see and hear you clearly.
- **Have your medication bottles nearby** in case your doctor asks about what you are taking.
- **Write down your questions** ahead of time so you do not forget anything.

## Quick Tip

If you are new to video calls, ask a family member or friend to help you with your first telehealth visit. Once you have done it once, it becomes much easier.

(Source: AARP.org, 2026)`,
  },
  {
    slug: 'accessibility',
    title: 'Phone Accessibility Features',
    category: 'concept',
    tags: ['accessibility', 'iphone', 'android', 'vision', 'hearing', 'mobility'],
    lastUpdated: '2026-04-04',
    seeAlso: ['device-basics', 'apple', 'android'],
    content: `## Making Your Phone Easier to Use

Both iPhones and Android phones have built-in features designed to help people who have difficulty seeing, hearing, or using a touchscreen. You do not need to buy anything extra — these tools are already on your phone.

## iPhone Accessibility Features

Find these in **Settings > Accessibility** on your iPhone or iPad.

### Assistive Access
A simplified version of iOS with bigger buttons, easier navigation, and fewer distractions. It includes an emoji-only keyboard option and the ability to send video selfie messages. This is a great option for anyone who finds regular phone screens overwhelming. (Source: Apple Support, 2026)

### Personal Voice
This feature lets you create a digital voice that sounds like you. If you have a condition that may affect your ability to speak in the future, you can record your voice now and use it later with the Live Speech feature during phone calls and conversations. (Source: Apple Support, 2026)

### Vision Features
- **VoiceOver**: A screen reader that describes everything on your screen out loud.
- **Magnifier**: Turns your phone's camera into a magnifying glass.
- **Display adjustments**: Change colors, increase contrast, reduce motion, and make text bolder.

### Mobility Features
- Found in **Settings > Accessibility > Physical and Motor**.
- Options include touch accommodations, back tap shortcuts, and switch control for people who cannot use the touchscreen in the usual way.

### Accessibility Shortcut
Set up a shortcut to quickly turn your most-used accessibility features on and off. Triple-click the side button to activate it.

## Android Accessibility Features

Find these in **Settings > Accessibility** on your Android phone.

### Display and Text
- **Adjust font size and display size** to make everything on screen bigger.
- **High-contrast text** makes words easier to read against the background.
- **Outline text** (available on Android 16 and later) adds outlines around letters for better visibility.
- **Zoom**: Magnify any part of your screen by tapping.

### TalkBack
Android's screen reader. It provides touch and spoken feedback, reading aloud whatever you tap on the screen. Helpful for people with low vision or blindness.

### Voice Access
Control your entire phone by voice — open apps, navigate screens, and write messages without touching the screen. Great for people with limited hand mobility. (Source: Google Support, 2026)

### Accessibility Menu
A large on-screen menu that gives you easy access to common actions like adjusting volume, taking a screenshot, or locking your phone.

### Live Transcribe
Uses your phone's microphone to convert speech into text in real time. Helpful during conversations, meetings, or anytime you need to read what someone is saying. (Source: Google Support, 2026)

### Live Caption
Automatically adds captions over any audio or video playing on your device — including phone calls, videos, and podcasts. No internet connection required.

## Quick Tip

You do not need to have a disability to benefit from accessibility features. Many people use larger text, voice control, or captions simply because they find them more comfortable. Explore your phone's Accessibility settings — you might find something that makes your daily experience much better.

(Sources: Apple Support, Google Support, 2026)`,
  },
  {
    slug: 'social-media-safety',
    title: 'Social Media Privacy and Safety',
    category: 'concept',
    tags: ['facebook', 'social media', 'privacy', 'safety', 'settings'],
    lastUpdated: '2026-04-04',
    seeAlso: ['privacy-settings', 'scam-prevention', 'using-facebook'],
    content: `## Why Social Media Privacy Matters

Facebook is the most popular social media platform among adults 50 and older. While it is a great way to stay connected with family and friends, it is important to control who can see your information. 52% of Facebook users 50 and older are "very concerned" about privacy. (Source: AARP, 2026)

## Essential Facebook Privacy Settings

### Make Your Posts Friends Only
Go to **Settings & Privacy** (click the arrow in the top-right corner) and change "Who can see your posts?" to **Friends Only**. This means only people you have added as friends can see what you share — not strangers.

### Limit Past Posts
Use the **Limit Past Posts** option to change the visibility of older public posts so that they are only shared with your immediate friends. This is a one-click fix for years of public posts.

### Hide Your Friends List
Change "Who can see your friends list?" to **Only Me**. Scammers sometimes use your friends list to impersonate people you know.

### Turn Off Location Services
On your phone, go to **Settings > Privacy > Location Services** and disable location for Facebook. There is no reason Facebook needs to know where you are at all times.

## Safety Tips for All Social Media

- **Never accept friend requests from people you do not know** — scammers create fake profiles.
- **Be careful what you share publicly** — criminals can use your birthday, pet names, and hometown to guess your security questions.
- **If a message from a friend asks for money, call them first** — their account may have been hacked.
- **Report suspicious profiles and messages** to the platform.

(Sources: AARP.org, How-To Geek, 2026)`,
  },
  {
    slug: 'smart-home-basics',
    title: 'Smart Home Setup for Beginners',
    category: 'concept',
    tags: ['smart home', 'alexa', 'google home', 'smart speaker', 'automation'],
    lastUpdated: '2026-04-04',
    seeAlso: ['using-voice-assistants', 'wifi-networking', 'device-basics', 'streaming-setup'],
    content: `## What Is a Smart Home?

A smart home uses internet-connected devices that you can control with your voice or phone. The most common smart home devices are smart speakers (Amazon Echo, Google Home), smart lights, smart plugs, and smart thermostats.

## Choosing Your Ecosystem

Before buying smart home devices, choose which system to use:

- **Amazon Alexa** — Works with Amazon Echo speakers. Best if you use Amazon services.
- **Google Home** — Works with Google Nest speakers. Best if you use Android phones or Google services.
- **Apple HomeKit** — Works with HomePod speakers. Best if you use iPhones and Macs.

Most smart devices work with multiple ecosystems, so you are not locked in forever.

## Start Simple

The best way to start is with just one or two devices:

1. **Smart speaker** — An Amazon Echo Dot or Google Nest Mini costs around $30-50 and lets you ask questions, set timers, play music, and control other smart devices with your voice.
2. **Smart plugs** — Plug a lamp or fan into a smart plug, and you can turn it on and off with your voice or phone. Smart plugs cost $10-15 each.
3. **Smart lights** — Replace a regular light bulb with a smart bulb. You can dim it, change colors, or set schedules from your phone.

## Tips for Seniors

- **Buy only what solves a real problem for you** — do not buy devices just because they are "smart."
- **Ask a family member to help with initial setup** — once configured, daily use is simple.
- **Voice control is the biggest benefit** — if you have trouble with small buttons or screens, controlling lights and appliances by voice can be life-changing.

(Sources: How-To Geek, Tom's Guide, 2026)`,
  },
  {
    slug: 'streaming-setup',
    title: 'How to Set Up Streaming TV',
    category: 'concept',
    tags: ['streaming', 'roku', 'fire tv', 'netflix', 'tv'],
    lastUpdated: '2026-04-04',
    seeAlso: ['streaming-tv', 'wifi-networking', 'downloading-apps'],
    content: `## What Is a Streaming Device?

If your TV does not have built-in apps (a "smart TV"), you can add streaming by plugging in a small device. The most popular options are:

- **Roku** (Streaming Stick or Express) — Starting around $30. Very easy to use with a simple remote.
- **Amazon Fire TV Stick** — Starting around $30. Works well with Alexa voice control.
- **Apple TV** — Starting around $129. Best for iPhone and Mac users.
- **Chromecast with Google TV** — Starting around $30. Cast from your phone or use the remote.

## How to Set Up a Streaming Stick

1. **Plug the stick into your TV's HDMI port** — this is the rectangular slot on the back or side of your TV.
2. **Connect the power cable** — plug the USB cable into the stick and the other end into a power outlet.
3. **Switch your TV's input** — use your TV remote to select the HDMI input where you plugged in the stick. Look for a button labeled "Input" or "Source."
4. **Follow the on-screen setup** — connect to your WiFi network and create or sign into your account.
5. **Download your streaming apps** — add Netflix, Hulu, YouTube, PBS, or any service you subscribe to.

## Free Streaming Options

You do not need to pay for everything. These are free:

- **YouTube** — Millions of free videos on every topic
- **PBS** — Free shows and documentaries at pbs.org or the PBS app
- **Tubi** — Free movies and TV shows with occasional ads
- **Pluto TV** — Free live TV channels, like cable but free
- **The Roku Channel** — Free if you have a Roku device

## Tips

- Unlike cable TV, streaming services have no installation fees, no contracts, and you can cancel anytime.
- A good internet connection is important — you need at least 5 Mbps for standard video and 25 Mbps for 4K.
- Write down your streaming passwords in a safe place.

(Sources: Tom's Guide, AARP, 2026)`,
  },
  {
    slug: 'online-banking-safety',
    title: 'Online Banking Safety',
    category: 'concept',
    tags: ['banking', 'safety', 'scams', 'passwords', 'money'],
    lastUpdated: '2026-04-05',
    seeAlso: ['password-security', 'scam-prevention', 'safety-checklist'],
    content: `## What Is Online Banking?

Online banking lets you check your account balance, pay bills, and transfer money from your computer or phone — without visiting a bank branch. Most banks offer a website and a free app.

## How to Stay Safe

**Use strong, unique passwords.** Never use the same password for your bank that you use for other websites. If a hacker gets your password from one site, they will try it on your bank. Use a password manager to keep track of different passwords.

**Watch out for phishing emails.** Scammers send emails that look exactly like your bank's official emails. They include fake links that lead to copycat websites designed to steal your login. Your real bank will **never** email you asking for your password, Social Security number, or PIN. If you get a suspicious email, do not click any links — call the number on the back of your bank card instead.

**Check your accounts regularly.** Log in at least once a week and review recent transactions. If you see a charge you do not recognize, report it to your bank immediately. Most banks have fraud protection and will reverse unauthorized charges.

**Enable account alerts.** Set up text or email notifications for every transaction. This way, you will know right away if someone makes a purchase with your account.

## Red Flags to Watch For

- Emails or calls asking for your PIN, password, or Social Security number
- Texts saying your account is "locked" with a link to "verify" your identity
- Someone claiming to be from your bank asking you to transfer money to a "safe" account
- Requests to pay via gift cards, wire transfer, or cryptocurrency — banks never ask for this

## What to Do If You Suspect Fraud

1. Call your bank immediately using the number on your card (not a number from an email or text)
2. Change your online banking password
3. Review your recent transactions and flag anything suspicious
4. Report the fraud to the FTC at ReportFraud.ftc.gov
5. Call the AARP Fraud Watch Network Helpline at 877-908-3360 for guidance

(Sources: AARP.org, FTC.gov, 2026)`,
  },
  {
    slug: 'smartphone-basics',
    title: 'Smartphone Basics for Beginners',
    category: 'concept',
    tags: ['smartphone', 'phone', 'iphone', 'android', 'beginner'],
    lastUpdated: '2026-04-05',
    seeAlso: ['device-basics', 'downloading-apps', 'accessibility', 'telehealth'],
    content: `## Choosing a Smartphone

There are two main types of smartphones:

- **iPhone** (made by Apple) — Uses the iOS operating system. Known for being easy to use and having strong privacy features.
- **Android** (made by Samsung, Google, Motorola, and others) — Offers more variety in price and screen sizes. Very customizable.

**Quick Tip:** Choose the same type of phone that your family and close friends use. They can help you learn faster, and features like FaceTime (iPhone) or Google Duo (Android) work best between the same types.

## Making Your Phone Easier to Use

**Increase text size:** Go to Settings > Display > Font Size. Drag the slider to make text larger across all apps.

**Turn on Bold Text:** This makes everything on screen easier to read. Find it in Settings > Display (iPhone) or Settings > Accessibility > Visibility (Android).

**Use Easy Mode (Android):** Samsung phones have "Easy Mode" in Settings that makes icons larger and simplifies the home screen. Other Android brands have similar features — look for "Simple Mode" in Settings.

**Reduce clutter:** Remove apps you do not use by holding the app icon and selecting "Uninstall" or "Remove." Fewer apps means less confusion.

## Essential Things to Learn First

1. **Making and receiving calls** — Tap the phone icon, type a number or pick a contact, and tap the green button
2. **Sending text messages** — Tap the messaging app, pick a contact, type your message, and press send
3. **Taking photos** — Open the camera app and tap the round button to take a picture
4. **Connecting to WiFi** — Go to Settings > WiFi, pick your network, and enter the password
5. **Downloading apps** — Open the App Store (iPhone) or Google Play Store (Android), search for what you want, and tap Install

## Keeping Your Phone Safe

- Always lock your phone with a PIN, fingerprint, or face recognition
- Keep your phone software updated — updates fix security problems
- Only download apps from the official App Store or Google Play Store
- Do not tap on links in text messages from people you do not know
- Back up your photos and contacts to iCloud (iPhone) or Google (Android)

## Best Cell Phone Plans for Seniors

- **Lively** — Plans starting at $20/month, designed for seniors with safety features like Urgent Response
- **T-Mobile Essentials 55+** — Discounted plan for people 55 and older
- **Consumer Cellular** — AARP-recommended, no contracts, plans starting at $20/month
- **Mint Mobile** — Budget option starting at $15/month with prepaid plans

(Sources: Tom's Guide, How-To Geek, AARP, Apple Support, 2026)`,
  },
  {
    slug: 'digital-literacy',
    title: 'Digital Literacy for Everyday Life',
    category: 'synthesis',
    tags: ['digital-literacy', 'learning', 'skills', 'beginners'],
    lastUpdated: '2026-04-05',
    seeAlso: ['beginners-roadmap', 'device-basics', 'smartphone-basics', 'safety-checklist'],
    content: `## What Is Digital Literacy?

Digital literacy means knowing how to use technology to accomplish everyday tasks — checking email, browsing the web, making video calls, using apps, and staying safe online. It is not about becoming a tech expert. It is about gaining enough confidence to use technology on your own terms.

## Why It Matters

- **90% of Americans 50+** now own a smartphone (AARP 2026)
- Government services, healthcare appointments, and banking are increasingly online
- Staying connected with family through video calls and messaging requires basic digital skills
- Protecting yourself from scams requires understanding how they work

## The Five Core Skills

**1. Using a Device** — Turning on your computer or phone, navigating the screen, opening and closing apps. Start with [[device-basics]] and [[smartphone-basics]].

**2. Getting Online** — Connecting to WiFi, using a web browser, searching for information. See [[wifi-networking]].

**3. Communicating** — Sending emails, text messages, and making video calls. See [[email-essentials]] and [[video-calling]].

**4. Staying Safe** — Recognizing scams, creating strong passwords, and protecting personal information. See [[scam-prevention]] and [[password-security]].

**5. Solving Problems** — Knowing what to do when something goes wrong — restarting, updating, or asking for help. Check our Troubleshooting Flowcharts tool.

## How to Build Confidence

- **Start small** — Master one thing at a time. Do not try to learn everything at once.
- **Practice daily** — Even 5 minutes a day builds lasting skills. Try our Daily Lessons.
- **Write it down** — Keep a notebook of steps that work for you. You can refer to it later.
- **Ask for help** — There is no shame in asking. Family, librarians, and community centers all offer tech help.
- **Be patient with yourself** — Everyone learns at their own pace. Mistakes are part of learning.

## Free Learning Resources

- **TekSure** — 780+ free guides, tools, and lessons (you are here!)
- **Senior Planet** — Free in-person and online classes for older adults
- **GCFGlobal.org** — Free tutorials on computers, smartphones, and the internet
- **Your local library** — Many offer free one-on-one tech help sessions
- **AARP Tech Resources** — Articles and videos at aarp.org/technology

(Sources: AARP Tech Trends 2026, CISA Cybersecurity Awareness, Senior Planet)`,
  },
  {
    slug: 'moc-staying-safe',
    title: 'Map: Staying Safe Online',
    category: 'synthesis',
    tags: ['safety', 'scams', 'passwords', 'privacy', 'moc'],
    lastUpdated: '2026-04-05',
    seeAlso: ['scam-prevention', 'password-security', 'online-banking-safety', 'online-shopping-safety', 'safety-checklist'],
    content: `## Staying Safe Online — Topic Map

This page connects everything TekSure knows about online safety. Use it as your starting point — each link leads to a detailed article.

## The Essentials (Start Here)

- [[safety-checklist]] — The 10 things every person should do to stay safe online
- [[password-security]] — How to create, manage, and protect your passwords
- [[scam-prevention]] — How to spot and avoid the most common scams

## Protecting Your Money

- [[online-banking-safety]] — Safe banking habits, phishing red flags, fraud reporting
- [[online-shopping-safety]] — Buying safely on Amazon, eBay, and other sites

## Protecting Your Identity

- [[password-security]] — Strong passwords, password managers, and two-factor authentication
- [[scam-prevention]] — Phishing emails, phone scams, tech support scams, romance scams

## Protecting Your Devices

- [[wifi-networking]] — Securing your home WiFi network
- [[device-basics]] — Keeping your devices updated and protected

## Where to Get Help

- [[us-resources]] — FTC, AARP Fraud Watch, CISA, and other free resources
- AARP Fraud Watch Helpline: 877-908-3360
- Report fraud at ReportFraud.ftc.gov

## How These Topics Connect

Safety is not one skill — it is a network of habits that protect each other. Strong passwords protect your accounts. Recognizing scams protects your money. Updating your devices protects everything. Each topic reinforces the others.

(This is a Map of Content — a hub page that connects related articles in our knowledge base)`,
  },
  {
    slug: 'moc-getting-started',
    title: 'Map: Getting Started with Technology',
    category: 'synthesis',
    tags: ['beginner', 'getting-started', 'learning', 'moc'],
    lastUpdated: '2026-04-05',
    seeAlso: ['beginners-roadmap', 'device-basics', 'smartphone-basics', 'digital-literacy', 'wifi-networking'],
    content: `## Getting Started — Topic Map

New to technology? This page maps out everything you need to learn, in the right order. Follow the path from top to bottom.

## Step 1: Understand Your Device

- [[device-basics]] — Computers, phones, and tablets: what they are and how they work
- [[smartphone-basics]] — iPhone vs Android, making your phone easier to use

## Step 2: Get Connected

- [[wifi-networking]] — What WiFi is, how to connect, and how to fix common problems
- [[email-essentials]] — Setting up email, sending messages, staying safe in your inbox

## Step 3: Learn Core Skills

- [[copy-and-paste]] — One of the most useful skills on any device
- [[taking-screenshots]] — Capturing what you see on screen
- [[downloading-apps]] — How to safely get new apps on your phone
- [[sending-text-messages]] — Communicating by text

## Step 4: Stay Connected

- [[video-calling]] — Zoom, FaceTime, Google Meet: talking face-to-face over the internet
- [[using-voice-assistants]] — Siri, Google Assistant: using your voice to control your device
- [[social-media-safety]] — Using Facebook, Instagram, and others safely

## Step 5: Stay Safe

- [[safety-checklist]] — Essential security steps everyone should complete
- [[password-security]] — Protecting your accounts with strong passwords
- [[scam-prevention]] — Recognizing and avoiding online scams

## Step 6: Keep Learning

- [[digital-literacy]] — Building confidence with technology over time
- [[beginners-roadmap]] — Your complete learning path on TekSure

## How This Map Works

Each topic builds on the ones before it. You do not need to learn everything at once — pick one topic, master it, then move to the next. Come back to this page anytime to see what to learn next.

(This is a Map of Content — a hub page that connects related articles in our knowledge base)`,
  },
  {
    slug: 'moc-communication',
    title: 'Map: Communicating with Technology',
    category: 'synthesis',
    tags: ['communication', 'email', 'video', 'messaging', 'moc'],
    lastUpdated: '2026-04-05',
    seeAlso: ['email-essentials', 'video-calling', 'sending-text-messages', 'using-voice-assistants', 'social-media-safety'],
    content: `## Communication — Topic Map

Technology gives you many ways to stay in touch with family, friends, doctors, and businesses. This page maps them all.

## Text-Based Communication

- [[sending-text-messages]] — SMS and iMessage on your phone
- [[email-essentials]] — Gmail, Outlook, and other email services

## Face-to-Face Over the Internet

- [[video-calling]] — Zoom, FaceTime, Google Meet, Microsoft Teams
- How video calls work: your camera sends a live picture over the internet to the other person's screen

## Voice and Hands-Free

- [[using-voice-assistants]] — Siri (iPhone), Google Assistant (Android), Alexa (Amazon)
- Voice assistants can make calls, send texts, set reminders, and answer questions — all without touching the screen

## Social Media

- [[social-media-safety]] — Using Facebook, Instagram, and others while protecting your privacy
- [[using-facebook]] — Setting up and using the world's largest social network

## Staying Safe While Communicating

- Never share passwords, Social Security numbers, or bank info over email, text, or social media
- Be cautious of messages from people you do not know
- Video calls from unknown contacts may be scams — only answer calls you expect
- See [[scam-prevention]] for more safety tips

## Choosing the Right Tool

| Need | Best Tool |
|------|-----------|
| Quick message to family | Text message |
| Longer message or attachment | Email |
| Seeing someone face-to-face | Video call (Zoom, FaceTime) |
| Hands-free while busy | Voice assistant |
| Sharing photos with many people | Social media |

(This is a Map of Content — a hub page that connects related articles in our knowledge base)`,
  },
  {
    slug: 'apple',
    title: 'Apple Ecosystem',
    category: 'entity',
    tags: ['apple', 'iphone', 'ipad', 'mac', 'icloud', 'facetime'],
    lastUpdated: '2026-04-05',
    seeAlso: ['android', 'smartphone-basics', 'device-basics'],
    content: `## What Is Apple?

Apple makes the iPhone, iPad, and Mac computers. All Apple devices work together through your **Apple Account** (formerly Apple ID), which connects your email, photos, purchases, and settings across every device.

## Key Devices

- **iPhone** — Apple's smartphone for calls, texts, photos, apps, and browsing
- **iPad** — A tablet with a larger screen, great for reading and video calls
- **Mac** — Apple's desktop and laptop computers, running macOS

## Important Features

- **iCloud** — Cloud storage that backs up photos, contacts, and files automatically (5 GB free)
- **FaceTime** — Free video and audio calls to other Apple users
- **App Store** — Where you download apps (blue icon with white "A")
- **iMessage** — Apple's texting (blue bubbles between Apple devices)
- **Siri** — Voice assistant: say "Hey Siri" to ask questions or set reminders

## Common Tasks

- **Update your device:** Settings > General > Software Update
- **Take a screenshot:** Press Side button + Volume Up at the same time
- **Find a lost device:** Use the Find My app or visit icloud.com/find

## Official Support

- Apple Support: support.apple.com
- Apple Support app (free on the App Store)
- Call Apple: 1-800-275-2273

(Sources: Apple Support, 2026)`,
  },
  {
    slug: 'android',
    title: 'Android Phones and Tablets',
    category: 'entity',
    tags: ['android', 'google', 'samsung', 'pixel', 'smartphone'],
    lastUpdated: '2026-04-05',
    seeAlso: ['apple', 'google', 'smartphone-basics', 'device-basics'],
    content: `## What Is Android?

Android is the operating system made by Google that runs on phones from **Samsung**, **Google Pixel**, **Motorola**, and others. Your Android device is tied to your **Google account**, which connects your email, apps, photos, and settings.

## Popular Android Brands

- **Samsung Galaxy** — Most popular Android phones and tablets worldwide
- **Google Pixel** — Made by Google with fast updates and a great camera
- **Motorola** — Known for affordable, reliable phones

## Key Features

- **Google Play Store** — Where you download apps (colorful triangle icon)
- **Google Assistant** — Say "Hey Google" to ask questions or send texts
- **Google Photos** — Backs up photos and videos automatically
- **Settings** — Swipe down from the top, then tap the gear icon

## Common Tasks

- **Update your phone:** Settings > System > Software Update
- **Take a screenshot:** Press Power + Volume Down at the same time
- **Uninstall an app:** Long-press the icon, then tap "Uninstall"
- **Connect to WiFi:** Settings > Network & Internet > WiFi

## Official Support

- Google Pixel: support.google.com/pixelphone
- Samsung: samsung.com/us/support
- Google Play: support.google.com/googleplay

(Sources: Google Support, Samsung Support, 2026)`,
  },
  {
    slug: 'windows',
    title: 'Windows 10 and 11',
    category: 'entity',
    tags: ['windows', 'microsoft', 'pc', 'desktop', 'laptop'],
    lastUpdated: '2026-04-05',
    seeAlso: ['microsoft', 'device-basics', 'moc-getting-started'],
    content: `## What Is Windows?

Windows is the operating system made by **Microsoft** for desktop and laptop computers. The two versions you will see today are **Windows 10** and **Windows 11**. They work the same way — Windows 11 has a more modern look with the Start menu centered at the bottom.

## Key Parts of Windows

- **Start Menu** — Click the Windows icon to find apps, settings, and power options
- **File Explorer** — Yellow folder icon for browsing documents, pictures, and downloads
- **Settings** — Click Start, then the gear icon to change WiFi, display, sound, and accounts
- **Taskbar** — The bar along the bottom with pinned apps and the clock

## Common Tasks

- **Install updates:** Settings > Windows Update > Check for Updates
- **Take a screenshot:** Windows key + Shift + S to select an area
- **Open Task Manager:** Ctrl + Shift + Esc to see and close running programs
- **Restart:** Start > Power > Restart (fixes many common issues)

## Common Problems and Fixes

- **Running slow:** Restart, check for updates, close unused programs
- **WiFi not connecting:** Click WiFi icon, toggle off and on, reconnect
- **Program not responding:** Open Task Manager, select it, click "End Task"

## Official Support

- Microsoft Support: support.microsoft.com
- Call Microsoft: 1-800-642-7676

(Sources: Microsoft Support, 2026)`,
  },
  {
    slug: 'google',
    title: 'Google Services',
    category: 'entity',
    tags: ['google', 'gmail', 'google-drive', 'google-meet', 'chrome'],
    lastUpdated: '2026-04-05',
    seeAlso: ['android', 'microsoft', 'email-essentials', 'video-calling'],
    content: `## What Is Google?

Google offers free tools that all connect through **one Google account**. When you sign up for Gmail, you automatically get Drive, Calendar, Maps, and more. Your Google account is your email address (usually @gmail.com) and one password.

## Core Services

- **Gmail** — Free email at gmail.com or the Gmail app
- **Google Drive** — 15 GB free cloud storage for documents, photos, and files
- **Google Docs, Sheets, Slides** — Free alternatives to Word, Excel, and PowerPoint
- **Google Calendar** — Appointments and reminders that notify your phone
- **Google Maps** — Directions, nearby stores, and street views
- **Google Meet** — Free video calls from Gmail or meet.google.com
- **Chrome** — Web browser that syncs bookmarks and passwords across devices
- **Google Photos** — Photo storage and organization (counts toward 15 GB)

## How They Connect

Sign in once and everything shares the same account. A Calendar event can include a Meet link. A Drive file can be attached in Gmail. One connected account ties it all together.

## Official Support

- Google Account help: support.google.com/accounts
- Gmail help: support.google.com/mail

(Sources: Google Support, 2026)`,
  },
  {
    slug: 'microsoft',
    title: 'Microsoft Services',
    category: 'entity',
    tags: ['microsoft', 'outlook', 'onedrive', 'teams', 'office'],
    lastUpdated: '2026-04-05',
    seeAlso: ['windows', 'google', 'email-essentials'],
    content: `## What Is Microsoft?

Microsoft makes Windows, but it also offers online services through your **Microsoft account**. If you have an @outlook.com, @hotmail.com, or @live.com email, you already have a Microsoft account.

## Core Services

- **Outlook** — Email, calendar, and contacts at outlook.com or the Outlook app
- **OneDrive** — 5 GB free cloud storage, built into Windows
- **Microsoft 365** — Word, Excel, PowerPoint (free online version at microsoft365.com)
- **Microsoft Teams** — Video calls, chat, and file sharing
- **Microsoft Edge** — The web browser that comes with Windows

## How They Connect

One Microsoft account ties everything together. OneDrive files appear in File Explorer. Outlook events can include Teams meeting links. Word documents save directly to OneDrive.

## Free vs. Paid

Outlook email, OneDrive (5 GB), and online Word/Excel/PowerPoint are free. **Microsoft 365** (~$7/month) gives full desktop apps, 1 TB storage, and advanced features.

## Official Support

- Microsoft Support: support.microsoft.com
- Call Microsoft: 1-800-642-7676

(Sources: Microsoft Support, 2026)`,
  },
  {
    slug: 'privacy-settings',
    title: 'Privacy Settings',
    category: 'concept',
    tags: ['privacy', 'tracking', 'permissions', 'location', 'ads'],
    lastUpdated: '2026-04-05',
    seeAlso: ['apple', 'android', 'windows', 'device-basics', 'moc-staying-safe', 'smart-home-basics'],
    content: `## Why Privacy Settings Matter

Many apps and websites collect information about you — what you search for, where you go, what you buy. Most of this is used to show you ads, but it can also be shared or sold. Adjusting your privacy settings gives you more control.

## What Apps Track

- **Location:** Where you are and where you have been
- **Browsing history:** What websites you visit
- **Contacts and photos:** Some apps ask for access they do not need
- **Microphone and camera:** Some apps request access unnecessarily
- **Ad tracking:** Companies follow your activity to show targeted ads

## Privacy on iPhone/iPad

1. Settings > Privacy & Security
2. Review each category (Location, Contacts, Photos, Microphone, Camera)
3. Turn off access for apps that do not need it
4. Limit ad tracking: Settings > Privacy & Security > Tracking > turn off "Allow Apps to Request to Track"

## Privacy on Android

1. Settings > Privacy > Permission Manager
2. Review which apps access location, camera, microphone
3. Remove access for apps that do not need it
4. Limit ad tracking: Settings > Privacy > Ads > Delete advertising ID

## Privacy on Windows

1. Start > Settings > Privacy & Security
2. Turn off "Let apps show me personalized ads"
3. Review App Permissions for camera, microphone, and location

## A Good Rule of Thumb

Ask yourself: "Does this app need this access to do its job?" A weather app needs your location. A flashlight app does not need your contacts. If it does not make sense, deny the request.

(Sources: Apple Support, Google Support, Microsoft Support, 2026)`,
  },
  {
    slug: 'printing-basics',
    title: 'Printing Basics',
    category: 'concept',
    tags: ['printing', 'printer', 'wireless', 'setup', 'troubleshooting'],
    lastUpdated: '2026-04-05',
    seeAlso: ['device-basics', 'wifi-networking', 'smartphone-basics'],
    content: `## What Does a Printer Do?

A printer takes what you see on your screen — documents, photos, emails, or web pages — and puts it on paper. Most modern printers can also scan paper documents and make copies.

## Types of Printers

**USB printers** connect to your computer with a cable. They work well but can only print from the device they are plugged into.

**Wireless (Wi-Fi) printers** connect to your home Wi-Fi network. Once set up, you can print from any device in your home — your computer, phone, or tablet — without any cables.

**AirPrint** is a feature built into iPhones and iPads that lets you print to a compatible wireless printer without installing extra software. Most newer printers support AirPrint. Android phones have a similar feature called Google Cloud Print or the built-in print service.

## How to Find Your Printer Model

Look for a label on the front or back of the printer. It will say something like "HP DeskJet 2755e" or "Canon PIXMA MG3620." You need this when looking for help or ordering ink.

## Common Printer Problems

- **Printer says "Offline":** Turn the printer off and back on. Make sure it is connected to the same Wi-Fi network as your device.
- **Paper jam:** Open the printer carefully and gently pull out any stuck paper. Check for small torn pieces left inside.
- **Faded or streaky prints:** Your ink or toner may be running low. Check your ink levels in the printer settings on your computer.
- **Nothing happens when you print:** Make sure the correct printer is selected. Sometimes your device tries to send to the wrong printer.

## When to Replace Ink

Most printers will show a warning when ink is low. You can also check ink levels in your printer software. Look for your printer model number, then search for the correct ink cartridge at a store or online.

## Quick Tip

Keep your printer plugged in and turned on, even when you are not using it. Many wireless printers need to stay on to receive print jobs and install updates.

(Sources: HP Support, Canon Support, Apple Support, 2026)`,
  },
  {
    slug: 'streaming-entertainment',
    title: 'Streaming Entertainment',
    category: 'concept',
    tags: ['streaming', 'netflix', 'hulu', 'roku', 'smart-tv', 'entertainment'],
    lastUpdated: '2026-04-05',
    seeAlso: ['streaming-setup', 'wifi-networking', 'smart-home-basics'],
    content: `## What Is Streaming?

Streaming means watching TV shows, movies, or listening to music over the internet — without downloading files or using DVDs. Think of it like a water faucet: the content flows to your screen as long as you have an internet connection.

## Free vs. Paid Streaming Services

**Paid services** charge a monthly fee:
- **Netflix** ($7–$23/month) — Large library of shows, movies, and documentaries.
- **Hulu** ($8–$18/month) — Current TV shows from major networks, plus movies.
- **Disney+** ($8–$14/month) — Disney, Pixar, Marvel, and Star Wars content.

**Free services** show ads but cost nothing:
- **Tubi** — Free movies and TV shows with ads.
- **Pluto TV** — Free live TV channels and on-demand content.
- **YouTube** — Free videos on every topic imaginable.

Most services offer a free trial so you can try before paying.

## Streaming Devices

If your TV is not a "smart TV," you can add streaming with a small device that plugs into your TV:
- **Roku** — Popular and affordable, with a straightforward remote.
- **Amazon Fire TV Stick** — Works well if you use Amazon services.
- **Apple TV** — Good choice if you use an iPhone or iPad.
- **Chromecast** — Lets you send video from your phone to your TV.

## What You Need to Stream

1. **An internet connection** — Wi-Fi or a wired ethernet cable to your TV or device.
2. **A streaming device or smart TV** — Something to watch on.
3. **An account** — You will need to create a free or paid account for each service.

## Common Streaming Problems

- **Buffering (video keeps stopping):** Your internet may be too slow. Try moving closer to your router or restarting it.
- **Picture is blurry:** Lower video quality settings can help if your internet is slow.
- **"Content not available":** Some shows are only available in certain regions or have been removed.
- **Forgot your password:** Use the "Forgot Password" link on the sign-in screen.

## Quick Tip

You do not need to subscribe to every service at once. Start with one free option like Tubi to get comfortable, then add a paid service if you want more choices.

(Sources: Tom's Guide, How-To Geek, AARP Tech, 2026)`,
  },
  {
    slug: 'government-services-online',
    title: 'Government Services Online',
    category: 'concept',
    tags: ['government', 'social-security', 'medicare', 'taxes', 'veterans', 'benefits'],
    lastUpdated: '2026-04-05',
    seeAlso: ['safety-checklist', 'scam-prevention', 'online-banking-safety'],
    content: `## Why Use Government Websites?

Many government services that used to require a phone call or office visit can now be handled online. This saves time and lets you manage your benefits from home at any hour.

## Key Government Websites

**Social Security (ssa.gov)** — Create a "my Social Security" account to check your benefits, request a replacement Social Security card, get benefit verification letters, and manage your payments.

**Medicare (medicare.gov)** — Compare health plans, check what is covered, find doctors and hospitals, and view your claims and costs. Log in with your Medicare account.

**IRS (irs.gov)** — File your taxes for free using IRS Free File, check your refund status, make payments, and get copies of past tax returns. The "Where's My Refund?" tool is especially helpful.

**Veterans Affairs (va.gov)** — Apply for VA health care, check your claim status, request travel reimbursement, and refill prescriptions. You will need a Login.gov or ID.me account.

**Benefits.gov** — Not sure what benefits you qualify for? This site asks you a few questions and shows government programs you may be eligible for — including food assistance, housing, and health programs.

**Voter Registration (vote.gov)** — Register to vote, check your registration status, and find your polling place. Available in multiple languages.

## Staying Safe on Government Websites

- **Check the web address:** Real government websites end in ".gov" — not ".com" or ".org."
- **Never click links in unexpected emails or texts** claiming to be from the government. Go to the website yourself by typing the address.
- **The government will not call you** to demand immediate payment or threaten arrest. That is a scam.
- **Use strong passwords** and turn on two-factor authentication when available.
- **Look for the lock icon** in your browser's address bar before entering personal information.

## Quick Tip

Bookmark the government websites you use most so you can find them quickly without searching. This also helps you avoid fake look-alike websites.

(Sources: USA.gov, FTC.gov, AARP, 2026)`,
  },
  {
    slug: 'tablets-guide',
    title: 'Tablets Guide',
    category: 'concept',
    tags: ['tablet', 'ipad', 'android-tablet', 'kindle', 'device'],
    lastUpdated: '2026-04-05',
    seeAlso: ['device-basics', 'smartphone-basics', 'apple', 'android'],
    content: `## What Is a Tablet?

A tablet is a portable device with a touchscreen that is bigger than a phone but smaller and lighter than a laptop. You tap, swipe, and type on the screen to use it. Tablets are great for reading, video calls, watching shows, browsing the web, and playing games.

## Types of Tablets

**iPad (Apple)** — The most popular tablet. Works well with iPhones and other Apple devices. Uses the App Store for downloading apps. Comes in several sizes, from the compact iPad Mini to the large iPad Pro.

**Android tablets (Samsung, Lenovo, and others)** — Run the Android operating system and use the Google Play Store. Available at many price points, from budget-friendly to premium.

**Amazon Kindle / Fire tablets** — The Kindle is designed mainly for reading books. Fire tablets are affordable general-purpose tablets with access to Amazon's app store. Good budget option.

## When to Use a Tablet vs. Phone vs. Computer

- **Tablet:** Reading, watching videos, casual web browsing, video calls (bigger screen than a phone), drawing, and recipes in the kitchen.
- **Phone:** On-the-go tasks, phone calls, quick messages, and anything where portability matters most.
- **Computer:** Typing long documents, detailed work, managing files, and tasks that need a keyboard and mouse.

## Setting Up Your Tablet

1. Charge the tablet fully before first use.
2. Turn it on and follow the on-screen setup steps.
3. Connect to your home Wi-Fi network.
4. Sign in with your Apple ID (iPad), Google Account (Android), or Amazon Account (Kindle/Fire).
5. Set a passcode or fingerprint lock to keep your tablet secure.

## Helpful Apps for Seniors

- **Video calling:** FaceTime (iPad), Google Meet, Zoom
- **Reading:** Kindle, Apple Books, Libby (free library books)
- **News:** Apple News, Google News, your local newspaper app
- **Health:** MyChart (patient portal), medication reminders
- **Entertainment:** YouTube, Netflix, Tubi (free)

## Accessibility Features

Tablets have built-in tools that can help with vision, hearing, and motor challenges. Look in Settings under "Accessibility" for options like larger text, screen magnification, voice control, and hearing aid support.

## Quick Tip

If the on-screen keyboard feels too small, consider buying a Bluetooth keyboard that connects wirelessly to your tablet. This makes typing much more comfortable.

(Sources: Apple Support, Samsung Support, Amazon Help, AARP Tech, 2026)`,
  },
  {
    slug: 'bluetooth-connections',
    title: 'Bluetooth Connections',
    category: 'concept',
    tags: ['bluetooth', 'wireless', 'headphones', 'hearing-aids', 'pairing'],
    lastUpdated: '2026-04-05',
    seeAlso: ['device-basics', 'smartphone-basics', 'wifi-networking'],
    content: `## What Is Bluetooth?

Bluetooth is a way to connect devices wirelessly over a short distance — usually within about 30 feet. Unlike Wi-Fi, which connects devices to the internet, Bluetooth connects devices directly to each other. It uses very little power, so it will not drain your battery quickly.

## Common Bluetooth Devices

- **Wireless headphones and earbuds** — Listen to music, podcasts, or phone calls without a cord.
- **Bluetooth speakers** — Play music from your phone or tablet through a bigger speaker.
- **Hearing aids** — Many modern hearing aids connect to your phone via Bluetooth, letting you stream phone calls and audio.
- **Car audio systems** — Play music or take hands-free phone calls through your car speakers.
- **Wireless keyboards and mice** — Connect to tablets or computers without cables.

## How Pairing Works

"Pairing" is the process of connecting two Bluetooth devices for the first time. Here is how it works:

1. **Turn on Bluetooth** on your phone or tablet (found in Settings).
2. **Put the other device in pairing mode.** This is different for each device — usually you hold down a button until a light blinks. Check the device manual if you are unsure.
3. **Find the device** in your phone's Bluetooth settings. It should appear in a list of nearby devices.
4. **Tap the device name** to connect. You may need to confirm a code or tap "Pair."
5. **Done!** Once paired, the devices should reconnect automatically in the future.

## Bluetooth vs. Wi-Fi

| Feature | Bluetooth | Wi-Fi |
|---------|-----------|-------|
| Range | About 30 feet | About 150 feet |
| Purpose | Connect devices to each other | Connect devices to the internet |
| Power use | Very low | Moderate |

## Troubleshooting Bluetooth Problems

- **Device will not connect:** Turn Bluetooth off and back on, on both devices.
- **Still will not work:** "Forget" the device in your Bluetooth settings, then pair it again from scratch.
- **Audio is choppy:** Move the devices closer together. Walls and other electronics can interfere.
- **Connected but no sound:** Check that the audio output is set to the Bluetooth device, not the phone speaker.

## Quick Tip

You can have multiple devices paired to your phone, but usually only one audio device plays sound at a time. If your headphones are not working, check that another Bluetooth device is not connected first.

(Sources: Apple Support, Google Support, How-To Geek, 2026)`,
  },
  {
    slug: 'medical-technology',
    title: 'Medical Technology for Seniors',
    category: 'concept',
    tags: ['health', 'medical', 'patient-portal', 'blood-pressure', 'medication', 'telehealth'],
    lastUpdated: '2026-04-05',
    seeAlso: ['telehealth', 'safety-checklist', 'smartphone-basics'],
    content: `## How Technology Can Help Manage Your Health

Technology offers several tools to help you stay on top of your health — from checking test results at home to having a doctor visit by video. You do not need to be a tech expert to use these tools.

## Patient Portals

A patient portal is a secure website or app where you can:
- View your test results and medical records
- Send messages to your doctor's office
- Request prescription refills
- Schedule and manage appointments
- Check billing and insurance information

**How to sign up:** Ask at your doctor's office or hospital. They will give you an access code or send an email invitation. Common portals include **MyChart**, **FollowMyHealth**, and **Patient Gateway**. You will create a username and password to log in.

## Blood Pressure Monitors with Apps

Home blood pressure monitors that connect to your phone via Bluetooth can track your readings over time. The app creates a log you can share with your doctor. Popular options include Omron and Withings monitors. Take readings at the same time each day for the most accurate tracking.

## Medication Reminder Apps

Missing a dose can be a real concern. Apps like **Medisafe**, **CareZone**, and the built-in **Apple Health** or **Google Health** apps can send you reminders when it is time to take your medication. You enter your medications and schedule, and the app alerts you.

## Telehealth Video Visits

Telehealth lets you see a doctor or specialist by video call from home. This is helpful for follow-up visits, prescription renewals, and non-emergency questions. You typically need:
- A phone, tablet, or computer with a camera
- A stable internet connection
- The provider's telehealth app or a link they send you

See our [[telehealth]] page for step-by-step instructions.

## Fitness Trackers for Seniors

Devices like the Apple Watch, Fitbit, and Garmin can track steps, heart rate, sleep, and even detect falls. Many can send alerts to family members if you need help. Start with a basic model and explore features as you get comfortable.

## Keeping Your Health Data Private

- Use a strong password on all health apps and portals.
- Turn on two-factor authentication when available.
- Only download health apps from the official App Store or Google Play Store.
- Do not share your portal login with anyone except a trusted caregiver.

## Quick Tip

Ask your doctor's office if they offer a patient portal tutorial. Many offices will walk you through the setup in person or over the phone.

(Sources: Medicare.gov, Apple Support, AARP Health, MyChart, 2026)`,
  },
];

/** Look up a wiki page by slug */
export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find(p => p.slug === slug);
}
