
describe('Mon test', () => {
  it('Should ajouter un avis sur un Membre', () => {
    // Visiter la page web
    cy.visit('https://www.babysquare.fr/version-test/cormeilles/debug_mode=true');

    // Cliquez sur l'élément avec le XPath fourni
    cy.get('div.clickable-element.bubble-element.Image.baTaHaLz img').click();

    // Entrez l'adresse e-mail
    cy.get('input[placeholder="Entrer votre adresse mail"]').type('test0@hotmail.xyz');

    // Entrez le mot de passe
    cy.get('input[placeholder="Entrez votre mot de passe"]').type('Testeur0@');

    // Cliquez sur le bouton "Se connecter"
    cy.get('.clickable-element.bubble-element.Button.baTaKaUy').click();

    // Attendez 2 secondes (similaire à Thread.sleep(2000))
    cy.wait(2000);
    // Choisir type à rechercher
    cy.get('.baTaHiaX').click();
    cy.get('.baTaJaZx').click();
    cy.get('input[placeholder=\'Rechercher\']').last().type('Prenomtest2');
    cy.get('.baTaHaLv').click();
    cy.get('.baTaHnd').contains('Prenomtest2').click();
    cy.get('.baTaJaAaL').click();
    cy.get('.baTaJdaY').click();
    cy.wait(1000);
    //cy.get('.baTaKaQh ul li').last().click({force: true});
    cy.get('.baTaKaQh').find('ul li').eq(4).click({force: true});
    cy.get('.baTaJmaE').type('Transaction impeccable, vendeur fiable et article ' +
        'conforme à la description, je recommande vivement!');
    //cy.get('.baTaJmaH').click();
    //cy.get('.bubble-element.baTaKaQq').should('contain','Votre avis a été envoyé !')

  });
});
