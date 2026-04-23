import { Guide } from './guides';

export const guidesBatch21: Guide[] = [
  {
    slug: 'recycle-donate-old-phone',
    title: 'How to Safely Recycle, Donate, or Trade In Your Old Phone',
    excerpt: 'Before getting rid of an old phone, you need to erase it properly. Then you can recycle it, donate it, or trade it in for money toward a new one.',
    category: 'tips-tricks',
    tags: ['recycle phone', 'donate phone', 'trade in', 'old phone', 'factory reset', 'e-waste'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Got an old phone sitting in a drawer? You have several good options — trade it in for money toward a new phone, donate it to someone in need, or recycle it responsibly. But before you do any of those things, the most important step is erasing everything on it first.\n\nOld phones contain a surprising amount of personal information: photos, texts, saved passwords, banking apps, email accounts, contacts, and more. If you hand off a phone without erasing it, anyone who picks it up could access all of that. A full factory reset wipes the phone back to factory condition — like new, with nothing personal remaining.\n\nThis guide walks you through erasing your phone safely, and then explains your best options for what to do with it after.`,
    steps: [
      {
        title: 'Back up anything you want to keep',
        content: 'Before erasing, make sure photos, contacts, and important data from the old phone are backed up. On iPhone, go to Settings > [your name] > iCloud > iCloud Backup > Back Up Now. On Android, go to Settings > Google > Backup > Back up now. Also make sure your photos are saved to Google Photos or iCloud Photos.',
        warning: 'Once you factory reset, everything on the phone is gone permanently. Double-check that your photos and contacts are backed up first.',
      },
      {
        title: 'Sign out of your accounts',
        content: 'On iPhone: Go to Settings > [your name] > scroll down > Sign Out. This removes your Apple ID from the phone, which is required before trading in or selling. On Android: Go to Settings > Accounts > Google > select your account > Remove account. Also sign out of Samsung Account if applicable.',
      },
      {
        title: 'Factory reset the phone',
        content: 'On iPhone: Settings > General > Transfer or Reset iPhone > Erase All Content and Settings. Enter your passcode and confirm. On Android (Samsung): Settings > General Management > Reset > Factory Data Reset > Reset. On other Android phones, look in Settings > System > Reset options > Erase all data. The process takes 5–15 minutes.',
      },
      {
        title: 'Option 1 — Trade it in for money',
        content: 'Carrier stores (AT&T, Verizon, T-Mobile) offer trade-in credit toward a new phone. Apple and Samsung also have trade-in programs on their websites. For the best cash value, check sites like Gazelle.com, Decluttr.com, or Swappa.com where you can sell directly to buyers.',
        tip: 'Quick Tip: Get quotes from at least two or three places before trading in. Values vary widely — the same phone might get you $50 from one carrier and $150 from a buyback site.',
      },
      {
        title: 'Option 2 — Donate it',
        content: `Charities like Cell Phones for Soldiers (cellphonesforsoldiers.com) send phones to military members, and Secure the Call (securethecall.org) gives them to seniors for emergency 911 calls. Domestic violence shelters, veterans organizations, and senior centers also accept donated phones. Make sure it's erased first.`,
      },
      {
        title: 'Option 3 — Recycle it',
        content: 'If the phone is too old or damaged to donate, recycle it properly. Best Buy accepts any brand of old electronics for free recycling at their stores. Apple will take back old iPhones at any Apple Store. Staples and Walmart also have recycling bins. Never throw a phone in regular trash — the battery contains hazardous materials.',
      },
    ],
  },

  {
    slug: 'imessage-vs-sms-explained',
    title: 'iMessage vs SMS: What the Blue and Green Bubbles Mean',
    excerpt: 'On iPhone, blue message bubbles are iMessages and green are regular SMS texts. They work differently in ways that matter for privacy, cost, and features.',
    category: 'essential-skills',
    tags: ['iMessage', 'SMS', 'text message', 'iphone', 'blue bubble', 'green bubble'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you use an iPhone, you've probably noticed that some text messages appear in blue bubbles and others appear in green. This isn't just a color choice — it tells you whether a message was sent as an iMessage (Apple's internet-based messaging system) or a regular SMS text (the old-fashioned phone network kind).\n\nThe difference matters: iMessages are free even when traveling internationally, can be sent over Wi-Fi, support features like read receipts and typing indicators, and are end-to-end encrypted. SMS messages use your carrier's text messaging plan, don't have delivery receipts by default, and work even without Wi-Fi.\n\nUnderstanding the difference helps you know what to expect and when each type of message is being used.`,
    steps: [
      {
        title: 'Blue bubble = iMessage',
        content: `Blue bubbles mean the message was sent via Apple's iMessage system — over the internet (Wi-Fi or cellular data). iMessages only work when both you AND the person you're texting have an iPhone (or other Apple device) with iMessage enabled. They're free regardless of your text plan, encrypted, and include delivery/read receipts.`,
      },
      {
        title: 'Green bubble = SMS/MMS text',
        content: `Green bubbles mean the message was sent as a regular text message using your phone carrier's network (like AT&T, Verizon, or T-Mobile). This happens when the person you're texting has an Android phone, or has iMessage turned off. SMS counts toward your text message plan (though most plans include unlimited texts).`,
        tip: 'Quick Tip: If you text someone and the bubble is green, it just means they have a non-iPhone — not that something is wrong.',
      },
      {
        title: 'Read receipts and "Delivered" — what they mean',
        content: `Under a blue (iMessage) bubble: "Delivered" means the message reached their device. "Read" means they opened the conversation (only shows if they have read receipts turned on for you). Under a green bubble: you typically don't see "Read" receipts — just "Sent."`,
      },
      {
        title: 'What happens when iPhone sends a text to Android',
        content: `When you text someone with an Android phone from your iPhone, it always goes as a green SMS. You won't see read receipts. Photos you send will be compressed more heavily. Some iPhone-only features (like reactions/tapbacks, message effects, and thread replies) won't appear correctly on their end.`,
      },
      {
        title: 'iMessage needs internet — what to do when it fails',
        content: `If iMessage can't send (no internet, server issue), your iPhone can automatically send it as an SMS instead. Make sure this fallback is on: go to Settings > Messages > "Send as SMS" and make sure it's toggled on. This way your messages always go through, even if iMessage is temporarily unavailable.`,
      },
    ],
  },

  {
    slug: 'kindle-paperwhite-setup',
    title: 'How to Set Up and Use a Kindle Paperwhite',
    excerpt: `A Kindle Paperwhite is a dedicated e-reader that holds thousands of books in a slim device. Here's how to set it up and start reading.`,
    category: 'essential-skills',
    tags: ['kindle', 'kindle paperwhite', 'e-reader', 'ebooks', 'amazon kindle', 'reading'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A Kindle Paperwhite is a small, lightweight reading device made by Amazon. Unlike a tablet that does everything, a Kindle does one thing really well: lets you read books. It has an e-ink screen that looks like paper, doesn't cause eye strain, works in bright sunlight, and the battery lasts weeks on a single charge — not hours.\n\nKindle Paperwhite is especially popular among people who like to read in bed (the built-in light doesn't bother a sleeping partner), those with vision issues (text size can be made very large), and anyone who wants to carry a whole library without lugging heavy books.\n\nBooks are purchased from the Amazon Kindle Store and download instantly to your device over Wi-Fi. There are also thousands of free books available — classic literature, public domain titles, and more. If you have a library card, you may also be able to borrow digital books through your library for free.`,
    steps: [
      {
        title: 'Charge and turn on your Kindle',
        content: `Connect the included USB-C cable to the Kindle and a wall charger. Charge for at least an hour before first use. Press and hold the power button on the bottom edge until the screen lights up. You'll see the setup screen.`,
      },
      {
        title: 'Connect to Wi-Fi',
        content: `On the setup screen, select your home Wi-Fi network from the list and enter your password. The Kindle needs Wi-Fi only to download books — once downloaded, you can read without any connection. The Kindle doesn't need to stay connected.`,
      },
      {
        title: 'Register to your Amazon account',
        content: 'The setup screen will ask you to register the Kindle to your Amazon account. If you bought it on Amazon while already signed in, it may already be registered automatically. If not, enter your Amazon email and password. This links the Kindle to your Amazon account so you can buy and download books.',
        tip: 'Quick Tip: If you share an Amazon account with a family member, the Kindle can be registered to the same account so you can share purchased books.',
      },
      {
        title: 'Buy and download your first book',
        content: `Tap the Store icon (shopping bag icon) on the home screen. Search for a book title or author. Tap "Buy for $X.XX" or "Read for Free" (if it's free or included with Kindle Unlimited). Books download in seconds over Wi-Fi and appear on your home screen. Tap the cover to start reading.`,
      },
      {
        title: 'Adjust text size and lighting',
        content: 'While reading, tap the top of the screen to bring up the reading menu. Tap the "Aa" (font) button to change text size — most people find 14–18pt comfortable. Also adjust the warm light (orange tint) for evening reading to reduce eye strain. Swipe right on the brightness bar to add warmth.',
        tip: 'Quick Tip: The Kindle Paperwhite is fully waterproof — you can read by the pool or in the bathtub without worry.',
      },
      {
        title: 'Borrow free library books',
        content: `If your library uses OverDrive or Libby, you can borrow ebooks for free. Install the Libby app on your phone or tablet, sign in with your library card, and borrow a Kindle book. Choose "Send to Kindle" and it'll appear on your Paperwhite over Wi-Fi within minutes.`,
      },
    ],
  },

  {
    slug: 'wyze-camera-setup',
    title: 'How to Set Up a Wyze Smart Security Camera',
    excerpt: `Wyze cameras are affordable indoor security cameras that let you watch your home from your phone. Here's how to set one up in about 10 minutes.`,
    category: 'smart-home',
    tags: ['wyze', 'security camera', 'smart home', 'home monitoring', 'wyze cam'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Wyze cameras are some of the most popular home security cameras in the US — mainly because they do a lot for a low price. A Wyze Cam v3 costs around $35 and gives you live 1080p video streaming, motion alerts, two-way audio (you can talk through it), and night vision. Many caregivers use them to check on elderly parents; many seniors use them to see who's at the door or monitor pets.\n\nSetup requires the Wyze app on your smartphone, your home Wi-Fi password, and the camera. The whole process takes about 10 minutes. Once set up, you can view the camera from anywhere with your phone — from another room or across the country.\n\nWyze offers a free tier that lets you see live video, get motion alerts, and review brief event clips. An optional paid plan ($1.99/month per camera) adds continuous video recording and longer clip storage.`,
    steps: [
      {
        title: 'Download the Wyze app',
        content: 'Search "Wyze" in the App Store (iPhone) or Google Play Store (Android) and install the free Wyze app. Create a free Wyze account or sign in if you already have one.',
      },
      {
        title: 'Plug in and position the camera',
        content: `Plug the camera into any wall outlet using the included USB cable and adapter. Place it on a shelf, countertop, or use the included mount to attach it to a wall or window frame. Make sure it's within range of your Wi-Fi router.`,
        tip: 'Quick Tip: Position the camera so the front (lens side) faces the area you want to monitor. The camera works in low light too — the infrared night vision automatically activates in the dark.',
      },
      {
        title: 'Add the camera in the app',
        content: 'Open the Wyze app and tap the "+" button to add a new device. Choose "Wyze Cam" from the device list. Follow the on-screen instructions: the app will ask you to hold the setup button on the bottom of the camera until you hear "Ready to connect," then it will walk you through connecting to your Wi-Fi.',
      },
      {
        title: 'Enter your Wi-Fi password',
        content: `The app will ask for your home Wi-Fi network name and password. Enter these carefully — the camera only works on 2.4 GHz Wi-Fi networks (most home networks have both 2.4 and 5 GHz; if asked, choose the 2.4 GHz version). Wait for the camera to connect — you'll hear a voice say "Connection successful."`,
      },
      {
        title: 'View your camera and set up alerts',
        content: `Tap your camera in the Wyze app to see the live view. Tap the camera settings (gear icon) to set up motion detection alerts — the app will notify your phone when movement is detected. You can adjust the sensitivity so pets don't trigger constant alerts.`,
        warning: `Be respectful of privacy: make sure anyone who lives in or regularly visits your home knows there is a camera. Pointing cameras into a neighbor's property may violate local laws.`,
      },
    ],
  },

  {
    slug: 'look-better-on-video-calls',
    title: 'How to Look and Sound Better on Video Calls',
    excerpt: 'Small adjustments to lighting, camera position, and audio can make a huge difference in how you appear on Zoom, FaceTime, or any video call.',
    category: 'communication',
    tags: ['video call', 'zoom', 'facetime', 'lighting', 'audio', 'webcam tips'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `You've probably been on a video call where someone looks dark and shadowy, or you can barely hear them over background noise, or the camera is pointed at their ceiling. It doesn't have to be that way. A few simple adjustments can make you look and sound much more professional and put-together — whether you're catching up with grandchildren, attending a telehealth appointment, or joining a community meeting.\n\nThe biggest improvements come from lighting and camera angle. These are free to fix and make a dramatic difference. Good audio is the second priority — nothing is more frustrating than not being able to hear or understand someone. This guide covers everything you need to make your next video call much more pleasant.`,
    steps: [
      {
        title: 'Put light in front of you, not behind',
        content: `The most common mistake: sitting with a bright window or lamp behind you. This makes you look like a dark silhouette. Instead, face a window or lamp — put the light source in front of you, shining on your face. Natural window light is ideal. If your room is dark, use a lamp or even a ring light (they're inexpensive) pointed at your face.`,
        tip: 'Quick Tip: This single change — facing a light source — does more to improve your video appearance than any camera upgrade.',
      },
      {
        title: 'Position the camera at eye level',
        content: `If you're on a laptop, the camera is usually below eye level, making people look up your nose. Raise the laptop on a stack of books so the camera is at eye level. If using a phone, prop it up or use a stand so it faces you straight on, not from below.`,
      },
      {
        title: 'Look at the camera, not the screen',
        content: `It feels natural to look at the other person's face on screen, but that means your eyes are pointed down. To make eye contact, look directly at the camera lens (the tiny dot at the top of the screen or laptop lid). This makes you appear engaged and present to the other person.`,
      },
      {
        title: 'Improve your audio',
        content: 'Your built-in microphone picks up all room noise. For better sound: sit in a quiet room, close doors and windows during the call, and consider using earbuds or headphones with a built-in microphone — even cheap ones dramatically reduce echo and background noise. Apple EarPods or basic Android earbuds work well.',
      },
      {
        title: 'Choose a clean, simple background',
        content: 'Your background should be tidy and not distracting. A plain wall or a neat bookshelf works well. If your space is cluttered, consider using a virtual background in Zoom (check the video settings in Zoom before the call starts). Keep it simple — avoid busy pattern backgrounds that can be distracting.',
        tip: 'Quick Tip: Before any important call, join a minute early to check your video preview. What do you see? Is it lit well? Is the angle right? Adjust before the other person joins.',
      },
    ],
  },

  {
    slug: 'amazon-music-guide',
    title: 'How to Listen to Music with Amazon Music',
    excerpt: 'Amazon Music lets you stream millions of songs on your phone, Alexa speaker, or Fire TV. If you have Amazon Prime, you already have free access to a huge music library.',
    category: 'entertainment',
    tags: ['amazon music', 'music streaming', 'amazon prime', 'alexa', 'music app'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Amazon Music is a music streaming service — it lets you listen to millions of songs without buying them individually. If you have Amazon Prime, you already have Amazon Music Prime included at no extra cost. That gives you access to a large catalog of songs in shuffle mode and a selection of playlists curated by genre, mood, or decade.\n\nFor unlimited, on-demand listening (play any song whenever you want), Amazon offers Amazon Music Unlimited for $9.99/month, or $8.99/month if you're a Prime member. There's also a free ad-supported tier for casual listening.\n\nAmazon Music works on your phone, tablet, computer, and any Amazon Echo (Alexa) speaker. Just say "Alexa, play some country music" or "Alexa, play Elvis Presley" and it starts playing.`,
    steps: [
      {
        title: 'Download the Amazon Music app',
        content: 'Search "Amazon Music" in the App Store or Google Play Store and download the free app. Sign in with your Amazon account (same email and password you use on Amazon.com). If you have Prime, your Prime Music is already available.',
      },
      {
        title: 'Browse and find music you like',
        content: `Tap "Browse" at the bottom of the app to see categories: genres, moods, decades, and playlists. If you love music from the 50s, 60s, 70s, or a specific genre like country, gospel, jazz, or classical, you'll find dedicated playlists. Tap a playlist to start it.`,
        tip: 'Quick Tip: Tap the search icon and type an artist name (like "Frank Sinatra" or "Dolly Parton") to find their music and see curated playlists featuring them.',
      },
      {
        title: 'Use Alexa to play music hands-free',
        content: 'If you have an Amazon Echo speaker, say "Alexa, play jazz music" or "Alexa, play Frank Sinatra" or "Alexa, play relaxing music." Alexa will start playing through Amazon Music on the speaker. You can also say "Alexa, skip this song," "Alexa, pause," or "Alexa, turn it up."',
      },
      {
        title: 'Create a playlist of your favorites',
        content: 'When a song is playing, tap the three-dot menu (⋮) next to the song title and choose "Add to playlist." Create a new playlist with a name like "My Favorites" and songs will collect there. Your playlist will be waiting whenever you open the app.',
      },
      {
        title: 'Download songs for offline listening',
        content: 'With Amazon Music Unlimited, you can download songs to listen without internet — great for traveling, doctor waiting rooms, or areas with poor signal. Open a playlist or album, tap the download button (a down arrow icon). Songs download over Wi-Fi and stay available offline.',
        warning: 'Downloaded songs require an active Amazon Music subscription. If you cancel, the downloaded songs will no longer play, though you can always stream them again if you re-subscribe.',
      },
    ],
  },

  {
    slug: 'apple-books-guide',
    title: 'How to Read Books on iPhone and iPad with Apple Books',
    excerpt: 'Apple Books is a free reading app on every iPhone and iPad. You can buy bestsellers, download thousands of free classics, and adjust text size for comfortable reading.',
    category: 'essential-skills',
    tags: ['apple books', 'ibooks', 'ebooks', 'iphone reading', 'ipad reading', 'digital books'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple Books is a free app that comes on every iPhone and iPad — it lets you read ebooks just like you'd read on a Kindle, but without needing a separate device. Your phone or tablet becomes your reading device. The app has its own bookstore where you can buy bestsellers, find free books, and even sample a book before you buy.\n\nOne of the nicest features of Apple Books is how flexible the reading experience is. You can make text much larger, change the font, adjust the background color for nighttime reading (dark background with light text is easy on the eyes), and the app remembers exactly where you stopped reading.\n\nThousands of classic books — from Jane Austen to Mark Twain — are completely free because they're in the public domain. This is a great way to rediscover old favorites or explore literature you never had time to read.`,
    steps: [
      {
        title: 'Open the Books app',
        content: `Look for the Books app on your iPhone or iPad — it has an orange icon with a white book on it. If you don't see it, swipe down on your home screen and search "Books" to find it. Tap to open.`,
      },
      {
        title: 'Browse the bookstore',
        content: `Tap "Book Store" at the bottom of the screen to browse. You'll see featured titles, bestsellers, and categories. Browse by genre (Fiction, Mystery, History, etc.) or search for a specific title or author at the top. Tap any book to see its description, sample pages, and price.`,
        tip: 'Quick Tip: Many books offer a free sample of the first chapter or two. Tap "Get Sample" to try before you buy.',
      },
      {
        title: 'Find free books',
        content: 'In the Book Store, tap on a genre and then look for books showing "$0.00" or "Free." Thousands of classic novels, poetry collections, and non-fiction works are free because their copyright has expired. Search "free classics" to find curated collections.',
      },
      {
        title: 'Buy a book',
        content: `Tap a book you want, then tap the price button. You'll be asked to confirm with your Apple ID password or Face ID/Touch ID. The book downloads in seconds and appears in your Library. Tap Library at the bottom to find all your books.`,
      },
      {
        title: 'Adjust text size and reading settings',
        content: 'While reading, tap anywhere on the page to see the reading controls. Tap the "Aa" button to change: font size (make it bigger), font style, line spacing, and page color. Tap the moon icon to switch to a dark background for nighttime reading — much easier on the eyes in a dark room.',
        tip: 'Quick Tip: Swipe left or tap the right side of the page to go to the next page. Swipe right or tap the left side to go back.',
      },
    ],
  },

  {
    slug: 'google-play-books-guide',
    title: 'How to Read Books on Android with Google Play Books',
    excerpt: 'Google Play Books is a free reading app for Android phones and tablets. Buy books from Google, find free classics, and read with adjustable text size and night mode.',
    category: 'essential-skills',
    tags: ['google play books', 'ebooks', 'android reading', 'digital books', 'reading app'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Play Books is Google's ebook reading app — it comes pre-installed on most Android phones and is also available on iPhone and iPad. It works like a personal library on your phone: you can buy books from Google Play, download free classic literature, upload PDF files you already own, and read everything in one app.\n\nThe reading experience is comfortable and customizable. You can set the text size as large as you need, choose from several font styles, and switch to night mode (light text on dark background) for reading in dim light. The app syncs your reading position across all your devices — start on your phone, continue on your tablet, exactly where you left off.\n\nMany people use Google Play Books alongside their library's Libby app — one for purchased books and one for free library borrows.`,
    steps: [
      {
        title: 'Open Google Play Books',
        content: `Look for the Google Play Books app on your Android phone — it has a blue icon with a white letter "G" and a book. If it's not installed, open the Play Store and search "Google Play Books" to install it free. Sign in with your Google account.`,
      },
      {
        title: 'Browse and buy books',
        content: 'Tap "Shop" at the bottom to open the Google Play Books store. Browse categories, bestseller lists, and new arrivals. Tap a book to see the description and price. Tap "Buy" to purchase — payment uses the card saved to your Google account. Books download immediately.',
        tip: 'Quick Tip: Tap "Free sample" to read the first few pages of any book before deciding to buy.',
      },
      {
        title: 'Find free books',
        content: 'In the Shop, tap "Categories" and look for the "Free" section, or search for a classic title. Books with an expired copyright (published before 1928) are free: Jane Eyre, Pride and Prejudice, Sherlock Holmes, Adventures of Huckleberry Finn, The Wizard of Oz, and thousands more.',
      },
      {
        title: 'Adjust reading settings',
        content: `While reading, tap the middle of the screen to see the reading controls. Tap the "Aa" icon to adjust: text size (go large — there's no wrong answer), line spacing, and background. Tap the moon icon for Night Mode, which shows white text on a black background to reduce eye strain in dim rooms.`,
      },
      {
        title: 'Upload PDFs and other documents',
        content: `If you have PDF files you'd like to read — instruction manuals, documents, anything in PDF format — tap the "Library" tab, then the upload button. Select the PDF from your phone's storage and it appears in your Library alongside your books. Google Play Books even lets you add notes and highlights to PDFs.`,
      },
    ],
  },

  {
    slug: 'apple-podcasts-guide',
    title: 'How to Listen to Podcasts on iPhone Using Apple Podcasts',
    excerpt: 'Podcasts are free audio shows on every topic imaginable — news, true crime, health, humor, and more. Apple Podcasts is the built-in podcast app on every iPhone.',
    category: 'entertainment',
    tags: ['podcasts', 'apple podcasts', 'iphone', 'audio', 'radio', 'shows'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A podcast is like a radio show that you listen to whenever you want — not when it happens to be on. Podcasts are free, cover almost every topic imaginable, and can be listened to on your phone while doing other things: walking, cooking, driving, or relaxing in a chair.\n\nApple Podcasts is built into every iPhone and iPad. It gives you access to millions of free shows from NPR, BBC, ABC News, independent creators, health experts, comedians, storytellers, and more. You search for a show, subscribe to it, and new episodes download automatically to your phone so you can listen without an internet connection.\n\nIf you've never listened to a podcast, try starting with something you're already interested in — cooking, history, travel, health advice, or a topic you'd normally read a magazine about. There's almost certainly an excellent free podcast for it.`,
    steps: [
      {
        title: 'Open Apple Podcasts',
        content: 'Look for the purple Podcasts app on your iPhone (it has a microphone icon). It comes pre-installed on all iPhones. Tap to open.',
      },
      {
        title: 'Search for shows you might like',
        content: `Tap the Search icon at the bottom. Type a topic you enjoy — "gardening," "American history," "true crime," "cooking," "daily news" — or a show name you've heard of. A list of matching podcasts will appear. Tap any show to see episode descriptions.`,
        tip: 'Quick Tip: Some popular shows to try: NPR News Now (5-minute news summaries), Fresh Air with Terry Gross (interviews), Stuff You Should Know (educational and fun), or How I Built This (inspiring stories).',
      },
      {
        title: 'Subscribe to a show',
        content: `Open a show and tap "Follow" or "Subscribe." New episodes will automatically appear in your library. The show's artwork will show up in your Library tab. You'll never miss a new episode.`,
      },
      {
        title: 'Play an episode',
        content: `In any show's page, tap any episode to play it. The playback controls appear at the bottom: play/pause button, 15-second skip back/forward buttons, and a progress bar. Tap the episode name at the bottom to expand the full player with a speed control (1x, 1.5x, 2x — useful for talk shows).`,
      },
      {
        title: 'Download episodes to listen without internet',
        content: `Tap the down-arrow icon next to any episode to download it to your phone. Downloaded episodes play without any internet connection — perfect for commutes, flights, or areas with poor signal. Most shows auto-download the latest few episodes when you're on Wi-Fi.`,
      },
    ],
  },

  {
    slug: 'iheartradio-guide',
    title: 'How to Listen to Free Radio Stations and Podcasts with iHeartRadio',
    excerpt: 'iHeartRadio is a free app that streams thousands of local and national radio stations, plus podcasts — all without a subscription.',
    category: 'entertainment',
    tags: ['iheartradio', 'radio', 'streaming radio', 'free music', 'podcasts', 'online radio'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `iHeartRadio is a free app that lets you listen to live radio stations from anywhere in the country — and the world. If there's a radio station you loved but can no longer pick up over the air, iHeartRadio probably streams it online. If you move to a new city and miss your hometown stations, they're a tap away.\n\nBeyond live radio, iHeartRadio also has custom artist stations (like Pandora — you pick an artist and it plays similar music), podcasts, and curated playlists. The basic version is completely free with occasional ads, similar to regular radio. A paid tier removes ads.\n\nInstalling and using iHeartRadio is about as simple as it gets — no account required to start listening to live radio.`,
    steps: [
      {
        title: 'Download and open iHeartRadio',
        content: 'Search "iHeartRadio" in the App Store or Google Play Store. Install the free app. You can start listening to live radio immediately without creating an account, though making an account (free) lets you save favorites.',
      },
      {
        title: 'Find a local or favorite radio station',
        content: 'Tap the Search icon and type your city name plus "radio" (like "Nashville country radio") or a specific call sign if you know it (like "KABC" or "WGN"). You can also browse by genre: news/talk, country, classic rock, gospel, jazz, oldies, and more.',
        tip: 'Quick Tip: Type just your city name — iHeartRadio will show you all the radio stations broadcasting in that area.',
      },
      {
        title: 'Create a custom music station',
        content: 'Tap "Create Station" and type an artist name — "Johnny Cash," "Frank Sinatra," "Taylor Swift," or any artist you like. iHeartRadio builds a station that plays that artist plus similar ones. It works like Pandora. Tap the thumbs-up or thumbs-down to refine the station over time.',
      },
      {
        title: 'Listen to podcasts',
        content: `Tap the Podcast section to browse thousands of free podcast shows. You'll find news, true crime, health, humor, and just about everything else. Tap a show, then an episode, and it starts playing.`,
      },
      {
        title: 'Save your favorite stations',
        content: 'While a station is playing, tap the heart icon to add it to your Favorites. Your Favorites appear on the home screen for quick access next time. You can create a free iHeartRadio account to save favorites across multiple devices.',
      },
    ],
  },

  {
    slug: 'android-vision-display-settings',
    title: 'How to Make Text and Screens Easier to See on Android',
    excerpt: 'Android phones have several built-in settings that make text larger, screens brighter and higher contrast, and displays easier to read for people with vision challenges.',
    category: 'essential-skills',
    tags: ['android', 'accessibility', 'large text', 'vision', 'font size', 'display settings'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you find the text on your Android phone too small, the screen too dim, or the colors hard to distinguish, you don't need a different phone — you need to adjust the settings. Android has robust accessibility features specifically designed for people with vision challenges, and most of them are turned off by default because they're not needed by everyone.\n\nChanging these settings takes about five minutes and can make your phone dramatically easier to use. You can increase text size, increase the overall display size (making everything bigger, not just text), turn on high contrast, enable color correction, or activate TalkBack (which reads everything on screen aloud).\n\nThis guide covers the most useful visual adjustments without going into highly specialized accessibility tools.`,
    steps: [
      {
        title: 'Find Accessibility settings',
        content: `Open the Settings app on your Android phone. Look for "Accessibility" in the list — it may be near the bottom. On Samsung Galaxy phones it's called "Accessibility." On Google Pixel phones it's under Settings > Accessibility. Tap to open.`,
      },
      {
        title: 'Increase text size',
        content: `Tap "Text and display" (or "Font size" on some phones). Move the text size slider to the right to make text larger. You'll see a preview at the top of the screen showing how large your text will be. Most people find "Large" or "Larger" comfortable.`,
        tip: 'Quick Tip: On Samsung phones, look for both "Font size" (text only) and "Screen zoom" (everything). Increasing both together makes the biggest difference.',
      },
      {
        title: 'Increase display size',
        content: 'Also in Text and display settings, look for "Display size" or "Screen zoom." Moving this to the right makes everything on screen bigger — app icons, buttons, menu items, not just text. This is often the most dramatic improvement for people who struggle with small targets.',
      },
      {
        title: 'Turn on high contrast text',
        content: 'In Accessibility > Text and display, look for "High contrast text" and turn it on. This makes text appear bolder against its background, which improves readability. On some phones this is under "Visibility enhancements."',
      },
      {
        title: 'Explore color correction and dark mode',
        content: 'If colors are hard to distinguish, look for "Color correction" or "Color adjustment" in Accessibility settings — it can adjust for common color blindness types. Also try turning on Dark mode (Settings > Display > Dark theme) which shows white text on black backgrounds throughout the phone, many people find this much easier on the eyes.',
      },
    ],
  },

  {
    slug: 'jitterbug-lively-phone-guide',
    title: 'What Is a Jitterbug (Lively) Phone and Is It Right for You',
    excerpt: `Jitterbug phones — now called Lively — are designed specifically for seniors with large buttons, simple menus, and an emergency response button. Here's what you need to know.`,
    category: 'phone-guides',
    tags: ['jitterbug', 'lively phone', 'senior phone', 'large button phone', 'simple phone'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Jitterbug — now officially called Lively — is a brand of smartphones and flip phones designed specifically with older adults in mind. They feature large buttons, simplified menus with fewer confusing options, extra-loud speakers for people with hearing loss, bright clear screens, and in some models, an urgent response button that connects you to a 24/7 help service with one press.\n\nLively phones run on the Verizon network and are sold at Best Buy and online. They come in two main models: the Lively Flip (a classic flip phone with large physical buttons — ideal for people who find touchscreens frustrating) and the Lively Smart (a touchscreen smartphone with a simplified interface and a large "Urgent Response" button on the side).\n\nThis guide explains who these phones are designed for, what features they offer, and how to decide if one is right for you or a family member.`,
    steps: [
      {
        title: 'Who is a Lively phone designed for?',
        content: `Lively phones are best for people who: find standard smartphones overwhelming or confusing, have difficulty with small touchscreen buttons, want a phone primarily for calls and emergencies, have hearing loss and need louder volume, or value the urgent response feature for safety. If you're comfortable with an iPhone or Android, a Lively phone would likely feel like a step down.`,
      },
      {
        title: 'Understand the two models',
        content: 'The Lively Flip ($99) is a flip phone with physical number buttons and a simple menu — no touchscreen needed. Great for those who just want to make calls and texts. The Lively Smart ($149) is a full touchscreen smartphone with a simplified home screen, larger icons, and the Urgent Response button. It can also run regular apps like Netflix and Facebook.',
        tip: 'Quick Tip: For someone who has never used a smartphone and just wants reliable phone calls, the Lively Flip is the simpler choice. For someone who wants smartphone features in a more manageable package, the Lively Smart makes more sense.',
      },
      {
        title: 'The Urgent Response feature',
        content: `Both models include a button (on the side of the Lively Smart, or a star button on the Flip) that connects you to Lively's 24/7 urgent response team. This is like a medical alert service built into the phone. The agent can assess your situation, contact emergency services, and reach family members. This service requires a plan add-on (starts at $19.99/month on top of the phone plan).`,
      },
      {
        title: 'Lively phone plans',
        content: `Lively phones use Verizon's network. Plans start at $19.99/month for 300 minutes (calls only). Unlimited talk and text runs $29.99/month. Unlimited everything (talk, text, data) is $49.99/month. These are competitive with major carriers for basic usage.`,
      },
      {
        title: 'Where to try or buy a Lively phone',
        content: `Lively phones are sold at Best Buy stores (where you can handle them in person) and at greatcall.com or lively.com online. Best Buy staff can demonstrate both models and help you pick the right plan. There's a 30-day return policy if the phone isn't the right fit.`,
      },
    ],
  },

  {
    slug: 'test-internet-speed-guide',
    title: 'How to Test Your Home Internet Speed',
    excerpt: `A quick internet speed test tells you exactly how fast your connection is and whether you're getting what you pay for from your provider.`,
    category: 'internet-connectivity',
    tags: ['internet speed', 'speed test', 'WiFi speed', 'broadband', 'bandwidth'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Have you ever wondered if your internet is as fast as your provider claims? Or why some websites and videos load slowly while others are quick? A speed test can answer those questions in about 30 seconds. It measures how fast data can be downloaded to your device and uploaded from it, and shows the result in Megabits per second (Mbps).\n\nKnowing your actual speed helps you determine if you're getting what you're paying for, troubleshoot slow connections, and understand whether your plan is adequate for activities like video calling or streaming movies. This guide shows you how to run a speed test from any device and how to interpret the results.`,
    steps: [
      {
        title: 'Run a speed test on any device',
        content: 'Open any web browser (Chrome, Safari, Edge, Firefox) and go to fast.com — a simple, free speed test from Netflix. The test starts automatically and shows your download speed within about 20 seconds. For more details including upload speed and latency, click "Show more info" when the test completes.',
        tip: 'Quick Tip: You can also go to speedtest.net for another reliable free speed test with a more detailed readout.',
      },
      {
        title: 'Understand the numbers',
        content: 'Download speed is how fast data comes to you — what matters for streaming, browsing, and video calls. Upload speed is how fast your data goes out — matters for video calling and sending files. Latency (ping) is the delay in milliseconds — lower is better for video calls.\n\nReference speeds: 25 Mbps download is adequate for one person streaming in HD. 100 Mbps handles multiple people streaming and video calls comfortably. 300+ Mbps is plenty for a full household.',
      },
      {
        title: 'Test in the right place',
        content: `For the most accurate result, run the test on the device you actually use, in the room where you use it. Speed through Wi-Fi will be lower than speed directly plugged into the router via a cable — that's normal. Also test at different times of day; internet can be slower in the evenings when more people are online.`,
      },
      {
        title: `Compare to what you're paying for`,
        content: `Look at your internet bill or your provider's website to see what speed you're paying for. Your test result should be at least 80% of that advertised speed. If you're consistently getting much less — for example, paying for 200 Mbps but only getting 20 Mbps — contact your provider and ask them to investigate.`,
      },
      {
        title: 'What if your speed is very slow?',
        content: 'If your speed test shows much slower than expected: restart your router (unplug it, wait 30 seconds, plug it back in), move closer to the router, check that no one else is using a lot of bandwidth on the same network, and call your internet provider if the problem persists. See the companion guide "What to Do When Your Internet Is Slow" for full troubleshooting steps.',
      },
    ],
  },

  {
    slug: 'fix-slow-internet-connection',
    title: 'What to Do When Your Internet Is Slow or Keeps Dropping',
    excerpt: 'Slow or unreliable internet is frustrating but usually fixable. Walk through these steps to find the cause and get things running smoothly again.',
    category: 'internet-connectivity',
    tags: ['slow internet', 'WiFi drops', 'internet fix', 'router', 'troubleshoot internet'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Slow internet or a connection that keeps dropping is one of the most common tech frustrations. The good news is that most internet problems have straightforward causes and can be fixed without calling a technician. The usual culprits are: your router needing a restart, your device being too far from the router, too many devices sharing the connection, or an issue your internet provider needs to address.\n\nThis guide takes you through the steps in order from most to least common. Most people find their problem in the first two or three steps. If you work through everything here and the problem continues, the next step is calling your internet provider — and this guide also tells you what to say when you do.`,
    steps: [
      {
        title: 'Restart your router and modem',
        content: 'This fixes most internet problems. Find your router (the box with blinking lights that provides your Wi-Fi) and your modem (often a separate box connected to the wall). Unplug the power cable from both, wait 30 seconds, then plug the modem in first. Wait one minute for it to connect to your provider, then plug the router back in. Wait another minute, then test your connection.',
        tip: 'Quick Tip: Routers benefit from a full restart every few weeks. Some people plug them into a smart plug and schedule a weekly restart overnight.',
      },
      {
        title: 'Move closer to the router',
        content: `Wi-Fi signal weakens with distance and through walls. If you're far from the router or there are many walls between you and it, your connection will be slower. Move to a room closer to the router temporarily to test whether speed improves. If it does, consider a Wi-Fi extender ($30–$60) or a mesh Wi-Fi system to extend coverage.`,
      },
      {
        title: 'Check if the problem is one device or all devices',
        content: 'Try the internet on another device — a different phone or a laptop. If one device is slow but others are fine, the problem is with that specific device (try restarting it). If all devices are slow, the problem is with your router, modem, or your internet provider.',
      },
      {
        title: 'Reduce the number of devices using bandwidth',
        content: 'If multiple people are streaming video, playing games, or video calling at the same time, your connection may be divided too many ways. Ask everyone to pause their activities temporarily to see if speed improves. If it does, your plan may need an upgrade, or you should stagger high-bandwidth activities.',
      },
      {
        title: 'Check for service outages in your area',
        content: `Go to your internet provider's website or app and look for a service status page or outage map. You can also search "[your provider] outage [your city]." If there's a known outage, you just have to wait — typically outages are resolved within a few hours.`,
      },
      {
        title: 'Call your provider if nothing helped',
        content: `Call the customer service number on your bill and tell them: "My internet has been slow/dropping for [X days]. I've restarted my modem and router and the problem continues." Ask them to check the signal levels coming into your home, run a line test, and send a technician if needed. Technician visits for service issues are typically free.`,
        warning: `If a stranger calls you claiming to be from your internet provider and says your connection has an issue, hang up — it may be a scam. Only call the number on your bill or the provider's official website.`,
      },
    ],
  },

  {
    slug: 'print-photos-walgreens-cvs',
    title: 'How to Print Photos at Walgreens, CVS, or Walmart',
    excerpt: `You can print your phone photos at Walgreens, CVS, or Walmart — in-store pickup in an hour, or shipped to your door. Here's how to order online from your phone.`,
    category: 'tips-tricks',
    tags: ['photo printing', 'walgreens photo', 'cvs photo', 'walmart photo', 'print photos'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Having physical photos is something many people still value — for frames, albums, sending to relatives, or just holding a real print in your hands. The good news: printing photos from your phone is now very convenient. Walgreens, CVS, and Walmart all let you order prints directly from their apps or websites, pick them up at a nearby store in about an hour, or have them delivered to your home.\n\nStandard 4x6 prints typically cost 20–35 cents each at these stores, making them affordable for printing dozens of your favorites. You can also order canvas prints, photo books, greeting cards, mugs, magnets, and other photo gifts.\n\nThis guide uses Walgreens as the example since it has one of the simplest ordering processes, but the steps are similar for CVS Photo and Walmart Photo.`,
    steps: [
      {
        title: 'Open the Walgreens app or website',
        content: `Download the free Walgreens app from the App Store or Google Play Store, or go to walgreens.com from any browser. Look for the "Photo" or "Photo Prints" section — it's usually on the home screen of the app or in the navigation menu on the website. Tap or click to enter the photo center.`,
      },
      {
        title: 'Select your photos',
        content: `Tap "4x6 Prints" (the most common size). You'll be asked to select photos from your phone's camera roll. Tap the photos you want to print (you can select multiple at once — tap each one). When done, tap "Next" or "Continue."`,
        tip: 'Quick Tip: For best results, choose photos taken in good lighting. Blurry or very dark photos will look worse when printed.',
      },
      {
        title: 'Choose your order type',
        content: `You'll be asked: "Same-day pickup" (ready at your local Walgreens in about an hour) or "1-Hour Photo" or "Ship to home" (arrives in a few days). Pickup is usually fastest and lets you check quality before you leave the store.`,
      },
      {
        title: 'Review and pay',
        content: `The app shows you a preview of each selected photo and the total cost. Review the order, then tap "Check Out." You can pay by credit card, debit card, or Apple Pay. You'll get an email or app notification when your photos are ready to pick up.`,
      },
      {
        title: 'Pick up your prints',
        content: 'Head to the Walgreens photo counter (usually near the pharmacy) and give your name or show your confirmation email. Your photos will be in an envelope. Check them quickly before leaving to make sure they look right.',
        tip: 'Quick Tip: CVS Photo (photo.cvs.com) and Walmart Photo (photo.walmart.com) work nearly the same way. If you prefer one store over another, their apps have nearly identical ordering processes.',
      },
    ],
  },

  {
    slug: 'force-restart-iphone-guide',
    title: 'How to Force Restart a Frozen or Unresponsive iPhone',
    excerpt: 'If your iPhone is frozen, black screen, or completely unresponsive, a force restart usually fixes it. The button combination depends on your iPhone model.',
    category: 'phone-guides',
    tags: ['iphone frozen', 'force restart', 'iphone unresponsive', 'restart iphone', 'black screen'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your iPhone freezes, the screen goes black and won't turn back on, or it's completely unresponsive — pressing buttons does nothing. This happens occasionally on all iPhones, and it doesn't mean your phone is broken. A force restart (also called a hard reset) clears whatever got stuck in the system and starts fresh. It takes less than 10 seconds and doesn't delete any of your data.\n\nThe button combination for a force restart varies by iPhone model — newer iPhones use a different sequence than older ones. This guide covers all models so you can find the right method for your iPhone quickly.`,
    steps: [
      {
        title: 'Identify your iPhone model',
        content: `If you're not sure which iPhone model you have: if your iPhone has a Home button (circular button at the bottom front of the phone), it's an older model (iPhone 8 or earlier). If it has no Home button and a long display without a notch, or with a "Dynamic Island" cutout at the top, it's an iPhone X or newer.`,
      },
      {
        title: 'Force restart iPhone X and newer (no Home button)',
        content: 'This includes iPhone X, 11, 12, 13, 14, 15, 16 and all SE models from 2020 onward:\n1. Quickly press and release the Volume Up button\n2. Quickly press and release the Volume Down button\n3. Press and hold the Side button (right side of phone)\n4. Keep holding until the Apple logo appears (about 10–15 seconds), then release',
        tip: 'Quick Tip: The key is quick presses for volume (not holds), then a long hold on the Side button. The sequence needs to happen within a few seconds.',
      },
      {
        title: 'Force restart iPhone 7 or 7 Plus',
        content: 'Press and hold both the Volume Down button (left side) AND the Sleep/Wake button (right side) at the same time. Keep holding both until the Apple logo appears, then release.',
      },
      {
        title: 'Force restart iPhone 6s or earlier',
        content: 'Press and hold both the Home button (front of phone) AND the Sleep/Wake button (top or right side) at the same time. Keep holding both until the Apple logo appears, then release.',
      },
      {
        title: `What to do if the iPhone won't restart at all`,
        content: 'If the force restart produces no response: connect the iPhone to its charger and wait 10 minutes (it may have a completely dead battery). If it still shows nothing after charging, the phone may need service. Contact Apple Support at apple.com/support or visit an Apple Store or Apple Authorized Service Provider.',
      },
    ],
  },

  {
    slug: 'iphone-battery-health-check',
    title: 'How to Check Your iPhone Battery Health',
    excerpt: `iPhone batteries wear down over time. Checking battery health tells you how much capacity remains and whether it's time for a replacement.`,
    category: 'phone-guides',
    tags: ['iphone battery', 'battery health', 'battery life', 'iphone', 'battery replacement'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Every rechargeable battery loses capacity over time. After 500 full charges (a cycle), an iPhone battery may hold only about 80% of its original capacity — meaning your phone won't last as long between charges as it once did. After more cycles, this can drop further.\n\nApple built a Battery Health feature into iPhones running iOS 11.3 and later that shows you exactly what percentage of original capacity your battery still holds, and whether the battery is performing normally or degrading to a point where replacement makes sense.\n\nIf your iPhone battery doesn't last through a full day anymore and the health percentage is below 80%, an Apple battery replacement ($49 for most models at an Apple Store) can make your phone feel brand new again — without buying a new phone.`,
    steps: [
      {
        title: 'Open Battery Health settings',
        content: `Go to Settings > Battery > Battery Health & Charging. You'll see a percentage labeled "Maximum Capacity." This is how much charge your battery can hold compared to when it was new.`,
      },
      {
        title: 'Understand what the percentage means',
        content: `100%: Battery is new or nearly new.\n80–99%: Normal range — you may notice slightly reduced battery life compared to when new, but performance is still good.\nBelow 80%: Apple considers this "significantly degraded" — battery life is noticeably reduced and replacement is worth considering.\nBelow 70%: You're likely experiencing noticeably short battery life and should consider replacement soon.`,
        tip: `Quick Tip: Apple guarantees iPhone batteries will hold at least 80% capacity for 500 full charge cycles — that's roughly 1.5–2 years of normal use.`,
      },
      {
        title: 'Check Peak Performance Capability',
        content: `Below the percentage, you'll see a "Peak Performance Capability" message. "Your battery is currently supporting normal peak performance" means everything is fine. If you see a warning about unexpected shutdowns or reduced performance, the battery is no longer able to support peak operation.`,
      },
      {
        title: 'Consider battery replacement',
        content: 'Apple Store battery replacement costs $49 for iPhone 12 and older, $99 for iPhone 13 and newer (prices may vary slightly). The replacement takes 1–2 hours. Schedule an appointment at apple.com/support. Apple Authorized Service Providers also do replacements, sometimes for less.',
      },
      {
        title: 'Extend your current battery life while you decide',
        content: 'Until you replace the battery: turn on Low Power Mode (Settings > Battery > Low Power Mode) to stretch each charge. Reduce screen brightness, turn off background app refresh (Settings > General > Background App Refresh > Off), and keep the phone in a moderate temperature — extreme cold or heat degrades batteries faster.',
      },
    ],
  },

  {
    slug: 'clear-cache-phone-browser',
    title: `How to Clear the Cache on Your Phone's Web Browser`,
    excerpt: `Clearing your browser cache removes saved website data that can slow your phone or cause websites to misbehave. Here's how to do it on iPhone and Android.`,
    category: 'tips-tricks',
    tags: ['clear cache', 'browser cache', 'iphone safari', 'android chrome', 'website slow'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your phone's web browser stores pieces of websites — images, code, login data — to help pages load faster. This stored data is called the cache. Over time, this cache can grow large, become outdated, or cause websites to behave strangely: showing you an old version of a page, keeping you logged in when you shouldn't be, or loading slowly.\n\nClearing the cache deletes this saved data and gives your browser a fresh start. Websites will load slightly slower the first time after clearing (while they rebuild the cache), but then return to normal speed.\n\nThis is worth doing if a specific website is acting up, if your phone feels sluggish, or if you want to remove stored login sessions for privacy. It doesn't delete your bookmarks, saved passwords, or browsing history unless you choose those options separately.`,
    steps: [
      {
        title: 'Clear cache on iPhone (Safari)',
        content: 'Go to Settings (not inside Safari — the main Settings app). Scroll down and tap "Safari." Scroll down and tap "Clear History and Website Data." A popup will ask you to confirm — tap "Clear History and Data." This clears the cache, browsing history, and cookies.',
        warning: `This will sign you out of most websites and clear your recent browsing history. You'll need to log back into sites you visit regularly.`,
      },
      {
        title: 'Clear cache on iPhone (Chrome, if you use it)',
        content: 'Open the Chrome app. Tap the three-dot menu (⋮) at the bottom right. Tap "History," then "Clear Browsing Data." Make sure "Cached images and files" is checked. Choose a time range (e.g. "All time" for a full clear), then tap "Clear Browsing Data."',
      },
      {
        title: 'Clear cache on Android (Chrome)',
        content: 'Open the Chrome app. Tap the three-dot menu (⋮) at the top right. Tap "History," then "Clear browsing data." Check "Cached images and files" (and "Cookies and site data" if you want a fuller clean). Select time range, then tap "Clear data."',
        tip: `Quick Tip: If you just want to fix a single website that's acting odd, you don't need to clear everything — just hold your finger on a link to that site in Chrome > "Open in incognito tab" to load a fresh version without cache.`,
      },
      {
        title: 'Clear cache on Android (Samsung Internet)',
        content: `If you use Samsung's built-in browser instead of Chrome: open Samsung Internet, tap the three-line menu at the bottom right, tap "Settings," then "Personal browsing data," then "Delete browsing data." Check "Cached images and files" and tap "Delete."`,
      },
      {
        title: 'How often should you clear cache?',
        content: `There's no need to clear your browser cache regularly. Do it when: a website behaves unexpectedly, your browser feels slow, you've been on a shared device, or you want to remove saved sessions for privacy. Monthly clearing is fine for general phone maintenance, but not strictly necessary.`,
      },
    ],
  },

  {
    slug: 'force-close-app-iphone-android',
    title: 'How to Force Close a Frozen App on iPhone or Android',
    excerpt: 'When an app stops responding or freezes on your phone, force-closing it and reopening usually fixes the problem immediately.',
    category: 'essential-skills',
    tags: ['force close app', 'frozen app', 'iphone', 'android', 'unresponsive app'],
    readTime: '3 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apps freeze sometimes — they stop responding to touches, the screen goes blank, or the app seems stuck. The fix is almost always to force-close the app (which is different from just pressing the Home button) and reopen it. Force-closing completely shuts down the app's process, clearing whatever got stuck.\n\nThis is a quick fix worth knowing because it works for most frozen or misbehaving apps on both iPhone and Android. It takes about five seconds and doesn't affect your data or settings in the app.`,
    steps: [
      {
        title: 'Force close on iPhone (with Face ID — no Home button)',
        content: `Swipe up slowly from the bottom of the screen and pause in the middle — this opens the app switcher showing all your open apps as cards. Find the frozen app's card. Press and hold it briefly until a red minus circle appears, then tap the minus circle to close it. Or swipe the card upward to close it.`,
        tip: 'Quick Tip: You can also swipe up on app cards in the switcher without the long press — just flick them upward off the screen.',
      },
      {
        title: 'Force close on iPhone (with Home button)',
        content: `Double-click the Home button quickly — this opens the app switcher. You'll see all your open apps as cards. Swipe the frozen app's card upward to close it.`,
      },
      {
        title: 'Force close on Android',
        content: `Tap the square (or three-line) button at the bottom of your screen — this is the "Recent apps" button. You'll see your open apps as cards. Swipe the frozen app card to the left or right (or up, depending on your phone) to close it. Or tap "Close all" to close everything at once.`,
      },
      {
        title: 'Reopen the app',
        content: 'After closing, go back to your home screen and tap the app icon to reopen it. In most cases, the app will open normally and the problem will be resolved.',
      },
      {
        title: 'If the app keeps freezing',
        content: `If an app freezes repeatedly: make sure it's updated (go to the App Store or Play Store and check for updates), try restarting your phone entirely, or delete and reinstall the app. Persistent problems with a specific app should be reported to the app developer — look for a "Help" or "Feedback" option inside the app.`,
      },
    ],
  },

  {
    slug: 'frozen-windows-fix',
    title: 'What to Do When Your Windows Computer Freezes Up',
    excerpt: `A frozen Windows computer — mouse won't move, nothing responds — is fixable. Here's what to try, in order, to get back up and running.`,
    category: 'windows-guides',
    tags: ['windows frozen', 'computer freeze', 'unresponsive windows', 'restart windows', 'windows fix'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your Windows computer just stopped responding — the cursor won't move, nothing happens when you click, or the screen is stuck. This is called a system freeze, and it happens for a variety of reasons: a program crashed and is hogging all the system resources, Windows ran out of memory, a driver crashed, or the computer simply needs a restart after long uptime.\n\nThe good news: a computer freeze usually fixes itself with a restart. The bad news: if you have unsaved work open, you may lose it. This guide takes you through the steps in order of how gentle they are, starting with the least disruptive and ending with a hard power-off as the last resort.`,
    steps: [
      {
        title: 'Wait first — it might just be thinking',
        content: 'Before taking action, wait 60–90 seconds. Some operations — large file copies, software updates, antivirus scans — can completely freeze the interface while they process. If the spinning loading circle appears near the cursor, something is still running. Wait patiently before forcing anything.',
      },
      {
        title: 'Try Ctrl+Alt+Delete',
        content: 'Hold Ctrl and Alt, then press Delete. This often breaks through a freeze and brings up the Windows security screen. From there, click "Task Manager." Task Manager shows all running programs and which ones are "Not Responding" (highlighted in red). Click the frozen program and click "End Task" to close it forcefully.',
        tip: 'Quick Tip: Ctrl+Alt+Delete works even when the regular keyboard and mouse are frozen — it sends a direct signal to Windows that often breaks through.',
      },
      {
        title: 'Use Task Manager to close the troublemaker',
        content: 'In Task Manager, click the "Processes" tab. Look for any program with a high "CPU" or "Memory" percentage (in the columns). If a program shows "Not Responding," right-click it and choose "End Task." This usually unfreezes Windows within 30 seconds.',
      },
      {
        title: 'Restart Windows normally',
        content: `If Task Manager isn't responding either, try pressing the Windows key. If the Start menu appears, click the power button icon and choose "Restart." A normal restart is better than a forced shutdown because Windows can finish what it's doing and save open work where possible.`,
      },
      {
        title: 'Hard reboot as a last resort',
        content: 'If nothing else works, press and hold the physical power button on your computer for 5–10 seconds until it turns off. Wait 30 seconds, then press it again to turn it back on. This is the equivalent of pulling the plug — you will lose any unsaved work, but it always breaks the freeze.',
        warning: 'Hard power-off should be used only when nothing else works. Regularly shutting down this way (rather than through Windows) can eventually cause file system errors. If your computer freezes frequently, it may need maintenance — see a technician or run Windows Update to install pending patches.',
      },
    ],
  },

  {
    slug: 'make-photo-collage-phone',
    title: 'How to Make a Photo Collage on Your Phone',
    excerpt: 'A photo collage puts multiple photos together in one image — perfect for sharing memories, creating a greeting card, or printing for display.',
    category: 'tips-tricks',
    tags: ['photo collage', 'collage app', 'iphone photos', 'android photos', 'photo editing'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A photo collage combines multiple photos into one image — a mosaic of memories. You can make one for a birthday, anniversary, holiday, or just to share a collection of favorite photos. Collages are popular for framing, printing, sharing on social media, or texting to family.\n\nBoth iPhone and Android have some built-in tools for making simple collages, and free apps make more elaborate ones quick and easy. Google Photos has a built-in collage feature. On iPhone, you can use the Shortcuts app or Google Photos. Third-party apps like PicCollage (free) and Canva (free tier) offer the most design options.\n\nThis guide covers the fastest method using Google Photos (available on both iPhone and Android) and mentions a simple app option for more customization.`,
    steps: [
      {
        title: 'Make a collage with Google Photos (iPhone or Android)',
        content: 'Open the Google Photos app. Tap "Library" at the bottom, then "Utilities" at the top. Tap "Collage." Select 2–9 photos by tapping each one (photos are grouped by date to help you find them). Tap "Create" and Google Photos automatically arranges them into a neat grid collage.',
        tip: 'Quick Tip: Google Photos makes the collage instantly and saves it to your library. You can then share or download it from there.',
      },
      {
        title: 'Adjust the layout if needed',
        content: 'Once the collage is created in Google Photos, you can tap individual photos in the collage to swap them, zoom in, or adjust positioning. The layout adjusts to fit the photos you chose.',
      },
      {
        title: 'Try PicCollage for more control (free app)',
        content: `If you want more layout options, download PicCollage from the App Store or Play Store — it's free. Open it, tap "+" to create a new collage, choose your photos, then pick from dozens of layout templates. You can also add text, stickers, and backgrounds. When done, tap "Share" to save it to your photo library.`,
      },
      {
        title: 'Use Canva for greeting card-style collages (free)',
        content: 'Canva (canva.com on a browser, or the free Canva app) has beautiful collage templates. Search "photo collage" in Canva, choose a template you like, tap the placeholder images to replace them with your photos, and customize text. Download as a JPEG or PNG image when done.',
      },
      {
        title: 'Share or print your collage',
        content: 'Once your collage is saved to your photo library, you can: text it to family members, share it on Facebook or email, or print it at Walgreens, CVS, or Walmart just like any photo. A 4x6 print of a collage looks great on a refrigerator or in a frame.',
      },
    ],
  },

  {
    slug: 'amazon-returns-guide',
    title: 'How to Return Something You Bought on Amazon',
    excerpt: `Amazon has one of the easiest return processes in retail. Here's how to start a return on your phone or computer and drop it off — often with no box or label needed.`,
    category: 'tips-tricks',
    tags: ['amazon returns', 'return amazon order', 'amazon refund', 'online shopping', 'amazon'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Amazon makes returning items much more convenient than it used to be. Most items sold by Amazon can be returned within 30 days for any reason — the item didn't fit, wasn't what you expected, or you simply changed your mind. The process is done online in about 2 minutes, and in many cases you don't even need a box or a printed label.\n\nAmazon offers several free drop-off locations: UPS stores (no box or label needed — they do it for you), Whole Foods stores (if there's one nearby), Kohl's stores (they pack and ship it free), and Amazon lockers and hubs. This guide walks through the return process from start to finish.`,
    steps: [
      {
        title: 'Find your order to return',
        content: 'Go to amazon.com on a computer or open the Amazon app on your phone. Tap the menu (three lines) or your account icon. Tap "Returns & Orders" to see your recent purchases. Find the item you want to return and tap "Return or replace items."',
      },
      {
        title: 'Select a reason for the return',
        content: `Amazon will ask why you're returning. Choose the most accurate reason from the dropdown (examples: "No longer needed," "Item defective or doesn't work," "Wrong item was sent," etc.). This doesn't affect your ability to return — it's just for Amazon's records. Then tap "Continue."`,
      },
      {
        title: 'Choose your drop-off method',
        content: `Amazon will show you drop-off options near you. The most convenient options:\n- "UPS Store" — Drop off without a box or label. UPS prints the label and packages it for you, free.\n- "Kohl's" — Drop off and they pack it free.\n- "Whole Foods" — Label-free drop off.\n\nChoose one and tap "Confirm Return."`,
        tip: 'Quick Tip: The "UPS Drop Off" with no box required is by far the most convenient option — you just walk in with the loose item, they handle everything, and you get a receipt.',
      },
      {
        title: 'Get your return QR code',
        content: `After confirming, Amazon generates a QR code. This is your return authorization. Save a screenshot or keep the Amazon app open when you arrive at the drop-off location — the UPS or Kohl's associate scans this code and processes your return.`,
      },
      {
        title: 'Track your refund',
        content: 'After dropping off the item, check your email for a drop-off confirmation. Refunds typically arrive within 3–5 business days to your original payment method (credit card, Amazon gift card balance, etc.). You can check the status under "Returns & Orders" in your Amazon account.',
        warning: 'Return windows vary by item and seller. Items "Sold by Amazon" or "Fulfilled by Amazon" typically have the easiest returns. Items sold by third-party sellers may have different return policies — check the listing before you buy.',
      },
    ],
  },
];
