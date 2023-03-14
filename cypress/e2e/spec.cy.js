describe('Frontpage search function', () => {

  beforeEach(() => {
    cy.visit('https://blogdoagi.com.br')
    cy.viewport(1500,1000)
    cy.get('#search-open').click()
  })

  
  it('Search Result', () => {
    cy.searchContent('Teste')
    cy.clickSearch() 
    cy.get('.archive-title').should('contain', 'Teste')
  })

  it('Invalid Search', () => {
    cy.searchContent('asd')
    cy.clickSearch() 
    cy.get('.entry-title').should('contain', 'Nenhum resultado')
  })
})