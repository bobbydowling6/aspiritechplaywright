import { test, expect } from '@playwright/test';

test.describe("Quality Assurance Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/services/quality-assurance/")
  })
test("Validate Quality Assurance Section", async ({page}) => {
    await expect(page).toHaveTitle("Software Quality Assurance – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/services/quality-assurance/")
    await expect(page.getByRole('heading', { name: 'Software Quality Assurance', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Website, App, and Software Testing');
    await expect(page.locator('#content')).toContainText('Today’s world moves at the pace of digital. Customer expectations are high. A premium user experience can make or break a brand. Are your digital offerings up to the challenge? Our team offers quality assurance testing for websites, apps, and software. We look at end-to-end user experience and usability, as well as identify errors and defects.');
})
test("Put our team to work for yours form", async({page, request}) => {
    await expect(page.getByRole('heading', { name: 'Put our team to work for yours' })).toBeVisible();
    await page.getByRole('link', { name: 'Book your discovery call now' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await page.goBack()
    // Attempt to submit the form without filling in required fields
    await page.getByRole('button', { name: 'Contact us' }).click();

    await page.getByRole('textbox', { name: 'Name *' }).click()
    await page.getByRole('textbox', { name: 'Name *' }).fill('Robert Dowling');
    await page.getByRole('textbox', { name: 'Email *' }).click();
    await page.getByRole('textbox', { name: 'Email *' }).fill('robert.dowling@aspiritech.org');
    await page.getByRole('textbox', { name: 'Message (optional)' }).click();
    await page.getByRole('textbox', { name: 'Message (optional)' }).fill('This is an automated test');
    // Intercept the API request upon form submission
    await page.route('https://aspiritech.org/services/quality-assurance/', async (route) => {
        const request = route.request();
        console.log('Request made:', await request.postData());
        await route.continue();
    });

    // Click the submit button
    await page.getByRole('button', { name: 'Contact us' }).click();

    // Wait for the success response from the API
    const response = await request.post('https://aspiritech.org/services/quality-assurance/', {
        data: {
            name: 'Robert Dowling',
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
test("Validate What We Offer Section", async({page}) => {
    
await expect(page.getByRole('heading', { name: 'What We Offer' })).toBeVisible();
await expect(page.locator('#content')).toContainText('Regression TestingExploratory TestingUser Acceptance TestingSmoke TestingSanity TestingSystem Testing');
await expect(page.locator('#content')).toContainText('Compatibility TestingDefect Investigation and ValidationTest Case Writing and EditingTest Plan ManagementStaff AugmentationOn-Demand Project Work');
await expect(page.getByRole('heading', { name: 'Onshore SQA Testing' })).toBeVisible();
await page.getByRole('link', { name: 'Onshore SQA Testing' }).click();
await expect(page).toHaveTitle('Onshore Software Quality Assurance Testing – Aspiritech')
await expect(page).toHaveURL('https://aspiritech.org/services/quality-assurance/onshore-software-quality-assurance-testing/')
await expect(page.getByRole('heading', { name: 'Onshore Software Quality' })).toBeVisible();
await page.goBack()
await expect(page.locator('#content')).toContainText('Customer expectations are high. A premium user experience can make or break a brand. Are your digital offerings up to the challenge?');
await page.getByRole('link', { name: 'Learn How Aspiritech Unlocks' }).click();
await expect(page).toHaveTitle('Onshore Software Quality Assurance Testing – Aspiritech')
await expect(page).toHaveURL('https://aspiritech.org/services/quality-assurance/onshore-software-quality-assurance-testing/')
await expect(page.getByRole('heading', { name: 'Onshore Software Quality' })).toBeVisible();
})
test("Why the Aspiritech Team Is the Right Choice Section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'Why the Aspiritech Team Is' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '+ years in software testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ISTQB-certified testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Third-party assessed & proven' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'A full-time team of 100+' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Industry-specific expertise' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Client Testimonials' })).toBeVisible();
  await expect(page.getByText('Michael Berger, Basecamp"').nth(1)).toBeVisible();
  await page.getByRole('button', { name: 'Next slide' }).click();
  await expect(page.getByText('Bruce Horner – VP, Digital UX Engineering, Transaction Banking, Goldman Sachs"').nth(2)).toBeVisible();
})
test("See for yourself section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('You built it. Hire us to test it. Check out our case studies from current and past clients, to see why they love working with Aspiritech, and how our team helps elevate their user experience.');
  await page.getByRole('link', { name: 'View all case studies' }).click();
  await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/case-studies/")
  await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
  await page.goBack()
  await page.getByRole('link', { name: 'Bose Case Study' }).click();
      await expect(page).toHaveTitle("Bose Case Study – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/aspiritech-press/bose-case-study/")
      await expect(page.getByRole('heading', { name: 'Bose Hardware QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Bose Case Study" [level=3]:
        - link "Bose Case Study":
          - /url: https://aspiritech.org/aspiritech-press/bose-case-study/
      - paragraph: Bose relies on Aspiritech to test across peripherals and platforms to assure a seamless roll out of software upgrades…
      `);
      await page.getByRole('link', { name: 'Hippo Manager Case Study' }).click();
      await expect(page).toHaveTitle("Hippo Manager Case Study – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/aspiritech-press/hippo-manager-case-study/")
      await expect(page.getByRole('heading', { name: 'Hippo Manager Case Study' })).toBeVisible();
      await page.goBack()
      
      await expect(page.locator('#content')).toMatchAriaSnapshot(`
        - heading "Hippo Manager Case Study" [level=3]:
          - link "Hippo Manager Case Study":
            - /url: https://aspiritech.org/aspiritech-press/hippo-manager-case-study/
        - paragraph: Hippo Manager’s partnership with Aspiritech delivers rapid software evolution and error-free releases, boosting veterinary customer satisfaction and retention.
        `);
      await page.getByRole('link', { name: 'HSRI Case Study' }).click();
      await expect(page).toHaveTitle("HSRI Case Study – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/aspiritech-press/hsri-case-study/")
      await expect(page.getByRole('heading', { name: 'HSRI Accessibility Case Study' })).toBeVisible();
      await page.goBack()
      await expect(page.locator('#content')).toMatchAriaSnapshot(`
        - heading "HSRI Case Study" [level=3]:
          - link "HSRI Case Study":
            - /url: https://aspiritech.org/aspiritech-press/hsri-case-study/
        - paragraph: Aspiritech supplemented HSRI’s busy team with dedicated accessibility analysts to ensure their digital platforms are usable by everyone, and we provided the flexibility needed to meet the demands of every task.
        `);
        await page.getByRole('link', { name: 'We can’t wait to hear from' }).click();
      await expect(page).toHaveTitle("Contact Us – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
      await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
})