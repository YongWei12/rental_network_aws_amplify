it('should submit form successfully', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('Hello, this is a test message.');
    cy.get('button[type="submit"]').click();
    cy.get('.success-message').should('contain', 'Message sent successfully.');
  });