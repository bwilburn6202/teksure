import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Trash2, Printer, PlusCircle } from "lucide-react";

type PlantType = "Vegetable" | "Fruit" | "Flower" | "Herb" | "Houseplant" | "Tree / Shrub";

interface Plant {
  id: string;
  name: string;
  type: PlantType;
  plantedDate: string;
  location: string;
  lastWatered: string;
  notes: string;
}

const TYPES: PlantType[] = ["Vegetable", "Fruit", "Flower", "Herb", "Houseplant", "Tree / Shrub"];
const TYPE_EMOJI: Record<PlantType, string> = {
  "Vegetable": "🥕",
  "Fruit": "🍓",
  "Flower": "🌸",
  "Herb": "🌿",
  "Houseplant": "🪴",
  "Tree / Shrub": "🌳",
};

export default function GardenPlantLog() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [form, setForm] = useState({
    name: "",
    type: "Vegetable" as PlantType,
    plantedDate: new Date().toISOString().slice(0, 10),
    location: "",
    lastWatered: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.name.trim()) { setError("Please enter the plant name."); return; }
    setError("");
    setPlants(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: form.name.trim(), type: form.type, plantedDate: form.plantedDate, location: form.location.trim(), lastWatered: form.lastWatered, notes: form.notes.trim() },
    ]);
    setForm(f => ({ ...f, name: "", location: "", notes: "" }));
  }

  function remove(id: string) {
    setPlants(prev => prev.filter(p => p.id !== id));
  }

  function waterToday(id: string) {
    const today = new Date().toISOString().slice(0, 10);
    setPlants(prev => prev.map(p => p.id === id ? { ...p, lastWatered: today } : p));
  }

  function formatDate(s: string) {
    if (!s) return "—";
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function daysSince(s: string): number | null {
    if (!s) return null;
    const d = new Date(s);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    d.setHours(0, 0, 0, 0);
    return Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Group by type
  const grouped = TYPES.reduce<Record<string, Plant[]>>((acc, t) => {
    const items = plants.filter(p => p.type === t);
    if (items.length > 0) acc[t] = items;
    return acc;
  }, {});

  const counts = Object.fromEntries(TYPES.map(t => [t, plants.filter(p => p.type === t).length])) as Record<PlantType, number>;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Garden Plant Log | TekSure"
        description="Keep track of every plant in your garden — what, where, planted when, and last watered. Print a fresh garden inventory anytime."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sprout className="h-7 w-7 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Garden Plant Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Keep a record of what you planted and when. Helpful at the end of the season for planning next year.
          </p>
        </div>

        {/* Stats */}
        {plants.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardContent className="py-3 px-4">
              <p className="text-xs text-gray-500 mb-2">Garden inventory ({plants.length} plant{plants.length !== 1 ? "s" : ""})</p>
              <div className="flex flex-wrap gap-2">
                {TYPES.filter(t => counts[t] > 0).map(t => (
                  <Badge key={t} variant="secondary" className="text-sm">{TYPE_EMOJI[t]} {t}: {counts[t]}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-green-600" />
              Add a Plant
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="plant-name" className="text-base font-medium">Plant Name</Label>
              <Input id="plant-name" placeholder="e.g. Cherry tomatoes, Marigolds" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label className="text-base font-medium">Type</Label>
              <div className="flex flex-wrap gap-1 mt-1">
                {TYPES.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, type: t }))}
                    className={`px-3 py-1.5 rounded-md border text-sm font-medium ${form.type === t ? "bg-green-50 border-green-400 text-green-800" : "bg-white border-gray-200 text-gray-700"}`}
                  >
                    {TYPE_EMOJI[t]} {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="planted-date" className="text-base font-medium">Planted</Label>
                <Input id="planted-date" type="date" value={form.plantedDate} onChange={e => setForm(f => ({ ...f, plantedDate: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="last-watered" className="text-base font-medium">Last Watered (optional)</Label>
                <Input id="last-watered" type="date" value={form.lastWatered} onChange={e => setForm(f => ({ ...f, lastWatered: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="plant-loc" className="text-base font-medium">Location (optional)</Label>
              <Input id="plant-loc" placeholder="e.g. Front yard bed, kitchen window" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="plant-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="plant-notes" placeholder="e.g. Seedlings from Home Depot, full sun" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Plant</Button>
          </CardContent>
        </Card>

        {plants.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Garden Log
            </Button>
          </div>
        )}

        {plants.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Sprout className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No plants logged yet.</p>
              <p className="text-sm mt-1">Add the first plant in your garden, indoor or out.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([type, items]) => (
              <Card key={type} className="print:break-inside-avoid">
                <CardHeader className="pb-2 pt-3 bg-green-50">
                  <CardTitle className="text-base text-green-800">
                    {TYPE_EMOJI[type as PlantType]} {type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="divide-y">
                    {items.map(p => {
                      const wateredDays = daysSince(p.lastWatered);
                      return (
                        <div key={p.id} className="py-2 flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900">{p.name}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Planted {formatDate(p.plantedDate)}
                              {p.location && ` · ${p.location}`}
                              {wateredDays !== null && ` · Watered ${wateredDays === 0 ? "today" : `${wateredDays} day${wateredDays !== 1 ? "s" : ""} ago`}`}
                            </p>
                            {p.notes && <p className="text-xs text-gray-500 italic mt-0.5">{p.notes}</p>}
                          </div>
                          <div className="flex flex-col gap-1 shrink-0 print:hidden">
                            <Button size="sm" variant="outline" onClick={() => waterToday(p.id)} className="text-xs gap-1 h-7">
                              💧 Watered
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="h-6 w-6 text-red-400 hover:text-red-600">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Snap a photo when you plant something new and again every few weeks. The before-and-after shots are the best record of how your garden grew.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
