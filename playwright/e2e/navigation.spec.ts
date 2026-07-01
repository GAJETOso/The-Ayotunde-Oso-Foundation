import { test, expect } from '@playwright/test';

const PUBLIC_PAGES = [
  { path: '/', title: 'Ayotunde Oso Foundation' },
  { path: '/about', title: 'About' },
  { path: '/programs', title: 'Programs' },
  { path: '/impact', title: 'Impact' },
  { path: '/donate', title: 'Donate' },
  { path: '/volunteer', title: 'Volunteer' },
  { path: '/events', title: 'Events' },
  { path: '/news', title: 'News' },
  { path: '/contact', title: 'Contact' },
  { path: '/partners', title: 'Partners' },
  { path: '/projects', title: 'Projects' },
  { path: '/campaigns', title: 'Campaigns' },
  { path: '/testimonials', title: 'Testimonials' },
  { path: '/faq', title: 'FAQ' },
  { path: '/careers', title: 'Careers' },
  { path: '/resources', title: 'Resources' },
  { path: '/privacy', title: 'Privacy' },
  { path: '/terms', title: 'Terms' },
];

test.describe('Public page availability', () => {
  for (const { path, title } of PUBLIC_PAGES) {
    test(`${path} loads successfully`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(new RegExp(title, 'i'));
      // No React error boundary should be triggered
      await expect(page.locator('text=Application error')).not.toBeVisible();
    });
  }
});

test.describe('404 page', () => {
  test('displays custom 404 page for unknown routes', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist-xyz');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText(/not found|404/i);
  });
});
