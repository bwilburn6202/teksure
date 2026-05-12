import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Truck, Printer } from "lucide-react";

interface Item {
  id: string;
  title: string;
  detail: string;
  category: "Inside the RV" | "Outside the RV" | "Hookups & utilities" | "Driver and route";
}

const ITEMS: Item[] = [
  { id: "a1", category: "Inside the RV", title: "Refrigerator latched and powered", detail: "Switch fridge from AC shore power to propane or 12V. Latch the door (or stick a magnet on the gasket to remind you). Loose food in the freezer becomes a missile at the first turn." },
  { id: "a2", category: "Inside the RV", title: "All cabinets, drawers, and bathroom door latched", detail: "Walk every drawer and cabinet. A single open drawer is the most common rookie mistake. Latch the bathroom door so the toilet does not flap and break." },
  { id: "a3", category: "Inside the RV", title: "Loose items secured", detail: "TV remote, coffee maker, plates, books on counters and tables go in a drawer or non-skid shelf. Slick countertops launch everything." },
  { id: "a4", category: "Inside the RV", title: "Windows and vents closed", detail: "Roof vents down (not up). Side windows latched. The wind force on a raised vent at highway speed will rip it off." },

  { id: "b1", category: "Outside the RV", title: "Slides retracted and locked", detail: "Every slide in, locked, with the slide topper rolled in. Walk around the rig to verify each slide is FULLY in." },
  { id: "b2", category: "Outside the RV", title: "Awnings retracted, locked, and travel-pinned", detail: "Awning fully rolled in. Travel locks engaged. Many awnings need a manual pin or strap when traveling." },
  { id: "b3", category: "Outside the RV", title: "Hitch and safety chains inspected (if towable)", detail: "Coupler latched and locked. Safety chains crossed under the tongue. Breakaway cable attached to a non-detachable part of the tow vehicle. Brake controller set to your usual gain." },
  { id: "b4", category: "Outside the RV", title: "Tires checked - cold pressure and visual", detail: "All tires at door-jamb sticker pressure (cold). Walk around for sidewall bulges, missing valve caps, or low spots. Tire blowout is the #1 RV roadside event." },

  { id: "c1", category: "Hookups & utilities", title: "Power cord disconnected and stowed", detail: "Unplug from shore power, coil the cord, store in compartment. Cap the pedestal if it has one. Inspector tip: dropped power cords are the most-forgotten item." },
  { id: "c2", category: "Hookups & utilities", title: "Water hose disconnected, drained, stowed", detail: "Disconnect from spigot, drain hose, coil, store. Close the city-water inlet on the rig. Forgetting this rips off your hose AND the spigot." },
  { id: "c3", category: "Hookups & utilities", title: "Sewer hose disconnected, rinsed, stowed", detail: "Dump black tank FIRST, then gray tank to rinse the hose. Cap both rig and dump-station outlets. Sanitize hands when done." },
  { id: "c4", category: "Hookups & utilities", title: "Propane valve - off for travel through tunnels", detail: "For most travel, propane can stay on. EXCEPTION: most tunnels and ferries require propane off. Know your route." },

  { id: "d1", category: "Driver and route", title: "Mirror, seat, and steering check", detail: "Adjust mirrors for the rig length. Seat at proper height. Both feet can reach pedals comfortably. Steering wheel within normal reach." },
  { id: "d2", category: "Driver and route", title: "GPS set to RV-safe routing", detail: "Use an RV-specific GPS (Garmin RV, RV Trip Wizard) or RV Life Pro app. Plug in your rig height, length, and weight to avoid low bridges, weight limits, and tight curves." },
  { id: "d3", category: "Driver and route", title: "Fuel and propane levels", detail: "Top off diesel/gas at the start of the day, not the end. Aim to refuel at 1/4 tank — most truck stops are easy in and out at that point. Check propane level if it has been a while." },
  { id: "d4", category: "Driver and route", title: "Emergency kit and roadside contacts", detail: "Reflective triangles in driver-side easy reach. Good Sam Roadside or Coach-Net membership card. Your insurance card. Spare key duplicated and stashed (not on a magnet under the bumper)." },
];

const CATEGORIES: Item["category"][] = ["Inside the RV", "Outside the RV", "Hookups & utilities", "Driver and route"];

export default function RVPreTripChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  function toggle(id: string) { setDone(p => ({ ...p, [id]: !p[id] })); }
  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="RV Pre-Trip Departure Checklist for Seniors | TekSure" description="16 essential items to check before driving your RV. Slides, hookups, tires, hitch, and route. Designed for older RVers who want a stress-free departure." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Truck className="h-7 w-7 text-stone-700" />
            <h1 className="text-3xl font-bold text-gray-900">RV Pre-Trip Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">16 things to verify before you turn the key. Walk through it the same way every time and you will not leave a slide out again.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-stone-50 border-stone-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-stone-900 font-semibold">{completedCount} of {ITEMS.length} done</p>
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

        <Card className="bg-blue-50 border-blue-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Pro pattern:</span> Do this same checklist the same way every time, even when you only moved 50 feet. Muscle memory protects you when you are tired, distracted, or rushed. Many RVers run the list out loud with their spouse confirming each item.</p>
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
