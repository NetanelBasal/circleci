context('Home', () => {

  it('should work', () => {
    cy.visit('http://localhost:4200');
    cy.get('h1').should('contain', 'Cypress');
  });

});