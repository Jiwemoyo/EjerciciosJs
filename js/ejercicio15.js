var contador1 =0
var contador2 =0
var modulo =0
var numero=0
function calculo() {
    var numero = document.getElementById("ingreso").value

    var modulo =(numero%2)

    if (modulo==0) {
        var contador1 = contador1+1
    } else {
        var contador2 =contador2+1
    }
    console.log(contador1)
}