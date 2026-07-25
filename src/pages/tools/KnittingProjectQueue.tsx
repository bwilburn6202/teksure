import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Scissors, Trash2, Printer, PlusCircle } from "lucide-react";

type Status = "Planned" | "In progress" | "Finished" | "Frogged";

interface Project {
  id: string;
  name: string;
  pattern: string;
  yarn: string;
  needles: string;
  yardage: string;
  status: Status;
  recipient: string;
  startDate: string;
  note: string;
}

export default function KnittingProjectQueue() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    name: "",
    pattern: "",
    yarn: "",
    needles: "",
    yardage: "",
    status: "Planned" as Status,
    recipient: "",
    startDate: new Date().toISOString().slice(0, 10),
    note: "",
  });

  function add() {
    if (!form.name.trim()) return;
    setProjects(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      ...form,
      name: form.name.trim(),
    }]);
    setForm({ ...form, name: "", pattern: "", yarn: "", needles: "", yardage: "", recipient: "", note: "" });
  }

  function remove(id: string) {
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  function updateStatus(id: string, status: Status) {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  }

  function statusColor(s: Status) {
    return s === "Finished" ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : s === "In progress" ? "bg-amber-50 text-amber-700 border-amber-200"
      : s === "Frogged" ? "bg-rose-50 text-rose-700 border-rose-200"
      : "bg-gray-100 text-gray-700 border-gray-200";
  }

  const counts = {
    planned: projects.filter(p => p.status === "Planned").length,
    inProgress: projects.filter(p => p.status === "In progress").length,
    finished: projects.filter(p => p.status === "Finished").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Knitting Project Queue | TekSure" description="Track your knitting and crochet projects from planned through finished. Yarn, needle size, yardage, recipient, and notes. Print your queue." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Scissors className="h-7 w-7 text-fuchsia-700" />
            <h1 className="text-3xl font-bold text-gray-900">Knitting Queue</h1>
          </div>
          <p className="text-gray-600 text-lg">Track every project - planned, on needles, finished, or frogged. So your stash and queue make sense at a glance.</p>
        </div>

        {projects.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Planned</p><p className="text-2xl font-bold text-gray-700">{counts.planned}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">In progress</p><p className="text-2xl font-bold text-amber-700">{counts.inProgress}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Finished</p><p className="text-2xl font-bold text-emerald-700">{counts.finished}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"><PlusCircle className="h-5 w-5 text-fuchsia-700" />Add a project</h2>
            <Input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Project name (e.g. Cabled hat for John)" />
            <Input value={form.pattern} onChange={e => setForm(f => ({ ...f, pattern: e.target.value }))} placeholder="Pattern source (Ravelry link, book, designer)" />
            <div className="grid grid-cols-2 gap-2">
              <Input value={form.yarn} onChange={e => setForm(f => ({ ...f, yarn: e.target.value }))} placeholder="Yarn (brand, color, fiber)" />
              <Input value={form.needles} onChange={e => setForm(f => ({ ...f, needles: e.target.value }))} placeholder="Needles (e.g. US 7, 4.5mm)" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input value={form.yardage} onChange={e => setForm(f => ({ ...f, yardage: e.target.value }))} placeholder="Yardage needed" />
              <Input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
            </div>
            <Input value={form.recipient} onChange={e => setForm(f => ({ ...f, recipient: e.target.value }))} placeholder="Recipient (gift for X, charity, self)" />
            <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Status }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
              <option>Planned</option>
              <option>In progress</option>
              <option>Finished</option>
              <option>Frogged</option>
            </select>
            <Input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Notes (modifications, problems, gauge)" />
            <Button onClick={add} className="bg-fuchsia-700 hover:bg-fuchsia-800">Add Project</Button>
          </CardContent>
        </Card>

        {projects.length > 0 && (
          <Card>
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                <span>Your queue ({projects.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print
                </Button>
              </h2>
              <div className="divide-y">
                {[...projects].reverse().map(p => (
                  <div key={p.id} className="py-3 text-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{p.name}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <Badge variant="outline" className={`text-xs ${statusColor(p.status)}`}>{p.status}</Badge>
                          {p.pattern && <span className="text-xs text-gray-500">{p.pattern}</span>}
                          {p.recipient && <span className="text-xs text-gray-500">For: {p.recipient}</span>}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-600">
                          {p.yarn && <span>Yarn: {p.yarn}</span>}
                          {p.needles && <span>Needles: {p.needles}</span>}
                          {p.yardage && <span>Yards: {p.yardage}</span>}
                        </div>
                        {p.note && <p className="text-xs text-gray-600 italic mt-1">{p.note}</p>}
                        <div className="flex flex-wrap gap-1 mt-2 print:hidden">
                          {(["Planned", "In progress", "Finished", "Frogged"] as Status[]).map(s => (
                            <Button key={s} size="sm" variant={p.status === s ? "default" : "outline"} className="h-6 text-xs px-2" onClick={() => updateStatus(p.id, s)}>{s}</Button>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Free tool to pair this with:</span> Ravelry.com is a free knitter/crocheter community with a huge pattern database, free patterns, yarn substitutions, and your projects archive. Many seniors use it as their pattern library plus social network.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
