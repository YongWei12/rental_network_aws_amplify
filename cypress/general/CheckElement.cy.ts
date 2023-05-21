it('should display header and footer', () => {
    cy.visit('/');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });