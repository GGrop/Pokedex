import { savePokemons, getPokemons, getCompletePokemon, savePage, getPage} from '../pokeStorage.js'
import pokemonFixture from './pokemons.fixture.js';
import CompletePokemonfixture from './completePokemon.fixture.js';


let pokemons = pokemonFixture
let completePokemon = CompletePokemonfixture

//es necesario mockear el localStorage?
//
// const mockedLocalStorage = (function () {
//   let store = {};
//   return {
//     getItem: function (key) {
//       return store[key] || null;
//     },
//     setItem: function (key, value) {
//       store[key] = value;
//     },
//     removeItem: function (key) {
//       delete store[key];
//     },
//     clear: function () {
//       store = {};
//     }
//   };
// })();

// beforeEach(() => {
//   Object.defineProperty(window, 'localStorage', {
//     value: mockedLocalStorage,
//   });
// });

test('it should save pokemons on storage and get it',()=>{
  const key="all"
  savePokemons(pokemons,key)
  try{
    getPokemons(key)
    expect(getPokemons(key)).toEqual(pokemons)
  }catch(e){
    expect(e).toEqual(new Error('there are no pokemons in the storage yet'))
  }

  pokemons = null
  savePokemons(pokemons,key)
  try{
  getPokemons(key)
    expect(getPokemons(key)).toEqual(pokemons)
  }catch(e){
    expect(e).toEqual(new Error('there are no pokemons in the storage yet'))
  }
})

test('it should save pokemons a complete on storage and get it',()=>{
  let pokemonId= 9
  savePokemons(completePokemon,pokemonId)
  try{
    getCompletePokemon(pokemonId)
    expect(getCompletePokemon(pokemonId)).toEqual(completePokemon)
  }catch(e){
    expect(e).toEqual(new Error('there isn´t that pokemon in the storage yet'))
  }

  completePokemon= null
  savePokemons(completePokemon,pokemonId)
  try{
    getCompletePokemon(pokemonId)
    expect(getCompletePokemon(pokemonId)).toEqual(completePokemon)
  }catch(e){
    expect(e).toEqual(new Error('there isn´t that pokemon in the storage yet'))
  }
})

test('it should save page on storage and get it',()=>{
  const page= 5
  savePage(page)
  expect(getPage()).toEqual(page)
})

