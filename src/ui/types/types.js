import { showPokemons } from '../../pokedex.js';
import { getPokemonList } from '../../services/pokeServices.js';
import { savePage } from '../../storage/pokeStorage.js';
import { removePokemons } from '../interface/interface.js';
import { handleLoadingGeneral } from '../loading/loading.js';
import { $paginator } from '../paginator/paginator.js';

export default function activeTypes() {
  const $types = document.querySelectorAll('.nav a');

  $types.forEach(($element) => {
    const { dataset } = $element;
    $element.addEventListener('click', async () => {
      handleLoadingGeneral(1);
      $paginator.dataset.type = dataset.type;
      removePokemons();
      const page = 0;
      savePage(page);
      showPokemons(await getPokemonList(dataset.type), page);
      handleLoadingGeneral(0);
    });
  });
}
