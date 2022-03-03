function sumar() {
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value

    if (num1=="") {
        num1=0;
    }
    if(num2==""){
        num2=0;
    }
    var sumar=parseInt(num1)+parseInt(num2)
    document.getElementById("resultado").value=sumar
}
