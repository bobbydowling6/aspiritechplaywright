import { test, expect } from '@playwright/test';

test.describe("FAQs Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/faqs/")
  })
test("Validate FAQs Section", async ({page}) => {
    await expect(page).toHaveTitle("Frequently Asked Questions (FAQs) – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/faqs/")
    await expect(page.getByRole('heading', { name: 'Frequently Asked Questions (FAQs)', exact: true })).toBeVisible();
    
})
test("Validate General Questions & Answers section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'General Questions & Answers' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Will using Aspiritech take' })).toBeVisible();
    await expect(page.getByLabel('Will using Aspiritech take').locator('span')).toContainText('Quite the contrary. Aspiritech analysts learn quickly, are experienced in testing a diverse array of technologies, and are more efficient due to their innate ability to focus for long periods of time. Our goal is long-term relationships. We like to think of ourselves as an outsource partner, not a vendor, and we strive to efficiently evolve with your testing needs.');
    await page.getByRole('button', { name: 'Who assures the quality of' }).click();
    await expect(page.getByLabel('Who assures the quality of').locator('span')).toContainText('Aspiritech’s management staff and QA leads have long careers in QA, extensive training, and an unparalleled commitment to quality and end-to-end user experience. Try a pilot with us and find out for yourself. As one client commented, “We started with them for the mission. We continued because they’re excellent.”');
    await page.getByRole('button', { name: 'How does the initial' }).click();
    await expect(page.getByLabel('How does the initial').locator('span')).toContainText('Typically, most engagements start with a pilot project. The initial engagement involves information exchange about the required services, security, and tracking/communication tools. The second step involves signing a mutual NDA, SOW, and often also an MSA. The actual education/presentation of the project is done via videoconferencing.');
    await page.getByRole('button', { name: 'What about security?' }).click();
    await expect(page.getByLabel('What about security?')).toContainText('Aspiritech utilizes actively-managed, industry-standard hardware and software firewalls at several levels within our network infrastructure, at all of our sites. We also utilize IDS/IPS to monitor traffic automatically, the logs of which are sifted through on a daily basis by our IT staff. We maintain a redundant internet connection at our main site to allow us to continue critical work during ISP outages. All networking equipment is set up on UPSes for the sake of surge protection and graceful shutdown during power outages, and cold spares are maintained for our most critical hardware. Sensitive and confidential data is stored and transmitted with industry-standard encryption.');
    await page.getByRole('button', { name: 'Will I have to build detailed' }).click();
    await expect(page.getByLabel('Will I have to build detailed').getByRole('paragraph')).toContainText('Aspiritech’s QA Analysts don’t require detailed test plans. We take pride in the fact that we can understand the software and test it without exhaustive steps. In fact, we can develop a test plan for you, along with writing quality test cases. All we do is QA—so building, monitoring, and managing test plans is our strength.');
    await page.getByRole('button', { name: 'Why is Aspiritech a nonprofit' }).click();
    await expect(page.getByLabel('Why is Aspiritech a nonprofit').locator('span')).toContainText('As a nonprofit, we can focus on delivering great service to our clients and a great work environment for our team. In most ways, we look, operate, and act like any typical QA tech firm. Our nonprofit status enables tax-deductible contributions that support our training programs, autism specialists, and accommodations to best assist our team!');
    await page.getByRole('button', { name: 'Who could I contact to find' }).click();
    await expect(page.getByLabel('Who could I contact to find').getByRole('paragraph')).toContainText('Contact our Account Executives by emailing sales@aspiritech.org or call our office at (312) 945-8378. You may also fill out Aspiritech’s Contact Us form. If you’re local to Chicago, we can help you plan a visit to our Evanston headquarters!');
    
})
test("Validate SQA FAQs section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'SQA FAQs' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'What is SQA?' })).toBeVisible();
    await expect(page.getByLabel('What is SQA?').locator('span')).toContainText('SQA (Software Quality Assurance) is quality assurance testing for software that ensures conformance against defined standards');
    await page.getByRole('button', { name: 'What types of testing do you' }).click();
    await expect(page.getByLabel('What types of testing do you').getByRole('list')).toContainText('Regression Testing – Testing to detect whether defects have been introduced with recent changes to the code or softwareExploratory Testing – A testing approach where testers design and execute tests based on their knowledge of the softwareUseability Testing – Testing to determine if the software can be used by specified users in a specified contextPair Testing – Testing by two or more testers simultaneously on a single productSmoke Testing – A preliminary check of software that makes sure its most crucial functions work before planned testingCompatibility Testing – Testing to make sure the software is compatible with different hardware, networks, operating systems, browsers, devices, and dependent software');
    await page.getByRole('button', { name: 'How do you provide support?' }).click();
    await expect(page.getByLabel('How do you provide support?').locator('span')).toContainText('Aspiritech will assign a project manager and additional analysts (depending on the size of the project) to test your software. We maintain communication primarily through Slack or email. We also use online video conferencing to regularly meet and update clients on testing progress.');
    await page.getByRole('button', { name: 'What testing software do you' }).click();
    await expect(page.getByLabel('What testing software do you').locator('span')).toContainText('Aspiritech uses Jira for defect and project management and TestRail for test plan management.');
    await page.getByRole('button', { name: 'Can Aspiritech work with our' }).click();
    await expect(page.getByLabel('Can Aspiritech work with our').getByRole('paragraph')).toContainText('Yes. We will work by request with your testing software.');
    await page.getByRole('button', { name: 'What platforms do you provide' }).click();
    await expect(page.getByLabel('What platforms do you provide')).toContainText('Aspiritech works with many different platforms and devices on many different versions of software or hardware. Listed below are some of the most common ones. But if you do not see any particular one, that doesn’t mean we aren’t willing to add to our growing collection of devices.ComputersWindows 7, 10, 11Mac OSLinux UbuntuTabletsSamsung GalaxyApple iPadMicrosoft SurfacePhonesiPhoneSamsung GalaxyGoogle PixelBrowsersChromeFirefoxEdgeSafariInternet Explorer');
    await page.getByRole('button', { name: 'What is the size of your test' }).click();
    await expect(page.getByLabel('What is the size of your test').getByRole('paragraph')).toContainText('Most teams have between 1-8 members.');
})
test("Validate Accessibility FAQs section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Accessibility FAQs' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'What is accessibility?' })).toBeVisible();
    await expect(page.getByLabel('What is accessibility?').getByRole('paragraph')).toContainText('Accessibility is the concept that a product or service should be used by all—regardless of ability. Accessibility governance exists to assist individuals with disabilities; however, software and hardware producers should accommodate all potential users. The outcome is a better, more usable product for all.');
    await page.getByRole('button', { name: 'Why is accessibility' }).click();
    await expect(page.getByLabel('Why is accessibility')).toContainText('Inaccessible web sites, apps, and digital content make it difficult or impossible for people with disabilities to engage with content, complete online tasks, and have a good user experience. Disabled users sometimes require assistive technologies (AT) to navigate digital spaces and often encounter barriers on the web when websites are built without these users in mind. An evaluation of one million home pages is conducted by Web Aim every year. The 2022 evaluation found that 97% of the top home pages had accessibility issues—with an average of 50.8 errors per page! Considering that the World Health Organization (WHO) estimates that 1.3 billion people experience a significant disability today, this means up to 16% of the global population encounters barriers on the web every day. Disabled individuals are thereby prevented from completing mundane but necessary tasks online, such as accessing information.');
    await page.getByRole('button', { name: 'What is the Americans with' }).click();
    await expect(page.getByLabel('What is the Americans with')).toContainText('The Americans with Disabilities Act (ADA) is a civil rights law from 1990 that prevents discrimination of people based on disability. Title III of the ADA requires public entities make their programs, services, and activities accessible to individuals with disabilities. While the ADA doesn’t explicitly address web content, many courts have ruled that websites fall under Title III—stating that websites are places of public accommodation, and therefore need to be accessible to users with disabilities. The Department of Justice has consistently taken the position that the ADA’s requirements apply to all the services, programs, or activities of state and local governments, including those offered on the web.');
})
})