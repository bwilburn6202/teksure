import { marked } from "marked";
import { ChatMessage, MessageSender, type UrlContextMetadataItem } from "@/types/chatWithDocs";
import { Bot, User, Info } from "lucide-react";

/* ── Markdown renderer setup ────────────────────────────────────── */
marked.setOptions({
  breaks: true,
  gfm: true,
});

/* ── Avatar ─────────────────────────────────────────────────────── */
function SenderAvatar({ sender }: { sender: MessageSender }) {
  if (sender === MessageSender.USER) {
    return (
      <div className="h-8 w-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
        <User className="h-4 w-4" />
      </div>
    );
  }
  if (sender === MessageSender.MODEL) {
    return (
      <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
        <Bot className="h-4 w-4" />
      </div>
    );
  }
  return (
    <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
      <Info className="h-4 w-4" />
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function MessageItem({ message }: { message: ChatMessage }) {
  const isUser = message.sender === MessageSender.USER;
  const isModel = message.sender === MessageSender.MODEL;

  const renderContent = () => {
    if (isModel && !message.isLoading) {
      const html = marked.parse(message.text || "") as string;
      return (
        <div
          className="prose prose-sm dark:prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return <p className="text-sm whitespace-pre-wrap">{message.text}</p>;
  };

  /* Bubble styles */
  let bubbleClass = "p-3 rounded-xl max-w-full ";
  if (isUser) {
    bubbleClass += "bg-primary/10 dark:bg-primary/20 rounded-br-sm";
  } else if (isModel) {
    bubbleClass += "bg-card border border-border rounded-bl-sm";
  } else {
    bubbleClass += "bg-muted/60 text-muted-foreground rounded-bl-sm";
  }

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex items-start gap-2 max-w-[88%]">
        {!isUser && <SenderAvatar sender={message.sender} />}

        <div className={bubbleClass}>
          {message.isLoading ? (
            <div className="flex items-center gap-1.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" />
            </div>
          ) : (
            renderContent()
          )}

          {/* URL context sources */}
          {isModel && message.urlContext && message.urlContext.length > 0 && (
            <div className="mt-2.5 pt-2.5 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground mb-1">Sources checked:</p>
              <ul className="space-y-0.5">
                {message.urlContext.map((meta: UrlContextMetadataItem, idx: number) => {
                  const status = typeof meta.urlRetrievalStatus === "string"
                    ? meta.urlRetrievalStatus.replace("URL_RETRIEVAL_STATUS_", "")
                    : "UNKNOWN";
                  const ok = meta.urlRetrievalStatus === "URL_RETRIEVAL_STATUS_SUCCESS";
                  return (
                    <li key={idx} className="text-[11px] text-muted-foreground">
                      <a
                        href={meta.retrievedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-all"
                      >
                        {meta.retrievedUrl}
                      </a>
                      <span
                        className={`ml-1.5 px-1 py-0.5 rounded text-[9px] ${
                          ok
                            ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {status}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {isUser && <SenderAvatar sender={message.sender} />}
      </div>
    </div>
  );
}
