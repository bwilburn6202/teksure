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
  { term: 'App Store', definition: 'A built-in shop on your phone or tablet where you can browse, download, and install apps. Apple devices use the App Store; Android devices use Google Play.' },
  { term: 'Artificial Intelligence (AI)', definition: 'Technology that allows computers to perform tasks that normally require human thinking, like answering questions, recognizing photos, or making recommendations.' },
  { term: 'Attachment', definition: 'A file (photo, document, or video) that you include with an email or text message so the recipient can open it.', analogy: 'Like putting a photo inside an envelope along with your letter.' },
  { term: 'Backup', definition: 'A copy of your important files stored in a separate place (like an external drive or the cloud) so you can recover them if something goes wrong.', analogy: 'Like making a photocopy of an important document and keeping it in a safe.' },
  { term: 'Bandwidth', definition: 'The maximum amount of data that can be transferred over a network in a given time.', analogy: 'Like lanes on a highway — more lanes means more traffic can flow.' },
  { term: 'BIOS', definition: 'Basic Input/Output System — low-level software that starts up when you turn on your computer, before the operating system loads.' },
  { term: 'Bluetooth', definition: 'Wireless technology for connecting devices over short distances, like headphones, keyboards, or speakers.', analogy: 'Think of it as an invisible short-range cord connecting two devices.' },
  { term: 'Bookmark', definition: 'A saved link to a website in your browser so you can quickly return to it later.' },
  { term: 'Browser', definition: 'Software used to access the internet and view websites, like Chrome, Safari, Firefox, or Edge.' },
  { term: 'Bug', definition: 'An error or flaw in software that causes it to behave unexpectedly or crash.' },
  { term: 'Cache', definition: 'Temporary memory your computer or browser uses to store data for faster access next time.', analogy: 'Like keeping frequently used items on your desk instead of in the filing cabinet.' },
  { term: 'Chatbot', definition: 'A computer program that can have a text or voice conversation with you, answering questions or helping with tasks. Examples include Siri, Alexa, and ChatGPT.', analogy: 'Like an automated receptionist that can answer common questions.' },
  { term: 'Cloud', definition: 'Storing or accessing data on remote servers over the internet instead of on your local device.', analogy: 'Like renting a storage unit instead of keeping everything in your house.' },
  { term: 'Cookie', definition: 'A small file websites save on your device to remember your preferences, login info, or browsing activity.' },
  { term: 'CPU', definition: 'Central Processing Unit — the main "brain" of your computer that performs calculations and runs programs.', analogy: 'Like the chef in a kitchen — it processes all the instructions.' },
  { term: 'Cursor', definition: 'The small arrow or blinking line on your screen that shows where your mouse is pointing or where text will appear when you type.' },
  { term: 'Cybersecurity', definition: 'The practice of protecting computers, networks, and data from digital attacks, theft, or damage.' },
  { term: 'Data Breach', definition: 'When hackers break into a company\'s system and steal personal information like emails, passwords, or credit card numbers. Companies are required to notify you if your data was involved.' },
  { term: 'Default', definition: 'The setting or option that your device or software uses automatically unless you change it.', analogy: 'Like the temperature your thermostat is set to when you first install it.' },
  { term: 'DM (Direct Message)', definition: 'A private message sent to one person (or a small group) on social media or a messaging app, rather than posting publicly.' },
  { term: 'DNS', definition: 'Domain Name System — translates website names (like google.com) into IP addresses computers can understand.', analogy: 'Like a phone book for the internet.' },
  { term: 'Domain', definition: 'The main part of a website address that identifies it — for example, "google.com" or "teksure.com." Each domain is unique, like a street address.', analogy: 'Think of it as the name on the front of a building.' },
  { term: 'Download', definition: 'Transferring data from the internet to your device. The opposite of upload.' },
  { term: 'Driver', definition: 'Software that allows your operating system to communicate with hardware devices like printers, graphics cards, or Wi-Fi adapters.' },
  { term: 'Emoji', definition: 'Small picture characters you can insert into text messages, emails, and social media posts to express emotions or ideas — like a smiley face 😊 or a thumbs up 👍.' },
  { term: 'Encryption', definition: 'Scrambling data so only authorized people can read it, using a special key to decode.', analogy: 'Like writing a letter in secret code that only the recipient can decode.' },
  { term: 'Ethernet', definition: 'A wired internet connection using a cable plugged directly into your device — usually faster and more reliable than Wi-Fi.' },
  { term: 'Extension', definition: 'An add-on for your browser that adds features, like ad blockers or password managers.' },
  { term: 'Firewall', definition: 'A security system that monitors and controls incoming/outgoing network traffic based on rules.', analogy: 'Like a security guard at a building entrance — only lets approved traffic through.' },
  { term: 'Firmware', definition: 'Low-level software permanently stored on a hardware device that controls how it operates.' },
  { term: 'Follow/Unfollow', definition: 'On social media, "following" someone means their posts will show up in your feed. "Unfollowing" stops their posts from appearing. They are not notified when you unfollow.' },
  { term: 'GHz', definition: 'Gigahertz — a unit measuring processor speed. Higher GHz generally means a faster processor.' },
  { term: 'GPS', definition: 'Global Positioning System — uses satellites to determine your exact location on Earth.' },
  { term: 'GPU', definition: 'Graphics Processing Unit — a specialized processor for rendering images, video, and graphics.', analogy: 'While the CPU is the brain, the GPU is the artist.' },
  { term: 'Hard Drive (HDD)', definition: 'A storage device that uses spinning magnetic disks to store data. Cheaper but slower than SSDs.' },
  { term: 'Hashtag', definition: 'A word or phrase preceded by the # symbol (like #TechTips) used on social media to categorize posts so others can find content on that topic.' },
  { term: 'HDMI', definition: 'High-Definition Multimedia Interface — a connector for sending video and audio from one device to another (like PC to monitor).' },
  { term: 'Hotspot', definition: 'A feature on your phone that shares its cellular internet connection with other devices through Wi-Fi, or a public location that offers Wi-Fi access.', analogy: 'Like turning your phone into a mini Wi-Fi router.' },
  { term: 'HTML', definition: 'HyperText Markup Language — the code that structures web pages, defining headings, paragraphs, images, and links.' },
  { term: 'HTTP/HTTPS', definition: 'HyperText Transfer Protocol (Secure) — the rules for transferring data on the web. HTTPS adds encryption for security.', analogy: 'HTTP is like a postcard anyone can read; HTTPS is a sealed envelope.' },
  { term: 'Icon', definition: 'A small picture on your screen that represents an app, file, or action. Tapping or clicking an icon opens whatever it represents.', analogy: 'Like labeled buttons on a dashboard.' },
  { term: 'Identity Theft', definition: 'When someone steals your personal information (like your Social Security number or bank details) and uses it to open accounts, make purchases, or commit fraud in your name.' },
  { term: 'Incognito/Private Browsing', definition: 'A special browser mode that does not save your browsing history, cookies, or search history on your device. Note: your internet provider and websites can still see your activity.' },
  { term: 'IP Address', definition: 'A unique number assigned to every device on a network, like a mailing address for your computer.' },
  { term: 'ISP', definition: 'Internet Service Provider — the company that provides your internet connection (like Comcast, AT&T, or Verizon).' },
  { term: 'Keyboard Shortcut', definition: 'Pressing specific keys together to perform a task faster (e.g., Ctrl+C to copy, Ctrl+V to paste).' },
  { term: 'LAN', definition: 'Local Area Network — a network connecting devices in a small area like a home or office.' },
  { term: 'Latency', definition: 'The delay between sending a request and receiving a response.', analogy: 'Often called "ping" in gaming — lower latency means faster response.' },
  { term: 'Livestream', definition: 'Broadcasting video in real time over the internet so viewers can watch as it happens. Common on Facebook Live, YouTube, and other platforms.', analogy: 'Like a live TV broadcast, but on the internet.' },
  { term: 'Lock Screen', definition: 'The screen you see when you first wake up your phone or computer, before you enter your password, PIN, or fingerprint. It protects your device from unauthorized access.' },
  { term: 'Malware', definition: 'Malicious software designed to harm your device or steal data. Includes viruses, trojans, ransomware, and spyware.' },
  { term: 'Mbps', definition: 'Megabits per second — the unit used to measure internet speed. Higher Mbps means faster downloads.' },
  { term: 'Meme', definition: 'A funny image, video, or piece of text that is shared widely on the internet. Memes often use humor to comment on everyday life or current events.' },
  { term: 'Modem', definition: 'A device that connects your home network to your ISP\'s network, translating signals between the two.' },
  { term: 'Multitasking', definition: 'Running multiple programs at the same time on your computer or phone.' },
  { term: 'NFC', definition: 'Near Field Communication — a technology that lets two devices communicate when they are very close together (within an inch or two). Used for contactless payments like Apple Pay and Google Pay.', analogy: 'Like tapping a hotel key card on the door lock to open it.' },
  { term: 'Notification', definition: 'An alert or message that pops up on your phone or computer to let you know something happened — like a new email, a text message, or an app update.', analogy: 'Like a doorbell letting you know someone is at the door.' },
  { term: 'Operating System (OS)', definition: 'The main software that manages your computer and lets you run programs. Examples: Windows, macOS, iOS, Android.' },
  { term: 'Overclocking', definition: 'Running a processor faster than its rated speed for better performance. Can cause overheating if not done carefully.' },
  { term: 'Password Manager', definition: 'Software that generates, stores, and auto-fills unique strong passwords for all your accounts.' },
  { term: 'Phishing', definition: 'A scam where attackers pretend to be a trusted company to trick you into revealing passwords or personal info.', analogy: 'Like a fake letter from your bank asking for your account details.' },
  { term: 'Pixel', definition: 'The smallest unit of a digital image or display. More pixels = higher resolution = sharper image.' },
  { term: 'Plug-in', definition: 'An add-on that extends the functionality of software — similar to a browser extension but for any program.' },
  { term: 'Podcast', definition: 'An audio show you can listen to on your phone or computer, available on demand. Topics range from news and storytelling to hobbies and education.', analogy: 'Think of it as a radio show you can listen to whenever you want.' },
  { term: 'Pop-up', definition: 'A small window that appears on top of the page you are viewing, often showing an ad or a warning. Most browsers let you block unwanted pop-ups in settings.' },
  { term: 'Port', definition: 'A physical connector on your device (USB, HDMI) or a virtual channel used by network services.' },
  { term: 'QR Code', definition: 'A square barcode pattern that your phone\'s camera can scan to open a website, menu, payment screen, or other information.', analogy: 'Like a barcode at the grocery store, but it stores a web link instead of a price.' },
  { term: 'RAM', definition: 'Random Access Memory — temporary, fast memory your computer uses to run programs. More RAM = smoother multitasking.', analogy: 'Like the size of your desk — more space means you can work on more things at once.' },
  { term: 'Ransomware', definition: 'A type of malware that locks your files and demands payment to unlock them. Never pay — restore from backup instead.' },
  { term: 'Resolution', definition: 'The number of pixels in a display (e.g., 1920×1080). Higher resolution means sharper, more detailed images.' },
  { term: 'Restart/Reboot', definition: 'Turning your device off and back on again. This clears temporary problems and is often the first step in fixing issues.', analogy: 'Like waking up after a good night\'s sleep — your device starts fresh.' },
  { term: 'Router', definition: 'A device that directs internet traffic between your modem and your devices, creating a local Wi-Fi network.', analogy: 'Like a traffic cop directing cars to the right streets.' },
  { term: 'Screenshot', definition: 'A captured image of what\'s currently on your screen. Use Print Screen (Windows) or Cmd+Shift+3 (Mac).' },
  { term: 'Server', definition: 'A powerful computer that stores websites, files, or services and delivers them to other devices on request.' },
  { term: 'Settings', definition: 'The area on your phone or computer where you can change how your device works — like adjusting screen brightness, sound volume, Wi-Fi connections, and privacy options.' },
  { term: 'SIM Card', definition: 'A small chip inside your phone that connects it to your cellular carrier (like AT&T or Verizon) so you can make calls, send texts, and use mobile data.', analogy: 'Like an ID card that tells the phone network who you are.' },
  { term: 'Smart Home', definition: 'A home equipped with devices (like smart lights, thermostats, or door locks) that you can control from your phone or with voice commands through a voice assistant.' },
  { term: 'Spam', definition: 'Unwanted messages — usually emails or texts — sent in bulk, often trying to sell you something or trick you into clicking a harmful link.', analogy: 'Like junk mail in your physical mailbox, but digital.' },
  { term: 'SSD', definition: 'Solid State Drive — a fast, durable type of storage that replaced older spinning hard drives. No moving parts.', analogy: 'Like flash memory vs. a record player — much faster with no moving parts.' },
  { term: 'Storage (GB/TB)', definition: 'The space on your device for saving files, photos, apps, and videos. Measured in gigabytes (GB) or terabytes (TB). One TB equals about 1,000 GB.', analogy: 'Think of it as the size of your filing cabinet — the bigger it is, the more you can store.' },
  { term: 'Streaming', definition: 'Watching or listening to media in real-time over the internet without downloading it first (Netflix, Spotify, YouTube).' },
  { term: 'Swipe', definition: 'Sliding your finger across a touchscreen in a direction to scroll, navigate, or perform an action on your phone or tablet.' },
  { term: 'Sync', definition: 'Keeping data identical across multiple devices automatically (e.g., iCloud syncing photos between iPhone and Mac).' },
  { term: 'Tablet', definition: 'A portable device with a touchscreen that is larger than a phone but smaller than a laptop. Popular examples include the iPad and Samsung Galaxy Tab.' },
  { term: 'Task Manager', definition: 'A Windows tool (Ctrl+Shift+Esc) that shows running programs, CPU/memory usage, and lets you force-close frozen apps.' },
  { term: 'Text Message (SMS)', definition: 'A short written message sent from one phone to another. SMS stands for Short Message Service. Most phones also support picture messages (MMS).' },
  { term: 'Thread', definition: 'A chain of related messages or replies grouped together in an email, text conversation, or social media post so you can follow the whole conversation in order.' },
  { term: 'Touchscreen', definition: 'A display screen that responds to touch — you tap, swipe, and pinch directly on the screen to control your device instead of using a mouse.', analogy: 'Like pointing at something with your finger instead of using a remote control.' },
  { term: 'Two-Factor Authentication (2FA)', definition: 'A security method requiring two forms of ID to log in — your password plus a code from your phone or email.', analogy: 'Like needing both a key and a PIN to open a safe.' },
  { term: 'Update', definition: 'A newer version of software that fixes bugs, patches security holes, or adds new features. Always keep software updated!' },
  { term: 'Upload', definition: 'Transferring data from your device to the internet or another device. The opposite of download.' },
  { term: 'URL', definition: 'Uniform Resource Locator — the web address you type into a browser (e.g., https://teksure.com).' },
  { term: 'USB', definition: 'Universal Serial Bus — a standard connector for plugging in devices and accessories like mice, keyboards, and flash drives.' },
  { term: 'Video Call', definition: 'A phone call where you can see the other person on screen using your device\'s camera. Popular apps include FaceTime, Zoom, Google Meet, and WhatsApp.', analogy: 'Like a face-to-face conversation, but from anywhere in the world.' },
  { term: 'Voice Assistant', definition: 'Software that listens to your voice and responds to commands or questions. Examples include Siri (Apple), Alexa (Amazon), and Google Assistant.', analogy: 'Like having a helpful assistant you can talk to, built into your device.' },
  { term: 'VPN', definition: 'Virtual Private Network — encrypts your internet connection and hides your IP address for privacy and security.', analogy: 'Like a private tunnel through the internet that no one can peek into.' },
  { term: 'Virus', definition: 'A type of malware that replicates and spreads to harm other devices. Modern antivirus software can detect and remove most viruses.' },
  { term: 'WAN', definition: 'Wide Area Network — a network that covers a large area, like the internet itself.' },
  { term: 'Wearable', definition: 'A small electronic device worn on your body, like a smartwatch or fitness tracker, that monitors health data or shows notifications from your phone.' },
  { term: 'Widget', definition: 'A small, at-a-glance display on your phone\'s home screen or computer desktop that shows useful info — like the weather, a clock, or your calendar — without opening an app.' },
  { term: 'Wi-Fi', definition: 'Wireless technology that lets devices connect to the internet without cables using radio signals from a router.' },
  { term: 'Zero-Day', definition: 'A newly discovered software vulnerability that has no fix yet — attackers can exploit it before developers release a patch.' },
  { term: 'Zoom (Pinch to Zoom)', definition: 'Spreading two fingers apart on a touchscreen to make content larger, or pinching them together to make it smaller. Also the name of a popular video calling app.' },
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
        description="Every tech term explained in plain English. Browse 100+ definitions with simple analogies — no jargon, just answers."
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
