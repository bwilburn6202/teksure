/**
 * Patches guides.ts to add screenshotUrl/screenshotAlt fields.
 * Run: node scripts/patch-screenshot-urls.mjs
 */
import fs from 'fs';

const FILE = new URL('../src/data/guides.ts', import.meta.url).pathname;
let src = fs.readFileSync(FILE, 'utf8');

// Insert screenshotUrl after a screenshotDesc value, found by plain string search
function patch(screenshotDesc, url, alt) {
  const descStr = `screenshotDesc: '${screenshotDesc}'`;
  if (src.includes(`'${url}'`)) {
    console.log('  already done:', url);
    return;
  }
  const idx = src.indexOf(descStr);
  if (idx === -1) {
    // Try double-quoted desc (some use " inside '...')
    console.warn('  ⚠ not found:', screenshotDesc.slice(0, 60));
    return;
  }
  const insertAt = idx + descStr.length;
  const insert = `, screenshotUrl: '${url}', screenshotAlt: '${alt}'`;
  src = src.slice(0, insertAt) + insert + src.slice(insertAt);
  console.log('  ✓', url);
}

// Insert screenshotUrl into a step that has no screenshotDesc at all (matched by title)
function patchNoDesc(stepTitle, url, alt) {
  if (src.includes(`'${url}'`)) {
    console.log('  already done:', url);
    return;
  }
  const titleStr = `title: '${stepTitle}', content: '`;
  const idx = src.indexOf(titleStr);
  if (idx === -1) {
    console.warn('  ⚠ title not found:', stepTitle.slice(0, 50));
    return;
  }
  // Find closing ' of the content value — walk forward from after 'content: ''
  const contentStart = idx + titleStr.length;
  let i = contentStart;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; } // skip escaped char
    if (src[i] === "'") break; // found end of content string
    i++;
  }
  // i now points to the closing ' of content
  const insert = `, screenshotUrl: '${url}', screenshotAlt: '${alt}'`;
  src = src.slice(0, i + 1) + insert + src.slice(i + 1);
  console.log('  ✓', url);
}

// ── turn-pc-on-and-off ────────────────────────────────────────────────────────
patch('Close-up of a laptop keyboard with the power button highlighted in the top-right corner, showing the universal power symbol (circle with line).',
  '/screenshots/windows/turn-pc-on-and-off-step-1.png',
  'Laptop keyboard with power button highlighted in the top-right corner');
patch('Windows boot screen showing the Windows 11 logo with a loading spinner on a dark blue background.',
  '/screenshots/windows/turn-pc-on-and-off-step-2.png',
  'Windows 11 boot screen with logo and loading spinner');
patch('Windows 11 lock screen showing user avatar, PIN entry field with number pad, and "Sign-in options" link below.',
  '/screenshots/windows/turn-pc-on-and-off-step-3.png',
  'Windows 11 lock screen with user avatar and PIN number pad');
patch('Windows Start menu open with Power options visible — Sleep, Shut Down, and Restart — cursor hovering on Shut Down.',
  '/screenshots/windows/turn-pc-on-and-off-step-4.png',
  'Windows Start menu showing Power options: Sleep, Shut Down, Restart');
patch('Windows Start menu Power options with cursor hovering on Sleep option.',
  '/screenshots/windows/turn-pc-on-and-off-step-5.png',
  'Windows Start menu Power options with Sleep highlighted');

// ── connect-wifi-windows step 5 ───────────────────────────────────────────────
patch('Windows taskbar showing a solid Wi-Fi icon with full signal bars, and a notification bubble saying "Connected, secured" next to the network name.',
  '/screenshots/windows/connect-wifi-windows-step-5.png',
  'Windows taskbar showing connected Wi-Fi icon with full signal bars');

// ── open-close-programs-windows ───────────────────────────────────────────────
patchNoDesc('Open from the Start menu',
  '/screenshots/windows/open-close-programs-windows-step-1.png',
  'Windows 11 Start menu open showing pinned apps grid');
patchNoDesc('Open from the desktop',
  '/screenshots/windows/open-close-programs-windows-step-2.png',
  'Windows 11 desktop with app shortcut icon highlighted for double-click');
patchNoDesc('Open from the taskbar',
  '/screenshots/windows/open-close-programs-windows-step-3.png',
  'Windows 11 taskbar showing pinned app icons with active app highlighted');
patchNoDesc('Close a program',
  '/screenshots/windows/open-close-programs-windows-step-4.png',
  'Notepad window with the red X close button highlighted in top-right corner');
patchNoDesc('Force close a frozen program',
  '/screenshots/windows/open-close-programs-windows-step-5.png',
  'Windows Task Manager showing a frozen app selected with End Task button');

// ── use-taskbar-windows ───────────────────────────────────────────────────────
patchNoDesc('Understand the taskbar layout',
  '/screenshots/windows/use-taskbar-windows-step-1.png',
  'Windows 11 taskbar with Start, Search, pinned apps, and system tray labelled');
patchNoDesc('Pin apps to the taskbar',
  '/screenshots/windows/use-taskbar-windows-step-2.png',
  'Right-click context menu on an app showing Pin to taskbar option highlighted');
patchNoDesc('Switch between open windows',
  '/screenshots/windows/use-taskbar-windows-step-3.png',
  'Windows 11 taskbar showing active app with window preview tooltip');
patchNoDesc('Use the system tray',
  '/screenshots/windows/use-taskbar-windows-step-4.png',
  'Windows 11 Quick Settings flyout showing Wi-Fi, Bluetooth, and Brightness toggles');
patchNoDesc('Access Task View',
  '/screenshots/windows/use-taskbar-windows-step-5.png',
  'Windows 11 Task View showing all open windows on the current desktop');

// ── take-screenshot-windows ───────────────────────────────────────────────────
patchNoDesc('Full screen screenshot',
  '/screenshots/windows/take-screenshot-windows-step-1.png',
  'Keyboard showing the PrtScn key highlighted for full screen capture');
patchNoDesc('Screenshot to file',
  '/screenshots/windows/take-screenshot-windows-step-2.png',
  'File Explorer showing the Pictures > Screenshots folder with saved PNG files');
patchNoDesc('Use Snipping Tool',
  '/screenshots/windows/take-screenshot-windows-step-3.png',
  'Windows screen with Snipping Tool selection rectangle and mode toolbar');
patchNoDesc('Capture a single window',
  '/screenshots/windows/take-screenshot-windows-step-4.png',
  'Keyboard showing Alt + PrtScn shortcut for capturing a single window');
patchNoDesc('Annotate and share',
  '/screenshots/windows/take-screenshot-windows-step-5.png',
  'Snipping Tool editor showing a captured screenshot with annotation tools');

// ── copy-paste-windows ────────────────────────────────────────────────────────
patchNoDesc('Select text or files',
  '/screenshots/windows/copy-paste-windows-step-1.png',
  'Notepad with a line of text highlighted in blue showing text selection');
patchNoDesc('Copy the selection',
  '/screenshots/windows/copy-paste-windows-step-2.png',
  'Right-click context menu showing Copy option highlighted in blue');
patchNoDesc('Paste the copied item',
  '/screenshots/windows/copy-paste-windows-step-3.png',
  'Right-click context menu showing Paste option highlighted');
patchNoDesc('Cut instead of copy',
  '/screenshots/windows/copy-paste-windows-step-4.png',
  'Illustration showing Cut moving a file from source to destination location');
patchNoDesc('Use clipboard history',
  '/screenshots/windows/copy-paste-windows-step-5.png',
  'Windows clipboard history panel (Win+V) listing recently copied items');

// ── save-file-windows ─────────────────────────────────────────────────────────
patchNoDesc('Save with Ctrl+S',
  '/screenshots/windows/save-file-windows-step-1.png',
  'Excel spreadsheet showing Saved to OneDrive indicator in the title bar');
patchNoDesc('Save As for a new copy',
  '/screenshots/windows/save-file-windows-step-2.png',
  'Windows Save As dialog with file name field and folder browser');
patchNoDesc('Choose a save location',
  '/screenshots/windows/save-file-windows-step-3.png',
  'Save As dialog showing Documents folder selected as save location');
patchNoDesc('Name your file clearly',
  '/screenshots/windows/save-file-windows-step-4.png',
  'Comparison showing bad versus good descriptive file names');
patchNoDesc('Auto-save features',
  '/screenshots/windows/save-file-windows-step-5.png',
  'Word document showing AutoSave is On indicator and OneDrive sync status');

// ── create-folder-windows ─────────────────────────────────────────────────────
patchNoDesc('Create on the desktop',
  '/screenshots/windows/create-folder-windows-step-1.png',
  'Windows desktop right-click context menu showing New > Folder option');
patchNoDesc('Create in File Explorer',
  '/screenshots/windows/create-folder-windows-step-2.png',
  'File Explorer with the New button dropdown showing Folder option highlighted');
patchNoDesc('Use a keyboard shortcut',
  '/screenshots/windows/create-folder-windows-step-3.png',
  'Keyboard shortcut Ctrl+Shift+N shown with a new folder being created');
patchNoDesc('Name it descriptively',
  '/screenshots/windows/create-folder-windows-step-4.png',
  'Examples of good vs bad folder names with green checks and red crosses');
patchNoDesc('Organize with subfolders',
  '/screenshots/windows/create-folder-windows-step-5.png',
  'File Explorer showing a nested folder hierarchy in the sidebar tree view');

// ── connect-wifi-mac ──────────────────────────────────────────────────────────
patch('Wi-Fi toggle in macOS Control Center — toggle is blue when on, grey when off.',
  '/screenshots/mac/connect-wifi-mac-step-2.png',
  'macOS Control Center showing Wi-Fi toggle turned on in blue');
patch('List of available Wi-Fi networks in the macOS Wi-Fi menu.',
  '/screenshots/mac/connect-wifi-mac-step-3.png',
  'macOS Wi-Fi network list showing available networks with signal strength');
patch('macOS Wi-Fi password dialog with password field and Join button.',
  '/screenshots/mac/connect-wifi-mac-step-4.png',
  'macOS Join Wi-Fi network dialog with password field and Join button');
patch('macOS menu bar Wi-Fi icon showing full signal bars.',
  '/screenshots/mac/connect-wifi-mac-step-5.png',
  'macOS menu bar showing Wi-Fi connected icon with full signal bars');

// ── open-close-apps-mac ───────────────────────────────────────────────────────
patch('macOS Launchpad showing all installed apps in a grid layout.',
  '/screenshots/mac/open-close-apps-mac-step-2.png',
  'macOS Launchpad showing all installed apps arranged in a full-screen grid');
patch('macOS window title bar showing red (close), yellow (minimize), and green (full screen) buttons.',
  '/screenshots/mac/open-close-apps-mac-step-4.png',
  'macOS window with red, yellow, and green traffic light buttons in the top-left');
patch('Right-click context menu on a Dock app icon showing Quit option.',
  '/screenshots/mac/open-close-apps-mac-step-5.png',
  'macOS Dock right-click context menu showing the Quit option for an app');

// ── take-screenshot-mac ───────────────────────────────────────────────────────
patch('Mac keyboard showing the Cmd, Shift, and 3 keys highlighted.',
  '/screenshots/mac/take-screenshot-mac-step-1.png',
  'Mac keyboard showing Cmd+Shift+3 keys highlighted for full screen screenshot');
patch('macOS screen with crosshair cursor for selecting a screenshot area.',
  '/screenshots/mac/take-screenshot-mac-step-2.png',
  'macOS screen with crosshair selection cursor for Cmd+Shift+4 area screenshot');
patch('macOS camera cursor hovering over a window, ready to capture it.',
  '/screenshots/mac/take-screenshot-mac-step-3.png',
  'macOS camera cursor hovering over a window ready to capture it');
patch('Screenshot thumbnail appearing in the bottom-right corner of the screen after capture.',
  '/screenshots/mac/take-screenshot-mac-step-5.png',
  'Screenshot thumbnail appearing in the bottom-right corner after capture');

// ── create-folder-mac ─────────────────────────────────────────────────────────
patch('macOS desktop right-click context menu showing "New Folder" option.',
  '/screenshots/mac/create-folder-mac-step-1.png',
  'macOS desktop right-click context menu with New Folder option highlighted');
patch('A folder icon with its name highlighted and editable in Finder.',
  '/screenshots/mac/create-folder-mac-step-3.png',
  'Finder showing a folder with its name in editable mode, highlighted in blue');
patch('Finder File menu with "New Smart Folder" option highlighted.',
  '/screenshots/mac/create-folder-mac-step-4.png',
  'macOS Finder New Smart Folder dialog with search criteria builder');

// ── adjust-brightness-volume-mac ──────────────────────────────────────────────
patch('Mac keyboard with F1 and F2 brightness keys highlighted in the top row.',
  '/screenshots/mac/adjust-brightness-volume-mac-step-1.png',
  'Mac keyboard with F1 (dim) and F2 (brighten) brightness keys highlighted');
patch('Mac keyboard with F10, F11, and F12 volume keys highlighted in the top row.',
  '/screenshots/mac/adjust-brightness-volume-mac-step-2.png',
  'Mac keyboard with F10 (mute), F11 (volume down), F12 (volume up) highlighted');
patch('macOS brightness slider showing fine-grained adjustment steps.',
  '/screenshots/mac/adjust-brightness-volume-mac-step-3.png',
  'Illustration comparing normal versus fine Option+Shift brightness steps');

// ── use-spotlight-search-mac ──────────────────────────────────────────────────
patch('Spotlight search results showing a file name match with file preview.',
  '/screenshots/mac/use-spotlight-search-mac-step-2.png',
  'Spotlight search showing file results with a Quick Look preview panel');
patch('Spotlight search showing "saf" typed with Safari as the top result.',
  '/screenshots/mac/use-spotlight-search-mac-step-3.png',
  'Spotlight search with "saf" typed showing Safari as the top app result');
patch('Spotlight showing a math calculation with the result displayed immediately.',
  '/screenshots/mac/use-spotlight-search-mac-step-4.png',
  'Spotlight search showing a math calculation with the result shown instantly');
patch('Spotlight showing web search suggestions and Wikipedia results for a search term.',
  '/screenshots/mac/use-spotlight-search-mac-step-5.png',
  'Spotlight search showing web suggestions and a Wikipedia article preview');

// ── use-safari-mac ────────────────────────────────────────────────────────────
patch('Safari address bar with a URL typed and search suggestions appearing below.',
  '/screenshots/mac/use-safari-mac-step-2.png',
  'Safari address bar showing a URL being typed with autocomplete suggestions');
patch('Safari tab bar showing multiple open tabs with close buttons.',
  '/screenshots/mac/use-safari-mac-step-3.png',
  'Safari tab bar showing multiple open tabs with the active tab selected');
patch('Safari Add Bookmark dialog with name field and folder selector.',
  '/screenshots/mac/use-safari-mac-step-4.png',
  'Safari Add Bookmark dialog with title field and Favorites folder selector');
patch('Safari Reader Mode showing a clean, ad-free article view.',
  '/screenshots/mac/use-safari-mac-step-5.png',
  'Safari Reader Mode showing a clean article without ads or distractions');

// ═══════════════════════════════════════════════════════════════════════════════
// BATCH 2 — Windows
// ═══════════════════════════════════════════════════════════════════════════════

// ── restart-pc-windows ───────────────────────────────────────────────────────
patch('Windows Start menu open with Power options visible — Sleep, Shut Down, and Restart. Cursor hovering on "Restart" which is highlighted in blue.',
  '/screenshots/windows/restart-pc-windows-step-1.png',
  'Windows Start menu with Power options showing Restart highlighted');
patch('Ctrl+Alt+Delete screen showing options: Lock, Switch User, Sign Out, Task Manager. Power icon visible in bottom-right corner of screen.',
  '/screenshots/windows/restart-pc-windows-step-2.png',
  'Ctrl+Alt+Delete screen with Power icon in bottom-right corner');
patch('Close-up of a laptop power button with a finger pressing and holding it. A timer overlay shows "Hold 5-10 seconds".',
  '/screenshots/windows/restart-pc-windows-step-4.png',
  'Laptop power button with hold timer overlay for force restart');

// ── manage-storage-windows ───────────────────────────────────────────────────
patch('File Explorer "This PC" view showing C: drive with a red storage bar (92% full, 23 GB free of 256 GB) and D: drive with a blue bar (45% full).',
  '/screenshots/windows/manage-storage-windows-step-1.png',
  'File Explorer This PC view with C: drive nearly full and D: drive half full');
patch('Disk Cleanup wizard with all checkboxes checked: Temporary files, Recycle Bin, Thumbnails, Delivery Optimization. Shows "Total amount of disk space you gain: 4.1 GB".',
  '/screenshots/windows/manage-storage-windows-step-2.png',
  'Disk Cleanup wizard showing 4.1 GB space to be freed');
patch('Downloads folder sorted by size descending, showing large video files at top: "vacation_2024.mp4" (2.3 GB), "screen_recording.mp4" (1.8 GB), "software_installer.exe" (950 MB).',
  '/screenshots/windows/manage-storage-windows-step-3.png',
  'Downloads folder sorted by size showing large files');
patch('Windows Settings Apps list sorted by size showing: "Game_Title" (45 GB), "Video Editor" (2.1 GB), "Old Software" (1.5 GB) with blue Uninstall buttons.',
  '/screenshots/windows/manage-storage-windows-step-4.png',
  'Windows Settings Installed Apps sorted by size with Uninstall buttons');
patch('Windows Storage Settings page showing Storage Sense toggle ON, with options for automatic cleanup frequency and temporary file deletion.',
  '/screenshots/windows/manage-storage-windows-step-5.png',
  'Windows Storage Sense settings toggled on');

// ── use-windows-security-antivirus ───────────────────────────────────────────
patch('Windows Start menu search showing "Windows Security" with the shield icon app result highlighted at the top.',
  '/screenshots/windows/use-windows-security-antivirus-step-1.png',
  'Windows Start menu search for Windows Security app');
patch('Windows Security app showing Virus & Threat Protection page with green checkmarks next to "Real-time protection: On" and a blue "Quick Scan" button prominently displayed.',
  '/screenshots/windows/use-windows-security-antivirus-step-2.png',
  'Windows Security Virus & Threat Protection with Quick Scan button');
patch('Windows Security dashboard showing 7 protection areas with icons: Virus protection (green',
  '/screenshots/windows/use-windows-security-antivirus-step-3.png',
  'Windows Security dashboard with all protection areas showing green checks');
patch('Fake virus alert pop-up with red warning design saying "YOUR COMPUTER IS INFECTED!" with a phone number and "Call Now" button. A large red "FAKE" stamp is overlaid on the entire pop-up, and an X close button is highlighted.',
  '/screenshots/windows/use-windows-security-antivirus-step-4.png',
  'Fake virus alert popup with FAKE stamp overlay');
patch('Virus & Threat Protection settings page showing three toggles all in ON position: "Real-time protection", "Cloud-delivered protection", and "Automatic sample submission".',
  '/screenshots/windows/use-windows-security-antivirus-step-5.png',
  'Windows Security protection toggles all turned on');
patch('Protection History page showing a list of recent threats with severity badges (green=Allowed, yellow=Quarantined, red=Blocked) and timestamps.',
  '/screenshots/windows/use-windows-security-antivirus-step-6.png',
  'Windows Security Protection History with threat severity badges');

// ── setup-email-windows-mail ─────────────────────────────────────────────────
patchNoDesc('Open the Mail app',
  '/screenshots/windows/setup-email-windows-mail-step-1.png',
  'Windows Start menu search showing Mail app result');
patchNoDesc('Add an account',
  '/screenshots/windows/setup-email-windows-mail-step-2.png',
  'Windows Mail Add Account dialog showing email provider options');
patchNoDesc('Sign in',
  '/screenshots/windows/setup-email-windows-mail-step-3.png',
  'Windows Mail sign-in form with email and password fields');
patchNoDesc('Send your first email',
  '/screenshots/windows/setup-email-windows-mail-step-5.png',
  'Windows Mail compose window with New Mail button and email form');

// ── setup-windows-backup ─────────────────────────────────────────────────────
patchNoDesc('Open Backup settings',
  '/screenshots/windows/setup-windows-backup-step-1.png',
  'Windows Settings Backup page with OneDrive sync and File History');

// ── print-document-windows ───────────────────────────────────────────────────
patchNoDesc('Open the print dialog',
  '/screenshots/windows/print-document-windows-step-1.png',
  'Windows print dialog with printer selection, copies, and preview');

// ── use-virtual-desktops-windows ─────────────────────────────────────────────
patchNoDesc('Open Task View',
  '/screenshots/windows/use-virtual-desktops-windows-step-1.png',
  'Windows Task View showing desktops and open windows');

// ── manage-startup-programs-windows ──────────────────────────────────────────
patchNoDesc('Go to Startup tab',
  '/screenshots/windows/manage-startup-programs-windows-step-2.png',
  'Task Manager Startup Apps tab showing programs with impact ratings');

// ── troubleshoot-wifi-windows ────────────────────────────────────────────────
patchNoDesc('Run the network troubleshooter',
  '/screenshots/windows/troubleshoot-wifi-windows-step-1.png',
  'Windows Settings Troubleshooters page with Internet Connections highlighted');
patchNoDesc('Flush DNS cache',
  '/screenshots/windows/troubleshoot-wifi-windows-step-3.png',
  'Command Prompt showing ipconfig /flushdns with success message');

// ═══════════════════════════════════════════════════════════════════════════════
// BATCH 2 — Mac
// ═══════════════════════════════════════════════════════════════════════════════

// ── restart-mac — use screenshotDesc approach since title might not match exactly
// (Mac restart guide may have different step title patterns)

// ── manage-storage-mac ───────────────────────────────────────────────────────
patchNoDesc('Check your storage',
  '/screenshots/mac/manage-storage-mac-step-1.png',
  'macOS System Settings Storage page with color-coded usage bar');

// ── setup-email-mac ──────────────────────────────────────────────────────────
patchNoDesc('Open the Mail app',
  '/screenshots/mac/setup-email-mac-step-1.png',
  'macOS Mail app showing inbox with sidebar and message preview');

// ── manage-startup-programs-mac ──────────────────────────────────────────────
patchNoDesc('Open System Settings Login Items',
  '/screenshots/mac/manage-startup-programs-mac-step-1.png',
  'macOS System Settings Login Items showing startup apps with toggles');

// ═══════════════════════════════════════════════════════════════════════════════
// Browser screenshots
// ═══════════════════════════════════════════════════════════════════════════════

// ── set-up-gmail-account ─────────────────────────────────────────────────────
patchNoDesc('Go to Gmail',
  '/screenshots/browser/set-up-gmail-account-step-1.png',
  'Google Account creation form with name, username, and password fields');
patchNoDesc('Add recovery information',
  '/screenshots/browser/set-up-gmail-account-step-3.png',
  'Gmail inbox showing welcome emails with Compose button in sidebar');

// ── how-to-send-an-email ─────────────────────────────────────────────────────
patchNoDesc('Start a new email',
  '/screenshots/browser/how-to-send-an-email-step-2.png',
  'Gmail compose window with To, Subject, body, and Send button');

// ── attach-photo-to-email ────────────────────────────────────────────────────
patchNoDesc('Click the attachment button',
  '/screenshots/browser/attach-photo-to-email-step-2.png',
  'Gmail compose window with paperclip attachment icon highlighted');

// ── identify-phishing-emails ─────────────────────────────────────────────────
patchNoDesc('Check the sender address',
  '/screenshots/browser/identify-phishing-emails-step-1.png',
  'Phishing email example with red flags highlighted');

// ── create-strong-password ───────────────────────────────────────────────────
patchNoDesc('Use passphrases',
  '/screenshots/browser/create-strong-password-step-1.png',
  'Password creation form with strength meter showing strong password');

// ── setup-password-manager ───────────────────────────────────────────────────
patchNoDesc('Find your password manager',
  '/screenshots/browser/setup-password-manager-step-2.png',
  'Google Password Manager showing saved passwords for various sites');

// ── online-shopping-safety ───────────────────────────────────────────────────
patch('Browser address bar showing https:// with a closed padlock icon to the left of the URL for a shopping website.',
  '/screenshots/browser/online-shopping-safety-step-1.png',
  'Browser address bar showing HTTPS padlock icon for secure connection');
patch('Side-by-side comparison of a legitimate retailer page with contact details, returns policy, and trust badges vs. a fake site with vague details.',
  '/screenshots/browser/online-shopping-safety-step-3.png',
  'Side-by-side comparison of fake vs real shopping website');

// ── setup-two-factor-any-account ─────────────────────────────────────────────
patch('Google Account settings page with the "Security" tab highlighted in the left sidebar, showing "2-Step Verification: Off" with a blue "Turn On" button.',
  '/screenshots/browser/setup-two-factor-any-account-step-2.png',
  'Google Security settings showing 2-Step Verification with Turn On button');

// ── social-media-safety ──────────────────────────────────────────────────────
patchNoDesc('Review your privacy settings',
  '/screenshots/browser/social-media-safety-step-3.png',
  'Facebook privacy settings showing who can see posts, friend list, and search');

// ═══════════════════════════════════════════════════════════════════════════════
// iPhone screenshots
// ═══════════════════════════════════════════════════════════════════════════════

// iPhone and Android screenshots are linked to phone-specific guides
// that may have different titles — these will be wired up in a future patch
// when phone guide step titles are confirmed.

// ═══════════════════════════════════════════════════════════════════════════════
// Safety Guide screenshots
// ═══════════════════════════════════════════════════════════════════════════════

// ── stop-unwanted-calls ──────────────────────────────────────────────────────
patch('DoNotCall.gov registration page showing phone number entry field and "Register" button.',
  '/screenshots/browser/stop-unwanted-calls-step-1.png',
  'DoNotCall.gov registration page with phone number field and Register button');
patch('iPhone Phone settings showing "Silence Unknown Callers" toggle turned on, with explanation text.',
  '/screenshots/iphone/stop-unwanted-calls-step-2.png',
  'iPhone Phone settings with Silence Unknown Callers toggle turned on');
patch('Hiya app showing an incoming call flagged as "Likely Spam" with options to Block, Report, and Answer.',
  '/screenshots/iphone/stop-unwanted-calls-step-3.png',
  'Hiya caller ID app showing incoming call flagged as Likely Spam');
patch('iPhone call details screen showing caller info with a red "Block this Caller" option at the bottom.',
  '/screenshots/iphone/stop-unwanted-calls-step-4.png',
  'iPhone call details screen with Block this Caller option highlighted');
patch('Infographic showing phone scam red flags: IRS threats, gift card requests, prize claims, and urgency pressure.',
  '/screenshots/browser/stop-unwanted-calls-step-5.png',
  'Phone scam red flags infographic showing six common scam tactics');

// ── digital-vault-guide ──────────────────────────────────────────────────────
patch('AARP Digital Vault dashboard showing document categories: Financial, Legal, Medical, Insurance, and Personal, with file counts in each.',
  '/screenshots/browser/digital-vault-guide-step-1.png',
  'AARP Digital Vault dashboard showing document categories with file counts');
patch('Digital vault upload screen showing a checklist of essential documents with checkmarks next to completed items.',
  '/screenshots/browser/digital-vault-guide-step-2.png',
  'Digital vault upload checklist with completed and pending document items');
patch('Trusted contacts setup screen showing two family members added with access to Financial and Legal sections.',
  '/screenshots/browser/digital-vault-guide-step-3.png',
  'Trusted contacts setup with two family members and their access sections');
patch('Calendar reminder notification saying "Review Digital Vault" with a checklist of items to verify.',
  '/screenshots/iphone/digital-vault-guide-step-4.png',
  'Calendar reminder notification for Digital Vault review with checklist');

// ── banking-apps-security ────────────────────────────────────────────────────
patch("A bank\\'s official website showing \"Download our app\" buttons for the App Store and Google Play, with the app icon visible.",
  '/screenshots/browser/banking-apps-security-step-1.png',
  'Bank website showing official app download buttons for App Store and Google Play');
patch('A banking app setup screen showing "Enable Face ID for faster and secure log in" with a face recognition icon and a green Enable button.',
  '/screenshots/iphone/banking-apps-security-step-2.png',
  'Banking app Face ID setup screen with enable button');
patch('A mobile banking app showing a "New Payment" form with fields for Account Name, Sort Code, and Account Number.',
  '/screenshots/iphone/banking-apps-security-step-3.png',
  'Mobile banking New Payment form with sort code and account number fields');

// ── two-factor-auth ──────────────────────────────────────────────────────────
patch('Smartphone screen showing Google Authenticator app with two account entries, each displaying a 6-digit code with a countdown circle showing seconds remaining.',
  '/screenshots/iphone/two-factor-auth-step-3.png',
  'Google Authenticator app showing two accounts with 6-digit codes and countdown timers');
patch('Google Account Security page showing 2-Step Verification section with status showing "On" and a green checkmark.',
  '/screenshots/browser/two-factor-auth-step-4.png',
  'Google Account Security page with 2-Step Verification showing On status');

// ── digital-legacy ───────────────────────────────────────────────────────────
patch("iPhone Settings showing the Apple ID screen with \"Password & Security\" option visible, and within that, the \"Legacy Contact\" option with a person icon.",
  '/screenshots/iphone/digital-legacy-step-3.png',
  'iPhone Apple ID Password and Security settings with Legacy Contact option');
patch('Google Account Data & Privacy settings page showing the "More options" section with the "Make a plan for your account" option highlighted.',
  '/screenshots/browser/digital-legacy-step-4.png',
  'Google Inactive Account Manager settings with trusted contacts and data sharing');

// ── home-network-security ────────────────────────────────────────────────────
patch('Router admin panel showing Guest Network toggle switched on, with separate SSID and password fields.',
  '/screenshots/browser/home-network-security-step-5.png',
  'Router admin panel with Guest Network enabled showing SSID and password fields');

// ═══════════════════════════════════════════════════════════════════════════════
// Health-tech & App Guide screenshots (April 2026)
// ═══════════════════════════════════════════════════════════════════════════════

// Insert screenshotUrl after a content substring (for cases where title is duplicated)
function patchByContent(contentFragment, url, alt) {
  if (src.includes(`'${url}'`)) {
    console.log('  already done:', url);
    return;
  }
  const idx = src.indexOf(contentFragment);
  if (idx === -1) {
    console.warn('  ⚠ content fragment not found:', contentFragment.slice(0, 60));
    return;
  }
  // Find the closing ' of the content value starting from the fragment
  let i = idx;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; }
    if (src[i] === "'") break;
    i++;
  }
  const insert = `, screenshotUrl: '${url}', screenshotAlt: '${alt}'`;
  src = src.slice(0, i + 1) + insert + src.slice(i + 1);
  console.log('  ✓', url);
}

// ── how-to-use-mychart step 1 ────────────────────────────────────────────────
patch('App Store search showing MyChart app by Epic with blue heart logo and Install button.',
  '/screenshots/browser/how-to-use-mychart-step-1.png',
  'MyChart patient portal dashboard showing appointments, test results, and messages');

// ── medication-reminder-apps step 3 ──────────────────────────────────────────
patch('Medisafe app showing a daily medication schedule with checkmarks for taken doses and a reminder notification at the top.',
  '/screenshots/iphone/medication-reminder-apps-step-3.png',
  'Medisafe-style medication schedule with checkmarks for taken doses');

// ── medicare-gov-guide step 2 ────────────────────────────────────────────────
patch('Medicare.gov login page showing "Log in to your Medicare account" button and options for Login.gov and ID.me sign-in.',
  '/screenshots/browser/medicare-gov-guide-step-2.png',
  'Medicare.gov login page with Login.gov and ID.me sign-in options');

// ── credit-monitoring-setup step 2 ───────────────────────────────────────────
patch('Credit Karma dashboard showing credit score, recent activity alerts, and factors affecting the score.',
  '/screenshots/browser/credit-monitoring-setup-step-2.png',
  'Credit Karma dashboard showing credit score and activity alerts');

// ── microsoft-teams-basics step 2 ────────────────────────────────────────────
patch('Microsoft Teams meeting lobby showing camera preview, microphone toggle, and "Join now" button.',
  '/screenshots/browser/microsoft-teams-basics-step-2.png',
  'Microsoft Teams meeting lobby with camera preview and Join now button');

// ── google-calendar-guide step 2 ─────────────────────────────────────────────
patch('Google Calendar new event form showing title, date/time picker, location field, and Save button.',
  '/screenshots/browser/google-calendar-guide-step-2.png',
  'Google Calendar week view with new event form open');

// ── instacart-guide step 3 ───────────────────────────────────────────────────
patchNoDesc('Schedule your delivery',
  '/screenshots/iphone/instacart-guide-step-3.png',
  'Instacart shopping cart with items and delivery window selector');

// ── setup-new-iphone step 1 ──────────────────────────────────────────────────
// Title is duplicated with setup-new-android, so use patchByContent with unique content fragment
patchByContent('Press and hold the side button until you see',
  '/screenshots/iphone/setup-new-iphone-step-1.png',
  'iPhone setup wizard Hello screen with language selection');

// ── setup-new-android step 1 ─────────────────────────────────────────────────
patchByContent('Press and hold the power button until the screen lights up',
  '/screenshots/android/setup-new-android-step-1.png',
  'Android welcome screen with Start button and language picker');

// ── emergency-sos-phone step 2 ───────────────────────────────────────────────
patch('Android Safety & Emergency settings showing Emergency SOS toggle turned on and Emergency Contacts list.',
  '/screenshots/android/emergency-sos-phone-step-2.png',
  'Android Emergency SOS settings with toggle and emergency contacts');

// ── write back ────────────────────────────────────────────────────────────────
fs.writeFileSync(FILE, src, 'utf8');
console.log('\n✅ guides.ts patched successfully');
