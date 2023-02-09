Cypress.Commands.add('homePage', () => {
  cy.visit('/')
})

Cypress.Commands.add('acionarLogin', () => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblLogin).should('exist').click()
  })
})

Cypress.Commands.add('acionarContinuar', () => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.btnContinuar).should('exist').click()
  })
})

Cypress.Commands.add('inserirEmail', (email) => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblAEmail).should('exist').fill(email)
  })
})

Cypress.Commands.add('inserirSenha', (senha) => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblSenha).should('exist').fill(senha)
  })
})

Cypress.Commands.add('acionarFazerLogin', () => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.btnFazerLogin).should('exist').click()
  })
})

Cypress.Commands.add('pesquisar', (senha) => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblPesquisar).should('exist').fill(senha)
  })
})

Cypress.Commands.add('pesquisar', (texto) => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblPesquisar).should('exist').fill(texto)
    cy.get(el.btnPesquisar).should('exist').click()
    cy.get(el.lblPrimeiraOpcao).should('exist').click()
    cy.get(el.btnAdicionarCarrinho).should('exist').click()
  })
})

Cypress.Commands.add('acionarFecharPedido', () => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.btnIrParaCarrinho).should('exist').click()
    cy.get(el.btnFecharPedido).should('exist').click()
  })
})

Cypress.Commands.add('validaEndereco', () => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.lblEndereco).contains("Rua Nicola Pellanda 123, casa Pinheirinho, Curitiba, PR, 81880000, Brasil, Telefone: 419999999999")
    cy.get(el.btnEnviarPara).should('exist').click()
  })
})

Cypress.Commands.add('finalizarCompra', () => {
  cy.fixture("elements").then((el)=>{
    cy.wait(5000)
    cy.get(el.lblBoleto).should('exist').click()
    cy.wait(3000)
    cy.get(el.btnUsarEstaForma).should('exist').click()
    cy.wait(5000)
    cy.get(el.btnFinalizarPedido).should('exist').click()
    cy.get(el.txtConfirmacaoEmail).contains('A confirmação será enviada para o seu e-mail.')
  })
})
