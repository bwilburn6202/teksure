/**
 * Screenshot generator — Windows guides (batch 1)
 * Run: node scripts/gen-screenshots-windows.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/screenshots/windows');

// ─── shared CSS ───────────────────────────────────────────────────────────────
const WIN_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI',system-ui,sans-serif; }
  body { background:#0a2d6e; width:1280px; }
`;

const TASKBAR_HTML = `
<div style="position:fixed;bottom:0;left:0;right:0;height:48px;background:#1a1a1a;display:flex;align-items:center;padding:0 8px;gap:4px;z-index:100;">
  <!-- Start -->
  <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="1" y="10.5" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#0078d4"/></svg>
  </div>
  <!-- Search -->
  <div style="width:300px;height:36px;background:#2d2d2d;border-radius:18px;display:flex;align-items:center;padding:0 12px;gap:8px;color:#aaa;font-size:13px;">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#aaa" stroke-width="1.5"/><line x1="9" y1="9" x2="13" y2="13" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/></svg>
    Search
  </div>
  <!-- Pinned apps -->
  <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:2px;">
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
      <div style="width:22px;height:22px;background:#0078d4;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">E</div>
    </div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
      <div style="width:22px;height:22px;background:#107c10;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">W</div>
    </div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
      <div style="width:22px;height:22px;background:#ca3200;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">♪</div>
    </div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
      <div style="width:22px;height:22px;background:#fff;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#333;font-weight:700;">📁</div>
    </div>
  </div>
  <!-- System tray -->
  <div style="display:flex;align-items:center;gap:4px;color:#fff;font-size:11px;">
    <span style="padding:2px 4px;">∧</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2 L14 12 L2 12 Z" fill="white" opacity="0.8"/></svg>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="10" width="2" height="4" fill="white"/><rect x="5" y="7" width="2" height="7" fill="white"/><rect x="8" y="4" width="2" height="10" fill="white"/><rect x="11" y="1" width="2" height="13" fill="white"/></svg>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 5 L8 1 L13 5 L13 12 L3 12 Z" stroke="white" stroke-width="1.2" fill="none"/><rect x="5.5" y="8" width="5" height="4" fill="white"/></svg>
    <div style="text-align:right;line-height:1.3;margin-left:4px;">
      <div>10:42 AM</div>
      <div>4/1/2026</div>
    </div>
    <div style="width:4px;height:36px;background:#0078d4;margin-left:4px;"></div>
  </div>
</div>`;

// ─── helpers ──────────────────────────────────────────────────────────────────
async function shot(page, html, outFile, width, height) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT, outFile), clip: { x: 0, y: 0, width, height } });
  console.log('✓', outFile);
}

// ─── screenshot definitions ───────────────────────────────────────────────────
const SHOTS = [

  // ── turn-pc-on-and-off ─────────────────────────────────────────────────────
  {
    file: 'turn-pc-on-and-off-step-1.png', w: 640, h: 300,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{background:#111;display:flex;align-items:center;justify-content:center;height:300px;width:640px;}</style></head><body>
      <div style="position:relative;background:#1e1e1e;border-radius:12px;padding:40px 60px;box-shadow:0 20px 60px #000a;">
        <div style="display:grid;grid-template-columns:repeat(14,36px);gap:4px;margin-bottom:8px;">
          ${Array.from({length:12},(_,i)=>`<div style="background:#2a2a2a;border-radius:4px;height:28px;display:flex;align-items:center;justify-content:center;color:#888;font-size:9px;font-weight:600;">F${i+1}</div>`).join('')}
          <div style="background:#2a2a2a;border-radius:4px;height:28px;display:flex;align-items:center;justify-content:center;color:#888;font-size:9px;">PrtSc</div>
          <div style="background:#333;border:2px solid #0078d4;border-radius:6px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px #0078d4aa;">
            <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="#0078d4" stroke-width="2" fill="none"/><line x1="8" y1="2" x2="8" y2="5" stroke="#0078d4" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(14,36px);gap:4px;">
          ${['`','1','2','3','4','5','6','7','8','9','0','-','=','⌫'].map(k=>`<div style="background:#2a2a2a;border-radius:4px;height:34px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;">${k}</div>`).join('')}
        </div>
        <div style="margin-top:16px;text-align:center;color:#0078d4;font-size:12px;font-weight:500;">Power button (top-right) — press once to turn on</div>
        <div style="position:absolute;top:-8px;right:52px;background:#0078d4;color:white;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:600;white-space:nowrap;">Power button ↑</div>
      </div>
    </body></html>`
  },
  {
    file: 'turn-pc-on-and-off-step-2.png', w: 1280, h: 720,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{height:720px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#001a4d 0%,#003580 40%,#0052cc 100%);}</style></head><body>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin-bottom:32px;">
        <rect x="8" y="8" width="28" height="28" rx="3" fill="white"/>
        <rect x="44" y="8" width="28" height="28" rx="3" fill="white"/>
        <rect x="8" y="44" width="28" height="28" rx="3" fill="white"/>
        <rect x="44" y="44" width="28" height="28" rx="3" fill="white"/>
      </svg>
      <div style="width:48px;height:48px;border:4px solid rgba(255,255,255,0.4);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:16px;"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <div style="color:white;font-size:14px;opacity:0.8;">Just a moment...</div>
    </body></html>`
  },
  {
    file: 'turn-pc-on-and-off-step-3.png', w: 1280, h: 720,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{height:720px;background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%23001a4d"/><stop offset="1" stop-color="%230052cc"/></linearGradient></defs><rect width="1280" height="720" fill="url(%23g)"/></svg>');display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;}</style></head><body>
      <div style="width:80px;height:80px;background:#ccc;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:8px;">👤</div>
      <div style="color:white;font-size:22px;font-weight:300;">Bailey</div>
      <div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border-radius:8px;overflow:hidden;width:260px;">
        <div style="display:flex;align-items:center;background:rgba(255,255,255,0.1);padding:10px 14px;gap:10px;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="6" width="12" height="9" rx="1.5" stroke="white" stroke-width="1.5" fill="none"/><path d="M5 6V4.5a3 3 0 1 1 6 0V6" stroke="white" stroke-width="1.5"/></svg>
          <span style="color:#aaa;font-size:14px;">PIN</span>
        </div>
        <div style="padding:8px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">
          ${[1,2,3,4,5,6,7,8,9,'','0','⌫'].map(n=>`<div style="background:rgba(255,255,255,0.15);border-radius:4px;height:40px;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;font-weight:300;">${n}</div>`).join('')}
        </div>
      </div>
      <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:8px;cursor:pointer;">Sign-in options</div>
    </body></html>`
  },
  {
    file: 'turn-pc-on-and-off-step-4.png', w: 480, h: 560,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:480px;height:560px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:flex-end;justify-content:center;padding-bottom:60px;}</style></head><body>
      <div style="background:rgba(30,30,30,0.95);backdrop-filter:blur(20px);border-radius:12px;padding:20px;width:360px;box-shadow:0 20px 60px #000c;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
          ${['📌 Pinned','All apps','Recent files','Settings'].map(l=>`<div style="background:rgba(255,255,255,0.08);border-radius:6px;padding:10px;color:#ccc;font-size:12px;">${l}</div>`).join('')}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:12px;display:flex;align-items:center;gap:12px;">
          <div style="width:32px;height:32px;background:#0078d4;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">👤</div>
          <div style="flex:1;color:#ccc;font-size:13px;">Bailey</div>
          <div style="background:#0078d4;border-radius:8px;padding:8px 12px;display:flex;align-items:center;gap:6px;cursor:pointer;">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="white" stroke-width="1.5"/><line x1="7" y1="2" x2="7" y2="5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div>
              <div style="color:white;font-size:11px;font-weight:600;">Power</div>
              <div style="display:flex;flex-direction:column;gap:2px;margin-top:4px;">
                <div style="color:#aaa;font-size:11px;padding:3px 6px;border-radius:3px;">😴 Sleep</div>
                <div style="color:white;font-size:11px;padding:3px 6px;border-radius:3px;background:rgba(255,255,255,0.15);">⏹ Shut Down</div>
                <div style="color:#aaa;font-size:11px;padding:3px 6px;border-radius:3px;">🔄 Restart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'turn-pc-on-and-off-step-5.png', w: 480, h: 420,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:480px;height:420px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:flex-end;justify-content:center;padding-bottom:60px;}</style></head><body>
      <div style="background:rgba(30,30,30,0.95);backdrop-filter:blur(20px);border-radius:12px;padding:16px;width:280px;box-shadow:0 20px 60px #000c;">
        <div style="color:#aaa;font-size:12px;padding:0 8px 8px;">Power options</div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <div style="color:#aaa;padding:10px 12px;border-radius:6px;font-size:13px;display:flex;align-items:center;gap:10px;">😴 Sleep</div>
          <div style="color:white;padding:10px 12px;border-radius:6px;font-size:13px;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);">
            <span>😴</span>
            <span style="font-weight:500;">Sleep</span>
            <span style="margin-left:auto;color:#0078d4;font-size:11px;">◄ highlighted</span>
          </div>
          <div style="color:#aaa;padding:10px 12px;border-radius:6px;font-size:13px;display:flex;align-items:center;gap:10px;">⏹ Shut Down</div>
          <div style="color:#aaa;padding:10px 12px;border-radius:6px;font-size:13px;display:flex;align-items:center;gap:10px;">🔄 Restart</div>
        </div>
      </div>
    </body></html>`
  },

  // ── connect-wifi-windows step 5 ────────────────────────────────────────────
  {
    file: 'connect-wifi-windows-step-5.png', w: 400, h: 80,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:400px;height:80px;background:#1a1a1a;display:flex;align-items:center;justify-content:flex-end;padding-right:16px;gap:10px;}</style></head><body>
      <div style="background:rgba(255,255,255,0.08);border-radius:6px;padding:4px 10px;color:#fff;font-size:11px;">HomeNetwork_5G — Connected, secured ✓</div>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M1 5 Q9 -1 17 5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M3.5 8 Q9 3.5 14.5 8" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M6 11 Q9 8 12 11" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <circle cx="9" cy="14" r="1.5" fill="white"/>
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="10" width="2" height="4" fill="white"/><rect x="5" y="7" width="2" height="7" fill="white"/><rect x="8" y="4" width="2" height="10" fill="white"/><rect x="11" y="1" width="2" height="13" fill="white"/></svg>
      <div style="text-align:right;color:white;font-size:10px;line-height:1.4;"><div>10:42 AM</div><div>4/1/2026</div></div>
    </body></html>`
  },

  // ── open-close-programs-windows ────────────────────────────────────────────
  {
    file: 'open-close-programs-windows-step-1.png', w: 600, h: 680,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:600px;height:680px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:flex-end;justify-content:center;padding-bottom:55px;}</style></head><body>
      <div style="background:rgba(30,30,30,0.97);backdrop-filter:blur(20px);border-radius:12px;padding:20px;width:500px;box-shadow:0 20px 60px #000c;">
        <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border-radius:8px;padding:8px 12px;margin-bottom:16px;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#aaa" stroke-width="1.5"/><line x1="9" y1="9" x2="13" y2="13" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/></svg>
          <span style="color:#aaa;font-size:13px;">Search apps, settings, files…</span>
        </div>
        <div style="color:#aaa;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Pinned</div>
        <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:16px;">
          ${[['E','#0078d4','Edge'],['W','#107c10','Word'],['X','#1d6b38','Excel'],['P','#c43e1c','PowerPoint'],['📁','#ffc83d','Files'],['⚙','#888','Settings'],['📷','#e74c3c','Photos'],['🎵','#e91e63','Groove'],['🗒','#ffb900','Notes'],['🖩','#0078d4','Calc'],['📧','#0078d4','Mail'],['📅','#0078d4','Calendar']].map(([i,c,n])=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:40px;height:40px;background:${c};border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;">${i}</div>
              <div style="color:#ccc;font-size:10px;text-align:center;">${n}</div>
            </div>`).join('')}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:12px;display:flex;align-items:center;gap:10px;">
          <div style="width:28px;height:28px;background:#0078d4;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;">👤</div>
          <span style="flex:1;color:#ccc;font-size:13px;">Bailey</span>
          <div style="color:#aaa;font-size:12px;">⏹ Power</div>
        </div>
      </div>
      ${TASKBAR_HTML}
    </body></html>`
  },
  {
    file: 'open-close-programs-windows-step-2.png', w: 1280, h: 720,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:1280px;height:720px;background:linear-gradient(135deg,#001a4d,#0052cc);position:relative;}</style></head><body>
      <!-- Desktop icons -->
      <div style="position:absolute;top:20px;left:20px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div style="width:48px;height:48px;background:#ffc83d;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px;">📁</div>
          <span style="color:white;font-size:11px;text-shadow:0 1px 3px #000;">This PC</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div style="width:48px;height:48px;background:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px;">🗑</div>
          <span style="color:white;font-size:11px;text-shadow:0 1px 3px #000;">Recycle Bin</span>
        </div>
        <!-- Highlighted icon with callout -->
        <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div style="width:48px;height:48px;background:#0078d4;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 0 0 3px #ffff00,0 0 16px #0078d4;">📄</div>
          <span style="color:white;font-size:11px;text-shadow:0 1px 3px #000;font-weight:600;">Budget.xlsx</span>
          <div style="position:absolute;top:-24px;left:56px;background:#ffff00;color:#000;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;white-space:nowrap;">Double-click to open →</div>
        </div>
      </div>
      ${TASKBAR_HTML}
    </body></html>`
  },
  {
    file: 'open-close-programs-windows-step-3.png', w: 1280, h: 80,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:1280px;height:80px;background:#1a1a1a;display:flex;align-items:center;padding:0 8px;gap:4px;}</style></head><body>
      <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="1" y="10.5" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#0078d4"/></svg>
      </div>
      <div style="width:260px;height:36px;background:#2d2d2d;border-radius:18px;display:flex;align-items:center;padding:0 12px;gap:8px;color:#aaa;font-size:13px;margin-right:40px;">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#aaa" stroke-width="1.5"/><line x1="9" y1="9" x2="13" y2="13" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/></svg>
        Search
      </div>
      <!-- Pinned icons with highlight on Word -->
      ${[['E','#0078d4'],['W','#107c10'],['X','#1d6b38'],['📁','#ffc83d'],['⚙','#555'],['📷','#e74c3c']].map(([i,c],idx)=>`
        <div style="position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:6px;background:${idx===1?'rgba(255,255,255,0.15)':'transparent'};">
          <div style="width:28px;height:28px;background:${c};border-radius:5px;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:700;">${i}</div>
          ${idx===1?`<div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:4px;height:4px;background:#0078d4;border-radius:50%;"></div><div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);background:#ffff00;color:#000;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;">Click to switch</div>`:''}
        </div>`).join('')}
    </body></html>`
  },
  {
    file: 'open-close-programs-windows-step-4.png', w: 800, h: 500,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:800px;height:500px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:680px;height:420px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:40px;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid #ddd;">
          <div style="display:flex;gap:6px;">
            <div style="width:12px;height:12px;border-radius:50%;background:#ddd;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#ddd;"></div>
            <!-- X button highlighted -->
            <div style="position:relative;width:24px;height:24px;background:#c42b1c;border-radius:3px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #ffff00;">
              <span style="color:white;font-size:12px;font-weight:700;">✕</span>
              <div style="position:absolute;top:-22px;right:-20px;background:#ffff00;color:#000;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600;white-space:nowrap;">Click ✕ to close</div>
            </div>
          </div>
          <span style="color:#333;font-size:13px;font-weight:500;margin-left:8px;">Notepad — Budget.txt</span>
        </div>
        <div style="padding:20px;font-size:13px;color:#333;line-height:1.8;font-family:Consolas,monospace;">
          January expenses:<br/>
          Rent: £950<br/>
          Groceries: £180<br/>
          Utilities: £85<br/>
          <span style="background:#b3d9ff;padding:1px 0;">Total: £1,215</span>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'open-close-programs-windows-step-5.png', w: 780, h: 500,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:780px;height:500px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#202020;border-radius:8px;width:680px;overflow:hidden;box-shadow:0 20px 60px #000c;">
        <div style="background:#2d2d2d;height:40px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid #444;">
          <span style="color:#fff;font-size:13px;font-weight:500;">Task Manager</span>
          <span style="margin-left:auto;color:#aaa;font-size:11px;">Ctrl+Alt+Delete</span>
        </div>
        <div style="padding:12px 16px;display:flex;gap:12px;border-bottom:1px solid #333;">
          ${['Processes','Performance','App history','Startup'].map((t,i)=>`<div style="color:${i===0?'#0078d4':'#aaa'};font-size:12px;padding-bottom:8px;${i===0?'border-bottom:2px solid #0078d4;':''}">${t}</div>`).join('')}
        </div>
        <div style="padding:8px 16px;">
          <div style="display:grid;grid-template-columns:1fr 80px 80px 80px;color:#888;font-size:11px;padding:4px 0;border-bottom:1px solid #333;text-transform:uppercase;">
            <span>Name</span><span>CPU</span><span>Memory</span><span>Status</span>
          </div>
          ${[['Chrome (Not responding)','45%','890 MB','⚠ Frozen',true],['Notepad','0%','12 MB','Running',false],['File Explorer','1%','48 MB','Running',false],['System','2%','140 MB','Running',false]].map(([n,c,m,s,sel])=>`
            <div style="display:grid;grid-template-columns:1fr 80px 80px 80px;padding:8px 0;border-radius:4px;background:${sel?'rgba(0,120,212,0.25)':'transparent'};border:${sel?'1px solid #0078d466':'1px solid transparent'};">
              <span style="color:${sel?'#fff':'#ccc'};font-size:12px;display:flex;align-items:center;gap:6px;"><div style="width:16px;height:16px;background:#${sel?'4488ff':'555'};border-radius:2px;flex-shrink:0;"></div>${n}</span>
              <span style="color:${sel?'#f90':'#aaa'};font-size:12px;">${c}</span>
              <span style="color:#aaa;font-size:12px;">${m}</span>
              <span style="color:${sel?'#f90':'#aaa'};font-size:12px;">${s}</span>
            </div>`).join('')}
        </div>
        <div style="padding:12px 16px;display:flex;justify-content:flex-end;border-top:1px solid #333;">
          <div style="background:#0078d4;color:white;padding:8px 20px;border-radius:4px;font-size:12px;font-weight:600;cursor:pointer;">End Task</div>
        </div>
      </div>
    </body></html>`
  },

  // ── use-taskbar-windows ────────────────────────────────────────────────────
  {
    file: 'use-taskbar-windows-step-1.png', w: 1280, h: 80,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:1280px;height:80px;background:#1a1a1a;position:relative;}</style></head><body>
      ${TASKBAR_HTML}
      <!-- Labels -->
      <div style="position:absolute;bottom:52px;left:4px;color:#ffff00;font-size:9px;font-weight:600;background:rgba(0,0,0,0.7);padding:1px 4px;border-radius:2px;">① Start</div>
      <div style="position:absolute;bottom:52px;left:52px;color:#ffff00;font-size:9px;font-weight:600;background:rgba(0,0,0,0.7);padding:1px 4px;border-radius:2px;">② Search</div>
      <div style="position:absolute;bottom:52px;left:380px;color:#ffff00;font-size:9px;font-weight:600;background:rgba(0,0,0,0.7);padding:1px 4px;border-radius:2px;">③ Pinned Apps</div>
      <div style="position:absolute;bottom:52px;right:4px;color:#ffff00;font-size:9px;font-weight:600;background:rgba(0,0,0,0.7);padding:1px 4px;border-radius:2px;">④ System Tray</div>
    </body></html>`
  },
  {
    file: 'use-taskbar-windows-step-2.png', w: 340, h: 340,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:340px;height:340px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <!-- Context menu -->
      <div style="background:#2d2d2d;border-radius:6px;padding:4px;box-shadow:0 8px 32px #000c;min-width:200px;">
        <div style="padding:8px 14px 4px;color:#aaa;font-size:11px;font-weight:600;border-bottom:1px solid #444;margin-bottom:4px;">Notepad</div>
        <div style="padding:6px 14px;color:#ddd;font-size:13px;display:flex;align-items:center;gap:10px;border-radius:4px;background:rgba(255,255,255,0.08);">
          📌 <span style="font-weight:600;color:white;">Pin to taskbar</span>
        </div>
        <div style="padding:6px 14px;color:#aaa;font-size:13px;display:flex;align-items:center;gap:10px;">📌 Pin to Start</div>
        <div style="height:1px;background:#444;margin:4px 0;"></div>
        <div style="padding:6px 14px;color:#aaa;font-size:13px;display:flex;align-items:center;gap:10px;">📂 Open file location</div>
        <div style="padding:6px 14px;color:#aaa;font-size:13px;display:flex;align-items:center;gap:10px;">⚙ Properties</div>
      </div>
    </body></html>`
  },
  {
    file: 'use-taskbar-windows-step-3.png', w: 1280, h: 80,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:1280px;height:80px;background:#1a1a1a;display:flex;align-items:center;padding:0 8px;gap:4px;}</style></head><body>
      <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="1" y="10.5" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#0078d4"/></svg>
      </div>
      <div style="width:260px;height:36px;background:#2d2d2d;border-radius:18px;display:flex;align-items:center;padding:0 12px;gap:8px;color:#aaa;font-size:13px;margin-right:40px;">🔍 Search</div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;">
        ${[['E','#0078d4',false],['W','#107c10',true],['📁','#ffc83d',false],['⚙','#555',true]].map(([i,c,active])=>`
          <div style="position:relative;width:44px;height:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:6px;background:${active?'rgba(255,255,255,0.1)':'transparent'};">
            <div style="width:28px;height:28px;background:${c};border-radius:5px;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:700;">${i}</div>
            ${active?`<div style="position:absolute;bottom:3px;width:18px;height:3px;background:#0078d4;border-radius:2px;"></div>`:''}
          </div>`).join('')}
        <!-- Hover preview above Word -->
        <div style="position:relative;">
          <div style="position:absolute;bottom:52px;left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid #444;border-radius:6px;padding:6px 10px;width:140px;box-shadow:0 4px 16px #000a;">
            <div style="font-size:11px;color:#aaa;margin-bottom:4px;">Microsoft Word</div>
            <div style="background:#fff;border-radius:3px;height:60px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#333;">Document1.docx</div>
          </div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:4px;color:#fff;font-size:11px;">
        <span>10:42 AM</span>
      </div>
    </body></html>`
  },
  {
    file: 'use-taskbar-windows-step-4.png', w: 360, h: 280,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:360px;height:280px;background:#1a1a1a;display:flex;align-items:flex-end;justify-content:flex-end;padding-right:8px;padding-bottom:52px;}</style></head><body>
      <!-- Quick Settings flyout -->
      <div style="background:#2a2a2a;border-radius:10px;padding:16px;width:320px;box-shadow:0 -4px 24px #000c;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
          ${[['📶','Wi-Fi','HomeNet','#0078d4'],['🔵','Bluetooth','On','#0078d4'],['✈','Airplane','Off','#333'],['🔆','Brightness','70%','#555'],['🌙','Night Light','On','#f0a500'],['♿','Accessibility','—','#333']].map(([i,n,v,bg])=>`
            <div style="background:${bg};border-radius:8px;padding:10px 8px;display:flex;flex-direction:column;gap:3px;">
              <span style="font-size:18px;">${i}</span>
              <span style="color:white;font-size:11px;font-weight:600;">${n}</span>
              <span style="color:rgba(255,255,255,0.6);font-size:10px;">${v}</span>
            </div>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="10" width="2" height="2" fill="white"/><rect x="5" y="7" width="2" height="5" fill="white"/><rect x="8" y="4" width="2" height="8" fill="white"/><rect x="11" y="1" width="2" height="11" fill="white"/></svg>
          <input type="range" min="0" max="100" value="70" style="flex:1;accent-color:#0078d4;">
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'use-taskbar-windows-step-5.png', w: 1280, h: 720,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:1280px;height:720px;background:#111;position:relative;overflow:hidden;}</style></head><body>
      <!-- Task View overlay -->
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.7);display:flex;flex-direction:column;align-items:center;padding:60px 40px 40px;">
        <div style="color:#fff;font-size:14px;margin-bottom:24px;opacity:0.7;">All desktops — Win + Tab</div>
        <div style="display:flex;gap:20px;margin-bottom:32px;">
          ${['Desktop 1 (current)','Desktop 2','+ New desktop'].map((d,i)=>`
            <div style="background:${i===0?'rgba(0,120,212,0.3)':'rgba(255,255,255,0.08)'};border:${i===0?'2px solid #0078d4':'2px solid rgba(255,255,255,0.1)'};border-radius:8px;padding:8px 16px;color:${i===0?'#0078d4':'#aaa'};font-size:12px;">${d}</div>`).join('')}
        </div>
        <div style="display:flex;gap:16px;">
          ${[['📄 Budget.xlsx','#107c10'],['🌐 Edge','#0078d4'],['📁 Documents','#ffc83d']].map(([t,c])=>`
            <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;width:200px;height:140px;display:flex;flex-direction:column;overflow:hidden;">
              <div style="background:${c};height:4px;"></div>
              <div style="flex:1;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:11px;">${t}</div>
            </div>`).join('')}
        </div>
      </div>
      ${TASKBAR_HTML}
    </body></html>`
  },

  // ── take-screenshot-windows ────────────────────────────────────────────────
  {
    file: 'take-screenshot-windows-step-1.png', w: 640, h: 200,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:640px;height:200px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:10px;padding:24px 32px;display:flex;align-items:center;gap:12px;">
        <div style="display:flex;gap:6px;">
          ${['Ctrl','Alt','Shift','PrtScn'].map((k,i)=>
            `<div style="background:${i===3?'#2a4a8a':i<2?'#2a2a2a':'#2a2a2a'};border:${i===3?'2px solid #5588ff':'1px solid #444'};border-radius:6px;padding:8px 12px;color:${i===3?'#fff':'#ccc'};font-size:12px;font-weight:600;box-shadow:0 3px 0 ${i===3?'#1a3a7a':'#222'};">${k}</div>`
          ).join('<span style="color:#555;font-size:18px;align-self:center;">+</span>')}
        </div>
        <div style="color:#0078d4;font-size:12px;font-weight:600;">→ Copies entire screen to clipboard</div>
      </div>
    </body></html>`
  },
  {
    file: 'take-screenshot-windows-step-2.png', w: 680, h: 440,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:440px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:36px;display:flex;align-items:center;padding:0 12px;border-bottom:1px solid #ddd;gap:8px;font-size:12px;color:#333;">
          <span>📁</span><span>This PC › Pictures › Screenshots</span>
        </div>
        <!-- Toolbar -->
        <div style="background:#faf9f8;height:44px;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid #e5e5e5;">
          <div style="background:#0078d4;color:white;padding:6px 12px;border-radius:4px;font-size:12px;font-weight:600;">+ New ▾</div>
          <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:#333;border:1px solid #ddd;">Sort ▾</div>
          <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:#333;border:1px solid #ddd;">View ▾</div>
        </div>
        <div style="padding:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
          ${['Screenshot 2026-04-01 10.42.00','Screenshot 2026-03-31 15.22.11','Screenshot 2026-03-30 09.05.44'].map(n=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#0052cc,#00b4d8);border-radius:4px;border:2px solid #ddd;"></div>
              <span style="font-size:10px;color:#555;text-align:center;word-break:break-all;">${n}.png</span>
            </div>`).join('')}
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0.4;">
            <div style="width:100%;aspect-ratio:16/9;border:2px dashed #ccc;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:20px;">+</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'take-screenshot-windows-step-3.png', w: 900, h: 280,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:900px;height:280px;background:linear-gradient(135deg,#001a4d,#0052cc);position:relative;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <!-- Dimmed overlay with selection rectangle -->
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.4);"></div>
      <!-- Selection area (bright) -->
      <div style="position:absolute;left:200px;top:60px;width:500px;height:160px;background:transparent;border:2px solid #fff;box-shadow:0 0 0 9999px rgba(0,0,0,0.35);"></div>
      <!-- Snipping toolbar at top -->
      <div style="position:absolute;top:16px;left:50%;transform:translateX(-50%);background:#2d2d2d;border-radius:8px;display:flex;align-items:center;gap:2px;padding:4px;box-shadow:0 4px 16px #000a;">
        ${['⬜ Rectangular','⭕ Freeform','🪟 Window','🖥 Full Screen'].map((m,i)=>`
          <div style="padding:6px 12px;border-radius:5px;color:${i===0?'white':'#aaa'};font-size:12px;background:${i===0?'#0078d4':'transparent'};">${m}</div>`).join('')}
        <div style="width:1px;height:24px;background:#444;margin:0 4px;"></div>
        <div style="padding:6px 12px;border-radius:5px;color:#aaa;font-size:12px;">⏱ Delay ▾</div>
        <div style="padding:6px 12px;border-radius:5px;color:white;font-size:12px;background:#c42b1c;">✕</div>
        <div style="padding:6px 12px;border-radius:5px;color:white;font-size:12px;background:#0078d4;">📋 Copy</div>
      </div>
      <div style="position:absolute;color:white;font-size:11px;top:62px;left:202px;background:rgba(0,0,0,0.6);padding:2px 6px;border-radius:3px;">500 × 160</div>
    </body></html>`
  },
  {
    file: 'take-screenshot-windows-step-4.png', w: 640, h: 200,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:640px;height:200px;background:#111;display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:10px;padding:24px 32px;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="display:flex;align-items:center;gap:8px;">
          ${[['Alt','blue'],['PrtScn','yellow']].map(([k,col])=>
            `<div style="background:${col==='yellow'?'#4a4a00':'#1a2a4a'};border:2px solid ${col==='yellow'?'#ffcc00':'#4488ff'};border-radius:6px;padding:8px 14px;color:${col==='yellow'?'#ffcc00':'#88aaff'};font-size:13px;font-weight:700;box-shadow:0 3px 0 ${col==='yellow'?'#2a2a00':'#0a1a3a'};">${k}</div>`
          ).join('<span style="color:#555;font-size:18px;">+</span>')}
        </div>
        <div style="color:#aaa;font-size:12px;">Captures the active window only</div>
      </div>
    </body></html>`
  },
  {
    file: 'take-screenshot-windows-step-5.png', w: 780, h: 520,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:780px;height:520px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:680px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:40px;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid #ddd;font-size:12px;color:#333;">
          <span>✂ Snipping Tool</span>
          <div style="margin-left:auto;display:flex;gap:6px;color:#888;font-size:11px;">
            ${['New','Delay','Edit'].map(t=>`<div style="padding:4px 10px;border:1px solid #ddd;border-radius:4px;">${t}</div>`).join('')}
          </div>
        </div>
        <!-- Screenshot content area -->
        <div style="background:#e8e8e8;height:340px;position:relative;display:flex;align-items:center;justify-content:center;">
          <div style="background:white;border-radius:4px;padding:20px 24px;box-shadow:0 4px 16px rgba(0,0,0,0.15);font-size:12px;color:#333;line-height:1.8;">
            This is a captured screenshot — you can annotate it here
          </div>
          <!-- Annotation tools -->
          <div style="position:absolute;left:12px;top:12px;background:rgba(0,0,0,0.8);border-radius:6px;padding:8px;display:flex;flex-direction:column;gap:6px;">
            ${['✏','→','⬜','T','🔵'].map(t=>`<div style="color:white;font-size:14px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:4px;background:rgba(255,255,255,0.1);">${t}</div>`).join('')}
          </div>
        </div>
        <div style="background:#faf9f8;height:44px;display:flex;align-items:center;justify-content:flex-end;padding:0 12px;gap:8px;border-top:1px solid #e5e5e5;">
          <div style="background:#0078d4;color:white;padding:6px 14px;border-radius:4px;font-size:12px;font-weight:600;">Save As</div>
          <div style="background:#0078d4;color:white;padding:6px 14px;border-radius:4px;font-size:12px;font-weight:600;">Share</div>
        </div>
      </div>
    </body></html>`
  },

  // ── copy-paste-windows ─────────────────────────────────────────────────────
  {
    file: 'copy-paste-windows-step-1.png', w: 680, h: 400,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:400px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:36px;display:flex;align-items:center;padding:0 12px;gap:8px;font-size:12px;color:#333;border-bottom:1px solid #ddd;"><span>📄</span> Notepad — notes.txt</div>
        <div style="padding:20px;font-size:14px;color:#333;line-height:2;font-family:Consolas,monospace;">
          Shopping list:<br>
          <span style="background:#b3d9ff;padding:2px 0;">Bread, butter, milk, eggs</span><br>
          Coffee beans<br>
          Orange juice
        </div>
        <div style="background:#e8f4ff;border-radius:4px;margin:8px 20px 20px;padding:6px 10px;font-size:11px;color:#0052cc;">
          💡 Click and drag over text to select it (shown in blue)
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'copy-paste-windows-step-2.png', w: 500, h: 380,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:500px;height:380px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="position:relative;">
        <div style="background:white;border-radius:4px;padding:20px;font-size:14px;color:#333;line-height:2;font-family:Consolas,monospace;min-width:240px;">
          <span style="background:#b3d9ff;padding:2px 0;">Bread, butter, milk, eggs</span>
        </div>
        <!-- Right-click context menu -->
        <div style="position:absolute;top:30px;left:120px;background:white;border:1px solid #ccc;border-radius:4px;box-shadow:0 8px 24px rgba(0,0,0,0.2);width:180px;overflow:hidden;">
          <div style="padding:6px 14px;font-size:13px;color:#333;display:flex;align-items:center;gap:10px;background:#e8f0fe;">
            <span>📋</span><span style="font-weight:600;color:#0052cc;">Copy</span>
            <span style="margin-left:auto;color:#888;font-size:11px;">Ctrl+C</span>
          </div>
          <div style="padding:6px 14px;font-size:13px;color:#555;display:flex;align-items:center;gap:10px;">
            <span>✂</span><span>Cut</span>
            <span style="margin-left:auto;color:#888;font-size:11px;">Ctrl+X</span>
          </div>
          <div style="height:1px;background:#eee;"></div>
          <div style="padding:6px 14px;font-size:13px;color:#555;display:flex;align-items:center;gap:10px;"><span>🔗</span><span>Share</span></div>
          <div style="padding:6px 14px;font-size:13px;color:#555;display:flex;align-items:center;gap:10px;"><span>🔍</span><span>Search</span></div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'copy-paste-windows-step-3.png', w: 500, h: 380,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:500px;height:380px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="position:relative;">
        <div style="background:white;border-radius:4px;padding:20px;font-size:14px;color:#333;line-height:2;font-family:Consolas,monospace;min-width:260px;">
          Pasted here:<br>
          <span style="background:#b3d9ff;padding:2px 0;animation:blink 1s step-end infinite;">Bread, butter, milk, eggs</span>
        </div>
        <div style="position:absolute;top:30px;left:110px;background:white;border:1px solid #ccc;border-radius:4px;box-shadow:0 8px 24px rgba(0,0,0,0.2);width:180px;overflow:hidden;">
          <div style="padding:6px 14px;font-size:13px;color:#333;display:flex;align-items:center;gap:10px;">
            <span>📋</span><span>Copy</span>
            <span style="margin-left:auto;color:#888;font-size:11px;">Ctrl+C</span>
          </div>
          <div style="padding:6px 14px;font-size:13px;color:#333;display:flex;align-items:center;gap:10px;background:#e8f0fe;">
            <span>📌</span><span style="font-weight:600;color:#0052cc;">Paste</span>
            <span style="margin-left:auto;color:#888;font-size:11px;">Ctrl+V</span>
          </div>
          <div style="height:1px;background:#eee;"></div>
          <div style="padding:6px 14px;font-size:13px;color:#555;display:flex;align-items:center;gap:10px;"><span>✂</span><span>Paste as plain text</span></div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'copy-paste-windows-step-4.png', w: 500, h: 320,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:500px;height:320px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;padding:24px;box-shadow:0 20px 60px #000a;width:380px;">
        <div style="font-size:13px;color:#333;margin-bottom:16px;font-weight:600;">Cut — moves item from source to destination</div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:#fff3f3;border:1px solid #ffaaaa;border-radius:6px;padding:10px;flex:1;text-align:center;font-size:12px;color:#666;">
            <div style="font-size:11px;color:#aaa;margin-bottom:4px;">Before (Ctrl+X)</div>
            <div style="text-decoration:line-through;color:#cc0000;">📄 report_draft.txt</div>
          </div>
          <div style="font-size:20px;color:#0078d4;">→</div>
          <div style="background:#f0fff0;border:1px solid #aaffaa;border-radius:6px;padding:10px;flex:1;text-align:center;font-size:12px;color:#333;">
            <div style="font-size:11px;color:#aaa;margin-bottom:4px;">After (Ctrl+V)</div>
            <div>📄 report_draft.txt</div>
          </div>
        </div>
        <div style="background:#fff8e1;border-radius:4px;padding:8px;font-size:11px;color:#7a5c00;">
          ⚡ Shortcut: <strong>Ctrl+X</strong> to cut, then <strong>Ctrl+V</strong> to paste in new location
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'copy-paste-windows-step-5.png', w: 500, h: 460,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:500px;height:460px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:#1e1e1e;border-radius:8px;width:380px;overflow:hidden;box-shadow:0 20px 60px #000c;">
        <div style="background:#2d2d2d;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #444;">
          <span style="color:#fff;font-size:13px;font-weight:600;">📋 Clipboard history</span>
          <span style="color:#aaa;font-size:11px;">Win + V</span>
        </div>
        ${['Bread, butter, milk, eggs','Budget spreadsheet link','Meeting at 3pm Tuesday','Password: ••••••••••','https://example.com/document'].map((t,i)=>`
          <div style="padding:10px 14px;border-bottom:1px solid #333;display:flex;align-items:center;gap:8px;background:${i===0?'rgba(0,120,212,0.15)':'transparent'};">
            <span style="color:#aaa;font-size:11px;width:16px;">${i+1}</span>
            <span style="color:#ddd;font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t}</span>
            <span style="color:#666;font-size:10px;">📋</span>
          </div>`).join('')}
        <div style="padding:10px 14px;color:#aaa;font-size:11px;text-align:center;">Click any item to paste it</div>
      </div>
    </body></html>`
  },

  // ── save-file-windows ──────────────────────────────────────────────────────
  {
    file: 'save-file-windows-step-1.png', w: 680, h: 400,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:400px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#107c10;height:36px;display:flex;align-items:center;padding:0 12px;gap:8px;font-size:12px;color:white;">
          <span>📄</span> Budget.xlsx — Microsoft Excel
          <div style="margin-left:auto;display:flex;gap:2px;">
            <div style="width:32px;height:28px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7);font-size:11px;">─</div>
            <div style="width:32px;height:28px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7);font-size:11px;">⊡</div>
            <div style="width:32px;height:28px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.9);font-size:11px;">✕</div>
          </div>
        </div>
        <div style="background:#217346;padding:6px 12px;display:flex;gap:2px;">
          ${['File','Home','Insert','Page Layout','Formulas','Data','Review'].map(t=>`<div style="padding:4px 10px;color:rgba(255,255,255,0.8);font-size:12px;">${t}</div>`).join('')}
        </div>
        <div style="padding:20px;font-size:12px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;background:#e8f4ff;border-radius:6px;padding:8px 12px;border:1px solid #b3d9ff;">
            <span style="font-size:16px;">💾</span>
            <span style="color:#0052cc;font-weight:600;">Saved</span>
            <span style="color:#555;font-size:11px;">— last saved just now</span>
            <span style="margin-left:auto;color:#888;font-size:11px;">Ctrl+S</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;color:#333;">
            ${['A','B','C','D'].map(c=>`<div style="background:#e8e8e8;padding:4px 8px;font-size:11px;font-weight:600;text-align:center;border:1px solid #ccc;">${c}</div>`).join('')}
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">Month</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">Income</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">Expenses</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">Balance</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">January</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">£2,500</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;">£1,215</div>
            <div style="padding:4px 8px;font-size:11px;border:1px solid #e0e0e0;color:#107c10;">£1,285</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'save-file-windows-step-2.png', w: 780, h: 540,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:780px;height:540px;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:680px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:40px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid #ddd;font-size:13px;color:#333;font-weight:600;">Save As</div>
        <div style="display:flex;height:400px;">
          <!-- Sidebar -->
          <div style="width:160px;background:#faf9f8;border-right:1px solid #e5e5e5;padding:8px;">
            ${['Recent','Desktop','Documents','Downloads','Pictures','Music'].map((l,i)=>`
              <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:${i===2?'#0078d4':'#555'};background:${i===2?'#e8f0fe':'transparent'};font-weight:${i===2?'600':'normal'};">${l}</div>`).join('')}
          </div>
          <!-- Main area -->
          <div style="flex:1;padding:12px;">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
              ${['Work 📁','Personal 📁','Tax 2025 📁','Archive 📁'].map(f=>`
                <div style="border:1px solid #e5e5e5;border-radius:4px;padding:8px;text-align:center;font-size:11px;color:#555;">${f}</div>`).join('')}
            </div>
          </div>
        </div>
        <div style="background:#f3f3f3;padding:10px 16px;border-top:1px solid #ddd;display:flex;align-items:center;gap:8px;">
          <div style="display:flex;flex-direction:column;flex:1;gap:6px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:12px;color:#555;width:80px;">File name:</span>
              <input style="flex:1;border:1px solid #0078d4;border-radius:3px;padding:4px 8px;font-size:12px;" value="Budget_March_2026">
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:12px;color:#555;width:80px;">Save as type:</span>
              <select style="flex:1;border:1px solid #ccc;border-radius:3px;padding:4px 8px;font-size:12px;"><option>Excel Workbook (*.xlsx)</option></select>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-left:8px;">
            <div style="background:#0078d4;color:white;padding:6px 18px;border-radius:4px;font-size:12px;font-weight:600;text-align:center;">Save</div>
            <div style="background:white;color:#333;padding:6px 18px;border-radius:4px;font-size:12px;border:1px solid #ccc;text-align:center;">Cancel</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'save-file-windows-step-3.png', w: 780, h: 540,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:780px;height:540px;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:680px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:40px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid #ddd;font-size:13px;color:#333;font-weight:600;">Save As — Choose location</div>
        <div style="display:flex;height:380px;">
          <div style="width:160px;background:#faf9f8;border-right:1px solid #e5e5e5;padding:8px;">
            ${[['🖥 Desktop',''],['📄 Documents','0078d4'],['⬇ Downloads',''],['☁ OneDrive',''],['🖼 Pictures',''],['🎵 Music','']].map(([l,c])=>`
              <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:${c?'#'+c:'#555'};background:${c?'#e8f0fe':'transparent'};font-weight:${c?'600':'normal'};">${l}</div>`).join('')}
          </div>
          <div style="flex:1;padding:12px;">
            <div style="font-size:11px;color:#888;margin-bottom:8px;">📂 Documents</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
              ${['Work Projects 📁','Personal Finance 📁','Family Photos 📁','Receipts 2026 📁','Tax Returns 📁'].map(f=>`
                <div style="border:1px solid #e5e5e5;border-radius:4px;padding:10px 8px;text-align:center;font-size:11px;color:#555;">${f}</div>`).join('')}
              <div style="border:2px dashed #0078d4;border-radius:4px;padding:10px 8px;text-align:center;font-size:11px;color:#0078d4;font-weight:600;">+ New folder</div>
            </div>
          </div>
        </div>
        <div style="background:#f3f3f3;padding:10px 16px;border-top:1px solid #ddd;display:flex;align-items:center;gap:8px;">
          <span style="font-size:12px;color:#555;">Save in:</span>
          <div style="background:white;border:1px solid #ccc;border-radius:3px;padding:4px 12px;font-size:12px;color:#333;">📄 Documents</div>
          <div style="margin-left:auto;display:flex;gap:6px;">
            <div style="background:#0078d4;color:white;padding:6px 18px;border-radius:4px;font-size:12px;font-weight:600;">Save here</div>
            <div style="background:white;color:#333;padding:6px 18px;border-radius:4px;font-size:12px;border:1px solid #ccc;">Cancel</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'save-file-windows-step-4.png', w: 680, h: 360,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:360px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;padding:24px;box-shadow:0 20px 60px #000a;">
        <div style="font-size:14px;color:#333;font-weight:600;margin-bottom:16px;">Good file naming examples</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${[['❌ Bad','Untitled.docx','#ffebee','#c62828'],['❌ Bad','scan001.pdf','#ffebee','#c62828'],['✓ Good','NHS_Appointment_Jan2026.pdf','#e8f5e9','#2e7d32'],['✓ Good','Budget_March_2026.xlsx','#e8f5e9','#2e7d32'],['✓ Good','Holiday_Photos_2026_Italy.zip','#e8f5e9','#2e7d32']].map(([status,name,bg,color])=>`
            <div style="background:${bg};border-radius:6px;padding:8px 14px;display:flex;align-items:center;gap:10px;">
              <span style="color:${color};font-weight:700;font-size:13px;">${status}</span>
              <code style="font-size:12px;color:#333;font-family:Consolas,monospace;">${name}</code>
            </div>`).join('')}
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'save-file-windows-step-5.png', w: 680, h: 380,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:380px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#107c10;height:36px;display:flex;align-items:center;padding:0 12px;font-size:12px;color:white;gap:8px;">
          <span>📄</span> My Document — Word
          <div style="margin-left:auto;display:flex;align-items:center;gap:8px;">
            <div style="display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.2);border-radius:4px;padding:3px 8px;">
              <div style="width:10px;height:10px;border-radius:50%;background:#a8e6a3;"></div>
              <span style="font-size:11px;">Saved to OneDrive ✓</span>
            </div>
          </div>
        </div>
        <div style="background:#217346;padding:4px 12px;display:flex;gap:2px;">
          ${['File','Home','Insert','Layout','Review'].map(t=>`<div style="padding:3px 8px;color:rgba(255,255,255,0.8);font-size:11px;">${t}</div>`).join('')}
        </div>
        <div style="padding:20px;font-size:13px;color:#333;line-height:1.8;">
          <p style="margin-bottom:8px;">Dear Team,</p>
          <p style="margin-bottom:8px;">Here is the monthly update for March 2026...</p>
        </div>
        <div style="background:#f0f7f0;padding:8px 20px;border-top:1px solid #e0e0e0;display:flex;align-items:center;gap:8px;font-size:11px;color:#555;">
          <div style="width:8px;height:8px;border-radius:50%;background:#107c10;"></div>
          AutoSave is ON — changes saved every 30 seconds to OneDrive
        </div>
      </div>
    </body></html>`
  },

  // ── create-folder-windows ──────────────────────────────────────────────────
  {
    file: 'create-folder-windows-step-1.png', w: 560, h: 380,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:560px;height:380px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="position:relative;">
        <!-- Desktop icons in background -->
        <div style="display:flex;flex-direction:column;gap:12px;opacity:0.4;margin-right:40px;">
          <div style="text-align:center;color:white;font-size:11px;"><div style="font-size:32px;">📁</div>This PC</div>
          <div style="text-align:center;color:white;font-size:11px;"><div style="font-size:32px;">🗑</div>Recycle Bin</div>
        </div>
        <!-- Context menu -->
        <div style="background:#2d2d2d;border-radius:6px;box-shadow:0 8px 32px #000c;width:220px;overflow:hidden;">
          <div style="padding:6px 14px;color:#aaa;font-size:13px;display:flex;align-items:center;gap:10px;">🔄 Refresh</div>
          <div style="height:1px;background:#444;"></div>
          <div style="padding:6px 14px;font-size:13px;color:#aaa;display:flex;align-items:center;gap:10px;">⚙ Personalize</div>
          <div style="height:1px;background:#444;"></div>
          <!-- New submenu -->
          <div style="padding:6px 14px;font-size:13px;color:#ddd;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);">
            📄 New <span style="margin-left:auto;">▶</span>
          </div>
          <div style="margin-left:12px;background:#383838;border-radius:4px;overflow:hidden;">
            <div style="padding:6px 14px;font-size:13px;color:white;display:flex;align-items:center;gap:10px;background:rgba(0,120,212,0.3);border:1px solid #0078d4;">
              📁 Folder
            </div>
            <div style="padding:6px 14px;font-size:13px;color:#aaa;display:flex;align-items:center;gap:10px;">📄 Text Document</div>
            <div style="padding:6px 14px;font-size:13px;color:#aaa;display:flex;align-items:center;gap:10px;">🔗 Shortcut</div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-windows-step-2.png', w: 840, h: 520,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:840px;height:520px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:740px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:36px;display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid #ddd;font-size:12px;color:#333;">
          ← → ↑ 📁 Documents
        </div>
        <!-- Toolbar -->
        <div style="background:#faf9f8;height:44px;display:flex;align-items:center;padding:0 12px;gap:6px;border-bottom:1px solid #e5e5e5;">
          <div style="background:#0078d4;color:white;padding:6px 12px;border-radius:4px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">
            + New <span style="opacity:0.7;">▾</span>
          </div>
          <!-- Dropdown showing Folder option highlighted -->
          <div style="position:relative;">
            <div style="position:absolute;top:100%;left:0;background:white;border:1px solid #ccc;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,0.15);width:160px;z-index:10;">
              <div style="padding:6px 12px;font-size:12px;color:#0078d4;font-weight:600;background:#e8f0fe;display:flex;align-items:center;gap:8px;">📁 Folder</div>
              <div style="padding:6px 12px;font-size:12px;color:#555;display:flex;align-items:center;gap:8px;">📄 Text Document</div>
              <div style="padding:6px 12px;font-size:12px;color:#555;display:flex;align-items:center;gap:8px;">🔗 Shortcut</div>
            </div>
          </div>
          <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:#333;border:1px solid #ddd;">Sort ▾</div>
          <div style="padding:6px 10px;border-radius:4px;font-size:12px;color:#333;border:1px solid #ddd;">View ▾</div>
        </div>
        <div style="display:flex;height:360px;">
          <div style="width:160px;background:#faf9f8;border-right:1px solid #e5e5e5;padding:8px;">
            ${['Pinned','Desktop','Documents','Downloads','Pictures'].map((l,i)=>`<div style="padding:5px 8px;font-size:12px;color:${i===2?'#0078d4':'#555'};background:${i===2?'#e8f0fe':'transparent'};border-radius:3px;">${l}</div>`).join('')}
          </div>
          <div style="flex:1;padding:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-content:start;">
            ${['Work Projects','Personal Finance','Family Photos','Tax Returns'].map(f=>`
              <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:36px;">📁</div>
                <span style="font-size:11px;color:#333;text-align:center;">${f}</span>
              </div>`).join('')}
            <!-- New folder being created -->
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="font-size:36px;">📁</div>
              <div style="border:1px solid #0078d4;border-radius:3px;padding:2px 6px;font-size:11px;color:#333;background:#e8f0fe;min-width:60px;text-align:center;">New folder</div>
            </div>
          </div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-windows-step-3.png', w: 680, h: 300,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:300px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;padding:24px 32px;box-shadow:0 20px 60px #000a;text-align:center;">
        <div style="font-size:13px;color:#555;margin-bottom:20px;font-weight:600;">Keyboard shortcut to create a new folder</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:20px;">
          ${['Ctrl','Shift','N'].map(k=>`<div style="background:#1a2a4a;border:2px solid #4488ff;border-radius:8px;padding:10px 16px;color:#88aaff;font-size:16px;font-weight:700;box-shadow:0 4px 0 #0a1a3a,0 0 16px #4488ff44;min-width:50px;text-align:center;">${k}</div>`).join('<span style="color:#0078d4;font-size:20px;font-weight:700;">+</span>')}
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div style="font-size:32px;">📁</div>
          <div style="border:1px solid #0078d4;border-radius:3px;padding:2px 10px;font-size:12px;color:#333;background:#e8f0fe;display:inline-block;">New folder</div>
          <div style="font-size:11px;color:#888;margin-top:4px;">Folder created instantly — type a name and press Enter</div>
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-windows-step-4.png', w: 680, h: 360,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:360px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;padding:24px;box-shadow:0 20px 60px #000a;width:560px;">
        <div style="font-size:13px;font-weight:600;color:#333;margin-bottom:16px;">Good folder names</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${[['❌','scans','vague, not findable'],['❌','New folder (2)','meaningless'],['✓','NHS Documents 2026','clear purpose + date'],['✓','Work Projects — TekSure','project name included'],['✓','Family Photos Italy 2025','event + year'],['✓','Tax Returns 2025–2026','date range']].map(([s,n,desc])=>`
            <div style="background:${s==='✓'?'#e8f5e9':'#ffebee'};border-radius:6px;padding:8px 12px;display:flex;flex-direction:column;gap:2px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-weight:700;color:${s==='✓'?'#2e7d32':'#c62828'};">${s}</span>
                <code style="font-size:12px;font-family:Consolas,monospace;color:#333;">📁 ${n}</code>
              </div>
              <span style="font-size:10px;color:#888;">${desc}</span>
            </div>`).join('')}
        </div>
      </div>
    </body></html>`
  },
  {
    file: 'create-folder-windows-step-5.png', w: 680, h: 440,
    html: `<!DOCTYPE html><html><head><style>${WIN_BASE} body{width:680px;height:440px;background:linear-gradient(135deg,#001a4d,#0052cc);display:flex;align-items:center;justify-content:center;}</style></head><body>
      <div style="background:white;border-radius:8px;width:580px;overflow:hidden;box-shadow:0 20px 60px #000a;">
        <div style="background:#f3f3f3;height:36px;display:flex;align-items:center;padding:0 12px;gap:6px;border-bottom:1px solid #ddd;font-size:12px;color:#555;">
          📁 Documents › Work Projects › TekSure
        </div>
        <div style="display:flex;height:360px;">
          <!-- Tree view -->
          <div style="width:200px;background:#faf9f8;border-right:1px solid #e5e5e5;padding:8px;font-size:12px;color:#555;">
            <div style="margin-left:0px;margin-bottom:2px;">📄 Documents</div>
            <div style="margin-left:12px;margin-bottom:2px;">▼ 📁 Work Projects</div>
            <div style="margin-left:24px;margin-bottom:2px;color:#0078d4;background:#e8f0fe;border-radius:3px;padding:2px 4px;">▼ 📁 TekSure</div>
            <div style="margin-left:36px;color:#555;margin-bottom:2px;">📁 Design</div>
            <div style="margin-left:36px;color:#555;margin-bottom:2px;">📁 Development</div>
            <div style="margin-left:36px;color:#555;margin-bottom:2px;">📁 Marketing</div>
            <div style="margin-left:12px;margin-bottom:2px;">📁 Personal Finance</div>
            <div style="margin-left:12px;margin-bottom:2px;">📁 Family Photos</div>
          </div>
          <div style="flex:1;padding:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;align-content:start;">
            ${['Design','Development','Marketing'].map(f=>`
              <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:36px;">📁</div>
                <span style="font-size:11px;color:#333;">${f}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </body></html>`
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
const browser = await chromium.launch();
const page = await browser.newPage();

for (const s of SHOTS) {
  await shot(page, s.html, s.file, s.w, s.h);
}

await browser.close();
console.log(`\n✅ Done — ${SHOTS.length} Windows screenshots generated`);
