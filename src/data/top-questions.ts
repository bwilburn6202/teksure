/**
 * The home page's "Questions people ask most" list. Each entry points at a
 * live guide or tool; src/__tests__/top-questions.test.ts checks every link.
 * Keep it short (about ten) and phrased the way people ask, not as titles.
 */
export const TOP_QUESTIONS: { q: string; to: string }[] = [
  { q: 'Is this text, call or email a scam?', to: '/tools/is-this-a-scam' },
  { q: 'How do I make everything bigger on my iPhone?', to: '/guides/iphone-display-zoom-guide' },
  { q: 'How do I make the text bigger on my Android phone?', to: '/guides/android-font-size-guide' },
  { q: 'How do I stop robocalls and spam calls?', to: '/guides/how-to-handle-robocalls-spam-calls-2026' },
  { q: 'I think my email was hacked. What now?', to: '/guides/what-to-do-email-hacked' },
  { q: 'I forgot my email password.', to: '/guides/forgot-email-password-recovery' },
  { q: 'How do I video call my family?', to: '/guides/how-to-video-call-family-with-facetime-or-google-duo' },
  { q: 'How do I back up my iPhone?', to: '/guides/backup-iphone-to-icloud' },
  { q: 'My iPhone says there is not enough storage.', to: '/guides/fix-iphone-not-enough-storage-to-update' },
  { q: 'How do I get rid of pop-ups and spam?', to: '/guides/how-to-deal-with-pop-up-ads-and-spam-2026' },
];
