// import { showPokemons } from './ui/completeCard.js';
import handleInterface from './ui/general.js';
import getPokemons from './pokeapi.js';

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
