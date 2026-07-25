import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bird, Trash2, Printer, PlusCircle } from "lucide-react";

interface Sighting {
  id: string;
  species: string;
  date: string;
  location: string;
  count: number;
  note: string;
}

const COMMON_BACKYARD = [
  "American Robin", "Northern Cardinal", "House Sparrow", "Blue Jay", "Mourning Dove",
  "Black-capped Chickadee", "Tufted Titmouse", "American Goldfinch", "White-breasted Nuthatch",
  "Downy Woodpecker", "Red-bellied Woodpecker", "Carolina Wren", "Song Sparrow", "Dark-eyed Junco",
];

export default function BirdSightingLog() {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [form, setForm] = useState({
    species: "",
    date: new Date().toISOString().slice(0, 10),
    location: "",
    count: "1",
    note: "",
  });

  function add() {
    if (!form.species.trim()) return;
    setSightings(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      species: form.species.trim(),
      date: form.date,
      location: form.location.trim(),
      count: parseInt(form.count, 10) || 1,
      note: form.note.trim(),
    }]);
    setForm({ ...form, species: "", count: "1", note: "" });
  }

  function remove(id: string) {
    setSightings(prev => prev.filter(s => s.id !== id));
  }

  const uniqueSpecies = new Set(sightings.map(s => s.species.toLowerCase())).size;
  const totalBirds = sightings.reduce((sum, s) => sum + s.count, 0);
  const currentYear = new Date().getFullYear();
  const thisYear = sightings.filter(s => s.date.startsWith(String(currentYear))).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Bird Sighting Log | TekSure" description="Track the birds you see at home or in the field. Lifelist count, year list, common backyard species shortcuts. Print for sharing or eBird upload." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Bird className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Bird Sighting Log</h1>
          </div>
          <p className="text-gray-600 text-lg">Keep a simple record of the birds you spot. Your year list builds up faster than you expect.</p>
        </div>

        {sightings.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Sightings</p><p className="text-2xl font-bold text-emerald-700">{sightings.length}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Species (lifelist)</p><p className="text-2xl font-bold text-emerald-700">{uniqueSpecies}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">{currentYear} sightings</p><p className="text-2xl font-bold text-emerald-700">{thisYear}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"><PlusCircle className="h-5 w-5 text-emerald-700" />Log a sighting</h2>
            <Input value={form.species} onChange={e => setForm(f => ({ ...f, species: e.target.value }))} placeholder="Species (e.g. American Robin)" />
            <div className="flex flex-wrap gap-1 text-xs">
              <span className="text-gray-500">Quick add:</span>
              {COMMON_BACKYARD.map(b => (
                <button key={b} onClick={() => setForm(f => ({ ...f, species: b }))} className="px-2 py-0.5 rounded bg-gray-100 hover:bg-emerald-100 text-gray-700">{b}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input type="number" min="1" placeholder="Count" value={form.count} onChange={e => setForm(f => ({ ...f, count: e.target.value }))} />
            </div>
            <Input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="Location (e.g. backyard, Smith Park)" />
            <Input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Notes (behavior, weather, song, photo)" />
            <Button onClick={add} className="bg-emerald-700 hover:bg-emerald-800">Log Sighting</Button>
          </CardContent>
        </Card>

        {sightings.length > 0 && (
          <Card>
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                <span>Recent sightings</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print
                </Button>
              </h2>
              <div className="divide-y">
                {[...sightings].reverse().map(s => (
                  <div key={s.id} className="py-2 flex items-start justify-between gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">{s.species}</p>
                      <div className="flex flex-wrap gap-2 mt-0.5 items-center">
                        <span className="text-xs text-gray-500">{s.date}</span>
                        {s.location && <Badge variant="secondary" className="text-xs">{s.location}</Badge>}
                        {s.count > 1 && <span className="text-xs text-gray-500">x{s.count}</span>}
                      </div>
                      {s.note && <p className="text-xs text-gray-600 italic mt-0.5">{s.note}</p>}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(s.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Free tools to add to your toolkit:</span> Merlin Bird ID (free Cornell Lab app — identifies birds by photo OR sound). eBird (free, by Cornell Lab — log sightings, see what others spotted near you). Audubon Bird Guide (free, North America). Sibley app (paid, the gold standard).</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
