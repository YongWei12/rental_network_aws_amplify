it('should log out successfully', () => {
    cy.visit('/dashboard');
    cy.get('button[data-cy="logout-button"]').click();
    cy.url().should('include', '/login');
  });