
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
