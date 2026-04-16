import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, CheckCircle, ChevronDown, ChevronUp, AlertTriangle, Monitor, Mic, Headphones, Sun, Wifi, ExternalLink } from 'lucide-react';

type Platform = 'zoom' | 'google-meet' | 'facetime' | 'teams' | 'whatsapp' | null;
type Mode = 'join' | 'start';

interface PlatformInfo {
  name: string;
  color: string;
  joinSteps: string[];
  startSteps: string[];
  inviteSteps: string[];
  tips: string[];
  guideLink: string;
  guideLinkLabel: string;
}

const platforms: Record<Exclude<Platform, null>, PlatformInfo> = {
  zoom: {
    name: 'Zoom',
    color: 'text-blue-600',
    joinSteps: [
      'Find the meeting link or meeting ID that someone sent you (usually in an email, text message, or calendar invite).',
      'Click the link. If asked, choose "Open Zoom" or "Launch Meeting." If you do not have Zoom installed, the website will ask you to download it.',
      'If you used a meeting ID instead of a link, open the Zoom app and tap "Join" at the top, then enter the meeting ID.',
      'You may be asked to enter a passcode — this will be in the same email or message that had the meeting link.',
      'Choose "Join with Video" and "Join with Audio" when prompted.',
      'You are in the meeting. Your camera and microphone should be on.',
    ],
    startSteps: [
      'Open the Zoom app on your phone, tablet, or computer.',
      'Sign in to your Zoom account (or create a free account at zoom.us).',
      'Tap or click "New Meeting" (the orange camera icon).',
      'Turn on your video and tap "Start a Meeting."',
      'To invite others: tap "Participants" at the bottom, then "Invite." You can copy the meeting link or send it directly.',
      'Share the link via text, email, or messaging app.',
    ],
    inviteSteps: [
      'While in the meeting, tap "Participants" at the bottom of the screen.',
      'Tap "Invite" and choose how you want to send the invite (Email, Text Message, Copy Link).',
      'If you copy the link, paste it into any messaging app or email.',
    ],
    tips: [
      'Free Zoom meetings with 3 or more people have a 40-minute limit. You can restart the meeting when it ends.',
      'Use the "Mute" button at the bottom left to mute yourself when you are not talking.',
      'Click the ^ arrow next to the microphone icon to choose a different speaker or microphone.',
    ],
    guideLink: '/guides/zoom-basics',
    guideLinkLabel: 'Full Zoom Guide',
  },
  'google-meet': {
    name: 'Google Meet',
    color: 'text-green-600',
    joinSteps: [
      'Find the meeting link that someone sent you (it starts with meet.google.com/).',
      'Click the link. It will open in your web browser — no app download needed.',
      'If you are signed into a Google account, your name will appear automatically. If not, type your name.',
      'Click "Ask to join" and wait for the host to let you in.',
      'Allow access to your camera and microphone if your browser asks.',
      'You are in the meeting.',
    ],
    startSteps: [
      'Go to meet.google.com in your web browser or open the Google Meet app.',
      'Sign in with your Google account.',
      'Click "New meeting" and then "Start an instant meeting."',
      'Allow your camera and microphone when asked.',
      'Copy the meeting link shown on screen to share with others.',
      'Send the link via email, text, or messaging app.',
    ],
    inviteSteps: [
      'Click the meeting code shown at the bottom left of the screen.',
      'Click "Copy joining info" to copy the meeting link.',
      'Paste the link into an email, text message, or messaging app to share it.',
    ],
    tips: [
      'Google Meet works entirely in your web browser — no app download is needed on a computer.',
      'On a phone or tablet, download the Google Meet app from the App Store or Google Play for the best experience.',
      'Free Google Meet calls with 3 or more people have a 60-minute limit.',
    ],
    guideLink: '/guides/google-meet',
    guideLinkLabel: 'Full Google Meet Guide',
  },
  facetime: {
    name: 'FaceTime',
    color: 'text-emerald-600',
    joinSteps: [
      'Find the FaceTime link that someone sent you (in a text message or email).',
      'Tap the link. If you have an iPhone, iPad, or Mac, FaceTime will open directly.',
      'If you have an Android phone or Windows computer, the link will open in your web browser.',
      'Tap "Join" and wait for the person to accept your call.',
      'Allow camera and microphone access if asked.',
      'You are on the call.',
    ],
    startSteps: [
      'Open the FaceTime app on your iPhone, iPad, or Mac.',
      'Tap "New FaceTime" at the top.',
      'Type the name, phone number, or email of the person you want to call.',
      'Tap the green "FaceTime" button to start a video call.',
      'To create a link you can share: tap "Create Link" instead, then send the link via Messages, email, or any app.',
    ],
    inviteSteps: [
      'Before starting the call, tap "Create Link" in the FaceTime app.',
      'Choose how to share the link: Messages, Mail, or copy the link to paste elsewhere.',
      'Anyone with the link can join — even people with Android phones (they join through a web browser).',
    ],
    tips: [
      'FaceTime is free and built into every iPhone, iPad, and Mac.',
      'People with Android phones or Windows computers can join FaceTime calls through a shared link (they use a web browser).',
      'FaceTime calls between Apple devices have no time limit.',
    ],
    guideLink: '/guides/facetime',
    guideLinkLabel: 'Full FaceTime Guide',
  },
  teams: {
    name: 'Microsoft Teams',
    color: 'text-indigo-600',
    joinSteps: [
      'Find the meeting link that someone sent you (usually in an email or calendar invite from Outlook).',
      'Click the link. You will be asked to either open the Teams app or join in your web browser.',
      'If you do not have Teams installed, choose "Continue on this browser" to join from the web.',
      'Type your name if asked, then click "Join now."',
      'Allow access to your camera and microphone.',
      'You may wait in a lobby until the host lets you in. This is normal.',
    ],
    startSteps: [
      'Open Microsoft Teams on your computer, phone, or tablet (or go to teams.microsoft.com).',
      'Sign in with your Microsoft account.',
      'Click "Meet" on the left sidebar, then "Start meeting."',
      'Choose your camera and microphone settings, then click "Join now."',
      'To invite others: click "People" at the top, then "Share invite" to copy the meeting link.',
      'Send the link via email, text, or messaging app.',
    ],
    inviteSteps: [
      'In the meeting, click the "People" icon at the top of the screen.',
      'Click "Share invite" to copy the meeting link.',
      'Paste the link into an email, text message, or messaging app.',
    ],
    tips: [
      'Teams works in a web browser without downloading anything — just go to teams.microsoft.com.',
      'If your meeting was set up through Outlook, look for the "Join Microsoft Teams Meeting" link in the calendar event.',
      'The free version of Teams allows meetings up to 60 minutes with up to 100 people.',
    ],
    guideLink: '/guides/microsoft-teams',
    guideLinkLabel: 'Full Teams Guide',
  },
  whatsapp: {
    name: 'WhatsApp',
    color: 'text-green-500',
    joinSteps: [
      'Open WhatsApp on your phone.',
      'Find the group chat or conversation where the call is happening.',
      'Tap the green "Join" button that appears in the chat when someone starts a call.',
      'Allow camera and microphone access if asked.',
      'You are on the call.',
    ],
    startSteps: [
      'Open WhatsApp on your phone.',
      'Open the conversation with the person you want to call.',
      'Tap the video camera icon at the top right of the conversation.',
      'For a group call: open a group chat, tap the phone icon at the top right, select members, then tap the video camera icon.',
      'Wait for them to answer.',
    ],
    inviteSteps: [
      'WhatsApp calls work through the app directly — you do not need to share a link.',
      'Open a conversation with the person and tap the video camera icon to call them.',
      'For group calls, you can add up to 32 people from a group chat.',
    ],
    tips: [
      'WhatsApp is free and works on both iPhone and Android.',
      'Video calls use your internet connection (Wi-Fi or mobile data), not your phone minutes.',
      'WhatsApp group video calls support up to 32 people.',
    ],
    guideLink: '/guides/whatsapp',
    guideLinkLabel: 'Full WhatsApp Guide',
  },
};

const troubleshooting = [
  { problem: 'Camera not working', icon: Monitor, steps: ['Make sure no other app is using your camera (close Zoom if you are trying to use Meet, for example).', 'Check that camera permission is allowed: on iPhone go to Settings then Privacy then Camera. On Android go to Settings then Apps then the app then Permissions.', 'Try closing and reopening the app.', 'If using a laptop, make sure the camera cover or slider is open.'] },
  { problem: 'Microphone not working', icon: Mic, steps: ['Check that you are not muted — look for a microphone icon with a line through it.', 'Make sure the app has microphone permission in your phone or computer settings.', 'Try unplugging and replugging your headphones if you are using them.', 'On a computer, check that the correct microphone is selected in the app settings.'] },
  { problem: 'Audio echo or feedback', icon: Headphones, steps: ['Use headphones or earbuds — this is the most common fix for echo.', 'Mute yourself when you are not speaking.', 'If multiple devices are in the same room, mute all but one.', 'Lower your speaker volume if you are not using headphones.'] },
];

const preMeetingChecklist = [
  { label: 'Good lighting — face a window or lamp so people can see you clearly', icon: Sun },
  { label: 'Stable internet — connect to Wi-Fi if possible', icon: Wifi },
  { label: 'Headphones — reduces echo and improves audio quality', icon: Headphones },
  { label: 'Quiet room — close doors and minimize background noise', icon: Mic },
  { label: 'Camera at eye level — prop your device up so the camera is at your eye level', icon: Monitor },
];

export default function MeetingSetupHelper() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);
  const [mode, setMode] = useState<Mode>('join');
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [expandedTroubleshooting, setExpandedTroubleshooting] = useState<number | null>(null);

  const toggleChecked = (i: number) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const platform = selectedPlatform ? platforms[selectedPlatform] : null;
  const steps = platform ? (mode === 'join' ? platform.joinSteps : platform.startSteps) : [];

  return (
    <>
      <SEOHead
        title="Meeting Setup Helper — Video Call Guide for Zoom, Meet, FaceTime | TekSure"
        description="Step-by-step guide to set up and join video calls on Zoom, Google Meet, FaceTime, Microsoft Teams, and WhatsApp. Includes troubleshooting and pre-meeting checklist."
        path="/tools/meeting-setup-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Meeting Setup Helper' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center flex-shrink-0">
                <Video className="h-6 w-6 text-teal-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Meeting Setup Helper</h1>
            <p className="text-muted-foreground text-lg">
              Follow step-by-step instructions to set up or join a video call on any platform.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Platform selection */}
          <Card>
            <CardHeader><CardTitle className="text-lg">What do you want to use?</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.entries(platforms) as [Exclude<Platform, null>, PlatformInfo][]).map(([key, p]) => (
                  <Button
                    key={key}
                    variant={selectedPlatform === key ? 'default' : 'outline'}
                    onClick={() => setSelectedPlatform(key)}
                    className="h-auto py-3"
                    aria-pressed={selectedPlatform === key}
                  >
                    <Video className={`h-4 w-4 mr-2 ${selectedPlatform === key ? '' : p.color}`} aria-hidden="true" />
                    {p.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join vs Start toggle */}
          {selectedPlatform && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-3">What do you need to do?</p>
                <div className="flex gap-3">
                  <Button
                    variant={mode === 'join' ? 'default' : 'outline'}
                    onClick={() => setMode('join')}
                    className="flex-1"
                    aria-pressed={mode === 'join'}
                  >
                    I need to JOIN a meeting
                  </Button>
                  <Button
                    variant={mode === 'start' ? 'default' : 'outline'}
                    onClick={() => setMode('start')}
                    className="flex-1"
                    aria-pressed={mode === 'start'}
                  >
                    I need to START a meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Steps */}
          {platform && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How to {mode === 'join' ? 'Join' : 'Start'} a {platform.name} Call
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}

                {mode === 'start' && (
                  <>
                    <hr className="my-4" />
                    <p className="text-sm font-medium">How to invite someone:</p>
                    {platform.inviteSteps.map((step, i) => (
                      <div key={`invite-${i}`} className="flex gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </>
                )}

                {/* Tips */}
                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 mt-4">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Quick tips for {platform.name}:</p>
                  <ul className="space-y-1">
                    {platform.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-blue-700 dark:text-blue-400 flex gap-2">
                        <span>-</span><span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={platform.guideLink} className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2">
                  {platform.guideLinkLabel} <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          )}

          {/* Pre-meeting checklist */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Pre-Meeting Checklist</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {preMeetingChecklist.map((item, i) => {
                const Icon = item.icon;
                return (
                  <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={checkedItems.has(i)}
                      onChange={() => toggleChecked(i)}
                      className="mt-0.5 h-4 w-4 rounded"
                      aria-label={`Mark "${item.label}" as done`}
                    />
                    <Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${checkedItems.has(i) ? 'text-green-500' : 'text-muted-foreground'}`} aria-hidden="true" />
                    <span className={checkedItems.has(i) ? 'line-through text-muted-foreground' : ''}>{item.label}</span>
                  </label>
                );
              })}
              <p className="text-xs text-muted-foreground pt-2">
                <CheckCircle className="h-3 w-3 inline mr-1" aria-hidden="true" />{checkedItems.size} of {preMeetingChecklist.length} ready
              </p>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowTroubleshooting(!showTroubleshooting)} className="flex items-center gap-3 w-full text-left">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Troubleshooting Common Problems</span>
              {showTroubleshooting ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showTroubleshooting && (
              <div className="mt-4 space-y-3">
                {troubleshooting.map((t, i) => {
                  const TIcon = t.icon;
                  return (
                    <div key={i} className="rounded-lg border p-4">
                      <button
                        onClick={() => setExpandedTroubleshooting(expandedTroubleshooting === i ? null : i)}
                        className="flex items-center gap-2 w-full text-left"
                        aria-expanded={expandedTroubleshooting === i}
                      >
                        <TIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium text-sm flex-1">{t.problem}</span>
                        {expandedTroubleshooting === i ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                      </button>
                      {expandedTroubleshooting === i && (
                        <ul className="mt-3 space-y-2 pl-6">
                          {t.steps.map((step, si) => (
                            <li key={si} className="text-sm text-muted-foreground flex gap-2">
                              <span className="font-medium flex-shrink-0">{si + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
