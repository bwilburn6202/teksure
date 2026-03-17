import { test, expect } from '@playwright/test';

test('Guides page loads with AI Guides category', async ({ page }) => {
  await page.goto('/guides');
  await expect(page.locator('h1')).toContainText('Tech Guides');

  const aiTab = page.getByRole('tab', { name: /AI Guides/i });
  await expect(aiTab).toBeVisible();

  await aiTab.click();

  const cards = page.locator('a[href^="/guides/"]');
  const cardCount = await cards.count();
  console.log(`${cardCount} AI guide cards found`);
  expect(cardCount).toBeGreaterThan(0);

  // Click into first AI guide detail
  const firstLink = await cards.first().getAttribute('href');
  console.log('Navigating to:', firstLink);
  await cards.first().click();

  await expect(page.locator('h1')).toBeVisible();
  const title = await page.locator('h1').textContent();
  console.log('Guide detail title:', title);
});
