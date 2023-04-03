const URL = "https://pokeapi.co/api/v2";

export async function getCompletePokemon(pokemonId) {
  return (await fetch(`${URL}/pokemon/${pokemonId}`)).json();
}

export async function getPokemons() {
  return (await fetch(`${URL}/pokemon?limit=1281`)).json();
}

export function getTypePokemons(type) {
  return fetch(`${URL}/type/${type}/`)
    .then((r) => r.json())
    .then((r) => r.pokemon);
}
