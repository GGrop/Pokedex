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

