const { MHomePage } = require('./MHomePage');
const { MAppsPage } = require('./MAppsPage');

class POManager {    

    constructor(page) {        
        this.page = page;
    }



    get MHomePage() {
        if(this.MhomePage == null)
        {
            this.MhomePage = new MHomePage(this.page);
        }

        return this.MhomePage;
    }

    get MAppsPage() {
        if(this.MappsPage == null)
        {
            this.MappsPage = new MAppsPage(this.page);
        }

        return this.MappsPage;
    }



}

module.exports = { POManager };