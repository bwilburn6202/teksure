import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pill,
  Smartphone,
  Speaker,
  Watch,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Heart,
  Bell,
  Shield,
  FileText,
  Star,
  DollarSign,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SetupMethod =
  | "iphone"
  | "android"
  | "alexa"
  | "google"
  | "applewatch"
  | "apps"
  | "dispenser";

interface MethodOption {
  id: SetupMethod;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  price: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  bestFor: string;
}

const methods: MethodOption[] = [
  {
    id: "iphone",
    name: "iPhone Health App",
    subtitle: "Already on your iPhone — free",
    icon: Smartphone,
    price: "Free",
    difficulty: "Easy",
    bestFor: "Most iPhone users",
  },
  {
    id: "android",
    name: "Android Phone",
    subtitle: "Samsung Health or Google Health Connect",
    icon: Smartphone,
    price: "Free",
    difficulty: "Easy",
    bestFor: "Android users",
  },
  {
    id: "alexa",
    name: "Alexa / Echo",
    subtitle: "Spoken reminders out loud",
    icon: Speaker,
    price: "Free (Echo required)",
    difficulty: "Easy",
    bestFor: "People home most of the day",
  },
  {
    id: "google",
    name: "Google Assistant / Nest",
    subtitle: "Spoken reminders on Google speakers",
    icon: Speaker,
    price: "Free (Nest required)",
    difficulty: "Easy",
    bestFor: "Google smart home users",
  },
  {
    id: "applewatch",
    name: "Apple Watch",
    subtitle: "Taps your wrist — hard to miss",
    icon: Watch,
    price: "Requires watch",
    difficulty: "Easy",
    bestFor: "Active seniors on the go",
  },
  {
    id: "apps",
    name: "Dedicated Medication App",
    subtitle: "Medisafe, MyTherapy, Round Health, CareZone",
    icon: Pill,
    price: "Free / Premium",
    difficulty: "Medium",
    bestFor: "Complex schedules or many meds",
  },
  {
    id: "dispenser",
    name: "Smart Pill Dispenser",
    subtitle: "Hero or MedMinder — pills come out on time",
    icon: Shield,
    price: "$35–$100/mo",
    difficulty: "Advanced",
    bestFor: "Complex regimens, memory concerns",
  },
];

const MedicationReminderSetup = () => {
  const [selected, setSelected] = useState<SetupMethod>("iphone");

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Pill className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Never Miss Your Medication Again
          </h1>
          <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto">
            Simple reminders across your phone, smart speaker, or smartwatch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Heart className="w-4 h-4 mr-2" /> For seniors &amp; caregivers
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Step-by-step
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Shield className="w-4 h-4 mr-2" /> Safe &amp; simple
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Why this matters */}
        <Alert className="border-red-200 bg-red-50">
          <Info className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-lg text-red-900">Why this matters</AlertTitle>
          <AlertDescription className="text-base text-red-800">
            Nearly half of adults over 65 take five or more medications. Missing doses — or
            doubling them — is one of the top reasons for hospital visits. A good reminder system
            can save your life. This guide walks you through every option, from the free app on
            your phone to a smart pill dispenser.
          </AlertDescription>
        </Alert>

        {/* Choose your setup */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Choose Your Setup</h2>
          <p className="text-lg text-gray-600 mb-6">
            Tap the option that fits your devices. You can always add more later.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {methods.map((method) => {
              const Icon = method.icon;
              const isSelected = selected === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelected(method.id)}
                  className={`text-left rounded-xl border-2 p-5 transition-all ${
                    isSelected
                      ? "border-red-600 bg-red-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-red-300 hover:shadow-sm"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "bg-red-600 text-white" : "bg-red-100 text-red-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline" className="bg-white">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {method.price}
                        </Badge>
                        <Badge variant="outline" className="bg-white">
                          {method.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Setup instructions */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step Setup</h2>

          {selected === "iphone" && <IPhoneSetup />}
          {selected === "android" && <AndroidSetup />}
          {selected === "alexa" && <AlexaSetup />}
          {selected === "google" && <GoogleSetup />}
          {selected === "applewatch" && <AppleWatchSetup />}
          {selected === "apps" && <AppsSetup />}
          {selected === "dispenser" && <DispenserSetup />}
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Medication App Comparison
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            If you prefer a dedicated app, here&apos;s how the top four compare.
          </p>
          <Card>
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-base font-semibold">App</TableHead>
                    <TableHead className="text-base font-semibold">Price</TableHead>
                    <TableHead className="text-base font-semibold">Pros</TableHead>
                    <TableHead className="text-base font-semibold">Cons</TableHead>
                    <TableHead className="text-base font-semibold">Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-base">
                  <TableRow>
                    <TableCell className="font-semibold">
                      Medisafe{" "}
                      <Badge className="ml-1 bg-green-600">
                        <Star className="w-3 h-3 mr-1" /> Top Pick
                      </Badge>
                    </TableCell>
                    <TableCell>Free / $40 yr premium</TableCell>
                    <TableCell>
                      Most popular; family sharing; drug interaction warnings; refill tracker
                    </TableCell>
                    <TableCell>Premium pushes you to upgrade</TableCell>
                    <TableCell>Best overall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">MyTherapy</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>
                      No paywall; tracks blood pressure, weight, mood alongside meds
                    </TableCell>
                    <TableCell>Interface a bit busier</TableCell>
                    <TableCell>Health tracking + meds</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Round Health</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>Beautiful, clean design; very simple to set up</TableCell>
                    <TableCell>Apple (iPhone) only</TableCell>
                    <TableCell>iPhone users who want simple</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">CareZone</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>Great for families managing a loved one&apos;s meds</TableCell>
                    <TableCell>Less focused on you individually</TableCell>
                    <TableCell>Family caregivers</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <BestPracticeCard
              icon={Shield}
              title="Use a backup"
              body="Don't rely only on one device. Pair your phone reminder with a smart speaker, a watch, or a paper chart on the fridge."
            />
            <BestPracticeCard
              icon={FileText}
              title="Use the real drug name"
              body={`Set the reminder to say the name of the medication — "Lisinopril" — not just "pill." It prevents mix-ups.`}
            />
            <BestPracticeCard
              icon={Clock}
              title="Set it 10 minutes early"
              body="Give yourself a buffer. A reminder 10 minutes before you intend to take it means you won't be rushed."
            />
            <BestPracticeCard
              icon={Bell}
              title="Link it to a meal"
              body={`Put the reminder "after breakfast" or "with dinner." Tying it to an existing habit helps you remember.`}
            />
            <BestPracticeCard
              icon={Users}
              title="Loop in family"
              body="Most apps let a spouse or adult child get a text if you miss a dose. A second pair of eyes is powerful."
            />
            <BestPracticeCard
              icon={FileText}
              title="Keep a paper list"
              body="Write every medicine, dose, and time on paper. Keep it in your wallet for emergencies. See our Emergency Contacts guide."
            />
          </div>
          <div className="mt-4">
            <Button asChild variant="outline" className="text-base">
              <Link to="/tools/emergency-contacts-setup">
                Set up Emergency Contacts <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Integration with family */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Loop in Family</h2>
          <p className="text-lg text-gray-600 mb-6">
            The most powerful safety net is a person. Here&apos;s how to let family help.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <Smartphone className="w-8 h-8 text-red-600" />
                <CardTitle className="text-xl">iPhone Health Sharing</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-gray-700">
                Open Health → tap your photo → <strong>Sharing</strong> → Share with Someone. A
                family member sees your medications and whether you took them.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Speaker className="w-8 h-8 text-red-600" />
                <CardTitle className="text-xl">Alexa Drop In</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-gray-700">
                Alexa can check in on you at reminder times, or send a routine that calls a
                family member&apos;s phone if you don&apos;t respond.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bell className="w-8 h-8 text-red-600" />
                <CardTitle className="text-xl">Missed-dose texts</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-gray-700">
                Medisafe and CareZone send an automatic text to your Medfriend if you miss a
                scheduled dose. Quiet, non-intrusive, and a lifesaver.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety */}
        <Alert className="border-amber-300 bg-amber-50">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertTitle className="text-lg text-amber-900">Safety First</AlertTitle>
          <AlertDescription className="text-base text-amber-900">
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Never rely 100% on technology.</strong> Phones die, Wi-Fi drops. Keep a
                paper medication list as a backup.
              </li>
              <li>
                <strong>Tell your doctor about every medication</strong> — including vitamins,
                supplements, and over-the-counter pills. Interactions can be serious.
              </li>
              <li>
                <strong>Belt and suspenders:</strong> a weekly pill organizer PLUS a reminder
                app is the gold-standard combination.
              </li>
              <li>
                If you ever feel dizzy, confused, or unwell after taking a medication — or
                aren&apos;t sure whether you took it — call your pharmacist. That&apos;s what
                they&apos;re there for.
              </li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-lg text-left">
                What if I take my pill but the reminder still goes off?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Tap the notification and mark it as &quot;Taken.&quot; Most apps stop bugging you
                once you check it off. The iPhone Health app and Medisafe both support this.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-lg text-left">
                What if I miss a dose?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Never double up without asking. Some medications are safe to take late; others
                are not. Call your pharmacist or check the instructions on the bottle. As a
                general rule: if it&apos;s close to the next dose, skip the missed one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-lg text-left">
                I take 8 medications at different times. Is this still doable?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Yes. Medisafe and MyTherapy handle complex schedules (multiple times per day,
                alternating days, as-needed). For truly complex regimens, consider a smart pill
                dispenser like Hero — it physically dispenses the right pills at the right time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-lg text-left">
                Is my medication list private?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Apple Health data is encrypted and stays on your phone. Medisafe stores data on
                their servers but does not sell it to advertisers. Always read the privacy
                policy. You can also use it fully offline with a pill organizer and paper.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <Card className="border-2 border-red-600 bg-gradient-to-br from-red-50 to-rose-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">You&apos;ve got this.</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Pick one method above, set up just <strong>one medication</strong> today, and test
              the reminder. Once it works, add the rest. Small steps beat a perfect plan.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-base">
                <Link to="/guides">
                  Browse More Senior-Friendly Guides <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/book">Book a Technician for Help</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/* -------------------- Step components -------------------- */

interface StepProps {
  steps: { title: string; detail?: string }[];
}

const StepList = ({ steps }: StepProps) => (
  <ol className="space-y-3">
    {steps.map((step, idx) => (
      <li key={idx} className="flex gap-4 items-start">
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
          {idx + 1}
        </div>
        <div className="flex-1 pt-1">
          <p className="font-semibold text-lg text-gray-900">{step.title}</p>
          {step.detail && (
            <p className="text-base text-gray-600 mt-1">{step.detail}</p>
          )}
        </div>
      </li>
    ))}
  </ol>
);

const IPhoneSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Smartphone className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">iPhone Health App</CardTitle>
          <CardDescription className="text-base">
            Free, already installed, and syncs with your Apple Watch.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <StepList
        steps={[
          {
            title: "Open the Health app",
            detail: "White icon with a pink heart. It came pre-installed on your iPhone.",
          },
          {
            title: 'Tap the "Medications" tile',
            detail:
              "If you don't see it: tap Summary → Show All Health Data → Medications.",
          },
          {
            title: 'Tap "Add Medication"',
            detail: "Big blue button near the top.",
          },
          {
            title: "Type the name — or tap the camera icon to scan the bottle",
            detail:
              "The camera will read the label. Hold the iPhone about 6 inches from the bottle in good light.",
          },
          {
            title: "Select your medication from the list",
            detail:
              "Apple matches it to a national drug database and fills in the details for you.",
          },
          {
            title: "Enter your dose and how often you take it",
            detail:
              "Example: 10 mg, 1 tablet, once per day. Or twice a day, morning and evening.",
          },
          {
            title: "Set the specific times",
            detail:
              "Example: 8:00 AM and 8:00 PM. The app will ask how many days per week.",
          },
          {
            title: "Turn on reminder alerts",
            detail:
              "A push notification will appear on your phone at each scheduled time. Leave this ON.",
          },
          {
            title: "(Optional) Sync with Apple Watch and share with family",
            detail:
              "Watch gives a wrist tap. Health Sharing lets a spouse or child see that you took it.",
          },
          {
            title: "Test it with a fake reminder 2 minutes from now",
            detail:
              "Add a dummy medication at a time 2 minutes ahead to make sure your alerts work. Delete it after.",
          },
        ]}
      />
    </CardContent>
  </Card>
);

const AndroidSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Smartphone className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Android Phone</CardTitle>
          <CardDescription className="text-base">
            Android doesn&apos;t have one built-in medication app, but you have three good
            options.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900">
          Option A — Samsung Health (Samsung phones)
        </h4>
        <StepList
          steps={[
            { title: "Open Samsung Health" },
            { title: "Scroll to Medications" },
            { title: "Tap + and enter the medication name" },
            { title: "Set dose and reminder times" },
            { title: "Tap Save" },
          ]}
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900">
          Option B — Google Keep reminders (any Android)
        </h4>
        <StepList
          steps={[
            { title: "Open Google Keep" },
            { title: 'Tap + → write "Take [medication name]"' },
            {
              title: "Tap the bell icon and set a daily repeating time",
              detail: "Example: 8:00 AM, repeat daily.",
            },
            { title: "Save" },
          ]}
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900">
          Option C — Download Medisafe (recommended for multiple meds)
        </h4>
        <p className="text-base text-gray-700">
          Medisafe is free on the Google Play Store and is the easiest for Android users
          managing more than one or two medications. Jump to the{" "}
          <strong>Dedicated Medication App</strong> setup for details.
        </p>
      </div>
    </CardContent>
  </Card>
);

const AlexaSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Speaker className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Alexa / Echo</CardTitle>
          <CardDescription className="text-base">
            Alexa will speak the reminder out loud — hard to ignore.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <StepList
        steps={[
          {
            title: "Open the Alexa app on your phone",
            detail: "Blue icon with a white A. It came with your Echo.",
          },
          {
            title: "Tap More (bottom right) → Routines → Create Routine",
          },
          {
            title: "Under When, choose At Time → 8:00 AM (Daily)",
            detail: "Pick whatever time you take your pill.",
          },
          {
            title: "Under Alexa Will, choose Messaging or Custom, then enter the text",
            detail:
              'Example: "Time to take your morning Lisinopril." Include the name so you don\'t confuse meds.',
          },
          { title: "Tap Save" },
          {
            title: 'Test it: say "Alexa, what\'s my morning routine?"',
            detail: "Alexa will confirm. You can also run the routine manually to hear it.",
          },
        ]}
      />
    </CardContent>
  </Card>
);

const GoogleSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Speaker className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Google Assistant / Nest</CardTitle>
          <CardDescription className="text-base">
            Spoken reminders on Google speakers and displays.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <StepList
        steps={[
          { title: "Open the Google Home app on your phone" },
          {
            title: "Tap Routines → + (add) → Personal",
          },
          {
            title: "Set the Starter to At a specific time → 8:00 AM, every day",
          },
          {
            title: 'Add an Action: "Broadcast message"',
            detail:
              'Type: "Time to take your morning medication." Include the drug name for safety.',
          },
          { title: "Save" },
          {
            title: 'Test: say "Hey Google, run my morning routine"',
          },
        ]}
      />
    </CardContent>
  </Card>
);

const AppleWatchSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Watch className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Apple Watch</CardTitle>
          <CardDescription className="text-base">
            The wrist tap is almost impossible to miss — perfect for active seniors.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <StepList
        steps={[
          {
            title: "Set up medications on your iPhone first",
            detail: "Follow the iPhone Health app steps above.",
          },
          {
            title: "On iPhone, open Watch app → Health → Medications",
            detail: "Make sure Show on Apple Watch is ON.",
          },
          {
            title: "On the Watch, open the Medications app",
            detail: "A red pill icon. Scheduled meds appear here at the right time.",
          },
          {
            title: "When the reminder taps your wrist, tap Taken or Skipped",
            detail: "It syncs back to your iPhone and your family member (if sharing).",
          },
          {
            title: "(Optional) Add a watch complication",
            detail:
              "Long-press your watch face → Edit → add Medications so your next dose is always visible.",
          },
        ]}
      />
    </CardContent>
  </Card>
);

const AppsSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Pill className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Dedicated Medication App (Medisafe)</CardTitle>
          <CardDescription className="text-base">
            Best for complex schedules or if you want extra features like refill tracking.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <StepList
        steps={[
          {
            title: "Open the App Store (iPhone) or Play Store (Android)",
          },
          {
            title: 'Search for "Medisafe"',
            detail: "Free to download. You can skip the premium upgrade.",
          },
          {
            title: "Open Medisafe and tap Get Started",
          },
          {
            title: "Create a free account with your email",
          },
          {
            title: "Tap + to add your first medication",
            detail: "Type the name and select from the list.",
          },
          {
            title: "Set the dose, times, and how many days per week",
          },
          {
            title: "Turn on notifications when the app asks",
            detail: "This is critical — without it, you won't get reminders.",
          },
          {
            title: "(Recommended) Add a Medfriend",
            detail:
              "Tap Medfriend → invite a family member by text or email. They get alerted if you miss a dose.",
          },
          {
            title: "Test it: set a fake med for 2 minutes ahead, then delete it",
          },
        ]}
      />
      <Alert className="mt-6 border-blue-200 bg-blue-50">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertDescription className="text-base text-blue-900">
          Not sure which app? See the comparison table below — <strong>Medisafe</strong> is the
          best overall choice for most seniors.
        </AlertDescription>
      </Alert>
    </CardContent>
  </Card>
);

const DispenserSetup = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Shield className="w-8 h-8 text-red-600" />
        <div>
          <CardTitle className="text-2xl">Smart Pill Dispenser (Hero / MedMinder)</CardTitle>
          <CardDescription className="text-base">
            A countertop machine that dispenses the right pills at the right time.
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertDescription className="text-base text-amber-900">
          These are premium devices ($35–$100/month). They&apos;re worth it for people on 5+
          medications or with memory concerns — but for simpler regimens, a phone reminder
          works just as well.
        </AlertDescription>
      </Alert>
      <StepList
        steps={[
          {
            title: "Order Hero (herohealth.com) or MedMinder (medminder.com)",
            detail: "Both ship to your home with setup guides in large print.",
          },
          {
            title: "Unbox and plug it in on the kitchen counter",
            detail: "Somewhere you'll see it daily, near an outlet.",
          },
          {
            title: "Connect to Wi-Fi using the included app",
          },
          {
            title: "Load each cartridge with one type of pill",
          },
          {
            title: "Enter the schedule in the app",
          },
          {
            title: "Add a family caregiver to receive missed-dose texts",
          },
          {
            title: "The dispenser will beep and light up at each scheduled time",
            detail: "Press the dispense button and the correct pill falls into the cup.",
          },
        ]}
      />
    </CardContent>
  </Card>
);

/* -------------------- Small UI helpers -------------------- */

interface BestPracticeCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

const BestPracticeCard = ({ icon: Icon, title, body }: BestPracticeCardProps) => (
  <Card>
    <CardContent className="p-5 flex gap-4 items-start">
      <div className="w-11 h-11 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900 mb-1">{title}</h4>
        <p className="text-base text-gray-700">{body}</p>
      </div>
    </CardContent>
  </Card>
);

export default MedicationReminderSetup;
