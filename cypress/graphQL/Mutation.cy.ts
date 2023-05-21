it('should create a new user using GraphQL mutation', () => {
  cy.visit('https://yjqpnk4uwvhxdghwy6abnih5k4.appsync-api.ap-southeast-1.amazonaws.com/graphql');
    cy.intercept('POST', '**/graphql').as('graphqlRequest');
    cy.get('@graphqlRequest').should('be.called');
    cy.wait('@graphqlRequest').then((interception) => {
      const { body } = interception.response;
      expect(body.data.createUser.id).to.exist;
      expect(body.data.createUser.name).to.equal('Jane Smith');
      expect(body.data.createUser.email).to.equal('jane@example.com');
    });
  });