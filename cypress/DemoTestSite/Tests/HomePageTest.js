///<reference types='Cypress' />
describe('Test suite for HomePage', ()=>{
    
    let testData
    before(function(){
        cy.fixture('HomePageTestData').then(function(data){
            testData=data
        })
    })
    
    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        
    })
    
    it('Verify Alert banner is present',()=>{
        cy.get('#collapseBanner').should('be.visible')
    })

    it('Verify Alert banner collapses after clicking on the button',()=>{
        cy.get('#collapseBanner [type="button"]').click()
        cy.get('#collapseBanner').should('not.exist')
    })

    it('Verify text present on the alert banner', ()=>{
        cy.wait(2000)
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
        
    })

    it('Verify text present on HomePage', ()=>{
        cy.wait(1000)
        cy.get('#footer p').invoke('text').then(text => expect(text).to.eq(testData.FooterText))
        cy.get('.hotel-description p').invoke('text').then(text => expect(text).to.eq(testData.WelcomeText))
        cy.get('.room-header h2').invoke('text').then(text => expect(text).to.eq(testData.RoomsHeader))
        cy.get('.hotel-room-info h3').invoke('text').then(text => expect(text).to.eq(testData.RoomTitle))
        cy.get('.hotel-room-info p').invoke('text').then(text => expect(text).to.eq(testData.RoomDescription))
    })

    it('Verify Welcome image present', ()=>{
        cy.get('.hotel-logoUrl').should('have.attr', 'src', testData.WelcomeImage)
    })


})