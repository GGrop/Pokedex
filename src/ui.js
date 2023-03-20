import { getPokemons, getCompletePokemons } from "./pokeapi.js";

let page = 0;
const $paginator = document.querySelector("#more-pokemons");

const $start = document.querySelector("#start");
const $types = document.querySelectorAll(".nav a");

$start.onclick = () => {
  handleInterface();
  showPokemons();
};

$types.forEach(($element) => {
  $element.addEventListener("click", () => {
    showPokemons($element.dataset.type);
    page = 0;
  });
});

function handleInterface() {
  document.querySelector(".main-screen").classList.add("hidden");
  document.querySelector("header").classList.remove("hidden");
  document.querySelector("#results").classList.remove("hidden");
  document.querySelector("#paginator").classList.remove("hidden");
}

export async function showPokemons(type) {
  removePokemons();
  await getPokemons(type);
  showCards();
  handlePaginator();
}
