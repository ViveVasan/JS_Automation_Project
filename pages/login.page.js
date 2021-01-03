const elementUtil = require('../utils/elementUtil');
const ELementUtil = require('../utils/elementUtil');
const  constants= require('../constants');

class LoginPage {

    //locators:
get username(){ return $('#username')}
get password(){ return $('#password')}
get loginBtn(){ return $('#loginBtn')}
get signUpLink(){ return $('=Sign up')}

//methods
getPageTitle(){
     return elementUtil.doGetPageTitle(constants.Login_page_title)
}

isSignUpLinkExist(){
      return elementUtil.doIsDisplayed(this.signUpLink)
}

doLogin(emailId, pwd){
elementUtil.doSetValue(this.username, emailId)
elementUtil.doSetValue(this.password, pwd)
elementUtil.doClick(this.loginBtn)
}
}

module.exports = new LoginPage()