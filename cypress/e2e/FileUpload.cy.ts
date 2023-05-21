it('should upload a file successfully', () => {
    cy.visit('/dashboard');
    cy.get('input[type="file"]').attachFile('test-image.jpg');
    cy.get('button[data-cy="upload-file"]').click();
    cy.get('.file-list').should('contain', 'test-image.jpg');
  });