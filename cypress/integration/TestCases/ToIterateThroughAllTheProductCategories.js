import HomePage from "../../pages/HomePage"
const homePage = new HomePage()

it("Iterate through all the product categories", () => {
    cy.browserSetupAndLogin()
    homePage.iterateThroughProductCategories()
    cy.screenshot()
})