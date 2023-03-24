import activeTypes from '../types/types.js';
import handlePaginator from '../paginator/paginator.js';

export function handleInterface() {
  document.querySelector('.main-screen').classList.add('hidden');
  document.querySelector('header').classList.remove('hidden');
  document.querySelector('#results').classList.remove('hidden');
  handlePaginator();
  activeTypes();
}

export function removePokemons() {
  const $cards = document.querySelectorAll('.card.my-card');
  $cards.forEach(($card) => {
    $card.remove();
  });
}
