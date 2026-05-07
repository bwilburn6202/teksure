// TekSure Guides Batch 149 — 4 guides covering: organizing your iPhone home screen,
// spotting fake product reviews online, Windows 11 Recall and privacy settings,
// and finding a lost iPhone or Android phone with Find My / Find My Device.
import type { Guide } from './guides';

export const guidesBatch149: Guide[] = [
  {
    slug: 'how-to-organize-your-iphone-home-screen-2026',
    title: 'How to Organize Your iPhone Home Screen',
    excerpt:
      'Move apps, create folders, hide clutter, and keep your most-used apps — Phone, Messages, Camera — within easy reach. Takes about 10 minutes.',
    category: 'phone-guides',
    tags: [
      'iphone',
      'home screen',
      'app folders',
      'app library',
      'dock',
      'widgets',
      'organize apps',
      'seniors',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `The iPhone home screen is the grid of app icons you see every time you unlock your phone. Over time, apps pile up and the ones you actually need can be hard to find. This guide shows you how to bring order to that clutter — moving important apps to easy spots, grouping related apps into folders, and hiding apps you rarely use so they are out of the way but not deleted.

These steps work on iPhones running iOS 16 and newer (most iPhones from 2018 onward). If you are unsure which iOS version you have, go to Settings, tap General, then tap About. The software version number is listed there.

**Why organizing your home screen matters**

When Phone, Messages, and Camera are buried on page three behind twenty other icons, it takes longer to do the things you need most. A tidy home screen means fewer taps, less searching, and less frustration. You are not changing how the phone works — you are rearranging the furniture so the most useful items are closest to hand.

**How to move an app**

Press and hold on any app icon until the icons start to wiggle (jiggle) and small minus signs appear in their corners. Your phone is now in what Apple calls "jiggle mode" or edit mode. In this state, you can drag any icon to a new spot. Press and hold the icon you want to move, then drag it — slowly — to where you want it to go. To move an app to a different page, drag it to the edge of the screen and wait a moment; the next page will appear. When you are done arranging, tap Done in the upper-right corner, or press the side button to exit jiggle mode.

**How to create a folder**

Folders let you group related apps — for example, all your health apps in one folder or all your games in another. To make a folder, enter jiggle mode (press and hold any app), then drag one app directly on top of another app and hold it there for a second. A folder is created automatically, and the phone gives it a suggested name based on the app types. Tap the folder name to rename it to whatever you like — "Health," "Games," "News," or anything that makes sense to you. You can keep adding apps to the folder by dragging them onto it while in jiggle mode. To remove an app from a folder, open the folder, enter jiggle mode, and drag the app back out onto the main home screen.

**How to hide apps you do not use often**

You do not have to delete an app to get it off your home screen. iOS has a feature called App Library — a screen that automatically organizes every app on your phone into categories. You can remove an app from the home screen while keeping it in the App Library. To do this, enter jiggle mode, tap the small minus sign on the app you want to hide, and choose "Remove from Home Screen" (not "Delete App"). The app disappears from your home screen but is still on your phone. To find it later, swipe all the way left past your last home screen page to open App Library, then search or browse the categories.

**How to customize the Dock**

The Dock is the row of four apps at the very bottom of your home screen — it stays visible on every page. By default, Apple puts Phone, Safari, Messages, and Mail there. You can change any of those. Enter jiggle mode, drag an app out of the Dock to free up a slot, then drag any app from the home screen into the Dock. Most people find it helpful to keep Phone, Messages, Camera, and either Maps or a video-calling app (like FaceTime) in the Dock so those four are always one tap away.

**How to add a widget**

Widgets are small tiles that display live information — your current weather, today's calendar events, or battery level — without you having to open an app. To add a widget, press and hold an empty spot on the home screen to enter jiggle mode, then tap the plus sign (+) in the upper-left corner. A widget gallery opens. Tap any app name to see its available widget sizes (small, medium, large). Tap "Add Widget" to place it on your screen, then drag it to where you want it. Weather and Calendar widgets are particularly useful because you can see the day's forecast and upcoming appointments at a glance.

**Suggested layout for easy daily use**

A practical arrangement puts these on your first home screen: Phone, Messages, FaceTime (or your video-calling app of choice), Camera, Photos, Maps, Settings, and Weather. Add a medium-sized Calendar widget at the top so today's appointments are visible the moment you unlock your phone. Everything else — social media, games, shopping, health apps — can go in folders on a second page or in App Library.

Source: Apple Support — Organize apps in folders on iPhone (support.apple.com). Video walkthrough: Apple Support YouTube channel, search "organize iPhone home screen."`,
    steps: [
      {
        title: 'Enter jiggle mode to start rearranging',
        content:
          'Press and hold on any empty spot on your home screen — or press and hold on any app icon — until the icons start to wiggle. Small minus signs appear in their corners. Your phone is now ready for you to move things around. Tap Done in the upper-right corner (or press the side button) when you are finished.',
        tip: 'Quick Tip: If a menu appears instead of jiggle mode, you pressed on an icon that has a shortcut menu. Tap anywhere else to dismiss the menu, then try pressing on an empty space on the screen.',
      },
      {
        title: 'Move your most-used apps to the first page',
        content:
          'While in jiggle mode, press and hold Phone, Messages, Camera, or any app you use daily, then drag it to the spot you want. To move it to the first page, drag it to the left edge of the screen and hold — the previous page will slide into view. Place it where you can reach it with your thumb.',
      },
      {
        title: 'Set up the Dock with your four most-used apps',
        content:
          'The Dock is the row of four app icons at the very bottom of the screen. It appears on every home screen page. To change what is there: drag an existing Dock app out to free up a slot, then drag a new app from the home screen into the Dock. A good starting set: Phone, Messages, Camera, and Maps (or FaceTime).',
        tip: 'Quick Tip: Keep the number of apps in the Dock at three or four. More than that and the icons get small and harder to tap.',
      },
      {
        title: 'Create folders to group related apps',
        content:
          'In jiggle mode, drag one app directly on top of another app and hold it there for one second. A folder is created with both apps inside. The phone suggests a name — tap the name field to type your own, such as "Health Apps" or "Games." Drag additional apps onto the folder to add them. To remove an app from a folder, open the folder, enter jiggle mode, and drag the app back out.',
      },
      {
        title: 'Hide apps you rarely use (without deleting them)',
        content:
          'In jiggle mode, tap the small minus sign on any app you want to hide. Choose "Remove from Home Screen" — not "Delete App." The app disappears from your home screen but stays on your phone. To find it later, swipe all the way left past your last home screen page to reach App Library, where all your apps are organized automatically.',
        warning:
          'Be careful to choose "Remove from Home Screen" and not "Delete App." Deleting an app removes it entirely. If you choose the wrong option by accident, you can reinstall any deleted app from the App Store at no cost.',
      },
      {
        title: 'Add a weather or calendar widget',
        content:
          'Press and hold an empty area of the home screen to enter jiggle mode, then tap the plus sign (+) in the upper-left corner. A widget gallery opens. Tap "Weather" to see size options — choose Medium for a good balance of information and size. Tap "Add Widget." Then drag the widget to the top of your home screen. Repeat the process and tap "Calendar" to add a calendar widget showing today\'s events.',
        tip: 'Quick Tip: Widgets update automatically. You do not need to tap them to get fresh information — the weather widget updates throughout the day on its own.',
      },
    ],
  },

  {
    slug: 'how-to-spot-fake-product-reviews-online-2026',
    title: 'How to Spot Fake Product Reviews Online',
    excerpt:
      'Fake reviews on Amazon, Google, and Facebook Marketplace can lead you toward scam products. Learn the warning signs and free tools that help you shop with confidence.',
    category: 'safety-guides',
    tags: [
      'fake reviews',
      'amazon',
      'scam products',
      'online shopping',
      'fakespot',
      'reviewmeta',
      'consumer safety',
      'seniors',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Online reviews can be one of the most helpful things on the internet — or one of the most misleading. Sellers know that shoppers trust star ratings, and some sellers pay people (or use automated software) to write fake glowing reviews for poor-quality products. A product with 4.8 stars and 2,000 reviews might actually be terrible, with most of those reviews being paid or computer-generated. Knowing how to tell real reviews from fake ones can save you money and protect you from receiving products that are nothing like the description.

This guide covers Amazon, Google reviews, and Facebook Marketplace — three places where fake reviews are especially common.

**Why fake reviews are a serious problem**

When you buy a product based on fake reviews, several things can go wrong. The product may be low quality or defective. In some cases, products like chargers, medications, or supplements can be unsafe. You may also find it difficult to get a refund from sellers who rely on deceptive reviews to make sales. The Federal Trade Commission (FTC) has rules against fake reviews and has taken legal action against companies that use them, but the practice is still widespread.

**Warning sign 1: A burst of reviews on the same day or week**

Real customers buy a product over many months and leave reviews gradually. When a product suddenly gets fifty five-star reviews all posted within a few days, that pattern suggests the seller arranged for those reviews all at once — either by paying reviewers or using review-generating software. On Amazon, scroll down to the review section and look for the bar chart showing review dates. A big spike on one date is a red flag.

**Warning sign 2: Reviews that all sound the same**

Genuine customers write reviews in their own words and mention specific details about how they used the product. Fake reviews tend to be short, vague, and filled with identical phrases. Look for things like: "Great product! Works perfectly! Highly recommend!" with nothing specific. If five reviews in a row use almost the same wording, they were likely written by the same person or software.

**Warning sign 3: Reviewers who have only reviewed that one product**

Click on the name of a reviewer to see their review history. A real Amazon customer often has reviews for many different things they have bought over the years. If a reviewer has posted exactly one review — this product — and their account is new, that is a strong signal the account was created just to post a fake review. Also look for reviewers who have reviewed only products from the same brand.

**Warning sign 4: All five-star reviews with no critical ones**

Almost every product has at least some customers who were not satisfied. A product page with hundreds of reviews and every single one rated four or five stars is unusual. Real review distributions typically show some three-star and two-star reviews as well. If there are no critical reviews at all, the seller may have suppressed or removed negative feedback.

**Warning sign 5: Poor grammar and overly enthusiastic language**

Fake review services often operate overseas, and the resulting reviews may have unusual grammar or phrasing. Also watch for reviews that sound more like advertising copy than something a real person would write — excessive exclamation points, words like "phenomenal," "life-changing," or "best ever" for ordinary products like a phone case or kitchen gadget.

**The Amazon "Verified Purchase" badge**

Amazon marks reviews with "Verified Purchase" when the reviewer actually bought the item through Amazon. This is a useful signal — it means Amazon confirmed the purchase happened. That said, it does not guarantee honesty; some fake review operations do purchase the product before leaving a review to earn this badge. Still, a mix of verified and unverified reviews, where the unverified ones are more positive, is worth noticing.

**Free tools: Fakespot and ReviewMeta**

Two free websites analyze product review patterns and give you a reliability grade.

Fakespot (fakespot.com): Paste in the Amazon product URL (the web address from the address bar) and Fakespot scans the reviews for signs of manipulation. It gives the reviews a letter grade from A to F and explains its reasoning. A grade of C or lower means the reviews may not be trustworthy.

ReviewMeta (reviewmeta.com): Works similarly for Amazon. It removes reviews it identifies as potentially unreliable and recalculates the star rating based on what is left. A product with 4.8 stars might drop to 3.1 stars after suspicious reviews are filtered out.

Both services are free and do not require you to create an account.

**Tips for Facebook Marketplace**

Facebook Marketplace has fewer review tools, so you need to rely on signals like the seller's profile age, whether they have other active listings, and whether their profile looks like a real person's account. Ask the seller a specific question about the product before agreeing to buy — scam sellers often cannot answer detailed questions because they do not actually have the item. When possible, arrange to pick up the item in person rather than paying for shipping, and pay with cash or PayPal Goods and Services (which offers buyer protection) rather than Venmo or wire transfer.

**Tips for Google Reviews**

Before visiting a local business or hiring a service, check their Google reviews. Warning signs include: all reviews posted in the same week, reviewers whose accounts show only one or two reviews ever, and very generic praise with no mention of the specific service provided. The FTC advises that if something looks too good to be true, it usually is.

Sources: Federal Trade Commission — Fake Reviews (ftc.gov), Amazon Help — About Customer Reviews (amazon.com/help), Fakespot (fakespot.com), ReviewMeta (reviewmeta.com).`,
    steps: [
      {
        title: 'Look at the date distribution of reviews',
        content:
          'On an Amazon product page, scroll down to the customer reviews section. Look for a bar chart that shows when reviews were posted. Real products get reviews gradually over many months. If you see a large spike where many reviews arrived at once — all in the same week — that suggests the seller arranged those reviews artificially.',
        tip: 'Quick Tip: On mobile, the review date chart may be smaller. Zoom in with two fingers if you need a clearer look.',
      },
      {
        title: 'Read several reviews and look for identical phrasing',
        content:
          'Click through to read at least ten reviews, not just the first few. Genuine reviewers mention specific details — what they used the product for, what they liked and disliked. If multiple reviews use the same phrases, have the same sentence structure, or all sound like advertising copy, those reviews were likely written by the same source.',
        warning:
          'Short reviews that say nothing specific — "Great product! Works as described!" — are not necessarily fake, but they provide very little useful information. Rely most on detailed reviews that mention real-world use.',
      },
      {
        title: "Click on a reviewer's name to check their history",
        content:
          'On Amazon, click the name of any reviewer. Their review history page shows every product they have ever reviewed. Look for accounts with only one review (this product), very new accounts, or accounts that have only reviewed products from the same brand. Any of these patterns suggests the review may not be genuine.',
      },
      {
        title: 'Check the overall star distribution for gaps',
        content:
          'On Amazon, a bar chart next to the overall star rating shows how many reviewers gave 1, 2, 3, 4, or 5 stars. Almost every real product has at least some 1-star and 2-star reviews from customers who were not satisfied. A product with zero or nearly zero low-star reviews out of thousands of reviews is suspicious.',
      },
      {
        title: 'Run the product URL through Fakespot or ReviewMeta',
        content:
          'Go to fakespot.com or reviewmeta.com. Copy the full web address of the Amazon product page from your browser\'s address bar. Paste it into the search box on either site and press Enter or click Analyze. Fakespot gives the reviews a letter grade (A is trustworthy, F is highly suspicious). ReviewMeta recalculates the star rating after filtering out questionable reviews. Use both for a second opinion.',
        tip: 'Quick Tip: To copy the web address on a phone, tap the address bar at the top of your browser. The full address will be highlighted. Tap Copy, then go to the review-checking site and paste it in.',
      },
      {
        title: 'Apply the same thinking to Google and Facebook reviews',
        content:
          'For Google business reviews, click "Google reviews" and sort by "Newest" to spot bursts of recent reviews. Look for reviewer accounts with only one review total. On Facebook Marketplace, ask the seller a specific question about the item — "Does the charger cable work with an iPhone 14?" A scammer often cannot answer because they do not have the product. Prefer sellers with a profile history and real photos.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-windows-11-recall-and-privacy-2026',
    title: 'How to Manage Windows 11 Recall and Privacy Settings',
    excerpt:
      'Windows 11 Recall takes periodic snapshots of your screen. Learn what that means, how to turn it off, and which other privacy settings are worth reviewing.',
    category: 'windows-guides',
    tags: [
      'windows 11',
      'recall',
      'privacy settings',
      'microsoft',
      'screen snapshots',
      'location privacy',
      'advertising id',
      'seniors',
    ],
    readTime: '9 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Windows 11 has a feature called Recall. When it is turned on, your computer takes a screenshot — a picture of whatever is on your screen — every few seconds throughout the day. The idea is that you can later search through those snapshots to find things you looked at before, like a web page or document. Microsoft describes Recall as an "AI-powered search for your PC."

This feature is only available on computers with a special chip called an NPU (Neural Processing Unit — a type of processor designed to run artificial-intelligence tasks). These are sometimes marketed as "Copilot+ PCs." If your computer was made before 2024, it almost certainly does not have this chip and Recall is not available on it. If you are unsure, you can check: open Settings, go to System, then About, and look at the processor name. If you do not see any mention of Copilot+ or NPU, Recall is not on your machine and this section does not apply to you.

For those who do have a Copilot+ PC, Recall raises a legitimate privacy concern. The snapshots are stored on your computer — not sent to Microsoft's servers — but they are stored in a folder that could be accessed by anyone with access to your computer, or by malware (harmful software). The snapshots can capture anything that appeared on your screen: bank account pages, private messages, medical records, passwords. Microsoft made Recall opt-in after significant public concern, but it is worth knowing how to check and confirm it is turned off if you prefer.

**How to check whether Recall is enabled**

Open Settings by clicking the Start button (the Windows logo in the taskbar) and then clicking the gear icon, or press the Windows key and the letter I at the same time. In Settings, use the search bar at the top to search for "Recall." If you see "Recall & snapshots" in the search results, click it. If you see a toggle labeled "Save snapshots," check whether it is turned on (blue) or off (gray). If it is off, no snapshots are being saved and you do not need to do anything else.

If you want to turn it off: click the toggle to switch it from on (blue) to off (gray). The page will confirm that Recall has been paused and no new snapshots will be saved. If you want to delete any snapshots already stored, look for a "Delete all snapshots" button on the same page and click it.

**Other Windows 11 privacy settings worth reviewing**

Even if your computer does not have Recall, Windows 11 collects other types of information by default. The following settings are found in Settings (Windows key + I) → Privacy & security. You do not need to change all of them, but it is worth knowing what they do so you can make your own choice.

Location: Windows can share your location with apps and websites. Go to Privacy & security → Location. You can turn off location entirely, or scroll down to see which individual apps have access and turn off any you do not recognize or trust. Most people are fine leaving location on for Maps but turning it off for apps that have no reason to need it.

Advertising ID: Windows assigns your computer a unique advertising identifier — a code — that advertisers use to track which ads you see and to show you targeted ads. Go to Privacy & security → General. The first toggle is "Let apps show me personalized ads by using my advertising ID." Turning this off does not reduce the number of ads you see, but it does prevent advertisers from building a profile of your browsing habits tied to your specific computer. Many privacy-minded users turn this off.

Diagnostic data: Microsoft collects information about how Windows is used on your computer to help identify problems and improve future updates. You can limit this to "Required diagnostic data" (the minimum needed for security and updates) rather than the full "Optional diagnostic data" that includes more detailed usage information. Go to Privacy & security → Diagnostics & feedback. Under "Diagnostic data," select "Send required diagnostic data only."

App permissions: Individual apps may have access to your camera, microphone, contacts, and other sensitive areas. Go to Privacy & security and scroll down to see categories like Camera, Microphone, and Contacts. Click any category to see which apps have access. Remove access from any app that does not need it — for example, a calculator app has no reason to access your microphone.

**Which settings to keep on versus off**

Keep location on for apps like Maps and Weather — they need your location to work properly. Keep the camera and microphone on for apps like Zoom or FaceTime if you use video calls. Turn off the advertising ID — there is no benefit to you from having it on. Turn off Recall snapshots if you have a Copilot+ PC and you are not actively using the feature. Set diagnostic data to "required only."

There is no single right answer for everyone. The goal is to be aware of what your computer is sharing and make intentional choices rather than leaving everything at the factory defaults.

**A note about Windows updates and privacy**

Microsoft updates Windows 11 regularly, and occasionally a new update changes privacy defaults or introduces new features like Recall. It is a good habit to check Privacy & security settings once or twice a year, or any time you hear news about a major Windows update. The setting names stay roughly the same across updates.

Source: Microsoft Support — Recall and privacy in Windows 11 (support.microsoft.com). Video: Microsoft YouTube channel, search "Windows 11 privacy settings."`,
    steps: [
      {
        title: 'Open Windows Settings',
        content:
          'Click the Start button — the Windows logo in the lower-left corner of your screen. Then click the gear icon labeled Settings. Alternatively, press the Windows key and the letter I at the same time. The Settings window opens.',
        tip: 'Quick Tip: The Windows key is the key with the four-square logo, usually between the Ctrl and Alt keys on the bottom row of your keyboard.',
      },
      {
        title: 'Check whether Recall is available and enabled on your PC',
        content:
          'In the Settings search bar at the top, type "Recall" and press Enter. If "Recall & snapshots" appears in the results, your computer has this feature — click it to open the settings. If nothing appears for Recall, your computer does not have the feature and you can skip to Step 4. On the Recall page, look for the "Save snapshots" toggle. If it is blue (on), click it to turn it gray (off).',
        warning:
          'If you turn off Recall, your computer will stop taking new screenshots. Any snapshots already stored remain on your computer until you delete them. Look for a "Delete all snapshots" button on the same page to remove stored snapshots completely.',
      },
      {
        title: 'Turn off the Advertising ID',
        content:
          'In Settings, click "Privacy & security" in the left-hand menu. Then click "General." The first toggle reads "Let apps show me personalized ads by using my advertising ID." Click the toggle to turn it off (gray). This stops advertisers from tracking your computer across apps and websites. It does not change how many ads you see — only whether those ads are targeted based on your activity.',
      },
      {
        title: 'Limit diagnostic data to "required only"',
        content:
          'In Privacy & security, click "Diagnostics & feedback." Under the "Diagnostic data" section, click the option for "Send required diagnostic data only." This allows Windows to receive the minimum information needed for security updates while reducing the additional usage data Microsoft collects by default.',
      },
      {
        title: 'Review which apps can access your location, camera, and microphone',
        content:
          'In Privacy & security, scroll down to the "App permissions" section. Click "Location" to see which apps can see where you are. Click "Camera" to see which apps can use your camera. Click "Microphone" to see which apps can hear you. For each category, you can toggle off access for individual apps. Remove access from any app that you do not recognize or that has no reason to need that capability.',
        tip: 'Quick Tip: If you use Zoom, Microsoft Teams, or FaceTime for video calls, keep the camera and microphone turned on for those specific apps. You can leave them off for everything else.',
      },
      {
        title: 'Save your settings and check back after major updates',
        content:
          'Settings save automatically when you toggle them — there is no Save button to press. Close Settings when you are done. Make a note to revisit Privacy & security settings once or twice a year, or any time you hear about a significant Windows update. Microsoft occasionally adds new privacy-related options with major updates, and it is worth knowing about them.',
      },
    ],
  },

  {
    slug: 'how-to-use-find-my-iphone-or-android-device-2026',
    title: 'How to Find a Lost iPhone or Android Phone',
    excerpt:
      'Lost your phone? Find My (iPhone) and Find My Device (Android) can show you where it is, make it ring, and lock or erase it remotely — but only if set up in advance.',
    category: 'troubleshooting',
    tags: [
      'find my iphone',
      'find my device',
      'lost phone',
      'android',
      'iphone',
      'icloud',
      'google',
      'remote erase',
      'seniors',
    ],
    readTime: '10 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Losing your phone is stressful. Your contacts, photos, messages, and financial apps are all on that device. The good news is that both Apple and Google have built tools specifically for this situation. Apple's tool is called Find My. Google's tool is called Find My Device. Both can show you where your phone is on a map, make it play a loud sound, lock it so no one else can use it, and — as a last resort — erase all data on it remotely.

There is one critical requirement: these tools must be turned on before your phone goes missing. You cannot set them up after the fact. This guide shows you how to verify the feature is enabled right now, and then walks through exactly what to do if your phone ever goes missing.

**Why setting this up now matters**

If Find My or Find My Device is not enabled on your phone and it goes missing, you have very limited options. You can call your carrier (AT&T, Verizon, T-Mobile, etc.) to report it stolen, and they can disable service to the phone, but you cannot see its location or remotely erase your data. Taking five minutes to confirm the feature is on today may save you significant trouble later.

**Setting up Find My on iPhone**

Find My has two parts: Find My iPhone (which lets you locate your own phone) and Find My network (which can locate a phone even when it is offline by using nearby iPhones to relay its location). Both should be turned on.

To verify: Open the Settings app. Tap your name at the very top of Settings — this opens your Apple ID settings. Tap "Find My." Then tap "Find My iPhone." Make sure the toggle at the top is green (on). Also make sure "Enable Offline Finding" is green and "Send Last Location" is green. If any of these toggles are off, tap them to turn them on.

For Find My to work, your iPhone also needs to be signed in to your Apple ID. If you are not sure whether you are signed in, look at the very top of Settings — your name and email address should be displayed there. If it says "Sign in to your iPhone" instead, tap that and enter your Apple ID and password.

**Setting up Find My Device on Android**

On Android phones (Samsung, Google Pixel, Motorola, and others), the feature is called Find My Device and is managed by Google.

To verify on most Android phones: Open Settings, then tap "Security" or "Security & privacy" (the exact name varies slightly by phone brand). Look for "Find My Device" and tap it. Make sure the toggle is turned on. If you do not see it under Security, you can also search for "Find My Device" in the Settings search bar at the top.

Your phone must also be signed in to a Google account. To check: in Settings, tap "Accounts" or "Accounts & backup," then look for your Gmail address. If no Google account is listed, you will need to add one — tap "Add account" and follow the steps to sign in with your Google email and password.

**Using Find My on iPhone when your phone is missing**

If your iPhone is lost or missing, you have three ways to use Find My:

Option 1 — From another iPhone or iPad: Open the Find My app (it has a green icon with a radar circle). Tap the Devices tab at the bottom. Your iPhone should appear in the list with its last known location on a map. Tap your phone's name to see options: Play Sound (makes the phone ring at full volume for two minutes, even if it is on silent), Mark as Lost (locks the phone with a passcode and displays a message like your phone number so someone who finds it can contact you), and Erase This Device (permanently deletes all data — use this only as a last resort).

Option 2 — From a computer browser: Go to icloud.com and sign in with your Apple ID. Click "Find iPhone" (or "Find My" if shown). Your devices appear on a map. Click your phone to see the same Play Sound, Lost Mode, and Erase options.

Option 3 — Ask Siri on another Apple device: Say "Hey Siri, find my iPhone." Siri can trigger the sound remotely from an Apple Watch or iPad logged in to the same Apple ID.

**Using Find My Device on Android when your phone is missing**

Option 1 — From a computer browser: Go to android.com/find and sign in with the same Google account that is on your lost phone. A map appears showing the phone's last known location. You will see three options: Play sound (rings the phone at full volume for five minutes), Secure device (locks the phone and signs out of Google — you can also leave a message and phone number on the lock screen), and Erase device (permanently deletes all data on the phone).

Option 2 — From another Android phone: Download the Find My Device app from the Google Play Store (it is free and made by Google). Sign in with your Google account. Your phone will appear in the list of devices.

**What to do if the phone does not appear on the map**

Find My and Find My Device can only show a location if the phone is powered on and has an internet connection (Wi-Fi or cellular data). If the phone appears offline, both services will show you the last location recorded before it went offline. Check that location — it may be somewhere you recently visited. Keep checking back; if someone turns the phone on, the location will update.

If you believe the phone was stolen, do not try to retrieve it yourself. File a report with your local police department and give them the last known location from Find My or Find My Device. Also contact your wireless carrier to report the phone stolen so they can flag the device ID.

**After you get a new phone**

If your phone is lost for good, use the remote erase option to protect your personal data before you set up a new device. When you get a new phone, signing in to your Apple ID or Google account will restore your contacts, photos (if backed up), and apps. Always set up Find My or Find My Device on the new phone right away.

Sources: Apple Support — Use Find My on iPhone (support.apple.com). Google Support — Find, lock, or erase a lost Android device (support.google.com). Video: Apple Support YouTube channel, search "Find My iPhone tutorial." Google YouTube channel, search "Find My Device Android."`,
    steps: [
      {
        title: 'Verify Find My is turned on right now (iPhone)',
        content:
          'Open the Settings app. Tap your name at the top of Settings to open your Apple ID page. Tap "Find My," then tap "Find My iPhone." Make sure the top toggle is green (on). Also turn on "Enable Offline Finding" and "Send Last Location" if they are not already green. These extra options help locate your phone even when the battery is almost dead or there is no cell signal nearby.',
        tip: 'Quick Tip: Do this check right now while you are reading this guide. It takes about 30 seconds and you will be glad you did if your phone ever goes missing.',
      },
      {
        title: 'Verify Find My Device is turned on right now (Android)',
        content:
          'Open the Settings app on your Android phone. Tap "Security" or "Security & privacy" (the name varies by phone brand). Look for "Find My Device" and tap it. Make sure the toggle is turned on. Also confirm your phone is signed in to a Google account: go to Settings → Accounts and look for your Gmail address in the list.',
      },
      {
        title: 'Locate your missing iPhone using iCloud.com or another Apple device',
        content:
          'If your iPhone goes missing, open a web browser on any computer and go to icloud.com. Sign in with your Apple ID email and password. Click "Find iPhone" or "Find My." Your phone will appear on a map. Click the phone name to see three choices: Play Sound (makes the phone ring loudly), Mark as Lost (locks it and shows your contact info on the screen), or Erase iPhone (deletes all data permanently). Start with Play Sound if the phone might be nearby — it could be under a couch cushion.',
        tip: 'Quick Tip: You can also use the Find My app on an iPad or a borrowed iPhone. Tap the Devices tab, find your phone in the list, and tap it to see location and options.',
      },
      {
        title: 'Locate your missing Android phone using android.com/find',
        content:
          'Open a web browser on any computer or tablet. Go to android.com/find and sign in with the same Google account that is on your missing phone. A map appears showing your phone\'s approximate location. Three options appear: Play sound (rings for five minutes even on silent), Secure device (locks the phone remotely and lets you leave a contact message), and Erase device (permanently deletes all data). Use Play sound first if the phone is likely nearby.',
        warning:
          'Erase device permanently removes all photos, contacts, and data on the phone. Only use this option if you are certain the phone is not recoverable and you need to protect your personal information.',
      },
      {
        title: 'What to do if the phone shows as offline',
        content:
          'If the map shows the phone as offline, it means the phone is turned off or has no internet connection. The map will display the last known location before it went offline. Write down or screenshot that location. Check back every hour — if someone turns the phone on, the location will update. Do not go to retrieve a potentially stolen phone yourself; share the location with local police instead.',
      },
      {
        title: 'Report the phone stolen and protect your accounts',
        content:
          'If the phone was stolen, call your wireless carrier (AT&T: 1-800-331-0500, Verizon: 1-800-922-0204, T-Mobile: 1-800-937-8997) to report the device stolen. They can disable service to the phone. Also change the passwords for your most important accounts — email, bank, and social media — from another device, since those apps were on the missing phone. Use the remote erase option in Find My or Find My Device to clear your data from the lost phone.',
        tip: 'Quick Tip: If you use the same password for multiple accounts, this is a good time to update each one to a unique password. A free password manager like Bitwarden can help you keep track of different passwords.',
      },
    ],
  },
];
