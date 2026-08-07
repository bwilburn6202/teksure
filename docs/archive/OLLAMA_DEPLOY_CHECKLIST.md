# TekSure Ollama Deployment Checklist

Complete this checklist to deploy local AI to TekSure.

---

## **Phase 1: Local Setup (15 minutes)**

- [ ] **Install Ollama**
  - macOS: `brew install ollama`
  - Linux: `curl -fsSL https://ollama.ai/install.sh | sh`
  - Windows: Download from https://ollama.ai/download
  
- [ ] **Pull embedding model**
  ```bash
  ollama pull nomic-embed-text
  ```
  
- [ ] **Pull chat model** (choose one)
  ```bash
  # Fast option (8GB RAM laptops)
  ollama pull orca-mini
  
  # Better option (16GB+ desktops)
  ollama pull mistral
  
  # Balanced (recommended)
  ollama pull neural-chat
  ```

- [ ] **Start Ollama server**
  ```bash
  ollama serve
  ```
  
- [ ] **Verify models installed**
  ```bash
  curl http://localhost:11434/api/tags
  ```
  Should see: `nomic-embed-text` and your chosen chat model

---

## **Phase 2: Deploy Edge Function (5 minutes)**

- [ ] **Edge function created**
  File: `supabase/functions/tekbrain-ollama-chat/index.ts` ✅

- [ ] **Deploy to Supabase**
  ```bash
  cd ~/Documents/Claude/Projects/TekSure
  npx supabase functions deploy tekbrain-ollama-chat
  ```

- [ ] **Verify deployment**
  ```bash
  npx supabase functions list --project-ref vrhxitxzqtbphzsbdqih
  ```
  Should show: `tekbrain-ollama-chat`

---

## **Phase 3: Configure Secrets (5 minutes)**

- [ ] **Set OLLAMA_BASE_URL** (for local development)
  ```bash
  npx supabase secrets set OLLAMA_BASE_URL=http://localhost:11434 --project-ref vrhxitxzqtbphzsbdqih
  ```

- [ ] **Set OLLAMA_EMBED_MODEL**
  ```bash
  npx supabase secrets set OLLAMA_EMBED_MODEL=nomic-embed-text --project-ref vrhxitxzqtbphzsbdqih
  ```

- [ ] **Set OLLAMA_CHAT_MODEL** (must match installed model)
  ```bash
  # If you pulled neural-chat:
  npx supabase secrets set OLLAMA_CHAT_MODEL=neural-chat --project-ref vrhxitxzqtbphzsbdqih
  
  # Or if you pulled orca-mini:
  npx supabase secrets set OLLAMA_CHAT_MODEL=orca-mini --project-ref vrhxitxzqtbphzsbdqih
  
  # Or if you pulled mistral:
  npx supabase secrets set OLLAMA_CHAT_MODEL=mistral --project-ref vrhxitxzqtbphzsbdqih
  ```

- [ ] **Verify secrets set**
  ```bash
  npx supabase secrets list --project-ref vrhxitxzqtbphzsbdqih | grep OLLAMA
  ```

---

## **Phase 4: Update Frontend (2 minutes)**

- [ ] **Brain.tsx updated** to use new edge function ✅
  - `src/pages/Brain.tsx` now calls `tekbrain-ollama-chat`
  - Session ID is stored in localStorage

- [ ] **Test locally**
  ```bash
  npm run dev
  ```
  Navigate to http://localhost:5173/brain

---

## **Phase 5: Testing (10 minutes)**

- [ ] **Test embedding**
  ```bash
  curl -X POST http://localhost:11434/api/embed \
    -H "Content-Type: application/json" \
    -d '{
      "model": "nomic-embed-text",
      "input": "How do I reset my iPhone?"
    }'
  ```
  Should return an array of numbers (1024 dims)

- [ ] **Test chat response**
  ```bash
  curl -X POST http://localhost:11434/api/chat \
    -H "Content-Type: application/json" \
    -d '{
      "model": "neural-chat",
      "messages": [{"role": "user", "content": "Hello"}],
      "stream": false
    }'
  ```
  Should return a response from the model

- [ ] **Test Brain page**
  1. Go to http://localhost:5173/brain
  2. Ask a question (e.g., "How do I reset my password?")
  3. Should see Ollama connected status
  4. Wait 5-10 seconds for response
  5. Should cite relevant guides

- [ ] **Check browser console**
  - No CORS errors
  - No "Ollama not running" errors
  - SSE events flowing properly

---

## **Phase 6: Production Deployment** (Optional)

- [ ] **For 24/7 availability on Mac**
  ```bash
  # Create LaunchAgent (see OLLAMA_SETUP.md)
  launchctl load ~/Library/LaunchAgents/com.ollama.server.plist
  ```

- [ ] **For cloud deployment**
  - Set `OLLAMA_BASE_URL` to server IP
  ```bash
  npx supabase secrets set OLLAMA_BASE_URL=http://your.domain.com:11434 --project-ref vrhxitxzqtbphzsbdqih
  ```

- [ ] **Monitor Ollama logs**
  ```bash
  # macOS
  tail -f /tmp/ollama.log
  
  # Linux
  journalctl -u ollama -f
  ```

---

## **Phase 7: Cleanup** (Remove old OpenAI code)

- [ ] **Delete old brain-query edge function** (optional, keeps as fallback)
  ```bash
  npx supabase functions delete brain-query
  ```

- [ ] **Remove OpenAI secrets** (optional)
  ```bash
  npx supabase secrets delete OPENAI_API_KEY --project-ref vrhxitxzqtbphzsbdqih
  ```

- [ ] **Update documentation**
  - [x] Created `OLLAMA_SETUP.md`
  - [ ] Update project README.md to mention Ollama requirement

---

## **Verification Checklist**

- [ ] **Ollama is running** (check with `ollama list`)
- [ ] **Edge function deployed** (check Supabase dashboard)
- [ ] **Secrets configured** (all 3 OLLAMA_* variables set)
- [ ] **Brain page works** (ask a test question)
- [ ] **Responses are accurate** (cite correct guides)
- [ ] **Performance acceptable** (responses in <15 seconds)

---

## **Rollback Plan** (If something breaks)

1. Keep OpenAI edge function as fallback
2. Update Brain.tsx to call `brain-query` instead
3. Redeploy old edge function
4. Check `OLLAMA_BASE_URL` secret — often the issue

---

## **Next Features**

Once Ollama is working:

- [ ] **Build Chat Widget** (floating chat button)
  - Reuses `tekbrain-ollama-chat` edge function
  - Add to every page
  - Users ask without leaving current page

- [ ] **Add Response Caching**
  - Cache Q&A pairs in `teksure_cache` table
  - Same question = instant response
  - Save embedding costs

- [ ] **Analytics Dashboard**
  - Track which guides TekBrain references
  - Find content gaps
  - Improve guide quality

---

## **Support Links**

- [Ollama GitHub](https://github.com/ollama/ollama)
- [Ollama Model Library](https://ollama.ai/library)
- [TekSure Docs](https://github.com/bwilburn6202/teksure)

---

## **Status**

**Created:** 2026-07-25  
**Edge Function:** `tekbrain-ollama-chat` ✅  
**Setup Guide:** `OLLAMA_SETUP.md` ✅  
**Cost:** $0/month 🎉  
**Speed:** 3-10 seconds per response  
**Quality:** Local, private, always available  

---

**Ready to start?** Run Phase 1 now:
```bash
# 1. Install Ollama
brew install ollama

# 2. Pull models
ollama pull nomic-embed-text
ollama pull neural-chat

# 3. Start server
ollama serve
```
