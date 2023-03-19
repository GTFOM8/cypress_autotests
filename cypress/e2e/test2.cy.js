describe('My Second Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
    it('Check table', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[1]').should('have.text', 'First Name')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[2]').should('have.text', 'Last Name')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[3]').should('have.text', 'Age')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[4]').should('have.text', 'Email')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[5]').should('have.text', 'Salary')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[6]').should('have.text', 'Department')
        .invoke('text');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div/div[7]').should('have.text', 'Action');

        cy.get('#addNewRecordButton').click();
        
        cy.xpath('//*[@id="firstName-wrapper"]/div[1]').should('contain', 'First Name');
        cy.xpath('//*[@id="lastName-wrapper"]/div[1]').should('contain', 'Last Name');
        cy.xpath('//*[@id="userEmail-wrapper"]/div[1]').should('contain', 'Email');
        cy.xpath('//*[@id="age-wrapper"]/div[1]').should('contain', 'Age');
        cy.xpath('//*[@id="salary-wrapper"]/div[1]').should('contain', 'Salary');
        cy.xpath('//*[@id="department-wrapper"]/div[1]').should('contain', 'Department');

        cy.get('#firstName').type('Sam');
        cy.get('#lastName').type('Mason');
        cy.get('#userEmail').type('sm@mail.com');
        cy.get('#age').type('31');
        cy.get('#department').type('SAS');
        cy.get('#salary').type('100000');

        cy.get('#submit').click();

        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div')
        .within(() => {
          cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div')
          .should('contain', 'Sam')
          .should('contain', 'Mason')
          .should('contain', 'sm@mail.com')
          .should('contain', '31')
          .should('contain', 'SAS')
          .should('contain', '100000')
        });
        cy.get('#delete-record-4').click();

        cy.get('#searchBox').type('Cierra');
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div')
        .should('contain', 'Cierra')
        .should('contain', 'Vega')
        .should('contain', '39')
        .should('contain', 'cierra@example.com')
        .should('contain', 'Insurance')
        .should('contain', '10000')
    });
  });