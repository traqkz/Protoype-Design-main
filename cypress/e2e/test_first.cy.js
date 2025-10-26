describe('Pac-Man Arcade Page', () => {
  it('should display the main elements without play button', () => {
    cy.visit('/')
    
    // Check that the main elements are present
    cy.get('.pacman').should('be.visible')
    cy.get('.game-title').should('contain', 'PAC-MAN')
    cy.get('h4').should('contain', 'Classic Arcade Game')
    
    // Verify that the play button has been removed
    cy.get('button.play-button').should('not.exist')
    
    // Check that other sections are still present
    cy.get('.scores-table').should('be.visible')
    cy.get('.instructions-card').should('be.visible')
  })
})