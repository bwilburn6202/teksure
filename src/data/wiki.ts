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
    title: `Beginner's Tech Roadmap`,
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
    slug: 'ride-sharing-explained',
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
    slug: 'online-shopping-safety-guide',
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

You do not need to have a disability to benefit from accessibility features. Many people use larger text, voice control, or captions because they find them more comfortable. Explore your phone's Accessibility settings — you might find something that makes your daily experience much better.

(Sources: Apple Support, Google Support, 2026)`,
  },
  {
    slug: 'social-media-safety-guide',
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
    slug: 'streaming-setup-guide',
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

  // ─── Internet & Networking ─────────────────────────────────────────

  {
    slug: 'ip-address',
    title: 'IP Address',
    category: 'concept',
    tags: ['internet', 'networking', 'ip', 'address', 'connection'],
    lastUpdated: '2026-04-16',
    seeAlso: ['dns', 'router', 'wifi-networking'],
    content: `## What Is an IP Address?

An IP address is a unique number assigned to every device connected to the internet. Think of it like a mailing address for your phone, computer, or tablet — it tells other devices where to send information so it reaches the right place.

Every time you visit a website, your device sends its IP address along with the request so the website knows where to send the page back to. Without IP addresses, data would have no way of knowing where to go.

## Public vs. Private IP Addresses

Your home network has two types of IP addresses. Your **public IP address** is what the outside internet sees — it is assigned by your internet provider and shared by every device in your home. Your **private IP address** is used inside your home network so your router can tell your phone apart from your laptop.

You can find your public IP address by searching "what is my IP address" in any search browser. Your private IP address can be found in your device's Wi-Fi or network settings.

## Why It Matters

IP addresses are how the internet routes information. They also play a role in security — websites can sometimes use your IP address to estimate your general location (city level, not your exact address). Using a VPN can mask your public IP address for added privacy.

(Sources: How-To Geek, Tom's Guide, 2026)`,
  },
  {
    slug: 'dns',
    title: 'DNS (Domain Name System)',
    category: 'concept',
    tags: ['internet', 'networking', 'dns', 'domain', 'web'],
    lastUpdated: '2026-04-16',
    seeAlso: ['ip-address', 'url', 'http-https'],
    content: `## What Is DNS?

DNS stands for Domain Name System. It works like a phone book for the internet. When you type a website name like "google.com" into your browser, DNS translates that name into a numerical IP address that computers use to find the website. Without DNS, you would need to memorize long strings of numbers to visit every website.

## How DNS Works

When you type a web address and press Enter, your device asks a DNS server, "What is the IP address for this website?" The DNS server looks it up and responds with the correct number. Your browser then uses that number to connect to the website. This entire process happens in milliseconds.

## Why DNS Matters to You

Most of the time, DNS works silently in the background. But if DNS has a problem, websites will not load even though your internet connection is working. If you can connect to the internet but websites will not open, DNS could be the issue.

You can try switching to a free, fast DNS service like Google Public DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1) in your device's network settings. This can sometimes speed up your browsing and improve reliability.

(Sources: Cloudflare Learning Center, How-To Geek, 2026)`,
  },
  {
    slug: 'url',
    title: 'URL (Web Address)',
    category: 'concept',
    tags: ['internet', 'web', 'url', 'browser', 'address'],
    lastUpdated: '2026-04-16',
    seeAlso: ['dns', 'http-https', 'email-essentials'],
    content: `## What Is a URL?

A URL (Uniform Resource Locator) is the address you type or click to visit a specific page on the internet. It appears in the address bar at the top of your browser. For example, "https://www.google.com/search" is a URL.

## Parts of a URL

A URL has several parts, each with a purpose:

- **https://** — The protocol. This tells your browser how to connect securely (the "s" stands for secure).
- **www.google.com** — The domain name. This is the website's name.
- **/search** — The path. This points to a specific page within the website.

## Why URLs Matter for Safety

Being able to read a URL helps you spot scams. Phishing websites often use URLs that look similar to real ones but have small changes — like "g00gle.com" instead of "google.com" or "paypa1.com" instead of "paypal.com."

Before clicking any link in an email or text message, hover over it (on a computer) or long-press it (on a phone) to preview where it actually leads. If the URL looks suspicious or unfamiliar, do not click it.

## Quick Tip

A legitimate URL for a well-known company will match the company's actual domain. When in doubt, type the website address directly into your browser instead of clicking a link.

(Sources: Google Safety Center, FTC.gov, 2026)`,
  },
  {
    slug: 'http-https',
    title: 'HTTP and HTTPS',
    category: 'concept',
    tags: ['internet', 'security', 'web', 'https', 'encryption'],
    lastUpdated: '2026-04-16',
    seeAlso: ['url', 'encryption', 'online-shopping-safety-guide'],
    content: `## What Are HTTP and HTTPS?

HTTP (HyperText Transfer Protocol) and HTTPS (HyperText Transfer Protocol Secure) are the systems your browser uses to communicate with websites. Think of HTTP as sending a postcard — anyone handling it along the way can read it. HTTPS is like sending a sealed letter — the contents are encrypted so only you and the website can read them.

## Why HTTPS Matters

When you see a padlock icon in your browser's address bar and the URL starts with "https://", it means the connection between your device and the website is encrypted. This is especially important when you are entering passwords, credit card numbers, or personal information.

If a website uses plain "http://" without the "s," your information travels without protection. Modern browsers will often warn you when a site is not secure.

## What to Look For

- **Padlock icon** in the address bar means the connection is encrypted.
- **"Not Secure" warning** means the site uses HTTP and your data is not protected.
- Always check for HTTPS before entering any sensitive information like passwords or payment details.

## Quick Tip

Most reputable websites now use HTTPS by default. If a shopping or banking website does not show the padlock, leave the site and find the company through a trusted search instead.

(Sources: Google Safety Center, How-To Geek, CISA.gov, 2026)`,
  },
  {
    slug: 'bandwidth',
    title: 'Bandwidth',
    category: 'concept',
    tags: ['internet', 'speed', 'bandwidth', 'networking', 'streaming'],
    lastUpdated: '2026-04-16',
    seeAlso: ['latency', 'isp', 'wifi-networking'],
    content: `## What Is Bandwidth?

Bandwidth is the maximum amount of data that can travel through your internet connection at one time. Think of it like a highway — the more lanes (bandwidth) you have, the more cars (data) can travel at once without slowing down.

Bandwidth is measured in megabits per second (Mbps). A higher number means your connection can handle more data at the same time.

## How Much Bandwidth Do You Need?

Different activities use different amounts of bandwidth:

- **Email and web browsing**: 5-10 Mbps is enough.
- **Streaming video (Netflix, YouTube)**: 25 Mbps for high-definition, 50+ Mbps for 4K.
- **Video calls (Zoom, FaceTime)**: 10-25 Mbps works well.
- **Multiple devices at once**: Add up the needs of each device. A household with several people streaming, gaming, and video calling may need 100-300 Mbps.

## Bandwidth vs. Speed

Bandwidth is the capacity of your connection, not necessarily the speed you experience. If five family members are all streaming video at the same time, they are sharing that bandwidth, and each person gets a smaller slice. This is why your internet can feel slower during peak usage times.

## Quick Tip

You can check your current internet speed for free at speedtest.net. If your speed is consistently much lower than what your internet provider promised, contact them — you may need a plan upgrade or there could be an equipment issue.

(Sources: Tom's Guide, How-To Geek, 2026)`,
  },
  {
    slug: 'latency',
    title: 'Latency',
    category: 'concept',
    tags: ['internet', 'speed', 'latency', 'ping', 'networking'],
    lastUpdated: '2026-04-16',
    seeAlso: ['bandwidth', 'wifi-networking', 'isp'],
    content: `## What Is Latency?

Latency is the delay between when you take an action online and when you see a response. If you click a link and there is a noticeable pause before the page starts loading, that pause is latency. It is measured in milliseconds (ms).

Think of bandwidth as how wide the highway is, and latency as how long it takes a car to drive from one end to the other. You can have a wide highway (high bandwidth) but still experience delays if the distance is long or there are traffic jams along the way.

## What Causes High Latency?

Several factors contribute to latency:

- **Physical distance**: Data traveling to a server across the country takes longer than data going to a nearby server.
- **Network congestion**: Too many people using the same connection at once.
- **Old equipment**: An outdated router or modem can introduce delays.
- **Wi-Fi vs. wired**: A direct Ethernet cable connection typically has lower latency than Wi-Fi.

## Why It Matters

For most everyday tasks like reading email or browsing the web, you will not notice latency. But for video calls, online gaming, or real-time applications, high latency causes lag — choppy video, delayed audio, or unresponsive controls.

## Quick Tip

If video calls keep freezing, latency may be the culprit. Try connecting your computer directly to the router with an Ethernet cable, or move closer to the router to improve your Wi-Fi signal.

(Sources: How-To Geek, Cloudflare Learning Center, 2026)`,
  },
  {
    slug: 'isp',
    title: 'ISP (Internet Service Provider)',
    category: 'concept',
    tags: ['internet', 'isp', 'provider', 'connection', 'service'],
    lastUpdated: '2026-04-16',
    seeAlso: ['bandwidth', 'modem', 'router'],
    content: `## What Is an ISP?

An ISP, or Internet Service Provider, is the company that provides your home or business with access to the internet. Common ISPs in the United States include Comcast (Xfinity), AT&T, Spectrum, Verizon (Fios), and T-Mobile Home Internet.

Your ISP is the bridge between your home network and the rest of the internet. Without an ISP, your router and modem have nothing to connect to.

## Types of Internet Connections

ISPs deliver internet using different technologies:

- **Cable**: Uses the same wires as cable TV. Widely available and offers good speeds.
- **Fiber optic**: Uses light signals through glass cables. Fastest and most reliable, but not available everywhere.
- **DSL**: Uses phone lines. Slower than cable or fiber, but still functional for basic use.
- **Satellite**: Available almost anywhere, but higher latency and slower speeds. Starlink is improving this category.
- **Fixed wireless / 5G Home**: Uses cellular towers. Growing in availability.

## Choosing an ISP

When picking an ISP, consider:

- **Speed**: Make sure the plan supports your household's needs (streaming, video calls, multiple devices).
- **Data caps**: Some ISPs limit how much data you can use per month. Going over can result in extra charges or throttled speeds.
- **Price**: Introductory rates often go up after 12 months. Read the fine print.
- **Reliability**: Check reviews from people in your area.

(Sources: CNET, Tom's Guide, FCC Broadband Map, 2026)`,
  },
  {
    slug: 'modem',
    title: 'Modem',
    category: 'concept',
    tags: ['internet', 'hardware', 'modem', 'networking', 'connection'],
    lastUpdated: '2026-04-16',
    seeAlso: ['router', 'isp', 'wifi-networking'],
    content: `## What Is a Modem?

A modem is a device that connects your home to your Internet Service Provider (ISP). It translates the signal coming from your ISP — whether through a cable line, phone line, or fiber optic cable — into a format your home devices can use.

Think of the modem as a translator between your ISP's language and your home network's language. Without it, your devices would not be able to communicate with the internet.

## Modem vs. Router

People often confuse modems and routers, but they do different things:

- **Modem**: Connects your home to the internet (talks to your ISP).
- **Router**: Takes the internet connection from the modem and shares it with all the devices in your home, usually over Wi-Fi.

Many ISPs provide a combined modem-router unit (sometimes called a gateway), which handles both jobs in one box.

## Do You Need Your Own Modem?

Most ISPs rent you a modem for a monthly fee (typically $10-15 per month). Buying your own compatible modem can save you money over time. Check your ISP's website for a list of approved modem models before purchasing one.

## Quick Tip

If your internet goes down, try restarting your modem first. Unplug it from power, wait 30 seconds, then plug it back in. Wait a couple of minutes for it to fully reconnect. This fixes many common connection problems.

(Sources: How-To Geek, CNET, Tom's Guide, 2026)`,
  },
  {
    slug: 'router',
    title: 'Router',
    category: 'concept',
    tags: ['internet', 'hardware', 'router', 'wifi', 'networking'],
    lastUpdated: '2026-04-16',
    seeAlso: ['modem', 'wifi-networking', 'ethernet'],
    content: `## What Is a Router?

A router is a device that takes the internet connection from your modem and shares it with all the devices in your home. It acts like a traffic cop directing internet data to the right device — sending a YouTube video to your TV, an email to your phone, and a web page to your laptop, all at the same time.

Most routers also create your Wi-Fi network, which allows devices to connect wirelessly.

## Wired vs. Wireless Routers

Nearly all modern routers are wireless, meaning they broadcast a Wi-Fi signal. However, most also have ports on the back where you can plug in Ethernet cables for a faster, more stable connection to specific devices like desktop computers or gaming consoles.

## Mesh Routers

If your home is large or has thick walls that block Wi-Fi signal, a **mesh router system** uses multiple units placed around your house to create one continuous Wi-Fi network with no dead zones. Popular mesh systems include Google Nest WiFi, Eero, and TP-Link Deco.

## Keeping Your Router Secure

- Change the default Wi-Fi password printed on the router's sticker.
- Change the default administrator login (this is different from your Wi-Fi password).
- Keep your router's firmware updated — most modern routers do this automatically.
- Place your router in an open, central location for the best coverage.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'ethernet',
    title: 'Ethernet',
    category: 'concept',
    tags: ['internet', 'networking', 'ethernet', 'cable', 'wired'],
    lastUpdated: '2026-04-16',
    seeAlso: ['router', 'wifi-networking', 'latency'],
    content: `## What Is Ethernet?

Ethernet is a way to connect your device to the internet using a physical cable instead of Wi-Fi. An Ethernet cable plugs directly into your router on one end and into your computer, gaming console, or smart TV on the other end.

Think of Wi-Fi as talking across a room — it works, but there is background noise and the signal can weaken. Ethernet is like having a private phone line — the connection is direct, stable, and interference-free.

## Why Use Ethernet Over Wi-Fi?

Ethernet offers several advantages:

- **Faster speeds**: A wired connection delivers the full speed your internet plan provides.
- **Lower latency**: Ideal for video calls, gaming, and real-time applications.
- **More reliable**: No signal drops caused by walls, distance, or interference from other devices.
- **More secure**: It is much harder for someone to intercept data on a physical cable than on a wireless signal.

## When to Use Ethernet

You do not need to wire every device. Ethernet is most useful for:

- Desktop computers that stay in one place.
- Smart TVs or streaming boxes for uninterrupted 4K video.
- Home office setups where reliable video calls are important.
- Gaming consoles where lag matters.

## Quick Tip

Ethernet cables come in different categories (Cat 5e, Cat 6, Cat 6a). For home use, a Cat 6 cable is the sweet spot — it supports fast speeds and is affordable. You can find them at any electronics store or online for a few dollars.

(Sources: How-To Geek, Tom's Guide, CNET, 2026)`,
  },

  // ─── Security ──────────────────────────────────────────────────────

  {
    slug: 'malware',
    title: 'Malware',
    category: 'concept',
    tags: ['security', 'malware', 'virus', 'threats', 'protection'],
    lastUpdated: '2026-04-16',
    seeAlso: ['ransomware', 'phishing', 'firewall'],
    content: `## What Is Malware?

Malware is short for "malicious software." It is any program or file designed to harm your device, steal your information, or take control of your system without your permission. Malware is the umbrella term that covers viruses, spyware, ransomware, trojans, and other digital threats.

## How Malware Gets on Your Device

Malware can sneak onto your device through:

- **Email attachments**: Opening a file from an unknown sender.
- **Suspicious downloads**: Downloading software from unofficial websites.
- **Infected websites**: Visiting compromised web pages.
- **USB drives**: Plugging in a flash drive that contains malware.
- **Fake ads or pop-ups**: Clicking on deceptive advertisements.

## Signs Your Device May Be Infected

- Your device is running much slower than usual.
- You see pop-up ads or unfamiliar programs you did not install.
- Your browser homepage or search engine changed without your permission.
- Files are missing or have been modified.
- Your device crashes or freezes frequently.

## How to Protect Yourself

- Keep your operating system and apps updated — updates often patch security holes.
- Install reputable antivirus software (Windows Defender is built into Windows and works well).
- Do not download software from websites you do not trust.
- Be cautious with email attachments, even from people you know.
- Back up your important files regularly.

(Sources: CISA.gov, How-To Geek, Microsoft Support, 2026)`,
  },
  {
    slug: 'ransomware',
    title: 'Ransomware',
    category: 'concept',
    tags: ['security', 'ransomware', 'malware', 'threats', 'data'],
    lastUpdated: '2026-04-16',
    seeAlso: ['malware', 'data-breach', 'encryption'],
    content: `## What Is Ransomware?

Ransomware is a specific type of malware that locks you out of your own files or device and demands a payment (ransom) to give you access back. It encrypts your photos, documents, and other files so you cannot open them, then displays a message demanding money — usually in cryptocurrency — in exchange for unlocking them.

Think of it like someone changing the locks on your house and slipping a note under the door saying, "Pay me $500 and I will give you the new key."

## How Ransomware Spreads

Ransomware typically arrives through:

- **Phishing emails**: A message that tricks you into clicking a malicious link or opening an infected attachment.
- **Fake software updates**: Pop-ups claiming you need to update your system that actually install ransomware.
- **Compromised websites**: Visiting a site that has been infected.

## What to Do If You Get Ransomware

- **Do not pay the ransom.** There is no guarantee you will get your files back, and paying encourages more attacks.
- Disconnect from the internet immediately to prevent the ransomware from spreading.
- Contact a trusted tech professional for help.
- Report the attack to the FBI's Internet Crime Complaint Center (IC3.gov).
- Restore your files from a backup if you have one.

## How to Protect Yourself

The best defense is having regular backups of your important files stored on an external hard drive or in the cloud. If ransomware hits, you can wipe your device and restore from the backup.

(Sources: CISA.gov, FBI IC3, FTC.gov, 2026)`,
  },
  {
    slug: 'two-factor-authentication',
    title: 'Two-Factor Authentication (2FA)',
    category: 'concept',
    tags: ['security', '2fa', 'authentication', 'login', 'accounts'],
    lastUpdated: '2026-04-16',
    seeAlso: ['password-security', 'phishing', 'encryption'],
    content: `## What Is Two-Factor Authentication?

Two-factor authentication (often called 2FA) adds a second step when you log into an account. Instead of relying on your password alone, 2FA requires you to verify your identity with something else — like a code sent to your phone or generated by an app.

Think of it like a bank vault that needs two keys to open. Even if someone steals one key (your password), they still cannot get in without the second key (the verification code).

## Types of 2FA

- **Text message (SMS) code**: A six-digit code sent to your phone via text. This is the most common type, but it is also the least secure because phone numbers can be hijacked.
- **Authenticator app**: Apps like Google Authenticator, Microsoft Authenticator, or Authy generate a new code every 30 seconds. More secure than text messages.
- **Security key**: A small physical device (like a YubiKey) that you plug into your computer or tap against your phone. The most secure option available.
- **Biometric**: Using your fingerprint or face scan as the second factor.

## Where to Turn On 2FA

Start with your most important accounts:

1. **Email** — Your email is the gateway to resetting all your other passwords.
2. **Banking and financial accounts**
3. **Social media** (Facebook, Instagram, X)
4. **Shopping** (Amazon, PayPal)

Look in each account's Settings or Security section for an option labeled "Two-Factor Authentication," "2-Step Verification," or "Login Verification."

(Sources: CISA.gov, Google Support, AARP, 2026)`,
  },
  {
    slug: 'encryption',
    title: 'Encryption',
    category: 'concept',
    tags: ['security', 'encryption', 'privacy', 'data', 'protection'],
    lastUpdated: '2026-04-16',
    seeAlso: ['http-https', 'vpn', 'two-factor-authentication'],
    content: `## What Is Encryption?

Encryption is a process that scrambles your data so that only authorized people can read it. When information is encrypted, it looks like gibberish to anyone who does not have the key to unscramble it.

Imagine writing a letter in a secret code that only you and the recipient understand. Even if someone intercepts the letter, they cannot read it without knowing the code. That is what encryption does for your digital information.

## Where Encryption Is Used

Encryption protects you in many everyday situations:

- **Websites (HTTPS)**: When you see the padlock icon in your browser, the connection between your device and the website is encrypted.
- **Messaging apps**: Apps like iMessage, WhatsApp, and Signal use end-to-end encryption, meaning only you and the person you are messaging can read the conversation — not even the app maker.
- **Online banking**: Your financial transactions are encrypted so hackers cannot steal your account details.
- **Device storage**: iPhones and modern Android phones encrypt everything stored on them by default. If someone steals your phone, they cannot read your data without your passcode.

## Why It Matters

Without encryption, anyone who intercepts your data — hackers on public Wi-Fi, for example — could read your passwords, messages, and financial information. Encryption is one of the most important layers of protection in the digital world.

## Quick Tip

To make sure your phone is encrypted, go to Settings and look for "Encryption" or "Security." On most modern smartphones, encryption is turned on automatically when you set a passcode or PIN.

(Sources: CISA.gov, EFF.org, Apple Support, 2026)`,
  },
  {
    slug: 'firewall',
    title: 'Firewall',
    category: 'concept',
    tags: ['security', 'firewall', 'protection', 'networking', 'threats'],
    lastUpdated: '2026-04-16',
    seeAlso: ['malware', 'router', 'vpn'],
    content: `## What Is a Firewall?

A firewall is a security system that monitors and controls the data coming in and going out of your device or network. It acts like a security guard at the entrance of a building — checking everyone who tries to enter and turning away anyone who should not be there.

Firewalls help block hackers, malware, and other threats from reaching your device through the internet.

## Types of Firewalls

- **Software firewalls**: Built into your computer's operating system. Windows has Windows Defender Firewall, and macOS has a built-in firewall in System Settings. These monitor traffic on your individual device.
- **Hardware firewalls**: Built into your router. This protects your entire home network by filtering traffic before it reaches any of your devices.

Most homes have both working together — the router's firewall protects the network as a whole, and each device's software firewall adds another layer of protection.

## Do You Need to Do Anything?

For most people, the default firewall settings are fine. Here is what to keep in mind:

- **Windows**: Windows Defender Firewall is on by default. Do not turn it off.
- **Mac**: You can turn on the firewall in System Settings > Network > Firewall.
- **Router**: Your router's firewall is typically enabled by default.

If an app asks you to allow it through the firewall, only say yes if you trust the app and you installed it yourself.

(Sources: Microsoft Support, Apple Support, CISA.gov, 2026)`,
  },
  {
    slug: 'phishing',
    title: 'Phishing',
    category: 'concept',
    tags: ['security', 'phishing', 'scam', 'email', 'fraud'],
    lastUpdated: '2026-04-16',
    seeAlso: ['scam-prevention', 'malware', 'two-factor-authentication'],
    content: `## What Is Phishing?

Phishing is a type of scam where criminals try to trick you into giving up personal information — like passwords, credit card numbers, or Social Security numbers — by pretending to be someone you trust. The name comes from "fishing" because scammers are casting bait and hoping you will bite.

## How Phishing Works

Phishing attempts usually arrive by email, text message, or phone call. They often look like they come from a legitimate company — your bank, Amazon, the IRS, or a tech company. The message creates urgency: "Your account has been compromised," "You have a package delivery issue," or "You owe money and must pay immediately."

The message includes a link to a fake website that looks real or asks you to call a phone number where scammers are waiting to collect your information.

## Red Flags to Watch For

- **Urgency or threats**: "Act now or your account will be closed."
- **Unfamiliar sender**: The email address does not match the company it claims to be from.
- **Suspicious links**: The URL does not match the company's real website.
- **Requests for personal information**: Legitimate companies will not ask for your password by email.
- **Poor grammar or spelling**: Many phishing messages have noticeable errors.

## What to Do

- Do not click links or open attachments from suspicious messages.
- Go directly to the company's website by typing the address into your browser.
- Report phishing emails to the FTC at reportfraud.ftc.gov.
- If you clicked a link and entered information, change your passwords immediately.

(Sources: FTC.gov, CISA.gov, AARP Fraud Watch, 2026)`,
  },
  {
    slug: 'vpn',
    title: 'VPN (Virtual Private Network)',
    category: 'concept',
    tags: ['security', 'vpn', 'privacy', 'internet', 'encryption'],
    lastUpdated: '2026-04-16',
    seeAlso: ['encryption', 'ip-address', 'privacy-settings'],
    content: `## What Is a VPN?

A VPN, or Virtual Private Network, creates a secure, encrypted tunnel between your device and the internet. When you use a VPN, your internet traffic is routed through a server operated by the VPN provider, hiding your IP address and encrypting all the data you send and receive.

Think of it like sending a letter through a secure courier service instead of regular mail. No one along the way can read the letter or see who sent it.

## When to Use a VPN

A VPN is most useful in these situations:

- **Public Wi-Fi**: Coffee shops, airports, hotels, and libraries have open networks where hackers can intercept your data. A VPN encrypts everything so they cannot see what you are doing.
- **Privacy**: A VPN prevents your ISP from tracking which websites you visit.
- **Traveling**: Some content may be restricted in certain countries. A VPN can help you access your usual services.

## What a VPN Does NOT Do

A VPN does not make you anonymous or protect you from every threat. It does not stop you from clicking phishing links, downloading malware, or using weak passwords. It is one layer of protection, not a complete security solution.

## Choosing a VPN

Look for a reputable, paid VPN service. Free VPNs often make money by collecting and selling your data — the opposite of what you want. Trusted options include NordVPN, ExpressVPN, and Proton VPN (which has a trustworthy free tier).

(Sources: CISA.gov, Tom's Guide, How-To Geek, 2026)`,
  },
  {
    slug: 'dark-web',
    title: 'Dark Web',
    category: 'concept',
    tags: ['security', 'dark-web', 'internet', 'privacy', 'data'],
    lastUpdated: '2026-04-16',
    seeAlso: ['data-breach', 'vpn', 'password-security'],
    content: `## What Is the Dark Web?

The internet has layers, and the dark web is the deepest one. The **surface web** is everything you can find through Google — websites, news, shopping. The **deep web** includes password-protected content like your email inbox and bank account. The **dark web** is a hidden portion of the internet that requires special software (like the Tor browser) to access.

The dark web is not inherently illegal, but it is often used for illicit activities, including selling stolen personal data, passwords, credit card numbers, and Social Security numbers.

## Why Should You Care?

If your personal information is involved in a data breach, it may end up for sale on the dark web. This is how identity theft often starts — criminals buy stolen login credentials and use them to access your accounts.

## How to Check If Your Information Is on the Dark Web

- **Have I Been Pwned** (haveibeenpwned.com): A free, trusted service that tells you if your email address has appeared in known data breaches.
- **Credit monitoring services**: Many banks and credit card companies now offer free dark web monitoring alerts.
- **Google's dark web report**: Available through Google One, it scans for your personal information on the dark web.

## What to Do If Your Data Is Found

- Change your passwords immediately, especially for affected accounts.
- Turn on two-factor authentication.
- Monitor your bank statements and credit reports for unfamiliar activity.
- Consider placing a fraud alert or credit freeze with the three major credit bureaus.

(Sources: FTC.gov, AARP, How-To Geek, 2026)`,
  },
  {
    slug: 'data-breach',
    title: 'Data Breach',
    category: 'concept',
    tags: ['security', 'data-breach', 'privacy', 'identity', 'protection'],
    lastUpdated: '2026-04-16',
    seeAlso: ['dark-web', 'password-security', 'two-factor-authentication'],
    content: `## What Is a Data Breach?

A data breach happens when unauthorized people gain access to sensitive information stored by a company or organization. This can include usernames, passwords, email addresses, Social Security numbers, credit card details, and medical records.

Data breaches affect millions of people every year. Major companies like Target, Equifax, Yahoo, and T-Mobile have all experienced breaches that exposed customer data.

## How Breaches Happen

- **Hacking**: Attackers exploit weaknesses in a company's security systems.
- **Human error**: An employee accidentally exposes data or falls for a phishing attack.
- **Insider threats**: A disgruntled employee intentionally leaks information.
- **Poor security practices**: Companies that do not encrypt data or use weak passwords.

## How to Know If You Are Affected

- The company involved will usually notify you by email or mail.
- Check haveibeenpwned.com to see if your email appears in known breaches.
- Watch for unexpected activity in your bank accounts or credit reports.

## What to Do After a Breach

1. **Change passwords** for the affected service and any other account using the same password.
2. **Turn on 2FA** for affected accounts.
3. **Monitor your credit**: Request free credit reports at annualcreditreport.com.
4. **Consider a credit freeze**: This prevents anyone from opening new accounts in your name. You can freeze your credit for free at Equifax, Experian, and TransUnion.
5. **Be extra cautious of phishing**: Scammers often target breach victims with follow-up scams.

(Sources: FTC.gov, CISA.gov, IdentityTheft.gov, 2026)`,
  },
  {
    slug: 'zero-day-vulnerability',
    title: 'Zero-Day Vulnerability',
    category: 'concept',
    tags: ['security', 'vulnerability', 'software', 'threats', 'updates'],
    lastUpdated: '2026-04-16',
    seeAlso: ['malware', 'firewall', 'data-breach'],
    content: `## What Is a Zero-Day Vulnerability?

A zero-day vulnerability is a security flaw in software that the software maker does not yet know about — or knows about but has not had time to fix. The name "zero-day" refers to the fact that the developer has had zero days to create a patch or update to fix the problem.

Think of it like discovering a broken lock on a building's back door that nobody knew was broken. Until someone fixes it, anyone who discovers it can walk right in.

## Why Zero-Days Are Dangerous

Because there is no fix available yet, zero-day vulnerabilities are extremely valuable to hackers. They can exploit these flaws to install malware, steal data, or take control of systems before anyone knows what is happening.

Zero-day attacks often target widely used software like web browsers, operating systems, and popular applications — because the more people using the software, the more potential victims there are.

## How to Protect Yourself

While you cannot prevent zero-day vulnerabilities from existing, you can reduce your risk:

- **Install updates immediately**: When your phone, computer, or apps prompt you to update, do it as soon as possible. Many updates contain security patches for recently discovered vulnerabilities.
- **Turn on automatic updates**: This ensures you get fixes without having to think about it.
- **Use reputable software**: Stick with well-known apps and operating systems that have dedicated security teams working to find and fix flaws.
- **Keep backups**: If a zero-day attack does hit, having a recent backup lets you restore your data.

(Sources: CISA.gov, How-To Geek, Microsoft Security, 2026)`,
  },

  // ─── Devices & Hardware ────────────────────────────────────────────

  {
    slug: 'ssd',
    title: 'SSD (Solid State Drive)',
    category: 'concept',
    tags: ['hardware', 'storage', 'ssd', 'computer', 'performance'],
    lastUpdated: '2026-04-16',
    seeAlso: ['ram', 'cpu', 'device-basics'],
    content: `## What Is an SSD?

An SSD, or Solid State Drive, is a type of storage device inside your computer that holds all your files, apps, photos, and the operating system. Unlike older hard drives (HDDs) that used spinning metal disks to read and write data, an SSD uses electronic chips with no moving parts.

Think of the difference like a record player versus a streaming music app. The record player has to physically move a needle along a spinning disc to find a song. The streaming app accesses any song instantly because everything is stored electronically.

## Why SSDs Matter

SSDs are significantly faster than traditional hard drives. A computer with an SSD:

- **Starts up in seconds** instead of minutes.
- **Opens apps and files much faster.**
- **Is more durable** because there are no moving parts to break if you bump or drop the device.
- **Runs quieter and cooler** since nothing is spinning.

Most modern laptops, tablets, and phones use SSD technology by default. If you have an older desktop computer with a traditional hard drive, upgrading to an SSD is one of the most noticeable performance improvements you can make.

## Quick Tip

When shopping for a computer, check the storage type. A computer with a 256GB SSD will feel faster in daily use than one with a 1TB traditional hard drive, even though the hard drive holds more data.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'ram',
    title: 'RAM (Random Access Memory)',
    category: 'concept',
    tags: ['hardware', 'memory', 'ram', 'computer', 'performance'],
    lastUpdated: '2026-04-16',
    seeAlso: ['ssd', 'cpu', 'device-basics'],
    content: `## What Is RAM?

RAM stands for Random Access Memory. It is your computer's short-term memory — the workspace where your device keeps the information it is actively using right now. When you open an app, a web browser tab, or a document, it gets loaded into RAM so your device can access it quickly.

Think of RAM like your desk at work. The bigger your desk, the more papers and projects you can spread out and work on at the same time. A small desk means you constantly have to put things away and pull out new ones, which slows you down.

## How Much RAM Do You Need?

- **4 GB**: Enough for basic tasks like email, web browsing, and word processing, but you may notice slowdowns with multiple tabs open.
- **8 GB**: The sweet spot for most people. Handles web browsing, streaming, video calls, and everyday apps comfortably.
- **16 GB or more**: Needed for demanding tasks like video editing, gaming, or running many applications at once.

## RAM vs. Storage

RAM and storage (SSD or hard drive) are different things:

- **RAM** is temporary — it clears when you turn off your device. It is for what you are doing right now.
- **Storage** is permanent — it keeps your files, photos, and apps saved even when the device is off.

## Quick Tip

If your computer feels sluggish, check how many browser tabs and apps are open. Each one uses RAM. Closing tabs you are not using can make your device feel noticeably faster.

(Sources: How-To Geek, Tom's Guide, Apple Support, 2026)`,
  },
  {
    slug: 'cpu',
    title: 'CPU (Processor)',
    category: 'concept',
    tags: ['hardware', 'cpu', 'processor', 'computer', 'performance'],
    lastUpdated: '2026-04-16',
    seeAlso: ['ram', 'gpu', 'ssd'],
    content: `## What Is a CPU?

CPU stands for Central Processing Unit, and it is often called the "brain" of your computer. The CPU handles all the instructions and calculations that make your device work — from opening an app to running a spell check to playing a video.

Every click, tap, and command you give your device goes through the CPU. The faster and more powerful the CPU, the quicker your device can handle tasks.

## What Makes a CPU Fast?

Two main factors determine CPU performance:

- **Clock speed**: Measured in gigahertz (GHz). Higher numbers mean the CPU processes instructions faster. A 3.5 GHz processor runs faster than a 2.0 GHz one.
- **Cores**: Modern CPUs have multiple cores, which are like having multiple brains working at the same time. A quad-core CPU can handle four tasks simultaneously, making it better for multitasking.

## Common CPU Brands

- **Intel**: Makes Core i3, i5, i7, and i9 processors. Higher numbers generally mean better performance.
- **AMD**: Makes Ryzen 3, 5, 7, and 9 processors. A competitive alternative to Intel.
- **Apple Silicon**: Apple's M-series chips (M1, M2, M3, M4) combine the CPU, GPU, and RAM into one efficient chip, offering excellent performance with long battery life.

## Quick Tip

For everyday use — email, web browsing, video calls, and document editing — a mid-range processor like an Intel Core i5 or Apple M3 is more than enough. You do not need the most expensive option unless you are doing intensive tasks like video production.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'gpu',
    title: 'GPU (Graphics Processing Unit)',
    category: 'concept',
    tags: ['hardware', 'gpu', 'graphics', 'gaming', 'video'],
    lastUpdated: '2026-04-16',
    seeAlso: ['cpu', 'ram', 'device-basics'],
    content: `## What Is a GPU?

A GPU, or Graphics Processing Unit, is a specialized processor designed to handle visual tasks — rendering images, playing videos, displaying animations, and running games. While the CPU is the brain of your computer handling general tasks, the GPU is a specialist that excels at processing images and visual data quickly.

Think of it this way: the CPU is a highly skilled worker who can do many different jobs one at a time. The GPU is a team of workers who are each less versatile but can do thousands of smaller visual tasks simultaneously.

## Where GPUs Live

- **Integrated graphics**: Built into the CPU. Found in most everyday laptops and desktops. Fine for web browsing, video streaming, office work, and casual photo editing.
- **Dedicated (discrete) graphics**: A separate, more powerful GPU with its own memory. Found in gaming computers, workstations for video editing, and machines used for AI or 3D design.

## When the GPU Matters

For most everyday users, the integrated graphics built into modern processors are more than adequate. A dedicated GPU becomes important for:

- **Gaming**: Modern games require significant graphics processing power.
- **Video editing**: Rendering and exporting video is much faster with a good GPU.
- **3D design and modeling**: Professional creative software relies heavily on GPU power.
- **AI and machine learning**: These workloads use GPUs for parallel processing.

## Quick Tip

If you are buying a computer for everyday tasks, you do not need to worry about a dedicated GPU. The integrated graphics in modern Intel, AMD, or Apple Silicon chips handle streaming, video calls, and basic photo editing with no problem.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'usb-c',
    title: 'USB-C',
    category: 'concept',
    tags: ['hardware', 'usb', 'cable', 'connector', 'charging'],
    lastUpdated: '2026-04-16',
    seeAlso: ['hdmi', 'bluetooth-technology', 'device-basics'],
    content: `## What Is USB-C?

USB-C is a type of connector — the small, oval-shaped plug found on most modern phones, tablets, laptops, and accessories. Unlike the older rectangular USB-A plugs, USB-C is reversible, meaning you can plug it in either way without fumbling to find the "right side up."

## Why USB-C Is Everywhere

USB-C has become the universal standard because it can do many things through one port:

- **Charging**: Powers phones, tablets, laptops, and even some monitors.
- **Data transfer**: Moves files between devices at high speeds.
- **Video output**: Can connect to an external monitor or TV with the right cable or adapter.
- **Audio**: Some devices use USB-C for headphones instead of a traditional headphone jack.

## The Confusing Part

Not all USB-C cables and ports are the same. Two cables that look identical may support different speeds or features. A cheap USB-C cable might only handle slow charging, while a higher-quality one supports fast data transfer and video output. When buying USB-C cables, look for ones that specify "USB 3.2" or "Thunderbolt" if you need high performance.

## USB-C and Your Phone

As of 2024, new iPhones use USB-C (replacing the Lightning connector). Android phones have used USB-C for years. This means one cable type can now charge almost all your devices — phones, tablets, laptops, and earbuds.

## Quick Tip

Keep a few USB-C cables around the house. Since most new devices use this connector, having extras in the kitchen, bedroom, and car means you are always ready to charge.

(Sources: Tom's Guide, How-To Geek, Apple Support, 2026)`,
  },
  {
    slug: 'hdmi',
    title: 'HDMI',
    category: 'concept',
    tags: ['hardware', 'hdmi', 'video', 'tv', 'cable'],
    lastUpdated: '2026-04-16',
    seeAlso: ['usb-c', 'streaming-setup-guide', 'device-basics'],
    content: `## What Is HDMI?

HDMI stands for High-Definition Multimedia Interface. It is the most common cable used to connect devices to a TV or monitor, carrying both video and audio through a single cable. If you have ever plugged a streaming stick, game console, or laptop into a TV, you have likely used an HDMI cable.

## What HDMI Connects

HDMI cables connect a wide range of devices to displays:

- **Streaming devices** (Roku, Fire Stick, Apple TV) to your TV.
- **Laptops** to an external monitor or projector.
- **Gaming consoles** (PlayStation, Xbox, Nintendo Switch) to your TV.
- **Cable/satellite boxes** to your TV.
- **Blu-ray players** to your TV.

## HDMI Versions

HDMI cables come in different versions that support different features:

- **HDMI 1.4**: Supports up to 4K video at 30fps. Fine for most basic use.
- **HDMI 2.0**: Supports 4K at 60fps. Good for streaming and everyday use.
- **HDMI 2.1**: Supports 4K at 120fps and 8K. Needed mainly for advanced gaming.

For most people, any standard HDMI cable works well. You do not need to spend a lot — a basic certified cable from Amazon or a local store works identically to an expensive one for everyday use.

## Quick Tip

Most TVs have multiple HDMI ports on the back or side. Use your TV remote's "Input" or "Source" button to switch between devices plugged into different HDMI ports.

(Sources: How-To Geek, Tom's Guide, CNET, 2026)`,
  },
  {
    slug: 'bluetooth-technology',
    title: 'Bluetooth',
    category: 'concept',
    tags: ['hardware', 'bluetooth', 'wireless', 'connectivity', 'audio'],
    lastUpdated: '2026-04-16',
    seeAlso: ['nfc', 'wifi-networking', 'bluetooth-connections'],
    content: `## What Is Bluetooth?

Bluetooth is a wireless technology that lets devices communicate with each other over short distances — typically within about 30 feet. It uses radio waves to create a direct connection between two devices without needing Wi-Fi or a cable.

Think of Bluetooth as a short-range walkie-talkie for your devices. It lets them talk to each other directly.

## Common Uses of Bluetooth

- **Wireless headphones and earbuds**: AirPods, Galaxy Buds, and similar earbuds connect to your phone via Bluetooth.
- **Wireless speakers**: Portable speakers play music streamed from your phone over Bluetooth.
- **Car audio**: Your phone connects to your car's audio system for hands-free calls and music.
- **Keyboards and mice**: Wireless input devices connect to computers via Bluetooth.
- **Smartwatches and fitness trackers**: These sync with your phone using Bluetooth.

## How to Connect (Pair) a Bluetooth Device

1. Turn on Bluetooth in your phone or computer settings.
2. Put the device you want to connect into "pairing mode" (usually by holding down a button until a light blinks).
3. Your phone or computer will detect the device and show it in a list.
4. Tap the device name to connect.
5. Once paired, devices usually reconnect automatically in the future.

## Quick Tip

If a Bluetooth device will not connect, try turning Bluetooth off and back on, or "forget" the device in your settings and pair it again from scratch. Also make sure the device is charged — low battery can cause connection problems.

(Sources: How-To Geek, Apple Support, Google Support, 2026)`,
  },
  {
    slug: 'nfc',
    title: 'NFC (Near Field Communication)',
    category: 'concept',
    tags: ['hardware', 'nfc', 'wireless', 'payments', 'connectivity'],
    lastUpdated: '2026-04-16',
    seeAlso: ['contactless-payment', 'bluetooth-technology', 'digital-wallet'],
    content: `## What Is NFC?

NFC stands for Near Field Communication. It is a wireless technology that allows two devices to exchange information when they are held very close together — within about an inch or two. Unlike Bluetooth, which works over several feet, NFC requires near-contact proximity.

## Where NFC Is Used

You probably use NFC more than you realize:

- **Contactless payments**: When you tap your phone or credit card at a store checkout, that is NFC at work. Apple Pay, Google Pay, and Samsung Pay all use NFC.
- **Transit passes**: Many city bus and subway systems use NFC cards or phone apps for tap-to-ride access.
- **File sharing**: Some phones can share contacts, photos, or links by tapping them together (though this feature is becoming less common as other sharing methods improve).
- **Smart tags**: Small NFC tags can be programmed to trigger actions when you tap your phone against them — like turning on smart lights or opening a website.

## Is NFC Safe?

NFC is considered secure for payments because:

- It only works within an inch or two, so someone cannot intercept the signal from across the room.
- Payment transactions generate a unique, one-time code instead of transmitting your actual card number.
- Your phone requires authentication (Face ID, fingerprint, or PIN) before completing a payment.

## Quick Tip

Most modern smartphones have NFC built in. On iPhone, it works automatically for Apple Pay. On Android, check Settings > Connected Devices > NFC to make sure it is turned on.

(Sources: How-To Geek, Tom's Guide, Google Support, 2026)`,
  },

  // ─── Software & Apps ───────────────────────────────────────────────

  {
    slug: 'operating-system',
    title: 'Operating System (OS)',
    category: 'concept',
    tags: ['software', 'os', 'system', 'computer', 'phone'],
    lastUpdated: '2026-04-16',
    seeAlso: ['browser', 'firmware', 'device-basics'],
    content: `## What Is an Operating System?

An operating system (OS) is the foundational software that makes your device work. It manages everything — the screen, the keyboard, the files, the apps — and acts as the middleman between you and the hardware. Without an operating system, your device is an expensive paperweight.

Think of the OS as the manager of a restaurant. The kitchen (hardware) has all the equipment, and the waitstaff (apps) interact with customers. But the manager coordinates everything, making sure orders get to the right place and everything runs on time.

## Common Operating Systems

- **Windows**: Made by Microsoft. Used on most PCs and laptops (except Apple). Current version: Windows 11.
- **macOS**: Made by Apple. Used on Mac computers (MacBook, iMac, Mac Mini).
- **iOS**: Made by Apple. Runs on iPhones.
- **Android**: Made by Google. Runs on Samsung, Google Pixel, and many other phone brands.
- **iPadOS**: Made by Apple. Runs on iPads.
- **ChromeOS**: Made by Google. Runs on Chromebooks — lightweight laptops focused on web browsing.

## Keeping Your OS Updated

Operating system updates include security patches, bug fixes, and sometimes new features. Keeping your OS updated is one of the most important things you can do to protect your device. Turn on automatic updates in your settings so you do not have to remember to do it manually.

(Sources: Microsoft Support, Apple Support, Google Support, 2026)`,
  },
  {
    slug: 'browser',
    title: 'Web Browser',
    category: 'concept',
    tags: ['software', 'browser', 'web', 'internet', 'apps'],
    lastUpdated: '2026-04-16',
    seeAlso: ['url', 'http-https', 'operating-system'],
    content: `## What Is a Web Browser?

A web browser is the app you use to access the internet and visit websites. When you type a web address, click a link, or search for something online, you are using a browser. It is your window to the internet.

## Popular Web Browsers

- **Google Chrome**: The most widely used browser. Works on all devices and syncs your bookmarks and passwords across them.
- **Safari**: Apple's browser, built into iPhones, iPads, and Macs. Fast and energy-efficient on Apple devices.
- **Microsoft Edge**: Comes with Windows computers. Has improved significantly and includes useful features like built-in AI tools.
- **Mozilla Firefox**: A privacy-focused option that does not track your activity as aggressively.
- **Brave**: Blocks ads and trackers by default.

## Key Browser Features

- **Tabs**: Open multiple web pages at the same time without losing your place.
- **Bookmarks**: Save your favorite websites for quick access later.
- **Private/Incognito mode**: Browse without your device saving your history. Note: this does not hide your activity from your ISP or employer.
- **Password manager**: Most browsers offer to save and fill in your passwords.
- **Extensions/add-ons**: Small programs that add features like ad blocking or password management.

## Quick Tip

No matter which browser you use, keep it updated. Browser updates include important security fixes. If your browser is not up to date, you are more vulnerable to online threats.

(Sources: Google Support, Apple Support, Mozilla Support, 2026)`,
  },
  {
    slug: 'app-store',
    title: 'App Store',
    category: 'concept',
    tags: ['software', 'apps', 'download', 'mobile', 'store'],
    lastUpdated: '2026-04-16',
    seeAlso: ['operating-system', 'downloading-apps', 'open-source'],
    content: `## What Is an App Store?

An app store is a digital marketplace where you can browse, download, and install apps on your device. Apps are programs that add functionality to your phone, tablet, or computer — from social media and games to banking and health tracking.

## The Main App Stores

- **Apple App Store**: For iPhones and iPads. All apps are reviewed by Apple before being published, which adds a layer of security.
- **Google Play Store**: For Android phones and tablets. Has a wider selection but a slightly less strict review process.
- **Microsoft Store**: For Windows computers. Includes desktop apps, games, and some mobile-style apps.
- **Mac App Store**: For Mac computers. Similar to the iOS App Store but for desktop applications.

## Staying Safe When Downloading Apps

Not every app is trustworthy, even in official app stores. Follow these guidelines:

- **Download from official stores only.** Avoid downloading apps from random websites or links in text messages.
- **Check reviews and ratings** before downloading. Look for recent reviews and how many people have downloaded the app.
- **Review permissions.** If a flashlight app asks to access your contacts and microphone, that is a red flag.
- **Keep apps updated.** Developers release updates to fix security issues and add features.

## Quick Tip

Delete apps you no longer use. Old, unupdated apps can have security vulnerabilities and take up storage space on your device.

(Sources: Apple Support, Google Support, FTC.gov, 2026)`,
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    category: 'synthesis',
    tags: ['software', 'cloud', 'storage', 'internet', 'services'],
    lastUpdated: '2026-04-16',
    seeAlso: ['cloud-storage', 'saas', 'api'],
    content: `## What Is Cloud Computing?

Cloud computing means using someone else's computers, accessed over the internet, instead of running everything on your own device. When you use Google Docs, stream a movie on Netflix, or back up your photos to iCloud, you are using cloud computing.

Think of it like electricity. You do not need to own a power plant to use electricity — you plug into the grid and pay for what you use. Cloud computing works the same way: companies like Amazon, Google, and Microsoft run massive data centers full of powerful computers, and you access their power over the internet.

## Everyday Cloud Services You Already Use

- **Email**: Gmail, Outlook, and Yahoo Mail all run in the cloud.
- **Photo storage**: iCloud Photos, Google Photos, and Amazon Photos store your pictures on remote servers.
- **File storage**: Google Drive, Dropbox, and OneDrive let you save and access files from any device.
- **Streaming**: Netflix, Spotify, and YouTube deliver content from the cloud.
- **Online banking**: Your bank's website and app connect to cloud-based systems.

## Why Cloud Computing Matters

- **Access anywhere**: Your files and apps are available on any device with an internet connection.
- **Automatic backups**: Cloud services often back up your data automatically.
- **No maintenance**: The cloud provider handles all the hardware, updates, and security.
- **Scalability**: You can add more storage or features as you need them.

(Sources: How-To Geek, Tom's Guide, Microsoft Azure Documentation, 2026)`,
  },
  {
    slug: 'saas',
    title: 'SaaS (Software as a Service)',
    category: 'concept',
    tags: ['software', 'saas', 'cloud', 'subscription', 'apps'],
    lastUpdated: '2026-04-16',
    seeAlso: ['cloud-computing', 'api', 'app-store'],
    content: `## What Is SaaS?

SaaS stands for Software as a Service. It is a way of using software through the internet — usually through a web browser — instead of buying and installing it on your computer. Instead of a one-time purchase, you typically pay a monthly or yearly subscription.

Think of it like renting versus buying. In the old days, you bought a box of software at the store for $200 and installed it from a CD. With SaaS, you pay $10 a month and access the software online, always getting the latest version without reinstalling anything.

## SaaS You Probably Already Use

- **Google Workspace** (Docs, Sheets, Gmail): Free tools that run entirely in your browser.
- **Microsoft 365**: Word, Excel, and PowerPoint available as a subscription with cloud features.
- **Netflix, Spotify, Hulu**: Entertainment delivered as a service.
- **Zoom**: Video calling accessible from your browser or app with a subscription.
- **Dropbox**: Cloud file storage available on a subscription plan.

## Advantages of SaaS

- **No installation hassles**: Access the software from any device with a browser.
- **Always up to date**: The provider handles updates and bug fixes automatically.
- **Lower upfront cost**: Small monthly fees instead of large one-time purchases.
- **Work from anywhere**: Your data and tools travel with you.

## Things to Watch Out For

- Subscriptions can add up — review what you are paying for each month.
- If the service goes offline, you lose access temporarily.
- Your data lives on someone else's servers, so check the provider's privacy and security policies.

(Sources: How-To Geek, Tom's Guide, 2026)`,
  },
  {
    slug: 'api',
    title: 'API (Application Programming Interface)',
    category: 'concept',
    tags: ['software', 'api', 'programming', 'integration', 'data'],
    lastUpdated: '2026-04-16',
    seeAlso: ['cloud-computing', 'saas', 'open-source'],
    content: `## What Is an API?

API stands for Application Programming Interface. It is a set of rules that allows different software programs to communicate with each other. You can think of an API as a waiter in a restaurant — you (the customer) tell the waiter what you want, the waiter goes to the kitchen (another system), and brings back your food (the data or result).

## APIs in Everyday Life

You interact with APIs constantly without knowing it:

- **Weather apps** pull forecast data from a weather service's API.
- **Ride-sharing apps** (Uber, Lyft) use Google Maps API to show maps and calculate routes.
- **Login with Google or Facebook**: When a website offers "Sign in with Google," it is using Google's API to verify your identity.
- **Payment processing**: When you buy something online, the store's website uses a payment API (like Stripe or PayPal) to handle your transaction securely.

## Why APIs Matter to You

APIs are the reason different apps and services can work together. Your smart home app can control lights from one company, a thermostat from another, and a doorbell from a third — all because those devices offer APIs that let the app communicate with each one.

## Quick Tip

As a regular user, you do not need to understand the technical details of APIs. But knowing the concept helps you understand why certain apps work well together (they share APIs) and why some devices or services are not compatible (they use different, non-connected systems).

(Sources: How-To Geek, Mozilla Developer Network, 2026)`,
  },
  {
    slug: 'open-source',
    title: 'Open Source',
    category: 'concept',
    tags: ['software', 'open-source', 'free', 'community', 'code'],
    lastUpdated: '2026-04-16',
    seeAlso: ['operating-system', 'browser', 'api'],
    content: `## What Is Open Source?

Open-source software is software whose source code — the underlying instructions that make it work — is freely available for anyone to view, modify, and distribute. It is built and maintained by communities of developers who collaborate openly.

Think of it like a recipe that is shared publicly. Anyone can make the dish, adjust the ingredients to their taste, or share an improved version. Proprietary software, by contrast, keeps the recipe secret — you can use the product but not see how it is made.

## Open-Source Software You May Already Use

- **Android**: Google's mobile operating system is open source at its core.
- **Mozilla Firefox**: A popular, privacy-focused web browser.
- **VLC Media Player**: Plays almost any audio or video file format.
- **LibreOffice**: A free alternative to Microsoft Office (word processing, spreadsheets, presentations).
- **WordPress**: The platform behind a large portion of all websites.
- **Bitwarden**: A free, highly regarded password manager.

## Why Open Source Matters

- **Free to use**: Most open-source software costs nothing.
- **Transparency**: Because the code is public, security researchers can inspect it for vulnerabilities.
- **Community-driven**: Bugs get found and fixed by a global community of developers.
- **No vendor lock-in**: You are not dependent on one company's decisions or pricing.

## Quick Tip

Open source does not mean lower quality. Many of the technologies that power the internet — including the servers, programming languages, and databases behind sites like Netflix and Google — are open source.

(Sources: OpenSource.org, How-To Geek, Mozilla Foundation, 2026)`,
  },
  {
    slug: 'firmware',
    title: 'Firmware',
    category: 'concept',
    tags: ['software', 'firmware', 'hardware', 'updates', 'devices'],
    lastUpdated: '2026-04-16',
    seeAlso: ['operating-system', 'router', 'smart-plug'],
    content: `## What Is Firmware?

Firmware is a type of software that is built directly into a piece of hardware. It tells the hardware how to operate at the most basic level. While apps and operating systems can be installed, uninstalled, and updated frequently, firmware is embedded into the device itself and updated less often.

Think of firmware as the instincts of a device. An operating system is like learned skills you can change, but firmware is the built-in knowledge the device needs to function at all.

## Where Firmware Lives

Almost every electronic device has firmware:

- **Routers and modems**: Firmware controls how they manage network traffic.
- **Smart TVs**: Firmware runs the basic display and input functions.
- **Printers**: Firmware manages printing processes and communication with computers.
- **Smart home devices**: Smart speakers, cameras, and thermostats all run on firmware.
- **Gaming controllers, USB drives, keyboards**: Even small accessories have firmware.

## Firmware Updates

Manufacturers occasionally release firmware updates to fix bugs, patch security vulnerabilities, or add new features. Unlike app updates, firmware updates often require the device to restart and should not be interrupted — turning off a device during a firmware update can sometimes damage it.

## Quick Tip

When your router, smart TV, or other device notifies you about a firmware update, install it. These updates often fix security holes that could leave your device vulnerable. Most modern devices can be set to update firmware automatically.

(Sources: How-To Geek, Tom's Guide, CISA.gov, 2026)`,
  },

  // ─── Social Media & Communication ──────────────────────────────────

  {
    slug: 'algorithm',
    title: 'Algorithm (Social Media)',
    category: 'concept',
    tags: ['social-media', 'algorithm', 'feed', 'content', 'platform'],
    lastUpdated: '2026-04-16',
    seeAlso: ['engagement', 'going-viral', 'social-media-safety-guide'],
    content: `## What Is a Social Media Algorithm?

An algorithm is a set of rules and calculations that a platform uses to decide what content to show you and in what order. When you open Facebook, Instagram, TikTok, or YouTube, an algorithm decides which posts, videos, and ads appear in your feed.

Think of it like a librarian who knows your reading habits. Instead of showing you every book in the library, the librarian picks the ones you are most likely to enjoy based on what you have read before.

## How Algorithms Decide What You See

Social media algorithms look at many factors:

- **What you interact with**: Posts you like, comment on, share, or spend time viewing.
- **Who you interact with**: Content from people you frequently engage with is prioritized.
- **Content type**: If you watch a lot of videos, the algorithm shows you more videos.
- **Recency**: Newer posts generally get priority, but popular older posts may resurface.
- **Engagement signals**: Content that many people are interacting with gets boosted to more users.

## Why This Matters

Algorithms create a "filter bubble" — you tend to see content that matches your existing interests and views. This can be helpful (you see things you care about) but also limiting (you may miss different perspectives).

## Quick Tip

If your feed feels repetitive or you are seeing too much of a certain type of content, interact with different kinds of posts. Like a few new topics, follow different accounts, or use the "not interested" option to tell the algorithm to adjust.

(Sources: How-To Geek, AARP, Pew Research Center, 2026)`,
  },
  {
    slug: 'hashtag',
    title: 'Hashtag',
    category: 'concept',
    tags: ['social-media', 'hashtag', 'search', 'trending', 'content'],
    lastUpdated: '2026-04-16',
    seeAlso: ['algorithm', 'going-viral', 'engagement'],
    content: `## What Is a Hashtag?

A hashtag is a word or phrase preceded by the pound sign (#), used on social media to categorize content and make it searchable. When you add a hashtag to a post — like #cooking, #travel, or #techhelp — your post becomes discoverable by anyone searching for or following that topic.

Think of hashtags like labels on file folders. They help organize the massive amount of content posted every day so people can find what interests them.

## How Hashtags Work

When you click or tap a hashtag, the platform shows you all public posts that include that same hashtag. This is how people discover new content, join conversations, and follow trending topics.

## Where Hashtags Are Used

- **Instagram**: Hashtags are widely used to help posts reach new audiences. You can add up to 30 per post.
- **X (formerly Twitter)**: Hashtags help categorize tweets and track trending topics.
- **TikTok**: Hashtags help the algorithm categorize and recommend videos.
- **Facebook**: Hashtags work but are used less frequently.
- **LinkedIn**: Professional hashtags like #leadership or #hiring are common.

## Tips for Using Hashtags

- Use hashtags that are relevant to your post — do not use random popular ones hoping for more views.
- Mix popular hashtags with specific ones (e.g., #cooking and #beginner-soup-recipes).
- Do not overdo it. On most platforms, 3-5 relevant hashtags are effective.

## Quick Tip

Hashtags are not case-sensitive — #TechHelp and #techhelp work the same way. However, capitalizing the first letter of each word makes multi-word hashtags easier to read: #SocialMediaTips instead of #socialmediatips.

(Sources: How-To Geek, Buffer Blog, 2026)`,
  },
  {
    slug: 'stories',
    title: 'Stories (Social Media)',
    category: 'concept',
    tags: ['social-media', 'stories', 'content', 'photos', 'video'],
    lastUpdated: '2026-04-16',
    seeAlso: ['dm-direct-message', 'content-creator', 'using-facebook'],
    content: `## What Are Stories?

Stories are short pieces of content — photos, videos, or text — that disappear after 24 hours. They appear at the top of your feed in a horizontal strip of circles, each representing a different person or account. Tap one to view their story.

Stories were first popularized by Snapchat, and now Instagram, Facebook, WhatsApp, and even LinkedIn all offer them.

## How Stories Are Different from Regular Posts

- **Temporary**: Stories vanish after 24 hours (unless you save them to "Highlights" on Instagram).
- **Casual**: Stories are meant for quick, informal updates — what you are doing right now, a photo from your day, or a quick thought.
- **Full screen**: Stories take up your entire phone screen, making them more immersive.
- **Interactive**: You can add polls, quizzes, music, stickers, and text overlays.

## How to View and Post Stories

**Viewing**: Open the app and tap on any circular profile picture at the top of your feed. Tap the right side of the screen to skip forward, or the left side to go back.

**Posting**: Look for a "+" button next to your profile picture at the top of the feed, or swipe right from the main screen. Take a photo or video, add any effects, and share. You can choose who sees your stories in your privacy settings.

## Quick Tip

If you enjoy creating stories but want them to last longer than 24 hours, Instagram lets you save them as "Highlights" on your profile. This way, new visitors can see your past stories even after they have expired.

(Sources: Instagram Help, Facebook Help, How-To Geek, 2026)`,
  },
  {
    slug: 'dm-direct-message',
    title: 'DM (Direct Message)',
    category: 'concept',
    tags: ['social-media', 'messaging', 'dm', 'communication', 'private'],
    lastUpdated: '2026-04-16',
    seeAlso: ['stories', 'social-media-safety-guide', 'scam-prevention'],
    content: `## What Is a DM?

DM stands for Direct Message — a private message sent to another person on a social media platform. Unlike posts that are visible to your followers or the public, DMs are private conversations between you and one or more specific people.

## Where You Can Send DMs

Most social media platforms have a DM feature:

- **Instagram**: Tap the paper airplane icon in the top right.
- **Facebook Messenger**: Facebook's entire messaging system is built around DMs.
- **X (formerly Twitter)**: Tap the envelope icon.
- **TikTok**: Tap the inbox icon. Note: both users must follow each other to DM on TikTok.
- **LinkedIn**: Click the messaging icon to send professional messages.

## DM Safety Tips

DMs are a common tool for scammers because the messages feel personal and private. Protect yourself:

- **Do not click links from strangers.** Scammers send DMs with fake prize notifications, job offers, and urgent warnings.
- **Ignore messages asking for money or personal information**, even if they appear to come from someone you know — their account may have been hacked.
- **Be wary of "too good to be true" offers**: Free giveaways, investment opportunities, and romance scams often start in DMs.
- **Report and block** suspicious accounts.

## Quick Tip

Most platforms let you filter DMs from people you do not follow into a separate "Message Requests" folder. Check this folder occasionally, but be cautious — it is where most spam and scam messages end up.

(Sources: Instagram Help, FTC.gov, AARP, 2026)`,
  },
  {
    slug: 'influencer',
    title: 'Influencer',
    category: 'concept',
    tags: ['social-media', 'influencer', 'content', 'marketing', 'creator'],
    lastUpdated: '2026-04-16',
    seeAlso: ['content-creator', 'algorithm', 'engagement'],
    content: `## What Is an Influencer?

An influencer is a person who has built a large or dedicated following on social media and uses that audience to share opinions, recommendations, and sponsored content. Companies pay influencers to promote products because their followers trust their recommendations.

The term covers a wide range — from celebrities with millions of followers to everyday people with a few thousand followers who are experts in a specific topic like cooking, fitness, parenting, or technology.

## How Influencer Marketing Works

Brands partner with influencers to reach specific audiences. An influencer might:

- Post a photo wearing a brand's clothing.
- Film a video reviewing a product.
- Share a discount code with their followers.
- Create content showcasing how they use a service.

In the United States, influencers are required by the FTC to disclose when content is sponsored. Look for labels like "#ad," "#sponsored," or "Paid partnership" on posts.

## What to Watch Out For

Not all influencer recommendations are genuine. Some things to keep in mind:

- **Sponsored does not mean endorsed.** An influencer may promote a product because they are being paid, not because they truly use or believe in it.
- **Fake followers exist.** Some accounts inflate their follower counts by purchasing fake followers.
- **Do your own research.** Before buying something an influencer recommends, read independent reviews from sources like Consumer Reports or Wirecutter.

(Sources: FTC.gov, AARP, Pew Research Center, 2026)`,
  },
  {
    slug: 'engagement',
    title: 'Engagement (Social Media)',
    category: 'concept',
    tags: ['social-media', 'engagement', 'interaction', 'metrics', 'content'],
    lastUpdated: '2026-04-16',
    seeAlso: ['algorithm', 'going-viral', 'hashtag'],
    content: `## What Is Engagement?

In social media, engagement refers to any interaction people have with your content. This includes likes, comments, shares, saves, clicks, and views. When someone does any of these things, they are "engaging" with your post.

Engagement is the currency of social media. Platforms use engagement to measure how interesting or relevant content is, and the more engagement a post gets, the more people the algorithm shows it to.

## Types of Engagement

- **Likes/Reactions**: The quickest form of engagement. A thumbs up, heart, or emoji reaction.
- **Comments**: Written responses to a post. Comments signal higher interest than a like.
- **Shares/Reposts**: When someone shares your content with their own followers. This is one of the most valuable forms of engagement because it expands your reach.
- **Saves**: When someone bookmarks your post to view later. Platforms like Instagram weigh saves heavily.
- **Clicks**: When someone clicks a link, image, or profile from your post.
- **Views**: How many times a video or story has been watched.

## Why Engagement Matters

For everyday users, engagement determines what you see in your feed. Posts with high engagement get shown to more people, which is why some content seems to be everywhere while other posts go unnoticed.

## Quick Tip

If you want to see more content from a particular friend or page, engage with their posts — like, comment, or share. The algorithm will learn that you want to see more from that account and prioritize their content in your feed.

(Sources: Buffer Blog, How-To Geek, Hootsuite Blog, 2026)`,
  },
  {
    slug: 'content-creator',
    title: 'Content Creator',
    category: 'concept',
    tags: ['social-media', 'content-creator', 'video', 'creative', 'platform'],
    lastUpdated: '2026-04-16',
    seeAlso: ['influencer', 'stories', 'going-viral'],
    content: `## What Is a Content Creator?

A content creator is anyone who makes and shares original material online — videos, photos, articles, podcasts, illustrations, or other creative work. While the term is often associated with YouTube, TikTok, and Instagram, content creators work across all platforms and formats.

The key difference between a content creator and a casual social media user is intent: content creators regularly produce material for an audience, often building a following around a specific topic or niche.

## What Content Creators Do

Content creation takes many forms:

- **YouTube creators** produce videos ranging from tutorials to vlogs to documentaries.
- **TikTok creators** make short-form videos, often using trends, music, and humor.
- **Podcasters** create audio shows on every topic imaginable.
- **Bloggers** write articles and guides on personal websites.
- **Instagram creators** share photos, reels, and stories around themes like travel, food, or fashion.

## How Creators Earn Money

Many content creators turn their work into a career through:

- **Ad revenue**: YouTube pays creators based on how many people watch ads on their videos.
- **Sponsorships**: Brands pay creators to feature products in their content.
- **Subscriptions**: Platforms like Patreon let fans pay a monthly fee for exclusive content.
- **Merchandise**: Selling branded products to their audience.
- **Affiliate links**: Earning a commission when followers buy products through their links.

## Quick Tip

The most successful content creators tend to focus on a specific topic they are passionate about and post consistently. Quality and authenticity matter more than expensive equipment.

(Sources: How-To Geek, Pew Research Center, 2026)`,
  },
  {
    slug: 'going-viral',
    title: 'Going Viral',
    category: 'concept',
    tags: ['social-media', 'viral', 'trending', 'sharing', 'content'],
    lastUpdated: '2026-04-16',
    seeAlso: ['algorithm', 'engagement', 'hashtag'],
    content: `## What Does "Going Viral" Mean?

When a piece of content "goes viral," it means it is being shared, viewed, and engaged with at an explosive rate — spreading across the internet like a virus spreads between people. A viral post can reach millions of people within hours or days, far beyond the original poster's usual audience.

Viral content can be anything — a funny video, a heartwarming story, a catchy song, a meme, a news clip, or even a tweet. What makes it viral is the speed and scale at which people share it.

## How Content Goes Viral

There is no guaranteed formula, but viral content often shares common traits:

- **Emotional impact**: Content that makes people laugh, cry, feel inspired, or feel outraged gets shared more.
- **Relatability**: People share things they identify with — "This is so me" moments.
- **Timing**: Posting content that connects to a current event, trend, or cultural moment increases its chances.
- **Platform algorithms**: When a post gets a burst of early engagement, the algorithm shows it to more people, creating a snowball effect.

## The Downside of Going Viral

Going viral is not always positive:

- **Loss of control**: Once content is shared widely, you cannot control how it is used or interpreted.
- **Unwanted attention**: Viral fame can bring harassment, criticism, or invasion of privacy.
- **Misinformation**: False or misleading content can go viral and spread inaccurate information to millions of people.

## Quick Tip

Before sharing something that seems too shocking or unbelievable, verify it. Viral misinformation is a real problem. Check the source and search for fact-checks on sites like Snopes.com or FactCheck.org.

(Sources: Pew Research Center, How-To Geek, AARP, 2026)`,
  },

  // ─── Smart Home ────────────────────────────────────────────────────

  {
    slug: 'iot',
    title: 'IoT (Internet of Things)',
    category: 'synthesis',
    tags: ['smart-home', 'iot', 'connected-devices', 'internet', 'automation'],
    lastUpdated: '2026-04-16',
    seeAlso: ['smart-hub', 'voice-assistant', 'smart-plug'],
    content: `## What Is the Internet of Things?

The Internet of Things (IoT) refers to the growing network of everyday physical objects that connect to the internet and communicate with each other. These are not traditional computers or phones — they are things like thermostats, doorbells, light bulbs, refrigerators, and security cameras that have been made "smart" by adding internet connectivity.

Think of it this way: your phone has always been a connected device. IoT is about giving that same connectivity to objects that previously had no connection to the internet.

## IoT Devices You Might Already Own

- **Smart speakers** (Amazon Echo, Google Nest) — voice-controlled assistants connected to the internet.
- **Smart thermostats** (Nest, Ecobee) — learn your schedule and adjust your home temperature automatically.
- **Smart doorbells** (Ring, Google Nest Doorbell) — let you see and talk to visitors from your phone.
- **Smart light bulbs** (Philips Hue, LIFX) — controllable by voice or app, with customizable colors and schedules.
- **Smart plugs** — turn any regular appliance into a smart device you can control remotely.

## Security Considerations

Every IoT device is a potential entry point for hackers. Protect your smart home:

- Change default passwords on all devices.
- Keep device firmware updated.
- Use a separate Wi-Fi network (guest network) for smart devices.
- Buy from reputable brands that provide regular security updates.

(Sources: CISA.gov, How-To Geek, Tom's Guide, 2026)`,
  },
  {
    slug: 'smart-hub',
    title: 'Smart Hub',
    category: 'concept',
    tags: ['smart-home', 'hub', 'automation', 'control', 'connected'],
    lastUpdated: '2026-04-16',
    seeAlso: ['iot', 'voice-assistant', 'zigbee-zwave'],
    content: `## What Is a Smart Hub?

A smart hub is a central device that connects and controls all your smart home gadgets from one place. Instead of using a separate app for your lights, another for your thermostat, and another for your doorbell, a smart hub brings everything together.

Think of it like the conductor of an orchestra. Each musician (smart device) can play on their own, but the conductor coordinates them all to work together harmoniously.

## Why You Might Need a Smart Hub

- **Unified control**: Manage all your smart devices from one app or interface.
- **Automation**: Create routines like "When I leave the house, turn off all lights, lock the door, and lower the thermostat."
- **Device compatibility**: Some smart devices use communication protocols like Zigbee or Z-Wave that require a hub to connect to your network.
- **Reliability**: A hub can help devices communicate locally (without depending on the internet), which can make your smart home faster and more reliable.

## Popular Smart Hubs

- **Amazon Echo (with Zigbee hub)**: Doubles as a smart speaker and a hub for Zigbee devices.
- **Apple HomePod / Apple TV**: Acts as a hub for Apple HomeKit-compatible devices.
- **Samsung SmartThings**: Supports a wide range of devices and protocols.
- **Google Nest Hub**: Controls Google Home-compatible devices with a touchscreen.

## Quick Tip

Before buying a smart hub, make a list of the smart devices you already own and check what protocols they use. This helps you choose a hub that is compatible with your existing setup.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'voice-assistant',
    title: 'Voice Assistant',
    category: 'concept',
    tags: ['smart-home', 'voice', 'assistant', 'ai', 'hands-free'],
    lastUpdated: '2026-04-16',
    seeAlso: ['smart-hub', 'iot', 'using-voice-assistants'],
    content: `## What Is a Voice Assistant?

A voice assistant is software that listens to your voice commands and responds by performing tasks, answering questions, or controlling devices. You activate it by saying a wake word — "Hey Siri," "Alexa," or "Hey Google" — and then ask it what you need.

Voice assistants live on your phone, smart speaker, or other devices and connect to the internet to process your requests.

## Major Voice Assistants

- **Siri** (Apple): Built into iPhones, iPads, Macs, Apple Watch, and HomePod. Works best within the Apple ecosystem.
- **Alexa** (Amazon): Powers Amazon Echo speakers and many third-party devices. Has the largest library of "skills" (add-on capabilities).
- **Google Assistant** (Google): Built into Android phones, Google Nest speakers, and many smart home devices. Excels at answering questions and web searches.

## What Voice Assistants Can Do

- Set timers and alarms.
- Play music or podcasts.
- Check the weather forecast.
- Control smart home devices (lights, thermostat, locks).
- Send text messages and make phone calls (hands-free).
- Answer general knowledge questions.
- Set reminders and calendar events.
- Read the news headlines.

## Privacy Considerations

Voice assistants are always listening for their wake word. This raises privacy concerns:

- Review and delete your voice history regularly in the assistant's settings.
- Mute the microphone when you do not want the device listening.
- Understand that voice recordings may be stored on company servers.

(Sources: Apple Support, Amazon Alexa Help, Google Support, 2026)`,
  },
  {
    slug: 'zigbee-zwave',
    title: 'Zigbee and Z-Wave',
    category: 'concept',
    tags: ['smart-home', 'zigbee', 'z-wave', 'protocol', 'wireless'],
    lastUpdated: '2026-04-16',
    seeAlso: ['smart-hub', 'iot', 'wifi-networking'],
    content: `## What Are Zigbee and Z-Wave?

Zigbee and Z-Wave are wireless communication protocols designed specifically for smart home devices. They are alternatives to Wi-Fi and Bluetooth for connecting things like smart light bulbs, sensors, locks, and switches.

Think of them as different languages that smart devices speak. Some devices speak "Zigbee," others speak "Z-Wave," and others speak "Wi-Fi." For devices to work together, they need to speak the same language or use a translator (a smart hub).

## Why Not Use Wi-Fi for Everything?

Wi-Fi is great for phones and laptops, but it has limitations for smart home devices:

- **Power consumption**: Wi-Fi uses more energy. Small battery-powered sensors would drain quickly on Wi-Fi.
- **Network congestion**: Each Wi-Fi device takes up space on your network. A home with 30+ smart devices could overwhelm a standard router.
- **Range**: Zigbee and Z-Wave devices create a "mesh network" — each device acts as a signal relay, extending coverage through your home.

## Zigbee vs. Z-Wave

- **Zigbee**: Used by Amazon Echo Plus, Philips Hue lights, and many Samsung SmartThings devices. Supports more devices on one network.
- **Z-Wave**: Used by many locks, sensors, and security systems. Each device has a unique ID, reducing interference. Limited to about 232 devices per network.

## Matter: The Future Standard

A newer protocol called **Matter** aims to unify smart home communication. Backed by Apple, Google, Amazon, and Samsung, Matter allows devices to work together regardless of brand or protocol. Many new smart devices now support Matter.

(Sources: How-To Geek, Tom's Guide, Connectivity Standards Alliance, 2026)`,
  },
  {
    slug: 'geofencing',
    title: 'Geofencing',
    category: 'concept',
    tags: ['smart-home', 'geofencing', 'location', 'automation', 'gps'],
    lastUpdated: '2026-04-16',
    seeAlso: ['iot', 'smart-hub', 'voice-assistant'],
    content: `## What Is Geofencing?

Geofencing is a technology that uses your phone's GPS location to trigger automatic actions when you enter or leave a specific area. It creates an invisible virtual boundary — a "fence" — around a location, and when your phone crosses that boundary, something happens.

Think of it like an automatic welcome mat that notices when you arrive home and turns on the lights for you.

## How Geofencing Is Used

- **Smart home automation**: Your thermostat can start heating or cooling your home when your phone gets within a mile of your house, and lower the temperature when you leave.
- **Reminder apps**: Set a reminder to "buy milk" that triggers when you arrive at the grocery store.
- **Smart lighting**: Lights turn on when you arrive home and off when you leave.
- **Security systems**: Your alarm can automatically arm when everyone in the household has left and disarm when the first person returns.
- **Retail**: Some stores send promotional notifications to your phone when you walk near their location.

## Setting Up Geofencing

Most smart home apps (Google Home, Apple Home, SmartThings) include geofencing options. You set the location and radius of your "fence," choose which actions to trigger, and select which family members' phones to track.

## Privacy Considerations

Geofencing relies on your phone's location services. Review which apps have access to your location in Settings > Privacy > Location Services (iPhone) or Settings > Location (Android). Grant "Always" location access only to apps you fully trust.

(Sources: How-To Geek, Tom's Guide, Apple Support, 2026)`,
  },
  {
    slug: 'smart-plug',
    title: 'Smart Plug',
    category: 'concept',
    tags: ['smart-home', 'smart-plug', 'automation', 'devices', 'power'],
    lastUpdated: '2026-04-16',
    seeAlso: ['iot', 'voice-assistant', 'smart-hub'],
    content: `## What Is a Smart Plug?

A smart plug is a small device that plugs into a standard wall outlet. You then plug any regular appliance — a lamp, fan, coffee maker, or space heater — into the smart plug. This lets you control that appliance remotely using an app on your phone or through a voice assistant like Alexa or Google Assistant.

A smart plug is the most affordable and approachable way to start building a smart home because it turns things you already own into smart devices.

## What You Can Do with Smart Plugs

- **Turn devices on and off remotely**: Forgot to turn off the living room lamp? Open the app and turn it off from anywhere.
- **Set schedules**: Program your coffee maker to start at 6:30 AM every morning, or your bedroom lamp to turn on at sunset.
- **Use voice control**: Say "Alexa, turn off the fan" to control any device plugged into a smart plug.
- **Monitor energy use**: Some smart plugs track how much electricity a device is using, helping you spot energy hogs.
- **Automate routines**: Pair with other smart home devices — when your smart doorbell detects you arriving home, the smart plug turns on the hallway lamp.

## Popular Smart Plug Brands

- **Amazon Smart Plug**: Works with Alexa out of the box.
- **TP-Link Kasa**: Affordable, reliable, works with Alexa and Google Assistant.
- **Wyze Plug**: Budget-friendly with good features.
- **Apple HomeKit-compatible plugs**: Work with Siri and the Apple Home app.

## Quick Tip

Smart plugs work best with devices that have a physical on/off switch (like a lamp or fan). They cannot control devices that require you to press a digital button to turn on, since the plug can only cut or restore power — it cannot press buttons.

(Sources: How-To Geek, Tom's Guide, CNET, 2026)`,
  },

  // ─── Finance & Payments ────────────────────────────────────────────

  {
    slug: 'digital-wallet',
    title: 'Digital Wallet',
    category: 'concept',
    tags: ['finance', 'payments', 'wallet', 'mobile', 'contactless'],
    lastUpdated: '2026-04-16',
    seeAlso: ['contactless-payment', 'nfc', 'cryptocurrency'],
    content: `## What Is a Digital Wallet?

A digital wallet is an app on your phone that stores your credit cards, debit cards, and sometimes loyalty cards, ID cards, and transit passes. Instead of pulling out a physical card, you hold your phone near a payment terminal to pay.

Think of it as a virtual version of the wallet in your pocket — it holds the same cards, but they are stored securely on your phone.

## Popular Digital Wallets

- **Apple Pay**: Built into iPhones and Apple Watch. Works with Face ID or fingerprint verification.
- **Google Wallet**: For Android phones. Stores cards, boarding passes, and event tickets.
- **Samsung Pay**: For Samsung devices. Also supports magnetic stripe terminals (older card readers).
- **PayPal**: An online wallet that works on websites, apps, and in some stores.
- **Venmo**: Owned by PayPal. Popular for sending money between friends.

## How to Set Up a Digital Wallet

1. Open the wallet app on your phone (Wallet on iPhone, Google Wallet on Android).
2. Tap "Add Card" or the "+" button.
3. Scan your physical card with your phone's camera or type in the card details.
4. Your bank will verify the card — this may involve a text message or a call.
5. Once verified, you can use your phone to pay anywhere that accepts contactless payments.

## Is It Safe?

Digital wallets are actually more secure than physical cards. They use tokenization — instead of sharing your real card number during a purchase, the wallet generates a unique temporary number for each transaction. If that number is stolen, it cannot be reused.

(Sources: Apple Support, Google Support, FTC.gov, 2026)`,
  },
  {
    slug: 'cryptocurrency',
    title: 'Cryptocurrency',
    category: 'concept',
    tags: ['finance', 'crypto', 'bitcoin', 'digital-currency', 'blockchain'],
    lastUpdated: '2026-04-16',
    seeAlso: ['blockchain', 'digital-wallet', 'encryption'],
    content: `## What Is Cryptocurrency?

Cryptocurrency is digital money that exists entirely online. Unlike dollars or euros, it is not issued or controlled by any government or central bank. Instead, it uses encryption and a technology called blockchain to verify transactions and prevent fraud.

The most well-known cryptocurrency is **Bitcoin**, created in 2009. Others include **Ethereum**, **Solana**, and thousands of smaller tokens.

## How Cryptocurrency Works

Traditional money flows through banks. When you send someone $50, your bank verifies you have the money, deducts it from your account, and adds it to theirs. Cryptocurrency does the same thing but without a bank in the middle. Instead, a decentralized network of computers verifies and records every transaction on a public ledger called a blockchain.

## Important Things to Know

- **Volatile**: Cryptocurrency prices can swing wildly. Bitcoin has gained and lost thousands of dollars in value within days.
- **Not insured**: Unlike bank deposits protected by FDIC insurance, cryptocurrency is not protected if the platform you use goes bankrupt or gets hacked.
- **Irreversible transactions**: If you send crypto to the wrong address, there is no customer service to reverse it.
- **Scam magnet**: Cryptocurrency is a frequent tool for fraud. Be extremely cautious of anyone asking you to pay in crypto or promising guaranteed returns.

## Quick Tip

If someone contacts you — especially through social media, email, or phone — demanding payment in cryptocurrency, it is almost certainly a scam. Legitimate businesses and government agencies do not require cryptocurrency payments.

(Sources: FTC.gov, CISA.gov, SEC.gov, 2026)`,
  },
  {
    slug: 'blockchain',
    title: 'Blockchain',
    category: 'concept',
    tags: ['finance', 'blockchain', 'technology', 'crypto', 'ledger'],
    lastUpdated: '2026-04-16',
    seeAlso: ['cryptocurrency', 'encryption', 'digital-wallet'],
    content: `## What Is Blockchain?

A blockchain is a digital record-keeping system — a ledger — that stores information across a network of computers rather than in one central location. Each "block" in the chain contains a batch of transaction records, and each new block is linked to the previous one, forming an unbreakable chain.

Think of it like a notebook where every time you write an entry, it gets verified by thousands of people and locked in permanently. No single person can go back and change what was written without everyone noticing.

## How Blockchain Works

1. Someone initiates a transaction (like sending cryptocurrency to another person).
2. The transaction is broadcast to a network of computers around the world.
3. These computers verify that the transaction is legitimate.
4. Once verified, the transaction is grouped with others into a "block."
5. The block is added to the existing chain of blocks — permanently.
6. The transaction is complete.

## Why Blockchain Matters

- **Transparency**: Anyone can view the blockchain and verify transactions.
- **Security**: Altering any single block would require changing every subsequent block across thousands of computers simultaneously — making tampering practically impossible.
- **Decentralization**: No single company, bank, or government controls the ledger.

## Beyond Cryptocurrency

While blockchain is best known for powering Bitcoin and other cryptocurrencies, the technology has other applications, including supply chain tracking, digital identity verification, and secure medical record sharing.

## Quick Tip

Blockchain is the technology behind cryptocurrency, but they are not the same thing. Blockchain is the system; cryptocurrency is one use of that system.

(Sources: How-To Geek, IBM Blockchain, MIT Technology Review, 2026)`,
  },
  {
    slug: 'contactless-payment',
    title: 'Contactless Payment',
    category: 'concept',
    tags: ['finance', 'payments', 'contactless', 'tap', 'nfc'],
    lastUpdated: '2026-04-16',
    seeAlso: ['digital-wallet', 'nfc', 'encryption'],
    content: `## What Is Contactless Payment?

Contactless payment lets you pay for purchases by tapping or holding your credit card, debit card, phone, or smartwatch near a payment terminal — without swiping, inserting a chip, or entering a PIN for small transactions. The entire process takes about a second.

You will see a symbol that looks like a sideways Wi-Fi icon on cards and terminals that support contactless payment.

## How It Works

Contactless payment uses NFC (Near Field Communication) technology. When you tap your card or phone against the terminal, it transmits an encrypted, one-time code that represents your payment information. Your actual card number is never shared with the store.

## Ways to Pay Contactlessly

- **Tap your card**: Most credit and debit cards issued in recent years have a built-in contactless chip.
- **Use your phone**: Apple Pay, Google Pay, and Samsung Pay turn your phone into a contactless payment device.
- **Use your smartwatch**: Apple Watch and many Android smartwatches support tap-to-pay.

## Is Contactless Payment Safe?

Yes — contactless payments are generally more secure than swiping a magnetic stripe card. Here is why:

- **Tokenization**: Each transaction uses a unique code, so your real card number is never exposed.
- **Short range**: NFC works within 1-2 inches, so someone cannot intercept the signal from a distance.
- **Authentication**: Phone-based payments require Face ID, fingerprint, or a PIN before they work.

## Quick Tip

If you are worried about someone skimming your contactless card, know that the risk is extremely low due to the encryption and tokenization built into the technology. However, you can always use your phone's digital wallet for an extra layer of authentication.

(Sources: Visa.com, Apple Support, How-To Geek, 2026)`,
  },
  {
    slug: 'ach-transfer',
    title: 'ACH Transfer',
    category: 'concept',
    tags: ['finance', 'banking', 'ach', 'transfer', 'payments'],
    lastUpdated: '2026-04-16',
    seeAlso: ['digital-wallet', 'online-banking-safety', 'contactless-payment'],
    content: `## What Is an ACH Transfer?

ACH stands for Automated Clearing House. An ACH transfer is an electronic payment that moves money directly from one bank account to another through a centralized network. It is one of the most common ways money moves in the United States.

Think of it like a digital version of writing a check — the money moves from your bank to another bank, but electronically and usually faster.

## Where ACH Transfers Are Used

You likely use ACH transfers regularly without knowing it:

- **Direct deposit**: Your paycheck going from your employer's bank to your bank account.
- **Bill pay**: Paying rent, utilities, or insurance directly from your bank.
- **Government payments**: Social Security, tax refunds, and stimulus payments are sent via ACH.
- **Person-to-person apps**: Venmo, Zelle, and PayPal use ACH to move money between bank accounts.
- **Online purchases**: Some websites let you pay directly from your bank account.

## ACH Transfer Timing

- **Standard ACH**: Takes 1-3 business days.
- **Same-day ACH**: Available for an extra fee from some banks and services. Funds arrive the same business day.

## Security Tips

- Only provide your bank account and routing numbers to trusted organizations.
- Set up account alerts so you are notified of any incoming or outgoing ACH transactions.
- If you see an unauthorized ACH debit on your account, report it to your bank immediately — federal regulations give you 60 days to dispute an unauthorized transaction.

## Quick Tip

Wire transfers and ACH transfers are different. Wire transfers are faster (often same-day) but cost $15-30 per transaction. ACH transfers are free or low-cost but take 1-3 days. For most routine payments, ACH is the better option.

(Sources: Nacha.org, Consumer Financial Protection Bureau, NerdWallet, 2026)`,
  },

  // ─── Emerging Tech ─────────────────────────────────────────────────

  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    category: 'synthesis',
    tags: ['emerging-tech', 'ai', 'technology', 'automation', 'future'],
    lastUpdated: '2026-04-16',
    seeAlso: ['machine-learning', 'voice-assistant', 'algorithm'],
    content: `## What Is Artificial Intelligence?

Artificial intelligence (AI) is technology that enables computers to perform tasks that normally require human intelligence — like understanding language, recognizing images, making decisions, and solving problems. AI is behind many tools you already use daily, from the suggestions in your email to the voice assistant on your phone.

AI does not mean robots that think like humans. In practice, today's AI is highly specialized: an AI that can recognize faces in photos cannot play chess, and an AI that can write text cannot drive a car.

## AI You Already Use

- **Voice assistants**: Siri, Alexa, and Google Assistant use AI to understand and respond to your questions.
- **Email spam filters**: AI identifies and blocks junk mail before it reaches your inbox.
- **Photo apps**: AI recognizes faces in your photos and groups them together.
- **Autocorrect and predictive text**: AI suggests words as you type.
- **Navigation apps**: Google Maps and Waze use AI to predict traffic and suggest faster routes.
- **Streaming recommendations**: Netflix, Spotify, and YouTube use AI to suggest content you might enjoy.

## AI Chatbots

AI chatbots like ChatGPT, Claude, and Google Gemini can have conversations, answer questions, help with writing, summarize information, and much more. They generate responses by analyzing patterns in large amounts of text.

## Things to Keep in Mind

- AI can make mistakes. Always verify important information from AI tools.
- AI learns from data, and that data can contain biases.
- Be cautious about sharing personal information with AI tools — read their privacy policies.

(Sources: MIT Technology Review, How-To Geek, AARP, 2026)`,
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    category: 'concept',
    tags: ['emerging-tech', 'machine-learning', 'ai', 'data', 'patterns'],
    lastUpdated: '2026-04-16',
    seeAlso: ['artificial-intelligence', 'algorithm', 'cloud-computing'],
    content: `## What Is Machine Learning?

Machine learning is a branch of artificial intelligence where computers learn from data and experience rather than being explicitly programmed for every task. Instead of a programmer writing rules for every possible situation, the computer analyzes large amounts of data, finds patterns, and uses those patterns to make predictions or decisions.

Think of it like teaching a child to recognize dogs. You do not give the child a checklist of rules ("four legs, fur, tail"). Instead, you show them hundreds of pictures of dogs, and they learn to recognize dogs on their own — even breeds they have never seen before.

## How Machine Learning Works

1. **Training**: The system is fed large amounts of data (images, text, numbers, etc.).
2. **Learning**: The system finds patterns and relationships in the data.
3. **Predicting**: When given new data, the system uses what it learned to make predictions.

The more data the system is trained on, the better its predictions tend to be.

## Machine Learning in Everyday Life

- **Email**: Gmail uses machine learning to sort emails into Primary, Social, and Promotions tabs.
- **Shopping**: Amazon recommends products based on your browsing and purchase history.
- **Healthcare**: Machine learning helps doctors detect diseases in medical images.
- **Fraud detection**: Banks use machine learning to flag suspicious transactions on your account.
- **Photo search**: Google Photos lets you search your photos by typing descriptions like "beach" or "birthday."

## Quick Tip

Machine learning is the engine behind many AI features you interact with daily. When an app gets better at predicting what you want over time, that improvement is machine learning at work.

(Sources: Google AI, MIT Technology Review, How-To Geek, 2026)`,
  },
  {
    slug: 'augmented-reality',
    title: 'Augmented Reality (AR)',
    category: 'concept',
    tags: ['emerging-tech', 'ar', 'augmented-reality', 'visual', 'technology'],
    lastUpdated: '2026-04-16',
    seeAlso: ['artificial-intelligence', '5g', 'smartphone-basics'],
    content: `## What Is Augmented Reality?

Augmented reality (AR) overlays digital information — images, text, animations — on top of the real world, viewed through your phone's camera, tablet screen, or special glasses. Unlike virtual reality (VR), which replaces the real world with a completely artificial one, AR adds to what you are already seeing.

Think of it like looking through a magic magnifying glass that shows you extra information floating over real objects.

## AR You Might Have Already Used

- **Snapchat and Instagram filters**: Those face filters that add bunny ears, hats, or change your appearance are AR.
- **Google Maps Live View**: Hold up your phone while walking, and AR arrows appear overlaid on the real street to guide you.
- **IKEA Place app**: Lets you see how a piece of furniture would look in your room before you buy it, using your phone's camera.
- **Pokémon GO**: The mobile game that placed virtual creatures in real-world locations through your phone's camera.
- **Apple Measure app**: Uses AR to measure real objects by pointing your phone's camera at them.

## AR Glasses

Apple's Vision Pro and Meta's smart glasses represent the next step in AR — wearing a device that blends digital content with the real world hands-free. While still expensive and early-stage, AR glasses are expected to become more mainstream in coming years.

## Quick Tip

You do not need special equipment to try AR. Open your phone's camera, go to Google Search, and type something like "tiger" — Google will let you view a 3D tiger in your room through your camera using AR.

(Sources: How-To Geek, Apple Support, Tom's Guide, 2026)`,
  },
  {
    slug: '5g',
    title: '5G',
    category: 'concept',
    tags: ['emerging-tech', '5g', 'mobile', 'network', 'speed'],
    lastUpdated: '2026-04-16',
    seeAlso: ['bandwidth', 'latency', 'isp'],
    content: `## What Is 5G?

5G is the fifth generation of mobile network technology — the system that lets your phone connect to the internet when you are away from Wi-Fi. Each generation has been faster and more capable than the last. 5G brings significantly faster speeds, lower latency, and the ability to connect more devices at once compared to 4G LTE.

## How 5G Compares

- **3G**: Made basic smartphone internet possible (email, simple web browsing).
- **4G LTE**: Enabled streaming video, video calls, and fast app downloads. This is what most people use today.
- **5G**: Offers speeds up to 10 times faster than 4G, with much lower delay (latency). Downloading a full movie could take seconds instead of minutes.

## Types of 5G

Not all 5G is the same:

- **Low-band 5G**: Wide coverage but modest speed improvements over 4G. This is the most common type.
- **Mid-band 5G**: Good balance of speed and coverage. Growing quickly in availability.
- **High-band 5G (mmWave)**: Extremely fast but very short range. Works best in dense urban areas and stadiums.

## Do You Need a 5G Phone?

If your current phone works well for your needs, there is no rush to upgrade. 4G LTE is not going away soon and handles streaming, video calls, and web browsing well. However, most new phones sold today include 5G, so your next phone will likely support it.

## Quick Tip

5G performance depends heavily on your location and carrier. In areas with strong 5G coverage, you will notice faster downloads and smoother streaming. In areas with limited coverage, your phone may fall back to 4G — which is completely normal.

(Sources: Tom's Guide, How-To Geek, CNET, 2026)`,
  },
  {
    slug: 'quantum-computing',
    title: 'Quantum Computing',
    category: 'concept',
    tags: ['emerging-tech', 'quantum', 'computing', 'future', 'technology'],
    lastUpdated: '2026-04-16',
    seeAlso: ['artificial-intelligence', 'encryption', 'cpu'],
    content: `## What Is Quantum Computing?

Quantum computing is an advanced form of computing that uses the principles of quantum physics to process information in fundamentally different ways than regular computers. While a traditional computer works with bits that are either 0 or 1 (like a light switch that is on or off), a quantum computer uses **qubits** that can be 0, 1, or both at the same time.

Think of it this way: a regular computer tries to solve a maze by going down one path at a time. A quantum computer can explore many paths simultaneously, making it extraordinarily powerful for certain types of problems.

## What Quantum Computers Are Good At

Quantum computers are not faster versions of regular computers. They excel at specific tasks that would take traditional computers millions of years to solve:

- **Breaking encryption**: Quantum computers could theoretically crack the encryption that protects online banking and communications (which is why researchers are developing quantum-resistant encryption).
- **Drug discovery**: Simulating molecular interactions to speed up the development of new medicines.
- **Logistics and optimization**: Finding the most efficient routes, schedules, or resource allocations.
- **Climate modeling**: Processing complex weather and climate simulations.

## Where Quantum Computing Stands Today

Quantum computing is still in its early stages. Current quantum computers are fragile, expensive, and require extreme cooling (near absolute zero). They are not replacing your laptop or phone anytime soon. Major companies like IBM, Google, and Microsoft are leading quantum research.

## Quick Tip

You do not need to worry about quantum computing affecting your daily life right now. But it is worth knowing about because it will likely reshape areas like medicine, security, and artificial intelligence in the coming decades.

(Sources: IBM Quantum, MIT Technology Review, How-To Geek, 2026)`,
  },
];

/** Look up a wiki page by slug */
export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find(p => p.slug === slug);
}
