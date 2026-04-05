import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

// ─── Types & Data ─────────────────────────────────────────────────────────────

type Category =
  | 'Getting Started'
  | 'Staying Safe'
  | 'Communication'
  | 'Entertainment & Services'
  | 'Your Devices';

interface TopicNode {
  id: string;
  label: string;
  description: string;
  category: Category;
  emoji: string;
  href: string;
}

const CATEGORY_STYLES: Record<Category, { bg: string; text: string; border: string; ring: string }> = {
  'Getting Started':          { bg: 'bg-blue-100',   text: 'text-blue-800',   border: 'border-blue-200',   ring: 'ring-blue-400' },
  'Staying Safe':             { bg: 'bg-red-100',    text: 'text-red-800',    border: 'border-red-200',    ring: 'ring-red-400' },
  'Communication':            { bg: 'bg-green-100',  text: 'text-green-800',  border: 'border-green-200',  ring: 'ring-green-400' },
  'Entertainment & Services': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', ring: 'ring-purple-400' },
  'Your Devices':             { bg: 'bg-amber-100',  text: 'text-amber-800',  border: 'border-amber-200',  ring: 'ring-amber-400' },
};

const CATEGORY_HEADER_STYLES: Record<Category, { bg: string; text: string }> = {
  'Getting Started':          { bg: 'bg-blue-200',   text: 'text-blue-900' },
  'Staying Safe':             { bg: 'bg-red-200',    text: 'text-red-900' },
  'Communication':            { bg: 'bg-green-200',  text: 'text-green-900' },
  'Entertainment & Services': { bg: 'bg-purple-200', text: 'text-purple-900' },
  'Your Devices':             { bg: 'bg-amber-200',  text: 'text-amber-900' },
};

const TOPICS: TopicNode[] = [
  // Getting Started
  { id: 'wifi',       label: 'Wi-Fi',           description: 'How to connect to the internet at home or on the go',               category: 'Getting Started', emoji: '📶', href: '/wiki/wifi' },
  { id: 'passwords',  label: 'Passwords',       description: 'Creating and remembering strong passwords that keep you safe',       category: 'Getting Started', emoji: '🔑', href: '/wiki/passwords' },
  { id: 'email',      label: 'Email',           description: 'Sending, receiving, and organizing your messages',                   category: 'Getting Started', emoji: '📧', href: '/wiki/email' },
  { id: 'apps',       label: 'Apps',            description: 'Finding, installing, and using apps on your phone or tablet',        category: 'Getting Started', emoji: '📱', href: '/wiki/apps' },
  { id: 'updates',    label: 'Software Updates', description: 'Why updates matter and how to install them',                        category: 'Getting Started', emoji: '🔄', href: '/guides?category=essential-skills' },

  // Staying Safe
  { id: 'scams',      label: 'Scams',           description: 'How to spot and avoid phone, email, and online scams',               category: 'Staying Safe', emoji: '🚨', href: '/wiki/scam-prevention' },
  { id: 'privacy',    label: 'Privacy',         description: 'Controlling who can see your personal information online',            category: 'Staying Safe', emoji: '🔒', href: '/wiki/privacy' },
  { id: 'shopping',   label: 'Online Shopping',  description: 'How to buy things online without getting tricked',                  category: 'Staying Safe', emoji: '🛒', href: '/guides?category=safety-guides' },
  { id: 'phishing',   label: 'Phishing',        description: 'Fake emails and messages that try to steal your information',         category: 'Staying Safe', emoji: '🎣', href: '/wiki/phishing' },

  // Communication
  { id: 'calls',      label: 'Phone Calls',     description: 'Making and receiving calls, including Wi-Fi calling',                 category: 'Communication', emoji: '📞', href: '/guides?category=essential-skills' },
  { id: 'video',      label: 'Video Calling',   description: 'Seeing family and friends face-to-face with Zoom, FaceTime, and more', category: 'Communication', emoji: '🎥', href: '/wiki/video-calling' },
  { id: 'texting',    label: 'Texting',          description: 'Sending text messages, photos, and emojis',                         category: 'Communication', emoji: '💬', href: '/guides?category=essential-skills' },
  { id: 'facebook',   label: 'Facebook',         description: 'Staying connected with friends and family on social media',         category: 'Communication', emoji: '👥', href: '/wiki/facebook' },

  // Entertainment & Services
  { id: 'youtube',    label: 'YouTube',          description: 'Watching free videos, tutorials, and shows',                        category: 'Entertainment & Services', emoji: '▶️', href: '/wiki/youtube' },
  { id: 'netflix',    label: 'Netflix',          description: 'Streaming movies and TV shows on any device',                       category: 'Entertainment & Services', emoji: '🎬', href: '/guides?category=app-guides' },
  { id: 'banking',    label: 'Online Banking',   description: 'Checking your accounts and paying bills from home',                 category: 'Entertainment & Services', emoji: '🏦', href: '/guides?category=essential-skills' },
  { id: 'maps',       label: 'Maps & Directions', description: 'Getting directions and finding nearby places',                    category: 'Entertainment & Services', emoji: '🗺️', href: '/wiki/google' },
  { id: 'google',     label: 'Google',           description: 'Searching the web and using Google services',                       category: 'Entertainment & Services', emoji: '🔍', href: '/wiki/google' },
  { id: 'telehealth', label: 'Telehealth',       description: 'Visiting your doctor through video from home',                     category: 'Entertainment & Services', emoji: '🩺', href: '/guides?category=health-tech' },

  // Your Devices
  { id: 'iphone',     label: 'iPhone',           description: 'Getting the most out of your Apple phone',                         category: 'Your Devices', emoji: '🍎', href: '/wiki/apple' },
  { id: 'android',    label: 'Android',          description: 'Using Samsung, Google Pixel, and other Android phones',             category: 'Your Devices', emoji: '🤖', href: '/wiki/android' },
  { id: 'windows',    label: 'Windows',          description: 'Your Windows computer — files, settings, and troubleshooting',      category: 'Your Devices', emoji: '🪟', href: '/wiki/windows' },
  { id: 'mac',        label: 'Mac',              description: 'Using your Apple computer with confidence',                         category: 'Your Devices', emoji: '💻', href: '/wiki/apple' },
  { id: 'cloud',      label: 'Cloud Storage',    description: 'Saving your photos and files so they are never lost',               category: 'Your Devices', emoji: '☁️', href: '/wiki/cloud-storage' },
  { id: 'smarthome',  label: 'Smart Home',       description: 'Voice assistants, smart lights, and connected devices',             category: 'Your Devices', emoji: '🏠', href: '/wiki/smart-home' },
];

const CATEGORY_ORDER: Category[] = [
  'Getting Started',
  'Staying Safe',
  'Communication',
  'Entertainment & Services',
  'Your Devices',
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ConceptMap() {
  const [search, setSearch] = useState('');

  const filteredTopics = useMemo(() => {
    if (!search.trim()) return TOPICS;
    const q = search.toLowerCase().trim();
    return TOPICS.filter(
      (t) =>
        t.label.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
    );
  }, [search]);

  const groupedTopics = useMemo(() => {
    const groups: Record<Category, TopicNode[]> = {
      'Getting Started': [],
      'Staying Safe': [],
      'Communication': [],
      'Entertainment & Services': [],
      'Your Devices': [],
    };
    for (const topic of filteredTopics) {
      groups[topic.category].push(topic);
    }
    return groups;
  }, [filteredTopics]);

  return (
    <>
      <SEOHead
        title="How Technology Connects — TekSure"
        description="An interactive map of everyday technology topics for seniors. Tap any topic to learn more — everything connects."
      />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200 py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Technology Connects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tap any topic to learn more. Everything connects — understanding one thing helps you understand the next.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="max-w-4xl mx-auto px-4 py-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics..."
              aria-label="Search technology topics"
              className="w-full pl-12 pr-4 py-3 text-lg rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          {search.trim() && filteredTopics.length === 0 && (
            <p className="text-center text-gray-500 mt-4 text-lg">
              No topics match your search. Try a different word.
            </p>
          )}
        </section>

        {/* Topic Groups */}
        <section className="max-w-5xl mx-auto px-4 pb-16 space-y-8">
          {CATEGORY_ORDER.map((category) => {
            const topics = groupedTopics[category];
            if (topics.length === 0) return null;

            const styles = CATEGORY_STYLES[category];
            const headerStyles = CATEGORY_HEADER_STYLES[category];

            return (
              <div
                key={category}
                className={`rounded-2xl border-2 ${styles.border} overflow-hidden`}
              >
                {/* Category header */}
                <div className={`${headerStyles.bg} ${headerStyles.text} px-6 py-4`}>
                  <h2 className="text-xl md:text-2xl font-bold">{category}</h2>
                </div>

                {/* Topic cards grid */}
                <div className={`${styles.bg} p-4 md:p-6`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topics.map((topic) => (
                      <Link
                        key={topic.id}
                        to={topic.href}
                        className={`group block rounded-xl border-2 ${styles.border} bg-white p-5 shadow-sm transition-all duration-150 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 ${styles.ring} focus:ring-offset-2`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-3xl leading-none flex-shrink-0" aria-hidden="true">
                            {topic.emoji}
                          </span>
                          <div className="min-w-0">
                            <h3 className={`text-lg font-semibold ${styles.text} group-hover:underline`}>
                              {topic.label}
                            </h3>
                            <p className="text-gray-600 text-base mt-1 leading-snug">
                              {topic.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}
