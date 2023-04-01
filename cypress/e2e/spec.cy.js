/// <reference types= "cypress" />
const URL = "http://localhost:8000/";

context("Pokedex", () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.get('#start').click()
    cy.get('.my-card').should("have.length",20)
  });

  it('start and choose, some pokemons',()=>{
    cy.get('#start').click()
    cy.get(':nth-child(1) > #detail').click()

  })
});
