/*
❑ ACTIVITY10 – Unicode Code Table
- Create a web page that displays the first 10000 symbols in the Unicode table
- It will be displayed in a table in which each row indicates the code number, followed by the
character of that code.
- Each row will display 10 symbols
❑ ACTIVITY10 – Tabla de códigos Unicode
- Cree una página web que muestre los primeros 10000 símbolos en la tabla Unicode
- Se mostrará en una tabla en la que cada fila indica el número de código, seguido del
carácter de ese código.
- Cada fila mostrará 10 símbolos
*/
function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 1; i < 10000; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 10; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        let char = String.fromCharCode(i);
        var textoCelda = document.createTextNode(i+" ");
        celda1.appendChild(textoCelda);
        textoCelda = document.createTextNode(char+" ");
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda1);
        hilera.appendChild(celda2);
        i++;
      }
      i--;
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }