
describe('Mon test', () => {
  it('Should ajouter un Article à mes favoris', () => {
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

    cy.visit('https://www.babysquare.fr/version-test/cormeilles');

    // Choisir une catégorie
    cy.get('.baTaLaLaD').contains('Puériculture').click();
    cy.url().should('eq','https://www.babysquare.fr/version-test/search?Categories=Pu%C3%A9riculture');
    // choisir un Article
    cy.get('.baTaHnf').click();
    // ajouter au favoris
    cy.get('.baTaJaBo').click();
    cy.wait(2000);
    // get Title Article
    cy.get('.baTaJaAaC').invoke('text').then((titreArticle) => {
      cy.log(titreArticle);
      cy.visit('https://www.babysquare.fr/version-test/profil?tab=Favoris');
      cy.get('.baTaHnk').should('have.length.at.least', 1);
      const mots = titreArticle.split(' ');

      // Sélectionner les trois premiers mots
      const troisPremiersMots = mots.slice(0, 3).join(' ');

      // Afficher les trois premiers mots
      cy.log(troisPremiersMots);
      cy.get('.baTaHnk').last().should('contain',troisPremiersMots);
    })

  });

});
