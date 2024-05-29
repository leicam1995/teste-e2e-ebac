/// <reference types="Cypress" />

import comprarProdutos from "../support/page_objects/comprarProdutos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

/* O teste abaixo foi desenvolvido com comandos customizados, page objects, faker, fixtures e variáveis para otimizar o teste, facilitar a manutenção do código e realizar um login válido, incluir o total de itens descritos na história de uso, preencher dados randômicos e fictícios no formulário de checkout e validar a compra com sucesso e a quantidade de itens no carrinho.. */

    it('Deve fazer pedido ponta a ponta na loja Ebac Shop', () => {

        let produto1 = "Ariel Roll Sleeve Sweatshirt"
        let produto2 = "Aero Daily Fitness Tee"
        let produto3 = "Atomic Endurance Running Tee (V-neck)"
        let produto4 = "Autumn Pullie"

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Red', 'Aero Daily Fitness Tee', 'S', 'Black', 'Atomic Endurance Running Tee (V-neck)', 'S', 'Yellow', 'Autumn Pullie', 'XS', 'Green')
        comprarProdutos.preencherDadosCompra()
        cy.get('.page-title').should("be.visible")
        cy.get('.woocommerce-notice', { timeout: 10000 }).should("contain", "Obrigado. Seu pedido foi recebido.")
        cy.get('tbody > :nth-child(1) > .product-name').should("contain", produto1)
        cy.get('tbody > :nth-child(2) > .product-name').should("contain", produto2)
        cy.get(':nth-child(3) > .product-name').should("contain", produto3)
        cy.get(':nth-child(4) > .product-name').should("contain", produto4)
    })
});