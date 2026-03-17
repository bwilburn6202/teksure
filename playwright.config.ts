import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://id-preview--1b4a70fb-3796-4915-a8a6-8f75bb0b2587.lovable.app',
  },
});
