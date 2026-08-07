# TekSure Master Roadmap — Single Source of Truth

> **This file supersedes all previous plan/roadmap files as of 2026-04-19.**
> Old files archived to `archive/plans/`. See history there.
>
> **Vision:** TekSure is America's free, plain-English technology resource — the single destination where any person can find an answer to any tech question, learn at their own pace, stay safe online, and get human help when they need it. Always free. No jargon. No walls.

**Last updated:** 2026-04-21 (was 2026-04-19)
**Current state:** ~2,696 guides · 68+ tools · 25 categories · 161+ routes
**Guide target:** 2,500 by end of 2026 — **on track, already past target** (quality & coverage passes next)

---

## CURRENT STATUS SNAPSHOT

| Area | Status |
|------|--------|
| Guide library | ~2,696 guides across 25 categories (batches 1–99 live; +49 Spanish at `/guias`) |
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
- Last completed: **Batch 98** (25 guides, 2026-04-21) — total ~2,671 guides
- Next: **Batch 99** → **Batch 100** → ... (no upper limit)

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
| **Batch 59** | **20** | **2026-04-20** | Senior smartphone tips, iPhone vs Android, phone trade-in, data usage, lower phone bill, Wi-Fi calling, avoid roaming, travel tech, Google Translate, Ibotta, digital coupons, loyalty apps, Honey, identity theft, dark web, credit freeze, phishing, phone antivirus, password reuse, public Wi-Fi safety |
| **Batch 60** | **20** | **2026-04-20** | Google Gemini, ChatGPT everyday tasks, Siri tips, Google Assistant tips, AI writing, AI for seniors, AI image gen, AI health tools, Alexa Skills, AI summarize, podcast beginners, free audiobooks, Fire tablet, AI companion, AI learning, AI recipes, AI travel, AI job help, Android tablet seniors, podcast apps |
| **Batch 61** | **20** | **2026-04-20** | Digital BP monitor, CGM diabetes, pill reminder, health insurance app, Teladoc, sleep tracking, fall detection, step counter, water reminders, meditation apps, cooking apps, grocery list, grocery delivery, online therapy, iPhone Health, Google Fit, heart rate, blood oxygen, walking program, telehealth vs ER |
| **Batch 62** | **20** | **2026-04-20** | Retirement planning, Social Security timing, Medicare parts, estate planning, AARP app, volunteering, downsizing, senior housing, long-distance caregiver, caregiver burnout, TurboTax, digital banking safety, romance scam, job loss finances, senior tax breaks, POA digital, social media after death, retirement benefits, lost pension, Medicare supplement |
| **Batch 63** | **20** | **2026-04-20** | Windows Settings app, Mac Finder organize, ZIP files, external drive backup, USB hub, Windows virtual desktops, Windows Snap, Mac Stage Manager, wireless printer setup, Windows scan, Windows Remote Desktop, iPhone autocorrect, Android autocorrect, laptop battery life, Android app drawer, Windows Focus Assist, Mac Focus modes, guest Wi-Fi, Wi-Fi extender, Wi-Fi analyzer |
| **Batch 64** | **20** | **2026-04-20** | Uber rideshare, Lyft rideshare, Waze navigation, digital boarding pass, Google Flights, Shipt grocery delivery, food delivery savings, iPhone factory reset, Android factory reset, Android battery optimization, Android app permissions, Android location privacy, auto-update apps, Roomba setup, myQ smart garage, smart smoke detector, Windows Defender scan, macOS update, Android Live Caption, iPhone Live Captions |
| **Batch 65** | **20** | **2026-04-20** | Pandora radio, SiriusXM streaming, TuneIn live radio, Crunchyroll anime, GoodRx prescriptions, Amazon Pharmacy, Zocdoc appointments, Garmin Connect, MyHealtheVet VA portal, TSA PreCheck, IRS Free File, HealthCare.gov enrollment, Echo Show setup, Fire HD tablet, UPS My Choice, FedEx Delivery Manager, FreeTaxUSA, Chrome Remote Desktop, Seeing AI, Google Lookout |
| **Batch 66** | **20** | **2026-04-20** | Venmo, Zelle, Cash App, Credit Karma, Acorns investing, NordVPN, delete Google history, data broker opt-out, Calm meditation, Headspace, MyFitnessPal, Google Maps Live View AR, Turo car rental, Apple Calendar tips, Cozi family organizer, Google Messages/RCS, YouTube Kids, Proton Mail, email cleanup, GroupMe group chat |
| **Batch 67** | **20** | **2026-04-20** | Google Nest Hub, Chromecast, LG TV apps, Samsung TV apps, Duolingo, Khan Academy, Coursera, Blinkist, Lightroom Mobile, VSCO, ChatGPT mobile, Claude AI, Perplexity, Bluetooth pairing, Sonos setup, photo collage, Snapfish, Android developer options, iPhone Shortcuts automation, Android parental controls |
| **Batch 68** | **20** | **2026-04-20** | Windows 11 upgrade, macOS Sonoma, Google Docs, Microsoft 365, Teams, Yummly, Allrecipes, Mealime, grocery budget, meal planning, iPhone 16 features, AllTrails, weather apps, Android magnifier, Paprika, NYT Cooking, iPhone Emergency SOS, Google Maps Timeline, offline maps, Rome2rio |
| **Batch 69** | **20** | **2026-04-20** | Eero mesh Wi-Fi, speed test, lower internet bill, home office tech, dual monitors, Apple Watch vs Garmin, Galaxy Watch, Fitbit Charge, Pixel Watch, wireless earbuds, Windows shortcuts, Mac shortcuts, NaturalReader TTS, Immersive Reader, typing speed, Windows read aloud, Orbi setup, AirPods alternatives, phone cases, device insurance |
| **Batch 70** | **20** | **2026-04-20** | Hulu + Live TV, Sling TV, FuboTV, Philo, TP-Link Deco, iCloud security, Facebook privacy, Apple impersonation scam, fake Microsoft support, lottery scam, online dating safety, crypto scam, medical alert systems, aging-in-place tech, caregiver apps, CaringBridge, IRS IP PIN, retirement budgeting, simplify finances, Lotsa Helping Hands |
| **Batch 71** | **27** | **2026-04-20** | Mac Spotlight, Hot Corners, AirDrop, Launchpad, Finder sidebar, Google Meet record, Teams background, video call lighting, webcam upgrade, LinkedIn profile, X/Twitter, Reddit, TikTok seniors, Facebook Groups, Instagram seniors, Threads, WhatsApp Web, Telegram desktop, Signal desktop, Discord, Google Chat, iPad multitasking, iPad keyboard shortcuts, Apple Pencil, Samsung S Pen, ring light, YouTube channel |
| **Batch 72** | **20** | **2026-04-20** | Android backup to Google, iCloud backup checklist, Mac Time Machine, Backblaze review, cloud vs local backup, Google Photos vs iCloud, backup contacts, restore iPhone, restore Android, Microsoft Copilot in Office, Alexa Flash Briefing, tech for grandparents, tech after spouse death, DeleteMe, DuckDuckGo, learn language seniors, LifeLock review, private browsing, smart home security, universal remote |
| **Batch 73** | **20** | **2026-04-20** | YouVersion Bible App, iNaturalist, HelloFresh, StoryWorth family memoir, surge protectors, UPS battery backup, multi-device charging station, Tile tracker, ESPN+, Discovery+, Microsoft 365 Family, Walmart Photo Center, RxSaver, NeedyMeds, SSA.gov my account, VA Health App, Tubi free TV, Starz app, Kindle Unlimited, Scribd |
| **Batch 74** | **20** | **2026-04-20** | Chatbooks photo books, Mixbook, Blue Apron, absentee ballot, voter registration online, Petfinder adoption, Noom weight loss, Lose It! tracker, Tasty recipe app, Google Fi, TracFone, Asurion insurance, Chase mobile, Bank of America app, Wells Fargo app, Google Voice, Visible by Verizon, Xfinity Mobile, AT&T senior plans, mail-in ballot |
| **Batch 75** | **20** | **2026-04-20** | C25K running app, Peloton App, ClassPass, Fitbod, Day One journal, email unsubscribe, Yahoo Mail tips, HDMI ARC soundbar, indoor TV antenna, Kanopy free movies, Crackle streaming, YouTube free movies, Thumbtack, Rover pet sitters, DoorDash Dasher, Amazon Flex, Strava, 7-Minute Workout, senior fitness apps, Sworkit |
| **Batch 76** | **20** | **2026-04-20** | Acorn TV, BritBox, CuriosityStream, Shudder horror, Movies Anywhere, Vudu free movies, Frndly TV, MasterClass, Skillshare, Udemy, Wondrium, Codecademy, Google Career Certificates, Microsoft Learn, WordPress, Squarespace, Wix, Google Sites, Linktree, Carrd |
| **Batch 77** | **20** | **2026-04-20** | Policygenius, Lemonade renters insurance, Allstate app, GEICO app, Progressive app, State Farm app, Medicare Advantage explained, SSDI application, CHIP program, Medicaid enrollment, COBRA, health open enrollment, Twitch, Discord voice chat, Reddit beginners, Trello, Todoist, TickTick, Asana personal, Microsoft To Do tips |
| **Batch 78** | **20** | **2026-04-20** | Powerline adapters, ethernet setup, USB hubs, laptop docking station, Mac trackpad gestures, trackball mouse, Windows Magnifier, Mac Zoom, Android TalkBack, iPhone VoiceOver, captioned telephone, Windows High Contrast, iPhone font size, Android font size, blue light filter, Edge Read Aloud, Firefox Reader View, Chrome extensions safety, ad blockers, uBlock Origin |
| **Batch 79** | **20** | **2026-04-20** | Sortly inventory, Trust & Will online, Apple Legacy Contact, Facebook memorial, password inheritance, vital records digital, Social Security survivor benefits, grief support tech, moving app checklist, PODS storage, caregiver app, CareZone app, MyChart portal, Kaiser Permanente app, CVS app, Walgreens app, Costco Pharmacy, Amazon Pharmacy, Cost Plus Drugs, Blink Health |
| **Batch 80** | **20** | **2026-04-20** | Dexcom CGM, KardiaMobile EKG, Omron BP monitor, Withings scale, macro tracker, Cronometer, Carb Manager, MDLive, Amwell, Doctor On Demand, Amazon Clinic, One Medical, telehealth explained, ER vs urgent care, Zocdoc, WebMD app, Mayo Clinic, cancer screening, Sharecare, Livongo diabetes |
| **Batch 81** | **20** | **2026-04-20** | Ford Pass app, EV road trip planning, PlugShare, ChargePoint, Audiomack, Bandcamp, SoundCloud, Tidal HiFi, AirPods Pro features, Sony WH-1000XM5, Bose QuietComfort, Echo Dot setup, Echo Show 8, Alexa Drop In, Google Home Broadcast, Nest Mini, Microsoft Copilot, Google Gemini, Meta AI, Grok xAI |
| **Batch 82** | **20** | **2026-04-20** | Home Depot app, Lowe's app, Zillow home search, Redfin, Rocket Mortgage, first-time homebuyer tools, reverse mortgage, Houzz, room planner apps, Fundrise, Poshmark, Depop, Mercari, thredUP, Whatnot, Vinted, Rent the Runway, Lyst, Rebag, Chrono24 |
| **Batch 83** | **20** | **2026-04-20** | TurboTax mobile, H&R Block app, TaxSlayer, TaxAct, IRS Direct File, VITA free taxes, AARP Tax-Aide, Roth IRA basics, 401(k) basics, Fidelity app, Schwab app, Robinhood, Webull, Betterment, M1 Finance, YNAB, Monarch Money, Simplifi, NerdWallet app, high-yield savings accounts |
| **Batch 84** | **20** | **2026-04-20** | Bark monitoring, Circle Home Plus, Qustodio, Disney+ Kids Mode, Netflix Kids, Amazon Kids+, Roblox safety, Minecraft for parents, Fortnite parental controls, Epic! Books, ABCmouse, Duolingo for kids, Scratch coding, Code.org, Tynker, Apple Family Sharing, Microsoft Family Safety, Amazon Parent Dashboard, Fire Kids tablet, Osmo learning |
| **Batch 85** | **20** | **2026-04-20** | TripIt, KAYAK, Expedia app, Hotels.com, Booking.com, Airbnb hosting, VRBO hosting, Hipcamp, CLEAR biometric, Priority Pass, XE Currency, Wise transfers, Hopper flights, Skyscanner, SeatGuru, Packr packing list, Polarsteps journal, Moovit transit, FlixBus, Amtrak tips |
| **Batch 86** | **20** | **2026-04-20** | Planta, Greg plant app, All About Birds, eBird, Merlin Sound ID, Stellarium, Star Walk, NASA app, moon phases, MyRadar, tornado warning apps, air quality apps, pollen/allergy apps, hurricane prep apps, wildfire tracking, Fishbrain, AllTrails beginner, Komoot, Gaia GPS, Garmin Connect |
| **Batch 87** | **20** | **2026-04-20** | Simply Piano, Yousician, Fender Play, Ultimate Guitar, GarageBand iPhone, Audacity, Spotify for Podcasters, Buzzsprout, Procreate, Autodesk Sketchbook, ibis Paint X, Photoshop Express, Snapseed advanced, Facetune, Pixlr, PicsArt, Remove.bg, Canva video, LumaFusion, InShot |
| **Batch 88** | **20** | **2026-04-20** | Windows 10 EOL, Windows Defender setup, Windows Hello, BitLocker, File History backup, System Restore, Windows Services, Win11 taskbar tips, Snap Layouts, Xbox Game Pass PC, Microsoft Store, Win11 themes, Disk Cleanup, Check Disk, PowerShell beginners, Command Prompt beginners, Mac Mission Control, Mac Spaces, Mac shortcuts, Mac Activity Monitor |
| **Batch 89** | **20** | **2026-04-20** | BetterHelp therapy app, Talkspace, Woebot mental health chatbot, Daylio mood journal, Sleep Cycle alarm, Pillow sleep tracker, Noisli white noise, Petcube pet camera, Whistle GPS tracker, Pawprint pet records, Vetster online vet, BarkBox subscription, Tesla app, Electrify America, EVgo charging, SpotHero parking, Swagbucks, Flipp grocery savings, Dosh cashback, Raise gift cards |
| **Batch 90** | **20** | **2026-04-20** | Perplexity AI app, Google Gemini app, Microsoft Copilot mobile, Otter.ai transcription, Notion AI writing, Libby library app, Hoopla digital, Libro.fm audiobooks, WEBTOON comics, Realtor.com, Trulia neighborhoods, Opendoor home selling, HomeLight agent finder, Paprika recipe manager, Tasty cooking app, Food Network Kitchen, Cooklist meal planner, Notarize online, Lemonade insurance, Fabric life insurance |
| **Batch 91** | **20** | **2026-04-20** | SimpliSafe, Ring Alarm, Arlo cameras, Blink cameras, Eufy cameras, Uber beginners, Lyft beginners, GoGoGrandparent, Swappa used phones, Back Market refurbs, Decluttr electronics, StockX sneakers, America Beautiful Senior Pass, Recreation.gov camping, NPS app offline, Geocaching, Schlage Encode lock, TP-Link Kasa bulbs, Lutron Caséta, Govee LED strips |
| **Batch 92** | **20** | **2026-04-20** | Live Captions Android/Windows, Personal Voice iOS, Assistive Access iPhone, Sound Recognition, Switch Access Android, Google Family Link, Kindle Fire Kids, iPad Guided Access, Mac Screen Time, Grammarly student, Zotero citations, Teams Edu, Canvas LMS, Wolfram Alpha, Samsung Circle to Search, Bixby, Galaxy Watch, Google Pixel tips, Pixel Call Screen |
| **Batch 93** | **20** | **2026-04-20** | Word Online, Excel Online, PowerPoint Online, Outlook setup, Clipchamp, Snipping Tool, Microsoft Designer AI, scan old photos, Google PhotoScan, VHS digitizing, best tablets for seniors, Chromebook buying, iPad vs Android tablet, 5G home internet, Starlink setup, T-Mobile Home Internet, fiber internet, tech gifts for seniors, refurbished laptop, Windows vs Mac |
| **Batch 94** | **20** | **2026-04-20** | Dark web explained, dark web monitoring, data broker removal, private browsing, Google activity controls, online banking setup, mobile check deposit, bank app security, bill pay, reading tech specs, TV buying, printer buying, router buying, RAM explained, SSD vs HDD, screen resolution, slow computer fix, WiFi drops fix, phone won't charge, home office setup |
| **Batch 95** | **20** | **2026-04-20** | Remote Desktop, work VPN, home office ergonomics, Toggl time tracking, Focusmate, routing numbers, wire transfers, FDIC insurance, bank statements, CPU explained, operating systems, cloud computing, bandwidth/Mbps, phishing link check, email spoofing, Authy 2FA, app crash fix, printer offline fix, Bluetooth pairing fix, computer won't start |
| **Batch 96** | **20** | **2026-04-20** | Battery health, fast charging, USB-C ports, HDMI vs DisplayPort, free credit report, credit freeze, fraud alert, contactless payment setup, power bank buying, laptop buying, phone buying, iPhone↔Android switch, new computer checklist, move files, 3-2-1 backup, email sync fix, texts not sending, file organization, desktop cleanup |
| **Batch 97** | **25** | **2026-04-21** | Nest thermostat, ecobee, MyQ garage, Nest Protect, water leak sensors, Instagram Close Friends, Bluesky, Mastodon, TikTok Live, AI meal plan, AI greeting cards, AI travel itinerary, AI resume, AI bedtime stories, public WiFi safety, social media privacy checkup, delete old accounts, 5G vs WiFi, QR code safety, 2FA methods compared + 5 new: read EOB, bank text alerts, missing package, fake support numbers, Chrome for seniors |
| **Batch 98** | **25** | **2026-04-21** | Automatic bill pay, Google Calendar family sharing, new iPad setup, turn off targeted ads, privacy policy red flags, device end-of-life, update Chrome, AARP Fraud Watch, iPhone accessibility shortcut, Apple Translate app, Screen Time limits, mobile hotspot, print from iPhone, MB/GB/TB explained, find Wi-Fi password, HDMI explained, check Windows malware, create Gmail, phone overheating, printer not printing, Do Not Disturb, Google Lens, Alexa privacy, iPhone widgets, secure home network |
| **Batch 99** | **25** | **2026-04-21** | Telehealth visit prep, Zoom video calls for seniors, set up new iPhone, set up new Android, Mac screenshot, Alexa for beginners, Apple Maps, Google Maps, my Social Security account, investment scams on social media, smart TV setup, prescription management apps, MyChart patient portal, Bluetooth headphones, better phone photos, share photos by text/email, government imposter scams, scam recovery guide, Google Meet, Siri, Google Assistant, iPhone → TV, Apple Pay, Zelle safety, delete unused apps |
| **Total** | **~2,696** | | |

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
| Total guides | ~2,696 | 3,000 | **3,500** |
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

## SESSION LOG — 2026-04-21

Autonomous session led by Bailey. Goal was a full overhaul: audit, content gaps, UX, file consolidation, roadmap merge. Highlights:

**Content**
- Shipped `src/data/guides-batch-99.ts` — 25 Tier-1 senior-priority guides sourced from Apple, Google, Microsoft, FTC, SSA, AARP, Senior Planet. All Beginner, 260–400-word bodies, 4–7 steps each, full `sourceName` + `sourceUrl`.
- Batch-99 wired into `allGuides` in `src/data/guides.ts`.
- True repo count reconciled: roadmap was reporting ~1,289; actual is **~2,696** (core + batches 4–99 + 49 Spanish). Snapshot and success-metrics tables corrected. The 2,500-guides-by-EOY target is effectively met — forward focus shifts to quality passes and coverage breadth.

**UX / Design**
- UX critique delivered at `UX-CRITIQUE-2026-04-21.md`. Top issues: 37-item mega-menu, landing page mimics AI-chat doppelgänger, 25 category pills on Guides index, small base font, four competing search surfaces, generic shadcn feel.
- Five high-impact, low-risk fixes applied in this session:
  - `src/index.css` — base font 16px → 17px; visible global focus ring for keyboard users.
  - `src/pages/Index.tsx` — CTA chips bumped to 48px min-height + base text; value-prop text upgraded from muted `text-xs` to full-foreground `text-base`.
  - `src/pages/GuideDetail.tsx` — article body narrowed from `max-w-4xl` to `max-w-3xl` (110 → ~75 characters per line); step-description text promoted from muted to full foreground.
  - `src/App.tsx` — "Skip to content" link made properly visible on focus (shadow, ring, font-semibold).
  - All other critique items (mega-menu collapse, landing rewrite, search surface consolidation) are queued for a follow-up pass.

**File hygiene**
- `TEKSURE-MASTER-PLAN.md` (2026-04-16) → archived to `archive/plans/TEKSURE-MASTER-PLAN-2026-04-16.md`; root file is now a 10-line redirect stub pointing to this roadmap.
- `.gitignore` updated to exclude Vite HMR leftovers (`vite.config.ts.timestamp-*.mjs`).
- Stale files flagged for manual deletion (sandbox can't unlink `.git/`-adjacent files): `.git/index.lock`, 5× `vite.config.ts.timestamp-*.mjs`.

**Pipeline & operations**
- `knowledge-base/source-plan.md` (125-source, 4-wave rollout) is the operating plan for the never-ending guide loop. No changes needed — still valid.
- Scheduled tasks for `weekly-guide-enrichment` and `content-freshness-check` remain the autonomous engine going forward.

**Security**
- GitHub PAT exposed in `.git/config` remote URL discovered during audit. Rotation required — see session handoff in `SESSION-LOG-2026-04-21.md`.

**Known blockers from this session**
- Git index lock held the sandbox back from committing directly. Bailey will run the copy-paste git block from the native Mac terminal (per the `teksure-dev` skill's documented workflow). Handoff doc contains the exact commands.

**Next session priorities**
1. Mega-menu collapse to 3 pillars (Guides / Tools / Help) — see UX critique §2.
2. Landing-page rewrite: trade AI-chat doppelgänger for benefit-led hero (UX critique §1).
3. Category consolidation on `/guides` from 25 pills → 6 groups with secondary filter.
4. Rotate GitHub PAT, re-auth remote.
5. Resume the never-ending guide loop with Wave 2 topics (seniors + privacy/security + health) per `source-plan.md`.

---

*Every guide, tool, and feature serves one purpose: helping people who feel left behind by technology feel confident, safe, and capable — for free.*
