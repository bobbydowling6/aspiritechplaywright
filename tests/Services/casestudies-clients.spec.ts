import { test, expect } from '@playwright/test';

test.describe("Case Studies & Clients Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/case-studies/")
  })
test("Validate Case Studies Section", async ({page}) => {
    await expect(page).toHaveTitle("Case Studies – Aspiritech")
    await expect(page).toHaveURL("/case-studies/")
    await expect(page.getByRole('heading', { name: 'Case Studies', exact: true })).toBeVisible();
    await expect(page.locator('body')).toContainText('Don’t just take our word for it.Our clients recommend us, every time.');
    await expect(page.locator('body')).toContainText('Aspiritech offers full product lifecycle management, end-to-end user testing, quality assurance, accessibility testing, and data services. We are obsessed with user experience and quality.');
    await page.getByRole('link', { name: 'Contact us for more info' }).click();
    await expect(page).toHaveTitle("Contact Us – Aspiritech")
    await expect(page).toHaveURL("/contact-us/")
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await page.goBack()
    
})
test("Validate Bose Case Study section", async ({page}) => {
    await page.getByRole('img', { name: 'Bose headphone' }).locator('div').screenshot({path: 'photos/bosecasestudy.png'})
    await expect(page.getByRole('heading', { name: 'Bose Hardware QA & Product' })).toBeVisible();
    await expect(page.locator('body')).toContainText('The world’s leading headphone company has a reputation for high quality, easy set up and use. Bose relies on Aspiritech to test across peripherals and platforms to assure a seamless roll out of software upgrades and new features, so customers can have an optimum experience over the life of their products.');
    await page.getByRole('link', { name: 'Bose Hardware QA & Product' }).click();
    await expect(page).toHaveTitle("Bose Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/bose-case-study/")
    await expect(page.getByRole('heading', { name: 'Bose Hardware QA & Product Excellence Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
        - img "Bose headphone"
        - heading "Bose Hardware QA & Product Excellence - Case Study" [level=2]:
          - link "Bose Hardware QA & Product Excellence - Case Study":
            - /url: /index.php/case-studies/bose-case-study/
        - paragraph: The world’s leading headphone company has a reputation for high quality, easy set up and use. Bose relies on Aspiritech to test across peripherals and platforms to assure a seamless roll out of software upgrades and new features, so customers can have an optimum experience over the life of their products.
        `);
})
test("Validate the Komodo Health case study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'Komodo Case Study Komodo' }).getByRole('link').first().screenshot({path: 'photos/komodocasestudy.png'})
    await expect(page.getByRole('heading', { name: 'Komodo Case Study' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Komodo Health wanted software and quality assurance testers to review its cloud-based software dedicated to improving patient outcomes. Aspiritech’s team provided the flexibility, reliability, and expertise that Komodo Health needed.');
    await page.getByRole('link', { name: 'Komodo Case Study' }).click();
    await expect(page).toHaveTitle('Komodo Case Study – Aspiritech')
    await expect(page).toHaveURL('/aspiritech-press/komodo-case-study/')
    await expect(page.getByRole('heading', { name: 'Komodo Case Study' })).toBeVisible();
    await page.goBack()

    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/komodo-case-study/
      - heading "Komodo Case Study" [level=3]:
        - link "Komodo Case Study":
          - /url: /aspiritech-press/komodo-case-study/
      - paragraph: Komodo Health wanted software and quality assurance testers to review its cloud-based software dedicated to improving patient outcomes. Aspiritech’s team provided the flexibility, reliability, and expertise that Komodo Health needed.
      `);
})
test("ANC & TSA Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'ANC & TSA Case Study Good' }).getByRole('link').first().screenshot({path: 'photos/anccasestudy.png'})
    await expect(page.getByRole('heading', { name: 'ANC & TSA Case Study' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Good machine learning relies on skilled human “teachers.” That’s where ANC’s partnership with Aspiritech to review and annotate TSA images comes in.');
    await page.getByRole('link', { name: 'ANC & TSA Case Study' }).click();
    await expect(page).toHaveTitle("ANC & TSA Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/anc-tsa-case-study/")
    await expect(page.getByRole('heading', { name: 'ANC & the TSA Case Study' })).toBeVisible();
    await page.goBack()
    
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/anc-tsa-case-study/
      - heading "ANC & TSA Case Study" [level=3]:
        - link "ANC & TSA Case Study":
          - /url: /aspiritech-press/anc-tsa-case-study/
      - paragraph: Good machine learning relies on skilled human “teachers.” That’s where ANC’s partnership with Aspiritech to review and annotate TSA images comes in.
      `);
})
test("Hippo Manager Case Study section", async ({page}) => {  
    await page.getByRole('article').filter({ hasText: 'Hippo Manager Case Study' }).getByRole('link').first().screenshot({path: 'photos/hippomanager.png'})
    await expect(page.getByRole('heading', { name: 'Hippo Manager Case Study' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Hippo Manager’s partnership with Aspiritech delivers rapid software evolution and error-free releases, boosting veterinary customer satisfaction and retention.');
    await page.getByRole('link', { name: 'Hippo Manager Case Study' }).click();
    await expect(page).toHaveTitle("Hippo Manager Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/hippo-manager-case-study/")
    await expect(page.getByRole('heading', { name: 'Hippo Manager Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/hippo-manager-case-study/
      - heading "Hippo Manager Case Study" [level=3]:
        - link "Hippo Manager Case Study":
          - /url: /aspiritech-press/hippo-manager-case-study/
      - paragraph: Hippo Manager’s partnership with Aspiritech delivers rapid software evolution and error-free releases, boosting veterinary customer satisfaction and retention.
      `);
})
test("HSRI Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'HSRI Case Study' }).getByRole('link').first().screenshot({path: 'photos/hsri.png'})  
    await expect(page.getByRole('heading', { name: 'HSRI Case Study' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Aspiritech supplemented HSRI’s busy team with dedicated accessibility analysts to ensure their digital platforms are usable by everyone, and we provided the flexibility needed to meet the demands of every task.');
    await page.getByRole('link', { name: 'HSRI Case Study' }).click();
    await expect(page).toHaveTitle("HSRI Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/hsri-case-study/")
    await expect(page.getByRole('heading', { name: 'HSRI Accessibility Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/hsri-case-study/
      - heading "HSRI Case Study" [level=3]:
        - link "HSRI Case Study":
          - /url: /aspiritech-press/hsri-case-study/
      - paragraph: Aspiritech supplemented HSRI’s busy team with dedicated accessibility analysts to ensure their digital platforms are usable by everyone, and we provided the flexibility needed to meet the demands of every task.
      `);
})
test("JPMorgan Chase Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'JPMorgan Chase Case Study' }).getByRole('link').first().screenshot({path: 'photos/jpmorganchase.png'})  
    await expect(page.getByRole('heading', { name: 'JPMorgan Chase Case Study' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Aspiritech’s QA and accessibility testers helped ensure the smoothest user experiences for all of JPMorgan Chase’s virtual chat and mobile app users.')
    await page.getByRole('link', { name: 'JPMorgan Chase Case Study' }).click();
    await expect(page).toHaveTitle("JPMorgan Chase Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/jpmc-case-study/")
    await expect(page.getByRole('heading', { name: 'JPMorgan Chase Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/jpmc-case-study/
      - heading "JPMorgan Chase Case Study" [level=3]:
        - link "JPMorgan Chase Case Study":
          - /url: /aspiritech-press/jpmc-case-study/
      - paragraph: Aspiritech’s QA and accessibility testers helped ensure the smoothest user experiences for all of JPMorgan Chase’s virtual chat and mobile app users.
      `);
})
test("Basecamp Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'Basecamp Case Study' }).getByRole('link').first().screenshot({path: 'photos/basecampcasestudy.png'})  
    await expect(page.getByRole('heading', { name: 'Basecamp Case Study' })).toBeVisible();
    await page.getByRole('link', { name: 'Basecamp Case Study' }).click();
    await expect(page).toHaveTitle("Basecamp Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/basecamp-case-study/")
    await expect(page.getByRole('heading', { name: 'Basecamp Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/basecamp-case-study/
      - heading "Basecamp Case Study" [level=3]:
        - link "Basecamp Case Study":
          - /url: /aspiritech-press/basecamp-case-study/
      - paragraph: Aspiritech’s team utilized the four principles of accessibility—perceivability, operability, understandability, and robustness—to ensure that Basecamp’s products are usable by all.
      `);
})
test("AbbVie Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'AbbVie Case Study' }).getByRole('link').first().screenshot({path: 'photos/hsri.png'})  
    await expect(page.getByRole('heading', { name: 'AbbVie Case Study' })).toBeVisible();
    await page.getByRole('link', { name: 'AbbVie Case Study' }).click();
    await expect(page).toHaveTitle("AbbVie Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/abbvie-case-study/")
    await expect(page.getByRole('heading', { name: 'AbbVie Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/abbvie-case-study/
      - heading "AbbVie Case Study" [level=3]:
        - link "AbbVie Case Study":
          - /url: /aspiritech-press/abbvie-case-study/
      - paragraph: In order to provide customers with updated information on their prescriptions, leading biopharmaceutical company AbbVie relies on Aspiritech’s behind-the-scenes work for their data, validation, and integrity needs.
      `);
})
test("SourceAmerica Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'SourceAmerica Case Study' }).getByRole('link').first().screenshot({path: 'photos/sourceamerica.png'})  
    await expect(page.getByRole('heading', { name: 'SourceAmerica Case Study' })).toBeVisible();
    await page.getByRole('link', { name: 'SourceAmerica Case Study' }).click();
    await expect(page).toHaveTitle("SourceAmerica Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/source-america-case-study/")
    await expect(page.getByRole('heading', { name: 'SourceAmerica Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/source-america-case-study/
      - heading "SourceAmerica Case Study" [level=3]:
        - link "SourceAmerica Case Study":
          - /url: /aspiritech-press/source-america-case-study/
      - paragraph: SourceAmerica created a platform for people with disabilities to be seen, heard, and hired. When looking for a team to test the accessibility of the technologies that drive that platform, Aspiritech was the natural choice.
      `);
})
test("Goldman Sachs Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'Goldman Sachs Case Study' }).getByRole('link').first().screenshot({path: 'photos/goldmansachs.png'})  
    await expect(page.getByRole('heading', { name: 'Goldman Sachs Case Study' })).toBeVisible();
    await page.getByRole('link', { name: 'Goldman Sachs Case Study' }).click();
    await expect(page).toHaveTitle("Goldman Sachs Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/goldman-sachs-case-study/")
    await expect(page.getByRole('heading', { name: 'Goldman Sachs Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link "A male Aspiritech QA analyst in a blue-gray shirt and glasses looks toward a man in a black shirt in glasses.":
        - /url: /aspiritech-press/goldman-sachs-case-study/
        - img "A male Aspiritech QA analyst in a blue-gray shirt and glasses looks toward a man in a black shirt in glasses."
      - heading "Goldman Sachs Case Study" [level=3]:
        - link "Goldman Sachs Case Study":
          - /url: /aspiritech-press/goldman-sachs-case-study/
      - paragraph: When Goldman Sachs Transaction Banking needed an efficient and repeatable way to ensure their services always worked as intended, Aspiritech’s functional QA testing team was there to match their ambitious software rollout and system update schedule.
      `);
})
test("Zebra Case Study section", async ({page}) => {
    await page.getByRole('article').filter({ hasText: 'Zebra Case Study' }).getByRole('link').first().screenshot({path: 'photos/zebracasestudy.png'})  
    await expect(page.getByRole('heading', { name: 'Zebra Case Study' })).toBeVisible();
    await page.getByRole('link', { name: 'Zebra Case Study' }).click();
    await expect(page).toHaveTitle("Zebra Case Study – Aspiritech")
    await expect(page).toHaveURL("/aspiritech-press/zebra-case-study/")
    await expect(page.getByRole('heading', { name: 'Zebra Hardware QA & Product Excellence Case Study' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - link:
        - /url: /aspiritech-press/zebra-case-study/
      - heading "Zebra Case Study" [level=3]:
        - link "Zebra Case Study":
          - /url: /aspiritech-press/zebra-case-study/
      - paragraph: The world’s leader in barcode printers and scanners was in need of constant QA testing to ensure uninterrupted and quality service for its printer clients. Aspiritech delivered.
      `);
    })
})