// TekSure Guides Batch 39 — 20 guides covering Signal, old photo digitizing,
// PDF tools, device buying guides, Windows/Mac tips, storage management,
// Marco Polo, government assistance programs, and community apps
import type { Guide } from './guides';

export const guidesBatch39: Guide[] = [
  {
    slug: 'signal-private-messaging-guide',
    title: 'What Is Signal and Why Do People Use It for Private Texting',
    excerpt: `Signal is a free messaging app that encrypts every message so only you and the recipient can read it — here's how to set it up and use it.`,
    category: 'communication',
    tags: ['signal', 'private messaging', 'encryption', 'privacy', 'text messaging'],
    readTime: '5 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Signal is a free messaging app for iPhone and Android that uses end-to-end encryption for every message, call, and video chat. End-to-end encryption means the messages are scrambled in a way that only your phone and the recipient's phone can unscramble — not Signal's servers, not your phone carrier, not anyone else. It is used by journalists, doctors, lawyers, and millions of everyday people who want their conversations to stay private. It looks and works almost exactly like a regular texting app.`,
    steps: [
      {
        title: 'Download Signal and verify your phone number',
        content: `Signal is free in the App Store (iPhone) and Google Play (Android). Search for "Signal - Private Messenger." Open the app and tap "Continue" on the first screen. Enter your phone number — Signal will text a 6-digit verification code to that number. Enter the code to confirm your identity. Set a name and optional profile photo. That's all — you now have a Signal account linked to your phone number.`,
        tip: `You do not need a separate username or email address. Signal uses your existing phone number, so anyone who already has your number can message you on Signal if they also have the app.`,
      },
      {
        title: 'Start a conversation',
        content: `Tap the pencil icon (or "New Message") to start a chat. Signal shows which of your existing contacts also use Signal — these contacts will have a small Signal logo next to their name. Tap a contact's name to open a chat. Type your message and tap Send. It looks like a regular text conversation. Messages sent between two Signal users are automatically encrypted — you do not need to turn anything on.`,
      },
      {
        title: 'Make encrypted voice and video calls',
        content: `Open a conversation and tap the phone icon for a voice call or the video icon for a video call. Signal calls are encrypted end-to-end, meaning no one can listen in. Call quality is generally good over WiFi. Signal calls work over WiFi and cellular data, similar to FaceTime or WhatsApp calls. The other person must also have Signal installed to receive Signal calls.`,
      },
      {
        title: 'Use disappearing messages for extra privacy',
        content: `Signal lets you set messages to automatically disappear after a set time — 30 seconds, 5 minutes, 1 week, or a custom amount. Open a conversation, tap the person's name at the top, then "Disappearing Messages," and choose a timer. After you send a message, it will delete itself from both phones after the timer runs out. This is useful for sensitive conversations where you do not want a permanent record. The other person is notified when you turn this on.`,
        tip: `Signal is used by many healthcare providers and therapists to communicate with patients because it meets privacy standards without requiring special equipment. If your doctor offers Signal as a contact option, it is a legitimate and secure choice.`,
      },
    ],
  },

  {
    slug: 'how-to-digitize-old-photos',
    title: 'How to Scan and Save Old Printed Photos Using Your Phone',
    excerpt: `Your phone camera can scan printed photos, slides, and documents and save them digitally so they are never lost — here's how to do it without a scanner.`,
    category: 'essential-skills',
    tags: ['scan photos', 'digitize photos', 'old photos', 'photo scanning', 'family photos', 'preservation'],
    readTime: '6 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Millions of family photos exist only as printed paper — tucked in albums, shoeboxes, and envelopes. Digitizing those photos means saving them forever, sharing them with family who live far away, and protecting them from fire, flood, or fading. Your phone camera is capable enough to digitize most printed photos at excellent quality. There are also free apps designed specifically to make the process faster and the results better.`,
    steps: [
      {
        title: 'Use the PhotoScan app by Google (recommended)',
        content: `Google PhotoScan is a free app (App Store and Google Play) designed specifically to photograph printed photos without glare or reflection. Open the app and point it at a photo lying flat on a table. The app guides you to take 4 quick shots at different angles — it then automatically stitches them together to eliminate the glare you would get from a single camera shot. The result is a clean, flat, high-resolution digital copy. Tap "Save" and the image goes directly to your Google Photos library.`,
        tip: `Good lighting matters most. Scan near a window with indirect daylight, or under bright overhead lights. Avoid direct sunlight falling on the photo, which creates harsh glare.`,
      },
      {
        title: 'Use the Notes app scanner for quick single photos',
        content: `On iPhone, open the Notes app, create a new note, tap the camera icon → "Scan Documents." Place your photo on a flat surface with a contrasting background. The yellow box will detect the photo edges automatically. For the best quality, hold the phone directly above the photo and parallel to it — even a slight angle distorts the image. Tap the shutter. The scan is saved in the note and can be shared as a PDF or image.`,
      },
      {
        title: 'Organize scans into Google Photos albums',
        content: `After scanning, open Google Photos and create albums to keep your digitized photos organized. Tap "Library" → "+" → "New album." Name it something like "Mom's 1970s Photos" or "Grandma Miller." Select the scanned photos and add them to the album. Then share the album with family members by tapping "Share" inside the album — they get a link to view and download all the photos. No social media account needed.`,
      },
      {
        title: 'For large batches, consider a mail-in scanning service',
        content: `If you have hundreds or thousands of printed photos, consider a professional scanning service. ScanMyPhotos.com and Legacybox are well-known mail-in services — you box up your photos, mail them, and receive them back with digital files on a USB drive or in a cloud download. Prices range from about $50 for 50 photos to a few hundred dollars for large collections. These services are legitimate and return your originals undamaged.`,
        tip: `Before mailing originals to any service, photograph every photo with your phone first as a backup. Also ask whether the service has insurance for lost or damaged originals.`,
      },
    ],
  },

  {
    slug: 'compress-pdf-free-guide',
    title: 'How to Make a PDF Smaller So You Can Email It',
    excerpt: `Large PDFs are often too big to email — here's how to compress any PDF for free on your phone or computer without special software.`,
    category: 'essential-skills',
    tags: ['PDF', 'compress PDF', 'email attachment', 'file size', 'free tools'],
    readTime: '4 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Email services like Gmail and Outlook typically limit attachments to 25 MB. Scanned documents, medical records, and multi-page PDFs often exceed this size. Compressing a PDF reduces its file size — often by 70–80% — without losing the text content. The result looks essentially the same on screen but is small enough to email. You can do this for free using a website, no software download required.`,
    steps: [
      {
        title: 'Use Smallpdf.com to compress a PDF online',
        content: `On any device, open a browser and go to smallpdf.com. Click "Compress PDF" on the home screen. Click "Choose File" and select your PDF from your phone or computer. Smallpdf compresses the file automatically. When finished, click "Download." The downloaded file will have "compressed" in the name. Smallpdf is free for occasional use — it processes your file and then deletes it from its servers after one hour.`,
        tip: `Smallpdf also has a mobile app if you prefer to keep everything on your phone. The free version handles most everyday compression tasks.`,
      },
      {
        title: 'Use ilovepdf.com as a free alternative',
        content: `ilovepdf.com is another free PDF compression website that works on any phone or computer. Go to ilovepdf.com → "Compress PDF." Upload your file, choose a compression level (Recommended is fine for most uses), and click "Compress PDF." Download the result. ilovepdf also offers PDF merging, splitting, and converting — all free and without creating an account.`,
      },
      {
        title: 'Compress a PDF on Mac using Preview',
        content: `Mac users do not need any website. Open the PDF in Preview (double-click the file). Go to File → Export as PDF. In the "Quartz Filter" dropdown, select "Reduce File Size." Click "Save." The exported file will be significantly smaller. Note: this can reduce image quality inside the PDF, so use the original quality if sharing medical documents where image clarity matters.`,
      },
      {
        title: 'Compress a PDF on iPhone using Files',
        content: `On iPhone, open the Files app and find your PDF. Press and hold it → tap "Quick Look" to preview it. To reduce its size: tap the Share icon → "Print." On the print preview screen, pinch your fingers outward on the preview — this creates a new PDF. Tap the Share button again → "Save to Files." This method produces a smaller PDF suitable for emailing. For larger reductions, use Smallpdf.com on your phone's browser.`,
      },
    ],
  },

  {
    slug: 'merge-pdf-files-free',
    title: 'How to Combine Multiple PDFs Into One File',
    excerpt: `If you have several PDF documents that belong together — like multiple pages from a scanner — here's how to merge them into one PDF for free.`,
    category: 'essential-skills',
    tags: ['PDF', 'merge PDF', 'combine PDF', 'documents', 'free tools'],
    readTime: '4 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `When you scan a multi-page document one page at a time, or receive several related PDFs from different sources, you often end up with a handful of separate files that should be one. Merging PDFs brings them all together into a single document that is easier to share and keep organized. This can be done for free on any device using a browser, without downloading any software.`,
    steps: [
      {
        title: 'Merge PDFs online with ilovepdf.com',
        content: `Go to ilovepdf.com → "Merge PDF." Click "Select PDF files" and choose all the PDFs you want to combine. You can select multiple files at once by holding the Ctrl key (Windows) or Command key (Mac) while clicking. Once uploaded, drag and drop the files to put them in the order you want. Click "Merge PDF." Download the combined file. The process is free and takes about 30 seconds for most documents.`,
      },
      {
        title: 'Merge PDFs on a Mac using Preview',
        content: `Open the first PDF in Preview. Go to View → Thumbnails to see the page list on the left. Open the second PDF in a separate Preview window. Drag its thumbnail pages from the left panel into the first document's thumbnail panel — drop them after the last page of the first document. Repeat for any additional PDFs. When done, go to File → Export as PDF and save the combined document. No internet connection needed.`,
        tip: `You can also rearrange individual pages this way — drag them up or down in the thumbnail view to reorder them before saving.`,
      },
      {
        title: 'Merge PDFs on an iPhone using the Files app',
        content: `On iPhone, open the Files app. Press and hold the first PDF → "Select." Tap the other PDFs you want to combine (check marks appear). Tap the Share icon at the bottom left → "Create PDF." iOS combines the selected files into one PDF. Tap the Share icon on the new PDF to save it or send it. Note: this works best for PDFs that are already on your iPhone — if they are in email, save them to Files first by long-pressing an attachment and tapping "Save to Files."`,
      },
      {
        title: 'Use Smallpdf for larger or more complex merges',
        content: `For more than 5 PDFs or files over 50 MB total, smallpdf.com handles larger merges more reliably than most free options. Go to smallpdf.com → "Merge PDF." Upload all your files, rearrange as needed, and click "Merge PDF." The free version allows occasional merges without an account. For frequent use, Smallpdf's paid plan ($9/month) removes all restrictions.`,
      },
    ],
  },

  {
    slug: 'ipad-buying-guide-seniors',
    title: 'How to Choose the Right iPad — A Guide for Older Adults',
    excerpt: `There are four different iPad models at very different prices — here's which one makes sense depending on what you want to use it for.`,
    category: 'phone-guides',
    tags: ['iPad', 'tablet', 'Apple', 'buying guide', 'seniors', 'which iPad'],
    readTime: '6 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple sells four iPad models at very different prices, and the differences matter. If you mainly want to video chat with grandchildren, browse the web, and read e-books, the least expensive option works perfectly. If you want a bigger screen for watching shows, or plan to use it for art or professional tasks, a different model makes more sense. This guide cuts through the marketing language to tell you what actually matters for most people.`,
    steps: [
      {
        title: 'The iPad (standard) — best for most people',
        content: `The base iPad starts around $329 for the 11-inch model. It handles video calls, web browsing, email, streaming TV, reading, and most apps with no trouble at all. The screen is bright and large enough for comfortable use. Battery life lasts 10 hours of active use. For someone new to tablets or who uses one mainly for communication and media, this is the right choice. Spending more does not significantly improve the experience for these uses.`,
        tip: `Buy with at least 128 GB of storage. The base 64 GB fills up faster than expected once you add photos, apps, and offline videos for travel.`,
      },
      {
        title: 'The iPad mini — for portability',
        content: `The iPad mini has a smaller 8.3-inch screen and starts around $499. It fits in a large purse or coat pocket, making it more portable than other iPads. The screen is smaller, which some people find harder to read, but others prefer because the device is lighter to hold. It is a good choice for people who want something smaller than a standard iPad but larger than a phone. Not recommended if you plan to watch a lot of video or have any vision concerns.`,
      },
      {
        title: 'The iPad Air — for more power at a mid-range price',
        content: `The iPad Air starts around $599 for an 11-inch model and has the same chip as the iPad Pro. It has a better camera than the base iPad, a USB-C port for faster accessories, and a more premium build. For most seniors, the extra power over the base iPad is not noticeable in everyday use. Consider it if you plan to use your iPad for photo editing, video calls for work, or as a drawing tablet with an Apple Pencil.`,
      },
      {
        title: 'The iPad Pro — for professionals (not most seniors)',
        content: `The iPad Pro starts at $999 and is Apple's most powerful iPad. It has a stunning OLED screen and the same chip as the latest Mac computers. For video calling, web browsing, and reading, it provides no meaningful benefit over the base iPad despite costing three times as much. It is worth considering only if you are a professional who needs to run demanding creative software, use it as a laptop replacement, or if you want the very best screen quality for drawing or video editing.`,
        warning: `Buying more iPad than you need is a common mistake. The standard iPad at $329 handles the vast majority of what most people use tablets for. Spending $999 on an iPad Pro will not make FaceTime calls any better.`,
      },
    ],
  },

  {
    slug: 'laptop-buying-guide-seniors',
    title: 'How to Choose a Laptop: A Plain-English Guide for Everyday Users',
    excerpt: `Windows laptops, MacBooks, and Chromebooks all have different strengths — here's how to pick the right one without overpaying for specs you won't use.`,
    category: 'essential-skills',
    tags: ['laptop', 'buying guide', 'windows', 'macbook', 'chromebook', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Buying a laptop can feel overwhelming when every product page is filled with numbers and abbreviations. The good news: for most everyday uses — web browsing, email, video calls, watching videos, and writing documents — any modern laptop from a reputable brand is more than capable. The decision mostly comes down to which type of computer fits how you already use technology.`,
    steps: [
      {
        title: 'Choose between Windows, Mac, or Chromebook first',
        content: `Windows laptops run Microsoft Windows — they have the widest variety of software, come in every price range, and are familiar to anyone who has used a desktop PC. MacBooks run macOS — they work especially well with iPhones and iPads (AirDrop, iMessage on Mac, Handoff features) and are known for reliability and longevity, but cost more. Chromebooks run Chrome OS — they are designed primarily for web browsing and Google apps (Gmail, Google Docs, YouTube). They are inexpensive, very simple to use, and nearly immune to viruses, but limited for tasks that require offline software.`,
        tip: `If you use an iPhone, a MacBook makes your digital life feel seamlessly connected. If you use Android, a Windows laptop or Chromebook pairs well with Google's services.`,
      },
      {
        title: 'What specs actually matter for most users',
        content: `For everyday use, focus on: RAM — 8 GB is the minimum; 16 GB is comfortable for keeping many tabs and apps open. Storage — 256 GB is the minimum; 512 GB gives room for photos and documents. Processor — any current Intel Core i5, AMD Ryzen 5, or Apple M-series chip is fast enough for everyday tasks. Screen size — 13–14 inches is portable; 15–16 inches is better for those who prefer larger text. Battery life — look for 10+ hours of real-world use; manufacturers' claims are often optimistic.`,
      },
      {
        title: 'Recommended options by budget',
        content: `Budget ($200–$400): Chromebook from Lenovo or HP — ideal for Google-centric users who browse, email, and video call. Mid-range Windows ($400–$700): HP Pavilion, Lenovo IdeaPad, or Dell Inspiron — reliable, capable, and widely supported. Premium Windows ($700–$1,200): Dell XPS 13, HP Spectre, Lenovo ThinkPad — better screens, build quality, and battery life. MacBook Air M-series ($1,099+): excellent for longevity (typically 6–8 years of useful life) and iPhone integration. For most seniors on a moderate budget, a mid-range Windows laptop from HP, Lenovo, or Dell covers everything they need.`,
      },
      {
        title: 'Questions to ask before buying',
        content: `Ask yourself: Do I need to use specific software (like TurboTax, QuickBooks, or a specific medical records system)? If yes, confirm it runs on your chosen platform. Do I already use Google or Apple services heavily? Match your laptop to those ecosystems. Will I carry this laptop regularly? Favor lighter 13-inch models. Is price the priority? A Chromebook handles email, video calls, and web browsing at the lowest cost. Will I need help if something goes wrong? Apple Stores provide in-person Genius Bar support; Microsoft Stores are in many malls; Best Buy Geek Squad helps with Windows laptops.`,
      },
    ],
  },

  {
    slug: 'windows-11-tips-for-seniors',
    title: '10 Windows 11 Tips That Make Your Computer Easier to Use',
    excerpt: `Windows 11 added several features that help with readability, organization, and productivity — here's how to use the best ones right away.`,
    category: 'windows-guides',
    tags: ['windows 11', 'tips', 'seniors', 'accessibility', 'productivity', 'desktop'],
    readTime: '6 min',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Windows 11 looks different from older versions of Windows, but it includes many features that make computers genuinely easier to use — especially for those who want larger text, better organization, or voice-based interaction. Most of these features are already installed on your computer; they just need to be turned on or discovered.`,
    steps: [
      {
        title: 'Make everything larger with Display Scaling',
        content: `If text and icons are too small, right-click anywhere on your desktop → Display Settings → Scale. Change the scale from 100% to 125% or 150%. Everything on the screen — text, icons, and buttons — will grow larger without changing the resolution. For even larger text only: go to Settings → Accessibility → Text size and drag the slider to your preference. These settings are independent, so you can increase text size without enlarging everything else.`,
        tip: `For the most comfortable reading experience on a standard monitor, most people over 60 find 125% scaling with size 14+ text the best combination.`,
      },
      {
        title: 'Use Snap Layouts to organize open windows',
        content: `When you hover your mouse over the maximize button (the square icon at the top right of any window), a grid of layout options appears. Click any layout zone to snap the current window into that position. You can split your screen into two side-by-side windows, or arrange three or four at once. This is great for having a video call on one side and your notes on the other, or comparing two documents. To return a window to full screen, click the maximize button normally.`,
      },
      {
        title: 'Pin your most-used apps to the taskbar',
        content: `The taskbar at the bottom of the screen shows your open apps, but you can also pin apps you use regularly so they are always one click away. Find the app you want to pin by clicking the Start button (Windows logo) and searching for it. Right-click the app's icon → "Pin to taskbar." It will appear in your taskbar permanently. To remove a pinned app: right-click it in the taskbar → "Unpin from taskbar."`,
      },
      {
        title: 'Use Windows + V for a clipboard history',
        content: `Windows 11 keeps a history of everything you have copied (text, images, links). Press the Windows key and V together to see the clipboard history panel. Click any previous item to paste it. This is useful when you are filling out forms and need to paste several different pieces of text one after another. Turn it on first: Windows Settings → System → Clipboard → "Clipboard history" toggle on.`,
      },
      {
        title: 'Set up Windows Hello for fast, secure sign-in',
        content: `Windows Hello lets you sign into your laptop using your face or fingerprint instead of typing a password. Go to Settings → Accounts → Sign-in options. If your laptop has a camera or fingerprint sensor, you will see options for "Facial recognition (Windows Hello)" or "Fingerprint recognition (Windows Hello)." Click "Set up" and follow the prompts — it takes about 60 seconds. After setup, your laptop unlocks when you sit down and look at the camera, or touch the fingerprint sensor.`,
      },
    ],
  },

  {
    slug: 'mac-tips-everyday-users',
    title: '10 Mac Tips That Make Your Computer Easier to Use Every Day',
    excerpt: `Every Mac has built-in features most users never discover — here are the best ones for making your Mac faster, easier to read, and better organized.`,
    category: 'mac-guides',
    tags: ['mac', 'macbook', 'tips', 'productivity', 'accessibility', 'everyday use'],
    readTime: '6 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Macs come with dozens of features that are hidden in plain sight — tools for making text larger, finding anything instantly, controlling your Mac with your voice, and sharing content wirelessly with your iPhone. Most people use only a fraction of what their Mac can do. These ten tips focus on the features that genuinely change daily use for the better.`,
    steps: [
      {
        title: 'Use Spotlight to find anything instantly',
        content: `Press Command + Space to open Spotlight search. Type any file name, app name, or question. Spotlight finds files on your Mac, opens apps, answers math calculations ("15% of 84"), converts units ("50 miles in kilometers"), looks up word definitions, and searches the web — all without opening a browser. It is the fastest way to get to anything on a Mac without clicking through folders. Think of it as a search bar for your entire computer.`,
        tip: `Spotlight also searches your emails, calendar events, and text messages (if you have iMessage on your Mac). Type a person's name to see all correspondence with them across every app.`,
      },
      {
        title: 'Increase text size everywhere with Display Settings',
        content: `Go to Apple menu → System Settings → Displays → Resolution. Move the slider toward "Larger Text" — this makes everything on the screen larger including menu text, icons, and content. For only increasing text size in specific apps: in Safari, press Command + Plus (+) to zoom in on any webpage. In Mail: go to Mail → Settings → Fonts & Colors and increase the font size. In Messages: go to Messages → Settings → General → Text Size.`,
      },
      {
        title: 'Use Hot Corners to control your Mac with your mouse',
        content: `Hot Corners let you trigger actions by moving your mouse to any corner of the screen. Go to System Settings → Desktop & Dock → scroll to bottom → Hot Corners. Set the top-right corner to "Notification Center," the bottom-left to "Sleep Display," and the bottom-right to "Launchpad" (shows all your apps). Now you can put your Mac to sleep by flicking the mouse to one corner, or see all apps by flicking to another — no clicking required.`,
      },
      {
        title: 'Use AirDrop to send files to your iPhone instantly',
        content: `AirDrop lets you wirelessly transfer photos, documents, and files between your Mac and any nearby iPhone or iPad — no email or cables needed. On your Mac, open Finder → AirDrop. On your iPhone, swipe down to Control Center and make sure WiFi and Bluetooth are on. Drag any file from your Mac onto the person's icon in the AirDrop window, or right-click any file → Share → AirDrop. The transfer takes seconds for most files.`,
      },
      {
        title: 'Use the built-in magnifier if text is hard to read',
        content: `macOS has a built-in screen magnifier that zooms in on any part of the screen. Go to System Settings → Accessibility → Zoom. Turn on "Use scroll gesture with modifier keys to zoom" and select "Control" as the modifier key. Now hold the Control key and scroll up with your mouse or trackpad to zoom into any part of the screen. Scroll down to zoom back out. This magnifier works everywhere — in any app, browser, or video — and is much more flexible than just increasing text size.`,
      },
    ],
  },

  {
    slug: 'organize-google-drive-guide',
    title: 'How to Organize Your Google Drive So You Can Find Files Easily',
    excerpt: `Google Drive stores files in the cloud, but without organization it becomes a cluttered mess — here's how to set up folders and keep things tidy.`,
    category: 'essential-skills',
    tags: ['Google Drive', 'cloud storage', 'file organization', 'google', 'documents'],
    readTime: '5 min',
    thumbnailEmoji: '📁',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Drive gives you 15 GB of free cloud storage where you can keep documents, photos, PDFs, and files that are accessible from any phone or computer when you sign into your Google account. Many people use Google Drive for years but never organize it, making it hard to find anything. A simple folder structure and a few habits keep it organized permanently.`,
    steps: [
      {
        title: 'Create a simple folder structure',
        content: `Open drive.google.com in a browser or the Google Drive app. Click "New" (or the plus button on mobile) → "Folder." Create one folder for each major area of your life. A simple structure that works for most people: "Health" (medical records, insurance EOBs, doctor letters), "Finance" (tax documents, bank statements, bills), "Personal" (family documents, recipes, notes), "Photos" (any photos you save here), "Work or Volunteer" (if applicable). You do not need many folders — broad categories are better than dozens of narrow ones.`,
        tip: `Name folders with clear, plain labels like "Medical Records 2026" rather than abbreviations. Future-you will not remember what "MR-docs-v2" means.`,
      },
      {
        title: 'Move existing files into folders',
        content: `On drive.google.com: right-click any file → "Move to" → select a folder. On the Google Drive app: press and hold a file → tap the three dots → "Move to" → select a folder. Move the most important documents first, then gradually sort through the rest. You do not need to organize everything in one session — even getting your important health and financial documents into the right folders is a meaningful improvement.`,
      },
      {
        title: 'Use the search bar to find anything instantly',
        content: `If you cannot remember where you put a file, type its name or a keyword into the search bar at the top of Google Drive. Google's search is excellent — it can search inside documents too, not just file names. For example, searching "Dr. Smith" might find a letter that mentions your doctor even if the file is named "scan001.pdf." Tap the microphone icon in the search bar to search by voice on your phone.`,
      },
      {
        title: 'Share folders with family members',
        content: `Google Drive lets you share folders with family members so they always have access to important documents. Right-click a folder → "Share" → enter a family member's email address → choose whether they can "Viewer" (view only) or "Editor" (can add/change files). A shared "Family Documents" folder could contain insurance cards, emergency contacts, and wills so trusted family members can access them when needed without having to ask.`,
        warning: `Only share sensitive documents (Social Security cards, passwords, financial records) with people you completely trust. Once you share a folder with someone, they can view everything inside it.`,
      },
    ],
  },

  {
    slug: 'organize-phone-photos-guide',
    title: 'How to Organize the Photos on Your Phone (and Clear Out the Clutter)',
    excerpt: `Most phones have thousands of photos with no organization — here's how to sort them into albums, delete duplicates, and find what you're looking for.`,
    category: 'tips-tricks',
    tags: ['photos', 'photo organization', 'albums', 'iphone', 'android', 'google photos', 'icloud'],
    readTime: '5 min',
    thumbnailEmoji: '🗂️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you take a lot of photos, your camera roll can quickly grow to thousands of images — screenshots, duplicate shots, blurry photos, and pictures you will never look at again mixed in with cherished memories. A few hours of organization can make your photo library genuinely enjoyable to browse, free up storage space, and make finding specific photos much faster.`,
    steps: [
      {
        title: 'Delete obvious throwaways first',
        content: `Before organizing, delete the photos that have no value: blurry shots, photos of receipts you have already processed, screenshots you no longer need, and accidental photos. On iPhone: open Photos → Library → tap a blurry or unwanted photo → trash icon. On Android: open Google Photos → tap the photo → trash icon. To bulk-delete: on iPhone, tap "Select" in the top right and tap multiple photos, then tap the trash icon. Try to delete at least 10–20% of your library in this first pass.`,
        tip: `Check your "Recents" or "Screenshots" album first — screenshots accumulate quickly and are often forgotten. Most people can delete 50–100 screenshots safely.`,
      },
      {
        title: 'Create albums for your most important memories',
        content: `On iPhone: open Photos → tap "Albums" at the bottom → the plus (+) icon → "New Album." Name it (like "Grandchildren 2025" or "Vacation Oregon"). Tap "Add Photos" and select photos for that album. On Android/Google Photos: tap "Library" → "Albums" → "Create album." Albums do not duplicate your photos — they are just collections that point to existing photos. The original stays in your main library.`,
      },
      {
        title: 'Use Google Photos to automatically organize by people and places',
        content: `Google Photos automatically groups your photos by people using face recognition, and by location using the photo's location data. Open Google Photos → "Search" at the bottom. You will see categories like "People & Pets" (tap to see a gallery of each person's photos automatically grouped) and "Places" (shows photos organized by city and country). No manual sorting needed — Google does it automatically as long as photos are backed up to Google Photos.`,
      },
      {
        title: 'Set up automatic backup so you never lose photos',
        content: `iPhone: go to Settings → your name → iCloud → Photos → turn on "iCloud Photos." This backs up every photo to your iCloud account. Android: open Google Photos → tap your profile picture → "Photos settings" → "Backup" → turn on "Backup." Both services keep your photos safe in the cloud. iCloud gives 5 GB free (upgrades are $0.99/month for 50 GB). Google Photos gives 15 GB free (shared with Gmail and Drive). Either service means even if your phone is lost or broken, your photos are safe.`,
      },
    ],
  },

  {
    slug: 'delete-duplicate-photos-guide',
    title: 'How to Find and Delete Duplicate Photos Taking Up Space on Your Phone',
    excerpt: `Duplicate photos can take up gigabytes of storage — here's how to find and remove them on iPhone and Android without accidentally deleting originals.`,
    category: 'tips-tricks',
    tags: ['duplicate photos', 'storage', 'iphone', 'android', 'google photos', 'photo cleanup'],
    readTime: '4 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Phones can accumulate thousands of duplicate photos over the years — when you back up and restore a phone, screenshots taken from shared images, or photos saved from messaging apps that already exist in your camera roll. These duplicates waste storage space and make your photo library harder to navigate. Both iPhone and Android have built-in tools to find and remove duplicates automatically.`,
    steps: [
      {
        title: `Use iPhone's built-in Duplicates finder`,
        content: `On iPhone running iOS 16 or later, the Photos app automatically identifies duplicate photos for you. Open Photos → tap "Albums" at the bottom → scroll down to find "Duplicates" under the Utilities section. If your phone found duplicates, they appear here in pairs with a "Merge" button. Tapping "Merge" keeps the highest quality version of each duplicate pair and deletes the other. Tap "Merge All" to remove all duplicates at once, or review each pair before merging.`,
        tip: `After merging duplicates, the deleted copies go to the "Recently Deleted" album, where they stay for 30 days before being permanently removed. If you merged something by mistake, you can recover it within 30 days.`,
      },
      {
        title: 'Use Google Photos to find similar photos on Android',
        content: `Google Photos can find nearly identical photos — like multiple shots of the same scene taken in burst mode. Open Google Photos → Library → "Manage storage" → "Review and delete." Google categorizes items as Blurry photos, Screenshots, and Similar photos. Tap "Similar photos" to see groups of nearly identical shots. Review each group and select the ones to delete (usually keeping the sharpest one). Tap "Move to trash" for the ones you want removed.`,
      },
      {
        title: 'Use a third-party app for a deeper duplicate scan',
        content: `For a more thorough scan, a dedicated app works better. Gemini Photos (iPhone, $2.99/month or $19.99/year) scans your entire library for duplicates, similar photos, and low-quality shots, organizing them into categories for easy review and deletion. Smart Cleaner (Android, free with ads) does a similar scan. Both apps require you to confirm deletions before anything is removed permanently.`,
      },
      {
        title: 'Check how much space you recovered',
        content: `After deleting duplicates and clearing the Recently Deleted album, check your storage. On iPhone: Settings → General → iPhone Storage — you will see how much space photos and videos now use. On Android: Settings → Storage. Also go to Photos → Albums → Recently Deleted and tap "Delete All" to free the space immediately (normally, deleted photos stay in this album for 30 days, counting against your storage the whole time).`,
      },
    ],
  },

  {
    slug: 'free-up-icloud-storage',
    title: 'How to Free Up iCloud Storage Space Without Paying for More',
    excerpt: `When your iCloud storage is full, your iPhone stops backing up — here's how to clear space for free instead of upgrading to a paid plan.`,
    category: 'phone-guides',
    tags: ['iCloud', 'storage', 'iphone', 'backup', 'free storage', 'apple'],
    readTime: '5 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Every Apple ID includes 5 GB of free iCloud storage — enough for the basics, but easy to fill up with photos, backups, and messages. When iCloud is full, your iPhone stops backing up, and Apple sends alerts saying "iCloud storage is full." Before paying for more storage, there are several ways to reclaim significant space for free. This guide covers the fastest and most effective ones.`,
    steps: [
      {
        title: 'See what is using your iCloud storage',
        content: `Go to Settings → your name → iCloud → "Manage Account Storage" (or "Manage Storage"). You will see a breakdown of everything using your iCloud: Backups (usually the largest), Photos, Messages, and individual apps. Tap "Backups" to see backups from all your devices — if you have an old iPhone listed that you no longer own, delete that backup. Tap the old device → "Delete Backup" to reclaim that space immediately.`,
      },
      {
        title: 'Delete old device backups',
        content: `Each iPhone backup stored in iCloud can be 2–8 GB or more. If you replaced your phone and the old backup is still sitting in iCloud, deleting it is the fastest way to free significant space. Go to Settings → your name → iCloud → Manage Storage → Backups → tap any backup for a device you no longer own → "Delete Backup." The current device's backup is the one with today's or yesterday's date — keep that one.`,
        tip: `After deleting old backups, your current iPhone backup will still work normally. You are only deleting records from old devices that you no longer use.`,
      },
      {
        title: 'Reduce the size of your iPhone backup',
        content: `Go to Settings → your name → iCloud → Manage Storage → Backups → your current iPhone. You will see a list of apps and how much backup space each one uses. Toggle off any apps that do not need to be backed up — game apps, streaming apps, and apps that store data on their own servers (like Spotify or Netflix) are safe to exclude. Turning off iCloud backup for your Photos is not recommended since that is often the most important data to protect.`,
      },
      {
        title: 'Move photos to Google Photos to free iCloud space',
        content: `If photos are your main storage drain, consider backing them up to Google Photos instead of (or in addition to) iCloud. Google Photos gives 15 GB free — three times more than iCloud's free tier. Download the Google Photos app, sign in with your Google account, and enable backup. Once your photos are backed up to Google Photos, you can turn off iCloud Photos (Settings → your name → iCloud → Photos → toggle off). This can free several gigabytes of iCloud space.`,
        warning: `Only turn off iCloud Photos after confirming all your photos have fully backed up to Google Photos. Open Google Photos and check that recent photos appear before making any changes to iCloud settings.`,
      },
    ],
  },

  {
    slug: 'marco-polo-video-messaging',
    title: 'How to Use Marco Polo to Send Video Messages to Family',
    excerpt: `Marco Polo lets you send short video messages that family can watch whenever they want — perfect for staying connected across time zones or busy schedules.`,
    category: 'communication',
    tags: ['marco polo', 'video messages', 'family', 'communication', 'async video'],
    readTime: '4 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Marco Polo is a free app that lets you record and send short video messages — like video voicemail. Unlike FaceTime or Zoom, both people do not have to be available at the same time. You record a message and send it; the other person watches it and records a reply when they are ready. It is popular with families spread across different time zones, grandparents staying connected with grandchildren, and anyone who wants to share a moment without scheduling a call.`,
    steps: [
      {
        title: 'Download Marco Polo and create your account',
        content: `Marco Polo is free in the App Store and Google Play. Search for "Marco Polo — Video Messaging." Open the app and enter your phone number. You will receive a verification text with a code — enter it. Add your name and an optional profile photo. The app will show you which of your contacts also use Marco Polo. Marco Polo works only with people who also have the app — but it is free, so inviting family members costs nothing.`,
      },
      {
        title: 'Send your first video message',
        content: `Tap a contact's name to open a conversation. Press and hold the large camera button at the bottom of the screen. While holding it, speak to the camera like you are talking to the person — "Hi Mom, I was thinking of you today and wanted to show you the garden. Look at these tomatoes!" Release the button to stop recording. The video sends automatically. You can record multiple clips in one conversation — tap and hold again to add another video to the same chat.`,
        tip: `You do not need to look perfect on camera. Marco Polo is meant for casual, unscripted moments — most people use it like they would a text conversation, just in video form.`,
      },
      {
        title: 'Watch messages sent to you',
        content: `When someone sends you a Marco Polo, you get a notification. Open the app and tap the conversation with a blue dot (indicating unwatched messages). The video plays automatically. After it plays, you can record a reply immediately or come back to it later. You can also tap the screen while a video is playing to add a reaction (heart, laugh, clap), which the sender will see.`,
      },
      {
        title: 'Start a group conversation for family updates',
        content: `Marco Polo supports group conversations — tap the compose button → "New Group" → add family members. In a group, anyone can post a video and everyone sees it. This works well for keeping a whole family connected without everyone having to be on a call at the same time. Grandparents can post videos of what they are up to; grandchildren can send videos from school events. Everyone checks in at their own pace.`,
      },
    ],
  },

  {
    slug: 'medicare-extra-help-program',
    title: 'Medicare Extra Help: How to Get Help Paying for Prescription Drug Costs',
    excerpt: `If you have Medicare and a limited income, the Extra Help program can lower or eliminate your out-of-pocket costs for prescription drugs — here's how to apply.`,
    category: 'government-civic',
    tags: ['medicare', 'extra help', 'LIS', 'prescription drugs', 'low income', 'Medicare Part D'],
    readTime: '6 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Extra Help (also called the Low Income Subsidy or LIS) is a Medicare program that helps people with limited income and resources pay for their prescription drug costs under Medicare Part D. In 2026, qualifying for Extra Help can save you an average of $5,900 per year on prescription drug costs. About 13 million people qualify, but millions more are eligible and not enrolled. Eligibility is based on income and savings, not on age alone.`,
    steps: [
      {
        title: 'See if you qualify',
        content: `In 2026, you may qualify for Extra Help if your monthly income is below approximately $1,903 (single) or $2,575 (married couple), and your savings and investments (excluding your home, one car, and personal belongings) are below about $17,220 (single) or $34,360 (couple). These limits change each year. The best way to get an exact determination is to apply — the application itself is free and there is no penalty for being denied. Medicare will check your income using Social Security and IRS records.`,
        tip: `Even if you think your income is slightly too high, apply anyway — the limits include deductions for certain expenses that may not be obvious, and some applicants are surprised to qualify.`,
      },
      {
        title: 'Apply online, by phone, or by mail',
        content: `Online: go to ssa.gov/medicare/part-d/extra-help and click "Apply for Extra Help." Phone: call the Social Security Administration at 1-800-772-1213 (TTY: 1-800-325-0778). Mail: request a paper application by calling the SSA. You will need your Social Security number, information about your monthly income (Social Security payments, pension, wages), and the value of your savings accounts, investments, and any real estate other than your primary home.`,
      },
      {
        title: 'What Extra Help covers',
        content: `If approved for Full Extra Help: you pay no monthly premium for a qualifying drug plan, no deductible, and only a small copay ($1–$11 for most drugs in 2026). If approved for Partial Extra Help: you pay reduced premiums and a smaller deductible and copay than you would without assistance. You will be automatically enrolled in a drug plan that qualifies for Extra Help if you are approved. You can switch plans during open enrollment if you prefer a different one.`,
      },
      {
        title: 'Automatically qualify without applying',
        content: `Some people are automatically eligible for Extra Help without applying: if you have Medicaid (the state health insurance for low-income people), you receive Supplemental Security Income (SSI), or you live in a Medicare Savings Program. If you fall into one of these categories, you are already receiving Extra Help or will be enrolled automatically when you enroll in Medicare Part D. If you are not sure, call your State Health Insurance Assistance Program (SHIP) — find your state's number at shiphelp.org — for free, unbiased advice.`,
      },
    ],
  },

  {
    slug: 'lifeline-free-phone-service',
    title: 'How to Get Free or Discounted Phone Service Through the Lifeline Program',
    excerpt: `The Lifeline program provides up to $9.25/month toward phone or internet service for qualifying low-income households — here's how to apply.`,
    category: 'government-civic',
    tags: ['lifeline', 'free phone', 'low income', 'government assistance', 'ACP', 'phone bill'],
    readTime: '5 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Lifeline is a federal program managed by the FCC that provides eligible low-income households with a discount of up to $9.25 per month on phone or internet service. The discount applies to your monthly bill from a participating carrier. In some states, the discount is larger due to additional state contributions. The program is designed to keep phone and internet access affordable for households with limited incomes.`,
    steps: [
      {
        title: 'Check if you qualify for Lifeline',
        content: `You qualify for Lifeline if your household income is at or below 135% of the Federal Poverty Level, or if you (or someone in your household) participate in one of these programs: Medicaid, SNAP (food stamps), Supplemental Security Income (SSI), Federal Public Housing Assistance, or Veterans Pension and Survivors Benefits. You qualify automatically through any of these programs — you do not need to submit income documentation.`,
        tip: `Only one Lifeline discount is allowed per household — not per person. If someone in your home already receives Lifeline, you cannot apply for a second discount at the same address.`,
      },
      {
        title: 'Apply through the National Verifier',
        content: `Go to lifelineapply.gov — this is the official government application website managed by the Universal Service Administrative Company (USAC). You will need: your name, date of birth, last 4 digits of your Social Security number or Tribal ID, current address, and documentation of your qualifying program (like a Medicaid card or SNAP letter). The National Verifier instantly approves most applicants. After approval, you choose a participating provider.`,
      },
      {
        title: 'Choose a Lifeline provider in your area',
        content: `After applying, search for participating carriers in your area on lifelineapply.gov or at usac.org/lifeline. Major carriers including Assurance Wireless (a T-Mobile program), SafeLink Wireless (TracFone), and some regional carriers offer Lifeline plans. Some plans provide a free smartphone and free monthly minutes and data. Others apply the discount to an existing account you already have. Prices and plans vary by state and carrier.`,
      },
      {
        title: 'Renew your Lifeline benefit annually',
        content: `Lifeline requires annual recertification — each year, you confirm you still meet the eligibility requirements. USAC sends a reminder letter or email when renewal is due. Recertify online at lifelineapply.gov, by calling your carrier, or by completing a mailed form. If you do not recertify within the deadline, your discount will be removed. Set a calendar reminder for your renewal date when you first enroll.`,
        warning: `Lifeline benefits cannot be combined with the Affordable Connectivity Program (ACP), which ended in June 2024. Lifeline remains active and accepting new enrollees as of 2026.`,
      },
    ],
  },

  {
    slug: 'snap-ebt-benefits-guide',
    title: 'How to Use Your SNAP EBT Card and Check Your Balance',
    excerpt: `SNAP benefits are loaded onto an EBT card each month — here's how to use it at the grocery store, check your balance, and use it for online grocery orders.`,
    category: 'government-civic',
    tags: ['SNAP', 'EBT', 'food stamps', 'benefits', 'grocery', 'government assistance'],
    readTime: '5 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `SNAP (Supplemental Nutrition Assistance Program, formerly called food stamps) provides monthly food benefits on an EBT (Electronic Benefits Transfer) card. The card works like a debit card at most grocery stores, supermarkets, and some farmers markets. SNAP benefits are automatically reloaded onto the card each month on a schedule set by your state. Understanding how to check your balance and use your EBT card online can make managing your benefits much easier.`,
    steps: [
      {
        title: 'Use your EBT card at checkout',
        content: `At a participating grocery store, when you are ready to pay, tell the cashier you are paying with EBT. Swipe or insert your EBT card in the card reader. Select "EBT Food" when prompted. Enter your 4-digit PIN. The amount is deducted from your SNAP balance. You will receive a receipt showing your remaining balance. SNAP can be used for most food items — fruits, vegetables, meat, dairy, bread, cereal, and seeds or plants to grow food. SNAP cannot be used for alcohol, tobacco, vitamins, hot prepared foods, or non-food items.`,
        tip: `If you forget your PIN or need to change it, call the number on the back of your EBT card. Do not write your PIN on your card or share it with anyone.`,
      },
      {
        title: 'Check your SNAP balance',
        content: `Your EBT balance appears on your receipt after each purchase. You can also check your balance: by calling the toll-free number on the back of your EBT card (available 24 hours), through your state's EBT website or app (search your state name + "EBT balance" or "ConnectEBT"), or through the free ConnectEBT app (App Store and Google Play), which shows your current balance and transaction history for most states.`,
      },
      {
        title: 'Use SNAP benefits for online grocery orders',
        content: `As of 2026, SNAP EBT is accepted online at Amazon Fresh, Walmart.com, and several other grocery websites. To use it on Amazon: go to amazon.com/snap → add your EBT card under "Add a card" → when checking out, select your EBT card as the payment method and enter your PIN. You can order grocery delivery or pickup. Amazon Prime membership is not required for EBT grocery orders — Amazon offers a discounted Prime membership ($7.49/month vs. $14.99) for SNAP recipients.`,
      },
      {
        title: 'Report a lost or stolen EBT card immediately',
        content: `If your EBT card is lost or stolen, call the number on your state's EBT customer service line immediately (available 24 hours). They will cancel the card and mail a replacement, usually within 3–5 business days. Your SNAP balance is protected — any unused benefits carry over to the new card. In most states, you can report a lost card and check your balance through your state's EBT website or the ConnectEBT app without needing to call.`,
      },
    ],
  },

  {
    slug: 'neighborhood-community-apps',
    title: 'Nextdoor vs Facebook Groups vs Ring Neighbors: Which Community App Is Right for You',
    excerpt: `Several apps connect neighbors online — here's what each one is best for and how to use them to stay informed about your local community.`,
    category: 'social-media',
    tags: ['nextdoor', 'facebook groups', 'community app', 'neighbors', 'local news', 'ring neighbors'],
    readTime: '5 min',
    thumbnailEmoji: '🏘️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Several apps connect you with people in your neighborhood — for sharing local news, finding recommendations, selling items, or watching for safety concerns. Each one has a different purpose and community culture. Knowing the strengths of each helps you choose the one (or two) that fit what you are looking for.`,
    steps: [
      {
        title: 'Nextdoor — for general neighborhood conversation',
        content: `Nextdoor is the most widely used neighborhood social network. You join by verifying your home address, then you see posts only from people in your immediate neighborhood and surrounding areas. People use it for: recommending local contractors, plumbers, and restaurants; giving away or selling household items; lost and found pets; asking questions about local events or road closures; and sharing safety information like package theft alerts. Nextdoor is free — go to nextdoor.com or the Nextdoor app. Verification takes about 2 minutes using your address.`,
        tip: `Nextdoor's Urgency Alert feature lets neighbors mark posts as urgent safety concerns, which push-notifies everyone in the area. It is commonly used for burglary alerts or missing persons.`,
      },
      {
        title: 'Facebook Groups — for community organizations and events',
        content: `If you already use Facebook, local Facebook Groups are often more active than Nextdoor in many communities — especially for neighborhood associations, church groups, civic organizations, and local buy-sell-trade groups. Search for your city or neighborhood name in Facebook's search bar and look for the Groups tab. Common local groups: "[City] Buy Nothing," "[City] Community Forum," "[Neighborhood] Neighbors." Groups can be public, private (request to join), or secret (invite only). They tend to have more photos, events, and media than Nextdoor.`,
      },
      {
        title: 'Ring Neighbors — for safety-focused alerts',
        content: `Ring Neighbors is the community safety feature in the Ring app (available even without a Ring doorbell camera). It shows videos and photos of local safety incidents shared by neighbors with Ring cameras — package theft, suspicious activity, car break-ins. Go to the Ring app → Neighbors tab. You can set your alert radius from 0.5 to 5 miles. Ring Neighbors is more focused and less conversational than Nextdoor — it is purely for safety-related sharing and is connected to local law enforcement in some areas.`,
      },
      {
        title: 'Choosing the right one for your needs',
        content: `For recommendations and general community connection: Nextdoor. For buying, selling, and free items locally: Facebook Groups ("Buy Nothing" or "[City] Free & For Sale"). For safety alerts and crime watch: Ring Neighbors. For local events and organizations: Facebook Groups. Many people use both Nextdoor and a local Facebook Group — they serve slightly different purposes. You do not need to choose just one. Start with Nextdoor if you want a single app for neighborhood connection, and add Facebook Groups if you become more active in local community life.`,
      },
    ],
  },

  {
    slug: 'ssi-ssdi-difference-guide',
    title: `SSI vs SSDI: What's the Difference and Who Qualifies for Each`,
    excerpt: `SSI and SSDI are both Social Security programs, but they work very differently — here's a plain-English explanation of which you may qualify for.`,
    category: 'government-civic',
    tags: ['SSI', 'SSDI', 'social security', 'disability benefits', 'government benefits'],
    readTime: '6 min',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `SSI (Supplemental Security Income) and SSDI (Social Security Disability Insurance) are both programs managed by the Social Security Administration, but they have very different eligibility rules, funding sources, and benefit amounts. Many people confuse them or do not know which one they may qualify for. Understanding the key differences helps you know whether to apply and what to expect.`,
    steps: [
      {
        title: 'What is SSDI (Social Security Disability Insurance)',
        content: `SSDI is an insurance program funded by the Social Security taxes that workers pay throughout their careers. To qualify, you must: have worked and paid Social Security taxes for a certain number of years (the exact amount depends on your age when you become disabled), have a medical condition that meets Social Security's definition of disability (expected to last at least 12 months or result in death), and be unable to do any substantial work because of the condition. The monthly benefit amount is based on your lifetime earnings history — people who earned more while working receive higher SSDI payments.`,
        tip: `SSDI recipients automatically receive Medicare after a 24-month waiting period, which begins from when payments start.`,
      },
      {
        title: 'What is SSI (Supplemental Security Income)',
        content: `SSI is a needs-based program funded by general tax revenue (not Social Security taxes). It provides monthly payments to people who are 65 or older, blind, or have a disability — AND have very limited income and resources. You do not need a work history to qualify for SSI. In 2026, the maximum federal SSI benefit is approximately $943/month for an individual and $1,415 for a couple. Many states add a state supplement on top of the federal amount. SSI recipients usually qualify for Medicaid automatically.`,
      },
      {
        title: 'Can you receive both SSI and SSDI at the same time',
        content: `Yes — it is possible to receive both. This happens when someone qualifies for SSDI based on their work history but their SSDI payment is lower than the SSI limit. SSA calls this "concurrent benefits." For example, if someone's SSDI payment is $600/month but the SSI maximum is $943, they may receive SSI to make up the difference. SSA automatically determines if you qualify for both when you apply for either program.`,
      },
      {
        title: 'How to apply for SSI or SSDI',
        content: `Apply at any Social Security Administration office, by calling 1-800-772-1213, or online at ssa.gov/disability. The application asks about your medical conditions, work history, and income. SSDI applications typically include a review by a Disability Determination Services office in your state. Processing times average 3–6 months for an initial decision. If denied, you have the right to appeal — about 45% of initially denied claims are approved on appeal. The National Organization of Social Security Claimants' Representatives (nosscr.org) provides free attorney referrals for disability appeals.`,
      },
    ],
  },

  {
    slug: 'google-drive-backup-guide',
    title: 'How to Use Google Drive to Back Up Important Files and Access Them Anywhere',
    excerpt: `Google Drive stores your files in the cloud so they are safe and accessible from any device — here's how to save files to Drive and access them away from home.`,
    category: 'essential-skills',
    tags: ['google drive', 'cloud backup', 'file storage', 'google', 'backup files'],
    readTime: '5 min',
    thumbnailEmoji: '💾',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Drive is a free cloud storage service from Google that gives every Google account 15 GB of storage — enough for thousands of documents, PDFs, and photos. Files saved to Google Drive are automatically accessible from your phone, any computer, or a tablet simply by signing into your Google account. If your phone breaks or your computer dies, files in Google Drive are safe and retrievable immediately.`,
    steps: [
      {
        title: 'Access Google Drive on your phone',
        content: `On Android, Google Drive is pre-installed. Open it from your app drawer. On iPhone, download the free "Google Drive" app from the App Store. Sign in with your Google account (the same one you use for Gmail). Tap the plus (+) button to upload files from your phone, create a new Google Doc or Sheet, or take a photo to save directly to Drive. Files saved here appear on every device where you sign in with the same Google account.`,
      },
      {
        title: 'Save an important document to Google Drive',
        content: `To save a PDF, photo, or other file to Drive from your phone: open the file in any app, tap the Share icon, and look for "Save to Drive" or "Drive" in the sharing options. Choose which folder to save it to and tap "Save." To save directly from the Drive app: tap the plus (+) → "Upload" → browse to the file on your phone → select it. Uploaded files appear in Drive within a minute, depending on your internet connection.`,
        tip: `Scan important documents and save them to Google Drive as soon as you receive them — insurance cards, medical records, tax documents, passports. If you ever need a document urgently and cannot find the paper original, Drive has you covered.`,
      },
      {
        title: 'Access files from any computer',
        content: `On any computer, open a browser and go to drive.google.com. Sign in with your Google account. Your files appear exactly as they do on your phone. Click any file to open it — Google Docs, Sheets, and Slides open in the browser with no software required. PDFs open in a viewer. Photos open for viewing and downloading. You can print from drive.google.com if the computer has a printer connected.`,
      },
      {
        title: 'Share an important document with a family member',
        content: `Right-click any file in Google Drive → "Share." Type a family member's email address. Choose their access level: "Viewer" (they can see it but not change it) or "Editor" (they can modify it). Click "Send." They will receive an email with a link to the document. This is a good way to share health care proxies, emergency contact lists, or important medical records with family members who may need them in an emergency.`,
        warning: `Do not store passwords in a regular Google Doc — use a password manager app instead. Google Drive documents can be accessed by anyone you have shared them with, and sharing settings can sometimes be changed accidentally.`,
      },
    ],
  },

  {
    slug: 'ipad-tips-everyday-seniors',
    title: '8 iPad Features That Make It Easier to Use Every Day',
    excerpt: `iPads are popular with older adults for their large screens and intuitive design — here are 8 built-in features that make the experience even better.`,
    category: 'phone-guides',
    tags: ['iPad', 'tips', 'seniors', 'accessibility', 'Apple', 'display', 'text size'],
    readTime: '5 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `The iPad has become one of the most popular devices for adults over 60 because of its large, bright screen and straightforward interface. But many iPad owners never discover the built-in features that make it even easier to read, hear, and control — all included at no extra cost and already on your device.`,
    steps: [
      {
        title: 'Make text larger everywhere on the iPad',
        content: `Go to Settings → Display & Brightness → Text Size. Drag the slider to the right to make text larger in apps that support Dynamic Type. For even more control, go to Settings → Accessibility → Display & Text Size → Larger Text — turn this on and drag the slider to the maximum size you find comfortable. This changes text size across Mail, Messages, Calendar, Settings, and most apps. Not all apps support it, but most Apple apps and many third-party apps do.`,
      },
      {
        title: 'Use the Reading Focus filter for eye strain',
        content: `The iPad can reduce blue light in the evening to help with sleep and eye strain. Go to Settings → Display & Brightness → Night Shift. Set it to automatically turn on "From Sunset to Sunrise." This shifts the display to warmer yellow tones in the evening, which reduces the eye fatigue that bright blue-white screens cause in dim rooms. You can adjust how warm the shift is with the Color Temperature slider.`,
      },
      {
        title: 'Turn on Speak Screen for hands-free reading',
        content: `Your iPad can read any text on the screen out loud. Go to Settings → Accessibility → Spoken Content → Speak Screen (toggle on). To use it: place two fingers at the top of the screen and swipe down. The iPad reads everything on the screen aloud in order. This works on web articles, emails, iBooks, and most text content. You can control the reading speed and pause/resume with the floating control panel that appears. Great for articles when you want to rest your eyes.`,
      },
      {
        title: 'Use AssistiveTouch if tapping is difficult',
        content: `If the touchscreen is difficult to use due to arthritis or limited dexterity, AssistiveTouch creates a floating button on the screen that replicates home button, volume buttons, and other controls. Go to Settings → Accessibility → Touch → AssistiveTouch (toggle on). A small gray square appears on the screen. Tap it to see a menu of common actions — you can use it to take screenshots, adjust volume, or go home without using the physical buttons. Drag the button to any corner of the screen that is convenient.`,
        tip: `You can also connect a Bluetooth mouse to your iPad through Settings → Accessibility → Touch → AssistiveTouch → Pointer Devices. This lets you navigate the iPad with a traditional mouse if touchscreen use is difficult.`,
      },
    ],
  },
];
