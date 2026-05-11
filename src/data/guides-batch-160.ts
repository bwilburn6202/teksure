// TekSure Guides Batch 160 — 4 guides covering: backing up phone contacts to
// the cloud; using Google Calendar for appointments and reminders; reading a
// Medicare Explanation of Benefits letter; and signing up for USPS Informed
// Delivery.
import type { Guide } from './guides';

export const guidesBatch160: Guide[] = [
  {
    slug: 'how-to-back-up-your-phone-contacts-to-the-cloud-2026',
    title: 'How to Back Up Your Phone Contacts to the Cloud',
    excerpt:
      'Save your contacts to iCloud or Google so they are safe — and come back automatically — if your phone is ever lost, stolen, or replaced.',
    category: 'phone-guides',
    tags: [
      'contacts backup',
      'iCloud contacts',
      'Google contacts',
      'phone backup',
      'iPhone contacts',
      'Android contacts',
      'cloud backup',
      'contacts.google.com',
      'icloud.com',
      'export vCard',
    ],
    readTime: '10 min',
    thumbnailEmoji: '📇',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Your phone contacts — family members, doctors, neighbors, and everyone else you call — represent years of information you have collected. If your phone is lost, stolen, dropped in water, or stops working, those contacts can vanish in an instant unless they have been backed up. This guide shows you how to make sure every contact is saved safely in the cloud, so they come back automatically when you get a new phone or need to restore your device.

A cloud backup means your contacts are stored on a secure server (run by Apple or Google, depending on your phone) — not only on the physical phone itself. Even if the phone is completely destroyed, your contacts survive.

---

**How phone contacts work**

On an iPhone, contacts are managed by Apple's iCloud service. On Android phones (Samsung, Google Pixel, Motorola, and others), they are managed by your Google account. Both services are free and included with your phone. You just need to make sure the backup feature is switched on.

---

**iPhone: Turn on iCloud Contacts sync**

**Step 1 — Open Settings**

Find the gray gear icon called "Settings" on your iPhone's home screen and tap it.

**Step 2 — Tap your name at the top**

At the very top of the Settings screen you will see your name and, below it, your Apple ID email address. Tap your name to open your Apple ID settings.

**Step 3 — Tap iCloud**

On the next screen, look for the word "iCloud" (it has a small cloud icon next to it) and tap it. This opens the list of apps and data that can sync to iCloud.

**Step 4 — Turn on Contacts**

Scroll down the list until you see "Contacts." There is a green or gray toggle switch next to it. If the toggle is gray, tap it to turn it green. Green means your contacts are now syncing to iCloud automatically — any new contacts you add will be backed up right away.

**Step 5 — Turn on iCloud Backup (for a full phone backup)**

Go back one screen (tap the back arrow at the top left). Tap "iCloud Backup." Make sure the toggle is green, then tap "Back Up Now." You will see the time of the last successful backup at the bottom of the screen. Aim to back up at least once a week — or plug your phone in at night and let it back up automatically while it charges.

**Step 6 — Verify your contacts are in iCloud**

On a computer (any computer with a web browser), go to **icloud.com** and sign in with your Apple ID email address and password. Click the "Contacts" icon. You should see your full contacts list here. If you do, the backup is working correctly.

---

**iPhone: Export a backup copy as a file (vCard)**

For extra peace of mind, you can export all your contacts as a file that you save on your computer. This is called a "vCard" file (it ends in .vcf).

On your computer, go to **icloud.com** and sign in. Click "Contacts." Press **Ctrl + A** on a Windows keyboard (or **Command + A** on a Mac) to select all contacts. Then click the settings gear icon at the bottom left of the screen → choose "Export vCard." Your browser will download a .vcf file containing all your contacts. Save this file in a clearly labeled folder on your computer (for example, "Phone Backup 2026").

---

**Android: Turn on Google Contacts backup**

**Step 1 — Open Settings**

On most Android phones, Settings looks like a gear icon. Tap it.

**Step 2 — Find the Google section**

Scroll down and tap "Google." (On some Samsung phones, this may be listed under "Accounts and backup" → "Accounts.")

**Step 3 — Tap Backup**

Tap "Backup." You will see an option called "Back up to Google Drive." Make sure this is turned on (the toggle should be blue or green). Tap "Back up now" to run a backup immediately.

**Step 4 — Verify your contacts are in Google**

On any computer with a web browser, go to **contacts.google.com** and sign in with the same Google account (Gmail address) you use on your phone. Your full contacts list should appear here. If it does, the backup is working.

---

**Android: Export contacts as a file**

Open the **Contacts** app on your Android phone. Tap the three horizontal lines (menu icon) or the three dots in the top corner. Look for "Import/Export" or "Manage contacts." Tap "Export" and choose to save a .vcf file. You can then email this file to yourself or move it to your computer as a backup copy.

---

**What happens when you get a new phone**

When you set up a new iPhone, the phone will ask you to sign in with your Apple ID. Once you sign in, your contacts download automatically — no extra steps needed. The same is true for Android: when you sign in to your Google account during setup, your contacts are restored from Google automatically.

---

**Quick Tip:** If you are not sure whether your contacts are backed up right now, open your iCloud or Google settings and check — it only takes two minutes, and it could save you from a stressful situation later.`,
    steps: [
      {
        title: 'iPhone — Open Settings and tap your name',
        content:
          'Find the gray gear icon called "Settings" on your home screen and tap it. At the very top, tap your name (and Apple ID email) to open your Apple ID settings.',
        tip: 'If you are not sure what your Apple ID is, your email address at the top of this screen is your Apple ID.',
      },
      {
        title: 'iPhone — Turn on iCloud Contacts',
        content:
          'Tap "iCloud," then scroll down to "Contacts." If the toggle next to Contacts is gray, tap it to turn it green. Green means contacts are syncing to iCloud automatically.',
      },
      {
        title: 'iPhone — Verify the backup at icloud.com',
        content:
          'On any computer, go to icloud.com and sign in with your Apple ID. Click the Contacts icon. If you see your full contacts list, the backup is working.',
        tip: 'You can do this check on a library computer or a family member\'s laptop — you do not need your own computer.',
      },
      {
        title: 'Android — Turn on Google Drive backup',
        content:
          'Open Settings → Google → Backup. Turn on "Back up to Google Drive" and tap "Back up now." Verify contacts are saved by visiting contacts.google.com on a computer.',
      },
      {
        title: 'Export a file copy of your contacts',
        content:
          'iPhone: On icloud.com, select all contacts, then click the gear icon and choose "Export vCard." Android: Open the Contacts app → menu → Import/Export → Export. Save the .vcf file on your computer as an extra backup.',
        tip: 'Label the file clearly, such as "Contacts-Backup-May2026.vcf," so you can find it easily.',
      },
      {
        title: 'Getting a new phone — your contacts come back automatically',
        content:
          'When you sign in to your Apple ID (iPhone) or Google account (Android) during new phone setup, your contacts are downloaded automatically. No extra steps are needed if your backup was turned on.',
      },
    ],
  },
  {
    slug: 'how-to-use-google-calendar-for-appointments-and-reminders-2026',
    title: 'How to Use Google Calendar to Track Appointments and Set Reminders',
    excerpt:
      'Use Google Calendar to keep doctor appointments, family events, and medication reminders all in one place — with automatic alerts sent to your phone or email.',
    category: 'app-guides',
    tags: [
      'Google Calendar',
      'appointment reminders',
      'medication reminders',
      'calendar app',
      'doctor appointments',
      'event reminders',
      'shared calendar',
      'Google account',
      'calendar alerts',
      'scheduling',
    ],
    readTime: '12 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Missing a doctor's appointment, forgetting a grandchild's birthday, or losing track of when to take a medication can cause real problems. Google Calendar is a free tool that keeps all of your events in one place and sends reminders to your phone or email before they happen — so you do not have to rely on memory alone.

You can use Google Calendar on any device: a computer using a web browser, an Android phone (it may already be installed), or an iPhone (download the free Google Calendar app from the App Store). Everything you add on one device shows up automatically on all your other devices because it is stored in your Google account.

---

**What you need before you start**

A Google account (Gmail address). If you have a Gmail address, you already have a Google account. If you do not have one, go to **accounts.google.com** and click "Create account" — it is free and takes about five minutes.

---

**How to open Google Calendar**

- **On a computer:** Open any web browser and go to **calendar.google.com**. Sign in with your Gmail address and password.
- **On an Android phone:** Look for the Google Calendar app (it has a colorful calendar icon with the number 31 on it). Tap it to open.
- **On an iPhone:** Download "Google Calendar" from the App Store (search for "Google Calendar" — it is free). Open it and sign in with your Gmail address.

---

**How to add a new event**

**Step 1 — Tap or click the + button**

On a computer, click the colorful "+" button in the bottom right corner, or click directly on the date you want. On a phone, tap the large "+" button at the bottom right of the screen.

**Step 2 — Type the name of the event**

A box will appear for the event title. Type something clear, for example: "Eye doctor — Dr. Chen" or "Call with Susan" or "Take blood pressure medication."

**Step 3 — Set the date and time**

Tap or click the date field and choose the correct date from the calendar that appears. Then set the start time and end time. For a doctor's appointment, you might set it for 10:00 AM to 11:00 AM. For a daily medication reminder, you would set it for the time you take the medication.

**Step 4 — Save the event**

Tap or click the "Save" button. The event now appears on your calendar.

---

**How to add reminder alerts**

A reminder alert sends you a notification (a buzzing message on your phone or an email) before the event happens so you have time to prepare.

**Step 1 — Open the event's detail screen**

When creating a new event, tap "More options" (on a phone) or look for the full event form (on a computer — it opens when you click "More options" after clicking a date).

**Step 2 — Find the Notification section**

Scroll down until you see "Notification" (it may say "Add notification"). Click or tap the notification field.

**Step 3 — Set two reminders**

For a doctor's appointment, a good combination is: one reminder the day before (set to "1 day") and another one hour before (set to "60 minutes"). This gives you time to prepare the day before and a final reminder the morning of.

**Step 4 — Choose how you want to be notified**

You can choose "Email" (a reminder sent to your Gmail), "Notification" (a pop-up on your phone), or both. Both is often the best choice for important appointments.

---

**How to make an event repeat automatically**

For something like a weekly medication reminder or a monthly doctor check-in, you do not need to add a new event each time. Google Calendar can repeat an event for you.

When creating or editing an event, look for the line that says "Does not repeat." Tap or click it and a menu will appear with options: Daily, Every weekday (Mon–Fri), Weekly on [day], Monthly on [day], Annually on [date], and more. Choose the option that fits your schedule. The event will then appear automatically on every future date that matches your rule.

---

**How to share a calendar with a family member**

If you want a family caregiver or relative to see your appointments, you can share your calendar with them.

**Step 1 — Open Google Calendar on a computer**

Sharing is done from the computer version. Go to calendar.google.com.

**Step 2 — Create a separate calendar for shared events**

On the left side of the screen, look for "Other calendars" and click the "+" button next to it. Name your new calendar (for example, "Medical Appointments" or "Family Events").

**Step 3 — Share the calendar**

Click the three dots next to your new calendar name → "Settings and sharing." Scroll down to "Share with specific people" and click "Add people." Type the Gmail address of the family member you want to share with and choose their permission level: "See all event details" lets them view your events; "Make changes to events" lets them also add and edit events.

---

**Color-code your calendars**

If you have multiple calendars (medical, family, personal), you can assign each one a different color. Click the three dots next to a calendar name and choose a color. For example: blue for medical appointments, green for family events, yellow for personal reminders. Events in each calendar will show in that color, making your calendar easy to scan at a glance.

---

**Month view vs. list view**

Google Calendar offers several views:
- **Month view:** See the whole month at once. Good for checking what is coming up.
- **Week view:** See all seven days with times shown. Good for planning a busy week.
- **Schedule (list) view:** Shows upcoming events as a scrolling list with the date, time, and name. Many people find this the clearest view because it lists what is coming without visual clutter.

To switch views on a phone, tap the three horizontal lines (menu) or look for the view selector icon. On a computer, find the view dropdown in the top right corner (it may say "Month," "Week," or "Schedule").

---

**Quick Tip:** Use the Schedule view (list view) as your everyday view — it tells you at a glance what is coming up in the next few days without requiring you to click around.`,
    steps: [
      {
        title: 'Open Google Calendar',
        content:
          'On a computer go to calendar.google.com. On Android, open the Google Calendar app. On iPhone, download the free Google Calendar app from the App Store and sign in with your Gmail address.',
        tip: 'If you use Gmail, you already have a Google account — use the same email and password.',
      },
      {
        title: 'Add a new event',
        content:
          'Tap or click the "+" button. Type a clear name for the event (for example, "Eye doctor — Dr. Chen"). Set the date and the start and end time. Tap "Save."',
      },
      {
        title: 'Add reminder alerts',
        content:
          'When creating an event, tap "More options." Scroll to "Notification" and set two reminders: one for the day before (1 day) and one for one hour before. Choose Email, phone Notification, or both.',
        tip: 'Two reminders — one the day before and one an hour before — work well for medical appointments.',
      },
      {
        title: 'Make an event repeat',
        content:
          'Tap or click the "Does not repeat" line when creating the event. Choose Daily, Weekly, Monthly, or another option. The event will appear automatically on all future matching dates — no need to re-enter it each time.',
      },
      {
        title: 'Share your calendar with a family member',
        content:
          'On a computer at calendar.google.com, create a new calendar under "Other calendars." Click the three dots next to it → Settings and sharing → Add people. Enter your family member\'s Gmail address and choose their access level.',
      },
      {
        title: 'Color-code and switch views',
        content:
          'Click the three dots next to any calendar name to assign a color. Use Month view to plan ahead, Week view for a busy week, or Schedule (list) view for a simple upcoming-events list.',
        tip: 'The Schedule view is the clearest for everyday use — it shows what is coming up as a simple list.',
      },
    ],
  },
  {
    slug: 'how-to-read-your-medicare-explanation-of-benefits-letter-2026',
    title: 'How to Read Your Medicare Explanation of Benefits Letter',
    excerpt:
      'Your Medicare EOB letter is not a bill — it is a summary of what Medicare paid. Learn what each section means, how to spot errors, and how to report fraud.',
    category: 'health-tech',
    tags: [
      'Medicare EOB',
      'Explanation of Benefits',
      'Medicare Summary Notice',
      'Medicare billing',
      'Medicare fraud',
      'medical bills',
      'Medicare supplement',
      'Medigap',
      'medicare.gov',
      'healthcare costs',
    ],
    readTime: '11 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Every few months, you may receive a thick envelope from Medicare with the words "Medicare Summary Notice" printed on it, or you may see a notice in your Medicare account online. Many people set these letters aside unread because the numbers and terms look confusing. However, reading your Explanation of Benefits (EOB) carefully is one of the best ways to catch billing errors and protect yourself from Medicare fraud.

This guide explains what every section of the EOB means, what to look for, how to report errors, and what to do if you have a Medicare supplement plan.

---

**What is an Explanation of Benefits?**

First, the most important thing to know: **an Explanation of Benefits is not a bill.** It is an informational summary. It tells you that Medicare received a claim from one of your healthcare providers, what Medicare paid, and what — if anything — you may owe. You should never send money to anyone based only on an EOB.

If you do owe money (for example, a copay or the 20% coinsurance you are responsible for under Original Medicare), your provider — the doctor's office or hospital — will send you a separate bill. The EOB is a record of what happened with the claim.

---

**Two formats: paper and online**

**Medicare Summary Notice (MSN):** The paper version mailed to your home. Medicare mails this every three months if you are in Original Medicare (Part A and Part B). It covers all claims from that quarter.

**eNotice:** The electronic version. If you have a Medicare.gov account and have signed up for electronic notices, you will receive an email when your eNotice is ready and can view it at **medicare.gov** → "My Account" → "Claims & Appeals." The online version is available sooner than the paper version.

---

**The four key dollar amounts explained**

Every claim listed on your EOB will show four numbers. Here is what each one means:

**1. Billed amount (or Amount charged)**
This is what your provider — the doctor, hospital, or lab — originally charged Medicare. This number is often much higher than what Medicare actually pays. Providers agree to accept Medicare's approved rate, so the billed amount is not what you actually owe.

**2. Medicare-approved amount**
This is the amount Medicare has agreed is a reasonable payment for this service. Both Medicare and you base your shares on this number — not the billed amount.

**3. Medicare paid**
This is what Medicare actually sent to your provider. Under Original Medicare Part B, Medicare typically pays 80% of the Medicare-approved amount (after your deductible has been met).

**4. You may be billed**
This is your share — usually the remaining 20% of the Medicare-approved amount. You may also see your Part A or Part B deductible listed here if it applies to this claim. This is the amount your provider is allowed to charge you.

**Example in plain numbers:**
A doctor charges $350 (billed amount). Medicare's approved amount for that visit is $200. Medicare pays 80% of $200 = $160. Your share is 20% of $200 = $40. The doctor cannot charge you the difference between $350 and $200 — that $150 "write-off" is absorbed by the doctor as part of their Medicare agreement.

---

**What to look for: catching errors and fraud**

Not every mistake on your EOB is fraud — billing errors are common, and they can cost you or Medicare money. When you receive your EOB, check each claim against your own records (appointment calendar, medical paperwork). Look for:

- **A date of service you do not recognize.** If Medicare shows a claim for a visit that did not happen, this is either a billing error or potential fraud.
- **A provider you have not seen.** If you see a doctor's name or a lab you do not recognize, call Medicare to ask about it.
- **A procedure that does not match what was done.** Each claim includes a description of the service (for example, "Office visit, 15 minutes" or "Blood test, basic metabolic panel"). If the description does not match what happened at your appointment, the provider may have billed for the wrong service.
- **Duplicate charges.** Two claims for the same visit on the same date may be an error.

---

**How to report a billing error or suspected fraud**

**By phone:** Call **1-800-MEDICARE** (1-800-633-4227). Representatives are available 24 hours a day, 7 days a week. Tell them you have a question about a claim on your Medicare Summary Notice and give them the date of service and the provider name.

**Online:** Go to **medicare.gov**, sign in, and navigate to "Claims & Appeals." You can view your claims and submit a question about any claim.

**For suspected fraud:** Medicare has a dedicated fraud reporting line. You can also report fraud to the **HHS Office of Inspector General** at **1-800-HHS-TIPS** (1-800-447-8477) or online at **oig.hhs.gov**. Reporting Medicare fraud is anonymous if you prefer, and it helps protect other Medicare recipients.

---

**If you have a Medicare Supplement (Medigap) plan**

A Medigap plan is extra insurance you buy from a private company to cover the costs that Original Medicare does not pay — your 20% coinsurance and deductibles. If you have Medigap, here is how it works:

When your doctor submits a claim to Medicare, Medicare processes it first and pays its 80%. Medicare then automatically forwards the claim information to your Medigap insurer. Your Medigap plan pays your 20% share (and any deductibles, depending on your plan letter) directly to the provider. In most cases, you do not need to do anything — the two insurers coordinate automatically. Your EOB will show a $0 balance in the "You may be billed" column if your Medigap plan covered your portion.

---

**How to access your claims online at medicare.gov**

**Step 1 — Go to medicare.gov**
Open a web browser and type **medicare.gov** in the address bar. Click "Log in."

**Step 2 — Create or sign in to your account**
If you do not have an account, click "Create account" and follow the prompts. You will need your Medicare card and personal information to verify your identity.

**Step 3 — Navigate to Claims & Appeals**
After signing in, look for the "My Account" section or the main menu. Click "Claims & Appeals." You will see a list of all recent claims, sorted by date.

**Step 4 — Review a claim**
Click on any claim to see the full details: provider name, date of service, what was billed, what Medicare paid, and your responsibility.

---

**Quick Tip:** Keep a personal log — a notebook or a simple spreadsheet — of every doctor visit, lab test, and medical procedure you have. When your EOB arrives, check each claim against your log. Any discrepancy is worth a phone call to Medicare.`,
    steps: [
      {
        title: 'Understand what an EOB is (and is not)',
        content:
          'An Explanation of Benefits is not a bill. It is a summary showing what Medicare received from your provider, what Medicare paid, and what you may owe. Your provider will send you a separate bill if payment is needed.',
        warning: 'Never send money based solely on an EOB. Wait for an actual bill from your doctor or hospital.',
      },
      {
        title: 'Find your EOB — paper or online',
        content:
          'Paper Medicare Summary Notices arrive every three months by mail. Electronic notices (eNotices) are available sooner at medicare.gov → My Account → Claims & Appeals. You can sign up for electronic notices to get them faster.',
      },
      {
        title: 'Read the four key dollar amounts',
        content:
          'Billed amount: what your provider charged. Medicare-approved amount: what Medicare agreed to pay. Medicare paid: the actual payment to your provider (usually 80% of approved). You may be billed: your share (usually 20% of approved, plus any deductible).',
        tip: 'The "You may be billed" column is the only number that comes out of your pocket. The rest is settled between Medicare and your provider.',
      },
      {
        title: 'Check each claim for errors',
        content:
          'Compare every claim to your own appointment records. Look for dates you did not visit a doctor, providers you do not recognize, procedures that do not match what happened, or duplicate charges for the same visit.',
      },
      {
        title: 'Report errors or fraud',
        content:
          'Call 1-800-MEDICARE (1-800-633-4227) any time, 24/7, to ask about a claim. For suspected fraud, also report to the HHS Office of Inspector General at 1-800-447-8477 or oig.hhs.gov.',
      },
      {
        title: 'Understand your Medigap supplement plan',
        content:
          'If you have a Medigap (Medicare Supplement) plan, your insurer automatically receives the claim from Medicare after Medicare pays its 80%. Your Medigap plan pays your 20% share directly to the provider. You usually owe $0 for covered services.',
        tip: 'Your EOB should show $0 in the "You may be billed" column for services fully covered by your Medigap plan.',
      },
    ],
  },
  {
    slug: 'how-to-sign-up-for-usps-informed-delivery-2026',
    title: 'How to Sign Up for USPS Informed Delivery',
    excerpt:
      'Get a free daily email showing photos of your incoming mail before it arrives — so you always know when a check, prescription, or important document is on the way.',
    category: 'how-to',
    tags: [
      'USPS Informed Delivery',
      'mail notifications',
      'package tracking',
      'USPS',
      'mail preview',
      'informed delivery',
      'USPS Mobile app',
      'mail alerts',
      'mail tracking',
      'postal service',
    ],
    readTime: '9 min',
    thumbnailEmoji: '📬',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Every morning, before your mail carrier arrives, you could already know exactly which envelopes and packages are on the way — without leaving your home. USPS Informed Delivery is a free service from the United States Postal Service that sends you an email each morning with grayscale photos of every piece of mail scheduled to arrive in your mailbox that day, plus tracking updates for any packages.

This guide walks you through how to sign up, what to expect, and why this service is especially useful for seniors who want to keep an eye on checks, Medicare correspondence, prescriptions, and other important mail.

---

**What Informed Delivery shows you**

When you sign up for Informed Delivery, you receive a daily email (or app notification) every morning — typically between 7 AM and 9 AM — that includes:

- **Grayscale photos of letter-sized mail and flat envelopes.** You can see the sender's name and address on each piece before it arrives. This lets you know whether something important is coming or if you can expect an ordinary day.
- **Package delivery notifications with tracking.** Any packages scheduled for delivery that day are listed with their expected delivery window and a tracking link. You can click the link to see the full tracking history.
- **Email previews from senders who participate.** Some companies and government agencies add a "ride-along" to the Informed Delivery email — a color image or clickable link that gives you more details about what is in the envelope. For example, your Medicare plan or a bank may show you a preview of the letter's purpose.

What Informed Delivery does **not** show: the inside of envelopes, the contents of packages, or mail that is not processed through USPS mail scanning (such as hand-delivered items or neighborhood association flyers).

---

**Why this is useful for seniors**

- **Know when a check is coming.** If you are expecting a Social Security check, a refund, or a payment from a family member, you will know the exact day it arrives — instead of checking the mailbox repeatedly.
- **Track Medicare and insurance correspondence.** Enrollment letters, Summary of Benefits, and other Medicare documents are easy to miss. Informed Delivery tells you they are coming before they arrive.
- **Know when a prescription arrives.** If a medication is mailed to your home, you will receive a package notification so you know to retrieve it promptly — especially important if the medication requires refrigeration.
- **Spot missing mail.** If you receive a notification that a check or important letter was supposed to arrive today but it is not in your mailbox, you can contact USPS quickly rather than waiting and wondering.
- **Confirm mail has not been stolen.** Mail theft is a real problem. If you see in your morning email that a check arrived but it is not in your mailbox, you can report it to USPS and your local post office immediately.

---

**How to sign up for USPS Informed Delivery**

**Step 1 — Go to the Informed Delivery website**

Open a web browser (Chrome, Edge, Firefox, or Safari) and go to **informeddelivery.usps.com**. You will see a blue "Sign Up For Free" button. Click it.

**Step 2 — Create a USPS.com account**

You will be taken to the USPS.com account creation page. Fill in your name, address (the address where you receive mail), email address, and a password of your choice. Your address must match the address where you want to receive mail previews. Click "Continue."

**Step 3 — Verify your identity**

USPS requires identity verification to make sure that only the actual resident at an address can see the mail for that address. This is an important security step — it prevents someone else from signing up to see your mail.

USPS may verify your identity in one of two ways:

- **Online verification:** USPS may ask you a few multiple-choice questions based on public records (for example, confirming a previous address or a vehicle you have owned). Answer the questions and click "Verify."
- **Mail verification:** If online verification does not complete, USPS will mail a verification letter to your address with a code. When the letter arrives (typically 3–7 business days), go back to USPS.com, sign in, and enter the code. After you enter the code, your account is activated.

**Step 4 — Set up your notification preferences**

After verifying your identity, sign in to your USPS.com account and go to your account settings. Under "Notification Preferences," choose how you want to receive your daily Informed Delivery digest:

- **Email:** A daily email is sent to your registered email address each morning. This is the most common choice and works on any device.
- **USPS Mobile app notifications:** If you download the USPS Mobile app (available free on iPhone and Android), you can receive push notifications on your phone instead of, or in addition to, email.

---

**How to set up the USPS Mobile app**

The USPS Mobile app lets you see your Informed Delivery photos and track packages directly on your phone — without checking your email.

**Step 1 — Download the app**

On an iPhone: Open the App Store, search for "USPS Mobile," and tap "Get" to install it (it is free).
On an Android phone: Open the Google Play Store, search for "USPS Mobile," and tap "Install."

**Step 2 — Sign in**

Open the app and tap "Sign In." Enter the same email address and password you used when creating your USPS.com account.

**Step 3 — Allow notifications**

When the app asks if it can send you notifications, tap "Allow." This enables the morning Informed Delivery alert on your phone.

**Step 4 — Track a package**

From the app's home screen, tap "Track" or "Packages." You can type in a tracking number manually, or if you are signed in, your Informed Delivery packages will appear automatically. Tap any package for its full tracking history and estimated delivery time.

---

**Frequently asked questions**

**"I signed up but I am not getting emails."**
Check your email's spam folder — the first Informed Delivery email sometimes lands there. Add usps@email.informeddelivery.usps.com to your contacts so future emails go to your inbox.

**"My address is not being recognized."**
Make sure you type your address exactly as it appears in USPS records. You can verify your address format at **tools.usps.com/zip-code-lookup.htm**.

**"I live in an apartment or condo."**
Include your full unit number when you enter your address (for example, "123 Main St Apt 4B"). Each resident at a building can have their own separate Informed Delivery account.

**"Someone else already signed up for my address."**
If you try to sign up and are told the address already has an account, contact USPS at 1-800-275-8777. This situation can occur if a previous resident signed up, or it may indicate someone has fraudulently signed up using your address.

---

**Quick Tip:** Once signed up, check your Informed Delivery email each morning before you go to the mailbox. If an important piece of mail — a check, a Medicare letter, a prescription — is listed but does not arrive by the end of the day, contact your local post office or call USPS at 1-800-275-8777.`,
    steps: [
      {
        title: 'Go to informeddelivery.usps.com and click "Sign Up For Free"',
        content:
          'Open a web browser and go to informeddelivery.usps.com. Click the blue "Sign Up For Free" button to start the account creation process.',
      },
      {
        title: 'Create your USPS.com account',
        content:
          'Enter your name, home mailing address, email address, and a password. Your address must be the address where you receive mail. Click "Continue."',
        tip: 'Use an email address you check regularly — this is where your daily mail preview will be sent.',
      },
      {
        title: 'Verify your identity',
        content:
          'USPS will verify your identity to protect your privacy. You may answer a few multiple-choice questions online, or USPS may mail a letter with a verification code to your address (arrives in 3–7 days). Enter the code on USPS.com to complete setup.',
        warning: 'If someone else has already registered your address, call USPS at 1-800-275-8777 right away — this could be a sign of mail fraud.',
      },
      {
        title: 'Set up your notification preferences',
        content:
          'After verifying, go to your account settings on USPS.com. Choose to receive your daily Informed Delivery digest by email, by USPS Mobile app notification, or both.',
      },
      {
        title: 'Download the USPS Mobile app (optional)',
        content:
          'Search for "USPS Mobile" in the App Store (iPhone) or Google Play Store (Android) and install the free app. Sign in with your USPS.com account. Allow notifications when prompted.',
        tip: 'The app also lets you track packages by typing in a tracking number — helpful when you are expecting a delivery.',
      },
      {
        title: 'Check your morning email each day',
        content:
          'USPS sends your daily mail preview email between 7 AM and 9 AM. Review the photos of incoming mail and package updates. If expected mail does not arrive by end of day, contact USPS at 1-800-275-8777.',
        tip: 'If the first email goes to your spam folder, add usps@email.informeddelivery.usps.com to your contacts so future emails reach your inbox.',
      },
    ],
  },
];
