const input = document.getElementById("input");
const textArea = document.getElementById("textArea");
const button = document.getElementById("button");
const texto = document.getElementById("textNotes");
const container = document.getElementById("section");
const ol = document.createElement("ol");
container.appendChild(ol);
let acc = 0;
button.addEventListener("click", (event)=>{
  if(input.value == "" || textArea.value == ""){
    return 0;
  }
  else
  {
const li = document.createElement("li");
const h4 = document.createElement("h4")
const p = document.createElement("p");
  li.className = "content_notes";

  ol.appendChild(li);
  li.appendChild(h4);
  li.appendChild(p);
  texto.textContent = "";
    acc++;
  h4.innerHTML = `${acc}. ${input.value}`;
  p.innerHTML = textArea.value;

  input.value = "";
  textArea.value = "";
  }
    event.preventDefault();
})