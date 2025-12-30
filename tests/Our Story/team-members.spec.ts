import { test, expect } from '@playwright/test';

test.describe("Our Team Members Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/team-members/")
  })
test("Validate Team Members Section", async ({page}) => {
    await expect(page).toHaveTitle("Team Members – Aspiritech")
    await expect(page).toHaveURL("/team-members/")
    await expect(page.getByRole('heading', { name: 'Team Members', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Our team members are the heart of everything we do. They act not only as tech experts who support our clients day in and day out, but they are also ambassadors of our organization and its mission. Meet our team and see what they have to say about working at Aspiritech.');
})
test("Staff TESTERmonials section", async ({page}) => {
    await page.goto('/team-members/')
    await expect(page.getByRole('heading', { name: 'Staff TESTERmonials' })).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: 'Join Our Team' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Find confidence, develop your professional skills, and be part of a team who values every part of you.');
    await page.getByRole('link', { name: 'Careers at Aspiritech' }).click()
    await expect(page).toHaveTitle("Careers – Aspiritech")
    await expect(page).toHaveURL("/careers/")
    await expect(page.getByRole('heading', { name: 'Careers', exact: true })).toBeVisible();
    await page.goBack()
})

})