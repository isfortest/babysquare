  describe('template spec', () => {
    it('Should consulter la tab de mes annonces', () => {
      cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');
      cy.get('.baTaHaLz img').click();
      cy.get('input[placeholder=\'Entrer votre adresse mail\']').click()
          .type('test0@hotmail.xyz');
      cy.get('input[autocomplete=\'new-password\']').click().type('Testeur0@');
      cy.get('.baTaKaUz button').click();
      cy.get('.baTaHaLz img').click();
      cy.get('.baTaJiaC').click();
      cy.location("href").should('eq','https://www.babysquare.fr/version-test/profil?tab=Annonces')

    })
})