// TekSure Guides Batch 9 — Privacy/data brokers, home security, Medicare deep dives, health apps, cooking, finance (April 2026)
import type { Guide } from './guides';

export const guidesBatch9: Guide[] = [
  // ── DATA BROKER REMOVAL ─────────────────────────────────────────────────────
  {
    slug: 'opt-out-whitepages',
    title: 'How to Remove Yourself from Whitepages',
    excerpt: 'Take your name, address, and phone number off the Whitepages people-search site so strangers cannot look them up.',
    category: 'safety-guides',
    tags: ['Whitepages', 'privacy', 'data broker', 'opt out', 'personal info'],
    readTime: '6 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Whitepages is a website that collects public records and shows your name, address, phone number, and relatives to anyone who searches. You have the right to ask them to remove your listing, and the process is free.

The removal request takes about 10 minutes, and your information usually comes off within 24 to 72 hours. You may need to repeat this every year or so because new records can bring the listing back.`,
    steps: [
      { title: 'Go to the Whitepages opt-out page', content: 'In your web browser, go to whitepages.com/suppression-requests. This is the official page for removing your own information.' },
      { title: 'Search for your own listing', content: 'Type your full name and the city and state where you live into the search box. Click your name when it appears in the list of results.' },
      { title: 'Click Remove Me', content: 'On the page that shows your details, look for a button that says "Remove Me" or "Claim and Edit". Click it to start the removal request.' },
      { title: 'Verify with your phone number', content: 'Whitepages will call the phone number you enter and read a short code out loud. Type that code on the website to prove you are the real person asking to be removed.' },
      { title: 'Check back in a few days', content: 'Search your name on Whitepages again after 2 to 3 days to confirm the listing is gone. Set a reminder to check again every 6 months in case the record reappears.' },
    ],
  },
  {
    slug: 'opt-out-spokeo',
    title: 'How to Remove Yourself from Spokeo',
    excerpt: 'Ask Spokeo to take down your name, address, age, and family details from their public people-search site.',
    category: 'safety-guides',
    tags: ['Spokeo', 'privacy', 'data broker', 'opt out', 'personal info'],
    readTime: '6 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Spokeo is a people-search website that shows your age, address history, phone numbers, relatives, and sometimes old email addresses. Anyone who searches your name can see this for free or pay for more details.

Spokeo has a free opt-out page that hides your profile within a day or two. You do not need to pay for anything, and you do not need a Spokeo account.`,
    steps: [
      { title: 'Find your Spokeo listing', content: 'Go to spokeo.com and type your full name and the state where you live. Click your name in the results to open your profile page.' },
      { title: 'Copy the web address of your profile', content: 'Look at the top of your browser window and copy the full web address (URL) of the page showing your details. You will paste this on the opt-out page.' },
      { title: 'Open the opt-out page', content: 'In a new tab, go to spokeo.com/optout. This is the official removal page run by Spokeo.' },
      { title: 'Paste the link and enter your email', content: 'Paste the profile web address in the first box. Type an email address you check often in the second box, then click "Opt Out".' },
      { title: 'Confirm by clicking the email link', content: 'Open the email Spokeo sends you within a few minutes. Click the confirmation link, and your profile should disappear from search results within 24 to 48 hours.' },
    ],
  },
  {
    slug: 'opt-out-beenverified',
    title: 'How to Remove Yourself from BeenVerified',
    excerpt: 'Stop your personal information from showing up on BeenVerified, a site that sells background reports about regular people.',
    category: 'safety-guides',
    tags: ['BeenVerified', 'privacy', 'data broker', 'opt out', 'personal info'],
    readTime: '6 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `BeenVerified sells background reports that include your address, phone, relatives, job history, and more. They gather all of this from public records without asking you.

The good news is that BeenVerified must remove your listing if you ask. The whole process takes about 5 minutes and is completely free.`,
    steps: [
      { title: 'Go to the BeenVerified opt-out page', content: 'In your browser, go to beenverified.com/app/optout/search. This is their official removal page.' },
      { title: 'Search for your name', content: 'Type your first and last name, then pick the state where you live. Click Search to see a list of possible matches.' },
      { title: 'Pick the record that matches you', content: `Look through the results for the one with your correct age and city. Click "That's the one" next to your entry.` },
      { title: 'Enter your email address', content: 'Type an email address you can check right now. BeenVerified will send a verification link to this email.' },
      { title: 'Click the link in the email', content: 'Open your email, find the message from BeenVerified, and click the verification link inside. Your record usually comes down within 24 hours.' },
    ],
  },
  {
    slug: 'opt-out-truepeoplesearch',
    title: 'How to Remove Yourself from TruePeopleSearch',
    excerpt: 'Take your home address, phone number, and family details off TruePeopleSearch, one of the most popular free people-finder sites.',
    category: 'safety-guides',
    tags: ['TruePeopleSearch', 'privacy', 'data broker', 'opt out', 'personal info'],
    readTime: '5 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `TruePeopleSearch is a free website that shows your current address, past addresses, phone numbers, and relatives to anyone who searches. It is one of the most-used people-finder sites and a common source of information for scammers.

Removing your listing is free and takes about 5 minutes. Your record usually disappears within 24 hours after you confirm.`,
    steps: [
      { title: 'Search for your name', content: 'Go to truepeoplesearch.com and type your full name plus your city and state. Click your correct listing from the results.' },
      { title: 'Copy the web address of your profile', content: 'At the top of your browser, copy the full web address of the page that shows your details. You will need to paste it in the next step.' },
      { title: 'Go to the opt-out page', content: 'Open truepeoplesearch.com/removal in a new tab. This is the official removal form.' },
      { title: 'Paste your profile link and enter your email', content: 'Paste the web address in the box and type an email you check regularly. Complete the picture puzzle (CAPTCHA) that proves you are not a robot.' },
      { title: 'Click the confirmation link in your email', content: 'Check your email for a message from TruePeopleSearch and click the confirmation link. Your listing will be removed within a few hours.' },
    ],
  },
  {
    slug: 'google-results-about-you',
    title: `How to Use Google's Results About You Tool`,
    excerpt: 'Use a free Google tool to find web pages that show your phone number, address, or email and ask Google to hide them.',
    category: 'safety-guides',
    tags: ['Google', 'privacy', 'search results', 'personal info'],
    readTime: '7 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google offers a free tool called "Results About You" that scans the web for pages showing your personal contact information. When it finds something, you can ask Google to hide that page from search results in one click.

This does not delete the page from the internet, but it stops people from finding it on Google. That alone makes a big difference, since most people only find your info by searching your name.`,
    steps: [
      { title: 'Sign in to your Google account', content: 'Go to google.com and click Sign In at the top right. Use the Gmail account you normally use.' },
      { title: 'Open the Results About You tool', content: 'Go to myactivity.google.com/results-about-you in your browser. You can also search for "Google Results About You" to find the page.' },
      { title: 'Enter the info you want Google to watch for', content: 'Type the names you go by, your home address, phone number, and email. Google uses this list to scan search results and tell you what shows up.' },
      { title: 'Review the pages Google finds', content: 'Google will show a list of web pages that mention your info. Scroll through and see which ones you want hidden.' },
      { title: 'Click Request Removal on each page', content: 'Next to each unwanted page, click "Request Removal". Google reviews the request within a few days and usually hides the page from search if it shows personal contact details.' },
    ],
  },
  {
    slug: 'remove-yourself-google-search',
    title: 'How to Remove Your Info from Google Search',
    excerpt: 'Ask Google to stop showing web pages that contain your phone number, address, or other personal information.',
    category: 'safety-guides',
    tags: ['Google', 'privacy', 'search', 'removal request'],
    readTime: '7 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google has a form you can use to ask them to hide specific web pages from search results. This works best for pages that show personal information like your home address, phone number, ID numbers, or private images.

Google will not remove news articles or pages that are in the public interest. But for data-broker sites and pages with your contact info, this process works well and is free.`,
    steps: [
      { title: 'Find the page you want removed', content: 'First, search your name on Google and click the result you want gone. Copy the full web address from the top of your browser.' },
      { title: 'Go to the Google removal form', content: 'In a new tab, go to support.google.com/websearch/answer/9673730. Scroll down and click the button that says "Start removal request".' },
      { title: 'Pick the reason for removal', content: 'Choose the option that fits — usually "Personal info, like your address or phone number" or "Contact info shown with threats". Answer the questions that follow.' },
      { title: 'Paste the link and upload a screenshot', content: 'Paste the web address of the page you want removed. Take a screenshot showing the page contains your personal info, and upload it when asked.' },
      { title: 'Submit and wait for a decision', content: 'Click Submit. Google sends you a confirmation email and usually responds within a few days to tell you if the page has been removed from search.' },
    ],
  },
  {
    slug: 'check-personal-info-online',
    title: `How to Check What's Online About You`,
    excerpt: 'Do a thorough search of your own name to find out what strangers can learn about you from public websites.',
    category: 'safety-guides',
    tags: ['privacy', 'personal info', 'search yourself', 'online footprint'],
    readTime: '8 min',
    thumbnailEmoji: '👤',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most people have more information online than they realize. Data-broker sites, old social media accounts, and public records all add up to a pretty detailed picture that anyone can find in about 5 minutes.

Doing a full search of your own name once a year is a smart habit. When you see what is out there, you can decide what to remove and what to lock down.`,
    steps: [
      { title: 'Search your full name in quotes on Google', content: 'Go to google.com and type your name with quotes around it, like "Jane Smith". The quotes tell Google to find that exact name, not only the words Jane and Smith separately.' },
      { title: 'Add your city for more results', content: 'Search again with your name and city, like "Jane Smith" Dallas. This often turns up people-finder sites with your address and phone number.' },
      { title: 'Search your phone number and email', content: 'Put your phone number in quotes and search it on Google. Do the same with your email address. This shows any public page that lists them.' },
      { title: 'Check the big people-search sites directly', content: 'Go to whitepages.com, spokeo.com, beenverified.com, and truepeoplesearch.com and search your name on each one. These are the sites most strangers use to look people up.' },
      { title: 'Write down what you find', content: 'Make a list of each site that shows your info along with its web address. Use this list as your checklist for opt-out requests. Plan to repeat this search once a year.' },
    ],
  },
  {
    slug: 'use-deleteme-service',
    title: 'How to Use DeleteMe to Remove Personal Info',
    excerpt: 'Pay a service called DeleteMe to scrub your name and address off dozens of data-broker websites automatically.',
    category: 'safety-guides',
    tags: ['DeleteMe', 'privacy', 'data broker', 'subscription', 'personal info'],
    readTime: '7 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `DeleteMe is a paid service that sends opt-out requests to over 100 data-broker websites on your behalf. It costs around $129 per year and saves you many hours of work filling out removal forms one at a time.

The service keeps checking every three months to see if your info has come back, and removes it again when it does. This is a good option for people who do not want to do the opt-outs themselves.`,
    steps: [
      { title: 'Go to joindeleteme.com', content: 'Open your browser and go to joindeleteme.com. Click "Get Started" or "Plans" to see pricing.' },
      { title: 'Pick a plan and sign up', content: 'Choose the 1-person plan or family plan. Create an account with your email and a strong password, then enter your payment details.' },
      { title: 'Fill in your personal details', content: 'DeleteMe needs your full name, any past names, addresses from the last 10 years, phone numbers, and email addresses so they can find your listings. The more you give, the better they can scrub.' },
      { title: 'Review and approve your first report', content: 'Within about a week, DeleteMe sends a report showing the sites they found your info on. You approve the removal requests, and they handle the rest.' },
      { title: 'Watch for quarterly updates', content: 'Every three months, DeleteMe emails you a new report showing what they scrubbed again. You do not need to do anything else — your info stays cleaner as long as you keep the subscription active.' },
    ],
  },

  // ── LOCATION PRIVACY ────────────────────────────────────────────────────────
  {
    slug: 'turn-off-location-tracking-iphone',
    title: 'How to Turn Off Location Tracking on iPhone',
    excerpt: 'Stop apps and Apple from collecting your location history on your iPhone to keep your movements private.',
    category: 'safety-guides',
    tags: ['iPhone', 'location', 'privacy', 'tracking', 'iOS'],
    readTime: '6 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Your iPhone records where you go all day, every day. Apple uses this for features like suggesting traffic routes home, but you can turn it off without losing Maps or weather.

You can also control which specific apps get to see your location. This is a good idea because many apps ask for location permission even when they do not really need it.`,
    steps: [
      { title: 'Open the Settings app', content: 'Tap the gray gear icon on your home screen. This is the Settings app.' },
      { title: 'Go to Privacy & Security', content: 'Scroll down and tap Privacy & Security. Then tap Location Services at the top of the list.' },
      { title: 'Turn off location history tracking', content: 'Scroll to the bottom and tap System Services. Tap Significant Locations, enter your passcode, and turn off the switch. This stops your iPhone from keeping a log of places you visit.' },
      { title: 'Review which apps can see your location', content: 'Go back to the main Location Services page. Tap each app in the list and pick "Never" for apps that do not need your location — like flashlights, games, or calculators.' },
      { title: 'Turn off Location Services completely (optional)', content: 'If you want full privacy, go back to the top of the Location Services page and flip the main switch off. Be aware that Maps, Weather, and Find My will stop working until you turn it back on.' },
    ],
  },
  {
    slug: 'turn-off-location-tracking-android',
    title: 'How to Turn Off Location Tracking on Android',
    excerpt: 'Stop Google and Android apps from recording your location history to protect your privacy.',
    category: 'safety-guides',
    tags: ['Android', 'location', 'privacy', 'tracking', 'Google'],
    readTime: '6 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Android phones save a detailed record of everywhere you go, and Google keeps a long history in something called Timeline. You can shut this off entirely or pick which apps get to see where you are.

Turning off location tracking does not break your phone. You can still use Maps for directions when you need it — you stop the always-on background logging.`,
    steps: [
      { title: 'Open Settings', content: 'Swipe down from the top of your screen and tap the gear icon. Or find the Settings app in your app drawer.' },
      { title: 'Tap Location', content: 'Scroll down and tap Location. This shows all location settings for your phone.' },
      { title: 'Turn off Location Services', content: 'At the top, flip the Use Location switch off if you want to stop all location tracking. You can turn it on briefly when you need Maps.' },
      { title: 'Review app permissions', content: 'If you want location on but controlled, tap App Location Permissions. For each app, pick "Deny" or "Allow only while using the app" — avoid giving permission all the time unless the app truly needs it.' },
      { title: 'Delete your Google location history', content: 'Open maps.google.com/timeline in a browser, sign in with your Google account, and click "Delete all Location History". This erases the log Google has been keeping about your movements.' },
    ],
  },
  {
    slug: 'remove-photo-location-data',
    title: 'How to Remove Location Data from Photos',
    excerpt: 'Strip the hidden GPS tag off photos before you post or send them so people cannot find where you took them.',
    category: 'safety-guides',
    tags: ['photos', 'privacy', 'metadata', 'GPS', 'EXIF'],
    readTime: '6 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Every photo your phone takes has hidden data attached to it, including the exact GPS spot where you stood when you snapped it. If you text or post that photo, anyone with basic tools can pull out that location.

Most social networks strip this data automatically, but texting and email usually do not. Removing location before you share keeps your home address and daily spots private.`,
    steps: [
      { title: 'On iPhone, open the photo in the Photos app', content: 'Tap the photo you want to share. Swipe up on the photo or tap the (i) info icon at the bottom to see a map showing where it was taken.' },
      { title: 'Tap Adjust to remove the location', content: 'Under the map, tap the word "Adjust" and then tap "No Location". The GPS tag is now stripped from that photo.' },
      { title: 'On Android, open Google Photos', content: 'Find the photo and tap the three-dot menu at the top right. Scroll down and tap "Remove geo-location" to strip the GPS tag.' },
      { title: 'For multiple photos, turn off location when taking them', content: 'In your Camera settings, look for "Location tags" or "GPS" and turn it off. From now on, new photos will not have location attached in the first place.' },
      { title: 'Share without location', content: 'Send the adjusted photo by text, email, or upload. The receiver can still see the picture, but they cannot see where you were when you took it.' },
    ],
  },
  {
    slug: 'find-my-iphone-setup',
    title: 'How to Set Up Find My iPhone Safely',
    excerpt: 'Turn on Find My iPhone so you can locate, lock, or erase your phone if it is ever lost or stolen.',
    category: 'safety-guides',
    tags: ['Find My', 'iPhone', 'lost phone', 'Apple', 'security'],
    readTime: '6 min',
    thumbnailEmoji: '🔎',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Find My iPhone lets you see your phone on a map, play a sound to help find it under the couch, lock it remotely, or erase everything if you cannot get it back. It is free and built into every iPhone.

Turn it on before you lose the phone — you cannot add it after a device is missing. It takes about 2 minutes to set up.`,
    steps: [
      { title: 'Open Settings and tap your name', content: 'Open the Settings app and tap your name at the very top of the screen. This opens your Apple ID settings.' },
      { title: 'Tap Find My', content: 'Scroll down and tap Find My. This is where all the lost-phone settings live.' },
      { title: 'Turn on Find My iPhone', content: 'Tap Find My iPhone and flip the main switch on. Also turn on "Find My network" so your phone can be located even when it is offline, and "Send Last Location" so it sends its spot when the battery is low.' },
      { title: 'Turn on Share My Location (optional)', content: 'Go back to the Find My settings and turn on Share My Location if you want a family member to help find it. You can pick specific people to share with.' },
      { title: 'Test it from another device', content: 'On another phone or a computer, go to icloud.com/find and sign in with your Apple ID. You should see your iPhone on a map. If that works, you are all set.' },
    ],
  },

  // ── HOME SECURITY ───────────────────────────────────────────────────────────
  {
    slug: 'set-up-ring-alarm',
    title: 'How to Set Up Ring Alarm Home Security',
    excerpt: 'Install a Ring Alarm system yourself in about an hour with no tools and no installer visit.',
    category: 'smart-home',
    tags: ['Ring', 'alarm', 'home security', 'DIY', 'smart home'],
    readTime: '10 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Ring Alarm is a do-it-yourself home security system that comes in a kit with a base station, keypad, door sensors, and a motion detector. You stick the sensors on doors and windows with peel-off tape — no drilling.

The monthly monitoring plan costs about $20 and includes professional 24/7 monitoring that will call the police if the alarm goes off. Without the plan, you still get alerts on your phone.`,
    steps: [
      { title: 'Download the Ring app and make an account', content: 'On your phone, open the App Store (iPhone) or Play Store (Android) and install the Ring app. Open it and tap "Create Account" with your email.' },
      { title: 'Plug in the base station', content: 'Place the round base station somewhere central, like a hallway or living room, and plug it into a wall outlet. The light on the front will turn blue when it is ready.' },
      { title: 'Add the base station in the app', content: 'In the Ring app, tap "Set Up a Device" and pick Alarm Base Station. Scan the QR code sticker on the bottom of the base with your phone, and follow the prompts to connect to your Wi-Fi.' },
      { title: 'Add sensors one at a time', content: 'In the app, tap "Set Up a Device" again and pick Contact Sensor or Motion Detector. Pull the plastic tab on the back of each sensor to wake it up, then stick it on the door or window frame with the included tape.' },
      { title: 'Turn on professional monitoring (optional)', content: 'In the app menu, tap Ring Protect Plans and choose Ring Protect Pro ($20/month). This unlocks 24/7 monitoring that calls police when the alarm goes off and you do not answer.' },
    ],
  },
  {
    slug: 'set-up-simplisafe',
    title: 'How to Set Up SimpliSafe Home Security',
    excerpt: 'Install a SimpliSafe alarm system yourself in under an hour and have police dispatch ready on day one.',
    category: 'smart-home',
    tags: ['SimpliSafe', 'alarm', 'home security', 'DIY', 'smart home'],
    readTime: '10 min',
    thumbnailEmoji: '🏡',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `SimpliSafe is a do-it-yourself alarm system you order online and set up in under an hour. Everything is wireless and sticks to walls with removable tape, so you do not need tools or a contractor.

Monitoring costs around $30 a month for the full plan, which includes phone app alerts, video recording, and 24/7 police dispatch. You can cancel any time without a contract.`,
    steps: [
      { title: 'Unbox and plug in the base station', content: 'The big cylinder is the base station. Put it somewhere central in your home — usually the living room or hallway — and plug it into a wall outlet.' },
      { title: 'Download the SimpliSafe app', content: 'Install the SimpliSafe app from the App Store or Play Store. Open it and create an account with your email and a strong password.' },
      { title: 'Add the keypad and connect Wi-Fi', content: 'Mount the keypad near your front door using the sticky tape on the back. In the app, tap Add Device and follow the prompts to connect the base station to your home Wi-Fi.' },
      { title: 'Place door, window, and motion sensors', content: 'Peel the tape off each sensor and stick them on door frames, window sills, and a wall corner for the motion detector. The app shows you exactly where each sensor goes.' },
      { title: 'Activate monitoring', content: 'In the app, tap the menu and pick "Professional Monitoring". Pick the Core or Pro plan, enter your payment info, and your system will be live within minutes. Test it by arming then walking in front of a motion sensor.' },
    ],
  },
  {
    slug: 'set-up-nest-cam',
    title: 'How to Set Up Google Nest Cam',
    excerpt: 'Install a Nest Cam in your home or yard and watch live video on your phone from anywhere.',
    category: 'smart-home',
    tags: ['Nest', 'camera', 'Google', 'home security', 'smart home'],
    readTime: '7 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google Nest Cam is a small security camera that connects to your Wi-Fi and streams video to your phone. You can talk through the camera, get alerts when someone walks by, and save clips when motion happens.

The setup is done through the Google Home app and takes about 15 minutes. Basic alerts are free, and the Nest Aware plan ($8 a month) unlocks video recording history.`,
    steps: [
      { title: 'Install the Google Home app', content: 'On your phone, open the App Store or Play Store and install the Google Home app. Sign in with the Google account you want to use for the camera.' },
      { title: 'Plug in the camera', content: 'Plug the Nest Cam into a wall outlet with the power cable that came in the box. A small light on the front will blink while it is starting up.' },
      { title: 'Add the device in Google Home', content: 'Open Google Home, tap the plus sign at the top left, and pick "Set up device". Choose "New device" and let the app scan for nearby cameras. It should find your Nest Cam automatically.' },
      { title: 'Connect to Wi-Fi', content: 'Follow the prompts to join your home Wi-Fi network. Pick the room where the camera is (like Front Door or Living Room) so alerts make sense later.' },
      { title: 'Place the camera and test', content: 'Screw or stick the camera where you want it — many people put one at the front door and one inside. Open Google Home, tap the camera, and check that you see live video. Walk in front of it to confirm motion alerts work.' },
    ],
  },
  {
    slug: 'set-up-blink-camera',
    title: 'How to Set Up Blink Outdoor Camera',
    excerpt: 'Set up a battery-powered Blink camera outside your home with no wiring and long battery life.',
    category: 'smart-home',
    tags: ['Blink', 'camera', 'Amazon', 'outdoor', 'battery'],
    readTime: '7 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Blink Outdoor is a weather-resistant camera that runs on two AA batteries for up to two years. It does not need wires, so you can stick it anywhere outside — on a porch, garage, or backyard shed.

The camera connects to Wi-Fi through a small hub called the Sync Module that plugs in indoors. You get free motion alerts on your phone, and a $3 monthly plan unlocks cloud recording.`,
    steps: [
      { title: 'Install the Blink app', content: 'Download the Blink Home Monitor app from the App Store or Play Store. Create an account with your email and a password.' },
      { title: 'Plug in the Sync Module indoors', content: 'The Sync Module is a small white box that came in your Blink kit. Plug it into a wall outlet inside your house. A blue light will turn on when it is ready.' },
      { title: 'Add the Sync Module to the app', content: 'In the Blink app, tap the plus sign and pick "Sync Module". Scan the QR code on the back of the module, connect to your home Wi-Fi, and wait for it to come online (about 1 minute).' },
      { title: 'Install batteries and add the camera', content: 'Slide the back off the camera, pop in the two AA batteries, and close it up. In the app, tap the plus sign again and pick your camera type. Scan the QR code inside the battery compartment.' },
      { title: 'Mount and test', content: 'Screw or stick the camera outside where you want it — most people pick a porch or garage facing a driveway. Open the app, tap Live View, and check you see video. Walk in front to confirm motion alerts arrive on your phone.' },
    ],
  },
  {
    slug: 'use-arlo-camera-app',
    title: 'How to Set Up and Use Arlo Camera',
    excerpt: 'Install an Arlo wireless security camera and view video on your phone from anywhere in the world.',
    category: 'smart-home',
    tags: ['Arlo', 'camera', 'home security', 'wireless', 'smart home'],
    readTime: '8 min',
    thumbnailEmoji: '🎥',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Arlo makes small, weather-proof cameras that run on rechargeable batteries. They work without wires, so you can put one on the front porch, driveway, or backyard with no drilling.

You manage everything from the Arlo app on your phone. Free plans give you live video and motion alerts, while a $5 monthly plan unlocks 30-day video history.`,
    steps: [
      { title: 'Charge the camera battery', content: 'Before you start, plug the Arlo camera into the wall charger that came in the box. Let it charge fully — usually about 2 hours. The light turns green when done.' },
      { title: 'Install the Arlo app and make an account', content: 'Download the Arlo Secure app from the App Store or Play Store. Tap "Create Account" and sign up with your email and a strong password.' },
      { title: 'Set up the base station (if included)', content: 'If your Arlo kit came with a base station (a small plastic box), connect it to your internet router with the Ethernet cable and plug it into power. Wait for the light to turn green.' },
      { title: 'Add the camera in the app', content: 'Tap the plus sign in the app and pick "Add New Device". Scan the QR code on the bottom of the camera or follow the prompts to connect to your Wi-Fi. Name the camera (like "Front Door").' },
      { title: 'Mount and test the camera', content: 'Screw or magnetically mount the camera where you want it. Open the app, tap the camera name, and you should see live video. Walk in front to test motion alerts on your phone.' },
    ],
  },
  {
    slug: 'secure-smart-home-cameras',
    title: 'How to Keep Your Smart Home Cameras Secure from Hackers',
    excerpt: 'Protect your security cameras with strong passwords and two-factor sign-in so strangers cannot watch your video feed.',
    category: 'safety-guides',
    tags: ['smart home', 'camera', 'security', 'passwords', 'two-factor'],
    readTime: '7 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `News stories about hackers watching people through their own security cameras are real, but they are almost always the result of weak passwords or reused ones. With a few small steps, you can make your cameras extremely hard to break into.

The most important changes are a strong unique password and two-factor sign-in. Both take about 5 minutes per camera account and block most attacks.`,
    steps: [
      { title: 'Change your camera app password', content: 'Open the camera app (Ring, Nest, Arlo, Blink, etc.), go to Account Settings, and pick Change Password. Make a new password at least 12 characters long that you do not use on any other site.' },
      { title: 'Turn on two-factor authentication', content: 'In the same Account Settings menu, look for "Two-Factor Authentication" or "Two-Step Verification" and turn it on. This asks for a text-message code any time someone tries to sign in from a new device.' },
      { title: 'Check for unknown sign-ins', content: 'Most camera apps have a "Devices" or "Active Sessions" page showing every phone or computer that has signed in. If you see a device you do not recognize, tap it and sign it out.' },
      { title: 'Update the camera firmware', content: 'Camera makers release security updates called firmware. In the app settings, tap "Device Info" or "Firmware" and make sure you are on the latest version. Turn on automatic updates if the option is there.' },
      { title: 'Use a strong Wi-Fi password', content: 'Cameras are only as secure as the Wi-Fi they sit on. Log in to your router (usually by going to 192.168.1.1 in a browser) and make sure your Wi-Fi password is long and unique. Turn off WPS, a short-code shortcut that is known to be weak.' },
    ],
  },

  // ── MEDICARE DEEP DIVES ─────────────────────────────────────────────────────
  {
    slug: 'sign-up-medicare-part-d',
    title: 'How to Sign Up for Medicare Part D Prescription Coverage',
    excerpt: 'Enroll in Medicare Part D to cover the cost of prescription drugs and avoid the late enrollment penalty.',
    category: 'government-civic',
    tags: ['Medicare', 'Part D', 'prescriptions', 'enrollment', 'insurance'],
    readTime: '8 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Medicare Part D pays for prescription drugs. Basic Medicare (Parts A and B) does not cover most prescriptions, so most people need to add Part D or a Medicare Advantage plan that includes drug coverage.

You should sign up during your 7-month enrollment window around your 65th birthday. Waiting longer means paying a late-enrollment penalty every month for the rest of your life.`,
    steps: [
      { title: 'Go to Medicare.gov', content: 'Open your browser and go to medicare.gov. Click "Find health & drug plans" at the top of the page.' },
      { title: 'Enter your ZIP code and current drugs', content: 'Type in your ZIP code and list the prescriptions you take. Medicare uses this to show only the plans that cover your drugs at the best price.' },
      { title: 'Compare Part D plans side-by-side', content: 'Medicare lists plans in your area along with the monthly cost, drug cost, and star rating. Look at the "Estimated Yearly Drug Costs" number — that is the best way to compare.' },
      { title: 'Click Enroll on the plan you pick', content: 'Click the plan name, then click Enroll. Sign in with your Medicare account (or create one with your Medicare number) and enter your info.' },
      { title: 'Wait for your plan card in the mail', content: 'The insurance company will mail you a plan ID card within 2 weeks. Show this card along with your red, white, and blue Medicare card at the pharmacy when picking up prescriptions.' },
    ],
  },
  {
    slug: 'compare-medicare-advantage-plans',
    title: 'How to Compare Medicare Advantage Plans Online',
    excerpt: 'Use the Medicare Plan Finder to compare Advantage plans in your area based on cost, doctors, and drug coverage.',
    category: 'government-civic',
    tags: ['Medicare', 'Advantage', 'Part C', 'comparison', 'insurance'],
    readTime: '9 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Medicare Advantage (Part C) plans are offered by private insurance companies and combine Parts A, B, and usually D into one plan. Costs, doctor networks, and extra benefits like dental or vision vary widely by plan.

Medicare.gov has a free Plan Finder tool that shows every plan in your area with your exact drugs and doctors, so you can see the real price you will pay.`,
    steps: [
      { title: 'Open the Medicare Plan Finder', content: 'Go to medicare.gov/plan-compare in your browser. Click "Start" to begin the comparison.' },
      { title: 'Enter your ZIP code and plan type', content: 'Type your ZIP code and pick "Medicare Advantage Plan (Part C)". Medicare will show only the Advantage plans available where you live.' },
      { title: 'Add your doctors and drugs', content: 'Type in the names of doctors you want to keep, plus each prescription drug you take and its dose. This makes sure the plans you compare actually cover what you need.' },
      { title: 'Sort plans by total yearly cost', content: 'Medicare shows a list of plans. Click "Sort by" and pick "Lowest Estimated Total Cost". This shows the premiums, copays, and drug costs added together for the year — the real price you will pay.' },
      { title: 'Read the star ratings and extras', content: 'Click each plan name to see its star rating (1 to 5 stars) and extra benefits like dental, hearing, vision, or gym membership. Pick a 4-star or 5-star plan with the benefits you want.' },
    ],
  },
  {
    slug: 'appeal-medicare-denial',
    title: 'How to Appeal a Medicare Coverage Denial',
    excerpt: 'File an appeal if Medicare denies a service or treatment you believe should be covered — many appeals win.',
    category: 'government-civic',
    tags: ['Medicare', 'appeal', 'denial', 'coverage', 'rights'],
    readTime: '9 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `If Medicare (or a Medicare Advantage plan) denies payment for a treatment, hospital stay, or prescription, you have the right to appeal. Many people give up after the first denial, but about half of all appeals end up being paid.

The appeal is free, and there are five levels. Most people win at the first or second level if they include a letter from their doctor explaining why the service is medically needed.`,
    steps: [
      { title: 'Read the denial notice carefully', content: 'When Medicare denies a claim, they mail you a Medicare Summary Notice or a plan denial letter. This paper tells you exactly what was denied, why, and the deadline to appeal (usually 120 days).' },
      { title: 'Ask your doctor for a support letter', content: `Call your doctor's office and ask them to write a short letter explaining why this service is medically necessary. Most offices will do this for you, and it is the single most important thing for winning.` },
      { title: 'Fill out the Redetermination form', content: 'Download Form CMS-20027 from medicare.gov or call 1-800-MEDICARE to request one by mail. Fill it in with your Medicare number, the denial details, and why you think it should be covered.' },
      { title: 'Mail the appeal and keep copies', content: 'Mail the form, the doctor letter, and a copy of the denial notice to the address on your denial. Send it by certified mail so you have proof it arrived. Keep a copy of everything for yourself.' },
      { title: 'Wait for a decision', content: 'Medicare has 60 days to respond. If they still deny, the notice will tell you how to file the next level of appeal. Free help is available from your State Health Insurance Assistance Program (SHIP) — call 1-877-839-2675.' },
    ],
  },
  {
    slug: 'medicare-annual-enrollment',
    title: 'How to Change Your Medicare Plan During Open Enrollment',
    excerpt: 'Switch Medicare Advantage plans or drug plans during the fall Open Enrollment period from October 15 to December 7.',
    category: 'government-civic',
    tags: ['Medicare', 'open enrollment', 'switch plans', 'annual'],
    readTime: '7 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Medicare Open Enrollment runs October 15 through December 7 every year. During this window, you can switch Medicare Advantage plans, change drug plans, or move from Advantage back to Original Medicare — no questions asked.

Plans change their drug lists and doctor networks every year, so it is worth comparing your current plan to new options each fall. Changes you make take effect January 1.`,
    steps: [
      { title: `Check your plan's Annual Notice of Change`, content: 'Every September, your current plan mails you a packet called the Annual Notice of Change (ANOC). Look at any differences for next year — new drug costs, removed doctors, or a higher premium.' },
      { title: 'Go to medicare.gov/plan-compare', content: 'Open your browser and go to medicare.gov/plan-compare. Enter your ZIP code, then sign in with your Medicare account so the tool remembers your drugs and doctors.' },
      { title: 'Run a fresh comparison for next year', content: 'The tool will show all plans available next year, including your current one. Sort by Total Yearly Cost to see which plan saves you the most based on the drugs you actually take.' },
      { title: 'Enroll in the new plan', content: 'When you find a better plan, click Enroll. Medicare handles the switch automatically — you do NOT need to cancel your old plan, it drops off on December 31.' },
      { title: 'Save your confirmation', content: 'After enrolling, save the confirmation email or number. Your new plan card will arrive in the mail by mid-December. Coverage starts January 1 of the new year.' },
    ],
  },
  {
    slug: 'medicare-summary-notice',
    title: 'How to Read Your Medicare Summary Notice Online',
    excerpt: 'Find and read your Medicare Summary Notice online to check what Medicare paid for your doctor visits and treatments.',
    category: 'government-civic',
    tags: ['Medicare', 'MSN', 'billing', 'claims', 'paperwork'],
    readTime: '7 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `A Medicare Summary Notice (MSN) is a detailed statement Medicare mails you every three months showing every claim they paid. It lists the doctor, date, service, how much was billed, and how much Medicare paid.

Reading these notices helps you catch billing mistakes and possible fraud. You can see them online in your Medicare account anytime, which is faster than waiting for the paper version.`,
    steps: [
      { title: 'Go to medicare.gov and sign in', content: 'Open medicare.gov in your browser and click "Log In" at the top right. Sign in with your username and password, or create an account using your Medicare number.' },
      { title: 'Click Claims & Statements', content: 'From your account home page, click the "Claims & Statements" menu at the top. This is where all your billing paperwork lives.' },
      { title: 'Open your latest Summary Notice', content: 'Click "Medicare Summary Notices" to see a list of past notices. Click the most recent one to open a PDF of the notice, which matches the paper version.' },
      { title: 'Check each claim for mistakes', content: 'Look at the list of services and dates. Make sure every visit is something you actually had. If you see a doctor you never saw or a test you never had, that is a red flag for fraud.' },
      { title: 'Report anything suspicious', content: `If you find a claim that does not look right, call your doctor's billing office first to check. If it is still wrong, call 1-800-MEDICARE or the Medicare Fraud Hotline at 1-800-HHS-TIPS.` },
    ],
  },
  {
    slug: 'find-doctor-medicare-online',
    title: 'How to Find a Doctor Who Takes Medicare Online',
    excerpt: 'Use the official Medicare doctor-finder tool to search for doctors near you who accept Medicare patients.',
    category: 'government-civic',
    tags: ['Medicare', 'doctor', 'find provider', 'accept Medicare'],
    readTime: '6 min',
    thumbnailEmoji: '👨‍⚕️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Not every doctor accepts Medicare — some have opted out entirely, and others only take a limited number of Medicare patients. The Medicare.gov doctor finder shows you who accepts Medicare near you and how they are rated.

You can search by specialty like primary care, cardiology, or physical therapy, and filter by distance from your home. The results include contact info and whether they accept new patients.`,
    steps: [
      { title: 'Go to the Care Compare tool', content: 'Open your browser and go to medicare.gov/care-compare. This is the official tool for finding doctors and other providers.' },
      { title: 'Pick Doctors & Clinicians', content: 'On the main page, click the "Doctors & Clinicians" option. This lets you search for individual doctors.' },
      { title: 'Enter your location and specialty', content: `Type your ZIP code and a specialty — like "primary care", "cardiology", or the doctor's name if you already have one in mind.` },
      { title: 'Filter by distance and new patients', content: 'On the results page, use the filters on the left side to set how many miles from home you are willing to drive and check "Accepting new Medicare patients" to hide doctors who are full.' },
      { title: 'Click a doctor to see details', content: `Click any name to see the doctor's address, phone number, languages spoken, and whether they accept Medicare assignment (which means they accept the Medicare-approved amount as full payment). Call the office to confirm and book.` },
    ],
  },

  // ── PRESCRIPTION & PHARMACY ─────────────────────────────────────────────────
  {
    slug: 'use-amazon-pharmacy',
    title: 'How to Use Amazon Pharmacy for Prescriptions',
    excerpt: 'Order prescriptions through Amazon Pharmacy for home delivery, often at lower prices than your local drug store.',
    category: 'health-tech',
    tags: ['Amazon', 'pharmacy', 'prescriptions', 'home delivery'],
    readTime: '7 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Amazon Pharmacy ships prescription medications to your door, often cheaper than your local pharmacy. If you have Amazon Prime, you get free two-day delivery plus access to the RxPass program ($5 per month for unlimited common generic drugs).

You can use your insurance, or pay cash. Amazon shows both prices before you buy so you can pick whichever is cheaper.`,
    steps: [
      { title: 'Go to amazon.com/pharmacy', content: 'Sign in to your Amazon account on the website or the Amazon app. Click the menu and scroll to "Pharmacy" or go to amazon.com/pharmacy directly.' },
      { title: 'Add your profile and insurance', content: 'Click "Set up your pharmacy profile". Fill in your date of birth, any allergies, and your insurance card info if you have it. This is protected by the same rules as your regular pharmacy (HIPAA).' },
      { title: 'Ask your doctor to send the prescription', content: 'Tell your doctor you want to use Amazon Pharmacy. Give them the name "Amazon Pharmacy" and they can send the prescription electronically — no paper needed.' },
      { title: 'Review the price and pick shipping', content: 'When the prescription arrives at Amazon, you will get an email. Open the app, check the price (Amazon shows the insurance price and cash price side by side), and pick shipping.' },
      { title: 'Track delivery', content: 'Amazon ships the medication in a plain package with no pharmacy labels on the outside. Prime members get it in 2 days. Open the app any time to see where your package is.' },
    ],
  },
  {
    slug: 'transfer-prescription-new-pharmacy',
    title: 'How to Transfer a Prescription to a New Pharmacy',
    excerpt: 'Move your prescription from one pharmacy to another — call the new pharmacy and they handle the transfer for you.',
    category: 'health-tech',
    tags: ['prescription', 'transfer', 'pharmacy', 'CVS', 'Walgreens'],
    readTime: '5 min',
    thumbnailEmoji: '🏪',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `If you move, find a cheaper pharmacy, or want a location closer to home, transferring your prescription is quick. You do not need to call your doctor — the new pharmacy handles everything by talking directly to your old pharmacy.

The transfer usually takes a few hours. Most prescriptions can be transferred, though controlled drugs like certain pain or anxiety medicines sometimes need a new prescription from your doctor.`,
    steps: [
      { title: 'Gather your prescription info', content: 'Pick up your current pill bottle and look at the label. You need the prescription number (usually called "Rx Number"), the drug name and dose, and the name of your current pharmacy.' },
      { title: 'Call or visit the new pharmacy', content: 'Call the new pharmacy or walk in during business hours. Tell them you want to transfer a prescription and give them the Rx number, drug name, and the phone number of your old pharmacy.' },
      { title: 'Wait for them to contact the old pharmacy', content: 'The new pharmacy calls or faxes your old pharmacy directly to get your prescription details. This usually takes 1 to 3 hours. They will text or call you when it is ready.' },
      { title: 'Pick up the prescription', content: 'Go to the new pharmacy, give your name at the counter, and pick up your medication. Pay with insurance or cash, the same as before.' },
      { title: 'Update auto-refills and apps', content: `If you used the old pharmacy's app or auto-refills, cancel those. Then set up auto-refills at the new pharmacy so you do not run out of medication.` },
    ],
  },
  {
    slug: 'set-up-auto-prescription-refills',
    title: 'How to Set Up Automatic Prescription Refills',
    excerpt: 'Sign up for auto-refills so your pharmacy restocks your prescription on schedule — no more calling to reorder.',
    category: 'health-tech',
    tags: ['prescription', 'auto refill', 'pharmacy', 'medication'],
    readTime: '5 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Automatic refills let your pharmacy get your next bottle ready before you run out. You do not need to call or tap anything — the pharmacy sends a text when it is ready to pick up.

Every big pharmacy offers this for free: CVS, Walgreens, Walmart, Rite Aid, and others. It works for almost every medication except controlled drugs like some pain medicines.`,
    steps: [
      { title: `Open your pharmacy's app or website`, content: `Download your pharmacy's app (CVS, Walgreens, Walmart, etc.) from the App Store or Play Store. Or go to their website and sign in with your account.` },
      { title: 'Go to your prescription list', content: 'Tap "Prescriptions" or "My Prescriptions" in the menu. You should see every current prescription you have at that pharmacy.' },
      { title: 'Turn on auto-refill for each medication', content: 'Tap the prescription you want on auto-refill. Look for a switch or button labeled "Auto-refill" or "Easy Refill" and turn it on. Repeat for each drug you want automatic.' },
      { title: 'Set how you want to be notified', content: 'Go to Account Settings or Notifications and pick text, email, or phone call. The pharmacy will notify you when each refill is ready for pickup.' },
      { title: 'Check you will not run out', content: 'Open the app in a couple of weeks and make sure the next refill date is before you will run out. If you travel, you can pause auto-refill temporarily from the same screen.' },
    ],
  },

  // ── DOCTOR APPOINTMENTS ONLINE ──────────────────────────────────────────────
  {
    slug: 'use-zocdoc-book-appointments',
    title: 'How to Use Zocdoc to Find and Book Doctors',
    excerpt: 'Use the free Zocdoc website or app to find doctors who take your insurance and book an appointment online.',
    category: 'app-guides',
    tags: ['Zocdoc', 'doctor', 'appointments', 'booking', 'insurance'],
    readTime: '7 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Zocdoc is a free website and app that shows doctors near you who are accepting new patients, with real appointment times you can book instantly. You can filter by doctor type, insurance plan, and patient ratings.

Most appointments on Zocdoc are available within a week, and you can see ratings from other patients before choosing. Booking is free — the doctor's office still bills your insurance normally.`,
    steps: [
      { title: 'Open Zocdoc and enter your info', content: 'Go to zocdoc.com or download the Zocdoc app. Enter your ZIP code, insurance plan, and what kind of doctor you need (like primary care or dermatologist).' },
      { title: 'Review the list of doctors', content: 'Zocdoc shows a list of matching doctors with photos, reviews, and the soonest available appointment. Click any doctor to see more details, including their background and patient reviews.' },
      { title: 'Pick an available time slot', content: 'Each doctor shows open appointment times as green buttons. Click the time and date that works for you — in-person visits and video visits are both shown.' },
      { title: 'Enter your name and insurance', content: 'Fill in your name, date of birth, phone number, and insurance details. Zocdoc verifies your insurance automatically to make sure the doctor takes it.' },
      { title: 'Confirm the appointment', content: 'Click Book. You will get a confirmation email and a text reminder. If you need to reschedule or cancel, do it in the Zocdoc app — it is faster than calling the office.' },
    ],
  },
  {
    slug: 'schedule-mammogram-online',
    title: 'How to Schedule a Mammogram Online',
    excerpt: 'Book your annual mammogram online through your hospital or imaging center instead of calling and waiting on hold.',
    category: 'health-tech',
    tags: ['mammogram', 'screening', 'appointments', 'women health'],
    readTime: '6 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most hospitals and imaging centers now let you book your yearly mammogram online. You pick a date and time that works, upload your insurance, and get a confirmation email — usually in under 5 minutes.

You often do not need a doctor's order if you are over 40 and getting a routine screening. Check with your insurance first — they usually cover one mammogram a year at 100%.`,
    steps: [
      { title: 'Find your local imaging center or hospital', content: 'Call your insurance, check their website, or ask your doctor which imaging centers accept your plan. Common ones include RadNet, your hospital system, and Solis Mammography.' },
      { title: 'Go to their website and look for online booking', content: `Open the imaging center's website in your browser. Look for a button or menu item that says "Schedule Online", "Book an Appointment", or "Request Appointment".` },
      { title: 'Pick mammogram as the service', content: 'Choose "Screening Mammogram" if this is your yearly checkup (you have no symptoms) or "Diagnostic Mammogram" if your doctor ordered one because of a concern.' },
      { title: 'Pick a date and time', content: 'Scroll through the calendar and pick an open slot. Most centers have morning and afternoon appointments Monday through Saturday.' },
      { title: 'Enter your info and confirm', content: `Type in your name, date of birth, insurance details, and your doctor's name so they can send the results. Click Confirm. You will get a confirmation email and a reminder call or text 1-2 days before the visit.` },
    ],
  },
  {
    slug: 'book-dental-appointment-online',
    title: 'How to Book a Dental Appointment Online',
    excerpt: 'Book your dental cleaning or checkup online without calling the office — most dentists now offer online scheduling.',
    category: 'health-tech',
    tags: ['dentist', 'appointments', 'booking', 'dental care'],
    readTime: '6 min',
    thumbnailEmoji: '🦷',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most dentists now let you book appointments online, either through their own website or a platform like Zocdoc. It takes 3 minutes and you can see real available times instead of leaving a message and waiting for a callback.

Some dentists even offer a new-patient discount for booking online. You can usually request a cleaning, checkup, emergency visit, or consultation.`,
    steps: [
      { title: `Go to your dentist's website`, content: `Type your dentist's name into Google and click their website. Look for a button that says "Schedule", "Book Now", or "Request Appointment" — usually at the top right of the page.` },
      { title: 'Pick the type of visit', content: 'Choose the visit type — "Cleaning" or "Checkup" if it is a routine 6-month visit, or "New Patient" if this is your first time. Other options include emergency, whitening, or consultation.' },
      { title: 'Pick a date and time', content: 'A calendar shows open times. Pick a day and time that works for you. Many dentists have Saturday hours or early-morning slots for busy patients.' },
      { title: 'Fill in your info and insurance', content: 'Type your name, date of birth, phone number, email, and insurance card details. If you are a new patient, you may be asked to fill in your health history online ahead of time.' },
      { title: 'Confirm and save the date', content: 'Click Confirm. You will get an email confirmation right away and usually a text or email reminder 1-2 days before. Save the date in your phone calendar so you do not forget.' },
    ],
  },
  {
    slug: 'schedule-vet-appointment',
    title: 'How to Book a Vet Appointment Online',
    excerpt: `Book your pet's vet appointment online through your vet's website or pet-care apps like Petdesk or Vetster.`,
    category: 'app-guides',
    tags: ['vet', 'pet', 'appointments', 'booking'],
    readTime: '6 min',
    thumbnailEmoji: '🐕',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most vet clinics now have online booking through their website or an app like Petdesk. You pick the pet, the reason for the visit, and an available time — usually within a few minutes.

Some vets also offer video visits (called telehealth) through apps like Vetster for non-emergency questions about your pet. This can save you a drive for minor issues.`,
    steps: [
      { title: `Find your vet's booking option`, content: `Go to your vet's website and look for "Book Appointment", "Schedule Visit", or a link to an app like Petdesk or Allydvm. You may need to create an account with your email the first time.` },
      { title: `Add your pet's details`, content: `Type in your pet's name, species, breed, age, and weight. Upload their most recent vaccination record if the vet asks for it.` },
      { title: 'Pick the visit reason', content: 'Choose the reason for the visit — annual checkup, vaccines, sick visit, or specific problem like limping or vomiting. The vet uses this to set the right amount of time for your visit.' },
      { title: 'Pick a time and confirm', content: 'Pick a day and open time slot from the calendar. Confirm the appointment — you will get an email and usually a text reminder 1 day before.' },
      { title: 'Try a video visit for minor questions', content: 'If your question is small (like a rash, mild diarrhea, or diet advice), try an app like Vetster or Pawp. A licensed vet can do a video call for about $30-50 and often solve the issue without a drive.' },
    ],
  },

  // ── FITNESS & HEALTH APPS ───────────────────────────────────────────────────
  {
    slug: 'use-myfitnesspal-weight-tracking',
    title: 'How to Use MyFitnessPal for Weight and Food Tracking',
    excerpt: 'Track your food, calories, and weight with the free MyFitnessPal app to hit weight-loss or fitness goals.',
    category: 'health-tech',
    tags: ['MyFitnessPal', 'weight loss', 'calorie counting', 'fitness'],
    readTime: '7 min',
    thumbnailEmoji: '📉',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `MyFitnessPal is a free app that tracks everything you eat and compares it to a daily calorie goal based on your weight-loss target. The food database has millions of items and you can often scan a barcode instead of typing.

Most people who use the app daily for 3 months lose weight because they become aware of what they are eating. The basic version is free — premium ($20 a month) adds meal plans and extra analysis.`,
    steps: [
      { title: 'Download MyFitnessPal', content: 'On your phone, open the App Store or Play Store and install MyFitnessPal. Open the app and tap "Sign Up" to create an account with your email.' },
      { title: 'Set your goals', content: 'Enter your age, height, current weight, and goal weight. Pick your activity level (sedentary, lightly active, etc.) and how fast you want to lose weight — usually 1 pound per week is sustainable.' },
      { title: 'Log your first meal', content: 'Tap the plus sign at the bottom and pick Food. Search for what you ate or tap the barcode icon to scan a package. MyFitnessPal adds the calories and nutrients to your daily total.' },
      { title: 'Weigh yourself weekly', content: 'Tap Progress in the bottom menu and enter your weight once a week (not daily — it fluctuates). Over a few months, you will see a clear line showing your trend.' },
      { title: 'Check your daily budget', content: 'On the home screen, your calorie goal shows at the top with how much you have eaten and how much is left. Try to stay within the target most days — exact numbers matter less than the trend over weeks.' },
    ],
  },
  {
    slug: 'use-couch-to-5k-app',
    title: 'How to Use the Couch to 5K App',
    excerpt: 'Use the Couch to 5K app to go from zero running to a full 5K race in 9 weeks with short, easy sessions.',
    category: 'health-tech',
    tags: ['Couch to 5K', 'running', 'fitness', 'exercise'],
    readTime: '6 min',
    thumbnailEmoji: '🏃',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Couch to 5K (often written C25K) is a 9-week program that slowly builds you up from walking to running a full 5K (3.1 miles). You only train 3 days a week, 20 to 30 minutes per session.

The app talks you through each workout, telling you when to walk and when to run. Thousands of people with no running history have finished a 5K using this program.`,
    steps: [
      { title: 'Download the app', content: 'Install the official "C25K - 5K Trainer" app from the App Store or Play Store. The free version includes all 9 weeks — you do not need to pay for anything.' },
      { title: 'Set up your profile', content: 'Enter your name and pick a voice coach that you like. The coach will speak in your headphones during workouts, telling you when to walk and run.' },
      { title: 'Do Week 1 Day 1', content: 'Start with Week 1 Day 1: a 5-minute warm-up walk, then alternating 60 seconds of running with 90 seconds of walking for 20 minutes, then a 5-minute cool-down. Put on headphones and follow the voice prompts.' },
      { title: 'Follow the schedule', content: 'Do 3 workouts per week, with a rest day in between. Each week gets a bit harder — longer running times and less walking. Repeat a week if you feel it is too much; there is no rush.' },
      { title: 'Finish Week 9 with a 5K', content: 'By Week 9, you will be running 30 minutes without stopping — about 5K for most people. Sign up for a local 5K race or run one yourself for the sense of accomplishment.' },
    ],
  },
  {
    slug: 'use-nike-training-club',
    title: 'How to Use Nike Training Club Free Workouts',
    excerpt: 'Get free guided workouts from Nike Training Club — strength, yoga, running, and full programs from pro trainers.',
    category: 'health-tech',
    tags: ['Nike', 'workouts', 'fitness', 'free app'],
    readTime: '6 min',
    thumbnailEmoji: '💪',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Nike Training Club (NTC) is a free app with hundreds of guided workouts from Nike trainers. You pick a workout by goal (strength, yoga, endurance, flexibility) and time (as short as 10 minutes) and follow along on your phone or TV.

There are no ads and no paywall. Workouts include video and voice-over instructions, and you can do most of them at home with no equipment.`,
    steps: [
      { title: 'Download Nike Training Club', content: 'Install the Nike Training Club app from the App Store or Play Store. Open it and sign up with your email — no payment info needed.' },
      { title: 'Pick a workout goal', content: 'On the home screen, tap "Find a Workout". Filter by goal (Strength, Yoga, Endurance, Mobility), time (10 min, 20 min, 45 min), and equipment (None, Light, Full Gym).' },
      { title: 'Try your first workout', content: 'Pick a beginner 15-20 minute workout. Tap Start. The trainer will demonstrate each move with a video and a voice coach will count you through reps and breaks.' },
      { title: 'Follow a multi-week program', content: 'Tap the Programs tab. Pick a 4- to 8-week program like "Beginner Strength" or "Yoga for Stress Relief". The app schedules each workout and tells you which to do each day.' },
      { title: 'Cast to a TV for bigger screens', content: 'If you have an Apple TV, Chromecast, or Smart TV, tap the cast icon during a workout to play the video on your TV. The voice still comes from your phone so you can hear the trainer clearly.' },
    ],
  },
  {
    slug: 'set-up-meditation-calm-app',
    title: 'How to Set Up the Calm Meditation App',
    excerpt: 'Use the Calm app to reduce stress and sleep better with guided meditations, sleep stories, and calming sounds.',
    category: 'health-tech',
    tags: ['Calm', 'meditation', 'sleep', 'stress', 'mental health'],
    readTime: '6 min',
    thumbnailEmoji: '🧘',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Calm is an app for meditation, sleep, and relaxation. It has hundreds of guided meditations, bedtime stories read by celebrities like Matthew McConaughey, and nature sounds that play in the background.

There is a free trial with several beginner meditations. After that, Calm Premium costs about $70 a year, which is cheaper than most meditation classes.`,
    steps: [
      { title: 'Download Calm', content: 'Install the Calm app from the App Store or Play Store. Open it and tap Sign Up. Create an account with your email.' },
      { title: 'Take the getting-started quiz', content: 'Calm will ask why you want to use the app — stress, sleep, focus, etc. It uses your answers to suggest content, but you can explore anything in the app later.' },
      { title: 'Try the "7 Days of Calm" program', content: 'Tap the Meditate tab and start "7 Days of Calm" (free). It is a gentle introduction with a different 10-minute meditation each day. Put on headphones and follow the voice.' },
      { title: 'Play a sleep story at bedtime', content: 'Tap the Sleep tab and pick a sleep story that sounds relaxing. Start it when you get into bed. Most people fall asleep within 15 minutes listening to the calming voice.' },
      { title: 'Set a daily reminder', content: 'Go to the Profile tab and turn on Daily Reminders. Pick a time (like 7 am or 9 pm) and Calm will send a gentle notification so you remember to meditate.' },
    ],
  },
  {
    slug: 'use-headspace-meditation',
    title: 'How to Use Headspace for Meditation',
    excerpt: 'Learn to meditate with Headspace — short, guided sessions designed for beginners with no experience.',
    category: 'health-tech',
    tags: ['Headspace', 'meditation', 'mindfulness', 'mental health'],
    readTime: '6 min',
    thumbnailEmoji: '🕊️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Headspace is a meditation app built around a free 10-day beginner course called Basics. The sessions are only 10 minutes each and taught by a former monk named Andy Puddicombe who explains everything in plain language.

After the free trial, Headspace costs $13 a month or $70 a year. Many people find that 10 minutes a day for a couple of weeks genuinely helps with stress and sleep.`,
    steps: [
      { title: 'Install Headspace', content: 'Download Headspace from the App Store or Play Store. Open it, tap Sign Up, and create an account with your email.' },
      { title: 'Start the Basics course', content: 'On the home screen, tap "Basics" or look for the free beginner pack. It is 10 sessions, each 10 minutes long, teaching you the fundamentals of meditation.' },
      { title: 'Listen with headphones', content: 'Put on headphones, sit somewhere quiet, and tap Play on Session 1. Andy will guide you through breathing exercises and body awareness. You do not need to sit cross-legged or do anything special. Focus on breathing.' },
      { title: 'Do one session a day', content: 'Try to do one session a day for 10 days in a row. The app tracks your streak and unlocks new content as you progress.' },
      { title: 'Try sleepcasts and focus music', content: 'After Basics, explore other parts of the app. Sleepcasts are bedtime stories that help you fall asleep, and Focus music is background sound for work or study.' },
    ],
  },
  {
    slug: 'track-blood-pressure-phone',
    title: 'How to Track Blood Pressure on Your Phone',
    excerpt: 'Record your blood pressure readings in a phone app so you can share a clear history with your doctor.',
    category: 'health-tech',
    tags: ['blood pressure', 'health tracking', 'hypertension', 'apps'],
    readTime: '7 min',
    thumbnailEmoji: '🩺',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Tracking your blood pressure over time helps you and your doctor see patterns — like whether it is higher in the morning or after salty meals. A phone app makes this much easier than a paper log.

Apple Health (on iPhone) and Google Fit (on Android) both track blood pressure. Some wireless cuffs from brands like Omron and Withings send the reading directly to your phone.`,
    steps: [
      { title: 'Open the Health app (iPhone) or Fit (Android)', content: 'On iPhone, open the Health app (the white app with a pink heart). On Android, open the Google Fit app, or download it from the Play Store if you do not have it.' },
      { title: 'Find blood pressure', content: 'On iPhone Health, tap Browse at the bottom, then Heart, then Blood Pressure. On Google Fit, tap the plus sign and pick Blood Pressure.' },
      { title: 'Add a new reading', content: 'Tap "Add Data" or the plus sign. Type in your systolic (top number) and diastolic (bottom number) readings. Pick the date and time, then tap Add.' },
      { title: 'Use a wireless cuff for automatic readings (optional)', content: 'If you have an Omron or Withings wireless cuff, follow its setup instructions to pair with your phone. Now every reading goes straight into Health or Fit with no typing needed.' },
      { title: 'Share a summary with your doctor', content: 'At your next doctor visit, open the app and show them the chart of the last month of readings. On iPhone, tap Share to email a PDF of your readings to your doctor.' },
    ],
  },

  // ── COOKING & RECIPES ───────────────────────────────────────────────────────
  {
    slug: 'use-nyt-cooking-app',
    title: 'How to Use the New York Times Cooking App',
    excerpt: 'Find tested recipes, save favorites, and get step-by-step cooking guidance from the New York Times Cooking app.',
    category: 'app-guides',
    tags: ['NYT Cooking', 'recipes', 'cooking', 'meal planning'],
    readTime: '7 min',
    thumbnailEmoji: '👨‍🍳',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `NYT Cooking is the recipe app from the New York Times, with thousands of recipes tested by pro cooks. Every recipe has clear instructions, a video for many, and notes from other home cooks who have made it.

It costs $5 a month after a free trial. If you cook even twice a week, it quickly pays for itself in meals that actually work out.`,
    steps: [
      { title: 'Install NYT Cooking', content: 'Download the NYT Cooking app from the App Store or Play Store. Open it and sign in with a New York Times subscription or start the free trial.' },
      { title: 'Search for a recipe', content: 'Tap the magnifying glass at the top and type what you want to cook (like "chicken thighs" or "chocolate cake"). You can filter by time, ingredient, or diet.' },
      { title: 'Read the recipe and reviews', content: 'Tap any recipe to see the ingredients and steps. Scroll down to the Notes section to read tips from other cooks — these are often more helpful than the recipe itself.' },
      { title: 'Save it to a recipe box', content: 'Tap the heart or the "Save" button to save the recipe to your Recipe Box. Create folders like "Weeknight Dinners" or "Desserts" to stay organized.' },
      { title: 'Cook step-by-step', content: 'When you are ready to cook, open the recipe and tap "Cooking Mode". The app keeps the screen on, shows one step at a time, and lets you tap to go to the next.' },
    ],
  },
  {
    slug: 'use-yummly-recipe-app',
    title: 'How to Use Yummly for Recipes',
    excerpt: 'Get free recipes based on what you have in the fridge, your diet, and what you like to eat with the Yummly app.',
    category: 'app-guides',
    tags: ['Yummly', 'recipes', 'cooking', 'meal ideas'],
    readTime: '6 min',
    thumbnailEmoji: '🍳',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Yummly is a free recipe app with millions of recipes collected from top cooking websites. It suggests recipes based on what you tell it you like and what diet you follow, so you spend less time scrolling.

You can also search by ingredient — type in what you already have and it will show dinners you can make tonight without a grocery run.`,
    steps: [
      { title: 'Download Yummly', content: 'Install the Yummly app from the App Store or Play Store. Open it and tap Sign Up to create a free account with your email.' },
      { title: 'Set your food preferences', content: 'Yummly asks what diet you follow (none, vegetarian, keto, gluten-free, etc.), your allergies, and what cuisines you like. It uses this to filter suggestions so you never see a recipe you cannot eat.' },
      { title: 'Search by ingredient', content: 'Tap the search bar and type ingredients you have, like "chicken tomatoes pasta". Yummly will show recipes that use those ingredients.' },
      { title: 'Save recipes you like', content: 'Tap the bookmark icon on any recipe to save it to your collection. Create folders like "To Try" or "Family Favorites" to keep them organized.' },
      { title: 'Use the shopping list feature', content: 'When you pick a recipe to cook, tap "Add to Shopping List". Yummly combines ingredients from all the recipes into one grocery list you can take to the store on your phone.' },
    ],
  },
  {
    slug: 'use-allrecipes-website',
    title: 'How to Use AllRecipes for Finding Recipes',
    excerpt: 'Search AllRecipes — the largest free recipe site online — and use real reviews from home cooks to pick winners.',
    category: 'app-guides',
    tags: ['AllRecipes', 'recipes', 'free', 'cooking'],
    readTime: '6 min',
    thumbnailEmoji: '📖',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `AllRecipes has been around since 1997 and is the biggest free recipe site on the internet. Every recipe is posted by home cooks and reviewed by other home cooks, so you see what really works in real kitchens.

The best feature is the ratings. Sort any search by rating and you can trust that recipes with 4.5 stars and hundreds of reviews are going to turn out well.`,
    steps: [
      { title: 'Go to allrecipes.com', content: 'Open your browser and go to allrecipes.com. You do not need to sign up to browse — but creating a free account lets you save favorites.' },
      { title: 'Search for what you want to cook', content: 'Type a dish name or ingredient in the search bar at the top, like "banana bread" or "beef stew". Hit Enter to see results.' },
      { title: 'Sort by highest rated', content: 'On the results page, click the Sort menu and pick "Rating". This puts the best-reviewed recipes at the top. Avoid recipes with less than 50 reviews — they may not be tested enough.' },
      { title: 'Read the reviews', content: 'Click a recipe and scroll to the reviews at the bottom. Reviewers often share small changes that improve the recipe — like more garlic, less sugar, or a longer cook time.' },
      { title: 'Save your favorites', content: 'Click the heart icon on any recipe to save it. Or use the print icon to print a clean version without ads. You can also email the recipe to yourself to pull up on your phone while cooking.' },
    ],
  },
  {
    slug: 'use-smart-kitchen-timer',
    title: 'How to Use Smart Kitchen Timers and Alexa for Cooking',
    excerpt: 'Use Alexa, Google Home, or Siri to set kitchen timers with your voice while your hands are full cooking.',
    category: 'smart-home',
    tags: ['Alexa', 'Google Home', 'Siri', 'timer', 'cooking'],
    readTime: '6 min',
    thumbnailEmoji: '⏲️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Smart speakers like Amazon Echo, Google Nest, and Apple HomePod are perfect for the kitchen. You can set multiple timers, convert cups to tablespoons, and ask cooking questions without touching your phone with wet hands.

All three assistants can run several timers at once and name them — "Oven timer 20 minutes", "Pasta 8 minutes", "Garlic 2 minutes". They will tell you which one is ringing.`,
    steps: [
      { title: 'Set a basic timer', content: 'Say "Alexa, set a timer for 10 minutes" or "Hey Google, set a timer for 10 minutes" or "Hey Siri, 10-minute timer". The speaker confirms and starts counting down.' },
      { title: 'Name timers to run several at once', content: 'Say "Alexa, set a pasta timer for 8 minutes" and "Alexa, set a garlic timer for 2 minutes". When one goes off, the speaker tells you which name is ringing so you know exactly which pot to check.' },
      { title: 'Ask for conversions', content: 'Say "Alexa, how many tablespoons in a cup?" or "Hey Google, convert 200 grams to ounces". The speaker gives you the answer out loud — handy when you are reading a European recipe.' },
      { title: 'Ask cooking questions', content: `Say things like "Alexa, what temperature should I cook chicken?" or "Hey Google, what's a substitute for buttermilk?". The assistants pull answers from the web and read them aloud.` },
      { title: 'Check time left on a timer', content: 'Say "Alexa, how much time is left on my pasta timer?" to hear the countdown without looking at anything. Say "Cancel pasta timer" if you want to stop it early.' },
    ],
  },

  // ── BUDGETING & FINANCE APPS ────────────────────────────────────────────────
  {
    slug: 'use-monarch-budgeting',
    title: 'How to Use Monarch Money for Budgeting',
    excerpt: 'Track spending and build a budget with Monarch Money, the most popular replacement for the now-shut-down Mint app.',
    category: 'financial-tech',
    tags: ['Monarch', 'budgeting', 'personal finance', 'Mint replacement'],
    readTime: '8 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Monarch Money is a budgeting app that connects to your bank accounts, credit cards, and investments to show all your money in one place. It became popular after Intuit shut down Mint in 2024.

Monarch costs $15 a month, or $100 a year if paid upfront. It has no ads, unlike free budgeting apps, and the interface is clean and straightforward to use.`,
    steps: [
      { title: 'Sign up at monarchmoney.com', content: 'Go to monarchmoney.com in your browser and click "Get Started". Sign up with your email, create a password, and start the free trial (7 days).' },
      { title: 'Connect your accounts', content: 'Click "Add Account" and search for your bank by name. Sign in with your online-banking username and password. Repeat for credit cards, loans, and investment accounts.' },
      { title: 'Categorize past transactions', content: 'Monarch pulls in the last 90 days of transactions and tries to categorize them (Groceries, Dining, Utilities). Click any transaction to fix the category if it is wrong. The app learns from your corrections.' },
      { title: 'Set your monthly budget', content: 'Click Budget in the menu. Monarch suggests amounts for each category based on your past spending. Adjust each one to what you actually want to spend this month.' },
      { title: 'Check the app weekly', content: 'Download the Monarch app on your phone. Open it once a week to review spending, catch any strange charges, and see how close you are to your budget for the month.' },
    ],
  },
  {
    slug: 'use-ynab-you-need-budget',
    title: 'How to Use YNAB (You Need A Budget)',
    excerpt: 'Use YNAB to give every dollar a job and stop living paycheck to paycheck using the famous zero-based budgeting method.',
    category: 'financial-tech',
    tags: ['YNAB', 'budgeting', 'personal finance', 'zero based'],
    readTime: '9 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `YNAB (short for You Need A Budget) is a budgeting app built around a method where every dollar you have is assigned a job — rent, groceries, savings, etc. — before you spend it. People who stick with it for 3 months often save thousands.

YNAB costs $109 a year or $15 a month, with a 34-day free trial. It is more hands-on than Monarch — you enter or approve every transaction — but that is what makes it work.`,
    steps: [
      { title: 'Start the free trial at ynab.com', content: 'Go to youneedabudget.com (or ynab.com) in your browser. Click "Try it Free" and sign up with your email. You get 34 days free with no payment card required.' },
      { title: 'Connect your bank accounts', content: 'Click Add Account and search for your bank. Enter your online-banking login so YNAB can pull in transactions. Repeat for credit cards and savings.' },
      { title: 'Give every dollar a job', content: 'Click Budget. YNAB shows your available money at the top and asks you to assign every dollar to a category — Rent, Groceries, Gas, Savings, etc. When the "Ready to Assign" number hits zero, your budget is complete.' },
      { title: 'Record transactions as you spend', content: 'Each time you buy something, YNAB pulls it from your bank, but you can also add it manually. Check the category is right and tap Approve. Watching the category total shrink keeps you on track.' },
      { title: 'Roll with the punches', content: 'If you overspend one category (like Groceries), move money from another category (like Dining) to cover it. This is normal — the point is to stay real, not perfect.' },
    ],
  },
  {
    slug: 'use-rocket-money-cancel-subscriptions',
    title: 'How to Use Rocket Money to Cancel Subscriptions',
    excerpt: 'Use Rocket Money to find every subscription you pay for and cancel the ones you do not need with a single tap.',
    category: 'financial-tech',
    tags: ['Rocket Money', 'subscriptions', 'cancel', 'savings'],
    readTime: '6 min',
    thumbnailEmoji: '🚀',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Rocket Money (previously called Truebill) scans your bank and credit card statements for recurring charges. It shows all your subscriptions in one list, even ones you forgot about — a common source of wasted money.

The basic subscription-finder is free. Rocket Money also offers paid features (starting at $6 a month) that will actually negotiate lower bills or cancel subscriptions on your behalf.`,
    steps: [
      { title: 'Install Rocket Money', content: 'Download the Rocket Money app from the App Store or Play Store. Open it and sign up with your email.' },
      { title: 'Connect your bank and credit cards', content: 'Tap Add Account and log in with your online banking credentials. Rocket Money scans the last few months of transactions to find anything that charges you on a regular schedule.' },
      { title: 'Review the subscriptions list', content: 'Tap "Subscriptions" in the menu. You will see a list of every recurring charge — streaming services, gyms, apps, insurance, etc. Most people find at least one subscription they forgot about.' },
      { title: 'Cancel what you do not need', content: 'Tap any subscription you want to cancel. For most, Rocket Money can cancel for you if you upgrade to Premium (about $6-12 a month). Or you can cancel yourself by tapping the contact info shown.' },
      { title: 'Set up a monthly review', content: 'Open the app once a month to see if any new charges have sneaked in. Services often raise prices quietly, so this habit catches increases before they add up.' },
    ],
  },
  {
    slug: 'track-investments-fidelity-app',
    title: 'How to Track Your Investments with the Fidelity App',
    excerpt: 'Check your 401(k), IRA, and brokerage balances and watch your investments grow with the free Fidelity mobile app.',
    category: 'financial-tech',
    tags: ['Fidelity', 'investments', '401k', 'IRA', 'stocks'],
    readTime: '7 min',
    thumbnailEmoji: '📈',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `If you have a 401(k), IRA, or brokerage account at Fidelity, their free mobile app lets you check balances, see how your investments are doing, move money between accounts, and deposit checks.

The app is simple enough to use daily. Resist the urge to check too often with stock accounts — weekly or monthly is plenty for most people.`,
    steps: [
      { title: 'Download the Fidelity app', content: 'Install the Fidelity Investments app from the App Store or Play Store. Open it and tap "Log In".' },
      { title: 'Sign in with your username', content: 'Type your Fidelity username and password. If you do not have an account yet, tap "Open an Account" to start the signup on your phone (takes about 10 minutes).' },
      { title: 'Turn on Face ID or Touch ID', content: 'The app will ask if you want to use Face ID (iPhone) or a fingerprint (Android) for future logins. Tap Yes — this is faster and still secure.' },
      { title: 'Check your balances', content: 'The home screen shows every Fidelity account you have — 401(k), IRA, taxable brokerage, checking. Tap any account to see its balance, recent trades, and how it changed today.' },
      { title: 'Deposit checks or transfer money', content: 'Tap the "Deposit" icon to take photos of a check and deposit it instantly. Tap "Transfer" to move money between your Fidelity accounts, or from your bank to Fidelity.' },
    ],
  },

  // ── TASK & PRODUCTIVITY APPS ────────────────────────────────────────────────
  {
    slug: 'use-apple-reminders-effectively',
    title: 'How to Use Apple Reminders Like a Pro',
    excerpt: 'Get more out of the free Apple Reminders app with lists, due dates, location alerts, and sharing with family.',
    category: 'tips-tricks',
    tags: ['Apple Reminders', 'tasks', 'iPhone', 'productivity'],
    readTime: '7 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Apple Reminders comes free on every iPhone, iPad, and Mac. It can do much more than simple to-do lists — reminders can go off at a specific time, when you arrive at a place, or when you leave.

You can also share lists with family members, so everyone can add to a grocery list or see the same weekend to-do list.`,
    steps: [
      { title: 'Open Reminders and make a new list', content: 'Tap the Reminders app icon on your iPhone. Tap "Add List" at the bottom, name it (like Groceries or Weekend), pick a color and icon, and tap Done.' },
      { title: 'Add a reminder with a due date', content: 'Tap New Reminder at the bottom. Type what you need to do. Tap the small "i" icon next to the item and turn on "Date" to set when you want the reminder to pop up.' },
      { title: 'Add a location-based reminder', content: 'Tap the "i" icon again and turn on "Location". Pick a place like Home, Work, or a specific store. The reminder will appear on your phone when you arrive or leave that spot.' },
      { title: 'Share a list with family', content: 'In the list, tap the icon at the top right that looks like a person with a plus sign. Send an invite to family members — once they accept, everyone can add and check off items.' },
      { title: 'Use Siri to add reminders hands-free', content: 'Say "Hey Siri, remind me to call Mom at 7 PM" or "Remind me to buy milk when I get to the store". Siri will add the reminder with the right time or place, no typing needed.' },
    ],
  },
  {
    slug: 'use-google-keep-notes',
    title: 'How to Use Google Keep for Notes and Lists',
    excerpt: 'Use Google Keep, a free note app, to write notes, make checklists, and save photos that sync across all your devices.',
    category: 'tips-tricks',
    tags: ['Google Keep', 'notes', 'lists', 'productivity'],
    readTime: '6 min',
    thumbnailEmoji: '🗒️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google Keep is a free note-taking app that works on any phone, tablet, or computer. Notes sync instantly between your devices, so you can start a grocery list on your phone and see it on your laptop when you sit down to plan meals.

Notes can be plain text, checklists, photos, or even voice recordings that Google transcribes to text automatically.`,
    steps: [
      { title: 'Install Google Keep', content: 'Download the Google Keep app from the App Store or Play Store. Or go to keep.google.com in any browser. Sign in with your Google (Gmail) account.' },
      { title: 'Create a note', content: 'Tap "Take a note" at the bottom. Type a title and your note content, then tap the back arrow. The note saves automatically.' },
      { title: 'Make a checklist', content: 'Tap the plus sign at the bottom and pick "New list". Type each item on a separate line. Tap a box to check off items as you go — great for groceries or to-dos.' },
      { title: 'Add labels to stay organized', content: 'Open any note, tap the three-dot menu, and pick "Labels". Create labels like Work, Personal, or Recipes. Then filter your notes by label from the main screen.' },
      { title: 'Set reminders on notes', content: 'Open a note and tap the bell icon at the top. Pick a time or place to be reminded. The note will pop up on your phone when the time comes or when you get to that location.' },
    ],
  },
  {
    slug: 'use-todoist-task-management',
    title: 'How to Use Todoist for Task Management',
    excerpt: 'Keep all your to-dos organized across work and life with Todoist — a powerful free task app used by millions.',
    category: 'app-guides',
    tags: ['Todoist', 'tasks', 'productivity', 'GTD'],
    readTime: '7 min',
    thumbnailEmoji: '✅',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Todoist is a task-management app that is more powerful than basic reminders but still easy for beginners. You can sort tasks by project, set due dates using plain language, and get a clear daily view of what to do.

The free version works well for most people. Todoist Pro ($4 a month) adds things like reminders and file attachments.`,
    steps: [
      { title: 'Sign up for Todoist', content: 'Go to todoist.com in a browser or download the app from the App Store or Play Store. Sign up with your email or with your Google account.' },
      { title: 'Add your first task', content: 'Click "Add Task" or tap the plus sign. Type the task name and a due date. You can write the date in plain language, like "Buy flowers tomorrow at 5pm", and Todoist understands.' },
      { title: 'Create projects', content: 'On the left side, click "Add Project" to create categories like Work, Home, Shopping. Drag tasks into the right project so everything stays organized.' },
      { title: 'Use the Today view', content: 'Click "Today" in the menu to see only tasks due today across all projects. This is the single most useful view — start each morning here.' },
      { title: 'Turn on email reminders', content: 'On the web version, click Settings and turn on email reminders for tasks with due dates. You will get an email an hour before each one — extra insurance that you will not forget.' },
    ],
  },
  {
    slug: 'use-grocery-list-apps',
    title: 'How to Use AnyList for Your Grocery List',
    excerpt: 'Share a smart grocery list with your partner or family so everyone can add items from their own phone.',
    category: 'app-guides',
    tags: ['AnyList', 'grocery', 'shopping', 'lists', 'family'],
    readTime: '6 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `AnyList is a free grocery list app that works great for couples and families. You share one list, and anyone can add items from their phone — so when your spouse finishes the last of the milk, they can add it right away.

The app sorts items into aisles automatically, so you shop in an efficient order instead of wandering back and forth. It also saves your favorite items for quick re-adding.`,
    steps: [
      { title: 'Install AnyList', content: 'Download AnyList from the App Store or Play Store. Open it and sign up with your email.' },
      { title: 'Create your grocery list', content: 'Tap the plus sign to start adding items. Type a food name — AnyList auto-suggests the item and puts it in the right aisle category (Produce, Dairy, etc.).' },
      { title: 'Share with family', content: `Tap the list name at the top and tap "Sharing". Type a family member's email — they get an invite. Once they accept, everyone sees the same list in real time.` },
      { title: 'Check items off as you shop', content: 'When you get to the store, open the list. Tap each item as you put it in your cart to cross it off. The checked items disappear so you can see what is left.' },
      { title: 'Save recipes and save favorite items', content: 'AnyList also has a recipe feature. Paste a recipe link, and the app pulls out the ingredients so you can add them all to your shopping list with one tap.' },
    ],
  },
];
