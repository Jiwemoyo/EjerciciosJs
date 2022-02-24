//Realizar un programa en el que se calcule la cuenta a pagar de un producto en base a su precio y cantidad después sacar el 10% de descuento para el total a pagar
let nombreProducto = prompt("Nombre del producto:")
let costoUnitario = prompt("Costo unitario")
let unidades = prompt("Unidades pedidas")

let subTotal = parseInt(costoUnitario)*parseInt(unidades)
let descuento =parseInt(subTotal)*0.1
let total =subTotal-descuento

document.write(`El sub total es de: ${subTotal} <br> Su descuento es de: ${descuento} <br>-----------------------------------<br> El total de su factura es: ${total}`)