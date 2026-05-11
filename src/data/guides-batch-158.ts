// TekSure Guides Batch 158 — 4 guides covering: scanning documents with your
// phone; setting up automatic bill pay; checking your Medicare account online;
// and ordering groceries with Instacart.
import type { Guide } from './guides';

export const guidesBatch158: Guide[] = [
  {
    slug: 'how-to-scan-documents-with-your-phone-2026',
    title: 'How to Scan Documents with Your Phone (No Scanner Required)',
    excerpt:
      'Turn your phone into a document scanner using free built-in tools on iPhone and Android. Save clean PDFs to email, text, or store in the cloud.',
    category: 'how-to',
    tags: [
      'document scanning',
      'iPhone scanner',
      'Android scanner',
      'Adobe Scan',
      'Google Drive scan',
      'paperless',
      'PDF',
      'Notes app',
      'phone camera',
      'iCloud',
    ],
    readTime: '10 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `You do not need a bulky flatbed scanner to create a clean, shareable copy of a document. Your phone already has everything you need. Modern smartphones can photograph a document and automatically straighten it, remove shadows, and save it as a PDF — the same file format used by banks, doctors, and government offices.

This guide walks through three free options: the built-in scanner on iPhone (inside the Notes app), the built-in scanner on Android (inside Google Drive), and the free Adobe Scan app that works on both. By the end, you will know how to scan a document, save it, and share it by email or text.

---

**Why scan with your phone?**

A physical scanner that connects to a computer costs $80 to $200 and takes time to set up. Phone scanning is free, works in about one minute, and the result is usually good enough for insurance forms, tax documents, letters, and prescriptions. Most scanned PDFs are accepted by banks, the Social Security Administration, Medicare, and courts.

---

**Before you scan: set up for a good result**

- Lay the document flat on a solid-color surface. A dark table works best when the document is white paper; a light table works well for darker documents.
- Make sure the room is well lit. Natural light from a window is excellent. Avoid scanning under a single overhead light that creates a hot-spot glare.
- Smooth out any folds or creases before scanning — creases can create shadows that make text hard to read.
- Keep the document fully within the camera frame; do not let any edge go off screen.

---

**Option 1 — Scan on iPhone using the Notes app (free, built in)**

Apple added a document scanner to the Notes app in 2017. It is available on any iPhone running iOS 11 or later (all current iPhones have this).

**Step 1 — Open Notes and create a new note**

Open the **Notes** app (the yellow notepad icon). Tap the pencil icon in the lower-right corner to start a new note.

**Step 2 — Tap the camera icon in the toolbar**

Above the keyboard, you will see a small row of icons. Tap the **camera** icon (it looks like a camera lens). A menu will pop up with several choices.

**Step 3 — Choose "Scan Documents"**

Tap **Scan Documents**. The camera will open in a special scanning mode. You will see a yellow or green rectangle appear over the document — that is the phone detecting the edges of your paper.

**Step 4 — Let the phone scan automatically, or tap the shutter button**

If your phone detects good lighting and a clear document edge, it will scan automatically. You will see the page flash white. If it does not scan on its own, tap the large white circle (the shutter button) manually. You can scan multiple pages in a row — the phone will keep the camera live so you can flip to the next page.

**Step 5 — Adjust the corners if needed**

After each scan, a yellow outline shows the detected edges. If a corner looks off, drag the yellow dot on that corner to the correct position. When satisfied, tap **Keep Scan**.

**Step 6 — Save the scan**

When you have scanned all pages, tap **Save** in the lower-right corner. The scan is now saved as a PDF attachment inside your note.

**Step 7 — Share or save the file**

Tap the scanned image in the note. Tap the **share** icon (a box with an arrow pointing up). From here you can: email it, send it as a text message, save it to the **Files** app, or upload it to **iCloud Drive**.

---

**Option 2 — Scan on Android using Google Drive (free, built in)**

Almost all Android phones come with Google Drive installed. This method saves the scan directly to your Google Drive storage, which you can access from any device.

**Step 1 — Open Google Drive**

Look for the **Google Drive** app on your phone — it is a triangle in blue, green, and yellow. If you cannot find it, search for "Drive" in your app list.

**Step 2 — Tap the + button**

In the lower-right corner of the screen, tap the large **+** (plus) button. A menu will appear with options including "Upload" and "Scan."

**Step 3 — Tap "Scan"**

Tap **Scan**. The camera will open.

**Step 4 — Position the document and tap the shutter**

Hold your phone directly above the document. Tap the large blue circle at the bottom to take the scan. Google Drive will automatically detect the edges and crop the image.

**Step 5 — Review and add more pages if needed**

After the first scan, you can tap the **+** button to add more pages, or tap the checkmark to finish. You can also re-scan a page by tapping the circular arrow icon.

**Step 6 — Name and save the file**

Tap the checkmark when done. Google Drive will ask you to name the file. Type a clear name (for example, "Medical Form May 2026") and choose which folder in your Drive to save it to. The file is saved as a PDF in your Google Drive account.

---

**Option 3 — Adobe Scan app (free, works on iPhone and Android)**

Adobe Scan is a free app available in both the Apple App Store and the Google Play Store. It creates very clean, high-quality PDFs and is widely accepted for official documents.

**Step 1 — Download and open Adobe Scan**

Search for **Adobe Scan** in the App Store (iPhone) or Play Store (Android). Download and open it. You will need a free Adobe account — tap "Sign up for free" and use your email address.

**Step 2 — Point the camera at your document**

Adobe Scan opens directly to the camera. Hold your phone above the document. A blue rectangle will appear around the document as the app finds the edges.

**Step 3 — Let it capture automatically**

Adobe Scan will capture the scan automatically when it detects a still image. You will see the page added to the bottom of the screen. Flip to the next page to continue scanning.

**Step 4 — Tap the thumbnail to finish**

Tap the small thumbnail in the lower-right corner to review your scans. You can delete a page, re-order pages, or re-take a page.

**Step 5 — Save and share**

Tap **Save PDF** in the upper-right corner. Adobe Scan saves the file to your Adobe account. From there you can share it by email, save it to your phone, or open it in another app.

---

**Quick Tips for better scans**

- If text looks blurry, make sure your phone is steady — rest your elbows on the table while holding the phone.
- Turn on "Auto-enhance" in Adobe Scan to boost contrast and make black text sharper on white paper.
- After scanning, open the PDF and zoom in to confirm the text is readable before you send it.
- Store important scans in a clearly labeled folder in iCloud Drive or Google Drive so you can find them again.

---

**Which method should you use?**

If you have an iPhone and want the fastest option, use the Notes app — no extra download needed. If you have an Android phone, the Google Drive method saves the scan straight to the cloud. If you want the sharpest results or need to fill out a form electronically, Adobe Scan is worth the two-minute setup.`,
    steps: [
      {
        title: 'Set up good lighting and a flat surface',
        content:
          'Lay the document flat on a solid-color table. Use natural light from a window or turn on a ceiling light. Smooth out any folds in the paper. Poor lighting is the most common reason scans come out blurry or hard to read.',
        tip: 'A dark-colored table works best for white paper — it helps the phone see where the document edges are.',
      },
      {
        title: 'Open the scanner on your phone',
        content:
          'iPhone: Open the Notes app, start a new note, tap the camera icon above the keyboard, and choose "Scan Documents." Android: Open Google Drive, tap the + button, then tap "Scan." Both options are free and already on your phone.',
      },
      {
        title: 'Capture the document',
        content:
          'Hold your phone directly above the document. The camera will show a colored rectangle around the paper as it detects the edges. The phone may scan automatically, or you can tap the shutter button yourself. For a multi-page document, scan one page at a time.',
        tip: 'Rest your elbows on the table while holding the phone to keep it steady — this prevents blurry scans.',
      },
      {
        title: 'Adjust the edges and keep the scan',
        content:
          'After each capture, review the colored outline around the document. If a corner is cut off or crooked, drag it to the correct position. When the outline matches all four edges of the paper, tap "Keep Scan" (iPhone) or the checkmark (Android/Adobe Scan).',
      },
      {
        title: 'Save and share the finished PDF',
        content:
          'Tap Save to store the scan as a PDF. Then use the share button (a box with an arrow on iPhone, or the three-dot menu on Android) to send it by email, text it to someone, or upload it to iCloud Drive or Google Drive for safekeeping.',
        tip: 'Name the file something descriptive before saving — for example "Medicare Card May 2026" — so you can find it later.',
      },
      {
        title: 'Verify the scan looks correct before sending',
        content:
          'Open the saved PDF and zoom in to check that all text is readable and no edges are cut off. If the scan looks dark or blurry, delete it and try again with better lighting or a steadier hand. It is quicker to re-scan now than to resend later.',
        warning:
          'Before emailing a scanned document that contains your Social Security number, Medicare number, or financial account number, double-check that you are sending it to the correct email address.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-automatic-bill-pay-online-2026',
    title: 'How to Set Up Automatic Bill Pay So You Never Miss a Payment',
    excerpt:
      'Set up recurring automatic payments through your bank or directly through each company so bills are paid on time every month without manual effort.',
    category: 'online-banking',
    tags: [
      'automatic bill pay',
      'online banking',
      'recurring payments',
      'bank bill pay',
      'autopay',
      'avoid late fees',
      'utilities',
      'credit card payment',
      'financial tech',
      'money management',
    ],
    readTime: '12 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Late payment fees, interrupted service, and damage to your credit score — all of these can happen when a bill gets forgotten. Automatic bill pay removes that risk. Once set up, your bills are paid on time every month without you having to remember, log in, or write a check.

There are two ways to set up automatic payments, and this guide covers both clearly.

---

**Method 1: Set up autopay through the company (the company pulls from your account)**

This is the most common approach. You log into your utility company, credit card, insurance provider, or streaming service and give them permission to charge your bank account or credit card on the due date each month.

**Advantages:** The payment always arrives on the exact due date. Many companies offer a small discount for autopay (some utilities offer $1–$5 off per month).

**Disadvantage:** Each company has a separate login and setup process. If your bank account number changes (you close an account or switch banks), you have to update each company separately.

**How to set up autopay through a company — step by step**

**Step 1 — Gather your account information**

Before you start, have these items ready:
- Your bank account number and routing number (both are printed at the bottom of a paper check — the 9-digit routing number is on the left, your account number is in the middle)
- Or your credit card number if you prefer to pay by card

**Step 2 — Log into the company's website**

Go to the company's official website (your electricity provider, cable company, credit card issuer, etc.) and sign in to your account. If you do not have an online account, most companies have a "Register" or "Create Account" option on their login page — you will need your account number from a paper bill.

**Step 3 — Find "Autopay," "Automatic Payments," or "Payment Settings"**

These labels differ by company, but you will generally find them in "Billing," "Account Settings," or "Payment Center." Look for a button or link that includes the word "automatic."

**Step 4 — Add your payment method**

Enter your bank account and routing number, or your credit card number. The website will ask you to confirm the information once.

**Step 5 — Choose the payment amount and date**

- For credit cards: you usually choose between paying the minimum due, the statement balance, or a fixed custom amount. Paying the statement balance in full each month avoids interest charges.
- For utilities and fixed bills: the company will charge whatever is owed that month.
- The payment date is usually the due date shown on your bill.

**Step 6 — Confirm and save**

Review the details, then tap or click "Confirm," "Save," or "Enroll." You should receive a confirmation email. Save that email or take a screenshot of the confirmation screen.

---

**Method 2: Set up bill pay through your bank (your bank pushes the payment)**

Your bank's bill pay service lets you schedule payments from one central location instead of logging into each company separately. Your bank sends the money to the company on the date you choose.

**Advantages:** Everything is managed in one place — your bank's website or app. You can see all upcoming payments at once. You control the amount and date.

**Disadvantage:** The payment arrives as a check or electronic transfer, which can take 1–5 business days to reach the company. You need to schedule it a few days before the due date to make sure it arrives on time.

**How to set up bank bill pay — step by step**

**Step 1 — Log into your bank's website or app**

Open your bank's website or mobile app and sign in. Look for a section called **"Bill Pay,"** **"Pay Bills,"** or **"Payments."** Most major banks — Chase, Bank of America, Wells Fargo, U.S. Bank, TD Bank, Citibank, and thousands of credit unions — offer free bill pay.

**Step 2 — Add a payee**

A "payee" is the company you want to pay. Click or tap **"Add Payee"** or **"Add a Company."** You will be asked to enter:
- The company's official name (exactly as it appears on your bill)
- The company's payment address (found on your paper bill)
- Your account number with that company (printed on your bill statement)

Your bank may recognize well-known companies and fill in the address for you.

**Step 3 — Schedule a payment**

Once the payee is added, select them from your payee list. Enter:
- The dollar amount
- The payment date (for recurring bills, choose a date a few days before the due date to allow processing time)

**Step 4 — Set it to "Recurring" for monthly bills**

Look for an option labeled "Recurring," "Automatic," or "Repeat." Choose how often (monthly is the most common). Select the end date or choose "No end date" for ongoing bills.

**Step 5 — Confirm the payment**

Review the details and click "Confirm" or "Submit." Your bank will now send this payment every month on the date you chose.

---

**Safety tips for automatic bill pay**

- **Review your bank statement or app every month.** Even on autopay, check that the correct amounts were charged. Unexpected charges can signal billing errors or fraud.
- **Keep your email address up to date with each company.** Companies send confirmation emails before each payment. If you stop getting those emails, something may have changed.
- **Cancel autopay when you cancel a service.** If you cancel a subscription or switch providers, log into that company's site and turn off autopay before your next billing date. Companies do not always stop charging when you cancel by phone.
- **Use a credit card for subscriptions when possible.** If a subscription charges you incorrectly, it is easier to dispute a credit card charge than to recover money taken directly from a bank account.
- **Never set up autopay from a link in an email.** Always go directly to the company's official website by typing the address yourself. Scammers send fake "billing" emails to steal payment information.

---

**Which method is right for you?**

Both methods work well. If you prefer having everything in one place, start with your bank's bill pay service. If a company offers a discount for autopay, set that one up directly through the company. Many people use both — bank bill pay for smaller or occasional bills, and direct autopay through the company for major recurring expenses like credit cards and utilities.`,
    steps: [
      {
        title: 'Gather your payment information before you start',
        content:
          'Find a recent paper bill or bank statement and have your bank account routing number, account number, or credit card number ready. The routing number and account number are printed at the bottom of any paper check — routing is the first 9-digit number on the left, and your account number follows.',
        tip: 'Take a photo of the bottom of a check and keep it on your phone so you have the numbers handy when setting up multiple payees.',
      },
      {
        title: 'Choose your method: pay through the company or through your bank',
        content:
          'Method 1 — Set up autopay directly on the company\'s website (they charge your account on the due date). Method 2 — Set up bill pay through your bank\'s app or website (your bank sends the payment on a date you choose). Both methods are free and safe. Use your bank\'s bill pay if you want all payments in one place.',
      },
      {
        title: 'Log in and find the payment or billing settings',
        content:
          'For the company method: log into the company\'s website and look for "Autopay," "Automatic Payments," or "Payment Settings" under your account or billing section. For the bank method: log into your bank\'s website or app and look for a section called "Bill Pay" or "Pay Bills."',
      },
      {
        title: 'Add the payment details and set the schedule',
        content:
          'Enter your bank account or credit card number when prompted. Choose the payment amount (statement balance in full is recommended for credit cards). Set the payment date. For recurring monthly bills, select "Recurring" or "Automatic" so the payment repeats every month without you needing to do anything.',
        warning:
          'If paying by bank bill pay, schedule the payment 3–5 days before the due date. Bank bill pay takes time to process, and sending it too late can result in a late fee even though you set up automatic payment.',
      },
      {
        title: 'Confirm and save a record of the setup',
        content:
          'Click "Confirm" or "Enroll." Most companies send a confirmation email — save it in a folder labeled "Bill Pay" in your email inbox. If no email arrives within a day, log back in to verify the autopay shows as "Active" or "Enrolled."',
      },
      {
        title: 'Check your account statement every month',
        content:
          'Autopay does not mean set-it-and-forget-it completely. Once a month, open your bank account and scan through the payments. Confirm the right amounts were charged on the expected dates. This habit catches billing errors and any unauthorized charges quickly.',
        tip: 'Set a monthly reminder on your phone calendar labeled "Check bank statement" — the whole review takes about five minutes.',
      },
    ],
  },

  {
    slug: 'how-to-check-your-medicare-account-online-2026',
    title: 'How to Check Your Medicare Account Online at Medicare.gov',
    excerpt:
      'Create a free Medicare.gov account to view your coverage, check recent claims, track your deductible, and download your Medicare Summary Notice from home.',
    category: 'government-civic',
    tags: [
      'Medicare',
      'Medicare.gov',
      'MyMedicare',
      'Medicare claims',
      'Medicare coverage',
      'Medicare online account',
      'Medicare Summary Notice',
      'Medicare Part A',
      'Medicare Part B',
      'Medicare fraud',
    ],
    readTime: '11 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Medicare.gov now has a free online account that lets you see your coverage details, check recent claims, and download your Medicare Summary Notice — all from your computer or phone, at any time, without calling 1-800-MEDICARE.

This guide walks through creating your account, what you can find once you are logged in, and how to spot potential billing errors or fraud.

---

**Why create a Medicare.gov account?**

Before online accounts, the only way to check your Medicare information was to wait for paper mail or call the Medicare helpline (which can involve long hold times). With an online account, you can:

- See whether a doctor, hospital, or clinic accepts Medicare before you make an appointment
- Check whether Medicare received a claim from your doctor and how much was paid
- Track how much of your annual deductible you have met so far
- Download or print your Medicare Summary Notice (MSN) — the official statement of what Medicare paid on your behalf
- Check whether you have Medicare Part A, Part B, or a Medicare Advantage plan
- Report potential Medicare fraud in minutes

The account is completely free and run by the federal government. You will never be asked to pay to access your own Medicare information.

---

**What you need before you start**

- Your **Medicare number** — the red, white, and blue Medicare card in your wallet shows this 11-character number (example: 1EG4-TE5-MK72)
- Your **Social Security number**
- Your **date of birth** and **home address**
- An **email address** you can check for a verification code
- If you already have a Login.gov or ID.me account, you can use those to log in instead

---

**Step 1 — Go to Medicare.gov and click "Log in"**

Open your web browser (Chrome, Safari, Edge, or Firefox all work). Type **medicare.gov** in the address bar and press Enter. Make sure the address bar shows a padlock icon and begins with **https://** — that confirms you are on the real government website, not a copycat.

At the top of the page, click or tap the **"Log in to Medicare"** button.

---

**Step 2 — Create your account**

If you do not already have a Medicare account, click **"Create an account."** You will be directed to create a Login.gov account, which is the secure login system the federal government uses for Social Security, Medicare, VA benefits, and other agencies.

On the Login.gov page:
- Enter your email address and create a password (at least 12 characters)
- Check your email for a verification code, then enter it to confirm your address
- Set up two-step authentication — you will enter a code sent by text or phone call each time you log in (this protects your account from anyone else accessing it)

After setting up Login.gov, return to Medicare.gov and log in with your new credentials.

---

**Step 3 — Verify your identity with your Medicare information**

The first time you log in, Medicare.gov will ask you to verify your identity. Have your Medicare card handy. You will be asked to enter:
- Your Medicare number (from your card)
- Your Social Security number
- Your date of birth
- Your address as Medicare has it on file

This one-time step connects your Login.gov account to your Medicare records.

---

**Step 4 — Explore your Medicare account**

Once logged in, your account dashboard shows several sections.

**My Coverage**

This section shows your current Medicare coverage — whether you have Part A (hospital insurance), Part B (medical insurance), or a Medicare Advantage plan (Part C). It shows the date your coverage started and your current premium amounts.

**Claims**

This is one of the most useful features. The Claims section shows every medical claim submitted to Medicare in the last 36 months. For each claim, you can see:
- The date of service
- The name of the doctor, clinic, or supplier
- The amount billed
- The amount Medicare approved
- The amount Medicare paid
- What you may owe (your share, which is typically 20% of the approved amount after meeting your deductible)

Review this list and look for any services you do not recognize. An unfamiliar charge from a provider you never visited could indicate billing fraud or a billing error.

**Deductible Status**

Medicare Part B has an annual deductible ($257 in 2026). This section shows how much of your deductible you have already met for the current year.

**Medicare Summary Notice (MSN)**

The MSN is a detailed statement that Medicare mails to you every three months when claims have been processed. You can also download your MSN directly from your online account at any time in PDF format. This is useful when you want to review charges or share your Medicare information with a financial advisor or family member.

---

**Step 5 — Find doctors and hospitals that accept Medicare**

From the Medicare.gov homepage (you do not need to be logged in for this), click **"Find care."** This is the Care Compare tool. You can search for:
- Doctors and clinicians who accept Medicare in your ZIP code
- Hospitals, nursing homes, home health agencies, and dialysis centers
- Quality ratings for hospitals and facilities

Searching "accepts Medicare" before scheduling an appointment can prevent surprise bills. A provider who does not accept Medicare assignment may charge you more than the standard Medicare amount.

---

**Step 6 — Report potential fraud**

If you see a claim in your account for a service you never received, a medical supply you never ordered, or a provider you never visited, report it.

From your Medicare account, click **"Report fraud"** or call **1-800-HHS-TIPS (1-800-447-8477)**. You can also contact your State Health Insurance Assistance Program (SHIP) — a free, unbiased counseling service available in every state. To find your local SHIP, go to **shiphelp.org**.

---

**A note on phone calls and emails about your Medicare account**

Medicare will never call you to ask for your Medicare number, Social Security number, or bank account information. If you receive a call from someone claiming to be from Medicare and asking for that information, hang up — it is a scam. Medicare communicates with you primarily by mail and through your official Medicare.gov account.`,
    steps: [
      {
        title: 'Gather your Medicare card and personal information',
        content:
          'Find your red, white, and blue Medicare card. You will need the Medicare number printed on it (an 11-character combination of letters and numbers). Also have your Social Security number, date of birth, and home address ready. You will use these to verify your identity when creating the account.',
        tip: 'If you cannot find your Medicare card, call 1-800-MEDICARE (1-800-633-4227) to request a replacement before creating your online account.',
      },
      {
        title: 'Go to Medicare.gov and start account creation',
        content:
          'Open your web browser and type medicare.gov in the address bar. Confirm the address starts with https:// and shows a padlock icon — this confirms you are on the official government site. Click "Log in to Medicare" at the top of the page, then click "Create an account."',
        warning:
          'Never click a link in an email or text message claiming to be from Medicare to create your account. Always type medicare.gov directly into your browser yourself.',
      },
      {
        title: 'Set up your Login.gov credentials and two-step verification',
        content:
          'You will be directed to Login.gov — the federal government\'s secure login system. Enter your email address, create a strong password (at least 12 characters), and confirm your email with the code sent to your inbox. Then set up two-step authentication, which sends you a code by text or phone call each time you log in. This keeps your account secure.',
      },
      {
        title: 'Verify your identity with your Medicare information',
        content:
          'After logging in for the first time, Medicare.gov will ask you to verify your identity. Enter your Medicare number (from your card), Social Security number, date of birth, and address. This is a one-time step that connects your Login.gov account to your Medicare records.',
      },
      {
        title: 'Review your coverage details and recent claims',
        content:
          'From your account dashboard, click "My Coverage" to see your current Medicare plan details. Then click "Claims" to see all medical claims from the past 36 months. For each claim, review the provider name, service date, amount billed, and what Medicare paid. Look for anything you do not recognize.',
        tip: 'Set a reminder to review your claims section every three months — the same schedule as the paper Medicare Summary Notice.',
      },
      {
        title: 'Download your Medicare Summary Notice and report any problems',
        content:
          'In your account, find the Medicare Summary Notice (MSN) section to download a PDF copy of your official benefits statement. If you spot a claim for a service you never received, click "Report fraud" inside your account, or call 1-800-HHS-TIPS. Reporting Medicare fraud is free and helps protect other people on Medicare too.',
      },
    ],
  },

  {
    slug: 'how-to-use-instacart-for-grocery-delivery-2026',
    title: 'How to Order Groceries Delivered to Your Door with Instacart',
    excerpt:
      'Use Instacart to have groceries from Kroger, Costco, Publix, Aldi, and hundreds of other stores delivered the same day. A step-by-step guide for first-time users.',
    category: 'app-guides',
    tags: [
      'Instacart',
      'grocery delivery',
      'online grocery shopping',
      'same-day delivery',
      'Kroger delivery',
      'Costco delivery',
      'food delivery',
      'senior grocery delivery',
      'grocery app',
      'Instacart+',
    ],
    readTime: '13 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Instacart is a grocery delivery service that sends a personal shopper to a grocery store on your behalf, then delivers your groceries to your front door — often within a few hours. It works with hundreds of stores across the United States, including Kroger, Costco, Aldi, Publix, Safeway, Wegmans, and many local supermarkets.

This guide walks you through everything you need to know to place your first Instacart order: how to find stores near you, how to add items to your cart, what to expect at checkout, what happens if an item is out of stock, and how to save money on delivery.

---

**What Instacart is and how it works**

Instacart is not a store itself. It connects you to real grocery stores near you. When you place an order, an Instacart shopper (a gig worker who uses the Instacart app) goes to that specific store, picks the items from your list, and either delivers them to you or hands them off for same-day delivery. You never have to leave home.

Instacart charges a delivery fee, a service fee, and sometimes a small markup on individual items (the price you pay may be slightly higher than the in-store price at some retailers — this varies by store and location). You also have the option to tip your shopper, which is encouraged since shoppers work for tips similar to restaurant delivery drivers.

---

**Step 1 — Download the Instacart app or go to Instacart.com**

**On iPhone:** Open the App Store, search for **Instacart**, and tap "Get" to download the free app.

**On Android:** Open the Google Play Store, search for **Instacart**, and tap "Install."

**On a computer:** Open your browser and go to **instacart.com**. You do not need the app if you prefer to shop from a computer.

---

**Step 2 — Create your account**

Open the app and tap **"Log in or Sign up."** Tap **"Sign up"** to create a new account. You can sign up with:
- Your email address and a password
- Your Google account
- Your Apple account (iPhone only)

Enter your name, email, and password, then tap "Create account." Instacart will send a verification email — click the link in that email to confirm your address.

---

**Step 3 — Enter your delivery address**

Instacart will ask for your delivery address. Type your full home address — street number, street name, city, state, and ZIP code. This is where your groceries will be delivered.

Tap **"Use this address"** to confirm. Instacart will now show you all the stores that deliver to your area.

---

**Step 4 — Choose a store**

You will see a list of grocery stores available near you. Familiar names typically include Kroger, Costco, Aldi, Publix, Safeway, CVS, Walgreens, and others depending on your region.

Tap on the store you prefer to shop at. You will be taken to that store's section of Instacart, which shows the same departments and categories as the physical store (Produce, Dairy, Meat, Pantry, Frozen, etc.).

**Quick Tip:** If you regularly shop at a specific store, tap its name to start there every time. Some people keep two separate carts from two different stores — for example, produce from one store and bulk items from Costco.

---

**Step 5 — Browse items and add them to your cart**

Browse by department (tap "Produce," "Bread," "Dairy," etc.) or use the search bar at the top to find a specific item. Search for "whole milk" or "chicken breast" or "Tide pods" — Instacart will show you matching products from that store.

Tap on any item to see its size, price, and unit price. Tap **"Add to cart"** to add it. You can change the quantity by tapping the + or – buttons.

As you add items, your cart total appears at the bottom of the screen. Tap it at any time to review everything in your cart.

---

**Step 6 — Set your item replacement preferences**

Because your shopper is visiting a real store, some items may be out of stock on the day you order. Instacart lets you set preferences in advance so the shopper knows what to do.

For each item in your cart, you can choose:
- **"Replace with best match"** — the shopper picks a similar item at the same price or lower (recommended for most items)
- **"Pick specific replacement"** — you choose exactly which other product to use if the first is unavailable
- **"Don't replace"** — the shopper skips the item and you are not charged for it

You can also send real-time messages to your shopper through the Instacart app while your order is being picked — many people use this to confirm replacements on the spot.

---

**Step 7 — Go to checkout**

When your cart looks right, tap **"Go to checkout"** (the button at the bottom of the cart screen).

At checkout, review or enter:
- **Delivery address** — confirm it shows your correct home address
- **Delivery time** — choose from available time windows. Options include "As soon as possible" (often 1–2 hours), or specific windows later today or tomorrow. Scheduled deliveries may have lower fees or more available shoppers.
- **Payment method** — enter your credit card or debit card number. Instacart accepts most major cards. You can also pay with an EBT/SNAP card at many stores.
- **Leave at door** option — if you prefer contactless delivery (shopper leaves the bags at your door and texts a photo)

**Step 8 — Review fees and tip, then place your order**

Before confirming, Instacart shows you a summary of all costs:
- **Item total** — the cost of your groceries
- **Delivery fee** — typically $3.99 to $9.99 depending on order size, store, and your membership status
- **Service fee** — a percentage (usually 5%) that covers Instacart's operating costs
- **Tip** — Instacart pre-fills a suggested tip. You can adjust it up or down. Shoppers rely on tips as a meaningful part of their pay. A tip of 5–10% is common for a standard order.

Tap **"Place order"** to confirm. You will receive a confirmation email and can track your shopper's progress live in the app.

---

**How to save money on Instacart**

**Instacart+ membership (formerly Instacart Express)**

Instacart offers a paid membership called Instacart+ that costs $9.99 per month or $99 per year. Members get free delivery on orders over $35 (at participating stores), reduced service fees, and other perks. If you use Instacart more than twice a month, the membership usually pays for itself.

**Look for store coupons inside the app**

Instacart shows digital coupons from the store inside the app. Before checking out, look for a "Coupons" or "Deals" section — clipping digital coupons here applies the discount to your order automatically.

**Compare prices before ordering large amounts**

For staple items you buy in bulk (rice, paper towels, olive oil), it is worth checking whether Instacart's price matches the in-store price. Some stores charge the same price; others have a small markup. If you see a big difference on a large purchase, it may make sense to buy that item in person.

**Schedule your delivery instead of ordering immediately**

Scheduled deliveries (choosing a window later today or tomorrow) often have lower delivery fees than "rush" or immediate delivery windows.

---

**What to do if there is a problem with your order**

If an item arrives damaged, missing, or incorrect, open the Instacart app, go to "Your orders," find the order, and tap "Report an issue." Instacart is generally responsive and will issue a credit or refund for legitimate problems.

You can also rate your shopper after delivery. A rating helps good shoppers continue getting orders.`,
    steps: [
      {
        title: 'Download the Instacart app and create your account',
        content:
          'Search for "Instacart" in the App Store (iPhone) or Google Play Store (Android) and download the free app. You can also use instacart.com on a computer. Open the app, tap "Sign up," and create a free account using your email address. Confirm your email by clicking the link Instacart sends you.',
      },
      {
        title: 'Enter your delivery address and choose a store',
        content:
          'When prompted, type your full home address. Instacart will show you all grocery stores that deliver to your location. Tap the store you normally shop at — you will recognize names like Kroger, Publix, Aldi, Costco, or Safeway. The store\'s departments will appear just like walking through a real grocery store.',
        tip: 'If you do not see your regular grocery store listed, check the full list by scrolling down — some stores appear lower on the list based on distance or availability.',
      },
      {
        title: 'Search for items and add them to your cart',
        content:
          'Use the search bar at the top of the screen to find specific products, or browse by department (Produce, Dairy, Bakery, etc.). Tap any item to see details, then tap "Add to cart." Adjust the quantity with the + and – buttons. Your running total appears at the bottom of the screen at all times.',
        tip: 'If you shop at the same store weekly, Instacart remembers your past orders under "Buy Again" — tap that section to quickly re-add your usual items instead of searching from scratch.',
      },
      {
        title: 'Set your item replacement preferences',
        content:
          'For each item in your cart, decide what you want the shopper to do if the item is out of stock. Choosing "Replace with best match" lets the shopper pick something similar — this is the most convenient option for most items. For specialty items where only that specific brand or size works for you, choose "Pick specific replacement" and select your backup choice.',
      },
      {
        title: 'Go to checkout and choose your delivery window',
        content:
          'Tap "Go to checkout." Confirm your delivery address is correct. Choose a delivery time — "As soon as possible" usually means 1–2 hours, or you can schedule a window later in the day or tomorrow. Scheduled windows sometimes cost less. Enter your payment card information.',
        warning:
          'Check that your delivery address shows your actual home address, not a saved address from a previous session. Groceries delivered to the wrong address can be difficult to recover.',
      },
      {
        title: 'Review the full cost, adjust your tip, and place the order',
        content:
          'Before tapping "Place order," review the breakdown: item total, delivery fee, service fee, and tip. You can increase or decrease the tip — your shopper will see the amount after delivery. Tap "Place order" to confirm. You will receive a confirmation and can track your shopper live in the app.',
        tip: 'After your first order, check whether Instacart+ membership would save you money. If you order groceries more than twice a month, the $9.99/month membership typically covers the delivery fees it waives.',
      },
    ],
  },
];
