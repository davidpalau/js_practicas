/*
❑ ACTIVITY 7 – Triangle of asterisks
- Create a Web application that asks the user for a positive integer
- If what the user types is not a number or it is not positive, the page will not display anything.
It will go blank.
- The application will write a triangle with as many asterisks as the user number indicates.
- To make the effect more effective we will use, to write the asterisks, a monospaced letter.

❑ ACTIVIDAD 7 – Triángulo de asteriscos
- Crear una aplicación web que le pida al usuario un número entero positivo
- Si lo que escribe el usuario no es un número o no es positivo, la página no mostrará nada.
Se quedará en blanco.
- La aplicación escribirá un triángulo con tantos asteriscos como indique el número de usuario.
- Para que el efecto sea más efectivo utilizaremos, para escribir los asteriscos, una letra monoespaciada.
*/
let num = window.prompt("Intruce un número positivo de altura triangulo: ");

for(let i = 0; i < num; i++){
    document.write("<p>");
    for(let j = 0; j <= i; j++){
        document.write("* ");
    }
    document.write("</p>");
}

