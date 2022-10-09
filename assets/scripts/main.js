// NAVEGACION

const nav = document.querySelector('#main-nav')
const list = nav.querySelector('ul');
// Con .content copiamos contenido de <template> y con .cloneNode(true) lo clonamo. Con true, los hijos tambien
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
// Lo que nos devuelve es un fragmento del documento y abajo nos amaramos al elemento especifico
const button = burgerClone.querySelector('button');

// Toggle aria-expanded attribute
button.addEventListener('click', e => {
  // Get the aria-expanded attribute and check if the value is "false"
  // If it's "false", isOpen is true
  // If it's "true", isOpen is false
  const isOpen = button.getAttribute('aria-expanded') === "false"
  // Change the aria-expanded value accordingly
  button.setAttribute('aria-expanded', isOpen);
});

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    button.setAttribute('aria-expanded', false);
  }
});

// Add the button to the page
nav.insertBefore(burgerClone, list);
