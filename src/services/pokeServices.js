import {
  mapPokemon,
  mapPokemonList,
  mapPokemonTypeList,
} from "../entities_maps/maps.js";

import {
  getPokemons as getPokemonsAPI,
  getCompletePokemon as getCompletePokemonAPI,
  getTypePokemons as getTypePokemonsAPI,
} from "../api/pokeAPI.js";
import {
  getPokemons as getPokemonsStorage,
  getCompletePokemon as getCompletePokemonStorage,
  savePokemons,
} from "../storage/pokeStorage.js";

async function getPokemons(type) {
  let pokemons = [];
  let auxPokemons = [];
  let pokemonsData;
  try {
    pokemons = getPokemonsStorage(type);
  } catch (e) {
    if (type === "all") {
      pokemonsData = await getPokemonsAPI();
      pokemons = mapPokemonList(pokemonsData);
    } else {
      pokemonsData = await getTypePokemonsAPI(type);
      pokemonsData.forEach((pokemon) => {
        auxPokemons.push(pokemon.pokemon);
      });
      pokemons = mapPokemonTypeList(auxPokemons);
    }
  }
  return pokemons;
}

export async function getPokemonList(type = "all") {
  const pokemons = await getPokemons(type);
  return pokemons;
}

export async function getCompletePokemon(pokemonId) {
  let pokemon;
  try {
    pokemon = await getCompletePokemonStorage(pokemonId);
  } catch (e) {
    let pokemonData = await getCompletePokemonAPI(pokemonId);
    pokemon = mapPokemon(pokemonData);
    savePokemons(pokemon, pokemonId);
  }
  return pokemon;
}
