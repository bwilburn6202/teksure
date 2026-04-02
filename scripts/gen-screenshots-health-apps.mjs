/**
 * Generate screenshots for health-tech and app guides (April 2026 batch).
 * Run: /usr/local/bin/node scripts/gen-screenshots-health-apps.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { mkdirSync } from 'fs';
import {
  PUBLIC, shot, doc,
  BROWSER_BASE, BROWSER_CHROME, browserPage,
  IPHONE_BASE, IPHONE_STATUS_BAR, IPHONE_HOME_INDICATOR, iphonePage,
  ANDROID_BASE, ANDROID_STATUS_BAR, ANDROID_NAV_BAR, androidPage,
} from './screenshot-templates.mjs';

// Ensure output dirs
for (const d of ['browser', 'iphone', 'android']) {
  mkdirSync(path.join(PUBLIC, d), { recursive: true });
}

const browser = await chromium.launch();
const page = await browser.newPage();

// ─────────────────────────────────────────────────────────────────────────────
// 1. MyChart — browser dashboard (1280×800)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n🏥 MyChart dashboard…');
await shot(page, browserPage('https://mychart.com', 'MyChart - Your Health Dashboard', `
  <div style="display:flex;height:100%;font-family:-apple-system,'Segoe UI',sans-serif;">
    <!-- Sidebar -->
    <div style="width:220px;background:#1a3a5c;color:white;padding:20px 0;">
      <div style="padding:12px 20px;font-size:18px;font-weight:700;border-bottom:1px solid rgba(255,255,255,0.15);margin-bottom:8px;">
        <span style="color:#4fc3f7;">♥</span> MyChart
      </div>
      <div style="padding:0 8px;">
        ${['Home,🏠', 'Appointments,📅', 'Test Results,🔬', 'Messages,✉️', 'Medications,💊', 'Billing,💳', 'My Health,❤️'].map((item, i) => {
          const [label, icon] = item.split(',');
          const active = i === 0;
          return `<div style="padding:10px 14px;border-radius:8px;font-size:14px;display:flex;align-items:center;gap:10px;background:${active ? 'rgba(255,255,255,0.12)' : 'transparent'};margin-bottom:2px;cursor:pointer;">
            <span style="font-size:16px;">${icon}</span>${label}
          </div>`;
        }).join('')}
      </div>
    </div>
    <!-- Main -->
    <div style="flex:1;background:#f5f7fa;padding:28px 32px;overflow:hidden;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
        <div>
          <div style="font-size:22px;font-weight:700;color:#1a3a5c;">Welcome back, Robert</div>
          <div style="color:#666;font-size:14px;margin-top:4px;">Here is your health summary</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;background:#e3f2fd;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🔔</div>
          <div style="width:40px;height:40px;background:#1a3a5c;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600;">RW</div>
        </div>
      </div>
      <!-- Cards row -->
      <div style="display:flex;gap:16px;margin-bottom:24px;">
        <div style="flex:1;background:white;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Upcoming Appointments</div>
          <div style="font-size:28px;font-weight:700;color:#1a3a5c;margin:8px 0;">2</div>
          <div style="font-size:13px;color:#4caf50;">Next: Dr. Patel — Apr 8</div>
        </div>
        <div style="flex:1;background:white;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">New Test Results</div>
          <div style="font-size:28px;font-weight:700;color:#f59e0b;margin:8px 0;">3</div>
          <div style="font-size:13px;color:#f59e0b;">Review needed</div>
        </div>
        <div style="flex:1;background:white;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Unread Messages</div>
          <div style="font-size:28px;font-weight:700;color:#2196f3;margin:8px 0;">1</div>
          <div style="font-size:13px;color:#666;">From Dr. Kim</div>
        </div>
      </div>
      <!-- Appointments list -->
      <div style="background:white;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <div style="font-size:16px;font-weight:600;color:#1a3a5c;margin-bottom:16px;">Upcoming Appointments</div>
        ${[
          ['Apr 8, 2026', '10:30 AM', 'Dr. Anita Patel', 'Annual Physical', 'In-Person', '#4caf50'],
          ['Apr 22, 2026', '2:00 PM', 'Dr. James Kim', 'Follow-up Visit', 'Video Visit', '#2196f3'],
        ].map(([date, time, doc, type, mode, color]) => `
          <div style="display:flex;align-items:center;padding:14px 0;border-bottom:1px solid #f0f0f0;">
            <div style="width:56px;text-align:center;margin-right:16px;">
              <div style="font-size:11px;color:#888;">${date.split(',')[0].split(' ')[0]}</div>
              <div style="font-size:22px;font-weight:700;color:#1a3a5c;">${date.split(' ')[1].replace(',','')}</div>
            </div>
            <div style="flex:1;">
              <div style="font-size:14px;font-weight:600;color:#333;">${doc} — ${type}</div>
              <div style="font-size:13px;color:#666;">${time} · ${mode}</div>
            </div>
            <div style="padding:4px 12px;border-radius:16px;font-size:12px;color:${color};background:${color}15;font-weight:500;">${mode}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`), path.join(PUBLIC, 'browser/how-to-use-mychart-step-1.png'), 1280, 800);

// ─────────────────────────────────────────────────────────────────────────────
// 2. Medication Reminder — iPhone Medisafe-style (390×844)
// ─────────────────────────────────────────────────────────────────────────────
console.log('💊 Medication reminder…');
await shot(page, iphonePage(`
  <div style="padding:0 20px;">
    <div style="text-align:center;margin:8px 0 16px;">
      <div style="font-size:22px;font-weight:700;color:white;">Today's Medications</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:4px;">Wednesday, April 2</div>
    </div>
    <!-- Progress -->
    <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:16px;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
        <span style="color:rgba(255,255,255,0.7);font-size:13px;">Daily Progress</span>
        <span style="color:#4caf50;font-size:13px;font-weight:600;">4 of 6 taken</span>
      </div>
      <div style="height:8px;background:rgba(255,255,255,0.1);border-radius:4px;">
        <div style="height:100%;width:67%;background:#4caf50;border-radius:4px;"></div>
      </div>
    </div>
    <!-- Morning -->
    <div style="margin-bottom:20px;">
      <div style="color:rgba(255,255,255,0.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">☀️ Morning — 8:00 AM</div>
      ${[
        ['Lisinopril 10mg', 'Blood Pressure', true],
        ['Metformin 500mg', 'Diabetes', true],
      ].map(([name, purpose, taken]) => `
        <div style="background:rgba(255,255,255,0.06);border-radius:12px;padding:14px 16px;display:flex;align-items:center;margin-bottom:8px;border-left:3px solid ${taken ? '#4caf50' : '#888'};">
          <div style="width:36px;height:36px;border-radius:10px;background:${taken ? '#4caf50' : 'rgba(255,255,255,0.1)'};display:flex;align-items:center;justify-content:center;margin-right:12px;">
            <span style="color:white;font-size:16px;">${taken ? '✓' : '💊'}</span>
          </div>
          <div style="flex:1;">
            <div style="color:white;font-size:15px;font-weight:500;">${name}</div>
            <div style="color:rgba(255,255,255,0.4);font-size:12px;">${purpose}</div>
          </div>
          <div style="color:${taken ? '#4caf50' : '#888'};font-size:12px;font-weight:500;">${taken ? 'Taken' : 'Pending'}</div>
        </div>
      `).join('')}
    </div>
    <!-- Afternoon -->
    <div style="margin-bottom:20px;">
      <div style="color:rgba(255,255,255,0.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">🌤️ Afternoon — 1:00 PM</div>
      ${[
        ['Aspirin 81mg', 'Heart Health', true],
        ['Vitamin D 1000IU', 'Supplement', true],
      ].map(([name, purpose, taken]) => `
        <div style="background:rgba(255,255,255,0.06);border-radius:12px;padding:14px 16px;display:flex;align-items:center;margin-bottom:8px;border-left:3px solid ${taken ? '#4caf50' : '#888'};">
          <div style="width:36px;height:36px;border-radius:10px;background:${taken ? '#4caf50' : 'rgba(255,255,255,0.1)'};display:flex;align-items:center;justify-content:center;margin-right:12px;">
            <span style="color:white;font-size:16px;">${taken ? '✓' : '💊'}</span>
          </div>
          <div style="flex:1;">
            <div style="color:white;font-size:15px;font-weight:500;">${name}</div>
            <div style="color:rgba(255,255,255,0.4);font-size:12px;">${purpose}</div>
          </div>
          <div style="color:${taken ? '#4caf50' : '#888'};font-size:12px;font-weight:500;">${taken ? 'Taken' : 'Pending'}</div>
        </div>
      `).join('')}
    </div>
    <!-- Evening -->
    <div style="margin-bottom:20px;">
      <div style="color:rgba(255,255,255,0.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">🌙 Evening — 8:00 PM</div>
      ${[
        ['Atorvastatin 20mg', 'Cholesterol', false],
        ['Melatonin 3mg', 'Sleep Aid', false],
      ].map(([name, purpose, taken]) => `
        <div style="background:rgba(255,255,255,0.06);border-radius:12px;padding:14px 16px;display:flex;align-items:center;margin-bottom:8px;border-left:3px solid ${taken ? '#4caf50' : '#f59e0b'};">
          <div style="width:36px;height:36px;border-radius:10px;background:${taken ? '#4caf50' : 'rgba(245,158,11,0.15)'};display:flex;align-items:center;justify-content:center;margin-right:12px;">
            <span style="color:${taken ? 'white' : '#f59e0b'};font-size:16px;">${taken ? '✓' : '💊'}</span>
          </div>
          <div style="flex:1;">
            <div style="color:white;font-size:15px;font-weight:500;">${name}</div>
            <div style="color:rgba(255,255,255,0.4);font-size:12px;">${purpose}</div>
          </div>
          <div style="color:${taken ? '#4caf50' : '#f59e0b'};font-size:12px;font-weight:500;">${taken ? 'Taken' : 'Upcoming'}</div>
        </div>
      `).join('')}
    </div>
    <!-- Notification banner -->
    <div style="background:rgba(79,195,247,0.12);border:1px solid rgba(79,195,247,0.3);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;">
      <span style="font-size:18px;">🔔</span>
      <div>
        <div style="color:#4fc3f7;font-size:13px;font-weight:500;">Reminder set for 8:00 PM</div>
        <div style="color:rgba(255,255,255,0.4);font-size:11px;">2 medications remaining today</div>
      </div>
    </div>
  </div>
`, '#0d1117'), path.join(PUBLIC, 'iphone/medication-reminder-apps-step-3.png'), 390, 844);

// ─────────────────────────────────────────────────────────────────────────────
// 3. Medicare.gov login — browser (1280×800)
// ─────────────────────────────────────────────────────────────────────────────
console.log('🏛️ Medicare.gov…');
await shot(page, browserPage('https://medicare.gov', 'Medicare.gov: the official U.S. government site for Medicare', `
  <div style="background:#fff;font-family:'Public Sans',-apple-system,sans-serif;">
    <!-- Medicare header bar -->
    <div style="background:#112e51;padding:8px 40px;display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="color:#fff;font-size:11px;">🇺🇸</span>
        <span style="color:rgba(255,255,255,0.8);font-size:11px;">An official website of the United States government</span>
      </div>
    </div>
    <!-- Navigation -->
    <div style="background:white;border-bottom:3px solid #0071bc;padding:16px 40px;display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:28px;font-weight:800;color:#112e51;">Medicare.gov</div>
      </div>
      <div style="display:flex;gap:24px;color:#205493;font-size:14px;">
        <span>Find Coverage</span><span>Find Care</span><span>Your Medicare Costs</span><span>Drug Coverage</span>
      </div>
    </div>
    <!-- Hero -->
    <div style="background:linear-gradient(135deg,#112e51 0%,#205493 100%);padding:48px 40px;text-align:center;">
      <div style="font-size:32px;font-weight:700;color:white;margin-bottom:12px;">Log in to your Medicare account</div>
      <div style="color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:32px;">Access your coverage, claims, and plan information</div>
      <!-- Login box -->
      <div style="max-width:440px;margin:0 auto;background:white;border-radius:8px;padding:32px;text-align:left;">
        <div style="font-size:18px;font-weight:600;color:#112e51;margin-bottom:20px;">Sign in with:</div>
        <div style="border:2px solid #0071bc;border-radius:6px;padding:14px 20px;display:flex;align-items:center;gap:12px;margin-bottom:12px;cursor:pointer;">
          <div style="width:28px;height:28px;background:#0071bc;border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700;">ID</div>
          <div style="font-size:15px;color:#0071bc;font-weight:600;">Login.gov</div>
        </div>
        <div style="border:2px solid #2a6496;border-radius:6px;padding:14px 20px;display:flex;align-items:center;gap:12px;margin-bottom:20px;cursor:pointer;">
          <div style="width:28px;height:28px;background:#2a6496;border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700;">id</div>
          <div style="font-size:15px;color:#2a6496;font-weight:600;">ID.me</div>
        </div>
        <div style="border-top:1px solid #e0e0e0;padding-top:16px;text-align:center;">
          <div style="color:#666;font-size:13px;margin-bottom:12px;">Don't have an account?</div>
          <div style="color:#0071bc;font-size:14px;font-weight:600;cursor:pointer;">Create an account</div>
        </div>
      </div>
    </div>
    <!-- Info section -->
    <div style="padding:32px 40px;display:flex;gap:24px;justify-content:center;">
      ${[
        ['📋','Check your coverage','See what Medicare covers and your costs'],
        ['🔍','Find providers','Search for doctors who accept Medicare'],
        ['💊','Compare drug plans','Find the best Part D plan for your medications'],
      ].map(([icon,title,desc]) => `
        <div style="background:#f1f6fb;border-radius:8px;padding:24px;flex:1;max-width:300px;">
          <div style="font-size:28px;margin-bottom:12px;">${icon}</div>
          <div style="font-size:16px;font-weight:600;color:#112e51;margin-bottom:8px;">${title}</div>
          <div style="color:#555;font-size:13px;line-height:1.5;">${desc}</div>
        </div>
      `).join('')}
    </div>
  </div>
`), path.join(PUBLIC, 'browser/medicare-gov-guide-step-2.png'), 1280, 800);

// ─────────────────────────────────────────────────────────────────────────────
// 4. Credit Monitoring — browser Credit Karma-style (1280×800)
// ─────────────────────────────────────────────────────────────────────────────
console.log('📊 Credit Monitoring…');
await shot(page, browserPage('https://creditkarma.com/dashboard', 'Credit Karma - Free Credit Scores', `
  <div style="background:#f4f6f9;min-height:700px;font-family:-apple-system,sans-serif;">
    <!-- CK header -->
    <div style="background:#008600;padding:12px 32px;display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:20px;font-weight:700;color:white;">Credit Karma</div>
      <div style="display:flex;gap:20px;color:rgba(255,255,255,0.9);font-size:14px;">
        <span>Home</span><span>Credit Cards</span><span>Loans</span><span>Insurance</span><span>Taxes</span>
      </div>
    </div>
    <!-- Score area -->
    <div style="background:white;padding:32px;display:flex;gap:32px;margin:24px 32px;border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
      <!-- TransUnion -->
      <div style="flex:1;text-align:center;">
        <div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px;">TransUnion</div>
        <div style="width:140px;height:140px;border-radius:50%;border:8px solid #008600;display:flex;align-items:center;justify-content:center;margin:16px auto;">
          <div>
            <div style="font-size:42px;font-weight:800;color:#222;">742</div>
            <div style="font-size:11px;color:#008600;font-weight:600;">Good</div>
          </div>
        </div>
        <div style="font-size:12px;color:#888;">Updated Apr 1, 2026</div>
        <div style="color:#008600;font-size:13px;margin-top:4px;">↑ 5 pts from last month</div>
      </div>
      <!-- Equifax -->
      <div style="flex:1;text-align:center;">
        <div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px;">Equifax</div>
        <div style="width:140px;height:140px;border-radius:50%;border:8px solid #008600;display:flex;align-items:center;justify-content:center;margin:16px auto;">
          <div>
            <div style="font-size:42px;font-weight:800;color:#222;">738</div>
            <div style="font-size:11px;color:#008600;font-weight:600;">Good</div>
          </div>
        </div>
        <div style="font-size:12px;color:#888;">Updated Apr 1, 2026</div>
        <div style="color:#008600;font-size:13px;margin-top:4px;">↑ 3 pts from last month</div>
      </div>
      <!-- Factors -->
      <div style="flex:1.2;">
        <div style="font-size:16px;font-weight:600;color:#222;margin-bottom:16px;">Factors Affecting Your Score</div>
        ${[
          ['Payment History', '100%', '#008600', '100%'],
          ['Credit Utilization', '12%', '#008600', '88%'],
          ['Derogatory Marks', '0', '#008600', '100%'],
          ['Age of Credit', '8 yrs', '#f59e0b', '60%'],
          ['Total Accounts', '6', '#888', '50%'],
        ].map(([label, val, color, width]) => `
          <div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
              <span style="color:#555;">${label}</span>
              <span style="color:${color};font-weight:600;">${val}</span>
            </div>
            <div style="height:6px;background:#e8e8e8;border-radius:3px;"><div style="height:100%;width:${width};background:${color};border-radius:3px;"></div></div>
          </div>
        `).join('')}
      </div>
    </div>
    <!-- Alerts -->
    <div style="margin:0 32px;display:flex;gap:16px;">
      <div style="flex:1;background:white;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
        <div style="font-size:16px;font-weight:600;color:#222;margin-bottom:12px;">🔔 Recent Alerts</div>
        ${[
          ['New account inquiry', 'Chase Bank checked your credit', '2 days ago', '#f59e0b'],
          ['Payment posted', 'Visa ending 4521 — $156.00', '5 days ago', '#008600'],
          ['Score update', 'Your TransUnion score increased', '1 week ago', '#008600'],
        ].map(([title, desc, time, color]) => `
          <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px;">
            <div style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;"></div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:500;color:#333;">${title}</div>
              <div style="font-size:12px;color:#888;">${desc}</div>
            </div>
            <div style="font-size:11px;color:#aaa;white-space:nowrap;">${time}</div>
          </div>
        `).join('')}
      </div>
      <div style="flex:1;background:white;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
        <div style="font-size:16px;font-weight:600;color:#222;margin-bottom:12px;">📊 Credit Report Summary</div>
        <div style="display:flex;gap:16px;margin-top:16px;">
          ${[
            ['Open Accounts', '6', '#0071bc'],
            ['Total Balance', '$4,230', '#333'],
            ['Hard Inquiries', '1', '#f59e0b'],
          ].map(([label, val, color]) => `
            <div style="flex:1;text-align:center;padding:16px;background:#f8f9fb;border-radius:8px;">
              <div style="font-size:22px;font-weight:700;color:${color};">${val}</div>
              <div style="font-size:11px;color:#888;margin-top:4px;">${label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
`), path.join(PUBLIC, 'browser/credit-monitoring-setup-step-2.png'), 1280, 800);

// ─────────────────────────────────────────────────────────────────────────────
// 5. Microsoft Teams — meeting lobby (1280×800)
// ─────────────────────────────────────────────────────────────────────────────
console.log('💼 Microsoft Teams…');
await shot(page, browserPage('https://teams.microsoft.com', 'Microsoft Teams', `
  <div style="background:#292929;min-height:700px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif;">
    <!-- Meeting info -->
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:22px;font-weight:600;color:white;">Weekly Team Check-in</div>
      <div style="color:rgba(255,255,255,0.5);font-size:14px;margin-top:6px;">3 people are in this meeting</div>
    </div>
    <!-- Camera preview -->
    <div style="width:480px;height:320px;background:#1a1a1a;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:24px;position:relative;overflow:hidden;">
      <!-- Simulated camera feed with gradient and silhouette -->
      <div style="width:100%;height:100%;background:linear-gradient(135deg,#2d2d3d,#1a1a2e);display:flex;align-items:center;justify-content:center;">
        <div style="width:120px;height:120px;background:rgba(255,255,255,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <div style="font-size:48px;color:rgba(255,255,255,0.3);">👤</div>
        </div>
      </div>
      <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.5);border-radius:8px;padding:4px 12px;color:white;font-size:12px;">Robert Wilson</div>
    </div>
    <!-- Controls -->
    <div style="display:flex;gap:12px;margin-bottom:32px;">
      <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;cursor:pointer;">
        <span style="color:white;font-size:20px;">🎤</span>
      </div>
      <div style="width:48px;height:48px;border-radius:50%;background:#d13438;display:flex;align-items:center;justify-content:center;cursor:pointer;">
        <span style="color:white;font-size:20px;">📹</span>
      </div>
      <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;cursor:pointer;">
        <span style="color:white;font-size:18px;">⚙️</span>
      </div>
    </div>
    <!-- Join button -->
    <div style="display:flex;gap:12px;align-items:center;">
      <div style="background:#5b5fc7;color:white;padding:12px 40px;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;">Join now</div>
    </div>
    <!-- Options -->
    <div style="display:flex;gap:24px;margin-top:20px;color:rgba(255,255,255,0.5);font-size:13px;">
      <div style="display:flex;align-items:center;gap:6px;"><span>📱</span>Audio off</div>
      <div style="display:flex;align-items:center;gap:6px;"><span>🖥️</span>Share content</div>
      <div style="display:flex;align-items:center;gap:6px;"><span>😊</span>Reactions</div>
    </div>
  </div>
`), path.join(PUBLIC, 'browser/microsoft-teams-basics-step-2.png'), 1280, 800);

// ─────────────────────────────────────────────────────────────────────────────
// 6. Google Calendar — week view with event form (1280×800)
// ─────────────────────────────────────────────────────────────────────────────
console.log('📅 Google Calendar…');
await shot(page, browserPage('https://calendar.google.com', 'Google Calendar', `
  <div style="display:flex;height:100%;font-family:'Google Sans',Roboto,sans-serif;">
    <!-- Mini sidebar -->
    <div style="width:56px;background:#f8f9fa;display:flex;flex-direction:column;align-items:center;padding:12px 0;gap:16px;border-right:1px solid #e0e0e0;">
      <div style="width:36px;height:36px;background:#1a73e8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;">+</div>
      <div style="font-size:20px;">📅</div>
      <div style="font-size:20px;">👤</div>
      <div style="font-size:20px;">✓</div>
    </div>
    <!-- Main area -->
    <div style="flex:1;display:flex;flex-direction:column;">
      <!-- Toolbar -->
      <div style="padding:8px 16px;display:flex;align-items:center;gap:16px;border-bottom:1px solid #e0e0e0;">
        <div style="font-size:14px;color:#666;display:flex;gap:8px;">
          <span style="cursor:pointer;">‹</span>
          <span style="cursor:pointer;">›</span>
        </div>
        <div style="font-size:18px;font-weight:500;color:#333;">March 31 – April 6, 2026</div>
        <div style="margin-left:auto;display:flex;gap:4px;">
          <span style="padding:4px 12px;border-radius:4px;font-size:13px;color:#666;background:#f0f0f0;">Day</span>
          <span style="padding:4px 12px;border-radius:4px;font-size:13px;color:white;background:#1a73e8;">Week</span>
          <span style="padding:4px 12px;border-radius:4px;font-size:13px;color:#666;background:#f0f0f0;">Month</span>
        </div>
      </div>
      <!-- Calendar grid -->
      <div style="flex:1;display:flex;position:relative;">
        <!-- Time column -->
        <div style="width:60px;padding-top:32px;">
          ${['8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'].map(t => `
            <div style="height:48px;text-align:right;padding-right:8px;font-size:10px;color:#888;">${t}</div>
          `).join('')}
        </div>
        <!-- Days -->
        <div style="flex:1;display:flex;">
          ${['Mon 31','Tue 1','Wed 2','Thu 3','Fri 4','Sat 5','Sun 6'].map((day, i) => `
            <div style="flex:1;border-left:1px solid #e8e8e8;">
              <div style="text-align:center;padding:8px 0;font-size:12px;color:${i===2?'#1a73e8':'#666'};font-weight:${i===2?'600':'400'};">
                <div>${day.split(' ')[0]}</div>
                <div style="font-size:20px;${i===2?'background:#1a73e8;color:white;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;':''}">${day.split(' ')[1]}</div>
              </div>
              <!-- Grid lines -->
              <div style="position:relative;">
                ${Array.from({length:10},(_,j)=>`<div style="height:48px;border-bottom:1px solid #f0f0f0;"></div>`).join('')}
                ${i===1?'<div style="position:absolute;top:48px;left:2px;right:2px;background:#039be5;border-radius:4px;padding:4px 6px;color:white;font-size:11px;height:44px;overflow:hidden;">Dr. Patel — Annual Physical</div>':''}
                ${i===3?'<div style="position:absolute;top:192px;left:2px;right:2px;background:#0b8043;border-radius:4px;padding:4px 6px;color:white;font-size:11px;height:44px;overflow:hidden;">Lunch with Mary</div>':''}
                ${i===4?'<div style="position:absolute;top:96px;left:2px;right:2px;background:#8e24aa;border-radius:4px;padding:4px 6px;color:white;font-size:11px;height:44px;overflow:hidden;">Book Club</div>':''}
              </div>
            </div>
          `).join('')}
        </div>
        <!-- New event form overlay -->
        <div style="position:absolute;top:60px;left:300px;width:320px;background:white;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.2);padding:24px;z-index:10;">
          <input type="text" value="Doctor Appointment" style="width:100%;border:none;border-bottom:2px solid #1a73e8;font-size:18px;padding:8px 0;color:#333;outline:none;font-family:inherit;" />
          <div style="display:flex;align-items:center;gap:12px;margin-top:16px;">
            <span style="font-size:16px;color:#666;">📅</span>
            <div>
              <div style="font-size:14px;color:#333;">Wednesday, April 2, 2026</div>
              <div style="font-size:13px;color:#1a73e8;">10:00 AM – 11:00 AM</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;margin-top:12px;">
            <span style="font-size:16px;color:#666;">📍</span>
            <div style="font-size:14px;color:#333;">Add location</div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;margin-top:12px;">
            <span style="font-size:16px;color:#666;">📝</span>
            <div style="font-size:14px;color:#888;">Add description</div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:20px;">
            <div style="padding:8px 20px;border-radius:4px;font-size:14px;color:#666;cursor:pointer;">More options</div>
            <div style="padding:8px 24px;border-radius:4px;font-size:14px;color:white;background:#1a73e8;cursor:pointer;font-weight:500;">Save</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`), path.join(PUBLIC, 'browser/google-calendar-guide-step-2.png'), 1280, 800);

// ─────────────────────────────────────────────────────────────────────────────
// 7. Instacart — iPhone shopping cart (390×844)
// ─────────────────────────────────────────────────────────────────────────────
console.log('🛒 Instacart…');
await shot(page, iphonePage(`
  <div style="background:#fff;min-height:780px;color:#333;font-family:-apple-system,sans-serif;">
    <!-- Header -->
    <div style="padding:8px 20px 12px;background:#fff;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="color:#333;font-size:16px;">‹ Store</span>
        <span style="font-size:18px;font-weight:700;color:#0aad0a;">Instacart</span>
        <span style="font-size:14px;color:#0aad0a;font-weight:600;">Edit</span>
      </div>
      <div style="font-size:20px;font-weight:700;color:#333;margin-top:12px;">Your Cart</div>
      <div style="font-size:13px;color:#888;">Kroger · 8 items</div>
    </div>
    <!-- Items -->
    <div style="padding:0 20px;">
      ${[
        ['🍌','Organic Bananas','1 bunch','$1.29'],
        ['🥛','2% Milk, Gallon','1 gal','$3.99'],
        ['🍞','Whole Wheat Bread','1 loaf','$3.49'],
        ['🥚','Large Eggs, 12ct','1 dozen','$4.29'],
        ['🍗','Chicken Breast','2 lbs','$8.99'],
        ['🥬','Baby Spinach','5 oz bag','$3.99'],
        ['🍎','Honeycrisp Apples','3 pack','$5.49'],
        ['🧀','Cheddar Cheese Slices','8 oz','$3.29'],
      ].map(([icon, name, size, price]) => `
        <div style="display:flex;align-items:center;padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <div style="width:44px;height:44px;background:#f5f5f5;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-right:12px;">${icon}</div>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:500;color:#333;">${name}</div>
            <div style="font-size:12px;color:#888;">${size}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:14px;font-weight:600;color:#333;">${price}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
              <div style="width:24px;height:24px;border:1px solid #ddd;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#888;">−</div>
              <span style="font-size:13px;font-weight:500;">1</span>
              <div style="width:24px;height:24px;background:#0aad0a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:white;">+</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <!-- Delivery window -->
    <div style="margin:16px 20px;background:#f0faf0;border:1px solid #0aad0a40;border-radius:12px;padding:14px 16px;">
      <div style="font-size:13px;font-weight:600;color:#0aad0a;margin-bottom:8px;">🚗 Choose delivery window</div>
      <div style="display:flex;gap:8px;">
        ${[
          ['Today', '2-3 PM', '$3.99'],
          ['Today', '5-6 PM', '$1.99'],
          ['Tomorrow', '9-10 AM', 'Free'],
        ].map(([day, time, fee], i) => `
          <div style="flex:1;padding:10px;border-radius:8px;text-align:center;border:2px solid ${i===2 ? '#0aad0a' : '#e0e0e0'};background:${i===2 ? '#f0faf0' : 'white'};">
            <div style="font-size:11px;color:#888;">${day}</div>
            <div style="font-size:13px;font-weight:600;color:#333;margin:2px 0;">${time}</div>
            <div style="font-size:11px;color:${fee==='Free'?'#0aad0a':'#888'};font-weight:${fee==='Free'?'600':'400'};">${fee}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <!-- Total & checkout -->
    <div style="margin:0 20px;padding:16px 0;border-top:1px solid #e0e0e0;">
      <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px;"><span style="color:#666;">Subtotal</span><span style="font-weight:500;">$34.82</span></div>
      <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px;"><span style="color:#666;">Delivery</span><span style="color:#0aad0a;font-weight:500;">Free</span></div>
      <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:700;margin-top:8px;"><span>Estimated Total</span><span>$37.81</span></div>
    </div>
  </div>
`, '#fff'), path.join(PUBLIC, 'iphone/instacart-guide-step-3.png'), 390, 844);

// ─────────────────────────────────────────────────────────────────────────────
// 8. New iPhone setup — Hello screen (390×844)
// ─────────────────────────────────────────────────────────────────────────────
console.log('📱 iPhone setup…');
await shot(page, doc(
  `${IPHONE_BASE} body{background:#000;}`,
  `<div style="width:390px;height:844px;background:linear-gradient(180deg,#1c1c1e 0%,#000 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;">
    <!-- Hello text -->
    <div style="text-align:center;margin-bottom:60px;">
      <div style="font-size:56px;font-weight:200;color:white;letter-spacing:-1px;">Hello</div>
    </div>
    <!-- Language list -->
    <div style="width:320px;text-align:center;">
      ${[
        ['English', true],
        ['Español', false],
        ['Français', false],
        ['Deutsch', false],
        ['中文', false],
        ['日本語', false],
        ['العربية', false],
      ].map(([lang, active]) => `
        <div style="padding:8px 0;font-size:${active ? '18px' : '16px'};color:${active ? 'white' : 'rgba(255,255,255,0.35)'};font-weight:${active ? '400' : '300'};">${lang}</div>
      `).join('')}
    </div>
    <!-- Swipe up indicator -->
    <div style="position:absolute;bottom:40px;text-align:center;">
      <div style="color:rgba(255,255,255,0.3);font-size:13px;margin-bottom:8px;">Swipe up to set up</div>
      <div style="width:40px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;margin:0 auto;"></div>
    </div>
    <!-- Home indicator -->
    <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);">
      <div style="width:134px;height:5px;background:rgba(255,255,255,0.3);border-radius:3px;"></div>
    </div>
  </div>`
), path.join(PUBLIC, 'iphone/setup-new-iphone-step-1.png'), 390, 844);

// ─────────────────────────────────────────────────────────────────────────────
// 9. New Android setup — Welcome screen (412×915)
// ─────────────────────────────────────────────────────────────────────────────
console.log('📱 Android setup…');
await shot(page, doc(
  `${ANDROID_BASE} body{background:#1a1a2e;}`,
  `<div style="width:412px;height:915px;background:linear-gradient(180deg,#1a237e 0%,#0d47a1 50%,#1565c0 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;font-family:'Google Sans','Roboto',sans-serif;">
    <!-- Google logo dots -->
    <div style="display:flex;gap:6px;margin-bottom:40px;">
      <div style="width:14px;height:14px;border-radius:50%;background:#4285f4;"></div>
      <div style="width:14px;height:14px;border-radius:50%;background:#ea4335;"></div>
      <div style="width:14px;height:14px;border-radius:50%;background:#fbbc04;"></div>
      <div style="width:14px;height:14px;border-radius:50%;background:#34a853;"></div>
    </div>
    <!-- Welcome text -->
    <div style="text-align:center;margin-bottom:48px;">
      <div style="font-size:32px;font-weight:400;color:white;margin-bottom:12px;">Welcome</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.6);max-width:280px;line-height:1.5;">Choose your language to get started with your new Android phone</div>
    </div>
    <!-- Language picker -->
    <div style="width:320px;background:rgba(255,255,255,0.08);border-radius:16px;padding:4px;margin-bottom:40px;">
      ${[
        ['English (United States)', true],
        ['Español (Estados Unidos)', false],
        ['Français (Canada)', false],
        ['Português (Brasil)', false],
      ].map(([lang, active]) => `
        <div style="padding:14px 20px;border-radius:12px;font-size:15px;color:${active ? 'white' : 'rgba(255,255,255,0.5)'};background:${active ? 'rgba(255,255,255,0.12)' : 'transparent'};display:flex;align-items:center;justify-content:space-between;">
          ${lang}
          ${active ? '<div style="width:20px;height:20px;border-radius:50%;border:2px solid #4285f4;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;border-radius:50%;background:#4285f4;"></div></div>' : '<div style="width:20px;height:20px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);"></div>'}
        </div>
      `).join('')}
    </div>
    <!-- Start button -->
    <div style="background:#4285f4;color:white;padding:14px 56px;border-radius:28px;font-size:16px;font-weight:500;cursor:pointer;">Start</div>
    <!-- Vision accessibility -->
    <div style="position:absolute;bottom:60px;display:flex;gap:24px;">
      <div style="color:rgba(255,255,255,0.4);font-size:13px;">Accessibility</div>
      <div style="color:rgba(255,255,255,0.4);font-size:13px;">Emergency call</div>
    </div>
    <!-- Nav bar -->
    <div style="position:absolute;bottom:0;left:0;right:0;height:48px;display:flex;align-items:center;justify-content:center;">
      <div style="width:134px;height:5px;background:rgba(255,255,255,0.2);border-radius:3px;"></div>
    </div>
  </div>`
), path.join(PUBLIC, 'android/setup-new-android-step-1.png'), 412, 915);

// ─────────────────────────────────────────────────────────────────────────────
// 10. Emergency SOS — Android settings (412×915)
// ─────────────────────────────────────────────────────────────────────────────
console.log('🆘 Emergency SOS…');
await shot(page, androidPage(`
  <div style="padding:0 20px;">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:12px;padding:8px 0 20px;">
      <span style="color:white;font-size:20px;">←</span>
      <span style="color:white;font-size:20px;font-weight:500;">Safety & emergency</span>
    </div>
    <!-- Emergency SOS section -->
    <div style="background:rgba(255,255,255,0.06);border-radius:16px;padding:20px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div>
          <div style="color:white;font-size:16px;font-weight:500;">Emergency SOS</div>
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:4px;">Press power button 5 times to call 911</div>
        </div>
        <!-- Toggle ON -->
        <div style="width:52px;height:32px;background:#4caf50;border-radius:16px;padding:2px;display:flex;align-items:center;justify-content:flex-end;">
          <div style="width:28px;height:28px;background:white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:16px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="width:20px;height:20px;border-radius:4px;background:#4caf50;display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">✓</span></div>
          <div style="color:rgba(255,255,255,0.7);font-size:14px;">Play countdown alarm</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="width:20px;height:20px;border-radius:4px;background:#4caf50;display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">✓</span></div>
          <div style="color:rgba(255,255,255,0.7);font-size:14px;">Share location with emergency contacts</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:20px;height:20px;border-radius:4px;background:#4caf50;display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">✓</span></div>
          <div style="color:rgba(255,255,255,0.7);font-size:14px;">Record emergency video</div>
        </div>
      </div>
    </div>
    <!-- Emergency contacts -->
    <div style="background:rgba(255,255,255,0.06);border-radius:16px;padding:20px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="color:white;font-size:16px;font-weight:500;">Emergency contacts</div>
        <div style="color:#8ab4f8;font-size:14px;">Add</div>
      </div>
      ${[
        ['SM', 'Sarah Mitchell', 'Daughter', '#4285f4'],
        ['JW', 'James Wilson', 'Son', '#34a853'],
      ].map(([initials, name, relation, color]) => `
        <div style="display:flex;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="width:40px;height:40px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:500;margin-right:14px;">${initials}</div>
          <div style="flex:1;">
            <div style="color:white;font-size:15px;">${name}</div>
            <div style="color:rgba(255,255,255,0.5);font-size:13px;">${relation}</div>
          </div>
          <span style="color:rgba(255,255,255,0.3);font-size:16px;">›</span>
        </div>
      `).join('')}
    </div>
    <!-- Medical information -->
    <div style="background:rgba(255,255,255,0.06);border-radius:16px;padding:20px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="color:white;font-size:16px;font-weight:500;">Medical information</div>
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:4px;">Blood type, allergies, medications</div>
        </div>
        <span style="color:rgba(255,255,255,0.3);font-size:16px;">›</span>
      </div>
    </div>
    <!-- Crisis alerts -->
    <div style="background:rgba(255,255,255,0.06);border-radius:16px;padding:20px;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="color:white;font-size:16px;font-weight:500;">Crisis alerts</div>
          <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:4px;">Receive alerts about natural disasters</div>
        </div>
        <div style="width:52px;height:32px;background:#4caf50;border-radius:16px;padding:2px;display:flex;align-items:center;justify-content:flex-end;">
          <div style="width:28px;height:28px;background:white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
        </div>
      </div>
    </div>
  </div>
`, '#1a1a2e'), path.join(PUBLIC, 'android/emergency-sos-phone-step-2.png'), 412, 915);

await browser.close();
console.log('\n✅ All 10 screenshots generated!');
