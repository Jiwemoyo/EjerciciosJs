var num = new Number();
	var contador = new Number();
	var nummax = new Number();
	nummax = 0;
	num = 0;
	document.write("Escriba 3 numeros para mostrarle cual es el mayor",'<BR/>');
	for (contador=1;contador<=3;contador++) {
		document.write("Escribe un numero: ",'<BR/>');
		num = Number(prompt("Escribe un numero: "));
		if (num>nummax) {
			nummax = num;
		} else {
			num = 0;
		}
	}
	document.write("El numero de mayor rango es: ",nummax,'<BR/>');