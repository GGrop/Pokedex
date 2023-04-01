/// <reference types= "cypress" />
const URL = "http://localhost:8000/";

context("MemoTest", () => {
  beforeEach(() => {
    cy.visit(URL);

  });

  it('start and choose, some pokemons',()=>{
    cy.get('#start').click()
    cy.get(':nth-child(1) > #detail').click()

  })
});
