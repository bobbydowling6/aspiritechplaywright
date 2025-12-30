import { test, expect } from '@playwright/test';

test.describe("Auidio & Hardware Testing Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/services/audio-testing/")
  })
test("Validate Audio & Hardware Testing Section", async ({page}) => {
    await expect(page).toHaveTitle("Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech")
    await expect(page).toHaveURL("/services/audio-testing/")
    await expect(page.getByRole('heading', { name: 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('QA services for a full range of audio tech');
    await expect(page.getByText('The Aspiritech team is serious about sound. We’re passionate about quality.And')).toBeVisible();
    await page.getByRole('link', { name: 'case study of one of our' }).click();
    await expect(page).toHaveTitle("Bose Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/bose-case-study/")
    await expect(page.getByRole('heading', { name: 'Bose Hardware QA & Product' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('div:nth-child(7) > .elementor-widget-container')).toBeVisible();
    await page.getByRole('link', { name: 'If so, contact our team and' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
test("Put our team to work for yours form", async({page, request}) => {
    await expect(page.getByRole('heading', { name: 'Put our team to work for yours' })).toBeVisible();
    await page.getByRole('link', { name: 'Book your discovery call now' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await page.goBack()
    // Attempt to submit the form without filling in required fields
    await page.getByRole('button', { name: 'Contact us' }).click();

    await page.getByRole('textbox', { name: 'Name *' }).click()
    await page.getByRole('textbox', { name: 'Name *' }).fill('Robert Dowling');
    await page.getByRole('textbox', { name: 'Organization *' }).click();
    await page.getByRole('textbox', { name: 'Organization *' }).fill('Aspiritech');
    await page.getByRole('textbox', { name: 'Email *' }).click();
    await page.getByRole('textbox', { name: 'Email *' }).fill('robert.dowling@aspiritech.org');
    await page.getByRole('textbox', { name: 'Tell us about your project *' }).click();
    await page.getByRole('textbox', { name: 'Tell us about your project *' }).fill('This is a automated test');
    // Intercept the API request upon form submission
    await page.route('**/services/audio-testing/', async (route) => {
        const request = route.request();
        console.log('Request made:', await request.postData());
        await route.continue();
    });

    // Click the submit button
    await page.getByRole('button', { name: 'Contact us' }).click();

    // Wait for the success response from the API
    const response = await request.post('/services/audio-testing/', {
        data: {
            name: 'Robert Dowling',
            organization: 'Aspiritech',
            email: 'robert.dowling@aspiritech.org',
            message: 'This is an automated test',
        },
    });

    // Validate response status
    expect(response.status()).toBe(200);

    await page.getByRole('button', { name: 'Contact us' }).click()
    await expect(page.getByText('Your submission was')).toBeTruthy()
    await expect(page.getByText('Your submission was')).toBeVisible()
})
test("Validate Check Out Our Audio Services Section", async({page}) => {
    await expect(page.getByRole('heading', { name: 'Check Out Our Audio Services' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Test Design and Test PlansDecomp and Test Script DevelopmentRegression and Functional Testing for Quality AssuranceBlack Box, Gray Box, and White Box TestingTest Case Creation and Execution');
    await expect(page.locator('#content')).toContainText('Test Case MaintenanceLifecycle ManagementEmbedded with Client Development TeamsSubjective TestingExploratory TestingAudio for Video Testing');
    await expect(page.locator('#content')).toContainText('Earbuds and Banded HeadphonesStand-Alone SpeakersDevice ConnectionBluetooth TestingSoftware Connectivity across a Wide Range of Applications');
    await expect(page.getByRole('heading', { name: 'How We Do It' })).toBeVisible();
    await expect(page.getByRole('list').filter({ hasText: 'We pair regression and' })).toBeVisible();
})
test("Why the Aspiritech Team Is the Right Choice Section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'Why the Aspiritech Team Is' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '+ years in software testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ISTQB-certified testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Third-party assessed & proven' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'A full-time team of 100+' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Industry-specific expertise' })).toBeVisible();
  await expect(page.getByText('Client Testimonials "')).toBeVisible();
})
test("See for yourself section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('You built it. Hire us to test it. Check out our case studies from current and past clients, to see why they love working with Aspiritech, and how our team helps elevate their user experience.');
  await page.getByRole('link', { name: 'View all case studies' }).click();
  await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("/case-studies/")
  await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
  await page.goBack()
  await page.getByRole('link', { name: 'Bose Case Study' }).click();
      await expect(page).toHaveTitle("Bose Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/bose-case-study/")
      await expect(page.getByRole('heading', { name: 'Bose Hardware QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Bose Case Study" [level=3]:
        - link "Bose Case Study":
          - /url: /aspiritech-press/bose-case-study/
      - paragraph: Bose relies on Aspiritech to test across peripherals and platforms to assure a seamless roll out of software upgrades…
      `);
      await page.getByRole('link', { name: 'IDEXX Case Study' }).click();
      await expect(page).toHaveTitle("IDEXX Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/idexx-case-study/")
      await expect(page.getByRole('heading', { name: 'IDEXX QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "IDEXX Case Study" [level=3]:
        - link "IDEXX Case Study":
          - /url: /aspiritech-press/idexx-case-study/
      - paragraph: Aspiritech ensures data integrity and the seamless, accurate use of the veterinary management software through consistent software and hardware testing.
      `);
      await page.getByRole('link', { name: 'Zebra Case Study' }).click();
      await expect(page).toHaveTitle("Zebra Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/zebra-case-study/")
      await expect(page.getByRole('heading', { name: 'Zebra Hardware QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Zebra Case Study" [level=3]:
        - link "Zebra Case Study":
          - /url: /aspiritech-press/zebra-case-study/
      - paragraph: The world’s leader in barcode printers and scanners was in need of constant QA testing to ensure uninterrupted and quality service for its printer clients. Aspiritech delivered.
      `);
      await page.getByRole('link', { name: 'We can’t wait to hear from' }).click();
      await expect(page).toHaveTitle("Contact Us – Aspiritech")
      await expect(page).toHaveURL("/contact-us/")
      await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
})