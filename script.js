const optionsButton = document.querySelector('.options');
const addMenu = document.querySelector('.add-menu');
const closeButton = document.querySelector('.close');

optionsButton.addEventListener('click', () => {
  addMenu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  addMenu.style.display = 'none';
});
