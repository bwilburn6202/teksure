import { useState } from 'react';
import { KeyRound, ChevronRight, ChevronLeft, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type ServiceKey =
  | 'gmail'
  | 'facebook'
  | 'amazon'
  | 'apple-id'
  | 'yahoo'
  | 'outlook'
  | 'bank'
  | 'instagram'
  | 'netflix';

interface ServiceGuide {
  name: string;
  emoji: string;
  loginUrl: string;
  steps: string[];
  recoverOptions: string[];
  tip: string;
  warning?: string;
}

const SERVICES: Record<ServiceKey, ServiceGuide> = {
  gmail: {
    name: 'Gmail / Google Account',
    emoji: '📧',
    loginUrl: 'accounts.google.com',
    steps: [
      'Go to accounts.google.com or open the Gmail app.',
      'Tap "Sign in" and enter your Gmail address (ending in @gmail.com).',
      'On the password screen, tap "Forgot password?"',
      'Google will ask how you want to verify your identity. The easiest options are: receive a text message code to your phone, get a code sent to your recovery email address, or answer a security question.',
      'Choose the option that works for you and follow the instructions. Once verified, Google will let you create a new password.',
      'Choose a new password that is at least 8 characters. Write it down somewhere safe before you submit it.',
    ],
    recoverOptions: [
      'Text message to your recovery phone number',
      'Code sent to your backup email address',
      'Answering a security question you set up',
      'If none of those work, Google has an Account Recovery form at accounts.google.com/signin/recovery',
    ],
    tip: 'Quick Tip: Once you\'re back in, go to Settings → Security and make sure your recovery phone number and backup email are up to date so you don\'t get locked out again.',
  },
  facebook: {
    name: 'Facebook',
    emoji: '👍',
    loginUrl: 'facebook.com',
    steps: [
      'Go to facebook.com or open the Facebook app.',
      'Tap "Forgot password?" below the login form.',
      'Facebook will ask you to enter the email address or phone number linked to your account. Type it in and tap "Search."',
      'Facebook will show your account (blurred for privacy). If it\'s yours, tap "This is my account."',
      'Choose how to receive a reset code: by text message to your phone, or by email. Select whichever you can access.',
      'Enter the 6-digit code Facebook sends you, then create a new password. Write it down before submitting.',
    ],
    recoverOptions: [
      'Text message code to your linked phone number',
      'Email code to your linked email address',
      'If you no longer have access to either, Facebook\'s Trusted Contacts feature may help (if you set it up previously)',
    ],
    tip: 'Quick Tip: Once you\'re logged in, go to Settings → Security and Login to add a trusted contact and update your recovery options.',
    warning: 'Facebook will never ask you to pay money to recover your account. Any message claiming otherwise is a scam.',
  },
  amazon: {
    name: 'Amazon',
    emoji: '📦',
    loginUrl: 'amazon.com',
    steps: [
      'Go to amazon.com and click "Account & Lists" at the top, then "Sign In."',
      'Enter your email address and click "Continue."',
      'On the password screen, click "Forgot your password?"',
      'Amazon will send a one-time password (OTP) — a 6-digit code — to your email address or phone number. Check your email inbox (look in Spam if you don\'t see it).',
      'Enter the 6-digit code on the Amazon website within 10 minutes.',
      'Create a new password. Make it at least 8 characters and write it down before saving.',
    ],
    recoverOptions: [
      'One-time code sent to your account\'s email address',
      'One-time code sent to your linked phone number (if you added one)',
    ],
    tip: 'Quick Tip: Once you\'re back in, go to Account → Login & Security to update your password and add a backup phone number.',
  },
  'apple-id': {
    name: 'Apple ID (iPhone / iCloud)',
    emoji: '🍎',
    loginUrl: 'iforgot.apple.com',
    steps: [
      'On your iPhone, go to Settings → tap your name at the top → Password & Security → Change Password. If you\'re already signed in on the device, you may be able to reset it this way.',
      'If you can\'t get in on the device, go to iforgot.apple.com on any computer or phone.',
      'Enter your Apple ID email address and click Continue.',
      'Apple will ask you to verify your identity. Options include: a trusted phone number (Apple sends a code by text), a trusted device (a notification appears on your iPhone or iPad), or answering your security questions.',
      'Once verified, you can create a new Apple ID password.',
      'Write down the new password before you submit it. Your Apple ID password unlocks your iPhone, iCloud, App Store, and all Apple services.',
    ],
    recoverOptions: [
      'Code sent to your trusted phone number',
      'Notification sent to a trusted Apple device you\'re signed into',
      'Security questions you set up when creating the account',
      'If you\'ve been locked out for a long time, use Apple\'s Account Recovery process at iforgot.apple.com — it can take several days',
    ],
    tip: 'Quick Tip: Set up Account Recovery Contacts in Settings → Apple ID → Password & Security → Account Recovery. A trusted family member can then help you back in.',
    warning: 'If someone calls claiming to be Apple and asking for your Apple ID password, hang up. Apple will never call you and ask for your password.',
  },
  yahoo: {
    name: 'Yahoo Mail',
    emoji: '📮',
    loginUrl: 'login.yahoo.com',
    steps: [
      'Go to login.yahoo.com or open the Yahoo Mail app.',
      'Click "Sign in," enter your Yahoo email address, and click "Next."',
      'On the password screen, click "Forgot password?"',
      'Yahoo will ask for your Yahoo ID (email address) again and click Continue.',
      'Choose how to recover access: text message to your recovery phone, or a code to your recovery email address.',
      'Enter the code you receive and create a new password. Write it down before saving.',
    ],
    recoverOptions: [
      'Text message code to your recovery phone number',
      'Code sent to your recovery email address',
      'If neither is available, Yahoo has an account recovery form — but success is not guaranteed without a backup method',
    ],
    tip: 'Quick Tip: Yahoo email accounts that go unused for 12 months may be deleted. Consider forwarding important emails to a Gmail or Outlook account as a backup.',
  },
  outlook: {
    name: 'Outlook / Hotmail / Microsoft',
    emoji: '✉️',
    loginUrl: 'account.live.com/password/reset',
    steps: [
      'Go to account.live.com/password/reset or visit microsoft.com and click "Sign in."',
      'Enter your Microsoft account email (often ending in @hotmail.com, @outlook.com, or @live.com) and click "Next."',
      'On the password screen, click "Forgot my password."',
      'Select "I forgot my password" and click "Next."',
      'Choose how to receive a security code: email to a backup address, or text to your phone number.',
      'Enter the code and create a new password. Write it down before submitting.',
    ],
    recoverOptions: [
      'Code sent to your recovery email address',
      'Text message code to your linked phone number',
      'If you have no recovery options, Microsoft\'s Account Recovery form at account.live.com/acsr is available but may take several days',
    ],
    tip: 'Quick Tip: Once you\'re back in, go to account.microsoft.com → Security → Update your recovery info to add or update your backup phone and email.',
  },
  bank: {
    name: 'Bank or Credit Union Website',
    emoji: '🏦',
    loginUrl: '',
    steps: [
      'Go to your bank\'s official website — type the bank name in Google or use a bookmark you trust. Do NOT click links in emails claiming to be from your bank.',
      'Click "Sign In" or "Log In" and enter your username (often your email address or a username you created).',
      'Click "Forgot Password" or "Forgot Username" — most banks offer both options separately.',
      'Your bank will ask to verify your identity. Common methods: email you a code, text a code to your phone, or ask security questions you set up when you opened the account.',
      'Once verified, create a new password. Bank passwords often have strict requirements — at least 8 characters, must include a number and a symbol.',
      'Write down your new password in a secure place (not on your computer). Consider a password manager like 1Password or the free Bitwarden.',
    ],
    recoverOptions: [
      'Text message code to your registered phone number',
      'Code sent to your registered email address',
      'Security questions',
      'If none work, call the number on the back of your debit or credit card to speak with a representative',
    ],
    tip: 'Quick Tip: Your bank\'s 24/7 phone number is always printed on the back of your debit card. That is the safest way to get help if you are locked out.',
    warning: 'Never reset a banking password using a link in an email or text message — always go directly to the bank\'s website by typing the address yourself.',
  },
  instagram: {
    name: 'Instagram',
    emoji: '📸',
    loginUrl: 'instagram.com',
    steps: [
      'Open the Instagram app or go to instagram.com.',
      'Tap "Forgot password?" below the login form.',
      'Enter the email address, phone number, or username linked to your account.',
      'Instagram will send a reset link to your email or a code to your phone. Choose the option you can access.',
      'If sent by email, open the email and click the "Reset your password" link (it expires in 24 hours).',
      'Create a new password and write it down before saving.',
    ],
    recoverOptions: [
      'Reset link sent to your registered email',
      'Code sent to your registered phone number',
      'If you have neither, Instagram offers "Need more help?" at the bottom of the reset screen',
    ],
    tip: 'Quick Tip: Turn on Two-Factor Authentication in Instagram Settings → Security → Two-Factor Authentication to protect your account going forward.',
  },
  netflix: {
    name: 'Netflix',
    emoji: '📺',
    loginUrl: 'netflix.com',
    steps: [
      'Go to netflix.com and click "Sign In."',
      'Enter your email address and click "Continue."',
      'Click "Forgot password?" on the sign-in screen.',
      'Netflix will email a password reset link to your account\'s email address. Open your email inbox.',
      'Click the "Reset Password" button in the Netflix email. The link expires after a few hours.',
      'Create a new password and write it down before saving.',
    ],
    recoverOptions: [
      'Password reset link sent to your account\'s email address (this is the only option Netflix offers)',
      'If you no longer have access to that email, you will need to contact Netflix support at help.netflix.com',
    ],
    tip: 'Quick Tip: Netflix now limits account sharing to one household. If you share with family in another home, they may need to set up their own account.',
  },
};

const SERVICE_LIST: { key: ServiceKey; name: string; emoji: string }[] = [
  { key: 'gmail', name: 'Gmail / Google', emoji: '📧' },
  { key: 'facebook', name: 'Facebook', emoji: '👍' },
  { key: 'amazon', name: 'Amazon', emoji: '📦' },
  { key: 'apple-id', name: 'Apple ID', emoji: '🍎' },
  { key: 'yahoo', name: 'Yahoo Mail', emoji: '📮' },
  { key: 'outlook', name: 'Outlook / Hotmail', emoji: '✉️' },
  { key: 'instagram', name: 'Instagram', emoji: '📸' },
  { key: 'netflix', name: 'Netflix', emoji: '📺' },
  { key: 'bank', name: 'Bank Website', emoji: '🏦' },
];

export default function PasswordResetGuide() {
  const [selected, setSelected] = useState<ServiceKey | null>(null);

  const guide = selected ? SERVICES[selected] : null;

  return (
    <>
      <SEOHead
        title="Password Reset Guide — TekSure"
        description="Forgot your password? Pick the service you're locked out of — Gmail, Facebook, Amazon, Apple ID, and more — and get step-by-step reset instructions."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-950/60 mb-4">
              <KeyRound className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Password Reset Guide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Pick the service you're locked out of — we'll walk you through the reset steps.
            </p>
          </div>

          {/* Scam warning */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-5">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <span className="font-semibold">Before you start:</span> Only reset your password using the company's own official website or app. Never click a "reset your password" link in an email you did not request — that is a common scam. If you did not ask for a reset email, ignore it.
              </p>
            </div>
          </div>

          {!selected ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Which account are you locked out of?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICE_LIST.map(s => (
                  <button
                    key={s.key}
                    onClick={() => setSelected(s.key)}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all text-center"
                  >
                    <span className="text-3xl">{s.emoji}</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : guide ? (
            <>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{guide.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{guide.name}</h2>
                    {guide.loginUrl && (
                      <p className="text-sm text-violet-600 dark:text-violet-400">{guide.loginUrl}</p>
                    )}
                  </div>
                </div>

                {guide.warning && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-4">
                    <p className="text-sm text-red-800 dark:text-red-200"><span className="font-semibold">Warning:</span> {guide.warning}</p>
                  </div>
                )}

                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Steps to reset your password</h3>
                <ol className="space-y-3 mb-5">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>

                <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 mb-1">Recovery options for {guide.name}</p>
                  <ul className="space-y-1">
                    {guide.recoverOptions.map((opt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-violet-700 dark:text-violet-300">
                        <span className="flex-shrink-0 mt-0.5">→</span>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-sm text-blue-800 dark:text-blue-200">{guide.tip}</p>
                </div>
              </div>

              {/* After-reset tip */}
              <div className="mt-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <span className="font-semibold">After you reset:</span> Write your new password down in a safe place — a notebook kept in your home. Do not store passwords in a text message or email. A free password manager like Bitwarden can also store them securely for you.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to service list
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Start Over
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
