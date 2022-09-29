/*
❑ ACTIVITY11 – Random Boxes
- Create a web application that displays 2000 squares of random color of 50 pixels.
- The position on the screen will also be random
- Example of result:

*/


/*
❑ ACTIVITY11 – Random Boxes
- Create a web application that displays 2000 squares of random color of 50 pixels.
- The position on the screen will also be random
- Example of result:
*/
for(let i = 0; i< 2000; i++){


  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  let color1 = Math.random() * (255);
  let color2 = Math.random() * (255);
  let color3 = Math.random() * (255);
  let x_pos = Math.random() * (2000 -1) +1;
  let y_pos = Math.random() * (1000 -1) +1;
  newDiv.style.backgroundColor = 'rgb('+color1+', '+color2+', '+color3+')';
  newDiv.style.left = x_pos+'px';
  newDiv.style.top = y_pos+'px';
}