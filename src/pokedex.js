import { handleInterface } from './ui/interface/interface.js';
import { getPokemonList } from './services/pokeServices.js';
import showCards from './ui/cards/card.js';
import { getPage } from './storage/pokeStorage.js';
import { handlePage } from './ui/paginator/paginator.js';

const $start = document.querySelector('#start');


export default function initialization() {
  getPokemons();
  $start.onclick = () => {
    handleInterface();
    // showPokemons();
  };
}
