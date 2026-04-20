/**
 * Frontend service for Chat with Docs.
 * Calls the `doc-chat` Supabase Edge Function which proxies to Gemini's
 * free tier — no API key needed on the client side.
 */

import { supabase } from "@/integrations/supabase/client";
import type { UrlContextMetadataItem } from "@/types/chatWithDocs";

export interface GeminiResponse {
  text: string;
  urlContextMetadata?: UrlContextMetadataItem[];
}

/**
 * Send a user question plus documentation URLs to the edge function.
 */
export const generateContentWithUrlContext = async (
  prompt: string,
  urls: string[]
): Promise<GeminiResponse> => {
  const { data, error } = await supabase.functions.invoke("doc-chat", {
    body: { prompt, urls, mode: "chat" },
  });

  if (error) {
    console.error("doc-chat error:", error);
    throw new Error("Could not reach the AI service. Please try again in a moment.");
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return {
    text: data?.text ?? "I could not find an answer — try rephrasing your question.",
    urlContextMetadata: data?.urlContextMetadata,
  };
};

/**
 * Get AI-generated starter suggestions for a set of documentation URLs.
 */
export const getInitialSuggestions = async (urls: string[]): Promise<GeminiResponse> => {
  if (urls.length === 0) {
    return { text: JSON.stringify({ suggestions: ["Add some documentation links to get started."] }) };
  }

  const { data, error } = await supabase.functions.invoke("doc-chat", {
    body: { prompt: "", urls, mode: "suggestions" },
  });

  if (error) {
    throw new Error("Could not load suggestions.");
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return { text: data?.text ?? '{"suggestions":[]}' };
};

/**
 * The edge function handles the API key server-side, so
 * this always returns true — the function itself will
 * return an error if the secret is missing.
 */
export const isGeminiConfigured = (): boolean => true;
