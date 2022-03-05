
	var num = new Number();
	var d1 = new Number();
	var r1 = new Number();
	var d2 = new Number();
	var d3 = new Number();
	alert("COMPROBAR PALINDROMOS DE 3 CIFRAS:",'<BR/>');
	
	num = Number(prompt("Ingrese un numero de 3 cifras"));
	d1 = (num-(num%100))/100;
	r1 = num%100;
	d2 = (r1-(r1%10))/10;
	d3 = r1%10;
	document.write(" ",'<BR/>');
	if (num==((d3*100)+(d2*10)+d1)) {
		document.write("El numero es palindromo",'<BR/>');
	} else {
		document.write("El numero NO ES palindromo",'<BR/>');
	}


