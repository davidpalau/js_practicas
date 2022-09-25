/*
❑ ACTIVITY 9 – Factorial
- Create a web page that asks the user for a positive integer and calculates its factorial
- The factorial of 5 (usually denoted as 5!) is the result of multiplying 1*2*3*4*5, that is: 120

❑ ACTIVIDAD 9 – Factoriales
- Crear una página web que le pida al usuario un número entero positivo y calcule su factorial
- El factorial de 5 (normalmente denotado como 5!) es el resultado de multiplicar 1*2*3*4*5, es decir: 120
*/

let num = window.prompt("Inbtroduce un número: ");
let numFact = 1;

for (let i = num; i >= 1; i--) {
    numFact = numFact * i;
    if(i == num){
        console.log(" " + num + "! = " + num + "*");
        document.write(" " + num + "! = " + num + "*");
    }else{

        if(i==1){
            document.write(i+ " = " + numFact + ".");
        }else{
            console.log(i+ "*" );
            document.write( i+ "*" );
        }
    }
    
    
}