Cypress.Commands.add('clickSearch', () => {
    cy.get('.desktop-search > .search-form > .search-submit').click() 
  })

Cypress.Commands.add('searchContent', (text) => {
    cy.get('.desktop-search > .search-form > label > .search-field').type(text)
})



