it('should fetch user data using GraphQL query', () => {
    cy.visit('https://yjqpnk4uwvhxdghwy6abnih5k4.appsync-api.ap-southeast-1.amazonaws.com/graphql');
    cy.intercept('POST', '**/graphql').as('graphqlRequest');
    cy.get('@graphqlRequest').should('be.called');
    cy.wait('@graphqlRequest').then((interception) => {
      const { body } = interception.response;
      expect(body.data.getUser.name).to.equal('John Doe');
      expect(body.data.getUser.email).to.equal('john@example.com');
    });
  });