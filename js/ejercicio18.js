function ejercicio_18() {
	// Hacer un programa que muestre el mayor de 10 n�meros ingresados
	var nmayor = new Number();
	var num = new Number();
	var i = new Number();
	document.write("Ingrese 10 numeros",'<BR/>');
	nmayor = 0;
	for (i=1;i<=10;i++) {
		num = Number(prompt("Ingrese 10 numeros"));
		if (nmayor<num) {
			nmayor = num;
		}
	}
	document.write("El numero mayo de los 10 digitos es: ",nmayor,'<BR/>');
	// Alessandro Cisneros
}
ejercicio_18()