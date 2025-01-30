class ShoppingPage{

    addToCart(){

       return  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')

    }

    getToTheCard(){

        return cy.get('[data-test="shopping-cart-link"]')
    }

    doTheCheckOut(){

        return cy.get('[data-test="checkout"]')

    }

    productPriceLocate(){

        return cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')

    }

    productTitleLocate(){

        return cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        
    }

    productDescriptionLocate(){

        return cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]')

    }


}
export default ShoppingPage