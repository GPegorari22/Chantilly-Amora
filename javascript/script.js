let lastScroll = 0;
const header = document.querySelector("header");
const container = document.querySelector(".cabecalhoContainer");
const hr = document.querySelector("header hr");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 150) {
      // Rolando para baixo: recolhe o header e oculta os elementos
      header.classList.add("header-recolhido");
      container.classList.add("ocultar");
      hr.classList.add("ocultar");
    } else {
      // Rolando para cima: mostra tudo novamente
      header.classList.remove("header-recolhido");
      container.classList.remove("ocultar");
      hr.classList.remove("ocultar");
    }

    lastScroll = currentScroll;
});

let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}


function toggleMenu() {
    const menu = document.getElementById('topoHeader');
    menu.classList.toggle('show');
}