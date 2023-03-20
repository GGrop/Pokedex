const URL = 'https://pokeapi.co/api/v2';

export async function getPokemons(type = 'all') {
  let pokemons;
  if (type === 'all') {
    pokemons = await getAllPokemons();
  } else {
    pokemons = await getTypePokemons(type);
  }
  addId(pokemons);
}
