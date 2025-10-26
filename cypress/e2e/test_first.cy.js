describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button.play-button').click();
  })
})