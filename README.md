# Cypress Test Automation Guide

1. *Prerequisites*
   - First of all, you must have Node.js (version 12 or later) installed on your computer to be able to test on Cypress.

2. *Installation Steps*
   - I automated this test in Cypress. To install it:
     1. Create an empty folder on your computer.
     2. Open your IDE (such as Visual Studio Code).
     3. Drag the folder you just created and drop it into your IDE.
     4. Open a new terminal and write:
       npm init -y
       
     5. Once you have the package.json file, write:
       npm install cypress@14.0.0
       
     6. You are now ready to use Cypress. To open Cypress, write:
       npx cypress open
       
     7. Choose end-to-end testing and follow the steps.

3. *Setup*

   -To get my Cypress project you can either have a zip.file or copy "https://github.com/mertakdemir/OdevoTest.git" and open command prompt on your computer then write: git clone https://github.com/mertakdemir/OdevoTest.git
   
   - No additional plugins or dependencies are needed. Simply open Cypress and run the test:
     
     ..\e2e\Odevo_Tests\Shopping_Process.cy.js
     

## Structure

1. I created a framework according to the *Page Object Model*.
2. Inside the e2e/Odevo_Pages folder, you can find the Web Element locators returned by methods.
3. I imported the classes to my runner and created objects in my runner page named Shopping_Process.cy.js, located under e2e/Odevo_Test.
4. My test is named *Shopping Process*, where you can see all my automation codes.
5. The test has four parts: *Login, **Shopping, **Checkout, and **Verification & Finish The Shopping*.
6. Each Web Element locator has a corresponding method returning the elements.
7. Thanks to the *Page Object Model*, the code is more readable and easier to maintain and update.

## Limitations

1. Locator Issues:
   - Using :nth-child to locate web elements might cause conflicts in the future. If better locators (like unique IDs) were used, handling changes would be easier. Changes in the developer's code may cause test automation to fail, so a better structure for Web Element locators is necessary.
