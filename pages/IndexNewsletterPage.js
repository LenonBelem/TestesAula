'use strict';

var IndexNewsletterPage = function() {
    var emailInput = $('#newsletter-input');
    var submitButton = $('.submitNewsletter');

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    }

    this.submitEmail = function () {
        submitButton.click();
    }

    this.sendEmail = function(email) {
        emailInput.sendKeys(email);
        submitButton.click();
    }

    this.getEmailInput = function() {
        return emailInput;
    }

    this.failMessage = function() {
        return $('#columns > p').getText();
    }

    this.successMessage = function() {
        return $('#columns > p').getText();
    }
}

module.exports = IndexNewsletterPage;