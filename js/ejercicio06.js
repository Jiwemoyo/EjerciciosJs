//Si es vocal o no lo es
let letra = prompt("Dime una letra para saber si es vocal o no")

switch (letra) {
    case "a":
    case "A":
        
        document.getElementById("resultado1").innerHTML=(` ${letra} es una vocal`)
        break;
    case "e":
    case "E":
        document.getElementById("resultado1").innerHTML=(` ${letra} es una vocal`)
        break;
    case "i":
    case "I":
        document.getElementById("resultado1").innerHTML=(` ${letra} es una vocal`)
        break;
    case "o":
    case "O":
        document.getElementById("resultado1").innerHTML=(` ${letra} es una vocal`)
        break;
    case "u":
    case "U":
        document.getElementById("resultado1").innerHTML=(` ${letra} es una vocal`)
        break;

    default:
        document.getElementById("resultado1").innerHTML=(` ${letra} es una consonante`)
        break;
}

