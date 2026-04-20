// TekSure Guides Batch 15 — 25 guides: Windows tools, Mac, life transitions,
// senior discounts, health, Amazon Echo Show, Fire TV, AirPods, widgets,
// photo recovery, iPhone cache, sign out, retirement account access, mental
// health telehealth, medical alert systems, library e-books.
import type { Guide } from './guides';

export const guidesBatch15: Guide[] = [
  {
    slug: 'windows-defender-virus-scan-guide',
    title: 'How to Run a Virus Scan With Windows Defender',
    excerpt: "Windows Defender is a free antivirus program built into every Windows computer — here's how to run a scan and check your computer is protected.",
    category: 'windows-guides',
    tags: ['windows defender', 'antivirus', 'virus scan', 'security', 'windows 11', 'malware'],
    readTime: '5 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Windows Defender — now called Windows Security — is a free, built-in antivirus and security program that comes with every Windows computer. You do not need to buy a separate antivirus program; Windows Defender provides solid protection on its own. Here's how to check that it's running and do a virus scan.",
    steps: [
      {
        title: 'Open Windows Security',
        content: 'Click the Start button (the Windows logo at the bottom of the screen) and type "Windows Security." Open the Windows Security app. The main screen shows a dashboard with colored shields for different protection areas. Green checkmarks mean everything is working. A yellow or red warning means something needs attention.',
        tip: 'You can also find Windows Security by clicking the small shield icon in the system tray — the cluster of small icons at the bottom right of your screen near the clock.',
      },
      {
        title: 'Run a Quick Scan',
        content: `Click "Virus & threat protection." Under "Current threats," click "Quick scan." Windows Defender scans the areas of your computer most likely to have viruses. A quick scan usually takes 2-5 minutes. When it finishes, you'll see either "No current threats" (your computer is clean) or a list of any items found. Quick scans are good for routine checks.`,
        tip: `Run a Quick Scan about once a month even if you haven't noticed any problems. Windows Defender also scans files automatically in real time as you download and use them.`,
      },
      {
        title: 'Run a Full Scan for peace of mind',
        content: 'For a thorough check — especially if your computer has been behaving strangely — click "Virus & threat protection" → "Scan options" → check "Full scan" → click "Scan now." A full scan checks every file on your computer and typically takes 30 minutes to an hour. Your computer is usable during the scan, but it will run more slowly.',
      },
      {
        title: 'Make sure real-time protection is turned on',
        content: 'Click "Virus & threat protection" → scroll down to "Virus & threat protection settings" → click "Manage settings." Make sure "Real-time protection" is turned ON (toggle should be blue/on). Real-time protection monitors everything your computer does and blocks threats automatically — this should always be on.',
        warning: `If you have a third-party antivirus program installed (like McAfee or Norton), Windows Defender typically turns off its real-time protection automatically to avoid conflicts. This is expected behavior — you're protected by the other program instead.`,
      },
      {
        title: 'Keep Windows updated for the best protection',
        content: `Windows Defender's virus definitions update automatically through Windows Update. To check that your updates are current: click Start → Settings → Windows Update → click "Check for updates." Install any available updates. Virus definition updates happen frequently (often daily) and are small downloads that don't require a restart.`,
      },
    ],
  },

  {
    slug: 'how-to-use-task-manager-windows',
    title: 'How to Use Task Manager to Fix a Slow or Frozen Windows Computer',
    excerpt: "Task Manager shows you what's running on your computer and lets you close programs that are frozen or using too much memory.",
    category: 'windows-guides',
    tags: ['task manager', 'windows', 'slow computer', 'frozen', 'troubleshoot', 'memory'],
    readTime: '4 min',
    thumbnailEmoji: '⚙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "When your Windows computer becomes slow, unresponsive, or a program stops responding, Task Manager is the tool that helps you understand why and fix it. Task Manager shows you every program currently running and how much of your computer's resources each one is using.",
    steps: [
      {
        title: 'Open Task Manager',
        content: 'Press Ctrl + Alt + Delete on your keyboard at the same time. A blue screen appears with a small menu. Click "Task Manager." Alternatively, right-click anywhere on the empty space in the Taskbar (the bar at the bottom of your screen) and click "Task Manager." Task Manager opens showing a list of all running programs and processes.',
      },
      {
        title: `Find what's slowing your computer down`,
        content: `Click the "CPU" column header to sort programs by how much processor power they're using (highest at top). Click "Memory" to sort by RAM usage. Any program using 80-100% CPU is likely causing slowdowns. If your computer feels slow overall, look for programs using high percentages and that you're not actively using.`,
        tip: 'One program using 100% CPU is often an antivirus scan, Windows Update, or a web browser with too many tabs. Give it a few minutes before taking action — many high-usage tasks finish on their own.',
      },
      {
        title: 'Close a frozen or unresponsive program',
        content: `If a program shows "(Not Responding)" next to its name in Task Manager, it's frozen. Click on that program's name once to highlight it. Click "End Task" at the bottom right (or top right in newer Windows versions). The program will close immediately. You may lose any unsaved work in that program — this is a last resort when the program won't close normally.`,
      },
      {
        title: 'Prevent programs from starting automatically',
        content: `Many programs start automatically when you turn on your computer, which slows down startup. In Task Manager, click the "Startup apps" tab. You'll see all programs that launch when Windows starts, and whether they have a "High," "Medium," or "Low" startup impact. Right-click any program you don't need to start automatically and click "Disable." This doesn't delete the program — it just stops it from starting with Windows.`,
        tip: `Good candidates to disable at startup: music apps (Spotify, iTunes), gaming apps, creative software — anything you don't use every single day. Keep your antivirus and cloud backup apps enabled.`,
      },
    ],
  },

  {
    slug: 'how-to-free-up-mac-storage',
    title: 'How to Free Up Space on a Mac',
    excerpt: "If your Mac says it's running low on storage, these steps can reclaim gigabytes of space without deleting anything important.",
    category: 'mac-guides',
    tags: ['mac', 'storage', 'free up space', 'macOS', 'files', 'apple'],
    readTime: '5 min',
    thumbnailEmoji: '💿',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A Mac that's running out of storage slows down, can't install updates, and may start showing warnings. The good news is that macOS has built-in tools to help you find and remove files taking up the most space — including things you probably don't need anymore.",
    steps: [
      {
        title: 'Check how much storage you have left',
        content: `Click the Apple menu (the apple icon in the top left corner) → "About This Mac" → "Storage." You'll see a colored bar showing how your storage is being used — with different colors for different file types. Hover over any color to see what type of files it represents. This gives you a clear picture of where your storage is going.`,
      },
      {
        title: 'Use macOS Optimize Storage feature',
        content: `Click the Apple menu → "About This Mac" → "Storage" → click "Manage." Click "Optimize Storage" → click "Optimize." This removes movies and TV shows you've already watched from Apple TV (they can be re-downloaded for free later). It also keeps only recent email attachments locally, moving older ones to iCloud. This alone can free several gigabytes on many Macs.`,
        tip: `Also turn on "Store in iCloud" in this same window — it moves files you haven't accessed recently to iCloud, keeping your Mac storage free while preserving all your files.`,
      },
      {
        title: 'Empty the Trash',
        content: `When you delete files on a Mac, they go to the Trash but don't actually free up space until you empty it. Right-click the Trash icon in the Dock at the bottom of your screen and click "Empty Trash." Click "Empty Trash" to confirm. Depending on what's in your Trash, this might free up a significant amount of storage immediately.`,
      },
      {
        title: 'Delete large files you no longer need',
        content: 'In the Manage storage window (Apple → About This Mac → Storage → Manage), click "Documents" → "Large Files." Your Mac lists the biggest files on your computer, sorted by size. Scroll through and delete files you no longer need — especially old downloaded videos, large ZIP files, or software installers you already ran. Select a file and press the Delete key, then empty the Trash.',
      },
      {
        title: 'Remove unused applications',
        content: 'In Finder, click "Applications" in the sidebar. Look for apps you installed but never or rarely use. Drag any app you want to remove to the Trash. Right-click the Trash → "Empty Trash." Large apps like GarageBand, iMovie (if unused), Microsoft Office, or games can each take several gigabytes. Removing even one or two large unused apps can free significant space.',
      },
    ],
  },

  {
    slug: 'how-to-use-mac-spotlight-search',
    title: 'How to Find Anything on Your Mac Using Spotlight Search',
    excerpt: "Spotlight lets you find any file, app, email, or web result on your Mac in seconds — just press Command+Space and start typing.",
    category: 'mac-guides',
    tags: ['spotlight', 'mac', 'search', 'find files', 'macos', 'keyboard shortcut'],
    readTime: '3 min',
    thumbnailEmoji: '🔦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Spotlight is the fastest way to find anything on a Mac — files, apps, emails, contacts, or information from the web. Instead of searching through folders, press two keys and type what you're looking for. Most Mac users who learn Spotlight say it changes how they use their computer.",
    steps: [
      {
        title: 'Open Spotlight',
        content: 'Press the Command key (⌘, the key with the Apple logo or a clover symbol) and the Spacebar at the same time. A search bar appears in the center of your screen. Start typing immediately — results appear as you type.',
        tip: `You can also click the small magnifying glass icon (🔍) in the top right corner of your Mac's menu bar to open Spotlight.`,
      },
      {
        title: 'Search for files and apps',
        content: 'Type the name of any file, document, app, or folder. Results appear instantly and are grouped by type (Applications, Documents, Folders, etc.). Use the arrow keys to move through results and see a preview on the right side. Press Enter to open the selected item. This is the fastest way to open any app — faster than navigating the Dock or Applications folder.',
      },
      {
        title: 'Do calculations and conversions',
        content: 'Spotlight doubles as a calculator and unit converter. Type a math problem: "45 x 7" and see the answer immediately. Type a conversion: "72 fahrenheit in celsius" or "5 miles in kilometers" or "20 dollars in euros." The answer appears right in the search bar without opening any app.',
      },
      {
        title: 'Search for words within documents',
        content: `If you can't remember a file's name but remember a word in it, type that word in Spotlight. It searches inside documents, emails, and notes for the word. This is especially useful for finding old emails — type a distinctive word from the email and Spotlight will locate it across all your email accounts.`,
      },
    ],
  },

  {
    slug: 'how-to-use-time-machine-backup-mac',
    title: 'How to Back Up Your Mac With Time Machine',
    excerpt: "Time Machine is Apple's free built-in backup tool — plug in an external drive and your Mac backs up automatically every hour.",
    category: 'mac-guides',
    tags: ['time machine', 'mac', 'backup', 'external drive', 'apple', 'data safety'],
    readTime: '5 min',
    thumbnailEmoji: '⏱️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Time Machine is Apple's built-in backup feature that automatically saves copies of everything on your Mac every hour. If your Mac is ever lost, stolen, or if you accidentally delete a file, you can restore everything from a Time Machine backup. All you need is an external hard drive.",
    steps: [
      {
        title: 'Get an external hard drive',
        content: `Time Machine requires an external hard drive (a portable drive you plug in via USB). Look for one with at least 1 TB (terabyte) of capacity — they typically cost $50-$80 at Target, Best Buy, Walmart, or Amazon. Brands like Seagate, Western Digital (WD), and Samsung make reliable options. The drive should be at least 2x the size of your Mac's internal storage for the best backup coverage.`,
        tip: 'Look for "portable hard drive" or "external hard drive" when shopping. You want a drive that connects via USB-A or USB-C depending on which ports your Mac has.',
      },
      {
        title: 'Plug in the drive and set up Time Machine',
        content: `Plug the external drive into your Mac's USB port. macOS may ask if you want to use this drive for Time Machine backups — click "Use as Backup Disk." If it doesn't ask, go to the Apple menu → System Settings → Time Machine → click "Add Backup Disk" and select your drive. Time Machine will prepare the drive (no formatting needed) and start the first backup automatically.`,
      },
      {
        title: 'Let the first backup complete',
        content: 'The first Time Machine backup copies your entire Mac — this can take 1-5 hours depending on how much data you have. Your Mac is fully usable during the backup. A Time Machine icon in the menu bar (top right of screen) spins while a backup is in progress. After the first backup, Time Machine backs up only what has changed each hour — these incremental backups take just a few minutes.',
        tip: 'Plug your external drive into your Mac regularly (once a week is good). Time Machine backs up automatically whenever the drive is connected.',
      },
      {
        title: 'Restore a file you accidentally deleted',
        content: 'If you accidentally delete a file or need an older version of a document: click the Time Machine icon in the menu bar and click "Browse Time Machine Backups." Your desktop turns into a timeline. Navigate back in time using the arrows on the right. Find the file you need, select it, and click "Restore." The file is copied back to its original location on your Mac.',
      },
    ],
  },

  {
    slug: 'how-to-use-airpods',
    title: 'How to Set Up and Use Apple AirPods',
    excerpt: "AirPods connect to your iPhone wirelessly and automatically switch between your devices — here's how to pair them and use key features.",
    category: 'tips-tricks',
    tags: ['airpods', 'apple', 'wireless earbuds', 'iphone', 'bluetooth', 'setup'],
    readTime: '4 min',
    thumbnailEmoji: '🎵',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "AirPods are Apple's wireless earbuds. They work with iPhone, iPad, Mac, and Apple Watch, and switch between your Apple devices automatically. Setting them up is fast — they pair with one tap on the first connection.",
    steps: [
      {
        title: 'Pair AirPods with your iPhone for the first time',
        content: 'Make sure your AirPods are in their charging case with the case lid open and the AirPods inside. Hold the open case near your unlocked iPhone. An animation appears on your iPhone showing the AirPods. Tap "Connect." Follow any prompts. The AirPods are now paired with your Apple ID — they will automatically connect to any Apple device signed in to your account.',
        tip: `If the connection popup doesn't appear, make sure Bluetooth is on in your iPhone's Settings and the AirPods have some charge (the case LED should show a light).`,
      },
      {
        title: 'Use AirPods for calls and music',
        content: 'Once connected, anything your iPhone plays comes through the AirPods — music, videos, podcast, calls. When a call comes in, the sound rings in your AirPods. Double-tap either AirPod to answer (on AirPods 1st/2nd gen) or press the force sensor on the stem (AirPods 3rd gen and Pro). Speak normally — the AirPod microphones pick up your voice for the other person.',
      },
      {
        title: 'Control AirPods with taps and gestures',
        content: 'AirPods (2nd gen and earlier): Double-tap to play/pause or answer a call. The default action can be changed in Settings → Bluetooth → tap the "i" next to AirPods. AirPods Pro: Press the force sensor on the stem once to play/pause, twice to skip forward, three times to go back. Press and hold to switch between Noise Cancellation and Transparency modes. AirPods 3rd gen: Press the stem once to play/pause.',
      },
      {
        title: 'Check your AirPods battery level',
        content: 'Open the AirPods case near your iPhone — a pop-up shows the battery level for each AirPod and the case. Or add the Batteries widget to your iPhone: press and hold an empty area of your Home Screen, tap the + button, search for "Batteries," and add it. The widget shows battery levels for all connected devices including your AirPods whenever you open your phone.',
        tip: `When battery is low on AirPods, you'll hear a tone in your ear. Put them back in the case for even 15 minutes — they charge quickly and the case holds multiple full charges.`,
      },
    ],
  },

  {
    slug: 'how-to-join-wifi-ipad',
    title: 'How to Connect Your iPad to WiFi',
    excerpt: "Connecting your iPad to a WiFi network takes about a minute — here's how to find your network and enter the password.",
    category: 'essential-skills',
    tags: ['ipad', 'wifi', 'internet', 'connect', 'setup', 'wireless'],
    readTime: '3 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Before you can browse the internet, watch videos, or use most apps on your iPad, you need to connect to a WiFi network. Here's the simple process for connecting to your home WiFi or any other network.",
    steps: [
      {
        title: 'Open iPad Settings and go to Wi-Fi',
        content: `Tap the "Settings" app (gray gear icon) on your iPad's Home Screen. Tap "Wi-Fi" in the left column. Make sure the Wi-Fi switch at the top is turned on (it will be green when on). Your iPad will scan for nearby networks and display them as a list.`,
      },
      {
        title: 'Select your WiFi network',
        content: 'Look through the list for your home WiFi network name (this might be the name your internet provider gave it, or a name you chose yourself). Tap your network name to select it. Networks with a padlock icon require a password.',
      },
      {
        title: 'Enter your WiFi password',
        content: `A keyboard appears asking for your WiFi password. Type your password carefully — WiFi passwords are case-sensitive (capital letters matter). Tap "Join" when you've entered the password. Your iPad will connect to the network, and a WiFi symbol (fan shape) will appear at the top of the screen to confirm you're connected.`,
        tip: `If you don't know your WiFi password, see the TekSure guide "How to Find Your WiFi Password on Any Device" at teksure.com/guides/how-to-find-your-wifi-password.`,
      },
      {
        title: 'Your iPad will remember this network',
        content: `Once connected, your iPad remembers this WiFi network. The next time you're within range, your iPad reconnects automatically without asking for the password again. If you need to change which WiFi network you're using (for example, at a friend's house), repeat these steps and select the different network.`,
      },
    ],
  },

  {
    slug: 'how-to-use-fire-tv-stick',
    title: 'How to Set Up an Amazon Fire TV Stick',
    excerpt: "A Fire TV Stick plugs into your TV and gives you access to Netflix, Prime Video, YouTube, and hundreds of free apps — here's how to get started.",
    category: 'entertainment',
    tags: ['fire tv', 'amazon', 'streaming', 'setup', 'cord cutting', 'prime video'],
    readTime: '5 min',
    thumbnailEmoji: '🔥',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Amazon Fire TV Stick is a small device that plugs into your TV's HDMI port and turns any television into a smart TV. You can watch Prime Video, Netflix, Hulu, YouTube, and hundreds of other apps — including many free channels. Fire TV Sticks start at around $25 and are available at Amazon, Walmart, Best Buy, and Target.",
    steps: [
      {
        title: 'Plug in the Fire TV Stick',
        content: 'Plug the Fire TV Stick into an HDMI port on the back or side of your TV. If the area is tight, use the HDMI extender cable included in the box. Plug the power cable into the Fire TV Stick and into a wall outlet or power strip. Insert the batteries into the Fire TV remote. Turn your TV on and use your TV remote to switch to the HDMI input where you plugged in the Fire Stick.',
        tip: 'Remember which HDMI number you used. If your TV has HDMI 1, 2, and 3, and you plugged into HDMI 2, press the Input/Source button on your TV remote until you see "HDMI 2."',
      },
      {
        title: 'Connect to your WiFi network',
        content: 'The Fire TV setup screen will appear. Use the Fire TV remote to navigate and click "Get Started." Select your language. Choose your WiFi network from the list, then use the on-screen keyboard to type your WiFi password. Select "Connect" and wait for the Fire TV to connect. This takes about 30-60 seconds.',
      },
      {
        title: 'Sign in to your Amazon account',
        content: `Fire TV will ask you to sign in to your Amazon account. If you already have an Amazon account (the same one you use for shopping), enter your email and password using the on-screen keyboard. If you're setting up a Fire Stick you ordered from Amazon while logged in, it may already be registered to your account — skip to the home screen.`,
        tip: 'You must have an Amazon account to use a Fire TV Stick. Creating one is free at amazon.com.',
      },
      {
        title: 'Find and watch content',
        content: `After setup, you'll see the Fire TV home screen. Use the directional pad on the remote to scroll through featured content. Navigate to "Apps" to see all available apps — find Netflix, Hulu, or others and click "Get" to install them. Free apps include Pluto TV, Tubi, Peacock (free tier), and The Roku Channel. Press and hold the microphone button on the remote to search for a movie or show by voice — say the title and Fire TV finds it.`,
      },
    ],
  },

  {
    slug: 'how-to-set-up-amazon-echo-show',
    title: 'How to Set Up an Amazon Echo Show (Screen + Alexa)',
    excerpt: `The Amazon Echo Show has a built-in screen for video calls, recipes, news, and more — here's how to set it up and use its key features.`,
    category: 'smart-home',
    tags: ['echo show', 'amazon', 'alexa', 'video call', 'smart display', 'setup'],
    readTime: '5 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Amazon Echo Show is like a regular Echo speaker but with a built-in screen. The screen lets you watch YouTube videos, see recipes step-by-step, make video calls to family (also called Drop-In), view your Ring doorbell camera, and see weather forecasts and news headlines visually. Setup is similar to a regular Echo but with a few extra features to configure.",
    steps: [
      {
        title: 'Plug in the Echo Show and connect to WiFi',
        content: 'Plug the Echo Show into a wall outlet. It will turn on automatically and display a setup screen. Follow the on-screen instructions — select your language, connect to your WiFi network (type in your password using the touchscreen keyboard), and sign in to your Amazon account. Alternatively, use the Alexa app on your phone to complete setup: open the Alexa app → Devices → plus (+) → Add Device → Amazon Echo → Echo Show.',
      },
      {
        title: 'Make a video call with Drop-In',
        content: `Echo Shows can make video calls to other Echo Show owners (or through the Alexa app on a phone). Say "Hey Alexa, call [name]" and if that person has an Alexa device or the Alexa app, a video call will start. The screen shows the other person's face. You can also set up "Drop-In" with trusted family members — they can check in on you from their phone or their own Echo Show (with your permission).`,
        tip: `Drop-In requires permission to be set up in advance. In the Alexa app, go to the Communicate tab → Contacts → find a family member and enable "Allow Drop-In." They'll need to do the same on their end.`,
      },
      {
        title: 'Ask Alexa to show you recipes, weather, and news',
        content: `The Echo Show's screen makes many Alexa responses much richer. "Hey Alexa, show me a recipe for chicken soup" — Alexa displays step-by-step instructions on the screen with photos. "Hey Alexa, what's the weather this week?" — shows a 7-day forecast. "Hey Alexa, show me the news" — plays video news headlines. "Hey Alexa, show me my Ring camera" — displays your Ring doorbell live feed (if you have Ring set up).`,
      },
      {
        title: 'Use the touchscreen for quick controls',
        content: 'The Echo Show screen is also a touchscreen. Swipe down from the top to access a quick settings panel — brightness, WiFi, Do Not Disturb, and volume. Swipe up from the bottom to see your notifications and reminders. Tap the home icon at the top left (or say "Hey Alexa, go home") to return to the home screen. You can set a favorite photo as the screen background by going to Settings → Display → Home Background.',
      },
    ],
  },

  {
    slug: 'how-to-use-android-widgets',
    title: `How to Add Widgets to Your Android Phone's Home Screen`,
    excerpt: 'Android widgets show live information — weather, news, calendar events — right on your home screen without opening any apps.',
    category: 'tips-tricks',
    tags: ['widgets', 'android', 'home screen', 'customize', 'weather', 'calendar'],
    readTime: '3 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Widgets are interactive tiles that sit on your Android Home Screen and show live information — the current weather, your next calendar appointment, news headlines, or your battery level — without needing to open an app. Here's how to add them.",
    steps: [
      {
        title: 'Enter widget editing mode',
        content: 'Press and hold an empty area of your Android Home Screen (a spot where there are no app icons) for 2-3 seconds. The screen will zoom out slightly and show a menu at the bottom. Tap "Widgets." A scrollable list of all available widgets appears.',
      },
      {
        title: 'Browse and select a widget',
        content: 'Scroll through the widget list. Widgets are grouped by app — so all Google Calendar widgets are together, all Weather widgets are together, etc. Tap any widget name to see its size and preview. Most apps offer widgets in different sizes — a small 1x1 widget just shows one piece of information, while a larger 4x2 widget shows more detail.',
      },
      {
        title: 'Place the widget on your home screen',
        content: 'Press and hold the widget you want to add. Drag it from the widget menu and drop it on your home screen in an empty area. Resize the widget by pressing and holding it on the home screen — blue dots appear at the edges. Drag the dots to resize. Tap anywhere else to confirm the placement.',
        tip: `If there isn't enough space for the widget where you want it, delete or rearrange some apps first to create an open area.`,
      },
      {
        title: `Remove a widget you don't want`,
        content: 'Press and hold the widget on your home screen. Drag it to the "Remove" option that appears at the top of the screen. This removes the widget from your home screen but does not uninstall the app it came from.',
      },
    ],
  },

  {
    slug: 'how-to-use-iphone-widgets',
    title: `How to Add Widgets to Your iPhone's Home Screen`,
    excerpt: `iPhone widgets show weather, calendar, battery level, and more directly on your home screen — here's how to add and arrange them.`,
    category: 'tips-tricks',
    tags: ['widgets', 'iphone', 'home screen', 'ios', 'weather', 'customize'],
    readTime: '3 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "iPhone widgets (introduced in iOS 14) show live information right on your Home Screen — no app opening needed. Popular widgets include the weather for the next few hours, upcoming calendar appointments, and a fitness ring showing your daily activity progress.",
    steps: [
      {
        title: 'Enter editing mode',
        content: `Press and hold any empty space on your iPhone's Home Screen until the apps start to wiggle. Tap the plus (+) button in the top left corner of the screen. The "Add a Widget" gallery opens showing all available widgets.`,
      },
      {
        title: 'Choose and add a widget',
        content: `Scroll through or search the widget gallery. Tap any widget to see size options — small (about the size of 4 app icons), medium (8 app icons wide), or large (a full row). Swipe through the size options and tap "Add Widget" when you've chosen the one you want. The widget is added to your Home Screen.`,
      },
      {
        title: 'Move and arrange widgets',
        content: `While still in wiggle mode, press and hold any widget or app to drag it to a new position. Widgets can sit alongside regular app icons or be placed together in a "Smart Stack" (a stack of widgets you swipe through). Tap "Done" in the top right corner when you're satisfied with the arrangement.`,
      },
      {
        title: 'Add widgets to your Lock Screen',
        content: 'In iOS 16 and later, you can also add small widgets to your Lock Screen (the screen you see when your phone is locked). Press and hold your Lock Screen, tap "Customize," then tap "Lock Screen." Tap the date area at the top to add a widget above the clock, or tap the widget row below the clock to add up to four small widgets. Useful options: battery percentage, next calendar event, temperature, or steps walked.',
      },
    ],
  },

  {
    slug: 'how-to-recover-deleted-photos-iphone',
    title: 'How to Recover Photos You Accidentally Deleted on iPhone',
    excerpt: "Deleted photos aren't gone immediately — your iPhone keeps them for 30 days. Here's how to recover them before they're permanently erased.",
    category: 'tips-tricks',
    tags: ['photos', 'recover deleted', 'iphone', 'recently deleted', 'restore'],
    readTime: '3 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "When you delete a photo on iPhone, it doesn't disappear right away. It moves to a 'Recently Deleted' album and stays there for 30 days. During that window, you can recover it completely. After 30 days, it's permanently deleted and cannot be recovered.",
    steps: [
      {
        title: 'Open the Recently Deleted album',
        content: `Open the Photos app. Tap "Albums" at the bottom of the screen. Scroll down to the "Utilities" section. Tap "Recently Deleted." This album shows all photos and videos you've deleted in the last 30 days.`,
        tip: 'On iPhones running iOS 16 or later, the Recently Deleted album is locked by default — you need to authenticate with Face ID or Touch ID to open it.',
      },
      {
        title: 'Recover a photo',
        content: 'Tap a photo to select it. Tap "Recover" at the bottom right of the screen. Tap "Recover Photo" to confirm. The photo moves back to your main photo library immediately and appears in the "Recents" album as well as its original location.',
      },
      {
        title: 'Recover multiple photos at once',
        content: 'In the Recently Deleted album, tap "Select" in the top right corner. Tap each photo you want to recover (a blue checkmark appears on each one). After selecting all the photos you want, tap "Recover" at the bottom right. Tap "Recover [number] Photos" to confirm all at once.',
        tip: 'If you want to recover ALL deleted photos, tap "Select" then "Recover All" at the bottom right — this restores everything from the Recently Deleted album in one step.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-medical-alert-system',
    title: 'How to Set Up a Medical Alert System for Seniors Living Alone',
    excerpt: "Medical alert systems let seniors call for help with the press of a button — here's what to look for and how to choose and set one up.",
    category: 'health-tech',
    tags: ['medical alert', 'emergency', 'senior safety', 'fall detection', 'life alert', 'aging'],
    readTime: '6 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Medical alert systems give seniors who live alone (or spend time alone) a way to call for emergency help instantly by pressing a button or through automatic fall detection. They range from simple wearable buttons to GPS-enabled devices with two-way communication with monitoring centers. Here's how to evaluate and set up one.",
    steps: [
      {
        title: 'Understand the two main types of medical alert systems',
        content: `In-home systems: A base unit plugs into your home's landline or cellular connection. You wear a waterproof button (as a necklace or wristband) and press it to connect to a monitoring center from anywhere inside your home or yard. Best for people who stay mostly at home. Mobile/GPS systems: A portable device goes with you everywhere and works via cellular (like a smartphone). You can call for help at the grocery store, on a walk, or anywhere. Best for active seniors.`,
        tip: 'If you already have an Apple Watch Series 4 or later, it has built-in fall detection and Emergency SOS that works like a medical alert device at no additional cost. See the TekSure guide on setting up Apple Watch for details.',
      },
      {
        title: 'Compare well-reviewed medical alert services',
        content: 'Established services with good reviews from AARP and consumer organizations: Life Alert — the classic provider, monthly contracts required; Medical Guardian — flexible month-to-month plans, GPS options; Bay Alarm Medical — highly rated, affordable plans; Lively (GreatCall) — Best Buy sells these, designed specifically for seniors; ADT Health — from the home security company. AARP offers discounts on some services — check aarp.org/medical-alert for current deals.',
      },
      {
        title: 'Set up an in-home system',
        content: `Plug the base unit into a power outlet and a phone jack or activate cellular service per the instructions. Test the system: press the help button and the monitoring center will answer — tell them it's a test. They'll confirm the address on file and verify the system works. Program emergency contacts with the monitoring center — names and phone numbers of family members to call if you press the button. Wear the wearable button every day, including in the shower (most are waterproof).`,
      },
      {
        title: 'Where to place the base unit for best coverage',
        content: 'The base unit has a speaker and microphone so you can communicate with the monitoring center. Place it in the area where you spend the most time — usually the kitchen or living room. Test the coverage throughout your home by pressing the button from each room, the bathroom, and the backyard. Most in-home systems cover 300-1,000 feet from the base. If coverage is weak in a key area, ask the provider about signal extenders.',
      },
      {
        title: 'What to expect when you press the button',
        content: `When you press your medical alert button: a trained operator answers within about 30 seconds. They'll say something like "This is [company name] monitoring, we received an alert — are you okay?" If you need help, tell them what happened. If it's accidental, tell them it was a test or mistake. They'll contact emergency services if needed and call your emergency contacts. If you can't speak, after 30-60 seconds of no response, they'll call emergency services automatically.`,
        tip: 'Set up a combination that works for your household. An in-home system plus an Apple Watch for when you leave the house provides comprehensive coverage for different situations.',
      },
    ],
  },

  {
    slug: 'senior-citizen-discount-apps-programs',
    title: 'Free and Discounted Tech Programs for Seniors',
    excerpt: `Many internet, phone, and tech services offer deep discounts for seniors and people on fixed incomes — here's a complete guide to what's available.`,
    category: 'government-civic',
    tags: ['senior discounts', 'free internet', 'Lifeline', 'ACP', 'discounts', 'low income'],
    readTime: '6 min',
    thumbnailEmoji: '🎁',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Many internet, phone, and technology programs offer significant discounts — or are completely free — for seniors, people on Medicare, or those with lower incomes. These programs exist to ensure everyone can afford internet access and communication. Here's a guide to the most important ones available in the US.",
    steps: [
      {
        title: 'FCC Lifeline Program — Free or discounted phone/internet service',
        content: 'The Lifeline program provides up to $9.25/month discount on phone or internet service for qualifying households. You qualify if you receive Medicaid, SNAP (food stamps), SSI, Federal Public Housing Assistance, or Veterans Pension Benefits. To apply: go to lifelinesupport.org to find participating providers in your area and apply online. Call 1-800-234-9473 for help.',
        tip: `The Emergency Connectivity Fund and other federal programs expanded broadband access significantly. If you've been denied before, recheck — eligibility rules and funding change.`,
      },
      {
        title: 'Comcast Internet Essentials — Low-cost internet',
        content: 'Comcast offers Internet Essentials to low-income households, including those with seniors receiving public assistance. The service provides home internet for $9.95/month (speeds up to 100 Mbps) plus the option to purchase a discounted computer. Apply at internetessentials.com or call 1-855-846-8376. Must live in a Comcast service area and not have had Comcast internet in the past 90 days.',
      },
      {
        title: 'AT&T Access and other carrier discount programs',
        content: `AT&T offers AT&T Access for about $10/month for qualifying households (Medicaid, SNAP, SSI, federal housing assistance). Spectrum also offers $14.99/month internet for qualifying customers. T-Mobile and Verizon have low-income phone programs. Call your current phone or internet carrier and ask specifically: "Do you have a low-income or senior discount program I might qualify for?" Many people don't know to ask.`,
      },
      {
        title: 'Free tech training and help programs',
        content: 'AARP TEK (Technology Education and Knowledge) offers free in-person workshops at libraries and senior centers — go to aarp.org/tek to find events near you. Senior Planet from AARP offers free tech classes online and in person in many cities — go to seniorplanet.org. Public libraries offer free computer use, internet access, tech help sessions, and digital literacy classes — call your local library or visit their website.',
        tip: 'The Senior Planet program in New York, Denver, San Francisco, and other cities offers free tech coaching by phone and online — you can participate from anywhere in the US at seniorplanet.org.',
      },
      {
        title: 'Software and subscription discounts',
        content: 'Many services offer senior or AARP discounts not advertised prominently: Microsoft 365 is often discounted for seniors at retail stores; Adobe offers educator and senior pricing in some regions; Amazon Prime is $6.99/month (vs $14.99) for Medicaid recipients — go to amazon.com/eligiblecustomers to verify. AARP membership ($16/year) provides dozens of tech and everyday discounts — check aarp.org/benefits for the full list.',
      },
    ],
  },

  {
    slug: 'online-library-card-borrow-ebooks',
    title: 'How to Use Your Library Card to Borrow Free E-Books and Audiobooks',
    excerpt: `Your public library card gives you access to thousands of free e-books and audiobooks on your phone — here's how to set it up.`,
    category: 'app-guides',
    tags: ['library', 'ebooks', 'audiobooks', 'libby', 'kindle', 'free books', 'reading'],
    readTime: '5 min',
    thumbnailEmoji: '📚',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Your public library card gives you free access to thousands of e-books and audiobooks through apps on your phone or tablet. The Libby app (by OverDrive) is the most popular and easiest to use. You can borrow books without leaving your home, and they're delivered instantly to your device — and they automatically return themselves so you never pay a late fee.",
    steps: [
      {
        title: 'Download the Libby app',
        content: 'Download the free "Libby" app from the App Store (iPhone/iPad) or Google Play Store (Android). Open the app. Tap "Yes" when asked if you have a library card. Search for your library by city, county name, or zip code. Select your library from the results.',
        tip: `Many libraries offer digital library cards you can get online instantly — no visit required. Go to your library's website and look for "Get a Library Card" or "Digital Card."`,
      },
      {
        title: 'Enter your library card number',
        content: `Select your library from the search results. Tap "Sign In with My Card." Enter your library card number — this is the long number on the back of your physical library card. Enter your PIN (usually your birthdate as MMDD or the last 4 digits of your phone number — check with your library if you're not sure). Tap "Sign In."`,
      },
      {
        title: 'Browse and borrow e-books',
        content: `Tap "Search" at the bottom to look for a specific book by title or author. Tap "Browse" to explore popular books, recent releases, or categories. When you find a book you want, tap it, then tap "Borrow." If it's available, it downloads to your device immediately. If there's a waiting list (popular books may have holds), tap "Place a Hold" and you'll be notified when it's your turn.`,
        tip: 'The "Available Now" filter (look for it in the search or browse filters) shows only books you can borrow immediately without waiting. Great for finding something to read right now.',
      },
      {
        title: 'Read e-books and listen to audiobooks',
        content: 'Borrowed e-books open directly in the Libby app for reading. Increase text size by tapping anywhere in a book and looking for the Aa font button. Audiobooks play back in the app with controls for speed, sleep timer, and bookmarks. Books automatically return after the loan period (usually 21 days) — no action needed from you and no late fees ever.',
      },
      {
        title: 'Send e-books to your Kindle or Kindle app',
        content: `If you prefer reading on a Kindle or in the Kindle app, Libby can send borrowed books there. When borrowing a book, tap "Read Now" → choose "Send to Kindle." You'll be directed to Amazon's website to confirm delivery to your Kindle device or the free Kindle app. This is optional — books read just as well in the Libby app itself.`,
      },
    ],
  },

  {
    slug: 'how-to-use-telehealth-for-mental-health',
    title: 'How to Use Telehealth for Mental Health Support',
    excerpt: `Online therapy and mental health counseling are now widely available by video — here's how to find a provider and what to expect.`,
    category: 'health-tech',
    tags: ['telehealth', 'mental health', 'therapy', 'counseling', 'video', 'medicare'],
    readTime: '5 min',
    thumbnailEmoji: '🧠',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Mental health counseling by video call has become widely available, covered by most insurance plans including Medicare, and accessible from home. For seniors, video therapy eliminates transportation barriers, reduces social isolation concerns, and allows access to therapists who specialize in aging-related issues. Here's how to access it.",
    steps: [
      {
        title: 'Check if your insurance covers telehealth therapy',
        content: 'Medicare covers mental health services from licensed clinical social workers, psychologists, and psychiatrists via telehealth. As of 2026, Medicare covers telehealth mental health visits without requiring an in-person visit first (this was updated by the Consolidated Appropriations Act, 2026). Call the number on your Medicare card or go to medicare.gov to confirm your specific coverage. Most Medicare Advantage and private insurance plans also cover telehealth mental health visits.',
      },
      {
        title: 'Find a telehealth therapist through your insurance',
        content: `Log in to your insurance company's website and use the "Find a Provider" or "Find a Therapist" tool. Filter results for "telehealth" or "video visits." Look for therapists who specialize in areas relevant to you — seniors and aging, grief, anxiety, or depression. Your primary care doctor can also provide a referral, which some plans require.`,
        tip: `Psychology Today's therapist finder at psychologytoday.com/us/therapists has a telehealth filter and shows accepted insurance for each therapist. Many are listed as LGBTQ-affirming, grief specialists, or aging specialists.`,
      },
      {
        title: 'Use established telehealth mental health platforms',
        content: 'If finding an individual therapist is complicated, these platforms connect you with licensed therapists quickly: Teladoc Mental Health — covered by many insurance plans, easy to set up through teladoc.com. Doctor on Demand — psychiatric care and therapy covered by many insurers. BetterHelp and Talkspace — subscription-based, not usually covered by Medicare but accessible without insurance. Many state and county mental health lines also offer free phone counseling.',
      },
      {
        title: 'What to expect in your first session',
        content: `The first session is usually an intake appointment — the therapist asks about your background, what brought you to seek help, and your goals. You don't need to share anything you're not comfortable sharing in the first session. Most video therapy sessions are 45-50 minutes. You'll use the same telehealth setup as a regular video doctor appointment — a link emailed to you, a camera on your device, and a quiet private space.`,
        tip: 'A few free mental health resources by phone: SAMHSA National Helpline: 1-800-662-4357 (free, 24/7, confidential). Veterans Crisis Line: 988 then press 1. 988 Suicide and Crisis Lifeline: call or text 988.',
      },
    ],
  },

  {
    slug: 'retirement-account-online-access',
    title: 'How to Access and Check Your Retirement Account Online',
    excerpt: `Your 401(k), IRA, or pension account can be checked online anytime — here's how to find your account and understand what you're looking at.`,
    category: 'financial-tech',
    tags: ['retirement', '401k', 'IRA', 'pension', 'online account', 'savings'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Checking your retirement account balance and activity online is secure, free, and gives you current information without waiting for a paper statement. Whether you have a 401(k), an IRA, a pension, or Social Security, each has an online account or portal where you can check balances, review transactions, and make changes.",
    steps: [
      {
        title: 'Find where your retirement account is held',
        content: `Your account is held by a financial firm — common ones include Fidelity (fidelity.com), Vanguard (vanguard.com), Charles Schwab (schwab.com), TIAA (tiaa.org), and Empower (formerly Great-West). Check your most recent paper statement — the company name and website are printed on it. If you're not sure, ask your employer's HR department which company manages your 401(k).`,
      },
      {
        title: 'Create an online account',
        content: `Go to the financial firm's website. Click "Register," "Create Account," or "Open Online Access." You'll be asked for your Social Security number, account number (from your statement), date of birth, and email address to verify your identity. Create a username and password. Many firms also offer or require two-step verification — highly recommended for financial accounts.`,
        tip: `If you run into trouble registering online, call the firm's customer service number (printed on your statement). They can help you set up online access over the phone in about 10-15 minutes.`,
      },
      {
        title: 'Understand your account dashboard',
        content: `After logging in, you'll see a dashboard with your account balance (current value of all your investments), recent activity (contributions, withdrawals, investment changes), and your investment holdings (a list of the funds you're invested in with their current values). The "Performance" or "Returns" section shows how much your account has grown over time.`,
      },
      {
        title: 'Set up alerts and paperless statements',
        content: `Look for "Alerts" or "Notifications" in your account settings. Set up an email alert for: large account balance changes (unusual activity), successful or failed login attempts, and statement availability. Switching to paperless statements means you'll receive statements by email — log in to view them any time. This is also more secure than paper statements that could be taken from a mailbox.`,
        tip: 'Never share your retirement account login credentials with anyone over the phone or email, even if they claim to be from the financial firm. Real financial firms will never ask for your password.',
      },
    ],
  },

  {
    slug: 'how-to-use-apple-tv',
    title: 'How to Set Up an Apple TV',
    excerpt: "Apple TV connects to your television and gives you access to Apple TV+ shows, plus Netflix, Hulu, and hundreds of other streaming apps.",
    category: 'entertainment',
    tags: ['apple tv', 'streaming', 'setup', 'TV', 'netflix', 'apple tv plus'],
    readTime: '5 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apple TV is a small box (about the size of a hockey puck) that connects to your television and provides access to Apple TV+, Netflix, Hulu, Disney+, and hundreds of other streaming apps. It's the best option if you already use Apple devices and want seamless AirPlay integration.",
    steps: [
      {
        title: 'Connect Apple TV to your television',
        content: 'Use the included HDMI cable to connect the Apple TV to an HDMI port on your television. Plug the power cord into the Apple TV and a wall outlet. Turn your TV on and switch to the HDMI input you used. The Apple TV setup screen will appear.',
      },
      {
        title: 'Set up using your iPhone (easiest method)',
        content: 'The quickest way to set up Apple TV is to bring your iPhone near it. A notification will appear on your iPhone offering to set up Apple TV — tap "Continue." Your iPhone transfers your Apple ID, WiFi password, and preferences to the Apple TV automatically. This takes about 2 minutes and is much faster than entering everything manually with the remote.',
      },
      {
        title: 'Navigate with the Siri Remote',
        content: `The Apple TV remote has a touch-sensitive surface at the top — swipe across it to move the cursor. Press the center to select. The Back button goes back one screen. The TV icon takes you to the Apple TV home screen. Press and hold the Siri button (looks like a microphone) on the remote and say what you're looking for — "Find thriller movies," "Open Netflix," or "Play the news."`,
        tip: 'You can also control Apple TV from your iPhone. Open the Control Center (swipe down from top right) and tap the Apple TV Remote icon.',
      },
      {
        title: 'Download apps and start watching',
        content: `On the Apple TV home screen, you'll see apps like Apple TV+, Netflix, Prime Video, YouTube, and others. The App Store on Apple TV has hundreds more. Tap the App Store, search for the app you want (like Hulu), and tap "Get" to install it for free. Then open the app and sign in with your existing account. Apple TV+ content (shows like Ted Lasso, Severance) requires a separate subscription — $9.99/month or free with new Apple device purchase.`,
      },
    ],
  },
];
