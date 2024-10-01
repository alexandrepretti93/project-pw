  const { BasePage } = require('./BasePage');
  const { expect } = require('playwright/test');
  const { ElementHandle } = require('playwright');

  class MHomePage extends BasePage 
  {

    constructor (page)
    {
      super(page);
      this.homeButton = this.page.locator(this.locators.homeButton);
      this.appsButton = this.page.locator(this.locators.appsButton);
      this.blogButton = this.page.locator(this.locators.blogButton);
      this.aboutButton = this.page.locator(this.locators.aboutButton);
      this.logInButton = this.page.locator(this.locators.logInButton);
      this.signUpButton = this.page.locator(this.locators.signUpButton);
    }

    get locators() {
      return{
          "homeButton": "#__next > div > header > div > nav > ul > li:nth-child(1) > a",
          "appsButton": "#__next > div > header > div > nav > ul > li:nth-child(2) > a",
          "blogButton": "#__next > div > header > div > nav > ul > li:nth-child(3) > a",
          "aboutButton":"#__next > div > header > div > nav > ul > li:nth-child(4) > a",
          "logInButton":"#__next > div > header > div > div.ma_items-center.ma_hidden.lg\:ma_flex > a.themed-text.rounded-btn.ghost-btn.ma_ml-3",
          "signUpButton":"#__next > div > header > div > div.ma_items-center.ma_hidden.lg\:ma_flex > a.inverted-text.rounded-btn.dark\:ma_bg-primary.ma_bg-primary-foreground.ma_ml-3",
      }
  };  

  async navigateToHomePage() {
    await this.navigateTo('/');
}

  async clickHome(){
    await this.homeButton.click();
    await expect(this.page).toHaveURL('https://www.microapp.io/pt');
  }

  async clickApps(){
    await this.appsButton.click();
    await expect(this.page).toHaveURL('https://www.microapp.io/pt/apps');
  }

  async clickBlog(){
    await this.blogButton.click();
    await expect(this.page).toHaveURL('https://www.microapp.io/pt/blog');
  }

  async clickAbout(){
    await this.aboutButton.click();
    await expect(this.page).toHaveURL('https://www.microapp.io/pt/about');
  }

  async clickSignup(){
    await this.signUpButton.click();
    await expect(this.page).toHaveURL('hhttps://microappai.us.auth0.com/');
  }

  async clicklogIn(){
    await this.logInButton.click();
    await expect(this.page).toHaveURL('https://microappai.us.auth0.com/');
  }

}

module.exports = {MHomePage};