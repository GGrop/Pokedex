import { getPokemons as getPokemonsAPI, getCompletePokemon as getCompletePokemonAPI, getTypePokemons as getTypePokemonsAPI } from '../api/pokeAPI.js';
import {
  getPokemons as getPokemonsStorage,
  getCompletePokemon as getCompletePokemonStorage,
  savePokemons,
} from '../storage/pokeStorage.js';

export async function getCompletePokemon(pokemonId) {
  let pokemon;
  try {
    pokemon = await getCompletePokemonStorage(pokemonId);
  } catch (e) {
    pokemon = await getCompletePokemonAPI(pokemonId);
    savePokemons(pokemon, pokemonId);
  }
  return pokemon;
}
