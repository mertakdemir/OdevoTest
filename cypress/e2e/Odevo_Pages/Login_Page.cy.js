class LoginPage{

    getUserNameBox(){
        return cy.get('[data-test="username"]')
    }

    getPasswordBox(){
        return cy.get('[data-test="password"]')
    }

    getLoginButton(){
        return cy.get('[data-test="login-button"]')
    }

    getConfirmationForLogin(){
        return cy.url().should('include', 'inventory')
    }

    getConfirmationForProductList(){
        return cy.get('[data-test="inventory-container"]').should('be.visible')
    }

   
}

export default LoginPage