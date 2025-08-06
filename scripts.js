document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.lol');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('active');
  });
});

