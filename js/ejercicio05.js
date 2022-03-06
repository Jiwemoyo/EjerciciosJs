//promedios
let nombre = prompt("Nombre del estudiante: ")
let nota1 = prompt("ingrese la nota 1: ")
let nota2 = prompt("ingrese la nota 2:")
let nota3 = prompt("Ingrese la nota 3:")
nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

let promedio=(nota1+nota2+nota3)/3

if (promedio >= 6.95) {
    document.getElementById("resultado5").innerHTML= (`Su nota promedio es de: ${promedio} <br> El estudiante ${nombre} APROBO`)
    
} else {
    document.getElementById("resultado5").innerHTML= (`Su nota promedio es de: ${promedio} <br> El estudiante ${nombre} REPROBO`)
    
}

document.getElementById("resultado1").innerHTML= nombre
document.getElementById("resultado2").innerHTML= nota1
document.getElementById("resultado3").innerHTML= nota2
document.getElementById("resultado4").innerHTML= nota3



