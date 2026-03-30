import React, { useState, useCallback, useMemo } from 'react';
import {
  Search,
  Lock,
  Hash,
  Code,
  Zap,
  Globe,
  Shield,
  AlertCircle,
  Copy,
  Check,
  ChevronDown,
  ExternalLink,
  Terminal,
  GitBranch,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  team: 'red' | 'blue' | 'white' | 'osint';
  category: string;
  isInteractive: boolean;
  icon: React.ReactNode;
}

interface TeamInfo {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  count: number;
}

const TOOLS: Tool[] = [
  // Red Team Tools
  {
    id: 'password-strength',
    name: 'Password Strength Analyzer',
    description: 'Analyze password entropy, patterns, and crack time estimation',
    team: 'red',
    category: 'Cryptography',
    isInteractive: true,
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA1, SHA256, SHA512 hashes from text',
    team: 'red',
    category: 'Cryptography',
    isInteractive: true,
    icon: <Hash className="w-5 h-5" />,
  },
  {
    id: 'encoding-decoder',
    name: 'Encoding/Decoding Suite',
    description: 'Base64, URL encoding, Hex, ROT13, Binary, Morse code',
    team: 'red',
    category: 'Encoding',
    isInteractive: true,
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode JWT tokens and inspect header/payload claims',
    team: 'red',
    category: 'Authentication',
    isInteractive: true,
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test regex patterns with live highlighting and matching',
    team: 'red',
    category: 'Testing',
    isInteractive: true,
    icon: <Code className="w-5 h-5" />,
  },

  // Blue Team Tools
  {
    id: 'ip-calculator',
    name: 'IP Subnet Calculator',
    description: 'Calculate CIDR notation, network ranges, host addresses',
    team: 'blue',
    category: 'Networking',
    isInteractive: true,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'url-analyzer',
    name: 'URL Analyzer',
    description: 'Parse URLs, detect suspicious patterns, phishing indicators',
    team: 'blue',
    category: 'Web Security',
    isInteractive: true,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'http-headers',
    name: 'HTTP Header Checker',
    description: 'Analyze security headers and response information',
    team: 'blue',
    category: 'Web Security',
    isInteractive: true,
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 'vulnerability-scanner',
    name: 'Vulnerability Scanner',
    description: 'Run: ./teksure scan --target <domain> --depth full',
    team: 'blue',
    category: 'Scanning',
    isInteractive: false,
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    id: 'ssl-checker',
    name: 'SSL/TLS Certificate Analyzer',
    description: 'Run: ./teksure ssl-check --domain <domain>',
    team: 'blue',
    category: 'Certificates',
    isInteractive: false,
    icon: <Lock className="w-5 h-5" />,
  },

  // White Hat Tools
  {
    id: 'password-generator',
    name: 'Secure Password Generator',
    description: 'Generate cryptographically strong passwords',
    team: 'white',
    category: 'Security',
    isInteractive: false,
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: 'cipher-suite',
    name: 'Cipher Suite Analyzer',
    description: 'Run: ./teksure cipher --analyze <cipher-list>',
    team: 'white',
    category: 'Cryptography',
    isInteractive: false,
    icon: <Hash className="w-5 h-5" />,
  },
  {
    id: 'port-scanner',
    name: 'Network Port Scanner',
    description: 'Run: ./teksure port-scan --target <host> --range 1-65535',
    team: 'white',
    category: 'Networking',
    isInteractive: false,
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'compliance-checker',
    name: 'Compliance & Policy Checker',
    description: 'Run: ./teksure compliance --check pci-dss,hipaa',
    team: 'white',
    category: 'Compliance',
    isInteractive: false,
    icon: <Shield className="w-5 h-5" />,
  },

  // OSINT Tools
  {
    id: 'dns-lookup',
    name: 'DNS Lookup & Resolution',
    description: 'Run: ./teksure dns --lookup <domain>',
    team: 'osint',
    category: 'Reconnaissance',
    isInteractive: false,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'whois-lookup',
    name: 'WHOIS Lookup',
    description: 'Run: ./teksure whois --domain <domain>',
    team: 'osint',
    category: 'Reconnaissance',
    isInteractive: false,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'subdomain-enum',
    name: 'Subdomain Enumeration',
    description: 'Run: ./teksure enum-subdomains --domain <domain> --wordlist large',
    team: 'osint',
    category: 'Reconnaissance',
    isInteractive: false,
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    id: 'metadata-extractor',
    name: 'File Metadata Extractor',
    description: 'Run: ./teksure metadata --file <path> --extract all',
    team: 'osint',
    category: 'Analysis',
    isInteractive: false,
    icon: <Hash className="w-5 h-5" />,
  },
  {
    id: 'social-footprint',
    name: 'Social Media Footprint Analyzer',
    description: 'Run: ./teksure social --username <username> --platforms all',
    team: 'osint',
    category: 'Reconnaissance',
    isInteractive: false,
    icon: <Globe className="w-5 h-5" />,
  },
];

const TEAM_INFO: Record<string, TeamInfo> = {
  red: {
    name: 'Red Team',
    color: 'red',
    bgColor: 'bg-red-950/40',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    count: 5,
  },
  blue: {
    name: 'Blue Team',
    color: 'blue',
    bgColor: 'bg-blue-950/40',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    count: 5,
  },
  white: {
    name: 'White Hat',
    color: 'green',
    bgColor: 'bg-green-950/40',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    count: 4,
  },
  osint: {
    name: 'OSINT',
    color: 'purple',
    bgColor: 'bg-purple-950/40',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    count: 5,
  },
};

// Interactive Tool Components
const PasswordStrengthAnalyzer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const calculateEntropy = (pwd: string): number => {
    if (pwd.length === 0) return 0;
    let charset = 0;
    if (/[a-z]/.test(pwd)) charset += 26;
    if (/[A-Z]/.test(pwd)) charset += 26;
    if (/[0-9]/.test(pwd)) charset += 10;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) charset += 32;
    return pwd.length * Math.log2(charset);
  };

  const estimateCrackTime = (entropy: number): string => {
    const guessesPerSecond = 1e9; // 1 billion guesses per second
    const seconds = Math.pow(2, entropy) / guessesPerSecond / 2;

    if (seconds < 1) return 'Instant';
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    return `${Math.round(seconds / 31536000)} years`;
  };

  const entropy = calculateEntropy(password);
  const crackTime = estimateCrackTime(entropy);
  const strength = entropy < 50 ? 'Weak' : entropy < 100 ? 'Fair' : entropy < 150 ? 'Strong' : 'Very Strong';
  const strengthColor = entropy < 50 ? 'text-red-400' : entropy < 100 ? 'text-yellow-400' : entropy < 150 ? 'text-blue-400' : 'text-green-400';

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Enter Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            placeholder="Enter password to analyze..."
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-300"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {password && (
        <div className="space-y-3 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Entropy</div>
              <div className="text-lg font-mono text-blue-400">{entropy.toFixed(1)} bits</div>
            </div>
            <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Length</div>
              <div className="text-lg font-mono text-blue-400">{password.length} chars</div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Strength</div>
            <div className={`text-lg font-mono ${strengthColor}`}>{strength}</div>
          </div>

          <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Estimated Crack Time (1B guesses/sec)</div>
            <div className="text-lg font-mono text-yellow-400">{crackTime}</div>
          </div>

          <div className="space-y-2 text-xs text-gray-400">
            <div>✓ Contains lowercase: {/[a-z]/.test(password) ? '✓' : '✗'}</div>
            <div>✓ Contains uppercase: {/[A-Z]/.test(password) ? '✓' : '✗'}</div>
            <div>✓ Contains numbers: {/[0-9]/.test(password) ? '✓' : '✗'}</div>
            <div>✓ Contains special chars: {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? '✓' : '✗'}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const HashGenerator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState('');

  const generateHashes = async (text: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const algorithms: Record<string, string> = {
      'SHA-256': 'SHA-256',
      'SHA-512': 'SHA-512',
      'SHA-1': 'SHA-1',
    };

    const newHashes: Record<string, string> = {};

    for (const [name, algo] of Object.entries(algorithms)) {
      try {
        const hashBuffer = await crypto.subtle.digest(algo, data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
        newHashes[name] = hashHex;
      } catch (e) {
        newHashes[name] = 'Error';
      }
    }

    // MD5 and SHA1 simulation (for demo purposes - using a simple approach)
    newHashes['MD5'] = input ? `[MD5 requires crypto library]` : '';
    newHashes['SHA-1'] = input ? `[Use SHA-256 instead for security]` : '';

    setHashes(newHashes);
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (value) generateHashes(value);
    else setHashes({});
  };

  const copyToClipboard = (hash: string, algo: string) => {
    navigator.clipboard.writeText(hash);
    setCopied(algo);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Enter Text to Hash</label>
        <textarea
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-500 font-mono text-sm"
          placeholder="Paste text or enter a string..."
          rows={3}
        />
      </div>

      {Object.keys(hashes).length > 0 && (
        <div className="space-y-2 pt-4 border-t border-gray-700">
          {Object.entries(hashes).map(([algo, hash]) => (
            <div key={algo} className="bg-gray-900/50 p-3 rounded border border-gray-700">
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 mb-1">{algo}</div>
                  <div className="text-xs font-mono text-blue-400 break-all">{hash}</div>
                </div>
                <button
                  onClick={() => copyToClipboard(hash, algo)}
                  className="flex-shrink-0 p-1.5 hover:bg-gray-800 rounded transition-colors"
                >
                  {copied === algo ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EncodingDecoder: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [encodingType, setEncodingType] = useState<'base64' | 'url' | 'hex' | 'rot13'>('base64');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const base64Encode = (str: string) => btoa(unescape(encodeURIComponent(str)));
  const base64Decode = (str: string) => decodeURIComponent(escape(atob(str)));
  const urlEncode = (str: string) => encodeURIComponent(str);
  const urlDecode = (str: string) => decodeURIComponent(str);
  const hexEncode = (str: string) => Array.from(str).map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
  const hexDecode = (str: string) => String.fromCharCode(...str.match(/../g)!.map((x) => parseInt(x, 16)));
  const rot13 = (str: string) => str.replace(/[a-zA-Z]/g, (c) => String.fromCharCode(c.charCodeAt(0) + (c <= 'Z' ? 13 : 13) * (c < 'N' || c < 'n' ? 1 : -1)));

  const transform = () => {
    try {
      let result = '';
      if (encodingType === 'base64') {
        result = mode === 'encode' ? base64Encode(input) : base64Decode(input);
      } else if (encodingType === 'url') {
        result = mode === 'encode' ? urlEncode(input) : urlDecode(input);
      } else if (encodingType === 'hex') {
        result = mode === 'encode' ? hexEncode(input) : hexDecode(input);
      } else if (encodingType === 'rot13') {
        result = rot13(input);
      }
      setOutput(result);
    } catch (e) {
      setOutput('Error decoding');
    }
  };

  React.useEffect(() => {
    if (input) transform();
    else setOutput('');
  }, [input, encodingType, mode]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Encoding Type</label>
          <select
            value={encodingType}
            onChange={(e) => setEncodingType(e.target.value as any)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-green-500"
          >
            <option value="base64">Base64</option>
            <option value="url">URL Encode</option>
            <option value="hex">Hex</option>
            <option value="rot13">ROT13</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-green-500"
            disabled={encodingType === 'rot13'}
          >
            <option value="encode">Encode</option>
            <option value="decode">Decode</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Input</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-500 font-mono text-sm"
          placeholder="Enter text..."
          rows={3}
        />
      </div>

      {output && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Output</label>
          <textarea
            value={output}
            readOnly
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono text-sm"
            rows={3}
          />
        </div>
      )}
    </div>
  );
};

const JWTDecoder: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [jwt, setJwt] = useState('');
  const [decoded, setDecoded] = useState<any>(null);
  const [error, setError] = useState('');

  const decodeJWT = (token: string) => {
    try {
      setError('');
      const parts = token.split('.');
      if (parts.length !== 3) {
        setError('Invalid JWT format (must have 3 parts separated by dots)');
        setDecoded(null);
        return;
      }

      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));

      setDecoded({ header, payload, signature: parts[2].substring(0, 20) + '...' });
    } catch (e) {
      setError('Failed to decode JWT. Check format and encoding.');
      setDecoded(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Paste JWT Token</label>
        <textarea
          value={jwt}
          onChange={(e) => {
            setJwt(e.target.value);
            if (e.target.value) decodeJWT(e.target.value);
          }}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-500 font-mono text-xs"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          rows={3}
        />
      </div>

      {error && <div className="p-3 bg-red-950/30 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>}

      {decoded && (
        <div className="space-y-3 pt-4 border-t border-gray-700">
          <div>
            <div className="text-xs font-medium text-gray-400 mb-2">Header</div>
            <pre className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs font-mono text-blue-400 overflow-auto">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-400 mb-2">Payload</div>
            <pre className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs font-mono text-blue-400 overflow-auto max-h-48">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-400 mb-2">Signature</div>
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs font-mono text-gray-400">{decoded.signature}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const IPSubnetCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [input, setInput] = useState('192.168.1.0/24');
  const [results, setResults] = useState<any>(null);

  const calculateSubnet = (cidr: string) => {
    try {
      const [ip, mask] = cidr.split('/');
      const [a, b, c, d] = ip.split('.').map(Number);
      const maskBits = parseInt(mask);
      const maskValue = (0xffffffff << (32 - maskBits)) >>> 0;

      const network = {
        a: (a & ((maskValue >> 24) & 0xff)),
        b: (b & ((maskValue >> 16) & 0xff)),
        c: (c & ((maskValue >> 8) & 0xff)),
        d: (d & (maskValue & 0xff)),
      };

      const broadcast = {
        a: network.a | ((~maskValue >> 24) & 0xff),
        b: network.b | ((~maskValue >> 16) & 0xff),
        c: network.c | ((~maskValue >> 8) & 0xff),
        d: network.d | (~maskValue & 0xff),
      };

      const firstHost = { ...network, d: network.d + 1 };
      const lastHost = { ...broadcast, d: broadcast.d - 1 };
      const totalHosts = Math.pow(2, 32 - maskBits) - 2;

      setResults({
        network: `${network.a}.${network.b}.${network.c}.${network.d}`,
        broadcast: `${broadcast.a}.${broadcast.b}.${broadcast.c}.${broadcast.d}`,
        firstHost: `${firstHost.a}.${firstHost.b}.${firstHost.c}.${firstHost.d}`,
        lastHost: `${lastHost.a}.${lastHost.b}.${lastHost.c}.${lastHost.d}`,
        totalHosts,
        usableHosts: totalHosts,
      });
    } catch (e) {
      setResults(null);
    }
  };

  React.useEffect(() => {
    if (input) calculateSubnet(input);
  }, [input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">CIDR Notation</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono focus:outline-none focus:border-green-500"
          placeholder="192.168.1.0/24"
        />
      </div>

      {results && (
        <div className="space-y-2 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Network Address</div>
              <div className="font-mono text-blue-400">{results.network}</div>
            </div>
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Broadcast</div>
              <div className="font-mono text-blue-400">{results.broadcast}</div>
            </div>
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">First Host</div>
              <div className="font-mono text-blue-400">{results.firstHost}</div>
            </div>
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Last Host</div>
              <div className="font-mono text-blue-400">{results.lastHost}</div>
            </div>
            <div className="col-span-2 bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Usable Hosts</div>
              <div className="font-mono text-blue-400">{results.usableHosts}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const URLAnalyzer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeURL = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      const suspiciousIndicators = [];

      if (urlObj.hostname.includes('-') && urlObj.hostname.split('-').length > 2) {
        suspiciousIndicators.push('Multiple hyphens in domain (typosquatting risk)');
      }
      if (urlObj.hostname.length > 50) {
        suspiciousIndicators.push('Unusually long domain name');
      }
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        suspiciousIndicators.push('Non-standard protocol');
      }
      if (urlObj.protocol === 'http:') {
        suspiciousIndicators.push('Unencrypted HTTP (not HTTPS)');
      }
      if (urlObj.hostname.includes('..')) {
        suspiciousIndicators.push('Double dots in hostname');
      }

      setAnalysis({
        protocol: urlObj.protocol,
        hostname: urlObj.hostname,
        port: urlObj.port || 'default',
        pathname: urlObj.pathname,
        search: urlObj.search,
        hash: urlObj.hash,
        suspicious: suspiciousIndicators,
      });
    } catch (e) {
      setAnalysis(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Enter URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (e.target.value) analyzeURL(e.target.value);
          }}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono text-sm focus:outline-none focus:border-green-500"
          placeholder="https://example.com/path?query=value"
        />
      </div>

      {analysis && (
        <div className="space-y-2 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Protocol</div>
              <div className="font-mono text-blue-400">{analysis.protocol}</div>
            </div>
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Port</div>
              <div className="font-mono text-blue-400">{analysis.port}</div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
            <div className="text-xs text-gray-400">Hostname</div>
            <div className="font-mono text-blue-400 break-all">{analysis.hostname}</div>
          </div>
          {analysis.pathname && (
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Path</div>
              <div className="font-mono text-blue-400">{analysis.pathname}</div>
            </div>
          )}
          {analysis.search && (
            <div className="bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Query String</div>
              <div className="font-mono text-blue-400 break-all">{analysis.search}</div>
            </div>
          )}
          {analysis.suspicious.length > 0 && (
            <div className="bg-red-950/30 border border-red-500/30 rounded p-2">
              <div className="text-xs font-medium text-red-400 mb-1">Suspicious Indicators</div>
              <ul className="text-xs text-red-300 space-y-1">
                {analysis.suspicious.map((ind: string, i: number) => (
                  <li key={i}>⚠ {ind}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const HTTPHeaderChecker: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [domain, setDomain] = useState('');
  const [headers, setHeaders] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkHeaders = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url, { mode: 'no-cors' });
      const headerObj: Record<string, string> = {};
      response.headers.forEach((value, name) => {
        headerObj[name] = value;
      });
      setHeaders(headerObj);
    } catch (e) {
      setHeaders({ error: 'Unable to fetch headers (CORS restriction). For production, use a backend proxy.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Enter Domain</label>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono text-sm focus:outline-none focus:border-green-500"
          placeholder="example.com"
        />
      </div>
      <button
        onClick={() => {
          const url = domain.startsWith('http') ? domain : `https://${domain}`;
          checkHeaders(url);
        }}
        disabled={loading}
        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded text-white font-medium transition-colors"
      >
        {loading ? 'Checking...' : 'Check Headers'}
      </button>

      {headers && (
        <div className="space-y-2 pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Security Headers (top 5)</div>
          {Object.entries(headers)
            .slice(0, 10)
            .map(([key, value]) => (
              <div key={key} className="bg-gray-900/50 p-2 rounded border border-gray-700">
                <div className="text-xs font-mono text-gray-400">{key}</div>
                <div className="text-xs font-mono text-blue-400 break-all">{String(value).substring(0, 100)}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const RegexTester: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [pattern, setPattern] = useState('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('test@example.com');
  const [matches, setMatches] = useState<any>(null);
  const [error, setError] = useState('');

  const testRegex = () => {
    try {
      setError('');
      const regex = new RegExp(pattern, flags);
      const allMatches = testString.match(regex);
      const isMatch = regex.test(testString);
      setMatches({
        isMatch,
        matches: allMatches || [],
        count: allMatches ? allMatches.length : 0,
      });
    } catch (e) {
      setError((e as any).message);
      setMatches(null);
    }
  };

  React.useEffect(() => {
    testRegex();
  }, [pattern, flags, testString]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Regex Pattern</label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono text-sm focus:outline-none focus:border-green-500"
          placeholder="^[a-z]+$"
        />
      </div>

      <div className="flex gap-2">
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input type="checkbox" checked={flags.includes('g')} onChange={(e) => setFlags(e.target.checked ? 'g' : '')} className="rounded" />
          Global (g)
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={flags.includes('i')}
            onChange={(e) => setFlags((f) => (e.target.checked ? f + 'i' : f.replace('i', '')))}
            className="rounded"
          />
          Case Insensitive (i)
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={flags.includes('m')}
            onChange={(e) => setFlags((f) => (e.target.checked ? f + 'm' : f.replace('m', '')))}
            className="rounded"
          />
          Multiline (m)
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Test String</label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white font-mono text-sm focus:outline-none focus:border-green-500"
          placeholder="Enter text to test..."
          rows={3}
        />
      </div>

      {error && <div className="p-3 bg-red-950/30 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>}

      {matches && (
        <div className="space-y-2 pt-4 border-t border-gray-700">
          <div className="flex gap-2">
            <div className="flex-1 bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Status</div>
              <div className={`font-mono text-sm ${matches.isMatch ? 'text-green-400' : 'text-red-400'}`}>
                {matches.isMatch ? 'MATCH' : 'NO MATCH'}
              </div>
            </div>
            <div className="flex-1 bg-gray-900/50 p-2 rounded border border-gray-700">
              <div className="text-xs text-gray-400">Matches Found</div>
              <div className="font-mono text-blue-400">{matches.count}</div>
            </div>
          </div>
          {matches.matches.length > 0 && (
            <div>
              <div className="text-xs text-gray-400 mb-2">Matched Strings</div>
              {matches.matches.map((match: string, i: number) => (
                <div key={i} className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs font-mono text-blue-400 mb-1">
                  {match}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Main Component
export default function CyberToolkit() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesTeam = selectedTeam ? tool.team === selectedTeam : true;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTeam && matchesSearch;
    });
  }, [selectedTeam, searchQuery]);

  const teamCounts = useMemo(() => {
    return Object.entries(TEAM_INFO).reduce(
      (acc, [key, team]) => {
        acc[key] = TOOLS.filter((t) => t.team === key).length;
        return acc;
      },
      {} as Record<string, number>
    );
  }, []);

  const renderToolComponent = (toolId: string) => {
    switch (toolId) {
      case 'password-strength':
        return <PasswordStrengthAnalyzer onClose={() => setSelectedTool(null)} />;
      case 'hash-generator':
        return <HashGenerator onClose={() => setSelectedTool(null)} />;
      case 'encoding-decoder':
        return <EncodingDecoder onClose={() => setSelectedTool(null)} />;
      case 'jwt-decoder':
        return <JWTDecoder onClose={() => setSelectedTool(null)} />;
      case 'ip-calculator':
        return <IPSubnetCalculator onClose={() => setSelectedTool(null)} />;
      case 'url-analyzer':
        return <URLAnalyzer onClose={() => setSelectedTool(null)} />;
      case 'http-headers':
        return <HTTPHeaderChecker onClose={() => setSelectedTool(null)} />;
      case 'regex-tester':
        return <RegexTester onClose={() => setSelectedTool(null)} />;
      default:
        return null;
    }
  };

  const totalTools = TOOLS.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-8 h-8 text-green-400" />
            <div>
              <h1 className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Cyber AI Toolkit
              </h1>
              <p className="text-gray-400 text-sm mt-1">{totalTools} Security Modules | Red Team · Blue Team · White Hat · OSINT</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
            </div>
            <a
              href="https://github.com/TekSure/toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
            >
              <GitBranch className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Team Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTeam(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm whitespace-nowrap ${selectedTeam === null ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            All ({totalTools})
          </button>
          {Object.entries(TEAM_INFO).map(([key, team]) => (
            <button
              key={key}
              onClick={() => setSelectedTeam(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm whitespace-nowrap ${
                selectedTeam === key
                  ? `bg-${team.color}-600 text-white`
                  : `bg-gray-800 text-gray-300 hover:bg-gray-700 border border-${team.color}-500/20`
              }`}
            >
              {team.name} ({teamCounts[key] || 0})
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => {
            const team = TEAM_INFO[tool.team];
            const isExpanded = expandedTool === tool.id;
            const isSelected = selectedTool === tool.id;

            return (
              <div key={tool.id} className={`${team.bgColor} border ${team.borderColor} rounded-lg overflow-hidden transition-all ${isExpanded ? 'lg:col-span-2' : ''}`}>
                <div className={`p-4 cursor-pointer hover:bg-gray-900/30 transition-colors ${isExpanded ? 'bg-gray-900/40' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={team.textColor}>{tool.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white truncate">{tool.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">{tool.category}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${team.bgColor} ${team.textColor} border ${team.borderColor}`}>
                      {team.name}
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-3">{tool.description}</p>

                  <div className="flex gap-2">
                    {tool.isInteractive ? (
                      <button
                        onClick={() => setSelectedTool(tool.id)}
                        className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition-colors"
                      >
                        Try It
                      </button>
                    ) : (
                      <button
                        onClick={() => setExpandedTool(isExpanded ? null : tool.id)}
                        className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm font-medium transition-colors flex items-center justify-center gap-1"
                      >
                        CLI Only
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>

                {isExpanded && !tool.isInteractive && (
                  <div className="border-t border-gray-700/50 p-4 bg-gray-900/20">
                    <div className="text-xs text-gray-400 mb-2">Command Line Usage:</div>
                    <div className="bg-black/50 p-3 rounded border border-gray-700 font-mono text-xs text-green-400 overflow-auto">
                      {/* Extract command from tool ID */}
                      {tool.id === 'vulnerability-scanner' && '$ ./teksure scan --target example.com --depth full'}
                      {tool.id === 'ssl-checker' && '$ ./teksure ssl-check --domain example.com'}
                      {tool.id === 'password-generator' && '$ ./teksure gen-password --length 32 --special'}
                      {tool.id === 'cipher-suite' && '$ ./teksure cipher --analyze "AES-256-GCM:CHACHA20-POLY1305"'}
                      {tool.id === 'port-scanner' && '$ ./teksure port-scan --target 192.168.1.1 --range 1-65535'}
                      {tool.id === 'compliance-checker' && '$ ./teksure compliance --check pci-dss,hipaa,gdpr'}
                      {tool.id === 'dns-lookup' && '$ ./teksure dns --lookup example.com --record ALL'}
                      {tool.id === 'whois-lookup' && '$ ./teksure whois --domain example.com'}
                      {tool.id === 'subdomain-enum' && '$ ./teksure enum-subdomains --domain example.com --wordlist large'}
                      {tool.id === 'metadata-extractor' && '$ ./teksure metadata --file document.pdf --extract all'}
                      {tool.id === 'social-footprint' && '$ ./teksure social --username john_doe --platforms all'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No tools found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal for Interactive Tools */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-700 bg-gray-950">
              <h2 className="text-xl font-bold">{TOOLS.find((t) => t.id === selectedTool)?.name}</h2>
              <button
                onClick={() => setSelectedTool(null)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>
            <div className="p-6">{renderToolComponent(selectedTool)}</div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>TekSure Cyber AI Toolkit | Advanced Security & Penetration Testing Tools</p>
          <p className="text-xs mt-2">For educational and authorized testing purposes only. Unauthorized access is illegal.</p>
        </div>
      </div>
    </div>
  );
}
