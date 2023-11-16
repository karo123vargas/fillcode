//vereficar la temperatura 
function temp(){
    let temp =prompt("por favor ingrese una temperatura  : ")
if( temp < 0){
    alert("Hace mucho frio : " + temp + "°C");
}else if (temp > 0 && temp < 25){
    alert("La temperatura es agradable :"  + temp + "°C");
} 
    else {
        alert("Hace calor: " + temp + "°C");
    }
}
