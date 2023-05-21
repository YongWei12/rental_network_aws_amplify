it('should delete a post successfully', () => {
    cy.visit('/dashboard');
    cy.get('.post-item:last-child').click();
    cy.get('button[data-cy="delete-post"]').click();
    cy.get('.post-list').should('not.contain', 'Deleted post content.');
  });