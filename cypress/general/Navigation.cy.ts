it('should navigate to about page', () => {
    cy.visit('/');
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'About Us');
  });