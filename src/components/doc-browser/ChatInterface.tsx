import { useState, useRef, useEffect } from "react";
import { ChatMessage, MessageSender } from "@/types/chatWithDocs";
import MessageItem from "./MessageItem";
import { Send, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (query: string) => void;
  isLoading: boolean;
  placeholderText?: string;
  initialQuerySuggestions?: string[];
  onSuggestedQueryClick?: (query: string) => void;
  isFetchingSuggestions?: boolean;
  onToggleSidebar?: () => void;
}

export default function ChatInterface({
  messages,
  onSendMessage,
  isLoading,
  placeholderText,
  initialQuerySuggestions,
  onSuggestedQueryClick,
  isFetchingSuggestions,
  onToggleSidebar,
}: ChatInterfaceProps) {
  const [userQuery, setUserQuery] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (userQuery.trim() && !isLoading) {
      onSendMessage(userQuery.trim());
      setUserQuery("");
    }
  };

  const showSuggestions =
    initialQuerySuggestions &&
    initialQuerySuggestions.length > 0 &&
    messages.filter((m) => m.sender !== MessageSender.SYSTEM).length <= 1;

  return (
    <div className="flex flex-col h-full bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors md:hidden"
            aria-label="Open documentation list"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <div>
          <h2 className="text-lg font-semibold">Ask About Tech Docs</h2>
          {placeholderText && messages.filter((m) => m.sender !== MessageSender.SYSTEM).length === 0 && (
            <p className="text-xs text-muted-foreground mt-0.5 max-w-md truncate">{placeholderText}</p>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-background/50">
        <div className="max-w-3xl mx-auto w-full">
          {messages.map((msg) => (
            <MessageItem key={msg.id} message={msg} />
          ))}

          {/* Loading suggestions indicator */}
          {isFetchingSuggestions && (
            <div className="flex items-center gap-2 justify-center py-3 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" />
              <span className="text-sm">Loading suggestions...</span>
            </div>
          )}

          {/* Suggestion pills */}
          {showSuggestions && onSuggestedQueryClick && (
            <div className="my-3">
              <p className="text-xs text-muted-foreground mb-2 font-medium">Try one of these:</p>
              <div className="flex flex-wrap gap-2">
                {initialQuerySuggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => onSuggestedQueryClick(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>
      </div>

      {/* Input bar */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <textarea
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 min-h-[40px] h-10 py-2 px-3 border border-border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none text-sm"
            rows={1}
            disabled={isLoading || isFetchingSuggestions}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isLoading || isFetchingSuggestions || !userQuery.trim()}
            aria-label="Send message"
            className="h-10 w-10 shrink-0"
          >
            {isLoading && messages[messages.length - 1]?.isLoading ? (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
