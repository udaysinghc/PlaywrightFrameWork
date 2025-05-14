# Playwright Test Automation Framework

This repository contains an automated testing framework built with Playwright for web application testing.

## 🚀 Features

- Page Object Model (POM) design pattern
- Test execution in multiple browsers (Chromium, Firefox, WebKit)
- Parallel test execution
- Detailed HTML reports
- Screenshot capture on test failure
- Environment configuration management

## 📋 Prerequisites

Before running the tests, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:
```bash
cd PlaywrightFrameWork
```

3. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running Tests

To run all tests:
```bash
npx playwright test
```

To run tests in headed mode:
```bash
npx playwright test --headed
```

To run tests in a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

To run a specific test file:
```bash
npx playwright test HomePage.spec.js
```

To run tests in different environments:
```bash
# Run tests in development environment
 $env:TEST_ENV="dev"; npx playwright test

# Run tests in QA environment
 $env:TEST_ENV="qa"; npx playwright test

# Run tests in staging environment
 $env:TEST_ENV="staging"; npx playwright test

# Run tests in production environment
 $env:TEST_ENV="prod"; npx playwright test
```

## 📁 Project Structure

```
PlaywrightFrameWork/
├── src/
│   ├── pages/           # Page Object files
│   │   └── *.page.js    # Page object classes
│   ├── setup/          # Setup configurations
│   ├── testData/       # Test Data files
│   │   ├── dev/        # Development environment data
│   │   ├── qa/         # QA environment data
│   │   └── prod/       # Production environment data
│   ├── tests/          # Test files
│   │   └── *.spec.js   # Test specifications
│   └── utils/          # Utility functions and helpers
├── allure-results/     # Allure report data
├── allure-report/      # Generated Allure reports
├── node_modules/       # Project dependencies
├── playwright.config.js # Playwright configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## 📝 Writing Tests

Tests are written using the Playwright test runner. Here's a basic example:

```javascript
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('basic test', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.performAction();
  await expect(page).toHaveTitle('Expected Title');
});
```

## 📊 Test Reports

After test execution, HTML reports are automatically generated. To view the last report:
```bash
npx playwright show-report
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details