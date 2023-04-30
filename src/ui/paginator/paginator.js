import { savePage, getPage } from "../../storage/pokeStorage.js";

export const $paginator = document.querySelector("#paginator");

export function handlePage(state = "") {
  if (!state) {
    savePage(0);
  } else {
    let page = getPage();
    page += 1;
    savePage(page);
  }
}

export default function handlePaginator(state) {
  if (state) {
    $paginator.classList.add("hidden");
  } else {
    $paginator.classList.remove("hidden");
  }
}
