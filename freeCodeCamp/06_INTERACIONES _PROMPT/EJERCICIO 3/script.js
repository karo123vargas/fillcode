// vereficar contraseña y usuario 
function userName(){
    let userName =prompt("por favor ingrese su usuario ");
let password =prompt("por favor ingrece su contraseña");

if(userName === "kmorales" && password === "123456"){
    alert("Acceso concedido");
} else {
    alert("Acceso denegado")
}
}


