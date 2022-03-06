var nota = new Number();
	var nombre = new String();
	nombre = prompt("Ingrese el nombre del estudiante(para clasificarlo de acuerdo a su nota)");
	document.getElementById("cuatro").innerHTML=`El nombre del estudiante es: ${nombre}`;
	nota = Number(prompt("Ingrese la nota del estudiante (del 1 al 10)"));
	document.getElementById("cinco").innerHTML=`La nota del estudiante es: ${nota}`;
	
	if (nota>=0 && nota<=2) {
		document.getElementById("seis").innerHTML=`El  estudiante  ${nombre} necesita ¡REFORZAMIENTO!`;
	} else {
		if (nota>=3 && nota<=4) {
			document.getElementById("siete").innerHTML=`El  estudiante  ${nombre} esta ¡DESAPROBADO!`;
		} else {
			if (nota>=5 && nota<=7) {
				document.getElementById("ocho").innerHTML=`El  estudiante  ${nombre} esta ¡APROBADO!`;
			} else {
				if (nota>=8 && nota<=9) {
					document.getElementById("nueve").innerHTML=`El  estudiante  ${nombre} tiene un promedio ¡EXCELENTE!`;
				} else {
					if (nota==10) {
						document.getElementById("diez").innerHTML=`El  estudiante  ${nombre} esta ¡BECADO!`;
					} else {
						document.getElementById("once").innerHTML=("Nota no valida volver a ingresar",'<BR/>');
					}
				}
			}
		}
	}