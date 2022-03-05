


	
	var num = new Number();
	var numpar = new Number();
	var numimpar = new Number();
	var contador = new Number();
	
	num = Number(prompt("Ingrese un numero para sumar sus pares eh impares"));
	numpar = 0;
	numimpar = 0;
	for (contador=1;contador<=num;contador++) {
		if (contador%2==0) {
			numpar = contador+numpar;
		} else {
			numimpar = contador+numimpar;
		}
	}

	document.getElementById("sub").innerHTML=`Has ingresado el numero ${num}`
	document.getElementById("sumaPar").innerHTML=`La suma de los pares es: ${numpar}`
	document.getElementById("sumaImpar").innerHTML=`la suma de los impares es ${numimpar}`
	
	
