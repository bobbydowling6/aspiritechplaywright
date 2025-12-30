import { test, expect } from '@playwright/test';

test.describe("Accessibility & UX Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/services/accessibility/")
  })
test("Validate Accessibility & UX Section", async ({page}) => {
    await expect(page).toHaveTitle("Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech")
    await expect(page).toHaveURL("/services/accessibility/")
    await expect(page.getByRole('heading', { name: 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech is dedicated to making websites, apps, and software more usable for absolutely everyone.');
    await expect(page.locator('#content')).toContainText('Most people would likely recognize accessibility in the physical world—for example curb cutouts, automatic doors, ramps, and braille on signs. But people of all abilities need consideration, regardless of where they may be, including in digital spaces.');
    await expect(page.locator('div:nth-child(7)')).toBeVisible();
})
test("Put our team to work for yours form", async({page, request}) => {
    await expect(page.getByRole('heading', { name: 'Put our team to work for yours' })).toBeVisible();
    // Attempt to submit the form without filling in required fields

   await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Name*', exact: true }).click();
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Name*', exact: true }).fill('Robert Dowling');
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Company name*' }).click();
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Company name*' }).fill('Aspiritech');
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Business email*' }).click();
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Business email*' }).fill('robert.dowling@aspiritech.org');
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Tell us about your project*' }).click();
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'Tell us about your project*' }).fill('This is an automated test');
    await expect(page.locator('iframe[title="Form 0"]').contentFrame().locator('[data-test-id="hsForm_6766ec3d-e673-4c7c-b328-4fd59fa7141c"]')).toContainText('You may unsubscribe from our email list at any time. Please review our Privacy Policy for more details.');

    // Intercept the API request upon form submission
    await page.route('**/services/accessibility/', async (route) => {
        const request = route.request();
        console.log('Request made:', await request.postData());
        await route.continue();
    });

    // Click the submit button
    await page.locator('iframe[title="Form 0"]').contentFrame().getByRole('button', { name: 'Submit' }).click();

    // Wait for the success response from the API
    const response = await request.post('/services/accessibility/', {
        data: {
            name: 'Robert Dowling',
            organization: 'Aspiritech',
            email: 'robert.dowling@aspiritech.org',
            message: 'This is an automated test',
        },
    });

    // Validate response status
    expect(response.status()).toBe(200);
    await page.locator('iframe[title="Form 0"]').contentFrame().getByText('Thank you for contacting us!')
    await expect(page.locator('iframe[title="Form 0"]').contentFrame().getByText('Thank you for contacting us!')).toBeTruthy()
    await expect(page.locator('iframe[title="Form 0"]').contentFrame().getByText('Thank you for contacting us!')).toBeVisible()
})
test("Validate What We Do: Accessibility QA Services Section", async({page}) => {
    await expect(page.getByRole('heading', { name: 'What We Do: Accessibility QA' })).toBeVisible();
    await expect(page.getByRole('list').filter({ hasText: 'Our accessibility team can' })).toBeVisible();

})
test("Validate Accessibility Remediation Services Section", async({page}) => {    
    await expect(page.getByRole('heading', { name: 'Accessibility Remediation' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('We don’t just identify accessibility issues. We can help fix them, too!');
    await expect(page.getByRole('list').filter({ hasText: 'We offer premium development' })).toBeVisible();

})
test("Validate The Business Case for Accessibility Section", async({page}) => {
    await expect(page.getByRole('heading', { name: 'The Business Case for' })).toBeVisible();
    await page.getByRole('link', { name: 'The Business Case for' }).click();
    await expect(page).toHaveTitle('The Business Case for Digital Accessibility – Aspiritech')
    await expect(page).toHaveURL('/services/accessibility/business-case-for-accessibility/')
    await expect(page.getByRole('heading', { name: 'The Business Case for Digital' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#content')).toContainText('Having products that everyone can use is more than just being great for business. It also makes the world a more equitable place.');
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn How Accessibility' }).click();
    const page5 = await page5Promise;
    await expect(page5).toHaveTitle('The Business Case for Digital Accessibility – Aspiritech')
    await expect(page5).toHaveURL('/services/accessibility/business-case-for-accessibility/')
    await expect(page5.getByRole('heading', { name: 'The Business Case for Digital' })).toBeVisible();
    
})
test("Why the Aspiritech Team Is the Right Choice Section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'Why the Aspiritech Team Is' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '+ years in software testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ISTQB-certified testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'An accessibility team' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Third-party assessed & proven' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'A full-time team of 100+' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Industry-specific expertise' })).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'From the Experts "Good' })).toBeVisible();
})
test("See for yourself section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('You built it. Hire us to test it. Check out our case studies from current and past clients, to see why they love working with Aspiritech, and how our team helps elevate their user experience.');
  await page.getByRole('link', { name: 'View all case studies' }).click();
  await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("/case-studies/")
  await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
  await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - heading "SourceAmerica Case Study" [level=3]:
      - link "SourceAmerica Case Study":
        - /url: /aspiritech-press/source-america-case-study/
    - paragraph: SourceAmerica created a platform for people with disabilities to be seen, heard, and hired. When looking for a team to test the accessibility of the technologies that drive that platform, Aspiritech was the natural choice.
    `);
      await page.getByRole('link', { name: 'SourceAmerica Case Study' }).click();
      await expect(page).toHaveTitle("SourceAmerica Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/source-america-case-study/")
      await expect(page.getByRole('heading', { name: 'SourceAmerica Case Study' })).toBeVisible();
      await page.goBack()
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Aon Accessibility Audit Case Study" [level=3]:
        - link "Aon Accessibility Audit Case Study":
          - /url: /aspiritech-press/aon-accessibility-audit-case-study/
      - paragraph: When Aon needed to update its YPR site to meet WCAG 2.1’s AA conformance level, Aspiritech’s accessibility audit advised the firm of the right changes to implement.
      `);
      await page.getByRole('link', { name: 'Aon Accessibility Audit Case Study' }).click();
      await expect(page).toHaveTitle("Aon Accessibility Audit Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/aon-accessibility-audit-case-study/")
      await expect(page.getByRole('heading', { name: 'Aon Accessibility Audit Case Study' })).toBeVisible();
      await page.goBack()
        await page.getByRole('link', { name: 'We can’t wait to hear from' }).click();
      await expect(page).toHaveTitle("Contact Us – Aspiritech")
      await expect(page).toHaveURL("/contact-us/")
      await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
})