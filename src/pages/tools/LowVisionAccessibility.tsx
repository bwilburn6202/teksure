import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Printer } from "lucide-react";

type Platform = "iPhone" | "iPad" | "Android" | "Windows PC" | "Mac";

interface Setting {
  feature: string;
  what: string;
  steps: string;
}

const SETTINGS: Record<Platform, Setting[]> = {
  iPhone: [
    { feature: "Large Text", what: "Makes ALL text bigger across apps", steps: "Settings -> Display & Brightness -> Text Size -> drag the slider to the right" },
    { feature: "Bold Text", what: "Thicker letters, easier to read", steps: "Settings -> Display & Brightness -> Bold Text -> turn ON" },
    { feature: "Magnifier", what: "Use the camera as a magnifying glass", steps: "Settings -> Accessibility -> Magnifier -> turn ON. Triple-click the side button to use" },
    { feature: "Zoom", what: "Pinch to zoom anywhere on the screen", steps: "Settings -> Accessibility -> Zoom -> turn ON. Then tap with 3 fingers anywhere" },
    { feature: "VoiceOver", what: "iPhone reads everything out loud", steps: "Settings -> Accessibility -> VoiceOver -> turn ON. Ask Siri to turn it off if you get stuck" },
    { feature: "Increase Contrast", what: "Sharper edges on buttons and text", steps: "Settings -> Accessibility -> Display & Text Size -> Increase Contrast" },
  ],
  iPad: [
    { feature: "Large Text", what: "Makes ALL text bigger", steps: "Settings -> Display & Brightness -> Text Size -> drag slider right" },
    { feature: "Magnifier", what: "Camera as magnifying glass", steps: "Settings -> Accessibility -> Magnifier -> turn ON. Triple-click home or top button" },
    { feature: "Zoom (3-finger pinch)", what: "Zoom anywhere on screen", steps: "Settings -> Accessibility -> Zoom -> ON. Tap with 3 fingers to use" },
    { feature: "VoiceOver", what: "iPad reads aloud", steps: "Settings -> Accessibility -> VoiceOver -> ON. Siri can also turn it off" },
    { feature: "Smart Invert", what: "Light text on dark background (saves your eyes at night)", steps: "Settings -> Accessibility -> Display & Text Size -> Smart Invert" },
  ],
  Android: [
    { feature: "Font size", what: "Bigger text everywhere", steps: "Settings -> Display -> Font size and style -> drag slider right" },
    { feature: "Display size", what: "Bigger icons, buttons, and menus", steps: "Settings -> Display -> Display size -> drag right" },
    { feature: "Magnification", what: "Pinch to zoom anywhere", steps: "Settings -> Accessibility -> Magnification -> ON. Triple-tap to use" },
    { feature: "TalkBack", what: "Phone reads aloud", steps: "Settings -> Accessibility -> TalkBack -> ON. Hold both volume keys to toggle" },
    { feature: "High contrast text", what: "Sharper letters", steps: "Settings -> Accessibility -> Visibility enhancements -> High contrast text" },
    { feature: "Color correction", what: "Helpful for color blindness or low color sensitivity", steps: "Settings -> Accessibility -> Visibility enhancements -> Color correction" },
  ],
  "Windows PC": [
    { feature: "Make text bigger", what: "Bigger text across Windows", steps: "Settings -> Accessibility -> Text size -> drag slider right" },
    { feature: "Magnifier", what: "Built-in screen magnifier", steps: "Press Windows key + plus sign (+). Press Windows key + Escape to turn off" },
    { feature: "Narrator", what: "Windows reads aloud", steps: "Press Windows key + Ctrl + Enter. Same combo turns it off" },
    { feature: "High contrast", what: "Sharp light-on-dark display", steps: "Settings -> Accessibility -> Contrast themes -> pick one" },
    { feature: "Mouse pointer size", what: "Bigger cursor (easier to find)", steps: "Settings -> Accessibility -> Mouse pointer and touch -> drag size slider" },
  ],
  Mac: [
    { feature: "Increase text size", what: "Bigger text across apps", steps: "System Settings -> Accessibility -> Display -> Text Size" },
    { feature: "Zoom", what: "Pinch zoom anywhere on screen", steps: "System Settings -> Accessibility -> Zoom -> turn ON. Use Option + Command + 8 to toggle, Option + Command + plus to zoom in" },
    { feature: "VoiceOver", what: "Mac reads aloud", steps: "Press Command + F5 to toggle" },
    { feature: "Increase Contrast", what: "Sharper buttons and text", steps: "System Settings -> Accessibility -> Display -> Increase Contrast" },
    { feature: "Display - reduce motion", what: "Less screen movement, easier on the eyes", steps: "System Settings -> Accessibility -> Display -> Reduce motion" },
  ],
};

export default function LowVisionAccessibility() {
  const [platform, setPlatform] = useState<Platform>("iPhone");

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Low-Vision Accessibility Quick Reference | TekSure" description="Step-by-step instructions for enabling large text, magnifier, screen reader, and contrast settings on iPhone, iPad, Android, Windows, and Mac. Print and keep by your device." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="h-7 w-7 text-blue-700" />
            <h1 className="text-3xl font-bold text-gray-900">Low-Vision Accessibility</h1>
          </div>
          <p className="text-gray-600 text-lg">Make your device easier to see. Pick your device, follow the steps, print this page if it helps.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Pick your device</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(SETTINGS) as Platform[]).map(p => (
                <Button key={p} size="sm" variant={platform === p ? "default" : "outline"} onClick={() => setPlatform(p)}>
                  {p}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 print:break-inside-avoid">
          <CardContent className="py-4 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{platform}</h2>
            <div className="space-y-3">
              {SETTINGS[platform].map((s, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <p className="font-semibold text-gray-900">{s.feature}</p>
                  <p className="text-sm text-gray-600 italic">{s.what}</p>
                  <p className="text-sm text-gray-800 mt-1"><span className="font-semibold">How:</span> {s.steps}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Free help:</span> The National Library Service (NLS BARD) lends free audiobooks and braille books by mail to anyone with low vision. Call 1-888-NLS-READ or visit nlsbard.loc.gov. Bookshare (bookshare.org) offers free ebooks in large print and audio for qualifying users.</p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border-emerald-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-emerald-900"><span className="font-semibold">Sound out loud:</span> Voice assistants are a low-vision senior is best friend. iPhone: hold the side button and ask Siri. Android: say Hey Google. Both can call, text, set reminders, read news, and answer questions hands-free and eyes-free.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print This Page
          </Button>
        </div>
      </div>
    </div>
  );
}
