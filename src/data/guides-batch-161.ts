// TekSure Guides Batch 161 — 4 guides covering: canceling free trials before
// getting charged; checking if a website is safe before buying; downloading
// music/podcasts for offline listening; and using Find My to locate a lost
// iPhone.
import type { Guide } from './guides';

export const guidesBatch161: Guide[] = [
  {
    slug: 'how-to-cancel-a-free-trial-before-getting-charged-2026',
    title: 'How to Cancel a Free Trial Before Getting Charged',
    excerpt:
      'Set a calendar reminder the day you sign up, then follow these steps to cancel Netflix, Hulu, Amazon Prime, Apple, and Disney+ before your card is billed.',
    category: 'tips-tricks',
    tags: [
      'free trial',
      'cancel subscription',
      'Netflix cancel',
      'Hulu cancel',
      'Amazon Prime cancel',
      'Apple subscriptions',
      'Disney Plus cancel',
      'avoid charges',
      'virtual card',
      'Privacy.com',
      'subscription management',
    ],
    readTime: '10 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Free trials are a great way to test a streaming service, software program, or membership before deciding to pay. The catch is that most free trials automatically charge your credit card the moment the trial period ends — sometimes within hours of the deadline. Many people have been surprised by a charge they never expected because the cancellation deadline slipped past them.

This guide gives you a clear system for signing up for free trials without getting caught off guard, and walks you through canceling the most popular services step by step.

---

**The number-one rule: set a reminder the same day you sign up**

The single most effective protection against unwanted charges is to set a calendar reminder for two days before your trial ends — on the very day you sign up. Do not wait. Two days gives you a comfortable window to cancel without rushing.

Here is how to set the reminder:

- **iPhone:** Open the Calendar app → tap the "+" button in the top right corner → type "Cancel [service name] trial" → set the date to two days before the trial ends → tap "Add."
- **Android:** Open the Google Calendar app → tap the "+" button → tap "Event" → type the reminder name → set the date and tap "Save."
- **Paper:** Write the cancellation date on a sticky note and put it where you will see it — on your refrigerator, desk, or bathroom mirror.

---

**How to find all your active subscriptions**

Before canceling anything, it helps to see what you are currently signed up for. Here is where to look on each platform:

**iPhone:**
Open the Settings app → tap your name at the top → tap "Subscriptions." You will see a list of every subscription tied to your Apple ID, including their renewal dates and prices.

**Android (Google Play):**
Open the Google Play Store app → tap your profile photo in the top right corner → tap "Payments & subscriptions" → tap "Subscriptions." Every subscription purchased through Google Play appears here.

**Amazon:**
Go to Amazon.com → tap "Account & Lists" (top right) → tap "Memberships & Subscriptions." You will see Amazon Prime and any other services you subscribed to through Amazon.

---

**Step-by-step cancellation for the most popular services**

**Netflix**

1. Open a web browser and go to netflix.com. Sign in if prompted.
2. Click or tap your profile icon in the top right corner.
3. Click "Account."
4. Scroll down to the "Membership" section.
5. Click "Cancel Membership."
6. Click "Finish Cancellation" to confirm.

You will keep access until the billing date. Netflix sends a confirmation email — save it.

**Hulu**

1. Go to hulu.com and sign in.
2. Click your profile name in the top right corner → click "Account."
3. Scroll down to "Your Subscription."
4. Click "Cancel" next to your plan.
5. Follow the prompts to confirm cancellation.

**Amazon Prime**

1. Go to amazon.com and sign in.
2. Click "Account & Lists" → "Prime Membership."
3. Click "Manage Membership" (or "Update, cancel and more").
4. Click "End Membership."
5. Amazon will ask you to choose "End Now" or "End on [date]" — choose whichever fits your needs and confirm.

**Apple (iPhone/iPad)**

1. Open the Settings app.
2. Tap your name at the top.
3. Tap "Subscriptions."
4. Tap the service you want to cancel.
5. Scroll down and tap "Cancel Subscription."
6. Tap "Confirm."

**Disney+**

1. Go to disneyplus.com and sign in.
2. Tap your profile icon → "Account."
3. Under "Subscription," tap "Cancel Subscription."
4. Follow the prompts to confirm.

---

**Warning: timing matters**

Some companies charge you if you cancel even one hour after the renewal moment. If your trial ends at midnight and you cancel at 12:01 AM, you may owe for a full month. This is why canceling two days early is so important — it removes all doubt.

If a charge does appear on your bank statement within three days of the trial end date, call your bank right away and ask about disputing the charge. Most banks will work with you if this is the first time.

---

**Using a virtual card number for trials you are unsure about**

A free service called Privacy.com (privacy.com) lets you create a temporary virtual credit card number. You give that number to the trial service instead of your real card. If the trial tries to charge you, the virtual card can be set to block the charge. This is a reliable way to protect yourself when you are not sure whether you will remember to cancel.

To get started: go to privacy.com, create a free account, link your bank account, and create a new virtual card for each trial you sign up for.`,
    steps: [
      {
        title: 'Set a calendar reminder immediately when you sign up',
        content:
          'The moment you start a free trial, open your phone\'s calendar and create an event titled "Cancel [service name] trial" for two days before the trial ends. This gives you enough time to cancel without rushing.',
        tip: 'Set the reminder to send you a notification the morning of that day so it does not slip by.',
      },
      {
        title: 'Find all your active subscriptions',
        content:
          'On iPhone: go to Settings → your name → Subscriptions. On Android: open Google Play → tap your profile photo → Payments & subscriptions → Subscriptions. On Amazon: go to Account & Lists → Memberships & Subscriptions.',
        tip: 'Take a screenshot of your subscriptions list and save it somewhere easy to find.',
      },
      {
        title: 'Cancel Netflix, Hulu, or Disney+ through the website',
        content:
          'Sign in to the service\'s website on your computer or phone browser. Go to Account settings and look for a "Cancel" or "Cancel Membership" option. Confirm the cancellation and save the confirmation email.',
        warning:
          'Canceling through the app does not always work on Android — use the website for the most reliable results.',
      },
      {
        title: 'Cancel Amazon Prime through your Amazon account',
        content:
          'Go to amazon.com → Account & Lists → Prime Membership → Manage Membership → End Membership. Amazon gives you the option to end immediately or at the end of the billing period.',
      },
      {
        title: 'Cancel Apple subscriptions in Settings',
        content:
          'On your iPhone: Settings → tap your name → Subscriptions → tap the service → Cancel Subscription → Confirm. This works for any app or service you subscribed to through Apple.',
        tip: 'Apple sends a confirmation email immediately. If you do not receive one within a few minutes, check your spam folder and make sure the cancellation went through.',
      },
      {
        title: 'Use a virtual card for trials you are unsure about',
        content:
          'Visit privacy.com on your computer and create a free account. Link your bank account and generate a one-time virtual card number. Use that number when signing up for trials — it can block automatic charges if you forget to cancel.',
        tip: 'You can set a spending limit on Privacy.com virtual cards — for example, limit it to $0 so it cannot be charged at all.',
      },
      {
        title: 'Check your bank statement after the trial ends',
        content:
          'Within three days of the trial end date, log in to your bank account or credit card app and look for any new charges from the service. If you see an unexpected charge, call your bank right away and ask about disputing it.',
        warning:
          'Act quickly — most banks require you to dispute charges within 60 days, but the sooner you call, the better your chances of getting a refund.',
      },
    ],
  },

  {
    slug: 'how-to-check-if-a-website-is-safe-before-buying-2026',
    title: 'How to Check If a Website Is Safe Before You Buy',
    excerpt:
      'Five things to look for — the HTTPS padlock, the correct domain name, real contact info, customer reviews, and Google Safe Browsing — before entering your card number.',
    category: 'safety-guides',
    tags: [
      'website safety',
      'online shopping safety',
      'HTTPS padlock',
      'phishing websites',
      'BBB reviews',
      'Google Safe Browsing',
      'scam websites',
      'online fraud',
      'credit card safety',
      'domain verification',
      'internet safety',
    ],
    readTime: '11 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Online shopping is convenient, but not every website that looks real actually is. Scammers build fake websites that look almost identical to real stores — they copy logos, product photos, and even customer reviews. Once you enter your credit card number, the money disappears and no product ever arrives.

The good news is that there are five reliable checks you can do in about two minutes before purchasing anything online. None of them require technical knowledge. This guide walks you through each one.

---

**Check 1: Look for HTTPS and the padlock icon**

When you are on a website where you might enter a credit card number, look at the top of your browser at the address bar — the long bar that shows the website's address.

A safe website address starts with **https://** (with an "s" at the end). You may also see a small padlock icon to the left of the address. Both of these mean the website is using encryption to protect the information you send — like your credit card number.

An unsafe website starts with just **http://** (no "s"). Never enter a credit card number on a site that starts with http:// only.

**How to check:**
- On a computer: look at the address bar near the top of your browser window.
- On a phone: tap the address bar to see the full address. On many phones, a padlock icon appears directly to the left of the address.

One important note: HTTPS alone does not mean a website is honest — it means your connection to it is private. A scam site can have HTTPS too. That is why you need all five checks together.

---

**Check 2: Make sure the domain name is spelled correctly**

Scammers buy website addresses that look almost like the real thing but with one small difference:

- amaz**0**n.com (zero instead of the letter O)
- paypa**I**.com (capital I instead of lowercase L)
- **faceb00k**.com (zeros instead of O's)
- **apple-support-help**.com (extra words added)

Before buying anything, read the website address letter by letter. The correct address for a well-known store should be simple and exact — amazon.com, walmart.com, target.com. If the address has extra words, numbers replacing letters, or hyphens where there should not be any, close the tab and go directly to the real store's website by typing it yourself.

---

**Check 3: Look for real contact information and a return policy**

A real business has a physical address, a working phone number, and a clear return or refund policy. These should be easy to find on the website — usually in the footer at the bottom of the page or on an "About Us" or "Contact" page.

What to look for:
- A physical street address (not a P.O. Box only)
- A phone number you could actually call
- An email address that matches the business name (not a Gmail or Yahoo address)
- A return policy that explains exactly how returns work

If a website has no contact information at all, or the "About Us" page is completely blank, do not buy from it.

---

**Check 4: Search for reviews on Google and the BBB**

Before buying from a website you have never used before, spend two minutes searching for what other customers say.

**Google search:**
In the Google search bar, type the website name followed by the word "reviews" — for example: "buynowelectronics.com reviews"

Also try: "[website name] scam" and "[website name] complaints"

If multiple people report never receiving their orders, or describe charges appearing with no product shipped, that is a strong warning sign.

**Better Business Bureau (BBB):**
Go to bbb.org and type the business name or website address in the search bar. The BBB tracks customer complaints and assigns letter grades (A+ through F) to businesses. A long list of unresolved complaints is a serious red flag.

---

**Check 5: Use Google Safe Browsing to check a suspicious link**

Google maintains a constantly updated list of websites that are known to be dangerous — hosting malware, running phishing scams, or engaging in fraud. You can check any website address against this list for free.

**How to use it:**
1. Open a new browser tab.
2. Go to: google.com/transparencyreport/safebrowsing/
3. Click the "Check site status" section.
4. Paste or type the website address you want to check.
5. Click the search icon (magnifying glass).
6. Google will tell you whether the site is currently flagged as dangerous.

This is especially useful when you receive a link in an email or text message and you are not sure whether to click it.

---

**Red flags that mean "do not buy here"**

Even if a website passes some of the checks above, walk away if you see any of these:
- Prices that are far too good to be true (a $1,200 laptop for $89)
- No HTTPS at all
- No contact information anywhere on the site
- Checkout asks for your Social Security number (no store ever needs this)
- Payment is only accepted by gift cards, wire transfer, Zelle, or cryptocurrency
- Spelling errors and poor grammar throughout the site
- Photos that look like stock images with no real product details

---

**If you have already bought from a suspicious site**

If you completed a purchase and now have doubts, act right away:

1. Call your credit or debit card company immediately — the number is on the back of the card. Tell them you may have made a purchase from a fraudulent website and ask about disputing the charge.
2. Watch your bank statements closely for the next 30 days for any charges you did not make.
3. If you used a debit card, consider asking your bank to issue a new card number.
4. Report the site to the FTC at reportfraud.ftc.gov — this helps protect other people.`,
    steps: [
      {
        title: 'Check for HTTPS and the padlock in your browser',
        content:
          'Look at the website address in your browser bar before entering any payment information. A safe website address starts with "https://" — note the "s." You may also see a small padlock icon to the left of the address. If the address starts with only "http://" (no "s"), do not enter your card number.',
        warning:
          'HTTPS means your connection is private, but it does not guarantee the business is honest. Always complete all five checks.',
      },
      {
        title: 'Read the domain name letter by letter for misspellings',
        content:
          'Look carefully at the website address. Scammers use addresses like "amaz0n.com" (zero instead of O) or "apple-support-help.com" (extra words). The correct addresses for major stores are short and simple — amazon.com, walmart.com, target.com. If anything looks off, close the tab and type the correct address yourself.',
        tip: 'When in doubt, search for the store name in Google and click the result rather than following a link from an email or text.',
      },
      {
        title: 'Find the "Contact" or "About Us" page and confirm real contact details',
        content:
          'Scroll to the bottom of the website and look for a "Contact Us" or "About Us" link. A real business lists a physical address, a phone number, and a return policy. If none of these exist — or the page is blank — do not buy.',
        warning:
          'An email address at Gmail or Yahoo (rather than the business\'s own domain) is a red flag for a personal or scam operation.',
      },
      {
        title: 'Search for reviews on Google and check the BBB',
        content:
          'In Google, search for "[website name] reviews" and "[website name] scam." Also visit bbb.org and search for the business. Look at customer ratings, the number of unresolved complaints, and how long the business has been listed.',
        tip: 'If the business has zero reviews anywhere online, that itself is a warning sign for a new or fake site.',
      },
      {
        title: 'Check the site with Google Safe Browsing',
        content:
          'Go to google.com/transparencyreport/safebrowsing/ in your browser. Paste the website address into the "Check site status" box and click the search button. Google will report whether the site is currently flagged as dangerous.',
      },
      {
        title: 'Walk away if red flags appear',
        content:
          'Prices that seem impossibly low, no contact information, requests for your Social Security number, and payment only by gift card or wire transfer are all signs of a scam. Close the browser tab and find a trusted retailer instead.',
        warning:
          'No legitimate store will ever ask for your Social Security number at checkout.',
      },
      {
        title: 'Act immediately if you suspect you bought from a fraudulent site',
        content:
          'Call the number on the back of your credit or debit card right away and tell them you may have been defrauded. Ask about disputing the charge. Report the site to the FTC at reportfraud.ftc.gov to protect others.',
        tip: 'Credit cards offer stronger fraud protection than debit cards. If you shop online often, consider using a credit card (paid in full each month) rather than a debit card for purchases.',
      },
    ],
  },

  {
    slug: 'how-to-download-music-to-listen-without-wifi-2026',
    title: 'How to Download Music and Podcasts to Listen Without Wi-Fi',
    excerpt:
      'Save songs, podcasts, and audiobooks directly to your phone so you can listen on road trips, airplanes, or anywhere you do not have an internet connection.',
    category: 'entertainment',
    tags: [
      'offline music',
      'download Spotify',
      'Apple Music download',
      'Amazon Music offline',
      'podcast download',
      'offline listening',
      'no wifi music',
      'Spotify Premium',
      'YouTube Music',
      'airplane mode music',
      'road trip music',
    ],
    readTime: '10 min',
    thumbnailEmoji: '🎵',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Streaming music and podcasts is great when you have a strong Wi-Fi or cellular connection. But when you are on a long car trip, flying on an airplane, visiting a place with poor signal, or trying to avoid using up your cellular data, streaming can cut out or stop entirely.

The solution is to download your favorite music, podcasts, or audiobooks directly to your phone before you leave home — while you are connected to Wi-Fi. Once downloaded, the audio is stored on your phone itself and plays perfectly even when you have no internet connection at all.

This guide walks you through downloading on Spotify, Apple Music, Amazon Music, and the free Podcasts app.

---

**A quick note about which services allow downloading**

Not every music service lets you download for offline listening on a free account. Here is a summary before you start:

| Service | Download available? | Cost |
|---|---|---|
| Spotify (music) | Premium subscribers only | ~$11/month |
| Apple Music | Subscribers only | ~$11/month |
| Amazon Music | Prime members get limited selection; Unlimited subscribers get full catalog | Included with Prime (limited) or ~$9/month |
| Spotify Podcasts | Free — no subscription needed | Free |
| iPhone Podcasts app | Free — no subscription needed | Free |
| YouTube Music | Premium subscribers only | ~$11/month |

If you do not have a paid music subscription, the Podcasts section of this guide is completely free.

---

**Spotify (music downloads — Premium required)**

If you have a Spotify Premium subscription, you can download any playlist or album to your phone.

**To download a playlist or album:**
1. Open the Spotify app on your phone.
2. Find a playlist or album you want to save.
3. Tap the three dots (the "more" button) next to the playlist or album title.
4. Tap "Download."
5. A small arrow or download icon will appear next to the playlist title when the download is complete.

**To download a specific song:**
1. Open the song's album or playlist.
2. Tap and hold the song name.
3. Tap "Add to playlist" — add it to a playlist you have already downloaded, and it will download too.

**To check how much storage your downloads are using:**
1. Tap the gear icon (Settings) in the top right of the Spotify app.
2. Scroll down to "Storage."
3. You can see how much space downloads are taking up, and clear the cache if needed.

**Quick Tip:** Before a long trip, download your playlists at home on Wi-Fi. Downloading over cellular data uses a large amount of your monthly data allowance.

---

**Apple Music (subscription required)**

Apple Music is built into every iPhone. If you subscribe, you can download any song in the Apple Music catalog.

**To download a song:**
1. Find a song in the Apple Music app.
2. Tap the three dots next to the song.
3. Tap "Add to Library." The song is added to your library.
4. Now look for a small cloud icon with a downward arrow next to the song in your library. Tap it to download the song to your phone.
5. When the download is complete, the cloud icon disappears and the song has a small phone icon instead.

**To download an entire album:**
1. Open the album in Apple Music.
2. Tap the three dots at the top.
3. Tap "Add to Library."
4. Then tap the cloud-with-arrow icon at the top of the album page to download all songs.

**To check your downloads:**
Go to the Library tab → tap "Downloaded Music" to see everything stored on your phone.

---

**Amazon Music (Prime and Unlimited)**

If you have Amazon Prime, you have access to a curated selection of songs you can download. Amazon Music Unlimited subscribers have the full catalog.

**To download a song, album, or playlist:**
1. Open the Amazon Music app.
2. Find the album, song, or playlist.
3. Tap the three dots next to it.
4. Tap "Download."
5. A checkmark or download indicator appears when it finishes.

---

**Podcasts — free, no subscription needed**

Podcasts are talk shows, news programs, storytelling series, and interview shows available completely free. Downloading them works on the free Podcasts app on iPhones and through the free version of Spotify.

**iPhone Podcasts app (free):**

1. Open the Podcasts app (purple icon with a microphone).
2. Search for a show you like — for example, "NPR News" or "This American Life."
3. Tap the show to open it.
4. To download a single episode: tap the three dots next to the episode → tap "Download."
5. To automatically download new episodes: tap "Follow" at the top of the show page. Then go to the show's settings (three dots → Settings) and turn on "Download New Episodes."

**Spotify podcasts (free):**

1. Open Spotify (no subscription needed for podcasts).
2. Search for a podcast in the search bar.
3. Tap the show to open it.
4. Tap "Follow" at the top of the page. Spotify will automatically download new episodes when you are connected to Wi-Fi.

---

**How to tell what is already downloaded**

Look for these icons next to songs and episodes:

- **Phone or device icon:** Already downloaded and stored on your phone.
- **Cloud with arrow icon:** Available in your library but not yet downloaded — tap to download.
- **Green download checkmark (Spotify):** Downloaded.

---

**Saving your cellular data**

Downloading content uses a lot of data. Always download at home on Wi-Fi before leaving. In Spotify, go to Settings → scroll to "Data Saver" and turn it on to reduce data use when streaming on cellular. In Apple Music, go to Settings → Music → and turn off "Use Cellular Data" if you want to block streaming on your cellular plan entirely.

---

**Where to find free audiobooks**

If you enjoy audiobooks, check out **Libby** (libbyapp.com) — a free app connected to your local library card. You can borrow audiobooks and ebooks and download them to your phone at no cost.`,
    steps: [
      {
        title: 'Check which service you have and whether downloads are included',
        content:
          'Music downloads require a paid subscription for Spotify, Apple Music, Amazon Music Unlimited, and YouTube Music. Podcasts are free to download on any service. If you are not sure whether you have a paid music subscription, check Settings → your name → Subscriptions (iPhone) or Google Play → Payments & subscriptions (Android).',
        tip: 'If you do not want to pay for a music subscription, focus on the free podcast downloads — there are thousands of shows covering every topic.',
      },
      {
        title: 'Download Spotify playlists or albums (Premium required)',
        content:
          'Open the Spotify app → find a playlist or album → tap the three dots → tap "Download." A download icon appears next to the playlist when all songs are saved. Do this at home on Wi-Fi, not on cellular data.',
        warning:
          'Downloaded songs are only available while your Spotify Premium subscription is active. If you cancel, downloads become unplayable.',
      },
      {
        title: 'Download Apple Music songs to your iPhone',
        content:
          'Open the Apple Music app → find a song or album → tap the three dots → tap "Add to Library." Then tap the cloud-with-downward-arrow icon next to the song or album to download it. The icon disappears when the download is complete.',
        tip: 'To see all your downloaded music in one place, go to Library → Downloaded Music.',
      },
      {
        title: 'Download podcasts for free on iPhone',
        content:
          'Open the Podcasts app (purple microphone icon) → search for a show → tap the episode → tap the three dots → tap "Download." To get new episodes automatically, tap "Follow" on the show page and turn on "Download New Episodes" in the show settings.',
      },
      {
        title: 'Download podcasts for free on Spotify',
        content:
          'Open the Spotify app (no paid subscription needed for podcasts) → search for a podcast → open the show page → tap "Follow." Spotify will download new episodes automatically when your phone is connected to Wi-Fi.',
        tip: 'In Spotify settings, you can choose to only download over Wi-Fi — a good way to protect your cellular data allowance.',
      },
      {
        title: 'Confirm the download by looking for the download icon',
        content:
          'Look for a phone icon, green checkmark, or the disappearance of the cloud icon next to a song or episode. This confirms the content is stored on your phone and will play without an internet connection.',
      },
      {
        title: 'Test playback in Airplane Mode before your trip',
        content:
          'Before a long trip, put your phone in Airplane Mode (swipe down from the top of the screen → tap the airplane icon) and try playing your downloaded content. If it plays, you are all set. If it does not, re-download while connected to Wi-Fi and try again.',
        tip: 'Airplane Mode turns off all wireless connections, which is exactly the condition you will face on a flight. Testing this way confirms everything will work.',
      },
    ],
  },

  {
    slug: 'how-to-use-the-find-my-app-to-locate-a-lost-iphone-2026',
    title: 'How to Use Find My to Locate a Lost iPhone',
    excerpt:
      'Set up Find My before you ever need it, then use iCloud.com or another Apple device to see your iPhone on a map, play a sound, or put it in Lost Mode.',
    category: 'phone-guides',
    tags: [
      'Find My iPhone',
      'lost iPhone',
      'stolen iPhone',
      'iCloud Find My',
      'Find My app',
      'Lost Mode',
      'locate iPhone',
      'iPhone tracking',
      'Apple Find My',
      'icloud.com',
      'iPhone safety',
    ],
    readTime: '12 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Losing a phone is stressful. It might be somewhere in your house — slipped under a cushion or left in a coat pocket — or it could be genuinely missing, left at a restaurant or taken by someone. Apple's built-in Find My feature can help in all of these situations. It shows your iPhone's location on a map, lets you make the phone play a loud sound so you can find it nearby, and can even display a message with a contact number on the screen if someone finds it.

There is one critical requirement: **Find My must be turned on before the phone is lost.** You cannot set it up after the fact. This guide starts by walking you through the setup, then covers what to do if your phone ever goes missing.

---

**Part 1: Set up Find My before you need it**

**Step 1 — Open Settings**

Find the gray gear icon called "Settings" on your iPhone home screen and tap it.

**Step 2 — Tap your name at the top**

At the very top of the Settings screen, you will see your name and Apple ID email address. Tap your name to open your Apple ID account settings.

**Step 3 — Tap "Find My"**

Scroll down and tap "Find My." This opens the Find My settings.

**Step 4 — Tap "Find My iPhone"**

Tap the option labeled "Find My iPhone" to open its settings.

**Step 5 — Turn on three things**

Make sure all three of these switches are green (turned on):

1. **Find My iPhone** — the main switch that allows your iPhone to be located.
2. **Find My network** — allows your iPhone to be located even when it is not connected to Wi-Fi or cellular (it uses Bluetooth signals from nearby Apple devices to report its location).
3. **Send Last Location** — automatically sends your iPhone's last known location to Apple when the battery is very low. This means you get one final location update even if the battery dies completely before you find it.

That is all the setup required. Once these are on, they stay on unless you manually turn them off.

---

**Part 2: What to do when your iPhone is missing**

**Option A — Use the Find My app on another Apple device**

If you have another iPhone, iPad, or Mac computer nearby, this is the fastest way to find your phone.

1. Open the **Find My** app (it has a green radar-like icon).
2. Tap the **"Devices"** tab at the bottom of the screen.
3. Find your iPhone in the list and tap it.
4. A map appears showing your iPhone's current location or last known location.

**What the dot color means:**
- **Green dot:** Your iPhone is currently online and the location shown is accurate right now.
- **Gray dot:** Your iPhone is offline (battery dead, turned off, or no signal). The location shown is the last place it was seen — which may be hours ago.

**Option B — Use a computer at icloud.com**

You do not need another Apple device. Any computer — even a library computer or a friend's laptop — can be used.

1. Open a web browser and go to **icloud.com**.
2. Sign in with your Apple ID email address and password.
3. Click **"Find My."**
4. Click **"All Devices"** at the top of the screen.
5. Click your iPhone from the list.
6. Your phone's location appears on the map.

---

**Part 3: What you can do once you see the location**

**Play a Sound (phone is nearby)**

If you think the phone is in your home or car, tap **"Play Sound."** The iPhone will make a loud ping sound — even if the phone is on silent — for about two minutes. Follow the sound to find it.

**Mark As Lost (phone is missing outside your home)**

If you believe the phone was left somewhere or someone has it:

1. Tap your iPhone in the Devices list.
2. Tap **"Mark As Lost"** (sometimes called "Activate" under Lost Mode).
3. Enter a phone number where someone can reach you.
4. Add an optional message — for example: "This phone belongs to Margaret. Please call 555-0147."
5. Tap **"Activate."**

What Lost Mode does:
- Locks the phone with a passcode so no one can use it.
- Displays your message and phone number on the screen so a helpful person can contact you.
- Continues tracking the phone's location so you can see if it moves.
- Disables Apple Pay so no one can use your cards.

**Erase This Device (last resort)**

If you are certain the phone has been stolen and will not be recovered, you can erase it remotely:

1. Tap your iPhone in the Devices list.
2. Tap **"Erase This Device."**
3. Confirm by following the on-screen prompts.

**Important warning:** Erasing the device wipes everything on the phone and **removes it from Find My permanently.** After erasing, you can no longer track it. Only choose this option if you are sure you will not get the phone back and you want to make sure no one can access your personal information.

---

**Part 4: What to do if Find My shows no location**

If the map shows "No location found," it means the phone has been off or out of signal range since the last update. Here is what to do:

- Check the timestamp shown under your phone's name — it tells you when the last location was recorded.
- If "Send Last Location" was enabled, you should see where the phone was when the battery got low.
- Wait a few minutes and refresh — if someone turns the phone on and it connects to the internet, the location will update.
- Call your mobile carrier (AT&T, Verizon, T-Mobile, etc.) — they may be able to help you suspend the line to prevent unauthorized calls.
- File a police report if you believe the phone was stolen. You can share the Find My map screenshot with the officer.

---

**Quick Tip: Make sure Find My is on for every family member's phone**

If you help a family member set up their iPhone, take five minutes to turn on Find My for them too. If their phone is ever lost, you will be able to help them find it from your own phone using the Family Sharing feature in the Find My app.`,
    steps: [
      {
        title: 'Turn on Find My iPhone before you ever lose your phone',
        content:
          'Open Settings → tap your name at the top → tap "Find My" → tap "Find My iPhone." Turn on all three switches: "Find My iPhone," "Find My network," and "Send Last Location." All three should be green. This takes less than two minutes and protects you from the moment you are done.',
        warning:
          'Find My cannot be set up after the phone is lost. You must do this now, while you have the phone in your hands.',
      },
      {
        title: 'Open the Find My app on another Apple device to see your phone\'s location',
        content:
          'If your phone is missing, open the Find My app (green radar icon) on a second iPhone, iPad, or Mac. Tap the "Devices" tab. Tap your iPhone in the list. A map appears showing where the phone is or where it was last seen.',
        tip: 'A green dot on the map means the phone is currently online and the location is live. A gray dot means the phone is offline and the location shown is the last place it was detected.',
      },
      {
        title: 'Use icloud.com from any computer if you do not have another Apple device',
        content:
          'Go to icloud.com in any web browser. Sign in with your Apple ID email and password. Click "Find My." Click "All Devices" and select your iPhone. Your phone\'s location appears on the map.',
        tip: 'You can do this from a library computer, a friend\'s laptop, or any device with a browser — you are not limited to Apple products.',
      },
      {
        title: 'Play a sound to find the phone if it is nearby',
        content:
          'In Find My (on another device or icloud.com), tap your iPhone in the Devices list, then tap "Play Sound." Your iPhone will make a loud alert tone — even if it is set to silent — for about two minutes. Follow the sound to find it.',
      },
      {
        title: 'Turn on Lost Mode if the phone is missing outside your home',
        content:
          'Tap your iPhone in the Devices list → tap "Mark As Lost" → enter a phone number where you can be reached → add a short message (example: "Please call 555-0147") → tap "Activate." This locks the phone, shows your message on the screen, disables Apple Pay, and keeps tracking the location.',
        tip: 'Lost Mode does not erase your data. Your photos, contacts, and everything else stay on the phone — they are just locked behind your passcode.',
      },
      {
        title: 'Erase the device only as a last resort',
        content:
          'If you are certain the phone is stolen and will never be recovered, tap "Erase This Device" in Find My and confirm. This removes all personal data from the phone. Be aware that once erased, the phone can no longer be tracked.',
        warning:
          'Erasing is permanent and removes the phone from Find My. Do not erase unless you are completely sure you will not recover the phone.',
      },
      {
        title: 'Contact your carrier and file a report if the phone was stolen',
        content:
          'Call your mobile carrier (AT&T: 800-331-0500, Verizon: 800-922-0204, T-Mobile: 877-746-0909) to report the phone stolen. They can suspend your line to prevent unauthorized calls and charges. If you believe the phone was stolen, file a report with your local police — bring a screenshot of the last known location from Find My.',
        tip: 'Take a screenshot of the Find My map showing your phone\'s last location before you erase the device, so you have a record to share with police if needed.',
      },
    ],
  },
];
