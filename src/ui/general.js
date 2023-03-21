export default function handleInterface() {
  document.querySelector('.main-screen').classList.add('hidden');
  document.querySelector('header').classList.remove('hidden');
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#paginator').classList.remove('hidden');
}
