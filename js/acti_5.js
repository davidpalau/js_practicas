/*
ACTIVIDAD 5 – Cálculo del salario
− Crear una aplicación web que pregunte, en dos casillas de lectura de datos: el nombre, apellido, salario
(número con decimales) y la edad de una persona (un número).
− Asumiremos que el usuario introduce los datos correctamente (no los validaremos).
− La página indicará el nombre y apellidos escritos, la edad y el salario (una vez recalculado con
lo que indican los siguientes puntos)
✓ Si el salario es superior a 2000 euros, no cambiará
✓ Si el salario está entre 1000 y 2000:
▪ Si además la edad es mayor de 45 años, se eleva en un 3%
▪ Si la edad es menor de 45 años o igual, se eleva en un 10%
✓ Si el salario indicado es inferior a 1000
▪ El salario para los menores de 30 años será exactamente de 1100 euros
▪ Si la edad está entre 30 y 45 años, el salario sube un 3%
▪ Para mayores de 45 años sube un 15%
*/
//Introdución de datos personales.
let nombre = window.prompt("Introduce tu nombre: ");
let apellidos = window.prompt("Introduce tu primer aplellido: ");
let apellidos_2 = window.prompt("Introduce tu sergundo aplellido: ");
let salario = prompt("Introduce tu salario, en número decicmales: ");
let edad = prompt("Introduce tu edad.")
// Muestra nombre y apellidos, no muestra edad no es necesario
document.write("<p>Nombre: "+ nombre +".</p>");
document.write("<p>Apellidos: " + apellidos +" " + apellidos_2 +".</p>")
//Segun el caso muestra el nuevo salario
if(salario > 2000){
    //Salario superior a 2000€ no cambia
    document.write("<p>Salario: "+ salario+"€.</p>" );
}else if(salario <= 2000 && salario >= 1000){
    //saslrio etre 2000 y 1000 cambia segun edad.
    if(edad > 45){
        //Mayores de 45 años sube un 3%
        document.write("<p>Salario: "+ (salario * 1.03) +"€.</p>" );
    }else if(edad <= 45){
        //Mayores de 45 años sube un 10%
        document.write("<p>Salario: "+ (salario * 1.10) +"€.</p>" );
    }
    
}else{
    //Encaso de inferior a 1000€
    if(edad < 30){
        //Menor a 30 años 2 
        document.write("<p>Salario: 1100€.</p>" );
    }else if(edad >= 30 && edad <= 45){
        //Entre 30 y 45
        document.write("<p>Salario: "+ (salario * 1.03) +"€.</p>" );
    }else{
        //más de 45
        document.write("<p>Salario: "+ (salario * 1.15) +"€.</p>" );
    }

}