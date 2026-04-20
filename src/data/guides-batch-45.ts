import { Guide } from './guides';

export const guidesBatch45: Guide[] = [
  {
    slug: `erase-iphone-before-selling`,
    title: `How to Erase Your iPhone Before Selling or Giving It Away`,
    excerpt: `Before you hand off your old iPhone, wipe it completely so the new owner cannot access your photos, passwords, or accounts. This guide walks you through every step.`,
    category: `phone-guides`,
    tags: [`iphone`, `erase`, `sell phone`, `factory reset`, `privacy`, `apple id`],
    readTime: `5 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Before selling, trading in, or giving your old iPhone to someone else, you must erase all your personal data. This includes your photos, messages, emails, contacts, passwords, Apple Pay cards, and any app accounts. If you skip this step, the next person who picks up the phone could see everything.

The proper erasure process has two parts: signing out of your Apple ID (which removes iCloud, Apple Pay, and Find My iPhone) and then performing a factory reset (which wipes all data and returns the phone to the same state it was in when you first took it out of the box).

Before you erase, make a backup. Use iCloud (Settings → [your name] → iCloud → iCloud Backup → Back Up Now) or connect to a computer and back up through Finder (Mac) or iTunes (Windows). This lets you restore all your data to your new phone.

After erasing, the phone will ask whoever sets it up to enter an Apple ID and password during Activation Lock — but only if it was linked to your account. Once you sign out of your Apple ID, Activation Lock is removed and the new owner can set it up fresh.

This process takes about 10–15 minutes total. The actual erase can take anywhere from a few minutes to half an hour depending on how much data is on the phone.`,
    steps: [
      {
        title: `Back Up Your iPhone First`,
        content: `Before doing anything else, back up your iPhone so you do not lose your data. Go to Settings → [your name] → iCloud → iCloud Backup → Back Up Now. Wait for the backup to finish. Alternatively, connect to your computer and back up through Finder or iTunes.`,
        tip: `Quick Tip: Make sure your iPhone is connected to Wi-Fi and plugged into power during the backup — large backups can take a while.`,
      },
      {
        title: `Sign Out of Apple ID`,
        content: `Go to Settings → tap your name at the top. Scroll to the very bottom and tap "Sign Out." Enter your Apple ID password when asked. Choose whether to keep a copy of iCloud data (like contacts and calendars) on the phone — for a wipe you can choose to turn these off. Tap "Sign Out" again to confirm.`,
        warning: `Signing out of your Apple ID also removes Apple Pay cards and disables Find My iPhone on this device. Make sure your backup is complete before doing this.`,
      },
      {
        title: `Erase All Content and Settings`,
        content: `Go to Settings → General → Transfer or Reset iPhone → Erase All Content and Settings. On some older iOS versions, look for Settings → General → Reset → Erase All Content and Settings. Enter your iPhone passcode if asked, then confirm you want to erase. The phone restarts and shows the setup screen.`,
      },
      {
        title: `Confirm Activation Lock Is Off`,
        content: `After the erase completes, the phone shows the "Hello" setup screen. This means it is clean and ready for a new owner. To double-check that Activation Lock was removed: go to icloud.com/find on any browser, sign in, click All Devices, and make sure your old phone no longer appears there.`,
      },
      {
        title: `Pack It Up for the New Owner`,
        content: `The erased iPhone is ready to be sold, traded in, or given away. If you have the original box, charging cable, or accessories, include them. Remove any cases, screen protectors, or SIM card trays that belong to you. A factory-reset iPhone with original accessories fetches a higher resale price.`,
      },
    ],
  },
  {
    slug: `erase-android-before-selling`,
    title: `How to Factory Reset an Android Phone Before Selling`,
    excerpt: `A factory reset erases your personal data from an Android phone before you sell it or pass it on. Here is how to back up your data first and then wipe the device safely.`,
    category: `phone-guides`,
    tags: [`android`, `factory reset`, `erase`, `sell phone`, `privacy`, `google account`],
    readTime: `5 min`,
    thumbnailEmoji: `🤖`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you are done with an Android phone and plan to sell it, trade it in, or donate it, a factory reset is essential. Without it, the next owner could access your Gmail, Google Pay, saved passwords, photos, and any apps where you were still logged in.

A factory reset wipes all personal data from the phone and restores the operating system to factory defaults — just like it was when it came out of the box. Before you do this, back up your data to Google so you can restore it on your new phone.

Google automatically backs up most things: contacts, calendar events, app data, call history, and device settings. Your photos and videos sync to Google Photos if you have that turned on. Messages and WhatsApp chats may need separate backup steps.

After a factory reset on Android, Google's Factory Reset Protection (FRP) feature may require the previous owner's Google account to set up the phone — but only if you do NOT sign out of your Google account before resetting. Signing out first removes this protection for the new owner.

The reset process takes 5–20 minutes depending on how much data is on the phone.`,
    steps: [
      {
        title: `Back Up Your Data to Google`,
        content: `Go to Settings → System → Backup (path varies by phone brand). Make sure "Back up to Google Drive" is on and shows a recent backup date. Tap "Back up now" to create a fresh backup. Also open Google Photos and make sure all your photos are backed up (look for "Backup complete" at the top of Photos).`,
        tip: `Quick Tip: On Samsung phones, look in Settings → Accounts and backup → Back up data. Samsung has its own backup system in addition to Google's.`,
      },
      {
        title: `Sign Out of Your Google Account`,
        content: `Go to Settings → Accounts → Google → tap your account → Remove account. This signs you out of Gmail, Google Pay, and all Google services on the phone. It also removes Factory Reset Protection so the new owner can set up the phone without needing your password.`,
        warning: `Remove your Google account BEFORE doing the factory reset. If you reset first without signing out, the new owner will be stuck at a screen asking for your Google account during setup.`,
      },
      {
        title: `Perform the Factory Reset`,
        content: `Go to Settings → System → Reset options → Erase all data (factory reset). The exact path varies by brand: on Samsung, look in Settings → General management → Reset → Factory data reset. Review what will be deleted and tap "Reset" or "Erase everything." Enter your PIN if asked.`,
      },
      {
        title: `Wait for the Reset to Complete`,
        content: `The phone powers off and goes through the reset process. This can take 5–20 minutes. Do not press any buttons or pull out the battery during this time. The phone restarts and shows the initial setup screen with language selection when it is done.`,
      },
      {
        title: `Prepare for the New Owner`,
        content: `The reset phone is ready for setup. Stop at the setup screen — do not set it up yourself, as that would link it to your account again. Remove the SIM card (using the SIM tray tool or a small paperclip in the side slot). Include the phone's charger and original accessories if you have them.`,
      },
    ],
  },
  {
    slug: `google-drive-share-files-guide`,
    title: `How to Share Files and Folders in Google Drive`,
    excerpt: `Google Drive makes it simple to share documents, photos, and folders with family, friends, or colleagues — with or without a Google account. Here is how.`,
    category: `essential-skills`,
    tags: [`google drive`, `share files`, `share folder`, `collaboration`, `cloud storage`],
    readTime: `5 min`,
    thumbnailEmoji: `📁`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google Drive lets you share any file or folder with other people — whether they use Gmail or not. Sharing is one of the most useful things about cloud storage: instead of emailing large attachments, you send a link. The other person clicks the link and sees the file in their browser.

When you share something, you choose whether the other person can just view it, add comments to it, or actually edit and change it. This gives you control — you can let a family member see a photo album without being able to delete anything, or let a colleague edit a shared document together with you in real time.

There are two main ways to share in Google Drive: by entering someone's email address directly (they get an email notification) or by creating a shareable link that anyone with the link can open (no email required). The "anyone with the link" option is great for sharing with people who do not have Google accounts.

You can share individual files (a single document or photo) or entire folders (which shares everything inside). Sharing a folder is efficient when you have many files for the same project or person.

Managing sharing is straightforward — you can see everyone who has access to a file and remove their access at any time.`,
    steps: [
      {
        title: `Open Google Drive and Find Your File`,
        content: `Go to drive.google.com in any browser, or open the Google Drive app on your phone. Find the file or folder you want to share. You can also share a file while it is open — just look for the Share button.`,
      },
      {
        title: `Right-Click to Share (Computer)`,
        content: `On a computer, right-click the file or folder and choose "Share." A sharing dialog opens. On the phone app, tap the three-dot menu (⋮) next to the file and tap "Share."`,
        tip: `Quick Tip: You can share multiple files at once by holding Ctrl (Windows) or Command (Mac) and clicking each file, then right-clicking to share.`,
      },
      {
        title: `Share With a Specific Person`,
        content: `In the sharing dialog, type the person's email address in the "Add people and groups" field. Choose their permission level from the dropdown: Viewer (can only look), Commenter (can suggest notes), or Editor (can change the file). Click "Send." They receive an email with a link to the file.`,
      },
      {
        title: `Create a Shareable Link`,
        content: `To share without requiring a Gmail address: in the sharing dialog, click "Copy link" or find "General access" and change it from "Restricted" to "Anyone with the link." Choose the permission (Viewer, Commenter, or Editor), then click "Copy link." Paste that link into a text message, email, or chat. Anyone who gets the link can open the file.`,
        warning: `Use "Anyone with the link" carefully for sensitive documents — once the link is out, anyone who gets it can access the file. Stick to specific email sharing for private information.`,
      },
      {
        title: `See Who Has Access`,
        content: `To review or manage who can see a file, right-click it and choose "Share." The sharing panel shows everyone who has access and their permission level. To remove someone's access, click the dropdown next to their name and choose "Remove access."`,
      },
    ],
  },
  {
    slug: `iphone-measure-app-guide`,
    title: `How to Use the iPhone Measure App to Measure Objects With Your Camera`,
    excerpt: `Your iPhone has a built-in measuring tape — the Measure app uses the camera to measure real-world objects. Great for furniture shopping, home projects, or checking if something fits.`,
    category: `tips-tricks`,
    tags: [`iphone`, `measure app`, `ar`, `measurements`, `ruler`, `how-to`],
    readTime: `4 min`,
    thumbnailEmoji: `📏`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your iPhone comes with a free built-in app called Measure that uses augmented reality (AR) to measure real-world objects using the camera — no tape measure needed. You can measure the length, width, or height of objects in your home, check if a piece of furniture will fit in a space, or get quick dimensions when shopping.

The app is available on all iPhones with Face ID (iPhone X and newer) and on iPhone 6s/7/8 models running iOS 12 or later. It uses the camera and motion sensors to calculate distances.

Measure is surprisingly accurate — within about one to two inches for most objects — which is good enough for most everyday tasks like checking if a couch fits through a door, seeing if a rug is the right size for a room, or measuring a countertop before buying an appliance.

The app also includes a built-in level — useful for checking if a picture frame is hung straight, if a shelf is level, or if a surface is flat.

For best results, hold the phone steadily and use Measure in good lighting. The camera needs to see the surface or object clearly to calculate measurements accurately.`,
    steps: [
      {
        title: `Open the Measure App`,
        content: `Look for the Measure app on your iPhone — it has a white icon with a ruler. If you do not see it, swipe down on your home screen to search and type "Measure." Tap the app to open it. Allow access to your camera if asked.`,
        tip: `Quick Tip: The first time you open Measure, the app asks you to slowly move your phone around the room. This calibrates the AR sensors — give it a few seconds.`,
      },
      {
        title: `Point at the Surface or Object`,
        content: `Hold your iPhone so the camera points at the object or surface you want to measure. A white circle with a dot appears on screen. You need to see a flat surface clearly — aim at the floor, a tabletop, or a wall. The circle turns into a plus (+) symbol when the app detects a surface.`,
      },
      {
        title: `Add a Starting Point`,
        content: `Move the white dot to one end of what you want to measure — the corner of a table, the edge of a rug, or the end of a countertop. Tap the white + button (or tap the screen) to set the starting point. A yellow dot marks your start.`,
      },
      {
        title: `Drag to Set the End Point`,
        content: `Slowly move your phone toward the other end of the object. A yellow line extends from your starting point following your movement. When the line reaches the end of the object, tap the + button again to set the endpoint. The measurement appears in feet and inches (or centimeters, depending on your settings).`,
      },
      {
        title: `Use the Level`,
        content: `Tap the level button (the circle icon at the bottom) to switch to the level tool. Hold your phone flat against a surface — the display shows degrees. When the numbers show 0°, the surface is perfectly flat. When you hold the phone vertically against a wall, a green circle appears when it is plumb.`,
      },
    ],
  },
  {
    slug: `microsoft-edge-pdf-viewer`,
    title: `How to Open and Read PDF Files Using Microsoft Edge`,
    excerpt: `Windows includes Microsoft Edge, which opens PDF files for free — no Acrobat needed. You can read, zoom in, highlight, and add notes without installing any extra software.`,
    category: `windows-guides`,
    tags: [`pdf`, `microsoft edge`, `windows`, `read pdf`, `free`, `documents`],
    readTime: `4 min`,
    thumbnailEmoji: `📄`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `PDF files are everywhere — bank statements, medical forms, government documents, instruction manuals, and more all come in PDF format. On Windows, you do not need Adobe Acrobat or any paid software to open them. Microsoft Edge, which is already installed on your Windows computer, opens PDF files completely free with a clean, easy-to-use interface.

Edge's PDF reader lets you zoom in (great for small print), search for a specific word on a page, highlight text in yellow or other colors, add sticky notes, draw or annotate, and fill in PDF forms. These are capabilities that used to require paid Acrobat software.

When you download a PDF from email or a website, Windows may automatically open it in Edge if Edge is your default browser. If it opens in another program and you prefer Edge, right-click the PDF file, choose "Open with," and select Microsoft Edge.

Edge also shows a toolbar at the top when a PDF is open: you can jump to specific pages, print the document, or download a copy. The toolbar appears when you click anywhere near the top of the screen.

PDFs saved to your computer open directly in Edge — no internet connection needed.`,
    steps: [
      {
        title: `Open a PDF in Edge`,
        content: `Double-click any PDF file on your computer. If it opens in Edge, you are ready to go. If it opens in a different program, right-click the PDF file, choose "Open with," then click "Microsoft Edge." The PDF appears in a browser window with a toolbar at the top.`,
        tip: `Quick Tip: To make Edge your default PDF viewer permanently, right-click a PDF → "Open with" → "Choose another app" → select Edge → check "Always use this app" → click OK.`,
      },
      {
        title: `Zoom In for Small Text`,
        content: `Look at the toolbar at the top of the Edge window. Click the "+" button to zoom in (make text bigger) or "-" to zoom out. You can also hold Ctrl on your keyboard and scroll the mouse wheel up to zoom in. For very small print on legal or medical documents, try 150% or 200% zoom.`,
      },
      {
        title: `Search for a Word or Phrase`,
        content: `Press Ctrl + F on your keyboard to open the search bar. Type the word you are looking for — Edge highlights every instance on the page. Use the arrows to jump from one result to the next. This is useful for finding a specific clause in a contract or a name in a long document.`,
      },
      {
        title: `Highlight Text`,
        content: `Click the pen or highlight icon in the top toolbar (it looks like a marker). Choose a color — yellow is the default. Click and drag over any text to highlight it. Your highlights are saved with the PDF if you save the file. To remove a highlight, right-click the highlighted area and choose "Delete."`,
      },
      {
        title: `Fill In a PDF Form`,
        content: `When a PDF has fillable form fields (like blanks for your name, address, or signature), Edge lets you click right in those fields and type. Click the empty field, type your information, and move to the next field. When done, use "Print" or "Save as PDF" to save a completed copy.`,
      },
    ],
  },
  {
    slug: `iphone-haptic-touch-guide`,
    title: `iPhone Long-Press Shortcuts: How to Use Haptic Touch`,
    excerpt: `Press and hold on apps, text, links, and photos on your iPhone to reveal hidden shortcuts and options — a feature called Haptic Touch that saves you time every day.`,
    category: `tips-tricks`,
    tags: [`iphone`, `haptic touch`, `long press`, `shortcuts`, `gestures`, `ios`],
    readTime: `4 min`,
    thumbnailEmoji: `✋`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Haptic Touch is an iPhone feature that works when you press and hold your finger on something for about half a second. Instead of just tapping to open an app or link, you press and hold to reveal a menu of quick options — no need to open the app first.

This shortcut system works throughout iPhone: on the home screen for app shortcuts, in messages to react to texts, on photos to share or copy them, on links to preview them before opening, on email in your inbox for quick actions, and much more.

For example, pressing and holding the Camera app on your home screen reveals options like "Take Selfie," "Record Video," "Take Photo," or "Scan QR Code" — you can go straight to the mode you want without opening the app first.

In Messages, press and hold on a specific text bubble to see emoji reactions, reply, copy, or delete that individual message. In Safari, press and hold any link to see a preview of the page and options like "Open in New Tab" or "Add to Reading List."

Haptic Touch replaced the older "3D Touch" (pressure-sensitive tap) on iPhone XR and newer. It works on all current iPhone models. You will feel a small vibration when the menu appears — that is the haptic feedback the feature is named after.`,
    steps: [
      {
        title: `Try It on a Home Screen App`,
        content: `Find any app icon on your home screen. Press and hold it (not just a tap — hold for about half a second). A menu pops up with quick shortcuts specific to that app, plus general options like "Remove App." Tap any option to take that action, or tap elsewhere to dismiss the menu.`,
        tip: `Quick Tip: If you hold too long, the icons start wiggling (edit mode). If that happens, press the home button or tap "Done" to exit edit mode, then try a shorter hold.`,
      },
      {
        title: `React to Messages`,
        content: `Open a text conversation in Messages. Find a message bubble (either one you sent or one you received). Press and hold that specific bubble. A row of emoji reactions appears (thumbs up, heart, etc.) and below it, options like Reply, Copy, and Delete. Tap a reaction emoji to add it to that message.`,
      },
      {
        title: `Preview Links in Safari`,
        content: `When browsing a web page in Safari, press and hold any link. A preview of the destination page appears at the bottom of your screen. Review it without fully leaving the page you are on. Then swipe up on the preview for more options (Open, Open in New Tab, Add Bookmark) or swipe it down to dismiss.`,
      },
      {
        title: `Share or Copy Photos`,
        content: `Open the Photos app and find a picture. Press and hold the thumbnail to see quick options: Share, Copy, Add to Album, and more. This is faster than opening the photo fully, tapping the share icon, and working through the share sheet.`,
      },
      {
        title: `Quick Actions on Email`,
        content: `In the Mail app, press and hold any email in your inbox (do not open it). A preview of the email appears along with options like Reply, Forward, Move to Trash, and Flag. You can act on an email without even opening it, which is handy for quickly deleting obvious spam.`,
      },
    ],
  },
  {
    slug: `amazon-prime-video-tips`,
    title: `Getting the Most Out of Amazon Prime Video`,
    excerpt: `Amazon Prime Video is included with Prime, but most people only scratch the surface. Learn how to download shows for offline viewing, use X-Ray, find hidden channels, and set up profiles.`,
    category: `entertainment`,
    tags: [`amazon prime video`, `streaming`, `prime`, `watch offline`, `x-ray`, `tips`],
    readTime: `6 min`,
    thumbnailEmoji: `🎬`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Amazon Prime Video is one of the most feature-rich streaming services available, and it comes free with an Amazon Prime membership. But many people use it like a simple video player and miss out on some genuinely useful features.

X-Ray is one of Prime Video's standout features — tap the screen while watching anything and you see real-time information about the actors in that scene, the music playing in the background, and trivia about the show or movie. It pulls from IMDb (which Amazon owns) and is often more detailed than anything you'd find from a quick Google search.

Prime Video also has a Watchlist — your personal queue of movies and shows you want to watch later. Any time you see something interesting while browsing, add it to your Watchlist so you can find it again easily.

Prime Video includes more than just the core Prime library. Many premium channels (like Paramount+, AMC+, or Starz) are available as add-ons right inside the app — some can be tried free for a week and then cancelled if you do not like them.

Multiple profiles let each family member have their own watchlist and viewing history. This prevents one person's binge-watching from messing up another person's recommendations.`,
    steps: [
      {
        title: `Add Shows to Your Watchlist`,
        content: `When you see a movie or show you want to watch later, tap the + button on its thumbnail or open the show and tap "Add to Watchlist." Find your Watchlist by tapping "My Stuff" at the bottom of the app. Your Watchlist syncs across all your devices.`,
      },
      {
        title: `Download Shows for Offline Viewing`,
        content: `Find a show or movie you want to download. Look for the download icon (a downward arrow). Tap it to start the download. You can choose video quality — lower quality uses less storage space. Find downloaded content under "My Stuff → Downloads." You can watch downloads without any internet connection, perfect for travel.`,
        tip: `Quick Tip: Not all Prime Video content allows downloading due to licensing restrictions. Look for the download icon — if it is there, downloads are allowed for that title.`,
      },
      {
        title: `Use X-Ray for Actor and Music Info`,
        content: `While watching anything on Prime Video, tap the screen once. A bar appears at the top showing the actors currently on screen. Tap "X-Ray" for full details — every actor in the scene, background music, trivia. This is great for when you recognize an actor but cannot remember their name.`,
      },
      {
        title: `Set Up Profiles for Each Family Member`,
        content: `Open the Prime Video app and tap the profile icon (top right). Tap "Add new profile." Give it a name and choose whether it is a Kids profile (which restricts mature content). Each profile has its own watchlist, viewing history, and recommendations. Family members can switch profiles by tapping their icon.`,
      },
      {
        title: `Browse Free Channels and Add-Ons`,
        content: `On the home screen, scroll down to find "Channels" or look for banners advertising "Try [Channel Name] free." These are premium networks that you can subscribe to and cancel directly through Prime Video. Many offer 7-day free trials. Cancel any time from Manage Prime Video Channels at amazon.com.`,
      },
      {
        title: `Adjust Subtitles and Audio`,
        content: `While watching, tap the screen and look for the speech bubble icon (subtitles) or the audio track icon. You can turn subtitles on or off, change the subtitle language, adjust the text size, and switch between audio tracks (like English or Spanish dubbing) for many shows and movies.`,
      },
    ],
  },
  {
    slug: `youtube-playlist-guide`,
    title: `How to Create and Manage YouTube Playlists`,
    excerpt: `YouTube playlists let you save and organize videos into collections — like a music mix, a series of cooking tutorials, or favorite comedy clips. Here is how to create and manage them.`,
    category: `entertainment`,
    tags: [`youtube`, `playlist`, `organize`, `save videos`, `collections`],
    readTime: `4 min`,
    thumbnailEmoji: `🎵`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `YouTube playlists are collections of videos grouped together under a name you choose. You can make a playlist of your favorite music videos, a series of exercise routines, cooking tutorials from different channels, or anything else. Playlists play back to back automatically, so you can set one going and come back to it.

You need a free Google account to create playlists. Once created, they sync across all your devices — a playlist you make on your phone appears on your computer and vice versa.

Playlists can be private (only you can see them), unlisted (only people with the link can see them), or public (anyone can find them). Most personal playlists work well as private.

YouTube also creates automatic playlists for you: "Watch Later" and "Liked videos" are playlists already in your account. Any time you tap the + button on a video or the thumbs-up icon, YouTube adds it to one of these.

You can add videos to a playlist from anywhere — the YouTube search results, a video's page, or even while watching. YouTube's app and website both work the same way for creating and managing playlists.`,
    steps: [
      {
        title: `Sign In to Your Google Account`,
        content: `Open YouTube on your phone, tablet, or computer. Make sure you are signed in — tap the profile photo in the top right corner. If you see a "Sign in" button instead, tap it and log in with your Google account.`,
      },
      {
        title: `Save a Video to a New Playlist`,
        content: `Find a video you want in your playlist. Below the video (on mobile) or to the right (on desktop), tap the "Save" button (a bookmark icon) or tap the three-dot menu (⋮) and choose "Save to playlist." A dialog asks which playlist to save it to. Tap "+ New playlist," give it a name (like "Cooking Videos" or "Favorite Songs"), choose "Private," and tap "Create."`,
      },
      {
        title: `Add More Videos to the Playlist`,
        content: `For each new video you want to add: tap the Save button or three-dot menu → Save to playlist. Your playlist now appears as an option. Tap its name to add the video. The playlist grows as you add more.`,
        tip: `Quick Tip: You can add a video to multiple playlists at once — just check more than one playlist name in the "Save to" dialog.`,
      },
      {
        title: `Find and Watch Your Playlists`,
        content: `Tap the Library icon (bottom of the phone app) or go to your profile on desktop. You see all your playlists listed. Tap a playlist to open it. All the videos appear in order. Tap the first one to start playing — videos play one after another automatically.`,
      },
      {
        title: `Edit or Delete a Playlist`,
        content: `Open the playlist in your Library. Tap the three-dot menu (⋮) next to the playlist name. Choose "Edit playlist" to rename it, change its privacy, or reorder videos. To remove a video from the playlist, find the video in the list and tap the three-dot menu next to it → "Remove from playlist." To delete the entire playlist, choose "Delete playlist."`,
      },
    ],
  },
  {
    slug: `youtube-watch-later-guide`,
    title: `How to Use YouTube's Watch Later List`,
    excerpt: `YouTube's Watch Later feature saves videos to a private list you can come back to whenever you have time. Here is how to add videos and watch your list across devices.`,
    category: `entertainment`,
    tags: [`youtube`, `watch later`, `save video`, `queue`, `library`],
    readTime: `3 min`,
    thumbnailEmoji: `⏰`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Watch Later is YouTube's built-in list for videos you want to watch but do not have time for right now. It is like a personal queue — save something with one tap and come back to it tonight, tomorrow, or next weekend.

Watch Later is automatically in every YouTube account. You do not need to create it — it is always there under your Library tab. Everything you save to Watch Later is private — only you can see the list.

The Watch Later list syncs across all your devices. Save a video on your phone and you can watch it on your computer or TV later.

Watch Later is different from "Liked videos." Liking a video (thumbs up) saves it to your Liked Videos playlist as a public appreciation. Watch Later is strictly a personal, private viewing queue that you can clear without any public impact.

You can add any video to Watch Later — whether you found it in search results, on the YouTube home page, or on a channel you follow. The clock icon or Save option appears on every video.`,
    steps: [
      {
        title: `Add a Video to Watch Later`,
        content: `On the YouTube mobile app: find a video in search or on the home feed. Tap the three-dot menu (⋮) next to the video thumbnail. Tap "Save to Watch later." The video is added instantly. On desktop: hover over the video thumbnail and click the clock icon that appears, or click the three-dot menu → "Save to Watch Later."`,
        tip: `Quick Tip: You can also save a video while it is playing — tap the three-dot menu in the video player or on the video's page below the player.`,
      },
      {
        title: `Find Your Watch Later List`,
        content: `On the mobile app, tap the Library icon at the bottom of the screen. "Watch later" appears near the top of your Library. Tap it to see your full list of saved videos with thumbnails and titles.`,
      },
      {
        title: `Watch Your Saved Videos`,
        content: `In the Watch Later list, tap any video to start watching it. After it finishes, YouTube automatically plays the next video in the list. You can watch the whole list in order, or jump to a specific video by tapping it.`,
      },
      {
        title: `Remove Videos You Have Watched`,
        content: `To remove a video from Watch Later: find it in the list and tap the three-dot menu (⋮) next to it. Choose "Remove from Watch Later." Or, while watching a video from the list, tap the three-dot menu on the video → "Remove from Watch Later." Keep the list fresh by clearing watched videos as you go.`,
      },
      {
        title: `Save Entire Playlists to Watch Later`,
        content: `You can save a whole YouTube playlist to Watch Later — great for saving an entire documentary series or a course. On the playlist page, tap the three-dot menu (⋮) next to the playlist → "Save to Watch Later." All videos in that playlist are added to your queue at once.`,
      },
    ],
  },
  {
    slug: `youtube-offline-premium-downloads`,
    title: `How to Download YouTube Videos for Offline Viewing`,
    excerpt: `YouTube Premium lets you download videos and playlists to watch without an internet connection — great for airplane trips, commutes, or anywhere with spotty Wi-Fi.`,
    category: `entertainment`,
    tags: [`youtube`, `offline`, `download`, `youtube premium`, `no internet`, `travel`],
    readTime: `4 min`,
    thumbnailEmoji: `⬇️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `YouTube Premium is a paid subscription ($13.99/month) that removes ads, lets videos play in the background while your phone screen is off, and — most usefully for travelers — lets you download videos to watch offline.

Downloaded videos are stored on your phone and can be watched without any internet connection for up to 30 days. This is perfect for long flights, road trips, camping, or anywhere with unreliable Wi-Fi.

You can download individual videos, entire playlists, or automatically download your subscriptions. Storage quality settings let you choose between lower quality (smaller files, more videos fit) and higher quality (clearer picture, uses more storage).

If you do not have YouTube Premium, you can still access some limited offline functionality through YouTube's mobile app in certain regions, but full offline downloads require a Premium subscription.

For Premium subscribers, downloads work on up to 3 devices at once. Your downloaded content stays available as long as you remain a subscriber. If your subscription lapses, downloads become unavailable but are not deleted — renew the subscription and they are accessible again.`,
    steps: [
      {
        title: `Confirm You Have YouTube Premium`,
        content: `Open YouTube. Tap your profile photo (top right). If you see "YouTube Premium" in the menu, you are a subscriber. If not, you can sign up at youtube.com/premium — a free month trial is usually available for new subscribers.`,
      },
      {
        title: `Download a Single Video`,
        content: `Find a video you want to download. Below the video (on the video page), tap the Download button — it looks like an arrow pointing down with a line under it. Choose your quality: Low (smallest file), Medium, or High (largest file, best picture). Tap your choice and the download starts.`,
        tip: `Quick Tip: Use "Medium" quality for most videos — it balances file size and picture quality well. Use "Low" if your phone storage is running low.`,
      },
      {
        title: `Download an Entire Playlist`,
        content: `Open the playlist page on YouTube. Tap the Download button (down arrow) near the top of the playlist, next to the shuffle and play buttons. All videos in the playlist download at your chosen quality. This is efficient for downloading a whole season of a show at once.`,
      },
      {
        title: `Find and Watch Your Downloads`,
        content: `Tap the Library icon at the bottom of the YouTube app. Tap "Downloads." All your downloaded videos appear here. Tap any video to play it. No internet required — they play from your phone's storage.`,
      },
      {
        title: `Manage Storage`,
        content: `Downloaded videos take up phone storage. To check and manage: go to Library → Downloads → Settings (gear icon). You can see how much storage is used and delete individual downloads you have finished watching. To delete a download: find the video, tap the three-dot menu (⋮) → "Delete download."`,
        warning: `Downloads expire after 30 days and must be renewed if your device has not connected to the internet in that time. YouTube checks your subscription status periodically.`,
      },
    ],
  },
  {
    slug: `apple-id-trusted-devices-guide`,
    title: `How to Manage Trusted Devices on Your Apple ID`,
    excerpt: `Your Apple ID tracks which devices are linked to your account. Learn how to see all connected devices, sign out of ones you no longer use, and remove old phones and computers.`,
    category: `safety-guides`,
    tags: [`apple id`, `trusted devices`, `security`, `iphone`, `icloud`, `account`],
    readTime: `4 min`,
    thumbnailEmoji: `🔐`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Every Apple device you sign into with your Apple ID — iPhones, iPads, Macs, Apple Watches, and Apple TVs — gets added to your trusted devices list. This list is used for two-factor authentication (the six-digit codes Apple sends when you sign in) and for iCloud services.

Over time, this list can pile up with old phones, tablets, or computers that you no longer own. An old iPhone you sold two years ago might still be linked to your account if you did not remove it. This is a security concern — those devices could potentially receive two-factor authentication codes.

Reviewing and cleaning up your trusted devices list is a good security practice, especially after selling or giving away an Apple device.

Removing a device from your Apple ID does not erase the device — it just unlinks it from your account. The person who has that device cannot access your iCloud data after removal. (You should have erased the device before selling it anyway — see our separate guide on erasing before selling.)

You can manage your trusted devices from any iPhone, iPad, Mac, or from appleid.apple.com on any web browser.`,
    steps: [
      {
        title: `See All Devices Linked to Your Apple ID`,
        content: `On your iPhone, go to Settings and tap your name at the top. Scroll down past the iCloud, Media & Purchases, and Find My sections. You will see a list of all devices signed into your Apple ID — each one shows its name, device type, and model.`,
      },
      {
        title: `View Device Details`,
        content: `Tap any device name to see more information: the model, iOS version, serial number, and whether it is trusted for two-factor authentication. This helps you identify which devices you actually use versus old devices you no longer have.`,
      },
      {
        title: `Remove an Old or Unrecognized Device`,
        content: `Tap the device you want to remove. Scroll to the bottom and tap "Remove from Account." A confirmation dialog warns you that the device will no longer be trusted for two-factor authentication. Tap "Remove" to confirm. The device is unlinked from your Apple ID immediately.`,
        warning: `If you see a device you do not recognize, remove it immediately. An unrecognized device could indicate someone else has access to your Apple ID — consider also changing your Apple ID password.`,
      },
      {
        title: `Remove Devices via Apple ID Website`,
        content: `On any computer or phone, go to appleid.apple.com and sign in. Click "Devices" to see the full list. Click any device, then click "Remove from account." This is useful if you do not have your iPhone handy.`,
        tip: `Quick Tip: Do this regularly — once a year is a good habit. Review the list of devices and remove anything you no longer own or recognize.`,
      },
    ],
  },
  {
    slug: `google-chrome-password-checkup-guide`,
    title: `How to Use Chrome's Password Checkup to Find Weak or Stolen Passwords`,
    excerpt: `Google Chrome has a built-in password checkup that scans your saved passwords for breaches, weak passwords, and reused passwords — and helps you fix them.`,
    category: `safety-guides`,
    tags: [`chrome`, `passwords`, `security`, `data breach`, `password checkup`, `google`],
    readTime: `4 min`,
    thumbnailEmoji: `🔒`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you save passwords in Google Chrome, the browser keeps a secret eye on them for you. Chrome's Password Checkup feature automatically checks your saved passwords against databases of known data breaches — if one of your passwords was exposed in a hack of a website, Chrome alerts you so you can change it.

The checkup also flags passwords that are too weak (short, common, or easily guessed) and passwords you reuse across multiple sites (a significant security risk because if one account gets hacked, all accounts with that password are vulnerable).

Password Checkup is free and built into Chrome — no extension or subscription needed. It works on computers, Android, and iPhone versions of Chrome.

Running a password checkup takes less than a minute and can reveal serious vulnerabilities you did not know about. It is one of the most useful and underused security tools available to everyday users.

After running the checkup, Chrome gives you direct links to the affected websites so you can go change your password immediately. You do not need to search for the site or remember the URL.`,
    steps: [
      {
        title: `Open Chrome's Password Manager`,
        content: `Open Google Chrome on your computer or phone. Click the three-dot menu (⋮) in the top right corner. Click "Settings." In the left sidebar, click "Autofill and passwords" → "Google Password Manager." On mobile, tap Settings → Password Manager.`,
      },
      {
        title: `Run the Password Checkup`,
        content: `In the Password Manager, look for "Check passwords" or a Checkup section. Click "Check passwords." Chrome checks all your saved passwords against breach databases. This takes about 10–20 seconds.`,
        tip: `Quick Tip: You may need to re-enter your Google account password to run the checkup. This is for security — it confirms it is really you.`,
      },
      {
        title: `Review the Results`,
        content: `The checkup shows three categories: Compromised (found in a data breach — fix these immediately), Weak (easy to guess — update when you can), and Reused (used across multiple sites — create unique passwords for important accounts). The most urgent ones appear at the top.`,
      },
      {
        title: `Fix Compromised Passwords First`,
        content: `Click any compromised password. Chrome shows which website it is for and gives you a "Change password" button that takes you directly to that site's password settings. Change the password to something strong and unique (a random mix of letters, numbers, and symbols). Let Chrome save the new password when prompted.`,
        warning: `If a password is listed as compromised, assume the account was potentially accessed by someone else. Change the password and check the account for any suspicious activity (like unknown purchases or setting changes).`,
      },
      {
        title: `Use Strong Suggested Passwords`,
        content: `When changing a password, Chrome offers to suggest a strong, randomly generated password — click "Use suggested password." Chrome saves it automatically so you never need to remember it. This is the most secure approach, especially for accounts you do not use every day.`,
      },
    ],
  },
  {
    slug: `android-voicemail-setup-guide`,
    title: `How to Set Up and Check Voicemail on an Android Phone`,
    excerpt: `Setting up voicemail on Android lets callers leave you messages when you miss a call. Learn how to record a greeting, check messages, and use Visual Voicemail.`,
    category: `phone-guides`,
    tags: [`android`, `voicemail`, `phone`, `greeting`, `visual voicemail`, `missed calls`],
    readTime: `4 min`,
    thumbnailEmoji: `📞`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Voicemail lets people leave you a recorded message when you miss a phone call. Setting it up on Android is a quick process, but the exact steps vary slightly depending on your carrier (Verizon, AT&T, T-Mobile, etc.).

Most Android phones support Visual Voicemail — a feature that shows your voicemail messages as a list on screen, like an email inbox, so you can tap any message to listen to it without calling in. Visual Voicemail is more convenient than the traditional method of dialing a number and using a dial pad.

To set up voicemail for the first time, you typically call your voicemail system (by pressing and holding the 1 key on your dial pad) and follow the recorded instructions to create a PIN and record a personal greeting.

If your phone supports Visual Voicemail, it is usually already configured by your carrier. Open the Phone app and look for a Voicemail tab or icon.

Some carriers charge a small monthly fee for Visual Voicemail; others include it free with your plan. Check your plan details if you are unsure.`,
    steps: [
      {
        title: `Access Voicemail Setup`,
        content: `Open the Phone app on your Android phone. Tap the three-dot menu (⋮) or the dial pad icon. Look for "Settings" → "Voicemail." Or on the dial pad, press and hold the "1" key — this auto-dials your voicemail system. Follow the prompts to set up your mailbox.`,
        tip: `Quick Tip: First-time setup usually requires creating a PIN (choose a 4–6 digit code) and recording a personal greeting. Your greeting is what callers hear when you miss their call.`,
      },
      {
        title: `Record Your Greeting`,
        content: `When prompted by the voicemail system, choose to record a personal greeting. Press the appropriate number (usually 1 or 2 as instructed), wait for the tone, and speak clearly: "Hi, you've reached [your name]. Please leave your name, number, and message and I'll call you back as soon as I can." Press # or the key indicated to finish recording. Listen and re-record if needed.`,
      },
      {
        title: `Check Voicemail Using Visual Voicemail`,
        content: `Open the Phone app. Look for a "Voicemail" tab at the bottom or a voicemail icon in the recent calls list. If Visual Voicemail is available, you see a list of messages with caller name or number, date, and duration. Tap any message to listen. Swipe to delete.`,
      },
      {
        title: `Check Voicemail the Traditional Way`,
        content: `If your phone does not show Visual Voicemail, press and hold the "1" key on the dial pad to call your carrier's voicemail line. Enter your PIN when asked. Follow the voice prompts: press 1 to listen to new messages, then follow instructions to save, delete, or replay. Press 7 to delete, 9 to save.`,
      },
      {
        title: `Turn on Voicemail Notifications`,
        content: `Go to Settings → Apps → Phone → Notifications. Make sure notifications are turned on. This sends you a notification on your home screen when a new voicemail arrives, so you never miss a message. Most carriers also send a brief text message when someone leaves a voicemail.`,
        warning: `If you are not receiving voicemail notifications, check with your carrier — some carriers require a separate activation step or charge for visual voicemail. Customer service can usually activate it in a few minutes.`,
      },
    ],
  },
  {
    slug: `apple-maps-offline-guide`,
    title: `How to Save Apple Maps Offline So You Have Directions Without Cell Service`,
    excerpt: `Apple Maps lets you download a map of any area to use without an internet connection. Perfect for travel, camping, or anywhere with no cell service.`,
    category: `phone-guides`,
    tags: [`apple maps`, `offline maps`, `no cell service`, `travel`, `iphone`, `navigation`],
    readTime: `4 min`,
    thumbnailEmoji: `🗺️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Apple Maps has a feature that lets you download a portion of a map to your iPhone so you can use it for navigation even when you have no cell service or Wi-Fi. This is essential for road trips through rural areas, camping, hiking, international travel (where roaming data is expensive), or anywhere you expect to lose signal.

Offline maps for Apple Maps were added in iOS 17 (released fall 2023), so you need an iPhone running iOS 17 or later. Go to Settings → General → About to check your iOS version.

Downloaded maps include roads, place names, points of interest, and turn-by-turn navigation — everything you need for directions even without a connection. The map does not include live traffic updates (that requires internet) but static routing works fine offline.

You choose the area to download — a city, a region, a national park, or wherever you are heading. Larger areas use more storage space. A downloaded map of a city might use 150–400 MB; a larger region could be 1–2 GB.

Offline maps expire after 30 days if you have not updated them. Apple Maps automatically updates them when you have Wi-Fi, so they stay fresh without effort.`,
    steps: [
      {
        title: `Make Sure You Have iOS 17 or Later`,
        content: `Go to Settings → General → About. Find the "iOS Version" line. The number should start with 17 or higher. If not, go to Settings → General → Software Update and install the latest iOS update to get this feature.`,
      },
      {
        title: `Open Apple Maps and Go to Your Account`,
        content: `Open the Maps app on your iPhone. Tap your profile photo or initials in the top right corner. A menu appears. Scroll down and look for "Offline Maps." Tap it.`,
      },
      {
        title: `Download Your Map Area`,
        content: `Tap "Download New Map." A map view appears — pinch and zoom to navigate to the area you want to download. You see a rectangle showing the download area. Adjust the rectangle by zooming the map in or out. When you have the right area selected, tap "Download." Apple Maps shows you the estimated file size before downloading.`,
        tip: `Quick Tip: Download a bit more area than you think you need — include roads leading in and out of your destination so you have coverage even if your route changes.`,
      },
      {
        title: `Use the Offline Map While Traveling`,
        content: `When you are in an area without cell service, Apple Maps automatically uses your downloaded offline map. Search for addresses or get directions the same way you normally would. The only difference is live traffic data does not update. Your phone's GPS still works without cell service — it just uses satellite positioning instead.`,
      },
      {
        title: `Manage and Delete Downloaded Maps`,
        content: `To check, update, or delete downloaded maps: go to Maps profile → Offline Maps. You see all your downloaded maps with their file sizes and last update dates. Tap a map to rename it or delete it. Tap "Update" to manually refresh with the latest data. Maps auto-update when you are on Wi-Fi if "Auto-Update" is turned on.`,
        warning: `GPS-based navigation works offline but Apple Maps cannot show real-time traffic, transit schedules, or business hours without an internet connection. Check those details before heading out.`,
      },
    ],
  },
  {
    slug: `iphone-low-power-mode-guide`,
    title: `How iPhone Low Power Mode Works and When to Use It`,
    excerpt: `Low Power Mode stretches your iPhone's remaining battery life when you are running low. Here is exactly what it turns off, what it keeps working, and how to turn it on.`,
    category: `phone-guides`,
    tags: [`iphone`, `battery`, `low power mode`, `battery life`, `ios`, `tips`],
    readTime: `4 min`,
    thumbnailEmoji: `🔋`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Low Power Mode is an iPhone setting that reduces background activity and visual effects to extend battery life when you are running low on charge. When your iPhone battery drops to 20%, a notification asks if you want to turn it on. You can also turn it on manually at any time — even at 80% battery — to make your charge last longer through a long day.

When Low Power Mode is active, the battery icon in the top-right corner turns yellow instead of white or green. This is your visual reminder that the mode is on.

What does it actually do? Low Power Mode reduces screen brightness slightly, turns off automatic mail fetching (so email is not checked in the background), pauses iCloud Photo Library syncing, reduces background app refresh, limits some visual effects, and caps CPU performance slightly to reduce heat and power consumption.

What keeps working normally? Phone calls, text messages, internet browsing, music, navigation, and all the essential things you need when you are out and about.

Low Power Mode turns off automatically once you charge your phone back to 80% or higher. You do not need to remember to turn it off.`,
    steps: [
      {
        title: `Turn On Low Power Mode Manually`,
        content: `Go to Settings → Battery → Low Power Mode and toggle it on. The battery icon in the status bar turns yellow to confirm. You can also ask Siri: "Hey Siri, turn on Low Power Mode."`,
        tip: `Quick Tip: Add a Low Power Mode button to your Control Center for one-tap access. Go to Settings → Control Center → tap the + next to "Low Power Mode." Then swipe down from the top right of your screen to access it anytime.`,
      },
      {
        title: `What Turns Off in Low Power Mode`,
        content: `Background app refresh pauses (apps do not update in the background), iCloud Photos stops syncing new uploads, some visual animations are reduced, and your iPhone screen dims more quickly. Mail does not fetch new messages automatically — you must open the Mail app to check.`,
      },
      {
        title: `What Stays Working Normally`,
        content: `Phone calls, FaceTime, text messages (iMessage and SMS), Safari browsing, Apple Maps, music playback, and most apps you actively use all work normally in Low Power Mode. The main changes are background processes — things happening when you are not actively using the phone.`,
      },
      {
        title: `When to Use It Proactively`,
        content: `You do not have to wait until your battery is low. Turn on Low Power Mode at the start of a long day out, before a flight, or any time you know you will not have access to a charger for hours. Turning it on at 70% battery can add 2–4 extra hours of use depending on how heavily you use the phone.`,
      },
      {
        title: `Low Power Mode Turns Off Automatically`,
        content: `Once your iPhone charges back to 80%, Low Power Mode turns itself off automatically. Your battery icon returns to green or white. All background processes resume normally. You do not need to do anything.`,
        warning: `If you use Low Power Mode constantly (even when battery is high) over long periods, you may notice some apps feel slightly less responsive or miss background notifications. Use it situationally for best results.`,
      },
    ],
  },
  {
    slug: `android-battery-saver-guide`,
    title: `How to Use Battery Saver Mode on Android to Extend Battery Life`,
    excerpt: `Android's Battery Saver mode reduces background activity when you are running low on battery. Learn how to turn it on, what it affects, and how to schedule it automatically.`,
    category: `phone-guides`,
    tags: [`android`, `battery saver`, `battery life`, `power saving`, `tips`],
    readTime: `4 min`,
    thumbnailEmoji: `🔋`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Android's Battery Saver mode works similarly to iPhone's Low Power Mode — it reduces background activity, limits some features, and slows down certain processes to stretch your battery through a long day.

When Battery Saver is on, Android reduces or pauses: background app syncing, location services for apps not in use, some visual animations and effects, automatic email checking, and some performance-intensive processes. The phone's screen may also dim slightly more aggressively.

Apps you actively use keep working. You can still make calls, send texts, browse the web, and use any app normally — Battery Saver mostly affects what happens behind the scenes.

Battery Saver can be turned on manually at any time, or set to turn on automatically when battery drops to a level you choose (commonly 15–20%). This automatic option is useful so you never get caught off guard with a dying phone.

Different Android phone brands call this feature slightly different things. Samsung calls it "Power saving mode." Pixel phones call it "Battery Saver." Other brands may say "Ultra Power Saving" or "Power Conservation." The concept is the same on all of them.`,
    steps: [
      {
        title: `Turn On Battery Saver Manually`,
        content: `Swipe down from the top of your Android screen to open the Quick Settings panel. Look for a "Battery Saver" or "Power saving" tile. Tap it to toggle Battery Saver on. The tile turns yellow or orange and a color change appears in the status bar. Alternatively, go to Settings → Battery → Battery Saver → Turn on now.`,
      },
      {
        title: `Set Battery Saver to Turn On Automatically`,
        content: `Go to Settings → Battery → Battery Saver (or Power saving). Look for "Set a schedule" or "Automatic." Choose "Based on percentage." Set the trigger percentage — 15–20% is typical. Now Battery Saver activates on its own whenever your battery drops to that level without any action from you.`,
        tip: `Quick Tip: On Samsung phones, look in Settings → Battery and device care → Battery → Power saving → Turn on automatically. You can set it to activate at 15% or 20%.`,
      },
      {
        title: `Understand What Changes`,
        content: `In Battery Saver mode, the background of your phone may switch to a dark theme or the status bar may change color. Background sync slows down, push notifications may be slightly delayed, and your phone's performance is gently reduced. You will not notice slowdowns during normal use, but demanding games may run at reduced frame rates.`,
      },
      {
        title: `Use Extreme Battery Saver for Emergencies`,
        content: `Some Android phones (especially Pixel phones and newer Samsungs) have an "Extreme Battery Saver" or "Ultra Power Saving Mode." This is more aggressive — it limits you to a small set of approved apps and turns off Wi-Fi and Bluetooth when not actively in use. Use this only when you truly need to make your battery last as long as possible (like getting through 8 more hours on 5% battery).`,
        warning: `Extreme Battery Saver can prevent some apps from receiving calls or notifications. Let people know if you are in this mode and they cannot reach you easily.`,
      },
      {
        title: `Turn Off Battery Saver`,
        content: `Battery Saver turns off automatically once you plug in and charge your phone to about 90% or higher. You can also turn it off manually by tapping the Battery Saver tile in Quick Settings again, or going to Settings → Battery → Battery Saver → Turn off.`,
      },
    ],
  },
  {
    slug: `safari-reader-mode-guide`,
    title: `How to Use Safari Reader Mode for Easier Web Browsing`,
    excerpt: `Safari's Reader Mode strips away ads, pop-ups, and distractions from any article, leaving just the text and images. Great for news, recipes, or anything with a cluttered design.`,
    category: `tips-tricks`,
    tags: [`safari`, `reader mode`, `iphone`, `ipad`, `mac`, `accessibility`, `reading`],
    readTime: `4 min`,
    thumbnailEmoji: `📰`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Many websites are so cluttered with ads, pop-ups, cookie notices, and sidebars that reading an actual article feels like an obstacle course. Safari's Reader Mode solves this in one tap — it strips everything away and shows you just the article text and images in a clean, calm layout.

Reader Mode works on iPhone, iPad, and Mac — any device that uses Safari as a browser. It is built right in and does not cost anything extra.

When you turn on Reader Mode, you can also adjust the text size (make it bigger for easier reading), change the font to one you prefer, and switch to a dark background to reduce eye strain in the evening.

Reader Mode does not work on every page — it only activates when Safari detects that the page contains a main article or long text content. For pages that are mostly navigation, videos, or shopping, the Reader Mode button will not appear.

You can set Safari to automatically use Reader Mode on all pages of a specific website — great for news sites you visit regularly that have particularly aggressive ads.`,
    steps: [
      {
        title: `Open Reader Mode on iPhone or iPad`,
        content: `Navigate to an article in Safari. Look at the address bar at the top of the screen. On the left side, you may see a small paragraph icon (four stacked horizontal lines) or the text "AA." Tap it. If a Reader Mode option appears, tap "Show Reader." The page instantly transforms into a clean reading view.`,
        tip: `Quick Tip: If you do not see the Reader icon, the page may not have a detectable article. Try it on news articles, blog posts, or recipe pages — those work best.`,
      },
      {
        title: `Open Reader Mode on Mac`,
        content: `In Safari on your Mac, navigate to any article. Look in the address bar for the Reader icon (stacked lines icon on the left). Click it. Or use the keyboard shortcut Shift + Command + R. The page reformats to a clean reading layout in the main window.`,
      },
      {
        title: `Change Text Size and Font`,
        content: `In Reader Mode, tap the "AA" button (iPhone/iPad) or click "AA" in the address bar (Mac). A panel shows text size sliders — tap the large A to increase text size, the small A to decrease it. Below that, choose a different font: Athelas, Charter, Georgia, Palatino, San Francisco, or Seravek. Pick whichever you find most readable.`,
      },
      {
        title: `Switch to a Dark or Sepia Background`,
        content: `In the same "AA" panel, you see four background color options: white, beige/sepia, gray, and dark/black. Tap the dark option to switch to a dark background with light text — much easier on the eyes in low light or at night. The sepia (cream) background is also gentle on the eyes for long reading sessions.`,
      },
      {
        title: `Set Automatic Reader Mode for a Website`,
        content: `If a website always loads with too many ads, you can make Safari always open it in Reader Mode. In Reader Mode, tap "AA" and look for "Website Settings" or "Reader Mode for Website." Toggle on "Use Reader Automatically." From now on, whenever you visit that site, Safari automatically activates Reader Mode without you needing to tap anything.`,
      },
    ],
  },
  {
    slug: `samsung-quick-share-guide`,
    title: `How to Use Samsung Quick Share to Send Files Between Galaxy Devices`,
    excerpt: `Samsung Quick Share lets you send photos, videos, and documents to nearby Samsung phones and tablets in seconds — no cables, no apps, no internet needed.`,
    category: `phone-guides`,
    tags: [`samsung`, `quick share`, `galaxy`, `file sharing`, `nearby sharing`, `wireless`],
    readTime: `4 min`,
    thumbnailEmoji: `📡`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Samsung Quick Share is Samsung's built-in file-sharing tool for Galaxy phones and tablets. It works like Apple's AirDrop — you can send photos, videos, contacts, or any file to a nearby Samsung device wirelessly in seconds, without needing Wi-Fi, cellular data, or any cables.

Quick Share uses Bluetooth and Wi-Fi Direct to create a direct connection between two Samsung devices. Files transfer at fast speeds — a high-resolution photo takes about 2–3 seconds, a large video a bit longer.

Quick Share works between Galaxy phones, tablets, and some Galaxy laptops. Both sender and receiver need to have Quick Share enabled. You can set your device to be discoverable by "Contacts only," "Everyone," or "No one" (off).

Starting in late 2023, Samsung merged Quick Share with Google's Nearby Share to create a unified "Quick Share" that also works with non-Samsung Android phones and some Windows PCs, making it even more versatile.

Quick Share is great for transferring photos from one phone to another at a family gathering, sending a document to a colleague, or quickly moving files between your own devices.`,
    steps: [
      {
        title: `Enable Quick Share`,
        content: `Swipe down from the top of your Galaxy phone to open the Quick Settings panel. Look for the "Quick Share" button (it has a sharing/radar icon). Tap it to turn it on. Make sure Bluetooth and Wi-Fi are also turned on — Quick Share requires both.`,
        tip: `Quick Tip: If you do not see Quick Share in your Quick Settings panel, swipe left to see more tiles. You can also find it in Settings → Connected devices → Quick Share.`,
      },
      {
        title: `Set Who Can Find You`,
        content: `Tap and hold the Quick Share icon to open settings. Choose your visibility: "Contacts only" (only people in your contacts can see your device), "Everyone" (any nearby Samsung device can see you), or "Off." For privacy, "Contacts only" is the best everyday setting. Switch to "Everyone" temporarily when sharing with someone not in your contacts.`,
      },
      {
        title: `Send a Photo or File`,
        content: `Open the file you want to send — a photo in Gallery, a video, or any document. Tap the Share button (three connected dots or an arrow pointing up). In the share options, look for "Quick Share." Nearby devices with Quick Share enabled appear as icons. Tap the recipient's device name.`,
      },
      {
        title: `Accept the Transfer on the Receiving Device`,
        content: `The receiving Samsung phone or tablet shows a notification asking to accept the incoming file. Tap "Accept." The file transfers in seconds and saves to the device's Downloads folder or Gallery app, depending on the file type.`,
      },
      {
        title: `Share With Non-Samsung Android Phones`,
        content: `On newer Galaxy phones running Samsung One UI 6 or later, Quick Share can also send files to Android phones from other brands — not just Samsung. The receiving phone needs to have the Quick Share (formerly Nearby Share) app or have it built in. The process works the same way from the sender's side.`,
        warning: `Both devices must be within about 30 feet (10 meters) of each other for Quick Share to work. Bluetooth range limitations apply. If sharing fails, move closer together and try again.`,
      },
    ],
  },
  {
    slug: `enable-closed-captions-tv-guide`,
    title: `How to Turn On Closed Captions on Your TV`,
    excerpt: `Closed captions display dialogue and sound descriptions as text on screen. Here is how to turn them on for all major TV brands and streaming devices.`,
    category: `essential-skills`,
    tags: [`closed captions`, `subtitles`, `tv`, `accessibility`, `hearing`, `roku`, `smart tv`],
    readTime: `5 min`,
    thumbnailEmoji: `📺`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Closed captions display spoken dialogue and audio descriptions as text on screen. They are not just for people who are deaf or hard of hearing — millions of people use captions to follow along in noisy environments, to understand accents more clearly, to watch TV without disturbing others, or when learning English.

Turning on captions differs slightly depending on your TV brand or streaming device, but the process is straightforward on all of them. Most TVs have a dedicated caption setting in their accessibility menu.

Closed captions (CC) show dialogue typed in real time. They may also describe background sounds like [crowd cheering] or [phone ringing] that provide context. Subtitles, by contrast, usually just show dialogue and are meant for people who can hear but need translation.

You can also turn on captions within individual streaming apps (Netflix, Hulu, Disney+, etc.) using the settings inside the app — which gives you more control over text size and style.

If you always want captions on, set them at the TV level — that way they apply to everything, including live TV, streaming apps, and DVDs.`,
    steps: [
      {
        title: `Samsung Smart TV`,
        content: `Press the Home button on your remote. Go to Settings (gear icon) → Accessibility → Caption Settings. Toggle "Caption" to on. You can also adjust caption size, style, and background color here. On older Samsung remotes, press Menu → System → Accessibility → Caption.`,
      },
      {
        title: `LG Smart TV (webOS)`,
        content: `Press the Settings button (gear) on your remote. Go to Accessibility → Subtitles or Caption. Toggle captions on. You can customize the caption language and appearance under the same menu. On the Magic Remote, you can say "Subtitles" to open the setting directly.`,
      },
      {
        title: `Roku Streaming Device or Roku TV`,
        content: `Press the * (star) button on the Roku remote while watching any show. Select "Accessibility" or "Closed Captioning." Choose "On." You can also go to Home → Settings → Accessibility → Captions Mode and choose "On" or "Always On" to make it permanent across all channels.`,
        tip: `Quick Tip: On Roku, some streaming apps (like Netflix) have their own caption settings inside the app that override the device setting. Check both the Roku settings and the individual app settings.`,
      },
      {
        title: `Fire TV Stick (Amazon)`,
        content: `From the Fire TV home screen, go to Settings → Accessibility → Closed Captions. Toggle captions on. You can adjust text size and appearance under "Caption Preferences." While watching a show, you can also press the Down button on the remote and select the CC icon.`,
      },
      {
        title: `Apple TV`,
        content: `Go to Settings → Accessibility → Subtitles and Captioning. Toggle "Closed Captions + SDH" to on. You can customize caption style here. While watching, triple-click the TV button on your Siri remote to toggle captions on or off quickly.`,
        tip: `Quick Tip: For Netflix, Hulu, Disney+, or any streaming app, you can usually find caption settings by pressing the down button on your remote while watching, or by tapping the speech bubble icon in the app's video player.`,
      },
    ],
  },
  {
    slug: `iphone-emergency-bypass-contact`,
    title: `How to Set a Contact to Ring Through Do Not Disturb on iPhone`,
    excerpt: `Emergency Bypass lets calls and texts from specific people ring even when Do Not Disturb is on. Set it up for family members so they can always reach you in a real emergency.`,
    category: `phone-guides`,
    tags: [`iphone`, `do not disturb`, `emergency bypass`, `contacts`, `notifications`, `focus`],
    readTime: `4 min`,
    thumbnailEmoji: `🚨`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Do Not Disturb (and the newer Focus modes) on iPhone silences calls, texts, and notifications so you can sleep, concentrate, or have uninterrupted time. But what if your adult child, spouse, or doctor needs to reach you urgently?

Emergency Bypass is the solution. It is a setting you apply to specific contacts in your address book. When Emergency Bypass is on for a contact, their calls and text message alerts ring through at full volume even when Do Not Disturb or any Focus mode is active — no matter what.

This is different from the general Do Not Disturb setting that allows "Repeated Calls" (where someone who calls twice in three minutes gets through). Emergency Bypass is contact-specific: only the people you designate can always reach you.

You set Emergency Bypass inside the contact's card in the Contacts app. You can set it separately for calls (so their phone calls always ring) and for text message tones (so their texts always make a sound).

This is an especially valuable setting for seniors whose children want to be reachable at all times, for caregivers, or for anyone who uses Do Not Disturb regularly but cannot afford to miss urgent contacts.`,
    steps: [
      {
        title: `Open the Contact You Want to Set Up`,
        content: `Open the Phone app or Contacts app on your iPhone. Find the person you want to be able to reach you in any mode — a family member, doctor, or close friend. Tap their name to open their contact card. Tap "Edit" in the top right corner.`,
      },
      {
        title: `Set Emergency Bypass for Calls`,
        content: `In the contact's edit view, scroll down and tap "Ringtone." Near the top of the ringtone settings, you will see "Emergency Bypass" with a toggle. Turn it on (green). This makes their calls ring through even when Do Not Disturb is on. Tap "Done" to save the ringtone settings.`,
        tip: `Quick Tip: While you are in the Ringtone setting, this is also a good time to assign a distinctive ringtone to important contacts so you instantly know who is calling without looking at your phone.`,
      },
      {
        title: `Set Emergency Bypass for Text Messages`,
        content: `Still in the contact's edit view, scroll to "Text Tone." Tap it. Near the top, toggle on "Emergency Bypass." Now their text messages will make a sound even when Do Not Disturb is active. Tap "Done." Tap "Done" again to save the whole contact.`,
      },
      {
        title: `Confirm the Setting`,
        content: `Open the contact card again (without editing). Scroll down to the Ringtone and Text Tone sections. If Emergency Bypass is on for either, it shows "Emergency Bypass" below the tone name. This confirms the setting is active.`,
      },
      {
        title: `Test That It Works`,
        content: `Enable Do Not Disturb on your iPhone (swipe down from the top right → tap the crescent moon icon). Ask the person you just set up to call or text you. Their call should ring at full volume and their text should make a sound, while all other calls and messages stay silent. Turn off Do Not Disturb when done testing.`,
        warning: `Emergency Bypass only works for the contact's saved phone number. If they call from a different number (like a work phone or hospital phone), the bypass will not apply — their unknown number will still be silenced.`,
      },
    ],
  },
];
