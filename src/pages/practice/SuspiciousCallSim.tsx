import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  PhoneOff,
  Mic,
  Volume2,
  VolumeX,
  Shield,
  AlertTriangle,
  RotateCcw,
  Trophy,
  ChevronRight,
  CheckCircle2,
  XCircle,
  History,
  Users,
  BookOpen,
  Flag,
  Ban,
  Info,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

/* ────────────────────────────────────────────────────────────────────────────
 * Suspicious Call Simulator
 * ------------------------------------------------------------------------
 * An interactive branching simulator that lets people practice handling a
 * suspicious phone call in a safe place — before one arrives for real. No
 * scammer on the line, no money on the table. Users pick scenarios, make
 * response choices, and see the consequences of each path.
 *
 * Design goals:
 *   • Plain language, large text, high-contrast controls
 *   • Every path explains what the scammer was trying to do
 *   • Optional SpeechSynthesis "voice" so seniors can practice hearing the
 *     pressure cadence, with an easy off switch
 *   • localStorage history so repeat practice feels earned
 * ──────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────── Types ─────────────────────────────────── */

type Outcome = 'success' | 'mid' | 'fail';

interface CallerLine {
  /** What the caller says at this point in the branch. */
  line: string;
  /** Stage-direction voice (used for audio and accessibility labels). */
  tone?: string;
}

interface ResponseOption {
  /** What the user would say or do. */
  label: string;
  /** Scoring: +1 safe de-escalation, 0 neutral, -1 engagement that escalates. */
  score: -1 | 0 | 1;
  /** Next node id — present when the branch continues. */
  nextId?: string;
  /** Terminal outcome — present only on the final response of a branch. */
  outcome?: Outcome;
  /** Why this response is safe or risky — shown after selection. */
  coaching: string;
}

interface CallNode {
  id: string;
  caller: CallerLine;
  options: ResponseOption[];
}

interface Scenario {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  callerLabel: string;
  tactics: string[];
  wantsFromYou: string;
  startNodeId: string;
  nodes: Record<string, CallNode>;
}

interface Attempt {
  scenarioId: string;
  scenarioTitle: string;
  score: number;
  outcome: Outcome;
  dateISO: string;
}

interface OutcomeCopy {
  badge: string;
  icon: typeof CheckCircle2;
  color: string;
  bg: string;
  border: string;
  title: string;
  description: string;
}

/* ─────────────────────── Scenario library ───────────────────────────── */

const scenarios: Scenario[] = [
  /* 1. Grandkid emergency — the deepest branch (5 levels). */
  {
    id: 'grandkid',
    shortTitle: 'Grandkid in trouble',
    title: '"Grandma, it\'s me — I\'m in trouble!"',
    description: 'A frantic young voice claims to be your grandchild in jail and needs bail money fast.',
    callerLabel: 'Unknown caller — voice sounds young and upset',
    tactics: [
      'Uses panic so you skip verification',
      'Asks you not to tell anyone',
      'Pushes for untraceable payment (gift cards, wire, money app)',
    ],
    wantsFromYou: 'Cash, gift cards, or a wire transfer — sent before you can verify.',
    startNodeId: 'gk-1',
    nodes: {
      'gk-1': {
        id: 'gk-1',
        caller: {
          line: "Grandma? It's me. Please don't tell Mom. I'm in jail and I need bail money. I only get one phone call.",
          tone: 'Young voice, crying, breathless',
        },
        options: [
          {
            label: 'Oh honey, what happened? Are you hurt?',
            score: -1,
            nextId: 'gk-2a',
            coaching: 'Engaging with the emotion without verifying opens the door. The caller now knows you believe them and will push harder for money.',
          },
          {
            label: "What's your full name, and where are you calling from?",
            score: 1,
            nextId: 'gk-2b',
            coaching: 'Real grandchildren can answer this instantly. Scammers stumble. Asking for their name is a safe, low-key verify.',
          },
          {
            label: "I'm going to hang up and call your mother to check this out.",
            score: 1,
            nextId: 'gk-2c',
            coaching: 'Strongest move. A real family member will never punish you for verifying. A scammer will panic and pressure you to stay on the line.',
          },
          {
            label: 'Tell me where to send money right now — I can use Zelle.',
            score: -1,
            outcome: 'fail',
            coaching: 'This is exactly what the scammer wanted. Money sent by Zelle, wire, or gift card is almost never recoverable. Real emergencies can wait five minutes for a verification call.',
          },
        ],
      },
      'gk-2a': {
        id: 'gk-2a',
        caller: {
          line: "I got into a car accident. The other driver's really hurt. My lawyer says bail is $4,500 and I need gift cards — they're the only thing the bail bondsman will take today.",
          tone: 'Sobbing, voice getting tighter',
        },
        options: [
          {
            label: 'Which store? Walmart, Target?',
            score: -1,
            outcome: 'fail',
            coaching: 'No real court, jail, or bail bondsman accepts gift cards. Ever. The moment "gift card" enters the conversation, you are talking to a scammer.',
          },
          {
            label: "Hold on — I need to call your parents before I do anything.",
            score: 1,
            nextId: 'gk-3a',
            coaching: 'Good save. You caught the pressure tactic and stepped back. Notice how the caller will now try to stop you from hanging up.',
          },
          {
            label: "Put your lawyer on — I want to hear this from them.",
            score: 0,
            nextId: 'gk-3b',
            coaching: 'Better than handing over card numbers, but scammers often have a second person ready to play the lawyer. Hanging up is still the safest move.',
          },
        ],
      },
      'gk-2b': {
        id: 'gk-2b',
        caller: {
          line: "Uh… Grandma, it's me, Tommy! Don't you recognize my voice? Please, the guards are only giving me a minute.",
          tone: 'Stumbling, tries to turn it back on you',
        },
        options: [
          {
            label: 'Tommy, is that really you? You sound different.',
            score: -1,
            nextId: 'gk-3c',
            coaching: 'Never name the "grandchild" for them. The scammer will grab whatever name you say and run with it. If the caller cannot name themselves, it is not a real family member.',
          },
          {
            label: "I'm hanging up and calling Tommy's real number right now.",
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. You refused to feed the scammer the name, and you went straight to a verified number. Most scammers give up the second you say you will call back.',
          },
          {
            label: 'What is the family code word?',
            score: 1,
            outcome: 'success',
            coaching: 'Beautiful. A family code word is a quiet, nearly foolproof check. If the caller cannot say it, hang up with no guilt.',
          },
        ],
      },
      'gk-2c': {
        id: 'gk-2c',
        caller: {
          line: "No Grandma, please! If you call Mom I'll get in even more trouble. Just stay on the line with me — they only gave me this one call.",
          tone: 'Pleading, pressure rising',
        },
        options: [
          {
            label: 'All right, I won\'t call — tell me what you need.',
            score: -1,
            outcome: 'fail',
            coaching: 'The "don\'t tell anyone" line is the whole scam in one sentence. Real police and real lawyers never ask you to hide an emergency from family.',
          },
          {
            label: 'I love you no matter what — I\'m still calling your mother. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'This is exactly right. Firm, kind, and gone. A scammer cannot work on you if you are not on the line. Call your real family on a saved number.',
          },
          {
            label: 'Give me the lawyer\'s direct number and I\'ll call them back.',
            score: 1,
            nextId: 'gk-3d',
            coaching: 'Solid. Asking to call back from a number you choose puts the control back in your hands. Real institutions are fine with this — scammers are not.',
          },
        ],
      },
      'gk-3a': {
        id: 'gk-3a',
        caller: {
          line: "Grandma NO! If you call them everything falls apart, the deal is only good if you send it now. You\'re the only one who can help me!",
          tone: 'Yelling, trying to freeze you',
        },
        options: [
          {
            label: 'I love you — I\'m hanging up and calling your parents.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Love does not mean obey. Hang up and verify. Your family will thank you.',
          },
          {
            label: 'Okay, tell me how much you need — I\'ll figure it out.',
            score: -1,
            outcome: 'fail',
            coaching: 'Cave-in moment. The scammer used volume and panic to push you past your own instincts. Practice saying "I am hanging up" out loud so it is easy when the real call comes.',
          },
        ],
      },
      'gk-3b': {
        id: 'gk-3b',
        caller: {
          line: "[New voice] Ma'am, this is Attorney Richard Miller. We have 45 minutes before your grandson is transferred. I need a retainer today by prepaid card.",
          tone: 'Calm, authoritative, pushing deadline',
        },
        options: [
          {
            label: 'I\'ll call the courthouse directly — what case number?',
            score: 1,
            outcome: 'success',
            coaching: 'Strong. Real attorneys welcome verification. Courthouses are public and easy to reach. A fake attorney will get off the phone fast.',
          },
          {
            label: 'Prepaid cards? I\'ll go to CVS right now.',
            score: -1,
            outcome: 'fail',
            coaching: 'No attorney in the country asks for a retainer in prepaid cards. That sentence alone is proof you are being scammed.',
          },
        ],
      },
      'gk-3c': {
        id: 'gk-3c',
        caller: {
          line: "Yes Grandma, it\'s Tommy — I\'m just so upset, my voice is shaky. Please hurry, I need $4,500 in Apple gift cards today.",
          tone: 'Latches onto the name',
        },
        options: [
          {
            label: 'I\'m hanging up and calling the Tommy I know.',
            score: 1,
            outcome: 'success',
            coaching: 'Great recovery. You can always step back, even after a slip. Hanging up is always an option.',
          },
          {
            label: 'Which store — Apple Store or Target?',
            score: -1,
            outcome: 'fail',
            coaching: 'Gift cards for bail are never real. The moment you buy them and read the codes, the money is gone for good.',
          },
        ],
      },
      'gk-3d': {
        id: 'gk-3d',
        caller: {
          line: "The lawyer is in a meeting — you can\'t reach them directly. But I\'m authorized to take payment on their behalf. Give me your card number.",
          tone: 'Trying to route the money through themselves',
        },
        options: [
          {
            label: 'Then I\'ll wait to speak with the lawyer directly. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Nailed it. Anyone who is not the person you asked for, routing your money, is the scam. Hang up.',
          },
          {
            label: 'My card number is…',
            score: -1,
            outcome: 'fail',
            coaching: 'Never read a card number over the phone to a caller you did not dial. Your card will be drained within minutes.',
          },
        ],
      },
    },
  },

  /* 2. IRS back taxes */
  {
    id: 'irs',
    shortTitle: 'IRS back taxes',
    title: '"This is the IRS — you owe back taxes"',
    description: 'A stern caller claiming to be an IRS agent threatens arrest unless you pay immediately.',
    callerLabel: 'Unknown caller — claims IRS',
    tactics: [
      'Fear of arrest or property seizure',
      'Demands payment in gift cards or wire',
      'Leaves a thick-sounding "case number"',
    ],
    wantsFromYou: 'A same-day payment, usually in gift cards, before you can call anyone.',
    startNodeId: 'irs-1',
    nodes: {
      'irs-1': {
        id: 'irs-1',
        caller: {
          line: "This is Agent Morris with the IRS Criminal Investigation Division, badge 47921. You owe $6,300 in back taxes. There is a warrant for your arrest. Stay on this line and I can stop the officers from being sent to your home.",
          tone: 'Stern, fast, reading from a script',
        },
        options: [
          {
            label: 'Oh my goodness — what do I need to do?',
            score: -1,
            nextId: 'irs-2a',
            coaching: 'You gave away that you are scared. The scammer now has their hook in. Real agents give you time and send mail first.',
          },
          {
            label: 'Send me the notice in the mail and I will respond.',
            score: 1,
            nextId: 'irs-2b',
            coaching: 'Perfect. The real IRS contacts you by physical mail before any phone call. Saying this out loud often ends the scam.',
          },
          {
            label: 'Hang up and call IRS at 1-800-829-1040 yourself.',
            score: 1,
            outcome: 'success',
            coaching: 'Textbook move. The official IRS number is easy to find. Calling them from your side means you know you are not talking to a scammer.',
          },
        ],
      },
      'irs-2a': {
        id: 'irs-2a',
        caller: {
          line: "You must pay today. We only accept Apple gift cards, Target gift cards, or a wire transfer. Do not tell anyone — if your bank asks, say it is a gift for a family member.",
          tone: 'Pressing for action',
        },
        options: [
          {
            label: 'The IRS doesn\'t take gift cards. I\'m hanging up.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly right. No government agency accepts gift cards. The IRS only takes checks, bank transfers through IRS.gov, or IRS-approved payment apps.',
          },
          {
            label: 'I\'ll go to Target now — stay on the phone.',
            score: -1,
            outcome: 'fail',
            coaching: 'The scammer will keep you on the line so you cannot stop to think. Hang up. No real agent does this.',
          },
          {
            label: 'Let me call my accountant first.',
            score: 1,
            outcome: 'success',
            coaching: 'Good. Any real tax problem is handled better with someone you trust. Hanging up to call anyone is allowed, always.',
          },
        ],
      },
      'irs-2b': {
        id: 'irs-2b',
        caller: {
          line: "There is no time for mail — officers are in your area now. If you hang up you will be arrested within the hour.",
          tone: 'Doubling down on fear',
        },
        options: [
          {
            label: 'Then I will speak with the officers when they arrive. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Calm and correct. Real officers hand you a paper notice. Nobody is coming. The threat is the whole scam.',
          },
          {
            label: 'Please, can I settle it with a gift card instead?',
            score: -1,
            outcome: 'fail',
            coaching: 'Fear got the better of you. Remember: no arrest warrant is ever resolved by calling a stranger back and reading gift card numbers.',
          },
        ],
      },
    },
  },

  /* 3. Social Security suspended */
  {
    id: 'ssa',
    shortTitle: 'Social Security suspended',
    title: '"Your Social Security number has been suspended"',
    description: 'A robotic voice claims your SSN is suspended due to suspicious activity at the border.',
    callerLabel: 'Unknown caller — robotic voice',
    tactics: [
      'Fake "suspicious activity" story',
      'Transfers you to a live "agent"',
      'Asks you to confirm your full SSN',
    ],
    wantsFromYou: 'Your full Social Security number, date of birth, and often a "safety deposit" of gift cards.',
    startNodeId: 'ssa-1',
    nodes: {
      'ssa-1': {
        id: 'ssa-1',
        caller: {
          line: "This is the Social Security Administration. Your Social Security number has been suspended due to suspicious activity at the southern border. Press 1 to speak with an officer.",
          tone: 'Robot voice, threatening',
        },
        options: [
          {
            label: 'Press 1 to speak to an officer.',
            score: -1,
            nextId: 'ssa-2a',
            coaching: 'Pressing 1 gets you to a real live scammer. Social Security numbers cannot be "suspended" — that is not a real thing.',
          },
          {
            label: 'Hang up. Call SSA yourself at 1-800-772-1213.',
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. The real SSA will never call you out of the blue with a recording like this.',
          },
          {
            label: 'Press 2 to opt out.',
            score: 0,
            outcome: 'mid',
            coaching: 'Pressing any button tells the scammer your number is active and a live person may pick up. Safer to hang up without responding.',
          },
        ],
      },
      'ssa-2a': {
        id: 'ssa-2a',
        caller: {
          line: "This is Officer Daniel Reed. To reactivate your SSN, please confirm your full Social Security number and your date of birth.",
          tone: 'Calm, sounds official',
        },
        options: [
          {
            label: 'My Social Security number is…',
            score: -1,
            outcome: 'fail',
            coaching: 'Never read your full SSN to an inbound caller. That number plus your date of birth is enough for identity theft and fake tax returns.',
          },
          {
            label: 'I do not give my SSN over the phone. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Scammers cannot scam you if they cannot get your number. Hang up without apologizing.',
          },
        ],
      },
    },
  },

  /* 4. Microsoft Support */
  {
    id: 'microsoft',
    shortTitle: 'Fake Microsoft Support',
    title: '"Microsoft Support — your computer is infected"',
    description: 'A caller with a strong accent insists your Windows computer is infected and offers to fix it.',
    callerLabel: 'Unknown caller — claims Microsoft',
    tactics: [
      'Creates fake alarm about your computer',
      'Asks you to install remote-control software',
      'Charges you for a fake cleanup',
    ],
    wantsFromYou: 'Remote access to your computer, your passwords, and a credit card for "tech support fees."',
    startNodeId: 'ms-1',
    nodes: {
      'ms-1': {
        id: 'ms-1',
        caller: {
          line: "Hello, this is Brian from Microsoft Support. Your Windows computer is sending us error messages. There is a dangerous virus — I can remove it if you turn on your computer right now.",
          tone: 'Friendly but urgent',
        },
        options: [
          {
            label: 'Oh no, let me go turn it on.',
            score: -1,
            nextId: 'ms-2a',
            coaching: 'Microsoft never calls customers about viruses. The moment you believe this setup, the scammer is halfway into your computer.',
          },
          {
            label: 'Microsoft doesn\'t call people. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Spot-on. Microsoft, Apple, and Google never cold-call customers about infections.',
          },
          {
            label: 'How do you know my computer is infected?',
            score: 0,
            nextId: 'ms-2b',
            coaching: 'Reasonable question, but engaging gives the scammer time to refine their pitch. Hanging up is still better.',
          },
        ],
      },
      'ms-2a': {
        id: 'ms-2a',
        caller: {
          line: "Good, good. Please go to AnyDesk.com and install it so I can connect and fix your computer.",
          tone: 'Relaxed, sounds helpful',
        },
        options: [
          {
            label: 'I\'m downloading AnyDesk now.',
            score: -1,
            outcome: 'fail',
            coaching: 'Installing remote-control software gives the scammer full access to your files, email, and bank. Uninstall immediately, change passwords, and call your bank.',
          },
          {
            label: 'I don\'t install software for callers. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Never install anything because a stranger told you to. Real tech support does not need remote access cold-called.',
          },
        ],
      },
      'ms-2b': {
        id: 'ms-2b',
        caller: {
          line: "We detected a Windows security code coming from your IP address. I can only help you if you give me remote access.",
          tone: 'Escalating with jargon',
        },
        options: [
          {
            label: 'That doesn\'t sound right — I\'m hanging up.',
            score: 1,
            outcome: 'success',
            coaching: 'Trust that feeling. The phrase "security code from your IP" is made-up word salad.',
          },
          {
            label: 'Fine, walk me through it.',
            score: -1,
            outcome: 'fail',
            coaching: 'That was the trap. Any step the scammer talks you through next leads to remote access or bank transfer.',
          },
        ],
      },
    },
  },

  /* 5. Sweepstakes */
  {
    id: 'sweepstakes',
    shortTitle: 'Sweepstakes winner',
    title: '"You won the sweepstakes — pay the processing fee"',
    description: 'A cheerful caller says you won a prize and only need to pay a small fee before it can be released.',
    callerLabel: 'Unknown caller — excited, friendly',
    tactics: [
      'Congratulates you to lower your guard',
      'Asks for "processing fees" or taxes up-front',
      'May ask for your bank account for "deposit"',
    ],
    wantsFromYou: 'Up-front money for fake fees, and your bank account number.',
    startNodeId: 'sw-1',
    nodes: {
      'sw-1': {
        id: 'sw-1',
        caller: {
          line: "Congratulations! You won $50,000 in the Publishers Sweepstakes. To release your prize we just need you to cover the $499 processing fee.",
          tone: 'Cheerful, fast-talking',
        },
        options: [
          {
            label: 'How exciting! How do I pay the fee?',
            score: -1,
            nextId: 'sw-2a',
            coaching: 'Real sweepstakes never charge you to collect a prize. Ever. That is the whole law around legitimate sweepstakes.',
          },
          {
            label: 'Real sweepstakes don\'t charge fees. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Remember: if they ask for money first, it is not a prize, it is a scam.',
          },
          {
            label: 'I never entered a sweepstakes.',
            score: 1,
            nextId: 'sw-2b',
            coaching: 'Good observation. If you did not enter, you cannot win. Stay firm.',
          },
        ],
      },
      'sw-2a': {
        id: 'sw-2a',
        caller: {
          line: "Wonderful. You can wire it to our release department, or purchase Visa gift cards and read me the numbers.",
          tone: 'Pushing for untraceable payment',
        },
        options: [
          {
            label: 'Gift cards for prize fees? No. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. The second a "winner" is asked for gift cards or a wire, the conversation is a scam.',
          },
          {
            label: 'Okay, I\'ll get gift cards.',
            score: -1,
            outcome: 'fail',
            coaching: 'That money will vanish the moment you read the codes. Legitimate prizes are deducted at the IRS level, never paid up-front.',
          },
        ],
      },
      'sw-2b': {
        id: 'sw-2b',
        caller: {
          line: "Your name was automatically entered through a partner store. Now let\'s get your bank account so we can wire the prize.",
          tone: 'Glossing over the question',
        },
        options: [
          {
            label: 'I\'m not sharing my bank info. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Never share your bank info with an inbound caller. A real payer sends a check or uses a deposit you set up from your side.',
          },
          {
            label: 'My checking account is…',
            score: -1,
            outcome: 'fail',
            coaching: 'Your bank number plus routing number can be used to pull money or write fake checks. Never share these on an unsolicited call.',
          },
        ],
      },
    },
  },

  /* 6. Medicare expired */
  {
    id: 'medicare',
    shortTitle: 'Medicare card expired',
    title: '"Your Medicare number has expired"',
    description: 'A caller says your Medicare card is expiring and you need to confirm your number to keep coverage.',
    callerLabel: 'Unknown caller — claims Medicare',
    tactics: [
      'Plays on fear of losing coverage',
      'Asks you to "confirm" your Medicare number',
      'May offer a free brace, test kit, or knee scooter',
    ],
    wantsFromYou: 'Your Medicare number, which is used to bill fraudulent claims.',
    startNodeId: 'med-1',
    nodes: {
      'med-1': {
        id: 'med-1',
        caller: {
          line: "Hello, this is Karen with Medicare Services. Your Medicare card is expiring — we need you to confirm your number to send the new one.",
          tone: 'Polite, bureaucratic',
        },
        options: [
          {
            label: 'Let me get my card.',
            score: -1,
            nextId: 'med-2a',
            coaching: 'Medicare never calls to ask for your number. They already have it. This is a classic fraud setup.',
          },
          {
            label: 'Medicare never calls asking for my number. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly right. The real Medicare contacts you by mail. If you are worried, call 1-800-MEDICARE (1-800-633-4227).',
          },
          {
            label: 'What\'s my number on file with you?',
            score: 1,
            nextId: 'med-2b',
            coaching: 'Clever. A real agency can tell you. A scammer will dodge the question.',
          },
        ],
      },
      'med-2a': {
        id: 'med-2a',
        caller: {
          line: "Perfect. Please read me the 11-character number on the front of your card.",
          tone: 'Waiting',
        },
        options: [
          {
            label: 'My number is 1EG4…',
            score: -1,
            outcome: 'fail',
            coaching: 'That number is now worth hundreds to a scam biller who will submit fake claims against your coverage. Call 1-800-MEDICARE to report and protect your account.',
          },
          {
            label: 'On second thought, I don\'t want to share it. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'It is always okay to change your mind mid-call. Hanging up is always an option.',
          },
        ],
      },
      'med-2b': {
        id: 'med-2b',
        caller: {
          line: "I\'m not allowed to disclose that — just confirm it for me.",
          tone: 'Dodging',
        },
        options: [
          {
            label: 'That\'s backwards. I\'ll call Medicare directly.',
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. The real agency will verify your identity — they never ask you to recite your number to a caller you did not dial.',
          },
          {
            label: 'All right, my number is…',
            score: -1,
            outcome: 'fail',
            coaching: 'Saying the number out loud is all they needed. Report the loss at 1-800-MEDICARE right away.',
          },
        ],
      },
    },
  },

  /* 7. Carrier fraud department */
  {
    id: 'carrier',
    shortTitle: 'Fake carrier fraud dept',
    title: '"This is [your carrier] Fraud Department"',
    description: 'A caller claims to be from Verizon, AT&T, or T-Mobile fraud and wants to verify a charge.',
    callerLabel: 'Unknown caller — claims Verizon/AT&T/T-Mobile Fraud',
    tactics: [
      'Reads back real info (easy to buy online)',
      'Asks for the one-time code sent to your phone',
      'Sets up a SIM swap to take over your number',
    ],
    wantsFromYou: 'The 6-digit verification code sent to your phone — enough to take over your SIM.',
    startNodeId: 'car-1',
    nodes: {
      'car-1': {
        id: 'car-1',
        caller: {
          line: "This is the Verizon Fraud Department. We see a $1,200 iPhone was just ordered on your account in Miami. Was that you?",
          tone: 'Calm, official-sounding',
        },
        options: [
          {
            label: 'No — that\'s not me! What do I do?',
            score: -1,
            nextId: 'car-2a',
            coaching: 'Panic is the scammer\'s fuel. The real answer is to hang up and call the number on the back of your bill.',
          },
          {
            label: 'Let me call Verizon from the number on my bill.',
            score: 1,
            outcome: 'success',
            coaching: 'Strongest move. If the charge is real, the real Verizon can confirm. If it is fake, you stopped a SIM swap before it started.',
          },
          {
            label: 'How did you get my number?',
            score: 0,
            nextId: 'car-2b',
            coaching: 'Good question, but bear in mind your phone number and carrier are easy to buy online. The question alone does not scare them off.',
          },
        ],
      },
      'car-2a': {
        id: 'car-2a',
        caller: {
          line: "I just sent you a 6-digit verification code. Read it back so I can cancel the fake order.",
          tone: 'Urgent, helpful',
        },
        options: [
          {
            label: 'The code is 394821.',
            score: -1,
            outcome: 'fail',
            coaching: 'That code let the scammer move your phone number to their SIM card — a SIM swap. They now get your texts, codes, and soon your bank access. Call your carrier immediately and ask to lock the account.',
          },
          {
            label: 'I never read codes to callers. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. Real carriers never ask you to read a code back. That single sentence is one of the strongest defenses in all of safety.',
          },
        ],
      },
      'car-2b': {
        id: 'car-2b',
        caller: {
          line: "Your number came up in our fraud monitoring. To verify you, please read me the code I just sent.",
          tone: 'Getting to the ask',
        },
        options: [
          {
            label: 'I don\'t share codes. Calling you back at the number on my bill.',
            score: 1,
            outcome: 'success',
            coaching: 'Exactly. Any request to read a code over the phone is a red alert. Hang up.',
          },
          {
            label: 'All right, the code is…',
            score: -1,
            outcome: 'fail',
            coaching: 'Handing over the code was the whole scam. Lock your carrier account with a PIN right away.',
          },
        ],
      },
    },
  },

  /* 8. Romance scam */
  {
    id: 'romance',
    shortTitle: 'Romance prospect',
    title: '"The person from your online profile is calling"',
    description: 'Someone you met on a dating or social app calls for the first time — and quickly brings up a money problem.',
    callerLabel: 'New online connection — very warm',
    tactics: [
      'Builds trust quickly',
      'Creates a sudden personal crisis',
      'Asks for money you can "send back" later',
    ],
    wantsFromYou: 'Money by wire or gift card — framed as a short-term loan between two people who care.',
    startNodeId: 'rom-1',
    nodes: {
      'rom-1': {
        id: 'rom-1',
        caller: {
          line: "Hi sweetheart, it\'s finally so good to hear your voice. Listen, I hate to ask — my daughter is sick and I can\'t get to my bank overseas. Could you send $800 and I\'ll pay you back next week?",
          tone: 'Warm, tender, then urgent',
        },
        options: [
          {
            label: 'Of course — where do I send it?',
            score: -1,
            nextId: 'rom-2a',
            coaching: 'This is the heart of a romance scam. Once money moves once, the stories will keep coming.',
          },
          {
            label: 'Let\'s video chat face-to-face first.',
            score: 1,
            nextId: 'rom-2b',
            coaching: 'A real person will meet you on video. Scammers will find endless reasons not to.',
          },
          {
            label: 'I never send money to people I haven\'t met in person. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Firm and kind. This single rule protects you from every romance scam, no exceptions.',
          },
        ],
      },
      'rom-2a': {
        id: 'rom-2a',
        caller: {
          line: "Wire it through Western Union or send Apple gift cards. I\'ll pay you back double — I\'m so relieved.",
          tone: 'Emotional, locking it in',
        },
        options: [
          {
            label: 'I\'ll wire it now.',
            score: -1,
            outcome: 'fail',
            coaching: 'Money wired for a first-time online love is almost never recovered. If you already sent it, stop future transfers and report to reportfraud.ftc.gov.',
          },
          {
            label: 'I changed my mind. I don\'t send money online. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Always okay to back out. The scammer may get angry — that alone confirms what they were after.',
          },
        ],
      },
      'rom-2b': {
        id: 'rom-2b',
        caller: {
          line: "My camera is broken and I\'m in a country with bad internet. Please, just this one time — I\'ll explain everything when I\'m home.",
          tone: 'Deflecting the camera request',
        },
        options: [
          {
            label: 'Then I\'ll wait until we can meet. Goodbye.',
            score: 1,
            outcome: 'success',
            coaching: 'Perfect. Healthy relationships survive waiting. Scams do not.',
          },
          {
            label: 'Okay, how much do you need?',
            score: -1,
            outcome: 'fail',
            coaching: 'Falling for the "I\'ll make it up later" promise is the most common romance scam ending. The stories will keep coming.',
          },
        ],
      },
    },
  },
];

/* ─────────────────────── Red phrases & tips ─────────────────────────── */

const redPhrases = [
  "Don\'t tell anyone else about this call.",
  "Act now or your account/benefits/warranty will be canceled.",
  "Pay with gift cards.",
  "Wire the money.",
  "This is not a scam, I promise.",
  "I\'m legally required to tell you this.",
  "Your grandson/daughter said not to call you.",
  "Read me the 6-digit code I just sent.",
  "Stay on this line, do not hang up.",
  "You won — just pay the processing fee.",
];

const legitVsScam = [
  'Government agencies never cold-call asking for money. They send paper letters first.',
  'Banks never ask for your password, PIN, or full card number on the phone.',
  'Tech support from Microsoft, Apple, or Google never calls you first.',
  'Real utility companies never demand gift cards — ever.',
  'The real Medicare never calls asking for your Medicare number. They already have it.',
  'A real police officer arrests you in person, not by phone or gift card.',
];

const afterCallActions = [
  {
    title: 'Block the number on iPhone',
    detail: "Open Phone → Recents → tap the info (i) icon next to the number → scroll to the bottom → tap Block this Caller.",
  },
  {
    title: 'Block the number on Android',
    detail: "Open Phone → Recents → long-press the number → Block / Report spam.",
  },
  {
    title: 'Silence Unknown Callers (iPhone)',
    detail: "Settings → Apps → Phone → Silence Unknown Callers. Real callers can leave voicemail; robocalls go quiet.",
  },
  {
    title: 'Call Screen (Android)',
    detail: "Phone app → Settings → Spam and Call Screen → turn on automatic screening.",
  },
  {
    title: 'Report fraud to the FTC',
    detail: "Go to reportfraud.ftc.gov and fill out the plain-English form. Takes about 5 minutes.",
  },
  {
    title: 'Add your number to Do Not Call',
    detail: "Register at donotcall.gov. It doesn\'t stop scammers, but it cuts out legitimate telemarketers so you can tell the difference.",
  },
];

/* ───────────────────────── Component ────────────────────────────────── */

const STORAGE_KEY = 'teksure:call-sim-attempts';

export default function SuspiciousCallSim() {
  /** Current selected scenario and active node within its branch tree. */
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ResponseOption | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [voiceOn, setVoiceOn] = useState(false);
  const [history, setHistory] = useState<Attempt[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  /* Load prior attempts from localStorage on mount. */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Attempt[];
        if (Array.isArray(parsed)) setHistory(parsed);
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  /* Persist a new attempt when the user reaches an outcome. */
  const recordAttempt = (attempt: Attempt) => {
    setHistory((prev) => {
      const next = [attempt, ...prev].slice(0, 25);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore write failures */
      }
      return next;
    });
  };

  const activeScenario = useMemo(
    () => scenarios.find((s) => s.id === activeScenarioId) ?? null,
    [activeScenarioId]
  );

  const activeNode = useMemo(() => {
    if (!activeScenario || !activeNodeId) return null;
    return activeScenario.nodes[activeNodeId] ?? null;
  }, [activeScenario, activeNodeId]);

  /* Speak the caller's current line. Quietly does nothing if the browser
     has no SpeechSynthesis — no error, no user-visible warning. */
  useEffect(() => {
    if (!voiceOn || !activeNode || typeof window === 'undefined') return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    try {
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(activeNode.caller.line);
      utter.rate = 1;
      utter.pitch = 1;
      synth.speak(utter);
    } catch {
      /* ignore */
    }
    return () => {
      try {
        synth.cancel();
      } catch {
        /* ignore */
      }
    };
  }, [activeNode, voiceOn]);

  const stopVoice = () => {
    if (typeof window === 'undefined') return;
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* ignore */
    }
  };

  const startScenario = (id: string) => {
    const s = scenarios.find((x) => x.id === id);
    if (!s) return;
    stopVoice();
    setActiveScenarioId(id);
    setActiveNodeId(s.startNodeId);
    setScore(0);
    setSelectedOption(null);
    setOutcome(null);
  };

  const resetAll = () => {
    stopVoice();
    setActiveScenarioId(null);
    setActiveNodeId(null);
    setScore(0);
    setSelectedOption(null);
    setOutcome(null);
  };

  const pickOption = (opt: ResponseOption) => {
    setSelectedOption(opt);
    setScore((prev) => prev + opt.score);
    if (opt.outcome) {
      setOutcome(opt.outcome);
      if (activeScenario) {
        recordAttempt({
          scenarioId: activeScenario.id,
          scenarioTitle: activeScenario.shortTitle,
          score: score + opt.score,
          outcome: opt.outcome,
          dateISO: new Date().toISOString(),
        });
      }
    }
  };

  const advance = () => {
    if (!selectedOption) return;
    if (selectedOption.outcome) return; // outcome screen already handled
    if (selectedOption.nextId) {
      setActiveNodeId(selectedOption.nextId);
      setSelectedOption(null);
    }
  };

  const restartScenario = () => {
    if (!activeScenario) return;
    startScenario(activeScenario.id);
  };

  /* ────────── Outcome rendering helpers ────────── */

  const outcomeCopy = (o: Outcome): OutcomeCopy => {
    switch (o) {
      case 'success':
        return {
          badge: 'Safe — call ended',
          icon: CheckCircle2,
          color: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-50 dark:bg-emerald-950/40',
          border: 'border-emerald-200 dark:border-emerald-800',
          title: 'You stayed in control.',
          description: 'The caller either hung up or gave up. No money, no codes, no personal info went across the line. That is exactly how this should feel in real life.',
        };
      case 'mid':
        return {
          badge: 'Mixed — caller stayed on you',
          icon: AlertTriangle,
          color: 'text-amber-700 dark:text-amber-400',
          bg: 'bg-amber-50 dark:bg-amber-950/40',
          border: 'border-amber-200 dark:border-amber-800',
          title: 'You did not lose money, but the caller kept pressing.',
          description: 'Small engagement signals to a scammer that you might still be reachable. Practicing a firm hang-up protects you the next time a call like this comes in.',
        };
      case 'fail':
        return {
          badge: 'Info or money at risk',
          icon: XCircle,
          color: 'text-red-600 dark:text-red-400',
          bg: 'bg-red-50 dark:bg-red-950/40',
          border: 'border-red-200 dark:border-red-800',
          title: 'In a real call, this path would cost you.',
          description: 'This is exactly why we practice. No harm here — but if this happens for real, call your bank or carrier, change passwords, and report at reportfraud.ftc.gov.',
        };
    }
  };

  /* ────────────── Render ────────────── */

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Suspicious Call Simulator | TekSure"
        description="Practice handling suspicious phone calls — grandkid scams, IRS threats, fake Microsoft support, romance scams, and more. Safe, interactive branching practice for seniors and non-technical callers."
      />
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-5xl">
        <PageBreadcrumb items={[{ label: 'Practice' }, { label: 'Suspicious Call Simulator' }]} />

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-red-200 dark:border-red-900 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white p-8 md:p-12 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-2 text-sm font-semibold mb-5">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Practice Mode — no real scammer on the line
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Suspicious Call Simulator
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Practice hanging up. Practice saying the right things. No real scammer on the line.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-white text-red-700 hover:bg-white/90 text-sm px-3 py-1.5">
                  8 real scenarios
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm px-3 py-1.5 border border-white/30">
                  Branching choices
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm px-3 py-1.5 border border-white/30">
                  Read-aloud option
                </Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <BookmarkButton
                type="tool"
                slug="practice/suspicious-call"
                title="Suspicious Call Simulator"
                url="/practice/suspicious-call"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              />
              <Button
                variant="outline"
                onClick={() => setShowHistory(true)}
                className="bg-white/15 border-white/30 text-white hover:bg-white/25 min-h-14 text-base"
              >
                <History className="h-5 w-5 mr-2" aria-hidden="true" />
                My practice history
              </Button>
            </div>
          </div>
        </div>

        {/* Voice toggle + freeze-and-verify always-visible strip */}
        <div className="grid md:grid-cols-5 gap-4 mb-10">
          <Card className="md:col-span-2 border-slate-200 dark:border-slate-800">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center">
                {voiceOn ? (
                  <Volume2 className="h-6 w-6 text-sky-700 dark:text-sky-300" aria-hidden="true" />
                ) : (
                  <VolumeX className="h-6 w-6 text-sky-700 dark:text-sky-300" aria-hidden="true" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold mb-1">Try it with audio</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Lets your browser read the caller’s lines out loud so you can hear the pressure in a scam call. You can turn it off any time.
                </p>
                <Button
                  onClick={() => {
                    if (voiceOn) stopVoice();
                    setVoiceOn((v) => !v);
                  }}
                  variant={voiceOn ? 'default' : 'outline'}
                  className="min-h-12 text-base"
                  aria-pressed={voiceOn}
                >
                  <Mic className="h-4 w-4 mr-2" aria-hidden="true" />
                  {voiceOn ? 'Audio is on — tap to turn off' : 'Turn audio on'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/40">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-700 dark:text-blue-300" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-blue-900 dark:text-blue-100 mb-2">Freeze and verify — the 4-step rule</p>
                <ol className="space-y-1.5 text-base text-blue-900 dark:text-blue-100 leading-relaxed">
                  <li><span className="font-semibold">1.</span> Say you’ll call back.</li>
                  <li><span className="font-semibold">2.</span> Hang up.</li>
                  <li><span className="font-semibold">3.</span> Look up the real number yourself.</li>
                  <li><span className="font-semibold">4.</span> Call that number and verify.</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ─── Active call UI OR scenario picker ─── */}
        {!activeScenario ? (
          <section aria-labelledby="pick-scenario-heading">
            <h2 id="pick-scenario-heading" className="text-2xl md:text-3xl font-bold mb-2">
              Pick a scenario to practice
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
              Each scenario is based on a real scam script. Nothing here costs money or reveals your information — you’re rehearsing for the day an actual call lands.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scenarios.map((s, idx) => (
                <Card
                  key={s.id}
                  className="border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700 hover:shadow-md transition-all"
                >
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-flex h-10 w-10 rounded-xl bg-red-100 dark:bg-red-950 items-center justify-center text-red-700 dark:text-red-300 font-bold">
                        {idx + 1}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {Object.keys(s.nodes).length} steps
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                      {s.description}
                    </p>
                    <Button
                      onClick={() => startScenario(s.id)}
                      className="w-full min-h-14 text-base bg-red-600 hover:bg-red-700 text-white"
                    >
                      Start this call
                      <ChevronRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : (
          <section aria-labelledby="call-in-progress-heading" className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 id="call-in-progress-heading" className="text-2xl md:text-3xl font-bold">
                {activeScenario.title}
              </h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 text-sm">
                  Score: {score >= 0 ? `+${score}` : score}
                </Badge>
                <Button variant="outline" onClick={resetAll} className="min-h-12 text-base">
                  <PhoneOff className="h-4 w-4 mr-2" aria-hidden="true" />
                  End call
                </Button>
              </div>
            </div>

            {/* Caller card */}
            {activeNode && !outcome && (
              <Card className="border-red-300 dark:border-red-800 bg-white dark:bg-slate-900 shadow-lg mb-6">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-4 flex items-center gap-4 rounded-t-xl">
                    <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                      {activeScenario.callerLabel.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wide text-white/80">Incoming call</p>
                      <p className="text-lg font-semibold truncate">{activeScenario.callerLabel}</p>
                      {activeNode.caller.tone && (
                        <p className="text-sm text-white/80 italic">{activeNode.caller.tone}</p>
                      )}
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                      <PhoneCall className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Caller says:
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-900 dark:text-slate-100">
                      “{activeNode.caller.line}”
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Response options OR coaching after selection */}
            {activeNode && !outcome && !selectedOption && (
              <div className="space-y-3 mb-6">
                <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  How would you respond?
                </p>
                {activeNode.options.map((opt, i) => (
                  <Button
                    key={i}
                    onClick={() => pickOption(opt)}
                    variant="outline"
                    className="w-full justify-start text-left min-h-14 text-base px-5 py-4 whitespace-normal h-auto hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-300 dark:hover:border-red-800"
                  >
                    <span className="font-semibold text-red-700 dark:text-red-400 mr-3 shrink-0">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="flex-1">{opt.label}</span>
                  </Button>
                ))}
              </div>
            )}

            {/* Coaching card when a non-terminal option is picked */}
            {selectedOption && !outcome && (
              <Card
                className={
                  selectedOption.score > 0
                    ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 mb-6'
                    : selectedOption.score < 0
                      ? 'border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 mb-6'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 mb-6'
                }
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {selectedOption.score > 0 ? (
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : selectedOption.score < 0 ? (
                      <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <Info className="h-6 w-6 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="flex-1">
                      <p className="text-base font-semibold mb-1">
                        {selectedOption.score > 0
                          ? 'Safe move.'
                          : selectedOption.score < 0
                            ? 'That fed the scam.'
                            : 'Neutral choice.'}
                      </p>
                      <p className="text-base leading-relaxed">{selectedOption.coaching}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button onClick={advance} className="min-h-12 text-base">
                      Continue
                      <ChevronRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Terminal outcome card */}
            {outcome && selectedOption && (
              <OutcomeCard
                outcome={outcome}
                scenario={activeScenario}
                score={score}
                selectedOption={selectedOption}
                onRestart={restartScenario}
                onHome={resetAll}
                copy={outcomeCopy(outcome)}
              />
            )}
          </section>
        )}

        {/* ─── Reference cards (always visible below) ─── */}
        <section className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="border-red-200 dark:border-red-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-red-100 dark:bg-red-950 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-700 dark:text-red-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">Red-phrase cheat sheet</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                If a caller says any of these, hang up — even if everything else sounded normal.
              </p>
              <ul className="space-y-2">
                {redPhrases.map((phrase) => (
                  <li key={phrase} className="flex items-start gap-2 text-base">
                    <span className="text-red-600 dark:text-red-400 font-bold shrink-0">•</span>
                    <span className="text-slate-800 dark:text-slate-200 leading-relaxed">“{phrase}”</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 dark:border-emerald-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">Legit vs. scam — quick call ID</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Real organizations behave very differently from scammers. These rules catch most calls.
              </p>
              <ul className="space-y-2">
                {legitVsScam.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-base">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-slate-800 dark:text-slate-200 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Voice cloning warning */}
        <Alert className="my-8 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
          <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          <AlertTitle className="text-base font-bold text-amber-900 dark:text-amber-100">
            AI voice cloning is real
          </AlertTitle>
          <AlertDescription className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
            A scammer only needs a few seconds of audio from a public video or voicemail to fake a family
            member’s voice. If a loved one sounds distressed and wants money, hang up and call them back on
            a number you already have saved.
          </AlertDescription>
        </Alert>

        {/* Family code word tip */}
        <Card className="mb-8 border-violet-200 dark:border-violet-900 bg-violet-50/60 dark:bg-violet-950/40">
          <CardContent className="p-6 md:flex md:items-start md:gap-5">
            <div className="h-12 w-12 rounded-xl bg-violet-100 dark:bg-violet-900 flex items-center justify-center shrink-0 mb-4 md:mb-0">
              <Users className="h-6 w-6 text-violet-700 dark:text-violet-300" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-violet-900 dark:text-violet-100">Pick a family code word</h2>
              <p className="text-base text-violet-900/90 dark:text-violet-100/90 leading-relaxed">
                Agree on a private word with your family — something silly is fine, nothing obvious. If someone
                calls claiming to be your grandchild in trouble, ask for the code word. No scammer will know it.
                Pick it the next time you see family in person and don’t write it on social media.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* After-call actions */}
        <Card className="mb-8 border-slate-200 dark:border-slate-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Ban className="h-5 w-5 text-slate-700 dark:text-slate-300" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold">After the call — block and report</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {afterCallActions.map((a) => (
                <div key={a.title} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                  <p className="text-base font-semibold mb-1 flex items-center gap-2">
                    <Flag className="h-4 w-4 text-slate-500" aria-hidden="true" />
                    {a.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-700 dark:text-blue-300" aria-hidden="true" />
            </div>
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold">Questions people ask</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                What if I already fell for one of these?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                You are not alone — these scams work because they target good, trusting people. If you sent
                money, call your bank right away and ask to reverse the transfer. If you shared a code or
                password, change it immediately. Report the call at reportfraud.ftc.gov. Our{' '}
                <Link to="/tools/refund-and-return-helper" className="text-blue-600 dark:text-blue-400 underline font-semibold">
                  Refund and Return Helper
                </Link>{' '}
                walks through which companies allow reversals and how to file the claim.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                Are these real scripts?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Yes — every scenario is paraphrased from real scam calls reported to the FTC, AARP, and law
                enforcement. Names and specific dollar amounts have been changed. The pressure tactics, the
                payment requests, and the emotional hooks are word-for-word what people heard on the line.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                How do I block numbers on my specific phone?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">iPhone:</span> Open the Phone app → Recents → tap the small (i)
                next to the number → scroll down → Block this Caller.{' '}
                <span className="font-semibold">Android (Samsung/Pixel):</span> Open the Phone app → Recents → long-press
                the number → Block / Report spam. You can also turn on Silence Unknown Callers (iPhone) or Call
                Screen (Pixel) so most scam calls never ring through.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                Is it rude to hang up on someone?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                No. If a caller pressures you, threatens you, or asks for money or codes, hanging up is the
                right answer. A real caller will not be offended if you ask to call them back at a number you
                verify. That single habit protects you from nearly every phone scam.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Link
            to="/tools/scam-simulator"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-5 py-3 text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Shield className="h-4 w-4" aria-hidden="true" />
            Try the Scam Practice Simulator (email & text)
          </Link>
          <Link
            to="/tools/scam-iq-test"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-5 py-3 text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Trophy className="h-4 w-4" aria-hidden="true" />
            Take the Scam IQ Test
          </Link>
          <Link
            to="/scam-defense"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-5 py-3 text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Shield className="h-4 w-4" aria-hidden="true" />
            Visit the Scam Defense Center
          </Link>
        </div>
      </main>

      {/* History dialog */}
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <History className="h-5 w-5" aria-hidden="true" />
              My practice history
            </DialogTitle>
            <DialogDescription className="text-base">
              The last 25 calls you’ve run through, stored only on this device.
            </DialogDescription>
          </DialogHeader>
          {history.length === 0 ? (
            <p className="text-base text-slate-600 dark:text-slate-400 py-4">
              No attempts yet. Pick a scenario above to start.
            </p>
          ) : (
            <ul className="divide-y divide-slate-200 dark:divide-slate-800 max-h-96 overflow-y-auto">
              {history.map((a, i) => (
                <li key={`${a.dateISO}-${i}`} className="py-3 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold truncate">{a.scenarioTitle}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(a.dateISO).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      {' • '}
                      Score {a.score >= 0 ? `+${a.score}` : a.score}
                    </p>
                  </div>
                  <Badge
                    className={
                      a.outcome === 'success'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
                        : a.outcome === 'mid'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200'
                    }
                  >
                    {a.outcome === 'success' ? 'Safe' : a.outcome === 'mid' ? 'Mixed' : 'Costly'}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}

/* ─────────────────── Outcome card (separated for clarity) ───────────── */

interface OutcomeCardProps {
  outcome: Outcome;
  scenario: Scenario;
  score: number;
  selectedOption: ResponseOption;
  onRestart: () => void;
  onHome: () => void;
  copy: OutcomeCopy;
}

function OutcomeCard({ outcome, scenario, score, selectedOption, onRestart, onHome, copy }: OutcomeCardProps) {
  const Icon = copy.icon;
  return (
    <Card className={`border-2 ${copy.border} ${copy.bg} shadow-lg`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="h-14 w-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shrink-0 shadow">
            <Icon className={`h-7 w-7 ${copy.color}`} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <Badge className={`${copy.color} bg-white dark:bg-slate-900 mb-2 text-sm`}>
              {copy.badge}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">{copy.title}</h3>
            <p className="text-base md:text-lg leading-relaxed">{copy.description}</p>
          </div>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 mb-5">
          <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-2">
            What happened
          </p>
          <p className="text-base leading-relaxed mb-4">{selectedOption.coaching}</p>
          <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-2">
            What the scammer wanted
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{scenario.wantsFromYou}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-5 text-center">
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-1">Final score</p>
            <p className="text-3xl font-bold">{score >= 0 ? `+${score}` : score}</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-1">Scenario</p>
            <p className="text-base font-semibold leading-snug">{scenario.shortTitle}</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-1">Result</p>
            <p className="text-base font-semibold leading-snug capitalize">{outcome === 'mid' ? 'Mixed' : outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={onRestart} className="min-h-14 text-base flex-1 sm:flex-none">
            <RotateCcw className="h-4 w-4 mr-2" aria-hidden="true" />
            Try this call again
          </Button>
          <Button onClick={onHome} variant="outline" className="min-h-14 text-base flex-1 sm:flex-none">
            <PhoneCall className="h-4 w-4 mr-2" aria-hidden="true" />
            Pick a different scenario
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
