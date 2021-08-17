describe('sampletest',()=>{
   
    it('Login to Sauce Demo', ()=>{
        expect(true).to.equal(true)
     
        cy.visit('https://www.saucedemo.com/') //visiting the url
        cy.url().should('include','saucedemo') //verifing the url
        cy.get('[data-test=username]')
        .type('standard_user') //Entering username
        .should('have.value','standard_user'); //Validating entered username
        cy.get('[data-test=password]')
        .type('secret_sauce') //Entering password
        .should('have.value','secret_sauce'); //Validating entered password
        cy.get('[data-test=login-button]').click(); //Clicking button
        cy.title().should('eq', 'Swag Labs'); //Verifying the title
     })    
 
     it('Purchasing 2 products from Sauce Demo', ()=>{
         expect(true).to.equal(true)
  
         cy.visit('https://www.saucedemo.com/') //visiting the url
        cy.url().should('include','saucedemo') //verifing the url
        cy.get('[data-test=username]')
        .type('standard_user') //Entering username
        .should('have.value','standard_user'); //Validating entered username
        cy.get('[data-test=password]')
        .type('secret_sauce') //Entering password
        .should('have.value','secret_sauce'); //Validating entered password
        cy.get('[data-test=login-button]').click(); //Clicking button
  
         cy.contains('Sauce Labs Backpack') //Verifying product
         cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click(); //Adding Product to cart
         cy.contains('Sauce Labs Bolt T-Shirt') //Verifying product
         cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click(); //Adding Product to cart
         cy.get('.shopping_cart_badge').click(); //Navigating to shopping cart
         cy.get('[data-test=checkout]').click(); //Checkout from Cart
         cy.get('[data-test=firstName]').type('First Name') //Adding details
         cy.get('[data-test=lastName]').type('Last Name')
         cy.get('[data-test=postalCode]').type('987663')
         cy.get('[data-test=continue]').click(); //Submitting the details
         cy.get('div.summary_total_label').contains('$49.66') //Verifying the value 
         cy.get('[data-test=finish]').click(); //Placing the order
         cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!'); //Verifying the message
         cy.get('[data-test=back-to-products]').click(); 
         cy.get('#react-burger-menu-btn').click();
         cy.get('#logout_sidebar_link').click(); //logging out
  
      })
 })