import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText, Heart } from 'lucide-react';

export default function DigitalLegacySetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Legacy Contact Setup — What Happens to Your Accounts | TekSure" description="Photos, emails, and accounts shouldn't disappear when you do. Set up Apple Legacy Contact, Google Inactive Account, and Facebook Memorial in 30 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScrollText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Legacy Setup</h1>
          <p className="text-lg text-muted-foreground">A gift to your family. 30 minutes today saves them weeks later.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Heart className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Why this matters</h2>
                <p className="text-sm">When someone dies, their photos, emails, and Facebook posts often get locked behind passwords no one knows. Apple, Google, and Facebook now let you pre-name a "legacy contact" — a family member who can access (or memorialize) your accounts after you're gone.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🍎 Apple Legacy Contact</h2>
            <p className="text-sm mb-3">Lets a family member access your iCloud photos, notes, contacts, and messages after you pass.</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>On iPhone: Settings → tap your name at top → <strong>Sign-In & Security</strong>.</li>
              <li>Tap <strong>Legacy Contact</strong>.</li>
              <li>Tap <strong>Add Legacy Contact</strong> → pick a person from your contacts (must have an Apple ID).</li>
              <li>Apple generates an "access key" — a long code. Send it to them now (Messages, AirDrop, or print it).</li>
              <li>Print a backup of the access key and tell your family where to find it (with your will, ideally).</li>
              <li>Pick more than one contact if you can.</li>
            </ol>
            <p className="text-sm mt-3">After you pass, that person uses the access key + a death certificate at Apple's website to unlock your account.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📧 Google Inactive Account Manager</h2>
            <p className="text-sm mb-3">Tells Google what to do if you don't sign in for a chosen length of time (3, 6, 12, or 18 months).</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <a href="https://myaccount.google.com/inactive" target="_blank" rel="noopener noreferrer" className="text-primary underline">myaccount.google.com/inactive</a>.</li>
              <li>Sign in. Click "Start".</li>
              <li>Choose how long Google should wait before considering you inactive (most people pick 12 months).</li>
              <li>Add up to 10 trusted contacts. Pick one or two close family members.</li>
              <li>Choose what each gets access to: emails, photos, drive, calendar.</li>
              <li>Optionally set Gmail to auto-reply when you become inactive ("Sorry, this account is no longer in use…").</li>
              <li>Decide if you want Google to delete the account after this — many people leave that off.</li>
              <li>Save.</li>
            </ol>
            <p className="text-sm mt-3">If you don't sign in for the period you chose, Google emails your contacts with a download link.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">👥 Facebook Legacy Contact</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Facebook → tap your photo → <strong>Settings & privacy</strong> → <strong>Settings</strong>.</li>
              <li>Search for "Legacy Contact" or find it under Personal and account information.</li>
              <li>Pick one Facebook friend to manage your memorialized account.</li>
              <li>Choose if they can download a copy of your data and posts.</li>
            </ol>
            <p className="text-sm mt-3">After you pass, your account is "memorialized" — friends can post tributes, but no one can log in. Your legacy contact can pin a final post and update your photo.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🔑 Other accounts to think about</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Password manager</strong> — most (1Password, Bitwarden) have an "Emergency Access" feature where one designated family member can request access after a waiting period.</li>
              <li><strong>Bank, brokerage, retirement</strong> — make sure each has a beneficiary listed. Login info goes in your will or a sealed envelope with your attorney.</li>
              <li><strong>Email-based two-factor</strong> — make sure your legacy contact will be able to access your phone number and primary email, or two-factor will lock them out.</li>
              <li><strong>Photo cloud (iCloud, Google Photos, Amazon Photos)</strong> — a legacy contact covers iCloud and Google. For Amazon, currently no legacy program — store backup copies elsewhere.</li>
              <li><strong>Subscriptions</strong> — keep a list of monthly subscriptions so family can cancel them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don't forget the paper</h3>
            <p className="text-sm text-muted-foreground">Write down your phone passcode, computer password, and the names of the people you've set up as legacy contacts. Put it in a sealed envelope with your will, or somewhere your spouse and adult children know to look. Update once a year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
