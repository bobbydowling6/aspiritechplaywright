# Aspiritech Playwright Test Suite

A comprehensive end-to-end testing suite for the Aspiritech website using Playwright, covering quality assurance, accessibility, data services, and more.

## Overview

This project contains automated tests for the [Aspiritech](https://aspiritech.org) website, which provides professional tech services powered by neurodiversity. The test suite validates functionality, accessibility, and user experience across the entire site.

## Features

- **Multi-browser testing**: Tests run on Chromium, Firefox, and WebKit
- **Accessibility testing**: Validates WCAG conformance and accessible design
- **Comprehensive coverage**: Tests for:
  - Home page functionality
  - Services (Quality Assurance, Accessibility, Data Services)
  - Team information (Leadership, Advisory Board, Team Members)
  - Company information (About Us, Our Story, Careers)
  - Support and engagement (Support Our Mission, Contact Us)

## Project Structure

```
aspiritech-playwright/
├── tests/
│   ├── home.spec.ts                    # Home page tests
│   ├── Our Story/
│   │   ├── about-us.spec.ts
│   │   ├── advisory-board.spec.ts
│   │   ├── careers.spec.ts
│   │   ├── leadership.spec.ts
│   │   ├── our-story.spec.ts
│   │   ├── support-our-mission.spec.ts
│   │   └── team-members.spec.ts
│   ├── Services/
│   │   ├── accessibility-ux.spec.ts
│   │   ├── audio-hardware.spec.ts
│   │   ├── casestudies-clients.spec.ts
│   │   ├── contact-us.spec.ts
│   │   ├── data-services.spec.ts
│   │   ├── faqs.spec.ts
│   │   ├── neurogrowth-training.spec.ts
│   │   ├── quality-assurance.spec.ts
│   │   ├── services.spec.ts
│   │   └── web-design-development.spec.ts
├── playwright-report/                  # HTML test reports
├── test-results/                        # Test result artifacts
├── photos/                              # Screenshot captures
├── playwright.config.ts                 # Playwright configuration
└── package.json                         # Project dependencies

```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aspiritech-playwright.git
cd aspiritech-playwright
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The project is configured in `playwright.config.ts` with:
- **Base URL**: https://aspiritech.org
- **Timeout**: 120 seconds per test
- **Retries**: 2 retries on CI environment, 0 locally
- **Reporters**: HTML test reports
- **Screenshots**: Captured on test failure
- **Videos**: Retained on failure for debugging
- **Tracing**: Enabled for failed tests

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests by browser:
```bash
npm run test:chromium    # Chromium only
npm run test:firefox     # Firefox only
npm run test:webkit      # WebKit only
```

### Run tests with UI mode:
```bash
npm run test:ui
```

### Run tests marked with @first tag:
```bash
npm run test:first
```

### Run tests against local environment:
```bash
npm run test:local
```
This runs tests against `http://localhost:4200` instead of production.

### Generate and view HTML report:
```bash
npm run test:report
```

## Test Output

After running tests, view the HTML report:
```bash
npx playwright show-report
```

The report includes:
- Test pass/fail status
- Execution time
- Screenshots on failure
- Video recordings on failure
- Trace files for debugging

## Development

### Adding New Tests

1. Create a new `.spec.ts` file in the appropriate folder under `tests/`
2. Import Playwright test utilities:
```typescript
import { test, expect } from '@playwright/test';
```

3. Write your tests:
```typescript
test.describe("Feature Name", () => {
  test("should do something", async ({ page }) => {
    await page.goto("/path");
    await expect(page).toHaveTitle("Expected Title");
  });
});
```

### Running Tests in Watch Mode

Currently, Playwright doesn't have a built-in watch mode, but you can use the UI mode for interactive development:
```bash
npm run test:ui
```

## CI/CD Integration

The test suite is configured for CI/CD environments:
- Tests run with 1 worker on CI (no parallelization)
- Automatic retries (2) on CI failures
- Stricter enforcement (forbids `test.only`)
- Parallel execution disabled to prevent resource conflicts

## Dependencies

- **@playwright/test**: ^1.52.0 - Main testing framework
- **@types/node**: ^22.15.24 - TypeScript types for Node.js

## Troubleshooting

### Tests timing out
- Increase timeout in `playwright.config.ts` if tests are legitimately slow
- Check network connectivity to https://aspiritech.org

### Browser installation issues
```bash
npx playwright install
```

### Clear test artifacts
```bash
rm -rf test-results/ playwright-report/
```

## Contributing

1. Create a new branch for your changes
2. Write or update tests
3. Run the full test suite locally
4. Commit with clear messages
5. Push to GitHub and create a pull request

## Contact

For questions or issues, please reach out to the Aspiritech team or open an issue in the GitHub repository.

## License

Please refer to the LICENSE file in the repository for licensing information.
# aspiritech-playwright
