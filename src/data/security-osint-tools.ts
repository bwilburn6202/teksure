// ── Unified Security & OSINT Tools Data ────────────────────────────────────
// Merges: CyberSec modules, OSINT tools, GEOINT resources, OSINT collections

import { osintCategories, totalToolCount as osintToolCount, categoryCount as osintCategoryCount } from './osint-tools';
import { geointCategories, geointToolCount, geointCategoryCount } from './geoint-resources';

// ── Shared types ───────────────────────────────────────────────────────────
export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type Pricing = 'free' | 'freemium' | 'paid';

// ── CyberSec modules ──────────────────────────────────────────────────────
export interface CyberSecModule {
  id: string;
  name: string;
  description: string;
  category: string;
  severity: Severity;
  iconName: string;
  isNew?: boolean;
}

export interface CyberSecTeam {
  id: string;
  name: string;
  color: string;
  modules: CyberSecModule[];
}

export const cyberSecTeams: CyberSecTeam[] = [
  {
    id: 'red-team',
    name: 'Red Team',
    color: 'red',
    modules: [
      { id: 'port-scanner', name: 'Port Scanner', description: 'Identify open ports and services', category: 'Reconnaissance', severity: 'high', iconName: 'Scan' },
      { id: 'dns-recon', name: 'DNS Recon', description: 'Enumerate DNS records and subdomains', category: 'Reconnaissance', severity: 'medium', iconName: 'Globe' },
      { id: 'web-scanner', name: 'Web Scanner', description: 'Scan web applications for vulnerabilities', category: 'Scanning', severity: 'high', iconName: 'FileSearch' },
      { id: 'wireless-recon', name: 'Wireless Recon', description: 'Analyze wireless networks and signals', category: 'Reconnaissance', severity: 'high', iconName: 'Wifi' },
      { id: 'packet-analyzer', name: 'Packet Analyzer', description: 'Capture and analyze network packets', category: 'Analysis', severity: 'medium', iconName: 'Network' },
      { id: 'hash-cracker', name: 'Hash Cracker', description: 'Crack password hashes with multiple algorithms', category: 'Cracking', severity: 'critical', iconName: 'Key' },
      { id: 'password-analyzer', name: 'Password Analyzer', description: 'Evaluate password strength and entropy', category: 'Analysis', severity: 'medium', iconName: 'Lock' },
      { id: 'credential-auditor', name: 'Credential Auditor', description: 'Audit and validate credentials in systems', category: 'Auditing', severity: 'critical', iconName: 'ShieldAlert' },
      { id: 'cve-lookup', name: 'CVE Lookup', description: 'Search and analyze CVE vulnerabilities', category: 'Intelligence', severity: 'high', iconName: 'AlertTriangle' },
      { id: 'exploit-framework', name: 'Exploit Framework', description: 'Access and manage exploitation tools', category: 'Exploitation', severity: 'critical', iconName: 'Code' },
      { id: 'fuzzer', name: 'Fuzzer', description: 'Fuzz applications to find vulnerabilities', category: 'Testing', severity: 'high', iconName: 'Bug' },
      { id: 'ad-recon', name: 'AD Recon', description: 'Enumerate Active Directory structures', category: 'Reconnaissance', severity: 'high', iconName: 'Server' },
      { id: 'ssl-tls-analyzer', name: 'SSL/TLS Analyzer', description: 'Analyze SSL/TLS configurations and vulnerabilities', category: 'Analysis', severity: 'high', iconName: 'ShieldCheck', isNew: true },
      { id: 'subdomain-enumerator', name: 'Subdomain Enumerator', description: 'Discover and enumerate subdomains', category: 'Reconnaissance', severity: 'medium', iconName: 'Globe', isNew: true },
      { id: 'directory-bruteforcer', name: 'Directory Bruteforcer', description: 'Brute force web directories and paths', category: 'Scanning', severity: 'high', iconName: 'FileSearch', isNew: true },
      { id: 'ssrf-scanner', name: 'SSRF Scanner', description: 'Detect Server-Side Request Forgery vulnerabilities', category: 'Scanning', severity: 'critical', iconName: 'Server', isNew: true },
    ],
  },
  {
    id: 'blue-team',
    name: 'Blue Team',
    color: 'blue',
    modules: [
      { id: 'system-scanner', name: 'System Scanner', description: 'Comprehensive system security scanning', category: 'Defense', severity: 'high', iconName: 'Scan' },
      { id: 'network-monitor', name: 'Network Monitor', description: 'Monitor network traffic and anomalies', category: 'Monitoring', severity: 'medium', iconName: 'Monitor' },
      { id: 'log-analyzer', name: 'Log Analyzer', description: 'Analyze and parse security logs', category: 'Analysis', severity: 'high', iconName: 'FileSearch' },
      { id: 'phishing-detector', name: 'Phishing Detector', description: 'Identify and analyze phishing emails', category: 'Threat Detection', severity: 'high', iconName: 'Eye' },
      { id: 'file-integrity', name: 'File Integrity', description: 'Monitor file integrity and changes', category: 'Monitoring', severity: 'high', iconName: 'Fingerprint' },
      { id: 'forensics', name: 'Forensics', description: 'Digital forensics and incident analysis', category: 'Incident Response', severity: 'high', iconName: 'Search' },
      { id: 'threat-intel', name: 'Threat Intel', description: 'Gather and analyze threat intelligence', category: 'Intelligence', severity: 'high', iconName: 'AlertTriangle' },
      { id: 'ir-playbook', name: 'IR Playbook', description: 'Incident response procedures and playbooks', category: 'Response', severity: 'medium', iconName: 'Code' },
      { id: 'siem-rules', name: 'SIEM Rules', description: 'SIEM detection rules and queries', category: 'Detection', severity: 'high', iconName: 'Monitor' },
      { id: 'malware-analyzer', name: 'Malware Analyzer', description: 'Analyze malware samples safely', category: 'Analysis', severity: 'critical', iconName: 'Bug' },
      { id: 'honeypot', name: 'Honeypot', description: 'Deploy and monitor honeypot systems', category: 'Defense', severity: 'medium', iconName: 'Shield' },
      { id: 'email-security', name: 'Email Security', description: 'Email security scanning and filtering', category: 'Protection', severity: 'high', iconName: 'Lock' },
      { id: 'entropy-analyzer', name: 'Entropy Analyzer', description: 'Analyze data entropy and randomness', category: 'Analysis', severity: 'medium', iconName: 'Cpu', isNew: true },
      { id: 'memory-dump-analyzer', name: 'Memory Dump Analyzer', description: 'Analyze memory dumps for artifacts', category: 'Forensics', severity: 'high', iconName: 'HardDrive', isNew: true },
      { id: 'baseline-monitor', name: 'Baseline Monitor', description: 'Monitor system baselines and deviations', category: 'Monitoring', severity: 'medium', iconName: 'Monitor', isNew: true },
      { id: 'ioc-extractor', name: 'IOC Extractor', description: 'Extract indicators of compromise', category: 'Analysis', severity: 'high', iconName: 'Search', isNew: true },
    ],
  },
  {
    id: 'white-hat',
    name: 'White Hat',
    color: 'green',
    modules: [
      { id: 'vuln-assessment', name: 'Vuln Assessment', description: 'Vulnerability assessment and evaluation', category: 'Assessment', severity: 'high', iconName: 'AlertTriangle' },
      { id: 'compliance-auditor', name: 'Compliance Auditor', description: 'Audit compliance with security standards', category: 'Compliance', severity: 'medium', iconName: 'ShieldCheck' },
      { id: 'encryption-toolkit', name: 'Encryption Toolkit', description: 'Encryption and decryption utilities', category: 'Cryptography', severity: 'low', iconName: 'Key' },
      { id: 'api-scanner', name: 'API Scanner', description: 'Security testing for APIs', category: 'Testing', severity: 'high', iconName: 'Globe' },
      { id: 'cloud-scanner', name: 'Cloud Scanner', description: 'Cloud infrastructure security scanning', category: 'Cloud', severity: 'high', iconName: 'Server' },
      { id: 'container-security', name: 'Container Security', description: 'Docker and container security tools', category: 'DevSecOps', severity: 'high', iconName: 'Cpu' },
      { id: 'ssl-certificate-monitor', name: 'SSL Certificate Monitor', description: 'Monitor SSL certificate validity and expiration', category: 'Monitoring', severity: 'medium', iconName: 'ShieldCheck', isNew: true },
      { id: 'secret-scanner', name: 'Secret Scanner', description: 'Scan for exposed secrets and credentials', category: 'Scanning', severity: 'critical', iconName: 'Search', isNew: true },
    ],
  },
  {
    id: 'osint-team',
    name: 'OSINT',
    color: 'purple',
    modules: [
      { id: 'osint-recon', name: 'OSINT Recon', description: 'Open source intelligence reconnaissance', category: 'Intelligence', severity: 'low', iconName: 'Eye' },
      { id: 'socmint', name: 'SOCMINT', description: 'Social media intelligence gathering', category: 'Intelligence', severity: 'low', iconName: 'Globe' },
      { id: 'google-dorking', name: 'Google Dorking', description: 'Advanced Google search operators', category: 'Search', severity: 'low', iconName: 'Search' },
      { id: 'dark-web-intel', name: 'Dark Web Intel', description: 'Monitor dark web threats and leaks', category: 'Intelligence', severity: 'medium', iconName: 'AlertTriangle' },
      { id: 'geoint', name: 'GeoINT', description: 'Geolocation intelligence and mapping', category: 'Intelligence', severity: 'low', iconName: 'Globe' },
      { id: 'imint', name: 'IMINT', description: 'Imagery intelligence analysis', category: 'Intelligence', severity: 'low', iconName: 'Eye' },
      { id: 'blockchain-osint', name: 'Blockchain OSINT', description: 'Blockchain transaction analysis', category: 'Intelligence', severity: 'low', iconName: 'Database' },
      { id: 'bizint', name: 'BIZINT', description: 'Business intelligence gathering', category: 'Intelligence', severity: 'low', iconName: 'FileSearch' },
      { id: 'metadata-extractor', name: 'Metadata Extractor', description: 'Extract metadata from documents and files', category: 'Analysis', severity: 'medium', iconName: 'Search', isNew: true },
      { id: 'ct-monitor', name: 'CT Monitor', description: 'Certificate Transparency log monitoring', category: 'Monitoring', severity: 'low', iconName: 'Monitor', isNew: true },
    ],
  },
];

export const cyberSecModuleCount = cyberSecTeams.reduce((sum, team) => sum + team.modules.length, 0);

// ── Collections ────────────────────────────────────────────────────────────
export interface OsintCollection {
  name: string;
  url: string;
  description: string;
  toolCount: string;
  platform: 'start.me' | 'github' | 'website';
  tags: string[];
}

export const osintCollections: OsintCollection[] = [
  {
    name: 'GEOINT',
    url: 'https://start.me/p/W1kDAj/geoint',
    description: 'Curated collection of geospatial intelligence tools — satellite imagery, mapping, geolocation, and location analysis resources.',
    toolCount: '100+',
    platform: 'start.me',
    tags: ['geospatial', 'mapping', 'satellite', 'geolocation'],
  },
  {
    name: 'OSINT 500+ Tools',
    url: 'https://start.me/p/0Pqbdg/osint-500-tools',
    description: 'Massive collection of 500+ OSINT tools organized by category — dashboards, cryptocurrency, SMS, WhatsApp, website security, and more.',
    toolCount: '500+',
    platform: 'start.me',
    tags: ['comprehensive', 'tools', 'cryptocurrency', 'messaging'],
  },
  {
    name: 'OSINT Resources',
    url: 'https://start.me/p/mweaYY/osint-resources',
    description: 'Well-organized OSINT resource page covering investigation tools, social media analysis, and research techniques.',
    toolCount: '200+',
    platform: 'start.me',
    tags: ['resources', 'investigation', 'social media'],
  },
  {
    name: 'The Ultimate OSINT Collection',
    url: 'https://start.me/p/DPYPMz/the-ultimate-osint-collection',
    description: 'One of the most comprehensive OSINT collections online — tools, guides, training resources, and investigation techniques all in one place.',
    toolCount: '1,000+',
    platform: 'start.me',
    tags: ['comprehensive', 'training', 'guides', 'tools'],
  },
  {
    name: "Nixintel's OSINT Resource List",
    url: 'https://start.me/p/rx6Qj8/nixintel-s-osint-resource-list',
    description: 'Curated by OSINT expert Nixintel — focused collection of verified, high-quality investigation tools and techniques.',
    toolCount: '300+',
    platform: 'start.me',
    tags: ['curated', 'investigation', 'verified'],
  },
  {
    name: 'Awesome OSINT',
    url: 'https://github.com/jivoi/awesome-osint',
    description: 'Community-maintained GitHub list of OSINT tools and resources — search engines, social media, domain tools, and threat intelligence.',
    toolCount: '500+',
    platform: 'github',
    tags: ['community', 'search engines', 'social media', 'domains'],
  },
  {
    name: "cipher387's OSINT Tool Collection",
    url: 'https://github.com/cipher387/osint_stuff_tool_collection',
    description: 'Over 1,000 online tools organized in 23+ categories — maps, social media, messengers, crypto, IoT, code search, and much more.',
    toolCount: '1,000+',
    platform: 'github',
    tags: ['maps', 'social media', 'crypto', 'IoT', 'comprehensive'],
  },
  {
    name: 'OSINT Framework',
    url: 'https://osintframework.com/',
    description: 'Interactive tree-based directory of OSINT tools organized by data type — the classic starting point for any investigation.',
    toolCount: '500+',
    platform: 'website',
    tags: ['framework', 'interactive', 'data types'],
  },
  {
    name: 'IntelTechniques',
    url: 'https://inteltechniques.com/tools/',
    description: 'Tools and search forms from OSINT expert Michael Bazzell — used by investigators, journalists, and privacy advocates worldwide.',
    toolCount: '50+',
    platform: 'website',
    tags: ['expert', 'search forms', 'privacy', 'investigation'],
  },
  {
    name: "Bellingcat's Online Investigation Toolkit",
    url: 'https://docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ/',
    description: 'Maintained by the Bellingcat investigative journalism team — spreadsheet of tools used in real-world open-source investigations.',
    toolCount: '300+',
    platform: 'website',
    tags: ['journalism', 'investigation', 'verified', 'real-world'],
  },
  {
    name: 'OSINT Combine Free Tools',
    url: 'https://www.osintcombine.com/tools',
    description: 'Free browser-based OSINT tools from OSINT Combine — social media analysis, geolocation, and data transformation utilities.',
    toolCount: '20+',
    platform: 'website',
    tags: ['free tools', 'browser-based', 'geolocation', 'social media'],
  },
  {
    name: 'SMART (Start Me Aggregated Resource Tool)',
    url: 'https://smart.myosint.training/',
    description: 'Aggregates and deduplicates resources from hundreds of start.me pages — one searchable table for all OSINT bookmarks.',
    toolCount: '10,000+',
    platform: 'website',
    tags: ['aggregator', 'searchable', 'comprehensive', 'deduplicated'],
  },
];

// ── Re-exports ─────────────────────────────────────────────────────────────
export { osintCategories, osintToolCount, osintCategoryCount } from './osint-tools';
export { geointCategories, geointToolCount, geointCategoryCount } from './geoint-resources';
export type { OsintCategory, OsintTool } from './osint-tools';
export type { GeointCategory, GeointTool } from './geoint-resources';

// ── Aggregate stats ────────────────────────────────────────────────────────
export const collectionCount = osintCollections.length;
export const totalTools = osintToolCount + geointToolCount + cyberSecModuleCount + collectionCount;
export const totalCategories = osintCategoryCount + geointCategoryCount + cyberSecTeams.length + 1; // +1 for collections
