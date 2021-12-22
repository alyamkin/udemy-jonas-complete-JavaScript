'use strict';
const btnShowModalAll = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');

const openCloseModal = () => {
  modalEl.classList.toggle('hidden');
  overlayEl.classList.toggle('hidden');
};

btnShowModalAll.forEach(btn => {
  btn.addEventListener('click', openCloseModal);
});

btnCloseModalEl.addEventListener('click', openCloseModal);
overlayEl.addEventListener('click', openCloseModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    openCloseModal();
  }
});
