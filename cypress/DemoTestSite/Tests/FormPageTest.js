describe('Tets suite for FormaPage', ()=>{

    let testData
    before(function(){
        cy.fixture('FormPageTestData').then(function(data){
            testData=data
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        
    })

    it.skip('Verify form contains 5 inputs', ()=>{
        cy.get('[data-testid*="Contact"]').should('have.length', 5)
    })

    it('placeholders', ()=>{
        cy.get('form div div').invoke('attr', 'placeholder')
    })

    it.skip('Verify when entered valid data: Success message', ()=>{
        cy.FillForm(testData.PositiveData, 'success')
    })

    it.skip('Verify when no email data: Fail message', ()=>{
        cy.FillForm(testData.NoEmailData, 'fail')
    })

    it.skip('Verify when invalid phone number data: Fail message', ()=>{
        cy.FillForm(testData.InvalidPhoneNumberData, 'fail')
    })

    it.skip('Verify when message less than 20 characters: Fail message', ()=>{
        cy.FillForm(testData.ShortMessageData, 'fail')
    })
})