'use strict';
var IndexNewsletterPage = require('../pages/IndexNewsletterPage.js')

describe('Newsletter Cenarios', function () {
    var page;

    beforeEach(function () {
        page = new IndexNewsletterPage();
        page.get();
    })

    it('Deve mostrar mensagem se não informar o email', function () {
        page.submitEmail();
        expect(page.failMessage()).toEqual(" Newsletter : Invalid email address.");
    });

    it('Deve mostrar mensagem se email inválido', function () {
        page.sendEmail('','xxx', '','');
        expect(page.failMessage()).toEqual(" Newsletter : Invalid email address.");
    });

    it('Deve mostrar mensagem de sucesso se email é preenchido corretamente', function () {
        page.sendEmail('x@x.com');
        expect(page.successMessage()).toEqual(" Newsletter : You have successfully subscribed to this newsletter.");
    });
});