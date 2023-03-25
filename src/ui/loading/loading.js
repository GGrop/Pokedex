function handleBlockUser(blockUser) {
  if (blockUser) {
    document.querySelector('#blackscreen').onclick = () => {};
  } else {
    document.querySelector('#blackscreen').onclick = () => {
      document.querySelector('#pokemon-modal');
      const $blackScreen = document.querySelector('#blackscreen');
      $blackScreen.classList.add('hidden');
      const $modalContent = document.querySelector('#modal-content');
      const $modal = document.querySelector('#pokemon-modal');
      $modalContent.remove();
      $modal.classList.add('hidden');
    };
  }
}

export default function handleLoading(showLoading) {
  const $loading = document.querySelector('#loading');
  if (showLoading) {
    $loading.classList.remove('hidden');
    handleBlockUser(1);
    document.querySelector('#blackscreen').classList.remove('hidden');
  } else {
    $loading.classList.add('hidden');
    handleBlockUser(0);
  }
}
