/**
 * Screenshot generator — Safety Guides
 * Run: /usr/local/bin/node scripts/gen-screenshots-safety.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, BROWSER_BASE, BROWSER_CHROME,
  IPHONE_BASE, IPHONE_STATUS_BAR, IPHONE_HOME_INDICATOR,
  shot, doc, browserPage, iphonePage
} from './screenshot-templates.mjs';

const BROWSER_OUT = path.join(PUBLIC, 'browser');
const IPHONE_OUT  = path.join(PUBLIC, 'iphone');

const SHOTS = [

  // ═══════════════════════════════════════════════════════════════════════════════
  // stop-unwanted-calls (5 steps)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 1: DoNotCall.gov registration page
  {
    file: 'stop-unwanted-calls-step-1.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://www.donotcall.gov/register', 'National Do Not Call Registry', `
      <div style="min-height:600px;background:#fff;font-family:'Segoe UI',system-ui,sans-serif;">
        <!-- Header -->
        <div style="background:#003366;padding:12px 24px;display:flex;align-items:center;gap:12px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" fill="#fff"/><text x="16" y="22" text-anchor="middle" fill="#003366" font-size="18" font-weight="700">US</text></svg>
            <div style="color:white;font-size:18px;font-weight:700;">National Do Not Call Registry</div>
          </div>
          <div style="margin-left:auto;display:flex;gap:16px;color:rgba(255,255,255,0.8);font-size:13px;">
            <span>Register</span><span>Verify</span><span>Report</span><span>FAQ</span>
          </div>
        </div>
        <!-- Hero -->
        <div style="background:linear-gradient(135deg,#e8f4fd,#fff);padding:48px 60px;">
          <div style="max-width:600px;">
            <div style="font-size:32px;color:#003366;font-weight:700;margin-bottom:12px;">Register Your Phone Number</div>
            <div style="font-size:16px;color:#555;line-height:1.6;margin-bottom:32px;">Adding your number to the National Do Not Call Registry is free. It will reduce telemarketing calls within 31 days.</div>
            <div style="background:white;border:2px solid #0066cc;border-radius:8px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
              <div style="font-size:14px;color:#333;margin-bottom:8px;font-weight:600;">Phone number to register</div>
              <div style="display:flex;gap:12px;margin-bottom:16px;">
                <div style="flex:1;border:1px solid #ccc;border-radius:6px;padding:12px 16px;font-size:18px;color:#333;background:#f9f9f9;">(555) 123-4567</div>
              </div>
              <div style="font-size:14px;color:#333;margin-bottom:8px;font-weight:600;">Email address</div>
              <div style="border:1px solid #ccc;border-radius:6px;padding:12px 16px;font-size:16px;color:#333;background:#f9f9f9;margin-bottom:20px;">bailey@email.com</div>
              <div style="padding:12px 32px;background:#0066cc;color:white;border-radius:6px;font-size:16px;font-weight:600;text-align:center;cursor:pointer;">Register Your Number</div>
            </div>
          </div>
        </div>
      </div>
    `)
  },

  // Step 2: iPhone Silence Unknown Callers
  {
    file: 'stop-unwanted-calls-step-2.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <!-- Nav header -->
      <div style="display:flex;align-items:center;padding:8px 16px 12px;background:#000;">
        <div style="display:flex;align-items:center;gap:4px;color:#0a84ff;font-size:17px;"><span style="font-size:22px;">&#8249;</span><span style="font-size:15px;">Settings</span></div>
        <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">Phone</span>
        <div style="width:60px;"></div>
      </div>
      <div style="padding:0 16px;color:white;">
        <!-- Settings rows -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;margin-bottom:24px;">
          ${[['My Number','(555) 123-4567'],['Calls on Other Devices',''],['Wi-Fi Calling','On']].map(([l,v])=>`
            <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:0.5px solid #38383a;">
              <span style="color:white;font-size:16px;flex:1;">${l}</span>
              <span style="color:#8e8e93;font-size:16px;">${v}</span>
              <span style="color:#8e8e93;font-size:14px;margin-left:4px;">&#8250;</span>
            </div>
          `).join('')}
        </div>
        <!-- Silence Unknown Callers section (highlighted) -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;border:2px solid #30d158;">
          <div style="display:flex;align-items:center;padding:14px 16px;">
            <div style="flex:1;">
              <div style="color:white;font-size:16px;">Silence Unknown Callers</div>
            </div>
            <!-- Toggle ON -->
            <div style="width:51px;height:31px;background:#30d158;border-radius:16px;position:relative;cursor:pointer;">
              <div style="width:27px;height:27px;background:white;border-radius:50%;position:absolute;top:2px;right:2px;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
            </div>
          </div>
        </div>
        <div style="padding:8px 16px;font-size:13px;color:#8e8e93;line-height:1.5;">
          Calls from unknown numbers will be silenced, sent to voicemail, and displayed in the Recents list. Incoming calls will continue to ring from people in your contacts, recent outgoing calls, and Siri Suggestions.
        </div>
        <!-- Call Blocking section -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;margin-top:24px;">
          <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:0.5px solid #38383a;">
            <span style="color:white;font-size:16px;flex:1;">Blocked Contacts</span>
            <span style="color:#8e8e93;font-size:16px;">12</span>
            <span style="color:#8e8e93;font-size:14px;margin-left:4px;">&#8250;</span>
          </div>
          <div style="display:flex;align-items:center;padding:14px 16px;">
            <span style="color:white;font-size:16px;flex:1;">Call Blocking & Identification</span>
            <span style="color:#8e8e93;font-size:14px;margin-left:4px;">&#8250;</span>
          </div>
        </div>
      </div>
    `, '#000')
  },

  // Step 3: Hiya app showing spam call flagged
  {
    file: 'stop-unwanted-calls-step-3.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="flex:1;background:linear-gradient(180deg,#1a1a2e 0%,#16213e 100%);padding:40px 24px;text-align:center;">
        <!-- App bar -->
        <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:8px;">Incoming call identified by</div>
        <div style="font-size:18px;color:white;font-weight:600;margin-bottom:40px;">Hiya Caller ID</div>
        <!-- Caller info -->
        <div style="width:80px;height:80px;background:#e53935;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
          <span style="font-size:36px;color:white;">!</span>
        </div>
        <div style="font-size:28px;color:white;font-weight:600;margin-bottom:4px;">(800) 555-0199</div>
        <div style="display:inline-block;background:#e53935;color:white;padding:6px 20px;border-radius:20px;font-size:16px;font-weight:600;margin-bottom:8px;">
          Likely Spam
        </div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6);margin-bottom:48px;">Reported 2,847 times by Hiya users</div>
        <!-- Action buttons -->
        <div style="display:flex;justify-content:center;gap:24px;margin-bottom:40px;">
          <div style="text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
              <span style="font-size:24px;">🚫</span>
            </div>
            <div style="color:white;font-size:12px;">Block</div>
          </div>
          <div style="text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
              <span style="font-size:24px;">&#9888;</span>
            </div>
            <div style="color:white;font-size:12px;">Report</div>
          </div>
          <div style="text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
              <span style="font-size:24px;">&#128172;</span>
            </div>
            <div style="color:white;font-size:12px;">Message</div>
          </div>
        </div>
        <!-- Answer/Decline -->
        <div style="display:flex;justify-content:center;gap:60px;">
          <div style="text-align:center;">
            <div style="width:72px;height:72px;background:#e53935;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
              <span style="font-size:28px;color:white;transform:rotate(135deg);display:inline-block;">&#128222;</span>
            </div>
            <div style="color:white;font-size:13px;">Decline</div>
          </div>
          <div style="text-align:center;">
            <div style="width:72px;height:72px;background:#4caf50;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
              <span style="font-size:28px;color:white;">&#128222;</span>
            </div>
            <div style="color:white;font-size:13px;">Answer</div>
          </div>
        </div>
      </div>
    `, '#1a1a2e')
  },

  // Step 4: iPhone block caller screen
  {
    file: 'stop-unwanted-calls-step-4.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="display:flex;align-items:center;padding:8px 16px 12px;background:#000;">
        <div style="display:flex;align-items:center;gap:4px;color:#0a84ff;font-size:17px;"><span style="font-size:22px;">&#8249;</span><span style="font-size:15px;">Recents</span></div>
        <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">(800) 555-0199</span>
        <div style="width:60px;"></div>
      </div>
      <div style="padding:0 16px;color:white;">
        <!-- Contact info -->
        <div style="text-align:center;padding:20px 0;">
          <div style="width:80px;height:80px;background:#3a3a3c;border-radius:50%;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;">
            <span style="font-size:32px;color:#8e8e93;">&#128100;</span>
          </div>
          <div style="font-size:20px;color:white;margin-bottom:4px;">(800) 555-0199</div>
          <div style="font-size:14px;color:#8e8e93;">United States</div>
        </div>
        <!-- Action buttons -->
        <div style="display:flex;justify-content:center;gap:24px;margin-bottom:24px;">
          ${[['&#128222;','Call','#30d158'],['&#128172;','Message','#0a84ff'],['&#9993;','Mail','#0a84ff']].map(([icon,label,color])=>`
            <div style="text-align:center;">
              <div style="width:56px;height:56px;background:#1c1c1e;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 4px;">
                <span style="font-size:22px;color:${color};">${icon}</span>
              </div>
              <div style="color:#0a84ff;font-size:12px;">${label}</div>
            </div>
          `).join('')}
        </div>
        <!-- Call history -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;margin-bottom:24px;">
          ${[['Today 2:14 PM','Incoming — Missed','#e53935'],['Today 1:58 PM','Incoming — Missed','#e53935'],['Yesterday 4:22 PM','Incoming — Missed','#e53935']].map(([time,type,color])=>`
            <div style="padding:12px 16px;border-bottom:0.5px solid #38383a;">
              <div style="font-size:15px;color:white;">${time}</div>
              <div style="font-size:13px;color:${color};">${type}</div>
            </div>
          `).join('')}
        </div>
        <!-- Block button (highlighted) -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;border:2px solid #e53935;">
          <div style="padding:14px 16px;text-align:center;">
            <span style="color:#e53935;font-size:17px;font-weight:500;">Block this Caller</span>
          </div>
        </div>
      </div>
    `, '#000')
  },

  // Step 5: Phone scam red flags infographic
  {
    file: 'stop-unwanted-calls-step-5.png', out: BROWSER_OUT, w: 1280, h: 700,
    html: doc(`${BROWSER_BASE} body{width:1280px;height:700px;background:#1a1a2e;display:flex;align-items:center;justify-content:center;font-family:-apple-system,'Segoe UI',system-ui,sans-serif;}`, `
      <div style="background:white;border-radius:16px;padding:40px 48px;max-width:900px;box-shadow:0 4px 24px rgba(0,0,0,0.3);">
        <div style="text-align:center;margin-bottom:32px;">
          <div style="font-size:28px;font-weight:700;color:#1a1a2e;">Phone Scam Red Flags</div>
          <div style="font-size:14px;color:#666;margin-top:4px;">Hang up immediately if you hear any of these</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          ${[
            ['&#128680;','IRS / Government Threats','"You owe the IRS money and will be arrested." The IRS always contacts you by mail first.','#e53935'],
            ['&#127873;','Gift Card Payments','"Pay us with iTunes or Amazon gift cards." No real company accepts gift cards as payment.','#ff9800'],
            ['&#127942;','Prize / Lottery Wins','"You\'ve won $50,000! Just pay the processing fee." Real prizes don\'t require upfront payment.','#9c27b0'],
            ['&#9203;','Urgent Pressure','"Act RIGHT NOW or lose your account!" Scammers create fake urgency to stop you from thinking.','#f44336'],
            ['&#128187;','Tech Support Scams','"Your computer has a virus — we need remote access." Microsoft and Apple will never call you.','#2196f3'],
            ['&#128176;','Wire Transfer Requests','"Wire money to this account immediately." Wire transfers are nearly impossible to reverse.','#4caf50']
          ].map(([icon,title,desc,color])=>`
            <div style="display:flex;gap:12px;padding:16px;background:#f8f9fa;border-radius:8px;border-left:4px solid ${color};">
              <div style="font-size:28px;flex-shrink:0;">${icon}</div>
              <div>
                <div style="font-size:15px;font-weight:600;color:#333;margin-bottom:4px;">${title}</div>
                <div style="font-size:13px;color:#666;line-height:1.4;">${desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:20px;padding:12px 16px;background:#e8f5e9;border-radius:8px;text-align:center;font-size:13px;color:#2e7d32;">
          Report phone scams at <b>ReportFraud.ftc.gov</b> &mdash; Learn more at <b>consumer.ftc.gov/scams</b>
        </div>
      </div>
    `)
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // digital-vault-guide (4 steps)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 1: AARP Digital Vault dashboard
  {
    file: 'digital-vault-guide-step-1.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://vault.aarp.org/dashboard', 'AARP Digital Vault — My Documents', `
      <div style="display:flex;min-height:600px;font-family:'Segoe UI',system-ui,sans-serif;">
        <!-- Sidebar -->
        <div style="width:240px;background:#f0f0f0;padding:24px 16px;border-right:1px solid #ddd;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:24px;">
            <div style="width:32px;height:32px;background:#e00;border-radius:6px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700;">AARP</div>
            <div style="font-size:14px;color:#333;font-weight:600;">Digital Vault</div>
          </div>
          ${['Dashboard','Financial','Legal','Medical','Insurance','Personal','Shared'].map((n,i)=>`
            <div style="padding:10px 12px;border-radius:6px;font-size:14px;color:${i===0?'white':'#555'};background:${i===0?'#e00':'transparent'};margin-bottom:2px;font-weight:${i===0?'500':'400'};">${['&#128202;','&#128176;','&#9878;','&#9764;','&#128737;','&#128100;','&#128101;'][i]} ${n}</div>
          `).join('')}
        </div>
        <!-- Main -->
        <div style="flex:1;padding:32px;background:white;">
          <div style="font-size:24px;color:#333;font-weight:700;margin-bottom:8px;">Welcome to Your Vault</div>
          <div style="font-size:14px;color:#666;margin-bottom:24px;">8 documents stored &middot; Last updated 2 days ago</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            ${[['&#128176;','Financial','3 files','#1565c0'],['&#9878;','Legal','2 files','#6a1b9a'],['&#9764;','Medical','1 file','#2e7d32'],['&#128737;','Insurance','2 files','#e65100'],['&#128100;','Personal','0 files','#546e7a'],['&#10133;','Add Category','','#999']].map(([icon,name,count,color])=>`
              <div style="border:1px solid #e0e0e0;border-radius:12px;padding:20px;text-align:center;cursor:pointer;${name==='Add Category'?'border-style:dashed;':''}">
                <div style="font-size:36px;margin-bottom:8px;">${icon}</div>
                <div style="font-size:16px;font-weight:600;color:${color};">${name}</div>
                <div style="font-size:13px;color:#999;margin-top:4px;">${count}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // Step 2: Upload checklist
  {
    file: 'digital-vault-guide-step-2.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://vault.aarp.org/upload', 'Upload Documents — AARP Digital Vault', `
      <div style="padding:32px 48px;font-family:'Segoe UI',system-ui,sans-serif;max-width:700px;margin:0 auto;">
        <div style="font-size:24px;color:#333;font-weight:700;margin-bottom:4px;">Upload Essential Documents</div>
        <div style="font-size:14px;color:#666;margin-bottom:24px;">Scan and upload your most important papers</div>
        <div style="background:#f8f9fa;border-radius:12px;padding:24px;">
          ${[
            ["Driver's License (front & back)", true],
            ['Passport', true],
            ['Social Security Card', true],
            ['Birth Certificate', true],
            ['Health Insurance Card', true],
            ['Medicare Card', false],
            ['Will / Power of Attorney', false],
            ['Property Deed', false],
            ['Life Insurance Policy', false],
            ['Vaccination Records', true],
          ].map(([item, done]) => `
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #eee;">
              <div style="width:24px;height:24px;border-radius:6px;${done?'background:#4caf50;':'border:2px solid #ccc;'}display:flex;align-items:center;justify-content:center;">
                ${done?'<span style="color:white;font-size:14px;">&#10003;</span>':''}
              </div>
              <span style="font-size:15px;color:${done?'#333':'#888'};${done?'':'font-style:italic;'}">${item}</span>
              ${done?'<span style="margin-left:auto;font-size:12px;color:#4caf50;">Uploaded</span>':'<span style="margin-left:auto;font-size:12px;color:#999;">Pending</span>'}
            </div>
          `).join('')}
        </div>
        <div style="margin-top:16px;padding:16px;background:#e3f2fd;border-radius:8px;font-size:13px;color:#1565c0;">
          &#128161; Tip: Use your phone camera to scan documents. The Notes app (iPhone) or Google Drive (Android) has a built-in document scanner.
        </div>
      </div>
    `)
  },

  // Step 3: Trusted contacts setup
  {
    file: 'digital-vault-guide-step-3.png', out: BROWSER_OUT, w: 1280, h: 700,
    html: browserPage('https://vault.aarp.org/contacts', 'Trusted Contacts — AARP Digital Vault', `
      <div style="padding:32px 48px;font-family:'Segoe UI',system-ui,sans-serif;max-width:700px;margin:0 auto;">
        <div style="font-size:24px;color:#333;font-weight:700;margin-bottom:4px;">Trusted Contacts</div>
        <div style="font-size:14px;color:#666;margin-bottom:24px;">Designate who can access specific sections of your vault</div>
        ${[
          ['Sarah W.','Daughter','Financial, Legal','sarah.w@email.com','#e91e63'],
          ['James W.','Son','Medical, Insurance','james.w@email.com','#2196f3']
        ].map(([name,relation,access,email,color])=>`
          <div style="border:1px solid #e0e0e0;border-radius:12px;padding:20px;margin-bottom:12px;display:flex;align-items:center;gap:16px;">
            <div style="width:52px;height:52px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:600;">${name[0]}</div>
            <div style="flex:1;">
              <div style="font-size:16px;color:#333;font-weight:600;">${name} <span style="font-size:13px;color:#888;font-weight:400;">(${relation})</span></div>
              <div style="font-size:13px;color:#666;margin-top:2px;">${email}</div>
              <div style="margin-top:8px;display:flex;gap:6px;">
                ${access.split(', ').map(a=>`<span style="background:#e8f5e9;color:#2e7d32;padding:2px 10px;border-radius:12px;font-size:12px;">${a}</span>`).join('')}
              </div>
            </div>
            <div style="padding:8px 16px;border:1px solid #ddd;border-radius:6px;font-size:13px;color:#666;cursor:pointer;">Edit Access</div>
          </div>
        `).join('')}
        <div style="border:2px dashed #ccc;border-radius:12px;padding:20px;text-align:center;color:#999;cursor:pointer;margin-top:12px;">
          <span style="font-size:24px;">&#10133;</span>
          <div style="font-size:14px;margin-top:4px;">Add Trusted Contact</div>
        </div>
      </div>
    `)
  },

  // Step 4: Calendar reminder
  {
    file: 'digital-vault-guide-step-4.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="padding:60px 24px 0;">
        <!-- Notification banner -->
        <div style="background:#2c2c2e;border-radius:16px;padding:16px;margin-bottom:24px;box-shadow:0 4px 12px rgba(0,0,0,0.3);">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#ff3b30,#ff6b6b);border-radius:8px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:18px;color:white;">&#128197;</span>
            </div>
            <div>
              <div style="font-size:13px;color:#8e8e93;">CALENDAR &middot; now</div>
              <div style="font-size:15px;color:white;font-weight:600;">Review Digital Vault</div>
            </div>
          </div>
          <div style="font-size:14px;color:#ccc;line-height:1.5;padding-left:46px;">
            Time to review your vault. Check for expired documents, update insurance cards, and verify trusted contacts are current.
          </div>
        </div>
        <!-- Checklist card -->
        <div style="background:#1c1c1e;border-radius:16px;padding:20px;">
          <div style="font-size:17px;color:white;font-weight:600;margin-bottom:16px;">6-Month Review Checklist</div>
          ${[
            ['Update expired insurance cards', false],
            ['Add new prescriptions', false],
            ['Verify trusted contact emails', false],
            ['Check for new financial accounts', false],
            ['Review will / power of attorney', false],
          ].map(([item, done]) => `
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:0.5px solid #38383a;">
              <div style="width:22px;height:22px;border-radius:50%;${done?'background:#30d158;':'border:2px solid #555;'}display:flex;align-items:center;justify-content:center;">
                ${done?'<span style="color:white;font-size:12px;">&#10003;</span>':''}
              </div>
              <span style="font-size:15px;color:${done?'#8e8e93':'white'};">${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `, '#000')
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // banking-apps-security (3 steps with screenshotDesc)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 1: Bank website with download buttons
  {
    file: 'banking-apps-security-step-1.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://www.bankofamerica.com/mobile-banking/', 'Mobile Banking — Bank of America', `
      <div style="font-family:'Segoe UI',system-ui,sans-serif;">
        <!-- Bank header -->
        <div style="background:#012169;padding:12px 32px;display:flex;align-items:center;gap:16px;">
          <div style="font-size:18px;color:white;font-weight:700;">Bank of America</div>
          <div style="margin-left:auto;display:flex;gap:16px;color:rgba(255,255,255,0.8);font-size:13px;">
            <span>Personal</span><span>Small Business</span><span>Wealth Management</span>
          </div>
        </div>
        <!-- Hero section -->
        <div style="background:linear-gradient(135deg,#f5f7fa,#e8ecf1);padding:48px 60px;display:flex;align-items:center;gap:48px;">
          <div style="flex:1;">
            <div style="font-size:32px;color:#012169;font-weight:700;line-height:1.2;margin-bottom:12px;">Bank anytime,<br>anywhere</div>
            <div style="font-size:16px;color:#555;line-height:1.6;margin-bottom:28px;">Download our official mobile banking app to check balances, pay bills, transfer money, and more — securely from your phone.</div>
            <div style="font-size:14px;color:#333;font-weight:600;margin-bottom:12px;">Download our app:</div>
            <div style="display:flex;gap:12px;">
              <div style="background:#000;border-radius:8px;padding:8px 16px;display:flex;align-items:center;gap:8px;cursor:pointer;border:2px solid #4caf50;">
                <span style="font-size:24px;color:white;">&#63743;</span>
                <div><div style="color:#ccc;font-size:10px;">Download on the</div><div style="color:white;font-size:14px;font-weight:600;">App Store</div></div>
              </div>
              <div style="background:#000;border-radius:8px;padding:8px 16px;display:flex;align-items:center;gap:8px;cursor:pointer;border:2px solid #4caf50;">
                <span style="font-size:24px;color:white;">&#9654;</span>
                <div><div style="color:#ccc;font-size:10px;">GET IT ON</div><div style="color:white;font-size:14px;font-weight:600;">Google Play</div></div>
              </div>
            </div>
            <div style="margin-top:12px;font-size:12px;color:#4caf50;font-weight:500;">&#10003; Always download from your bank's website — not search results</div>
          </div>
          <div style="width:200px;height:380px;background:#1a1a2e;border-radius:28px;border:3px solid #333;display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;color:white;">
              <div style="font-size:48px;margin-bottom:8px;">&#127974;</div>
              <div style="font-size:14px;font-weight:600;">Bank of America</div>
              <div style="font-size:11px;color:#888;">Mobile Banking</div>
            </div>
          </div>
        </div>
      </div>
    `)
  },

  // Step 2: Biometric login
  {
    file: 'banking-apps-security-step-2.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="flex:1;background:linear-gradient(180deg,#012169,#023e8a);padding:40px 24px;text-align:center;">
        <!-- Bank logo -->
        <div style="margin-bottom:40px;">
          <div style="font-size:20px;color:white;font-weight:700;">Bank of America</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.6);">Mobile Banking</div>
        </div>
        <!-- Face ID icon -->
        <div style="width:120px;height:120px;border:3px solid rgba(255,255,255,0.3);border-radius:28px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;position:relative;">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M15 8 L8 8 L8 15" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M45 8 L52 8 L52 15" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M15 52 L8 52 L8 45" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M45 52 L52 52 L52 45" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="22" cy="24" r="2" fill="white"/>
            <circle cx="38" cy="24" r="2" fill="white"/>
            <line x1="30" y1="22" x2="30" y2="34" stroke="white" stroke-width="2"/>
            <path d="M22 40 Q30 46 38 40" stroke="white" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <div style="font-size:20px;color:white;font-weight:600;margin-bottom:8px;">Enable Face ID</div>
        <div style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.5;margin-bottom:40px;max-width:280px;margin-left:auto;margin-right:auto;">
          Log in faster and more securely with Face ID instead of typing your password
        </div>
        <!-- Enable button -->
        <div style="background:#30d158;color:white;padding:16px 32px;border-radius:12px;font-size:17px;font-weight:600;margin-bottom:16px;">Enable Face ID</div>
        <div style="color:rgba(255,255,255,0.5);font-size:15px;">Not now</div>
      </div>
    `, '#012169')
  },

  // Step 3: Payment form
  {
    file: 'banking-apps-security-step-3.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="display:flex;align-items:center;padding:8px 16px 12px;background:#012169;">
        <div style="display:flex;align-items:center;gap:4px;color:#5db0ff;font-size:17px;"><span style="font-size:22px;">&#8249;</span><span style="font-size:15px;">Accounts</span></div>
        <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">New Payment</span>
        <div style="width:60px;"></div>
      </div>
      <div style="background:#f5f7fa;flex:1;padding:16px;">
        <!-- From account -->
        <div style="background:white;border-radius:12px;padding:16px;margin-bottom:12px;">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">From</div>
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="font-size:15px;color:#333;font-weight:500;">Checking ****4821</div>
            <span style="margin-left:auto;font-size:15px;color:#333;font-weight:600;">$3,247.50</span>
          </div>
        </div>
        <!-- To -->
        <div style="background:white;border-radius:12px;padding:16px;margin-bottom:12px;">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Pay To</div>
          <div style="margin-bottom:12px;">
            <div style="font-size:13px;color:#666;margin-bottom:4px;">Account Name</div>
            <div style="border:1px solid #ddd;border-radius:8px;padding:10px 14px;font-size:15px;color:#333;">Electric Company</div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;">
              <div style="font-size:13px;color:#666;margin-bottom:4px;">Sort Code</div>
              <div style="border:1px solid #ddd;border-radius:8px;padding:10px 14px;font-size:15px;color:#333;">12-34-56</div>
            </div>
            <div style="flex:1;">
              <div style="font-size:13px;color:#666;margin-bottom:4px;">Account Number</div>
              <div style="border:1px solid #ddd;border-radius:8px;padding:10px 14px;font-size:15px;color:#333;">12345678</div>
            </div>
          </div>
        </div>
        <!-- Amount -->
        <div style="background:white;border-radius:12px;padding:16px;margin-bottom:16px;">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Amount</div>
          <div style="border:1px solid #ddd;border-radius:8px;padding:10px 14px;font-size:24px;color:#333;font-weight:600;">$142.50</div>
        </div>
        <!-- Warning -->
        <div style="background:#fff3e0;border-radius:8px;padding:10px 14px;margin-bottom:16px;display:flex;align-items:center;gap:8px;">
          <span style="font-size:18px;">&#9888;</span>
          <span style="font-size:13px;color:#e65100;">Double-check all details. Transfers may not be reversible.</span>
        </div>
        <!-- Submit -->
        <div style="background:#012169;color:white;padding:16px;border-radius:12px;font-size:17px;font-weight:600;text-align:center;">Review Payment</div>
      </div>
    `, '#012169')
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // two-factor-auth (2 steps with screenshotDesc)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 3: Authenticator app with codes
  {
    file: 'two-factor-auth-step-3.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="display:flex;align-items:center;padding:8px 16px 12px;background:#000;">
        <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">Google Authenticator</span>
      </div>
      <div style="padding:16px;color:white;">
        ${[
          ['Google','bailey@gmail.com','482 917','#4285f4',22],
          ['Facebook','bailey.wilburn','739 528','#1877f2',14],
        ].map(([service,account,code,color,seconds])=>`
          <div style="background:#1c1c1e;border-radius:16px;padding:20px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <div style="width:40px;height:40px;background:${color};border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;">${service[0]}</div>
              <div>
                <div style="font-size:14px;color:#8e8e93;">${service}</div>
                <div style="font-size:13px;color:#666;">${account}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="font-size:36px;color:white;font-weight:300;letter-spacing:6px;font-family:monospace;">${code}</div>
              <div style="margin-left:auto;position:relative;width:40px;height:40px;">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="none" stroke="#333" stroke-width="3"/>
                  <circle cx="20" cy="20" r="17" fill="none" stroke="${seconds>10?'#30d158':'#ff9f0a'}" stroke-width="3" stroke-dasharray="${2*Math.PI*17}" stroke-dashoffset="${2*Math.PI*17*(1-seconds/30)}" transform="rotate(-90 20 20)"/>
                </svg>
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:14px;color:white;font-weight:500;">${seconds}s</div>
              </div>
            </div>
          </div>
        `).join('')}
        <!-- Add account button -->
        <div style="margin-top:24px;text-align:center;">
          <div style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#1c1c1e;border-radius:12px;cursor:pointer;">
            <span style="font-size:20px;color:#0a84ff;">&#10133;</span>
            <span style="font-size:15px;color:#0a84ff;">Add Account</span>
          </div>
        </div>
        <!-- Info -->
        <div style="margin-top:24px;padding:16px;background:#1c1c1e;border-radius:12px;">
          <div style="font-size:13px;color:#8e8e93;line-height:1.5;">Codes refresh every 30 seconds. Enter the current code when a website asks for your verification code during sign-in.</div>
        </div>
      </div>
    `, '#000')
  },

  // Step 4: Google 2FA on
  {
    file: 'two-factor-auth-step-4.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://myaccount.google.com/security', 'Security — Google Account', `
      <div style="display:flex;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:240px;background:#f8f9fa;padding:24px 16px;">
          ${['Home','Personal info','Data & privacy','Security','People & sharing'].map((n,i)=>`
            <div style="padding:10px 16px;border-radius:20px;font-size:14px;color:${i===3?'#1a73e8':'#5f6368'};background:${i===3?'#e8f0fe':'transparent'};margin-bottom:4px;font-weight:${i===3?'500':'400'};">${n}</div>
          `).join('')}
        </div>
        <div style="flex:1;padding:32px 40px;background:white;">
          <div style="font-size:24px;color:#202124;margin-bottom:24px;">Security</div>
          <!-- Success banner -->
          <div style="background:#e6f4ea;border-radius:8px;padding:16px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
            <span style="font-size:24px;">&#9989;</span>
            <div><div style="color:#137333;font-size:14px;font-weight:500;">Your account is protected</div><div style="color:#5f6368;font-size:13px;">2-Step Verification is on</div></div>
          </div>
          <div style="border:1px solid #dadce0;border-radius:8px;padding:20px;display:flex;align-items:center;gap:16px;">
            <span style="font-size:28px;">&#128272;</span>
            <div style="flex:1;">
              <div style="font-size:16px;color:#202124;">2-Step Verification</div>
              <div style="color:#137333;font-size:13px;font-weight:500;">On &mdash; since March 15, 2026</div>
            </div>
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font-size:16px;color:#137333;">&#10003;</span>
              <div style="padding:8px 24px;border:1px solid #dadce0;border-radius:4px;font-size:14px;color:#5f6368;">Manage</div>
            </div>
          </div>
          <!-- Methods -->
          <div style="margin-top:20px;border:1px solid #dadce0;border-radius:8px;overflow:hidden;">
            <div style="padding:12px 16px;background:#f8f9fa;font-size:13px;color:#5f6368;font-weight:500;">Active verification methods</div>
            ${[['Google Authenticator','Codes refresh every 30 seconds','&#128241;'],['Backup codes','8 of 10 remaining','&#128196;']].map(([method,desc,icon])=>`
              <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-top:1px solid #dadce0;">
                <span style="font-size:20px;">${icon}</span>
                <div style="flex:1;"><div style="font-size:14px;color:#202124;">${method}</div><div style="font-size:12px;color:#5f6368;">${desc}</div></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // digital-legacy (2 steps with screenshotDesc)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 3: Apple Legacy Contact (iPhone)
  {
    file: 'digital-legacy-step-3.png', out: IPHONE_OUT, w: 390, h: 844,
    html: iphonePage(`
      <div style="display:flex;align-items:center;padding:8px 16px 12px;background:#000;">
        <div style="display:flex;align-items:center;gap:4px;color:#0a84ff;font-size:17px;"><span style="font-size:22px;">&#8249;</span><span style="font-size:15px;">Apple ID</span></div>
        <span style="flex:1;text-align:center;color:white;font-size:17px;font-weight:600;">Password & Security</span>
        <div style="width:60px;"></div>
      </div>
      <div style="padding:0 16px;color:white;">
        <!-- Apple ID card -->
        <div style="text-align:center;padding:16px 0 20px;">
          <div style="width:64px;height:64px;background:linear-gradient(135deg,#5856d6,#af52de);border-radius:50%;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;">
            <span style="font-size:28px;color:white;">B</span>
          </div>
          <div style="font-size:15px;color:#8e8e93;">bailey@icloud.com</div>
        </div>
        <!-- Settings -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;margin-bottom:16px;">
          <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:0.5px solid #38383a;">
            <span style="color:white;font-size:16px;flex:1;">Change Password</span>
            <span style="color:#8e8e93;font-size:14px;">&#8250;</span>
          </div>
          <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:0.5px solid #38383a;">
            <span style="color:white;font-size:16px;flex:1;">Two-Factor Authentication</span>
            <span style="color:#30d158;font-size:14px;margin-right:4px;">On</span>
            <span style="color:#8e8e93;font-size:14px;">&#8250;</span>
          </div>
        </div>
        <!-- Legacy Contact (highlighted) -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;border:2px solid #0a84ff;margin-bottom:8px;">
          <div style="display:flex;align-items:center;padding:14px 16px;">
            <div style="width:32px;height:32px;background:#5856d6;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-right:12px;">
              <span style="font-size:16px;color:white;">&#128101;</span>
            </div>
            <div style="flex:1;">
              <div style="color:white;font-size:16px;">Legacy Contact</div>
              <div style="color:#8e8e93;font-size:13px;">1 contact added</div>
            </div>
            <span style="color:#8e8e93;font-size:14px;">&#8250;</span>
          </div>
        </div>
        <div style="padding:4px 16px 16px;font-size:13px;color:#8e8e93;line-height:1.5;">
          A Legacy Contact can request access to your Apple ID data after you pass away. They cannot access your account while you are alive.
        </div>
        <!-- Account Recovery -->
        <div style="background:#1c1c1e;border-radius:12px;overflow:hidden;">
          <div style="display:flex;align-items:center;padding:14px 16px;">
            <span style="color:white;font-size:16px;flex:1;">Account Recovery</span>
            <span style="color:#8e8e93;font-size:14px;">&#8250;</span>
          </div>
        </div>
      </div>
    `, '#000')
  },

  // Step 4: Google Inactive Account Manager
  {
    file: 'digital-legacy-step-4.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('https://myaccount.google.com/inactive', 'Inactive Account Manager — Google Account', `
      <div style="display:flex;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:240px;background:#f8f9fa;padding:24px 16px;">
          ${['Home','Personal info','Data & privacy','Security','People & sharing'].map((n,i)=>`
            <div style="padding:10px 16px;border-radius:20px;font-size:14px;color:${i===2?'#1a73e8':'#5f6368'};background:${i===2?'#e8f0fe':'transparent'};margin-bottom:4px;font-weight:${i===2?'500':'400'};">${n}</div>
          `).join('')}
        </div>
        <div style="flex:1;padding:32px 40px;background:white;">
          <div style="font-size:24px;color:#202124;margin-bottom:8px;">Inactive Account Manager</div>
          <div style="font-size:14px;color:#5f6368;margin-bottom:24px;">Make a plan for your account in case you can't use it anymore</div>
          <!-- Status card -->
          <div style="border:1px solid #dadce0;border-radius:12px;padding:24px;margin-bottom:20px;background:#f8f9fa;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
              <span style="font-size:28px;">&#9203;</span>
              <div>
                <div style="font-size:16px;color:#202124;font-weight:500;">Timeout period</div>
                <div style="font-size:14px;color:#5f6368;">If my account is inactive for <b>6 months</b></div>
              </div>
              <div style="margin-left:auto;padding:6px 16px;border:1px solid #dadce0;border-radius:4px;font-size:13px;color:#1a73e8;cursor:pointer;">Change</div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
              <span style="font-size:28px;">&#128233;</span>
              <div>
                <div style="font-size:16px;color:#202124;font-weight:500;">Notify contacts</div>
                <div style="font-size:14px;color:#5f6368;">2 trusted contacts will be notified</div>
              </div>
              <div style="margin-left:auto;padding:6px 16px;border:1px solid #dadce0;border-radius:4px;font-size:13px;color:#1a73e8;cursor:pointer;">Edit</div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:28px;">&#128230;</span>
              <div>
                <div style="font-size:16px;color:#202124;font-weight:500;">Share data</div>
                <div style="font-size:14px;color:#5f6368;">Gmail, Drive, and Photos will be shared</div>
              </div>
              <div style="margin-left:auto;padding:6px 16px;border:1px solid #dadce0;border-radius:4px;font-size:13px;color:#1a73e8;cursor:pointer;">Edit</div>
            </div>
          </div>
          <!-- Trusted contacts list -->
          <div style="border:1px solid #dadce0;border-radius:12px;overflow:hidden;">
            <div style="padding:12px 16px;background:#f8f9fa;font-size:13px;color:#5f6368;font-weight:500;">Trusted contacts</div>
            ${[['Sarah Wilburn','sarah.w@email.com','Gmail, Drive, Photos'],['James Wilburn','james.w@email.com','Drive, Photos']].map(([name,email,data])=>`
              <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-top:1px solid #dadce0;">
                <div style="width:36px;height:36px;background:#e8f0fe;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#1a73e8;font-size:14px;font-weight:600;">${name[0]}</div>
                <div style="flex:1;"><div style="font-size:14px;color:#202124;">${name}</div><div style="font-size:12px;color:#5f6368;">${email} &middot; Access: ${data}</div></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // home-network-security (1 step with screenshotDesc)
  // ═══════════════════════════════════════════════════════════════════════════════

  // Step 5: Router admin panel — Guest Network
  {
    file: 'home-network-security-step-5.png', out: BROWSER_OUT, w: 1280, h: 800,
    html: browserPage('http://192.168.1.1/wireless/guest', 'Router Admin — Guest Network', `
      <div style="display:flex;min-height:600px;font-family:'Segoe UI',system-ui,sans-serif;">
        <!-- Router sidebar -->
        <div style="width:220px;background:#1a2332;padding:16px;">
          <div style="text-align:center;margin-bottom:20px;">
            <div style="font-size:20px;color:white;font-weight:700;">NETGEAR</div>
            <div style="font-size:11px;color:#5a7a9e;">R7000 Nighthawk</div>
          </div>
          ${['Dashboard','Internet','Wireless','Guest Network','Security','Connected Devices','Advanced','Firmware Update'].map((n,i)=>`
            <div style="padding:10px 12px;border-radius:6px;font-size:13px;color:${i===3?'white':'#8a9bb5'};background:${i===3?'rgba(0,120,212,0.3)':'transparent'};margin-bottom:2px;border-left:${i===3?'3px solid #0078d4':'3px solid transparent'};padding-left:${i===3?'9px':'12px'};">${n}</div>
          `).join('')}
        </div>
        <!-- Main content -->
        <div style="flex:1;background:#f0f2f5;padding:32px;">
          <div style="font-size:22px;color:#333;font-weight:700;margin-bottom:24px;">Guest Network Settings</div>
          <div style="background:white;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:24px;max-width:600px;">
            <!-- Toggle -->
            <div style="display:flex;align-items:center;margin-bottom:24px;">
              <div style="flex:1;">
                <div style="font-size:16px;color:#333;font-weight:600;">Enable Guest Network</div>
                <div style="font-size:13px;color:#666;">Allow guests to use your internet without accessing your main network</div>
              </div>
              <div style="width:51px;height:31px;background:#0078d4;border-radius:16px;position:relative;cursor:pointer;">
                <div style="width:27px;height:27px;background:white;border-radius:50%;position:absolute;top:2px;right:2px;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
              </div>
            </div>
            <!-- SSID -->
            <div style="margin-bottom:16px;">
              <div style="font-size:13px;color:#555;font-weight:500;margin-bottom:6px;">Network Name (SSID)</div>
              <div style="border:1px solid #ddd;border-radius:6px;padding:10px 14px;font-size:15px;color:#333;">Guest-Network</div>
            </div>
            <!-- Password -->
            <div style="margin-bottom:16px;">
              <div style="font-size:13px;color:#555;font-weight:500;margin-bottom:6px;">Password</div>
              <div style="display:flex;gap:8px;">
                <div style="flex:1;border:1px solid #ddd;border-radius:6px;padding:10px 14px;font-size:15px;color:#333;">Welcome2024!</div>
                <div style="padding:10px 16px;background:#f0f0f0;border-radius:6px;font-size:13px;color:#555;cursor:pointer;">Show</div>
              </div>
            </div>
            <!-- Security -->
            <div style="margin-bottom:20px;">
              <div style="font-size:13px;color:#555;font-weight:500;margin-bottom:6px;">Security</div>
              <div style="border:1px solid #ddd;border-radius:6px;padding:10px 14px;font-size:15px;color:#333;display:flex;justify-content:space-between;">
                <span>WPA2-PSK (AES)</span>
                <span style="color:#888;">&#9660;</span>
              </div>
            </div>
            <!-- Info box -->
            <div style="background:#e3f2fd;border-radius:6px;padding:12px;font-size:13px;color:#1565c0;display:flex;align-items:center;gap:8px;margin-bottom:20px;">
              <span style="font-size:16px;">&#128161;</span>
              Guests can access the internet but cannot see your computers or smart home devices.
            </div>
            <!-- Save -->
            <div style="display:flex;justify-content:flex-end;gap:8px;">
              <div style="padding:10px 20px;border:1px solid #ddd;border-radius:6px;font-size:14px;color:#666;cursor:pointer;">Cancel</div>
              <div style="padding:10px 20px;background:#0078d4;color:white;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;">Save Settings</div>
            </div>
          </div>
        </div>
      </div>
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🔒 Generating ${SHOTS.length} Safety Guide screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(s.out, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved\n`);
})();
