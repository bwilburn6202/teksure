# TekSure Local AI Setup (Ollama)

Complete guide to run TekSure with **free, local AI** using Ollama.

---

## **Quick Start (5 minutes)**

### **1. Install Ollama**

**macOS:**
```bash
# Download from https://ollama.ai or install via Homebrew
brew install ollama
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from https://ollama.ai/download

### **2. Pull Required Models**

Open a terminal and run:

```bash
# Embedding model (lightweight, fast)
ollama pull nomic-embed-text

# Chat model (pick ONE based on your machine)
# Fast option (3.3B - recommended for laptops)
ollama pull orca-mini

# Better quality (7.3B - needs 8GB+ RAM)
ollama pull mistral

# Balanced (4.1B)
ollama pull neural-chat
```

**Size Guide:**
- `nomic-embed-text`: 137MB
- `neural-chat`: 4.1GB
- `orca-mini`: 3.3GB
- `mistral`: 7.3GB
- Total for full setup: ~11-12GB

### **3. Start Ollama Server**

```bash
# Start Ollama (runs in background)
ollama serve

# Check it's running:
curl http://localhost:11434/api/tags
```

You should see output like:
```json
{
  "models": [
    {"name": "nomic-embed-text:latest", ...},
    {"name": "neural-chat:latest", ...}
  ]
}
```

### **4. Configure Supabase**

Set environment variables for your Supabase project:

```bash
cd ~/Documents/Claude/Projects/TekSure

# Deploy the edge function
npx supabase functions deploy tekbrain-ollama-chat

# Set Ollama configuration
npx supabase secrets set OLLAMA_BASE_URL=http://localhost:11434 --project-ref vrhxitxzqtbphzsbdqih
npx supabase secrets set OLLAMA_EMBED_MODEL=nomic-embed-text --project-ref vrhxitxzqtbphzsbdqih
npx supabase secrets set OLLAMA_CHAT_MODEL=neural-chat --project-ref vrhxitxzqtbphzsbdqih
```

**If deploying to production Supabase** (not local):
```bash
# Get your Supabase project ref from:
# https://app.supabase.com/project/[PROJECT-REF]/settings/api

npx supabase secrets set OLLAMA_BASE_URL=http://[YOUR_MACHINE_IP]:11434 --project-ref vrhxitxzqtbphzsbdqih
```

### **5. Test It**

```bash
# Start dev server
npm run dev

# Go to http://localhost:5173/brain
# Type a question and see Ollama respond
```

---

## **Model Recommendations**

### **For Laptops (8GB RAM) 🏃 Fast**
```bash
ollama pull nomic-embed-text      # Embeddings
ollama pull orca-mini              # Chat (3.3GB)
```
- **Speed:** 3-5 seconds per response
- **Quality:** Good for non-technical users
- **Memory:** ~4GB used

**Set in Supabase:**
```bash
npx supabase secrets set OLLAMA_CHAT_MODEL=orca-mini --project-ref vrhxitxzqtbphzsbdqih
```

### **For Desktops (16GB+ RAM) ⚡ Better**
```bash
ollama pull nomic-embed-text      # Embeddings
ollama pull mistral                # Chat (7.3GB)
```
- **Speed:** 5-8 seconds per response
- **Quality:** Better reasoning, more accurate
- **Memory:** ~9GB used

**Set in Supabase:**
```bash
npx supabase secrets set OLLAMA_CHAT_MODEL=mistral --project-ref vrhxitxzqtbphzsbdqih
```

### **Balanced Option 💪 Recommended**
```bash
ollama pull nomic-embed-text      # Embeddings
ollama pull neural-chat            # Chat (4.1GB)
```
- **Speed:** 3-4 seconds per response
- **Quality:** Good reasoning, friendly tone
- **Memory:** ~5GB used

**Set in Supabase:**
```bash
npx supabase secrets set OLLAMA_CHAT_MODEL=neural-chat --project-ref vrhxitxzqtbphzsbdqih
```

---

## **Running Locally (Development)**

### **Option A: Local Supabase + Local Ollama** (Best for dev)

```bash
# Terminal 1: Start Supabase
cd ~/Documents/Claude/Projects/TekSure
npx supabase start

# Terminal 2: Start Ollama
ollama serve

# Terminal 3: Start React dev server
npm run dev
```

Create `.env.local`:
```env
VITE_SUPABASE_URL=http://127.0.0.1:54321
VITE_SUPABASE_ANON_KEY=[your-local-anon-key]
OLLAMA_BASE_URL=http://localhost:11434
```

### **Option B: Cloud Supabase + Local Ollama** (Easier)

```bash
# Terminal 1: Start Ollama
ollama serve

# Terminal 2: Start React dev server
npm run dev
```

No Supabase setup needed — uses your existing cloud project.

---

## **Production Deployment**

### **On Your Mac (Always Running)**

Create a LaunchAgent to auto-start Ollama:

```bash
# Create plist file
cat > ~/Library/LaunchAgents/com.ollama.server.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ollama.server</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/ollama</string>
        <string>serve</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/ollama.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/ollama-error.log</string>
</dict>
</plist>
EOF

# Enable auto-start
launchctl load ~/Library/LaunchAgents/com.ollama.server.plist

# Verify it's running
launchctl list | grep ollama
```

### **On a Linux Server (Recommended)**

```bash
# SSH into server
ssh user@your-server.com

# Install & pull models
ollama pull nomic-embed-text
ollama pull neural-chat

# Create systemd service
sudo cat > /etc/systemd/system/ollama.service << 'EOF'
[Unit]
Description=Ollama
After=network-online.target

[Service]
Type=notify
User=ollama
Group=ollama
ExecStart=/usr/bin/ollama serve
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
EOF

# Enable auto-start
sudo systemctl daemon-reload
sudo systemctl enable ollama
sudo systemctl start ollama

# Check status
systemctl status ollama
```

### **Update Supabase Secrets for Remote Ollama**

```bash
# Find your server's IP
# Example: 192.168.1.100 or your.domain.com

npx supabase secrets set OLLAMA_BASE_URL=http://your.domain.com:11434 --project-ref vrhxitxzqtbphzsbdqih
```

---

## **Troubleshooting**

### **"Connection refused" when chatting**

**Problem:** Ollama isn't running or can't be reached.

**Solution:**
```bash
# Check if Ollama is running
curl http://localhost:11434/api/tags

# If it fails, start Ollama
ollama serve

# Check for correct environment variables
npx supabase secrets list --project-ref vrhxitxzqtbphzsbdqih | grep OLLAMA
```

### **Very slow responses (>20 seconds)**

**Problem:** Wrong model size for your machine.

**Solution:**
- **8GB RAM?** Use `orca-mini` instead of `mistral`
- **CPU-only?** Use smaller model or upgrade to GPU
- **First request slow?** Normal — model is loading

### **"Model not found" error**

**Problem:** You didn't pull the model.

**Solution:**
```bash
# Check what's installed
ollama list

# Pull the missing model
ollama pull neural-chat
```

### **High CPU usage**

**Problem:** Ollama is working hard.

**Solution:**
- This is normal during responses
- Use a smaller model if you want lower CPU
- Reduce `MATCH_COUNT` in edge function (currently 5)

---

## **Performance Tips**

### **Speed up embeddings:**
```bash
# Use faster embedding model
npx supabase secrets set OLLAMA_EMBED_MODEL=bge-small-en-v1.5 --project-ref vrhxitxzqtbphzsbdqih
ollama pull bge-small-en-v1.5
```

### **Speed up responses:**
```bash
# Use smaller chat model
npx supabase secrets set OLLAMA_CHAT_MODEL=orca-mini --project-ref vrhxitxzqtbphzsbdqih
```

### **Reduce context matching:**
Edit `tekbrain-ollama-chat/index.ts`:
```typescript
const MATCH_COUNT = 3;  // Was 5 — fewer guides = faster
```

---

## **Costs**

| Component | Cost |
|-----------|------|
| Ollama | **$0** (free, open-source) |
| Models | **$0** (free to download) |
| Electricity | ~$1-2/month (if running 24/7) |
| Supabase (storage only) | ~$0-5/month |
| **Total** | **~$1-7/month** |

Compare to: OpenAI TekBrain = **$30-50/month**

**You save: $300+ per year** 🎉

---

## **Next Steps**

1. ✅ Set up Ollama locally
2. ✅ Deploy `tekbrain-ollama-chat` edge function
3. ⬜ Test on `/brain` page
4. ⬜ Build chat widget (use same edge function)
5. ⬜ Monitor response times and adjust models as needed

---

## **Support**

- **Ollama docs:** https://github.com/ollama/ollama
- **Model library:** https://ollama.ai/library
- **Troubleshooting:** https://github.com/ollama/ollama/issues

**Questions?** Test the setup with:
```bash
curl -X POST http://localhost:11434/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "neural-chat",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": false
  }'
```
