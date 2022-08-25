const newTitle = document.querySelector("#inputTitle");
const botonGuardar = document.querySelector("#saveTitle");
const notaTitle = document.querySelector("h1");

botonGuardar.addEventListener("click", () => {
    notaTitle.innerText = newTitle.value;
});

const saveAutor = document.querySelector("#saveAutor");
const newAutor = document.querySelector("#nameAutor");
const nameAutor = document.querySelector(".autor-nombre");

saveAutor.addEventListener("click", () => {
    nameAutor.innerText = newAutor.value;
})