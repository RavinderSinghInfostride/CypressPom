import HomePage from "../../pages/HomePage"
const homePage = new HomePage()
import ProductDescriptionPage from "../../pages/ProductDescriptionPage"
const productDescriptionPage = new ProductDescriptionPage()
import CartPage from "../../pages/CartPage"
const cartPage = new CartPage()

it("Add product to cart and checkout", () => {
    cy.browserSetupAndLogin()
    homePage.navigateToPhonesProductDescriptionPage()
    productDescriptionPage.verifySelectedProduct()
    productDescriptionPage.addProductToCart()
    productDescriptionPage.navigateToCart()
    cartPage.placeOrder()
    cartPage.fillOrderDetails()
    cartPage.verifyOrderConfirm()
})