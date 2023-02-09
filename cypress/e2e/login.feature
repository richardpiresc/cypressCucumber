Feature: Compra no site da amazon

  Scenario Outline: Efetuar o login e realizar uma compra
    Given que estou na pagina da amazon
    And efetuo o login com "<email>" e "<senha>"
    And pesquiso por "Nike" e adiciono a primeira opcao ao carrinho
    When estou na tela do carrinho fecho o pedido
    And mantenho o endereco atual e seleciono enviar
    Then seleciono boleto como pagamento e valido envio do email
  
  Examples:
  | email                     | senha           |
  | scan.teste.2019@gmail.com | Scansource2022  |
