/**
 * Screenshot generator — iPhone guides
 * Run: /usr/local/bin/node scripts/gen-screenshots-iphone.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, IPHONE_BASE, IPHONE_STATUS_BAR, IPHONE_HOME_INDICATOR, IOS_NAV_HEADER,
  shot, doc, iphonePage
} from './screenshot-templates.mjs';

const OUT = path.join(PUBLIC, 'iphone');

const SHOTS = [

  // ── connect-wifi-iphone ────────────────────────────────────────────────────
  {
    file: 'connect-wifi-iphone-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Settings')}
      <div style="padding:0 16px;">
        ${[['✈️','Airplane Mode','',false,'toggle'],['📶','Wi-Fi','HomeNetwork_5G',true,'chevron'],['📱','Bluetooth','On',false,'chevron'],['📡','Cellular','',false,'chevron'],['🔗','Personal Hotspot','Off',false,'chevron']].map(([icon,name,val,active,type])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:${active?'rgba(0,122,255,0.1)':'rgba(44,44,46,0.6)'};border-radius:12px;margin-bottom:4px;${active?'border:2px solid #0a84ff;':''}">
            <div style="width:32px;height:32px;background:${active?'#0a84ff':'rgba(255,255,255,0.1)'};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;">${icon}</div>
            <span style="color:white;font-size:17px;flex:1;">${name}</span>
            ${val?`<span style="color:rgba(255,255,255,0.5);font-size:15px;">${val}</span>`:''}
            ${type==='toggle'?`<div style="width:44px;height:28px;background:#48484a;border-radius:14px;position:relative;"><div style="position:absolute;left:3px;top:3px;width:22px;height:22px;background:white;border-radius:50%;"></div></div>`:''}
            ${type==='chevron'?`<span style="color:rgba(255,255,255,0.3);font-size:16px;">›</span>`:''}
          </div>
        `).join('')}
      </div>
    `)
  },
  {
    file: 'connect-wifi-iphone-step-2.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Wi-Fi', 'Settings')}
      <div style="padding:0 16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:rgba(44,44,46,0.6);border-radius:12px;margin-bottom:16px;">
          <span style="color:white;font-size:17px;">Wi-Fi</span>
          <div style="width:44px;height:28px;background:#30d158;border-radius:14px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:22px;height:22px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:0.5px;padding:8px 16px;">My Networks</div>
        <div style="background:rgba(44,44,46,0.6);border-radius:12px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;">
            <span style="color:#30d158;font-size:16px;">✓</span>
            <span style="color:white;font-size:17px;flex:1;">HomeNetwork_5G</span>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M0 4 Q8 -2 16 4" stroke="white" stroke-width="1.5"/><path d="M3 7 Q8 2.5 13 7" stroke="white" stroke-width="1.5"/><path d="M5.5 9.5 Q8 7 10.5 9.5" stroke="white" stroke-width="1.5"/><circle cx="8" cy="11.5" r="1" fill="white"/></svg>
            <span style="color:rgba(255,255,255,0.3);font-size:16px;">›</span>
          </div>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:0.5px;padding:8px 16px;">Other Networks</div>
        <div style="background:rgba(44,44,46,0.6);border-radius:12px;">
          ${[['BT-Hub-2A3F',3],['VM-Broadband-4G',2],['Neighbors_WiFi',2],['CoffeeShop-Free',1]].map(([name,sig],i)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;${i<3?'border-bottom:0.5px solid rgba(255,255,255,0.1);':''}">
              <span style="color:white;font-size:17px;flex:1;">${name}</span>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0 4 Q8 -2 16 4" stroke="${sig>=4?'white':'rgba(255,255,255,0.2)'}" stroke-width="1.5"/>
                <path d="M3 7 Q8 2.5 13 7" stroke="${sig>=3?'white':'rgba(255,255,255,0.2)'}" stroke-width="1.5"/>
                <path d="M5.5 9.5 Q8 7 10.5 9.5" stroke="${sig>=2?'white':'rgba(255,255,255,0.2)'}" stroke-width="1.5"/>
                <circle cx="8" cy="11.5" r="1" fill="white"/>
              </svg>
              ${name.includes('Free')?'':`<svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1.5" y="5" width="7" height="6" rx="1" stroke="rgba(255,255,255,0.5)" stroke-width="1"/><path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="rgba(255,255,255,0.5)" stroke-width="1"/></svg>`}
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },
  {
    file: 'connect-wifi-iphone-step-3.png', w: 390, h: 500,
    html: doc(`${IPHONE_BASE} body{height:500px;background:#000;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:14px;width:340px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div style="text-align:center;margin-bottom:20px;">
          <div style="font-size:17px;color:white;font-weight:600;margin-bottom:4px;">Enter Password</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.5);">for "BT-Hub-2A3F"</div>
        </div>
        <div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:12px 16px;margin-bottom:20px;">
          <div style="color:white;font-size:16px;letter-spacing:2px;">••••••••••</div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;">
          <div style="padding:10px 32px;background:rgba(255,255,255,0.1);border-radius:8px;color:white;font-size:15px;">Cancel</div>
          <div style="padding:10px 32px;background:#0a84ff;border-radius:8px;color:white;font-size:15px;font-weight:600;">Join</div>
        </div>
      </div>
    `)
  },

  // ── facetime-call ──────────────────────────────────────────────────────────
  {
    file: 'facetime-call-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('FaceTime')}
      <div style="padding:0 16px;">
        <!-- Create Link button -->
        <div style="padding:14px;background:rgba(48,209,88,0.15);border-radius:12px;display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="width:40px;height:40px;background:#30d158;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">🔗</div>
          <span style="color:#30d158;font-size:17px;font-weight:500;">Create Link</span>
        </div>
        <!-- New FaceTime button -->
        <div style="padding:14px;background:rgba(10,132,255,0.15);border-radius:12px;display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <div style="width:40px;height:40px;background:#0a84ff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📹</div>
          <span style="color:#0a84ff;font-size:17px;font-weight:500;">New FaceTime</span>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;padding:8px 0;">Recent</div>
        ${[['Mom','Yesterday, 3:42 PM','📹',true],['Dad','Apr 1, 10:15 AM','📞',false],['Sarah','Mar 30, 6:22 PM','📹',true]].map(([name,time,type,video])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:0.5px solid rgba(255,255,255,0.1);">
            <div style="width:44px;height:44px;background:#3a3a3c;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;">${name[0]}</div>
            <div style="flex:1;"><div style="color:white;font-size:17px;">${name}</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">${time}</div></div>
            <span style="color:#0a84ff;font-size:20px;">${type}</span>
          </div>
        `).join('')}
      </div>
    `, '#000')
  },

  // ── apple-pay-setup ────────────────────────────────────────────────────────
  {
    file: 'apple-pay-setup-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Wallet & Apple Pay', 'Settings')}
      <div style="padding:0 16px;">
        <div style="background:rgba(44,44,46,0.6);border-radius:12px;padding:20px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
            <div style="width:60px;height:38px;background:linear-gradient(135deg,#1a1a2e,#4a4a6a);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;border:1px solid rgba(255,255,255,0.2);">VISA</div>
            <div><div style="color:white;font-size:17px;">Visa •••• 4532</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">Bank of America</div></div>
          </div>
          <div style="display:flex;align-items:center;gap:16px;">
            <div style="width:60px;height:38px;background:linear-gradient(135deg,#1a3a1a,#3a6a3a);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:white;border:1px solid rgba(255,255,255,0.2);">MC</div>
            <div><div style="color:white;font-size:17px;">Mastercard •••• 8921</div><div style="color:rgba(255,255,255,0.5);font-size:13px;">Chase</div></div>
          </div>
        </div>
        <div style="padding:14px 16px;background:rgba(10,132,255,0.15);border-radius:12px;display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="font-size:24px;color:#0a84ff;">+</span>
          <span style="color:#0a84ff;font-size:17px;font-weight:500;">Add Card</span>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;padding:8px 0;">Transaction Defaults</div>
        <div style="background:rgba(44,44,46,0.6);border-radius:12px;">
          <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:0.5px solid rgba(255,255,255,0.1);">
            <span style="color:white;font-size:17px;flex:1;">Default Card</span>
            <span style="color:rgba(255,255,255,0.5);font-size:15px;">Visa •••• 4532</span>
            <span style="color:rgba(255,255,255,0.3);font-size:16px;margin-left:8px;">›</span>
          </div>
          <div style="display:flex;align-items:center;padding:14px 16px;">
            <span style="color:white;font-size:17px;flex:1;">Double-Click Side Button</span>
            <div style="width:44px;height:28px;background:#30d158;border-radius:14px;position:relative;">
              <div style="position:absolute;right:3px;top:3px;width:22px;height:22px;background:white;border-radius:50%;"></div>
            </div>
          </div>
        </div>
      </div>
    `, '#000')
  },

  // ── imessage-basics ────────────────────────────────────────────────────────
  {
    file: 'imessage-basics-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Messages')}
      <div style="padding:0 16px;">
        <div style="background:rgba(118,118,128,0.24);border-radius:10px;padding:8px 12px;margin-bottom:16px;display:flex;align-items:center;gap:8px;">
          <span style="color:rgba(255,255,255,0.4);font-size:14px;">🔍</span>
          <span style="color:rgba(255,255,255,0.4);font-size:15px;">Search</span>
        </div>
        ${[['Mom','Just checking in! How are you doing? 💕','2m ago',2,true],['Sarah','Thanks for the recipe!','1h ago',0,true],['Dad','Call me when you get a chance','3h ago',1,false],['Amazon','Your order has shipped...','Yesterday',0,false]].map(([name,msg,time,badge,blue])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:0.5px solid rgba(255,255,255,0.1);">
            <div style="width:48px;height:48px;background:${blue?'#0a84ff':'#30d158'};border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:600;">${name[0]}</div>
            <div style="flex:1;overflow:hidden;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="color:white;font-size:17px;font-weight:${badge?'600':'400'};">${name}</span>
                <span style="color:rgba(255,255,255,0.4);font-size:13px;">${time}</span>
              </div>
              <div style="color:rgba(255,255,255,0.5);font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${msg}</div>
            </div>
            ${badge?`<div style="min-width:20px;height:20px;background:#0a84ff;border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-weight:600;">${badge}</div>`:''}
          </div>
        `).join('')}
      </div>
    `, '#000')
  },

  // ── icloud-photos ──────────────────────────────────────────────────────────
  {
    file: 'icloud-photos-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      ${IOS_NAV_HEADER('Photos')}
      <div style="padding:0 8px;">
        <!-- Photo grid -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-bottom:16px;">
          ${Array.from({length:12},(_,i)=>{
            const colors = ['#2196f3','#4caf50','#ff9800','#e91e63','#9c27b0','#00bcd4','#ff5722','#795548','#607d8b','#3f51b5','#8bc34a','#ffc107'];
            return `<div style="aspect-ratio:1;background:${colors[i]};border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:24px;">${['🌅','🏖️','🌺','🐕','🎂','🏔️','🌊','🍕','🎸','🌇','🐱','🎄'][i]}</div>`;
          }).join('')}
        </div>
        <!-- Tab bar -->
        <div style="position:fixed;bottom:34px;left:0;right:0;display:flex;justify-content:space-around;padding:8px;background:rgba(0,0,0,0.9);">
          ${[['Library',true],['For You',false],['Albums',false],['Search',false]].map(([name,active])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <div style="width:24px;height:24px;background:${active?'#0a84ff':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:10px;color:${active?'#0a84ff':'rgba(255,255,255,0.5)'};">${name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#000')
  },

  // ── app-store-navigation ───────────────────────────────────────────────────
  {
    file: 'app-store-navigation-step-1.png', w: 390, h: 844,
    html: iphonePage(`
      <div style="padding:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <div style="font-size:34px;color:white;font-weight:700;">Today</div>
          <div style="width:36px;height:36px;background:#3a3a3c;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;">B</div>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;margin-bottom:12px;">WEDNESDAY, APRIL 2</div>
        <!-- Featured card -->
        <div style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:20px;margin-bottom:16px;">
          <div style="color:rgba(255,255,255,0.7);font-size:11px;text-transform:uppercase;margin-bottom:8px;">APP OF THE DAY</div>
          <div style="color:white;font-size:22px;font-weight:700;margin-bottom:4px;">Best Apps for Beginners</div>
          <div style="color:rgba(255,255,255,0.8);font-size:14px;">Essential apps everyone should have</div>
        </div>
        <!-- Tab bar -->
        <div style="position:fixed;bottom:34px;left:0;right:0;display:flex;justify-content:space-around;padding:8px;background:rgba(0,0,0,0.9);">
          ${[['Today',true],['Games',false],['Apps',false],['Updates',false],['Search',false]].map(([name,active])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <div style="width:20px;height:20px;background:${active?'#0a84ff':'rgba(255,255,255,0.3)'};border-radius:4px;"></div>
              <span style="font-size:10px;color:${active?'#0a84ff':'rgba(255,255,255,0.5)'};">${name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#000')
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n📱 Generating ${SHOTS.length} iPhone screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(OUT, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved to ${OUT}\n`);
})();
