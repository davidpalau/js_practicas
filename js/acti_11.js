/*
❑ ACTIVITY11 – Random Boxes
- Create a web application that displays 2000 squares of random color of 50 pixels.
- The position on the screen will also be random
- Example of result:

*/
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
newDiv.style.backgroundColor = '#FF00FF'