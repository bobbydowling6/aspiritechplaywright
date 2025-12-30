import { test, expect } from '@playwright/test';

test.describe("About Us Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/about-us/")
  })
test("Validate About Us Page", async ({page}) => {
    await expect(page).toHaveTitle("About Us – Aspiritech")
    await expect(page).toHaveURL("/about-us/")
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
})
test("Validate the Service buttons", async ({page}) => {
  //check the accessibility button is functional and is redirected to the right Url
  await expect(page.getByRole('heading', { name: 'Accessibility' })).toBeVisible();
  await page.getByRole('link', { name: 'Find out more' }).first().click();
  await expect(page).toHaveTitle("Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech")
  await expect(page).toHaveURL("/services/accessibility/")
  await expect(page.getByRole('heading', { name: 'Accessibility Testing: Design' })).toBeVisible();
  await page.goBack()
  //check the audio testing title is visible
  await expect(page.getByRole('heading', { name: 'Audio Testing' })).toBeVisible();
  //check the audio testing button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Find out more' }).nth(1).click();
  await expect(page).toHaveTitle("Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech")
  await expect(page).toHaveURL("/services/audio-testing/")
  await expect(page.getByRole('heading', { name: 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity' })).toBeVisible();
  await page.goBack()
  //check the quality assurance title is visible
  await expect(page.getByRole('heading', { name: 'Software QA' })).toBeVisible()
  //check the quality assurance button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Find out more' }).nth(2).click();
  await expect(page).toHaveTitle("Software Quality Assurance – Aspiritech")
  await expect(page).toHaveURL("/services/quality-assurance/")
  await expect(page.getByRole('heading', { name: 'Software Quality Assurance' })).toBeVisible();
  await page.goBack()
  //check the data services title is visible
  await expect(page.getByRole('heading', { name: 'Data Services' })).toBeVisible()
  //check the data services button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Find out more' }).nth(3).click();
  await expect(page).toHaveTitle("Data Services: Data Annotation, Data Labeling, and Data Validation – Aspiritech")
  await expect(page).toHaveURL("/services/data-services/")
  await expect(page.getByRole('heading', { name: 'Data Services: Data Annotation, Data Labeling, and Data Validation' })).toBeVisible();
  await page.goBack()
  //check the Neurogrowth Training Services title
  await expect(page.getByRole('link', { name: 'group of executives around a' })).toBeVisible();
  //check the Neurogrowth Training Services button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'group of executives around a' }).click();
  await expect(page).toHaveTitle("NeuroGrowth Training Services: You already have a neurodiverse team – Aspiritech")
  await expect(page).toHaveURL("/services/neurogrowth-training-services-for-companies-and-organizations/")
  await expect(page.getByRole('heading', { name: 'NeuroGrowth Training Services' })).toBeVisible();
  await page.goBack()
})
test('Training Academy Section including links', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Training Academy' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Aspiritech Academy is an innovative program at Aspiritech that allows new and existing employees to participate in all-digital immersive learning experiences.New team members can attend our two-week onboarding academy as preparation for becoming part of the Aspiritech team, or before embarking on careers in quality assurance elsewhere. Aspiritech Academy allowed Aspiritech to hire its very first team member on the West Coast!Existing team members can take classes to learn new skills and develop their talents in other program lines or projects. Soft skill training courses are also available to new and existing team members, as well as neurodivergent members of the larger community. The program is also developing its first-ever remote internship program.Aspiritech Academy includes the implementation of a digital Learning Management System, which allows users to take courses online and for us to host a suite of trainings, including technical courses and more.The program is made possible through a generous grant from the Mitsubishi Electric America Foundation and HAAPE.If you have a candidate who might be interested in this program, please visit the Aspiritech Academy page for more information.');
  await page.getByRole('link', { name: 'Mitsubishi Electric America' }).click();
  await expect(page).toHaveTitle("Social Impact - MEAF | MITSUBISHI ELECTRIC UNITED STATES")
  await expect(page).toHaveURL("https://us.mitsubishielectric.com/en/sustainability/greater-community/meaf-top/")
  await page.goBack()
  await page.goto('/about-us/');
  await page.getByRole('link', { name: 'HAAPE' }).click();
  await expect(page).toHaveTitle("HAAPE - Helping Adults with Autism Perform and Excel")
  await expect(page).toHaveURL("https://haape.org")
  await page.goBack()
  await page.getByRole('link', { name: 'visit the Aspiritech Academy' }).click();
  await expect(page).toHaveTitle("Aspiritech Academy – Aspiritech")
  await expect(page).toHaveURL("/aspiritech-academy/")
  await expect(page.getByRole('heading', { name: 'Aspiritech Academy', exact: true })).toBeVisible();
  await page.goBack()
})

test('Leadership team section', async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Leadership Team' })).toBeVisible();
  await page.locator('.elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/taramay.png'})
  await page.locator('div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/nickbruno.png'})
  await page.locator('div:nth-child(3) > .elementor-widget-wrap > div > .elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/juliefinerty.png'})
  await page.getByRole('img', { name: 'Maxwell Huffman' }).screenshot({path: 'photos/maxwellhoffman.png'})
  await page.locator('section:nth-child(3) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container > .attachment-large').screenshot({path: 'photos/kayleybogdan.png'})
  await page.getByRole('img', { name: 'Lindsey Holley poses in front' }).screenshot({path: 'photos/lindseyholly.png'})
  await page.getByRole('img', { name: 'An assortment of hexagons' }).screenshot({path: 'photos/ianrace.png'})
  await page.getByRole('img', { name: 'Robin Kacyn' }).screenshot({path: 'photos/robynkacyn.png'})
  await page.getByTestId('elementor-widget-wrap elementor-element-populated').count()
  await page.getByRole('link', { name: 'Read Full Bios' }).click();
  await expect(page).toHaveTitle("Leadership – Aspiritech")
  await expect(page).toHaveURL("/leadership/")
  await page.goBack()
})
})