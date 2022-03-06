var cont, suma;
	var n = new Number();
	n = Number(prompt("Ingrese un numero(Qpara que sea el limite para la suma de sus numeros naturales) "));
	document.getElementById("ni").innerHTML=`El numero limite es: ${n}`;
	cont = 0;
	suma = 0;
	do {
		cont = cont+1;
		suma = suma+cont;
	} while (cont<=n);
	document.getElementById("in").innerHTML=` La suma de numeros naturales es  ${suma}`;