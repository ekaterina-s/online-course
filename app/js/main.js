import { testFunction } from './scripts/test';
testFunction();

const burger = document.querySelector('.js-burger');
const nav = document.querySelector('.js-nav');
const body = document.querySelector('.js-body');

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  nav.classList.toggle('_active');
  body.classList.toggle('lock');
})
