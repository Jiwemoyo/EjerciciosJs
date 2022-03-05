
function calculo() {
    var par= document.getElementById("numeroPar")
    var impar= document.getElementById("numeroImpar")
    
    contenedor1=0
    contenedor2=0
    
    
    for (let index = 0; index < 5; index++) {

        var num = document.getElementById("ingreso").value
        num=parseInt(num)
        if (num%2 === 0) {
            
            contenedor1 = contenedor1+1
            par.innerHTML=contenedor1
        } else {
            
            contenedor2 = contenedor2+1
            impar.innerHTML=contenedor2
        } 
        
    

    }
   
    
     
        
    
 
    
    
}