// Full audit (not just the 80-sample preview) of every candidate the
// split-comma-conjunctions.mjs dry run would touch, flagging suspicious ones for
// manual review: right-hand clause doesn't look like it has a verb shortly after
// the subject (heuristic: second word looks like an adjective/noun rather than a
// verb is hard to detect cheaply, so instead we flag cases worth a human glance —
// e.g. right-hand text under 6 words, or subject "it"/"they"/"there" followed by
// a word ending in common noun suffixes that's unusually short).
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const DATA = 'src/data';
const files = readdirSync(DATA).filter((f) => f.startsWith('guides') && f.endsWith('.ts'));
const SUBJECTS = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'there'];
const SPLIT_RE = new RegExp(',\\s+(but|and)\\s+(' + SUBJECTS.join('|') + ')\\s+(?=[a-z])', 'gi');

// A crude but useful signal: the word right after the subject should usually be a
// verb. Flag if that word ends in common noun/adjective suffixes and is NOT a
// common verb we recognize, so a human can double check.
const COMMON_VERBS = new Set([
  'is','are','was','were','will','can','cannot',"can't",'do',"don't",'does',"doesn't",
  'did',"didn't",'have',"haven't",'has',"hasn't",'had',"hadn't",'need',"needs","needn't",
  'want','wants','get','gets','got','make','makes','made','know','knows','knew','see','sees',
  'saw','say','says','said','go','goes','went','take','takes','took','give','gives','gave',
  'come','comes','came','let','lets','use','uses','used','work','works','worked','look','looks',
  'looked','feel','feels','felt','keep','keeps','kept','turn','turns','turned','call','calls',
  'called','try','tries','tried','ask','asks','asked','show','shows','showed','send','sends',
  'sent','tell','tells','told','play','plays','played','move','moves','moved','pay','pays','paid',
  'meet','meets','met','set','sets','run','runs','ran','walk','walks','walked','live','lives',
  'lived','believe','believes','believed','bring','brings','brought','happen','happens','happened',
  'write','writes','wrote','provide','provides','provided','sit','sits','sat','stand','stands',
  'stood','lose','loses','lost','pay','remember','remembers','remembered','consider','considers',
  'considered','appear','appears','appeared','buy','buys','bought','wait','waits','waited','serve',
  'serves','served','die','dies','died','send','expect','expects','expected','build','builds','built',
  'stay','stays','stayed','fall','falls','fell','cut','cuts','reach','reaches','reached','kill','kills',
  'raise','raises','raised','pass','passes','passed','sell','sells','sold','decide','decides','decided',
  'return','returns','returned','explain','explains','explained','hope','hopes','hoped','develop',
  'develops','developed','carry','carries','carried','break','breaks','broke','receive','receives',
  'received','agree','agrees','agreed','support','supports','supported','hit','hits','produce',
  'produces','produced','eat','eats','ate','cover','covers','covered','catch','catches','caught',
  'draw','draws','drew','choose','chooses','chose','cause','causes','caused','point','points','pointed',
  'listen','listens','listened','realize','realizes','realized','apply','applies','applied','plan',
  'plans','planned','allow','allows','allowed','add','adds','added','spend','spends','spent','grow',
  'grows','grew','open','opens','opened','walk','win','wins','won','offer','offers','offered','remain',
  'remains','remained','drive','drives','drove','arrive','arrives','arrived','drop','drops','dropped',
  "won't","wouldn't",'would','should','could','shall','might','must','may','link','links','linked',
  'watch','watches','watched','confirm','confirms','confirmed','save','saves','saved','sign','signs',
  'signed','click','clicks','clicked','tap','taps','tapped','check','checks','checked','delete',
  'deletes','deleted','type','types','typed','copy','copies','copied','follow','follows','followed',
  'install','installs','installed','download','downloads','downloaded','update','updates','updated',
  'read','reads','change','changes','changed','share','shares','shared','connect','connects','connected',
  'become','becomes','became','stop','stops','stopped','start','starts','started','continue','continues',
  'continued','contact','contacts','contacted','include','includes','included','require','requires',
  'required','handle','handles','handled','help','helps','helped','cost','costs','fix','fixes','fixed',
  'find','finds','found','mean','means','meant','process','processes','processed','walk',
]);

let flagged = [];
let total = 0;

for (const file of files) {
  const path = join(DATA, file);
  const content = readFileSync(path, 'utf8');
  const FIELD_RE = /\b(body|content|tip|warning|excerpt):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;
  let fm;
  while ((fm = FIELD_RE.exec(content))) {
    const text = fm[3];
    const boundaryRe = /(\\n|[.!?]\s+)/g;
    const parts = [];
    let last = 0;
    let bm;
    while ((bm = boundaryRe.exec(text))) {
      parts.push(text.slice(last, bm.index + bm[0].length));
      last = bm.index + bm[0].length;
    }
    parts.push(text.slice(last));

    for (const sentence of parts) {
      const matches = [...sentence.matchAll(SPLIT_RE)];
      if (matches.length !== 1) continue;
      const m = matches[0];
      const idx = m.index;
      const left = sentence.slice(0, idx);
      const rest = sentence.slice(idx + m[0].length);
      const leftWords = left.trim().split(/\s+/).filter(Boolean);
      const rightWords = rest.replace(/\\n.*$/s, '').trim().split(/\s+/).filter(Boolean);
      if (leftWords.length < 5 || rightWords.length < 4) continue;
      const opens = (s, c) => (s.match(new RegExp('\\' + c, 'g')) || []).length;
      if (opens(left, '(') !== opens(left, ')')) continue;
      if (opens(left, '[') !== opens(left, ']')) continue;
      if ((left.match(/"/g) || []).length % 2 !== 0) continue;

      total++;
      const nextWord = (rest.match(/^[a-zA-Z']+/) || [''])[0].toLowerCase();
      if (!COMMON_VERBS.has(nextWord)) {
        flagged.push({ file, sentence: sentence.trim(), nextWord });
      }
    }
  }
}

console.log('Total candidates:', total);
console.log('Flagged for manual review (next word not in known-verb list):', flagged.length);
console.log('');
for (const f of flagged) {
  console.log(`[${f.file}] next-word="${f.nextWord}"`);
  console.log('  ', f.sentence);
  console.log('');
}
