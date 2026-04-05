/**
 * Gemini AI service for the Chat with Docs feature.
 * Uses Gemini 2.5 Flash with URL context to answer questions
 * about tech-support documentation in plain, senior-friendly language.
 */

import { GoogleGenAI, type GenerateContentResponse, type Tool, HarmCategory, HarmBlockThreshold, type Content } from "@google/genai";
import type { UrlContextMetadataItem } from "@/types/chatWithDocs";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

let ai: GoogleGenAI;

const MODEL_NAME = "gemini-2.5-flash";

const getAiInstance = (): GoogleGenAI => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env.local file.");
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
  return ai;
};

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

/** System instruction that keeps responses senior-friendly */
const SYSTEM_INSTRUCTION = `You are a friendly, patient tech-support assistant on TekSure.com — a website that helps everyday people (especially seniors and non-technical users) understand and manage their technology.

Rules for every response:
- Use plain, jargon-free language. If you must use a technical term, explain it in parentheses right away.
- Keep sentences short and paragraphs brief.
- Use numbered steps when explaining how to do something.
- Be encouraging — never condescending.
- If you are unsure, say so honestly. Never make up information.
- Format your responses using Markdown for readability: bold key terms, use headings for sections, and code blocks for anything the user might need to type.`;

export interface GeminiResponse {
  text: string;
  urlContextMetadata?: UrlContextMetadataItem[];
}

/**
 * Send a user question along with documentation URLs for context.
 */
export const generateContentWithUrlContext = async (
  prompt: string,
  urls: string[]
): Promise<GeminiResponse> => {
  const currentAi = getAiInstance();

  let fullPrompt = prompt;
  if (urls.length > 0) {
    const urlList = urls.join("\n");
    fullPrompt = `${prompt}\n\nRelevant documentation URLs for context:\n${urlList}`;
  }

  const tools: Tool[] = [{ urlContext: {} }];
  const contents: Content[] = [{ role: "user", parts: [{ text: fullPrompt }] }];

  try {
    const response: GenerateContentResponse = await currentAi.models.generateContent({
      model: MODEL_NAME,
      contents,
      config: {
        tools,
        safetySettings,
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const text = response.text;
    const candidate = response.candidates?.[0];
    let extractedUrlContextMetadata: UrlContextMetadataItem[] | undefined;

    if (candidate?.urlContextMetadata?.urlMetadata) {
      extractedUrlContextMetadata = candidate.urlContextMetadata.urlMetadata as UrlContextMetadataItem[];
    }

    return { text, urlContextMetadata: extractedUrlContextMetadata };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("API key not valid")) {
        throw new Error("The Gemini API key is invalid. Please check your VITE_GEMINI_API_KEY setting.");
      }
      if (error.message.includes("quota")) {
        throw new Error("The AI service is temporarily busy. Please try again in a few minutes.");
      }
      throw new Error(`Could not get a response: ${error.message}`);
    }
    throw new Error("Something went wrong. Please try again.");
  }
};

/**
 * Get suggested starter questions based on the currently loaded documentation URLs.
 */
export const getInitialSuggestions = async (urls: string[]): Promise<GeminiResponse> => {
  if (urls.length === 0) {
    return { text: JSON.stringify({ suggestions: ["Add some documentation links to get started."] }) };
  }

  const currentAi = getAiInstance();
  const urlList = urls.join("\n");

  const promptText = `Based on the content of the following documentation URLs, provide 3-4 short, friendly questions a non-technical person might ask to learn from these pages. The questions should be in plain English — no jargon. Return ONLY a JSON object with a key "suggestions" containing an array of question strings. Example: {"suggestions": ["How do I update my phone?", "What is two-factor authentication?"]}

Relevant URLs:
${urlList}`;

  const contents: Content[] = [{ role: "user", parts: [{ text: promptText }] }];

  try {
    const response: GenerateContentResponse = await currentAi.models.generateContent({
      model: MODEL_NAME,
      contents,
      config: {
        safetySettings,
        responseMimeType: "application/json",
      },
    });

    return { text: response.text };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Could not load suggestions: ${error.message}`);
    }
    throw new Error("Could not load suggestions. Please try again.");
  }
};

/** Quick check whether the API key is configured */
export const isGeminiConfigured = (): boolean => Boolean(API_KEY);
