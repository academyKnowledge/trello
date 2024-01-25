// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToTrello",()=>{
  
    //intercept request 
    cy.intercept("/1/resources/templates/categories").as("login")
        cy.visit("/login");
        cy.get("#user").type("razanbalatiah96@gmail.com");
        cy.get("#login").click();
        cy.wait(3000)
        cy.origin('https://id.atlassian.com/', ()=> {
            cy.get("#password").type("qa!@#$%^&*"+"{enter}")
        })
        // wait 
    cy.wait("@login")
})

Cypress.Commands.add("findByTestId",(testId)=>{
    cy.get(`[data-testid=${testId}]`);
})