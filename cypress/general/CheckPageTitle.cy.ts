it('should have correct page title', () => {
  cy.visit('/');
  cy.title().should('contain', 'My Angular App');
});