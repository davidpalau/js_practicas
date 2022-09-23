let num = window.prompt("Introduce un número: ");
    num = parseInt(num, 10);
    if( isNaN(num)){

        window.alert("Muy mal, no has introducido un número.");
    }else{
        window.alert("Muy bien, has introducido un número.");
    }
