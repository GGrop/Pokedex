import { getPokemons as getPokemonsAPI, getCompletePokemon as getCompletePokemonAPI, getTypePokemons as getTypePokemonsAPI } from '../api/pokeAPI.js';
import {
  getPokemons as getPokemonsStorage,
  getCompletePokemon as getCompletePokemonStorage,
  savePokemons,
} from '../storage/pokeStorage.js';

export async function getPokemonList(type = 'all') {
  const pokemons = await getPokemons(type);
  addId(pokemons, type);
  return pokemons;
}

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
