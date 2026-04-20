// TekSure Guides Batch 17 — 22 guides covering: Wi-Fi calling, Google One,
// hacked social media recovery, Alexa shopping, Amazon order tracking, 5G
// explained, erasing phone before selling, refurbished phones, TV remote app,
// group FaceTime, offline maps, iPhone camera modes, digital photo frame,
// lock screen security, emergency weather alerts, caregiver tech monitoring,
// smart home routines, night mode camera, Find My AirPods, Gmail inbox,
// Facebook memories download, website blocking.
import type { Guide } from './guides';

export const guidesBatch17: Guide[] = [
  {
    slug: 'wifi-calling-enable-guide',
    title: 'How to Enable Wi-Fi Calling on Your Phone',
    excerpt:
      "Wi-Fi calling lets you make and receive calls over your home internet when your cell signal is weak or unavailable — here's how to turn it on.",
    category: 'essential-skills',
    tags: ['wifi calling', 'phone signal', 'cell coverage', 'iphone', 'android', 'carrier'],
    readTime: '4 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Wi-Fi calling is a feature available on most modern smartphones that routes your calls and text messages through your home Wi-Fi internet connection instead of the cellular network. This is extremely useful if you live in an area with weak cell signal, a basement apartment, or a building with thick walls that block cell coverage.\n\nWhen Wi-Fi calling is enabled, your phone automatically switches to Wi-Fi for calls when the cell signal is poor and switches back to cellular when the signal improves. You do not need to do anything manually — it happens in the background. The call quality is often better than a weak cellular call, and calls use your regular cellular minutes (you are not making an internet call like Skype or FaceTime).\n\nWi-Fi calling is supported by all major carriers (Verizon, AT&T, T-Mobile) and most smaller carriers. It is available on iPhones (model 5c and newer) and most Android phones from the last several years. Your carrier may need to have this feature enabled on your account before it works on your phone.`,
    steps: [
      {
        title: 'Enable Wi-Fi calling on iPhone',
        content:
          "Go to Settings → Phone → Wi-Fi Calling → turn on \"Wi-Fi Calling on This iPhone.\" A confirmation screen appears explaining that in an emergency, your registered address is used for 911. Confirm by tapping \"Enable.\" You will be asked to confirm or enter your address for emergency services. The status bar at the top of your phone will show your carrier name followed by \"Wi-Fi\" when Wi-Fi calling is active.",
        tip: 'Quick Tip: Wi-Fi calling uses your home address for 911 emergency calls. Make sure your registered address is accurate — especially important if you move.',
      },
      {
        title: 'Enable Wi-Fi calling on Android',
        content:
          "On most Android phones: go to Settings → Network & Internet → Mobile network → Wi-Fi calling → toggle ON. On Samsung phones: Settings → Connections → Wi-Fi Calling → toggle ON. On Google Pixel: Phone app → three-dot menu → Settings → Calls → Wi-Fi calling → ON. The exact path varies by Android brand and version — if you can't find it, search \"Wi-Fi calling\" in your Settings search bar.",
        tip: "Quick Tip: If the Wi-Fi Calling option is grayed out or missing, contact your carrier. Some plans require Wi-Fi Calling to be enabled on your account first — a quick call or online chat with customer service can activate it.",
      },
      {
        title: 'Confirm it is working',
        content:
          "Once enabled, you should see your carrier name plus \"Wi-Fi\" in the status bar when you are connected to Wi-Fi and Wi-Fi calling is active (for example, \"Verizon Wi-Fi\" or \"AT&T Wi-Fi\"). Make a test call to confirm quality. Wi-Fi calling also works for text messages on most carriers. If you are having a call over Wi-Fi and walk outside the range of your Wi-Fi, the call may hand off to cellular — this usually happens smoothly with only a brief pause.",
      },
      {
        title: 'Use Wi-Fi calling for international visits',
        content:
          "Wi-Fi calling is also valuable when traveling internationally. If you have a strong Wi-Fi connection at your hotel or a family member's home abroad, you can call US numbers from your US plan at no extra charge — no international roaming needed. Enable Wi-Fi calling before you travel and make sure your phone is set to prefer Wi-Fi calling when available.",
        warning:
          '911 emergency calling from abroad via Wi-Fi calling routes to US emergency services, not local emergency services. In an emergency outside the US, dial the local emergency number (112 in most of Europe, 999 in the UK) from any phone.',
      },
    ],
  },

  {
    slug: 'google-one-storage-guide',
    title: 'How to Use Google One to Manage Your Storage',
    excerpt:
      "Google gives every account 15GB of free storage shared across Gmail, Google Drive, and Google Photos. Here's how to check what's using it and get more space if needed.",
    category: 'app-guides',
    tags: ['google one', 'google storage', 'gmail storage', 'google drive', 'google photos'],
    readTime: '4 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google gives every Google account 15 gigabytes (GB) of free cloud storage. This storage is shared between three Google services: Gmail (emails and attachments), Google Drive (documents, files, and presentations), and Google Photos (if you back up photos in "Original quality").\n\nWhen that 15GB fills up, you will stop receiving new emails, Google Photos will stop backing up, and you won't be able to save new files to Google Drive. This is a common frustration — especially for people who have used Gmail for many years and accumulated thousands of emails with large attachments.\n\nGoogle One is the service that manages this storage and lets you purchase more if needed. Plans start at $2.99/month for 100GB, which is enough for most people for years. This guide shows you how to see what is using your storage and how to free up space without paying.`,
    steps: [
      {
        title: 'Check how much storage you are using',
        content:
          "Go to one.google.com on any browser or open the Google One app on your phone. The main screen shows a colored bar indicating how much of your 15GB is used and which service is using the most. Click or tap \"Storage\" for a breakdown: Gmail, Drive, and Photos each show their usage separately. This helps you identify where most of your storage is going.",
        tip: "Quick Tip: You can also see your storage status at the bottom of your Gmail inbox on a computer — look for the small text that says \"X GB of 15 GB used\" near the bottom of the page.",
      },
      {
        title: 'Free up space in Gmail',
        content:
          'Email attachments — especially photos and videos that people have emailed you over the years — are often the biggest storage users. In Gmail, search for large emails with: size:10MB (finds emails over 10MB). Read the email list and delete ones you no longer need, especially those with large attachments. After deleting, empty the Trash folder: in Gmail, click "More" in the left sidebar → "Trash" → "Empty Trash now." Trash counts against your storage until emptied.',
        tip: 'Quick Tip: Also check your Spam folder — spam emails count against storage. In Gmail, click "Spam" → "Delete all spam messages now."',
      },
      {
        title: 'Free up space in Google Photos',
        content:
          "If you back up photos in \"Original quality\" they count against your 15GB. Consider switching to \"Storage saver\" (previously called \"High quality\") which slightly compresses photos but rarely looks different on a phone screen. In Google Photos: tap your profile picture → \"Photos settings\" → \"Backup\" → \"Upload size\" → switch to \"Storage saver.\" To free existing space, Google Photos can compress already-backed-up originals: at one.google.com → \"Free up account storage\" → follow prompts.",
      },
      {
        title: 'Upgrade to Google One if you need more space',
        content:
          "If freeing up space doesn't solve the problem, Google One storage plans are reasonably priced: 100GB for $2.99/month, 200GB for $2.99/month, or 2TB for $9.99/month. Go to one.google.com → \"Get storage\" → choose a plan. You can cancel anytime. The upgraded storage works immediately across Gmail, Drive, and Photos. One Google One subscription can also be shared with up to 5 family members.",
        tip: "Quick Tip: 100GB is enough storage for most people for many years of emails and photos. The $2.99/month plan is the most common starting point.",
      },
    ],
  },

  {
    slug: 'hacked-social-media-recovery',
    title: 'What to Do If Your Facebook, Instagram, or Email Account Is Hacked',
    excerpt:
      'Act quickly and follow these steps to recover a hacked social media or email account — and prevent it from happening again.',
    category: 'safety-guides',
    tags: ['hacked account', 'account recovery', 'facebook hacked', 'instagram hacked', 'security'],
    readTime: '6 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Having a social media or email account hacked is alarming and stressful. Hackers may use your account to send spam, scam your contacts, post inappropriate content, or steal personal information. The faster you act, the better the chance of recovering your account and limiting the damage.\n\nCommon signs your account was hacked: you receive a login notification from an unfamiliar location or device, friends tell you they received strange messages from you, you are locked out of your account, your profile picture or personal information changed without your action, or you see posts or messages you did not send.\n\nThis guide covers recovery steps for the most common platforms — Facebook, Instagram, and email — as well as steps to prevent future hacking.`,
    steps: [
      {
        title: 'Try to regain access immediately',
        content:
          "Go to the login page and click \"Forgot password\" or \"Need help logging in.\" Use the account recovery options: phone number or backup email where a recovery code can be sent. On Facebook: go to facebook.com/hacked and follow the \"My account was hacked\" flow. On Instagram: tap \"Get more help\" on the login screen and follow the identity verification steps. The sooner you initiate recovery, the more likely the hacker hasn't yet changed your recovery options.",
        tip: "Quick Tip: If the hacker changed your password and email, try Facebook's or Instagram's identity verification process — you may be asked to verify your identity with a photo ID to reclaim your account.",
      },
      {
        title: 'Change your password immediately after regaining access',
        content:
          "Once you are back in your account, change the password immediately to something strong and unique — at least 12 characters with a mix of letters, numbers, and symbols. Do not reuse passwords from other accounts. If the same password was used on other accounts (email, bank, other social media), change those passwords too — hackers often try compromised passwords on multiple sites. This practice is called \"credential stuffing.\"",
        warning:
          "If you use the same password on multiple sites and one site is breached, hackers will automatically try that password everywhere. Each account should have a unique password — this is the single biggest step you can take for online security.",
      },
      {
        title: 'Turn on two-factor authentication',
        content:
          "After recovering your account, turn on two-factor authentication (2FA) immediately. With 2FA, every new login requires a code from your phone in addition to your password. On Facebook: Settings → Password and Security → Two-Factor Authentication → turn on. On Instagram: Settings → Security → Two-Factor Authentication → turn on. Choose \"Authentication app\" (most secure) or \"Text message\" (convenient). This prevents hackers from accessing your account even if they have your password.",
      },
      {
        title: 'Check and remove unfamiliar devices and apps',
        content:
          "After recovering access, check what devices are logged into your account. On Facebook: Settings → Password and Security → \"Where you're logged in\" — log out all unfamiliar devices. On Instagram: Settings → Security → Login activity → log out anything unfamiliar. Also check \"Apps and Websites\" or connected apps (Facebook: Settings → Apps and Websites) and remove any apps you don't recognize. Alert your friends and family that your account was compromised so they know to ignore any suspicious messages they received.",
        tip: "Quick Tip: Report the hack to the platform using their official \"Report a hacked account\" tool. This creates a record and can help with future recovery if needed.",
      },
    ],
  },

  {
    slug: 'alexa-shopping-list-guide',
    title: 'How to Use Alexa to Create Shopping Lists and Order on Amazon',
    excerpt:
      'Just say the word and Alexa adds items to your shopping list, which syncs to your phone. You can also reorder Amazon items by voice — here is how it all works.',
    category: 'smart-home',
    tags: ['alexa', 'shopping list', 'amazon shopping', 'voice shopping', 'echo', 'smart home'],
    readTime: '4 min',
    thumbnailEmoji: '🛍️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `One of the most practical features of Amazon Alexa — the voice assistant on Amazon Echo devices — is its ability to manage shopping lists and interact with Amazon. You can add items to a shopping list just by speaking, and the list syncs to the Alexa app on your phone so you can check it at the grocery store.\n\nAlexa can also help you reorder items you have purchased before on Amazon using just your voice. You set up voice purchasing (optionally with a PIN), and you can say "Alexa, order more paper towels" and it will reorder from your purchase history. This guide walks through both features.`,
    steps: [
      {
        title: 'Add items to your shopping list by voice',
        content:
          "Say \"Alexa, add milk to my shopping list\" or \"Alexa, add bread, butter, and eggs to my shopping list.\" Alexa confirms each item. Your list is saved automatically. To hear what is on the list: say \"Alexa, what is on my shopping list?\" To check the list on your phone: open the Alexa app → Lists (in the bottom navigation or hamburger menu) → Shopping List. The list stays in sync between your Echo and the app.",
        tip: "Quick Tip: You can also add items to the list from the Alexa app by tapping \"Add item\" at the top of the shopping list. Items added from the app will be read back if you ask Alexa.",
      },
      {
        title: 'Share your shopping list with a family member',
        content:
          "In the Alexa app, go to Lists → Shopping List → tap the share icon. You can share the list by email or as a link. A shared list means family members can also add and check off items. This is useful when someone else is doing the grocery shopping — they can see and update the shared list in real time.",
      },
      {
        title: 'Set up voice purchasing for Amazon',
        content:
          "To let Alexa place orders on Amazon: open the Alexa app → More → Settings → Account Settings → Voice Purchasing → turn on \"Purchase by voice.\" You can optionally add a 4-digit confirmation code so no one accidentally places an order. With voice purchasing on, you can say: \"Alexa, reorder [product name]\" and Alexa will confirm from your Amazon purchase history and ask \"Should I place this order?\" before purchasing.",
        warning:
          "If you have children or grandchildren visiting who use your Echo, consider requiring a confirmation code for purchases, or turning off voice purchasing when they are present to prevent accidental orders.",
      },
      {
        title: 'Check on your Amazon orders',
        content:
          "You can ask Alexa about your recent orders: \"Alexa, where is my stuff?\" or \"Alexa, track my package.\" Alexa will give you a delivery status update for recent orders. For more detail, open the Amazon app on your phone and go to Returns & Orders to see tracking information. You can also say \"Alexa, cancel my order\" for recent orders that have not yet shipped.",
        tip: "Quick Tip: If you want to avoid accidental purchases altogether, you can turn Voice Purchasing fully off. Shopping lists remain fully functional without voice purchasing enabled.",
      },
    ],
  },

  {
    slug: 'amazon-order-tracking-guide',
    title: 'How to Track Your Amazon Orders and Deliveries',
    excerpt:
      'Amazon makes it straightforward to see exactly where your package is, get delivery alerts, and find out what to do if something goes wrong.',
    category: 'app-guides',
    tags: ['amazon', 'order tracking', 'delivery', 'amazon app', 'package tracking', 'online shopping'],
    readTime: '4 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Once you place an order on Amazon, keeping track of when it will arrive is something many people check daily. Amazon provides several ways to track packages — through the Amazon app, the website, email notifications, and even by asking Alexa.\n\nAmazon also offers a feature called Amazon Map Tracking for Prime deliveries, which shows you the real-time location of the delivery driver on a map, similar to how Uber shows your driver. This guide covers all the ways to track your Amazon orders so you never have to wonder where your package is.`,
    steps: [
      {
        title: 'Track orders in the Amazon app or website',
        content:
          'Open the Amazon app on your phone and tap the three-line menu (☰) → "Returns & Orders." You see a list of recent orders with their current status. Tap any order for details. For orders being shipped, tap "Track package" to see the estimated delivery date, shipping carrier, tracking number, and current location in the shipping process. On the website (amazon.com), click "Returns & Orders" in the top right.',
        tip: `Quick Tip: Orders typically go through stages: "Preparing for shipment" → "Shipped" → "Out for delivery" → "Delivered." If it says "Delivered" but you can't find the package, check around your front door, porch, mailbox, and with neighbors.`,
      },
      {
        title: 'Set up delivery notifications',
        content:
          "Amazon sends email notifications at key shipping milestones — when your order ships and when it delivers. To get text (SMS) notifications too: go to amazon.com → Account → Account Settings → Communication preferences → enable \"Shipping and delivery\" alerts and add your phone number. You can also enable push notifications in the Amazon app: tap your profile picture → App Settings → Notifications → turn on shipping updates.",
        tip: "Quick Tip: Amazon sends a photo of your package on your doorstep when delivered (in most areas). The delivery confirmation email or app notification includes this photo — useful if you can't find your package.",
      },
      {
        title: 'Use Amazon Map Tracking for same-day and Prime deliveries',
        content:
          "For eligible orders (usually Prime same-day or next-day deliveries), Amazon offers real-time map tracking. When your package is \"Out for delivery,\" open the Amazon app → go to your order → \"Track package\" → tap \"Track on map.\" A map shows the delivery driver's current location and estimated arrival time. This refreshes every few minutes.",
      },
      {
        title: 'Report a missing or damaged package',
        content:
          "If your order says \"Delivered\" but you don't see it: wait 24-48 hours (sometimes delivery scans are early). Then in the app: go to Returns & Orders → tap the order → \"Problem with order\" → \"Package shows delivered but I can't find it.\" Amazon will typically offer a refund or replacement. For damaged items: go to the order → \"Return or replace items\" and select \"Item arrived damaged.\" Amazon's return process is generally hassle-free.",
        warning:
          "\"Porch pirates\" — thieves who steal packages from front doors — have become more common. For valuable deliveries, consider shipping to an Amazon Hub Locker (a secure pickup box at nearby stores) or requesting a signature for delivery.",
      },
    ],
  },

  {
    slug: 'what-is-5g-explained',
    title: "What Is 5G? A Plain-English Explanation for Everyday Phone Users",
    excerpt:
      "5G is the newest cellular network technology. Here's what it actually means for your phone, whether you need it, and what the hype is really about.",
    category: 'essential-skills',
    tags: ['5G', 'cellular network', '4G LTE', 'phone speed', 'network', 'technology basics'],
    readTime: '5 min',
    thumbnailEmoji: '5️⃣',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `You have probably heard about 5G — it has been in phone ads and the news for several years. But what does it actually mean, and should you care? This guide cuts through the marketing language and explains 5G in straightforward terms.\n\nIn short: 5G is the fifth generation of cellular network technology. Every decade or so, the cellular industry upgrades to a new generation. We went from 3G (which allowed basic mobile internet) to 4G LTE (which enabled smartphone apps and streaming) and now to 5G (which is significantly faster and handles many more devices simultaneously).\n\nFor most everyday phone users, 5G means faster downloads and fewer slowdowns in crowded places. Whether 5G is available in your area, and whether your phone supports it, determines how much it affects you.`,
    steps: [
      {
        title: 'Understand what 5G actually does differently',
        content:
          "5G is faster than 4G LTE — often 10-100 times faster in ideal conditions. What does that mean practically? Web pages load faster. Videos start playing immediately without buffering. Large file downloads (like app updates) finish in seconds instead of minutes. In crowded places like sports stadiums, concerts, or shopping centers, where thousands of people are using their phones simultaneously, 5G handles the load much better than 4G — which often slows to a crawl in crowds.",
        tip: 'Quick Tip: For most daily tasks — checking email, browsing Facebook, making calls, watching a video — the difference between 4G and 5G is barely noticeable on an individual basis. 5G matters most for heavy data users and crowded environments.',
      },
      {
        title: 'Find out if your phone has 5G',
        content:
          "Most new smartphones sold in 2022 and later support 5G. To check your iPhone: go to Settings → General → About → look for \"5G\" in the model description or check the Apple website for your model. On Android: go to Settings → About phone → see if 5G is listed in specifications. Alternatively, if you see \"5G\" or \"5G UC\" in the signal indicator in the top corner of your phone screen, your phone is connected to a 5G network.",
      },
      {
        title: 'Know which type of 5G you are getting',
        content:
          "There are two main types of 5G: \"Sub-6 GHz\" 5G and \"mmWave\" 5G. Sub-6 GHz is the most common — it covers most US cities and suburban areas and is available from all major carriers. It is moderately faster than 4G. mmWave 5G is extremely fast but only covers a small area (roughly a city block) around a 5G antenna — typically found in dense urban areas, airports, and stadiums. If you see \"5G UW\" (Verizon), \"5G UC\" (T-Mobile), or \"5G+\" (AT&T) in your signal bar, you are on the faster version.",
      },
      {
        title: 'Decide whether to upgrade your phone for 5G',
        content:
          "If your current phone works well for what you use it for, there is no pressing reason to upgrade purely for 5G. 4G LTE remains fast enough for streaming, video calls, and everyday use and will continue to be supported for many years. If you are due for a phone upgrade anyway, buying a 5G phone now is a reasonable forward-looking choice. 5G coverage continues to expand, and a 5G phone will remain current for longer.",
        tip: "Quick Tip: 5G phones don't cost more than 4G phones at the same quality level — 5G is now standard across most mid-range and flagship phones. You are unlikely to find a new quality smartphone that is 4G-only.",
      },
    ],
  },

  {
    slug: 'erase-phone-before-selling',
    title: 'How to Erase Your Phone Before Selling, Donating, or Recycling It',
    excerpt:
      "Before you give up an old phone, perform a factory reset to erase all your personal data. Here's exactly how to do it safely on iPhone and Android.",
    category: 'phone-guides',
    tags: ['factory reset', 'erase phone', 'sell old phone', 'data privacy', 'iphone', 'android'],
    readTime: '5 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you are selling, trading in, donating, or recycling an old phone, erasing it properly is essential. A factory reset wipes all your personal data — photos, contacts, messages, emails, banking apps, saved passwords, and account logins — from the device. Without a proper wipe, whoever gets your phone next could potentially access your private information.\n\nThis guide covers how to prepare your phone for the wipe (backing up data first), then how to perform the factory reset on both iPhone and Android. The process takes about 10-15 minutes and requires nothing more than following the steps below.`,
    steps: [
      {
        title: 'Back up your data before erasing',
        content:
          "Before erasing the phone, confirm that everything you want to keep is saved somewhere else. On iPhone: go to Settings → your name → iCloud → iCloud Backup → \"Back Up Now.\" Wait for the backup to complete. On Android: go to Settings → Google → Backup → \"Back up now.\" Also manually save or email any photos or files you want to keep that might not be in the cloud. Double-check your contacts, photos, and apps are saved before proceeding — a factory reset cannot be undone.",
        warning:
          'There is no way to recover data after a factory reset. Confirm your backup was successful before starting the reset.',
      },
      {
        title: 'Sign out of accounts before resetting (iPhone — important)',
        content:
          'On iPhone, you must sign out of your Apple ID before erasing to turn off Activation Lock. If you skip this step, the next person cannot set up the iPhone. Go to Settings → tap your name at the top → scroll down → \"Sign Out.\" Enter your Apple ID password when prompted and tap \"Sign Out\" again to confirm. Now the phone is clear of your Apple ID and ready to reset.',
        tip: "Quick Tip: If you forget to sign out before resetting, you can still remove the phone from your Apple ID account later at appleid.apple.com → \"Devices\" → select the old phone → \"Remove from Account.\"",
      },
      {
        title: 'Perform the factory reset on iPhone',
        content:
          "Go to Settings → General → scroll to the bottom → \"Transfer or Reset iPhone\" → \"Erase All Content and Settings.\" You may be asked to enter your iPhone passcode, then your Apple ID password. Tap \"Erase iPhone\" to confirm. The phone will show a progress bar while it resets. When complete, it shows the \"Hello\" setup screen — exactly what a new iPhone shows. Hand it off or send it in for trade-in.",
      },
      {
        title: 'Perform the factory reset on Android',
        content:
          "On most Android phones: Settings → General Management or System → Reset → Factory Data Reset → \"Reset.\" Enter your PIN or password when prompted. Tap \"Delete All.\" The process takes a few minutes. On Samsung phones: Settings → General Management → Reset → Factory Data Reset. On Google Pixel: Settings → System → Reset options → Erase all data (factory reset). After the reset, the phone shows a welcome setup screen. Remove any memory card (if your phone has one) before handing the phone off.",
        tip: "Quick Tip: After the factory reset, do not set up the phone on a new account — let the next user set it up fresh. This ensures no remnants of your accounts remain.",
      },
    ],
  },

  {
    slug: 'refurbished-phone-buying-guide',
    title: 'Is a Refurbished Phone Worth Buying? What You Need to Know',
    excerpt:
      'Certified refurbished phones can save you $200-$400 compared to new — and they work reliably when bought from the right sources. Here is what to look for.',
    category: 'phone-guides',
    tags: ['refurbished phone', 'used phone', 'certified refurbished', 'phone buying', 'save money'],
    readTime: '5 min',
    thumbnailEmoji: '♻️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Buying a new flagship iPhone or Android phone can cost $700-$1,200. Certified refurbished phones — phones that have been returned, tested, repaired if needed, and cleaned — often sell for 30-50% less, sometimes more. A certified refurbished iPhone 14 that retails for $800 new might cost $450-$550 refurbished.\n\nThe key word is "certified." There is a big difference between buying a phone sold as "refurbished" from a random seller on eBay and buying a Certified Refurbished device from Apple, Samsung, Amazon, or a reputable third-party refurbisher like Back Market or Swappa.\n\nThis guide explains the different levels of refurbishment, where to buy safely, and what warranties to expect so you can make a confident purchase.`,
    steps: [
      {
        title: 'Understand the difference between refurbishment grades',
        content:
          'Refurbished phones come in different grades: **Like New** — factory reset, professionally cleaned, no visible wear, works perfectly. **Excellent / Very Good** — minor cosmetic scratches barely visible, fully functional. **Good** — visible wear and scratches on the case but screen is typically scratch-free, fully functional. **Acceptable / Fair** — noticeable scratches or wear, may have minor screen marks, fully functional. For everyday use, "Excellent" or "Very Good" grade offers the best value — significant savings with near-perfect condition.',
        tip: "Quick Tip: Always check the condition description and photos carefully. Reputable sellers rate condition honestly — if a listing says \"Good\" expect visible signs of use.",
      },
      {
        title: 'Buy from trustworthy sources',
        content:
          "The safest places to buy refurbished phones: **Apple Certified Refurbished** (apple.com/shop/refurbished) — Apple tests, replaces defective parts, includes original accessories, and offers 1-year warranty. **Samsung Certified Refurbished** — same high standard for Samsung phones. **Amazon Renewed** — rigorously inspected, 1-year supplier warranty. **Back Market** — reputable third-party platform with verified refurbishers and a 1-year warranty. **Swappa** — peer-to-peer marketplace with strict verification; most phones have more life left. All are much safer than random eBay or Facebook listings.",
      },
      {
        title: 'Check the warranty and return policy',
        content:
          "Before purchasing, confirm: the warranty period (1 year minimum from reputable sellers), whether the warranty covers defects (not physical damage), the return window (at least 30 days), and whether the phone is unlocked or locked to a specific carrier. Unlocked phones work with any US carrier — prefer unlocked if possible for flexibility. A locked phone only works with one carrier unless you request an unlock after a waiting period.",
        tip: "Quick Tip: Ask the seller specifically: is this phone unlocked? If buying from Apple or Samsung's own refurbished store, iPhones are carrier-unlocked. From other sellers, confirm before purchasing.",
      },
      {
        title: 'Inspect the phone when it arrives',
        content:
          "When your refurbished phone arrives: inspect the exterior for scratches or damage that doesn't match the described condition. Test the screen for dead pixels (look at a solid white or solid black background). Test the cameras, speakers, microphone, Wi-Fi, Bluetooth, and charging. Check the battery health: on iPhone, Settings → Battery → Battery Health — a good refurbished phone should be 85% or higher. Test all the buttons. If anything seems wrong, contact the seller immediately within the return window.",
      },
    ],
  },

  {
    slug: 'tv-remote-app-phone',
    title: 'How to Control Your TV Using Your Smartphone as a Remote',
    excerpt:
      "You can use your phone as a TV remote — no more searching for the physical remote. Here's how to set it up for Samsung, LG, Roku, Fire TV, and Apple TV.",
    category: 'entertainment',
    tags: ['tv remote', 'phone as remote', 'samsung remote', 'roku remote', 'apple tv remote', 'smart tv'],
    readTime: '4 min',
    thumbnailEmoji: '🎮',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Losing the TV remote is one of the most common household frustrations. The good news: your smartphone can serve as a fully functional remote control for most smart TVs and streaming devices. The phone app version often has advantages over a physical remote: a keyboard for searching, voice control, and swipe-based navigation.\n\nAll major TV brands and streaming devices have free companion apps for iPhone and Android. This guide covers the most common setups.`,
    steps: [
      {
        title: 'Control a Samsung TV with your phone',
        content:
          "Download the \"SmartThings\" app (free, by Samsung) from the App Store or Google Play. Open the app and sign in with a Samsung account (or create one for free). Tap the + button → \"Device\" → \"TV\" and follow the on-screen steps to connect to your Samsung TV. Both your phone and TV must be on the same Wi-Fi network. Once connected, a remote control interface appears in the app — you can change channels, adjust volume, and navigate menus.",
        tip: 'Quick Tip: Some Samsung TVs also respond to the Samsung TV Plus or Samsung TV Remote apps — search "Samsung TV Remote" in your app store to find the right one for your model.',
      },
      {
        title: 'Control a Roku with your phone',
        content:
          "Download the \"Roku\" app (free) from the App Store or Google Play. Open it and your phone will automatically detect Roku devices on the same Wi-Fi network. Tap your Roku device to connect. The app shows a full remote with directional pad, volume, playback controls, and a keyboard for searches. You can also use voice search by pressing the microphone button in the app.",
      },
      {
        title: 'Control an Amazon Fire TV with your phone',
        content:
          "Download the \"Amazon Fire TV\" app (free) from the App Store or Google Play. Sign in with your Amazon account. Tap your Fire TV device to connect (both must be on the same Wi-Fi). The app shows a virtual remote and keyboard. The app also lets you use voice commands just like the Alexa-enabled physical remote.",
      },
      {
        title: 'Control an Apple TV with your iPhone',
        content:
          "On iPhone, swipe down from the top right to open Control Center. Look for the Apple TV Remote icon (it looks like a small remote). If it is not there: Settings → Control Center → tap the + next to \"Apple TV Remote\" to add it. Tap the remote icon, select your Apple TV, and the full remote interface appears. You can also use your iPhone's screen as a touchpad to navigate the Apple TV.",
        tip: "Quick Tip: For LG TVs, download the \"LG ThinQ\" app. For Sony TVs, download \"Video & TV SideView\" or \"Google TV\" app. Search your TV brand plus \"remote app\" in the app store to find the right one.",
      },
    ],
  },

  {
    slug: 'facetime-group-call-guide',
    title: 'How to Make a Group FaceTime Call With Family',
    excerpt:
      "Group FaceTime lets up to 32 people join a video call at the same time. Here's how to start one and what to do if someone can't connect.",
    category: 'communication',
    tags: ['facetime', 'group call', 'video call', 'family', 'iphone', 'ipad', 'apple'],
    readTime: '4 min',
    thumbnailEmoji: '👪',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `FaceTime is Apple's free video calling app, and it allows group calls with up to 32 people at once. This is ideal for family gatherings where people are in different locations — everyone can see and talk to each other at the same time on a split screen.\n\nGroup FaceTime works between iPhones, iPads, and Macs. Everyone on the call must have an Apple device and an active Apple ID. If you have family members with Android phones or Windows computers, they can still join using a FaceTime link sent via text — they connect through a web browser without needing Apple devices.\n\nThis guide shows you how to start a group FaceTime and how to invite non-Apple users.`,
    steps: [
      {
        title: 'Start a group FaceTime call',
        content:
          "Open the FaceTime app on your iPhone or iPad. Tap \"New FaceTime\" at the top of the screen. In the \"To:\" field, type the names, phone numbers, or email addresses of the people you want to call. You can add multiple people. When everyone is added, tap the green \"FaceTime\" button to start the video call. Each person receives a notification and can tap \"Join\" to enter the call.",
        tip: "Quick Tip: You can also start a group FaceTime from a group Messages conversation: tap the name at the top of the Messages conversation → tap the FaceTime icon. Everyone in the message thread is automatically invited.",
      },
      {
        title: 'Add someone mid-call',
        content:
          "Once a FaceTime call is in progress, you can add more people. Tap the screen to show controls → tap the person icons at the bottom → tap \"Add People\" → enter the new person's name or number → \"Add to FaceTime.\" They receive a notification to join.",
      },
      {
        title: 'Invite Android or Windows users with a FaceTime link',
        content:
          "Open the FaceTime app → tap \"Create Link\" at the top. This generates a web link you can share via text, email, or any messaging app. When Android or Windows users tap the link, FaceTime opens in their web browser (Google Chrome recommended) and they can join the call without an Apple account. They are shown as a participant like everyone else.",
        tip: "Quick Tip: FaceTime links can be created in advance and shared before the call — useful for scheduling a set family video call time. Share the link via email or a family group text.",
      },
      {
        title: 'Navigate the group call screen',
        content:
          "During a group call, each person appears in a tile. The tile of whoever is currently speaking enlarges automatically. To change your camera view: tap the icon to switch between front camera (shows your face) and back camera (shows what is in front of you). To mute yourself: tap the microphone icon. To leave the call: tap the red phone icon. You can also use Portrait mode for a blurred background: tap \"Effects\" → \"Portrait\" during the call.",
        tip: "Quick Tip: If someone's tile shows a spinning wheel or frozen image, they likely have a poor internet connection. Ask them to move closer to their Wi-Fi router or try turning their video off and back on.",
      },
    ],
  },

  {
    slug: 'download-offline-maps-guide',
    title: 'How to Download Maps to Use Without Internet',
    excerpt:
      'Google Maps and Apple Maps let you download areas of the map in advance so you can navigate without cell service or Wi-Fi — perfect for travel or rural areas.',
    category: 'app-guides',
    tags: ['offline maps', 'google maps', 'apple maps', 'no signal', 'travel', 'navigation'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Driving or walking in an area with poor cell service is frustrating when your map app keeps loading. The solution: download a section of the map in advance when you have Wi-Fi, and Google Maps or Apple Maps will work offline — no internet required.\n\nThis is especially useful for road trips through rural areas, international travel where you don't want to use data, areas with known dead zones, and National Parks or remote locations. Both Google Maps (Android and iPhone) and Apple Maps (iPhone, macOS Sequoia and later) support offline downloads. Google Maps has had this feature longer and is generally more reliable for offline use.`,
    steps: [
      {
        title: 'Download an offline map in Google Maps (recommended)',
        content:
          "Open Google Maps on your phone. Search for a city or region you want to download. Tap the name of the city that appears in the panel at the bottom. Tap the three-dot menu (⋮) in the upper right of the panel → \"Download offline map.\" A box appears showing the area that will be downloaded — pinch or drag to adjust the area. Tap \"Download.\" The map saves to your phone (typically 100-400MB per city). Once downloaded, it appears in your profile → Offline maps.",
        tip: "Quick Tip: Download offline maps at home over Wi-Fi before your trip — the map files can be large and will eat into your phone data if downloaded on a cellular connection.",
      },
      {
        title: 'Use the offline map when you have no signal',
        content:
          "When you are in an area with no cell service, Google Maps automatically uses the downloaded offline map. Search for an address or tap a destination as normal — it works the same as when online. Turn-by-turn navigation, street names, and points of interest all work offline. Real-time traffic data and public transit directions are not available offline, but basic navigation works well.",
      },
      {
        title: 'Download an offline map in Apple Maps',
        content:
          "On iPhone (iOS 17 and later): open Maps → tap your profile picture → \"Offline Maps\" → \"Download New Map.\" Zoom the map to the area you want, adjust the selection box, and tap \"Download.\" Downloaded maps appear in the Offline Maps section of your profile. Note: Apple Maps offline is available in select countries and regions — check if your destination is supported.",
        tip: "Quick Tip: Apple Maps offline maps require iOS 17 or later (iPhone 8 and newer). iOS 18 is the current version — update at Settings → General → Software Update if you don't see the Offline Maps option.",
      },
      {
        title: 'Keep your offline maps updated',
        content:
          "Offline maps can become outdated — roads change, new businesses open, and old ones close. Google Maps automatically updates your offline maps when you are connected to Wi-Fi (you can confirm this in the Offline Maps settings). Apple Maps also updates offline maps over Wi-Fi. Check your offline maps before a trip to make sure they are current. You can delete and re-download any map to force a fresh update.",
      },
    ],
  },

  {
    slug: 'iphone-camera-modes-guide',
    title: 'How to Use the Different Camera Modes on Your iPhone',
    excerpt:
      "Your iPhone camera can do much more than take basic photos. Here's how to use Portrait mode, Panorama, Time-lapse, and other powerful modes you may not know about.",
    category: 'phone-guides',
    tags: ['iphone camera', 'portrait mode', 'panorama', 'camera modes', 'photography', 'iphone tips'],
    readTime: '5 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `The iPhone camera is one of the most capable cameras most people will ever use — and most users only use the basic Photo mode. But iPhone cameras have a range of specialized modes that take better photos in specific situations.\n\nSwiping left or right in the Camera app cycles through different modes: Photo, Portrait, Panorama, Video, Slow-Mo, and Time-lapse (the available modes depend on your iPhone model). Each mode is designed for a specific type of photo or video. This guide explains the most useful modes and when to use them.`,
    steps: [
      {
        title: 'Use Portrait mode for photos of people',
        content:
          "Portrait mode blurs the background behind your subject, creating the professional-looking \"bokeh\" effect you see in high-quality portraits. Open Camera and swipe right to Portrait mode (available on iPhone XS and later for the rear camera, and some models support it on the front camera for selfies). A yellow \"Natural Light\" label appears — frame your subject so they are 2-8 feet away. The camera shows a real-time preview of the blur effect. Tap the shutter button to take the photo.",
        tip: "Quick Tip: After taking a Portrait photo, you can adjust the blur intensity and even change the lighting style in the Photos app. Tap \"Edit\" on the photo → use the \"Depth\" slider or lighting buttons at the top.",
      },
      {
        title: 'Capture wide scenes with Panorama',
        content:
          "Panorama stitches together a series of photos to create one wide, sweeping image — perfect for landscapes, cityscapes, or large group photos. Swipe right past Portrait to reach Panorama. Hold your phone vertically. Tap the shutter button and slowly pan your phone in the direction of the arrow, keeping the arrow on the center line. Tap the shutter again to stop. The resulting panorama captures a view much wider than a standard photo.",
        tip: "Quick Tip: Pan slowly and steadily for the best panorama — if you move too fast or tilt the phone, the edges of the panorama may look wavy or have gaps.",
      },
      {
        title: 'Record Time-lapse videos of slow changes',
        content:
          "Time-lapse records at a reduced frame rate and plays back at normal speed, showing hours of change in just seconds. Swipe all the way left past Photo to find Time-lapse. Great subjects: clouds moving across the sky, a sunset, traffic from a high point, or flowers opening. Place your phone on a stable surface (a table or a phone stand), tap the red button to start, and let it record for several minutes to hours. The resulting video compresses the entire period into a short, captivating clip.",
      },
      {
        title: 'Use Slow-Mo for action shots',
        content:
          "Slow-Motion records video at 120 or 240 frames per second (fps) and plays it back at regular speed, creating a beautifully slowed effect. Swipe left past Video to reach Slo-mo. Great for: a child jumping into a swimming pool, a pet playing, a ball being thrown, or any fast movement you want to examine in detail. After recording, you can trim where the slow-motion starts and ends in the Photos app.",
        tip: "Quick Tip: If you need to take a photo while video is recording, look for the white circle button that appears alongside the record button — tapping it takes a still photo without interrupting the video.",
      },
    ],
  },

  {
    slug: 'digital-photo-frame-setup',
    title: 'How to Set Up a Digital Photo Frame to Display Your Memories',
    excerpt:
      'Digital photo frames display a rotating slideshow of your photos — and modern Wi-Fi frames let family send new photos remotely. Here is how to set one up.',
    category: 'entertainment',
    tags: ['digital photo frame', 'photo display', 'memories', 'slideshow', 'gifts', 'seniors'],
    readTime: '5 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Digital photo frames are an increasingly popular gift for older adults — and for good reason. A modern Wi-Fi-connected digital photo frame sits on a table or hangs on a wall, and automatically displays a rotating slideshow of family photos. The best models let family members anywhere in the world send new photos directly to the frame from their phones.\n\nPopular brands include Nixplay, Skylight, and Amazon Echo Show (which doubles as a digital frame). Prices range from $40 to $200 depending on screen size and features. Setup takes about 15-20 minutes and requires Wi-Fi.\n\nThis guide walks through setting up the most common type of Wi-Fi photo frame, using the Nixplay and Skylight formats as examples of the general approach.`,
    steps: [
      {
        title: 'Choose and unbox your digital photo frame',
        content:
          "When choosing a frame, consider screen size (8-10 inch frames are popular for tabletop, 15-inch for wall display), resolution (higher is better for sharp photos), and features like Wi-Fi photo sharing and cloud storage. Once you have the frame, unbox it, insert the power adapter, and place it where you want it — a flat surface near an outlet, or mount it on a wall using the included hardware. Power it on.",
        tip: "Quick Tip: The Skylight Frame ($100, 10-inch) is widely recommended for seniors because family members can email photos directly to the frame's unique email address — no app required. This makes it very accessible for family members who aren't tech-savvy.",
      },
      {
        title: 'Connect the frame to your Wi-Fi',
        content:
          "Most Wi-Fi frames walk you through Wi-Fi setup on first startup — the frame's screen shows a step-by-step wizard. Select your Wi-Fi network name from the list and enter your Wi-Fi password. The frame may show a QR code you can scan with your phone to complete setup. Once connected, the frame downloads any photos already uploaded to your account and begins the slideshow.",
      },
      {
        title: 'Upload photos to the frame',
        content:
          "Depending on the brand: **Skylight** — each frame has a unique email address. Attach photos to an email and send them to that address. Photos appear on the frame within minutes. Any family member can send photos without downloading an app. **Nixplay** — create a free account at nixplay.com, upload photos to playlists, and share the playlist link with family members so they can add photos. **Amazon Echo Show** — go to the Alexa app, set the background to your Amazon Photos library, and it rotates through your photos automatically.",
        tip: "Quick Tip: For a Skylight frame, share the frame's email address with your children and grandchildren and ask them to send photos after family events. The frame becomes a living, ever-updating photo album.",
      },
      {
        title: 'Customize what shows and when',
        content:
          "Most frames let you control: the slideshow interval (how long each photo shows — 5 seconds to a few minutes), whether the frame dims or turns off overnight (save energy and screen life), orientation (portrait or landscape), photo shuffle order, and whether new photos appear immediately or in a specific playlist. Check the frame's app or web portal for these settings. Many frames also have a \"do not disturb\" schedule so they turn off at night.",
      },
    ],
  },

  {
    slug: 'lock-screen-secure-setup',
    title: 'How to Set Up a Secure Lock Screen on Your Phone',
    excerpt:
      'A lock screen passcode or biometric lock protects everything on your phone if it is ever lost or stolen. Here is how to set up the strongest options available.',
    category: 'safety-guides',
    tags: ['lock screen', 'passcode', 'face id', 'fingerprint', 'phone security', 'biometric'],
    readTime: '4 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your phone lock screen is the first and most important security barrier between a thief and everything on your phone — your email, banking apps, photos, contacts, and personal information. Without a lock screen, anyone who picks up your phone has instant access to everything.\n\nModern iPhones and Android phones offer several lock methods: Face ID (uses your face), Touch ID or fingerprint (uses your fingerprint), and a PIN or passcode (a numeric or alphanumeric code). Using a combination of biometrics plus a strong PIN is the recommended approach — biometrics for convenience, PIN as a backup.\n\nThis guide shows you how to set up each option on both iPhone and Android.`,
    steps: [
      {
        title: 'Set a strong passcode on iPhone',
        content:
          "Go to Settings → Face ID & Passcode (or Touch ID & Passcode on older iPhones) → \"Turn Passcode On.\" Enter a 6-digit passcode. Tap \"Passcode Options\" to choose a longer alphanumeric code (letters and numbers) for stronger security — a custom alphanumeric code with 8+ characters is very difficult to guess. Avoid obvious codes like 123456 or your birth year. Confirm the passcode by entering it twice.",
        tip: 'Quick Tip: A 6-digit PIN gives 1 million possible combinations — much stronger than a 4-digit PIN (10,000 combinations). An alphanumeric passcode is virtually unguessable.',
      },
      {
        title: 'Set up Face ID or Touch ID on iPhone',
        content:
          "Go to Settings → Face ID & Passcode (or Touch ID & Passcode). Tap \"Set Up Face ID\" and follow the on-screen instructions — you will slowly rotate your head in a circle twice while looking at the camera. This takes about 30 seconds. For Touch ID: tap \"Add a Fingerprint\" and press your finger on the Home button repeatedly as instructed. Add 2-3 fingers (including a thumb and pointer finger) for convenience. Once set up, your phone unlocks automatically by looking at it or touching the button.",
      },
      {
        title: 'Set a strong PIN and fingerprint on Android',
        content:
          "Go to Settings → Security → Screen lock. Choose between PIN (numbers only), Password (letters and numbers), or Pattern (draw a pattern). PIN or Password is recommended over Pattern — patterns are easier to guess. Enter a 6+ digit PIN or strong password and confirm it. Then go back to Security → \"Fingerprint\" or \"Biometrics\" → set up your fingerprint by pressing your finger on the fingerprint sensor multiple times as instructed. On Samsung: Settings → Biometrics and security. On Google Pixel: Settings → Security → Fingerprint Unlock.",
        tip: "Quick Tip: After setting up your lock screen, test it: press the side button to lock your phone, then try to unlock it. Make sure Face ID, fingerprint, or your PIN works correctly before assuming you are protected.",
      },
      {
        title: 'Set up auto-lock and what shows on the lock screen',
        content:
          "Your phone should lock automatically after a short period of inactivity. On iPhone: Settings → Display & Brightness → Auto-Lock → set to 1 or 2 minutes. On Android: Settings → Display → Screen timeout → set to 30 seconds or 1 minute. Also review what is visible on your lock screen without unlocking. On iPhone: Settings → Face ID & Passcode → scroll to \"Allow Access When Locked\" — consider turning off \"Today View,\" \"Siri,\" and \"USB Accessories\" for better security.",
      },
    ],
  },

  {
    slug: 'emergency-weather-alerts-setup',
    title: 'How to Set Up Emergency Alerts and Weather Warnings on Your Phone',
    excerpt:
      'Your phone can notify you instantly about tornadoes, floods, AMBER alerts, and local emergencies. Here is how to make sure those alerts are turned on.',
    category: 'safety-guides',
    tags: ['emergency alerts', 'weather alerts', 'tornado warning', 'AMBER alert', 'WEA', 'safety'],
    readTime: '4 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Wireless Emergency Alerts (WEA) are government-issued notifications sent directly to your phone during serious emergencies — things like tornado warnings, flash flood warnings, AMBER Alerts for missing children, and extreme threat presidential alerts. These alerts do not require you to sign up for anything — they are broadcast to all phones in the affected geographic area automatically.\n\nHowever, some alert categories can be turned off in your phone settings, and some people unknowingly disable them. This guide shows you how to confirm all important alerts are turned on, and how to add additional local weather alerts through dedicated apps.\n\nEmergency alerts can save lives — a few minutes of preparation now ensures you hear critical warnings when they matter most.`,
    steps: [
      {
        title: 'Check your Wireless Emergency Alerts settings on iPhone',
        content:
          'Go to Settings → Notifications → scroll to the very bottom. You will see a section called "Government Alerts" with toggles for: AMBER Alerts, Emergency Alerts (extreme threats like tornados), and Public Safety Alerts. Make sure all are turned ON (green). Also look for "Enhanced Emergency Alerts" if it appears — turn it on for more detailed warnings.',
        tip: "Quick Tip: Presidential Alerts (the highest level of emergency, used for national emergencies) cannot be turned off by design — they always come through.",
      },
      {
        title: 'Check emergency alert settings on Android',
        content:
          "Open the Settings app → Apps → three-dot menu → \"Special app access\" → \"Wireless Emergency Alerts\" → confirm it is enabled. Alternatively, open the Messages app → tap the three-dot menu → Settings → Emergency alerts. Turn on: Extreme threats, Severe threats, AMBER alerts, and State and local tests. On Samsung phones: Settings → Safety and emergency → Wireless Emergency Alerts → turn on all categories.",
      },
      {
        title: 'Add a weather alert app for more detailed warnings',
        content:
          "The government Wireless Emergency Alerts are for the most critical warnings. For more detailed and earlier weather alerts, consider: **The American Red Cross Emergency App** (free — alerts, shelter locations, first aid guides), **The Weather Channel** or **Weather Underground** app (severe weather notifications), or **NOAA Weather Radar** app. Allow notifications from whichever app you install and set your home location for local alerts.",
        tip: "Quick Tip: The National Weather Service also offers a free text alert subscription at weather.gov. Search \"NWS text alerts\" and your zip code to sign up for email or text notifications for your exact county.",
      },
      {
        title: 'Know what to do when an alert comes',
        content:
          "When an emergency alert arrives, your phone emits a loud, distinctive buzzing sound and vibration even if it is on silent. Read the alert immediately. Follow instructions specific to the type of alert: tornado warning — go to an interior room on the lowest floor away from windows; flash flood warning — move to higher ground, do not drive through flooded roads; AMBER alert — look for the described vehicle; extreme heat alert — stay indoors with air conditioning or go to a cooling center. FEMA's Ready.gov has detailed guidance for each emergency type.",
      },
    ],
  },

  {
    slug: 'caregiver-monitor-parent-tech',
    title: "How to Help an Aging Parent Stay Safe Online From Afar",
    excerpt:
      "If you're a long-distance caregiver, there are practical tools and strategies to help protect an older parent from online scams, technical problems, and accidental data loss.",
    category: 'life-transitions',
    tags: ['caregiver', 'aging parent', 'remote help', 'family tech', 'senior safety', 'long distance'],
    readTime: '6 min',
    thumbnailEmoji: '👴',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Helping an aging parent navigate technology from a distance is one of the most common challenges adult children face today. You cannot always be there in person to help, but there are tools and strategies that let you provide support remotely — fixing problems, monitoring for issues, and keeping your parent safe from scams without being intrusive.\n\nThe goal is not to take over control of their digital life, but to give them independence with a safety net. The best solutions involve the parent's informed consent and participation. Setting things up together during a visit, or walking through setup by phone or video call, establishes trust and teaches your parent how to use new tools.`,
    steps: [
      {
        title: 'Set up remote desktop access for technical help',
        content:
          "Chrome Remote Desktop (free, from Google) lets you see and control your parent's computer from your own, just as if you were sitting in front of it. Ask your parent to go to remotedesktop.google.com → \"Remote Access\" tab → download the remote desktop app → create an access PIN. You can then connect using the same website on your computer, enter the PIN, and help them troubleshoot, install software, or walk through a task in real time. Both of you need to be online for this to work.",
        tip: "Quick Tip: Establish a regular time (like Sunday afternoon) where you check in by phone or video call AND remotely connect to their computer to check for software updates, clear notifications, or help with any questions that came up during the week.",
      },
      {
        title: 'Help with their phone remotely',
        content:
          "For iPhones: Apple does not offer a remote control feature, but you can use screen sharing during a FaceTime call. During a FaceTime call with your parent: tap \"Share My Screen\" → your parent's screen will appear on your FaceTime window, and they can walk you through what they see. On Android: Android phones often support remote screen viewing through apps like TeamViewer QuickSupport — install it on the parent's phone, get the code, and connect from TeamViewer on your computer.",
      },
      {
        title: 'Set up family sharing so you can see their app purchases and screen time',
        content:
          "On iPhone: go to Settings → your name → \"Family Sharing\" → invite your parent. Once accepted, you can see their app purchases, share subscriptions, and if they agree, see their device location. You can also set up \"Screen Time\" controls to send you a report of how the phone is being used. On Android: Google Family Link (available at families.google.com) offers similar functionality including location sharing and device reports.",
        warning:
          "Always discuss and agree on what sharing you are setting up. Monitoring a parent's device without their knowledge damages trust and is generally not appropriate. Make it a collaborative setup, not surveillance.",
      },
      {
        title: 'Protect against scams with practical safeguards',
        content:
          "Scam calls and fraudulent pop-ups are the biggest threats. Practical protections: install a call-blocking app (Nomorobo is free for landlines, Robokiller or Hiya for cell phones), ensure their browser extensions are minimal and only from reputable sources, bookmark their most-used sites (bank, Medicare, email) and tell them to only visit those sites through bookmarks — not by typing the address or clicking email links. Create a family \"safe word\" that they can use if someone calls claiming to be a family member in trouble (a signal that it is a real call, not a scam).",
      },
    ],
  },

  {
    slug: 'smart-home-routines-setup',
    title: 'How to Set Up Smart Home Routines (Alexa and Google Home)',
    excerpt:
      'Smart home routines let your devices do things automatically — like turning lights on at sunset or playing music when you say "good morning." Here is how to set them up.',
    category: 'smart-home',
    tags: ['smart home', 'routines', 'alexa routines', 'google home', 'automation', 'echo'],
    readTime: '5 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Smart home routines are automated actions that happen without you having to say anything or press a button. For example: every day at 7 AM, Alexa plays the news and your smart lights gradually brighten to simulate sunrise. Every night at 10 PM, all the lights in the house turn off and the thermostat drops to 68 degrees. You set these up once, and they run automatically.\n\nRoutines are set up in the Alexa app (for Amazon Echo devices) or the Google Home app (for Google Nest devices). They can be triggered by: a time of day, a phrase you say, sunrise or sunset, or when you arrive home or leave. This guide walks through setting up routines in both apps.`,
    steps: [
      {
        title: 'Create an Alexa Routine',
        content:
          "Open the Alexa app on your phone → tap the three-line menu (☰) → \"Routines.\" Tap the + button to create a new routine. Give it a name. Under \"When this happens\" (the trigger): tap \"Schedule\" to set a specific time, or \"Voice\" to trigger with a phrase like \"Alexa, good morning.\" Under \"Add action\" (what happens): choose from options including Smart Home (control lights, thermostats), Alexa says (Alexa reads a message), Play music, Wait (add a pause), Send notification to your phone, and more. Chain multiple actions together. Tap \"Save.\"",
        tip: "Quick Tip: A useful starter routine: trigger on \"Good Morning\" → Alexa reads the weather → turns on your smart lights → reads your calendar. Everything you need to start the day in one voice command.",
      },
      {
        title: 'Create a Google Home Routine',
        content:
          "Open the Google Home app → tap \"Automations\" (or navigate through the + menu → Automations). Tap \"Add\" → \"Routine.\" Choose a trigger: \"Time of day,\" \"Sunrise or sunset,\" or \"When I say to Google.\" Set a time or phrase. Add actions: turn on/off devices, change thermostat settings, play media, announce text, or run multiple things in sequence. Tap \"Save.\"",
      },
      {
        title: 'Set up useful routines for daily life',
        content:
          "Some practical routines: **Morning routine** — at 7 AM: gradually brighten bedroom lights, read the weather, play news briefing, set thermostat to daytime temperature. **Bedtime routine** — at 10 PM: turn off all lights, set thermostat to sleep temperature, lock smart locks if installed, play soft music for 30 minutes then stop. **Leaving home** — when you say \"Alexa, I'm leaving\": turn off all lights and plugs, lock smart locks, set thermostat to away mode. **Arriving home** — trigger on your phone location arriving: turn on entry lights, disarm security system.",
        tip: "Quick Tip: Start with just one simple routine to get comfortable with the concept before building complex ones. A \"good morning\" routine is a great first one.",
      },
      {
        title: `Troubleshoot routines that don't run`,
        content:
          "If a routine is not running as expected: check that the trigger time is correct and AM/PM are set right. Confirm the devices in the routine are online and responding to manual commands. Check that the Alexa or Google Home app has the location permissions if using location-based triggers. Verify the routine is turned on (has a toggle). Delete and recreate the routine if it consistently fails — sometimes a fresh setup resolves unexplained issues.",
      },
    ],
  },

  {
    slug: 'night-mode-phone-camera',
    title: 'How to Use Night Mode to Take Better Photos in Low Light',
    excerpt:
      'Night Mode on iPhone and Android automatically improves photos taken in dark conditions — no flash needed. Here is how it works and how to get the best results.',
    category: 'phone-guides',
    tags: ['night mode', 'low light photography', 'iphone camera', 'android camera', 'photos', 'dark'],
    readTime: '4 min',
    thumbnailEmoji: '🌙',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Phone cameras have historically struggled in low-light conditions — photos come out dark, grainy, or blurry. Night Mode, introduced on the iPhone 11 (2019) and similarly on Google Pixel phones, Samsung Galaxy S phones, and many other Android devices, dramatically improved this. Instead of the flash, Night Mode takes multiple frames at different exposures over 1-5 seconds and combines them to create a bright, clear photo.\n\nThe result is a photo that looks like it was taken in much better lighting than it actually was. No flash means no harsh, flat lighting — Night Mode photos often have a natural, warm quality that flash photos lack. This guide explains how to use it effectively.`,
    steps: [
      {
        title: 'How Night Mode activates automatically on iPhone',
        content:
          "On iPhone 11 and later, Night Mode turns on automatically when the camera detects low light. You will see a yellow crescent moon icon appear in the top left of the Camera app when Night Mode is active. The number next to the moon shows how many seconds the exposure will take (for example, \"2s\" means the photo takes 2 seconds). Tap the moon icon to adjust the exposure time or turn it off. Leave it on and at the automatic time for best results in most situations.",
        tip: "Quick Tip: The longer the exposure time Night Mode uses, the brighter the final photo — but longer exposures require more stability. Hold your phone very still (or prop it against something) when Night Mode shows 3 seconds or more.",
      },
      {
        title: 'Keep the camera still for Night Mode photos',
        content:
          "Night Mode works by capturing multiple exposures over 1-5 seconds. If the camera moves significantly during that time, the resulting photo will be blurry. Hold your phone with both hands. Tuck your elbows against your body. Press the shutter button gently rather than jabbing it. For very long exposures (3+ seconds), prop your phone on a table, a bookshelf, or use a small tripod. Your phone will feel like it is taking a long time — that is normal.",
        tip: "Quick Tip: Night Mode is smart enough to compensate for minor hand shake, but a subject that moves (a person talking or a pet moving) will still be blurry even if your phone is steady. Ask subjects to hold still briefly.",
      },
      {
        title: 'Use Night Mode on Android cameras',
        content:
          "On most Android phones, Night Mode (or Night Sight on Google Pixel, Night Mode on Samsung Galaxy) is found in the camera modes — swipe through the modes or look for a crescent moon icon. On Google Pixel: open Camera and swipe to \"Night Sight\" mode. On Samsung: swipe to \"Night Mode\" in the camera modes list. Point at your low-light scene and tap the shutter. The camera will capture the scene over several seconds and process it into a bright, detailed photo.",
      },
      {
        title: 'Know when flash works better than Night Mode',
        content:
          "Night Mode works best for stationary scenes or landscapes in dim light — candles, streetlights, dimly lit rooms. Use flash instead when: your subject is moving (people dancing, children playing), you need an immediate capture and can't hold still, or the scene is completely dark with no ambient light at all. A quick flash works better than a blurry 5-second Night Mode exposure of a moving grandchild at a birthday party. Save Night Mode for when you have time to hold still.",
      },
    ],
  },

  {
    slug: 'find-lost-airpods-guide',
    title: 'How to Find Lost AirPods Using Find My',
    excerpt:
      "If you misplace your AirPods, Apple's Find My app can show their last known location and play a sound to help you find them nearby.",
    category: 'tips-tricks',
    tags: ['airpods', 'find my', 'lost airpods', 'apple', 'bluetooth', 'locate'],
    readTime: '4 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `AirPods are small and can be easy to misplace. Fortunately, Apple's Find My network — the same system used to locate a lost iPhone or iPad — works with AirPods Pro and AirPods Max, and more limited tracking is available with standard AirPods (2nd generation and later).\n\nFind My can show you the last location where your AirPods connected to your iPhone, play a sound through each earbud to help you hear where they are, and on AirPods Pro with Precision Finding (iPhone 11 and later with U1 chip), give directional arrows guiding you right to them.\n\nThis guide covers how to locate lost AirPods, and how to set up Find My in advance if you haven't already.`,
    steps: [
      {
        title: 'Set up Find My for your AirPods (do this now)',
        content:
          "To use Find My for AirPods, the feature must be enabled. Go to Settings → [your name] → Find My → Find My iPhone → make sure \"Find My network\" is turned ON (this also covers AirPods). Your AirPods register with Find My when you first connect them to your iPhone. If Find My network was on when you paired them, they are already set up. No additional steps needed.",
        tip: 'Quick Tip: Keep your AirPods connected to your Apple ID by keeping them in their case and near your iPhone occasionally. This refreshes their location in the Find My network.',
      },
      {
        title: 'Find your AirPods in the Find My app',
        content:
          "Open the \"Find My\" app on your iPhone (it comes pre-installed — search if you don't see it). Tap \"Devices\" at the bottom. Scroll through your devices to find your AirPods. Tap on them. A map appears showing their last known location — where they were most recently connected to Bluetooth with your iPhone. If the map shows your home, they are almost certainly somewhere in your house. If the location shows somewhere you recently visited, you may have left them there.",
      },
      {
        title: 'Play a sound to locate AirPods nearby',
        content:
          "If Find My shows your AirPods nearby (the map shows your current location), tap \"Play Sound.\" Each AirPod begins playing a chirping sound through its speaker. Individual left and right earbuds can be located separately — tap \"Left\" or \"Right\" to play sound from one at a time. Listen carefully and follow the sound. Note: AirPods in their charging case do not play the sound if the case is closed — try playing the sound, then opening the case.",
        tip: 'Quick Tip: AirPods Pro can play the sound even when in the case. Standard AirPods (2nd and 3rd generation) only play the sound when out of the case.',
      },
      {
        title: 'Use Precision Finding to navigate to AirPods Pro',
        content:
          "If you have AirPods Pro and an iPhone 11 or newer: in Find My, tap your AirPods → \"Find.\" Your iPhone uses a combination of Bluetooth, sound, and motion sensing to provide directional arrows and a distance indicator. Walk toward the arrows, paying attention to the distance reading. When you get close, the iPhone will show \"Found nearby\" and the sound becomes louder. This is the most accurate way to find AirPods when they are in the same room.",
      },
    ],
  },

  {
    slug: 'gmail-inbox-management-guide',
    title: 'How to Organize and Declutter Your Gmail Inbox',
    excerpt:
      'An overflowing Gmail inbox is overwhelming. Learn how to use labels, filters, and the archive feature to keep your inbox manageable and find emails fast.',
    category: 'essential-skills',
    tags: ['gmail', 'email organization', 'inbox management', 'labels', 'filters', 'email clutter'],
    readTime: '5 min',
    thumbnailEmoji: '📬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Many people have hundreds or thousands of emails sitting in their Gmail inbox — a mix of newsletters, receipts, personal messages, and automated notifications. This makes it hard to find important emails and creates a constant feeling of digital clutter.\n\nGmail has several built-in tools for organizing this: Categories (which automatically sort incoming mail), Labels (like folders), Filters (automatic rules for sorting future email), and Archive (remove from inbox without deleting). Using these tools, you can go from an overwhelming inbox to a manageable one.\n\nThe goal is an inbox where only emails that need your attention appear, while everything else is automatically filed away.`,
    steps: [
      {
        title: `Use Gmail's automatic categories`,
        content:
          "Gmail automatically sorts incoming email into tabs: Primary (personal and important emails), Social (Facebook, Twitter, Instagram), Promotions (ads and newsletters), Updates (receipts, confirmations, bills), and Forums (mailing lists). To enable tabs: in Gmail, click the gear icon → \"See all settings\" → \"Inbox\" tab → under Inbox type, select \"Default\" and check the category tabs you want. Unimportant emails automatically go to Promotions or Social, keeping your Primary inbox cleaner.",
        tip: 'Quick Tip: If an email ends up in the wrong category (like a newsletter in Primary), drag it to the correct category tab. Gmail will ask if you want all future emails from that sender to go there automatically.',
      },
      {
        title: 'Archive emails instead of deleting',
        content:
          "Archiving removes an email from your inbox without deleting it. Archived emails still appear in searches — they are just out of the inbox. This is ideal for emails you've read and dealt with but might want to reference later (receipts, confirmations). To archive: select an email → click the archive button (box with a down arrow) or press \"E\" on the keyboard. To find archived emails: click \"All Mail\" in the left sidebar, or search for the email by keyword.",
        tip: "Quick Tip: Select multiple emails at once by clicking the checkboxes next to each. Then archive them all at once. This is the fastest way to clear a large backlog.",
      },
      {
        title: 'Create filters to automatically sort future emails',
        content:
          "Filters apply labels or actions to emails matching specific criteria — for example, all emails from your bank go directly to a \"Banking\" label and skip the inbox. To create a filter: open any email from a sender you want to filter → click the three-dot menu (⋮) → \"Filter messages like this\" → adjust criteria → \"Create filter.\" Choose what to do: apply a label, skip the inbox (archive), delete automatically, or mark as read. This handles recurring emails without any ongoing effort.",
      },
      {
        title: 'Unsubscribe from newsletters and promotional emails',
        content:
          "For promotional emails cluttering your inbox: open the email, scroll to the very bottom, and look for an \"Unsubscribe\" or \"Manage email preferences\" link. Click it and follow the steps to stop future emails from that sender. For a faster bulk approach, in Gmail search \"unsubscribe\" — this shows all emails containing that word, which are almost all newsletters and promotions. Select the ones you don't want and unsubscribe or delete. Note: legitimate businesses must honor unsubscribe requests — if you continue to receive emails after unsubscribing, report them as spam.",
        tip: "Quick Tip: Gmail shows an \"Unsubscribe\" option directly at the top of many promotional emails, next to the sender's name. This is faster than scrolling to the bottom of the email.",
      },
    ],
  },

  {
    slug: 'facebook-memories-download-guide',
    title: 'How to Download Your Facebook Photos and Data Before Leaving',
    excerpt:
      'Facebook lets you download a copy of everything — your photos, messages, posts, and profile data. Here is how to save it before deleting your account or switching platforms.',
    category: 'social-media',
    tags: ['facebook', 'download data', 'save photos', 'data export', 'account backup', 'deactivate'],
    readTime: '4 min',
    thumbnailEmoji: '💾',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you are thinking about leaving Facebook, or if you simply want a personal archive of your memories, Facebook lets you download a complete copy of your data. This includes all your photos (in their original resolution), every post you made, all messages, your friends list, events you attended, and much more.\n\nThis download is also useful if you worry about losing access to your account. Having a local copy of your photos and important memories means your Facebook memories are not entirely dependent on Facebook remaining operational or you keeping your account.\n\nThe download takes time to prepare (usually a few minutes to a few hours) and the resulting file can be quite large if you have years of photos.`,
    steps: [
      {
        title: 'Request your Facebook data download',
        content:
          "Log in to Facebook on a computer (this is easier on a computer than the app). Click the small triangle or your profile picture icon in the top right → \"Settings & Privacy\" → \"Settings\" → in the left sidebar click \"Your Facebook information\" → \"Download your information\" or \"Transfer a copy.\" Click \"Download or transfer information.\" You can choose \"All time\" to get everything.",
        tip: "Quick Tip: On the Facebook app: tap the three-line menu (☰) → Settings & Privacy → Settings → \"Your Facebook Information\" → \"Download Your Information.\"",
      },
      {
        title: 'Choose what to include and the format',
        content:
          "A list of data categories appears: Posts, Photos and Videos, Messages, Friends, Groups, Events, Marketplace, and more. Select \"All\" to get everything, or check only what you want. Under Format, choose \"HTML\" to view files in a browser (more readable) or \"JSON\" (technical format for importing elsewhere). Under Media quality: choose \"High\" to get photos at their original resolution. Click \"Create file.\"",
      },
      {
        title: 'Wait for the file and download it',
        content:
          "Facebook will prepare your download — this can take anywhere from a few minutes to several hours depending on how much data you have. You will receive a notification and/or email when the file is ready. Go back to the \"Download Your Information\" page and click the Download button next to your file. Save it to your computer. The file is a compressed archive (.zip file). On Windows, right-click it and \"Extract All.\" On Mac, double-click it to unzip.",
        tip: "Quick Tip: The download link expires after a few days. Download the file promptly when notified. If you miss the window, repeat the request to generate a new download.",
      },
      {
        title: 'Find and organize your photos in the download',
        content:
          "Open the unzipped folder. Navigate to the \"photos_and_videos\" folder (if you chose HTML format) or equivalent folder. Your photos are organized by album and year. Copy the photos you want to keep to a permanent location — your main photos folder, an external drive, or cloud backup. If you chose HTML format, there is an \"index.html\" file at the root of the folder — open it in any web browser to browse all your Facebook data in a readable format.",
      },
    ],
  },
];
