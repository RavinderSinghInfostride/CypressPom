import Chance from 'chance'
const chance = new Chance()

let signUpTestData
const username = chance.name()
let contactTestData
before(() => {
    cy.fixture('UserTestData').then((testData) => {
        signUpTestData = testData
    })
})
before(() => {
    cy.fixture('ContactTestData').then((testData) => {
        contactTestData = testData
    })
})
class HomePage {
    signUpLink = "//ul[contains(@class,'navbar-nav')]//a[contains(text(),'Sign up')]"
    signUpUsernameInputBox = "(//label[contains(text(),'Username:')]//following::input)[1]"
    signUpPasswordInputBox = "(//label[contains(text(),'Password:')]//following::input)[1]"
    signUpButton = "//button[contains(text(),'Sign up')]"
    loginLink = "//ul[contains(@class,'navbar-nav')]//a[contains(text(),'Log in')]"
    loginUsernameInputBox = "//h5[contains(text(),'Log in')]//following::label[contains(text(),'Username:')]//following::input[1]"
    loginPasswordInputBox = "//h5[contains(text(),'Log in')]//following::label[contains(text(),'Password:')]//following::input[1]"
    loginButton = "//button[contains(text(),'Log in')]"
    productCategories = "//a[@id='itemc']"
    contactLink = "//a[contains(text(),'Contact')]"
    contactEmailInputBox = "//label[contains(text(),'Contact Email:')]//following::input[1]"
    contactNameInputBox = "//label[contains(text(),'Contact Name:')]//following::input[1]"
    contactMessageInputBox = "//label[contains(text(),'Message:')]//following::textarea"
    contactSendMessageButton = "//button[contains(text(),'Send message')]"
    phonesProduct = "//a[contains(text(),'Samsung galaxy s7')]"

    userSignUp() {
        cy.xpath(this.signUpLink).click()
        cy.wait(2000)
        cy.xpath(this.signUpUsernameInputBox).type(username)
        cy.xpath(this.signUpPasswordInputBox).type(signUpTestData.password)
        cy.xpath(this.signUpButton).click()
    }

    userLogin() {
        cy.xpath(this.loginLink).click()
        cy.wait(2000)
        cy.xpath(this.loginUsernameInputBox).type(username)
        cy.xpath(this.loginPasswordInputBox).type(signUpTestData.password)
        cy.xpath(this.loginButton).click()
    }

    iterateThroughProductCategories() {
        let countOfElements
        cy.xpath(this.productCategories).then($elements => {
            countOfElements = $elements.length;
            console.log(countOfElements)
            for (let i = 0; i < countOfElements; i++) {
                cy.xpath(this.productCategories).eq(i).click()
                cy.wait(2000)
            }
        })
    }

    contactNewMessage() {
        cy.xpath(this.contactLink).click()
        cy.wait(1000)
        cy.xpath(this.contactEmailInputBox).type(contactTestData.email)
        cy.xpath(this.contactNameInputBox).type(contactTestData.name)
        cy.xpath(this.contactMessageInputBox).type(contactTestData.message)
        cy.xpath(this.contactSendMessageButton).click()
    }

    navigateToPhonesProductDescriptionPage() {
        cy.xpath(this.phonesProduct).click()
        cy.url().should('include', 'prod.html?idp_=4')
    }
}
export default HomePage