import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  Search,
  Terminal,
  Wifi,
  Globe,
  Server,
  Database,
  Key,
  AlertTriangle,
  Bug,
  Scan,
  FileSearch,
  Code,
  Monitor,
  Cpu,
  Network,
  HardDrive,
  Fingerprint,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

// Type definitions for tools
interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  isNew?: boolean;
  icon: React.ReactNode;
  severity?: "critical" | "high" | "medium" | "low";
}

const redTeamTools: Tool[] = [
  {
    id: "port-scanner",
    name: "Port Scanner",
    description: "Identify open ports and services",
    category: "Reconnaissance",
    icon: <Scan className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "dns-recon",
    name: "DNS Recon",
    description: "Enumerate DNS records and subdomains",
    category: "Reconnaissance",
    icon: <Globe className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "web-scanner",
    name: "Web Scanner",
    description: "Scan web applications for vulnerabilities",
    category: "Scanning",
    icon: <FileSearch className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "wireless-recon",
    name: "Wireless Recon",
    description: "Analyze wireless networks and signals",
    category: "Reconnaissance",
    icon: <Wifi className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "packet-analyzer",
    name: "Packet Analyzer",
    description: "Capture and analyze network packets",
    category: "Analysis",
    icon: <Network className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "hash-cracker",
    name: "Hash Cracker",
    description: "Crack password hashes with multiple algorithms",
    category: "Cracking",
    icon: <Key className="w-5 h-5" />,
    severity: "critical",
  },
  {
    id: "password-analyzer",
    name: "Password Analyzer",
    description: "Evaluate password strength and entropy",
    category: "Analysis",
    icon: <Lock className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "credential-auditor",
    name: "Credential Auditor",
    description: "Audit and validate credentials in systems",
    category: "Auditing",
    icon: <ShieldAlert className="w-5 h-5" />,
    severity: "critical",
  },
  {
    id: "cve-lookup",
    name: "CVE Lookup",
    description: "Search and analyze CVE vulnerabilities",
    category: "Intelligence",
    icon: <AlertTriangle className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "exploit-framework",
    name: "Exploit Framework",
    description: "Access and manage exploitation tools",
    category: "Exploitation",
    icon: <Code className="w-5 h-5" />,
    severity: "critical",
  },
  {
    id: "fuzzer",
    name: "Fuzzer",
    description: "Fuzz applications to find vulnerabilities",
    category: "Testing",
    icon: <Bug className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "ad-recon",
    name: "AD Recon",
    description: "Enumerate Active Directory structures",
    category: "Reconnaissance",
    icon: <Server className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "ssl-tls-analyzer",
    name: "SSL/TLS Analyzer",
    description: "Analyze SSL/TLS configurations and vulnerabilities",
    category: "Analysis",
    icon: <ShieldCheck className="w-5 h-5" />,
    severity: "high",
    isNew: true,
  },
  {
    id: "subdomain-enumerator",
    name: "Subdomain Enumerator",
    description: "Discover and enumerate subdomains",
    category: "Reconnaissance",
    icon: <Globe className="w-5 h-5" />,
    severity: "medium",
    isNew: true,
  },
  {
    id: "directory-bruteforcer",
    name: "Directory Bruteforcer",
    description: "Brute force web directories and paths",
    category: "Scanning",
    icon: <FileSearch className="w-5 h-5" />,
    severity: "high",
    isNew: true,
  },
  {
    id: "ssrf-scanner",
    name: "SSRF Scanner",
    description: "Detect Server-Side Request Forgery vulnerabilities",
    category: "Scanning",
    icon: <Server className="w-5 h-5" />,
    severity: "critical",
    isNew: true,
  },
];

const blueTeamTools: Tool[] = [
  {
    id: "system-scanner",
    name: "System Scanner",
    description: "Comprehensive system security scanning",
    category: "Defense",
    icon: <Scan className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "network-monitor",
    name: "Network Monitor",
    description: "Monitor network traffic and anomalies",
    category: "Monitoring",
    icon: <Monitor className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "log-analyzer",
    name: "Log Analyzer",
    description: "Analyze and parse security logs",
    category: "Analysis",
    icon: <FileSearch className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "phishing-detector",
    name: "Phishing Detector",
    description: "Identify and analyze phishing emails",
    category: "Threat Detection",
    icon: <Eye className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "file-integrity",
    name: "File Integrity",
    description: "Monitor file integrity and changes",
    category: "Monitoring",
    icon: <Fingerprint className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "forensics",
    name: "Forensics",
    description: "Digital forensics and incident analysis",
    category: "Incident Response",
    icon: <Search className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "threat-intel",
    name: "Threat Intel",
    description: "Gather and analyze threat intelligence",
    category: "Intelligence",
    icon: <AlertTriangle className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "ir-playbook",
    name: "IR Playbook",
    description: "Incident response procedures and playbooks",
    category: "Response",
    icon: <Code className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "siem-rules",
    name: "SIEM Rules",
    description: "SIEM detection rules and queries",
    category: "Detection",
    icon: <Monitor className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "malware-analyzer",
    name: "Malware Analyzer",
    description: "Analyze malware samples safely",
    category: "Analysis",
    icon: <Bug className="w-5 h-5" />,
    severity: "critical",
  },
  {
    id: "honeypot",
    name: "Honeypot",
    description: "Deploy and monitor honeypot systems",
    category: "Defense",
    icon: <Shield className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "email-security",
    name: "Email Security",
    description: "Email security scanning and filtering",
    category: "Protection",
    icon: <Lock className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "entropy-analyzer",
    name: "Entropy Analyzer",
    description: "Analyze data entropy and randomness",
    category: "Analysis",
    icon: <Cpu className="w-5 h-5" />,
    severity: "medium",
    isNew: true,
  },
  {
    id: "memory-dump-analyzer",
    name: "Memory Dump Analyzer",
    description: "Analyze memory dumps for artifacts",
    category: "Forensics",
    icon: <HardDrive className="w-5 h-5" />,
    severity: "high",
    isNew: true,
  },
  {
    id: "baseline-monitor",
    name: "Baseline Monitor",
    description: "Monitor system baselines and deviations",
    category: "Monitoring",
    icon: <Monitor className="w-5 h-5" />,
    severity: "medium",
    isNew: true,
  },
  {
    id: "ioc-extractor",
    name: "IOC Extractor",
    description: "Extract indicators of compromise",
    category: "Analysis",
    icon: <Search className="w-5 h-5" />,
    severity: "high",
    isNew: true,
  },
];

const whiteHatTools: Tool[] = [
  {
    id: "vuln-assessment",
    name: "Vuln Assessment",
    description: "Vulnerability assessment and evaluation",
    category: "Assessment",
    icon: <AlertTriangle className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "compliance-auditor",
    name: "Compliance Auditor",
    description: "Audit compliance with security standards",
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "encryption-toolkit",
    name: "Encryption Toolkit",
    description: "Encryption and decryption utilities",
    category: "Cryptography",
    icon: <Key className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "api-scanner",
    name: "API Scanner",
    description: "Security testing for APIs",
    category: "Testing",
    icon: <Globe className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "cloud-scanner",
    name: "Cloud Scanner",
    description: "Cloud infrastructure security scanning",
    category: "Cloud",
    icon: <Server className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "container-security",
    name: "Container Security",
    description: "Docker and container security tools",
    category: "DevSecOps",
    icon: <Cpu className="w-5 h-5" />,
    severity: "high",
  },
  {
    id: "ssl-certificate-monitor",
    name: "SSL Certificate Monitor",
    description: "Monitor SSL certificate validity and expiration",
    category: "Monitoring",
    icon: <ShieldCheck className="w-5 h-5" />,
    severity: "medium",
    isNew: true,
  },
  {
    id: "secret-scanner",
    name: "Secret Scanner",
    description: "Scan for exposed secrets and credentials",
    category: "Scanning",
    icon: <Search className="w-5 h-5" />,
    severity: "critical",
    isNew: true,
  },
];

const osintTools: Tool[] = [
  {
    id: "osint-recon",
    name: "OSINT Recon",
    description: "Open source intelligence reconnaissance",
    category: "Intelligence",
    icon: <Eye className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "socmint",
    name: "SOCMINT",
    description: "Social media intelligence gathering",
    category: "Intelligence",
    icon: <Globe className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "google-dorking",
    name: "Google Dorking",
    description: "Advanced Google search operators",
    category: "Search",
    icon: <Search className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "dark-web-intel",
    name: "Dark Web Intel",
    description: "Monitor dark web threats and leaks",
    category: "Intelligence",
    icon: <AlertTriangle className="w-5 h-5" />,
    severity: "medium",
  },
  {
    id: "geoint",
    name: "GeoINT",
    description: "Geolocation intelligence and mapping",
    category: "Intelligence",
    icon: <Globe className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "imint",
    name: "IMINT",
    description: "Imagery intelligence analysis",
    category: "Intelligence",
    icon: <Eye className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "blockchain-osint",
    name: "Blockchain OSINT",
    description: "Blockchain transaction analysis",
    category: "Intelligence",
    icon: <Database className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "bizint",
    name: "BIZINT",
    description: "Business intelligence gathering",
    category: "Intelligence",
    icon: <FileSearch className="w-5 h-5" />,
    severity: "low",
  },
  {
    id: "metadata-extractor",
    name: "Metadata Extractor",
    description: "Extract metadata from documents and files",
    category: "Analysis",
    icon: <Search className="w-5 h-5" />,
    severity: "medium",
    isNew: true,
  },
  {
    id: "ct-monitor",
    name: "CT Monitor",
    description: "Certificate Transparency log monitoring",
    category: "Monitoring",
    icon: <Monitor className="w-5 h-5" />,
    severity: "low",
    isNew: true,
  },
];

const SeverityBadge = ({ severity }: { severity?: string }) => {
  const colors: Record<string, string> = {
    critical: "bg-red-900 text-red-100",
    high: "bg-orange-900 text-orange-100",
    medium: "bg-yellow-900 text-yellow-100",
    low: "bg-green-900 text-green-100",
  };

  return (
    <span
      className={`text-xs font-semibold px-2 py-1 rounded ${
        colors[severity || "low"]
      }`}
    >
      {severity?.toUpperCase() || "LOW"}
    </span>
  );
};

const ToolCard = ({ tool }: { tool: Tool }) => (
  <Link to="/tools/cyber-toolkit">
    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 h-full cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-white text-sm font-semibold flex items-center gap-2">
              {tool.icon}
              {tool.name}
            </CardTitle>
            {tool.isNew && (
              <span className="inline-block mt-1 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
                NEW
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-400 text-xs">{tool.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-gray-500 text-xs">{tool.category}</span>
          <SeverityBadge severity={tool.severity} />
        </div>
      </CardContent>
    </Card>
  </Link>
);

const TeamSection = ({
  title,
  color,
  tools,
}: {
  title: string;
  color: string;
  tools: Tool[];
}) => (
  <div className="space-y-4">
    <h3 className={`text-2xl font-bold flex items-center gap-2 text-${color}`}>
      <Shield className="w-6 h-6" />
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  </div>
);

export default function CyberSec() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-gray-700 bg-gradient-to-r from-red-900/30 to-gray-900/30">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12 text-red-500" />
            <h1 className="text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Cybersecurity Command Center
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Comprehensive security toolkit with 50 specialized modules across Red Team, Blue
            Team, White Hat, and OSINT operations.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-red-500/20 shadow-lg shadow-red-500/10">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-500">50</div>
              <p className="text-gray-400 text-sm mt-2">Security Modules</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500/20 shadow-lg shadow-cyan-500/10">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-500">4</div>
              <p className="text-gray-400 text-sm mt-2">Specialized Teams</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-amber-500/20 shadow-lg shadow-amber-500/10">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-amber-500">12</div>
              <p className="text-gray-400 text-sm mt-2">New Tools</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20 shadow-lg shadow-green-500/10">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-500">0</div>
              <p className="text-gray-400 text-sm mt-2">Dependencies</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Teams */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <TeamSection title="Red Team" color="red-500" tools={redTeamTools} />
        <TeamSection title="Blue Team" color="cyan-500" tools={blueTeamTools} />
        <TeamSection title="White Hat" color="green-500" tools={whiteHatTools} />
        <TeamSection title="OSINT" color="purple-500" tools={osintTools} />
      </div>

      {/* Featured Interactive Tools */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl font-bold">Featured: Interactive Tools</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Access 8 interactive browser-based security tools for real-time testing and analysis.
            From port scanning to vulnerability assessment, our tools provide immediate feedback and
            actionable insights.
          </p>
          <Link to="/tools/cyber-toolkit">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-2">
              Try Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Python CLI Toolkit */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Python CLI Toolkit</h2>
          </div>
          <p className="text-gray-300 mb-6">
            The cyber-ai-toolkit is a comprehensive command-line toolkit for advanced security
            operations. Built with Python, it provides powerful automation and analysis capabilities
            for security professionals.
          </p>
          <a
            href="https://github.com/bwilburn6202/cyber-ai-toolkit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold px-6 py-2">
              View on GitHub
            </Button>
          </a>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="py-12" />
    </div>
  );
}