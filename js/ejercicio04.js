//Calcular el área de un rectángulo, en un programa
let base = prompt("Cual es la base del rectangulo")
let altura = prompt("Cual es la altura del rectangulo")

let perimetro=(parseInt(base)*2)+(parseInt(altura)*2)
let area = parseInt(base)*parseInt(altura)
document.write(`El area del rectangulo es de: ${area} y su perimetro es de: ${perimetro}`)