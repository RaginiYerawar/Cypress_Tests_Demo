///<reference types='Cypress' />
describe('Test suite for HomePage', ()=>{
    let testData
    before(function(){
        cy.visit(Cypress.env("url"))
        cy.fixture('example').then(function(data){
            testData=data
        })
        })

    it('Verify text present on the alert banner', ()=>{
        cy.get('#collapseBanner h1').invoke('text').then(text => expect(text).to.eq(testData.WelcomeHeader))
        cy.get('#collapseBanner h4').should('have.text', testData.WelcomeSubheader)
        cy.get(':nth-child(2) > :nth-child(1) > p').invoke('text').then(text=>expect(text).to.contain(testData.ExplorationText))
        cy.get(':nth-child(2)').then((el)=>{
            const text1 = el.find('> p:nth-child(4)').text()
            const text2 = el.find('> p:nth-child(5)').text()
            let fullText = text1 + text2
            expect(fullText).to.eq(testData.AutomationText)
        })
        cy.get(':nth-child(2) > div:nth-child(3) > p').invoke('text').then(text=>expect(text).to.contain(testData.InfrastructureText))
        cy.get(':nth-child(4)').then((el)=>{
            const text1 = el.find('p:nth-child(4)').text()
            const text2 = el.find('ul:nth-child(5)').text()
            const text3 = el.find('p:nth-child(6)').text()
            let getStartedFullText = text1 + text2 + text3
            expect(getStartedFullText).to.eq(testData.GetStartedText)
        })
        cy.get('#footer p').invoke('text').then(text => expect(text).to.eq(testData.GetFooterText))
        cy.get('.hotel-description p').invoke('text').then(text => expect(text).to.eq(testData.GetWelcomeText))
        cy.get('.room-header h2').invoke('text').then(text => expect(text).to.eq(testData.RoomsHeader))
        cy.get('.hotel-room-info h3').invoke('text').then(text => expect(text).to.eq(testData.RoomTitle))
        cy.get('.hotel-room-info p').invoke('text').then(text => expect(text).to.eq(testData.RoomDescription))
    })


})