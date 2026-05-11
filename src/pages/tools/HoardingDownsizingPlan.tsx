import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Boxes, Printer } from "lucide-react";

type RoomStatus = "Not started" | "Sorting" | "Mostly done" | "Done";

interface Room {
  name: string;
  status: RoomStatus;
  keepNote: string;
  giftNote: string;
  donateNote: string;
}

const DEFAULT_ROOMS: Room[] = [
  { name: "Kitchen", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Living room", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Main bedroom", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Guest bedroom / spare", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Bathroom(s)", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Closets", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Garage / shed", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Basement / attic", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
  { name: "Office / paperwork", status: "Not started", keepNote: "", giftNote: "", donateNote: "" },
];

const STATUSES: RoomStatus[] = ["Not started", "Sorting", "Mostly done", "Done"];

function statusTone(s: RoomStatus): string {
  if (s === "Done") return "bg-emerald-100 text-emerald-800 border-emerald-300";
  if (s === "Mostly done") return "bg-blue-100 text-blue-800 border-blue-300";
  if (s === "Sorting") return "bg-amber-100 text-amber-800 border-amber-300";
  return "bg-gray-100 text-gray-700 border-gray-300";
}

export default function HoardingDownsizingPlan() {
  const [rooms, setRooms] = useState<Room[]>(DEFAULT_ROOMS);

  function updateRoom(i: number, field: keyof Room, value: string) {
    setRooms(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: value } : r));
  }

  function cycleStatus(i: number) {
    setRooms(prev => prev.map((r, idx) => {
      if (idx !== i) return r;
      const next = STATUSES[(STATUSES.indexOf(r.status) + 1) % STATUSES.length];
      return { ...r, status: next };
    }));
  }

  const doneCount = rooms.filter(r => r.status === "Done").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Senior Downsizing Plan | TekSure" description="A compassionate room-by-room downsizing plan for older adults. Three short notes per room — keep, gift, donate. No judgment. No deadlines." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Boxes className="h-7 w-7 text-orange-700" />
            <h1 className="text-3xl font-bold text-gray-900">Downsizing Plan</h1>
          </div>
          <p className="text-gray-600 text-lg">A gentle room-by-room plan. The hardest part is starting. Pick one room. Spend 90 minutes. Stop. Repeat next week.</p>
        </div>

        <Card className="mb-4 bg-orange-50 border-orange-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-orange-900"><span className="font-semibold">{doneCount} of {rooms.length} rooms done.</span> The goal is not to finish in a weekend. The goal is to make a decision about each thing in each room, one item at a time, without rushing yourself. A senior move manager (NASMM.org) charges $50-$125/hr if you want a calm professional helping.</p>
          </CardContent>
        </Card>

        {rooms.map((r, i) => (
          <Card key={r.name} className="mb-3">
            <CardContent className="py-4 px-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-900">{r.name}</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => cycleStatus(i)}
                  className="print:hidden"
                >
                  <Badge className={`${statusTone(r.status)} border`} variant="outline">{r.status}</Badge>
                </Button>
                <Badge className={`${statusTone(r.status)} border hidden print:inline-flex`} variant="outline">{r.status}</Badge>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-xs font-semibold text-emerald-700">KEEP</label>
                  <Input value={r.keepNote} onChange={e => updateRoom(i, "keepNote", e.target.value)} placeholder="What you want to keep" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-blue-700">GIFT to family or friends</label>
                  <Input value={r.giftNote} onChange={e => updateRoom(i, "giftNote", e.target.value)} placeholder="The blue china to Sarah, the toolset to John" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-amber-700">DONATE / SELL / RECYCLE</label>
                  <Input value={r.donateNote} onChange={e => updateRoom(i, "donateNote", e.target.value)} placeholder="Salvation Army, estate sale, recycling" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">For very sentimental items you cannot keep:</span> photograph each one, write 1-2 sentences about it, and save it in a "memory book". You keep the meaning. The object can go to someone who will use it.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
