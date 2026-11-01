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
      { slug: 'two-factor-setup', name: 'Two-Step Login Setup', description: 'Add a second lock to your email, bank and other accounts.' },
      { slug: 'credit-freeze-walkthrough', name: 'Freeze Your Credit', description: 'Freeze your credit at all three bureaus, step by step. It is free.' },
    ],
  },
  {
    title: 'If something already went wrong',
    tools: [
      { slug: 'scam-recovery-checklist', name: 'Scam Recovery Checklist', description: 'What to do first, second and third after a scam.' },
      { slug: 'id-theft-recovery', name: 'Identity Theft Recovery', description: 'Report it, lock things down and repair your credit.' },
    ],
  },
];
