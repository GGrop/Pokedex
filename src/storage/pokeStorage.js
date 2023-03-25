function makeKey(key) {
  return `pokemon-${key}`;
}

export function savePokemons(pokemons, key) {
  localStorage.setItem(makeKey(key), JSON.stringify(pokemons));
}

export function getPokemons(type) {
  const pokemons = JSON.parse(localStorage.getItem(makeKey(type)));
  if (pokemons === null) {
    throw new Error('there are no pokemons in the storage yet');
  }
  return pokemons;
}

export function getCompletePokemon(id) {
  const pokemon = JSON.parse(localStorage.getItem(makeKey(id)));
  if (pokemon === null) {
    throw new Error('there isn´t that pokemon in the storage yet');
  }
  return pokemon;
}

export function savePage(page) {
  localStorage.setItem('page', JSON.stringify(page));
}
export function getPage() {
  return JSON.parse(localStorage.getItem('page'));
}
