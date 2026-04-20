/**
 * Screenshot generator — App guides (Zoom, WhatsApp, Google Maps, etc.)
 * Run: /usr/local/bin/node scripts/gen-screenshots-apps.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, IPHONE_BASE, IPHONE_STATUS_BAR, IPHONE_HOME_INDICATOR, IOS_NAV_HEADER,
  BROWSER_BASE, BROWSER_CHROME,
  shot, doc, browserPage, iphonePage
} from './screenshot-templates.mjs';

const BROWSER_OUT = path.join(PUBLIC, 'browser');
const IPHONE_OUT = path.join(PUBLIC, 'iphone');

const SHOTS = [

  // ── zoom-complete-guide ────────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'zoom-complete-guide-step-1.png', w: 1280, h: 800,
    html: browserPage('https://zoom.us/join', 'Join a Meeting - Zoom', `
      <div style="min-height:600px;background:#f8f9fa;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;">
        <div style="background:white;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);padding:48px;width:440px;text-align:center;">
          <div style="width:64px;height:64px;background:#2d8cff;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="18" height="16" rx="2" fill="white"/><path d="M22 14l6-4v12l-6-4z" fill="white"/></svg>
          </div>
          <h1 style="font-size:24px;color:#232333;margin-bottom:24px;">Join a Meeting</h1>
          <div style="margin-bottom:16px;">
            <input type="text" placeholder="Meeting ID or Personal Link Name" style="width:100%;padding:12px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:15px;text-align:center;" value="123 456 7890"/>
          </div>
          <div style="padding:12px;background:#2d8cff;color:white;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">Join</div>
          <div style="margin-top:16px;color:#0e72ed;font-size:14px;cursor:pointer;">Join from Your Browser</div>
        </div>
      </div>
    `)
  },
  {
    dir: BROWSER_OUT,
    file: 'zoom-complete-guide-step-3.png', w: 1280, h: 800,
    html: doc(`${BROWSER_BASE} body{width:1280px;height:800px;background:#232323;display:flex;flex-direction:column;}`, `
      <!-- Zoom meeting view -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;position:relative;">
        <!-- Video grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;width:80%;max-width:900px;">
          ${[['Bailey W.','#2d8cff'],['Mom','#10b981'],['Dad','#f59e0b'],['Sarah K.','#ef4444']].map(([name,color])=>`
            <div style="aspect-ratio:16/9;background:${color}20;border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative;">
              <div style="width:64px;height:64px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:600;">${name[0]}</div>
              <div style="position:absolute;bottom:8px;left:12px;background:rgba(0,0,0,0.6);color:white;padding:2px 8px;border-radius:4px;font-size:12px;">${name}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <!-- Bottom toolbar -->
      <div style="height:64px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;gap:16px;">
        ${[['Mute','#2d8cff','🎤'],['Stop Video','#2d8cff','📹'],['Participants','transparent','👥'],['Chat','transparent','💬'],['Share Screen','transparent','📺'],['Record','transparent','⏺'],['Leave','#e53935','']].map(([label,bg,icon])=>`
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
            <div style="width:40px;height:40px;background:${bg==='transparent'?'rgba(255,255,255,0.1)':bg};border-radius:12px;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;">${icon||'↗'}</div>
            <span style="color:rgba(255,255,255,0.7);font-size:10px;">${label}</span>
          </div>
        `).join('')}
      </div>
    `)
  },

  // ── how-to-use-whatsapp ────────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'how-to-use-whatsapp-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('WhatsApp')}
      <div style="padding:0 16px;">
        <div style="background:rgba(118,118,128,0.24);border-radius:10px;padding:8px 12px;margin-bottom:16px;display:flex;align-items:center;gap:8px;">
          <span style="color:rgba(255,255,255,0.4);font-size:14px;">Search</span>
        </div>
        ${[['Mom','Thanks for the recipe! I tried it tonight...','2m ago',1,true],['Family Group','Dad: See you all on Sunday!','1h ago',3,true],['Sarah','Let me know when you get there safely','3h ago',0,false],['Dr. Smith Office','Your appointment is confirmed for...','Yesterday',0,false]].map(([name,msg,time,badge,online])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:0.5px solid rgba(255,255,255,0.1);">
            <div style="position:relative;">
              <div style="width:48px;height:48px;background:#25d366;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:600;">${name[0]}</div>
              ${online?'<div style="position:absolute;bottom:0;right:0;width:12px;height:12px;background:#30d158;border-radius:50%;border:2px solid #000;"></div>':''}
            </div>
            <div style="flex:1;overflow:hidden;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="color:white;font-size:17px;font-weight:${badge?'600':'400'};">${name}</span>
                <span style="color:rgba(255,255,255,0.4);font-size:13px;">${time}</span>
              </div>
              <div style="color:rgba(255,255,255,0.5);font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${msg}</div>
            </div>
            ${badge?`<div style="min-width:20px;height:20px;background:#25d366;border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-weight:600;">${badge}</div>`:''}
          </div>
        `).join('')}
        <div style="position:fixed;bottom:34px;left:0;right:0;display:flex;justify-content:space-around;padding:8px;background:rgba(0,0,0,0.9);">
          ${[['Updates',false],['Calls',false],['Communities',false],['Chats',true],['Settings',false]].map(([n,a])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <div style="width:20px;height:20px;background:${a?'#25d366':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:10px;color:${a?'#25d366':'rgba(255,255,255,0.5)'};">${n}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#000')
  },

  // ── how-to-use-google-maps ─────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'how-to-use-google-maps-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      <div style="position:relative;height:calc(100% - 48px);">
        <!-- Map background -->
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#e8f5e9 0%,#c8e6c9 30%,#a5d6a7 60%,#81c784 100%);"></div>
        <!-- Roads -->
        <div style="position:absolute;top:200px;left:0;right:0;height:4px;background:white;opacity:0.8;"></div>
        <div style="position:absolute;top:0;bottom:0;left:195px;width:4px;background:white;opacity:0.8;"></div>
        <div style="position:absolute;top:350px;left:0;right:0;height:6px;background:#ffd54f;opacity:0.8;"></div>
        <!-- Pin -->
        <div style="position:absolute;top:180px;left:175px;">
          <div style="width:40px;height:40px;background:#ea4335;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
            <div style="width:16px;height:16px;background:white;border-radius:50%;transform:rotate(45deg);"></div>
          </div>
        </div>
        <!-- Search bar -->
        <div style="position:absolute;top:60px;left:16px;right:16px;background:white;border-radius:24px;padding:12px 20px;box-shadow:0 2px 12px rgba(0,0,0,0.15);display:flex;align-items:center;gap:12px;">
          <span style="font-size:16px;color:#5f6368;">Search here</span>
          <div style="margin-left:auto;width:32px;height:32px;background:#4285f4;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600;">B</div>
        </div>
        <!-- Bottom sheet -->
        <div style="position:absolute;bottom:0;left:0;right:0;background:white;border-radius:16px 16px 0 0;padding:20px;box-shadow:0 -2px 12px rgba(0,0,0,0.1);">
          <div style="width:40px;height:4px;background:#e0e0e0;border-radius:2px;margin:0 auto 16px;"></div>
          <div style="display:flex;gap:12px;overflow-x:auto;">
            ${[['Restaurants','🍽️'],['Gas','⛽'],['Groceries','🛒'],['Coffee','☕'],['Hotels','🏨']].map(([n,i])=>`
              <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="width:48px;height:48px;background:#f0f0f0;border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:20px;">${i}</div>
                <span style="font-size:11px;color:#5f6368;">${n}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `, '#e8f5e9')
  },

  // ── how-to-use-spotify ─────────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'how-to-use-spotify-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      <div style="padding:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
          <div style="font-size:28px;color:white;font-weight:700;">Good Morning</div>
          <div style="display:flex;gap:12px;">
            <div style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div>
            <div style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">⏱</div>
            <div style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">⚙</div>
          </div>
        </div>
        <!-- Quick picks -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px;">
          ${[['Liked Songs','#1db954'],['Daily Mix 1','#e91e63'],['Peaceful Piano','#2196f3'],['Country Hits','#ff9800']].map(([n,c])=>`
            <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border-radius:6px;overflow:hidden;">
              <div style="width:48px;height:48px;background:${c};flex-shrink:0;"></div>
              <span style="color:white;font-size:13px;font-weight:500;">${n}</span>
            </div>
          `).join('')}
        </div>
        <!-- Made for you -->
        <div style="color:white;font-size:20px;font-weight:700;margin-bottom:12px;">Made For You</div>
        <div style="display:flex;gap:12px;overflow-x:auto;">
          ${[['Discover Weekly','Based on your listening','#1db954'],['Release Radar','New music from artists you follow','#e91e63'],['Your Top Songs','Songs you loved this year','#ff9800']].map(([title,desc,color])=>`
            <div style="flex-shrink:0;width:140px;">
              <div style="width:140px;height:140px;background:linear-gradient(135deg,${color},${color}88);border-radius:8px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;font-size:32px;">🎵</div>
              <div style="color:white;font-size:13px;font-weight:500;">${title}</div>
              <div style="color:rgba(255,255,255,0.5);font-size:11px;">${desc}</div>
            </div>
          `).join('')}
        </div>
        <!-- Bottom nav -->
        <div style="position:fixed;bottom:34px;left:0;right:0;display:flex;justify-content:space-around;padding:8px;background:rgba(0,0,0,0.95);">
          ${[['Home',true],['Search',false],['Library',false]].map(([n,a])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <div style="width:20px;height:20px;background:${a?'white':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:10px;color:${a?'white':'rgba(255,255,255,0.5)'};">${n}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#121212')
  },

  // ── how-to-use-uber-lyft ───────────────────────────────────────────────────
  {
    dir: IPHONE_OUT,
    file: 'how-to-use-uber-lyft-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      <div style="position:relative;height:calc(100% - 48px);">
        <!-- Map -->
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#e8eaf6,#c5cae9,#9fa8da);"></div>
        <div style="position:absolute;top:180px;left:180px;width:16px;height:16px;background:#276ef1;border-radius:50%;box-shadow:0 0 0 8px rgba(39,110,241,0.2);"></div>
        <!-- Search/destination -->
        <div style="position:absolute;top:60px;left:16px;right:16px;background:white;border-radius:12px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.1);">
          <div style="font-size:18px;color:#333;font-weight:600;margin-bottom:12px;">Where to?</div>
          <div style="background:#f5f5f5;border-radius:8px;padding:12px 16px;color:#888;font-size:15px;">Search for a destination</div>
          <div style="display:flex;gap:8px;margin-top:12px;">
            ${[['Home','🏠'],['Work','🏢'],['Airport','✈️']].map(([n,i])=>`
              <div style="flex:1;background:#f0f0f0;border-radius:8px;padding:8px;text-align:center;">
                <span style="font-size:16px;">${i}</span>
                <div style="font-size:11px;color:#666;margin-top:2px;">${n}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <!-- Bottom card -->
        <div style="position:absolute;bottom:0;left:0;right:0;background:white;border-radius:16px 16px 0 0;padding:20px;">
          <div style="display:flex;gap:12px;">
            ${[['UberX','$12-15','4 min','🚗'],['Comfort','$18-22','3 min','🚙'],['UberXL','$22-28','6 min','🚐']].map(([name,price,eta,icon])=>`
              <div style="flex:1;border:1px solid #e0e0e0;border-radius:12px;padding:12px;text-align:center;">
                <span style="font-size:24px;">${icon}</span>
                <div style="font-size:13px;font-weight:600;color:#333;margin-top:4px;">${name}</div>
                <div style="font-size:12px;color:#666;">${price}</div>
                <div style="font-size:11px;color:#888;">${eta}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `, '#e8eaf6')
  },

  // ── gmail-tips-tricks ──────────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'gmail-tips-tricks-step-1.png', w: 1280, h: 800,
    html: browserPage('https://mail.google.com/', 'Inbox - Gmail', `
      <div style="display:flex;height:100%;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:220px;background:#f6f8fc;padding:8px;">
          <div style="padding:10px 20px;background:#c2e7ff;border-radius:16px;color:#001d35;font-size:14px;font-weight:500;text-align:center;margin-bottom:12px;">Compose</div>
          ${['Inbox (12)','Starred','Snoozed','Important','Sent','Drafts','All Mail','Spam','Trash'].map((n,i)=>`
            <div style="padding:6px 16px;border-radius:20px;font-size:13px;color:${i===0?'#001d35':'#444'};background:${i===0?'#d3e3fd':'transparent'};margin-bottom:2px;">${n}</div>
          `).join('')}
          <div style="margin-top:16px;padding:6px 16px;font-size:12px;color:#888;">Labels</div>
          ${['Work','Personal','Receipts','Travel'].map(n=>`
            <div style="padding:4px 16px;font-size:13px;color:#444;display:flex;align-items:center;gap:6px;">
              <div style="width:8px;height:8px;border-radius:50%;background:${n==='Work'?'#4285f4':n==='Personal'?'#34a853':n==='Receipts'?'#fbbc04':'#ea4335'};"></div>
              ${n}
            </div>
          `).join('')}
        </div>
        <div style="flex:1;background:white;border-left:1px solid #e0e0e0;">
          <div style="padding:8px 16px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;gap:12px;">
            <input type="checkbox" /><span style="color:#5f6368;font-size:13px;">All</span>
            <div style="margin-left:auto;display:flex;gap:8px;color:#5f6368;font-size:13px;">
              <span>Primary</span><span>Promotions</span><span>Social</span>
            </div>
          </div>
          ${Array.from({length:8},(_,i)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:8px 16px;border-bottom:1px solid #f0f0f0;background:${i<3?'#f2f6fc':'white'};">
              <input type="checkbox" /><span style="font-size:14px;">☆</span>
              <span style="color:#202124;font-size:14px;font-weight:${i<3?'700':'400'};width:140px;">Sender ${i+1}</span>
              <div style="flex:1;font-size:14px;color:#5f6368;">Email subject line ${i+1} — Preview of the email content...</div>
              <span style="color:#5f6368;font-size:12px;">Apr ${i+1}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },

  // ── microsoft-word-basics ──────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'microsoft-word-basics-step-1.png', w: 1280, h: 800,
    html: doc(`${BROWSER_BASE} body{width:1280px;height:800px;display:flex;flex-direction:column;background:#2b579a;}`, `
      <!-- Word ribbon -->
      <div style="background:#2b579a;padding:4px 12px;">
        <div style="display:flex;align-items:center;gap:16px;color:white;font-size:13px;margin-bottom:4px;">
          <span style="font-weight:700;">W</span>
          <span>File</span><span style="background:rgba(255,255,255,0.15);padding:2px 12px;border-radius:4px;">Home</span><span>Insert</span><span>Design</span><span>Layout</span><span>References</span><span>Review</span><span>View</span>
        </div>
      </div>
      <div style="background:#f3f3f3;padding:6px 12px;display:flex;align-items:center;gap:4px;border-bottom:1px solid #ddd;">
        ${['B','I','U','A↓','≡','≡','≡','≡'].map(t=>`
          <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#333;border-radius:4px;cursor:pointer;">${t}</div>
        `).join('')}
        <div style="width:1px;height:20px;background:#ccc;margin:0 4px;"></div>
        <select style="padding:4px 8px;border:1px solid #ccc;border-radius:4px;font-size:12px;"><option>Calibri</option></select>
        <select style="padding:4px 8px;border:1px solid #ccc;border-radius:4px;font-size:12px;width:48px;"><option>11</option></select>
      </div>
      <!-- Document area -->
      <div style="flex:1;background:#e0e0e0;display:flex;align-items:flex-start;justify-content:center;padding:24px;">
        <div style="width:680px;background:white;min-height:600px;box-shadow:0 2px 8px rgba(0,0,0,0.15);padding:72px 64px;">
          <div style="font-size:24px;color:#333;font-weight:700;margin-bottom:16px;">My First Document</div>
          <div style="font-size:14px;color:#444;line-height:1.8;">
            This is where you type your document. Just click anywhere and start typing.<br><br>
            Use the toolbar above to make text <strong>bold</strong>, <em>italic</em>, or change the font size.
          </div>
          <div style="height:2px;background:#2b579a;width:1px;display:inline-block;animation:blink 1s step-end infinite;"></div>
          <style>@keyframes blink{50%{opacity:0}}</style>
        </div>
      </div>
    `)
  },

  // ── google-docs-basics ─────────────────────────────────────────────────────
  {
    dir: BROWSER_OUT,
    file: 'google-docs-basics-step-1.png', w: 1280, h: 800,
    html: browserPage('https://docs.google.com/document/d/1/edit', 'Untitled document - Google Docs', `
      <div style="display:flex;flex-direction:column;height:100%;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <!-- Docs toolbar -->
        <div style="background:#f9fbfd;padding:4px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #e0e0e0;">
          ${['B','I','U','A'].map(t=>`
            <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#444;border-radius:4px;">${t}</div>
          `).join('')}
          <div style="width:1px;height:20px;background:#ddd;margin:0 4px;"></div>
          <select style="padding:2px 8px;border:1px solid #ddd;border-radius:4px;font-size:12px;"><option>Normal text</option></select>
          <select style="padding:2px 8px;border:1px solid #ddd;border-radius:4px;font-size:12px;"><option>Arial</option></select>
          <select style="padding:2px 8px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:40px;"><option>11</option></select>
        </div>
        <!-- Document -->
        <div style="flex:1;background:#f0f0f0;display:flex;justify-content:center;padding:20px;">
          <div style="width:680px;background:white;box-shadow:0 1px 4px rgba(0,0,0,0.1);padding:60px 56px;min-height:600px;">
            <div style="font-size:14px;color:#333;line-height:2;">
              Click here and start typing. Google Docs saves automatically as you write.
            </div>
          </div>
        </div>
      </div>
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n📱 Generating ${SHOTS.length} app-guide screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(s.dir, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n Done — ${SHOTS.length} screenshots generated\n`);
})();
