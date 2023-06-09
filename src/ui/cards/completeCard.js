import { handleLoading } from "../loading/loading.js";

function addColorCard(pokemon) {
  const $Content = document.querySelector("#modal-content");
  const mainType = pokemon.types[0];
  $Content.classList.add(`type-${mainType}`);
}
function addName($modal, pokemon) {
  const $pokemonName = document.createElement("p");
  $pokemonName.textContent = pokemon.name;
  $pokemonName.className = "pokemon-name-modal";
  $modal.appendChild($pokemonName);
}
function addImage($modal, pokemon) {
  const $pokemonImg = document.createElement("img");
  $pokemonImg.src = pokemon.sprite;
  $pokemonImg.className = "pokemon-img-modal";
  $modal.appendChild($pokemonImg);
}
function addTypes($modal, pokemon) {
  const $types = document.createElement("div");
  $types.className = "types-container-modal";

  pokemon.types.forEach((type) => {
    const $spanType = document.createElement("span");
    $spanType.className = `type nav-type-${type}`;
    $spanType.textContent = type;
    $types.appendChild($spanType);
  });
  $modal.appendChild($types);
}
function addCharacteristics($modal, pokemon) {
  const $weight = document.createElement("span");
  $weight.textContent = `Weight: ${pokemon.weight / 10}kg`;
  $weight.className = "info-span";
  $modal.appendChild($weight);

  const $height = document.createElement("span");
  $height.textContent = `Height: ${pokemon.height / 10}m`;
  $height.className = "info-span";
  $modal.appendChild($height);
}
function addAbilities($modal, pokemon) {
  const $abilitiesContainer = document.createElement("div");
  $abilitiesContainer.className = "div-abitilities";
  $modal.appendChild($abilitiesContainer);

  const $abilities = document.createElement("span");
  $abilities.textContent = "Abilities:";
  $abilities.className = "info-span";
  $abilitiesContainer.appendChild($abilities);

  pokemon.abilities.forEach((ability) => {
    const $ability = document.createElement("span");
    $ability.textContent = `- ${ability}`;
    $ability.className = "info-span";
    $abilitiesContainer.appendChild($ability);
  });
}
function addContentCard(pokemon) {
  const $Container = document.querySelector("#pokemon-modal");
  const $Content = document.createElement("div");
  $Content.id = "modal-content";
  addName($Content, pokemon);
  addImage($Content, pokemon);
  addTypes($Content, pokemon);
  addCharacteristics($Content, pokemon);
  addAbilities($Content, pokemon);
  $Container.appendChild($Content);
  $Container.classList.remove("hidden");
}
export default function createCompleteCard(pokemon) {
  addContentCard(pokemon);
  addColorCard(pokemon);
  handleLoading(0);
}
