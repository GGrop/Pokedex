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

$paginator.onclick = async () => {
  const { dataset } = $paginator;
  handlePage('+');
  showPokemons(await getPokemonList(dataset.type), getPage());
};

export default function activeTypes() {
  const $types = document.querySelectorAll('.nav a');

  $types.forEach(($element) => {
    const { dataset } = $element;
    $element.addEventListener('click', async () => {
      handleLoadingGeneral(1);
      $paginator.dataset.type = dataset.type;
      removePokemons();
      handlePage();
      showPokemons(await getPokemonList(dataset.type), getPage());
      handleLoadingGeneral(0);
    });
  });
}

export function initialization() {
  getPokemonList();
  handlePage();
  activeTypes();

  $start.onclick = async () => {
    handleInterface();
    showPokemons(await getPokemonList('all'), getPage());
  };
}
