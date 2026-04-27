/**
 * Screenshot generator — How-to guides (streaming, e-reader, video calling, etc.)
 * Run: /usr/local/bin/node scripts/gen-screenshots-howto.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, WIN_BASE, TASKBAR_HTML, WIN_TITLEBAR,
  IPHONE_BASE, IPHONE_STATUS_BAR, IPHONE_HOME_INDICATOR, IOS_NAV_HEADER,
  BROWSER_BASE, BROWSER_CHROME,
  shot, doc, browserPage, iphonePage, winSettingsPage
} from './screenshot-templates.mjs';

const BROWSER_OUT = path.join(PUBLIC, 'browser');
const IPHONE_OUT = path.join(PUBLIC, 'iphone');
const WIN_OUT = path.join(PUBLIC, 'windows');

const SHOTS = [

  // ── streaming-setup-advanced ───────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'streaming-setup-advanced-step-1.png', w: 390, h: 844,
    html: doc(`${IPHONE_BASE} body{background:#111;}`, `
      ${IPHONE_STATUS_BAR()}
      <div style="padding:16px;display:flex;flex-direction:column;align-items:center;padding-top:40px;">
        <div style="color:white;font-size:20px;font-weight:600;margin-bottom:24px;">Choose your streaming device</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;">
          ${[['Fire Stick','Amazon','$35','#ff9900'],['Roku','Roku','$30','#6c3c97'],['Apple TV','Apple','$129','#333'],['Chromecast','Google','$30','#4285f4']].map(([name,brand,price,color])=>`
            <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;text-align:center;">
              <div style="width:48px;height:48px;background:${color};border-radius:12px;margin:0 auto 8px;"></div>
              <div style="color:white;font-size:15px;font-weight:600;">${name}</div>
              <div style="color:rgba(255,255,255,0.5);font-size:12px;">${brand}</div>
              <div style="color:#4caf50;font-size:14px;font-weight:600;margin-top:4px;">${price}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ${IPHONE_HOME_INDICATOR}
    `)
  },

  // ── video-calling-mastery ──────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'video-calling-mastery-step-1.png', w: 1280, h: 600,
    html: doc(`${BROWSER_BASE} body{width:1280px;height:600px;background:#f8f9fa;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;}`, `
      <div style="display:flex;gap:24px;">
        ${[['FaceTime','Apple devices only','Free','#34c759','Best for Apple users'],['Zoom','Any device','Free (40 min limit)','#2d8cff','Most popular for groups'],['Google Meet','Any device + browser','Free','#00897b','Easiest to join'],['Microsoft Teams','Any device','Free','#6264a7','Best for work']].map(([name,devices,price,color,best])=>`
          <div style="width:240px;background:white;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);overflow:hidden;">
            <div style="height:8px;background:${color};"></div>
            <div style="padding:20px;">
              <div style="width:40px;height:40px;background:${color};border-radius:10px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:16px;">${name[0]}</div>
              <div style="font-size:18px;font-weight:700;color:#333;margin-bottom:4px;">${name}</div>
              <div style="font-size:13px;color:#666;margin-bottom:8px;">${devices}</div>
              <div style="font-size:14px;color:${color};font-weight:600;margin-bottom:12px;">${price}</div>
              <div style="font-size:12px;color:#888;padding:6px 10px;background:#f5f5f5;border-radius:6px;text-align:center;">${best}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `)
  },

  // ── text-messaging-mastery ─────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'text-messaging-mastery-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Messages')}
      <div style="padding:16px;">
        <!-- Conversation view -->
        <div style="display:flex;flex-direction:column;gap:8px;">
          <!-- Received message -->
          <div style="display:flex;gap:8px;align-items:flex-end;">
            <div style="max-width:260px;background:#3a3a3c;border-radius:18px 18px 18px 4px;padding:10px 14px;">
              <div style="color:white;font-size:16px;">Hey! Are we still on for dinner tonight?</div>
            </div>
            <div style="color:rgba(255,255,255,0.3);font-size:10px;">6:42 PM</div>
          </div>
          <!-- Sent message (blue = iMessage) -->
          <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
            <div style="color:rgba(255,255,255,0.3);font-size:10px;">6:43 PM</div>
            <div style="max-width:260px;background:#0a84ff;border-radius:18px 18px 4px 18px;padding:10px 14px;">
              <div style="color:white;font-size:16px;">Yes! Looking forward to it. What time?</div>
            </div>
          </div>
          <!-- Received -->
          <div style="display:flex;gap:8px;align-items:flex-end;">
            <div style="max-width:260px;background:#3a3a3c;border-radius:18px 18px 18px 4px;padding:10px 14px;">
              <div style="color:white;font-size:16px;">7pm at the Italian place downtown</div>
            </div>
          </div>
          <!-- Tapback reaction -->
          <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
            <div style="max-width:260px;background:#0a84ff;border-radius:18px 18px 4px 18px;padding:10px 14px;position:relative;">
              <div style="color:white;font-size:16px;">Sounds perfect! See you there</div>
              <div style="position:absolute;top:-8px;right:-4px;background:#3a3a3c;border-radius:10px;padding:2px 6px;font-size:12px;border:2px solid #000;">👍</div>
            </div>
          </div>
        </div>
        <!-- Input bar -->
        <div style="position:fixed;bottom:34px;left:0;right:0;padding:8px 16px;background:#000;display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:16px;">+</div>
          <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:20px;padding:8px 16px;color:rgba(255,255,255,0.4);font-size:15px;">iMessage</div>
          <div style="width:32px;height:32px;background:#0a84ff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;">↑</div>
        </div>
      </div>
    `, '#000')
  },

  // ── ereader-setup ──────────────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'ereader-setup-step-2.png', w: 390, h: 700,
    html: doc(`${IPHONE_BASE} body{height:700px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <!-- Kindle-style reading settings -->
      <div style="background:rgba(44,44,46,0.95);border-radius:16px;width:350px;padding:24px;box-shadow:0 12px 40px rgba(0,0,0,0.5);">
        <div style="color:white;font-size:17px;font-weight:600;text-align:center;margin-bottom:20px;">Reading Settings</div>
        <!-- Font size -->
        <div style="margin-bottom:20px;">
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-bottom:8px;">Text Size</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="color:white;font-size:12px;">A</span>
            <div style="flex:1;height:4px;background:#48484a;border-radius:2px;position:relative;">
              <div style="width:60%;height:4px;background:#0a84ff;border-radius:2px;"></div>
              <div style="position:absolute;top:-8px;left:60%;width:20px;height:20px;background:#0a84ff;border-radius:50%;transform:translateX(-50%);"></div>
            </div>
            <span style="color:white;font-size:20px;font-weight:600;">A</span>
          </div>
        </div>
        <!-- Brightness -->
        <div style="margin-bottom:20px;">
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-bottom:8px;">Brightness</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="color:rgba(255,255,255,0.4);font-size:14px;">dim</span>
            <div style="flex:1;height:4px;background:#48484a;border-radius:2px;position:relative;">
              <div style="width:75%;height:4px;background:#f9a825;border-radius:2px;"></div>
              <div style="position:absolute;top:-8px;left:75%;width:20px;height:20px;background:#f9a825;border-radius:50%;transform:translateX(-50%);"></div>
            </div>
            <span style="color:white;font-size:14px;">bright</span>
          </div>
        </div>
        <!-- Theme -->
        <div>
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-bottom:8px;">Background</div>
          <div style="display:flex;gap:8px;">
            ${[['#fff','#000','White'],['#f4ecd8','#5b4636','Sepia'],['#000','#ccc','Dark']].map(([bg,fg,label],i)=>`
              <div style="flex:1;padding:10px;background:${bg};border-radius:8px;text-align:center;${i===2?'border:2px solid #0a84ff;':'border:1px solid rgba(255,255,255,0.1);'}">
                <div style="color:${fg};font-size:14px;font-weight:500;">Aa</div>
                <div style="color:${fg};font-size:10px;margin-top:2px;opacity:0.7;">${label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // ── telehealth-guide ───────────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'telehealth-guide-step-1.png', w: 1280, h: 800,
    html: browserPage('https://mychart.com/appointments', 'MyChart - Appointments', `
      <div style="display:flex;font-family:system-ui,sans-serif;">
        <!-- Sidebar -->
        <div style="width:240px;background:#f0f4f8;padding:20px;">
          <div style="font-size:20px;font-weight:700;color:#1a5276;margin-bottom:20px;">MyChart</div>
          ${['Dashboard','Appointments','Messages','Test Results','Medications','Billing'].map((n,i)=>`
            <div style="padding:10px 12px;border-radius:8px;font-size:14px;color:${i===1?'#1a5276':'#666'};background:${i===1?'#daeaf6':'transparent'};margin-bottom:4px;font-weight:${i===1?'600':'400'};">${n}</div>
          `).join('')}
        </div>
        <!-- Main -->
        <div style="flex:1;padding:32px;background:white;">
          <div style="font-size:24px;font-weight:700;color:#333;margin-bottom:24px;">Upcoming Appointments</div>
          <div style="border:2px solid #1a5276;border-radius:12px;padding:20px;margin-bottom:16px;background:#f8fbff;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="width:48px;height:48px;background:#1a5276;border-radius:12px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;">📹</div>
              <div style="flex:1;">
                <div style="font-size:16px;font-weight:600;color:#333;">Video Visit with Dr. Johnson</div>
                <div style="font-size:14px;color:#666;">Internal Medicine</div>
                <div style="font-size:14px;color:#1a5276;font-weight:500;margin-top:4px;">Thursday, April 3, 2026 at 2:00 PM</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="padding:8px 20px;background:#1a5276;color:white;border-radius:8px;font-size:14px;font-weight:500;text-align:center;">Join Video Visit</div>
                <div style="padding:8px 20px;border:1px solid #ddd;border-radius:8px;font-size:13px;color:#666;text-align:center;">Reschedule</div>
              </div>
            </div>
          </div>
          <div style="background:#fff3e0;border-radius:8px;padding:12px 16px;display:flex;align-items:center;gap:8px;">
            <span style="font-size:16px;">Tip:</span>
            <span style="font-size:14px;color:#666;">Test your camera and microphone 15 minutes before your visit. Have your medication list ready.</span>
          </div>
        </div>
      </div>
    `)
  },

  // ── software-updates ───────────────────────────────────────────────────────
  {
    dir: WIN_OUT,
    file: 'software-updates-step-1.png', w: 1280, h: 720,
    html: winSettingsPage('Windows Update', 'Windows Update', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:24px;">Windows Update</div>
      <div style="background:#1a3a1a;border:1px solid #2d6b2d;border-radius:12px;padding:20px;margin-bottom:20px;display:flex;align-items:center;gap:16px;">
        <span style="font-size:32px;">✅</span>
        <div><div style="color:#6bdb6b;font-size:16px;font-weight:500;">You're up to date</div><div style="color:#4a8a4a;font-size:13px;">Last checked: Today, 10:42 AM</div></div>
      </div>
      <div style="padding:12px 20px;background:#0078d4;border-radius:6px;color:white;font-size:14px;font-weight:500;text-align:center;width:200px;margin-bottom:24px;">Check for updates</div>
      <div style="color:#888;font-size:14px;margin-bottom:12px;">Recent updates</div>
      ${[['KB5034441 — 2026-04 Cumulative Update','Installed Apr 1','Success'],['KB5034123 — Security Update','Installed Mar 28','Success'],['KB5033456 — .NET Framework Update','Installed Mar 25','Success']].map(([name,date,status])=>`
        <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #2a2a2a;">
          <span style="color:#6bdb6b;font-size:14px;">✓</span>
          <div style="flex:1;"><div style="color:#ccc;font-size:13px;">${name}</div><div style="color:#888;font-size:12px;">${date}</div></div>
          <span style="color:#6bdb6b;font-size:12px;">${status}</span>
        </div>
      `).join('')}
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\nGenerating ${SHOTS.length} how-to screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(s.dir, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\nDone — ${SHOTS.length} screenshots generated\n`);
})();
