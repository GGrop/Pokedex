/// <reference types= "cypress" />
const URL = "http://localhost:8000/";

context("Pokedex", () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.get('#start').click()
    cy.get('.my-card').should("have.length",20)
  });

  it('start and choose, two pokemons',()=>{
    expectAPokemon(1,'bulbasaur')
    skipModal()
    expectAPokemon(20,'raticate')
  })
    cy.get(':nth-child(1) > #detail').click()

  })
});
