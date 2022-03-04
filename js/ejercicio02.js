// Realizar un programa en el que se ingresen los datos de un trabajador y nos de como resultado el sueldo que debe obtener en base a sus horas trabajadas
/*let nombre =prompt("Ingrese el nombre del trabajador: ")
let horasTrabajadas = prompt("Horas trabajadas al mes?")
let valorHora =prompt("Cuanto gana por hora?")
sueldo =parseInt(horasTrabajadas)*parseInt(valorHora)

document.write(`El trabajador ${nombre} debe recibir una remuneracion de ${sueldo}`)*/


function nombre() {
    var nombreT = document.getElementById("trabajador").value
    var horasTrabajadas = document.getElementById("trabajoH").value
    var gananciaHora = document.getElementById("gananciaH").value
    var factura=document.getElementById("Resultado").innerHTML
   

    var sueldo= parseInt(horasTrabajadas)*parseInt(gananciaHora)

    document.getElementById("Resultado").innerHTML =`El sueldo del trabajador:${nombreT} es de: ${sueldo} $`
}

