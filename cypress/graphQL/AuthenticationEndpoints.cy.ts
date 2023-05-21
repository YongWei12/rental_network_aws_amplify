it('should authenticate and access protected GraphQL endpoint', () => {
    cy.visit('https://yjqpnk4uwvhxdghwy6abnih5k4.appsync-api.ap-southeast-1.amazonaws.com/graphql');
    cy.get('button[data-cy="login-button"]').click();
    cy.get('input[name="username"]').type('john@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.intercept('POST', '**/graphql').as('graphqlRequest');
    cy.get('@graphqlRequest').should('be.called');
    cy.wait('@graphqlRequest').then((interception) => {
      const { body } = interception.response;
      expect(body.data.getProtectedData).to.exist;
      expect(body.data.getProtectedData.message).to.equal('Protected data');
    });
  });