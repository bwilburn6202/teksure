import { Guide } from './guides';

export const guidesBatch51: Guide[] = [
  {
    slug: `gmail-labels-guide`,
    title: `How to Use Gmail Labels to Organize Your Email`,
    excerpt: `Color-code and sort your Gmail inbox with labels — they work like folders but let one email belong to multiple groups at once.`,
    category: `essential-skills`,
    tags: [`gmail`, `email`, `organization`, `labels`, `inbox`],
    readTime: `6 min`,
    thumbnailEmoji: `🏷️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If your Gmail inbox feels like a pile of unsorted mail on the kitchen table, labels can help you bring order to it. Labels work a lot like folders — you can group emails about a specific topic, person, or project into one place. But labels have an extra advantage: one email can have multiple labels at the same time. For example, a message from your doctor about a bill could be labeled both "Doctor" and "Bills."

Labels also show up in the left sidebar of Gmail, so you can click on any label to see all emails with that label at once. You can color-code labels, which makes it even faster to spot what's what. For instance, you might make your "Family" label green, your "Bills" label red, and your "Medical" label blue.

Labels don't move emails out of your inbox unless you choose to archive them — so you can still see everything in one place while also having it organized. Many people use labels to track things they're waiting on, flag messages that need a reply, or group emails from a specific club, organization, or subscription.

You can create as many labels as you want, and you can apply them by hand or set up filters so Gmail automatically applies a label whenever an email arrives from a certain sender or contains certain words. For example, every email from your electric company could automatically get a "Utilities" label.

Labels are free, built into every Gmail account, and work on both the Gmail website and the Gmail app on your phone.`,
    steps: [
      {
        title: `Create a new label`,
        content: `On the Gmail website, scroll down the left sidebar until you see "More," then click it. Scroll further until you see "Create new label." Click it, type a name for your label (like "Doctor" or "Bills"), and click Create. On the Gmail app, tap the three lines (menu) in the top left, scroll down, and tap "Create new."`,
        tip: `Keep label names short and clear. "Medical" is easier to scan than "All My Doctor and Hospital Emails."`
      },
      {
        title: `Apply a label to an email`,
        content: `Open the email you want to label. On the website, click the label icon (looks like a tag) near the top of the email, check the box next to the label you want, and click Apply. On the app, tap the three dots in the top right corner of the email, tap "Move to," and choose your label. You can apply more than one label.`,
        tip: `You can also label multiple emails at once on the website: check the boxes to the left of each email in your inbox, then click the label icon above the list.`
      },
      {
        title: `Color-code a label`,
        content: `On the Gmail website, hover your mouse over a label name in the left sidebar. A three-dot menu appears to the right of the label name — click it. Select "Label color" and choose a color from the options. Now that label (and any emails wearing it) will show a colored dot or background, making it easier to spot at a glance.`
      },
      {
        title: `Find all emails with a label`,
        content: `Click the label name in the left sidebar on the Gmail website, or tap it in the menu on the app. Gmail will show you every email that has that label, no matter when it arrived or whether you've read it. This is a fast way to find all your bill emails or all messages from a particular person.`
      },
      {
        title: `Set up automatic labeling with filters`,
        content: `On the Gmail website, click the Settings gear icon in the top right, then click "See all settings." Go to the "Filters and Blocked Addresses" tab and click "Create a new filter." Enter the sender's email address (or a keyword) in the appropriate field, then click "Create filter." On the next screen, check "Apply the label," choose your label from the dropdown, and click "Create filter." Now Gmail will label matching emails automatically as they arrive.`,
        tip: `Automatic filters save a lot of time if you get regular emails from the same places — like a pharmacy, utility company, or newsletter you like.`
      }
    ]
  },
  {
    slug: `gmail-snooze-guide`,
    title: `How to Snooze Emails in Gmail`,
    excerpt: `Make an email disappear from your inbox and reappear at exactly the right time — Gmail's Snooze feature helps you follow up without forgetting.`,
    category: `essential-skills`,
    tags: [`gmail`, `email`, `snooze`, `productivity`, `inbox management`],
    readTime: `5 min`,
    thumbnailEmoji: `⏰`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Have you ever read an email and thought, "I don't need to deal with this right now, but I don't want to forget about it"? That's exactly what Gmail's Snooze feature is made for.

When you snooze an email, it vanishes from your inbox temporarily and then pops back up — at the top of your inbox — at a specific date and time you choose. It's like setting a reminder tied directly to the email itself.

This is especially helpful for things like:
- A reminder about a doctor's appointment that arrives a week before the visit — snooze it until the day before
- A receipt you need to review when your credit card statement arrives — snooze it until the end of the month
- A message you need to reply to, but not until after the weekend — snooze it until Monday morning

Snoozed emails are stored in a special "Snoozed" folder in Gmail's left sidebar, so you can always go find them early if your plans change. When the snooze time arrives, the email moves back to the top of your regular inbox with a small "Snoozed" tag, so you know it's a returning reminder.

Snooze works on the Gmail website and on the Gmail app for iPhone and Android. You can snooze as many emails as you want, and each one can have its own custom date and time.`,
    steps: [
      {
        title: `Find the Snooze button on the Gmail website`,
        content: `Go to Gmail on your computer. In your inbox, hover your mouse slowly over an email (don't click to open it). A small row of icons will appear to the right of the email — look for the clock icon. That's the Snooze button. Click it to see snooze time options.`,
        tip: `You can also open the email first, then click the clock icon near the top right of the open email to snooze it.`
      },
      {
        title: `Choose when the email should come back`,
        content: `After clicking Snooze, Gmail gives you quick options: "Later today," "Tomorrow," "This weekend," "Next week," or "Someday." You can also click "Pick date & time" to choose any specific date and time you want. Select what works for you and click Save.`
      },
      {
        title: `Snooze on the Gmail app (iPhone or Android)`,
        content: `Open the Gmail app and find the email you want to snooze. Swipe right on the email to reveal a quick-snooze option, or open the email and tap the three dots (more options) in the top right corner, then tap "Snooze." Choose a time or tap "Pick a date & time" to enter a custom date.`,
        tip: `On Android, you can change what the swipe gesture does in Gmail Settings under "Swipe actions" — you can set either swipe direction to Snooze.`
      },
      {
        title: `Check or change a snoozed email early`,
        content: `To see all your currently snoozed emails, click "Snoozed" in the left sidebar on the Gmail website (or in the app menu). You'll see every snoozed email and when each one is set to return. To change the snooze time, hover over the email, click the clock icon again, and pick a new time. To unsnooze it right now, open the email and click the X next to "Snoozed" at the top.`
      }
    ]
  },
  {
    slug: `gmail-multiple-accounts-guide`,
    title: `How to Use Multiple Gmail Accounts on Your Phone`,
    excerpt: `Add a second Gmail or Google account to the Gmail app and switch between them in seconds — no logging out required.`,
    category: `phone-guides`,
    tags: [`gmail`, `multiple accounts`, `google account`, `iPhone`, `Android`, `email`],
    readTime: `6 min`,
    thumbnailEmoji: `📧`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Many people have more than one Gmail address — maybe one for personal use and one for medical or financial matters, or one you share with a spouse. The good news is that the Gmail app on your iPhone or Android phone can handle multiple accounts at the same time, and switching between them takes just a tap.

You don't have to log out of one account to check another. Both accounts stay active in the app simultaneously. You'll get notifications for all of them, and you can read, reply, and send from any of your accounts without signing in again each time.

Here's how it works: the Gmail app shows a small circle in the top right corner that contains your profile photo or initials. Tapping that circle lets you switch between accounts or add a new one. It's the same on both iPhone and Android.

You can add any number of Gmail or Google Workspace accounts (those are the "@ company name" addresses some people get through work or school). The process is the same for all of them.

Once you have multiple accounts set up, you can also choose to view all your inboxes combined in one view, so you see all your email from all accounts in a single list. Or you can view each inbox separately if you prefer to keep them distinct. The choice is yours.

This guide covers the Gmail app specifically. If you use a different email app like Apple Mail or the Outlook app, the steps will be a bit different.`,
    steps: [
      {
        title: `Open the Gmail app and find the account switcher`,
        content: `Open the Gmail app on your phone. In the top right corner, you'll see a circle with your profile photo or the first letter of your name. Tap that circle. A small panel will slide up or pop open showing your current account and a list of options.`
      },
      {
        title: `Add a second account`,
        content: `In the panel that opened, tap "Add another account." Gmail will ask what type of account you want to add — choose "Google" for any Gmail address. You'll be taken to a sign-in screen. Enter the email address of your second account, tap Next, enter the password, and tap Next again. Follow any additional steps (like approving a two-step verification if you have it turned on).`,
        tip: `If the second account belongs to a family member and they're standing with you, they can enter their own password. You don't need to know it yourself.`
      },
      {
        title: `Switch between accounts`,
        content: `Once you've added the second account, tap the circle in the top right corner again. You'll now see both accounts listed. Tap the one you want to view. The app will switch to that account's inbox. The circle in the corner will change to show that account's photo or initials so you always know which one you're looking at.`
      },
      {
        title: `Manage notifications for each account`,
        content: `By default, Gmail sends notifications for all your accounts. If you'd rather not get notifications for one of them, go to the Gmail app's Settings (tap the three lines menu, then scroll to Settings), tap the account you want to adjust, and look for "Notifications." You can turn them off or change the notification sound for that account independently.`,
        tip: `If you have a work account you don't want buzzing you at night, you can turn off notifications for just that account while keeping personal email alerts active.`
      },
      {
        title: `View all accounts together (optional)`,
        content: `On Android, tap the three lines menu in Gmail, then tap "All inboxes." This shows every email from every account in one combined list — each message will show a small label indicating which account it belongs to. On iPhone, tap the back arrow until you get to the main mailbox list, then tap "All Inboxes" at the top.`
      }
    ]
  },
  {
    slug: `apple-mail-vip-guide`,
    title: `How to Set Up VIP Contacts in Apple Mail`,
    excerpt: `Mark your doctor, family, and other important senders as VIPs in Apple Mail so their emails always stand out and alert you right away.`,
    category: `phone-guides`,
    tags: [`apple mail`, `VIP`, `email`, `iPhone`, `iPad`, `Mac`, `notifications`],
    readTime: `5 min`,
    thumbnailEmoji: `⭐`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you get dozens of emails a day, it's easy for something important to get buried — a message from your doctor, a note from your child or grandchild, or something from your bank. Apple Mail has a feature called VIP that solves this problem.

When you add someone as a VIP in Apple Mail, a few things happen:
- Their emails get a special star icon so they're easy to spot
- All their emails are collected in a dedicated "VIP" mailbox folder
- You can set up separate notifications just for VIP emails, so you get alerted even if you've turned off general email notifications

VIP works on iPhone, iPad, and Mac — and your VIP list syncs across all your Apple devices automatically if you use the same Apple ID.

This is a great tool if you want to make sure you never miss an email from a specific doctor's office, pharmacy, your children or grandchildren, your lawyer, your accountant, or any other person whose messages matter most to you.

You can add up to several dozen VIP contacts, and you can remove anyone from the VIP list just as easily. Apple Mail is the built-in email app on iPhones and Macs — it comes with your device and doesn't require any downloads or subscriptions.`,
    steps: [
      {
        title: `Add someone as a VIP on iPhone or iPad`,
        content: `Open the Mail app. Find an email from the person you want to make a VIP — it can be any email from them, even an old one. Tap the sender's name at the top of the email (where it says "From: [Name]"). A small menu will appear — tap "Add to VIP." You'll see a brief confirmation. That's it — that person is now a VIP.`,
        tip: `You can also add a VIP by tapping the VIP Mailbox in your inbox list, tapping the info button (a small "i" in a circle), and tapping "Add VIP."`
      },
      {
        title: `Add someone as a VIP on Mac`,
        content: `Open the Mail app on your Mac. Find an email from the person you want to add. In the message, hover your mouse over the sender's name in the "From" field. A small dropdown arrow appears — click it. Choose "Add to VIPs" from the menu. A star will appear next to their name to confirm.`
      },
      {
        title: `Find your VIP mailbox`,
        content: `In the Mail app on iPhone or iPad, go back to the main mailbox list (the screen that shows "All Inboxes," "Inbox," etc.). You should see "VIP" listed there with a star icon next to it. Tap it to see all emails from your VIP contacts in one place. On Mac, the VIP mailbox appears in the left sidebar under "Favorites."`,
        tip: `If you don't see the VIP mailbox listed, scroll down in the mailbox list — it may be below the fold.`
      },
      {
        title: `Set up special notifications for VIP emails`,
        content: `On iPhone or iPad, go to Settings (the gear icon on your home screen), then scroll down and tap "Mail," then tap "Notifications," then tap "VIP." Here you can turn on sounds, alerts, and badge counts specifically for VIP emails. This way you can have quiet notifications for regular email but immediate alerts for your most important senders.`,
        tip: `This is especially helpful if you've turned off general Mail notifications but still want to know right away when your doctor's office or a family member writes.`
      },
      {
        title: `Remove someone from your VIP list`,
        content: `Open an email from that person, tap their name, and tap "Remove from VIP." Or go to your VIP mailbox, tap the small "i" info button at the bottom right of the screen, find their name in the VIP list, and swipe left to delete them.`
      }
    ]
  },
  {
    slug: `windows-mail-app-guide`,
    title: `How to Use the Windows Mail App`,
    excerpt: `Read and send email on a Windows 10 or 11 PC using the built-in Mail app — no extra downloads needed. Here's how to set it up and use it.`,
    category: `windows-guides`,
    tags: [`windows mail`, `email`, `Windows 10`, `Windows 11`, `outlook`, `setup`],
    readTime: `7 min`,
    thumbnailEmoji: `✉️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Windows 10 and Windows 11 come with a free email app built right in — it's called Mail (or sometimes "Mail & Calendar"). You don't have to download anything to use it. It's already on your computer, waiting in the Start menu.

The Mail app works with most popular email services including Gmail, Outlook/Hotmail, Yahoo Mail, iCloud, and many others. Once you connect your email account, you can read, reply to, and write new emails directly from your Windows desktop, just like you would in a web browser — but without needing to open a browser at all.

The Mail app is designed to be straightforward. The left side of the screen shows your mailbox folders (inbox, sent mail, junk, etc.), the middle shows a list of your emails, and the right side shows the full message when you click one. Everything is in large, readable text by default.

One particularly useful feature: the Mail app can handle multiple email accounts at once. If you have a Gmail address and a Hotmail address, you can add both and switch between them from the same app.

This guide will walk you through setting up the Mail app with a Gmail account as an example. The steps are similar for other email providers. Note: Windows 11 newer versions have replaced Mail with the Outlook app — if you see "Outlook" instead of "Mail" in your Start menu, the steps are very similar but the app looks slightly different.`,
    steps: [
      {
        title: `Open the Mail app`,
        content: `Click the Start button (the Windows logo in the bottom left corner of your screen). Type "Mail" into the search bar that appears. You should see "Mail" or "Mail and Calendar" in the results — click it to open the app. The first time you open it, it may ask you to sign in or add an account.`
      },
      {
        title: `Add your email account`,
        content: `When the Mail app opens for the first time, it will prompt you to add an account. Click "Add account." A list of email providers appears — click the one that matches your email (Google for Gmail, Outlook for Hotmail/Outlook/Live, Yahoo for Yahoo Mail, etc.). If yours isn't listed, click "Other account." Enter your email address and password when prompted and follow the sign-in steps. Gmail may ask you to approve access in a browser window — click Allow.`,
        tip: `If the app doesn't prompt you to add an account right away, click the gear icon at the bottom left and then click "Manage Accounts" to add one.`
      },
      {
        title: `Read your email`,
        content: `After your account is set up, your inbox will load on screen. Click any email in the list to read the full message on the right side. Unread emails appear in bold. You can use the folders on the left sidebar (Inbox, Junk, Sent, etc.) to find different types of messages. Use the search box at the top to look for a specific email by sender name or keyword.`
      },
      {
        title: `Reply to an email`,
        content: `Open an email by clicking it. At the top of the message, click the "Reply" button (curved arrow). A compose area will open below the original message. Type your reply, then click the "Send" button (looks like a paper airplane or arrow) to send it.`,
        tip: `"Reply All" sends your response to everyone in the conversation, not just the original sender. Use plain "Reply" if you only want to respond to one person.`
      },
      {
        title: `Write a new email`,
        content: `Click the "+" or "New mail" button in the top left corner of the Mail app. A blank email window opens. Click in the "To" field and type the recipient's email address. Click in the "Subject" field and type a subject line. Click in the large text area below and type your message. When you're ready, click the Send button (paper airplane icon).`
      },
      {
        title: `Attach a file or photo`,
        content: `When composing a new email, look for the paperclip icon or "Insert" menu at the top of the compose window. Click "Attach" or the paperclip, then browse your computer for the file or photo you want to send. Select it and click Open. The file will appear attached to your email. Then send as normal.`,
        warning: `Most email services have a file size limit of 20–25 megabytes for attachments. If your photo or file is very large, it may not send. Resizing the photo before attaching it often solves this.`
      }
    ]
  },
  {
    slug: `google-drive-scan-guide`,
    title: `How to Scan Paper Documents into Google Drive`,
    excerpt: `Use the Google Drive app on Android to photograph and save paper documents as searchable PDFs — no scanner needed, just your phone.`,
    category: `app-guides`,
    tags: [`google drive`, `scan`, `documents`, `PDF`, `Android`, `paperless`],
    readTime: `5 min`,
    thumbnailEmoji: `📄`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Keeping track of paper documents — medical records, receipts, insurance cards, tax forms — is a constant challenge. The Google Drive app on Android has a built-in document scanner that makes it quick and convenient to turn any paper document into a digital file.

Here's what makes it useful: when you scan a document with the Google Drive app, it doesn't just take a photo. It automatically adjusts the image for better readability, straightens the edges, and removes shadows. It saves the result as a PDF file — which is a standard document format that anyone can open. The PDF also becomes searchable, meaning you can search for words inside it later.

Once it's in Google Drive, your scanned document is accessible from any device: your phone, a tablet, or a computer. You can share it with your doctor, accountant, or family member by sending them a link. You can organize it into folders. And because it's stored in the cloud, it's safe even if you lose your phone.

This feature is available on Android phones with the Google Drive app installed (it comes pre-installed on most Android phones). If you have an iPhone, you can scan documents using the Files app or Notes app instead — Google Drive for iPhone does not have the scan feature built in the same way.

No additional apps, no scanner device, and no monthly fee is required — just your Android phone and a Google account.`,
    steps: [
      {
        title: `Open the Google Drive app`,
        content: `On your Android phone, find and tap the Google Drive app icon (it looks like a multicolored triangle). If you don't have it, open the Play Store and search for "Google Drive" to install it for free. Sign in with your Google (Gmail) account if prompted.`
      },
      {
        title: `Find the Scan button`,
        content: `In the Google Drive app, look at the bottom right corner of the screen. There's a large colorful "+" button — tap it. A small menu pops up with options like Upload, Folder, and Scan. Tap "Scan." Your phone's camera will open.`,
        tip: `Place the document on a flat, well-lit surface before opening the camera. Natural light or a bright lamp works best.`
      },
      {
        title: `Photograph the document`,
        content: `Point your camera at the paper document. Google Drive will automatically detect the edges of the page and highlight it with a blue outline. When the document looks clear and straight in the frame, tap the round shutter button at the bottom of the screen. Drive may take the photo automatically once it detects a clean, stable view.`
      },
      {
        title: `Review and adjust the scan`,
        content: `After taking the photo, you'll see a preview of the scanned page. The app will have automatically cropped it to the document edges and improved the contrast. If you need to make corrections, use the crop or adjust tools at the bottom. If the scan looks good, tap the checkmark to confirm. You can tap "+" to add more pages to the same PDF before saving.`
      },
      {
        title: `Name and save the document`,
        content: `Tap the Save button (floppy disk icon or "Save" text). A dialog box will appear asking you to name the file and choose which folder in Google Drive to save it to. Type a clear name (like "Medicare Card 2026" or "Car Insurance April 2026"), choose a folder if you'd like, then tap Save. The PDF will upload to your Google Drive within a few seconds.`,
        tip: `Use descriptive names with dates so you can find documents easily later. "Receipt" is hard to search for; "Costco Receipt March 2026" is much easier.`
      }
    ]
  },
  {
    slug: `apple-numbers-guide`,
    title: `How to Use Apple Numbers for Simple Spreadsheets`,
    excerpt: `Apple Numbers on iPhone, iPad, or Mac lets you create expense trackers, shopping lists with totals, and simple budgets — no experience needed.`,
    category: `mac-guides`,
    tags: [`Apple Numbers`, `spreadsheet`, `budget`, `iPhone`, `iPad`, `Mac`, `iWork`],
    readTime: `7 min`,
    thumbnailEmoji: `📊`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `A spreadsheet sounds technical, but at its heart it's just a table — rows and columns of information. Apple Numbers is Apple's free spreadsheet app, and it's available on iPhone, iPad, and Mac. It's designed to be much friendlier than a traditional spreadsheet program, with built-in templates and large, easy-to-read buttons.

You don't need any spreadsheet experience to use Numbers for everyday tasks. The most common uses include:
- Keeping a monthly expense log (track where your money goes)
- A simple grocery or shopping list with prices that add up automatically
- A basic household budget comparing income and expenses
- Tracking medications, appointments, or health readings over time
- Making a simple to-do list or checklist

The key feature that makes spreadsheets powerful is the formula. A formula is a calculation the spreadsheet does for you automatically. For example, you can add up a whole column of numbers with a single instruction — no calculator needed. When you change a number, the total updates instantly.

Apple Numbers is free and comes pre-installed on most iPhones, iPads, and Macs. If you don't have it, you can download it for free from the App Store. Files you create in Numbers can also be saved as Excel files (.xlsx) if you need to share them with someone who uses Windows.

This guide will show you the basics using a simple expense tracker as an example.`,
    steps: [
      {
        title: `Open Numbers and choose a template`,
        content: `On iPhone or iPad, find the Numbers app (a green icon with a white table on it) and tap it. Tap the "+" button to create a new document. You'll see a list of templates — pre-designed layouts you can customize. For a budget or expense tracker, look for "Personal Budget" or "Simple Budget." Tap it to open it. On Mac, open Numbers from your Applications folder and choose a template from the welcome screen.`,
        tip: `You can also start with a "Blank" template if you want to build something from scratch — it's just an empty grid.`
      },
      {
        title: `Enter information into cells`,
        content: `The spreadsheet is made up of a grid of boxes called cells. Each column has a letter at the top (A, B, C...) and each row has a number on the side (1, 2, 3...). To enter data, tap or click on a cell and start typing. Tap the next cell when you're done with one. To change something you already entered, double-tap or double-click the cell to edit it.`
      },
      {
        title: `Add a column for your expenses`,
        content: `Tap a cell in the first empty column and type a category name like "Groceries." Tap the cell below and type a number (like 85.50). Continue down the column, entering one expense per row. In the first column (column A), you can type dates or descriptions so you know what each number refers to.`,
        tip: `Don't type dollar signs into the cells — just the numbers. You can format the column to show "$" automatically.`
      },
      {
        title: `Add a formula to get a total`,
        content: `Tap or click the empty cell at the bottom of your column of numbers — this is where the total will appear. Tap the "=" button on the keyboard (or on Mac, type the = key). Numbers may suggest SUM automatically. If it does, tap SUM. Then tap the first number in the column, hold, and drag to the last number to select all of them. Tap the green checkmark or press Return. Your total will appear automatically.`,
        tip: `The formula bar at the top will show something like =SUM(B2:B15) — that's just Numbers' way of saying "add up all the numbers from row 2 to row 15 in column B."`
      },
      {
        title: `Save and access your spreadsheet from any Apple device`,
        content: `Numbers saves your work automatically to iCloud if you're signed into iCloud. This means the spreadsheet will be available on your iPhone, iPad, and Mac without you having to do anything extra. To save a copy to your phone's storage or share it, tap the three dots (more options) in the top right corner and choose "Export" to save it as a Numbers file or an Excel file you can email.`
      }
    ]
  },
  {
    slug: `powerpoint-basics-guide`,
    title: `How to Use Microsoft PowerPoint for Beginners`,
    excerpt: `Create a slide presentation with text and pictures using PowerPoint or free PowerPoint Online — step-by-step instructions for first-time users.`,
    category: `essential-skills`,
    tags: [`PowerPoint`, `presentations`, `Microsoft`, `slides`, `Office`, `beginners`],
    readTime: `7 min`,
    thumbnailEmoji: `📽️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `A presentation is a set of slides — like digital pages that you can show on a computer screen or projector. Microsoft PowerPoint is the most widely used program for making presentations. You might use it to share photos from a trip, put together a family reunion program, present information at a community meeting, or create a visual aid for a church or club.

If you don't have Microsoft Office installed on your computer, you can use PowerPoint Online for free at office.com — it works directly in your web browser and doesn't require any software installation. This guide applies to both the full desktop version and the free online version.

A typical presentation is made of individual "slides." Each slide usually has:
- A title at the top
- A text area below for your main content (bullet points, descriptions, etc.)
- Optional pictures, charts, or other visuals

You build your presentation one slide at a time, then present it by clicking through the slides one by one. The slides display full-screen on your monitor or can be projected for an audience.

PowerPoint is free to use online at office.com/PowerPoint with a free Microsoft account. The desktop version requires either a one-time purchase of Microsoft Office or a Microsoft 365 subscription. Everything in this guide works with both versions.`,
    steps: [
      {
        title: `Start a new presentation`,
        content: `Open PowerPoint on your computer, or go to office.com in your web browser and sign in with a free Microsoft account, then click PowerPoint. Click "New Presentation" or choose a theme/template from the gallery. A blank slide will appear with two text boxes: one for a title and one for a subtitle. Click inside each box and type your title and any subtitle text.`,
        tip: `Choose a template with colors and fonts you like — it saves time and gives your presentation a polished look without any design work.`
      },
      {
        title: `Add a new slide`,
        content: `On the left side of the screen, you'll see a panel showing your slides as small thumbnails. To add a new slide, right-click (or Control-click on Mac) in that panel and choose "New Slide," or look for the "New Slide" button in the toolbar at the top. Choose a layout from the options (like "Title and Content" for a slide with a title and bullet points). Click the new slide in the thumbnail panel to start working on it.`
      },
      {
        title: `Add text to a slide`,
        content: `Click inside any text box on the slide. A cursor will appear and you can start typing. To change the size of the text, select it (highlight it with your mouse) and then click the font size box in the toolbar — type a larger number (like 28 or 32) for bigger text. Use the bold (B) and italic (I) buttons to format your text.`,
        tip: `Aim for no more than 5-6 lines of text per slide. Slides with too much text are hard to read, especially when projected for an audience.`
      },
      {
        title: `Add a picture`,
        content: `Click the "Insert" menu at the top of the screen. Click "Pictures" or "Images." Choose "This Device" to insert a photo from your computer, or "Online Pictures" to search the web for an image. Browse to your photo, click it once to select it, and click Insert. The photo will appear on your slide — click and drag it to move it, and drag the corner handles to resize it.`
      },
      {
        title: `Present your slides`,
        content: `When you're ready to present, click the "Slide Show" menu at the top and choose "From Beginning" to start from the first slide. Your presentation will fill the entire screen. Click anywhere on the screen (or press the right arrow key on your keyboard) to advance to the next slide. Press the Escape key to exit the presentation and go back to editing.`,
        tip: `You can also press F5 on your keyboard as a shortcut to start the slideshow from the beginning.`
      }
    ]
  },
  {
    slug: `alexa-smart-home-tips`,
    title: `Practical Alexa Tips for Controlling Your Smart Home`,
    excerpt: `Get more from your Amazon Echo: control lights, thermostats, and locks with your voice, and set up routines that do several things at once.`,
    category: `smart-home`,
    tags: [`Alexa`, `Amazon Echo`, `smart home`, `voice commands`, `routines`, `smart lights`],
    readTime: `7 min`,
    thumbnailEmoji: `🏠`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you have an Amazon Echo device (the cylindrical speaker that responds to "Alexa"), you probably already know you can play music or check the weather. But Alexa's real power comes from controlling your home — lights, thermostat, door locks, and more — completely with your voice.

Smart home control is particularly helpful for people who want to avoid getting up at night, those with limited mobility, or anyone who wants to make their home more convenient. Imagine saying "Alexa, turn off all the lights" from your bed instead of walking through the house.

Here's what you can control with Alexa (as long as you have compatible smart devices):
- Smart light bulbs and switches (brands like Philips Hue, GE Cync, Kasa, Ring)
- Smart thermostats (Ecobee, Honeywell Home, Amazon Smart Thermostat)
- Smart door locks (August, Schlage, Yale)
- Smart plugs (any standard lamp or appliance plugged into a smart outlet)
- Security cameras and doorbells (Ring, Blink)

For Alexa to control a device, that device must be connected to your Wi-Fi and set up through its own app. Once you link the device's app to Alexa (inside the Alexa app on your phone), Alexa can control it by voice.

This guide covers the most useful voice commands and one of Alexa's best features: Routines, which let one command trigger several actions at once.`,
    steps: [
      {
        title: `Basic light control commands`,
        content: `Once your smart bulbs or switches are set up and linked to Alexa, try these commands:
- "Alexa, turn on the living room light."
- "Alexa, turn off all the lights."
- "Alexa, dim the bedroom light to 50 percent."
- "Alexa, set the kitchen light to blue." (for color-changing bulbs)

The device name you use in the command must match what you named it in the app when you set it up.`,
        tip: `Put lights into "groups" in the Alexa app — for example, add the living room lamp, floor lamp, and overhead light into a group called "Living Room." Then "Alexa, turn off the living room" controls all of them at once.`
      },
      {
        title: `Thermostat commands`,
        content: `If you have a compatible smart thermostat connected to Alexa, you can say:
- "Alexa, set the temperature to 70 degrees."
- "Alexa, raise the temperature by 2 degrees."
- "Alexa, what's the thermostat set to?"

This works especially well if you wake up cold in the middle of the night — no need to get up.`
      },
      {
        title: `Lock commands`,
        content: `For smart door locks, Alexa can check if a door is locked or lock it, but will NOT unlock a door by voice for security reasons — you'd have to use the app for that. Try:
- "Alexa, lock the front door."
- "Alexa, is the front door locked?"`,
        warning: `Never name your lock something obvious like "Front Door Unlock" — use the app or keypad for unlocking. Alexa is for locking only, by default.`
      },
      {
        title: `Set up a Routine for multiple actions`,
        content: `A Routine lets one command (or scheduled time) trigger several actions. To set one up: open the Alexa app on your phone, tap "More" at the bottom right, then tap "Routines," then the "+" button. Name the routine, set the trigger (a phrase you'll say, like "Alexa, good night"), then tap "Add action" to add things like "Turn off all lights," "Lock the front door," and "Set thermostat to 68 degrees." Save it. Now saying "Alexa, good night" does all of that at once.`,
        tip: `You can also set Routines to trigger automatically at a certain time — for example, "every morning at 7 AM, turn on the kitchen light and read me the weather."`
      }
    ]
  },
  {
    slug: `apple-maps-tips-guide`,
    title: `Apple Maps Tips Beyond Basic Navigation`,
    excerpt: `Get more from Apple Maps: save home and work, report road hazards, explore indoor maps, and use Look Around to preview a place before you go.`,
    category: `phone-guides`,
    tags: [`Apple Maps`, `navigation`, `iPhone`, `iPad`, `tips`, `Look Around`, `indoor maps`],
    readTime: `6 min`,
    thumbnailEmoji: `🗺️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Most iPhone users know that Apple Maps gives turn-by-turn directions. But the app has many useful features that most people never discover. These features can save you time, help you prepare for trips, and even make navigation safer.

Here's a summary of what this guide will cover:

**Saving Home and Work:** You can tell Apple Maps where you live and where you work. Then instead of typing your address every time, you say "Take me home" or just tap "Home" with one tap.

**Reporting Hazards:** If you see an accident, a hazard in the road, or a speed trap, you can report it while navigating. Apple Maps shares this information with other drivers to improve their routes.

**Indoor Maps:** In large buildings like major airports and shopping malls, Apple Maps can show you a floor-by-floor map of the inside of the building, including where shops and restrooms are located.

**Look Around:** This is Apple's equivalent of Google's Street View. You can "stand" at a location and look around at 360-degree street-level photos, which is great for previewing what a place looks like before you get there.

All of these features are free and built into the Maps app on your iPhone or iPad. You don't need to download anything extra.`,
    steps: [
      {
        title: `Save your Home and Work addresses`,
        content: `Open Apple Maps. Tap the search bar at the bottom of the screen and scroll up on the cards to find your name card (it may say "My Location" or show your name). Alternatively, tap the search bar, type "Home," and tap "Add Home." Type your home address and tap Done. Repeat for Work. Now you can always tap "Home" or "Work" in Maps for instant directions without typing your address.`
      },
      {
        title: `Report an accident or road hazard while navigating`,
        content: `While you're navigating with turn-by-turn directions, tap the green arrow in the top right corner of the screen (it shows your travel time). You'll see options including "Report," "Share ETA," and others. Tap "Report," then choose what you want to report: Accident, Hazard (something in the road), or Speed Check (speed camera or enforcement). Tap the appropriate option. Your report is anonymous and helps other Maps users.`,
        warning: `Never tap anything on your phone screen while you're driving. Pull over safely first, or ask a passenger to do it for you.`
      },
      {
        title: `Use Look Around to preview a destination`,
        content: `Search for any address or business in Apple Maps. When you see the location highlighted on the map, look for a small binoculars icon or a small square thumbnail in the bottom left of the screen. Tap it. You'll see a full-screen street-level photo that you can drag left and right to look around. This helps you recognize what a building looks like before you arrive, which is especially helpful in unfamiliar areas.`,
        tip: `Look Around isn't available everywhere — it works best in major US cities and towns. If the binoculars icon doesn't appear, Look Around isn't available for that location yet.`
      },
      {
        title: `Explore indoor maps at airports and malls`,
        content: `When you search for a major airport (like O'Hare, LAX, JFK) or a large shopping mall, Apple Maps may automatically offer an indoor map. Zoom in on the building on the map screen. You'll see individual shops, gates, restrooms, and escalators appear. A floor selector will appear on the right side of the screen if the building has multiple floors — tap a floor number to see that level.`,
        tip: `This is a real help at large airports. You can see exactly where your gate is relative to your terminal entrance before you even get there.`
      }
    ]
  },
  {
    slug: `onedrive-auto-backup-guide`,
    title: `How to Automatically Back Up Your PC to OneDrive`,
    excerpt: `Set up OneDrive to automatically save your Desktop, Documents, and Pictures folders to the cloud so your files are safe even if your PC breaks.`,
    category: `windows-guides`,
    tags: [`OneDrive`, `backup`, `Windows`, `cloud storage`, `Microsoft`, `automatic backup`],
    readTime: `6 min`,
    thumbnailEmoji: `☁️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Losing important files — family photos, documents, financial records — when a computer breaks down is one of the most frustrating and heartbreaking tech problems people face. The good news: Windows has a built-in way to automatically back up your most important files to the cloud, using Microsoft OneDrive. Once it's set up, it works in the background without you having to do anything.

OneDrive is Microsoft's cloud storage service. If you sign into Windows 10 or 11 with a Microsoft account (the email address you use for Windows), you already have OneDrive — and it includes 5 GB of free storage, which is enough for thousands of documents and hundreds of photos.

The feature you'll set up is called "PC Folder Backup" or "Folder Backup." It tells OneDrive to automatically sync three specific folders: Desktop, Documents, and Pictures. Anything you save to those folders on your PC will also be saved to the cloud automatically and in real time.

Benefits of this setup:
- If your PC breaks, gets stolen, or is damaged, your files are safe in the cloud
- You can access your files from any computer or your phone
- It works silently in the background — you don't have to do anything after setup
- Files are version-controlled, so you can recover an earlier version if you accidentally change something

This guide assumes you have a Microsoft account and are using Windows 10 or 11.`,
    steps: [
      {
        title: `Find the OneDrive icon`,
        content: `Look at the bottom right corner of your Windows screen (the system tray, near the clock). Find the white or blue cloud icon — that's OneDrive. If you don't see it, click the small up-arrow (^) in the system tray to show hidden icons. If OneDrive isn't running at all, click the Start button, search for "OneDrive," and open it.`
      },
      {
        title: `Sign in to OneDrive`,
        content: `Right-click the OneDrive cloud icon in the system tray and choose "Settings." If you're not signed in, click "Sign in" and enter your Microsoft account email address and password. If you're not sure which email address this is, look at your Windows login screen — it often shows your Microsoft account email there.`,
        tip: `If you don't have a Microsoft account, you can create one for free at account.microsoft.com — you can use any email address, not just an Outlook address.`
      },
      {
        title: `Open Backup Settings`,
        content: `Right-click the OneDrive cloud icon in the system tray again and choose "Settings" (or go to the OneDrive settings window that may already be open). Click the "Backup" tab at the top. You'll see the three folders listed: Desktop, Documents, and Pictures, each with a toggle or checkbox.`
      },
      {
        title: `Turn on folder backup`,
        content: `Click "Manage backup" or toggle the switch next to each folder you want to back up. For most people, turning on all three (Desktop, Documents, and Pictures) is the right choice. Click "Start backup" or "Save changes." OneDrive will begin uploading your files to the cloud — this first upload may take a while depending on how many files you have, but it happens in the background.`,
        warning: `If you have a very large number of photos or files, the initial upload might take several hours or even a day. Your computer will work normally during this time.`
      },
      {
        title: `Confirm backup is working`,
        content: `After backup is turned on, look at your files in File Explorer. Files that have been synced to the cloud will show a green checkmark. Files still uploading will show a sync icon (circular arrows). You can also right-click the OneDrive cloud icon any time and choose "View sync status" to see what's been backed up and what's in progress.`,
        tip: `Going forward, anything you save to your Desktop, Documents, or Pictures folder will automatically sync to OneDrive. You don't have to do anything else.`
      }
    ]
  },
  {
    slug: `icloud-storage-upgrade-guide`,
    title: `How to Manage and Upgrade Your iCloud Storage`,
    excerpt: `Understand what uses iCloud space on your iPhone, how to free up storage, and how to upgrade to a bigger plan if you need more room.`,
    category: `phone-guides`,
    tags: [`iCloud`, `storage`, `iPhone`, `iPad`, `Mac`, `upgrade`, `Apple`],
    readTime: `6 min`,
    thumbnailEmoji: `☁️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you've ever seen a message on your iPhone saying "iCloud Storage is Full," you're not alone — it's one of the most common iPhone issues. This guide will help you understand what iCloud storage is, what fills it up, how to free some of it, and what to do if you need more.

iCloud is Apple's cloud storage service. When your iPhone is plugged in and connected to Wi-Fi, it automatically backs up your photos, contacts, app data, messages, and other information to iCloud. This backup protects your data if your phone is ever lost, stolen, or damaged.

Every Apple ID comes with 5 GB of free iCloud storage. That sounds like a lot, but photos and videos can fill it up quickly — a single video might be 100–200 megabytes. Once your storage is full, your iPhone stops backing up and you start getting warning messages.

Here's a breakdown of what typically takes up iCloud space:
- Photos and videos (usually the biggest culprit)
- iPhone and iPad backups
- Messages with photos and videos
- Files in iCloud Drive
- App data (health data, notes, etc.)

You have two options when you run out of space: delete things you don't need, or pay for a larger storage plan. Apple's paid plans start at 50 GB for $0.99 per month — that's less than a dollar a month and solves the problem for most people.`,
    steps: [
      {
        title: `Check your current iCloud storage use`,
        content: `On your iPhone, go to Settings (gear icon). Tap your name at the very top — this opens your Apple ID settings. Tap "iCloud." Near the top of the screen, you'll see a colored bar showing how much iCloud storage you've used and how much is left. Tap "Manage Account Storage" (or "Manage Storage") to see a detailed breakdown of what's using your storage.`
      },
      {
        title: `Free up space by deleting old backups`,
        content: `In the iCloud storage management screen, tap "Backups." You'll see a list of your devices and how much space each backup takes. If you see old devices you no longer own, tap on them and then tap "Delete Backup." You can safely delete backups for phones or iPads you no longer use.`,
        tip: `A backup for an old iPhone you no longer have doesn't do you any good and may be taking up a gigabyte or more of your storage.`
      },
      {
        title: `Free up space by managing photos`,
        content: `Photos and videos are almost always the biggest use of iCloud space. Consider: turning off "Optimize iPhone Storage" in Settings > [Your Name] > iCloud > Photos will keep full-quality photos on your phone but takes more local storage. Alternatively, go through your Photos app and delete photos or videos you don't need — deleted photos go to a "Recently Deleted" album and are removed completely after 30 days (or you can empty it manually).`
      },
      {
        title: `Upgrade to a larger storage plan`,
        content: `In Settings, tap your name, then iCloud, then "Manage Account Storage," then "Change Storage Plan." Apple's pricing (as of 2026):
- 50 GB: $0.99/month
- 200 GB: $2.99/month (good for most families)
- 2 TB: $9.99/month (for large photo libraries)

Choose a plan and tap "Buy." The charge goes to the payment method on your Apple ID. Your storage upgrades immediately.`,
        tip: `The 50 GB plan for $0.99 a month is plenty for most single users. If you want to share storage with family members, the 200 GB plan can be shared with up to five family members through Apple's Family Sharing feature.`
      },
      {
        title: `Turn off iCloud for apps you don't need`,
        content: `Some apps store data in iCloud even if you don't really need them to. In Settings > [Your Name] > iCloud, scroll down to see a list of apps using iCloud storage. Toggle off any apps you don't think need to be backed up to the cloud — this stops them from using more space. Don't turn off Photos, Contacts, or Backups unless you have a specific reason.`
      }
    ]
  },
  {
    slug: `whatsapp-voice-message-guide`,
    title: `How to Send and Receive Voice Messages in WhatsApp`,
    excerpt: `Record and send audio messages in WhatsApp instead of typing — perfect when your message is long, your hands are full, or typing feels difficult.`,
    category: `communication`,
    tags: [`WhatsApp`, `voice message`, `audio message`, `messaging`, `iPhone`, `Android`],
    readTime: `5 min`,
    thumbnailEmoji: `🎙️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `WhatsApp voice messages are one of the most popular features in the app, and for good reason: they're faster than typing, more personal than text, and much easier to use if you have trouble with small keyboards. You record your message by holding down a button, and the other person can listen to it whenever they're ready.

Voice messages in WhatsApp work like leaving a voicemail, but they go directly into your chat conversation as a playable audio clip. The person you're messaging can listen to it immediately or come back to it later. They can also speed it up or slow it down with a tap if they want.

Here's when voice messages are especially useful:
- When your message is long and typing it out would take a while
- When you're on the go and your hands are busy
- When you want your message to feel warm and personal
- When typing on a small phone keyboard is difficult for you
- When you want to explain something that's hard to put into words

WhatsApp voice messages are completely free (no extra charge beyond your regular data) and work the same way on iPhone and Android. They're also end-to-end encrypted, which means only you and the person you're sending to can hear them — not WhatsApp, not anyone else.

This guide covers both sending and listening to voice messages.`,
    steps: [
      {
        title: `Open a chat and find the microphone button`,
        content: `Open WhatsApp and tap on the conversation you want to send a voice message to. At the bottom of the screen, where you normally type a message, look to the right side. You'll see a microphone icon (if the text field is empty). That's the voice message button.`,
        tip: `If you've already started typing in the text field, the microphone icon may change to a "send" arrow. Delete what you've typed and the microphone will reappear.`
      },
      {
        title: `Record a voice message`,
        content: `Press and hold the microphone icon. While you're holding it, speak your message clearly. You'll see a red recording indicator showing how long you've been recording. When you're done, simply lift your finger off the button. WhatsApp will automatically send the message.`,
        tip: `Hold the phone a comfortable distance from your face — you don't need to speak directly into it. Normal conversational volume works fine.`
      },
      {
        title: `Record a longer message without holding your finger down`,
        content: `If you have a longer message to record and don't want to hold the button the whole time, press and hold the microphone icon, then slide your finger upward — you'll see a lock icon appear. Slide up to the lock to lock the recording in place. You can then record freely without holding the button. Tap the send arrow (or the checkmark) when you're done, or tap the trash icon to delete the recording.`
      },
      {
        title: `Preview before you send`,
        content: `On newer versions of WhatsApp, after you finish recording a locked message, a preview bar appears. Tap the play button to listen to your recording before sending it. If it sounds good, tap the blue send arrow. If you want to re-record it, tap the trash icon to delete it and start over.`
      },
      {
        title: `Listen to a voice message you received`,
        content: `When someone sends you a voice message, it appears in the chat as a blue bar with a play button and a waveform (the wavy line that represents the audio). Tap the play button (triangle) to hear the message. It will play through your phone's speaker. Tap the 1x speed button to change playback speed — 1.5x or 2x makes long messages faster to listen through.`,
        tip: `If you want to listen privately without others nearby hearing, hold the phone up to your ear like a regular phone call — WhatsApp will automatically switch to the earpiece speaker.`
      }
    ]
  },
  {
    slug: `imessage-effects-guide`,
    title: `How to Send iMessage Bubble and Screen Effects`,
    excerpt: `Spice up your iPhone text messages with fireworks, confetti, balloons, invisible ink, and more — here's what each effect does and how to send them.`,
    category: `phone-guides`,
    tags: [`iMessage`, `effects`, `iPhone`, `text messages`, `bubble effects`, `screen effects`],
    readTime: `5 min`,
    thumbnailEmoji: `🎉`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you send a text message to another iPhone user through iMessage (the blue bubble messages), you can add special visual effects to your messages. These effects are a fun way to celebrate birthdays, show excitement, or add a personal touch to your messages.

There are two types of effects:

**Bubble effects** change how your message bubble itself looks or moves when it appears on screen:
- Slam — the message crashes onto the screen with impact
- Loud — the message comes in big and bold, then shrinks to normal size
- Gentle — the message floats in softly and slowly
- Invisible Ink — the message appears blurred out until the recipient swipes across it to reveal it (great for a surprise or a secret)

**Screen effects** fill the entire screen of both your phone and the recipient's phone with an animation:
- Balloons — colorful balloons float up the screen
- Confetti — a colorful burst of confetti covers the screen
- Fireworks — a fireworks display lights up the screen
- Shooting Star — a star streaks across a dark sky
- Celebration — sparkling streamers and lights
- Lasers — laser beams shoot across the screen
- Love — red hearts float across the screen
- Echo — your message flies across the screen multiple times

Effects only work when both the sender and recipient are using iPhones with iMessage (blue bubbles). They don't work with regular SMS text messages (green bubbles) or with Android users.`,
    steps: [
      {
        title: `Type your message first`,
        content: `Open the Messages app and go to the conversation where you want to send the effect. Type your message in the text field at the bottom as you normally would. Don't tap the blue send button yet — that would send it as a plain message.`
      },
      {
        title: `Open the effects menu`,
        content: `After you've typed your message, press and hold the blue send button (the upward arrow). Don't tap it quickly — press and hold for about one second until the effects screen opens. You'll see your message at the top and two tabs below: "Bubble" and "Screen."`,
        tip: `If you accidentally send the message before accessing effects, you can't add an effect to an already-sent message. You'd need to send a new message.`
      },
      {
        title: `Choose a Bubble effect`,
        content: `Tap the "Bubble" tab. You'll see four options: Slam, Loud, Gentle, and Invisible Ink. Tap each one to preview how it looks — your message will animate in the preview at the top of the screen. When you find one you like, tap the blue send arrow in the top right corner of the preview area to send the message with that effect.`
      },
      {
        title: `Choose a Screen effect`,
        content: `Tap the "Screen" tab. Swipe left and right through the screen effect options: Balloons, Confetti, Fireworks, Shooting Star, Celebration, Lasers, Love, and Echo. Each one will automatically preview in full-screen so you can see what it looks like. When you find the effect you want, tap the blue send button at the top right.`,
        tip: `Balloons are perfect for birthdays, Fireworks for New Year's or celebrations, and Love for anniversaries or Valentine's Day.`
      },
      {
        title: `Replay an effect you received`,
        content: `When you receive a message with a screen effect, it plays automatically as soon as the message arrives. If you want to see it again, tap and hold the message bubble briefly — you may see a "Replay" option appear, or you can tap the word "Replay" that sometimes appears below the animation after it plays.`
      }
    ]
  },
  {
    slug: `android-long-screenshot-guide`,
    title: `How to Take a Scrolling Screenshot on Android`,
    excerpt: `Capture an entire webpage, conversation, or document in one screenshot on Samsung Galaxy or Google Pixel — not just what's visible on screen.`,
    category: `phone-guides`,
    tags: [`Android`, `screenshot`, `scrolling screenshot`, `Samsung`, `Pixel`, `long screenshot`],
    readTime: `5 min`,
    thumbnailEmoji: `📸`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `A regular screenshot captures only what's currently visible on your phone's screen. But what if you want to capture a long article, an entire conversation, or a full webpage? That's where a scrolling screenshot comes in.

A scrolling screenshot (also called a long screenshot or scroll capture) automatically scrolls down and captures everything — turning a page that would normally take 10 screenshots into one single, long image. The result is one tall image file that shows the full content from top to bottom.

This is extremely useful for:
- Saving a full text conversation as evidence or a keepsake
- Capturing an entire receipt or bank statement
- Saving a long email or article to read offline
- Sharing a complete webpage with someone

The steps are slightly different depending on which Android phone you have. This guide covers the two most popular brands: Samsung Galaxy and Google Pixel. Other Android phones (like LG, Motorola, or OnePlus) may have a similar feature, though the steps may vary slightly.

Note: scrolling screenshots aren't available in every app. They work best in browsers, text messages, and documents. Some apps block screenshots entirely for security reasons (like banking apps).`,
    steps: [
      {
        title: `Take a regular screenshot first`,
        content: `On any Android phone, take a standard screenshot by pressing and holding the Power button and the Volume Down button at the same time. Hold them for about one second, then release. You'll hear a click sound (or see a flash) and a small preview of the screenshot will appear at the bottom of your screen.`,
        tip: `Act quickly — the toolbar at the bottom of the screen with the scroll capture option will only be visible for a few seconds before it disappears.`
      },
      {
        title: `Tap "Scroll" or "Scroll capture" on Samsung Galaxy`,
        content: `On a Samsung Galaxy phone, after taking the screenshot, a toolbar appears at the bottom of the screen. Look for a downward-pointing double-arrow icon or the word "Scroll." Tap it. The phone will automatically scroll down and capture the next section, extending the screenshot. Keep tapping it to capture more content, then stop when you've captured everything you need.`,
        tip: `The scroll capture option on Samsung may be labeled "Scrollshot" on older models or "Scroll capture" on newer ones. It looks like a rectangle with a downward arrow.`
      },
      {
        title: `Use "Capture more" on Google Pixel`,
        content: `On a Google Pixel phone running Android 12 or later, after taking the screenshot, tap "Capture more" in the toolbar that appears at the bottom. A selection tool appears that lets you expand the bottom edge of the screenshot downward — drag it down to include more of the page. You can also tap an auto-scroll button on some versions to capture the full page automatically.`,
        tip: `Google Pixel's scrolling screenshot approach gives you more control over how far down the page to capture — drag the handle carefully to get exactly what you need.`
      },
      {
        title: `Find and share your scrolling screenshot`,
        content: `The finished screenshot is saved automatically to your phone's Photos app, in the Screenshots album. Open Photos, tap Albums, and look for "Screenshots" to find it. You can share it the same way as any photo — tap the Share button and choose to send it via text, email, WhatsApp, or any other app.`
      }
    ]
  },
  {
    slug: `iphone-full-page-screenshot-guide`,
    title: `How to Take a Full-Page Screenshot in Safari on iPhone`,
    excerpt: `Capture an entire webpage as a single PDF on your iPhone using Safari — not just what's visible, but the whole page from top to bottom.`,
    category: `phone-guides`,
    tags: [`iPhone`, `screenshot`, `Safari`, `full page`, `PDF`, `iOS`],
    readTime: `4 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you take a normal screenshot on your iPhone, it only captures what's currently visible on screen. If you're viewing a long webpage, you'd need to take dozens of screenshots to capture the whole thing. That's frustrating.

But Safari — Apple's built-in web browser on iPhone — has a hidden feature that lets you capture the entire page as a single file, no matter how long it is. The result is saved as a PDF (a standard document format), which you can save to your Files app, share via email or messages, or print.

This is especially useful for:
- Saving a full article or news story to read offline
- Keeping a complete record of an online receipt or order confirmation
- Saving a full web page with medical or financial information
- Sharing an entire page with a family member or advisor

This feature only works in Safari on iPhone — it doesn't work in Chrome, Firefox, or other browsers on iPhone. It also requires iOS 13 or later (if your iPhone was bought after 2018, you almost certainly have iOS 13 or newer).

The key to accessing this feature is what you see after you take a regular screenshot — there's an option that most people walk right past.`,
    steps: [
      {
        title: `Open the webpage in Safari`,
        content: `Make sure you're using Safari (the compass-looking icon) to view the webpage you want to capture. Navigate to the page you want to save as a full PDF. It can be any webpage — an article, a receipt, a reference page, anything.`
      },
      {
        title: `Take a screenshot`,
        content: `Take a screenshot using the standard iPhone method:
- On iPhones with Face ID (no Home button): press and release the Side button (right edge) and the Volume Up button at the same time.
- On iPhones with a Home button: press and release the Side button (or top button) and the Home button at the same time.
A small preview of the screenshot will appear in the bottom-left corner. Tap on it quickly before it disappears.`
      },
      {
        title: `Switch to "Full Page"`,
        content: `After tapping the screenshot preview, the screenshot editing screen opens. At the very top of the screen, you'll see two tabs: "Screen" and "Full Page." "Screen" is selected by default — it's the normal screenshot of just what was visible. Tap "Full Page" to switch to the full-page capture. You'll see a scrollable thumbnail preview on the right side showing the entire page.`
      },
      {
        title: `Save the full-page PDF`,
        content: `Tap "Done" in the top left corner. A menu will appear asking what to do with the file. Tap "Save to Files." Choose a folder in your Files app where you'd like to save it (like "Downloads" or "On My iPhone"), then tap "Save." The full page is now saved as a PDF file that you can open, share, or print any time.`,
        tip: `To share it right away instead of saving it, tap the Share button (the square with an upward arrow) before tapping Done, and choose to email it or send it via Messages.`
      }
    ]
  },
  {
    slug: `google-drive-tips-guide`,
    title: `How to Organize Files in Google Drive`,
    excerpt: `Keep your Google Drive tidy with folders, color-coding, stars for important files, and smart search — find any file in seconds.`,
    category: `essential-skills`,
    tags: [`Google Drive`, `organization`, `folders`, `cloud storage`, `files`],
    readTime: `6 min`,
    thumbnailEmoji: `📂`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google Drive is a free cloud storage service from Google. If you use Gmail, you already have Google Drive — it comes with every Google account, and includes 15 GB of free storage. You can use Google Drive to store photos, documents, spreadsheets, and any other files, and access them from any device with an internet connection.

The problem is that without some organization, Google Drive can become as cluttered as a desktop covered in papers. This guide will show you how to keep it tidy so you can find what you need quickly.

**Folders** are the foundation of good organization. Think of them like filing cabinet drawers — you can have a folder for Medical, one for Finances, one for Photos, one for Family, and so on. Within any folder, you can create more folders (called subfolders) for even finer organization.

**Color coding** lets you assign a color to any folder so you can spot it at a glance. A red folder for Bills, a green one for Medical records, a blue one for Family photos — whatever makes sense to you.

**Starred files** are a way to mark your most important or most-used files. Think of it like bookmarking — you can click "Starred" in the left sidebar to see all your starred files without searching.

**Search** in Google Drive is powerful. You can search by file name, by type of file, by who shared it, or by date — and Google Drive can even search inside documents for keywords.`,
    steps: [
      {
        title: `Create a new folder`,
        content: `Go to drive.google.com in your web browser and sign in with your Google account. Click the "+ New" button in the top left corner, then click "New folder." Type a name for your folder (like "Medical Records" or "2026 Tax Documents") and click Create. The folder will appear in your Drive. On the Google Drive app on your phone, tap the "+" button, then "Folder," enter a name, and tap Create.`
      },
      {
        title: `Move files into folders`,
        content: `To move a file into a folder on the website, right-click on the file and choose "Move to." A file picker will appear — navigate to the folder where you want to put it and click Move. Alternatively, you can drag and drop a file onto a folder. To move multiple files at once, hold the Ctrl key (or Command on Mac) while clicking each file to select them all, then right-click and choose Move to.`,
        tip: `You can also select a file and press Shift+Z to add it to a folder without removing it from where it currently is — this is like giving a file more than one home.`
      },
      {
        title: `Color-code your folders`,
        content: `Right-click on any folder in Google Drive. Choose "Organize" and then "Change color." A palette of colors appears. Click the color you want for that folder. The folder icon will change to that color immediately. This works on the Google Drive website — the app doesn't show folder colors in the same way.`,
        tip: `A consistent color system helps a lot. For example: red for urgent/bills, green for health, blue for family, yellow for work. Stick to the same system and it becomes second nature.`
      },
      {
        title: `Star important files`,
        content: `Right-click any file or folder in Google Drive and choose "Organize" then "Add to starred" (or just "Add star"). A small star will appear next to the item. To find all your starred items, click "Starred" in the left sidebar of the Google Drive website. Starred items appear on your Google Drive app too — look in the left menu for the star icon.`
      },
      {
        title: `Search by file type or date`,
        content: `Click the search bar at the top of Google Drive. Type a file name or keyword to search. For more specific searching, look for a small dropdown arrow or "Search options" near the right side of the search bar. Click it to see advanced search options — you can filter by file type (documents, spreadsheets, images, PDFs), owner, date modified, and more.`,
        tip: `Searching for type:pdf will show all your PDF files. Searching for type:spreadsheet shows all spreadsheets. This is faster than scrolling through folders.`
      }
    ]
  },
  {
    slug: `app-store-tips-guide`,
    title: `iPhone App Store Tips Most People Don't Know`,
    excerpt: `Get a refund for an accidental purchase, check app privacy labels, create an app wishlist, and share apps with your family — all from the App Store.`,
    category: `phone-guides`,
    tags: [`App Store`, `iPhone`, `apps`, `refund`, `privacy`, `family sharing`, `wishlist`],
    readTime: `6 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Most iPhone users open the App Store only when they need to download something new. But Apple's App Store has several useful features that are worth knowing about — including ways to protect your privacy, get your money back if you accidentally buy something, and share apps with family members.

Here's what this guide covers:

**Wishlists:** Found an app but not sure if you want it yet? You can save it to a wishlist and come back to it later without downloading it.

**Privacy Labels:** Before downloading any app, you can see exactly what data the app collects about you — such as your location, contacts, or browsing history. This is called the Privacy label and it's required for all apps on the App Store.

**Refunds:** If you accidentally bought an app or made an in-app purchase you didn't intend to, Apple has a process for requesting a refund. You can get your money back in most cases within a few days.

**Family Sharing:** With Apple's Family Sharing feature, you can share apps you've purchased with up to five family members — without buying the app again. Family members can also share subscriptions like Apple Music or Apple Arcade.

These features are free and available on any iPhone running a recent version of iOS.`,
    steps: [
      {
        title: `Add an app to your wishlist`,
        content: `Find an app in the App Store that you're interested in but not ready to download. Tap on the app to open its page. Look for the "Want" button (it may look like a bookmark ribbon icon or be labeled "Save" depending on your iOS version). Tap it to add the app to your wishlist. To find your wishlist later, tap your profile picture in the top right corner of the App Store, then look for "Want to get."`,
        tip: `This is helpful when you hear about an app from a friend or see it mentioned online — save it and evaluate it later when you have more time.`
      },
      {
        title: `Check an app's privacy label before downloading`,
        content: `Open any app's page in the App Store. Scroll down past the screenshots and description. Look for a section called "App Privacy." It will list categories of data the app collects, such as "Location," "Contacts," "Usage Data," or "Purchases." Tap "See Details" to get a full breakdown of what data is collected and whether it's linked to your identity.`,
        warning: `An app that asks for your Contacts and Location when it has no obvious reason to need them (like a flashlight app requesting your contacts) is worth questioning. Consider choosing a different app.`
      },
      {
        title: `Request a refund for an accidental purchase`,
        content: `Open the Settings app on your iPhone. Tap your name at the top, then tap "Media & Purchases," then "View Account." Sign in if asked. Scroll down and tap "Purchase History." Find the purchase you want to refund — tap on it, then tap "Report a Problem." You'll be taken to Apple's website where you can select "I didn't mean to buy this" or "I accidentally purchased this." Submit the form and Apple will review your request, usually within 48 hours.`,
        tip: `Apple is fairly generous with refunds for accidental purchases, especially the first time. In-app purchases and subscriptions can also be refunded this way.`
      },
      {
        title: `Share purchased apps with family members`,
        content: `If you've paid for an app, your family members can download it for free through Family Sharing. First, make sure you have Family Sharing set up: go to Settings, tap your name, then "Family Sharing." Once set up, family members can tap their own name in Settings, then "Family Sharing," and view all apps you've purchased that are eligible for sharing. They can download shared apps directly from the App Store at no charge.`,
        tip: `Not all apps support family sharing — it depends on the developer. Most paid apps do, but some apps specifically disable sharing.`
      }
    ]
  },
  {
    slug: `google-play-store-tips-guide`,
    title: `Google Play Store Tips for Android Users`,
    excerpt: `Manage app permissions, turn off accidental in-app purchases, check app safety ratings, and update apps manually on your Android phone.`,
    category: `phone-guides`,
    tags: [`Google Play`, `Android`, `apps`, `permissions`, `in-app purchases`, `app updates`, `safety`],
    readTime: `6 min`,
    thumbnailEmoji: `▶️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `The Google Play Store is where you download apps on Android phones. Beyond downloading apps, the Play Store has several important tools that help you stay in control of your phone's security, privacy, and spending.

Here's what this guide covers:

**App Permissions:** Apps ask for access to things like your camera, microphone, contacts, and location. You can control exactly what each app is allowed to access — and take away access to anything that doesn't seem necessary.

**In-App Purchases:** Many free apps allow you to spend money inside the app (for example, buying extra features or game items). You can require a password or fingerprint before any purchase, so an accidental tap doesn't result in an unexpected charge.

**Google Play Protect:** This is Android's built-in safety scanner. It automatically checks your apps for harmful behavior and warns you if something looks suspicious. You can run a manual scan any time.

**Manual Updates:** Apps update automatically in the background, but sometimes you may want to update a specific app right away — especially a security or banking app. You can do that manually from the Play Store.

These features are available on all Android phones with the Google Play Store, including Samsung Galaxy, Google Pixel, and most other Android devices.`,
    steps: [
      {
        title: `Review and change app permissions`,
        content: `Go to your phone's Settings app. Tap "Apps" (or "Application Manager" on some phones). Find the app you want to review and tap it. Tap "Permissions." You'll see a list of permissions that app has requested — like Camera, Microphone, Contacts, Location. Tap any permission to change it from "Allow" to "Deny" or vice versa.`,
        tip: `If a flashlight app wants access to your contacts and microphone, that's a red flag. Revoke permissions that don't make sense for what the app does.`
      },
      {
        title: `Require authentication for purchases`,
        content: `Open the Google Play Store app. Tap your profile picture in the top right corner. Tap "Settings," then "Authentication." Tap "Require authentication for purchases." Choose "For all purchases through Google Play on this device." Now every purchase — including in-app purchases — will require your fingerprint or password before completing.`,
        warning: `Without this turned on, anyone who picks up your unlocked phone could accidentally (or intentionally) make purchases through apps.`
      },
      {
        title: `Check Play Protect status`,
        content: `Open the Google Play Store app. Tap your profile picture in the top right corner, then tap "Play Protect." You'll see the current status — it should say "No harmful apps found" if everything is okay. Tap the "Scan" button to run an immediate check of all installed apps. If Play Protect finds anything suspicious, it will alert you and give you the option to remove the problematic app.`
      },
      {
        title: `Check an app's safety before downloading`,
        content: `Before downloading a new app, tap on it in the Play Store to open its page. Scroll down to find the "Data safety" section. This shows what data the app collects (location, contacts, phone ID, etc.) and whether it's shared with third parties. Look for apps that have been verified as following Google's data safety requirements. Also check the review count and rating — apps with thousands of reviews and 4+ stars are generally more trustworthy.`,
        tip: `Check the number of downloads as well as the reviews. An app with only 100 downloads and glowing reviews might have fake reviews — established apps with millions of downloads are generally safer.`
      },
      {
        title: `Update a specific app manually`,
        content: `Open the Google Play Store app. Tap your profile picture in the top right corner. Tap "Manage apps & device." Tap "Updates available." You'll see a list of apps with pending updates. Tap "Update" next to any specific app to update just that one, or tap "Update all" to update everything at once.`,
        tip: `Keeping apps updated is important for security — updates often include fixes for vulnerabilities that hackers could exploit. Tap "Update all" regularly to stay protected.`
      }
    ]
  },
  {
    slug: `mac-backup-external-drive-guide`,
    title: `How to Back Up Your Mac to an External Hard Drive`,
    excerpt: `Use Time Machine to back up your Mac to an external drive — what you need, how to set it up, and how to restore files when you need them.`,
    category: `mac-guides`,
    tags: [`Mac`, `backup`, `Time Machine`, `external drive`, `macOS`, `data protection`],
    readTime: `7 min`,
    thumbnailEmoji: `💾`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Backing up your Mac is one of the most important things you can do to protect your files, photos, and documents. If your Mac is ever lost, stolen, or damaged — or if the hard drive fails unexpectedly — a backup means you won't lose anything.

Apple has built a backup tool directly into every Mac called Time Machine. Time Machine works automatically in the background whenever an external hard drive is connected to your Mac. It saves hourly backups for the past 24 hours, daily backups for the past month, and weekly backups for all previous months, until the drive is full. It then deletes the oldest backups to make room for new ones.

**What you need:**
- A Mac running macOS (any recent version)
- An external hard drive with at least as much storage as your Mac's hard drive (ideally 2–3 times more). A 1 TB drive costs around $40–$60 at most retail stores and is usually enough for most people.
- A USB or USB-C cable (the drive usually comes with one)

Once Time Machine is set up and your backup drive is plugged in, backups happen automatically. You can go about your day while the backup runs in the background. The first backup may take several hours since it's copying everything — subsequent backups only save what has changed since the last backup, so they're much faster.

If you ever need to restore a file — even an accidentally deleted one — Time Machine lets you go back to any point in time and recover it.`,
    steps: [
      {
        title: `Get an external hard drive`,
        content: `You need a hard drive (also called an external drive or external hard disk) with enough space to store your backups. Look for a 1 TB (terabyte) or 2 TB external drive — these are widely available at electronics stores like Best Buy, at Costco, Amazon, or Walmart. Look for brands like Seagate, Western Digital (WD), or Toshiba. Prices range from about $40 to $80. Make sure the drive connects via USB (most do), and that it comes with a cable.`,
        tip: `1 TB of storage holds about 250,000 photos or a complete backup of most Mac computers. If your Mac has a lot of video files, get a 2 TB drive to be safe.`
      },
      {
        title: `Connect the external drive to your Mac`,
        content: `Plug the external hard drive into your Mac using the included USB cable. On newer Macs with only USB-C ports, you may need a USB-C adapter (a small dongle that converts the regular USB port to USB-C). After plugging in, macOS may ask if you want to use the drive for Time Machine — if it does, click "Use as Backup Disk." If it doesn't ask automatically, proceed to the next step.`
      },
      {
        title: `Open Time Machine preferences`,
        content: `Click the Apple logo in the top left corner of your screen. Click "System Settings" (on macOS Ventura and later) or "System Preferences" (on older macOS versions). In System Settings, click "General" in the left sidebar, then "Time Machine." In System Preferences, click the Time Machine icon directly.`
      },
      {
        title: `Select the backup disk`,
        content: `In the Time Machine settings window, click "Add Backup Disk" or "Select Disk." You'll see a list of available drives — click on the name of your external hard drive. Click "Use Disk" or "Set Up Disk." Time Machine will ask if you want to erase the drive and format it for backups (if the drive is new and empty, click Erase to format it). Time Machine will then be turned on and the first backup will begin automatically.`,
        warning: `Formatting the drive will erase everything already on it. Only click Erase if the drive is new or if you have no important files on it already.`
      },
      {
        title: `Monitor your backup progress`,
        content: `You'll see a Time Machine icon appear in your menu bar at the top right of your screen (it looks like a clock with a circular arrow). Click it to see the backup status. The first backup will say something like "Backing up: 20 GB of 300 GB." Let the backup run — it may take several hours the first time. Your Mac can be used normally during this time, though it may run slightly slower.`,
        tip: `Leave your Mac plugged into power and the external drive connected during the first backup — it's a long process and you don't want it interrupted.`
      },
      {
        title: `Restore a file from a Time Machine backup`,
        content: `If you ever accidentally delete a file or want to recover an older version of a document, click the Time Machine icon in the menu bar and choose "Enter Time Machine." Your screen will fill with a visual timeline — you'll see your files arranged in space and time. Use the arrows on the right side to go back in time. When you see the file or folder you want to recover, click it to select it, then click "Restore." Time Machine will copy it back to its original location on your Mac.`
      }
    ]
  }
];
