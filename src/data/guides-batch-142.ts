// guides-batch-142 — 4 senior-priority guides published 2026-05-06
// Topics: Google Translate, automatic bill pay, Medicare EOB, phone contact backups.

import type { Guide } from './guides';

export const guidesBatch142: Guide[] = [
  {
    slug: 'how-to-use-google-translate-on-your-phone-2026',
    title: 'How to Use Google Translate on Your Phone',
    excerpt: 'Translate text, speech, and signs in real time. Works on iPhone and Android. Free to download and use.',
    category: 'app-guides',
    tags: ['google translate', 'translation', 'travel', 'language', 'camera translate', 'offline'],
    readTime: '7 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Google Translate is a free app that converts words, sentences, and even signs from one language to another. You can type something in English and get Spanish back in seconds. Or you can point your phone's camera at a restaurant menu in French and watch the English words appear right on your screen. The app is made by Google and works on both iPhone and Android phones.

You do not need a Google account to use Google Translate. Open the app, pick your languages, and start. It costs nothing.

## Four Ways to Translate

**Typing text.** This is the most common way. You type (or paste) words into a box and the translation appears below. Good for emails, text messages, or anything you want to write out.

**Speaking aloud.** Tap the microphone button and speak your sentence. The app listens, figures out what you said, and shows the translation. This works well when you need to say something quickly and are not sure how to pronounce it.

**Conversation mode.** This lets two people speak back and forth through the phone. One person speaks in English, the app translates into the other language, and the other person speaks back. The app keeps switching automatically. Helpful at a doctor's appointment, a family gathering, or a store where you and a staff member speak different languages.

**Camera translate.** Point your phone's camera at printed words — a sign, a menu, a label, a prescription bottle — and the app overlays the translation right on top of the image. The original text seems to disappear and English words fill in its place. This feature works even on handwritten text in many languages.

## Downloading Languages for Offline Use

When you travel outside the United States, your phone may not have a reliable internet connection. Google Translate lets you download entire languages so the app can work without the internet.

Open the app, go to Settings (the gear icon), choose Offline Translation, and download the languages you expect to need. Each language file is around 40 to 60 megabytes — about the same size as a few photos. Do this before you leave home while you are on your home WiFi connection.

## Which Languages Does It Support?

Google Translate supports over 130 languages, including Spanish, French, Mandarin Chinese, Japanese, Arabic, Portuguese, German, Italian, Korean, and many more. The camera translation feature works with about 90 of those languages.

## A Note on Accuracy

Google Translate is very good for everyday sentences and travel needs. For legal documents, medical paperwork, or anything where every word matters, have a professional human translator review it. The app can miss nuance or make small errors in complex text.

## Official Sources and More Help

- Google's own guide to Translate: support.google.com/translate
- Download the app: search "Google Translate" in the App Store (iPhone) or Google Play Store (Android)
- Video walkthrough: search "Google Translate app tutorial" on YouTube — the official Google channel has short how-to videos`,
    steps: [
      {
        title: 'Download and open the app',
        content: 'On an iPhone, open the App Store (the blue icon with an "A"). On Android, open the Google Play Store. Search for "Google Translate" and tap Get or Install. Once it finishes downloading, tap Open. The app is free and made by Google.',
        tip: 'The app icon is a blue and white speech bubble with a small "G" inside. If you already have it on your phone, look for that icon on your home screen.',
      },
      {
        title: 'Choose your two languages',
        content: 'At the top of the screen you will see two language names side by side with an arrow between them. Tap the left side to choose the language you are starting with (for example, English). Tap the right side to pick the language you want to translate into (for example, Spanish). Tap Detect Language on the left if you are not sure what language something is — the app will figure it out.',
      },
      {
        title: 'Type or paste text to translate',
        content: 'Tap the large text box in the middle of the screen and type your words. The translation appears below as you type. Tap the speaker icon next to the translation to hear it read aloud with the correct pronunciation.',
        tip: 'If you want to copy translated text into an email or text message, press and hold the translated words and tap Copy. Then go to your email or message and paste.',
      },
      {
        title: 'Speak to translate using the microphone',
        content: 'Tap the microphone button at the bottom of the screen. A circle will pulse to show it is listening. Speak your sentence clearly at a normal pace. The app will show what it heard and then display the translation. Tap the speaker icon to hear the translation spoken back.',
        warning: 'Make sure your phone\'s microphone is not blocked by a case or your hand. If the app does not pick up your voice, try speaking a little more slowly.',
      },
      {
        title: 'Use camera translate on signs and menus',
        content: 'Tap the camera icon at the bottom of the screen. Point your phone at the text you want to translate — a sign, menu, package label, or document. Hold your phone steady. The app will overlay the translation on top of the original text in real time. If the text is small, move your phone a little closer.',
        tip: 'Tap the shutter button (the circle at the bottom) to freeze the image and get a cleaner look at the translation. Tap it again to go back to live mode.',
      },
      {
        title: 'Try conversation mode for back-and-forth talking',
        content: 'Tap the conversation icon at the bottom (it looks like two speech bubbles). Set the language for each person on either side of the screen. Tap the microphone on your side and speak. The app translates and the other person hears it. They tap their microphone and speak back. Use this at appointments, stores, or when meeting someone who speaks a different language.',
      },
      {
        title: 'Download a language for use without internet',
        content: 'Tap the three horizontal lines (or the gear icon) to open Settings. Choose Offline Translation. Find the language you want and tap the download arrow next to it. Wait for it to finish — this takes a minute or two on WiFi. Now the app will work even when you have no cell signal or WiFi.',
        tip: 'Do this at home before a trip, not at the airport. You need a WiFi connection to download the language files.',
      },
    ],
  },

  {
    slug: 'set-up-automatic-bill-pay-bank-2026',
    title: 'How to Set Up Automatic Bill Pay Through Your Bank',
    excerpt: 'Pay bills on time every month without writing checks. Learn how to use your bank\'s bill pay, not the biller\'s website.',
    category: 'online-banking',
    tags: ['bill pay', 'automatic payments', 'online banking', 'credit score', 'recurring payments'],
    readTime: '8 min',
    thumbnailEmoji: '🏦',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Automatic bill pay means your bank sends money to your electric company, phone carrier, or other biller on the same date every month — without you having to do anything. You set it up once and the payments happen by themselves.

There are two ways to set up automatic payments. The first is through the biller's website (the electric company's site, for example). The second is through your own bank's website or app. This guide covers the second way — using your bank — because it gives you more control. Your bank is working for you. You can cancel or change a payment at any time without calling the biller.

## Why Use Your Bank's Bill Pay Instead of the Biller's Website?

When you set up auto-pay on a biller's website, you hand them direct access to your checking account or card. If they make an error and pull too much, getting that money back can take days or weeks.

When you set up bill pay through your bank, your bank is in charge. You tell your bank how much to send and when. The biller never touches your account directly. This keeps you in the driver's seat.

## How Far in Advance Should You Schedule Payments?

Banks need a few days to process and mail a check (yes, many banks still mail paper checks to some billers). Schedule payments at least 5 business days before the due date to be safe. For electronic payments — where the biller accepts digital transfers — 2 business days is usually enough. When in doubt, schedule 7 days early.

## How Automatic Payments Protect Your Credit Score

Your credit score — the number lenders use to decide whether to give you a loan — depends heavily on whether you pay bills on time. Even one missed payment can lower your score and stay on your credit report for seven years. Automatic bill pay removes the human error of forgetting. Your bills go out on time every month without you having to remember.

## What to Do if a Payment Is Missed

If your bank reports that a payment failed (you will usually get an email or text alert), call the biller immediately and make a one-time payment by phone or on their website. Then call your bank to find out why the automatic payment did not go through — it is often a low balance issue. Ask the biller to waive any late fee since the error was not intentional. Most will do so once, especially if you have a good history with them.

## Official Sources

- Consumer Financial Protection Bureau guide to bill pay: consumerfinance.gov
- Your bank's official website or mobile app help section
- AARP Money section: aarp.org/money`,
    steps: [
      {
        title: 'Log in to your bank\'s website or app',
        content: 'Open your bank\'s website on a computer, or open your bank\'s mobile app on your phone or tablet. Enter your username and password. If you have not set up online banking yet, call the number on the back of your debit card — a bank representative can walk you through creating a login over the phone.',
        tip: 'Make sure you are on your bank\'s official website. The address should start with "https://" and show your bank\'s exact name. Chase is chase.com, Bank of America is bankofamerica.com, Wells Fargo is wellsfargo.com.',
      },
      {
        title: 'Find the Bill Pay section',
        content: 'Look for a menu item called "Bill Pay," "Pay Bills," or "Payments." It is often in the main navigation bar or in a "Move Money" or "Transfers & Payments" menu. If you cannot find it, use the search bar inside the banking site and type "bill pay."',
        tip: 'On a mobile app, Bill Pay is sometimes at the bottom of the screen in the main navigation row.',
      },
      {
        title: 'Add a payee (the company you want to pay)',
        content: 'A payee is the company or person you are sending money to. Tap or click "Add Payee" or "Add a Company." Type the name of the biller — for example, "AT&T" or "Duke Energy." Your bank may recognize the name and fill in the details automatically. If not, you will need to enter the biller\'s mailing address and your account number with that biller. Find your account number on a recent paper bill or on the biller\'s website.',
        warning: 'Enter your account number carefully. An incorrect account number means your payment could go to the wrong account or bounce back.',
      },
      {
        title: 'Set up a recurring payment',
        content: 'After adding the payee, find the option to make this payment recurring or automatic. You will choose: the amount to pay each month (enter the fixed amount, or for bills that vary — like a credit card — you may choose "minimum payment" or "statement balance"), the day of the month to send the payment, and the start date.',
        tip: 'For bills with a fixed amount, like a mortgage, rent, or insurance premium, enter the exact amount. For credit card bills, choose "Statement Balance" to pay off the full amount and avoid interest charges.',
      },
      {
        title: 'Schedule the payment early enough to arrive on time',
        content: 'Set the send date at least 5 to 7 days before your bill\'s due date. This gives your bank time to process and deliver the payment. If your electric bill is due on the 15th of every month, schedule your bank to send the payment on the 8th or 9th.',
      },
      {
        title: 'Save the payment and confirm it is active',
        content: 'Click or tap Save, Submit, or Confirm. Look for a confirmation message or email from your bank. Then go back to your bill pay dashboard and look for the payee listed with the next scheduled payment date. A green checkmark, "Scheduled," or "Active" label means the payment is set up.',
      },
      {
        title: 'Verify the first payment went through',
        content: 'After the first scheduled payment date, log back in and check your account. Look at your recent transactions and confirm the payment to the biller appeared and the money left your account. Also check your next bill from the biller to confirm they received it. The biller\'s bill may show the payment as "received" or your balance as zero.',
        tip: 'Set a reminder on your calendar for the day after your first scheduled payment. Check your bank account and confirm the transaction posted correctly.',
      },
      {
        title: 'Know how to cancel or change a payment',
        content: 'If your bill amount changes, your due date shifts, or you want to stop the automatic payment, go back to Bill Pay, find the payee, and edit or delete the recurring payment. Do this at least 3 business days before the next scheduled send date. If you cancel your service with a biller, cancel the automatic payment through your bank right away so no extra money goes out.',
        warning: 'Canceling a service with a biller (like a cable company) does NOT automatically stop your bank\'s bill pay. You must cancel both separately.',
      },
    ],
  },

  {
    slug: 'understanding-medicare-explanation-of-benefits-2026',
    title: 'How to Read Your Medicare Explanation of Benefits Letter',
    excerpt: 'Your Medicare EOB is not a bill. Learn what each section means, how to spot errors, and how to find EOBs online.',
    category: 'government-civic',
    tags: ['medicare', 'EOB', 'explanation of benefits', 'healthcare billing', 'medicare.gov', 'appeals'],
    readTime: '9 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `After you use a Medicare-covered service — a doctor visit, a lab test, a hospital stay — you will receive a letter in the mail called an Explanation of Benefits, often shortened to EOB. This letter can look confusing at first because it has many columns and numbers. But once you know what each part means, it becomes a useful tool for protecting your health and your money.

## The Most Important Thing to Know First: An EOB Is NOT a Bill

Many people receive their EOB and panic because they see large dollar amounts. Do not pay anything based on an EOB alone. The EOB shows you what happened with your insurance claim. An actual bill — if you owe anything — comes separately from your doctor or hospital. If you are ever unsure whether something is a bill or an EOB, look for the words "This is not a bill" printed on the document. Medicare EOBs always include that notice.

## What Medicare Sends You

If you have Original Medicare (Part A and Part B), Medicare mails you a document called a Medicare Summary Notice (MSN) every three months. This is your version of an EOB. It lists every service Medicare processed for you during that quarter.

If you have a Medicare Advantage plan (Part C — a plan from a private insurer like Humana, Aetna, or UnitedHealthcare), your insurance company sends you an EOB, usually after each claim is processed.

## What Each Section of the EOB Means

**Provider name and service date.** This tells you who billed Medicare and when the service happened. Check that you recognize the provider and the date. If you see a provider you never visited, that is a red flag for billing fraud.

**What was billed.** The dollar amount the doctor or hospital charged for the service. This is almost always higher than what Medicare actually pays.

**Medicare-approved amount.** The amount Medicare agreed to pay for that service. Doctors who accept Medicare (called "participating providers") have agreed in advance to accept this amount as full payment.

**What Medicare paid.** The portion Medicare sent directly to the provider. For most Part B services, Medicare pays 80 percent of the approved amount.

**What you may owe.** The remaining portion — typically 20 percent of the approved amount for Part B — that Medicare expects you to pay. If you have a Medigap (supplemental insurance) plan, that plan often covers this 20 percent. Check your EOB against any supplemental insurance statements you receive.

**Denial reasons.** If a service was not covered, the EOB will show a reason code. Common reasons include the service not being medically necessary, a billing code error, or the provider not being enrolled in Medicare.

## Why You Should Keep Your EOBs

Keep your EOBs for at least one year, ideally three years. You will need them if:
- A bill arrives and you want to confirm Medicare already paid its share
- You suspect a billing error
- You are appealing a denied claim
- You are doing your taxes and tracking medical expenses

A simple system: put each EOB in a folder labeled with the year as it arrives. At the end of the year, move the folder to a drawer and start a new one.

## How to Find Your EOBs Online

You do not have to wait for paper mail. Visit Medicare.gov and log in with your Medicare account (or create one). Go to "My Account" and then "Claims and EOBs." You can view, download, and print your EOBs from the last 36 months at any time.

## How to Appeal a Denied Claim

If Medicare denies a service you believe should be covered, you have the right to appeal. The EOB will include instructions and deadlines. You must file a Redetermination (the first level of appeal) within 120 days of receiving the denial notice. Call 1-800-MEDICARE (1-800-633-4227) for help starting the appeal process.

## Official Sources

- Medicare.gov official site: medicare.gov
- 1-800-MEDICARE helpline: 1-800-633-4227 (TTY: 1-877-486-2048)
- AARP Medicare Resource Center: aarp.org/health/medicare`,
    steps: [
      {
        title: 'Find the "This is not a bill" notice',
        content: 'When a Medicare EOB or Medicare Summary Notice (MSN) arrives, look for the phrase "This is not a bill" — it is usually printed in bold near the top. This confirms you do not owe money based on this letter alone. Set it aside until a separate bill arrives from your provider.',
      },
      {
        title: 'Check the provider name and service date',
        content: 'Look at the list of services on the EOB. For each one, confirm you recognize the provider (your doctor, hospital, or lab) and the date shown matches a visit you actually had. Write a question mark next to anything that looks unfamiliar so you can investigate it.',
        warning: 'An unfamiliar provider or a date when you did not receive care can be a sign of billing fraud or a medical identity theft attempt. Call 1-800-MEDICARE to report it.',
      },
      {
        title: 'Read the four key dollar columns',
        content: 'Most EOBs have four columns for each service: (1) Billed amount — what the provider charged. (2) Medicare-approved amount — what Medicare agreed is a fair price. (3) Medicare paid — what Medicare sent to the provider. (4) You may owe — your share, usually 20 percent of the approved amount for Part B services.',
        tip: 'Do not worry that the billed amount looks enormous. What matters is the "You may owe" column. That is the number to compare against any bill you receive from the provider.',
      },
      {
        title: 'Look for any denied services',
        content: 'Scroll through the EOB for any line marked "denied," "not covered," or similar language. The EOB will include a reason code — a short letter or number — and a legend at the bottom of the page that explains what it means. Common denials include "not medically necessary" or "duplicate claim."',
      },
      {
        title: 'Compare the EOB to any bills you receive',
        content: 'When a bill arrives from your doctor or hospital, pull out the matching EOB. The bill should match the "You may owe" column on the EOB. If the doctor is billing you more than the Medicare-approved amount, that is an error. Participating Medicare providers are not allowed to charge above the approved amount.',
        tip: 'If you have a Medigap (supplemental) plan, that plan should also send you an EOB. Your out-of-pocket cost may be zero after both plans process the claim.',
      },
      {
        title: 'View your EOBs online at Medicare.gov',
        content: 'Go to medicare.gov in your web browser. Click Sign In at the top right. If you do not have an account, click Create an Account and follow the steps — you will need your Medicare number (on your red, white, and blue Medicare card). Once logged in, click My Account, then Claims and EOBs. You will see every claim from the past three years listed by date.',
        tip: 'Your Medicare number is on the front of your Medicare card. It is a combination of letters and numbers, not your Social Security number.',
      },
      {
        title: 'Appeal a denied claim within the deadline',
        content: 'If a service was denied and you believe it should be covered, act within 120 days of receiving the notice. The EOB will have an appeal section with instructions. Call 1-800-MEDICARE (1-800-633-4227) and say you want to file a Redetermination request. A representative will walk you through the steps. Ask your doctor\'s office for a "letter of medical necessity" — a written explanation of why you needed the service — to support your appeal.',
      },
    ],
  },

  {
    slug: 'how-to-back-up-phone-contacts-2026',
    title: 'How to Back Up Your Phone Contacts So You Never Lose Them',
    excerpt: 'Contacts do not back up automatically unless you turn it on. Here\'s how to protect them on iPhone and Android.',
    category: 'essential-skills',
    tags: ['contacts backup', 'icloud', 'google contacts', 'vcf', 'phone backup', 'new phone setup'],
    readTime: '7 min',
    thumbnailEmoji: '📇',
    publishedAt: '2026-05-06',
    lastVerifiedAt: '2026-05-06',
    difficulty: 'Beginner',
    body: `Your phone contacts — all those names and phone numbers you have collected over the years — are not automatically saved anywhere safe. If your phone breaks, is stolen, falls in water, or stops working, your contacts could be gone forever unless you have turned on a backup.

This is a mistake many people discover the hard way. A phone dies unexpectedly and suddenly they cannot call their doctor, their children, or their friends because they cannot remember anyone's number.

The good news is that turning on contact backup takes less than 5 minutes. Once it is on, your contacts are saved to the internet (the "cloud") and you can get them back on any new phone.

## Why Contacts Are Not Backed Up by Default

Phone makers do not turn on cloud sync (saving to the internet) by default because some people prefer to keep their data private and not stored on outside servers. This is a reasonable option, but it means you have to make an active choice to turn it on. Most people do not realize this is something they need to do.

## Two Ways to Back Up Contacts

There are two main approaches:

1. **Cloud sync** — your contacts automatically stay up to date in the cloud every time you add or change a contact. This is the recommended method because it happens without any extra effort from you.

2. **Export as a VCF file** — you create a file that contains all your contacts and save it somewhere safe (your email, a USB drive, or a computer). This is a manual snapshot. Good as an extra safety net, but you have to remember to do it periodically.

## For iPhone Users: iCloud Contacts Sync

iCloud is Apple's cloud storage service. When you turn on iCloud Contacts, every contact on your iPhone is saved to Apple's servers and can be restored on any iPhone you sign in to with your Apple ID.

To check if it is already turned on: Open Settings (the gray gear icon). Tap your name at the very top. Tap iCloud. Look for Contacts in the list. If the green toggle next to Contacts is on, you are already backed up. If it is gray (off), tap it to turn it on.

Once turned on, your contacts sync automatically whenever your phone is connected to WiFi.

## For Android Users: Google Contacts Sync

Android phones save contacts to your Google account when sync is turned on. Your contacts live in Google Contacts and are available on any Android phone you log in to with the same Google account.

To check if it is already turned on: Open Settings. Tap Accounts or Users & Accounts. Tap your Google account. Tap Account Sync. Look for Contacts in the list. If the toggle next to Contacts is on, you are good. If it is off, tap it to turn it on.

## Exporting a VCF File as an Extra Backup

A VCF file (short for Virtual Contact File) is a single file that contains all your contacts in a format any phone can read. Think of it like a printout of your entire address book.

On iPhone: Open the Contacts app. There is no built-in export button on iPhone, but you can use iCloud.com on a computer — sign in at icloud.com, go to Contacts, press Command+A to select all, then click the gear icon and choose Export vCard.

On Android: Open the Contacts app. Tap the three lines or the menu. Choose Export or Manage contacts. Select Export to .vcf file. Save the file to your phone's storage. Then email that file to yourself as an attachment, or copy it to a USB drive.

## Restoring Contacts on a New Phone

If you get a new phone, here is what happens:
- **iPhone:** Sign in with your Apple ID during setup. Your iCloud contacts will download automatically within a few minutes.
- **Android:** Sign in with your Google account during setup. Your Google Contacts will download automatically.

That is it. No extra steps needed when your backup is turned on.

## Official Sources

- Apple Support — iCloud Contacts: support.apple.com/guide/icloud/contacts-mmbb50b47f5/icloud
- Google Support — Back up and restore contacts: support.google.com/contacts/answer/1069522
- Google Contacts on the web: contacts.google.com`,
    steps: [
      {
        title: 'Find out what kind of phone you have',
        content: 'Look at your phone. If there is an Apple logo on the back and the phone says "iPhone" in Settings, you have an iPhone. If it says Samsung, Motorola, Google Pixel, or another brand name, you have an Android phone. The steps are different for each, so knowing which you have is the starting point.',
      },
      {
        title: 'iPhone: Turn on iCloud Contacts',
        content: 'Open the Settings app — the gray icon that looks like a gear. Tap your name at the very top of the screen (it shows your name and "Apple Account"). Tap iCloud. You will see a list of apps and services. Find Contacts in the list. Tap the toggle switch next to Contacts so it turns green. That is all. Your contacts are now being backed up to iCloud.',
        tip: 'If a message pops up asking whether to merge contacts, tap Merge. This combines any contacts already in iCloud with the ones on your phone.',
        warning: 'You need a working Apple ID (your Apple login) for iCloud to work. If you do not have one or cannot remember it, call Apple Support at 1-800-275-2273.',
      },
      {
        title: 'iPhone: Confirm backup is working',
        content: 'Go back to Settings, tap your name, and tap iCloud again. Scroll down to iCloud Backup. You will see the date and time of the last backup. As long as your phone connects to WiFi occasionally and is plugged in, this happens automatically overnight.',
      },
      {
        title: 'Android: Turn on Google Contacts sync',
        content: 'Open the Settings app (the gear icon). Scroll down and tap Accounts or Passwords and Accounts (the label varies by phone brand). Tap your Google account — it will show your Gmail address. Tap Account sync or Sync account. Find Contacts in the list and make sure the toggle next to it is turned on (blue or green). If it was off, tap it to turn it on.',
        tip: 'If you have more than one Google account listed, turn on Contacts sync for your main account — the one you use most often.',
      },
      {
        title: 'Android: Confirm backup is working',
        content: 'Go to Settings and look for Google. Tap Google, then Backup. You will see when your phone last backed up to Google and what was included. Contacts should appear in that list. If you see "Backup is off," tap Turn on backup.',
      },
      {
        title: 'Export a VCF file as an extra safety net (both phones)',
        content: 'On Android: Open the Contacts app. Tap the three lines or dots at the top. Tap Manage contacts or Settings, then Export. Choose to export to a .vcf file. Save it, then email it to yourself so you have a copy in your email inbox. On iPhone: Visit icloud.com on a computer, sign in, click Contacts, press Command+A (Mac) or Ctrl+A (Windows) to select all, click the gear icon at the bottom left, and choose Export vCard. Save the file to your computer.',
        tip: 'Do this VCF export once every few months as an extra backup. Keep it in your email inbox or save it to a USB drive labeled "Phone Contacts Backup."',
      },
      {
        title: 'Restore contacts when you get a new phone',
        content: 'When setting up a new iPhone, sign in with your Apple ID during the setup screens. Your contacts will appear automatically within a few minutes. When setting up a new Android phone, sign in with your Google account during setup. Your Google Contacts will download automatically. You do not need to find your VCF file unless something goes wrong with the cloud restore.',
        tip: 'Quick Tip: Write down your Apple ID email and password (or Google account email and password) on a piece of paper and keep it somewhere safe at home. You will need this information to restore contacts on a new phone.',
      },
    ],
  },
];
