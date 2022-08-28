const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav-menu");
const useravatar = document.querySelector(".user-avatar");
const principal = document.querySelector(".notas-3-principales");
const banner = document.querySelector(".banners");

let tarjeta = document.querySelector(".notas-4-sin-foto .politicas")
let tituloTarjeta = document.querySelector(".notas-4-sin-foto .politicas h3")
let tituloTarjeta2 = document.querySelector(".notas-4-sin-foto .mujer h3")

hamb.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

useravatar.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("fondoRojo");
  if (tituloTarjeta.textContent.includes("Hello")) {
    tituloTarjeta.innerText = "¿Por qué un subsidio universal para inquilines?"; }
    else { 
      tituloTarjeta.innerText = "Hello";
    }

  tituloTarjeta2.innerText = "Hello";
});

let boton = document.querySelector(".container button.boton");
let boton1 = document.querySelector(".container button.boton1");

boton.addEventListener("click", () => {
  principal.classList.toggle("hidden");
});

boton1.addEventListener("click", () => {
  banner.classList.toggle("hidden");
})