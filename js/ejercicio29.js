// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function desglosamiento_de_numeros() {
	var cifra, digito, num;
	// Alessandro Cisneros, Ángeles Quinatoa, Jimmy Lorente, Brandon Caranqui
	// hecho por: Quinatoa Nagely
	// REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE NUMERICA GRAFICA:
	document.write("Escriba un número matoy de 3 cifras",'<BR/>');
	num = prompt();
	document.write("-----------------",'<BR/>');
	cifra = num;
	document.write(num,'<BR/>');
	document.write("-----------------",'<BR/>');
	while (cifra>1) {
		digito = cifra%10;
		cifra = (cifra-digito)/10;
		document.write(" cifra : ",cifra,'<BR/>');
	}
}

