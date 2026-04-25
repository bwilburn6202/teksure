import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Circle, Printer, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';

interface KitItem {
  id: string;
  title: string;
  description: string;
  priority: 'critical' | 'important' | 'recommended';
  category: string;
}

const KIT_ITEMS: KitItem[] = [
  // Critical
  { id: 'passwords', title: 'Important passwords written down and stored securely', description: 'Write your most important passwords (email, banking, Apple ID, Google) on paper and store in a safe or locked drawer. Not on your computer.', priority: 'critical', category: 'Accounts' },
  { id: 'ice', title: 'ICE (In Case of Emergency) contacts set up on phone', description: 'iPhone: Health app → Medical ID. Android: Settings → Safety & Emergency. First responders check this if you cannot communicate.', priority: 'critical', category: 'Safety' },
  { id: 'medical-id', title: 'Medical ID configured with allergies and conditions', description: 'Add blood type, allergies, medications, and medical conditions. Accessible from your lock screen without your passcode.', priority: 'critical', category: 'Safety' },
  { id: 'find-my', title: 'Find My iPhone / Find My Device is turned on', description: 'iPhone: Settings → [your name] → Find My. Android: Settings → Google → Find My Device. Lets you locate, lock, or erase a lost phone.', priority: 'critical', category: 'Device' },
  { id: 'backup', title: 'Phone backed up to the cloud', description: 'iPhone: Settings → [your name] → iCloud → iCloud Backup. Android: Settings → Google → Backup. Protects photos, contacts, and messages.', priority: 'critical', category: 'Data' },

  // Important
  { id: 'power-bank', title: 'Portable power bank charged and accessible', description: 'Keep a charged power bank in your car or bag. During power outages, your phone may be your only connection to information and family.', priority: 'important', category: 'Hardware' },
  { id: 'offline-maps', title: 'Offline maps downloaded for your area', description: 'Google Maps: search your city → tap "Download" → select area. Works without internet for navigation during outages or emergencies.', priority: 'important', category: 'Apps' },
  { id: 'emergency-alerts', title: 'Emergency alerts enabled on phone', description: 'iPhone: Settings → Notifications → Government Alerts. Android: Settings → Notifications → Wireless emergency alerts. Receives severe weather and AMBER alerts.', priority: 'important', category: 'Safety' },
  { id: 'fema-app', title: 'FEMA app installed', description: 'Free app that sends real-time weather alerts, helps find shelters, and has emergency preparedness checklists. Available on iPhone and Android.', priority: 'important', category: 'Apps' },
  { id: 'documents', title: 'Important documents scanned and backed up', description: 'Take photos of: driver\'s license, insurance cards, passport, Social Security card, medication list, important contacts. Save to cloud storage (Google Drive, iCloud).', priority: 'important', category: 'Data' },
  { id: '2fa-backup', title: 'Two-factor authentication backup codes saved', description: 'Print or write down backup codes for your most important accounts. These let you sign in if you lose access to your phone.', priority: 'important', category: 'Accounts' },
  { id: 'flashlight', title: 'Flashlight tested and working on phone', description: 'iPhone: swipe down from top right for Control Center, tap flashlight. Android: swipe down from top for Quick Settings, tap flashlight. Make sure it works now, before you need it.', priority: 'important', category: 'Hardware' },

  // Recommended
  { id: 'family-plan', title: 'Family communication plan documented', description: 'Agree on: who to call first, where to meet if separated, an out-of-state contact both family members can check in with. Write it down and share.', priority: 'recommended', category: 'Safety' },
  { id: 'radio', title: 'Emergency radio app or battery radio available', description: 'Download a radio app that works without internet (FM radio built into some Android phones). Or keep a battery-powered or hand-crank radio at home.', priority: 'recommended', category: 'Hardware' },
  { id: 'contacts-printed', title: 'Emergency contacts written on paper (not only in phone)', description: 'If your phone dies or breaks, do you know your family\'s phone numbers? Write down the 5 most important numbers and keep the list in your wallet.', priority: 'recommended', category: 'Safety' },
  { id: 'charger-cable', title: 'Extra charging cable kept in car or bag', description: 'Keep a spare charging cable (and car charger adapter) in your vehicle or daily bag. When your battery is critical, you will be glad you have it.', priority: 'recommended', category: 'Hardware' },
  { id: 'wifi-password', title: 'WiFi password written down and accessible', description: 'If you need to connect a new device during an emergency, you need your WiFi password. Write it on a card and keep it near your router or in a safe place.', priority: 'recommended', category: 'Data' },
  { id: 'insurance-photos', title: 'Photos of valuable items for insurance', description: 'Take photos of electronics, jewelry, and other valuables. Store them in cloud storage. If you need to file an insurance claim, you will have proof of what you owned.', priority: 'recommended', category: 'Data' },
];

const PRIORITY_COLORS = {
  critical: { bg: 'bg-red-50 dark:bg-red-950/20', text: 'text-red-600', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
  important: { bg: 'bg-amber-50 dark:bg-amber-950/20', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
  recommended: { bg: 'bg-blue-50 dark:bg-blue-950/20', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
};

export default function TechEmergencyKit() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setDone(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const progress = Math.round((done.size / KIT_ITEMS.length) * 100);

  const critical = KIT_ITEMS.filter(i => i.priority === 'critical');
  const important = KIT_ITEMS.filter(i => i.priority === 'important');
  const recommended = KIT_ITEMS.filter(i => i.priority === 'recommended');

  return (
    <>
      <SEOHead title="Tech Emergency Kit — Digital Preparedness Checklist | TekSure" description="Make sure your digital life is prepared for emergencies. Passwords, backups, Medical ID, emergency contacts, and more." path="/tools/tech-emergency-kit" />
      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl pt-4 px-4"><PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Emergency Kit' }]} /></div>
        <div className="container max-w-3xl py-12 px-4">
          <div className="text-center mb-10">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Tech Emergency Kit</h1>
            <p className="text-muted-foreground">A preparedness checklist for your digital life. Complete these items before you need them.</p>
          </div>

          {/* Progress */}
          <Card className="rounded-2xl mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{done.size} of {KIT_ITEMS.length} completed</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{progress}%</span>
                  {done.size > 0 && <Button size="sm" variant="ghost" onClick={() => setDone(new Set())} className="gap-1 text-xs h-7"><RotateCcw className="h-3 w-3" /> Reset</Button>}
                </div>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? 'bg-green-500' : progress >= 50 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${progress}%` }} />
              </div>
            </CardContent>
          </Card>

          {progress === 100 && (
            <Card className="rounded-2xl mb-8 border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
              <CardContent className="py-8 text-center">
                <Sparkles className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h2 className="text-xl font-bold mb-1">Your emergency kit is complete!</h2>
                <p className="text-sm text-muted-foreground">You are prepared. Revisit this checklist every 6 months to make sure everything is still up to date.</p>
              </CardContent>
            </Card>
          )}

          {/* Sections */}
          {[
            { title: 'Critical — Do These First', items: critical, color: PRIORITY_COLORS.critical, icon: AlertTriangle },
            { title: 'Important — Do These Soon', items: important, color: PRIORITY_COLORS.important, icon: Shield },
            { title: 'Recommended — Nice to Have', items: recommended, color: PRIORITY_COLORS.recommended, icon: CheckCircle },
          ].map(section => (
            <Card key={section.title} className="rounded-2xl mb-6">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <section.icon className={`h-5 w-5 ${section.color.text}`} />
                  {section.title}
                  <Badge variant="secondary" className={`text-xs ${section.color.badge}`}>
                    {section.items.filter(i => done.has(i.id)).length}/{section.items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {section.items.map(item => (
                  <div key={item.id} className={`rounded-xl p-4 cursor-pointer transition-all ${done.has(item.id) ? 'bg-green-50/50 dark:bg-green-950/10' : 'hover:bg-muted/50'}`} onClick={() => toggle(item.id)}>
                    <div className="flex items-start gap-3">
                      {done.has(item.id) ? <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> : <Circle className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-0.5" />}
                      <div>
                        <p className={`text-sm font-medium ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" onClick={() => window.print()} className="w-full gap-2 no-print"><Printer className="h-4 w-4" /> Print This Checklist</Button>
        </div>
      </main>
    </>
  );
}
