const portalConfig = require('../portal.config');
const { Page, BrowserContext } = require('playwright');
const { join } = require('path');

class BasePage {

  constructor (page)
  {
    this.page = page
  }

  async navigateTo(url){
    const appURL = url ? (portalConfig.BASE_URL += url) : portalConfig.BASE_URL;

    return this.page.goto(appURL);
  }

  async navigateToAnyPage(appURL){
    const url = appURL;
    return this.page.goto(url);
  }

  async screenshot(name){
    return this.page.screenshot({ path: join('screenshots', `${name}.png`) });
  }
}

module.exports = { BasePage };