import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Printer } from "lucide-react";

type Season = "Spring" | "Summer" | "Fall" | "Winter";

interface Highlight {
  name: string;
  what: string;
  when: string;
  difficulty: string;
}

const HIGHLIGHTS: Record<Season, Highlight[]> = {
  Spring: [
    { name: "Big Dipper (Ursa Major)", what: "Pour aimed downward overhead in spring", when: "All night", difficulty: "Easy" },
    { name: "Leo the Lion", what: "Backwards question-mark shape (sickle)", when: "Evening, high in south", difficulty: "Easy" },
    { name: "Beehive Cluster (M44)", what: "Beautiful naked-eye star cluster in Cancer", when: "Evening, dark site", difficulty: "Intermediate" },
    { name: "Jupiter or Saturn (when visible)", what: "Brightest planets near zodiac path", when: "Check stellarium.org for current evening", difficulty: "Easy" },
    { name: "Sombrero Galaxy (M104)", what: "Edge-on galaxy in Virgo", when: "Late evening, telescope required", difficulty: "Advanced" },
    { name: "Lyrid meteor shower", what: "Annual peak April 22 nights", when: "After midnight", difficulty: "Easy with patience" },
  ],
  Summer: [
    { name: "Summer Triangle", what: "Vega, Deneb, Altair - three brightest stars overhead", when: "Late evening", difficulty: "Easy" },
    { name: "Milky Way band", what: "Best summer in dark skies, runs Sagittarius through Cygnus", when: "After 10 PM, dark site", difficulty: "Easy with dark sky" },
    { name: "Scorpius and Sagittarius", what: "Low in south - heart of the Milky Way", when: "Evening, low in south", difficulty: "Easy" },
    { name: "Perseid meteor shower", what: "Peak August 12-13 - one of the year is best", when: "After midnight", difficulty: "Easy with patience" },
    { name: "Ring Nebula (M57)", what: "Tiny smoke ring through telescope, in Lyra", when: "Evening, telescope", difficulty: "Intermediate" },
    { name: "ISS passes", what: "International Space Station, bright moving star", when: "Check nasa.gov spotthestation", difficulty: "Easy" },
  ],
  Fall: [
    { name: "Cassiopeia (W shape)", what: "Five-star W high in north", when: "Evening", difficulty: "Easy" },
    { name: "Andromeda Galaxy (M31)", what: "Naked-eye galaxy 2.5 million light-years away", when: "Evening, dark site", difficulty: "Easy with dark sky" },
    { name: "Great Square of Pegasus", what: "Large empty square high in east", when: "Evening", difficulty: "Easy" },
    { name: "Orionid meteor shower", what: "Peak October 20-21", when: "After midnight", difficulty: "Easy with patience" },
    { name: "Saturn (when visible)", what: "Rings visible through small telescope", when: "Check current visibility", difficulty: "Intermediate" },
    { name: "Pleiades (M45 - Seven Sisters)", what: "Tight bright star cluster, low in east", when: "Evening rising", difficulty: "Easy" },
  ],
  Winter: [
    { name: "Orion the Hunter", what: "Three belt stars and bright shoulder/foot", when: "Evening south", difficulty: "Easy" },
    { name: "Orion Nebula (M42)", what: "Pinkish glow in Orion sword - active stellar nursery", when: "Evening, binoculars or scope", difficulty: "Easy with binoculars" },
    { name: "Sirius - brightest night star", what: "Below Orion to the left, blazing", when: "Evening south", difficulty: "Easy" },
    { name: "Geminid meteor shower", what: "Peak December 13-14 - the year is most reliable", when: "After 9 PM", difficulty: "Easy with patience" },
    { name: "Pleiades (M45) high overhead", what: "Most beautiful binocular cluster", when: "Evening", difficulty: "Easy" },
    { name: "Quadrantid meteor shower", what: "Brief intense peak January 3-4", when: "Before dawn", difficulty: "Easy with patience" },
  ],
};

export default function SeasonalStarChart() {
  const currentMonth = new Date().getMonth();
  const autoSeason: Season =
    currentMonth >= 2 && currentMonth <= 4 ? "Spring" :
    currentMonth >= 5 && currentMonth <= 7 ? "Summer" :
    currentMonth >= 8 && currentMonth <= 10 ? "Fall" : "Winter";
  const [season, setSeason] = useState<Season>(autoSeason);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Seasonal Star Chart for Seniors | TekSure" description="A simple list of the best things to see in the night sky by season. Constellations, planets, deep sky, meteor showers. Print and take outside." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-7 w-7 text-indigo-700" />
            <h1 className="text-3xl font-bold text-gray-900">Seasonal Star Chart</h1>
          </div>
          <p className="text-gray-600 text-lg">The best things to see in tonight is sky. Naked-eye targets, binocular treats, and one or two telescope challenges per season.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Season</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(HIGHLIGHTS) as Season[]).map(s => (
                <Button key={s} size="sm" variant={season === s ? "default" : "outline"} onClick={() => setSeason(s)}>{s}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{season} sky highlights</h2>
            <div className="space-y-3">
              {HIGHLIGHTS[season].map((h, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-gray-900">{h.name}</p>
                    <span className="text-xs text-indigo-700 italic">{h.difficulty}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{h.what}</p>
                  <p className="text-xs text-gray-500 mt-1">When: {h.when}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Free apps to add:</span> Stellarium (free desktop and phone app, shows exactly what is above you right now), SkySafari (paid), NASA Spot The Station (free, tells you when ISS flies over). Dark Sky Finder maps light pollution near you.</p>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-amber-50 border-amber-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-amber-900"><span className="font-semibold">For older eyes:</span> Let your eyes adjust for 20 minutes (no phone screens). Use a red flashlight to keep night vision. A reclining lawn chair beats a kink in the neck. Warm clothes - it gets colder than you expect.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print This Page
          </Button>
        </div>
      </div>
    </div>
  );
}
