import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  species: string;
  age: string;
  notes: string;
}

interface Medication {
  id: string;
  petId: string;
  name: string;
  dose: string;
  frequency: string;
  notes: string;
}

interface VetVisit {
  id: string;
  petId: string;
  date: string;
  reason: string;
  vetName: string;
}

const SPECIES = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Reptile", "Other"];
const FREQUENCIES = ["Once a day", "Twice a day", "Three times a day", "Every other day", "Once a week", "As needed"];

export default function PetCareScheduleTracker() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [meds, setMeds] = useState<Medication[]>([]);
  const [visits, setVisits] = useState<VetVisit[]>([]);
  const [petForm, setPetForm] = useState({ name: "", species: "Dog", age: "", notes: "" });
  const [activePetId, setActivePetId] = useState<string | null>(null);
  const [medForm, setMedForm] = useState({ name: "", dose: "", frequency: "Once a day", notes: "" });
  const [visitForm, setVisitForm] = useState({ date: "", reason: "", vetName: "" });
  const [error, setError] = useState("");

  function addPet() {
    if (!petForm.name.trim()) { setError("Please enter your pet's name."); return; }
    setError("");
    const id = Date.now().toString();
    const newPet: Pet = { id, name: petForm.name.trim(), species: petForm.species, age: petForm.age.trim(), notes: petForm.notes.trim() };
    setPets(prev => [...prev, newPet]);
    setActivePetId(id);
    setPetForm({ name: "", species: "Dog", age: "", notes: "" });
  }

  function removePet(id: string) {
    setPets(prev => prev.filter(p => p.id !== id));
    setMeds(prev => prev.filter(m => m.petId !== id));
    setVisits(prev => prev.filter(v => v.petId !== id));
    if (activePetId === id) setActivePetId(null);
  }

  function addMed() {
    if (!activePetId) return;
    if (!medForm.name.trim() || !medForm.dose.trim()) { setError("Please enter the medication name and dose."); return; }
    setError("");
    setMeds(prev => [...prev, { id: Date.now().toString(), petId: activePetId, name: medForm.name.trim(), dose: medForm.dose.trim(), frequency: medForm.frequency, notes: medForm.notes.trim() }]);
    setMedForm({ name: "", dose: "", frequency: "Once a day", notes: "" });
  }

  function removeMed(id: string) {
    setMeds(prev => prev.filter(m => m.id !== id));
  }

  function addVisit() {
    if (!activePetId) return;
    if (!visitForm.date || !visitForm.reason.trim()) { setError("Please enter a date and reason for the visit."); return; }
    setError("");
    setVisits(prev => [...prev, { id: Date.now().toString(), petId: activePetId, date: visitForm.date, reason: visitForm.reason.trim(), vetName: visitForm.vetName.trim() }]);
    setVisitForm({ date: "", reason: "", vetName: "" });
  }

  function removeVisit(id: string) {
    setVisits(prev => prev.filter(v => v.id !== id));
  }

  function formatDate(s: string) {
    if (!s) return "";
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function isUpcoming(s: string) {
    if (!s) return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const d = new Date(s);
    const days = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return days >= 0 && days <= 14;
  }

  const activePet = pets.find(p => p.id === activePetId);
  const petMeds = meds.filter(m => m.petId === activePetId);
  const petVisits = [...visits.filter(v => v.petId === activePetId)].sort((a, b) => a.date.localeCompare(b.date));
  const upcomingVisits = visits.filter(v => isUpcoming(v.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Pet Care Schedule Tracker | TekSure"
        description="Track your pet's medications, vet appointments, and care details all in one place. Printable for the pet sitter or vet visit."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <PawPrint className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Pet Care Schedule</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Keep your pet's medications, vet visits, and care notes in one place.
          </p>
        </div>

        {/* Upcoming visits warning */}
        {upcomingVisits.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 text-sm">
                  {upcomingVisits.length} vet visit{upcomingVisits.length !== 1 ? "s" : ""} in the next 2 weeks
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add pet */}
        {!activePet && (
          <Card className="mb-6 print:hidden">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-amber-600" />
                Add a Pet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="petname" className="text-base font-medium">Pet's Name</Label>
                <Input id="petname" placeholder="e.g. Buddy" value={petForm.name} onChange={e => setPetForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="species" className="text-base font-medium">Type</Label>
                  <select id="species" value={petForm.species} onChange={e => setPetForm(f => ({ ...f, species: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                    {SPECIES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <Label htmlFor="age" className="text-base font-medium">Age (optional)</Label>
                  <Input id="age" placeholder="e.g. 6 years" value={petForm.age} onChange={e => setPetForm(f => ({ ...f, age: e.target.value }))} className="mt-1 text-base" />
                </div>
              </div>
              <div>
                <Label htmlFor="petnotes" className="text-base font-medium">Notes (optional)</Label>
                <Input id="petnotes" placeholder="e.g. Allergic to chicken" value={petForm.notes} onChange={e => setPetForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <Button onClick={addPet} size="lg" className="w-full sm:w-auto text-base">Add Pet</Button>
            </CardContent>
          </Card>
        )}

        {/* Pet picker */}
        {pets.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 print:hidden">
            {pets.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePetId(p.id)}
                className={`px-3 py-2 rounded-md border text-sm font-medium ${
                  activePetId === p.id ? "bg-amber-100 border-amber-400 text-amber-900" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <PawPrint className="h-4 w-4 inline mr-1" />
                {p.name}
              </button>
            ))}
            <button onClick={() => { setActivePetId(null); }} className="px-3 py-2 rounded-md border border-dashed border-gray-300 text-sm text-gray-500 hover:bg-gray-50">
              + Add another
            </button>
          </div>
        )}

        {/* Active pet detail */}
        {activePet && (
          <>
            <Card className="mb-4">
              <CardContent className="py-4 px-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{activePet.name}</h2>
                  <p className="text-sm text-gray-500">
                    {activePet.species}{activePet.age ? ` · ${activePet.age}` : ""}
                  </p>
                  {activePet.notes && <p className="text-sm text-gray-600 italic mt-1">{activePet.notes}</p>}
                </div>
                <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 print:hidden" onClick={() => removePet(activePet.id)} aria-label="Remove pet">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {petMeds.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">No medications added yet.</p>
                  ) : petMeds.map(m => (
                    <div key={m.id} className="border rounded-md p-3 flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">{m.name}</p>
                        <div className="flex gap-2 flex-wrap mt-1">
                          <Badge variant="secondary" className="text-xs">{m.dose}</Badge>
                          <Badge variant="outline" className="text-xs">{m.frequency}</Badge>
                        </div>
                        {m.notes && <p className="text-xs text-gray-500 italic mt-1">{m.notes}</p>}
                      </div>
                      <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 print:hidden" onClick={() => removeMed(m.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 print:hidden">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Add medication</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <Input placeholder="Medication name" value={medForm.name} onChange={e => setMedForm(f => ({ ...f, name: e.target.value }))} />
                    <Input placeholder="Dose (e.g. 10mg, 1 tablet)" value={medForm.dose} onChange={e => setMedForm(f => ({ ...f, dose: e.target.value }))} />
                    <select value={medForm.frequency} onChange={e => setMedForm(f => ({ ...f, frequency: e.target.value }))} className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm">
                      {FREQUENCIES.map(f => <option key={f}>{f}</option>)}
                    </select>
                    <Input placeholder="Notes (optional)" value={medForm.notes} onChange={e => setMedForm(f => ({ ...f, notes: e.target.value }))} />
                  </div>
                  <Button onClick={addMed} size="sm">Add Medication</Button>
                </div>
              </CardContent>
            </Card>

            {/* Vet visits */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Vet Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {petVisits.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">No vet visits scheduled.</p>
                  ) : petVisits.map(v => {
                    const upcoming = isUpcoming(v.date);
                    return (
                      <div key={v.id} className={`border rounded-md p-3 flex items-start justify-between gap-2 ${upcoming ? "border-amber-300 bg-amber-50" : ""}`}>
                        <div>
                          <p className="font-semibold text-gray-900">{formatDate(v.date)}</p>
                          <p className="text-sm text-gray-700">{v.reason}</p>
                          {v.vetName && <p className="text-xs text-gray-500 mt-1">Dr. {v.vetName}</p>}
                          {upcoming && <Badge className="mt-1 bg-amber-500 hover:bg-amber-600 text-xs">Upcoming</Badge>}
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 print:hidden" onClick={() => removeVisit(v.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t pt-3 print:hidden">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Add appointment</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <Input type="date" value={visitForm.date} onChange={e => setVisitForm(f => ({ ...f, date: e.target.value }))} />
                    <Input placeholder="Reason (e.g. Annual checkup)" value={visitForm.reason} onChange={e => setVisitForm(f => ({ ...f, reason: e.target.value }))} />
                    <Input placeholder="Vet name (optional)" value={visitForm.vetName} onChange={e => setVisitForm(f => ({ ...f, vetName: e.target.value }))} />
                  </div>
                  <Button onClick={addVisit} size="sm">Add Appointment</Button>
                </div>
                {error && <p className="text-red-600 text-sm mt-2 print:hidden">{error}</p>}
              </CardContent>
            </Card>
          </>
        )}

        {pets.length > 0 && (
          <Button variant="outline" onClick={() => window.print()} className="print:hidden gap-2 mt-2">
            <Printer className="h-4 w-4" />
            Print Pet Care Sheet
          </Button>
        )}
      </div>
    </div>
  );
}
