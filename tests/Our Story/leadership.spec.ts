import { test, expect } from '@playwright/test';

test.describe("Leadership Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org/leadership/")
  })
test("Validate Leadership Section", async ({page}) => {
    await expect(page).toHaveTitle("Leadership – Aspiritech")
    await expect(page).toHaveURL("https://aspiritech.org/leadership/")
    await expect(page.getByRole('heading', { name: 'Leadership', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('We are passionate about people, purpose, and the power of neurodiversity.');
    await expect(page.getByRole('heading', { name: 'We believe kindness drives' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech’s leadership team is committed to being a business with a mission. We strive to create a kind and progressive work environment, where our team members can reach their full potential. We believe that by creating a space where innovation and people thrive, our clients and organization will thrive right along with them.');
})
test("Validate Meet Our Leadership team Section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Meet Our Leadership Team' })).toBeVisible();
    await expect(page.locator('div > section:nth-child(3) > div > div > div > section > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.locator('.elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/taramay.png'})
    await expect(page.locator('section:nth-child(3) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.locator('section:nth-child(3) > .elementor-container > div > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/nickbruno.png'})
    await expect(page.locator('section:nth-child(4) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.locator('section:nth-child(4) > .elementor-container > div > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').first().screenshot({path: 'photos/juliefinerty.png'})
    await expect(page.locator('section:nth-child(6) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('img', { name: 'Maxwell Huffman' }).screenshot({path: 'photos/maxwellhoffman.png'})
    await expect(page.locator('section:nth-child(7) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.locator('section:nth-child(7) > .elementor-container > div > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').screenshot({path: 'photos/kayleybrogden.png'})
    await expect(page.locator('section:nth-child(8) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('img', { name: 'An assortment of hexagons' }).screenshot({path: 'photos/ianrace.png'})
    await expect(page.locator('section:nth-child(9) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('img', { name: 'Lindsey Holley poses in front' }).screenshot({path: 'photos/lindseyholley.png'})
    await expect(page.locator('section:nth-child(11) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('img', { name: 'Robin Kacyn' }).screenshot({path: 'photos/robinkacyn.png'})
})

test("Program Directors section", async ({page}) => {

await expect(page.getByRole('heading', { name: 'Program Directors' })).toBeVisible();
await expect(page.locator('section:nth-child(4) > div > div > div > section > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
await page.getByRole('img', { name: 'An Aspiritech employee' }).screenshot({path: 'photos/stephenbraun.png'})
await expect(page.locator('section:nth-child(4) > div > div > div > section:nth-child(4) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
await page.locator('section').filter({ hasText: 'Program Directors Stephen' }).locator('img').nth(1).screenshot({path: 'photos/dougnorton.png'})
await expect(page.locator('section:nth-child(5) > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > div > .elementor-widget-container').first()).toBeVisible();
await page.getByRole('img', { name: 'Aspiritech Data Services' }).screenshot({path: 'photos/kyleverbeke.png'})
})
test("Board of Directors section", async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Board of Directors' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Aspiritech’s dedicated Board of Directors plays a critical role in our success. Board members volunteer their time tirelessly to ensure that our goal of providing meaningful employment for individuals on the autism spectrum is met. The Aspiritech Board includes leaders in technology, law, healthcare, communications, and social services.');
  await expect(page.getByRole('heading', { name: 'Officers' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Michael P. Duff, Jr.Technology Executive and CIOChairpersonJanice Block ChaddockRetired Global Education ExecutiveVice Chair');
  await expect(page.locator('#content')).toContainText('Sharon BielskiSecretaryAlan BerkowitzRetiredTreasurer');
  await expect(page.getByRole('heading', { name: 'Board Members' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Vivek ChopraExecutive Chairman; Strategic Advisor; MentorKyle CramerDiverse Partner Development at MicrosoftMatt EpsteinStaff Accountant, Misericordia HomeMitch GreenwaldBusiness Technology Executive; Board Member; Actively RetiredKelly KillianBrand journalist and content marketer');
  await expect(page.locator('#content')).toContainText('Nikhil SonpalCEO, Mobility QuotientScott SummervilleCEO, Mitsubishi Electric AutomationGary WalterCEO, VeriskMarcus WilliamsAccounting Financial Systems ManagerBrad ZelingerFounder and CEO, Stride Autism Centers');
  })
})