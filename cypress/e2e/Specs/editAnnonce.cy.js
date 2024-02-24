  describe('template spec', () => {
    it('Should edit annonce', () => {
      cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');
      cy.get('.baTaHaLz img').click();
      cy.get('input[placeholder=\'Entrer votre adresse mail\']').click()
          .type('test0@hotmail.xyz');
      cy.get('input[autocomplete=\'new-password\']').click().type('Testeur0@');
      cy.get('.baTaKaUz button').click();
      cy.get('.baTaHaLz img').click();
      cy.get('.baTaJiaC').click();
      cy.get('.baTaJaRa').find('.baTaJaQs').click();
      cy.get('.baTaJaRaG').contains('Modifier').click();
      cy.get('input[placeholder=\'Titre\']').invoke('val')
          .should('eq',"DORS-BIEN D'OCCASION MIXTE - PREMA");
      cy.get('input[placeholder=\'Titre\']').clear()
          .type("DORS-BIEN D'OCCASION MIXTE - PREMA Vert");
      cy.get('textarea[placeholder=\'Description\']').clear()
          .type("DORS-BIEN D'OCCASION \nMIXTE - PREMA DORS-BIEN D'OCCASION MIXTE - PREMA Vert");
      cy.get('input[placeholder=\'Prix\']').clear().type('2');
      cy.get("button").contains('Appliquer').click();
      cy.location('href').should('eq', 'https://www.babysquare.fr/version-test/profil?tab=Annonces');



    })
})