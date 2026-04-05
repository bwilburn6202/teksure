---
tags: [llm, fine-tuning, ollama, unsloth, karpathy, architecture]
sources: 8
last_updated: 2026-04-05
---

# TekSure Custom LLM — Architecture Plan

## Goal

Build TekSure's own fine-tuned LLM that answers technology questions from our compiled knowledge base. No cloud API dependency. No per-query costs. A model we own and control.

## Architecture (Karpathy-Inspired)

This follows Andrej Karpathy's April 2026 "LLM Knowledge Bases" architecture: compile raw sources into a structured wiki, then use that wiki as training data to fine-tune a model that "knows" the data in its weights.

### The Pipeline

```
Raw Sources (780+ guides, scraped content)
    ↓ [Ingest]
Compiled Wiki (38 articles, cross-linked, maintained by AI)
    ↓ [Generate Training Data]
ChatML Q&A Dataset (2,000+ examples)
    ↓ [Fine-Tune with Unsloth + LoRA]
TekSure LLM (Llama 3.1 8B or Mistral 7B, quantized to GGUF)
    ↓ [Serve with Ollama]
TekBot queries the model via REST API (localhost:11434)
```

## Base Model Options

| Model | Parameters | VRAM Needed | Strength |
|-------|-----------|-------------|----------|
| Llama 3.1 8B Instruct | 8B | 6-12 GB | Best all-around, strong instruction following |
| Mistral 7B v0.3 Instruct | 7B | 6-12 GB | Fast, good at conversation |
| Phi-3 Mini 3.8B | 3.8B | 4-6 GB | Smallest, runs on weaker hardware |
| Qwen 2.5 7B | 7B | 6-12 GB | Strong multilingual support |

**Recommendation:** Start with Llama 3.1 8B Instruct — best documentation, largest community, strongest fine-tuning support.

## Fine-Tuning Stack

- **Unsloth** (free, open-source) — 2x faster, 60% less memory
- **LoRA/QLoRA** — Only trains a small adapter, not the full model
- **LoRA rank 32-64** — For knowledge injection (our use case)
- **Platform:** Free Google Colab or Kaggle notebooks (T4 GPU)
- **Training time:** ~1-2 hours for 2,000 examples on free GPU

## Training Data Format (ChatML)

Each training example is a Q&A pair:

```json
{
  "messages": [
    {"role": "system", "content": "You are TekBot, a friendly tech helper for seniors. Answer using plain language, no jargon."},
    {"role": "user", "content": "How do I connect to WiFi on my Windows computer?"},
    {"role": "assistant", "content": "Here is how to connect to WiFi on Windows:\n\n1. Click the WiFi icon in the bottom-right corner of your screen\n2. Turn on WiFi if it is off\n3. Find your network name in the list and click it\n4. Enter your WiFi password (check the sticker on your router)\n5. Click Connect\n\nWhy this works: WiFi uses radio signals from your router. Selecting your network and entering the password tells your computer which signal to use.\n\nSource: TekSure Guide — connect-wifi-windows"}
  ]
}
```

## Data Sources for Training

| Source | Count | Type |
|--------|-------|------|
| guides.ts | 780+ | Step-by-step guides with titles, steps, tags |
| wiki.ts | 38 | Compiled knowledge articles |
| wiki/*.md | 40+ | Markdown knowledge base files |
| Glossary | 106 | Term definitions |
| Weekly Tips | 50+ | Short practical tips |
| Scam Alerts | 20+ | Scam descriptions and red flags |

**Target:** 2,000-5,000 Q&A pairs generated from these sources.

## Serving with Ollama

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Import fine-tuned model
ollama create teksure-bot -f Modelfile

# Run the model (exposes API on localhost:11434)
ollama serve

# Test it
curl http://localhost:11434/v1/chat/completions \
  -d '{"model": "teksure-bot", "messages": [{"role": "user", "content": "How do I spot a scam email?"}]}'
```

## TekBot Integration

TekBot will call the Ollama API through a Supabase Edge Function (keeps the server URL private):

1. User types question in TekBot
2. TekBot sends request to Supabase Edge Function
3. Edge Function forwards to Ollama API on the server
4. Model generates answer from trained knowledge
5. Response displayed in TekBot with source citations

## Implementation Steps

1. **Build training dataset generator** — Script that converts guides + wiki into ChatML format
2. **Generate dataset** — Run script, produce JSONL file with 2,000+ Q&A pairs
3. **Fine-tune on Colab** — Use Unsloth notebook, upload dataset, train for 1-3 epochs
4. **Export to GGUF** — Quantize to Q4_K_M for efficient inference
5. **Test with Ollama** — Import model, verify answers are grounded in TekSure content
6. **Deploy** — Run Ollama on server, create Supabase Edge Function proxy
7. **Wire TekBot** — Replace keyword search with LLM query + fallback to search

## Cost

- Base model: **Free** (open weights, no license fees)
- Fine-tuning: **Free** (Google Colab/Kaggle GPU)
- Unsloth: **Free** (open source)
- Ollama: **Free** (open source)
- Server: Only cost is hosting the model (~$20-50/month for a GPU VPS, or run on existing hardware)

## Sources

- Karpathy LLM Knowledge Bases (April 2026): gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Unsloth: unsloth.ai
- Ollama: ollama.com
- LLaMA-Factory: github.com/hiyouga/LLamaFactory
- arscontexta skill graphs: github.com/agenticnotetaking/arscontexta

## See Also

- [[digital-literacy]]
- [[moc-getting-started]]
- [[beginners-roadmap]]
