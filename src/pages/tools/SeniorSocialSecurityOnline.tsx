import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorSocialSecurityOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="my Social Security Account for Seniors — TekSure" description="How to set up and use your free my Social Security online account." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">my Social Security Online</h1>
          <p className="text-lg text-muted-foreground">Manage benefits without calling or visiting.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you can do</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>See your benefit amount</li><li>Get a 1099 for taxes</li><li>Change direct deposit</li><li>Update address</li><li>Get a benefit verification letter</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign up</h2><p>Visit ssa.gov/myaccount. Click &ldquo;Sign in or create an account.&rdquo; You&apos;ll use Login.gov.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Need to verify</h2><p>SSA verifies with your credit history. Have your last credit card or mortgage handy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Two-factor required</h2><p>Phone or email code every login. Adds protection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Replace SS card online</h2><p>Most states allow free replacement card requests through the account.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid scams</h2><p>SSA only contacts by mail. Never call back numbers from voicemails about &ldquo;suspended benefits.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print your annual statement every January for tax records.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
