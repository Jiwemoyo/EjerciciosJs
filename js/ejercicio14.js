var num = new Number();
	var contador = new Number();
	var nummax = new Number();
	nummax = 0;
	num = 0;
	document.getElementById("ni").innerHTML=`Escriba tres numeros para mostrarle cual es el mayor de ellos `;
	for (contador=1;contador<=3;contador++) {
		num = Number(prompt("Escribe tres numeros: "));
		document.getElementById("in").innerHTML=`Escribe un numero ${num}`;
		
		if (num>nummax) {
			nummax = num;
		} else {
			num = 0;
		}
	}
	document.getElementById("di").innerHTML=`El numero de mayor rango es ${nummax}`;