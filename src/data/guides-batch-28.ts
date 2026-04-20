import { Guide } from './guides';

export const guidesBatch28: Guide[] = [
  {
    slug: 'icloud-shared-photo-library',
    title: 'How to Set Up iCloud Shared Photo Library With Family',
    excerpt: 'iCloud Shared Photo Library lets you automatically share photos with up to five family members — no texting or emailing photos back and forth.',
    category: 'phone-guides',
    tags: ['iCloud', 'shared photos', 'family sharing', 'iPhone', 'photos'],
    readTime: '5 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `iCloud Shared Photo Library is a feature built into iPhone and iPad that lets up to five family members share a single photo collection. When someone adds a photo to the shared library, everyone else in the group can see it immediately in their own Photos app — just like a photo they took themselves.

This is different from a shared album. With a shared album, photos stay on the original person's phone and others just view copies. With Shared Photo Library, photos actually live in the shared collection and count toward everyone's iCloud storage equally.

Here's why it matters for families: grandparents can automatically see every photo grandkids take. Parents and adult children can pool family photos from multiple people's cameras into one place. No more "can you send me that photo?" — it's already there.

To use this feature, everyone in the group needs an iPhone or iPad running iOS 16 or later. The person who sets it up is the "library organizer" and can invite up to five other people. Invited participants can contribute, view, and download all photos.

You can set sharing rules to be automatic — for example, automatically share all photos taken within Bluetooth range of family members, or photos that detect certain people's faces. You can also choose which existing photos to move into the shared library or keep them personal.

Each person still has their own Personal Library for private photos. You can switch between libraries inside the Photos app whenever you want. It's a flexible, well-designed system once it's set up.`,
    steps: [
      {
        title: 'Open Settings and Tap Your Name',
        content: 'On your iPhone or iPad, open Settings. Tap your name at the top (your Apple ID). Then tap iCloud → Photos. Make sure "Sync this iPhone" is turned on before proceeding.',
        tip: 'Everyone in the group needs iOS 16 or later. Go to Settings → General → Software Update to check.',
      },
      {
        title: 'Set Up the Shared Library',
        content: `Open the Photos app. Tap the three-line menu icon in the top-left corner. Tap "Create Shared Library." Follow the on-screen steps — you'll choose participants, select which existing photos to include, and set up automatic sharing preferences.`,
      },
      {
        title: 'Invite Family Members',
        content: 'When prompted, enter the phone numbers or email addresses (Apple IDs) of up to five people to invite. They will receive a notification on their iPhone and can accept or decline. Once accepted, the shared library appears in their Photos app.',
        warning: 'Invited members can see, edit, and delete photos in the shared library. Only invite people you trust with your full photo collection, or be careful about which photos you move into the shared library.',
      },
      {
        title: 'Choose What to Share Automatically',
        content: `You can set the camera to automatically add photos to the Shared Library when you're near invited family members (uses Bluetooth). Or set it to always add to shared, always add to personal, or ask each time. Go to Settings → Photos → Shared Library → Auto-Share.`,
      },
      {
        title: 'Switch Between Libraries',
        content: 'Open Photos. Tap the three-line icon in the top-left to see both Personal Library and Shared Library. Tap whichever you want to view or add to. The camera icon in the top-right of the Camera app also shows a small icon to indicate which library a photo will save to.',
        tip: 'To move a photo from your Personal Library to Shared Library: open the photo, tap the three-dot menu (⋯), and tap "Move to Shared Library."',
      },
    ],
  },
  {
    slug: 'screen-mirror-android-to-tv',
    title: 'How to Mirror Your Android Phone Screen to a TV',
    excerpt: `Android phones can wirelessly display on your TV using Cast, Smart View, or a Chromecast device. Here's how to get your phone screen on the big screen.`,
    category: 'entertainment',
    tags: ['Android', 'screen mirror', 'Chromecast', 'cast to TV', 'Samsung Smart View'],
    readTime: '5 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Android phones have a built-in feature for mirroring your screen to a TV — no cables required. Depending on your phone brand and your TV setup, it works through Google Cast, Samsung Smart View, Miracast, or a Chromecast device plugged into your TV.

The most reliable approach uses a Chromecast or a TV with Chromecast built in. Chromecast is a small device (about the size of a thumb drive) that plugs into the HDMI port on your TV. Once set up, you can cast from any Android phone or Chrome browser to that TV. Many smart TVs now have Chromecast built in — check your TV's settings for a "Cast" option.

Samsung phones have their own feature called Smart View or Wireless DeX, which can connect directly to Samsung Smart TVs or compatible displays without needing a Chromecast.

Older TVs without any smart features can still receive Android screen mirroring if your phone supports Miracast — an older wireless screen-sharing standard. However, Chromecast is more reliable and gives better results.

Like AirPlay on iPhone, Android mirroring has two modes: full screen mirroring (everything on your phone appears on TV) and app-specific casting (just a video or photo is sent to the TV while your phone stays usable).

All devices need to be on the same Wi-Fi network for casting to work. The quality depends on your Wi-Fi signal — a strong signal close to your router gives the smoothest experience.`,
    steps: [
      {
        title: 'Check What Your TV Supports',
        content: `If your TV has a built-in Chromecast, you'll see "Cast" in its settings or apps. Samsung Smart TVs support Smart View natively. If your TV is older or basic, you'll need a Chromecast dongle (plugs into any HDMI port, about $30 from Best Buy or Amazon).`,
      },
      {
        title: 'Cast Using the Quick Settings Panel',
        content: 'Swipe down from the top of your phone to open Quick Settings (swipe twice on some phones to see all icons). Look for "Cast," "Smart View," "Screen Mirror," or "Screen Cast." Tap it. Your phone scans for available devices. Tap your TV or Chromecast name.',
        tip: `If you don't see a Cast icon in Quick Settings, go to Settings → Connected Devices → Cast. You can also add it to Quick Settings by tapping the pencil/edit icon.`,
      },
      {
        title: 'Cast From Google Home App',
        content: `If your TV or Chromecast is set up in Google Home: open the Google Home app, find your TV in the list, tap it, then tap "Cast my screen." Follow the on-screen confirmation. This approach works well if Quick Settings casting isn't finding your device.`,
      },
      {
        title: 'Cast a Specific Video From an App',
        content: 'Open YouTube or another streaming app. Start a video. Tap the Cast icon (looks like a rectangle with Wi-Fi waves in the corner) in the video player. Select your TV. The video plays on the TV while your phone is free to check other apps.',
      },
      {
        title: 'Stop Casting',
        content: 'Open Quick Settings again and tap Cast (or Smart View). Tap "Disconnect." Or, if you cast from an app, tap the Cast icon in the app and tap "Stop Casting." Your TV returns to its normal input.',
        warning: `If your phone screen stays on your TV after you're done, make sure to disconnect — otherwise anyone nearby can still see what's on your phone.`,
      },
    ],
  },
  {
    slug: 'hdmi-laptop-to-tv',
    title: 'How to Connect a Laptop to a TV Using HDMI',
    excerpt: 'An HDMI cable lets you use your TV as a big monitor for your laptop — great for video calls, streaming, or showing photos to family.',
    category: 'essential-skills',
    tags: ['HDMI', 'laptop', 'TV', 'connect', 'monitor'],
    readTime: '4 min',
    thumbnailEmoji: '🔌',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Connecting a laptop to a TV is one of the most practical tech setups — you get a much larger screen for video calls, family photo slideshows, streaming movies, or doing anything you'd normally do on your laptop. All you need is an HDMI cable.

HDMI (High-Definition Multimedia Interface) carries both video and audio through a single cable. Most TVs have at least two or three HDMI ports on the back or side. Most Windows laptops also have a full-size HDMI port. MacBooks and newer Windows ultrabooks often only have USB-C ports, so you'll need a small USB-C to HDMI adapter (costs about $10-15).

Once connected, your TV becomes a second screen — or you can set it to mirror your laptop screen exactly. Mirroring is the most common choice: whatever is on your laptop screen also appears on the TV.

The connection is instant — no Wi-Fi needed, no passwords, no setup. You plug in the cable, switch your TV to the right HDMI input, and the laptop screen appears on TV.

Sound comes through the TV speakers automatically when you use HDMI, which is usually better than laptop speakers. You can still adjust the volume with your TV remote.

HDMI cables come in different lengths — 6-foot cables work for most living room setups. Longer cables (10 or 15 feet) let you keep the laptop further from the TV. Standard HDMI cables from any store work fine — you don't need to pay extra for "high-speed" or "premium" cables for typical home use.`,
    steps: [
      {
        title: 'Get the Right Cable and Adapter',
        content: `Check your laptop's ports. Full-size HDMI (looks like a wide trapezoid) connects directly. USB-C or Thunderbolt ports need a USB-C to HDMI adapter. Check your TV — locate the HDMI ports on the back or side and note which HDMI number (1, 2, 3) you'll use.`,
        tip: `If you're not sure what ports your laptop has, take a photo of the sides of your laptop and search for its model name plus "ports" online.`,
      },
      {
        title: 'Plug In the HDMI Cable',
        content: `With both the TV and laptop on, plug one end of the HDMI cable into your laptop (or adapter) and the other end into the TV's HDMI port. The cable only goes in one way — don't force it.`,
      },
      {
        title: 'Switch Your TV to the Right Input',
        content: 'Press the "Input," "Source," or "Home" button on your TV remote. A list of inputs appears (HDMI 1, HDMI 2, etc.). Select the HDMI number that matches where you plugged in the cable. Your laptop screen should now appear on the TV.',
      },
      {
        title: 'Set Up Display Mode on Your Laptop (Windows)',
        content: 'Press the Windows key + P on your keyboard. A sidebar appears with options: Duplicate (mirror laptop on TV), Extend (TV is a second screen), Second screen only (only TV shows content), or PC screen only. Choose "Duplicate" to mirror your screen on both displays.',
        tip: `On Mac: Go to Apple menu → System Settings → Displays. You'll see both screens and can drag to arrange them or check "Mirror Displays."`,
      },
      {
        title: 'Adjust Resolution If the Picture Looks Off',
        content: `If text looks blurry or the picture doesn't fill the screen: Windows — right-click the desktop → Display Settings → change Resolution to match your TV's native resolution (usually 1920×1080 for HD TVs). Mac — System Settings → Displays → select the TV → choose the appropriate resolution.`,
      },
    ],
  },
  {
    slug: 'skylight-frame-setup',
    title: 'How to Set Up a Skylight Digital Photo Frame',
    excerpt: 'Skylight is a Wi-Fi digital photo frame your family can send photos to from anywhere by email — no apps or accounts required for senders.',
    category: 'entertainment',
    tags: ['Skylight', 'digital photo frame', 'family photos', 'gift', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A Skylight digital photo frame is a Wi-Fi-connected picture frame that displays photos sent to it by family and friends. It sits on a shelf or desk like any picture frame, but it shows a rotating slideshow of photos that loved ones send from their phones — from anywhere in the world.

What makes Skylight popular for seniors is the simplicity: family members send photos by emailing them to the frame's unique email address. That's it. No app to download, no account to create, no steps to follow. You just email a photo and it appears on the frame.

The frame itself needs to be set up once: connect it to Wi-Fi and activate the account. After that, it runs on its own, automatically displaying new photos as they arrive. It plugs into any wall outlet.

Skylight makes a thoughtful gift from adult children to elderly parents who live alone — grandchildren's photos appear automatically throughout the day. You can also add captions to photos, and the frame owner can touch the screen to "like" a photo, sending a notification back to the sender.

The basic Skylight Frame costs around $180. There's also a Skylight Plus subscription ($40/year) that adds video sharing, animated GIFs, multi-frame management, and storage for unlimited photos. The basic frame without a subscription still holds thousands of photos.

Setup takes about 10-15 minutes. You'll need Wi-Fi name and password, a smartphone or computer to activate the account, and to share the email address with family.`,
    steps: [
      {
        title: 'Plug In the Frame and Follow Setup',
        content: 'Plug the Skylight frame into a wall outlet. It powers on automatically and walks you through setup on the touchscreen: select your Wi-Fi network, enter your Wi-Fi password using the on-screen keyboard, and create a free Skylight account (or sign into an existing one).',
      },
      {
        title: `Note Your Frame's Unique Email Address`,
        content: 'During setup, Skylight gives you a unique email address for the frame — something like yourname@ourskylight.com. This is the address family members use to send photos. Write it down or screenshot it. You can also find it later in the Skylight app under frame settings.',
      },
      {
        title: 'Share the Email Address With Family',
        content: `Send the frame's email address to everyone you want to be able to send photos. They can save it as a contact on their phone ("Mom's Frame" or similar). To send a photo, they just email the image as an attachment to that address. The photo appears on the frame within minutes.`,
        tip: `Create a family group text or email thread with the frame's address so everyone has it.`,
      },
      {
        title: 'Download the Skylight App (Optional)',
        content: `The free Skylight app (available for iPhone and Android) lets the frame owner manage photos, delete ones they don't want, set the slideshow order, adjust display brightness, and see who sent what. It's optional — the frame works without the app.`,
      },
      {
        title: 'Adjust Display Settings',
        content: 'Tap the screen to wake it and access settings. You can set sleep hours (so it turns off at night), adjust brightness, change how long each photo displays, and turn captions on or off. The frame wakes automatically in the morning at the time you set.',
        tip: 'The frame owner can "like" a photo by touching the heart on screen — the sender gets a notification that the photo was enjoyed.',
      },
    ],
  },
  {
    slug: 'groupme-group-messaging',
    title: 'How to Use GroupMe for Group Texting',
    excerpt: 'GroupMe is a free app for group chats — great for family, church groups, neighborhood clubs, or any gathering where you want to keep everyone in the loop.',
    category: 'communication',
    tags: ['GroupMe', 'group text', 'group chat', 'messaging', 'family'],
    readTime: '5 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `GroupMe is a free messaging app designed specifically for group conversations. Unlike a standard group text, GroupMe works the same way whether members have iPhones, Android phones, or even just regular phone numbers with no smartphone at all. Everyone receives messages the same way.

This makes GroupMe popular for community groups where members have a mix of phone types. A neighborhood watch, a church congregation, a book club, a family reunion planning committee — GroupMe handles these well without requiring everyone to use the same type of phone or app.

GroupMe was acquired by Microsoft and is available as a free app for iPhone, Android, and Windows. It's also accessible through a web browser if you prefer to use it on a computer.

A GroupMe group has one or more organizers (called administrators or "admins") who create the group, name it, and add members. Members can share text messages, photos, videos, links, and emoji. Admins can add or remove people at any time.

One helpful feature: you can "like" a message by tapping a heart on it. This lets people acknowledge something without sending a reply that clutters the conversation — useful when someone posts an event announcement and 20 people don't all need to reply "OK!"

GroupMe also works without the app: people can send and receive messages by regular SMS text if they don't want to download an app. They just get a text message from a GroupMe number and can reply to it. This makes it accessible for people who aren't comfortable with apps.`,
    steps: [
      {
        title: 'Download GroupMe and Create an Account',
        content: `Search for "GroupMe" in the App Store (iPhone) or Google Play Store (Android) and install the free app. Open it and sign up with your phone number or Microsoft account. You'll receive a verification code by text to confirm your number.`,
      },
      {
        title: 'Create a New Group',
        content: 'Tap the pencil icon or "New Group" button. Give the group a name (e.g., "Smith Family" or "Elm Street Neighbors"). Tap "Add people" — enter phone numbers or email addresses, or select from your contacts. Tap "Create" when done.',
        tip: 'You can add a group photo or avatar by tapping the camera icon next to the group name. This makes it easier to identify the group at a glance.',
      },
      {
        title: 'Send and Receive Messages',
        content: `Open a group and type in the message bar at the bottom. Tap the send arrow. To share a photo, tap the paperclip or photo icon next to the text bar. Everyone in the group sees the message instantly (or as a text if they don't have the app).`,
      },
      {
        title: 'Add or Remove Members',
        content: `Open the group. Tap the group name or avatar at the top. Scroll down to "Members." Tap "Add Members" to add someone new, or tap a member's name and choose "Remove from Group" if needed. You must be an admin to remove members.`,
      },
      {
        title: 'Manage Notifications',
        content: `If a group gets too chatty, you can mute it. Open the group → tap the name at the top → "Notifications" → choose "Do not disturb" for a set period or indefinitely. You'll still see messages when you open the app, but won't get constant alerts.`,
        warning: `Muting a group means you won't get alerts for time-sensitive messages. Reserve muting for lower-priority groups.`,
      },
    ],
  },
  {
    slug: 'teleparty-netflix-watch',
    title: 'How to Watch Netflix With Family Using Teleparty',
    excerpt: 'Teleparty (formerly Netflix Party) lets you watch Netflix, Hulu, or Disney+ at the same time as someone far away — with a shared chat on the side.',
    category: 'entertainment',
    tags: ['Teleparty', 'Netflix Party', 'watch together', 'streaming', 'family'],
    readTime: '5 min',
    thumbnailEmoji: '🍿',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Teleparty (previously called Netflix Party) is a free browser extension that lets you watch Netflix, Hulu, Disney+, HBO Max, or Amazon Prime Video at exactly the same time as someone else — even if you're in different cities or states. It syncs playback so everyone pauses and resumes together, and adds a group chat window on the right side of the screen.

This has become popular for families who want to watch movies together despite being apart. You could watch a holiday movie with a grandchild in another state, or do a regular "movie night" with siblings across the country.

Teleparty works only on a computer, in the Chrome, Edge, or Firefox browser. It does not work on tablets, phones, or smart TVs directly — the person hosting the watch party must be on a computer with the extension installed. Guests also need the extension installed on their computers to join.

Everyone in the party needs their own subscription to the streaming service being watched. You're not sharing an account — Teleparty just synchronizes playback so everyone is watching the same thing at the same time from their own accounts.

The chat window on the side shows everyone who's watching and lets you comment, react with emoji, and share reactions in real time. You can turn chat off if you just want synchronized viewing without the side conversation.

Setup takes about five minutes: install the extension, start a watch party, and share the link. Anyone with the link and the extension can join.`,
    steps: [
      {
        title: 'Install the Teleparty Extension',
        content: `On your computer, open the Chrome, Edge, or Firefox browser. Go to teleparty.com → "Get Extension." Click "Add to Chrome" (or your browser) and confirm the installation. You'll see the Teleparty icon appear in your browser toolbar.`,
        tip: `If you're inviting family to join, they also need to install the extension on their computers. Send them to teleparty.com to download it — takes under two minutes.`,
      },
      {
        title: 'Open the Show or Movie You Want to Watch',
        content: 'Log in to Netflix (or Hulu, Disney+, etc.) in your browser. Navigate to the title you want to watch and start playing it. Pause it at the beginning.',
      },
      {
        title: 'Start a Watch Party',
        content: 'Click the Teleparty icon in your browser toolbar. A small panel appears. Click "Start the Party." Teleparty generates a unique link for your party — it looks like a long web address. Copy that link.',
      },
      {
        title: 'Share the Link With Family',
        content: `Paste the Teleparty link into a text message, email, or group chat and send it to everyone you want to watch with. When they click the link on their computer (where Teleparty is installed), they're automatically joined to your viewing session.`,
      },
      {
        title: 'Start Watching Together',
        content: `Once everyone has joined (you can see their names in the chat panel), press play. Teleparty keeps everyone's playback synchronized — if someone pauses, it pauses for everyone. Use the chat on the right to react and comment during the show.`,
        warning: `Everyone needs their own active subscription to the streaming service. Teleparty is just a sync tool — it doesn't share account credentials.`,
      },
    ],
  },
  {
    slug: 'perplexity-ai-guide',
    title: 'How to Use Perplexity AI to Research Any Topic',
    excerpt: 'Perplexity AI is a free AI-powered search engine that gives you direct answers with sources — instead of a list of links to click through.',
    category: 'ai-guides',
    tags: ['Perplexity AI', 'AI search', 'research tool', 'artificial intelligence', 'internet'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Perplexity AI is a search engine powered by artificial intelligence. Instead of showing you a list of blue links, it reads multiple sources and gives you a direct, written answer to your question — along with citations so you can verify the information or read more.

Think of it as the difference between asking a librarian a question versus walking into a library and having to find the answer yourself. Perplexity reads the books and gives you a summary, with footnotes showing which books it used.

This makes it particularly useful for practical research questions: "What are the side effects of metformin?" or "What's the best way to remove a stripped screw?" or "What do I need to apply for Medicare Part B?" You get a clear, organized answer instead of having to compare five different websites.

Perplexity is free at perplexity.ai and works in any web browser on a computer, tablet, or phone. There's also a free app. A paid "Pro" version offers more advanced features, but the free version handles most everyday research questions well.

Unlike some AI tools that only know information up to a certain date, Perplexity searches the live internet and can answer questions about current events, today's prices, recent news, and anything that changes frequently.

Each answer includes numbered citations in brackets, like [1] or [2]. Clicking those numbers shows you exactly which website the information came from, so you can go read the original source if you want more detail. This is what separates Perplexity from other AI chatbots — transparency about where the answers come from.`,
    steps: [
      {
        title: 'Open Perplexity',
        content: 'In any web browser, go to perplexity.ai. You can use it without creating an account. For free users, you can search as much as you want. Creating a free account lets you save your search history.',
      },
      {
        title: 'Type Your Question in Plain Language',
        content: `In the search bar at the center of the page, type a question the same way you would say it to a person. For example: "What blood pressure numbers are considered high for a 70-year-old?" You don't need special phrasing — natural questions work best.`,
        tip: 'Be specific. "What are good exercises for someone with arthritis in the knee?" gets a more useful answer than just "knee exercises."',
      },
      {
        title: 'Read the Answer and Check the Sources',
        content: 'Perplexity shows a written answer, usually several paragraphs. Numbers in brackets like [1] [2] link to the sources it used. Click any bracket number at the right side of the screen to see the source website. Read those sources if you want the full original information.',
      },
      {
        title: 'Ask Follow-Up Questions',
        content: 'Below the answer, you can type a follow-up question in the same box — Perplexity remembers your conversation thread. For example, after asking about Medicare Part B, you could follow up with "What documents do I need to apply?" without starting over.',
      },
      {
        title: 'Use the Focus Feature for Specific Searches',
        content: 'Before searching, you can click "Focus" to limit results to specific types of content: "Academic" searches scholarly papers, "YouTube" searches video content, "Reddit" searches community discussions, and "Social" searches social media posts. For health questions, "Academic" can surface medical research.',
        warning: 'Perplexity provides helpful summaries, but for medical, legal, or financial decisions, always verify the information with a qualified professional. AI tools can occasionally misstate or oversimplify complex topics.',
      },
    ],
  },
  {
    slug: 'ai-voice-clone-scam-warning',
    title: 'The AI Voice Clone Scam: How to Protect Yourself',
    excerpt: `Scammers now use AI to clone your family member's voice and call you pretending to be them in an emergency. Here's how to recognize it and protect yourself.`,
    category: 'safety-guides',
    tags: ['AI scam', 'voice clone', 'scam', 'phone scam', 'deepfake audio'],
    readTime: '6 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A new type of scam is hitting families hard: AI voice cloning. Scammers use free or low-cost AI tools to clone someone's voice from just a few seconds of audio — a video on social media, a voicemail, a YouTube clip — and then call family members using that cloned voice to ask for money.

The call sounds exactly like your son, daughter, grandchild, or spouse. They say they're in trouble — arrested, in a car accident, stranded abroad, in the hospital — and they need money immediately. They beg you not to tell others because they're embarrassed. Then someone else gets on the phone claiming to be a lawyer, police officer, or bail bondsman who needs you to send gift cards or wire money.

This is called the "grandparent scam" or "virtual kidnapping" scam, but AI voice cloning has made it dramatically more convincing. The FTC and AARP have both issued warnings about this. Thousands of people have lost thousands of dollars to these calls.

There are specific things that make these calls hard to recognize: the voice sounds real, the person knows details about your family (from public social media), and the urgency is designed to panic you into acting before thinking.

The defense is a family code word — a secret word or phrase only your real family members know. If someone calls claiming to be a family member in distress, ask for the code word. A real family member will know it. A scammer will not.

You should also always hang up and call back on the family member's real number, or call another family member to verify. Scammers will resist this — they'll say there's no time, the phone is broken, or you can't call anyone. That resistance is itself a warning sign.`,
    steps: [
      {
        title: 'Create a Family Code Word',
        content: `Choose a random, memorable word or phrase that all your close family members know — something that wouldn't come up naturally in conversation, like "pineapple bridge" or "blue Tuesday." Share it with every family member in person or over a private message. Tell them: if anyone ever calls claiming to be family in an emergency, they should use this word to prove it's really them.`,
        tip: 'Write the code word on a piece of paper and keep it somewhere private at home — not on your phone where a scammer might find it.',
      },
      {
        title: 'Recognize the Red Flags',
        content: `Be immediately suspicious of any call that: claims a family member is in sudden danger or legal trouble, demands money urgently via gift cards or wire transfer, asks you to keep the call secret from other family members, won't allow you to call back or verify with another person, or says there's "no time" for any confirmation.`,
      },
      {
        title: 'Hang Up and Call Back',
        content: 'If you get a call like this, hang up. Do not stay on the line. Then call your family member directly on their real, saved phone number — not any number the caller gave you. If it was truly an emergency, your family member can confirm. If they answer normally, it was a scam.',
        warning: `Scammers will tell you the family member can't take calls right now, or that calling will make things worse. Ignore this. Hang up and call back on their real number. Always.`,
      },
      {
        title: 'Limit Voice Content on Public Social Media',
        content: `AI voice cloning only needs a few seconds of audio. Be aware that videos you post publicly on Facebook, TikTok, or YouTube where family members speak can be used to clone their voice. You don't have to stop posting, but know that public audio is public. Limiting posts to "Friends" rather than "Public" reduces exposure.`,
      },
      {
        title: 'Report the Scam',
        content: 'If you receive a voice clone scam call, report it to the FTC at reportfraud.ftc.gov and to your local police non-emergency line. Reporting helps law enforcement track patterns and warn communities. If you sent money, report it immediately — some transfers can be reversed within hours.',
      },
    ],
  },
  {
    slug: 'unsubscribe-from-email-lists',
    title: 'How to Unsubscribe From Junk Email and Clean Up Your Inbox',
    excerpt: `If your inbox is full of newsletters and promotions you never signed up for, here's how to unsubscribe and get a handle on the clutter.`,
    category: 'essential-skills',
    tags: ['email', 'unsubscribe', 'inbox', 'spam', 'Gmail', 'Outlook'],
    readTime: '5 min',
    thumbnailEmoji: '📭',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If your email inbox feels like a flood you can never stop, you're not alone. Most people accumulate dozens of email subscriptions over the years — newsletters, store promotions, app notifications, loyalty program emails — many from things they signed up for once and forgot about.

The difference between unwanted subscriptions and spam is important. Spam is email from sources you've never interacted with — usually illegal to send without consent. Subscriptions are emails from companies you did interact with (made a purchase, created an account, signed a petition), and you agreed — sometimes without realizing it — to receive their emails.

For subscriptions, the right move is to unsubscribe using the link at the bottom of the email. This legally removes you from their list within 10 business days. For true spam (from sources you've never interacted with), don't click anything — mark it as spam so your email provider learns to filter it.

Every commercial email sent to you is legally required to have an "Unsubscribe" or "Manage Preferences" link at the very bottom, in small print. It's often the tiniest text on the page, but it must be there by law (the CAN-SPAM Act in the US). Clicking it removes you from that company's email list.

Going through one unsubscribe at a time is tedious but effective. Alternatively, services like Unroll.me or Gmail's built-in filters can help manage subscriptions in bulk. Gmail also has a "Promotions" tab that automatically sorts many marketing emails so they don't clutter your main inbox.

The goal isn't to get to zero emails — it's to get to a state where the emails you receive are ones you actually want.`,
    steps: [
      {
        title: 'Find the Unsubscribe Link',
        content: 'Open an unwanted email. Scroll all the way to the very bottom of the email — past the message, past any images. Look for tiny text that says "Unsubscribe," "Manage email preferences," or "Opt out." Click that link. It usually takes you to a confirmation page where you click "Unsubscribe" once more.',
        tip: `In Gmail, some emails have an "Unsubscribe" link right next to the sender's name at the top — look for it in small text next to "From: [Company Name]." Clicking it is faster than scrolling to the bottom.`,
      },
      {
        title: `Use Gmail's Unsubscribe Prompt`,
        content: `Gmail often detects subscription emails and shows an "Unsubscribe" link at the top of the email, right next to the sender's name. Click it, then click "Unsubscribe" in the popup. Gmail handles the process for you without having to visit the company's website.`,
      },
      {
        title: `Mark True Spam as Spam (Don't Unsubscribe)`,
        content: `If an email comes from a company you've never heard of and never interacted with, don't click the unsubscribe link — clicking any link in unknown emails can confirm your address is active and lead to more spam. Instead, select the email and click "Report Spam" or "Mark as Spam." Your email provider learns to filter it.`,
        warning: 'Never click links in emails that look suspicious or come from completely unknown senders. When in doubt, mark as spam instead of clicking anything.',
      },
      {
        title: 'Use the Promotions Tab in Gmail',
        content: `Gmail automatically sorts many marketing and promotional emails into a "Promotions" tab — a separate tab at the top of your inbox. If you don't see it, go to the inbox view and click the gear icon → See all settings → Inbox → check "Promotions." This keeps your main inbox for important emails only.`,
      },
      {
        title: 'Create a Filter for Recurring Senders',
        content: `For emails from a sender you want to skip but don't want to fully unsubscribe from: In Gmail, open an email → click the three-dot menu → "Filter messages like these" → click "Create filter" → choose "Skip the Inbox (Archive it)" or "Delete it." Future emails from that sender go straight to Archive or Trash.`,
      },
    ],
  },
  {
    slug: 'iphone-photo-slideshow',
    title: 'How to Create a Photo Slideshow on Your iPhone',
    excerpt: `Your iPhone automatically creates Memories slideshows from your photos — and you can also make your own to share with family. Here's how both work.`,
    category: 'phone-guides',
    tags: ['iPhone', 'photos', 'slideshow', 'Memories', 'family photos'],
    readTime: '5 min',
    thumbnailEmoji: '🎞️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your iPhone Photos app can turn your photos into beautiful video slideshows automatically — or let you create your own. There are two main ways to create a slideshow: the automatic "Memories" feature and a manual slideshow you can customize and share.

Memories are the slideshows iPhone creates on its own, without you doing anything. The app analyzes your photos, groups related ones together (same trip, same people, same event), and creates short video montages with music. These appear in the "For You" tab in the Photos app. They feel like mini movies of moments from your life.

You can also create a manual slideshow any time from any group of photos. Open a photo album or select specific photos, tap the slideshow option, and let the phone play through them on screen. This is great for showing vacation photos to family at a gathering.

For sharing a more polished video, you can use Memories as a starting point and customize it: change the music, adjust the title, add or remove photos, and export the finished video to share via message or email.

A related feature is Featured Photos, which the Photos app surfaces in widgets on your home screen and lock screen — showing memorable photos from your library. The same AI that creates Memories decides which photos to feature, based on what it thinks you'd want to see and share.

These features use AI that runs entirely on your phone — Apple doesn't upload your personal photos to analyze them. The processing happens locally, so your photos stay private.`,
    steps: [
      {
        title: 'Find Your Memories Slideshows',
        content: 'Open the Photos app. Tap "For You" at the bottom of the screen. Scroll down to the "Memories" section. Tap any Memory to play it. It plays as a short video with music and transitions. While playing, you can tap to pause and see the individual photos.',
        tip: 'Tap the heart icon on a Memory to save it to your library as a video file you can share.',
      },
      {
        title: 'Customize a Memory',
        content: 'Open a Memory and tap the three-dot menu (⋯). Tap "Edit Memory." You can change the song playing, adjust the mood (which changes the editing style), change the title, add or remove photos, and set the duration. Tap Done when finished.',
      },
      {
        title: 'Create a Manual Slideshow',
        content: 'Open an album or go to your photo library. Tap "Select" in the top-right. Choose the photos you want in the slideshow (tap each one). Tap the share icon (square with arrow up) at the bottom left. Scroll down and tap "Slideshow." The photos play as a slideshow with music right on your screen.',
      },
      {
        title: 'Change Slideshow Settings',
        content: 'While a slideshow is playing, tap the screen to reveal controls. Tap the options icon (three lines or gear) to change the transition style (Origami, Dissolve, Wipe, etc.), change the music, and toggle shuffle on or off. These settings apply to the current playing slideshow.',
      },
      {
        title: 'Share a Slideshow With Family',
        content: 'To share a Memory as a video: play the Memory → tap the share icon → choose Messages, Mail, or any other share option. The video exports and attaches to your message. Recipients can watch it like any video — no app required on their end.',
        tip: 'For longer slideshows with many photos, the export can take a minute or two. Keep the screen on while it processes.',
      },
    ],
  },
  {
    slug: 'medicare-drug-price-lookup',
    title: 'How to Look Up Drug Prices on Medicare.gov',
    excerpt: `Medicare.gov has a free tool that lets you compare what different Part D plans would charge for your specific medications. Here's how to use it.`,
    category: 'health-tech',
    tags: ['Medicare', 'Part D', 'drug prices', 'prescription', 'Medicare.gov'],
    readTime: '6 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Medicare.gov has a free plan finder tool that lets you compare prescription drug costs across all Medicare Part D plans available in your area. This tool can save you hundreds or thousands of dollars per year — but most people don't know it exists or how to use it.

Part D is Medicare's prescription drug coverage. It's offered through private insurance companies that have contracted with Medicare. The plans vary significantly in what they cost and which drugs they cover. Two plans might charge very different amounts for the same medication.

The Medicare Plan Finder at medicare.gov/plan-compare lets you enter your specific medications and find which Part D plan covers them at the lowest total cost for you. It factors in monthly premiums (what you pay every month regardless of use), deductibles (what you pay before coverage kicks in), and copays (what you pay per prescription).

You can use this tool even if you're already enrolled in Part D — comparing annually is smart because drug prices and plan formularies (lists of covered drugs) change every year. Open enrollment for Medicare Part D runs from October 15 to December 7 each year.

To use the tool effectively, you'll need a list of your current medications (exact names and dosages) and your zip code. You can use the tool without logging in, but logging in with your Medicare.gov account shows your specific plan details and Medicare Summary Notice.

Pharmacies matter too — the tool asks which pharmacy you use. The same plan might have different costs depending on whether you use a retail pharmacy or mail order, and whether your pharmacy is "preferred" in the plan's network.`,
    steps: [
      {
        title: 'Gather Your Medication List First',
        content: `Write down all prescription medications you currently take, including the exact name (generic or brand), dosage, and how often you take them (e.g., "metformin 500mg twice daily"). You'll enter this information into the Medicare Plan Finder. Your pharmacy or doctor can give you a printed medication list if you need help.`,
      },
      {
        title: 'Go to the Medicare Plan Finder',
        content: `In a web browser, go to medicare.gov/plan-compare. You can use it without signing in. Enter your zip code when prompted. Choose "Drug plan (Part D)" — not Advantage plan — unless you're looking at Medicare Advantage plans that include drug coverage.`,
      },
      {
        title: 'Enter Your Medications',
        content: 'Click "Add Drugs." Type the name of each medication in the search box — the tool suggests drug names as you type. Select the correct medication, then select the strength and form (tablet, capsule, liquid, etc.). Enter how many pills you take per month and click "Add drug." Repeat for each medication.',
        tip: `Include all prescription medications, even ones you take rarely or only when needed. Costs can vary widely based on what's on each plan's formulary.`,
      },
      {
        title: 'Enter Your Pharmacy',
        content: 'After adding medications, click "Add a pharmacy." Search by zip code or pharmacy name. Select the pharmacy you use. If you use mail-order pharmacy, select that option — mail order often costs less for maintenance medications.',
      },
      {
        title: 'Compare Plans and Enroll',
        content: 'The tool shows available Part D plans ranked by estimated yearly cost — your total cost including premiums, deductibles, and drug costs for your specific medication list. Look at "Total estimated annual drug cost" to compare. Click any plan for details. To enroll, click "Enroll" on the plan page, or call 1-800-MEDICARE (1-800-633-4227).',
        warning: `Only switch plans during Open Enrollment (October 15 – December 7) or a Special Enrollment Period. Switching outside those windows generally isn't allowed except for specific qualifying events.`,
      },
    ],
  },
  {
    slug: 'vanguard-app-guide',
    title: 'How to Check Your Vanguard Retirement Account on Your Phone',
    excerpt: 'The free Vanguard app lets you check your account balance, view investments, and see how your retirement savings are doing — right from your phone.',
    category: 'financial-tech',
    tags: ['Vanguard', 'retirement', '401k', 'IRA', 'investing', 'app'],
    readTime: '5 min',
    thumbnailEmoji: '📈',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Vanguard is one of the largest investment companies in the world, managing millions of Americans' retirement accounts — 401(k)s, IRAs, and other investment accounts. If your employer's retirement plan is through Vanguard, or if you have a personal IRA with them, their free mobile app lets you check your account anytime.

The app shows your current account balance and how it has changed over time, your investment holdings (the funds your money is in), recent account activity, and performance charts. Most people use it primarily to check their balance and see how their investments are performing.

Reading a retirement account balance can be confusing at first because the numbers are large and change daily with the stock market. A $237,500 balance today might show $234,000 tomorrow if the market dropped — that's normal and doesn't mean anything went wrong. Retirement accounts are long-term investments designed to grow over decades, not to be stable like a savings account.

The app also allows some account management: you can view and update beneficiaries, view statements and tax documents (including your 1099-R for distributions and 5498 for IRA contributions), change your contribution percentage if your employer allows it, and update contact information.

For active management — changing what funds your money is in, initiating withdrawals, or setting up new contributions — you typically have more options through the full Vanguard website on a computer. But for day-to-day account monitoring, the app is convenient and sufficient.

Vanguard's app is separate from your employer's 401(k) portal if your employer uses a different record-keeper. Some employers use Vanguard as record-keeper; others use Fidelity, Empower, or another company. Make sure you know which company holds your specific account.`,
    steps: [
      {
        title: 'Download the Vanguard App',
        content: `Search for "Vanguard" in the App Store (iPhone) or Google Play (Android). Download the free "Vanguard Investments" app — published by The Vanguard Group. Open it once it's installed.`,
      },
      {
        title: 'Log In to Your Account',
        content: `Tap "Log in." Enter your Vanguard username and password — these are the same credentials you use at vanguard.com. If you don't have a Vanguard online account yet, tap "Register" to create one. You'll need your Vanguard account number (found on any statement) to register.`,
        tip: 'Enable Face ID or fingerprint login in the app settings for faster, more secure access after the first login.',
      },
      {
        title: 'View Your Account Balance',
        content: 'After logging in, the app shows your total account balance prominently at the top of the home screen. Tap the account name or balance to see more detail: a breakdown by fund, percentage gains, and a performance chart showing changes over different time periods.',
      },
      {
        title: 'Find Your Tax Documents',
        content: 'Tap the menu icon (three lines) or "My Accounts" → "Documents." Tax forms appear here: 1099-R (if you took a distribution), 5498 (IRA contributions), 1099-DIV (dividend income), and year-end statements. You can view them on screen or download them as PDFs.',
      },
      {
        title: 'Set Up Notifications',
        content: 'Go to Settings (gear icon) → Notifications. Enable alerts for important account activity like large transactions, balance milestones, or new documents posted. This helps you know when something changes without logging in constantly.',
        warning: 'Vanguard will never call or text asking for your password or full Social Security number. If you receive an unexpected contact claiming to be Vanguard and asking for personal information, call Vanguard directly at 800-662-7447 to verify.',
      },
    ],
  },
  {
    slug: 'iphone-driving-mode-setup',
    title: 'How to Set Up iPhone Driving Focus to Avoid Distractions While Driving',
    excerpt: `iPhone's Driving Focus automatically silences notifications when you're in a car — so you can drive without your phone lighting up every few minutes.`,
    category: 'phone-guides',
    tags: ['iPhone', 'Driving Focus', 'distracted driving', 'safety', 'Focus mode'],
    readTime: '4 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Distracted driving is a serious safety issue, and phone notifications are one of the biggest culprits. iPhone has a built-in feature called Driving Focus that automatically silences notifications while you're driving — so your screen doesn't light up with texts, news alerts, and app notifications every few minutes behind the wheel.

When Driving Focus is on, your iPhone still receives calls and messages — it just doesn't buzz, beep, or light up to notify you. People who text you can receive an automatic reply letting them know you're driving and will respond later. If something is truly urgent, they can press "Urgent" in that message to break through the silence.

Driving Focus is part of Apple's broader "Focus" feature (introduced in iOS 15), which lets you set different notification rules for different situations — sleeping, working, exercising, or driving. Driving Focus specifically can activate automatically when iPhone detects you're in a moving vehicle.

The automatic detection uses a combination of speed (GPS), Bluetooth connection to a car, and connected CarPlay. It's fairly accurate — it generally distinguishes between being a passenger in a car versus driving. If it activates when you're a passenger, you can tap "I'm Not Driving" to dismiss it.

Setting up Driving Focus takes about two minutes. Once configured, it works automatically every time you get in a car without you having to remember to turn it on. This is one of the simplest things you can do to make your phone less distracting while driving.`,
    steps: [
      {
        title: 'Open Focus Settings',
        content: `Go to Settings → Focus. You'll see a list of Focus modes including "Driving." Tap "Driving" to configure it. If you don't see Driving listed, tap the "+" button and select Driving from the list.`,
      },
      {
        title: 'Set It to Turn On Automatically',
        content: 'Under "Turn On Automatically," tap "Automatically." Choose your preference: "When Connected to Car Bluetooth" (activates when paired to your car), "When Activated by CarPlay" (if you use CarPlay), or "Automatically" (iPhone detects motion/speed and enables it). Choose whatever matches your driving setup.',
        tip: `If you don't have Bluetooth in your car, choose "Automatically" — iPhone will detect motion and speed via GPS.`,
      },
      {
        title: 'Set Up Auto-Reply',
        content: `Scroll down to "Auto-Reply." Tap "Auto-Reply To" and choose who gets the automatic reply: No One, Recents, Favorites, or All Contacts. Tap "Auto-Reply" to customize the message text — the default says "I'm driving with Focus turned on. I'll see your message when I get where I'm going." You can edit it.`,
        tip: `Choose "Favorites" so close family members get the auto-reply but you're not sending it to every spam text or unknown number.`,
      },
      {
        title: 'Customize Allowed Notifications',
        content: 'Under "Allowed Notifications," you can specify apps or people whose notifications break through Driving Focus. For example, allow calls from immediate family. Tap "Add" under People or Apps to specify exceptions.',
      },
      {
        title: 'Turn It On Manually When Needed',
        content: 'Even without automatic detection, you can turn Driving Focus on manually: swipe down from the top-right of your iPhone to open Control Center. Tap the Focus button (crescent moon icon). Select "Driving." Tap again to turn it off when you arrive.',
      },
    ],
  },
  {
    slug: 'android-driving-mode',
    title: `How to Enable Android's Driving Mode to Stay Focused Behind the Wheel`,
    excerpt: 'Android phones have built-in options to reduce distractions while driving — including Do Not Disturb while driving and Google Assistant driving mode.',
    category: 'phone-guides',
    tags: ['Android', 'driving mode', 'distracted driving', 'Do Not Disturb', 'Google Assistant'],
    readTime: '4 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Android phones offer several ways to reduce phone distractions while driving. The features available depend on your phone model and Android version, but most modern Android phones have at least two options: Do Not Disturb while driving (which silences notifications automatically when you're in a car) and Google Assistant driving mode (which lets you use voice commands hands-free).

Do Not Disturb while driving automatically activates when Android detects you're in a moving vehicle. It silences notifications so your phone doesn't buzz or ring constantly. Important calls from favorite contacts can still get through. The feature is built into Android — no extra app required.

Google Assistant driving mode, sometimes called "Driving mode" in Google Maps, gives you a simplified dashboard when you launch navigation. It shows a large map at the top and big buttons for media controls, messages, and calls at the bottom — all designed to be operated with minimal attention while driving.

Samsung phones have a mode called "Driving mode" in their Sound and Vibration settings that works similarly. Some Samsung phones also support Samsung DeX or Samsung Auto for an in-car experience.

The key safety principle behind all of these features is the same: when driving, your phone should only interrupt you for things that genuinely require attention, and everything else should wait. Setting this up once means it works automatically every time you drive, without having to remember to turn anything on.

If you use Android Auto (connecting your phone to your car's screen), that interface is already designed for safer in-car use — just connect via USB or Bluetooth and Android Auto takes over.`,
    steps: [
      {
        title: 'Turn On Do Not Disturb While Driving',
        content: 'Go to Settings → Sound (or Notifications) → Do Not Disturb → turn it on. Look for "Schedules" or "Turn on automatically." Select "Driving" or "While driving." On Google Pixel phones: Settings → Digital Wellbeing → Do Not Disturb → Driving. This activates DND automatically when motion is detected.',
        tip: `The exact location of this setting varies by phone brand. If you can't find it, search "Driving" in your phone's Settings search bar.`,
      },
      {
        title: 'Configure Exceptions for Important Calls',
        content: `While in Do Not Disturb settings, find "Exceptions" or "Allow calls from." Set it to "Starred contacts" or "Favorites" — people you've marked as important in your Contacts app. This lets urgent calls from close family break through the silence while everything else is muted.`,
      },
      {
        title: 'Enable Google Assistant Driving Mode in Google Maps',
        content: 'Open Google Maps. Start a navigation route. Once navigation begins, a "Driving mode" interface may appear automatically. To enable it manually: in Google Maps, tap your profile picture → Settings → Navigation settings → "Google Assistant settings" → enable "Driving mode." Voice commands work hands-free.',
      },
      {
        title: 'Use Android Auto for Full Hands-Free Experience',
        content: 'Android Auto works when your car has a compatible screen. Plug your phone into your car via USB, or connect via Bluetooth if your car supports wireless Android Auto. The car screen shows a simplified Android Auto interface. All calls, navigation, and music controls are voice-first and easier to operate while driving.',
      },
      {
        title: 'Turn Off When Not Driving',
        content: `Driving mode deactivates automatically when your phone detects you've stopped. If it stays on after parking, swipe down to open Quick Settings and tap the Do Not Disturb icon to turn it off manually. Or just wait — most phones detect when you've been stationary for a few minutes and deactivate automatically.`,
      },
    ],
  },
  {
    slug: 'deepfake-photo-video-detection',
    title: 'How to Spot AI-Generated Images and Deepfake Videos',
    excerpt: `AI can now create realistic fake photos and videos of people saying or doing things they never did. Here's how to tell what's real from what's artificial.`,
    category: 'safety-guides',
    tags: ['deepfake', 'AI images', 'misinformation', 'scam', 'verification'],
    readTime: '6 min',
    thumbnailEmoji: '🕵️',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `AI-generated images and deepfake videos have become much more convincing and much more common. These are photos and videos created or altered by artificial intelligence — showing people, places, and events that either don't exist or never happened. Learning to recognize them is an increasingly important skill.

A deepfake video can make a politician appear to say something they never said. An AI-generated image can show a celebrity endorsing a product they've never heard of. Fake "news photos" of disasters, protests, or crimes can spread across social media in hours and be completely fabricated.

There are telltale signs to look for, though AI quality is improving constantly and some fakes are now very difficult to detect without tools.

For photos, check the fine details: hands often have wrong numbers of fingers or unnaturally bent joints. Backgrounds are sometimes blurry or contain impossible architectural elements. Text within images (signs, labels) is often garbled or unreadable. Lighting and shadows sometimes don't match across different parts of the image. Hair can look waxy or perfectly smooth in unnatural ways. Eyes may lack catchlights (small reflections of light) or look glassy.

For videos, watch for unnatural blinking patterns (too fast or too slow), mouth movements that don't quite match the audio, skin texture that looks smooth or plastic-like, and inconsistent head movement. Audio quality may differ from the video.

Reverse image searching is one of the most reliable methods — if a photo has been circulating under different captions or on multiple unrelated sites, it may be out of context or fabricated.

The best habit is a brief pause before sharing anything shocking or outrageous: does this seem too perfectly timed? Does it confirm something you already believed without question? Those are reasons to verify before sharing.`,
    steps: [
      {
        title: 'Check the Fine Details in Photos',
        content: 'Zoom in on any suspicious photo. Check: Are the hands normal? (AI often gets fingers wrong — six fingers, fused joints, or impossible angles.) Is background text readable? (AI-generated text in images is usually garbled.) Do shadows fall in consistent directions? Do reflections in eyes or glasses look natural?',
        tip: `Faces are what AI gets right — hands and text are where it struggles. If the face looks perfect but the hands look strange, that's a strong signal.`,
      },
      {
        title: 'Reverse Image Search the Photo',
        content: 'On a computer: right-click any suspicious image → "Search image on Google" (Chrome) or go to images.google.com and drag the image in. On phone: press and hold the image in Chrome → "Search image." If the same photo appears under many different contexts or captions, it may be misused or fabricated.',
      },
      {
        title: 'Check the Original Source',
        content: 'Before trusting a photo or video, ask: where did this originally come from? If someone shared it without a clear source, search for the story on the websites of major news organizations (AP, Reuters, NPR, local TV stations). If a major event happened, multiple credible sources would cover it.',
      },
      {
        title: 'Look for Deepfake Signs in Videos',
        content: `Watch for: blinking that's too infrequent or too fast, facial expressions that don't match the emotion in the voice, mouth movements that are slightly out of sync with audio, smooth or waxy-looking skin texture, and inconsistent lighting on the face versus the background.`,
        warning: `These signs aren't foolproof — high-quality deepfakes may not show obvious flaws. When a video shows someone doing or saying something potentially damaging, treat it as unverified until confirmed by multiple credible sources.`,
      },
      {
        title: 'Use Detection Tools for Important Verification',
        content: `Free tools can help with important verifications: Hive Moderation (hivemoderation.com), Google's About This Image (right-click an image in Chrome → "About this image"), and InVID/WeVerify browser extension for video analysis. These tools aren't perfect but can flag likely AI-generated content. For critical claims, defer to fact-checking organizations like Snopes, PolitiFact, or AP Fact Check.`,
      },
    ],
  },
  {
    slug: 'apple-tv-remote-basics',
    title: 'How to Use the Apple TV Siri Remote',
    excerpt: 'The Apple TV remote has a touch surface, swipe gestures, and a Siri button — once you know how it works, navigating Apple TV becomes much easier.',
    category: 'entertainment',
    tags: ['Apple TV', 'Siri Remote', 'remote control', 'streaming', 'TV'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `The Apple TV Siri Remote looks simple — just a slim aluminum rectangle — but it works differently from a traditional TV remote. Instead of pressing directional arrow buttons, you swipe on the top portion of the remote like a touchpad. This surprises many first-time Apple TV users.

The top section of the remote is a clickpad — it's a smooth surface you can swipe across to move the highlight on screen, and you can also press it like a physical button. Swipe up, down, left, or right to navigate menus. Click (press firmly in the center) to select. Press the outer ring of the clickpad to go up, down, left, or right without swiping.

Along the right side are volume up and volume down buttons. If your TV is connected via HDMI or ARC, these control your TV volume directly — you may not need your TV remote for volume at all.

The Back button (arrow pointing left) goes back one screen, the same as the back button on a phone. The Home button (TV shape) takes you back to the Apple TV home screen from anywhere. The Mute button silences audio.

The Siri button (the circle with a microphone icon) is one of the most useful features: hold it and speak a command. "Play The Queen's Gambit on Netflix," "Show me action movies," "What did he just say?" (replays the last 15 seconds with captions), "Turn on captions," or "How long is this movie?" — Siri handles all of these.

The remote also controls playback: single click the clickpad to pause/play. Click and hold briefly to scrub through a video. Swipe left or right to skip back or forward.`,
    steps: [
      {
        title: 'Navigate With Swipes and Clicks',
        content: 'Lightly swipe your thumb up, down, left, or right on the clickpad (top portion) to move the selection highlight on screen. Press the center firmly to select. Press the outer edge of the clickpad (top, bottom, left, right edges) to move without swiping. Swipes tend to scroll faster; edge presses move one item at a time.',
        tip: 'If swiping feels too sensitive, go to Settings → Remotes and Devices → Touch Surface Tracking → change the speed to Slow.',
      },
      {
        title: 'Use the Back and Home Buttons',
        content: 'The Back button (←) goes back one screen. Press it repeatedly to exit any app and return to the main menus. The Home button (TV icon) goes directly to the Apple TV Home Screen from anywhere. Press and hold Home to switch between running apps or access the Sleep/Restart/Shutdown menu.',
      },
      {
        title: 'Control Playback',
        content: 'While watching a video: click once to pause or play. Hold the clickpad down briefly to bring up a scrubber to skip through the video. Swipe left to jump back 10 seconds; swipe right to jump forward 10 seconds. Press the outer ring left/right to skip back or forward.',
      },
      {
        title: 'Use Siri for Voice Control',
        content: `Press and hold the Siri button (circle with microphone). Speak your request. You can ask Siri to: open specific apps ("Open Netflix"), search for content ("Find comedies from the 1980s"), control playback ("Skip ahead 5 minutes"), answer questions about what you're watching ("Who plays the main character?"), or enable captions ("Turn on subtitles").`,
        tip: '"What did she say?" asks Siri to rewind 15 seconds and turn on captions temporarily — helpful when dialogue is hard to hear.',
      },
      {
        title: 'Control TV Volume and Power',
        content: `Use the Volume Up (+) and Volume Down (-) buttons on the right edge of the remote to control your TV's volume — this works through HDMI-CEC. You can also press and hold the Home button → Sleep to put Apple TV to sleep. The remote's power button (circle with line) controls the TV directly.`,
      },
    ],
  },
  {
    slug: 'google-photos-create-album',
    title: 'How to Create and Share Photo Albums in Google Photos',
    excerpt: 'Google Photos lets you create custom albums to organize your favorite photos — and share them with family so everyone can add their own photos.',
    category: 'essential-skills',
    tags: ['Google Photos', 'album', 'photo sharing', 'family photos', 'Android'],
    readTime: '5 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Photos makes it straightforward to organize your photos into albums — custom collections you can name, curate, and share with anyone. This is different from the automatic albums Google Photos creates (like "Best of 2024" or "Trip to Florida") — you build these yourself, exactly the way you want.

An album can be anything: vacation photos, a grandchild's birthday party, holiday gatherings over the years, or a collection of garden photos. You can add photos from your camera roll at any time. Albums don't create copies of your photos — they're just organized views of photos that still live in your main library.

Shared albums are a popular use for this feature: you create an album and share a link with family members. They can view all the photos, and if you allow it, they can also add their own photos to the album. This is great for family events where multiple people take photos — everyone can contribute to one shared collection.

Shared album participants need a Google account to add photos but don't need one just to view photos in a shared album — you can share a link that anyone can open in a browser without signing in.

Google Photos also lets you create "Partner Sharing" — an automatic, ongoing sharing arrangement where every photo you take is also shared with one other person. This is similar to iCloud Shared Photo Library but between two people rather than a family group.

Albums sync across all your devices — create one on your phone and it appears on your computer's Google Photos too.`,
    steps: [
      {
        title: 'Create a New Album',
        content: 'Open the Google Photos app. Tap "Library" at the bottom. Tap "Albums" → then tap the "+" button or "New album." Give the album a name, like "Summer Vacation 2026." Tap the photos you want to add (they get a blue check), then tap "Done" or the checkmark.',
        tip: 'To add photos to an album later: open any photo, tap the three-dot menu (⋯) → "Add to album" → select the album.',
      },
      {
        title: 'Share an Album With Family',
        content: 'Open the album. Tap the share icon (person with a + sign, or the standard share arrow). Tap "Share album." You can share via a link (anyone with the link can view) or by entering specific email addresses or phone numbers. Toggle "Collaborate" on if you want recipients to be able to add photos.',
      },
      {
        title: 'Let Family Add Photos to a Shared Album',
        content: 'When sharing, make sure "Collaborate" is turned on. Shared participants can then add their own photos to the album from their Google Photos. Their photos appear alongside yours in the album. Everyone who has access can see all contributed photos.',
      },
      {
        title: 'Add Photos From the Camera Roll',
        content: 'To add existing photos to an album: go to your main photo library, tap "Select" (or long-press on a photo to start selecting). Tap all the photos you want to add. Tap the three-dot menu or share icon → "Add to album" → select the album name. Or, open the album → tap the "+" button to add more photos.',
      },
      {
        title: 'Find Your Albums',
        content: 'Tap "Library" at the bottom of Google Photos. Your albums appear in the "Albums" section. Tap any album to open it. To find albums others shared with you, tap "Sharing" at the bottom of the Google Photos app — all shared albums appear there.',
        tip: 'Albums you create in Google Photos also appear at photos.google.com on any web browser — handy for viewing on a computer or sharing by copying the album link from a browser.',
      },
    ],
  },
  {
    slug: 'windows-11-focus-sessions',
    title: 'How to Use Focus Sessions on Windows 11 to Get More Done',
    excerpt: 'Windows 11 has a built-in Focus Sessions feature in the Clock app that blocks distractions and keeps you on task using a timer — no extra software needed.',
    category: 'windows-guides',
    tags: ['Windows 11', 'Focus Sessions', 'productivity', 'Pomodoro', 'Clock app'],
    readTime: '4 min',
    thumbnailEmoji: '⏱️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Windows 11 includes a productivity feature called Focus Sessions, built directly into the Clock app. It's designed to help you concentrate on a task by setting a dedicated work timer — during that time, it can silence notifications, mute your Microsoft Teams status, and integrate with Spotify to play focus music.

Focus Sessions uses a technique called the Pomodoro Technique — working in focused intervals (typically 25 minutes) followed by short breaks (5 minutes). Research has shown that structured work intervals with regular breaks can improve concentration and reduce mental fatigue compared to trying to work for hours without stopping.

You don't need to follow the Pomodoro method strictly — you can set any session length from 5 minutes to 4 hours. The idea is to decide on a specific task, set a timer, and commit to working on only that task until the timer ends. Interruptions are minimized because notifications are silenced.

During a Focus Session, Windows can do several things automatically: turn on Do Not Disturb (silencing all notifications), set your Microsoft Teams or Skype status to "Focusing," and play a timer sound. After the session ends, a short break timer starts automatically if you've enabled it.

The feature also integrates with Microsoft To Do (a free task management app) — you can see your tasks in the Focus Sessions interface and mark them complete without switching apps.

Focus Sessions is particularly helpful if you work from home and get easily pulled away by notifications, emails, or social media, or if you're working on a complex project that requires sustained attention.`,
    steps: [
      {
        title: 'Open the Clock App',
        content: `Click the Start menu (Windows button) and search for "Clock." Open the Clock app. Along the left side, click "Focus Sessions" (the icon looks like a timer or target). If you don't see it, make sure Windows is updated — Focus Sessions was added in Windows 11.`,
      },
      {
        title: 'Set Your Session Length',
        content: 'The large dial in the center lets you set how long you want to focus. Click the "+" and "-" buttons or drag the dial. The default is 25 minutes. For longer tasks, try 45 minutes or an hour. For tasks you keep avoiding, a short 10-minute session can be enough to get started.',
        tip: `Start with 25 minutes if you're new to timed focus work. The goal is to maintain concentration for the full duration without switching tasks.`,
      },
      {
        title: 'Set Up Do Not Disturb',
        content: 'Click the Settings icon (gear) in the Focus Sessions screen. Turn on "Turn on Do not disturb automatically" — this silences all Windows notifications for the duration of your session. Turn on "Show elapsed time in clock" to see a visual timer. If you use Microsoft Teams, turn on "Set Teams status to Focusing."',
      },
      {
        title: 'Link to Microsoft To Do (Optional)',
        content: `Click "Get started" or the To Do integration button. Sign in with a Microsoft account to connect Microsoft To Do. Your task list then appears alongside the Focus timer — you can select a specific task to focus on, helping you stay intentional about what you're working on.`,
      },
      {
        title: 'Start and Use a Session',
        content: `Click "Start focus session." The timer counts down. Windows enters Do Not Disturb mode — you won't see pop-up notifications. Work on your chosen task until the timer ends. When it finishes, a tone plays and a break timer starts (5 minutes by default). After the break, start the next session.`,
        tip: 'You can pause a session mid-way by clicking Pause — useful if a genuine interruption arises. Click Resume to continue from where you paused.',
      },
    ],
  },
];
