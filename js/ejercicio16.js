


	
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
	
