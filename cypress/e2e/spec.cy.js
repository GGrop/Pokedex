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
  it('start and use much the paginator and choose a far pokemon',()=>{
    let count=15
    usePaginator(count)
    expectAPokemon(300,'skitty')
  })
  it('start and use the paginator and change the type and choose one pokemon',()=>{
    let count=3
    usePaginator(count)
    cy.get('.nav-type-fire').click()
    expectAPokemon(1,'charmander')
    usePaginator()
  })
  it('start and spec a loading',()=>{
    cy.get(':nth-child(1) > #detail').click()
    cy.get('#loading').should('not.have.class', 'hidden')
    cy.get('.pokemon-name-modal').should('have.text', 'bulbasaur')
    cy.get('#loading').should('have.class', 'hidden')
  })
});
