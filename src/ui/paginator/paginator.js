import { showPokemons } from '../../pokedex.js';
import { getPokemonList } from '../../services/pokeServices.js';
import { savePage, getPage } from '../../storage/pokeStorage.js';

export const $paginator = document.querySelector('#paginator');

