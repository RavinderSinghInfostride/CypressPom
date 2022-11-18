import HomePage from "../../pages/HomePage"
const homePage = new HomePage()

it("To verify user is able to contact through form", ()=> {
    cy.browserSetupAndLogin()
    homePage.contactNewMessage()
})