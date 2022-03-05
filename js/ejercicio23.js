


var num = new Number();
var sum = new Number();
var numfinal = new Number();
var contador = new Number();
document.write("Dame un numero : ",'<BR/>');
num = Number(prompt("¡Dame un numero!"));
sum = 0;
for (contador=num+1;contador<=num*3;contador++) {
    if (contador%2==0) {
        sum = sum+contador;
    }
}
document.write("la suma de los ",num," numero pares que vienen despues de ",num," es: ",sum,'<BR/>');