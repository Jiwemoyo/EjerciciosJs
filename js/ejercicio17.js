// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function promedion() {
	// Hacer un algoritmo que muestre el promedio de varias notas o de N notas
	// ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar.
	var n = new Number();
	var promedio = new Number();
	var i = new Number();
	var notas = new Number();
	var suma = new Number();
	suma = 0;
	notas = 0;
	promedio = 0;
	
	n = Number(prompt("Cuantas notas desea ingresar"));
	for (i=1;i<=n;i++) {
		
		notas = Number(prompt());
		suma = suma+notas;
	}
	promedio = suma/n;
	document.write("El promedio de las ",n," notas es de: ",promedio,'<BR/>');
}

promedion()