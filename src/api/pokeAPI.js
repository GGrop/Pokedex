const URL = 'https://pokeapi.co/api/v2';

export function getCompletePokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((pokemon) => pokemon);
}

export function getPokemons() {
  return fetch(`${URL}/pokemon?limit=1281`)
    .then((r) => r.json())
    .then((r) => r.results);
}

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
