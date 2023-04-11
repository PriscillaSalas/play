import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/');
  await page.getByRole('heading', { name: 'The best place to build, test, and discover front-end code.' }).click();
  await page.locator('[data-test-id="login-button"]').click();
  await page.getByRole('heading', { name: 'CodePen Login' }).click();
});
