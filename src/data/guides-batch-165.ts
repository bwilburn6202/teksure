import { Guide } from './guides';

export const guidesBatch165: Guide[] = [
  {
    slug: "how-to-check-app-camera-microphone-permissions",
    title: "How to Check Which Apps Can Access Your Camera and Microphone",
    excerpt: "Learn how to see which apps have permission to use your camera or microphone — and how to turn off access for apps you no longer trust.",
    body: `Your phone's camera and microphone are powerful tools, but they can also be used by apps without you realizing it. Some apps ask for camera or microphone access for good reasons — like a video calling app or a voice recorder. But other apps may request access even when they have no real need for it.

Checking your permissions regularly is one of the best things you can do to protect your privacy. This guide walks you through how to review and manage these settings on both iPhone and Android.

**Why this matters**

When you install an app, it may ask for permission to use your camera or microphone. You might tap "Allow" without thinking much about it. Over time, you may have dozens of apps with this access — including apps you rarely use or no longer trust.

An app with camera access can theoretically take photos or scan your surroundings. An app with microphone access could pick up your conversations. Most apps use these permissions for completely normal reasons, but it is still a good idea to check who has access and remove permissions from apps that do not need them.

**On iPhone**

Go to Settings, then scroll down and tap Privacy & Security. Tap Camera to see a list of all apps that have requested camera access. You will see a green toggle next to each app. You can tap the toggle to turn off camera access for any app. Then go back and tap Microphone to do the same for microphone permissions.

You can also check individual apps. In Settings, scroll down to the app name and tap it. You will see a list of everything it has permission to access, including the camera and microphone.

**On Android**

Open the Settings app and tap Privacy (on some phones it is labeled Permissions or Apps). Tap Permission Manager. Then tap Camera or Microphone. You will see a list of apps and whether they have permission set to "Allow," "Allow only while using the app," or "Deny."

To change a permission, tap the app name and choose a different setting. "Allow only while using the app" is a good middle-ground for apps that genuinely need the camera or microphone but should not have it running in the background.

**Quick Tip:** If an app you rarely use has camera or microphone access, it is perfectly safe to remove that permission. The app will still work for most things — it will just ask you again if it ever needs camera or microphone access in the future.

**A good habit to build**

Set a reminder to check your camera and microphone permissions every few months. It only takes about five minutes and helps you stay in control of what your phone is sharing with outside apps.`,
    category: "safety-guides",
    tags: ["privacy", "camera", "microphone", "permissions", "iPhone", "Android", "app permissions"],
    thumbnailEmoji: "📷",
    difficulty: "Beginner",
    readTime: "5 min",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    steps: [
      {
        title: "Open your phone's Settings app",
        content: "Find the Settings app on your phone — it looks like a gear icon. Tap it to open your phone's main settings menu."
      },
      {
        title: "Go to Privacy or Permission settings",
        content: "On iPhone, tap Privacy & Security. On Android, tap Privacy or Permission Manager (the exact name depends on your phone model and Android version).",
        tip: "If you cannot find Privacy right away, use the search bar at the top of Settings and type the word \"privacy.\""
      },
      {
        title: "Tap Camera to review which apps have access",
        content: "Tap Camera from the Privacy menu. You will see a list of every app that has ever requested camera access. A green toggle (iPhone) or \"Allow\" label (Android) means the app currently has permission."
      },
      {
        title: "Turn off camera access for apps that do not need it",
        content: "For any app you do not recognize, no longer use, or that has no reason to use your camera, tap the toggle (iPhone) or tap the app name and select Deny (Android). The app will no longer be able to access your camera.",
        warning: "If you turn off camera access for an app like your phone's built-in Camera app or a video calling app, that app will stop working correctly. Only remove access from apps that have no obvious reason to use the camera."
      },
      {
        title: "Go back and repeat for Microphone",
        content: "After reviewing camera permissions, go back to the Privacy menu and tap Microphone. Go through the same process — review the list and turn off access for any apps that should not be listening."
      },
      {
        title: "Check back every few months",
        content: "New apps get installed over time and permissions can change with updates. Make a habit of checking your camera and microphone permissions every few months to keep your settings current."
      }
    ]
  },
  {
    slug: "how-to-set-up-find-my-iphone",
    title: "How to Set Up Find My on iPhone to Locate a Lost Phone",
    excerpt: "Set up the Find My feature on your iPhone so you can track it on a map, lock it, or erase it if it ever gets lost or stolen.",
    body: `Losing your iPhone can be a stressful experience, but Apple's Find My feature gives you a real chance of getting it back. Once set up, Find My lets you see your phone's location on a map, play a sound to help you find it nearby, lock it with a message for whoever finds it, or erase everything on it remotely if necessary.

The good news is that setting up Find My takes only a few minutes, and once it is turned on, it works automatically in the background.

**What Find My does**

Find My is a free Apple service that connects your iPhone to your Apple Account (formerly called Apple ID). When you sign in to your Apple Account on your iPhone, Find My can use the phone's GPS to report its location to Apple's servers. You can then log in from any web browser at icloud.com or use the Find My app on another Apple device to see where your phone is.

Find My also works even when your iPhone is offline, thanks to a feature called the Find My network. Hundreds of millions of Apple devices quietly and anonymously relay location signals, so your phone can often be found even without a cellular or Wi-Fi connection.

**Before you start**

You will need an Apple Account to use Find My. If you already have one — you use it for the App Store, iCloud email, or FaceTime — you are ready to go. If you do not have one yet, you can create one for free at appleid.apple.com.

**Turning on Find My**

Open the Settings app on your iPhone. At the very top, tap your name (this is your Apple Account area). Then tap Find My. On the next screen, tap Find My iPhone and make sure the main toggle at the top is turned on (green). You should also turn on Send Last Location, which automatically saves your phone's last known position to Apple when the battery is about to die.

**How to find your phone if it goes missing**

If your phone goes missing, go to icloud.com/find on any computer or phone, sign in with your Apple Account, and click Find Devices. You will see your iPhone on a map. From there you can play a sound, put it in Lost Mode (which locks the phone and displays your contact information), or erase it entirely.

**Quick Tip:** Find My also works for your iPad, Mac, AirPods, and Apple Watch — all from the same Find My app or iCloud website.`,
    category: "phone-guides",
    tags: ["Find My", "iPhone", "lost phone", "Apple", "location", "iCloud", "security"],
    thumbnailEmoji: "📍",
    difficulty: "Beginner",
    readTime: "6 min",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    steps: [
      {
        title: "Open Settings on your iPhone",
        content: "Tap the Settings app — it looks like a gray gear icon. You will find it on your home screen or in your app library."
      },
      {
        title: "Tap your name at the top of Settings",
        content: "At the very top of the Settings menu, you will see your name and, below it, your Apple Account email address. Tap your name to open your Apple Account settings.",
        tip: "If you are not signed in to an Apple Account, you will see a prompt to sign in. You need an Apple Account for Find My to work. Creating one is free at appleid.apple.com."
      },
      {
        title: "Tap Find My",
        content: "In your Apple Account settings, scroll down until you see Find My. Tap it to open the Find My settings page."
      },
      {
        title: "Tap Find My iPhone and turn it on",
        content: "Tap Find My iPhone on the next screen. Make sure the toggle at the top is turned on — it should be green. If it is gray, tap it once to turn it on."
      },
      {
        title: "Turn on Send Last Location",
        content: "On the same screen, you will see an option called Send Last Location. Turn this on as well. When your battery is critically low, your phone will automatically send its last known location to Apple — which can be very helpful if your phone runs out of battery before you find it."
      },
      {
        title: "Test it from iCloud.com",
        content: "On a computer or another phone, go to icloud.com and sign in with your Apple Account. Click Find Devices. You should see your iPhone appear on a map. This confirms that Find My is working correctly.",
        tip: "You can also use the free Find My app on any other iPhone, iPad, or Mac where you are signed in with the same Apple Account."
      }
    ]
  },
  {
    slug: "how-to-use-google-assistant-android",
    title: "How to Use Google Assistant for Hands-Free Help on Android",
    excerpt: "Learn how to activate and use Google Assistant on your Android phone to get answers, set reminders, make calls, and more — without typing a word.",
    body: `Google Assistant is a voice-activated helper built into most Android phones. You can ask it questions, set reminders, send text messages, make phone calls, get directions, and much more — all by speaking out loud. You do not need to type anything.

This is especially helpful if you find small touchscreen keyboards frustrating, if your hands are busy, or if you simply prefer talking to typing.

**What Google Assistant can do**

Google Assistant can answer questions like "What is the weather today?" or "How many cups are in a gallon?" It can set alarms and reminders, so you never forget a doctor's appointment. It can call a contact from your phone's address book, send a text message by voice, or read incoming messages aloud. It can also open apps, play music, get driving directions, and tell you the news.

Think of it as a helpful assistant who is always available and never gets impatient when you ask the same question twice.

**How to start Google Assistant**

There are two ways to open Google Assistant on an Android phone.

The first way is by voice. Say "Hey Google" out loud — your phone should respond by opening the Assistant interface. You will see a colored bar or a microphone icon appear at the bottom of the screen. That means the Assistant is listening and ready for your question or request.

The second way is by pressing and holding the home button at the bottom of your screen. On some newer Android phones, you can also swipe up from the bottom corner of the screen.

**Turning on "Hey Google" voice activation**

If saying "Hey Google" does not work, the feature may not be turned on yet. Open the Google app on your phone (it has a colorful "G" icon). Tap your profile picture in the top right corner and then tap Settings. Tap Voice and then Voice Match. Turn on the toggle for Hey Google. Your phone may ask you to say a few phrases so it can learn to recognize your voice.

**Tips for talking to Google Assistant**

Speak in plain, natural sentences. You do not need to use special commands. For example, you can say "Call my daughter Sarah" or "Remind me to take my medication at 8 AM" or "What movies are playing nearby tonight?"

If the Assistant misunderstands you, you can tap the microphone icon and try again, or type your question instead.

**Privacy note**

Google Assistant only activates when it hears the words "Hey Google" — it is not continuously recording your conversations. If you would prefer not to use voice activation, you can leave Hey Google turned off and open the Assistant by pressing and holding the home button instead.

**Quick Tip:** You can ask Google Assistant to call a contact by name. Say "Hey Google, call John Smith" and it will find that person in your contacts and dial the number for you — no need to search through your contacts list.`,
    category: "phone-guides",
    tags: ["Google Assistant", "Android", "voice assistant", "hands-free", "reminders", "voice commands"],
    thumbnailEmoji: "🎙️",
    difficulty: "Beginner",
    readTime: "6 min",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    steps: [
      {
        title: "Check if Google Assistant is available on your phone",
        content: "Google Assistant comes pre-installed on most Android phones. To check, press and hold the home button at the bottom of your screen. If a colored bar or microphone icon appears, Google Assistant is ready to use."
      },
      {
        title: "Set up \"Hey Google\" voice activation",
        content: "Open the Google app on your phone (it has a colorful \"G\" on a white background). Tap your profile photo in the top right corner, then tap Settings. Tap Voice, then Voice Match, and turn on Hey Google. Follow the steps to teach the Assistant your voice.",
        tip: "You will be asked to say \"Hey Google\" a few times during setup. This helps the Assistant recognize your voice and not respond to voices on TV or nearby conversations."
      },
      {
        title: "Say \"Hey Google\" to open the Assistant",
        content: "Once voice activation is set up, say \"Hey Google\" out loud from anywhere — even when your screen is off (on some phones). The Assistant will open and show a microphone icon, which means it is listening."
      },
      {
        title: "Ask your first question",
        content: "Try saying something like \"Hey Google, what is the weather today?\" or \"Hey Google, set a reminder for 3 PM.\" Speak in your normal voice at a comfortable pace. You do not need to memorize any special commands.",
        tip: "If the Assistant does not hear you correctly the first time, tap the microphone icon on screen and try again."
      },
      {
        title: "Try making a hands-free phone call",
        content: "Say \"Hey Google, call [name]\" — for example, \"Hey Google, call my son Michael.\" The Assistant will look up that contact in your phone and place the call. This is one of the most useful features for everyday use."
      },
      {
        title: "Explore other helpful commands",
        content: "Some other things you can try: \"Hey Google, what time is it in Los Angeles?\" — \"Hey Google, send a text to Linda saying I am on my way.\" — \"Hey Google, open the Camera app.\" — \"Hey Google, how do I get to the nearest pharmacy?\"",
        tip: "You can also type your question instead of speaking. Tap the keyboard icon at the bottom of the Assistant screen if you prefer typing."
      }
    ]
  },
  {
    slug: "how-to-record-a-video-iphone",
    title: "How to Record a Video on Your iPhone",
    excerpt: "Learn how to open the Camera app, switch to video mode, and record a video on your iPhone — including tips for steady footage and managing storage.",
    body: `Recording a video on your iPhone is something you can do in just a few seconds once you know where to look. Whether you want to capture a grandchild's birthday, record a message for a friend, or save a memory from a trip, your iPhone's camera takes high-quality video that you can watch, share, or keep for years.

This guide walks you through everything you need to know — from opening the Camera app to stopping the recording and finding the video afterward.

**Opening the Camera app**

The Camera app is the built-in app Apple includes on every iPhone. It has an icon that looks like a small camera. You will find it on your home screen, or you can swipe left on the lock screen to open it quickly without even unlocking your phone.

When the Camera app opens, it starts in Photo mode by default — you will see a shutter button (a large white circle) at the bottom of the screen. This takes still photos.

**Switching to Video mode**

To record a video instead of taking a photo, you need to switch from Photo mode to Video mode. At the bottom of the screen, you will see a row of options: Photo, Video, Portrait, and others. Swipe the row to the right or tap the word Video to switch to video mode.

Once you are in Video mode, the shutter button at the bottom changes color — it turns red. That is how you know you are in video mode and ready to record.

**Starting and stopping your recording**

Tap the red button once to start recording. You will see a red dot and a timer appear at the top of the screen — this shows that the video is recording and how long you have been recording.

When you are finished, tap the red button again to stop. The video is saved automatically to your Photos app.

**Tips for better video**

Hold your phone steady — rest your elbows against your body or lean against a wall if possible. Shaky video can be hard to watch. For most videos, holding the phone horizontally (sideways, in landscape mode) gives a wider, more natural-looking picture — though vertical video works well for sharing on social media.

Make sure the camera lens (the small circle on the back of your phone) is clean and not covered by your finger.

**Finding your video after recording**

Once you stop recording, the video is saved to your Photos app. Open Photos, tap Albums at the bottom, and then tap Videos. You will see all your recorded videos there. You can also find your most recent video by tapping the small thumbnail that appears in the bottom left corner of the Camera app right after you finish recording.

**A note about storage**

Videos take up more storage space than photos. A one-minute video in standard quality can be around 150 to 300 megabytes. If your phone storage is getting full, you may want to transfer older videos to a computer or iCloud before recording new ones.

**Quick Tip:** You can record a quick video by pressing and holding the shutter button in Photo mode. Your iPhone will record video for as long as you hold the button, then return to Photo mode when you let go. This is handy for capturing a short moment without switching modes.`,
    category: "phone-guides",
    tags: ["iPhone", "video", "Camera app", "recording", "photos", "Apple"],
    thumbnailEmoji: "🎬",
    difficulty: "Beginner",
    readTime: "5 min",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    steps: [
      {
        title: "Open the Camera app on your iPhone",
        content: "Find the Camera app on your home screen — it looks like a small camera. Tap it to open. You can also swipe left from your lock screen to open the Camera without unlocking your phone first."
      },
      {
        title: "Switch from Photo mode to Video mode",
        content: "When the Camera opens, it is in Photo mode. Look at the bottom of the screen and find the row of words: Photo, Video, Portrait, and others. Tap the word Video or swipe the row to the right until Video is in the center.",
        tip: "You will know you are in Video mode because the large round button at the bottom turns red."
      },
      {
        title: "Tap the red button to start recording",
        content: "Tap the red button once to begin recording. A timer will appear at the top of the screen showing how long you have been recording. A red dot will also appear to confirm that the video is in progress."
      },
      {
        title: "Hold the phone steady and frame your shot",
        content: "Point the camera at whatever you want to record. Hold the phone with both hands if you can, and keep your elbows close to your body to reduce camera shake. For wider shots, try holding the phone horizontally (turn it sideways).",
        tip: "Make sure the camera lens on the back of the phone is not covered by your fingers."
      },
      {
        title: "Tap the red button again to stop recording",
        content: "When you have captured what you wanted, tap the red button again. The recording stops and the video is saved automatically to your Photos app. You will see a small thumbnail of the video appear in the bottom left corner of the Camera screen."
      },
      {
        title: "Find your video in the Photos app",
        content: "Open the Photos app (it has a colorful flower icon). Tap Albums at the bottom of the screen, then scroll down and tap Videos. Your new recording will be there. Tap it to watch it.",
        warning: "Videos take up more storage space than photos. If your phone shows a low-storage warning, consider uploading older videos to iCloud or a computer to free up space."
      }
    ]
  }
];
