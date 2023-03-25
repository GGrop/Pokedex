export function getTypePokemons(type) {
  return fetch(`${URL}/type/${type}/`)
    .then((r) => r.json())
    .then((r) => {
      const pokemons = [];
      r.pokemon.forEach((pokemon) => {
        pokemons.push(pokemon.pokemon);
      });
      return pokemons;
    });
}
