import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and displays the hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ayotunde Oso Foundation/);
    // Hero headline should be visible
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navigation header is present', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('footer is present', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('Donate CTA link navigates to donate page', async ({ page }) => {
    await page.goto('/');
    const donateLink = page.locator('a[href="/donate"]').first();
    await donateLink.click();
    await expect(page).toHaveURL('/donate');
  });

  test('impact counter section is present', async ({ page }) => {
    await page.goto('/');
    // Scroll into view
    await page.locator('text=Lives Impacted').first().scrollIntoViewIfNeeded();
    await expect(page.locator('text=Lives Impacted').first()).toBeVisible();
  });
});

test.describe('Donate page', () => {
  test('loads donation form', async ({ page }) => {
    await page.goto('/donate');
    await expect(page).toHaveTitle(/Donate/);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('amount selection works', async ({ page }) => {
    await page.goto('/donate');
    // Click a preset amount
    await page.locator('button:has-text("5,000")').first().click();
    // Continue button should be enabled
    const continueBtn = page.locator('button:has-text("Continue")').first();
    await expect(continueBtn).toBeEnabled();
  });

  test('custom amount input works', async ({ page }) => {
    await page.goto('/donate');
    const customInput = page.locator('input[placeholder*="custom"]').first();
    if (await customInput.isVisible()) {
      await customInput.fill('75000');
      await expect(customInput).toHaveValue('75000');
    }
  });
});

test.describe('Contact page', () => {
  test('loads contact form', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.locator('main form')).toBeVisible();
  });

  test('form fields are present', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});

test.describe('Volunteer page', () => {
  test('loads volunteer application', async ({ page }) => {
    await page.goto('/volunteer');
    await expect(page).toHaveTitle(/Volunteer/);
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('homepage has skip to content link', async ({ page }) => {
    await page.goto('/');
    // Tab to the skip link
    await page.keyboard.press('Tab');
    const skipLink = page.locator('a:has-text("Skip to content")');
    await expect(skipLink).toBeFocused();
  });

  test('all pages have unique titles', async ({ page }) => {
    const pages = ['/', '/about', '/donate', '/volunteer', '/impact', '/contact'];
    const titles = new Set<string>();
    for (const path of pages) {
      await page.goto(path);
      const title = await page.title();
      expect(titles.has(title)).toBe(false);
      titles.add(title);
    }
  });
});
