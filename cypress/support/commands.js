// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (clientCode,username, password) => {
    cy.visit("https://epos.erply.com/latest/");
    cy.get('[data-testid=clientCode]').type(clientCode);
    cy.get('[data-testid=username]').type(username);
    cy.get('[data-testid=password]').type(password);
    cy.get('[data-testid=login-clockin-button]').click();
    cy.get('[data-testid="pos-item"]').click();
  })