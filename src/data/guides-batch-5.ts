// Batch 5: High-value senior & beginner guides (April 2026)
import type { Guide } from './guides';

export const guidesBatch5: Guide[] = [
  {
    slug: 'what-to-do-phone-stolen',
    title: 'What to Do If Your Phone Is Lost or Stolen',
    excerpt: 'Act fast to protect your accounts, lock your device remotely, and prevent anyone from accessing your personal information.',
    category: 'safety-guides',
    tags: ['phone', 'stolen', 'lost', 'security', 'find my phone'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/27opg4HVzW8',
    publishedAt: '2026-04-14',
    body: `Losing your phone — or having it stolen — is stressful. But there are steps you can take right now to protect your personal information, lock your device remotely, and prevent anyone from accessing your accounts. Acting quickly makes a big difference.

**The most important thing: you have a window of time.** Most phone thieves immediately try to access email, banking apps, and photos. The steps below will lock them out.

**Step 1: Use another device to locate your phone.** If you have an iPhone, go to icloud.com/find on any computer or tablet and sign in with your Apple ID. If you have an Android, go to android.com/find and sign in with your Google account. You'll see a map showing where your phone is (if it's still on).

**Step 2: Lock your phone remotely.** On the same "Find My" or "Find My Device" website, choose "Mark as Lost" (iPhone) or "Lock" (Android). This locks the screen with a PIN and shows a message (like your name and a callback number) on the lock screen.

**Step 3: Change your most important passwords.** From a computer or tablet, change the password on your email account first — because your email is used to reset every other password. Then change your banking app password and Apple ID or Google account password.

**Step 4: Contact your phone carrier.** Call your carrier (AT&T, Verizon, T-Mobile, etc.) and tell them your phone was stolen. They can suspend your service so the thief can't make calls on your account or use your data plan. They can also flag your phone's unique ID (called an IMEI) so it can't be activated on another account.

**Step 5: File a police report.** If the phone was stolen, file a report with your local police department. You'll need the report for your insurance claim. Note your phone's IMEI number, which you can find on your original box or in your carrier's account portal.

**Step 6: If you can't recover the phone, erase it.** On icloud.com/find or android.com/find, select "Erase Device." This permanently wipes all your data. Do this only if you're sure you won't get the phone back — erasing is permanent.

**Quick Tip:** Write down your phone's IMEI number now (before anything happens) and keep it somewhere safe. You can find it in Settings → About Phone, or printed on the original box.`,
    steps: [
      { title: 'Locate your phone remotely', description: `On a computer, go to icloud.com/find (iPhone) or android.com/find (Android). Sign in and see your phone's last known location on a map.` },
      { title: 'Lock the screen remotely', description: 'Click "Mark as Lost" (iPhone) or "Lock Device" (Android). This prevents anyone from getting past the lock screen without your PIN.' },
      { title: 'Change your email password immediately', description: 'On a computer, change your Gmail, Outlook, or Apple Mail password. Your email controls access to all your other accounts — this is the most critical step.' },
      { title: 'Call your phone carrier to suspend service', description: `Call the number on the back of your carrier's card (or their website) and tell them your phone was lost or stolen. They can suspend service so the thief can't use your plan.` },
      { title: 'File a police report', description: 'Call your local non-emergency police line and report the theft. Ask for a case number for your insurance claim.' },
      { title: `Erase the device if you won't get it back`, description: `If you're sure the phone is gone, select "Erase" on the Find My website. This permanently deletes all data so no one can access your photos, apps, or messages.` },
    ],
  },
  {
    slug: 'how-to-use-google-lens',
    title: 'How to Use Google Lens to Identify Anything with Your Camera',
    excerpt: 'Google Lens lets you point your camera at text, plants, animals, or products and instantly find out what they are — no typing needed.',
    category: 'essential-skills',
    tags: ['google lens', 'camera', 'android', 'iphone', 'identify', 'translate'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/oR1q_XZjSd4',
    publishedAt: '2026-04-14',
    body: `Google Lens is one of the most useful tools on your phone — and most people have never heard of it. It lets you point your camera at almost anything and get instant information: the name of a plant, a translation of text in another language, information about a restaurant, or a link to buy a product you see in a store.

**What Google Lens can do:**
- Identify plants and animals from a photo
- Translate text in another language (like a restaurant menu in Spanish or French)
- Identify a product and show you where to buy it online
- Search for similar images online
- Copy handwritten or printed text into your phone so you can paste it elsewhere
- Identify landmarks and buildings

**How to open Google Lens:**

On Android phones: Open the Google app (the colorful "G" icon). Tap the colorful camera icon at the right side of the search bar. Your camera will open in Lens mode.

On iPhone: Download the free Google app from the App Store. Open it and tap the camera icon next to the search bar.

On any phone: Open Google Photos and find a photo you've already taken. Tap the Google Lens icon (it looks like a small camera with a circle) at the bottom.

**How to use it:**
1. Point your phone's camera at whatever you want to identify.
2. Tap the shutter button (the circle on screen) to take a photo, or just hover over text to see it analyzed live.
3. Google Lens shows you information at the bottom of the screen. Swipe up for more details.

**Translating text:** Point Google Lens at any text in a foreign language. Tap "Translate" at the bottom. The words on your screen will be replaced instantly with English text.

**Copying text from paper:** Point Lens at any printed text — a receipt, a label, a letter. Tap "Text" at the bottom. You'll see the text appear that you can select and copy — no typing needed.

**Quick Tip:** Google Lens works with photos you've already taken too. Open Google Photos, tap any photo, then tap the Lens icon at the bottom. This is great for identifying plants or products you photographed earlier.`,
    steps: [
      { title: 'Open Google Lens', description: 'On Android: open the Google app and tap the camera icon in the search bar. On iPhone: download the Google app and tap the camera icon. You can also open Google Photos and tap the Lens icon on any photo.' },
      { title: 'Point your camera at anything', description: 'Aim your camera at the item, plant, animal, text, or product you want to identify. Hold it steady for a second.' },
      { title: 'Tap the shutter button', description: 'Tap the circle button to capture a still image, or hold the camera steady to let Lens work live. Results appear at the bottom of the screen.' },
      { title: 'Explore the results', description: 'Swipe up from the bottom of the screen to see more information. Tap any result to open the full details or website.' },
      { title: 'Use "Translate" for foreign text', description: 'If you see text in another language, tap "Translate" in the menu at the bottom. The text on your screen will switch to English instantly.' },
    ],
  },
  {
    slug: 'how-to-block-spam-calls-iphone',
    title: 'How to Block Spam Calls on an iPhone',
    excerpt: 'Tired of robocalls and scam calls? Here\'s how to silence unknown callers, block specific numbers, and turn on scam protection on your iPhone.',
    category: 'safety-guides',
    tags: ['spam calls', 'robocalls', 'iphone', 'block calls', 'silence unknown callers'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/nzYKHHVRKKQ',
    publishedAt: '2026-04-14',
    body: `Spam calls — robocalls, scam attempts, and unwanted sales calls — are one of the most frustrating parts of owning a phone. Americans receive billions of spam calls every year. The good news is that your iPhone has several built-in tools to significantly reduce them.

**Option 1: Silence Unknown Callers (recommended)**

This setting sends any call from a number that's not in your contacts straight to voicemail — without your phone ever ringing.

To turn it on: Go to Settings → Phone → Silence Unknown Callers → toggle it on (green).

Important: You'll still see missed calls from unknown numbers in your Recent Calls list, and they can still leave a voicemail. Only people in your contacts will cause your phone to ring.

**Option 2: Block a specific number**

After a spam call:
1. Open the Phone app and tap "Recents."
2. Find the number that called you.
3. Tap the blue (i) information icon next to it.
4. Scroll down and tap "Block this Caller."
5. Confirm by tapping "Block Contact."

That number can no longer call you, text you, or FaceTime you.

**Option 3: Turn on carrier spam protection**

Most phone carriers offer free spam call protection:
- AT&T: Download the free "ActiveArmor" app (previously "Call Protect")
- T-Mobile: The "Scam Shield" app is free for all T-Mobile customers
- Verizon: The "Call Filter" app — the basic version is free
- Google Fi: Spam protection is automatic

**Option 4: Use the free Nomorobo app**

Nomorobo is a free service available for some carriers. It automatically blocks known robocall numbers before your phone rings. Visit nomorobo.com to check if your carrier is supported.

**Quick Tip:** Never call back an unknown number you don't recognize, especially if they left no message. Scammers use "one-ring" calls to get you to call a premium-rate number, resulting in charges on your phone bill.`,
    steps: [
      { title: 'Turn on Silence Unknown Callers', description: 'Go to Settings → Phone → Silence Unknown Callers → turn the toggle on (it turns green). This sends all unknown numbers to voicemail automatically.' },
      { title: 'Block a specific number', description: 'Open the Phone app → tap Recents → find the spam number → tap the (i) blue circle → scroll down → tap "Block this Caller" → confirm.' },
      { title: 'Enable carrier spam protection', description: `Download your carrier's free spam protection app: AT&T uses ActiveArmor, T-Mobile uses Scam Shield, Verizon uses Call Filter. Search for the app by name in the App Store.` },
      { title: 'Report spam calls to the FTC', description: 'If you receive repeated scam calls, report them at donotcall.gov or call 1-888-382-1222. Reporting helps the FTC track and take action against scam operations.' },
    ],
  },
  {
    slug: 'how-to-block-spam-calls-android',
    title: 'How to Block Spam Calls on an Android Phone',
    excerpt: 'Stop robocalls and scam calls on your Android phone using the Phone app\'s built-in tools, carrier apps, and Google\'s spam protection.',
    category: 'safety-guides',
    tags: ['spam calls', 'robocalls', 'android', 'block calls', 'google phone'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/oMq5Hq1GBmU',
    publishedAt: '2026-04-14',
    body: `Android phones have several powerful tools to reduce spam calls. Google's Phone app (available on most Android phones) even includes AI-powered spam detection built in.

**Option 1: Turn on Google's spam protection**

If your phone uses the Google Phone app (the green icon with a white phone):
1. Open the Phone app.
2. Tap the three-dot menu (⋮) in the top-right corner.
3. Tap "Settings."
4. Tap "Spam and Call Screen."
5. Turn on "See caller & spam ID" and "Filter spam calls."

When this is on, Google automatically identifies and silences suspected spam calls. You'll see a "Spam" label on suspicious calls.

**Option 2: Block a specific number**

After a spam call:
1. Open the Phone app and tap "Recents."
2. Tap the number that called you.
3. Tap "Block / report spam."
4. Check the box for "Report call as spam" if you want to help others.
5. Tap "Block."

**Option 3: Use Google's "Call Screen" feature**

Some Pixel phones have a "Call Screen" feature where Google's assistant answers suspected spam calls for you. If it's a real person with a real reason to call, they can say who they are and you'll see a transcript on screen before deciding whether to answer.

**Option 4: Enable carrier spam protection**

- AT&T: Download "ActiveArmor" app (free)
- T-Mobile: Download "Scam Shield" app (free)
- Verizon: Download "Call Filter" app (free basic version)

**Option 5: Try a third-party app**

The app "Hiya" (free, from the Google Play Store) identifies spam calls before you answer. It also shows you who is calling even if the number isn't in your contacts.

**Quick Tip:** Add your number to the National Do Not Call Registry at donotcall.gov or call 1-888-382-1222. This won't stop scammers (who ignore the list) but it does reduce unwanted sales calls from legitimate companies.`,
    steps: [
      { title: 'Turn on spam protection in the Phone app', description: 'Open the Phone app → tap the three dots (⋮) in the top right → Settings → Spam and Call Screen → turn on "See caller & spam ID" and "Filter spam calls."' },
      { title: 'Block a specific number', description: 'Open the Phone app → tap Recents → tap the spam number → tap "Block / report spam" → check the report box → tap Block.' },
      { title: `Enable your carrier's protection app`, description: `Search the Play Store for your carrier's app: AT&T ActiveArmor, T-Mobile Scam Shield, or Verizon Call Filter. Download and follow the setup.` },
      { title: 'Register on the Do Not Call Registry', description: 'Go to donotcall.gov or call 1-888-382-1222 to register your number. Legitimate telemarketers are required by law to honor the list.' },
    ],
  },
  {
    slug: 'how-to-cancel-subscriptions',
    title: 'How to Find and Cancel Subscriptions You Don\'t Use',
    excerpt: 'Many people are paying for apps and services they forgot about. Here\'s how to find every subscription and cancel the ones you no longer want.',
    category: 'tips-tricks',
    tags: ['subscriptions', 'cancel', 'streaming', 'save money', 'apps'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/MQkHY4DOdfw',
    publishedAt: '2026-04-14',
    body: `Subscription charges are easy to forget about — especially the small ones. A $9.99 streaming service, a $4.99 app, a $12.99 cloud storage plan. Individually they seem small, but together they can add up to $50–$100 or more per month without you realizing it.

The good news is that finding and canceling them is straightforward.

**Step 1: Check your bank or credit card statement**

The simplest way to find every subscription: look at your bank or credit card statement from the last three months. Look for any recurring charges that happen every month or year. Write them down.

Online banking makes this easier: log in to your bank's website or app, go to your transaction history, and look for charges that repeat each month.

**Step 2: Check Apple subscriptions (iPhone/iPad users)**

Open Settings → tap your name at the top → tap "Subscriptions." You'll see every subscription currently tied to your Apple ID, sorted by active and expired. To cancel one, tap it and tap "Cancel Subscription."

**Step 3: Check Google Play subscriptions (Android users)**

Open the Google Play Store app → tap your profile picture in the top right → tap "Payments & Subscriptions" → tap "Subscriptions." You'll see every subscription tied to your Google account.

**Step 4: Check PayPal (if you use PayPal)**

If you use PayPal to pay for things online: log in to PayPal → tap the Settings gear → tap "Payments" → tap "Manage automatic payments." You'll see every service that has permission to charge your PayPal. Cancel any you don't use.

**Step 5: Cancel directly with the service**

For subscriptions not listed in any of the above places, go directly to that service's website and look for "Account" or "Billing" settings. Every legitimate subscription service is required to offer an easy cancellation option.

If a service makes it hard to cancel (buried menus, endless pop-ups), you can cancel the payment through your bank or credit card company instead — this is always your right.

**Quick Tip:** Use a free service like Rocket Money (rocketmoney.com) or Trim (hellotrim.com) to automatically scan your bank statements for subscriptions. They identify recurring charges in seconds and can even cancel some on your behalf.`,
    steps: [
      { title: 'Check your bank statement for recurring charges', description: 'Log in to your bank or open your statement. Look for any charges that repeat each month (or year). Write down every subscription you find.' },
      { title: 'Review Apple subscriptions', description: 'On iPhone: Settings → tap your name → Subscriptions. See all active subscriptions. Tap one → Cancel Subscription to cancel it.' },
      { title: 'Review Google Play subscriptions', description: `On Android: Open Play Store → tap your profile photo → Payments & Subscriptions → Subscriptions. Cancel any you don't want.` },
      { title: 'Cancel PayPal automatic payments', description: 'Log in to PayPal → Settings (gear icon) → Payments → Manage automatic payments. Cancel permission for any service you no longer use.' },
      { title: `Cancel directly on the service's website`, description: `For anything not found above, visit the service's website and look for Account → Billing → Cancel. Every legitimate service must let you cancel.` },
    ],
  },
  {
    slug: 'how-to-use-voice-to-text',
    title: 'How to Dictate Text Instead of Typing on Your Phone',
    excerpt: 'You can talk to your phone instead of typing. This guide shows you how to use voice-to-text on iPhone and Android to send messages, write emails, and more.',
    category: 'essential-skills',
    tags: ['voice to text', 'dictation', 'talk to type', 'accessibility', 'iphone', 'android'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/ZAXS0kFCyaI',
    publishedAt: '2026-04-14',
    body: `Typing on a small phone screen can be frustrating — especially if you have larger fingers, or if your hands aren't as steady as they used to be. The good news: you don't have to type. You can talk to your phone and it will type for you, almost perfectly.

This feature is called voice-to-text (or dictation), and it works in messages, emails, notes, web searches, and almost anywhere else you'd normally type.

**How to use it on iPhone:**

1. Open any app where you normally type — like Messages, Mail, or Notes.
2. Tap where you'd normally type to open the keyboard.
3. Look for a microphone icon on the keyboard — it's usually near the space bar at the bottom.
4. Tap the microphone.
5. Speak clearly and naturally. Your words appear on screen as you talk.
6. When you're done, tap the microphone again or tap "Done."

You can say punctuation out loud: say "period" for a period, "comma" for a comma, "exclamation mark" for !, or "new line" to start a new paragraph.

**How to use it on Android:**

1. Open any app where you type.
2. Tap the text box to open the keyboard.
3. Look for the microphone icon on the keyboard (usually in the top row or near the space bar).
4. Tap it and start speaking.
5. Tap the microphone again to stop.

If you don't see a microphone icon, you can also press and hold the space bar on Google's keyboard to switch to voice mode.

**Using Siri or Google Assistant to send messages hands-free:**

On iPhone: Say "Hey Siri, send a text to [person's name] saying [your message]."
On Android: Say "Hey Google, send a text to [person's name]."

Your assistant will read the message back to you and ask you to confirm before sending.

**Quick Tip:** Voice-to-text gets better with practice. Speak at a normal pace (not too fast, not too slow), and speak in complete phrases rather than one word at a time. If it makes a mistake, just tap the wrong word and retype it.`,
    steps: [
      { title: 'Tap inside any text box', description: 'In Messages, Mail, Notes, or a search bar — tap where you normally type. The keyboard will appear on screen.' },
      { title: 'Tap the microphone icon', description: `Look for a small microphone icon on the keyboard, usually near the space bar. Tap it. You may see a waveform or hear a tone indicating it's listening.` },
      { title: 'Speak clearly and naturally', description: 'Talk at a normal speed. Say punctuation out loud: "period," "comma," "question mark," or "new paragraph." Your words will appear on screen as you speak.' },
      { title: 'Stop speaking when done', description: 'Tap the microphone icon again or tap "Done" to stop. Review what was typed and tap any mistakes to fix them.' },
      { title: 'Try hands-free with Siri or Google', description: 'On iPhone say "Hey Siri, send a text to [name] saying [message]." On Android say "Hey Google, text [name]." Your assistant sends it after you confirm.' },
    ],
  },
  {
    slug: 'what-is-ai-plain-english-guide',
    title: 'What Is Artificial Intelligence (AI)? A Plain-English Guide',
    excerpt: 'AI is in the news constantly. Here\'s what it actually means, what it can do, what it can\'t do, and why you might find it useful in everyday life.',
    category: 'ai-guides',
    tags: ['artificial intelligence', 'ai', 'chatgpt', 'machine learning', 'beginners'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/ad79nYk2keg',
    publishedAt: '2026-04-14',
    body: `You can't read the news without seeing the phrase "artificial intelligence" (AI). It sounds complicated — and a lot of it is — but the basic idea is actually something you probably use every day without realizing it.

**In plain English: what is AI?**

Artificial intelligence is computer software that's been trained to recognize patterns and respond in helpful ways. It learns from enormous amounts of information — like everything ever written on the internet — and uses that to answer questions, write things, make suggestions, and more.

Think of it like this: if you asked a person who had read every book, article, and website ever written to answer your question, they'd have a lot to say. AI works similarly — it's been trained on vast amounts of text and can draw on all of it to help you.

**AI you're probably already using without knowing it:**

- **Autocomplete on your phone** — when your keyboard suggests the next word, that's AI
- **Spam filters in your email** — AI reads your email to decide what's spam
- **Movie and show recommendations** — Netflix, Hulu, and YouTube use AI to suggest what to watch
- **Voice assistants** — Siri, Alexa, and Google Assistant are powered by AI
- **Face unlock on your phone** — AI recognizes your face

**What is ChatGPT and similar tools?**

ChatGPT is a product from a company called OpenAI. It's an AI you can type or talk to, and it will answer questions, write things for you, explain confusing topics, help you draft emails, and much more — all in plain conversational language.

You can use it for free at chat.openai.com.

Similar tools include Google Gemini (gemini.google.com) and Microsoft Copilot (copilot.microsoft.com), which is built into Windows.

**What AI is good at:**
- Answering questions in plain English
- Writing first drafts of letters, emails, and messages
- Explaining complicated topics in simple terms
- Translating languages
- Summarizing long documents

**What AI is NOT good at:**
- Giving medical, legal, or financial advice (it can make mistakes — always verify with a professional)
- Knowing about events that happened recently (AI knowledge has a cutoff date)
- Knowing personal facts about you (unless you tell it)
- Being 100% accurate — AI can "hallucinate" (make things up confidently)

**Quick Tip:** AI tools are not magic. They make mistakes. Never rely on AI alone for important decisions about your health, money, or legal matters. Use it as a starting point, then verify with a real professional or official source.`,
    steps: [
      { title: 'Understand that AI is just smart software', description: 'AI has been trained on enormous amounts of text and can answer questions, write things, and explain topics. Think of it as a very well-read assistant — helpful, but not always right.' },
      { title: 'Notice the AI you already use', description: 'Autocomplete on your keyboard, spam filters in email, and voice assistants like Siri and Alexa are all forms of AI you already use every day.' },
      { title: 'Try a free AI tool', description: 'Visit chat.openai.com (ChatGPT) or gemini.google.com (Google Gemini). Both are free. Type any question in plain English and see what it says.' },
      { title: 'Know the limits', description: 'AI makes mistakes and can confidently state things that are wrong. Never rely on AI for medical, legal, or financial decisions without verifying with a real professional.' },
    ],
  },
  {
    slug: 'how-to-use-chatgpt-safely',
    title: 'How to Use ChatGPT — A Beginner\'s Guide',
    excerpt: 'ChatGPT is a free AI tool that can answer questions, write things for you, and explain confusing topics. Here\'s how to get started safely.',
    category: 'ai-guides',
    tags: ['chatgpt', 'ai', 'openai', 'artificial intelligence', 'beginners'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/JTxsNm9IdYU',
    publishedAt: '2026-04-14',
    body: `ChatGPT is one of the most useful free tools available right now. You type a question or request in plain English, and it responds with a detailed, conversational answer. Think of it like having a very knowledgeable assistant available 24/7 — one who's read everything and is always willing to help.

Here's how to start using it safely.

**How to access ChatGPT:**

Go to chat.openai.com in your web browser. You can use it without creating an account (the free version lets you ask several questions per day). For unlimited access, you can create a free account.

You can also download the free ChatGPT app from the App Store (iPhone) or Google Play (Android).

**How to ask questions:**

Just type your question the same way you'd ask a person. You don't need special commands or technical language. For example:

- "What is a good way to lower my blood pressure naturally?"
- "Can you write a thank you note to my doctor in my own words?"
- "What does 'insulin resistance' mean in plain English?"
- "What are the pros and cons of a Roth IRA?"
- "My internet keeps dropping — what might be causing it?"

**Practical things you can use it for:**

- **Writing help:** "Help me write a letter to my landlord about the broken heater"
- **Understanding your bills:** "My electric bill mentions 'demand charges' — what does that mean?"
- **Medical explanations:** "My doctor mentioned 'atrial fibrillation' — can you explain it in simple terms?"
- **Tech help:** "How do I turn off notifications on my iPhone?"
- **Recipes:** "What can I make for dinner with chicken, rice, and carrots?"

**What NOT to share with ChatGPT:**

- Your full name and home address together
- Your Social Security number
- Passwords or PINs
- Credit card or bank account numbers
- Anything you'd want kept private (the company may use conversations to improve the AI)

**How to know when not to trust it:**

ChatGPT can make mistakes — sometimes confidently. Always verify important information:
- Health information: verify with your doctor
- Legal questions: verify with a lawyer
- Financial decisions: verify with a financial advisor
- News or current events: check a real news source (ChatGPT's information has a cutoff date)

**Quick Tip:** If ChatGPT says something that surprises you or seems off, it's fine to say "Are you sure about that?" or "Can you double-check that?" It will often correct itself or add important caveats.`,
    steps: [
      { title: 'Go to chat.openai.com', description: 'Open your web browser and go to chat.openai.com. You can start asking questions without creating an account. Or download the free ChatGPT app on your phone.' },
      { title: 'Type your question in plain English', description: `Type any question exactly as you'd ask a person. No technical language needed. Press Enter or tap the send button.` },
      { title: 'Read and follow up', description: 'ChatGPT will respond with a detailed answer. If you want more detail or something clarified, just type a follow-up question.' },
      { title: 'Never share sensitive personal information', description: 'Do not enter your Social Security number, bank account numbers, passwords, or full home address into ChatGPT. Treat it like a public conversation.' },
      { title: 'Verify important information', description: 'For health, legal, or financial questions, use ChatGPT as a starting point — then verify with a real professional before acting on the information.' },
    ],
  },
  {
    slug: 'how-to-share-screen-zoom',
    title: 'How to Share Your Screen on a Zoom Video Call',
    excerpt: 'Screen sharing on Zoom lets you show someone else exactly what\'s on your computer — great for getting tech help, showing photos, or following along on a document together.',
    category: 'essential-skills',
    tags: ['zoom', 'screen sharing', 'video call', 'remote help', 'work from home'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/C4sptqFb0Bk',
    publishedAt: '2026-04-14',
    body: `Screen sharing lets the person you're video calling see exactly what's on your screen. This is incredibly useful if you want someone to help you with a tech problem ("I can just show you what I'm seeing"), if you're working on a document together, or if you want to share photos with family during a call.

Here's how to do it step by step.

**Before you start:** Make sure you're on a Zoom call first. Screen sharing only works during an active call.

**How to share your screen on a computer (Windows or Mac):**

1. During a Zoom call, look at the toolbar at the bottom of the screen.
2. Click the green button that says "Share Screen" (it has a small monitor icon with an upward arrow).
3. A window appears asking what you want to share. You'll see options like "Desktop" (your whole screen), or individual apps.
4. Click "Desktop" to share everything on your screen, or click a specific app (like your Photos or a document) to share only that.
5. Click the blue "Share" button in the bottom-right corner.
6. The other person can now see your screen. A green border will appear around your screen to remind you that you're sharing.
7. To stop sharing: click the red "Stop Share" button at the top of the screen.

**How to share your screen on a phone (iPhone or Android):**

1. During a Zoom call on your phone, tap your screen to make the controls appear.
2. Tap the "Share" button (it looks like a box with an upward arrow).
3. Tap "Screen" to share your entire phone screen.
4. A prompt may appear asking permission. Tap "Start Broadcast" (iPhone) or "Start Now" (Android).
5. To stop: tap "Stop Share" in the Zoom app, or tap the red recording indicator at the top of your screen.

**Quick Tip:** Before sharing, close any apps or browser tabs that contain private information (like banking or health apps). Everything on your screen will be visible to everyone on the call.`,
    steps: [
      { title: 'Start or join a Zoom call', description: 'Screen sharing only works during an active Zoom video call. Join or start your call first.' },
      { title: 'Click "Share Screen" in the toolbar', description: 'On a computer, look at the bottom of the Zoom window for the green "Share Screen" button (with an upward arrow icon). Click it.' },
      { title: 'Choose what to share', description: 'A menu appears. Click "Desktop" to show your entire screen, or click a specific app to show only that window. Then click the blue "Share" button.' },
      { title: `Confirm you're sharing`, description: `A green border will appear around your screen. You'll see a toolbar at the top saying "You are screen sharing." The other person can now see your screen.` },
      { title: 'Stop sharing when done', description: 'Click the red "Stop Share" button that appears at the top of your screen. Your screen will become private again immediately.' },
    ],
  },
  {
    slug: 'how-to-set-up-emergency-sos-iphone',
    title: 'How to Set Up Emergency SOS on Your iPhone',
    excerpt: 'Emergency SOS lets you quickly call 911 and alert your emergency contacts with just a few button presses — even without typing a number.',
    category: 'safety-guides',
    tags: ['emergency sos', 'iphone safety', '911', 'emergency contacts', 'medical id'],
    emoji: '🆘',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/0W8KOCF1SFA',
    publishedAt: '2026-04-14',
    body: `Emergency SOS is one of the most important safety features on your iPhone. With a few button presses, it can automatically call 911 and send your current location to your emergency contacts — even if you can't speak or if your phone is locked.

This is especially useful if you fall, feel unwell, or are in any situation where you need help quickly but can't dial manually.

**How to trigger Emergency SOS (iPhone 8 and newer):**

Press and hold the Side button (the power button on the right) and either Volume button at the same time. After 2 seconds, a slider appears with emergency options. Slide the "Emergency SOS" slider to call 911.

Alternatively: Press the Side button five times quickly. This immediately calls 911.

**How to set up Emergency Contacts (so your family is notified):**

When you call Emergency SOS, your iPhone automatically sends your location to people you designate as emergency contacts. Here's how to add them:

1. Open the Health app (the heart icon — it comes preinstalled on all iPhones).
2. Tap your profile picture in the top-right corner.
3. Tap "Medical ID."
4. Tap "Edit" in the top right.
5. Scroll down to "Emergency Contacts."
6. Tap the green + button and choose a contact from your list.
7. Select their relationship to you (spouse, child, sibling, etc.).
8. Tap "Done" to save.

**How to fill out your Medical ID (strongly recommended):**

In the same Medical ID screen, you can fill in:
- Medical conditions (diabetes, heart disease, etc.)
- Allergies
- Blood type
- Medications you're taking

Emergency responders can see this information from your lock screen without needing your password — it can save your life.

**How to set up fall detection (Apple Watch users):**

If you have an Apple Watch, it can detect if you fall and automatically call 911 if you don't respond within 60 seconds. Go to the Watch app on your iPhone → My Watch → Emergency SOS → turn on "Fall Detection."

**Quick Tip:** Test the process so you're familiar with it. You can trigger Emergency SOS and immediately cancel — this won't call 911 as long as you cancel before the countdown ends.`,
    steps: [
      { title: 'Know how to trigger Emergency SOS', description: 'On iPhone 8 or newer: press and hold the Side button + either Volume button until sliders appear, then slide "Emergency SOS." Or press the Side button 5 times quickly.' },
      { title: 'Add emergency contacts in the Health app', description: `Open the Health app → tap your profile → Medical ID → Edit → Emergency Contacts → tap + and add a family member. They'll be notified with your location when you call Emergency SOS.` },
      { title: 'Fill in your Medical ID', description: 'In the Health app Medical ID, enter your blood type, conditions, allergies, and medications. Emergency responders can see this on your lock screen without your password.' },
      { title: 'Enable fall detection on Apple Watch (if you have one)', description: `Open the Watch app → My Watch → Emergency SOS → turn on Fall Detection. Your watch will call 911 automatically if you fall and don't respond.` },
    ],
  },
  {
    slug: 'how-to-spot-fake-online-reviews',
    title: 'How to Spot Fake Online Reviews',
    excerpt: 'Fake reviews are everywhere — on Amazon, Google, Yelp, and beyond. Here\'s how to tell real reviews from paid or fake ones so you can shop with confidence.',
    category: 'safety-guides',
    tags: ['fake reviews', 'amazon', 'yelp', 'google reviews', 'online shopping', 'consumer protection'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/pzR9MwIKCOQ',
    publishedAt: '2026-04-14',
    body: `Online reviews help us decide what to buy, where to eat, and which services to use. But fake reviews — paid for by sellers or generated by software — are a major problem. The FTC estimates that billions of fake reviews are posted online every year.

Here's how to tell real reviews from fake ones.

**Red flag #1: All 5-star reviews**

A product with 500 reviews and every single one is 5 stars is suspicious. Real products get a mix of reviews. Look for products with reviews that include 3, 4, and even 1-2 stars — that mix suggests authenticity.

**Red flag #2: Vague, over-enthusiastic language**

Fake reviews often sound like advertisements: "Absolutely amazing product! Life-changing! Best purchase ever! 10 out of 10!" Real reviews tend to be more specific: "The zipper broke after 3 months, but the material is comfortable and the size fits true."

**Red flag #3: Many reviews posted on the same day**

If 50 reviews were posted in a single day and the product launched recently, that's a sign of a coordinated fake review campaign. Look at the date of reviews — natural review patterns spread out over time.

**Red flag #4: Reviewer has no review history**

Click on the name of the reviewer (on Amazon). If their profile shows they've only ever reviewed this one product, or they've given 5 stars to 40 different products in the same category, those may be paid reviewers.

**Tools to help you:**

- **Fakespot (fakespot.com):** Paste any Amazon product URL and it grades the reviews A–F based on authenticity. Also available as a browser extension.
- **ReviewMeta (reviewmeta.com):** Similar to Fakespot — analyzes Amazon reviews for patterns of fakery.
- **Google's "Sort by: Most Critical" filter:** When reading Google reviews, filter by "Lowest rated" to see real complaints alongside the praise.

**What to look for in trustworthy reviews:**

- Specific details about the product or experience
- A mix of pros and cons in the same review
- Reviews from verified purchasers (Amazon shows "Verified Purchase" badge)
- Reviews that mention the reviewer's specific use case

**Quick Tip:** For local businesses on Yelp, look for the small note that says "Yelp's recommendation software." Yelp automatically filters out reviews that appear untrustworthy — click "Not Currently Recommended" to see what was filtered.`,
    steps: [
      { title: 'Check the overall rating distribution', description: `A healthy product has a mix of ratings. If everything is 5 stars with no criticism at all, that's a red flag. Scroll down to see the star breakdown chart.` },
      { title: 'Read the negative and critical reviews', description: 'Sort reviews by "Most Critical" or "Lowest Rated." Real complaints give you the most useful information — and help you spot if the criticisms seem generic or fake too.' },
      { title: 'Check reviewer profiles', description: `On Amazon, click a reviewer's name. If they have no review history, or have given 5-star reviews to dozens of products in the same category, treat their review with skepticism.` },
      { title: 'Use Fakespot to analyze Amazon listings', description: `Go to fakespot.com, paste the Amazon product page URL, and click Analyze. You'll get a letter grade (A–F) and details about what percentage of reviews appear authentic.` },
      { title: 'Look for specific, balanced reviews', description: 'Trust reviews that mention specific details, include both positives and negatives, and are marked as "Verified Purchase." Vague praise with no specifics is a sign of a fake review.' },
    ],
  },
  {
    slug: 'how-to-free-up-space-android',
    title: 'How to Free Up Storage Space on an Android Phone',
    excerpt: 'Is your Android phone running low on storage? Here\'s how to quickly clear space by removing photos, apps, cached files, and more.',
    category: 'tips-tricks',
    tags: ['android storage', 'free up space', 'clear cache', 'storage full', 'android tips'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/QwyybmZ7UMk',
    publishedAt: '2026-04-14',
    body: `When your Android phone fills up with photos, videos, and apps, it slows down and stops being able to download new apps or take pictures. Here's how to quickly reclaim storage space — step by step.

**How to check your storage:**

Go to Settings → Storage (or Settings → Device Care → Storage on Samsung phones). You'll see a breakdown of how much space is used and what's using it.

**Step 1: Delete or back up your photos and videos**

Photos and videos — especially videos — are usually the biggest storage hogs. A single 1-minute video can be 200MB or more.

Option A: Move photos to Google Photos (free, up to 15 GB):
1. Download the Google Photos app if you don't have it.
2. Open it and tap your profile picture → "Manage storage."
3. Tap "Back up" to upload all your photos to Google's servers.
4. Once backed up, you can safely delete them from your phone to free space.

Option B: Delete photos you don't need:
Open Google Photos or your Gallery app and delete duplicates, blurry shots, and screenshots you no longer need.

**Step 2: Clear app caches**

Apps store temporary files ("cache") that can build up over time. Clearing the cache is safe — it doesn't delete your data, just temporary files.

Go to Settings → Storage → Other Apps (or Apps). Tap any app → Storage → "Clear Cache."

For a quicker option: Settings → Storage → tap "Cached data" → tap OK to clear all caches at once.

**Step 3: Delete apps you don't use**

Go to Settings → Apps. Look through the list for apps you haven't opened in months. Tap any one → "Uninstall." If you need the app again later, you can always download it again for free.

**Step 4: Move files to a cloud service**

If you have documents, downloads, or music taking up space:
- Move files to Google Drive (free 15 GB): open the Google Drive app → tap the + button → Upload.
- Move music to a streaming service like Spotify or YouTube Music instead of keeping songs downloaded.

**Step 5: Use the built-in storage cleaner**

Many Android phones have a built-in "Free Up Space" or "Storage Optimizer" tool. Look for it in Settings → Storage → Free Up Space. It automatically identifies large files, unused apps, and duplicates you can safely delete.

**Quick Tip:** Empty your Downloads folder — it's often full of files you've forgotten about. Open your Files app → Downloads and delete anything you no longer need.`,
    steps: [
      { title: 'Check how much storage you have left', description: `Go to Settings → Storage. You'll see how much is used, what's using it, and how much remains.` },
      { title: 'Back up and clear your photos', description: 'Install Google Photos → back up all photos → then delete local copies. Or manually delete blurry photos, duplicates, and old screenshots.' },
      { title: 'Clear app caches', description: 'Go to Settings → Storage → Other Apps. Tap any app → Storage → Clear Cache. Or tap "Cached data" in the storage screen to clear all caches at once.' },
      { title: 'Uninstall unused apps', description: `Go to Settings → Apps. Tap any app you haven't used in months → Uninstall. You can always re-download free apps later.` },
      { title: 'Empty your Downloads folder', description: 'Open the Files app → tap Downloads → select old files and delete them. This folder often contains forgotten files taking up significant space.' },
    ],
  },
  {
    slug: 'how-to-recognize-phishing-emails',
    title: `How to Recognize Phishing Emails Before It's Too Late`,
    excerpt: 'Phishing emails try to trick you into clicking fake links or giving up passwords. Here are the warning signs to look for in every email.',
    category: 'safety-guides',
    tags: ['phishing', 'email scams', 'spam', 'fraud', 'identity theft', 'email safety'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/XBkzBrXlle0',
    publishedAt: '2026-04-14',
    body: `Phishing emails are designed to look like they come from real companies — your bank, Amazon, the IRS, Apple, or your email provider. Their goal is to get you to click a link that takes you to a fake website, where they steal your password or personal information.

Learning to recognize them is one of the most powerful security skills you can have.

**Warning sign #1: The sender's email address looks off**

This is the most reliable signal. Look at the actual email address (not the display name). Scammers often use addresses like:
- support@apple-security-center.com (not a real Apple address)
- noreply@amazon-accounts.net (Amazon's real address ends in @amazon.com)
- IRS-refund@gmail.com (the IRS never emails from Gmail)

Real companies use their own domain: @apple.com, @amazon.com, @irs.gov.

To see the full email address in Gmail: tap the sender's name at the top. A line appears showing the real address.

**Warning sign #2: Urgent language designed to panic you**

Phrases like "Your account will be suspended in 24 hours!", "You owe $2,347 — pay now or face arrest!", or "URGENT: Unauthorized login detected" are designed to make you act fast without thinking. Real companies give you time to respond.

**Warning sign #3: Generic greetings**

"Dear Customer," "Dear User," or "Dear Account Holder" instead of your name. Your real bank knows your name and uses it.

**Warning sign #4: Links that don't go where they say**

Before clicking any link, hover your mouse over it (on a computer) to see the real web address at the bottom of your screen. If it says "Click here to verify your Amazon account" but the real link goes to a weird website like amaz0n-secure-login.ru, it's fake.

On a phone: press and hold a link (don't tap it) to see the real URL before deciding whether to tap.

**Warning sign #5: Attachments you didn't expect**

Never open an attachment you weren't expecting, even if the email claims to be a receipt, invoice, or shipping notice. Attachments in phishing emails often install malware on your device.

**What to do with a suspicious email:**

- Don't click any links or open attachments.
- If you think it might be real, go directly to the company's website by typing the address yourself (not clicking the email link).
- Report it to your email provider: in Gmail, click the three dots → "Report phishing."
- Forward phishing emails to phishing@reportphishing.antiphishing.org

**Quick Tip:** When in doubt, call the company directly using the phone number on the back of your card or on their official website — never the number in a suspicious email.`,
    steps: [
      { title: `Check the sender's actual email address`, description: `Tap or click the sender's name to reveal the full email address. Real companies use their own domain (@amazon.com, @apple.com, @bankname.com). Watch for extra words, hyphens, or wrong domains.` },
      { title: 'Look for urgency and threats', description: 'Phrases like "suspended in 24 hours," "pay immediately," or "unauthorized access detected" are designed to rush you. Slow down — take a breath before clicking anything.' },
      { title: 'Check for your name', description: 'Your real bank or service knows your name and uses it. "Dear Customer" or "Dear Account Holder" is a warning sign.' },
      { title: 'Hover over links before clicking', description: `On a computer, hover your mouse over any link to see the real URL at the bottom of the screen. On a phone, press and hold the link (don't tap) to see where it actually goes.` },
      { title: 'Never open unexpected attachments', description: `Don't open any attached file you weren't expecting — even PDFs or Word documents. If it claims to be an invoice or receipt, verify by going directly to the company's website.` },
      { title: 'Report it and delete it', description: 'In Gmail, click the three dots → "Report phishing." Then delete the email. Report phishing emails to reportphishing.antiphishing.org to help protect others.' },
    ],
  },
  {
    slug: 'how-to-use-find-my-iphone',
    title: 'How to Set Up and Use Find My iPhone',
    excerpt: 'Find My lets you locate your lost iPhone on a map, make it play a sound, lock it remotely, or erase it if it\'s been stolen.',
    category: 'safety-guides',
    tags: ['find my iphone', 'lost phone', 'stolen phone', 'icloud', 'track phone'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/6INEi5vtE1E',
    publishedAt: '2026-04-14',
    body: `Find My is Apple's built-in service that helps you locate a lost or stolen iPhone, iPad, or Mac. It works even when the device is offline (it uses Bluetooth from nearby Apple devices to report the location). Setting it up takes 2 minutes and can save you significant stress if your phone ever goes missing.

**How to turn on Find My (do this now, before you lose your phone):**

1. Go to Settings on your iPhone.
2. Tap your name at the very top.
3. Tap "Find My."
4. Tap "Find My iPhone."
5. Turn on "Find My iPhone" (green = on).
6. Also turn on "Find My Network" — this lets your phone be found even when it's offline.
7. Turn on "Send Last Location" — this automatically sends your phone's last known location to Apple before the battery dies.

**How to find your phone when it's lost:**

On another iPhone or iPad: Open the "Find My" app (the green icon with a radar) and tap "Devices."

On any computer: Go to icloud.com, sign in with your Apple ID, and click "Find My iPhone."

You'll see a map with your device's location. You can:
- "Play Sound" — your phone will make a loud ping even if it's on silent
- "Mark as Lost" — locks the phone and shows your contact info on screen
- "Erase iPhone" — permanently wipes all data (use only as a last resort)

**How to find someone else's device in your family:**

If you use Family Sharing with family members, you can also see their device locations. Open the Find My app → tap "People" tab. You can see the location of anyone who has shared their location with you.

**What to do when your phone is found by a stranger:**

If you put it in "Lost Mode," the screen shows a message you wrote (like "This is my lost phone — please call [your number]"). Many honest people do return phones they find. If someone contacts you, arrange to meet in a public place (like a police station or coffee shop) to retrieve it.

**Quick Tip:** You can also use the Find My app to locate AirPods, Apple Watch, and AirTags. If someone sends an unknown AirTag with you (which is a tracking concern), you'll automatically receive an alert on your iPhone.`,
    steps: [
      { title: 'Turn on Find My iPhone now', description: 'Settings → tap your name → Find My → Find My iPhone → turn on. Also turn on "Find My Network" and "Send Last Location." Do this before you ever lose your phone.' },
      { title: 'Open Find My on another device when lost', description: 'On another iPhone: open the Find My app → Devices → tap your phone. On a computer: go to icloud.com → Find My iPhone. Sign in with your Apple ID.' },
      { title: 'Make it play a sound', description: 'In Find My, tap your device → tap "Play Sound." Your phone will make a loud alert even on silent mode. Useful for finding it in the couch cushions.' },
      { title: `Mark as Lost if you can't find it`, description: 'In Find My, tap your device → "Mark as Lost." This locks the phone, shows your contact message on screen, and tracks location updates.' },
      { title: 'Erase it only as a last resort', description: `Tap "Erase This Device" only if you're certain you won't get it back. This permanently deletes all data. Once erased, you can no longer track the device's location.` },
    ],
  },
  {
    slug: 'how-to-protect-personal-information-online',
    title: 'How to Protect Your Personal Information Online',
    excerpt: 'Your name, address, and birthdate are valuable to identity thieves. Here are 8 practical steps to keep your personal information private online.',
    category: 'safety-guides',
    tags: ['privacy', 'identity theft', 'personal information', 'online safety', 'data protection'],
    emoji: '',
    difficulty: 'Beginner' as const,
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/Uy60wy20ADE',
    publishedAt: '2026-04-14',
    body: `Your personal information — name, address, phone number, birthdate, and Social Security number — is valuable to criminals. Identity theft affects over 15 million Americans every year, according to the FTC. But you can make yourself a much harder target with a few practical steps.

**Step 1: Use strong, unique passwords for every account**

If you use the same password everywhere, one data breach exposes all your accounts. Use a password manager (like the free Bitwarden at bitwarden.com) to create and remember strong, unique passwords. Your device also has built-in password management: iPhone has iCloud Keychain, and Google Chrome has Google Password Manager.

**Step 2: Turn on two-factor authentication on important accounts**

Two-factor authentication (2FA) means that even if someone knows your password, they still can't log in without a code sent to your phone. Enable it on:
- Your email account
- Your bank's website
- Amazon and other shopping accounts
- Social media

**Step 3: Be careful what you share on social media**

Scammers collect information from public Facebook, Instagram, and other profiles. Avoid posting:
- Your home address
- Your birthdate (at least the full date with year)
- When you'll be away from home (announcing vacations)
- Photos that show your house number or street signs

**Step 4: Shred paper documents before throwing them away**

Bills, bank statements, credit card offers, and medical documents contain enough information for identity theft. Use a cross-cut shredder (available for $20–$40) before throwing away any document with your name, address, account numbers, or Social Security number.

**Step 5: Check your credit report every year**

By law, you're entitled to a free credit report from all three major bureaus once per year. Go to annualcreditreport.com (the only official government-authorized free credit report site). Review it for any accounts or activity you don't recognize.

**Step 6: Use secure WiFi when banking or shopping**

Don't check your bank account or shop online when connected to public WiFi (at a coffee shop, library, or airport). Anyone on the same network can potentially see your traffic. Use your phone's cellular data instead when on public networks.

**Step 7: Don't overshare with websites and apps**

When a website or app asks for information, only fill in what's required (marked with an asterisk). You're not required to give a website your birthdate, phone number, or address unless it's genuinely needed for the service.

**Step 8: Freeze your credit**

A credit freeze (also called a "security freeze") prevents anyone — including identity thieves — from opening new credit cards or loans in your name. It's free, it's permanent until you lift it, and it doesn't affect your current credit cards or score. Contact each of the three credit bureaus:
- Equifax: equifax.com
- Experian: experian.com
- TransUnion: transunion.com

**Quick Tip:** Set up a free fraud alert with one bureau (Equifax, Experian, or TransUnion) — by law, they're required to notify the other two. A fraud alert tells lenders to verify your identity before opening any new account in your name.`,
    steps: [
      { title: 'Use a unique, strong password for every account', description: `Download a free password manager like Bitwarden (bitwarden.com) to create and store unique passwords. Or use your iPhone's built-in Keychain or Chrome's Password Manager.` },
      { title: 'Turn on two-factor authentication', description: `For email, banking, and shopping accounts: go to Security Settings and look for "Two-Factor Authentication" or "2-Step Verification." Turn it on — it's the single most effective security step you can take.` },
      { title: 'Check your credit report for free', description: `Go to annualcreditreport.com (the official government-authorized site). Get a free report from each of the three bureaus. Look for accounts or activity you don't recognize.` },
      { title: 'Freeze your credit', description: 'Visit equifax.com, experian.com, and transunion.com individually and set up a free credit freeze at each. This prevents anyone from opening new credit in your name.' },
      { title: 'Never use public WiFi for banking or shopping', description: `At coffee shops, libraries, and airports, use your phone's cellular data (turn off WiFi) when accessing banking apps or shopping sites. Public WiFi is not secure.` },
    ],
  },
];
