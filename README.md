# 🎭 Playwright Test Automation Framework

[![Playwright Version](https://img.shields.io/badge/Playwright-1.42+-blue?logo=playwright)](https://playwright.dev)
[![TypeScript Version](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![CI Tests](https://github.com/QA-Master505/playwright-pom-typescript-project/actions/workflows/playwright.yml/badge.svg)](https://github.com/QA-Master505/playwright-pom-typescript-project/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/QA-Master505/playwright-pom-typescript-project?style=social)](https://github.com/QA-Master505/playwright-pom-typescript-project)

🚀 **Playwright + TypeScript** test automation framework with Page Object Model (POM) pattern. Includes best practices for scalable e2e testing with **automated CI/CD pipeline**.

---

## 📖 Contents <a id="contents"></a>

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Features](#features)
   - [Current Features](#current-features)
   - [Upcoming Features](#upcoming-features)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation & Setup](#installation-setup)
5. [Running Tests](#running-tests)
   - [Local Development Commands](#local-development-commands)
   - [Available Test Files](#available-test-files)
   - [Available Scripts](#available-scripts)
6. [Configuration Details](#configuration-details)
   - [Environment-Based Settings](#environment-based-settings)
   - [Browser Projects](#browser-projects)
   - [Customizing Configuration](#customizing-configuration)
7. [CI/CD Pipeline](#cicd-pipeline)
8. [Technologies Used](#technologies-used)
9. [Example Usage](#example-usage)
10. [Testing Best Practices](#testing-best-practices)
11. [Known Issues and Future Enhancements](#known-issues-and-future-enhancements)
12. [Contributing](#contributing)
13. [Credits](#credits)

---

## 🌟 Project Overview <a id="project-overview"></a>

**Playwright Test Automation Framework** is a comprehensive, production-ready testing solution built with **TypeScript** and following the **Page Object Model (POM)** pattern. This framework provides robust end-to-end testing capabilities with cross-browser support, parallel execution, and automated CI/CD integration.

The framework is designed for scalability and maintainability, featuring environment-specific configurations, detailed reporting, and comprehensive debugging tools for modern web applications.

![Playwright Framework Overview](https://playwright.dev/img/playwright-logo.svg)

[Go to Contents](#contents)

---

## 🧱 Project Structure <a id="project-structure"></a>

The framework follows a modular architecture designed for scalability and maintainability:

```plaintext
playwright-pom-typescript-project/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD pipeline
├── tests/
│   └── example.spec.ts             # Main test specifications
├── tests-examples/
│   └── demo-todo-app.spec.ts       # Demo test examples
├── test-results/                   # Test execution artifacts
│   ├── screenshots/                # Failure screenshots
│   ├── videos/                     # Test execution videos
│   └── traces/                     # Debug traces
├── playwright-report/              # HTML test reports
├── src/                           # Page Object Models (to be added)
│   └── pages/                     # Page object classes
├── data/                          # Test data files (to be added)
│   ├── testData.json              # Static test data
│   └── environments/              # Environment-specific data
├── utils/                         # Utility functions (to be added)
│   ├── helpers.ts                 # Common helper functions
│   └── constants.ts               # Test constants
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

### 📁 Directory Breakdown

| Directory | Purpose |
|-----------|---------|
| `.github/workflows/` | CI/CD pipeline configuration |
| `tests/` | Main test specification files |
| `tests-examples/` | Demo and example tests |
| `test-results/` | Generated test artifacts |
| `playwright-report/` | HTML reports and test summaries |
| `src/pages/` | Page Object Model classes |
| `data/` | Test data and environment configs |
| `utils/` | Shared utilities and helpers |

[Go to Contents](#contents)

---

## ✨ Features <a id="features"></a>

This framework provides comprehensive testing capabilities with modern development practices and automated workflows.

### ✅ Current Features <a id="current-features"></a>

- **Cross-Browser Testing**  
  - Support for Chrome, Edge, Firefox, and Safari (WebKit)
  - Environment-specific browser configurations

- **TypeScript Integration**  
  - Full type safety and IntelliSense support
  - Strict type checking enabled

- **Page Object Model (POM)**  
  - Structured, maintainable test architecture
  - Reusable page components and methods

- **Parallel Execution**  
  - Fast test execution with configurable worker threads
  - Optimized for both local development and CI environments

- **Rich Reporting**  
  - HTML reports with detailed test results
  - Screenshots and videos on failure
  - Trace viewer for step-by-step debugging

- **Automated CI/CD Pipeline**  
  - GitHub Actions integration
  - Automatic test execution on push/PR
  - Artifact retention and report generation

- **Environment Configuration**  
  - Separate settings for local development and CI
  - Configurable timeouts, retry logic, and execution modes

- **Debug Tools**  
  - Headed/headless mode switching
  - Slow motion execution for debugging
  - Interactive test generation with Codegen

- **Mobile Testing Support**  
  - Device emulation capabilities
  - Responsive design testing

### 🔮 Upcoming Features <a id="upcoming-features"></a>

Planned enhancements to extend framework capabilities:

- **Enhanced Page Object Models**  
  - Complete POM implementation with inheritance patterns
  - Base page classes with common functionality

- **Test Data Management**  
  - JSON-based test data files
  - Environment-specific data configurations
  - Dynamic test data generation

- **Advanced Reporting**  
  - Custom report themes and branding
  - Integration with external reporting tools
  - Performance metrics and trends

- **API Testing Integration**  
  - REST API testing capabilities
  - Combined UI and API test scenarios

- **Visual Testing**  
  - Screenshot comparison testing
  - Visual regression detection

- **Database Integration**  
  - Test data setup and teardown
  - Database validation capabilities

- **Docker Support**  
  - Containerized test execution
  - Consistent environment across teams

[Go to Contents](#contents)

---

## 🚀 Getting Started <a id="getting-started"></a>

### 📋 Prerequisites <a id="prerequisites"></a>

Ensure you have the following installed:

- **Node.js v18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### ⚙️ Installation & Setup <a id="installation-setup"></a>

1. **Clone the repository**
```bash
git clone https://github.com/QA-Master505/playwright-pom-typescript-project.git
cd playwright-pom-typescript-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Playwright browsers**
```bash
npx playwright install
```

4. **Verify installation**
```bash
npx playwright test --help
```

[Go to Contents](#contents)

---

## 🧪 Running Tests <a id="running-tests"></a>

### 🛠 Local Development Commands <a id="local-development-commands"></a>

#### Basic Test Execution
```bash
# Run all tests
npx playwright test

# Run tests with interactive UI
npx playwright test --ui

# Run tests on specific browser
npx playwright test --project=chromium

# Run specific test file
npx playwright test example

# Run tests in debug mode
npx playwright test --debug
```

#### Advanced Commands
```bash
# Run tests in headed mode (see browser)
npx playwright test --headed

# Generate tests with Codegen
npx playwright codegen

# View test report
npx playwright show-report

# Run with trace viewer
npx playwright test --trace on
```

### 📄 Available Test Files <a id="available-test-files"></a>

| Test File | Description | Command |
|-----------|-------------|---------|
| `tests/example.spec.ts` | Main end-to-end test examples | `npx playwright test example` |
| `tests-examples/demo-todo-app.spec.ts` | Demo Todo App tests | `npx playwright test demo-todo-app` |

### 📜 Available Scripts <a id="available-scripts"></a>

#### Browser-Specific Commands
```bash
# Run tests on Google Chrome (headed mode)
npx playwright test --project="Google Chrome" --headed

# Run tests on Chromium (headless)
npx playwright test --project=chromium

# Run tests on Firefox
npx playwright test --project=firefox

# Run tests on WebKit (Safari)
npx playwright test --project=webkit
```

#### Custom npm Scripts
Add these to your `package.json` for easier execution:

```json
{
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:chrome": "npx playwright test --project=\"Google Chrome\" --headed",
    "test:debug": "npx playwright test --debug",
    "test:ui": "npx playwright test --ui",
    "report": "npx playwright show-report",
    "install:browsers": "npx playwright install"
  }
}
```

**Usage:**
```bash
npm run test           # Run all tests
npm run test:headed    # Run tests in headed mode
npm run test:chrome    # Run tests on Google Chrome
npm run test:debug     # Run tests in debug mode
npm run test:ui        # Run tests in UI mode
npm run report         # Show test report
```

[Go to Contents](#contents)

---

## 🔧 Configuration Details <a id="configuration-details"></a>

### 🌍 Environment-Based Settings <a id="environment-based-settings"></a>

The framework automatically adapts configuration based on your environment:

#### Local Development Settings
- 🎭 **Multiple Browsers**: Chrome, Edge, Firefox, Safari
- 👁️ **Headed Mode**: Browser visible by default (`headless: false`)
- ⚡ **Parallel Execution**: Tests run in parallel for speed
- 🐌 **Slow Motion**: 300ms delay between actions for debugging
- 📊 **Multiple Reporters**: HTML, Line, and List reporters

#### CI/CD Environment Settings
- 🎯 **Single Browser**: Google Chrome only for consistency
- 🔇 **Headless Mode**: Browser hidden (`headless: true`)
- 🔄 **Sequential Execution**: One test at a time (`workers: 1`)
- ⚡ **No Slow Motion**: Full speed execution
- 🔁 **Auto Retry**: Failed tests retry 2 times

#### Key Configuration Options
```typescript
// Timeouts
timeout: 60000,              // 60s per test
actionTimeout: 30000,        // 30s per action
navigationTimeout: 30000,    // 30s for page loads
expect: { timeout: 10000 },  // 10s for assertions

// Media Capture
screenshot: 'only-on-failure',  // Screenshots on failures only
video: 'retain-on-failure',     // Videos saved on failures only
trace: 'on-first-retry',        // Traces on retry attempts

// Browser Settings
viewport: { width: 1920, height: 1080 }  // Full HD resolution
```

### 🌐 Browser Projects <a id="browser-projects"></a>

| Browser | Local Dev | CI/CD | Channel |
|---------|-----------|-------|---------|
| Google Chrome | ✅ | ✅ | `chrome` |
| Microsoft Edge | ✅ | ❌ | `msedge` |
| Mozilla Firefox | ✅ | ❌ | `firefox` |
| Apple Safari | ✅ | ❌ | `webkit` |

### ⚙️ Customizing Configuration <a id="customizing-configuration"></a>

#### Enable Mobile Testing
Uncomment these lines in `playwright.config.ts`:
```typescript
{
  name: 'Mobile Chrome',
  use: { ...devices['Pixel 5'] },
},
{
  name: 'Mobile Safari',
  use: { ...devices['iPhone 12'] },
},
```

#### Add Base URL
For testing a specific application:
```typescript
use: {
  baseURL: 'https://your-app.com',
  // Then use relative URLs: await page.goto('/')
}
```

#### Enable Environment Variables
```typescript
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });
```

#### Add Local Dev Server
For testing local applications:
```typescript
webServer: {
  command: 'npm run start',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
},
```

[Go to Contents](#contents)

---

## 🔄 CI/CD Pipeline <a id="cicd-pipeline"></a>

### 🤖 Automated Testing

The project includes **GitHub Actions** workflow that automatically runs tests on:
- ✅ Push to `main` or `master` branches
- ✅ Pull requests to `main` or `master` branches

### 🎯 Pipeline Features

- 🚀 **Automated browser installation** with dependencies
- ⚡ **Dependency caching** for faster builds
- 🎯 **Single browser testing** (Google Chrome) in CI for consistency
- 📊 **HTML & Line reports** generation
- 📦 **Test artifacts** retention (3 days)
- ⏱️ **Timeout protection** (15 minutes)

### 📊 Viewing CI Results

1. Go to the **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. Download test reports from the **Artifacts** section
4. View detailed HTML reports locally

### 📁 Test Artifacts Location

- **Test Results**: `test-results/` directory
- **HTML Reports**: `playwright-report/` directory  
- **Videos**: Saved in test results on failure
- **Screenshots**: Saved in test results on failure
- **Traces**: Available for failed test retries

[Go to Contents](#contents)

---

## 🛠 Technologies Used <a id="technologies-used"></a>

### 🎭 Core Testing Framework

- [![Playwright](https://img.shields.io/badge/Playwright-1.42+-blue?logo=playwright)](https://playwright.dev/) - Modern end-to-end testing framework
- [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org) - Type-safe JavaScript development

### 🌐 Browser Support

- [![Chrome](https://img.shields.io/badge/Google_Chrome-grey?logo=googlechrome&logoColor=4285F4)](https://www.google.com/chrome/) - Primary browser for CI/CD
- [![Edge](https://img.shields.io/badge/Microsoft_Edge-grey?logo=microsoftedge&logoColor=0078D4)](https://www.microsoft.com/edge) - Cross-browser compatibility
- [![Firefox](https://img.shields.io/badge/Mozilla_Firefox-grey?logo=firefox&logoColor=FF7139)](https://www.mozilla.org/firefox/) - Gecko engine testing
- [![Safari](https://img.shields.io/badge/Safari_WebKit-grey?logo=safari&logoColor=000000)](https://webkit.org/) - WebKit engine testing

### ⚙️ Development Tools

- [![Node.js](https://img.shields.io/badge/Node.js-18+-grey?logo=node.js&logoColor=339933)](https://nodejs.org/) - JavaScript runtime environment
- [![npm](https://img.shields.io/badge/npm-grey?logo=npm&logoColor=CB3837)](https://www.npmjs.com/) - Package management
- [![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-grey?logo=githubactions&logoColor=2088FF)](https://github.com/features/actions) - CI/CD automation

### 📊 Reporting & Debugging

- [![HTML Reporter](https://img.shields.io/badge/HTML_Reporter-grey?logo=html5&logoColor=E34F26)](https://playwright.dev/docs/test-reporters#html-reporter) - Rich test reports
- [![Trace Viewer](https://img.shields.io/badge/Trace_Viewer-grey?logo=playwright)](https://playwright.dev/docs/trace-viewer) - Step-by-step debugging
- [![Screenshots](https://img.shields.io/badge/Screenshots-grey?logo=camera&logoColor=000000)]() - Failure capture
- [![Video Recording](https://img.shields.io/badge/Video_Recording-grey?logo=video&logoColor=FF0000)]() - Test execution recording

[Go to Contents](#contents)

---

## 🎯 Example Usage <a id="example-usage"></a>

### 📝 Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('basic test example', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Playwright/);
  
  // Create a locator and click it
  await page.getByRole('link', { name: 'Get started' }).click();
  
  // Expect some text to be visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

### 🏗️ Page Object Model Example

```typescript
// Create a page object for better organization
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}
  
  async goto() {
    await this.page.goto('/');
  }
  
  async getStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }
}

// Use in tests
import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('using page object', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.getStarted();
});
```

### 📊 Advanced Test Patterns

```typescript
// Data-driven testing
const testData = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

testData.forEach(({ username, password }) => {
  test(`login with ${username}`, async ({ page }) => {
    // Test implementation
  });
});

// API and UI testing combination
test('full user journey', async ({ page, request }) => {
  // API setup
  const apiResponse = await request.post('/api/setup');
  
  // UI testing
  await page.goto('/dashboard');
  // Test implementation
});
```

[Go to Contents](#contents)

---

## 🧪 Testing Best Practices <a id="testing-best-practices"></a>

### 📋 Test Organization

- **Use descriptive test names** that explain what is being tested
- **Group related tests** using `test.describe()` blocks
- **Follow the AAA pattern**: Arrange, Act, Assert
- **Use Page Object Model** for maintainable test code

### 🔍 Locator Strategies

- **Prefer role-based locators**: `page.getByRole('button', { name: 'Submit' })`
- **Use data-testid for complex elements**: `page.getByTestId('user-profile')`
- **Avoid CSS selectors** unless necessary
- **Make locators resilient** to UI changes

### ⚡ Performance Optimization

- **Use parallel execution** for independent tests
- **Implement proper waits** instead of hard sleeps
- **Optimize test data setup** and cleanup
- **Use page.goto() efficiently** with appropriate wait conditions

### 🛡️ Reliability Patterns

- **Handle flaky elements** with proper waiting strategies
- **Implement retry logic** for network-dependent operations
- **Use soft assertions** when appropriate
- **Clean up test data** after each test

[Go to Contents](#contents)

---

## 🔧 Known Issues and Future Enhancements <a id="known-issues-and-future-enhancements"></a>

### 🌱 Future Enhancements

- **Complete Page Object Model Implementation**  
  - Base page classes with common functionality
  - Inheritance patterns for related pages
  - Component-based page objects

- **Enhanced Test Data Management**  
  - JSON-based test data files
  - Environment-specific configurations
  - Dynamic test data generation utilities

- **Advanced Reporting Features**  
  - Custom report themes and branding
  - Integration with external reporting tools (Allure, ReportPortal)
  - Performance metrics and trends analysis

- **API Testing Integration**  
  - REST API testing capabilities alongside UI tests
  - Combined API and UI test scenarios
  - API response validation utilities

- **Visual Testing Capabilities**  
  - Screenshot comparison testing
  - Visual regression detection
  - Cross-browser visual consistency checks

- **Docker Support**  
  - Containerized test execution environment
  - Consistent testing environment across teams
  - Easy deployment and scaling

### ⚠️ Known Issues

- **Limited Mobile Device Coverage**  
  Mobile testing configurations are available but commented out by default. Enable as needed for specific projects.

- **Basic Error Handling**  
  Current error handling relies on Playwright's built-in mechanisms. Custom error handling and recovery strategies are planned.

- **Test Data Isolation**  
  No automated test data cleanup is implemented. Tests should handle their own data setup and teardown.

- **Report Customization**  
  HTML reports use default Playwright styling. Custom themes and branding options are not yet implemented.

[Go to Contents](#contents)

---

## 🤝 Contributing <a id="contributing"></a>

We welcome contributions to improve this testing framework! Here's how you can help:

### 🚀 Getting Started

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 📋 Contribution Guidelines

- **Follow TypeScript best practices** and maintain type safety
- **Write tests** for new features and bug fixes
- **Update documentation** for any API changes
- **Ensure CI pipeline passes** before submitting PR
- **Use conventional commit messages** for clarity

### 🧪 Testing Your Changes

```bash
# Run all tests to ensure nothing is broken
npm run test

# Run tests in headed mode for debugging
npm run test:headed

# Generate and view test report
npm run report
```

**Note:** All pull requests automatically trigger the CI pipeline for validation.

[Go to Contents](#contents)

---

## 🧠 Credits <a id="credits"></a>

### 📚 Learning Resources

- **[Playwright Official Documentation](https://playwright.dev/docs/intro)**  
  Primary reference for framework capabilities and best practices

- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**  
  Essential guide for TypeScript development patterns

- **[GitHub Actions Documentation](https://docs.github.com/en/actions)**  
  Reference for CI/CD pipeline configuration and optimization

### 💡 Code Inspiration

- **[Playwright Community Examples](https://github.com/microsoft/playwright)**  
  Official examples and patterns from the Playwright team

- **[TypeScript Testing Patterns](https://github.com/microsoft/playwright/tree/main/tests)**  
  Real-world testing patterns from the Playwright repository

- **Page Object Model Best Practices**  
  Inspired by Selenium WebDriver patterns adapted for Playwright

### 🛠️ Tools and Libraries

- **Playwright Team** - For creating an exceptional testing framework
- **TypeScript Team** - For type-safe JavaScript development
- **GitHub** - For providing free CI/CD through GitHub Actions
- **Node.js Community** - For the robust JavaScript runtime ecosystem

### 🙌 Acknowledgements

- **QA Community** - For sharing testing best practices and patterns
- **Open Source Contributors** - For maintaining the tools that make this framework possible
- **Beta Testers** - For providing feedback and identifying improvements

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Test Best Practices](https://playwright.dev/docs/best-practices)

[Go to Contents](#contents)

---
