import HomePage from "../../pages/HomePage"
const homePage = new HomePage()

it("To verify user is able to sign up", ()=> {
    cy.setup()
    homePage.userSignUp()
    homePage.userLogin()
})