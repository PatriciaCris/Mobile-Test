const homeScreen = require("../screens/home.screen");

describe('Access Admin Panel', () =>{
    it('Should login with valid credentials', async () => {
        //await homeScreen.enterStoreAddress.click()
        await homeScreen.goToLogin()

        //setTimeout(() => {
            //console.log('abriu')
        //}, 10000)
    });
})