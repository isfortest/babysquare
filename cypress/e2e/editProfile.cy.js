  describe('template spec', () => {
    it('Should edit profil and get message success', () => {
      cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');
      cy.get('div[class=\'clickable-element bubble-element Image baTaHaLz\'] img').click();
      cy.get('input[placeholder=\'Entrer votre adresse mail\']').click()
          .type('test0@hotmail.xyz');
      cy.get('input[autocomplete=\'new-password\']').click().type('Testeur0@');
      cy.get('.baTaKaUz button').click();
      cy.get('.baTaJaLl').click();
      cy.get('.baTaJaKaP').click().clear().type('0699001144');
      cy.get('input[placeholder=\'Adresse \']').click().clear()
          .type('3 Rue voltaire, Courbevoie');
      cy.get('.baTaJaKs').click();
      cy.get('div[class$=\'entry-3\']').click();
      cy.get('.baTaJaLu').click();
      cy.get('div[class$=\'bubble-r-vertical-center\']').contains('Les modifications ont bien');
      cy.get('.baTaJaKaP ').invoke('val').should('eq','0699001144');
      cy.get('input[placeholder=\'Adresse \']').invoke('val')
          .should('eq','3 Rue voltaire, Courbevoie');
      cy.get('.baTaJaKs').contains('Champs Guillaume');
      //cy.get('.baTaJaKaP ').should('have.attr','placeholder','06 66 66 66 66');

    })
})