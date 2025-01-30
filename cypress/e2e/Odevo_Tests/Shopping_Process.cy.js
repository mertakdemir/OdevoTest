/// <reference types="cypress"/>

import Checkout from "../Odevo_Pages/Checkout_Page.cy"
import LoginPage from "../Odevo_Pages/Login_Page.cy"
import ShoppingPage from "../Odevo_Pages/Shopping_Page.cy"
import VerificationAndFinish from "../Odevo_Pages/Verification&Finish_page.cy"

describe('Shopping Process', ()=> {

    const mainUrlOfThePage = "https://www.saucedemo.com/"

    it('LogIn Test', () =>{


        //LOGIN PART -> 


        const loginPage = new LoginPage()

        let userName = 'standard_user'
        let password = 'secret_sauce'

        cy.visit(mainUrlOfThePage)
        loginPage.getUserNameBox().type(userName)
        loginPage.getPasswordBox().type(password)
        loginPage.getLoginButton().click()
        loginPage.getConfirmationForLogin()
        loginPage.getConfirmationForProductList()


        //SHOPPING PART ->
       
        const shoppingPage = new ShoppingPage()


        let sauceLabsBackpackTitle;
        let sauceLabsBackpackPrice;
        let sauceLabsBackpackText;

    shoppingPage
      .productTitleLocate()
      .invoke('text')
      .then(title => {
        sauceLabsBackpackTitle = title;

        shoppingPage
          .productPriceLocate()
          .invoke('text')
          .then(price => {
            sauceLabsBackpackPrice = price;

            shoppingPage
              .productDescriptionLocate()
              .invoke('text')
              .then(text => {
                sauceLabsBackpackText = text;

                shoppingPage.addToCart().click();
                shoppingPage.getToTheCard().click();
                shoppingPage.doTheCheckOut().click();

                //CHECKOUT PART ->

                const firstName = 'Tom';
                const lastName = 'Hanks';
                const postalCode = '12312';

                const checkout = new Checkout();
                checkout.getTheFirstNameBox().type(firstName);
                checkout.getTheLastNameBox().type(lastName);
                checkout.getThePostalCodeBox().type(postalCode);
                checkout.getTheContinueButton().click();

                //VERIFICATION AND COMPLETE THE SHOPPING ->

                const verificationAndFinishPage = new VerificationAndFinish();

                verificationAndFinishPage
                  .getTheVerificationTitleOfTheProduct()
                  .invoke('text')
                  .should('equal', sauceLabsBackpackTitle);
                verificationAndFinishPage
                  .getTheVerificationPriceOfTheProduct()
                  .invoke('text')
                  .should('equal', sauceLabsBackpackPrice);
                verificationAndFinishPage
                  .getTheVerificationTextOfTheProduct()
                  .invoke('text')
                  .should('equal', sauceLabsBackpackText);

                verificationAndFinishPage.getTheFinishButton().click();

                
                verificationAndFinishPage
                  .getTheOrderConfirmationText()
                  .invoke('text')
                  .should('equal', 'Thank you for your order!');
              });
          });
      });



        


       



    })


})


