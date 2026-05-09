import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trash2, Printer, PlusCircle, Phone, Video, MessageSquare, MapPin } from "lucide-react";

type ContactKind = "call" | "video" | "text" | "in-person";

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
}

interface Touch {
  id: string;
  memberId: string;
  date: string;
  kind: ContactKind;
  notes: string;
}

const KIND_META: Record<ContactKind, { label: string; emoji: string; color: string; icon: typeof Phone }> = {
  call: { label: "Phone call", emoji: "📞", color: "bg-blue-100 text-blue-700", icon: Phone },
  video: { label: "Video call", emoji: "📹", color: "bg-purple-100 text-purple-700", icon: Video },
  text: { label: "Text", emoji: "💬", color: "bg-emerald-100 text-emerald-700", icon: MessageSquare },
  "in-person": { label: "In person", emoji: "🤗", color: "bg-rose-100 text-rose-700", icon: MapPin },
};

export default function FamilyCheckInLog() {
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [touches, setTouches] = useState<Touch[]>([]);
  const [memberForm, setMemberForm] = useState({ name: "", relationship: "" });
  const [touchForms, setTouchForms] = useState<Record<string, { kind: ContactKind; notes: string }>>({});
  const [error, setError] = useState("");

  function addMember() {
    if (!memberForm.name.trim()) { setError("Please enter a name."); return; }
    setError("");
    setMembers(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: memberForm.name.trim(), relationship: memberForm.relationship.trim() },
    ]);
    setMemberForm({ name: "", relationship: "" });
  }

  function removeMember(id: string) {
    setMembers(prev => prev.filter(m => m.id !== id));
    setTouches(prev => prev.filter(t => t.memberId !== id));
  }

  function logTouch(memberId: string) {
    const today = new Date().toISOString().slice(0, 10);
    const form = touchForms[memberId] || { kind: "call" as ContactKind, notes: "" };
    setTouches(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), memberId, date: today, kind: form.kind, notes: (form.notes || "").trim() },
    ]);
    setTouchForms(prev => ({ ...prev, [memberId]: { kind: form.kind, notes: "" } }));
  }

  function removeTouch(id: string) {
    setTouches(prev => prev.filter(t => t.id !== id));
  }

  function lastTouch(memberId: string): Touch | null {
    const list = touches.filter(t => t.memberId === memberId).sort((a, b) => b.date.localeCompare(a.date));
    return list[0] || null;
  }

  function daysSince(d: string): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  }

  function staleColor(days: number) {
    if (days <= 7) return "bg-green-100 text-green-700 border-green-200";
    if (days <= 21) return "bg-blue-100 text-blue-700 border-blue-200";
    if (days <= 60) return "bg-amber-100 text-amber-700 border-amber-200";
    return "bg-red-100 text-red-700 border-red-200";
  }

  const stale = members.filter(m => {
    const t = lastTouch(m.id);
    return !t || daysSince(t.date) > 30;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Family Check-In Log | TekSure"
        description="Stay in touch with everyone. Log a quick check-in each time you call, text, or visit family — see who you have not heard from in a while."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-7 w-7 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Family Check-In Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Add the people you want to stay in touch with. Each time you talk, log it. The list shows who you have not heard from in a while.
          </p>
        </div>

        {/* Stale alert */}
        {stale.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">Time to reach out:</span> {stale.map(s => s.name).join(", ")}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add member */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-purple-600" />
              Add Family / Friend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="m-name" className="text-base font-medium">Name</Label>
                <Input id="m-name" placeholder="e.g. Tom" value={memberForm.name} onChange={e => setMemberForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="m-rel" className="text-base font-medium">Relationship</Label>
                <Input id="m-rel" placeholder="e.g. son, sister, neighbor" value={memberForm.relationship} onChange={e => setMemberForm(f => ({ ...f, relationship: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={addMember} size="lg" className="w-full sm:w-auto text-base">Add Person</Button>
          </CardContent>
        </Card>

        {members.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        )}

        {/* Members */}
        {members.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Users className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No people on the list yet.</p>
              <p className="text-sm mt-1">Start with one family member.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {members.map(m => {
              const last = lastTouch(m.id);
              const memberTouches = touches.filter(t => t.memberId === m.id).sort((a, b) => b.date.localeCompare(a.date));
              const days = last ? daysSince(last.date) : null;
              const tForm = touchForms[m.id] || { kind: "call" as ContactKind, notes: "" };
              return (
                <Card key={m.id} className="print:break-inside-avoid">
                  <CardHeader className="pb-2 pt-3 bg-purple-50">
                    <CardTitle className="text-base text-purple-800 flex items-center justify-between flex-wrap gap-2">
                      <span>
                        {m.name}
                        {m.relationship && <span className="text-gray-500 font-normal"> · {m.relationship}</span>}
                      </span>
                      {days !== null ? (
                        <Badge variant="secondary" className={`text-xs border ${staleColor(days)}`}>
                          {days === 0 ? "Today" : days === 1 ? "1 day ago" : `${days} days ago`}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">No log yet</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 space-y-2">
                    {/* Quick log */}
                    <div className="flex flex-wrap gap-1 print:hidden">
                      {(["call", "video", "text", "in-person"] as ContactKind[]).map(k => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setTouchForms(prev => ({ ...prev, [m.id]: { ...tForm, kind: k } }))}
                          className={`text-xs px-2 py-1 rounded-full border ${tForm.kind === k ? "bg-purple-50 border-purple-300 text-purple-800" : "bg-white border-gray-200 text-gray-700"}`}
                        >
                          {KIND_META[k].emoji} {KIND_META[k].label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 print:hidden">
                      <Input
                        placeholder="Note (optional, e.g. she's doing well)"
                        value={tForm.notes}
                        onChange={e => setTouchForms(prev => ({ ...prev, [m.id]: { ...tForm, notes: e.target.value } }))}
                        className="text-sm"
                      />
                      <Button onClick={() => logTouch(m.id)} size="sm">Log Today</Button>
                    </div>

                    {/* History */}
                    {memberTouches.length > 0 && (
                      <div className="border-t pt-2">
                        <p className="text-xs text-gray-500 mb-1">Recent contacts:</p>
                        <ul className="space-y-1">
                          {memberTouches.slice(0, 5).map(t => (
                            <li key={t.id} className="flex items-center justify-between gap-2 text-xs">
                              <span className="text-gray-700">
                                {KIND_META[t.kind].emoji} {t.date} {t.notes && <span className="italic text-gray-500">— {t.notes}</span>}
                              </span>
                              <Button variant="ghost" size="icon" onClick={() => removeTouch(t.id)} className="h-5 w-5 text-red-400 hover:text-red-600 print:hidden">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button variant="ghost" size="sm" onClick={() => removeMember(m.id)} className="text-xs text-red-400 hover:text-red-600 print:hidden">
                      Remove from list
                    </Button>
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
              The goal is not to log everything perfectly — just to spot when someone hasn't been on your radar lately. Even a 30-second text counts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
