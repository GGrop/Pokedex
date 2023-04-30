import Pokemon from "../entities/pokemon.js";
import PokemonList from "../entities/pokemonList.js";

export function mapPokemon(pokemonData) {
  const {
    id,
    name,
    sprites: { front_default: sprite },
    types,
    height,
    weight,
    abilities,
  } = pokemonData;

  return new Pokemon(
    id,
    name,
    sprite,
    types.map((type) => type.type.name),
    height,
    weight,
    abilities.map((ability) => ability.ability.name)
  );
}

function addId(pokemons) {
  pokemons.forEach((e) => {
    if (e.pokemon) {
      e.pokemon.id = e.pokemon.url.split("/")[6];
    } else {
      e.id = e.url.split("/")[6];
    }
  });
}

export function mapPokemonList(pokemonData) {
  addId(pokemonData.results);
  const { count: total, results } = pokemonData;

  return new PokemonList(
    total,
    results.map((pokemon) => pokemon)
  );
}

export function mapPokemonTypeList(pokemonTypeData) {
  addId(pokemonTypeData);
  const total = pokemonTypeData.length;
  return new PokemonList(
    total,
    pokemonTypeData.map((pokemon) => pokemon)
  );
}
