import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, AlertTriangle } from 'lucide-react';

type Section = 'lighting' | 'audio' | 'camera' | 'manners';

interface Topic {
  name: string;
  whoFor: string;
  steps: string[];
  features: string[];
}

const TOPICS: Record<Section, Topic> = {
  'lighting': {
    name: 'Lighting',
    whoFor: 'Anyone who looks washed out, shadowy, or like a silhouette on video calls.',
    steps: [
      'Sit so a window is IN FRONT of you, not behind. Daylight on your face is the best free lighting.',
      'If no window faces you, point a desk lamp at the wall behind your screen — bounced light is softer than direct.',
      'Close blinds behind you. A bright window at your back turns you into a black shape.',
      'Avoid overhead-only lighting. A single ceiling bulb casts harsh shadows under the eyes.',
      'Test by opening the camera app. Move the lamp around until your face looks even.',
    ],
    features: [
      'Daylight from a north-facing window stays even all day — no harsh midday shadows.',
      'A $15 ring light clipped to the laptop fixes most problems in one purchase.',
      'Two small lamps (one each side of the screen) beat one bright lamp every time.',
      'Warm white bulbs (2700K) flatter skin tones more than cool blue daylight bulbs.',
    ],
  },
  'audio': {
    name: 'Audio',
    whoFor: 'Anyone whose family says "you sound like you are in a tunnel" or "we keep hearing an echo".',
    steps: [
      'Wear headphones or earbuds. They remove the echo loop that happens when the speaker feeds back into the microphone.',
      'Wired earbuds with a built-in mic (the ones that came with an old phone) work great — no battery, no pairing.',
      'If using AirPods or Bluetooth earbuds, charge them before the call.',
      'Sit in a room with soft things — a rug, curtains, a couch. Bare kitchens and bathrooms echo badly.',
      'Close the window if there is traffic, lawnmowers, or barking dogs nearby.',
    ],
    features: [
      'Headphones double as privacy — only you hear the other person.',
      'A $25 USB microphone (Fifine K669 or similar) makes you sound like a podcaster.',
      'Most laptops have a built-in noise-cancel setting: System Settings → Sound → input. Turn it on.',
      'Mute yourself with the spacebar in Zoom (hold to talk, release to mute).',
    ],
  },
  'camera': {
    name: 'Camera angle',
    whoFor: 'Anyone whose grandkids see mostly the ceiling, the top of the head, or up the nose.',
    steps: [
      'Raise the laptop or tablet so the camera sits at EYE LEVEL. A stack of books works fine.',
      'Sit about an arm’s length from the screen. Closer than that, and you fill the whole frame.',
      'Look at the CAMERA (the little dot at the top of the screen) when speaking, not at the face on screen. It feels like real eye contact to the other person.',
      'Pick a neutral background — a plain wall, a bookshelf, a tidy corner. Nothing private behind you.',
      'If the room is messy, turn on a virtual background: Zoom and FaceTime both have one. Solid color or a calm image works best.',
    ],
    features: [
      'Eye-level camera is the single biggest improvement most people can make.',
      'Virtual backgrounds hide a messy room without cleaning it.',
      'Tablets prop up easier than laptops — the kickstand case is worth $20.',
      'Avoid sitting in front of bright art or busy wallpaper — it pulls the eye away from your face.',
    ],
  },
  'manners': {
    name: 'Call manners',
    whoFor: 'Anyone new to video calls or wanting to be a more thoughtful guest on group calls.',
    steps: [
      'Mute yourself when not talking. Background sounds — typing, breathing, the TV — distract everyone.',
      'On group calls, wait a beat before speaking. Video has a tiny delay, so people can talk over each other.',
      'Use the "raise hand" button on Zoom or Teams instead of cutting in.',
      'End the call gracefully — say "It was lovely to see you" before clicking the red button. Do not vanish mid-sentence.',
      'On a doctor or work call, dress as you would in person from the waist up.',
    ],
    features: [
      'A short "thanks, talk soon" wrap-up makes calls feel finished, not cut off.',
      'Chat box is great for sharing links without interrupting the talker.',
      'Most apps show who is talking with a green or yellow box around them — handy on big group calls.',
      'If you need to step away, mute AND turn off the camera. Coming back is one click.',
    ],
  },
};

const QUICK_FIXES = [
  {
    title: 'I look terrible on camera',
    detail: 'Two-step rescue: (1) move so a window is in front of you, not behind. (2) Add a desk lamp pointed at the wall behind the screen. Daylight + bounced lamp light fixes 90% of bad-on-camera problems.',
  },
  {
    title: 'I sound muffled or echoey',
    detail: 'Put on headphones or earbuds. The echo is your speaker feeding back into the mic. Wired earbuds from an old phone work fine — no Bluetooth setup needed.',
  },
  {
    title: 'I freeze or get choppy video',
    detail: 'Close other apps and browser tabs. Video calls hog memory. On a laptop: close everything except the call app. Restart Wi-Fi router if it keeps happening — unplug for 30 seconds, plug back in.',
  },
  {
    title: 'My family cannot hear me',
    detail: 'Check the mute icon — usually a microphone with a red slash. Tap it. Also check the app has microphone permission: Settings → Privacy → Microphone → turn it on for Zoom/FaceTime/Teams.',
  },
  {
    title: 'The screen shows my ceiling',
    detail: 'Camera is too low. Stack books under the laptop until the camera sits at eye level. A $20 tablet stand fixes it permanently.',
  },
];

export default function VideoCallEtiquette() {
  const [section, setSection] = useState<Section>('lighting');
  const topic = TOPICS[section];

  return (
    <>
      <SEOHead
        title="Video Call Etiquette"
        description="Look and sound great on Zoom, FaceTime, and family video calls. Lighting, audio, camera angle, and manners — plain English for seniors."
        path="/tools/video-call-etiquette"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Video className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Video Call Etiquette</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Look great, sound clear, and feel comfortable on family Zoom, FaceTime, and doctor video calls.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Video Call Etiquette' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What do you want to fix?</p>
              <div className="grid sm:grid-cols-4 gap-2">
                {([
                  { id: 'lighting' as Section, label: 'Lighting' },
                  { id: 'audio' as Section,    label: 'Audio' },
                  { id: 'camera' as Section,   label: 'Camera angle' },
                  { id: 'manners' as Section,  label: 'Call manners' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setSection(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      section === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{topic.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>For:</strong> {topic.whoFor}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to set it up</p>
              <ol className="space-y-2 mb-5">
                {topic.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Helpful to know</p>
              <ul className="space-y-1.5">
                {topic.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">&bull;</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick fixes for common problems</p>
          <div className="space-y-3 mb-6">
            {QUICK_FIXES.map(t => (
              <Card key={t.title} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on first-time nerves</p>
                <p className="text-muted-foreground">
                  Nobody looks their best on the first call. Do a five-minute test call with a patient family member before the doctor visit or the family reunion. Move the lamp, raise the laptop, swap to headphones — small fixes add up to a big change in how you come across.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Telehealth Prep</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get ready for the doctor video call.</p>
              </Link>
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">A tablet built for video calls.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Speak instead of type.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
