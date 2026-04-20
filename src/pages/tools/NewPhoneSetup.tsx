import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Smartphone, ArrowRight, ArrowLeft, RotateCcw, HelpCircle, CheckCircle, PartyPopper, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

type PhoneType = 'iphone' | 'android' | null;

interface SetupStep {
  title: string;
  instructions: string[];
  stuckTips: string[];
  link?: string;
  linkLabel?: string;
}

const iphoneSteps: SetupStep[] = [
  {
    title: 'Turn on your iPhone and choose your language',
    instructions: [
      'Press and hold the side button (the button on the right side of your phone) until you see the Apple logo.',
      'Wait for the "Hello" screen to appear. Swipe up or press the Home button.',
      'Choose your language (English) and your country (United States).',
    ],
    stuckTips: [
      'If the screen stays black, make sure the phone is charged. Plug it in and wait 15 minutes, then try again.',
      'If the phone is frozen, hold the side button and volume down button together for 10 seconds, then try again.',
    ],
  },
  {
    title: 'Connect to Wi-Fi',
    instructions: [
      'You will see a list of Wi-Fi networks. Tap the name of your home Wi-Fi network.',
      'Enter your Wi-Fi password carefully. Pay attention to capital letters and numbers.',
      'Tap "Join" and wait for the checkmark to appear next to your network name.',
    ],
    stuckTips: [
      'Your Wi-Fi password is usually on a sticker on the bottom or back of your internet router (the box from your internet company).',
      'If you do not see your network, make sure your router is plugged in and the lights are on.',
      'Wi-Fi passwords are case-sensitive, meaning capital and lowercase letters matter.',
    ],
  },
  {
    title: 'Set up Face ID (or Touch ID)',
    instructions: [
      'The phone will ask you to set up Face ID. This lets you unlock your phone by looking at it.',
      'Hold your phone 10-20 inches from your face and slowly move your head in a circle so the camera can see your whole face.',
      'You will do this twice. When the circle is complete, Face ID is ready.',
      'Next, create a 6-digit passcode as a backup. Choose something you will remember but that is not obvious (not 123456 or your birthday).',
    ],
    stuckTips: [
      'Remove glasses, hats, or masks during setup. You can add glasses later.',
      'Make sure you are in a well-lit area so the camera can see you clearly.',
      'If Face ID setup fails, you can skip it for now and set it up later in Settings > Face ID & Passcode.',
    ],
    link: 'https://support.apple.com/en-us/HT208109',
    linkLabel: 'Apple: Set up Face ID',
  },
  {
    title: 'Sign in with your Apple ID (or create one)',
    instructions: [
      'An Apple ID is your personal account for Apple services. It is an email address and password.',
      'If you already have an Apple ID: Enter your email and password.',
      'If you are new to iPhone: Tap "Forgot password or don\'t have an Apple ID?" then tap "Create a Free Apple ID."',
      'Follow the steps to enter your name, birthday, and create your Apple ID email and password.',
    ],
    stuckTips: [
      'If you had an iPhone before, your Apple ID is the email you used for the App Store or iCloud.',
      'Try signing in with every email address you use — one of them is probably your Apple ID.',
      'If you forgot your password, go to iforgot.apple.com on any computer to reset it.',
    ],
    link: 'https://support.apple.com/en-us/HT204316',
    linkLabel: 'Apple: Create an Apple ID',
  },
  {
    title: 'Set up iCloud',
    instructions: [
      'iCloud automatically backs up your photos, contacts, and settings to Apple\'s secure cloud storage.',
      'When asked, turn on iCloud. This means if your phone is ever lost or broken, you will not lose your photos and contacts.',
      'The phone comes with 5 GB of free iCloud storage. If you take a lot of photos, you may want to upgrade later (50 GB is $0.99 per month).',
    ],
    stuckTips: [
      'If you are not sure, turn iCloud on. It is free and protects your data automatically.',
      'You can change iCloud settings anytime in Settings > your name > iCloud.',
    ],
  },
  {
    title: 'Turn on Find My iPhone',
    instructions: [
      'Find My iPhone lets you locate your phone if it is lost or stolen.',
      'Go to Settings > tap your name at the top > Find My > Find My iPhone.',
      'Turn on "Find My iPhone", "Find My network", and "Send Last Location."',
      'This means if your phone is lost, you (or a family member) can find it on icloud.com or another Apple device.',
    ],
    stuckTips: [
      'If you already signed into iCloud in the previous step, Find My iPhone may already be on.',
      'To test it, go to icloud.com/find on any computer and sign in with your Apple ID.',
    ],
    link: 'https://support.apple.com/en-us/HT210400',
    linkLabel: 'Apple: Find My iPhone',
  },
  {
    title: 'Set up Emergency SOS and Medical ID',
    instructions: [
      'Emergency SOS lets you quickly call 911 by pressing the side button 5 times rapidly.',
      'Go to Settings > Emergency SOS and make sure "Call with 5 Button Presses" is turned on.',
      'Set up Medical ID: Open the Health app > tap your photo > Medical ID. Enter your blood type, allergies, medications, and emergency contacts.',
      'Turn on "Show When Locked" so paramedics can see your medical info even if your phone is locked.',
    ],
    stuckTips: [
      'You do not have to fill in every field in Medical ID. Even just adding an emergency contact and your allergies is helpful.',
      'Emergency SOS also works by holding the side button and either volume button for a few seconds.',
    ],
  },
  {
    title: 'Review privacy settings',
    instructions: [
      'Go to Settings > Privacy & Security.',
      'Location Services: Set to "While Using" for apps like Maps and Weather. Set to "Never" for apps that do not need your location.',
      'Turn off Tracking: Go to Settings > Privacy & Security > Tracking and turn off "Allow Apps to Request to Track."',
      'This means apps cannot follow your activity across other apps and websites.',
    ],
    stuckTips: [
      'When in doubt, set location to "Never" for an app. You can always turn it on later if the app asks for it.',
      'You can always come back and adjust these settings anytime.',
    ],
  },
  {
    title: 'Learn App Store basics',
    instructions: [
      'The App Store is where you download apps (programs) for your phone. Tap the blue icon with a white "A" on your home screen.',
      'Use the Search tab at the bottom to find apps by name (for example, search "Facebook" or "Gmail").',
      'Tap "Get" to download a free app, or the price button for paid apps. You may need to confirm with Face ID or your passcode.',
      'To delete an app: Press and hold its icon, then tap "Remove App" > "Delete App."',
    ],
    stuckTips: [
      'If you see "Open" instead of "Get," you already have that app downloaded.',
      'Only download apps from the App Store (not from websites). The App Store checks apps for safety.',
      'If the download is not starting, make sure you are connected to Wi-Fi.',
    ],
  },
  {
    title: 'Transfer data from your old phone (optional)',
    instructions: [
      'If you have an old iPhone: Place it next to your new iPhone during setup. A "Quick Start" screen should appear on the old phone. Follow the prompts to transfer everything automatically.',
      'If you have an old Android phone: Download the "Move to iOS" app on your Android phone from the Google Play Store. During iPhone setup, choose "Move Data from Android" and follow the steps.',
      'If you do not have your old phone, you can restore from an iCloud backup if you had one. The phone will offer this during setup.',
    ],
    stuckTips: [
      'Quick Start requires both phones to be near each other and connected to Wi-Fi.',
      'The transfer can take 30 minutes to a few hours depending on how much data you have. Keep both phones plugged in.',
      'If you do not see the Quick Start screen, make sure your old iPhone is on iOS 11 or later.',
    ],
    link: 'https://support.apple.com/en-us/HT210216',
    linkLabel: 'Apple: Transfer to new iPhone',
  },
];

const androidSteps: SetupStep[] = [
  {
    title: 'Turn on your phone and choose your language',
    instructions: [
      'Press and hold the power button (usually on the right side) until the screen lights up.',
      'Wait for the Welcome screen to appear.',
      'Choose your language (English - United States) and tap the arrow or "Start" button.',
    ],
    stuckTips: [
      'If the screen stays black, make sure the phone is charged. Plug it in and wait 15 minutes.',
      'The power button is usually on the right side of the phone. On some phones, it is at the top.',
    ],
  },
  {
    title: 'Connect to Wi-Fi',
    instructions: [
      'You will see a list of nearby Wi-Fi networks. Tap your home network name.',
      'Type in your Wi-Fi password. Be careful with capital letters and numbers — they matter.',
      'Tap "Connect" and wait for it to say "Connected" under your network name.',
    ],
    stuckTips: [
      'Your Wi-Fi password is usually on a sticker on the bottom or back of your internet router.',
      'If your network is not showing up, try moving closer to the router.',
      'Make sure you are typing the password exactly as it appears — capital and lowercase letters are different.',
    ],
  },
  {
    title: 'Sign in to your Google Account (or create one)',
    instructions: [
      'A Google Account gives you access to Gmail, the Play Store, Google Maps, YouTube, and more.',
      'If you already have Gmail: Enter your Gmail address and password.',
      'If you are new: Tap "Create account" and follow the steps to choose an email address and password.',
      'Agree to Google\'s terms of service when prompted.',
    ],
    stuckTips: [
      'If you have ever used Gmail, YouTube, or Google Maps, you already have a Google Account.',
      'Forgot your password? Go to accounts.google.com/signin/recovery on any computer.',
      'Your Google Account is how you will download apps and back up your phone.',
    ],
    link: 'https://support.google.com/accounts/answer/27441',
    linkLabel: 'Google: Create an account',
  },
  {
    title: 'Set up fingerprint or face unlock',
    instructions: [
      'The phone will ask you to set up a screen lock. Choose "Fingerprint" if your phone has a fingerprint sensor.',
      'Place your finger on the sensor (usually on the side, back, or under the screen) and lift it repeatedly until the setup is complete.',
      'Create a backup PIN in case the fingerprint does not work (for example, if your hands are wet).',
      'Choose a 6-digit PIN you will remember but that is not obvious.',
    ],
    stuckTips: [
      'The fingerprint sensor location varies by phone brand. The setup screen usually shows you where it is.',
      'Make sure your finger is clean and dry during setup for the best results.',
      'You can add multiple fingerprints (for example, both thumbs) in Settings > Security > Fingerprint after setup.',
    ],
  },
  {
    title: 'Turn on Find My Device',
    instructions: [
      'Find My Device lets you locate, lock, or erase your phone if it is lost or stolen.',
      'Go to Settings > Security > Find My Device and make sure it is turned on.',
      'Make sure Location is also turned on: Settings > Location > toggle it on.',
      'You can find your phone anytime at android.com/find from any computer.',
    ],
    stuckTips: [
      'Find My Device requires your phone to be signed into a Google Account and connected to the internet.',
      'Test it by going to android.com/find on a computer and signing in with the same Google Account.',
    ],
    link: 'https://support.google.com/android/answer/6160491',
    linkLabel: 'Google: Find My Device',
  },
  {
    title: 'Learn Google Play Store basics',
    instructions: [
      'The Play Store is where you download apps for your Android phone. Tap the colorful triangle icon.',
      'Use the search bar at the top to find apps by name (for example, "Facebook" or "WhatsApp").',
      'Tap "Install" to download a free app. Paid apps will show a price instead.',
      'To uninstall an app: Press and hold its icon on your home screen, then drag it to "Uninstall" or tap the X.',
    ],
    stuckTips: [
      'Only download apps from the Play Store (not from websites or text message links).',
      'If you see "Open" instead of "Install," the app is already on your phone.',
      'Read reviews before downloading apps from companies you do not recognize.',
    ],
  },
  {
    title: 'Review app permissions',
    instructions: [
      'Go to Settings > Privacy > Permission Manager.',
      'Review Camera, Microphone, and Location permissions.',
      'For each permission, you will see which apps have access. Remove access from apps that do not need it.',
      'When an app asks for permission in the future, choose "Only while using the app" instead of "Always" for location.',
    ],
    stuckTips: [
      'A flashlight app does not need access to your contacts or camera. If an app asks for permissions that do not make sense, deny them.',
      'You can always grant permission later if an app actually needs it to work.',
    ],
    link: 'https://support.google.com/android/answer/9431959',
    linkLabel: 'Google: App permissions',
  },
  {
    title: 'Set up battery-saving settings',
    instructions: [
      'Go to Settings > Battery.',
      'Turn on "Battery Saver" or "Adaptive Battery" — this helps your phone learn which apps you use most and limits battery drain from unused apps.',
      'Check which apps are using the most battery. If an app you rarely use is at the top, consider uninstalling it.',
      'Turn on the battery percentage in your status bar so you always know how much charge you have left.',
    ],
    stuckTips: [
      'Battery settings may look slightly different depending on your phone brand (Samsung, Google Pixel, etc.).',
      'For the best battery life: turn down screen brightness, use Wi-Fi instead of cellular data when possible, and close apps you are not using.',
    ],
  },
  {
    title: 'Transfer data from your old phone (optional)',
    instructions: [
      'From an old Android: During setup, you can connect both phones with a cable (usually included in the box) or use Google\'s built-in transfer tool. Follow the on-screen prompts.',
      'From an old iPhone: Download the "Switch to Android" app on your iPhone, or use Google Drive to back up your iPhone contacts and photos first.',
      'From no old phone: You can start fresh. Your Google Account will sync your contacts and calendar if you had one before.',
    ],
    stuckTips: [
      'The transfer cable is usually in the box your new phone came in. It may be USB-C to USB-C.',
      'Transfer can take 15 minutes to a few hours. Keep both phones plugged in during the process.',
      'If the cable transfer is not working, try the wireless option or use Google Drive to transfer contacts and photos.',
    ],
    link: 'https://support.google.com/android/answer/6193424',
    linkLabel: 'Google: Switch to a new Android',
  },
];

export default function NewPhoneSetup() {
  const [phoneType, setPhoneType] = useState<PhoneType>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [showStuck, setShowStuck] = useState(false);
  const [finished, setFinished] = useState(false);

  const steps = phoneType === 'iphone' ? iphoneSteps : phoneType === 'android' ? androidSteps : [];
  const step = steps[currentStep];
  const totalSteps = steps.length;
  const progressPercent = totalSteps > 0 ? Math.round(((currentStep + (completedSteps[currentStep] ? 1 : 0)) / totalSteps) * 100) : 0;

  const markComplete = () => {
    setCompletedSteps(prev => ({ ...prev, [currentStep]: true }));
    setShowStuck(false);
    if (currentStep + 1 >= totalSteps) {
      setFinished(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setShowStuck(false);
    }
  };

  const handleRestart = () => {
    setPhoneType(null);
    setCurrentStep(0);
    setCompletedSteps({});
    setShowStuck(false);
    setFinished(false);
  };

  return (
    <>
      <SEOHead
        title="New Phone Setup Guide — Step-by-Step for iPhone and Android | TekSure"
        description="Set up your new iPhone or Android phone with clear, step-by-step instructions. Covers Apple ID, Google Account, security, privacy, and transferring data from your old phone."
        path="/tools/new-phone-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'New Phone Setup' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">New Phone Setup Guide</h1>
            <p className="text-muted-foreground text-lg">
              Got a new phone? We will walk you through every step of setting it up — from turning it on for the first time to securing your privacy. One step at a time, at your own pace.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {!phoneType ? (
            <div>
              <h2 className="font-semibold text-lg mb-2">What kind of phone do you have?</h2>
              <p className="text-sm text-muted-foreground mb-6">This determines which setup instructions you will see.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setPhoneType('iphone')}
                  className="p-8 rounded-2xl border-2 border-border hover:border-primary transition-colors text-center min-h-[44px]"
                  aria-label="Set up an iPhone"
                >
                  <span className="text-4xl block mb-3" role="img" aria-label="Apple">&#x1F34E;</span>
                  <span className="font-semibold text-lg block mb-1">iPhone</span>
                  <span className="text-sm text-muted-foreground">Apple phone with the Apple logo</span>
                </button>
                <button
                  onClick={() => setPhoneType('android')}
                  className="p-8 rounded-2xl border-2 border-border hover:border-primary transition-colors text-center min-h-[44px]"
                  aria-label="Set up an Android phone"
                >
                  <span className="text-4xl block mb-3" role="img" aria-label="Android robot">&#x1F916;</span>
                  <span className="font-semibold text-lg block mb-1">Android</span>
                  <span className="text-sm text-muted-foreground">Samsung, Google Pixel, Motorola, or other</span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Not sure? Look at the back of your phone. If you see an Apple logo, it is an iPhone. Everything else is Android.</p>
            </div>
          ) : finished ? (
            <div className="text-center py-12">
              <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="h-10 w-10 text-green-600" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your phone is all set up!</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Congratulations! You have completed all the essential setup steps for your new {phoneType === 'iphone' ? 'iPhone' : 'Android phone'}. Here are some suggested next steps.
              </p>
              <div className="text-left space-y-3 max-w-md mx-auto mb-8">
                {[
                  'Download the apps you use most (email, social media, banking)',
                  'Set your favorite contacts as "Favorites" for quick access',
                  'Customize your wallpaper and home screen layout',
                  'Explore the camera — try taking a photo and a video',
                  'Set up your email account in the Mail or Gmail app',
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl border border-border bg-card">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity min-h-[44px]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start Over
              </button>
            </div>
          ) : step ? (
            <div>
              <div className="mb-6 p-4 rounded-2xl border border-border bg-card">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    {phoneType === 'iphone' ? 'iPhone' : 'Android'} Setup — Step {currentStep + 1} of {totalSteps}
                  </span>
                  <span className="font-medium">{progressPercent}%</span>
                </div>
                <Progress value={progressPercent} className="h-2" aria-label={`Setup progress: ${progressPercent} percent`} />
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex-shrink-0">{currentStep + 1}</span>
                    <h2 className="font-semibold text-lg">{step.title}</h2>
                  </div>

                  <ol className="space-y-3 mb-6">
                    {step.instructions.map((instruction, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span className="font-medium text-muted-foreground flex-shrink-0 w-5">{i + 1}.</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>

                  {step.link && (
                    <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1 mb-4">
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> {step.linkLabel}
                    </a>
                  )}
                </div>

                <div className="border-t border-border">
                  <button
                    onClick={() => setShowStuck(!showStuck)}
                    className="w-full p-4 flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors min-h-[44px]"
                    aria-expanded={showStuck}
                  >
                    <HelpCircle className="h-4 w-4" aria-hidden="true" />
                    I am stuck on this step
                    {showStuck
                      ? <ChevronUp className="h-4 w-4 ml-auto" aria-hidden="true" />
                      : <ChevronDown className="h-4 w-4 ml-auto" aria-hidden="true" />
                    }
                  </button>
                  {showStuck && (
                    <div className="px-5 pb-5 space-y-2">
                      {step.stuckTips.map((tip, i) => (
                        <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-3">
                <button
                  onClick={goBack}
                  disabled={currentStep === 0}
                  className="px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors disabled:opacity-30 min-h-[44px] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => { setPhoneType(null); setCurrentStep(0); setCompletedSteps({}); setFinished(false); }}
                    className="px-4 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors min-h-[44px]"
                  >
                    Change Phone
                  </button>
                  <button
                    onClick={markComplete}
                    className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center gap-2"
                  >
                    {currentStep + 1 >= totalSteps ? 'Finish Setup' : 'Done — Next Step'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
