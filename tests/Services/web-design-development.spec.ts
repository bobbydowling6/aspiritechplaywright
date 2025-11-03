import { test, expect } from '@playwright/test';

test.describe("Web Design & Development Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/services/web-design-development/")
  })
test("Validate Quality Assurance Section", async ({page}) => {
    await expect(page).toHaveTitle("Web Design & Development – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/services/web-design-development/")
    await expect(page.getByRole('heading', { name: 'Web Design & Development', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Partner with Aspiritech to streamline development, improve site experience, and stay ahead of online competition.');
    await expect(page.getByText('In today’s connected economy, every company is a digital company.Organizations')).toBeVisible();
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
    await page.route('https://aspiritech.org/services/web-design-development/', async (route) => {
        const request = route.request();
        console.log('Request made:', await request.postData());
        await route.continue();
    });

    // Click the submit button
    await page.getByRole('button', { name: 'Contact us' }).click();

    // Wait for the success response from the API
    const response = await request.post('https://aspiritech.org/services/web-design-development/', {
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
test("Validate different Web Development Services", async({page}) => {
    await expect(page.getByRole('heading', { name: 'What We Do: Web Development' })).toBeVisible();
    await expect(page.getByText('Agile developmentEnd-to-end')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Philosophy' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('A few key principles ground Aspiritech’s approach to web development:');
    await expect(page.getByRole('list').filter({ hasText: 'Our decision-making is' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'The Business Case for' })).toBeVisible();
    await page.getByRole('link', { name: 'The Business Case for' }).click();
    await expect(page).toHaveTitle('The Business Case for Digital Accessibility – Aspiritech')
    await expect(page).toHaveURL('https://aspiritech.org/services/accessibility/business-case-for-accessibility/')
    await expect(page.getByRole('heading', { name: 'The Business Case for Digital' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#content')).toContainText('Having products that everyone can use is more than just being great for business. It also makes the world a more equitable place.');
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn How Accessibility' }).click();
    const page5 = await page5Promise;
    await expect(page5).toHaveTitle('The Business Case for Digital Accessibility – Aspiritech')
    await expect(page5).toHaveURL('https://aspiritech.org/services/accessibility/business-case-for-accessibility/')
    await expect(page5.getByRole('heading', { name: 'The Business Case for Digital' })).toBeVisible();
    
})

test("See for yourself section", async({page}) => {
    await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('As a full-stack partner, Aspiritech’s web design and development engagements are informed by our expertise in quality assurance, UI/UX, data integrations, SEO, digital storytelling, and accessibility. We offer a flexible staffing model and competitive pricing with a passionate, talented, onshore team.');
    await page.getByRole('link', { name: 'View all case studies' }).click();
    await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/case-studies/")
    await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
    await page.goBack()
    await page.getByRole('link', { name: 'Neurowrx', exact: true }).click();
    await expect(page).toHaveTitle("Neurowrx | Creating Jobs for People with Autism in STEM")
    await expect(page).toHaveURL("https://www.neurowrx.org/")
    await expect(page.getByRole('link', { name: 'neurowrx logo' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
        - figure:
          - link "A laptop on a gray background displaying the Neurowrx homepage.":
            - /url: https://www.neurowrx.org/
            - img "A laptop on a gray background displaying the Neurowrx homepage."
        - heading "Neurowrx" [level=3]:
          - link "Neurowrx":
            - /url: https://www.neurowrx.org/
        - paragraph: The Neurowrx Board of Directors needed a public-facing website to tout the organization’s global mission, but also a private members-only portal to encourage joining the organization formally.
        `);
    await page.getByRole('link', { name: 'Ampera' }).click();
    await expect(page).toHaveTitle("Ampera Tech")
    await expect(page).toHaveURL("https://amperatech.ai/")
    await expect(page.getByRole('heading', { name: 'Transforming Data Into' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
        - figure:
          - link "A":
            - /url: https://amperatech.ai/
            - img "A"
        - heading "Ampera" [level=3]:
          - link "Ampera":
            - /url: https://amperatech.ai/
        - paragraph: Ampera needed a website that showcased its technical expertise while reinforcing its dedication to diversity. The site had to be both highly functional and fully accessible, ensuring a seamless experience for all users, including those with disabilities.
        `);
      
    await page.getByRole('link', { name: 'We can’t wait to hear from' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
test("Why the Aspiritech Team Is the Right Choice Section", async({page}) => {
  
  await expect(page.getByRole('heading', { name: 'From Our Partners' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('"The Aspiritech team is fantastic! We\'re so grateful to them for helping us upgrade our Neurowrx website and make it accessible for all."');
  await expect(page.getByRole('heading', { name: 'Rebecca Beam, Co-Chair,' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Why the Aspiritech Team Is' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '+ years in software testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'ISTQB-certified testing' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'An accessibility team composed of Section 508 Trusted Testers, certified through the Department of Homeland Security'})).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Third-party assessed & proven' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'A full-time team of 100+' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Industry-specific expertise' })).toBeVisible();
})
})