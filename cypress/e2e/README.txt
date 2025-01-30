1-)First of all you must have Node.js installed on your computer to be able to test on Cypress
2-)I automated this test in Cypress and to be able to install it you need to create an empty file on your computer then you can open your Visual studio code or whichever "ide" you use
3-)You can drag the folder you just created and drop into your ide (Visual Studio Code for me)
4-)Open a new terminal and write: npm init -you
5-)Once you have the "package.json" file then you can write: npm install cypress@14.0.0
6-)You are ready to use the Cypress now. To open the Cypress, write: npx cypress open 
7-)Choose end-to-end testing and follow the steps.
8-)I have not added any plug-in or dependencies. So you dont need to either
9-)It will be enough to open Cypress and run the test by just clicking on the name of the test

--Structure--
1-)I created a framework according to "Page Object Model"
2-)I have a folder where you can find the Web Element's locator which returned by methods. The folder's name is: "Odevo_Pages" under "e2e"
3-)I imported the classes to my runner and created objects in my Runner page which name is: "Shopping_Process.cy.js". it's located under: "e2e/Odevo_Test" folder
4-)I named my test as "Shopping Process". There you can see all my automation codes.
5-)There are 4 parts which starts with "Login", then "Shopping", "Checkout", and "Verification&Finish The Shopping"
6-)I have a method which returns web elements for each web element locators
7-)By the help of the Page Object Model, the codes are more readable, can be maintain and update easier

--Limitations-
1-)The locators were the problem. ":nth-child" are used to locate the web elements in this website but it might cause a conflict in future. If there were better locators with different "id's" for instance
it could have been easier to handle. Because if developer would change something in code, then the whole test automation will fail. To not encounter with this kind of situation's, there has to be
better structure for Web Element's locators