/**
 * Screenshot generator — Browser-based guides
 * Run: /usr/local/bin/node scripts/gen-screenshots-browser.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import {
  PUBLIC, BROWSER_BASE, BROWSER_CHROME,
  shot, doc, browserPage
} from './screenshot-templates.mjs';

const OUT = path.join(PUBLIC, 'browser');

const SHOTS = [

  // ── set-up-gmail-account ───────────────────────────────────────────────────
  {
    file: 'set-up-gmail-account-step-1.png', w: 1280, h: 800,
    html: browserPage('https://accounts.google.com/signup', 'Create your Google Account', `
      <div style="min-height:600px;background:#fff;display:flex;align-items:center;justify-content:center;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:500px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
            <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#4285f4"/><text x="24" y="32" text-anchor="middle" fill="white" font-size="28" font-weight="500">G</text></svg>
            <div><div style="font-size:24px;color:#202124;font-weight:400;">Create your Google Account</div><div style="font-size:14px;color:#5f6368;margin-top:4px;">to continue to Gmail</div></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div><div style="font-size:12px;color:#5f6368;margin-bottom:4px;">First name</div><div style="border:1px solid #dadce0;border-radius:4px;padding:10px 12px;font-size:14px;color:#202124;">Bailey</div></div>
            <div><div style="font-size:12px;color:#5f6368;margin-bottom:4px;">Last name</div><div style="border:1px solid #dadce0;border-radius:4px;padding:10px 12px;font-size:14px;color:#202124;">Wilburn</div></div>
          </div>
          <div style="margin-bottom:16px;"><div style="font-size:12px;color:#5f6368;margin-bottom:4px;">Username</div><div style="border:1px solid #dadce0;border-radius:4px;padding:10px 12px;font-size:14px;color:#202124;display:flex;align-items:center;">bailey.wilburn<span style="color:#5f6368;">@gmail.com</span></div></div>
          <div style="margin-bottom:16px;"><div style="font-size:12px;color:#5f6368;margin-bottom:4px;">Password</div><div style="border:1px solid #dadce0;border-radius:4px;padding:10px 12px;font-size:14px;color:#202124;">••••••••••</div></div>
          <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
            <div style="padding:8px 24px;color:#1a73e8;font-size:14px;font-weight:500;cursor:pointer;">Sign in instead</div>
            <div style="padding:8px 24px;background:#1a73e8;color:white;border-radius:4px;font-size:14px;font-weight:500;">Next</div>
          </div>
        </div>
      </div>
    `)
  },
  {
    file: 'set-up-gmail-account-step-3.png', w: 1280, h: 800,
    html: browserPage('https://mail.google.com/mail/u/0/', 'Inbox - Gmail', `
      <div style="display:flex;height:100%;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <!-- Gmail sidebar -->
        <div style="width:220px;background:#f6f8fc;padding:8px;">
          <div style="padding:10px 20px;background:#c2e7ff;border-radius:16px;color:#001d35;font-size:14px;font-weight:500;text-align:center;margin-bottom:12px;">✏️ Compose</div>
          ${['📥 Inbox (3)','⭐ Starred','⏰ Snoozed','📤 Sent','📝 Drafts'].map((n,i)=>`
            <div style="padding:6px 16px;border-radius:20px;font-size:13px;color:${i===0?'#001d35':'#444'};background:${i===0?'#d3e3fd':'transparent'};margin-bottom:2px;">${n}</div>
          `).join('')}
        </div>
        <!-- Email list -->
        <div style="flex:1;background:white;border-left:1px solid #e0e0e0;">
          <div style="padding:8px 16px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;gap:8px;">
            <input type="checkbox" style="width:16px;height:16px;"/><span style="color:#5f6368;font-size:13px;">↻</span><span style="color:#5f6368;font-size:13px;">⋮</span>
          </div>
          ${[['Google','Welcome to Gmail — Start here','Set up your new account and customize...','10:15 AM',true],['TekSure','Your TekSure account is ready!','Welcome Bailey! You can now access all guides...','9:42 AM',true],['Bailey (me)','Test email — It works!','Just testing my new email setup...','9:30 AM',false]].map(([from,subject,preview,time,unread])=>`
            <div style="display:flex;align-items:center;gap:12px;padding:8px 16px;border-bottom:1px solid #f0f0f0;background:${unread?'#f2f6fc':'white'};">
              <input type="checkbox" style="width:16px;height:16px;"/>
              <span style="font-size:14px;">☆</span>
              <span style="color:#202124;font-size:14px;font-weight:${unread?'700':'400'};width:120px;">${from}</span>
              <div style="flex:1;"><span style="color:#202124;font-size:14px;font-weight:${unread?'700':'400'};">${subject}</span><span style="color:#5f6368;font-size:14px;"> — ${preview}</span></div>
              <span style="color:#5f6368;font-size:12px;white-space:nowrap;">${time}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },

  // ── how-to-send-an-email ───────────────────────────────────────────────────
  {
    file: 'how-to-send-an-email-step-2.png', w: 1280, h: 800,
    html: browserPage('https://mail.google.com/mail/u/0/#compose', 'New Message - Gmail', `
      <div style="display:flex;height:100%;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:220px;background:#f6f8fc;padding:8px;">
          <div style="padding:10px 20px;background:#c2e7ff;border-radius:16px;color:#001d35;font-size:14px;font-weight:500;text-align:center;margin-bottom:12px;">✏️ Compose</div>
        </div>
        <div style="flex:1;background:white;display:flex;align-items:flex-end;justify-content:flex-end;padding:0;">
          <!-- Compose window -->
          <div style="width:500px;background:white;border-radius:8px 8px 0 0;box-shadow:0 -2px 12px rgba(0,0,0,0.15);margin-right:24px;">
            <div style="padding:8px 12px;background:#404040;border-radius:8px 8px 0 0;display:flex;align-items:center;justify-content:space-between;">
              <span style="color:white;font-size:13px;">New Message</span>
              <span style="color:white;font-size:14px;">— □ ✕</span>
            </div>
            <div style="padding:12px;">
              <div style="border-bottom:1px solid #e0e0e0;padding:6px 0;font-size:13px;"><span style="color:#5f6368;">To</span> <span style="background:#e8eaed;border-radius:12px;padding:2px 8px;font-size:12px;color:#202124;margin-left:8px;">friend@email.com ✕</span></div>
              <div style="border-bottom:1px solid #e0e0e0;padding:6px 0;font-size:13px;color:#202124;">Subject: <span style="font-weight:500;">Hello!</span></div>
              <div style="padding:12px 0;font-size:14px;color:#202124;min-height:200px;line-height:1.6;">
                Hi there!<br><br>I just set up my new email and wanted to send you a test message. Hope you're doing well!<br><br>Best,<br>Bailey
              </div>
              <div style="display:flex;align-items:center;gap:8px;padding-top:8px;border-top:1px solid #e0e0e0;">
                <div style="padding:8px 24px;background:#0b57d0;color:white;border-radius:20px;font-size:14px;font-weight:500;">Send</div>
                <span style="font-size:18px;color:#5f6368;">🔗</span>
                <span style="font-size:18px;color:#5f6368;">😊</span>
                <span style="font-size:18px;color:#5f6368;">📎</span>
                <span style="margin-left:auto;font-size:18px;color:#5f6368;">🗑️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  },

  // ── attach-photo-to-email ──────────────────────────────────────────────────
  {
    file: 'attach-photo-to-email-step-2.png', w: 800, h: 500,
    html: doc(`${BROWSER_BASE} body{width:800px;height:500px;display:flex;align-items:center;justify-content:center;background:#f5f5f5;}`, `
      <div style="background:white;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.15);width:500px;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="padding:8px 12px;background:#404040;border-radius:8px 8px 0 0;display:flex;align-items:center;justify-content:space-between;">
          <span style="color:white;font-size:13px;">New Message</span>
          <span style="color:white;">— □ ✕</span>
        </div>
        <div style="padding:12px;">
          <div style="border-bottom:1px solid #e0e0e0;padding:6px 0;font-size:13px;color:#5f6368;">To: friend@email.com</div>
          <div style="border-bottom:1px solid #e0e0e0;padding:6px 0;font-size:13px;">Subject: Photos from the weekend</div>
          <div style="padding:8px 0;font-size:14px;min-height:80px;color:#202124;">Here are the photos I promised!</div>
          <!-- Attachment bar highlighted -->
          <div style="display:flex;align-items:center;gap:8px;padding:8px;border-top:1px solid #e0e0e0;">
            <div style="padding:8px 24px;background:#0b57d0;color:white;border-radius:20px;font-size:14px;">Send</div>
            <span style="font-size:18px;color:#5f6368;">🔗</span>
            <div style="position:relative;">
              <span style="font-size:18px;color:#5f6368;border:2px solid #0b57d0;border-radius:4px;padding:2px 4px;">📎</span>
              <div style="position:absolute;bottom:32px;left:-60px;background:#333;color:white;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;">Click to attach files</div>
            </div>
          </div>
          <!-- Attached file preview -->
          <div style="display:flex;gap:8px;padding:8px;background:#f8f8f8;border-radius:4px;margin-top:8px;">
            <div style="width:60px;height:60px;background:#e0f0e0;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:24px;">🖼️</div>
            <div style="padding:4px 0;"><div style="font-size:13px;color:#202124;">photo_weekend.jpg</div><div style="font-size:11px;color:#5f6368;">2.4 MB</div></div>
          </div>
        </div>
      </div>
    `)
  },

  // ── online-shopping-safety (essential-skills) ──────────────────────────────
  {
    file: 'online-shopping-safety-step-1.png', w: 1280, h: 400,
    html: browserPage('https://www.example-shop.com/product/123', 'Wireless Headphones — ExampleShop', `
      <div style="padding:16px 24px;font-family:system-ui,sans-serif;">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:#e8f5e9;border-radius:8px;border:2px solid #4caf50;margin-bottom:16px;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="5" width="10" height="8" rx="1.5" stroke="#4caf50" stroke-width="1.5"/><path d="M5.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="#4caf50" stroke-width="1.5"/></svg>
          <span style="color:#2e7d32;font-size:14px;font-weight:500;">🔒 Connection is secure — Look for this padlock icon!</span>
          <div style="margin-left:auto;background:#4caf50;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">https://</div>
        </div>
        <div style="color:#666;font-size:12px;">The padlock means your data is encrypted. Always check for it before entering payment information.</div>
      </div>
    `)
  },
  {
    file: 'online-shopping-safety-step-3.png', w: 1280, h: 800,
    html: browserPage('https://www.amaz0n-deals.xyz/product/123', 'AMAZING DEALS!! - Amaz0n', `
      <div style="display:flex;gap:32px;padding:24px;font-family:system-ui,sans-serif;">
        <!-- Fake site -->
        <div style="flex:1;border:3px solid #e53935;border-radius:8px;padding:16px;position:relative;">
          <div style="position:absolute;top:-12px;left:16px;background:#e53935;color:white;padding:2px 12px;border-radius:12px;font-size:12px;font-weight:700;">❌ FAKE</div>
          <div style="font-size:18px;font-weight:700;color:#333;margin-bottom:8px;">amaz0n-deals.xyz</div>
          <div style="color:#e53935;font-size:12px;margin-bottom:12px;">⚠️ Notice: "0" instead of "o", unusual .xyz domain</div>
          <div style="font-size:36px;color:#e53935;font-weight:900;margin-bottom:8px;">80% OFF!!!</div>
          <div style="color:#888;font-size:13px;">• Too-good-to-be-true prices</div>
          <div style="color:#888;font-size:13px;">• Poor grammar and spelling</div>
          <div style="color:#888;font-size:13px;">• No customer reviews</div>
          <div style="color:#888;font-size:13px;">• Only accepts wire transfer</div>
        </div>
        <!-- Real site -->
        <div style="flex:1;border:3px solid #4caf50;border-radius:8px;padding:16px;position:relative;">
          <div style="position:absolute;top:-12px;left:16px;background:#4caf50;color:white;padding:2px 12px;border-radius:12px;font-size:12px;font-weight:700;">✅ REAL</div>
          <div style="font-size:18px;font-weight:700;color:#333;margin-bottom:8px;">amazon.com</div>
          <div style="color:#4caf50;font-size:12px;margin-bottom:12px;">🔒 Verified secure connection</div>
          <div style="font-size:20px;color:#333;font-weight:600;margin-bottom:8px;">$79.99</div>
          <div style="color:#888;font-size:13px;">• Realistic pricing</div>
          <div style="color:#888;font-size:13px;">• Customer reviews with photos</div>
          <div style="color:#888;font-size:13px;">• Multiple payment options</div>
          <div style="color:#888;font-size:13px;">• Clear return policy</div>
        </div>
      </div>
    `)
  },

  // ── setup-two-factor-any-account (essential-skills) ────────────────────────
  {
    file: 'setup-two-factor-any-account-step-2.png', w: 1280, h: 800,
    html: browserPage('https://myaccount.google.com/security', 'Security — Google Account', `
      <div style="display:flex;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <div style="width:240px;background:#f8f9fa;padding:24px 16px;">
          ${['Home','Personal info','Data & privacy','Security','People & sharing'].map((n,i)=>`
            <div style="padding:10px 16px;border-radius:20px;font-size:14px;color:${i===3?'#1a73e8':'#5f6368'};background:${i===3?'#e8f0fe':'transparent'};margin-bottom:4px;font-weight:${i===3?'500':'400'};">${n}</div>
          `).join('')}
        </div>
        <div style="flex:1;padding:32px 40px;background:white;">
          <div style="font-size:24px;color:#202124;margin-bottom:24px;">Security</div>
          <div style="background:#fce8e6;border-radius:8px;padding:16px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
            <span style="font-size:24px;">⚠️</span>
            <div><div style="color:#d93025;font-size:14px;font-weight:500;">Critical security issue found</div><div style="color:#5f6368;font-size:13px;">2-Step Verification is off</div></div>
          </div>
          <div style="border:1px solid #dadce0;border-radius:8px;padding:20px;display:flex;align-items:center;gap:16px;">
            <span style="font-size:28px;">🔐</span>
            <div style="flex:1;"><div style="font-size:16px;color:#202124;">2-Step Verification</div><div style="color:#d93025;font-size:13px;">Off</div></div>
            <div style="padding:8px 24px;background:#1a73e8;color:white;border-radius:4px;font-size:14px;font-weight:500;">Turn On</div>
          </div>
        </div>
      </div>
    `)
  },
  {
    file: 'setup-two-factor-any-account-step-3.png', w: 800, h: 600,
    html: doc(`${BROWSER_BASE} body{width:800px;height:600px;background:#f8f9fa;display:flex;align-items:center;justify-content:center;font-family:'Google Sans','Roboto',system-ui,sans-serif;}`, `
      <div style="background:white;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.1);width:500px;padding:32px;">
        <div style="text-align:center;margin-bottom:24px;">
          <div style="font-size:24px;color:#202124;margin-bottom:8px;">Set up Authenticator</div>
          <div style="font-size:14px;color:#5f6368;">Scan this QR code with your authenticator app</div>
        </div>
        <!-- QR code mockup -->
        <div style="width:200px;height:200px;margin:0 auto 24px;background:#fff;border:2px solid #e0e0e0;border-radius:8px;display:grid;grid-template-columns:repeat(10,1fr);grid-template-rows:repeat(10,1fr);gap:1px;padding:8px;">
          ${Array.from({length:100},()=>`<div style="background:${Math.random()>0.5?'#000':'#fff'};"></div>`).join('')}
        </div>
        <div style="text-align:center;color:#5f6368;font-size:13px;margin-bottom:16px;">Can't scan? <span style="color:#1a73e8;">Enter code manually</span></div>
        <div style="display:flex;gap:8px;justify-content:center;">
          <div style="padding:8px 24px;color:#5f6368;font-size:14px;">Back</div>
          <div style="padding:8px 24px;background:#1a73e8;color:white;border-radius:4px;font-size:14px;">Next</div>
        </div>
      </div>
    `)
  },
  {
    file: 'setup-two-factor-any-account-step-5.png', w: 800, h: 500,
    html: doc(`${BROWSER_BASE} body{width:800px;height:500px;background:#f8f9fa;display:flex;align-items:center;justify-content:center;font-family:'Google Sans','Roboto',system-ui,sans-serif;}`, `
      <div style="background:white;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.1);width:500px;padding:32px;">
        <div style="text-align:center;margin-bottom:24px;">
          <div style="font-size:24px;color:#202124;margin-bottom:8px;">Save your backup codes</div>
          <div style="font-size:14px;color:#5f6368;">Keep these in a safe place. Each code can only be used once.</div>
        </div>
        <div style="background:#f8f9fa;border:1px solid #dadce0;border-radius:8px;padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
          ${['48291637','73952814','15837264','92648173','36471829','81526394','47293618','63847291'].map(code=>`
            <div style="font-family:monospace;font-size:16px;color:#202124;padding:4px 8px;text-align:center;">${code}</div>
          `).join('')}
        </div>
        <div style="display:flex;gap:12px;justify-content:center;">
          <div style="padding:8px 20px;border:1px solid #dadce0;border-radius:4px;color:#5f6368;font-size:14px;">📥 Download</div>
          <div style="padding:8px 20px;border:1px solid #dadce0;border-radius:4px;color:#5f6368;font-size:14px;">🖨️ Print</div>
        </div>
      </div>
    `)
  },

  // ── identify-phishing-emails ───────────────────────────────────────────────
  {
    file: 'identify-phishing-emails-step-1.png', w: 1280, h: 800,
    html: browserPage('https://mail.google.com/', 'Inbox - Gmail', `
      <div style="padding:24px;font-family:'Google Sans','Roboto',system-ui,sans-serif;">
        <!-- Phishing email example -->
        <div style="border:3px solid #e53935;border-radius:8px;padding:20px;position:relative;background:#fff5f5;">
          <div style="position:absolute;top:-12px;right:16px;background:#e53935;color:white;padding:2px 12px;border-radius:12px;font-size:12px;font-weight:700;">⚠️ PHISHING EMAIL</div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div style="color:#5f6368;font-size:13px;">From:</div>
            <div style="color:#e53935;font-size:13px;font-weight:500;">security-alert@bank0famerica.xyz</div>
            <div style="background:#fce8e6;color:#d93025;padding:2px 8px;border-radius:4px;font-size:10px;">Suspicious sender</div>
          </div>
          <div style="font-size:18px;color:#202124;font-weight:700;margin-bottom:8px;">URGENT: Your account has been compromised!</div>
          <div style="font-size:14px;color:#333;line-height:1.6;margin-bottom:16px;">
            Dear Valued Customer,<br><br>
            We have detected unusual activity on your account. Click the link below immediately to verify your identity or your account will be <span style="color:#e53935;font-weight:700;">permanently suspended within 24 hours</span>.
          </div>
          <div style="display:flex;gap:16px;flex-wrap:wrap;">
            ${[['🚩 Urgency/threats','Creates panic to make you act fast'],['🚩 Generic greeting','Real banks use your name'],['🚩 Suspicious sender','bank0famerica.xyz is NOT real'],['🚩 Asks to click link','Banks never ask this via email']].map(([flag,desc])=>`
              <div style="background:#fce8e6;padding:8px 12px;border-radius:6px;"><div style="color:#d93025;font-size:12px;font-weight:600;">${flag}</div><div style="color:#666;font-size:11px;">${desc}</div></div>
            `).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // ── create-strong-password ─────────────────────────────────────────────────
  {
    file: 'create-strong-password-step-1.png', w: 1280, h: 600,
    html: browserPage('https://accounts.example.com/settings', 'Account Settings', `
      <div style="padding:32px 40px;font-family:system-ui,sans-serif;">
        <div style="max-width:500px;margin:0 auto;">
          <div style="font-size:20px;color:#333;margin-bottom:24px;">Create a Strong Password</div>
          <div style="margin-bottom:16px;">
            <div style="font-size:13px;color:#666;margin-bottom:6px;">New password</div>
            <div style="border:2px solid #4caf50;border-radius:8px;padding:10px 14px;font-size:16px;font-family:monospace;color:#333;background:#f8fff8;">Sunset$Beach#2026!</div>
          </div>
          <!-- Strength meter -->
          <div style="margin-bottom:20px;">
            <div style="display:flex;gap:4px;margin-bottom:4px;">
              <div style="flex:1;height:6px;border-radius:3px;background:#4caf50;"></div>
              <div style="flex:1;height:6px;border-radius:3px;background:#4caf50;"></div>
              <div style="flex:1;height:6px;border-radius:3px;background:#4caf50;"></div>
              <div style="flex:1;height:6px;border-radius:3px;background:#4caf50;"></div>
            </div>
            <div style="color:#4caf50;font-size:13px;font-weight:600;">Strong password ✓</div>
          </div>
          <!-- Checklist -->
          ${[['At least 12 characters',true],['Mix of uppercase and lowercase',true],['Contains numbers',true],['Contains special characters (!@#$)',true],['Not a common word or name',true]].map(([rule,pass])=>`
            <div style="display:flex;align-items:center;gap:8px;padding:4px 0;color:${pass?'#4caf50':'#e53935'};font-size:13px;">
              <span>${pass?'✅':'❌'}</span>${rule}
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },

  // ── setup-password-manager ─────────────────────────────────────────────────
  {
    file: 'setup-password-manager-step-2.png', w: 1280, h: 800,
    html: browserPage('https://passwords.google.com/', 'Google Password Manager', `
      <div style="padding:32px;font-family:'Google Sans','Roboto',system-ui,sans-serif;background:#f8f9fa;min-height:600px;">
        <div style="max-width:700px;margin:0 auto;">
          <div style="font-size:28px;color:#202124;margin-bottom:8px;">Password Manager</div>
          <div style="font-size:14px;color:#5f6368;margin-bottom:24px;">Your passwords are saved and protected in your Google Account</div>
          <div style="display:flex;gap:8px;margin-bottom:24px;">
            <div style="flex:1;background:white;border:1px solid #dadce0;border-radius:8px;padding:8px 16px;font-size:14px;color:#5f6368;">🔍 Search passwords</div>
          </div>
          ${[['🔵','amazon.com','bailey@email.com','••••••••••'],['🟢','netflix.com','bailey.w@gmail.com','••••••••'],['🔴','facebook.com','bailey.wilburn','•••••••••••'],['🟡','bankofamerica.com','b.wilburn','••••••••••••']].map(([dot,site,user,pass])=>`
            <div style="display:flex;align-items:center;gap:16px;padding:16px;background:white;border:1px solid #dadce0;border-radius:8px;margin-bottom:8px;">
              <div style="width:40px;height:40px;background:#f0f0f0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">${dot}</div>
              <div style="flex:1;"><div style="font-size:14px;color:#202124;font-weight:500;">${site}</div><div style="font-size:13px;color:#5f6368;">${user}</div></div>
              <div style="font-size:14px;color:#5f6368;font-family:monospace;">${pass}</div>
              <span style="color:#5f6368;">→</span>
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },

  // ── social-media-safety ────────────────────────────────────────────────────
  {
    file: 'social-media-safety-step-3.png', w: 1280, h: 800,
    html: browserPage('https://www.facebook.com/settings/privacy', 'Privacy Settings — Facebook', `
      <div style="display:flex;font-family:system-ui,sans-serif;background:#f0f2f5;min-height:600px;">
        <div style="width:280px;background:white;padding:16px;">
          <div style="font-size:20px;color:#1c1e21;font-weight:700;margin-bottom:16px;">Settings</div>
          ${['General','Security and login','Privacy','Profile and tagging','Blocking','Notifications'].map((n,i)=>`
            <div style="padding:10px 12px;border-radius:8px;font-size:14px;color:${i===2?'#1877f2':'#606770'};background:${i===2?'#e7f3ff':'transparent'};margin-bottom:2px;font-weight:${i===2?'600':'400'};">${n}</div>
          `).join('')}
        </div>
        <div style="flex:1;padding:24px 32px;">
          <div style="font-size:20px;color:#1c1e21;font-weight:700;margin-bottom:24px;">Privacy Settings and Tools</div>
          ${[['Who can see your future posts?','Friends','Recommended: Only friends can see'],['Who can see your friends list?','Only me','Keep private for safety'],['Who can look you up using your email?','Friends','Prevents strangers from finding you'],['Who can look you up using your phone number?','Friends','Limits who can search for you']].map(([q,val,tip])=>`
            <div style="background:white;border-radius:8px;padding:16px;margin-bottom:8px;display:flex;align-items:center;gap:16px;box-shadow:0 1px 2px rgba(0,0,0,0.1);">
              <div style="flex:1;"><div style="font-size:14px;color:#1c1e21;">${q}</div><div style="font-size:12px;color:#65676b;margin-top:2px;">${tip}</div></div>
              <div style="padding:6px 16px;background:#e7f3ff;color:#1877f2;border-radius:6px;font-size:13px;font-weight:500;">${val}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `)
  },
];

// ─── run ──────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🌐 Generating ${SHOTS.length} Browser screenshots...\n`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const s of SHOTS) {
    await shot(page, s.html, path.join(OUT, s.file), s.w, s.h);
  }
  await browser.close();
  console.log(`\n✅ Done — ${SHOTS.length} screenshots saved to ${OUT}\n`);
})();
