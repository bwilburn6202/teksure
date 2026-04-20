import { useState } from "react";
import { Plus, Trash2, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { URLGroup } from "@/types/chatWithDocs";

interface KnowledgeBaseManagerProps {
  urls: string[];
  onAddUrl: (url: string) => void;
  onRemoveUrl: (url: string) => void;
  maxUrls?: number;
  urlGroups: URLGroup[];
  activeUrlGroupId: string;
  onSetGroupId: (id: string) => void;
  onCloseSidebar?: () => void;
}

export default function KnowledgeBaseManager({
  urls,
  onAddUrl,
  onRemoveUrl,
  maxUrls = 20,
  urlGroups,
  activeUrlGroupId,
  onSetGroupId,
  onCloseSidebar,
}: KnowledgeBaseManagerProps) {
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isValidUrl = (s: string) => {
    try {
      new URL(s);
      return true;
    } catch {
      return false;
    }
  };

  const handleAdd = () => {
    const trimmed = urlInput.trim();
    if (!trimmed) {
      setError("Please enter a web address.");
      return;
    }
    if (!isValidUrl(trimmed)) {
      setError("That does not look like a valid web address. Make sure it starts with https://");
      return;
    }
    if (urls.length >= maxUrls) {
      setError(`You can add up to ${maxUrls} links per group.`);
      return;
    }
    if (urls.includes(trimmed)) {
      setError("This link has already been added.");
      return;
    }
    onAddUrl(trimmed);
    setUrlInput("");
    setError(null);
  };

  const activeGroupName = urlGroups.find((g) => g.id === activeUrlGroupId)?.name || "Unknown";

  return (
    <div className="p-4 bg-card border border-border rounded-xl h-full flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Documentation Links</h2>
        {onCloseSidebar && (
          <button
            onClick={onCloseSidebar}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors md:hidden"
            aria-label="Close panel"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Group selector */}
      <div className="mb-3">
        <label htmlFor="doc-group-select" className="block text-sm font-medium text-muted-foreground mb-1">
          Topic Group
        </label>
        <div className="relative">
          <select
            id="doc-group-select"
            value={activeUrlGroupId}
            onChange={(e) => onSetGroupId(e.target.value)}
            className="w-full h-9 pl-3 pr-8 appearance-none border border-border bg-background text-foreground rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          >
            {urlGroups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Add URL input */}
      <div className="flex items-center gap-2 mb-2">
        <Input
          type="url"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="https://support.apple.com/..."
          className="h-9 text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <Button
          size="icon"
          variant="outline"
          onClick={handleAdd}
          disabled={urls.length >= maxUrls}
          aria-label="Add link"
          className="h-9 w-9 shrink-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {error && <p className="text-xs text-destructive mb-2">{error}</p>}
      {urls.length >= maxUrls && (
        <p className="text-xs text-amber-600 dark:text-amber-400 mb-2">
          Maximum {maxUrls} links reached for this group.
        </p>
      )}

      {/* URL list */}
      <div className="flex-1 overflow-y-auto space-y-1.5 mt-1">
        {urls.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-6">
            Add documentation links to &ldquo;{activeGroupName}&rdquo; to start chatting.
          </p>
        )}
        {urls.map((url) => (
          <div
            key={url}
            className="flex items-center justify-between p-2.5 bg-muted/50 border border-border/50 rounded-lg"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline truncate mr-2"
              title={url}
            >
              {url}
            </a>
            <button
              onClick={() => onRemoveUrl(url)}
              className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
              aria-label={`Remove ${url}`}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
