import { test, expect } from '@playwright/test';

test.describe("Our Support Our Mission Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/support-our-mission/")
  })
test("Validate Support Our Mission Section", async ({page}) => {
    await expect(page).toHaveTitle("Support Our Mission – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/support-our-mission/")
    await expect(page.getByRole('heading', { name: 'Support Our Mission', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Help us transform lives.' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Your donation allows us to build the foundation for more jobs, better training, and a brighter future for people on the autism spectrum. Your contribution helps us develop our programs and expand our offerings. Our goal is to create employment opportunities across the country.');
    await page.getByRole('link', { name: 'Donate now', exact: true }).isDisabled()
})
test("Other Ways to Donate section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Other Ways to Donate' })).toBeVisible();
    await page.locator('.elementor-widget-wrap > .elementor-section > .elementor-container > div > .elementor-widget-wrap').first().screenshot({path: 'photos/donatetext.png'})
    await expect(page.locator('#content')).toContainText('Text to Donate:JOBS4AUTISMto 44-321');
    await page.locator('div:nth-child(2) > div > .elementor-section > .elementor-container > div > .elementor-widget-wrap').first().screenshot({path: 'photos/donatemail.png'})
    await expect(page.locator('#content')).toContainText('Mail your donation to Aspiritech, NFP 939 Chicago AvenueEvanston, IL 60202');
    await page.locator('section:nth-child(6) > div > div > div > .elementor-section > .elementor-container > div > .elementor-widget-wrap').first().screenshot({path: 'photos/donatetshirt.png'})
    await expect(page.locator('#content')).toContainText('Buy Aspiritech Merchandise');
    await page.getByRole('link', { name: 'Shop Now' }).click();
    await expect(page).toHaveTitle("Aspiritech Gifts & Apparel | Support Our Mission | Bonfire")
    await expect(page).toHaveURL("https://www.bonfire.com/store/aspiritech-merch/")
    await expect(page.getByRole('heading', { name: 'Aspiritech Gifts & Apparel' }).locator('span')).toBeVisible();
    await page.goBack()
})
test("Create a Lasting Legacy section", async ({page}) => {
  await expect(page.getByText('Create a Lasting Legacy')).toBeVisible();
  await expect(page.locator('#content')).toContainText('One sentence in your will can make a lifetime of difference to adults on the autism spectrum! To leave a gift in your will to Aspiritech, you can name Aspiritech as a “charitable successor” for your Donor Advised Fund. Or simply share this sentence with your attorney or financial planner: “I bequeath $[amount] or [amount]% of my estate to Aspiritech, NFP, 939 Chicago Ave, Evanston, IL 60202.”');
  await page.getByRole('link', { name: 'Donor Confidentiality and' }).click();
  await expect(page).toHaveTitle("Privacy Policy – Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/privacy-policy/")
  await expect(page.getByRole('heading', { name: 'Privacy Policy', exact: true })).toBeVisible();
})
test("Support Aspiritech! section", async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Support Aspiritech!' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Mission: Aspiritech empowers individuals on the autism spectrum to fulfill their potential through meaningful employment combined with social opportunity. Founded in 2008, Aspiritech was the first company of its kind in North America, and employs more than 115 individuals with autism. Aspiritech is a 501(c)(3) non-profit corporation. (FEIN # 26-2556543) Aspiritech has partnered with Give Lively to securely process your online donation. Online transactions will appear on your credit card statement as “Aspiritech”. This transaction is subject to Give Lively’s Terms and Privacy. Need help? Email support@givelively.org.');
})
})