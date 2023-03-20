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
function removePokemons() {
  const $cards = document.querySelectorAll(".card.my-card");
  $cards.forEach(($card) => {
    $card.remove();
  });
}

function showCards() {
  let pokemons = JSON.parse(sessionStorage.getItem("pokemons"));
  let start = page * 20;
  let end = (page + 1) * 20;
  pokemons.slice(start, end).forEach((pokemon) => {
    createCard(pokemon);
  });
}

function createCard(pokemon) {
  const $card = document.createElement("div");
  $card.className = "card my-card";
  $card.id = pokemon.id;

  const $image = document.createElement("img");
  $image.className = "card-img-top my-card-img";
  $image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  $card.appendChild($image);

  const $name = document.createElement("div");
  $name.className = "card-name";
  $card.appendChild($name);

  const $id = document.createElement("label");
  if (pokemon.id < 1281) {
    $id.textContent = `${pokemon.id}#`;
    $id.style.marginRight = "5px";
    $name.appendChild($id);
  }

  const $pokemonName = document.createElement("label");
  $pokemonName.textContent = `${pokemon.name}`;
  $name.appendChild($pokemonName);

  const $detail = document.createElement("button");
  $detail.className = "btn btn-danger btn-lg";
  $detail.id = "detail";
  $detail.textContent = "ver";

  $card.appendChild($detail);
  document.querySelector("#results").appendChild($card);
}

function handlePaginator(state) {
  if (state) {
    $paginator.classList.add("hidden");
  } else {
    $paginator.classList.remove("hidden");
  }
}

$paginator.onclick = () => {
  page++;
  showCards();
};

document.querySelector("#results").onclick = (event) => {
  showCompletePokemons(event);
};

