import { getCompletePokemon } from '../../api/pokeAPI.js';
import handleLoading from '../loading/loading.js';
import createCompleteCard from './completeCard.js';

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
