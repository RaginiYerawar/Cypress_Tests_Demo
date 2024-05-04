describe('Tets suite for FormaPage', ()=>{

    let testData
    before(function(){
        cy.fixture('HomePageTestData').then(function(data){
            testData=data
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        
    })

    it('Verify form contains 5 inputs', ()=>{
        cy.get('.input-group-prepend').should('have.length', 5)
    })

    it('Verify input boxes placeholders', ()=>{
        cy.get('.input-group-prepend + input').each((el)=>{
            //const placeholder = el.invoke('attr', 'placeholder')
            //cy.log(placeholder)
        })

        cy.get('.input-group-prepend + input').invoke('attr', 'placeholder').then((placeholders) => {
            const placeholderRegex = /[^"]+(?=")/g;
    const matches = placeholders.match(placeholderRegex);

    // Log each placeholder value
    matches.forEach((placeholder) => {
      cy.log(placeholder.trim());
    });
          })
    })

    
})