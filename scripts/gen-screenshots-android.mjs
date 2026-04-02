/**
 * Screenshot generator — Android guides
 * Run: /usr/local/bin/node scripts/gen-screenshots-android.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, ANDROID_BASE, ANDROID_STATUS_BAR, ANDROID_NAV_BAR,
  shot, doc, androidPage
} from './screenshot-templates.mjs';

const OUT = path.join(PUBLIC, 'android');

const SHOTS = [

  // ── connect-wifi-android ───────────────────────────────────────────────────
  {
    file: 'connect-wifi-android-step-1.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="font-size:28px;color:white;font-weight:400;margin-bottom:24px;">Network & internet</div>
        ${[['📶','Internet','HomeNetwork_5G',true],['✈️','Airplane mode','Off',false],['🔗','Hotspot & tethering','Off',false],['📱','SIM','T-Mobile',false],['📡','VPN','Off',false]].map(([icon,name,val,active])=>`
          <div style="display:flex;align-items:center;gap:16px;padding:16px;border-radius:16px;margin-bottom:4px;background:${active?'rgba(138,180,248,0.12)':'transparent'};">
            <span style="font-size:20px;color:${active?'#8ab4f8':'rgba(255,255,255,0.6)'};">${icon}</span>
            <div style="flex:1;">
              <div style="color:white;font-size:16px;">${name}</div>
              <div style="color:rgba(255,255,255,0.5);font-size:14px;">${val}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `, '#1a1a2e')
  },
  {
    file: 'connect-wifi-android-step-2.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
          <span style="color:white;font-size:20px;">←</span>
          <span style="font-size:22px;color:white;">Internet</span>
        </div>
        <!-- Connected network -->
        <div style="background:rgba(138,180,248,0.12);border-radius:16px;padding:16px;margin-bottom:16px;border:2px solid #8ab4f8;">
          <div style="display:flex;align-items:center;gap:12px;">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M0 4 Q10 -3 20 4" stroke="#8ab4f8" stroke-width="2"/><path d="M3 8 Q10 2 17 8" stroke="#8ab4f8" stroke-width="2"/><path d="M6 12 Q10 8 14 12" stroke="#8ab4f8" stroke-width="2"/><circle cx="10" cy="15" r="1.5" fill="#8ab4f8"/></svg>
            <div style="flex:1;"><div style="color:white;font-size:16px;">HomeNetwork_5G</div><div style="color:#8ab4f8;font-size:14px;">Connected</div></div>
            <span style="color:rgba(255,255,255,0.3);font-size:18px;">⚙</span>
          </div>
        </div>
        <!-- Available networks -->
        <div style="color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:12px;">Available networks</div>
        ${[['BT-Hub-2A3F',3,true],['VM-Broadband',2,true],['CoffeeShop-Free',2,false],['5G-Guest',1,true]].map(([name,sig,secure])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;margin-bottom:4px;">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M0 4 Q10 -3 20 4" stroke="${sig>=3?'white':'rgba(255,255,255,0.2)'}" stroke-width="1.5"/>
              <path d="M3 8 Q10 2 17 8" stroke="${sig>=2?'white':'rgba(255,255,255,0.2)'}" stroke-width="1.5"/>
              <path d="M6 12 Q10 8 14 12" stroke="white" stroke-width="1.5"/>
              <circle cx="10" cy="15" r="1.5" fill="white"/>
            </svg>
            <span style="color:white;font-size:16px;flex:1;">${name}</span>
            ${secure?`<svg width="14" height="16" viewBox="0 0 14 16" fill="none"><rect x="2" y="7" width="10" height="8" rx="1.5" stroke="rgba(255,255,255,0.5)" stroke-width="1.2"/><path d="M4.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="rgba(255,255,255,0.5)" stroke-width="1.2"/></svg>`:''}
          </div>
        `).join('')}
      </div>
    `, '#1a1a2e')
  },

  // ── google-pay-setup ───────────────────────────────────────────────────────
  {
    file: 'google-pay-setup-step-1.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="font-size:28px;color:white;font-weight:400;margin-bottom:24px;">Google Wallet</div>
        <!-- Card -->
        <div style="background:linear-gradient(135deg,#1a237e,#283593);border-radius:16px;padding:20px;margin-bottom:16px;position:relative;">
          <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-bottom:32px;">VISA</div>
          <div style="color:white;font-size:20px;letter-spacing:4px;margin-bottom:16px;">•••• •••• •••• 4532</div>
          <div style="display:flex;justify-content:space-between;">
            <div><div style="color:rgba(255,255,255,0.5);font-size:10px;">CARDHOLDER</div><div style="color:white;font-size:14px;">BAILEY WILBURN</div></div>
            <div><div style="color:rgba(255,255,255,0.5);font-size:10px;">EXPIRES</div><div style="color:white;font-size:14px;">09/28</div></div>
          </div>
        </div>
        <div style="padding:16px;background:rgba(138,180,248,0.12);border-radius:16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="font-size:24px;color:#8ab4f8;">+</span>
          <span style="color:#8ab4f8;font-size:16px;font-weight:500;">Add to Wallet</span>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:12px;">Recent activity</div>
        ${[['☕','Coffee Shop','Today','$5.40'],['🛒','Grocery Store','Yesterday','$42.18']].map(([icon,name,date,amount])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:0.5px solid rgba(255,255,255,0.1);">
            <div style="width:40px;height:40px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">${icon}</div>
            <div style="flex:1;"><div style="color:white;font-size:15px;">${name}</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">${date}</div></div>
            <span style="color:white;font-size:15px;">${amount}</span>
          </div>
        `).join('')}
      </div>
    `, '#1a1a2e')
  },

  // ── google-meet ────────────────────────────────────────────────────────────
  {
    file: 'google-meet-step-1.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <div style="width:36px;height:36px;background:#8ab4f8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:600;">B</div>
          <span style="font-size:28px;color:white;font-weight:400;">Meet</span>
        </div>
        <!-- New meeting button -->
        <div style="padding:16px;background:#8ab4f8;border-radius:16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="font-size:20px;">📹</span>
          <span style="color:#1a1a2e;font-size:16px;font-weight:500;">New meeting</span>
        </div>
        <!-- Join with code -->
        <div style="padding:16px;background:rgba(255,255,255,0.08);border-radius:16px;display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="font-size:20px;color:rgba(255,255,255,0.5);">⌨️</span>
          <span style="color:rgba(255,255,255,0.5);font-size:16px;">Join with a code</span>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:12px;">Upcoming meetings</div>
        <div style="background:rgba(255,255,255,0.05);border-radius:16px;padding:16px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:4px;height:40px;background:#8ab4f8;border-radius:2px;"></div>
            <div><div style="color:white;font-size:15px;">Doctor's Telehealth Appointment</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">Tomorrow, 2:00 PM</div></div>
          </div>
        </div>
      </div>
    `, '#1a1a2e')
  },

  // ── play-store-navigation ──────────────────────────────────────────────────
  {
    file: 'play-store-navigation-step-1.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="background:rgba(255,255,255,0.08);border-radius:24px;padding:12px 20px;display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="font-size:16px;">🔍</span>
          <span style="color:rgba(255,255,255,0.5);font-size:16px;">Search for apps & games</span>
          <div style="margin-left:auto;width:32px;height:32px;background:#8ab4f8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#1a1a2e;font-size:14px;font-weight:600;">B</div>
        </div>
        <!-- Featured -->
        <div style="background:linear-gradient(135deg,#1a73e8,#4285f4);border-radius:16px;padding:20px;margin-bottom:20px;">
          <div style="color:rgba(255,255,255,0.7);font-size:11px;text-transform:uppercase;margin-bottom:8px;">SUGGESTED FOR YOU</div>
          <div style="color:white;font-size:18px;font-weight:500;margin-bottom:4px;">Essential Apps</div>
          <div style="color:rgba(255,255,255,0.8);font-size:14px;">Top picks for everyday use</div>
        </div>
        <!-- App list -->
        ${[['📷','Google Photos','Google LLC','Free'],['📧','Gmail','Google LLC','Free'],['📹','Google Meet','Google LLC','Free']].map(([icon,name,dev,price])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:0.5px solid rgba(255,255,255,0.08);">
            <div style="width:48px;height:48px;background:rgba(255,255,255,0.1);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;">${icon}</div>
            <div style="flex:1;"><div style="color:white;font-size:15px;">${name}</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">${dev}</div></div>
            <div style="padding:6px 16px;background:rgba(138,180,248,0.2);border-radius:20px;color:#8ab4f8;font-size:13px;font-weight:500;">Install</div>
          </div>
        `).join('')}
        <!-- Bottom nav -->
        <div style="position:fixed;bottom:48px;left:0;right:0;display:flex;justify-content:space-around;padding:12px;background:#1a1a2e;">
          ${[['Games',false],['Apps',true],['Books',false],['Search',false]].map(([name,active])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:20px;height:20px;background:${active?'#8ab4f8':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:11px;color:${active?'#8ab4f8':'rgba(255,255,255,0.5)'};">${name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#1a1a2e')
  },

  // ── google-photos-android ──────────────────────────────────────────────────
  {
    file: 'google-photos-android-step-1.png', w: 412, h: 915,
    html: androidPage(`
      <div style="padding:16px 24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
          <span style="font-size:22px;">📷</span>
          <span style="font-size:22px;color:white;">Photos</span>
          <div style="margin-left:auto;width:32px;height:32px;background:#8ab4f8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#1a1a2e;font-size:14px;font-weight:600;">B</div>
        </div>
        <!-- Photo grid -->
        <div style="color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:8px;">Today</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-bottom:16px;">
          ${Array.from({length:9},(_,i)=>{
            const colors = ['#e91e63','#2196f3','#4caf50','#ff9800','#9c27b0','#00bcd4','#ff5722','#795548','#607d8b'];
            const emojis = ['🌅','🏖️','🐕','🎂','🌺','🏔️','🌊','🍕','🎸'];
            return `<div style="aspect-ratio:1;background:${colors[i]};border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:28px;">${emojis[i]}</div>`;
          }).join('')}
        </div>
        <!-- Bottom nav -->
        <div style="position:fixed;bottom:48px;left:0;right:0;display:flex;justify-content:space-around;padding:12px;background:#1a1a2e;">
          ${[['Photos',true],['Memories',false],['Library',false],['Sharing',false]].map(([name,active])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:20px;height:20px;background:${active?'#8ab4f8':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:11px;color:${active?'#8ab4f8':'rgba(255,255,255,0.5)'};">${name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#1a1a2e')
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🤖 Generating ${SHOTS.length} Android screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(OUT, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved to ${OUT}\n`);
})();
