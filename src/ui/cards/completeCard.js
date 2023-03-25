import handleLoading from '../loading/loading.js';

function addAbilities($modal, pokemon) {
  const $abilitiesContainer = document.createElement('div');
  $abilitiesContainer.className = 'div-abitilities';
  $modal.appendChild($abilitiesContainer);

  const $abilities = document.createElement('span');
  $abilities.textContent = 'Abilities:';
  $abilities.className = 'info-span';
  $abilitiesContainer.appendChild($abilities);

  pokemon.abilities.forEach((ability) => {
    const $ability = document.createElement('span');
    $ability.textContent = `- ${ability.ability.name}`;
    $ability.className = 'info-span';
    $abilitiesContainer.appendChild($ability);
  });
}
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
