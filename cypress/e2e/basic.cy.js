describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('Contactate con nosotros')
  })

  it('navigates to the obras page', () => {
    cy.get('a[href="/obras"]').eq(0).click();
    cy.url().should("include", "/obras")
    cy.get('h1').contains(/Obras/i)
  })

})

