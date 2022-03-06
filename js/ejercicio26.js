    var clave = new Number();
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
		document.write("¿Cuanto duro la llamada?",total,'<BR/>');
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