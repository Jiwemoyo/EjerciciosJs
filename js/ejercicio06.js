//Si es vocal o no lo es
let letra = prompt("Dime una letra para saber si es vocal o no")

switch (letra) {
    case "a":
    case "A":
        alert("Es una vocal")
        break;
    case "e":
    case "E":
        alert("Es una vocal")
        break;
    case "i":
    case "I":
        alert("Es una vocal")
        break;
    case "o":
    case "O":
        alert("Es una vocal")
        break;
    case "u":
    case "U":
        alert("Es una vocal")
        break;

    default:
        alert("Es una consonante")
        break;
}

document.getElementById("resultado1").innerHTML=letra