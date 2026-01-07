import { test, expect } from '@playwright/test';


test.describe("Home Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://aspiritech.org")
  })


test("Validate first section of home page", async ({page}) => {
  //check the title of the page
  await expect(page).toHaveTitle("Welcome to Aspiritech » Aspiritech Neurodivergent QA Testers")
  await expect(page).toHaveURL("/")
  await expect(page.getByRole('heading', { name: 'Quality Assurance, Accessibility, and Data Services' })).toBeVisible();
  await expect(page.getByText('Excellence powered by a')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
})

test("Validate the Our Service buttons", async ({page}) => {
  //check the accessibility button is visible
  await expect(page.getByRole('link', { name: 'Accessibility' }).first()).toBeVisible()
  //check the accessibility button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Accessibility' }).first().click();
  await expect(page).toHaveTitle("Accessibility Testing: Design, Usability, & WCAG Conformance » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/accessibility/")
  await expect(page.getByRole('heading', { name: 'Accessibility' })).toBeVisible();
  await page.goBack()
  //check the audio testing button is visible
  await expect(page.getByRole('link', { name: 'Audio Testing' }).first()).toBeVisible()
  //check the audio testing button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Audio Testing' }).first().click();
  await expect(page).toHaveTitle("Audio & Hardware Testing: Speakers, Headphones, & Connectivity » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/audio-testing/")
  await expect(page.getByRole('heading', { name: 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity' })).toBeVisible();
  await page.goBack()
  //check the quality assurance button is visible
  await expect(page.getByRole('link', { name: 'Quality Assurance' }).first()).toBeVisible()
  //check the quality assurance button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Quality Assurance' }).first().click();
  await expect(page).toHaveTitle("Software Quality Assurance » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/quality-assurance/")
  await expect(page.getByRole('heading', { name: 'Software Quality Assurance' })).toBeVisible();
  await page.goBack()
  //check the data services button is visible
  await expect(page.getByRole('link', { name: 'Data Services' }).first()).toBeVisible()
  //check the data services button is functional and is redirected to the right Url
  await page.getByRole('link', { name: 'Data Services' }).first().click();
  await expect(page).toHaveTitle("Data Services: Data Annotation, Data Labeling, and Data Validation » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/data-services/")
  await expect(page.getByRole('heading', { name: 'Data Services: Data Annotation, Data Labeling, and Data Validation' })).toBeVisible();
  await page.goBack()
})

test("Discover How We Can Help section title", async ({page}) => {
  //check section title name is visible
  await expect(page.getByRole('heading', { name: 'Discover How We Can Help' })).toBeVisible();
  //Validate link is functional
  await page.getByRole('link', { name: 'Quality Assurance, End-To-End' }).click();
  await expect(page).toHaveTitle("Software Quality Assurance » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/quality-assurance/")
  await page.goBack()
})
  test("Validate the Discover How We Can Help section including the All Services", async ({page}) => {
  //validate all services links are functional & are redirected to the right Url
  await expect(page.getByRole('heading', { name: 'All Services' })).toBeVisible()
  await page.locator('a').filter({ hasText: /^Audio Testing$/ }).click();
  await expect(page).toHaveTitle("Audio & Hardware Testing: Speakers, Headphones, & Connectivity » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/audio-testing/")
  await expect(page.getByRole('heading', { name: 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity' })).toBeVisible();
  await page.goBack()
  await page.getByRole('link', { name: 'Accessibility Testing &' }).click();
  await expect(page).toHaveTitle("Accessibility Testing: Design, UX, Usability, & WCAG Conformance » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/accessibility/")
  await expect(page.getByRole('heading', { name: 'Accessibility Testing: Design' })).toBeVisible();
  await page.goBack()
  await page.getByRole('link', { name: 'Software Quality Assurance' }).click();
  await expect(page).toHaveTitle("Software Quality Assurance » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/quality-assurance/")
  await expect(page.getByRole('heading', { name: 'Software Quality Assurance' })).toBeVisible();
  await page.goBack()
  await page.getByRole('listitem').filter({ hasText: /^Data Services$/ }).getByRole('link').click();
  await expect(page).toHaveTitle("Data Services: Data Annotation, Data Labeling, and Data Validation » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/data-services/")
  await expect(page.getByRole('heading', { name: 'Data Services: Data Annotation, Data Labeling, and Data Validation' })).toBeVisible();
  await page.goBack()
  await page.getByRole('link', { name: 'Web Design & Development' }).click();
  await expect(page).toHaveTitle("Web Design & Development » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/services/web-design-development/")
  await expect(page.getByRole('heading', { name: 'Web Design & Development' })).toBeVisible();
  await page.goBack()
})
  
  
  

test("Validate the Our Expertise Section", async ({page}) => { 
  await expect(page.locator('section').filter({ hasText: 'Our Expertise Our tech' }).getByRole('heading')).toBeVisible();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveTitle("Services » Aspiritech Aspiritech Offers QA Services.")
  await expect(page).toHaveURL("https://aspiritech.org/services/")
  await expect(page.getByRole('heading', { name: 'Services' , exact: true})).toBeVisible();
  await page.goBack();
})

test("Validate the Aspiritech Video playback", async ({page}) => {
  //play video
  await expect(page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('link', { name: 'Photo image of Aspiritech' })).toBeVisible();
  await expect(page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('link', { name: 'Meet Aspiritech | Onshore SQA' })).toBeVisible();
  await page.locator('iframe[title="youtube Video Player"]').contentFrame().getByRole('button', { name: 'Play' }).click();
  await page.locator('iframe[title="youtube Video Player"]').contentFrame().locator('video').click();
})

test("Validate the Our Team Section", async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
  await page.getByRole('link', { name: 'About Aspiritech' }).click();
  await expect(page).toHaveTitle("About Us » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/about-us/")
  await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  await page.goBack()
})

test("Validate the Our Philosophy Section", async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Our Philosophy' })).toBeVisible();
  await page.getByRole('link', { name: 'Our Story' }).nth(1).click();
  await expect(page).toHaveTitle("Our Story » Aspiritech")
  await expect(page).toHaveURL("https://aspiritech.org/our-story/")
  await expect(page.getByRole('heading', { name: 'Our Story' })).toBeVisible();
  await page.goBack()
  
})

test("Validate the News & Resources section", async ({page}) => {
await expect(page.getByRole('heading', { name: 'News & Resources' })).toBeVisible();
// Grab the first Elementor posts container
  const postsContainer = page.locator('.elementor-posts-container').first();

  // Within that container, assume articles are marked with <article> tags.
  const articles = postsContainer.locator('article');

  // Get the total number of articles found in that container
  const articleCount = await articles.count();
  console.log(`Found ${articleCount} articles in the container.`);

  // Loop over the first three articles (or less if fewer exist), and log some text from each
  for (let i = 0; i < Math.min(articleCount, 3); i++) {
    const article = articles.nth(i);
    // Optionally, do something with each article. For example, log its inner text.
    const articleText = await article.innerText();
    console.log(`Article ${i + 1}: ${articleText}`);
  }
})
})
