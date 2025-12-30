import { test, expect } from '@playwright/test';

test.describe("Services Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/services/")
  })
test("Validate Services Section", async ({page}) => {
    await expect(page).toHaveTitle("Services – Aspiritech")
    await expect(page).toHaveURL("/services/")
    await expect(page.getByRole('heading', { name: 'Services', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech helps clients achieve product excellence through end-to-end user testing, accessibility reviews, user experience optimization, and more. We also offer a wide array of data services, including annotation, migration, validation, product descriptions, and so much more. Reach out to find out how we can help you.');
    await page.getByRole('link', { name: 'Find Out More!' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('link', { name: 'Photo image of Aspiritech' })).toBeVisible();
    await expect(page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('link', { name: 'Meet Aspiritech | Onshore SQA' })).toBeVisible();
    await page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('button', { name: 'Play' }).click();
    await page.locator('iframe[title="youtube Video Player"]').contentFrame().locator('video').click();
})
test("Validate Quality Assurance, Accessibility, & Data Services section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Quality Assurance,' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech provides quality assurance testing services for big tech, software development, and hardware manufacturers. We also offer data entry, data management, and security testing.');
    await expect(page.locator('#content')).toContainText('We make sure your software and your hardware work every time, on every device, after every upgrade.For our clients, that means better product integrity, peace of mind for their customers, and increased efficiency when it comes to data management.If you’d like more information on how we can work together, contact us for a capabilities presentation.');
    await page.getByRole('link', { name: 'contact us', exact: true }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
})
test("Validate the Capabilities section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Capabilities' })).toBeVisible();
    await page.locator('#content').getByRole('link', { name: 'Quality Assurance' }).click();
    await expect(page).toHaveTitle("Software Quality Assurance – Aspiritech")
    await expect(page).toHaveURL("/services/quality-assurance/")
    await expect(page.getByRole('heading', { name: 'Software Quality Assurance' })).toBeVisible();
    await page.goBack()
    await page.locator('#content').getByRole('link', { name: 'Audio Testing' }).click();
    await expect(page).toHaveTitle("Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech")
    await expect(page).toHaveURL("/services/audio-testing/")
    await expect(page.getByRole('heading', { name: 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity' })).toBeVisible();
    await page.goBack()
    await page.locator('#content').getByRole('link', { name: 'Accessibility', exact: true }).click();
    await expect(page).toHaveTitle("Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech")
    await expect(page).toHaveURL("/services/accessibility/")
    await expect(page.getByRole('heading', { name: 'Accessibility Testing: Design' })).toBeVisible();
    await page.goBack()
    await page.locator('#content').getByRole('link', { name: 'Data Services' }).click();
    await expect(page).toHaveTitle("Data Services: Data Annotation, Data Labeling, and Data Validation – Aspiritech")
    await expect(page).toHaveURL("/services/data-services/")
    await expect(page.getByRole('heading', { name: 'Data Services: Data Annotation, Data Labeling, and Data Validation' })).toBeVisible();
})
test("About Us section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();

    await expect(page.locator('#content')).toContainText('We offer high-quality software, hardware, data integrity, and migration testing with a team of highly qualified individuals on the autism spectrum.');
    await expect(page.locator('section:nth-child(8) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Software Testers for Hire' })).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .elementor-widget-wrap > div:nth-child(3) > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('figure').locator('img').screenshot({path: 'photos/kyleverbeke2.png'})
})
test("Technical Services section", async ({page}) => {  
    await expect(page.getByRole('heading', { name: 'Technical Services' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Manual and Automated Testing We offer a mix of manual and automated functional testing services. With real users, on real devices, we help ensure seamless customer experiences in the real world. Our automated testing helps us quickly identify common errors, too.');
    await expect(page.locator('#content')).toContainText('Software and Hardware Testing We test any equipment that interacts with software, mobile applications, cloud storage, and other services. From audio and control hardware to connectivity and software functionality, we provide a complete range of QA testing services.');
    await expect(page.locator('#content')).toContainText('Data Integrity and Migration We work to offer data quality assurance through a process of identification and elimination of anomalies. From data profiling, normalization, and cleansing, we execute processes that help ensure that your data is top notch. If you require data relocation to a new system or data entry services, we have team members available to serve your needs.');
    await expect(page.locator('#content')).toContainText('Accessibility & ADA Compliance We work to test and ensure your software is inclusive and usable by all people. We help you ensure your products meet accessibility conformity across WCAG 2.1 requirements, Section 508, and compliance with the Americans with Disabilities Act.');
    await expect(page.locator('#content')).toContainText('UX/UI, Responsive, & Device Testing Our goal is to improve user experience across all modern devices and browsers through real user evaluation and testing. This includes desktop, tablet, and mobile UI testing across Android and iOS platforms.');
    await expect(page.locator('#content')).toContainText('Training Academy The Aspiritech Remote Employment Academy, or AREA, is a training program for autistic young adults to develop their employability, leadership, and technical skills. Upon completion, participants could be hired to work remotely for Aspiritech or at other companies.');
})
test("QA & Software Services section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'QA & Software Testing Services' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Functional TestingMobile App TestingAutomation & Automated TestingAccessibility Testing (Section 508 and WCAG compliance)Real-Device TestingBeta TestingRegression TestingUsability TestingLivestream Testing');
    await expect(page.locator('#content')).toContainText('Analytics TestingLocation TestingVoice Testing Localization TestingPayments TestingRegression and Exploratory TestingAR/VR TestingPerformance TestingAPI Testing');
    await expect(page.locator('#content')).toContainText('Compatibility Testing & Cross Browser/OS System TestingFunctional Testing and Acceptance TestingTest Design and Test PlansDecomp and Test Script DevelopmentQA and Manual WritingGraphic Uniformity of Web Pages and Applications');
})
test("See for yourself section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'See for yourself' })).toBeVisible();
    await page.getByRole('link', { name: 'View all case studies' }).click();
    await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("/case-studies/")
    await expect(page.getByRole('heading', { name: 'Case Studies' })).toBeVisible();
    await page.goBack()

    await expect(page.locator('#content')).toContainText('You built it. Hire us to test it. Check out our case studies from current and past clients, to see why they love working with Aspiritech, and how our team helps elevate their user experience.');
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "AbbVie Case Study" [level=3]:
        - link "AbbVie Case Study":
          - /url: /aspiritech-press/abbvie-case-study/
      - paragraph: In order to provide customers with updated information on their prescriptions, leading biopharmaceutical company AbbVie relies on Aspiritech’s behind-the-scenes work for their data, validation, and integrity needs.
      `);

      await page.getByRole('link', { name: 'AbbVie Case Study' }).click();
      await expect(page).toHaveTitle("AbbVie Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/abbvie-case-study/")
      await expect(page.getByRole('heading', { name: 'AbbVie Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "ANC & TSA Case Study" [level=3]:
        - link "ANC & TSA Case Study":
          - /url: /aspiritech-press/anc-tsa-case-study/
      - paragraph: Good machine learning relies on skilled human “teachers.” That’s where ANC’s partnership with Aspiritech to review and annotate TSA images comes in.
      `);
      await page.getByRole('link', { name: 'ANC & TSA Case Study' }).click();
      await expect(page).toHaveTitle("ANC & TSA Case Study – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/anc-tsa-case-study/")
      await expect(page.getByRole('heading', { name: 'ANC & the TSA Case Study' })).toBeVisible();
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
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "Aon Benefits Calculator Case Study" [level=3]:
        - link "Aon Benefits Calculator Case Study":
          - /url: /aspiritech-press/aon-benefits-calculator/
      - paragraph: Aspiritech’s data services team leveraged the power of Excel to solve Aon’s problem of manually checking complex reports and efficiently verifying the accuracy of their calculations in every scenario.
      `);
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
      await page.getByRole('link', { name: 'JPMorgan Chase' }).click();
      await expect(page).toHaveTitle("JPMorgan Chase – Aspiritech")
      await expect(page).toHaveURL("/aspiritech-press/jp-morgan-chase/")
      await expect(page.getByRole('heading', { name: 'JPMorgan Chase QA & Product Excellence Case Study' })).toBeVisible();
      await page.goBack()
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - heading "JPMorgan Chase" [level=3]:
        - link "JPMorgan Chase":
          - /url: /aspiritech-press/jp-morgan-chase/
      - paragraph: Aspiritech helps implement natural language chatbots, through regression and software testing.
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