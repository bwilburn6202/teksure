// TekSure Guides Batch 154 — 4 guides covering: checking whether an internet
// outage is on your provider's end before calling, using the Notes app on
// iPhone and Android, unsubscribing from unwanted marketing emails safely,
// and understanding your phone's IMEI number and why it matters.
import type { Guide } from './guides';

export const guidesBatch154: Guide[] = [
  {
    slug: 'how-to-check-internet-outage-before-calling-2026',
    title: 'How to Check if Your Internet Is Out — Before You Call Your Provider',
    excerpt:
      'Before spending time on hold with your internet provider, find out in minutes whether the outage is on their end, your router, or your building.',
    category: 'internet-connectivity',
    tags: [
      'internet outage',
      'wifi down',
      'ISP',
      'Xfinity',
      'AT&T',
      'Verizon',
      'Spectrum',
      'Downdetector',
      'router',
      'modem',
      'troubleshooting',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Few things are more frustrating than losing your internet connection and then spending 45 minutes on hold waiting to talk to someone at your provider — only to be told there is a known outage in your area and nothing can be done until it is fixed. You could have found that out in two minutes from your phone.

This guide walks you through a quick set of checks you can do before you pick up the phone. By the time you finish, you will know whether the problem is on your provider's network, your home equipment, or somewhere specific to your device.

**Why this matters**

Internet providers — Xfinity (Comcast), AT&T, Verizon, Spectrum (Charter), and others — all maintain outage maps and status pages on their websites. They also report issues in real time on a third-party website called Downdetector. These resources are free, available 24 hours a day, and you can check them on your smartphone even when your home internet is down.

Knowing the difference between a provider outage and a home equipment problem also helps you describe the issue clearly when you do call, which means a faster, less frustrating conversation.

**What you will need**

- Your smartphone with cellular data (even a small amount works)
- Your internet account number (optional but helpful — found on your bill)
- A look at the lights on your modem or router (they are on the device itself)

---

**Step 1: Check your provider's outage page directly**

Every major internet provider has a status or outage page. You can visit these on your phone using cellular data even if your home internet is off:

- **Xfinity / Comcast:** Go to xfinity.com/support/status or open the Xfinity app. Sign in and tap "Check for outages" or "Service status." The app will tell you whether there is a known outage at your address.
- **AT&T:** Go to att.com/outages or open the myAT&T app. Tap the Account tab, then look for "Check for outages."
- **Verizon Fios:** Go to verizon.com/support/residential/internet/network-outage or open the My Fios app and tap "Check network status."
- **Spectrum:** Go to spectrum.com/support/account and sign in, or open the My Spectrum app and look for service alerts near the top of the home screen.

If the page shows a known outage at your address, you can stop here — the problem is on their end and they are likely already working on it. You can also sign up for a text alert when service is restored instead of waiting on hold.

**Step 2: Check Downdetector for your provider**

Downdetector (downdetector.com) is a free website that gathers reports from real customers across the country. When a lot of people in the same area report a problem with the same provider at the same time, a spike appears on the chart.

On your phone, go to downdetector.com and type your provider's name in the search bar — for example, "Xfinity" or "Spectrum." You will see a live chart showing recent reports. If the chart shows a large spike in the last hour or two, there is likely a widespread outage.

You will also see a map showing where reports are coming from. If your region lights up, that confirms the problem is on the provider's network, not inside your home.

**Step 3: Test whether it is just your WiFi router — not a wider outage**

Sometimes the internet coming into your home is fine, but your WiFi router has frozen or lost its connection. Here is how to tell the difference:

- **Try a neighbor's WiFi or a coffee shop:** If you can connect to the internet somewhere else nearby with no problem, your provider's network is probably working fine.
- **Check your phone on cellular data:** Turn off WiFi on your phone (go to Settings → WiFi and tap the green switch to turn it off). Then try loading a website or opening an app. If it works on cellular but not on WiFi, the problem is your home router, not the provider.
- **Restart your modem and router:** Unplug the power cord from both your modem (the box that connects to the cable or phone line coming into your home) and your router (the box that broadcasts WiFi). Wait 30 seconds. Plug the modem back in first and wait for its lights to stabilize — usually about a minute. Then plug the router back in. Give it another minute and test your connection again. This fixes a surprising number of outages.

**Step 4: Look at the lights on your modem and router**

The lights on the front of your modem and router tell a story. Here is what the most common light states mean:

- **Power light is off:** The device has no power. Check the power cord and the outlet.
- **Internet or WAN light is red or off:** The modem is not receiving a signal from your provider. This usually means the problem is on the line coming into your home — either a provider outage or a loose cable.
- **Internet or WAN light is solid green or white:** The modem is receiving a signal. The problem is somewhere between the modem and your device.
- **WiFi light is off:** WiFi may be disabled. Look for a WiFi button on the router and make sure it has not been accidentally switched off.

Write down what you see on the lights before you call — the support representative will ask.

**Step 5: What to have ready when you do call**

If you have checked all of the above and still cannot find the cause, it is time to call. Have these items ready before you dial:

1. **Your account number** — printed on your monthly bill, or visible in the provider's app
2. **Your service address** — the address where the internet is installed
3. **A description of the modem/router lights** — for example, "The power light is green, the internet light is red, and the WiFi light is off"
4. **What you have already tried** — tell them you restarted the modem and router and checked the outage map
5. **Whether it affects all devices or just one** — if only one device has no internet, the problem is likely that device, not the provider

Giving the representative this information upfront usually cuts the call time in half.

---

**Quick Tip:** Most providers also let you report and track outages through their app. Downloading your provider's app now — while the internet is working — means you will have a faster way to check next time your connection goes down.`,
    steps: [
      {
        title: 'Check your provider\'s own outage page',
        content:
          'On your smartphone using cellular data, visit your provider\'s outage page: Xfinity at xfinity.com/support/status, AT&T at att.com/outages, Verizon Fios through the My Fios app, or Spectrum through the My Spectrum app. Sign in if prompted, then look for a service status message tied to your address.',
        tip: 'Download your provider\'s app now, while the internet is working, so you have it ready the next time the connection goes down.',
      },
      {
        title: 'Check Downdetector for a spike in reports',
        content:
          'Open a browser on your phone and go to downdetector.com. Search for your provider\'s name. Look at the chart — a large spike of reports in the last hour or two, especially on the map near your area, means many customers are affected and the outage is on the provider\'s network.',
        tip: 'Downdetector covers hundreds of providers. You can also search by city name if you are not sure which provider serves your neighborhood.',
      },
      {
        title: 'Test whether it is your WiFi router, not a provider problem',
        content:
          'Turn off WiFi on your phone and try loading a website on cellular data. If it loads, your provider\'s network is likely working and the problem is your home router. Try restarting your modem and router: unplug both, wait 30 seconds, plug the modem in first and wait for its lights to stabilize, then plug in the router.',
        warning:
          'Do not unplug your modem if it is also your home phone base — that will disconnect your landline during the restart.',
      },
      {
        title: 'Read the lights on your modem and router',
        content:
          'Look at the lights on the front of your modem (the box connected to the cable or phone line on the wall). A red or off internet/WAN light means the modem is not getting a signal from the provider. Write down the color and state of each light — the support team will ask for this.',
        tip: 'Your modem\'s manual (or a quick web search for your modem model + "light meanings") will explain each light in detail.',
      },
      {
        title: 'Gather your information before calling',
        content:
          'Before you dial, have ready: your account number (on your bill or in the app), your service address, a description of the modem lights, what you have already tried, and whether all devices are affected or just one. Sharing this upfront helps the representative find a solution faster.',
        tip: 'Most providers now offer a callback option so you do not have to stay on hold. Ask for it when the automated system answers.',
      },
    ],
  },

  {
    slug: 'how-to-use-notes-app-on-iphone-and-android-2026',
    title: 'How to Use the Notes App on iPhone and Android',
    excerpt:
      'The Notes app on your phone is a quick place to write down ideas, make shopping lists, and keep important info. Learn how to create, organize, and share notes.',
    category: 'phone-guides',
    tags: [
      'notes app',
      'iphone notes',
      'google keep',
      'android notes',
      'shopping list',
      'checklist',
      'icloud',
      'organize',
      'pin notes',
      'share notes',
    ],
    readTime: '9 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Your phone's Notes app is one of the most useful tools on the device — and one of the most overlooked. Instead of hunting for a scrap of paper to write down a phone number, a grocery list, or a good idea, you can tap a button and type (or speak) a note in seconds. It is always in your pocket, it never gets lost, and it syncs automatically to your other Apple devices if you use iCloud.

This guide covers the Notes app on iPhone and its Android equivalent, Google Keep. You do not need any account beyond the one already on your phone.

**iPhone: Using the Notes App**

Apple's Notes app comes pre-installed on every iPhone. You cannot delete it. Here is how to get comfortable using it.

**Opening Notes**

The Notes app icon is yellow with a white notepad. It is usually on your home screen. If you cannot find it, swipe down from the middle of any home screen to open the search bar and type "Notes" — it will appear immediately.

**Creating your first note**

Open Notes. You will see a list of any notes you have already created (or it may be empty the first time). Tap the orange pencil-and-paper icon in the bottom-right corner to start a new note. A blank white screen will appear with a keyboard ready for you to type.

The first line you type becomes the title of the note — it will appear in bold at the top and as the note's name in your list. Type whatever is on your mind: a shopping list, a phone number, a reminder, a name you do not want to forget.

When you are done, tap "Done" in the top-right corner (or tap the Back arrow on the left) to save. Notes saves automatically — you cannot accidentally lose what you typed.

**Making a checklist (great for shopping or to-do lists)**

Inside any note, tap the checklist button — it looks like a small circle with a checkmark, located in the toolbar above your keyboard. This turns your note into a list where you can tap each item to check it off when you are done.

To add items, tap after the last item and type the next entry. Each item gets its own line with a circle you can tap to mark it complete. Checked items move to the bottom automatically. This is perfect for grocery shopping — tap each item as you put it in your cart.

**Making text bold or adding a heading**

Select some text by pressing and holding until the selection handles appear, then drag to highlight the words you want. Tap "BIU" in the pop-up menu to choose Bold, Italic, or Underline. You can also use the "Aa" formatting button in the toolbar to switch a line to a Title or Heading style — useful if you have a long note with multiple sections.

**Searching your notes**

Once you have several notes, finding the right one is fast. Tap the magnifying glass (search) icon at the top of the Notes list and type any word — Notes searches inside every note, not just the title. If you wrote down a doctor's phone number last month and you remember only the doctor's name, just search for that name.

**Pinning important notes to the top**

Swipe right on any note in your list to see a yellow Pin button. Tap Pin and that note will stay at the very top of your list no matter how many new notes you add. This is useful for notes you check often — a list of important phone numbers, your WiFi password, your medication schedule.

**Sharing a note with a family member**

Open the note you want to share, then tap the Share button (the square with an upward arrow) at the top right. You can share via text message, email, or — if the other person also has an iPhone — you can invite them to collaborate so you both see and edit the same note in real time. This is great for shared grocery lists.

**How Notes syncs across your Apple devices**

If you are signed into iCloud on your iPhone, iPad, and Mac, your notes sync automatically. A note you type on your phone appears on your computer within seconds, and the other way around. You do not need to do anything to make this happen — it works as long as iCloud Drive is turned on. To check: go to Settings → tap your name at the top → iCloud → and make sure the switch next to "Notes" is green.

---

**Android: Using Google Keep**

Android phones do not come with a single universal Notes app — the available apps vary by phone brand. The most widely available option is Google Keep, which is free, works on any Android phone, and syncs to your Google account across all your devices including a computer.

**Finding Google Keep**

Look for a yellow lightbulb icon on your home screen or in your app drawer. If it is not there, open the Google Play Store and search "Google Keep" — it is free to download. Sign in with your Google account (the same one tied to your Gmail address).

**Creating a note in Google Keep**

Tap the "+" button or the "Take a note…" box at the bottom of the screen. Type your note. To save it, tap the back arrow or tap anywhere outside the note. Keep saves automatically.

**Making a checklist in Keep**

When creating a new note, tap the checkboxes icon (it looks like a small list with checkmarks) below the text area. This creates a checkbox-style list. Type each item on its own line. Tap the circle next to an item to mark it done — it moves to the bottom with a strikethrough.

**Color-coding and searching in Keep**

Tap the paint palette icon inside a note to give it a color — useful for grouping similar notes visually. To search, tap the magnifying glass at the top of the Keep home screen.

---

**Quick Tip:** You can add a note by voice. In iPhone Notes, tap the microphone icon on your keyboard and speak your note aloud — your phone types what you say. In Google Keep, tap the microphone icon when creating a new note for the same result. This is especially helpful if typing on a small screen feels uncomfortable.`,
    steps: [
      {
        title: 'Open the Notes app (iPhone) or Google Keep (Android)',
        content:
          'On iPhone, find the yellow Notes icon on your home screen, or swipe down from the middle of the screen and search "Notes." On Android, look for the yellow Google Keep icon or download it free from the Google Play Store.',
        tip: 'You can add a Notes shortcut to your home screen for one-tap access. On iPhone, press and hold the Notes icon, tap "Add to Home Screen."',
      },
      {
        title: 'Create a new note',
        content:
          'On iPhone: tap the orange pencil-and-paper icon in the bottom-right corner. On Google Keep: tap the "+" button or the "Take a note…" box. Type your note — the first line becomes the title. Notes saves automatically when you go back.',
        tip: 'Tap the microphone key on your keyboard to dictate a note by speaking instead of typing.',
      },
      {
        title: 'Add a checklist for shopping or to-do lists',
        content:
          'On iPhone: tap the checklist button (a circle with a checkmark) in the toolbar above the keyboard. On Google Keep: tap the checkboxes icon below the text area when starting a new note. Each line becomes a checkbox item you can tap to mark done.',
        tip: 'Checked items move to the bottom of the list automatically, so you always see what is left to do.',
      },
      {
        title: 'Pin important notes to the top',
        content:
          'On iPhone: swipe right on any note in your list and tap the yellow Pin button. On Google Keep: tap the pushpin icon at the top right of any note. Pinned notes stay at the top of your list so they are always easy to find.',
      },
      {
        title: 'Search notes and share with family',
        content:
          'On iPhone: tap the magnifying glass at the top of the Notes list and type any word — it searches inside every note. To share a note, open it, tap the Share button (square with upward arrow), and choose Messages or Email. On Keep: tap the magnifying glass at the top of the screen to search.',
        tip: 'On iPhone, you can invite a family member to collaborate on a shared note — great for a joint grocery list. Both of you will see changes instantly.',
      },
      {
        title: 'Make sure Notes syncs to your other Apple devices',
        content:
          'On iPhone, go to Settings → tap your name at the top → iCloud → and check that the switch next to "Notes" is green. When it is on, every note you create on your phone will appear automatically on your iPad and Mac.',
        tip: 'Google Keep syncs to any device where you sign into the same Google account, including a computer at keep.google.com.',
      },
    ],
  },

  {
    slug: 'how-to-unsubscribe-from-junk-email-2026',
    title: 'How to Unsubscribe from Unwanted Marketing Emails',
    excerpt:
      'A crowded inbox slows you down. Learn safe ways to unsubscribe from marketing emails — and which "unsubscribe" links to avoid so you do not accidentally confirm your address to scammers.',
    category: 'communication',
    tags: [
      'unsubscribe',
      'junk email',
      'spam',
      'marketing email',
      'gmail',
      'iphone mail',
      'Unroll.me',
      'email filter',
      'inbox',
      'scam email',
    ],
    readTime: '9 min',
    thumbnailEmoji: '📧',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `If your email inbox feels like a pile of catalogues you never asked for, you are not alone. The average person receives dozens of marketing emails every day from stores, apps, and websites they may have visited years ago. Cleaning up your inbox takes a little time upfront but makes a real difference — fewer distractions, less chance of missing something important, and a lower risk of accidentally clicking something dangerous.

This guide explains the safe, effective ways to unsubscribe, and — just as importantly — when you should NOT click an unsubscribe link.

**The key rule: only unsubscribe from companies you recognize**

Before you click any unsubscribe link, ask yourself: "Did I actually sign up for this?" If the email is from a store where you have shopped, a service you use, or a newsletter you signed up for — even if you do not remember doing it — it is safe to unsubscribe. These companies are required by law to honor your request within 10 business days.

If the email is from a company you have never heard of, a message that looks strange, or something that feels off — do NOT click the unsubscribe link. Scammers sometimes send fake emails with "unsubscribe" buttons that actually confirm your email address is active and being monitored. Once they know the address is real, they will sell it and you will get even more unwanted email.

In those cases, mark the message as spam and delete it. Never reply to it, and never click any link inside it.

**Method 1: Use the Unsubscribe link at the bottom of the email**

Legitimate marketing emails are required by US law (the CAN-SPAM Act) to include an unsubscribe option. It is almost always in very small print at the very bottom of the email — you may need to scroll past several sections of the email to find it.

Look for words like "Unsubscribe," "Manage your email preferences," "Opt out," or "Update your email settings." Click that link. It will take you to a page where you either confirm you want to unsubscribe with one click, or where you can choose which types of emails to stop receiving.

If the page asks you to enter your email address to confirm, that is normal for legitimate companies. After you confirm, the company is required to remove you within 10 business days. You may get one or two more emails in that window — that is normal, not a sign that the unsubscribe failed.

**Method 2: Use Gmail's built-in Unsubscribe button**

If you use Gmail (on a computer or phone), Google automatically detects marketing emails and adds an "Unsubscribe" link right next to the sender's name at the top of the email — you do not have to scroll to the bottom to find it.

On a computer: open the email and look for the sender's name at the top. Next to it, you will see "(Unsubscribe)" in small text. Click it and confirm.

On your phone in the Gmail app: open the email. You will see the sender's name at the top. Tap the sender's name to expand the details, or look for a small "Unsubscribe" link near the sender's name.

This is the fastest method for Gmail users because Google has already identified the email as promotional and placed the button right where you can find it.

**Method 3: Use iPhone Mail's Unsubscribe feature (iOS 16 and later)**

If you read email on an iPhone using the built-in Mail app, Apple added a helpful feature in iOS 16: a blue "Unsubscribe" banner appears at the top of many marketing emails — right above the message — with a one-tap button to unsubscribe.

When you see that blue banner, tap "Unsubscribe" and then confirm. Apple sends the unsubscribe request to the sender on your behalf. You do not have to scroll to the bottom of the email or navigate to an external website.

This feature works with most large retailers and mailing lists. It does not appear on every marketing email — only on ones where Apple can detect the unsubscribe mechanism automatically.

**Method 4: Use a service like Unroll.me**

Unroll.me is a free service designed specifically to help you manage email subscriptions. You sign in with your email account, and it scans your inbox for mailing lists you are subscribed to. It then shows you a list of all your subscriptions and lets you unsubscribe from many of them in one place, one click at a time.

It also offers a feature called "The Rollup" — instead of getting dozens of separate promotional emails throughout the day, Unroll.me groups them into a single daily digest email that arrives at a time you choose.

To get started, go to unroll.me and sign in with your Gmail or Yahoo email address. Be aware that Unroll.me — like many free services — uses data about your email patterns to support its business. If that concerns you, the manual methods above work well and do not require giving a third party access to your inbox.

**Method 5: Mark as spam to train your email filter**

Even after unsubscribing, some companies may continue to send email, or you may get new promotional messages from companies you did not sign up with. In those cases, mark the email as spam (or "Junk").

In Gmail: open the email and tap the three-dot menu (⋮) in the top-right corner, then tap "Report spam."

In iPhone Mail: swipe left on the email in your inbox, tap "More," then tap "Move to Junk." Or open the email, tap the flag button, and select "Move to Junk."

The more you mark unwanted emails as spam, the better your email service gets at automatically filtering out similar messages in the future. It learns from your choices.

---

**A note on email overload going forward**

The best way to keep your inbox manageable is to be selective about giving out your email address. When a website asks for your email to "create an account" or to receive a coupon, consider whether you want ongoing emails from that company. Many websites let you complete a purchase without creating an account — look for a "Guest checkout" option.

**Quick Tip:** If you use Gmail, click the "Promotions" tab at the top of your inbox to see all marketing emails collected in one place. You can delete them all at once by checking the box at the top and tapping Delete — without worrying that you are deleting something important.`,
    steps: [
      {
        title: 'Decide whether it is safe to unsubscribe',
        content:
          'Before clicking anything, ask: do I recognize this company? If yes — a store you have shopped at, a newsletter you signed up for, an app you use — it is safe to unsubscribe. If you do not recognize the sender or the email feels off, do not click the unsubscribe link. Mark it as spam and delete it instead.',
        warning:
          'Clicking "unsubscribe" in a scam email can tell the scammer your address is active, leading to more unwanted messages — not fewer.',
      },
      {
        title: 'Find the Unsubscribe link at the bottom of the email',
        content:
          'Scroll to the very bottom of the marketing email. Look for small text that says "Unsubscribe," "Manage preferences," or "Opt out." Click that link and confirm on the page that opens. The company must remove you within 10 business days.',
        tip: 'If the confirmation page asks you to enter your email address, that is normal for legitimate companies — go ahead and enter it.',
      },
      {
        title: 'Use Gmail\'s Unsubscribe button at the top of the email',
        content:
          'If you use Gmail, open the marketing email and look for "(Unsubscribe)" next to the sender\'s name at the top of the message — no scrolling needed. On your phone in the Gmail app, tap the sender\'s name to see the Unsubscribe option. Click or tap it and confirm.',
        tip: 'Gmail groups marketing emails in the "Promotions" tab. Check there first — it keeps promotional mail separate from your main inbox automatically.',
      },
      {
        title: 'Use iPhone Mail\'s Unsubscribe banner (iOS 16+)',
        content:
          'If you read email on an iPhone, open a marketing email and look for a blue "Unsubscribe" banner near the top of the message. Tap "Unsubscribe" and then confirm. Apple handles the request for you — no need to scroll or visit an external website.',
      },
      {
        title: 'Mark stubborn senders as spam',
        content:
          'If a sender keeps emailing after you unsubscribed, or if the email came from a company you never signed up with, mark it as spam. In Gmail: tap the three-dot menu and select "Report spam." In iPhone Mail: swipe left on the email, tap "More," then "Move to Junk." Your email service will learn to filter similar messages automatically.',
        tip: 'Marking something as spam is always safe — you can always check your Spam or Junk folder later if you think something was filtered by mistake.',
      },
      {
        title: 'Try Unroll.me to manage many subscriptions at once',
        content:
          'Go to unroll.me on a computer and sign in with your email account. The service scans your inbox and shows you a list of your active subscriptions. You can unsubscribe from several at once, or roll them all into a single daily digest email instead of receiving them individually throughout the day.',
        tip: 'Unroll.me works best as a one-time cleanup tool. After the initial session, the manual methods above are fast enough for keeping up with new subscriptions.',
      },
    ],
  },

  {
    slug: 'what-is-an-imei-number-and-why-it-matters-2026',
    title: 'What Is an IMEI Number — and Why It Matters for Your Phone',
    excerpt:
      'Your phone has a unique 15-digit IMEI number — like a VIN for a car. Learn how to find yours, why it matters if your phone is stolen, and how to check one before buying a used phone.',
    category: 'phone-guides',
    tags: [
      'IMEI',
      'stolen phone',
      'used phone',
      'phone ID',
      'carrier block',
      'iPhone',
      'Android',
      'phone security',
      'IMEI check',
      'used phone buying',
    ],
    readTime: '8 min',
    thumbnailEmoji: '🔢',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Every phone manufactured in the world has a unique identification number called an IMEI — short for International Mobile Equipment Identity. It is 15 digits long, and no two phones in the world share the same IMEI. Think of it like a VIN number on a car: just as each vehicle has its own permanent ID number that identifies it no matter who owns it, your phone has a permanent number that identifies your specific device on any cellular network.

Understanding your IMEI number takes about five minutes, and it can save you real headaches if your phone is ever lost or stolen — or if you are buying a used phone and want to make sure it is not stolen or locked to a carrier.

**Why your IMEI number matters**

**1. Blocking a stolen phone**

If your phone is stolen, your carrier (AT&T, Verizon, T-Mobile, Spectrum Mobile, etc.) can use the IMEI number to block that device from connecting to any cellular network in the United States. This means the thief cannot use your phone to make calls or access mobile data, even if they put in a new SIM card. The phone becomes much less valuable to steal if it cannot connect to any network.

To report a stolen phone, you call your carrier, give them your IMEI, and they add it to a blocklist. This is separate from a police report (which you should also file), but it is an important step.

**2. Checking a used phone before you buy**

If you are buying a phone from someone on Facebook Marketplace, Craigslist, or a similar site, you should always check the IMEI before handing over any money. A blocked or reported-stolen IMEI means the phone will not work on US networks — you would be paying for a device that is essentially useless as a phone.

You can also check whether the phone is still under a carrier contract or installment plan that was never paid off — which can result in the phone being locked or blocked.

**How to find your IMEI number**

There are several ways to find it. You only need to use one.

**Method 1: Dial *#06# on your phone**

This works on any phone — iPhone or Android — in any country. Open your Phone app as if you were making a call. Type *#06# (star, pound, 0, 6, pound). Do not press call — your IMEI number will appear on the screen automatically within a second or two. Write it down somewhere safe, such as a note in your Notes app or on a piece of paper you keep with your important documents.

**Method 2: iPhone — Settings → General → About**

Open the Settings app (the gray gear icon). Scroll down and tap "General." Tap "About." Scroll down until you see "IMEI." Your 15-digit number is listed there. You can press and hold on the number to copy it.

**Method 3: Android — Settings → About phone**

Open the Settings app. Scroll to the bottom and tap "About phone" (on some Android phones it may be called "About device" or "Phone information"). Look for "IMEI" or "IMEI information." On phones with two SIM slots, you may see IMEI 1 and IMEI 2 — both refer to your device; the first one is the primary number.

**Method 4: Look on the SIM card tray or the phone's box**

On many iPhones and Android phones, the IMEI is printed on the SIM card tray — the small removable slot on the edge of the phone that holds your SIM card. You may need a SIM ejector tool (or an unfolded paperclip) to slide the tray out. The number is engraved in very small print.

The IMEI is also printed on the original box the phone came in, if you still have it — typically on a sticker on the back or side of the box alongside the model number and serial number.

---

**How to report a stolen phone using the IMEI**

If your phone is stolen:

1. **File a police report first.** Go to your local police department or file online at your city or county's non-emergency reporting portal. Ask for a copy of the report — you will need the report number.
2. **Call your carrier immediately.** Tell them your phone was stolen and provide your IMEI number. Ask them to add the IMEI to the blocklist so the phone cannot be used on any network.
3. **Suspend your service.** Ask the carrier to suspend your phone line so no calls or data can be billed to your account while the phone is missing.
4. **Change your passwords.** If your phone was unlocked when stolen, the thief may have access to your email, banking apps, and other accounts. Change passwords for important accounts from another device as soon as possible.
5. **Contact your insurance if you have phone insurance.** Many carrier plans and some credit cards include phone theft protection — check your documents or call your carrier.

---

**How to check an IMEI before buying a used phone**

Before handing over money for a used phone, ask the seller to show you the IMEI number (use the *#06# method) or ask to borrow the phone for 60 seconds so you can look it up yourself. Then check it using one of these free tools:

- **IMEI.info** (imei.info): Enter the number to see the phone's model, manufacturer, and whether it has been reported. It also shows warranty status and, in many cases, whether it is financed or under contract.
- **Your carrier's IMEI check tool:** AT&T, Verizon, T-Mobile, and other major carriers have free IMEI check pages on their websites. Search for "[your carrier] IMEI check" to find the right page. Enter the IMEI and the tool will tell you whether the phone is compatible with their network and whether it has been reported stolen or blocked.

If the check shows the phone is clean — not stolen, not blocked, not still under a contract — you are in good shape. If it shows any problems, walk away from the sale.

**Quick Tip:** Write your phone's IMEI number down right now and store it somewhere you can find it even without your phone — a note in a filing cabinet, or emailed to yourself and saved in a folder. If your phone is ever stolen, you will need that number quickly, and you will not be able to look it up on the device itself.`,
    steps: [
      {
        title: 'Understand what the IMEI number is',
        content:
          'IMEI stands for International Mobile Equipment Identity. It is a 15-digit number that is unique to your specific phone — no other phone in the world has the same one. It stays with the phone forever, even if you change the SIM card or transfer the phone to someone else.',
      },
      {
        title: 'Find your IMEI by dialing *#06#',
        content:
          'Open your Phone app as if making a call and type *#06# — do not press the call button. Your IMEI number will appear on the screen within a second. This method works on both iPhone and Android phones.',
        tip: 'Write your IMEI down and store it somewhere safe — a filing cabinet, a note in your email, or a note on paper with your other important documents. You may need it when you cannot access your phone.',
      },
      {
        title: 'Find your IMEI in Settings',
        content:
          'On iPhone: go to Settings → General → About → scroll down to IMEI. On Android: go to Settings → About phone → IMEI. You can press and hold the number to copy it. The IMEI is also printed on your phone\'s original box and sometimes on the SIM card tray on the side of the phone.',
      },
      {
        title: 'Report a stolen phone using your IMEI',
        content:
          'If your phone is stolen: (1) file a police report and get the report number, (2) call your carrier and give them your IMEI to have the device blocked on all US networks, (3) ask the carrier to suspend your service so no charges can be made, (4) change passwords for email, banking, and other important apps from another device.',
        warning:
          'Blocking the IMEI with your carrier stops the phone from working on any US network — but do this immediately after theft, before the thief has a chance to access your accounts.',
      },
      {
        title: 'Check a used phone\'s IMEI before buying',
        content:
          'Before paying for a used phone, ask the seller to show you the IMEI (or use *#06# yourself). Then enter the number at imei.info or your carrier\'s free IMEI check page. A clean result means the phone has not been reported stolen and is not blocked.',
        tip: 'If the seller refuses to let you check the IMEI, that is a red flag. Walk away from the sale.',
      },
    ],
  },
];
