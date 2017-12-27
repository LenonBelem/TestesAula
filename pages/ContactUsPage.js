'use strict';

var ContactUsPage = function() {
    var subjectSelect =  $('#id_contact');
    var emailInput = $('#email');
    var orderInput = $('#id_order');
    var messageInput = $('#message');
    var submitButton = $('#submitMessage');

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=contact');
    }

    this.submitMessage = function () {
        submitButton.click();
    }

    this.sendMessage = function(subject, email, order, message) {
        subjectSelect.sendKeys(subject);
        emailInput.sendKeys(email);
        orderInput.sendKeys(order);
        messageInput.sendKeys(message);
        submitButton.click();
    }

    this.getSubjectSelect = function() {
        return subjectSelect;
    }

    this.getEmailInput = function() {
        return emailInput;
    }

    this.getOrderInput = function() {
        return orderInput;
    }

    this.getMessageInput = function() {
        return messageInput;
    }

    this.failMessage = function() {
        return $('#center_column > div > ol > li').getText();
    }

    this.successMessage = function() {
        return $('#center_column > p').getText();
    }
}

module.exports = ContactUsPage;