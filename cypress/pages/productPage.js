class productPage{

    elements = {
        sizeM: () => cy.get('#option-label-size-143-item-168'),
        colorBlack: () => cy.get('#option-label-color-93-item-49'),
        addToCartButton: () => cy.get('#product-addtocart-button'),
        successMessage: () => cy.get('.message-success'),
        showCart: () => cy.get('.showcart'),
        waitForCart: () => cy.get('#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name'),
        proceedToCheckoutButton: () => cy.get('#top-cart-btn-checkout'),
    }

    chooseSizeM(){
        this.elements.sizeM().click()
    }

    chooseColorBlack(){
        this.elements.colorBlack().click()
    }

    clickAddToCart(){
        this.elements.addToCartButton().click()
        this.elements.successMessage()
    }

    showCart(){
        this.elements.showCart().click()
        this.elements.waitForCart()
    }

    proceedToCheckout(){
        this.elements.proceedToCheckoutButton().click()
    }
}

module.exports = new productPage();