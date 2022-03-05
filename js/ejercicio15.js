


	
	var num = new Number();
	var imp = new Number();
	var parr = new Number();
	var contador = new Number();
	num = 0;
	parr = 0;
	imp = 0;
	for (contador=1;contador<=10;contador++) {
		
		num = Number(prompt(`Ingrese el ${contador} numero de un total de 10`));
		if (num%2==0) {
			parr = parr+1;
		} else {
			imp = imp+1;
		}
	}

	var par=document.getElementById("par")
	var impar=document.getElementById("Impar")

	par.innerHTML=parr
	impar.innerHTML=imp 



