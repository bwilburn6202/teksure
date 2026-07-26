// guides-batch-327 — Content cycle 2026-07-25 (continuation of the Day-2 sprint task, run at real-calendar Day 74)
// Topics: iOS 18 Photos Clean Up; ChromeOS Flex on old laptops; Xfinity/Comcast auto-renewal;
// Google Family Group photo sharing; Netflix account sharing rules 2026;
// Nest Doorbell (Battery, 2nd gen) setup; Zelle scam 2026 refund rules; Jury duty phone scam

import type { Guide } from './guides';

export const guidesBatch327: Guide[] = [
  {
    slug: 'iphone-photos-clean-up-remove-strangers',
    title: 'iPhone Photos Clean Up — Erase a Stranger From Your Vacation Photo',
    excerpt: 'The iOS 18 Photos app has a hidden Clean Up tool that removes strangers, cars, and clutter from any picture. Here is how to find and use it.',
    category: 'phone-guides',
    tags: ['iphone', 'photos', 'ios 18', 'clean up', 'apple intelligence', 'editing'],
    readTime: '5 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `You take a perfect photo of your granddaughter at the Grand Canyon and there is a stranger walking through the background. Or a tourist with a selfie stick. Or a trash can. In iOS 18 and later, Apple\'s Photos app has a Clean Up tool that removes those distractions with a single brushstroke.

Clean Up is powered by Apple Intelligence and runs on-device on iPhone 15 Pro and every iPhone 16 model. It never sends your photos to Apple\'s servers — the editing happens entirely on your phone. There is no fee, no subscription, and no watermark visible on the photo.

This guide walks through where to find Clean Up (it is not obvious), how to remove a person or object in three taps, and what to do when the tool leaves a smudge behind.

(Sources: Apple Support — Clean Up in Photos, support.apple.com/guide/iphone/edit-photos; Apple Intelligence, apple.com/apple-intelligence)`,
    steps: [
      {
        title: 'Check that Clean Up is available on your iPhone',
        content: 'Clean Up requires an iPhone 15 Pro, iPhone 15 Pro Max, or any iPhone 16 model (16, 16 Plus, 16 Pro, 16 Pro Max) running iOS 18.1 or later. To check: Settings > General > About > look at Model Name. If it says anything else, Clean Up will not appear as an option in the Photos app.',
        tip: 'Quick Tip: If your iPhone does not support Clean Up, free apps like Snapseed (from Google) offer a similar "Healing" tool that works on any iPhone.',
      },
      {
        title: 'Turn on Apple Intelligence if you have not already',
        content: 'Settings > Apple Intelligence & Siri > toggle Apple Intelligence on. The phone downloads the AI model in the background — a one-time step that takes about 10 minutes on Wi-Fi. You need at least 7 GB of free storage on your iPhone.',
      },
      {
        title: 'Open the photo you want to fix',
        content: 'Open the Photos app. Find your photo — either by scrolling the Library or searching (tap the search magnifying glass at the bottom and type a keyword like "Grand Canyon"). Tap the photo to open it full screen. Tap the Edit button at the bottom-right.',
      },
      {
        title: 'Tap Clean Up',
        content: 'In the edit toolbar at the bottom, scroll horizontally through the icons until you see the Clean Up icon (a paintbrush with sparkles). Tap it. The first time you use it, iOS shows a short "how to use" explanation — tap Continue. The photo now shows a highlighted overlay wherever the AI thinks there is a person or object it can remove — walking strangers, cars, litter, cables.',
        tip: 'Quick Tip: If nothing is highlighted, the AI did not find anything obvious. You can still brush over any area manually — see the next step.',
      },
      {
        title: 'Remove a suggested person or object with one tap',
        content: 'If iOS highlighted the object you want to remove — a stranger, a tourist, a trash can — tap it. The object disappears and Clean Up fills the background using AI. If the result looks good, tap Done at the top-right. If not, tap the Undo arrow (at the top) to reverse it.',
      },
      {
        title: 'Brush over anything the AI missed',
        content: 'For objects Clean Up did not highlight, use your finger to draw over them. You can circle around a person, brush across a power line, or dab a small blemish. The moment you lift your finger, Clean Up processes the area. If the removed spot has a visible seam or smudge, tap Undo and try again with a slightly different brush stroke — bigger, smaller, or including a bit more of the surrounding area.',
        tip: 'Quick Tip: Complicated backgrounds (bushes, crowds, patterns) are harder for the AI. Simple backgrounds (sky, sand, snow, plain wall) work almost perfectly every time.',
      },
      {
        title: 'Save your cleaned-up photo',
        content: 'When you are happy with the result, tap Done at the top-right. Your original photo is preserved — Clean Up saves a new edited version. To see the original at any time, open the photo, tap Edit, then tap Revert (bottom-right) > Revert to Original. You can toggle between the two whenever you want.',
      },
      {
        title: 'Share the cleaned photo without the AI badge',
        content: 'Apple embeds an "edited with AI" tag in the photo\'s metadata so viewers can tell it was retouched. This tag does not appear as anything visible on the photo itself. When you text or email it, the recipient sees a normal photo. If you upload it to Instagram or Facebook, the AI tag is preserved in the file — this is intentional and required by the C2PA content authenticity standard.',
        warning: 'Never Clean Up a photo you plan to use in court, an insurance claim, or a legal document. Those uses need the unedited original.',
      },
    ],
  },
  {
    slug: 'chromeos-flex-revive-old-windows-laptop',
    title: 'ChromeOS Flex — Turn an Old Windows Laptop Into a Fast New Chromebook',
    excerpt: 'Google\'s free ChromeOS Flex turns a slow 10-year-old laptop into a fast, safe browsing machine. Here is how to install it in about 45 minutes.',
    category: 'windows-guides',
    tags: ['chromeos flex', 'google', 'old laptop', 'chromebook', 'free', 'revive'],
    readTime: '10 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Intermediate',
    body: `Windows 7, Windows 8, and even early Windows 10 laptops usually stop feeling usable after 5 to 8 years. They take forever to boot, browse the web slowly, and stop receiving security updates. Most end up in a closet or a landfill.

ChromeOS Flex is Google\'s free replacement operating system for old laptops. It runs Google\'s Chrome browser and a limited set of apps — mostly websites and Chrome extensions — on almost any 10-year-old PC. It boots in about 10 seconds, uses a fraction of the memory Windows does, and receives automatic security updates for years.

For a senior who mostly uses their laptop for email, YouTube, banking, and news, ChromeOS Flex is often better than buying a new $500 Chromebook. Zero cost, five extra years of life from the same laptop.

This guide walks through checking whether your laptop qualifies, making a USB installer, and installing the operating system without losing anything on your other devices.

(Sources: Google ChromeOS Flex — chromeos.google/products/chromeos-flex; Google Support — support.google.com/chromeosflex)`,
    steps: [
      {
        title: 'Check whether your laptop is officially supported',
        content: 'Go to chromeos.google/products/chromeos-flex/certified-models on any computer. The page lists every officially tested laptop. Search by brand and model. If your model is listed, ChromeOS Flex is guaranteed to work. If not, it may still work. Google supports the install on almost any x86-64 laptop with 4 GB of RAM and 16 GB of storage made after 2010. Chromebooks themselves cannot install ChromeOS Flex (they already run ChromeOS).',
        warning: 'ChromeOS Flex does not run Microsoft Word, Excel, iTunes, Photoshop, or any Windows-only program. It runs websites and Chrome apps only. If you need Word installed locally, ChromeOS Flex is not for you — use Windows 11 or buy a new PC instead.',
      },
      {
        title: 'Back up anything on the laptop first',
        content: 'Installing ChromeOS Flex erases everything on the laptop hard drive. Before you start, copy any photos, documents, or files you want to keep to: an external USB drive, a cloud service like Google Drive or OneDrive, or another PC. Once installation begins, there is no undo. Check your Documents, Pictures, Desktop, Downloads, and any custom folders you created.',
        tip: 'Quick Tip: If you cannot boot into Windows anymore because it is too slow, you can still copy files off — insert a USB drive, wait 60 seconds, drag and drop what you need, eject, and only then install ChromeOS Flex.',
      },
      {
        title: 'Get a USB stick — 8 GB or bigger',
        content: 'You need a USB drive to install ChromeOS Flex. Any USB stick 8 GB or larger will work. USB 3.0 (blue plug) is faster than USB 2.0 (black plug), but either works. The USB will be erased during setup, so make sure you copy anything on it first. If you do not have one, an 8 GB USB drive is about $6 at Walmart, Best Buy, or Amazon.',
      },
      {
        title: 'Install the Chromebook Recovery Utility on another computer',
        content: 'You need a working computer (any Windows, Mac, or Chromebook) to make the installer USB. Open the Chrome browser. Go to chrome.google.com/webstore. Search "Chromebook Recovery Utility." Click Add to Chrome. When installation finishes, click the puzzle icon in the top-right of Chrome and click Chromebook Recovery Utility to launch it.',
      },
      {
        title: 'Build the ChromeOS Flex USB',
        content: 'In the Chromebook Recovery Utility: click Get started. Click Select a model from a list. Manufacturer: choose Google ChromeOS Flex. Product: choose ChromeOS Flex. Click Continue. Insert the USB drive. Select it from the dropdown. Click Continue > Create now. The utility downloads about 3 GB and writes it to the USB. Takes 15 to 30 minutes depending on internet speed and USB speed. When it says "Success," remove the USB.',
      },
      {
        title: 'Boot the old laptop from the USB',
        content: 'Plug the USB into the old laptop. Turn the laptop off. Turn it back on and right away press the boot-menu key repeatedly — the key varies by brand: Dell = F12, HP = F9, Lenovo = F12, Toshiba = F12, Asus = Esc, Acer = F12. If none of those work, look up "boot menu key" and your laptop brand. When the boot menu appears, use the arrow keys to select the USB drive (may show up as "UEFI USB" or by the USB brand name). Press Enter.',
        tip: 'Quick Tip: If the boot-menu key does not work, you may need to enter the BIOS (press Delete, F2, or F10 at startup) and change the boot order to try USB first. Google "how to boot from USB" + your laptop brand for step-by-step help.',
      },
      {
        title: 'Try ChromeOS Flex without installing first',
        content: 'The USB boots into a "try first" mode. You can browse, sign in to Google, and test everything — WiFi, sound, keyboard, trackpad — without erasing Windows. Spend 15 minutes making sure everything works before you install. If sound does not work, WiFi does not work, or the screen flickers badly, do not install. ChromeOS Flex is not compatible with this laptop.',
      },
      {
        title: 'Install ChromeOS Flex over Windows',
        content: 'If the try-first test went well, click the clock/battery area at the bottom-right corner. Click Install CloudReady 2.0 or Install ChromeOS Flex. Confirm you want to erase the drive. Type "install" if prompted. The install takes about 15 to 20 minutes. When it says complete, remove the USB and restart. On first boot, sign in with your Google account. Set a strong PIN or password. You are done.',
        warning: 'Do NOT interrupt the installation. If the power goes out mid-install, the laptop will not boot. Plug the laptop into power for the install. Do not close the lid. Do not touch anything until it says complete.',
      },
      {
        title: 'What to do first with your revived laptop',
        content: 'Bookmark the sites you use every day (Gmail, YouTube, your bank, your news source). Chrome asks if you want to sync — say yes, and any bookmarks from your other devices come over. Install Chrome extensions from the Chrome Web Store. Set your background: right-click the desktop > Set wallpaper. Adjust text size if the screen feels small: Ctrl and + zooms in on any page.',
      },
      {
        title: 'How long support lasts and what to do when it ends',
        content: 'Google supports each ChromeOS Flex install for at least 5 years of automatic updates. After that, the laptop will keep working but will stop getting security updates. When that happens, either switch to a browsing-only Linux distribution or retire the laptop. For most seniors, a 15-year-old laptop that has already had 5 free extra years is a good result — recycle it and buy a real Chromebook for $200.',
      },
    ],
  },
  {
    slug: 'xfinity-comcast-auto-renewal-traps-avoid',
    title: 'Comcast/Xfinity Auto-Renewal Traps — How to Cancel Add-ons You Never Signed Up For',
    excerpt: 'Xfinity often auto-adds paid features to your bill after promotional periods end. Here is how to find them and cancel without a phone call.',
    category: 'financial-tech',
    tags: ['xfinity', 'comcast', 'cable bill', 'auto-renewal', 'billing', 'consumer rights'],
    readTime: '8 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `Xfinity (owned by Comcast) has some of the highest customer complaints in the FCC\'s public database for one reason: recurring add-on charges. Common examples: a "free trial" of Peacock Premium that becomes $12/month after 30 days, an xFi Complete WiFi upgrade that adds $25/month, a "premium technician visit" that keeps auto-billing, and Comcast Business voice lines that keep charging after a service change.

You do not need to call Comcast to cancel these. They can be canceled from the Xfinity website or app in about 10 minutes. This guide walks through the four places to look, the exact clicks to cancel each one, and how to get a refund if you were charged for something you did not use.

(Sources: Xfinity Support — xfinity.com/support; FCC Consumer Complaints Center — consumercomplaints.fcc.gov)`,
    steps: [
      {
        title: 'Sign in to your Xfinity account',
        content: 'Open a browser. Go to xfinity.com. Click Sign In at the top-right. Enter your Xfinity ID (usually your email or mobile number) and password. If you have not signed in before or forgot the password, tap "Forgot password" to reset it — a text or email arrives with instructions.',
      },
      {
        title: 'Find the "Services" or "Subscriptions" section',
        content: 'After signing in, click the Account menu (top-right, your name). Click "Services" or "My Services." You see a list of everything Comcast charges you for: Internet, TV, Voice/Home Phone, Mobile, Home Security. Below that section, look for "Add-ons," "Premium Channels," or "Included Subscriptions." That is where the surprise charges hide.',
        tip: 'Quick Tip: If you use the Xfinity app on your phone, the equivalent path is tap the person icon > Account and Billing > Services > Add-ons.',
      },
      {
        title: 'Cancel Peacock, Netflix, and other premium video add-ons',
        content: 'The most common surprise charge is a premium streaming service (Peacock Premium, Paramount+, Showtime, Starz, Max) that started as a free trial. In the Add-ons or Premium Channels list, find the streaming service. Click it. Click "Remove," "Cancel," or "Manage subscription." Confirm the cancellation. The service continues through the end of the current billing month. You do not lose access right away.',
      },
      {
        title: 'Cancel xFi Complete if you rent an Xfinity router',
        content: 'xFi Complete is Xfinity\'s $25/month bundle for xFi Advanced Security, Data Overage protection, and a "free" gateway rental every three years. If you own your own router (Netgear, Linksys, Asus, TP-Link), you do not need xFi Complete at all. To cancel: Account > Services > Internet > xFi Complete > Remove. If you have been renting a Comcast box, you can return it at any Xfinity store for a $15/month savings.',
        warning: 'If you cancel xFi Complete but still have a rented Comcast gateway, you will keep paying the standard rental fee ($15/month). Buy a router for $75 and return the rental to break even in 5 months.',
      },
      {
        title: 'Cancel home phone lines you do not use',
        content: 'Many older Xfinity customers still have a Comcast Voice line ($20-$30/month) they no longer use because they only use their cell phone. To cancel: Account > Services > Voice > click the line > Remove. If your bundle includes Voice, canceling might change your Internet or TV rate — Comcast asks you to confirm. Usually the total bill drops by $15-$25 per month.',
      },
      {
        title: 'Cancel the "premium tech support" upsell',
        content: 'Xfinity offers a $10-$15/month "premium technician" subscription (sometimes called Signature Support). It gives you access to phone support with a real person and free service calls. If you rarely call support, cancel it. Account > Services > "Premium Support" or scroll the Add-ons list > Remove.',
      },
      {
        title: 'Cancel Xfinity Mobile lines for people no longer on your plan',
        content: 'If you added Xfinity Mobile lines for family who have since switched carriers, those lines can keep charging you. Account > Xfinity Mobile > "Manage lines." Any line marked "Active" is still costing you. Click the line > "Transfer or remove line." Follow the porting-out instructions if the person needs to keep the phone number, otherwise cancel outright.',
      },
      {
        title: 'Ask for a credit if you were charged for something you did not use',
        content: 'Once you have canceled the add-ons, request a refund for previous months. In the Xfinity Assistant chat (bottom-right of xfinity.com), type "I need a refund for [add-on name]." The chatbot escalates you to a live agent within 5 minutes. Explain: "I was charged for [X] but I never used it and want to cancel and get a refund for the last [Y] months." Xfinity often issues 1-3 months of credit for legitimate cases without argument.',
        tip: 'Quick Tip: If the chat agent refuses, file an FCC complaint at consumercomplaints.fcc.gov — takes 10 minutes, no cost. Comcast\'s executive response team almost always calls back within a week and offers a full refund. This works better than any phone escalation.',
      },
      {
        title: 'Set up a bill-change alert so surprises never happen again',
        content: 'Account > Notification preferences > enable "Bill amount changes." Xfinity will text you if the next bill is more than $5 different from the last one. This catches new add-ons within 30 days of the sneaky charge starting instead of a year later.',
      },
      {
        title: 'Keep your rate low at contract renewal',
        content: 'Every 12 or 24 months, your promotional rate ends and your bill jumps $30-$70/month. When that happens, use the "loyalty department" trick: call 1-800-XFINITY (or use the chat), say "I would like to cancel my service." You are transferred to Retention. Ask what promotional rate they can offer to keep you. They typically match a new-customer rate for another 12 months. If they refuse, cancel — you can restart the next day as a "new" customer at the promo rate.',
      },
    ],
  },
  {
    slug: 'google-family-group-shared-photos-setup',
    title: 'Google Family Group — Share Photos and Subscriptions With the People You Love',
    excerpt: 'A Google Family Group lets you share Google One storage, YouTube Premium, and photo albums with up to 5 family members. Here is how to set it up.',
    category: 'app-guides',
    tags: ['google', 'family group', 'google one', 'shared photos', 'youtube premium'],
    readTime: '7 min',
    thumbnailEmoji: '👨‍👩‍👧',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `A Google Family Group is a free feature that lets up to 6 people (yourself plus 5 others) share a single subscription: Google One cloud storage, YouTube Premium, YouTube Music, or the paid Google Nest features. It also unlocks two features you cannot get any other way: shared photo albums that update automatically when any family member adds a photo, and shared reminders and calendars across the family.

For seniors, the biggest wins are: (1) your adult child can share their 2 TB Google One plan with you at no extra cost so you have plenty of storage for photos and email, (2) you can share a "Grandkids" photo album that grows without anyone having to send you photos manually, and (3) you can share a family calendar so everyone sees the same doctor appointments and holidays.

This guide walks through creating the group, inviting family members, sharing a subscription, and setting up an auto-updating photo album.

(Sources: Google Family — families.google.com; Google Photos Help — support.google.com/photos)`,
    steps: [
      {
        title: 'Sign in to the account that will be the "family manager"',
        content: 'The family manager is the person whose subscription is shared with everyone else. That is usually the person paying for Google One or YouTube Premium. Open a browser. Go to families.google.com. Click "Get started" or "Create your family group." Sign in with the Google account paying for the subscription.',
        warning: 'Changing the family manager requires dissolving the group first. Choose carefully — usually it should be whoever pays the bill.',
      },
      {
        title: 'Add up to 5 family members by email',
        content: 'Click "Invite family members." Enter each person\'s Gmail address. They must have a Google account (any Gmail counts, or a Google account tied to another email). Click Send. Each invited person gets an email from Google. They click Accept in the email, sign in, and join the group. That is it. If someone in your family does not have a Gmail, they can create one at accounts.google.com/signup in 5 minutes and then accept the invitation.',
      },
      {
        title: 'Share a Google One storage plan with the family',
        content: 'If the family manager pays for Google One (100 GB, 200 GB, 2 TB, or larger), the plan can be shared. Go to one.google.com. Sign in. Click Settings (gear icon top-right). Click "Manage family sharing" > toggle "Share your storage with family" ON. Now every family member sees the shared storage in their own Google One account. They can use it for Gmail, Google Drive, and Google Photos backup.',
        tip: 'Quick Tip: Each family member has their own private storage bucket within the plan. Your daughter cannot see your photos even though you share the same 2 TB. Privacy is preserved.',
      },
      {
        title: 'Share YouTube Premium with the family',
        content: 'YouTube Premium Family covers up to 6 people and costs about $23-$25/month. If you already have Premium as an individual, you can upgrade to Family for less than $10 more and give ad-free YouTube to 5 others. Go to youtube.com/premium > Manage > Change plan > Family. Confirm. Every family group member now sees "You are on YouTube Premium Family" in their YouTube app on their own account.',
      },
      {
        title: 'Create a shared photo album with your family group',
        content: 'Open Google Photos on your phone or at photos.google.com. Tap "Library" at the bottom (Utilities on desktop). Tap Utilities > "Partner sharing" or Utilities > "Shared albums" > Create shared album. Give it a name like "Family 2026." Add existing photos or leave empty. Tap Share. Select the family members from your Google Family Group. Anyone in the album can now add photos, and everyone else sees the new photos automatically.',
      },
      {
        title: 'Auto-add specific people to a shared album',
        content: 'Google Photos can auto-add every new photo of a specific person to a shared album. Open the album > tap the three-dot menu > Options > "Add photos automatically." Choose one or more faces from your Google Photos face groups. Set a start date. From now on, whenever you take a photo that Google Photos recognizes as that person, it is automatically added to the album — no manual sharing needed.',
        warning: 'Face grouping requires "Face groups" to be enabled in Google Photos Settings > Face groups. This uses on-device processing — Google states this data is not shared outside your account.',
      },
      {
        title: 'Share a family calendar',
        content: 'Open Google Calendar. Click the three-dot menu next to "Family" (Google auto-creates this calendar when you make a Family Group). Click Settings and sharing. Anyone in the family group can view and add events by default. To adjust: change permissions per person. The family calendar is separate from your personal calendar — events do not mix by accident.',
      },
      {
        title: 'Add a family payment method',
        content: 'The family manager can set up a shared payment method — a credit card the family uses for apps, movies, or in-app purchases on Google Play. Every family member can charge to that card, subject to a "requires parental approval" toggle for purchases over a certain amount. Set it up at play.google.com/family. Optional but helpful if you buy digital gifts for grandkids.',
      },
      {
        title: 'Leaving or removing someone from the family group',
        content: 'A member can leave anytime: families.google.com > "Leave family." The family manager can remove someone: click their name > "Remove from family group." Note: once a family member is removed, they lose access to shared subscriptions right away but keep any files they saved to their personal Drive. A person can only be in one family group at a time — if your daughter is in her husband\'s family group, she cannot also be in yours.',
      },
    ],
  },
  {
    slug: 'netflix-account-sharing-rules-2026',
    title: 'Netflix Account Sharing in 2026 — What Costs Extra and What Does Not',
    excerpt: 'Netflix cracked down on password sharing in 2023. Here is what the rules are today and how to legally share your account with family.',
    category: 'entertainment',
    tags: ['netflix', 'streaming', 'account sharing', 'extra member', 'household'],
    readTime: '6 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `Between 2023 and 2025, Netflix rolled out strict password-sharing rules. If someone outside your household watches on your account, Netflix asks them to pay about $8/month as an "extra member" or start their own account. But there are still ways to legally share with adult children, grandchildren, and traveling family. You need to know the rules.

This guide covers what counts as your "household," how the "extra member" add-on works, how to watch on hotel and vacation TVs without triggering a block, and what to do when Netflix incorrectly says your normal home devices are outside your household.

(Sources: Netflix Help Center — help.netflix.com; Netflix Household Support — netflix.com/account/manage-devices)`,
    steps: [
      {
        title: 'Understand what counts as your Netflix "household"',
        content: 'A household is everyone who lives in your home and the devices that connect to your home WiFi. If your spouse, adult child living with you, or grandchild visits and uses your home WiFi, they are part of your household — no extra charge. If your adult son lives 200 miles away and watches at his house, he is NOT in your household even if you share the same last name. Netflix decides based on your WiFi network and IP address.',
      },
      {
        title: 'How much Netflix costs in 2026',
        content: 'Netflix plans (US, 2026): Standard with Ads about $7.99/month, Standard about $17.99/month (2 screens at once), Premium about $24.99/month (4 screens at once, 4K). All plans allow watching in your household at no extra charge. Extra members outside your household cost about $8/month each on Standard, about $8/month each on Premium (max 2 extra on Premium). The extra-member fee is added to your monthly bill. Prices are subject to Netflix\'s occasional adjustments — check help.netflix.com for the current amounts.',
      },
      {
        title: 'Add an extra member outside your household',
        content: 'Go to netflix.com. Sign in. Click your profile icon > Account. Under Extra Member, click "Add extra member." Enter the person\'s email. Netflix sends them an invitation. They accept and set up their own profile. Their monthly fee is added to your bill. They can only use one device at a time and cannot share their account further. This is the legal way to keep your adult child on your account after they move out.',
      },
      {
        title: 'What happens if someone tries to watch from outside your household without an extra member',
        content: 'Netflix detects the outside login within a few days. It sends the outside viewer a message: "It looks like you\'re not part of this account\'s household." They can either verify with a code (which only works for occasional travel — see the next step), buy a Netflix membership of their own, or ask you to add them as an extra member. Watching stops until one happens.',
      },
      {
        title: 'How to watch Netflix on vacation (without paying extra)',
        content: 'Netflix allows occasional travel. If you go on a vacation and sign in at a hotel or Airbnb, Netflix asks you to verify: a code goes to your email or phone tied to the account. Enter the code and you can watch for the length of your trip. This is meant for real travel, not permanent living. If you keep triggering the verification at the same non-home address, Netflix eventually blocks it and requires an extra member.',
        tip: 'Quick Tip: Before leaving on vacation, open Netflix once at home. This resets your "primary location" and reduces the chance of verification challenges during the trip.',
      },
      {
        title: 'What to do if Netflix says your home device is outside your household',
        content: 'Sometimes Netflix incorrectly flags your own TV, iPad, or laptop as outside the household. Common causes: your ISP changed your IP address, you use a VPN, or your smart TV connected to a neighbor\'s WiFi by accident. Fix: (1) On the device in question, connect to your home WiFi. (2) Sign out of Netflix. Sign back in. (3) When prompted, choose "Yes, this is my primary device." If it keeps happening, disable any VPN and check your smart TV\'s network settings.',
      },
      {
        title: 'How to see who is watching on your account',
        content: 'Netflix.com > sign in > profile icon > Account. Scroll to "Access and devices." A list appears: every device that used your account in the last 90 days with the location. If you see a device or location you do not recognize, click "Sign out of all devices" to force everyone off. Then change your password: Account > Password > Change. Anyone who was watching without your permission will have to re-request access.',
      },
      {
        title: 'Cancel Netflix without losing what you saved',
        content: 'Netflix keeps your profile, viewing history, and My List for 10 months after you cancel. If you sign back up within 10 months, everything is right where you left it. To cancel: Account > Cancel Membership > follow prompts. You keep access through the end of the current billing period. Come back anytime.',
      },
    ],
  },
  {
    slug: 'nest-doorbell-battery-2nd-gen-setup',
    title: 'Nest Doorbell (Battery, 2nd Gen) — Setup Walkthrough in 30 Minutes',
    excerpt: 'Google\'s newest wireless video doorbell installs without wiring. Here is how to mount it, connect to WiFi, and get useful notifications.',
    category: 'smart-home',
    tags: ['nest doorbell', 'google', 'video doorbell', 'smart home', 'setup', 'security'],
    readTime: '10 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Intermediate',
    body: `The Nest Doorbell (Battery, 2nd generation) is Google\'s $149-$179 wireless video doorbell. It records anyone who rings the bell, walks up, or moves within 20 feet of your door. It sends alerts to your phone. And it stores 3 hours of event history for free.

Setup takes about 30 minutes: mounting takes 10, connecting to the app takes 10, and adjusting notification settings takes another 10. You do not need existing doorbell wiring — the built-in battery lasts 2 to 6 months per charge depending on how much motion it sees.

This guide walks through unboxing, mounting, connecting to WiFi, and the four notification settings worth tweaking so you do not get an alert every time a car drives by.

(Sources: Google Store — store.google.com/product/nest_doorbell; Google Home Help — support.google.com/googlenest)`,
    steps: [
      {
        title: 'Charge the battery before you install',
        content: 'Unbox the doorbell. Plug it into the included USB-C cable and a wall charger (a phone charger works). Charge for 3 hours before installing — this makes sure you have a full 6 months of runtime from the start. The LED on the front turns solid green when charging is complete.',
      },
      {
        title: 'Install the Google Home app on your phone',
        content: 'On your iPhone: open App Store > search "Google Home" > tap Get. On Android: it is usually already installed, but check the Play Store to make sure it is current. Open the app. Sign in with the Google account you want to control the doorbell — usually the same one you use for Gmail. If you have never used Google Home, tap "Create a home" and give it a name (e.g., "My House").',
      },
      {
        title: 'Add the doorbell in the app before mounting',
        content: 'In the Google Home app: tap the + icon (top-left). Tap "Set up device" > "New device." Choose your home name. Scan the QR code on the back of the doorbell (the app opens your camera). Or type the setup code manually. The app connects to the doorbell via Bluetooth. It asks for your home WiFi name and password. Enter them. The doorbell joins your WiFi.',
        warning: 'The Nest Doorbell works best on 2.4 GHz WiFi networks. Most home WiFi routers offer both 2.4 GHz and 5 GHz — the app usually finds the 2.4 GHz automatically. If setup fails, temporarily disable the 5 GHz network on your router or ask your ISP to split the two networks into separate names.',
      },
      {
        title: 'Test the doorbell inside before mounting',
        content: 'Before drilling any holes, test everything inside. Press the button on the doorbell. Your phone should ring within 3 seconds and show the doorbell\'s camera view. Wave your hand in front of the camera. A motion notification should arrive in a few seconds. If both work, you are ready to mount. If not, review the WiFi connection or restart the doorbell (hold the button for 15 seconds).',
      },
      {
        title: 'Mount the doorbell on your front door frame',
        content: 'Hold the mounting bracket where you want the doorbell — about 4 feet up from the porch floor, angled so the camera sees the walkway. Mark the two screw holes with a pencil. Drill two 1/4-inch holes (use the included masonry bit for brick or stone). Insert the plastic wall anchors. Screw the mounting bracket to the wall with the two included screws. Click the doorbell onto the bracket. It snaps in place with a satisfying click.',
        tip: 'Quick Tip: If drilling is not an option (renter, brick you cannot touch, aluminum siding), the doorbell comes with a 3M adhesive pad. Clean the surface with alcohol, peel the pad, press hard for 30 seconds, then let cure overnight before mounting the doorbell.',
      },
      {
        title: 'Adjust motion detection to reduce false alerts',
        content: 'By default the doorbell alerts you every time it sees any motion — cars, birds, leaves. This gets old fast. In the Google Home app: tap the doorbell > Settings (gear icon) > Notifications. Turn on "Familiar faces" (recognizes people you have tagged, alerts you specifically when a family member is at the door) and "Package deliveries." Turn OFF "Vehicles" (unless you park close to the door). Turn OFF "Animals" unless you specifically care.',
      },
      {
        title: 'Create an "Activity Zone" so it only alerts on the walkway',
        content: 'Zones let you tell the doorbell to ignore motion in a specific area — like the street, the sidewalk, or a neighbor\'s yard. In the app: tap the doorbell > Settings > Activity zones > Create zone. Drag the corners to draw a shape around only your walkway and front porch. Save. Motion outside the zone is ignored, dramatically cutting false alerts.',
      },
      {
        title: 'Share the doorbell with your spouse or partner',
        content: 'In the Google Home app: tap the doorbell > Settings > Share access. Enter their Google email. They get an invitation. Once they accept, they get all the same notifications on their phone. They can also respond to the doorbell (talk to the visitor via the speaker) from their phone.',
      },
      {
        title: 'Decide whether to pay for Nest Aware',
        content: 'Free tier: 3 hours of event history, live view, alerts. Nest Aware (about $8/month or $80/year): 30 days of event history, 24/7 continuous recording (if plugged in), Familiar Face recognition, emergency call button. For most home users, the free tier is fine. Consider Nest Aware if you want to look back at yesterday\'s package delivery or if you specifically want the face recognition feature. Sign up at store.google.com/us/product/nest_aware.',
      },
      {
        title: 'Recharge the battery every 3 to 6 months',
        content: 'The Google Home app shows the current battery percentage. When it drops below 15%, an alert arrives. To recharge: press the tab on top of the doorbell to release it from the bracket. Bring it inside. Plug the USB-C cable into the port on the back. Charge for 3 hours. Reinstall. Total downtime: about 3.5 hours. Do this on a sunny day, ideally, so the doorbell is not offline during a shady evening.',
        warning: 'Do NOT leave the doorbell disconnected from WiFi for more than 24 hours. It stops recording motion events until reconnected. If you know you will be away and cannot recharge in time, unmount and recharge before you leave.',
      },
    ],
  },
  {
    slug: 'zelle-scam-2026-what-bank-covers',
    title: 'Zelle Scams in 2026 — What Your Bank Actually Refunds',
    excerpt: 'Zelle scam refund rules changed in 2024 and again in 2025. Here is what you can and cannot get your bank to reverse.',
    category: 'online-banking',
    tags: ['zelle', 'bank scam', 'refund', 'fraud', 'consumer rights', 'ftc'],
    readTime: '7 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `Zelle is the instant-transfer service built into most US bank apps. It moves money in seconds and cannot be canceled or reversed once sent. That speed is the appeal. And it is also why Zelle is the #1 scam channel of 2025-2026 according to the CFPB.

For years, banks refused to refund Zelle scams by pointing to fine print that said "you authorized the transfer." In June 2024, after Senate hearings and a CFPB lawsuit, the biggest banks (Bank of America, JPMorgan Chase, Wells Fargo, Truist, USAA, and Capital One) agreed to reimburse victims of "impostor scams" where someone posed as the bank, the government, or a company you trust. In 2025 that policy expanded to include some vendor-impersonation scams.

This guide explains what is covered, what is not covered, how to report a Zelle scam correctly, and what to say to your bank to get a refund without a fight.

(Sources: CFPB — consumerfinance.gov; FTC — reportfraud.ftc.gov; Early Warning Services / Zelle — zellepay.com/support)`,
    steps: [
      {
        title: 'Know what Zelle covers vs. what banks cover',
        content: 'Zelle itself covers almost nothing — if you sent money, Zelle considers the transfer authorized. What you are actually appealing to is the BANK, under Regulation E and the 2024 impostor-scam agreement. Banks are required to refund you for two categories: (1) transfers made by someone who took over your account without your permission, and (2) transfers you made because someone impersonated the bank, the government, a utility, or a service you trust.',
      },
      {
        title: 'Scams that ARE covered (impostor scams)',
        content: 'Bank refunds these under the 2024 policy: (1) Someone called claiming to be from your bank and said "we need to move your money to protect it." (2) Someone called claiming to be from the IRS, SSA, or a court and demanded payment. (3) Someone called claiming to be from your utility, cable company, or a specific retailer (Amazon, Best Buy) with a fake refund. (4) Someone hacked your online banking and sent Zelle transfers from your account.',
      },
      {
        title: 'Scams that are NOT covered (authorized transfers to a real person)',
        content: 'The bank will NOT refund you if: (1) You sold something on Facebook Marketplace and the buyer sent a fake payment confirmation but never actually paid. (2) You bought something on Craigslist and the item never arrived. (3) You sent money to a romance scammer you thought was your online boyfriend or girlfriend. (4) You sent money to a family member who convinced you they needed emergency cash. (5) You sent money to a rental scammer offering a fake apartment. These are considered "authorized push payment" fraud and the 2024 agreement does not cover them yet.',
        warning: 'The CFPB is pushing banks to cover these too, but as of mid-2026, the industry has not agreed. Do not rely on getting your money back for these scams.',
      },
      {
        title: 'What to do in the first 30 minutes after a Zelle scam',
        content: '(1) Open your bank app and screenshot the transaction — the amount, date, and recipient. (2) Call your bank\'s fraud line (number on the back of your debit card). Do NOT call the number in any text message that might be part of the scam. (3) Say clearly: "I was the victim of an impostor scam. Someone pretended to be [my bank / the IRS / a utility] and tricked me into sending Zelle." (4) Ask for a case number. Write it down. (5) Ask when a decision will be made — banks have 10 business days to respond under Reg E.',
      },
      {
        title: 'Also report the scam to two federal agencies',
        content: 'File a complaint at reportfraud.ftc.gov (takes 5 minutes). Also file at consumerfinance.gov/complaint against your bank if they are slow to respond. Filing at consumerfinance.gov almost always speeds up the bank\'s decision — banks are required to respond to CFPB complaints within 15 business days. Keep your case number handy for both.',
      },
      {
        title: 'What to say when the bank tries to deny your claim',
        content: 'The initial claim reviewer often says "you authorized the transfer, so we cannot refund it." Push back with the exact 2024 impostor-scam language: "This falls under the 2024 impostor scam reimbursement agreement — the scammer impersonated [my bank / a government agency / a merchant]. I am requesting reimbursement under that agreement." Ask for the claim to be escalated to a senior specialist. If they still refuse, mention that you have filed with the CFPB. Refusals usually flip to approvals at this stage.',
      },
      {
        title: 'How to reduce your Zelle risk going forward',
        content: '(1) In your bank app, set a daily Zelle limit — most banks let you cap it at $500 or $1,000. Anything higher must be manually approved by calling the bank. (2) Never send Zelle to someone you have not met in person. (3) If anyone calls claiming to be from your bank asking you to move money, hang up and call the bank yourself using the number on your card. (4) Real banks and real government agencies NEVER ask you to send Zelle. Anyone who does is a scammer.',
        tip: 'Quick Tip: Many banks now let you set a hold on Zelle transfers to new recipients — the first transfer to a new email or phone number waits 3 hours or requires a text-code confirmation. Turn this on in your bank app under Zelle > Settings > Limits & holds.',
      },
      {
        title: 'What to do if the bank still refuses after 30 days',
        content: 'Escalate: (1) File with your state\'s attorney general at usa.gov/state-attorney-general. (2) Submit a complaint to the OCC (occ.gov/topics/consumers-and-communities/complaints) if your bank is federally chartered. (3) Consider small claims court — up to $5,000-$10,000 depending on your state, no lawyer required, filing fee is usually under $75. Banks often settle out of court once the case is filed. (4) For amounts over $5,000, consult a consumer-rights lawyer at nacaonline.org (many offer free consultations for Reg E cases).',
      },
    ],
  },
  {
    slug: 'jury-duty-phone-scam-how-to-hang-up',
    title: 'The Jury Duty Phone Scam — Why It Works and How to Hang Up',
    excerpt: 'The fake jury duty warrant scam has scammed seniors out of over $200 million since 2022. Here is why it feels real and how to stop it.',
    category: 'safety-guides',
    tags: ['jury duty scam', 'phone scam', 'warrant', 'sheriff', 'ftc', 'fraud'],
    readTime: '5 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-07-25',
    lastVerifiedAt: '2026-07-25',
    difficulty: 'Beginner',
    body: `The jury duty phone scam has been the FTC\'s most-reported phone scam three years running. The pitch: you missed jury duty; there is a warrant out for your arrest; pay $2,000 in gift cards or by wire to the "sheriff" and the warrant will be canceled.

Since 2022, this scam has taken over $200 million from Americans, most of it from seniors. It works because scammers have gotten very good at making it sound official — real courthouse names, real sheriff-deputy titles, real case numbers, spoofed caller ID showing the actual sheriff\'s office phone number.

There is one thing you need to remember and everything else falls into place: no court, no sheriff, no government agency in the United States will ever call you and demand payment over the phone. Not for missed jury duty. Not for unpaid taxes. Not for anything. Ever.

This guide walks through why the scam feels real, the exact scripts scammers use, and the three sentences you can say to end any government-impersonation call in 10 seconds.

(Sources: FTC Consumer Alerts — consumer.ftc.gov; FBI Internet Crime Complaint Center — ic3.gov; National Center for State Courts — ncsc.org)`,
    steps: [
      {
        title: 'Understand the standard jury duty scam script',
        content: 'The caller identifies themselves as a deputy or investigator from your county sheriff. They know your name (bought from data brokers). They tell you: (1) You missed jury duty on [a specific date]. (2) A judge issued a "failure to appear" warrant. (3) You will be arrested at your home unless you pay the fine within 2 hours. (4) The fine is $1,500-$4,000, payable only in gift cards, cryptocurrency, or wire transfer. (5) They stay on the phone with you while you drive to a store to buy the gift cards.',
        warning: 'Real courts do not accept gift cards, cryptocurrency, or wire transfer for anything. Ever. If the "payment method" is a gift card, it is 100% a scam, no exceptions.',
      },
      {
        title: 'Why the caller ID looks real',
        content: 'Modern scammers use "caller ID spoofing" — free software makes any incoming call display any number they want. They pick the actual phone number of your local sheriff\'s office. You look at your phone and it says "SHERIFF DEPT — DO NOT MISS." This is why you cannot use caller ID to decide if a call is real. If a call from any government agency asks for payment, the caller ID does not matter — hang up.',
      },
      {
        title: 'The three sentences that end any scam call',
        content: '(1) "I do not do business over the phone. I will call you back at the number on your official website." (2) "I need to hang up and verify this call. What is your badge number and the case number?" (3) "This is not how real courts contact people. Goodbye." Any real government caller will accept #1 without argument. Any scammer will get angry, threaten you, or try to keep you on the line. That anger is confirmation. Hang up.',
        tip: 'Quick Tip: Print these three sentences on a card and keep it by your phone. When you are in a real scam call, you are frightened. Reading the sentences aloud is easier than remembering them.',
      },
      {
        title: 'What real jury duty communication looks like',
        content: 'Real jury duty summons arrive by U.S. Mail on official letterhead about 4-6 weeks before your service date. You get a paper form to fill out and return. If you miss the date, the court sends another letter with a reschedule option. The court does NOT call you. If you truly missed jury duty and the court is upset, they send a "failure to appear" summons in the mail — again on official letterhead — asking you to come to a hearing. There is no phone call. There is no arrest warrant for missing one day of jury duty.',
      },
      {
        title: 'What to do if a scammer says a warrant is out for your arrest',
        content: 'Hang up. Then, if you are worried, verify from the real source: (1) Google your county name + "clerk of court" or "sheriff\'s office." Call the number listed on the official .gov website. Ask: "Is there an active warrant for [your name and date of birth]?" They will look you up. If nothing exists, the call was a scam. (2) In most states you can also check yourself at your county\'s public records website (county name + "court records lookup"). (3) Filing a "wellness check" on yourself is possible — sheriff\'s deputies can come by to confirm no warrant exists, but this is overkill and usually not needed.',
      },
      {
        title: 'Report the scam call',
        content: 'File a report at reportfraud.ftc.gov (5 minutes, no account needed). Also report to your local sheriff\'s office non-emergency line. They track how many people in your county are getting the same call. The FBI accepts reports at ic3.gov if any money was lost. Blocking the number on your phone does not help much because scammers use a different number every call, but if you use a call-blocking app like Nomorobo or the free RoboKiller trial, they add these numbers to a shared block list within hours.',
      },
      {
        title: 'Set your phone to only ring for people you know',
        content: 'On iPhone: Settings > Phone > Silence Unknown Callers > toggle On. Any number not in your contacts goes straight to voicemail. Real people leave a voicemail. Scammers rarely do. On Android: Phone app > three-dot menu > Settings > Caller ID & spam > toggle "See caller and spam ID" and "Filter spam calls." On Samsung, it is Phone > Settings > Block numbers > Block unknown numbers. This one change stops about 90% of scam calls from ever ringing.',
        tip: 'Quick Tip: If you are worried about missing an important call from a doctor or a repair person, ask them to text you first when they plan to call. Real callers with real business are happy to do that.',
      },
    ],
  },
];
