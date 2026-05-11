import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Trash2, Printer, PlusCircle, CheckCircle2 } from "lucide-react";

interface Person {
  id: string;
  name: string;
  relationship: string;
  birthday: string;
}

interface Idea {
  id: string;
  personId: string;
  text: string;
  cost: string;
  given: boolean;
}

export default function GiftIdeasList() {
  const [people, setPeople] = useState<Person[]>([]);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [personForm, setPersonForm] = useState({ name: "", relationship: "", birthday: "" });
  const [ideaForms, setIdeaForms] = useState<Record<string, { text: string; cost: string }>>({});
  const [error, setError] = useState("");

  function addPerson() {
    if (!personForm.name.trim()) { setError("Please enter a name."); return; }
    setError("");
    setPeople(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: personForm.name.trim(), relationship: personForm.relationship.trim(), birthday: personForm.birthday },
    ]);
    setPersonForm({ name: "", relationship: "", birthday: "" });
  }

  function removePerson(id: string) {
    setPeople(prev => prev.filter(p => p.id !== id));
    setIdeas(prev => prev.filter(i => i.personId !== id));
  }

  function addIdea(personId: string) {
    const form = ideaForms[personId];
    if (!form?.text?.trim()) return;
    setIdeas(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), personId, text: form.text.trim(), cost: form.cost?.trim() || "", given: false },
    ]);
    setIdeaForms(prev => ({ ...prev, [personId]: { text: "", cost: "" } }));
  }

  function removeIdea(id: string) {
    setIdeas(prev => prev.filter(i => i.id !== id));
  }

  function toggleGiven(id: string) {
    setIdeas(prev => prev.map(i => i.id === id ? { ...i, given: !i.given } : i));
  }

  function formatBirthday(s: string) {
    if (!s) return "";
    const [, m, d] = s.split("-");
    return `${parseInt(m, 10)}/${parseInt(d, 10)}`;
  }

  const totalIdeas = ideas.length;
  const givenCount = ideas.filter(i => i.given).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Gift Ideas List | TekSure"
        description="Keep a running list of gift ideas for everyone in your life. When holidays come, you'll be ready with thoughtful options."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Gift className="h-7 w-7 text-pink-600" />
            <h1 className="text-3xl font-bold text-gray-900">Gift Ideas List</h1>
          </div>
          <p className="text-gray-600 text-lg">
            When you spot something perfect for a loved one, jot it down here. By holiday time, you have a list ready to go.
          </p>
        </div>

        {/* Stats */}
        {people.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">People</p>
                <p className="text-xl font-bold text-pink-700">{people.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Ideas saved</p>
                <p className="text-xl font-bold text-pink-700">{totalIdeas}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Given</p>
                <p className="text-xl font-bold text-green-700">{givenCount}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add person */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-pink-600" />
              Add Someone to the List
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="p-name" className="text-base font-medium">Name</Label>
                <Input id="p-name" placeholder="e.g. Sarah" value={personForm.name} onChange={e => setPersonForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="p-rel" className="text-base font-medium">Relationship</Label>
                <Input id="p-rel" placeholder="e.g. daughter" value={personForm.relationship} onChange={e => setPersonForm(f => ({ ...f, relationship: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="p-bday" className="text-base font-medium">Birthday (optional)</Label>
                <Input id="p-bday" type="date" value={personForm.birthday} onChange={e => setPersonForm(f => ({ ...f, birthday: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={addPerson} size="lg" className="w-full sm:w-auto text-base">Add Person</Button>
          </CardContent>
        </Card>

        {people.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Gift List
            </Button>
          </div>
        )}

        {/* People with their ideas */}
        {people.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Gift className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No people on the list yet.</p>
              <p className="text-sm mt-1">Start with a family member or close friend.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {people.map(p => {
              const personIdeas = ideas.filter(i => i.personId === p.id);
              const personForm = ideaForms[p.id] || { text: "", cost: "" };
              return (
                <Card key={p.id} className="print:break-inside-avoid">
                  <CardHeader className="pb-2 pt-3 bg-pink-50">
                    <CardTitle className="text-base text-pink-800 flex items-center justify-between">
                      <span>
                        {p.name}
                        {p.relationship && <span className="text-gray-500 font-normal"> · {p.relationship}</span>}
                        {p.birthday && <span className="text-gray-500 font-normal text-xs ml-2">🎂 {formatBirthday(p.birthday)}</span>}
                      </span>
                      <Button variant="ghost" size="icon" onClick={() => removePerson(p.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    {personIdeas.length === 0 ? (
                      <p className="text-sm text-gray-500 italic mb-3 print:hidden">No ideas yet — add one below.</p>
                    ) : (
                      <ul className="space-y-1 mb-3">
                        {personIdeas.map(i => (
                          <li key={i.id} className="flex items-center justify-between gap-2 text-sm">
                            <button onClick={() => toggleGiven(i.id)} className="flex items-center gap-2 flex-1 text-left print:hidden">
                              {i.given ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> : <span className="h-4 w-4 rounded-full border border-gray-300 shrink-0" />}
                              <span className={i.given ? "line-through text-gray-400" : "text-gray-800"}>{i.text}</span>
                              {i.cost && <Badge variant="secondary" className="text-xs">{i.cost}</Badge>}
                            </button>
                            <span className="hidden print:inline">
                              {i.given ? "✓ " : "○ "}{i.text}{i.cost && ` (${i.cost})`}
                            </span>
                            <Button variant="ghost" size="icon" onClick={() => removeIdea(i.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-col sm:flex-row gap-2 print:hidden">
                      <Input
                        placeholder="New gift idea..."
                        value={personForm.text}
                        onChange={e => setIdeaForms(prev => ({ ...prev, [p.id]: { ...personForm, text: e.target.value } }))}
                        onKeyDown={e => { if (e.key === "Enter") addIdea(p.id); }}
                        className="text-sm"
                      />
                      <Input
                        placeholder="$ approx"
                        value={personForm.cost}
                        onChange={e => setIdeaForms(prev => ({ ...prev, [p.id]: { ...personForm, cost: e.target.value } }))}
                        className="text-sm w-full sm:w-24"
                      />
                      <Button onClick={() => addIdea(p.id)} size="sm">Add</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Pay attention when family talk about things they want or need. Add it here right away — by November you will have a head start on holiday shopping.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
