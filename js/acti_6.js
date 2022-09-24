/*❑ ACTIVIDAD 6 – Juego de adivinanzas de números
- Hacer una página web que implemente un juego de encontrar un número aleatorio bajo las premisas
se explica a continuación:
o La página calculará un número del 1 al 100
o Luego le pedirá al usuario el número
o Si el usuario escribe algo que no es un número, se indica el error y el
Se solicita nuevamente el número.
o Si el número introducido por el usuario es correcto, se indica que era correcto y
terminaremos el juego
o Si no, te dice si el número es menor o mayor y vuelve a preguntar cuál es
o Si se cancela alguna casilla, el juego termina indicando que el juego fue cancelado.
o Al final, si el juego se ha completado con éxito, el número de intentos es
indicado
o El usuario puede volver a jugar usando un cuadro de confirmación
*/
var mayor = 100;
var menor = 1;
let aleatorio = Math.trunc(Math.random() * (mayor - menor) + menor);
alert("El númerop es " + aleatorio);
let num = prompt("Introduce un número mayor de " + menor + " y menor de " + mayor +":" );
introduceNum(num);
function introduceNum(num ){


   if( isNaN(num)){
    alert("No has introducido un número valido, intentalo de nuevo.");
   }else{
    if( num == aleatorio){
        document.write("Has acertado el número es el " + aleatorio + ", el juego ha terminado.");
       }else if( num < aleatorio){
        menor  =  num;
 
        num = prompt("El número es mayor, intentalo de nuevo esta entre, " + menor + " y " + mayor +":" );
        introduceNum(num);
       }else if( num > aleatorio){
        mayor = num;

        num = prompt("El número es menor, intentalo de nuevo esta entre, " + menor + " y " + mayor +":" );
        introduceNum(num);
       }
   }

//prueba commit 

}


