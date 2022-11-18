let orderDetailTestData
before(() => {
    cy.fixture('OrderDetailTestData').then((testData) => {
        orderDetailTestData = testData
    })
})
class CartPage {
    placeOrderButton = "//button[contains(text(),'Place Order')]"
    nameDetailPlaceOrder = "//input[@id='name']"
    countryDetailPlaceOrder = "//input[@id='country']"
    cityDetailPlaceOrder = "//input[@id='city']"
    cerditCardDetailPlaceOrder = "//input[@id='card']"
    monthDetailPlaceOrder = "//input[@id='month']"
    yearDetailPlaceOrder = "//input[@id='year']"
    purchaseButton = "//button[contains(text(),'Purchase')]"
    orderConfirmVerify = "//h2[contains(text(),'Thank you for your purchase!')]"
    orderOkButton = "//button[contains(@class,'confirm')]"

    placeOrder() {
        cy.xpath(this.placeOrderButton).click()
    }

    fillOrderDetails() {
        cy.xpath(this.nameDetailPlaceOrder).type(orderDetailTestData.name)
        cy.xpath(this.countryDetailPlaceOrder).type(orderDetailTestData.country)
        cy.xpath(this.cityDetailPlaceOrder).type(orderDetailTestData.city)
        cy.xpath(this.cerditCardDetailPlaceOrder).type(orderDetailTestData.credit_cart)
        cy.xpath(this.monthDetailPlaceOrder).type(orderDetailTestData.month)
        cy.xpath(this.yearDetailPlaceOrder).type(orderDetailTestData.year)
        cy.xpath(this.purchaseButton).click()
    }

    verifyOrderConfirm() {
        cy.xpath(this.orderConfirmVerify).should('have.text', 'Thank you for your purchase!')
        cy.xpath(this.orderOkButton).click()
    }
}
export default CartPage