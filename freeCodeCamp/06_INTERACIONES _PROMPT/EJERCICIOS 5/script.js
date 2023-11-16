// vereficar la puntacion 
function puntacion(){
    let puntacion = parseInt(prompt (" ingrese puntacion"))
    if(puntacion < 0){
        alert("ingrese un dato valido");
} else if(puntacion >= 90){
    alert("Excelente");
}else if(puntacion >= 70 && puntacion <= 89){
    alert("Buen trabajo"); 
}else {
    alert("Necesitas mejorar ");
}
}