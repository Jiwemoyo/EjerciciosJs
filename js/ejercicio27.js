var nombre = new String();
var notas = new Number();
var i = new Number();
var contnot = new Number();
var n = new Number();
var prom = new Number();
var mejornota = new Number();
nombre = " ";
for (i=0;i<=2;i++) {
    prom = 0;
    document.write("Nombre del alumno: ",i+1,'<BR/>');
    nombre = prompt("Nombre del alumno: ");
    document.write("_____________________________________________________",'<BR/>');
    document.write("Numero de notas a ingresar: ",'<BR/>');
    n = Number(prompt("Numero de notas a ingresar: "));
    document.write("_____________________________________________________",'<BR/>');
    contnot = 1;
    while (contnot<=n) {
        document.write("Ingrese la nota",contnot+1-1," de ",nombre,'<BR/>');
        notas = Number(prompt("Ingrese la nota",contnot+1-1," de ",nombre));
        if (notas<0 || notas>100) {
            document.write("La nota no puede ser mayor que 100 ni menor 0, intenta de nuevo",'<BR/>');
            notas = Number(prompt("La nota no puede ser mayor que 100 ni menor 0, intenta de nuevo"));
            while (notas<0 || notas>100) {
                document.write("La nota no puede ser mayor que 100 ni menor 0, intenta de nuevo",'<BR/>');
                notas = Number(prompt("La nota no puede ser mayor que 100 ni menor 0, intenta de nuevo"));
            }
        }
        prom = prom+notas;
        contnot = contnot+1;
    }
    prom = prom/n;
    document.write("El promedio del alumno ",nombre," es: ",prom,'<BR/>');
    document.write("_____________________________________________________",'<BR/>');}