/**
 * Chat with Docs — AI-powered documentation browser.
 * Users pick a topic group (pre-loaded with helpful tech-support links),
 * then ask questions in plain English. Gemini reads the docs and answers
 * in a friendly, jargon-free style.
 */

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ChatMessage, MessageSender, URLGroup } from "@/types/chatWithDocs";
import {
  generateContentWithUrlContext,
  getInitialSuggestions,
  isGeminiConfigured,
} from "@/services/geminiDocChat";
import KnowledgeBaseManager from "@/components/doc-browser/KnowledgeBaseManager";
import ChatInterface from "@/components/doc-browser/ChatInterface";

/* ── Pre-loaded documentation URL groups ─────────────────────────── */

const APPLE_SUPPORT_URLS = [
  "https://support.apple.com/iphone",
  "https://support.apple.com/ipad",
  "https://support.apple.com/mac",
  "https://support.apple.com/guide/iphone/welcome/ios",
  "https://support.apple.com/en-us/108380",
  "https://support.apple.com/en-us/111762",
];

const GOOGLE_SUPPORT_URLS = [
  "https://support.google.com/android/answer/7664951",
  "https://support.google.com/googlepixelphone",
  "https://support.google.com/chrome",
  "https://support.google.com/accounts/answer/46526",
  "https://support.google.com/mail",
  "https://support.google.com/drive",
];

const MICROSOFT_SUPPORT_URLS = [
  "https://support.microsoft.com/en-us/windows",
  "https://support.microsoft.com/en-us/office",
  "https://support.microsoft.com/en-us/account-billing",
  "https://support.microsoft.com/en-us/microsoft-edge",
  "https://support.microsoft.com/en-us/outlook",
];

const ONLINE_SAFETY_URLS = [
  "https://consumer.ftc.gov/features/scam-alerts",
  "https://www.cisa.gov/topics/cybersecurity-best-practices",
  "https://www.aarp.org/money/scams-fraud/",
  "https://staysafeonline.org/resources/",
  "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
  "https://consumer.ftc.gov/articles/what-know-about-romance-scams",
];

const GETTING_STARTED_URLS = [
  "https://edu.gcfglobal.org/en/computerbasics/",
  "https://edu.gcfglobal.org/en/internetbasics/",
  "https://edu.gcfglobal.org/en/email101/",
  "https://edu.gcfglobal.org/en/techsavvy/",
  "https://www.aarp.org/home-family/personal-technology/",
];

const INITIAL_URL_GROUPS: URLGroup[] = [
  { id: "apple-support", name: "Apple / iPhone / iPad / Mac", urls: APPLE_SUPPORT_URLS },
  { id: "google-android", name: "Google / Android / Chrome", urls: GOOGLE_SUPPORT_URLS },
  { id: "microsoft-windows", name: "Microsoft / Windows / Office", urls: MICROSOFT_SUPPORT_URLS },
  { id: "online-safety", name: "Online Safety & Scam Protection", urls: ONLINE_SAFETY_URLS },
  { id: "getting-started", name: "Getting Started with Tech", urls: GETTING_STARTED_URLS },
];

const MAX_URLS = 20;

/* ── Page component ──────────────────────────────────────────────── */

export default function DocBrowser() {
  const [urlGroups, setUrlGroups] = useState<URLGroup[]>(INITIAL_URL_GROUPS);
  const [activeUrlGroupId, setActiveUrlGroupId] = useState(INITIAL_URL_GROUPS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const activeGroup = urlGroups.find((g) => g.id === activeUrlGroupId);
  const currentUrls = activeGroup?.urls ?? [];

  /* ── Welcome message when group changes ────────────────────────── */
  useEffect(() => {
    const configured = isGeminiConfigured();
    const groupName = urlGroups.find((g) => g.id === activeUrlGroupId)?.name ?? "None";

    const welcomeText = !configured
      ? "The AI Doc Browser is not fully set up yet — a Gemini API key is needed. You can still browse the documentation links in the sidebar."
      : `Welcome to Chat with Docs! You are browsing "${groupName}". Type any question below, or try one of the suggestions, and the AI will read the documentation for you and answer in plain English.`;

    setChatMessages([
      {
        id: `welcome-${activeUrlGroupId}-${Date.now()}`,
        text: welcomeText,
        sender: MessageSender.SYSTEM,
        timestamp: new Date(),
      },
    ]);
  }, [activeUrlGroupId, urlGroups]);

  /* ── Fetch AI-generated starter suggestions ────────────────────── */
  const fetchSuggestions = useCallback(async (urls: string[]) => {
    if (urls.length === 0 || !isGeminiConfigured()) {
      setSuggestions([]);
      return;
    }
    setIsFetchingSuggestions(true);
    setSuggestions([]);
    try {
      const resp = await getInitialSuggestions(urls);
      if (resp.text) {
        let json = resp.text.trim();
        const fence = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = json.match(fence);
        if (match?.[2]) json = match[2].trim();
        const parsed = JSON.parse(json);
        if (Array.isArray(parsed.suggestions)) {
          setSuggestions(parsed.suggestions.filter((s: unknown) => typeof s === "string").slice(0, 4));
        }
      }
    } catch {
      /* silently degrade — suggestions are optional */
    } finally {
      setIsFetchingSuggestions(false);
    }
  }, []);

  useEffect(() => {
    fetchSuggestions(currentUrls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrls, fetchSuggestions]);

  /* ── URL management ────────────────────────────────────────────── */
  const handleAddUrl = (url: string) => {
    setUrlGroups((prev) =>
      prev.map((g) =>
        g.id === activeUrlGroupId && g.urls.length < MAX_URLS && !g.urls.includes(url)
          ? { ...g, urls: [...g.urls, url] }
          : g
      )
    );
  };

  const handleRemoveUrl = (url: string) => {
    setUrlGroups((prev) =>
      prev.map((g) =>
        g.id === activeUrlGroupId ? { ...g, urls: g.urls.filter((u) => u !== url) } : g
      )
    );
  };

  /* ── Send a message ────────────────────────────────────────────── */
  const handleSendMessage = async (query: string) => {
    if (!query.trim() || isLoading || isFetchingSuggestions) return;

    if (!isGeminiConfigured()) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `err-key-${Date.now()}`,
          text: "The AI key has not been set up yet. Please add VITE_GEMINI_API_KEY to your environment variables.",
          sender: MessageSender.SYSTEM,
          timestamp: new Date(),
        },
      ]);
      return;
    }

    setIsLoading(true);
    setSuggestions([]);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      text: query,
      sender: MessageSender.USER,
      timestamp: new Date(),
    };

    const placeholderId = `model-${Date.now()}`;
    const placeholder: ChatMessage = {
      id: placeholderId,
      text: "Reading the docs...",
      sender: MessageSender.MODEL,
      timestamp: new Date(),
      isLoading: true,
    };

    setChatMessages((prev) => [...prev, userMsg, placeholder]);

    try {
      const resp = await generateContentWithUrlContext(query, currentUrls);
      setChatMessages((prev) =>
        prev.map((m) =>
          m.id === placeholderId
            ? { ...m, text: resp.text || "I could not find an answer — try rephrasing your question.", isLoading: false, urlContext: resp.urlContextMetadata }
            : m
        )
      );
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : "Something went wrong. Please try again.";
      setChatMessages((prev) =>
        prev.map((m) =>
          m.id === placeholderId
            ? { ...m, text: `Error: ${errMsg}`, sender: MessageSender.SYSTEM, isLoading: false }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const chatPlaceholder =
    currentUrls.length > 0
      ? `Ask about "${activeGroup?.name ?? "current docs"}"...`
      : "Pick a topic group and add links to start chatting.";

  return (
    <>
      <SEOHead
        title="Chat with Docs — AI Documentation Browser | TekSure"
        description="Ask questions about tech-support documentation in plain English. Our AI reads Apple, Google, Microsoft, and safety docs so you don't have to."
        path="/tools/doc-browser"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Chat with Docs
              </h1>
              <p className="text-muted-foreground">
                Pick a topic, then ask a question in plain English. Our AI reads the official
                documentation and explains it to you — no tech jargon required.
              </p>
            </div>
          </div>
        </section>

        {/* Main content — sidebar + chat */}
        <div className="container py-6 pb-16">
          <div className="relative flex gap-4" style={{ height: "calc(100vh - 280px)", minHeight: 500 }}>
            {/* Mobile overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden="true"
              />
            )}

            {/* Sidebar */}
            <div
              className={`
                fixed top-0 left-0 h-full w-11/12 max-w-sm z-30 p-3 transform transition-transform duration-300
                md:static md:p-0 md:w-1/3 lg:w-1/4 md:h-full md:max-w-none md:translate-x-0 md:z-auto
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <KnowledgeBaseManager
                urls={currentUrls}
                onAddUrl={handleAddUrl}
                onRemoveUrl={handleRemoveUrl}
                maxUrls={MAX_URLS}
                urlGroups={urlGroups}
                activeUrlGroupId={activeUrlGroupId}
                onSetGroupId={setActiveUrlGroupId}
                onCloseSidebar={() => setIsSidebarOpen(false)}
              />
            </div>

            {/* Chat */}
            <div className="w-full h-full md:w-2/3 lg:w-3/4">
              <ChatInterface
                messages={chatMessages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                placeholderText={chatPlaceholder}
                initialQuerySuggestions={suggestions}
                onSuggestedQueryClick={handleSendMessage}
                isFetchingSuggestions={isFetchingSuggestions}
                onToggleSidebar={() => setIsSidebarOpen(true)}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
