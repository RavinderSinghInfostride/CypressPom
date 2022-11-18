import HomePage from "../pages/HomePage"
const homepage = new HomePage()
Cypress.Commands.add("browserSetupAndLogin", () => {
    cy.visit('https://www.demoblaze.com/')
    cy.url().should('include', 'https://www.demoblaze.com/')
    homepage.userSignUp()
    homepage.userLogin()
    cy.wait(2000)
 });