import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plane, Printer } from "lucide-react";

interface Item {
  id: string;
  title: string;
  detail: string;
  category: "30+ days before" | "1 week before" | "Day of travel" | "Once you arrive";
}

const ITEMS: Item[] = [
  { id: "a1", category: "30+ days before", title: "Call airline accessibility desk", detail: "Each airline has a dedicated line: Delta 404-209-3434, American 800-237-7976, Southwest 800-435-9792, United 800-228-2744. Tell them wheelchair, walker, or oxygen. They flag your reservation so the airport knows." },
  { id: "a2", category: "30+ days before", title: "Request TSA Cares pre-screening", detail: "Call 1-855-787-2227 at least 72 hours before. A trained TSA officer (Passenger Support Specialist) meets you at the airport and walks you through security at a slower pace, away from the line." },
  { id: "a3", category: "30+ days before", title: "Reserve accessible hotel room directly", detail: "Don't use the hotel chain's website to request accessibility. Call the specific property and ask: roll-in shower? bed height? grab bars in tub AND toilet? door width? Confirm in writing via email." },
  { id: "a4", category: "30+ days before", title: "Consider renting equipment at destination", detail: "Scootaround.com and CloudOfGoods.com rent wheelchairs, scooters, oxygen concentrators, and shower benches and deliver to your hotel. Often cheaper than shipping or hauling your own." },

  { id: "b1", category: "1 week before", title: "Confirm POC battery hours", detail: "If you use portable oxygen, airlines require 150% of flight time in battery life. For a 6-hour flight, you need 9 hours of batteries. Get a spare. Pack them in carry-on, not checked." },
  { id: "b2", category: "1 week before", title: "Pack medications in carry-on", detail: "Never check medications. Bring the original labeled bottles. Print a current medication list (use our Medication List tool). Pack 2 extra days' worth in case of delays." },
  { id: "b3", category: "1 week before", title: "Request bulkhead or aisle seat", detail: "Bulkhead has the most legroom. Aisle is easier if you may need the lavatory. Both can usually be reserved free if you mention mobility needs when you call the airline." },
  { id: "b4", category: "1 week before", title: "Photograph your wheelchair, walker, or POC", detail: "If the airline damages or loses it, photos prove condition. Take pictures of every angle, including any visible damage. Note model number and serial number." },

  { id: "c1", category: "Day of travel", title: "Arrive 2-3 hours early", detail: "Mobility processing takes longer. Curbside check-in for departure, gate-checked wheelchair at the door, advance boarding via accessibility services." },
  { id: "c2", category: "Day of travel", title: "Use wheelchair service even if you do not own one", detail: "Airlines provide free wheelchair service for anyone who has trouble walking long airport distances. Request at curb. Tip the attendant $5-10." },
  { id: "c3", category: "Day of travel", title: "Boarding pre-board", detail: "Tell the gate agent you need to pre-board. You get on first, settle without crowds, and gate-check your own wheelchair if you brought one. It will be at the jetway when you land." },
  { id: "c4", category: "Day of travel", title: "Keep medications, ID, snacks in one small bag", detail: "If your main bag is gate-checked or lost, you still have what you need for 24 hours. Phone charger goes in this bag too." },

  { id: "d1", category: "Once you arrive", title: "Inspect mobility equipment at the jetway", detail: "Before leaving the gate, check the wheelchair or POC for new damage. If something is broken, report at the gate to the airline before you leave the airport. They are required to repair or replace under the Air Carrier Access Act." },
  { id: "d2", category: "Once you arrive", title: "Confirm rental equipment delivery at hotel", detail: "If you ordered a wheelchair or shower bench, ask the front desk on arrival. Don't wait — if there is a problem, you want to solve it before bedtime." },
  { id: "d3", category: "Once you arrive", title: "Test the accessible bathroom yourself", detail: "Roll-in shower truly accessible? Grab bars feel sturdy? Toilet at a height you can use? If anything is wrong, ask for a different room before unpacking — and most hotels will swap you free." },
  { id: "d4", category: "Once you arrive", title: "Note nearest pharmacy and urgent care", detail: "Look up the address and phone for the nearest CVS / Walgreens and the closest urgent care. Save in your phone. You hope to never use them, but if you need them, you do not want to be searching." },
];

const CATEGORIES: Item["category"][] = ["30+ days before", "1 week before", "Day of travel", "Once you arrive"];

export default function AccessibleTravelChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Accessible Travel Checklist for Seniors | TekSure" description="A pre-trip checklist for older adults traveling with a wheelchair, walker, cane, or oxygen. Air, hotel, equipment rental, and arrival steps." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Plane className="h-7 w-7 text-sky-700" />
            <h1 className="text-3xl font-bold text-gray-900">Accessible Travel Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">For older adults traveling with a wheelchair, walker, cane, or oxygen. 16 essential items across the trip lifecycle.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-sky-50 border-sky-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-sky-900 font-semibold">{completedCount} of {ITEMS.length} done</p>
            </CardContent>
          </Card>
        )}

        {CATEGORIES.map(cat => (
          <Card key={cat} className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{cat}</h2>
              <div className="space-y-3">
                {ITEMS.filter(i => i.category === cat).map(i => (
                  <div key={i.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                    <Checkbox checked={!!done[i.id]} onCheckedChange={() => toggle(i.id)} className="mt-1 print:hidden" />
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${done[i.id] ? "line-through text-gray-400" : "text-gray-900"}`}>{i.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{i.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">National parks bonus:</span> A Lifetime Senior Pass ($80, ages 62+) gets you free entry to all 400+ NPS sites and 50% off camping. The Annual Senior Pass is $20. Buy at any park entrance or online at store.usgs.gov/senior-pass.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Checklist
          </Button>
        </div>
      </div>
    </div>
  );
}
