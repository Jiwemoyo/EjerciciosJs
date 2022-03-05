var fecha = new String();
var d = new Number();
var m = new Number();
var a = new Number();
var b = new Number();
document.write("INGRESE FECHA DD/MM/AAAA : ");
fecha = prompt("INGRESE FECHA DD/MM/AAAA : ");
d = Number(String.substring(fecha,-1,2));
m = Number(String.substring(fecha,3,5));
a = Number(String.substring(fecha,6,10));
document.write("Día : ",d,'<BR/>');
document.write("Mes : ",m,'<BR/>');
document.write("Año : ",a,'<BR/>');
document.write("",'<BR/>');
if ((a>=1582 && a<=3000) && (m>=1 && m<=30) && (d>=1 && d<=31)) {
    if (((a%4)==0 && (a%100)!=0 || (a%400)==0)) {
        document.write("AÑO BISIESTO",'<BR/>');
        b = 0;
    } else {
        document.write("AÑO NO ES BISIESTO",'<BR/>');
        b = 1;
    }
    if (b==0) {
        switch (m) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if ((d>=1 && d<=31)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        case 2:
            if ((d>=1 && d<=29)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        case 4: case 6: case 9: case 11:
            if ((d>=1 && d<=30)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        }
    } else {
        switch (m) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if ((d>=1 && d<=31)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        case 2:
            if ((d>=1 && d<=28)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        case 4: case 6: case 9: case 11:
            if ((d>=1 && d<=30)) {
                document.write("FECHA CORRECTA",'<BR/>');
            } else {
                document.write("FECHA NO CORRECTA",'<BR/>');
            }
            break;
        }
    }
} else {
    document.write("Error en la fecha",'<BR/>');
}