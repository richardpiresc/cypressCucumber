import { Given, And, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given(/^que estou na pagina da amazon$/, () => {
	cy.homePage()
});

When(/^efetuo o login com "([^"]*)" e "([^"]*)"$/, (email,senha) => {
	cy.acionarLogin()
    cy.inserirEmail(email)
    cy.acionarContinuar()
    cy.inserirSenha(senha)
    cy.acionarFazerLogin()
});

When(/^pesquiso por "([^"]*)" e adiciono a primeira opcao ao carrinho$/, (texto) => {
	cy.pesquisar(texto)
});


When(/^estou na tela do carrinho fecho o pedido$/, () => {
	cy.acionarFecharPedido()
});


When(/^mantenho o endereco atual e seleciono enviar$/, () => {
	cy.validaEndereco()
});


Then(/^seleciono boleto como pagamento e valido envio do email$/, () => {
    cy.finalizarCompra()
});








/*

Given(/^que estou no site iterasys e aciono Entrar$/, () => {
	cy.homePage()
    cy.acionarCriarConta()
});


When(/^meu nome completo "([^"]*)"$/, (seuNome) => {
	cy.inserirNome(seuNome)
});


When(/^meu email "([^"]*)"$/, (seuEmail) => {
	cy.inserirSeuEmail(seuEmail)
});


When(/^confirmo meu email "([^"]*)"$/, (confirmaEmail) => {
	cy.confirmaSeuEmail(confirmaEmail)
});


When(/^aciono o botão Proximo sou direcionado para tela de login$/, () => {
	cy.acionarProximo()
    cy.alertaPossuiConta()
});


When(/^digito meu email "([^"]*)" e senha "([^"]*)"$/, (email,senha) => {
	cy.inserirEmail(email)
    cy.inserirSenha(senha)
});


Then(/^aciono o botao Entrar$/, () => {
	cy.acionarEntrar()
});*/