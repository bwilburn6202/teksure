# TekSure Brain — Local AI Knowledge Engine

Ask any technology question and get answers sourced directly from TekSure's guide library — powered by a local LLM running on your machine.

**No internet required. No API keys. Completely private.**

---

## How It Works

1. All TekSure guides are exported to markdown files
2. Ollama runs a small LLM locally (llama3.2:1b ~1.3GB or phi3:mini ~2.4GB)
3. When you ask a question, the most relevant guides are found and sent to the LLM as context
4. The LLM synthesizes a plain-English answer from the guide content

This is **Retrieval-Augmented Generation (RAG)** — the LLM only knows what's in TekSure's guides.

---

## Quick Setup (5 minutes)

### Step 1: Install Ollama

```bash
# macOS
brew install ollama

# Or download from:
# https://ollama.com
```

### Step 2: Start Ollama and pull a model

```bash
# Start the Ollama service
ollama serve

# In a new terminal, pull a small model
# Option A: llama3.2:1b — fastest, ~1.3GB
ollama pull llama3.2:1b

# Option B: phi3:mini — better quality, ~2.4GB
ollama pull phi3:mini
```

### Step 3: Export TekSure guides

```bash
# From the TekSure project root
node scripts/export-knowledge-base.mjs
```

### Step 4: Query the brain

```bash
# Ask a question
node local-brain/query.mjs "how do I back up my iPhone?"

# Start interactive mode
node local-brain/query.mjs
```

---

## Web Interface

With Ollama running, visit http://localhost:5173/brain in the TekSure development server to use the brain through the web UI.

The web UI auto-detects if Ollama is running and upgrades from guide search to full AI answers.

---

## Models

| Model | Size | Speed | Quality | Best For |
|-------|------|-------|---------|---------|
| `llama3.2:1b` | 1.3GB | Fast | Good | Quick answers |
| `phi3:mini` | 2.4GB | Medium | Better | Detailed explanations |
| `llama3.2:3b` | 2.0GB | Medium | Best | Best quality answers |

Change the model in `local-brain/query.mjs` by editing `MODEL_NAME`.

---

## Files

```
local-brain/
├── README.md        ← You are here
├── query.mjs        ← CLI query tool
└── server.mjs       ← Local HTTP server (for web UI)

public/brain/
├── guides/          ← One .md file per guide (generated)
├── knowledge-base.json  ← Full guide index (generated)
└── search-index.json    ← Compact search index (generated)

scripts/
└── export-knowledge-base.mjs  ← Generate the above files
```
