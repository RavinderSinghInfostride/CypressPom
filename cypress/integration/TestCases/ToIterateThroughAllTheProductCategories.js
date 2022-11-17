import HomePage from "../../pages/HomePage"
const homePage = new HomePage()

it("demo", ()=> {
    cy.setup()
    homePage.iterateThroughProductCategories()
})