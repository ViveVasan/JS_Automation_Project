const  constants= require('../constants');

class ELementUtil{

    doClick(ELement){
        Element.waitForDisplayed()
        Element.click()
    }

    doSetValue(element){
        element.waitForDisplayed()
        element.setValue(element)
    }

    doGetText(element){
        element.waitForDisplayed()
         return element.getText()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()

    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 10000, 'title is not displayed after the given time '
     )
        return browser.getTitle()
    }




}

module.exports = new ELementUtil()