describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button.play-button').click();
    cy.get('li:nth-child(1) span.control-icon').click();
    cy.get('li:nth-child(2) span.control-icon').click();
    cy.get('li:nth-child(3) span.control-icon').click();
    cy.get('li:nth-child(4) span.control-icon').click();
  })
})