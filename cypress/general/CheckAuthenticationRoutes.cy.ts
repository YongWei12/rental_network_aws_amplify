it('should redirect to login page when accessing a protected route without authentication', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
    cy.get('h1').should('contain', 'Login');
  });