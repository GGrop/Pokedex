import handleLoading from '../loading/loading.js';

export default function createCompleteCard(pokemon) {
  addContentCard(pokemon);
  addColorCard(pokemon);
  handleLoading(0);
}
