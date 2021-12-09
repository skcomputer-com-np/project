'use strict';

const closeModal = document.querySelector('.close-modal');
const modals = document.querySelectorAll('.show-modal');
const overlayClose = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const modalClose = function () {
  modal.classList.add('hidden');
  overlayClose.classList.add('hidden');
};

//show modal
for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlayClose.classList.remove('hidden');
  });
}

//close model
closeModal.addEventListener('click', modalClose);

//overlay
overlayClose.addEventListener('click', modalClose);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
