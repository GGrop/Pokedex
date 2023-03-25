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
