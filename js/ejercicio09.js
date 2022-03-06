var cont, suma;
	var n = new Number();
	n = Number(prompt(("Ingrese un numero(Para que sea el limite al sumar de sus numeros naturales) ")));
	document.getElementById("in").innerHTML=`El numero limite es: ${n}`;
	cont = 0;
	suma = 0;
	while (cont<n) {
		cont = cont+1;
		suma = suma+cont;
	}
	document.getElementById("ni").innerHTML=`La suma de los numeros naturales es ${suma}`;