import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Run all tests sequentially (one browser/project at a time) */
  workers: process.env.CI ? 1 : undefined, // Sequential in CI, parallel locally
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI 
    ? [['html'], ['line']] 
    : [['html'], ['line'], ['list']],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    // headless: true → browser is hidden
    // headless: false → browser is visible while testing
    headless: process.env.CI ? true : false, // Use headless only in CI/CD
    
    // slows each action by specified milliseconds for better debugging
    slowMo: process.env.CI ? 0 : 300, // Reduced from 500ms for better performance
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Take screenshot only on failures */
    screenshot: 'only-on-failure',
    
    /* Record video on failure */
    video: 'retain-on-failure',
    
    /* Timeout for each test */
    actionTimeout: 30000, // 30 seconds
    
    /* Navigation timeout */
    navigationTimeout: 30000, // 30 seconds
  },

  /* Configure projects for major browsers */
  projects: process.env.CI
  ? [
      // CI Environment - Only Google Chrome for consistency
      {
        name: 'Google Chrome',
        use: { 
          ...devices['Desktop Chrome'], 
          channel: 'chrome',
          viewport: { width: 1920, height: 1080 },
        },
      },
    ]
  : [
      // Local Development - Multiple browsers for comprehensive testing
      {
        name: 'Google Chrome',
        use: { 
          ...devices['Desktop Chrome'], 
          channel: 'chrome',
          viewport: { width: 1920, height: 1080 },
        },
      },
      {
        name: 'Microsoft Edge',
        use: { 
          ...devices['Desktop Edge'], 
          channel: 'msedge',
          viewport: { width: 1920, height: 1080 },
        },
      },
      {
        name: 'Mozilla Firefox',
        use: { 
          ...devices['Desktop Firefox'], 
          browserName: 'firefox',
          viewport: { width: 1920, height: 1080 },
        },
      },
      {
        name: 'Apple Safari',
        use: { 
          ...devices['Desktop Safari'], 
          browserName: 'webkit',
          viewport: { width: 1920, height: 1080 },
        },
      },
      
      /* Uncomment for mobile testing */
      // {
      //   name: 'Mobile Chrome',
      //   use: { ...devices['Pixel 5'] },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: { ...devices['iPhone 12'] },
      // },
    ],

  /* Global test timeout */
  timeout: 60000, // 60 seconds per test

  /* Expect timeout for assertions */
  expect: {
    timeout: 10000, // 10 seconds for expect assertions
  },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  /* Output directory for test results */
  outputDir: 'test-results/',
  
  /* Directory for storing test artifacts */
  // testIdAttribute: 'data-testid', // Use data-testid attribute for element selection
});