import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Printer, RotateCcw, ShieldCheck } from "lucide-react";

interface CheckItem {
  id: string;
  task: string;
  detail: string;
  category: string;
}

const SECTIONS: { label: string; color: string; items: CheckItem[] }[] = [
  {
    label: "Passwords & Accounts",
    color: "text-blue-700",
    items: [
      { id: "pw-email", task: "Change your email password", detail: "Update Gmail, Outlook, Yahoo, or whichever service you use. Use a strong password (at least 12 characters with numbers and symbols).", category: "Passwords" },
      { id: "pw-bank", task: "Change your online banking password", detail: "Log in to your bank's website or app and update the password. Use a different password than your email.", category: "Passwords" },
      { id: "pw-social", task: "Update passwords on social media", detail: "Change Facebook, Instagram, or other social accounts. If you use a password manager, let it generate a strong one.", category: "Passwords" },
      { id: "2fa-email", task: "Confirm two-factor authentication is on for email", detail: "Check that your email account asks for a code or phone confirmation when you log in from a new device.", category: "Passwords" },
    ],
  },
  {
    label: "Device Backups",
    color: "text-green-700",
    items: [
      { id: "backup-phone", task: "Back up your phone", detail: "iPhone: go to Settings → your name → iCloud → iCloud Backup → Back Up Now. Android: Settings → Google → Backup → Back Up Now.", category: "Backup" },
      { id: "backup-computer", task: "Back up your computer", detail: "Windows: use File History or an external hard drive. Mac: use Time Machine. Make sure your last backup completed successfully.", category: "Backup" },
      { id: "backup-photos", task: "Confirm photos are backed up to the cloud", detail: "Check that Google Photos or iCloud Photos is turned on and up to date. Look for a sync status message in the app.", category: "Backup" },
    ],
  },
  {
    label: "Software Updates",
    color: "text-purple-700",
    items: [
      { id: "update-phone", task: "Update your phone's operating system", detail: "iPhone: Settings → General → Software Update. Android: Settings → Software Update (or System → System Update). Install any available updates.", category: "Updates" },
      { id: "update-computer", task: "Update Windows or macOS", detail: "Windows: Start → Settings → Windows Update → Check for Updates. Mac: Apple menu → System Settings → General → Software Update.", category: "Updates" },
      { id: "update-apps", task: "Update your apps", detail: "iPhone: App Store → your profile icon → scroll to see pending updates → Update All. Android: Google Play → your profile icon → Manage apps and device → Update All.", category: "Updates" },
      { id: "update-browser", task: "Update your web browser", detail: "Chrome: three-dot menu → Help → About Google Chrome. Firefox: menu → Help → About Firefox. Edge: three-dot menu → Help and feedback → About Microsoft Edge.", category: "Updates" },
    ],
  },
  {
    label: "Privacy & Security",
    color: "text-orange-700",
    items: [
      { id: "priv-app-perms", task: "Review app permissions on your phone", detail: "Check which apps have access to your camera, microphone, and location. iPhone: Settings → Privacy & Security. Android: Settings → Privacy → Permission Manager. Remove access for apps that don't need it.", category: "Privacy" },
      { id: "priv-connected-apps", task: "Check apps connected to Google or Apple account", detail: "iPhone/iCloud: appleid.apple.com → Sign-In and Security → Apps Using Apple ID. Google: myaccount.google.com → Security → Third-party apps with account access. Remove anything unfamiliar.", category: "Privacy" },
      { id: "priv-social-settings", task: "Review social media privacy settings", detail: "On Facebook: Settings → Privacy → check who can see your posts and contact info. Make sure your profile is not fully public unless you want it to be.", category: "Privacy" },
      { id: "priv-credit", task: "Check your credit report for free", detail: "Go to AnnualCreditReport.com to get free reports from all three bureaus — Equifax, Experian, and TransUnion. Look for accounts you don't recognize.", category: "Privacy" },
    ],
  },
  {
    label: "Subscriptions & Spending",
    color: "text-rose-700",
    items: [
      { id: "sub-review", task: "Review monthly subscriptions", detail: "Look at your bank or credit card statements for the past two months. List every recurring charge. Cancel anything you're not actively using.", category: "Subscriptions" },
      { id: "sub-streaming", task: "Check streaming service costs", detail: "Review Netflix, Hulu, Disney+, Amazon Prime, and any other streaming services. Consider pausing or cancelling any you haven't watched in three months.", category: "Subscriptions" },
    ],
  },
  {
    label: "Emergency Readiness",
    color: "text-teal-700",
    items: [
      { id: "emerg-contacts", task: "Update emergency contacts on your phone", detail: "iPhone: open Health app → your profile → Medical ID → Edit. Android: open Contacts → find your own contact card → add emergency info, or use the Emergency app in settings.", category: "Emergency" },
      { id: "emerg-family", task: "Share important account info with a trusted person", detail: "Make sure a trusted family member or friend knows how to access your important accounts in an emergency. Consider a password manager with an emergency access feature.", category: "Emergency" },
      { id: "emerg-smoke", task: "Test smoke and carbon monoxide detectors", detail: "Press the test button on each detector. Replace batteries if needed (standard detectors need new batteries once a year). Replace the whole unit if it's more than 10 years old.", category: "Emergency" },
    ],
  },
];

const ALL_ITEMS = SECTIONS.flatMap(s => s.items);
const TOTAL = ALL_ITEMS.length;

export default function AnnualTechCheckup() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() {
    setChecked(new Set());
  }

  const done = checked.size;
  const pct = Math.round((done / TOTAL) * 100);

  const statusColor = pct === 100 ? "text-green-700" : pct >= 50 ? "text-blue-700" : "text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Annual Tech Checkup Checklist | TekSure"
        description="A yearly tech maintenance checklist for seniors. Update passwords, back up devices, review privacy settings, and more — all in one place."
      />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Annual Tech Checkup</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Once a year, go through this checklist to keep your devices, accounts, and personal information in good shape.
          </p>
        </div>

        {/* Progress bar */}
        <Card className="mb-6">
          <CardContent className="py-4 px-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-lg font-semibold ${statusColor}`}>
                {done} of {TOTAL} tasks done
              </span>
              <span className={`text-2xl font-bold ${statusColor}`}>{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full transition-all duration-300 bg-blue-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            {pct === 100 && (
              <p className="text-green-700 font-semibold mt-2 text-center">
                Your annual tech checkup is complete!
              </p>
            )}
          </CardContent>
        </Card>

        {/* Sections */}
        {SECTIONS.map(section => {
          const sectionDone = section.items.filter(i => checked.has(i.id)).length;
          return (
            <Card key={section.label} className="mb-4">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className={`text-lg flex items-center justify-between ${section.color}`}>
                  <span>{section.label}</span>
                  <Badge variant="secondary" className="text-sm">
                    {sectionDone}/{section.items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="space-y-3">
                  {section.items.map(item => {
                    const isDone = checked.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                          isDone
                            ? "bg-green-50 border-green-200"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isDone
                            ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                            : <Circle className="h-5 w-5 text-gray-400" />}
                        </span>
                        <span>
                          <span className={`block text-sm font-semibold ${isDone ? "line-through text-gray-400" : "text-gray-900"}`}>
                            {item.task}
                          </span>
                          {!isDone && (
                            <span className="block text-sm text-gray-500 mt-0.5">{item.detail}</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Checklist
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Start Over
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Tip: Set a reminder each January (or on your birthday) to run through this checklist again.
        </p>
      </div>
    </div>
  );
}
