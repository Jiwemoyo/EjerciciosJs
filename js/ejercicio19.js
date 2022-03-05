
	var n1 = new Number();
	var n2 = new Number();
	var n3 = new Number();
	var a = new Number();
	var b = new Number();
	var c = new Number();
	alert("Ingrese 3 numeros para ordenarlos");
	
	n1 = Number(prompt("Numero 1"));
	
	n2 = Number(prompt("Numero 2"));
	
	n3 = Number(prompt("Numero 3"));
	if ((n1>n2) && (n1>n3)) {
		a = n1;
		if (n2>n3) {
			b = n2;
			c = n3;
		} else {
			b = n3;
			c = n2;
		}
	} else {
		if (n2>n3) {
			a = n2;
			if (n1>n3) {
				b = n1;
				c = n3;
			} else {
				b = n3;
				c = n1;
			}
		} else {
			a = n3;
			if (n1>n2) {
				b = n1;
				c = n2;
			} else {
				b = n2;
				c = n1;
			}
		}
	}
	document.getElementById("ordenAs").innerHTML=`Orden ascendente: ${c} 🢚 ${b} 🢚 ${a}`
	document.getElementById("ordenDes").innerHTML=`Orden desscendente: ${a} 🢘 ${b} 🢘 ${c}`
	
