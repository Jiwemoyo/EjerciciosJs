

	var n = new Number();
	var inv = new Number();
	var n1 = new Number();
	var m = new Number();
	m = 0;
	do {
		alert("palindromo")
		n = Number(prompt("Ingrese un numero de 4 o cinco cifras"));
		n1 = n;
		inv = 0;
		do {
			inv = (inv*10)+(n%10);
			n = Math.trunc(n/10);
		} while (n>0);
		
		if (inv==n1) {
			document.getElementById("subtitulo").innerHTML=`El numero: ${n1}`
			document.getElementById("resultado").innerHTML="Si es palindromo"
		} else {
			document.getElementById("subtitulo").innerHTML=`El numero: ${n1}`
			document.getElementById("resultado").innerHTML="No es palindromo"
		}
	} while (m!=n);

