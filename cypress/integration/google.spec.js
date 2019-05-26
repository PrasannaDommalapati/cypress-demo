describe('My First Suite',() =>{
    it('is my first cypress test',()=>{
        cy.visit('/')
        cy.get('[name="q"]')
        .type('cypress io')
        .type('{enter}')
        expect(true).to.equal(true)
    })
})