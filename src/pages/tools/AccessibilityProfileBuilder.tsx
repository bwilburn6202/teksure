import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accessibility,
  Eye,
  Ear,
  Hand,
  Brain,
  Smartphone,
  Printer,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react';

type Vision = 'none' | 'low-vision' | 'blind' | 'color-blind' | 'light-sensitive';
type Hearing = 'none' | 'mild' | 'significant' | 'deaf' | 'hearing-aids';
type Motor = 'none' | 'arthritis' | 'tremor' | 'limited' | 'switch';
type Cognitive = 'none' | 'memory' | 'focus' | 'learning';
type Device = 'iphone' | 'android-phone' | 'ipad' | 'android-tablet' | 'mac' | 'windows' | 'chromebook' | 'apple-watch' | 'smart-speaker';

interface Feature {
  name: string;
  path: string;
  why: string;
  forNeeds: Array<Vision | Hearing | Motor | Cognitive>;
}

type DeviceFeatures = Record<Device, { label: string; features: Feature[] }>;

const DEVICE_FEATURES: DeviceFeatures = {
  iphone: {
    label: 'iPhone',
    features: [
      { name: 'Display & Text Size — Larger Text', path: 'Settings → Accessibility → Display & Text Size → Larger Text', why: 'Makes text across all apps larger and easier to read', forNeeds: ['low-vision'] },
      { name: 'Display & Text Size — Bold Text', path: 'Settings → Accessibility → Display & Text Size → Bold Text', why: 'Thicker letters that are easier to see', forNeeds: ['low-vision'] },
      { name: 'Display & Text Size — Increase Contrast', path: 'Settings → Accessibility → Display & Text Size → Increase Contrast', why: 'Makes foreground text stand out more clearly against backgrounds', forNeeds: ['low-vision', 'light-sensitive'] },
      { name: 'Display & Text Size — Smart Invert', path: 'Settings → Accessibility → Display & Text Size → Smart Invert', why: 'Dark mode that keeps photos looking normal — easier on sensitive eyes', forNeeds: ['light-sensitive', 'low-vision'] },
      { name: 'Zoom', path: 'Settings → Accessibility → Zoom → On', why: 'Three-finger double tap zooms in anywhere on the screen', forNeeds: ['low-vision'] },
      { name: 'VoiceOver', path: 'Settings → Accessibility → VoiceOver → On', why: 'Reads everything on the screen aloud so you can use the phone without sight', forNeeds: ['blind'] },
      { name: 'Spoken Content — Speak Screen', path: 'Settings → Accessibility → Spoken Content → Speak Screen → On', why: 'Swipe two fingers down from the top of the screen to hear the whole page read aloud', forNeeds: ['low-vision', 'blind', 'learning'] },
      { name: 'Color Filters', path: 'Settings → Accessibility → Display & Text Size → Color Filters', why: 'Adjusts colors for red-green, blue-yellow, or grayscale needs', forNeeds: ['color-blind'] },
      { name: 'Reduce White Point', path: 'Settings → Accessibility → Display & Text Size → Reduce White Point', why: 'Dims the brightest whites — helps with light sensitivity and headaches', forNeeds: ['light-sensitive'] },
      { name: 'Hearing Devices (Made for iPhone hearing aids)', path: 'Settings → Accessibility → Hearing Devices', why: 'Pairs your hearing aids directly to your iPhone, routing calls and audio through them', forNeeds: ['hearing-aids'] },
      { name: 'Live Captions', path: 'Settings → Accessibility → Live Captions → On', why: 'Instantly captions any audio playing on your iPhone, including phone calls', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Sound Recognition', path: 'Settings → Accessibility → Sound Recognition', why: 'Alerts you visually when important sounds (doorbell, alarm, baby) happen', forNeeds: ['significant', 'deaf'] },
      { name: 'RTT / TTY Relay', path: 'Settings → Accessibility → RTT/TTY', why: 'Real-time text during phone calls — type what you want to say instead of speaking', forNeeds: ['deaf', 'significant'] },
      { name: 'Mono Audio', path: 'Settings → Accessibility → Audio & Visual → Mono Audio', why: 'Plays both audio channels in both ears — helpful if hearing is uneven', forNeeds: ['mild', 'significant'] },
      { name: 'AssistiveTouch', path: 'Settings → Accessibility → Touch → AssistiveTouch → On', why: 'Floating on-screen button for tricky gestures like pinch, rotate, or shake', forNeeds: ['arthritis', 'tremor', 'limited'] },
      { name: 'Touch Accommodations — Hold Duration', path: 'Settings → Accessibility → Touch → Touch Accommodations → Hold Duration', why: 'Requires you to hold longer before a touch registers — prevents accidental taps from tremor', forNeeds: ['tremor', 'arthritis'] },
      { name: 'Back Tap', path: 'Settings → Accessibility → Touch → Back Tap', why: 'Tap the back of the phone twice or three times to run a shortcut — no reaching for small buttons', forNeeds: ['arthritis', 'limited'] },
      { name: 'Voice Control', path: 'Settings → Accessibility → Voice Control → On', why: 'Navigate your entire phone using only your voice', forNeeds: ['limited', 'switch'] },
      { name: 'Switch Control', path: 'Settings → Accessibility → Switch Control', why: 'Control your phone with an external switch device', forNeeds: ['switch'] },
      { name: 'Guided Access', path: 'Settings → Accessibility → Guided Access → On', why: 'Locks you into one app and disables parts of the screen — helps with focus and prevents getting lost', forNeeds: ['focus', 'memory'] },
      { name: 'Reduce Motion', path: 'Settings → Accessibility → Motion → Reduce Motion', why: 'Turns off sliding animations that can cause dizziness or confusion', forNeeds: ['focus', 'light-sensitive'] },
    ],
  },
  'android-phone': {
    label: 'Android phone',
    features: [
      { name: 'Font Size', path: 'Settings → Display → Font size → Large', why: 'Makes text across the phone bigger', forNeeds: ['low-vision'] },
      { name: 'Display Size', path: 'Settings → Display → Display size → Larger', why: 'Makes everything on screen — icons, buttons, images — bigger', forNeeds: ['low-vision'] },
      { name: 'High Contrast Text', path: 'Settings → Accessibility → High contrast text', why: 'Adds outlines around text so it stands out from backgrounds', forNeeds: ['low-vision'] },
      { name: 'Magnification', path: 'Settings → Accessibility → Magnification → On', why: 'Triple-tap anywhere to zoom in', forNeeds: ['low-vision'] },
      { name: 'TalkBack', path: 'Settings → Accessibility → TalkBack → On', why: 'Reads everything on screen aloud — lets you use the phone without sight', forNeeds: ['blind'] },
      { name: 'Color Correction', path: 'Settings → Accessibility → Color correction', why: 'Adjusts colors for red-green or blue-yellow color blindness', forNeeds: ['color-blind'] },
      { name: 'Select to Speak', path: 'Settings → Accessibility → Select to Speak → On', why: 'Tap a button and then tap any text to hear it read aloud', forNeeds: ['low-vision', 'learning'] },
      { name: 'Extra Dim', path: 'Settings → Display → Extra dim', why: 'Dims the screen below the normal minimum — for bright-light sensitivity', forNeeds: ['light-sensitive'] },
      { name: 'Live Caption', path: 'Media volume popup → caption icon', why: 'Automatic captions on any audio or video playing on your phone', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Sound Notifications', path: 'Settings → Accessibility → Sound Notifications', why: 'Alerts you to important sounds in your environment (doorbell, alarm)', forNeeds: ['significant', 'deaf'] },
      { name: 'Hearing aids (ASHA)', path: 'Settings → Connected devices → Pair new device', why: 'Pairs modern hearing aids directly to your Android phone', forNeeds: ['hearing-aids'] },
      { name: 'Mono audio', path: 'Settings → Accessibility → Audio adjustment → Mono audio', why: 'Plays both audio channels in both ears', forNeeds: ['mild', 'significant'] },
      { name: 'Action Block / Voice Access', path: 'Settings → Accessibility → Voice Access → On', why: 'Full phone control by voice', forNeeds: ['limited', 'switch'] },
      { name: 'Touch & hold delay', path: 'Settings → Accessibility → Touch & hold delay → Long', why: 'Gives you more time before a tap registers as a press-and-hold', forNeeds: ['tremor', 'arthritis'] },
      { name: 'Switch Access', path: 'Settings → Accessibility → Switch Access', why: 'Use an external switch to control your phone', forNeeds: ['switch'] },
      { name: 'Remove animations', path: 'Settings → Accessibility → Remove animations', why: 'Gets rid of slides and fades that can confuse or cause dizziness', forNeeds: ['focus', 'light-sensitive'] },
    ],
  },
  ipad: {
    label: 'iPad',
    features: [
      { name: 'Display & Text Size — Larger Text', path: 'Settings → Accessibility → Display & Text Size → Larger Text', why: 'Bigger text across the whole iPad', forNeeds: ['low-vision'] },
      { name: 'Zoom', path: 'Settings → Accessibility → Zoom → On', why: 'Three-finger double tap to zoom in anywhere', forNeeds: ['low-vision'] },
      { name: 'VoiceOver', path: 'Settings → Accessibility → VoiceOver → On', why: 'Full screen reader for using the iPad without sight', forNeeds: ['blind'] },
      { name: 'Live Captions', path: 'Settings → Accessibility → Live Captions → On', why: 'Real-time captions for any audio, including FaceTime', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'AssistiveTouch', path: 'Settings → Accessibility → Touch → AssistiveTouch', why: 'On-screen helper for tricky gestures', forNeeds: ['arthritis', 'tremor', 'limited'] },
      { name: 'Voice Control', path: 'Settings → Accessibility → Voice Control → On', why: 'Run the entire iPad with just your voice', forNeeds: ['limited', 'switch'] },
      { name: 'Guided Access', path: 'Settings → Accessibility → Guided Access → On', why: 'Lock into one app to reduce distraction and confusion', forNeeds: ['focus', 'memory'] },
    ],
  },
  'android-tablet': {
    label: 'Android tablet',
    features: [
      { name: 'Font & Display Size', path: 'Settings → Display → Font size and Display size', why: 'Make text and everything bigger', forNeeds: ['low-vision'] },
      { name: 'TalkBack', path: 'Settings → Accessibility → TalkBack', why: 'Screen reader for use without sight', forNeeds: ['blind'] },
      { name: 'Live Caption', path: 'Media volume → caption button', why: 'Automatic captions on any audio or video', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Voice Access', path: 'Settings → Accessibility → Voice Access', why: 'Voice control for the whole tablet', forNeeds: ['limited', 'switch'] },
    ],
  },
  mac: {
    label: 'Mac',
    features: [
      { name: 'Zoom', path: 'System Settings → Accessibility → Zoom → Use keyboard shortcuts', why: 'Option+Cmd+= zooms in on anything on screen', forNeeds: ['low-vision'] },
      { name: 'Display — Larger Text', path: 'System Settings → Appearance → Text size', why: 'Bigger text across the system', forNeeds: ['low-vision'] },
      { name: 'Increase contrast', path: 'System Settings → Accessibility → Display → Increase contrast', why: 'Higher contrast makes text easier to see', forNeeds: ['low-vision'] },
      { name: 'VoiceOver', path: 'System Settings → Accessibility → VoiceOver → On (Cmd+F5)', why: 'Full screen reader for Mac', forNeeds: ['blind'] },
      { name: 'Color filters', path: 'System Settings → Accessibility → Display → Color filters', why: 'Adjust colors for color blindness', forNeeds: ['color-blind'] },
      { name: 'Reduce transparency', path: 'System Settings → Accessibility → Display → Reduce transparency', why: 'Makes menus and sidebars opaque — easier to read', forNeeds: ['low-vision', 'light-sensitive'] },
      { name: 'Live Captions', path: 'System Settings → Accessibility → Live Captions', why: 'Captions any audio playing on your Mac, including video calls', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Voice Control', path: 'System Settings → Accessibility → Voice Control → On', why: 'Operate the whole Mac by voice', forNeeds: ['limited', 'switch'] },
      { name: 'Slow Keys', path: 'System Settings → Accessibility → Keyboard → Slow Keys', why: 'Requires you to hold a key a little longer — prevents accidental keypresses from tremor', forNeeds: ['tremor', 'arthritis'] },
      { name: 'Sticky Keys', path: 'System Settings → Accessibility → Keyboard → Sticky Keys', why: 'Lets you press one key at a time for shortcuts like Cmd+C instead of holding them together', forNeeds: ['arthritis', 'limited'] },
    ],
  },
  windows: {
    label: 'Windows PC',
    features: [
      { name: 'Text size', path: 'Settings → Accessibility → Text size → Drag slider larger', why: 'Makes all text on your PC bigger', forNeeds: ['low-vision'] },
      { name: 'Magnifier', path: 'Settings → Accessibility → Magnifier → On (Windows key + Plus)', why: 'Zooms in anywhere on screen', forNeeds: ['low-vision'] },
      { name: 'High Contrast Themes', path: 'Settings → Accessibility → Contrast themes', why: 'Bold colors that stand out sharply against dark backgrounds', forNeeds: ['low-vision'] },
      { name: 'Narrator', path: 'Settings → Accessibility → Narrator → On (Ctrl + Win + Enter)', why: 'Built-in Windows screen reader', forNeeds: ['blind'] },
      { name: 'Color filters', path: 'Settings → Accessibility → Color filters', why: 'Adjust for color blindness', forNeeds: ['color-blind'] },
      { name: 'Live captions', path: 'Settings → Accessibility → Captions → Live captions', why: 'Auto-captions for any audio on your PC', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Mono audio', path: 'Settings → Accessibility → Audio → Mono audio', why: 'Plays both channels through both speakers', forNeeds: ['mild', 'significant'] },
      { name: 'Voice access', path: 'Settings → Accessibility → Speech → Voice access', why: 'Full PC control by voice', forNeeds: ['limited', 'switch'] },
      { name: 'Sticky Keys / Filter Keys', path: 'Settings → Accessibility → Keyboard', why: 'Makes keyboard shortcuts easier and filters out repeated keys', forNeeds: ['arthritis', 'tremor', 'limited'] },
      { name: 'Mouse pointer size & color', path: 'Settings → Accessibility → Mouse pointer and touch', why: 'Makes the cursor bigger and a brighter color so you can track it', forNeeds: ['low-vision'] },
    ],
  },
  chromebook: {
    label: 'Chromebook',
    features: [
      { name: 'Display size', path: 'Settings → Device → Displays → Display size', why: 'Everything bigger on screen', forNeeds: ['low-vision'] },
      { name: 'ChromeVox', path: 'Settings → Accessibility → ChromeVox (Ctrl + Alt + Z)', why: 'Built-in screen reader for Chromebook', forNeeds: ['blind'] },
      { name: 'Screen magnifier', path: 'Settings → Accessibility → Display and magnification → Screen magnifier', why: 'Zooms in on part of the screen', forNeeds: ['low-vision'] },
      { name: 'High contrast', path: 'Settings → Accessibility → Display and magnification → Use high contrast mode', why: 'Inverts colors for easier reading', forNeeds: ['low-vision'] },
      { name: 'Select-to-speak', path: 'Settings → Accessibility → Text-to-Speech → Select-to-speak', why: 'Highlight any text and hear it read aloud', forNeeds: ['low-vision', 'learning'] },
      { name: 'Live Caption', path: 'Settings → Accessibility → Audio and captions → Live Caption', why: 'Captions for any audio on the Chromebook', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Dictation', path: 'Settings → Accessibility → Keyboard → Enable dictation', why: 'Type by speaking instead of using the keyboard', forNeeds: ['arthritis', 'limited'] },
    ],
  },
  'apple-watch': {
    label: 'Apple Watch',
    features: [
      { name: 'Larger text', path: 'On iPhone: Watch app → Accessibility → Larger Text', why: 'Bigger text on the tiny screen', forNeeds: ['low-vision'] },
      { name: 'VoiceOver', path: 'Watch app → Accessibility → VoiceOver', why: 'Screen reader on the watch', forNeeds: ['blind'] },
      { name: 'AssistiveTouch with hand gestures', path: 'Watch app → Accessibility → AssistiveTouch', why: 'Control your watch with one hand using pinches and clenches', forNeeds: ['limited', 'arthritis'] },
      { name: 'Fall Detection', path: 'Watch app → Emergency SOS → Fall Detection', why: 'Watch calls for help if you fall and do not respond', forNeeds: ['limited', 'memory'] },
      { name: 'Medication reminders', path: 'Health app → Browse → Medications', why: 'Taps your wrist to remind you to take medication', forNeeds: ['memory'] },
    ],
  },
  'smart-speaker': {
    label: 'Smart speaker',
    features: [
      { name: 'Slower speech rate', path: 'Alexa: Settings → Accessibility. Google: Assistant settings → Preferred speed', why: 'The speaker talks more slowly and clearly', forNeeds: ['learning', 'mild'] },
      { name: 'Visual captions (on Echo Show or Nest Hub)', path: 'Alexa: Settings → Accessibility → Captioning. Google: Display settings → Subtitles', why: 'See captions of what the assistant is saying', forNeeds: ['mild', 'significant', 'deaf'] },
      { name: 'Routines for reminders', path: 'Alexa or Google Home app → Routines', why: 'Have the speaker remind you daily about medication, appointments, or bedtime', forNeeds: ['memory', 'focus'] },
    ],
  },
};

const VISION_OPTIONS: Array<{ value: Vision; label: string }> = [
  { value: 'none', label: 'No vision issues' },
  { value: 'low-vision', label: 'Low vision' },
  { value: 'blind', label: 'Blindness' },
  { value: 'color-blind', label: 'Color blindness' },
  { value: 'light-sensitive', label: 'Sensitivity to bright screens' },
];
const HEARING_OPTIONS: Array<{ value: Hearing; label: string }> = [
  { value: 'none', label: 'No hearing issues' },
  { value: 'mild', label: 'Some hearing loss' },
  { value: 'significant', label: 'Significant hearing loss' },
  { value: 'deaf', label: 'Deafness' },
  { value: 'hearing-aids', label: 'I wear hearing aids' },
];
const MOTOR_OPTIONS: Array<{ value: Motor; label: string }> = [
  { value: 'none', label: 'No motor issues' },
  { value: 'arthritis', label: 'Arthritis' },
  { value: 'tremor', label: 'Tremor' },
  { value: 'limited', label: 'Limited mobility' },
  { value: 'switch', label: 'I use a switch device' },
];
const COGNITIVE_OPTIONS: Array<{ value: Cognitive; label: string }> = [
  { value: 'none', label: 'No cognitive concerns' },
  { value: 'memory', label: 'Memory concerns' },
  { value: 'focus', label: 'Focus challenges' },
  { value: 'learning', label: 'Learning difference' },
];
const DEVICE_OPTIONS: Array<{ value: Device; label: string }> = [
  { value: 'iphone', label: 'iPhone' },
  { value: 'android-phone', label: 'Android phone' },
  { value: 'ipad', label: 'iPad' },
  { value: 'android-tablet', label: 'Android tablet' },
  { value: 'mac', label: 'Mac' },
  { value: 'windows', label: 'Windows PC' },
  { value: 'chromebook', label: 'Chromebook' },
  { value: 'apple-watch', label: 'Apple Watch' },
  { value: 'smart-speaker', label: 'Smart speaker (Alexa/Google)' },
];

export default function AccessibilityProfileBuilder() {
  const [step, setStep] = useState(0);
  const [vision, setVision] = useState<Vision[]>([]);
  const [hearing, setHearing] = useState<Hearing[]>([]);
  const [motor, setMotor] = useState<Motor[]>([]);
  const [cognitive, setCognitive] = useState<Cognitive[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);

  const toggle = <T,>(list: T[], value: T, setter: (v: T[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter((x) => x !== value));
    } else {
      setter([...list, value]);
    }
  };

  const reset = () => {
    setStep(0);
    setVision([]);
    setHearing([]);
    setMotor([]);
    setCognitive([]);
    setDevices([]);
  };

  const allNeeds = [...vision, ...hearing, ...motor, ...cognitive];

  const plan = devices.map((d) => {
    const deviceInfo = DEVICE_FEATURES[d];
    const relevantFeatures = deviceInfo.features.filter((f) =>
      f.forNeeds.some((n) => allNeeds.includes(n))
    );
    return { device: d, label: deviceInfo.label, features: relevantFeatures };
  });

  const steps = [
    {
      title: 'Your vision',
      icon: Eye,
      prompt: 'Do you have any of the following vision needs? Check all that apply.',
      options: VISION_OPTIONS,
      selected: vision,
      onToggle: (v: string) => toggle(vision, v as Vision, setVision),
    },
    {
      title: 'Your hearing',
      icon: Ear,
      prompt: 'Do you have any hearing needs? Check all that apply.',
      options: HEARING_OPTIONS,
      selected: hearing,
      onToggle: (v: string) => toggle(hearing, v as Hearing, setHearing),
    },
    {
      title: 'Motor and dexterity',
      icon: Hand,
      prompt: 'Any motor or dexterity needs? Check all that apply.',
      options: MOTOR_OPTIONS,
      selected: motor,
      onToggle: (v: string) => toggle(motor, v as Motor, setMotor),
    },
    {
      title: 'Memory, focus, and learning',
      icon: Brain,
      prompt: 'Any memory, focus, or learning needs? Check all that apply.',
      options: COGNITIVE_OPTIONS,
      selected: cognitive,
      onToggle: (v: string) => toggle(cognitive, v as Cognitive, setCognitive),
    },
    {
      title: 'Your devices',
      icon: Smartphone,
      prompt: 'Which devices do you use? Check all that apply — we will build instructions for each one.',
      options: DEVICE_OPTIONS,
      selected: devices,
      onToggle: (v: string) => toggle(devices, v as Device, setDevices),
    },
  ];

  const isResults = step >= steps.length;
  const currentStep = steps[step];
  const StepIcon = currentStep?.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Accessibility Profile Builder — Set Up Every Device at Once | TekSure"
        description="Build a personalized accessibility plan. Tell us about your vision, hearing, motor, and memory needs — we'll show you every setting to turn on across your iPhone, Android, Mac, PC, and more."
      />
      <Navbar />

      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Accessibility Profile Builder' }]} />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Accessibility className="h-4 w-4" />
              Your personal accessibility setup
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Tell Us About You. We'll Show You How to Set Up Every Device.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Answer 5 short questions. We will build a personalized plan with the exact settings
              path for every feature on every device you use.
            </p>
          </div>
        </section>

        {/* Wizard */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            {!isResults && currentStep && (
              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  {StepIcon && <StepIcon className="h-6 w-6 text-primary" />}
                  <h2 className="text-2xl font-bold">{currentStep.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{currentStep.prompt}</p>

                <div className="space-y-2">
                  {currentStep.options.map((opt) => {
                    const selected = (currentStep.selected as string[]).includes(opt.value);
                    return (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          selected ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                        }`}
                      >
                        <Checkbox
                          checked={selected}
                          onCheckedChange={() => currentStep.onToggle(opt.value)}
                        />
                        <span className="text-base">{opt.label}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </Button>
                  <Button onClick={() => setStep(step + 1)} className="gap-2">
                    {step === steps.length - 1 ? 'Build my profile' : 'Next'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {isResults && (
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                    <h2 className="text-2xl font-bold">Your Accessibility Profile</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Based on what you told us, here is the exact setup for each of your devices.
                    Print this page and keep it with you as you go through settings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {allNeeds.filter(n => n !== 'none').length === 0 && (
                      <Badge variant="outline">No specific needs selected</Badge>
                    )}
                    {[...vision, ...hearing, ...motor, ...cognitive].filter(n => n !== 'none').map((n) => (
                      <Badge key={n} variant="secondary">{n}</Badge>
                    ))}
                  </div>
                </div>

                {plan.length === 0 && (
                  <div className="bg-card border rounded-xl p-6 text-center">
                    <p className="text-muted-foreground">
                      No devices selected. Go back and pick at least one device to see recommendations.
                    </p>
                  </div>
                )}

                {plan.map(({ device, label, features }) => (
                  <div key={device} className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      On your {label}
                    </h3>
                    {features.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        We did not find features for your specific needs on this device yet. Check
                        our <Link to="/accessibility" className="text-primary underline">Accessibility Hub</Link> for
                        more options.
                      </p>
                    ) : (
                      <ul className="space-y-5">
                        {features.map((f) => (
                          <li key={f.name} className="border-l-4 border-primary pl-4">
                            <div className="font-semibold">{f.name}</div>
                            <div className="text-sm font-mono bg-muted/50 rounded px-2 py-1 inline-block mt-1 mb-2">
                              {f.path}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{f.why}</p>
                            <label className="flex items-center gap-2 text-sm">
                              <Checkbox />
                              <span>I tried this — did it help?</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center space-y-3">
                  <HeartHandshake className="h-10 w-10 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Want deeper guides?</h3>
                  <p className="text-muted-foreground">
                    Our Accessibility Hub has step-by-step walkthroughs for every feature above.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/accessibility">Visit Accessibility Hub</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Button onClick={() => window.print()} variant="outline" className="gap-2">
                    <Printer className="h-4 w-4" />
                    Print my profile
                  </Button>
                  <Button onClick={reset} variant="outline">
                    Start over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
