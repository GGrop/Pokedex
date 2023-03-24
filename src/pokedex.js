import { handleInterface } from './ui/interface/interface.js';
import { getPokemonList } from './services/pokeServices.js';
import showCards from './ui/cards/card.js';
import { getPage } from './storage/pokeStorage.js';
import { handlePage } from './ui/paginator/paginator.js';

const $start = document.querySelector('#start');

// function changePage(page) {
//   const pokemons = JSON.parse(sessionStorage.getItem('pokemons'));
//   const start = page * 20;
//   const end = (page + 1) * 20;
//   pokemons.slice(start, end).forEach((pokemon) => {
//     createCard(pokemon);
//   });
// }

export default function initialization() {
  getPokemons();
  $start.onclick = () => {
    handleInterface();
    // showPokemons();
  };
}
