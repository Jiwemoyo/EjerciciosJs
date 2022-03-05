var n1 = new Number();
var n2 = new Number();
var n3 = new Number();
n1 = Number(prompt("Ingrese el primer número"));
document.getElementById("primero").innerHTML=n1;
n2 = Number(prompt("Ingrese el segundo número"));
document.getElementById("segundo").innerHTML=n2;
n3 = Number(prompt("Ingrese el tercer número"));
document.getElementById("tercero").innerHTML=n3;
if ((n1!=n2 && n1!=n3 && n2!=n3)) {
    if ((n1>n2 && n1<n3 || n1>n3 && n1<n2)) {
        document.getElementById("mid").innerHTML=`El número de la mitad es: ${n1}`
    } else {
        if ((n2>n1 && n2<n3 || n2>n1 && n2<n3)) {
            document.getElementById("mid").innerHTML=`El número de la mitad es: ${n2}`
        } else {
            document.getElementById("mid").innerHTML=`El número de la mitad es: ${n3}`
        }
    }
} else {
    document.getElementById("error").innerHTML="ERROR: Los numeros no son diferentes";
}