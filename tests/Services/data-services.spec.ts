import { test, expect } from '@playwright/test';

test.describe("Data Services Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/services/data-services/")
  })
test("Validate Data Services Section", async ({page}) => {
    await expect(page).toHaveTitle("Data Services: Data Annotation, Data Labeling, and Data Validation – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/services/data-services/")
    await expect(page.getByRole('heading', { name: 'Data Services: Data Annotation, Data Labeling, and Data Validation', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Quality in, quality out, and quality at every step of the process.');
    await expect(page.locator('div:nth-child(6)').first()).toBeVisible();
    await page.getByRole('link', { name: 'Contact us', exact: true }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await page.goBack()
})
test("Hire Us For Your Next Data Project form", async({page, request}) => {
    await expect(page.getByRole('heading', { name: 'Hire Us For Your Next Data Project' })).toBeVisible();
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
    await page.getByRole('textbox', { name: 'Project Description *' }).click();
    await page.getByRole('textbox', { name: 'Project Description *' }).fill('This is an automated test');
    // Intercept the API request upon form submission
    await page.route('https://aspiritech.org/services/data-services/', async (route) => {
        const request = route.request();
        console.log('Request made:', await request.postData());
        await route.continue();
    });

    // Click the submit button
    await page.getByRole('button', { name: 'Contact us' }).click();

    // Wait for the success response from the API
    const response = await request.post('https://aspiritech.org/services/data-services/', {
        data: {
            name: 'Robert Dowling',
            email: 'robert.dowling@aspiritech.org',
            projectdescription: 'This is an automated test',
        },
    });

    // Validate response status
    expect(response.status()).toBe(200);

    await page.getByRole('button', { name: 'Contact us' }).click()
    await expect(page.getByText('Your submission was')).toBeTruthy()
    await expect(page.getByText('Your submission was')).toBeVisible()
})
test("Validate different Data Services", async({page}) => {
    await expect(page.getByRole('heading', { name: 'Validation & Annotation' })).toBeVisible();
    await expect(page.getByRole('list').filter({ hasText: 'Conduct error searches and' })).toBeVisible();
    await page.locator('section').filter({ hasText: 'Validation &' }).locator('img').screenshot({path: 'photos/dataservices.png'})

    await expect(page.getByRole('heading', { name: 'Mining & Analysis' })).toBeVisible();
    await expect(page.getByRole('list').filter({ hasText: 'Find patterns in data using' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Migration & Normalization' })).toBeVisible();
    await expect(page.getByRole('list').filter({ hasText: 'Verify large-scale data' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Project Examples' })).toBeVisible();
    await expect(page.getByText('Compare, inspect, and update Salesforce contact recordsCompared revenue totals')).toBeVisible();
})
test("Why the Aspiritech Team Is the Right Choice Section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'Why the Aspiritech Team Is' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '+ years in software testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ISTQB-certified testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Third-party assessed & proven' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'A full-time team of 100+' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Industry-specific expertise' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Client Testimonials' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '"They organize the material' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Senior Data Governance &' })).toBeVisible();
})
test("See for yourself section", async({page}) => {
  await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('You built it. Hire us to test it. Check out our case studies from current and past clients, to see why they love working with Aspiritech, and how our team helps elevate their user experience.');
  await page.getByRole('link', { name: 'View all case studies' }).click();
  await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/case-studies/")
  await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
  await page.goBack()
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "ANC & TSA Case Study" [level=3]:
        - link "ANC & TSA Case Study":
          - /url: https://aspiritech.org/aspiritech-press/anc-tsa-case-study/
      - paragraph: Good machine learning relies on skilled human “teachers.” That’s where ANC’s partnership with Aspiritech to review and annotate TSA images comes in.
      `);
      await page.getByRole('link', { name: 'ANC & TSA Case Study' }).click();
      await expect(page).toHaveTitle("ANC & TSA Case Study – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/aspiritech-press/anc-tsa-case-study/")
      await expect(page.getByRole('heading', { name: 'ANC & the TSA Case Study' })).toBeVisible();
      await page.goBack()
      await page.getByRole('link', { name: 'Aon Benefits Calculator Case' }).click();
      await expect(page).toHaveTitle('Aon Benefits Calculator Case Study – Aspiritech')
      await expect(page).toHaveURL('https://aspiritech.org/aspiritech-press/aon-benefits-calculator/')
      await expect(page.getByRole('heading', { name: 'Aon Benefits Calculator Case' })).toBeVisible();
      await page.goBack()
      await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Aon Benefits Calculator Case Study" [level=3]:
        - link "Aon Benefits Calculator Case Study":
          - /url: https://aspiritech.org/aspiritech-press/aon-benefits-calculator/
      - paragraph: Aspiritech’s data services team leveraged the power of Excel to solve Aon’s problem of manually checking complex reports and efficiently verifying the accuracy of their calculations in every scenario.
      `);
      await page.getByRole('link', { name: 'JPMorgan Chase' }).click();
      await expect(page).toHaveTitle("JPMorgan Chase – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/aspiritech-press/jp-morgan-chase/")
      await expect(page.getByRole('heading', { name: 'JPMorgan Chase QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "JPMorgan Chase" [level=3]:
        - link "JPMorgan Chase":
          - /url: https://aspiritech.org/aspiritech-press/jp-morgan-chase/
      - paragraph: Aspiritech helps implement natural language chatbots, through regression and software testing.
      `);
        await page.getByRole('link', { name: 'We can’t wait to hear from' }).click();
      await expect(page).toHaveTitle("Contact Us – Aspiritech")
      await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
      await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
})