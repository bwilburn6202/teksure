import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Languages } from 'lucide-react';

interface Term {
  word: string;
  definition: string;
  example?: string;
}

const terms: Term[] = [
  { word: 'WiFi', definition: 'A way to connect to the internet without using cables — it uses radio waves to send data between your device and a router.', example: 'When you connect your phone to the internet at home without plugging anything in, you\'re using WiFi.' },
  { word: 'Bluetooth', definition: 'A wireless technology that lets devices talk to each other over short distances, like connecting headphones to your phone.', example: 'Pairing your wireless earbuds to your phone uses Bluetooth.' },
  { word: 'RAM', definition: 'Temporary memory your device uses to run apps and tasks right now — the more you have, the more you can do at once.', example: 'If your computer slows down with lots of tabs open, it might be running low on RAM.' },
  { word: 'CPU', definition: 'The "brain" of your computer that processes instructions and makes everything work.', example: 'When your laptop feels slow, the CPU might be working too hard on background tasks.' },
  { word: 'GPU', definition: 'A special processor designed to handle graphics, video, and visual tasks much faster than the CPU.', example: 'Gaming PCs have powerful GPUs to display detailed 3D graphics smoothly.' },
  { word: 'SSD', definition: 'A fast type of storage that uses chips instead of spinning discs — it makes your device start up and load files much quicker.', example: 'Upgrading from an HDD to an SSD can make an old laptop feel brand new.' },
  { word: 'HDD', definition: 'A traditional hard drive that stores data on spinning magnetic discs — cheaper but slower than an SSD.', example: 'Many older computers use HDDs, which is why they can take a while to start up.' },
  { word: 'Cloud', definition: 'Storing files and data on the internet instead of on your device, so you can access them from anywhere.', example: 'When you save photos to Google Photos or iCloud, they\'re stored "in the cloud".' },
  { word: 'VPN', definition: 'A tool that creates a private, encrypted connection to the internet — it hides your activity and location from others.', example: 'Using a VPN on public WiFi helps keep your browsing private and secure.' },
  { word: 'Browser', definition: 'The app you use to visit websites — like Chrome, Safari, Firefox, or Edge.', example: 'When you open Chrome and go to google.com, Chrome is your browser.' },
  { word: 'Cookie', definition: 'A small file a website saves on your device to remember things about you, like your login or preferences.', example: 'Cookies are why a shopping site remembers what\'s in your basket when you come back.' },
  { word: 'Cache', definition: 'Temporary files your device keeps so it can load things faster next time — like a shortcut to data it\'s already seen.', example: 'Clearing your browser cache can fix websites that aren\'t displaying correctly.' },
  { word: 'Download', definition: 'Copying a file from the internet to your device so you can use it offline.', example: 'When you save a photo from a website to your phone, you\'re downloading it.' },
  { word: 'Upload', definition: 'Sending a file from your device to the internet or another computer.', example: 'Posting a photo on Facebook means uploading it from your phone to their servers.' },
  { word: 'Bandwidth', definition: 'The maximum amount of data that can be sent over your internet connection at once — more bandwidth means faster speeds.', example: 'Streaming 4K video requires more bandwidth than browsing the web.' },
  { word: 'Router', definition: 'The box in your home that sends your internet connection to all your devices, usually over WiFi.', example: 'If your internet stops working, restarting the router often fixes it.' },
  { word: 'Modem', definition: 'The device that connects your home to your internet service provider — it brings the internet into your house.', example: 'Your modem plugs into the phone line or cable, and your router connects to the modem.' },
  { word: 'Firewall', definition: 'A security system that monitors and controls what data can enter or leave your network, blocking threats.', example: 'Your computer\'s firewall helps stop hackers from accessing your files.' },
  { word: 'Malware', definition: 'Any software designed to harm your device or steal your data — including viruses, spyware, and ransomware.', example: 'Clicking a dodgy link in an email could install malware on your computer.' },
  { word: 'Virus', definition: 'A type of malware that spreads by attaching itself to files or programs and can damage your device or data.', example: 'Opening an infected email attachment could give your computer a virus.' },
  { word: 'Phishing', definition: 'A scam where someone pretends to be a trusted company to trick you into giving away passwords or personal info.', example: 'A fake email from "your bank" asking you to click a link and enter your details is phishing.' },
  { word: 'Encryption', definition: 'Scrambling data so only authorised people can read it — like putting a message in a secret code.', example: 'WhatsApp uses encryption so only you and the person you\'re messaging can read your conversation.' },
  { word: 'Password Manager', definition: 'An app that securely stores all your passwords so you only need to remember one master password.', example: 'Instead of reusing the same password everywhere, a password manager creates and remembers unique ones for each site.' },
  { word: 'Two-Factor Authentication', definition: 'An extra security step where you prove your identity in two ways — usually your password plus a code sent to your phone.', example: 'When your bank sends you a text code after you enter your password, that\'s two-factor authentication.' },
  { word: 'App', definition: 'Short for application — a program you install on your phone, tablet, or computer to do a specific task.', example: 'WhatsApp, Instagram, and your weather forecast are all apps.' },
  { word: 'Software', definition: 'The programs and apps that run on your device — anything you can\'t physically touch.', example: 'Microsoft Word, your web browser, and your phone\'s operating system are all software.' },
  { word: 'Hardware', definition: 'The physical parts of a device that you can touch — like the screen, keyboard, or battery.', example: 'If your laptop screen cracks, that\'s a hardware problem.' },
  { word: 'Operating System', definition: 'The main software that runs your device and lets you use apps — like Windows, macOS, Android, or iOS.', example: 'When your phone says "iOS 17 update available", it\'s updating the operating system.' },
  { word: 'Update', definition: 'A new version of software that fixes bugs, adds features, or improves security.', example: 'Keeping your apps and operating system updated helps protect you from security threats.' },
  { word: 'Backup', definition: 'A copy of your important files stored somewhere safe, so you don\'t lose them if something goes wrong.', example: 'If your phone breaks but you have a backup, you can restore all your photos and contacts to a new phone.' },
  { word: 'Screenshot', definition: 'A picture of whatever is currently on your screen — useful for saving information or showing someone what you see.', example: 'Press the Print Screen key on Windows or +Shift+3 on Mac to take a screenshot.' },
  { word: 'Streaming', definition: 'Watching or listening to content over the internet in real time without downloading it first.', example: 'Watching a film on Netflix or listening to music on Spotify is streaming.' },
  { word: 'Buffering', definition: 'When a video or song pauses to load more data before continuing — usually caused by a slow internet connection.', example: 'If your YouTube video keeps stopping and starting, it\'s buffering because your connection is slow.' },
  { word: 'Pop-up', definition: 'A small window that appears on your screen, often showing ads or alerts — some are harmless, some are scams.', example: 'If a pop-up says "Your computer is infected! Call this number!" — it\'s almost certainly a scam.' },
  { word: 'Spam', definition: 'Unwanted messages sent in bulk, usually by email — often trying to sell you something or trick you.', example: 'Those emails offering you millions of dollars from a stranger are spam.' },
  { word: 'Crash', definition: 'When a program or device suddenly stops working and closes or freezes unexpectedly.', example: 'If your phone app suddenly closes while you\'re using it, the app has crashed.' },
  { word: 'Reboot', definition: 'Turning your device off and back on again — this often fixes minor glitches and frees up memory.', example: '"Have you tried turning it off and on again?" is the classic tech support advice — and it really does work.' },
  { word: 'Driver', definition: 'Software that helps your operating system communicate with a piece of hardware like a printer or graphics card.', example: 'If your printer stops working after an update, you might need to reinstall its driver.' },
  { word: 'IP Address', definition: 'A unique number assigned to your device on the internet — like a postal address for your computer.', example: 'Every device connected to your WiFi has its own IP address so data goes to the right place.' },
  { word: 'Hotspot', definition: 'A feature that lets you share your phone\'s mobile internet connection with other devices via WiFi.', example: 'If your home WiFi goes down, you can turn on your phone\'s hotspot to get your laptop online.' },
];

export default function JargonTranslator() {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? terms.filter(
        (t) =>
          t.word.toLowerCase().includes(query.toLowerCase()) ||
          t.definition.toLowerCase().includes(query.toLowerCase())
      )
    : terms;

  return (
    <>
      <SEOHead
        title="Tech Jargon Translator | TekSure"
        description="Type any confusing tech word and get a plain-English explanation anyone can understand."
        path="/tools/jargon-translator"
      />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Languages className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Tech Jargon Translator</h1>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Confused by a tech word? Type it below and we'll explain it in plain English — no jargon, no judgement.
        </p>

        <div className="relative max-w-xl mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for a tech word, e.g. 'VPN' or 'cache'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No results found. Try a different word or check your spelling.
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((term) => (
            <Card key={term.word} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{term.word}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{term.definition}</p>
                {term.example && (
                  <p className="text-sm italic text-muted-foreground/80">
                    <span className="font-medium not-italic">For example:</span> {term.example}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
