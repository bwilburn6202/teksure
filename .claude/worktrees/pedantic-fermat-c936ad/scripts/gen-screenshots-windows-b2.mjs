/**
 * Screenshot generator — Windows guides (batch 2)
 * Run: node scripts/gen-screenshots-windows-b2.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, WIN_BASE, TASKBAR_HTML, WIN_SETTINGS_SIDEBAR, WIN_TITLEBAR,
  shot, doc, winSettingsPage
} from './screenshot-templates.mjs';

const OUT = path.join(PUBLIC, 'windows');

const SHOTS = [

  // ── restart-pc-windows ─────────────────────────────────────────────────────
  {
    file: 'restart-pc-windows-step-1.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;background:linear-gradient(135deg,#001a4d,#003580,#0052cc);}`, `
      <!-- Start menu with Power > Restart highlighted -->
      <div style="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);width:600px;background:#2d2d2d;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);padding:24px;">
        <div style="text-align:center;margin-bottom:16px;font-size:14px;color:#aaa;">Pinned</div>
        <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:24px;">
          ${['Edge','Word','Excel','PowerPoint','Mail','Calendar','Store','Photos','Notepad','Settings','Calculator','Weather'].map(n=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px;border-radius:8px;">
              <div style="width:36px;height:36px;background:#444;border-radius:8px;"></div>
              <span style="font-size:10px;color:#ccc;">${n}</span>
            </div>`).join('')}
        </div>
        <div style="border-top:1px solid #444;padding-top:16px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:32px;height:32px;background:#0078d4;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;">B</div>
            <span style="color:#ccc;font-size:13px;">Bailey</span>
          </div>
          <div style="position:relative;">
            <div style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;cursor:pointer;">⏻</div>
            <!-- Power flyout -->
            <div style="position:absolute;bottom:44px;right:0;background:#3c3c3c;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.4);overflow:hidden;width:160px;">
              <div style="padding:8px 12px;color:#ccc;font-size:13px;cursor:pointer;">😴 Sleep</div>
              <div style="padding:8px 12px;color:#ccc;font-size:13px;cursor:pointer;">⏻ Shut down</div>
              <div style="padding:8px 12px;color:white;font-size:13px;background:#0078d4;border-radius:4px;margin:2px;font-weight:500;">🔄 Restart</div>
            </div>
          </div>
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },
  {
    file: 'restart-pc-windows-step-2.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;background:#000;}`, `
      <!-- Ctrl+Alt+Delete screen -->
      <div style="height:720px;background:linear-gradient(180deg,#0a1628 0%,#162d50 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
          <div style="display:flex;gap:16px;">
            ${['Lock','Switch user','Sign out','Task Manager'].map(opt=>`
              <div style="padding:16px 24px;background:rgba(255,255,255,0.08);border-radius:8px;color:white;font-size:14px;cursor:pointer;border:1px solid rgba(255,255,255,0.15);text-align:center;min-width:120px;">
                ${opt}
              </div>`).join('')}
          </div>
        </div>
        <!-- Power icon in bottom right -->
        <div style="position:absolute;bottom:24px;right:24px;display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;background:rgba(255,255,255,0.1);border:2px solid #0078d4;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;box-shadow:0 0 12px rgba(0,120,212,0.5);">⏻</div>
          <span style="color:#0078d4;font-size:12px;font-weight:500;">← Power</span>
        </div>
        <div style="position:absolute;bottom:24px;left:24px;display:flex;align-items:center;gap:8px;">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="6" width="2" height="8" fill="white"/><rect x="6" y="4" width="2" height="10" fill="white"/><rect x="10" y="2" width="2" height="12" fill="white"/><rect x="14" y="0" width="2" height="14" fill="white"/></svg>
          <span style="color:rgba(255,255,255,0.6);font-size:12px;">Connected</span>
        </div>
      </div>
    `)
  },
  {
    file: 'restart-pc-windows-step-4.png', w: 640, h: 300,
    html: doc(`${WIN_BASE} body{background:#111;width:640px;height:300px;display:flex;align-items:center;justify-content:center;}`, `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="position:relative;background:#1e1e1e;border-radius:12px;padding:24px 40px;">
          <div style="display:grid;grid-template-columns:repeat(10,32px);gap:3px;margin-bottom:8px;">
            ${Array.from({length:10},(_,i)=>`<div style="background:#2a2a2a;border-radius:3px;height:24px;"></div>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:repeat(10,32px);gap:3px;margin-bottom:8px;">
            ${Array.from({length:10},()=>`<div style="background:#2a2a2a;border-radius:3px;height:28px;"></div>`).join('')}
          </div>
          <!-- Power button highlighted -->
          <div style="position:absolute;top:12px;right:16px;width:36px;height:28px;background:#333;border:2px solid #ff4444;border-radius:6px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 16px rgba(255,68,68,0.4);">
            <svg width="14" height="14" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="#ff4444" stroke-width="2" fill="none"/><line x1="8" y1="2" x2="8" y2="5" stroke="#ff4444" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;color:#ff4444;font-size:13px;font-weight:500;">
          <span>Hold for 5-10 seconds</span>
          <div style="display:flex;gap:2px;">
            ${[1,2,3,4,5].map(n=>`<div style="width:16px;height:16px;border-radius:50%;background:${n<=3?'#ff4444':'#444'};display:flex;align-items:center;justify-content:center;color:white;font-size:8px;">${n}</div>`).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // ── manage-storage-windows ─────────────────────────────────────────────────
  {
    file: 'manage-storage-windows-step-1.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('This PC')}
      <div style="flex:1;background:#1a1a1a;display:flex;">
        <!-- Sidebar -->
        <div style="width:220px;background:#202020;padding:12px 8px;">
          ${['Quick access','OneDrive','This PC','Network'].map((n,i)=>`
            <div style="padding:6px 10px;border-radius:4px;color:${i===2?'white':'#aaa'};font-size:13px;background:${i===2?'rgba(255,255,255,0.08)':'transparent'};">📁 ${n}</div>
          `).join('')}
        </div>
        <!-- Main content -->
        <div style="flex:1;padding:24px 32px;">
          <div style="color:white;font-size:18px;font-weight:600;margin-bottom:24px;">Devices and drives</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <!-- C: drive (nearly full) -->
            <div style="background:#2a2a2a;border-radius:8px;padding:16px;border:1px solid #444;">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                <div style="font-size:32px;">💾</div>
                <div><div style="color:white;font-size:14px;font-weight:500;">Local Disk (C:)</div><div style="color:#888;font-size:12px;">233 GB used of 256 GB</div></div>
              </div>
              <div style="height:8px;background:#444;border-radius:4px;overflow:hidden;">
                <div style="height:100%;width:92%;background:#e81123;border-radius:4px;"></div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:4px;color:#888;font-size:11px;"><span style="color:#e81123;font-weight:600;">92% full</span><span>23 GB free</span></div>
            </div>
            <!-- D: drive -->
            <div style="background:#2a2a2a;border-radius:8px;padding:16px;border:1px solid #444;">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                <div style="font-size:32px;">💾</div>
                <div><div style="color:white;font-size:14px;font-weight:500;">Data (D:)</div><div style="color:#888;font-size:12px;">225 GB used of 500 GB</div></div>
              </div>
              <div style="height:8px;background:#444;border-radius:4px;overflow:hidden;">
                <div style="height:100%;width:45%;background:#0078d4;border-radius:4px;"></div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:4px;color:#888;font-size:11px;"><span>45% used</span><span>275 GB free</span></div>
            </div>
          </div>
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },
  {
    file: 'manage-storage-windows-step-2.png', w: 500, h: 500,
    html: doc(`${WIN_BASE} body{width:500px;height:500px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:8px;width:420px;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
        ${WIN_TITLEBAR('Disk Cleanup for (C:)')}
        <div style="padding:20px;">
          <div style="color:white;font-size:13px;margin-bottom:12px;">Files to delete:</div>
          <div style="background:#1a1a1a;border-radius:6px;padding:8px;margin-bottom:12px;max-height:200px;">
            ${[['Temporary Internet Files','124 MB',true],['Recycle Bin','2.1 GB',true],['Thumbnails','45 MB',true],['Delivery Optimization','856 MB',true],['Temporary files','932 MB',true],['DirectX Shader Cache','112 MB',true]].map(([name,size,checked])=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:4px;color:#ddd;font-size:12px;">
                <div style="width:16px;height:16px;background:${checked?'#0078d4':'#444'};border-radius:3px;display:flex;align-items:center;justify-content:center;color:white;font-size:10px;">${checked?'✓':''}</div>
                <span style="flex:1;">${name}</span>
                <span style="color:#888;">${size}</span>
              </div>
            `).join('')}
          </div>
          <div style="background:#1a3a1a;border:1px solid #2d6b2d;border-radius:6px;padding:10px;margin-bottom:16px;display:flex;align-items:center;gap:8px;">
            <span style="font-size:16px;">✅</span>
            <span style="color:#6bdb6b;font-size:13px;font-weight:500;">Total disk space you gain: 4.1 GB</span>
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end;">
            <div style="padding:6px 20px;background:#0078d4;border-radius:4px;color:white;font-size:13px;font-weight:500;">Clean Up</div>
            <div style="padding:6px 20px;background:#444;border-radius:4px;color:#ccc;font-size:13px;">Cancel</div>
          </div>
        </div>
      </div>
    `)
  },
  {
    file: 'manage-storage-windows-step-3.png', w: 1280, h: 600,
    html: doc(`${WIN_BASE} body{height:600px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('Downloads')}
      <div style="flex:1;background:#1a1a1a;padding:16px 24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="color:#888;font-size:12px;">Sort by:</span>
          <div style="padding:4px 12px;background:#0078d4;border-radius:4px;color:white;font-size:12px;">Size ↓</div>
        </div>
        <div style="background:#222;border-radius:8px;overflow:hidden;">
          <div style="display:grid;grid-template-columns:40px 1fr 120px 120px;padding:8px 12px;border-bottom:1px solid #333;color:#888;font-size:11px;">
            <span></span><span>Name</span><span>Size</span><span>Date</span>
          </div>
          ${[['🎥','vacation_2024.mp4','2.3 GB','Jan 15, 2025'],['🎥','screen_recording.mp4','1.8 GB','Mar 2, 2026'],['📦','software_installer.exe','950 MB','Dec 8, 2025'],['📄','presentation_final_v3.pptx','340 MB','Feb 20, 2026'],['🖼️','photo_album.zip','280 MB','Nov 1, 2025']].map(([icon,name,size,date],i)=>`
            <div style="display:grid;grid-template-columns:40px 1fr 120px 120px;padding:10px 12px;border-bottom:1px solid #2a2a2a;background:${i===0?'rgba(0,120,212,0.1)':'transparent'};">
              <span style="font-size:18px;">${icon}</span>
              <span style="color:#ddd;font-size:13px;">${name}</span>
              <span style="color:${parseFloat(size)>=1?'#ff8800':'#888'};font-size:13px;font-weight:${parseFloat(size)>=1?'600':'400'};">${size}</span>
              <span style="color:#888;font-size:12px;">${date}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },
  {
    file: 'manage-storage-windows-step-4.png', w: 1280, h: 720,
    html: winSettingsPage('Apps', 'Installed Apps', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:20px;">Installed apps</div>
      <div style="display:flex;gap:8px;margin-bottom:20px;">
        <div style="flex:1;background:#2d2d2d;border-radius:4px;padding:6px 12px;color:#aaa;font-size:12px;">🔍 Search apps</div>
        <div style="padding:6px 12px;background:#2d2d2d;border-radius:4px;color:#ccc;font-size:12px;">Sort by: Size ↓</div>
      </div>
      ${[['Game_Title','45.2 GB','Installed Mar 2024'],['Video Editor Pro','2.1 GB','Installed Jun 2025'],['Old Antivirus','1.5 GB','Installed Jan 2023'],['Photo Manager','890 MB','Installed Aug 2025']].map(([name,size,date])=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#2a2a2a;border-radius:8px;margin-bottom:6px;">
          <div style="width:36px;height:36px;background:#444;border-radius:8px;"></div>
          <div style="flex:1;"><div style="color:white;font-size:14px;">${name}</div><div style="color:#888;font-size:11px;">${size} · ${date}</div></div>
          <div style="padding:6px 16px;background:#0078d4;border-radius:4px;color:white;font-size:12px;">Uninstall</div>
        </div>
      `).join('')}
    `)
  },
  {
    file: 'manage-storage-windows-step-5.png', w: 1280, h: 720,
    html: winSettingsPage('System', 'Storage', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:24px;">Storage</div>
      <div style="background:#2a2a2a;border-radius:12px;padding:20px;margin-bottom:20px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <div><div style="color:white;font-size:16px;font-weight:500;">Storage Sense</div><div style="color:#888;font-size:12px;margin-top:4px;">Automatically free up space by deleting files you don't need</div></div>
          <div style="width:44px;height:24px;background:#0078d4;border-radius:12px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      </div>
      <div style="background:#2a2a2a;border-radius:12px;padding:20px;">
        <div style="color:#ccc;font-size:14px;margin-bottom:12px;">Cleanup frequency</div>
        ${['During low free disk space (default)','Every week','Every month','Every day'].map((opt,i)=>`
          <div style="display:flex;align-items:center;gap:8px;padding:8px 0;color:#ccc;font-size:13px;">
            <div style="width:18px;height:18px;border-radius:50%;border:2px solid ${i===0?'#0078d4':'#666'};display:flex;align-items:center;justify-content:center;">
              ${i===0?'<div style="width:10px;height:10px;border-radius:50%;background:#0078d4;"></div>':''}
            </div>
            ${opt}
          </div>
        `).join('')}
      </div>
    `)
  },

  // ── use-windows-security-antivirus ─────────────────────────────────────────
  {
    file: 'use-windows-security-antivirus-step-1.png', w: 800, h: 400,
    html: doc(`${WIN_BASE} body{width:800px;height:400px;background:linear-gradient(135deg,#001a4d,#003580);display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:12px;width:600px;box-shadow:0 16px 48px rgba(0,0,0,0.4);overflow:hidden;">
        <div style="padding:16px 20px;background:#252525;border-bottom:1px solid #333;color:#888;font-size:12px;">🔍 Windows Security</div>
        <div style="padding:16px 20px;">
          <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:#0078d4;border-radius:8px;margin-bottom:8px;">
            <div style="width:36px;height:36px;background:rgba(255,255,255,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;">🛡️</div>
            <div><div style="color:white;font-size:14px;font-weight:500;">Windows Security</div><div style="color:rgba(255,255,255,0.7);font-size:11px;">System settings</div></div>
          </div>
          <div style="padding:8px 14px;color:#888;font-size:12px;">Other results</div>
          <div style="padding:8px 14px;color:#ccc;font-size:13px;border-radius:4px;">Virus & Threat Protection</div>
          <div style="padding:8px 14px;color:#ccc;font-size:13px;">Firewall & Network Protection</div>
        </div>
      </div>
    `)
  },
  {
    file: 'use-windows-security-antivirus-step-2.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('Windows Security')}
      <div style="flex:1;display:flex;background:#1a1a1a;">
        <div style="width:240px;background:#202020;padding:16px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;padding:8px;"><div style="font-size:24px;">🛡️</div><span style="color:white;font-size:14px;font-weight:600;">Security</span></div>
          ${['Home','Virus & threat','Firewall','App & browser','Device security','Performance','Family'].map((n,i)=>`
            <div style="padding:8px 10px;border-radius:4px;color:${i===1?'white':'#aaa'};font-size:13px;background:${i===1?'rgba(255,255,255,0.08)':'transparent'};margin-bottom:2px;">${n}</div>
          `).join('')}
        </div>
        <div style="flex:1;padding:32px 40px;">
          <div style="color:white;font-size:20px;font-weight:600;margin-bottom:24px;">Virus & threat protection</div>
          <div style="display:flex;align-items:center;gap:12px;background:#1a3a1a;border:1px solid #2d6b2d;border-radius:8px;padding:16px;margin-bottom:20px;">
            <span style="font-size:24px;">✅</span>
            <div><div style="color:#6bdb6b;font-size:14px;font-weight:500;">Real-time protection: On</div><div style="color:#4a8a4a;font-size:12px;">Your device is being actively protected</div></div>
          </div>
          <div style="padding:12px 20px;background:#0078d4;border-radius:6px;color:white;font-size:14px;font-weight:500;text-align:center;width:180px;margin-bottom:16px;box-shadow:0 4px 12px rgba(0,120,212,0.4);">Quick scan</div>
          <div style="color:#888;font-size:12px;">Last scan: Today at 9:15 AM · 0 threats found</div>
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },
  {
    file: 'use-windows-security-antivirus-step-3.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('Windows Security')}
      <div style="flex:1;background:#1a1a1a;padding:32px 40px;">
        <div style="color:white;font-size:20px;font-weight:600;margin-bottom:24px;">Security at a glance</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          ${[['🛡️','Virus & threat','No action needed','#2d6b2d'],['🔥','Firewall','Active','#2d6b2d'],['🌐','App & browser','No action needed','#2d6b2d'],['📱','Device security','No action needed','#2d6b2d'],['📊','Performance & health','No issues','#2d6b2d'],['👨‍👩‍👧','Family options','Set up','#6b6b2d']].map(([icon,name,status,bg])=>`
            <div style="background:#2a2a2a;border-radius:12px;padding:20px;border-left:4px solid ${bg};">
              <div style="font-size:28px;margin-bottom:8px;">${icon}</div>
              <div style="color:white;font-size:14px;font-weight:500;margin-bottom:4px;">${name}</div>
              <div style="display:flex;align-items:center;gap:6px;color:${bg==='#2d6b2d'?'#6bdb6b':'#dbdb6b'};font-size:12px;">
                <span>${bg==='#2d6b2d'?'✓':'⚠'}</span>${status}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },
  {
    file: 'use-windows-security-antivirus-step-4.png', w: 800, h: 600,
    html: doc(`${WIN_BASE} body{width:800px;height:600px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <!-- Fake virus alert with FAKE stamp -->
      <div style="position:relative;background:white;border-radius:4px;width:600px;box-shadow:0 8px 32px rgba(0,0,0,0.6);overflow:hidden;">
        <div style="background:#cc0000;padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:32px;">⚠️</span>
          <div style="color:white;font-size:18px;font-weight:700;">YOUR COMPUTER IS INFECTED!</div>
        </div>
        <div style="padding:24px;background:#fff0f0;">
          <div style="color:#333;font-size:14px;line-height:1.6;margin-bottom:16px;">
            WARNING: 5 viruses have been detected on your computer.<br>
            Your personal data is at risk. Call Microsoft Support immediately:
          </div>
          <div style="text-align:center;color:#cc0000;font-size:28px;font-weight:900;margin-bottom:16px;letter-spacing:2px;">1-888-555-0199</div>
          <div style="text-align:center;padding:12px 24px;background:#cc0000;color:white;font-size:16px;font-weight:700;border-radius:4px;margin-bottom:12px;">CALL NOW TO FIX</div>
          <div style="text-align:center;color:#666;font-size:11px;">Do not ignore this critical alert</div>
        </div>
        <!-- FAKE stamp overlay -->
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-15deg);border:6px solid #ff0000;border-radius:12px;padding:8px 32px;background:rgba(255,0,0,0.1);">
          <span style="font-size:64px;font-weight:900;color:#ff0000;letter-spacing:8px;">FAKE</span>
        </div>
        <!-- X close button highlighted -->
        <div style="position:absolute;top:8px;right:8px;width:32px;height:32px;background:#0078d4;border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;box-shadow:0 2px 8px rgba(0,120,212,0.5);">✕</div>
        <div style="position:absolute;top:8px;right:48px;background:#0078d4;color:white;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;">Close the tab →</div>
      </div>
    `)
  },
  {
    file: 'use-windows-security-antivirus-step-5.png', w: 800, h: 500,
    html: doc(`${WIN_BASE} body{width:800px;height:500px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2a2a2a;border-radius:12px;width:600px;padding:28px;">
        <div style="color:white;font-size:16px;font-weight:600;margin-bottom:20px;">Virus & threat protection settings</div>
        ${[['Real-time protection','Locates and stops malware from installing or running',true],['Cloud-delivered protection','Provides increased and faster protection with access to the cloud',true],['Automatic sample submission','Send sample files to Microsoft to help protect you and others',true]].map(([name,desc,on])=>`
          <div style="display:flex;align-items:center;gap:16px;padding:16px;background:#333;border-radius:8px;margin-bottom:8px;">
            <div style="flex:1;">
              <div style="color:white;font-size:14px;font-weight:500;">${name}</div>
              <div style="color:#888;font-size:12px;margin-top:2px;">${desc}</div>
            </div>
            <div style="width:44px;height:24px;background:${on?'#0078d4':'#555'};border-radius:12px;position:relative;flex-shrink:0;">
              <div style="position:absolute;${on?'right':'left'}:3px;top:3px;width:18px;height:18px;background:white;border-radius:50%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `)
  },
  {
    file: 'use-windows-security-antivirus-step-6.png', w: 800, h: 500,
    html: doc(`${WIN_BASE} body{width:800px;height:500px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2a2a2a;border-radius:12px;width:600px;padding:28px;">
        <div style="color:white;font-size:16px;font-weight:600;margin-bottom:20px;">Protection history</div>
        ${[['Trojan:Win32/Wacatac','Quarantined','High','Today, 9:15 AM','#e81123'],['PUA:Win32/Softcnapp','Blocked','Medium','Yesterday, 3:42 PM','#ff8c00'],['App:AutoRun','Allowed','Low','Apr 1, 2:10 PM','#6bdb6b']].map(([name,action,sev,time,color])=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px;background:#333;border-radius:8px;margin-bottom:8px;border-left:4px solid ${color};">
            <div style="flex:1;">
              <div style="color:white;font-size:13px;font-weight:500;">${name}</div>
              <div style="color:#888;font-size:11px;margin-top:2px;">${time}</div>
            </div>
            <span style="padding:4px 10px;background:${color}20;color:${color};font-size:11px;border-radius:12px;font-weight:500;">${sev}</span>
            <span style="padding:4px 10px;background:${color==='#6bdb6b'?'rgba(107,219,107,0.15)':color==='#e81123'?'rgba(232,17,35,0.15)':'rgba(255,140,0,0.15)'};color:${color};font-size:11px;border-radius:12px;">${action}</span>
          </div>
        `).join('')}
      </div>
    `)
  },

  // ── setup-email-windows-mail ───────────────────────────────────────────────
  {
    file: 'setup-email-windows-mail-step-1.png', w: 800, h: 400,
    html: doc(`${WIN_BASE} body{width:800px;height:400px;background:linear-gradient(135deg,#001a4d,#003580);display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:12px;width:600px;box-shadow:0 16px 48px rgba(0,0,0,0.4);overflow:hidden;">
        <div style="padding:16px 20px;background:#252525;border-bottom:1px solid #333;color:#888;font-size:12px;">🔍 Mail</div>
        <div style="padding:16px 20px;">
          <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:#0078d4;border-radius:8px;">
            <div style="width:36px;height:36px;background:#0078d4;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;">📧</div>
            <div><div style="color:white;font-size:14px;font-weight:500;">Mail</div><div style="color:rgba(255,255,255,0.7);font-size:11px;">Trusted Microsoft Store app</div></div>
          </div>
        </div>
      </div>
    `)
  },
  {
    file: 'setup-email-windows-mail-step-2.png', w: 500, h: 500,
    html: doc(`${WIN_BASE} body{width:500px;height:500px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:12px;width:380px;padding:28px;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
        <div style="color:white;font-size:18px;font-weight:600;text-align:center;margin-bottom:24px;">Add an account</div>
        <div style="color:#888;font-size:13px;margin-bottom:16px;">Choose your email service:</div>
        ${[['📧','Outlook.com','Outlook, Hotmail, Live, MSN'],['🔴','Google','Gmail'],['🟡','Yahoo!','Yahoo! Mail'],['📮','iCloud','Apple iCloud Mail'],['⚙️','Other account','POP, IMAP']].map(([icon,name,desc],i)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:8px;margin-bottom:4px;background:${i===0?'rgba(0,120,212,0.15)':'transparent'};border:1px solid ${i===0?'#0078d4':'transparent'};cursor:pointer;">
            <span style="font-size:20px;">${icon}</span>
            <div><div style="color:white;font-size:14px;">${name}</div><div style="color:#888;font-size:11px;">${desc}</div></div>
          </div>
        `).join('')}
      </div>
    `)
  },
  {
    file: 'setup-email-windows-mail-step-3.png', w: 500, h: 450,
    html: doc(`${WIN_BASE} body{width:500px;height:450px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:12px;width:380px;padding:28px;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
        <div style="color:white;font-size:18px;font-weight:600;text-align:center;margin-bottom:24px;">Sign in</div>
        <div style="margin-bottom:16px;">
          <div style="color:#888;font-size:12px;margin-bottom:6px;">Email address</div>
          <div style="background:#1a1a1a;border:1px solid #444;border-radius:6px;padding:10px 12px;color:white;font-size:14px;">bailey@example.com</div>
        </div>
        <div style="margin-bottom:20px;">
          <div style="color:#888;font-size:12px;margin-bottom:6px;">Password</div>
          <div style="background:#1a1a1a;border:1px solid #444;border-radius:6px;padding:10px 12px;color:white;font-size:14px;">••••••••••</div>
        </div>
        <div style="padding:10px;background:#0078d4;border-radius:6px;color:white;font-size:14px;font-weight:500;text-align:center;">Sign in</div>
      </div>
    `)
  },
  {
    file: 'setup-email-windows-mail-step-5.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('Mail')}
      <div style="flex:1;display:flex;background:#1a1a1a;">
        <!-- Sidebar -->
        <div style="width:220px;background:#202020;padding:12px;">
          <div style="padding:10px;background:#0078d4;border-radius:6px;color:white;font-size:13px;font-weight:500;text-align:center;margin-bottom:16px;">+ New mail</div>
          <div style="color:#888;font-size:11px;margin-bottom:4px;">Accounts</div>
          ${['Inbox (3)','Sent','Drafts','Junk'].map((n,i)=>`
            <div style="padding:6px 10px;border-radius:4px;color:${i===0?'white':'#aaa'};font-size:13px;background:${i===0?'rgba(255,255,255,0.08)':'transparent'};">${n}</div>
          `).join('')}
        </div>
        <!-- New email compose -->
        <div style="flex:1;padding:20px 32px;">
          <div style="margin-bottom:12px;">
            <div style="color:#888;font-size:12px;margin-bottom:6px;">To</div>
            <div style="background:#2a2a2a;border-radius:4px;padding:8px 12px;color:#ccc;font-size:13px;">friend@email.com</div>
          </div>
          <div style="margin-bottom:12px;">
            <div style="color:#888;font-size:12px;margin-bottom:6px;">Subject</div>
            <div style="background:#2a2a2a;border-radius:4px;padding:8px 12px;color:white;font-size:13px;">Hello from Windows Mail!</div>
          </div>
          <div style="background:#2a2a2a;border-radius:4px;padding:12px;color:#ccc;font-size:13px;min-height:200px;line-height:1.6;">
            Hi there,<br><br>Just testing my new email setup. Everything is working great!<br><br>Best,<br>Bailey
          </div>
          <div style="margin-top:12px;display:flex;gap:8px;">
            <div style="padding:8px 20px;background:#0078d4;border-radius:4px;color:white;font-size:13px;font-weight:500;">Send</div>
          </div>
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },

  // ── setup-windows-backup ───────────────────────────────────────────────────
  {
    file: 'setup-windows-backup-step-1.png', w: 1280, h: 720,
    html: winSettingsPage('Accounts', 'Windows Backup', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:24px;">Windows Backup</div>
      <div style="background:#2a2a2a;border-radius:12px;padding:20px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="font-size:28px;">☁️</span>
          <div><div style="color:white;font-size:16px;font-weight:500;">OneDrive folder sync</div><div style="color:#888;font-size:12px;">Back up your Desktop, Documents, and Pictures</div></div>
          <div style="margin-left:auto;padding:6px 16px;background:#0078d4;border-radius:4px;color:white;font-size:12px;">Set up syncing</div>
        </div>
      </div>
      <div style="background:#2a2a2a;border-radius:12px;padding:20px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:28px;">💾</span>
          <div><div style="color:white;font-size:16px;font-weight:500;">Remember my apps</div><div style="color:#888;font-size:12px;">Back up your installed apps from Microsoft Store</div></div>
          <div style="margin-left:auto;width:44px;height:24px;background:#0078d4;border-radius:12px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      </div>
      <div style="background:#2a2a2a;border-radius:12px;padding:20px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:28px;">⚙️</span>
          <div><div style="color:white;font-size:16px;font-weight:500;">Remember my preferences</div><div style="color:#888;font-size:12px;">Passwords, language, and other settings</div></div>
          <div style="margin-left:auto;width:44px;height:24px;background:#0078d4;border-radius:12px;position:relative;">
            <div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      </div>
    `)
  },

  // ── print-document-windows ─────────────────────────────────────────────────
  {
    file: 'print-document-windows-step-1.png', w: 800, h: 600,
    html: doc(`${WIN_BASE} body{width:800px;height:600px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#2d2d2d;border-radius:8px;width:640px;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
        ${WIN_TITLEBAR('Print')}
        <div style="padding:24px;display:flex;gap:24px;">
          <!-- Print settings -->
          <div style="flex:1;">
            <div style="margin-bottom:16px;">
              <div style="color:#888;font-size:12px;margin-bottom:6px;">Printer</div>
              <div style="background:#1a1a1a;border:1px solid #444;border-radius:4px;padding:8px 12px;color:white;font-size:13px;display:flex;align-items:center;gap:8px;">🖨️ HP LaserJet Pro <span style="color:#888;margin-left:auto;">▼</span></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
              <div>
                <div style="color:#888;font-size:12px;margin-bottom:6px;">Copies</div>
                <div style="background:#1a1a1a;border:1px solid #444;border-radius:4px;padding:8px 12px;color:white;font-size:13px;">1</div>
              </div>
              <div>
                <div style="color:#888;font-size:12px;margin-bottom:6px;">Pages</div>
                <div style="background:#1a1a1a;border:1px solid #444;border-radius:4px;padding:8px 12px;color:white;font-size:13px;">All</div>
              </div>
            </div>
            <div style="margin-bottom:16px;">
              <div style="color:#888;font-size:12px;margin-bottom:6px;">Orientation</div>
              <div style="display:flex;gap:8px;">
                <div style="padding:8px 16px;background:#0078d4;border-radius:4px;color:white;font-size:12px;">Portrait</div>
                <div style="padding:8px 16px;background:#333;border-radius:4px;color:#ccc;font-size:12px;">Landscape</div>
              </div>
            </div>
            <div style="display:flex;gap:8px;margin-top:20px;">
              <div style="padding:8px 24px;background:#0078d4;border-radius:4px;color:white;font-size:13px;font-weight:500;">Print</div>
              <div style="padding:8px 24px;background:#444;border-radius:4px;color:#ccc;font-size:13px;">Cancel</div>
            </div>
          </div>
          <!-- Preview -->
          <div style="width:200px;">
            <div style="color:#888;font-size:12px;margin-bottom:6px;">Preview</div>
            <div style="background:white;border-radius:4px;height:260px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
              <div style="height:8px;background:#ddd;border-radius:2px;width:80%;margin-bottom:12px;"></div>
              <div style="height:6px;background:#eee;border-radius:2px;width:100%;margin-bottom:6px;"></div>
              <div style="height:6px;background:#eee;border-radius:2px;width:90%;margin-bottom:6px;"></div>
              <div style="height:6px;background:#eee;border-radius:2px;width:95%;margin-bottom:6px;"></div>
              <div style="height:6px;background:#eee;border-radius:2px;width:70%;"></div>
            </div>
          </div>
        </div>
      </div>
    `)
  },

  // ── use-virtual-desktops-windows ───────────────────────────────────────────
  {
    file: 'use-virtual-desktops-windows-step-1.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;background:#111;}`, `
      <!-- Task View -->
      <div style="height:720px;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;align-items:center;padding-top:32px;">
        <div style="display:flex;gap:16px;margin-bottom:32px;">
          <div style="width:200px;height:120px;border:2px solid #0078d4;border-radius:8px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;position:relative;">
            <div style="width:160px;height:90px;background:#2a2a2a;border-radius:4px;"></div>
            <div style="position:absolute;bottom:-20px;color:white;font-size:12px;">Desktop 1</div>
          </div>
          <div style="width:200px;height:120px;border:2px solid #444;border-radius:8px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;position:relative;">
            <div style="width:160px;height:90px;background:#2a2a2a;border-radius:4px;"></div>
            <div style="position:absolute;bottom:-20px;color:#888;font-size:12px;">Desktop 2</div>
          </div>
          <div style="width:200px;height:120px;border:2px dashed #555;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#888;font-size:24px;">+</div>
        </div>
        <div style="color:white;font-size:13px;margin-top:12px;">New desktop</div>
        <!-- Open windows -->
        <div style="display:flex;gap:16px;margin-top:40px;">
          ${['Notepad','Chrome','File Explorer'].map(n=>`
            <div style="width:300px;height:200px;background:#2a2a2a;border-radius:8px;border:1px solid #444;overflow:hidden;">
              <div style="padding:6px 10px;background:#333;font-size:11px;color:#ccc;">${n}</div>
              <div style="padding:12px;color:#888;font-size:10px;">Window content</div>
            </div>
          `).join('')}
        </div>
      </div>
      ${TASKBAR_HTML}
    `)
  },

  // ── manage-startup-programs-windows ─────────────────────────────────────────
  {
    file: 'manage-startup-programs-windows-step-2.png', w: 1280, h: 720,
    html: doc(`${WIN_BASE} body{height:720px;display:flex;flex-direction:column;}`, `
      ${WIN_TITLEBAR('Task Manager')}
      <div style="display:flex;background:#1a1a1a;border-bottom:1px solid #333;">
        ${['Processes','Performance','App history','Startup apps','Users','Details','Services'].map((n,i)=>`
          <div style="padding:10px 16px;color:${i===3?'white':'#888'};font-size:12px;border-bottom:2px solid ${i===3?'#0078d4':'transparent'};">${n}</div>
        `).join('')}
      </div>
      <div style="flex:1;background:#1a1a1a;padding:16px;">
        <div style="display:grid;grid-template-columns:40px 1fr 120px 100px 80px;padding:8px 12px;border-bottom:1px solid #333;color:#888;font-size:11px;">
          <span></span><span>Name</span><span>Publisher</span><span>Status</span><span>Impact</span>
        </div>
        ${[['📧','Windows Mail','Microsoft','Enabled','Low','#888'],['🟢','Spotify','Spotify AB','Enabled','High','#e81123'],['💬','Discord','Discord Inc.','Enabled','High','#e81123'],['☁️','OneDrive','Microsoft','Enabled','Medium','#ff8c00'],['🛡️','Windows Security','Microsoft','Enabled','Low','#888'],['🎮','Steam Client','Valve','Enabled','High','#e81123']].map(([icon,name,pub,status,impact,impactColor])=>`
          <div style="display:grid;grid-template-columns:40px 1fr 120px 100px 80px;padding:10px 12px;border-bottom:1px solid #2a2a2a;align-items:center;">
            <span style="font-size:16px;">${icon}</span>
            <span style="color:white;font-size:13px;">${name}</span>
            <span style="color:#888;font-size:12px;">${pub}</span>
            <span style="color:#6bdb6b;font-size:12px;">${status}</span>
            <span style="color:${impactColor};font-size:12px;font-weight:500;">${impact}</span>
          </div>
        `).join('')}
      </div>
      ${TASKBAR_HTML}
    `)
  },

  // ── troubleshoot-wifi-windows ──────────────────────────────────────────────
  {
    file: 'troubleshoot-wifi-windows-step-1.png', w: 1280, h: 720,
    html: winSettingsPage('System', 'Troubleshoot', `
      <div style="color:white;font-size:22px;font-weight:600;margin-bottom:24px;">Other troubleshooters</div>
      ${[['🌐','Internet Connections','Find and fix problems with connecting to the internet','Run'],['📶','Network Adapter','Find and fix problems with wireless and other network adapters','Run'],['🖨️','Printer','Find and fix problems with printing','Run'],['🔊','Playing Audio','Find and fix problems with playing sound','Run']].map(([icon,name,desc,btn],i)=>`
        <div style="display:flex;align-items:center;gap:16px;padding:16px;background:#2a2a2a;border-radius:8px;margin-bottom:8px;${i===0?'border:2px solid #0078d4;':''}">
          <span style="font-size:24px;">${icon}</span>
          <div style="flex:1;"><div style="color:white;font-size:14px;">${name}</div><div style="color:#888;font-size:12px;">${desc}</div></div>
          <div style="padding:6px 16px;background:${i===0?'#0078d4':'#444'};border-radius:4px;color:white;font-size:12px;">${btn}</div>
        </div>
      `).join('')}
    `)
  },
  {
    file: 'troubleshoot-wifi-windows-step-3.png', w: 800, h: 400,
    html: doc(`${WIN_BASE} body{width:800px;height:400px;background:#111;display:flex;align-items:center;justify-content:center;}`, `
      <div style="background:#1a1a1a;border-radius:8px;width:640px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.5);">
        ${WIN_TITLEBAR('Administrator: Command Prompt')}
        <div style="padding:16px;font-family:'Cascadia Code','Consolas',monospace;font-size:13px;line-height:1.8;color:#ccc;background:#0c0c0c;">
          <div>C:\\Windows\\System32> <span style="color:#0078d4;">ipconfig /flushdns</span></div>
          <div style="margin-top:8px;">Windows IP Configuration</div>
          <div style="margin-top:8px;color:#6bdb6b;">Successfully flushed the DNS Resolver Cache.</div>
          <div style="margin-top:12px;">C:\\Windows\\System32> <span style="color:white;animation:blink 1s step-end infinite;">_</span></div>
        </div>
        <style>@keyframes blink{50%{opacity:0}}</style>
      </div>
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🖼  Generating ${SHOTS.length} Windows screenshots (batch 2)...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(OUT, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved to ${OUT}\n`);
})();
