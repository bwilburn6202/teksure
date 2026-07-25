// TekSure Guides Batch 148 — 4 guides covering: phone photography tips for seniors,
// understanding and using the App Store / Play Store, stopping unwanted emails,
// and setting up a new smart TV from scratch.
import type { Guide } from './guides';

export const guidesBatch148: Guide[] = [
  {
    slug: 'how-to-take-better-phone-photos-2026',
    title: 'How to Take Better Photos With Your Phone',
    excerpt:
      'Hold steady, tap to focus, and use natural light. These practical tips work on any iPhone or Android and make a real difference in your pictures.',
    category: 'tips-tricks',
    tags: [
      'phone camera',
      'photography tips',
      'iphone camera',
      'android camera',
      'photos app',
      'seniors',
    ],
    readTime: '7 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Your phone already has a surprisingly capable camera built right in. The hardware is good — but the difference between a blurry, dark photo and a sharp, well-lit one usually comes down to a few simple habits. This guide walks through each habit one at a time. These techniques work the same way on an iPhone and on Android phones (Samsung, Google Pixel, Motorola, and others).

**Hold the phone with both hands**

The most common reason a photo turns out blurry is camera shake — the tiny movement of your hand in the split second the photo is taken. Holding the phone with both hands dramatically reduces that shake. Cup one hand under the bottom of the phone and use your other hand to steady the sides. Tuck your elbows close to your body for extra stability. When you are ready to take the shot, hold your breath for just a moment and press the shutter button gently instead of jabbing it.

**Tap the screen to set focus and brightness**

Before you take a photo, tap once on the part of the picture you care most about — a person's face, a flower, a piece of food. When you tap, a small square or circle appears on the screen. That tells the camera exactly what to focus on and also adjusts the brightness for that area. Without this step, the camera guesses — and it often guesses wrong, leaving your subject blurry or too dark.

On iPhone, after you tap, a small sun icon appears next to the focus square. Slide your finger up or down along that sun to make the photo brighter or darker before you shoot.

**Turn on the camera grid to straighten your shots**

The rule of thirds is a photography principle that says a photo looks more balanced when the main subject sits on one of the lines dividing the frame into thirds — rather than dead center. You do not need to memorize the theory; you just need to turn on the grid overlay in your camera settings, and the lines appear right on your viewfinder.

On iPhone: open Settings, scroll down and tap Camera, then turn on Grid.
On Android (Samsung): open the Camera app, tap the gear icon (Settings), and turn on Grid lines. On Google Pixel: open Camera, tap the arrow or settings icon, and look for Grid type.

Once the grid is on, try placing a person's eyes on the top horizontal line, or a horizon line on one of the horizontal thirds. You will be surprised how much more pleasing the photo looks.

**Use natural light whenever you can — skip the flash indoors**

The built-in flash on a phone produces a harsh, flat light that washes out skin tones and creates red eyes. Whenever you have a choice, turn the flash off and use available light instead.

The best natural light is indirect — a window nearby, an open doorway, or sitting outside in the shade rather than direct midday sun. Face your subject toward the light source (they face the window, not away from it). If you are taking a photo of food at a restaurant, turn off the flash and hold the phone steady — the ambient light from the room is almost always better.

To turn off flash on iPhone: tap the lightning bolt icon in the top-left corner of the Camera app and select Off. On Android: tap the flash icon (also a lightning bolt) and select Off or the slash-through icon.

**Get closer to your subject**

Phone cameras — especially older models — do not do well when you zoom in using the digital zoom (pinching the screen to zoom). Digital zoom just stretches the existing pixels, making the photo look grainy. Instead, walk closer to your subject. If you need to zoom a bit, limit yourself to 2x or less on the zoom slider.

On newer iPhones and Android phones, there is often a 2x or 3x optical zoom button in the Camera app. Optical zoom uses a second physical lens and stays sharp. Look for small number buttons (0.5, 1x, 2x) near the shutter button and use those rather than pinching the screen.

**Take several shots and pick the best one**

Professional photographers take many shots and choose the best one. You can do the same. Take three or four photos of the same subject, then look through them to pick the sharpest one. Storage is inexpensive, and deleting extras takes only a moment.

On iPhone, you can hold the shutter button down to take a burst of photos in rapid succession — then release and the phone saves them all for you to review.

**Make simple edits in the Photos app**

Both the iPhone Photos app and Google Photos (Android) have built-in editing tools that require no separate app. After taking a photo, tap Edit and look for brightness, contrast, and crop controls.

The most useful adjustments:
- Brightness: slide it up slightly if the photo looks dark.
- Crop: tap the crop tool to cut out distracting elements at the edges.
- Straighten: most apps have a rotate or straighten slider if your horizon looks tilted.

Avoid over-editing — a small adjustment goes a long way. If you do not like the result, tap "Revert" (iPhone) or "Cancel" (Google Photos) to go back to the original.

Source: Apple Support — Camera tips (support.apple.com) and Google Support — Photos (support.google.com).`,
    steps: [
      {
        title: 'Hold the phone steady with both hands',
        content:
          'Cup one hand under the bottom of the phone and use the other hand to hold the sides. Tuck your elbows against your body. Press the shutter button gently — do not jab it. This alone prevents most blurry photos.',
        tip: 'Quick Tip: If your hand tends to shake, lean against a wall or rest your elbows on a table for extra steadiness.',
      },
      {
        title: 'Tap the screen to focus on your subject',
        content:
          'Before you shoot, tap once on the person or object you most want to be sharp. A small square or circle appears showing where the camera is focused. The camera also adjusts brightness for that spot. Without this tap, the camera guesses — and sometimes gets it wrong.',
        tip: 'Quick Tip: On iPhone, slide the small sun icon that appears after tapping to brighten or darken the photo before you take it.',
      },
      {
        title: 'Turn on the camera grid in Settings',
        content:
          'The grid places two horizontal and two vertical lines over your viewfinder, dividing the frame into thirds. Try placing faces or the horizon on one of those lines instead of the exact center — the photo will look more balanced. On iPhone: Settings → Camera → Grid (toggle on). On Samsung: open Camera → gear icon → Grid lines. On Google Pixel: open Camera → Settings → Grid type.',
      },
      {
        title: 'Turn off the flash and move toward a window',
        content:
          'The built-in flash creates harsh, flat light. Turn it off by tapping the lightning bolt icon in the Camera app and selecting Off. Then position your subject so a window or lamp is in front of them, not behind them. Soft natural light from a window produces warmer, more flattering photos.',
        warning:
          'Avoid standing your subject in front of a bright window — the camera will expose for the window light and your subject will appear as a dark shadow. Face them toward the window instead.',
      },
      {
        title: 'Walk closer rather than pinching to zoom',
        content:
          'Pinching the screen to zoom in makes photos look blurry and grainy because it stretches the image digitally. If you need to get closer, walk toward your subject. If your phone has numbered zoom buttons near the shutter (0.5, 1x, 2x), you can use those — they switch to a real lens and stay sharp.',
      },
      {
        title: 'Take three or four shots and choose the best one',
        content:
          'Take a few photos of the same moment. At least one will be sharper than the others. On iPhone, hold down the shutter button to take a rapid burst of photos. Then open the Photos app and pick your favorite — delete the rest to keep your storage tidy.',
        tip: 'Quick Tip: To delete an unwanted photo on iPhone: open it in Photos, tap the trash can icon, then tap "Delete Photo." On Android: open the photo in Google Photos and tap the trash icon.',
      },
      {
        title: 'Make quick edits in your Photos app',
        content:
          'Open a photo, tap Edit (iPhone) or the pencil icon (Google Photos). Use the Brightness slider to lift a dark photo slightly and the Crop tool to trim out distracting edges. If the result looks wrong, tap Revert or Cancel to restore the original. Edits are non-destructive — the original is never permanently changed until you save.',
        tip: 'Quick Tip: The single most useful edit is a small brightness boost — slide it about one-quarter of the way up on a dark indoor photo and it can look like a completely different picture.',
      },
    ],
  },

  {
    slug: 'what-is-an-app-store-and-how-to-use-it-2026',
    title: 'What Is an App Store and How Do You Use It?',
    excerpt:
      'The App Store (iPhone) and Play Store (Android) are the official, safe places to download apps. Learn how to find, read reviews, install, and update apps with confidence.',
    category: 'essential-skills',
    tags: [
      'app store',
      'play store',
      'download apps',
      'iphone apps',
      'android apps',
      'app updates',
      'seniors',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `An "app" is a small program — short for application — that runs on your phone or tablet and does one specific thing. A weather app shows the forecast. A banking app lets you check your balance. A video call app lets you talk face-to-face with family members across the country.

The App Store (on iPhones and iPads made by Apple) and the Google Play Store (on Android phones such as Samsung, Motorola, and Google Pixel) are the official stores where you download these apps. Think of them the way you think of a reputable department store: every item on the shelf has been reviewed, the store stands behind what it sells, and you are not buying from a stranger on a street corner.

**Why you should only download apps from the official store**

You may occasionally see a website or email that says "Download this app here" with a button linking somewhere other than the App Store or Play Store. Do not use those links. Apps downloaded from unofficial sources can contain harmful software (called malware) that steals passwords, reads your private messages, or causes your phone to run slowly. The official stores review every app before allowing it to be listed. They are not perfect, but they are far safer than downloading an app from a random website.

If someone sends you a link to download an app, go to the official store yourself and search for the app by name instead of clicking the link.

**Most apps are free — but watch for in-app purchases**

The majority of apps are free to download. However, some apps are free to install but ask you to pay for extra features or content once you are inside the app. These are called "in-app purchases." Common examples include games that let you buy extra lives, or news apps that ask you to subscribe after a free trial.

When you look at an app in the store, the price shown is always the download price. If you see "Free," the download costs nothing. But scroll down on the app's description page and look for a section called "In-App Purchases" — this will list any optional charges. Apple and Google both require apps to disclose these costs up front.

If you are worried about accidental purchases, you can turn on a "require password or Face ID for purchases" setting so nothing can be charged without your approval. Ask a family member or your carrier store to help you find that setting.

**How to read ratings and reviews before installing**

Every app in the store has a star rating from 1 to 5, along with written reviews from people who have already downloaded it. A rating of 4 stars or higher with many reviews (hundreds or thousands) is a good sign. Read a few of the most recent reviews — they will tell you if the app has problems that developed recently.

Pay attention to the number of reviews, not the star rating alone. An app with five stars but only two reviews does not tell you much. An app with 4.2 stars and 50,000 reviews is a much more reliable signal.

Also check the "Developer" name listed under the app title. For well-known apps, the developer should match the company you expect. The real Netflix app is made by "Netflix, Inc." The real Amazon app is made by "Amazon.com." If the developer name looks unfamiliar or misspelled, look more carefully before installing.

**Keeping your apps updated**

Apps receive updates regularly — for security fixes, bug repairs, and new features. Outdated apps can have security holes just like outdated phone software. Plan to check for app updates at least once a month, or turn on automatic updates so the store handles it for you.

Source: Apple Support — App Store (support.apple.com/apps) and Google Support — Google Play (support.google.com/googleplay).`,
    steps: [
      {
        title: 'Find the App Store or Play Store on your phone',
        content:
          'On iPhone or iPad: look for the blue App Store icon (it looks like a white letter "A" made of sticks). On Android phones: look for the colorful Google Play Store icon (a triangle pointing right, in four colors). Both icons are usually on your home screen or in your list of all apps.',
        tip: 'Quick Tip: If you cannot find the store icon, swipe down on your home screen and type "App Store" or "Play Store" in the search bar at the top.',
      },
      {
        title: 'Search for an app by name',
        content:
          'Tap the Search icon at the bottom of the screen (it looks like a magnifying glass). Type the name of the app you want — for example, "Facebook," "Zoom," or "Weather Channel." A list of results will appear. Look for the exact name and the correct company logo before tapping on a result.',
        warning:
          'Watch for "copycat" apps that use a similar name or logo to a popular app. Always check the developer name below the app title. The official Facebook app is made by "Meta Platforms, Inc." If the developer name looks wrong, scroll past it and look for the correct one.',
      },
      {
        title: 'Read the reviews and check the rating',
        content:
          'Before installing, scroll down on the app\'s page to see the star rating and reviews. Look for 4 stars or higher with a large number of reviews (at least a few hundred). Scroll to the most recent reviews to check for any recent problems. Also look for the "In-App Purchases" section to see if the app charges money for anything after you install it.',
      },
      {
        title: 'Install the app',
        content:
          'Tap the "Get" button (iPhone) or "Install" button (Android). If the app costs money, the button will show the price instead (for example, "$2.99") — tap it and confirm with your Face ID, fingerprint, or password. For free apps, no payment is needed. The app will download and appear on your home screen when it is ready. This usually takes less than a minute on Wi-Fi.',
        tip: 'Quick Tip: Downloading over Wi-Fi is faster and does not use your cellular data. Check that the Wi-Fi symbol is showing at the top of your screen before you start a download.',
      },
      {
        title: 'Open and sign in to the app',
        content:
          'Once installed, tap the app icon on your home screen. Most apps will ask you to create a free account or sign in with an existing one. For apps from services you already use — like your bank, your email provider, or Netflix — use the same email address and password you use on their website.',
        warning:
          'Never download an app from a link in an email or text message, even if the message appears to be from a company you trust. Go to the App Store or Play Store yourself and search for the app by name.',
      },
      {
        title: 'Update your apps regularly',
        content:
          'On iPhone: open the App Store, tap your profile picture in the top-right corner, then scroll down to see "Available Updates." Tap "Update All" to install them all at once. On Android: open the Play Store, tap your profile picture in the top-right corner, then tap "Manage apps and device" to see and install updates.',
        tip: 'Quick Tip: To turn on automatic updates on iPhone: Settings → App Store → turn on "App Updates." On Android: open Play Store → profile picture → Settings → Network Preferences → Auto-update apps → "Over Wi-Fi only."',
      },
      {
        title: 'Remove apps you no longer want',
        content:
          'Unused apps take up storage space and occasionally run in the background. To delete on iPhone: press and hold the app icon until a small menu appears, then tap "Remove App," then "Delete App." On Android: press and hold the app icon, then drag it to the "Uninstall" option that appears, or tap the X that appears over the icon. Deleting a free app is permanent but costs nothing — you can always reinstall it from the store later.',
      },
    ],
  },

  {
    slug: 'how-to-stop-unwanted-emails-unsubscribe-2026',
    title: 'How to Stop Unwanted Emails',
    excerpt:
      'Learn how to unsubscribe from marketing emails, when NOT to click unsubscribe, how to mark spam, block senders, and use filters to keep your inbox tidy.',
    category: 'online-privacy',
    tags: [
      'email',
      'unsubscribe',
      'spam',
      'inbox',
      'gmail',
      'email safety',
      'junk mail',
      'seniors',
    ],
    readTime: '8 min',
    thumbnailEmoji: '✉️',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `If you open your email inbox and find it packed with newsletters, store promotions, and offers you never asked for, you are not alone. Unwanted email — often called "junk mail" or "spam" — is one of the most common frustrations for everyday phone and computer users.

The good news is that you have several tools to fight back. This guide walks through each one, including an important rule about when NOT to hit the unsubscribe button.

**The difference between legitimate marketing email and spam**

Not all unwanted email is dangerous. There are two main types:

1. Legitimate marketing email: You shopped at a store, donated to a charity, or signed up for a service, and now they send you newsletters or offers. You may not want them, but they are from a real company that has your address because you gave it to them at some point. These are safe to unsubscribe from.

2. Spam from unknown senders: You receive an email from a company or person you have never heard of, often with an urgent subject line ("Your account has been suspended," "You have won a prize," or "FINAL NOTICE"). These are often sent by scammers. Do not click the unsubscribe link in these emails.

**Why you should NOT click unsubscribe on suspicious emails**

This is the most important rule in this guide. When you click "Unsubscribe" in a suspicious email, you confirm to the sender that your email address is real and actively used. Instead of stopping the mail, you often end up getting more — and your address may be sold to other spammers. For any email from an unknown sender, especially one with an alarming subject line, do not click anything inside the email. Mark it as spam or delete it instead (both options are described below).

**How to tell if an email is legitimate or suspicious**

Ask yourself these questions:
- Do I recognize this sender's name and company?
- Did I ever sign up for something from this company?
- Does the sender's email address match the company name (for example, does the address end in "@walmart.com" rather than "@walmart-deals-xyz.net")?

If you answer "no" to any of these, treat the email as suspicious.

**Using Gmail's built-in Unsubscribe button**

If you use Gmail (Google's email service, which you access at gmail.com or through the Gmail app), look at the top of the email right below the sender's name. For many marketing emails, Gmail will show a small gray "Unsubscribe" link directly in that area — you do not need to scroll to the bottom. Tapping that link sends an unsubscribe request through Gmail's own system, which is safer than clicking a link inside the email itself. Look for this option first before scrolling to the bottom.

**Finding and using the unsubscribe link at the bottom**

Legitimate marketing emails are required by US law (the CAN-SPAM Act) to include an unsubscribe link, usually at the very bottom in small gray text. If you recognize the sender as a real company, scroll to the bottom, find the "Unsubscribe" or "Manage Preferences" link, and click it. You will usually land on a webpage that confirms your unsubscription or lets you choose which types of emails to stop. After unsubscribing, allow up to 10 business days for the emails to stop — the law allows companies that much time to process the request.

**Marking email as spam**

Marking an email as spam tells your email provider that the message is unwanted. The message moves out of your inbox and helps train the email system to recognize similar messages in the future. Most email services allow you to mark email as spam:

- Gmail (phone or computer): open the email, tap the three dots (menu), and select "Report spam."
- iPhone Mail app: swipe left on the message, tap "More," then tap "Move to Junk."
- Outlook / Hotmail: right-click or long-press the message and select "Mark as junk."

**Blocking a specific sender**

If the same sender keeps emailing you and unsubscribing did not help, you can block them. Blocking means any future email from that exact address goes directly to your spam or trash folder without appearing in your inbox.

- Gmail: open the email, tap the three dots in the top-right corner, tap "Block [sender name]."
- iPhone Mail: open the email, tap the sender's name at the top, tap their email address, then tap "Block this Contact."
- Outlook: open the email, tap the three dots, then "Block" or "Block Sender."

**Using filters to automatically sort email**

A filter (sometimes called a "rule") is a set of instructions you give your email program: "Any email from this address — or with this word in the subject — should go directly to a folder I choose, skip my inbox, or be deleted automatically." Filters are the most powerful long-term tool for keeping your inbox tidy.

Setting up filters is slightly different in every email service. In Gmail on a computer: open the email, click the three dots, select "Filter messages like these," then choose what to do (delete, skip inbox, label it). You can also search Gmail's Help at support.google.com/mail for "create a filter" for step-by-step pictures.

Source: FTC.gov — CAN-SPAM Act (ftc.gov/tips-advice/business-center/guidance/can-spam-act) and Google Support — Gmail filters (support.google.com/mail).`,
    steps: [
      {
        title: 'Decide: do you recognize the sender?',
        content:
          'Before doing anything with an unwanted email, check who sent it. Look at the sender\'s name and email address (tap the sender name to see the full address). If you recognize the company and remember signing up or buying something from them, it is a legitimate marketing email — safe to unsubscribe from. If you do not recognize the sender at all, or the email is alarming or urgent in tone, treat it as suspicious.',
        warning:
          'Never click "Unsubscribe" in an email from an unknown sender. Doing so confirms your email address is active, which can lead to even more unwanted mail.',
      },
      {
        title: 'Check for Gmail\'s built-in Unsubscribe option',
        content:
          'If you use Gmail, open the email and look just below the sender\'s name and email address at the top. For many marketing emails, Gmail displays a small gray "Unsubscribe" link right there. Tap it — Gmail processes the request through its own system, which is safer than clicking a link inside the email. This is the first place to look before scrolling to the bottom.',
        tip: 'Quick Tip: The Gmail unsubscribe option appears only for emails that Gmail has already identified as newsletters or marketing messages. If you do not see it, scroll to the bottom of the email instead.',
      },
      {
        title: 'Use the Unsubscribe link at the bottom of legitimate emails',
        content:
          'For legitimate marketing emails, scroll all the way to the bottom of the email and look for very small text that says "Unsubscribe," "Manage email preferences," or "Opt out." Tap that link. You will usually land on a webpage from the company confirming your request. Allow up to 10 business days for the emails to stop — that is the legal deadline under US law.',
      },
      {
        title: 'Mark suspicious emails as spam',
        content:
          'For emails from senders you do not recognize, mark the message as spam instead of unsubscribing. This moves the email out of your inbox and helps train your email service to catch similar messages automatically. In Gmail: open the email, tap the three dots, select "Report spam." In iPhone Mail: swipe left on the message, tap More, then Move to Junk. In Outlook: right-click or long-press and select "Mark as junk."',
      },
      {
        title: 'Block senders who keep emailing you',
        content:
          'If a sender ignores your unsubscribe request and keeps emailing, block their address. In Gmail: open the email, tap the three dots in the top-right corner, tap "Block [sender name]." In iPhone Mail: open the email, tap the sender\'s name at the top, tap their full email address, then tap "Block this Contact." In Outlook: open the email, tap the three dots, select "Block" or "Block Sender." Future emails from that address go straight to spam or trash.',
        tip: 'Quick Tip: Blocking only stops that exact email address. A determined sender may switch addresses. If that happens, mark the new message as spam and block the new address too.',
      },
      {
        title: 'Set up a filter to automatically handle repeat senders',
        content:
          'A filter tells your email program to automatically sort or delete certain messages before they ever reach your inbox. In Gmail on a computer: open an email from the sender, click the three dots, choose "Filter messages like these," and then pick an action (delete it, skip the inbox, or label it). Search Google Support for "Gmail filters" (support.google.com/mail) for screenshots of each step.',
        tip: 'Quick Tip: Filters are especially useful for store receipts, bill notifications, or newsletters you want to save but do not need to see every day. Send them to a folder labeled "Receipts" or "Shopping" so your inbox stays clear.',
      },
      {
        title: 'Check your spam folder occasionally — real emails land there too',
        content:
          'Email spam filters are not perfect. Occasionally a real email from your doctor, a government agency, or a family member ends up in the spam folder by mistake. Check your spam folder once a week, skim the sender names, and move any real messages back to your inbox. To move a message out of spam in Gmail: open the message and tap "Not spam" at the top.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-a-new-tv-smart-tv-basics-2026',
    title: 'How to Set Up a New Smart TV',
    excerpt:
      'Unbox safely, connect to Wi-Fi, sign into Netflix or Prime Video, and adjust the picture and sound. The on-screen setup wizard guides you through most of it.',
    category: 'entertainment',
    tags: [
      'smart tv',
      'tv setup',
      'netflix',
      'streaming',
      'wi-fi',
      'hdmi',
      'remote control',
      'seniors',
    ],
    readTime: '9 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `A new smart TV can feel overwhelming before you turn it on. There are cords to connect, apps to sign into, and a remote with what seems like too many buttons. This guide takes you through every step in plain language, starting with getting the TV out of the box and ending with watching your first show.

The encouraging news: every major smart TV brand — Samsung, LG, Sony, TCL, Roku TV, Amazon Fire TV — includes a setup wizard. When you first power on the TV, it walks you through each step with on-screen instructions. You do not need to memorize anything beforehand. This guide helps you understand what each step is asking so you are not surprised.

**Choosing the right TV size before you buy**

If you have not purchased your TV yet, here is a practical rule of thumb for sizing. Measure the distance (in feet) between your couch and where the TV will sit. Multiply that distance by 8, and you get the recommended screen size in inches. For example, if you sit 8 feet away, look for a TV around 55 to 65 inches. Sitting too close to a screen that is too large can cause eye strain. Sitting too far from one that is too small means straining to read text.

Most living rooms with a couch 8 to 10 feet from the wall do well with a 55-inch TV. A bedroom with a viewing distance of 5 to 6 feet is more comfortable with a 40 to 50-inch screen.

**What "smart TV" means**

A smart TV is a television that connects to the internet, the same way your phone does. Once connected, it can run apps — Netflix, Amazon Prime Video, YouTube, Hulu, Disney+, and many others — without a separate streaming device. Many smart TVs also come with apps pre-installed (you will see them on the home screen when the TV starts up).

If you also have a cable or satellite box, a streaming stick (like a Roku or Amazon Fire Stick), or a DVD player, you connect those devices through the HDMI ports on the back or side of the TV. HDMI is the standard rectangular connector that carries both video and audio through a single cord.

**What you will need before starting**

- Your Wi-Fi network name and password (check the label on your router — the box your internet provider gave you — if you are unsure)
- The email address and password for any streaming services you want to use (Netflix, Prime Video, etc.)
- A pen and paper to write things down as you go
- Someone to help lift the TV out of the box — modern TVs are thin and lighter than older models but can still be awkward to handle alone

**After the initial setup**

Take a few minutes to adjust the picture settings. Most TVs ship from the factory in "Vivid" or "Dynamic" mode — a very bright, blue-tinted setting designed to stand out in a store. In your home, this setting often looks harsh. Look for a picture mode called "Movie," "Cinema," or "Filmmaker Mode" and select it. This setting is calibrated to show colors as they were originally intended and is much easier on the eyes for long viewing sessions.

For sound, the built-in speakers on flat-screen TVs are often thin-sounding because there is not much space inside the slim frame for speakers. If voices sound muffled or hard to understand, look for a setting called "Speech Enhancement," "Clear Voice," or "Dialogue Boost" in the sound settings. Turning it on can make a noticeable difference without buying a soundbar.

Source: Consumer Reports — TV Buying Guide (consumerreports.org) and Samsung Support — Smart TV Setup (samsung.com/us/support/).`,
    steps: [
      {
        title: 'Unbox the TV safely — do not lift it alone',
        content:
          'Large TVs are best moved by two people. Slide the box onto the floor before opening it. Lift the TV from the sides, not the screen — the screen is fragile and pressing on it can damage it. Lay the TV face-down on a soft surface (the foam it came in works well) while you attach the stand legs, if it has them. Tighten the stand screws firmly so the TV does not wobble.',
        tip: 'Quick Tip: Keep the box and packaging for at least 30 days in case you need to return the TV. If you ever need to move, having the original box makes transport much safer.',
      },
      {
        title: 'Connect your cable box, streaming device, or antenna using HDMI',
        content:
          'HDMI is a flat, slightly wider-than-a-USB connector. If you have a cable or satellite box, plug one end of an HDMI cable into the back of that box and the other end into an HDMI port on the back or side of the TV. The HDMI ports are labeled HDMI 1, HDMI 2, etc. Remember which number you plugged into — you will need to switch the TV\'s input to that number later. If you have a Roku stick, Amazon Fire Stick, or Google Chromecast, plug it into any open HDMI port.',
        tip: 'Quick Tip: Most TVs include one HDMI cable in the box. If yours did not, any standard HDMI cable from a hardware store works — you do not need an expensive brand.',
      },
      {
        title: 'Plug in the power cord and turn on the TV',
        content:
          'Plug the power cord into the back of the TV and then into the wall. Press the power button on the remote — it is usually the button at the very top. The TV will show a startup screen and then begin the setup wizard. If the remote came with batteries already installed, it should work immediately. If not, open the battery compartment on the back of the remote and insert the AA or AAA batteries that came in the box, matching the + and - ends to the diagram inside.',
      },
      {
        title: 'Follow the on-screen setup wizard',
        content:
          'The setup wizard will appear automatically and guide you through the initial steps: selecting your language, choosing your country (United States), and confirming your time zone. Use the arrow buttons on the remote to move between options and press OK or Enter to confirm each one. Take it one screen at a time — there is no time pressure.',
        tip: 'Quick Tip: Write down each answer you select so you can remember your choices if you need to redo the setup later.',
      },
      {
        title: 'Connect the TV to your home Wi-Fi network',
        content:
          'The setup wizard will ask you to connect to Wi-Fi. Your TV will search and display a list of nearby networks. Find your home network name in the list (it is the same name you see when you connect your phone to Wi-Fi) and select it. You will then be asked to enter your Wi-Fi password. Use the on-screen keyboard and the remote\'s arrow and OK buttons to type each character. Wi-Fi passwords are case-sensitive, so check the exact capitalization on your router label.',
        warning:
          'If your Wi-Fi password is not working, double-check that you are reading capital letters and numbers correctly from the router label. The number "0" and the letter "O" look similar — the password label on most routers uses a different font to tell them apart.',
      },
      {
        title: 'Sign in to your streaming services',
        content:
          'Once connected to Wi-Fi, the wizard (or the TV home screen) will prompt you to sign in to streaming apps. Select the app you want — for example, Netflix — and enter your email address and password using the on-screen keyboard. If you do not have a Netflix account yet, you can create a free trial at netflix.com on your phone or computer first, then sign in on the TV. Repeat this for each service you use (Prime Video, Hulu, Disney+, etc.).',
        tip: 'Quick Tip: If typing on the TV remote feels slow, many streaming services let you activate the TV by entering a short code at their website on your phone instead of typing a full email and password. Look for a "Sign in with a code" or "Activate" option on the TV screen.',
      },
      {
        title: 'Adjust the picture and sound settings',
        content:
          'After setup, go to the TV\'s Settings menu (usually a gear icon on the remote or home screen). Under Picture, change the mode from "Vivid" or "Dynamic" to "Movie," "Cinema," or "Filmmaker" — this looks much more natural at home. Under Sound, look for "Clear Voice," "Speech Enhancement," or "Dialogue Boost" and turn it on if voices sound hard to hear. These two adjustments make the biggest difference in everyday viewing comfort.',
        tip: 'Quick Tip: The picture and sound settings vary slightly by brand. If you cannot find them, search "[your TV brand] how to change picture mode" on Google — each brand posts its own instructions on YouTube and its support website.',
      },
      {
        title: 'Switch inputs to use your cable box or streaming stick',
        content:
          'To watch cable TV or use a streaming stick you connected by HDMI, press the Input or Source button on your remote (sometimes labeled with a rectangle with an arrow pointing in). A list of inputs will appear (HDMI 1, HDMI 2, etc.). Select the input that matches where you plugged in your device. The TV will switch to that device and you should see its picture on screen.',
      },
    ],
  },
];
