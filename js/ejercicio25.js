var n1 = new Number();
var n2 = new Number();
var n3 = new Number();
document.write("Ingrese el primer número",'<BR/>');
n1 = Number(prompt("Ingrese el primer número"));
document.write("Ingrese el segundo número",'<BR/>');
n2 = Number(prompt("Ingrese el segundo número"));
document.write("Ingrese el tercer número",'<BR/>');
n3 = Number(prompt("Ingrese el tercer número"));
if ((n1!=n2 && n1!=n3 && n2!=n3)) {
    if ((n1>n2 && n1<n3 || n1>n3 && n1<n2)) {
        document.write("1. En la mitad esta: ",n1,'<BR/>');
    } else {
        if ((n2>n1 && n2<n3 || n2>n1 && n2<n3)) {
            document.write("2. En la mitad esta: ",n2,'<BR/>');
        } else {
            document.write("3. En la mitad esta: ",n3,'<BR/>');
        }
    }
} else {
    document.write("Los numeros no son diferente",'<BR/>');
}