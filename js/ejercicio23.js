var num = new Number();
var sum = new Number();
var numfinal = new Number();
var contador = new Number();

num = Number(prompt("¡Dame un numero!"));
sum = 0;
for (contador=num+1;contador<=num*3;contador++) {
    if (contador%2==0) {
        sum = sum+contador;
    }
}


document.getElementById("resultado").innerHTML=sum;