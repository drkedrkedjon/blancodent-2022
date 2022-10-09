
// CAROUSEL

const slideColection = document.querySelectorAll('.slide-pase')
let contador = 0
const numeroDeSlides = slideColection.length

document.querySelector('#btn-slide-plus').addEventListener('click', slideSiguiente)
document.querySelector('#btn-slide-menos').addEventListener('click', slideAnterior)

function slideOcultarTodo() {
  slideColection.forEach( slide => {
    slide.classList.remove('slide-pase-visible')
    slide.classList.add('slide-pase-oculta')
  })
}

function slideSiguiente() {
  slideOcultarTodo()
    contador ===  numeroDeSlides - 1 ? contador = 0 : contador++
    slideColection[contador].classList.remove('slide-pase-oculta')
    slideColection[contador].classList.add('slide-pase-visible')
}

function slideAnterior() {
  slideOcultarTodo()
    contador ===  0 ? contador = numeroDeSlides - 1 : contador--
    slideColection[contador].classList.remove('slide-pase-oculta')
    slideColection[contador].classList.add('slide-pase-visible')
}
