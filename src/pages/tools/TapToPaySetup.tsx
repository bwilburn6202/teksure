import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, ShieldCheck } from 'lucide-react';

export default function TapToPaySetup() {
  const [tab, setTab] = useState<'apple' | 'google'>('apple');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Pay & Google Pay Setup — Tap to Pay With Your Phone | TekSure" description="Pay at the register by tapping your phone. Safer than swiping a card and works almost everywhere. Set it up in 5 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tap-to-Pay Setup</h1>
          <p className="text-lg text-muted-foreground">Pay at the register by tapping your phone. Safer than your card.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why tap-to-pay is safer</h2>
            <p className="text-sm">Your real card number is NEVER sent to the store. The phone sends a one-time code instead. Even if the store's computers are hacked, your card number doesn't leak. It's the safest way to pay.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('apple')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'apple' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 Apple Pay (iPhone)</button>
          <button onClick={() => setTab('google')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'google' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Google Pay (Android)</button>
        </div>

        {tab === 'apple' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Setting up Apple Pay</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open the <strong>Wallet</strong> app (black with cards).</li>
                <li>Tap the <strong>+</strong> button in the top right.</li>
                <li>Tap "Debit or Credit Card" → <strong>Continue</strong>.</li>
                <li>Use the camera to scan the front of your card, or type the card number by hand.</li>
                <li>Verify with your bank — usually a code by text. Some banks make you confirm in the bank's app.</li>
                <li>Done. Your card now lives in Wallet.</li>
              </ol>
              <h4 className="font-bold mt-4 mb-2">How to pay at the register</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Look for the contactless symbol on the card reader (looks like Wi-Fi waves on its side).</li>
                <li>Double-click the side button on iPhone.</li>
                <li>Look at the screen (Face ID) or put your finger on the home button (older iPhones).</li>
                <li>Hold the iPhone within 1-2 inches of the reader. You'll feel a buzz when it works.</li>
                <li>Done — no signature, no PIN.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'google' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Setting up Google Pay (now called "Google Wallet")</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Install <strong>Google Wallet</strong> from the Play Store (often pre-installed).</li>
                <li>Open it. Sign in with your Google account.</li>
                <li>Tap <strong>+ Add to Wallet</strong> → "Payment card".</li>
                <li>Scan the front of your card, or type the number.</li>
                <li>Confirm with your bank — usually a text code.</li>
                <li>Done. The card is in Google Wallet.</li>
              </ol>
              <h4 className="font-bold mt-4 mb-2">How to pay at the register</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Wake up your phone (no app needed).</li>
                <li>Hold the phone within 1-2 inches of the contactless reader.</li>
                <li>You may need to unlock first (PIN, Face, or fingerprint).</li>
                <li>Phone buzzes when it works.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">What works besides credit cards</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Debit cards</strong> — same way as credit.</li>
              <li><strong>Driver's license</strong> — in some states (Arizona, Maryland, Colorado, etc.) you can store a digital ID.</li>
              <li><strong>Boarding passes</strong> — most airlines support adding to Wallet.</li>
              <li><strong>Concert and movie tickets</strong> — most ticket apps offer "Add to Wallet".</li>
              <li><strong>Vaccine cards</strong> — many states issue digital versions.</li>
              <li><strong>Hotel keys, car keys</strong> — newer hotels and BMW/Mercedes offer these.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">If you lose your phone</h3>
                <p className="text-sm text-muted-foreground">Your cards are still safe. The phone needs your face or PIN to pay. To be extra sure, sign in to <strong>icloud.com/find</strong> (iPhone) or <strong>android.com/find</strong> and erase the device — your cards are removed from the phone immediately.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
