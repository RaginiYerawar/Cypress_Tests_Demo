// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('FillForm', (data, scenario) => { 
cy.get('[data-testid="ContactName"]').type(data[0])
cy.get('[data-testid="ContactEmail"]').type(data[1])
cy.get('[data-testid="ContactPhone"]').type(data[2])
cy.get('[data-testid="ContactSubject"]').type(data[3])
cy.get('[data-testid="ContactDescription"]').type(data[4])
cy.get('#submitContact').click()
if(scenario=='success'){
cy.get('div.row > div:nth-child(2) >div').then((element)=>{
    let text1 = element.find('h2').text()
    let text2 = element.find('p').text()
    let successMessage = text1 + text2
    expect(successMessage).to.include(data[5])
})}
else{
    cy.get('.alert').then((element)=>{
        expect(element.find('p').text()).to.include(data[5])
    })
}
})