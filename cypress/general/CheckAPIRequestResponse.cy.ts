it('should fetch user data from API', () => {
    cy.request('GET', '/api/users/1').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('name', 'John Doe');
      expect(response.body).to.have.property('email', 'john@example.com');
    });
  });