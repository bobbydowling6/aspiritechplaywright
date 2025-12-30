import { test, expect } from '@playwright/test';

test.describe("NeuroGrowth Training Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/services/neurogrowth-training-services-for-companies-and-organizations/")
  })
test("Validate NeuroGrowth Training Services Section", async ({page}) => {
    await expect(page).toHaveTitle("NeuroGrowth Training Services: You already have a neurodiverse team – Aspiritech")
    await expect(page).toHaveURL("/services/neurogrowth-training-services-for-companies-and-organizations/")
    await expect(page.getByRole('heading', { name: 'NeuroGrowth Training Services', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('You already have a neurodiverse team. Learn how to understand the strengths of different kinds of brains to drive employee innovation, engagement, and retention.');
    await page.getByRole('link', { name: 'Discover NeuroGrowth' }).click();
    await expect(page).toHaveTitle("Home")
    await expect(page).toHaveURL("https://academy.aspiritech.org/")
    await expect(page.getByRole('heading', { name: 'NeuroGrowth Leadership Training' })).toBeVisible();
    await page.goBack()
    
})
test("Designed for Leaders section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Designed for Leaders' })).toBeVisible();
    await expect(page.locator('section:nth-child(2) > div > div > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container').first()).toBeVisible();
    await page.getByRole('link', { name: 'online learning platform' }).click();
    await expect(page).toHaveTitle("Home")
    await expect(page).toHaveURL("https://academy.aspiritech.org/")
    await expect(page.getByRole('heading', { name: 'NeuroGrowth Leadership Training' })).toBeVisible();
    await page.goBack()
    await page.getByRole('link', { name: 'Get NeuroGrowth Training' }).click();
    await expect(page).toHaveTitle("Home")
    await expect(page).toHaveURL("https://academy.aspiritech.org/")
    await expect(page.getByRole('heading', { name: 'NeuroGrowth Leadership Training' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#widget2').contentFrame().getByRole('link', { name: 'Photo image of Aspiritech' })).toBeVisible();
    await expect(page.locator('#widget2').contentFrame().getByRole('link', { name: 'How to Support Neurodivergent' })).toBeVisible();

    await page.locator('#widget2').contentFrame().getByRole('button', { name: 'Play' }).click();
    await page.locator('#widget2').contentFrame().locator('video').click();

    await expect(page.getByRole('link', { name: 'Forbes Business Councils' })).toBeVisible();
    await expect(page.getByRole('figure')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Five Ways To Embrace' })).toBeVisible();
    await page.getByRole('link', { name: 'Five Ways To Embrace' }).click();
    await expect(page).toHaveTitle('Five Ways To Embrace Neurodiversity And Drive Innovation')
    await expect(page).toHaveURL('https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/05/five-ways-to-embrace-neurodiversity-and-drive-innovation/')
    await expect(page.getByRole('heading', { name: 'Five Ways To Embrace' })).toBeVisible();
    await page.goBack()
    await expect(page.locator('#content')).toContainText('Aspiritech CEO Tara May provides actionable advice for leaders to better understand neurological differences, improve communication, and create a pathway to success for every team member.');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Read the Article' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveTitle('Five Ways To Embrace Neurodiversity And Drive Innovation')
    await expect(page1).toHaveURL('https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/05/five-ways-to-embrace-neurodiversity-and-drive-innovation/')
    await expect(page1.getByRole('heading', { name: 'Five Ways To Embrace' })).toBeVisible();
})
test("Validate Subscription Benefits section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Subscription Benefits' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Live workshops and presentations');
    await expect(page.locator('#content')).toContainText('Up to unlimited licenses for managers and employees with access to the NeuroGrowth portal');
    await expect(page.locator('#content')).toContainText('Q&A session with an autistic panel');
    await expect(page.locator('#content')).toContainText('Subscription to our monthly neurodiversity newsletter—complete with with visuals, resources, and takeaways');
})
test("Validate Courses Include section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Courses Include' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Neurodiversity 101');
    await expect(page.locator('#content')).toContainText('Workplace Supports');
    await expect(page.locator('#content')).toContainText('The Candidate Experience');
    await expect(page.locator('#content')).toContainText('Managing Neurodivergent Teams');
    await expect(page.locator('#content')).toContainText('Mental Health & Neurodiversity');
    await expect(page.locator('#content')).toContainText('Building an Inclusive Workplace');
})
test("Free Neurodiversity & the Workplace Webinar section", async ({page}) => {  
    await page.getByRole('img', { name: 'Let\'s embrace the breadth of' }).screenshot({path: 'photos/neurogrowth.png'})
    await expect(page.getByRole('heading', { name: 'Free Neurodiversity & the Workplace Webinar' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Watch our free webinar featuring Aspiritech CEO Tara May to get new insights on creating an autism-friendly work environment, providing the right accommodations, incorporating employee self-assessments, and more.');
    await page.getByRole('link', { name: 'Watch the Webinar' }).click();
    await expect(page).toHaveTitle('Neurodiversity & the Workplace Webinar – Aspiritech')
    await expect(page).toHaveURL('/services/neurogrowth-training-services-for-companies-and-organizations/neurodiversity-webinar/')
    await expect(page.getByRole('heading', { name: 'Neurodiversity & the' })).toBeVisible();
})
test("Read More About Neurodiversity at Aspiritech section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Read More About Neurodiversity at Aspiritech' })).toBeVisible();
    // Grab the first Elementor posts container
  const postsContainer = page.locator('.elementor-posts-container').first();

  // Within that container, assume articles are marked with <article> tags.
  const articles = postsContainer.locator('article');

  // Get the total number of articles found in that container
  const articleCount = await articles.count();
  console.log(`Found ${articleCount} articles in the container.`);

  // Loop over the first four articles (or less if fewer exist), and log some text from each
  for (let i = 0; i < Math.min(articleCount, 4); i++) {
    const article = articles.nth(i);
    // Optionally, do something with each article. For example, log its inner text.
    const articleText = await article.innerText();
    console.log(`Article ${i + 1}: ${articleText}`);
  }
})
test("Talk With Our Sales Team section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Talk With Our Sales Team' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Ready to connect and learn how NeuroGrowth by Aspiritech can help you create better outcomes for your team? Schedule a call with Account Development Representative Brenda Hauf or send her an email to get started.');
})
})