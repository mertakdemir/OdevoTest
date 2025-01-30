class VerificationAndFinish{

    getTheVerificationPriceOfTheProduct(){

        return cy.get('[data-test="inventory-item-price"]')
    }

    getTheVerificationTitleOfTheProduct(){

        return cy.get('[data-test="inventory-item-name"]')
    }

    getTheVerificationTextOfTheProduct(){

        return cy.get('[data-test="inventory-item-desc"]')
    }

    getTheFinishButton(){

        return cy.get('[data-test="finish"]')
    }

    getTheOrderConfirmationText(){

        return cy.get('[data-test="complete-header"]')
    }
}

export default VerificationAndFinish