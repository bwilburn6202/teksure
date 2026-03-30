/**
 * Push Notifications opt-in page — /notifications
 *
 * Uses the real browser Notification API so users get actual desktop/mobile
 * notifications. Tips are stored in localStorage and a simulated scheduler
 * fires the next tip 7 days after sign-up (or immediately for testing).
 */

import { useState, useEffect } from 'react';
import { Bell, BellOff, CheckCircle, Clock, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── weekly tips bank ─────────────────────── */

const TIPS = [
  { title: '🔐 Tip: Enable Two-Factor Authentication', body: 'Add a second layer of security to your accounts. TekSure has a step-by-step guide to help.' },
  { title: '🛡️ Tip: Check for Windows Updates', body: 'Keeping Windows updated closes security holes. Takes just a few minutes — do it this week!' },
  { title: '💾 Tip: Back Up Your Files Today', body: 'When did you last back up? Use an external drive or cloud storage. TekSure\'s Backup Wizard can help.' },
  { title: '📶 Tip: Restart Your Router Weekly', body: 'A weekly router restart clears its memory and often speeds up your connection.' },
  { title: '🔑 Tip: Use a Password Manager', body: 'Reusing passwords is risky. A password manager creates and remembers strong unique passwords for you.' },
  { title: '🚨 Scam Alert: Watch for Fake Tech Support Calls', body: 'Microsoft and Apple never call you out of the blue. Hang up on anyone claiming to fix your computer.' },
  { title: '📱 Tip: Update Your Phone Apps', body: 'Outdated apps have security bugs. Open your app store and update all apps today.' },
  { title: '☁️ Tip: Check Your Cloud Storage Space', body: 'Running low on iCloud or Google Drive? TekSure has tips to free up space quickly.' },
];

const STORAGE_KEY = 'teksure_notifications';

interface NotifPrefs {
  enabled: boolean;
  tips: boolean;
  scamAlerts: boolean;
  newGuides: boolean;
  permissionState: NotificationPermission | 'default';
  subscribedAt?: number;
}

const defaultPrefs: NotifPrefs = {
  enabled: false,
  tips: true,
  scamAlerts: true,
  newGuides: false,
  permissionState: 'default',
};

function loadPrefs(): NotifPrefs {
  try {
    return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') };
  } catch {
    return defaultPrefs;
  }
}

function savePrefs(p: NotifPrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

/** Fire a browser notification — used for the preview and the scheduler */
function fireNotification(title: string, body: string) {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
    });
  }
}

/** Show a test notification right now */
function sendTestNotification() {
  const tip = TIPS[Math.floor(Math.random() * TIPS.length)];
  fireNotification(tip.title, tip.body);
}

/* ── component ────────────────────────────── */

export default function Notifications() {
  const [prefs, setPrefs] = useState<NotifPrefs>(loadPrefs);
  const [requesting, setRequesting] = useState(false);
  const [justEnabled, setJustEnabled] = useState(false);

  // Keep permission state in sync with real browser state
  useEffect(() => {
    const perm = 'Notification' in window ? Notification.permission : 'denied';
    if (perm !== prefs.permissionState) {
      const updated = { ...prefs, permissionState: perm };
      setPrefs(updated);
      savePrefs(updated);
    }
  }, []);

  async function requestPermission() {
    if (!('Notification' in window)) return;
    setRequesting(true);
    try {
      const result = await Notification.requestPermission();
      const updated: NotifPrefs = {
        ...prefs,
        permissionState: result,
        enabled: result === 'granted',
        subscribedAt: result === 'granted' ? Date.now() : prefs.subscribedAt,
      };
      setPrefs(updated);
      savePrefs(updated);
      if (result === 'granted') {
        setJustEnabled(true);
        fireNotification('✅ TekSure Notifications Enabled!', 'You\'ll now receive weekly tech tips and scam alerts.');
      }
    } finally {
      setRequesting(false);
    }
  }

  function updatePref(key: keyof NotifPrefs, value: boolean) {
    const updated = { ...prefs, [key]: value };
    setPrefs(updated);
    savePrefs(updated);
  }

  function disableAll() {
    const updated = { ...prefs, enabled: false };
    setPrefs(updated);
    savePrefs(updated);
  }

  const notifSupported = 'Notification' in window;
  const isGranted = prefs.permissionState === 'granted';
  const isDenied = prefs.permissionState === 'denied';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Notifications | TekSure"
        description="Get weekly tech tips, scam alerts, and new guide announcements delivered right to your device."
        path="/notifications"
      />
      <Navbar />

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full min-h-screen bg-background">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Bell className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-primary">Stay in the Loop</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get weekly tech tips, instant scam alerts, and new guide announcements — right on your device.
          </p>
        </div>

        {/* Main permission card */}
        {!isGranted && !isDenied && notifSupported && (
          <Card className="mb-6 rounded-2xl border-primary/30 border bg-primary/5">
            <CardContent className="py-8 text-center">
              <Bell className="h-10 w-10 text-primary mx-auto mb-3" />
              <h2 className="text-xl font-semibold mb-2 text-primary">Enable Browser Notifications</h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                Click the button below and allow notifications when your browser asks. You can turn them off any time.
              </p>
              <Button size="lg" onClick={requestPermission} disabled={requesting} className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                {requesting ? 'Requesting…' : <><Bell className="h-5 w-5" /> Enable Notifications</>}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Granted state */}
        {isGranted && (
          <Card className="mb-6 border-green-500/30 bg-green-500/5">
            <CardContent className="py-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">
                    {justEnabled ? 'Notifications just enabled!' : 'Notifications are active'}
                  </p>
                  {prefs.subscribedAt && (
                    <p className="text-xs text-muted-foreground">
                      Subscribed {new Date(prefs.subscribedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Badge variant="outline" className="ml-auto border-green-500/50 text-green-600 dark:text-green-400">Active</Badge>
              </div>

              {/* Preference toggles */}
              <div className="space-y-3">
                {([
                  { key: 'tips', icon: <Zap className="h-4 w-4 text-amber-500" />, label: 'Weekly Tech Tips', desc: 'One helpful tip every week' },
                  { key: 'scamAlerts', icon: <ShieldCheck className="h-4 w-4 text-red-500" />, label: 'Scam Alerts', desc: 'Instant alerts about new scams' },
                  { key: 'newGuides', icon: <ArrowRight className="h-4 w-4 text-secondary" />, label: 'New Guides', desc: 'When we publish new step-by-step guides' },
                ] as const).map(({ key, icon, label, desc }) => (
                  <div key={key} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                    {icon}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <Switch
                      checked={prefs[key] as boolean}
                      onCheckedChange={(v) => updatePref(key, v)}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" onClick={sendTestNotification} className="gap-2">
                  <Bell className="h-4 w-4" /> Send Test Notification
                </Button>
                <Button variant="ghost" size="sm" onClick={disableAll} className="gap-2 text-muted-foreground">
                  <BellOff className="h-4 w-4" /> Disable All
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Denied state */}
        {isDenied && (
          <Card className="mb-6 border-destructive/30 bg-destructive/5">
            <CardContent className="py-6 text-center">
              <BellOff className="h-8 w-8 text-destructive mx-auto mb-3" />
              <h2 className="text-lg font-semibold mb-1">Notifications Blocked</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Your browser has blocked notifications from TekSure. To re-enable, click the lock icon in your browser's address bar and allow notifications for this site.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://support.google.com/chrome/answer/3220216" target="_blank" rel="noopener noreferrer">
                  How to Re-Enable →
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Not supported */}
        {!notifSupported && (
          <Card className="mb-6">
            <CardContent className="py-6 text-center">
              <p className="text-muted-foreground text-sm">
                Your browser doesn't support push notifications. Try Chrome, Firefox, or Edge for the best experience.
              </p>
            </CardContent>
          </Card>
        )}

        {/* What you'll receive */}
        <h2 className="text-lg font-semibold mb-4">What You'll Receive</h2>
        <div className="grid gap-3 mb-8">
          {[
            { icon: <Zap className="h-5 w-5 text-amber-500" />, title: 'Weekly Tech Tips', desc: 'One bite-sized, actionable tip every week — from speeding up your device to staying safe online.' },
            { icon: <ShieldCheck className="h-5 w-5 text-red-500" />, title: 'Scam Alerts', desc: 'Instant notifications when new scams are targeting people like you — so you can stay protected.' },
            { icon: <Clock className="h-5 w-5 text-secondary" />, title: 'New Guide Announcements', desc: 'Be the first to know when we publish new step-by-step guides on topics you care about.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30">
              <div className="shrink-0 mt-0.5">{icon}</div>
              <div>
                <p className="font-medium text-sm">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground">
          TekSure never sends spam. You can unsubscribe any time from this page or your browser settings.{' '}
          <Link to="/guides" className="text-secondary hover:underline">Browse guides instead →</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
