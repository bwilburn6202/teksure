// guides-batch-145 — 4 senior-priority guides published 2026-05-06
// Topics: Venmo/Zelle safety, cloud storage explained, Lyft/Uber how-to, clearing browser history
// Sources: FTC.gov, CFPB, Google Support, Apple Support, Microsoft Support, AARP, How-To Geek

import type { Guide } from './guides';

export const guidesBatch145: Guide[] = [
  {
    slug: 'how-to-use-venmo-zelle-safely-seniors-2026',
    title: 'How to Use Venmo and Zelle Safely',
    excerpt:
      'Learn what Venmo and Zelle are, how they differ, and the golden rules that keep your money safe when paying people digitally.',
    category: 'online-banking',
    tags: ['venmo', 'zelle', 'payment apps', 'scams', 'money transfer', 'banking', 'fraud'],
    readTime: '8 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Venmo and Zelle are apps that let you send money to another person using your phone — no cash, no checks, no waiting in line at the bank. They are popular for splitting a restaurant bill, paying a grandchild back, or chipping in for a group gift. Millions of Americans use them every day without any problems. But both apps have become targets for scammers, so before you send a single dollar, it pays to understand how they work and what to watch out for.

## What Is Zelle?

Zelle is built directly into the mobile apps of most major US banks — Bank of America, Chase, Wells Fargo, and hundreds of others. When you send money through Zelle, the funds move from your bank account to the other person's bank account in minutes, sometimes seconds. Because your bank is running the transfer, you do not need to download a separate app — look for a "Zelle" or "Send Money" tab inside your existing banking app.

**The critical thing to know about Zelle:** payments are almost always instant and cannot be reversed. If you send money to the wrong person, or if you are tricked into sending money by a scammer, your bank may not be able to get it back. Always double-check the phone number or email address of the person you are paying before you tap "Send."

## What Is Venmo?

Venmo is a separate app made by PayPal. You download it, create a free account, and link your bank account or debit card. Unlike Zelle, Venmo holds your money in a Venmo balance first. Transfers to your bank account take one to three business days unless you pay a small fee for an instant transfer. Venmo also has a social feed that shows your friends' payments — you can and should turn this off in your privacy settings (see Step 4 below).

## Key Differences at a Glance

| | Zelle | Venmo |
|---|---|---|
| Where it lives | Inside your bank's app | Separate Venmo app |
| How long transfers take | Minutes | 1–3 days (free) or minutes (fee) |
| Cost | Free | Free (standard); small fee for instant |
| Social feed | No | Yes — turn it off |
| Can payments be reversed? | Rarely | Rarely |

## The Golden Rule

**Only send money to people you know in person.** Both apps are designed for friends and family. They are not designed for buying items from strangers online, paying someone you met on a dating site, or sending money to someone who says they are in an emergency.

## Common Scams to Watch For

**Fake "Zelle Alert" text from your bank.** You get a text that looks like it is from your bank asking you to confirm a large Zelle payment you did not make. You reply "No," and then someone calls claiming to be bank fraud support. They walk you through "canceling" the transfer — which is actually a new payment to the scammer. Your real bank will never ask you to send money to stop fraud.

**Emergency scam.** Someone pretends to be your grandchild or a close friend who is in trouble and needs money right away. They beg you not to tell anyone. Hang up, call the person directly on the number you already have for them, and confirm the story before you do anything.

**Fake buyer or seller.** You are selling something online, and the buyer says they will pay you through Zelle. You get what looks like a Zelle email saying you received payment, but it is a fake. Or a scammer "accidentally" sends you more than the price and asks you to send the difference back. Never send money back to someone who claims to have overpaid.

**Overpayment scam with Venmo.** Someone buys something from you, pays on Venmo, then asks for a refund. The original payment was made with a stolen card and gets reversed by Venmo later, but your refund is already gone.

## Protecting Yourself: Key Settings to Enable

- **Zelle:** There are no special privacy settings — your best protection is only paying people you trust and always confirming the recipient's information before you send.
- **Venmo:** Go to Settings > Privacy and change your default privacy setting from "Friends" or "Public" to "Private." This hides your payment history from strangers.
- **Strong PIN or Face ID:** Both apps let you require a fingerprint or face scan before any payment goes through. Turn this on.
- **Notifications:** Turn on transaction alerts so you get an immediate text or email any time money moves.

## What to Do If Something Goes Wrong

If you believe you were scammed, act quickly:

1. Call your bank's fraud line (the number on the back of your debit card) right away.
2. Report the scam to the FTC at ReportFraud.ftc.gov.
3. If you sent money through Zelle, also file a report at the Zelle Help Center (zellepay.com).
4. If you sent money through Venmo, open the app, find the payment, and tap "Get Help."

Recovery is not guaranteed, but reporting quickly gives you the best chance. The Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov also has resources if your bank refuses to help.

**Sources:** FTC.gov — "Sending Money Using Mobile Payment Apps"; CFPB — "Peer-to-Peer Payments"; Zelle — zellepay.com/pay-it-safe; AARP Fraud Watch Network.`,
    steps: [
      {
        title: 'Find out if your bank already has Zelle',
        content:
          'Open your bank\'s app and look for a tab that says "Zelle," "Send Money," or "Pay People." Most major US banks include Zelle at no charge. If you see it, you already have access — no download needed.',
        tip: 'Not sure if your bank has Zelle? Visit zellepay.com and tap "Find Your Bank" to check.',
      },
      {
        title: 'Set up Venmo if you need it',
        content:
          'If your bank does not have Zelle, or if the person you are paying prefers Venmo, download the Venmo app from the App Store (iPhone) or Google Play Store (Android). Create an account with your name and email address, then link your bank account or debit card. Venmo will make two small test deposits in your bank account — check your bank statement in a day or two and enter those amounts in Venmo to confirm your account.',
        warning:
          'Only download Venmo from the official App Store or Google Play Store. Search "Venmo" and look for the blue logo from PayPal, Inc.',
      },
      {
        title: 'Send a payment safely',
        content:
          'Before you tap "Send," verify the recipient\'s phone number or email address out loud with them. On Zelle, a profile picture or name will appear if the number is registered — confirm it matches the person you expect. On Venmo, search the person\'s username and confirm the photo and name are correct. Start with a small test payment (like $1) if you are paying someone for the first time.',
        warning:
          'Payments sent to the wrong number or a scammer are almost never recoverable. Take an extra 30 seconds to confirm before you send.',
      },
      {
        title: 'Turn on privacy settings in Venmo',
        content:
          'Open the Venmo app, tap the three lines in the top-right corner, then tap "Settings," then "Privacy." Change "Default Privacy Setting" to "Private." This means strangers cannot see your payment history. Also consider turning off "Appear in other users\' friends lists."',
        tip: 'Your payment history is visible to the public by default in Venmo. Changing it to Private takes less than one minute and is strongly recommended.',
      },
      {
        title: 'Turn on transaction alerts',
        content:
          'In your bank app or Venmo, go to Settings > Notifications and turn on alerts for every transaction. This way, if any payment goes through without your knowledge, you will find out within seconds and can call your bank immediately.',
      },
      {
        title: 'Know what to do if you suspect a scam',
        content:
          'If you receive an unexpected "Zelle alert" by text or a call from someone claiming to be your bank\'s fraud department, hang up and call your bank directly using the number printed on the back of your debit card. Never send money at the instruction of someone who called you — your real bank will never ask you to do that.',
        warning:
          'If you have already sent money and believe it was a scam, call your bank\'s fraud line immediately. Then report it to the FTC at ReportFraud.ftc.gov.',
      },
    ],
  },

  {
    slug: 'what-is-cloud-storage-and-how-to-use-it-2026',
    title: 'What Is Cloud Storage and How Do You Use It?',
    excerpt:
      'A plain-English explanation of "the cloud" — what it is, how iCloud, Google Drive, and OneDrive compare, and how to save a file or photo today.',
    category: 'tech-explained',
    tags: [
      'cloud storage',
      'iCloud',
      'Google Drive',
      'OneDrive',
      'Dropbox',
      'backup',
      'files',
      'photos',
    ],
    readTime: '9 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `You have probably heard the phrase "saved to the cloud" or "it's in the cloud." It sounds mysterious — like your files are floating somewhere in the sky. In reality, "the cloud" is much simpler than that.

## What the Cloud Actually Is

The cloud is a collection of large buildings full of computers and hard drives, owned by companies like Apple, Google, and Microsoft. Those computers are connected to the internet. When you save a file "to the cloud," you are uploading a copy of that file to one of those computers — and you can get it back from any device with internet access.

Think of it like a safe-deposit box at a bank. You put something in, and you can go back and get it whenever you need it, from any branch. The bank keeps it safe so even if your house burned down, your important things would still be there.

## Why Cloud Storage Matters for You

Here is the most important reason to use cloud storage: if your phone is lost, stolen, dropped in water, or breaks down, all your photos and documents are still safe. They are on the cloud, not only on the phone. You can get a new phone, sign in with your account, and everything comes back.

Cloud storage also lets you share things with family easily — send a photo album link instead of texting photos one by one.

## The Four Main Cloud Storage Services

### iCloud (Apple)
- **Who it's for:** People who use an iPhone, iPad, or Mac.
- **Free storage:** 5 GB (enough for roughly 2,000 photos at average size).
- **Cost for more:** $0.99/month for 50 GB; $2.99/month for 200 GB.
- **What it does:** Automatically backs up your phone, syncs your photos across all your Apple devices, and saves your contacts and messages.
- **Where to find it:** Go to Settings on your iPhone, tap your name at the top, then tap "iCloud."

### Google Drive
- **Who it's for:** Android phone users, Gmail users, and anyone who wants a free option regardless of device.
- **Free storage:** 15 GB — shared across Gmail, Google Drive, and Google Photos. This is the most generous free plan.
- **Cost for more:** $2.99/month for 100 GB (called Google One).
- **What it does:** Stores files, photos, and documents. Google Docs (like Word) and Google Sheets (like Excel) are part of the same service and do not count against your storage.
- **Where to find it:** Download the "Google Drive" app, or go to drive.google.com on any computer.

### OneDrive (Microsoft)
- **Who it's for:** People who use Windows computers and Microsoft 365 (formerly called Office).
- **Free storage:** 5 GB.
- **Cost for more:** $1.99/month for 100 GB; included free with Microsoft 365 subscriptions (which give you 1 TB — that is 1,000 GB).
- **What it does:** Stores files and automatically backs up the Documents, Desktop, and Pictures folders on your Windows computer.
- **Where to find it:** OneDrive usually comes pre-installed on Windows computers. Look for the cloud icon in your taskbar.

### Dropbox
- **Who it's for:** People who work across many different devices (Windows, Mac, iPhone, Android) and want a single place for files.
- **Free storage:** 2 GB (the least of any major service).
- **Cost for more:** $9.99/month for 2 TB.
- **Best for:** Sharing large files with family members who use different devices.

## Which One Should You Use?

Here is a simple rule: use the one that matches your device.
- iPhone or iPad? Use **iCloud**.
- Android phone? Use **Google Drive**.
- Windows computer? Use **OneDrive**.
- Combination of devices? **Google Drive** works on everything and has the best free plan.

## How to Upload a Photo to Google Drive (iPhone or Android)

If you want to try cloud storage today, here is how to add a photo to Google Drive. This takes less than five minutes.

**On an iPhone:**
1. Download the "Google Drive" app from the App Store if you do not already have it.
2. Sign in with your Gmail address (or create a free Google account at google.com/accounts/signup).
3. Open Google Drive. Tap the blue "+" button in the bottom-right corner.
4. Tap "Upload," then "Photo Library."
5. Find the photo you want to upload and tap it. Then tap "Upload."
6. The photo will appear in your Drive. You can now access it from any device where you sign in to the same Google account.

**On an Android phone:**
1. Open the Google Drive app (most Android phones have it already).
2. Tap the blue "+" button.
3. Tap "Upload," then find your photo in the gallery.
4. Tap the photo, then tap "Upload."

## How to Upload a Document

The steps are the same — instead of choosing "Photo Library," choose "Browse" to find a Word document, PDF, or other file.

## What Stays Safe When Your Phone Breaks?

If your photos are backed up to the cloud, they survive. If your contacts are synced to iCloud or Google, they survive. If your text messages are backed up, they survive.

What is NOT automatically protected: apps you paid for (you can re-download those for free from the App Store or Play Store), your text message history (this requires a specific backup setting), and anything on your phone that you never connected to a cloud account.

**Quick Tip:** Set your cloud backup to run automatically while your phone is charging overnight. On iPhone: Settings > Your Name > iCloud > iCloud Backup > toggle it on. On Android: Settings > Google > Backup > toggle it on.

**Sources:** Apple Support — support.apple.com/icloud; Google Support — support.google.com/drive; Microsoft Support — support.microsoft.com/onedrive; GCFGlobal.org — "What is cloud storage?"`,
    steps: [
      {
        title: 'Understand what the cloud is',
        content:
          'The cloud is simply a group of computers in a building that store your files over the internet. When something is "in the cloud," a copy of it lives on those computers — not only on your device. That means if your phone breaks, your files are still safe and you can get them back on a new device.',
      },
      {
        title: 'Find out which cloud service you already have',
        content:
          'You may already have cloud storage without knowing it. On an iPhone: tap Settings > your name at the top — if you see "iCloud," you have 5 GB free. On Android: open Settings > Google > Backup to see your Google Drive status. On a Windows PC: look for the white or blue cloud icon in the bottom-right taskbar — that is OneDrive.',
        tip: 'Most people already have at least one cloud account set up. Check before you sign up for anything new.',
      },
      {
        title: 'Pick the right service for you',
        content:
          'Use iCloud if you have an iPhone or iPad. Use Google Drive if you have an Android phone or want the best free storage (15 GB). Use OneDrive if you have a Windows computer. All three are free to start.',
      },
      {
        title: 'Upload your first photo to Google Drive',
        content:
          'Open the Google Drive app (download it free from the App Store or Google Play if needed). Sign in with your Google/Gmail account. Tap the blue "+" button, then tap "Upload," then choose a photo from your camera roll. In a few seconds, your photo will be safely stored in the cloud.',
        tip: 'After uploading, try opening Google Drive on a different device — a tablet or computer — and see if the photo appears there. It should.',
      },
      {
        title: 'Turn on automatic backup',
        content:
          'Manual uploads are fine, but automatic backup is better. On iPhone: go to Settings > your name > iCloud > iCloud Backup, and turn it on. Your phone will back up every night while it charges and is connected to Wi-Fi. On Android: go to Settings > Google > Backup and turn on "Back up to Google Drive."',
        warning:
          'Automatic backup uses Wi-Fi, not your cellular data plan, so you will not be charged extra by your carrier. Make sure your phone is on your home Wi-Fi when it charges at night.',
      },
      {
        title: 'Know what is protected and what is not',
        content:
          'Cloud backup protects your photos, contacts, and (usually) your text messages. It does not protect apps you downloaded — but you can re-download free and paid apps at no extra charge from the App Store or Google Play. It also does not protect things you never backed up, so the sooner you turn on automatic backup, the more protected you are.',
      },
    ],
  },

  {
    slug: 'how-to-request-a-lyft-or-uber-2026',
    title: 'How to Request a Lyft or Uber Ride',
    excerpt:
      'Step-by-step guide to getting your first Lyft or Uber ride — from downloading the app to arriving home safely. Great for seniors who no longer drive.',
    category: 'app-guides',
    tags: ['lyft', 'uber', 'rideshare', 'transportation', 'seniors', 'no driving', 'ride-hailing'],
    readTime: '10 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Lyft and Uber are apps that connect you with a nearby driver who can take you where you need to go — a doctor's appointment, the grocery store, a family dinner, or anywhere else. You request the ride from your phone, a driver comes to your location, and you pay through the app. There is no cash required and no need to hail a cab.

For seniors who have given up driving or do not want to drive at night, these apps can be genuinely life-changing. You can get to medical appointments, visit family, and stay independent without relying on anyone to pick you up.

## How Lyft and Uber Compare

Both apps work in the same basic way. Lyft is blue; Uber is black and white. Pricing is similar, and both are available in most US cities and many smaller towns. You can have both apps on your phone and compare prices before you book — sometimes one is cheaper than the other at a given time.

## What You Need to Get Started

- A smartphone (iPhone or Android)
- A credit or debit card to pay
- Your home address (so you can easily enter it as your destination)
- An email address to create your account

You do not need a Lyft or Uber account to read this guide, but you will need one to request a ride.

## Setting Up the App for the First Time

Download the Lyft or Uber app from the App Store (iPhone) or Google Play Store (Android). Search for "Lyft" or "Uber" and look for the official app — Lyft's icon is pink with a white "L," and Uber's is a black square with the word "Uber."

Open the app and tap "Sign Up" or "Create Account." Enter your name, email address, and a password. The app will send a confirmation code to your phone number — enter that code to verify your identity.

Next, add a payment method. Tap the menu (usually three lines in the corner), then tap "Payment" or "Wallet." Tap "Add Payment Method" and enter your credit or debit card number. The app saves this so you never have to enter it again.

## Requesting a Ride Step by Step

Once your account is set up, requesting a ride takes about two minutes.

**Step 1: Open the app.** Your current location will appear on a map automatically. If it looks wrong, tap the location bar and type your address.

**Step 2: Enter your destination.** Tap the "Where to?" bar at the bottom of the screen and type where you want to go. You can type a business name, a full address, or even a name you have saved (like "Home" or "Doctor's office"). The app will suggest options as you type.

**Step 3: Choose your ride type.** You will see a list of options like "Lyft" or "UberX" (the standard, affordable option). The price is shown before you confirm. Tap the option that fits your budget.

**Step 4: Confirm the ride.** Tap "Request Lyft" or "Request UberX." The app will now find a nearby driver. You will see a map showing where the driver is and how many minutes until they arrive. You will also see the driver's name, photo, and the car's make, model, and license plate number.

**Step 5: Wait safely.** Wait inside your home or building until the app shows the car is about one minute away. Then go outside. Do not stand at the curb for a long time.

## Confirming It Is Really Your Driver

When the car pulls up, do the following before you get in:

1. **Check the license plate.** It appears in the app. Match it to the real car.
2. **Check the car's make and color.** The app shows you this too.
3. **Ask the driver:** "What is the name of your passenger?" or "Who are you picking up?" A real driver will say your name. Do not tell them your name first — let them say it.

If the driver's information does not match, do not get in. Cancel the ride in the app and request a new one.

## During and After the Ride

You do not need to do anything during the ride — payment is automatic at the end. When you arrive, the app will show your receipt. You will be asked to rate the driver with one to five stars. Rating drivers honestly helps keep the service safe for everyone.

## Sharing Your Ride With Family

Both Lyft and Uber let you share your ride status with a trusted person. In Lyft: during a ride, tap "Share Status" and choose a contact. In Uber: tap the share button during a ride. Your family member will see your car on a map in real time and know when you have arrived.

**Quick Tip:** Ask a grandchild or trusted family member to walk through this guide with you the first time. Many families set up the app together before it is needed, so there is no stress when an appointment comes up.

## What to Do If Something Goes Wrong

- **Wrong car:** Do not get in. Cancel the ride and call a trusted person.
- **Driver asks for cash:** Lyft and Uber drivers do not accept cash — payment is through the app only. If a driver insists on cash, end the trip and report it in the app.
- **Overcharged or wrong route:** Open the app, find the trip in your history, and tap "Get Help" to report it. Both companies have customer support.
- **Left something in the car:** Go to your recent trips in the app and tap "Find Lost Item." The app will connect you with the driver.

**Sources:** Lyft Help Center — help.lyft.com; Uber Help Center — help.uber.com; AARP — "Ridesharing Apps for Older Adults."`,
    steps: [
      {
        title: 'Download the Lyft or Uber app',
        content:
          'On your iPhone, open the App Store (the blue icon with an "A"). On Android, open the Google Play Store (the colorful triangle icon). Search for "Lyft" or "Uber." Tap the correct app and tap "Get" or "Install." Wait for it to download — this takes about one minute on most connections.',
        tip: 'You can download both apps and use whichever one is cheaper at the time. Prices change based on how busy the service is in your area.',
      },
      {
        title: 'Create your account',
        content:
          'Open the app and tap "Sign Up." Enter your first and last name, your email address, and a password. The app will text a four- to six-digit code to your phone number. Enter that code when asked. This confirms you own the phone number.',
        warning:
          'Only create your account through the official app. Never create an Uber or Lyft account through a link in an email or text you were not expecting.',
      },
      {
        title: 'Add your payment method',
        content:
          'Tap the menu icon (three lines, usually in the top-left or bottom corner). Find "Payment" or "Wallet" and tap it. Tap "Add Payment Method" or "Add Credit/Debit Card." Enter your card number, expiration date, and the three-digit security code from the back. The app saves this securely and charges it automatically after each ride.',
        tip: 'You can also use PayPal, Apple Pay, or Google Pay if you prefer not to enter a card number directly.',
      },
      {
        title: 'Request your first ride',
        content:
          'Open the app. Your current location should appear on the map. Tap "Where to?" and type your destination — this can be an address, a business name (like "CVS on Main Street"), or a saved place like "Home." Choose the standard ride option (UberX or Lyft) and check the price shown. Tap "Request" to confirm.',
      },
      {
        title: 'Wait for your driver and confirm the car',
        content:
          'After requesting, you will see the driver\'s name, photo, car model, color, and license plate on screen. Wait inside until the app shows the car is about one minute away. When the car arrives, match the plate and color to what the app shows. Then ask: "What name is this ride for?" — let the driver say your name first.',
        warning:
          'Never get into a car that does not match the details in your app, even if the driver waves at you or calls your name first. Scammers sometimes wait near rideshare areas.',
      },
      {
        title: 'Share your ride status with family',
        content:
          'While your ride is in progress, look for a "Share Status" or share icon. Tap it and choose a family member\'s contact. They will receive a link that shows your car moving on a map in real time. This is a safe, reassuring feature — use it every time.',
        tip: 'You can save a family member\'s contact as a "Trusted Contact" in the Lyft app so sharing takes one tap next time.',
      },
      {
        title: 'Rate your driver and check your receipt',
        content:
          'After the ride ends, the app will ask you to rate the driver from one to five stars. Your card is charged automatically — no cash needed. You will also receive an email receipt. If anything looks wrong with the price, tap "Get Help" in the app to reach customer support.',
      },
    ],
  },

  {
    slug: 'how-to-clear-browser-history-and-cache-2026',
    title: 'How to Clear Your Browser History, Cache, and Cookies',
    excerpt:
      'A step-by-step guide to clearing browsing history on iPhone (Safari), Android (Chrome), and computers — and what actually gets deleted vs. what stays.',
    category: 'tips-tricks',
    tags: [
      'browser history',
      'cache',
      'cookies',
      'Safari',
      'Chrome',
      'Firefox',
      'Edge',
      'privacy',
      'fix website',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🧹',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Your web browser — Safari, Chrome, Firefox, or Edge — keeps a record of every website you visit. It also stores small temporary files called "cache" (pronounced "cash") and "cookies." These files help websites load faster, but they can also cause problems: a website might display incorrectly, get stuck on an old version of a page, or run slowly.

Clearing your history, cache, and cookies fixes many of these issues. It can also free up storage space on your device and protect your privacy if you share a computer with others.

**Before you worry:** clearing your cache and history will NOT delete your photos, contacts, saved passwords (in most cases), bookmarks, or any files on your device. Your computer and phone will look and work exactly the same afterward — websites will just load fresh.

## What Each of These Terms Means

**Browser history** — a list of every website you have visited. Clearing this removes the list so others cannot see where you have been online.

**Cache** (pronounced "cash") — copies of web pages, images, and files that your browser saved to make websites load faster next time. When this gets outdated, websites can look broken. Clearing the cache forces the browser to download a fresh, current version of the page.

**Cookies** — small files that websites store on your device to remember you. They keep you signed in to websites and remember your preferences. Clearing cookies will sign you out of most websites, so you will need to log back in.

## What Stays After You Clear

| What you clear | Gone? | Still there? |
|---|---|---|
| Browser history | Yes | — |
| Cache files | Yes | — |
| Cookies | Yes | — |
| Bookmarks (saved websites) | No | Still there |
| Passwords saved in browser | No (by default) | Still there |
| Photos on your device | No | Still there |
| Downloaded files | No | Still there |
| Apps | No | Still there |

## How to Clear History on an iPhone (Safari)

1. Open the **Settings** app (the gray gear icon on your home screen — not the Safari app itself).
2. Scroll down and tap **Safari**.
3. Scroll down and tap **Clear History and Website Data**.
4. A pop-up will ask you to confirm. Tap **Clear History and Data**.

That is all. Safari's history, cache, and cookies are now cleared. Your bookmarks and AutoFill passwords are still saved.

**Quick Tip:** You can also choose how long to keep history before it clears automatically. In Safari settings, look for "Keep History" and choose 1 month, 1 year, or "Forever" — whichever feels right.

## How to Clear History on Android (Chrome)

1. Open the **Chrome** browser app.
2. Tap the three dots in the top-right corner of the screen.
3. Tap **History**.
4. At the top of the History page, tap **Clear browsing data**.
5. Make sure the checkboxes next to "Browsing history," "Cached images and files," and "Cookies and site data" are all checked.
6. Tap **Clear data** (it may say "Delete" on some Android versions).

Passwords and bookmarks are on separate tabs — they will not be deleted unless you specifically go to those tabs and choose to delete them.

## How to Clear History on a Computer — Chrome

1. Open the Chrome browser.
2. Press **Ctrl + Shift + Delete** on Windows, or **Command + Shift + Delete** on a Mac. This opens the Clear Browsing Data window.
3. At the top, set the time range to "All time" if you want to clear everything, or "Last 7 days" or "Last 4 weeks" for a partial clear.
4. Check the boxes next to "Browsing history," "Cached images and files," and "Cookies and other site data."
5. Click **Clear data**.

## How to Clear History on a Computer — Microsoft Edge

1. Open the Edge browser.
2. Click the three dots (**...**) in the top-right corner.
3. Click **Settings**.
4. On the left side, click **Privacy, search, and services**.
5. Under "Clear browsing data," click **Choose what to clear**.
6. Check "Browsing history," "Cached images and files," and "Cookies and other site data."
7. Click **Clear now**.

## How to Clear History on a Computer — Firefox

1. Open Firefox.
2. Click the three lines in the top-right corner (the menu icon).
3. Click **History**.
4. Click **Clear Recent History**.
5. Set the time range to "Everything" if you want a full clear.
6. Check the boxes next to "Browsing & Download History," "Cookies," and "Cache."
7. Click **Clear Now**.

## When Should You Clear Your History?

- **A website looks broken or out of date.** Clearing the cache forces a fresh download of the page.
- **A website is loading slowly.** Old cached files can slow things down.
- **You share a computer.** Clearing history protects your privacy.
- **Your browser is running slowly in general.** A build-up of cached files over months or years can slow a browser down.
- **You are done using a shared or public computer.** Always clear history before you leave a library or hotel computer.

For most home users, clearing history once every one to three months is a reasonable habit. You do not need to do it every day.

**Sources:** Apple Support — support.apple.com; Google Support — support.google.com/chrome; Microsoft Support — support.microsoft.com/microsoft-edge; Mozilla — support.mozilla.org; How-To Geek — "How to Clear Cache in Any Browser."`,
    steps: [
      {
        title: 'Understand what you are clearing (and what stays)',
        content:
          'Clearing your browser history removes the list of websites you visited. Clearing the cache removes temporary files stored to speed up page loading. Clearing cookies signs you out of most websites. Your bookmarks, saved passwords, photos, and files on your device are NOT affected. Nothing bad will happen to your computer or phone.',
        tip: 'If your main reason for clearing history is to fix a website that looks broken, clearing just the cache is enough. You can always clear only that option.',
      },
      {
        title: 'Clear history on an iPhone (Safari)',
        content:
          'Open the Settings app (gray gear icon). Scroll down and tap Safari. Scroll down and tap "Clear History and Website Data." Tap "Clear History and Data" in the pop-up to confirm. Your bookmarks and saved AutoFill information will remain.',
        warning:
          'This signs you out of websites you were logged in to in Safari. You will need your username and password to log back in to sites like your email or bank.',
      },
      {
        title: 'Clear history on an Android phone (Chrome)',
        content:
          'Open Chrome. Tap the three dots in the top-right corner, then tap "History." Tap "Clear browsing data" at the top. Check "Browsing history," "Cached images and files," and "Cookies and site data." Tap "Clear data" to confirm.',
        tip: 'You can set the time range to "Last 7 days" or "Last 4 weeks" instead of "All time" if you want to keep older history.',
      },
      {
        title: 'Clear history on a computer — Chrome',
        content:
          'Open Chrome on your computer. Press Ctrl+Shift+Delete (Windows) or Command+Shift+Delete (Mac). Set the time range at the top, then check "Browsing history," "Cached images and files," and "Cookies and other site data." Click "Clear data."',
      },
      {
        title: 'Clear history on a computer — Microsoft Edge',
        content:
          'Open Edge. Click the three dots (...) in the top-right corner, then click "Settings." Click "Privacy, search, and services" on the left. Under "Clear browsing data," click "Choose what to clear." Check the boxes for history, cached files, and cookies, then click "Clear now."',
      },
      {
        title: 'Clear history on a computer — Firefox',
        content:
          'Open Firefox. Click the three-line menu icon in the top-right corner. Click "History," then "Clear Recent History." Choose "Everything" as the time range. Check "Browsing & Download History," "Cookies," and "Cache," then click "Clear Now."',
        tip: 'In Firefox, you can also press Ctrl+Shift+Delete (Windows) or Command+Shift+Delete (Mac) to open the Clear Recent History window directly.',
      },
      {
        title: 'Log back in to your websites',
        content:
          'After clearing cookies, you will be signed out of websites like your email, bank, and shopping accounts. Open each site, enter your email address and password as usual, and you will be back in. If your browser had your passwords saved, it will offer to fill them in for you.',
        warning:
          'If you do not remember a password, use the "Forgot Password" link on the website to reset it. Do not skip this step — make sure you can get back in to your important accounts before you clear cookies on a shared or public computer.',
      },
    ],
  },
];
