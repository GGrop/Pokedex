import {
  getCompletePokemon,
  getPokemons,
  getTypePokemons,
} from "../pokeAPI.js";

const URL = "https://pokeapi.co/api/v2";
const pokemonId = 2;
const type = "fire";
beforeEach(() => {
  global.fetch = jest.fn();
});

test("it should return a complete pokemon", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
  getCompletePokemon(2);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL}/pokemon/${pokemonId}`);
});

test("it should return all pokemons", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
  getPokemons();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL}/pokemon?limit=1281`);
});

test("it should return all pokemons", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
  getTypePokemons(type);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL}/type/${type}/`);
});
