describe('My First Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  it('Do it', () => {
    cy.visit('https://demoqa.com/dynamic-properties');
    cy.get('#enableAfter').should('be.disabled');
    cy.wait(5000);
    cy.get('#enableAfter').should('not.be.disabled');
    cy.get('#visibleAfter').should('be.visible');
  });
});
  