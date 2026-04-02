/**
 * Shared OS chrome templates for screenshot generation.
 * Import into per-platform gen-screenshots-*.mjs scripts.
 */
import path from 'path';
import { fileURLToPath } from 'url';

export const __scripts = path.dirname(fileURLToPath(import.meta.url));
export const PUBLIC = path.join(__scripts, '../public/screenshots');

// ═══════════════════════════════════════════════════════════════════════════════
// WINDOWS 11
// ═══════════════════════════════════════════════════════════════════════════════

export const WIN_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI',system-ui,sans-serif; }
  body { background:#0a2d6e; width:1280px; }
`;

export const TASKBAR_HTML = `
<div style="position:fixed;bottom:0;left:0;right:0;height:48px;background:#1a1a1a;display:flex;align-items:center;padding:0 8px;gap:4px;z-index:100;">
  <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="1" width="8.5" height="8.5" fill="#0078d4"/><rect x="1" y="10.5" width="8.5" height="8.5" fill="#0078d4"/><rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#0078d4"/></svg>
  </div>
  <div style="width:300px;height:36px;background:#2d2d2d;border-radius:18px;display:flex;align-items:center;padding:0 12px;gap:8px;color:#aaa;font-size:13px;">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#aaa" stroke-width="1.5"/><line x1="9" y1="9" x2="13" y2="13" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/></svg>
    Search
  </div>
  <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:2px;">
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;"><div style="width:22px;height:22px;background:#0078d4;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">E</div></div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;"><div style="width:22px;height:22px;background:#107c10;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">W</div></div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;"><div style="width:22px;height:22px;background:#ca3200;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">♪</div></div>
    <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;"><div style="width:22px;height:22px;background:#fff;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#333;font-weight:700;">📁</div></div>
  </div>
  <div style="display:flex;align-items:center;gap:4px;color:#fff;font-size:11px;">
    <span style="padding:2px 4px;">∧</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="10" width="2" height="4" fill="white"/><rect x="5" y="7" width="2" height="7" fill="white"/><rect x="8" y="4" width="2" height="10" fill="white"/><rect x="11" y="1" width="2" height="13" fill="white"/></svg>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 5 L8 1 L13 5 L13 12 L3 12 Z" stroke="white" stroke-width="1.2" fill="none"/><rect x="5.5" y="8" width="5" height="4" fill="white"/></svg>
    <div style="text-align:right;line-height:1.3;margin-left:4px;"><div>10:42 AM</div><div>4/2/2026</div></div>
    <div style="width:4px;height:36px;background:#0078d4;margin-left:4px;"></div>
  </div>
</div>`;

// Windows Settings sidebar
export const WIN_SETTINGS_SIDEBAR = (active = 'System') => `
<div style="width:260px;background:#202020;height:100%;padding:16px 0;overflow:hidden;">
  <div style="padding:0 16px 16px;display:flex;align-items:center;gap:10px;">
    <div style="width:36px;height:36px;background:#0078d4;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600;">B</div>
    <div><div style="color:white;font-size:13px;font-weight:500;">Bailey</div><div style="color:#888;font-size:11px;">Local Account</div></div>
  </div>
  <div style="padding:4px 8px;">
    <div style="height:32px;background:#2d2d2d;border-radius:4px;display:flex;align-items:center;padding:0 10px;gap:6px;color:#aaa;font-size:12px;margin-bottom:12px;">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.5" stroke="#aaa" stroke-width="1.2"/><line x1="8" y1="8" x2="11" y2="11" stroke="#aaa" stroke-width="1.2"/></svg>
      Find a setting
    </div>
    ${['System','Bluetooth & devices','Network & internet','Personalization','Apps','Accounts','Time & language','Gaming','Accessibility','Privacy & security','Windows Update'].map(item => `
      <div style="padding:8px 10px;border-radius:4px;color:${item===active?'white':'#ccc'};font-size:13px;background:${item===active?'rgba(255,255,255,0.08)':'transparent'};cursor:pointer;margin-bottom:1px;">${item}</div>
    `).join('')}
  </div>
</div>`;

// Windows title bar
export const WIN_TITLEBAR = (title = 'Settings') => `
<div style="height:32px;background:#202020;display:flex;align-items:center;padding:0 12px;">
  <span style="color:#aaa;font-size:12px;flex:1;">${title}</span>
  <div style="display:flex;align-items:center;">
    <div style="width:46px;height:32px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:11px;">─</div>
    <div style="width:46px;height:32px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:11px;">□</div>
    <div style="width:46px;height:32px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:11px;background:transparent;">✕</div>
  </div>
</div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// macOS
// ═══════════════════════════════════════════════════════════════════════════════

export const MAC_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,'SF Pro Display','Helvetica Neue',sans-serif; }
  body { background:#1c1c1e; }
`;

export const MENU_BAR = (title = 'Finder') => `
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
    <span>📶</span><span>🔊</span><span>🔋 98%</span><span>⌃⌘</span><span>Wed Apr 2 10:42 AM</span>
  </div>
</div>`;

export const TRAFFIC = `<div style="display:flex;gap:6px;align-items:center;margin-right:8px;">
  <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57;border:0.5px solid rgba(0,0,0,0.15);"></div>
  <div style="width:12px;height:12px;border-radius:50%;background:#ffbd2e;border:0.5px solid rgba(0,0,0,0.15);"></div>
  <div style="width:12px;height:12px;border-radius:50%;background:#28c840;border:0.5px solid rgba(0,0,0,0.15);"></div>
</div>`;

export const DOCK = `
<div style="position:fixed;bottom:0;left:0;right:0;height:80px;display:flex;align-items:center;justify-content:center;z-index:100;">
  <div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:20px;border:1px solid rgba(255,255,255,0.2);padding:6px 12px;display:flex;gap:6px;align-items:center;">
    ${[['🔵','Finder'],['🌐','Safari'],['📧','Mail'],['📅','Calendar'],['🗒','Notes'],['📁','Files'],['⚙','Settings'],['🗑','Trash']].map(([i])=>`
      <div style="width:52px;height:52px;border-radius:13px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:28px;">${i}</div>
    `).join('')}
  </div>
</div>`;

// macOS System Settings sidebar
export const MAC_SETTINGS_SIDEBAR = (active = 'Wi-Fi') => `
<div style="width:220px;background:rgba(44,44,46,0.6);backdrop-filter:blur(20px);height:100%;padding:8px;">
  ${TRAFFIC}
  <div style="margin-top:12px;">
    ${['Wi-Fi','Bluetooth','Network','Notifications','Sound','Focus','Screen Time','General','Appearance','Accessibility','Control Centre','Siri & Spotlight','Privacy & Security','Desktop & Dock','Displays','Battery','Lock Screen'].map(item => `
      <div style="padding:6px 10px;border-radius:6px;color:${item===active?'white':'rgba(255,255,255,0.8)'};font-size:13px;background:${item===active?'rgba(0,122,255,0.5)':'transparent'};margin-bottom:1px;">${item}</div>
    `).join('')}
  </div>
</div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// CHROME BROWSER
// ═══════════════════════════════════════════════════════════════════════════════

export const BROWSER_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,'Segoe UI',system-ui,sans-serif; }
  body { background:#1a1a1a; }
`;

export const BROWSER_CHROME = (url = 'https://example.com', title = 'Example') => `
<div style="background:#292929;padding-bottom:0;">
  <!-- Tab bar -->
  <div style="display:flex;align-items:flex-end;padding:8px 8px 0;gap:2px;">
    <div style="background:#3c3c3c;border-radius:8px 8px 0 0;padding:8px 16px;display:flex;align-items:center;gap:8px;max-width:220px;">
      <div style="width:14px;height:14px;background:#4a9eff;border-radius:3px;font-size:8px;display:flex;align-items:center;justify-content:center;color:white;">🌐</div>
      <span style="color:#e0e0e0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${title}</span>
      <span style="color:#888;font-size:11px;margin-left:auto;cursor:pointer;">✕</span>
    </div>
    <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:#888;font-size:16px;margin-left:4px;">+</div>
  </div>
  <!-- Address bar -->
  <div style="display:flex;align-items:center;padding:8px 12px;gap:8px;">
    <div style="display:flex;gap:8px;color:#888;">
      <span style="font-size:14px;">←</span><span style="font-size:14px;">→</span><span style="font-size:14px;">↻</span>
    </div>
    <div style="flex:1;background:#3c3c3c;border-radius:20px;padding:6px 14px;display:flex;align-items:center;gap:6px;">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2" y="3" width="8" height="7" rx="1" stroke="#888" stroke-width="1.2"/><path d="M4 3V2.5a2 2 0 0 1 4 0V3" stroke="#888" stroke-width="1.2"/></svg>
      <span style="color:#ccc;font-size:13px;">${url}</span>
    </div>
    <div style="display:flex;gap:6px;color:#888;">
      <span style="font-size:14px;">☆</span><span style="font-size:14px;">⋮</span>
    </div>
  </div>
</div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// iPHONE
// ═══════════════════════════════════════════════════════════════════════════════

export const IPHONE_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,'SF Pro Display','Helvetica Neue',sans-serif; }
  body { background:#000; width:390px; height:844px; }
`;

export const IPHONE_STATUS_BAR = (time = '10:42') => `
<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 28px 8px;color:white;font-size:15px;font-weight:600;">
  <span>${time}</span>
  <div style="width:120px;height:34px;background:#000;border-radius:20px;margin:0 auto;position:relative;top:-6px;"></div>
  <div style="display:flex;align-items:center;gap:5px;font-size:12px;font-weight:500;">
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="0.5" fill="white"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="white"/><rect x="9" y="2" width="3" height="10" rx="0.5" fill="white"/><rect x="13" y="0" width="3" height="12" rx="0.5" fill="white"/></svg>
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none"><path d="M0 4 Q7.5 -2 15 4" stroke="white" stroke-width="1.5"/><path d="M2.5 6.5 Q7.5 2 12.5 6.5" stroke="white" stroke-width="1.5"/><path d="M5 9 Q7.5 6 10 9" stroke="white" stroke-width="1.5"/><circle cx="7.5" cy="11" r="1" fill="white"/></svg>
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0" y="1" width="22" height="10" rx="2" stroke="white" stroke-width="1"/><rect x="22.5" y="3.5" width="2" height="5" rx="1" fill="white"/><rect x="1.5" y="2.5" width="17" height="7" rx="1" fill="#30d158"/></svg>
  </div>
</div>`;

export const IPHONE_HOME_INDICATOR = `
<div style="position:fixed;bottom:0;left:0;right:0;height:34px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:8px;">
  <div style="width:134px;height:5px;background:rgba(255,255,255,0.3);border-radius:3px;"></div>
</div>`;

// iOS Settings navigation header
export const IOS_NAV_HEADER = (title = 'Settings', backLabel = '') => `
<div style="display:flex;align-items:center;padding:8px 16px 12px;background:#000;">
  ${backLabel ? `<div style="display:flex;align-items:center;gap:4px;color:#0a84ff;font-size:17px;"><span>‹</span><span style="font-size:15px;">${backLabel}</span></div>` : ''}
  <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">${title}</span>
  ${backLabel ? '<div style="width:60px;"></div>' : ''}
</div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// ANDROID (Material Design 3)
// ═══════════════════════════════════════════════════════════════════════════════

export const ANDROID_BASE = `
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Google Sans','Roboto',system-ui,sans-serif; }
  body { background:#1a1a2e; width:412px; height:915px; }
`;

export const ANDROID_STATUS_BAR = (time = '10:42') => `
<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 24px 8px;color:white;font-size:14px;font-weight:500;">
  <span>${time}</span>
  <div style="display:flex;align-items:center;gap:6px;">
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="0.5" fill="white"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="white"/><rect x="9" y="2" width="3" height="10" rx="0.5" fill="white"/><rect x="13" y="0" width="3" height="12" rx="0.5" fill="white"/></svg>
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none"><path d="M0 4 Q7.5 -2 15 4" stroke="white" stroke-width="1.5"/><path d="M2.5 6.5 Q7.5 2 12.5 6.5" stroke="white" stroke-width="1.5"/><circle cx="7.5" cy="10" r="1.2" fill="white"/></svg>
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0" y="1" width="22" height="10" rx="2" stroke="white" stroke-width="1"/><rect x="1.5" y="2.5" width="17" height="7" rx="1" fill="white"/></svg>
  </div>
</div>`;

export const ANDROID_NAV_BAR = `
<div style="position:fixed;bottom:0;left:0;right:0;height:48px;background:#1a1a2e;display:flex;align-items:center;justify-content:center;gap:80px;">
  <div style="width:16px;height:16px;border:2px solid rgba(255,255,255,0.5);border-radius:2px;"></div>
  <div style="width:18px;height:18px;border-radius:50%;border:2px solid rgba(255,255,255,0.5);"></div>
  <div style="width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:16px solid rgba(255,255,255,0.5);transform:rotate(90deg);"></div>
</div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

/** Render HTML to a PNG file */
export async function shot(page, html, outPath, width, height) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width, height } });
  console.log('  ✓', path.basename(outPath));
}

/** Build full HTML doc from style + body */
export function doc(css, body) {
  return `<!DOCTYPE html><html><head><style>${css}</style></head><body>${body}</body></html>`;
}

/** Windows-style settings page */
export function winSettingsPage(sidebarActive, title, bodyContent) {
  return doc(
    `${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`,
    `${WIN_TITLEBAR(title)}
     <div style="flex:1;display:flex;">
       ${WIN_SETTINGS_SIDEBAR(sidebarActive)}
       <div style="flex:1;background:#1a1a1a;padding:32px 40px;overflow:hidden;">${bodyContent}</div>
     </div>
     ${TASKBAR_HTML}`
  );
}

/** macOS System Settings page */
export function macSettingsPage(sidebarActive, bodyContent) {
  return doc(
    `${MAC_BASE} body{width:1024px;height:700px;display:flex;flex-direction:column;}`,
    `${MENU_BAR('System Settings')}
     <div style="flex:1;display:flex;margin-top:28px;">
       ${MAC_SETTINGS_SIDEBAR(sidebarActive)}
       <div style="flex:1;background:#2c2c2e;padding:28px 32px;overflow:hidden;">${bodyContent}</div>
     </div>
     ${DOCK}`
  );
}

/** Chrome browser page */
export function browserPage(url, title, bodyContent) {
  return doc(
    `${BROWSER_BASE} body{width:1280px;height:800px;display:flex;flex-direction:column;}`,
    `${BROWSER_CHROME(url, title)}
     <div style="flex:1;background:white;overflow:hidden;">${bodyContent}</div>`
  );
}

/** iPhone screen */
export function iphonePage(bodyContent, bgColor = '#000') {
  return doc(
    `${IPHONE_BASE} body{background:${bgColor};}`,
    `${IPHONE_STATUS_BAR()}${bodyContent}${IPHONE_HOME_INDICATOR}`
  );
}

/** Android screen */
export function androidPage(bodyContent, bgColor = '#1a1a2e') {
  return doc(
    `${ANDROID_BASE} body{background:${bgColor};}`,
    `${ANDROID_STATUS_BAR()}${bodyContent}${ANDROID_NAV_BAR}`
  );
}
