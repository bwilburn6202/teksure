import { Guide } from './guides';

export const guidesBatch92: Guide[] = [
  {
    slug: `live-captions-android-guide`,
    title: `How to Turn On Live Captions on Your Android Phone`,
    excerpt: `Live Captions adds real-time subtitles to any audio playing on your Android phone — videos, calls, voice messages, and more — with no internet required.`,
    category: `phone-guides`,
    tags: [`live captions`, `accessibility`, `subtitles`, `hearing`, `Android`],
    readTime: `5 min`,
    thumbnailEmoji: `📝`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Live Captions is a built-in Android feature that reads the audio coming from your phone and shows it as text on your screen in real time. Whether you are watching a video, listening to a voice message, on a phone call, or playing a podcast, the captions appear automatically — no internet connection needed, because everything happens on your device.

This feature was originally designed for people who are deaf or hard of hearing, but many people find it helpful for all kinds of situations: noisy environments where you cannot hear well, watching videos in a quiet place without headphones, or following along when someone speaks too quickly.

Live Captions supports English, French, German, Italian, Japanese, Korean, and Spanish, depending on your Android version and phone model. Not every Android phone includes it — it is available on Google Pixel phones and most Samsung Galaxy phones running Android 10 or newer.

One important privacy note: because all processing happens on your device, nothing you hear is sent to Google or any other company. Your conversations and audio stay private.

The caption window floats on top of whatever you are doing. You can drag it to any corner of your screen so it does not block what you are watching. You can also expand it to show more lines of text at once.

Live Captions will not always be perfectly accurate — fast speech, accents, or background noise can cause errors — but it is remarkably good for a free, on-device tool. Think of it as a helpful aid, not a word-for-word transcript.`,
    steps: [
      {
        title: `Open your phone's Settings`,
        content: `Swipe down from the top of your screen and tap the gear icon, or find the Settings app in your app drawer. You are looking for the Accessibility section, which is where Android keeps all features designed to help people with different needs.`,
        tip: `Quick Tip: On some Samsung phones, the setting is called "Hearing Enhancements" inside Accessibility.`,
      },
      {
        title: `Find and turn on Live Captions`,
        content: `Inside Settings, tap Accessibility, then look for "Live Caption" or "Live Captions." Tap the toggle to turn it on. On Google Pixel phones, you can also press the volume button and tap the caption icon that appears at the bottom of the volume slider — that is often the fastest way to turn it on or off quickly.`,
        tip: `Quick Tip: On a Google Pixel, pressing a volume button shows a small captions icon below the slider. Tap it to toggle Live Captions instantly without going into Settings.`,
      },
      {
        title: `Play audio and watch the captions appear`,
        content: `Start a video, voice message, or audio clip. A dark floating box will appear on your screen showing the spoken words as text. The captions update in real time, a few words behind the actual audio. If no audio is playing, the caption box disappears automatically.`,
      },
      {
        title: `Move and resize the caption window`,
        content: `Press and hold the caption box, then drag it to a different part of the screen — top, bottom, or any corner. You can also drag the edge of the box to make it taller and show more lines of text. This is helpful when watching a video so the captions do not cover the most important part of the image.`,
        tip: `Quick Tip: If you prefer fewer distractions, shrink the caption box so it shows only one line at a time. It will still keep up with the audio.`,
      },
      {
        title: `Use Live Captions during phone calls`,
        content: `When you receive or make a phone call, the Live Captions box will appear and transcribe both sides of the conversation. On some Android versions, you may need to tap a "Captions" button that appears during the call. This can be very helpful if you are in a noisy place or if the other person is difficult to hear.`,
        warning: `The person you are calling will not see or know about the captions — they appear only on your screen. However, be aware that call audio is being processed locally on your device.`,
      },
      {
        title: `Adjust caption settings`,
        content: `Go back to Settings → Accessibility → Live Caption to find options like turning off sound labels (which show icons for music or laughter), hiding profanity, and enabling captions during media on silent mode. Experiment with these to find what works best for you.`,
        tip: `Quick Tip: Turn on "Caption volume & vibration sounds" if you want a gentle buzz when the captions detect loud sounds like alarms — useful if you keep your phone silent.`,
      },
    ],
  },
  {
    slug: `live-captions-windows-guide`,
    title: `Enable Live Captions in Windows 11 for Real-Time Subtitles`,
    excerpt: `Windows 11 has a built-in Live Captions feature that adds real-time subtitles to any audio on your computer — YouTube, video calls, podcasts, and more.`,
    category: `windows-guides`,
    tags: [`live captions`, `Windows 11`, `accessibility`, `subtitles`, `hearing`],
    readTime: `5 min`,
    thumbnailEmoji: `💬`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Windows 11 includes a Live Captions feature that listens to any audio playing on your computer and displays it as text in real time. This means captions will appear whether you are watching a YouTube video, on a Zoom call, listening to a podcast, or playing a movie — without needing any special software or a subscription.

The feature is especially useful for people who are hard of hearing or deaf, people learning English as a second language, anyone in a noisy environment, or those watching content in a language they are still learning. It works with any audio your computer plays, including your own microphone if you want to caption live speech.

Live Captions in Windows 11 is powered by speech recognition that runs locally on your device. Microsoft does say that audio is processed using Azure Speech Services, so unlike Android's completely offline processing, an internet connection is required for the initial language model download. After setup, it works well even on slower connections.

You can choose where the captions appear: docked to the top of the screen, docked to the bottom, or floating as a window you can move anywhere. You can also filter out profanity if desired.

The quality of captions depends on audio clarity. A good microphone or clear audio source gives better results. Strongly accented speech or fast talking may produce occasional errors, but overall accuracy is quite good for everyday use.

This feature is available on Windows 11 version 22H2 and later. If you do not see it, make sure your Windows is up to date through Windows Update.`,
    steps: [
      {
        title: `Open Live Captions with a keyboard shortcut`,
        content: `Press the Windows key, Ctrl, and L all at the same time (Win + Ctrl + L) to open Live Captions instantly. The first time you use it, Windows will ask you to download the speech recognition files — tap Yes and wait a moment for the download to finish. After that, the caption bar will appear on your screen.`,
        tip: `Quick Tip: You can also search "Live Captions" in the Start menu search bar and click the result to open it.`,
      },
      {
        title: `Choose where captions appear on your screen`,
        content: `At the top of the caption bar, click the gear icon (Settings) and look for the "Position" option. You can dock the captions to the top of your screen, the bottom of your screen, or let the window float so you can drag it anywhere. Many people prefer the bottom so it looks like traditional subtitles.`,
        tip: `Quick Tip: If you watch videos full-screen, choose "Floating" and move the caption window to a corner of your screen so it overlays the video without covering important content.`,
      },
      {
        title: `Start playing audio and read the captions`,
        content: `Play a YouTube video, start a Zoom call, or open a podcast app. The caption bar will immediately start showing text as words are spoken. The text scrolls left to right and wraps to the next line as needed. Captions disappear when no audio is detected, and resume when audio starts again.`,
      },
      {
        title: `Caption your own microphone`,
        content: `To caption live speech — for example, if someone in the room is talking to you — open the caption settings by clicking the gear icon in the caption bar, then turn on "Include microphone audio." Now your microphone will be included in what gets captioned alongside any system audio.`,
        warning: `If you are on a video call and you turn on microphone captioning, your own voice will also be transcribed. This is fine for your personal view — the other people on the call will not see your captions.`,
      },
      {
        title: `Filter profanity and adjust text size`,
        content: `In the caption settings, you can turn on "Filter profanity" to replace strong language with asterisks. You can also increase the text size for easier reading by clicking the "Caption style" option in settings. Larger text is especially helpful on a TV-connected computer or large monitor.`,
        tip: `Quick Tip: Caption style lets you change the font, color, and background of the caption box. A high-contrast style — white text on a dark background — is the easiest to read for most people.`,
      },
    ],
  },
  {
    slug: `personal-voice-ios-guide`,
    title: `Create a Personal Voice Clone on iPhone (iOS 17+)`,
    excerpt: `Personal Voice lets you record 150 phrases on your iPhone to create a synthesized voice that sounds like you — designed for people at risk of losing their ability to speak.`,
    category: `phone-guides`,
    tags: [`Personal Voice`, `iOS 17`, `accessibility`, `ALS`, `voice loss`, `Live Speech`],
    readTime: `7 min`,
    thumbnailEmoji: `🎙️`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Personal Voice is an iPhone feature introduced in iOS 17 that lets you record your own voice so that your phone can speak in a voice that sounds like you. It was created specifically for people who have conditions that may cause them to lose their ability to speak — such as ALS (amyotrophic lateral sclerosis, also called Lou Gehrig's disease), throat cancer, Parkinson's disease, or other neurological or physical conditions.

The idea is that you record 150 short phrases while you can still speak clearly. Your iPhone uses those recordings to build a synthesized version of your voice. Later — or right away — you can type what you want to say, and the phone will speak it out loud in your own voice through a feature called Live Speech.

Apple designed Personal Voice with privacy as a priority. All the processing and storage happens on your iPhone — your voice recordings and the synthesized voice model never leave your device. Apple cannot access them, and they are not stored in iCloud unless you specifically choose to back them up with end-to-end encryption enabled.

The recording process takes roughly 15 to 20 minutes total if you do it in one sitting, though you can split it across multiple sessions. You need a quiet room, because background noise will reduce the quality of your synthesized voice. The phrases are designed to cover a wide range of sounds and speech patterns.

Personal Voice works together with Live Speech (also in Accessibility settings), which lets you type text and have it spoken aloud. You can save commonly used phrases as shortcuts so you can speak them quickly without typing them each time. This is most useful in conversations where speed matters.`,
    steps: [
      {
        title: `Go to Settings and find Personal Voice`,
        content: `Open the Settings app on your iPhone (it looks like a gray square with gears on it). Scroll down and tap Accessibility. Then scroll down to the "Speech" section and tap Personal Voice. You will see a button to "Create a Personal Voice."`,
        tip: `Quick Tip: Your iPhone must be running iOS 17 or later. To check, go to Settings → General → About and look at the iOS Version listed there.`,
      },
      {
        title: `Prepare your recording environment`,
        content: `Before you start recording, move to a quiet room and hold your phone naturally in front of your mouth, about 6 to 12 inches away. Speak in your normal voice — do not try to sound different or project louder than usual. The goal is to capture how you actually talk day-to-day, so the result sounds like the real you.`,
        warning: `Background noise — a fan, TV, traffic, or air conditioning — will noticeably reduce the quality of your synthesized voice. Take the time to find the quietest spot available before you begin.`,
      },
      {
        title: `Record the 150 phrases`,
        content: `Tap "Continue" and begin reading the phrases shown on your screen one at a time. After each phrase, your iPhone records a short clip. You will see a progress bar as you work through all 150 phrases. You can pause at any time and come back later — your progress is saved. Try to speak clearly and at a comfortable, natural pace.`,
        tip: `Quick Tip: If you stumble on a phrase or cough, do not worry — there is a re-record button that lets you redo individual phrases. Getting a clean recording for each one is worth the extra moment.`,
      },
      {
        title: `Wait for your voice to be created`,
        content: `Once you have recorded all 150 phrases, your iPhone will process them and build your Personal Voice model. This happens in the background and can take an hour or more — your phone needs to be plugged in and locked for processing to run. You will get a notification when the voice is ready.`,
      },
      {
        title: `Use your Personal Voice with Live Speech`,
        content: `Go back to Settings → Accessibility and tap Live Speech. Turn it on. Under "Voices," select your Personal Voice from the list. Now, triple-click the side button (or the Home button on older iPhones) to open Live Speech, type what you want to say, and tap the button to have your phone speak it in your own cloned voice.`,
        tip: `Quick Tip: In Live Speech, tap "Add Phrase" to save sentences you say often — like your name, your address, or phrases like "Thank you" or "Can you repeat that?" You can access saved phrases with one tap during a conversation.`,
      },
      {
        title: `Back up your Personal Voice`,
        content: `By default, Personal Voice is stored only on your device. If you want it backed up so you do not lose it if your phone is replaced, go to Settings → Your Name → iCloud → iCloud Backup and make sure Advanced Data Protection is enabled (this enables end-to-end encrypted backups). With that on, your Personal Voice will be included in encrypted iCloud backups.`,
        warning: `Without a backup, if your iPhone is lost, broken, or replaced, you would need to record all 150 phrases again. If speech is becoming more difficult, back up as soon as the voice is created.`,
      },
    ],
  },
  {
    slug: `assistive-access-iphone`,
    title: `Set Up Assistive Access for a Simpler iPhone Experience`,
    excerpt: `Assistive Access replaces the standard iPhone interface with a much simpler layout designed for people with cognitive disabilities, dementia, or Down syndrome.`,
    category: `phone-guides`,
    tags: [`Assistive Access`, `cognitive accessibility`, `dementia`, `iOS`, `simplified interface`],
    readTime: `6 min`,
    thumbnailEmoji: `♿`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Assistive Access is an iPhone mode introduced in iOS 17 that transforms the look and feel of the iPhone into a much simpler, more manageable experience. Instead of the standard home screen with dozens of small icons and settings, Assistive Access shows large, easy-to-tap buttons for only the apps you choose. There are no complicated menus, no notifications cluttering the screen, and no confusing options.

This feature was designed primarily for people with cognitive disabilities — including dementia, Down syndrome, or intellectual disabilities — as well as for older adults who find the standard iPhone overwhelming. A family member, caregiver, or trusted person typically sets it up and configures which apps are available and how the device looks.

In Assistive Access mode, the iPhone works completely differently. There are two layout options: a grid of large app icons, or a row-based list layout where each app appears as a big labeled button. Both are much easier to navigate than the regular iPhone interface. Apps are also simplified — for example, the Messages app in Assistive Access shows only large contact photos and a simple camera keyboard for sending photos, rather than the full keyboard and all the options of standard Messages.

Only the apps you specifically add will be visible. You can include Phone (for calls to selected contacts only), Camera, Photos, Messages, Music, and a handful of others. The device user cannot add apps, change settings, or exit Assistive Access without the passcode set by the caregiver.

Assistive Access is not permanent — you can exit it at any time using the passcode, so the full iPhone is still accessible to caregivers or family members when needed.`,
    steps: [
      {
        title: `Open Accessibility settings and find Assistive Access`,
        content: `Open Settings on the iPhone, then tap Accessibility. Scroll all the way down to the bottom and tap "Assistive Access." This section explains what the feature does and shows a button to begin setup. The person setting it up should be the caregiver or family member, since it requires making decisions about which apps and settings to include.`,
      },
      {
        title: `Choose which apps to include`,
        content: `Tap "Set Up Assistive Access" and work through the setup screens. You will be asked to choose which apps appear in the simplified interface. Tap the plus (+) button next to each app you want to add — common choices include Phone, Messages, Camera, Photos, and Music. For apps like Phone and Messages, you can also limit which contacts are visible so the person only sees family members or caregivers.`,
        tip: `Quick Tip: Start with just three or four apps. It is easier to add more later than to overwhelm someone with too many options at the beginning.`,
      },
      {
        title: `Choose a layout: Grid or Rows`,
        content: `After selecting apps, choose the display layout. The Grid view shows large square app icons in a grid pattern — similar to a very simple home screen but with much bigger buttons. The Rows view shows each app as a tall rectangular button filling most of the width of the screen. Try the Rows layout first if the person finds it hard to distinguish icons, since the name of the app appears in large text.`,
      },
      {
        title: `Set a separate Assistive Access passcode`,
        content: `You will be asked to create a passcode for Assistive Access. This is separate from the main iPhone passcode. The Assistive Access passcode is required to exit the simplified mode and return to the regular iPhone. Choose a code that the caregiver or family member will remember but that the device user will not accidentally enter.`,
        warning: `Write down the Assistive Access passcode and store it somewhere safe. If you forget it, you will need to go through the iPhone recovery process to regain access to the full device.`,
      },
      {
        title: `Enter Assistive Access mode`,
        content: `Tap "Enter Assistive Access" on the final setup screen. The iPhone will switch to the simplified interface immediately. The person using the phone will now see only the apps you selected, displayed in the large-button layout you chose. Everything else on the iPhone is hidden from view.`,
        tip: `Quick Tip: After entering Assistive Access, test it by using it yourself for a few minutes to make sure everything works the way you intended before handing the phone to the person who will use it.`,
      },
      {
        title: `Exit Assistive Access when needed`,
        content: `To return to the standard iPhone interface, triple-click the Side button (the button on the right side of the iPhone). A screen will appear asking for the Assistive Access passcode. Enter it, then tap "Exit Assistive Access." The iPhone returns to its normal state. You can go back in and adjust settings, add apps, or make changes before re-entering Assistive Access.`,
      },
    ],
  },
  {
    slug: `sound-recognition-iphone`,
    title: `Use iPhone Sound Recognition to Alert You to Important Sounds`,
    excerpt: `Sound Recognition listens in the background on your iPhone and sends you a notification when it detects sounds like a smoke alarm, doorbell, baby crying, or dog barking.`,
    category: `phone-guides`,
    tags: [`Sound Recognition`, `accessibility`, `deaf`, `hearing loss`, `iPhone alerts`],
    readTime: `5 min`,
    thumbnailEmoji: `🔔`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Sound Recognition is a feature on iPhone that listens for specific important sounds in your environment and sends you a notification so you do not miss them. It was designed for people who are deaf or hard of hearing, but it is useful for anyone who wears headphones, works in a noisy environment, or wants an extra layer of home safety awareness.

When your iPhone detects one of the sounds you have turned on, a notification appears on your screen with the name of the sound and a visual indicator. If your iPhone is connected to an Apple Watch, the watch will also tap your wrist with a notification.

The sounds Sound Recognition can detect include: smoke and fire alarms, carbon monoxide alarms, doorbells, door knocks, appliance beeps (like a microwave or washer finishing), baby crying, cat meowing, dog barking, car horns, sirens, running water, and more. The list continues to expand with iOS updates.

All of the sound detection happens on your iPhone — nothing is sent to Apple or any server. Your phone's microphone listens in the background even when the screen is locked, using a small amount of processing power.

Sound Recognition does use slightly more battery than having it off, but for most people the impact is minor. It also does not work perfectly in every situation — a very loud environment or an unusual alarm tone might not be recognized. Apple recommends treating it as a helpful tool, not a replacement for dedicated hearing devices or smoke detectors.

Sound Recognition requires an iPhone with iOS 14 or later. It works alongside hearing aids, cochlear implants, and other assistive devices.`,
    steps: [
      {
        title: `Open Settings and go to Accessibility`,
        content: `Tap the Settings app on your iPhone home screen. Scroll down and tap Accessibility. On the next screen, look for the "Hearing" section. Tap "Sound Recognition." You will see a toggle and a list of all the sounds your iPhone can detect.`,
        tip: `Quick Tip: You can also search "Sound Recognition" in the Settings search bar at the top of the Settings screen to go there directly.`,
      },
      {
        title: `Turn on Sound Recognition`,
        content: `Tap the toggle at the top of the Sound Recognition screen to turn it on. The toggle will turn green. Your iPhone will now begin listening for sounds in the background. You will not notice the phone doing anything differently — it works quietly behind the scenes.`,
        warning: `Sound Recognition uses your iPhone's microphone continuously in the background. If you have set any app microphone restrictions, Sound Recognition may not work correctly. Make sure no other app is actively using the microphone when you need Sound Recognition to work well.`,
      },
      {
        title: `Choose which sounds to detect`,
        content: `Scroll down the Sound Recognition screen to see all available sound categories: Alarms, Animals, Home Devices, People, and more. Tap any category to expand it, then turn on the specific sounds you want. For home safety, many people turn on Smoke Alarm, Carbon Monoxide Alarm, and Doorbell. For parents, Baby Crying is a popular choice.`,
        tip: `Quick Tip: Do not turn on every sound at once — you may get too many notifications for everyday sounds. Start with the two or three most important ones and add more over time if needed.`,
      },
      {
        title: `Test the feature`,
        content: `To verify Sound Recognition is working, you can test it by playing a smoke alarm sound from a YouTube video at a medium volume near your phone. Your iPhone should send a notification within a few seconds. This is a good way to confirm the feature is working before you rely on it. Note that the accuracy can vary depending on volume and how similar the test sound is to a real alarm.`,
      },
      {
        title: `See notifications on your Apple Watch`,
        content: `If you wear an Apple Watch, Sound Recognition notifications automatically appear on the watch and tap your wrist. This is particularly helpful if your iPhone is in another room and you are wearing your watch. The notification shows the name of the sound that was detected. Make sure your iPhone and Apple Watch are connected (within Bluetooth range) for this to work.`,
        tip: `Quick Tip: Apple Watch with watchOS 7 or later supports Sound Recognition forwarding. Go to the Watch app on your iPhone → Notifications to confirm accessibility notifications are turned on for your watch.`,
      },
    ],
  },
  {
    slug: `switch-access-android-guide`,
    title: `How Android Switch Access Helps People with Motor Disabilities`,
    excerpt: `Switch Access lets you control your Android phone using one or two external switch buttons instead of touch — ideal for people with limited hand movement, tremor, or paralysis.`,
    category: `phone-guides`,
    tags: [`Switch Access`, `motor disability`, `accessibility`, `Android`, `assistive technology`],
    readTime: `7 min`,
    thumbnailEmoji: `🔲`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Switch Access is an Android accessibility feature that allows people to control their phone without touching the screen. Instead of using their fingers to tap and swipe, users press one or two external "switch" buttons to navigate the phone. This makes Android usable for people with motor disabilities such as limited hand movement, severe tremors, ALS, spinal cord injuries, or any condition that makes accurate touch interaction difficult or impossible.

A "switch" in this context is a physical button device — not something on your phone screen. Switches come in many forms: a large button you press with your hand, a foot pedal, a sip-and-puff device you control by blowing or sipping through a tube, or a head switch activated by head movement. These devices connect to your Android phone via Bluetooth or USB.

When Switch Access is active, the phone highlights items on the screen one at a time (called "scanning"). When the highlight reaches the item you want to select, you press your switch button to choose it. With two switches, one button moves the highlight forward and the other selects the highlighted item. With one switch, the highlight moves automatically on a timer.

Switch Access works across the entire Android phone — in apps, in settings, in the browser, everywhere. It does require patience and practice to use effectively, and configuring it to match a person's specific physical abilities takes some experimentation. Working with an occupational therapist or assistive technology specialist can make setup much more effective.

Android also supports Switch Access through Google's Accessibility Suite app, which is available on the Google Play Store and is pre-installed on most Android devices.`,
    steps: [
      {
        title: `Connect your switch device`,
        content: `Before setting up Switch Access in Android, connect your physical switch hardware to the phone. For a Bluetooth switch, put it into pairing mode and go to Settings → Connected Devices → Bluetooth, then pair it like you would pair a Bluetooth keyboard. For a USB switch, plug it into the phone using an appropriate adapter if needed. Make note of the button name that appears in Bluetooth settings — you will need it in the next steps.`,
        tip: `Quick Tip: If you do not have a dedicated switch device, you can test Switch Access using the volume buttons on the phone itself during setup. This lets you try the feature before purchasing specialized hardware.`,
      },
      {
        title: `Enable Switch Access in Accessibility settings`,
        content: `Open Settings on your Android phone, then tap Accessibility. Look for "Switch Access" — it may be listed directly, or it may be inside a section called "Interaction and Dexterity" or "Installed Services" depending on your phone model. Tap Switch Access, then tap the toggle to turn it on. You will see a confirmation dialog — tap OK.`,
        warning: `When Switch Access first turns on, your phone's touch input will feel different. The screen highlights items instead of responding directly to taps. If you want to go back to normal touch, go back to Accessibility settings and turn Switch Access off.`,
      },
      {
        title: `Assign your switch buttons`,
        content: `After turning Switch Access on, go to Settings → Accessibility → Switch Access → Settings → Assign Switches for Scanning. You will see options for Switch 1 and Switch 2. Tap "Switch 1" and then press your physical switch button — Android will detect the button press and assign it. Assign Switch 2 in the same way if you are using a two-switch setup. Common assignments are: Switch 1 = Move to Next, Switch 2 = Select.`,
        tip: `Quick Tip: For a single-switch setup, set Switch 1 to "Select" and enable Auto-Scanning so the highlight moves automatically on a timer. This works well when pressing the switch is the only reliable motor action available.`,
      },
      {
        title: `Choose a scanning method`,
        content: `In Switch Access settings, look for "Scanning Method." You have several choices: Linear Scanning moves through items one by one in order. Row-Column Scanning first highlights rows, then items within a row — faster for grids. Group Selection highlights groups of items, then narrows down. If you are just starting, Linear Scanning is the most straightforward to learn.`,
      },
      {
        title: `Adjust scan speed and visual settings`,
        content: `Go to Settings → Accessibility → Switch Access → Settings → Auto-Scan Settings if you are using auto-scanning. Increase the "Time Between Auto-Scans" slider to give more time between each highlight movement — start with 1.5 to 2 seconds and adjust from there based on the user's reaction time. You can also change the highlight color (making it brighter or more contrasting) and the highlight border thickness.`,
        tip: `Quick Tip: Work with the person using Switch Access to find the scan speed that feels comfortable. Too fast creates frustration; too slow makes navigation tedious. A good starting point is about 1.5 seconds between scans.`,
      },
      {
        title: `Practice navigating an app`,
        content: `Open a simple app like the Contacts or Photos app. Watch as Switch Access highlights buttons and items one by one. Press your switch button to move to the next item (or wait for auto-scan to move), and press select when the item you want is highlighted. The first sessions will feel slow, but muscle memory develops quickly with practice. Consider starting with high-priority tasks like making a phone call before moving to more complex navigation.`,
      },
    ],
  },
  {
    slug: `google-family-link-guide`,
    title: `Monitor and Manage Your Child's Android Phone with Google Family Link`,
    excerpt: `Google Family Link lets parents approve app downloads, set daily screen time limits, see their child's location, and remotely lock an Android phone — all from their own phone.`,
    category: `phone-guides`,
    tags: [`Family Link`, `parental controls`, `Android`, `kids`, `screen time`],
    readTime: `6 min`,
    thumbnailEmoji: `👨‍👧`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Google Family Link is a free app from Google that gives parents tools to manage and monitor their child's Android phone or tablet. It works by linking a parent's Google account to a child's Google account, giving the parent oversight and control from a distance using the Family Link app on their own phone.

With Family Link, parents can see which apps their child has installed, approve or block new app downloads from the Google Play Store, set a daily limit on how many hours the child can use the phone, schedule "downtime" (hours when the device is locked, such as bedtime or homework time), see the child's approximate location on a map, and remotely lock the device with one tap.

Family Link does not let parents read their child's messages or see everything they type — it focuses on app management, screen time, and location rather than detailed surveillance. This approach gives parents meaningful oversight while giving children some privacy.

The parent needs the Family Link app (for parents) installed on their own Android or iPhone. The child needs a Google Account — this can be an existing account, or you can create a supervised account for them through the Family Link setup process. Children under 13 automatically get supervised accounts when set up through Family Link.

When a child turns 13, Google notifies both the parent and child that the supervision can continue or be turned off. At that point, the child can choose to remove supervision with parental approval.

Family Link works on Android phones and tablets, as well as Chromebooks when the child is signed in with their supervised Google account.`,
    steps: [
      {
        title: `Download the Family Link apps`,
        content: `On your phone (the parent's phone), download "Google Family Link" from the Google Play Store or the Apple App Store. On your child's Android phone, make sure your child is signed in with a Google account, or be ready to create one during setup. You do not need to download a separate app on the child's phone — Family Link supervision is built into Android.`,
        tip: `Quick Tip: If your child does not have a Google account yet, you can create one for them during the Family Link setup process. Google allows parents to create accounts for children under 13 directly through Family Link.`,
      },
      {
        title: `Link your child's account to your Family Link`,
        content: `Open the Family Link app on your phone and tap the plus (+) button to add a child. Follow the on-screen instructions — you will be asked to enter your child's Google account email address (or create one). Then, on your child's phone, a confirmation screen will appear. You may need to enter your Google account password on the child's phone to approve the link.`,
      },
      {
        title: `Set daily screen time limits`,
        content: `In the Family Link app on your phone, tap your child's name. Then tap "Screen time" and set a daily limit — for example, 2 hours on weekdays and 3 hours on weekends. You can also schedule "Downtime" (a period when the device is locked) by tapping "Downtime" and setting start and end times, such as 9 PM to 7 AM on school nights.`,
        tip: `Quick Tip: You can create different schedules for weekdays and weekends. Many parents allow more screen time on Saturday and Sunday to account for relaxation time.`,
      },
      {
        title: `Approve or block app downloads`,
        content: `When your child tries to download an app from the Play Store, they will see a message saying "Ask a parent." You will receive a notification on your phone showing the app name, category, age rating, and a description. You can approve or decline with one tap. You can also browse your child's installed apps in Family Link and remove any app you do not want on the device.`,
        warning: `Apps that are already installed on the child's device before Family Link is set up will not automatically be removed. Go through the installed apps list in Family Link after setup to review what is already there.`,
      },
      {
        title: `See your child's location`,
        content: `Tap your child's name in Family Link, then tap "Location." If location sharing is on and the child's phone has a signal, you will see their current approximate location on a map. This uses GPS when available and cell tower location otherwise. You can also tap "Locate" for a fresh update. Location is approximate, not exact to the foot, but it is accurate enough for general awareness.`,
        tip: `Quick Tip: Talk openly with your child about the fact that you can see their location. Transparency about monitoring builds more trust than discovering it unexpectedly.`,
      },
      {
        title: `Remotely lock the device`,
        content: `If you want to lock your child's phone immediately — for example, during dinner or after the screen time limit is used up — tap your child's name in Family Link, then tap "Lock device now." The phone will lock and your child will see a message saying the device has been locked by a parent. You can unlock it just as easily from the same screen when you are ready.`,
      },
    ],
  },
  {
    slug: `kindle-fire-kids-setup`,
    title: `Set Up a Kindle Fire Kids Tablet for Your Child`,
    excerpt: `The Amazon Kindle Fire Kids tablet comes with built-in parental controls, a child-safe content subscription, and a two-year worry-free guarantee. Here is how to set it up properly.`,
    category: `essential-skills`,
    tags: [`Kindle Fire Kids`, `Amazon`, `tablet`, `kids`, `parental controls`],
    readTime: `6 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `The Amazon Kindle Fire Kids tablet (sometimes called Fire HD Kids) is a version of Amazon's standard Fire tablet sold specifically for children. It comes in a kid-proof case with a guaranteed two-year warranty (if it breaks for any reason, Amazon will replace it), and it includes a one-year subscription to Amazon Kids+, which is a curated library of books, educational apps, videos, and games appropriate for children.

Setting up the tablet involves creating a child profile, linking it to the Amazon Kids+ subscription, and configuring parental controls through the Amazon Parent Dashboard — a website (or app) where parents can manage everything from a browser or their own phone.

The tablet has several useful parental control features. You can set a daily time limit for how long your child can use the tablet each day. You can set separate limits by content type — for example, allow 60 minutes of entertainment but unlimited time for reading educational books. The "Learn First" feature requires children to complete educational activities before entertainment apps unlock. You can also block access to the web browser or allow only a curated kids' browser.

In-app purchases are blocked by default on a child profile, which means your child cannot accidentally buy anything without you entering your Amazon account password.

Amazon Kids+ includes thousands of books, popular apps like PBS Kids, Disney, and Nickelodeon content, educational games, and audiobooks. The subscription costs around $5 to $8 per month after the free trial, depending on your Amazon Prime membership status.`,
    steps: [
      {
        title: `Power on the tablet and sign in with your Amazon account`,
        content: `Press the power button on the top or side edge of the tablet and follow the initial setup screens. When asked, connect to your home Wi-Fi network by selecting it and entering your password. Then sign in with your Amazon account email and password. If you do not have an Amazon account, you can create one for free at Amazon.com before starting setup.`,
        tip: `Quick Tip: Make sure the tablet is plugged in during initial setup — the process can take 15 to 20 minutes, especially if there are system updates to install.`,
      },
      {
        title: `Create a child profile`,
        content: `After signing into your Amazon account, you will be prompted to set up a child profile. Enter your child's name, date of birth, and gender. Amazon uses the age to determine which Amazon Kids+ content is age-appropriate. You can add multiple children if you have more than one kid who will use the tablet. Each child gets their own profile with their own content and settings.`,
      },
      {
        title: `Set up Amazon Kids+ (the content subscription)`,
        content: `If this is a Kids Edition tablet, Amazon Kids+ (formerly FreeTime Unlimited) will be included for one year at no extra cost. Follow the prompts to activate it for your child's profile. Once active, your child's home screen will show age-appropriate books, apps, and videos from the Kids+ library. Content outside the library is not accessible from the child profile.`,
        tip: `Quick Tip: After the free year, Amazon Kids+ renews automatically. You can cancel or adjust it at any time through Amazon's Parent Dashboard at parents.amazon.com.`,
      },
      {
        title: `Set daily screen time limits`,
        content: `On the tablet, swipe down from the top to open the quick settings panel and tap "Parent Dashboard," or go to Settings → Parental Controls. From there, set the daily time limit for your child — for example, 2 hours total per day. You can also set different limits for weekdays versus weekends. When the time is up, the tablet will display a message that screen time is over for the day.`,
        warning: `Screen time limits apply to the child profile. If your child switches to the parent profile (which requires your parental controls password), time limits do not apply.`,
      },
      {
        title: `Enable Learn First if desired`,
        content: `Learn First is a feature that requires children to spend time in educational apps — reading, math games, or other learning activities — before entertainment apps (videos, games) become available. To turn it on, go to the Parent Dashboard and enable Learn First, then set how many minutes of educational content must be completed first. This is optional but popular with parents who want to balance learning with entertainment.`,
      },
      {
        title: `Block in-app purchases and review content settings`,
        content: `Go to Parental Controls and confirm that in-app purchasing is blocked for the child profile. While it is blocked by default, verifying this ensures no accidental charges. Also review the Content Filters section, where you can choose the age range of content shown — restricting to your child's actual age ensures they see appropriate material. You can add or remove specific apps from their profile at any time.`,
        tip: `Quick Tip: Use the Amazon Parent Dashboard app on your own phone (available for iOS and Android) to manage everything remotely without picking up the kids' tablet.`,
      },
    ],
  },
  {
    slug: `ipad-guided-access-kids`,
    title: `Lock Your iPad to One App for Kids Using Guided Access`,
    excerpt: `Guided Access locks the iPad to a single app so kids cannot accidentally leave it, change settings, or access other content — perfect for games, learning apps, and video calls.`,
    category: `phone-guides`,
    tags: [`Guided Access`, `iPad`, `kids`, `parental controls`, `single app mode`],
    readTime: `5 min`,
    thumbnailEmoji: `🔒`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Guided Access is a built-in iPad and iPhone feature that locks the device to a single app. While Guided Access is running, the person using the device cannot press the Home button to leave the app, cannot switch to a different app, and cannot access any settings or other content. The only way to exit is to triple-click the side (or Home) button and enter the Guided Access passcode.

Parents use Guided Access when they hand their child the iPad to use a specific app — an educational game, a drawing app, a reading app, or a video call with grandparents. Without Guided Access, a young child can easily wander into YouTube, the Settings app, or accidentally delete something. With it on, they stay exactly where you put them.

Guided Access also has two additional features that are very useful. First, you can draw over parts of the screen to disable specific areas — for example, you could block the ads banner in a free app by drawing over where it appears. Second, you can set a time limit so that Guided Access automatically ends after a certain number of minutes, at which point the iPad locks and the child cannot continue without the passcode.

Guided Access is available on all iPhones and iPads running iOS 6 or later — which means virtually every device currently in use supports it. It does not require any additional apps or subscriptions.

It is also useful for accessibility purposes — for example, handing someone with dementia an iPad with a photo album app locked in so they can browse photos without accidentally making changes.`,
    steps: [
      {
        title: `Enable Guided Access in Settings`,
        content: `Open the Settings app on the iPad. Tap Accessibility, then scroll down to the "General" section at the bottom and tap Guided Access. Tap the toggle to turn Guided Access on. This does not start Guided Access yet — it just enables the feature so you can use it when needed.`,
        tip: `Quick Tip: While you are in the Guided Access settings, also tap "Passcode Settings" and set a Guided Access passcode. Choose a code the child does not know. This passcode is required to exit Guided Access.`,
      },
      {
        title: `Open the app you want to lock`,
        content: `Navigate to and open the specific app you want to lock the iPad to. For example, if you want to lock the iPad to a reading app, open that reading app now. Guided Access will lock to whatever app is currently open on the screen. Make sure the app is fully loaded before you start Guided Access.`,
      },
      {
        title: `Start a Guided Access session`,
        content: `With the desired app open, triple-click the Side button (the button on the right edge of modern iPads) or the Home button (on older iPads with a circular button at the bottom). A Guided Access screen will appear with options. Tap "Start" in the upper right corner. The app is now locked. The side or Home button will no longer switch apps — it will instead prompt for the Guided Access passcode.`,
        tip: `Quick Tip: Before tapping Start, you can circle any part of the screen to disable it. Draw a circle or box over an area (like an ad banner or the settings button) and that section of the screen becomes untouchable during the session.`,
      },
      {
        title: `Set an optional time limit`,
        content: `On the Guided Access start screen (before tapping Start), tap "Options" in the lower left. You will see a toggle for "Time Limit." Turn it on and set the number of minutes you want — for example, 30 minutes. When the time is up, the iPad will play a sound and then lock. The child cannot continue using the app without you entering the passcode.`,
      },
      {
        title: `End the Guided Access session`,
        content: `To exit Guided Access, triple-click the Side button or Home button. You will be prompted to enter the Guided Access passcode. After entering it correctly, tap "End" in the upper left corner. The iPad returns to normal and all buttons and functions work as usual. You can then navigate to a different app or hand the iPad back to the child starting a new session.`,
        warning: `If you forget the Guided Access passcode, you will need to force-restart the iPad (hold the Side button and a Volume button together until the power slider appears, then restart), which will also end the Guided Access session. Your Guided Access passcode is different from the main iPad unlock passcode.`,
      },
    ],
  },
  {
    slug: `screen-time-mac-guide`,
    title: `Set Screen Time Limits on a Mac for Your Kids`,
    excerpt: `Screen Time on Mac lets you set daily app limits, schedule downtime, filter websites, and get a weekly report — all from your child's Mac account or your own.`,
    category: `mac-guides`,
    tags: [`Screen Time`, `Mac`, `parental controls`, `kids`, `downtime`],
    readTime: `6 min`,
    thumbnailEmoji: `⏱️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Screen Time is a built-in feature on Mac computers (and iPhones and iPads) that lets you understand and limit how the device is used. On a Mac, parents can set Screen Time for a child's user account to control how many hours per day they spend in specific app categories, schedule times when most apps are locked, filter websites, and see a detailed report of how the device has been used.

Screen Time replaced the older "Parental Controls" system in macOS. It offers more flexibility and works across all Apple devices if your family uses Family Sharing — meaning you can manage your child's Mac, iPhone, and iPad screen time all from one place.

For Screen Time to work as a parental control, your child should have their own user account on the Mac. This is the right approach because each user account has its own Screen Time settings and report. If your child uses your admin account, Screen Time is harder to enforce because they would be able to turn it off.

Setting a Screen Time passcode is essential. Without one, a child could go into System Settings and turn off Screen Time themselves. With a passcode, only the parent can make changes.

Screen Time reports show you which apps were used and for how long, which websites were visited, and how many notifications were received. This is useful for having informed conversations with your child about their screen habits, rather than simply imposing restrictions.

Screen Time requires macOS Catalina (10.15) or later. Most Macs bought after 2019 support it.`,
    steps: [
      {
        title: `Open Screen Time in System Settings`,
        content: `Click the Apple menu in the upper left corner of the screen, then click System Settings (on macOS Ventura and later) or System Preferences (on older macOS). Look for Screen Time in the sidebar or main settings list. Click it. If you are on your child's account, you will see their Screen Time data. If you are on your own admin account, you can switch to your child's account settings using the account selector at the top.`,
        tip: `Quick Tip: To manage your child's Screen Time from your account, your family must be set up with Family Sharing. Go to System Settings → Family and add your child's Apple ID if they have one.`,
      },
      {
        title: `Set a Screen Time passcode`,
        content: `At the top of the Screen Time settings, find the "Use Screen Time Passcode" option and turn it on. You will be asked to create a 4-digit passcode. Choose a number your child does not know. This passcode is required to change any Screen Time settings or override app limits when they are reached. Keep it somewhere you will remember.`,
        warning: `Do not use the same passcode as your Mac login password or your child's device passcode. The Screen Time passcode should be known only to parents.`,
      },
      {
        title: `Set App Limits`,
        content: `Click "App Limits" in the Screen Time sidebar, then turn it on. Click the plus (+) button to add a new limit. You will see categories like Games, Social Networking, Entertainment, Education, and more. Click a category to expand it and either limit the whole category or specific apps. Set the daily time limit — for example, 1 hour for Games. The limit resets every day at midnight.`,
        tip: `Quick Tip: You can create separate limits for weekdays and weekends by clicking the days below the time limit. This lets you allow more gaming time on Saturday and Sunday without changing the weekday limits.`,
      },
      {
        title: `Schedule Downtime`,
        content: `Click "Downtime" in the Screen Time sidebar and turn it on. Set a start and end time — for example, 9 PM to 7 AM. During Downtime, only apps you specifically allow (called "Always Allowed" apps) will work. Everything else will be locked and show a message that Downtime is active. Phone, Messages, and FaceTime are allowed by default during Downtime so your child can still reach you in an emergency.`,
      },
      {
        title: `Turn on Content & Privacy Restrictions`,
        content: `Click "Content & Privacy" in the Screen Time sidebar and turn it on. Here you can set the web content filter — choose "Limit Adult Websites" to automatically block most inappropriate content, or choose "Allowed Websites Only" to create a whitelist of sites your child can visit. You can also restrict the ability to change account passwords, use the camera, or make purchases in the App Store.`,
        tip: `Quick Tip: Under Content Restrictions, set the age rating for movies and TV shows — for example, PG or PG-13. This prevents older-rated content from playing through Apple TV or iTunes without your approval.`,
      },
      {
        title: `Review the weekly Screen Time report`,
        content: `Every week, you will see a summary at the top of the Screen Time settings showing total daily average screen time and which apps were used most. Tap "See All Activity" for a detailed day-by-day breakdown. This report is a useful starting point for conversations with your child — rather than just saying "less screen time," you can discuss specific patterns like spending 3 hours on games on school nights.`,
      },
    ],
  },
  {
    slug: `grammarly-student-guide`,
    title: `How Students Can Use Grammarly to Write Better`,
    excerpt: `Grammarly checks your spelling, grammar, punctuation, and writing clarity in real time — right inside Google Docs, your browser, or any text box on your computer.`,
    category: `essential-skills`,
    tags: [`Grammarly`, `writing`, `students`, `grammar`, `college`],
    readTime: `5 min`,
    thumbnailEmoji: `✍️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Grammarly is a writing tool that checks your text as you type and points out errors in spelling, grammar, and punctuation. It also suggests improvements to how you phrase things, flags sentences that are too long or confusing, and checks whether your tone matches the situation — for example, whether an email sounds professional enough.

Grammarly has a free version that covers most common writing needs: catching spelling mistakes, basic grammar errors, and punctuation problems. The Premium version (paid) adds more advanced suggestions including vocabulary improvements, plagiarism checking, and more detailed tone and clarity analysis.

The most common way students use Grammarly is through the browser extension, which works in Chrome, Firefox, Edge, and Safari. Once installed, Grammarly automatically appears whenever you type in a text box online — in Google Docs, email, Canvas, college application forms, discussion boards, and anywhere else you write on a webpage.

Grammarly is not a replacement for careful reading and revision. It cannot tell you if your argument is logically correct, if your research supports your claims, or if your essay flows well from paragraph to paragraph. It also occasionally flags things that are actually fine — for example, sentence fragments used intentionally for emphasis. Use it as a helpful second pair of eyes, not as the final word.

Important for academic integrity: Grammarly's free grammar checking is generally considered acceptable at most schools, similar to using spell check. However, the AI Writing features in Grammarly Premium (which can generate or rewrite text) may violate your school's academic honesty policy. Always check with your teacher or professor if you are unsure.`,
    steps: [
      {
        title: `Create a free Grammarly account`,
        content: `Go to Grammarly.com and click "Sign Up." You can create an account with your email address or sign up through your Google account. The free account gives you access to the essential grammar, spelling, and punctuation checks. You do not need to enter a credit card for the free plan.`,
        tip: `Quick Tip: Many colleges and universities offer free Grammarly Premium accounts through their writing centers or library subscriptions. Check your school's resource page or ask a librarian before paying for Premium yourself.`,
      },
      {
        title: `Install the Grammarly browser extension`,
        content: `After creating your account, you will be prompted to install the Grammarly browser extension. Click "Add to Chrome" (or your browser of choice). Once installed, a small green G icon will appear in your browser toolbar. From now on, whenever you type in a text field online — including Google Docs, email, and web forms — Grammarly will automatically check what you write.`,
      },
      {
        title: `Write in Google Docs and review suggestions`,
        content: `Open a Google Doc and start writing. As you type, Grammarly will underline potential issues in different colors: red for spelling mistakes, yellow for grammar issues, and blue for style suggestions. Hover over any underlined word or phrase to see what Grammarly suggests. You can click "Accept" to apply the fix, or click the X to dismiss it if you disagree.`,
        tip: `Quick Tip: A small card in the lower right corner of Google Docs shows your overall writing score and the number of issues found. Click it to open a sidebar with all suggestions listed together — faster than reviewing them one by one.`,
      },
      {
        title: `Use the tone detector for emails and messages`,
        content: `When writing an email or a message, Grammarly's tone detector (available in the browser extension) will show an icon indicating how your writing sounds — confident, formal, friendly, worried, and so on. If you are writing an email to a professor and Grammarly says the tone is "informal," consider whether that matches the situation and revise accordingly. Click the tone label to see which specific words or phrases contributed to it.`,
      },
      {
        title: `Learn from your writing patterns`,
        content: `Grammarly keeps track of your most common writing mistakes over time. Log in to Grammarly.com and go to your account dashboard to see a weekly writing report showing your most frequent errors. This is more valuable than just fixing individual mistakes — understanding your patterns helps you avoid them in the first place. For example, if you consistently misuse commas, that is a skill worth focusing on.`,
        warning: `Do not accept every suggestion Grammarly makes without reading it. Grammarly can occasionally misunderstand context — for example, suggesting changes to dialogue, poetry, or intentional informal writing. Always read the suggestion and decide for yourself whether it improves your writing.`,
      },
    ],
  },
  {
    slug: `zotero-research-citation`,
    title: `Manage Research Sources and Citations Automatically with Zotero`,
    excerpt: `Zotero is a free tool that saves your research sources with one click and generates bibliographies in APA, MLA, or Chicago format automatically in Word or Google Docs.`,
    category: `essential-skills`,
    tags: [`Zotero`, `citations`, `research`, `bibliography`, `college`],
    readTime: `7 min`,
    thumbnailEmoji: `📄`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Zotero is a free, open-source tool used by millions of researchers, students, and academics to collect, organize, and cite their sources. Instead of manually copying author names, publication dates, and URLs into your bibliography, Zotero does it for you — automatically capturing all the necessary citation information from a webpage, library database, or PDF with a single click.

Once you have saved sources to Zotero, you can insert properly formatted citations into Word documents or Google Docs using a Zotero plugin. When you are done writing, Zotero generates your full bibliography in whatever citation style your assignment requires — APA, MLA, Chicago, Harvard, and hundreds of others.

Zotero runs as a desktop application on Windows and Mac. The Zotero Connector, a browser extension, is what allows you to save sources with one click as you browse the web or academic databases. Both are free.

One of Zotero's most useful features is its ability to read PDFs and detect the citation information automatically. If you download a journal article PDF, you can drag it into Zotero and it will find the title, authors, journal name, volume, and publication date without you needing to type anything.

Zotero also syncs your library across devices with a free account (up to 300 MB of file storage, with paid storage options for larger libraries). This means you can save sources on your laptop and access them later on a library computer.

For long research papers or projects with dozens of sources, Zotero saves hours of formatting work and reduces citation errors significantly.`,
    steps: [
      {
        title: `Download and install Zotero and the browser connector`,
        content: `Go to Zotero.org and click "Download." Download both the Zotero desktop app and the "Zotero Connector" for your browser (Chrome, Firefox, Edge, or Safari). Install the desktop app first, then add the browser connector extension. Create a free Zotero account on the website for syncing. The entire process takes about 5 minutes.`,
        tip: `Quick Tip: Make sure the Zotero desktop app is open and running whenever you want to save sources from your browser. The browser connector communicates with the desktop app to add items to your library.`,
      },
      {
        title: `Save a source with one click`,
        content: `Navigate to a webpage, academic article, news article, or library database entry you want to cite. Look for the Zotero Connector icon in your browser toolbar — it changes shape based on the type of page (a document icon for articles, a book for library records, a webpage icon for general sites). Click it to save the source. Zotero will automatically extract the title, author, date, and URL and add it to your library.`,
        tip: `Quick Tip: On JSTOR, Google Scholar, PubMed, and most university library databases, Zotero can save a source with all complete citation information including volume, issue, and page numbers. This is far more reliable than saving from a general web search.`,
      },
      {
        title: `Organize sources into collections`,
        content: `In the Zotero desktop app, you will see your saved items in the center panel. Right-click "My Library" in the left panel and select "New Collection." Give it a name matching your project — for example, "History Paper" or "Science Fair Sources." Drag items from the center panel into your collection to organize them. You can have multiple collections for different classes or projects, and the same source can appear in more than one collection.`,
      },
      {
        title: `Install the Zotero plugin for Word or Google Docs`,
        content: `To insert citations while writing, you need the Zotero word processor plugin. For Microsoft Word, the plugin installs automatically when you install Zotero — open Word and look for a "Zotero" tab in the toolbar ribbon. For Google Docs, open the Zotero desktop app, go to Edit → Preferences → Cite → Word Processors, and click "Install Google Docs Add-on." Refresh your Google Doc and you will see a Zotero menu in the toolbar.`,
      },
      {
        title: `Insert a citation in your document`,
        content: `In your Word document or Google Doc, place your cursor where you want a citation to appear. Click "Add/Edit Citation" from the Zotero toolbar or menu. A search box appears — type the author's name or the title of the source, and Zotero will find it in your library. Click the matching source and press Enter. Zotero inserts the properly formatted in-text citation automatically.`,
        warning: `Before inserting your first citation, Zotero will ask you to choose a citation style. Select the style required by your class — APA, MLA, or Chicago are the most common. You can change the style later and Zotero will reformat all citations throughout the document automatically.`,
      },
      {
        title: `Generate your bibliography`,
        content: `When your paper is finished, place your cursor at the end of the document where the bibliography or works cited page should go. Click "Add/Edit Bibliography" in the Zotero toolbar. Zotero will insert a complete, properly formatted list of every source you cited in the document. If you add or remove citations later, the bibliography updates automatically. This eliminates the most common citation mistakes caused by manually formatting bibliographies.`,
        tip: `Quick Tip: After generating your bibliography, always read through it once. Zotero is accurate most of the time, but occasionally a source will have incomplete information if the original webpage was missing certain details. It is faster to fix a few entries than to format an entire bibliography from scratch.`,
      },
    ],
  },
  {
    slug: `microsoft-teams-edu-guide`,
    title: `How Students Use Microsoft Teams for School`,
    excerpt: `Microsoft Teams for Education is where many students find their class materials, submit assignments, join video lessons, and message their teachers — all in one place.`,
    category: `essential-skills`,
    tags: [`Microsoft Teams`, `school`, `education`, `classes`, `assignments`],
    readTime: `6 min`,
    thumbnailEmoji: `🎓`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Microsoft Teams for Education is the version of Teams that schools use to run their digital classroom. If your school uses Microsoft 365 (formerly Office 365), your teachers may be posting assignments, sharing documents, and hosting video lessons through Teams. This guide explains the key parts of Teams that students use most.

When your teacher creates a class in Teams, they will give you either a link to join or a 6-digit team code. Once you join, the class appears in your list of Teams and you can access everything the teacher has shared.

Teams is available as a desktop app for Windows and Mac, a mobile app for iPhone and Android, and a web app you can use in any browser at teams.microsoft.com. The desktop app generally works best for video calls and assignments, but the mobile app is convenient for checking notifications and reading materials on the go.

One thing that confuses many new users is the difference between a "channel" and a "chat." Channels are spaces within a class team — your teacher might have a General channel for announcements, a Homework Help channel, and so on. Everything posted in a channel is visible to the whole class. Chat (private messages) are one-on-one or small group conversations that only the people in the chat can see.

If your school uses both Teams and another system like Canvas or Schoology, Teams is usually where live communication and video calls happen, while the other system handles grades and assignment submission. Ask your teacher which system to use for turning in work.`,
    steps: [
      {
        title: `Sign in and join your class team`,
        content: `Open Microsoft Teams (the app or teams.microsoft.com) and sign in with your school email address and password. If your teacher shared a join link, click it to enter the class. If they gave you a code, click "Join or create a team" on the Teams page, select "Join a team with a code," enter the code, and click Join. The class will appear in your Teams list on the left side.`,
        tip: `Quick Tip: Your school email usually ends in your school's name followed by .edu — for example, student@lincoln.edu. If you are unsure of your credentials, contact your school's IT help desk.`,
      },
      {
        title: `Find and read course materials`,
        content: `Click on your class team and look at the tabs at the top of the screen. The "Posts" tab shows announcements and discussions. The "Files" tab is where teachers upload documents, slides, and reading materials. You can also look for a "Class Notebook" tab, which is a shared OneNote notebook where teachers post notes organized by topic or week.`,
        tip: `Quick Tip: Pin important files to your own Teams account by right-clicking a file and selecting "Pin." Pinned files appear at the top of the Files tab so you do not have to search for them each time.`,
      },
      {
        title: `View and submit assignments`,
        content: `Click the "Assignments" tab at the top of your class. You will see a list of all assigned work, including due dates and whether each assignment is complete. Click any assignment to see the full instructions and any attached files. When you are ready to turn it in, attach your completed file or type your response in the text box (depending on how your teacher set it up), then click the "Turn in" button.`,
        warning: `Clicking "Turn in" submits your work immediately. Make sure your file is fully complete and saved before turning it in. Some teachers do not allow resubmissions after the due date.`,
      },
      {
        title: `Join a class video meeting`,
        content: `When your teacher starts a class video call, you will see a notification in Teams and a "Join" button in the class's Posts channel. Click Join to enter the meeting. Before entering, you will see a preview screen where you can turn your camera and microphone on or off. During the meeting, use the "Raise Hand" button (a hand icon in the meeting toolbar) to let the teacher know you want to speak without interrupting.`,
        tip: `Quick Tip: If your internet connection is slow, turning off your camera (while keeping your microphone on) can significantly improve call quality for everyone in the meeting.`,
      },
      {
        title: `Check your grades and feedback`,
        content: `After your teacher grades an assignment, click the Assignments tab and look for assignments marked as "Returned." Click the assignment to see your grade and any written feedback from your teacher. For detailed comments on a document, open the attached file — teachers can leave comments directly in Word documents or PDFs through Teams.`,
      },
      {
        title: `Message your teacher or classmates`,
        content: `To send a private message to your teacher, click the chat icon (speech bubble) on the left sidebar in Teams, then click "New Chat" and type your teacher's name. Type your message and press Enter to send. For class-wide discussion questions, post in the General channel of your class so all classmates and the teacher can see and respond.`,
        tip: `Quick Tip: When messaging a teacher, always include your full name, class name, and a clear description of your question. Teachers often teach many classes and may not immediately recognize your account name.`,
      },
    ],
  },
  {
    slug: `canvas-lms-student-guide`,
    title: `Navigate Your School's Canvas Learning System as a Student`,
    excerpt: `Canvas is used by thousands of colleges and schools to post assignments, grades, and course materials. This guide walks you through the most important features you will use every day.`,
    category: `essential-skills`,
    tags: [`Canvas`, `LMS`, `school`, `assignments`, `grades`],
    readTime: `6 min`,
    thumbnailEmoji: `🏫`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Canvas is a learning management system (LMS) used by thousands of colleges, community colleges, and K-12 schools across the United States. If your school uses Canvas, it is where your teachers or professors post course materials, collect assignments, post grades and feedback, and communicate with students. Think of it as your school's central hub for everything academic.

You access Canvas through your school's Canvas website — usually something like yourschool.instructure.com — using the username and password provided by your school. Many schools also support logging in with your Google or Microsoft school account.

Canvas works in any modern web browser on a computer, and there is also a Canvas Student app for iPhone and Android that lets you check assignments and grades on your phone. The mobile app is convenient for quick checks, but using the full website on a computer is better for reading course documents and submitting assignments.

Every course in Canvas has its own structure set up by the professor. Some professors organize content by week (Week 1, Week 2), others by topic or chapter, and others use a simple list. There is no single "right" layout — your professor decides what works best for their class. The Modules section is usually the most important place to start, as it shows all required readings, videos, and assignments in order.

Canvas also has a built-in inbox for messaging your instructor directly, a calendar that shows all your due dates from all your courses in one view, and a notification system that can send you email or text alerts when your grades are posted or a new assignment is added.`,
    steps: [
      {
        title: `Log in to Canvas`,
        content: `Open your web browser and go to your school's Canvas address — this is usually provided in your welcome email from the school or in your course syllabus. Enter your school username and password. If your school uses Single Sign-On (SSO), click the "Log in with [School Name]" button and you will be redirected to your school's login page. After logging in, you will land on the Canvas Dashboard.`,
        tip: `Quick Tip: Bookmark your Canvas login page in your browser so you can get there quickly each day without searching for it.`,
      },
      {
        title: `Explore the Dashboard and find your courses`,
        content: `The Dashboard shows cards for each of your enrolled courses. Click any course card to open that course. If you do not see a course you expected, check the "Courses" menu in the left sidebar and click "All Courses" — sometimes courses are published late or need to be favorited to appear on the Dashboard. Inside a course, look at the left sidebar for navigation links: Home, Modules, Assignments, Grades, and so on.`,
        tip: `Quick Tip: Click the star icon on any course to "favorite" it, which keeps it visible on your Dashboard all semester. Unfavorited courses may disappear from the Dashboard even though you are still enrolled.`,
      },
      {
        title: `Read course materials in Modules`,
        content: `Click "Modules" in the course sidebar. Modules show your course content organized in the order your professor intends. Each module may contain pages to read, videos to watch, files to download, and assignments to complete. Click any item to open it. Work through the modules in order — some modules are locked until you complete the previous one.`,
      },
      {
        title: `Submit an assignment`,
        content: `Click "Assignments" in the course sidebar to see all assigned work and their due dates. Click an assignment to see the full instructions. Look for the "Submit Assignment" button in the upper right area of the assignment page. Depending on the assignment type, you will either upload a file from your computer, type your response in a text box, or paste a URL. After submitting, you will see a confirmation message and a receipt with a timestamp.`,
        warning: `Once you submit an assignment, some professors do not allow resubmissions. Read the assignment instructions carefully to see if resubmissions are allowed. If you submit the wrong file, message your professor immediately through the Canvas Inbox.`,
      },
      {
        title: `Check your grades and instructor feedback`,
        content: `Click "Grades" in the course sidebar to see your current scores for all graded work. Click on any assignment score to see detailed feedback from your instructor. If your professor left written comments or used a rubric, those will appear here. The Grades page also shows your current total grade in the course so you can track your standing throughout the semester.`,
        tip: `Quick Tip: Turn on Canvas notifications so you get an email when a new grade is posted. Go to your Canvas profile (your name in the upper left), click Notifications, and turn on "Grading" notifications.`,
      },
      {
        title: `Use the Calendar and Inbox`,
        content: `Click the Calendar icon in the Canvas sidebar (looks like a calendar grid) to see all your assignment due dates from all courses displayed together in a monthly or weekly view. This is the fastest way to see what is coming up this week. For messages, click the Inbox icon (an envelope) to send a message to your instructor or read messages they have sent you. Canvas Inbox messages are separate from regular email.`,
      },
    ],
  },
  {
    slug: `wolfram-alpha-student-guide`,
    title: `Use Wolfram Alpha to Solve Math Problems Step by Step`,
    excerpt: `Wolfram Alpha is a free computational engine that can solve math equations, graph functions, convert units, balance chemistry equations, and show step-by-step solutions.`,
    category: `essential-skills`,
    tags: [`Wolfram Alpha`, `math`, `science`, `students`, `calculator`],
    readTime: `5 min`,
    thumbnailEmoji: `🧮`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Wolfram Alpha is a website that works very differently from a search engine. Instead of returning links to websites, it computes answers directly — using mathematics, data, and science. You type a question or equation, and Wolfram Alpha calculates the answer and shows you how it got there.

For students, Wolfram Alpha is especially useful for math and science. You can type in an algebra equation and it will solve for the unknown variable and show each step. You can graph a function. You can calculate statistics from a data set. You can balance a chemistry equation. You can convert units. You can even ask it questions about dates, geography, and statistics, and it will compute an answer from its data.

The free version of Wolfram Alpha at wolframalpha.com shows answers and usually one or two steps of the solution process. The Wolfram Alpha Pro subscription (paid) gives you all the steps for most problems, which is the most valuable feature for learning — not just getting the answer, but understanding how to arrive at it.

There is also a Wolfram Alpha app for iPhone and Android. It works the same as the website but adds a camera feature so you can photograph a written equation and have it computed.

An important note for academic honesty: using Wolfram Alpha to check your work is similar to using a calculator — generally acceptable. Using it to do your homework for you without understanding the process may violate your school's policies. Use it as a learning tool to understand how problems are solved, not as a shortcut to avoid learning.

Wolfram Alpha can also answer practical questions, not just academic ones. You can ask things like "how many calories are in an apple" or "what is the population of Austin, Texas" and get precise, sourced answers.`,
    steps: [
      {
        title: `Go to Wolfram Alpha and type a math problem`,
        content: `Open your browser and go to wolframalpha.com. In the search bar at the top, type your math problem. You can write it in plain language — "solve 3x + 5 = 20" or "factor x^2 + 5x + 6" or "what is the derivative of x^3." Press Enter or click the orange arrow to compute. Wolfram Alpha will display the answer along with related information and, in many cases, a graph.`,
        tip: `Quick Tip: Use the caret symbol (^) for exponents — for example, "x^2" means x squared. Use an asterisk (*) for multiplication if needed, though Wolfram Alpha understands "2x" without it.`,
      },
      {
        title: `Read the step-by-step solution`,
        content: `Below the main answer, look for a "Step-by-step solution" button or section. On the free version, this shows a limited preview of the steps. Click it to see as much of the solution process as the free version allows. If you have a Wolfram Alpha Pro account, you will see every step clearly explained. Even with the free version, the partial steps are often enough to understand the method.`,
        tip: `Quick Tip: Many college and university libraries provide free access to Wolfram Alpha Pro. Check your library's website under "Research Tools" or "Databases" before paying for a subscription.`,
      },
      {
        title: `Graph a function`,
        content: `To graph a mathematical function, type it in the search bar — for example, "graph y = 2x + 3" or "plot sin(x) from -10 to 10." Wolfram Alpha will display an interactive graph. You can zoom in and out by scrolling, and hover over points on the graph to see their exact coordinates. This is useful for visualizing functions in algebra, precalculus, and calculus.`,
      },
      {
        title: `Solve chemistry and science problems`,
        content: `Wolfram Alpha handles many science calculations beyond math. To balance a chemical equation, type "balance H2 + O2 → H2O." To find the molecular weight of a compound, type "molecular weight of NaCl." For physics, you can type "kinetic energy if mass = 5 kg and velocity = 10 m/s." Wolfram Alpha identifies the type of problem and applies the right formula automatically.`,
      },
      {
        title: `Convert units and calculate statistics`,
        content: `For unit conversions, type something like "45 miles per hour in meters per second" or "72 degrees Fahrenheit in Celsius." For statistics, type a list of numbers like "mean, median, standard deviation of 4, 7, 13, 16, 21" and Wolfram Alpha will calculate all the statistical values at once. These features are particularly useful for science labs and data-based assignments.`,
        warning: `Wolfram Alpha occasionally interprets ambiguous input differently than you intended. If the answer does not look right, re-read how it interpreted your question (shown at the top of the results) and rephrase if needed. Adding more context — like "solve for x" or "graph in polar coordinates" — helps it understand what you are asking.`,
      },
    ],
  },
  {
    slug: `samsung-circle-to-search`,
    title: `How to Use Circle to Search on Samsung Galaxy Phones`,
    excerpt: `Circle to Search lets you draw a circle around anything on your Samsung Galaxy phone screen — a plant, a product, or text — and instantly search for it without leaving the app you are in.`,
    category: `phone-guides`,
    tags: [`Circle to Search`, `Samsung`, `Google`, `search`, `Android`],
    readTime: `4 min`,
    thumbnailEmoji: `🔎`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Circle to Search is a feature developed jointly by Google and Samsung that lets you search for anything you see on your phone's screen without switching apps. While you are in the middle of watching a video, scrolling Instagram, or reading a webpage, you can press and hold the home button (or navigation bar at the bottom of the screen) to bring up the Circle to Search tool. Then draw a circle around whatever you want to search — a product, a plant, a person's outfit, a logo, or a piece of text — and Google will search for it instantly.

The results appear in a panel that slides up from the bottom of the screen, so you never fully leave the app you were in. When you dismiss the search panel, you are right back where you were.

Circle to Search can recognize objects in photos and videos (identifying products, plants, dog breeds, landmarks, and more), translate text shown on screen (including text inside images), find where to buy a product you see, identify a song you hear in a video, and search for text you highlight on screen.

This feature is available on Samsung Galaxy S24, S24+, S24 Ultra, S23 series, S22 series, Z Fold 5, Z Fold 6, Z Flip 5, Z Flip 6, A35, and A55, as well as many 2024 and later Galaxy phones. It requires the Google app to be installed (which it is by default on all Galaxy phones).

Circle to Search is different from Google Lens, although it uses similar technology. Google Lens requires you to open the camera or a specific app. Circle to Search works on top of anything already on your screen.`,
    steps: [
      {
        title: `Activate Circle to Search`,
        content: `While looking at anything on your phone screen — a photo, video, webpage, or any app — press and hold the home button (the horizontal bar or pill at the bottom center of the screen). After holding for about one second, the screen edges will light up with a glow effect, indicating Circle to Search is active. The screen will darken slightly to show you are in search mode.`,
        tip: `Quick Tip: On Galaxy phones using gesture navigation (no visible home bar), press and hold the bottom center of the screen where the home button would be. The same glow activation will occur.`,
      },
      {
        title: `Draw a circle or select what you want to search`,
        content: `With Circle to Search active, use your finger to circle, highlight, or tap the item on screen you want to search. You can draw a loose circle around an object in a photo, drag to highlight text, or tap directly on an item. You do not need to be precise — Circle to Search is designed to recognize what you meant even if your circle is wobbly or imprecise.`,
        tip: `Quick Tip: You can also scribble directly on text to highlight it for a search, rather than drawing a circle. This is useful when searching for a specific name, product, or term in an article.`,
      },
      {
        title: `Review your search results`,
        content: `After you select the item, a panel slides up from the bottom of your screen with Google search results related to what you circled. This might include websites, shopping results, image matches, translation, or more information about the object. Scroll through the results. When you are done, tap the X or swipe the panel down to close it and return to what you were doing.`,
      },
      {
        title: `Use it to identify objects and find products`,
        content: `Circle to Search is excellent for identifying things you see in photos or videos. Circle a plant and it will tell you the species. Circle a piece of furniture and it will find similar products to buy. Circle a dog and it will identify the breed. Circle someone's shoes in a social media post and it will find where to buy them. Tap any result to open it in your browser for more details.`,
      },
      {
        title: `Turn off Circle to Search if you prefer`,
        content: `If you find yourself activating Circle to Search accidentally, you can disable it. Go to Settings → Display → Navigation Bar and look for the Circle to Search toggle, or go to Settings → Advanced Features → Circle to Search. Turning it off means holding the home button will no longer trigger the search mode. You can turn it back on any time from the same settings location.`,
      },
    ],
  },
  {
    slug: `samsung-bixby-guide`,
    title: `What Bixby Can Do on Your Samsung Phone`,
    excerpt: `Bixby is Samsung's built-in AI assistant that can set alarms, control your phone settings, identify objects with the camera, and run automated Routines — all with your voice.`,
    category: `phone-guides`,
    tags: [`Bixby`, `Samsung`, `voice assistant`, `AI`, `Galaxy`],
    readTime: `5 min`,
    thumbnailEmoji: `🗣️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Bixby is the built-in voice assistant on Samsung Galaxy phones and tablets. It was designed to control your Samsung device specifically — not just answer questions like a general AI assistant, but actually carry out actions on your phone that you would normally have to do manually through settings menus.

You can wake up Bixby by saying "Hey Bixby" or by pressing and holding the Side key (the power button on the right edge of most Galaxy phones). From there, you can speak commands naturally and Bixby will act on them.

Common things Bixby handles well include: setting alarms and timers, turning settings like Wi-Fi and Bluetooth on or off, calling a contact, taking a photo, turning the screen brightness up or down, opening apps, and reading incoming notifications aloud. For these types of device-control tasks, Bixby is often faster than navigating the Settings app manually.

Bixby Routines is one of the most powerful features. A Routine is an automated series of actions that triggers when a condition is met. For example: "When I connect to my home Wi-Fi, turn on Do Not Disturb and set screen brightness to 30%." Or "When I plug in my phone at night, turn on low-power mode and pause all notifications." You create these without any coding knowledge.

Bixby Vision uses your phone camera to identify objects, translate text in images, and search for products online — similar to Google Lens.

One common question: should you use Bixby or Google Assistant? Both are available on Galaxy phones. Bixby is better for Samsung-specific device controls. Google Assistant is better for answering general questions, controlling smart home devices, and searching the web. Many Galaxy phone users keep both and use each for different tasks.`,
    steps: [
      {
        title: `Wake up Bixby`,
        content: `Say "Hey Bixby" out loud, or press and hold the Side key (the button on the right side of your phone) for one to two seconds. Bixby will show a colored icon at the bottom of your screen and play a chime to indicate it is listening. Speak your command clearly and naturally — you do not need to use specific keywords.`,
        tip: `Quick Tip: If "Hey Bixby" wake word is not working, go to Settings → Advanced Features → Bixby → Voice Wake-Up and make sure it is turned on. You may need to train Bixby to recognize your voice by reading a few sample phrases.`,
      },
      {
        title: `Try common voice commands`,
        content: `Start with simple commands to get comfortable with Bixby. Try: "Hey Bixby, set an alarm for 7 AM tomorrow," "Hey Bixby, turn on Wi-Fi," "Hey Bixby, call Mom," "Hey Bixby, take a selfie," or "Hey Bixby, open Samsung Notes." Bixby will execute each of these immediately. For device settings, Bixby can toggle virtually any setting — try "Hey Bixby, turn on Do Not Disturb" or "Hey Bixby, increase brightness."`,
      },
      {
        title: `Set up a Bixby Routine`,
        content: `Open Settings and search for "Bixby Routines," or go to Settings → Advanced Features → Bixby Routines. Tap the plus (+) button to create a new Routine. Choose a trigger (called "If") — options include time of day, location, connected devices, or phone state. Then choose actions (called "Then") — things like turning on Do Not Disturb, changing the ringer volume, opening an app, or adjusting display settings. Tap the checkmark to save.`,
        tip: `Quick Tip: Samsung provides several pre-made Routine templates to get you started — look for the "Recommended" tab in Bixby Routines. The "Driving mode" and "Bedtime" templates are popular starting points.`,
      },
      {
        title: `Use Bixby Vision with your camera`,
        content: `Open your Samsung Camera app and look for the Bixby Vision icon (an eye shape) in the top toolbar. Tap it to activate Bixby Vision. Point your camera at an object, text, or product. Bixby Vision will identify it and offer options: search for the object online, translate any text it sees, find shopping results for a product, or show restaurant ratings if you point it at a restaurant. Tap any result to learn more.`,
      },
      {
        title: `Reassign or disable the Side key if needed`,
        content: `By default, pressing and holding the Side key opens Bixby. If you find yourself activating Bixby accidentally, or if you prefer the Side key to do something else (like power off the phone), go to Settings → Advanced Features → Side Key. Under "Press and Hold," you can change the action from "Wake Bixby" to "Power Off Menu." This lets you keep Bixby available through voice activation while freeing the physical button for other uses.`,
        tip: `Quick Tip: Even if you reassign the Side key, you can still use Bixby by saying "Hey Bixby" or by opening the Bixby app directly from your app drawer.`,
      },
    ],
  },
  {
    slug: `samsung-galaxy-watch-guide`,
    title: `Get Started with Your Samsung Galaxy Watch`,
    excerpt: `Your Samsung Galaxy Watch tracks steps, heart rate, sleep, and workouts while showing your phone notifications — here is how to set it up and get the most out of it.`,
    category: `health-tech`,
    tags: [`Samsung Galaxy Watch`, `smartwatch`, `health tracking`, `Galaxy`, `Wear OS`],
    readTime: `6 min`,
    thumbnailEmoji: `⌚`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `The Samsung Galaxy Watch is a smartwatch that connects to your Samsung Galaxy phone (or most Android phones) and acts as an extension of your phone on your wrist. It tracks your daily health data — steps, heart rate, sleep quality, stress levels, and workouts — and displays notifications from your phone so you can see who is calling or texting without pulling out your phone.

Galaxy Watches run Wear OS with Samsung's One UI Watch interface layered on top. They connect to your phone via Bluetooth and, on some models, also have their own cellular connection so they can work even when you leave your phone at home.

For health tracking, the Galaxy Watch automatically detects many workouts without you needing to start them — it will notice you have been running or cycling and start tracking automatically. You can also start a workout manually from the watch by pressing the top button and selecting "Workout." Samsung Health, the companion app on your phone, stores all your health data and shows trends over time.

The watch battery typically lasts 1 to 3 days depending on the model and how many features you use. GPS workout tracking drains the battery faster than regular use. Charging uses a wireless charging pad that comes in the box — set the watch on the pad with the screen facing up.

To get the full experience, you should use a Samsung Galaxy phone with the Galaxy Wearable app. The watch will still work with non-Samsung Android phones, but some features are limited. It does not work with iPhones.`,
    steps: [
      {
        title: `Charge the watch before pairing`,
        content: `Place your Galaxy Watch on the included charging pad with the watch face pointing up. The charging pad connects via USB to a power adapter. Allow the watch to charge to at least 50% before starting setup — a partially charged watch can lose power during the initial update process. You will see a battery percentage on the watch screen when it is charging.`,
        tip: `Quick Tip: The circular charging pad must be properly seated — the watch should snap or rest securely in the center. If the charging indicator does not appear within a few seconds, re-seat the watch on the pad.`,
      },
      {
        title: `Download the Galaxy Wearable app and pair the watch`,
        content: `On your Samsung phone, open the Galaxy Wearable app (pre-installed on most Samsung Galaxy phones; search for it in the Galaxy Store if needed). Turn on your Galaxy Watch by pressing and holding the top physical button until the Samsung logo appears. On your phone, the Galaxy Wearable app should detect the watch automatically. Follow the on-screen instructions — you will confirm a PIN shown on the watch and accept Bluetooth pairing. The initial setup takes about 5 to 10 minutes including updates.`,
      },
      {
        title: `Customize your watch face`,
        content: `On the watch, press and hold the watch face to enter watch face editing mode. Swipe left and right to browse available watch faces. Tap one to apply it. For more options, open the Galaxy Wearable app on your phone and tap "Watch Faces" — you can browse hundreds of faces and download new ones from the Galaxy Store. Many watch faces show health stats like heart rate, steps, and battery level directly on the face.`,
        tip: `Quick Tip: Choose a watch face that shows the information you care most about right at a glance — steps, heart rate, and next calendar event are popular choices that save you from navigating into apps frequently.`,
      },
      {
        title: `Set up health tracking`,
        content: `Open the Samsung Health app on your phone (it comes pre-installed on Galaxy phones). Enter your age, height, weight, and daily step goal. The app uses this information to calculate calorie burn and give accurate health insights. Your Galaxy Watch automatically tracks steps, heart rate, and sleep every day once paired — you do not need to start anything manually for basic tracking.`,
      },
      {
        title: `Start a workout`,
        content: `Press the top button on your Galaxy Watch to open the apps menu. Swipe or rotate the bezel (on models with a rotating bezel) to find the Workout app. Tap it, then select your activity — Running, Walking, Cycling, Strength Training, Swimming, and many more. Tap the green start button. The watch will track your heart rate, duration, and GPS route (for outdoor activities). Press the top button at the end to stop and save the workout.`,
        tip: `Quick Tip: Turn on Auto Workout Detection in the Samsung Health app settings. The watch will then automatically begin tracking when it detects you have been doing a workout activity for more than 10 minutes.`,
      },
      {
        title: `Manage notifications and check battery`,
        content: `To control which notifications appear on your watch, open the Galaxy Wearable app on your phone and tap "Notifications." Toggle on the apps whose alerts you want to see on your wrist. During the day, swipe down on the watch face to see your notifications, and swipe up to see health stats. To check battery life, swipe down on the watch face — the battery percentage appears in the top corner. Charge nightly or every two days depending on use.`,
        warning: `Keep Bluetooth turned on your phone for the watch to stay connected and sync data. If you leave Bluetooth off, notifications will not reach the watch and health data will not sync until Bluetooth is re-enabled.`,
      },
    ],
  },
  {
    slug: `google-pixel-tips-guide`,
    title: `Hidden Features on Google Pixel Phones You Should Know`,
    excerpt: `Google Pixel phones have unique features built into Android that you will not find on other phones — including Call Screen, Magic Eraser, Now Playing, and Hold For Me.`,
    category: `phone-guides`,
    tags: [`Google Pixel`, `Android`, `tips`, `features`, `exclusive`],
    readTime: `6 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Google Pixel phones run a version of Android made directly by Google, which means they get features that other Android phones do not have — often for months before any other device, if ever. Many of these features use Google's AI technology to do things that would otherwise require significant manual effort.

Call Screen is one of the most popular: when an unknown number calls you, Google's AI answers on your behalf, asks the caller their name and reason for calling, and shows you a live transcript. You decide whether to accept, decline, or block the caller — all without saying a word.

Hold For Me is a related feature that automatically waits on hold for you. When you call a customer service number and are put on hold music, you can tap "Hold For Me" and put your phone down. Google's AI monitors the call and taps your wrist (through your watch) or vibrates your phone when a human comes on the line.

Magic Eraser is a photo editing tool in Google Photos that removes unwanted people or objects from your photos. You circle what you want removed and Google's AI fills in the background.

Now Playing runs in the background whenever your screen is off, identifying songs that are playing near you without you asking. The song title and artist appear on your lock screen. It works even in airplane mode because the song database is stored on the phone.

Direct My Call shows the numeric options from phone menus (the "Press 1 for billing, Press 2 for support" type) as text on your screen so you can see and tap them instead of listening and guessing.

These features are built into Pixel phones and require no extra apps or subscriptions.`,
    steps: [
      {
        title: `Use Call Screen for unknown calls`,
        content: `When your phone rings with an unknown or spam-likely number, look for the "Screen call" button instead of the green Accept button. Tap Screen Call and Google Assistant will answer, ask the caller who they are and why they are calling, and show you a live transcript of their response. Based on what you read, tap "Accept," "Decline," or "Report as spam." You never have to speak to potential spam callers yourself.`,
        tip: `Quick Tip: Go to the Phone app → Settings → Spam and Call Screen → Call Screen to configure automatic screening for suspected spam calls, so you do not even need to tap anything for clearly suspicious numbers.`,
      },
      {
        title: `Try Hold For Me on customer service calls`,
        content: `When you are on hold with a company and you hear hold music, tap the "Hold for Me" button that appears in the call screen. Your phone will monitor the hold music. When a human agent comes on the line, your phone plays a chime and shows "An agent may be available." Pick up the phone and tap "I'm here" so the agent knows you are ready. This works for most toll-free customer service numbers that use standard hold music.`,
        tip: `Quick Tip: Hold For Me is enabled by default on Pixel phones. To check or manage it, go to Phone app → Settings → Hold For Me.`,
      },
      {
        title: `Remove objects from photos with Magic Eraser`,
        content: `Open Google Photos on your Pixel and select a photo. Tap "Edit" at the bottom, then swipe through the toolbar to find "Tools." Tap Magic Eraser. Google will automatically highlight people or objects in the photo that it thinks you might want to remove. You can tap any highlighted item to erase it, or circle something yourself with your finger. Tap Done, then Save Copy to keep the edited version while preserving the original.`,
      },
      {
        title: `See what song is playing with Now Playing`,
        content: `Now Playing runs automatically in the background on Pixel phones. When a song plays near your phone (from a speaker, TV, or nearby device), the song title and artist name appear quietly on your lock screen or as an ambient display below the clock. No asking or tapping required. To see your history of identified songs, swipe up on your home screen and search for "Now Playing History" — it keeps a log of every song recognized.`,
        tip: `Quick Tip: To turn Now Playing on or off, go to Settings → Display → Lock Screen → Now Playing. It is on by default and uses only a tiny amount of battery since all processing happens on-device.`,
      },
      {
        title: `Use Direct My Call for automated phone menus`,
        content: `When you call a company that uses an automated phone menu ("Press 1 for English, Press 2 for billing"), Direct My Call transcribes the options as text on your screen in real time. You can tap the number on screen instead of listening for the right option. This feature activates automatically when you call supported numbers (most 1-800 and toll-free numbers). Look for the transcription to appear in the call screen within a few seconds of the automated menu starting.`,
      },
      {
        title: `Transcribe recordings with the Pixel Recorder app`,
        content: `The Recorder app on Pixel phones (pre-installed) records audio and simultaneously creates a full text transcript. Tap the screen during recording to add bookmarks at important moments. After recording, you can search the transcript for keywords — for example, finding the moment in a meeting where someone mentioned a specific topic. Transcripts are stored locally on the phone and can be shared as a text file. This is useful for lectures, interviews, and meetings.`,
        tip: `Quick Tip: You can search your old Recorder transcripts from the main Recorder app screen. Tap the search bar and type any word that was spoken — Recorder finds every recording that contains it.`,
      },
    ],
  },
  {
    slug: `pixel-call-screen-guide`,
    title: `How to Use Google Pixel's Call Screen to Block Spam Calls`,
    excerpt: `Call Screen on Google Pixel lets Google's AI answer unknown calls for you, show you a live transcript of what the caller says, and help you decide whether to pick up — without saying a word.`,
    category: `phone-guides`,
    tags: [`Call Screen`, `Pixel`, `spam calls`, `Google`, `Android`],
    readTime: `5 min`,
    thumbnailEmoji: `📞`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Spam phone calls are one of the most frustrating parts of having a phone. Scammers, telemarketers, and robocallers can call dozens of times a day, and the caller ID often shows "Spam Likely" or an unknown number — but you never know if it might be an important call you actually need to take.

Google Pixel's Call Screen feature solves this by letting Google's AI assistant answer the call first. Instead of choosing between answering or ignoring, you can tap "Screen call" and Google will ask the caller who they are and why they are calling. You watch the transcript live on your screen. If it turns out to be your doctor's office or a real person you want to speak to, you accept the call. If it is a robocall or scammer, you decline or report it as spam — all without ever speaking yourself.

For businesses, doctor's offices, and legitimate callers, they will hear a message like "Hi, the person you are calling is using a screening service. Please state your name and reason for calling after the tone." Most real callers are fine with this and will leave their reason.

Hold For Me is a related feature for when you call a company and get put on hold. Instead of waiting with your ear to the phone, Google AI waits on hold for you and alerts you when a human picks up.

Both features are built into Pixel phones (Pixel 3 and later) and work on all US phone networks. They are free and require no additional apps.

These features have collectively saved Pixel users thousands of hours by filtering spam and reducing time spent on hold.`,
    steps: [
      {
        title: `Receive an unknown call and tap Screen Call`,
        content: `When your Pixel phone rings with an unknown, unrecognized, or "Spam Likely" number, your screen will show three buttons: the green Accept button, the red Decline button, and a gray "Screen call" button. Tap "Screen call." Your phone will not ring again — instead, Google Assistant picks up and says "Hi, the person you are calling is using a screening service. Please state your name and reason for calling after the tone."`,
        tip: `Quick Tip: Do not worry about missing real callers. Legitimate callers — your doctor, your child's school, a business — will leave their name and reason, and you will see it in the transcript and have a chance to accept.`,
      },
      {
        title: `Read the live transcript`,
        content: `While Google Assistant handles the caller, a live transcript appears on your screen in real time showing exactly what the caller is saying. You can read along and decide immediately whether this is a call you want to take. The transcript is accurate enough for most spoken responses. You will see the caller's name if they say it, or you will see a robocall script if it is an automated scammer.`,
      },
      {
        title: `Accept, decline, or report`,
        content: `At the bottom of the Call Screen transcript, you have several buttons: "Accept" to join the call and speak to the person, "Decline" to hang up silently without the caller knowing you screened them, "Decline and report spam" to hang up and add the number to Google's spam database, and quick reply options like "I'll call you back" that play a spoken message to the caller. Tap whichever action fits the situation.`,
        warning: `When you accept a screened call, you join mid-call and the caller will hear you immediately. Say hello right away — there is no additional hold period after you tap Accept.`,
      },
      {
        title: `Set up automatic screening for suspected spam`,
        content: `You can configure Call Screen to automatically screen calls marked as "Spam Likely" without you having to tap anything. Open the Phone app, tap the three-dot menu in the upper right, and go to Settings → Spam and Call Screen → Call Screen. Turn on "Automatically screen calls from suspected spam numbers." These calls will be screened automatically, and you will get a notification showing the transcript only if the caller says something — robocalls that hang up immediately will be silently declined.`,
        tip: `Quick Tip: You can also enable automatic screening for calls from numbers not in your contacts. This is a stronger filter that screens any number you have not saved, not just flagged spam numbers. It is useful if you get many unknown calls.`,
      },
      {
        title: `Use Hold For Me when you call a business`,
        content: `When you call a customer service line and hear "Your wait time is approximately 20 minutes," tap the "Hold for Me" button that appears in the call screen on your Pixel. Your phone will listen to the hold music. You can put the phone down and do other things. When a human agent comes on the line, your phone vibrates and plays a chime, and you see "An agent may be available" on screen. Tap "I'm here" and the agent will hear you respond.`,
      },
      {
        title: `Review your Call Screen history`,
        content: `Open your Phone app and look at your recent calls. Calls that were screened show a transcript icon next to them. Tap any screened call to read the full transcript of what the caller said. This is useful if you declined a call but later want to see what the person said, or if you want to confirm that a screened number was actually spam before blocking it permanently.`,
        tip: `Quick Tip: If a screened call turns out to be someone important — like a contractor calling from a work phone — save their number to your contacts. Next time they call, Call Screen will recognize them as a saved contact and ring your phone normally without screening.`,
      },
    ],
  },
];
