class checkoutPaymentPage{
    
    elements = {
        placeOrderButton: () => cy.contains('Place Order')
    }

    clickPlaceOrderButton(){
        this.elements.placeOrderButton().click()
    }
}

module.exports = new checkoutPaymentPage();