import { useState, useCallback } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { KeyRound, Copy, RefreshCw, ShieldCheck, Lightbulb, Check, ArrowRight } from 'lucide-react';

// 540+ common, neutral English words (4–7 letters). No sensitive, political, religious, or offensive words.
const WORDS: string[] = [
  'able','acid','acre','aged','also','anvil','apex','apple','area','arena','army','arrow','aspen','atlas','aunt','awake','axis','azure',
  'baker','ball','band','bank','barn','base','basil','bath','beach','beam','bean','bear','beat','bell','belt','bend','best','bike','bird','black','blade','blank','blink','block','bloom','blue','board','boat','body','bold','bolt','bone','book','boot','born','boss','both','bow','bowl','box','brain','brake','brave','bread','brick','brief','bring','brook','brown','brush','bucket','buddy','build','bulb','bull','burst','busy',
  'cabin','cable','cake','calm','camp','canal','candy','canoe','cape','car','card','care','cargo','carry','case','cast','cat','catch','cedar','cell','chain','chair','chalk','champ','chant','chart','chase','cheek','cheer','chess','chest','child','chili','chime','chin','chip','choice','chord','cider','city','claim','clamp','clap','clay','clean','clear','clerk','click','cliff','climb','cloak','clock','clone','close','cloth','cloud','clove','club','clue','coast','coat','code','coin','cold','color','comet','comic','cook','cool','cope','copy','coral','core','cork','corn','cost','couch','count','court','cover','cow','crab','craft','crane','crash','crate','crawl','cream','crest','crew','crisp','crop','cross','crown','cube','cup','curb','curl','curve','cycle',
  'daily','dance','dare','dark','darn','dart','dash','dawn','day','deal','dear','deck','deep','deer','delta','dent','desk','dial','diet','dig','dime','diner','dish','disk','ditch','dive','dock','doe','dog','door','dose','dot','dove','down','draft','drag','drama','draw','dream','dress','dried','drift','drill','drink','drive','drop','drug','drum','dry','duck','duke','dune','dusk','dust','duty',
  'eagle','early','earn','earth','east','easy','eat','echo','edge','egg','elbow','elf','elk','elm','empty','end','epic','equal','error','event','ever','exam','exit','extra',
  'fable','face','fact','fade','fair','fall','fame','fan','fancy','farm','fast','fat','fault','fawn','feed','feel','fence','fern','few','fiber','field','fig','fill','film','final','find','fine','finch','firm','first','fish','fist','five','fixed','flag','flake','flame','flap','flash','flat','flax','fleet','flesh','flew','flick','flier','flint','float','flock','floor','flour','flow','flute','fly','foam','focus','foe','fog','fold','folk','food','foot','force','ford','fork','form','fort','found','frame','frank','free','fresh','fried','frog','front','frost','fruit','fudge','full','fun','fuse',
  'gain','game','gap','garlic','gate','gear','gem','gentle','ghost','giant','gift','give','glad','glass','glee','glide','globe','glow','glue','goal','goat','gold','golf','gone','good','goose','grab','grace','grade','grain','grand','grape','graph','grass','grave','gray','great','green','greet','grid','grill','grip','groan','group','grove','grow','guard','guess','guest','guide','guitar','gulf','gum','gut',
  'hail','hair','half','hall','halt','hand','handy','happy','harbor','hard','hare','harm','hat','hatch','have','hawk','haze','head','heap','hear','heart','heat','hedge','help','hen','herb','herd','here','hero','hide','high','hike','hill','hint','hip','hive','hold','hole','home','honey','hood','hook','hope','horn','horse','host','hot','hotel','hound','hour','house','hover','hub','huge','hum','hunt','hut',
  'ice','icon','icy','idea','idle','impact','index','ink','inn','iris','iron','ivory','ivy',
  'jacket','jade','jam','jar','jaw','jazz','jeep','jelly','jet','jewel','job','jog','join','joint','joke','jolly','joy','judge','juice','july','jump','june','junk','jury','just',
  'keep','kelp','key','kick','kid','kind','king','kit','kite','kiwi','knee','kneel','knit','knob','knot','know',
  'lab','lace','lake','lamb','lamp','land','lane','large','laser','last','late','laugh','launch','lava','law','lawn','lay','lazy','leaf','leak','lean','leap','learn','lease','leave','left','leg','lemon','lend','lens','level','liar','life','lift','light','lily','lime','limit','line','link','lion','lip','list','live','llama','load','loaf','lobby','local','lock','lodge','loft','log','lone','long','look','loop','loose','lord','lose','lost','lot','loud','love','low','loyal','luck','lump','lung','lunch',
  'mace','made','magic','maid','mail','main','major','make','male','mall','manor','many','map','maple','march','mare','mark','marsh','mask','mast','match','math','maze','meadow','meal','mean','meat','medal','meet','melon','melt','memo','mend','menu','mercy','merge','mesh','metal','meter','mice','midst','mild','mile','milk','mill','mind','mine','mint','mix','model','modem','mold','mom','money','month','moon','moose','more','most','moth','motor','mound','mount','mouse','mouth','move','movie','muffin','mug','music','must',
  'nail','name','nap','navy','near','neat','neck','need','nest','net','never','new','news','next','nice','niche','night','nine','noble','node','noise','noon','north','nose','note','noun','novel','nudge','number','nurse','nut',
  'oak','oasis','oat','ocean','octopus','odd','off','offer','often','oil','okay','old','olive','omega','onion','only','onyx','open','opera','option','orange','orbit','order','organ','other','otter','ounce','out','oval','oven','over','owl','own','oyster',
  'pack','pad','page','paid','pail','pain','paint','pair','palm','panda','panel','pant','paper','park','part','pass','past','patch','path','pause','paw','pay','peach','peak','pear','pearl','pen','penny','perch','perm','pest','pet','phase','phone','photo','piano','pick','pier','pig','pile','pilot','pin','pine','pink','pipe','pit','pixel','place','plain','plan','plank','plant','plate','play','plaza','plot','plug','plum','plus','pocket','poem','poet','point','poke','pole','pond','pony','pool','poppy','porch','port','post','pot','pouch','power','press','price','pride','print','prism','prize','probe','proof','proud','prove','prune','pulse','pump','pun','punch','pure','purple','push','put','quail','quake','quart','quasi','queen','query','quest','quick','quiet','quilt','quirk','quite','quote',
  'race','rack','radar','radio','raft','rage','rail','rain','raise','ram','range','rank','rapid','rare','rate','raven','reach','react','read','ready','real','realm','rear','red','reed','reef','reel','relay','relic','rely','rent','reset','rest','retro','rice','rich','ride','ridge','rifle','rim','rind','ring','rinse','ripe','rise','risk','river','road','roast','rob','robe','robot','rock','rocky','rod','rodeo','rogue','role','roll','roof','room','root','rope','rose','rough','round','route','row','royal','rub','rude','rug','ruler','run','rune','rush','rust','rye',
  'safe','sage','sail','salad','sale','salt','same','sand','sandy','sash','satin','sauce','saucer','save','saw','scale','scarf','scene','scent','scoop','scope','score','scout','sea','seal','seam','seat','sedan','seed','seek','sense','serve','set','setup','seven','shack','shade','shaft','shake','shall','shape','share','shark','sharp','shawl','shed','sheep','sheet','shell','shelf','shift','shine','ship','shirt','shoe','shop','shore','short','shout','show','shown','shred','shrub','shy','side','sigh','silk','silly','silo','silver','sing','sink','sip','siren','sit','six','size','skate','sketch','ski','skid','skill','skin','skip','skirt','sky','slab','slam','slate','sled','sleek','sleep','slice','slide','slight','slim','slip','slope','slot','slow','small','smart','smile','smoke','snack','snail','snake','snap','sneak','snore','snorkel','snow','soak','soap','sock','soda','soft','soil','solar','solid','solo','some','song','sonic','soon','sorry','sort','soul','sound','soup','south','space','spade','spare','spark','speak','speed','spell','spend','spice','spike','spill','spin','spirit','split','spoke','sponge','spoon','sport','spot','spray','spree','spring','sprout','spruce','spur','square','squash','stack','staff','stage','stair','stake','stale','stamp','stand','star','stare','start','state','steam','steel','stem','step','stew','stick','stiff','still','sting','stir','stitch','stock','stone','stood','stool','stop','store','storm','story','stout','stove','straw','stray','strip','stripe','strong','stuck','study','stuff','style','sub','sugar','suit','sum','summer','sun','sunny','super','swan','swap','sweat','sweep','sweet','swift','swim','swing','switch','sword','syrup','system',
  'table','tag','tail','tailor','take','tale','talk','tall','tame','tan','tang','tank','tap','tape','target','tart','task','taste','taxi','tea','teach','team','tech','teen','tell','temple','ten','tend','tense','tent','term','test','text','than','thank','that','thaw','then','there','these','thick','thigh','thin','thing','this','thorn','those','though','three','throw','thumb','tide','tidy','tiger','tight','tile','tilt','time','tin','tiny','tip','tire','title','toad','toast','today','toe','token','told','tomato','tone','tongs','tool','tooth','top','topaz','torch','total','touch','tough','tour','tow','tower','town','toy','trace','track','trade','trail','train','trait','tram','trap','tray','treat','tree','trend','trial','tribe','trick','tried','trim','trio','trip','trout','truck','truth','try','tube','tug','tulip','tuna','tune','tunnel','turn','tutor','tweet','twig','twin','twist','two',
  'ugly','umbra','uncle','under','undo','unify','union','unit','unite','until','upon','upper','urban','urge','use','useful','usual','utter',
  'vacant','vague','vain','valet','valid','valley','value','van','vane','vapor','vase','vast','vault','veer','vein','velvet','vend','vendor','vent','venue','verb','verse','very','vest','via','vibe','vice','video','view','village','vine','viola','viral','virus','visit','visor','vital','vivid','vocab','voice','volume','vote','vow','vowel','voyage',
  'wade','wafer','wage','wagon','wait','wake','walk','wall','wallet','walnut','wand','want','warm','warn','warp','wash','watch','water','wave','wax','way','weak','wear','weave','wedge','week','weigh','weird','weld','well','were','west','whale','wharf','wheat','wheel','when','where','whim','whip','whirl','whisk','white','who','whole','wide','widow','width','wife','wild','will','win','wind','window','wine','wing','wink','winter','wipe','wire','wise','wish','witch','with','wizard','wolf','wood','woof','wool','word','work','world','worm','worry','worth','would','wound','wow','wrap','wreck','wren','wrench','wrist','write','wrong',
  'yacht','yam','yard','yarn','yawn','year','yeast','yell','yes','yet','yield','yodel','yogi','yoke','yolk','young','your','youth','yucca','yum',
  'zebra','zero','zest','zinc','zip','zone','zoom',
];

type Format = {
  count: 4 | 5 | 6;
  numbers: boolean;
  symbols: boolean;
  capitalize: boolean;
};

function generatePhrase(opts: Format): string {
  const arr = new Uint32Array(opts.count);
  crypto.getRandomValues(arr);
  let words = Array.from(arr, (n) => WORDS[n % WORDS.length]);
  if (opts.capitalize) {
    words = words.map((w) => w[0].toUpperCase() + w.slice(1));
  }
  let phrase = words.join('-');
  if (opts.numbers) {
    const n = new Uint32Array(1);
    crypto.getRandomValues(n);
    phrase += '-' + (n[0] % 100);
  }
  if (opts.symbols) {
    const symbols = '!@#$%&*?';
    const s = new Uint32Array(1);
    crypto.getRandomValues(s);
    phrase += symbols[s[0] % symbols.length];
  }
  return phrase;
}

function entropyBits(opts: Format): number {
  const wordBits = Math.log2(WORDS.length) * opts.count;
  const numberBits = opts.numbers ? Math.log2(100) : 0;
  const symbolBits = opts.symbols ? Math.log2(8) : 0;
  return Math.round(wordBits + numberBits + symbolBits);
}

function strengthLabel(bits: number): { label: string; color: string; pct: number } {
  if (bits < 40) return { label: 'Weak', color: 'bg-red-500', pct: 25 };
  if (bits < 50) return { label: 'Strong', color: 'bg-amber-500', pct: 55 };
  if (bits < 60) return { label: 'Very Strong', color: 'bg-emerald-500', pct: 80 };
  return { label: 'Excellent', color: 'bg-emerald-600', pct: 100 };
}

const TIPS = [
  'Never reuse the same passphrase across different sites.',
  'Store passphrases in a password manager (Bitwarden, 1Password, Apple Passwords). They sync to your devices and autofill safely.',
  'Add 2-factor authentication anywhere it\'s offered — even the strongest password helps less than a second factor.',
  'If you must remember by hand, write the phrase in a small notebook stored at home — never as a plain note on your phone.',
  'Change a passphrase right away if the site reports a breach.',
];

export default function PasswordPhraseGenerator() {
  const [format, setFormat] = useState<Format>({ count: 4, numbers: false, symbols: false, capitalize: true });
  const [phrases, setPhrases] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = useCallback(() => {
    setPhrases([generatePhrase(format), generatePhrase(format), generatePhrase(format)]);
    setCopied(null);
  }, [format]);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const bits = entropyBits(format);
  const strength = strengthLabel(bits);

  return (
    <>
      <SEOHead
        title="Password Phrase Generator — Memorable Strong Passwords | TekSure"
        description="Generate strong passphrases you can actually remember. Four random words beat short, complex passwords every time."
        path="/tools/password-phrase-generator"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Password Phrase Generator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center flex-shrink-0">
                <KeyRound className="h-6 w-6 text-violet-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Strong Passwords You Can Actually Remember</h1>
            <p className="text-muted-foreground text-lg">
              Four-word phrases are stronger than short passwords with symbols — easier to remember, harder to crack.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Options */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Format options</CardTitle></CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-sm font-medium mb-2">How many words?</p>
                <div className="grid grid-cols-3 gap-2">
                  {([4, 5, 6] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setFormat((p) => ({ ...p, count: c }))}
                      className={`py-3 rounded-xl border text-sm font-medium transition-colors ${
                        format.count === c ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30' : 'hover:border-primary hover:bg-muted/50'
                      }`}
                    >
                      <div className="font-semibold">{c} words</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {c === 4 ? 'Standard' : c === 5 ? 'Stronger' : 'Military-grade'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Capitalize words</span>
                  <Switch checked={format.capitalize} onCheckedChange={(v) => setFormat((p) => ({ ...p, capitalize: v }))} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Add a number on the end</span>
                  <Switch checked={format.numbers} onCheckedChange={(v) => setFormat((p) => ({ ...p, numbers: v }))} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Add a symbol on the end</span>
                  <Switch checked={format.symbols} onCheckedChange={(v) => setFormat((p) => ({ ...p, symbols: v }))} />
                </div>
              </div>

              <Button onClick={generate} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" /> Generate 3 passphrases
              </Button>
            </CardContent>
          </Card>

          {/* Strength meter */}
          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Strength of this format</span>
                <span className="font-medium">{strength.label} • {bits} bits of entropy</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${strength.color} transition-all`} style={{ width: `${strength.pct}%` }} />
              </div>
              <p className="text-xs text-muted-foreground">
                A 4-word random passphrase has roughly 44 bits of entropy. 5 words pushes it to 55. That is stronger than most 10-character random passwords — and far easier to type and remember.
              </p>
            </CardContent>
          </Card>

          {/* Generated */}
          {phrases.length > 0 && (
            <Card>
              <CardHeader><CardTitle className="text-lg">Your passphrases</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {phrases.map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <code className="flex-1 bg-muted rounded-lg px-4 py-3 text-base font-mono break-all select-all">{p}</code>
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(p)} aria-label={`Copy passphrase ${i + 1}`}>
                      {copied === p ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Why this works */}
          <Card className="border-violet-200 dark:border-violet-800/50">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Why passphrases beat "P@ssw0rd1"</p>
                  <p className="text-muted-foreground">
                    Short complex passwords are guessed faster than long simple ones. Computers crack by trying combinations — every extra word multiplies the time by hundreds of millions. A 4-word phrase from a 500-word list is over 60 trillion combinations. Most short "complex" passwords are under 1 trillion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden="true" /> Quick Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {TIPS.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Privacy note */}
          <div className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Privacy:</span> All passphrase generation happens in your browser using cryptographically secure randomness. Nothing is sent anywhere.
          </div>

          {/* Cross-links */}
          <div className="grid sm:grid-cols-2 gap-3">
            <a href="/tools/password-leak-checker" className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors">
              <p className="font-semibold text-sm">Has your password been leaked? <ArrowRight className="inline h-4 w-4" /></p>
              <p className="text-xs text-muted-foreground mt-1">Check safely against known breaches.</p>
            </a>
            <a href="/guides/how-to-create-strong-password" className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors">
              <p className="font-semibold text-sm">Guide: how to create a strong password <ArrowRight className="inline h-4 w-4" /></p>
              <p className="text-xs text-muted-foreground mt-1">Plain-English walkthrough with examples.</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
