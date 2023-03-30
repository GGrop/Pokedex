import { getPokemons as getPokemonsAPI, getCompletePokemon as getCompletePokemonAPI, getTypePokemons as getTypePokemonsAPI } from '../api/pokeAPI.js';
import {
  getPokemons as getPokemonsStorage,
  getCompletePokemon as getCompletePokemonStorage,
  savePokemons,
} from '../storage/pokeStorage.js';

function addId(pokemons, type) {
  pokemons.forEach((e) => {
    e.id = e.url.split('/')[6];
  });
  savePokemons(pokemons, type);
}

async function getPokemons(type) {
  let pokemons=[];
  let pokemonsAuxiliar
  try {
    pokemons = getPokemonsStorage(type);
  } catch (e) {
    if (type === 'all') {
      pokemons = await getPokemonsAPI();
    } else {
      pokemonsAuxiliar = await getTypePokemonsAPI(type);
      pokemonsAuxiliar.forEach((pokemon)=>{
        pokemons.push(pokemon.pokemon)
      })
    }
  }
  return pokemons;
}

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
