"use strict";
const $input = document.getElementById("input");
const $textArea = document.getElementById("textArea");
const $button = document.getElementById("button");
const $texto = document.getElementById("textNotes");
const $container = document.getElementById("section");
const $ol = document.createElement("ol");
$container.appendChild($ol);
//isLocalStorageUsed
const isLocalStorageUsed = () => localStorage.getItem("Notas") !== null;
console.log(isLocalStorageUsed());
let acc = 0;


const isInputEmpty = (input) => {
  return input.value === "";
};

const resetForm = () => {
  $input.value = "";
  $textArea.value = "";
};

const createNotes = (i, title, description) => {
  const li = document.createElement("li"); //padre
  const h4 = document.createElement("h4"); //hijo
  const p = document.createElement("p"); //hijo
  li.className = "content_notes";
  h4.innerHTML = `${i}. ${title}`;
  p.innerHTML = description;
  li.appendChild(h4);
  li.appendChild(p);

  return li;
};
let note = "";

let notas = [];
if (isLocalStorageUsed()) {
  notas = JSON.parse(window.localStorage.getItem("Notas"));
  notas.forEach((nota, i) => {
    note = createNotes(++i, nota.title, nota.descripcion);
    ol.appendChild(note);
  });
  texto.textContent = "";
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (!isInputEmpty(input) && !isInputEmpty(textArea)) {
    const inputTitle = input.value;
    const inputDescription = textArea.value;

    notas.push({ title: inputTitle, descripcion: inputDescription });
    window.localStorage.setItem("Notas", JSON.stringify(notas));

    const listNotes = JSON.parse(window.localStorage.getItem("Notas"));

    listNotes.forEach(({ title, descripcion }, i) => {
      note = createNotes(++i, title, descripcion);
    });
    ol.appendChild(note);
    texto.textContent = "";
    resetForm();
  } else {
    alert("Por favor, rellene los campos correspondientes");
  }
});
//window.localStorage
// //JSON.stringify=> al enviarlo
// const objeto3 = window.localStorage.getItem("Objeto 2");
// console.log(objeto3);

// //JSON.parse => al traerlo
// const objeto4 = JSON.parse(objeto3);
// console.log(objeto4);

// const arr = [2, 23, 23];
// window.localStorage.setItem("Arreglo", JSON.stringify(arr));
// const arrGet = JSON.parse(window.localStorage.getItem("Arreglo"));

// console.log(arrGet);
