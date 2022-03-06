
	
	var nmayor = new Number();
	var num = new Number();
	var i = new Number();
	aler("El mayor de los numeros")
	nmayor = 0;
	for (i=1;i<=10;i++) {
		num = Number(prompt(`Ingrese ${i}º de 10 numeros`));
		if (nmayor<num) {
			nmayor = num;
		}
	}
	document.getElementById("numMay").innerHTML=`El mayor de los diez numeros ingresados es: ${nmayor}`
	
	
