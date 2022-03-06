var radio = new Number();
	var perimetro = new Number();
	var area = new Number();
	radio = Number(prompt("Radio de la circunferencia: "));
	document.getElementById("in").innerHTML=`Radio de la circunferencia: ${radio}`;
	
	perimetro = (2*Math.PI)*radio;
	area = (perimetro*radio)/2;
	document.getElementById("ni").innerHTML=`El  perimetro del circulo es : ${perimetro}`;
	document.getElementById("di").innerHTML=`El area de la circunferencia es : ${area}`;