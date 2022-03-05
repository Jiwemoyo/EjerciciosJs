function calculo() {
    for (let index = 0; index < 5; index++) {
    var num = document.getElementById("ingreso").value
    var par= document.getElementById("numeroPar")
    var impar= document.getElementById("numeroImpar")
    num=parseInt(num)
    contenedor1=0
    contenedor2=0
    modulo=(num%2)

    }
    for (let index = 0; index < 5; index++) {
        if (modulo === 0) {
            contenedor1 = contenedor1+1
        } else {
            contenedor2 = contenedor2+1
        } 
    }
     
        
    
 
    par.innerHTML=contenedor1
    impar.innerHTML=contenedor2
}