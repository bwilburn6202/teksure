import { Guide } from './guides';

export const guidesBatch43: Guide[] = [
  {
    slug: `iphone-reminders-app-guide`,
    title: `How to Use the Reminders App on iPhone`,
    excerpt: `The Reminders app on iPhone is a built-in to-do list and task manager. Learn how to create reminders, set due dates, add locations, and organize lists for work and daily life.`,
    category: `phone-guides`,
    tags: [`reminders`, `iphone`, `to-do list`, `tasks`, `apple`, `productivity`, `organization`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `The Reminders app comes pre-installed on every iPhone and iPad. It is Apple's built-in task manager — a place to keep lists of things you need to do, items you need to buy, and errands you need to run.

Reminders is great because it connects directly with Siri. You can add items to any list by talking: "Hey Siri, remind me to call the doctor at 2 PM tomorrow" — and it is added instantly, no typing needed.

**Key features:**
- **Due dates and times**: Set reminders to alert you at a specific time — or on multiple days (every Monday, every morning)
- **Location reminders**: Remind yourself when you arrive at a location ("Remind me to buy milk when I arrive at the grocery store") or when you leave ("Remind me to lock the door when I leave home")
- **Multiple lists**: Keep separate lists for different purposes — Groceries, Work, Personal, Family
- **Sharing**: Share a list with a family member so you both see it and can add to it
- **Subtasks**: Break bigger tasks into smaller steps
- **iCloud sync**: Your reminders appear on iPhone, iPad, and Mac automatically

Reminders syncs via iCloud, so items added on your iPhone appear on your Mac and iPad too.`,
    steps: [
      {
        title: `Open Reminders and create a list`,
        content: `Open the Reminders app (orange and white icon with a checkmark). Tap "Add List" at the bottom right. Name the list (like "Groceries," "To Do," or "Errands"). Pick a color and icon for it. Tap "Done." You can have as many lists as you want.`,
      },
      {
        title: `Add a reminder`,
        content: `Tap the list you want to add to. Tap the "+" button or tap "New Reminder" at the bottom. Type what you need to remember. Tap the information icon (ⓘ) next to the reminder to add details: due date, time, notes, priority, or a location.`,
        tip: `Quick Tip: Say "Hey Siri, remind me to take my medication at 8 AM every morning" and Siri adds a daily recurring reminder without you touching the phone.`,
      },
      {
        title: `Set a time reminder`,
        content: `Tap the ⓘ info button next to any reminder. Toggle on "Date" and select a day. Toggle on "Time" and set the hour. The reminder notification will appear on your phone at that exact time. Tap "Repeat" to make it recur — daily, weekly, monthly, or on custom days.`,
      },
      {
        title: `Set a location-based reminder`,
        content: `Tap the ⓘ info button → toggle on "Location." Choose "Current Location," "Getting In a Car" (uses CarPlay), or type a specific address. Choose whether to trigger the reminder when "Arriving" or "Leaving" the location. For example: "Arriving" at your grocery store triggers the reminder when you pull into the parking lot.`,
      },
      {
        title: `Share a list with family`,
        content: `Tap the list name at the top → the three dots (...) → "Share List." Enter a family member's name, phone number, or email address. They receive an invitation. Once accepted, they see the list on their own Reminders app and can add, complete, or delete items. Great for shared grocery or chore lists.`,
      },
    ],
  },

  {
    slug: `microsoft-todo-app-guide`,
    title: `How to Use Microsoft To Do to Manage Your Tasks`,
    excerpt: `Microsoft To Do is a free task management app that works on iPhone, Android, and Windows. Learn how to set up lists, add tasks, set reminders, and share lists with others.`,
    category: `app-guides`,
    tags: [`microsoft to do`, `task manager`, `to-do list`, `productivity`, `reminders`, `windows`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Microsoft To Do is a free task management app that works on every platform — iPhone, Android, Windows, and the web. It is a good choice if you want a to-do list that syncs between your phone and your Windows computer, or if you use Microsoft 365 (Outlook, Teams) for work or personal use.

Microsoft To Do replaced the older Wunderlist app (which Microsoft acquired) and is well-regarded for its clean, simple design.

**Key features:**
- **My Day**: A special daily list where you plan what you want to accomplish today. Each morning it starts fresh, and you add tasks from your lists to focus on
- **Multiple lists**: Create separate lists for Work, Personal, Shopping, Projects, etc.
- **Subtasks and notes**: Break tasks into steps and add notes to any task
- **Due dates and reminders**: Set tasks to be due on a specific date with a time-based reminder
- **Recurring tasks**: Set tasks to repeat daily, weekly, monthly, or on custom schedules
- **Shared lists**: Share a list with someone else and collaborate on it together
- **Microsoft 365 integration**: Tasks from Outlook appear in Microsoft To Do automatically

Microsoft To Do is free and works with a Microsoft account (the same account used for Outlook, OneDrive, Xbox, or Windows). If you have an Outlook email, you already have an account.`,
    steps: [
      {
        title: `Download and sign in`,
        content: `Search "Microsoft To Do" in the App Store (iPhone) or Google Play (Android), or find it pre-installed on Windows 11. Sign in with your Microsoft account (your Outlook.com, Hotmail, or work email). If you do not have one, tap "Create one" — it is free.`,
      },
      {
        title: `Create a list`,
        content: `On the home screen, tap "New list" at the bottom. Name it (for example, "Grocery Store," "Home Projects," or "Work Tasks"). Choose a color or theme. Tap the checkmark to save. The list appears in your sidebar.`,
      },
      {
        title: `Add tasks to a list`,
        content: `Tap your list. Tap "Add a task" at the bottom. Type what needs to be done. Press Enter to add more tasks. To add a due date or reminder, tap the task → tap the calendar icon for a due date → tap the bell icon for a specific reminder time.`,
        tip: `Quick Tip: Tap the sun icon on any task to add it to "My Day" — your personal daily focus list. My Day resets each morning so you plan intentionally every day.`,
      },
      {
        title: `Set recurring tasks`,
        content: `Tap any task → tap the repeat icon (two arrows in a circle) → choose the frequency: Daily, Weekdays, Weekly, Monthly, or Yearly. The task reappears automatically after you mark it complete — great for things like "Take out trash" (weekly) or "Pay credit card bill" (monthly).`,
      },
      {
        title: `Share a list`,
        content: `Tap a list name → the share icon at the top (person with a +). Tap "Invite" and enter the email address of the person you want to share with. They receive an email invitation. Once they join, both of you see the list and can add, edit, or complete tasks. Updates sync instantly.`,
      },
    ],
  },

  {
    slug: `gmail-out-of-office-vacation-responder`,
    title: `How to Set Up an Out-of-Office Reply in Gmail`,
    excerpt: `Gmail's vacation responder automatically replies to incoming emails when you are away — letting people know you are unavailable and when to expect a response.`,
    category: `essential-skills`,
    tags: [`gmail`, `out of office`, `vacation responder`, `automatic reply`, `email`, `away message`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Gmail's vacation responder (also called out-of-office reply) automatically sends a reply to anyone who emails you while you are away. This is useful when you are on vacation, traveling, dealing with a medical situation, or any time you will not be checking email regularly.

The auto-reply tells senders that you received their email but are currently unavailable, and optionally, when you will return and who to contact in case of urgency.

Key things to know:
- The responder only sends one automatic reply per person every 4 days — it will not spam someone who emails you repeatedly
- You choose a start date and end date — it activates and deactivates automatically
- You can choose to only send the reply to people in your Google Contacts (more private) or to everyone who emails you
- The message can be customized with whatever text you want
- Gmail keeps working normally while the responder is on — emails still arrive in your inbox as usual

The vacation responder is available in Gmail on your computer (gmail.com). The smartphone app does not have this feature — you must set it up on a computer or tablet browser.`,
    steps: [
      {
        title: `Open Gmail Settings on a computer`,
        content: `Go to gmail.com on your computer. Click the gear icon () in the top right corner → "See all settings." This opens the full Gmail settings page. Scroll down to the "Vacation responder" section near the bottom of the General tab.`,
        tip: `If you only have your phone, open Gmail.com in your phone's web browser and request "Desktop site" to access the full settings.`,
      },
      {
        title: `Turn on the vacation responder`,
        content: `In the "Vacation responder" section, click "Vacation responder on." Enter the "First day" (the date you leave or start the auto-reply) and check "Last day" if you want it to automatically turn off — enter your return date.`,
      },
      {
        title: `Write your message`,
        content: `Fill in the "Subject" (for example, "Out of Office — Back [Date]") and the message body. Keep it brief and professional: tell people you are away, your return date, and who to contact if urgent. Example: "Thank you for your email. I am currently out of office until [date] and will respond when I return. For urgent matters, please contact [name] at [email]."`,
        tip: `Quick Tip: Do not include your phone number, home address, or too many personal details in an out-of-office message — it is sent to every sender, including strangers.`,
      },
      {
        title: `Choose who receives the auto-reply`,
        content: `Below the message, check "Only send a response to people in my Contacts" if you want the auto-reply to go only to people you know. Leave it unchecked if you want everyone — including businesses and mailing lists — to receive it. For personal email, limiting to Contacts is usually better.`,
      },
      {
        title: `Save and verify`,
        content: `Click "Save Changes" at the bottom. Gmail will show a yellow banner at the top of your inbox confirming the vacation responder is active and giving you an easy "End now" button if you want to turn it off early when you return. The responder turns off automatically on your end date.`,
      },
    ],
  },

  {
    slug: `recover-deleted-gmail-emails`,
    title: `How to Recover Deleted Emails in Gmail`,
    excerpt: `Deleted Gmail emails go to the Trash where they stay for 30 days before being permanently removed. Here is how to find and recover them — and what to do if they are gone for good.`,
    category: `essential-skills`,
    tags: [`gmail`, `deleted email`, `trash`, `recover email`, `email recovery`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you delete an email in Gmail, it is not immediately gone forever. It moves to the Trash folder, where it stays for 30 days. During that time, you can recover it — move it back to your inbox or another folder.

After 30 days, Gmail permanently deletes items in Trash. At that point, they cannot be recovered.

There are two levels of deletion to know about:
1. **Regular delete** (tapping the trash icon): Moves the email to Trash. Recoverable for 30 days.
2. **Empty trash** or permanently deleting from Trash: The email is gone permanently.

If an email was sent to your Spam folder and later automatically deleted (Gmail deletes Spam after 30 days), it is gone permanently once the 30 days pass.

**Searching for deleted emails**: If you cannot find something in your inbox and think you may have accidentally deleted it, search in Gmail with "in:trash [search term]" to look specifically in your Trash folder.

One more important thing: if an email seems to have disappeared from your inbox but you never deliberately deleted it, check if you accidentally archived it (Archive looks similar to Delete). Archived emails are in "All Mail" but not the inbox.`,
    steps: [
      {
        title: `Find your Trash folder`,
        content: `In Gmail on a computer: in the left sidebar, click "More" if you do not see Trash → click "Trash." On iPhone/Android app: tap the three horizontal lines (hamburger menu) in the top left → scroll down and tap "Trash."`,
        tip: `If you cannot find the email in Trash, also check Spam. Gmail may have incorrectly filtered a legitimate email as spam.`,
      },
      {
        title: `Search inside Trash`,
        content: `Once in Trash, use the search bar at the top to search by sender name, subject, or keywords from the email. Type what you remember about the email and results will filter to show matching emails still in Trash.`,
      },
      {
        title: `Recover an email to your inbox`,
        content: `On a computer: right-click the email you want to recover → "Move to" → "Inbox." Or open the email → click the folder icon at the top → choose a destination folder. On phone: open the email → tap the three dots (...) at the top → "Move to" → "Inbox" or another folder.`,
      },
      {
        title: `Check All Mail if you think you archived it`,
        content: `If the email is not in Trash and you think you may have accidentally archived it instead of deleting: on a computer, look for "All Mail" in the left sidebar → search for the email there. On phone: tap the hamburger menu → "All Mail." To move it back to your inbox, open the email → click "Move to Inbox."`,
        tip: `Quick Tip: In Gmail, "Archive" removes email from the inbox but keeps it searchable forever in All Mail. "Delete" moves it to Trash for 30 days. Many people confuse the two.`,
      },
      {
        title: `What to do if the email is permanently gone`,
        content: `If the email was deleted from Trash more than 30 days ago, Gmail cannot recover it. However, you can: check if the original sender can resend it, check if the email was forwarded elsewhere, or search your other email accounts if you use multiple. For extremely important emails (legal, financial), contact the sender directly.`,
      },
    ],
  },

  {
    slug: `fill-sign-pdf-iphone`,
    title: `How to Fill Out and Sign a PDF on Your iPhone`,
    excerpt: `You do not need a printer or a separate app to fill out a PDF form or sign a document on iPhone. The built-in Markup tool handles both — here is how.`,
    category: `phone-guides`,
    tags: [`fill pdf`, `sign pdf`, `iphone`, `markup`, `electronic signature`, `documents`, `paperless`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `iPhone has a built-in tool called Markup that lets you fill out PDF forms and add your signature to documents — directly on your phone, with no printer, scanner, or extra app required.

This is useful for medical forms, insurance documents, rental agreements, tax forms, and any other paperwork you receive as a PDF that needs to be filled in and returned.

There are two main scenarios:

**Fillable PDFs**: Some PDFs have interactive form fields — text boxes that light up when you tap them. These are the easiest to fill out. Just tap each field and type your information.

**Non-fillable PDFs (flat forms)**: Scanned documents or older forms may not have interactive fields. With Markup, you can add text boxes and type your information anywhere on the document, then add a signature.

**Adding your signature**: iPhone Markup lets you create a stored signature by drawing it with your finger or Apple Pencil. Once saved, you can add it to any document with a single tap.

The filled PDF can be emailed, sent via AirDrop, saved to Files, or shared directly from the Markup screen.

No account or subscription is needed — Markup is completely free and built into every iPhone and iPad.`,
    steps: [
      {
        title: `Open the PDF in the Files app or Mail`,
        content: `If the PDF arrived by email: open the email → tap the PDF attachment to preview it → tap the share icon → "Markup." If the PDF is saved in Files: open Files → tap the PDF → tap the pencil/edit icon at the top right to open Markup.`,
        tip: `You can also open a PDF in Safari (when downloaded from a website) and tap the share button to access Markup from there.`,
      },
      {
        title: `Fill in text fields (fillable PDF)`,
        content: `If the PDF has interactive form fields, tapping inside a text box opens the keyboard automatically. Type your name, address, date, or other required information. Use the Next button on the keyboard or tap the next field. These interactive fields look slightly different — they often have a blue outline when active.`,
      },
      {
        title: `Add text to a non-fillable PDF`,
        content: `If the form does not have clickable fields: in Markup, tap the "+" button at the bottom → "Text." A text box appears. Drag it to the field you want to fill in. Tap the text box to type. Change the font size by tapping the "aA" icon. Tap outside to deselect, then move to the next field.`,
        tip: `Quick Tip: Zoom in to the area you need to fill before adding a text box — it is much easier to position text accurately when zoomed in.`,
      },
      {
        title: `Add your signature`,
        content: `Tap "+" → "Signature." If you have not saved a signature before, a drawing area appears — draw your signature with your finger (or Apple Pencil on iPad). Tap "Done." The signature is saved for future use. Drag and resize the signature box to place it on the signature line.`,
      },
      {
        title: `Save and share the completed PDF`,
        content: `Tap "Done" in the top left when finished. Tap "Save File To..." to save it to Files or iCloud Drive. Or tap the share icon to email the filled PDF directly, send via Messages, or share another way. The recipient receives a completed PDF with all your information filled in.`,
      },
    ],
  },

  {
    slug: `compress-photos-before-email`,
    title: `How to Reduce Photo Size Before Sending by Email or Text`,
    excerpt: `Large photos can be too big to email or take forever to send. Here is how to shrink them on iPhone, Android, or a computer without losing too much quality.`,
    category: `essential-skills`,
    tags: [`compress photos`, `reduce file size`, `email photos`, `send photos`, `image size`, `large file`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Modern smartphone photos are high resolution and can be 4–12 MB each. Emailing multiple photos at once can quickly exceed email attachment limits (usually 25 MB for Gmail, 10 MB for some older services). Large images also take a long time to send and receive on slow connections.

Compressing or resizing photos before sending makes them smaller — faster to send and easier for the recipient to receive. A compressed photo suitable for emailing is typically 200 KB to 1 MB, compared to 4–12 MB for the original.

**The easiest method on iPhone**: When you share photos via email directly from the Photos app, iPhone offers size options — Small, Medium, Large, or Actual Size. Choose "Medium" or "Small" for most emails.

**For more control**: Use a free app like Compress Photos & Picture Compress (iPhone) or Files by Google (Android, which includes basic image options).

**On a computer**: Windows Paint or the free Squoosh.app (web-based, no download needed) can reduce image size quickly.

**When NOT to compress**: If you are sending photos to a professional (photographer, designer, doctor reviewing medical images) or printing large prints, send the full-size original.`,
    steps: [
      {
        title: `Use iPhone's built-in size chooser when emailing`,
        content: `Open the Photos app → select the photos you want to send. Tap the share icon → "Mail." The Mail app opens with the photos attached. Tap "Send" → before it sends, a popup asks you to choose a size: Small, Medium, Large, or Actual Size. Choose "Small" (for quick sharing) or "Medium" (good balance of quality and size). Tap that size to send.`,
        tip: `Quick Tip: "Small" sends photos at about 200 KB each — good enough for family sharing and saves a lot of data. "Actual Size" sends the full original.`,
      },
      {
        title: `Resize photos on Android with Files by Google`,
        content: `Open Files by Google → go to "Images" to see all your photos. Tap any photo to open it → tap the three dots → "Compress." Choose a quality setting. The app saves a compressed copy of the photo to your Downloads folder. Attach that compressed copy to your email instead of the original.`,
      },
      {
        title: `Compress on a computer using Squoosh (free, web-based)`,
        content: `On any computer, go to squoosh.app in your web browser. Drag a photo onto the page or click "Open image" to upload it. On the right side, you can see a preview and adjust the quality setting. Drag the quality slider left to reduce file size — watch the estimated file size in the corner. Click "Download" to save the compressed image.`,
        tip: `Squoosh works without any account or software installation — it processes images in your browser. Good for a quick one-time compress.`,
      },
      {
        title: `Use Windows Photos app to resize`,
        content: `On Windows, right-click any image file → "Open with" → "Photos." Click the three dots (...) menu at the top right → "Resize." Choose a smaller size preset (like "S" or "M") or enter custom dimensions. Click "Save resized copy." A new smaller file is saved alongside the original.`,
      },
      {
        title: `Send via Google Drive for large batches`,
        content: `If you need to send many photos without worrying about size, upload them to Google Drive → right-click the folder → "Get Link" → set to "Anyone with link can view" → copy and send the link. The recipient downloads at whatever quality they want. No compression, no size limits.`,
      },
    ],
  },

  {
    slug: `add-contact-iphone-guide`,
    title: `How to Add and Manage Contacts on Your iPhone`,
    excerpt: `Adding contacts, editing their information, and organizing them properly makes calling, texting, and FaceTiming much easier. Here is how to manage contacts on iPhone.`,
    category: `phone-guides`,
    tags: [`contacts`, `iphone`, `add contact`, `phone book`, `address book`, `icloud contacts`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your iPhone's contacts app is your digital phone book. Keeping it organized — with complete names, multiple phone numbers, email addresses, and birthdays — makes calling, texting, emailing, and FaceTiming much easier because you never have to remember a phone number.

Contacts saved to your iPhone via iCloud sync automatically to all your Apple devices. Contacts saved to your Google account sync to any phone where you are signed into Google.

**What to include in a contact:**
- Full name (first and last — helps Siri understand who you mean)
- Phone number (label whether it is mobile, home, or work)
- Email address
- Home address (for navigation or mailing)
- Birthday (iPhone reminds you)
- Photo (makes incoming calls easier to recognize)
- Company or relationship (example: "Dr. Smith — Cardiologist")

You can add contacts from several places: directly in the Contacts app, from a text message, from a missed call, from an email, or by scanning a QR code someone shares.

Contacts sync via iCloud by default. Go to Settings → your name → iCloud → Contacts to make sure syncing is on.`,
    steps: [
      {
        title: `Add a new contact from scratch`,
        content: `Open the Contacts app (or open the Phone app → tap "Contacts" at the bottom). Tap the "+" icon at the top right. Enter the person's first name, last name, phone number, and email. Tap "Done" to save. The contact is immediately available for calls, texts, and FaceTime.`,
        tip: `Tap "add field" at the bottom to add a birthday, physical address, relationship, company, or notes. Adding the birthday lets Calendar remind you each year.`,
      },
      {
        title: `Add a contact from a text or phone call`,
        content: `From a text message: open the conversation → tap the name or number at the top → "Info" → "Create New Contact" or "Add to Existing Contact." From a missed call: open the Phone app → "Recents" → tap the ⓘ next to the number → "Create New Contact."`,
      },
      {
        title: `Add a photo to a contact`,
        content: `Open the contact → tap "Edit" → tap the circle at the top left (it shows a person icon by default) → "Choose Photo" to pick from your photo library, or "Take Photo" to use the camera now. Crop the photo to show the face clearly. Tap "Choose" → "Done."`,
        tip: `Quick Tip: Adding photos helps you recognize who is calling at a glance, especially for less familiar numbers.`,
      },
      {
        title: `Edit or update an existing contact`,
        content: `Open the Contacts app → find the contact (use the search bar at the top to find them quickly) → tap their name → tap "Edit" in the top right. Change or add any information. Tap "Done" when finished. Changes sync to iCloud automatically.`,
      },
      {
        title: `Set a contact as a Favorite for quick access`,
        content: `Open a contact → scroll down → tap "Add to Favorites." Choose whether to favorite their phone (mobile, home, work) or FaceTime. Favorites appear in the Phone app under "Favorites" — one tap to call them without searching.`,
      },
    ],
  },

  {
    slug: `set-iphone-ringtone-guide`,
    title: `How to Change Your Ringtone and Alert Sounds on iPhone`,
    excerpt: `Choosing a ringtone you recognize makes it easier to know when your phone is ringing. This guide shows how to change ringtones, text tones, and other alert sounds on iPhone.`,
    category: `phone-guides`,
    tags: [`ringtone`, `iphone sounds`, `notification sound`, `alert tone`, `customize phone`, `accessibility`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Changing your iPhone's ringtone is more than just personalization — it can also be practical. If you are in a room with other iPhones, having a distinctive ringtone makes it clear when it is yours ringing. A loud, distinctive tone is also important if you have trouble hearing the default ring.

iPhone comes with a large selection of built-in ringtones at no cost. You can also purchase additional ringtones from the iTunes Store for $1.29 each, or use your own music to create a custom ringtone (requires a computer and some setup).

**What sounds you can customize:**
- **Ringtone**: Plays when someone calls you
- **Text Tone**: Plays when you receive an iMessage or SMS
- **New Mail / Sent Mail**: Email notifications
- **Calendar Alerts**: Reminders from Calendar and Reminders app
- **Voicemail / Airdrop**: Specific action sounds
- **Emergency Alerts**: Cannot be changed (required by law)

**Vibration patterns**: You can also set custom vibration patterns for different contacts — a long buzz for family, short bursts for a friend — without changing the audio ringtone.

**Volume**: If calls are hard to hear, go to Settings → Sounds & Haptics → drag the Ringtone and Alert Volume slider to the right to increase it.`,
    steps: [
      {
        title: `Change your ringtone`,
        content: `Go to Settings → Sounds & Haptics → Ringtone. A list of built-in ringtones appears. Tap any name to preview it — it plays immediately. Scroll through the list to find one you like. The current ringtone has a checkmark. Tap a different ringtone to select it. Tap "Back" at the top — the change is saved automatically.`,
        tip: `The "Classic" section at the bottom of the list has traditional phone ring sounds that are easy to hear clearly.`,
      },
      {
        title: `Change your text message sound`,
        content: `Go to Settings → Sounds & Haptics → Text Tone. The list of sounds is the same as ringtones. Tap any to preview. Select one that sounds noticeably different from your ringtone so you can tell the two apart. Tap "Back" to save.`,
        tip: `Quick Tip: If you are hard of hearing, choose "Alert" or "Note" for text tones — they are more distinctive and piercing than the quiet default.`,
      },
      {
        title: `Set a custom ringtone for one person`,
        content: `Open the Contacts app → find the contact → tap "Edit" → scroll down and tap "Ringtone" → choose any ringtone. Tap "Done." Now when that specific person calls, their unique ringtone plays — you know who it is before you even look at your phone.`,
      },
      {
        title: `Adjust ringtone volume`,
        content: `Go to Settings → Sounds & Haptics. Under "Ringtone and Alert Volume," drag the slider right to increase volume. Also toggle on "Change with Buttons" if you want the physical volume buttons on the side of your iPhone to adjust the ringer volume.`,
        warning: `If your iPhone is in Silent mode (orange stripe visible on the small switch on the side), calls will not ring regardless of your volume settings. Check that switch if calls are not ringing.`,
      },
      {
        title: `Set a vibration pattern`,
        content: `Go to Settings → Sounds & Haptics → Ringtone → Vibration at the top. You can choose from built-in vibration patterns or tap "Create New Vibration" to tap your own custom pattern. This helps you feel who is calling through vibration alone — useful in noisy places or when your phone is in your pocket.`,
      },
    ],
  },

  {
    slug: `set-iphone-wallpaper`,
    title: `How to Change Your iPhone Wallpaper`,
    excerpt: `Personalizing your iPhone wallpaper with a photo of family, a favorite landscape, or a simple color makes the phone feel more like yours. Here is how to set and customize it.`,
    category: `phone-guides`,
    tags: [`wallpaper`, `iphone`, `lock screen`, `home screen`, `personalize`, `photo background`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your iPhone has two wallpapers: the lock screen (what you see when you pick up the phone) and the home screen (the background behind your app icons). You can set them to different images or the same one.

Many people love using a photo of grandchildren, family, pets, or a favorite vacation spot as their wallpaper. Others prefer a clean, simple color or Apple's built-in designs.

On iPhones with iOS 16 or later, the lock screen has become especially customizable — you can add widgets that show the time, weather, calendar events, or battery level. The depth effect feature even puts the lock screen clock behind your subject (like a photo of a person), creating a layered look.

You can use any photo from your photo library, a live (animated) photo, a portrait photo for the depth effect, or one of Apple's many built-in wallpapers.

Changing the wallpaper takes about a minute and can be changed as often as you want — nothing is permanent.`,
    steps: [
      {
        title: `Open wallpaper settings`,
        content: `Go to Settings → Wallpaper. You will see a preview of your current lock screen and home screen. Tap "Add New Wallpaper" to create a new one from scratch, or tap your current wallpaper to edit it.`,
      },
      {
        title: `Choose a wallpaper type`,
        content: `The top of the wallpaper picker shows categories: Photos (your camera roll), People (recognized faces), Live Photo, Emoji, Weather, Astronomy, Color (solid or gradient), and Apple's built-in collections. Tap "Photos" to use your own pictures, or "Color" for a simple, clean background.`,
        tip: `Quick Tip: If you want a photo of a grandchild or pet as your wallpaper, tap "People" — iPhone identifies faces in your library and shows them suggested for wallpapers.`,
      },
      {
        title: `Choose your photo`,
        content: `Tap "Photos" → browse or search for the photo you want. Tap the photo to preview it as a wallpaper. Pinch to zoom or drag to reposition the image within the frame. Tap "Add" when you are happy with how it looks.`,
      },
      {
        title: `Set it for lock screen, home screen, or both`,
        content: `After tapping "Add," you are asked: "Set as Wallpaper Pair" (uses the same image for both lock and home screen), "Customize Home Screen" (uses a different look for the home screen), or simply previewing it. Tap "Set as Wallpaper Pair" for the most common, simple option.`,
      },
      {
        title: `Add widgets to your lock screen (optional)`,
        content: `From the wallpaper preview, tap "Customize" on the lock screen. Tap the time area at the top to change the clock style and color. Tap the widget area below the time to add widgets: weather, calendar, battery level, fitness rings, or other apps. Tap "Done" when satisfied.`,
      },
    ],
  },

  {
    slug: `change-default-browser-iphone`,
    title: `How to Change the Default Browser on Your iPhone`,
    excerpt: `iPhone lets you set Chrome, Firefox, or another browser as your default instead of Safari — so links you tap open in the browser you prefer.`,
    category: `phone-guides`,
    tags: [`default browser`, `iphone`, `safari`, `chrome`, `firefox`, `browser settings`, `iOS`],
    readTime: `3 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `By default, all links you tap on your iPhone — in emails, text messages, social media, and other apps — open in Safari, Apple's built-in browser. If you prefer using Google Chrome, Firefox, Microsoft Edge, or another browser, you can change the default so links always open in your preferred browser.

This feature was added in iOS 14 (released 2020). Any iPhone running iOS 14 or later can change the default browser.

What "default browser" means: when you tap a link anywhere on your phone — not just inside a browser — your iPhone decides which browser app to open automatically. Changing the default means tapping a link in Messages opens Chrome (or your chosen browser) instead of Safari.

You still have Safari installed and can open it manually any time — changing the default does not remove Safari.

This is a simple setting change that takes about 30 seconds. You can change it back to Safari any time the same way.`,
    steps: [
      {
        title: `Install your preferred browser`,
        content: `If you have not already, download your preferred browser from the App Store. Search "Google Chrome," "Firefox," or "Microsoft Edge" and install the free app. Sign in to your account in the browser if you want your bookmarks and saved passwords.`,
      },
      {
        title: `Open the browser's settings in iPhone Settings`,
        content: `Go to the iPhone Settings app (the gray gear icon). Scroll down the list until you find the browser app you installed — for example, "Chrome" or "Firefox." Tap it.`,
        tip: `The browser's settings appear near the bottom of the Settings list, in the section where third-party apps are listed alphabetically.`,
      },
      {
        title: `Change the default browser`,
        content: `Inside the browser's settings page in Settings, look for "Default Browser App." Tap it. A list of installed browsers appears. Tap your preferred browser to select it. A checkmark appears next to it. Tap the back arrow — the change takes effect immediately.`,
      },
      {
        title: `Test that it worked`,
        content: `Open the Messages app or Mail app. Tap any web link. It should now open in your chosen browser instead of Safari. If it still opens in Safari, go back and double-check the setting — make sure the checkmark is on your preferred browser, not Safari.`,
        tip: `Quick Tip: You can change back to Safari any time by going to Settings → Safari → Default Browser App → Safari.`,
      },
    ],
  },

  {
    slug: `google-search-tips-guide`,
    title: `How to Search Google More Effectively`,
    excerpt: `Most people only use a fraction of what Google can do. These practical search tips help you find exactly what you are looking for — faster and with less frustration.`,
    category: `essential-skills`,
    tags: [`google search`, `search tips`, `Google`, `search operators`, `find information`, `internet search`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Google handles over 8 billion searches per day, but most people search the same basic way they always have — typing a few words and hoping the first result is helpful. A few simple techniques can dramatically improve your search results and save significant time.

**Basic search tips:**
- **Use specific terms**: Instead of "headache remedy," try "tension headache relief without medication" — more specific = better results
- **Use quotes for exact phrases**: Searching "lower back pain exercises" (with quotes) finds pages that contain that exact phrase, not just pages with those words scattered throughout
- **Add a site:** before a website to search just that site: site:mayoclinic.org arthritis treatment
- **Add a year**: Include the current year to find recent information — "best blood pressure monitor 2026"

**Less-known tricks:**
- Type "define [word]" to get a dictionary definition instantly
- Type a math problem (like "15% of 340") and Google calculates it
- Type a currency conversion ("250 USD to euros")
- Type "weather" to see your local weather, or "weather [city name]" for any location
- Type "timer 10 minutes" to start a countdown right in Google
- Type a flight number ("United 456") to see flight status

**When results are not helpful:**
- Add "reddit" to your search to see real people's experiences (example: "best coffee maker reddit")
- Add "reviews" or "consumer reports" to find product evaluations
- Use "how to" at the start for step-by-step guides`,
    steps: [
      {
        title: `Use quotes for exact phrases`,
        content: `If you are looking for a specific phrase — a song lyric, a quote, or an exact product name — put it in quotation marks. For example: "how do I know if I have high blood pressure" (with quotes) finds pages with that exact question, not scattered results. This is especially useful when searching for lyrics or book quotes.`,
      },
      {
        title: `Search within a specific website`,
        content: `Type site: followed immediately by a website address, then your search term. Examples: site:ssa.gov benefits application finds information about benefits on the Social Security website. site:medicare.gov prescription drug coverage limits results to Medicare's official site.`,
        tip: `Quick Tip: Use site:mayoclinic.org or site:webmd.com before a health question to get results only from trusted medical sources.`,
      },
      {
        title: `Add a year to find recent information`,
        content: `Adding the current year to any search helps filter out old or outdated results. Examples: "best cheap smartphone 2026" or "Medicare Part D changes 2026." Google also has a "Tools" option under the search bar where you can filter results by date range — click "Past year" to see only recent content.`,
      },
      {
        title: `Use Google as a calculator and converter`,
        content: `Type any math problem directly in the search bar: "45 times 12" or "450 divided by 6" and Google shows the answer with a calculator. For conversions: "75 degrees Fahrenheit to Celsius" or "5 pounds to kilograms" gives instant answers. For currency: "200 British pounds to US dollars" shows the current exchange rate.`,
      },
      {
        title: `Add "reddit" for real-world opinions`,
        content: `Searching for advice on products, doctors, neighborhoods, or services? Add "reddit" to your search. Example: "best Medicare supplement plan reddit" or "AT&T vs Verizon for seniors reddit." Reddit threads show unfiltered opinions from real people, which is often more useful than paid review sites.`,
      },
    ],
  },

  {
    slug: `find-downloads-android-guide`,
    title: `How to Find Files You Downloaded on Your Android Phone`,
    excerpt: `When you download something on your Android phone — a PDF, a photo, a document — it goes to the Downloads folder. Here is how to find it and open what you downloaded.`,
    category: `phone-guides`,
    tags: [`android`, `downloads folder`, `find files`, `downloaded files`, `file manager`, `documents`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `When you download a file on your Android phone — a PDF form, a document, a photo from a website, or an attachment from email — it usually saves to a folder called "Downloads." Many people do not know where to find their downloads, especially older files they saved weeks ago.

Android does not always alert you clearly about where downloaded files go, which leads to the common frustration of downloading something and not being able to find it again.

There are several ways to access your Downloads folder:

**Option 1 — Files app (most direct)**: Every Android phone has a built-in Files or File Manager app. Opening it shows your Downloads folder directly.

**Option 2 — Files by Google app**: More organized and easier to navigate than the built-in app on some phones.

**Option 3 — From the notification**: When something finishes downloading, a notification appears. Tapping it opens the file immediately. This is the fastest option, but the notification disappears once you dismiss it.

**Option 4 — From the browser**: In Chrome, tap the three dots (...) → "Downloads" to see everything you have downloaded from the web.

Downloaded photos also appear in your Gallery or Photos app under a "Downloads" album.

Note: If you download a file from an email attachment, it may save to a different location depending on your email app.`,
    steps: [
      {
        title: `Use the Files app to find downloads`,
        content: `Open the Files app on your Android phone. The icon looks like a folder — it may be pre-installed or available as "My Files" on Samsung, "Files" on Google Pixel, or "File Manager" on other phones. Once open, look for "Downloads" in the list of folders and tap it.`,
        tip: `If you cannot find a Files app, search for "Files" in your app drawer or install "Files by Google" from the Google Play Store — it is the most reliable option.`,
      },
      {
        title: `Use Chrome browser to find web downloads`,
        content: `Open the Chrome app. Tap the three dots (...) at the top right → "Downloads." All files you downloaded through Chrome appear here, with the date and size. Tap any file to open it. Tap the three dots next to a file to share it or delete it.`,
      },
      {
        title: `Access photos you downloaded in the Gallery`,
        content: `Downloaded photos automatically appear in your phone's Gallery or Photos app. Open the Gallery app → look for an album called "Downloads" or "Camera" (some phones save web downloads to camera roll). The download icon in the corner of a photo indicates it was downloaded from the web.`,
      },
      {
        title: `Find email attachments`,
        content: `Files downloaded from Gmail or other email apps sometimes save to their own "Download" location within the app. In Gmail: open the email with the attachment → tap the download icon on the attachment → go to Files app → "Downloads" to find it. Or the attachment may open directly in another app (like a PDF reader or Word).`,
        tip: `Quick Tip: After downloading a PDF from an email, open Files by Google → tap "Downloads" → find the PDF → tap it to open. From there you can share it, email it, or print it.`,
      },
      {
        title: `Manage and delete old downloads`,
        content: `Downloaded files accumulate and take up space. In Files by Google → "Downloads" — you can see all downloaded files with their sizes. Tap and hold any file → select multiple → tap the trash icon to delete. Regularly cleaning Downloads frees up phone storage.`,
      },
    ],
  },

  {
    slug: `alexa-calling-messaging-guide`,
    title: `How to Call and Message People Using Amazon Alexa`,
    excerpt: `Amazon Echo devices can make hands-free calls to other Alexa users, drop in on family members, and send voice messages — perfect for staying in touch without picking up a phone.`,
    category: `smart-home`,
    tags: [`alexa`, `alexa calling`, `amazon echo`, `drop in`, `voice call`, `hands free`, `family calls`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Your Amazon Alexa device (Echo, Echo Dot, Echo Show, etc.) can make and receive voice calls — and even video calls if you have an Echo Show with a screen. This means you can call family members and friends hands-free, just by speaking.

**Who you can call with Alexa:**
- Other Alexa users (anyone with an Echo device or the Alexa app)
- Phone numbers in the US, UK, Canada, and Mexico (regular calls, free for Alexa-to-Alexa; Alexa to phone numbers is also free for basic calls)

**Alexa calling features:**
- **Calling**: Make voice calls to Alexa contacts
- **Drop In**: Instantly open a two-way communication line with a family member's Echo — like an intercom between rooms or between homes. The other person's Echo answers immediately (useful for checking on elderly parents)
- **Announcements**: Broadcast a message to all Echo devices in your home ("Dinner is ready")
- **Messages**: Send voice messages to Alexa contacts that they can hear when they ask

To call someone, they either need an Echo device or the free Alexa app on their phone. Your contacts from your phone (imported with permission) appear in the Alexa app.

Video calling works on Echo Show devices (Echo Show 5, 8, 10, 15, and the new Echo Show with camera) and allows face-to-face conversations.`,
    steps: [
      {
        title: `Set up calling in the Alexa app`,
        content: `Open the Alexa app on your phone (free, iPhone or Android). Tap "Communicate" at the bottom (the speech bubble icon). The first time, you will be asked to enable calling and allow Alexa to access your contacts. Follow the prompts. Your contacts are imported so you can call people by name.`,
      },
      {
        title: `Make a call by voice`,
        content: `Say "Alexa, call [person's name]." Alexa searches your contacts. If the person has Alexa, the call connects through their device. If they have a regular phone number, Alexa calls that. During the call, you can talk hands-free. Say "Alexa, hang up" to end the call.`,
        tip: `Quick Tip: If Alexa does not recognize a contact name, try saying their full name as it appears in your phone contacts.`,
      },
      {
        title: `Set up Drop In with a family member`,
        content: `Drop In lets you instantly connect with another Echo without the other person having to answer. Both parties must enable Drop In permission for each other. In the Alexa app → Communicate → tap the person's name → "Contact Details" → enable "Allow Drop In." Once enabled, say "Alexa, drop in on [name]" and their Echo opens immediately.`,
        warning: `Drop In is powerful — use it only with people who expect and want it. It is designed for close family use, like checking on a parent across town, not casual contacts.`,
      },
      {
        title: `Send an Alexa voice message`,
        content: `Say "Alexa, send a message to [name]." After Alexa confirms, speak your message. The recipient gets a notification on their Echo ("You have a message from [your name]"). They can say "Alexa, play my messages" to hear it anytime.`,
      },
      {
        title: `Make video calls on Echo Show`,
        content: `If you or the person you are calling has an Echo Show, you can make video calls. Say "Alexa, video call [name]." The Echo Show camera activates and the video call connects. Both parties must have an Echo Show or have the Alexa app open on their phone for video. The camera on Echo Show auto-adjusts to keep you centered.`,
      },
    ],
  },

  {
    slug: `smart-speaker-music-guide`,
    title: `How to Play Music on Your Smart Speaker (Alexa or Google Home)`,
    excerpt: `Your smart speaker can play almost any song, artist, playlist, genre, or radio station — if you know how to ask. Here is how to get the most from your Alexa or Google Nest speaker.`,
    category: `smart-home`,
    tags: [`alexa music`, `google home music`, `smart speaker`, `voice commands`, `play music`, `Amazon Music`, `Spotify`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Smart speakers are excellent music players — you can request any song, artist, album, genre, decade, or mood by just speaking. But many people do not know all the ways to ask, so they end up frustrated when the speaker does not play what they wanted.

This guide covers both Amazon Echo (Alexa) and Google Nest speakers.

**Music services by speaker:**
- **Amazon Echo**: Works best with Amazon Music (included with Prime) or Spotify, Apple Music, Pandora, SiriusXM
- **Google Nest**: Works best with YouTube Music (included with Google account) or Spotify, Apple Music, Pandora, Deezer

**Free music options:**
- Amazon Echo + Prime: Amazon Music free tier with ads (Prime members get more)
- Amazon Echo (no Prime): Free Amazon Music with ads and limited skips
- Google Nest: Free YouTube Music with ads
- Both: Free iHeartRadio, Pandora (free tier), and Tunein radio

To use a specific paid service, you need to connect it in the Alexa app or Google Home app under Music settings.

**For best results, ask for music specifically:** Say "Play Frank Sinatra" vs. "Play music" — the more specific, the better match.`,
    steps: [
      {
        title: `Connect your preferred music service`,
        content: `Alexa: Open Alexa app → More → Settings → Music & Podcasts → add your services (Spotify, Apple Music, etc.) and set a default. Google Home: Open Google Home app → your profile → Services → Music → connect Spotify or other services. Once connected, your playlists and preferences from that service are available.`,
      },
      {
        title: `Play music by song, artist, or album`,
        content: `Say "Alexa, play [song name] by [artist]" or "Hey Google, play [album name]." Examples: "Alexa, play Hotel California by Eagles" or "Hey Google, play Thriller by Michael Jackson." Being specific about the artist prevents the speaker from guessing.`,
        tip: `Quick Tip: If the speaker plays the wrong version or a cover, say "Alexa, skip" and try "Play the original [song name]" or specify the artist.`,
      },
      {
        title: `Play by genre, decade, or mood`,
        content: `Say "Alexa, play 1970s rock music" or "Hey Google, play relaxing music for sleeping" or "Alexa, play upbeat country music." The speakers have curated playlists for most genres and moods. Also try: "Play oldies," "Play jazz standards," "Play Christmas music," or "Play workout music."`,
      },
      {
        title: `Play a radio station`,
        content: `Say "Alexa, play [station call letters] radio" or "Hey Google, play NPR." Most iHeartRadio stations are free. Say "Alexa, play WNYC" or "Alexa, play country radio" for genre-based stations. You can also ask for a specific local station if you know its name.`,
        tip: `For classical music, try "Alexa, play classical music" or "Hey Google, play WQXR" (a well-known classical station). For news radio: "Alexa, play NPR" or "Alexa, play BBC World Service."`,
      },
      {
        title: `Control playback with your voice`,
        content: `During music playback, you can say: "Alexa, pause" / "resume" / "skip" / "turn it up" / "volume 7" (sets volume to 70%). "Alexa, what song is this?" tells you the song and artist. "Alexa, thumbs up" (on Amazon Music) likes the song for better recommendations. "Hey Google, stop in 30 minutes" sets a sleep timer.`,
      },
    ],
  },

  {
    slug: `add-boarding-pass-apple-wallet`,
    title: `How to Add Your Airline Boarding Pass to Apple Wallet`,
    excerpt: `Adding your boarding pass to Apple Wallet means you can get through airport security and board your flight with a tap of your iPhone — no paper printing needed.`,
    category: `app-guides`,
    tags: [`apple wallet`, `boarding pass`, `travel`, `airline`, `mobile boarding pass`, `airport`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Carrying a digital boarding pass in Apple Wallet is one of the most convenient travel features on iPhone. Instead of printing a paper boarding pass or digging through your email at security, you hold your phone to the scanner and walk through.

Apple Wallet is the pre-installed app on every iPhone that stores digital cards and passes — boarding passes, event tickets, loyalty cards, credit cards, ID cards, and more.

**How to get your boarding pass into Wallet:**
Most major airlines support Apple Wallet boarding passes. The process is usually: check in online or via the airline app → tap "Add to Apple Wallet" when your boarding pass is displayed.

**Airlines that support Apple Wallet boarding passes** (as of 2026): American Airlines, Delta, United, Southwest, Alaska Airlines, JetBlue, Spirit, Frontier, Hawaiian Airlines, and many international carriers.

**Advantages of digital boarding pass:**
- Appears on your lock screen automatically when you arrive at the airport (using location-based notifications)
- Does not need internet to display — works in Airplane Mode
- The QR code or barcode works at security checkpoints and the gate
- Tap your Apple Watch if you have one — no phone needed

**TSA security**: You can use a mobile boarding pass at all major US airports. For TSA PreCheck lanes, mobile boarding passes are fully supported.`,
    steps: [
      {
        title: `Check in for your flight online or in the airline app`,
        content: `Go to the airline's website or open their app (American Airlines, Delta, United, etc.) 24 hours before your flight (some allow earlier check-in). Enter your confirmation number or log into your account. Complete the check-in process and select your seat.`,
      },
      {
        title: `Find the "Add to Apple Wallet" button`,
        content: `After check-in, your boarding pass is displayed. Look for a button that says "Add to Apple Wallet" or shows the Wallet logo (a white icon with colored cards). This button may appear immediately after check-in or in the email confirmation you receive.`,
        tip: `Quick Tip: If you do not see the button on the airline website, try opening the airline's dedicated app instead — Apple Wallet integration is often better there.`,
      },
      {
        title: `Add the pass`,
        content: `Tap "Add to Apple Wallet." A preview of your boarding pass appears showing your name, flight number, gate, and seat. Tap "Add" in the top right. The pass is now saved in your Wallet app. You can find it anytime by opening Wallet or looking for it on your lock screen at the airport.`,
      },
      {
        title: `Use it at the airport`,
        content: `When you arrive at the airport, your boarding pass often appears automatically on your lock screen as a notification (your iPhone detects the airline location). Or open the Wallet app → tap the boarding pass → show the barcode to the TSA officer or gate agent scanner.`,
        tip: `Keep your brightness turned up at the scanner — a dim screen can cause scanner errors. Swipe up on the boarding pass to also see your luggage claim tags if they were included.`,
      },
      {
        title: `Update the pass if the gate changes`,
        content: `If your gate or flight time changes, the boarding pass in Wallet updates automatically (with internet access). You may also receive a Wallet notification about the change. Always confirm your current gate on the airport departure board before heading to security — updates propagate quickly but not instantly.`,
      },
    ],
  },

  {
    slug: `iphone-notification-badges-guide`,
    title: `How to Manage Notification Badges and Alerts on iPhone`,
    excerpt: `Those red number badges on app icons and constant notification sounds can be overwhelming. Here is how to take control of which apps notify you and how.`,
    category: `phone-guides`,
    tags: [`notifications`, `badges`, `iphone`, `alerts`, `app notifications`, `notification settings`, `quiet`],
    readTime: `5 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `The red number badges on app icons (the little circles showing "5" on your Mail app or "27" on Messages) and constant notification sounds can quickly become overwhelming. Every app wants your attention, and by default, most apps have permission to send you all types of notifications.

Taking control of your notification settings is one of the best things you can do for your digital wellbeing. It silences the noise while keeping the alerts that actually matter.

**Types of notifications:**
- **Badges**: The red number bubbles on app icons — they show counts of unread items
- **Alerts/Banners**: Popup messages that appear at the top of the screen while you are using your phone
- **Lock Screen notifications**: Messages that appear when your screen is off
- **Sounds**: Audio alerts for incoming notifications
- **Haptic**: Vibration when a notification arrives

You can control all of these individually for each app. For example, you might keep Messages sounds and banners but turn off email sounds and only keep badges for Mail.

The goal is not to eliminate all notifications — it is to keep the ones that are genuinely useful to you and quiet the ones that just cause interruptions.`,
    steps: [
      {
        title: `Review which apps send notifications`,
        content: `Go to Settings → Notifications. You see every app on your phone listed, each showing whether notifications are on or off. Scroll through and look for apps with "Banners, Sounds, Badges" that you really do not need notifications from — social media, shopping apps, games, and news apps are common culprits.`,
      },
      {
        title: `Turn off notifications for an app`,
        content: `Tap any app in the Notifications list. At the top, toggle "Allow Notifications" OFF. The app is completely silenced — no badges, sounds, or popups at all. Good candidates to silence completely: games, rarely used apps, shopping apps, and anything you check voluntarily rather than needing alerts from.`,
        tip: `Quick Tip: You can always open an app manually to check it — silencing its notifications just means you decide when to check, not the app.`,
      },
      {
        title: `Turn off badges (red number dots) without turning off everything`,
        content: `Tap any app → scroll down to see Alerts options → toggle "Badges" OFF while leaving Sounds and Banners on (or mix and match). This removes the red number from the icon while still letting you see a popup when a new notification arrives. Many people find badges more stressful than helpful.`,
      },
      {
        title: `Turn off sounds while keeping visual notifications`,
        content: `Tap any app → toggle "Sounds" OFF. The notification still appears as a banner and on the lock screen, but your phone does not make any noise for it. This is useful for apps like email where you want to see notifications but not be interrupted by sounds every time an email arrives.`,
      },
      {
        title: `Use Focus modes to temporarily silence everything`,
        content: `Go to Settings → Focus. "Do Not Disturb" is the simplest — turn it on and all notifications are silenced except from contacts you designate as allowed. Set it to turn on automatically at certain times (like 10 PM to 7 AM for sleeping). Tap a Focus → Allowed Notifications to set exactly which contacts and apps can still reach you.`,
      },
    ],
  },

  {
    slug: `block-phone-number-iphone-android`,
    title: `How to Block a Phone Number on iPhone or Android`,
    excerpt: `Blocking a number stops calls, texts, and FaceTime from that person — they can no longer reach you. Here is how to block numbers on iPhone and Android in a few taps.`,
    category: `safety-guides`,
    tags: [`block number`, `iphone`, `android`, `block calls`, `block texts`, `unwanted calls`, `harassment`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Blocking a phone number prevents that number from calling you, sending you text messages, or reaching you via FaceTime (on iPhone). When a blocked number calls, the call goes directly to voicemail without your phone ringing. Texts go to a hidden "Blocked Messages" folder.

The blocked person is not notified that they have been blocked — it looks to them like the call is not being answered or the message is not delivered.

**When to block a number:**
- Repeated unwanted calls or texts from someone you do not want contact with
- Harassment or threatening calls
- Spam calls that keep coming back (blocking does not fully stop all robocalls, but it helps for persistent ones)
- An ex or other person you no longer want to hear from

Blocking is reversible — you can unblock at any time.

**For robocalls and spam specifically**: Blocking individual numbers may not stop all spam calls since many robocalls come from different numbers each time. For spam call protection, also turn on "Silence Unknown Callers" (iPhone: Settings → Phone → Silence Unknown Callers) or use a dedicated spam-blocking service like Nomorobo or Hiya.`,
    steps: [
      {
        title: `Block from a recent call on iPhone`,
        content: `Open the Phone app → "Recents" tab. Find the number you want to block. Tap the ⓘ information icon next to it. Scroll down and tap "Block this Caller" → "Block Contact" to confirm. The number is now blocked.`,
        tip: `You can also block directly from a text message. Open the conversation → tap the person's name or number at the top → "Info" → "Block this Caller."`,
      },
      {
        title: `Block from a contact on iPhone`,
        content: `Open the Contacts app → find the contact you want to block. Tap their name to open their contact page. Scroll down to the bottom → tap "Block this Caller" → "Block Contact." Blocking a contact blocks all their numbers — if they have multiple phone numbers listed, all are blocked.`,
      },
      {
        title: `Block from a recent call on Android`,
        content: `Open the Phone app → tap "Recents." Find the number or caller. Tap and hold the entry, or tap the three dots (...) next to it → "Block" or "Block/Report Spam." Confirm. The number is immediately blocked.`,
      },
      {
        title: `Block from a text message on Android`,
        content: `Open the Messages app → find the conversation from the number you want to block. Tap and hold the conversation (or open it and tap the three dots at the top) → "Block" → confirm. Blocked messages go to a "Blocked Messages" folder.`,
        tip: `Quick Tip: On Android, when you block and report as spam, it also submits the number to Google for spam analysis — helping protect other users.`,
      },
      {
        title: `Unblock a number`,
        content: `iPhone: Settings → Phone → Blocked Contacts → tap "Edit" → tap the red minus icon next to a number → "Unblock." Android: Open Phone app → three dots → Settings → Blocked Numbers → tap the X next to a number to unblock. The number can reach you again immediately.`,
      },
    ],
  },

  {
    slug: `report-scam-call-ftc`,
    title: `How to Report a Scam Call or Text to the FTC`,
    excerpt: `Reporting scam calls and texts to the FTC and the National Do Not Call Registry helps authorities take action against scammers. Here is where and how to report.`,
    category: `safety-guides`,
    tags: [`report scam`, `FTC`, `do not call registry`, `robocall`, `scam text`, `consumer protection`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `Getting scam calls and texts is infuriating — but you can fight back by reporting them. Your reports help the Federal Trade Commission (FTC) and the Federal Communications Commission (FCC) identify patterns, track down scammers, and take legal action.

In recent years, the FTC has used consumer reports to pursue hundreds of millions of dollars in fines against robocall operations and deceptive telemarketers.

**Where to report:**
1. **FTC at ReportFraud.ftc.gov**: For any scam — phone calls, texts, emails, fake websites, impersonation scams, lottery scams, tech support scams, etc.
2. **DoNotCall.gov**: Specifically for unwanted telemarketing calls — you can also add your number to the Do Not Call Registry here
3. **FCC at consumercomplaints.fcc.gov**: For issues with robocalls, call blocking failures, and wireless carrier complaints
4. **Your phone carrier**: AT&T, Verizon, T-Mobile all have spam reporting — text "SPAM" to 7726 to report the number to your carrier

**What to have ready when reporting:**
- The phone number that called or texted you
- The date and time of the call
- What the scammer said or claimed
- If you lost money, the amount and how you paid

Filing a report takes about 5 minutes. No immediate personal action results from a single report, but patterns of reports trigger investigations.`,
    steps: [
      {
        title: `Report to the FTC at ReportFraud.ftc.gov`,
        content: `Go to reportfraud.ftc.gov on any browser. Click "Report Now." Choose the type of scam (Phone Call, Text, Email, Online, or "Something else"). Follow the prompts to describe what happened. You do not need to create an account, though doing so lets you track the status and add updates.`,
        tip: `Quick Tip: Report even if you did not lose money. The FTC tracks which types of scams are active — your report contributes to real enforcement actions.`,
      },
      {
        title: `Register on the Do Not Call Registry`,
        content: `Go to donotcall.gov (or call 1-888-382-1222 from the number you want to register). Register your phone number for free. After 31 days, legitimate telemarketers should not call you. Note: the registry does not stop illegal robocallers — it only applies to law-abiding companies. But it establishes that calls you receive after 31 days are more likely illegal.`,
      },
      {
        title: `Report unwanted texts by forwarding them`,
        content: `For scam text messages, forward the text message to 7726 (SPAM). This is accepted by AT&T, Verizon, T-Mobile, and most US carriers. You will receive an automated reply asking for the sender's phone number. Text back the number that sent you the spam. The carrier investigates and often blocks the number for all their customers.`,
      },
      {
        title: `Report to the FCC for robocall issues`,
        content: `Go to consumercomplaints.fcc.gov if you have a specific issue with illegal robocalls, Do Not Call Registry violations, spoofed calls where the displayed number was fake, or telemarketing calls at illegal hours (before 8 AM or after 9 PM). The FCC also investigates and fines violators.`,
      },
      {
        title: `Report Medicare and Social Security scams to relevant agencies`,
        content: `Medicare scams: call 1-800-HHS-TIPS (1-800-447-8477). Social Security scams: report to the SSA Inspector General at oig.ssa.gov. IRS impersonation scams: report to the Treasury Inspector General at 1-800-366-4484. These agencies specifically pursue scammers targeting government benefit recipients.`,
        warning: `Never share your Medicare number, Social Security number, or banking information with someone who called you unexpectedly — no matter what they claim. Hang up and call the agency directly using the number on their official website.`,
      },
    ],
  },

  {
    slug: `iphone-weather-app-guide`,
    title: `How to Use the Weather App on iPhone Effectively`,
    excerpt: `iPhone's built-in Weather app gives forecasts, air quality, wind conditions, precipitation maps, and severe weather alerts. Here is how to get the most out of it.`,
    category: `phone-guides`,
    tags: [`weather app`, `iphone`, `weather forecast`, `rain alert`, `severe weather`, `air quality`],
    readTime: `4 min`,
    thumbnailEmoji: ``,
    publishedAt: `2026-04-19`,
    difficulty: `Beginner`,
    body: `The Weather app on iPhone was significantly upgraded with iOS 16 and later, making it one of the most detailed and visually rich weather apps available — and it is completely free and built in.

Most people only see the main temperature on the app. But scrolling down reveals much more useful information: hourly forecasts for the next 24 hours, 10-day outlook, air quality index (important for people with respiratory conditions), UV index, wind speed and direction, precipitation probability and intensity, sunrise and sunset times, and moon phases.

**Weather alerts**: The app shows government-issued severe weather alerts (tornado warnings, flash flood watches, winter storm warnings, etc.) for your location. You get notifications directly on your phone when alerts are issued.

**Weather maps**: Swipe down to the bottom of the app to see a precipitation map that animates to show where rain and snow are moving — very useful for planning outdoor activities.

**Multiple locations**: You can add multiple cities to monitor — useful for checking weather at a destination before travel, or seeing weather where family members live.

The app uses weather data from multiple sources including The Weather Channel and government meteorological agencies, providing detailed and generally accurate forecasts.`,
    steps: [
      {
        title: `Open the Weather app and understand the main view`,
        content: `Open the Weather app. The main view shows the current location (or your last selected city) with current temperature, weather condition, high and low for the day, and a brief description. The hourly forecast runs across the middle. Scroll down to see the 10-day forecast, air quality, UV index, wind, and more.`,
        tip: `Tap the ▾ button on the hourly forecast row to expand details for each hour — including precipitation probability and wind speed.`,
      },
      {
        title: `Add multiple cities`,
        content: `Tap the list icon (bottom right) to open your city list. Tap the search bar at the top → type a city name → tap it to add it. Add as many cities as you want. Swipe left or right between cities on the main screen, or tap the list icon to see all cities at a glance with their current temperatures.`,
      },
      {
        title: `Check air quality`,
        content: `Scroll down the main weather view to the "Air Quality" card. It shows the Air Quality Index (AQI) on a scale from Good (0–50) to Hazardous (300+). High AQI days are important to know if you have asthma, COPD, or other respiratory conditions. Below the number, the app explains what the AQI means for outdoor activities.`,
        tip: `Quick Tip: On high AQI days (above 100), consider wearing an N95 mask outdoors or limiting time outside, especially for vigorous exercise.`,
      },
      {
        title: `View the precipitation map`,
        content: `Scroll all the way down → tap the animated precipitation map thumbnail. It opens a full-screen map showing where rain or snow is currently falling and moving. Play the animation forward or backward to see where precipitation is heading. The circle on the map marks your location.`,
      },
      {
        title: `Enable severe weather notifications`,
        content: `Go to Settings → Notifications → Weather → ensure "Allow Notifications" is on. In the Weather app itself: tap the list icon (bottom right) → tap ··· at the top right → "Notifications." Turn on "Severe Weather" to receive government-issued alerts pushed directly to your phone. Government alerts (Tornado Warnings, Flash Floods) arrive on your phone even if your device is in Do Not Disturb mode.`,
      },
    ],
  },
];
