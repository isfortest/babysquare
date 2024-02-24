  describe('template spec', () => {
    it('Should supprimer une annonce', () => {
      cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');
      cy.get('.baTaHaLz img').click();
      cy.get('input[placeholder=\'Entrer votre adresse mail\']').type('test0@hotmail.xyz');
      cy.get('input[autocomplete=\'new-password\']').type('Testeur0@');
      cy.get('.baTaKaUz button').click();
      cy.get('.baTaHaLz img').click();
      cy.get('.baTaJiaC').click();
      cy.get('.baTaJaRa').find('.baTaJaQs').click();
      cy.get('.baTaJaRaG').contains('Supprimer').click();
      cy.get('.baTaJaSw').click();

    })
})