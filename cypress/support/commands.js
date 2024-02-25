import 'cypress-file-upload';
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
Cypress.Commands.add('login', (username, password) => {
    console.log(username)
    cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true')
    cy.get('.baTaHaLz img').click();

    cy.get("input[placeholder='Entrer votre adresse mail']").type(username)

    // {enter} causes the form to submit
    cy.get("input[autocomplete='new-password']").type(`${password}{enter}`, { log: false })

    //click to submit form
    cy.get('.baTaKaUz button').click()

    // we should be redirected to /dashboard
    cy.url().should('include', '/profil')

    // our auth cookie should be present
    //cy.getCookie('your-session-cookie').should('exist')

})