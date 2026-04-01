# TekSure Evolution Log — 2026-03-31

## TekBot Upgrade — 00:00

**Feature ID:** tekbot-upgrade
**Status:** Completed
**Commit:** d92134e
**Files changed:** src/components/TekBot.tsx

TekBot now remembers your conversation across page navigations within a session using sessionStorage, so users no longer lose their chat history when they follow a guide link and come back. When browsing a guides or tools page, TekBot now shows a persistent sidebar panel of up to 4 related guides alongside the chat, making it easy to go deeper on a topic without having to search. Additional enhancements include context-aware query enrichment (the current page's slug/tool name is injected into KB matching for smarter on-page answers), a clear chat button to reset the session, and a message count badge on the floating button so returning users can see their conversation history is waiting.
