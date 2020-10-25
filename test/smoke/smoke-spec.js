describe('Smoke Test', () => {
  it('renders the homepage', () => {
    cy.visit('/');

    cy.get('h1').should('contain', 'Hello world!');
  });
});
