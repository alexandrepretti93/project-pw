const { POManager } = require('../pageobjects/POManager');
const portalConfig = require('../portal.config');
const { test, page, expect } = require('@playwright/test');

test.beforeAll(async () => {
    // Set timeout for this hook.
    test.setTimeout(60000);
});

test('Verify all butons are clickable', async ({browser}) => 
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    let poManager = new POManager(page);
    let homePage = poManager.MHomePage;
    //let appsPage = poManager.MAppsPage;


    await homePage.navigateToHomePage();
    await homePage.clickHome();
    await homePage.clickApps();
    await homePage.clickAbout();
    await homePage.clickBlog();
    
}
);
