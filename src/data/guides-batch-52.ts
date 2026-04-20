import { Guide } from './guides';

export const guidesBatch52: Guide[] = [
  {
    slug: `android-custom-ringtone-guide`,
    title: `How to Set a Custom Ringtone on Android`,
    excerpt: `Choose a song from your music library or a downloaded ringtone file as your personal ringtone on any Android phone.`,
    category: `phone-guides`,
    tags: [`android`, `ringtone`, `personalization`, `phone settings`, `music`],
    readTime: `6 min`,
    thumbnailEmoji: `🔔`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your ringtone is the first thing you hear when someone calls, so it makes sense to pick something you actually like. Android phones let you choose a custom ringtone — either a song you already have on your phone, a file you downloaded specifically as a ringtone, or one of the built-in tones that came with your phone.

The steps vary slightly depending on which brand of Android phone you have (Samsung, Google Pixel, Motorola, and others all look a little different in their settings), but the overall process is the same on every Android device.

One important thing to know: if you want to use a song from a streaming app like Spotify, that won't work directly — streaming songs are protected and can't be set as ringtones. You'll need a music file actually saved on your phone (a .mp3 or .m4a file). Many people download free ringtone files from reputable sites like Zedge, or they might have music files they've purchased or transferred from a CD.

You can also set different ringtones for different contacts, so a specific song plays whenever your daughter calls, and another plays for your doctor's office. This guide covers both setting a default ringtone for all calls and setting a ringtone for a specific contact.

Setting a custom ringtone takes about two minutes once you know where to look. The hardest part is usually navigating through the Settings app, which can look different on different phones. If you get lost, the search bar inside Settings (usually a magnifying glass icon at the top) is your best friend — type "ringtone" and it will take you straight there.`,
    steps: [
      {
        title: `Open your phone's Settings app`,
        content: `Find the Settings app on your home screen or in your app drawer — it looks like a gear icon. Tap it to open it. If you can't find it, swipe down from the top of your screen and look for a gear icon in the top corner.`,
        tip: `Once Settings is open, tap the search bar at the top and type "ringtone" to skip straight to the right page.`
      },
      {
        title: `Navigate to Sound settings`,
        content: `In Settings, look for a section called "Sound," "Sound & vibration," or "Sounds and haptics" — the exact name depends on your phone brand. Tap it. On a Samsung phone it's called "Sounds and vibration." On a Google Pixel it's called "Sound & vibration." On Motorola phones it may be labeled "Sound."`,
      },
      {
        title: `Tap Phone ringtone`,
        content: `Inside Sound settings, look for an option labeled "Phone ringtone," "Ringtone," or "Default ringtone." Tap it. You'll see a list of built-in ringtones. At the top or bottom of the list, you should see an option like "Add ringtone," "My files," or a plus (+) icon — tap that to browse for your own music file.`,
        tip: `If you don't see an option to add your own file, your phone may require the ringtone file to already be in a specific folder on your phone (usually a folder called "Ringtones" in your phone storage).`
      },
      {
        title: `Choose your custom ringtone file`,
        content: `A file browser will open. Navigate to where your music or ringtone file is stored — this might be in "Downloads" if you downloaded a ringtone file, or in "Music" if you have music saved on your phone. Tap your chosen file to select it. You'll hear a preview. If you like it, look for a "Done," "OK," or checkmark button to confirm your choice.`,
        warning: `Only .mp3, .m4a, .ogg, and .wav files work as ringtones. Streaming app songs cannot be used directly.`
      },
      {
        title: `Set a ringtone for one specific contact (optional)`,
        content: `Open your Contacts app. Find the contact you want, tap their name to open their profile, then tap the pencil or edit icon. Scroll down until you see "Ringtone" or "Default ringtone." Tap it, choose your ringtone, and save. Now that song will play only when that person calls you.`
      },
      {
        title: `Test your new ringtone`,
        content: `Have someone call you, or ask a friend to test it. If the new ringtone doesn't play, check that your phone's volume is turned up and that it isn't set to silent or vibrate-only mode. You can find the volume setting in Sound settings or by pressing the physical volume buttons on the side of your phone.`
      }
    ]
  },
  {
    slug: `iphone-edit-unsend-message-guide`,
    title: `How to Edit or Unsend an iMessage on iPhone`,
    excerpt: `Fix a typo or take back a message you regret — iPhones running iOS 16 or later let you edit within 15 minutes and unsend within 2 minutes.`,
    category: `phone-guides`,
    tags: [`iphone`, `imessage`, `messages`, `ios 16`, `edit message`, `unsend`],
    readTime: `5 min`,
    thumbnailEmoji: `✏️`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `We've all sent a text with a typo or pressed send before we meant to. If you have an iPhone running iOS 16 or later (that's any iPhone that updated after September 2022), Apple gives you two helpful tools: the ability to edit a message after you send it, and the ability to completely unsend a message.

Here's what you need to know before you use these features:

**Editing a message:** You can edit an iMessage up to 5 times within 15 minutes of sending it. After you edit, the message shows an "Edited" label underneath it so the person you're messaging can see it was changed. They can also tap "Edited" to see the message history, showing what it said before.

**Unsending a message:** You can fully remove a message within 2 minutes of sending it. The message disappears from your conversation, and the other person sees a notice that says a message was unsent. However, if the other person saw the message before you unsent it, they've already read it.

**Important:** Both features only work with iMessages — the blue bubble messages. They do not work with SMS texts (green bubbles). Also, the person you're messaging needs to be on iOS 16 or later as well for the edit or unsend to fully work on their screen. If they have an older iPhone, they may still see the original message.

These features are built right into the Messages app and don't require any extra apps or settings to turn on.`,
    steps: [
      {
        title: `Check that you have iOS 16 or later`,
        content: `Open Settings, tap "General," then tap "About." Look at the line that says "iOS Version." If the number is 16 or higher (such as 16.6, 17.4, 18.0, etc.), you have access to these features. If your iOS version is lower than 16, go to Settings → General → Software Update and update your iPhone first.`
      },
      {
        title: `Open the Messages app and find the message`,
        content: `Open the Messages app (the green icon with a speech bubble). Tap on the conversation where the message you want to edit or unsend is located. Find the specific message — it needs to be a blue bubble (iMessage), not green (SMS).`
      },
      {
        title: `Press and hold on the message`,
        content: `Touch and hold your finger on the message bubble for about one second. A menu will appear with reaction options (like thumbs up) and a row of options below. Look for "Edit" and "Undo Send" in that menu.`,
        tip: `If you don't see "Undo Send," more than 2 minutes have passed since you sent the message and it's too late to unsend it. "Edit" will disappear after 15 minutes.`
      },
      {
        title: `Edit the message`,
        content: `Tap "Edit" to fix a typo or change what you wrote. The message text will appear in a text box. Make your changes, then tap the blue checkmark button to save and send the edited version. The message will now show an "Edited" label underneath it.`,
        tip: `You can edit the same message up to 5 times total within the 15-minute window.`
      },
      {
        title: `Unsend the message`,
        content: `Tap "Undo Send" to remove the message entirely. A pop-up will ask you to confirm. Tap "Undo Send" again to confirm. The message will disappear from the conversation on your screen and the other person's screen. They will see a note that says "[Your name] unsent a message."`,
        warning: `Unsending only works within 2 minutes of sending. If the other person already read the message before you unsent it, they've seen the content — the unsend removes it visually but not from their memory.`
      }
    ]
  },
  {
    slug: `imessage-pin-message-guide`,
    title: `How to Pin an iMessage Conversation to the Top`,
    excerpt: `Keep your most important text conversations pinned at the top of your iPhone Messages list so you never have to scroll to find them.`,
    category: `phone-guides`,
    tags: [`iphone`, `imessage`, `messages`, `pin`, `organization`, `ios`],
    readTime: `4 min`,
    thumbnailEmoji: `📌`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you regularly text certain people — your children, your spouse, your doctor's office — it can get annoying to scroll through a long list of conversations every time you open the Messages app. Apple's pin feature solves this by letting you "stick" up to nine conversations at the very top of your Messages list, where they're always visible the moment you open the app.

Pinned conversations appear as large circular icons at the top of your Messages list, above all your regular conversations. You can see the person's contact photo (or their initials if they don't have a photo), and you'll see a badge number on the icon when they send you a new message.

Pinning is available on iPhones running iOS 14 or later (released in 2020), so most iPhones in use today support it. You can pin individual people, groups, or even a conversation with a business.

Pinning someone doesn't notify them — it's a personal organization tool that only you can see on your phone. You can pin up to 9 conversations total, and you can unpin them at any time in the same way you pinned them.

This is one of those small features that makes a surprisingly big difference in daily use. Instead of hunting for your daughter's texts every morning, her name is right there waiting for you at the top of the screen.`,
    steps: [
      {
        title: `Open the Messages app`,
        content: `Tap the Messages app icon on your iPhone home screen — it's the green icon with a white speech bubble. You'll see your list of conversations.`
      },
      {
        title: `Swipe right on the conversation you want to pin`,
        content: `Find the conversation you want to pin in your list. Place your finger on it and swipe slowly to the right (toward the right edge of the screen). A yellow pin icon will appear. Tap the pin icon to pin that conversation.`,
        tip: `Alternatively, you can press and hold the conversation for about one second, and a menu will appear. Tap "Pin" from that menu.`
      },
      {
        title: `See your pinned conversation at the top`,
        content: `The conversation will move to the top of your Messages list and appear as a large circle with the person's photo or initials. New messages from that person will show a number badge on their circle, and you may see a preview of their latest message below the circle.`
      },
      {
        title: `Pin more conversations (up to 9 total)`,
        content: `Repeat the swipe-right or press-and-hold method for any other conversations you want to pin. You can pin up to 9 conversations. They'll line up as circles across the top of your Messages screen. You can also rearrange pinned conversations by pressing and holding one of the circles, then dragging it to a new position.`
      },
      {
        title: `Unpin a conversation when you no longer need it pinned`,
        content: `Press and hold the pinned circle at the top of Messages. A small menu will appear. Tap "Unpin." The conversation will return to its regular spot in your main conversation list, sorted by date.`,
        tip: `You might want to unpin seasonal conversations — for example, a conversation with a holiday event planner — after the event is over, to free up space for the conversations you use most.`
      }
    ]
  },
  {
    slug: `sleep-timer-spotify-guide`,
    title: `How to Set a Sleep Timer in Spotify, Apple Music, and Amazon Music`,
    excerpt: `Let music play while you fall asleep without worrying about it running all night — set a sleep timer in your favorite music app in seconds.`,
    category: `app-guides`,
    tags: [`spotify`, `apple music`, `amazon music`, `sleep timer`, `music`, `bedtime`],
    readTime: `5 min`,
    thumbnailEmoji: `😴`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Listening to music or soothing sounds as you fall asleep is a habit many people enjoy. The challenge is remembering to turn it off — or waking up hours later to music still playing and your battery drained. That's exactly why music apps include sleep timers.

A sleep timer tells the app to stop playing automatically after a set amount of time — 15 minutes, 30 minutes, an hour, or whatever you choose. You pick the time, fall asleep, and the music fades out on its own.

Spotify, Apple Music, and Amazon Music all have sleep timers, though they're each in slightly different places. Here's how to find the sleep timer in each app.

**A note about Spotify:** Spotify's sleep timer is one of its most popular but least-known features. It's tucked inside the "Now Playing" screen and is free to use on both free and paid Spotify accounts.

**Apple Music:** Apple Music doesn't have a built-in sleep timer inside the app itself. Instead, iPhone users can set a sleep timer using the iPhone's built-in Clock app, which works with any audio playing on the phone — including Apple Music. This is actually a flexible approach because it works with any app, not just Apple Music.

**Amazon Music:** Amazon Music has a sleep timer built directly into the app, similar to Spotify. It's easy to find once you know where to look.

All three methods work on both iPhone and Android phones.`,
    steps: [
      {
        title: `Set a sleep timer in Spotify`,
        content: `Open Spotify and start playing a song or playlist. Tap the song title at the bottom of the screen to open the full "Now Playing" screen. Tap the three-dot menu icon (•••) in the top right corner. Scroll down through the menu until you see "Sleep timer." Tap it, then choose how long you want the music to play: 5, 10, 15, 30, or 45 minutes, or until the current track ends.`,
        tip: `The "End of track" option is great if you're already dozing off and want the music to stop naturally after the current song.`
      },
      {
        title: `Set a sleep timer in Apple Music (using iPhone Clock app)`,
        content: `Start playing music in Apple Music. Now open the Clock app (the white app with a clock face). Tap "Timer" at the bottom right. Set the amount of time you want music to play using the hour and minute wheels. Before tapping "Start," tap "When Timer Ends" and scroll all the way to the bottom of the list of sounds. You'll see "Stop Playing" — tap it, then tap "Set" in the top right. Back on the timer screen, tap "Start." When the timer runs out, all audio on your iPhone will stop automatically.`,
        tip: `This Clock app trick works with any app on your iPhone — podcasts, YouTube, audiobooks, or any streaming service.`
      },
      {
        title: `Set a sleep timer in Amazon Music`,
        content: `Open the Amazon Music app and start playing something. Tap the song or album art at the bottom to open the full player screen. Tap the three-dot menu (•••) or the "More options" icon — this may be in a corner of the screen or near the progress bar, depending on your phone. Look for "Sleep Timer" in the menu. Tap it and choose your preferred duration.`
      },
      {
        title: `Check or cancel a running sleep timer`,
        content: `In Spotify, return to the Now Playing screen, tap the three-dot menu, and tap "Sleep timer" again — you'll see the remaining time and a "Cancel timer" option. In the Clock app on iPhone, open the Clock app and tap "Timer" to see the countdown, then tap "Cancel" if you want to stop it early. In Amazon Music, go back to the three-dot menu and tap "Sleep Timer" to find a cancel option.`,
        warning: `If you leave your phone plugged in while sleeping with a sleep timer, make sure you're not also running a bright screen-on feature that could waste battery or disturb your sleep with light.`
      }
    ]
  },
  {
    slug: `windows-see-wifi-password-guide`,
    title: `How to Find Your WiFi Password on Windows`,
    excerpt: `View the password for your current WiFi network on a Windows PC so you can share it with a guest or connect another device.`,
    category: `windows-guides`,
    tags: [`windows`, `wifi`, `password`, `network`, `internet`, `windows 11`, `windows 10`],
    readTime: `5 min`,
    thumbnailEmoji: `🔑`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `You're connected to your home WiFi, but someone visits and asks for the password — and you can't remember it. Or you got a new tablet and need to enter the WiFi password to connect it. If your Windows computer is already connected to that network, you can look up the password right there on the computer without digging out your router or calling your internet provider.

Windows stores the passwords of all WiFi networks you've ever connected to. With a few clicks, you can view the password in plain text and write it down or share it.

This method works on Windows 10 and Windows 11. There are two ways to find the password: through the Settings or Control Panel (which is simpler and involves no typing), and through a Command Prompt command (which takes a bit more typing but works reliably on all Windows versions).

The password shown is the one your computer used to connect — so if the password was changed on the router since you last connected, it may show an outdated password. In that case, you'd need to check the router itself.

Once you find the password, write it somewhere you'll remember — a notepad kept near the router is a classic solution many households use.`,
    steps: [
      {
        title: `Click the WiFi icon in the taskbar`,
        content: `Look at the bottom right corner of your Windows screen (the taskbar). You'll see a WiFi symbol — it looks like a series of curved lines, like radio waves. Click it once. A panel opens showing your current network and other nearby networks.`,
        tip: `On Windows 11, you may need to click a small arrow next to the WiFi icon to expand the network panel.`
      },
      {
        title: `Open Network & Internet settings`,
        content: `In the WiFi panel that appeared, click on the name of your connected network, or look for a link that says "Network & Internet settings" or "Properties." Click it to open the settings page for your network.`
      },
      {
        title: `Find network properties and show the password`,
        content: `On Windows 11: On the network properties page, scroll down until you see "Network security key" — this is your WiFi password, but it appears as dots (•••••). Click the eye icon next to it to reveal the actual characters. Write down the password.

On Windows 10: Go to Control Panel → Network and Internet → Network and Sharing Center. Click on your WiFi network name (in blue, next to "Connections"). In the window that appears, click "Wireless Properties." Go to the "Security" tab. Check the box that says "Show characters" next to "Network security key." The password will appear.`,
        tip: `Take a photo of the password with your phone, or write it on a sticky note and keep it on or near your router so you always have it handy.`
      },
      {
        title: `Use Command Prompt if the above steps don't work`,
        content: `Press the Windows key on your keyboard (it has the Windows logo on it), type "cmd," and press Enter to open Command Prompt. Type the following exactly and press Enter: netsh wlan show profile name="YourNetworkName" key=clear — but replace YourNetworkName with the actual name of your WiFi network (spelled exactly as it appears). In the results that appear, look for a line that says "Key Content" — the text after the colon is your password.`,
        warning: `Replace YourNetworkName with your actual network name. If the name has spaces, wrap it in quotation marks, like: netsh wlan show profile name="Home Network 5G" key=clear`
      }
    ]
  },
  {
    slug: `mac-see-wifi-password-guide`,
    title: `How to Find a Saved WiFi Password on a Mac`,
    excerpt: `Look up any saved WiFi network password on your Mac using System Settings in macOS Ventura and later, or Keychain Access on older Macs.`,
    category: `mac-guides`,
    tags: [`mac`, `wifi`, `password`, `macos`, `keychain`, `network`, `internet`],
    readTime: `5 min`,
    thumbnailEmoji: `🔑`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your Mac remembers the password for every WiFi network you've ever connected to. If you need to share your home WiFi password with a visitor, connect a new device, or just remind yourself what the password is, your Mac can show it to you.

The steps depend on which version of macOS you're running. Apple made this easier in macOS Ventura (released in 2022) by adding a WiFi password viewer right inside System Settings — you no longer need to open a separate app. On older Macs running macOS Monterey or earlier, you'll use an app called Keychain Access.

To find out which version of macOS you have, click the Apple logo in the top left corner of your screen, then click "About This Mac." The version name and number will appear.

Both methods require you to confirm your identity using your Mac's login password or Touch ID — this is a security measure to prevent strangers from seeing your saved passwords.

Your Mac must have connected to the WiFi network at least once for the password to be stored. If your router's password was changed after you last connected, the stored password may be outdated.`,
    steps: [
      {
        title: `Check which macOS version you have`,
        content: `Click the Apple logo (the apple symbol) in the very top left corner of your screen. Click "About This Mac." A window appears showing your macOS version name and number. If it says macOS Ventura (13), Sonoma (14), Sequoia (15), or anything higher, follow Steps 2–3. If it says Monterey (12) or earlier, skip to Step 4.`
      },
      {
        title: `macOS Ventura and later — open System Settings`,
        content: `Click the Apple logo in the top left, then click "System Settings." In the left sidebar, click "Wi-Fi." You'll see your current network and a list of known networks. Find the network whose password you want, then click the "i" button (a circle with the letter i) next to it.`
      },
      {
        title: `Reveal the password in System Settings`,
        content: `In the window that appears for that network, find the "Password" field — it shows dots (•••). Click the eye icon next to it or click directly on the dots. Your Mac will ask you to confirm your identity with your login password or Touch ID. Once confirmed, the password appears in plain text. Write it down.`,
        tip: `You can click the copy icon next to the revealed password to copy it to your clipboard, then paste it wherever you need it.`
      },
      {
        title: `macOS Monterey or earlier — use Keychain Access`,
        content: `Open Finder, then go to Applications → Utilities → Keychain Access. (Or use Spotlight: press Command + Space, type "Keychain Access," and press Enter.) In Keychain Access, make sure "login" is selected on the left under Keychains. In the search box in the top right, type the name of your WiFi network. You'll see it appear in the list — double-click it.`
      },
      {
        title: `Show the password in Keychain Access`,
        content: `A window opens with details about that WiFi entry. Check the box next to "Show password" at the bottom. Your Mac will ask for your Mac login username and password (not the WiFi password). Enter them and click "Allow." The WiFi password will appear in the "Show password" field. Write it down.`,
        warning: `Keychain Access holds sensitive security information. Only use it on your personal Mac, not on a shared or public computer.`
      }
    ]
  },
  {
    slug: `android-wifi-password-guide`,
    title: `How to See Your WiFi Password on Android`,
    excerpt: `Find your saved WiFi password on Android 10 and later, and share it instantly with guests using a QR code they can scan with their phone.`,
    category: `phone-guides`,
    tags: [`android`, `wifi`, `password`, `qr code`, `network`, `share wifi`],
    readTime: `5 min`,
    thumbnailEmoji: `🔑`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you need to share your home WiFi password with a guest or connect a new device, and you can't remember the password, your Android phone can help — as long as you're already connected to that network.

Android 10 and later (released in 2019) added the ability to view and share saved WiFi passwords. There are two ways to do this:

1. **The QR code method:** Your phone generates a QR code that another Android or iPhone can scan to connect automatically — no typing required. This is the fastest and most popular method.

2. **Viewing the actual text password:** Some Android phones (particularly Google Pixel phones and certain Samsung models) will also show you the password in plain text so you can type it or write it down.

The exact steps vary a little depending on your phone brand. Samsung phones (running One UI 3.1 and later) work slightly differently from Google Pixel phones and other Android brands, but the core idea is the same: go to your WiFi settings, find the connected network, and look for a share or QR code option.

This guide covers the most common Android approaches. If your phone's screen looks a bit different from what's described, look for a "Share," "QR code," or similar option near your WiFi network name.`,
    steps: [
      {
        title: `Open Settings and go to WiFi`,
        content: `Open the Settings app on your Android phone (gear icon). Tap "Network & internet," "Connections," or "WiFi" — the label varies by phone brand. Tap "Wi-Fi" if needed to open the WiFi settings. You should see your currently connected network at the top, with a checkmark or "Connected" label.`
      },
      {
        title: `Tap on your connected network`,
        content: `Tap the name of the network you're connected to. A details page will open. Look for a "Share" button, a QR code icon, or a gear icon next to the network name. The exact location varies: on Samsung phones, tap the network name and then look for a QR code icon at the bottom. On Pixel phones, tap the network name and look for a "Share" option.`
      },
      {
        title: `Generate and share the QR code`,
        content: `Tap "Share" or the QR code icon. Your phone may ask you to verify your identity with your fingerprint, PIN, or pattern. Once verified, a QR code appears on your screen. Hand your phone to your guest or hold it up so they can scan it. On an iPhone, they open the Camera app and point it at the QR code. On Android, the Camera app or Google Lens can scan it. Scanning the QR code connects them to the WiFi automatically.`,
        tip: `The QR code is specific to your network and contains the password encoded inside it. Treat it the same way you'd treat your written password — don't screenshot and post it publicly.`
      },
      {
        title: `View the plain-text password (Pixel phones and some others)`,
        content: `On a Google Pixel phone: after tapping the network and verifying your identity, you should see the actual password written below the QR code. You can tap and hold it to copy it. On Samsung phones running One UI 5 or later: tap the network, tap the QR code icon, then look below the QR code for the password text. On older Samsung phones, the text password may not be displayed, and the QR code method is the main option.`,
        warning: `If your Android is version 9 or older, these built-in options may not be available. In that case, the password is stored on your router itself — check the label on your router or contact your internet provider.`
      }
    ]
  },
  {
    slug: `mac-airplay-to-tv-guide`,
    title: `How to Use AirPlay to Stream from Your Mac to a TV`,
    excerpt: `Mirror your Mac's screen or stream video to an Apple TV or AirPlay-compatible smart TV wirelessly — no cables needed.`,
    category: `mac-guides`,
    tags: [`mac`, `airplay`, `apple tv`, `smart tv`, `screen mirror`, `streaming`, `wireless`],
    readTime: `6 min`,
    thumbnailEmoji: `📺`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `AirPlay is Apple's wireless technology for sending video and audio from one Apple device to another — or to a compatible smart TV. With AirPlay, you can stream a movie playing in your Mac's browser, mirror your entire Mac screen onto your TV for a bigger view, or play music from your Mac through speakers connected to an Apple TV.

To use AirPlay from your Mac to a TV, you need two things:
1. A Mac running macOS Monterey or later (though basic AirPlay has been available since macOS Big Sur).
2. An Apple TV (any model) connected to your TV, OR a smart TV that supports AirPlay 2. Many modern smart TVs from Samsung, LG, Sony, and Vizio support AirPlay 2.

Both your Mac and the Apple TV or smart TV must be connected to the same WiFi network. If one is on your home WiFi and the other is on a guest network or a different network, AirPlay won't find it.

There are two modes: **Screen Mirroring**, which shows everything on your Mac screen on the TV (useful for presentations or browsing the web on a big screen), and **AirPlay from an app**, which sends only the video or audio from a specific app to the TV while your Mac screen stays independent (useful for watching a movie on TV while doing something else on your Mac).`,
    steps: [
      {
        title: `Make sure both devices are on the same WiFi`,
        content: `On your Mac, click the WiFi icon in the menu bar and confirm which network you're on. On your Apple TV, go to Settings → Network and confirm the same network name. On a smart TV with AirPlay, check its network settings (usually in Settings → Network or WiFi). Both must show the same network name before AirPlay will work.`
      },
      {
        title: `Use the Control Center to start Screen Mirroring`,
        content: `On your Mac, click the Control Center icon in the top right corner of your menu bar — it looks like two toggle switches. Click "Screen Mirroring." A list of available AirPlay devices will appear. Click your Apple TV or smart TV's name. Your Mac screen will appear on your TV within a few seconds.`,
        tip: `If you don't see your TV in the list, make sure it's turned on, connected to the same WiFi, and has AirPlay turned on in its settings.`
      },
      {
        title: `AirPlay a video from a specific app`,
        content: `Many apps — including the Apple TV app, Safari, and QuickTime Player — have a built-in AirPlay button. Look for a rectangle with a triangle pointing up (the AirPlay icon) in the playback controls of the video. Click it and select your TV from the list. The video will play on your TV while your Mac screen remains free for other tasks.`
      },
      {
        title: `Adjust the display settings when mirroring`,
        content: `While Screen Mirroring is active, you can go to System Settings → Displays to adjust the resolution or choose whether the TV shows an exact mirror of your Mac or acts as an extended second display (meaning you can move windows onto the TV separately). For most casual uses, the default mirror mode works well.`,
        tip: `If the picture looks blurry on the TV, try setting your Mac's resolution to match your TV's resolution (1080p or 4K) in System Settings → Displays.`
      },
      {
        title: `Stop AirPlay`,
        content: `When you're done, click Control Center in your Mac's menu bar, click "Screen Mirroring," and click your TV's name again to disconnect. Alternatively, you can click the AirPlay icon that appears in your menu bar while mirroring is active and select "Stop Mirroring." Your Mac screen will return to normal immediately.`
      }
    ]
  },
  {
    slug: `firefox-beginners-guide`,
    title: `Getting Started with Mozilla Firefox`,
    excerpt: `Firefox is a free, privacy-focused web browser — this beginner's guide covers setup, key features, and why many people choose it over Chrome.`,
    category: `essential-skills`,
    tags: [`firefox`, `web browser`, `privacy`, `internet`, `beginners`, `mozilla`],
    readTime: `7 min`,
    thumbnailEmoji: `🦊`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `A web browser is the program you use to visit websites — it's the gateway to everything on the internet. You may already be familiar with Google Chrome or Microsoft Edge. Mozilla Firefox is another excellent option, and millions of people prefer it because it's built around privacy and is not owned by an advertising company.

Firefox is made by Mozilla, a nonprofit organization whose mission is to keep the internet open and safe for everyone. Firefox is completely free and is available for Windows, Mac, iPhone, Android, and Linux.

**Why some people choose Firefox over Chrome:**
- Firefox is owned by a nonprofit, not a company that makes money from advertising. This means Firefox is not designed to collect and use your browsing habits to show you ads.
- Firefox has strong built-in privacy features, including Enhanced Tracking Protection, which blocks many of the trackers that websites use to follow you around the internet.
- Firefox tends to use less memory (RAM) than Chrome, which can make it faster on older computers.
- Firefox is highly customizable with thousands of free add-ons (extensions) that let you add features or block ads.

**Things Chrome does better:**
- Chrome is faster on most modern computers and very well-optimized for Google services like Gmail and Google Docs.
- Chrome has a larger library of extensions.
- If you're heavily invested in the Google ecosystem, Chrome makes switching between devices more seamless.

Neither browser is perfect. Many people use Firefox as their main browser for everyday browsing and switch to Chrome when they need to use a specific Google service. You can have both installed at the same time.`,
    steps: [
      {
        title: `Download and install Firefox`,
        content: `On your computer, open your current browser (Chrome, Edge, or Safari) and go to www.firefox.com. Click the large purple "Download Firefox" button. The download will start automatically. Once downloaded, open the file (it might be in your Downloads folder or appear at the bottom of your screen). Follow the installation instructions — typically you click "Next" or "Continue" a few times and then "Finish." Firefox will open automatically when installation is complete.`,
        tip: `The download is free and safe directly from Mozilla's official website at firefox.com.`
      },
      {
        title: `Set up Firefox for the first time`,
        content: `When Firefox opens for the first time, it may ask if you want to import bookmarks and settings from your current browser. If you want to bring over your saved websites from Chrome or Edge, click "Import." If you'd rather start fresh, click "Not now." Firefox will then show you its home page with a search bar and, optionally, suggested stories from the web.`
      },
      {
        title: `Learn the basic controls`,
        content: `The address bar is at the top — type a website address (like www.google.com) or search terms directly into it and press Enter. To go back to the previous page, click the left arrow in the top left. To refresh a page, click the circular arrow or press F5 on your keyboard. To open a new tab, click the plus (+) button to the right of your open tabs, or press Ctrl+T on Windows or Command+T on Mac.`
      },
      {
        title: `Explore the privacy settings`,
        content: `Click the three horizontal lines (the menu icon) in the top right corner of Firefox. Click "Settings." In the left sidebar, click "Privacy & Security." Here you can choose your level of Enhanced Tracking Protection: Standard, Strict, or Custom. Standard is recommended for most users — it blocks many trackers without breaking most websites. Strict blocks more, but may cause a few websites to look or act unexpectedly.`,
        tip: `Firefox also has a private browsing window (like Chrome's Incognito). Press Ctrl+Shift+P (Windows) or Command+Shift+P (Mac) to open a private window. Websites visited in private mode are not saved in your history.`
      },
      {
        title: `Sign in to sync across your devices (optional)`,
        content: `Firefox lets you create a free Firefox account to sync your bookmarks, passwords, history, and open tabs across your phone and computer. Click the person icon in the top right corner of Firefox, then click "Sign In" or "Create Account." Once signed in, install Firefox on your phone from the App Store or Google Play Store and sign in with the same account.`
      }
    ]
  },
  {
    slug: `instagram-dm-guide`,
    title: `How to Use Instagram Direct Messages (DMs)`,
    excerpt: `Send private photos, videos, voice messages, and text to friends on Instagram — without anyone else seeing them — using Instagram DMs.`,
    category: `social-media`,
    tags: [`instagram`, `direct messages`, `dm`, `private messages`, `social media`, `photo sharing`],
    readTime: `6 min`,
    thumbnailEmoji: `💬`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Instagram is primarily known as a place to share photos and videos publicly on your profile. But Instagram also has a private messaging feature called Direct Messages — or DMs — that lets you have conversations that only you and the other person (or people) can see.

With Instagram DMs, you can:
- Send text messages, photos, and videos privately
- Share posts or Reels from your Instagram feed directly with a friend
- Record and send voice messages
- Send disappearing photos and videos that delete after the recipient views them
- Start group conversations with multiple people at once
- React to messages with emojis

DMs are popular for casual conversation between people who follow each other, but you can also send DMs to people you don't follow — though their messages may land in a "Message Requests" folder that they have to accept before they see it.

To use Instagram DMs, you need an Instagram account (free to create) and the Instagram app installed on your phone. You can also access DMs on the Instagram website on a computer, though the app is more feature-rich.

This guide assumes you already have an Instagram account. If you don't have one yet, you can create a free account at instagram.com or in the Instagram app.`,
    steps: [
      {
        title: `Open the Instagram app and go to your messages`,
        content: `Open the Instagram app on your phone. Look at the top right corner of the screen — you'll see a paper airplane icon or a speech bubble icon (Instagram has changed this icon a few times over the years). Tap it to open your Direct Messages inbox.`
      },
      {
        title: `Start a new conversation`,
        content: `In your messages inbox, tap the pencil and paper icon (or a compose icon) in the top right corner. A search box will appear. Type the name or username of the person you want to message. Their account will appear in the results — tap their name to select them. Then tap "Chat" or "Next" to open a new message thread with them.`,
        tip: `You can also start a DM from someone's profile. Go to their profile page and tap the "Message" button below their bio.`
      },
      {
        title: `Send a message, photo, or voice note`,
        content: `In the conversation, tap the text box at the bottom and type your message. Press the paper airplane send button (or the blue arrow) to send it. To send a photo from your camera roll, tap the photo icon to the left of the text box and choose a photo. To record a voice message, press and hold the microphone icon. To take a photo or video directly in the app, tap the camera icon.`
      },
      {
        title: `Share a post or Reel with someone`,
        content: `If you're scrolling through Instagram and see a post or Reel you want to share privately with a friend, tap the paper airplane icon below the post. A list of your recent conversations appears. Tap the person you want to send it to, then tap "Send." The post will appear in your DM conversation with a link they can tap to view it.`,
        tip: `This is a great way to share recipes, funny videos, or news articles with family members who are on Instagram.`
      },
      {
        title: `Manage message requests`,
        content: `When someone who doesn't follow you sends you a DM, it goes into your Message Requests folder rather than your main inbox. To see it, open your inbox and look for "Requests" near the top. Tap it to review the message. You can accept the request (adding it to your main inbox), delete it, or block the sender.`,
        warning: `Be cautious about accepting message requests from accounts you don't recognize. Scammers often reach out through Instagram DMs, particularly if you mention personal interests or financial topics in your profile.`
      }
    ]
  },
  {
    slug: `alarm-clock-tips-guide`,
    title: `Getting the Most from Your Phone's Alarm Clock`,
    excerpt: `Set multiple labeled alarms, adjust snooze settings, use gradual wake volume, and make your phone a reliable alarm clock replacement.`,
    category: `phone-guides`,
    tags: [`alarm clock`, `iphone`, `android`, `clock app`, `alarm`, `tips`, `morning routine`],
    readTime: `6 min`,
    thumbnailEmoji: `⏰`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your phone is actually a very capable alarm clock — often more flexible than any standalone alarm clock you could buy. But many people only use the most basic features and miss out on tools that could make waking up (and staying on schedule throughout the day) a lot easier.

Here are some of the most useful alarm clock features built into iPhone and Android phones:

**Multiple alarms:** You're not limited to one alarm. You can set as many as you want — for example, one at 6:30 AM and another at 7:00 AM as a backup.

**Labels:** Name each alarm so you know what it's for. Instead of just an alarm ringing, you'll see "Take morning medication" or "Leave for doctor appointment" on your screen.

**Repeating alarms:** Set an alarm to repeat on specific days of the week instead of having to reset it every day.

**Snooze control:** You can customize how long the snooze lasts (5 minutes, 10 minutes, etc.) or turn snooze off entirely so you're forced to get up.

**Gradual volume:** Some phones let you set alarms to start quietly and get louder gradually, which is gentler on the body than a sudden loud alarm.

**Custom alarm sounds:** Choose from built-in sounds, or pick a song from your music library as your alarm tone.

**Using your phone as an alarm clock dock:** If you charge your phone on your nightstand, you can set it up to display the time clearly at night — many people use StandBy mode on iPhone or a bedside clock widget on Android for this.`,
    steps: [
      {
        title: `Create a labeled alarm`,
        content: `On iPhone: Open the Clock app and tap "Alarm" at the bottom. Tap the plus (+) button to add an alarm. Set the time using the scroll wheels. Tap "Label" and type a name — something like "Morning medication" or "Tuesday yoga class." Tap "Save." On Android: Open the Clock app. Tap the plus (+) button. Set the time and tap the pencil icon next to the alarm to add a label.`,
        tip: `Labeled alarms are especially helpful for medication reminders — you'll see the label right on your screen when the alarm goes off, so you know exactly why it's ringing.`
      },
      {
        title: `Set an alarm to repeat on specific days`,
        content: `When creating or editing an alarm, look for a "Repeat" option. Tap it to select which days of the week you want the alarm to go off. For example, you might set a weekday alarm for Monday through Friday, and a weekend alarm for Saturday and Sunday at a different time. Repeating alarms stay active without you having to reset them.`
      },
      {
        title: `Adjust snooze settings`,
        content: `On iPhone: When editing an alarm, tap the "Snooze" toggle to turn snooze on or off. (iPhone always uses a 9-minute snooze — you can't change the duration without third-party apps.) On Android: When editing an alarm, look for a "Snooze" option with a length setting — many Android phones let you choose 5, 10, 15, or 20 minutes. You can also disable snooze entirely if you want to avoid the temptation.`
      },
      {
        title: `Choose a gentle wake-up sound`,
        content: `When editing an alarm, tap the sound or ringtone setting. Browse the list of built-in sounds — look for options with names like "Slow Rise," "Ripples," "Chimes," or "Birdsong" which tend to be gentler than the default loud beeping sounds. On Android, you can also choose a song from your music library. Some phones have a "gradual volume" setting — look for it in the alarm settings and turn it on.`
      },
      {
        title: `Set multiple backup alarms`,
        content: `If you're worried about sleeping through one alarm, set a second alarm 10–15 minutes later as a backup. Give each one a different label so you know which is which. Both alarms will fire on the days they're set for, and you can easily turn off the backup on days you don't need it by tapping the toggle next to it in your alarm list.`,
        tip: `A common setup: a gentle alarm 20 minutes before you need to be up (to let you wake slowly), and a firm deadline alarm 5 minutes before you absolutely must get out of bed.`
      },
      {
        title: `Use your phone as a bedside clock`,
        content: `On iPhone: Plug your iPhone into a charger and set it face-up or in a stand — it will enter StandBy mode automatically, displaying a large clock on screen. On Android: Many phones have a bedside mode or "Clock" screen saver feature. Go to Settings → Display → Screen Saver (or "Daydream") and set it to show a clock when charging. This way, your phone shows the time clearly all night without you having to unlock it.`
      }
    ]
  },
  {
    slug: `iphone-alarm-bedtime-guide`,
    title: `How to Set a Bedtime Reminder and Gentle Wake Alarm on iPhone`,
    excerpt: `Use iPhone's Sleep/Wake Up feature in the Health app to set a relaxing bedtime reminder and a gradual-wake alarm tied to your sleep schedule.`,
    category: `health-tech`,
    tags: [`iphone`, `health app`, `sleep`, `alarm`, `bedtime`, `wake up`, `wellness`, `ios`],
    readTime: `6 min`,
    thumbnailEmoji: `🌙`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Getting enough sleep is one of the most important things you can do for your health — and your iPhone has tools specifically designed to help you build better sleep habits.

The iPhone's Health app includes a Sleep feature (called "Sleep" or "Sleep Schedule") that works differently from a regular alarm. Instead of just waking you up, it tracks your sleep, sends you a gentle reminder when it's time to wind down for bed, and wakes you up with a gradually increasing alarm tone at a specific time.

Here's what the Sleep feature does:
- **Bedtime reminder:** Your iPhone sends you a notification in the evening reminding you that it's almost time for sleep. This nudge helps you start wrapping up your day and getting ready for bed.
- **Sleep Focus:** When your bedtime arrives, your phone automatically switches to a "Sleep Focus" mode that silences most notifications so your sleep isn't disturbed. Your phone still shows the time and allows alarms and emergency calls.
- **Wake Up alarm:** At your chosen wake-up time, a gentle alarm plays — by default it starts quietly and gradually gets louder, which many people find much more comfortable than a sudden loud noise.

The Sleep feature can also connect with Apple Watch to track how long you actually sleep and give you sleep data in the Health app over time. But you don't need an Apple Watch — the Health app's sleep scheduling works on any iPhone.`,
    steps: [
      {
        title: `Open the Health app`,
        content: `Find the Health app on your iPhone — it has a white icon with a red heart. Tap it to open it. If this is your first time opening it, you may be asked to enter some basic health information. You can skip optional fields.`,
        tip: `The Health app comes pre-installed on all iPhones and cannot be deleted. If you don't see it, swipe down on your home screen and search for "Health."`
      },
      {
        title: `Find the Sleep section`,
        content: `Inside the Health app, tap "Browse" at the bottom of the screen. Scroll down and tap "Sleep." Or tap "Summary" at the bottom and look for a Sleep section there. Once you're in the Sleep area, tap "Get Started" or "Set Up Sleep" if prompted, or look for a "Full Schedule & Options" link.`
      },
      {
        title: `Set your sleep goal and schedule`,
        content: `The app will ask for your sleep goal — how many hours of sleep you want per night. The standard recommendation for adults is 7–9 hours. Use the + and - buttons to set your goal. Next, set your Wake Up time (the time you want to be awoken) and your Bedtime (the time you plan to go to sleep). You can set different schedules for weekdays versus weekends.`
      },
      {
        title: `Configure the bedtime reminder`,
        content: `Look for an option called "Wind Down" or "Bedtime Reminder." This sets how many minutes before your bedtime you'll receive a reminder notification. Choosing 30 minutes is a popular option — you get a gentle nudge to start winding down, put down your devices, and prepare for sleep. Toggle it on and set the time.`
      },
      {
        title: `Choose your wake-up alarm sound`,
        content: `Look for "Alarm Options" or "Wake Up Alarm." Make sure the alarm is turned on (toggle it on if needed). Tap the sound option to see a list of available tones — options like "Birdsong," "Droplets," "Harp," or "Twinkle" are designed to be gentler than standard alarm tones. Tap one to preview it. The wake alarm defaults to starting quietly and growing louder, which is much easier on the body.`,
        tip: `You can still snooze this alarm — when it goes off, tap "Snooze" on the lock screen to get a few extra minutes.`
      },
      {
        title: `Turn Sleep Focus on or off`,
        content: `When your bedtime arrives each night, your iPhone will switch on Sleep Focus automatically, silencing notifications. If you need to make or receive calls or check something urgently, you can turn off Sleep Focus by swiping down from the top right corner of your screen to open Control Center, tapping "Focus," and tapping "Sleep" to toggle it off. Your alarm will still go off in the morning even if Focus is off.`,
        warning: `If you turn off your sleep schedule alarm, you will not have a wake-up alarm in the morning. Make sure a regular alarm in the Clock app is set as a backup if you're concerned about oversleeping.`
      }
    ]
  },
  {
    slug: `iphone-accessibility-overview-guide`,
    title: `iPhone Accessibility Settings That Help Seniors Every Day`,
    excerpt: `A plain-English tour of iPhone features for larger text, screen zoom, voice readout, easier tapping, and where to find all these settings.`,
    category: `phone-guides`,
    tags: [`iphone`, `accessibility`, `seniors`, `large text`, `zoom`, `assistivetouch`, `ios`, `disability`],
    readTime: `8 min`,
    thumbnailEmoji: `♿`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Apple has put a tremendous amount of work into making the iPhone usable for people of all ages and abilities. Many of the features that help people with disabilities also turn out to be very useful for anyone whose eyesight, hearing, or hand dexterity has changed with age.

All of these features are built into every iPhone and are completely free to use. You don't need to download anything. They live in one place: **Settings → Accessibility**.

Here are the most useful accessibility features for everyday use:

**Display & Text Size:** Make text bigger throughout the entire phone — not just in one app. You can also make text bold, increase contrast, and reduce motion effects that can cause dizziness.

**Zoom:** Magnify any part of your screen by double-tapping with three fingers. Different from making text bigger — Zoom lets you enlarge anything on screen, including photos, maps, and small interface elements.

**Spoken Content:** Have your iPhone read text aloud to you. You can have it read selected text, read the entire screen, or even speak each word as you type it — helpful for catching mistakes.

**AssistiveTouch:** Creates a virtual button on your screen that makes common actions — like taking a screenshot, locking the screen, or adjusting volume — accessible with a single tap. Very helpful if physical buttons are hard to press.

**Touch Accommodations:** Adjusts how the screen responds to your touches — useful if your hands shake or you have trouble with tap timing.

**Larger Tap Targets:** Makes many on-screen buttons easier to tap.

None of these settings change what your iPhone can do — they only change how it works for you personally.`,
    steps: [
      {
        title: `Find the Accessibility settings`,
        content: `Open the Settings app (the gray gear icon) on your iPhone. Scroll down and tap "Accessibility." This is the main hub for all the features described in this guide. At the top of Accessibility settings, you'll see a summary of which features are currently turned on.`
      },
      {
        title: `Make text bigger (Display & Text Size)`,
        content: `In Accessibility settings, tap "Display & Text Size." Tap "Larger Text" to open a slider — drag it to the right to make text larger throughout the phone. Toggle on "Bold Text" to make all text heavier and easier to read. You can also toggle on "Increase Contrast" which darkens backgrounds and makes text easier to distinguish from the background.`,
        tip: `The "Larger Accessibility Sizes" toggle (at the top of the Larger Text screen) unlocks even larger text sizes that aren't available by default. If the largest standard size still isn't big enough, try turning this on.`
      },
      {
        title: `Turn on Zoom for magnifying anything on screen`,
        content: `In Accessibility settings, tap "Zoom." Toggle it on. Now you can double-tap with three fingers anywhere on your screen to zoom in. Drag with three fingers to pan around the zoomed view. Double-tap with three fingers again to zoom back out. In Zoom settings, you can adjust the maximum zoom level and choose between a full-screen zoom (the entire screen enlarges) or a window zoom (a moveable magnifying window appears).`
      },
      {
        title: `Set up Spoken Content so the phone reads text aloud`,
        content: `In Accessibility settings, tap "Spoken Content." Toggle on "Speak Selection" — now when you select text anywhere, a "Speak" button appears. Tap it and your iPhone will read the selected text aloud. Also consider toggling on "Speak Screen" — when this is on, you can swipe down from the top of the screen with two fingers and your iPhone will read the entire page or screen aloud.`,
        tip: `You can adjust the speaking rate under "Speaking Rate" — if the voice speaks too fast or too slow, drag the slider until it's comfortable.`
      },
      {
        title: `Turn on AssistiveTouch for easier button access`,
        content: `In Accessibility settings, tap "Touch," then tap "AssistiveTouch." Toggle it on. A small white square with a circle inside it will appear on your screen — this is your AssistiveTouch button. Tap it to reveal a menu of actions. You can customize what appears in this menu (go to "Customize Top Level Menu" in AssistiveTouch settings). Useful shortcuts to add: Home, Lock Screen, Volume Up, Volume Down, and Screenshot.`,
        tip: `You can drag the AssistiveTouch button to any edge of your screen to keep it out of the way. It stays wherever you put it.`
      },
      {
        title: `Set up Accessibility Shortcut for quick on/off`,
        content: `At the very bottom of the Accessibility settings page, tap "Accessibility Shortcut." Choose one or two features you want to quickly toggle on and off (like Zoom or AssistiveTouch). Now you can triple-click (click three times fast) the side button on your iPhone to quickly turn that feature on or off. This is handy if you only need a feature sometimes — turn it on when you need it, off when you don't.`
      }
    ]
  },
  {
    slug: `google-assistant-routine-guide`,
    title: `How to Create a Google Assistant Routine on Android`,
    excerpt: `Set up a Google Assistant routine on your Android phone so one voice command — like "Good morning" — triggers a whole sequence of helpful actions.`,
    category: `smart-home`,
    tags: [`google assistant`, `android`, `routine`, `automation`, `smart home`, `voice commands`],
    readTime: `6 min`,
    thumbnailEmoji: `🤖`,
    publishedAt: `2026-04-19`,
    difficulty: `Intermediate`,
    body: `Google Assistant is the voice helper built into Android phones. You probably already know you can say "Hey Google, set a timer" or "Hey Google, what's the weather?" — one question, one answer. But Google Assistant can also run a sequence of multiple actions in response to a single command. These are called Routines.

Here are a few examples of what a Routine can do:

**Good morning routine:** Say "Hey Google, good morning" and your phone tells you the weather forecast, reads you any calendar events you have today, plays your favorite morning music or news briefing, and turns on your smart lights if you have them — all from one phrase.

**Bedtime routine:** Say "Hey Google, good night" and your phone sets an alarm for the next morning, turns your ringer to silent, turns off your smart lights, and plays soothing background sounds.

**I'm leaving routine:** Say "Hey Google, I'm leaving" and your phone reads you your commute time to a common destination, checks if you have any upcoming calendar events, and turns off your smart home devices.

Routines can also be triggered automatically — by a specific time of day, rather than by your voice. For example, a routine that runs every morning at 7 AM to read you the news.

Setting up routines takes about 5–10 minutes and is done in the Google Home app or the Google Assistant settings. You don't need smart lights or other smart home devices to use basic routines — though routines do become more powerful if you have them.`,
    steps: [
      {
        title: `Open Google Home or Google Assistant settings`,
        content: `On your Android phone, open the Google Home app (if you have it — it's a green, red, yellow, and blue house icon). Tap the Routines icon at the bottom, then tap the plus (+) button. Alternatively, say "Hey Google, open Assistant settings," or go to Settings → Google → Assistant → Routines.`,
        tip: `If you don't have the Google Home app, download it free from the Google Play Store. You can also manage routines at home.google.com on a computer.`
      },
      {
        title: `Choose how the routine starts`,
        content: `Tap "Add starter" to choose what triggers the routine. Options include: Voice command (you say a phrase), Time (it runs automatically at a set time), Sunrise/Sunset (it runs relative to the sun), and Alarm (it runs when your alarm goes off). For a "Good morning" routine, choose "Voice" and type "Good morning" as the trigger phrase. You can add multiple phrases that all trigger the same routine.`
      },
      {
        title: `Add actions to the routine`,
        content: `Tap "Add action" to select what happens when the routine starts. Common actions include: Get the weather forecast, Read out calendar events for the day, Play music or a news briefing, Set your phone volume, Control smart home devices, and Read a custom message. Add as many actions as you want — they'll run in order. Use the drag handles (three horizontal lines) to rearrange them.`
      },
      {
        title: `Set up a bedtime routine`,
        content: `Create a second routine with the voice trigger "Good night." Add actions like: Set an alarm for your desired wake-up time, Turn the media volume to 0 (silence), Turn on Do Not Disturb, Turn off smart lights, and Play sleep sounds. This single phrase can replace several taps every night.`
      },
      {
        title: `Save and test your routine`,
        content: `Tap "Save" to save the routine. Now say the trigger phrase to Google Assistant ("Hey Google, good morning") and watch the routine run. Google Assistant will speak or play the actions in sequence. If something isn't right, go back to routines settings, tap the routine you made, and tap the pencil icon to edit it.`,
        tip: `Routines work best when your phone's microphone can hear you clearly. Make sure "Hey Google" detection is turned on in your Assistant settings if your phone isn't responding to voice commands.`
      }
    ]
  },
  {
    slug: `smart-speaker-routines-guide`,
    title: `How to Set Up Morning and Bedtime Routines on Amazon Echo or Google Home`,
    excerpt: `Program your smart speaker to play music, read your schedule, and control your lights with a single "Good morning" or "Good night" command.`,
    category: `smart-home`,
    tags: [`amazon echo`, `google home`, `alexa`, `routines`, `smart speaker`, `automation`, `morning routine`],
    readTime: `7 min`,
    thumbnailEmoji: `🌅`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Smart speakers — like Amazon Echo (which uses Alexa) and Google Home or Nest speakers (which use Google Assistant) — become much more powerful when you set up Routines. A Routine lets you say one phrase and have the speaker automatically do a whole list of things.

Imagine waking up every morning and saying "Alexa, good morning" or "Hey Google, good morning" — and your speaker responds by telling you what the weather is like today, listing any appointments you have, playing your favorite morning music or radio station, and turning on the lights in your bedroom (if you have smart bulbs). All from one command.

At bedtime, saying "Good night" could have your speaker set an alarm for the next morning, play soft relaxation sounds, and turn off your lights.

You don't need a fully equipped smart home to use basic routines. Even without smart lights, you can still have your speaker read the weather, news headlines, or your schedule, and play music — that alone saves several separate commands every morning.

Setting up routines is done in the smartphone app that controls your speaker: the Alexa app for Amazon Echo devices, and the Google Home app for Google Home and Nest speakers. You need the app installed on your phone to set up routines, but once set up, you control everything with your voice.`,
    steps: [
      {
        title: `Open the correct app for your speaker`,
        content: `For Amazon Echo: Open the Alexa app on your phone (orange icon). For Google Home or Nest: Open the Google Home app (colorful house icon). If you don't have the app, download it free from the App Store (iPhone) or Google Play Store (Android). Make sure your speaker is set up and connected before trying to create routines.`
      },
      {
        title: `Find Routines in the app`,
        content: `In the Alexa app: Tap the three horizontal lines (menu) in the bottom right, then tap "Routines." In the Google Home app: Tap "Automations" at the bottom of the screen, or tap your profile icon and look for "Routines." Tap the plus (+) button to create a new routine.`
      },
      {
        title: `Set up a Good Morning routine`,
        content: `Name your routine "Good Morning." Set the trigger: choose "Voice" and type "Good morning" as what you'll say. Now add actions — each action is something the speaker will do in order. Suggested morning actions: Weather (today's forecast), Calendar (your events today), Traffic (commute time if applicable), Music (a station or playlist you enjoy), and Smart Home (turn on lights if you have them). Tap "Save" when done.`,
        tip: `In the Alexa app, you can also set a routine to run automatically at a specific time — for example, at 7:30 AM on weekdays — even without saying a word.`
      },
      {
        title: `Set up a Good Night routine`,
        content: `Create a second routine named "Good Night." Trigger: voice command "Good night." Suggested bedtime actions: Set alarm (choose your wake-up time), Do Not Disturb (activates quiet mode on Alexa), Smart Home (turn off lights), Sound (start a sleep sounds playlist or nature sounds), and Volume (lower the speaker volume to a comfortable level). Save the routine.`
      },
      {
        title: `Test your routines`,
        content: `Say "Alexa, good morning" or "Hey Google, good morning" to your speaker. It should begin running through the actions you set up. If something doesn't sound right or a step is missing, go back into the app and edit the routine. You can change the order of actions, remove ones you don't want, or add new ones.`,
        tip: `You can have multiple routines for different situations. Some people set up a "I'm home" routine that plays welcoming music and turns on lights, and a "Leaving" routine that turns everything off.`
      },
      {
        title: `Connect your calendar (optional but helpful)`,
        content: `To have your speaker read your calendar events, link your Google Calendar or Outlook Calendar to the app. In the Alexa app: go to Settings → Calendar, Email & Contacts and connect your calendar account. In the Google Home app: your Google Calendar is already linked if you're signed in with your Google account. Once linked, your morning routine can tell you exactly what's on your schedule each day.`
      }
    ]
  },
  {
    slug: `fire-stick-tips-guide`,
    title: `Amazon Fire TV Stick Tips and Tricks`,
    excerpt: `Get more from your Fire Stick with voice shortcuts, storage management, Kids Mode, performance tweaks, and app organization tricks.`,
    category: `entertainment`,
    tags: [`amazon fire stick`, `fire tv`, `streaming`, `alexa`, `tips`, `tricks`, `smart tv`],
    readTime: `7 min`,
    thumbnailEmoji: `🔥`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `The Amazon Fire TV Stick is a small device that plugs into your TV and lets you stream movies, TV shows, music, and more from services like Netflix, Amazon Prime Video, Hulu, YouTube, and many others. It comes with an Alexa-powered voice remote, which makes it very convenient for quick searches and hands-free control.

If you've had your Fire Stick for a while, you may have noticed it getting a little slow, or you may not be using all the features that came with it. Here are some of the most helpful tips for getting more out of your Fire Stick.

**Voice shortcuts with Alexa:** The microphone button on your remote lets you search for anything by voice, but Alexa can do much more — control playback, check the weather, set timers, and even control smart home devices.

**Organizing your apps:** You can move apps you use often to the top of the home screen and remove apps you never touch to keep things clean.

**Kids Mode:** If grandchildren visit and use the TV, Kids Mode creates a child-friendly screen with age-appropriate content and parental controls.

**Clearing storage:** Over time, apps can take up storage space and slow down your Fire Stick. Clearing the cache of apps you use regularly is one of the best ways to speed things up.

**Do Not Disturb:** Alexa can make sounds during notifications — you can turn this off in settings for uninterrupted viewing.`,
    steps: [
      {
        title: `Use the Alexa voice button more effectively`,
        content: `Press and hold the microphone button on your remote and say commands like: "Play [show name] on Netflix," "Pause," "Fast forward 10 minutes," "Go to the home screen," "Show me comedies," or "What's the weather today?" You can also say "Turn on the TV" or "Set volume to 50" if you've set up your TV brand in the Fire Stick settings under Equipment Control.`,
        tip: `Say "Alexa, go to Settings" to open the settings menu hands-free — no hunting through menus with the remote.`
      },
      {
        title: `Move your favorite apps to the top of the home screen`,
        content: `On the Fire Stick home screen, scroll down to find your apps. Navigate to an app you want to move. Press and hold the OK button (center of the remote's circular pad). A menu will appear — select "Move." Use the left and right arrows to slide the app to a new position. Press OK to place it. Put the apps you use daily (Netflix, Prime Video, YouTube) first.`
      },
      {
        title: `Set up Kids Mode`,
        content: `Go to the Fire Stick home screen and look for a "Kids" icon or profile, or say "Alexa, switch to Kids Mode." If setting it up for the first time, follow the on-screen prompts to create a child profile, set a PIN, and choose an age range. Kids Mode shows only age-appropriate content and requires your PIN to exit. This is great for when grandchildren visit — they can browse freely without accidentally accessing adult content.`
      },
      {
        title: `Clear app cache to speed up your Fire Stick`,
        content: `From the home screen, go to Settings (the gear icon). Tap "Applications," then "Manage Installed Applications." Choose an app that's been acting slow or you use frequently (like Netflix or YouTube). Tap "Clear Cache." This removes temporary files stored by the app without deleting your login or settings. Repeat for any app that seems sluggish.`,
        warning: `Clearing cache is safe. Clearing "Data" is different — it deletes your saved settings and login for that app. Only clear Data if the app is broken and won't work at all.`
      },
      {
        title: `Remove apps you no longer use`,
        content: `Go to Settings → Applications → Manage Installed Applications. Browse the list and find apps you no longer watch or use. Tap the app, then tap "Uninstall." This frees up storage space and keeps your home screen tidy. You can always reinstall apps later from the Amazon Appstore.`
      },
      {
        title: `Restart the Fire Stick to fix glitches`,
        content: `If your Fire Stick is running slowly, freezing, or acting strangely, a simple restart fixes most issues. Go to Settings → My Fire TV → Restart, then confirm. Or press and hold the Select button (center) and the Play/Pause button together for about 5 seconds — the screen will go black and the Fire Stick will restart. This takes about a minute.`,
        tip: `Restarting your Fire Stick once a week or so is a good habit that keeps it running smoothly, similar to restarting a computer.`
      }
    ]
  },
  {
    slug: `iphone-battery-widget-guide`,
    title: `How to Add the Battery Widget to Your iPhone`,
    excerpt: `See battery percentages for your iPhone, AirPods, Apple Watch, and other accessories at a glance by adding the Battery widget to your home screen.`,
    category: `phone-guides`,
    tags: [`iphone`, `battery`, `widget`, `home screen`, `accessories`, `ios`, `apple watch`, `airpods`],
    readTime: `5 min`,
    thumbnailEmoji: `🔋`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Widgets are small panels that sit on your iPhone's home screen and show useful information at a glance — without you having to open an app. The Battery widget is one of the most practical: it shows the current battery percentage of your iPhone, and if you have an Apple Watch, AirPods, or another Apple accessory paired with your iPhone, it shows all their battery levels too.

This is especially helpful if you use AirPods and want to know when they need to be charged before you head out, or if you have an Apple Watch and want to check its battery without raising your wrist.

Adding a widget to your iPhone home screen takes about two minutes. You can also add the Battery widget to the Today View — the screen you see by swiping right from your home screen — if you prefer not to put it on your main home screen.

The Battery widget is available on any iPhone running iOS 14 or later. There are two sizes: a small widget that shows a single device's battery, and a medium widget that shows multiple devices at once. Most people find the medium widget most useful.`,
    steps: [
      {
        title: `Go to the home screen where you want to add the widget`,
        content: `Press the Home button or swipe up to go to your home screen. If you want to add the widget to a specific page of your home screen, swipe left or right to get to that page. You can add the widget anywhere — a page that has some empty space works best.`
      },
      {
        title: `Enter edit mode`,
        content: `Press and hold on an empty area of your home screen (a spot with no app icons) until the screen starts to wiggle. This is called "jiggle mode" — all your app icons will shake slightly. At the top left corner of the screen, you'll see a plus (+) button. Tap it.`,
        tip: `On newer iPhones running iOS 16 or later, you can also tap and hold any app icon to get the option to "Edit Home Screen" and enter jiggle mode that way.`
      },
      {
        title: `Find the Battery widget`,
        content: `A panel of widgets will slide up. You'll see a search bar at the top. Tap it and type "Battery." The Battery widget will appear in the results. Tap it to see the available sizes. You can swipe left and right to preview the small (one device) and medium (multiple devices) sizes.`
      },
      {
        title: `Add the widget to your home screen`,
        content: `Choose the size you want — the medium widget is recommended for households with multiple Apple devices. Tap "Add Widget." The widget will appear on your home screen. While still in jiggle mode, you can drag it to a different position. Press the Home button or tap "Done" in the top right corner when you're finished.`,
        tip: `If your home screen doesn't have space for the widget, iOS may ask you to add it to a new home screen page. Tap "Add to New Page" and it will create a new page with the widget already placed.`
      },
      {
        title: `Add the Battery widget to Today View (alternative option)`,
        content: `Swipe right from your main home screen to open Today View (the screen with widgets on a gray background). Press and hold on an empty area to enter edit mode. Tap the plus (+) button at the top, search for "Battery," and add it. This keeps the widget accessible without taking up space on your main home screen.`,
        tip: `The Battery widget updates automatically throughout the day as your devices charge and discharge — you don't need to refresh it manually.`
      }
    ]
  },
  {
    slug: `block-email-sender-guide`,
    title: `How to Block Unwanted Email Senders`,
    excerpt: `Stop annoying or suspicious emails by blocking senders in Gmail, Apple Mail, and Outlook — on your phone or computer, in just a few taps.`,
    category: `safety-guides`,
    tags: [`email`, `spam`, `block`, `gmail`, `apple mail`, `outlook`, `safety`, `inbox`],
    readTime: `6 min`,
    thumbnailEmoji: `🚫`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If someone keeps emailing you with messages you don't want — spam, unwanted sales pitches, or anything suspicious — you don't have to keep deleting them. You can block the sender, which means future emails from that address go straight to your spam or trash folder, and they'll never clutter your inbox again.

Blocking a sender is different from unsubscribing. Unsubscribing works for legitimate newsletters and marketing emails that have a working unsubscribe link. Blocking is better for suspicious senders, persistent spam, or anyone who doesn't seem to respect unsubscribe requests.

Here's how to block senders in the three most common email services: Gmail, Apple Mail (iPhone and Mac), and Outlook.

**A note about phone apps vs. web browser:** The steps below cover both the phone apps and the web browser versions where relevant. If you use Gmail on the website (mail.google.com on a computer), the steps are slightly different from using the Gmail app on your phone — but both are covered.

After you block someone, their existing emails are not automatically deleted from your inbox — you can delete those manually. Only new emails they send after you block them will be redirected away from your inbox.`,
    steps: [
      {
        title: `Block a sender in Gmail (app or website)`,
        content: `On the Gmail app (iPhone or Android): Open the email from the sender you want to block. Tap the three-dot menu (•••) in the top right corner of the email. Tap "Block [sender's name]." Confirm by tapping "Block" again. On the Gmail website (computer): Open the email. Click the three-dot menu in the top right of the email (to the right of the reply button). Click "Block [sender's name]." Confirm.`,
        tip: `Blocked senders in Gmail are automatically sent to your Spam folder. Future emails from them won't appear in your main inbox.`
      },
      {
        title: `Block a sender in Apple Mail on iPhone`,
        content: `Open the Mail app. Open the email from the person you want to block. Tap the sender's name or photo at the top of the email. A small profile card appears. Tap "Block this Contact." Confirm by tapping "Block this Contact" again in the confirmation menu. From now on, emails from that address will be marked as blocked and moved to your Trash automatically.`
      },
      {
        title: `Block a sender in Apple Mail on Mac`,
        content: `Open Mail on your Mac. Open the email from the unwanted sender. Click on the sender's name at the top of the email. A small box appears — click the small arrow next to their name. From the dropdown menu, click "Block Contact." Blocked emails on Mac Mail are moved to your Trash folder.`,
        tip: `On Mac Mail, you can also go to Mail → Preferences → Junk Mail → Blocked to see and manage your list of blocked senders.`
      },
      {
        title: `Block a sender in Outlook (website or app)`,
        content: `On the Outlook website (outlook.com): Open the email. Click the three-dot menu (•••) at the top of the email. Click "Block" or "Block sender." Confirm. On the Outlook app (iPhone or Android): Open the email. Tap the three-dot menu. Tap "Block Sender." Confirm. Blocked senders in Outlook are moved to your Junk Email folder.`,
        warning: `Blocking reduces but may not eliminate all spam. Some mass-spam operations send from constantly changing addresses, making blocking less effective. Marking emails as Spam/Junk also helps train your email service to filter similar messages automatically.`
      },
      {
        title: `Check and manage your blocked senders list`,
        content: `In Gmail: Go to Settings (gear icon) → See all settings → Filters and Blocked Addresses. Your blocked senders are listed there. In Apple Mail on iPhone: Go to Settings app → Mail → Blocked. In Outlook.com: Go to Settings → Mail → Junk email → Blocked senders. You can unblock anyone from these lists if you change your mind.`
      }
    ]
  },
  {
    slug: `alexa-default-music-guide`,
    title: `How to Set Your Default Music Service on Alexa`,
    excerpt: `Connect Spotify, Apple Music, or Amazon Music to Alexa so voice commands like "Play jazz" always use the right streaming app automatically.`,
    category: `smart-home`,
    tags: [`alexa`, `amazon echo`, `spotify`, `apple music`, `amazon music`, `music`, `default`, `settings`],
    readTime: `5 min`,
    thumbnailEmoji: `🎵`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `If you tell Alexa to "play some jazz" or "play my favorite playlist," Alexa needs to know which music service to use. If you haven't set a default, Alexa will usually default to Amazon Music — which is great if you use Amazon Music, but frustrating if you prefer Spotify, Apple Music, or another service.

Setting your default music service tells Alexa to always use that service when you say a general music command. Instead of saying "Alexa, play jazz on Spotify" every single time, you can say "Alexa, play jazz" and it will automatically play from Spotify.

You can link multiple music services to Alexa — for example, Spotify and Amazon Music — but only one can be the default. The others still work if you specifically ask for them by name.

**Services you can link to Alexa:**
- Amazon Music (comes built in — no link required)
- Spotify (free or paid account works)
- Apple Music (requires a paid Apple Music subscription)
- Pandora
- iHeartRadio
- TuneIn Radio (free — internet radio, no subscription needed)
- SiriusXM

Linking and setting a default takes about 5 minutes in the Alexa app on your phone.`,
    steps: [
      {
        title: `Open the Alexa app on your phone`,
        content: `Find the Alexa app on your phone — it has an orange icon with a dark circle and a white swoosh line inside. Tap it to open it. If you don't have it, download it free from the App Store (iPhone) or Google Play Store (Android). Sign in with the same Amazon account you used to set up your Echo speaker.`
      },
      {
        title: `Go to Music & Podcasts settings`,
        content: `In the Alexa app, tap the three horizontal lines (menu) in the bottom right corner. Tap "Settings." Scroll down and tap "Music & Podcasts." This is where all your music service settings live.`
      },
      {
        title: `Link a music service`,
        content: `In the Music & Podcasts settings, you'll see a list of available music services. Tap on the service you want to link (for example, "Spotify"). Tap "Enable to Use" or "Link account." You'll be taken to that service's login page — sign in with your Spotify, Apple Music, or other account credentials. Once logged in, you'll be redirected back to the Alexa app and the service will show as "Linked."`,
        tip: `If you have a free Spotify account, Alexa can still play music from it — though Spotify Free includes ads and limited on-demand control compared to Spotify Premium.`
      },
      {
        title: `Set your linked service as the default`,
        content: `Back in Music & Podcasts settings, tap "Default Services." You'll see options for default music, radio, and podcast services. Tap "Change" next to "Default music library" and select the service you just linked. Tap "Done" to save.`
      },
      {
        title: `Test your new default`,
        content: `Say to your Echo: "Alexa, play music" or "Alexa, play some country music." Alexa should now respond by playing from your chosen default service. You'll hear it announce the service name. If it plays from the wrong service, go back to Music & Podcasts settings and confirm your default was saved.`,
        tip: `You can still use other linked services by name: "Alexa, play jazz on Amazon Music" or "Alexa, play my Discover Weekly on Spotify." The default just saves you from saying the service name every time for casual commands.`
      }
    ]
  },
  {
    slug: `google-home-music-guide`,
    title: `How to Play Music on Google Home and Nest Speakers`,
    excerpt: `Control music with your voice, adjust volume, and group Google Home or Nest speakers together for whole-home audio — all without touching a button.`,
    category: `smart-home`,
    tags: [`google home`, `nest speaker`, `music`, `google assistant`, `voice commands`, `whole home audio`, `spotify`],
    readTime: `6 min`,
    thumbnailEmoji: `🎶`,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google Home and Nest speakers are designed to play music hands-free, through voice commands. Once you've linked a music service, getting music going is as simple as saying "Hey Google, play jazz" or "Hey Google, play my favorites playlist."

If you have more than one Google or Nest speaker around your home, you can also group them together so the same music plays in every room — perfect for a dinner party, a holiday gathering, or just filling the house with sound while you go about your day.

**Music services you can link:**
- Spotify (most popular choice)
- YouTube Music (Google's own music service, free with ads or paid for ad-free)
- Pandora
- iHeartRadio
- TuneIn Radio (free internet radio)
- Apple Music
- Amazon Music

You set up linked services and a default service in the Google Home app. Once set up, voice commands do the rest.

**Helpful voice commands:**
- "Hey Google, play music" — plays music from your default service
- "Hey Google, play [artist name]" — plays that artist's music
- "Hey Google, play [playlist name] on Spotify" — plays a specific playlist
- "Hey Google, pause" / "Hey Google, resume"
- "Hey Google, next song" / "Hey Google, previous song"
- "Hey Google, volume up" / "volume down" / "set volume to 50 percent"
- "Hey Google, what's playing?" — tells you the song and artist name`,
    steps: [
      {
        title: `Open the Google Home app and go to Settings`,
        content: `Open the Google Home app on your phone (colorful house icon). In the bottom right, tap your profile picture or initials. Tap "Assistant settings" or "Google Account." Then look for "Music" in the settings list. This is where you link music services and set your default.`,
        tip: `You can also say "Hey Google, open music settings" to your speaker, and it may direct you to the right place in the app.`
      },
      {
        title: `Link your music service`,
        content: `In the Music settings, you'll see a list of compatible music services. Tap the one you want (like Spotify). Tap "Link" or "Connect." Sign in to that service's account when prompted. Once linked, it will show a "Connected" status. You can link multiple services.`
      },
      {
        title: `Set your default music service`,
        content: `In the Music settings, look for "Default music service" or a star/default icon next to a service. Tap the service you want to be the default. When you say "Hey Google, play music" without specifying a service, this is the one that will be used. If you subscribe to YouTube Music, it may already be set as the default — change it here if you prefer Spotify or another service.`
      },
      {
        title: `Play music with voice commands`,
        content: `Say "Hey Google, play some classic rock" or "Hey Google, play relaxing music" to test it. Your speaker will start playing from your default music service. Try "Hey Google, skip" to move to the next song, or "Hey Google, set volume to 40 percent" to adjust the volume. Say "Hey Google, what's playing?" if you like a song and want to know the name.`
      },
      {
        title: `Create a speaker group for whole-home audio`,
        content: `In the Google Home app, tap the plus (+) button in the top left. Tap "Create speaker group." Select all the speakers you want to include in the group (for example, kitchen speaker + living room speaker + bedroom speaker). Give the group a name, like "Home" or "Whole house." Tap "Save." Now say "Hey Google, play music on [group name]" and all grouped speakers will play the same music in sync.`,
        tip: `Speaker groups are perfect for entertaining. You can also adjust the volume of the entire group at once: "Hey Google, set Home volume to 60 percent."`,
        warning: `All speakers in a group must be on the same WiFi network and registered to the same Google Home account to work together.`
      },
      {
        title: `Move music from one speaker to another`,
        content: `If music is playing in one room and you want to move it to another speaker, say "Hey Google, move music to [speaker name]" — for example, "Hey Google, move music to the bedroom." The music will switch to that speaker without stopping. You can also say "Hey Google, play music in the kitchen" to start a new stream on a specific speaker.`
      }
    ]
  }
];
