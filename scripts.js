document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('active');
  });
});

