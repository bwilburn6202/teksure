import { useState, useMemo } from 'react';
import { Home, CheckCircle2, AlertCircle, Printer, ChevronRight, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Item {
  id: string;
  question: string;
  why: string;
  fix: string;
  priority: 'high' | 'medium' | 'low';
}

interface Room {
  id: string;
  emoji: string;
  name: string;
  intro: string;
  items: Item[];
}

const ROOMS: Room[] = [
  {
    id: 'bathroom',
    emoji: '🛁',
    name: 'Bathroom',
    intro: 'Bathrooms are the #1 location for falls in the home. Wet floors and reaching for grab bars that are not there are common causes.',
    items: [
      {
        id: 'b1',
        question: 'Are there grab bars beside the toilet and inside the shower or tub?',
        why: 'Reaching for a towel rack or shower curtain rod when you slip can pull them off the wall. Grab bars are bolted into wall studs and hold up to 250 pounds.',
        fix: 'Install grab bars at: (1) the side of the toilet, (2) the entrance to the shower, and (3) inside the shower. A handyman can install three for under $100. Choose ones rated for at least 250 lbs.',
        priority: 'high',
      },
      {
        id: 'b2',
        question: 'Is there a non-slip mat inside and outside the shower or tub?',
        why: 'Wet tile is slippery. Non-slip mats with suction cups grip the floor and reduce slip risk.',
        fix: 'Buy a rubber non-slip mat with suction cups for inside the shower (about $10) and a fabric or rubber-backed mat for outside. Replace fabric mats every 6 months as the backing wears out.',
        priority: 'high',
      },
      {
        id: 'b3',
        question: 'Can you sit down to shower if needed?',
        why: 'Standing for the duration of a shower can be exhausting and increases fall risk if you become dizzy or fatigued.',
        fix: 'A shower chair or transfer bench costs $30 to $80 at most pharmacies and online. Medicare may cover one with a prescription.',
        priority: 'medium',
      },
      {
        id: 'b4',
        question: 'Is the toilet seat at a comfortable height?',
        why: 'Standard toilets are too low for many seniors. Pushing yourself up from a low seat strains the knees and back.',
        fix: 'A raised toilet seat (3 to 5 inches taller) costs $25 to $50 and snaps onto the existing toilet. Some have armrests for added support.',
        priority: 'medium',
      },
      {
        id: 'b5',
        question: 'Is the bathroom floor free of throw rugs that can slide?',
        why: 'Loose throw rugs are a major tripping hazard, especially when wet.',
        fix: 'Either remove throw rugs or replace them with rugs that have non-slip backing. Tape down corners with double-sided carpet tape if needed.',
        priority: 'high',
      },
    ],
  },
  {
    id: 'bedroom',
    emoji: '🛏️',
    name: 'Bedroom',
    intro: 'Most nighttime falls happen between the bed and the bathroom. Good lighting and a clear path matter most.',
    items: [
      {
        id: 'be1',
        question: 'Is there a nightlight or motion-activated light between your bed and the bathroom?',
        why: 'Walking to the bathroom in the dark, half-asleep, is a leading cause of nighttime falls.',
        fix: 'Plug-in motion-activated nightlights cost $10 to $20 for a pack of three. Place one near your bed, one in the hallway, and one in the bathroom.',
        priority: 'high',
      },
      {
        id: 'be2',
        question: 'Is your phone or a phone charger within reach of the bed?',
        why: 'In an emergency at night, you should not have to get out of bed and walk to find your phone.',
        fix: 'Keep your phone on a nightstand, plugged into a charger overnight. Save 911 and at least one trusted contact in your favorites for one-tap calling.',
        priority: 'high',
      },
      {
        id: 'be3',
        question: 'Is the path from bed to bathroom clear of cords, shoes, and clutter?',
        why: 'Anything on the floor can be a trip hazard when you cannot see well.',
        fix: 'Walk the path during daylight and remove or relocate anything on the floor. Tuck cords against walls with cord covers (about $15 at any hardware store).',
        priority: 'high',
      },
      {
        id: 'be4',
        question: 'Is your bed at a comfortable height to sit and stand from?',
        why: 'Beds that are too low or too high make getting in and out harder, especially for those with joint issues.',
        fix: 'When you sit on the edge of the bed, your feet should rest flat on the floor with knees at a 90-degree angle. If your bed is too low, bed risers ($15 to $30) can raise it 3 to 5 inches.',
        priority: 'low',
      },
    ],
  },
  {
    id: 'kitchen',
    emoji: '🍽️',
    name: 'Kitchen',
    intro: 'Kitchens combine fall risk (slippery floors, climbing for items) with fire risk (unattended cooking is a leading cause of home fires for seniors).',
    items: [
      {
        id: 'k1',
        question: 'Are frequently-used items stored between waist and shoulder height?',
        why: 'Reaching overhead or bending to low cabinets repeatedly increases fall risk and back strain.',
        fix: 'Move daily items (plates, mugs, cookware) to easy-reach cabinets. Move rarely-used items to top shelves and bottom cabinets.',
        priority: 'medium',
      },
      {
        id: 'k2',
        question: 'Do you have a stable step stool with handrails (NOT a chair)?',
        why: 'Standing on chairs, boxes, or unsteady stools causes a significant share of senior falls. A proper step stool with a handrail is much safer.',
        fix: 'A 2- or 3-step folding stool with a top rail costs $40 to $80. Search "senior step stool with handrail."',
        priority: 'high',
      },
      {
        id: 'k3',
        question: 'Is there a working smoke alarm in or near the kitchen?',
        why: 'Cooking fires are the #1 cause of home fires. The smoke alarm in the kitchen area is critical.',
        fix: 'Check that the smoke alarm chirps when you press the test button. Replace the battery once a year (or buy a 10-year sealed-battery alarm — about $25). The alarm itself should be replaced every 10 years.',
        priority: 'high',
      },
      {
        id: 'k4',
        question: 'Do you have a kitchen timer set whenever you cook?',
        why: 'Walking away from the stove to do another task and forgetting causes many kitchen fires.',
        fix: 'Use a timer every time you cook — your microwave timer, a kitchen timer ($10), or "Hey Siri, set a 10-minute timer." Or buy an automatic stove shut-off device like FireAvert.',
        priority: 'medium',
      },
      {
        id: 'k5',
        question: 'Is there a fire extinguisher within reach?',
        why: 'For a small grease or pan fire, a quick extinguisher response can prevent it from spreading.',
        fix: 'Buy a "K-Class" or general-purpose ABC fire extinguisher rated for kitchen fires ($30 to $50). Mount it near the kitchen exit, not above the stove.',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'living-room',
    emoji: '🛋️',
    name: 'Living Room',
    intro: 'The living room is where seniors spend much of the day. Lighting, seating height, and clear pathways matter most.',
    items: [
      {
        id: 'l1',
        question: 'Are walking pathways clear of furniture, cords, and rugs?',
        why: 'Even minor obstacles create trip hazards over time, especially with reduced peripheral vision.',
        fix: 'Walk through the room and identify anything you have to step over or around. Move furniture if needed to create wider paths. Replace small throw rugs with low-pile area rugs that lay flat.',
        priority: 'high',
      },
      {
        id: 'l2',
        question: 'Is your favorite chair easy to get in and out of?',
        why: 'Chairs that are too low or too soft are difficult to rise from, especially with knee or hip issues.',
        fix: 'A chair should be firm enough that you do not sink in, with armrests at the right height to push up from. Furniture risers can raise an existing chair. Lift chairs (with a power-assist lift) start at $400 and may be partly covered by Medicare.',
        priority: 'medium',
      },
      {
        id: 'l3',
        question: 'Is the room well-lit, including in the corners?',
        why: 'Poor lighting hides trip hazards and increases fall risk, especially in the evening.',
        fix: 'Use multiple light sources — overhead, lamps, and task lighting. Replace bulbs with brighter LEDs (which run cool and last 10+ years). Add motion-activated lights in dark corners.',
        priority: 'medium',
      },
      {
        id: 'l4',
        question: 'Is the TV remote clearly visible and reachable from your usual seat?',
        why: 'Reaching, leaning, or getting up unnecessarily increases fall risk.',
        fix: 'Use a side table or remote caddy near your chair. Consider a large-button remote or a universal remote programmed for one-button TV operation.',
        priority: 'low',
      },
    ],
  },
  {
    id: 'stairs',
    emoji: '🪜',
    name: 'Stairs',
    intro: 'Stairs are responsible for many of the most serious senior falls. Sturdy handrails on both sides and good lighting are essential.',
    items: [
      {
        id: 's1',
        question: 'Are there sturdy handrails on BOTH sides of every staircase?',
        why: 'Handrails on only one side leave you without support during a stumble. Most building codes now require both sides.',
        fix: 'A second handrail can be installed by a handyman for $100 to $300. Make sure handrails extend the full length of the staircase, including the top and bottom step.',
        priority: 'high',
      },
      {
        id: 's2',
        question: 'Are stairs well-lit at both top and bottom?',
        why: 'Misjudging a step in dim light is one of the most common causes of stair falls.',
        fix: 'Add a light switch at both top and bottom (a "3-way switch" — an electrician installs this for under $200). Add motion-activated stair lights for nighttime use.',
        priority: 'high',
      },
      {
        id: 's3',
        question: 'Is the carpet or stair tread secure with no loose edges?',
        why: 'Loose carpet edges or worn-down stair treads can catch a foot mid-step.',
        fix: 'Have a flooring contractor secure or replace any loose stair runners. Add non-slip stair treads (rubber, $20 for a pack) on uncarpeted wood stairs.',
        priority: 'high',
      },
      {
        id: 's4',
        question: 'Are stairs free of clutter (no items stored on steps)?',
        why: 'Even a small item on a stair is a serious fall hazard.',
        fix: 'Make a rule: nothing stays on the stairs. Items waiting to go up or down should be carried at the time, not left.',
        priority: 'high',
      },
    ],
  },
  {
    id: 'outdoor',
    emoji: '🌳',
    name: 'Outdoor & Entry',
    intro: 'Front and back entries, walkways, and steps are where you transition between safe surfaces and the outdoors. Weather adds extra risk.',
    items: [
      {
        id: 'o1',
        question: 'Is the walkway from car to door free of cracks, uneven surfaces, and obstacles?',
        why: 'Cracked or uneven concrete is one of the top fall hazards for seniors entering or leaving the home.',
        fix: 'Have a concrete contractor patch or replace uneven sections. Mark sudden height changes with bright tape if you cannot fix them right away.',
        priority: 'high',
      },
      {
        id: 'o2',
        question: 'Is the front porch or doorstep well-lit at night?',
        why: 'Coming home in the dark and fumbling with keys at an unlit door is risky.',
        fix: 'Install motion-activated outdoor lights (about $25). They turn on automatically when you approach and turn off after you go inside.',
        priority: 'high',
      },
      {
        id: 'o3',
        question: 'Is there a railing alongside any outdoor steps?',
        why: 'Outdoor steps are often more uneven than indoor stairs and exposed to ice, rain, and leaves.',
        fix: 'Install a metal handrail alongside any outdoor steps. A handyman can install one for $100 to $300.',
        priority: 'high',
      },
      {
        id: 'o4',
        question: 'Do you have a plan for ice and snow removal in winter?',
        why: 'Slipping on ice while shoveling or walking to the mail is a leading cause of winter injury.',
        fix: 'Hire a service or arrange a neighbor to clear walkways. Keep a bucket of ice melt by the door. Wear shoes with rubber soles outside (or attach ice cleats).',
        priority: 'medium',
      },
    ],
  },
];

type ItemState = 'unanswered' | 'safe' | 'risk';

export default function HomeSafetyWalkthrough() {
  const [states, setStates] = useState<Record<string, ItemState>>({});
  const [expanded, setExpanded] = useState<string>('bathroom');
  const [showRisks, setShowRisks] = useState(false);

  const allItems = useMemo(() => ROOMS.flatMap(r => r.items.map(i => ({ ...i, roomName: r.name, roomEmoji: r.emoji }))), []);
  const totalItems = allItems.length;
  const answeredCount = Object.values(states).filter(s => s !== 'unanswered').length;
  const riskCount = Object.values(states).filter(s => s === 'risk').length;
  const safeCount = Object.values(states).filter(s => s === 'safe').length;
  const pct = Math.round((answeredCount / totalItems) * 100);
  const allDone = answeredCount === totalItems;

  const setItemState = (id: string, state: ItemState) => {
    setStates(prev => ({ ...prev, [id]: state }));
  };

  const toggle = (id: string) => setExpanded(prev => (prev === id ? '' : id));

  const risks = allItems.filter(i => states[i.id] === 'risk');
  const highPriorityRisks = risks.filter(i => i.priority === 'high');

  return (
    <>
      <SEOHead
        title="Home Safety Walkthrough — TekSure"
        description="Room-by-room safety check for seniors aging in place. Answer simple questions and get a prioritized list of fixes for falls, fires, and other home hazards."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 print:hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950/60 mb-4">
              <Home className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Home Safety Walkthrough</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Room-by-room safety check. Answer the questions and get a prioritized list of fixes.
            </p>
          </div>

          {/* Progress */}
          {!showRisks && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 mb-5 shadow-sm print:hidden">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                  {answeredCount} of {totalItems} ({pct}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex gap-4 mt-3 text-xs">
                <span className="text-green-600 dark:text-green-400 font-medium">✓ {safeCount} safe</span>
                <span className="text-red-600 dark:text-red-400 font-medium">⚠ {riskCount} need fixing</span>
              </div>
            </div>
          )}

          {/* Walkthrough mode */}
          {!showRisks && (
            <>
              <div className="space-y-3">
                {ROOMS.map(room => {
                  const isOpen = expanded === room.id;
                  const roomAnswered = room.items.filter(i => states[i.id] !== undefined && states[i.id] !== 'unanswered').length;
                  const roomRisks = room.items.filter(i => states[i.id] === 'risk').length;

                  return (
                    <div key={room.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                      <button onClick={() => toggle(room.id)} className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <span className="text-3xl">{room.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 dark:text-gray-100">{room.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {roomAnswered} of {room.items.length} checked
                            {roomRisks > 0 && <span className="text-red-600 dark:text-red-400 ml-2">• {roomRisks} need fixing</span>}
                          </p>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </button>

                      {isOpen && (
                        <div className="border-t border-gray-100 dark:border-gray-800">
                          <p className="px-5 py-3 text-sm text-gray-600 dark:text-gray-400 bg-orange-50/50 dark:bg-orange-950/20 italic">
                            {room.intro}
                          </p>
                          <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
                            {room.items.map(item => {
                              const state = states[item.id] || 'unanswered';
                              return (
                                <div key={item.id} className="px-5 py-4">
                                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">{item.question}</p>
                                  <div className="grid grid-cols-2 gap-2 mb-3">
                                    <button
                                      onClick={() => setItemState(item.id, 'safe')}
                                      className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                        state === 'safe'
                                          ? 'bg-green-600 text-white'
                                          : 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/50'
                                      }`}
                                    >
                                      ✓ Yes (safe)
                                    </button>
                                    <button
                                      onClick={() => setItemState(item.id, 'risk')}
                                      className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                        state === 'risk'
                                          ? 'bg-red-600 text-white'
                                          : 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/50'
                                      }`}
                                    >
                                      ⚠ No (need to fix)
                                    </button>
                                  </div>
                                  {state === 'risk' && (
                                    <div className="mt-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                                      <p className="text-xs font-semibold text-amber-800 dark:text-amber-200 uppercase tracking-wide mb-1">How to fix this</p>
                                      <p className="text-sm text-amber-900 dark:text-amber-100">{item.fix}</p>
                                      <p className="text-xs text-amber-700 dark:text-amber-300 mt-2 italic">{item.why}</p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* See plan button */}
              {answeredCount > 0 && (
                <button
                  onClick={() => setShowRisks(true)}
                  className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors"
                >
                  See My Action Plan
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </>
          )}

          {/* Action plan */}
          {showRisks && (
            <>
              <div className="text-center mb-6 print:mb-2">
                {risks.length === 0 ? (
                  <>
                    <Trophy className="w-16 h-16 mx-auto text-green-500 mb-3" />
                    <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Great work!</h2>
                    <p className="text-gray-600 dark:text-gray-400">No safety risks identified in your home.</p>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-16 h-16 mx-auto text-amber-500 mb-3 print:hidden" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Your Safety Action Plan</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {risks.length} item{risks.length === 1 ? '' : 's'} to address
                      {highPriorityRisks.length > 0 && ` (${highPriorityRisks.length} high priority)`}
                    </p>
                    <p className="hidden print:block text-sm mt-1 text-gray-500">Generated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </>
                )}
              </div>

              {risks.length > 0 && (
                <div className="space-y-3 mb-6">
                  {/* High priority */}
                  {highPriorityRisks.length > 0 && (
                    <>
                      <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mt-4 print:mt-2">🚨 High Priority — Fix Soon</h3>
                      {highPriorityRisks.map(item => (
                        <div key={item.id} className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl p-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.roomEmoji} {item.roomName}</p>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.question}</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> {item.fix}</p>
                        </div>
                      ))}
                    </>
                  )}
                  {/* Medium / low */}
                  {risks.filter(r => r.priority !== 'high').length > 0 && (
                    <>
                      <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400 mt-6 print:mt-2">📋 Address When You Can</h3>
                      {risks.filter(r => r.priority !== 'high').map(item => (
                        <div key={item.id} className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.roomEmoji} {item.roomName}</p>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.question}</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> {item.fix}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}

              <div className="flex gap-3 print:hidden">
                <button
                  onClick={() => setShowRisks(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Back to Walkthrough
                </button>
                {risks.length > 0 && (
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    Print Action Plan
                  </button>
                )}
              </div>
            </>
          )}

          {/* Footer note */}
          {!showRisks && allDone && (
            <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center print:hidden">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <p className="font-semibold text-green-800 dark:text-green-200">Walkthrough complete!</p>
              <p className="text-sm text-green-700 dark:text-green-300">Click "See My Action Plan" above for a printable summary.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
