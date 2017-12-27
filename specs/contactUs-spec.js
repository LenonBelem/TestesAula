'use strict';
var ContactUsPage = require('../pages/ContactUsPage.js')

describe('ContactUs Cenarios', function () {
    var page;

    beforeEach(function () {
        page = new ContactUsPage();
        page.get();
    })

    it('Deve mostrar mensagem se não informar o email', function () {
        page.submitMessage();
        expect(page.failMessage()).toEqual("Invalid email address.");
    });

    it('Deve mostrar mensagem se email inválido', function () {
        page.sendMessage('','xxx', '','');
        expect(page.failMessage()).toEqual("Invalid email address.");
    });

    it('Deve mostrar mensagem se mensagem não for informada', function () {
        page.sendMessage('','x@x.com', '','');
        expect(page.failMessage()).toEqual("The message cannot be blank.");
    });

    it('Deve mostrar mensagem se assunto não for informada', function () {
        page.sendMessage('','x@x.com', 'order','mensagem');
        expect(page.failMessage()).toEqual("Please select a subject from the list provided.");
    });

    it('Deve mostrar mensagem de sucesso se todos os campos sao preenchido corretamente', function () {
        page.sendMessage('Webmaster','x@x.com', 'order','mensagem');
        expect(page.successMessage()).toEqual("Your message has been successfully sent to our team.");
    });
});