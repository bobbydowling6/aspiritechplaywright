import { test, expect } from '@playwright/test';

test.describe("Careers Page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/careers/")
  })
test("Validate Employment Opportunities at Aspiritech Section", async ({page}) => {
    await expect(page).toHaveTitle("Careers – Aspiritech")
    await expect(page).toHaveURL("/careers/")
    await expect(page.getByRole('heading', { name: 'Careers', exact: true })).toBeVisible();
    await expect(page.locator('#content')).toContainText('We are one of the largest employers of autistic adults in North America. We are passionate about people, purpose, and the power of neurodiversity. We strive to create an uplifting environment where our team members can reach their fullest potential. We would love to have you join us.');
    await expect(page.getByRole('heading', { name: 'Employment opportunities at' })).toBeVisible();
    await page.getByRole('link', { name: 'Apply now' }).click();
    await expect(page).toHaveTitle('Aspiritech NFP - Job Opportunities')
    await expect(page).toHaveURL('https://recruiting.paylocity.com/recruiting/jobs/All/0df4d513-4853-4c4a-bcc1-39be454dd04d/Aspiritech-NFP')
    await page.goBack()
})
test("Aspiritech Careers: FAQ", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Aspiritech Careers: FAQ' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'What is the prerequisite' })).toBeVisible();
    await expect(page.getByLabel('What is the prerequisite').getByRole('paragraph')).toContainText('Aspiritech was built to meet the employment needs of individuals on the autism spectrum. While we highly value college coursework or relevant experience, it is not required. We look for the skills that will help you be successful on our client projects.');
    await page.getByRole('button', { name: 'How much does training cost?' }).click();
    await expect(page.getByLabel('How much does training cost?').getByRole('paragraph')).toContainText('Training is provided at no cost.');
    await page.getByRole('button', { name: 'What does the training' }).click();
    await expect(page.getByLabel('What does the training')).toContainText('What does the training program entail? Part I. 3-day Introductory Quality Assurance eLearning course: online synchronous and asynchronous • Part II. 2-day Soft Skills eLearning modules: online synchronous and asynchronous • Part III. 3-day Project Training: hands-on project work with real-time coaching could be remote or onsiteThe training period is also a time for the candidate to decide whether this type of work is a good fit for him/her/them, and for Aspiritech to assess whether the candidate is a good fit for our team.Please note that the completion of the training program does not automatically guarantee employment');
    await page.getByRole('button', { name: 'How are the trainees selected' }).click();
    await expect(page.getByLabel('How are the trainees selected').locator('span')).toContainText('Qualified candidates will be invited for an in-person interview and given a short series of assessments for evaluation. Trainees will be selected based on their experience, skills, interview, assessments, and references');
    await page.getByRole('button', { name: 'What type of support' }).click();
    await expect(page.getByLabel('What type of support').getByRole('paragraph')).toContainText('Aspiritech employs a dedicated team to provide guidance and workplace support. Employees are expected to be 90-95% independent, needing only very limited support. However, our accommodating and understanding environment (including a sensory break-room, fidget cubes, etc.) is designed to help alleviate stress. We also provide social and team building activities through our Stepping Up & Out (SUO) program.');
    await page.getByRole('button', { name: 'Can people work remotely (' }).click();
    await expect(page.getByLabel('Can people work remotely (').getByRole('paragraph')).toContainText('We do offer remote opportunities based on available client work. Reach out to hr@aspiritech.org to find out if there are remote openings at this time.');
    await page.getByRole('button', { name: 'Does completion of the' }).click();
    await expect(page.getByLabel('Does completion of the').locator('span')).toContainText('Some trainees who successfully complete training will join Aspiritech as part-time Software Quality Assurance Analysts. As a service provider, we are dependent on our clients for work. Over the past two years, our client base has grown and we have been increasingly able to offer those employees who are able to work across a variety of projects as many hours as they want.');
    await page.getByRole('button', { name: 'Are there opportunities for' }).click();
    await expect(page.getByLabel('Are there opportunities for').getByRole('paragraph')).toContainText('Yes, most of our QA leads were originally analysts. We can provide additional training, and our goal is advancement for anyone interested. We also offer skills training for additional QA certifications. We are a mission-driven, client-focused business.');
})
test("Aspiritech Job Opportunities Form", async ({page}) => {
    await expect(page.locator('iframe[title="Form 1"]').contentFrame().getByRole('group').filter({ hasText: 'Aspiritech Job Opportunities' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Aspiritech provides a variety' })).toBeVisible();
})
test("Validate Social Programs section", async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Social Programs' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Aspiritech offers social programs for staff and community members through its Stepping Up and Out program, also affectionately known as SUO. SUO activities take place both digitally and in-person as safety allows. For more information about our social programs, please email us at SUO@aspiritech.org or visit the SUO page of our website. You can also check out the events calendar for upcoming outings that are open to the public.');
    await expect(page.getByRole('link', { name: 'SUO@aspiritech.org' })).toBeVisible();
    await page.getByRole('link', { name: 'SUO page of our website' }).click();
    await expect(page).toHaveTitle('About the Stepping Up & Out (SUO) Program – Aspiritech')
    await expect(page).toHaveURL("/stepping-up/about-the-stepping-up-out-suo-program/")
    await expect(page.getByRole('heading', { name: 'About the Stepping Up & Out (' })).toBeVisible();
    await page.goBack()
    await page.locator('section').filter({ hasText: 'Social ProgramsAspiritech' }).locator('img').first().screenshot({path: 'photos/suoprogram1.png'})
    await page.locator('section').filter({ hasText: 'Social ProgramsAspiritech' }).locator('img').nth(1).screenshot({path: 'photos/suoprogram2.png'})
    await page.locator('section').filter({ hasText: 'Our team members are the' }).locator('img').screenshot({path: 'photos/ourteammembers.png'})
    await expect(page.locator('#content')).toContainText('Our team members are the heart of everything we do. Find out what they have to say about working here.');
    await page.getByRole('link', { name: 'Find out what they have to' }).click();
    await expect(page).toHaveTitle('Team Members – Aspiritech')
    await expect(page).toHaveURL('/team-members/')
    await expect(page.getByRole('heading', { name: 'Team Members' })).toBeVisible();
})
})