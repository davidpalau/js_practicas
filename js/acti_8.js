
let num = window.prompt("Intruce un número positivo de altura triangulo: ");

for(let i = 0; i < num; i++){
    document.write("<p>");
    for(let j = i; j < num; j++){
        document.write("* ");
    }
    document.write("</p>");
}

for(let i = 0; i < num; i++){
    document.write("<p>");
    document.write("<pre>");
    for(let z = i; z < num; z++){
        document.write(" ");
    }
    for(let j = 0; j <= i; j++){
        document.write("* ");
    }
    document.write("</pre>");
    document.write("</p>");

    }
    document.write("<br>");
    for(let i = 0; i < num; i++){
        document.write("<p>");
        document.write("<pre>");
        for(let z = 0; z <= i; z++){
            document.write(" ");
        }
        for(let j = i; j < num; j++){
            document.write("* ");
        }
        document.write("</pre>");
        document.write("</p>");
    
        }