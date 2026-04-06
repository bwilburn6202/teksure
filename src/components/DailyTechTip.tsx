import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface TechTip {
  id: string;
  title: string;
  content: string;
  category: 'safety' | 'productivity' | 'basics' | 'privacy' | 'accessibility';
  relatedGuide?: string;
}

const TECH_TIPS: TechTip[] = [
  {
    id: '1',
    title: 'Use Strong, Unique Passwords',
    content: 'Never use the same password for multiple websites. If one site gets hacked, all your accounts could be at risk. A password manager can help you remember them all.',
    category: 'safety',
    relatedGuide: 'password-security',
  },
  {
    id: '2',
    title: 'Watch Out for Urgent Emails',
    content: 'Scammers often create fake emails that look urgent — "Your account will be closed!" or "Verify your information now!" Real companies rarely demand immediate action via email.',
    category: 'safety',
    relatedGuide: 'spot-phishing-emails',
  },
  {
    id: '3',
    title: 'Restart Your Device Weekly',
    content: 'Turning your computer off and on again once a week helps it run better. It clears temporary files and installs important updates.',
    category: 'basics',
    relatedGuide: 'restart-computer',
  },
  {
    id: '4',
    title: 'Use Ctrl+Z to Undo Mistakes',
    content: 'Made a mistake while typing? Press Ctrl+Z (or Cmd+Z on Mac) to undo your last action. This works in most programs!',
    category: 'productivity',
    relatedGuide: 'keyboard-shortcuts',
  },
  {
    id: '5',
    title: 'Enable Two-Factor Authentication',
    content: 'Add an extra layer of security to your important accounts. Even if someone gets your password, they cannot log in without your phone or email code.',
    category: 'privacy',
    relatedGuide: 'two-factor-authentication',
  },
  {
    id: '6',
    title: 'Make Text Bigger if Needed',
    content: 'Most devices let you increase text size in Settings. Look for "Accessibility" or "Display" settings. TekSure also has a text size toggle in the top right corner.',
    category: 'accessibility',
    relatedGuide: 'accessibility-settings',
  },
  {
    id: '7',
    title: 'Double-Check Before Clicking Links',
    content: 'Hover over a link (without clicking) to see where it really goes. If the web address looks strange or unfamiliar, do not click it.',
    category: 'safety',
    relatedGuide: 'spot-phishing-emails',
  },
  {
    id: '8',
    title: 'Use Incognito Mode for Shopping',
    content: 'When shopping online, use private/incognito mode in your browser. This prevents websites from tracking your browsing to show higher prices.',
    category: 'privacy',
    relatedGuide: 'online-shopping-safely',
  },
  {
    id: '9',
    title: 'Back Up Your Photos Regularly',
    content: 'Your phone photos are precious memories. Set up automatic cloud backup (like iCloud or Google Photos) so you never lose them if your device breaks.',
    category: 'basics',
    relatedGuide: 'backup-phone-photos',
  },
  {
    id: '10',
    title: 'Disconnect from WiFi When Traveling',
    content: 'Turn off auto-connect to WiFi when you travel. Hackers can create fake WiFi networks in public places to steal your information.',
    category: 'safety',
    relatedGuide: 'wifi-safety',
  },
  {
    id: '11',
    title: 'Close Unused Browser Tabs',
    content: 'Too many open tabs can slow down your computer and make it hard to find what you need. Get in the habit of closing tabs you are done using.',
    category: 'productivity',
    relatedGuide: 'browser-tips',
  },
  {
    id: '12',
    title: 'Update Your Apps and Software',
    content: 'Software updates fix security problems and add new features. Enable automatic updates so you always have the latest, safest version.',
    category: 'basics',
    relatedGuide: 'update-apps',
  },
  {
    id: '13',
    title: 'Use a Screen Lock',
    content: 'Always lock your screen when you step away, even at home. Use a PIN, password, fingerprint, or face recognition to keep your information safe.',
    category: 'privacy',
    relatedGuide: 'phone-security',
  },
  {
    id: '14',
    title: 'Read Reviews Before Downloading Apps',
    content: 'Only download apps from official stores (App Store or Google Play). Check reviews and ratings, and research the developer if you are unsure.',
    category: 'safety',
    relatedGuide: 'safe-app-downloads',
  },
  {
    id: '15',
    title: 'Speak to Your Device',
    content: 'Most phones and computers have voice assistants. Try saying "Hey Siri" or "Hey Google" or pressing the microphone button to dictate text — it is faster than typing!',
    category: 'accessibility',
    relatedGuide: 'voice-assistants',
  },
  {
    id: '16',
    title: 'Do Not Share Your Passwords',
    content: 'No legitimate company or tech support will ever ask for your password. Keep your passwords private and never write them on sticky notes.',
    category: 'safety',
    relatedGuide: 'password-security',
  },
  {
    id: '17',
    title: 'Use Copy and Paste to Avoid Typos',
    content: 'When entering web addresses or email codes, copy and paste instead of typing. This prevents typos that could lead to the wrong website.',
    category: 'productivity',
  },
  {
    id: '18',
    title: 'Take Breaks from Screens',
    content: 'Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. This helps reduce eye strain from screen time.',
    category: 'accessibility',
    relatedGuide: 'screen-time-tips',
  },
  {
    id: '19',
    title: 'Check Privacy Settings Regularly',
    content: 'Apps and websites update their privacy settings often. Review them every few months to make sure you are not sharing more than you want.',
    category: 'privacy',
    relatedGuide: 'privacy-settings',
  },
  {
    id: '20',
    title: 'Ask for Help When Needed',
    content: 'If something seems confusing or you are unsure, ask for help. TekSure has guides for almost everything, and real human help is available too.',
    category: 'basics',
    relatedGuide: 'get-help',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  safety: 'text-red-500 bg-red-100 dark:bg-red-900/30',
  productivity: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
  basics: 'text-green-500 bg-green-100 dark:bg-green-900/30',
  privacy: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
  accessibility: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
};

export function DailyTechTip() {
  const [tip, setTip] = useState<TechTip | null>(null);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const tipIndex = dayOfYear % TECH_TIPS.length;
    setTip(TECH_TIPS[tipIndex]);
  }, []);

  if (!tip) return null;

  const categoryColor = CATEGORY_COLORS[tip.category] || CATEGORY_COLORS.basics;

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardContent className="py-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-sm">{tip.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColor}`}>
                {tip.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{tip.content}</p>
            {tip.relatedGuide && (
              <a 
                href={`/guides/${tip.relatedGuide}`}
                className="inline-block mt-2 text-xs text-primary hover:underline"
              >
                Learn more →
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DailyTechTip;
