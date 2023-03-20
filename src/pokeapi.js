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
function addId(pokemons) {
  console.log(pokemons);
  pokemons.forEach((e) => {
    e.id = e.url.split('/')[6];
  });
  sessionStorage.setItem('pokemons', JSON.stringify(pokemons));
}

function getAllPokemons() {
  return fetch(`${URL}/pokemon?limit=1281`)
    .then((r) => r.json())
    .then((r) => r.results);
}

