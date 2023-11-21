describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.log('Before get');
    cy.get('h1', { timeout: 20000 }).should('contain', 'Next.js Blog Theme');
    cy.log('After get');
  });
});
