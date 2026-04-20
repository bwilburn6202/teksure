import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Plus,
  Clock,
  Search,
  X,
  ThumbsUp,
  Pin,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface ForumThread {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  reply_count: number;
  category?: string;
  is_pinned: boolean;
  is_solved: boolean; // true when accepted_reply_id is set
  vote_count: number;
  user_voted: boolean;
}

const CATEGORIES = [
  "All",
  "General",
  "WiFi & Internet",
  "Devices",
  "Security",
  "Software",
  "Other",
];

// Minimum query length before switching to server-side FTS
const SERVER_SEARCH_MIN_CHARS = 3;
// Debounce delay in ms for server-side search
const SEARCH_DEBOUNCE_MS = 400;

export default function ForumIndex() {
  const [threads, setThreads] = useState<ForumThread[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false); // spinner for server-side search
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);
  const [votingId, setVotingId] = useState<string | null>(null);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentUserRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser();
      currentUserRef.current = data.user ?? null;
      setUser(data.user);
      await fetchThreads(data.user ?? null);
    };
    init();
  }, []);

  // ── Debounced server-side search when query is long enough ────────────────
  useEffect(() => {
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);

    if (searchQuery.trim().length >= SERVER_SEARCH_MIN_CHARS) {
      setSearching(true);
      searchDebounceRef.current = setTimeout(async () => {
        await fetchThreads(currentUserRef.current, searchQuery.trim());
        setSearching(false);
      }, SEARCH_DEBOUNCE_MS);
    } else if (searchQuery.trim().length === 0) {
      // Reload all threads when search is cleared
      fetchThreads(currentUserRef.current);
    }

    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, [searchQuery]);

  const fetchThreads = async (currentUser: any, searchText?: string) => {
    setLoading(true);

    // ── 1. Fetch threads ─────────────────────────────────────────────────────
    // Use server-side full-text search RPC when a meaningful query is provided.
    // The search_forum_threads() RPC was created in migration 20260324160000.
    let rawThreads: any[] | null = null;
    let error: any = null;

    if (searchText && searchText.length >= SERVER_SEARCH_MIN_CHARS) {
      const { data, error: rpcError } = await supabase.rpc(
        "search_forum_threads",
        { query: searchText }
      );
      rawThreads = data;
      error = rpcError;
      // If RPC fails (e.g. not yet deployed), fall back gracefully to full list
      if (rpcError) {
        console.warn("search_forum_threads RPC unavailable, falling back:", rpcError);
        const { data: fallback, error: fallbackError } = await supabase
          .from("forum_threads")
          .select("id, title, content, created_at, user_id, category, is_pinned, accepted_reply_id")
          .order("created_at", { ascending: false });
        rawThreads = fallback;
        error = fallbackError;
      }
    } else {
      const { data, error: fetchError } = await supabase
        .from("forum_threads")
        .select(
          "id, title, content, created_at, user_id, category, is_pinned, accepted_reply_id"
        )
        .order("created_at", { ascending: false });
      rawThreads = data;
      error = fetchError;
    }

    if (error || !rawThreads) {
      console.error("Error fetching threads:", error);
      setLoading(false);
      return;
    }

    // ── 2. Fetch vote counts (one query) ─────────────────────────────────────
    const { data: voteCounts } = (await supabase
      .from("thread_vote_counts")
      .select("thread_id, vote_count")) as any;

    const voteCountMap = new Map<string, number>();
    (voteCounts ?? []).forEach((v: any) =>
      voteCountMap.set(v.thread_id, Number(v.vote_count))
    );

    // ── 3. Fetch current user's votes (one query) ────────────────────────────
    const userVotedSet = new Set<string>();
    if (currentUser) {
      const { data: myVotes } = await supabase
        .from("thread_votes")
        .select("thread_id")
        .eq("user_id", currentUser.id);
      (myVotes ?? []).forEach((v: any) => userVotedSet.add(v.thread_id));
    }

    // ── 4. Fetch reply counts ────────────────────────────────────────────────
    const threadsWithAll = await Promise.all(
      rawThreads.map(async (thread) => {
        const { count } = await supabase
          .from("forum_replies")
          .select("*", { count: "exact", head: true })
          .eq("thread_id", thread.id);
        return {
          ...thread,
          is_pinned: thread.is_pinned ?? false,
          is_solved: !!thread.accepted_reply_id,
          reply_count: count ?? 0,
          vote_count: voteCountMap.get(thread.id) ?? 0,
          user_voted: userVotedSet.has(thread.id),
        };
      })
    );

    // ── 5. Sort: pinned first, then solved threads, then by date ─────────────
    threadsWithAll.sort((a, b) => {
      if (a.is_pinned && !b.is_pinned) return -1;
      if (!a.is_pinned && b.is_pinned) return 1;
      return 0; // already ordered by date from the query
    });

    setThreads(threadsWithAll);
    setLoading(false);
  };

  // ── Vote toggle ─────────────────────────────────────────────────────────────
  const handleVote = async (threadId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate("/login");
      return;
    }

    const thread = threads.find((t) => t.id === threadId);
    if (!thread || votingId === threadId) return;

    setVotingId(threadId);

    if (thread.user_voted) {
      await supabase
        .from("thread_votes")
        .delete()
        .eq("thread_id", threadId)
        .eq("user_id", user.id);

      setThreads((prev) =>
        prev.map((t) =>
          t.id === threadId
            ? { ...t, vote_count: Math.max(0, t.vote_count - 1), user_voted: false }
            : t
        )
      );
    } else {
      await supabase
        .from("thread_votes")
        .insert({ thread_id: threadId, user_id: user.id });

      setThreads((prev) =>
        prev.map((t) =>
          t.id === threadId
            ? { ...t, vote_count: t.vote_count + 1, user_voted: true }
            : t
        )
      );
    }

    setVotingId(null);
  };

  // ── Client-side filtering ───────────────────────────────────────────────────
  // When server-side FTS is active (query >= SERVER_SEARCH_MIN_CHARS), the
  // `threads` array already contains only matching results from the RPC —
  // so we only apply the category filter on top.
  // For short queries (< SERVER_SEARCH_MIN_CHARS), do client-side text match.
  const filteredThreads = threads.filter((t) => {
    const matchesCategory =
      selectedCategory === "All" || t.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    const useClientSearch = query.length > 0 && query.length < SERVER_SEARCH_MIN_CHARS;
    const matchesSearch =
      !useClientSearch ||
      t.title.toLowerCase().includes(query) ||
      t.content.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const clearSearch = () => {
    setSearchQuery("");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Community Forum</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Ask questions, share tips, and help each other with technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-5">
          {searching ? (
            <Loader2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400 animate-spin pointer-events-none" />
          ) : (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          )}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search discussions..."
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
            aria-label="Search discussions"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {/* Server-search hint */}
        {searchQuery.trim().length >= SERVER_SEARCH_MIN_CHARS && !searching && (
          <p className="text-xs text-gray-400 -mt-3 mb-4 ml-1">
            Searching all discussions — including content
          </p>
        )}

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-gray-600 text-sm">
            {filteredThreads.length}{" "}
            {filteredThreads.length === 1 ? "discussion" : "discussions"}
            {searchQuery && (
              <span className="ml-1 text-blue-600">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </p>
          <Button
            onClick={() => navigate(user ? "/forum/new" : "/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Start a Discussion
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Thread List */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading discussions...
          </div>
        ) : filteredThreads.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              {searchQuery ? (
                <>
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try different keywords, or{" "}
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={clearSearch}
                    >
                      clear your search
                    </button>
                    .
                  </p>
                </>
              ) : (
                <>
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    No discussions yet
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Be the first to start a conversation!
                  </p>
                  <Button
                    onClick={() => navigate(user ? "/forum/new" : "/login")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start a Discussion
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredThreads.map((thread) => (
              <Link key={thread.id} to={`/forum/${thread.id}`}>
                <Card
                  className={`hover:shadow-md transition-shadow cursor-pointer border ${
                    thread.is_pinned
                      ? "border-blue-300 bg-blue-50/40"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start gap-4">
                      {/* Left: thread info */}
                      <div className="flex-1 min-w-0">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {thread.is_pinned && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                              <Pin className="h-3 w-3" />
                              Pinned
                            </span>
                          )}
                          {thread.is_solved && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                              <CheckCircle className="h-3 w-3" />
                              Solved
                            </span>
                          )}
                          {thread.category &&
                            thread.category !== "General" && (
                              <Badge className="bg-blue-100 text-blue-700 text-xs">
                                {thread.category}
                              </Badge>
                            )}
                        </div>

                        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                          {highlightText(thread.title, searchQuery)}
                        </h2>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                          {thread.content}
                        </p>

                        {/* Meta row */}
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatDate(thread.created_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {thread.reply_count}{" "}
                            {thread.reply_count === 1 ? "reply" : "replies"}
                          </span>
                        </div>
                      </div>

                      {/* Right: upvote button */}
                      <button
                        onClick={(e) => handleVote(thread.id, e)}
                        disabled={votingId === thread.id}
                        title={
                          thread.user_voted
                            ? "Remove helpful vote"
                            : "Mark as helpful"
                        }
                        aria-label={`${thread.vote_count} helpful votes`}
                        className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl border transition-colors flex-shrink-0 min-w-[52px] ${
                          thread.user_voted
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-200 text-gray-400 hover:border-blue-400 hover:text-blue-500"
                        } ${votingId === thread.id ? "opacity-50" : ""}`}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-xs font-semibold leading-none">
                          {thread.vote_count}
                        </span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Help Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
          <strong>New to the forum?</strong> Feel free to ask any technology
          question — no question is too basic! Our community is here to help.
        </div>
      </div>
    </div>
  );
}

// ── Helper: highlight matching text ────────────────────────────────────────────
function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const lower = text.toLowerCase();
  const queryLower = query.trim().toLowerCase();
  const idx = lower.indexOf(queryLower);

  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-gray-900 rounded px-0.5">
        {text.slice(idx, idx + query.trim().length)}
      </mark>
      {text.slice(idx + query.trim().length)}
    </>
  );
}
