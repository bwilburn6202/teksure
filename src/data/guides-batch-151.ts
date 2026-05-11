// TekSure Guides Batch 151 — 4 guides covering: grocery store self-checkout,
// handling robocalls and spam calls, buying and using prepaid phone cards,
// and Windows Magnifier / Narrator accessibility tools.
import type { Guide } from './guides';

export const guidesBatch151: Guide[] = [
  {
    slug: 'how-to-use-grocery-self-checkout-2026',
    title: 'How to Use Self-Checkout at the Grocery Store',
    excerpt:
      'Self-checkout can save you time, but the machines can be confusing. This guide walks you through every step — scanning, weighing, paying, and getting help.',
    category: 'tips-tricks',
    tags: [
      'self-checkout',
      'grocery store',
      'scanning barcodes',
      'apple pay',
      'google pay',
      'produce codes',
      'coupons',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `Self-checkout lanes are now in almost every major grocery store in the United States — Walmart, Kroger, Target, Publix, and more. They let you scan your own groceries, bag them, and pay without waiting for a cashier. But if you have not used one before, or if a machine gave you trouble in the past, the process can feel frustrating.

The good news: a store attendant is always stationed near the self-checkout area. You are never truly on your own. If something goes wrong — and sometimes it does — you can wave for help or press the "Attendant" button on the screen and someone will come right over.

This guide walks you through every part of the self-checkout process, step by step.

**What the machine looks like**

A self-checkout station usually has a large touchscreen that shows you what to do. There is a scanner on the side — a glass window with a red light — where you pass items to read their barcode. There is a bagging area (a small platform or scale) where you place items after scanning. And there is a card reader for payment. Some stores also have a slot for cash.

**Understanding barcodes**

A barcode is the series of black and white stripes printed on nearly every packaged item. When you hold the item near the scanner, the red light reads those stripes and the machine identifies the product and its price. You will hear a beep and see the item appear on the screen.

**Weighing loose produce**

Loose fruits and vegetables — apples, bananas, broccoli, green beans — do not have a barcode, so you cannot scan them the normal way. Instead, the machine weighs them. You place the produce on the scale (usually the bagging area or a small scale to the side), then identify what it is on the touchscreen. The machine multiplies the weight by the price per pound.

To identify produce, you can either type in the four- or five-digit PLU code (Product Look-Up code) printed on the small sticker on the item, or tap "Find Item" on the screen and search by name. For example, you might tap "Find Item," type "banana," and select the right option from the list. You do not need to memorize any codes.

**Using coupons**

If you have paper coupons, hand them to the attendant — most stores have you give paper coupons to the attendant before or after you finish, rather than feeding them into the machine yourself. If you have a digital coupon clipped to your store loyalty app, your savings are applied automatically when you scan your loyalty card or phone number at the start of the transaction.

**Paying by card or phone**

You can pay with a debit or credit card by inserting it into the chip reader (the narrow slot) or swiping it. If you use Apple Pay or Google Pay (paying by holding your phone near the card reader), look for the contactless symbol — it looks like a sideways Wi-Fi icon — on the payment terminal.

**When something goes wrong**

The machine may pause and display a message like "Unexpected item in bagging area" or "Please wait for attendant." This usually happens if the scale detects something it did not expect, or if an item did not scan correctly. Do not panic. The screen will tell you what to do, or an attendant will come to you. These pauses happen to everyone and are resolved in seconds.

Sources: How-To Geek, AARP, individual grocery chain help pages (Walmart, Kroger, Target).`,
    steps: [
      {
        title: 'Start the transaction',
        content:
          'Walk up to an open self-checkout station. The screen will say something like "Touch to Begin" or "Start Here." Tap the screen to start. If the store has a loyalty card or phone number program (like Kroger Plus or Safeway Club), the screen will ask for it now — enter your phone number or scan your card to get your member discounts.',
        tip: 'If you are unsure which station to use, look for a green light above an open lane. A red light usually means that station is closed or an attendant is assisting someone else.',
      },
      {
        title: 'Scan packaged items',
        content:
          'Pick up a packaged item and hold it so the barcode faces the scanner window. Move it slowly toward the glass until you hear a beep. The item and its price will appear on the screen. Place the item in the bagging area right away — the machine weighs the bag to make sure everything you scan is actually placed there. If you scan something and then walk away without bagging it, the machine will pause and ask you to place the item.',
        tip: 'If an item will not scan after two or three tries, rotate it so a different side of the barcode faces the scanner. If it still will not work, tap "Need Help" on the screen.',
        warning:
          'Do not place items in your cart or reusable bags before scanning them. The machine tracks what you scan and what gets bagged. Unscanned items will trigger an alert when you try to pay.',
      },
      {
        title: 'Handle loose produce and items without barcodes',
        content:
          'For loose fruits and vegetables, place them on the scale in the bagging area or on the produce scale if there is one nearby. Then tap "Find Item" or "Look Up Item" on the touchscreen. You can type the name of the produce (for example, "apple" or "green beans") or enter the PLU code printed on the small sticker on the item. Select the correct item from the list and the machine will calculate the price based on the weight.',
        tip: 'PLU codes are four or five digits. Conventional produce usually has a four-digit code starting with 3 or 4. You do not need to worry about memorizing them — the search function works well.',
      },
      {
        title: 'Apply coupons and loyalty savings',
        content:
          'If you have paper coupons, set them aside and hand them to the attendant when you finish scanning — do not try to feed paper coupons into the machine unless the screen specifically asks for them. If you have a store app with digital coupons, your loyalty account was already linked when you entered your phone number at the start. Your clipped digital coupons will be deducted automatically at the end of scanning.',
        tip: 'Check the screen before you pay — it should show a subtotal and any discounts applied. If a discount is missing, ask the attendant to look at your order before you finalize payment.',
      },
      {
        title: 'Pay and finish',
        content:
          'When you have scanned everything, tap "Finish & Pay" or "I\'m Done" on the screen. The screen will show your total. Choose your payment method: insert your chip card into the card reader slot at the bottom of the terminal, tap your phone or contactless card on the contactless symbol, or select "Cash" if the machine accepts it. Follow any on-screen prompts (confirm the amount, enter your PIN for debit, etc.). When payment goes through, the machine will print or offer to email your receipt.',
        tip: 'If the machine asks "Debit or Credit?" and you are using a debit card, you can choose either. Choosing "Credit" means you do not need to enter a PIN — the transaction still comes out of your checking account.',
        warning:
          'If the machine displays "Attendant Has Been Notified" and freezes, wait — an attendant is on the way. Do not walk away from an incomplete transaction.',
      },
      {
        title: 'Ask for help anytime',
        content:
          'Every self-checkout area has at least one store employee — sometimes called a self-checkout host — standing nearby. They can override error messages, apply paper coupons, check that your loyalty discounts went through, and help with anything the machine could not handle. There is no limit on how much you can ask for help. Tap "Call Attendant" on the screen at any time, or simply make eye contact with the employee nearby and wave them over.',
      },
    ],
  },

  {
    slug: 'how-to-handle-robocalls-spam-calls-2026',
    title: 'How to Handle Robocalls and Spam Phone Calls',
    excerpt:
      'Robocalls and spam calls target millions of Americans every day. Learn how to screen calls, report them to the FTC, and use free tools to block them.',
    category: 'safety-guides',
    tags: [
      'robocalls',
      'spam calls',
      'scam calls',
      'do not call registry',
      'FTC',
      'call blocking',
      'Hiya',
      'Nomorobo',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📵',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=wFtmMmHFNDQ',
    body: `Robocalls are automated phone calls made by a computer rather than a real person. They can deliver a recorded message, connect you to a live scammer, or play a tone designed to confirm your number is active so you will get called again. The Federal Trade Commission (FTC) estimates that Americans receive billions of robocalls every year.

Many robocalls are outright scams — fake IRS warnings, Social Security fraud alerts, fake tech support calls, Medicare schemes, and more. But even non-scam robocalls are illegal in most cases. The FTC has rules that prohibit most unsolicited automated calls.

The key to protecting yourself is knowing what to do (and what not to do) when an unknown number calls.

**The golden rule: let it go to voicemail**

If you do not recognize the number, let the call go to voicemail. A legitimate caller — a doctor's office, a family member calling from a new number, a real business — will leave a message. Scammers almost never leave a real message, and if they do, the message itself will contain red flags.

**Never press any button during a robocall**

If you pick up and hear a recorded message telling you to "Press 1 to speak to a representative" or "Press 2 to be removed from our list," do not press anything. Pressing a button does not remove you. It confirms to the scammer that your phone number is active and belongs to a real person, which means your number will be sold to other scammers and you will receive more calls.

**The built-in screening tools on your phone**

Modern iPhones (running iOS 13 or later) have a feature called Silence Unknown Callers. When it is turned on, calls from numbers not in your contacts, recent calls, or Siri suggestions go directly to voicemail without ringing. You can turn it on under Settings > Phone > Silence Unknown Callers. This will not block known contacts, and you will still get the voicemail if someone leaves one.

If you have a Google Pixel phone, the built-in Phone app includes a Call Screen feature. When an unknown number calls, Google Assistant answers for you and asks the caller to state their name and reason for calling. You see the transcript on your screen in real time and decide whether to pick up, hang up, or mark as spam.

Samsung Galaxy phones (running Android 12 or later) include a call protect feature built into the Samsung Phone app. You can turn it on under Phone app > Settings > Call Protect.

**Free third-party apps**

Several free apps work alongside your phone's built-in features to block more spam calls:

- **Hiya** (iOS and Android) — identifies spam and scam callers and blocks them. Free version available. Download from the App Store or Google Play.
- **Nomorobo** (iOS and Android) — blocks robocalls in real time. Free for landlines through VoIP providers; a small fee for mobile phones.
- **YouMail** (iOS and Android) — replaces your voicemail, blocks spam, and plays a "number disconnected" message to robocallers so they remove your number from their list. Free basic version available.

**Your carrier's built-in spam tools**

Most major US carriers offer their own spam-call protection at no cost:

- **AT&T** — AT&T Call Protect (free, available in the App Store and Google Play)
- **T-Mobile** — Scam Shield (free, available in the App Store and Google Play)
- **Verizon** — Call Filter (free basic version, available in the App Store and Google Play)

Call your carrier or check their website to activate the free version if it is not already enabled on your account.

**Sign up for the Do Not Call Registry**

The National Do Not Call Registry (donotcall.gov) is run by the FTC. When you register your number, it is illegal for most telemarketers to call you. It will not stop all robocalls — scammers ignore the list — but it cuts down on legal telemarketing calls significantly. Registration is free and only takes a minute. Go to donotcall.gov or call 1-888-382-1222 from the number you want to register.

**Report unwanted calls to the FTC**

If you receive a suspected scam call, report it to the FTC at ReportFraud.ftc.gov or donotcall.gov/report. Your report helps the FTC identify patterns and build cases against the companies making illegal calls. It takes about two minutes and you do not need to provide your name.

Sources: FTC.gov (consumer.ftc.gov), CISA.gov, AARP Fraud Watch Network, Apple Support, Google Support.`,
    steps: [
      {
        title: 'Let unknown numbers go to voicemail',
        content:
          'If your phone rings and you do not recognize the number, do not pick up. Let it ring through to voicemail. Legitimate callers — doctors, pharmacies, family members calling from a new number — will leave a message. Scammers almost never leave a genuine voicemail. After the call ends, check whether a message was left before deciding to call back.',
        tip: 'If someone leaves a voicemail that sounds urgent (like a warning about your Social Security number or a problem with your bank account), do not call the number in the voicemail. Hang up and call the organization directly using a number from their official website or your bank card.',
      },
      {
        title: 'Never press any buttons during a robocall',
        content:
          'If you accidentally answer a robocall and hear a recorded message, hang up immediately. Do not press 1, do not press 2, do not say "yes" or "no." Pressing any button or speaking confirms to the automated system that your number is active. Your number may then be sold to other scammers, resulting in even more calls.',
        warning:
          'Scammers sometimes use "yes" or "no" recordings from calls to impersonate you in voice-authorization fraud. If a call asks you to confirm your name or say "yes" to agree to something, hang up.',
      },
      {
        title: 'Turn on Silence Unknown Callers (iPhone) or Call Screen (Android)',
        content:
          'On an iPhone: go to Settings, scroll down and tap Phone, then tap Silence Unknown Callers and switch it on. Calls from numbers not in your contacts will go straight to voicemail without ringing your phone. On a Google Pixel phone: open the Phone app, tap the three-dot menu in the upper right corner, tap Settings, then tap Call Screen and turn on automatic screening. On a Samsung Galaxy phone: open the Phone app, tap the three-dot menu, tap Settings, then tap Caller ID and Spam Protection and turn it on.',
        tip: 'These features do not block calls from your saved contacts, so people you know can still reach you normally.',
      },
      {
        title: 'Download a free call-blocking app',
        content:
          'Open the App Store (iPhone) or Google Play Store (Android), search for "Hiya" or "YouMail," and install the free version. During setup, each app will ask permission to screen incoming calls — grant the permission so the app can work. Hiya shows a warning banner on your screen when a likely spam or scam call comes in, even before you answer. YouMail can play a "number not in service" message to robodialers, which may cause them to remove your number from their calling list.',
        tip: 'Check whether your carrier already provides call-blocking. AT&T Call Protect, T-Mobile Scam Shield, and Verizon Call Filter are free and can be found in your carrier\'s app or website.',
      },
      {
        title: 'Register your number with the Do Not Call Registry',
        content:
          'Go to donotcall.gov on your phone or computer. Tap "Register Your Phone" and enter your phone number and email address. The FTC will send you a confirmation email — click the link in that email to complete registration. Your number will be on the registry within 31 days. Registration does not expire, so you only need to do this once per phone number. You can also register by calling 1-888-382-1222 from the phone number you want to register.',
        tip: 'The Do Not Call Registry stops legal telemarketing calls. It does not stop scammers, who ignore the law. Use it alongside the call-blocking steps above for the best protection.',
      },
      {
        title: 'Report scam calls to the FTC',
        content:
          'If you receive a call you believe is a scam, go to ReportFraud.ftc.gov or donotcall.gov/report on your phone or computer. Select "Unwanted Calls" and fill in the phone number that called you, the date and time, and a brief description of what they said. You do not need to give your name. The FTC uses these reports to track illegal calling campaigns and take action against the companies responsible.',
        tip: 'Screenshot any texts that accompany suspicious calls and include them in your report. The FTC accepts text message complaints at the same address.',
      },
    ],
  },

  {
    slug: 'how-to-buy-and-use-a-prepaid-phone-card-2026',
    title: 'How to Buy and Use a Prepaid Phone Card',
    excerpt:
      'Prepaid phone plans and minutes cards give you phone service without a long-term contract. Learn where to buy them, how they work, and whether they are right for you.',
    category: 'phone-guides',
    tags: [
      'prepaid phone',
      'minutes card',
      'Tracfone',
      'Consumer Cellular',
      'no contract phone',
      'prepaid wireless',
      'add minutes',
      'seniors phone plan',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    body: `If you use your phone mostly to call family members, receive calls from your doctor, and send the occasional text message, you do not need to pay for an unlimited plan that costs $60 or more per month. Prepaid phone options are designed for exactly this situation — you pay only for what you use, with no long-term contract and no credit check.

This guide explains the difference between prepaid wireless plans and pay-as-you-go minutes cards, where to buy them, and how to add minutes or data when you run low.

**Two types of prepaid phone service**

There are two main types of prepaid phone service, and it helps to understand the difference before you shop.

The first type is a **prepaid wireless plan**. This works like a regular phone plan, but you pay a flat monthly fee in advance rather than receiving a bill at the end of the month. Carriers like Consumer Cellular, Tracfone, Straight Talk, and Mint Mobile offer prepaid plans. You get a set amount of talk, text, and data each month. These plans range from about $10 to $40 per month depending on how much you want. There is no credit check and no contract — you can cancel at any time.

The second type is a **pay-as-you-go card**, sometimes called a minutes card or airtime card. These are physical cards sold in stores. You buy the card, scratch off a code on the back, and enter that code on your phone or on the carrier's website to add a block of minutes (and sometimes texts or data) to your account. Minutes may expire after 30, 60, or 90 days if you do not use them, depending on the plan. Tracfone is the most well-known carrier for this type of service.

For most seniors who use their phone occasionally, a prepaid plan with a small monthly allowance is more convenient than managing minutes cards — but the cards are useful as a backup or gift, and some people prefer the direct control of only paying for what they add.

**Where to buy prepaid cards and plans**

Prepaid airtime cards are sold at:
- Walmart (in the phone and electronics section, or near the checkout lanes)
- Target
- CVS and Walgreens
- Dollar General and Family Dollar
- Gas stations and convenience stores
- Grocery stores

You can also buy them online directly from the carrier's website or through Amazon.

Prepaid plan sign-ups happen on the carrier's website or by calling their 800 number. You can also visit a carrier's retail store.

**Which carriers to consider**

- **Consumer Cellular** — highly rated for seniors, AARP members get a 5% discount. Plans start around $20/month. Good customer service. Uses AT&T and T-Mobile networks. Website: consumercellular.com, phone: 1-888-345-5509.
- **Tracfone** — one of the oldest prepaid carriers, offers both minutes cards and monthly plans. Plans start around $10/month. tracfone.com or 1-800-867-7183.
- **Straight Talk** — sold at Walmart. Monthly plans starting around $35. straighttalk.com.
- **Mint Mobile** — lower cost, best for people comfortable buying online. Plans start around $15/month. mintmobile.com.

**How to add minutes using a card**

After you buy a physical minutes card from a store:
1. Scratch off the silver panel on the back of the card to reveal the PIN (a long number, usually 15–20 digits).
2. Go to your carrier's website and log in to your account, or call the carrier's customer service number on the back of the card.
3. Find the "Add Airtime" or "Add Minutes" section.
4. Enter the PIN from the card and confirm.
5. Your minutes (and any texts or data) will be added to your account right away.

You can also add minutes directly from your phone by dialing a special code. For Tracfone, you dial *22890 and follow the voice prompts. The carrier's customer service line can walk you through this step by step if you prefer to talk to a person.

**When prepaid makes sense**

Prepaid is a good fit if you:
- Use your phone mainly for calls and texts, not heavy internet browsing
- Do not want a long-term contract or a credit check
- Want to keep costs predictable and low
- Are buying a phone for a grandchild or elderly parent as a safety device
- Travel internationally and want a temporary US number for a family member visiting from abroad

Prepaid is less ideal if you use a lot of mobile data for streaming videos, video calls, or GPS navigation — in those cases, an unlimited plan from a major carrier may actually cost less per month relative to what you get.

Sources: AARP, Consumer Cellular website, Tracfone website, FCC Consumer Guides (fcc.gov), Tom's Guide.`,
    steps: [
      {
        title: 'Decide which type of prepaid service fits your needs',
        content:
          'Think about how often you use your phone. If you make a few calls per week and send occasional texts, a small prepaid monthly plan (around $10–$20/month) will give you a set allowance each month without worrying about minutes running out unexpectedly. If you use your phone very rarely — maybe only for emergencies — a pay-as-you-go minutes card may be more economical because you only spend money when you actually use it.',
        tip: 'Consumer Cellular offers a helpful quiz on their website (consumercellular.com) that asks about your usage and recommends a plan. AARP members get a 5% discount.',
      },
      {
        title: 'Buy a card or sign up for a plan',
        content:
          'To buy a physical minutes card: go to the phone or electronics section at Walmart, Target, CVS, or another store listed above. Look for cards from Tracfone, Straight Talk, or your carrier. Cards come in different dollar amounts — $20, $30, $50 — which correspond to different amounts of minutes and how long they stay active. To sign up for a monthly prepaid plan, visit the carrier\'s website or call their customer service line. You will need to provide a mailing address for the SIM card (a tiny chip that goes in your phone) if you are not already using that carrier.',
        tip: 'A SIM card is a small chip — about the size of a fingernail — that tells your phone which carrier and phone number to use. If you are switching carriers, you will need a new SIM. Most carriers will mail you one for free or provide one at a store.',
      },
      {
        title: 'Scratch off and record the PIN',
        content:
          'On the back of a physical minutes card, there is a silver scratch-off panel covering a long number called a PIN (Personal Identification Number). Use a coin to gently scratch it off, the same way you would scratch a lottery ticket. Write down the PIN on a piece of paper before you enter it anywhere — if you make a typo online or get disconnected during a call, you will need the number again.',
        warning:
          'Never buy a minutes card if the scratch-off panel looks like it has already been scratched. This is a common scam — someone scratches the PIN in the store, writes it down, and then you buy a card with no usable value on it.',
      },
      {
        title: 'Add the minutes to your account',
        content:
          'Go to your carrier\'s website on a phone or computer and log in (or create a free account if this is your first time). Look for a link that says "Add Airtime," "Add Minutes," or "Refill." Enter the PIN from your card when prompted. The minutes will be added to your account right away. Alternatively, call your carrier\'s toll-free number (printed on the card and in your paperwork) and a representative will add the minutes for you over the phone.',
        tip: 'Keep your account username and password written in a safe place at home. You will need them each time you add minutes online.',
      },
      {
        title: 'Check your balance and expiration date',
        content:
          'After adding minutes, check your balance to make sure the addition went through. On Tracfone, you can dial *777# from your phone and it will display your minutes, texts, data, and expiration date. Most other carriers have a similar shortcut, or you can check your balance on the carrier\'s website or app. Pay attention to the expiration date — unused minutes may expire after 30, 60, or 90 days depending on the card you purchased. Add more minutes before they expire to keep your account active.',
        tip: 'Some carriers let you "roll over" unused minutes into the next period if you add minutes before the current ones expire. Check your carrier\'s terms.',
      },
      {
        title: 'Call customer service if you need help',
        content:
          'Every prepaid carrier has a toll-free customer service line. Consumer Cellular is known for having helpful, patient phone support: 1-888-345-5509. Tracfone\'s number is 1-800-867-7183. You can also visit the carrier\'s website and use their live chat feature if you prefer typing to talking on the phone. Representatives can help you add minutes, troubleshoot a card that does not seem to work, check your balance, or transfer your number if you switch phones.',
      },
    ],
  },

  {
    slug: 'how-to-use-windows-magnifier-and-narrator-2026',
    title: 'How to Make Your Windows PC Easier to See and Use',
    excerpt:
      'Windows has built-in tools to make text larger, read content aloud, and boost contrast — no extra software needed. Works on Windows 10 and Windows 11.',
    category: 'windows-guides',
    tags: [
      'magnifier',
      'narrator',
      'high contrast',
      'accessibility',
      'large text',
      'Windows 10',
      'Windows 11',
      'vision',
      'screen reader',
    ],
    readTime: '9 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=Jl6WBkNkKis',
    body: `Windows 10 and Windows 11 both come with powerful accessibility tools already installed on your computer. You do not need to download anything or pay for any software. These tools can make the screen easier to read, have the computer speak text aloud, and make the mouse pointer much easier to see.

This guide covers four tools: Magnifier, Narrator, High Contrast mode, and the mouse pointer size setting.

**Magnifier — zoom in on any part of the screen**

Magnifier works like a magnifying glass for your computer screen. You can zoom in on text, images, buttons, or anything else on the screen. It does not change your computer's settings permanently — you can turn it on when you need it and turn it off when you are done.

To turn on Magnifier instantly: press and hold the Windows key (the key with the Windows logo, usually in the lower-left area of the keyboard) and press the Plus (+) key at the same time. Each time you press Windows + Plus, the screen zooms in further. To zoom back out, press Windows + Minus (-). To close Magnifier and return to normal view, press Windows + Escape.

There are three Magnifier view modes:
- **Full Screen** — the entire screen is zoomed in. You move the mouse to scroll around.
- **Lens** — a small rectangular magnified window follows your mouse cursor.
- **Docked** — a magnified panel appears at the top of the screen while the rest of the screen stays normal.

You can switch between these modes inside the Magnifier app window, or by going to Settings > Accessibility > Magnifier.

**Narrator — have your computer read text aloud**

Narrator is a built-in screen reader. It can read web pages, documents, emails, buttons, and menus aloud so you do not have to strain to read small text.

To turn Narrator on or off: press Windows key + Ctrl + Enter at the same time. When Narrator starts, it will begin reading whatever is on your screen and will announce itself. To stop Narrator, press Windows key + Ctrl + Enter again, or say "Stop Narrator" if you have voice control enabled.

When Narrator is running, it reads text wherever your mouse cursor or keyboard focus moves. You can use the Tab key to move between buttons and links and Narrator will read each one aloud.

**High Contrast mode — make text sharper and easier to read**

High Contrast mode changes the colors on your screen to a high-contrast color scheme — typically white or bright yellow text on a black background. Many people with low vision find this much easier to read than standard light backgrounds with dark text.

To turn on High Contrast mode: press the Left Alt + Left Shift + Print Screen keys all at the same time. A dialog box will appear asking if you want to turn on High Contrast — click "Yes." To turn it off, press the same key combination again.

You can also turn it on through Settings: open Settings (press Windows key + I), go to Accessibility, then Contrast Themes. Choose one of the four themes and click Apply.

**Making the mouse pointer bigger and easier to see**

If you find it hard to see the mouse pointer on the screen, you can make it larger and change its color.

Open Settings by pressing Windows key + I. Go to Accessibility. Select Mouse pointer and touch. Under "Mouse pointer size," drag the slider to the right to make the pointer larger. You can also change the pointer color to black, white, or a custom color under "Mouse pointer color."

**How to get to Ease of Access / Accessibility settings**

All of these features live in one place: the Accessibility section of Settings. In Windows 11, press Windows key + I to open Settings, then click "Accessibility" in the left sidebar. In Windows 10, the same section is called "Ease of Access" — press Windows key + I, then click "Ease of Access."

If you prefer using the search bar, click the magnifying glass icon in the taskbar (the bar along the bottom of your screen) and type "Magnifier," "Narrator," or "Ease of Access" to go directly to the setting you need.

Sources: Microsoft Support (support.microsoft.com), How-To Geek, GCFGlobal.`,
    steps: [
      {
        title: 'Turn on Magnifier to zoom in',
        content:
          'Press and hold the Windows key (the key with the four-square Windows logo, usually in the bottom-left of your keyboard) and press the Plus sign (+) at the same time. The screen will zoom in. Press Windows + Plus again to zoom in further. Press Windows + Minus (-) to zoom out. Press Windows + Escape to close Magnifier and return to your normal view. You can adjust how much the screen zooms each press by opening the Magnifier app window and changing the zoom increment from 100% to a smaller number like 25% or 50%.',
        tip: 'Quick Tip: If you are browsing a website or reading an email and the text is too small, pressing Ctrl + Plus in most browsers will also zoom in on that page without turning on the full Magnifier.',
      },
      {
        title: 'Change the Magnifier view mode',
        content:
          'When Magnifier is on, you will see a small Magnifier toolbar on the screen. Click the gear icon (Settings) in that toolbar to open Magnifier settings. Under "Magnifier view," choose Full Screen (the whole screen zooms), Lens (a zoom window follows your mouse), or Docked (a magnified bar at the top of the screen). Full Screen is the most common choice for people who want everything larger. Docked is useful if you want to read a small area closely while keeping the rest of the screen normal.',
        tip: 'You can also change the view by opening Settings (Windows key + I), clicking Accessibility or Ease of Access, then clicking Magnifier.',
      },
      {
        title: 'Turn on Narrator to hear text read aloud',
        content:
          'Press and hold the Windows key, then press Ctrl + Enter at the same time (all three keys together: Windows + Ctrl + Enter). Narrator will start speaking right away. It will announce "Narrator on" and begin reading what is on your screen. Move your mouse over text and Narrator will read it. Press Tab to move between buttons and links and Narrator will announce each one. To turn Narrator off, press Windows + Ctrl + Enter again.',
        tip: 'The first time you start Narrator, a welcome screen may appear with a tutorial. The tutorial is helpful and takes about five minutes to go through.',
        warning:
          'Narrator reads everything on the screen, including dialog boxes and notifications. If it becomes overwhelming, press Windows + Ctrl + Enter to turn it off at any time.',
      },
      {
        title: 'Turn on High Contrast mode',
        content:
          'Press and hold the Left Alt key, the Left Shift key, and the Print Screen key all at the same time. (Print Screen is usually labeled "PrtScn" or "PrtSc" and is located in the upper-right area of the keyboard.) A small window will appear asking if you want to turn on High Contrast — click "Yes." The screen colors will change immediately to a high-contrast theme. To turn it off, press the same three keys again. You can also choose a specific contrast theme through Settings > Accessibility > Contrast Themes.',
        tip: 'If pressing three keys at once is difficult, you can enable Sticky Keys in the same Accessibility settings. Sticky Keys lets you press key combinations one key at a time instead of all at once.',
      },
      {
        title: 'Make the mouse pointer larger',
        content:
          'Press the Windows key + I to open Settings. Click "Accessibility" (Windows 11) or "Ease of Access" (Windows 10). Click "Mouse pointer and touch" (Windows 11) or "Mouse pointer" (Windows 10). You will see a slider labeled "Mouse pointer size." Drag it to the right to make the pointer larger. The pointer will grow as you move the slider — stop when it feels comfortable to see. You can also pick a different color: white on a dark background, black on a light background, or a custom color like orange or yellow for maximum visibility.',
        tip: 'Quick Tip: A size of 2 or 3 on the slider is a noticeable improvement for most people. You do not need to go to the maximum size unless you have significant vision difficulty.',
      },
      {
        title: 'Find all accessibility settings in one place',
        content:
          'All four of the tools covered in this guide — Magnifier, Narrator, High Contrast, and mouse pointer size — are in the same area of Windows Settings. Press Windows key + I to open Settings. In Windows 11, click "Accessibility" in the left column. In Windows 10, click "Ease of Access." From there you will see every accessibility option organized by category: Vision, Hearing, and Interaction. Browse through to find additional options like making text larger across the whole system (under "Text size") without zooming the entire screen.',
        tip: 'To make all text on Windows larger without using Magnifier, go to Settings > Accessibility > Text size (Windows 11) or Settings > Ease of Access > Display > Make text bigger (Windows 10). Drag the slider and click Apply.',
      },
    ],
  },
];
