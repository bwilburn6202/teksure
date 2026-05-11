import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Type } from "lucide-react";

const SAMPLE = "The quick brown fox jumps over the lazy dog. This sentence shows what reading text at this size feels like on a screen.";

const SIZES = [
  { label: "Small (12pt)", className: "text-sm", note: "Small — about iPhone default for small text." },
  { label: "Body (14pt)", className: "text-base", note: "Body — recommended minimum for comfortable reading." },
  { label: "Medium (16pt)", className: "text-lg", note: "Medium — good for older eyes." },
  { label: "Large (18pt)", className: "text-xl", note: "Large — easy to read at arm's length." },
  { label: "X-Large (24pt)", className: "text-2xl", note: "X-Large — recommended for low vision." },
  { label: "XX-Large (30pt)", className: "text-3xl leading-snug", note: "XX-Large — accessibility setting on many phones." },
  { label: "Huge (40pt)", className: "text-4xl leading-snug", note: "Huge — useful for kitchen notes posted on the fridge." },
];

export default function TextSizeShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Text Size Showcase | TekSure" description="See the same sentence at every common font size. Find the size that works for your eyes — then ask your family to match it on your devices." />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Type className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Text Size Showcase</h1>
          </div>
          <p className="text-gray-600 text-lg">Scroll through and pick the size that's most comfortable for your eyes. Bookmark this page to show family when adjusting your devices.</p>
        </div>
        <div className="space-y-3">
          {SIZES.map(s => (
            <Card key={s.label}>
              <CardContent className="py-4 px-4">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{s.label}</p>
                <p className={s.className}>{SAMPLE}</p>
                <p className="text-xs text-gray-500 italic mt-2">{s.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Next step: </span>
              On iPhone, go to Settings → Display & Brightness → Text Size. On Android, go to Settings → Display → Font size. Pick the size that matches what you found comfortable here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
