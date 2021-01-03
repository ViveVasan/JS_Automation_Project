const { assert } = require('chai');
const loginPage = require('../pages/login.page');
const configData = require('../config');
const constants= require('../constants');

  
describe('login page feature test', function(){

    
    it('verify login page title', function(){
        this.browser.url('./')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log(title);
        assert.equal(constants.Login_page_title, title, 'not found')

    })

    it('verify sign up link', function(){
        assert.equal(true, loginPage.isSignUpLinkExist(), ' not present')

        
    })

    it('verify login', function(){
        loginPage.doLogin(configData.username, configData.password)

    })

})