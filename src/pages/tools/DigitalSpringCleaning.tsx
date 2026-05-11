import { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, Printer, Trophy, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Task {
  id: string;
  title: string;
  why: string;
  how: string;
  estTime: string;
}

interface Section {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tasks: Task[];
}

const SECTIONS: Section[] = [
  {
    id: 'updates',
    emoji: '🔄',
    title: 'Software Updates',
    description: 'Old software has security holes. Updates patch them — keeping you safe from hackers.',
    tasks: [
      {
        id: 'phone-update',
        title: 'Update phone software',
        why: 'Security patches and bug fixes',
        how: 'iPhone: Settings → General → Software Update. Android: Settings → System → System update.',
        estTime: '15 min',
      },
      {
        id: 'computer-update',
        title: 'Update computer software',
        why: 'Critical security patches',
        how: 'Windows: Settings → Windows Update → Check for updates. Mac: System Settings → General → Software Update.',
        estTime: '15-30 min',
      },
      {
        id: 'apps-update',
        title: 'Update all apps to latest versions',
        why: 'Get newest features and security fixes',
        how: 'iPhone App Store → tap your profile → scroll to see updates. Play Store → tap profile → Manage apps.',
        estTime: '5 min',
      },
    ],
  },
  {
    id: 'security',
    emoji: '🔒',
    title: 'Security Check',
    description: 'A few minutes here can prevent identity theft and account takeovers.',
    tasks: [
      {
        id: 'change-passwords',
        title: 'Change passwords for important accounts',
        why: 'Stops anyone with old leaked passwords',
        how: 'At minimum: email, online banking, primary social media. Use a unique password for each — a password manager helps.',
        estTime: '20 min',
      },
      {
        id: 'enable-2fa',
        title: 'Turn on 2-step verification (2FA) where missing',
        why: 'Stops hackers even if they have your password',
        how: 'Email, banking, Apple ID, Google account. Settings → Security → Two-Factor Authentication.',
        estTime: '10 min',
      },
      {
        id: 'check-credit',
        title: 'Get free credit report and check for errors',
        why: 'Catches identity theft early',
        how: 'AnnualCreditReport.com — request from each of the three bureaus. It is free and takes 10 minutes.',
        estTime: '15 min',
      },
      {
        id: 'review-permissions',
        title: 'Review which apps have access to your location, contacts, microphone',
        why: 'Apps you no longer use should not have these permissions',
        how: 'iPhone: Settings → Privacy & Security → Location/Contacts/Microphone. Android: Settings → Privacy → Permission manager.',
        estTime: '10 min',
      },
    ],
  },
  {
    id: 'declutter',
    emoji: '🗑️',
    title: 'Declutter',
    description: 'Less clutter on your phone and computer means faster performance and easier finding what you need.',
    tasks: [
      {
        id: 'remove-apps',
        title: 'Remove unused apps from phone',
        why: 'Frees up storage and reduces notifications',
        how: 'iPhone: long-press app → Remove App → Delete from Home Screen. Android: long-press app → Uninstall.',
        estTime: '10 min',
      },
      {
        id: 'clear-photos',
        title: 'Empty Photos trash and review duplicates',
        why: 'Free up significant storage',
        how: 'iPhone Photos app → Albums → Recently Deleted → Select All → Delete. Google Photos → Library → Trash → Empty trash.',
        estTime: '10 min',
      },
      {
        id: 'inbox-cleanup',
        title: 'Empty email trash and unsubscribe from junk',
        why: 'Cuts down inbox overwhelm',
        how: 'Open trash folder → Empty. For each newsletter you do not read, scroll to bottom → click Unsubscribe.',
        estTime: '20 min',
      },
      {
        id: 'browser-cache',
        title: 'Clear browser cache',
        why: 'Fixes slow or broken websites',
        how: 'Chrome: three dots → History → Clear browsing data. Safari: Settings → Safari → Clear History and Website Data.',
        estTime: '2 min',
      },
    ],
  },
  {
    id: 'subscriptions',
    emoji: '💳',
    title: 'Subscriptions Review',
    description: 'Most people pay for at least one subscription they no longer use. Catching them saves real money.',
    tasks: [
      {
        id: 'list-subs',
        title: 'List every subscription you pay for',
        why: 'You can\'t cancel what you don\'t know about',
        how: 'Look at last month\'s bank and credit card statements. Note every recurring charge. Common ones: Netflix, Apple, Amazon Prime, Spotify, gym, magazines, app subscriptions.',
        estTime: '20 min',
      },
      {
        id: 'cancel-unused',
        title: 'Cancel anything you have not used in 3 months',
        why: 'No reason to pay for unused services',
        how: 'iPhone: Settings → tap your name → Subscriptions. Android: Play Store → profile → Payments & subscriptions. For others, log into the company website and look for "Cancel" in account settings.',
        estTime: '15 min',
      },
      {
        id: 'check-trial',
        title: 'Check for forgotten free trials that have started charging',
        why: 'Free trials auto-renew unless you cancel',
        how: 'Look for any small recurring charge ($5-$20) you don\'t recognize on your statements.',
        estTime: '5 min',
      },
    ],
  },
  {
    id: 'backups',
    emoji: '💾',
    title: 'Backups',
    description: 'If your phone or computer broke today, would you lose photos or important documents? Make sure the answer is no.',
    tasks: [
      {
        id: 'phone-backup',
        title: 'Verify your phone is backing up',
        why: 'Photos, contacts, and texts are restored if phone is lost',
        how: 'iPhone: Settings → tap name → iCloud → iCloud Backup. Android: Settings → Google → Backup.',
        estTime: '5 min',
      },
      {
        id: 'photo-backup',
        title: 'Confirm photos are syncing to the cloud',
        why: 'Years of memories are protected',
        how: 'Open Google Photos or iCloud Photos and check the sync status icon. If it shows "waiting" or paused, plug in to Wi-Fi and let it run overnight.',
        estTime: '5 min',
      },
      {
        id: 'computer-backup',
        title: 'Back up important computer files',
        why: 'Tax records, photos, documents protected if hard drive fails',
        how: 'Windows: File History or OneDrive. Mac: Time Machine. Or use external hard drive: copy Documents and Desktop folders manually.',
        estTime: '30 min',
      },
    ],
  },
  {
    id: 'people',
    emoji: '👥',
    title: 'People & Accounts',
    description: 'Update the people who matter to your accounts and your life.',
    tasks: [
      {
        id: 'emergency-contacts',
        title: 'Update Medical ID and emergency contacts on phone',
        why: 'First responders use this in emergencies',
        how: 'iPhone: Health app → Medical ID → Edit. Android: Settings → Safety & Emergency → Emergency information.',
        estTime: '10 min',
      },
      {
        id: 'beneficiaries',
        title: 'Review beneficiaries on retirement, insurance, bank accounts',
        why: 'Outdated beneficiaries cause big problems for survivors',
        how: 'Log into each account online → look for "Beneficiaries" in settings. Update if needed.',
        estTime: '30 min',
      },
      {
        id: 'wifi-password',
        title: 'Change your home Wi-Fi password',
        why: 'Removes anyone you no longer want using your internet',
        how: 'Visit your router\'s admin page (usually 192.168.1.1) or use the router app. Change password and reconnect your devices.',
        estTime: '20 min',
      },
    ],
  },
];

export default function DigitalSpringCleaning() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<string>('updates');

  const allTasks = useMemo(() => SECTIONS.flatMap(s => s.tasks), []);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalCount = allTasks.length;
  const pct = Math.round((completedCount / totalCount) * 100);

  const toggleTask = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSection = (id: string) => setExpanded(prev => (prev === id ? '' : id));

  const reset = () => setCompleted({});

  const totalEstMinutes = useMemo(() => {
    let mins = 0;
    allTasks.forEach(t => {
      const match = t.estTime.match(/(\d+)/);
      if (match) mins += parseInt(match[1]);
    });
    return mins;
  }, [allTasks]);

  return (
    <>
      <SEOHead
        title="Digital Spring Cleaning — TekSure"
        description="An annual checklist of 22 digital tasks to keep your phone, computer, and online accounts safe and tidy. Check off items as you complete them."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 print:mb-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-950/60 mb-4 print:hidden">
              <Sparkles className="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Digital Spring Cleaning</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              22 things to do once a year to keep your phone, computer, and accounts safe and tidy.
              Total time: about {Math.floor(totalEstMinutes / 60)} hours{totalEstMinutes % 60 > 0 ? ` ${totalEstMinutes % 60} min` : ''}.
            </p>
          </div>

          {/* Progress */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 mb-5 shadow-sm print:hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                {completedCount} of {totalCount} ({pct}%)
              </span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5">
              <div className="bg-pink-500 h-2.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            {pct === 100 && (
              <div className="mt-3 text-center">
                <Trophy className="w-6 h-6 text-yellow-500 inline mr-1" />
                <span className="font-semibold text-green-700 dark:text-green-400">All done — see you next year!</span>
              </div>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {SECTIONS.map(section => {
              const sectionDone = section.tasks.filter(t => completed[t.id]).length;
              const isOpen = expanded === section.id;

              return (
                <div key={section.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                  {/* Print header always visible */}
                  <div className="hidden print:block px-5 pt-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">{section.emoji} {section.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{section.description}</p>
                  </div>

                  <button
                    onClick={() => toggleSection(section.id)}
                    className="print:hidden w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-3xl">{section.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{section.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {sectionDone} of {section.tasks.length} done
                      </p>
                    </div>
                    {sectionDone === section.tasks.length
                      ? <CheckCircle2 className="w-6 h-6 text-green-500" />
                      : isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>

                  <div className={`${isOpen ? 'block' : 'hidden'} print:block border-t border-gray-100 dark:border-gray-800`}>
                    <p className="px-5 py-3 text-sm text-gray-600 dark:text-gray-400 italic bg-pink-50/50 dark:bg-pink-950/20 print:bg-transparent print:hidden">
                      {section.description}
                    </p>
                    <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
                      {section.tasks.map(task => {
                        const isDone = completed[task.id] || false;
                        return (
                          <label key={task.id} className="flex gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30 print:py-2">
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => toggleTask(task.id)}
                              className="mt-0.5 w-5 h-5 rounded text-pink-600 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className={`font-medium ${isDone ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-900 dark:text-gray-100'}`}>
                                {task.title}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                <strong>How:</strong> {task.how}
                              </p>
                              <div className="flex gap-3 mt-1.5 text-xs">
                                <span className="text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {task.estTime}
                                </span>
                                <span className="text-gray-400 dark:text-gray-500 italic">{task.why}</span>
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 print:hidden">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print Checklist
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center print:hidden">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Quick Tip:</strong> Set a yearly reminder on the same date — for example, the first day of spring or your birthday — so you do not forget to do this again.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
