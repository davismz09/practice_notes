const input = document.getElementById("input");
const textArea = document.getElementById("textArea");
const button = document.getElementById("button");
const texto = document.getElementById("textNotes");
const container = document.getElementById("section");
const ol = document.createElement("ol");
container.appendChild(ol);

let acc = 0;

const isInputEmpty = (input) => {
  return input.value == "";
};

const resetForm = () => {
  input.value = "";
  textArea.value = "";
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
button.addEventListener("click", (event) => {
  event.preventDefault();

  if (!isInputEmpty(input) && !isInputEmpty(textArea)) {
    const newNote = createNotes(++acc, input.value, textArea.value);
    ol.appendChild(newNote);
    texto.textContent = "";

    resetForm();
  } else {
    alert("Por favor, rellene los campos correspondientes");
  }
});
