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

