// ── OSINT Tools Directory ──────────────────────────────────────────────────
// Based on "The Ultimate OSINT Collection" (start.me/p/DPYPMz)

export interface OsintTool {
  name: string;
  url: string;
  description: string;
  pricing?: 'free' | 'freemium' | 'paid';
}

export interface OsintCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  tools: OsintTool[];
}

export const osintCategories: OsintCategory[] = [
  {
    id: 'search-engines',
    name: 'Search Engines & Indexing',
    emoji: '🔎',
    description: 'Specialized search engines and advanced search techniques for finding public information across the web.',
    tools: [
      { name: 'Google Advanced Search', url: 'https://www.google.com/advanced_search', description: 'Precision search with filters for file type, date, domain, and more.', pricing: 'free' },
      { name: 'Google Search Operators Guide', url: 'https://www.googleguide.com/print/adv_op_ref.pdf', description: 'Reference guide for advanced Google query operators (site:, filetype:, intitle:, etc.).', pricing: 'free' },
      { name: 'Wayback Machine', url: 'https://archive.org/web/', description: 'View historical snapshots of any website — see how pages looked in the past.', pricing: 'free' },
      { name: 'Yandex', url: 'https://yandex.com/', description: 'Russian search engine with strong reverse image search and regional coverage.', pricing: 'free' },
      { name: 'DuckDuckGo', url: 'https://duckduckgo.com/', description: 'Privacy-focused search engine that does not track your searches.', pricing: 'free' },
      { name: 'Baidu', url: 'http://www.baidu.com/', description: 'China\'s largest search engine — useful for finding Chinese-language content.', pricing: 'free' },
      { name: 'Shodan', url: 'https://www.shodan.io/', description: 'Search engine for internet-connected devices — find servers, webcams, IoT devices.', pricing: 'freemium' },
      { name: 'Censys', url: 'https://censys.io/', description: 'Internet-wide scan data for discovering hosts, certificates, and services.', pricing: 'freemium' },
      { name: 'IntelligenceX', url: 'https://intelx.io/', description: 'Search engine for leaked data, breach databases, public documents, and dark web content.', pricing: 'freemium' },
    ],
  },
  {
    id: 'image-search',
    name: 'Image Search & Analysis',
    emoji: '🖼️',
    description: 'Reverse image search tools to trace the origin of photos, find similar images, and extract metadata.',
    tools: [
      { name: 'Google Image Search', url: 'https://images.google.com', description: 'Reverse image search — upload or paste a photo URL to find where it appears online.', pricing: 'free' },
      { name: 'TinEye', url: 'https://tineye.com', description: 'Specialized reverse image search that tracks where an image has been used across the web.', pricing: 'free' },
      { name: 'Yandex Images', url: 'https://yandex.com/images/', description: 'Often finds matches that Google misses — strong for facial recognition and regional content.', pricing: 'free' },
      { name: 'ExifTool', url: 'https://exiftool.org/', description: 'Extract hidden metadata from photos — GPS coordinates, camera model, timestamps, and more.', pricing: 'free' },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media OSINT',
    emoji: '📱',
    description: 'Tools for investigating social media profiles, posts, and connections across platforms.',
    tools: [
      { name: 'Twitter/X Advanced Search', url: 'https://twitter.com/search-advanced', description: 'Filter tweets by user, date range, location, keywords, and engagement metrics.', pricing: 'free' },
      { name: 'Social Bearing', url: 'https://socialbearing.com/', description: 'Analyze any public Twitter/X account — posting habits, top tweets, engagement stats.', pricing: 'free' },
      { name: 'Twitonomy', url: 'https://www.twitonomy.com/', description: 'Detailed analytics for Twitter/X users including tweet frequency, mentions, and hashtags.', pricing: 'freemium' },
      { name: 'Mentionmapp', url: 'https://mentionmapp.com/', description: 'Visualize Twitter/X networks — see who interacts with whom in a visual map.', pricing: 'freemium' },
      { name: 'Tweetbeaver', url: 'https://tweetbeaver.com/', description: 'Download tweet data, find account creation dates, and compare followers between accounts.', pricing: 'free' },
      { name: 'Spoonbill.io', url: 'http://spoonbill.io/', description: 'Track changes to Twitter/X bios over time — see what users have changed about themselves.', pricing: 'free' },
      { name: 'Tinfoleak', url: 'https://tinfoleak.com/', description: 'Deep Twitter/X intelligence — device info, posting schedules, geolocated tweets.', pricing: 'free' },
      { name: 'Sleeping Time', url: 'http://sleepingtime.org/', description: 'Estimate when a Twitter/X user is awake or asleep based on posting patterns.', pricing: 'free' },
      { name: 'Instagram User ID Finder', url: 'https://codeofaninja.com/tools/find-instagram-user-id/', description: 'Look up the numeric user ID for any Instagram account.', pricing: 'free' },
      { name: 'InstaDP', url: 'https://www.instadp.com/', description: 'View and download Instagram profile pictures in full resolution.', pricing: 'free' },
      { name: 'ImgInn', url: 'https://imginn.com/', description: 'Browse Instagram profiles, stories, and posts without an account.', pricing: 'free' },
      { name: 'Snapchat Maps', url: 'https://map.snapchat.com', description: 'View public Snapchat stories posted from specific locations on a world map.', pricing: 'free' },
      { name: 'Wopita', url: 'https://wopita.com/', description: 'Search and analyze Instagram and Facebook profiles and content.', pricing: 'free' },
      { name: 'Sowdust Facebook Search', url: 'https://sowdust.github.io/fb-search/', description: 'Advanced Facebook search tool — find posts, people, and groups with precision filters.', pricing: 'free' },
      { name: 'IntelligenceX Facebook', url: 'https://intelx.io/tools?tab=facebook', description: 'Facebook investigation tools for searching public posts and profile data.', pricing: 'freemium' },
    ],
  },
  {
    id: 'username-lookup',
    name: 'Username & Identity Lookup',
    emoji: '👤',
    description: 'Check if a username exists across hundreds of websites and social platforms.',
    tools: [
      { name: 'NameChk', url: 'https://namechk.com/', description: 'Check username availability across dozens of social networks and domains at once.', pricing: 'free' },
      { name: 'WhatsMyName', url: 'https://whatsmyname.app/', description: 'Search for a username across 1,500+ websites — returns direct links to matching profiles.', pricing: 'free' },
      { name: 'NameCheckup', url: 'https://namecheckup.com/', description: 'Check if a username or domain is available across social media and domain registrars.', pricing: 'free' },
      { name: 'KnowEm', url: 'https://knowem.com/', description: 'Search 500+ social networks to see if a username is taken.', pricing: 'freemium' },
      { name: 'UserSearch.org', url: 'https://usersearch.org/', description: 'Find someone by username across social networks, forums, and dating sites.', pricing: 'free' },
      { name: 'PeekYou', url: 'https://www.peekyou.com/', description: 'Search for people by username, name, or phone — aggregates public social profiles.', pricing: 'free' },
      { name: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', description: 'Command-line tool that hunts usernames across 400+ social networks (requires Python).', pricing: 'free' },
      { name: 'Maltego', url: 'https://www.maltego.com/', description: 'Professional link analysis tool — visualize connections between people, domains, and data.', pricing: 'freemium' },
    ],
  },
  {
    id: 'email-domain',
    name: 'Email, Domain & Network Analysis',
    emoji: '✉️',
    description: 'Tools for finding email addresses, verifying them, and investigating domains and networks.',
    tools: [
      { name: 'MXToolbox', url: 'https://mxtoolbox.com/', description: 'Check email server records (MX, SPF, DKIM), blacklists, and DNS configuration.', pricing: 'freemium' },
      { name: 'Hunter.io', url: 'https://hunter.io/', description: 'Find email addresses associated with any company domain — great for business research.', pricing: 'freemium' },
      { name: 'Phonebook.cz', url: 'https://phonebook.cz/', description: 'Search for email addresses, domains, and URLs from public breach and web data.', pricing: 'free' },
      { name: 'VoilaNorbert', url: 'https://www.voilanorbert.com/', description: 'Find anyone\'s business email address using their name and company domain.', pricing: 'freemium' },
      { name: 'Email Hippo', url: 'https://tools.verifyemailaddress.io/', description: 'Verify if an email address is real and deliverable without sending a message.', pricing: 'freemium' },
      { name: 'Email Checker', url: 'https://email-checker.net/validate', description: 'Validate email addresses — checks format, domain, and mailbox existence.', pricing: 'free' },
      { name: 'Clearbit Connect', url: 'https://clearbit.com/', description: 'Email intelligence tool — see company info, social profiles, and role from an email.', pricing: 'freemium' },
    ],
  },
  {
    id: 'people-search',
    name: 'People Search & Background Checks',
    emoji: '🔍',
    description: 'Look up people by name, phone number, address, or email to find public records and contact info.',
    tools: [
      { name: 'Pipl', url: 'https://pipl.com/', description: 'Deep people search engine — finds social profiles, contact info, and public records.', pricing: 'paid' },
      { name: 'WhitePages', url: 'https://www.whitepages.com/', description: 'Look up people by name, phone, or address — US-focused directory.', pricing: 'freemium' },
      { name: 'TruePeopleSearch', url: 'https://www.truepeoplesearch.com/', description: 'Free people finder — search by name, phone, or address for public records.', pricing: 'free' },
      { name: 'FastPeopleSearch', url: 'https://www.fastpeoplesearch.com/', description: 'Quick free lookup of names, phone numbers, and addresses in the US.', pricing: 'free' },
      { name: 'FastBackgroundCheck', url: 'https://www.fastbackgroundcheck.com/', description: 'Run background checks — criminal records, addresses, and public records.', pricing: 'freemium' },
      { name: 'WebMii', url: 'https://webmii.com/', description: 'Calculate a person\'s online visibility score and find their web presence.', pricing: 'free' },
      { name: '411', url: 'https://www.411.com/', description: 'Classic directory assistance — find people and businesses by name or phone.', pricing: 'free' },
      { name: 'Spokeo', url: 'https://www.spokeo.com/', description: 'Reverse phone, email, and address lookup — aggregates social and public records.', pricing: 'freemium' },
      { name: 'That\'s Them', url: 'https://thatsthem.com/', description: 'Free people finder with email, phone, address, and IP address lookups.', pricing: 'free' },
      { name: 'Voter Records', url: 'https://www.voterrecords.com/', description: 'Search public voter registration data — name, address, party affiliation.', pricing: 'free' },
      { name: 'TrueCaller', url: 'https://www.truecaller.com/', description: 'Identify unknown callers and block spam — global caller ID database.', pricing: 'freemium' },
      { name: 'CallerID Test', url: 'https://calleridtest.com/', description: 'Test and verify caller ID information for phone numbers.', pricing: 'free' },
      { name: 'Infobel', url: 'https://infobel.com/', description: 'International phone directory — find people and businesses worldwide.', pricing: 'free' },
    ],
  },
  {
    id: 'breach-data',
    name: 'Breached Data & Password Tools',
    emoji: '🔐',
    description: 'Check if your accounts have been exposed in data breaches and leaked credential databases.',
    tools: [
      { name: 'HaveIBeenPwned', url: 'https://haveibeenpwned.com/', description: 'Check if your email or phone has been in a data breach — trusted, free, and widely used.', pricing: 'free' },
      { name: 'Dehashed', url: 'https://dehashed.com/', description: 'Search breached credentials by email, username, IP, name, address, or phone.', pricing: 'paid' },
      { name: 'LeakCheck', url: 'https://leakcheck.io/', description: 'Check if your credentials appear in known data breaches.', pricing: 'freemium' },
      { name: 'SnusBase', url: 'https://snusbase.com/', description: 'Search leaked databases by email, username, name, IP, or hash.', pricing: 'paid' },
      { name: 'Scylla.sh', url: 'https://scylla.sh/', description: 'Open-source breach intelligence search engine.', pricing: 'free' },
      { name: 'GhostProject', url: 'https://ghostproject.fr/', description: 'Search for compromised credentials in known data breaches.', pricing: 'freemium' },
      { name: 'BreachDirectory', url: 'https://breachdirectory.org/', description: 'Check if your account has been compromised — shows partial password hashes.', pricing: 'free' },
      { name: 'IntelX', url: 'https://intelx.io/', description: 'Search leaked data, dark web, and public records in one platform.', pricing: 'freemium' },
      { name: 'LeakIX', url: 'https://leakix.net/', description: 'Search engine for exposed data and misconfigured services on the internet.', pricing: 'free' },
    ],
  },
  {
    id: 'website-osint',
    name: 'Website & Domain OSINT',
    emoji: '🌐',
    description: 'Investigate websites — discover their technology stack, DNS records, hosting, and history.',
    tools: [
      { name: 'BuiltWith', url: 'https://builtwith.com/', description: 'See what technology any website is built with — CMS, analytics, hosting, and more.', pricing: 'freemium' },
      { name: 'Domain Dossier', url: 'https://centralops.net/co/', description: 'All-in-one domain research — WHOIS, DNS, traceroute, and service scan.', pricing: 'free' },
      { name: 'DNSlytics', url: 'https://dnslytics.com/reverse-ip', description: 'Reverse IP lookup — find all domains hosted on the same server.', pricing: 'freemium' },
      { name: 'SpyOnWeb', url: 'https://spyonweb.com/', description: 'Find websites that share the same analytics ID, AdSense code, or IP address.', pricing: 'free' },
      { name: 'VirusTotal', url: 'https://www.virustotal.com/', description: 'Scan URLs, files, and domains for malware using 70+ antivirus engines.', pricing: 'free' },
      { name: 'Visual Ping', url: 'https://visualping.io/', description: 'Monitor any webpage for changes — get email alerts when content updates.', pricing: 'freemium' },
      { name: 'Back Link Watch', url: 'http://backlinkwatch.com/index.php', description: 'See which websites link to any domain — useful for understanding web connections.', pricing: 'free' },
      { name: 'ViewDNS', url: 'https://viewdns.info/', description: 'DNS lookup tools — reverse IP, WHOIS, port scanning, and DNS propagation.', pricing: 'free' },
      { name: 'Pentest-Tools Subdomain Finder', url: 'https://pentest-tools.com/information-gathering/find-subdomains-of-domain#', description: 'Discover subdomains of any domain — find hidden services and staging sites.', pricing: 'freemium' },
      { name: 'crt.sh', url: 'https://crt.sh/', description: 'Search SSL/TLS certificate transparency logs — find subdomains and cert history.', pricing: 'free' },
      { name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Historical DNS data — see how a domain\'s records have changed over time.', pricing: 'freemium' },
      { name: 'IPinfo', url: 'https://ipinfo.io/', description: 'IP address geolocation, ASN, company, and hosting provider lookup.', pricing: 'freemium' },
      { name: 'Whois Lookup', url: 'https://whois.domaintools.com/', description: 'Look up domain registration details — owner, registrar, creation date, and expiry.', pricing: 'free' },
      { name: 'Hackertarget', url: 'https://hackertarget.com/', description: 'Online DNS tools — zone transfer, reverse DNS, and subnet lookup.', pricing: 'freemium' },
      { name: 'Netcraft', url: 'https://www.netcraft.com/', description: 'Website fingerprinting — identify server software, hosting, and site technology.', pricing: 'freemium' },
      { name: 'Wappalyzer', url: 'https://www.wappalyzer.com/', description: 'Browser extension that identifies technologies used on any website.', pricing: 'freemium' },
      { name: 'Spyse', url: 'https://spyse.com/', description: 'Cybersecurity search engine for domains, IPs, certificates, and ASNs.', pricing: 'freemium' },
      { name: 'Web Archive', url: 'https://web.archive.org/', description: 'Browse cached versions of any website from the past — see how sites evolved.', pricing: 'free' },
    ],
  },
  {
    id: 'geospatial',
    name: 'Geospatial Intelligence (GEOINT)',
    emoji: '🗺️',
    description: 'Maps, satellite imagery, and location-based tools for geographic analysis.',
    tools: [
      { name: 'Google Earth Pro', url: 'https://earth.google.com/web/', description: 'Explore satellite imagery, 3D terrain, and Street View from around the world.', pricing: 'free' },
      { name: 'OpenStreetMap', url: 'https://www.openstreetmap.org/', description: 'Community-built world map with detailed location data — open and free to use.', pricing: 'free' },
      { name: 'Sentinel Hub', url: 'https://www.sentinel-hub.com/', description: 'Access satellite imagery from Sentinel, Landsat, and other earth observation satellites.', pricing: 'freemium' },
      { name: 'WiGLE', url: 'https://wigle.net/', description: 'Map of wireless networks worldwide — search WiFi and cell tower locations.', pricing: 'free' },
    ],
  },
  {
    id: 'business-osint',
    name: 'Business & Corporate OSINT',
    emoji: '🏢',
    description: 'Research companies, corporate records, ownership structures, and business intelligence.',
    tools: [
      { name: 'OpenCorporates', url: 'https://opencorporates.com/', description: 'Search the world\'s largest open database of companies — 200M+ entries across 140 jurisdictions.', pricing: 'freemium' },
      { name: 'AI HIT', url: 'https://www.aihitdata.com/', description: 'Business intelligence platform — company data, technology usage, and market analysis.', pricing: 'freemium' },
      { name: 'Crunchbase', url: 'https://www.crunchbase.com/', description: 'Startup and company database — funding rounds, leadership, and acquisitions.', pricing: 'freemium' },
      { name: 'SEC EDGAR', url: 'https://www.sec.gov/cgi-bin/browse-edgar', description: 'US Securities and Exchange Commission filings — annual reports, insider trading, and more.', pricing: 'free' },
    ],
  },
  {
    id: 'sock-puppets',
    name: 'Sock Puppets & Anonymity',
    emoji: '🎭',
    description: 'Tools for creating anonymous research identities and protecting your own identity during investigations.',
    tools: [
      { name: 'Fake Name Generator', url: 'https://www.fakenamegenerator.com/', description: 'Generate realistic fake identities — name, address, phone, SSN, email, and more.', pricing: 'free' },
      { name: 'ThisPersonDoesNotExist', url: 'https://www.thispersondoesnotexist.com/', description: 'AI-generated human faces that look real but belong to no one — for research personas.', pricing: 'free' },
      { name: 'Privacy.com', url: 'https://privacy.com/', description: 'Create virtual payment cards for anonymous online purchases and subscriptions.', pricing: 'freemium' },
    ],
  },
  {
    id: 'automation',
    name: 'Frameworks & Automation',
    emoji: '⚙️',
    description: 'OSINT frameworks and automation tools that combine multiple data sources and techniques.',
    tools: [
      { name: 'OSINT Framework', url: 'https://osintframework.com/', description: 'Interactive tree of OSINT tools organized by data type — the go-to starting point.', pricing: 'free' },
      { name: 'Recon-ng', url: 'https://github.com/lanmaster53/recon-ng', description: 'Modular reconnaissance framework for automated OSINT data gathering.', pricing: 'free' },
      { name: 'SpiderFoot', url: 'https://www.spiderfoot.net/', description: 'Automated OSINT scanner — gathers data from 100+ sources about IPs, domains, emails.', pricing: 'freemium' },
      { name: 'theHarvester', url: 'https://github.com/laramies/theHarvester', description: 'Gather emails, subdomains, IPs, and URLs from multiple public data sources.', pricing: 'free' },
      { name: 'Photon', url: 'https://github.com/s0md3v/Photon', description: 'Fast web crawler designed for OSINT — extracts URLs, emails, social media, files.', pricing: 'free' },
    ],
  },
  {
    id: 'working-tools',
    name: 'Technical OSINT Tools',
    emoji: '🛠️',
    description: 'Command-line tools and utilities for hands-on OSINT data collection and analysis.',
    tools: [
      { name: 'breach-parse', url: 'https://github.com/hmaverickadams/breach-parse', description: 'Parse large breach compilation files by domain to find leaked credentials.', pricing: 'free' },
      { name: 'Subfinder', url: 'https://github.com/projectdiscovery/subfinder', description: 'Fast passive subdomain discovery tool using multiple online sources.', pricing: 'free' },
      { name: 'Assetfinder', url: 'https://github.com/tomnomnom/assetfinder', description: 'Find domains and subdomains associated with a given domain.', pricing: 'free' },
      { name: 'httprobe', url: 'https://github.com/tomnomnom/httprobe', description: 'Test a list of domains to see which ones have active HTTP/HTTPS servers.', pricing: 'free' },
      { name: 'Amass', url: 'https://github.com/OWASP/Amass', description: 'OWASP\'s powerful subdomain enumeration and network mapping tool.', pricing: 'free' },
      { name: 'GoWitness', url: 'https://github.com/sensepost/gowitness/wiki/Installation', description: 'Take screenshots of websites in bulk — useful for visual reconnaissance.', pricing: 'free' },
    ],
  },
  {
    id: 'lab-building',
    name: 'OSINT Lab Setup',
    emoji: '🧑‍💻',
    description: 'Set up your own OSINT investigation environment with virtual machines and preconfigured tools.',
    tools: [
      { name: 'VMware Workstation Player', url: 'https://www.vmware.com/products/workstation-player.html', description: 'Run virtual machines on your computer — isolate your OSINT investigations.', pricing: 'free' },
      { name: 'VirtualBox', url: 'https://www.virtualbox.org/wiki/Downloads', description: 'Free, open-source virtualization software — run any OS inside your computer.', pricing: 'free' },
      { name: 'Trace Labs OSINT VM', url: 'https://www.tracelabs.org/initiatives/osint-vm', description: 'Pre-built virtual machine with OSINT tools pre-installed — ready to investigate.', pricing: 'free' },
      { name: 'CSI Linux', url: 'https://csilinux.com/', description: 'Linux distribution designed for cyber investigations with 175+ OSINT tools.', pricing: 'free' },
    ],
  },
  {
    id: 'learning',
    name: 'Training & Learning Resources',
    emoji: '🎓',
    description: 'Courses, videos, and practice platforms to build your OSINT investigation skills.',
    tools: [
      { name: 'TCM Security OSINT Course', url: 'https://academy.tcm-sec.com/', description: 'Practical OSINT training from TCM Security — learn real-world investigation techniques.', pricing: 'paid' },
      { name: 'OSINT Curious', url: 'https://osintcurio.us/', description: 'Community project with webcasts, blogs, and tools for OSINT practitioners.', pricing: 'free' },
      { name: 'Trace Labs', url: 'https://www.tracelabs.org/', description: 'Nonprofit that crowdsources OSINT to find missing persons — volunteer and learn.', pricing: 'free' },
      { name: 'Bellingcat', url: 'https://www.bellingcat.com/', description: 'Investigative journalism group known for OSINT — excellent case studies and guides.', pricing: 'free' },
      { name: 'SANS OSINT Summit', url: 'https://www.sans.org/cyber-security-summit/', description: 'Annual OSINT conference with talks from leading investigators and analysts.', pricing: 'paid' },
      { name: 'GeoGuessr', url: 'https://www.geoguessr.com/', description: 'Practice geolocation skills by guessing locations from Street View imagery.', pricing: 'freemium' },
    ],
  },
];

export const totalToolCount = osintCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
export const categoryCount = osintCategories.length;
