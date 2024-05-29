const { faker } = require('@faker-js/faker');

class comprarProdutos {

    preencherDadosCompra() {
        cy.get('#billing_first_name').clear().type(faker.name.firstName())
        cy.get('#billing_last_name').clear().type(faker.name.lastName())
        cy.get('#billing_company').clear().type(faker.company.name())
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type("Andrades Neves, " + "601")
        cy.get('#billing_city').clear().type("Natal")
        cy.get('#select2-billing_state-container').click().type('Rio Grande do Norte').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type("96200-006")
        cy.get('#billing_phone').clear().type(faker.phone.number('+55 ## ##### ####'))
        cy.get('#billing_email').clear().type(faker.internet.email())
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

    }
}
export default new comprarProdutos()