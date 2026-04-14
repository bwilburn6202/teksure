import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  KeyRound,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Phone,
  Mail,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Types ──────────────────────────────────────────────────────────────────────

interface Step {
  text: string;
  tip?: string;
}

type NodeType = 'service-select' | 'question' | 'method-select' | 'solution';

interface RecoveryNode {
  id: string;
  type: NodeType;
  question?: string;
  helpText?: string;
  yesNext?: string;
  noNext?: string;
  solution?: {
    heading: string;
    summary: string;
    steps: Step[];
    officialLink?: { label: string; url: string };
    phoneNumber?: string;
    warning?: string;
  };
}

// ── Decision tree ──────────────────────────────────────────────────────────────

const TREE: Record<string, RecoveryNode> = {
  // ── Google / Gmail ──────────────────────────────────────────────────────────
  google_start: {
    id: 'google_start',
    type: 'question',
    question: 'Do you still have access to the phone number or backup email you used when you set up your Google account?',
    helpText: 'Google sends a verification code to your old phone or backup email to prove it\'s really you.',
    yesNext: 'google_has_recovery',
    noNext: 'google_no_recovery',
  },
  google_has_recovery: {
    id: 'google_has_recovery',
    type: 'solution',
    solution: {
      heading: 'Reset your Google password with a recovery code',
      summary: 'Google will send a 6-digit code to your phone or backup email. You enter that code to create a new password.',
      steps: [
        { text: 'On any device, go to accounts.google.com and click "Forgot password?".' },
        { text: 'Type your Gmail address (it ends in @gmail.com) and click "Next".' },
        { text: 'Google shows your recovery options — choose "Send a text to …" or "Send email to …".' },
        { text: 'Check your phone for a text message from Google, OR open your backup email and look for a message from Google.' },
        { text: 'Type the 6-digit code exactly as shown. You have about 10 minutes before it expires.' },
        { text: 'Create a new password. Make it something you can remember — at least 8 characters, with a number or symbol.', tip: 'Quick Tip: Try a short sentence as your password, like "BlueSky2024!" — easy to remember but hard to guess.' },
        { text: 'Click "Change password". You\'re in!' },
      ],
      officialLink: { label: 'Open Google Account Recovery', url: 'https://accounts.google.com/signin/recovery' },
    },
  },
  google_no_recovery: {
    id: 'google_no_recovery',
    type: 'question',
    question: 'Do you remember any old passwords you used on this account?',
    helpText: 'Google may ask you to verify your identity by answering questions about your account history.',
    yesNext: 'google_old_password',
    noNext: 'google_no_options',
  },
  google_old_password: {
    id: 'google_old_password',
    type: 'solution',
    solution: {
      heading: 'Try Google\'s identity verification',
      summary: 'Google will ask you security questions to confirm you own the account. Answering correctly — even approximately — can unlock it.',
      steps: [
        { text: 'Go to accounts.google.com and click "Forgot password?".' },
        { text: 'Enter your Gmail address and click "Next".' },
        { text: 'When Google asks "Try another way", keep clicking until it asks for an old password.' },
        { text: 'Type the password you used to use — even if it\'s slightly wrong, Google may recognize it.' },
        { text: 'Google may also ask your account creation date or recent activity. Answer as best you can.', tip: 'Quick Tip: Do this on a device and location you regularly used for this account (like your home computer). Google uses your location and device history as a trust signal.' },
        { text: 'If successful, create a new password and add a recovery phone number so this doesn\'t happen again.' },
      ],
      officialLink: { label: 'Open Google Account Recovery', url: 'https://accounts.google.com/signin/recovery' },
      warning: 'If verification fails, Google may lock the recovery attempt for 24 hours. Wait a full day and try again.',
    },
  },
  google_no_options: {
    id: 'google_no_options',
    type: 'solution',
    solution: {
      heading: 'Submit a Google account recovery request',
      summary: 'If you have no recovery method and can\'t remember old passwords, you can submit a manual recovery form. Google reviews these individually — it may take a few days.',
      steps: [
        { text: 'Go to accounts.google.com/signin/recovery on a device you normally use at home.' },
        { text: 'Click through all the verification questions, selecting "I don\'t know" or "Try another way" each time.' },
        { text: 'At the end, Google offers a form — fill it out as completely as possible: your name, approximate account creation date, what you used the account for.' },
        { text: 'Submit the form and check the alternate email address you provide on the form. Google will respond within a few days.', tip: 'Quick Tip: The more detail you provide, the better. Mention specific things you remember about the account — contacts you emailed, folders you created, etc.' },
        { text: 'If Google cannot verify you, consider creating a new Gmail account. Your old one may be unrecoverable without a recovery method.' },
      ],
      officialLink: { label: 'Google Account Help', url: 'https://support.google.com/accounts/troubleshooter/2402620' },
    },
  },

  // ── Apple / iCloud ──────────────────────────────────────────────────────────
  apple_start: {
    id: 'apple_start',
    type: 'question',
    question: 'Do you have access to a trusted phone number — a number you added to your Apple account for verification?',
    helpText: 'Apple sends a verification code to a trusted phone number to confirm it\'s really you.',
    yesNext: 'apple_has_phone',
    noNext: 'apple_no_phone',
  },
  apple_has_phone: {
    id: 'apple_has_phone',
    type: 'solution',
    solution: {
      heading: 'Reset your Apple ID password with your phone',
      summary: 'Apple will text a verification code to your trusted phone number. You use that code to create a new password.',
      steps: [
        { text: 'On your iPhone, go to Settings, then tap your name at the very top.' },
        { text: 'Tap "Sign-In & Security", then tap "Change Password".' },
        { text: 'If prompted, enter your iPhone\'s screen lock passcode (the PIN you use to unlock your phone).' },
        { text: 'Apple may send a 6-digit code to your trusted phone number via text. Enter that code.' },
        { text: 'Create a new password. Use at least 8 characters, mix in a number and a symbol.', tip: 'Quick Tip: Use a phrase like "Grandma!2024" — personal and easy to remember, but hard to guess.' },
        { text: 'Tap "Change". Your Apple ID password is updated on all your Apple devices automatically.' },
      ],
      officialLink: { label: 'Apple ID Recovery page', url: 'https://iforgot.apple.com' },
    },
  },
  apple_no_phone: {
    id: 'apple_no_phone',
    type: 'question',
    question: 'Do you have access to a trusted Apple device (an iPhone, iPad, or Mac) that is still signed in to your Apple ID?',
    helpText: 'If another device is still signed in, you can reset your password directly from that device.',
    yesNext: 'apple_has_device',
    noNext: 'apple_account_recovery',
  },
  apple_has_device: {
    id: 'apple_has_device',
    type: 'solution',
    solution: {
      heading: 'Reset your Apple ID from a signed-in Apple device',
      summary: 'If any Apple device (iPhone, iPad, or Mac) is still signed in to your account, you can use it to set a new password.',
      steps: [
        { text: 'On the signed-in iPhone or iPad, open Settings and tap your name at the top.' },
        { text: 'Tap "Sign-In & Security", then tap "Change Password".' },
        { text: 'Enter the screen lock passcode for that device when asked.' },
        { text: 'Follow the on-screen steps to create your new password.' },
        { text: 'Once done, sign in again on your other devices with the new password.' },
        { text: 'After you\'re back in, add a trusted phone number: Settings → Your Name → Sign-In & Security → Trusted Phone Number.', tip: 'Quick Tip: Adding a trusted phone number now means you\'ll always have an easy way back in if this happens again.' },
      ],
      officialLink: { label: 'Apple Support: Reset Apple ID', url: 'https://support.apple.com/en-us/111820' },
    },
  },
  apple_account_recovery: {
    id: 'apple_account_recovery',
    type: 'solution',
    solution: {
      heading: 'Use Apple Account Recovery (takes 1–7 days)',
      summary: 'If you have no trusted devices or phone number, Apple\'s Account Recovery process verifies your identity manually. This takes time but it\'s your best remaining option.',
      steps: [
        { text: 'On any device, go to iforgot.apple.com.' },
        { text: 'Enter your Apple ID (your email address) and follow the steps.' },
        { text: 'When Apple can\'t send a code, look for the "Account Recovery" option and tap it.' },
        { text: 'Apple will ask for a phone number where they can reach you (doesn\'t have to be your old number).' },
        { text: 'Apple will tell you a date — usually 1 to 7 days — when your account will be unlocked. Write that date down.' },
        { text: 'On that date, Apple will contact you at the number you provided. Follow their instructions to set a new password.', tip: 'Quick Tip: The wait time depends on how much security information Apple can verify about you. Having purchased apps or iCloud storage helps prove ownership.' },
      ],
      officialLink: { label: 'Apple Account Recovery', url: 'https://iforgot.apple.com' },
      phoneNumber: '1-800-275-2273',
      warning: 'If someone else is trying to recover your account, you can cancel their request from any trusted device. Apple protects legitimate owners with a notification system.',
    },
  },

  // ── Facebook ────────────────────────────────────────────────────────────────
  facebook_start: {
    id: 'facebook_start',
    type: 'question',
    question: 'Do you still have access to the email address or phone number linked to your Facebook account?',
    helpText: 'Facebook sends a reset code to your email or phone. If you have either one, recovery is straightforward.',
    yesNext: 'facebook_has_contact',
    noNext: 'facebook_no_contact',
  },
  facebook_has_contact: {
    id: 'facebook_has_contact',
    type: 'solution',
    solution: {
      heading: 'Reset your Facebook password',
      summary: 'Facebook will send a 6-digit code to your email or phone. Enter the code to set a new password.',
      steps: [
        { text: 'Go to facebook.com and click "Forgot password?" under the login boxes.' },
        { text: 'Type your email address or phone number — whichever is linked to your account.' },
        { text: 'Facebook shows the accounts that match. Click "This is my account" next to yours.' },
        { text: 'Choose "Send code via email" or "Send code via text". Pick whichever you have access to.' },
        { text: 'Check your email inbox or phone for the 6-digit code from Facebook.' },
        { text: 'Enter the code on Facebook\'s website. You have about 10 minutes.' },
        { text: 'Create a new password and click "Continue". You\'re back in.' },
      ],
      officialLink: { label: 'Facebook Login Help', url: 'https://www.facebook.com/login/identify' },
    },
  },
  facebook_no_contact: {
    id: 'facebook_no_contact',
    type: 'question',
    question: 'Are you still logged in to Facebook on another device — like a tablet, old phone, or another computer?',
    helpText: 'If any device is still logged in, you can change your password or email from there without a code.',
    yesNext: 'facebook_logged_in_elsewhere',
    noNext: 'facebook_identity',
  },
  facebook_logged_in_elsewhere: {
    id: 'facebook_logged_in_elsewhere',
    type: 'solution',
    solution: {
      heading: 'Update your Facebook email from a logged-in device',
      summary: 'From any device already logged in, you can update your contact information and then reset your password.',
      steps: [
        { text: 'On the logged-in device, open Facebook and go to your profile.' },
        { text: 'Tap the three-line menu (☰) and go to Settings → Personal Information.' },
        { text: 'Under "Contact info", add an email address or phone number you have access to today.' },
        { text: 'Confirm the new contact info when Facebook sends a verification code to it.' },
        { text: 'Now go to a different browser or device, visit facebook.com, and click "Forgot password?".' },
        { text: 'Use the new email or phone you just added to receive your reset code and create a new password.' },
      ],
      officialLink: { label: 'Facebook Account Settings', url: 'https://www.facebook.com/settings' },
    },
  },
  facebook_identity: {
    id: 'facebook_identity',
    type: 'solution',
    solution: {
      heading: 'Use Facebook\'s identity verification',
      summary: 'Facebook can verify your identity using a government-issued ID (like a driver\'s license). This takes 1–3 business days.',
      steps: [
        { text: 'Go to facebook.com/help/contact/183000765122339 — this is Facebook\'s account recovery form.' },
        { text: 'Describe your situation and submit the form.' },
        { text: 'Facebook may ask you to upload a photo of a government ID to confirm you are the real owner.' },
        { text: 'Use a clear, well-lit photo of your driver\'s license, state ID, or passport.' },
        { text: 'Facebook reviews your submission within 1–3 business days and emails the contact address you provide.', tip: 'Quick Tip: Make sure the name on your ID matches the name on your Facebook account exactly.' },
      ],
      officialLink: { label: 'Facebook Identity Help', url: 'https://www.facebook.com/help/contact/183000765122339' },
    },
  },

  // ── Amazon ──────────────────────────────────────────────────────────────────
  amazon_start: {
    id: 'amazon_start',
    type: 'question',
    question: 'Do you have access to the email address you used to create your Amazon account?',
    helpText: 'Amazon sends a one-time password (OTP) code to your email or phone to let you reset your password.',
    yesNext: 'amazon_has_email',
    noNext: 'amazon_no_email',
  },
  amazon_has_email: {
    id: 'amazon_has_email',
    type: 'solution',
    solution: {
      heading: 'Reset your Amazon password',
      summary: 'Amazon emails you a one-time code. Enter it on Amazon\'s site to create a new password.',
      steps: [
        { text: 'Go to amazon.com and click "Hello, sign in" at the top right.' },
        { text: 'Type your email address and click "Continue".' },
        { text: 'On the password screen, click "Forgot your password?".' },
        { text: 'Amazon sends a one-time code to your email. Check your inbox — look for an email from amazon.com.' },
        { text: 'Type the code on Amazon\'s website. It expires in a few minutes, so do this right away.' },
        { text: 'Enter a new password twice to confirm it, then click "Save changes".' },
        { text: 'You\'re back in! Amazon keeps your order history, addresses, and payment info safe.' },
      ],
      officialLink: { label: 'Amazon Password Reset', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G2LKBF8QFXNKF6TP' },
    },
  },
  amazon_no_email: {
    id: 'amazon_no_email',
    type: 'solution',
    solution: {
      heading: 'Contact Amazon customer service directly',
      summary: 'If you\'ve lost access to your email, Amazon\'s customer service team can help you update it. They can verify your identity by phone.',
      steps: [
        { text: 'Call Amazon Customer Service at 1-888-280-4331 (available 24/7, free).' },
        { text: 'Tell them you\'ve lost access to the email linked to your Amazon account.' },
        { text: 'They\'ll ask you to verify your identity using your name, billing address, and last 4 digits of a card on file.' },
        { text: 'Once verified, they can update the email address on your account to one you have access to today.' },
        { text: 'After the email is updated, go to amazon.com and use "Forgot password?" to set a new password.' },
      ],
      officialLink: { label: 'Amazon Help Center', url: 'https://www.amazon.com/gp/help/customer/display.html' },
      phoneNumber: '1-888-280-4331',
    },
  },

  // ── Microsoft / Outlook ────────────────────────────────────────────────────
  microsoft_start: {
    id: 'microsoft_start',
    type: 'question',
    question: 'Do you have access to a recovery email address or phone number linked to your Microsoft account?',
    helpText: 'Microsoft uses a security code sent to your backup contact to verify it\'s really you.',
    yesNext: 'microsoft_has_recovery',
    noNext: 'microsoft_no_recovery',
  },
  microsoft_has_recovery: {
    id: 'microsoft_has_recovery',
    type: 'solution',
    solution: {
      heading: 'Reset your Microsoft password with a recovery code',
      summary: 'Microsoft will send a code to your backup email or phone. Enter it to set a new password.',
      steps: [
        { text: 'Go to account.live.com/password/reset and click "I forgot my password".' },
        { text: 'Enter your Microsoft email address (often an @outlook.com or @hotmail.com address) and click "Next".' },
        { text: 'Choose where to receive your code — your backup email or phone.' },
        { text: 'Check for the email or text from Microsoft and enter the security code.' },
        { text: 'Create a new password. Use at least 8 characters with numbers and letters.' },
        { text: 'Click "Next". Microsoft signs you back in automatically.' },
      ],
      officialLink: { label: 'Microsoft Password Reset', url: 'https://account.live.com/password/reset' },
    },
  },
  microsoft_no_recovery: {
    id: 'microsoft_no_recovery',
    type: 'solution',
    solution: {
      heading: 'Use Microsoft\'s account recovery form',
      summary: 'Microsoft has a recovery form where you prove ownership by answering questions about your account. It takes 1–2 business days.',
      steps: [
        { text: 'Go to account.live.com/acsr — this is Microsoft\'s Account Recovery Request form.' },
        { text: 'Fill in your Microsoft email address and a new email where Microsoft can reach you.' },
        { text: 'Answer as many questions as you can: subject lines of old emails, contacts you emailed, previous passwords, subscription services linked to the account.' },
        { text: 'Click "Submit". Microsoft reviews your answers within 1–2 business days.', tip: 'Quick Tip: The more information you provide, the higher your chance of recovery. Think about what you used this account for — purchases, newsletters, contacts.' },
        { text: 'Check the new email you provided for a response from Microsoft.' },
        { text: 'If successful, follow their link to set a new password. If not, Microsoft will explain what happened.' },
      ],
      officialLink: { label: 'Microsoft Account Recovery', url: 'https://account.live.com/acsr' },
      phoneNumber: '1-800-642-7676',
    },
  },

  // ── Netflix ─────────────────────────────────────────────────────────────────
  netflix_start: {
    id: 'netflix_start',
    type: 'question',
    question: 'Do you have access to the email address linked to your Netflix account?',
    helpText: 'Netflix sends a password reset link to your email. This is the simplest method.',
    yesNext: 'netflix_has_email',
    noNext: 'netflix_no_email',
  },
  netflix_has_email: {
    id: 'netflix_has_email',
    type: 'solution',
    solution: {
      heading: 'Reset your Netflix password by email',
      summary: 'Netflix emails you a reset link. Click it to set a new password — no code to type.',
      steps: [
        { text: 'Go to netflix.com and click "Sign In".' },
        { text: 'Click "Forgot password?" below the password box.' },
        { text: 'Type your email address and click "Email Me".' },
        { text: 'Check your email inbox for a message from Netflix with subject "Reset your Netflix password".' },
        { text: 'Click the blue "Reset Password" button in that email. It opens Netflix in your browser.' },
        { text: 'Type your new password twice and click "Save".' },
        { text: 'Netflix signs you in automatically. You may need to sign in again on your TV or phone.' },
      ],
      officialLink: { label: 'Netflix Sign-In Help', url: 'https://www.netflix.com/loginhelp' },
    },
  },
  netflix_no_email: {
    id: 'netflix_no_email',
    type: 'solution',
    solution: {
      heading: 'Contact Netflix and update your account email',
      summary: 'Netflix support can look up your account using your payment details and help you update your email address.',
      steps: [
        { text: 'Call Netflix at 1-866-579-7172 (available 24 hours, free).' },
        { text: 'Tell them you\'ve lost access to the email on your account.' },
        { text: 'They\'ll ask for your name and the last 4 digits of the credit or debit card used to pay for Netflix.' },
        { text: 'Once they verify you, they can update your email address to one you have access to now.' },
        { text: 'After the call, go to netflix.com and use "Forgot password?" to set a new password.' },
      ],
      officialLink: { label: 'Netflix Help Center', url: 'https://help.netflix.com' },
      phoneNumber: '1-866-579-7172',
    },
  },
};

// ── Service list ───────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  icon: string;
  startNode: string;
  color: string;
}

const SERVICES: Service[] = [
  { id: 'google', name: 'Google / Gmail', icon: 'G', startNode: 'google_start', color: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 text-red-700 dark:text-red-300' },
  { id: 'apple', name: 'Apple / iCloud', icon: '', startNode: 'apple_start', color: 'bg-slate-50 border-slate-200 dark:bg-slate-900/20 dark:border-slate-700 text-slate-700 dark:text-slate-300' },
  { id: 'facebook', name: 'Facebook', icon: 'f', startNode: 'facebook_start', color: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
  { id: 'amazon', name: 'Amazon', icon: 'a', startNode: 'amazon_start', color: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-700 dark:text-amber-300' },
  { id: 'microsoft', name: 'Microsoft / Outlook / Hotmail', icon: 'M', startNode: 'microsoft_start', color: 'bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-800 text-teal-700 dark:text-teal-300' },
  { id: 'netflix', name: 'Netflix', icon: 'N', startNode: 'netflix_start', color: 'bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-800 text-rose-700 dark:text-rose-300' },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function AccountRecovery() {
  const [path, setPath] = useState<string[]>(['service-select']);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const currentId = path[path.length - 1];
  const current = currentId === 'service-select' ? null : TREE[currentId];

  const goTo = (nodeId: string) => setPath(p => [...p, nodeId]);

  const goBack = () => {
    if (path.length > 1) setPath(p => p.slice(0, -1));
  };

  const restart = () => {
    setPath(['service-select']);
    setSelectedService(null);
  };

  const selectService = (service: Service) => {
    setSelectedService(service);
    setPath(['service-select', service.startNode]);
  };

  const isServiceSelect = currentId === 'service-select';

  return (
    <>
      <SEOHead
        title="Can't Log In? Account Recovery Wizard — TekSure"
        description="Locked out of Google, Apple, Facebook, Amazon, or Microsoft? Our step-by-step wizard walks you through exactly how to get back into your account — in plain English."
        path="/tools/account-recovery"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <KeyRound className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Can't Log In?</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We'll walk you through getting back into your account — step by step. Choose the service you're locked out of to get started.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* Breadcrumb trail */}
          {path.length > 1 && selectedService && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 flex-wrap">
              <button onClick={restart} className="hover:text-foreground transition-colors">
                Start
              </button>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">{selectedService.name}</span>
              {path.slice(2).map((id, i) => (
                <span key={id} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  <span className={i === path.length - 3 ? 'text-foreground font-medium' : ''}>
                    {TREE[id]?.solution?.heading?.slice(0, 28) + '…' || '…'}
                  </span>
                </span>
              ))}
            </div>
          )}

          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">

              {/* ── Service Selection Screen ── */}
              {isServiceSelect && (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h2 className="text-lg font-semibold">Which account are you locked out of?</h2>
                  </div>
                  <div className="space-y-2">
                    {SERVICES.map(service => (
                      <button
                        key={service.id}
                        onClick={() => selectService(service)}
                        className="w-full flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                        aria-label={`Get help recovering ${service.name} account`}
                      >
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${service.color}`}
                          aria-hidden="true"
                        >
                          {service.icon}
                        </span>
                        <span className="font-medium text-sm">{service.name}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" aria-hidden="true" />
                      </button>
                    ))}
                  </div>

                  {/* Scam warning */}
                  <div className="mt-5 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                      <strong>Watch out for scams:</strong> If someone called you saying your account was compromised and asking for a fee to fix it — that's a scam. Real account recovery is free and done entirely on the company's own website.
                    </p>
                  </div>
                </>
              )}

              {/* ── Question Node ── */}
              {current?.type === 'question' && (
                <>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <h2 className="text-lg font-semibold leading-snug">{current.question}</h2>
                  </div>
                  {current.helpText && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mt-3 mb-4">
                      <Lightbulb className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-blue-700 dark:text-blue-300">{current.helpText}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => current.yesNext && goTo(current.yesNext)}
                      className="py-4 rounded-xl border-2 border-green-400/60 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors font-semibold text-green-700 dark:text-green-300 flex items-center justify-center gap-2"
                      aria-label="Yes"
                    >
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Yes
                    </button>
                    <button
                      onClick={() => current.noNext && goTo(current.noNext)}
                      className="py-4 rounded-xl border-2 border-red-300/60 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-semibold text-red-600 dark:text-red-300 flex items-center justify-center gap-2"
                      aria-label="No"
                    >
                      No
                    </button>
                  </div>
                </>
              )}

              {/* ── Solution Node ── */}
              {current?.type === 'solution' && current.solution && (
                <>
                  <div className="text-center mb-5">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                        <KeyRound className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                      </div>
                    </div>
                    <h2 className="text-xl font-bold">{current.solution.heading}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{current.solution.summary}</p>
                  </div>

                  {/* Warning banner */}
                  {current.solution.warning && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-4">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-amber-700 dark:text-amber-300">{current.solution.warning}</p>
                    </div>
                  )}

                  {/* Steps */}
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Steps to follow:
                    </p>
                    <ol className="space-y-4">
                      {current.solution.steps.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5"
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                            {step.tip && (
                              <div className="flex items-start gap-1.5 mt-1.5 p-2 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                                <Lightbulb className="h-3 w-3 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                                <p className="text-xs text-blue-700 dark:text-blue-300">{step.tip}</p>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Phone number */}
                  {current.solution.phoneNumber && (
                    <div className="mt-5 flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">Customer Service Phone</p>
                        <p className="text-sm font-bold text-primary">{current.solution.phoneNumber}</p>
                        <p className="text-xs text-muted-foreground">Free to call — available to help you</p>
                      </div>
                    </div>
                  )}

                  {/* Official link */}
                  {current.solution.officialLink && (
                    <a
                      href={current.solution.officialLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 w-full px-4 py-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-sm font-medium text-primary"
                      aria-label={`${current.solution.officialLink.label} — opens in new tab`}
                    >
                      <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {current.solution.officialLink.label}
                    </a>
                  )}

                  {/* Email safety note */}
                  <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-muted border border-border">
                    <Mail className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong>Safety reminder:</strong> The official recovery page links above go directly to the company's real website. Never click a link from an unexpected email or text message claiming your account has a problem — those are often scams.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">
                    <Button variant="outline" onClick={restart} className="gap-2 flex-1">
                      <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start over
                    </Button>
                    <Button asChild className="gap-2 flex-1">
                      <Link to="/get-help">
                        Get expert help <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Back button */}
          {path.length > 1 && current?.type === 'question' && (
            <div className="mt-3">
              <Button variant="ghost" size="sm" onClick={goBack} className="gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="h-3 w-3" aria-hidden="true" /> Previous step
              </Button>
            </div>
          )}

          {/* Bottom context */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Still stuck? A TekSure technician can walk you through this over video call.
            </p>
            <Button variant="outline" asChild size="sm">
              <Link to="/get-help">Book free help session</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
