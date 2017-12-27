'use strict';

var AuthenticationPage = function() {
    var emailInput = $('#email');
    var passwordInput = $('#passwd');
    var submitButton = $('#SubmitLogin');

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=authentication');
    }

    this.getCurrentUrl = function(url) {
         return browser.getCurrentUrl()
    };

    this.submitLogin = function () {
        submitButton.click();
    }

    this.typeEmail = function(email){
        emailInput.sendKeys(email);
    }

    this.typePassword = function(password){
        passwordInput.sendKeys(password);
    }

    this.failMessage = function() {
        return $('#center_column > div > ol > li').getText();
    }

    this.limparCacheBrowser = function(){
       browser.restart() 
    }
}

module.exports = AuthenticationPage;