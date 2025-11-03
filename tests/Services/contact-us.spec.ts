import { test, expect } from '@playwright/test';

test.describe("Contact Us Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/contact-us/")
  })
test("Validate Contact Us Page", async ({page}) => {
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
test("Validate the Contact Us options", async ({page}) => {
await expect(page.getByText('Request Our Services')).toBeVisible();
await page.getByRole('link', { name: 'Get in touch', exact: true }).click();
await page.getByRole('heading', {name: 'Work With Us'}).isVisible()
await page.getByRole('button', { name: 'Close' }).click();
await expect(page.getByText('Support Aspiritech')).toBeVisible();
await page.getByRole('link', { name: 'Donate now', exact: true }).click();
await expect(page).toHaveTitle("Support Our Mission – Aspiritech")
await expect(page).toHaveURL("https://aspiritech.org/support-our-mission/#donate-now")
await page.goBack()
await expect(page.getByText('Media Inquiries')).toBeVisible();
await page.getByRole('link', { name: 'Send an inquiry' }).click();
await page.getByRole('heading', { name: 'Media Inquiries' }).isVisible()
await page.getByRole('button', { name: 'Close' }).click();
await expect(page.getByText('Partnership Inquiries')).toBeVisible();
await page.getByRole('link', { name: 'Let\'s partner' }).click();
await page.getByRole('heading', { name: 'Partnership Inquiries'}).isVisible();
await page.getByRole('button', { name: 'Close' }).click();
})
test("Validate Looking for Work section", async ({page}) => {
  await expect(page.getByText('Looking for Work?')).toBeVisible();
  await page.getByRole('link', { name: 'Visit Careers Page' }).click();
  await expect(page).toHaveTitle("Careers – Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/careers/")
  await expect(page.getByRole('heading', { name: 'Careers', exact: true })).toBeVisible();
})
test("Validate Capabilities Statement", async ({page}) => {
  await expect(page.getByText('Download Capabilities')).toBeVisible();
  await page.getByRole('link', { name: 'Download now!' }).click();
  const response = await page.goto("https://aspiritech.org/wp-content/uploads/2024/02/Aspiritech-Capabilities-Overview-1.pdf")
  if (response?.ok()) {
    console.log('PDF is accessible')
  } else {
    console.log('Failed to access the PDF')
  }
})
test("Contact Info Section", async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Our office is located in' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Chicago Ave, Evanston, IL 60202 USA' })).toBeVisible();
  await page.getByRole('link', { name: 'Chicago Ave, Evanston, IL 60202 USA' }).click();
  await page.goBack()
  await expect(page.getByRole('link', { name: '-945-TEST (8378)' })).toBeVisible();
  await page.locator('.elementor-icon-wrapper > .elementor-icon').first().click();
  await expect(page).toHaveTitle('Aspiritech | LinkedIn', { timeout: 10_000 })
  await expect(page).toHaveURL('https://www.linkedin.com/company/aspiritech/')
  await page.goto('https://aspiritech.org/contact-us/');
  await page.locator('div:nth-child(4) > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon').first().click();
  await expect(page).toHaveTitle('Aspiritech | Evanston IL | Facebook', { timeout: 10_000 })
  await expect(page).toHaveURL('https://www.facebook.com/aspiritech/')
  await page.goto('https://aspiritech.org/contact-us/');
  await page.locator('div:nth-child(5) > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon').first().click();
  await expect(page).toHaveTitle('Log in to X / X', { timeout: 10_000 })
  await expect(page).toHaveURL('https://x.com/i/flow/login?redirect_after_login=%2FAspiritech')
  await page.goto('https://aspiritech.org/contact-us/');
  await page.locator('div:nth-child(6) > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon').first().click();
  await expect(page).toHaveTitle('Aspiritech (@aspiritech) • Instagram photos and videos', { timeout: 10_000 })
  await expect(page).toHaveURL('https://www.instagram.com/aspiritech/?hl=en')
  await page.goto('https://aspiritech.org/contact-us/');
  await expect(page.locator('section:nth-child(5) > div > div > div > .elementor-section > .elementor-container > div:nth-child(2) > .elementor-widget-wrap')).toBeVisible();
})
})