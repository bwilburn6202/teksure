import { useState, useMemo, useRef } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

interface GlossaryTerm {
  term: string;
  definition: string;
  analogy?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  { term: 'Algorithm', definition: 'A set of step-by-step instructions a computer follows to complete a task or solve a problem.', analogy: 'Like a recipe — follow the steps and you get the result.' },
  { term: 'Antivirus', definition: 'Software that detects and removes malicious programs (malware) from your device.' },
  { term: 'App', definition: 'Short for "application" — a program you run on your phone or computer.', analogy: 'Like individual tools in a toolbox, each designed for a specific job.' },
  { term: 'Bandwidth', definition: 'The maximum amount of data that can be transferred over a network in a given time.', analogy: 'Like lanes on a highway — more lanes means more traffic can flow.' },
  { term: 'BIOS', definition: 'Basic Input/Output System — low-level software that starts up when you turn on your computer, before the operating system loads.' },
  { term: 'Bluetooth', definition: 'Wireless technology for connecting devices over short distances, like headphones, keyboards, or speakers.' },
  { term: 'Bookmark', definition: 'A saved link to a website in your browser so you can quickly return to it later.' },
  { term: 'Browser', definition: 'Software used to access the internet and view websites, like Chrome, Safari, Firefox, or Edge.' },
  { term: 'Bug', definition: 'An error or flaw in software that causes it to behave unexpectedly or crash.' },
  { term: 'Cache', definition: 'Temporary memory your computer or browser uses to store data for faster access next time.', analogy: 'Like keeping frequently used items on your desk instead of in the filing cabinet.' },
  { term: 'Cloud', definition: 'Storing or accessing data on remote servers over the internet instead of on your local device.', analogy: 'Like renting a storage unit instead of keeping everything in your house.' },
  { term: 'Cookie', definition: 'A small file websites save on your device to remember your preferences, login info, or browsing activity.' },
  { term: 'CPU', definition: 'Central Processing Unit — the main "brain" of your computer that performs calculations and runs programs.', analogy: 'Like the chef in a kitchen — it processes all the instructions.' },
  { term: 'Cybersecurity', definition: 'The practice of protecting computers, networks, and data from digital attacks, theft, or damage.' },
  { term: 'DNS', definition: 'Domain Name System — translates website names (like google.com) into IP addresses computers can understand.', analogy: 'Like a phone book for the internet.' },
  { term: 'Download', definition: 'Transferring data from the internet to your device. The opposite of upload.' },
  { term: 'Driver', definition: 'Software that allows your operating system to communicate with hardware devices like printers, graphics cards, or Wi-Fi adapters.' },
  { term: 'Encryption', definition: 'Scrambling data so only authorized people can read it, using a special key to decode.', analogy: 'Like writing a letter in secret code that only the recipient can decode.' },
  { term: 'Ethernet', definition: 'A wired internet connection using a cable plugged directly into your device — usually faster and more reliable than Wi-Fi.' },
  { term: 'Extension', definition: 'An add-on for your browser that adds features, like ad blockers or password managers.' },
  { term: 'Firewall', definition: 'A security system that monitors and controls incoming/outgoing network traffic based on rules.', analogy: 'Like a security guard at a building entrance — only lets approved traffic through.' },
  { term: 'Firmware', definition: 'Low-level software permanently stored on a hardware device that controls how it operates.' },
  { term: 'GHz', definition: 'Gigahertz — a unit measuring processor speed. Higher GHz generally means a faster processor.' },
  { term: 'GPS', definition: 'Global Positioning System — uses satellites to determine your exact location on Earth.' },
  { term: 'GPU', definition: 'Graphics Processing Unit — a specialized processor for rendering images, video, and graphics.', analogy: 'While the CPU is the brain, the GPU is the artist.' },
  { term: 'Hard Drive (HDD)', definition: 'A storage device that uses spinning magnetic disks to store data. Cheaper but slower than SSDs.' },
  { term: 'HDMI', definition: 'High-Definition Multimedia Interface — a connector for sending video and audio from one device to another (like PC to monitor).' },
  { term: 'HTML', definition: 'HyperText Markup Language — the code that structures web pages, defining headings, paragraphs, images, and links.' },
  { term: 'HTTP/HTTPS', definition: 'HyperText Transfer Protocol (Secure) — the rules for transferring data on the web. HTTPS adds encryption for security.', analogy: 'HTTP is like a postcard anyone can read; HTTPS is a sealed envelope.' },
  { term: 'IP Address', definition: 'A unique number assigned to every device on a network, like a mailing address for your computer.' },
  { term: 'ISP', definition: 'Internet Service Provider — the company that provides your internet connection (like Comcast, AT&T, or Verizon).' },
  { term: 'Keyboard Shortcut', definition: 'Pressing specific keys together to perform a task faster (e.g., Ctrl+C to copy, Ctrl+V to paste).' },
  { term: 'LAN', definition: 'Local Area Network — a network connecting devices in a small area like a home or office.' },
  { term: 'Latency', definition: 'The delay between sending a request and receiving a response.', analogy: 'Often called "ping" in gaming — lower latency means faster response.' },
  { term: 'Malware', definition: 'Malicious software designed to harm your device or steal data. Includes viruses, trojans, ransomware, and spyware.' },
  { term: 'Mbps', definition: 'Megabits per second — the unit used to measure internet speed. Higher Mbps means faster downloads.' },
  { term: 'Modem', definition: 'A device that connects your home network to your ISP\'s network, translating signals between the two.' },
  { term: 'Multitasking', definition: 'Running multiple programs at the same time on your computer or phone.' },
  { term: 'Operating System (OS)', definition: 'The main software that manages your computer and lets you run programs. Examples: Windows, macOS, iOS, Android.' },
  { term: 'Overclocking', definition: 'Running a processor faster than its rated speed for better performance. Can cause overheating if not done carefully.' },
  { term: 'Password Manager', definition: 'Software that generates, stores, and auto-fills unique strong passwords for all your accounts.' },
  { term: 'Phishing', definition: 'A scam where attackers pretend to be a trusted company to trick you into revealing passwords or personal info.', analogy: 'Like a fake letter from your bank asking for your account details.' },
  { term: 'Pixel', definition: 'The smallest unit of a digital image or display. More pixels = higher resolution = sharper image.' },
  { term: 'Plug-in', definition: 'An add-on that extends the functionality of software — similar to a browser extension but for any program.' },
  { term: 'Port', definition: 'A physical connector on your device (USB, HDMI) or a virtual channel used by network services.' },
  { term: 'RAM', definition: 'Random Access Memory — temporary, fast memory your computer uses to run programs. More RAM = smoother multitasking.', analogy: 'Like the size of your desk — more space means you can work on more things at once.' },
  { term: 'Ransomware', definition: 'A type of malware that locks your files and demands payment to unlock them. Never pay — restore from backup instead.' },
  { term: 'Resolution', definition: 'The number of pixels in a display (e.g., 1920×1080). Higher resolution means sharper, more detailed images.' },
  { term: 'Router', definition: 'A device that directs internet traffic between your modem and your devices, creating a local Wi-Fi network.', analogy: 'Like a traffic cop directing cars to the right streets.' },
  { term: 'Screenshot', definition: 'A captured image of what\'s currently on your screen. Use Print Screen (Windows) or Cmd+Shift+3 (Mac).' },
  { term: 'Server', definition: 'A powerful computer that stores websites, files, or services and delivers them to other devices on request.' },
  { term: 'SSD', definition: 'Solid State Drive — a fast, durable type of storage that replaced older spinning hard drives. No moving parts.', analogy: 'Like flash memory vs. a record player — much faster with no moving parts.' },
  { term: 'Streaming', definition: 'Watching or listening to media in real-time over the internet without downloading it first (Netflix, Spotify, YouTube).' },
  { term: 'Sync', definition: 'Keeping data identical across multiple devices automatically (e.g., iCloud syncing photos between iPhone and Mac).' },
  { term: 'Task Manager', definition: 'A Windows tool (Ctrl+Shift+Esc) that shows running programs, CPU/memory usage, and lets you force-close frozen apps.' },
  { term: 'Two-Factor Authentication (2FA)', definition: 'A security method requiring two forms of ID to log in — your password plus a code from your phone or email.', analogy: 'Like needing both a key and a PIN to open a safe.' },
  { term: 'Update', definition: 'A newer version of software that fixes bugs, patches security holes, or adds new features. Always keep software updated!' },
  { term: 'Upload', definition: 'Transferring data from your device to the internet or another device. The opposite of download.' },
  { term: 'URL', definition: 'Uniform Resource Locator — the web address you type into a browser (e.g., https://teksure.com).' },
  { term: 'USB', definition: 'Universal Serial Bus — a standard connector for plugging in devices and accessories like mice, keyboards, and flash drives.' },
  { term: 'VPN', definition: 'Virtual Private Network — encrypts your internet connection and hides your IP address for privacy and security.', analogy: 'Like a private tunnel through the internet that no one can peek into.' },
  { term: 'Virus', definition: 'A type of malware that replicates and spreads to harm other devices. Modern antivirus software can detect and remove most viruses.' },
  { term: 'WAN', definition: 'Wide Area Network — a network that covers a large area, like the internet itself.' },
  { term: 'Wi-Fi', definition: 'Wireless technology that lets devices connect to the internet without cables using radio signals from a router.' },
  { term: 'Zero-Day', definition: 'A newly discovered software vulnerability that has no fix yet — attackers can exploit it before developers release a patch.' },
];

const Glossary = () => {
  const [search, setSearch] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = useMemo(() => {
    if (!search.trim()) return glossaryTerms;
    const q = search.toLowerCase();
    return glossaryTerms.filter(t =>
      t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    }
    return map;
  }, [filtered]);

  const allLetters = useMemo(() => {
    const letters = new Set(glossaryTerms.map(t => t.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  const activeLetters = Object.keys(grouped).sort();

  const scrollToLetter = (letter: string) => {
    sectionRefs.current[letter]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tech Glossary — Every Term Explained in Plain English | TekSure"
        description="Every tech term explained in plain English. Browse 65+ definitions with simple analogies — no jargon, just answers."
        path="/glossary"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          name: 'TekSure Technology Glossary',
          description: 'Plain-English definitions of common technology terms for beginners and seniors.',
          url: 'https://teksure.com/glossary',
        }}
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto py-16 md:py-20 px-4">
          <div
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Tech Glossary
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Every tech term explained in plain English — no jargon, just answers.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search terms... (e.g. Wi-Fi, RAM, VPN)"
                className="pl-10 h-11 text-base rounded-xl border-border"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Letter nav */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {allLetters.map(letter => {
              const isActive = activeLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isActive && scrollToLetter(letter)}
                  disabled={!isActive}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer'
                      : 'text-muted-foreground/40 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Terms */}
      <section className="py-16 md:py-20 px-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-medium mb-2">No terms found</p>
            <p className="text-muted-foreground">Try a different search term.</p>
          </div>
        ) : (
          <div className="space-y-12 max-w-3xl mx-auto">
            {activeLetters.map(letter => (
              <div
                key={letter}
                ref={el => { sectionRefs.current[letter] = el; }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <span className="text-3xl md:text-4xl font-bold text-primary">{letter}</span>
                  <Badge variant="outline" className="text-xs rounded-full">
                    {grouped[letter].length} {grouped[letter].length === 1 ? 'term' : 'terms'}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {grouped[letter].map((item, i) => (
                    <div
                      key={item.term}
                    >
                      <div className="rounded-2xl border border-border bg-card p-5 hover:border-border/80 transition-colors">
                        <h3 className="font-semibold text-base text-foreground mb-2">{item.term}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.definition}</p>
                        {item.analogy && (
                          <p className="text-xs text-primary flex items-start gap-2">
                            <span className="shrink-0 mt-0.5">💡</span>
                            <span className="italic">{item.analogy}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Glossary;
