  describe('template spec', () => {
    it('Should consulter mes messages', () => {
      cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');
      cy.get('.baTaHaLz img').click();
      cy.get('input[placeholder=\'Entrer votre adresse mail\']').click()
          .type('test0@hotmail.xyz');
      cy.get('input[autocomplete=\'new-password\']').click().type('Testeur0@');
      cy.get('.baTaKaUz button').click();
      cy.get('.baTaHaLz img').click();
      cy.get('.baTaJhv').click();
      cy.location("href").should('eq','https://www.babysquare.fr/version-test/all_message')

    })
})