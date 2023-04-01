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
  it('start and change the type, choose one pokemon, and show more with the paginator',()=>{
    cy.get('.nav-type-dragon').click()
    expectAPokemon(1,'dratini')
    skipModal()
    let count=3
    usePaginator(count)
  })
    cy.get(':nth-child(1) > #detail').click()

  })
});
