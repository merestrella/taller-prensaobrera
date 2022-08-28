const newText = document.querySelector("#inputText");
const botonGuardarTitle = document.querySelector("#saveTitle");
const notaTitle = document.querySelector("h1");

botonGuardarTitle.addEventListener("click", () => {
  notaTitle.innerText = newText.value;
  newText.value = "";
});

const saveAutor = document.querySelector("#saveAutor");
const newAutor = document.querySelector("#nameAutor");
const nameAutor = document.querySelector(".autor-nombre a");

saveAutor.addEventListener("click", () => {
  nameAutor.innerText = newText.value;
  newText.value = "";
});

const botonGuardarNota = document.querySelector(".guardar #boton-guardar");
const notaVolanta = document.querySelector(".volanta");
const notaAutor = document.querySelector(".autor-nombre");
const notaContenido = document.querySelector(".content-nota");
const guardarNota = document.querySelector("#guardar-nota");
const imagenNota = document.querySelector("#imagen-nota");
const botonLimpiar = document.querySelector(".guardar #boton-limpiar");
const userAvatar = document.querySelector(".user-avatar");
const nota1 = document.querySelector("#nota1");

//botonGuardarNota.addEventListener("click", () => {
//    const nota = {
//        titulo: notaTitle.innerText,
//        volanta: notaVolanta.innerText,
//        autor: notaAutor.innerText,
//        contenido: notaContenido.innerText,
//        imagen: imagenNota.innerHTML,
//    }

//    guardarNota.innerHTML = `
//    <h1> ${nota.titulo} </h1>
//    <span> ${nota.volanta} </span>
//    <a href=""> ${nota.autor} </a>
//    <div> ${nota.imagen} </div>
//    <p> ${nota.contenido} </p>
//    `;
//})

botonLimpiar.addEventListener("click", () => {
  nota1.innerHTML = "<p>No hay notas</p>";
});

botonGuardarNota.addEventListener("click", () => {
  const nota = {
    titulo: notaTitle.innerText,
    imagen: imagenNota.innerHTML,
  };

  nota1.innerHTML = `
    <div class="foto-nota"> ${nota.imagen} </div>
    <h1> ${nota.titulo} </h1>
    `;
});

userAvatar.addEventListener("click", () => {
  guardarNota.classList.toggle("hidden");
});
