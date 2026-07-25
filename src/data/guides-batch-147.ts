// TekSure Guides Batch 147 — 4 guides covering: phone software updates,
// Google Calendar for appointments, blocking spam texts, and using Apple Pay
// or Google Pay at stores and online.
import type { Guide } from './guides';

export const guidesBatch147: Guide[] = [
  {
    slug: 'how-to-update-your-phone-to-latest-version-2026',
    title: 'How to Update Your Phone to the Latest Software Version',
    excerpt:
      'Keeping your phone updated protects you from hackers and fixes bugs. Learn how to update an iPhone or Android phone safely — your photos stay put.',
    category: 'essential-skills',
    tags: [
      'phone update',
      'software update',
      'ios update',
      'android update',
      'security patches',
      'iphone',
      'android',
    ],
    readTime: '6 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Every few weeks your phone may show a small notification asking you to install a software update. Many people tap "Remind Me Later" for months and never get around to it. This guide explains why those updates matter and walks you through each step.

**Why updates are so important**

Phone makers — Apple, Samsung, Google, and others — release software updates for three main reasons. First, and most critically, they fix security holes. Hackers constantly look for weaknesses in phone software. When a weakness is found, the phone company writes a fix and sends it out as an update. If you skip the update, your phone remains vulnerable to that known weakness.

Second, updates fix bugs — small errors in the software that can make your phone freeze, drain the battery faster, or cause apps to crash. Third, updates sometimes add new features or improve the camera.

**Your photos and apps are safe**

One of the most common worries is that updating will delete photos, messages, or apps. It will not. A software update replaces the operating system code running in the background — not your personal files. Your photos, contacts, text messages, and apps stay exactly where they are.

That said, it is always a smart habit to back up your phone before any major update, so you have a copy of your data no matter what. The steps below include how to do this quickly.

**Before you update: three things to do**

1. Charge your phone or plug it in. Updates can take 30 minutes or more, and a phone that dies mid-update can cause problems. Aim for at least 50 percent battery, or stay plugged in throughout.
2. Connect to Wi-Fi. Updates are often hundreds of megabytes or more. Downloading over your cellular data connection can eat into your monthly data allowance and is much slower. Make sure the Wi-Fi symbol shows in the top corner of your screen before starting.
3. Back up your phone. On iPhone, go to Settings, tap your name at the top, then iCloud, then iCloud Backup, and tap Back Up Now. On Android, go to Settings, search "backup," and tap Back up now. Wait for the backup to finish before starting the update.

**What to do if an update fails**

Occasionally an update gets stuck or shows an error. If this happens: restart your phone by holding the power button and tapping Restart. Then try the update again. If it fails a second time, make sure you have enough free storage — go to Settings, then General, then iPhone Storage (iPhone) or Settings, then Storage (Android) to check. Updates need several gigabytes of free space to install. If storage is too low, delete a few old apps or photos you no longer need, then try again.

If problems continue, the Apple Support website (support.apple.com) and Google Support (support.google.com) both have step-by-step troubleshooting for failed updates. You can also call Apple Support at 1-800-275-2273 or visit a carrier store for hands-on help.

**How often should you update?**

Check for updates once a month if your phone does not notify you automatically. You can also turn on automatic updates so the phone downloads and installs them overnight while charging.`,
    steps: [
      {
        title: 'Back up your phone first',
        content:
          'On iPhone: open Settings, tap your name at the very top, then tap iCloud, then iCloud Backup, then tap "Back Up Now." Wait until it says "Last Backup: Today." On Android: open Settings, tap "Google," then "Backup," then "Back up now." This saves a copy of your data before anything changes.',
        tip: 'Quick Tip: Backups only run on Wi-Fi. Make sure you are connected to your home Wi-Fi network before tapping Back Up Now.',
      },
      {
        title: 'Plug in your phone and connect to Wi-Fi',
        content:
          'Updates can take 20 to 40 minutes and use a lot of battery. Plug your phone into its charger. Then confirm Wi-Fi is on: on iPhone, swipe down from the top-right corner and check that the Wi-Fi symbol (it looks like curved lines) is highlighted. On Android, swipe down from the top of the screen and make sure Wi-Fi is turned on and shows your home network name.',
        warning:
          'Do not start an update on cellular data. It can use up your monthly data allowance and may time out before finishing.',
      },
      {
        title: 'Check for and install the update on iPhone',
        content:
          'Open the Settings app (the gray gear icon). Tap "General," then tap "Software Update." Your phone will check for available updates. If one is available, you will see a description and a blue button that says "Download and Install" or "Install Now." Tap that button. You may be asked to enter your passcode. The phone will download the update, then restart and install it. The screen may go dark and show an Apple logo with a progress bar — this is normal. Do not turn off your phone until it finishes.',
        tip: 'Quick Tip: To have your iPhone update itself overnight automatically, scroll down on the Software Update screen and tap "Automatic Updates." Turn on both "Download iOS Updates" and "Install iOS Updates."',
      },
      {
        title: 'Check for and install the update on Android',
        content:
          'Open the Settings app (the gear icon). Scroll down and tap "System," then tap "System update." The phone will check for available updates. If one is ready, tap "Download" or "Install." Your phone will restart one or more times during the process. On Samsung phones, the path is Settings → Software update → Download and install. On Google Pixel phones, it is Settings → System → System update.',
        tip: 'Quick Tip: Android phones from different makers (Samsung, Google, Motorola, LG) have slightly different Settings menus. If you do not see "System," try searching "update" in the Settings search bar at the top of the screen.',
      },
      {
        title: 'Confirm the update installed correctly',
        content:
          'After the phone restarts, open Settings and check the software version. On iPhone: Settings → General → About → iOS Version. On Android: Settings → About phone → Android version. Compare the number to the latest version listed on Apple Support (support.apple.com) or your phone maker\'s website to confirm you are up to date.',
      },
    ],
  },

  {
    slug: 'how-to-use-google-calendar-for-appointments-2026',
    title: 'How to Use Google Calendar to Track Appointments and Events',
    excerpt:
      'Google Calendar is a free tool for keeping doctor appointments, family events, and reminders in one place — on your phone or computer.',
    category: 'app-guides',
    tags: [
      'google calendar',
      'calendar app',
      'appointments',
      'reminders',
      'schedule',
      'google',
      'gmail',
    ],
    readTime: '7 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Keeping track of doctor appointments, family birthdays, grandchildren's school events, and daily reminders can feel overwhelming. Google Calendar is a free tool from Google that puts everything in one place. You can use it on your phone, tablet, or computer — and it automatically syncs so your schedule is always up to date everywhere.

**What you need**

You need a Google account (Gmail address) to use Google Calendar. If you already use Gmail, you already have one. If you do not have a Gmail address, you can create one for free at gmail.com. Google Calendar works in any web browser at calendar.google.com and as a free app on iPhone and Android phones.

**The two main views**

Google Calendar has several ways to look at your schedule. "Day" view shows one day at a time. "Week" view shows seven days at once — good for seeing the whole week ahead. "Month" view shows the full month with event dots on each day. You can switch between views by tapping "Day," "Week," or "Month" at the top of the screen.

**Using colors to stay organized**

You can assign different colors to different types of events — for example, blue for medical appointments, green for family events, and red for urgent reminders. This makes it easy to see what kind of day is coming up at a glance. When you create or edit an event, tap the color circle to pick a color.

**Google Calendar is private by default**

Only you can see your calendar unless you choose to share it. Sharing is optional and is covered in the steps below. Your events are not visible to anyone else.

**Syncing with your phone**

If you add an event on your computer, it automatically appears on your phone within seconds — and vice versa. This means you only have to enter an appointment once. Google Calendar also works well with Apple's built-in Calendar app on iPhone, so you can see Google Calendar events alongside iCloud events if you prefer.

**Source:** Google Calendar Help Center at support.google.com/calendar`,
    steps: [
      {
        title: 'Open Google Calendar',
        content:
          'On a computer: open any web browser (Chrome, Edge, Safari, Firefox) and go to calendar.google.com. Sign in with your Gmail address and password if asked. On a phone or tablet: download the free "Google Calendar" app from the App Store (iPhone) or Google Play Store (Android). Open the app and sign in with your Gmail address.',
        tip: 'Quick Tip: If you are already signed into Gmail in your browser, Google Calendar will open directly to your calendar without asking you to sign in again.',
      },
      {
        title: 'Create a new event',
        content:
          'On a computer: click the "+ Create" button in the top-left corner or click any date on the calendar. A box will appear where you can type the event name (for example, "Dr. Smith – checkup"). Add the date and time, then click "More options" to add a location, notes, or a reminder. Click "Save" when done. On the phone app: tap the "+" button at the bottom-right corner of the screen. Fill in the event name, date, and time, then tap "Save" at the top.',
        tip: 'Quick Tip: You can type natural language like "Doctor appointment Tuesday at 2 pm" into the event name field and Google Calendar will automatically set the date and time for you.',
      },
      {
        title: 'Set a reminder or notification',
        content:
          'When creating or editing an event, scroll down to find the "Add notification" section. Tap or click it to choose when you want a reminder — for example, 1 day before, 2 hours before, or 30 minutes before. You can add more than one reminder to the same event. When the time comes, your phone will show a notification on the screen, and you will also receive an email reminder if you have notifications turned on.',
        tip: 'Quick Tip: For doctor appointments, set two reminders — one the day before (so you have time to prepare) and one 2 hours before (so you have time to travel).',
      },
      {
        title: 'Invite a family member to an event',
        content:
          'When creating or editing an event, look for the "Add guests" field. Type the Gmail address of the family member you want to invite. They will receive an email invitation and can accept or decline. Once they accept, the event appears on their Google Calendar too. This is useful for family dinners, trips, or doctor appointments where a family member is joining you.',
        warning:
          "Make sure you have the correct email address before sending an invitation. Invitations go to the exact address you type — a typo will send it to the wrong person.",
      },
      {
        title: 'Share your calendar with a family member',
        content:
          'Sharing your calendar lets a family member see all of your upcoming events without you having to invite them to each one individually. On a computer: click the three-dot menu next to your calendar name on the left side of the screen, then click "Settings and sharing." Under "Share with specific people," enter a family member\'s Gmail address and choose whether they can only see events or also edit them. They will receive an email to accept the shared calendar.',
        tip: 'Quick Tip: This is especially helpful if a family member helps manage your schedule or drives you to appointments. They can see everything coming up on your calendar from their own phone.',
      },
      {
        title: 'Switch between week view and month view',
        content:
          'On a computer: look for the view buttons near the top right of the screen — you will see "Day," "Week," "Month," "Year," and "Schedule." Click any of them to switch. "Schedule" view is particularly useful — it shows a simple list of upcoming events in order, which many people find easier to read than a grid. On the phone app: tap the three horizontal lines (menu icon) at the top left and then tap "Schedule," "Day," "3 days," or "Month" to switch views.',
      },
    ],
  },

  {
    slug: 'how-to-block-and-report-spam-text-messages-2026',
    title: 'How to Block and Report Spam Text Messages',
    excerpt:
      'Spam texts are annoying and often dangerous. Learn how to block them on iPhone and Android, and how to report them to the FTC to help stop the scammers.',
    category: 'troubleshooting',
    tags: [
      'spam texts',
      'block texts',
      'scam texts',
      'smishing',
      'text message scam',
      'ftc',
      'iphone',
      'android',
    ],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Spam text messages — also called "smishing" (a combination of SMS and phishing) — are fake texts designed to trick you into clicking a link, giving away personal information, or calling a fake number. They are one of the fastest-growing forms of fraud in the United States.

**Common types of spam texts**

- **Fake delivery notifications:** "Your package could not be delivered. Click here to reschedule." These impersonate UPS, FedEx, or the US Postal Service.
- **IRS or Social Security alerts:** "Your Social Security number has been suspended. Call immediately." The government does not contact you by text for these matters.
- **Prize scams:** "Congratulations! You won a $500 gift card. Claim now." There is no prize.
- **Bank fraud alerts:** "Unusual activity on your account. Verify now." These impersonate your bank to steal login information.

**Do not reply "STOP"**

When you get a spam text from a number you do not recognize, your instinct might be to reply "STOP" to opt out. With legitimate companies you signed up with, "STOP" works. But with random spam texts from unknown numbers, replying "STOP" — or any reply at all — actually confirms to the sender that your number is active and belongs to a real person. This can lead to even more spam. Instead, block the number without replying.

**What about legitimate texts?**

This guide is about blocking unknown senders sending spam. If you get a text from your real bank, pharmacy, or doctor's office asking you to confirm an appointment, those are generally safe. When in doubt, do not tap any link in the text — instead, call the organization directly using a phone number from their official website.

**Sources:** FTC.gov/scams, CISA.gov, How-To Geek`,
    steps: [
      {
        title: 'Recognize a spam text',
        content:
          'Common warning signs: the sender is a number you do not recognize; the message creates urgency ("Act now or your account will be closed"); there is a link asking you to click it; the message claims you won something you did not enter; or the message is about a package delivery when you are not expecting one. If something feels off, trust that feeling — do not tap any links.',
        warning:
          'Never tap a link in a suspicious text message. Even visiting the linked page can sometimes trigger a download or expose your information.',
      },
      {
        title: 'Block a spam number on iPhone',
        content:
          'Open the Messages app. Tap the spam conversation to open it. Tap the sender\'s phone number or name at the top of the screen. Tap the small information icon (a circle with a lowercase "i"). Scroll down and tap "Block this Caller." Tap "Block Contact" to confirm. The number is now blocked — you will no longer receive calls or texts from it. You can manage blocked numbers anytime in Settings → Phone → Blocked Contacts.',
        tip: 'Quick Tip: You can also filter unknown senders entirely. Go to Settings → Messages and turn on "Filter Unknown Senders." Texts from people not in your contacts go to a separate folder, keeping your main inbox cleaner.',
      },
      {
        title: 'Block a spam number on Android',
        content:
          'Open the Messages app (the one pre-installed on your phone). Tap and hold the spam conversation until a checkmark appears. Tap the three-dot menu icon (top right corner), then tap "Block" or "Block and report spam." On Samsung phones: open the conversation, tap the three-dot menu, tap "Block number," then confirm. The process is similar on most Android phones, though exact menu names may vary slightly by brand.',
        tip: 'Quick Tip: On Android you can also enable spam protection in the Messages app settings. Open Messages, tap the three-dot menu, tap Settings, then "Spam protection," and turn it on. Google will automatically flag likely spam messages.',
      },
      {
        title: 'Forward the spam text to 7726 to report it to your carrier',
        content:
          'Typing 7726 spells "SPAM" on a phone keypad. All major US carriers — AT&T, Verizon, T-Mobile, and others — accept spam reports at this number. Forward the suspicious text to 7726. Your carrier will send you an automated reply asking for the sender\'s number, then use that information to take action. This is free and does not count against your messaging plan.',
        tip: 'Quick Tip: On iPhone, to forward a text, press and hold the message bubble, tap "More," then tap the arrow icon to forward it. Type 7726 as the recipient and send.',
      },
      {
        title: 'Report the scam to the FTC',
        content:
          'The Federal Trade Commission (FTC) collects reports of spam and scam texts and uses them to investigate and shut down scammers. Go to reportfraud.ftc.gov on your phone or computer. Select "Text" as the contact method, then describe what happened and paste or type the phone number that texted you. You do not need to provide your personal information to file a report. Your report helps protect other people, especially other seniors who may receive the same messages.',
      },
    ],
  },

  {
    slug: 'how-to-use-apple-pay-or-google-pay-2026',
    title: 'How to Use Apple Pay or Google Pay at Stores and Online',
    excerpt:
      'Apple Pay and Google Pay let you pay with your phone instead of a physical card — and your real card number is never shared with the store.',
    category: 'online-banking',
    tags: [
      'apple pay',
      'google pay',
      'contactless payment',
      'mobile payment',
      'wallet',
      'google wallet',
      'tap to pay',
    ],
    readTime: '7 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Apple Pay (for iPhone and Apple Watch) and Google Pay (for Android phones) let you pay for things by tapping your phone on a payment reader at a store — no wallet needed. You can also use them to pay on websites and in apps. Millions of Americans use these services every day at grocery stores, pharmacies, restaurants, and more.

**Why is it safer than a physical card?**

This surprises many people: paying with Apple Pay or Google Pay is actually more secure than swiping or inserting your physical card. Here is why.

When you tap your phone to pay, the store never sees your real card number. Instead, your phone creates a one-time temporary code (called a "token") specific to that single transaction. Even if a store's payment system were hacked, the thieves would only get that one-time code — not your real card number. With a physical card swipe, your actual card number travels through the store's system.

Your payment is also protected by your phone's security. On iPhone, Face ID, Touch ID, or your passcode must verify the payment before it goes through. On Android, your fingerprint or PIN is required. This means that if someone steals your phone, they cannot use Apple Pay or Google Pay to make purchases without your face, fingerprint, or PIN.

**Which stores accept it?**

Look for a contactless payment symbol at the checkout — it looks like a series of curved lines (like a sideways Wi-Fi symbol) or the Apple Pay or Google Pay logo. Most major grocery chains, pharmacies like CVS and Walgreens, fast-food restaurants, Target, Walmart, and many smaller businesses accept contactless payments. The number of participating stores grows every year.

**What about online?**

When shopping online, many websites now show an "Apple Pay" or "Google Pay" button at checkout. Tapping that button confirms your payment through your phone without typing your card number into the website — another layer of protection.

**Sources:** Apple Support (support.apple.com), Google Pay Help (support.google.com/googlepay)`,
    steps: [
      {
        title: 'Add your card to Apple Wallet (iPhone)',
        content:
          'Open the Wallet app on your iPhone — it looks like a small card wallet on a white background. Tap the "+" button in the top right corner. Tap "Debit or Credit Card." You can point your phone\'s camera at your physical card to scan the numbers automatically, or tap "Enter Card Details Manually" to type them in. Follow the on-screen steps to verify your card — your bank may send a text message or ask you to call to confirm. Once verified, your card appears in the Wallet app and is ready to use.',
        tip: 'Quick Tip: You can add up to 12 cards to Apple Wallet. You can also add your FSA/HSA card, transit cards, and some store loyalty cards.',
      },
      {
        title: 'Add your card to Google Wallet (Android)',
        content:
          'Open the Google Wallet app on your Android phone. If you do not see it, download it for free from the Google Play Store. Tap "Add to Wallet," then tap "Payment card." You can scan your physical card with the camera or enter the card numbers manually. Your bank will verify the card — usually by texting a code to your phone number on file. Once verified, the card appears in Google Wallet and is ready to use.',
        tip: 'Quick Tip: On most Android phones, Google Wallet is already installed. Look for an icon that looks like a colorful "G" with a card behind it.',
      },
      {
        title: 'Pay at a store with Apple Pay',
        content:
          'When you are ready to pay at the checkout, look for the contactless symbol on the payment reader. On iPhones with Face ID (iPhone X and later): double-click the side button (the one on the right edge of the phone). Your Wallet card appears. Hold your phone near the payment reader and glance at your phone to confirm with Face ID — you will feel a tap and hear a sound when the payment goes through. On iPhones with a Home button (iPhone 8 and earlier): double-click the Home button and confirm with Touch ID (your fingerprint), then hold near the reader.',
        warning:
          'Keep your phone within about an inch of the payment terminal. If payment does not go through, try repositioning the phone directly over the contactless symbol.',
      },
      {
        title: 'Pay at a store with Google Pay',
        content:
          'Unlock your Android phone (you do not need to open any app). Hold the back of your phone near the payment terminal\'s contactless symbol. Your phone will detect the reader automatically and may ask you to confirm with your fingerprint or PIN. You will see a checkmark or hear a confirmation sound when the payment is complete. Some Android phones require you to open the Google Wallet app first and tap "Pay" before holding to the reader — check your phone\'s instructions if the first method does not work.',
        tip: 'Quick Tip: Make sure NFC (Near Field Communication — the technology that enables tap-to-pay) is turned on. On Android: go to Settings → Connected devices → Connection preferences → NFC and make sure it is toggled on.',
      },
      {
        title: 'Pay online with Apple Pay or Google Pay',
        content:
          'When shopping on a website or in an app, look for an "Apple Pay" or "Google Pay" button at checkout — usually near the credit card entry fields. On iPhone: tap the Apple Pay button. A summary of your order appears. Double-click the side button to confirm the payment with Face ID. The payment goes through without you typing your card number anywhere. On Android: tap the Google Pay button. Your saved card appears. Confirm the purchase. This protects you from typing your card number into websites that might not be fully secure.',
        tip: 'Quick Tip: Look for Apple Pay or Google Pay buttons on large retail websites like Target, Nike, and many smaller online stores. The option is growing more common each year.',
      },
    ],
  },
];
