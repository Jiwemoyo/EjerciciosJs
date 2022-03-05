
	var ca = new Number();
	var cd = new Number();
	var total = new Number();
	var pa = new Number();
	var pd = new Number();
	document.write("Ingrese la cantidad de aprobados",'<BR/>');
	ca = Number(prompt("Ingrese la cantidad de aprobados"));
	document.write("Ingrese la cantidad de desaprobados",'<BR/>');
	cd = Number(prompt("Ingrese la cantidad de desaprobados"));
	total = ca+cd;
	pa = ca*100/total;
	pd = cd*100/total;
	document.write("Porcentaje de aprobados: ",pa," % ",'<BR/>');
	document.write("Porcentaje de desaprobados: ",pd," % ",'<BR/>');
