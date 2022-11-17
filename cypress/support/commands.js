Cypress.Commands.add("setup", () => {
    cy.visit('https://www.demoblaze.com/')
    cy.url().should('include', 'https://www.demoblaze.com/')
 });