class checkoutShippingPage{
    
    elements = {
        customerEmail: () => cy.get('#customer-email'),
        customerFirstName: () => cy.get('input[name="firstname"]'),
        customerLastName: () => cy.get('input[name="lastname"]'),
        streetAddress: () => cy.get('input[name="street[0]"]'),
        cityName: () => cy.get('input[name="city"]'),
        stateProvince: () => cy.get('select[name="region_id"]'),
        zipCode: () => cy.get('input[name="postcode"]'),
        countryName: () => cy.get('select[name="country_id"]'),
        phoneNumber: () => cy.get('input[name="telephone"]'),
        shippingMethodBestWay: () => cy.get('#label_method_bestway_tablerate'),
        nextButton: () => cy.get('.button'),
        errorMessage: () => cy.contains('This is a required field.')

    }

    fillInEmail(emailAddress){
        this.elements.customerEmail().type(emailAddress)
    }

    fillInFirstName(firstName){
        this.elements.customerFirstName().type(firstName)
    }

    fillInLastName(lastName){
        this.elements.customerLastName().type(lastName)
    }

    fillInStreetName(streetName){
        this.elements.streetAddress().type(streetName)
    }

    fillInCityName(city){
        this.elements.cityName().type(city)
    }

    selectState(state){
        this.elements.stateProvince().select(state)
    }

    fillInZipCode(zip){
        this.elements.zipCode().type(zip)
    }

    selectCountry(country){
        this.elements.countryName().select(country)
    }

    fillInPhoneNumber(phone){
        this.elements.phoneNumber().type(phone)
    }

    selectBestWayShippingMethod(){
        this.elements.shippingMethodBestWay().click()
    }

    clickNextButton(){
        this.elements.nextButton().click()
    }

    checkErrorMessageOnMandatoryField(){
        this.elements.errorMessage().should('be.visible')
    }
}

module.exports = new checkoutShippingPage();