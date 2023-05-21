it('should display error message for invalid form submission', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('textarea[name="message"]').type('Hello, this is a test message.');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Invalid email address.');
  });