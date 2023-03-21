import { getPokemons, getCompletePokemons } from '../pokeapi.js';

let page = 0;
const $paginator = document.querySelector('#more-pokemons');

const $start = document.querySelector('#start');
const $types = document.querySelectorAll('.nav a');

$start.onclick = () => {
  handleInterface();
  showPokemons();
};

$types.forEach(($element) => {
  $element.addEventListener('click', () => {
    showPokemons($element.dataset.type);
    page = 0;
  });
});

function handleInterface() {
  document.querySelector('.main-screen').classList.add('hidden');
  document.querySelector('header').classList.remove('hidden');
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#paginator').classList.remove('hidden');
}

export async function showPokemons(type) {
  removePokemons();
  await getPokemons(type);
  showCards();
  handlePaginator();
}
function removePokemons() {
  const $cards = document.querySelectorAll('.card.my-card');
  $cards.forEach(($card) => {
    $card.remove();
  });
}

function showCards() {
  const pokemons = JSON.parse(sessionStorage.getItem('pokemons'));
  const start = page * 20;
  const end = (page + 1) * 20;
  pokemons.slice(start, end).forEach((pokemon) => {
    createCard(pokemon);
  });
}

function createCard(pokemon) {
  const $card = document.createElement('div');
  $card.className = 'card my-card';
  $card.id = pokemon.id;

  const $image = document.createElement('img');
  $image.className = 'card-img-top my-card-img';
  $image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  $card.appendChild($image);

  const $name = document.createElement('div');
  $name.className = 'card-name';
  $card.appendChild($name);

  const $id = document.createElement('label');
  if (pokemon.id < 1281) {
    $id.textContent = `${pokemon.id}#`;
    $id.style.marginRight = '5px';
    $name.appendChild($id);
  }

  const $pokemonName = document.createElement('label');
  $pokemonName.textContent = `${pokemon.name}`;
  $name.appendChild($pokemonName);

  const $detail = document.createElement('button');
  $detail.className = 'btn btn-danger btn-lg';
  $detail.id = 'detail';
  $detail.textContent = 'ver';

  $card.appendChild($detail);
  document.querySelector('#results').appendChild($card);
}

function handlePaginator(state) {
  if (state) {
    $paginator.classList.add('hidden');
  } else {
    $paginator.classList.remove('hidden');
  }
}

$paginator.onclick = () => {
  page++;
  showCards();
};

document.querySelector('#results').onclick = (event) => {
  showCompletePokemons(event);
};

async function showCompletePokemons(event) {
  const $element = event.target;
  console.log(event);
  if ($element.id === 'detail') {
    const pokemonId = $element.parentNode.id;
    handleLoading(1);
    createCompleteCard(await getCompletePokemons(pokemonId));
  }
}

function handleLoading(showLoading) {
  const $loading = document.querySelector('#loading');
  if (showLoading) {
    $loading.classList.remove('hidden');
    handleBlockUser(1);
    document.querySelector('#blackscreen').classList.remove('hidden');
  } else {
    $loading.classList.add('hidden');
    handleBlockUser(0);
  }
}

function handleBlockUser(blockUser) {
  if (blockUser) {
    document.querySelector('#blackscreen').onclick = () => {};
  } else {
    document.querySelector('#blackscreen').onclick = () => {
      document.querySelector('#pokemon-modal');
      const $blackScreen = document.querySelector('#blackscreen');
      $blackScreen.classList.add('hidden');
      const $modalContent = document.querySelector('#modal-content');
      const $modal = document.querySelector('#pokemon-modal');
      $modalContent.remove();
      $modal.classList.add('hidden');
    };
  }
}

function createCompleteCard(pokemon) {
  addContentCard(pokemon);
  addColorCard(pokemon);
  handleLoading(0);
}
function addContentCard(pokemon) {
  const $Container = document.querySelector('#pokemon-modal');
  const $Content = document.createElement('div');
  $Content.id = 'modal-content';
  addName($Content, pokemon);
  addImage($Content, pokemon);
  addTypes($Content, pokemon);
  addCaracterist($Content, pokemon);
  addAbilities($Content, pokemon);
  $Container.appendChild($Content);
  $Container.classList.remove('hidden');
}
function addColorCard(pokemon) {
  const $Content = document.querySelector('#modal-content');
  const mainType = pokemon.types[0].type.name;
  $Content.classList.add(`type-${mainType}`);
}
function addName($modal, pokemon) {
  const $pokemonName = document.createElement('p');
  $pokemonName.textContent = pokemon.name;
  $pokemonName.className = 'pokemon-name-modal';
  $modal.appendChild($pokemonName);
}
function addImage($modal, pokemon) {
  const $pokemonImg = document.createElement('img');
  $pokemonImg.src = pokemon.sprites.front_default;
  $pokemonImg.className = 'pokemon-img-modal';
  $modal.appendChild($pokemonImg);
}
function addTypes($modal, pokemon) {
  const $types = document.createElement('div');
  $types.className = 'types-container-modal';

  pokemon.types.forEach((type) => {
    const $spanType = document.createElement('span');
    $spanType.className = `type nav-type-${type.type.name}`;
    $spanType.textContent = type.type.name;
    $types.appendChild($spanType);
  });
  $modal.appendChild($types);
}
function addCaracterist($modal, pokemon) {
  const $weight = document.createElement('span');
  $weight.textContent = `Weight: ${pokemon.weight / 10}kg`;
  $weight.className = 'info-span';
  $modal.appendChild($weight);

  const $height = document.createElement('span');
  $height.textContent = `Height: ${pokemon.height / 10}m`;
  $height.className = 'info-span';
  $modal.appendChild($height);
}
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
