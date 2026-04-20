// TekSure Guides Batch 8 — Car tech, caregiver, accessibility, parental controls, smart appliances, wearables (April 2026)
import type { Guide } from './guides';

export const guidesBatch8: Guide[] = [
  // ── CAR TECH ────────────────────────────────────────────────────────────────
  {
    slug: 'set-up-apple-carplay',
    title: 'How to Set Up Apple CarPlay',
    excerpt: `Connect your iPhone to your car's screen to use Maps, music, and calls without picking up the phone while driving.`,
    category: 'app-guides',
    tags: ['CarPlay', 'iPhone', 'car', 'Apple', 'driving'],
    readTime: '6 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Apple CarPlay connects your iPhone to your car's dashboard screen so you can see maps, play music, and answer calls using the car's controls instead of the phone itself. Most cars made after 2018 include CarPlay, and it usually works with a simple USB cable or wirelessly over Bluetooth.

Once set up, you can ask Siri to give directions, read text messages out loud, or play a podcast — all without touching your phone while driving.`,
    steps: [
      { title: 'Check that your car supports CarPlay', content: `Look for an Apple CarPlay logo near your car's USB port or infotainment screen. If you are not sure, check the owner's manual or the manufacturer's website.` },
      { title: 'Turn on Siri on your iPhone', content: 'Open Settings, tap Siri & Search, and make sure "Press Side Button for Siri" or "Listen for Hey Siri" is turned on. CarPlay needs Siri to work.' },
      { title: 'Plug in your iPhone with a USB cable', content: `Start your car, then connect your iPhone to the car's USB port with the cable that came with your phone. For wireless CarPlay, hold down the voice-command button on your steering wheel instead.` },
      { title: 'Tap Allow on your iPhone', content: `Your phone will ask if you want to allow CarPlay. Tap Allow, and the CarPlay home screen should appear on the car's dashboard display within a few seconds.` },
      { title: 'Rearrange your apps', content: 'On your iPhone, open Settings, tap General, then CarPlay, and pick your car. From there you can drag icons to move the apps you use most — like Maps or Music — to the first screen.' },
    ],
  },
  {
    slug: 'set-up-android-auto',
    title: 'How to Set Up Android Auto',
    excerpt: `Mirror your Android phone to your car's display for hands-free navigation, music, and messaging while you drive.`,
    category: 'app-guides',
    tags: ['Android Auto', 'Android', 'car', 'Google', 'driving'],
    readTime: '6 min',
    thumbnailEmoji: '🚙',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Android Auto is Google's version of CarPlay — it puts a simplified version of your Android phone on the car's screen so you can use Google Maps, play music, and hear messages read aloud while driving. Most new cars and many aftermarket radios support it.

After a one-time setup, Android Auto connects automatically whenever you start the car and plug in (or connect wirelessly). You control everything with voice commands or large, easy-to-tap buttons designed to be safer than looking at your phone.`,
    steps: [
      { title: 'Install the Android Auto app', content: 'On phones running Android 10 or newer, Android Auto is already built in. On older phones, open the Play Store, search for "Android Auto," and tap Install.' },
      { title: `Check your car's compatibility`, content: `Look for an Android Auto logo near the USB port or on your infotainment screen. Your car's manual or the Android Auto website lists supported models.` },
      { title: 'Connect your phone with a USB cable', content: 'Start the car and plug your phone into the USB port using a good-quality cable. For wireless Android Auto, connect over Bluetooth after turning on the car.' },
      { title: 'Follow the setup prompts', content: 'Your phone will ask for permissions — allow access to location, contacts, and notifications so Maps and messaging work. This only happens the first time.' },
      { title: 'Try a test drive in the driveway', content: 'Before driving, say "Hey Google, navigate home" to check that voice commands work. Also open the music app you prefer to confirm audio plays through the car speakers.' },
    ],
  },
  {
    slug: 'find-ev-charging-stations',
    title: 'How to Find Electric Vehicle Charging Stations',
    excerpt: 'Use free apps like PlugShare and ChargePoint to locate nearby EV charging stations, check availability, and plan road trips.',
    category: 'app-guides',
    tags: ['EV', 'charging', 'electric car', 'PlugShare', 'ChargePoint'],
    readTime: '6 min',
    thumbnailEmoji: '⚡',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Finding a place to charge an electric vehicle (EV) has gotten much easier thanks to free apps that show every public charger in the country. The two most popular are PlugShare and ChargePoint, and both work on iPhone and Android.

These apps show which chargers are available right now, how fast they charge, what it costs, and what real drivers say about the location. Some EV brands like Tesla have their own built-in navigation that finds Supercharger stations automatically.`,
    steps: [
      { title: 'Download PlugShare or ChargePoint', content: 'Open the App Store or Play Store, search for "PlugShare" or "ChargePoint," and install one or both. PlugShare shows chargers from every network; ChargePoint mainly shows its own.' },
      { title: 'Create a free account', content: 'Sign up with email to save favorite chargers and filter by plug type. Tesla owners should also download the Tesla app to see Superchargers.' },
      { title: 'Filter by plug type', content: 'In PlugShare, tap the filter icon and pick your connector — usually J1772 for Level 2, CCS or NACS for fast charging, or Tesla. This hides stations your car cannot use.' },
      { title: 'Check real-time status', content: 'Tap a charger on the map to see if the plugs are free or in use right now. Read recent check-ins from other drivers to learn if the station works reliably.' },
      { title: 'Plan road trips with the trip planner', content: 'Both apps have a trip planner that maps chargers along your route. Enter your start, end, and car model, and it will suggest stops based on your battery range.' },
    ],
  },
  {
    slug: 'use-in-car-bluetooth-calls',
    title: 'How to Set Up Bluetooth for Hands-Free Calling in Your Car',
    excerpt: `Pair your phone to your car's Bluetooth once, and calls will play through the speakers automatically every time you drive.`,
    category: 'how-to',
    tags: ['Bluetooth', 'car', 'hands-free', 'calling', 'phone'],
    readTime: '5 min',
    thumbnailEmoji: '📻',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Pairing your phone to your car over Bluetooth is a one-time setup that lets you take calls through the car's speakers without touching the phone. This is safer — and legal in most states — compared to holding a phone while driving.

Once paired, your phone will connect automatically every time you start the car. You can answer calls with a button on the steering wheel and hear the other person through the car's audio system.`,
    steps: [
      { title: 'Turn on Bluetooth on your phone', content: 'On iPhone, open Settings and tap Bluetooth, then flip the switch on. On Android, swipe down from the top and tap the Bluetooth icon.' },
      { title: 'Put your car in pairing mode', content: `On the car's infotainment screen, open Settings or Phone, then tap Bluetooth or Add Device. The exact wording varies — check the owner's manual if you cannot find it.` },
      { title: 'Find the car on your phone', content: `Your car's name (often the make and model) should appear in the Bluetooth list on your phone. Tap it to start pairing.` },
      { title: 'Confirm the PIN code', content: 'Both the phone and car will show the same short code, usually four or six digits. Tap Yes or Pair on both to confirm they match.' },
      { title: 'Make a test call', content: `Call someone you know and check that you can hear them through the car speakers and they can hear you clearly. If the sound is quiet, turn up the car's volume — the phone volume may be separate.` },
    ],
  },
  // ── CAREGIVER TECH ──────────────────────────────────────────────────────────
  {
    slug: 'set-up-family-sharing-apple',
    title: 'How to Set Up Apple Family Sharing',
    excerpt: 'Share Apple subscriptions, purchases, photos, and locations with up to five family members — all from one Apple ID.',
    category: 'essential-skills',
    tags: ['Family Sharing', 'Apple', 'iCloud', 'subscriptions', 'family'],
    readTime: '7 min',
    thumbnailEmoji: '👨‍👩‍👧',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Apple Family Sharing lets up to six people share Apple subscriptions (iCloud, Apple Music, Apple TV+) and App Store purchases without paying multiple times. It also includes location sharing and parental controls for kids.

One person acts as the "family organizer" and invites everyone else. Each person keeps their own Apple ID, photos, and messages private — only the shared items are visible to the family.`,
    steps: [
      { title: 'Open Family Sharing settings', content: 'On the iPhone of the person who will be the organizer, open Settings, tap your name at the top, then tap Family Sharing. Tap Set Up Your Family.' },
      { title: 'Pick what you want to share', content: 'Apple will ask if you want to share subscriptions, purchases, location, or screen time. You can pick all of them now or turn any on later.' },
      { title: 'Invite family members', content: 'Tap Invite People and enter their phone numbers or Apple ID email addresses. They will get a message with a link to join the family.' },
      { title: 'Add a child under 13', content: `Tap Create an Account for a Child from the Family Sharing screen. You will need the child's birthday and your permission as a parent — this gives them their own Apple ID with safety limits.` },
      { title: 'Check shared subscriptions', content: 'Go back to Settings, tap your name, then Subscriptions. Any subscription that supports sharing — like Apple Music Family or iCloud+ — will now show "Shared with Family" under the name.' },
    ],
  },
  {
    slug: 'set-up-google-family-link',
    title: 'How to Set Up Google Family Link',
    excerpt: `Monitor a child's Android phone, approve app downloads, set screen time limits, and see their location with Google Family Link.`,
    category: 'essential-skills',
    tags: ['Family Link', 'Google', 'Android', 'parental controls', 'kids'],
    readTime: '7 min',
    thumbnailEmoji: '👪',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google Family Link is a free app that lets parents manage a child's Android phone or Chromebook from their own phone. You can approve every app they download, set daily screen time limits, lock the device at bedtime, and see where the device is on a map.

Family Link works for kids under 13 (who need parent permission for a Google account) and teenagers (who can use the app voluntarily). Both parent and child install the app, and the parent runs the setup.`,
    steps: [
      { title: 'Install Family Link on the parent phone', content: `On the parent's iPhone or Android, open the App Store or Play Store, search for "Google Family Link," and install it. Sign in with the parent's Google account.` },
      { title: `Create or link the child's Google account`, content: 'In the app, tap the plus icon and choose Add Child. If your child does not have a Google account, Family Link walks you through creating one — a child account is free but needs parent consent.' },
      { title: `Install Family Link on the child's phone`, content: `On the child's Android phone, sign in with the child's Google account. The phone will prompt you to install Family Link and link it to the parent account.` },
      { title: 'Set daily screen time limits', content: `In the parent app, tap the child's name, then Controls, then Daily Limit. Set how many hours the phone can be used each day — when time runs out, the phone locks (calls still work).` },
      { title: 'Approve apps and in-app purchases', content: 'Turn on the App Approval toggle under Controls. From then on, every time your child tries to download an app, you will get a notification asking you to approve or deny it.' },
    ],
  },
  {
    slug: 'use-chrome-remote-desktop',
    title: 'How to Use Chrome Remote Desktop to Help Family',
    excerpt: `See and control a family member's computer from your own — great for fixing problems over the phone without being in the room.`,
    category: 'how-to',
    tags: ['remote desktop', 'Chrome', 'Google', 'tech support', 'family'],
    readTime: '7 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Chrome Remote Desktop is a free Google tool that lets you see and control another computer over the internet. It is perfect for helping a parent or grandparent fix a problem — you can click around on their screen as if you were sitting in front of it.

Both computers need the Chrome browser and a Google account. The person asking for help generates a short access code, shares it with you, and your computer connects to theirs within seconds.`,
    steps: [
      { title: 'Open Chrome Remote Desktop', content: 'On both computers, open the Chrome browser and go to remotedesktop.google.com. Sign in with any Google account.' },
      { title: `On the helper's computer, click Remote Support`, content: 'On the screen, click Remote Support. This is the section for helping someone else — not for connecting to your own computer.' },
      { title: `On the family member's computer, generate a code`, content: 'Have them click Remote Support, then under "Get Support" click Generate Code. A 12-digit code appears — they read it to you over the phone.' },
      { title: `Enter the code on the helper's computer`, content: 'Under "Give Support," type the 12-digit code and click Connect. The family member will see a pop-up asking to share their screen — they click Share.' },
      { title: 'End the session when done', content: 'When you finish helping, either person can click the Stop Sharing button. The code expires after five minutes, so you cannot reconnect without a new code — this keeps things secure.' },
    ],
  },
  {
    slug: 'make-phone-senior-friendly',
    title: 'How to Make a Smartphone Senior-Friendly',
    excerpt: 'Large text, louder ringtones, emergency contacts, and simplified home screens can make any iPhone or Android easier for older adults.',
    category: 'tips-tricks',
    tags: ['seniors', 'accessibility', 'phone', 'easy mode', 'elderly'],
    readTime: '6 min',
    thumbnailEmoji: '👵',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Smartphones are useful for older adults, but factory settings often favor small text and fast motion. A few minutes of adjustments — bigger text, louder sounds, a simpler home screen — can make a phone much more comfortable to use every day.

These changes work on both iPhone and Android. The exact menu names differ slightly, but the same five ideas apply: make text larger, make sounds louder, reduce motion, pin important contacts, and remove clutter.`,
    steps: [
      { title: 'Make text and icons larger', content: 'On iPhone, open Settings, tap Display & Brightness, then Text Size, and drag the slider right. On Android, open Settings, tap Display, then Font Size.' },
      { title: 'Turn up the ringer and notification volume', content: 'Press the volume up button on the side of the phone all the way up. On iPhone, also open Settings, tap Sounds & Haptics, and drag the ringer slider to the top.' },
      { title: 'Pin emergency contacts to the home screen', content: 'Create a contact for 911, family members, and the doctor. On iPhone, open Contacts, tap the name, then Share Contact and Add to Home Screen — it becomes an icon you can tap once.' },
      { title: 'Reduce motion and animations', content: 'On iPhone, open Settings, tap Accessibility, then Motion, and turn on Reduce Motion. On Android, open Settings, tap Accessibility, then Visibility Enhancements, and turn on Remove Animations.' },
      { title: 'Set up a simple home screen', content: 'Remove games and rarely used apps from the home screen by holding an icon and choosing Remove. Keep only Phone, Messages, Camera, Maps, and a weather app on the first screen.' },
    ],
  },
  {
    slug: 'set-up-medical-id-iphone',
    title: 'How to Set Up Medical ID on iPhone',
    excerpt: 'Store your allergies, medications, and emergency contacts on your iPhone so first responders can see them even when the phone is locked.',
    category: 'health-tech',
    tags: ['Medical ID', 'iPhone', 'emergency', 'health', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Medical ID is a built-in iPhone feature that shows your medical information on the lock screen during an emergency. Paramedics and hospital staff are trained to look for it — they can see your allergies, medications, and emergency contacts without needing your passcode.

Setting it up takes about five minutes and could save your life. The information stays private at all other times — only someone pressing the emergency button on a locked phone will see it.`,
    steps: [
      { title: 'Open the Health app', content: 'Find the Health app on your iPhone — the icon is a white heart on a pink background. If you cannot find it, swipe down on the home screen and search for "Health."' },
      { title: 'Tap your profile picture', content: 'Tap the small profile picture or initials in the top-right corner of the Health app. Scroll down and tap Medical ID.' },
      { title: 'Tap Edit and fill in your info', content: 'Tap Edit in the top-right. Enter your date of birth, height, weight, blood type, allergies, and any medications. Leave blanks if you do not know — do not guess.' },
      { title: 'Add emergency contacts', content: 'Scroll to Emergency Contacts, tap the green plus, and pick someone from your contacts. You can add more than one — include at least one family member and your doctor.' },
      { title: 'Turn on Show When Locked', content: 'Near the top of the edit screen, toggle Show When Locked to on. This lets emergency responders see your Medical ID from the lock screen without your passcode. Tap Done to save.' },
    ],
  },
  // ── ACCESSIBILITY DEEP DIVES ────────────────────────────────────────────────
  {
    slug: 'use-voiceover-iphone',
    title: 'How to Use VoiceOver on iPhone (Screen Reader)',
    excerpt: 'VoiceOver reads everything on your iPhone screen aloud — designed for blind and low-vision users, but helpful for anyone with tired eyes.',
    category: 'tips-tricks',
    tags: ['VoiceOver', 'iPhone', 'accessibility', 'screen reader', 'blind'],
    readTime: '7 min',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `VoiceOver is Apple's built-in screen reader for iPhone and iPad. When it is on, the phone speaks whatever your finger touches — button names, text messages, web pages — so you can use the phone without looking at the screen.

VoiceOver changes how you interact with the phone: single-tap to hear an item, double-tap to activate it, and swipe with three fingers to scroll. It takes practice, but millions of blind and low-vision users rely on it every day.`,
    steps: [
      { title: 'Turn on VoiceOver', content: 'Open Settings, tap Accessibility, then VoiceOver, and flip the switch on. A warning will explain that gestures will change — tap OK to continue.' },
      { title: 'Learn the basic gestures', content: 'Single-tap anything to hear its name read aloud. Double-tap anywhere on the screen to activate whatever VoiceOver last spoke. Swipe right or left with one finger to move between items.' },
      { title: 'Practice with the built-in tutorial', content: 'In the VoiceOver settings screen, tap VoiceOver Practice. This gives you a safe area to try gestures — the phone will tell you what each gesture does without actually doing it.' },
      { title: 'Adjust the speaking speed', content: 'Back in VoiceOver settings, drag the Speaking Rate slider. Start slower until you get used to hearing the voice, then speed up as you get more comfortable.' },
      { title: 'Set a triple-click shortcut', content: 'Open Settings, tap Accessibility, then Accessibility Shortcut at the bottom, and pick VoiceOver. Now you can triple-click the side button to turn VoiceOver on or off quickly.' },
    ],
  },
  {
    slug: 'use-talkback-android',
    title: 'How to Use TalkBack on Android (Screen Reader)',
    excerpt: `TalkBack is Android's free screen reader — it speaks everything on your phone so blind and low-vision users can navigate without seeing the screen.`,
    category: 'tips-tricks',
    tags: ['TalkBack', 'Android', 'accessibility', 'screen reader', 'blind'],
    readTime: '7 min',
    thumbnailEmoji: '📢',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `TalkBack is Google's screen reader built into every Android phone. When turned on, it reads aloud whatever you touch and changes how gestures work — single-tap to hear, double-tap to select, swipe with two fingers to scroll.

TalkBack takes time to learn, but it makes Android fully usable without sight. Most major apps — Gmail, Maps, Chrome — are designed to work well with TalkBack.`,
    steps: [
      { title: 'Turn on TalkBack', content: 'Open Settings, tap Accessibility, then TalkBack, and flip the switch on. A screen will explain that gestures will change — tap OK.' },
      { title: 'Use one finger to explore', content: 'Slide your finger around the screen. TalkBack reads aloud whatever is under your finger — "Back button," "Gmail," and so on. Nothing is activated yet.' },
      { title: 'Double-tap to activate', content: 'Once you hear the name of the thing you want, lift your finger and double-tap anywhere on the screen. Android will open that app or press that button.' },
      { title: 'Swipe to scroll', content: 'To scroll through a list or page, use two fingers instead of one — swipe up or down with both fingers together. One finger is for exploring; two fingers is for scrolling.' },
      { title: 'Adjust speech speed', content: 'Open Settings, tap Accessibility, then TalkBack, then Text-to-Speech. Drag the speech rate slider — start slow and speed it up as you practice.' },
    ],
  },
  {
    slug: 'pair-hearing-aids-iphone',
    title: 'How to Pair Hearing Aids with iPhone',
    excerpt: 'Connect Made for iPhone (MFi) hearing aids over Bluetooth to stream calls, music, and notifications straight to your ears.',
    category: 'health-tech',
    tags: ['hearing aids', 'iPhone', 'Bluetooth', 'MFi', 'accessibility'],
    readTime: '6 min',
    thumbnailEmoji: '👂',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Made for iPhone (MFi) hearing aids connect directly to an iPhone over Bluetooth, so phone calls, music, and even GPS directions play right in your ears. Most major brands — including Phonak, Oticon, ReSound, and Starkey — now make MFi models.

Once paired, you can also change hearing-aid settings from the phone's Accessibility menu: volume, program, and background-noise reduction. No extra app needed for most features.`,
    steps: [
      { title: 'Turn on your hearing aids', content: 'Open the battery doors or place the hearing aids in their charger, then take them out and put them in your ears. They need to be on and near the phone for pairing.' },
      { title: 'Open iPhone Accessibility settings', content: 'Go to Settings, tap Accessibility, then scroll down and tap Hearing Devices. The phone will start searching for nearby hearing aids.' },
      { title: 'Wait for the hearing aids to appear', content: 'Your hearing aid model (with your name, if your audiologist set it up) should appear on the screen. Tap it.' },
      { title: 'Confirm pairing on the iPhone', content: 'A pairing request will pop up for each ear — tap Pair on both. This only happens the first time; after that, the hearing aids reconnect automatically.' },
      { title: 'Test a phone call', content: 'Call someone and check that their voice plays clearly in the hearing aids. If the sound is too quiet or too loud, go back to Settings, Accessibility, Hearing Devices, and adjust the volume sliders.' },
    ],
  },
  {
    slug: 'use-live-captions-phone',
    title: 'How to Turn On Live Captions on Your Phone',
    excerpt: 'Live Captions add real-time subtitles to any video, call, or podcast — useful for hard-of-hearing users or noisy environments.',
    category: 'tips-tricks',
    tags: ['Live Captions', 'accessibility', 'captions', 'hearing', 'subtitles'],
    readTime: '5 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Live Captions turn spoken words into text on your screen in real time — no internet needed. It works on any audio: YouTube videos, FaceTime calls, podcasts, or even a video someone sends you.

Both iPhone (iOS 16 and newer) and Android (version 10 and newer) support Live Captions. On iPhone it is called Live Captions; on Android it is called Live Caption (no "s").`,
    steps: [
      { title: 'On iPhone, open Accessibility settings', content: 'Open Settings, tap Accessibility, then scroll down to Live Captions and tap it. Flip the switch on. Your phone may download a language pack — this can take a few minutes.' },
      { title: 'On Android, open Sound settings', content: 'Open Settings, tap Sound or Sound & Vibration, then Live Caption. Flip the switch on. On some phones the setting is under Accessibility instead.' },
      { title: 'Try it with a video', content: 'Open YouTube and play any video. A black caption box should appear near the bottom of the screen, showing the words as they are spoken.' },
      { title: 'Move or resize the caption box', content: 'Drag the caption box with your finger to move it. On Android, pinch with two fingers to make it bigger or smaller. On iPhone, tap it to show a resize handle.' },
      { title: 'Turn captions off when not needed', content: 'Live Captions use battery, so turn them off when you do not need them. Follow the same steps above and flip the switch off.' },
    ],
  },
  {
    slug: 'use-voice-control-mac',
    title: 'How to Use Voice Control on Mac',
    excerpt: 'Run your Mac with spoken commands — open apps, dictate text, click buttons — no hands needed. Built into macOS, no extra software required.',
    category: 'mac-guides',
    tags: ['Voice Control', 'Mac', 'accessibility', 'dictation', 'hands-free'],
    readTime: '7 min',
    thumbnailEmoji: '🎤',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Voice Control is a built-in Mac feature that lets you control the whole computer by talking. You can open apps, click buttons, scroll, and dictate full documents without touching the keyboard or mouse.

It works entirely on the Mac — Apple does not record your voice or send it anywhere. Useful for anyone with limited mobility, wrist pain, or who prefers to write by speaking.`,
    steps: [
      { title: 'Turn on Voice Control', content: 'Click the Apple menu, then System Settings, then Accessibility. Click Voice Control and flip the switch on. The first time, your Mac will download the voice files — this takes a few minutes.' },
      { title: 'Learn the basic commands', content: 'A small microphone window appears on the screen. Say "Open Safari" or "Open Mail" to launch apps. Say "What can I say?" to see the full command list.' },
      { title: 'Click things by saying their name', content: 'Say "Click Send" to click a button labeled Send. If two things have the same name, say "Show numbers" — a number appears on every clickable item, and you say the number.' },
      { title: 'Dictate into any text field', content: 'Click into any text box, then say what you want to write. Speak punctuation out loud: "Hello comma how are you question mark."' },
      { title: 'Pause when you need to', content: 'Say "Go to sleep" and Voice Control stops listening until you say "Wake up." This is useful during phone calls or conversations so the Mac does not type what you say.' },
    ],
  },
  {
    slug: 'use-windows-magnifier',
    title: 'How to Use the Windows Magnifier',
    excerpt: 'Zoom in on any part of the Windows screen to read small text or see images better — built in, no download needed.',
    category: 'windows-guides',
    tags: ['Magnifier', 'Windows', 'accessibility', 'zoom', 'vision'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Magnifier is a free, built-in Windows tool that enlarges any part of the screen — great for small text on web pages, tiny menu buttons, or photos you want to see in detail. It works in Windows 10 and Windows 11.

You can set the magnification level, pick how it follows your mouse, and even have it read text aloud. Turn it on with a keyboard shortcut any time, and turn it off the same way.`,
    steps: [
      { title: 'Turn Magnifier on with a shortcut', content: 'Hold the Windows key and press the plus key. The screen zooms in and a small Magnifier toolbar appears at the top.' },
      { title: 'Zoom in and out', content: 'Hold the Windows key and press plus to zoom in more, or minus to zoom out. The default starts at 200% and can go up to 1600%.' },
      { title: 'Pick a magnifier mode', content: 'On the Magnifier toolbar, click Views. "Full screen" zooms everything. "Lens" creates a moveable magnifying glass around your mouse. "Docked" puts the zoom in a strip at the top of the screen.' },
      { title: 'Turn on read-aloud', content: 'Click the Play button on the Magnifier toolbar to hear the words on the screen read out loud. Click Stop to pause.' },
      { title: 'Turn Magnifier off', content: 'Hold the Windows key and press Esc. The screen goes back to normal, and Magnifier closes. You can reopen it any time with Windows + plus.' },
    ],
  },
  // ── PARENTAL CONTROLS ───────────────────────────────────────────────────────
  {
    slug: 'set-up-screen-time-iphone',
    title: 'How to Set Up Screen Time on iPhone for Kids',
    excerpt: `Limit your child's daily app usage, block inappropriate content, and see exactly what they do on their iPhone — all free from Apple.`,
    category: 'safety-guides',
    tags: ['Screen Time', 'iPhone', 'parental controls', 'kids', 'Apple'],
    readTime: '7 min',
    thumbnailEmoji: '⏰',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Screen Time is Apple's free parental-control system. On a family-shared iPhone, you can see how much time your child spends in each app, block apps during homework or bedtime, and stop them from buying apps without your permission.

You set it up through Family Sharing — the parent sends a request from their own phone to the child's phone. A four-digit passcode (different from the phone passcode) protects the settings so the child cannot change them.`,
    steps: [
      { title: 'Set up Family Sharing first', content: 'Screen Time for kids only works if the child is part of your Apple Family Sharing group. If you have not set that up, do that before continuing — see the Family Sharing guide.' },
      { title: 'Open Screen Time on the parent phone', content: `Open Settings, tap Screen Time, then scroll down and tap your child's name under Family. Tap Turn On Screen Time.` },
      { title: 'Set Downtime and App Limits', content: 'Tap Downtime to block all apps during specific hours (for example, 9 PM to 7 AM). Tap App Limits to set daily minutes for categories like Games or Social.' },
      { title: 'Turn on Content & Privacy Restrictions', content: 'Tap Content & Privacy Restrictions and flip it on. Pick Content Restrictions to block adult websites, mature movies, and explicit music.' },
      { title: 'Set a Screen Time passcode', content: 'Tap Change Screen Time Passcode and pick a four-digit code that your child does not know. Without it, they cannot change the limits you set.' },
    ],
  },
  {
    slug: 'set-up-parental-controls-android',
    title: 'How to Set Up Parental Controls on Android',
    excerpt: 'Use Google Family Link plus Play Store settings to control what your child downloads, sees, and does on their Android phone or tablet.',
    category: 'safety-guides',
    tags: ['parental controls', 'Android', 'Family Link', 'Google', 'kids'],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Android has two layers of parental control: Google Family Link (covers the whole device) and Play Store restrictions (covers what can be downloaded). Together they let you approve apps, set screen time, filter content, and lock the device at night.

Family Link is free and works for kids under 13 automatically. For teenagers, both parent and teen have to agree to turn it on — but it still gives parents strong oversight.`,
    steps: [
      { title: 'Install Family Link and link accounts', content: `Follow the Google Family Link setup guide first — install the app on both phones, create or link the child's Google account, and make sure the child's phone shows up in your parent app.` },
      { title: 'Open Play Store restrictions', content: `On the child's phone, open the Play Store app, tap the profile icon, then Settings, then Family, then Parental Controls. Flip the switch on and create a PIN only you know.` },
      { title: 'Pick content ratings', content: 'Tap each category — Apps & games, Movies, TV, Books, Music — and pick the maturity level you want. Everything above that level will be hidden or require your approval.' },
      { title: 'Turn on Google SafeSearch', content: `In Family Link, tap your child's name, then Controls, then Google Search, then SafeSearch. Turn it on — this filters adult content out of Google search results.` },
      { title: 'Set bedtime and app limits', content: 'In Family Link, tap Controls, then Daily Limit for total screen time. Tap Bedtime to lock the phone automatically during sleep hours. Calls and emergency features still work when the phone is locked.' },
    ],
  },
  {
    slug: 'set-up-youtube-kids',
    title: 'How to Set Up YouTube Kids',
    excerpt: 'YouTube Kids is a free, child-safe version of YouTube with parental controls, age-based content filters, and no comments section.',
    category: 'app-guides',
    tags: ['YouTube Kids', 'kids', 'video', 'parental controls', 'YouTube'],
    readTime: '6 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `YouTube Kids is a separate free app from Google, designed for children ages 12 and under. Videos are filtered for kid-friendly content, there are no comments, and parents can set time limits and block specific channels.

You control everything from a parent profile that requires your Google account password to open. Kids get their own profile with age-appropriate content only.`,
    steps: [
      { title: 'Download YouTube Kids', content: 'Open the App Store (iPhone) or Play Store (Android), search for "YouTube Kids," and install the app. It has a red icon with a play button — not the regular YouTube icon.' },
      { title: 'Sign in as a parent', content: `Open the app and tap I'm a Parent. Enter your birth year and sign in with your Google account. This creates the parent profile.` },
      { title: 'Create a profile for each child', content: `Tap Add Profile and enter the child's name, age, and photo (optional). Each child gets their own profile so YouTube Kids can match content to their age.` },
      { title: 'Pick a content setting', content: 'Choose Preschool (under 5), Younger (5–8), Older (9–12), or Approve Content Yourself. The first three filter videos automatically; the last one lets you hand-pick every allowed video.' },
      { title: 'Set a timer to limit watching', content: 'Tap the lock icon in the corner, solve the math problem, and tap Timer. Set how many minutes your child can watch — when time runs out, the app locks and tells them to take a break.' },
    ],
  },
  {
    slug: 'block-websites-on-computer',
    title: 'How to Block Inappropriate Websites on a Computer',
    excerpt: 'Block specific websites on Windows or Mac using free built-in tools or simple browser extensions — no extra software needed.',
    category: 'safety-guides',
    tags: ['website blocking', 'parental controls', 'Windows', 'Mac', 'safety'],
    readTime: '7 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Blocking websites on a home computer is a good way to keep kids safer online or to stop yourself from losing hours on distracting sites. Both Windows and Mac have built-in tools, and for Chromebooks you can use a free browser extension.

The method depends on how strict you need to be. Built-in Mac Screen Time and Windows Family Safety block sites across the whole computer; browser extensions only work in that browser.`,
    steps: [
      { title: 'On Mac, open Screen Time', content: 'Click the Apple menu, then System Settings, then Screen Time. Click Content & Privacy, then Content Restrictions, then Access to Web Content.' },
      { title: 'Add sites to the block list', content: 'On Mac, pick Limit Adult Websites to block adult content automatically, or pick Allowed Websites Only to choose exactly which sites are allowed. Click the plus to add a site URL.' },
      { title: 'On Windows, use Family Safety', content: 'Open a browser and go to family.microsoft.com. Sign in with a Microsoft account, add your child as a family member, and under Content Filters turn on Filter inappropriate websites and searches.' },
      { title: 'Add specific URLs to block', content: 'On Family Safety, under Blocked sites, type the full URL (for example, example.com) and click Add. You can also add sites to an Allowed list that ignores the filter.' },
      { title: 'For Chrome, install BlockSite', content: 'Open Chrome, go to the Chrome Web Store, and search for "BlockSite." Install it, open the extension, and add sites you want blocked. This only blocks sites in Chrome — use the Windows or Mac method to block system-wide.' },
    ],
  },
  // ── SMART APPLIANCES ────────────────────────────────────────────────────────
  {
    slug: 'set-up-smart-fridge',
    title: 'How to Set Up a Smart Refrigerator',
    excerpt: 'Connect your Samsung, LG, or GE smart fridge to Wi-Fi to get temperature alerts, shopping lists, and door-open warnings on your phone.',
    category: 'smart-home',
    tags: ['smart fridge', 'Samsung', 'LG', 'smart home', 'appliances'],
    readTime: '6 min',
    thumbnailEmoji: '🧊',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Smart refrigerators connect to your home Wi-Fi so you can check the inside temperature, get a warning if someone left the door open, and create shopping lists from your phone. Some models even have touchscreens and cameras inside.

Setup happens through the brand's phone app — SmartThings for Samsung, LG ThinQ for LG, SmartHQ for GE. You download the app, create an account, and follow prompts to connect the fridge to your Wi-Fi.`,
    steps: [
      { title: `Find your fridge's brand app`, content: `Check the sticker inside the fridge or the owner's manual for the app name. Common ones: SmartThings (Samsung), LG ThinQ (LG), SmartHQ (GE), Home Connect (Bosch).` },
      { title: 'Download the app and create an account', content: 'Open the App Store or Play Store, install the app, and sign up with your email. This account will hold all your connected appliances from that brand.' },
      { title: 'Put the fridge in pairing mode', content: `On the fridge's control panel, look for a Wi-Fi, Network, or Connect button. Hold it for 3–5 seconds until a light starts blinking or the screen shows "Pairing."` },
      { title: 'Follow the app prompts', content: 'In the app, tap Add Device or the plus icon, and pick Refrigerator. The app searches for the fridge, asks for your Wi-Fi password, and connects it. This takes 2–5 minutes.' },
      { title: 'Turn on useful alerts', content: 'In the app settings, turn on Door Ajar Alert (get a notification if the door is open more than 2 minutes), Temperature Alert, and Filter Replacement Reminder.' },
    ],
  },
  {
    slug: 'set-up-smart-washer-dryer',
    title: 'How to Set Up a Smart Washer and Dryer',
    excerpt: 'Get cycle-complete alerts on your phone, start loads remotely, and troubleshoot errors from an app with your Wi-Fi-connected washer and dryer.',
    category: 'smart-home',
    tags: ['smart washer', 'smart dryer', 'laundry', 'smart home', 'appliances'],
    readTime: '6 min',
    thumbnailEmoji: '🧺',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Smart washers and dryers connect to Wi-Fi and talk to a phone app so you know when the load is done without walking to the laundry room. You can also start or pause a cycle from your phone, download specialty cycles, and get alerts if something goes wrong.

Setup is similar to other smart appliances: download the brand's app (SmartThings, LG ThinQ, SmartHQ, Whirlpool), put the machine in pairing mode, and connect it to Wi-Fi through the app.`,
    steps: [
      { title: `Install the brand's app`, content: `Check your washer and dryer's owner manual or sticker for the app name. Download it from the App Store or Play Store and create an account with your email.` },
      { title: 'Start in pairing mode', content: `On the washer or dryer's control panel, hold the Wi-Fi or Remote Start button for 3–5 seconds. A Wi-Fi symbol or light will blink to show it is ready to pair.` },
      { title: 'Add the appliance in the app', content: 'In the app, tap the plus icon and pick Washer or Dryer. The app will ask for your Wi-Fi name and password — the machine needs 2.4 GHz Wi-Fi, not 5 GHz.' },
      { title: 'Turn on Remote Start', content: 'Most washers require you to physically enable Remote Start each time for safety. Press the Remote Start or Smart Control button on the machine, then close the door and leave it there.' },
      { title: 'Set up notifications', content: 'In the app settings, turn on Cycle Complete alerts so your phone buzzes when laundry is done. Also turn on Error Alerts to get warnings about clogged filters or drain issues.' },
    ],
  },
  {
    slug: 'use-smart-dishwasher',
    title: 'How to Use a Smart Dishwasher App',
    excerpt: 'Connect your dishwasher to Wi-Fi to monitor cycles, get alerts when rinse aid is low, and download special wash programs.',
    category: 'smart-home',
    tags: ['smart dishwasher', 'appliances', 'smart home', 'Wi-Fi', 'kitchen'],
    readTime: '5 min',
    thumbnailEmoji: '🍽️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Smart dishwashers connect to Wi-Fi so you can track the cycle from your phone, get alerts when you need more rinse aid or salt, and download extra wash programs like Baby Bottles or Pots & Pans.

Most brands use the same app as their washers and fridges — SmartThings for Samsung, Home Connect for Bosch, SmartHQ for GE — so if you already have one set up, adding the dishwasher takes only a few minutes.`,
    steps: [
      { title: `Open your appliance brand's app`, content: 'If you already use SmartThings, LG ThinQ, Home Connect, or SmartHQ for another appliance, open that app. Otherwise, install the one that matches your dishwasher brand.' },
      { title: 'Tap the plus icon to add a device', content: 'Pick Dishwasher from the device list. The app will explain how to put your specific model into pairing mode — usually by holding the Start or Wi-Fi button.' },
      { title: 'Connect to your 2.4 GHz Wi-Fi', content: 'Enter your Wi-Fi password in the app. Most dishwashers only work with 2.4 GHz Wi-Fi — if your router has two networks, pick the one without "5G" in the name.' },
      { title: 'Enable cycle notifications', content: 'In the app settings, turn on Cycle Complete, Rinse Aid Low, and Salt Low alerts. The dishwasher will ping your phone when any of these happen.' },
      { title: 'Download extra programs', content: 'Some Bosch and Samsung dishwashers let you download extra wash programs from the app — for baby bottles, wine glasses, or heavily soiled pots. Tap Programs in the app and pick ones to add.' },
    ],
  },
  // ── WEARABLES ───────────────────────────────────────────────────────────────
  {
    slug: 'set-up-apple-watch',
    title: 'How to Set Up and Use Apple Watch',
    excerpt: 'Pair your Apple Watch with iPhone, pick a watch face, set up health tracking, and start getting notifications on your wrist in 20 minutes.',
    category: 'health-tech',
    tags: ['Apple Watch', 'setup', 'wearable', 'health', 'Apple'],
    readTime: '8 min',
    thumbnailEmoji: '⌚',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Apple Watch is a smart watch that connects to your iPhone over Bluetooth. It shows notifications, tracks steps and heart rate, and can make emergency calls. You need an iPhone to set it up — Apple Watch does not work with Android.

Setup takes about 20 minutes the first time. You will sign in with your Apple ID, pick how to wear the watch, and tell it which apps you want on your wrist.`,
    steps: [
      { title: 'Charge the watch before setup', content: 'Put the watch on its magnetic charger and plug it into a wall outlet. Wait until the green lightning bolt shows on the screen — that means it has enough power to set up.' },
      { title: 'Put the watch on your wrist and power on', content: 'Hold the side button (the long one below the crown) until the Apple logo appears. The watch will show language options — tap your language.' },
      { title: 'Hold the watch near your iPhone', content: 'An animation will appear on the watch and a pairing screen will pop up on the iPhone. Tap Continue on the iPhone, then point the iPhone camera at the watch like you are taking a picture.' },
      { title: 'Sign in with your Apple ID', content: 'Enter the same Apple ID you use on your iPhone. The watch will download your apps, contacts, and settings — this takes 10–15 minutes, so keep the watch near the phone and both on their chargers.' },
      { title: 'Set up health features', content: 'Open the Watch app on your iPhone, tap Health, then My Watch. Set your age, height, weight, and activity goals. Turn on Fall Detection, Heart Rate alerts, and Emergency SOS — these can save a life.' },
    ],
  },
  {
    slug: 'set-up-fitbit',
    title: 'How to Set Up a Fitbit',
    excerpt: 'Pair your new Fitbit with the phone app, set daily goals, and start tracking steps, sleep, and heart rate in under 15 minutes.',
    category: 'health-tech',
    tags: ['Fitbit', 'wearable', 'fitness', 'health', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '💪',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Fitbit is a fitness tracker owned by Google that counts steps, tracks sleep, measures heart rate, and reminds you to move. Models range from simple wristbands to full smart watches, but they all set up the same way: with the free Fitbit app on iPhone or Android.

Setup takes under 15 minutes. You create a Google account (Fitbit accounts moved to Google in 2023), pair the device over Bluetooth, and pick your goals.`,
    steps: [
      { title: 'Charge the Fitbit before starting', content: 'Plug the charging cable into a USB port or wall adapter, then clip the Fitbit to the charger. Wait until the battery icon shows full — usually about an hour.' },
      { title: 'Install the Fitbit app', content: 'Open the App Store (iPhone) or Play Store (Android), search "Fitbit," and install it. Open the app and tap Join Fitbit or Sign In.' },
      { title: 'Sign in with a Google account', content: 'Since 2023, Fitbit requires a Google account — you cannot create a new Fitbit account anymore. Use your existing Gmail or create a new Google account (free).' },
      { title: 'Pair the Fitbit over Bluetooth', content: 'Tap the profile icon, then Set Up a Device, and pick your model. Follow the prompts to put the Fitbit in pairing mode — usually by holding a button for 3 seconds.' },
      { title: 'Set daily goals', content: 'The app will ask for your age, height, weight, and goals. A common default is 10,000 steps per day and 8 hours of sleep — you can change these any time from Settings.' },
    ],
  },
  {
    slug: 'set-up-galaxy-watch',
    title: 'How to Set Up Samsung Galaxy Watch',
    excerpt: 'Connect your Samsung Galaxy Watch to an Android phone, install apps, and turn on health features like heart rate and sleep tracking.',
    category: 'health-tech',
    tags: ['Galaxy Watch', 'Samsung', 'Android', 'wearable', 'setup'],
    readTime: '7 min',
    thumbnailEmoji: '⌚',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Samsung Galaxy Watch is a smart watch that works best with Android phones — especially Samsung Galaxy phones. It tracks steps, sleep, heart rate, and blood oxygen, and can even take an EKG reading. Newer models (Watch 4 and later) run Google's Wear OS.

Setup uses two apps: Galaxy Wearable (to pair and manage the watch) and Samsung Health (to track fitness). Both are free in the Play Store.`,
    steps: [
      { title: 'Charge the watch before setup', content: 'Place the Galaxy Watch on its wireless charger until the battery shows at least 50%. The watch ships partially charged but a full battery makes setup smoother.' },
      { title: 'Install Galaxy Wearable on your phone', content: 'On your Android phone, open the Play Store, search "Galaxy Wearable," and install it. Apple iPhones cannot fully pair with newer Galaxy Watches.' },
      { title: 'Put the watch on your wrist and turn on', content: 'Hold the Home button (top right) for 3 seconds until the watch turns on. Pick your language.' },
      { title: 'Pair through Galaxy Wearable', content: 'Open the Galaxy Wearable app and tap Start. The app finds the watch over Bluetooth — tap your model name, then confirm the pairing PIN matches on both screens.' },
      { title: 'Set up Samsung Health', content: 'Install Samsung Health from the Play Store if you do not have it. Open it, sign in with your Samsung account, and enter age, height, weight, and goals. Turn on Continuous Heart Rate and Sleep Tracking in the settings.' },
    ],
  },
  {
    slug: 'use-fall-detection-wearables',
    title: 'How to Turn On Fall Detection on Your Device',
    excerpt: `Apple Watch, Pixel phones, and many medical alerts can detect a hard fall and automatically call for help — here's how to turn it on.`,
    category: 'health-tech',
    tags: ['fall detection', 'Apple Watch', 'emergency', 'safety', 'health'],
    readTime: '5 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Fall detection uses motion sensors to detect a hard fall — and if the person does not respond within about a minute, it automatically calls emergency services. It is built into Apple Watch (Series 4 and later), Google Pixel phones, and several medical alert wearables.

For older adults or anyone living alone, this feature can be life-saving. Setup takes two minutes, and once on, it works automatically.`,
    steps: [
      { title: 'On Apple Watch, open Health settings', content: 'On your iPhone, open the Watch app, tap My Watch, then Emergency SOS. Turn on Fall Detection.' },
      { title: 'Pick when it is active', content: 'Apple gives two options: "Always On" (detects falls 24/7) and "Only on During Workouts" (only while you are exercising). Pick Always On for maximum safety, especially for older adults.' },
      { title: 'On Pixel phones, open Personal Safety', content: 'Open the Personal Safety app (pre-installed on Pixel phones). Tap Features, then Car crash detection and Emergency SOS. The car crash detection also covers falls on newer Pixel models.' },
      { title: 'Add emergency contacts', content: 'Back in Medical ID (iPhone) or Personal Safety (Pixel), add at least two emergency contacts. If a fall is detected and you do not respond, these people are called automatically.' },
      { title: 'Test it carefully', content: 'Do not test by actually falling. Instead, check that the feature is on by opening Emergency SOS or Personal Safety and confirming the Fall Detection toggle is green. The first real fall will trigger a countdown — you can cancel if you are okay.' },
    ],
  },
  // ── ADVANCED EMAIL ──────────────────────────────────────────────────────────
  {
    slug: 'use-gmail-filters-rules',
    title: 'How to Use Gmail Filters and Rules',
    excerpt: 'Automatically label, file, or delete certain emails with Gmail filters — stop inbox overload without reading every message.',
    category: 'tips-tricks',
    tags: ['Gmail', 'filters', 'email', 'organization', 'productivity'],
    readTime: '6 min',
    thumbnailEmoji: '⚙️',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Gmail filters (sometimes called rules) are instructions Gmail follows automatically when a new email arrives. You can tell Gmail to skip the inbox for newsletters, label all bank messages as "Finance," or delete spammy senders without ever seeing them.

Filters work best on a computer — mobile apps do not let you create them, though they honor any you set up. Once created, a filter runs on every future email and can also apply to existing messages.`,
    steps: [
      { title: 'Open Gmail on a computer', content: 'Go to gmail.com and sign in. Filters have to be created from the web version — the phone app cannot make them.' },
      { title: 'Click the search filter icon', content: 'In the search bar at the top, click the sliders icon on the right side. A search form appears where you can set criteria.' },
      { title: 'Set the matching criteria', content: 'Fill in any fields you want: From (for a specific sender), Subject (for keywords in the subject), Has the words (anywhere in the email). You can use multiple fields together.' },
      { title: 'Click Create filter', content: 'Below the form, click Create filter. On the next screen, pick what Gmail should do: Skip the Inbox, Apply a label, Mark as read, Star, Delete, or Forward.' },
      { title: 'Apply to existing messages', content: 'Check the box that says Also apply filter to matching conversations. This runs the filter backwards on every email you have ever received that matches, not just new ones.' },
    ],
  },
  {
    slug: 'organize-email-folders-labels',
    title: 'How to Organize Email with Folders and Labels',
    excerpt: 'Take control of a messy inbox with folders, labels, and a simple system that works in Gmail, Outlook, and Apple Mail.',
    category: 'essential-skills',
    tags: ['email', 'organization', 'folders', 'labels', 'productivity'],
    readTime: '6 min',
    thumbnailEmoji: '📁',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Organizing email with folders or labels makes it much easier to find an old message and keeps your inbox from feeling overwhelming. Gmail calls them labels; Outlook and Apple Mail call them folders — they work the same way.

A simple system works best: one folder for each big category (Bills, Family, Work, Travel) rather than many tiny ones. Most people do not need more than five or six.`,
    steps: [
      { title: 'Pick 4–6 big categories', content: 'Think about what emails you receive most: Bills, Family, Work, Travel, Shopping, Newsletters. Pick a small number — too many folders make it harder to find things, not easier.' },
      { title: 'Create the folders or labels', content: 'In Gmail on a computer, click the plus sign next to Labels in the left sidebar. In Outlook, right-click your email account and pick New Folder. In Apple Mail, click Mailbox, then New Mailbox.' },
      { title: 'Move existing emails', content: 'Drag messages from the inbox onto a folder or label in the sidebar. To move many at once, hold the Shift key while clicking the first and last message, then drag them all together.' },
      { title: 'Set up a filter or rule for future email', content: 'Create a filter (Gmail) or rule (Outlook, Apple Mail) so future emails from the same senders go straight into the right folder. See the Gmail filters guide for step-by-step instructions.' },
      { title: 'Archive instead of delete', content: 'When you finish reading an email, archive it instead of leaving it in the inbox. Archive means "keep it but hide it" — you can still search for it later, but it clears out the inbox.' },
    ],
  },
  {
    slug: 'set-up-email-signature',
    title: 'How to Set Up an Email Signature',
    excerpt: 'Add your name, phone number, and any contact info at the bottom of every email you send — set it once and forget it.',
    category: 'essential-skills',
    tags: ['email signature', 'Gmail', 'Outlook', 'email', 'professional'],
    readTime: '5 min',
    thumbnailEmoji: '✍️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `An email signature is text that appears at the bottom of every email you send. Most people include their name, phone number, and maybe a website or a title. Once set up, it is added automatically to every new email and reply.

Each email app has its own signature setting, but the idea is the same: type it once, save it, and every email from then on includes it. You can have different signatures on different devices.`,
    steps: [
      { title: 'In Gmail on a computer', content: 'Click the gear icon, then See All Settings. Scroll down to Signature and click Create New. Type your signature and save at the bottom of the page.' },
      { title: 'In Gmail on a phone', content: 'Open the Gmail app, tap the three-line menu, tap Settings, tap your email address, then tap Mobile Signature. Type it and tap OK.' },
      { title: 'In Outlook on a computer', content: 'Click the gear icon, then View all Outlook settings. Click Mail, then Compose and Reply. Type your signature in the box and save.' },
      { title: 'In Apple Mail on Mac', content: 'Open Mail, click Mail in the top menu, then Settings, then Signatures. Click the plus button, type your signature, and drag it to the email account you want to use it with.' },
      { title: 'Keep it simple', content: 'A good signature has your name, phone number, and maybe a title — that is it. Skip inspirational quotes, giant images, or more than three lines. Short signatures look more professional.' },
    ],
  },
  // ── HOME OFFICE ─────────────────────────────────────────────────────────────
  {
    slug: 'set-up-dual-monitors',
    title: 'How to Set Up Dual Monitors',
    excerpt: 'Run two screens from one computer for more workspace — setup takes 15 minutes and works on both Windows and Mac.',
    category: 'how-to',
    tags: ['dual monitors', 'setup', 'desk', 'productivity', 'Windows'],
    readTime: '6 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Two monitors give you roughly twice the workspace. You can keep email open on one screen and a document on the other, or have a video call on one while taking notes on the other. Most people who try dual monitors never go back.

You need a second monitor and a cable to connect it (HDMI, DisplayPort, or USB-C). Setup on both Windows and Mac is automatic — plug it in and the second screen works immediately.`,
    steps: [
      { title: `Check your computer's ports`, content: 'Look at the back or side of your computer for video ports: HDMI is a small trapezoid, DisplayPort is similar but with a notch, and USB-C is oval. Laptops often have HDMI or USB-C.' },
      { title: 'Buy the right cable', content: 'Buy a cable that matches both the computer and the monitor. If one has HDMI and the other has USB-C, buy an HDMI-to-USB-C cable or an adapter.' },
      { title: 'Plug in the second monitor', content: 'Plug the monitor into a wall outlet, then connect one end of the cable to the monitor and the other to the computer. Turn on the monitor.' },
      { title: 'Arrange the screens in settings', content: 'On Windows, right-click the desktop and pick Display Settings. On Mac, open System Settings, then Displays. Drag the two screen boxes to match how they sit on your desk — this tells the computer which side the mouse should cross over.' },
      { title: 'Pick a main display', content: 'In the same settings, scroll down to Multiple Displays. Tick the box for Make This My Main Display on the monitor you want as your primary — that is where the taskbar or dock and new apps will open.' },
    ],
  },
  {
    slug: 'use-standing-desk-setup',
    title: 'How to Set Up a Healthy Home Office',
    excerpt: 'Monitor height, chair posture, lighting, and break reminders can prevent back pain, neck strain, and eye fatigue from long work days.',
    category: 'tips-tricks',
    tags: ['home office', 'ergonomics', 'posture', 'health', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '💼',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `A healthy home office starts with where your monitor, chair, and keyboard sit. Small changes — raising the monitor, lowering the chair — can stop neck and wrist pain before it starts.

Ergonomics is not complicated. The rule is: eyes level with the top of the screen, elbows at 90 degrees, feet flat on the floor, and a break every 30 minutes.`,
    steps: [
      { title: 'Set monitor height right', content: 'The top of the screen should be at eye level when you sit up straight. If the monitor is too low, stack books under it until the top edge meets your eyes.' },
      { title: 'Adjust your chair', content: 'Set the chair so your feet rest flat on the floor and your knees are at roughly a 90-degree angle. If your feet do not reach, use a footrest or a sturdy box.' },
      { title: 'Position the keyboard and mouse', content: 'Your elbows should be bent at about 90 degrees when typing, and your wrists straight — not bent up or down. If the desk is too high, lower the chair and add a footrest.' },
      { title: 'Reduce screen glare', content: 'Sit perpendicular to windows, not facing them or with your back to them. Glare causes eye strain. If you cannot move, close the blinds or add an anti-glare screen.' },
      { title: 'Stand up every 30 minutes', content: 'Sitting for hours is harmful even with good posture. Set a reminder on your phone or watch to stand up, stretch, and walk for two minutes every half hour.' },
    ],
  },
  {
    slug: 'reduce-eye-strain-computer',
    title: 'How to Reduce Eye Strain from Screens',
    excerpt: 'Dry eyes, headaches, and blurry vision after work are often from screen strain. A few settings changes and the 20-20-20 rule help a lot.',
    category: 'tips-tricks',
    tags: ['eye strain', 'health', 'screens', 'blue light', 'productivity'],
    readTime: '5 min',
    thumbnailEmoji: '👁️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Staring at a screen all day causes what doctors call digital eye strain — dry eyes, headaches, neck pain, and blurry vision. It is not permanent damage, but it makes you miserable.

The fixes are small: brighter or dimmer screens to match the room, bigger text, blue-light filters, and the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds).`,
    steps: [
      { title: 'Match screen brightness to the room', content: 'If you squint at the screen, it is too dark. If the whites look painfully bright, it is too bright. Adjust until the screen looks the same brightness as a piece of white paper next to it.' },
      { title: 'Increase text size', content: 'On Windows, right-click the desktop, pick Display Settings, and change the scale to 125% or 150%. On Mac, open System Settings, tap Displays, and pick Larger Text.' },
      { title: 'Turn on a blue-light filter', content: 'On Windows, open Settings, then System, then Display, then Night Light. On Mac, open System Settings, then Displays, then Night Shift. Blue-light filters make the screen warmer — easier on eyes, especially in the evening.' },
      { title: 'Follow the 20-20-20 rule', content: 'Every 20 minutes, look at something 20 feet away for 20 seconds. This lets your eye muscles relax. Set a reminder on your phone or watch if you forget.' },
      { title: 'Blink more often', content: 'People blink about half as much when using screens, which dries out eyes. Keep artificial tears (saline eye drops) at your desk and use them when eyes feel dry — no prescription needed.' },
    ],
  },
  {
    slug: 'improve-home-video-audio',
    title: 'How to Improve Home Video Call Audio and Lighting',
    excerpt: 'Sound and light matter more than camera quality on video calls. A few cheap fixes make you look and sound far more professional.',
    category: 'tips-tricks',
    tags: ['video calls', 'Zoom', 'lighting', 'audio', 'home office'],
    readTime: '6 min',
    thumbnailEmoji: '💡',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `On a video call, people notice bad audio and bad lighting far more than a fuzzy camera. Cheap fixes — a desk lamp, earbuds with a mic, or an external USB microphone — make you look and sound much better for under $50.

The biggest single upgrade is lighting that comes from in front of you, not behind. A window at your back turns your face into a silhouette; a lamp in front of you fixes it.`,
    steps: [
      { title: 'Put your light source in front of you', content: 'Face a window or put a desk lamp behind your webcam pointing at your face. Never sit with a window or bright light behind you — it makes your face dark.' },
      { title: 'Use headphones or earbuds', content: 'Built-in laptop speakers pick up sound and cause echo. Even cheap wired earbuds fix this. AirPods, Galaxy Buds, or any Bluetooth headphones also work.' },
      { title: 'Raise the camera to eye level', content: 'Looking up into a laptop camera shows your ceiling and makes you look tired. Stack books or use a laptop stand so the camera sits at eye level — you look more engaged this way.' },
      { title: 'Mute when not speaking', content: 'Background noise — dogs, kids, dishwashers — is distracting. In Zoom, Teams, and Google Meet, press the spacebar to temporarily unmute so you do not forget to mute again.' },
      { title: 'Check the background', content: 'Tidy the area behind you before the call. Avoid clutter, open doors, or bright windows. If your space is messy, most apps let you blur the background — look for a small icon next to the camera or mic button.' },
    ],
  },
  // ── BROWSER POWER TIPS ──────────────────────────────────────────────────────
  {
    slug: 'use-browser-tabs-groups',
    title: 'How to Use Tab Groups in Your Browser',
    excerpt: 'Organize dozens of open tabs into color-coded groups you can collapse and reopen later — works in Chrome, Edge, Safari, and Firefox.',
    category: 'tips-tricks',
    tags: ['tab groups', 'Chrome', 'browser', 'productivity', 'organization'],
    readTime: '5 min',
    thumbnailEmoji: '📑',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Tab groups let you bundle related browser tabs together — like all your work tabs, all your shopping tabs, or all your research tabs — and color-code them. You can collapse a group to hide those tabs, then expand it when you need them again.

Chrome, Edge, Safari, and Firefox all support tab groups. The steps are slightly different in each, but the idea is the same: right-click a tab and pick Add to Group.`,
    steps: [
      { title: 'In Chrome or Edge, right-click a tab', content: 'Right-click any tab at the top of the browser. Pick Add Tab to New Group from the menu that appears.' },
      { title: 'Name the group and pick a color', content: 'A small bubble appears next to the tab. Type a name (like Work or Shopping) and pick a color. The color makes it easy to tell groups apart.' },
      { title: 'Add more tabs to the group', content: 'Right-click another tab, pick Add Tab to Group, and choose the group you just made. Or drag a tab into the colored bubble at the top of the screen.' },
      { title: 'Collapse the group', content: 'Click the colored group name at the top. All the tabs in that group hide away, leaving only the group name. Click again to bring them back.' },
      { title: 'In Safari, use Tab Groups', content: 'On Mac or iPhone Safari, click File, then New Tab Group (Mac) or tap the tabs icon and then the down arrow (iPhone). Tab Groups in Safari work more like saved sessions than colored labels, but the idea is similar.' },
    ],
  },
  {
    slug: 'use-incognito-private-browsing',
    title: 'How to Use Incognito or Private Browsing',
    excerpt: 'Browse without saving history, cookies, or logins — useful for shared computers, gift shopping, or researching sensitive topics.',
    category: 'tips-tricks',
    tags: ['incognito', 'private browsing', 'privacy', 'Chrome', 'Safari'],
    readTime: '5 min',
    thumbnailEmoji: '🕵️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Incognito mode (Chrome), Private Browsing (Safari, Firefox), and InPrivate (Edge) all do the same thing: they open a new window that does not save your browsing history, cookies, or any information typed into forms.

It is useful for shopping for a gift on a shared computer, signing into a second email account, or researching something you do not want showing up in your history. It does not hide your activity from your internet provider or employer.`,
    steps: [
      { title: 'In Chrome, press Ctrl+Shift+N', content: 'On Windows or Chromebook, hold Ctrl, Shift, and N together. On Mac, press Command+Shift+N. A new dark window opens with an incognito icon in the corner.' },
      { title: 'In Safari on Mac, press Cmd+Shift+N', content: 'Press Command, Shift, and N together. A new window opens with a dark address bar to show it is private.' },
      { title: 'In Safari on iPhone', content: 'Tap the tabs icon (two overlapping squares) at the bottom. Tap the button in the bottom-middle that shows the current tab group, then pick Private. New tabs are private until you switch back.' },
      { title: 'In Firefox, press Ctrl+Shift+P', content: 'On Windows, press Ctrl+Shift+P. On Mac, press Command+Shift+P. A new window opens with a purple mask icon.' },
      { title: 'Understand the limits', content: 'Private browsing hides activity only from the device. Your internet provider, employer, school, or websites you sign into can still see what you do. For real anonymity, you need a VPN or Tor — not just incognito mode.' },
    ],
  },
  {
    slug: 'install-browser-extensions-safely',
    title: 'How to Install Browser Extensions Safely',
    excerpt: `Extensions can block ads, save passwords, or take notes — but malicious ones can steal data. Here's how to pick safe ones and remove risky ones.`,
    category: 'safety-guides',
    tags: ['extensions', 'browser', 'security', 'Chrome', 'privacy'],
    readTime: '6 min',
    thumbnailEmoji: '🧩',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Browser extensions are small add-ons that give your browser new powers — ad blockers, password managers, grammar checkers. But a bad extension can read everything you type, including passwords and credit card numbers.

Only install extensions from the official store (Chrome Web Store, Microsoft Edge Add-ons, Firefox Add-ons). Check reviews, developer name, and number of users before installing. Remove extensions you no longer use.`,
    steps: [
      { title: 'Install only from official stores', content: 'For Chrome and Edge, go to the Chrome Web Store. For Firefox, go to addons.mozilla.org. Never install an extension from a pop-up, random website, or email link.' },
      { title: 'Check the number of users and reviews', content: 'Extensions with millions of users and thousands of reviews are generally safer. Brand-new extensions with few users could be risky — wait a few months before trying them.' },
      { title: 'Look at the permissions', content: 'When you click Add to Chrome, a box pops up listing what the extension can do. "Read and change all your data on all websites" is a big ask — only grant it to extensions from well-known developers like Google, 1Password, or Grammarly.' },
      { title: 'Review your extensions regularly', content: 'In Chrome, click the puzzle-piece icon, then Manage Extensions. In Firefox, click the three lines, then Add-ons and Themes. Remove anything you no longer use or do not recognize.' },
      { title: 'Pick well-known alternatives', content: 'Trusted ad blockers: uBlock Origin. Password managers: 1Password, Bitwarden, LastPass. Grammar: Grammarly. Stick with names that have been around for years and have huge user bases.' },
    ],
  },
  {
    slug: 'change-default-browser',
    title: 'How to Change Your Default Browser',
    excerpt: 'Set Chrome, Firefox, Edge, or Safari as the default on Windows, Mac, iPhone, or Android so every link opens in your preferred browser.',
    category: 'essential-skills',
    tags: ['default browser', 'Chrome', 'Safari', 'Edge', 'browser'],
    readTime: '5 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Your default browser is the one that opens whenever you click a link in email, a document, or another app. Windows comes set to Edge; Mac comes set to Safari; iPhone comes set to Safari; Android comes set to Chrome. You can change any of these in the settings.

If you prefer Firefox, Chrome, or another browser, switching the default takes under a minute and applies everywhere.`,
    steps: [
      { title: 'On Windows', content: 'Open Settings, click Apps, then Default Apps. Search for your preferred browser (Chrome, Firefox, etc.), click its name, then click Set Default at the top.' },
      { title: 'On Mac', content: 'Open System Settings, click Desktop & Dock, then scroll down to Default Web Browser. Click the dropdown and pick the browser you want.' },
      { title: 'On iPhone', content: 'Open Settings, scroll down and tap your preferred browser (for example, Chrome). Tap Default Browser App and pick it. iPhone requires the browser to be installed first.' },
      { title: 'On Android', content: 'Open Settings, tap Apps, then Default Apps or Choose Default Apps. Tap Browser App and pick the one you want.' },
      { title: 'Test the change', content: 'Open an email or document with a link and click it. The link should open in your new default browser. If it does not, restart the device and try again — the setting sometimes needs a reboot to take effect.' },
    ],
  },
];
