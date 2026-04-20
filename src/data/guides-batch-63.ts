import type { Guide } from './guides';

export const guidesBatch63: Guide[] = [
  {
    slug: `windows-settings-app-guide`,
    title: `Navigating the Windows Settings App: Wi-Fi, Display, Sound, and Updates`,
    excerpt: `A plain-English walkthrough of the Windows Settings app — where to find Wi-Fi, display brightness, sound volume, and Windows Update in one place.`,
    category: `windows-guides`,
    tags: [`Windows`, `Settings`, `Wi-Fi`, `display`, `sound`, `Windows Update`, `Windows 11`],
    readTime: `6 min`,
    thumbnailEmoji: `⚙️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `The Windows Settings app is your control panel for almost everything on your PC. It replaced the old "Control Panel" for most everyday tasks and is the place to go when you want to connect to Wi-Fi, change your screen brightness, adjust the volume, or check for updates.

You can open Settings in two ways: press the Windows key on your keyboard and type "Settings," then press Enter — or click the Start menu (the Windows logo in the bottom-left corner) and then click the gear icon. Once it opens, you will see a list of categories down the left side.

**Finding Wi-Fi settings**

Click "Network & internet" on the left side. At the top you will see a toggle to turn Wi-Fi on or off, and below that a button labeled "Wi-Fi" that shows all available networks. Click the name of your network and enter the password to connect.

**Adjusting your display**

Click "System" then "Display." Here you can change brightness by dragging a slider, make text larger under "Scale," and change your screen resolution if things look blurry or too small.

**Changing sound**

Click "System" then "Sound." You will see a master volume slider and, below it, a list of each app's volume separately. This is useful when one app is too loud compared to others.

**Running Windows Update**

Click "Windows Update" near the bottom of the left-side list. You will see whether your PC is up to date or if updates are waiting. Click "Check for updates" to look for new ones. Keeping Windows updated is one of the most important things you can do to stay secure.

Quick Tip: If you cannot find a setting, use the search bar at the top of the Settings app — type a keyword like "brightness" and it will take you straight there.`,
    steps: [
      {
        title: `Open the Settings app`,
        content: `Press the Windows key on your keyboard (the key with the Windows logo), type "Settings," and press Enter. You can also click the Start menu and then the gear icon. The Settings window will open with a list of categories on the left.`,
        tip: `You can also press Windows key + I at the same time to open Settings instantly.`,
      },
      {
        title: `Connect to Wi-Fi`,
        content: `Click "Network & internet" on the left. Click the "Wi-Fi" button, then click your network name in the list. Enter your Wi-Fi password when prompted and click "Connect." A checkmark will appear next to the network name once you are connected.`,
        warning: `Only connect to networks you recognize and trust. Public networks in coffee shops or airports can be risky — avoid checking your bank account on them.`,
      },
      {
        title: `Adjust display brightness and text size`,
        content: `Click "System" on the left side, then click "Display." Drag the "Brightness" slider left or right to dim or brighten the screen. To make text and icons larger, find the "Scale" dropdown and choose a higher percentage such as 125% or 150%.`,
        tip: `If your eyes get tired easily, try increasing the scale to 125% — it makes everything on screen easier to read without changing your resolution.`,
      },
      {
        title: `Change sound volume`,
        content: `Click "System" then "Sound." At the top you will see a master volume slider — drag it to adjust the overall volume of your PC. Scroll down to "Volume mixer" to see and adjust individual apps, so you can make a video quieter while keeping other notifications at normal volume.`,
      },
      {
        title: `Check for Windows Updates`,
        content: `Click "Windows Update" near the bottom of the left-side list. You will see the last time your PC checked for updates. Click the "Check for updates" button. If updates are found, click "Download & install." Your PC may need to restart to finish installing them.`,
        warning: `Do not ignore Windows Update notices for long. Security updates fix vulnerabilities that hackers could use to access your computer.`,
      },
    ],
  },
  {
    slug: `mac-finder-organize`,
    title: `Organizing Files and Folders in Mac Finder: Tags, Folders, and Sorting`,
    excerpt: `Learn how to create folders, use color tags, and sort your files in Mac Finder so you can find what you need without hunting through a cluttered desktop.`,
    category: `mac-guides`,
    tags: [`Mac`, `Finder`, `files`, `folders`, `tags`, `organize`, `macOS`],
    readTime: `6 min`,
    thumbnailEmoji: `🗂️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Finder is the Mac's file manager — the app that shows you all the files and folders on your computer. It looks like the blue smiley face icon in your Dock at the bottom of the screen. If your desktop and Downloads folder have turned into a pile of files you cannot navigate, Finder gives you several tools to get organized.

**Creating folders**

Folders let you group related files together. Think of them like labeled bins. You can create a folder anywhere — on the desktop, in Downloads, or inside another folder. Right-click (or Control-click) in an empty area and choose "New Folder." Type a name and press Enter.

**Using color tags**

Mac Finder lets you assign a colored tag to any file or folder. Tags are great for sorting by project or urgency — you might tag work files red and personal files blue. To add a tag, right-click a file, hover over "Tags," and click a color circle. Once tagged, you can click that color in the Finder sidebar to see every file with that tag, no matter where it is stored.

**Sorting files**

At the top of any Finder window, click the "View" menu and choose "Sort By." You can sort by name (alphabetical), date modified (most recently changed at the top), date added, size, or kind (all PDFs together, all images together, etc.).

**Using the sidebar**

The left side of Finder is your sidebar — a quick-access list of common locations like Desktop, Downloads, Documents, and any tags you use. You can drag frequently used folders into the sidebar for faster access.

Quick Tip: Press Command + F inside any Finder window to search all your files by name or keyword — much faster than opening folder after folder.`,
    steps: [
      {
        title: `Open Finder`,
        content: `Click the blue smiley face icon in your Dock (the bar at the bottom of the screen). A Finder window opens showing your files. You can also press Command + Space, type "Finder," and press Enter.`,
      },
      {
        title: `Create a new folder`,
        content: `Navigate to the location where you want the folder — for example, your Documents or Desktop. Right-click in an empty area (or Control-click if you have a one-button mouse) and choose "New Folder." Type a descriptive name like "2026 Taxes" or "Family Photos" and press Enter.`,
        tip: `Use clear, specific names for folders. "Stuff" and "Misc" are hard to navigate later — "Medical Bills 2026" is much easier to find.`,
      },
      {
        title: `Add a color tag to a file or folder`,
        content: `Right-click any file or folder. In the menu that appears, hover over "Tags." You will see colored circles — click one to apply that color. The dot appears next to the file name. Click the same color again to remove it.`,
        tip: `You can rename tags to something more meaningful. Open Finder, go to Finder menu at the top > Preferences > Tags, then double-click a color label to rename it.`,
      },
      {
        title: `Sort the contents of a folder`,
        content: `Open a folder in Finder. Click the "View" menu in the menu bar at the top of the screen. Choose "Sort By" and then pick how you want files ordered — "Name" for alphabetical order, "Date Modified" to see the newest changes first, or "Kind" to group all PDFs, images, and documents together.`,
      },
      {
        title: `Add a folder to the Finder sidebar for quick access`,
        content: `Find a folder you use often — such as your main work folder or a specific project folder. Drag it to the left sidebar of any Finder window and drop it under "Favorites." It will appear there every time you open Finder, one click away.`,
      },
    ],
  },
  {
    slug: `zip-file-windows-guide`,
    title: `Creating and Extracting ZIP Files in Windows Without Extra Software`,
    excerpt: `Windows can compress files into a ZIP and unzip them without installing anything extra. Here is how to do both in a few clicks.`,
    category: `windows-guides`,
    tags: [`Windows`, `ZIP`, `compress`, `extract`, `files`, `folders`, `File Explorer`],
    readTime: `5 min`,
    thumbnailEmoji: `🗜️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `A ZIP file is a compressed container that holds one or more files or folders in a smaller package. People use ZIP files to send multiple files in a single email attachment, to save storage space, or to share a whole folder of photos without sending dozens of individual files.

Windows has built-in support for ZIP files — you do not need to download WinZip, 7-Zip, or any other program to create or open them.

**Why ZIP files are useful**

When you send a ZIP file by email, the recipient gets everything in one attachment. The ZIP format also compresses the content, meaning the file size is often smaller than the sum of the individual files — sometimes significantly smaller for documents and images.

**Creating a ZIP file**

You can ZIP a single file, a folder, or a group of files you select together. Right-click the file or folder you want to compress, and look for "Compress to ZIP file" (Windows 11) or "Send to > Compressed (zipped) folder" (Windows 10). Windows creates a new ZIP file in the same location.

**Extracting (unzipping) a ZIP file**

When someone sends you a ZIP file or you download one, you need to extract it before you can use the files inside. Right-click the ZIP file and choose "Extract All." A window asks where you want to put the extracted files — the same folder is fine. Click "Extract" and the files appear.

Quick Tip: You can double-click a ZIP file to peek inside without extracting. But to actually open or edit files inside, you need to extract them first — otherwise changes may not save properly.`,
    steps: [
      {
        title: `Select the files or folder you want to compress`,
        content: `Open File Explorer (press Windows key + E). Navigate to the files or folder you want to ZIP. To select multiple files, hold the Ctrl key and click each one. To select a whole folder, click it once so it is highlighted.`,
      },
      {
        title: `Create the ZIP file`,
        content: `Right-click your selection. On Windows 11, click "Compress to ZIP file." On Windows 10, click "Send to" and then "Compressed (zipped) folder." Windows creates a new ZIP file in the same location with the same name. You can rename it by clicking the name once and typing.`,
        tip: `If you are zipping files to email, check the ZIP file size after creating it. Most email services have a 25 MB attachment limit.`,
      },
      {
        title: `Open a ZIP file to see what is inside`,
        content: `Double-click the ZIP file. File Explorer will show you the contents like a regular folder. You can see what is there, but do not try to edit files directly from inside the ZIP — always extract them first.`,
      },
      {
        title: `Extract (unzip) all files`,
        content: `Right-click the ZIP file and choose "Extract All." A window appears asking where to save the extracted files. The default location is a new folder in the same place as the ZIP, which is usually fine. Click "Extract." The files will appear in the new folder, ready to use.`,
        warning: `If a ZIP file came from an unknown source or an unexpected email, do not extract it. ZIP files can contain harmful software. Only open ZIP files from people or sources you trust.`,
      },
    ],
  },
  {
    slug: `external-hard-drive-backup`,
    title: `Setting Up an External Hard Drive for Backups: Connect, Format, and Copy Files`,
    excerpt: `Learn how to connect an external hard drive to your Windows PC, prepare it for use, and copy important files so you have a backup if something goes wrong.`,
    category: `windows-guides`,
    tags: [`backup`, `external hard drive`, `Windows`, `File History`, `storage`, `data protection`],
    readTime: `8 min`,
    thumbnailEmoji: `💾`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `An external hard drive is one of the best investments you can make for your computer. It is a storage device that plugs into your PC with a USB cable, and it lets you keep a copy of your important files in case your computer breaks, gets stolen, or gets a virus.

The rule in data backup is called "3-2-1": keep three copies of your data, on two different types of storage, with one copy stored somewhere other than your home (like a cloud service). An external drive takes care of the local backup piece.

**What to back up**

Focus on files that cannot be replaced: family photos and videos, personal documents like tax returns and legal papers, work files, and anything you have created. Programs and apps can be reinstalled, but your personal files cannot be recovered if the drive fails without a backup.

**Formatting the drive**

Most external drives come pre-formatted and ready to use with Windows. If the drive is brand new, Windows may ask you to format it when you plug it in — this is normal. Formatting prepares the drive to store files. Choose "NTFS" format for drives you will use only with Windows PCs.

**Using Windows File History**

Windows has a built-in backup feature called File History that automatically backs up your files to an external drive on a schedule. Once set up, it works in the background without you doing anything. You can turn it on in Settings > System > Storage > Advanced storage settings > Backup options.

**How often to back up**

If you use your computer daily, back up at least once a week. For very important documents, back up after every major change. Plugging in your external drive once a week is a habit worth building.

Quick Tip: Label your external drive with your name and phone number using a piece of tape. If it falls out of your bag, someone can return it to you.`,
    steps: [
      {
        title: `Plug in the external hard drive`,
        content: `Connect the USB cable from the external drive to any USB port on your PC. Windows will recognize the drive within a few seconds. You will hear a chime and a notification may appear in the bottom-right corner of the screen. The drive will also appear in File Explorer under "This PC."`,
        tip: `If Windows does not recognize the drive, try a different USB port. If it still does not appear, the drive may need to be formatted — right-click it in Disk Management and choose "Format."`,
      },
      {
        title: `Open File Explorer and find the drive`,
        content: `Press Windows key + E to open File Explorer. On the left side or under "This PC," you will see your external drive listed, often with a letter like E: or F: and the drive's name. Click it to see the contents (it will be empty on a new drive).`,
      },
      {
        title: `Copy important files to the drive`,
        content: `Navigate to a folder you want to back up — such as Documents, Pictures, or Desktop. Right-click the folder and choose "Copy." Then navigate to your external drive, right-click in an empty area, and choose "Paste." Windows will copy the folder and all its contents to the drive. Large folders may take several minutes.`,
        warning: `Copying files to the external drive makes a snapshot backup. Files you change after copying will not update automatically unless you use File History or another automated tool.`,
      },
      {
        title: `Turn on Windows File History for automatic backups`,
        content: `Open Settings (Windows key + I). Go to System > Storage. Scroll down and click "Advanced storage settings," then "Backup options." Click "Add a drive" and select your external drive. Toggle "Automatically back up my files" to On. Windows will now back up your files regularly in the background.`,
        tip: `File History keeps multiple versions of your files. If you accidentally delete something or overwrite it, you can go back to an earlier version.`,
      },
      {
        title: `Safely remove the drive when done`,
        content: `Before unplugging the external drive, look in the Windows taskbar (bottom-right corner) for a small USB icon. Click it and choose "Eject" for your drive. Wait for the message "Safe to Remove Hardware" before pulling the cable out. This prevents file corruption.`,
        warning: `Yanking out the drive while files are being written can corrupt your backup. Always use the Eject option first.`,
      },
    ],
  },
  {
    slug: `usb-hub-setup-guide`,
    title: `USB Hubs and Docks Explained: Expanding Your Laptop's Ports`,
    excerpt: `Modern laptops often have only one or two ports. A USB hub or dock adds more ports so you can plug in a mouse, keyboard, monitor, and more at the same time.`,
    category: `essential-skills`,
    tags: [`USB hub`, `USB dock`, `laptop`, `ports`, `accessories`, `USB-C`, `setup`],
    readTime: `5 min`,
    thumbnailEmoji: `🔌`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `If you have a newer laptop, you may have noticed it has very few ports — sometimes only one or two small USB-C openings. This can make it frustrating when you want to plug in a mouse, a USB drive, an external monitor, and charge the laptop all at once.

A USB hub or dock solves this problem by adding more ports through a single connection to your laptop.

**USB hub vs. USB dock**

A USB hub is a small, inexpensive device — often palm-sized — that plugs into one of your laptop's USB ports and gives you several more. A basic hub might add three or four standard USB-A ports (the rectangular kind) and a card reader. These are great for occasional use.

A USB-C dock (also called a docking station) is more capable. It connects to your laptop through a single USB-C cable and can add USB ports, an HDMI port for a monitor, an Ethernet port for wired internet, a headphone jack, and even pass power through to charge your laptop. Docks are popular for people who work at a desk and want to plug everything in with one cable.

**What to look for**

Before buying a hub or dock, check which ports your laptop has. If your laptop only has USB-C ports, you need a USB-C hub. If it has USB-A ports (the wider rectangular ones), a standard USB-A hub will work. Look at what you need to connect — a monitor, wired internet, extra USB drives — and make sure the hub or dock includes those ports.

**Setting it up**

There is no software to install. Plug the hub or dock into your laptop and plug your devices into the hub. Windows and Mac both recognize the devices automatically within a few seconds.

Quick Tip: If you are buying a USB-C hub to use with a monitor, make sure it specifically says "HDMI output" or "DisplayPort output" on the packaging — not all USB-C hubs support video output.`,
    steps: [
      {
        title: `Identify what ports your laptop has`,
        content: `Look at the sides of your laptop and count the ports. A USB-A port is a wide rectangular slot. A USB-C port is a small oval slot. An HDMI port looks like a wide trapezoid. Knowing what you have helps you choose the right hub.`,
      },
      {
        title: `Choose the right hub or dock`,
        content: `If your laptop has USB-C ports and you want to add a monitor, get a USB-C hub with HDMI. If you mainly need more USB-A slots for a mouse and USB drives, a basic USB-A hub or USB-C to USB-A hub works well. Brands like Anker, Cable Matters, and Belkin make reliable, affordable options available on Amazon for $20–$50.`,
        tip: `Read reviews and check that the hub works with your specific laptop model — especially for MacBooks, which can be particular about USB-C accessories.`,
      },
      {
        title: `Plug the hub into your laptop`,
        content: `Connect the hub's cable into the matching port on your laptop. No software installation is needed. The hub is ready to use within seconds. You may see a brief notification in Windows or Mac that new hardware was detected — that is normal.`,
      },
      {
        title: `Connect your devices to the hub`,
        content: `Plug your mouse, keyboard, USB drive, or other accessories into the hub's ports. Each device should be recognized automatically by your computer, the same as if you plugged it directly into your laptop.`,
        warning: `Do not use a cheap, no-brand USB-C hub for charging your laptop — low-quality docks can deliver inconsistent power and potentially damage your battery. Stick to reputable brands for anything that handles power delivery.`,
      },
    ],
  },
  {
    slug: `virtual-desktop-windows-guide`,
    title: `Windows 11 Virtual Desktops: Keep Work and Personal Apps Separate`,
    excerpt: `Windows 11 lets you create multiple desktops so your work apps and personal apps never get mixed together — here is how to set them up and switch between them.`,
    category: `windows-guides`,
    tags: [`Windows 11`, `virtual desktops`, `Task View`, `productivity`, `organization`, `multitasking`],
    readTime: `5 min`,
    thumbnailEmoji: `🖥️`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `If you use your computer for both work and personal tasks, you have probably felt the frustration of a cluttered taskbar filled with apps from both worlds — your work spreadsheet sitting next to your personal email next to a recipe you were looking at.

Windows 11 has a feature called virtual desktops that lets you create separate "screens" inside your computer. Think of them as separate desks in the same office. You might have one desktop with only your work apps open, and another with your personal browser, photos, and music. Switching between them takes one click.

**How virtual desktops work**

Virtual desktops are not separate computers — they share the same hardware. But they give you separate views. Apps you open on Desktop 1 stay on Desktop 1 and do not show up on Desktop 2. You can switch between them from the Task View button on the taskbar.

**The Task View button**

On the Windows 11 taskbar, look for a button that looks like two overlapping rectangles (right next to the search bar). That is Task View. Click it to see all your open windows and your current desktops at the top.

**Switching between desktops**

Once you have multiple desktops, you can switch between them by opening Task View and clicking a desktop thumbnail — or use the keyboard shortcut Windows key + Ctrl + Left/Right arrow to move between them without taking your hands off the keyboard.

Quick Tip: You can right-click any open app in Task View and choose "Move to" to send it to a different desktop without having to reopen it.`,
    steps: [
      {
        title: `Open Task View`,
        content: `Click the Task View button on the taskbar — it looks like two rectangles overlapping, sitting to the right of the search bar. You can also press Windows key + Tab on your keyboard. Task View shows all your currently open windows and a row of desktops at the top.`,
        tip: `If you do not see the Task View button, right-click the taskbar and make sure "Task View" is checked.`,
      },
      {
        title: `Create a new virtual desktop`,
        content: `In Task View, look at the row of desktops near the top of the screen. Click the "+" button (labeled "New desktop") to create a second desktop. You can create as many as you need. Name each one by clicking its name and typing something descriptive, like "Work" or "Personal."`,
      },
      {
        title: `Open apps on the new desktop`,
        content: `Click the new desktop thumbnail to switch to it. It will be completely empty. Open the apps you want there — for example, your work email and spreadsheet program. These apps will only appear on this desktop and will not clutter your other one.`,
      },
      {
        title: `Switch between desktops`,
        content: `Press Windows key + Ctrl + Right arrow to move to the next desktop, or Windows key + Ctrl + Left arrow to go back. You can also click the Task View button and click any desktop thumbnail to jump to it directly.`,
        tip: `If you want to close a desktop, open Task View, hover over the desktop thumbnail, and click the X. Apps open on that desktop move to the next available desktop rather than closing.`,
      },
    ],
  },
  {
    slug: `windows-snap-windows-guide`,
    title: `Windows Snap Layouts: Work on Two Apps Side by Side`,
    excerpt: `Windows Snap lets you place two or more apps next to each other on the same screen so you can work on them at the same time without constantly switching back and forth.`,
    category: `windows-guides`,
    tags: [`Windows`, `Snap layouts`, `multitasking`, `split screen`, `Windows 11`, `productivity`],
    readTime: `5 min`,
    thumbnailEmoji: `⬛`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `One of the most useful features built into Windows is called Snap. It lets you place two or more apps side by side on your screen at the same time — for example, a browser on the left and your notes on the right. You can look at both without switching back and forth.

This is especially helpful when you are comparing information from two sources, filling out a form while referencing a document, or watching a video while taking notes.

**Basic Snap: Two apps side by side**

The most common use is splitting the screen in half. Drag one app window to the left edge of the screen until you see a blue outline appear — let go and the app fills the left half. Windows then asks which open app you want on the right side. Click it and both apps fill the screen.

**Windows 11 Snap Layouts**

In Windows 11, hover your mouse over the maximize button (the square icon in the top-right corner of any window) and a grid appears showing different layout options: two apps side by side, three apps in columns, a large app with two smaller ones stacked, and more. Click a zone in the grid to snap the app to that position.

**Adjusting the divider**

After snapping two apps, you will see a divider line between them. Click and drag that divider left or right to give more space to whichever app needs it.

**Unsnapping**

To go back to normal, click the maximize button on either app — it returns to its original floating window. Or drag the window away from the edge of the screen.

Quick Tip: Snap works on most Windows 10 and 11 PCs. If you are on a small laptop with limited screen space, it works best when your monitor is 13 inches or larger.`,
    steps: [
      {
        title: `Snap an app to the left half of the screen`,
        content: `Open the first app you want to use — for example, your web browser. Click and hold the title bar (the bar at the very top of the window). Drag it all the way to the left edge of your screen. When you see a blue or transparent outline, release the mouse button. The app snaps to the left half.`,
        tip: `You can also press Windows key + Left arrow to snap the active window to the left without using the mouse.`,
      },
      {
        title: `Choose the app for the right side`,
        content: `After snapping the first app, Windows will show thumbnails of your other open apps on the right side of the screen. Click the one you want to fill the right half. If no thumbnails appear, open a second app and it will fill the right side automatically.`,
      },
      {
        title: `Use Snap Layouts for more options (Windows 11)`,
        content: `Hover your mouse over the square maximize button in the top-right corner of any window. A pop-up grid of layout options appears. Click any zone in the grid to place that app in that position. Windows will then ask which app to place in the remaining zones.`,
      },
      {
        title: `Adjust the split`,
        content: `Look for the thin divider line between the two snapped apps. Click and drag it left or right to resize both apps at once. This is useful if one app needs more room than the other.`,
      },
      {
        title: `Return apps to normal windows`,
        content: `Click the maximize button (the square) on either app to return it to a regular floating window. Or drag the title bar away from the screen edge. Both apps will return to their normal sizes.`,
      },
    ],
  },
  {
    slug: `mac-stage-manager-guide`,
    title: `Mac Stage Manager: Keep Your Open Apps Tidy While You Work`,
    excerpt: `Stage Manager is a macOS feature that organizes open apps into a sidebar so your main window stays focused and you can switch between tasks without losing track of anything.`,
    category: `mac-guides`,
    tags: [`Mac`, `Stage Manager`, `macOS`, `multitasking`, `organization`, `Ventura`, `Sonoma`],
    readTime: `6 min`,
    thumbnailEmoji: `🎭`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Stage Manager is a feature Apple introduced in macOS Ventura and continued through macOS Sequoia (the current version). It changes how open apps appear on your screen so things feel less cluttered. Instead of every open app piling up on the desktop, Stage Manager puts the app you are currently using in the center of the screen — large and in focus — while your other open apps sit in a neat strip on the left side, ready to be called back with one click.

**Why it helps**

If you tend to have many windows open at once and find yourself constantly hunting for the right one, Stage Manager can make switching between tasks feel more deliberate and organized. Each "group" in the sidebar is a task you can step away from and return to with a single click.

**How it looks**

With Stage Manager on, your active app takes up most of the screen in the center. The left side of the screen shows small previews of other open apps and app groups. Clicking a preview in the sidebar brings that app forward instantly.

**App groups**

You can drag one app onto another in the Stage Manager sidebar to create a group — for example, your browser and your notes app together. Clicking the group opens both apps side by side, which is useful for tasks you always do together.

**Turning it on and off**

Stage Manager can be turned on from Control Center (the icon in the top-right corner of your menu bar) or from System Settings > Desktop & Dock > Stage Manager. It can be turned off if you do not like it — your apps will go back to behaving normally.

Quick Tip: Stage Manager works best on a monitor that is 27 inches or larger. On a smaller laptop screen the sidebar eats up screen space. Try it and see if it suits your screen size before committing.`,
    steps: [
      {
        title: `Turn on Stage Manager`,
        content: `Click the Control Center icon in the top-right corner of your Mac's menu bar (it looks like two sliders). You will see a "Stage Manager" button. Click it to turn it on. The button will turn blue to show it is active and your open apps will rearrange immediately.`,
        tip: `You can also turn it on in System Settings > Desktop & Dock > Stage Manager.`,
      },
      {
        title: `Switch between apps using the sidebar`,
        content: `With Stage Manager active, look at the left edge of the screen. You will see small previews of your other open apps in a vertical strip. Click any preview to bring that app to the center stage. Your previous app moves to the sidebar automatically.`,
      },
      {
        title: `Create an app group`,
        content: `Find an app in the left sidebar. Click and drag it on top of the app currently in the center stage. The two apps will merge into a group and open together side by side. This is useful for apps you always use together, like a browser and a notes app.`,
        tip: `To remove an app from a group, drag it away from the center stage and it will become its own item in the sidebar again.`,
      },
      {
        title: `Adjust what Stage Manager shows`,
        content: `Open System Settings, click "Desktop & Dock," and scroll to the Stage Manager section. You can choose whether the desktop icons stay visible and how recently used apps appear. Turning on "Show recent apps in Stage Manager" shows apps you used recently even if they are not currently open.`,
      },
      {
        title: `Turn Stage Manager off if it is not for you`,
        content: `Click Control Center in the menu bar and click the Stage Manager button again to turn it off. All your windows will return to normal floating behavior on the desktop. Nothing is lost — Stage Manager is purely a visual organization layer.`,
      },
    ],
  },
  {
    slug: `wireless-printer-setup-guide`,
    title: `Setting Up a Wireless Printer on Your Home Wi-Fi`,
    excerpt: `Connect your printer to your home Wi-Fi network so any device in the house — laptop, phone, or tablet — can print without needing a USB cable.`,
    category: `how-to`,
    tags: [`printer`, `wireless`, `Wi-Fi`, `setup`, `Windows`, `Mac`, `home network`],
    readTime: `7 min`,
    thumbnailEmoji: `🖨️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `A wireless printer connects to your home Wi-Fi network the same way your phone or laptop does. Once connected, any device in your house can send a print job to it — no USB cable required.

Setting up a wireless printer has two main parts: connecting the printer to your Wi-Fi network, and then adding the printer on each computer or device that needs to use it.

**Step 1: Connect the printer to Wi-Fi**

Most modern printers have a small touchscreen or a set of buttons and a small display. Use the printer's menu to find "Wireless Setup" or "Network Setup" and follow the on-screen steps to select your Wi-Fi network name and enter the password. Some printers support WPS — if your router has a WPS button, you can press it and then press a button on the printer to connect automatically without typing the password.

**Step 2: Add the printer on your computer**

On Windows: Open Settings > Bluetooth & devices > Printers & scanners > Add device. Windows will search for printers on your network and find yours. Click it and click "Add device."

On Mac: Open System Settings > Printers & Scanners. Click the "+" button. Your Mac will search the network and find your printer. Click it and click "Add."

**Printing from a phone**

iPhones and iPads can print to most wireless printers using AirPrint — no setup needed if the printer supports it. Android phones can print using Google Cloud Print alternatives built into the printing settings. Check your phone's sharing menu when viewing a document or photo for a "Print" option.

**Troubleshooting**

If the printer is not found during setup, make sure it is on the same Wi-Fi network as your computer — both should be connected to the same network name. Restarting the printer often resolves detection issues.

Quick Tip: Write your printer's model number on a sticky note and keep it near the printer. You will need it if you ever have to reinstall the driver or contact tech support.`,
    steps: [
      {
        title: `Connect the printer to your Wi-Fi network`,
        content: `On the printer's control panel or touchscreen, find the menu (often a Home or Settings button). Look for "Wireless Setup," "Wi-Fi Setup," or "Network." Follow the prompts to choose your Wi-Fi network name from the list and enter your Wi-Fi password. The printer will confirm when it is connected.`,
        tip: `Your Wi-Fi password is case-sensitive. If the connection fails, double-check each character — especially if it has uppercase letters or special characters like @ or !`,
      },
      {
        title: `Add the printer on a Windows PC`,
        content: `Open Settings (Windows key + I). Go to "Bluetooth & devices" then "Printers & scanners." Click "Add device." Windows will search your network. When your printer appears in the list, click it and then click "Add device." Windows may download a driver automatically.`,
        warning: `If Windows does not find the printer, go to the printer manufacturer's website (HP, Canon, Epson, Brother, etc.) and download the latest driver for your model. This usually fixes detection problems.`,
      },
      {
        title: `Add the printer on a Mac`,
        content: `Open System Settings (Apple menu > System Settings). Click "Printers & Scanners." Click the "+" button or "Add Printer, Scanner, or Fax." Your Mac will scan the network. When your printer appears, click it and then click "Add."`,
      },
      {
        title: `Print a test page`,
        content: `On Windows: go to Settings > Printers & scanners, click your printer, then click "Print a test page." On Mac: in Printers & Scanners, click your printer, then click "Print Test Page" under the "Options & Supplies" section. If the test page prints correctly, your setup is complete.`,
      },
      {
        title: `Print from your phone`,
        content: `On an iPhone or iPad: open the document, photo, or webpage you want to print. Tap the Share button (the box with an arrow pointing up). Scroll down and tap "Print." Choose your printer from the list and tap "Print." On Android: open the document, tap the three-dot menu, and look for "Print." Select your printer and tap the print button.`,
        tip: `If your printer does not show up on iPhone, check that it supports AirPrint. Most printers made after 2013 do. A quick web search for your printer model + "AirPrint" will confirm it.`,
      },
    ],
  },
  {
    slug: `scan-documents-windows-guide`,
    title: `Scanning Documents and Photos Using the Windows Scan App`,
    excerpt: `The free Windows Scan app lets you scan documents and photos from a USB or Wi-Fi scanner and save them as PDFs or image files — no extra software needed.`,
    category: `windows-guides`,
    tags: [`Windows`, `scanning`, `scanner`, `Windows Scan`, `PDF`, `documents`, `photos`],
    readTime: `6 min`,
    thumbnailEmoji: `📄`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Scanning a document means using a scanner to create a digital copy of a paper document or photo. The digital copy can be saved to your computer, emailed, printed again, or uploaded to a website.

Windows comes with a free app called "Windows Scan" (also labeled "Scan" in the Microsoft Store) that works with most USB and wireless scanners without any complicated setup.

**What you need**

A scanner — either a standalone flatbed scanner or an all-in-one printer that has a scanning function. Your scanner needs to be connected to your PC by USB cable, or connected to the same Wi-Fi network as your PC. Most modern scanners are recognized by Windows automatically.

**File formats: PDF or image**

When scanning, you choose how to save the file. PDF is the best choice for documents like letters, tax forms, or receipts — PDFs can be emailed and opened on any device. JPEG is better for photos you want to edit or share on social media. PNG gives the best image quality but larger file sizes.

**Scanning multiple pages into one PDF**

Some scanners have a document feeder — a tray on top where you stack multiple pages and the scanner pulls them in one at a time. The Windows Scan app can scan multiple pages and save them all into a single PDF file.

**Where files are saved**

By default, scanned files go into your "Scanned Documents" folder inside your Pictures folder. You can change this in the app's settings.

Quick Tip: Before scanning important documents like Social Security cards, passports, or medical records, consider whether you need to store them securely. Save them in an encrypted folder or a password-protected cloud storage service, not on your open desktop.`,
    steps: [
      {
        title: `Install and open the Windows Scan app`,
        content: `Press the Windows key, type "Scan," and look for the app called "Scan" or "Windows Scan." If it does not appear, open the Microsoft Store (search for "Microsoft Store" in the Start menu), search for "Windows Scan," and install it for free. Once installed, open the app.`,
      },
      {
        title: `Connect your scanner`,
        content: `If your scanner uses a USB cable, plug it into your PC. If it is a wireless scanner, make sure it is connected to the same Wi-Fi network as your PC. The Scan app should detect your scanner automatically. If it does not appear, click the "Scanner" dropdown at the top of the app to search for available devices.`,
        tip: `If your scanner is an all-in-one printer, it will appear in the Scan app as the same device you print to.`,
      },
      {
        title: `Place your document on the scanner glass`,
        content: `Lift the scanner lid and place your document face-down on the glass, aligned to the corner marked by arrows or a small icon. Close the lid gently. For photos, make sure there are no air bubbles between the photo and the glass — press down lightly if needed.`,
      },
      {
        title: `Choose your settings and scan`,
        content: `In the Windows Scan app, choose your file type: PDF for documents, JPEG for photos. You can also choose the folder where the scan will be saved by clicking "Save file to." When ready, click the "Scan" button at the bottom right. The scanner will warm up and scan your document. A preview will appear when it is done.`,
      },
      {
        title: `Find and use your scanned file`,
        content: `After scanning, a link appears in the app showing where the file was saved. Click it to open the folder. Your scanned file is there, ready to email, print, or upload. You can also open File Explorer and navigate to Pictures > Scanned Documents to find all your scans.`,
        tip: `Rename scanned files right away with something descriptive like "2026 Tax Return W2" so you can find them months later.`,
      },
    ],
  },
  {
    slug: `windows-remote-desktop-guide`,
    title: `Windows Remote Desktop: Access Your Home PC From Anywhere`,
    excerpt: `Windows Remote Desktop lets you connect to your home computer from a laptop or another PC when you are away — useful for accessing files or programs remotely.`,
    category: `windows-guides`,
    tags: [`Windows`, `Remote Desktop`, `remote access`, `work from home`, `RDP`, `Windows 11`, `Windows 10`],
    readTime: `7 min`,
    thumbnailEmoji: `🖥️`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Windows Remote Desktop is a built-in feature that lets you control one Windows PC from another Windows PC over the internet. The screen, keyboard, and mouse of your home computer appear on your laptop screen as if you were sitting right in front of it.

This is useful if you forgot a file at home, need to run a program that is only installed on your home PC, or want to help a family member with their computer from a distance.

**Who can use Remote Desktop**

Remote Desktop is only available on Windows Pro, Enterprise, and Education editions. It is not available on Windows Home, which is what most personal laptops come with. If you have Windows Home, look for free alternatives like Chrome Remote Desktop (free, works on any edition, set up through the Chrome browser).

**The two computers involved**

The computer you want to connect to is called the "host" — it stays on and accepts connections. The computer you are connecting from is called the "client" — it runs the Remote Desktop app. The host must have Remote Desktop enabled and must stay powered on.

**Security considerations**

Enabling Remote Desktop means your computer can accept incoming connections over the internet. This is safe when done properly — use a strong password on your Windows account, and only connect from computers you trust. Turn Remote Desktop off when you no longer need it.

Quick Tip: Before leaving home, write down your home computer's name (found in Settings > System > About > Device name). You will need it to connect remotely.`,
    steps: [
      {
        title: `Enable Remote Desktop on the host PC`,
        content: `On the computer you want to connect to, open Settings (Windows key + I). Go to System > Remote Desktop. Toggle "Remote Desktop" to On. A confirmation dialog will appear — click "Confirm." Note the "PC name" shown on this page — you will need it to connect.`,
        warning: `Only enable Remote Desktop on a computer that has a strong Windows account password. A weak password makes it easier for unauthorized people to connect.`,
      },
      {
        title: `Note the PC name and your username`,
        content: `While still in Settings > System > Remote Desktop, look for the "PC name" field. Write it down. Also make note of which Windows user account you log in with — you will need both pieces of information when connecting from the other computer.`,
        tip: `If both PCs are on the same home network, the PC name usually works for the connection. If connecting over the internet from outside your home, you may also need your home's public IP address, which requires additional router configuration.`,
      },
      {
        title: `Open Remote Desktop Connection on the client PC`,
        content: `On the computer you are connecting from, press the Windows key, type "Remote Desktop Connection," and open it. A small dialog box appears with a "Computer" field. Type the PC name of your home computer and click "Connect."`,
      },
      {
        title: `Log in to your home PC`,
        content: `A login screen will appear. Enter the username and password of the account on your home PC. Click "OK." After a moment, your home computer's desktop will appear in a window on your current screen. You can now use your home PC as if you were sitting in front of it.`,
        warning: `If the connection is rejected, check that Remote Desktop is still enabled on the host PC and that both computers are connected to the internet.`,
      },
      {
        title: `Disconnect when done`,
        content: `When you are finished, click the X at the top of the Remote Desktop window or go to Start > Power > Disconnect on the remote session. This ends the session without shutting down your home PC, so it remains on and ready for future connections.`,
      },
    ],
  },
  {
    slug: `autocorrect-guide-iphone`,
    title: `iPhone Autocorrect: Fix Overzealous Corrections and Add Custom Words`,
    excerpt: `iPhone autocorrect helps with spelling but can be frustrating when it changes words you want. Learn how to add custom words, undo wrong corrections, and adjust autocorrect settings.`,
    category: `phone-guides`,
    tags: [`iPhone`, `autocorrect`, `keyboard`, `iOS`, `custom words`, `Text Replacement`, `settings`],
    readTime: `6 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Autocorrect on iPhone is designed to catch spelling mistakes as you type. Most of the time it works well — but it also has a reputation for changing words you typed correctly into something you did not mean, or stubbornly refusing to accept names, technical terms, or slang that you use regularly.

The good news is that iPhone gives you several ways to take back control.

**Undoing a wrong autocorrect immediately**

When autocorrect changes a word and you want the original back, tap the corrected word. A small bubble will appear showing the word you actually typed — tap it to switch back. If you miss this window, you can also shake your iPhone gently to undo the last change.

**Teaching iPhone to accept a word**

If autocorrect keeps changing a specific word, you can add it to your personal dictionary using Text Replacement. Go to Settings > General > Keyboard > Text Replacement. Tap the "+" button. In the "Phrase" field, type the exact word you want — for example, a name like "Grayson" or a word like "gonna." Leave the "Shortcut" field empty. Now the keyboard will recognize it as a legitimate word.

**Turning off autocorrect for specific apps**

Some apps let you turn off autocorrect inside them. In apps that use the standard iOS keyboard, you can turn off autocorrect by going to Settings > General > Keyboard and toggling off "Auto-Correction." Note that this turns it off everywhere — not for one specific app.

**Predictive text and autocorrect are separate**

The bar above the keyboard showing word suggestions is "Predictive text" — a different feature from autocorrect. You can turn it off separately in Settings > General > Keyboard > Predictive Text.

Quick Tip: If you reset your keyboard dictionary (Settings > General > Transfer or Reset iPhone > Reset > Reset Keyboard Dictionary), the iPhone forgets all the words it learned from your typing. This can fix repeated wrong autocorrections, but you will have to re-train it.`,
    steps: [
      {
        title: `Undo an autocorrect immediately after it happens`,
        content: `When autocorrect changes a word while you are typing, look for a small underlined version of the word. Tap it once and a bubble appears showing the word you originally typed. Tap your original word in the bubble to switch back. If you do not catch it in time, shake the phone gently and tap "Undo" to reverse the last change.`,
        tip: `The undo-by-shaking feature works throughout iOS — not only for autocorrect. It is useful for undoing accidental deletions too.`,
      },
      {
        title: `Add a word to your personal dictionary`,
        content: `Open the Settings app. Go to General > Keyboard > Text Replacement. Tap the "+" button in the top right. In the "Phrase" field type the word exactly as you want it to appear — for example a name, a nickname, or a medical term. Leave the "Shortcut" field blank unless you want a shortcut. Tap "Save." The keyboard will now recognize this word.`,
      },
      {
        title: `Turn off autocorrect entirely`,
        content: `Open Settings > General > Keyboard. Find the "Auto-Correction" toggle and turn it off. Autocorrect will stop changing your words as you type. Spell check underlining will still work — the keyboard will show you potential misspellings without fixing them automatically.`,
        warning: `Turning off autocorrect globally means it will not catch genuine typos either. Consider whether you want it off everywhere or only in specific situations.`,
      },
      {
        title: `Create a text shortcut for phrases you type often`,
        content: `In Settings > General > Keyboard > Text Replacement, tap "+" and this time fill in both fields. In "Phrase" type the full text you want — for example "On my way, I will be there in about 10 minutes." In "Shortcut" type a short code like "omw." Now whenever you type "omw," iPhone will expand it to the full phrase.`,
        tip: `Text shortcuts work across all apps — messages, emails, notes, everything. They are a great time-saver for addresses, standard replies, or your email signature.`,
      },
    ],
  },
  {
    slug: `android-autocorrect-guide`,
    title: `Android Autocorrect and Personal Dictionary: Customize Gboard Corrections`,
    excerpt: `Gboard on Android keeps changing words you want? Learn how to add names and custom words to your personal dictionary and adjust autocorrect strength.`,
    category: `phone-guides`,
    tags: [`Android`, `Gboard`, `autocorrect`, `personal dictionary`, `keyboard`, `Google`, `settings`],
    readTime: `6 min`,
    thumbnailEmoji: `⌨️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Gboard is Google's keyboard app that comes pre-installed on most Android phones. Like iPhone's keyboard, it uses autocorrect to fix spelling mistakes as you type. And like iPhone's, it sometimes gets words wrong — especially names, slang, technical terms, or words that are not in its standard dictionary.

Android gives you a personal dictionary where you can add any words you want the keyboard to accept without changing them.

**How autocorrect works on Gboard**

Gboard watches what you type and compares each word to its dictionary. If a word is not recognized, it may replace it with the closest match — sometimes right, sometimes wrong. It also learns from your typing over time, picking up words you use often.

**The personal dictionary**

The personal dictionary is where you save words that Gboard does not know. Adding a word there tells the keyboard "this is a real word, stop changing it." You can also add shortcuts — short codes that expand into longer phrases when you type them.

**Accessing Gboard settings**

You can reach Gboard's settings by opening any app with a text field, tapping to bring up the keyboard, and then tapping the gear icon that appears in the top row of the keyboard. From there, go to "Dictionary" to manage your personal word list.

**Autocorrect strength**

Gboard lets you choose how aggressively it corrects. In Gboard settings, go to "Text correction" and find "Autocorrect." You can set it to "Off," "Modest," or "Aggressive." Modest means it only corrects clear mistakes; Aggressive means it corrects more freely, including unusual words it thinks might be wrong.

Quick Tip: If Gboard keeps changing a specific word every time, long-press the word after autocorrect changes it. You may see an option to "Add to dictionary" — tap it to prevent the correction from happening again.`,
    steps: [
      {
        title: `Open Gboard settings`,
        content: `Tap on any text field in any app to open the keyboard. Look at the row above the keyboard — you may see a gear icon on the far left. Tap it to open Gboard settings. If you do not see a gear icon, tap the three-dot menu icon and look for "Settings" in the menu that appears.`,
        tip: `You can also reach Gboard settings through your phone's Settings app: Settings > General Management > Keyboard list and default > Gboard > Gboard settings.`,
      },
      {
        title: `Add a word to your personal dictionary`,
        content: `In Gboard settings, tap "Dictionary" then "Personal dictionary." Tap "All languages" (or your specific language). Tap the "+" button in the top-right corner. Type the word you want to add — for example a person's name or a medical term. You can also add a shortcut in the field below if you want. Tap the checkmark or back arrow to save.`,
      },
      {
        title: `Change autocorrect strength`,
        content: `In Gboard settings, tap "Text correction." Find "Autocorrect" and tap it. A menu appears with options: "Off," "Modest," or "Aggressive." Choose "Modest" if you want autocorrect to only fix clear mistakes, or "Off" to stop automatic corrections entirely. Tap your choice to save.`,
      },
      {
        title: `Undo a wrong autocorrect`,
        content: `When Gboard changes a word and you want the original back, look at the word suggestion bar above the keyboard — your original typed word often appears there. Tap it to switch back. You can also tap the Backspace key once immediately after an autocorrect to undo it and restore what you typed.`,
        tip: `If Gboard keeps changing the same word even after you undo it, add the word to your personal dictionary (step 2) to permanently stop the correction.`,
      },
    ],
  },
  {
    slug: `laptop-battery-life-guide`,
    title: `Making Your Laptop Battery Last Longer: Power Settings, Brightness, and App Drain`,
    excerpt: `Practical steps to squeeze more hours out of your laptop battery — from adjusting your power plan to finding out which apps are draining power the fastest.`,
    category: `essential-skills`,
    tags: [`laptop`, `battery`, `power settings`, `Windows`, `battery life`, `power plan`, `screen brightness`],
    readTime: `6 min`,
    thumbnailEmoji: `🔋`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Laptop batteries drain faster than most people expect, especially as the laptop gets older. The battery's maximum capacity shrinks a little each year, and certain habits — like running the screen at full brightness all day or keeping a dozen apps open — make it drain even faster.

The good news is that a few simple changes can add an hour or more to your battery life without making your laptop noticeably less useful.

**Screen brightness is the biggest drain**

Your screen's backlight is usually the single biggest consumer of battery power on a laptop. Turning brightness down from 100% to 50–60% can make a noticeable difference. Most laptops have brightness keys on the function row (look for a sun icon). On Windows, you can also go to Settings > System > Display > Brightness.

**Power plans on Windows**

Windows has built-in power plans that balance performance against battery life. The "Balanced" plan is fine for most tasks. If you need to stretch the battery, switch to "Power saver" mode — it reduces background activity and limits how hard the processor works. Click the battery icon in the taskbar to see a slider that adjusts between "Battery saver" and "Best performance."

**Finding battery-hungry apps**

On Windows, open Settings > System > Power & battery > Battery usage. This shows which apps used the most battery over the past 24 hours. If an app you rarely use is at the top of the list, close it when you are not actively using it.

**Sleep and hibernate settings**

Setting your laptop to sleep after a few minutes of inactivity — rather than leaving the screen on — saves significant power. Go to Settings > System > Power & battery > Screen and sleep to adjust these timers.

Quick Tip: Closing browser tabs you are not using is one of the quickest battery wins. Each open tab uses processor cycles and memory, even when you are not looking at it.`,
    steps: [
      {
        title: `Lower your screen brightness`,
        content: `Press the brightness-down key on your keyboard (usually a function key with a sun icon) to reduce screen brightness. Aim for the lowest brightness that is still comfortable to look at. On Windows you can also go to Settings > System > Display and drag the "Brightness" slider down.`,
        tip: `Turn on "Adaptive brightness" in Display settings if your laptop has an ambient light sensor — it automatically adjusts brightness based on the room lighting.`,
      },
      {
        title: `Switch to Battery Saver mode`,
        content: `Click the battery icon in the Windows taskbar (bottom-right corner of the screen). A slider appears. Move it toward the left (toward "Battery saver") to reduce background activity and extend battery life. You can also go to Settings > System > Power & battery and turn "Battery saver" on manually.`,
        tip: `Battery saver dims the screen slightly and pauses some background syncing. You may notice email arrives a little less frequently, but most tasks work the same.`,
      },
      {
        title: `Find which apps are using the most battery`,
        content: `Go to Settings > System > Power & battery. Scroll down to "Battery usage." You will see a list of apps and the percentage of battery each used in the past 24 hours. If an app you rarely use is near the top, close it when you are not actively using it.`,
      },
      {
        title: `Adjust sleep and screen-off timers`,
        content: `Go to Settings > System > Power & battery > Screen and sleep. Set "On battery power, turn off my screen after" to 3–5 minutes. Set "On battery power, put my device to sleep after" to 10–15 minutes. This prevents the screen from staying on when you step away from the laptop.`,
      },
      {
        title: `Close unused apps and browser tabs`,
        content: `Right-click the taskbar at the bottom and click "Task Manager." Look at the "CPU" and "Memory" columns. Any app using high CPU while you are not actively using it is draining your battery. Close it by right-clicking the app in Task Manager and choosing "End task." In your browser, close tabs you are not currently using.`,
        warning: `Before ending a task in Task Manager, make sure you have saved any open work in that app. Ending a task closes the app immediately without saving.`,
      },
    ],
  },
  {
    slug: `android-app-drawer-guide`,
    title: `The Android App Drawer: What It Is and How to Organize Your Apps`,
    excerpt: `The app drawer holds every app installed on your Android phone. Learn the difference between the home screen and the app drawer, and how to keep both organized.`,
    category: `phone-guides`,
    tags: [`Android`, `app drawer`, `home screen`, `apps`, `organize`, `launcher`],
    readTime: `5 min`,
    thumbnailEmoji: `📱`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `If you have an Android phone and have ever wondered where all your apps went — or why some apps appear in one place but not another — the answer usually involves the app drawer.

**What is the app drawer?**

The app drawer is a screen that holds every single app installed on your Android phone, arranged alphabetically. You access it by swiping up from the home screen (on most Android phones) or tapping a small grid icon near the bottom of the screen.

**How is the app drawer different from the home screen?**

Your home screen is like a bulletin board where you put shortcuts to the apps you use most. The app drawer is the full organized list of everything. When you install a new app, it goes to the app drawer automatically. It only appears on your home screen if you drag it there.

This design helps keep your home screen from becoming cluttered — you choose which apps to feature on the home screen, while the app drawer holds the rest safely in the background.

**Finding a specific app**

If you cannot find an app on your home screen, swipe up to open the app drawer. Most app drawers have a search bar at the top — tap it and type the app name to find it instantly, even if you have hundreds of apps installed.

**Organizing the home screen**

To add an app from the app drawer to your home screen, open the app drawer, then press and hold the app icon. After a second, you can drag it to any position on your home screen. To remove an app from the home screen (without deleting it), press and hold its icon on the home screen and drag it to "Remove" at the top — the app stays in the app drawer.

Quick Tip: On Samsung phones, the app drawer is accessed by swiping up on the home screen. On some older or customized Android phones, there may be a small grid of dots at the bottom of the screen — tap it to open the app drawer.`,
    steps: [
      {
        title: `Open the app drawer`,
        content: `From your home screen, swipe upward with your finger starting from the middle or bottom of the screen. The app drawer will slide up, showing all your installed apps in alphabetical order. On some phones, tap a small grid icon at the bottom of the home screen instead.`,
        tip: `If swiping up opens Google Assistant or another feature instead of the app drawer, try swiping up from the very bottom center of the screen.`,
      },
      {
        title: `Find a specific app`,
        content: `At the top of the app drawer, look for a search bar. Tap it and type the name of the app you are looking for. Results appear immediately as you type. Tap the app icon to open it.`,
      },
      {
        title: `Add an app to your home screen`,
        content: `In the app drawer, press and hold the icon of the app you want on your home screen. Hold for about one second until the phone vibrates slightly or the icon lifts. Drag the icon down to the home screen. Release it in an empty spot. The app shortcut now appears on your home screen.`,
      },
      {
        title: `Remove an app shortcut from the home screen`,
        content: `On the home screen, press and hold the app icon you want to remove. After the icon lifts, drag it toward the top of the screen where you will see a "Remove" option appear. Drop it there. The shortcut disappears from the home screen, but the app itself stays on your phone and remains accessible in the app drawer.`,
        warning: `"Remove" takes the shortcut off the home screen without deleting the app. "Uninstall" (which appears as a separate option in some launchers) actually deletes the app. Make sure you choose the right option.`,
      },
      {
        title: `Create a folder on your home screen`,
        content: `If you have many app shortcuts on the home screen, organize them into folders. Press and hold one app icon and drag it on top of another app icon. The phone will create a folder containing both. Tap the folder to name it — for example "Games" or "Finance." Drag more app shortcuts into the folder to group related apps.`,
      },
    ],
  },
  {
    slug: `windows-do-not-disturb`,
    title: `Windows Focus Assist and Do Not Disturb: Silence Notifications`,
    excerpt: `Windows Focus Assist (called Do Not Disturb in Windows 11) lets you mute pop-up notifications so you can concentrate on your work or sleep without interruptions.`,
    category: `windows-guides`,
    tags: [`Windows`, `Focus Assist`, `Do Not Disturb`, `notifications`, `Windows 11`, `productivity`],
    readTime: `5 min`,
    thumbnailEmoji: `🔕`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Windows notifications are helpful — but they can become a distraction. Every banner that pops up in the bottom-right corner of your screen pulls your attention away from what you are doing. Windows has a feature to silence them temporarily.

In Windows 11, this feature is called "Do Not Disturb." In Windows 10, it was called "Focus Assist." Both do the same thing: they stop notification banners from appearing on your screen. Notifications are not deleted — they are stored in your Notification Center and you can review them when you are ready.

**Turning it on quickly**

The fastest way to turn on Do Not Disturb is through the Quick Settings panel. Click the area in the taskbar that shows the Wi-Fi signal, sound level, and battery icons (bottom-right corner). A panel opens. Click the bell icon to toggle Do Not Disturb on or off.

**Scheduling it automatically**

You can set Windows to turn on Do Not Disturb automatically — for example, every night from 10 PM to 7 AM, or whenever you are duplicating your screen for a presentation. Go to Settings > System > Notifications > Do not disturb (Windows 11) or Focus Assist (Windows 10) and set up rules.

**Priority notifications**

If there are specific people or apps whose notifications you always want to see even in Do Not Disturb mode, you can create a priority list. In the Do Not Disturb settings, find "Priority notifications" and add the apps or people who can always reach you.

Quick Tip: Windows 11 automatically turns on Do Not Disturb when you are playing a game, mirroring your screen, or running a presentation — so notifications do not pop up during important moments.`,
    steps: [
      {
        title: `Turn on Do Not Disturb from the taskbar`,
        content: `Click the group of icons in the bottom-right corner of the taskbar — the area showing Wi-Fi, volume, and battery. A Quick Settings panel opens. Look for a bell icon labeled "Do not disturb" and click it to turn it on. The icon will turn blue or highlight to show it is active. Click it again to turn it off.`,
        tip: `If you do not see the bell icon, click the pencil (Edit) icon at the bottom of the Quick Settings panel to add it.`,
      },
      {
        title: `Review missed notifications`,
        content: `While Do Not Disturb is on, notifications are saved rather than shown immediately. To see what came in, click anywhere on the date and time in the bottom-right corner. The Notification Center opens showing all saved notifications. Click any notification to act on it.`,
      },
      {
        title: `Set up automatic Do Not Disturb rules`,
        content: `Open Settings (Windows key + I). Go to System > Notifications. Click "Do not disturb" or "Focus Assist" to expand the options. You will see rules like "During certain hours" — click it to set a start time and end time. Windows will automatically turn on Do Not Disturb during those hours every day.`,
      },
      {
        title: `Allow priority notifications through`,
        content: `In the same Notifications settings, look for "Set priority notifications" or "Priority list." Click it and add the apps or contacts that can always reach you. For example, you might allow phone calls and messages from family members while silencing everything else.`,
        tip: `Adding only your messaging app to the priority list is a good balance — you stay reachable to people but screen out all the less-urgent app alerts.`,
      },
    ],
  },
  {
    slug: `mac-focus-mode-guide`,
    title: `Mac Focus Modes: Block Distracting Notifications During Work or Sleep`,
    excerpt: `Mac Focus modes let you create a Work or Personal focus that blocks certain notifications automatically at set times, so your concentration or sleep is protected.`,
    category: `mac-guides`,
    tags: [`Mac`, `Focus mode`, `Do Not Disturb`, `notifications`, `macOS`, `productivity`, `Ventura`],
    readTime: `6 min`,
    thumbnailEmoji: `🎯`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Focus modes on Mac let you control which notifications you see — and when you see them. Instead of every app interrupting you with a banner throughout the day, you can set up a "Work" focus that only allows important notifications during work hours, or a "Sleep" focus that silences everything at night.

Focus modes were introduced in macOS Monterey and work across all Apple devices. If you use an iPhone with the same Apple ID, turning on a Focus on your Mac can automatically turn it on your iPhone too.

**The built-in Focus presets**

Apple provides several pre-made Focus modes: Do Not Disturb (silences everything), Personal, Work, Sleep, and Fitness. Each one starts with sensible defaults. You can customize what each one allows or blocks.

**Setting up a Work focus**

The idea behind a Work focus is that during work hours you want to receive work-related notifications — your email app, calendar reminders, messaging from colleagues — but not social media, games, or news. In Work focus settings you choose which apps and which people can send you notifications.

**Automating Focus modes**

The most powerful part of Focus is automation. You can tell Mac to turn on your Work focus automatically from 9 AM to 5 PM on weekdays, and turn it off otherwise. You can also trigger it based on your location (automatically activates when you arrive at your office) or when a specific app is open.

**Allowed apps and people**

For each Focus mode you can create two lists: allowed apps (only these apps can notify you) and allowed people (only these contacts can reach you). Everyone else is silenced until you check the notification center manually.

Quick Tip: On Mac, you can share your Focus status with contacts in Messages. They will see "Bailey has notifications silenced" instead of wondering why you are not responding.`,
    steps: [
      {
        title: `Open Focus settings`,
        content: `Click the Apple menu in the top-left corner and choose "System Settings." Click "Focus" in the left sidebar. You will see the built-in Focus modes listed: Do Not Disturb, Personal, Work, Sleep, and others. Click a Focus to customize it, or click the "+" button to create a new one.`,
      },
      {
        title: `Choose which apps can notify you`,
        content: `Click a Focus mode — for example, "Work." Click "Apps" under "Allowed Notifications." Click "Add Apps" and check off the apps that should be allowed to send you notifications during this focus. Leave out social media, games, and news apps to reduce distractions. All other apps will be silenced.`,
        tip: `Start with a small allowed list and add apps back if you find you are missing something important. It is easier to add than to remember why you blocked something.`,
      },
      {
        title: `Choose which people can reach you`,
        content: `In the same Focus settings, click "People." Click "Add People" and select contacts who should always be able to reach you during this focus — family members, close colleagues, or your doctor. Anyone not on the list will be silenced.`,
      },
      {
        title: `Set up automatic activation`,
        content: `Click "Add Schedule" at the bottom of the Focus settings page. You can choose "Time" to set specific hours and days — for example, 9 AM to 6 PM, Monday through Friday. You can also choose "Location" (activates at a specific address) or "App" (activates when you open a particular app).`,
      },
      {
        title: `Turn a Focus on or off manually`,
        content: `Click the Control Center icon in the top-right corner of the menu bar (it looks like two sliders). Click "Focus" and then click the Focus you want to activate. A checkmark appears when it is on. Click it again to turn it off. You can also turn it off automatically with a timer by clicking "For an hour" or "Until this evening."`,
      },
    ],
  },
  {
    slug: `guest-wifi-guide`,
    title: `Setting Up a Guest Wi-Fi Network on Your Router`,
    excerpt: `A guest Wi-Fi network lets visitors connect to the internet at your home without ever knowing your main Wi-Fi password — keeping your personal devices safer.`,
    category: `internet-connectivity`,
    tags: [`Wi-Fi`, `guest network`, `router`, `home network`, `security`, `internet`, `password`],
    readTime: `6 min`,
    thumbnailEmoji: `📶`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `A guest Wi-Fi network is a separate wireless network that runs on the same router as your main home Wi-Fi. Guests connect to it and get internet access, but they are kept separate from your home network. They cannot see your personal computers, printers, smart home devices, or shared files — even if they are on the same physical internet connection.

**Why use a guest network?**

Your main Wi-Fi password protects everything on your home network. If you give that password to every visitor — a friend, a repairperson, a house guest — you are giving them access to your entire network. A guest network solves this by providing a separate "lane" for visitors that goes only to the internet, not to your home devices.

Guest networks are also useful for smart home devices (smart bulbs, TVs, voice assistants) that do not need access to your personal computers. Keeping those devices on a guest network limits the damage if one is ever compromised.

**How to set it up**

You set up a guest network through your router's settings page, which you access through a web browser on your computer. Most routers support guest networks — you usually need to log into the router's admin panel, find the "Guest Network" or "Wireless" section, and turn it on.

**Finding your router's IP address**

On Windows: open a Command Prompt, type "ipconfig", and look for "Default Gateway" — that is your router's IP address, usually something like 192.168.1.1. On Mac: open System Settings > Network > Wi-Fi > Details, and look for the Router IP.

**Giving it a name and password**

Choose a friendly name for the guest network — something like "SmithHouseGuests" — and set a strong but simple-to-share password. You can write it on a card near your router so guests can connect without asking you each time.

Quick Tip: Most modern routers — especially those from Xfinity, Spectrum, AT&T, and Eero — have companion apps that make setting up a guest network much easier than using the browser-based admin panel. Check if your router has an app first.`,
    steps: [
      {
        title: `Find your router's admin page address`,
        content: `On Windows, press Windows key + R, type "cmd" and press Enter. In the black window, type "ipconfig" and press Enter. Look for the line that says "Default Gateway" — the number next to it (like 192.168.1.1 or 192.168.0.1) is your router's address. On Mac, go to System Settings > Network > Wi-Fi, click "Details," and look for "Router."`,
      },
      {
        title: `Log into your router`,
        content: `Open a web browser (Chrome, Edge, or Safari) on your computer. Type the router's IP address in the address bar at the top and press Enter. A login screen will appear. The default username and password are often printed on a sticker on the back of your router — common combinations are admin/admin or admin/password. Change this password if you never have.`,
        warning: `If you cannot find your router's login credentials, look on the label on the back or bottom of the router. If they have been changed and you do not know them, you may need to factory-reset the router — which will also disconnect all your devices and require reconnecting them.`,
      },
      {
        title: `Find the Guest Network settings`,
        content: `Once logged in, look for a menu labeled "Wireless," "Wi-Fi," "Guest Network," or "Advanced Settings." The exact location depends on your router brand — Netgear, Linksys, TP-Link, and Asus all have slightly different layouts. Click into the Guest Network section.`,
      },
      {
        title: `Enable and configure the guest network`,
        content: `Turn the guest network on with the toggle or checkbox. Set a network name (SSID) for the guest network — something guests will recognize, like "YourLastName_Guest." Set a Wi-Fi password for it. Make sure the option "Allow guests to access local network" or "Allow access to intranet" is turned OFF — this keeps guests off your main home network.`,
        tip: `Set the guest network's password to something you can share verbally or write on a piece of paper by the router. It does not need to be as complex as your main password since it only grants internet access, not access to your files.`,
      },
      {
        title: `Save and test`,
        content: `Click "Save" or "Apply" in the router settings. The new guest network may take 30 seconds to appear. On your phone or a guest's phone, look for the new network name in the Wi-Fi list. Connect with the guest password and confirm the internet works. Then confirm that your home computers and shared folders are not accessible from the guest network.`,
      },
    ],
  },
  {
    slug: `wifi-extender-guide`,
    title: `Wi-Fi Range Extenders: When to Use One, Where to Place It, and How to Set It Up`,
    excerpt: `A Wi-Fi range extender boosts your wireless signal into rooms where the connection is weak or drops out. Here is when they help, how to position one, and how to get it running.`,
    category: `internet-connectivity`,
    tags: [`Wi-Fi`, `range extender`, `wireless`, `router`, `signal`, `home network`, `setup`],
    readTime: `7 min`,
    thumbnailEmoji: `📡`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `If your Wi-Fi signal is strong in the room with your router but weak in the bedroom, garage, or backyard, a Wi-Fi range extender can help. It picks up your existing Wi-Fi signal and rebroadcasts it, extending coverage into areas the router cannot reach well on its own.

**When a range extender actually helps**

Extenders work best when the problem is distance or obstacles between the device and the router — for example, walls, floors, or a long hallway. If your internet connection itself is slow (not the Wi-Fi signal strength), an extender will not help. Check your internet speed at speedtest.net first.

**The limitation of extenders**

A range extender creates a second network — sometimes with a different name like "MyWiFi_EXT." Devices have to switch between the original network and the extended one as you move around the house, which does not always happen automatically. This can cause brief disconnects. Mesh Wi-Fi systems (like Eero or Google Nest WiFi) solve this more elegantly but cost more.

**Where to place the extender**

This is the most common mistake people make: placing the extender too far from the router. The extender needs to receive a strong signal from the router to have anything good to repeat. Place it halfway between the router and the dead zone — still within clear signal range of the router, but close enough to push coverage into the problem area. A good rule of thumb: if you can only get one or two Wi-Fi bars at the extender's location, move it closer to the router.

**Setting it up**

Most modern extenders support WPS (Wi-Fi Protected Setup) — press the WPS button on your router and then the WPS button on the extender within two minutes, and they connect automatically without any typing. Otherwise, you set up the extender through a mobile app or a browser-based setup page.

Quick Tip: TP-Link, Netgear, and Belkin all make reliable extenders in the $30–$60 range. Look for one that supports the same Wi-Fi standard as your router (Wi-Fi 5 or Wi-Fi 6) for the best results.`,
    steps: [
      {
        title: `Identify the dead zone and plug in the extender`,
        content: `Walk around your home with your phone and note where the Wi-Fi signal drops or becomes slow. Plug the extender into a power outlet roughly halfway between your router and that problem area. The extender needs to be within good signal range of the router — not in the dead zone itself.`,
        tip: `Most extenders have signal indicator lights. A green or full set of bars means it is receiving a good signal from the router. Yellow or amber means the signal is marginal — move the extender closer to the router.`,
      },
      {
        title: `Connect the extender to your Wi-Fi using WPS`,
        content: `Look for a WPS button on your router (often labeled "WPS" or shown with a symbol of two curved arrows). Press it. Then, within two minutes, press the WPS button on the extender. The extender's light will blink and then turn solid when it has successfully connected to your router's network.`,
        tip: `If your router does not have a WPS button (many newer routers have removed it for security reasons), use the app method in step 3 instead.`,
      },
      {
        title: `Set up without WPS using the app or browser`,
        content: `If your extender came with a mobile app (TP-Link uses "Tether," Netgear uses "Nighthawk"), download the app and follow the in-app setup steps. If no app is available, connect your phone or laptop to the extender's default Wi-Fi network (the name is printed on the extender's label), then open a browser and follow the setup wizard that appears.`,
      },
      {
        title: `Give the extended network a name`,
        content: `During setup you will be asked to choose a name (SSID) for the extended network. You can give it the same name as your main network (so devices switch automatically) or a different name like "MyWiFi_EXT" (so you can manually choose which network to connect to). Most extenders work fine either way.`,
      },
      {
        title: `Test the signal in the dead zone`,
        content: `Walk to the area that previously had poor coverage and check your Wi-Fi signal on your phone or laptop. Run a quick speed test at speedtest.net to confirm you are getting usable speeds. If the signal is still weak, try moving the extender a bit closer to the dead zone — it may need repositioning.`,
        warning: `If you get good signal strength in the dead zone but speeds are still very slow, the extender may be too far from the router. Move it closer to the router and accept slightly reduced (but still functional) coverage at the far end.`,
      },
    ],
  },
  {
    slug: `wifi-analyzer-guide`,
    title: `Wi-Fi Analyzer Apps: Find the Strongest Spot and the Best Channel`,
    excerpt: `A Wi-Fi analyzer app shows you signal strength throughout your home and which Wi-Fi channels are congested — helping you place your router and extender in the best spots.`,
    category: `internet-connectivity`,
    tags: [`Wi-Fi`, `Wi-Fi analyzer`, `channel`, `signal strength`, `network`, `router`, `troubleshooting`],
    readTime: `6 min`,
    thumbnailEmoji: `📊`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `A Wi-Fi analyzer is an app that reads the wireless environment around you and turns that data into useful information. Instead of guessing why your Wi-Fi is slow in the kitchen or which channel your neighbors are all using, a Wi-Fi analyzer gives you a clear picture.

**What a Wi-Fi analyzer shows you**

Signal strength: how strong the Wi-Fi signal is in different parts of your home. Walk around with your phone running the app and watch the signal level rise and fall. This tells you where to place your router or extender for the best coverage.

Channel congestion: Wi-Fi routers broadcast on numbered channels, and if all your neighbors are on the same channel, your connection suffers. A Wi-Fi analyzer shows you all the networks nearby and which channels they use, so you can switch your router to a less-crowded channel.

**Channels explained**

On the 2.4 GHz Wi-Fi band (which travels farther but is slower), channels 1, 6, and 11 are the ones that do not overlap with each other — those are the best options. If you and your neighbors are all on channel 6, switching to channel 1 or 11 can reduce interference. On 5 GHz, there are many more channels and congestion is much less common.

**Recommended free apps**

On Android: "WiFi Analyzer" by farproc is a widely used, completely free tool available on the Google Play Store. On iPhone: Apple's policies limit how much wireless data apps can access, but "Network Analyzer" by Techet and "Wifi SweetSpots" are useful alternatives. On Windows PC: "WiFi Analyzer" from the Microsoft Store is a solid free option.

**Changing your router's channel**

Once you know which channel is least congested, log into your router's admin panel (see the guest Wi-Fi guide for how to do this), find the Wireless settings, and change the channel manually. Save the settings and your router will restart on the new channel.

Quick Tip: Most modern routers support "auto" channel selection, which tries to pick the best channel automatically. If your router supports it, enabling auto channel can be a quick fix without needing an analyzer app.`,
    steps: [
      {
        title: `Download a Wi-Fi analyzer app`,
        content: `On Android, open the Google Play Store and search for "WiFi Analyzer" — the free app by farproc is one of the most downloaded. On iPhone, search the App Store for "Network Analyzer" or "Wifi SweetSpots." On a Windows laptop, open the Microsoft Store and search "WiFi Analyzer" — the app from Microsoft is free and reliable.`,
      },
      {
        title: `Walk around your home and map signal strength`,
        content: `Open the analyzer app and look for a "Signal" or "Signal Strength" view. Walk slowly from room to room while watching the signal level for your network. The number shown (in dBm) gets more negative as signal weakens — -50 dBm is excellent, -70 dBm is fair, -80 dBm and below is weak. Note which rooms have the weakest signal.`,
        tip: `Hold your phone at normal use height as you walk — the signal level can vary depending on where in the room you hold the device.`,
      },
      {
        title: `Check which channels your neighbors are using`,
        content: `In the analyzer app, look for a "Channel Graph," "Band View," or "Networks" tab. You will see a list of all Wi-Fi networks in range — your own and your neighbors'. Note which channels have the most networks clustered on them. The channel with the fewest networks (especially large or overlapping signal bars) is the least congested.`,
      },
      {
        title: `Change your router to a less congested channel`,
        content: `Open a browser on your computer and go to your router's admin page (type the router's IP address — usually 192.168.1.1 — into the address bar). Log in, go to the Wireless or Wi-Fi settings, and find the "Channel" option. Change it from "Auto" to the specific channel number that had the least congestion in step 3. Click Save. Your router will briefly restart on the new channel.`,
        warning: `Changing the channel causes your router to restart, which briefly disconnects all devices in your home. They will reconnect automatically within about 30 seconds.`,
      },
      {
        title: `Re-test your connection speed`,
        content: `After changing the channel, wait two minutes for all devices to reconnect. Then run a speed test at speedtest.net on the device that was having trouble. Compare the result to your previous speed. On the 2.4 GHz band, a significant improvement from channel switching is common in densely populated areas like apartments and neighborhoods with many routers nearby.`,
        tip: `Run the speed test a few times at different times of day — internet speeds naturally vary based on how many people in your area are online at once.`,
      },
    ],
  },
];
