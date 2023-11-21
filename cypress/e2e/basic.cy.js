describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.log('Before get');
    cy.get('h1').contains('Next.js Blog Theme', { timeout: 10000 }); // Timeout de 10 segundos
    cy.log('After get');
  });
});
