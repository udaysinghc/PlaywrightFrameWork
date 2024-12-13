const { test,expect,chromium } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require('../testData/data.json')))

export let browser;
export let page;
export let context;

test.beforeAll(async () => {
  console.log('Global setup before all tests...');
  // Perform any setup tasks needed for the test suite, e.g., initializing a server
  console.log("Connected to data base..")
});

test.beforeEach(async () => {
  console.log('Setting up before each test...');
  // Common setup before each test, like navigating to the homepage
  browser=await chromium.launch()
  context=await browser.newContext()
  page=await context.newPage()
  await page.goto(testdata.BaseURL);
});

test.afterEach(async () => {
  console.log('Cleaning up after each test...');
  // Perform cleanup tasks like clearing cookies, localStorage, or sessionStorage
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await browser.close()
});

test.afterAll(async () => {
  console.log('Global teardown after all tests...');
  // Perform any global cleanup, like shutting down a server or database connection
  console.log("Disconnect to the data base..")
  
});
