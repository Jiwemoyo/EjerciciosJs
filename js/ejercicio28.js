var n = new Number();
	var inv = new Number();
	var n1 = new Number();
	document.write("-------------------------------------",'<BR/>');
	document.write("Ingrese un numero",'<BR/>');
	document.write("-------------------------------------",'<BR/>');
	n = Number(prompt("Ingrese un numero"));
	n1 = n;
	inv = 0;
	do {
		inv = (inv*10)+(n%10);
		n = Math.trunc(n/10);
	} while (n>0);
	document.write(inv,'<BR/>');
	if (inv==n1) {
		document.write("-------------------------------------",'<BR/>');
		document.write("El numero si es palindromo",'<BR/>');
		document.write("-------------------------------------",'<BR/>');
	} else {
		document.write("-------------------------------------",'<BR/>');
		document.write("El numero no es palindromo",'<BR/>');
		document.write("-------------------------------------",'<BR/>');
	}