it('should register a new user and login successfully', () => {
  cy.visit('https://master.d3w0m2puxuocbm.amplifyapp.com/');
  cy.get('a[data-cy="register-link"]').click();
  cy.get('input[name="email"]').type('john.doe@example.com');
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/login');
  cy.get('input[name="email"]').type('john.doe@example.com');
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});