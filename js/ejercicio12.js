
	var ca = new Number();
	var cd = new Number();
	var total = new Number();
	var pa = new Number();
	var pd = new Number();
	ca = Number(prompt("Ingrese la cantidad de aprobados"));
	document.getElementById("ni").innerHTML=`Ingrese la cantidad de aprobados: ${ca} `;
	cd = Number(prompt("Ingrese la cantidad de desaprobados"));
	document.getElementById("in").innerHTML=`Ingrese la cantidad de desaprobados: ${cd} `;
	total = ca+cd;
	pa = ca*100/total;
	pd = cd*100/total;
	document.getElementById("di").innerHTML=`Porcentaje de aprobados:  ${pa} % `;
	document.getElementById("id").innerHTML=`Porcentaje de desaprobados:  ${pd} %`;



