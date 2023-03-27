import { getCompletePokemon } from '../../api/pokeAPI.js';
import { handleLoading } from '../loading/loading.js';
import createCompleteCard from './completeCard.js';

function createCard(pokemon, pokemonCallback = () => {}) {
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
  $detail.onclick = () => pokemonCallback(pokemon.id);

  $card.appendChild($detail);
  document.querySelector('#results').appendChild($card);
}

export default async function showCards(pokemons, page) {
  const start = page * 20;
  const end = (page + 1) * 20;
  pokemons.slice(start, end).forEach((pokemon) => {
    createCard(pokemon, async (pokemonId) => {
      handleLoading(1);
      createCompleteCard(await getCompletePokemon(pokemonId));
    });
  });
}
