var cont, suma;
	var n = new Number();
	document.write("Ingrese un numero: ",'<BR/>');
	n = Number(prompt(("Ingrese un numero: ")));
	cont = 0;
	suma = 0;
	while (cont<n) {
		cont = cont+1;
		suma = suma+cont;
	}
	document.write("La suma es : ",suma,'<BR/>');