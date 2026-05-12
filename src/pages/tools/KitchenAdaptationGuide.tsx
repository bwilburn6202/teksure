import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Printer } from "lucide-react";

type Need = "Arthritis hands" | "Low vision" | "Weakness/standing" | "Tremor/Parkinsons" | "One-handed";

interface Recommendation {
  product: string;
  why: string;
  approxCost: string;
  whereToBuy: string;
}

const RECOMMENDATIONS: Record<Need, Recommendation[]> = {
  "Arthritis hands": [
    { product: "OXO Good Grips chef knife", why: "Thick rubber handle requires almost no grip strength", approxCost: "$25-40", whereToBuy: "Target, Amazon, Bed Bath & Beyond" },
    { product: "Black & Decker Lids Off electric jar opener", why: "Opens any jar at the press of a button", approxCost: "$45", whereToBuy: "Amazon, Walmart" },
    { product: "Pampered Chef Manual Food Chopper", why: "Pull a string to chop onions, no knife work needed", approxCost: "$50", whereToBuy: "Pampered Chef consultant or Amazon" },
    { product: "Rocker knife (Wiltshire Staysharp)", why: "Cut with a rocking motion, no sawing", approxCost: "$15", whereToBuy: "Amazon, kitchen shops" },
    { product: "Silicone jar grip pads", why: "Cheap and grip-extending for stubborn jars", approxCost: "$8 for 4-pack", whereToBuy: "Amazon, dollar stores" },
    { product: "Vitamix or Magic Bullet smoothies", why: "Soup, sauces, and smoothies without lots of chopping", approxCost: "$50-450", whereToBuy: "Costco, Amazon, manufacturer" },
  ],
  "Low vision": [
    { product: "Talking kitchen timer (with large-print backup)", why: "Hear the time remaining out loud", approxCost: "$15-25", whereToBuy: "MaxiAids.com, Amazon" },
    { product: "Big-button large-display microwave", why: "Settings readable from across the kitchen", approxCost: "$100-200", whereToBuy: "Best Buy, Amazon" },
    { product: "Contrast tape (bright yellow) for counter edges", why: "Marks where the counter ends so you do not push food off", approxCost: "$10", whereToBuy: "Amazon, hardware store" },
    { product: "Talking measuring cup", why: "Announces the volume as you pour", approxCost: "$25", whereToBuy: "MaxiAids, Amazon" },
    { product: "Liquid level indicator (talking or vibrating)", why: "Beeps when your cup or bowl is full", approxCost: "$15", whereToBuy: "MaxiAids" },
    { product: "Large-print cookbook (or audio cookbook)", why: "Read or listen as you cook", approxCost: "$15-35", whereToBuy: "Amazon, NLS BARD" },
  ],
  "Weakness/standing": [
    { product: "Perching kitchen stool", why: "Sit-stand support at the counter, saves hours of fatigue", approxCost: "$80-180", whereToBuy: "Amazon, IKEA, ErgoErgo" },
    { product: "Pull-out cutting board", why: "Bring the work surface to you instead of leaning over a counter", approxCost: "$40 retrofit, $300 cabinet add", whereToBuy: "Amazon, Home Depot install" },
    { product: "Lightweight nonstick cookware", why: "Replaces 8-pound cast iron with 2-pound aluminum that you can lift one-handed", approxCost: "$30-80", whereToBuy: "Costco, Amazon" },
    { product: "Air fryer", why: "No lifting hot pans, less standing at the stove", approxCost: "$60-150", whereToBuy: "Costco, Amazon, Walmart" },
    { product: "Instant Pot", why: "Sit while it cooks, one-pot meals, no babysitting", approxCost: "$80-150", whereToBuy: "Costco, Amazon" },
    { product: "Wheeled kitchen cart", why: "Move ingredients and tools without carrying", approxCost: "$50-150", whereToBuy: "IKEA, Amazon, Walmart" },
  ],
  "Tremor/Parkinsons": [
    { product: "Weighted utensil set", why: "Heavier handles reduce tremor amplitude", approxCost: "$30-60", whereToBuy: "Amazon, NorthCoast Medical" },
    { product: "Liftware Steady spoon", why: "Active stabilization for advanced tremor (Parkinson Voice Project tested)", approxCost: "$195", whereToBuy: "liftware.com" },
    { product: "Plate guard or scoop plate", why: "High-edge plate keeps food on the dish during tremor", approxCost: "$10-20", whereToBuy: "Amazon" },
    { product: "Nosey cup with cutout", why: "Drink without tilting head back (safer swallow)", approxCost: "$10", whereToBuy: "Amazon, medical supply" },
    { product: "Non-skid plate mat", why: "Holds plate in place on the counter", approxCost: "$8", whereToBuy: "Amazon, restaurant supply" },
    { product: "Slow cooker (hands-off cooking)", why: "Set it and walk away, no fine motor work mid-cooking", approxCost: "$30-60", whereToBuy: "Costco, Target" },
  ],
  "One-handed": [
    { product: "One-handed cutting board with spikes and corner edge", why: "Spikes hold food, corner walls let you spread butter or cut bread with one hand", approxCost: "$30-50", whereToBuy: "Amazon, ParsonsADL" },
    { product: "Suction-cup jar opener (mounts under cabinet)", why: "Twist the jar; the opener holds it for you", approxCost: "$25", whereToBuy: "Amazon, Lakeland" },
    { product: "Electric can opener", why: "Opens cans one-handed with the press of a button", approxCost: "$25-40", whereToBuy: "Target, Amazon" },
    { product: "Rocking T knife", why: "Designed for one-handed cutting with a rocking motion", approxCost: "$20", whereToBuy: "Amazon, NorthCoast" },
    { product: "Pan stabilizer (clamp-on for stovetop)", why: "Holds the pan so you can stir without it skidding", approxCost: "$30", whereToBuy: "Amazon, OT supply" },
    { product: "Pre-cut and pre-washed produce subscription", why: "Hello Fresh, Imperfect Foods, Walmart pickup — no chopping needed", approxCost: "$10-12 per meal", whereToBuy: "HelloFresh, Imperfect Foods" },
  ],
};

export default function KitchenAdaptationGuide() {
  const [need, setNeed] = useState<Need>("Arthritis hands");

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Kitchen Adaptation Guide for Seniors | TekSure" description="Specific product recommendations for adapting your kitchen to arthritis, low vision, weakness, tremor, or one-handed use. Real brands with approximate prices." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <ChefHat className="h-7 w-7 text-orange-700" />
            <h1 className="text-3xl font-bold text-gray-900">Kitchen Adaptation Guide</h1>
          </div>
          <p className="text-gray-600 text-lg">Specific tools and gadgets to keep cooking in your kitchen — even with arthritis, low vision, tremor, weakness, or after a stroke.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Pick your challenge</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(RECOMMENDATIONS) as Need[]).map(n => (
                <Button key={n} size="sm" variant={need === n ? "default" : "outline"} onClick={() => setNeed(n)}>
                  {n}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{need}</h2>
            <div className="space-y-3">
              {RECOMMENDATIONS[need].map((r, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <p className="font-semibold text-gray-900">{r.product}</p>
                  <p className="text-sm text-gray-600 italic">{r.why}</p>
                  <p className="text-sm text-gray-800 mt-1"><span className="font-semibold">Cost:</span> {r.approxCost} &nbsp; <span className="font-semibold">Where:</span> {r.whereToBuy}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Insurance and tax tips:</span> Adaptive equipment may be reimbursable through Medicare Advantage OTC allowance, a Health FSA, or an HSA. A doctor letter of medical necessity helps. Some county Area Agencies on Aging give grant funds for safety equipment.</p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border-emerald-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-emerald-900"><span className="font-semibold">Free trial first:</span> Your local Independent Living Center (find one at ilru.org) often has a lending library where you can borrow adaptive equipment for two weeks before buying. Worth a call.</p>
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
