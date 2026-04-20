import { Guide } from './guides';

export const guidesBatch26: Guide[] = [
  {
    slug: 'canva-basics-guide',
    title: 'How to Use Canva to Create Cards, Flyers, and Photos',
    excerpt: 'Canva is a free design tool that makes it easy to create birthday cards, holiday greetings, flyers, and photo collages — no design experience needed.',
    category: 'app-guides',
    tags: ['Canva', 'design', 'cards', 'photos', 'free tool'],
    readTime: '6 min',
    thumbnailEmoji: '🎨',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Canva is a free online design tool that lets anyone create polished-looking cards, flyers, social media posts, and photo collages using drag-and-drop. You do not need any design experience — Canva provides thousands of ready-made templates for every occasion. You choose a template, swap in your own photos and text, and download the finished design in minutes.

Canva works in a web browser (canva.com) and also has a free app for iPhone and Android. The free version has access to thousands of templates and design elements. A paid upgrade (Canva Pro) exists but is not necessary for most everyday uses — the free tier is genuinely capable.

Some of the most popular uses for everyday users: creating birthday cards with a grandchild's photo, making a holiday greeting to email to family, designing a simple flyer for a church or community event, making a photo collage from vacation pictures, and creating a customized calendar as a gift.

Canva's template library is organized by use case: Birthday, Invitation, Flyer, Certificate, Card, Instagram Post, Facebook Cover, and many more. When you choose a template, all the spacing, fonts, and colors are already set up — you change the text and photos to personalize it.

You can upload photos from your phone or computer directly into Canva. Canva also has a built-in library of free stock photos, icons, and illustrations you can use in any design.

Finished designs can be downloaded as image files (JPEG or PNG), printed through Canva's printing service, or shared via a link. Canva also integrates with email — you can send a design directly from within the app.`,
    steps: [
      {
        title: 'Create a Free Canva Account',
        content: 'Go to canva.com in your browser (or download the Canva app on your phone). Click "Sign up" and create a free account with your email address. You can also sign in using an existing Google or Facebook account.',
        tip: 'Choose "Personal" or "For Personal Use" when asked what you will use Canva for — this keeps you on the free plan.',
      },
      {
        title: 'Choose a Template',
        content: 'On the Canva home screen, type what you want to create in the search bar — for example, "birthday card" or "holiday flyer." Browse the results and click a template that appeals to you. Click "Customize this template" to open the design editor.',
      },
      {
        title: 'Edit the Text',
        content: 'Click on any text in the template to select it. The selected text becomes editable — type your own words to replace the placeholder text. Change the font size using the number field in the top toolbar. Change the font style by clicking the font name at the top.',
        tip: 'Double-click text to enter edit mode for that specific text block. Click outside the text box when done.',
      },
      {
        title: 'Add or Replace Photos',
        content: 'Click on any photo in the template to select it. Press Delete to remove it, or drag a new photo from the left sidebar to replace it. To use your own photos, click "Uploads" in the left sidebar → "Upload files" → select photos from your computer or phone.',
      },
      {
        title: 'Download Your Design',
        content: 'When your design is finished, click the "Share" button (top right) → "Download." Choose PNG or JPEG for photos, or PDF for printable documents. Click "Download" and save the file to your device.',
        tip: `To print a card at home, download as PDF and print to your printer. For a professional print, use Canva's built-in print service — they mail the finished card directly to you.`,
      },
    ],
  },
  {
    slug: 'facetime-android-link-guide',
    title: 'How to Video Call Android and Windows Users Using FaceTime',
    excerpt: `FaceTime links let you invite anyone — Android or Windows users — to a FaceTime video call. Here's how to create a link and share it.`,
    category: 'communication',
    tags: ['FaceTime', 'video call', 'Android', 'cross-platform', 'iPhone'],
    readTime: '4 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `FaceTime used to be limited to Apple devices — iPhone, iPad, and Mac only. That changed with iOS 15 and later. Now you can create a FaceTime link and share it with anyone, including Android phone users and Windows computer users. The recipient clicks the link and joins the FaceTime call through their web browser — no Apple device or app download required.

This is a significant improvement for mixed households where some family members use iPhones and others use Android or Windows devices. You can now do a group video call with your iPhone, your son's Android phone, and your daughter's Windows laptop — all in one FaceTime session.

The iPhone (or iPad or Mac) user creates the FaceTime link. Non-Apple participants join through a link in a browser — Google Chrome or Microsoft Edge works best. Safari on a non-Apple device is not supported for joining, but Chrome or Edge are fine.

FaceTime calls support up to 32 participants and include features like screen sharing, filters, and spatial audio when everyone is on Apple devices. For guests joining via a browser link, the experience is more basic but fully functional: video, audio, and the ability to see and hear everyone on the call.

This feature requires iOS 15 or later on the iPhone creating the link. Non-Apple participants need Chrome version 97 or later, or Edge version 97 or later.`,
    steps: [
      {
        title: 'Create a FaceTime Link on iPhone',
        content: 'Open the FaceTime app on your iPhone. Tap "Create Link" at the top of the screen (you may need to scroll up to see it). A FaceTime link is generated and the share menu opens.',
      },
      {
        title: 'Share the Link',
        content: 'From the share menu, choose how to send the link: tap "Messages" to send a text, "Mail" to send an email, or "Copy" to copy the link and paste it wherever you want. Send the link to everyone you want to invite — iPhone users, Android users, and Windows users alike.',
        tip: 'FaceTime links do not expire, so you can create one ahead of time and share it in a family group text for a scheduled call.',
      },
      {
        title: 'Join from an iPhone or iPad',
        content: 'iPhone and iPad users tap the link and it opens directly in FaceTime. They see a "Join" button — tap it to enter the call. They may need to wait if the host has not started the session yet.',
      },
      {
        title: 'Join from Android or Windows',
        content: 'Android or Windows users tap or click the link. A web page opens in Chrome or Edge. They see a screen asking for their name and permissions to use the camera and microphone. They enter a name, tap "Join," and they are in the FaceTime call.',
        warning: 'Chrome or Edge must be used on Android or Windows. Safari on Android does not support joining FaceTime. If someone says the link is not working, confirm they are using Chrome or Edge.',
      },
      {
        title: 'Start the Call as the Host',
        content: 'On your iPhone, go back to the FaceTime app and tap the link you created → "Join." The session starts. As participants join (their names or faces appear in the call), they can see and hear each other. You can also schedule a FaceTime call in the Calendar app and generate the link there.',
      },
    ],
  },
  {
    slug: 'discord-basics-guide',
    title: 'What Is Discord and How to Use It to Stay Connected with Family',
    excerpt: `Discord is a free group communication app popular with families, communities, and hobby groups. Here's a plain-English introduction for new users.`,
    category: 'communication',
    tags: ['Discord', 'group chat', 'communication', 'family', 'voice chat'],
    readTime: '6 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Discord is a free app that lets groups of people communicate through text messages, voice calls, and video chats — all organized into channels inside a shared space called a "server." While Discord is best known as a tool for online gamers, it has grown into a general-purpose communication platform used by families, hobby groups, community organizations, book clubs, and more.

If your grandchildren or adult children are suggesting Discord for family communication, this guide explains exactly what it is and how to get started.

Think of a Discord server as a private clubhouse for your group. The server has different "channels" — like different rooms — organized by topic. A family server might have channels like #general (everyday chat), #photos (for sharing pictures), #announcements (for important news), and a voice channel for video calls. Everyone in the server sees and participates in the channels.

Discord is free to use. A paid upgrade (Discord Nitro) exists for extras like animated profile pictures and higher file upload limits, but the free version is fully functional for all communication.

Discord works on iPhone, Android, Windows, Mac, and in a web browser. You create one account and use it on all your devices.

For families spread across different states or countries, Discord can serve as a persistent family chat room that is always there — unlike a group text that gets buried in notifications, the Discord server keeps all the conversation history organized and searchable. Voice channels let family members drop in and chat whenever they want, like picking up the phone, without needing to schedule a call.`,
    steps: [
      {
        title: 'Download Discord and Create an Account',
        content: 'Search "Discord" in the App Store or Google Play. Install the free app. Tap "Register" and enter your email address, a username (this is your display name), and a password. Verify your email address by clicking the link Discord sends you.',
        tip: 'Your username is visible to others on the server. Use your real first name or a recognizable nickname so family members know who you are.',
      },
      {
        title: 'Join a Family Server',
        content: 'If a family member has already created a server and sent you an invitation link, tap the link on your phone — it opens Discord and shows a preview of the server. Tap "Accept Invite" to join. You can now see all the channels in that server.',
        tip: 'If you have not received an invitation, ask the family member who manages the server to send you an invite link. They can create one in Server Settings.',
      },
      {
        title: 'Read and Send Text Messages',
        content: 'Tap a text channel (the # symbol means a text channel). You see all previous messages in that channel. Scroll up to see older messages. To send a message, tap the text box at the bottom and type. Press Enter or tap the send button.',
      },
      {
        title: 'Join a Voice or Video Call',
        content: 'Voice channels show a speaker icon (🔊). Tap a voice channel to join — you immediately connect to a voice call with anyone else in that channel. Tap the camera icon to turn on your video. Tap the microphone icon to mute or unmute yourself.',
        tip: 'You do not need to be invited to join a voice channel — if someone is in the channel, you can tap it anytime to join the conversation. This makes it easy to drop in and chat.',
      },
      {
        title: 'Customize Your Notifications',
        content: 'Discord can send many notifications — too many for some people. Tap the server name at the top → "Notifications" → "All Messages" and change it to "Only @Mentions" to only be notified when someone addresses you directly. Or tap a specific channel → "Notification Settings" for per-channel control.',
      },
    ],
  },
  {
    slug: 'reddit-basics-guide',
    title: 'What Is Reddit and How to Find Helpful Communities',
    excerpt: `Reddit is one of the largest websites in the world — a collection of thousands of communities where people share advice, news, and discussions. Here's how to use it.`,
    category: 'essential-skills',
    tags: ['Reddit', 'community', 'forums', 'information', 'tips'],
    readTime: '5 min',
    thumbnailEmoji: '💡',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Reddit is a website organized into thousands of topic communities called "subreddits." Each subreddit (written as r/topicname) is focused on one subject — there are subreddits for technology help, cooking, travel, local cities, hobbies, health questions, news, and virtually anything else you can think of.

People post questions, articles, photos, and videos to subreddits, and other members comment with answers, advice, and opinions. The most helpful or popular posts and comments get "upvoted" to the top by readers.

Reddit is one of the best places on the internet to get genuine human advice on specific problems. If you have a technology question, a question about a medication, a travel recommendation, or a problem with a product, there is likely a Reddit community where someone has asked the same question — or you can ask and get responses from people with real experience.

You do not need an account to read Reddit. Browsing is completely free and does not require any registration. Simply go to reddit.com or open the Reddit app and search for any topic.

Reddit is heavily text-based and the interface can feel cluttered at first. The most important things to know: "upvote" means people found a post or comment helpful; "downvote" means people found it unhelpful. The highest-upvoted answers in a thread are usually the most reliable. The newest answers appear lower in the list — scroll past them to see the top-voted responses.

Reddit has communities specifically for seniors (r/seniors), technology help (r/techsupport), Medicare questions (r/medicare), iPhone questions (r/iphone), and thousands of other topics. Quality varies by community, but popular subreddits with large memberships are generally well-moderated and helpful.`,
    steps: [
      {
        title: 'Access Reddit Without an Account',
        content: 'Go to reddit.com in any browser, or download the free Reddit app from the App Store or Google Play. You can read any public subreddit without creating an account — no sign-up required for browsing.',
      },
      {
        title: 'Search for a Topic',
        content: 'Use the search bar at the top of Reddit. Type your topic — for example, "iPhone tips" or "Medicare Part D." Results show relevant subreddits and posts. Click a subreddit name (like r/iphone or r/Medicare) to browse that community.',
        tip: 'Add "reddit" to any Google search for better results: for example, "best hearing aids reddit" often surfaces more authentic reviews than commercial sites.',
      },
      {
        title: 'Read a Thread',
        content: 'Click any post title to open it. The original question or article is at the top. Scroll down to read the comments — the highest-voted comments appear first. Upvote counts (the orange numbers) indicate how many readers found a comment helpful.',
      },
      {
        title: 'Create a Free Account to Ask Questions',
        content: 'Go to reddit.com → "Log In" → "Sign Up." Choose a username (does not need to be your real name), enter your email, and create a password. With an account, you can post questions in any subreddit and receive answers from the community.',
        tip: 'Choose a username that does not identify you personally — many Reddit users use pseudonyms. Your username is public.',
      },
      {
        title: 'Ask a Question in a Subreddit',
        content: 'Navigate to a relevant subreddit (e.g., r/techsupport for tech help). Click "Create Post" or the pen icon. Choose a clear title for your question — be specific. Describe the problem in the body text. Include what device you have and what you have already tried. Click "Post."',
        warning: 'Reddit allows anonymous posting, which means you may occasionally see rude or unhelpful comments. Most subreddits have moderators who remove rule-breaking content, but if a comment is unhelpful, scroll past it — focus on upvoted responses.',
      },
    ],
  },
  {
    slug: 'youtube-captions-guide',
    title: 'How to Turn On Captions and Subtitles for YouTube Videos',
    excerpt: `YouTube can display captions on any video — helpful if audio is hard to hear or you're watching without sound. Here's how to turn them on and customize them.`,
    category: 'entertainment',
    tags: ['YouTube', 'captions', 'subtitles', 'accessibility', 'hearing'],
    readTime: '4 min',
    thumbnailEmoji: '🔤',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `YouTube automatically generates captions for most videos — text that appears at the bottom of the screen showing what is being said. This is helpful if you are watching in a noisy environment, have difficulty hearing, or are watching a video with a heavy accent or fast-talking presenter.

Captions on YouTube are generated automatically using speech recognition technology, which means they are usually very accurate for clearly spoken content but may have errors for technical terms, names, or heavy accents. Videos that a creator has manually captioned are even more accurate.

You can turn captions on or off for each video individually, or set YouTube to always show captions by default. You can also resize the captions, change the color, and adjust the font size in YouTube's settings.

Beyond English, YouTube often provides automatic captions in other languages, and many videos have translated captions too. This makes YouTube useful for people learning a language or for watching international content.

The caption button looks like a CC symbol (closed captioning) in the video controls. On a phone, it may also appear as a speech bubble icon or a small rectangular icon. The exact location depends on whether you are watching on a phone, tablet, or computer.

Automatic captions can be translated in real time — you can watch a Spanish or French video with English captions by using the Translation feature in YouTube's caption settings.`,
    steps: [
      {
        title: 'Turn On Captions for a Single Video (Computer)',
        content: 'While a video is playing, look for the CC button in the bottom-right area of the video controls (to the left of the Settings gear icon). Click CC to toggle captions on — a white underline appears under the button when captions are active. Click it again to turn them off.',
      },
      {
        title: 'Turn On Captions for a Single Video (Phone)',
        content: 'While a video is playing on the YouTube app, tap the screen once to show controls. Look for a speech bubble icon or a CC icon in the top-right corner of the video. Tap it to enable captions. If you do not see it, tap the three-dot menu (⋮) in the top right and look for "Captions" there.',
      },
      {
        title: 'Set YouTube to Always Show Captions',
        content: 'Open YouTube → tap your profile photo → Settings → Captions → toggle on "Always Show Captions." From now on, captions turn on automatically for every video you watch.',
        tip: 'On a computer, go to YouTube settings (click your profile photo → Settings → Playback & performance → "Always show captions").',
      },
      {
        title: 'Make Captions Bigger and Easier to Read',
        content: 'Open YouTube → tap your profile photo → Settings → Captions → "Caption size and style." Increase the font size (try 150% or 200%). Change the font color or background color for better contrast.',
        tip: 'White text on a black background is the easiest to read. Choose "Background opacity" of 75% or higher so the text stands out from the video.',
      },
      {
        title: 'Translate Captions to English',
        content: 'If a video is in a foreign language, click the Settings gear icon on the video player → "Subtitles/CC" → "Auto-translate" → select "English." YouTube translates the captions in real time.',
        warning: 'Auto-translated captions may be less accurate than original-language captions. For precise understanding of important content, this is a helpful starting point but not a perfect translation.',
      },
    ],
  },
  {
    slug: 'voice-dictation-iphone-guide',
    title: 'How to Type by Speaking on iPhone Using Voice Dictation',
    excerpt: `iPhone's built-in voice dictation lets you speak instead of type — in any app, on any text field. Here's how to use it and get accurate results.`,
    category: 'phone-guides',
    tags: ['iPhone', 'voice dictation', 'speak to type', 'accessibility', 'iOS'],
    readTime: '4 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Voice dictation on iPhone lets you speak your message instead of typing it. This is available in every app with a text field — Messages, Email, Notes, search bars, forms, and more. You tap a microphone button on the keyboard, speak naturally, and your words appear as text.

Voice dictation is useful for people who find small keyboards difficult to use, those with arthritis or hand tremors, anyone who wants to type faster, or people who prefer speaking over typing.

iPhone's voice dictation is powered by on-device speech recognition on newer iPhones (iPhone 12 and later), meaning it works even without an internet connection and your speech is not sent to Apple's servers. On older iPhones, an internet connection may be required.

For best results, speak at a natural pace and slightly more clearly than you might in normal conversation. Pause briefly between sentences. Dictation handles punctuation if you say the words out loud: say "comma" to insert a comma, "period" to end a sentence, "new line" to start a new line, or "question mark" for a question.

The microphone icon on the iPhone keyboard is always available in any app. On newer iPhones, you can also hold the side button and speak to use Siri for dictation, or enable "Hey Siri" for completely hands-free text entry.

Editing dictated text works the same as editing any text — tap where you want to make a correction and retype or speak the correction.`,
    steps: [
      {
        title: 'Enable Dictation in Settings',
        content: 'Go to Settings → General → Keyboard → toggle on "Enable Dictation." A confirmation prompt may appear. Tap "Enable Dictation" to confirm.',
        tip: 'On most recent iPhones, dictation may already be enabled. If you see a microphone icon on your keyboard, you are ready to go.',
      },
      {
        title: 'Tap the Microphone on the Keyboard',
        content: 'Open any app and tap in a text field to bring up the keyboard. Look for a microphone icon — on iPhones with a Home button, it is to the left of the spacebar. On iPhones without a Home button (Face ID models), it may appear at the bottom or in the keyboard area. Tap it.',
      },
      {
        title: 'Speak Your Message',
        content: 'When the microphone is active (an audio wave animation appears), speak clearly and naturally. Say your text out loud. Your words appear on screen as you speak. For punctuation, say "period," "comma," "question mark," "exclamation point," or "new paragraph."',
        tip: `To dictate a full email: "Dear Maria comma new paragraph I hope you are doing well period I wanted to remind you about Saturday's lunch period..."`,
      },
      {
        title: 'Stop Dictation',
        content: 'Tap the microphone button again (it changes to a stop/done button) or tap anywhere on screen outside the keyboard. Dictation stops and your text is placed in the text field, ready to review and edit.',
      },
      {
        title: 'Correct Mistakes',
        content: 'Voice dictation is accurate but not perfect. After dictating, review the text. Tap on any word to position your cursor there. Delete and retype any mistakes, or tap a word to see alternatives the dictation engine considered.',
        tip: 'Speak in quieter environments for best accuracy. Background noise significantly reduces dictation accuracy.',
      },
    ],
  },
  {
    slug: 'voice-typing-android-guide',
    title: 'How to Type by Speaking on Android Using Google Voice Typing',
    excerpt: `Android's built-in voice typing lets you speak instead of type in any app. Here's how to use it and get the best results.`,
    category: 'phone-guides',
    tags: ['Android', 'voice typing', 'speak to type', 'Google', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Android phones have a built-in voice typing feature that lets you speak your text instead of typing. It works in any app where you can type — messaging, email, search bars, notes, forms, and more. Just tap the microphone icon on the Google keyboard and speak.

Voice typing on Android uses Google's speech recognition technology, which is highly accurate and improves as you use it. It handles natural speech well and can recognize punctuation if you say the words: say "comma," "period," "question mark," or "new line" to add those characters.

On Android phones using the default Gboard keyboard (made by Google), the microphone icon appears on the keyboard. Tapping it activates voice typing. Some Samsung phones use Samsung Keyboard instead, which has a similar microphone button.

Voice typing requires an internet connection on most Android phones — it sends your audio to Google's servers for processing. However, on newer Android phones (Pixel 3 and later, and many 2022+ Samsung models), on-device voice recognition is available and works offline.

Voice typing is distinct from Google Assistant — "Hey Google" activates the Assistant, which does tasks like making calls or searching the web. Voice typing specifically inserts spoken words into whatever text field you have open.

For people with arthritis, hand tremors, visual difficulties, or anyone who simply types more slowly than they speak, voice typing can dramatically increase communication speed and comfort.`,
    steps: [
      {
        title: 'Find the Microphone on Your Keyboard',
        content: 'Open any app and tap a text field to bring up the keyboard. Look for a microphone icon — on Gboard, it is in the top row of the keyboard (above the numbers row on the right side). On Samsung Keyboard, it is in the toolbar above the keyboard.',
        tip: 'If you do not see a microphone icon, go to Settings → General Management → Keyboard list and default → make sure Gboard is your default keyboard, then return to the app.',
      },
      {
        title: 'Tap the Microphone and Speak',
        content: 'Tap the microphone icon. A large microphone button appears with an animation showing it is listening. Speak your text at a natural pace. Your words appear on the screen as you speak.',
      },
      {
        title: 'Add Punctuation by Speaking',
        content: 'Say punctuation aloud as you dictate: say "period" for ., "comma" for ,, "question mark" for ?, "exclamation point" for !, "new line" to start a new paragraph. For example: "I will be there at three comma and I am bringing dessert period"',
      },
      {
        title: 'Stop and Review Your Text',
        content: 'Tap the microphone button again (or the X button) to stop voice typing. Review the text that was entered. Tap any word to position your cursor and correct mistakes by typing or speaking them.',
        warning: 'In noisy environments, background sounds can be transcribed as words. Find a quiet spot for best accuracy.',
      },
      {
        title: 'Enable Offline Voice Typing (Newer Phones)',
        content: 'On phones that support it, go to Settings → General Management → Keyboard list and default → Gboard → Voice typing → "Offline speech recognition." Download your language pack for offline dictation that works without internet.',
        tip: 'Offline voice typing is especially useful when traveling or in areas with poor cell signal.',
      },
    ],
  },
  {
    slug: 'windows-voice-typing-guide',
    title: 'How to Use Voice Typing in Windows 11 to Speak Instead of Type',
    excerpt: 'Windows 11 has a built-in voice typing tool — press Win+H and speak to type in any text field on your PC, hands-free.',
    category: 'windows-guides',
    tags: ['Windows 11', 'voice typing', 'dictation', 'accessibility', 'speak to type'],
    readTime: '4 min',
    thumbnailEmoji: '🎤',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Windows 11 has a built-in voice typing tool that lets you dictate text into any application by speaking. Press Windows key + H on your keyboard while your cursor is in a text field — a microphone toolbar appears and you can start speaking. Your words are transcribed into whatever you are typing, whether that is an email, a document, a search bar, or a chat message.

Voice typing in Windows 11 is powered by Microsoft's speech recognition, the same technology behind Cortana and Microsoft Office dictation. It is accurate for natural, clearly spoken English and handles punctuation through spoken commands.

Windows 11 voice typing works with automatic punctuation — you do not need to say "comma" or "period" manually. With "Auto punctuation" enabled in the voice typing settings, the system inserts punctuation automatically based on your speech patterns and pauses. This makes it feel more natural than manual punctuation commands.

Voice typing requires a working microphone. Most Windows laptops have a built-in microphone. Desktop computers may need a USB or plug-in microphone. The built-in laptop microphone is usually adequate for voice typing in a quiet room.

For longer typing tasks — writing emails, composing letters, drafting documents — voice typing in Windows can be significantly faster than keyboard typing for many people. A spoken average of 130 words per minute dramatically outpaces most people's keyboard typing speed.

Windows 11 also has a full voice access feature for people with mobility impairments — it allows voice control of the entire computer, not just typing. This guide covers the simpler voice typing feature for casual use.`,
    steps: [
      {
        title: 'Enable Voice Typing with a Keyboard Shortcut',
        content: 'Click inside any text field — an email you are composing, a Word document, or a web search bar. Press Windows key + H simultaneously. A small toolbar appears near the top of your screen with a microphone icon.',
        tip: 'The microphone toolbar floats over your current window and stays accessible while you switch between typing and voice entry.',
      },
      {
        title: 'Start Speaking',
        content: 'Click the microphone button in the toolbar (or just start speaking after pressing Win+H — it may start automatically). Speak clearly and at a natural pace. Text appears in the active text field as you speak.',
      },
      {
        title: 'Enable Auto Punctuation',
        content: 'In the voice typing toolbar, click the Settings gear icon. Toggle on "Auto punctuation." Windows will now automatically add commas, periods, and question marks as appropriate — without you needing to say them.',
      },
      {
        title: 'Use Manual Punctuation Commands (Without Auto Punctuation)',
        content: 'If auto punctuation is off, speak punctuation commands: "comma," "period," "question mark," "exclamation mark," "new line," "open parenthesis," "close parenthesis." For example: "The meeting is Thursday period Please confirm your attendance period"',
      },
      {
        title: 'Stop Voice Typing',
        content: 'Click the microphone button again to pause. Click the X in the voice typing toolbar to close it. Your text is already saved in the document or text field — no additional save step is needed.',
        tip: 'Voice typing works inside Microsoft Word, Outlook, Edge, Chrome, Notepad, and most other Windows apps that accept text input.',
      },
    ],
  },
  {
    slug: 'facebook-events-guide',
    title: 'How to Find and RSVP to Events on Facebook',
    excerpt: 'Facebook Events helps you find local activities, RSVP to invitations from friends, and create your own events for family gatherings and group meetups.',
    category: 'social-media',
    tags: ['Facebook', 'events', 'local activities', 'RSVP', 'social'],
    readTime: '5 min',
    thumbnailEmoji: '📅',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Facebook Events is a feature that lets you find public events happening near you, RSVP to events your friends are hosting, and create your own events to invite family and friends. It is one of Facebook's most useful tools for staying socially connected and discovering local activities.

Local events of all kinds are listed on Facebook: church events, community festivals, farmer's markets, free concerts, lectures, fundraisers, classes, and more. Many local businesses and organizations use Facebook Events as their primary way to announce upcoming activities.

When a friend or family member creates an event on Facebook and invites you, you receive a notification. You can RSVP with three options: "Going," "Interested" (maybe), or "Can't go." Your response is visible to the event organizer but not always to the general public.

Creating your own event is simple — you fill in the event name, date, time, location, and a description. You can set it as public (anyone can find it) or private (only invited people can see it). For a family reunion, birthday party, or holiday gathering, a private Facebook event is a convenient way to manage invitations and share updates with attendees.

Once people RSVP, you can message them through the event, post updates (like "parking tip: use the side street lot"), and see who is coming. Attendees can see each other's RSVPs and the event discussion.

For public events in your area, Facebook's event discovery is useful for finding things to do. Search by city, date, and category — free events, music events, food events, etc.`,
    steps: [
      {
        title: 'Find the Events Section',
        content: 'Open Facebook on your phone or computer. Tap the three horizontal lines (menu) and look for "Events" in the menu list. Or tap the Events icon in the bottom navigation bar if visible. The Events section shows upcoming events you have been invited to and local events near you.',
      },
      {
        title: 'Discover Local Events',
        content: 'In the Events section, scroll through "Events Near You" or tap "Discover" to see public events happening in your area. Filter by date, category, or location. Tap any event to see full details: description, time, location, number of people going.',
        tip: 'Browse events by "Free" filter to find low-cost community activities — many libraries, parks, and community centers post free events here.',
      },
      {
        title: 'RSVP to an Event',
        content: `Tap an event you are interested in. Tap "Going," "Interested," or "Can't Go." "Going" tells the host you plan to attend. "Interested" adds the event to your calendar as a maybe. Once you respond, the event appears in your Events section for easy reference.`,
        tip: `Tapping "Going" may notify the event creator and show your RSVP to others who are attending, depending on the event's privacy settings.`,
      },
      {
        title: 'Create Your Own Event',
        content: 'In the Events section, tap "Create event" (usually a "+" button). Choose "Private event" for family and friends only, or "Public event" if you want it discoverable. Fill in: Event name, Start date and time, End time, Location (or "Online"), Description. Tap "Next" → add a cover photo if desired → "Create."',
      },
      {
        title: 'Invite Friends and Family',
        content: 'After creating your event, tap "Invite" → "Invite Facebook friends." Search for specific people by name and tap their name to invite them. They receive a notification. You can also copy the event link and share it via text message to invite people who are not on Facebook.',
        tip: `Post updates to the event wall — important information like parking, what to bring, or schedule changes — by typing in the event's "write something" field.`,
      },
    ],
  },
  {
    slug: 'youtube-shorts-guide',
    title: 'What Are YouTube Shorts and How to Find What You Actually Want',
    excerpt: `YouTube Shorts are brief vertical videos. Here's what they are, how they differ from regular videos, and how to stop them from taking over your feed.`,
    category: 'entertainment',
    tags: ['YouTube', 'Shorts', 'video', 'tips', 'settings'],
    readTime: '4 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `YouTube Shorts are short videos — usually under 60 seconds — filmed vertically on a smartphone, similar to TikTok or Instagram Reels. YouTube began pushing Shorts prominently in 2022 and they now appear throughout the YouTube app alongside regular longer videos.

If you have noticed a lot of quick, vertical-format clips appearing in your YouTube feed when you are looking for longer tutorials or music videos, those are Shorts. Many YouTube users who prefer traditional content find the Shorts recommendations intrusive.

The good news: there are settings and techniques to minimize how often Shorts appear in your feed, and ways to navigate directly to regular long-form videos when you want them.

Shorts are found under the "Shorts" tab in the YouTube app navigation bar — a short horizontal film reel icon. If you want to browse only Shorts, go to that tab. If you want to avoid them, avoid tapping that tab and watch or search for regular content from the Home or Search screens.

If you enjoy Shorts, they are a way to quickly discover new channels, get news summaries, learn quick tips, or watch entertainment in very small doses. Many channels you already follow post Shorts as well as longer videos — the Short might preview a longer video or stand alone as a brief piece of content.

YouTube does not currently offer an official "disable all Shorts" option in the app. However, using "Not interested" feedback, watching more of the content you do want, and subscribing to specific channels all shape your recommendations over time.`,
    steps: [
      {
        title: 'Recognize a YouTube Short',
        content: 'YouTube Shorts appear in your feed with a small "Shorts" label and a film reel icon. They are vertical format (tall, not wide). When you tap one, you enter a vertical swipe mode where you can scroll up for the next Short — like TikTok. Tap the X or the back button to exit Shorts mode.',
      },
      {
        title: `Tell YouTube You're Not Interested`,
        content: `If a Short appears in your feed and you do not want similar content, tap and hold the Short thumbnail (or tap the three dots next to it). Tap "Not interested" or "Don't recommend this channel." This feedback reduces similar Shorts in your recommendations.`,
      },
      {
        title: 'Search for Long-Form Videos Only',
        content: 'When searching YouTube for a topic, after the results load, tap the "Filter" button (a slider icon). Under "Type," select "Video." This filters out Shorts from your search results and shows only regular-length videos.',
        tip: 'Adding "tutorial" or "full guide" to your search terms also tends to surface longer instructional videos rather than Shorts.',
      },
      {
        title: 'Browse the Shorts Tab If You Want Them',
        content: `If you want to browse Shorts on purpose, tap the Shorts icon in the bottom navigation bar (the circle with a play button, or a film reel icon). Swipe up to go to the next Short, swipe down to go back. Tap the title or channel name to visit the creator's full channel.`,
      },
      {
        title: 'Adjust Recommendations Over Time',
        content: `YouTube's recommendation algorithm learns from what you watch and engage with. Watch more of the long-form content you enjoy, subscribe to channels you like, and click "Not interested" on content you do not want. Over several weeks, your feed should shift toward your preferred content style.`,
        tip: 'Clearing your watch history (Account → Settings → Clear watch history) resets your recommendations if they have drifted far from what you actually want.',
      },
    ],
  },
  {
    slug: 'manage-subscriptions-iphone',
    title: 'How to Review and Cancel App Subscriptions on iPhone',
    excerpt: `Subscription charges can add up. Your iPhone keeps a master list of every app subscription you're paying for. Here's how to find them and cancel any you don't need.`,
    category: 'phone-guides',
    tags: ['iPhone', 'subscriptions', 'cancel', 'App Store', 'money saving'],
    readTime: '4 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your iPhone has a hidden master list of every recurring subscription you are paying for through the App Store — apps that charge weekly, monthly, or yearly fees. Many people forget about subscriptions they signed up for and are paying for years after they stopped using the app.

This built-in subscription management tool shows you each subscription, how much it costs, when it renews, and how much you have paid in total. From this screen, you can cancel any subscription in seconds — even if you no longer have the app installed.

Subscriptions paid through the App Store go on your Apple ID. This includes apps you have downloaded and signed up for through the app itself. Note that some subscriptions — like Netflix, Spotify, or Amazon Prime — may be billed directly by the company if you signed up through their website rather than the app. Those subscriptions are managed on each company's website, not through iPhone Settings.

How much money can this save? Surveys suggest the average person has 4-6 forgotten app subscriptions, averaging $30-70 per month total. A 10-minute audit of your subscriptions can often reveal $10-30 per month in charges for apps you do not remember subscribing to.

When you cancel an App Store subscription, you retain access until the end of the current billing period — you are not cut off immediately. You can also resubscribe at any time if you change your mind.

This same subscription list is visible from a Mac's App Store or from account.apple.com in a browser — useful if you want to review subscriptions on a larger screen.`,
    steps: [
      {
        title: 'Open Your Subscriptions List',
        content: 'Open the Settings app on your iPhone. Tap your name at the very top (your Apple ID). Tap "Subscriptions." A list of all active and recently expired App Store subscriptions appears.',
        tip: 'You can also access this from the App Store: tap your profile photo (top right) → tap your name/email at the top → "Subscriptions."',
      },
      {
        title: 'Review Each Subscription',
        content: 'Tap any subscription to see details: what it includes, how much it costs, and when it renews next. Scroll through all subscriptions in the Active and Expired sections. Note any you do not recognize or no longer use.',
      },
      {
        title: 'Cancel a Subscription',
        content: 'Tap the subscription you want to cancel → scroll to the bottom and tap "Cancel Subscription" (it may appear as "Cancel Free Trial" if you are still in a trial period). Tap "Confirm" in the confirmation dialog. The subscription is canceled.',
        warning: 'Canceling a subscription does not delete the app or your data. You continue to have access until the billing period ends. After that, you lose access to premium features but your basic account usually remains.',
      },
      {
        title: 'Check for Subscriptions You Do Not Recognize',
        content: 'If a subscription appears that you do not recognize, search the app name online to identify it. If you believe it is an unauthorized charge, tap "Report a Problem" in the subscription details or go to reportaproblem.apple.com to request a refund.',
      },
      {
        title: 'Review Your Billing History',
        content: 'To see a full record of charges to your Apple ID, go to the App Store → tap your profile photo → "Purchase History." This shows every App Store charge with dates and amounts. Cross-reference with your bank or credit card statements.',
        tip: 'Set a monthly reminder to review subscriptions — 10 minutes every few months prevents charges from accumulating for services you have forgotten about.',
      },
    ],
  },
  {
    slug: 'google-play-subscriptions',
    title: 'How to Review and Cancel Android App Subscriptions',
    excerpt: `Google Play tracks every subscription you've signed up for through your Android phone. Here's how to see them all and cancel any you no longer need.`,
    category: 'phone-guides',
    tags: ['Android', 'subscriptions', 'Google Play', 'cancel', 'money saving'],
    readTime: '4 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your Android phone's Google Play Store keeps a master list of every app subscription you have signed up for and paid through your Google account. These are subscriptions to apps that were set up through the Google Play billing system — things like fitness apps, news apps, cloud storage, entertainment apps, and productivity tools.

Like the iPhone subscription audit, reviewing your Google Play subscriptions is one of the most effective ways to identify forgotten charges. Surveys find that most smartphone users have at least 2-3 subscriptions they either forgot about or no longer use.

Canceling a Google Play subscription is immediate and simple. You retain access to the subscription's features until the current billing period ends, and you are not charged again after cancellation.

Keep in mind that subscriptions you signed up for directly through a company's website — Netflix, Spotify, Disney+ if you signed up on their site — are not managed in Google Play. Those must be canceled through each company's website. The Google Play subscriptions page only shows subscriptions you signed up for through the Google Play billing system (typically when you signed up inside an app on your Android phone).

To see a complete picture of all your subscriptions, check both Google Play and your credit card or bank statement. Services like Rocket Money or Trim can help identify recurring charges from all sources.`,
    steps: [
      {
        title: 'Open Google Play Subscriptions',
        content: 'Open the Google Play Store app on your Android phone. Tap your profile photo in the top right. Tap "Payments & subscriptions" → "Subscriptions." All active subscriptions linked to your Google account appear.',
      },
      {
        title: 'Review the List',
        content: 'Scroll through your subscriptions. Tap each one to see details: app name, subscription price, billing date, and what is included in the subscription. Note any you do not remember signing up for or no longer use.',
        tip: 'Pay attention to annual subscriptions that renew once a year — they are easy to forget about until the charge reappears.',
      },
      {
        title: 'Cancel a Subscription',
        content: 'Tap the subscription you want to cancel → tap "Cancel subscription." Google asks why you are canceling (optional). Tap "Continue" → "Cancel subscription" in the confirmation. The subscription is canceled and will not renew.',
        warning: 'You keep access until the end of the billing period you already paid for. After that date, the subscription ends. You will not receive a refund for the current period.',
      },
      {
        title: 'Pause Instead of Cancel (If Available)',
        content: 'Some subscriptions offer a "Pause" option instead of full cancellation. This stops billing for a period (1-3 months) without losing your account or data. This is useful if you want to take a break but plan to return. Look for a "Pause subscription" option before tapping "Cancel."',
      },
      {
        title: 'Check for Unauthorized Subscriptions',
        content: 'If a subscription appears that you did not sign up for, tap it and look for a "Request a refund" option, or go to Google Pay → Activity to see your payment history. Contact Google Play support through play.google.com/store/account if you believe a charge was unauthorized.',
      },
    ],
  },
  {
    slug: 'google-slides-basics',
    title: 'How to Create a Simple Slideshow Presentation with Google Slides',
    excerpt: 'Google Slides is a free, easy-to-use presentation tool. Make a photo slideshow, a family update presentation, or a simple how-to guide — all for free.',
    category: 'app-guides',
    tags: ['Google Slides', 'presentation', 'slideshow', 'Google', 'free tool'],
    readTime: '6 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Slides is a free presentation tool, similar to Microsoft PowerPoint, that works in any web browser and on Android or iPhone through the Google Slides app. You create slides, add text and photos, and present your slideshow on a TV or screen — or share it as a link for others to view on their own devices.

Google Slides is free with a Google (Gmail) account and saves everything automatically to Google Drive. You can work on a presentation from your home computer and then continue on your phone — it syncs automatically.

One of the most common uses for everyday users: creating a photo slideshow as a gift for a birthday, anniversary, or holiday. You upload family photos to slides, add captions or titles, and present it on a TV during a family gathering. You can also export it to a video file or share it as a link.

Other practical uses: a church or community announcement board, a family reunion photo album with captions, a "life story" presentation about a parent or grandparent, or a simple presentation showing step-by-step instructions for a grandchild.

Google Slides includes dozens of pre-made themes — design templates with coordinated colors and fonts — so the presentation looks polished without any design work on your part. You choose a theme, add your content, and the design takes care of itself.

Presenting from Google Slides is straightforward: open the presentation in full-screen mode and use the arrow keys or remote to advance slides. You can also cast it to a TV using Chromecast or a smart TV with Google Cast.`,
    steps: [
      {
        title: 'Open Google Slides',
        content: 'Go to slides.google.com in a browser (sign in with your Google account). Or open the Google Slides app on iPhone or Android. Click "Blank presentation" to start from scratch, or choose a template from the gallery.',
      },
      {
        title: 'Choose a Theme',
        content: 'In a new presentation, click "Themes" in the toolbar at the top right (or go to Slide menu → Change theme). Browse the available themes — they show coordinated colors, fonts, and slide layouts. Click a theme to apply it to all slides.',
        tip: 'You can change the theme at any time — it updates all slides automatically. Pick one with colors that feel appropriate for your topic.',
      },
      {
        title: 'Add Text to a Slide',
        content: 'Click inside any text box on the slide and type your text. Click outside the box when done. To change font size, select the text and use the number field in the toolbar. Press Enter to start a new line. Press "+" in the bottom toolbar or go to Slide → New Slide to add more slides.',
      },
      {
        title: 'Insert Photos',
        content: 'Click on a slide to select it. Go to Insert → Image → Upload from computer (or "Insert" in the app). Choose a photo from your files. The photo appears on the slide. Drag the corners to resize it. Drag the photo to reposition it on the slide.',
        tip: 'For a photo slideshow, make the photo fill the entire slide: right-click the image → Format options → Size & Position → adjust dimensions to match the slide.',
      },
      {
        title: 'Present or Share the Slideshow',
        content: 'To present: click the "Slideshow" button (play arrow) in the top right. The presentation enters full-screen. Use arrow keys to advance slides. Press Escape to exit.\n\nTo share: click the "Share" button (top right) → copy the link → send to family. They can view it in their browser without a Google account.',
        tip: 'To export as a video: File → Download → MP4 video. This creates a video file you can save and share like any video.',
      },
    ],
  },
  {
    slug: 'shutterfly-photo-book-guide',
    title: 'How to Create a Custom Photo Book with Shutterfly',
    excerpt: 'Shutterfly photo books make meaningful gifts — hardcover, softcover, or layflat. Upload your best photos and Shutterfly prints and ships a professional-quality book to your door.',
    category: 'app-guides',
    tags: ['Shutterfly', 'photo book', 'gift', 'photos', 'printing'],
    readTime: '6 min',
    thumbnailEmoji: '📕',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A Shutterfly photo book is a professional-quality printed book of your photos — hardcover, softcover, or layflat — that you design using your own pictures. It makes a heartfelt gift for grandchildren, parents, or any family event. Photo books from Shutterfly are the kind of keepsake that gets kept for decades.

Creating a photo book sounds complicated, but Shutterfly has designed the process to be very approachable. You select a book format, upload your photos, and Shutterfly's design tool can automatically arrange photos into a beautifully laid-out book. You then review and customize the layout as much or as little as you want.

Shutterfly photo books come in several sizes: 5x5, 8x8, 8x11, 11x14, and others. Price depends on size and page count — a standard 8x8 hardcover with 20 pages starts around $35-50, and frequently goes on sale. First-time buyers often get promotional pricing.

The key tip for getting started: select more photos than you think you need. It is much easier to remove photos from a layout than to go back and add more later. For a 20-page book, start by uploading at least 40-60 photos, then pare down to the best ones.

The Autofill feature places photos on pages automatically — a good starting point. After that, you can move photos between pages, add captions, change backgrounds, and adjust the layout of individual pages. Most people find the process takes 30-60 minutes for a 20-page book.

Shutterfly books regularly go on sale — 40-50% off sales happen most weekends and holidays. Signing up for Shutterfly emails ensures you see the best deals.`,
    steps: [
      {
        title: 'Start a New Photo Book',
        content: 'Go to shutterfly.com → "Photo Books" → choose a size (8x8 is popular for gifts). Select a cover type (hardcover is more durable). Click "Get Started" or "Make this book." You are taken to the design editor.',
      },
      {
        title: 'Upload Your Photos',
        content: 'In the Shutterfly editor, click "Add Photos" → "Upload Photos." Browse your computer or phone and select all the photos you want in the book. Photos upload to your Shutterfly account. This takes a few minutes depending on how many photos you choose.',
        tip: 'Upload photos in chronological order if your book tells a story — this makes the auto-layout more logical.',
      },
      {
        title: 'Use Autofill to Create a Layout',
        content: 'After uploading, click "Autofill" or "Autofill Unused Photos." Shutterfly arranges your photos across the pages automatically. The result gives you a solid starting point — review each page and swap photos or adjust layouts you do not like.',
      },
      {
        title: 'Customize Pages and Add Captions',
        content: 'Click any page to open it for editing. Drag photos to different positions. Click a photo frame to swap the photo inside it. Click "Add Text" to add a caption or title below a photo. Use the "Layouts" panel to choose different arrangements of photos per page.',
        tip: 'Add a title page with the name and year of the event, and a back cover note to personalize the book.',
      },
      {
        title: 'Review, Order, and Apply a Discount Code',
        content: 'Click "Preview" to see the complete book before ordering. Check every page for layout issues or spelling errors. When satisfied, click "Add to Cart" → proceed to checkout. Before paying, search for "Shutterfly coupon code" to find active discounts — often 40-50% off.',
        warning: 'Proofread every page carefully — Shutterfly prints exactly what you submit. Text errors or upside-down photos cannot be corrected after printing.',
      },
    ],
  },
  {
    slug: 'compare-streaming-services',
    title: 'The Real Monthly Cost of Streaming Services: A Complete Comparison',
    excerpt: `Netflix, Hulu, Disney+, Prime Video, Peacock, Max — how much does it all add up to? Here's a plain-English breakdown to help you decide what to keep.`,
    category: 'entertainment',
    tags: ['streaming', 'Netflix', 'Hulu', 'cost', 'comparison', 'cord cutting'],
    readTime: '6 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Streaming services seemed like a money-saving alternative to cable when there were only one or two of them. But as more services launched and prices increased, many households now pay $80-150 per month for streaming — comparable to or more expensive than cable.

This guide provides a current breakdown of the major streaming service prices and what each includes, so you can decide which services are worth keeping for your household.

As of 2026, here are approximate monthly prices for ad-supported (cheaper) and ad-free tiers:

**Netflix:** $7.99/month (Standard with Ads), $15.49 (Standard), $22.99 (Premium 4K)
**Hulu:** $7.99/month (with ads), $17.99 (no ads), $82.99 (Hulu + Live TV with ads)
**Disney+:** $7.99/month (with ads), $13.99 (no ads)
**Max (HBO Max):** $9.99/month (with ads), $15.99 (ad-free)
**Prime Video:** Included with Amazon Prime ($14.99/month or $139/year)
**Peacock:** $7.99/month (Premium), $13.99 (Premium Plus, no ads)
**Apple TV+:** $9.99/month (included free for 3 months with new Apple device)
**Paramount+:** $5.99/month (with ads), $11.99 (no ads)
**Sling TV (live):** $40/month and up

Prices change frequently — always verify current pricing on each service's website.

The most common advice: maintain one to two subscription services at a time and rotate them seasonally. Watch through one service's catalog, cancel, subscribe to another for a few months, then rotate back. This costs $15-30/month total instead of $100+.`,
    steps: [
      {
        title: 'List All Your Current Streaming Subscriptions',
        content: 'Check your credit card or bank statement for recurring streaming charges. List each service and its monthly cost. Many people discover subscriptions they forgot about or that overlap in content.',
        tip: 'Check your iPhone Subscriptions (Settings → your name → Subscriptions) and Google Play Subscriptions for additional charges you may have forgotten.',
      },
      {
        title: 'Identify What You Actually Watch',
        content: 'For each service you pay for, think about how many hours per week you watch it. If a service costs $16/month and you watch 2 hours a month, you are paying $8 per hour of entertainment — more than a movie ticket. That service may not be worth keeping.',
      },
      {
        title: 'Choose Ad-Supported Tiers to Save Money',
        content: 'Most streaming services now offer cheaper plans with ads. For a $7-8 plan vs a $16 plan, the difference is commercials — usually 4-5 minutes of ads per hour, similar to broadcast TV. Ad-supported tiers represent significant monthly savings for households on a budget.',
        tip: 'Netflix Standard with Ads and Peacock Premium cost about the same as buying one DVD movie per month — but give you access to thousands of titles.',
      },
      {
        title: 'Bundle Services to Save',
        content: 'Disney bundles Disney+, Hulu, and ESPN+ together for less than buying them separately. Apple One bundles Apple TV+, Apple Music, and iCloud+. Check if a bundle covers services you already pay for separately — bundling often saves $5-10/month.',
      },
      {
        title: 'Rotate Services Seasonally',
        content: 'Cancel services you are not actively watching and resubscribe when a show you want comes back or when a new season drops. Most services do not charge cancellation fees. You keep your account history and watch progress — just lose access to content until you resubscribe.',
        tip: 'Follow a site like JustWatch.com to see which streaming service currently has a specific movie or show — it updates in real time as content moves between services.',
      },
    ],
  },
  {
    slug: 'cancel-amazon-prime-guide',
    title: 'How to Cancel Amazon Prime (and What You Lose When You Do)',
    excerpt: `Amazon Prime auto-renews annually. Here's how to cancel it, what happens to your benefits when you cancel, and whether pausing is a better option.`,
    category: 'app-guides',
    tags: ['Amazon Prime', 'cancel subscription', 'Amazon', 'money saving'],
    readTime: '4 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Amazon Prime costs $14.99 per month or $139 per year as of 2026. It includes free two-day shipping on millions of items, Prime Video (streaming movies and TV shows), Prime Music (100 million songs), Prime Reading (free e-books and magazines), Amazon Photos (unlimited photo storage), and early access to sales.

If you signed up for Prime and no longer feel you are getting your money's worth, canceling is straightforward. However, it is worth understanding exactly what you lose — and whether downgrading instead of canceling entirely might make more sense.

When you cancel Prime, you immediately lose access to Prime Video, Prime Music, Prime Reading, and the free 2-day shipping benefit. You can still shop on Amazon but shipping will take longer (or cost extra) for items that are not eligible for free standard shipping.

If you cancel an annual Prime membership before the year is up, Amazon may issue a prorated refund for the unused months — but only if you have not used any Prime benefits since your last payment. If you have used free shipping or watched Prime Video, typically no refund is available.

A middle option: if you only use Prime for shipping and do not watch Prime Video or use other services, consider whether you actually use Prime enough to justify the cost. People who order from Amazon fewer than 3-4 times per month may save money without Prime by paying individual shipping fees.

Amazon also offers a discounted Prime membership for customers who receive government assistance (EBT/SNAP) — $6.99/month instead of $14.99.`,
    steps: [
      {
        title: 'Go to Amazon Account Settings',
        content: 'Log in to amazon.com on a computer or the Amazon app. Hover over "Account & Lists" (top right on computer) → "Account." Or on the app, tap the menu (three lines) → "Account." Look for "Prime" in the account menu.',
      },
      {
        title: 'Find Manage Membership',
        content: 'On the Prime page, find "Manage Membership" or "Cancel Prime." Amazon may show you a page highlighting your benefits to discourage cancellation — scroll past this to find the cancellation button.',
      },
      {
        title: 'Choose End or Cancel Immediately',
        content: 'Amazon presents two options: "End Membership" (access continues until the next billing date, no refund) or "Cancel Immediately" (access ends now, and a partial refund may be issued if you have not used Prime benefits recently). "End Membership" is usually the better choice.',
        tip: `If your annual renewal is coming up soon, set a calendar reminder to cancel a few days before it renews — this way you get the full year's benefit and avoid an unwanted charge.`,
      },
      {
        title: 'Confirm Cancellation',
        content: 'Click through the confirmation prompts. Amazon shows a confirmation page listing what you will lose. Click "Cancel Membership" or "Confirm Cancellation." You receive a confirmation email.',
      },
      {
        title: 'Consider Downgrading Options',
        content: 'Before canceling entirely, check if Amazon offers any alternatives: a free Prime trial extension, a reduced-price plan, or a switch from annual to monthly billing. If you qualify for EBT/SNAP discounts, you can switch to the discounted plan at $6.99/month instead of canceling.',
        tip: 'If you use Prime primarily for free shipping, calculate whether the items you ordered in the past year would have cost more in shipping fees than the Prime membership cost. If shipping fees would be less, canceling saves you money.',
      },
    ],
  },
  {
    slug: 'iphone-crash-detection',
    title: 'How iPhone Crash Detection Works and How to Set It Up',
    excerpt: `iPhone 14 and later can detect a car crash and automatically call 911 if you are unresponsive. Here's what it does, how to confirm it's on, and how to avoid false alerts.`,
    category: 'safety-guides',
    tags: ['iPhone', 'crash detection', 'emergency SOS', 'safety', 'iPhone 14'],
    readTime: '4 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Crash Detection is a safety feature available on iPhone 14 and later (all models). If your iPhone detects that you have been in a severe vehicle crash, it sounds an alarm, displays an emergency SOS screen on your phone, and — if you do not respond within 10 seconds — automatically calls 911 and shares your GPS location with emergency services. It also sends your location to your emergency contacts.

Crash Detection uses a combination of sensors: the barometer, microphone, GPS, and the accelerometer (which measures sudden changes in speed and direction). The system is specifically trained to recognize the motion and sound patterns of a car crash — not ordinary bumps or hard braking.

For most users, Crash Detection works in the background automatically — no setup required beyond having an iPhone 14 or later with Emergency SOS and Medical ID configured. However, confirming your Medical ID and emergency contacts are accurate is important, since that information is shared with 911 when Crash Detection activates.

False positives do occasionally occur: Crash Detection has activated for some people during intense roller coaster rides or skiing trips — the motion pattern resembles a crash. If an alert appears and you are fine, tap "I'm OK" within 10 seconds to cancel the call.

Note that Crash Detection works even if your iPhone is in low-power mode or in a pocket or bag — you do not need to be actively using the phone. It runs passively in the background at all times on supported models.`,
    steps: [
      {
        title: 'Check If Your iPhone Supports Crash Detection',
        content: 'Crash Detection is available on iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max, and all iPhone 15 and iPhone 16 models. It is not available on earlier iPhones. Go to Settings → Emergency SOS to see if Crash Detection appears.',
      },
      {
        title: 'Verify Crash Detection Is Enabled',
        content: 'Go to Settings → Emergency SOS. Look for "Crash Detection" or "Call After Serious Crash" — make sure the toggle is on. It is on by default on supported models.',
      },
      {
        title: 'Set Up Emergency Contacts',
        content: 'Go to the Health app on your iPhone → tap your profile photo → "Medical ID" → "Edit." Add at least one emergency contact. These contacts receive a text message with your location when Crash Detection (or Emergency SOS) activates.',
        tip: 'Add a family member or close friend as your emergency contact — someone who would want to know immediately if you were in a crash.',
      },
      {
        title: 'Know What to Expect After a Crash',
        content: `If Crash Detection activates, your iPhone sounds an alarm and shows a countdown screen. It announces: "It looks like you've been in a crash." You can tap "I'm OK" to cancel, or tap "Emergency SOS" to call immediately. If no action is taken in 10 seconds, the phone calls 911 automatically.`,
        tip: `If you are fine and a false alarm occurs, tap "I'm OK" quickly. If you accidentally trigger the call to 911, stay on the line and explain it was a false alarm — dispatchers are accustomed to this.`,
      },
      {
        title: 'Review Medical ID Information',
        content: 'Since Crash Detection shares your Medical ID with 911, make sure it is accurate and complete: blood type, allergies, medications, and a note about any important medical conditions. First responders can view this even on a locked iPhone.',
        warning: 'Crash Detection is designed for severe crashes, not minor fender benders. It activates when the sensor readings indicate a potentially life-threatening impact. Minor accidents may not trigger it.',
      },
    ],
  },
  {
    slug: 'android-emergency-sos-setup',
    title: 'How to Set Up and Use Android Emergency SOS',
    excerpt: `Android has a built-in emergency SOS feature — pressing the power button rapidly calls 911 and sends your location to contacts. Here's how to set it up.`,
    category: 'safety-guides',
    tags: ['Android', 'Emergency SOS', 'safety', 'emergency', 'Google'],
    readTime: '4 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Android phones have a built-in Emergency SOS feature that lets you call 911 quickly by pressing the power button multiple times — useful in situations where you cannot safely type or navigate a menu. When activated, it calls emergency services, shares your GPS location, and can send an alert to your emergency contacts.

The exact setup varies slightly by Android brand (Samsung, Pixel, Motorola), but all recent Android phones running Android 12 or later have Emergency SOS built into the Settings.

By default on most Android phones, pressing the power button five times rapidly activates Emergency SOS. On some phones, pressing and holding the side button works. A countdown occurs before the call is placed, giving you a chance to cancel if it was accidental.

Emergency contacts are set up separately — these are the people who receive your location and an alert message when Emergency SOS activates. These contacts do not need to have any special app installed; they receive an SMS text message with your location link.

Google's Personal Safety app (built into Pixel phones and available on Google Play for other Android phones) extends these features: it adds crisis contact sharing, location sharing for solo activities, and integration with Pixel's crash detection. For the best Android safety features, this app is worth installing if it is not already on your phone.

Nexus and Pixel phones also have a crisis location sharing feature that sends your location to a trusted contact when you hold the power button and slide — without calling 911 — useful for checking in during solo activities.`,
    steps: [
      {
        title: 'Find Emergency SOS in Settings',
        content: 'Open Settings on your Android phone. Search "Emergency SOS" in the settings search bar. Tap the "Emergency SOS" result. On Samsung phones, it may be under "Safety and Emergency." On Pixel, it is under "Safety & Emergency."',
      },
      {
        title: 'Enable Emergency SOS',
        content: 'Toggle on Emergency SOS or "Use Emergency SOS." Set the activation method: "Press power button 5 times" is the default on most phones. Some phones also allow holding the power button for 3 seconds.',
        tip: 'Test the activation motion in settings before relying on it — make sure pressing the button 5 times is a natural motion you can do with one hand.',
      },
      {
        title: 'Add Emergency Contacts',
        content: 'In the Emergency SOS settings, find "Emergency contacts" or look for the Safety app. Tap "Add emergency contact." Select contacts from your phonebook. These contacts receive a text message with your location when Emergency SOS activates.',
        tip: 'On Samsung phones, add emergency contacts in Settings → Safety and Emergency → Emergency contacts. On Pixel, use the Personal Safety app.',
      },
      {
        title: 'Enable Share Location with Emergency Contacts',
        content: 'Make sure "Share location with emergency contacts" is enabled. When Emergency SOS activates, your contacts receive a Google Maps link showing your current location. This helps family reach you quickly.',
      },
      {
        title: 'Understand What Happens When It Activates',
        content: 'When you activate Emergency SOS, a countdown of 5 seconds appears with a loud alarm sound. You can cancel by tapping "Cancel." If not canceled, the phone calls 911 and simultaneously texts your emergency contacts with your GPS location. Stay on the line with 911 and describe your situation.',
        warning: 'Accidental 911 calls can use emergency dispatcher resources. If a call goes through accidentally, stay on the line and explain it was accidental — never hang up without speaking to the dispatcher.',
      },
    ],
  },
  {
    slug: 'medigap-supplement-guide',
    title: 'What Is Medigap (Medicare Supplement) Insurance?',
    excerpt: `Original Medicare covers about 80% of medical costs. Medigap covers much of the rest. Here's a plain-English explanation of what it is and how it works.`,
    category: 'government-civic',
    tags: ['Medicare', 'Medigap', 'Medicare Supplement', 'health insurance', 'seniors'],
    readTime: '7 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Original Medicare (Parts A and B) covers most hospital and medical costs, but it does not cover everything. You are responsible for deductibles, copayments, and coinsurance — costs that can add up to thousands of dollars during a serious illness or surgery. Medigap (also called Medicare Supplement Insurance) is private insurance that covers many of these out-of-pocket costs that Original Medicare leaves unpaid.

Medigap is sold by private insurance companies but is highly regulated by the federal government. Plans are standardized and labeled with letters (Plan A, Plan B, Plan C, Plan D, Plan F, Plan G, Plan K, Plan L, Plan M, Plan N). All companies selling Plan G must offer the exact same Plan G benefits — you are only shopping for the best price, not for different coverage.

Medigap is separate from Medicare Advantage. Medigap works alongside Original Medicare — you keep your Medicare card and use any doctor or hospital in the US that accepts Medicare. Medicare Advantage plans replace Original Medicare and typically limit you to a network of providers. These are fundamentally different approaches.

**Plan G** is currently the most popular Medigap plan for new Medicare enrollees (since Plan F was discontinued for those who became eligible after 2020). Plan G covers: Part A deductible and coinsurance, Part B coinsurance (the 20% Medicare does not pay), skilled nursing facility coinsurance, and foreign travel emergencies. You only pay the Part B annual deductible yourself.

The best time to enroll in Medigap is during the six-month open enrollment period that starts the month you are both 65 years old AND enrolled in Medicare Part B. During this period, insurance companies cannot deny you coverage or charge higher premiums due to pre-existing conditions.

Medigap does not cover prescription drugs (Part D), dental, vision, or hearing — these require separate coverage.`,
    steps: [
      {
        title: 'Understand When You Can Enroll Without Medical Underwriting',
        content: 'The best time to enroll is your Medigap Open Enrollment Period: the 6 months starting on the first day of the month you are 65 AND enrolled in Part B. During this window, any insurance company must accept you at standard rates regardless of health history.',
        warning: 'After this window closes, you may be denied coverage or charged higher premiums based on medical history. Enrolling during the open enrollment period is strongly recommended.',
      },
      {
        title: 'Compare Plans by Letter',
        content: 'All Medigap plan letters (A, B, D, G, K, L, M, N) have standardized benefits across every insurance company. Plan G is popular because it covers nearly all out-of-pocket costs except the Part B annual deductible (about $240 in 2026). Compare prices for the same plan letter from different companies at your zip code.',
      },
      {
        title: 'Find and Compare Prices',
        content: 'Use the official tool at medicare.gov → "Compare health plans" → "Medigap" to see available plans and approximate prices in your zip code. You can also call your State Health Insurance Assistance Program (SHIP) — a free, federally funded counseling service — at 1-877-839-2675.',
        tip: 'SHIP counselors give free, unbiased advice about Medicare plan options in your state. This is one of the most underused resources available to Medicare beneficiaries.',
      },
      {
        title: 'Apply Through an Insurance Company',
        content: 'Once you have chosen a plan letter and an insurance company with a competitive price, apply directly through that company (by phone, website, or with an insurance agent). The insurance company processes your application and issues a policy. You pay the company directly each month.',
      },
      {
        title: 'Understand What Medigap Does Not Cover',
        content: 'Medigap plans do not include prescription drug coverage — you need a separate Part D plan for medications. They also do not cover dental, vision, or hearing. For these services, you would need additional coverage through a standalone dental/vision plan or a Medicare Advantage plan.',
        tip: 'If you have Medigap, do NOT also enroll in a Medicare Advantage plan — they cannot be used together. Medigap works with Original Medicare only.',
      },
    ],
  },
  {
    slug: 'phone-plan-comparison-guide',
    title: 'How to Compare Phone Plans and Find a Better Deal',
    excerpt: `Phone plans vary dramatically in price. Here's how to evaluate what you actually need, compare major carriers and budget alternatives, and save $20-40 a month.`,
    category: 'essential-skills',
    tags: ['phone plan', 'wireless', 'Verizon', 'AT&T', 'T-Mobile', 'savings'],
    readTime: '6 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Many Americans are paying $70-100 or more per month for a single phone line — far more than they need to based on how they actually use their phones. A few hours of comparison shopping can often reduce phone bills by $20-50 per month without sacrificing coverage or call quality.

The major carriers — Verizon, AT&T, and T-Mobile — offer premium coverage and multiple lines of support, but they charge premium prices. Smaller carriers called MVNOs (Mobile Virtual Network Operators) run on the exact same networks as the big three but charge much less because they have lower overhead.

**MVNO key fact:** Consumer Cellular, Mint Mobile, Straight Talk, and Visible all run on the same towers as AT&T, Verizon, or T-Mobile. If you have coverage from one of the big three in your area, an MVNO that uses that network will give you identical coverage at a lower price.

What matters when choosing a plan:
- **Data:** How many GB of data do you use per month? Check Settings (iPhone: Settings → Cellular, Android: Settings → Network → Data Usage) to see your monthly data usage. Many seniors use 2-5 GB or less per month.
- **Talk and text:** Most plans include unlimited calls and texts in the US.
- **Coverage:** Check coverage maps for your area and the places you travel often.
- **Contract:** Month-to-month plans (no contract) offer flexibility. Annual prepaid plans are cheaper.

Approximate current prices (2026): Consumer Cellular $20-35/month, Mint Mobile $15-30/month, Visible $25/month (Verizon network), T-Mobile Magenta 55+ (for 55+) $50 for two lines.`,
    steps: [
      {
        title: 'Check Your Current Data Usage',
        content: 'On iPhone: Settings → Cellular → scroll down to see "Current Period" data usage. On Android: Settings → Network → Data usage. Note your monthly data usage. Many people discover they use 2-4 GB per month — meaning unlimited data (which costs much more) is unnecessary.',
        tip: 'Reset your data usage counter at the start of each month to get an accurate monthly figure.',
      },
      {
        title: 'Check Your Current Coverage Area',
        content: `Go to each carrier's coverage map website. Enter your home address and places you frequently travel (relatives' cities, favorite vacation spots). Make sure the coverage is good everywhere you use your phone. Use Verizon's, AT&T's, and T-Mobile's maps at their official websites.`,
      },
      {
        title: 'Compare MVNO Plans for Your Budget',
        content: 'If you use under 10 GB per month: Consumer Cellular ($25-35/month, AT&T or T-Mobile network), Mint Mobile ($15-30/month, T-Mobile network), or Visible ($25/month, Verizon network) are worth comparing. All include unlimited calls and texts.',
        tip: 'Consumer Cellular is particularly popular with seniors — US-based customer service, no contracts, simple plans, and discounts for AARP members.',
      },
      {
        title: 'Ask About Senior Discounts',
        content: 'T-Mobile Magenta 55+ is $50/month for two lines for customers 55 and older — substantially cheaper than standard two-line plans. AARP members get discounts with Consumer Cellular. Always ask about senior pricing before signing up.',
      },
      {
        title: 'Switch Carriers Without Losing Your Number',
        content: 'Switching phone carriers does not require changing your phone number. This is called "porting" your number. During signup with a new carrier, choose "I want to keep my current number" and provide your account number and PIN from your old carrier. The new carrier handles the transfer — usually completed within a few hours.',
        warning: 'Do not cancel your old plan until your number has fully transferred to the new carrier. Canceling too early can cause you to lose your number.',
      },
    ],
  },
  {
    slug: 'consumer-cellular-guide',
    title: 'Is Consumer Cellular Right for You? A Plain-English Guide',
    excerpt: `Consumer Cellular is a no-contract carrier on AT&T and T-Mobile's networks — popular with seniors for its simple plans, US-based support, and AARP discount.`,
    category: 'essential-skills',
    tags: ['Consumer Cellular', 'phone plan', 'MVNO', 'seniors', 'AARP'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Consumer Cellular is a US-based no-contract wireless carrier that runs on AT&T's and T-Mobile's networks. It is especially popular with adults 50 and older because of its simple pricing, US-based customer service, no long-term contracts, and partnership with AARP (AARP members get a 5% discount on monthly service).

Consumer Cellular is an MVNO — a Mobile Virtual Network Operator — meaning it does not own its own cell towers but uses AT&T's or T-Mobile's infrastructure. In most of the country, coverage is excellent. In rural areas, coverage depends on which network option you choose when signing up.

Plans start at $20/month for 500 MB of data and go up to $55/month for unlimited data. Each plan includes unlimited US talk and text. You only pay for the data amount you choose — no overage charges. If you use more data than your plan allows, you are automatically bumped to the next tier (not charged extra), then bumped back down at the start of the next month.

Consumer Cellular sells phones, or you can bring your own phone. Most unlocked iPhones and Android phones work with Consumer Cellular. An "unlocked" phone is one that is not locked to a specific carrier — most phones become unlocked after 12 months with the original carrier, or you can call your carrier to request unlocking.

Customer service is available by phone (888-345-5509) Monday-Friday 8 AM - 9 PM and weekends 9 AM - 6 PM Central time, with real, US-based representatives. This is notably better than most carriers and is one of Consumer Cellular's strongest selling points for seniors who prefer speaking to a person.`,
    steps: [
      {
        title: 'Check if Consumer Cellular Has Good Coverage in Your Area',
        content: 'Go to consumercellular.com → "Coverage" → enter your zip code. Consumer Cellular uses both AT&T and T-Mobile networks. Choose the network with better coverage in your specific area — or call 888-345-5509 and ask which network is stronger where you live.',
      },
      {
        title: 'Choose a Plan',
        content: 'Plans range from 500 MB ($20/month) to Unlimited ($55/month). Check your current monthly data usage first (Settings → Cellular on iPhone or Settings → Network → Data Usage on Android). If you use under 3 GB per month, the $25-30 plan tiers are usually sufficient.',
        tip: 'Consumer Cellular automatically moves you up a tier if you exceed your data limit and back down next month — so starting with a smaller plan and adjusting is safe.',
      },
      {
        title: 'Check if Your Phone Is Compatible',
        content: `Visit consumercellular.com → "Bring your own phone" → enter your phone's IMEI number. You can find your IMEI in Settings → General → About → IMEI (iPhone) or Settings → About phone → IMEI (Android). The tool tells you if your phone is compatible and which network to use.`,
      },
      {
        title: 'Sign Up and Order a SIM Card',
        content: 'Go to consumercellular.com or call 888-345-5509. Choose your plan, enter your current phone number (to transfer/port it), and order a SIM card if needed. SIM cards are free and shipped to you. Insert the SIM, and setup instructions walk you through the rest.',
        tip: 'AARP members: use your AARP membership number during signup to apply the 5% service discount. You can also sign up in Target stores, which carry Consumer Cellular products.',
      },
      {
        title: 'Transfer Your Phone Number',
        content: `During signup, choose "Keep my current number." Provide your current carrier's account number and PIN/password (call your current carrier if you do not know these). Consumer Cellular handles the transfer — it typically takes 4-6 hours. Do not cancel your old plan until the transfer is confirmed complete.`,
        warning: 'Keep your old phone active and do not cancel service until Consumer Cellular confirms your number has been fully transferred. Canceling early can permanently lose your number.',
      },
    ],
  },
];
