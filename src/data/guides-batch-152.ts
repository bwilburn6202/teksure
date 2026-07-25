// TekSure Guides Batch 152 — 4 guides covering: creating a Google account,
// blocking/unfriending on Facebook, Microsoft Word basics,
// and recognizing deepfake videos and photos.
import type { Guide } from './guides';

export const guidesBatch152: Guide[] = [
  {
    slug: 'how-to-make-a-google-account-2026',
    title: 'How to Create a Google Account',
    excerpt:
      'A Google account unlocks Gmail, Google Drive, Photos, and more — all for free. This guide walks you through creating one from scratch, step by step.',
    category: 'essential-skills',
    tags: [
      'google account',
      'gmail',
      'google drive',
      'google photos',
      'google calendar',
      'youtube',
      'password',
      'recovery phone',
      'account setup',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `A Google account is a free account you create with Google — the company behind the Google search engine, Gmail (email), Google Maps, and YouTube. Once you have one account, you get access to a whole family of free services that work together. You do not need to sign up separately for each one.

This guide is written for people who have never set up a Google account before, or who want to start fresh.

**What a Google account gives you**

When you create a Google account, you automatically get:

- **Gmail** — a free email address ending in @gmail.com. You can send and receive messages from anyone.
- **Google Drive** — free online storage where you can save documents, photos, and files. Think of it like a filing cabinet that lives on the internet, not on your computer.
- **Google Photos** — a free place to back up your phone photos so you never lose them if your phone breaks or gets lost.
- **Google Calendar** — a digital calendar where you can write appointments, get reminders, and share events with family.
- **YouTube** — the world's largest free video site. You do not need an account to watch videos, but having one lets you save videos to watch later, subscribe to channels, and more.
- **Google Maps** — works fine without an account, but an account lets you save favorite places and directions.

All of these services use the same username and password. Sign in once and everything is connected.

**A note for iPhone users**

If you use an iPhone, you already have an Apple ID — Apple's version of a Google account. Your Apple ID gives you iCloud (Apple's storage), iMessage (Apple's texting app), and the App Store. A Google account is separate. Many iPhone users have both. You are not required to have a Google account, but Gmail and Google Drive are very popular even among iPhone users because they work on any device.

**Choosing a username**

Your username becomes your email address: username@gmail.com. Choose something professional and easy to remember, especially if you will use this email for important matters like doctor appointments, banking, or family communication. Your full name or a variation of it works well — for example, maryjones1952 or robert.harris.tx. Avoid usernames that include your full birth year, Social Security information, or anything that reveals too much personal detail.

**Choosing a strong password**

A strong password has at least 12 characters and mixes uppercase letters, lowercase letters, numbers, and symbols. For example: Sunshine#River7 is stronger than sunshine123. Write it down and keep it somewhere safe — in a notebook in your home, not on a sticky note on your computer screen.

**Why the recovery phone number matters**

During setup, Google asks for a recovery phone number. This is the most important step many people skip. If you ever forget your password or get locked out of your account, Google will send a code to that phone number so you can get back in. Without it, recovering your account can be very difficult. Add your cell phone number here.

**Keeping your account secure**

Once your account is created, avoid signing in on public computers (at a library, for example) unless you are sure to sign out when you are done. Google will alert you by email if it sees unusual activity — pay attention to those alerts.

Sources: Google Account Help (support.google.com/accounts), AARP Technology (aarp.org/home-family/personal-technology).`,
    steps: [
      {
        title: 'Go to the Google account creation page',
        content:
          'Open your web browser (Chrome, Edge, Safari, or Firefox) and go to accounts.google.com. On that page, click or tap the blue button that says "Create account." A menu will appear — choose "For my personal use."',
        tip: 'If you already see a Google sign-in page, look for the link that says "Create account" near the bottom of the sign-in form.',
      },
      {
        title: 'Enter your name and choose a username',
        content:
          'Type your first name and last name in the boxes provided. Then choose a username — this will become your Gmail address (for example, maryjones1952@gmail.com). If the name you want is already taken, Google will suggest alternatives. Pick one that is easy for you to remember and share with others.',
        tip: 'Your username cannot be changed later without creating a new account, so take a moment to choose one you are happy with.',
      },
      {
        title: 'Create and confirm a password',
        content:
          'Type a password that is at least 8 characters long. Google requires a mix of letters and numbers. A longer password — 12 or more characters — is much safer. Type the same password again in the "Confirm" box to make sure you typed it correctly. Write the password down in a safe place before moving on.',
        warning:
          'Do not use the same password you use for your bank or other important accounts. Each account should have its own unique password.',
      },
      {
        title: 'Add a recovery phone number and backup email',
        content:
          'Google will ask for a recovery phone number. Enter your cell phone number. Google will send a six-digit code to that number to confirm it is yours. Type in the code when it arrives. You can also add a backup email address (if you have one from a family member or a different old account). Both of these help you get back into your account if you ever forget your password.',
        tip: 'Quick Tip: The recovery phone number is the most important safety net for your account. Do not skip this step.',
      },
      {
        title: 'Enter your birthday and gender',
        content:
          'Google asks for your date of birth (month, day, year) and your gender. Your date of birth is used to confirm you meet the age requirement for the service and to personalize certain settings. Select "Prefer not to say" for gender if you do not wish to share that information.',
      },
      {
        title: 'Review and agree to Google\'s terms',
        content:
          'Google will show you its Privacy Policy and Terms of Service. These are the rules and agreements for using the service. Scroll through them, then click "I agree" to continue. Your account will be created immediately after.',
        tip: 'Quick Tip: After your account is created, visit mail.google.com to check your new Gmail inbox. Bookmark that page in your browser for easy access next time.',
      },
    ],
  },

  {
    slug: 'how-to-block-someone-on-facebook-2026',
    title: 'How to Block, Unfriend, or Restrict Someone on Facebook',
    excerpt:
      'Learn the difference between unfriending, blocking, and restricting on Facebook — and how to do each one — so you can control who sees your posts and contacts you.',
    category: 'social-media',
    tags: [
      'facebook',
      'block',
      'unfriend',
      'restrict',
      'unblock',
      'facebook privacy',
      'facebook settings',
      'social media safety',
    ],
    readTime: '6 min',
    thumbnailEmoji: '👥',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Facebook gives you several ways to control your relationship with other people on the platform. The three main options — Unfriend, Restrict, and Block — each do something different. Knowing the difference helps you make the right choice for your situation.

**Unfriend: a quiet parting of ways**

When you unfriend someone, you remove them from your Friends list. Your profiles are no longer connected. They will stop seeing your posts in their feed, and you will stop seeing theirs. Facebook does not send them a notification when you unfriend them — they will only notice if they come to your profile and see the "Add Friend" button instead of "Friends."

After you unfriend someone, they can still send you a friend request again in the future if they want to. They can also see any posts you have set to "Public" (visible to everyone). If your posts are set to "Friends only," they cannot see them.

**Block: a complete cutoff**

Blocking is a stronger action. When you block someone, they cannot see your profile at all, cannot find you by searching for your name, cannot send you messages, and cannot tag you in posts or photos. You will also be unable to see their profile. Blocking goes both ways.

The person you blocked will not receive a notification, but if they try to find your profile, they simply will not be able to. It will appear as if you do not exist on Facebook.

You can unblock someone later, but there is a 48-hour waiting period before you can re-block them again. Also note that unblocking someone does not automatically re-friend them — you would need to send a new friend request if you wanted to reconnect.

**Restrict: the quiet middle option**

Restrict is a tool that lets you stay friends with someone while limiting what they can see. When you Restrict someone, they remain on your Friends list and your friendship looks the same from the outside. However, they will only see posts you share with "Public" — not posts you share with "Friends." They will not know you have restricted them.

This option works well for situations where unfriending someone might cause awkwardness — a coworker, a distant relative, or an acquaintance — but you do not want them reading your personal updates.

**Which one should you choose?**

- Someone you no longer want to keep up with, but no hard feelings: Unfriend
- Someone who is harassing you, contacting you when you do not want them to, or making you feel unsafe: Block
- Someone you want to stay connected to officially, but keep at arm's length: Restrict

**A note about privacy**

For any of these tools to protect your posts fully, make sure your default post audience is set to "Friends" or "Friends except" — not "Public." You can check this in your Facebook settings under Privacy.

Sources: Facebook Help Center (facebook.com/help), AARP Technology (aarp.org/home-family/personal-technology).`,
    steps: [
      {
        title: 'Find the person\'s profile',
        content:
          'Open the Facebook app or go to facebook.com in your browser. In the search bar at the top, type the name of the person you want to unfriend, block, or restrict. Tap or click their name to open their profile page.',
      },
      {
        title: 'Unfriend someone',
        content:
          'On their profile page, look for the "Friends" button (it looks like a person with a checkmark). Tap or click it. A menu will appear with several options. Choose "Unfriend." A confirmation message may appear — click "Confirm" or "Remove." They are now removed from your Friends list. They will not receive a notification.',
        tip: 'Quick Tip: On a computer, the "Friends" button is near the top of their profile, next to their name and photo.',
      },
      {
        title: 'Block someone',
        content:
          'On their profile page, look for three small dots (. . .) near the top right of the page. This is the "More options" menu. Tap or click those dots. Select "Block." Facebook will ask you to confirm — read the short explanation on screen, then click "Confirm." The block goes into effect immediately.',
        warning:
          'Blocking is a significant step. The person will not be able to find you on Facebook at all. If you only want to limit what they see, use Restrict instead.',
      },
      {
        title: 'Restrict someone',
        content:
          'On their profile page, tap or click the "Friends" button. From the menu that appears, choose "Edit Friend List" or look for the "Restrict" option. On some versions of Facebook, you may need to tap "More options" (the three dots) and then choose "Restrict." Once restricted, their name will have a small lock icon in your Friends list on your own end — they will not see any change on their end.',
        tip: 'To view your Restricted list: go to your own profile, tap "Friends," then look for "More" or the gear icon to find "Restricted List."',
      },
      {
        title: 'Unblock someone (if you change your mind)',
        content:
          'To unblock someone, go to the Facebook menu (the three horizontal lines in the app, or the drop-down arrow on the web). Tap "Settings & Privacy," then "Settings." Scroll to "Blocking" or search for it. You will see a list of people you have blocked. Tap "Unblock" next to their name. Note: you must wait 48 hours before you can block that same person again.',
      },
      {
        title: 'Check what others can see on your profile',
        content:
          'To make sure strangers and unfriended people cannot see your posts, go to Settings & Privacy > Settings > Privacy. Look at "Who can see your future posts?" and set it to "Friends" if you want. Also review "Who can send you friend requests?" and "Who can look you up using your email address?" — setting these to "Friends of friends" gives you more control.',
        tip: 'Quick Tip: Facebook has a "View As" tool that lets you see your profile the way a stranger (or a specific person) would see it. Look for it in your profile settings.',
      },
    ],
  },

  {
    slug: 'how-to-use-microsoft-word-basics-2026',
    title: 'How to Use Microsoft Word for the First Time',
    excerpt:
      'Type a letter, change the font size, save your document, and print it — this plain-English guide covers Microsoft Word basics for first-time users.',
    category: 'windows-guides',
    tags: [
      'microsoft word',
      'word processor',
      'typing',
      'font size',
      'bold text',
      'save document',
      'print',
      'share by email',
      'google docs',
      'libreoffice',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Microsoft Word is one of the most widely used programs in the world. It is a word processor — a program that lets you type text, format it to look the way you want, and save or print the finished document. People use Word to write letters, fill out forms, create resumes, and draft anything that needs to be on paper or shared as a file.

This guide is for people who are opening Word for the first time, or who have always felt unsure about where to start.

**What you need**

Microsoft Word is part of Microsoft 365, a subscription service that costs about $70 per year for one person, or $100 per year for a family of up to six. You can also buy a one-time version called "Office Home & Student." Word comes pre-installed on many Windows computers sold in the United States.

If you are not sure whether you have Word, click the Start button (the Windows logo in the bottom-left corner of your screen) and look for "Word" or "Microsoft Word" in your programs list.

**Free alternatives to Microsoft Word**

You do not have to pay for Word to write documents. Two free alternatives work very well:

- **Google Docs** (docs.google.com) — free, works in your web browser, and automatically saves everything to the internet so you never lose your work. You need a free Google account (see our guide on creating a Google account).
- **LibreOffice Writer** (libreoffice.org) — free software you download and install on your computer. It looks and works very much like Word, and it can open and save Word files (.docx).

Both alternatives are excellent for everyday documents like letters and notes.

**Understanding the Word window**

When you open Word, you will see a large white area — this is your blank page. At the top is the Ribbon, a wide toolbar with tabs like "Home," "Insert," and "Layout." Most of what you need for basic documents is on the Home tab.

The blinking vertical line on the page is called the cursor. It shows you where your text will appear when you start typing.

**Saving your work**

Many first-time Word users type a document and then close the window without saving — and lose everything they wrote. Get in the habit of saving early and often.

When you save for the first time, Word asks you to choose a name for the file and where to save it. The default location on Windows computers is the Documents folder. Remember what you name the file, because that is how you will find it again. After the first save, you can press Ctrl+S (hold the Ctrl key and press S) at any time to save your progress without being asked any questions.

To find your file later, open File Explorer (the folder icon on your taskbar) and look in the Documents folder.

**Printing your document**

To print, go to File at the top left, then click Print. You will see a preview of your document on the right side of the screen. Make sure the correct printer is selected in the "Printer" dropdown, then click the big Print button. If your printer is not listed, it may not be connected or may need to be set up.

**Sharing your document by email**

To email a document, save it first. Then open your email program, create a new message, and look for an "Attach" or "paperclip" button. Find your saved document in the Documents folder and attach it. The person you send it to will receive the file and can open it in Word or Google Docs.

Sources: Microsoft Support (support.microsoft.com/en-us/word), GCFGlobal.org (gcfglobal.org/en/word), How-To Geek (howtogeek.com).`,
    steps: [
      {
        title: 'Open Microsoft Word',
        content:
          'Click the Start button (the Windows logo in the bottom-left corner of your screen) and look for "Word" or "Microsoft Word" in the list of programs. Click it to open the program. If you do not see it, try typing "Word" into the search bar next to the Start button. Once Word opens, you will see a welcome screen — click "Blank Document" to start with a fresh, empty page.',
        tip: 'Quick Tip: If you use Word often, right-click its name in the Start menu and choose "Pin to taskbar." That puts a shortcut on the bar at the bottom of your screen so you can open it faster next time.',
      },
      {
        title: 'Type your text',
        content:
          'Click anywhere on the white page area. You will see a blinking line (the cursor) appear. Start typing. Your text appears at the cursor position. Press Enter on your keyboard to start a new paragraph. Press Backspace to delete a character to the left of the cursor. There is no wrong way to start — type a sentence and see how it looks.',
      },
      {
        title: 'Change the font size and make text bold',
        content:
          'To make text bigger, first select it — click at the beginning of the word or sentence, hold down the mouse button, and drag to highlight the text you want to change. The highlighted text will turn blue. Then look at the Home tab at the top of the screen. Find the number in the font size box (it usually shows 11 or 12). Click that box, type a larger number such as 16 or 18, and press Enter. Your text will grow immediately.\n\nTo make selected text bold, click the B button in the Home tab (or press Ctrl+B on your keyboard). Bold text stands out and is easier to read. Click the B again to turn bold off.',
        tip: 'Quick Tip: For most letters and documents, a font size of 12 is standard. Many seniors prefer 14 or 16 for easier reading.',
      },
      {
        title: 'Save your document',
        content:
          'Click the File tab at the very top-left of the Word window. Then click "Save As." A window will open asking where you want to save the file and what to name it. The Documents folder is a good default location. Click in the file name box, delete the existing text, and type a name that describes your document — for example, "Letter to Dr. Smith" or "Holiday Party Invitation." Then click the Save button. Your document is now saved. From this point on, press Ctrl+S (hold Ctrl, tap S) whenever you want to save your latest changes.',
        warning:
          'Do not close Word without saving first. If you try to close an unsaved document, Word will ask if you want to save — always click "Save" unless you truly want to throw away your work.',
      },
      {
        title: 'Print your document',
        content:
          'Make sure your printer is on and connected to your computer. In Word, click the File tab, then click "Print." A Print panel opens on the right side of the screen showing a preview of your document. Check that the correct printer name is shown in the "Printer" section. Click the large "Print" button. Your document will print. If nothing happens, check that the printer has paper and that it is connected (either by USB cable or Wi-Fi).',
        tip: 'Quick Tip: Use the preview on the Print screen to make sure your document looks the way you expect before printing. If text is getting cut off at the edges, go back and reduce the font size or adjust the margins under the Layout tab.',
      },
      {
        title: 'Share your document by email',
        content:
          'Save your document first (Step 4). Then open your email program — Gmail, Outlook, or whatever you use. Start a new email and address it to the person you want to send it to. Look for a paperclip icon or an "Attach" button and click it. A file browser window will open. Navigate to your Documents folder, find your Word file, and double-click it to attach it. Finish writing your message and click Send. The recipient will receive the file attached to your email and can open it on their computer.',
        tip: 'Quick Tip: If the other person does not have Microsoft Word, they can open your file for free using Google Docs — they upload the file to drive.google.com and it opens automatically.',
      },
    ],
  },

  {
    slug: 'how-to-recognize-deepfake-videos-and-photos-2026',
    title: 'How to Recognize Deepfake Videos and Photos',
    excerpt:
      'Deepfakes are AI-generated fake videos and photos of real people. Learn 6 warning signs and how to check before you share or believe what you see.',
    category: 'safety-guides',
    tags: [
      'deepfake',
      'ai-generated images',
      'fake videos',
      'scam alert',
      'celebrity scams',
      'disinformation',
      'media literacy',
      'verify before sharing',
      'ftc',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🎭',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `A deepfake is a photo or video that was made or altered by artificial intelligence (AI) — computer software — to show a real person saying or doing something they never actually said or did. The technology can take someone's face and voice and place them into a completely fabricated scene.

Deepfakes are not new movies or TV effects. They can be created quickly, cheaply, and by almost anyone with a smartphone or laptop. And they are increasingly being used to trick people.

**How scammers use deepfakes**

The most common uses of deepfakes in scams include:

- **Fake celebrity endorsements.** A video appears to show a famous person — a TV doctor, a news anchor, a business leader — recommending an investment, a supplement, or a product. The celebrity never said any of it. The goal is to make you trust the product and buy it, often at high prices or as part of a subscription that is hard to cancel.

- **Fake family emergency videos.** Scammers can clone the voice of a family member using just a short audio sample taken from a social media video. They call or send a video message pretending to be your grandchild, child, or other relative — claiming to be in jail, in a hospital, or in an accident — and asking for money immediately. This is sometimes called a "grandparent scam."

- **Fake news clips.** Doctored videos make it look as if a politician, official, or journalist said something extreme or false. These spread on social media and are designed to anger you or change your beliefs.

- **Romance scams.** A fraudster creates a fake identity using AI-generated photos and videos of an attractive person who does not exist, then builds a relationship with the victim online before asking for money.

**Why deepfakes are hard to spot**

The technology has improved dramatically. A few years ago, deepfakes were easy to spot. Today, the best ones can fool even careful observers. That is why it is important to look beyond the visual and ask: does this make sense? Where did this come from? Is there a real source?

**Six warning signs to look for**

1. **Unnatural blinking or eye movement.** Early deepfakes almost never blinked. Newer ones blink, but the pattern can still look wrong — blinks that happen too fast, too slow, or not at all for long stretches.

2. **Mouth movement that does not match the words.** Watch the lips closely. In a deepfake, the lip movements may be slightly off — like watching a foreign film where the audio is out of sync. Consonants like B, M, and P require specific lip shapes that AI sometimes gets wrong.

3. **Blurry or melting edges around the face.** Look at where the face meets the hairline, the ears, or the collar. In deepfakes, the edge of the face sometimes appears soft, blurry, or inconsistent — especially when the person turns their head.

4. **Strange or repeating backgrounds.** AI-generated backgrounds can loop, ripple, or show objects that look slightly warped. Windows, doorways, and bookshelves behind a person may shift or repeat unnaturally.

5. **Skin and hair that look too smooth or too perfect.** Real people have pores, fine lines, and hair that moves naturally. AI-generated faces often look unusually smooth or have hair that sits strangely — especially at the edges.

6. **The content is too good to be true or designed to make you act fast.** This is not a visual sign, but it is often the most reliable one. A famous doctor endorsing a miracle cure, a celebrity giving away money, or a family member urgently needing cash — these stories are designed to bypass your judgment and push you to act before you think.

**How to verify suspicious videos before sharing**

- **Search for it.** Take a phrase from the video and search for it in Google or another search engine. If the video is real news, multiple legitimate news outlets will have covered it.
- **Check the source.** Who posted the original video? Is it an official account (a verified news organization, a known public figure's account) or an anonymous page?
- **Use a reverse image search.** For photos, right-click the image (on a computer) and choose "Search image" or "Find image source." Google Images and TinEye (tineye.com) can show you where a photo has appeared online before.
- **Look for fact-checking sites.** Snopes.com, FactCheck.org, and PolitiFact.com investigate viral claims and misleading content.
- **When in doubt, do not share.** Sharing a deepfake — even with a comment asking if it is real — helps it spread. If you cannot verify it, hold off.

**What to do if you encounter a deepfake scam**

If you receive a video, call, or message that you believe is a deepfake scam, do not send money and do not click any links. If the "family member" calling sounds like someone you know, hang up and call that person directly using a number you already have saved.

Report deepfake scams to the FTC at reportfraud.ftc.gov. If it involves a fake celebrity endorsement on social media, report it to the platform directly.

Sources: FTC Consumer Information (consumer.ftc.gov), CISA.gov, AARP Fraud Resource Center (aarp.org/money/scams-fraud), How-To Geek (howtogeek.com).`,
    steps: [
      {
        title: 'Understand what you are looking at',
        content:
          'Before watching a video or looking at a photo with skepticism, ask yourself: does this seem designed to make me emotional, alarmed, or eager to act? Deepfakes are almost always attached to a message that pushes you to feel something — urgency, excitement, fear, or anger. That emotional pressure is often the first sign something may not be right.',
      },
      {
        title: 'Watch the face carefully',
        content:
          'Focus on the person\'s face. Watch how they blink — does it look natural? Watch their mouth as they speak — do the lips match the words? Look at the edges of the face where it meets the hair and ears. In a deepfake, these edges may look slightly blurry, shimmery, or inconsistent, especially when the person moves their head.',
        tip: 'Quick Tip: Pause the video and look at a single frozen frame. AI-generated faces often show small imperfections that are easier to see when the video is not moving.',
      },
      {
        title: 'Check the background and lighting',
        content:
          'Look at what is behind the person. Does the background look normal and stable, or does it seem to ripple, repeat, or warp when the person moves? Also notice the lighting — does the light on the person\'s face match the light in the background? Mismatched lighting is a common sign that a face was placed into a scene it was not originally filmed in.',
      },
      {
        title: 'Search for the original source',
        content:
          'Copy a phrase or quote from the video and search for it in Google News (news.google.com). If a real news event is being shown, credible news outlets will have reported on it. If the search returns nothing from known organizations, or returns results that say the story is false, that is a strong signal the video may be fake. For photos, right-click the image on your computer and choose "Search image" to do a reverse image search.',
        tip: 'Quick Tip: Go to Snopes.com or FactCheck.org and search the topic there. These independent fact-checking sites investigate viral photos and videos.',
      },
      {
        title: 'Be especially cautious about money requests',
        content:
          'If a video, voice message, or phone call shows or sounds like a family member in trouble and asks you for money — especially gift cards, wire transfers, or cryptocurrency — stop and verify before doing anything. Hang up or close the message. Call that family member directly using a phone number you already have saved in your phone. Scammers count on you acting fast without checking.',
        warning:
          'Legitimate emergencies do not require you to pay with gift cards. No government agency, hospital, or family member in a real emergency will ask you to buy Google Play or Apple gift cards and read the numbers over the phone. That is always a scam.',
      },
      {
        title: 'Report what you find and do not share unverified content',
        content:
          'If you believe you have seen a deepfake scam, report it to the FTC at reportfraud.ftc.gov. If it appeared on Facebook, Instagram, YouTube, or another platform, use the platform\'s "Report" button to flag the content — look for the three dots next to a post and tap "Report." Most importantly, do not forward or share content you cannot verify. Sharing unverified content — even to warn others — helps it reach more people.',
        tip: 'Quick Tip: Share this guide with a friend or family member. The more people know how to spot deepfakes, the harder they are to use as a tool for scams.',
      },
    ],
  },
];
