import homePage from "../pages/homePage"
import checkoutShippingPage from "../pages/checkoutShippingPage"
import checkoutPaymentPage from "../pages/checkoutPaymentPage"
import checkoutConfirmationPage from "../pages/checkoutConfirmationPage"
import productPage from "../pages/productPage";

describe('Order placement regression -> ', () => {

  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    homePage.clickOnProductHeroHoodie();
    productPage.chooseSizeM();
    productPage.chooseColorBlack();
    productPage.clickAddToCart();
    productPage.showCart();
    productPage.proceedToCheckout();
    checkoutShippingPage.fillInEmail(Cypress.env('EMAIL_ADDRESS'));
    checkoutShippingPage.fillInFirstName(Cypress.env('FIRST_NAME'));
    checkoutShippingPage.fillInLastName(Cypress.env('LAST_NAME'));
    checkoutShippingPage.fillInStreetName(Cypress.env('STREET_ADDRESS'));
    checkoutShippingPage.fillInCityName(Cypress.env('CITY_NAME'));
    checkoutShippingPage.selectState(Cypress.env('STATE_PROVINCE'));
    checkoutShippingPage.fillInZipCode(Cypress.env('ZIP_CODE'));
    checkoutShippingPage.selectCountry(Cypress.env('COUNTRY_NAME'));
  });

  it('verifies you can successfully fulfill an order', () => {
    checkoutShippingPage.fillInPhoneNumber(Cypress.env('PHONE_NUMBER'));
    checkoutShippingPage.selectBestWayShippingMethod();
    checkoutShippingPage.clickNextButton();
    checkoutPaymentPage.clickPlaceOrderButton();
    checkoutConfirmationPage.checkConfirmationMessage();
  });

  it('verifies you cannot fulfill an order when mandatory field is missing', () => {
    checkoutShippingPage.selectBestWayShippingMethod();
    checkoutShippingPage.clickNextButton();
    checkoutShippingPage.checkErrorMessageOnMandatoryField();
  });

});