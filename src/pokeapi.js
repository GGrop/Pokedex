const URL = 'https://pokeapi.co/api/v2';

function getAllPokemons() {
  return fetch(`${URL}/pokemon?limit=1281`)
    .then((r) => r.json())
    .then((r) => r.results);
}

export function getCompletePokemons(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((pokemon) => pokemon);
}

function getTypePokemons(type) {
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

function addId(pokemons) {
  console.log(pokemons);
  pokemons.forEach((e) => {
    e.id = e.url.split('/')[6];
  });
  sessionStorage.setItem('pokemons', JSON.stringify(pokemons));
}

export default async function getPokemons(type = 'all') {
  let pokemons;
  if (type === 'all') {
    pokemons = await getAllPokemons();
  } else {
    pokemons = await getTypePokemons(type);
  }
  addId(pokemons);
}
