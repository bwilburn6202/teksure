import { Guide } from './guides';

export const guidesBatch20: Guide[] = [
  {
    slug: 'onedrive-setup-guide',
    title: 'How to Set Up and Use OneDrive on Windows',
    excerpt: `OneDrive is Microsoft's free cloud storage built into Windows. Learn how to set it up and automatically back up your files.`,
    category: 'windows-guides',
    tags: ['onedrive', 'cloud storage', 'windows', 'backup', 'microsoft'],
    readTime: '6 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `OneDrive is Microsoft's cloud storage service — and if you have a Windows computer, it's already installed. Think of it as a folder on your computer that also lives on the internet. When you save something to OneDrive, it stays on your PC and a copy goes to the cloud automatically. That means if your computer breaks, gets stolen, or stops working, your files are safe online and you can get to them from any other device.\n\nEvery Microsoft account comes with 5 gigabytes of free OneDrive storage — that's enough for thousands of documents, photos, and spreadsheets. You can access your files from a phone, tablet, another computer, or a web browser. Files you put in OneDrive also sync across all your devices, so if you save a document on your laptop, you'll find it on your tablet too.\n\nSetting up OneDrive takes about five minutes, and once it's running you usually don't need to think about it. This guide walks you through getting started, what to store there, and how to find your files when you need them.`,
    steps: [
      {
        title: 'Sign in to OneDrive',
        content: `Click the white or blue cloud icon in the bottom-right corner of your taskbar (near the clock). If you don't see it, click the small up-arrow (^) first to show hidden icons. A window will ask you to sign in — use your Microsoft account email and password. If you don't have a Microsoft account, you can create one free at account.microsoft.com.`,
        tip: 'Your Microsoft account is the same one you use for Windows sign-in, Outlook email, or Xbox. You likely already have one.',
      },
      {
        title: 'Choose what to back up',
        content: 'Once signed in, OneDrive may ask which folders to back up automatically. Your Desktop, Documents, and Pictures folders are the most important. Check the boxes next to each one and click "Start backup." From now on, anything you save to those folders will automatically copy to the cloud.',
        tip: 'Backing up your Desktop and Documents folders protects the files you work with every day without changing anything about how you use your computer.',
      },
      {
        title: 'Find your OneDrive folder',
        content: `Open File Explorer (the folder icon on your taskbar). In the left sidebar, you'll see "OneDrive" listed — click it to open the folder. Any file or folder you drag into here will be saved to the cloud. Files with a green checkmark are backed up. Files with a blue circle are still uploading.`,
      },
      {
        title: 'Access your files from anywhere',
        content: `To reach your files from another device or a web browser, go to onedrive.live.com and sign in with your Microsoft account. You'll see all your backed-up files and folders. You can view, download, or share anything stored there.`,
        tip: 'Quick Tip: Install the OneDrive app on your iPhone or Android phone to access and upload files directly from your phone camera.',
      },
      {
        title: 'Share a file with someone',
        content: `Right-click any file in your OneDrive folder and choose "Share." Type the email address of the person you want to share with and click Send. They'll get a link to view or edit the file — no need to email large attachments.`,
        warning: 'When sharing, make sure the permission is set to "Can view" unless you actually want the other person to edit your document.',
      },
    ],
  },

  {
    slug: 'microsoft-copilot-beginners',
    title: 'What Is Microsoft Copilot and How Do You Use It',
    excerpt: 'Microsoft Copilot is a free AI assistant built into Windows 11 and Bing. It can answer questions, write text, summarize emails, and more.',
    category: 'ai-guides',
    tags: ['microsoft copilot', 'ai assistant', 'windows 11', 'bing', 'artificial intelligence'],
    readTime: '5 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Microsoft Copilot is an AI assistant that Microsoft has built directly into Windows 11, Bing, and Microsoft 365. If you've heard of ChatGPT, Copilot is similar — you type a question or request in plain English, and it responds with helpful information, writes text for you, summarizes things, or helps you get things done on your computer.\n\nThe good news: Copilot is free. You don't need to sign up for anything extra if you already use Windows 11 or Bing. You can open it with a single button on many Windows keyboards (the one that looks like two diamond shapes), or find it in the Start menu.\n\nCopilot can help with a surprising number of things: writing a birthday message, summarizing a long article, explaining a confusing news story, looking up information, editing a paragraph you wrote, or helping you figure out what a tech error means. This guide shows you the basics so you can start getting comfortable with it.`,
    steps: [
      {
        title: 'Open Microsoft Copilot',
        content: 'On Windows 11: Click the Start button, then type "Copilot" and click it from the results. You can also look for the Copilot button on your taskbar (it looks like a small colorful swirl). On older Windows or any device: go to bing.com/chat in your web browser — Copilot is built into Bing search.',
        tip: 'Many new Windows keyboards have a dedicated Copilot key (looks like two overlapping rectangles). Pressing it opens Copilot instantly.',
      },
      {
        title: 'Ask your first question',
        content: `Click in the text box at the bottom and type your question in everyday language. For example: "What is the weather going to be like this week?" or "Can you help me write a thank-you note to my doctor?" or "What does 'bandwidth' mean in plain English?" Then press Enter or click the send button.`,
      },
      {
        title: 'Try some helpful everyday requests',
        content: 'Copilot works well for: writing or polishing emails and messages, summarizing an article you paste in, explaining confusing tech or medical terms, giving you a simple recipe, looking up phone numbers or addresses, translating short phrases to Spanish, and suggesting what to say in a tricky situation.',
        tip: `Quick Tip: If Copilot's first answer is too long or technical, just reply "Can you say that in simpler language?" or "Give me just the short version."`,
      },
      {
        title: 'Use Copilot in Microsoft Word or Outlook',
        content: 'If you have Microsoft 365 (Word, Outlook, etc.), Copilot can appear directly inside those apps. In Word, look for a small Copilot icon in the toolbar. You can ask it to "Write a short paragraph about [topic]" or "Make this email more professional." This requires a Microsoft 365 subscription.',
      },
      {
        title: 'Keep your privacy in mind',
        content: 'Copilot is powered by the internet and your conversations may be used to improve the AI. Avoid typing sensitive personal information like Social Security numbers, passwords, or bank account numbers into any AI assistant.',
        warning: 'Never share passwords, SSN, credit card numbers, or medical ID numbers with any AI tool — including Copilot.',
      },
    ],
  },

  {
    slug: 'apple-calendar-beginners',
    title: 'How to Use Apple Calendar on iPhone, iPad, and Mac',
    excerpt: `Apple Calendar keeps all your appointments in one place and syncs across all your Apple devices. Here's how to add events, set reminders, and share with family.`,
    category: 'essential-skills',
    tags: ['apple calendar', 'iphone', 'ipad', 'mac', 'icloud', 'appointments'],
    readTime: '5 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple Calendar is the built-in calendar app on every iPhone, iPad, and Mac. It's the red app with a white grid icon — you'll find it on your home screen or dock. The real power of Apple Calendar is that it syncs automatically through iCloud, so an appointment you add on your iPhone instantly appears on your iPad and Mac too. No copying, no duplicates.\n\nYou can use Apple Calendar to track doctor appointments, family events, birthdays, medication schedules, or anything else you want to remember. You can set reminders so your phone alerts you ahead of time — one hour before, one day before, or whatever works for you. You can also share a calendar with a family member so you can both see upcoming events.\n\nIf you've been keeping appointments in your head or on paper, this guide will help you move them to a calendar that travels with you and gently reminds you before each one.`,
    steps: [
      {
        title: 'Open the Calendar app and add an event',
        content: `Tap the Calendar app on your iPhone or iPad. Tap the "+" button in the top-right corner to add a new event. Type a title (like "Doctor appointment"), then tap the date and time fields to set when it is. Tap "Add" when you're done.`,
        tip: 'Quick Tip: On iPhone, you can also tap directly on the date of the event in the month view, then tap the "+" button to pre-fill that date.',
      },
      {
        title: `Set a reminder so you don't forget`,
        content: `When creating or editing an event, tap "Alert." You'll see options like "5 minutes before," "30 minutes before," "1 day before," and more. Tap whichever works for you. For doctor appointments, "1 day before" and "2 hours before" together is a good combination. Your phone will send a notification at that time.`,
      },
      {
        title: 'Add a repeating event',
        content: 'For things that happen regularly (weekly pill pickup, monthly bills), tap "Repeat" when creating the event and choose Daily, Weekly, Monthly, or Yearly. The event will appear automatically on every future date you choose.',
      },
      {
        title: 'Share a calendar with family',
        content: `Go to the Calendars tab at the bottom. Tap the info button (circle with an "i") next to a calendar name. Tap "Add Person" and enter a family member's email address. They'll get an invitation to view (or edit, your choice) that calendar. Great for sharing a family events calendar.`,
        warning: `Only share calendars with people you trust — they'll be able to see all events on that calendar.`,
      },
      {
        title: 'Make sure iCloud sync is on',
        content: 'Go to Settings > [your name] > iCloud > and make sure the toggle next to Calendar is green (on). This ensures your calendar appears on all your Apple devices automatically.',
      },
    ],
  },

  {
    slug: 'apple-wallet-cards-passes',
    title: 'How to Add Cards and Passes to Apple Wallet',
    excerpt: 'Apple Wallet stores your debit cards, credit cards, boarding passes, loyalty cards, and more — all in one place on your iPhone.',
    category: 'financial-tech',
    tags: ['apple wallet', 'iphone', 'digital cards', 'boarding pass', 'loyalty cards'],
    readTime: '5 min',
    thumbnailEmoji: '👛',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple Wallet is the app on your iPhone that stores digital versions of your everyday cards and passes — credit cards, debit cards, boarding passes, event tickets, loyalty program cards, and even your driver's license in some states. Think of it as a digital version of the physical wallet in your pocket.\n\nOnce a card is in Apple Wallet, you can use it to pay at stores using Apple Pay — just hold your phone near the card reader. You can also use boarding passes stored in Wallet to check in at the airport without printing anything. Loyalty cards stored in Wallet appear automatically when you're near the store.\n\nApple Wallet is separate from but works closely with Apple Pay (which handles payments). This guide covers how to add different types of cards and passes, so you get the most out of the app.`,
    steps: [
      {
        title: 'Open Apple Wallet',
        content: `Tap the Wallet app on your iPhone (it looks like a folded leather wallet). If you've never added anything, it will show you an empty screen with a "+" button. Tap that "+" to start adding things.`,
      },
      {
        title: 'Add a credit or debit card',
        content: `Tap the "+" button, then tap "Debit or Credit Card." You can either point your camera at the card to scan it automatically, or type the card number manually. Then enter the expiration date and security code when asked. Your bank may send a text to verify it's you.`,
        tip: `Quick Tip: Most major banks — Chase, Bank of America, Wells Fargo, Capital One, and others — work with Apple Wallet. Check your bank's app or website if you're not sure.`,
      },
      {
        title: 'Add a boarding pass or event ticket',
        content: `Airlines and ticket sellers (like Ticketmaster) often email you a boarding pass or ticket with a button that says "Add to Apple Wallet." Tap that button and it'll be saved automatically. When you're at the airport or venue, open Wallet and the right pass typically appears on your screen based on your location.`,
      },
      {
        title: 'Add a loyalty or rewards card',
        content: `Many store apps (Starbucks, CVS, Walgreens, Target, etc.) let you add your rewards card to Wallet. Open the store's app, find the rewards or membership card section, and look for an "Add to Apple Wallet" button. Or tap "+" in Wallet and search for the store name.`,
        tip: 'Quick Tip: Once a loyalty card is in Wallet, your phone shows it automatically when you arrive at that store — no more hunting through apps.',
      },
      {
        title: 'Use a card to pay at a store',
        content: `To pay with a card in your Wallet at checkout, double-click the side button on your iPhone (Face ID models) or rest your thumb on the Home button (Touch ID models). Your Wallet opens. Hover the top of your iPhone near the store's card reader. When the payment goes through, you'll feel a tap and see a checkmark.`,
      },
    ],
  },

  {
    slug: 'google-wallet-setup',
    title: 'How to Set Up and Use Google Wallet on Android',
    excerpt: 'Google Wallet lets you store debit cards, credit cards, loyalty cards, and passes on your Android phone so you can pay and check in without digging through your purse or wallet.',
    category: 'financial-tech',
    tags: ['google wallet', 'android', 'tap to pay', 'digital wallet', 'NFC'],
    readTime: '5 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Wallet is the built-in app on Android phones that lets you store payment cards, loyalty cards, boarding passes, and transit cards — all on your phone. It's Google's answer to Apple Wallet, and it works on any Android phone that has NFC (the short-range wireless technology that lets you tap to pay at store terminals).\n\nMost Android phones made in the last five years have NFC and Google Wallet pre-installed. Once you add a credit or debit card, you can pay at checkout counters just by holding your phone near the payment terminal — the same terminals that accept tap-to-pay cards. It's faster, and you don't have to carry every card with you.\n\nGoogle Wallet also stores boarding passes, event tickets, gym memberships, and more. This guide shows you how to set it up, add your first card, and use it confidently.`,
    steps: [
      {
        title: 'Find and open Google Wallet',
        content: `Look for the Google Wallet app on your Android phone (it has a white icon with a small "G" logo on a colorful card). If you don't see it, open the Google Play Store and search for "Google Wallet" to install it for free.`,
      },
      {
        title: 'Add a payment card',
        content: `Open Google Wallet and tap the "+" button or "Add to Wallet." Tap "Payment card." Either scan your card by pointing the camera at it, or enter the number manually. You'll need the expiration date and CVV security code. Your bank may send a one-time verification code to confirm.`,
        tip: `Quick Tip: Visa, Mastercard, American Express, and Discover cards from most major US banks work with Google Wallet. Some credit unions and small banks may not yet support it — check your bank's website.`,
      },
      {
        title: 'Set your default payment card',
        content: 'If you add more than one card, tap the card you want to use most often, then tap the three-dot menu and choose "Set as default." This card will be used automatically when you tap to pay.',
      },
      {
        title: 'Pay at a store',
        content: `At checkout, unlock your phone (it must be unlocked to pay). Hold the back of your phone near the store's payment terminal. You'll see or hear a confirmation, and a checkmark will appear on your screen. That's it — payment complete.`,
        warning: 'Your phone needs to be unlocked before a Google Wallet payment will go through. This protects you if your phone is lost or stolen.',
      },
      {
        title: 'Add loyalty cards and passes',
        content: 'Tap "+" in Google Wallet and choose "Loyalty card," "Gift card," or "Boarding pass." Search for the retailer or airline by name and follow the prompts. Many apps (Target, CVS, airlines) also have an "Add to Google Wallet" button that adds cards directly.',
      },
    ],
  },

  {
    slug: 'find-my-device-android',
    title: 'How to Find a Lost or Stolen Android Phone',
    excerpt: `Google's Find My Device can locate, lock, or remotely erase your Android phone if it goes missing. Learn how to set it up before you need it.`,
    category: 'safety-guides',
    tags: ['find my device', 'android', 'lost phone', 'stolen phone', 'google'],
    readTime: '5 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Losing your phone is stressful — and if it falls into the wrong hands, it's a serious privacy risk. Android phones have a built-in service called Find My Device that lets you locate your phone on a map, make it ring at full volume (even if it's on silent), lock it remotely, or erase it completely if you're certain it's gone for good.\n\nFind My Device works as long as your phone is on, connected to the internet (even on Wi-Fi), and signed into your Google account. The best time to set it up is right now, before anything happens. All you need is your Google account password and about two minutes.\n\nThis guide also covers what to do the moment you realize your phone is missing, so you can act quickly and protect your personal information.`,
    steps: [
      {
        title: 'Make sure Find My Device is turned on',
        content: `Open your phone's Settings app. Tap "Security" (or "Security & privacy" on some phones). Tap "Find My Device" and make sure the toggle is turned on (green or blue). Your phone also needs location services on — go to Settings > Location and make sure it's enabled.`,
        tip: 'Quick Tip: On Samsung Galaxy phones, this feature is called "Find My Mobile" and lives in Settings > Biometrics and Security > Find My Mobile.',
      },
      {
        title: 'Locate your phone from any browser',
        content: `From any computer or phone, go to android.com/find and sign in with the Google account on your missing phone. You'll see a map with your phone's last known location. The map updates every few minutes as long as the phone has internet.`,
      },
      {
        title: 'Make your phone ring',
        content: `On the Find My Device page, click or tap "Play sound." Your phone will ring at full volume for 5 minutes — even if it's on silent or vibrate. This is handy when you've simply misplaced it somewhere in your home.`,
      },
      {
        title: 'Lock your phone remotely',
        content: 'Click "Secure device" to lock your phone with your PIN, pattern, or password immediately. You can also display a custom message on the lock screen — like your email address — so an honest person who finds it can contact you.',
      },
      {
        title: 'Erase your phone as a last resort',
        content: `If you're certain the phone is stolen and won't be recovered, click "Erase device." This permanently deletes all data on the phone. Only do this as a last resort — after erasing, you can no longer track the phone's location.`,
        warning: `Erasing is permanent and cannot be undone. Make sure you've tried locating and locking first. A clean erase is the right choice if sensitive financial or personal information is at risk.`,
      },
    ],
  },

  {
    slug: 'set-up-new-windows-laptop',
    title: 'How to Set Up a Brand-New Windows Laptop Step by Step',
    excerpt: `Got a new Windows laptop? This step-by-step guide walks you through the first-time setup so you're ready to use it safely and comfortably.`,
    category: 'windows-guides',
    tags: ['windows', 'new laptop', 'setup', 'windows 11', 'first time'],
    readTime: '8 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Opening a brand-new Windows laptop is exciting — but the setup process can feel overwhelming if you've never done it before. The good news is that Windows 11 walks you through each step on-screen, and most choices are straightforward once you understand what's being asked.\n\nThis guide covers the full first-time setup from the moment you press the power button. We'll go through creating your account, connecting to Wi-Fi, setting up Microsoft features, and the first things to do once Windows is ready — including running updates and making sure your files will be backed up.\n\nPlan to spend about 20–30 minutes on the initial setup. You don't need any technical knowledge — just follow along and take your time with each screen.`,
    steps: [
      {
        title: 'Press power and follow the welcome screens',
        content: `Press the power button. Windows will load and show you a series of setup screens. Select your country/region (United States), your keyboard layout (US), and whether you want to connect to Wi-Fi right now. Connect to your home Wi-Fi — you'll need it to continue.`,
      },
      {
        title: 'Sign in with or create a Microsoft account',
        content: 'Windows 11 asks you to sign in with a Microsoft account (an email ending in @outlook.com, @hotmail.com, or @live.com). If you have one, enter it. If not, click "Create one" to make a free account. This account is tied to your Windows license, OneDrive storage, and other Microsoft services.',
        tip: `Quick Tip: If you already have an Outlook or Hotmail email, that's your Microsoft account. Use the same email and password.`,
      },
      {
        title: 'Set up your PIN',
        content: `After signing into your Microsoft account, Windows will ask you to create a PIN — a 4-6 digit number you'll use to log in each day instead of typing your full password. Make it something you'll remember but others won't guess. This is faster and safer than typing a password each time.`,
      },
      {
        title: 'Choose your privacy settings',
        content: `Windows asks several questions about sharing location, diagnostic data, and other settings. For most people, choosing "No" or turning these off is fine. The important one to keep on is "Find my device" — that helps locate your laptop if it's lost.`,
      },
      {
        title: 'Run Windows Update right away',
        content: 'Once setup is complete, click Start > Settings > Windows Update > "Check for updates." Your laptop may have been sitting in a warehouse for months. Installing all available updates takes 20–45 minutes but patches security holes and prevents many problems down the road.',
        warning: `Don't skip Windows updates on a new laptop. Security patches are included in these updates, and an unpatched laptop is far more vulnerable to viruses and hacking.`,
      },
      {
        title: 'Set up OneDrive for automatic backups',
        content: `OneDrive (Microsoft's cloud backup service) will likely prompt you to back up your Desktop, Documents, and Pictures folders. Accept this — it means your files are safe even if the laptop fails. Check that the cloud icon in your system tray is white or blue and not showing errors.`,
      },
    ],
  },

  {
    slug: 'recover-deleted-files-windows',
    title: 'How to Recover Accidentally Deleted Files on Windows',
    excerpt: `Deleted a file by mistake? Windows has a Recycle Bin and a File History backup feature. Here's how to get your files back.`,
    category: 'windows-guides',
    tags: ['recover files', 'recycle bin', 'deleted files', 'windows', 'file history'],
    readTime: '5 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Accidentally deleting a file is one of the most common computer mistakes — and one of the most fixable. Windows gives you several ways to recover deleted files depending on how and when they were deleted.\n\nThe fastest recovery is from the Recycle Bin. When you delete a file normally (pressing Delete or right-clicking and choosing Delete), Windows doesn't actually erase it — it moves it to the Recycle Bin where it sits until you empty it. As long as you haven't emptied the Recycle Bin, you can restore the file in seconds.\n\nIf the Recycle Bin has been emptied, there's still hope. Windows has a feature called File History (if you've set it up) that keeps older versions of your files. OneDrive also keeps deleted files for 30 days. This guide walks through all your options.`,
    steps: [
      {
        title: 'Check the Recycle Bin first',
        content: 'Look for the Recycle Bin icon on your desktop (it looks like a trash can). Double-click to open it. If you see your deleted file, right-click it and choose "Restore." The file will go back to its original location instantly. If the Recycle Bin is empty, move to the next step.',
      },
      {
        title: 'Use Ctrl+Z to undo immediately',
        content: 'If you just deleted the file moments ago, press Ctrl+Z (hold Ctrl and press Z). This "undo" shortcut works in File Explorer and can instantly reverse a deletion before the file even reaches the Recycle Bin.',
        tip: 'Quick Tip: Ctrl+Z works for many mistakes beyond deletions — typing errors, moved files, renamed folders — and is one of the most useful keyboard shortcuts to know.',
      },
      {
        title: 'Check OneDrive if the file was in your OneDrive folder',
        content: 'If the deleted file was stored in your OneDrive folder, go to onedrive.live.com in your browser and sign in. On the left side, click "Recycle bin." OneDrive keeps deleted files for 30 days. Find your file, check the box next to it, and click "Restore."',
      },
      {
        title: 'Use File History to restore older versions',
        content: 'If you had File History set up (Windows > Settings > Update & Security > Backup), navigate to the folder where the file used to be. Right-click the folder and choose "Restore previous versions." A list of saved snapshots will appear. Find one from before the deletion and click Restore.',
        warning: `File History only works if you set it up before the deletion happened. If you haven't turned it on, consider setting it up today so you're protected in the future.`,
      },
      {
        title: 'Use Windows File Recovery for permanently deleted files',
        content: `If none of the above worked, Microsoft offers a free tool called Windows File Recovery from the Microsoft Store. It's a command-line tool (more advanced) that scans your drive for recoverable data. Search "Windows File Recovery" in the Microsoft Store to install it.`,
      },
    ],
  },

  {
    slug: 'recover-deleted-files-mac',
    title: 'How to Recover Deleted Files on a Mac',
    excerpt: 'Deleted something important on your Mac? The Trash, iCloud Drive, and Time Machine backup can all help you get it back.',
    category: 'mac-guides',
    tags: ['mac', 'recover files', 'trash', 'time machine', 'deleted files'],
    readTime: '5 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `On a Mac, when you delete a file it doesn't disappear right away — it goes to the Trash, which works like a holding area. The file stays there until you choose to permanently empty the Trash. As long as you haven't done that, getting your file back is a matter of seconds.\n\nIf you have emptied the Trash or the file was stored in iCloud Drive, don't panic — there are still options. iCloud Drive keeps deleted files for 30 days, and if you've been using Time Machine (Apple's built-in backup system), you may be able to retrieve the exact version of a file you need.\n\nThis guide walks you through all three methods so you can recover what you lost quickly and confidently.`,
    steps: [
      {
        title: 'Look in the Trash',
        content: 'Click the Trash icon in your Dock (it looks like a metal trash can). Browse through the items there. When you find your file, right-click it and choose "Put Back." This moves it back to its original folder as if nothing happened.',
        tip: 'Quick Tip: You can search inside the Trash using the search bar at the top right of the Trash window. Type the file name or part of it.',
      },
      {
        title: 'Use Command+Z to undo an accidental deletion',
        content: 'If you deleted the file just moments ago, press Command+Z (hold the Command key and press Z). This undo shortcut works on the Mac desktop and in Finder and can reverse a deletion instantly.',
      },
      {
        title: `Check iCloud Drive's Recently Deleted`,
        content: 'If the file was in your iCloud Drive, go to iCloud.com in your browser and sign in. Click the Drive icon, then look at the bottom of the left sidebar for "Recently Deleted." Files deleted within the last 30 days appear here. Click the file and choose "Recover."',
      },
      {
        title: 'Restore from Time Machine backup',
        content: 'If you have a Time Machine backup drive plugged in, open the folder where your file used to be. Then click the Time Machine icon in your menu bar (a clock with a circular arrow) and choose "Enter Time Machine." Use the timeline on the right to go back to a date before the file was deleted. Find the file and click Restore.',
        warning: `Time Machine only helps if you've been regularly connecting a backup drive to your Mac. If you haven't set this up, consider buying an external hard drive and turning on Time Machine in System Settings > General > Time Machine.`,
      },
      {
        title: 'What if nothing worked?',
        content: `If your file is permanently gone and you have no backup, there are professional data recovery services that can sometimes retrieve files from a hard drive. These services can be expensive ($300–$1,500), so they're best reserved for truly irreplaceable files like family photos. Apple Support (apple.com/support) can help you find authorized recovery partners.`,
      },
    ],
  },

  {
    slug: 'malware-removal-windows',
    title: 'How to Remove Malware or a Virus from a Windows Computer',
    excerpt: `If your Windows PC is acting strange — slow, covered in pop-ups, or showing fake warnings — it may have malware. Here's how to check and clean it.`,
    category: 'safety-guides',
    tags: ['malware', 'virus', 'windows', 'security', 'windows defender', 'malwarebytes'],
    readTime: '7 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Malware is software that sneaks onto your computer and does harmful things — it might slow your PC to a crawl, show endless pop-up ads, lock your files, steal passwords, or display fake scary warnings saying your computer has been hacked. Ransomware is a particularly nasty type that locks your files and demands payment.\n\nThe most common ways people get malware on Windows: clicking a link in a fake email (phishing), downloading a program from an unofficial website, clicking a fake "Your computer is infected!" pop-up, or installing software bundled with other programs.\n\nThe good news: Windows 11 comes with Windows Defender, a solid built-in security tool that can find and remove most common threats. There's also a free tool called Malwarebytes that catches things Defender misses. Together, these two tools handle the vast majority of malware infections.`,
    steps: [
      {
        title: 'Disconnect from the internet first (if symptoms are severe)',
        content: 'If your computer is actively showing fake warnings, running very slowly, or doing things on its own, disconnect from Wi-Fi first by clicking the Wi-Fi icon and choosing Disconnect. This prevents malware from sending your information out or downloading more malicious files.',
      },
      {
        title: 'Run a Windows Defender scan',
        content: 'Click Start and type "Windows Security." Open it and click "Virus & threat protection." Click "Scan options," choose "Full scan," and click "Scan now." A full scan takes 30–60 minutes. If Windows Defender finds anything, it will show you options to Remove or Quarantine the threat — choose Remove.',
        tip: 'Quick Tip: The "Quick scan" checks the most common locations in just a few minutes, but "Full scan" is more thorough for suspected infections.',
      },
      {
        title: 'Run Malwarebytes for a second opinion',
        content: 'Go to malwarebytes.com and download the free version of Malwarebytes. Install it and run a "Threat Scan." The free version is excellent for finding and removing malware that Defender may have missed. After scanning, quarantine or delete anything it finds.',
      },
      {
        title: 'Remove suspicious programs',
        content: `Click Start > Settings > Apps. Scroll through the list and look for programs you don't recognize or didn't intentionally install — especially anything with names like "PC Optimizer," "Search Helper," "Browser Guard," or similar vague names. Click on any suspicious entry and choose Uninstall.`,
        warning: `Don't uninstall programs you're unsure about if they look like system tools (Dell, HP, Intel, Microsoft branded items). Only remove clearly unfamiliar or suspicious names.`,
      },
      {
        title: 'Change your passwords after cleanup',
        content: 'If your computer had malware, assume any passwords you typed while infected may have been captured. After cleaning the computer, change your email password, bank login, and any other important account passwords from a different, clean device if possible.',
      },
      {
        title: 'Prevent future infections',
        content: `Keep Windows Defender on at all times. Never download software from email attachments or unofficial websites. Be wary of pop-ups claiming your computer is infected — legitimate security software doesn't use pop-ups from your browser to alert you. Microsoft and Apple will never call you unsolicited about a virus.`,
      },
    ],
  },

  {
    slug: 'alexa-guard-home-security',
    title: 'How to Use Alexa Guard to Monitor Your Home',
    excerpt: `Alexa Guard uses your Echo speaker to listen for smoke alarms, CO detectors, breaking glass, and suspicious activity while you're away.`,
    category: 'smart-home',
    tags: ['alexa', 'amazon echo', 'home security', 'alexa guard', 'smart home'],
    readTime: '5 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Alexa Guard is a free feature built into Amazon Echo speakers that turns your Alexa device into a simple home security monitor. When you tell Alexa you're leaving home, Guard activates and your Echo will listen for specific sounds: smoke or carbon monoxide alarms going off, the sound of glass breaking, or general activity in the house.\n\nIf something is detected, Alexa sends a Smart Alert to your phone — a notification telling you what was heard and when. This doesn't replace a professional security system, but it adds a free extra layer of awareness, especially if you live alone or leave your home unattended for extended periods.\n\nAlexa Guard Plus is an upgraded paid version with more features, but the free version is genuinely useful and requires nothing beyond your existing Echo device and the Alexa app on your phone.`,
    steps: [
      {
        title: 'Set up Alexa Guard in the Alexa app',
        content: `Open the Alexa app on your phone. Tap the "More" tab (three horizontal lines) at the bottom right. Tap "Guard." If you haven't set it up, you'll see a "Set Up Guard" button — tap it and follow the prompts. Select which Echo devices in your home you want Guard to use.`,
      },
      {
        title: 'Activate Guard when you leave',
        content: `When you're heading out, say "Alexa, I'm leaving." Alexa will confirm that Guard is active. Alternatively, you can open the Alexa app and tap the shield icon at the top to switch to "Away" mode.`,
        tip: 'Quick Tip: You can also set Guard to activate automatically at certain times or when your phone leaves the area — look for these options in the Guard settings.',
      },
      {
        title: 'Understand what Alexa Guard detects',
        content: 'In Away mode, Guard listens for: smoke alarm beeping, carbon monoxide detector beeping, the sound of glass breaking. If detected, Alexa sends a Smart Alert to your phone with a short audio clip so you can hear what triggered the alert.',
      },
      {
        title: 'Deactivate Guard when you return',
        content: `When you get home, say "Alexa, I'm home." Guard deactivates and Alexa returns to normal listening mode. Or open the Alexa app and switch Guard back to "Home" mode manually.`,
      },
      {
        title: 'Review Guard Plus for additional features',
        content: `Guard Plus ($4.99/month) adds features like an emergency helpline, the ability to play sounds that make your home seem occupied while you're away, and professional monitoring partnerships. The free version is sufficient for basic sound detection and most households.`,
      },
    ],
  },

  {
    slug: 'iphone-wont-charge-fix',
    title: `What to Do When Your iPhone Won't Charge`,
    excerpt: `If your iPhone isn't charging, there are several common causes — most of which you can fix yourself in minutes without going to a store.`,
    category: 'phone-guides',
    tags: ['iphone', 'charging', 'troubleshoot', 'lightning', 'USB-C', 'battery'],
    readTime: '6 min',
    thumbnailEmoji: '🔌',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your iPhone isn't charging — the battery icon isn't changing, or the charging symbol isn't appearing. Before you head to the Apple Store, there's a good chance you can solve this yourself. Most charging issues come from one of just a few causes: a dirty charging port, a cable that's worn out, a power brick that stopped working, or a minor software glitch.\n\nThis guide walks through each possible cause in order, from the most common (and most fixable) to the least common. Work through the steps in order and you'll likely find the problem quickly. If you reach the end and nothing has helped, that's when it makes sense to contact Apple Support.`,
    steps: [
      {
        title: 'Clean the charging port gently',
        content: 'Lint, dust, and pocket debris collect in the small charging port at the bottom of your iPhone over time — and even a thin layer of lint can prevent a good connection. Shine a flashlight into the port. If you see anything inside, use a wooden toothpick (not metal) to very gently loosen and remove debris. Never use water or compressed air directly into the port.',
        tip: 'Quick Tip: Lint in the charging port is the most common reason iPhones stop charging — and cleaning it out is free and often works immediately.',
      },
      {
        title: 'Try a different cable',
        content: 'Charging cables wear out, especially near the connector ends. If you have another Lightning cable (older iPhones) or USB-C cable (iPhone 15 and newer), try it. Use an Apple-brand or MFi-certified (Made for iPhone) cable. Cheap uncertified cables often stop working after just a few months.',
      },
      {
        title: 'Try a different power adapter or outlet',
        content: `Plug the cable into a different USB charging adapter or wall outlet. The power brick itself may have failed. You can also try plugging into a computer's USB port to see if the iPhone charges that way.`,
      },
      {
        title: 'Restart your iPhone',
        content: 'Sometimes a software issue prevents charging from registering. Restart your iPhone: hold the side button and either volume button until the slider appears, then slide to power off. Wait 30 seconds, turn it back on, then plug in the charger again.',
      },
      {
        title: 'Let a deeply drained battery recover',
        content: 'If your iPhone battery is completely drained, it may need 10–15 minutes of charging before the screen will turn on at all. Plug it in, leave it alone, and come back in 15 minutes. You should then see the low-battery charging indicator.',
      },
      {
        title: 'Contact Apple Support if nothing worked',
        content: `If you've tried everything above and the iPhone still won't charge, the issue may be hardware — a damaged charging port or a battery that needs replacement. Go to apple.com/support to chat, schedule an appointment at an Apple Store or Apple Authorized Service Provider, or call 1-800-275-2273.`,
      },
    ],
  },

  {
    slug: 'android-wont-charge-fix',
    title: `What to Do When Your Android Phone Won't Charge`,
    excerpt: 'Android phone not charging? Walk through these common fixes — most charging problems can be solved at home without visiting a repair shop.',
    category: 'phone-guides',
    tags: ['android', 'charging', 'troubleshoot', 'USB-C', 'battery', 'samsung'],
    readTime: '6 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `When your Android phone stops charging, it's easy to assume the worst — but most of the time, the problem is something small and fixable. Common culprits include lint clogging the charging port, a frayed cable, a failing power adapter, or a minor software issue.\n\nThis guide takes you through the most common fixes in order of likelihood. Try each step before moving to the next. The majority of charging issues are resolved with the first two or three steps — a clean port and a working cable. Take a deep breath and let's work through it together.`,
    steps: [
      {
        title: 'Clean the charging port',
        content: 'The USB-C port at the bottom of your phone collects lint and debris from pockets and bags. Shine a flashlight inside — if you see anything fluffy or gray, use a wooden toothpick to carefully loosen and remove it. Work gently. Even a small amount of lint can prevent the connector from seating fully.',
        tip: `Quick Tip: This is the fix for at least half of all "won't charge" problems. It takes 60 seconds and costs nothing.`,
      },
      {
        title: 'Switch to a different cable',
        content: `USB-C cables fray and fail, especially at the ends. Try a different cable — ideally one you know is working, like the one that came in the box. Avoid very cheap cables from dollar stores; they often fail quickly and can damage your phone's charging port over time.`,
      },
      {
        title: 'Test a different power adapter and outlet',
        content: 'Plug your cable into a different charging brick or a USB port on a computer. The wall adapter itself may have burned out. Also try a different outlet in case the socket is faulty.',
      },
      {
        title: 'Restart the phone',
        content: 'Hold the power button until the restart/power off menu appears, then tap Restart. After it starts back up, plug in the charger. Some Android firmware glitches cause the phone to not register charging until a restart clears them.',
      },
      {
        title: 'Check for USB-C debris or bent pins',
        content: 'Shine a bright light and look carefully inside the port. The USB-C port has a small oval-shaped connector with tiny pins on both sides. If the pins look bent or the oval insert looks off-center, the port may be physically damaged and will need professional repair.',
      },
      {
        title: 'Contact your manufacturer or visit a repair shop',
        content: `Samsung Galaxy users can visit a Samsung Experience Store or authorized repair location, or call 1-800-726-7864. For other Android brands, check the manufacturer's website or visit uBreakiFix, a national repair chain that handles most Android phones.`,
      },
    ],
  },

  {
    slug: 'free-low-cost-internet-seniors',
    title: 'How to Get Free or Low-Cost Home Internet Service',
    excerpt: `Several government programs and ISP discounts offer free or low-cost home internet to qualifying households. Here's what's available and how to apply.`,
    category: 'life-transitions',
    tags: ['low income internet', 'free internet', 'ACP', 'Lifeline', 'broadband', 'senior discount'],
    readTime: '6 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Home internet doesn't have to be expensive. Several programs exist specifically to help people with limited incomes — including seniors on fixed incomes — get affordable or even free broadband service. These programs are funded by the federal government and individual internet providers.\n\nThe main programs to know about are the Lifeline program (a long-standing FCC program offering $9.25/month off internet or phone service) and various state and local programs that filled the gap left by the expiration of the Affordable Connectivity Program in 2024. Many internet providers also offer senior-specific discount plans that aren't widely advertised.\n\nThis guide explains the current options, what you need to qualify, and how to sign up. If you're paying more than $30/month for home internet and your household income is limited, you may qualify for significant savings.`,
    steps: [
      {
        title: 'Check if you qualify for Lifeline',
        content: `The FCC's Lifeline program offers $9.25/month off phone or internet service if your income is at or below 135% of the federal poverty guidelines, or if you participate in programs like Medicaid, SNAP, SSI, Federal Public Housing, or the Veterans Pension and Survivors Benefit. Go to lifelinesupport.org to check eligibility and find participating providers in your area.`,
        tip: `Quick Tip: If you're on Medicaid, SSI, or SNAP, you automatically qualify for Lifeline — you don't need to check income separately.`,
      },
      {
        title: 'Ask your internet provider about low-income programs',
        content: 'Call or visit the website of your current or a local internet provider and ask specifically about: senior discounts, low-income programs, or income-based plans. Comcast offers "Internet Essentials" (~$10/month for qualifying households). AT&T has "Access" plans. Spectrum has "Internet Assist." Cox offers "Connect2Compete." These programs are not advertised much, but they exist.',
      },
      {
        title: 'Search for state-specific programs',
        content: `Many states have their own broadband assistance programs. Go to your state government's website (search "[your state] affordable broadband program") or visit broadbandnow.com/low-income-internet for a state-by-state guide to available programs.`,
      },
      {
        title: 'Consider mobile hotspot plans as an alternative',
        content: 'If you only use the internet lightly — for email, video calls, and light browsing — a prepaid mobile hotspot or phone plan may cost less than home broadband. Carriers like Consumer Cellular, Mint Mobile, and Visible offer low-cost plans starting around $15–$25/month that include data usable as a hotspot.',
      },
      {
        title: 'Get help applying',
        content: 'If you need help navigating the applications, your local library, Area Agency on Aging, or senior center can often help. AARP also has resources at aarp.org/home-family/personal-technology on finding affordable internet. Many local libraries also offer free Wi-Fi you can use inside the building.',
      },
    ],
  },

  {
    slug: 'block-phone-number-guide',
    title: 'How to Block a Phone Number on iPhone and Android',
    excerpt: `Getting calls from someone you don't want to hear from? Learn how to block any phone number on iPhone and Android in under a minute.`,
    category: 'essential-skills',
    tags: ['block number', 'spam calls', 'iphone', 'android', 'unwanted calls'],
    readTime: '4 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Blocking a phone number is one of the most useful things you can do on a smartphone — and it only takes about 30 seconds once you know where to look. When you block a number, calls from that number go straight to voicemail (they don't ring your phone), text messages are silently filtered, and the blocked caller gets no notification that they've been blocked.\n\nBlocking is useful for stopping unwanted sales calls, silencing an ex, dealing with wrong numbers that keep calling, or shutting down harassment. It doesn't cost anything and it's completely reversible — you can unblock a number anytime in the same settings menu.\n\nThis guide covers blocking on both iPhone and Android, plus a bonus tip for silencing calls from all unknown numbers at once.`,
    steps: [
      {
        title: 'Block a number on iPhone (from recent calls)',
        content: 'Open the Phone app and tap "Recents." Find the number you want to block and tap the blue info circle (ⓘ) to the right of it. Scroll to the bottom and tap "Block this Caller." Confirm by tapping "Block Contact." Done — calls from that number go straight to voicemail.',
      },
      {
        title: 'Block a number on iPhone (from a text)',
        content: 'Open the Messages app and open the conversation with the person you want to block. Tap their name or number at the top of the screen. Tap "Info," then scroll down and tap "Block this Caller." Confirm by tapping "Block Contact."',
      },
      {
        title: 'Block a number on Android (from recent calls)',
        content: 'Open the Phone app and tap "Recents" or "Call history." Tap the number you want to block. Tap the three-dot menu (⋮) in the top right corner and choose "Block number" or "Block/report spam." Confirm. The process is the same across most Android phones, though menu labels vary slightly.',
        tip: 'Quick Tip: On Samsung Galaxy phones, open the Phone app > Recents, long-press the number, and choose "Block number."',
      },
      {
        title: 'Block a number on Android (from a text)',
        content: 'Open the Messages app and open the conversation. Tap the three-dot menu (⋮) and choose "Block number" or "Block & report spam." Confirm. Texts from that number will no longer appear in your message list.',
      },
      {
        title: 'Silence all unknown callers at once',
        content: `If you're getting many unwanted calls from different numbers: On iPhone, go to Settings > Phone > Silence Unknown Callers and turn it on. Calls from numbers not in your contacts go straight to voicemail. On Android, open the Phone app > Settings (three dots) > Blocked numbers > turn on "Block calls from unidentified callers."`,
        tip: 'Quick Tip: The "Silence Unknown Callers" feature is especially useful for seniors who frequently receive scam calls from new numbers. Legitimate callers will leave a voicemail.',
      },
    ],
  },

  {
    slug: 'samsung-pay-how-to-use',
    title: 'How to Use Samsung Pay to Pay with Your Galaxy Phone',
    excerpt: `Samsung Pay lets Galaxy phone users pay at almost any store checkout by tapping their phone — even at terminals that don't have tap-to-pay.`,
    category: 'financial-tech',
    tags: ['samsung pay', 'samsung galaxy', 'tap to pay', 'digital wallet', 'contactless payment'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Samsung Pay is a payment app available on Samsung Galaxy phones that lets you pay at store checkouts by tapping your phone. It works much like Google Pay, but Samsung Pay has a special advantage: it uses both NFC (the standard tap-to-pay technology) and a technology called MST that mimics a magnetic stripe card swipe. This means Samsung Pay works at virtually any card terminal — even older terminals that can't accept tap payments.\n\nSetting up Samsung Pay takes about five minutes and requires your Samsung account and a participating debit or credit card. Once set up, you can leave most of your physical cards at home and pay with your phone at grocery stores, pharmacies, restaurants, and more.\n\nNote: Samsung Pay was rebranded as Samsung Wallet in 2022 on newer Galaxy phones, but the payment functionality is the same. This guide covers both versions.`,
    steps: [
      {
        title: 'Open Samsung Pay or Samsung Wallet',
        content: `Look for the Samsung Pay or Samsung Wallet app on your Galaxy phone. If you don't have it, search in the Galaxy Store or Google Play Store. Sign in with your Samsung account (the same one you use for your Samsung phone setup).`,
      },
      {
        title: 'Add a card',
        content: `Tap the "+" button or "Add card." Point your camera at your credit or debit card to scan it, or enter the card details manually. You'll need the card number, expiration date, and security code. Your bank will send a verification code to confirm it's you.`,
        tip: 'Quick Tip: Most Visa, Mastercard, American Express, and Discover cards issued by major US banks work with Samsung Pay.',
      },
      {
        title: 'Set up your fingerprint or PIN for security',
        content: `Samsung Pay requires fingerprint verification, iris scan, or PIN before each payment. If you haven't already, set up your fingerprint in Settings > Biometrics and security > Fingerprints. Using your fingerprint is faster than typing a PIN.`,
      },
      {
        title: 'Pay at a store',
        content: `At checkout, swipe up from the bottom of your screen (even from the lock screen) to open Samsung Pay. Or open the Samsung Pay/Wallet app. Select the card you want to use. When ready, hold the back of your phone near (or against) the card reader terminal. Verify with fingerprint or PIN. You'll see a payment confirmed screen.`,
      },
      {
        title: 'Check your payment history',
        content: 'Open Samsung Pay/Wallet and tap the card you used to see a recent transaction history. This lets you quickly confirm a payment went through or spot any unexpected charges.',
        tip: `Quick Tip: Samsung Pay transactions still appear on your regular credit or debit card statement — Samsung Pay doesn't create a separate account or bill.`,
      },
    ],
  },

  {
    slug: 'video-call-on-smart-tv',
    title: 'How to Make Video Calls on a Smart TV',
    excerpt: `Some smart TVs let you video chat with family right on the big screen. Here's how to set it up on Google TV, Amazon Fire TV, and Facebook Portal TV.`,
    category: 'communication',
    tags: ['video call', 'smart tv', 'google tv', 'amazon fire tv', 'facebook portal', 'family video chat'],
    readTime: '6 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Video calling on a big TV screen is a wonderful experience — seeing your grandchildren or family members on a large display feels much more like being in the same room than squinting at a small phone screen. Several modern smart TVs and streaming devices now support video calling, and with the right setup it's easier than you might think.\n\nThe options depend on what TV or streaming device you have. Google TV (built into some Sony, TCL, and Hisense TVs, plus Chromecast with Google TV) supports Google Duo/Meet calls. Amazon Fire TV supports Alexa video calls if you have an Echo Show or an external camera. Facebook Portal TV is a dedicated device that turns any TV into a video calling screen.\n\nThis guide covers the main options so you can pick the one that matches what you already have.`,
    steps: [
      {
        title: 'Check if your TV already supports video calls',
        content: `On your TV's home screen or app menu, look for: Google Meet, Google Duo, Zoom, Amazon Alexa Calling, or Facebook. Some newer smart TVs have these pre-installed. If you see one, you're already most of the way there — you just need a camera.`,
      },
      {
        title: 'Option 1 — Use Google Meet on Google TV',
        content: 'If your TV has Google TV (many Sony, TCL, and Hisense TVs, plus Chromecast with Google TV), install a compatible webcam with a USB port or a Google Meet-compatible camera. Open Google Meet from the app list. Sign in with your Google account. You can call anyone with a Gmail address or phone number.',
        tip: 'Quick Tip: The Logitech C920 or similar USB webcam works with most Google TV devices for video calling.',
      },
      {
        title: 'Option 2 — Use Alexa Calling on Amazon Fire TV',
        content: `On Amazon Fire TV, open the Alexa app on your phone, go to Communicate tab, and set up Alexa Calling. Then on your Fire TV, use the Alexa voice button on your remote and say "Call [contact name]." You'll need a compatible camera (Amazon sells several for Fire TV) or you can call to an Echo Show device another family member has.`,
      },
      {
        title: 'Option 3 — Facebook Portal TV',
        content: `Facebook Portal TV ($99–$149 at Amazon or Meta.com) is a device that plugs into your TV's HDMI port and adds a camera and microphone. It supports Facebook Messenger video calls, WhatsApp video calls, and Zoom. Setup takes about 10 minutes and just requires a Facebook or WhatsApp account. The camera automatically tracks your face as you move around the room.`,
      },
      {
        title: 'Option 4 — Use a laptop or tablet on the TV',
        content: 'If your TV has an HDMI port, you can connect a laptop via HDMI cable and use Zoom, FaceTime (Mac), or Google Meet on the laptop while it displays on the TV screen. This works with any TV and requires no special apps on the TV itself.',
        tip: 'Quick Tip: This is the most flexible option — your laptop does the video calling and the TV just acts as a big monitor.',
      },
    ],
  },

  {
    slug: 'icloud-photos-explained',
    title: 'How iCloud Photos Works and How to Manage Your Storage',
    excerpt: `iCloud Photos keeps all your iPhone photos backed up and synced across your Apple devices — but it can fill up your iCloud storage. Here's how it works and how to manage it.`,
    category: 'phone-guides',
    tags: ['icloud photos', 'iphone', 'photo backup', 'icloud storage', 'apple'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `iCloud Photos is Apple's service that automatically backs up every photo and video you take on your iPhone, iPad, or Mac to the cloud — and then makes those photos available on all your Apple devices. If you take a photo on your iPhone, it appears on your iPad and Mac a few minutes later. If your phone is lost or broken, your photos are safe online.\n\nThe confusion for many people comes from storage. Apple gives you 5 GB of iCloud storage for free, and photos can fill that up quickly. When you run out of space, you start seeing warnings and new photos stop backing up. This guide explains how iCloud Photos works, what to do about the storage warning, and how to make sure your photos are safe.`,
    steps: [
      {
        title: 'Turn on iCloud Photos',
        content: 'Go to Settings on your iPhone. Tap your name at the top, then "iCloud," then "Photos." Make sure "Sync this iPhone" (or "iCloud Photos" on older iOS) is turned on. Once enabled, your iPhone will start uploading all photos to iCloud over Wi-Fi.',
        tip: 'Quick Tip: Photos upload only over Wi-Fi by default (not cellular data), so leave your phone plugged in and on Wi-Fi at night to speed up the initial upload.',
      },
      {
        title: 'Understand the difference between iCloud and your phone storage',
        content: 'iCloud Photos stores full-resolution versions in the cloud. To save space on your phone, turn on "Optimize iPhone Storage" (in the same settings screen). With this on, your phone keeps smaller preview versions locally, and the full-size original downloads only when you open a photo. You can still see and share all your photos — they just live in the cloud.',
      },
      {
        title: `Check how much iCloud storage you're using`,
        content: `Go to Settings > [your name] > iCloud > Manage Account Storage. This shows how much of your iCloud storage is used and what's using it. If photos are the main item, you're using iCloud Photos normally.`,
      },
      {
        title: 'Upgrade iCloud storage if needed',
        content: 'If you see a "Your iCloud storage is almost full" warning, you can upgrade your plan in the Manage Storage screen. Current prices: iCloud+ 50 GB costs $0.99/month, 200 GB costs $2.99/month, 2 TB costs $9.99/month. For most people, 50 GB is plenty for photos and backups.',
      },
      {
        title: 'Free up space by deleting unwanted photos',
        content: `Open the Photos app, tap Albums, then "Recently Deleted." These are photos you've deleted but which are being held for 30 days. Tap "Delete All" to permanently remove them and immediately free up iCloud storage. Also scroll through your main library and delete any duplicates, blurry shots, or screenshots you no longer need.`,
      },
    ],
  },

  {
    slug: 'microsoft-365-getting-started',
    title: 'How to Get Started with Microsoft 365 (Word, Excel, and More)',
    excerpt: `Microsoft 365 includes Word, Excel, PowerPoint, and Outlook — tools for writing, spreadsheets, and email. Here's how to access and start using them.`,
    category: 'windows-guides',
    tags: ['microsoft 365', 'microsoft office', 'word', 'excel', 'outlook', 'powerpoint'],
    readTime: '6 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Microsoft 365 (formerly called Microsoft Office) is a collection of apps that Microsoft has offered for decades — Word for writing documents, Excel for spreadsheets, PowerPoint for presentations, and Outlook for email. Millions of people use these at work and at home. You've almost certainly encountered a Word document or an Excel spreadsheet at some point.\n\nMicrosoft 365 used to require buying a boxed disc for $150 or more, but now it's a subscription service. There are also free options — Microsoft offers free web-based versions of Word, Excel, and PowerPoint at office.com that you can use in any browser with no payment required.\n\nThis guide explains your options, how to access the free versions online, and how to get started using the most important tools — especially Word for writing letters and documents.`,
    steps: [
      {
        title: 'Try the free web versions first',
        content: 'Go to office.com in your browser and sign in with your free Microsoft account (or create one). From there, you can open Word, Excel, and PowerPoint online — directly in your browser, with no download or payment needed. These online versions are great for basic tasks and save your work automatically to OneDrive.',
        tip: 'Quick Tip: If you already use Windows, you likely have a Microsoft account. Sign into office.com with the same email and password you use for your PC.',
      },
      {
        title: 'Understand subscription options if you need more',
        content: 'The free web versions have some limitations — fewer formatting options, no macros, etc. If you need the full desktop apps, Microsoft 365 Personal costs about $70/year (or $6.99/month) and includes the full versions of Word, Excel, PowerPoint, Outlook, and 1 TB of OneDrive storage. Microsoft 365 Family covers up to 6 people for $100/year.',
      },
      {
        title: 'Create your first document in Word',
        content: `At office.com, click "Word." Click "New blank document." You'll see a white page with a blinking cursor — start typing. Use the toolbar at the top to change font size (make it larger if you prefer bigger text — 14 or 16 is more comfortable than the default 11), bold or italic text, and alignment.`,
        tip: `Quick Tip: Press Ctrl+S (or Command+S on Mac) to save your document. If you're using the online version, it saves automatically to OneDrive.`,
      },
      {
        title: 'Save and find your documents',
        content: 'In the online version, your documents save automatically to OneDrive. Click the document title at the top to rename it. To find documents later, go to office.com, click "Word," and look at the "Recent" list on the left side. Or go to onedrive.live.com to see all saved files.',
      },
      {
        title: 'Get help inside any Office app',
        content: 'Every Microsoft 365 app has a built-in Help feature. Press the F1 key, or go to Help > Show Help (in the menu bar). You can type any question in plain English — "How do I make text bigger?" or "How do I print this?" — and get step-by-step instructions.',
      },
    ],
  },

  {
    slug: 'google-photos-auto-backup',
    title: 'How to Set Up Automatic Photo Backup with Google Photos',
    excerpt: `Google Photos can back up every photo and video on your phone automatically so they're safe even if your phone is lost or broken.`,
    category: 'app-guides',
    tags: ['google photos', 'photo backup', 'android', 'iphone', 'cloud storage', 'automatic backup'],
    readTime: '5 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Losing your phone is bad. Losing all the photos on it is heartbreaking. Google Photos solves this by automatically backing up every photo and video you take to the cloud — so if your phone is lost, stolen, broken, or replaced, every photo is still there waiting for you on any device you sign into.\n\nGoogle Photos offers 15 GB of free storage, shared across your Google account. For most people, that's enough to hold thousands of photos. If you need more, Google One storage plans start at $1.99/month for 100 GB.\n\nOnce you set up automatic backup, you never need to think about it again. Your photos go from your camera to the cloud in the background, usually within minutes over Wi-Fi. This guide gets you set up in about five minutes.`,
    steps: [
      {
        title: 'Download Google Photos if needed',
        content: `Google Photos is pre-installed on most Android phones. If you don't have it, search "Google Photos" in the Google Play Store or Apple App Store and install it for free. Sign in with your Google account (Gmail) when it opens.`,
      },
      {
        title: 'Turn on Backup',
        content: 'Open the Google Photos app. Tap your profile picture (circle with your initial or photo) in the top right corner. Tap "Photos settings," then "Backup." Make sure "Backup" is toggled on. Google Photos will start uploading your existing photos and will continue automatically for every new photo you take.',
        tip: `Quick Tip: The backup status is shown at the top of the Photos app. A green checkmark means everything is backed up. A cloud with a loading bar means it's still uploading.`,
      },
      {
        title: 'Choose your storage quality',
        content: `Google Photos asks which quality to use. "Storage saver" compresses photos very slightly — you probably won't notice the difference — and doesn't count against your 15 GB limit. "Original quality" keeps photos at full resolution but counts toward storage. For most people, Storage saver is the better choice.`,
      },
      {
        title: 'Set backup to use Wi-Fi only',
        content: `In the same Backup settings, look for "Back up over mobile data/cellular" and make sure it's turned off unless you have an unlimited data plan. This way, uploads happen over Wi-Fi and won't eat into your monthly phone data.`,
      },
      {
        title: 'Access your photos from any device',
        content: 'Go to photos.google.com on any computer or open the Google Photos app on any phone. Sign in with your Google account and all your backed-up photos will be there. You can view, download, share, or print them.',
        tip: 'Quick Tip: Google Photos automatically groups photos by date, place, and people, making it easy to find photos from a specific trip, holiday, or year.',
      },
    ],
  },

  {
    slug: 'aarp-tech-member-benefits',
    title: 'AARP Tech Discounts and Digital Benefits for Members',
    excerpt: 'Your AARP membership includes tech discounts, free digital tools, and resources you may not know about — from antivirus software to technology training.',
    category: 'life-transitions',
    tags: ['AARP', 'member benefits', 'senior discounts', 'tech deals', 'technology help'],
    readTime: '5 min',
    thumbnailEmoji: '🎫',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `AARP membership (available to anyone 50 and over, about $16/year) comes with a surprising range of technology-related benefits that many members never take advantage of. Beyond the well-known discounts on hotels, restaurants, and prescriptions, AARP offers deals on tech products and services, free technology training resources, and access to advocacy work that protects older adults from digital fraud.\n\nThis guide covers the tech-specific benefits worth knowing about and where to find them. Whether you want a discounted antivirus subscription, free help learning a new skill, or resources for protecting yourself from online scams, AARP has something useful.`,
    steps: [
      {
        title: 'Log into your AARP account to see your benefits',
        content: 'Go to aarp.org and sign in with your AARP account (if you have one) or create one linked to your membership number. Once signed in, go to "Member Benefits" to see the full current list. Benefits change and are updated periodically.',
        tip: 'Quick Tip: AARP benefits include discounts from major retailers like Best Buy and Sprint/T-Mobile, which can save real money on tech purchases and phone plans.',
      },
      {
        title: 'Look for antivirus and security software discounts',
        content: 'AARP has negotiated discounts with security software companies including Norton, McAfee, and others. Check the "Electronics & Technology" section of your member benefits to see current offers. These are often 40–60% off first-year subscriptions.',
      },
      {
        title: `Explore AARP's free technology training`,
        content: 'Go to aarp.org/technology and look for "Tech Resources" or "AARP Technology Education." AARP offers free online workshops, video tutorials, and guides on topics like smartphone use, avoiding scams, understanding AI, and online safety. These are available to non-members too, but members get additional content.',
      },
      {
        title: `Use AARP's Fraud Watch Network`,
        content: `Go to aarp.org/money/scams-fraud. AARP's Fraud Watch Network provides free scam alerts by email, a helpline to call if you think you've been scammed (1-877-908-3360), and a Fraud Watch helpline staffed by volunteers trained in elder fraud. This is one of the most valuable benefits for anyone who receives suspicious calls or emails.`,
      },
      {
        title: 'Get discounts on phone and internet plans',
        content: `AARP has partnerships with some carriers and internet providers for discounted plans. Check the "Phone & Internet" category in your member benefits portal. Also search online for "[carrier name] AARP discount" — some offers aren't prominently displayed but exist if you ask.`,
      },
    ],
  },

  {
    slug: 'silence-unknown-callers-guide',
    title: 'How to Silence Unknown Callers and Reduce Spam Phone Calls',
    excerpt: `If your phone rings constantly with calls from numbers you don't recognize, there are free built-in tools to silence unknown callers and cut down on robocalls.`,
    category: 'essential-skills',
    tags: ['spam calls', 'robocalls', 'unknown callers', 'iphone', 'android', 'silence calls'],
    readTime: '5 min',
    thumbnailEmoji: '📵',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If it feels like your phone rings all day with calls from numbers you don't recognize — robocalls, scam calls, "your car warranty is expiring" calls — you're not imagining it. The FTC reports that older adults are disproportionately targeted by these calls. The good news: both iPhone and Android have built-in tools to dramatically reduce this problem.\n\nThe most powerful free option is "Silence Unknown Callers" on iPhone and its equivalent on Android. With this on, any call from a number that isn't already in your contacts, recent calls, or Siri suggestions goes straight to voicemail — no ringing, no interruption. Legitimate callers leave a voicemail; scammers typically don't.\n\nThis guide also covers the National Do Not Call Registry and free call-blocking apps, so you can stack multiple layers of protection.`,
    steps: [
      {
        title: 'Turn on Silence Unknown Callers (iPhone)',
        content: `Go to Settings > Phone > Silence Unknown Callers. Tap the toggle to turn it on. From now on, calls from numbers not saved in your contacts, not in your recent calls list, and not suggested by Siri will ring silently and go to voicemail. You'll see a missed call notification but your phone won't make a sound.`,
        tip: `Quick Tip: After turning this on, you'll notice your phone is dramatically quieter. If you miss a call from a real person, they'll leave a voicemail and you can add their number to contacts.`,
      },
      {
        title: 'Enable call screening on Android',
        content: 'Open the Phone app. Tap the three-dot menu (⋮) in the top right. Tap "Settings," then "Blocked numbers" — you can add specific numbers here. Also look for "Spam and robocalls" settings and turn on "Filter spam calls" if available on your phone model. On Google Pixel phones, the "Call Screen" feature answers spam calls automatically.',
      },
      {
        title: 'Register with the Do Not Call Registry',
        content: `Visit donotcall.gov (official FTC website) and register your phone number. It's free and takes about 2 minutes. Legitimate telemarketers are legally required to stop calling registered numbers. This doesn't stop scammers (who ignore the law), but it does reduce sales calls from companies that follow the rules.`,
      },
      {
        title: 'Install a free call-blocking app',
        content: 'Apps like Nomorobo (free for VoIP home phones, paid for cell), RoboKiller ($4.99/month), and Hiya (free tier available) use databases of known scam numbers to block calls before they reach you. For iPhone users, these apps add their block lists to your Silence Unknown Callers feature for even better coverage.',
      },
      {
        title: 'Report scam calls to the FTC',
        content: 'If you receive a call you believe is a scam — someone claiming to be the IRS, Social Security Administration, Medicare, or your bank — report it at reportfraud.ftc.gov. These reports help the FTC identify and act against scam operations and protect others.',
        warning: 'If someone calls claiming to be from Social Security, Medicare, or the IRS and demands gift cards, wire transfers, or immediate payment — hang up. These agencies never demand payment by phone.',
      },
    ],
  },
];
