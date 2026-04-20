import { Guide } from './guides';

export const guidesBatch31: Guide[] = [
  {
    slug: 'iphone-back-tap-feature',
    title: 'How to Use Back Tap on Your iPhone',
    excerpt: 'Double or triple tap the back of your iPhone to trigger shortcuts, take screenshots, or open apps — no buttons required.',
    body: `Back Tap is one of the most overlooked features on iPhone. By double- or triple-tapping the back of your phone, you can trigger dozens of actions without pressing any buttons. It works on iPhone 8 and later running iOS 14 or newer.\n\nYou can set Back Tap to take a screenshot, go to the Home screen, open Control Center, turn on the flashlight, scroll up or down, or even launch a specific app through Shortcuts. It's especially helpful if you have difficulty pressing the side buttons or reaching the screen with one hand.\n\nOnce set up, you just lightly tap the back of the phone — not a hard knock, just a firm double tap. The phone recognizes it through the motion sensor. It does not trigger accidentally in a case or pocket because it requires a deliberate tapping motion.\n\nThis feature can also be set to run an accessibility action, like toggling AssistiveTouch or Zoom, which helps users who benefit from those tools. You can assign different actions to double-tap and triple-tap independently, giving you two separate shortcuts.\n\nBack Tap works even when the screen is on or off, and it does not interfere with normal phone use. Try setting it to take screenshots first — that is one of the most popular uses.`,
    category: 'phone-guides',
    tags: ['iphone', 'back tap', 'shortcuts', 'accessibility', 'ios tips'],
    readTime: '4 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Settings and find Back Tap',
        content: 'Go to Settings → Accessibility → Touch → Back Tap. This option is near the bottom of the Touch settings page.',
      },
      {
        title: 'Set your Double Tap action',
        content: 'Tap "Double Tap" and choose an action from the list. Popular choices: Screenshot, Home, Scroll Down, or App Switcher.',
        tip: 'If you use a thick case, try Triple Tap instead — the phone detects the taps more reliably.',
      },
      {
        title: 'Set your Triple Tap action (optional)',
        content: 'Tap "Triple Tap" and assign a different action. For example, Double Tap = Screenshot and Triple Tap = Flashlight.',
      },
      {
        title: 'Test it out',
        content: 'Hold your phone normally and give the back two firm taps with your finger. The action should trigger within a second.',
      },
      {
        title: 'Adjust if it is not detecting taps',
        content: 'If the feature seems unreliable, try tapping with the pad of your finger rather than the fingertip. A slightly firmer tap also helps.',
      },
    ],
  },

  {
    slug: 'iphone-namedrop-guide',
    title: 'How to Use NameDrop to Share Your Contact Info',
    excerpt: 'Hold two iPhones close together to instantly share contact details — no typing or texting required. Works on iPhone XS and later.',
    body: `NameDrop is a feature introduced in iOS 17 that lets you share your contact information with another person by simply holding the top edges of two iPhones close together. A glowing animation appears, and both people can choose to share their contact card.\n\nThis works on iPhone XS or newer, and both phones need to be running iOS 17 or later. It uses a combination of Bluetooth and NFC technology to detect when two phones are nearby.\n\nWhen you bring the phones together, you each see a prompt on your screen. You can choose "Share" to send your contact card, or "Receive Only" to get theirs without sharing yours, or "Don't Share" to cancel. Each person is in control — no one's contact is shared without permission.\n\nNameDrop is also useful for sharing AirDrop content like photos or links when you just tap the phones together and then select what to share from the prompt.\n\nIf NameDrop does not appear to work, check that both phones have AirDrop turned on and set to "Everyone for 10 Minutes" or "Contacts Only." NameDrop uses AirDrop under the hood. You may also need to have your Contact Poster set up in the Contacts app.\n\nNameDrop is a great way to exchange numbers at events, with neighbors, or with new friends without the awkward back-and-forth of spelling out phone numbers.`,
    category: 'phone-guides',
    tags: ['iphone', 'namedrop', 'share contacts', 'ios 17', 'airdrop'],
    readTime: '4 min',
    thumbnailEmoji: '🤝',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Make sure both iPhones have iOS 17 or later',
        content: 'Go to Settings → General → Software Update on each phone. NameDrop requires iOS 17 and iPhone XS or newer.',
      },
      {
        title: 'Enable AirDrop on both phones',
        content: 'Open Control Center (swipe down from top-right corner), press and hold the connectivity box in the top-left, then tap AirDrop. Choose "Everyone for 10 Minutes."',
      },
      {
        title: 'Hold the top edges of both phones close together',
        content: `Bring the top of your iPhone within an inch or two of the other phone's top edge. Wait for the glowing animation to appear on both screens.`,
        tip: 'Face both phones upward and bring the tops together — like two phones doing a handshake at the top.',
      },
      {
        title: 'Choose what to share',
        content: `Each person sees a prompt: "Share" (sends your contact card), "Receive Only" (gets theirs, keeps yours private), or "Don't Share" (cancels).`,
      },
      {
        title: 'Confirm the contact was added',
        content: 'Open your Contacts app and look for the new entry. It will include whatever the other person had in their Contact Poster: name, phone, email, and photo.',
      },
    ],
  },

  {
    slug: 'iphone-sound-recognition',
    title: 'How to Set Up Sound Recognition on iPhone',
    excerpt: 'iPhone can listen for sounds like doorbells, smoke alarms, or a baby crying and send you an alert — great for anyone who is hard of hearing.',
    body: `Sound Recognition is an iPhone accessibility feature that uses the microphone to listen for specific sounds in your home and sends a notification when it detects one. It is designed for people who are hard of hearing or deaf, but it is useful for anyone who wants to know when something is happening in another room.\n\nYou can choose from a list of sounds to detect, including:\n- Doorbell\n- Knock at door\n- Fire alarm or smoke detector\n- Carbon monoxide alarm\n- Baby crying\n- Cat or dog sounds\n- Car horn or siren\n- Appliances like a washer or dryer\n\nWhen the phone detects one of the chosen sounds, it sends a banner notification to your screen. You can also have it play a custom sound or flash the screen. For best results, keep the phone nearby in the area where you want to detect sounds.\n\nSound Recognition works in the background and does not use the microphone for recording — Apple processes the audio entirely on your device for privacy. It does use some battery, so be aware of that if you leave it running all day.\n\nThis feature works on iPhone SE (2nd generation) and newer running iOS 14 or later. It is not available on older iPhones that lack the necessary chip for on-device processing.`,
    category: 'phone-guides',
    tags: ['iphone', 'accessibility', 'hard of hearing', 'sound recognition', 'notifications'],
    readTime: '4 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Go to Sound Recognition in Settings',
        content: 'Open Settings → Accessibility → Sound Recognition. Tap the toggle to turn it on.',
      },
      {
        title: 'Choose which sounds to detect',
        content: 'Tap "Sounds" and turn on the sounds you want. For example, enable "Doorbell," "Smoke & Carbon Monoxide Alarm," and "Baby Crying." Toggle each sound individually.',
        tip: 'Start with just two or three sounds at first. Too many can create distracting notifications throughout the day.',
      },
      {
        title: 'Allow Sound Recognition through the notification prompt',
        content: 'If prompted, allow Sound Recognition to send you notifications. Without notifications, the alerts will not appear.',
      },
      {
        title: 'Test the feature',
        content: 'Ring your doorbell or have someone knock and watch for the notification banner at the top of your iPhone screen. The alert shows the sound name and a waveform icon.',
      },
      {
        title: 'Optional: set up custom alerts',
        content: 'You can use the "Custom Alarm" option to upload a specific sound — for example, a unique doorbell tone — if your doorbell is not recognized by the built-in list.',
        warning: 'Sound Recognition is not a safety alarm replacement. Do not rely on it as your sole alert for fire or carbon monoxide — always have working physical detectors.',
      },
    ],
  },

  {
    slug: 'iphone-vehicle-motion-cues',
    title: 'How to Use Vehicle Motion Cues to Reduce Motion Sickness',
    excerpt: `A built-in iPhone feature displays moving dots on screen to reduce motion sickness when you're reading in a car or bus.`,
    body: `Motion sickness happens when what your eyes see does not match what your inner ear feels. When you're a passenger in a moving vehicle and looking at a phone screen, your eyes see a still image but your body feels the car turning, accelerating, and stopping. The mismatch causes nausea for many people.\n\nApple added a feature called Vehicle Motion Cues in iOS 18 to address this. It shows small animated dots along the edges of your screen that move in sync with the vehicle's motion. Your peripheral vision picks up this movement, which helps your brain reconcile what your body is feeling with what your eyes are seeing — reducing or eliminating the sickness.\n\nThe dots are subtle. They sit in the corners of the screen and move in gentle arcs to reflect the car's movements. They do not cover content you are reading or watching.\n\nYou can set Vehicle Motion Cues to turn on automatically (the phone detects when you are in a moving vehicle), always on, or always off. The automatic option works well because it only activates when the phone's sensors detect consistent vehicle-type motion.\n\nThis feature requires iPhone 13 or newer running iOS 18 or later. If you are prone to car sickness, it is worth turning on before a long road trip.`,
    category: 'phone-guides',
    tags: ['iphone', 'motion sickness', 'vehicle motion cues', 'ios 18', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Go to Motion & Orientation in Accessibility',
        content: 'Open Settings → Accessibility → Motion → Vehicle Motion Cues.',
      },
      {
        title: 'Choose your preferred setting',
        content: 'Select "Show Automatically" to let iPhone decide when you are in a vehicle, or choose "Always On" to always display the dots when using the phone.',
        tip: '"Show Automatically" is the best option for most people — it saves battery and does not activate when you are walking or sitting still.',
      },
      {
        title: 'Add it to Control Center for quick access',
        content: 'Go to Settings → Control Center and add "Vehicle Motion Cues" to your included controls. This lets you turn it on with a single tap without digging through Settings.',
      },
      {
        title: 'Test on your next car ride',
        content: `The next time you are a passenger in a car, open your phone and watch for the small dots at the screen edges. They should appear and move with the car's motion.`,
      },
      {
        title: 'Adjust if the dots are distracting',
        content: 'If the dots bother you, switch to "Always Off" in Settings. Some people find the visual helpful and others prefer not to see the dots at all.',
      },
    ],
  },

  {
    slug: 'iphone-screen-distance-guide',
    title: 'How to Use iPhone Screen Distance to Protect Your Eyes',
    excerpt: `Screen Distance warns you when you're holding your iPhone too close to your face — an Apple health feature designed to protect eyesight, especially for kids.`,
    body: `Holding a phone too close to your face, especially in low light, has been linked to increased eye strain and in children, a higher risk of developing nearsightedness (myopia). Apple introduced a feature called Screen Distance in iOS 17 to help address this.\n\nWhen Screen Distance is on, the iPhone's front-facing TrueDepth camera (the same one used for Face ID) monitors the distance between your face and the screen. If you hold the phone closer than about 12 inches for a sustained period, a full-screen alert appears telling you to move the phone farther away. The alert does not go away until you hold the phone at a safe distance.\n\nThis feature is particularly designed for children, and Apple Surface it prominently in Screen Time settings. However, adults who spend hours reading on their phone may also benefit, especially those who tend to hold the device close without realizing it.\n\nScreen Distance does not record video or take photos of you. The distance calculation is done on-device using the depth sensor — Apple does not collect this data.\n\nYou can turn Screen Distance on in Settings under Screen Time. If you already have Screen Time set up, it takes about 30 seconds to enable. If you do not use Screen Time, you can still turn it on without applying any other restrictions.`,
    category: 'phone-guides',
    tags: ['iphone', 'eye health', 'screen distance', 'ios 17', 'screen time'],
    readTime: '3 min',
    thumbnailEmoji: '👁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Screen Time in Settings',
        content: 'Go to Settings → Screen Time. If Screen Time is off, tap "Turn On Screen Time" and follow the prompts. You do not need to set any restrictions to use Screen Distance.',
      },
      {
        title: 'Find Screen Distance',
        content: 'Scroll down to the "Health & Wellbeing" section within Screen Time settings and tap "Screen Distance."',
      },
      {
        title: 'Turn Screen Distance on',
        content: 'Tap the toggle to enable it. A brief explanation appears showing how the feature works. Tap "Continue" to confirm.',
        tip: 'The feature requires a Face ID-capable iPhone (iPhone X or later) since it uses the TrueDepth camera for face distance detection.',
      },
      {
        title: 'Test by holding the phone close',
        content: 'Hold your iPhone about 6 inches from your face for 10-15 seconds. You should see the Screen Distance alert appear asking you to hold the phone farther away.',
      },
      {
        title: 'Respond to alerts in daily use',
        content: `When the alert appears, simply hold the phone at arm's length (about 12+ inches from your face) until it clears. It only takes a moment.`,
      },
    ],
  },

  {
    slug: 'iphone-adaptive-power-mode',
    title: 'How iPhone Manages Battery to Last All Day',
    excerpt: `Learn how Low Power Mode, Optimized Charging, and iPhone's automatic battery management can help you get more battery life without worry.`,
    body: `Modern iPhones have several built-in tools to extend battery life and protect the battery's long-term health. Understanding how they work helps you get the most out of your phone each day.\n\n**Low Power Mode** reduces background activity, disables some visual effects, and slows down mail fetching to stretch your remaining battery. You can turn it on manually at any time or let your phone offer it automatically when you drop below 20%. It turns off automatically once your battery charges back above 80%.\n\n**Optimized Battery Charging** is on by default on newer iPhones. It learns your charging habits and slows the charging speed when your battery reaches 80%, completing the charge to 100% just before you typically wake up. This reduces wear on the battery over time because lithium batteries degrade faster when kept at 100% for long periods.\n\n**Background App Refresh** is another battery drain. Go to Settings → General → Background App Refresh and turn it off for apps that do not need to update in the background — things like games or shopping apps you rarely open.\n\n**Adaptive Power Mode** in iOS 18 goes further by learning your daily usage patterns and automatically managing power. For example, it might reduce screen brightness slightly during times when you typically read, or cut back on location tracking for apps you have not opened in days.\n\nFor people who struggle to make their phone last through the day, combining these tools can easily add an hour or two of use.`,
    category: 'phone-guides',
    tags: ['iphone', 'battery life', 'low power mode', 'battery health', 'charging tips'],
    readTime: '5 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Turn on Low Power Mode when battery gets low',
        content: 'Go to Settings → Battery → Low Power Mode. Or tap the battery icon in Control Center. Turn it on whenever you need to stretch your remaining charge.',
      },
      {
        title: 'Check that Optimized Battery Charging is on',
        content: `Go to Settings → Battery → Battery Health & Charging → Optimized Battery Charging. Make sure this is toggled on. This protects your battery's long-term health.`,
        tip: 'Leave your phone plugged in overnight when possible. Optimized Charging works best with a consistent overnight routine.',
      },
      {
        title: 'Turn off Background App Refresh for unused apps',
        content: 'Go to Settings → General → Background App Refresh. Turn off the feature for apps like games, shopping apps, and social media you do not check frequently.',
      },
      {
        title: 'Check which apps are draining battery',
        content: 'Go to Settings → Battery and scroll down to see battery usage by app over the past 24 hours or 10 days. Any app using more than 20% unexpectedly is worth investigating.',
        warning: 'If an app is using a lot of battery in the background, go to Settings → [App Name] → Background App Refresh and turn it off for that app specifically.',
      },
      {
        title: 'Enable Adaptive Power Mode (iOS 18)',
        content: 'On iPhone 16 or later running iOS 18, go to Settings → Battery. If "Adaptive Power Mode" appears, turn it on. The phone will learn your habits and manage power automatically.',
      },
    ],
  },

  {
    slug: 'iphone-personal-hotspot-guide',
    title: 'How to Use Your iPhone as a Wi-Fi Hotspot',
    excerpt: `Turn your iPhone into a temporary Wi-Fi router so your laptop or tablet can use your phone's data connection — great for travel or areas without Wi-Fi.`,
    body: `When you do not have access to Wi-Fi, your iPhone can share its cellular data connection with other devices like a laptop or iPad. This feature is called Personal Hotspot (or Mobile Hotspot). Your other device connects to your iPhone the same way it would connect to a regular Wi-Fi network.\n\nYou can connect other devices to the hotspot using Wi-Fi, Bluetooth, or a USB cable. Wi-Fi is the most common method. When connected via Wi-Fi, up to five devices can share the connection at once.\n\nPersonal Hotspot uses your cellular plan's data. If you have an unlimited data plan, there are usually no extra charges, though some carriers throttle hotspot speeds after a certain amount of usage. If you have a limited plan, each device connected to the hotspot uses data from your pool — so be careful not to run videos or large downloads through the hotspot unless you have plenty of data left.\n\nYour iPhone will show a blue or green status bar at the top of the screen whenever a device is connected to your hotspot. The battery drains faster while hotspot is active, so plug in if possible.\n\nThis feature works on any iPhone that has a cellular plan. Some carriers may require you to add a hotspot feature to your plan, though most plans include it today. If hotspot appears grayed out, contact your carrier.`,
    category: 'phone-guides',
    tags: ['iphone', 'hotspot', 'personal hotspot', 'mobile data', 'wi-fi sharing'],
    readTime: '5 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Go to Personal Hotspot in Settings',
        content: 'Open Settings → Personal Hotspot. If you do not see it, go to Settings → Cellular → Personal Hotspot.',
      },
      {
        title: 'Turn on Personal Hotspot',
        content: 'Tap the toggle next to "Allow Others to Join." Your iPhone will generate a Wi-Fi network name and password.',
        tip: `The default hotspot name is your iPhone's name (like "Bailey's iPhone"). To change it, go to Settings → General → About → Name.`,
      },
      {
        title: 'Note your hotspot password',
        content: `Tap "Wi-Fi Password" to see the current password. You can change it to something easier to remember. Write it down if you are connecting a family member's device.`,
      },
      {
        title: 'Connect another device to the hotspot',
        content: `On your laptop or tablet, open Wi-Fi settings and look for your iPhone's name in the list of available networks. Select it and enter the password.`,
      },
      {
        title: 'Turn hotspot off when done',
        content: 'Go back to Settings → Personal Hotspot and turn it off. This saves battery and prevents unexpected data usage.',
        warning: 'Keep the hotspot password private. Anyone who knows it can use your data — and their usage counts against your plan.',
      },
    ],
  },

  {
    slug: 'android-personal-hotspot-guide',
    title: 'How to Use Your Android Phone as a Mobile Hotspot',
    excerpt: `Share your Android phone's cellular data with a laptop or tablet using the built-in Mobile Hotspot feature — works on any Android phone.`,
    body: `Android phones have a built-in Mobile Hotspot feature (sometimes called Portable Hotspot or Tethering) that lets you share your phone's internet connection with other devices. It works like a mini Wi-Fi router — other devices connect to your phone the same way they would connect to a home network.\n\nThis is useful when you are away from home Wi-Fi, traveling, or in an area with poor connectivity where your phone has a signal but no Wi-Fi is available. A laptop connecting through your hotspot will use your phone's cellular data.\n\nYou can connect up to eight devices at once over Wi-Fi, though connecting more devices slows down the speed for everyone. Battery and data both drain faster while hotspot is active, so plug in if possible and monitor data usage.\n\nThe hotspot settings are usually found in the main Settings app under Network or Connections. The exact location varies slightly by phone brand: Samsung phones call it "Mobile Hotspot," Google Pixel calls it "Hotspot," and other brands may use "Portable Hotspot" or "Tethering."\n\nMost unlimited plans include hotspot use, though some carriers throttle hotspot speeds after a certain amount of data. Check your plan details if you are unsure.`,
    category: 'phone-guides',
    tags: ['android', 'hotspot', 'mobile hotspot', 'data sharing', 'tethering'],
    readTime: '5 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Mobile Hotspot in Settings',
        content: 'Go to Settings → Network & Internet → Hotspot & Tethering → Wi-Fi Hotspot. On Samsung: Settings → Connections → Mobile Hotspot and Tethering → Mobile Hotspot.',
      },
      {
        title: 'Turn on the hotspot',
        content: 'Tap the toggle to enable Mobile Hotspot. Your phone will create a Wi-Fi network. Wait a few seconds for it to activate.',
      },
      {
        title: 'Find and update your hotspot name and password',
        content: 'Tap "Configure" or "Hotspot Settings" to see your network name (SSID) and password. Change the password to something you can remember.',
        tip: 'Use a password of at least 10 characters mixing letters and numbers. This prevents neighbors from accidentally connecting to your hotspot.',
      },
      {
        title: 'Connect your laptop or tablet',
        content: `On the device you want to connect, open Wi-Fi settings and look for your Android phone's hotspot name. Select it and enter the password you set.`,
      },
      {
        title: 'Monitor usage and turn off when done',
        content: 'Many Android phones show connected devices and data used while hotspot is active. Turn the hotspot off when you are finished to conserve battery and data.',
        warning: 'If hotspot is grayed out, your plan may require it to be added. Contact your carrier or check your plan details online.',
      },
    ],
  },

  {
    slug: 'android-magnification-accessibility',
    title: 'How to Zoom In on Your Android Screen',
    excerpt: `Android's Magnification feature lets you zoom in on any part of the screen with a triple-tap — great for reading small text or seeing details in photos.`,
    body: `Android has a built-in magnification feature that lets you zoom in on any part of the screen at any time. It works across all apps — websites, photos, menus, maps, text messages. You do not need to use the pinch-to-zoom gesture in every app.\n\nThere are two main magnification options:\n\n**Magnification** (triple-tap to zoom): Triple-tap anywhere on the screen to zoom in. While zoomed, drag two fingers to pan around the screen. Triple-tap again to zoom back out. This is the most popular method.\n\n**Magnification Shortcut**: Adds a button to the screen that activates magnification with a single tap, so you do not have to triple-tap every time.\n\nThe zoom level is adjustable — once zoomed in, you can pinch inward or outward to change the magnification level. Most people find 2x to 3x useful for reading text without losing too much context.\n\nMagnification is different from Display Size, which makes everything on the screen bigger permanently. Magnification is temporary zoom for close-up viewing when needed. You may want to use both: set Display Size slightly larger as your default, and use Magnification for detailed reading.\n\nThis feature works on all Android phones and tablets running Android 5.0 or later. The exact location in Settings varies slightly by brand but is always under Accessibility.`,
    category: 'phone-guides',
    tags: ['android', 'magnification', 'zoom', 'accessibility', 'large text'],
    readTime: '4 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Find Magnification in Accessibility Settings',
        content: 'Go to Settings → Accessibility → Magnification (may be under "Vision" or "Display" on some phones). On Samsung: Settings → Accessibility → Vision Enhancements → Magnification.',
      },
      {
        title: 'Turn on Triple-Tap to Zoom',
        content: 'Enable "Magnification" and make sure "Triple-tap to zoom" is selected as the shortcut. This lets you triple-tap anywhere on screen to zoom in.',
        tip: 'If triple-tap feels awkward, enable the "Accessibility Button" instead — a floating button appears that toggles magnification with one tap.',
      },
      {
        title: 'Triple-tap the screen to test it',
        content: 'Triple-tap any area on your screen quickly (three taps in about one second). The screen will zoom in on that spot.',
      },
      {
        title: 'Navigate while zoomed in',
        content: 'Use two fingers to drag across the screen and view different areas. To zoom in or out further, pinch or expand with two fingers.',
      },
      {
        title: 'Zoom out when done',
        content: 'Triple-tap again to return to normal view. Or, if you enabled the accessibility button, tap it again to toggle off.',
      },
    ],
  },

  {
    slug: 'ipad-split-view-guide',
    title: 'How to Use Two Apps Side by Side on iPad',
    excerpt: 'iPad can show two apps at the same time using Split View — read an email while browsing the web, or take notes while watching a video.',
    body: `One of the most useful features on iPad is the ability to show two apps at the same time, side by side. Apple calls this Split View. It lets you read an email while browsing, look up a recipe while writing a shopping list, or watch a video while taking notes — all without switching back and forth.\n\nSplit View works on iPad Air (2nd generation and later), iPad Pro, iPad mini (5th generation and later), and iPad (5th generation and later), running iPadOS 15 or newer.\n\nYou can also use Slide Over, which places a second app in a floating window on top of the first. This is useful for quick tasks like checking a message without fully switching apps.\n\nMultitasking on iPad has a learning curve, but once you use it a few times it becomes second nature. The key tool is the three-dot menu at the top center of every app — tapping it reveals Split View, Slide Over, and full screen options.\n\nSplit View works well for tasks that benefit from seeing two things at once. Some people use it to compare documents, reference a website while writing, or keep a calendar visible while replying to emails.`,
    category: 'tips-tricks',
    tags: ['ipad', 'split view', 'multitasking', 'productivity', 'ipados'],
    readTime: '5 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    steps: [
      {
        title: 'Open the first app you want to use',
        content: 'Open any app — for example, your email. It will open full screen as normal.',
      },
      {
        title: 'Tap the three-dot menu at the top',
        content: 'At the very top center of the screen, tap the three dots (•••). A small menu appears with three layout icons: full screen, Split View, and Slide Over.',
        tip: 'If you do not see the three dots, try scrolling to the very top of the app or tapping the top of the screen once to show the interface controls.',
      },
      {
        title: 'Tap the Split View icon',
        content: 'The Split View icon looks like two rectangles side by side. Tap it. Your current app will slide to one side and the Home Screen appears, waiting for you to choose the second app.',
      },
      {
        title: 'Open the second app',
        content: 'Tap the second app you want to use from the Home Screen or App Library. It opens on the other half of the screen.',
      },
      {
        title: 'Adjust the divider or close Split View',
        content: 'Drag the black divider bar between apps left or right to resize them. To exit Split View, drag the divider all the way to one edge, or tap the three dots on one app and choose full screen.',
      },
    ],
  },

  {
    slug: 'uber-for-seniors',
    title: 'How to Use Uber Safely: A Guide for Older Adults',
    excerpt: 'Uber is a safe, reliable way to get a ride from your phone. Learn how to request a trip, verify your driver, and stay safe every time.',
    body: `Uber is a service that connects you with nearby drivers through an app on your phone. You enter where you want to go, the app finds a driver, and they pick you up — usually within 5 to 15 minutes. You pay through the app, so there is no need to handle cash or a credit card.\n\nFor older adults who no longer drive or need transportation to appointments, Uber can be a genuinely helpful service. It is available in most US cities and suburbs, runs 24 hours a day, and costs much less than traditional taxi service.\n\nBefore getting in, always verify the driver: check that the car's make, model, and license plate match what the app shows you. You can also see the driver's photo and rating. The app shows you the driver's name — confirm it before getting in by asking "What's my name?" and waiting for them to say yours.\n\nIf you are not comfortable with the technology, a family member can set up the app on your phone and even send you rides remotely using Uber's request-for-others feature. They can watch your trip in real time and see when you arrive safely.\n\nUber also has UberAssist, a service option where drivers are trained to help passengers with mobility needs or those who need extra assistance.`,
    category: 'app-guides',
    tags: ['uber', 'rideshare', 'transportation', 'seniors', 'ride app'],
    readTime: '6 min',
    thumbnailEmoji: '🚕',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download the Uber app and create an account',
        content: 'Search "Uber" in the App Store (iPhone) or Google Play (Android). Download it and sign up with your name, email, and phone number. Add a credit card or debit card for payment.',
      },
      {
        title: 'Enter your destination',
        content: 'Open Uber and tap "Where to?" Type in your destination address — for example, "123 Main Street" or "Downtown Medical Center." The app uses your current location as the pickup point.',
      },
      {
        title: 'Choose a ride type',
        content: 'You will see options like UberX (standard), UberXL (larger vehicle), and Comfort (extra room). UberX is the most common and affordable. The price estimate shows before you confirm.',
        tip: 'Tap "UberAssist" if you need a driver trained to help with mobility needs. This option is available in most major cities.',
      },
      {
        title: 'Confirm and wait for your driver',
        content: `Tap "Confirm" to request the ride. A map shows the driver approaching. You will see the driver's name, photo, car type, and license plate.`,
      },
      {
        title: 'Verify the driver before getting in',
        content: `When the car arrives, check that the license plate matches the app. Ask "What's my name?" — the driver should say your name back. Never get into a car that does not match the app.`,
        warning: 'Never share your Uber verification code with anyone. Uber will never call you and ask for it — that is a scam.',
      },
      {
        title: 'Rate your driver after the trip',
        content: 'After you arrive, the app will ask you to rate the driver from 1 to 5 stars. A quick rating helps maintain quality for all riders.',
      },
    ],
  },

  {
    slug: 'aaa-app-guide',
    title: 'How to Use the AAA App for Roadside Assistance',
    excerpt: 'AAA members can request a tow truck, battery jump, or lockout service right from their phone — no phone call required.',
    body: `AAA (American Automobile Association) is a membership organization best known for roadside assistance. If your car breaks down, has a flat tire, needs a battery jump, or you lock your keys inside, AAA sends help.\n\nThe AAA mobile app makes requesting help much faster and more accurate than calling. Instead of describing your location over the phone, the app uses your GPS to share your exact position with the tow truck driver. You can also see your driver's estimated arrival time and track them on a map.\n\nThe app also gives you access to your digital AAA membership card, travel discounts, gas station prices, and AAA's roadside network of approved repair shops.\n\nAAA memberships start around $60 to $80 per year and include a set number of roadside service calls. Classic membership typically covers four service calls per year. Higher tiers include longer towing distance and additional benefits.\n\nEven if you have a newer car with roadside assistance included, having AAA is useful as a backup — car manufacturer programs often expire or have coverage gaps. Many insurance policies also offer roadside assistance add-ons, but AAA is generally considered the fastest and most reliable network.\n\nFor older adults who drive, having the AAA app set up on your phone before you need it is strongly recommended. Searching for the app while stranded on the side of the road is stressful and avoidable.`,
    category: 'app-guides',
    tags: ['aaa', 'roadside assistance', 'tow truck', 'car breakdown', 'membership'],
    readTime: '5 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download the AAA app',
        content: 'Search "AAA" in the App Store or Google Play. The official app is by "AAA — Roadside Assistance." Download and install it.',
      },
      {
        title: 'Sign in with your AAA membership',
        content: 'Open the app and sign in with your AAA account email and password. If you do not have a membership, you can join through the app or at AAA.com.',
      },
      {
        title: 'Explore your digital membership card',
        content: 'Tap the "Membership" tab to see your digital card. You can show this at AAA-approved hotels, car rentals, and attractions to receive member discounts.',
        tip: `Take a screenshot of your digital card and save it to your phone's Photos so you have it even without internet access.`,
      },
      {
        title: 'Know how to request roadside help',
        content: 'If you break down, open the app and tap "Roadside Assistance." The app reads your GPS location automatically. Select the type of help needed: tow, battery, flat tire, lockout, or out of fuel.',
      },
      {
        title: 'Track your service vehicle',
        content: `After submitting the request, the app shows a map with your service driver's location and estimated arrival time. You will receive text and push notification updates.`,
        warning: 'Make sure your phone has some battery charge before a long drive. Requesting help with 2% battery can be risky. Keep a car charger handy.',
      },
    ],
  },

  {
    slug: 'senior-travel-discounts-guide',
    title: 'How to Find and Use Senior Travel Discounts',
    excerpt: 'Travelers age 55 and older can save significantly on flights, hotels, rental cars, and cruises — if you know where to look and when to book.',
    body: `Senior travel discounts can save you hundreds of dollars on trips, but they are not always advertised prominently. You often need to ask for them or know where to look.\n\n**Airlines**: Many airlines offer senior fares, though they have become less common. Airlines like American, Delta, and United sometimes offer senior discounts on select domestic routes. It is worth calling the airline directly and asking about senior fares, since these are not always shown on booking websites. AARP Travel also partners with airlines and car rental companies for member discounts.\n\n**Hotels**: Most major chains offer senior discounts of 10% to 20% for AARP members. Marriott, Hilton, Best Western, and IHG all participate. Always ask at check-in or during booking whether a senior or AARP rate is available — it may be lower than the rate you found online.\n\n**Rental cars**: AARP members receive discounts at Avis, Budget, Hertz, and Enterprise. Book through the AARP Travel Center for guaranteed rates. If you are 65 or older, Enterprise and National also sometimes offer specific senior pricing.\n\n**Cruises**: Cruise lines frequently offer seniors age 55+ discounts of $100 to $500 off, especially during shoulder seasons (spring and fall). Booking through a travel agent who specializes in cruises can uncover better deals than booking directly.\n\n**National Parks**: Anyone 62 or older can purchase an America the Beautiful Senior Pass for $80 (lifetime) or $20 (annual), which gives free access to over 2,000 federal recreation areas including all national parks.`,
    category: 'life-transitions',
    tags: ['senior discounts', 'travel', 'aarp', 'national parks', 'savings'],
    readTime: '6 min',
    thumbnailEmoji: '✈️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Join AARP if you are 50 or older',
        content: 'AARP membership costs about $16 per year and gives access to travel discounts at hundreds of airlines, hotels, rental cars, and tour companies. Go to AARP.org to sign up.',
      },
      {
        title: 'Use the AARP Travel Center for hotel and car bookings',
        content: 'Go to aarp.org/travel and book hotels and rental cars through the AARP portal. Rates are often 10–20% lower than general booking sites.',
        tip: 'Always compare the AARP rate against what you find on Expedia or Hotels.com — sometimes the general sale price beats the AARP rate.',
      },
      {
        title: 'Call airlines to ask about senior fares',
        content: `When booking flights, call the airline's customer service line and ask specifically: "Do you have senior fares available for this route?" They may not be advertised online.`,
      },
      {
        title: 'Purchase the America the Beautiful Senior Pass',
        content: 'Visit store.usgs.gov to order the Senior Pass online ($80 lifetime), or buy it in person at any national park entrance for $80. The $20 annual version is available at the same locations.',
        tip: 'The lifetime pass pays for itself after just two national park visits. Yellowstone, Grand Canyon, and Zion all have entrance fees of $35 or more per vehicle.',
      },
      {
        title: 'Ask about discounts at the time of booking and at check-in',
        content: `Whenever booking travel, say "I'm a senior — is there a discount available?" or "I'm an AARP member — do you have a member rate?" Staff can often apply discounts that are not visible online.`,
      },
    ],
  },

  {
    slug: 'cruise-booking-seniors',
    title: 'How to Book a Cruise: A Step-by-Step Guide',
    excerpt: 'Cruises can be an affordable, stress-free vacation for older adults. Learn how to choose a ship, pick a cabin, and find the best deals.',
    body: `Cruises are popular with older adults because they offer a structured, comfortable way to travel. Your accommodations, meals, and transportation all move with you. Unpacking once, exploring multiple destinations, and having access to medical facilities onboard are all factors that make cruising appealing for people who want a worry-free trip.\n\n**Major cruise lines for first-timers**: Carnival (budget-friendly, casual), Royal Caribbean (large ships, many amenities), Celebrity (upscale, quieter atmosphere), and Holland America (older demographic focus, slower pace). Norwegian Cruise Line is known for flexible dining and scheduling.\n\n**Choosing a cabin**: Interior cabins (no window) are the least expensive. Ocean view cabins have a window but no balcony. Balcony cabins cost more but let you step outside — worth the upgrade for scenic itineraries like Alaska or the Mediterranean. Suites are premium options with extra space and perks.\n\n**When to book for the best price**: Book either very early (6–12 months in advance) for the best cabin selection, or watch for last-minute deals 30–60 days out when ships discount unsold cabins. Avoid holiday weeks and summer if budget matters.\n\n**What to ask about**: Make sure to ask about port charges and fees, drink packages, travel insurance, and gratuity policies. These can add significant cost to the advertised price.`,
    category: 'life-transitions',
    tags: ['cruise', 'vacation', 'travel', 'seniors', 'booking'],
    readTime: '7 min',
    thumbnailEmoji: '🚢',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Choose your destination and cruise line',
        content: 'Popular beginner itineraries: Caribbean (warm, short voyages, many ports), Alaska (scenic, wildlife, cooler temperatures), or the Bahamas (affordable short cruises). Choose a cruise line based on your budget and preferred atmosphere.',
      },
      {
        title: 'Compare prices on a cruise search site',
        content: 'Visit CruiseSheet.com, Cruiseline.com, or Costco Travel (for Costco members). Search by destination, date range, and length. Compare prices including all fees.',
        tip: 'Costco Travel consistently offers some of the best overall cruise value, often including onboard credit or gift cards with booking.',
      },
      {
        title: 'Consider a travel agent for your first cruise',
        content: 'A cruise travel agent costs you nothing (they earn a commission from the cruise line). They can help with cabin selection, dining reservations, shore excursions, and trip insurance. Search for "cruise travel agent" in your area or at NACTA.com.',
      },
      {
        title: 'Book travel insurance',
        content: 'Cruise travel insurance is highly recommended, especially for older travelers. It covers trip cancellation, medical emergencies onboard, and medical evacuation. Compare policies at InsureMyTrip.com.',
        warning: 'Do not rely on your regular health insurance on a cruise — most US health plans do not cover international waters or foreign ports. Cruise-specific insurance is essential.',
      },
      {
        title: 'Research accessibility needs before booking',
        content: 'If you have mobility limitations, contact the cruise line directly to ask about wheelchair-accessible cabins, boarding ramps, shore excursion options, and onboard medical facilities. Book accessible cabins early — they sell out fast.',
      },
    ],
  },

  {
    slug: 'pocketguard-app-guide',
    title: 'How to Use PocketGuard to Track Your Spending',
    excerpt: 'PocketGuard connects to your bank accounts and shows exactly how much money you have left after bills and savings goals — making budgeting simple.',
    body: `PocketGuard is a budgeting app that connects to your bank accounts and credit cards to give you an instant view of your finances. The main feature is a number called "In My Pocket" — the amount of money available to spend freely after accounting for bills, savings, and recurring expenses.\n\nFor example, if you have $2,000 in your checking account, $600 in upcoming bills, and $200 in savings goals, PocketGuard shows $1,200 as your available amount. This single number makes it much easier to answer the question "Can I afford this?" without doing any math yourself.\n\nPocketGuard automatically categorizes your transactions — groceries, dining, utilities, entertainment — and shows you spending trends over time. If you spend more than usual on dining one month, the app highlights it so you can decide whether to adjust.\n\nThe free version covers most everyday budgeting needs. PocketGuard Plus (about $7.99/month or $34.99/year) adds features like bill tracking, debt payoff planning, and the ability to customize spending categories.\n\nPocketGuard uses bank-level security (256-bit encryption) and connects through Plaid, the same service used by major banks. Your bank credentials are never stored in the PocketGuard app itself.\n\nThis app works best for people who want a simple, automatic budget without manually entering every transaction. If you prefer to track every penny manually, a spreadsheet may suit you better.`,
    category: 'financial-tech',
    tags: ['budgeting', 'pocketguard', 'spending tracker', 'personal finance', 'money app'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download PocketGuard and create an account',
        content: 'Search "PocketGuard" in the App Store or Google Play. Download the app and sign up with your email address and a strong password.',
      },
      {
        title: 'Connect your bank accounts',
        content: 'Tap "Add Account" and search for your bank by name. The app uses Plaid to connect — you enter your online banking username and password through a secure Plaid screen, not directly in PocketGuard.',
        tip: 'Connect your main checking account first. You can add savings accounts and credit cards later to get a complete picture.',
      },
      {
        title: 'Set up your income and recurring bills',
        content: 'PocketGuard will ask about your regular income and fixed expenses like rent, phone bills, and subscriptions. Fill these in accurately — they affect what shows as "In My Pocket."',
      },
      {
        title: 'Review your "In My Pocket" number',
        content: 'The main screen shows your In My Pocket amount. This is your safe-to-spend number. Check it before making discretionary purchases.',
      },
      {
        title: 'Set a savings goal',
        content: 'Tap "Goals" to set up a savings target — for example, a vacation fund or emergency savings. PocketGuard will subtract this from your available balance automatically.',
        warning: 'PocketGuard displays your accounts in real time, but it may take 24 hours for very recent transactions to appear. Do not assume a purchase is safe just because the balance has not updated yet.',
      },
    ],
  },

  {
    slug: 'goodbudget-envelope-guide',
    title: 'How to Use GoodBudget for Envelope Budgeting',
    excerpt: 'GoodBudget brings the classic envelope budgeting method to your phone — divide your money into digital envelopes for groceries, bills, fun, and more.',
    body: `Envelope budgeting is an old-fashioned but powerful way to manage money. You divide your paycheck into labeled envelopes — groceries, gas, dining, entertainment — and only spend from each envelope until it is empty. It prevents overspending because once the grocery envelope is empty, you stop buying groceries until next pay period.\n\nGoodBudget is a free app (with an optional paid upgrade) that brings this system to your phone and works across multiple devices, so couples or households can share a budget without needing separate apps.\n\nUnlike PocketGuard, GoodBudget does not connect directly to your bank. Instead, you manually enter transactions, which many financial advisors prefer — the act of manually recording each purchase makes you more aware of your spending. It takes a few minutes each day but gives you a very clear picture of your finances.\n\nThe free version allows up to 10 regular envelopes and 1 annual envelope (for irregular expenses like car insurance or holiday shopping). GoodBudget Plus (about $8/month or $70/year) removes the envelope limit.\n\nThis budgeting style works particularly well for people on a fixed income, like retirees, who need to make a set amount last through the month. The visual of a shrinking envelope is motivating and intuitive.\n\nYou can use GoodBudget on iPhone, Android, or through a web browser at GoodBudget.com — your data syncs across all devices.`,
    category: 'financial-tech',
    tags: ['budgeting', 'goodbudget', 'envelope budgeting', 'personal finance', 'fixed income'],
    readTime: '5 min',
    thumbnailEmoji: '✉️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download GoodBudget and create a household',
        content: 'Search "GoodBudget" in the App Store or Google Play. Sign up with an email address. The app will ask you to create a household — this is your shared budget space.',
      },
      {
        title: 'Set up your envelopes',
        content: 'Tap "Add Envelope" and create categories that match your actual spending: Groceries, Utilities, Gas, Dining Out, Medical, Fun Money, Clothing, Gifts, etc. Give each one a monthly dollar amount.',
        tip: 'Start simple — 6 to 8 envelopes is enough to begin. You can always add more later.',
      },
      {
        title: 'Fill your envelopes on payday',
        content: 'When you get paid, tap "Add to Envelopes" and distribute your paycheck across your envelopes. Think of this like depositing cash into physical envelopes.',
      },
      {
        title: 'Record transactions as you spend',
        content: 'Every time you spend money, tap "Add Transaction," choose the envelope it comes from (e.g., Groceries), and enter the amount. The envelope balance decreases immediately.',
      },
      {
        title: 'Check your envelopes before spending',
        content: 'Before making a purchase, open GoodBudget and check that envelope. If it shows $0, you know to wait until next pay period or move money from another envelope.',
        tip: 'You can move money between envelopes at any time. If dining runs low but you have extra in Fun Money, transfer some over.',
      },
    ],
  },

  {
    slug: 'spotify-audiobooks-guide',
    title: 'How to Listen to Audiobooks on Spotify',
    excerpt: 'Spotify now includes 15 hours of free audiobook listening per month — access hundreds of thousands of titles without a separate subscription.',
    body: `Spotify, the popular music streaming service, added audiobooks to its platform. If you already have a Spotify Premium subscription (currently $11.99/month), you get 15 hours of audiobook listening included each month at no extra charge. This gives you access to over 350,000 audiobook titles spanning fiction, memoir, self-help, history, and more.\n\nIf you do not have Spotify Premium, you can still purchase individual audiobooks on Spotify without a subscription, much like buying from Audible.\n\nFinding audiobooks on Spotify works the same as finding music or podcasts. You search by book title or author name, and audiobooks show up in the results with their cover art and a "Audiobook" label. Tapping a title shows the description, narrators, and the option to start listening.\n\nYour progress syncs across all your devices — start a book on your phone and continue on a tablet. Spotify also lets you set a sleep timer so the audiobook pauses automatically after a certain time, which is helpful for listening before bed.\n\nSpotify's audiobook library is not as large as Audible's, but it is growing rapidly. For casual audiobook listeners who already pay for Spotify, it is a worthwhile benefit that many users do not realize they have.`,
    category: 'entertainment',
    tags: ['spotify', 'audiobooks', 'listening', 'books', 'free audiobooks'],
    readTime: '4 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Make sure you have Spotify installed',
        content: 'Search "Spotify" in the App Store or Google Play. The app is free to download. You need a Spotify account — free or Premium.',
        tip: 'Audiobook hours (15 per month) are only included with Spotify Premium. Free users can still purchase individual audiobooks.',
      },
      {
        title: 'Search for an audiobook',
        content: 'Open Spotify and tap the Search icon. Type the book title or author name — for example, "James Patterson" or "Atomic Habits." In the results, tap "Audiobooks" to filter.',
      },
      {
        title: 'Open the audiobook and start listening',
        content: 'Tap the audiobook cover to see its details page. Tap the green "Play" button to start from the beginning, or browse chapters.',
      },
      {
        title: 'Track your monthly listening hours',
        content: 'Spotify shows how many of your 15 monthly hours you have used. Look for the hours counter on the audiobook page. Your hours reset at the beginning of each month.',
      },
      {
        title: 'Set a sleep timer for bedtime listening',
        content: 'While playing an audiobook, tap the three-dot menu (•••) and look for "Sleep Timer." Set it for 15, 30, or 45 minutes. Playback pauses automatically when time runs out.',
      },
    ],
  },

  {
    slug: 'copilot-windows-guide',
    title: 'How to Use Microsoft Copilot on Windows',
    excerpt: 'Microsoft Copilot is a built-in AI assistant in Windows 11 that can answer questions, summarize documents, draft emails, and help with everyday computer tasks.',
    body: `Microsoft Copilot is an AI assistant built directly into Windows 11. It works similarly to asking a question on Google, but instead of showing you a list of websites, it gives you a direct answer and can perform actions on your computer. You can ask it to open apps, summarize documents, write an email draft, or explain what a Windows setting does.\n\nCopilot is powered by the same technology as ChatGPT (both are developed with OpenAI's technology). Microsoft has integrated it tightly into Windows so it understands your computer's context — for example, you can ask it to help troubleshoot a problem you are currently experiencing, and it understands you are referring to Windows, not the web in general.\n\nYou can open Copilot by pressing the Windows key + C, or by clicking the Copilot icon in the taskbar (it looks like a colorful swirled circle). Copilot opens as a sidebar panel on the right side of your screen, so you can keep it open while working.\n\nCopilot can also summarize content from Microsoft Edge (the browser) — if you are reading a long article and want a quick summary, Copilot can do that in seconds. It works with Microsoft 365 apps (Word, Outlook, Teams) if you have those subscriptions.\n\nFor everyday Windows users, the most practical uses are: getting help when something is not working, writing a quick email, explaining settings in plain language, and searching for information without switching to a browser.`,
    category: 'windows-guides',
    tags: ['windows 11', 'copilot', 'ai assistant', 'microsoft', 'windows tips'],
    readTime: '5 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Copilot on your Windows 11 PC',
        content: 'Press the Windows key + C on your keyboard, or click the colorful swirl icon in the taskbar at the bottom of the screen. Copilot opens as a panel on the right side.',
        tip: 'If you do not see the Copilot icon in the taskbar, right-click the taskbar, choose "Taskbar settings," and turn on the Copilot toggle.',
      },
      {
        title: 'Ask a question in plain English',
        content: 'Type your question in the text box at the bottom. For example: "How do I change my desktop wallpaper?" or "My computer is running slow — what should I check?" Copilot answers in a conversational way.',
      },
      {
        title: 'Ask Copilot to help write something',
        content: 'Try asking: "Write a short thank-you note to my neighbor for picking up my mail." Copilot will generate text you can copy into an email or document.',
      },
      {
        title: 'Ask Copilot to open apps or change settings',
        content: 'You can type "Open Settings" or "Turn on Dark Mode" and Copilot will do it for you, or walk you through the steps. This is faster than searching through menus.',
      },
      {
        title: 'Use Copilot to summarize a web page',
        content: 'Open a long article in Microsoft Edge. Then open Copilot and type "Summarize this page." Copilot reads the article and gives you a short summary.',
        warning: 'Copilot can make mistakes, especially with factual claims. For important health, legal, or financial decisions, verify information with official sources.',
      },
    ],
  },

  {
    slug: 'chatgpt-image-analysis-guide',
    title: 'How to Use ChatGPT to Analyze Photos',
    excerpt: 'ChatGPT can look at a photo you share and answer questions about it — read a menu, identify a plant, check a medication label, or understand a form.',
    body: `ChatGPT can do more than answer text questions. You can share a photo with it and ask questions about what is in the image. This feature, called image input or vision, works on the ChatGPT app on iPhone and Android, as well as on the website at ChatGPT.com.\n\nHere are practical ways older adults are using this feature:\n\n**Reading small or unclear text**: Take a photo of a medicine bottle label, a restaurant menu, or a mail piece and ask "What does this say?" ChatGPT can read and explain the text.\n\n**Identifying plants or insects**: Take a photo of a plant in your garden and ask "What plant is this?" or "Is this safe for pets?"\n\n**Understanding a form or document**: Photograph a form or insurance document and ask "Can you explain what this form is asking me to do?"\n\n**Checking skin concerns**: While ChatGPT is not a doctor and cannot diagnose anything, some people share a photo of a rash or skin change and ask "What might this be?" Always follow up with a real healthcare provider.\n\n**Describing something to get help**: Show a photo of an error message on your computer screen and ask "What does this error mean and how do I fix it?"\n\nThe free version of ChatGPT includes image input. You do not need ChatGPT Plus (the paid plan) to use this feature.`,
    category: 'ai-guides',
    tags: ['chatgpt', 'ai', 'photo analysis', 'image input', 'vision'],
    readTime: '5 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open ChatGPT on your phone',
        content: 'Download the ChatGPT app from the App Store or Google Play. Sign in or create a free account at ChatGPT.com. The app looks like a black icon with a white swirl.',
      },
      {
        title: 'Start a new conversation',
        content: 'Tap the new chat icon (a pencil or plus sign). A blank chat screen appears with a text box at the bottom.',
      },
      {
        title: 'Attach a photo',
        content: 'Tap the paperclip or photo icon next to the text box. Choose "Photo Library" to select an existing photo, or "Camera" to take a new one.',
        tip: 'Take a photo in good lighting and hold the camera steady. A blurry or poorly lit photo will make it harder for ChatGPT to read text or identify objects.',
      },
      {
        title: 'Ask your question',
        content: 'After the photo uploads, type your question in the text box. For example: "What does this label say?" or "Can you explain this form?" or "What plant is this?" Then tap Send.',
      },
      {
        title: 'Review the answer and ask follow-up questions',
        content: 'ChatGPT will respond about the image. If the answer is unclear or incomplete, ask a follow-up question in the same chat.',
        warning: 'ChatGPT is not a medical professional. Do not make health decisions based solely on its analysis of photos. Use it as a starting point, then consult your doctor.',
      },
    ],
  },

  {
    slug: 'zoom-background-guide',
    title: 'How to Add a Virtual Background in Zoom',
    excerpt: 'Replace your actual background with a photo or solid color during Zoom calls — keep your home private and look more professional on video calls.',
    body: `Virtual backgrounds in Zoom let you replace what appears behind you during a video call. Instead of showing your living room, bedroom, or kitchen, you can display a neutral color, a professional office setting, a scenic photo, or a blurred version of your actual background.\n\nThis is useful for privacy — family photos, papers, or clutter in the background are hidden. It is also useful for looking professional on work or telehealth calls without needing a special setup.\n\nZoom offers several built-in background options, or you can upload your own photo. The best results come from sitting in front of a plain, well-lit wall. Zoom's software can detect your outline even without a green screen, though the edge detection works better with a solid background behind you.\n\nThe virtual background feature works on the Zoom desktop app (Mac and Windows) and the mobile app (iPhone and Android). It may not appear on very old devices because it requires some processing power to run.\n\nIf your outline looks choppy or the background "bleeds" through you, try turning on more light in front of you (facing you, not from behind), wearing clothing that contrasts with your background, and avoiding sitting in front of a window.`,
    category: 'communication',
    tags: ['zoom', 'virtual background', 'video call', 'privacy', 'work from home'],
    readTime: '4 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Join or start a Zoom call',
        content: 'Open Zoom on your computer or phone. Join a meeting or start a test meeting. You need to be in a meeting (or waiting room) to access background settings.',
      },
      {
        title: 'Open the background settings',
        content: 'On a computer: click the small arrow next to the camera icon at the bottom left → Choose Virtual Background. On iPhone/Android: tap the three dots (•••) → Virtual Background.',
        tip: 'You can also set your background before joining a meeting. On the Zoom desktop app, go to Settings (gear icon) → Background & Effects.',
      },
      {
        title: 'Choose a background',
        content: 'Zoom shows several built-in options including solid colors, office scenes, and nature photos. Click or tap one to apply it immediately.',
      },
      {
        title: 'Upload your own photo (optional)',
        content: 'Click the plus (+) icon in the virtual background panel and select a photo from your computer or phone. Your photo will be added to the list and applied as the background.',
      },
      {
        title: 'Use blur instead of a full replacement',
        content: 'If virtual backgrounds look choppy, try the "Blur" option instead. It blurs only the background while keeping you in focus. It looks natural and works on almost any device.',
        tip: 'Blur is the most reliable option if your background tracking looks rough. It hides clutter without needing a precise outline detection.',
      },
    ],
  },
];
