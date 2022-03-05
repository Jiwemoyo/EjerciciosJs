// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function paresimpares() {
	// Ingresar un n�mero y mostrar la suma de todos los pares e impares desde 0
	// hasta el n�mero ingresado
	var num = new Number();
	var numpar = new Number();
	var numimpar = new Number();
	var contador = new Number();
	
	num = Number(prompt("Ingrese un numero para sumar sus pares eh impares"));
	numpar = 0;
	numimpar = 0;
	for (contador=1;contador<=num;contador++) {
		if (contador%2==0) {
			numpar = contador+numpar;
		} else {
			numimpar = contador+numimpar;
		}
	}
	document.write("Suma de pares: ",numpar,'<BR/>');
	document.write("suma de impares: ",numimpar,'<BR/>');
	// Alessandro Cisneros
}

paresimpares()