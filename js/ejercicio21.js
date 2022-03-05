

	var n = new Number();
	var inv = new Number();
	var n1 = new Number();
	var m = new Number();
	m = 0;
	do {
		
		n = Number(prompt("Ingrese un numero de 4 o cinco cifras"));
		n1 = n;
		inv = 0;
		do {
			inv = (inv*10)+(n%10);
			n = Math.trunc(n/10);
		} while (n>0);
		document.write(inv,'<BR/>');
		if (inv==n1) {
			document.write("El numero es palindromo",'<BR/>');
		} else {
			document.write("El numero no es palindromo",'<BR/>');
		}
	} while (m!=n);

