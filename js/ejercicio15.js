// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function paresimpares() {
	// Elaborar un programa que permita ingresar 10 n�mero enteros y muestre la
	// cantidad de n�meros pares e impares ingresados
	var num = new Number();
	var imp = new Number();
	var parr = new Number();
	var contador = new Number();
	num = 0;
	parr = 0;
	imp = 0;
	for (contador=1;contador<=10;contador++) {
		
		num = Number(prompt("Ingrese un numero de un total de 10"));
		if (num%2==0) {
			parr = parr+1;
		} else {
			imp = imp+1;
		}
	}
	document.write("la cantidad de numeros pares ingresados es de: ",parr,'<BR/>');
	document.write("***********************************************",'<BR/>');
	document.write("la cantidad de numero impares es de: ",imp,'<BR/>');
	// Alessandro Cisneros
}
paresimpares()