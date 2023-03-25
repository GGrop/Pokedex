import handleLoading from '../loading/loading.js';

function addContentCard(pokemon) {
  const $Container = document.querySelector('#pokemon-modal');
  const $Content = document.createElement('div');
  $Content.id = 'modal-content';
  addName($Content, pokemon);
  addImage($Content, pokemon);
  addTypes($Content, pokemon);
  addCharacteristics($Content, pokemon);
  addAbilities($Content, pokemon);
  $Container.appendChild($Content);
  $Container.classList.remove('hidden');
}
export default function createCompleteCard(pokemon) {
  addContentCard(pokemon);
  addColorCard(pokemon);
  handleLoading(0);
}
