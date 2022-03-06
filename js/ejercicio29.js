
	var cifra, digito, num;
	
	document.write("Escriba un numero mayor de 3 cifras",'<BR/>');
	num = prompt("Escriba un numero mayor de 3 cifras");
	document.write("-----------------",'<BR/>');
	cifra = num;
	document.write(num,'<BR/>');
	document.write("-----------------",'<BR/>');
	while (cifra>1) {
		digito = cifra%10;
		cifra = (cifra-digito)/10;
		document.write(" cifra : ",cifra,'<BR/>');
	}

