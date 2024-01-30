class homePage{

    elements = {
        heroHoodie: () => cy.contains('Hero Hoodie')
    }

    clickOnProductHeroHoodie(){
        this.elements.heroHoodie().click()
    }
}

module.exports = new homePage();