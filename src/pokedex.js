import { handleInterface, removePokemons } from './ui/interface/interface.js';
import { getPokemonList } from './services/pokeServices.js';
import showCards from './ui/cards/card.js';
import { getPage } from './storage/pokeStorage.js';
import { handlePage, $paginator } from './ui/paginator/paginator.js';
import { handleLoadingGeneral } from './ui/loading/loading.js';

const $start = document.querySelector('#start');

export async function showPokemons(pokemons, page) {
  showCards(pokemons, page);
}

export default function initialization() {
  handlePage();
  getPokemonList();
  $start.onclick = async () => {
    handleInterface();
    showPokemons(await getPokemonList('all'), getPage());
  };
}
