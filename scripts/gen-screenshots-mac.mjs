/**
 * Screenshot generator — Mac guides (batch 2)
 * Run: node scripts/gen-screenshots-mac.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/screenshots/mac');

const MAC_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,'SF Pro Display','Helvetica Neue',sans-serif; }
  body { background:#1c1c1e; }
`;

// macOS menu bar
const MENU_BAR = (title = 'Finder') => `
<div style="position:fixed;top:0;left:0;right:0;height:28px;background:rgba(30,30,30,0.98);backdrop-filter:blur(20px);display:flex;align-items:center;padding:0 16px;gap:16px;z-index:100;font-size:13px;color:white;">
  <span style="font-size:16px;">🍎</span>
  <span style="font-weight:600;">${title}</span>
  <span style="color:rgba(255,255,255,0.7);">File</span>
  <span style="color:rgba(255,255,255,0.7);">Edit</span>
  <span style="color:rgba(255,255,255,0.7);">View</span>
  <span style="color:rgba(255,255,255,0.7);">Go</span>
  <span style="color:rgba(255,255,255,0.7);">Window</span>
  <span style="color:rgba(255,255,255,0.7);">Help</span>
  <div style="margin-left:auto;display:flex;align-items:center;gap:14px;color:rgba(255,255,255,0.8);font-size:12px;">
    <span>📶</span>
    <span>🔊</span>
    <span>🔋 98%</span>
    <span>⌃⌘</span>
    <span>Tue Apr 1 10:42 AM</span>
  </div>
</div>`;

// macOS traffic lights
const TRAFFIC = `<div style="display:flex;gap:6px;align-items:center;margin-right:8px;">
  <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57;border:0.5px solid rgba(0,0,0,0.15);"></div>
  <div style="width:12px;height:12px;border-radius:50%;background:#ffbd2e;border:0.5px solid rgba(0,0,0,0.15);"></div>
  <div style="width:12px;height:12px;border-radius:50%;background:#28c840;border:0.5px solid rgba(0,0,0,0.15);"></div>
</div>`;

// macOS Dock
const DOCK = `
<div style="position:fixed;bottom:0;left:0;right:0;height:80px;display:flex;align-items:center;justify-content:center;z-index:100;">
  <div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:20px;border:1px solid rgba(255,255,255,0.2);padding:6px 12px;display:flex;gap:6px;align-items:center;">
    ${[['🔵','Finder'],['🌐','Safari'],['📧','Mail'],['📅','Calendar'],['🗒','Notes'],['📁','Files'],['⚙','Settings'],['🗑','Trash']].map(([i,n])=>`
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
        <div style="width:52px;height:52px;border-radius:13px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:28px;">${i}</div>
      </div>`).join('')}
  </div>
</div>`;

async function shot(page, html, outFile, width, height) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT, outFile), clip: { x: 0, y: 0, width, height } });
  console.log('✓', outFile);
}

const SHOTS = [
  // ── connect-wifi-mac ──────────────────────────────────────────────────────
  {
    file: 'connect-wifi-mac-step-2.png', w: 320, h: 240,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:320px;height:240px;background:#1c1c1e;display:flex;align-items:flex-start;justify-content:flex-end;padding:32px 12px 0;}</style></head><body>
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:14px;padding:16px;width:260px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div style="color:#999;font-size:11px;margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Wi-Fi</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:44px;height:28px;background:#30d158;border-radius:14px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:22px;height:22px;background:white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
          </div>
          <span style="color:white;font-size:13px;">Wi-Fi</span>
          <span style="margin-left:auto;color:#30d158;font-size:11px;">On</span>
        </div>
        <div style="color:#999;font-size:11px;font-weight:600;margin-bottom:6px;">Networks</div>
        <div style="color:#ddd;font-size:12px;padding:4px 0;display:flex;align-items:center;gap:8px;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 3.5 Q7 -0.5 13 3.5" stroke="#555" stroke-width="1.3"/><path d="M2.5 6 Q7 2.5 11.5 6" stroke="#555" stroke-width="1.3"/><path d="M4.5 8.5 Q7 6.5 9.5 8.5" stroke="#555" stroke-width="1.3"/><circle cx="7" cy="11" r="1.2" fill="#555"/></svg>
          Other Networks...
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'connect-wifi-mac-step-3.png', w: 320, h: 380,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:320px;height:380px;background:#1c1c1e;display:flex;align-items:flex-start;justify-content:flex-end;padding:32px 12px 0;}</style></head><body>
      <div style="background:rgba(44,44,46,0.95);backdrop-filter:blur(30px);border-radius:14px;padding:16px;width:280px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <span style="color:white;font-size:13px;font-weight:600;">Wi-Fi</span>
          <div style="width:40px;height:24px;background:#30d158;border-radius:12px;position:relative;">
            <div style="position:absolute;right:2px;top:2px;width:20px;height:20px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        ${[['HomeNetwork_5G','#30d158',true,4],['BT-Hub-2A3F','','',3],['VM-Broadband','','',2],['BT-Guest','','',1],['Hidden Network','','',0]].map(([n,c,sel,sig])=>`
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;background:${sel?'rgba(0,122,255,0.2)':'transparent'};margin-bottom:2px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 4 Q8 -1 15 4" stroke="${sig>=4?'white':'rgba(255,255,255,0.3)'}" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M2.5 7 Q8 3 13.5 7" stroke="${sig>=3?'white':'rgba(255,255,255,0.3)'}" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M5 10 Q8 7 11 10" stroke="${sig>=2?'white':'rgba(255,255,255,0.3)'}" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="8" cy="13" r="1.3" fill="white"/>
            </svg>
            <span style="color:${sel?'white':'rgba(255,255,255,0.8)'};font-size:12px;flex:1;">${n}</span>
            ${sel?`<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6 L5 9 L10 3" stroke="#30d158" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`:''}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 3L5 6 M5 3 L8 3" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"/><circle cx="5" cy="4.5" r="3.5" stroke="rgba(255,255,255,0.3)" stroke-width="1"/></svg>
          </div>`).join('')}
        <div style="height:1px;background:rgba(255,255,255,0.1);margin:8px 0;"></div>
        <div style="color:#0a84ff;font-size:12px;text-align:center;">Other…</div>
      </div>
    </body></html>`
  },
  {
    file: 'connect-wifi-mac-step-4.png', w: 560, h: 280,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:560px;height:280px;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:14px;padding:24px;width:440px;box-shadow:0 20px 60px rgba(0,0,0,0.7);">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <div style="width:48px;height:48px;background:rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M2 7 Q14 -1 26 7" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M5 12 Q14 5 23 12" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M9 17 Q14 12 19 17" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="22" r="2.5" fill="white"/></svg>
          </div>
          <div>
            <div style="color:white;font-size:15px;font-weight:600;">Join "HomeNetwork_5G"</div>
            <div style="color:#999;font-size:12px;margin-top:2px;">Password required</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="color:#999;font-size:13px;width:80px;">Password:</span>
            <div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:8px 12px;color:#fff;font-size:13px;font-family:monospace;">••••••••••••</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding-left:90px;">
            <div style="width:16px;height:16px;background:#0a84ff;border-radius:4px;display:flex;align-items:center;justify-content:center;">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5 L4 7 L8 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span style="color:#ddd;font-size:12px;">Remember this network</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <div style="padding:7px 20px;border-radius:8px;background:rgba(255,255,255,0.1);color:#ddd;font-size:13px;cursor:pointer;">Cancel</div>
          <div style="padding:7px 20px;border-radius:8px;background:#0a84ff;color:white;font-size:13px;font-weight:600;cursor:pointer;">Join</div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'connect-wifi-mac-step-5.png', w: 400, h: 60,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:400px;height:60px;background:rgba(30,30,30,0.98);display:flex;align-items:center;justify-content:flex-end;padding-right:16px;gap:14px;font-size:12px;color:rgba(255,255,255,0.8);}</style></head><body>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 4 Q8 -0.5 15 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3 7 Q8 3.5 13 7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M5.5 10 Q8 7.5 10.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="8" cy="13" r="1.5" fill="white"/>
      </svg>
      <span>🔊</span>
      <span>🔋 98%</span>
      <span>⌃⌘</span>
      <span>Tue Apr 1 10:42 AM</span>
    </body></html>`
  },

  // ── open-close-apps-mac ───────────────────────────────────────────────────
  {
    file: 'open-close-apps-mac-step-2.png', w: 1144, h: 760,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:1144px;height:760px;background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);position:relative;overflow:hidden;}</style></head><body>
      ${MENU_BAR('Launchpad')}
      <div style="padding:40px;padding-top:60px;display:grid;grid-template-columns:repeat(7,1fr);gap:20px;justify-items:center;">
        ${[['📷','Photos'],['🎵','Music'],['🎬','TV'],['📧','Mail'],['📅','Calendar'],['🗒','Notes'],['🔵','Finder'],['🌐','Safari'],['📱','Messages'],['📞','FaceTime'],['⚙','Settings'],['🗒','Reminders'],['🗺','Maps'],['☁','Weather'],['🔵','Contacts'],['📰','News'],['📊','Numbers'],['📝','Pages'],['🎞','iMovie'],['🎸','GarageBand'],['✈','TestFlight'],['🔑','Passwords'],['💻','Xcode'],['📂','Archive'],['🎮','Arcade'],['🛠','Utilities'],['💡','HomeKit'],['🔍','Spotlight']].map(([i,n])=>`
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:64px;height:64px;border-radius:16px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:34px;">${i}</div>
            <span style="color:white;font-size:11px;text-shadow:0 1px 3px rgba(0,0,0,0.8);">${n}</span>
          </div>`).join('')}
      </div>
      <div style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:6px;">
        ${[1,2,3].map((_,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===0?'white':'rgba(255,255,255,0.3)'}"></div>`).join('')}
      </div>
    </body></html>`
  },
  {
    file: 'open-close-apps-mac-step-4.png', w: 800, h: 480,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:800px;height:480px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(28,28,30,0.97);border-radius:12px;overflow:hidden;width:680px;box-shadow:0 30px 80px rgba(0,0,0,0.7);">
        <!-- Window title bar -->
        <div style="background:rgba(44,44,46,0.95);height:40px;display:flex;align-items:center;padding:0 14px;gap:8px;">
          ${TRAFFIC}
          <span style="color:#888;font-size:13px;flex:1;text-align:center;">Untitled — Notes</span>
        </div>
        <div style="padding:24px;color:#ddd;font-size:14px;line-height:2;">
          <p style="margin-bottom:8px;font-weight:600;color:white;">Shopping List</p>
          <p>• Bread</p>
          <p>• Milk</p>
          <p>• Coffee beans</p>
        </div>
        <div style="background:#1c1c1e;padding:12px 20px;border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;">
          <div style="background:#3a3a3c;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:6px;font-size:11px;color:#aaa;">
            <span>💡</span>
            Click the <span style="color:#ff453a;font-weight:700;">red ●</span> button (top-left) to close this window
          </div>
        </div>
      </div>
      <!-- Callout arrow pointing to red button -->
      <div style="position:absolute;top:115px;left:188px;display:flex;flex-direction:column;align-items:center;">
        <div style="background:#ff453a;color:white;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px;white-space:nowrap;">Click to close</div>
        <div style="width:2px;height:12px;background:#ff453a;"></div>
        <div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid #ff453a;"></div>
      </div>
    </body></html>`
  },
  {
    file: 'open-close-apps-mac-step-5.png', w: 600, h: 380,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:600px;height:380px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:flex-end;justify-content:center;padding-bottom:16px;}</style></head><body>
      <!-- Dock with context menu -->
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;">
        <!-- Context menu -->
        <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(20px);border-radius:10px;padding:4px;box-shadow:0 8px 32px rgba(0,0,0,0.6);width:180px;margin-bottom:8px;">
          <div style="padding:4px 8px 2px;color:#888;font-size:11px;font-weight:600;">Safari</div>
          <div style="height:1px;background:rgba(255,255,255,0.1);margin:4px 0;"></div>
          <div style="display:flex;flex-direction:column;gap:1px;">
            ${['New Window','New Private Window','','Show All Windows','','Quit'].map((item,i)=>item?`
              <div style="padding:6px 12px;border-radius:6px;font-size:13px;color:${item==='Quit'?'#ff453a':'#ddd'};font-weight:${item==='Quit'?'600':'normal'};background:${item==='Quit'?'rgba(255,69,58,0.1)':'transparent'};">${item}</div>`:
              `<div style="height:1px;background:rgba(255,255,255,0.1);margin:2px 4px;"></div>`).join('')}
          </div>
        </div>
        <!-- Dock icon with bounce indicator -->
        <div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:20px;border:1px solid rgba(255,255,255,0.2);padding:6px 10px;display:flex;gap:6px;align-items:flex-end;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
            <div style="width:52px;height:52px;border-radius:13px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:28px;border:2px solid rgba(0,122,255,0.6);">🌐</div>
            <div style="width:5px;height:5px;border-radius:50%;background:white;"></div>
          </div>
        </div>
      </div>
    </body></html>`
  },

  // ── take-screenshot-mac ───────────────────────────────────────────────────
  {
    file: 'take-screenshot-mac-step-1.png', w: 680, h: 220,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:680px;height:220px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:12px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="display:flex;align-items:center;gap:6px;">
          ${[['⌘','Cmd'],['⇧','Shift'],['3','3']].map(([icon,label])=>`
            <div style="background:#2a2a2a;border:1px solid #555;border-radius:8px;padding:10px 14px;text-align:center;min-width:50px;box-shadow:0 3px 0 #111;">
              <div style="color:#ccc;font-size:18px;">${icon}</div>
              <div style="color:#888;font-size:9px;margin-top:2px;">${label}</div>
            </div>`).join('<span style="color:#555;font-size:20px;align-self:center;">+</span>')}
        </div>
        <div style="color:#30d158;font-size:12px;font-weight:500;">Captures entire screen → saves to Desktop as PNG</div>
      </div>
    </body></html>`
  },
  {
    file: 'take-screenshot-mac-step-2.png', w: 900, h: 560,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:900px;height:560px;background:linear-gradient(135deg,#1a1a2e,#0f3460);position:relative;cursor:crosshair;}</style></head><body>
      ${MENU_BAR('Screenshot')}
      <!-- Dimmed overlay -->
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.35);top:28px;"></div>
      <!-- Selection rectangle -->
      <div style="position:absolute;left:180px;top:100px;width:540px;height:300px;border:2px solid #0a84ff;box-shadow:0 0 0 9999px rgba(0,0,0,0.3);">
        <!-- Size indicator -->
        <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.7);color:white;padding:3px 10px;border-radius:4px;font-size:11px;font-weight:600;white-space:nowrap;">540 × 300</div>
        <!-- Corner handles -->
        ${[['-3px','-3px'],['-3px','100%'],['100%','-3px'],['100%','100%']].map(([t,l])=>`
          <div style="position:absolute;top:${t};left:${l};width:8px;height:8px;background:#0a84ff;border-radius:1px;margin:-4px;"></div>`).join('')}
      </div>
      <!-- Magnifier cursor indicator -->
      <div style="position:absolute;left:560px;top:200px;width:28px;height:28px;border:2px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;">
        <div style="width:2px;height:12px;background:white;position:absolute;"></div>
        <div style="width:12px;height:2px;background:white;position:absolute;"></div>
      </div>
    </body></html>`
  },
  {
    file: 'take-screenshot-mac-step-3.png', w: 900, h: 560,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:900px;height:560px;background:linear-gradient(135deg,#1a1a2e,#0f3460);position:relative;}</style></head><body>
      ${MENU_BAR('Screenshot')}
      <!-- Sample window to capture -->
      <div style="position:absolute;left:180px;top:80px;width:540px;background:rgba(28,28,30,0.97);border-radius:12px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,0.7);">
        <div style="background:rgba(44,44,46,0.95);height:40px;display:flex;align-items:center;padding:0 14px;">
          ${TRAFFIC}
          <span style="color:#888;font-size:13px;flex:1;text-align:center;">Notes — Shopping List</span>
        </div>
        <div style="padding:20px;color:#ddd;font-size:13px;line-height:1.8;">
          <p>• Bread</p><p>• Milk</p><p>• Coffee</p>
        </div>
      </div>
      <!-- Camera cursor overlay -->
      <div style="position:absolute;left:420px;top:160px;">
        <div style="width:36px;height:28px;background:white;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;">📷</div>
        <div style="position:absolute;top:-20px;left:40px;background:rgba(0,0,0,0.7);color:white;padding:2px 8px;border-radius:4px;font-size:11px;white-space:nowrap;">Click to capture window</div>
      </div>
      <!-- Highlight glow around window -->
      <div style="position:absolute;left:176px;top:76px;width:548px;height:152px;border:3px solid #0a84ff;border-radius:14px;pointer-events:none;"></div>
    </body></html>`
  },
  {
    file: 'take-screenshot-mac-step-5.png', w: 900, h: 200,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:900px;height:200px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:flex-end;justify-content:flex-end;padding:0 20px 20px;}</style></head><body>
      <!-- Screenshot thumbnail -->
      <div style="background:rgba(28,28,30,0.97);border-radius:10px;overflow:hidden;width:200px;box-shadow:0 8px 32px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.1);">
        <div style="width:200px;height:120px;background:linear-gradient(135deg,#0052cc,#00b4d8);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:11px;">Screenshot</div>
        <div style="padding:6px 10px;display:flex;align-items:center;justify-content:space-between;">
          <span style="color:#ddd;font-size:10px;">Screenshot 10:42 AM</span>
          <span style="color:#0a84ff;font-size:10px;">✕</span>
        </div>
      </div>
    </body></html>`
  },

  // ── create-folder-mac ─────────────────────────────────────────────────────
  {
    file: 'create-folder-mac-step-1.png', w: 600, h: 400,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:600px;height:400px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="position:relative;">
        <!-- Context menu -->
        <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(20px);border-radius:10px;padding:4px;box-shadow:0 8px 32px rgba(0,0,0,0.6);width:220px;">
          ${[['New Folder','','#30d158'],['New Folder with Selection','',''],['','divider',''],['Get Info','⌘I',''],['Change Desktop Background…','',''],['','divider',''],['Use Stacks','',''],['Sort By','▶',''],['Clean Up','','']].map(([t,k,c])=>t==='divider'?`<div style="height:1px;background:rgba(255,255,255,0.1);margin:2px 4px;"></div>`:t==='New Folder'?`
            <div style="padding:6px 12px;border-radius:6px;font-size:13px;color:#${c||'ddd'};font-weight:600;display:flex;align-items:center;justify-content:space-between;background:rgba(0,122,255,0.15);border:1px solid rgba(0,122,255,0.3);">
              <span>${t}</span>
              <span style="color:#888;font-size:11px;">⇧⌘N</span>
            </div>`:`
            <div style="padding:6px 12px;border-radius:6px;font-size:13px;color:#aaa;display:flex;align-items:center;justify-content:space-between;">
              <span>${t}</span>${k?`<span style="color:#888;font-size:11px;">${k}</span>`:''}
            </div>`).join('')}
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-mac-step-3.png', w: 600, h: 360,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:600px;height:360px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(28,28,30,0.97);border-radius:10px;overflow:hidden;width:500px;box-shadow:0 20px 60px rgba(0,0,0,0.7);">
        <div style="background:rgba(44,44,46,0.95);height:40px;display:flex;align-items:center;padding:0 14px;">
          ${TRAFFIC}
          <span style="color:#888;font-size:13px;flex:1;text-align:center;">Documents</span>
        </div>
        <div style="padding:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;justify-items:center;">
          ${['Work Projects','Family Photos','Tax Returns'].map(n=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <svg width="52" height="44" viewBox="0 0 52 44" fill="none"><path d="M2 12 C2 8 4 6 8 6 L20 6 L24 10 L44 10 C48 10 50 12 50 16 L50 38 C50 41 48 43 44 43 L8 43 C4 43 2 41 2 38 Z" fill="#FFB800"/><path d="M2 16 L50 16 L50 38 C50 41 48 43 44 43 L8 43 C4 43 2 41 2 38 Z" fill="#FFCA28"/></svg>
              <span style="font-size:11px;color:#ddd;text-align:center;">${n}</span>
            </div>`).join('')}
          <!-- New folder being renamed -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
            <svg width="52" height="44" viewBox="0 0 52 44" fill="none"><path d="M2 12 C2 8 4 6 8 6 L20 6 L24 10 L44 10 C48 10 50 12 50 16 L50 38 C50 41 48 43 44 43 L8 43 C4 43 2 41 2 38 Z" fill="#FFB800"/><path d="M2 16 L50 16 L50 38 C50 41 48 43 44 43 L8 43 C4 43 2 41 2 38 Z" fill="#FFCA28"/></svg>
            <div style="border:2px solid #0a84ff;border-radius:4px;background:rgba(10,132,255,0.15);padding:2px 8px;font-size:11px;color:white;min-width:70px;text-align:center;">Holiday 2026</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;opacity:0.4;">
            <div style="width:52px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:4px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:20px;">+</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-mac-step-4.png', w: 700, h: 400,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:700px;height:400px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(28,28,30,0.97);border-radius:10px;overflow:hidden;width:600px;box-shadow:0 20px 60px rgba(0,0,0,0.7);">
        <div style="background:rgba(44,44,46,0.95);height:40px;display:flex;align-items:center;padding:0 14px;">
          ${TRAFFIC}
          <span style="color:#888;font-size:13px;flex:1;text-align:center;">New Smart Folder</span>
        </div>
        <!-- Smart folder criteria UI -->
        <div style="padding:16px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <span style="color:#888;font-size:12px;">Search:</span>
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:6px 10px;color:#ddd;font-size:12px;flex:1;">This Mac</div>
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:6px 10px;color:#ddd;font-size:12px;">Documents</div>
          </div>
          <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:12px;margin-bottom:12px;">
            <div style="color:#888;font-size:11px;margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Criteria</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <select style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:6px;padding:5px 8px;color:#ddd;font-size:12px;"><option>Kind</option></select>
              <select style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:6px;padding:5px 8px;color:#ddd;font-size:12px;"><option>is</option></select>
              <select style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:6px;padding:5px 8px;color:#ddd;font-size:12px;"><option>PDF</option></select>
              <div style="width:24px;height:24px;background:#30d158;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;cursor:pointer;">+</div>
              <div style="width:24px;height:24px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;cursor:pointer;">−</div>
            </div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px;">
            <div style="padding:6px 16px;border-radius:8px;background:rgba(255,255,255,0.1);color:#ddd;font-size:13px;">Cancel</div>
            <div style="padding:6px 16px;border-radius:8px;background:#0a84ff;color:white;font-size:13px;font-weight:600;">Save</div>
          </div>
        </div>
      </div>
    </body></html>`
  },

  // ── adjust-brightness-volume-mac ──────────────────────────────────────────
  {
    file: 'adjust-brightness-volume-mac-step-1.png', w: 680, h: 220,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:680px;height:220px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:12px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="display:flex;align-items:center;gap:8px;">
          ${['F1 🔅','F2 🔆'].map((k,i)=>`
            <div style="background:${i===0?'#1a2a4a':'#1a3a1a'};border:2px solid ${i===0?'#4488ff':'#30d158'};border-radius:8px;padding:10px 16px;text-align:center;min-width:70px;box-shadow:0 4px 0 #0a0a0a,0 0 16px ${i===0?'#4488ff44':'#30d15844'};">
              <div style="color:${i===0?'#88aaff':'#30d158'};font-size:14px;font-weight:700;">${k}</div>
              <div style="color:#888;font-size:9px;margin-top:2px;">${i===0?'Dimmer':'Brighter'}</div>
            </div>`).join('<span style="color:#555;font-size:14px;align-self:center;">or</span>')}
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="color:#666;font-size:16px;">🔅</span>
          <div style="width:200px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
            <div style="width:70%;height:100%;background:white;border-radius:3px;"></div>
          </div>
          <span style="color:white;font-size:16px;">🔆</span>
        </div>
        <div style="color:#888;font-size:11px;">Press F1 to dim, F2 to brighten</div>
      </div>
    </body></html>`
  },
  {
    file: 'adjust-brightness-volume-mac-step-2.png', w: 680, h: 220,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:680px;height:220px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:12px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="display:flex;align-items:center;gap:8px;">
          ${[['F10','🔇','Mute','#c62828'],['F11','🔉','Volume –','#ff6b35'],['F12','🔊','Volume +','#30d158']].map(([k,i,l,c])=>`
            <div style="background:rgba(255,255,255,0.04);border:2px solid ${c};border-radius:8px;padding:10px 14px;text-align:center;min-width:70px;box-shadow:0 4px 0 #0a0a0a,0 0 12px ${c}44;">
              <div style="color:${c};font-size:16px;">${i}</div>
              <div style="color:rgba(255,255,255,0.6);font-size:10px;font-weight:600;margin-top:2px;">${k}</div>
              <div style="color:#888;font-size:9px;">${l}</div>
            </div>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="color:#888;font-size:16px;">🔇</span>
          <div style="width:200px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
            <div style="width:55%;height:100%;background:#30d158;border-radius:3px;"></div>
          </div>
          <span style="color:white;font-size:16px;">🔊</span>
        </div>
        <div style="color:#888;font-size:11px;">F10 = Mute • F11 = Volume Down • F12 = Volume Up</div>
      </div>
    </body></html>`
  },
  {
    file: 'adjust-brightness-volume-mac-step-3.png', w: 680, h: 260,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:680px;height:260px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:12px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="color:#ddd;font-size:13px;font-weight:600;">Fine adjustment with Option + Shift</div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${[['⌥','Option'],['⇧','Shift'],['F2/F12','Key']].map(([k,l])=>`
            <div style="background:#2a2a2a;border:1px solid #444;border-radius:6px;padding:8px 12px;text-align:center;min-width:50px;box-shadow:0 3px 0 #111;">
              <div style="color:#ccc;font-size:16px;">${k}</div>
              <div style="color:#888;font-size:9px;margin-top:1px;">${l}</div>
            </div>`).join('<span style="color:#555;font-size:18px;align-self:center;">+</span>')}
        </div>
        <div style="width:300px;">
          <div style="color:#aaa;font-size:10px;margin-bottom:4px;display:flex;justify-content:space-between;"><span>Normal step</span><span>Fine step (¼ size)</span></div>
          <div style="display:flex;gap:1px;align-items:flex-end;">
            ${Array.from({length:16}).map((_,i)=>`<div style="width:14px;background:${i<4?'white':'rgba(255,255,255,0.15)'};height:${12+(i%4)*4}px;border-radius:2px;"></div>`).join('')}
          </div>
          <div style="color:#888;font-size:10px;margin-top:4px;">Normal brightness steps ↑ vs fine steps (Option+Shift)</div>
        </div>
      </div>
    </body></html>`
  },

  // ── use-spotlight-search-mac ──────────────────────────────────────────────
  {
    file: 'use-spotlight-search-mac-step-2.png', w: 760, h: 500,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:760px;height:500px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:16px;overflow:hidden;width:620px;box-shadow:0 30px 80px rgba(0,0,0,0.8);">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.06);border-radius:10px;padding:10px 14px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#888" stroke-width="1.5"/><line x1="10" y1="10" x2="15" y2="15" stroke="#888" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span style="color:#888;font-size:15px;">NHS_Appointment_Jan2026.pdf</span>
          </div>
        </div>
        <div style="display:flex;height:360px;">
          <div style="width:180px;padding:10px;border-right:1px solid rgba(255,255,255,0.1);">
            <div style="color:#888;font-size:10px;font-weight:700;padding:4px 8px;text-transform:uppercase;letter-spacing:0.5px;">Documents</div>
            <div style="background:rgba(0,122,255,0.25);border-radius:8px;padding:8px 10px;margin:2px 0;">
              <div style="color:white;font-size:12px;font-weight:600;">NHS_Appointment_Jan2026.pdf</div>
              <div style="color:#888;font-size:10px;margin-top:2px;">📄 PDF · 245 KB</div>
            </div>
            <div style="padding:8px 10px;margin:2px 0;">
              <div style="color:#ddd;font-size:12px;">NHS_Letter_Dec2025.pdf</div>
              <div style="color:#888;font-size:10px;margin-top:2px;">📄 PDF · 180 KB</div>
            </div>
            <div style="color:#888;font-size:10px;font-weight:700;padding:8px 8px 4px;text-transform:uppercase;letter-spacing:0.5px;">Folders</div>
            <div style="padding:8px 10px;margin:2px 0;">
              <div style="color:#ddd;font-size:12px;">NHS Documents 2026</div>
              <div style="color:#888;font-size:10px;margin-top:2px;">📁 Folder</div>
            </div>
          </div>
          <div style="flex:1;padding:16px;display:flex;flex-direction:column;gap:10px;">
            <div style="color:#888;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Quick Look</div>
            <div style="flex:1;background:rgba(255,255,255,0.04);border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.08);">
              <div style="text-align:center;">
                <div style="font-size:48px;margin-bottom:8px;">📄</div>
                <div style="color:#ddd;font-size:12px;font-weight:600;">NHS_Appointment_Jan2026.pdf</div>
                <div style="color:#888;font-size:11px;margin-top:4px;">PDF Document · 245 KB</div>
                <div style="color:#888;font-size:10px;margin-top:2px;">Modified: 12 Jan 2026</div>
              </div>
            </div>
            <div style="background:rgba(0,122,255,0.15);border-radius:6px;padding:8px 12px;text-align:center;">
              <span style="color:#0a84ff;font-size:12px;">↵ Press Enter to open</span>
            </div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-spotlight-search-mac-step-3.png', w: 620, h: 360,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:620px;height:360px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:16px;overflow:hidden;width:520px;box-shadow:0 30px 80px rgba(0,0,0,0.8);">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.06);border-radius:10px;padding:10px 14px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#888" stroke-width="1.5"/><line x1="10" y1="10" x2="15" y2="15" stroke="#888" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span style="color:white;font-size:15px;">saf</span>
          </div>
        </div>
        <div style="padding:8px;">
          <!-- Top result: Safari -->
          <div style="background:rgba(0,122,255,0.25);border-radius:10px;padding:10px 14px;margin-bottom:4px;display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#1e90ff,#0052cc);display:flex;align-items:center;justify-content:center;font-size:22px;">🧭</div>
            <div>
              <div style="color:white;font-size:14px;font-weight:600;">Safari</div>
              <div style="color:#888;font-size:11px;">Application</div>
            </div>
            <div style="margin-left:auto;color:#0a84ff;font-size:11px;">↵ Open</div>
          </div>
          <div style="color:#888;font-size:10px;font-weight:700;padding:8px 14px 4px;text-transform:uppercase;letter-spacing:0.5px;">Web</div>
          ${['safari browser download','safari extensions','safe browsing tips'].map(s=>`
            <div style="padding:6px 14px;display:flex;align-items:center;gap:10px;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#555" stroke-width="1.2"/><path d="M7 4 L7 7 L9 9" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span style="color:#aaa;font-size:12px;">${s}</span>
            </div>`).join('')}
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-spotlight-search-mac-step-4.png', w: 620, h: 320,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:620px;height:320px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:16px;overflow:hidden;width:500px;box-shadow:0 30px 80px rgba(0,0,0,0.8);">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.06);border-radius:10px;padding:10px 14px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#888" stroke-width="1.5"/><line x1="10" y1="10" x2="15" y2="15" stroke="#888" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span style="color:white;font-size:15px;">145 * 3</span>
          </div>
        </div>
        <div style="padding:20px 24px;text-align:center;">
          <div style="color:#888;font-size:12px;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.5px;">Calculator</div>
          <div style="color:white;font-size:48px;font-weight:200;font-family:monospace;margin-bottom:8px;">435</div>
          <div style="color:#888;font-size:13px;">145 × 3 = 435</div>
          <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
            <div style="background:rgba(255,255,255,0.08);border-radius:6px;padding:5px 12px;color:#aaa;font-size:11px;">Open Calculator</div>
            <div style="background:rgba(0,122,255,0.2);border-radius:6px;padding:5px 12px;color:#0a84ff;font-size:11px;">Copy result</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-spotlight-search-mac-step-5.png', w: 760, h: 480,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:760px;height:480px;background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:16px;overflow:hidden;width:620px;box-shadow:0 30px 80px rgba(0,0,0,0.8);">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.06);border-radius:10px;padding:10px 14px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#888" stroke-width="1.5"/><line x1="10" y1="10" x2="15" y2="15" stroke="#888" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span style="color:white;font-size:15px;">best recipe for banana bread</span>
          </div>
        </div>
        <div style="display:flex;height:380px;">
          <div style="width:200px;padding:10px;border-right:1px solid rgba(255,255,255,0.1);">
            <div style="color:#888;font-size:10px;font-weight:700;padding:4px 8px;text-transform:uppercase;letter-spacing:0.5px;">Siri Suggestions</div>
            ${['Search the Web','Search Wikipedia','Search Maps'].map((s,i)=>`
              <div style="background:${i===0?'rgba(0,122,255,0.25)':'transparent'};border-radius:8px;padding:8px 10px;margin:2px 0;display:flex;align-items:center;gap:8px;">
                <div style="width:28px;height:28px;background:${i===0?'#0a84ff':i===1?'#636366':'#30d158'};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;">${['🌐','📚','🗺'][i]}</div>
                <span style="color:${i===0?'white':'#aaa'};font-size:12px;">${s}</span>
              </div>`).join('')}
            <div style="color:#888;font-size:10px;font-weight:700;padding:8px 8px 4px;text-transform:uppercase;letter-spacing:0.5px;">Wikipedia</div>
            <div style="padding:8px 10px;background:rgba(255,255,255,0.04);border-radius:8px;margin:2px 0;">
              <div style="color:#ddd;font-size:12px;">Banana bread</div>
              <div style="color:#888;font-size:10px;margin-top:2px;">Type of baked good…</div>
            </div>
          </div>
          <div style="flex:1;padding:16px;">
            <div style="color:#888;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Wikipedia Preview</div>
            <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:14px;border:1px solid rgba(255,255,255,0.08);">
              <div style="color:white;font-size:14px;font-weight:600;margin-bottom:6px;">Banana bread</div>
              <div style="color:#aaa;font-size:12px;line-height:1.6;">Banana bread is a type of bread made from mashed bananas. It is often a moist, sweet, cake-like quick bread…</div>
              <div style="margin-top:10px;color:#0a84ff;font-size:11px;cursor:pointer;">Read more on Wikipedia →</div>
            </div>
          </div>
        </div>
      </div>
    </body></html>`
  },

  // ── use-safari-mac ────────────────────────────────────────────────────────
  {
    file: 'use-safari-mac-step-2.png', w: 1000, h: 120,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:1000px;height:120px;background:#1c1c1e;display:flex;flex-direction:column;}</style></head><body>
      <!-- Safari toolbar -->
      <div style="background:#2c2c2e;height:44px;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid rgba(255,255,255,0.1);">
        ${TRAFFIC}
        <div style="display:flex;gap:6px;color:#888;">
          <div style="width:28px;height:28px;border-radius:6px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;font-size:14px;">←</div>
          <div style="width:28px;height:28px;border-radius:6px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;font-size:14px;opacity:0.3;">→</div>
        </div>
        <!-- Address bar with typed URL -->
        <div style="flex:1;background:rgba(255,255,255,0.08);border:2px solid #0a84ff;border-radius:8px;height:32px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1z" stroke="#888" stroke-width="1"/><path d="M3 6h6M6 3v6" stroke="#888" stroke-width="0.8"/></svg>
          <span style="color:#0a84ff;font-size:13px;">www.nhs.uk</span>
        </div>
        <div style="display:flex;gap:6px;color:#888;font-size:16px;">
          <span>⤴</span><span>🔖</span><span>⊞</span>
        </div>
      </div>
      <!-- URL suggestions dropdown -->
      <div style="background:#2c2c2e;padding:6px;border-bottom:1px solid rgba(255,255,255,0.1);">
        ${[['🌐','www.nhs.uk','NHS — Your health, our priority'],['📌','nhs.uk/conditions','Health conditions A to Z']].map(([i,url,title])=>`
          <div style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:6px;background:rgba(0,122,255,0.15);">
            <span style="font-size:14px;">${i}</span>
            <div>
              <div style="color:white;font-size:12px;">${url}</div>
              <div style="color:#888;font-size:10px;">${title}</div>
            </div>
          </div>`).join('')}
      </div>
    </body></html>`
  },
  {
    file: 'use-safari-mac-step-3.png', w: 1000, h: 80,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:1000px;height:80px;background:#2c2c2e;}</style></head><body>
      <!-- Tab bar -->
      <div style="height:36px;display:flex;align-items:flex-end;padding:0 12px;gap:0;background:#1c1c1e;border-bottom:1px solid rgba(255,255,255,0.1);">
        ${[['🌐 NHS Website','active'],['📧 Mail — Inbox',''],['📅 April 2026',''],['+ New Tab','new']].map(([t,state])=>`
          <div style="padding:6px 14px;font-size:11px;color:${state==='active'?'white':'#888'};background:${state==='active'?'#2c2c2e':'transparent'};border-radius:${state==='active'?'6px 6px 0 0':'0'};border:${state==='active'?'1px solid rgba(255,255,255,0.1) 1px solid rgba(255,255,255,0.1) 1px solid #2c2c2e 1px solid rgba(255,255,255,0.1)':'none'};display:flex;align-items:center;gap:6px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${t}${state==='active'?`<span style="margin-left:4px;color:#666;font-size:10px;cursor:pointer;">✕</span>`:''}
          </div>`).join('')}
      </div>
      <!-- Address bar -->
      <div style="height:44px;background:#2c2c2e;display:flex;align-items:center;padding:0 12px;gap:8px;">
        ${TRAFFIC}
        <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:8px;height:32px;display:flex;align-items:center;padding:0 12px;gap:8px;font-size:13px;color:#888;">
          🔒 nhs.uk
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-safari-mac-step-4.png', w: 680, h: 300,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:680px;height:300px;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:rgba(44,44,46,0.97);backdrop-filter:blur(30px);border-radius:14px;padding:20px;width:540px;box-shadow:0 20px 60px rgba(0,0,0,0.7);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="width:40px;height:40px;border-radius:10px;background:rgba(255,184,0,0.15);display:flex;align-items:center;justify-content:center;font-size:22px;">🔖</div>
          <div>
            <div style="color:white;font-size:15px;font-weight:600;">Add Bookmark</div>
            <div style="color:#888;font-size:12px;margin-top:1px;">nhs.uk</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="color:#888;font-size:13px;width:60px;">Name:</span>
            <div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:7px 12px;color:#fff;font-size:13px;">NHS — Your health, our priority</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="color:#888;font-size:13px;width:60px;">Location:</span>
            <div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:7px 12px;color:#ddd;font-size:13px;display:flex;align-items:center;justify-content:space-between;">
              <span>Favorites</span><span style="color:#888;">▾</span>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <div style="padding:7px 20px;border-radius:8px;background:rgba(255,255,255,0.1);color:#ddd;font-size:13px;">Cancel</div>
          <div style="padding:7px 20px;border-radius:8px;background:#0a84ff;color:white;font-size:13px;font-weight:600;">Add</div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-safari-mac-step-5.png', w: 1000, h: 480,
    html: `<!DOCTYPE html><html><head><style>${MAC_BASE} body{width:1000px;height:480px;background:#fff;}</style></head><body>
      <!-- Safari chrome in Reader mode -->
      <div style="background:#2c2c2e;height:44px;display:flex;align-items:center;padding:0 12px;gap:8px;">
        ${TRAFFIC}
        <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:8px;height:32px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <span style="color:#ff9500;font-size:13px;">📄</span>
          <span style="color:#888;font-size:13px;">nhs.uk/conditions/type-2-diabetes</span>
          <div style="margin-left:auto;background:rgba(255,149,0,0.2);border:1px solid #ff9500;border-radius:6px;padding:2px 8px;color:#ff9500;font-size:11px;font-weight:600;">Reader</div>
        </div>
      </div>
      <!-- Reader mode content -->
      <div style="background:#f9f7f2;padding:40px;max-width:700px;margin:0 auto;">
        <div style="color:#888;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">NHS · Health A-Z</div>
        <h1 style="font-size:26px;color:#1d1d1f;font-weight:700;margin-bottom:16px;line-height:1.3;">Type 2 diabetes</h1>
        <p style="font-size:15px;color:#333;line-height:1.8;margin-bottom:16px;">Type 2 diabetes is a common condition that causes the level of sugar (glucose) in the blood to become too high. It can cause symptoms like excessive thirst, needing to pee a lot and tiredness.</p>
        <p style="font-size:15px;color:#333;line-height:1.8;margin-bottom:16px;">It can also increase your risk of getting serious problems with your eyes, heart and nerves. It's a lifelong condition that can affect your everyday life.</p>
        <div style="background:#e8f5e9;border-left:3px solid #30d158;padding:12px 16px;border-radius:0 6px 6px 0;font-size:13px;color:#333;">
          <strong>Reader mode removes ads and distractions — just the article text.</strong>
        </div>
      </div>
    </body></html>`
  },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const s of SHOTS) {
  await shot(page, s.html, s.file, s.w, s.h);
}

await browser.close();
console.log(`\n✅ Done — ${SHOTS.length} Mac screenshots generated`);
