import { test, expect } from '@playwright/test';

test.describe("Advisory Board Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/advisory-board/")
  })
test("Validate Advisory Board Section", async ({page}) => {
    await expect(page).toHaveTitle("Advisory Board – Aspiritech")
    await expect(page).toHaveURL("/advisory-board/")
    await expect(page.getByRole('heading', { name: 'Advisory Board', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Our allies go above and beyond to support our mission of neurodiversity inclusion.');
    await expect(page.getByText('We know we\'re stronger together. And we have a lot of work to do. Our Advisory')).toBeVisible();
})
test("Validate Meet Our Advisory Board section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Meet Our Advisory Board' })).toBeVisible();
    await expect(page.getByText('Hamid Akbari Co-Founder of')).toBeVisible();
    await expect(page.getByText('Dr. Andrew Begel Associate')).toBeVisible();
    await expect(page.getByText('Chris Bogdan CEO & Founder,')).toBeVisible();
    await expect(page.getByText('Brad Cohen Director of Growth')).toBeVisible();
    await expect(page.getByText('Teri Dudasik Disability')).toBeVisible();
    await expect(page.getByText('Maureen Dunne National')).toBeVisible();
    await expect(page.getByText('Rachael Fellers Academic Life')).toBeVisible();
    await expect(page.getByText('Johanna Fine Chief Human')).toBeVisible();
    await expect(page.getByText('John Gottwald Financial')).toBeVisible();
    await expect(page.getByText('Amanda Hebert Hughes Autistic')).toBeVisible();
    await expect(page.getByText('Azar Khounani Founder of Kids')).toBeVisible();
    await expect(page.getByText('Brian R. King, MSW Autism &')).toBeVisible();
    await expect(page.getByText('Alexandra Koys Entrepreneur')).toBeVisible();
    await expect(page.getByText('Bennett Leventhal, MD Member')).toBeVisible();
    await expect(page.getByText('Toni Neary Director of')).toBeVisible();
    await expect(page.getByText('Keevin O\'Rourke CEO, Multiple')).toBeVisible();
    await expect(page.getByText('Louise Pearson Pro Bono')).toBeVisible();
    await expect(page.getByText('Kirby Rabalais Founder &')).toBeVisible();
    await expect(page.getByText('Dr. Larry Rothman Co-Founder')).toBeVisible();
    await expect(page.getByText('Lorra Rudman Licensed')).toBeVisible();
    await expect(page.getByText('Barbara Serota Housing')).toBeVisible();
    await expect(page.getByText('Don R. Smith Director,')).toBeVisible();
    await expect(page.getByText('Prathap Venkatesan Co-Founder')).toBeVisible();
    await expect(page.getByText('Ian Westbrook Senior Designer')).toBeVisible();
})
test("Validate Distinguished Alumni Section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Distinguished Alumni' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('So many people have supported Aspiritech over the years. We are eternally grateful for the hard work and commitment of our community since Aspiritech\'s inception.');
    await expect(page.locator('h4')).toContainText('Ed AsnerDan MayoDanielle MoushonMarc NolandKeita SuzukiHong Zhang, PhD');
})
test("Validate Junior Members Section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Junior Members' })).toBeVisible();
    await expect(page.getByText('Sreenidi Bala Sreenidi Bala')).toBeVisible();
    await expect(page.getByText('Adriyanna Tesimu Adriyanna is')).toBeVisible();
})
})