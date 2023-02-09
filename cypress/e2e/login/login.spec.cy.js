import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


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