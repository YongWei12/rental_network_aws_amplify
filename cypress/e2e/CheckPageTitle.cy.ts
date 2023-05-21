it('should have correct page title', () => {
  cy.visit('https://master.d3w0m2puxuocbm.amplifyapp.com');
  cy.get('input[name="email"]').type('john.doe@example.com');
  cy.title().should('contain', 'My Angular App');
});