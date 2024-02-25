describe("Add_Product", () => {

  it("should Add annonce", () => {
    cy.visit("https://www.babysquare.fr/version-test/cormeilles/debug_mode=true");
    cy.get("div.baTaHaLr > button").click();
    cy.get("div.baTaHgn input").click();
    cy.get("div.baTaHgn input").clear();
    cy.get("div.baTaHgn input").type("test0@hotmail.xyz");
    cy.get("div.baTaHaYaV input").click();
    cy.get("div.baTaHaYaV input").type("Testeur0@");
    cy.get("div.baTaHaYaG button").click();
    cy.location("href").should("eq", "https://www.babysquare.fr/version-test/profil");
    cy.get("div.baTaHaLr > button").click();
    cy.location("href").should("eq", "https://www.babysquare.fr/version-test/add_product");
    cy.get("div.baTaIaTaC input").type("DORS-BIEN D'OCCASION MIXTE - PREMA");
    cy.get("textarea").type("DORS-BIEN D'OCCASION \nMIXTE - PREMA DORS-BIEN D'OCCASION MIXTE - PREMA");
    cy.get("div.baTaIaTd div.Text").click();
    cy.get("div.entry-1 > div").click();
    cy.get("div.baTaIaTw div.Text").click();
    cy.get("div.baTaIba div.entry-1 div.Text").click();
    cy.get("div.baTaIaUaD div.Text").click();
    cy.get("div.baTaIaUaU div.entry-1 div.Text").click();
    cy.get("div.entry-13 div.Text").click();
    cy.get('input[type=file]').attachFile('image_bodies.png');
    cy.get('input[type=file]').attachFile('image_bodies.png');
    cy.get("div.baTaIaVg > div").click();
    cy.get("div.baTaIaZaX div.entry-11 > div").click();
    cy.get("div.baTaIaVl div.Text").click();
    cy.get("div.baTaIaaW input").click();
    cy.get("div.baTaIaaW input").type("vert");
    cy.get("div.baTaIaaW div.entry-1 div.Text").click();
    cy.get("div.baTaIaVn div.Text").click();
    cy.get("div.baTaIaw div.entry-2 div.Text").click();
    cy.get("div.baTaIaWaN div.Text").click();
    cy.get("div.baTaIcaP div.entry-4 > div").click();
    cy.get("div.baTaIaWaS div.Text").click();
    cy.get("div.baTaIcl div.entry-1 div.Text").click();
    cy.get("div.baTaIaVw input").click();
    cy.get("div.baTaIaVw input").type("6");
    cy.get("button.baTaIaXaS").click();
    cy.location("href").should("eq", "https://www.babysquare.fr/version-test/success_add");
    cy.get('.baTaIep').contains('Votre produit a été ajouté !');
    cy.get('.baTaIev').click();
    cy.location("href").should("eq", "https://www.babysquare.fr/version-test/square/1706802151684x364311432786835300");
  });
});