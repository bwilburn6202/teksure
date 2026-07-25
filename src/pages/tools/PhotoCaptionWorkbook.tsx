import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Trash2, Printer, PlusCircle, CheckCircle2 } from "lucide-react";

interface Photo {
  id: string;
  description: string;
  yearOrDate: string;
  people: string;
  place: string;
  story: string;
  scanned: boolean;
}

export default function PhotoCaptionWorkbook() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [form, setForm] = useState({
    description: "",
    yearOrDate: "",
    people: "",
    place: "",
    story: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.description.trim()) { setError("Please enter a short description (e.g. 'Christmas 1972')."); return; }
    setError("");
    setPhotos(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), description: form.description.trim(), yearOrDate: form.yearOrDate.trim(), people: form.people.trim(), place: form.place.trim(), story: form.story.trim(), scanned: false },
    ]);
    setForm({ description: "", yearOrDate: "", people: "", place: "", story: "" });
  }

  function remove(id: string) {
    setPhotos(prev => prev.filter(p => p.id !== id));
  }

  function toggleScanned(id: string) {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, scanned: !p.scanned } : p));
  }

  const sorted = [...photos].sort((a, b) => a.yearOrDate.localeCompare(b.yearOrDate));
  const scanned = photos.filter(p => p.scanned).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Photo Caption Workbook | TekSure"
        description="Record what is in each old family photo before details fade. Description, people, place, story. Print as a record to keep with the photos."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ImageIcon className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Photo Caption Workbook</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Old photos lose their stories the longer they sit unlabeled. Use this to capture who, when, and where for each one.
          </p>
        </div>

        {/* Stats */}
        {photos.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Photos captioned</p>
                <p className="text-xl font-bold text-amber-700">{photos.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Scanned to digital</p>
                <p className="text-xl font-bold text-green-700">{scanned} / {photos.length}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-amber-600" />
              Caption a Photo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="ph-desc" className="text-base font-medium">Short description</Label>
              <Input id="ph-desc" placeholder="e.g. Mom and Dad on porch" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="ph-year" className="text-base font-medium">Year or date</Label>
                <Input id="ph-year" placeholder="e.g. 1972, summer 1985" value={form.yearOrDate} onChange={e => setForm(f => ({ ...f, yearOrDate: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="ph-place" className="text-base font-medium">Place</Label>
                <Input id="ph-place" placeholder="e.g. Grandma's house, Lake Erie" value={form.place} onChange={e => setForm(f => ({ ...f, place: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="ph-people" className="text-base font-medium">People in photo</Label>
              <Input id="ph-people" placeholder="e.g. Aunt Mary, baby Linda, Uncle Joe" value={form.people} onChange={e => setForm(f => ({ ...f, people: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="ph-story" className="text-base font-medium">Story or context (optional)</Label>
              <textarea id="ph-story" rows={3} placeholder="What was happening? Why was the photo taken? Anything fun about it?" value={form.story} onChange={e => setForm(f => ({ ...f, story: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Save Caption</Button>
          </CardContent>
        </Card>

        {photos.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Workbook
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <ImageIcon className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No captions yet.</p>
              <p className="text-sm mt-1">Pull out one photo and start. The first is the hardest.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(p => (
              <Card key={p.id} className={`print:break-inside-avoid ${p.scanned ? "bg-green-50/30" : ""}`}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-base">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {p.yearOrDate && <Badge variant="secondary" className="text-xs">{p.yearOrDate}</Badge>}
                        {p.place && <Badge variant="outline" className="text-xs">{p.place}</Badge>}
                        {p.scanned && <Badge className="text-xs bg-green-100 text-green-700">✓ Scanned</Badge>}
                      </div>
                      {p.people && <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">People:</span> {p.people}</p>}
                      {p.story && <p className="text-sm text-gray-600 italic mt-1">{p.story}</p>}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => toggleScanned(p.id)} className="text-xs gap-1 print:hidden">
                    <CheckCircle2 className="h-3 w-3" />
                    {p.scanned ? "Mark not scanned" : "Mark scanned"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Print this list and tape it to the back of the photo box. Even if you never finish scanning, the captions alone are a gift to your family.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
