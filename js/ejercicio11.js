let anio;
anio = prompt("Ingrese el año");
anio = parseInt(anio)
if((anio%4==0) && (anio%100  !=0 || anio%400==0)) {
 document.getElementById("di").innerHTML=("Si es bisiesto");
}else{
    document.getElementById("di").innerHTML=("No es bisiesto");
}