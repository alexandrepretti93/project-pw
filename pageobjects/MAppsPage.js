const { BasePage } = require('./BasePage');
const { expect } = require('playwright/test');

class MAppsPage extends BasePage 
{
  constructor (page)
  {
    super(page);
    this.previewUserName = this.page.locator(this.locators.previewUserName);
    this.joinButton = this.page.locator(this.locators.joinButton);
    this.meetingApp = this.page.locator(this.locators.meetingApp);
  }

  get locators() {
    return{
        "previewUserName": "#zmmtg-root > div > div.preview-new-flow > div > div.preview-video > div.preview-username",
        "joinButton":"#zmmtg-root > div > div.preview-new-flow > div > div.preview-meeting-info.empty-field > button",
        "meetingApp":"#meeting-app",
    }
};  

  async validatePageIsDisplayed(){
    //await this.joinButton.isVisible();
    await expect(this.joinButton, "Join Button is not visible").toBeVisible();
    await expect(this.previewUserName, "Preview Name is not visible").toBeVisible();
    //await expect(this.previewUserName.textContent).toBe('Alex');
  }


  async clickEnterRoom()
  {
    await this.joinButton.click();
    await this.page.waitForTimeout(35000);
    //await expect(this.meetingApp, "Meeting screen is not visible").toBeVisible();
}

}

module.exports = {MAppsPage};
