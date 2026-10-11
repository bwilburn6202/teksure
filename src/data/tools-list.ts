/**
 * The /tools page, grouped. Every slug here must exist in tools-registry.ts and
 * every registry slug must appear here — src/__tests__/tools-list.test.ts
 * checks both directions.
 */
export interface ToolListItem {
  slug: string;
  name: string;
  description: string;
}

export const TOOL_GROUPS: { title: string; tools: ToolListItem[] }[] = [
  {
    title: 'Check for scams',
    tools: [
      { slug: 'is-this-a-scam', name: 'Is This a Scam?', description: 'Answer a few questions about a call, text or email and get a plain answer.' },
      { slug: 'scam-message-decoder', name: 'Scam Message Decoder', description: 'Paste a suspicious message and see the warning signs in it.' },
      { slug: 'url-safety-checker', name: 'Link Safety Checker', description: 'Check a web address before you click it.' },
      { slug: 'robocall-blocker-setup', name: 'Stop Robocalls', description: 'Turn on the call-blocking features your phone already has.' },
    ],
  },
  {
    title: 'Protect your accounts',
    tools: [
      { slug: 'password-generator', name: 'Password Maker', description: 'Make a strong password you can still remember.' },
      { slug: 'password-strength', name: 'Password Checker', description: 'See how strong a password is. Nothing you type leaves your device.' },
      { slug: 'two-factor-setup', name: 'Two-Step Login Setup', description: 'Add a second lock to your email, bank and other accounts.' },
      { slug: 'data-breach-checker', name: 'Data Breach Checker', description: 'Find out if your email address showed up in a known data breach.' },
      { slug: 'credit-freeze-walkthrough', name: 'Freeze Your Credit', description: 'Freeze your credit at all three bureaus, step by step. It is free.' },
    ],
  },
  {
    title: 'If something already went wrong',
    tools: [
      { slug: 'scam-recovery-checklist', name: 'Scam Recovery Checklist', description: 'What to do first, second and third after a scam.' },
      { slug: 'id-theft-recovery', name: 'Identity Theft Recovery', description: 'Report it, lock things down and repair your credit.' },
      { slug: 'find-lost-phone', name: 'Find a Lost Phone', description: 'Locate, lock or erase a lost iPhone or Android phone.' },
      { slug: 'emergency-info-card', name: 'Emergency Info Card', description: 'Fill in and print a wallet card with your medical and contact details.' },
    ],
  },
  {
    title: 'Fix a problem',
    tools: [
      { slug: 'troubleshooter', name: 'Tech Troubleshooter', description: 'Pick what is wrong and follow the fixes, most likely first.' },
      { slug: 'wifi-troubleshooter', name: 'Wi-Fi Fixer', description: 'Get a dropped or slow Wi-Fi connection working again.' },
      { slug: 'internet-speed-doctor', name: 'Internet Speed Check', description: 'Find out why your internet is slow and what to do about it.' },
      { slug: 'printer-troubleshooter', name: 'Printer Fixer', description: 'Get a printer that will not print working again.' },
      { slug: 'speed-up-device', name: 'Speed Up a Slow Device', description: 'Safe steps to make a slow phone or computer faster.' },
      { slug: 'error-decoder', name: 'Error Message Decoder', description: 'Look up what a confusing error message means.' },
    ],
  },
  {
    title: 'Set up and save money',
    tools: [
      { slug: 'new-phone-setup', name: 'New Phone Setup', description: 'Move your contacts, photos and apps to a new phone.' },
      { slug: 'photo-backup-wizard', name: 'Photo Backup', description: 'Make sure your photos are saved somewhere safe.' },
      { slug: 'phone-plan-comparison', name: 'Phone Plan Comparison', description: 'Compare cell phone plans, including 55+ plans.' },
      { slug: 'low-cost-internet', name: 'Low-Cost Internet', description: 'Find discounted internet plans you may qualify for.' },
      { slug: 'subscription-auditor', name: 'Subscription Checkup', description: 'List what you pay for each month and spot what to cancel.' },
    ],
  },
];
