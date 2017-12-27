'use strict';
var AuthenticationPage = require('../pages/AuthenticationPage.js')

describe('Authentication Cenarios', function () {
    var page;

    beforeEach(function () {
        page = new AuthenticationPage();
        page.get();
    })

    afterAll(function() {
     page.limparCacheBrowser()
    });

    it('Deve mostrar mensagem se não informar o email', function () {
        page.submitLogin();
        expect(page.failMessage()).toEqual("An email address required.");
    });

    it('Deve mostrar mensagem se email inválido', function () {
        page.typeEmail('xxx');
        page.submitLogin();
        expect(page.failMessage()).toEqual("Invalid email address.");
    });

    it('Deve mostrar mensagem se não informar a senha', function () {
        page.typeEmail('teste@teste.com');
        page.submitLogin();
        expect(page.failMessage()).toEqual("Password is required.");
    });

    it('Deve mostrar mensagem credenciais inválidas', function () {
        page.typeEmail('teste@teste.com');
        page.typePassword('senhainvalida');
        page.submitLogin();
        expect(page.failMessage()).toEqual("Authentication failed.");
    });

    it('Deve mostrar mensagem de sucesso se todos os campos sao preenchido corretamente', function () {
        page.typeEmail('velhobarreiro@uniritter.edu.br');
        page.typePassword('velhobarreiro');
        page.submitLogin();
        page.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toEqual("http://automationpractice.com/index.php?controller=my-account");
        });        
    });
});