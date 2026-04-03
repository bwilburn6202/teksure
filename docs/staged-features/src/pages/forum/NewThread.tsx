import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare } from "lucide-react";

const CATEGORIES = ["General", "WiFi & Internet", "Devices", "Security", "Software", "Other"];

export default function NewThread() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/login");
      } else {
        setUser(data.user);
      }
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Please fill in both the title and your question.");
      return;
    }
    if (!user) {
      navigate("/login");
      return;
    }

    setSubmitting(true);
    setError("");

    const { data, error } = await supabase.from("forum_threads").insert({
      title: title.trim(),
      content: content.trim(),
      user_id: user.id,
      category,
    }).select().single();

    if (error) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    } else {
      navigate(`/forum/${data.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-6 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link to="/forum" className="flex items-center gap-2 text-blue-100 hover:text-white mb-4 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Link>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-7 w-7" />
            <h1 className="text-2xl font-bold">Ask a Question</h1>
          </div>
          <p className="text-blue-100 mt-1">
            No question is too basic — our community is happy to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-5">

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                      category === cat
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Question or Topic
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. How do I connect my iPhone to WiFi?"
                className="text-base"
                maxLength={150}
              />
              <p className="text-xs text-gray-400 mt-1">{title.length}/150 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                More Details (optional but helpful)
              </label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell us more about the problem. What device are you using? What have you already tried?"
                className="min-h-[150px] text-base"
              />
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
              <p className="font-semibold mb-1">Tips for a great question:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-600">
                <li>Describe what you're trying to do</li>
                <li>Mention your device (iPhone, Android, Windows, etc.)</li>
                <li>Share what you've already tried</li>
              </ul>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex gap-3">
              <Button
                onClick={handleSubmit}
                disabled={!title.trim() || !content.trim() || submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                {submitting ? "Posting..." : "Post Your Question"}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/forum")}
                disabled={submitting}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
