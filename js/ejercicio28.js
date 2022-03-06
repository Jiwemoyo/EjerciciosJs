var n = new Number();
	var inv = new Number();
	var n1 = new Number();
	n = Number(prompt("Ingrese un numero"));
	document.getElementById("num").innerHTML=`Número ingresado: ${n}`
	n1 = n;
	inv = 0;
	do {
		inv = (inv*10)+(n%10);
		n = Math.trunc(n/10);
	} while (n>0);
	document.getElementById("ns").innerHTML=inv;
	if (inv==n1) {
		document.getElementById("si").innerHTML="El numero si es palindromo";
	} else {
		document.getElementById("no").innerHTML="El numero no es palindromo";
	}

		
