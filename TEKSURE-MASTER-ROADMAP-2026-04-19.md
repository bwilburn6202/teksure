# TekSure Master Roadmap — Single Source of Truth

> **This file supersedes all previous plan/roadmap files as of 2026-04-19.**
> Old files archived to `archive/plans/`. See history there.
>
> **Vision:** TekSure is America's free, plain-English technology resource — the single destination where any person can find an answer to any tech question, learn at their own pace, stay safe online, and get human help when they need it. Always free. No jargon. No walls.

**Last updated:** 2026-04-19
**Current state:** ~1,353 guides · 68+ tools · 19 categories · 161 routes
**Guide target:** 2,500 by end of 2026

---

## CURRENT STATUS SNAPSHOT

| Area | Status |
|------|--------|
| Guide library | ~1,289 guides across 19 categories (batches 1–12 live) |
| Interactive tools | 68+ tools (security, setup wizards, calculators, health) |
| Spanish content | 50 guides + `/guias` landing page |
| TekSure Brain | `/brain` — semantic search + optional hosted Ollama |
| Printable Guide Packs | 12 themed packs |
| HackerNews feed | `/news` — live tech news |
| Sources & Credits | `/sources` — attributed official sources |
| Booking + Stripe | LIVE — $15 deposit model |
| Forum | Community Q&A at `/forum` |
| Tech Glossary | `/glossary` — 80+ definitions |
| Free Resources | `/free-resources` — government & nonprofit programs |
| Scam Defense | `/scam-defense` — scam identification and recovery hub |

---

## GUIDE CREATION LOOP — THE MAIN PRIORITY

### How it works (never-ending, no permission needed)
1. Search for trending senior/everyday-user tech topics (FTC, AARP, Google Trends, Reddit r/techsupport)
2. Identify gaps against existing slugs (`grep -r "slug:" src/data/`)
3. Create `src/data/guides-batch-N.ts` with 25-50 full Guide objects
4. Import in `src/data/guides.ts` `allGuides` array
5. Commit `feat: add N guides — batch-N [topic summary]`
6. Update this roadmap's guide count and batch log
7. Repeat immediately with next batch

### Batch numbering
- Last completed: **Batch 58** (20 guides, 2026-04-19) — total ~2,233 guides
- Next: **Batch 59** → **Batch 60** → ... (no upper limit)

### Guide format requirements
```typescript
{
  slug: 'unique-kebab-case',          // never duplicates an existing slug
  title: 'How to ...',               // plain English, no jargon
  excerpt: '...',                    // max 160 chars
  category: GuideCategory,           // see types in guides.ts
  tags: ['tag1', 'tag2'],
  readTime: '5 min',                 // no "read" suffix
  thumbnailEmoji: '🔒',
  publishedAt: 'YYYY-MM-DD',
  difficulty: 'Beginner',            // Beginner | Intermediate | Advanced (PascalCase)
  body: `...`,                       // 200+ word plain-English intro
  steps: [                           // 3-6 steps, each with title + content
    { title: '...', content: '...', tip?: '...', warning?: '...' }
  ],
}
```

### Banned phrases (brand voice)
Never use: "easy", "simply", "just", "obviously", "leverage", "utilize", "seamless", "cutting-edge", "Pro Tip"
Use instead: plain verbs, "Quick Tip" not "Pro Tip"

### Content source policy
- **Allowed:** Apple Support, Google Support, Microsoft Support, AARP, FTC.gov, How-To Geek, GCFGlobal, YouTube official channels
- **Rewrite standard:** Minimum 80% original language — no copy-paste
- **Link policy:** Every guide should reference 1-2 official sources in step tips

---

## GUIDE BATCH LOG

| Batch | Guides | Date | Topic Focus |
|-------|--------|------|-------------|
| Core (guides.ts) | 790 | Mar–Apr 2026 | Foundation library across all categories |
| Expansion | 209 | Apr 2026 | Gap fill across categories |
| Batch 4 | 24 | 2026-04-14 | Scam alerts, WhatsApp transfer, WiFi fixes |
| Batch 5 | 15 | 2026-04-15 | Health tech, phone essentials |
| Batch 6 | 12 | 2026-04-15 | Mac guides, productivity |
| Batch 7 | 35 | 2026-04-16 | Chromebook, tablet, email, digital legacy |
| Batch 8 | 40 | 2026-04-17 | Smart home, streaming, government civic |
| Batch 9 | 50 | 2026-04-17 | Safety deep dive, financial tech, communication |
| Batch 10 | 40 | 2026-04-18 | Life transitions, caregiver, accessibility |
| Batch 11 | 5 | 2026-04-18 | Battery, BitLocker, Google account, Chrome security |
| Spanish | 49 | 2026-04-18 | 50 Spanish-language guides |
| **Batch 12** | **20** | **2026-04-19** | Apple Intelligence, WhatsApp scams, iPhone battery, voice cloning, WiFi passwords, printer, photo transfer, fake pop-ups, subscriptions, Google Photos, spam texts, 2FA, Windows 11 upgrade, Roku, iPhone accessibility, Facebook recovery, password managers, FaceTime, browser speed, iCloud backup |
| **Batch 13** | **24** | **2026-04-19** | Telehealth, Zoom, smart TV, Alexa, Apple Maps, Google Maps, SSA account, investment scams, MyChart, Bluetooth headphones, phone photography, sharing photos, imposter scams, recovery scams, Google Meet, Siri, Google Assistant, iPhone→TV, Apple Pay, Zelle, delete apps, FaceTime on iPad, scan documents, update apps |
| **Batch 14** | **22** | **2026-04-19** | Venmo, caregiver tech help, dark mode, Ring doorbell, Nest thermostat, CarPlay, Android Auto, Alexa reminders, Chromecast, Windows/iPhone screenshots, GoodRx, Amazon Prime, Apple Watch+fall detection, Cash App, Google Home, iPhone Health app, Gmail, credit score, email attachments, Notes app, Magnifier |
| **Batch 15** | **18** | **2026-04-19** | Windows Defender, Task Manager, Mac storage, Mac Spotlight, Time Machine, AirPods, iPad WiFi, Fire TV Stick, Echo Show, widgets (Android+iPhone), deleted photo recovery, medical alert systems, senior tech discounts, library e-books, mental health telehealth, retirement account, Apple TV |
| **Batch 16** | **22** | **2026-04-19** | Pig-butchering scam, eBay safety, multi-place photo backup, device charging safety, Netflix parental controls, Skype video calls, home Wi-Fi security, cast YouTube to TV, wet phone emergency, switch carriers, backup contacts, read phone bill, Max/HBO, YouTube TV, family location sharing, smart door lock, Google Photos albums, Amazon Photos, AI voice call scam, senior phone plan savings, Windows 11 Start Menu, Mac accessibility |
| **Batch 17** | **22** | **2026-04-19** | Wi-Fi calling, Google One storage, hacked social media recovery, Alexa shopping list, Amazon order tracking, 5G explained, erase phone before selling, refurbished phones, TV remote app, group FaceTime, offline maps, iPhone camera modes, digital photo frame, lock screen security, emergency weather alerts, caregiver tech monitoring, smart home routines, night mode camera, find lost AirPods, Gmail inbox, Facebook data download |
| **Batch 18** | **22** | **2026-04-19** | Zoom backgrounds, undo sent email, restore iPhone, Samsung Health, Apple Fitness+, pill reminders, Paramount+, Apple One bundle, edit/crop photos, annotate screenshots, forward texts, set default apps, Android backup, Apple Shortcuts, Live Text, Android home screen, add TV apps, screen recorder, shared family calendar, Mac Split View, internet radio, Kindle library |
| **Batch 19** | **22** | **2026-04-19** | Wireless charger setup, Tile tracker, suspicious login response, Venmo/Cash App scam, Android font size, phone captions, read PDF on phone, scan receipts, home inventory, digital emergency prep, MagSafe charging, Apple Watch ECG, doctor visit notes, phone translation, senior online discounts, Google Photos memories, Apple Maps share ETA, report scam to FTC/FBI, Windows night light, Mac Dock, password sharing, Siri hands-free |
| **Batch 20** | **22** | **2026-04-19** | OneDrive setup, Microsoft Copilot, Apple Calendar, Apple Wallet, Google Wallet, Find My Android, new Windows laptop setup, recover deleted files (Win+Mac), malware removal, Alexa Guard, iPhone/Android charging fix, free internet for seniors, block phone numbers, Samsung Pay, video calls on smart TV, iCloud Photos, Microsoft 365 intro, Google Photos auto-backup, AARP tech benefits, silence unknown callers |
| **Batch 21** | **22** | **2026-04-19** | Recycle/donate old phone, iMessage vs SMS, Kindle Paperwhite setup, Wyze camera, video call lighting/audio tips, Amazon Music, Apple Books, Google Play Books, Apple Podcasts, iHeartRadio, Android vision accessibility, Jitterbug/Lively phone, internet speed test, fix slow internet, print photos at Walgreens/CVS, force restart iPhone, iPhone battery health, clear browser cache, force close frozen app, frozen Windows fix, photo collage, Amazon returns |
| **Batch 22** | **22** | **2026-04-19** | Facebook Marketplace selling, AirPlay to TV, Android cast to TV, Google account privacy, Apple ID management, fax from phone, telehealth prep, health symptom tracker, Fitbit vs Apple Watch, Apple News, Google News, Google Alerts, iPhone home screen organize, autocorrect settings, soundbar setup, replace Medicare card, check Social Security benefits online, power of attorney, digital grocery coupons, Medicare Parts A/B/C/D explained |
| **Batch 23** | **22** | **2026-04-19** | Face ID setup, Google Authenticator, Windows 11 Snap Layouts, iPhone Voice Memos, iPhone Control Center customize, video doorbell tips, Google Maps tips, Google Earth, change Wi-Fi password, ecobee thermostat setup, Apple Watch daily tips, Windows 11 new features, Google Photos people albums, email security best practices, Mac menu bar icons, Apple Notes tips, Windows auto update, Android system update, emergency contacts iPhone, choose smart speaker, Apple TV tips, iCloud Keychain |
| **Batch 24** | **22** | **2026-04-19** | Samsung TV tips, Android split screen, USPS Informed Delivery, schedule Gmail, backup contacts Android, Windows Copilot, ChatGPT everyday guide, Sling TV setup, iPhone Live Text, AirTag vs Tile, best free apps seniors, Windows 11 Start Menu, cloud storage compare, Apple Watch fall detection, Android Digital Wellbeing, Hey Siri setup, Microsoft Edge tips, Gmail spam management, Outlook tips, transfer contacts, smart TV apps, iPad for seniors |
| **Batch 25** | **22** | **2026-04-19** | Microsoft Authenticator setup, Echo Dot setup, Alexa daily tips, Shutterfly photo prints, PayPal guide, Medicare app, Facebook Marketplace buying safety, Craigslist safety, find free Wi-Fi, Senior Planet free classes, Google Assistant tips, Apple Cash setup, Android Find My Device, pharmacy app CVS/Walgreens, Apple Music family plan, Netflix household sharing, Windows Sticky Notes, add email to iPhone, Windows search guide, iPhone Health Records, Amazon Music guide |
| **Batch 26** | **22** | **2026-04-19** | Canva basics, FaceTime with Android via link, Discord basics, Reddit basics, YouTube captions, voice dictation iPhone/Android/Windows, Facebook Events, YouTube Shorts, manage iPhone/Android subscriptions, Google Slides basics, Shutterfly photo book, compare streaming costs, cancel Amazon Prime, iPhone crash detection, Android Emergency SOS, Medigap guide, phone plan comparison, Consumer Cellular guide |
| **Batch 27** | **20** | **2026-04-19** | Mint Mobile plan guide, eSIM setup, mesh Wi-Fi, Wi-Fi extender setup, Bitwarden password manager, Bluetooth troubleshooting, streaming buffering fix, restart router, backup texts iPhone, backup texts Android, Gmail tabs guide, router password change, guest Wi-Fi setup, Windows virtual desktops, iPhone storage full fix, Android storage guide, laptop battery tips, iPhone recovery mode, Android safe mode, improve Wi-Fi signal |
| **Batch 28** | **20** | **2026-04-19** | iCloud Shared Photo Library, AirPlay iPhone to TV, Android screen mirror, HDMI laptop to TV, Skylight digital frame, GroupMe messaging, Teleparty watch party, Perplexity AI, AI voice clone scam warning, unsubscribe from email, organize email folders, iPhone photo slideshow, Medicare drug price lookup, Vanguard app guide, iPhone driving mode, Android driving mode, deepfake detection, Apple TV Siri Remote, Google Photos albums, Windows Focus Sessions |
| **Batch 29** | **20** | **2026-04-19** | Android battery health, slow phone fix, iPhone Emergency SOS satellite, Android Medical ID, delete Alexa voice history, text to 911, ChatGPT voice mode, AI meal planning, senior dating apps, Starbucks app, DocuSign guide, digital wallet loyalty cards, iPhone/Android notification settings, smart pill dispenser, Fetch Rewards, online notary, Ibotta savings, share location iPhone, iCloud storage management |
| **Batch 30** | **20** | **2026-04-19** | Rakuten cashback, Honey coupons, CamelCamelCamel price tracker, GasBuddy, Ticketmaster mobile tickets, iPhone Live Photos, create QR code, Android RCS, screen record Android/Mac/Windows, iPhone voice message, Google Home routines, Alexa routines, Walmart+, Amazon Prime benefits, Samsung Galaxy tips, Mac Dock, Windows taskbar |
| **Batch 31** | **20** | **2026-04-19** | Back Tap, NameDrop, Sound Recognition, vehicle motion cues, screen distance, battery management, iPhone/Android hotspot, Android magnification, iPad Split View, Uber for seniors, AAA app, senior travel discounts, cruise booking, PocketGuard, GoodBudget, Spotify audiobooks, Windows Copilot, ChatGPT image analysis, Zoom virtual backgrounds |
| **Batch 32** | **20** | **2026-04-19** | Medisafe medication reminders, SilverSneakers fitness, Life360 family location, Microsoft To Do, Grubhub, Amazon Fresh, VA.gov, spam call blocking iPhone/Android, Costco app, Target Circle, CVS ExtraCare, Walgreens myWalgreens, digital driver license, Apple TV+, Max streaming, Windows clipboard history, scan docs Android, iPhone satellite messaging |
| **Batch 33** | **20** | **2026-04-19** | Vizio SmartCast, Google TV setup, iPhone StandBy mode, lock screen customize, Control Center customize, Dynamic Island, iPhone Translate, Android translate, Chrome tips, Google Home setup, Windows 11 widgets, Mac Notification Center, Chrome profiles, CGM diabetes guide, Apple Watch setup, Wear OS smartwatch, iMessage games, AirDrop tips, Bixby Samsung, Windows 11 battery saver |
| **Batch 34** | **20** | **2026-04-19** | Grandparent scam, gift card scam, IRS scam, Social Security scam, Medicare fraud, utility scam, lottery scam, FTC fraud reporting, Apple ID security, Google account security, Microsoft account security, Instagram privacy, LinkedIn privacy, Google Password Manager, 1Password, LastPass, AccuWeather, Lumosity, weather radar |
| **Batch 35** | **20** | **2026-04-19** | Android Live Transcribe, iPhone Guided Access, Android guest mode, Android data limit, iPhone cellular data, Face ID app lock, Android app lock, iPhone Reachability, shake to undo & hidden gestures, Memoji guide, iPhone keyboard tips, Android Gboard tips, Gmail Smart Compose, Mac Dictation, Google Docs voice typing, Merlin Bird ID, Strava fitness, Android Personal Safety app |
| **Batch 36** | **20** | **2026-04-19** | CapCut video editing, Poshmark buy/sell, Mercari resale, OfferUp local selling, smart door lock setup, Philips Hue smart bulbs, Angi contractors, Crunchyroll streaming, Babbel language learning, Citizen safety app, Ring Neighbors, Nike Run Club, Circle to Search Android, Google One VPN, iPhone mirror to TV, Canva greeting cards, iPhone Personal Voice, delete old accounts, Android Quick Settings, iPhone Live Voicemail |
| **Batch 37** | **20** | **2026-04-19** | ThredUp secondhand clothing, Depop fashion resale, Buy Nothing groups, FlightAware flight tracking, StubHub tickets, SeatGeek ticket deals, TickTick task manager, Evernote notes, Microsoft OneNote, iPhone App Library, iPhone lock screen widgets, Care.com caregivers, Wag dog walking, Healthgrades find doctor, Samsung Find My Mobile, Apple ID recovery, WhatsApp group chat, Android location sharing, Temu shopping guide, PictureThis plant ID |
| **Batch 38** | **20** | **2026-04-19** | Samsung Galaxy Ring, Oura Ring, VPN basics, data breach checker (HaveIBeenPwned), app permissions review, incognito/private browsing, Google Pixel AI camera (Magic Eraser/Best Take), streaming service comparison, smart TV buying guide, router security, phone upgrade without data loss, iPhone Screen Time family, Google Account privacy checkup, Alexa+ AI guide, voice assistant comparison (Siri vs Google vs Alexa), iMessage vs SMS vs RCS, Android to iPhone migration, iCloud Private Relay, spot AI-generated images, review connected apps |
| **Batch 39** | **20** | **2026-04-19** | Signal private messaging, digitize old photos, compress PDF, merge PDF files, iPad buying guide for seniors, laptop buying guide for seniors, Windows 11 tips, Mac everyday tips, organize Google Drive, organize phone photos, delete duplicate photos, free up iCloud storage, Marco Polo video messaging, Medicare Extra Help program, Lifeline free phone service, SNAP EBT guide, neighborhood/community apps (Nextdoor vs Facebook Groups vs Ring Neighbors), SSI vs SSDI difference, Google Drive backup guide, iPad tips for everyday seniors |
| **Batch 40** | **20** | **2026-04-19** | Bluesky social network, Threads app, Peacock streaming, NYT Games (Wordle/Connections), WhatsApp Channels, Netflix offline downloads, Disney+ offline downloads, Spotify offline listening, EveryDollar budgeting app, noise-canceling headphones, iPhone text size settings, iOS 18 new features, Android 15 new features, Google Photos Locked Folder, sell old tech safely, phone as TV remote, Samsung Galaxy AI features, iPhone Stolen Device Protection, recover hacked email account, online banking safety tips |
| **Batch 41** | **20** | **2026-04-19** | YouTube Music, TripAdvisor, Vrbo vacation rentals, ParkMobile, Amtrak app, Sam's Club Scan & Go, Kroger digital coupons, iPad Stage Manager, Android Nearby Share, Apple Health Records, Amazon Subscribe & Save, Lyft medical transportation, library digital perks (free NYT/LinkedIn Learning), auto bill pay, Medicare What's Covered app, VA mobile app, record video iPhone, FaceTime SharePlay, video message guide |
| **Batch 42** | **20** | **2026-04-19** | iCloud Drive, iPhone Files app, Continuity Camera (iPhone as Mac webcam), iPad Sidecar, Mac Handoff & Universal Clipboard, iMessage on Mac, FaceTime on Mac, Notes app tips, BenefitsCheckUp.org, VITA free tax prep, Withings health devices, Dexcom/Libre CGM phone setup, Zoom on Smart TV, read credit report, dispute credit card charge, Google Translate camera, Google Translate offline, forgot iPhone passcode, Files by Google, Google Maps transit |
| **Batch 43** | **19** | **2026-04-19** | iPhone Reminders app, Microsoft To Do, Gmail out-of-office/vacation responder, recover deleted Gmail emails, fill & sign PDF on iPhone, compress photos before emailing, add contact on iPhone, set iPhone ringtone, set iPhone wallpaper, change default browser on iPhone, Google search tips, find downloaded files on Android, Alexa calling & messaging, smart speaker music commands, add boarding pass to Apple Wallet, manage iPhone notification badges, block phone number on iPhone/Android, report scam call to FTC, iPhone Weather app guide |
| **Batch 44** | **20** | **2026-04-19** | Google Keep notes, Zoom host meeting guide, Android email setup, Facebook birthdays, Windows Photos app, create Google account, clear Google search history, iPad iMessage setup, Android gesture navigation, Google Photos slideshow on TV, Gmail search tips, AirTag setup for beginners, Samsung DeX, Zoom live captions, record Zoom meeting, Android Adaptive Battery, phone charger types (USB-C/Lightning/wireless), Facebook Marketplace selling, Chrome Reading List, find iPhone serial number |
| **Batch 45** | **20** | **2026-04-19** | Erase iPhone before selling, erase Android before selling, Google Drive file sharing, iPhone Measure app, Edge PDF viewer, iPhone Haptic Touch shortcuts, Amazon Prime Video tips, YouTube playlists, YouTube Watch Later, YouTube offline downloads (Premium), Apple ID trusted devices, Chrome password checkup, Android voicemail setup, Apple Maps offline, iPhone Low Power Mode, Android Battery Saver, Safari Reader Mode, Samsung Quick Share, enable TV closed captions, iPhone Emergency Bypass contact |
| **Batch 46** | **19** | **2026-04-19** | iPhone conference call, Android conference call, Google Forms beginners, Gmail filters/auto-sort, Google Pixel phone tips, iPhone Portrait Mode, Android Night Mode camera, iPhone camera timer/burst, Apple Watch health seniors, Google Maps saved places, iPhone Spotlight search, Windows Storage Sense, Google Smart Lock Android, iPhone flashlight, schedule text message iOS 18, iPhone volume settings, Mac Quick Look, iPhone battery replacement, Android auto-brightness |
| **Batch 47** | **20** | **2026-04-19** | Freeform app, iPhone Check In safety, iPhone Journal app, FaceTime reactions, Apple Home/HomeKit, USB flash drive on Windows, USB flash drive on Mac, Genius Bar appointment, mail package USPS, IRS2Go tax refund, iMessage group chat, Find in Page browser, share Apple Notes, Android one-handed mode, Windows PIN login, iPhone USB-C port, Google TV remote app, copy-paste on phones, iOS 18 Passwords app, Google Maps share ETA |
| **Batch 48** | **20** | **2026-04-19** | Instagram Reels, WhatsApp Status, Facebook Live, Snapchat for seniors, Chrome extensions, Chrome tab groups, iOS App Privacy Report, Windows Paint, Mac TextEdit, Mac Stickies, Windows Family Safety, Android NFC, organize Chrome bookmarks, Samsung Internet tips, Outlook mobile app, Apple Pencil basics, share Google Calendar, Bluetooth car audio, Android voice recorder, iPad drag and drop |
| **Batch 49** | **20** | **2026-04-19** | Snapseed photo editing, Walgreens photo prints, Hallmark ecards, iPhone Photos editing tips, Mac Photos app, send large files, iPad screenshot, Android display size, iPhone Display Zoom, Amazon Fire tablet setup, force stop Android app, clear Android app cache, clear Safari cache iPhone, Google account recovery, Facebook account recovery, Android tablet tips, print Google Photos, share iPhone health data, Android emergency info, Windows Quick Settings |
| **Batch 50** | **20** | **2026-04-19** | Create QR code, video call lighting, scan business card, Microsoft Lens, Apple Watch face, Google Photos partner share, Amazon Household, manage Amazon subscriptions, optimize iPhone battery, Android battery care, PayPal mobile, Google Pay send money, transit card wallet, Android spam calls, buy refurbished phone, iPhone Focus filters, Android work profile, Windows Clipboard tips, Google Keep tips, Apple Maps transit |
| **Batch 51** | **20** | **2026-04-19** | Gmail labels, Gmail snooze, Gmail multiple accounts, Apple Mail VIP, Windows Mail app, Google Drive scan, Apple Numbers, PowerPoint basics, Alexa smart home tips, Apple Maps tips, OneDrive auto backup, iCloud storage upgrade, WhatsApp voice messages, iMessage effects, Android long screenshot, iPhone full-page screenshot, Google Drive tips, App Store tips, Google Play tips, Mac backup to external drive |
| **Batch 52** | **20** | **2026-04-19** | Android custom ringtone, edit/unsend iMessage, pin iMessage conversation, Spotify sleep timer, see WiFi password on Windows/Mac/Android, Mac AirPlay to TV, Firefox basics, Instagram DMs, alarm clock tips, iPhone bedtime alarm, iPhone accessibility overview, Google Assistant routine, smart speaker routines, Fire Stick tips, iPhone battery widget, block email sender, Alexa default music service, Google Home music |
| **Batch 53** | **20** | **2026-04-19** | HDMI ARC, digital TV antenna, Amazon Freevee, VLC media player, Roku remote app, iMovie basics, iPhone video trim, upload to YouTube, Apple Watch apps, Apple Watch workout, Fitbit tips, iPhone Health steps, Samsung Health walk, Windows startup programs, Mac login items, clear Windows temp files, Android storage cleanup, iPhone storage breakdown, router access, WiFi 2.4GHz vs 5GHz bands |
| **Batch 54** | **20** | **2026-04-19** | WhatsApp backup, Telegram basics, Signal privacy, iPhone background removal, Mac Preview annotate, Mac Preview sign PDF, save-as-PDF, online chess, free senior games, Samsung camera, iPhone Action Mode, Google Photos video, iPhone contacts backup, Audible, Eventbrite, Photopea, Android contacts backup, Excel mobile, Google Meet, Adobe Express |
| **Batch 55** | **20** | **2026-04-19** | Google Drive Desktop, iOS widgets, Apple Handoff, Universal Clipboard, iPhone Mirroring, TikTok basics, LinkedIn, Facebook Reels, Google Wallet, music ID apps, Street View, eBay selling, OfferUp, Flipboard, macOS Sequoia, Android 15, Edge browser, Brave browser, Android home screen, Google Classroom |
| **Batch 56** | **20** | **2026-04-19** | Locked Apple Notes, Google Earth, Google Tasks, Walmart app, Target app, Grubhub, airline apps, hotel booking, TripAdvisor, OpenTable, Goodreads, OverDrive library, Find My app, Spotify tips, digital wallet, Drive folder sharing, Android accessibility, Google Photos family sharing, Android visual voicemail, Apple TV 4K |
| **Batch 57** | **20** | **2026-04-19** | Screen record iPhone, share WiFi password, iOS Voice Control, Android Voice Access, Chromebook basics, Windows Narrator, Mac VoiceOver, swipe typing, Google Maps directions, mobile banking, online bill pay, VA benefits online, bank wire transfer, iPhone parental controls, save parking location, reverse phone lookup, call blocker apps, CapCut, Google Photos editing, iPhone photo crop |
| **Batch 58** | **20** | **2026-04-19** | AirPlay audio, Galaxy Buds, Android automation, Always-On Display, WidgetSmith, Apple Shortcuts, Life360, Facebook Messenger, Instagram basics, Outlook app, email signature, organize inbox, unsubscribe emails, HomePod setup, smart plug, smart thermostat, Arlo camera, Nest Cam, Fire TV Stick, iCloud shared album |
| **Total** | **~2,233** | | |

---

## CONTENT GAPS TO FILL NEXT (Priority Order)

### Tier 1 — HIGH DEMAND, NOT YET COVERED
These are the highest-searched topics by seniors that TekSure doesn't yet have strong coverage on:

| Topic | Suggested slug | Category |
|-------|---------------|----------|
| How to do a video doctor appointment (telehealth) | `how-to-do-telehealth-appointment` | `health-tech` |
| How to use Zoom for video calls | `how-to-use-zoom-video-calls` | `essential-skills` |
| How to set up a new iPhone from scratch | `set-up-new-iphone` | `phone-guides` |
| How to set up a new Android phone | `set-up-new-android-phone` | `phone-guides` |
| How to take a screenshot on Mac | `how-to-screenshot-mac` | `mac-guides` |
| How to use Alexa (Amazon Echo) | `how-to-use-amazon-alexa` | `smart-home` |
| How to use Apple Maps for navigation | `how-to-use-apple-maps` | `app-guides` |
| How to use Google Maps for navigation | `how-to-use-google-maps` | `app-guides` |
| How to check Social Security account online | `how-to-use-my-social-security-account` | `government-civic` |
| Investment scams on social media | `investment-scams-social-media` | `safety-guides` |
| How to set up a smart TV (general) | `how-to-set-up-smart-tv` | `entertainment` |
| How to manage prescriptions with an app | `manage-prescriptions-app` | `health-tech` |
| How to use MyChart for health records | `how-to-use-mychart` | `health-tech` |
| How to connect Bluetooth headphones | `connect-bluetooth-headphones` | `essential-skills` |
| How to take better photos with your phone | `how-to-take-better-phone-photos` | `tips-tricks` |
| How to share photos by text or email | `how-to-share-photos-text-email` | `essential-skills` |
| Imposter scams — government impersonation | `government-imposter-scam-guide` | `safety-guides` |
| Recovery scams ("we'll get your money back") | `recovery-scam-what-to-know` | `safety-guides` |
| How to use Google Meet | `how-to-use-google-meet` | `essential-skills` |
| How to use Siri on iPhone | `how-to-use-siri-iphone` | `tips-tricks` |
| How to use Google Assistant on Android | `how-to-use-google-assistant` | `tips-tricks` |
| How to connect an iPhone to a TV | `connect-iphone-to-tv` | `tips-tricks` |
| How to use Apple Pay at stores | `how-to-use-apple-pay` | `financial-tech` |
| How to use Zelle to send money | `how-to-use-zelle-safely` | `financial-tech` |
| How to delete apps to free space | `how-to-delete-apps-iphone-android` | `tips-tricks` |

### Tier 2 — MEDIUM DEMAND
| Topic | Suggested slug | Category |
|-------|---------------|----------|
| How to use FaceTime on iPad | `facetime-on-ipad` | `essential-skills` |
| How to scan documents with iPhone | `scan-documents-iphone` | `essential-skills` |
| How to enable dark mode | `how-to-enable-dark-mode` | `tips-tricks` |
| Car tech — Apple CarPlay setup | `apple-carplay-setup` | `tips-tricks` |
| Car tech — Android Auto setup | `android-auto-setup` | `tips-tricks` |
| How to use Amazon Alexa for reminders | `alexa-reminders-setup` | `smart-home` |
| How to set up Ring doorbell | `ring-doorbell-setup` | `smart-home` |
| How to use Google Nest thermostat | `google-nest-thermostat-setup` | `smart-home` |
| How to use Venmo | `how-to-use-venmo-safely` | `financial-tech` |
| How to update apps on iPhone/Android | `how-to-update-apps` | `essential-skills` |

### Tier 3 — SPANISH GUIDES (50 → 200 target)
| Topic | Suggested slug | Category |
|-------|---------------|----------|
| Cómo hacer una cita de telesalud | `como-hacer-cita-telesalud` | `health-tech` |
| Cómo usar Zoom para videollamadas | `como-usar-zoom` | `essential-skills` |
| Cómo protegerse de estafas por teléfono | `estafas-telefono-proteccion` | `safety-guides` |
| Cómo configurar un iPhone nuevo | `configurar-iphone-nuevo` | `phone-guides` |

---

## IMMEDIATE BUILD PRIORITIES (Non-Content)

### 1. Hosted Ollama Server — TekSure Brain AI
**Status:** ⏳ Waiting for server setup by Bailey
- Create Hetzner CX22 droplet (~$6/month, Ubuntu 22.04, 4GB RAM)
- Install Ollama, pull `llama3.2:1b`
- Set `OLLAMA_BASE_URL` + `OLLAMA_MODEL` as Supabase secrets
- Brain page + edge functions already deployed

### 2. New Tools to Build
| Tool | Route | Status |
|------|-------|--------|
| Internet Plan Comparator | `/tools/internet-plan-comparator` | Pending |
| Phone Plan Comparator | `/tools/phone-plan-comparator` | Pending |
| Tech Budget Planner | `/tools/tech-budget-planner` | Pending |
| Robocall Blocker Wizard | `/tools/robocall-blocker` | Pending |
| Digital Footprint Scanner | `/tools/digital-footprint` | Pending |
| "What's This Error?" | `/tools/error-explainer` | Pending |
| "Should I Be Worried?" (scam checker) | `/tools/scam-checker` | Pending |
| Accessibility Feature Finder | `/tools/accessibility-finder` | Pending |

### 3. New Pages to Build
| Page | Route | Status |
|------|-------|--------|
| Structured Learning Paths | `/learn` | Pending |
| Caregiver Hub | `/caregiver` | Pending |
| Chromebook Section | `/chromebook` | Pending |
| Accessibility Hub | `/accessibility` | Pending |
| Free Software Directory | `/free-software` | Pending |
| Tech Help Near Me | `/tech-help-near-me` | Pending |

---

## PLATFORM ROADMAP

### Phase 2 — June–August 2026
- [ ] Mobile app (React Native / Expo, iOS first)
- [ ] Chrome extension — TekBot on any page, scam detection overlay
- [ ] TekSure Plus ($4.99/month) — Priority chat, ad-free, exclusive videos
- [ ] Live chat MVP
- [ ] Weekly newsletter (email service integration)
- [ ] Family Dashboard

### Phase 3 — September–December 2026
- [ ] TekSure Family ($9.99/month) — Up to 10 members
- [ ] Enterprise plans — Libraries, senior living, AARP chapters
- [ ] Android app
- [ ] Voice-guided tutorials on every guide
- [ ] Advanced TekBot — Screenshot analysis, voice mode
- [ ] YouTube channel — 100 original video guides
- [ ] Programmatic SEO — `/how-to/[device]/[task]` pages

### Phase 4 — 2027+
- [ ] Full Spanish-language site (500+ guides)
- [ ] Additional languages (Mandarin, Vietnamese, Korean)
- [ ] AI-powered personalized learning paths
- [ ] Digital Literacy Certificate program
- [ ] White-label for institutions
- [ ] 3,000+ guides

---

## SUCCESS METRICS

| Metric | Current (Apr 2026) | 6-Month Target | 12-Month Target |
|--------|-------------------|----------------|-----------------|
| Total guides | ~1,289 | 1,800 | **2,500** |
| Interactive tools | 68 | 85 | 100 |
| Monthly visitors | TBD | 50,000 | 250,000 |
| Registered users | TBD | 5,000 | 25,000 |
| Newsletter subscribers | 0 | 2,000 | 15,000 |
| App downloads | 0 | 1,000 | 10,000 |
| Revenue (MRR) | ~$0 | $2,000 | $15,000 |
| Spanish guides | 50 | 200 | 500 |

---

## CONTENT SOURCES (Approved)

| Source | Type | URL |
|--------|------|-----|
| Apple Support | Official | support.apple.com |
| Google Support | Official | support.google.com |
| Microsoft Support | Official | support.microsoft.com |
| Samsung Support | Official | samsung.com/us/support |
| FTC Consumer Advice | Safety | consumer.ftc.gov |
| AARP Technology | Senior-focused | aarp.org/home-family/personal-technology |
| How-To Geek | Educational | howtogeek.com |
| GCFGlobal | Educational | edu.gcfglobal.org |
| Senior Planet / OATS | Senior-focused | seniorplanet.org |
| YouTube: Apple Support | Video | youtube.com/@AppleSupport |
| YouTube: Google | Video | youtube.com/@Google |
| YouTube: Microsoft | Video | youtube.com/@Microsoft |
| IC3.gov | Safety/Scams | ic3.gov |
| CISA.gov | Safety | cisa.gov |

---

## ARCHIVED FILES

The following files were superseded by this document and moved to `archive/plans/`:
- `TEKSURE-MASTER-PLAN.md` (last updated 2026-04-16) — superseded
- `teksure-roadmap-strategy.md` (last updated March 2026) — superseded
- `TekSure Content Strategy/April-2026/teksure-content-strategy-april-2026.md` — superseded

Dev log (running history of all autonomous changes) continues at: `.claude/dev_log.md`

---

*Every guide, tool, and feature serves one purpose: helping people who feel left behind by technology feel confident, safe, and capable — for free.*
