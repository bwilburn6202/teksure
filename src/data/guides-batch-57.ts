import type { Guide } from './guides';

export const guidesBatch57: Guide[] = [
  {
    slug: `screen-record-iphone-guide`,
    title: `How to Record Your iPhone Screen and Save It as a Video`,
    excerpt: `Use the built-in screen recording feature on your iPhone to capture anything happening on your screen as a video you can save or share.`,
    category: `phone-guides`,
    tags: [`screen recording`, `iphone`, `ios`, `video`, `control center`, `screen capture`],
    readTime: `5 min`,
    thumbnailEmoji: `📹`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your iPhone can record everything happening on your screen as a video — no extra app needed. This is useful when you want to show someone how to do something on a phone, save a video call moment, capture a game clip, or save a social media video that does not have a download button.

The feature is called Screen Recording. It is built into every iPhone running iOS 11 or later, and it saves the video directly to your Photos app when you stop recording.

Before you can use it, you need to add the Screen Recording button to your Control Center — the panel of quick-settings buttons you swipe down from the top-right corner of your screen. You only have to do this setup one time.

When you start a screen recording, your iPhone records everything: the screen, any sounds coming from the phone, and optionally your own voice through the microphone. This means if you are recording a tutorial or explanation, you can talk out loud while you record and your voice will be included.

The recording continues even if you switch between apps, which is helpful if you are showing someone a multi-step process. A red bar appears at the top of your screen the entire time you are recording so you always know it is on.

Screen recordings can get large in file size if they are long, so consider keeping recordings under a few minutes when possible. You can trim the video in your Photos app afterward if you want to shorten it before sharing.`,
    steps: [
      {
        title: `Add Screen Recording to Control Center`,
        content: `Open the Settings app and tap Control Center. Scroll down to find "Screen Recording" in the list of available controls. Tap the green plus sign (+) next to it. This adds the Screen Recording button to your Control Center. You only need to do this step once.`,
        tip: `If you already see a Screen Recording button when you open Control Center, you can skip this step — it is already set up.`,
      },
      {
        title: `Open Control Center`,
        content: `Swipe down from the top-right corner of your iPhone screen (on iPhones with Face ID) or swipe up from the bottom of the screen (on older iPhones with a Home button). The Control Center panel will appear with a grid of buttons.`,
      },
      {
        title: `Start the recording`,
        content: `Tap the Screen Recording button — it looks like a solid circle inside a larger circle. A countdown of three seconds will appear, giving you time to navigate to whatever you want to record. After three seconds, the recording begins and a red status bar appears at the top of your screen.`,
        tip: `To record your voice along with the screen, press and hold the Screen Recording button and tap the microphone icon to turn it on before starting.`,
      },
      {
        title: `Record what you need`,
        content: `Navigate to the apps, screens, or content you want to capture. Everything visible on your screen is being recorded. You can switch apps, scroll, type, and tap normally — all of it will appear in the video.`,
        warning: `Anything on your screen will be recorded, including notifications that pop up. Consider turning on Do Not Disturb before recording to avoid personal notifications appearing in the video.`,
      },
      {
        title: `Stop the recording and find your video`,
        content: `To stop recording, tap the red status bar at the top of the screen and then tap Stop. Or swipe down to open Control Center and tap the Screen Recording button again. A notification will appear telling you the recording has been saved to your Photos app. Open Photos and look in the Recents album to find your video.`,
      },
    ],
  },
  {
    slug: `share-wifi-password-guide`,
    title: `How to Share Your Home Wi-Fi Password with iPhone and Android Devices`,
    excerpt: `Share your Wi-Fi password with a guest's iPhone or Android phone without having to type it out or look it up — your phone can send it automatically.`,
    category: `how-to`,
    tags: [`wifi`, `wi-fi`, `password`, `share`, `iphone`, `android`, `network`, `guest`],
    readTime: `5 min`,
    thumbnailEmoji: `📶`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When a friend or family member visits and needs to connect to your Wi-Fi, you no longer have to dig up a long complicated password and read it out letter by letter. Both iPhones and Android phones have built-in ways to share a Wi-Fi password with a tap or a scan.

The easiest method for iPhone users: if you and your guest both have iPhones and each other saved as contacts, iOS will offer to share the password automatically when your guest tries to join your network. A small prompt appears on your phone asking if you want to share the password — tap Share Password and the guest's phone connects without either of you typing anything.

For Android phones, the built-in option is to generate a QR code (a square barcode) from your Wi-Fi settings. Your guest scans the QR code with their phone's camera and connects instantly — no password typing required.

You can also find your saved Wi-Fi password on both iPhones and Android phones to share it manually if needed. On iPhone (iOS 16 and later), you can view the password directly in Settings. On Android 10 and later, the QR code method is the primary way to share.

These methods work for your home network and any Wi-Fi network your phone has already joined and saved. You cannot share a password for a network you have never connected to.`,
    steps: [
      {
        title: `Share to another iPhone automatically (easiest method)`,
        content: `Make sure your iPhone is unlocked and connected to the Wi-Fi network. Ask your guest to go to Settings > Wi-Fi on their iPhone and tap your network name. A pop-up will appear on YOUR phone asking "Share Your Wi-Fi?" with the guest's name. Tap Share Password. Their phone connects without either of you seeing or typing the password.`,
        tip: `This automatic sharing only works if you have the guest saved as a contact in your phone, both phones have Bluetooth and Wi-Fi turned on, and both are running iOS 11 or later.`,
      },
      {
        title: `Share via QR code on Android`,
        content: `On your Android phone, go to Settings and tap Wi-Fi (or Connections > Wi-Fi). Tap the name of your current network, then look for a Share or QR Code button — it may show a QR code icon. Tap it to display the QR code. Your guest opens their camera app, points it at the QR code on your screen, and taps the notification that appears. They connect instantly.`,
      },
      {
        title: `View your Wi-Fi password on iPhone (to share manually)`,
        content: `On iPhone running iOS 16 or later, go to Settings > Wi-Fi. Tap the network you are connected to. Tap Password — you may need to use Face ID or your passcode to confirm. The password appears on screen. You can read it out or copy and paste it.`,
      },
      {
        title: `View your Wi-Fi password on Android (to share manually)`,
        content: `On Android, go to Settings > Wi-Fi or Connections > Wi-Fi. Tap your connected network and look for a Share option. Most Android phones will show a QR code but also display the password as text below the QR code. You can read it out or copy it from there.`,
        warning: `Your Wi-Fi password unlocks access to your entire home network. Only share it with people you trust, and avoid reading it aloud in a public place.`,
      },
    ],
  },
  {
    slug: `ios-voice-control-guide`,
    title: `iPhone Voice Control: Control Your Phone Completely Hands-Free`,
    excerpt: `Use iPhone Voice Control to navigate your phone, open apps, tap buttons, and type text entirely with your voice — no touching required.`,
    category: `phone-guides`,
    tags: [`voice control`, `iphone`, `accessibility`, `hands-free`, `ios`, `spoken commands`, `disability`],
    readTime: `6 min`,
    thumbnailEmoji: `🎙️`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `Voice Control is an accessibility feature built into every iPhone running iOS 13 or later. It lets you control your entire phone using spoken commands — no touching the screen required. You can open apps, scroll, tap buttons, type messages, and navigate menus all by speaking.

This is different from Siri. Siri answers questions and performs specific tasks you ask for. Voice Control is about fully controlling every part of the phone interface — every button, every menu, every text field — using your voice. You can even see numbered labels appear on screen over every tappable item, and then say a number to tap that item.

Voice Control is particularly helpful for people with limited hand mobility, arthritis, injuries, or anyone who needs to use their phone while their hands are occupied. It works without an internet connection because all the voice processing happens on the phone itself.

Once you turn it on, the phone is always listening for commands and a small microphone icon appears at the top of the screen to show it is active. You can pause it by saying "Go to Sleep" and wake it again by saying "Wake Up."

Common commands include: "Open [app name]," "Tap [button name]," "Scroll down," "Go home," "Go back," "Swipe left," "Type [text you want to type]," and "Show numbers" to put numbered labels on everything you can tap.

There is a learning curve to voice control, but spending 10–15 minutes practicing the basic commands is enough to become comfortable with daily use.`,
    steps: [
      {
        title: `Turn on Voice Control`,
        content: `Go to Settings > Accessibility > Voice Control. Tap the toggle at the top to turn Voice Control on. The first time you turn it on, your iPhone may need to download a small file — make sure you are connected to Wi-Fi. Once it is ready, a microphone icon appears at the top of your screen.`,
        tip: `You can also add Voice Control to your Accessibility Shortcut — triple-clicking the side button then lets you turn it on or off quickly.`,
      },
      {
        title: `Learn the basic navigation commands`,
        content: `Say "Go home" to return to your home screen. Say "Open [app name]" to launch an app — for example, "Open Messages" or "Open Settings." Say "Go back" to return to the previous screen. Say "Scroll down" or "Scroll up" to move through a page. All commands work as soon as Voice Control is active.`,
      },
      {
        title: `Tap items on screen by name or number`,
        content: `If you can see the name of a button, say "Tap [button name]." For example, say "Tap Send" or "Tap Cancel." If you are not sure what something is called, say "Show numbers" — numbered labels appear on every tappable item. Then say the number to tap that item. Say "Hide numbers" when you are done.`,
        tip: `"Show grid" divides your screen into a numbered grid so you can tap any area of the screen, including areas that are not labeled buttons.`,
      },
      {
        title: `Type text with your voice`,
        content: `Tap into a text field (or say "Tap" and the field name) so the keyboard appears. Then say "Type [your message]." For example, say "Type Hello, how are you?" The words will appear in the text field. You can then say "Tap Send" to send the message.`,
      },
      {
        title: `Pause and resume Voice Control`,
        content: `If you need to speak without the phone treating your words as commands — for example, during a phone call — say "Go to Sleep." Voice Control pauses and the microphone icon dims. Say "Wake Up" to turn it back on. Or tap the microphone icon at the top of the screen to toggle it.`,
      },
    ],
  },
  {
    slug: `android-voice-access-guide`,
    title: `Android Voice Access: Control Your Android Phone Hands-Free by Speaking`,
    excerpt: `Voice Access lets you control every part of your Android phone using spoken commands — open apps, tap buttons, scroll, and type without touching the screen.`,
    category: `phone-guides`,
    tags: [`voice access`, `android`, `accessibility`, `hands-free`, `spoken commands`, `disability`, `google`],
    readTime: `6 min`,
    thumbnailEmoji: `🎤`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `Voice Access is a free app from Google that lets you control your entire Android phone using spoken commands. You can open apps, tap buttons, scroll through pages, and type text — all without touching the screen.

It works by labeling every button and interactive element on your screen with a number. You speak the number (or the label text) to interact with that item. For example, you might say "1" to tap the first item, or "Tap Messages" to open the Messages app.

Voice Access is especially useful for people who have difficulty using a touchscreen due to arthritis, tremors, an injury, or other conditions. It is also helpful when your hands are occupied and you need to do something on your phone.

Voice Access requires an internet connection for some features, though basic navigation works offline. The app is free and available in the Google Play Store, and on many Android phones it can be found in the Accessibility settings already.

Unlike Google Assistant (which answers questions), Voice Access controls the actual interface of your phone. Every menu, every text field, every button can be reached by speaking.

To get the most out of Voice Access, spend some time practicing with it when you are not in a hurry. The numbered labels system is the fastest way to tap exactly what you want, and the voice typing feature works well for short messages.`,
    steps: [
      {
        title: `Install or enable Voice Access`,
        content: `On most Android phones, go to Settings > Accessibility > Voice Access and toggle it on. If you do not see it there, open the Google Play Store, search for "Voice Access," and install the free app from Google. After installing, go back to Settings > Accessibility > Voice Access to enable it.`,
        tip: `On some phones, Voice Access appears under Settings > Accessibility > Installed Services or Downloaded Apps.`,
      },
      {
        title: `Turn Voice Access on and off quickly`,
        content: `Once enabled, you can activate Voice Access by saying "Hey Google, Voice Access" if Google Assistant is set up, or by tapping the Voice Access notification in your notification bar. Many phones let you add a Voice Access shortcut to your Accessibility menu — check Settings > Accessibility > Accessibility Button.`,
      },
      {
        title: `Navigate using numbered labels`,
        content: `When Voice Access is active, numbers appear next to every button and interactive item on your screen. Say the number of the item you want to tap. For example, say "3" to tap the item labeled 3. You can also say the name of an item — for example, "Tap Contacts" or "Open Settings."`,
        tip: `Say "Show labels" if the labels are not visible, and "Hide labels" to remove them from view.`,
      },
      {
        title: `Type text using your voice`,
        content: `Tap into a text field, or say "Tap [field name]." Once the cursor is in the field, say "Type [your text]." For example, say "Type Good morning" to enter those words. You can also say "Delete" to remove the last word, or "Clear field" to erase everything.`,
      },
      {
        title: `Use common navigation commands`,
        content: `Say "Go back" to go to the previous screen. Say "Go home" to return to the home screen. Say "Scroll down" or "Scroll up" to move through a page. Say "Open [app name]" to launch an app. Say "Stop listening" to pause Voice Access and resume normal use.`,
        warning: `Voice Access listens continuously while active. Pause it when having private conversations by saying "Stop listening" or tapping the Voice Access notification.`,
      },
    ],
  },
  {
    slug: `chromebook-basics-guide`,
    title: `Chromebook Basics for Beginners: What It Is, How It Works, and What You Can Do`,
    excerpt: `A plain-English introduction to Chromebooks — the affordable, beginner-friendly laptops built around the Chrome web browser and Google apps.`,
    category: `essential-skills`,
    tags: [`chromebook`, `chrome os`, `google`, `laptop`, `beginner`, `basics`, `computer`],
    readTime: `7 min`,
    thumbnailEmoji: `💻`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `A Chromebook is a type of laptop made by Google. Instead of running Windows (like most PCs) or macOS (like Apple computers), a Chromebook runs an operating system called Chrome OS. The biggest difference is that Chromebooks are designed to work primarily through the internet, using the Chrome web browser and Google's apps.

If you mostly browse the web, watch videos, check email, video chat, write documents, or shop online, a Chromebook can do all of those things well — and it does them at a lower price than most Windows laptops or Macs.

Chromebooks start up very quickly — usually in under 10 seconds — and they update themselves automatically in the background. You do not need to install antivirus software, and they are generally considered more secure than traditional computers because very little software runs directly on the machine.

The main limitation is that Chromebooks are not great for specialized software that runs on Windows, like some tax programs, certain photo or video editors, or games. For most everyday tasks, though, they work well.

A Google account (a Gmail address) is central to using a Chromebook. You sign in with your Google account when you first set up the device, and that links your bookmarks, email, documents, and settings to the device. If your Chromebook is lost or replaced, signing into a new one restores everything.

The Chrome Web Store provides apps and browser extensions. Many Android apps from the Google Play Store also work on newer Chromebooks, expanding what you can do well beyond web browsing.

Chromebooks are popular in schools and are often recommended for seniors and people who want a low-maintenance computer for everyday tasks.`,
    steps: [
      {
        title: `Sign in with your Google account`,
        content: `When you first turn on a Chromebook, it asks you to connect to Wi-Fi and then sign in with a Google account. If you already have a Gmail address, use that. If not, you can create a free Google account on the sign-in screen. Your account ties your email, photos, documents, and settings to the device.`,
        tip: `A Chromebook can have multiple user accounts. Each person who uses it can sign in with their own Google account and have a separate, private experience.`,
      },
      {
        title: `Get familiar with the desktop and shelf`,
        content: `Once signed in, you will see a desktop background and a bar along the bottom called the Shelf — similar to the taskbar in Windows. The Shelf contains your app shortcuts, the time and Wi-Fi indicator in the bottom-right corner, and a circle button on the left called the Launcher that opens a menu of all your apps.`,
      },
      {
        title: `Open and use the Chrome browser`,
        content: `The Chrome browser is the main window you work in on a Chromebook. Click the Chrome icon on the Shelf to open it. From here you can visit websites, check Gmail, open Google Docs, watch YouTube, or do anything else you would do on the internet. Most of your daily tasks happen inside this browser window.`,
      },
      {
        title: `Find and open apps`,
        content: `Click the circle button (Launcher) at the bottom-left of the screen to see your installed apps. You can also search for apps by typing the app name. To add new apps, open the Chrome browser, go to the Chrome Web Store (search "Chrome Web Store"), and browse available apps. Many Android apps are also available through the Google Play Store.`,
      },
      {
        title: `Understand what a Chromebook does and does not do`,
        content: `Chromebooks work great for: browsing the web, Gmail, Google Docs, Google Sheets, video calls (Zoom, Google Meet), YouTube and Netflix, online shopping, and social media. They are not the best choice for: Microsoft Office (though Google Docs is a free alternative), specialized Windows-only programs, or high-end gaming. For most everyday computer tasks, a Chromebook does the job.`,
        tip: `Chromebooks save files to Google Drive (cloud storage) by default, so your documents are always backed up and accessible from any device.`,
      },
    ],
  },
  {
    slug: `windows-narrator-guide`,
    title: `Windows Narrator: The Built-In Screen Reader That Reads Text Aloud`,
    excerpt: `Windows Narrator reads text, buttons, and menus aloud on your PC so you can use your computer without relying on the screen — no extra software needed.`,
    category: `windows-guides`,
    tags: [`narrator`, `screen reader`, `windows`, `accessibility`, `text to speech`, `low vision`, `blind`],
    readTime: `6 min`,
    thumbnailEmoji: `🔊`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Windows Narrator is a screen reader built into every Windows 10 and Windows 11 computer. A screen reader is a program that reads aloud whatever is on your screen — text in documents, labels on buttons, items in menus, and announcements about what is happening on the computer.

Narrator is designed for people who are blind or have very low vision, but it is also useful for anyone who finds it easier to listen than to read on screen. It can read web pages, emails, documents, and system menus.

Narrator uses a text-to-speech voice that speaks out loud through your speakers or headphones. You can choose from several different voices, adjust the speaking speed, and control how much detail Narrator announces.

You do not need to install anything — Narrator is already on your Windows computer. You can turn it on instantly with a keyboard shortcut, and turn it off the same way.

Narrator works best with a keyboard because it uses special key combinations to navigate and control what gets read. The "Narrator key" is either the Caps Lock key or the Insert key — both do the same thing. You hold that key and press other keys to give Narrator commands.

If you are new to screen readers, plan to spend some time getting familiar with the navigation commands. Start with simple tasks like reading a web page or a document before moving to more complex navigation. Microsoft provides a detailed guide for Narrator at support.microsoft.com.`,
    steps: [
      {
        title: `Turn Narrator on and off`,
        content: `Press the Windows key + Ctrl + Enter at the same time to turn Narrator on or off. When Narrator starts, it will announce "Narrator on" and begin reading what is on your screen. Press the same key combination again to turn it off. You can also turn it on through Settings > Accessibility > Narrator.`,
        tip: `If you accidentally turn on Narrator, press Windows key + Ctrl + Enter again to turn it off.`,
      },
      {
        title: `Adjust the voice and reading speed`,
        content: `With Narrator running, open Settings > Accessibility > Narrator. Here you can change the voice (Microsoft David, Zira, Mark, or others installed on your system), the reading speed using a slider, and the pitch of the voice. Changes take effect immediately so you can test as you adjust.`,
      },
      {
        title: `Use the Narrator key to read items`,
        content: `The Narrator key is Caps Lock or Insert — hold either one while pressing other keys to give commands. Press Narrator key + Down Arrow to read the next item on screen. Press Narrator key + Space to activate (click) the item that has focus. Press Narrator key + Tab to move between items. Pressing the Tab key alone moves focus forward through buttons and links.`,
      },
      {
        title: `Read a web page or document`,
        content: `Open a web page or document, then press Narrator key + Ctrl + R to start reading the entire page from the current position. Press Ctrl to stop reading at any time. To go back and re-read a section, press Narrator key + Up Arrow to read the previous line or item.`,
        tip: `In a web browser, pressing the Tab key moves through links and buttons. Pressing Enter opens a link or activates a button.`,
      },
      {
        title: `Use Narrator's Scan Mode for web browsing`,
        content: `Scan Mode makes it easier to browse web pages. Press Narrator key + Space to toggle Scan Mode on. In Scan Mode, press the Down Arrow to move through the page item by item and hear each one read aloud. Press Enter to open a link. Press Escape to exit Scan Mode.`,
        warning: `Narrator is a tool that takes practice to use well. Start with simple tasks and gradually learn more commands. Microsoft has a full list of Narrator keyboard shortcuts at support.microsoft.com — search for "Narrator keyboard commands."`,
      },
    ],
  },
  {
    slug: `voiceover-mac-guide`,
    title: `Mac VoiceOver: The Built-In Screen Reader That Describes Everything on Your Screen`,
    excerpt: `VoiceOver reads text, buttons, images, and menus aloud on your Mac so you can use your computer without relying solely on the screen.`,
    category: `mac-guides`,
    tags: [`voiceover`, `screen reader`, `mac`, `accessibility`, `text to speech`, `low vision`, `macos`],
    readTime: `6 min`,
    thumbnailEmoji: `🗣️`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `VoiceOver is a screen reader built into every Mac. It reads aloud everything on your screen — text in documents and web pages, names of buttons and menus, descriptions of images, and status updates about what is happening on the computer.

A screen reader is a program that turns visual content into spoken words. VoiceOver is particularly helpful for people who are blind or have low vision, but it is also useful for anyone who prefers to listen rather than read on screen, or who wants to verify what they are clicking.

VoiceOver is more advanced than a basic text-to-speech feature. It describes the entire interface: what type of element something is (a button, a link, a text field), its state (checked or unchecked, expanded or collapsed), and where it sits in the layout.

You control VoiceOver with a combination of the Control and Option keys (held together) plus other keys. This combination is called the "VoiceOver keys" or VO keys. For example, VO + Right Arrow moves to the next item and reads it aloud.

Like any screen reader, VoiceOver has a learning curve. Apple provides a built-in interactive tutorial called VoiceOver Training that walks you through the basics when you first turn it on — it is worth doing. The tutorial is also available anytime from the VoiceOver settings.

VoiceOver also works on iPhone and iPad. The same feature name, similar gestures and commands, and the same goal: describing everything on screen so you can use the device without depending on your vision.`,
    steps: [
      {
        title: `Turn VoiceOver on or off`,
        content: `Press Command + F5 to turn VoiceOver on or off. On MacBooks with a Touch Bar, press the Touch ID button three times quickly. You can also go to System Settings > Accessibility > VoiceOver and click the toggle. When VoiceOver starts, a welcome message plays and a black caption panel appears at the bottom of the screen showing what VoiceOver is saying.`,
        tip: `If you want, enable the option "Allow VoiceOver to be toggled with keyboard shortcut" in VoiceOver settings to always use Command + F5.`,
      },
      {
        title: `Go through VoiceOver Training`,
        content: `The first time you turn on VoiceOver, a dialog asks if you want to start VoiceOver Training. Click Open VoiceOver Training (or press Return). The interactive tutorial teaches you the most important commands in a guided, hands-on way. You can access the training again anytime from System Settings > Accessibility > VoiceOver > Open VoiceOver Training.`,
      },
      {
        title: `Learn the VO keys`,
        content: `The VoiceOver keys are Control + Option held together — abbreviated as VO. Nearly every VoiceOver command starts with VO plus another key. VO + Right Arrow moves to the next item. VO + Left Arrow moves to the previous item. VO + Space activates (clicks) the current item. VO + A reads everything from the current position to the end.`,
      },
      {
        title: `Navigate a web page`,
        content: `Open Safari and a web page. Press VO + A to start reading the page from the top. Press Control to stop. Press Tab to jump between links and buttons. Press VO + Right Arrow to move through items one at a time. Press VO + Space to click a link or button that VoiceOver is describing.`,
        tip: `The Web Rotor (VO + U) gives you a quick way to jump between headings, links, images, or form fields on a page — very helpful for navigating long web pages.`,
      },
      {
        title: `Adjust the voice and speed`,
        content: `Go to System Settings > Accessibility > VoiceOver > Open VoiceOver Utility. In the Speech section, you can choose a different voice from the dropdown, and use a slider to adjust how fast VoiceOver speaks. Changes take effect right away. You can also press VO + Command + Shift + Right Arrow to increase speech rate on the fly.`,
        warning: `VoiceOver changes how the keyboard works while it is active. If you turn it on by accident and want to turn it off, press Command + F5. If you cannot find the right keys, press Escape to stop any current action, then try Command + F5 again.`,
      },
    ],
  },
  {
    slug: `swipe-to-type-guide`,
    title: `Swipe Typing: Dragging Your Finger Across Letters Instead of Tapping Each One`,
    excerpt: `Swipe typing lets you glide your finger from letter to letter across the keyboard to form words — often faster than tapping individual keys.`,
    category: `tips-tricks`,
    tags: [`swipe typing`, `slide to type`, `keyboard`, `iphone`, `android`, `gboard`, `typing tips`],
    readTime: `4 min`,
    thumbnailEmoji: `⌨️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Swipe typing — sometimes called slide-to-type or glide typing — is a way of typing on a touchscreen keyboard by sliding your finger from one letter to the next without lifting it. Instead of tapping each letter individually, you trace a path across the keyboard and the phone figures out the word you meant.

For example, to type the word "hello," you would place your finger on the H, slide it to E, then to L, then to L again, then to O — all in one smooth motion. The keyboard watches the path your finger takes and predicts the word.

Most people find swipe typing faster than tapping once they get used to it, especially for longer words. It does take a little practice — your first few tries may produce wrong words — but the keyboard learns from your corrections over time and gets more accurate.

Swipe typing is available on Android by default through Gboard (Google's keyboard) and also through Samsung Keyboard. On iPhone, Apple added a built-in swipe option called Slide to Type starting with iOS 13. Third-party keyboards like Gboard (available free from the App Store) also offer swipe typing on iPhone.

You do not need to turn anything on for Android — swipe typing is already active on most Android keyboards. On iPhone with the built-in keyboard, Slide to Type is on by default in iOS 13 and later.

If you make a mistake, tap the Backspace key once to undo the last swiped word. You can always switch back to tapping letters for words that are hard to swipe, like proper names.`,
    steps: [
      {
        title: `Check if swipe typing is available on your phone`,
        content: `On Android, Gboard and Samsung Keyboard support swipe typing by default — no setup needed. Open any text field (like a new message) and try sliding between letters to see if it works. On iPhone, go to Settings > General > Keyboard and make sure "Slide to Type" is turned on. It is on by default in iOS 13 and later.`,
      },
      {
        title: `Try your first swipe word`,
        content: `Open a new text message or note. Place your finger on the first letter of a word. Without lifting your finger, slide to each subsequent letter. Glide smoothly but do not rush — try to hit each letter reasonably well. Lift your finger at the last letter. The phone will display the word it thinks you meant above or in the text field.`,
        tip: `For letters that appear twice in a word (like the two L's in "hello"), you do not need to loop back — the keyboard recognizes the path and fills in the repeated letters.`,
      },
      {
        title: `Accept or correct the word`,
        content: `After you lift your finger, the phone displays the predicted word. If it is correct, it is already in your message — swipe the next word right away. If it is wrong, look above the keyboard for alternative suggestions in the suggestion bar and tap the correct word. Or tap Backspace once to delete the swiped word and type it manually.`,
      },
      {
        title: `Build speed with practice`,
        content: `Start with short, common words like "the," "you," "and," "with," and "this." These are the easiest to swipe because the keyboard predicts them very reliably. As you get comfortable, move on to longer words. Most people find swipe typing feels natural after 15–20 minutes of practice.`,
        tip: `Swipe typing works best with clean, smooth motions. You do not need to trace over every letter precisely — the keyboard uses the overall shape of your path to guess the word.`,
      },
    ],
  },
  {
    slug: `google-maps-directions-guide`,
    title: `How to Get Driving, Walking, and Transit Directions with Google Maps`,
    excerpt: `Use Google Maps on your phone to get turn-by-turn directions for driving, walking, or taking public transit to any address or place.`,
    category: `app-guides`,
    tags: [`google maps`, `directions`, `navigation`, `driving`, `walking`, `transit`, `gps`],
    readTime: `5 min`,
    thumbnailEmoji: `🗺️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google Maps is a free navigation app available on both iPhone and Android. It gives you turn-by-turn directions for driving, walking, biking, or taking public transportation (bus, train, or subway) to any address or named place.

You can use Google Maps even if you have never used a navigation app before. You type in where you want to go, choose how you are getting there, and the app guides you step by step with spoken directions through your phone's speaker.

For driving, Google Maps shows your route on a map and speaks each turn before you reach it — "In 500 feet, turn right on Maple Street." It also shows you real-time traffic conditions and will automatically suggest a faster route if a traffic jam appears ahead.

For walking, it shows your route on a walking map and gives directions at intersections. For public transit, it shows which bus or train to take, where to board, and when it is due to arrive.

Google Maps works best when your phone has a good GPS signal and a data connection. GPS usually works well outdoors in open areas but can be less accurate inside buildings or in areas with tall buildings on both sides.

Before starting a trip, it is a good idea to enter your destination and review the route while you are stationary. This way you know what to expect and can spot anything that looks wrong before you start driving or walking.

The app remembers places you have searched for recently, making it faster to navigate to places you go regularly. You can also search for categories like "gas station near me" or "pharmacy" and Maps will show options nearby.`,
    steps: [
      {
        title: `Open Google Maps and search for your destination`,
        content: `Open the Google Maps app on your phone. Tap the search bar at the top of the screen and type the address or the name of the place you want to go. For example, type "123 Main Street, Chicago" or "CVS Pharmacy" or "Walmart near me." Tap the result that matches your destination.`,
        tip: `You can speak your destination instead of typing — tap the microphone icon in the search bar and say the address.`,
      },
      {
        title: `Tap "Directions"`,
        content: `Once you select a destination, a card appears at the bottom of the screen showing the place. Tap the blue Directions button. Google Maps will calculate the route from your current location to your destination.`,
      },
      {
        title: `Choose your travel mode`,
        content: `At the top of the directions screen, you will see icons for different travel modes: a car, a person walking, a bus, a bicycle, and a taxi. Tap the one that matches how you are traveling. The route and estimated travel time will update based on your selection.`,
      },
      {
        title: `Review the route and start navigation`,
        content: `Review the route shown on the map and the estimated arrival time. If Google Maps suggests multiple routes, they will appear as different colored lines — tap a route to see its details. When you are ready to go, tap the blue Start button. The app will switch to navigation mode and begin giving spoken turn-by-turn directions.`,
        warning: `If you are driving, set up navigation before you start moving. Looking at your phone while driving is dangerous and illegal in most states.`,
      },
      {
        title: `Follow directions and end navigation`,
        content: `Follow the spoken instructions and the on-screen map. Google Maps will alert you before each turn. If you miss a turn, the app automatically recalculates your route. When you arrive, the app announces your destination. Tap the X button in the bottom corner to exit navigation mode.`,
        tip: `If you lose your internet connection, Google Maps can continue showing your route using offline map data — as long as you downloaded the area map in advance. In Maps, tap your profile picture > Offline Maps to download maps for your area.`,
      },
    ],
  },
  {
    slug: `online-banking-app-guide`,
    title: `Using Your Bank's Mobile App to Check Balances, View Statements, and Deposit Checks`,
    excerpt: `Your bank's mobile app lets you check your balance, view transactions, transfer money, and deposit a check by taking a photo — all from your phone.`,
    category: `financial-tech`,
    tags: [`mobile banking`, `bank app`, `check deposit`, `balance`, `transfer money`, `statements`, `finance`],
    readTime: `7 min`,
    thumbnailEmoji: `🏦`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Most banks and credit unions offer a free mobile app that lets you manage your account from your phone. You can check your balance, see recent transactions, transfer money between accounts, pay bills, and deposit paper checks by taking a photo — without ever setting foot in a branch.

Mobile banking apps use encryption (a high-level form of scrambling) to protect your information while it travels between your phone and your bank's systems. They are generally considered safe to use, especially on your own personal phone on a secure home Wi-Fi connection.

To use your bank's app, you need your online banking username and password. If you have never set up online banking, you will need to do that first — usually by visiting your bank's website and clicking "Enroll" or "Register." Your account number and a piece of personal identification are typically needed.

The mobile deposit feature — depositing a paper check by photographing it — has a daily limit that varies by bank, typically between $1,000 and $5,000. After depositing a check by photo, write "Mobile Deposit" and the date on the front of the check, and keep it for at least a few weeks in case any questions come up.

Never use a banking app on public Wi-Fi (like at a coffee shop or airport). If you need to check your balance when you are out, use your phone's cellular data connection instead.

If you receive a text or email claiming to be from your bank and asking you to click a link, do not use the link. Go directly to your bank's app or type the bank's web address directly into your browser. Banks do not ask for your password through text or email.`,
    steps: [
      {
        title: `Download your bank's official app`,
        content: `Search for your bank's name in the App Store (iPhone) or Google Play Store (Android). Make sure you download the official app — look for the verified checkmark and confirm the developer name matches your bank. Download and install the app for free.`,
        warning: `Only download your bank's app from the official App Store or Google Play Store. Fake banking apps do exist and are designed to steal your login information.`,
      },
      {
        title: `Sign in with your online banking credentials`,
        content: `Open the app and enter your online banking username and password. If you have not set up online banking before, tap "Enroll" or "Sign Up" in the app and follow the steps — you will need your account number and some personal information. Once signed in, enable Face ID or fingerprint login when offered, so future logins are faster.`,
      },
      {
        title: `Check your balance and recent transactions`,
        content: `After signing in, the home screen usually shows your account balance. Tap your checking or savings account to see a list of recent transactions — deposits, withdrawals, purchases, and payments — usually going back 30 to 90 days. Tap any transaction to see more details.`,
      },
      {
        title: `Transfer money between accounts`,
        content: `Look for a Transfer or Move Money option in the app's menu. Select the account you want to transfer from, the account to transfer to, the amount, and the date. Review the details and confirm. Transfers between your own accounts at the same bank are usually instant or same-day.`,
        tip: `To transfer money to someone else's bank account at a different bank, look for "External Transfer" or "Zelle" in your bank's app — many banks now include Zelle for free person-to-person transfers.`,
      },
      {
        title: `Deposit a paper check by photo`,
        content: `Find the "Deposit Check" or "Mobile Deposit" option in the app. Enter the check amount. Take a photo of the front of the check, then the back. Make sure the check is on a dark, flat surface, is fully visible, and is in focus. Confirm the deposit. The money typically appears in your account within 1–2 business days. Write "Mobile Deposit" and the date on the check and keep it for 30 days.`,
      },
    ],
  },
  {
    slug: `online-bill-pay-guide`,
    title: `How to Pay Bills Online and Set Up Automatic Payments Through Your Bank`,
    excerpt: `Pay bills online through your bank's app or website and set up automatic payments so you never miss a due date or pay a late fee again.`,
    category: `financial-tech`,
    tags: [`bill pay`, `automatic payments`, `online banking`, `bank`, `pay bills`, `autopay`, `finance`],
    readTime: `6 min`,
    thumbnailEmoji: `💳`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Paying bills online through your bank is one of the most practical things you can do with a banking app or website. Instead of writing checks, buying stamps, and mailing payments, you can pay your electric bill, internet provider, phone company, credit card, or almost any other bill with a few taps on your phone or clicks on your computer.

Most banks offer a free service called Bill Pay. You set up your billers (the companies you pay each month) once, then send payments whenever you want. You can also set up automatic payments so the bank pays a bill on the same date every month without you having to do anything.

Bill Pay payments are sent from your checking account. The bank either sends an electronic payment directly to the company or mails a paper check on your behalf — you do not need to know which method is used. Payments typically arrive within 1–3 business days, so schedule payments a few days before the due date.

Setting up automatic payments for regular bills like your utilities, phone, or subscriptions removes the worry about forgetting a due date. Many people set up a small extra amount — for example, paying the minimum on a credit card automatically — and then pay larger amounts manually when they want to pay more.

Keep in mind that automatic payments come out of your account whether or not you have reviewed the bill. Check your statements regularly to catch any billing errors.

You can manage, pause, or cancel any automatic payment through your bank's Bill Pay section at any time. The biller does not control the automatic payment — your bank does, and you are always in control.`,
    steps: [
      {
        title: `Find Bill Pay in your bank's app or website`,
        content: `Sign in to your bank's mobile app or website. Look for a menu item or tab labeled "Pay Bills," "Bill Pay," or "Payments." If you do not see it, check the main navigation menu or search within the app. First-time users may need to agree to the Bill Pay terms of service before proceeding.`,
        tip: `Bill Pay is free at most banks. If your bank charges for it, consider switching to a free checking account that includes Bill Pay.`,
      },
      {
        title: `Add a new biller`,
        content: `Tap or click "Add a Biller," "Add Payee," or similar. Search for the company by name (for example, "AT&T" or "Eversource Energy") — many are pre-loaded. If not found, enter the company name, mailing address, and your account number as it appears on your bill. Save the biller.`,
      },
      {
        title: `Schedule a one-time payment`,
        content: `Select the biller, enter the amount you want to pay, and choose a payment date. Schedule the payment at least 2–3 business days before the actual due date to make sure it arrives on time. Review the details and confirm. You will usually receive a confirmation number.`,
        warning: `Always schedule bill payments a few days early, not on the due date. Processing time means a payment scheduled on the due date may arrive late and result in a fee.`,
      },
      {
        title: `Set up automatic recurring payments`,
        content: `Select a biller and look for an option like "Set Up AutoPay," "Schedule Recurring Payment," or "Automatic Payments." Choose how often to pay (monthly), the amount (a fixed amount or the statement balance), and the payment date each month. Confirm the setup. The bank will now pay that biller automatically every month.`,
      },
      {
        title: `Review and manage your payments`,
        content: `Check your Bill Pay section regularly to see upcoming scheduled payments and payment history. You can edit or cancel a scheduled payment any time before the processing date. Review your bank statements monthly to confirm payments were made correctly and that billed amounts match what you expected.`,
      },
    ],
  },
  {
    slug: `va-benefits-guide`,
    title: `Accessing VA Health Care and Benefits Online at VA.gov`,
    excerpt: `Use VA.gov to check the status of VA claims, message your health care providers, refill prescriptions, and manage your VA benefits online.`,
    category: `government-civic`,
    tags: [`va`, `veterans affairs`, `va.gov`, `veterans benefits`, `prescription refill`, `va health care`, `claims`],
    readTime: `7 min`,
    thumbnailEmoji: `🇺🇸`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `VA.gov is the official website of the U.S. Department of Veterans Affairs. It is the place to manage your VA benefits, health care, and services online — from checking the status of a disability claim to refilling prescriptions to sending a secure message to your doctor.

Using VA.gov can save veterans hours of phone calls and trips to VA facilities. Many tasks that used to require an in-person visit or a long hold on the phone can now be done online in minutes.

To use most features on VA.gov, you need to sign in with a verified account. VA.gov accepts Login.gov and ID.me as sign-in options. Login.gov is a government identity service — you create an account with your email address and verify your identity by uploading a photo of your driver's license or passport. The process takes about 10 minutes the first time.

Once signed in, you can see your disability rating, the status of any claims or appeals you have filed, your upcoming VA health care appointments, your prescription refill history, and your VA letters (like your benefit summary letter that proves your disability rating).

My HealtheVet is the health care section of VA.gov. It lets you message your VA health care team, view your lab results and visit notes, request prescription refills, and view your medical records.

VA.gov works on both computers and mobile phones. The website address is va.gov — type it directly into your browser. The VA also has a mobile app called VA: Health and Benefits, available free from the App Store and Google Play Store, which offers many of the same features in a more phone-friendly format.`,
    steps: [
      {
        title: `Create a Login.gov or ID.me account`,
        content: `Go to va.gov and click the Sign In button. Click Create an account with Login.gov (or ID.me). Follow the steps: enter your email address, create a password, and verify your identity using a photo of your driver's license or passport. You will also set up two-step verification using your phone number. This setup process takes about 10–15 minutes.`,
        tip: `If you have trouble with identity verification online, visit your nearest VA facility — staff can help you verify your identity in person.`,
      },
      {
        title: `Sign in and navigate the homepage`,
        content: `Go to va.gov, click Sign In, and enter your Login.gov or ID.me credentials. After signing in, you land on your personalized MyVA page. It shows a summary of your benefits, health care information, recent activity, and quick links. The main navigation at the top of the page has sections for Health Care, Disability, Education, and more.`,
      },
      {
        title: `Check the status of a disability claim`,
        content: `Click on Disability in the top navigation, then look for "Check your VA claim, decision review, or appeal status." Click the link and you will see a list of any claims you have filed, their current status, and the last action taken. You can see what information VA still needs, if anything.`,
      },
      {
        title: `Refill prescriptions through My HealtheVet`,
        content: `On your signed-in VA.gov page, click Health Care and then My HealtheVet. Look for Pharmacy or Prescription Refills. You will see a list of your current VA prescriptions. Check the box next to any prescription you need refilled and click Submit. Prescriptions are mailed to your address on file and typically arrive within 7–10 days.`,
        warning: `Prescription refills through the mail take time. Request refills when you have about a 2-week supply remaining so you do not run out before the refill arrives.`,
      },
      {
        title: `Send a secure message to your VA care team`,
        content: `From My HealtheVet, click Secure Messaging or Send a Message. Choose your health care team from the dropdown, select a topic (like General, Medication, or Question), and type your message. Click Send. Your care team typically responds within 3 business days. This is a good option for non-urgent questions, prescription questions, or following up on test results.`,
        tip: `Secure messaging is not for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room. For urgent VA health questions, call the VA health care line at 1-877-222-8387.`,
      },
    ],
  },
  {
    slug: `wire-transfer-bank-guide`,
    title: `How to Send a Bank Wire Transfer Online: What It Is and How to Stay Safe`,
    excerpt: `A wire transfer sends money directly from your bank account to another account, often the same day — learn how they work and how to avoid wire fraud.`,
    category: `financial-tech`,
    tags: [`wire transfer`, `bank transfer`, `send money`, `banking`, `wire fraud`, `financial safety`, `finance`],
    readTime: `6 min`,
    thumbnailEmoji: `💸`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `A wire transfer is a way to send money directly from one bank account to another — either within the United States (domestic wire) or to another country (international wire). Wire transfers move money faster than most other methods. Domestic wires typically arrive the same business day if sent before the bank's cutoff time.

Wire transfers are used for large transactions where speed and certainty matter: buying a home, paying a contractor, sending money to family in another country, or paying a large invoice. You need the recipient's bank name, routing number (a 9-digit number that identifies the bank), and their account number.

Most banks allow you to send a wire transfer online through your bank's website or app, though some still require you to do it in person or by phone. Domestic wires typically cost $15–$35 per transfer. International wires cost more — often $35–$50.

Wire transfers are final. Once a wire transfer is sent and received, it cannot be reversed. This is why wire fraud is so serious — scammers use wire transfers because the money disappears immediately and cannot be recalled.

Common wire fraud scams include: contractors or vendors who "change" their bank account information right before you pay (their email was hacked), fake real estate closings where scammers pose as the title company, and romance scammers who ask for wire transfers after gaining trust online.

Before sending any wire transfer, especially a large one, call the recipient directly at a phone number you already have — not a number from the email or message asking for the wire. Verify the account details verbally. This one step prevents the vast majority of wire fraud.`,
    steps: [
      {
        title: `Gather the recipient's banking information`,
        content: `Before you start, you need the recipient's full legal name, their bank name, the bank's routing number (a 9-digit number), the recipient's account number, and for international wires, the SWIFT/BIC code of the receiving bank. The recipient needs to get this information from their own bank.`,
        warning: `If someone emails or texts you updated bank account information right before you were about to pay them, call them directly to verify before sending anything. This is a common fraud tactic called "business email compromise."`,
      },
      {
        title: `Sign in to online banking and find Wire Transfer`,
        content: `Sign in to your bank's website or app. Look for "Wire Transfer," "Send a Wire," or "International Wire" under the Payments or Transfers section. Some banks require you to call or visit a branch for wire transfers — check your bank's website if you cannot find the option online.`,
      },
      {
        title: `Enter the transfer details`,
        content: `Fill in the recipient's name, bank name, routing number, account number, the amount, and the reason for the wire (often called "memo" or "message"). For international wires, you also enter the SWIFT/BIC code and possibly the recipient's address. Double-check every number before proceeding — a single wrong digit can send money to the wrong account.`,
        tip: `Many banks require you to add a new payee or verify additional information the first time you send a wire. This verification process protects you and may take a day to complete.`,
      },
      {
        title: `Review and confirm`,
        content: `Review all details one more time on the confirmation screen. Most banks will charge a fee (shown on screen) and require you to enter a one-time verification code sent to your phone. Confirm the transfer. You will receive a confirmation number — save this.`,
      },
      {
        title: `Track the transfer and follow up if needed`,
        content: `Most domestic wires arrive the same business day if sent before the cutoff time (often 2–4 PM). International wires typically take 1–5 business days. Contact your bank with your confirmation number if the recipient does not receive the funds within the expected time.`,
        warning: `Never wire money to someone you have only met online and have not met in person, even if you have been communicating for months. Romance scams, lottery scams, and fake investment opportunities frequently ask for wire transfers.`,
      },
    ],
  },
  {
    slug: `parental-controls-iphone-guide`,
    title: `Setting Up Screen Time on iPhone to Limit App Usage and Protect Kids`,
    excerpt: `Use Screen Time on iPhone to set app limits, filter content, block purchases, and schedule downtime for children's devices — all managed from your own phone.`,
    category: `safety-guides`,
    tags: [`screen time`, `parental controls`, `iphone`, `kids`, `content filter`, `app limits`, `family sharing`],
    readTime: `7 min`,
    thumbnailEmoji: `👨‍👩‍👧`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `Screen Time is a built-in parental controls feature on every iPhone and iPad running iOS 12 or later. It lets a parent set limits on how long a child can use certain apps, block inappropriate content, prevent in-app purchases, and schedule times when the screen goes dark — like during school hours or bedtime.

You can manage Screen Time directly on your child's device, or you can set it up on your own iPhone and link it to your child's device through Family Sharing so you can adjust everything remotely from your phone.

Setting a Screen Time passcode is important. This is a separate 4-digit code (different from the device passcode) that prevents your child from turning off Screen Time or changing the settings. Only you know this code.

Communication Limits controls who your child can call, text, or FaceTime. Content & Privacy Restrictions blocks explicit websites, restricts music or movies with mature ratings, and can prevent your child from installing or deleting apps.

App Limits let you set a daily time allowance for specific app categories. For example, you might allow 1 hour of social media per day. When the time is up, the app grays out and shows a reminder. Your child can ask for more time, and you can approve or deny the request.

Downtime schedules a period when only certain apps and phone calls are available — everything else is locked. This is commonly used for school hours and bedtime.

Screen Time reports show you a weekly summary of how much time your child spent on each app, how many times they picked up their phone, and which apps they used most.`,
    steps: [
      {
        title: `Open Screen Time settings`,
        content: `On your child's iPhone (or your own, if you are linking devices through Family Sharing), go to Settings and tap Screen Time. Tap "Turn On Screen Time." When asked, tap "This is My Child's iPhone." Set up a Screen Time passcode — choose a 4-digit code that your child does not know. This code protects all Screen Time settings.`,
        tip: `If you are setting this up on your own phone and managing your child's device remotely, use Family Sharing. Go to Settings > Your Name > Family Sharing to set it up, then access your child's Screen Time from your own Settings app.`,
      },
      {
        title: `Schedule Downtime`,
        content: `In Screen Time settings, tap Downtime. Turn it on and set a start and end time — for example, 9 PM to 7 AM. During Downtime, only apps you specifically allow (and Phone calls) will work. All other apps show a gray clock icon and cannot be opened. Your child can send a screen time request if they need access to something.`,
      },
      {
        title: `Set App Limits`,
        content: `Tap App Limits, then tap Add Limit. Choose app categories (like Social Networking, Games, or Entertainment) or select specific apps. Set the daily time limit in hours and minutes. Tap Add to save. When the daily limit is reached, apps in that category lock until midnight when the counter resets.`,
      },
      {
        title: `Turn on Content & Privacy Restrictions`,
        content: `Tap Content & Privacy Restrictions and turn the toggle on. Tap Content Restrictions > Web Content and choose "Limit Adult Websites" or "Allowed Websites Only" for stricter filtering. Under Apps, you can set age ratings for movies, TV shows, and apps. Under iTunes & App Store Purchases, set "In-App Purchases" to Don't Allow to prevent accidental charges.`,
      },
      {
        title: `Review Screen Time reports`,
        content: `At the top of the Screen Time settings page, you will see a summary of the current day's usage. Tap it to see a full breakdown by app, category, pickups, and notifications. You can also see the previous week. These reports help you understand your child's phone habits and make informed decisions about limits.`,
        warning: `Older children may search online for ways to bypass Screen Time. Review settings periodically and consider having open conversations about phone use rather than relying entirely on technical controls.`,
      },
    ],
  },
  {
    slug: `save-parking-google-maps-guide`,
    title: `How to Save Your Parking Spot in Google Maps to Find Your Way Back`,
    excerpt: `Use Google Maps to drop a pin at your parking spot so you can always find your way back to your car in an unfamiliar area or large parking lot.`,
    category: `app-guides`,
    tags: [`google maps`, `parking`, `save parking`, `navigation`, `parking spot`, `find car`, `maps`],
    readTime: `4 min`,
    thumbnailEmoji: `🅿️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you have ever parked in an unfamiliar city, a large shopping mall parking lot, or a multi-level garage and then spent 20 minutes trying to find your car, Google Maps has a feature that solves this problem.

Google Maps lets you save your parking spot with a tap. After saving, a blue P marker appears on the map at the exact location where your car is parked. When you are ready to return, you tap the marker and get walking directions back to your car.

The feature also lets you add notes (like "Level 3, Section B") and set a parking timer so you get an alert before a paid parking meter expires.

On iPhones, the parking spot feature works when Google Maps is connected to your car through Bluetooth or CarPlay. When you disconnect from your car's Bluetooth, Maps may automatically ask if you want to save your parking location. On Android, this automatic prompt works similarly.

You can also save your parking spot manually at any time — before or after you get out of the car — which is useful if your car does not have Bluetooth.

Saved parking spots are stored only on your device and disappear after 24 hours, or when you delete them. They are not shared with anyone else.

This feature works best in areas where Google Maps has detailed location data. In very remote areas or underground garages where GPS signals are weak, the saved location may be slightly off.`,
    steps: [
      {
        title: `Open Google Maps after parking your car`,
        content: `Before walking away from your car, open the Google Maps app on your phone. Make sure GPS is enabled on your phone so Maps can see your current location. The blue dot on the map should be at or near where your car is parked.`,
      },
      {
        title: `Tap your location dot to save parking`,
        content: `Tap the blue dot on the map that shows your current location. A menu pops up from the bottom of the screen. Look for an option that says "Save your parking" or "Set as parking location." Tap it. A blue P marker will appear on the map, and a card at the bottom will confirm your parking spot is saved.`,
        tip: `If you do not see a "Save your parking" option when you tap the blue dot, try searching for it: tap the search bar and type "Set as parking location."`,
      },
      {
        title: `Add notes or a parking timer (optional)`,
        content: `After saving your spot, a card appears at the bottom of the screen with your parking location. Tap "More info" to add a note (like "Row D, near the elevator") or to start a parking timer. If you set a timer, Google Maps will send you a reminder notification before the time runs out.`,
      },
      {
        title: `Navigate back to your car`,
        content: `When you are ready to return to your car, open Google Maps. The blue P marker will be visible on the map. Tap the marker, and a card appears with your saved parking notes. Tap "Directions" or "Walk to parking" to get walking directions from your current location back to your car.`,
      },
      {
        title: `Clear the saved parking spot`,
        content: `After you find your car and leave, tap the blue P marker on the map. Tap "Clear" or "Remove" to delete the saved spot. This keeps your map clean for the next time you need to use the feature.`,
        tip: `Saved parking spots automatically expire after 24 hours, but clearing it manually keeps things tidy.`,
      },
    ],
  },
  {
    slug: `reverse-phone-lookup-guide`,
    title: `How to Look Up an Unknown Phone Number Before Calling Back`,
    excerpt: `Use free reverse phone lookup tools to find out who owns an unknown number before you call back — helps identify scam calls and legitimate businesses.`,
    category: `safety-guides`,
    tags: [`reverse phone lookup`, `unknown caller`, `phone scam`, `who called`, `robocall`, `caller id`, `safety`],
    readTime: `5 min`,
    thumbnailEmoji: `🔍`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Getting a call from a number you do not recognize is frustrating. You do not know whether it is a scam, a robocall, a local business trying to reach you, or something important. Calling back an unknown number can expose you to scammers who record your voice saying "yes" (used to authorize fraudulent charges) or who confirm your number is active and target you with more calls.

A reverse phone lookup is a search that tells you information about a phone number — the owner's name, the location it is registered to, whether it has been reported as spam, and sometimes the company name.

Several free tools exist for this. Google itself is the easiest starting point — type the phone number into Google's search bar and you will often see the business name or spam reports. The FTC's Do Not Call registry does not do lookups, but sites like Nomorobo, RoboKiller's online lookup, and the phone carrier's own spam database can help.

For landlines and business numbers, reverse lookups are more reliable. Cell phone lookups are less precise because cell numbers are not in public directories.

The most reliable free approach is to search the number in Google and then also check it on Nomorobo.com or 800notes.com — these sites collect user reports of spam and scam calls and can tell you within seconds if a number is widely reported as a scammer.

If a number comes back as a known scam, do not call it back. If it comes back as a legitimate business, you can decide whether to call. If you cannot find any information, the safest option is to wait and see if the caller leaves a voicemail.`,
    steps: [
      {
        title: `Search the number in Google`,
        content: `Open Google on your phone or computer. Type the phone number exactly as it appeared on your screen — include the area code. For example, type "555-867-5309" or "18005551234" into the Google search bar. Press Enter. Look at the first few results — if the number belongs to a known business, a scam operation, or has been widely reported, it will often appear in search results.`,
        tip: `Adding the word "scam" to your search — like "555-867-5309 scam" — can bring up forum posts and reports from other people who received the same call.`,
      },
      {
        title: `Check Nomorobo or 800notes.com`,
        content: `Go to nomorobo.com or 800notes.com in your phone's browser. Enter the phone number in the search field and press Search. Both sites collect reports from people who have received unwanted calls. If the number is a known robocaller or scammer, you will see reports from other users describing what the call was about.`,
      },
      {
        title: `Check your phone's built-in caller ID`,
        content: `Many iPhones and Android phones can identify unknown callers automatically. On iPhone, your carrier may offer a feature called Silence Unknown Callers (Settings > Phone > Silence Unknown Callers) or Call Screening. On Android with a Pixel or most Samsung phones, Google's caller ID feature often identifies businesses and spam numbers before you even answer.`,
      },
      {
        title: `Decide whether to call back`,
        content: `If the lookup shows it is a known scam number — do not call back and consider blocking the number. If it shows a legitimate local business or government agency — decide based on whether you were expecting contact from them. If no information appears — wait for a voicemail. Legitimate callers almost always leave a voicemail with their name and reason for calling.`,
        warning: `Never call back an unfamiliar number and respond "yes" to the first question. Some scammers use your recorded "yes" to claim you agreed to a charge. If something feels wrong, hang up and call the organization directly using a number from their official website.`,
      },
    ],
  },
  {
    slug: `call-blocker-app-guide`,
    title: `Apps That Automatically Block Spam and Scam Calls: Hiya, RoboKiller, and Nomorobo`,
    excerpt: `Call-blocking apps like Hiya, RoboKiller, and Nomorobo screen incoming calls and automatically stop robocalls and scam calls before your phone even rings.`,
    category: `safety-guides`,
    tags: [`call blocking`, `spam calls`, `robocalls`, `hiya`, `robokiller`, `nomorobo`, `phone scam`, `safety`],
    readTime: `6 min`,
    thumbnailEmoji: `🚫`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Robocalls and scam calls have become a daily frustration for most Americans. These are automated or live calls trying to trick you into giving up personal information, sending money, or pressing a button that leads to more scam calls. The FTC reports billions of robocalls are made every month in the United States.

Call-blocking apps work by checking incoming phone numbers against large databases of known spam and scam numbers. When a flagged number calls you, the app either silences the call, sends it to voicemail, or plays a message telling the caller they must verify they are a real person — which robocalls cannot do.

Three popular options are Hiya, RoboKiller, and Nomorobo. Each works on both iPhone and Android.

Hiya is free and identifies spam and fraud calls. It labels suspected spam calls on your screen so you can decide whether to answer. It does not automatically block calls in the free version, but it gives you enough information to decide.

RoboKiller goes further — it not only blocks robocalls but can also "answer bot" the calls, playing a recorded response that wastes the scammer's time while they are trying to call real people. It has a free trial and then costs about $4 per month.

Nomorobo offers a free version for landline phones through your phone carrier's website. For cell phones, the Nomorobo app is available with a subscription. It is straightforward and widely used.

All three services can block a call while still allowing it to be recorded in your call history, so you can still check if a legitimate call was blocked and return it.

None of these apps have access to your calls, voicemails, or messages — they only check the phone number against a database.`,
    steps: [
      {
        title: `Choose and install a call-blocking app`,
        content: `Open the App Store (iPhone) or Google Play Store (Android) and search for "Hiya," "RoboKiller," or "Nomorobo." Download the app that appeals to you — Hiya is a good free starting point for most people. Install it on your phone.`,
        tip: `If you are on a budget, start with Hiya (free). If robocalls are a severe problem for you, RoboKiller's answer-bot feature is worth the subscription fee.`,
      },
      {
        title: `Give the app the permissions it needs`,
        content: `When you first open the app, it will ask for permission to access your phone calls or contacts so it can check incoming numbers. Grant the permissions it requests — they are needed for the app to work. The app does not read your contacts or listen to calls; it checks phone numbers only.`,
      },
      {
        title: `Enable the caller ID or blocking feature in your phone settings`,
        content: `On iPhone: go to Settings > Phone > Call Blocking & Identification. Make sure the toggle next to your call-blocking app is turned on. On Android: open the Phone app, go to Settings > Caller ID & Spam, and turn on the spam filter. Some Android phones also let you select a third-party app in this menu.`,
      },
      {
        title: `Test that blocking is working`,
        content: `After setup, calls from numbers in the app's spam database will either be labeled "Spam - Likely" on your screen, silenced automatically, or sent to voicemail — depending on which app you chose and your settings. Over the next few days, you should notice fewer interruptions from unknown numbers.`,
      },
      {
        title: `Report numbers and unblock legitimate callers`,
        content: `If a legitimate number gets blocked, open the app and add it to your personal allow list (sometimes called a whitelist). If you receive a new scam call that was not blocked, report the number through the app — your report helps improve the database for all users. You can also report scam numbers directly to the FTC at reportfraud.ftc.gov.`,
        warning: `No call-blocking app catches 100% of scam calls. Always be cautious with calls asking for personal information, Social Security numbers, or payment — even if the call was not automatically blocked.`,
      },
    ],
  },
  {
    slug: `capcut-guide`,
    title: `CapCut for Beginners: Trimming Clips, Adding Captions, and Making Short Videos`,
    excerpt: `CapCut is a free video editing app for your phone. This beginner guide walks you through importing clips, trimming, adding text captions, and exporting your finished video.`,
    category: `app-guides`,
    tags: [`capcut`, `video editing`, `phone`, `iphone`, `android`, `captions`, `video creator`, `beginner`],
    readTime: `7 min`,
    thumbnailEmoji: `🎬`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `CapCut is a free video editing app you can use on your iPhone or Android phone. It was created by the same company as TikTok, but you do not need a TikTok account to use it — it works as a standalone video editor for anyone who wants to make short videos.

With CapCut you can combine video clips, trim out the parts you do not want, add text and captions, include background music, adjust the speed, and add transitions between clips. The finished video saves to your phone's camera roll and can be shared anywhere you want — via text, email, social media, or kept privately for yourself.

CapCut is popular for making short family videos, slideshows from vacation photos, birthday tributes, and church or community group videos. It is designed so that people without any video editing experience can produce polished-looking results.

The app has a timeline at the bottom of the screen where your video clips and audio tracks appear as bars. You tap and drag to arrange clips, and tap a clip to see editing options for that specific clip.

One of the most useful features for older adults is the "Auto Captions" tool, which listens to any spoken words in your video and automatically generates on-screen captions — similar to subtitles. This makes your video accessible to people who are hard of hearing.

CapCut is free to download and use. Some advanced templates have a small fee, but everything you need to make a great basic video is available for free. The app does not require a subscription.`,
    steps: [
      {
        title: `Download CapCut and start a new project`,
        content: `Search for "CapCut" in the App Store (iPhone) or Google Play Store (Android). Download and install the free app. Open it and tap the large + New Project button. Your phone's camera roll will open — select the video clips or photos you want to use (tap each one to select it). Tap Add when done.`,
        tip: `You can mix video clips and still photos in the same project. Still photos will display for about 3 seconds each by default, and you can change that duration later.`,
      },
      {
        title: `Trim a clip to remove unwanted parts`,
        content: `After importing, your clips appear in the timeline at the bottom of the screen. Tap a clip to select it (it gets a white border). You will see handles at each end of the clip. Drag the left handle to the right to cut off the beginning, or drag the right handle to the left to cut off the end. The preview at the top of the screen shows the result as you drag.`,
      },
      {
        title: `Rearrange your clips`,
        content: `In the timeline, press and hold a clip until it lifts up slightly. Then drag it left or right to a new position in the order. Release to drop it in place. This lets you change the order in which clips appear in your finished video.`,
      },
      {
        title: `Add text captions`,
        content: `Tap the Text button in the menu row below the preview. Tap Add Text. A text box appears — type your caption. Choose a font, color, and style from the options that appear. Tap the checkmark when done. In the timeline, a text bar appears — drag its ends to control how long the caption stays on screen. Tap elsewhere to deselect.`,
        tip: `For automatic captions from spoken words, tap Text > Auto Captions. CapCut will listen to any voice in your video and generate captions automatically. Review them for accuracy and edit any mistakes.`,
      },
      {
        title: `Export and save your video`,
        content: `When your video looks the way you want, tap the Export button in the top-right corner (it looks like an upward arrow or says 1080P). Choose the video quality — 1080P is a good standard choice. Tap Export. CapCut will process the video (this takes a minute or two) and then save it to your phone's camera roll. You can then share it from Photos like any other video.`,
        warning: `CapCut may prompt you to post your video directly to TikTok. You can skip this — tap "No Thanks" or close the prompt. Saving to your camera roll does not require a TikTok account.`,
      },
    ],
  },
  {
    slug: `google-photos-edit-guide`,
    title: `How to Edit Photos in Google Photos: Brightness, Contrast, Crop, and Magic Eraser`,
    excerpt: `Use the free editing tools in Google Photos to improve your pictures — adjust lighting, crop, apply filters, and remove unwanted objects with Magic Eraser.`,
    category: `app-guides`,
    tags: [`google photos`, `photo editing`, `crop`, `brightness`, `magic eraser`, `filters`, `iphone`, `android`],
    readTime: `6 min`,
    thumbnailEmoji: `✏️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google Photos is a free app that stores your photos and also includes a set of editing tools you can use to improve them. You do not need any photo editing experience — the tools are designed to be approachable, and you can always undo any change you make.

The basic editing tools let you adjust brightness (how light or dark the photo is), contrast (the difference between the light and dark areas), color, and sharpness. There is also a one-tap Enhance button that automatically improves a photo's overall look without you having to adjust anything manually.

The Crop tool lets you cut out the edges of a photo to focus on the most important part, or to change the shape of the photo to a square for social media.

Filters apply a pre-set look to the whole photo with a single tap — similar to Instagram filters. They can warm up or cool down the color tone of a photo.

Magic Eraser is a more advanced tool available on Android phones and in the paid Google One plan on iPhone. It uses artificial intelligence to detect and remove objects in the background of a photo — like a stranger walking through your vacation photo, a trash can in the background of a portrait, or a photobomber. You circle or tap the object you want removed, and the app fills in the background automatically.

All edits in Google Photos are non-destructive, meaning they do not permanently change the original file until you tap Save. You can go back and undo any edit, even days later, by opening the photo and tapping Edit > Revert.`,
    steps: [
      {
        title: `Open a photo and tap Edit`,
        content: `Open the Google Photos app and tap the photo you want to edit. At the bottom of the screen, tap the Edit button (it looks like a set of horizontal sliders or a pencil). The editing interface opens with a row of tools at the bottom: Suggestions, Adjust, Filters, Crop, and more.`,
        tip: `The Suggestions tab often shows automatic improvements Google recommends for that specific photo — you can accept them with one tap.`,
      },
      {
        title: `Adjust brightness and contrast`,
        content: `Tap the Adjust tab. You will see sliders for Brightness, Contrast, Highlights, Shadows, and more. Tap Brightness, then drag the slider to the right to make the photo brighter or to the left to make it darker. Tap Contrast and drag the slider to increase or decrease the difference between light and dark areas. Tap each slider name to see what it does.`,
      },
      {
        title: `Apply a filter`,
        content: `Tap the Filters tab. A row of filter options appears — scroll through them. Tap a filter to preview how it looks on your photo. The filter is applied at full strength by default. Tap the filter a second time to see a small slider that lets you reduce the intensity if it looks too strong.`,
      },
      {
        title: `Crop the photo`,
        content: `Tap the Crop tab. White handles appear at the corners and sides of the photo. Drag the handles inward to cut out parts of the photo you do not want. Or tap the Aspect ratio button (a square icon) to choose a standard shape like Square, 4:3, or 16:9. Drag inside the crop box to reposition the photo within the frame.`,
        tip: `The Straighten tool in the Crop tab fixes photos that are slightly tilted — drag the rotation dial under the photo until the horizon looks level.`,
      },
      {
        title: `Use Magic Eraser to remove unwanted objects`,
        content: `Tap Tools (or the three-dot menu) and select Magic Eraser. The app may automatically highlight objects it thinks you might want to remove — tap a suggestion to erase it. To remove something manually, use your finger to circle or scribble over the object you want gone. Google Photos will remove it and fill in the background. Tap Done when finished.`,
      },
      {
        title: `Save your edited photo`,
        content: `When you are happy with the changes, tap Save. Google Photos saves a copy with your edits applied — the original is preserved. If you want to undo your edits later, open the photo, tap Edit, and tap Revert at the bottom of the screen to restore the original.`,
        warning: `After tapping Save, your edits are applied to the copy stored in Google Photos. The original file is preserved, but always check the result before closing the app to make sure everything looks the way you intended.`,
      },
    ],
  },
  {
    slug: `iphone-photo-crop-guide`,
    title: `How to Crop, Straighten, and Make Quick Edits to Photos Using iPhone Photos App`,
    excerpt: `The iPhone Photos app has built-in editing tools to crop, straighten, adjust brightness, and enhance your pictures — no extra app needed.`,
    category: `phone-guides`,
    tags: [`iphone`, `photos app`, `crop photo`, `photo editing`, `ios`, `straighten`, `edit photos`],
    readTime: `5 min`,
    thumbnailEmoji: `🖼️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Every iPhone comes with a Photos app that includes a set of photo editing tools — no separate app required. You can crop a photo to focus on a person or object, straighten a tilted shot, adjust the brightness and color, and apply filters.

These tools are designed to be approachable. All edits are non-destructive, which means the original photo is always preserved. At any time — even months later — you can open the photo, tap Edit, and tap Revert to get back the original, unedited version.

Cropping removes the outer edges of a photo. This is useful when the best part of a photo is in the center but there is distracting background around it, or when you want to make a photo square for sharing on social media.

Straightening fixes photos that are slightly tilted — perhaps a horizon line that dips, or a doorway that is not quite vertical. A small wheel control lets you rotate the photo until the key lines look level.

The Enhance button (a magic wand icon) is one of the most useful tools for beginners. Tap it once and the iPhone automatically adjusts the brightness, contrast, color, and other settings to improve the photo. For many photos this is all the editing you need.

The Adjust section offers manual controls for Exposure (overall brightness), Brilliance (balances highlights and shadows), Highlights, Shadows, Contrast, Brightness, Black Point, and more. Sliding any control left or right shows the effect in real time.

You can also rotate a photo to change its orientation, and flip it horizontally if needed.`,
    steps: [
      {
        title: `Open a photo and tap Edit`,
        content: `Open the Photos app and tap the photo you want to edit. In the top-right corner of the screen, tap Edit. The editing interface opens. At the bottom of the screen you will see three icons: the Enhance wand, the Adjust sliders, the Crop tool, and the Filters circle.`,
      },
      {
        title: `Use the Enhance button for automatic improvement`,
        content: `Tap the magic wand icon at the top of the screen (it looks like a small star or wand). The iPhone analyzes the photo and automatically adjusts brightness, contrast, color, and other settings to improve it. Tap the wand again to toggle the enhancement off and compare with the original. If you like the result, proceed to save.`,
        tip: `For many everyday photos — family shots, vacation scenes, food pictures — the Enhance button alone produces a noticeably better result with no further adjustments needed.`,
      },
      {
        title: `Crop and straighten`,
        content: `Tap the Crop icon (it looks like overlapping rectangles in the bottom row). White handles appear at the corners of the photo. Drag the handles inward to crop out the edges you do not want. To change the proportions (like making the photo square), tap the Aspect Ratio button (stacked rectangles) and choose Square, 4:3, or another option. To straighten the photo, drag the small dial under the image — the photo rotates slightly as you drag.`,
      },
      {
        title: `Adjust brightness and other settings manually`,
        content: `Tap the three-circle Adjust icon in the bottom row. A list of adjustments appears: Exposure, Brilliance, Highlights, Shadows, Contrast, Brightness, Black Point, Saturation, Vibrance, Warmth, Tint, Sharpness, and more. Tap any adjustment name and drag the slider left or right to change the value. The preview updates live. Drag the slider back to 0 to reset an individual adjustment.`,
      },
      {
        title: `Apply a filter`,
        content: `Tap the Filters icon (it looks like three overlapping circles) in the bottom row. A row of filters appears — scroll through options like Vivid, Dramatic, Silvertone, and Noir. Tap a filter to preview it. Tap it a second time to see an intensity slider. Choose None to remove all filters.`,
      },
      {
        title: `Save your edits`,
        content: `When you are happy with the result, tap Done in the bottom-right corner. The edited photo replaces the view in your library, but the original is preserved. To undo all edits and restore the original photo at any time, open the photo, tap Edit, and tap Revert (then confirm).`,
        warning: `Tapping Revert permanently removes all edits and restores the original. Only tap Revert if you are certain you want to start over — you cannot undo a Revert.`,
      },
    ],
  },
];
