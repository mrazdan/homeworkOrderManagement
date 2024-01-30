class checkoutConfirmationPage{
    
    elements = {
        confirmationMessage: () => cy.get('.checkout-success')
    }

    checkConfirmationMessage(){
        this.elements.confirmationMessage().should('be.visible')
    }
}

module.exports = new checkoutConfirmationPage();