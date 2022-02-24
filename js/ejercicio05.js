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
    document.write(`Su nota promedio es de: ${promedio} <br> El estudiante ${nombre} APROBO`)
    
} else {
    document.write(`Su nota promedio es de: ${promedio} <br> El estudiante ${nombre} REPROBO`)
    
}


