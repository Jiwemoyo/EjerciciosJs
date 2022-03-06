var cont, m, n, num, p, q;
var acumulador = new String();
num = prompt("Ingrese cualquier numero");
document.getElementById("digito").innerHTML=`Número ingresado: ${num}`

if (num<3) {
    document.write("Numero no adecuado ",'<BR/>');
} else {
    cont = num;
    acumulador = "";
    for (m=1;m<=3;m++) {
        acumulador = " ";
        for (n=1;n<=cont;n++) {
            acumulador = acumulador+" * ";
        }
        cont = cont-1;
        document.write(acumulador,'<BR/>');
    }
    cont = cont+1;
    for (q=1;q<=2;q++) {
        acumulador = " ";
        cont = cont+1;
        for (p=1;p<=cont;p++) {
            acumulador = acumulador+" * ";
        }
        document.write(acumulador,'<BR/>');
    }
}