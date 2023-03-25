export function savePage(page) {
  localStorage.setItem('page', JSON.stringify(page));
}
export function getPage() {
  return JSON.parse(localStorage.getItem('page'));
}
