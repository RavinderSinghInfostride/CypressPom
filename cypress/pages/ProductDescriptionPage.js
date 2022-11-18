class ProductDescriptionPage {
    productSelectedVerify = "//h2[@class='name']"
    addToCartBtnLink = "//a[contains(text(),'Add to cart')]"
    cartLink = "//a[@class='nav-link' and contains(text(),'Cart')]"

    verifySelectedProduct() {
        cy.xpath(this.productSelectedVerify).should('have.text', 'Samsung galaxy s7')
    }

    addProductToCart() {
        cy.xpath(this.addToCartBtnLink).click()
        cy.wait(3000)
    }

    navigateToCart() {
        cy.xpath(this.cartLink).click()
    }
}
export default ProductDescriptionPage