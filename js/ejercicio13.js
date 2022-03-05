var radio = new Number();
	var perimetro = new Number();
	var area = new Number();
	document.write("Radio de la circunferencia: ",'<BR/>');
	radio = Number(prompt("Radio de la circunferencia: "));
	perimetro = (2*Math.PI)*radio;
	area = (perimetro*radio)/2;
	document.write("El perimetro del circulo es: ",perimetro,'<BR/>');
	document.write("El Area de la circunferencia es: ",area,'<BR/>');