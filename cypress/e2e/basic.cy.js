// basic.cy.js

describe('teste de renderização de exemplo', () => {
  it('exibe o texto do título', () => {
    cy.visit('/'); // Ajuste a URL conforme necessário
    cy.get('h1').should('be.visible').then(($h1) => {
      const texto = $h1.text();
      console.log('Texto em h1:', texto);
      expect(texto).to.contain('Next.js Blog Theme');
    });
  });
});
