/**
 * Screenshot generator — Mac guides (batch 2)
 * Run: /usr/local/bin/node scripts/gen-screenshots-mac-b2.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, MAC_BASE, MENU_BAR, TRAFFIC, DOCK, MAC_SETTINGS_SIDEBAR,
  shot, doc, macSettingsPage
} from './screenshot-templates.mjs';

const OUT = path.join(PUBLIC, 'mac');

const SHOTS = [

  // ── restart-mac ────────────────────────────────────────────────────────────
  {
    file: 'restart-mac-step-1.png', w: 400, h: 300,
    html: doc(`${MAC_BASE} body{width:400px;height:300px;background:#1c1c1e;}`, `
      ${MENU_BAR('Finder')}
      <!-- Apple menu dropdown -->
      <div style="position:absolute;top:28px;left:8px;background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:10px;width:220px;padding:4px 0;box-shadow:0 12px 40px rgba(0,0,0,0.5);">
        ${[['About This Mac',''],['','sep'],['System Settings...',''],['App Store...',''],['','sep'],['Recent Items','▸'],['','sep'],['Force Quit...','⌥⌘Esc'],['','sep'],['Sleep',''],['Restart...',''],['Shut Down...',''],['','sep'],['Lock Screen','⌃⌘Q'],['Log Out Bailey...','⇧⌘Q']].map(([name,extra])=>{
          if(extra==='sep') return '<div style="height:1px;background:rgba(255,255,255,0.1);margin:4px 0;"></div>';
          const isRestart = name==='Restart...';
          return `<div style="display:flex;align-items:center;padding:4px 12px;border-radius:4px;margin:0 4px;${isRestart?'background:#0a84ff;':''}">
            <span style="color:${isRestart?'white':'rgba(255,255,255,0.85)'};font-size:13px;flex:1;">${name}</span>
            ${extra&&extra!=='sep'?`<span style="color:rgba(255,255,255,0.4);font-size:12px;">${extra}</span>`:''}
          </div>`;
        }).join('')}
      </div>
    `)
  },

  // ── manage-storage-mac ─────────────────────────────────────────────────────
  {
    file: 'manage-storage-mac-step-1.png', w: 1024, h: 700,
    html: macSettingsPage('General', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:20px;">Storage</div>
      <!-- Storage bar -->
      <div style="background:#3a3a3c;border-radius:6px;height:24px;display:flex;overflow:hidden;margin-bottom:16px;">
        <div style="width:35%;background:#0a84ff;"></div>
        <div style="width:20%;background:#ff9500;"></div>
        <div style="width:15%;background:#af52de;"></div>
        <div style="width:10%;background:#ff3b30;"></div>
        <div style="width:8%;background:#30d158;"></div>
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:24px;">
        ${[['🔵','Apps','89 GB'],['🟠','Documents','51 GB'],['🟣','Photos','38 GB'],['🔴','System','25 GB'],['🟢','Other','20 GB'],['⚪','Available','33 GB']].map(([dot,name,size])=>`
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:10px;">${dot}</span>
            <span style="color:rgba(255,255,255,0.6);font-size:12px;">${name}: ${size}</span>
          </div>
        `).join('')}
      </div>
      <div style="color:white;font-size:16px;font-weight:500;margin-bottom:12px;">Recommendations</div>
      ${[['Store in iCloud','Save space by storing files in iCloud','Enable'],['Optimise Storage','Remove watched movies and TV shows','Enable'],['Empty Bin Automatically','Erase items that have been in the Bin for 30 days','Turn On...']].map(([name,desc,btn])=>`
        <div style="display:flex;align-items:center;gap:16px;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;margin-bottom:6px;">
          <div style="flex:1;"><div style="color:white;font-size:14px;">${name}</div><div style="color:rgba(255,255,255,0.5);font-size:12px;">${desc}</div></div>
          <div style="padding:4px 12px;background:rgba(255,255,255,0.1);border-radius:4px;color:white;font-size:12px;">${btn}</div>
        </div>
      `).join('')}
    `)
  },

  // ── setup-email-mac ────────────────────────────────────────────────────────
  {
    file: 'setup-email-mac-step-1.png', w: 1024, h: 700,
    html: doc(`${MAC_BASE} body{width:1024px;height:700px;}`, `
      ${MENU_BAR('Mail')}
      <div style="margin-top:28px;display:flex;height:calc(100% - 108px);">
        <!-- Mail sidebar -->
        <div style="width:220px;background:rgba(44,44,46,0.6);padding:12px;">
          ${TRAFFIC}
          <div style="margin-top:16px;">
            ${[['📥','All Inboxes','3'],['⭐','Flagged',''],['📝','Drafts','1'],['📤','Sent',''],['🗑','Bin','']].map(([icon,name,badge],i)=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:6px;background:${i===0?'rgba(0,122,255,0.3)':'transparent'};margin-bottom:2px;">
                <span style="font-size:14px;">${icon}</span>
                <span style="color:${i===0?'white':'rgba(255,255,255,0.7)'};font-size:13px;flex:1;">${name}</span>
                ${badge?`<span style="background:#0a84ff;color:white;font-size:10px;padding:1px 6px;border-radius:8px;">${badge}</span>`:''}
              </div>
            `).join('')}
          </div>
        </div>
        <!-- Message list -->
        <div style="width:300px;background:rgba(44,44,46,0.3);border-left:1px solid rgba(255,255,255,0.1);padding:8px;">
          ${[['Google','Welcome to Gmail','Set up your new account...',true],['TekSure','Your account is ready','Welcome Bailey!...',true],['Apple','Your Apple ID','Verify your email...',false]].map(([from,subject,preview,unread])=>`
            <div style="padding:10px;border-radius:8px;margin-bottom:4px;background:${unread?'rgba(0,122,255,0.15)':'transparent'};">
              <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
                <span style="color:white;font-size:13px;font-weight:${unread?'600':'400'};">${from}</span>
                <span style="color:rgba(255,255,255,0.4);font-size:11px;">Today</span>
              </div>
              <div style="color:white;font-size:12px;font-weight:${unread?'500':'400'};margin-bottom:2px;">${subject}</div>
              <div style="color:rgba(255,255,255,0.5);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${preview}</div>
            </div>
          `).join('')}
        </div>
        <!-- Message detail -->
        <div style="flex:1;background:#2c2c2e;padding:20px;">
          <div style="color:white;font-size:18px;font-weight:500;margin-bottom:12px;">Welcome to Gmail</div>
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-bottom:16px;">From: Google &lt;no-reply@google.com&gt;</div>
          <div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6;">Welcome to Gmail! Your new email is all set up and ready to use.</div>
        </div>
      </div>
      ${DOCK}
    `)
  },

  // ── manage-startup-programs-mac ────────────────────────────────────────────
  {
    file: 'manage-startup-programs-mac-step-1.png', w: 1024, h: 700,
    html: macSettingsPage('General', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:20px;">Login Items</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-bottom:16px;">These items open automatically when you log in</div>
      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden;">
        ${[['Spotify','Music streaming',true],['Dropbox','File sync',true],['Alfred','Productivity',false],['Discord','Communication',true],['Docker Desktop','Development',true]].map(([name,desc,on],i)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;${i<4?'border-bottom:0.5px solid rgba(255,255,255,0.1);':''}">
            <div style="width:32px;height:32px;background:#3a3a3c;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;">${['🎵','📦','🔍','💬','🐳'][i]}</div>
            <div style="flex:1;"><div style="color:white;font-size:14px;">${name}</div><div style="color:rgba(255,255,255,0.5);font-size:12px;">${desc}</div></div>
            <div style="width:40px;height:24px;background:${on?'#30d158':'#48484a'};border-radius:12px;position:relative;">
              <div style="position:absolute;${on?'right':'left'}:2px;top:2px;width:20px;height:20px;background:white;border-radius:50%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:16px;">
        <div style="padding:4px 12px;background:rgba(255,255,255,0.1);border-radius:4px;color:white;font-size:12px;">+</div>
        <div style="padding:4px 12px;background:rgba(255,255,255,0.1);border-radius:4px;color:white;font-size:12px;">−</div>
      </div>
    `)
  },

  // ── time-machine-backup-mac ────────────────────────────────────────────────
  {
    file: 'time-machine-backup-mac-step-1.png', w: 1024, h: 700,
    html: macSettingsPage('General', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:20px;">Time Machine</div>
      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:20px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
          <div style="font-size:48px;">⏰</div>
          <div><div style="color:white;font-size:18px;font-weight:500;">Time Machine</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">Back up automatically</div></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;">
          <span style="color:white;font-size:14px;">Back Up Automatically</span>
          <div style="width:44px;height:24px;background:#30d158;border-radius:12px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      </div>
      <div style="padding:14px 16px;background:rgba(10,132,255,0.15);border-radius:12px;display:flex;align-items:center;gap:12px;">
        <span style="font-size:24px;color:#0a84ff;">+</span>
        <span style="color:#0a84ff;font-size:15px;font-weight:500;">Add Backup Disk...</span>
      </div>
    `)
  },

  // ── take-screenshot-mac (extra steps) ──────────────────────────────────────
  {
    file: 'take-screenshot-mac-toolbar.png', w: 600, h: 200,
    html: doc(`${MAC_BASE} body{width:600px;height:200px;background:transparent;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:12px;padding:12px 20px;display:flex;align-items:center;gap:16px;box-shadow:0 8px 32px rgba(0,0,0,0.5);">
        <!-- Capture modes -->
        <div style="display:flex;gap:4px;padding-right:12px;border-right:1px solid rgba(255,255,255,0.2);">
          ${[['📷 Full Screen',true],['📐 Window',false],['✂️ Selection',false]].map(([label,active])=>`
            <div style="padding:8px 12px;border-radius:6px;background:${active?'rgba(255,255,255,0.15)':'transparent'};color:${active?'white':'rgba(255,255,255,0.5)'};font-size:12px;white-space:nowrap;">${label}</div>
          `).join('')}
        </div>
        <!-- Record modes -->
        <div style="display:flex;gap:4px;padding-right:12px;border-right:1px solid rgba(255,255,255,0.2);">
          <div style="padding:8px 12px;border-radius:6px;color:rgba(255,255,255,0.5);font-size:12px;">🎥 Record</div>
        </div>
        <!-- Options and Capture -->
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="color:rgba(255,255,255,0.5);font-size:12px;">Options ▾</span>
          <div style="padding:6px 16px;background:rgba(255,255,255,0.15);border-radius:6px;color:white;font-size:13px;font-weight:500;">Capture</div>
        </div>
      </div>
    `)
  },

  // ── print-document-mac ─────────────────────────────────────────────────────
  {
    file: 'print-document-mac-step-1.png', w: 700, h: 550,
    html: doc(`${MAC_BASE} body{width:700px;height:550px;background:#2c2c2e;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:12px;width:560px;box-shadow:0 16px 48px rgba(0,0,0,0.4);">
        <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:0.5px solid rgba(255,255,255,0.1);">
          ${TRAFFIC}
          <span style="flex:1;text-align:center;color:white;font-size:13px;font-weight:600;">Print</span>
        </div>
        <div style="padding:20px;">
          <div style="display:flex;gap:20px;">
            <!-- Settings -->
            <div style="flex:1;">
              <div style="margin-bottom:12px;">
                <div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px;">Printer</div>
                <div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:white;font-size:13px;display:flex;align-items:center;">🖨️ HP LaserJet<span style="margin-left:auto;color:rgba(255,255,255,0.3);">⌃</span></div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
                <div><div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px;">Copies</div><div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:white;font-size:13px;">1</div></div>
                <div><div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px;">Pages</div><div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:white;font-size:13px;">All</div></div>
              </div>
              <div style="margin-bottom:12px;">
                <div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px;">Paper Size</div>
                <div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:white;font-size:13px;">A4</div>
              </div>
              <div style="display:flex;gap:8px;margin-top:16px;">
                <div style="padding:6px 16px;background:rgba(255,255,255,0.1);border-radius:6px;color:white;font-size:13px;">Cancel</div>
                <div style="padding:6px 16px;background:#0a84ff;border-radius:6px;color:white;font-size:13px;font-weight:500;margin-left:auto;">Print</div>
              </div>
            </div>
            <!-- Preview -->
            <div style="width:180px;">
              <div style="background:white;border-radius:4px;height:240px;padding:12px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
                <div style="height:6px;background:#ddd;border-radius:2px;width:70%;margin-bottom:8px;"></div>
                <div style="height:4px;background:#eee;border-radius:2px;width:100%;margin-bottom:4px;"></div>
                <div style="height:4px;background:#eee;border-radius:2px;width:90%;margin-bottom:4px;"></div>
                <div style="height:4px;background:#eee;border-radius:2px;width:85%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  },

  // ── connect-wifi-mac extra steps ───────────────────────────────────────────
  {
    file: 'connect-wifi-mac-password.png', w: 400, h: 280,
    html: doc(`${MAC_BASE} body{width:400px;height:280px;background:#1c1c1e;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:14px;width:340px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div style="text-align:center;margin-bottom:16px;">
          <div style="font-size:15px;color:white;font-weight:600;">Enter password for "BT-Hub-2A3F"</div>
        </div>
        <div style="margin-bottom:16px;">
          <div style="color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:4px;">Password</div>
          <div style="background:rgba(255,255,255,0.1);border-radius:6px;padding:10px 12px;color:white;font-size:14px;">••••••••••</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <div style="width:16px;height:16px;border:1.5px solid rgba(255,255,255,0.4);border-radius:3px;"></div>
          <span style="color:rgba(255,255,255,0.7);font-size:13px;">Show password</span>
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <div style="padding:6px 16px;background:rgba(255,255,255,0.1);border-radius:6px;color:white;font-size:13px;">Cancel</div>
          <div style="padding:6px 16px;background:#0a84ff;border-radius:6px;color:white;font-size:13px;font-weight:500;">Join</div>
        </div>
      </div>
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🍎 Generating ${SHOTS.length} Mac screenshots (batch 2)...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(OUT, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved to ${OUT}\n`);
})();
