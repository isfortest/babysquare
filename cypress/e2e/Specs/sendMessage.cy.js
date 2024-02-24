
describe('Mon test', () => {
  it('Should séléctionner un Article, et envoyer message', () => {
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
    cy.visit('https://www.babysquare.fr/version-test/cormeilles');

    // Choisir une catégorie
    cy.get('.baTaLaLaD').contains('Puériculture').click();
    cy.url().should('eq','https://www.babysquare.fr/version-test/search?Categories=Pu%C3%A9riculture')
    cy.get('.baTaHnf').click();
    //cy.get('.baTaJaBo').click();
    cy.get('.baTaJaBf').click();
    cy.wait(3000)
    cy.get('textarea')
        .invoke('val')
        .then((message) =>
    {
      cy.log(message);
      cy.get('.baTaJnaH').click();
      cy.get('.baTaJph').should('have.text','Votre message a été envoyé !');
      cy.get('.baTaJpk').click();
      cy.url().should('eq','https://www.babysquare.fr/version-test/all_message');
      cy.get('.baTaJsaT').last().should('contain',message)
    });

  });

});
