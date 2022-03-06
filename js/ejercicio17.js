
	var n = new Number();
	var promedio = new Number();
	var i = new Number();
	var notas = new Number();
	var suma = new Number();
	suma = 0;
	notas = 0;
	promedio = 0;
	alert("Promedio de notas N")
	n = Number(prompt("Cuantas notas desea ingresar"));
	alert(`Usted va a ingresar ${n} notas`)
	for (i=1;i<=n;i++) {

		
		
		notas = Number(prompt(`Ingrese la ${i}ª nota`));
		
		suma = suma+notas;
	}
	promedio = suma/n;
	document.getElementById("notas").innerHTML=`Notas ingresadas: ${n}`
	

	document.getElementById("promedio").innerHTML=`El promedio de las tres notas es: ${promedio}`
