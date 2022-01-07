export const $ = document.querySelector.bind(document);

const active = $('.menu-item:not(.menu-item_inactive)');

active.addEventListener('click', event => {
  event.preventDefault();
});