describe('My Third Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  it('Do it', () => {
    cy.visit('https://demoqa.com/checkbox');
    
    cy.xpath('//*[@id="tree-node"]/ol/li/span/button').click();
    cy.xpath('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button').click();
    cy.xpath('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]/span/button').click();
    cy.xpath('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]/ol/li[1]/span/label/span[1]').click();
    cy.xpath('//*[@id="result"]/span[2]').should('have.text', 'react');
  });
});
