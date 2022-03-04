    var clave = new Number();
	document.write("Escoja la clave hacia a donde llama:",'<BR/>');
	document.write("(1) - 0.13$ - Estados Unidos ",'<BR/>');
	document.write("(2) - 0.11$ -Canada",'<BR/>');
	document.write("(3) - 0.52$ -America delsur",'<BR/>');
	document.write("(4) - 0.99$ -America central",'<BR/>');
	document.write("(5) - 0.17$ -Mexico",'<BR/>');
	document.write("(6) - 0.17$ -Europa",'<BR/>');
	document.write("(7) - 0.20$ -Asia",'<BR/>');
	document.write("(8) - 0.59$ -África",'<BR/>');
	document.write("(9) - 0.28$ -Oceania",'<BR/>');
	clave = Number(prompt(
		"Escoja la clave hacia a donde llama: 1 - EE.UU, 2 - Canada, 3 - America del Sur, 4 - America central, 5 - Mexico, 6 - Europa, 7 - Asia, 8 - África, 9 - Oceania" ));
	switch (clave) {
	case 1:
		document.write("¿Cuantos minutos duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.13*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 2:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.11*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 3:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.52*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 4:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.99*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 5:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.17*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 6:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.17*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 7:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.20*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 8:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.59*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 9:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt("¿Cuantos minutos duro la llamada?"));
		total = 0.28*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	default:
		document.write("Ingreso la clave incorrecta por favor repetir.",'<BR/>');
	}