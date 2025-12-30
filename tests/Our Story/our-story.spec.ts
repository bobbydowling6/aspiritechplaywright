import { test, expect } from '@playwright/test';

test.describe("Our Story Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/our-story/")
  })
test("Validate Our Story Section", async ({page}) => {
    await expect(page).toHaveTitle("Our Story – Aspiritech")
    await expect(page).toHaveURL("/our-story/")
    await expect(page.getByRole('heading', { name: 'Our Story', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech is a tech services agency, with more than 15 years\' experience. We offer full testing lifecycle management, including end-to-end user testing, quality assurance, accessibility testing, data services, and more. As a mission-driven organization, more than 90 percent of our team is on the autism spectrum.');
    await expect(page.locator('#content')).toContainText('Brenda and Moshe Weitzberg founded Aspiritech in 2008 with the dream of finding suitable employment for their adult son Oran. Oran is a college-educated, kind, capable person on the autism spectrum who had difficulties finding work that suited his talents. After researching a company in Denmark that employed autistic adults doing software QA testing, Moshe and Brenda had their answer. From a kitchen table start-up, Aspiritech now has 115+ employees in two locations and is growing every day.');
    await page.locator('#content img').first().screenshot({path: 'photos/brenda&moshe.png'})
    await page.locator('#content img').nth(1).screenshot({path: 'photos/evanstonoffice.png'})
})
test("Validate Our Founders section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Our Founders' })).toBeVisible();
    await expect(page.getByText('Brenda Weitzberg', { exact: true })).toBeVisible();
    await expect(page.getByText('Moshe Weitzberg', { exact: true })).toBeVisible();
    await page.locator('div > section:nth-child(3) > .elementor-container').first().screenshot({path: 'photos/boseautomation.png'})
    await expect(page.locator('#content')).toContainText('Aspiritech is a pioneer and leader in this field, with 15+ years’ experience.');
    await expect(page.locator('#content')).toContainText('Aspiritech strives to create an environment where neurodivergent employees can flourish.');
    await expect(page.locator('#content')).toContainText('Aspiritech is a non-profit organization. We pay competitive salaries and cover 93% of our expenses with client revenue.');
})
test("Validate A Home of Our Own section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'A Home of Our Own' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('One of Aspiritech’s most exciting developments was the purchase of our new corporate headquarters in Evanston. Thanks to our generous capital campaign donors, we now truly have “A Home of Our Own” that is specifically designed to meet the needs of our neurodivergent staff.The new building is a stunning office space on Chicago Avenue in downtown Evanston. It was made possible by generous gifts from The Coleman Foundation, The Harry and Jeanette Weinberg Foundation, The Christopher L. and M. Susan Gust Foundation, and many others—ranging from contributions of $5 to $500,000.We are incredibly grateful for each and every one of these donations.As we continue to grow, our new building allows us to hire even more autistic adults, broaden our client base, expand our social services, and connect with a wider community of neurodivergent adults, organizations, and partner companies.');
    await page.locator('section').filter({ hasText: 'A Home of Our Own One of' }).locator('img').screenshot({path: 'photos/chicagoofficemeeting.png'})
})
test("Validate ACE: Assist, Change, & Empower section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'ACE: Assist, Change, & Empower' })).toBeVisible();
    await expect(page.locator('section:nth-child(6) > .elementor-container > div > .elementor-widget-wrap > div:nth-child(2)').first()).toBeVisible();
    await page.getByRole('link', { name: 'please visit our donation page' }).click();
    await expect(page).toHaveTitle("Support Our Mission – Aspiritech")
    await expect(page).toHaveURL("/support-our-mission/")
    await expect(page.getByRole('heading', { name: 'Support Our Mission' })).toBeVisible();
    await page.goBack()
    await page.locator('section').filter({ hasText: 'ACE: Assist, Change, &' }).locator('img').first().screenshot({path: 'photos/ace1.png'})
    await page.locator('section').filter({ hasText: 'ACE: Assist, Change, &' }).locator('img').nth(1).screenshot({path: 'photos/ace2.png'})
})
})