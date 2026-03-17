import { test, expect } from '@playwright/test';

test('Guides page loads with AI Guides category', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'networkidle' });
  
  // Log what we see
  const title = await page.locator('h1').first().textContent();
  console.log('Page h1:', title);
  console.log('URL:', page.url());

  await expect(page.locator('h1').first()).toContainText('Tech Guides');

  // Check AI Guides tab exists
  const aiTab = page.getByRole('tab', { name: /AI Guides/i });
  await expect(aiTab).toBeVisible();

  // Click AI Guides tab
  await aiTab.click();

  // Check guide cards appear
  const cards = page.locator('a[href^="/guides/"]');
  await expect(cards.first()).toBeVisible();
  const cardCount = await cards.count();
  console.log(`${cardCount} AI guide cards`);
  expect(cardCount).toBeGreaterThan(0);

  // Navigate to first AI guide
  const href = await cards.first().getAttribute('href');
  console.log('First guide:', href);
  await cards.first().click();
  
  await expect(page.locator('h1')).toBeVisible();
  const guideTitle = await page.locator('h1').textContent();
  console.log('Guide detail title:', guideTitle);
});
