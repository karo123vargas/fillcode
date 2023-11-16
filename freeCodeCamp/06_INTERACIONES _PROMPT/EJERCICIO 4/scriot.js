//vereficar si el numero es negativo o positivo

function determinarPositivo(){
    let Num =prompt("Ingrese un numero ");
if(Num < 0 ){
    alert("El numero" + Num + "Es negativo ");
}else if( Num == 0){
    alert("El numero es igual a 0");
}else{
    alert("El numero " + Num + "Es positivo ");
}
}
