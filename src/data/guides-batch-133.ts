// guides-batch-133 — Dev-loop cycle 9 — Seasonal May 2026 content
// Topics: hurricane-season prep tech, Memorial Day travel tech, digital gifts for Mother's Day

import type { Guide } from './guides';

export const guidesBatch133: Guide[] = [
  {
    slug: 'hurricane-season-2026-tech-checklist',
    title: '2026 Hurricane Season: Set Up These Phone Features Before the First Storm',
    excerpt: 'A 30-minute setup before June 1 makes a real difference if a storm knocks out power. Emergency alerts, offline maps, and backup contacts — explained simply.',
    category: 'safety-guides',
    tags: ['hurricane', 'emergency', 'storm-prep', 'wireless-emergency-alerts', 'noaa', 'safety', 'seniors', 'preparedness'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `The 2026 Atlantic hurricane season runs June 1 through November 30. Forecasters at NOAA, Colorado State, and AccuWeather have all called for an above-average season. If you live in Florida, the Gulf Coast, the Carolinas, or anywhere along the Eastern seaboard, the time to set up your phone is before the first storm watch — not the day a hurricane is named.

Most of the help built into your phone during emergencies is free, takes a few minutes to enable, and may keep working even when cell towers are damaged or power is out. This guide walks through six phone settings and habits that materially improve your safety during a storm.

(Sources: National Hurricane Center, nhc.noaa.gov; Federal Communications Commission, fcc.gov/wireless-emergency-alerts; Apple Support, support.apple.com; Google Support, support.google.com)`,
    steps: [
      {
        title: 'Turn on Wireless Emergency Alerts (WEA)',
        content: 'Wireless Emergency Alerts are short text-like warnings sent automatically to phones in a specific area. They include hurricane warnings, flash flood warnings, AMBER alerts, and Presidential alerts. The federal government, the National Weather Service, and your local emergency management office all use them. They are free and work even if your data plan is limited.\n\nOn iPhone: Settings → Notifications → scroll to the very bottom → "Emergency Alerts" → turn on. Make sure all three (Public Safety, Emergency, Test) are on.\n\nOn Android: Settings → Notifications → Wireless emergency alerts → turn on. On Samsung: Settings → Safety and emergency → Wireless emergency alerts.',
        tip: 'Quick Tip: WEA messages override Do Not Disturb and silent mode by design. They will wake you if a tornado warning is issued at 3 AM — that is the point.',
      },
      {
        title: 'Download offline maps for your area before the storm',
        content: 'When power is out and cell towers are damaged, online maps stop working. Both Google Maps and Apple Maps let you download a chunk of the map ahead of time so it works without internet.\n\nGoogle Maps: open the app, tap your profile picture, tap "Offline maps," tap "Select your own map," drag the box to cover your county and any evacuation route, tap Download.\n\nApple Maps (iPhone): open the app, tap your profile picture at the bottom, tap "Offline Maps," tap "Download New Map," choose your area.\n\nA full county is usually under 200 MB. Do this on Wi-Fi to avoid using mobile data.',
      },
      {
        title: 'Save important contacts as ICE (In Case of Emergency)',
        content: 'Add ICE entries for two or three people who would help in a crisis. On iPhone: open Contacts, tap your name at the top to open Medical ID, scroll to Emergency Contacts, tap "Add Emergency Contact." On Android: Settings → Safety and emergency → Emergency contacts.\n\nThese contacts are reachable from the lock screen even if your phone is locked, which means a paramedic, neighbor, or stranger can reach a family member even if you cannot speak. Use someone who lives outside your immediate area when possible — local friends and family may also be evacuating.',
      },
      {
        title: 'Install the FEMA app and your local TV station app',
        content: 'The free FEMA app (App Store and Google Play) provides shelter locations, disaster recovery resources, and the ability to file claims. Your local television station app (WPLG in Miami, WFLA in Tampa, WCBD in Charleston, etc.) gives the most accurate radar and storm tracking for your area. Local stations also broadcast live during outages when their FM/AM signal can be heard on a battery radio.',
        tip: 'Quick Tip: A $25 battery-powered AM/FM radio is one of the best storm investments you can make. Many also receive NOAA Weather Radio bands. When the cell network goes down, AM radio still works.',
      },
      {
        title: 'Charge a portable battery pack and keep it ready',
        content: 'A 20,000 mAh portable battery pack ($30–$60 at any drugstore) can fully recharge a typical iPhone or Android phone four to six times. Charge it now and store it with a charging cable somewhere you can find it in the dark. Test it monthly and re-charge it before any approaching storm. If a power outage lasts several days, this single item lets you stay reachable.',
      },
      {
        title: 'Send a "before" photo and check-in plan to one out-of-state contact',
        content: 'Before any storm, send one out-of-state family member a quick photo of your house exterior (helps with insurance later) and a short note: "If we lose power, I will text you once a day from a charged phone or borrow a neighbor\'s. If you have not heard from me in 24 hours, call the Red Cross at 1-800-733-2767." This single text dramatically reduces the panic and confusion that follows a major storm. Out-of-state contacts are easier to reach than local ones because local cell networks are often overloaded.',
        warning: 'During an active storm, prefer text messages over phone calls. Text messages can succeed on a barely-working tower when voice calls fail.',
      },
      {
        title: 'Lower screen brightness and turn on Low Power Mode',
        content: 'When the storm hits, set your phone to Low Power Mode and lower the screen brightness to 30%. iPhone: Settings → Battery → Low Power Mode → on. Android: Settings → Battery → Battery Saver → on. These two changes alone can extend a single phone charge from 8 hours to 16+ hours of light use. Your screen is the largest battery drain — keep it dim.',
      },
    ],
  },

  {
    slug: 'memorial-day-travel-tech-tips-2026',
    title: 'Memorial Day Travel: 7 Phone Settings That Make Trips Easier',
    excerpt: 'Heading out for Memorial Day weekend? A quick phone check before you leave reduces airport stress, keeps you connected, and avoids surprise charges.',
    category: 'tips-tricks',
    tags: ['travel', 'memorial-day', 'roadtrip', 'phone-tips', 'seniors', 'airport', 'driving'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `Memorial Day weekend (Saturday May 23 through Monday May 25 in 2026) is one of the busiest travel weekends of the year. AAA expects more than 44 million Americans to travel 50 miles or more from home. Whether you are driving, flying, or both, a few minutes setting up your phone before you leave makes the trip much smoother.

This guide is short and practical: seven settings, each takes under two minutes, and each solves a real problem travelers run into.

(Sources: AAA Newsroom, newsroom.aaa.com; Apple Travel Help, support.apple.com/travel; TSA Apps, tsa.gov/travel)`,
    steps: [
      {
        title: 'Add your boarding pass to Wallet (iPhone) or Google Wallet (Android)',
        content: 'When you check in to your flight, the airline\'s app or website usually offers an "Add to Wallet" button. Tap it. Your boarding pass goes into the Wallet app on your phone, where you can pull it up at the airport without hunting for emails or app passwords.\n\niPhone: Wallet app shows your pass automatically when you arrive at the airport. Android: open Google Wallet, tap your pass.\n\nIf the airline does not offer "Add to Wallet," screenshot the QR code on the boarding pass and save it to a Favorites album.',
      },
      {
        title: 'Set up offline maps for your destination',
        content: 'Cell coverage at parks, on rural highways, and inside large airports can be spotty. Download an offline map of your destination before you leave home Wi-Fi.\n\nGoogle Maps: profile picture → Offline maps → Select your own map. Apple Maps: profile picture → Offline Maps → Download New Map.\n\nThis works for hotels, family addresses, restaurants you have already searched. Once downloaded, the map shows turn-by-turn directions even without internet.',
      },
      {
        title: 'Turn on Find My (iPhone) or Find My Device (Android) for everyone in your group',
        content: 'Family members can lose each other in airports, theme parks, or beach towns. Turn on Find My before you leave so each person can see where the others are.\n\niPhone: Settings → tap your name → Find My → Share My Location → on. Then in Find My app, tap "Share My Location" with each family member.\n\nAndroid: Settings → Google → Find My Device → on. Use Google Maps location sharing for family members.',
        tip: 'Quick Tip: For grandkids old enough to have phones, set up location sharing in advance and explain that it is just for the trip. You can turn it off when you return home.',
      },
      {
        title: 'Add a pet sitter or neighbor to your Home app or doorbell camera',
        content: 'If someone is checking on your house, pets, or plants while you are gone, give them temporary access in advance.\n\nRing or Nest doorbell: open the app → Shared Users → Invite. Send the invite by email; they download the app and confirm. They can see who is at the door and answer.\n\nApple Home: Home app → Home Settings → Invite People. They get a link; they accept; they can control your locks, cameras, and lights.\n\nRemove the access when you return.',
      },
      {
        title: 'Check international roaming (if leaving the US)',
        content: 'If your trip crosses into Canada, Mexico, or anywhere else outside the US, check your phone plan before you leave. T-Mobile and Google Fi include free data and texts in most countries. Verizon and AT&T charge daily fees ($10/day on Verizon TravelPass, $12/day on AT&T) when you use your phone abroad — these add up fast.\n\nOpen your carrier\'s app, search "international" or "travel," and see what is included. If your plan is expensive, consider buying a temporary eSIM through Airalo or Holafly ($10–$30 for a week) instead.',
        warning: 'Turn on airplane mode while crossing borders if you have no roaming plan, then turn cellular back on at your destination only after confirming your plan covers the country. A surprise $300 roaming bill is common.',
      },
      {
        title: 'Take photos of important documents (license, passport, insurance card)',
        content: 'Take a clear photo of each side of your driver license, passport (if international), insurance card, and credit cards. Save them to a private album in your photos.\n\niPhone: Photos app → Albums → tap "+" → New Album → name it "Travel Docs" → keep it locked under "Hidden" (Albums → tap "Hidden" → use Face ID).\n\nIf your wallet is lost, you have legible copies of your documents that help replace them quickly.',
      },
      {
        title: 'Download podcasts, audiobooks, or playlists for the drive',
        content: 'Long Memorial Day drives often pass through dead cell zones. Download what you want to listen to while still on home Wi-Fi.\n\nApple Podcasts and Spotify: tap the download button (downward arrow) next to each podcast or playlist. Audible: download books in the library. Apple Music and YouTube Music: tap "Download" on a playlist.\n\nA few hours of audio uses 100–500 MB of storage — make space if needed by removing apps you do not use.',
      },
    ],
  },

  {
    slug: 'mothers-day-digital-gifts-thoughtful-easy',
    title: 'Mother\'s Day Digital Gifts: 8 Thoughtful Ideas That Take Under an Hour',
    excerpt: 'Last-minute and meaningful — print-on-demand photo books, a recorded family story, a shared photo album, and other digital gifts mom will actually use.',
    category: 'life-transitions',
    tags: ['mothers-day', 'gifts', 'family', 'photos', 'last-minute', 'seniors', 'digital'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `Mother\'s Day 2026 is Sunday May 10. If you are reading this in the days before — or after — and looking for something thoughtful but easy, this guide collects eight digital gift ideas that take under an hour each, work for any budget, and arrive in time even if you start the day before.

These ideas focus on something most flowers cannot: a small piece of memory or attention that lasts. They work just as well from a grandchild as from an adult child or spouse.

(Sources: Mixbook, mixbook.com; Shutterfly, shutterfly.com; Apple Support, support.apple.com; StoryWorth, storyworth.com)`,
    steps: [
      {
        title: 'A printed photo book she can hold in her hands',
        content: 'Mixbook, Shutterfly, and Apple Photos all let you turn a year\'s worth of family photos into a hardcover book in about 30 minutes. The book ships in 5–7 business days.\n\nQuickest path: open Apple Photos (iPhone or Mac) or Google Photos, select 30–60 of your favorite photos from the past year, click "Create" → "Photo Book" (Apple) or use Photos by Google print store. Choose softcover for $19 or hardcover for $35.\n\nMixbook (mixbook.com on a computer) gives the most design flexibility. Shutterfly (shutterfly.com) often has 50% off promotions in May.',
        tip: 'Quick Tip: For express shipping that arrives by Mother\'s Day weekend, order by the Wednesday before. Most printers have a "rush" option for $10–$15 extra.',
      },
      {
        title: 'A shared family photo album everyone can add to',
        content: 'Create an iCloud Shared Album (iPhone family) or a Google Photos shared album (mixed family) and invite mom to it. Then ask siblings, grandchildren, and other family to add their favorite photos. Mom gets a constantly-growing album of family memories — a gift that keeps giving every time someone adds a picture.\n\niPhone: Photos app → Albums → "+" → New Shared Album → name it "Family Memories" → invite by phone number. Each invitee just taps "Join."\n\nGoogle Photos: tap "Sharing" at the bottom → "New shared album" → invite by email or link.',
      },
      {
        title: 'A short "interview" recording of a family elder',
        content: 'Open the Voice Memos app on your iPhone (or Voice Recorder on Android). Sit with mom or call dad/grandma and ask three or four simple questions: "What was the first house you lived in?" "What did you do on a Saturday when you were 10?" "What was your wedding day like?"\n\nRecord the answers (10–15 minutes). Send the audio file to your siblings. Mom will treasure her own parent\'s voice, captured. Cost: $0.',
        tip: 'Quick Tip: Use the StoryWorth service ($99) for a year-long version — they email mom weekly questions and bind her answers into a book at the end of the year.',
      },
      {
        title: 'A digital gift card to her favorite app or service',
        content: 'Apple gift cards (apple.com/shop/gift-cards) work for App Store apps, iCloud storage, Apple Music, Apple TV+, and books. Google Play gift cards (the same idea for Android). Amazon, Audible, and Spotify all sell digital gift cards that arrive by email instantly.\n\nIf mom uses iCloud and is constantly running out of storage, $25 in Apple gift card lets her upgrade to 200 GB ($2.99/month) for most of the year and stop seeing "Storage Full" warnings.',
      },
      {
        title: 'Set up a Digital Picture Frame that auto-updates',
        content: 'A Pix-Star, Aura, or Skylight digital picture frame ($120–$160) sits on a counter and displays photos that any family member can email or text to it from anywhere in the world. After the initial setup (which you can do for her), grandchildren can text new photos and they appear on her frame within minutes.\n\nThis is the gift that gets used daily for years. Order one with overnight shipping for a same-week arrival.',
      },
      {
        title: 'A custom recorded video message',
        content: 'Open the Camera app, switch to video mode, and record a one-minute message. Each grandchild can do their own. AirDrop them all to one phone, or use a free site like wevideo.com to stitch them together.\n\nSend the final video as a text or share it through a YouTube unlisted link. Three minutes of grandchildren saying "Happy Mother\'s Day, grandma" beats any greeting card.',
      },
      {
        title: 'A printed phone case with a family photo',
        content: 'Casetify (casetify.com), Shutterfly, and Walmart Photo Center all let you upload a family photo and print it onto a phone case for $20–$45. Find out what phone she has (Settings → General → About → Model Name on iPhone, Settings → About phone on Android), order the right case, and ship it directly to her.',
      },
      {
        title: 'Schedule a recurring video call with grandchildren',
        content: 'The most-requested gift in surveys of moms and grandmas is "more time with the kids and grandkids." Set up a recurring weekly or biweekly FaceTime or Zoom call (Sunday afternoons work well) and put it on her calendar with a reminder. Then keep showing up. The first three months prove the consistency. After that, it becomes part of her week.\n\nHow to set it up: Calendar app → New Event → Add Title "Family video call" → toggle "Repeat" to Weekly or Biweekly → invite mom and any participating family member. The system sends each person a reminder 15 minutes before.',
        tip: 'Quick Tip: Add notes to each calendar event with conversation starters or photos to share. This avoids awkward silences and gives the call structure.',
      },
    ],
  },
];
