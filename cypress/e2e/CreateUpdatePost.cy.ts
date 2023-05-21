it('should create a new post and update it successfully', () => {
    cy.visit('/dashboard');
    cy.get('textarea[data-cy="post-content"]').type('This is a new post.');
    cy.get('button[data-cy="create-post"]').click();
    cy.get('.post-list').should('contain', 'This is a new post.');
    cy.get('.post-item:first-child').click();
    cy.get('textarea[data-cy="post-content"]').clear().type('Updated post content.');
    cy.get('button[data-cy="update-post"]').click();
    cy.get('.post-list').should('contain', 'Updated post content.');
  });