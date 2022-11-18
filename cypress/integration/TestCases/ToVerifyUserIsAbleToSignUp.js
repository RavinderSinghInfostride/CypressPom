import HomePage from "../../pages/HomePage"
const homePage = new HomePage()

it("To verify user is able to sign up and login", () => {
    cy.visit("https://www.demoblaze.com/")
    homePage.userSignUp()
})