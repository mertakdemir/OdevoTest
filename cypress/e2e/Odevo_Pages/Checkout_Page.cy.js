class Checkout{

    getTheFirstNameBox(){
        return cy.get('[data-test="firstName"]')
    }

    getTheLastNameBox(){
        return cy.get('[data-test="lastName"]')
    }

    getThePostalCodeBox(){
        return cy.get('[data-test="postalCode"]')
    }

    getTheContinueButton(){
        return cy.get('[data-test="continue"]')
    }
}

export default Checkout