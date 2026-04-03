import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MessageSquare,
  Clock,
  Send,
  Trash2,
  ShieldCheck,
  ThumbsUp,
  Pin,
  PinOff,
  CheckCircle,
  Circle,
} from "lucide-react";

interface Thread {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  category?: string;
  is_pinned: boolean;
  accepted_reply_id: string | null;
}

interface Reply {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
}

export default function ForumThread() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [thread, setThread] = useState<Thread | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [deletingThread, setDeletingThread] = useState(false);

  // Vote state
  const [voteCount, setVoteCount] = useState(0);
  const [userVoted, setUserVoted] = useState(false);
  const [voting, setVoting] = useState(false);

  // Pin state
  const [pinning, setPinning] = useState(false);

  // Accept-answer state
  const [acceptingId, setAcceptingId] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      if (data.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq("user_id", data.user.id)
          .single();
        setIsAdmin(profile?.is_admin === true);
      }
    };
    checkUser();
    if (id) {
      fetchThread();
      fetchReplies();
      fetchVotes();
    }
  }, [id]);

  useEffect(() => {
    if (user && id) fetchUserVote();
  }, [user, id]);

  const fetchThread = async () => {
    const { data, error } = await supabase
      .from("forum_threads")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      navigate("/forum");
    } else {
      setThread({
        ...data,
        is_pinned: data.is_pinned ?? false,
        accepted_reply_id: data.accepted_reply_id ?? null,
      });
    }
    setLoading(false);
  };

  const fetchReplies = async () => {
    const { data } = await supabase
      .from("forum_replies")
      .select("*")
      .eq("thread_id", id)
      .order("created_at", { ascending: true });
    setReplies(data || []);
  };

  const fetchVotes = async () => {
    const { data } = (await supabase
      .from("thread_vote_counts")
      .select("vote_count")
      .eq("thread_id", id)
      .single()) as any;
    setVoteCount(data ? Number(data.vote_count) : 0);
  };

  const fetchUserVote = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("thread_votes")
      .select("id")
      .eq("thread_id", id)
      .eq("user_id", user.id)
      .maybeSingle();
    setUserVoted(!!data);
  };

  // ── Vote toggle ─────────────────────────────────────────────────────────────
  const handleVote = async () => {
    if (!user) { navigate("/login"); return; }
    if (voting) return;
    setVoting(true);

    if (userVoted) {
      await supabase
        .from("thread_votes")
        .delete()
        .eq("thread_id", id)
        .eq("user_id", user.id);
      setVoteCount((c) => Math.max(0, c - 1));
      setUserVoted(false);
    } else {
      await supabase
        .from("thread_votes")
        .insert({ thread_id: id, user_id: user.id });
      setVoteCount((c) => c + 1);
      setUserVoted(true);
    }

    setVoting(false);
  };

  // ── Pin / unpin (admin only) ─────────────────────────────────────────────────
  const handleTogglePin = async () => {
    if (!isAdmin || !thread || pinning) return;
    setPinning(true);

    const newPinValue = !thread.is_pinned;
    const { error } = await (supabase.rpc as any)("pin_thread", {
      thread_id_param: thread.id,
      pin_value: newPinValue,
    });

    if (!error) {
      setThread({ ...thread, is_pinned: newPinValue });
    } else {
      alert("Could not update pin status. Please try again.");
    }
    setPinning(false);
  };

  // ── Accept / unaccept reply ──────────────────────────────────────────────────
  //
  // Who can accept: the thread author, or an admin.
  // Passing null for replyId removes the accepted answer.
  const handleAcceptReply = async (replyId: string | null) => {
    if (!thread || !user) return;
    const canAccept = user.id === thread.user_id || isAdmin;
    if (!canAccept) return;

    setAcceptingId(replyId ?? "unset");

    const { error } = await (supabase.rpc as any)("accept_reply", {
      p_thread_id: thread.id,
      p_reply_id: replyId,
    });

    if (!error) {
      setThread({ ...thread, accepted_reply_id: replyId });
    } else {
      alert("Could not update the answer. Please try again.");
    }

    setAcceptingId(null);
  };

  // ── Reply submit ─────────────────────────────────────────────────────────────
  const handleSubmitReply = async () => {
    if (!newReply.trim()) return;
    if (!user) { navigate("/login"); return; }

    setSubmitting(true);
    setError("");

    const { error } = await supabase.from("forum_replies").insert({
      thread_id: id,
      user_id: user.id,
      content: newReply.trim(),
    });

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setNewReply("");
      await fetchReplies();
    }
    setSubmitting(false);
  };

  // ── Delete reply ─────────────────────────────────────────────────────────────
  const handleDeleteReply = async (replyId: string, replyUserId: string) => {
    if (!user) return;
    const canDelete = user.id === replyUserId || isAdmin;
    if (!canDelete) return;

    if (isAdmin && user.id !== replyUserId) {
      const confirmed = window.confirm(
        "Delete this reply as admin? This cannot be undone."
      );
      if (!confirmed) return;
    }

    const query = supabase.from("forum_replies").delete().eq("id", replyId);
    if (!isAdmin) query.eq("user_id", user.id);

    const { error } = await query;
    if (!error) {
      // If the deleted reply was the accepted answer, clear it
      if (thread?.accepted_reply_id === replyId) {
        setThread((t) => t ? { ...t, accepted_reply_id: null } : t);
      }
      await fetchReplies();
    }
  };

  // ── Delete thread (admin only) ───────────────────────────────────────────────
  const handleDeleteThread = async () => {
    if (!isAdmin || !thread) return;

    const confirmed = window.confirm(
      `Delete the entire thread "${thread.title}" and all its replies? This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingThread(true);
    await supabase.from("forum_replies").delete().eq("thread_id", thread.id);

    const { error } = await supabase
      .from("forum_threads")
      .delete()
      .eq("id", thread.id);

    if (error) {
      alert("Could not delete thread. Please try again.");
      setDeletingThread(false);
    } else {
      navigate("/forum");
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading discussion...</p>
      </div>
    );
  }

  if (!thread) return null;

  // Split replies: accepted first, others in order
  const acceptedReply = thread.accepted_reply_id
    ? replies.find((r) => r.id === thread.accepted_reply_id) ?? null
    : null;
  const otherReplies = replies.filter(
    (r) => r.id !== thread.accepted_reply_id
  );

  // Can the current user accept/unaccept?
  const canAccept =
    !!user && (user.id === thread.user_id || isAdmin) && replies.length > 0;

  const isSolved = !!thread.accepted_reply_id;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className={`text-white py-6 px-4 ${
          thread.is_pinned ? "bg-blue-700" : "bg-blue-600"
        }`}
      >
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/forum"
            className="flex items-center gap-2 text-blue-100 hover:text-white mb-4 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Link>

          {/* Status badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            {thread.is_pinned && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-full">
                <Pin className="h-3 w-3" />
                Pinned
              </span>
            )}
            {isSolved && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-500 text-white px-3 py-1 rounded-full">
                <CheckCircle className="h-3 w-3" />
                Solved
              </span>
            )}
            {thread.category && (
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                {thread.category}
              </span>
            )}
          </div>

          {/* Title + admin actions */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold flex-1">{thread.title}</h1>

            {isAdmin && (
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Pin / unpin */}
                <button
                  onClick={handleTogglePin}
                  disabled={pinning}
                  title={thread.is_pinned ? "Unpin this thread" : "Pin this thread"}
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                    thread.is_pinned
                      ? "bg-blue-400 hover:bg-blue-300 text-white"
                      : "bg-white/20 hover:bg-white/30 text-white"
                  }`}
                >
                  {thread.is_pinned ? (
                    <><PinOff className="h-3.5 w-3.5" />{pinning ? "Unpinning..." : "Unpin"}</>
                  ) : (
                    <><Pin className="h-3.5 w-3.5" />{pinning ? "Pinning..." : "Pin"}</>
                  )}
                </button>

                {/* Delete thread */}
                <button
                  onClick={handleDeleteThread}
                  disabled={deletingThread}
                  title="Admin: Delete this thread"
                  className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {deletingThread ? "Deleting..." : "Delete Thread"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Admin notice */}
        {isAdmin && (
          <div className="mb-4 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-700">
            <ShieldCheck className="h-4 w-4 flex-shrink-0" />
            <span>
              You're viewing as an admin — you can pin/unpin, delete any post or
              reply, and accept answers.
            </span>
          </div>
        )}

        {/* Original Post */}
        <Card className="mb-6 border border-gray-200">
          <CardContent className="p-6">
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap mb-5">
              {thread.content}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>Posted {formatDate(thread.created_at)}</span>
              </div>

              {/* Helpful vote button */}
              <button
                onClick={handleVote}
                disabled={voting}
                title={userVoted ? "Remove your helpful vote" : "Mark this as helpful"}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                  userVoted
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"
                } ${voting ? "opacity-50" : ""}`}
              >
                <ThumbsUp className="h-4 w-4" />
                {userVoted ? "Helpful!" : "Helpful"}
                {voteCount > 0 && (
                  <span
                    className={`text-xs font-bold ${
                      userVoted ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {voteCount}
                  </span>
                )}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* ── Best Answer (if solved) ── */}
        {acceptedReply && (
          <div className="mb-8">
            <h2 className="text-base font-semibold text-green-700 flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 fill-green-100" />
              Best Answer
            </h2>
            <Card className="border-2 border-green-300 bg-green-50/40">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-green-700">
                      Accepted Answer
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {formatDate(acceptedReply.created_at)}
                    </span>
                  </div>
                  {/* Allow thread owner/admin to unmark */}
                  {canAccept && (
                    <button
                      onClick={() => handleAcceptReply(null)}
                      disabled={acceptingId === "unset"}
                      title="Remove accepted answer"
                      className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
                    >
                      <Circle className="h-3.5 w-3.5" />
                      Unmark
                    </button>
                  )}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                  {acceptedReply.content}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ── All Replies ── */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-500" />
          {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
          {isSolved && (
            <span className="text-sm font-normal text-green-600 flex items-center gap-1">
              <CheckCircle className="h-4 w-4" /> Solved
            </span>
          )}
        </h2>

        {replies.length === 0 ? (
          <div className="text-center py-8 text-gray-400 mb-6">
            <p>No replies yet. Be the first to help!</p>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            {/* Show accepted reply first in the list (with a special marker),
                then the rest in original order */}
            {[
              ...(acceptedReply ? [acceptedReply] : []),
              ...otherReplies,
            ].map((reply, index) => {
              const isAccepted = reply.id === thread.accepted_reply_id;
              const canDelete =
                user && (user.id === reply.user_id || isAdmin);

              return (
                <Card
                  key={reply.id}
                  className={`border ${
                    isAccepted
                      ? "border-green-200 bg-green-50/20"
                      : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                              isAccepted
                                ? "bg-green-500 text-white"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {isAccepted ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              index + (acceptedReply ? 0 : 1)
                            )}
                          </div>
                          <span className="text-xs text-gray-400">
                            {formatDate(reply.created_at)}
                          </span>
                          {isAccepted && (
                            <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Best Answer
                            </span>
                          )}
                          {isAdmin && user && user.id !== reply.user_id && (
                            <span className="text-xs text-amber-500 flex items-center gap-0.5">
                              <ShieldCheck className="h-3 w-3" />
                              admin view
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                          {reply.content}
                        </p>
                      </div>

                      {/* Action buttons: accept + delete */}
                      <div className="ml-3 flex items-center gap-2 flex-shrink-0">
                        {/* Accept / unaccept button (thread owner or admin) */}
                        {canAccept && (
                          <button
                            onClick={() =>
                              handleAcceptReply(
                                isAccepted ? null : reply.id
                              )
                            }
                            disabled={acceptingId === reply.id}
                            title={
                              isAccepted
                                ? "Remove as accepted answer"
                                : "Mark as accepted answer"
                            }
                            className={`transition-colors ${
                              isAccepted
                                ? "text-green-500 hover:text-gray-400"
                                : "text-gray-300 hover:text-green-500"
                            } ${acceptingId === reply.id ? "opacity-50" : ""}`}
                          >
                            <CheckCircle className="h-5 w-5" />
                          </button>
                        )}

                        {/* Delete button */}
                        {canDelete && (
                          <button
                            onClick={() =>
                              handleDeleteReply(reply.id, reply.user_id)
                            }
                            className={`transition-colors ${
                              isAdmin && user.id !== reply.user_id
                                ? "text-amber-400 hover:text-red-500"
                                : "text-gray-300 hover:text-red-400"
                            }`}
                            title={
                              isAdmin && user.id !== reply.user_id
                                ? "Admin: delete reply"
                                : "Delete reply"
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* ── Mark as solved tip (thread owner with unresolved replies) ── */}
        {!isSolved && replies.length > 0 && user && user.id === thread.user_id && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
            <span>
              Did someone help you? Click the{" "}
              <strong>✓ circle</strong> next to the best reply to mark it as the answer.
            </span>
          </div>
        )}

        {/* Reply Form */}
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              {user ? "Add Your Reply" : "Sign In to Reply"}
            </h3>
            {user ? (
              <>
                <Textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  placeholder="Share your answer or experience..."
                  className="mb-3 min-h-[120px] text-base"
                  disabled={submitting}
                />
                {error && (
                  <p className="text-red-500 text-sm mb-3">{error}</p>
                )}
                <Button
                  onClick={handleSubmitReply}
                  disabled={!newReply.trim() || submitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Posting..." : "Post Reply"}
                </Button>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">
                  You need to be signed in to post a reply.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={() => navigate("/login")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => navigate("/signup")}
                    variant="outline"
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
