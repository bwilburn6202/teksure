import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Trash2, Printer, PlusCircle, CheckCircle2 } from "lucide-react";

type Priority = "now" | "soon" | "someday";
type Status = "todo" | "doing" | "done";
type Helper = "DIY" | "Family / Neighbor" | "Handyman" | "Contractor" | "Need to research";

interface Project {
  id: string;
  name: string;
  area: string;
  priority: Priority;
  status: Status;
  cost: string;
  helper: Helper;
  notes: string;
}

const PRIORITIES: Record<Priority, { label: string; color: string }> = {
  now: { label: "Now / urgent", color: "bg-red-100 text-red-700 border-red-200" },
  soon: { label: "Soon", color: "bg-amber-100 text-amber-700 border-amber-200" },
  someday: { label: "Someday", color: "bg-blue-100 text-blue-700 border-blue-200" },
};

const STATUSES: Record<Status, { label: string; color: string }> = {
  todo: { label: "To do", color: "bg-gray-100 text-gray-700" },
  doing: { label: "In progress", color: "bg-purple-100 text-purple-700" },
  done: { label: "Done", color: "bg-green-100 text-green-700" },
};

const HELPERS: Helper[] = ["DIY", "Family / Neighbor", "Handyman", "Contractor", "Need to research"];

export default function HomeProjectWishlist() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    name: "",
    area: "",
    priority: "soon" as Priority,
    status: "todo" as Status,
    cost: "",
    helper: "Need to research" as Helper,
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.name.trim()) { setError("Please enter a project name."); return; }
    setError("");
    setProjects(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: form.name.trim(), area: form.area.trim(), priority: form.priority, status: form.status, cost: form.cost.trim(), helper: form.helper, notes: form.notes.trim() },
    ]);
    setForm(f => ({ ...f, name: "", area: "", cost: "", notes: "" }));
  }

  function remove(id: string) {
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  function setStatus(id: string, status: Status) {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  }

  // Sort: status (todo, doing first), then priority (now, soon, someday), then name
  const sorted = [...projects].sort((a, b) => {
    const statusOrder: Record<Status, number> = { doing: 0, todo: 1, done: 2 };
    if (statusOrder[a.status] !== statusOrder[b.status]) return statusOrder[a.status] - statusOrder[b.status];
    const priorityOrder: Record<Priority, number> = { now: 0, soon: 1, someday: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) return priorityOrder[a.priority] - priorityOrder[b.priority];
    return a.name.localeCompare(b.name);
  });

  const todoCount = projects.filter(p => p.status !== "done").length;
  const doneCount = projects.filter(p => p.status === "done").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Home Project Wishlist | TekSure"
        description="Track every house project — repairs, upgrades, and someday ideas. Priority, status, cost, and who can help, all in one place."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Wrench className="h-7 w-7 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Home Project Wishlist</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Capture every "I should fix that someday" in one place. Sorts by priority so the urgent ones float to the top.
          </p>
        </div>

        {/* Stats */}
        {projects.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">To do or in progress</p>
                <p className="text-xl font-bold text-orange-700">{todoCount}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Done</p>
                <p className="text-xl font-bold text-green-700">{doneCount}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-orange-600" />
              Add a Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="proj-name" className="text-base font-medium">Project</Label>
              <Input id="proj-name" placeholder="e.g. Fix leaky kitchen faucet" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="proj-area" className="text-base font-medium">Room / Area</Label>
                <Input id="proj-area" placeholder="e.g. Kitchen, Bathroom, Yard" value={form.area} onChange={e => setForm(f => ({ ...f, area: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="proj-cost" className="text-base font-medium">Estimated cost (optional)</Label>
                <Input id="proj-cost" placeholder="e.g. $150" value={form.cost} onChange={e => setForm(f => ({ ...f, cost: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Priority</Label>
              <div className="flex gap-2 mt-1">
                {(["now", "soon", "someday"] as Priority[]).map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, priority: p }))}
                    className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.priority === p ? "bg-orange-50 border-orange-300 text-orange-800" : "bg-white border-gray-200 text-gray-700"}`}
                  >
                    {PRIORITIES[p].label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Who can help?</Label>
              <select value={form.helper} onChange={e => setForm(f => ({ ...f, helper: e.target.value as Helper }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {HELPERS.map(h => <option key={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="proj-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="proj-notes" placeholder="e.g. Got 2 quotes — Joe's Plumbing $180" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Project</Button>
          </CardContent>
        </Card>

        {projects.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Wishlist
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Wrench className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No projects yet.</p>
              <p className="text-sm mt-1">Add the first thing on your "to do around the house" list.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(p => (
              <Card key={p.id} className={`print:break-inside-avoid ${p.status === "done" ? "bg-green-50/30 opacity-75" : ""}`}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold text-gray-900 text-base ${p.status === "done" ? "line-through text-gray-400" : ""}`}>{p.name}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {p.area && <Badge variant="outline" className="text-xs">{p.area}</Badge>}
                        <Badge variant="secondary" className={`text-xs border ${PRIORITIES[p.priority].color}`}>{PRIORITIES[p.priority].label}</Badge>
                        <Badge variant="secondary" className={`text-xs ${STATUSES[p.status].color}`}>{STATUSES[p.status].label}</Badge>
                        {p.cost && <Badge variant="outline" className="text-xs">{p.cost}</Badge>}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Helper: {p.helper}</p>
                      {p.notes && <p className="text-xs text-gray-500 italic mt-1">{p.notes}</p>}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 print:hidden">
                    {(["todo", "doing", "done"] as Status[]).map(s => (
                      <button
                        key={s}
                        onClick={() => setStatus(p.id, s)}
                        className={`text-xs px-2 py-1 rounded border ${p.status === s ? "bg-orange-50 border-orange-300 text-orange-800 font-medium" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                      >
                        {s === "done" ? <CheckCircle2 className="inline h-3 w-3 mr-1" /> : null}
                        {STATUSES[s].label}
                      </button>
                    ))}
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
              For anything bigger than $500, get three written quotes from licensed contractors. The middle bid is usually the right balance of price and quality.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
